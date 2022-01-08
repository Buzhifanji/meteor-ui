export type Align =
  | "stretch"
  | "baseline"
  | "center"
  | "flex-end"
  | "flex-start";

export type Justify =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-around"
  | "space-between";

type Wrap = "wrap" | "nowrap";
export interface SapceHostStyle {
  display: string; // 是否为行内元素
  justify: Justify; // 水平排列方式
  vertical: string; // 是否垂直布局
  align: Align; // 对齐方式
  wrap: Wrap; // 是否超出换行
}
