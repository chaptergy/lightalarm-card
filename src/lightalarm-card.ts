import { LitElement, html, customElement, property, CSSResult, TemplateResult, css, PropertyValues } from 'lit-element';
import { repeat } from 'lit-html/directives/repeat';
import {
  HomeAssistant,
  hasConfigOrEntityChanged,
  LovelaceCardEditor,
  computeStateName,
  forwardHaptic,
  computeRTLDirection,
} from 'custom-card-helpers';

import './editor';

import { LightalarmCardConfig } from './types';
import { CARD_VERSION } from './const';

import { localize } from './localize/localize';

/* eslint no-console: 0 */
console.info(
  `%c  LIGHTALARM-CARD \n%c  Version ${CARD_VERSION}   `,
  'color: orange; font-weight: bold; background: black',
  'color: white; font-weight: bold; background: dimgray'
);

@customElement('lightalarm-card')
export class LightalarmCard extends LitElement {
  public static async getConfigElement(): Promise<LovelaceCardEditor> {
    return document.createElement('lightalarm-card-editor') as LovelaceCardEditor;
  }

  public static getStubConfig(): object {
    return {};
  }

  @property() public hass?: HomeAssistant;
  @property() private _config?: LightalarmCardConfig;

  public setConfig(config: LightalarmCardConfig): void {
    if (!config) throw new Error(localize('config.invalid_configuration'));

    if (!config.time_entity) throw new Error(localize('config.required_entity_missing', '%entity%', localize('config.time_entity')));
    if (!config.mode_entity) throw new Error(localize('config.required_entity_missing', '%entity%', localize('config.mode_entity')));
    if (!config.duration_entity)
      throw new Error(localize('config.required_entity_missing', '%entity%', localize('config.duration_entity')));

    this._config = config;
  }

  protected shouldUpdate(changedProps: PropertyValues): boolean {
    const shouldUpdate = hasConfigOrEntityChanged(this, changedProps, false);
    // Only check if it doesn't update anyway
    if (!shouldUpdate) {
      const changedHass: HomeAssistant = changedProps['hass'];
      return (
        !changedHass || // hass is not set
        changedHass.states[this._config!.time_entity] !== this.hass!.states[this._config!.time_entity] ||
        changedHass.states[this._config!.mode_entity] !== this.hass!.states[this._config!.mode_entity] ||
        changedHass.states[this._config!.duration_entity] !== this.hass!.states[this._config!.duration_entity]
      );
    }
    return shouldUpdate;
  }

  protected render(): TemplateResult | void {
    if (!this._config || !this.hass) {
      return html``;
    }

    const timeStateObj = this.hass.states[this._config.time_entity];
    if (!timeStateObj) {
      return html`
        <hui-warning>${this.hass.localize('config.required_entity_not_found', '%entity%', this._config.time_entity)}</hui-warning>
      `;
    }

    const modeStateObj = this.hass.states[this._config.mode_entity];
    if (!modeStateObj) {
      return html`
        <hui-warning>${this.hass.localize('config.required_entity_not_found', '%entity%', this._config.mode_entity)}</hui-warning>
      `;
    }

    const durationStateObj = this.hass.states[this._config.duration_entity];
    if (!durationStateObj) {
      return html`
        <hui-warning>${this.hass.localize('config.required_entity_not_found', '%entity%', this._config.duration_entity)}</hui-warning>
      `;
    }

    return html`
      <ha-card .header=${this._config.name} tabindex="0">
        <div class="lightalarm-wrapper">
          <svg viewBox="0 0 24 24" class="alarm-time-decorator">
            <path
              d="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22A9,9 0 0,0 21,13A9,9 0 0,0 12,4M7.88,3.39L6.6,1.86L2,5.71L3.29,7.24L7.88,3.39M22,5.72L17.4,1.86L16.11,3.39L20.71,7.25L22,5.72Z"
            />
          </svg>
          <paper-time-input
            class="alarm-time"
            .hour=${timeStateObj.state === 'unknown' ? '' : ('0' + timeStateObj.attributes.hour).slice(-2)}
            .min=${timeStateObj.state === 'unknown' ? '' : ('0' + timeStateObj.attributes.minute).slice(-2)}
            .amPm=${false}
            @change=${this._selectedTimeValueChanged}
            @click=${this._stopEventPropagation}
            hide-label
            format="24"
          ></paper-time-input>

          <ha-paper-dropdown-menu
            class="alarm-mode"
            selected-item-label="${modeStateObj.state}"
            @selected-item-label-changed="${this._selectedModeChanged}"
            label="${computeStateName(modeStateObj)}"
          >
            <paper-listbox slot="dropdown-content" selected="${modeStateObj.attributes.options.indexOf(modeStateObj.state)}">
              ${repeat(
                modeStateObj.attributes.options,
                (option) =>
                  html`
                    <paper-item>${option}</paper-item>
                  `
              )}
            </paper-listbox>
          </ha-paper-dropdown-menu>

          <div class="alarm-duration">
            <label slot="label" for="duration-input">${computeStateName(durationStateObj)}</label>
            <div class="alarm-duration-slider">
              <ha-slider
                .dir="${computeRTLDirection(this.hass!)}"
                .step="${Number(durationStateObj.attributes.step)}"
                .min="${Number(durationStateObj.attributes.min)}"
                .max="${Number(durationStateObj.attributes.max)}"
                .value="${Number(durationStateObj.state)}"
                pin
                @change="${this._selectedDurationValueChanged}"
                ignore-bar-touch
                id="duration-input"
              ></ha-slider>
              <span>
                ${Number(durationStateObj.state)} ${durationStateObj.attributes.unit_of_measurement}
              </span>
            </div>
          </div>
        </div>
      </ha-card>
    `;
  }

