import { jsx as l } from "react/jsx-runtime";
import { t as m } from "../bundle-mjs-zWg6SE9l.js";
const n = ({
  children: r,
  span: o,
  offset: s,
  className: t,
  ...c
}) => {
  const e = m(
    o ? `col-span-${o}` : "",
    "",
    t
  );
  return /* @__PURE__ */ l("div", { className: e, ...c, children: r });
};
export {
  n as Col
};
