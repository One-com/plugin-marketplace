import tt, { createContext as Pt, useContext as Ot, useCallback as Mt, useState as se, useRef as rt, useEffect as oe } from "react";
var ge = { exports: {} }, Q = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xe;
function Ft() {
  if (Xe) return Q;
  Xe = 1;
  var r = tt, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, m = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function x(s, h, y) {
    var g, w = {}, S = null, j = null;
    y !== void 0 && (S = "" + y), h.key !== void 0 && (S = "" + h.key), h.ref !== void 0 && (j = h.ref);
    for (g in h) i.call(h, g) && !c.hasOwnProperty(g) && (w[g] = h[g]);
    if (s && s.defaultProps) for (g in h = s.defaultProps, h) w[g] === void 0 && (w[g] = h[g]);
    return { $$typeof: t, type: s, key: S, ref: j, props: w, _owner: m.current };
  }
  return Q.Fragment = n, Q.jsx = x, Q.jsxs = x, Q;
}
var ee = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ze;
function It() {
  return Ze || (Ze = 1, process.env.NODE_ENV !== "production" && function() {
    var r = tt, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), x = Symbol.for("react.provider"), s = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), j = Symbol.for("react.offscreen"), I = Symbol.iterator, L = "@@iterator";
    function p(e) {
      if (e === null || typeof e != "object")
        return null;
      var a = I && e[I] || e[L];
      return typeof a == "function" ? a : null;
    }
    var E = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function u(e) {
      {
        for (var a = arguments.length, o = new Array(a > 1 ? a - 1 : 0), l = 1; l < a; l++)
          o[l - 1] = arguments[l];
        T("error", e, o);
      }
    }
    function T(e, a, o) {
      {
        var l = E.ReactDebugCurrentFrame, v = l.getStackAddendum();
        v !== "" && (a += "%s", o = o.concat([v]));
        var b = o.map(function(d) {
          return String(d);
        });
        b.unshift("Warning: " + a), Function.prototype.apply.call(console[e], console, b);
      }
    }
    var U = !1, V = !1, $ = !1, q = !1, A = !1, P;
    P = Symbol.for("react.module.reference");
    function M(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === i || e === c || A || e === m || e === y || e === g || q || e === j || U || V || $ || typeof e == "object" && e !== null && (e.$$typeof === S || e.$$typeof === w || e.$$typeof === x || e.$$typeof === s || e.$$typeof === h || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === P || e.getModuleId !== void 0));
    }
    function F(e, a, o) {
      var l = e.displayName;
      if (l)
        return l;
      var v = a.displayName || a.name || "";
      return v !== "" ? o + "(" + v + ")" : o;
    }
    function je(e) {
      return e.displayName || "Context";
    }
    function D(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && u("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case i:
          return "Fragment";
        case n:
          return "Portal";
        case c:
          return "Profiler";
        case m:
          return "StrictMode";
        case y:
          return "Suspense";
        case g:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case s:
            var a = e;
            return je(a) + ".Consumer";
          case x:
            var o = e;
            return je(o._context) + ".Provider";
          case h:
            return F(e, e.render, "ForwardRef");
          case w:
            var l = e.displayName || null;
            return l !== null ? l : D(e.type) || "Memo";
          case S: {
            var v = e, b = v._payload, d = v._init;
            try {
              return D(d(b));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var H = Object.assign, X = 0, we, ke, Se, Ne, Pe, Oe, Me;
    function Fe() {
    }
    Fe.__reactDisabledLog = !0;
    function st() {
      {
        if (X === 0) {
          we = console.log, ke = console.info, Se = console.warn, Ne = console.error, Pe = console.group, Oe = console.groupCollapsed, Me = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Fe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        X++;
      }
    }
    function ot() {
      {
        if (X--, X === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: H({}, e, {
              value: we
            }),
            info: H({}, e, {
              value: ke
            }),
            warn: H({}, e, {
              value: Se
            }),
            error: H({}, e, {
              value: Ne
            }),
            group: H({}, e, {
              value: Pe
            }),
            groupCollapsed: H({}, e, {
              value: Oe
            }),
            groupEnd: H({}, e, {
              value: Me
            })
          });
        }
        X < 0 && u("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ie = E.ReactCurrentDispatcher, ce;
    function te(e, a, o) {
      {
        if (ce === void 0)
          try {
            throw Error();
          } catch (v) {
            var l = v.stack.trim().match(/\n( *(at )?)/);
            ce = l && l[1] || "";
          }
        return `
` + ce + e;
      }
    }
    var le = !1, re;
    {
      var it = typeof WeakMap == "function" ? WeakMap : Map;
      re = new it();
    }
    function Ie(e, a) {
      if (!e || le)
        return "";
      {
        var o = re.get(e);
        if (o !== void 0)
          return o;
      }
      var l;
      le = !0;
      var v = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var b;
      b = ie.current, ie.current = null, st();
      try {
        if (a) {
          var d = function() {
            throw Error();
          };
          if (Object.defineProperty(d.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(d, []);
            } catch (N) {
              l = N;
            }
            Reflect.construct(e, [], d);
          } else {
            try {
              d.call();
            } catch (N) {
              l = N;
            }
            e.call(d.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (N) {
            l = N;
          }
          e();
        }
      } catch (N) {
        if (N && l && typeof N.stack == "string") {
          for (var f = N.stack.split(`
`), k = l.stack.split(`
`), C = f.length - 1, R = k.length - 1; C >= 1 && R >= 0 && f[C] !== k[R]; )
            R--;
          for (; C >= 1 && R >= 0; C--, R--)
            if (f[C] !== k[R]) {
              if (C !== 1 || R !== 1)
                do
                  if (C--, R--, R < 0 || f[C] !== k[R]) {
                    var O = `
` + f[C].replace(" at new ", " at ");
                    return e.displayName && O.includes("<anonymous>") && (O = O.replace("<anonymous>", e.displayName)), typeof e == "function" && re.set(e, O), O;
                  }
                while (C >= 1 && R >= 0);
              break;
            }
        }
      } finally {
        le = !1, ie.current = b, ot(), Error.prepareStackTrace = v;
      }
      var K = e ? e.displayName || e.name : "", z = K ? te(K) : "";
      return typeof e == "function" && re.set(e, z), z;
    }
    function ct(e, a, o) {
      return Ie(e, !1);
    }
    function lt(e) {
      var a = e.prototype;
      return !!(a && a.isReactComponent);
    }
    function ae(e, a, o) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Ie(e, lt(e));
      if (typeof e == "string")
        return te(e);
      switch (e) {
        case y:
          return te("Suspense");
        case g:
          return te("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case h:
            return ct(e.render);
          case w:
            return ae(e.type, a, o);
          case S: {
            var l = e, v = l._payload, b = l._init;
            try {
              return ae(b(v), a, o);
            } catch {
            }
          }
        }
      return "";
    }
    var Z = Object.prototype.hasOwnProperty, Le = {}, $e = E.ReactDebugCurrentFrame;
    function ne(e) {
      if (e) {
        var a = e._owner, o = ae(e.type, e._source, a ? a.type : null);
        $e.setExtraStackFrame(o);
      } else
        $e.setExtraStackFrame(null);
    }
    function ut(e, a, o, l, v) {
      {
        var b = Function.call.bind(Z);
        for (var d in e)
          if (b(e, d)) {
            var f = void 0;
            try {
              if (typeof e[d] != "function") {
                var k = Error((l || "React class") + ": " + o + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw k.name = "Invariant Violation", k;
              }
              f = e[d](a, d, l, o, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (C) {
              f = C;
            }
            f && !(f instanceof Error) && (ne(v), u("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", l || "React class", o, d, typeof f), ne(null)), f instanceof Error && !(f.message in Le) && (Le[f.message] = !0, ne(v), u("Failed %s type: %s", o, f.message), ne(null));
          }
      }
    }
    var ft = Array.isArray;
    function ue(e) {
      return ft(e);
    }
    function dt(e) {
      {
        var a = typeof Symbol == "function" && Symbol.toStringTag, o = a && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return o;
      }
    }
    function vt(e) {
      try {
        return De(e), !1;
      } catch {
        return !0;
      }
    }
    function De(e) {
      return "" + e;
    }
    function Ge(e) {
      if (vt(e))
        return u("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", dt(e)), De(e);
    }
    var We = E.ReactCurrentOwner, ht = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ye, Ue;
    function mt(e) {
      if (Z.call(e, "ref")) {
        var a = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function gt(e) {
      if (Z.call(e, "key")) {
        var a = Object.getOwnPropertyDescriptor(e, "key").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function bt(e, a) {
      typeof e.ref == "string" && We.current;
    }
    function yt(e, a) {
      {
        var o = function() {
          Ye || (Ye = !0, u("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        o.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: o,
          configurable: !0
        });
      }
    }
    function Et(e, a) {
      {
        var o = function() {
          Ue || (Ue = !0, u("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        o.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: o,
          configurable: !0
        });
      }
    }
    var _t = function(e, a, o, l, v, b, d) {
      var f = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: e,
        key: a,
        ref: o,
        props: d,
        // Record the component responsible for creating this element.
        _owner: b
      };
      return f._store = {}, Object.defineProperty(f._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(f, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: l
      }), Object.defineProperty(f, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: v
      }), Object.freeze && (Object.freeze(f.props), Object.freeze(f)), f;
    };
    function pt(e, a, o, l, v) {
      {
        var b, d = {}, f = null, k = null;
        o !== void 0 && (Ge(o), f = "" + o), gt(a) && (Ge(a.key), f = "" + a.key), mt(a) && (k = a.ref, bt(a, v));
        for (b in a)
          Z.call(a, b) && !ht.hasOwnProperty(b) && (d[b] = a[b]);
        if (e && e.defaultProps) {
          var C = e.defaultProps;
          for (b in C)
            d[b] === void 0 && (d[b] = C[b]);
        }
        if (f || k) {
          var R = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          f && yt(d, R), k && Et(d, R);
        }
        return _t(e, f, k, v, l, We.current, d);
      }
    }
    var fe = E.ReactCurrentOwner, He = E.ReactDebugCurrentFrame;
    function B(e) {
      if (e) {
        var a = e._owner, o = ae(e.type, e._source, a ? a.type : null);
        He.setExtraStackFrame(o);
      } else
        He.setExtraStackFrame(null);
    }
    var de;
    de = !1;
    function ve(e) {
      return typeof e == "object" && e !== null && e.$$typeof === t;
    }
    function ze() {
      {
        if (fe.current) {
          var e = D(fe.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Tt(e) {
      return "";
    }
    var Je = {};
    function Ct(e) {
      {
        var a = ze();
        if (!a) {
          var o = typeof e == "string" ? e : e.displayName || e.name;
          o && (a = `

Check the top-level render call using <` + o + ">.");
        }
        return a;
      }
    }
    function qe(e, a) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var o = Ct(a);
        if (Je[o])
          return;
        Je[o] = !0;
        var l = "";
        e && e._owner && e._owner !== fe.current && (l = " It was passed a child from " + D(e._owner.type) + "."), B(e), u('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', o, l), B(null);
      }
    }
    function Be(e, a) {
      {
        if (typeof e != "object")
          return;
        if (ue(e))
          for (var o = 0; o < e.length; o++) {
            var l = e[o];
            ve(l) && qe(l, a);
          }
        else if (ve(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var v = p(e);
          if (typeof v == "function" && v !== e.entries)
            for (var b = v.call(e), d; !(d = b.next()).done; )
              ve(d.value) && qe(d.value, a);
        }
      }
    }
    function xt(e) {
      {
        var a = e.type;
        if (a == null || typeof a == "string")
          return;
        var o;
        if (typeof a == "function")
          o = a.propTypes;
        else if (typeof a == "object" && (a.$$typeof === h || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        a.$$typeof === w))
          o = a.propTypes;
        else
          return;
        if (o) {
          var l = D(a);
          ut(o, e.props, "prop", l, e);
        } else if (a.PropTypes !== void 0 && !de) {
          de = !0;
          var v = D(a);
          u("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", v || "Unknown");
        }
        typeof a.getDefaultProps == "function" && !a.getDefaultProps.isReactClassApproved && u("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function At(e) {
      {
        for (var a = Object.keys(e.props), o = 0; o < a.length; o++) {
          var l = a[o];
          if (l !== "children" && l !== "key") {
            B(e), u("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", l), B(null);
            break;
          }
        }
        e.ref !== null && (B(e), u("Invalid attribute `ref` supplied to `React.Fragment`."), B(null));
      }
    }
    var Ke = {};
    function Ve(e, a, o, l, v, b) {
      {
        var d = M(e);
        if (!d) {
          var f = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (f += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var k = Tt();
          k ? f += k : f += ze();
          var C;
          e === null ? C = "null" : ue(e) ? C = "array" : e !== void 0 && e.$$typeof === t ? (C = "<" + (D(e.type) || "Unknown") + " />", f = " Did you accidentally export a JSX literal instead of a component?") : C = typeof e, u("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", C, f);
        }
        var R = pt(e, a, o, v, b);
        if (R == null)
          return R;
        if (d) {
          var O = a.children;
          if (O !== void 0)
            if (l)
              if (ue(O)) {
                for (var K = 0; K < O.length; K++)
                  Be(O[K], e);
                Object.freeze && Object.freeze(O);
              } else
                u("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Be(O, e);
        }
        if (Z.call(a, "key")) {
          var z = D(e), N = Object.keys(a).filter(function(Nt) {
            return Nt !== "key";
          }), he = N.length > 0 ? "{key: someKey, " + N.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ke[z + he]) {
            var St = N.length > 0 ? "{" + N.join(": ..., ") + ": ...}" : "{}";
            u(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, he, z, St, z), Ke[z + he] = !0;
          }
        }
        return e === i ? At(R) : xt(R), R;
      }
    }
    function Rt(e, a, o) {
      return Ve(e, a, o, !0);
    }
    function jt(e, a, o) {
      return Ve(e, a, o, !1);
    }
    var wt = jt, kt = Rt;
    ee.Fragment = i, ee.jsx = wt, ee.jsxs = kt;
  }()), ee;
}
process.env.NODE_ENV === "production" ? ge.exports = Ft() : ge.exports = It();
var _ = ge.exports;
function Lt(r) {
  var x;
  const t = Array.isArray((x = r == null ? void 0 : r.data) == null ? void 0 : x.sections) ? r.data.sections : Array.isArray(r == null ? void 0 : r.sections) ? r.sections : null;
  if (!t) return [];
  const i = t.filter((s) => !s.type || s.type === "plugin").flatMap((s) => Array.isArray(s.items) ? s.items : []).filter((s) => s && (s.slug || s.name));
  if (i.length === 0) return [];
  const m = i.map((s) => {
    const h = typeof (s == null ? void 0 : s.description) == "object" && s.description !== null ? s.description["en-gb"] || Object.values(s.description)[0] || "" : (s == null ? void 0 : s.description) || "", y = (s == null ? void 0 : s.download) || (s == null ? void 0 : s.download_url) || (s == null ? void 0 : s.downloadUrl) || "", g = typeof (s == null ? void 0 : s.author) == "object" && s.author !== null ? s.author.name || "" : (s == null ? void 0 : s.author) || "", w = typeof (s == null ? void 0 : s.author) == "object" && s.author !== null && s.author.url || "", S = typeof (s == null ? void 0 : s.price) == "object" && s.price !== null ? s.price.amount : void 0, j = typeof (s == null ? void 0 : s.price) == "object" && s.price !== null ? s.price.currency : void 0;
    return {
      ...s,
      name: (s == null ? void 0 : s.name) || "Unknown",
      slug: (s == null ? void 0 : s.slug) || "",
      thumbnail: (s == null ? void 0 : s.thumbnail) || "",
      description: h,
      download: y,
      author: g,
      authorUrl: w,
      priceAmount: S,
      priceCurrency: j,
      installed: (s == null ? void 0 : s.installed) ?? !1,
      activated: (s == null ? void 0 : s.activated) ?? !1
    };
  }), c = /* @__PURE__ */ new Set();
  return m.filter((s) => {
    const h = s.slug || s.name || JSON.stringify(s);
    return c.has(h) ? !1 : (c.add(h), !0);
  });
}
function $t({ plugin: r, pluginInAction: t, onAction: n }) {
  const i = (m) => {
    n(m, r);
  };
  return /* @__PURE__ */ _.jsx("div", { className: "plugin-actions gv-card-content gv-flex gv-gap-sm gv-mt-md", children: r.installed ? r.activated ? /* @__PURE__ */ _.jsx(
    "button",
    {
      className: "gv-button gv-button-secondary",
      disabled: t[r.slug],
      onClick: () => i("deactivate"),
      children: t[r.slug] ? marketplaceConfig.labels.deactivating : marketplaceConfig.labels.deactivate
    }
  ) : /* @__PURE__ */ _.jsx(
    "button",
    {
      className: "gv-button gv-button-primary",
      disabled: t[r.slug],
      onClick: () => i("activate"),
      children: t[r.slug] ? marketplaceConfig.labels.activating : marketplaceConfig.labels.activate
    }
  ) : /* @__PURE__ */ _.jsx(
    "button",
    {
      className: "gv-button gv-button-secondary",
      disabled: t[r.slug],
      onClick: () => i("install"),
      children: t[r.slug] ? marketplaceConfig.labels.installing : marketplaceConfig.labels.install
    }
  ) });
}
var Dt = Object.defineProperty, Gt = (r, t, n) => t in r ? Dt(r, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : r[t] = n, G = (r, t, n) => (Gt(r, t + "", n), n);
const me = {};
async function W(r) {
  if (me.hasOwnProperty(r))
    return me[r];
  let t;
  return r.startsWith("data:") || !("caches" in self) ? t = fetch(r).then((n) => n.text()) : t = caches.open("gravity").then(async (n) => {
    let i = await n.match(r);
    return i || (i = await fetch(r), i.ok && await n.put(r, i.clone())), i.text();
  }), me[r] = t, t;
}
class be extends HTMLElement {
  static get observedAttributes() {
    return ["src"];
  }
  fetchFlag(t) {
    t && W(t).then((n) => this.innerHTML = n);
  }
  connectedCallback() {
    this.fetchFlag(this.getAttribute("src"));
  }
  attributeChangedCallback(t, n, i) {
    t === "src" && n !== i && this.fetchFlag(i);
  }
}
G(be, "TAG_NAME", "gv-flag");
class ye extends HTMLElement {
  static get observedAttributes() {
    return ["src"];
  }
  fetchIcon(t) {
    t && W(t).then((n) => this.innerHTML = n);
  }
  connectedCallback() {
    this.fetchIcon(this.getAttribute("src"));
  }
  attributeChangedCallback(t, n, i) {
    t === "src" && n !== i && this.fetchIcon(i);
  }
}
G(ye, "TAG_NAME", "gv-icon");
class Ee extends HTMLElement {
  static get observedAttributes() {
    return ["src"];
  }
  fetchIllustration(t) {
    t && W(t).then((n) => this.innerHTML = n);
  }
  connectedCallback() {
    this.fetchIllustration(this.getAttribute("src"));
  }
  attributeChangedCallback(t, n, i) {
    t === "src" && n !== i && this.fetchIllustration(i);
  }
}
G(Ee, "TAG_NAME", "gv-illustration");
class _e extends HTMLElement {
  static get observedAttributes() {
    return ["src"];
  }
  fetchIndicator(t) {
    t && W(t).then((n) => this.innerHTML = n);
  }
  connectedCallback() {
    this.fetchIndicator(this.getAttribute("src"));
  }
  attributeChangedCallback(t, n, i) {
    t === "src" && n !== i && this.fetchIndicator(i);
  }
}
G(_e, "TAG_NAME", "gv-indicator");
class pe extends HTMLElement {
  static get observedAttributes() {
    return ["src"];
  }
  fetchLoader(t) {
    t && W(t).then((n) => this.innerHTML = n);
  }
  connectedCallback() {
    this.fetchLoader(this.getAttribute("src"));
  }
  attributeChangedCallback(t, n, i) {
    t === "src" && n !== i && this.fetchLoader(i);
  }
}
G(pe, "TAG_NAME", "gv-loader");
class Te extends HTMLElement {
  static get observedAttributes() {
    return ["src"];
  }
  fetchLogo(t) {
    t && W(t).then((n) => this.innerHTML = n);
  }
  connectedCallback() {
    this.fetchLogo(this.getAttribute("src"));
  }
  attributeChangedCallback(t, n, i) {
    t === "src" && n !== i && this.fetchLogo(i);
  }
}
G(Te, "TAG_NAME", "gv-logo");
class Ce extends HTMLElement {
  static get observedAttributes() {
    return ["src"];
  }
  fetchPayIcon(t) {
    t && W(t).then((n) => this.innerHTML = n);
  }
  connectedCallback() {
    this.fetchPayIcon(this.getAttribute("src"));
  }
  attributeChangedCallback(t, n, i) {
    t === "src" && n !== i && this.fetchPayIcon(i);
  }
}
G(Ce, "TAG_NAME", "gv-pay-icon");
class xe extends HTMLElement {
  static get observedAttributes() {
    return ["src"];
  }
  fetchTile(t) {
    t && W(t).then((n) => this.innerHTML = n);
  }
  connectedCallback() {
    this.fetchTile(this.getAttribute("src"));
  }
  attributeChangedCallback(t, n, i) {
    t === "src" && n !== i && this.fetchTile(i);
  }
}
G(xe, "TAG_NAME", "gv-tile");
function Y(r, t) {
  customElements.get(r) || customElements.define(r, t);
}
Y(be.TAG_NAME, be);
Y(ye.TAG_NAME, ye);
Y(Ee.TAG_NAME, Ee);
Y(_e.TAG_NAME, _e);
Y(pe.TAG_NAME, pe);
Y(Te.TAG_NAME, Te);
Y(Ce.TAG_NAME, Ce);
Y(xe.TAG_NAME, xe);
const Wt = (r, t, n, i) => {
  var c, x, s, h;
  const m = [n, {
    code: t,
    ...i || {}
  }];
  if ((x = (c = r == null ? void 0 : r.services) == null ? void 0 : c.logger) != null && x.forward)
    return r.services.logger.forward(m, "warn", "react-i18next::", !0);
  J(m[0]) && (m[0] = `react-i18next:: ${m[0]}`), (h = (s = r == null ? void 0 : r.services) == null ? void 0 : s.logger) != null && h.warn ? r.services.logger.warn(...m) : console != null && console.warn && console.warn(...m);
}, Qe = {}, Ae = (r, t, n, i) => {
  J(n) && Qe[n] || (J(n) && (Qe[n] = /* @__PURE__ */ new Date()), Wt(r, t, n, i));
}, at = (r, t) => () => {
  if (r.isInitialized)
    t();
  else {
    const n = () => {
      setTimeout(() => {
        r.off("initialized", n);
      }, 0), t();
    };
    r.on("initialized", n);
  }
}, Re = (r, t, n) => {
  r.loadNamespaces(t, at(r, n));
}, et = (r, t, n, i) => {
  if (J(n) && (n = [n]), r.options.preload && r.options.preload.indexOf(t) > -1) return Re(r, n, i);
  n.forEach((m) => {
    r.options.ns.indexOf(m) < 0 && r.options.ns.push(m);
  }), r.loadLanguages(t, at(r, i));
}, Yt = (r, t, n = {}) => !t.languages || !t.languages.length ? (Ae(t, "NO_LANGUAGES", "i18n.languages were undefined or empty", {
  languages: t.languages
}), !0) : t.hasLoadedNamespace(r, {
  lng: n.lng,
  precheck: (i, m) => {
    if (n.bindI18n && n.bindI18n.indexOf("languageChanging") > -1 && i.services.backendConnector.backend && i.isLanguageChangingTo && !m(i.isLanguageChangingTo, r)) return !1;
  }
}), J = (r) => typeof r == "string", Ut = (r) => typeof r == "object" && r !== null, Ht = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, zt = {
  "&amp;": "&",
  "&#38;": "&",
  "&lt;": "<",
  "&#60;": "<",
  "&gt;": ">",
  "&#62;": ">",
  "&apos;": "'",
  "&#39;": "'",
  "&quot;": '"',
  "&#34;": '"',
  "&nbsp;": " ",
  "&#160;": " ",
  "&copy;": "©",
  "&#169;": "©",
  "&reg;": "®",
  "&#174;": "®",
  "&hellip;": "…",
  "&#8230;": "…",
  "&#x2F;": "/",
  "&#47;": "/"
}, Jt = (r) => zt[r], qt = (r) => r.replace(Ht, Jt);
let Bt = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: qt
};
const Kt = () => Bt;
let Vt;
const Xt = () => Vt, Zt = Pt();
class Qt {
  constructor() {
    this.usedNamespaces = {};
  }
  addUsedNamespaces(t) {
    t.forEach((n) => {
      this.usedNamespaces[n] || (this.usedNamespaces[n] = !0);
    });
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces);
  }
}
const er = (r, t) => {
  const n = rt();
  return oe(() => {
    n.current = r;
  }, [r, t]), n.current;
}, nt = (r, t, n, i) => r.getFixedT(t, n, i), tr = (r, t, n, i) => Mt(nt(r, t, n, i), [r, t, n, i]), rr = (r, t = {}) => {
  var U, V, $, q;
  const {
    i18n: n
  } = t, {
    i18n: i,
    defaultNS: m
  } = Ot(Zt) || {}, c = n || i || Xt();
  if (c && !c.reportNamespaces && (c.reportNamespaces = new Qt()), !c) {
    Ae(c, "NO_I18NEXT_INSTANCE", "useTranslation: You will need to pass in an i18next instance by using initReactI18next");
    const A = (M, F) => J(F) ? F : Ut(F) && J(F.defaultValue) ? F.defaultValue : Array.isArray(M) ? M[M.length - 1] : M, P = [A, {}, !1];
    return P.t = A, P.i18n = {}, P.ready = !1, P;
  }
  (U = c.options.react) != null && U.wait && Ae(c, "DEPRECATED_OPTION", "useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  const x = {
    ...Kt(),
    ...c.options.react,
    ...t
  }, {
    useSuspense: s,
    keyPrefix: h
  } = x;
  let y = m || ((V = c.options) == null ? void 0 : V.defaultNS);
  y = J(y) ? [y] : y || ["translation"], (q = ($ = c.reportNamespaces).addUsedNamespaces) == null || q.call($, y);
  const g = (c.isInitialized || c.initializedStoreOnce) && y.every((A) => Yt(A, c, x)), w = tr(c, t.lng || null, x.nsMode === "fallback" ? y : y[0], h), S = () => w, j = () => nt(c, t.lng || null, x.nsMode === "fallback" ? y : y[0], h), [I, L] = se(S);
  let p = y.join();
  t.lng && (p = `${t.lng}${p}`);
  const E = er(p), u = rt(!0);
  oe(() => {
    const {
      bindI18n: A,
      bindI18nStore: P
    } = x;
    u.current = !0, !g && !s && (t.lng ? et(c, t.lng, y, () => {
      u.current && L(j);
    }) : Re(c, y, () => {
      u.current && L(j);
    })), g && E && E !== p && u.current && L(j);
    const M = () => {
      u.current && L(j);
    };
    return A && (c == null || c.on(A, M)), P && (c == null || c.store.on(P, M)), () => {
      u.current = !1, c && A && (A == null || A.split(" ").forEach((F) => c.off(F, M))), P && c && P.split(" ").forEach((F) => c.store.off(F, M));
    };
  }, [c, p]), oe(() => {
    u.current && g && L(S);
  }, [c, h, g]);
  const T = [I, c, g];
  if (T.t = I, T.i18n = c, T.ready = g, g || !g && !s) return T;
  throw new Promise((A) => {
    t.lng ? et(c, t.lng, y, () => A()) : Re(c, y, () => A());
  });
};
function ar({ apiBaseUrl: r, useWPHandlers: t, wpConfig: n, enableDefaultStyles: i, assetsBaseUrl: m }) {
  const [c, x] = se([]), [s, h] = se(!0), [y, g] = se({}), { t: w } = rr();
  oe(() => {
    async function p() {
      try {
        const u = await (await fetch(`${r}`)).json(), T = Lt(u);
        x(T);
      } catch (E) {
        console.error("Failed to fetch plugins", E);
      } finally {
        h(!1);
      }
    }
    p();
  }, [r, t, n]);
  const S = async (p, E) => {
    var u;
    g((T) => ({ ...T, [E.slug]: !0 }));
    try {
      let T = `${r}/${p}/${E.slug}`;
      const U = `download_url=${encodeURIComponent(E.download || "")}`;
      t ? T = `${n.ajax_url}?action=marketplace_${p}_plugin&_wpnonce=${n.nonce}&nonce=${n.nonce}&slug=${E.slug}&${U}` : T = T + (T.includes("?") ? "&" : "?") + U;
      const $ = await (await fetch(T, { method: "POST" })).json();
      $.success ? x(
        (q) => q.map(
          (A) => A.slug === E.slug ? { ...A, installed: $.data.installed, activated: $.data.activated } : A
        )
      ) : alert(((u = $.data) == null ? void 0 : u.message) || "Failed to perform action");
    } catch (T) {
      console.error("Plugin action failed", T);
    } finally {
      g((T) => ({ ...T, [E.slug]: !1 }));
    }
  };
  if (s) return /* @__PURE__ */ _.jsx("p", { children: "Loading plugins..." });
  const j = /* @__PURE__ */ new Map(), I = /* @__PURE__ */ new Map();
  c.forEach((p) => {
    I.has(p.slug) || I.set(p.slug, p);
  }), Array.from(I.values()).forEach((p) => {
    const E = Array.isArray(p.categories) && p.categories.length ? String(p.categories[0]) : "Others";
    j.has(E) || j.set(E, []), j.get(E).push(p);
  });
  const L = Array.from(j.entries());
  return /* @__PURE__ */ _.jsx("div", { className: "marketplace-container gv-flex gv-flex-col gv-flex-wrap gv-gap-lg gv-mt-fluid", children: L.map(([p, E]) => /* @__PURE__ */ _.jsxs("section", { className: "", children: [
    /* @__PURE__ */ _.jsx("h2", { className: "gv-heading-md gv-mb-sm", children: p }),
    /* @__PURE__ */ _.jsx("div", { className: "gv-grid gv-gap-lg gv-tab-grid-cols-1 gv-desk-grid-cols-2", children: E.map((u) => /* @__PURE__ */ _.jsxs("a", { href: "#", className: "gv-shortcut-tile gv-surface-bright", children: [
      /* @__PURE__ */ _.jsx("gv-tile", { "aria-hidden": "true", src: `${m || window.marketplaceConfig && window.marketplaceConfig.assetsBaseUrl || ""}assets/icons/placeholder.svg` }),
      /* @__PURE__ */ _.jsxs("div", { className: "gv-content", children: [
        /* @__PURE__ */ _.jsx("h3", { className: "gv-title", children: u.name }),
        /* @__PURE__ */ _.jsx("p", { children: u.description ? u.description : u.shortDescription }),
        /* @__PURE__ */ _.jsxs("div", { className: "gv-price", children: [
          /* @__PURE__ */ _.jsx("span", { className: "gv-price-prefix", children: w("migratorMail_hi") }),
          /* @__PURE__ */ _.jsxs("span", { className: "gv-price-text", children: [
            u.priceCurrency,
            " ",
            u.priceAmount
          ] }),
          /* @__PURE__ */ _.jsx("span", { className: "gv-period", children: "/mo" })
        ] })
      ] }),
      /* @__PURE__ */ _.jsx("gv-icon", { "aria-hidden": "true", src: `${m || window.marketplaceConfig && window.marketplaceConfig.assetsBaseUrl || ""}assets/icons/arrow_forward.svg` }),
      t === !0 && /* @__PURE__ */ _.jsx(
        $t,
        {
          plugin: u,
          pluginInAction: y,
          onAction: S
        }
      )
    ] }, u.slug)) })
  ] }, p)) });
}
const sr = ({ apiBaseUrl: r, useWPHandlers: t, wpConfig: n, enableDefaultStyles: i, assetsBaseUrl: m }) => /* @__PURE__ */ _.jsxs("div", { className: "marketplace-container gv-p-lg", children: [
  /* @__PURE__ */ _.jsxs("div", { className: "gv-content-container gv-p-lg gv-flex-column-md", style: { background: "#F3F4F0" }, children: [
    /* @__PURE__ */ _.jsx("h2", { className: "gv-heading-lg", children: "one.com WP marketplace" }),
    /* @__PURE__ */ _.jsx("p", { className: "gv-text-sm", children: "Your place to find recommended and relevant plugins for your site." })
  ] }),
  /* @__PURE__ */ _.jsx(
    ar,
    {
      apiBaseUrl: r,
      useWPHandlers: t,
      wpConfig: n,
      enableDefaultStyles: i,
      assetsBaseUrl: m
    }
  )
] });
export {
  sr as default
};
