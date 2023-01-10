import {
  LitElement,
  html,
  customElement,
  property,
  TemplateResult,
  CSSResult,
  css,
  internalProperty,
} from 'lit-element';
import { HomeAssistant, fireEvent, LovelaceCardEditor } from 'custom-card-helpers';

import { LightalarmCardConfig } from './types';
import { localize } from './localize/localize';

@customElement('lightalarm-card-editor')
export class LightalarmCardEditor extends LitElement implements LovelaceCardEditor {
  @property({ attribute: false }) public hass?: HomeAssistant;
  @internalProperty() private _config?: LightalarmCardConfig;

  public setConfig(config: LightalarmCardConfig): void {
    this._config = config;
  }

  get _title(): string {
    if (this._config) {
      return this._config.name || '';
    }

    return '';
  }

  get _time_entity(): string {
    if (this._config) {
      return this._config.time_entity || '';
    }

    return '';
  }

  get _mode_entity(): string {
    if (this._config) {
      return this._config.mode_entity || '';
    }

    return '';
  }

  get _duration_entity(): string {
    if (this._config) {
      return this._config.duration_entity || '';
    }

    return '';
  }

  get _force_native_time_picker_for_device(): boolean {
    return localStorage.getItem('lightalarmCard.forceNativePicker') === 'true';
  }

  protected render(): TemplateResult | void {
    if (!this.hass) {
      return html``;
    }

    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).loadCardHelpers();
    } catch (e) {}

    // You can restrict on domain type
    const time_entities = Object.keys(this.hass.states).filter(
      eid => eid.substr(0, eid.indexOf('.')) === 'input_datetime',
    );
    const mode_entities = Object.keys(this.hass.states).filter(
      eid => eid.substr(0, eid.indexOf('.')) === 'input_select',
    );
    const duration_entities = Object.keys(this.hass.states).filter(
      eid => eid.substr(0, eid.indexOf('.')) === 'input_number',
    );

    return html`
      <div class="card-config">
        <ha-textfield
          label="${localize('config.name')} (${localize('config.optional')})"
          .value=${this._title}
          .configValue=${'name'}
          @input=${this._valueChanged}
          class="padding-bottom full-width"
        ></ha-textfield>

        <div class="indent">
          <ha-select
            label="${localize('config.time_entity')}"
            @selected=${this._valueChanged}
            .configValue=${'time_entity'}
            .value=${this._time_entity}
            class="padding-bottom full-width"
          >
            ${time_entities.map(entity => {
              return html`
                <mwc-list-item .value="${entity}">${entity}</mwc-list-item>
              `;
            })}
          </ha-select>
          <br />
          <ha-select
            label="${localize('config.mode_entity')}"
            @selected=${this._valueChanged}
            .configValue=${'mode_entity'}
            .value=${this._mode_entity}
            class="padding-bottom full-width"
          >
            ${mode_entities.map(entity => {
              return html`
                <mwc-list-item .value="${entity}">${entity}</mwc-list-item>
              `;
            })}
          </ha-select>
          <br />
          <ha-select
            label="${localize('config.duration_entity')}"
            @selected=${this._valueChanged}
            .configValue=${'duration_entity'}
            .value=${this._duration_entity}
            class="padding-bottom full-width"
          >
            ${duration_entities.map(entity => {
              return html`
                <mwc-list-item .value="${entity}">${entity}</mwc-list-item>
              `;
            })}
          </ha-select>
        </div>
        <br />
        <ha-switch
          .checked=${this._force_native_time_picker_for_device}
          .configValue=${'force_native_time_picker_for_device'}
          @change=${this._valueChanged}
        ></ha-switch>
        <span class="switch-label">${localize('config.force_native_time_picker_for_device')}</span>
      </div>
    `;
  }

  private _valueChanged(ev): void {
    if (!this._config || !this.hass) {
      return;
    }
    const target = ev.target;
    if (this[`_${target.configValue}`] === target.value) {
      return;
    }
    if (target.configValue) {
      if (target.configValue === 'force_native_time_picker_for_device') {
        localStorage.setItem('lightalarmCard.forceNativePicker', target.checked ? 'true' : 'false');
      } else {
        this._config = {
          ...this._config,
          [target.configValue]: target.checked !== undefined ? target.checked : target.value,
        };
      }
    }
    fireEvent(this, 'config-changed', { config: this._config });
  }

  static get styles(): CSSResult {
    return css`
      .padding-bottom {
        padding-bottom: 8px;
      }
      .full-width {
        width: 100%;
      }
      .switch-label {
        padding-left: 10px;
      }
    `;
  }
}

const wdw = window as any;
wdw.customCards = wdw.customCards || [];
wdw.customCards.push({
  type: 'lightalarm-card',
  name: 'Lightalarm Card',
  preview: false,
  description: 'Coordinate light alarm settings in a beautiful way',
});
