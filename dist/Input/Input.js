import { jsxs as n, jsx as r } from "react/jsx-runtime";
import { input as o } from "./Input.cva.js";
const e = ({ scale: t, icon: i, ...m }) => /* @__PURE__ */ n("div", { children: [
  i && /* @__PURE__ */ r("img", {}),
  /* @__PURE__ */ r("input", { className: o({ scale: t }), ...m })
] });
export {
  e as Input
};
