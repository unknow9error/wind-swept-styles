import { jsx as a } from "react/jsx-runtime";
import { c as m } from "../clsx-F0OAuoLf.js";
const p = ({
  children: r,
  span: c,
  offset: o,
  className: s,
  ...l
}) => {
  const t = m(
    {
      [`col-span-${c}`]: c,
      [`col-start-${o ? o + 1 : ""}`]: o
    },
    s
  );
  return /* @__PURE__ */ a("div", { className: t, ...l, children: r });
};
export {
  p as Col
};
