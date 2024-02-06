function y(n) {
  var t, e, r = "";
  if (typeof n == "string" || typeof n == "number")
    r += n;
  else if (typeof n == "object")
    if (Array.isArray(n))
      for (t = 0; t < n.length; t++)
        n[t] && (e = y(n[t])) && (r && (r += " "), r += e);
    else
      for (t in n)
        n[t] && (r && (r += " "), r += t);
  return r;
}
function g() {
  for (var n, t, e = 0, r = ""; e < arguments.length; )
    (n = arguments[e++]) && (t = y(n)) && (r && (r += " "), r += t);
  return r;
}
const f = (n) => typeof n == "boolean" ? "".concat(n) : n === 0 ? "0" : n, m = g, x = (n, t) => (e) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null)
    return m(n, e == null ? void 0 : e.class, e == null ? void 0 : e.className);
  const { variants: i, defaultVariants: u } = t, b = Object.keys(i).map((l) => {
    const a = e == null ? void 0 : e[l], d = u == null ? void 0 : u[l];
    if (a === null)
      return null;
    const o = f(a) || f(d);
    return i[l][o];
  }), v = e && Object.entries(e).reduce((l, a) => {
    let [d, o] = a;
    return o === void 0 || (l[d] = o), l;
  }, {}), h = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((l, a) => {
    let { class: d, className: o, ...V } = a;
    return Object.entries(V).every((N) => {
      let [c, s] = N;
      return Array.isArray(s) ? s.includes({
        ...u,
        ...v
      }[c]) : {
        ...u,
        ...v
      }[c] === s;
    }) ? [
      ...l,
      d,
      o
    ] : l;
  }, []);
  return m(n, b, h, e == null ? void 0 : e.class, e == null ? void 0 : e.className);
}, C = x(
  [
    "p-3 border-gray-300 border shadow-md text-sm w-full",
    "hover:border-blue-500 hover:border",
    "focus:border-blue-500 focus:border focus:outline-none"
  ],
  {
    variants: {
      scale: {
        sm: "h-7 rounded-md",
        md: "h-9 rounded-lg",
        lg: "h-12 rounded-xl"
      }
    },
    defaultVariants: {
      scale: "md"
    }
  }
);
export {
  C as input
};
