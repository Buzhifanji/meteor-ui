/*** ============== css mixins ====================== */

import { Direction } from "./interface";

export const cssTransitionMixin = (direction: Direction) => /* css */ `
.transition-container {
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  transform-origin: center ${direction};
}
.show {
  opacity: 1;
  transform: scaleY(1);
}

.hide {
  opacity: 0;
  transform: scaleY(0);
}
`;
