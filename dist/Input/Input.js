import { jsxs as m, jsx as s } from "react/jsx-runtime";
import { t } from "../bundle-mjs-zWg6SE9l.js";
import { input as p } from "./Input.cva.js";
const f = ({
  scale: e,
  prefix: r,
  suffix: l,
  className: n,
  label: c,
  ...i
}) => {
  const o = t("absolute right-0 pr-2 h-3/5", `text-${e}`), a = t("absolute left-0 pl-2 h-3/5", `text-${e}`);
  return /* @__PURE__ */ m(
    "div",
    {
      className: t(
        "relative",
        "h-full",
        "flex",
        "items-center",
        n
      ),
      children: [
        r && /* @__PURE__ */ s("div", { className: a, children: r }),
        /* @__PURE__ */ s(
          "input",
          {
            className: t(
              p({ scale: e }),
              r ? "pl-9" : "",
              l ? "pr-9" : ""
            ),
            ...i
          }
        ),
        l && /* @__PURE__ */ s("div", { className: o, children: l })
      ]
    }
  );
};
export {
  f as Input
};
