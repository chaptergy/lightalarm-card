# Lovelace Lightalarm Card

This card provides a frontend for entities being used to control a light alarm.  
**It does not implement any lightalarm logic!** For more information on how I implemented the logic see the [Readme](https://github.com/chaptergy/lightalarm-card#lightalarm-logic)

If you have an **iOS Device** and would like to use the builtin time picker, have a look at [Force Native Timepicker](#force-native-timepicker).

![](https://raw.githubusercontent.com/chaptergy/lightalarm-card/master/img/screenshot1.png)
![](https://raw.githubusercontent.com/chaptergy/lightalarm-card/master/img/screenshot2.png)

It displays three entities: an `input_datetime` as the time, an `input_select` as the alarm mode and an `input_number` as the fade duration the alarm should take.

## Installation

[![hacs_badge](https://img.shields.io/badge/HACS-Default-orange.svg?style=for-the-badge)](https://github.com/custom-components/hacs)

#### HACS

1. Install the [Home Assistant Community Store](https://github.com/custom-components/hacs) if you do not have it already.
2. Go to the Community Store.
3. Click on the _Plugins_ tab.
4. Search for _Lightalarm Card_ and install it.
5. HACS will ask you to add it to your lovelace, click on yes.

#### Manual Installation

1. Download and copy the `dist/lightalarm-card.js` file into your `config/www` directory.
2. Add a reference to `lightalarm-card.js` inside your ui-lovelace.yaml or at the top of the raw config editor UI:

```yaml
resources:
  - url: /local/lightalarm-card.js
    type: module
```

## Options

| Name            | Type   | Requirement  | Description                                  |
| --------------- | ------ | ------------ | -------------------------------------------- |
| type            | string | **Required** | `custom:lightalarm-card`                     |
| name            | string | **Optional** | Card title                                   |
| time_entity     | string | **Required** | `input_datetime` entity to select alarm time |
| mode_entity     | string | **Required** | `input_select` entity to select alarm mode   |
| duration_entity | string | **Required** | `input_number` entity to set fade duration   |

## Force Native Timepicker

In the visual editor of the lovalace card, you have an additional option to _Force use of the native time picker_. By default when tapping the alarm time, the card tries to open the native timepicker popup, and but also falls back to two input fields, for browsers, who don't have a popup time picker interface. This works very well on Android devices, however on iOS devices, the focus is overwritten by the fallback input fields, hiding the time picker right away. If you are certain, that your browser offers a better timepicker, you can switch this switch on, to enforce using the browser native time picker. This setting will be saved in the local storage (similar to cookies), so it can be a different value per separate browser instance.

![](https://raw.githubusercontent.com/chaptergy/lightalarm-card/master/img/screenshot_native-timepicker-ios.jpg)
