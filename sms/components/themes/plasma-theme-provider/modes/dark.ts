import Color from 'color';

import { ThemeModeConfig } from '../types';

const dark: ThemeModeConfig = {
  colors: {
    primary: '#0075be',
    secondary: '#7c7c7c',
    error: '#fa4d56',
    success: '#42be65',
    warning: '#f1c21b',
    info: '#1192e8',
    text: '#f4f4f4',
    white: '#fff',
    lightgray: '#f4f4f4',
    darkgray: '#161616',
    black: '#000',
    disabled: '#c6c6c6',
  },
  body: {
    bgColor: '#161616',
  },
  alert: {
    get textColor() {
      return dark.colors.text;
    },
    get successBorderColor() {
      return dark.colors.success;
    },
    successBgColor: '#262626',
    get infoBorderColor() {
      return dark.colors.info;
    },
    infoBgColor: '#262626',
    get warningBorderColor() {
      return dark.colors.warning;
    },
    warningBgColor: '#262626',
    get errorBorderColor() {
      return dark.colors.error;
    },
    errorBgColor: '#262626',
  },
  autoComplete: {
    get textColor() {
      return dark.colors.text;
    },
    textColorItem: '#fff',
    textColorDisabled: '#c6c6c6',
    iconColor: '#a8a8a8',
    placeholderColor: '#8d8d8d',
    borderColor: '#8d8d8d',
    borderColorHover: '#8d8d8d',
    get borderColorActive() {
      return dark.colors.primary;
    },
    get borderColorItem() {
      return dark.colors.primary;
    },
    borderColorDisabled: 'transparent',
    backgroundColor: '#393939',
    backgroundColorActive: '#393939',
    backgroundColorHover: '#393939',
    get backgroundColorItem() {
      return dark.colors.primary;
    },
    backgroundColorDisabled: '#393939',
    backgroundColorOpen: '#393939',
  },
  badge: {
    get textColor() {
      return dark.colors.text;
    },
    backgroundColor: '#ffb329',
  },
  button: {
    //.ant-btn-primary
    primaryTextColor: '#fff',
    get primaryBgColor() {
      return dark.colors.primary;
    },
    get primaryBorderColor() {
      return dark.colors.primary;
    },
    primaryBgColorHover: '#00539a',
    primaryBorderColorHover: '#00539a',
    get primaryBgColorFocus() {
      return dark.colors.primary;
    },
    primaryBorderColorFocus: '#00539a',
    primaryBgColorActive: '#003a6d',
    primaryBorderColorActive: '#003a6d',
    //.ant-btn (only the default button class is necessary)
    secondaryTextColor: '#fff',
    secondaryBgColor: '#393939',
    secondaryBorderColor: '#393939',
    secondaryBgColorHover: '#4c4c4c',
    secondaryBorderColorHover: '#4c4c4c',
    secondaryBgColorFocus: '#393939',
    get secondaryBorderColorFocus() {
      return dark.colors.primary;
    },
    secondaryBgColorActive: '#6f6f6f',
    secondaryBorderColorActive: '#6f6f6f',
    //.ant-btn-background-ghost
    get tertiaryTextColor() {
      return dark.colors.primary;
    },
    tertiaryBgColor: 'transparent',
    get tertiaryBorderColor() {
      return dark.colors.primary;
    },
    tertiaryTextColorHover: '#fff',
    get tertiaryBgColorHover() {
      return dark.colors.primary;
    },
    get tertiaryBorderColorHover() {
      return dark.colors.primary;
    },
    tertiaryTextColorFocus: '#fff',
    get tertiaryBgColorFocus() {
      return dark.colors.primary;
    },
    tertiaryBorderColorFocus: '#00539a',
    tertiaryTextColorActive: '#fff',
    tertiaryBgColorActive: '#003a6d',
    tertiaryBorderColorActive: '#003a6d',
    //.ant-btn-link
    get iconColor() {
      return dark.colors.primary;
    },
    get linkTextColor() {
      return dark.colors.primary;
    },
    linkBgColor: 'transparent',
    linkBorderColor: 'transparent',
    get linkTextColorHover() {
      return dark.colors.primary;
    },
    linkBgColorHover: '#393939',
    linkBorderColorHover: '#4c4c4',
    get linkTextColorFocus() {
      return dark.colors.primary;
    },
    linkBgColorFocus: '#4c4c4c',
    get linkBorderColorFocus() {
      return dark.colors.primary;
    },
    get linkTextColorActive() {
      return dark.colors.primary;
    },
    linkBgColorActive: '#6f6f6f',
    linkBorderColorActive: '#6f6f6f',
    //.ant-btn-dangerous
    dangerTextColor: '#fff',
    dangerTextGhostColor: '#e3000f',
    dangerBgColor: '#e3000f',
    dangerBorderColor: '#e3000f',
    dangerBgColorHover: '#ba1b23',
    dangerBorderColorHover: '#ba1b23',
    dangerBgColorFocus: '#e3000f',
    get dangerBorderColorFocus() {
      return dark.colors.primary;
    },
    dangerBgColorActive: '#750e13',
    dangerBorderColorActive: '#750e13',
    //.ant-btn-text
    textButtonColor: '#ffffff',
    //disabled
    buttonTextColorDisabled: '#8d8d8d',
    buttonBgColorDisabled: '#c6c6c6',
    buttonBorderColorDisabled: '#c6c6c6',
  },
  card: {
    cardBgColor: '#393939',
    cardBorderColor: '#161616',
    descriptionColor: '#a8a8a8',
    editCardBgColor: '#262626',
    newCardBgColor: '#393939',
    get titleColor() {
      return dark.colors.text;
    },
  },
  checkbox: {
    get textColor() {
      return dark.colors.text;
    },
    textColorDisabled: '#8d8d8d',
    borderColor: '#f4f4f4',
    get borderColorChecked() {
      return dark.colors.primary;
    },
    get borderColorFocused() {
      return dark.colors.primary;
    },
    borderColorDisabled: '#c6c6c6',
    backgroundColor: 'transparent',
    get backgroundColorChecked() {
      return dark.colors.primary;
    },
    backgroundColorFocused: 'transparent',
    backgroundColorDisabled: '#393939',
  },
  collapse: {
    get textColor() {
      return dark.colors.text;
    },
    iconColor: '#c6c6c6',
    borderColor: '#161616',
    backgroundColor: '#262626',
    backgroundColorActive: '#4C4C4C',
    backgroundColorHover: '#393939',
  },
  colorPicker: {
    borderColor: '#f4f4f4',
    backgroundColor: '#393939',
  },
  dataTable: {
    get textColor() {
      return dark.colors.text;
    },
    get textColorHover() {
      return dark.colors.text;
    },
    get textColorActive() {
      return dark.colors.text;
    },
    iconColor: '#a8a8a8',
    iconColorDisabled: '#a8a8a8',
    get iconColorEnabled() {
      return dark.colors.primary;
    },
    get linkColor() {
      return dark.colors.primary;
    },
    borderColor: '#161616',
    backgroundColor: '#262626',
    backgroundColorActive: '#393939',
    backgroundColorHover: '#393939',
    filterBorderColor: '#161616',
    filterBackgroundColor: '#393939',
  },
  dataList: {
    get textColor() {
      return dark.colors.text;
    },
    get textColorHover() {
      return dark.colors.text;
    },
    get textColorActive() {
      return dark.colors.text;
    },
    iconColor: '#c6c6c6',
    iconColorDisabled: '#a8a8a8',
    get iconColorEnabled() {
      return dark.colors.primary;
    },
    get linkColor() {
      return dark.colors.primary;
    },
    borderColor: '#262626',
    backgroundColor: '#393939',
    backgroundColorActive: '#4C4C4C',
    backgroundColorHover: '#4C4C4C',
  },
  divider: {
    get textColor() {
      return dark.colors.text;
    },
    borderColor: '#393939',
    headerBorderColor: '#161616',
  },
  dropDown: {
    textColor: '#c6c6c6',
    get textColorActive() {
      return dark.colors.text;
    },
    get textColorHover() {
      return dark.colors.text;
    },
    textColorDisabled: '#c6c6c6',
    iconColor: '#c6c6c6',
    backgroundColor: '#393939',
    backgroundColorActive: '#262626',
    backgroundColorHover: '#262626',
    backgroundColorDisabled: '#393939',
    borderColor: '#8d8d8d',
    scrollTrackBgColor: '#262626',
    scrollThumbBgColor: '#393939',
    scrollThumbBorderColor: '#262626',
    scrollThumbBorderColorHover: '#525252',
  },
  empty: {
    iconColor: '#c6c6c6',
    get textColor() {
      return dark.colors.text;
    },
  },
  filter: {
    backgroundColor: '#393939',
    borderColor: '#161616',
    inputBackgroundColor: '#262626',
  },
  form: {
    get textColor() {
      return dark.colors.text;
    },
  },
  gridView: {
    get textColor() {
      return dark.colors.text;
    },
  },
  icon: {
    get iconColor() {
      return dark.colors.text;
    },
  },
  inputNumber: {
    get textColor() {
      return dark.colors.text;
    },
    textColorDisabled: '#c6c6c6',
    get handlerIconColor() {
      return dark.colors.text;
    },
    handlerBackgroundColor: 'transparent',
    handlerBackgroundColorActive: '#161616',
    placeholderColor: '#8d8d8d',
    placeholderColorDisabled: '#c6c6c6',
    borderColor: '#8d8d8d',
    borderColorHover: '#8d8d8d',
    get borderColorActive() {
      return dark.colors.primary;
    },
    borderColorDisabled: 'transparent',
    backgroundColor: '#393939',
    backgroundColorActive: '#393939',
    backgroundColorHover: '#393939',
    backgroundColorDisabled: '#393939',
  },
  inputSearch: {
    get textColor() {
      return dark.colors.text;
    },
    textColorDisabled: '#c6c6c6',
    iconColor: '#c6c6c6',
    iconColorDisabled: '#a8a8a8',
    placeholderColor: '#8d8d8d',
    placeholderColorDisabled: '#c6c6c6',
    borderColor: '#8d8d8d',
    borderColorHover: '#8d8d8d',
    get borderColorActive() {
      return dark.colors.primary;
    },
    borderColorDisabled: 'transparent',
    backgroundColor: '#393939',
    backgroundColorActive: '#393939',
    backgroundColorHover: '#393939',
    backgroundColorDisabled: '#393939',
  },
  inputText: {
    get textColor() {
      return dark.colors.text;
    },
    clearColor: '#a8a8a8',
    textColorDisabled: '#c6c6c6',
    placeholderColor: '#8d8d8d',
    placeholderColorDisabled: '#c6c6c6',
    borderColor: '#8d8d8d',
    borderColorHover: '#8d8d8d',
    get borderColorActive() {
      return dark.colors.primary;
    },
    borderColorDisabled: 'transparent',
    backgroundColor: '#393939',
    altBackgroundColor: '#262626',
    backgroundColorActive: '#393939',
    backgroundColorHover: '#393939',
    backgroundColorDisabled: '#393939',
    inverseBackgroundColor: '#262626',
  },
  list: {
    get textColor() {
      return dark.colors.text;
    },
    get titleColor() {
      return dark.colors.primary;
    },
    descriptionColor: '#6f6f6f',
    iconColor: '#c6c6c6',
    borderColor: '#161616',
    backgroundColor: '#393939',
    extraBackgroundColor: '#262626',
  },
  menu: {
    get textColor() {
      return dark.colors.white;
    },
    get titleColor() {
      return dark.colors.white;
    },
    get iconColor() {
      return dark.colors.white;
    },
    get backgroundColor() {
      return dark.colors.primary;
    },
  },
  modal: {
    get textColor() {
      return dark.colors.text;
    },
    get titleColor() {
      return dark.colors.primary;
    },
    get iconColor() {
      return dark.colors.text;
    },
    backgroundColor: '#393939',
  },
  pagination: {
    get textColor() {
      return dark.colors.text;
    },
    get linkColor() {
      return dark.colors.text;
    },
    get linkColorActive() {
      return dark.colors.text;
    },
    linkColorDisabled: '#c6c6c6',
    get linkColorFocused() {
      return dark.colors.text;
    },
    get linkColorHover() {
      return dark.colors.text;
    },
    borderColor: '#161616',
    borderColorActive: 'transparent',
    borderColorDisabled: '#393939',
    borderColorFocused: '#00539A',
    borderColorHover: '#4c4c4c',
    backgroundColor: '#393939',
    backgroundColorActive: '#4c4c4c',
    backgroundColorDisabled: '#393939',
    backgroundColorFocused: '#4c4c4c',
    backgroundColorHover: '#4c4c4c',
  },
  popover: {
    textColor: '#c6c6c6',
    get textColorHover() {
      return dark.colors.text;
    },
    backgroundColor: '#393939',
    backgroundColorHover: '#262626',
    borderColor: '#8d8d8d',
  },
  progress: {
    get textColor() {
      return dark.colors.text;
    },
    get iconColor() {
      return dark.colors.text;
    },
    barBgColor: '#393939',
    get pathBgColor() {
      return dark.colors.primary;
    },
    successColor: '#42be65',
    exceptionColor: '#fa4d56',
  },
  field: {
    get labelColor() {
      return dark.colors.text;
    },
    hintColor: '#a8a8a8',
    get errorColor() {
      return dark.colors.error;
    },
    get warningColor() {
      return dark.colors.warning;
    },
    requiredColor: '#a8a8a8',
    backgroundColor: '#393939',
  },
  pages: {
    get textColor() {
      return dark.colors.text;
    },
    iconColor: '#c6c6c6',
    get linkColor() {
      return dark.colors.primary;
    },
    borderColor: '#161616',
    headerBackgroundColor: '#262626',
    headerBorderColor: '#161616',
    get headerTitleColor() {
      return dark.colors.text;
    },
    imageBackgroundColor: '#161616',
    siderBackgroundColor: '#262626',
    pageBackgroundColor: '#161616',
  },
  radioButtonOutline: {
    get textColor() {
      return dark.colors.text;
    },
    textColorHover: '#fff',
    textColorChecked: '#fff',
    textColorDisabled: '#8d8d8d',
    borderColor: '#393939',
    borderColorHover: '#393939',
    get borderColorChecked() {
      return dark.colors.primary;
    },
    borderColorActive: '#00539A',
    borderColorDisabled: '#c6c6c6',
    backgroundColor: '#393939',
    backgroundColorHover: '#393939',
    get backgroundColorChecked() {
      return dark.colors.primary;
    },
    backgroundColorActive: '#00539A',
    backgroundColorDisabled: '#393939',
  },
  radioButtonSolid: {
    get textColor() {
      return dark.colors.text;
    },
    textColorHover: '#fff',
    textColorChecked: '#fff',
    textColorDisabled: '#8d8d8d',
    borderColor: '#262626',
    borderColorHover: '#393939',
    get borderColorChecked() {
      return dark.colors.primary;
    },
    borderColorActive: '#00539A',
    borderColorDisabled: '#393939',
    backgroundColor: '#393939',
    backgroundColorHover: '#393939',
    get backgroundColorChecked() {
      return dark.colors.primary;
    },
    backgroundColorActive: '#00539A',
    backgroundColorDisabled: '#393939',
  },
  radioInput: {
    get textColor() {
      return dark.colors.text;
    },
    textColorDisabled: '#8d8d8d',
    borderColor: '#f4f4f4',
    get borderColorChecked() {
      return dark.colors.primary;
    },
    get borderColorFocused() {
      return dark.colors.primary;
    },
    borderColorDisabled: '#c6c6c6',
    backgroundColor: 'transparent',
    get backgroundColorChecked() {
      return dark.colors.primary;
    },
    backgroundColorFocused: 'transparent',
    backgroundColorDisabled: '#393939',
  },
  resizable: {
    get textColor() {
      return dark.colors.text;
    },
    backgroundColor: '#262626',
    borderColor: '#161616',
  },
  result: {
    get titleTextColor() {
      return dark.colors.text;
    },
    subtitleTextColor: '#6f6f6f',
    iconColor: '#c6c6c6',
    get infoColor() {
      return dark.colors.info;
    },
    get successColor() {
      return dark.colors.success;
    },
    get errorColor() {
      return dark.colors.error;
    },
    get warningColor() {
      return dark.colors.warning;
    },
  },
  scroll: {
    thumbBackgroundColor: '#8d8d8d',
    thumbBackgroundColorHover: '#6f6f6f',
    thumbBorderColor: '#393939',
    trackBackgroundColor: '#393939',
  },
  select: {
    get textColor() {
      return dark.colors.text;
    },
    backgroundColor: '#393939',
    borderColor: '#8d8d8d',
  },
  slider: {
    get textColor() {
      return dark.colors.text;
    },
    railColor: '#393939',
    railColorDisabled: '#c6c6c6',
    railColorHover: '#393939',
    get trackColor() {
      return dark.colors.primary;
    },
    trackColorDisabled: '#8d8d8d',
    get trackColorFocused() {
      return dark.colors.primary;
    },
    get trackColorHover() {
      return dark.colors.primary;
    },
    dotColor: '#393939',
    get dotColorActive() {
      return dark.colors.primary;
    },
    dotColorDisabled: '#c6c6c6',
    get dotColorHover() {
      return dark.colors.primary;
    },
    handleColor: '#393939',
    get handleDragging() {
      return dark.colors.primary;
    },
    get handleColorFocused() {
      return dark.colors.primary;
    },
    get handleColorHover() {
      return dark.colors.primary;
    },
    handleColorDisabled: '#8d8d8d',
  },
  skeleton: {
    get iconColor() {
      return dark.colors.text;
    },
    backgroundColor: '#393939',
    backgroundColorLoading: '#292929',
  },
  spin: {
    get borderColor() {
      return Color(dark.colors.lightgray).fade(0.75).toString();
    },
    get borderTopColor() {
      return dark.colors.lightgray;
    },
  },
  splitPanel: {
    get textColor() {
      return dark.colors.text;
    },
    backgroundColor: '#262626',
  },
  steps: {
    get titleColor() {
      return dark.colors.text;
    },
    get titleColorError() {
      return dark.colors.error;
    },
    titleColorWait: '#6f6f6f',
    descriptionColor: '#6f6f6f',
    get descriptionColorError() {
      return dark.colors.error;
    },
    get iconColorError() {
      return dark.colors.error;
    },
    iconColorFinished: '#ffffff',
    get iconColorProgress() {
      return dark.colors.primary;
    },
    iconColorWait: '#8d8d8d',
    barColor: '#393939',
    get barColorActive() {
      return dark.colors.primary;
    },
    get borderColorError() {
      return dark.colors.error;
    },
    get borderColorFinished() {
      return dark.colors.primary;
    },
    get borderColorProgress() {
      return dark.colors.primary;
    },
    borderColorWait: '#393939',
    get backgroundColorFinished() {
      return dark.colors.primary;
    },
    backgroundColorProgress: '#393939',
    backgroundColorWait: '#393939',
  },
  switchButton: {
    get textColor() {
      return dark.colors.text;
    },
    textColorChecked: '#fff',
    textColorDisabled: '#8d8d8d',
    borderColor: 'transparent',
    get borderColorFocused() {
      return dark.colors.primary;
    },
    borderColorDisabled: '#393939',
    backgroundColor: '#393939',
    get backgroundColorChecked() {
      return dark.colors.primary;
    },
    backgroundColorDisabled: '#393939',
    handleColor: '#f4f4f4',
    handleColorChecked: '#fff',
    handleColorDisabled: '#8d8d8d',
  },
  tabs: {
    textColor: '#8d8d8d',
    get textColorActive() {
      return dark.colors.text;
    },
    backgroundColor: '#262626',
    get backgroundColorActive() {
      return dark.colors.primary;
    },
    get barColor() {
      return dark.colors.primary;
    },
    borderColor: '#161616',
  },
  tag: {
    textColor: '#fff',
    iconColor: '#fff',
  },
  text: {
    get textColor() {
      return dark.colors.text;
    },
  },
  tooltip: {
    get triggerTextColor() {
      return dark.colors.text;
    },
    get tooltipTextColor() {
      return dark.colors.text;
    },
    backgroundColor: 'rgba(111, 111, 111, 0.95)',
  },
  transfer: {
    get textColor() {
      return dark.colors.text;
    },
    iconColor: '#c6c6c6',
    backgroundColor: '#262626',
    headerBackgroundColor: '#393939',
    borderColor: '#8d8d8d',
  },
  tree: {
    get textColor() {
      return dark.colors.text;
    },
    iconColor: '#c6c6c6',
    backgroundColor: '#262626',
    backgroundColorSelected: '#393939',
    borderColor: '#161616',
  },
  underConstruction: {
    get textColor() {
      return dark.colors.text;
    },
    iconColor: '#c6c6c6',
    backgroundColor: '#262626',
    borderColor: '#a8a8a8',
  },
  upload: {
    get textColor() {
      return dark.colors.text;
    },
    textColorDisabled: '#c6c6c6',
    get iconColor() {
      return dark.colors.lightgray;
    },
    backgroundColor: '#393939',
    backgroundColorDisabled: '#393939',
    get backgroundColorHover() {
      return Color(dark.colors.primary).fade(0.25).toString();
    },
    borderColor: '#8d8d8d',
    borderColorDisabled: 'transparent',
  },
  valuePicker: {
    get textColor() {
      return dark.colors.text;
    },
    textColorDisabled: '#c6c6c6',
    iconColor: '#a8a8a8',
    iconColorDisabled: '#c6c6c6',
    placeholderColor: '#8d8d8d',
    placeholderColorDisabled: '#c6c6c6',
    borderColor: '#8d8d8d',
    borderColorHover: '#8d8d8d',
    get borderColorActive() {
      return dark.colors.primary;
    },
    borderColorDisabled: 'transparent',
    backgroundColor: '#393939',
    altBackgroundColor: '#262626',
    backgroundColorActive: '#393939',
    backgroundColorHover: '#393939',
    backgroundColorDisabled: '#393939',
    backgroundColorOpen: '#393939',
  },
  view: {
    backgroundColor: '#262626',
    borderColor: '#161616',
  },
  widget: {
    get titleColor() {
      return dark.colors.primary;
    },
    get textColor() {
      return dark.colors.text;
    },
    borderColor: '#161616',
    backgroundColor: '#262626',
    altbackgroundColor: '#393939',
  },
};

export default dark;
