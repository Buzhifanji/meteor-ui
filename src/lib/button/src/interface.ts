export type ButtonType = "primary" | "success" | "info" | "warning" | "danger";

export type ButtonSize = "medium" | "big" | "small" | "mini";

export type ButtonAttrType = "button" | "submit" | "reset";

export type ButttonShapeType = "circle" | "round";

export interface MeButton {
  type: ButtonType;
  color: string | null;
  ghost: boolean;
}
