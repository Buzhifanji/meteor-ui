import { themeVariableName } from "../enums";

export const basicBackgroundColor = {
    [themeVariableName.dangerBackgroundColor]: '#E91E63', // danger
    [themeVariableName.dangerBoxShadowColor]: '#fd9b96',
    [themeVariableName.primaryBackgroundColor]: '#6777ef', // primary
    [themeVariableName.primaryBoxShadowColor]: '#acb5f6',
    [themeVariableName.infoBackgroundColor]: '#2196F3',// info
    [themeVariableName.infoBoxShadowColor]: '#82d3f8',
    [themeVariableName.warningBackgroundColor]: '#FFC107',// warning
    [themeVariableName.warningBoxShadowColor]: '#ffc473',
    [themeVariableName.successBackgroundColor]: '#63ed7a',// success
    [themeVariableName.successBoxShadowColor]: '#a8f5b4',
    [themeVariableName.defaultBoxShadowColor]: '#e1e5e8',
}

export const commonStyleConfig = {
    [themeVariableName.fontWeight]: 400,
    [themeVariableName.fontSize]: '14px', // 字体大小
    [themeVariableName.padding]: '0 1em',
    [themeVariableName.borderRadius]: '0.25em',
    [themeVariableName.bezier]: 'cubic-bezier(0.4, 0, 0.2, 1)x', // 定义三次贝塞尔曲线

    [themeVariableName.backgroundColor]: '#fff',
    [themeVariableName.textColor]: '#333',
    [themeVariableName.backgroundColorPressed]: '#666',
    [themeVariableName.textColorPressed]: '#5dcba6',

    [themeVariableName.width]: 'initial',
    [themeVariableName.height]: '34px',

}