  private _stopEventPropagation(ev: Event): void {
    ev.stopPropagation();
  }

  private _selectedTimeValueChanged(ev): void {
    const stateObj = this.hass!.states[this._config!.time_entity];
    const timeInputEl = this.shadowRoot!.querySelector<HTMLInputElement>('.alarm-time')!;
    const time = timeInputEl !== null ? timeInputEl.value.trim() + ':00' : undefined;

    if (time !== stateObj.state) {
      this.hass!.callService(stateObj.entity_id.split('.', 1)[0], 'set_datetime', { entity_id: stateObj.entity_id, time, undefined });
    }

    ev.target.blur();
  }

  private _selectedModeChanged(ev): void {
    forwardHaptic('light');
    // Selected Option will transition to '' before transitioning to new value
    const stateObj = this.hass!.states[this._config!.mode_entity];
    if (!ev.target.selectedItem || ev.target.selectedItem.innerText === '' || ev.target.selectedItem.innerText === stateObj.state) {
      return;
    }

    this.hass!.callService('input_select', 'select_option', {
      option: ev.target.selectedItem.innerText,
      entity_id: stateObj.entity_id,
    });
  }

  private _selectedDurationValueChanged(): void {
    const durationInputEl = this.shadowRoot!.querySelector<HTMLInputElement>('#duration-input')!;
    const stateObj = this.hass!.states[this._config!.duration_entity];

    if (durationInputEl.value !== stateObj.state) {
      this.hass!.callService(stateObj.entity_id.split('.', 1)[0], 'set_value', {
        value: durationInputEl.value!,
        entity_id: stateObj.entity_id,
      });
    }
  }

  static get styles(): CSSResult {
    return css`
      .lightalarm-wrapper {
        display: grid;
        grid-template-columns: 0fr 1fr;
        grid-template-rows: 1fr 1fr;
        max-width: 100%;
        padding: 5px 15px 5px 0;
        grid-gap: 0 10px;
      }
      .lightalarm-wrapper .alarm-time-decorator,
      .lightalarm-wrapper .alarm-time {
        grid-column: 1;
        grid-row: 1 / span 2;
        align-self: center;
        justify-self: center;
      }
      .lightalarm-wrapper .alarm-time-decorator {
        width: 100%;
        fill: var(--paper-item-icon-color, --text-color);
        opacity: 0.3;
      }
      .lightalarm-wrapper .alarm-time {
        margin: 8px 25px 0 25px;
      }

      .lightalarm-wrapper .alarm-mode {
        grid-column: 2;
        grid-row: 1;
        width: 100%;
        align-self: center;
      }

      .lightalarm-wrapper .alarm-duration {
        grid-column: 2;
        grid-row: 2;
        width: 100%;
        align-self: center;
      }
      .lightalarm-wrapper .alarm-duration label {
        font-family: var(--paper-font-subhead_-_font-family);
        -webkit-font-smoothing: var(--paper-font-subhead_-_-webkit-font-smoothing);
        font-size: calc(var(--paper-font-subhead_-_font-size) * 0.75);
        font-weight: var(--paper-font-subhead_-_font-weight);
        line-height: var(--paper-font-subhead_-_line-height);
        -webkit-transform-origin: left bottom;
        transform-origin: left bottom;
        -webkit-transform: scale(0.75);
        transform: scale(0.75);
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }
      .lightalarm-wrapper .alarm-duration-slider {
        display: flex;
        align-items: center;
      }
      .lightalarm-wrapper .alarm-duration-slider ha-slider {
        flex-grow: 1;
        width: auto;
        margin-left: calc(-15px - var(--calculated-paper-slider-height) / 2);
      }
    `;
  }
}
