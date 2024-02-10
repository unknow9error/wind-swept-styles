import { jsx as a } from "react/jsx-runtime";
import { t as p } from "../bundle-mjs-zWg6SE9l.js";
const d = ({
  children: o,
  gutter: r = 0,
  justify: t = "start",
  align: s = "stretch",
  cols: m,
  className: e,
  ...i
}) => /* @__PURE__ */ a(
  "div",
  {
    className: p(
      "grid",
      "w-full",
      r && `gap-${r}`,
      m && `sm:grid-cols-${m}`,
      t && `justify-${t}`,
      s && `items-${s}`,
      e
    ),
    ...i,
    children: o
  }
);
export {
  d as Row
};
