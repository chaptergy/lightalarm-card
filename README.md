# Lovelace Lightalarm Card

This card provides a frontend for entities being used to control a light alarm.  
**It does not implement any lightalarm logic!** For more information on how I implemented the logic skip to [Lightalarm Logic](#lightalarm-logic)

![](https://raw.githubusercontent.com/chaptergy/lightalarm-card/master/img/screenshot1.png)

It displays three entities: an `input_datetime` as the time, an `input_select` as the alarm mode and an `input_number` as the fade duration the alarm should take.

## Installation

[![hacs_badge](https://img.shields.io/badge/HACS-Custom-orange.svg?style=for-the-badge)](https://github.com/custom-components/hacs)

#### HACS

1. Install the [Home Assistant Community Store](https://github.com/custom-components/hacs) if you do not have it already.
2. Go to the Community Store.
3. Click on the _Plugins_ tab.
4. Search for _Lightalarm Card_ and install it.

#### Manual Installation

1. Download and copy the `dist/lightalarm-card.js` file into your `config/www` directory.
2. Add a reference to `lightalarm-card.js` inside your ui-lovelace.yaml or at the top of the raw config editor UI:

```yaml
resources:
  - url: /local/lightalarm-card.js
    type: module
```

## Lightalarm Logic

If you do not have your custom lightalarm logic, here is how I implemented mine. Your lamp will need to support the `transition` property for this to work.

Fist you'll need to add three new entities into your `configuration.yaml`:

```yaml
input_datetime:
  lightalarm_time:
    name: Alarm Time
    has_date: false
    has_time: true

input_number:
  lightalarm_duration:
    name: Alarm Duration
    unit_of_measurement: min
    initial: 12
    min: 0
    max: 120
    step: 1

input_select:
  lightalarm_options:
    name: Alarm Mode
    initial: Workdays When Present
    options:
      - Off
      - Workdays When Present
      - Workdays
      - Once Only
      - Every Day
```

Then with these entities we can create a new automation which triggers, when all conditions are met. Add this to your `automation:` section or your `automations.yaml`. What it does, will be explained below.

```yaml
- id: lightalarm
  alias: Lightalarm
  hide_entity: false
  trigger:
    platform: template
    value_template: "{% set currentTimeInMinutes = ((states('sensor.time')[:2] |
      float) * 60) + (states('sensor.time')[3:5] | float) - (states('sensor.time')
      | float) %} {% set alarmTimeInMinutes = ((states('input_datetime.lightalarm_time')[:2]
      | float) * 60) + (states('input_datetime.lightalarm_time')[3:5] | float) -
      (states('input_number.lightalarm_duration') | float) %} {{ currentTimeInMinutes
      == alarmTimeInMinutes }}"

  condition:
    condition: or
    conditions:
    - condition: state
      entity_id: input_select.lightalarm_options
      state: Every Day
    - condition: state
      entity_id: input_select.lightalarm_options
      state: Once Only
    - condition: and
      conditions:
      - condition: state
        entity_id: input_select.lightalarm_options
        state: Workdays
      - condition: template
        value_template: '{{ now().weekday() < 5 }}'
   - condition: and
     conditions:
     - condition: state
       entity_id: input_select.lightalarm_options
       state: Workdays When Present
     - condition: template
       value_template: '{{ now().weekday() < 5 }}'
     - condition: or
       conditions:
       - condition: state
         entity_id: person.chaptergy
         state: home
       - condition: state
         entity_id: person.other_person
         state: home

  action:
    service: script.trigger_lightalarm
```

The `value_template` value is kind of ugly, however all it does, is converting both the current time als well as the lightalarm time to minutes, subtracts the lightalarm duration from the lightalarm time, and checks if it is equal to the current time.  
If it is, the other conditions will be checked. If any condition fails, the action will not be executed. Here is a description of what the condition is:

```
[ Is the mode "Every Day"? ]
OR
[ Is the mode "Once Only"? ]
OR
[ Is the mode "Workdays" AND is the current weekday between 0 and 4 (monday-friday)? ]
OR
[ Is the mode "Workdays When Present" AND is the current weekday between 0 and 4 (monday-friday) AND is any person home? ]
```

If you want to get even fancier, you could replace the `{{ now().weekday() < 5 }}` condition with a [workday sensor](https://www.home-assistant.io/integrations/workday/) to include holidays.
When the condition succeeds, we run a script `script.trigger_lightalarm` which we'll also need to create now. So add this to your `script:` section or your `scripts.yaml`.

```yaml
trigger_lightalarm:
  alias: Trigger the lightalarm
  sequence:
    - service: light.turn_on
      data_template:
        entity_id: light.bedside_lamp
        rgb_color:
          - 255
          - 91
          - 36
        brightness: 255
        transition: "{{ states('input_number.lightalarm_duration') | float | multiply(60) }}"
    - event: lightalarm_triggered
    - condition: state
      entity_id: input_select.lightalarm_options
      state: Once Only
    - service: input_select.select_option
      data:
        entity_id: input_select.lightalarm_options
        option: Off
```

This script then switches on the lap to full brightness, while the transition property will make it fade in slowly. The duration is converted from minutes to seconds, because the transition expects the number of seconds it should take to transition.  
Then a custom event `lightalarm_triggered` is fired, so we could create more automations listening for this event, like the bathroom heater switching on. You can remove this line if you do not plan on triggering anything else.

Now the last thing to check is if the mode was set to `Once Only` and if it was, set it to `Off`. A condition in a script exits the script if the condition fails, and the following things are only executed if it succeeds.
