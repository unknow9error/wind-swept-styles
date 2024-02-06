import { jsx as c } from "react/jsx-runtime";
import { t as p } from "../bundle-mjs-zWg6SE9l.js";
const w = ({
  children: e,
  gutter: r = 0,
  justify: s = "start",
  align: t = "stretch",
  cols: o,
  className: m,
  ...a
}) => {
  const i = p(
    "grid",
    r ? `gap-${r}` : "",
    o ? `grid-cols-${o}` : "",
    s ? `justify-${s}` : "",
    t ? `items-${t}` : "",
    m
  );
  return /* @__PURE__ */ c("div", { className: i, ...a, children: e });
};
export {
  w as Row
};
