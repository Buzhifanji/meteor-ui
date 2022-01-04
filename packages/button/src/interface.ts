//
export type ButtonType = 'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger'

export type ButtonAttrType = 'button' | 'submit' | 'reset'

export type ButttonShapeType = 'circle' | 'round'

export interface VButtonType {
    type?: ButtonType,
    attrType?: ButtonAttrType,
}