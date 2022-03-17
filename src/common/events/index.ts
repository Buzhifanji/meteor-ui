import Minze from "minze";

const slotchange = (event: Event) => {
  Minze.stopListen("minze:ready", slotchange);
};

Minze.listen("minze:ready", slotchange);
