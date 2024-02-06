import { jsx as m } from "react/jsx-runtime";
import { c as p } from "../clsx-F0OAuoLf.js";
const l = ({
  children: t,
  gutter: s = 0,
  justify: r = "start",
  align: o = "stretch",
  className: a,
  ...c
}) => {
  const e = p(
    "flex",
    "flex-wrap",
    {
      [`gap-${s}`]: s,
      [`justify-${r}`]: r,
      [`items-${o}`]: o
    },
    a
  );
  return /* @__PURE__ */ m("div", { className: e, ...c, children: t });
};
export {
  l as Row
};
