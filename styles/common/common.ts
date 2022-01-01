import { themeVariableName } from "../enums";

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

    /**** ================== v-button 按钮类型的背景颜色 ==================** */
    [themeVariableName.dangerBackgroundColor]: '#E91E63', // 危险色
    [themeVariableName.primaryBackgroundColor]: '#4CAF50',
    [themeVariableName.infoBackgroundColor]: '#2196F3',
    [themeVariableName.warningBackgroundColor]: '#FFC107',

    [themeVariableName.width]: 'initial',
    [themeVariableName.height]: '34px',

}