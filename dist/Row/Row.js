import { jsx as c } from "react/jsx-runtime";
import { t as d } from "../bundle-mjs-zWg6SE9l.js";
const w = ({
  children: m,
  gutter: r = 0,
  justify: s = "start",
  align: t = "stretch",
  cols: o,
  className: e,
  ...i
}) => {
  const a = d(
    "grid",
    "w-full",
    r ? `gap-${r}` : "",
    "grid-cols-1",
    o ? `sm:grid-cols-${o}` : "",
    s ? `justify-${s}` : "",
    t ? `items-${t}` : "",
    e
  );
  return /* @__PURE__ */ c("div", { className: a, ...i, children: m });
};
export {
  w as Row
};
