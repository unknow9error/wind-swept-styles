import { jsxs as i, jsx as r } from "react/jsx-runtime";
import { t as l } from "../bundle-mjs-zWg6SE9l.js";
import { input as o } from "./Input.cva.js";
const d = ({
  scale: s,
  prefix: t,
  suffix: e,
  className: a,
  ...m
}) => /* @__PURE__ */ i(
  "div",
  {
    className: l(
      "relative",
      "h-full",
      "flex",
      "items-center",
      a
    ),
    children: [
      t && /* @__PURE__ */ r("div", { className: "absolute left-0 pl-2", children: t }),
      /* @__PURE__ */ r(
        "input",
        {
          className: l(
            o({ scale: s }),
            t ? "pl-9" : "",
            e ? "pr-9" : ""
          ),
          ...m
        }
      ),
      e && /* @__PURE__ */ r(
        "div",
        {
          className: l(
            "absolute right-0 pr-2",
            `text-${s}`
          ),
          children: e
        }
      )
    ]
  }
);
export {
  d as Input
};
