//
export type ButtonType = 'default' | 'primary' | 'success' | 'info' | 'warning' | 'error'

export type ButtonAttrType = 'button' | 'submit' | 'reset'

export interface VButtonType {
    type?: ButtonType,
    attrType?: ButtonAttrType,
}