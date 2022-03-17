import {
  bezier,
  dividerColor,
  fontSize,
  textColor,
} from "../../../../common/css-variable";
import { contentClassName, titleClassName } from "./variable";

export default () => /* css */ `
:host {
    display: block;
    font-size: ${fontSize};
    color: ${textColor};
    padding: 16px 0 0;
    border-top: 1px solid ${dividerColor};
}

:host([disabled]), 
:host([disabled]) .${titleClassName} {
  cursor:not-allowed;
}
.${contentClassName} {
  animation: collapse 0.25s ease-in;
}
.${contentClassName},
:host([disabled]) .${contentClassName},
:host(:not([expanded])) .${contentClassName} {
  display: none;
}
:host([expanded]) {
  margin-bottom: 16px;
}
.expanded,
.collapse {
  animation: 300ms ${bezier};
  animation-iteration-count:1;
  animation-fill-mode: forwards;
}

.expanded {
  animation-name: expanded;
}
.collapse {
  animation-name: collapse;
}

.${contentClassName} {
  width:100%;
  height:100%;
  display: block;
}
.${titleClassName} {
  display: flex;
  cursor: pointer;
  padding-bottom: 16px;
  transition:box-shadow 0.2s ${bezier};
}

`;
