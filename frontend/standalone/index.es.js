import tt, { createContext as Pt, useContext as Ot, useCallback as Mt, useState as te, useRef as rt, useEffect as oe } from "react";
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
function It() {
  if (Xe) return Q;
  Xe = 1;
  var r = tt, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, g = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function T(s, d, h) {
    var m, k = {}, N = null, M = null;
    h !== void 0 && (N = "" + h), d.key !== void 0 && (N = "" + d.key), d.ref !== void 0 && (M = d.ref);
    for (m in d) i.call(d, m) && !c.hasOwnProperty(m) && (k[m] = d[m]);
    if (s && s.defaultProps) for (m in d = s.defaultProps, d) k[m] === void 0 && (k[m] = d[m]);
    return { $$typeof: t, type: s, key: N, ref: M, props: k, _owner: g.current };
  }
  return Q.Fragment = n, Q.jsx = T, Q.jsxs = T, Q;
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
function Ft() {
  return Ze || (Ze = 1, process.env.NODE_ENV !== "production" && function() {
    var r = tt, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), g = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), T = Symbol.for("react.provider"), s = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), M = Symbol.for("react.offscreen"), z = Symbol.iterator, G = "@@iterator";
    function L(e) {
      if (e === null || typeof e != "object")
        return null;
      var a = z && e[z] || e[G];
      return typeof a == "function" ? a : null;
    }
    var I = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function p(e) {
      {
        for (var a = arguments.length, o = new Array(a > 1 ? a - 1 : 0), l = 1; l < a; l++)
          o[l - 1] = arguments[l];
        _("error", e, o);
      }
    }
    function _(e, a, o) {
      {
        var l = I.ReactDebugCurrentFrame, v = l.getStackAddendum();
        v !== "" && (a += "%s", o = o.concat([v]));
        var y = o.map(function(f) {
          return String(f);
        });
        y.unshift("Warning: " + a), Function.prototype.apply.call(console[e], console, y);
      }
    }
    var C = !1, b = !1, x = !1, $ = !1, A = !1, j;
    j = Symbol.for("react.module.reference");
    function F(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === i || e === c || A || e === g || e === h || e === m || $ || e === M || C || b || x || typeof e == "object" && e !== null && (e.$$typeof === N || e.$$typeof === k || e.$$typeof === T || e.$$typeof === s || e.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === j || e.getModuleId !== void 0));
    }
    function S(e, a, o) {
      var l = e.displayName;
      if (l)
        return l;
      var v = a.displayName || a.name || "";
      return v !== "" ? o + "(" + v + ")" : o;
    }
    function Re(e) {
      return e.displayName || "Context";
    }
    function W(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && p("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
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
        case g:
          return "StrictMode";
        case h:
          return "Suspense";
        case m:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case s:
            var a = e;
            return Re(a) + ".Consumer";
          case T:
            var o = e;
            return Re(o._context) + ".Provider";
          case d:
            return S(e, e.render, "ForwardRef");
          case k:
            var l = e.displayName || null;
            return l !== null ? l : W(e.type) || "Memo";
          case N: {
            var v = e, y = v._payload, f = v._init;
            try {
              return W(f(y));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var J = Object.assign, X = 0, ke, je, Ne, Se, Pe, Oe, Me;
    function Ie() {
    }
    Ie.__reactDisabledLog = !0;
    function st() {
      {
        if (X === 0) {
          ke = console.log, je = console.info, Ne = console.warn, Se = console.error, Pe = console.group, Oe = console.groupCollapsed, Me = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Ie,
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
            log: J({}, e, {
              value: ke
            }),
            info: J({}, e, {
              value: je
            }),
            warn: J({}, e, {
              value: Ne
            }),
            error: J({}, e, {
              value: Se
            }),
            group: J({}, e, {
              value: Pe
            }),
            groupCollapsed: J({}, e, {
              value: Oe
            }),
            groupEnd: J({}, e, {
              value: Me
            })
          });
        }
        X < 0 && p("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ie = I.ReactCurrentDispatcher, ce;
    function re(e, a, o) {
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
    var le = !1, ae;
    {
      var it = typeof WeakMap == "function" ? WeakMap : Map;
      ae = new it();
    }
    function Fe(e, a) {
      if (!e || le)
        return "";
      {
        var o = ae.get(e);
        if (o !== void 0)
          return o;
      }
      var l;
      le = !0;
      var v = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var y;
      y = ie.current, ie.current = null, st();
      try {
        if (a) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (O) {
              l = O;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (O) {
              l = O;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (O) {
            l = O;
          }
          e();
        }
      } catch (O) {
        if (O && l && typeof O.stack == "string") {
          for (var u = O.stack.split(`
`), P = l.stack.split(`
`), w = u.length - 1, R = P.length - 1; w >= 1 && R >= 0 && u[w] !== P[R]; )
            R--;
          for (; w >= 1 && R >= 0; w--, R--)
            if (u[w] !== P[R]) {
              if (w !== 1 || R !== 1)
                do
                  if (w--, R--, R < 0 || u[w] !== P[R]) {
                    var D = `
` + u[w].replace(" at new ", " at ");
                    return e.displayName && D.includes("<anonymous>") && (D = D.replace("<anonymous>", e.displayName)), typeof e == "function" && ae.set(e, D), D;
                  }
                while (w >= 1 && R >= 0);
              break;
            }
        }
      } finally {
        le = !1, ie.current = y, ot(), Error.prepareStackTrace = v;
      }
      var V = e ? e.displayName || e.name : "", q = V ? re(V) : "";
      return typeof e == "function" && ae.set(e, q), q;
    }
    function ct(e, a, o) {
      return Fe(e, !1);
    }
    function lt(e) {
      var a = e.prototype;
      return !!(a && a.isReactComponent);
    }
    function ne(e, a, o) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Fe(e, lt(e));
      if (typeof e == "string")
        return re(e);
      switch (e) {
        case h:
          return re("Suspense");
        case m:
          return re("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return ct(e.render);
          case k:
            return ne(e.type, a, o);
          case N: {
            var l = e, v = l._payload, y = l._init;
            try {
              return ne(y(v), a, o);
            } catch {
            }
          }
        }
      return "";
    }
    var Z = Object.prototype.hasOwnProperty, Le = {}, De = I.ReactDebugCurrentFrame;
    function se(e) {
      if (e) {
        var a = e._owner, o = ne(e.type, e._source, a ? a.type : null);
        De.setExtraStackFrame(o);
      } else
        De.setExtraStackFrame(null);
    }
    function ut(e, a, o, l, v) {
      {
        var y = Function.call.bind(Z);
        for (var f in e)
          if (y(e, f)) {
            var u = void 0;
            try {
              if (typeof e[f] != "function") {
                var P = Error((l || "React class") + ": " + o + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw P.name = "Invariant Violation", P;
              }
              u = e[f](a, f, l, o, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (w) {
              u = w;
            }
            u && !(u instanceof Error) && (se(v), p("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", l || "React class", o, f, typeof u), se(null)), u instanceof Error && !(u.message in Le) && (Le[u.message] = !0, se(v), p("Failed %s type: %s", o, u.message), se(null));
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
        return $e(e), !1;
      } catch {
        return !0;
      }
    }
    function $e(e) {
      return "" + e;
    }
    function Ge(e) {
      if (vt(e))
        return p("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", dt(e)), $e(e);
    }
    var We = I.ReactCurrentOwner, ht = {
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
          Ye || (Ye = !0, p("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
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
          Ue || (Ue = !0, p("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        o.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: o,
          configurable: !0
        });
      }
    }
    var _t = function(e, a, o, l, v, y, f) {
      var u = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: e,
        key: a,
        ref: o,
        props: f,
        // Record the component responsible for creating this element.
        _owner: y
      };
      return u._store = {}, Object.defineProperty(u._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(u, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: l
      }), Object.defineProperty(u, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: v
      }), Object.freeze && (Object.freeze(u.props), Object.freeze(u)), u;
    };
    function pt(e, a, o, l, v) {
      {
        var y, f = {}, u = null, P = null;
        o !== void 0 && (Ge(o), u = "" + o), gt(a) && (Ge(a.key), u = "" + a.key), mt(a) && (P = a.ref, bt(a, v));
        for (y in a)
          Z.call(a, y) && !ht.hasOwnProperty(y) && (f[y] = a[y]);
        if (e && e.defaultProps) {
          var w = e.defaultProps;
          for (y in w)
            f[y] === void 0 && (f[y] = w[y]);
        }
        if (u || P) {
          var R = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          u && yt(f, R), P && Et(f, R);
        }
        return _t(e, u, P, v, l, We.current, f);
      }
    }
    var fe = I.ReactCurrentOwner, He = I.ReactDebugCurrentFrame;
    function K(e) {
      if (e) {
        var a = e._owner, o = ne(e.type, e._source, a ? a.type : null);
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
          var e = W(fe.current.type);
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
        e && e._owner && e._owner !== fe.current && (l = " It was passed a child from " + W(e._owner.type) + "."), K(e), p('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', o, l), K(null);
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
          var v = L(e);
          if (typeof v == "function" && v !== e.entries)
            for (var y = v.call(e), f; !(f = y.next()).done; )
              ve(f.value) && qe(f.value, a);
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
        else if (typeof a == "object" && (a.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        a.$$typeof === k))
          o = a.propTypes;
        else
          return;
        if (o) {
          var l = W(a);
          ut(o, e.props, "prop", l, e);
        } else if (a.PropTypes !== void 0 && !de) {
          de = !0;
          var v = W(a);
          p("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", v || "Unknown");
        }
        typeof a.getDefaultProps == "function" && !a.getDefaultProps.isReactClassApproved && p("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function At(e) {
      {
        for (var a = Object.keys(e.props), o = 0; o < a.length; o++) {
          var l = a[o];
          if (l !== "children" && l !== "key") {
            K(e), p("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", l), K(null);
            break;
          }
        }
        e.ref !== null && (K(e), p("Invalid attribute `ref` supplied to `React.Fragment`."), K(null));
      }
    }
    var Ke = {};
    function Ve(e, a, o, l, v, y) {
      {
        var f = F(e);
        if (!f) {
          var u = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (u += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var P = Tt();
          P ? u += P : u += ze();
          var w;
          e === null ? w = "null" : ue(e) ? w = "array" : e !== void 0 && e.$$typeof === t ? (w = "<" + (W(e.type) || "Unknown") + " />", u = " Did you accidentally export a JSX literal instead of a component?") : w = typeof e, p("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", w, u);
        }
        var R = pt(e, a, o, v, y);
        if (R == null)
          return R;
        if (f) {
          var D = a.children;
          if (D !== void 0)
            if (l)
              if (ue(D)) {
                for (var V = 0; V < D.length; V++)
                  Be(D[V], e);
                Object.freeze && Object.freeze(D);
              } else
                p("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Be(D, e);
        }
        if (Z.call(a, "key")) {
          var q = W(e), O = Object.keys(a).filter(function(St) {
            return St !== "key";
          }), he = O.length > 0 ? "{key: someKey, " + O.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ke[q + he]) {
            var Nt = O.length > 0 ? "{" + O.join(": ..., ") + ": ...}" : "{}";
            p(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, he, q, Nt, q), Ke[q + he] = !0;
          }
        }
        return e === i ? At(R) : xt(R), R;
      }
    }
    function wt(e, a, o) {
      return Ve(e, a, o, !0);
    }
    function Rt(e, a, o) {
      return Ve(e, a, o, !1);
    }
    var kt = Rt, jt = wt;
    ee.Fragment = i, ee.jsx = kt, ee.jsxs = jt;
  }()), ee;
}
process.env.NODE_ENV === "production" ? ge.exports = It() : ge.exports = Ft();
var E = ge.exports;
function Lt(r) {
  var T;
  const t = Array.isArray((T = r == null ? void 0 : r.data) == null ? void 0 : T.sections) ? r.data.sections : Array.isArray(r == null ? void 0 : r.sections) ? r.sections : null;
  if (!t) return [];
  const i = t.filter((s) => !s.type || s.type === "plugin").flatMap((s) => Array.isArray(s.items) ? s.items : []).filter((s) => s && (s.slug || s.name));
  if (i.length === 0) return [];
  const g = i.map((s) => {
    const d = typeof (s == null ? void 0 : s.description) == "object" && s.description !== null ? s.description["en-gb"] || Object.values(s.description)[0] || "" : (s == null ? void 0 : s.description) || "", h = (s == null ? void 0 : s.download) || (s == null ? void 0 : s.download_url) || (s == null ? void 0 : s.downloadUrl) || "", m = typeof (s == null ? void 0 : s.author) == "object" && s.author !== null ? s.author.name || "" : (s == null ? void 0 : s.author) || "", k = typeof (s == null ? void 0 : s.author) == "object" && s.author !== null && s.author.url || "", N = typeof (s == null ? void 0 : s.price) == "object" && s.price !== null ? s.price.amount : void 0, M = typeof (s == null ? void 0 : s.price) == "object" && s.price !== null ? s.price.currency : void 0;
    return {
      ...s,
      name: (s == null ? void 0 : s.name) || "Unknown",
      slug: (s == null ? void 0 : s.slug) || "",
      thumbnail: (s == null ? void 0 : s.thumbnail) || "",
      description: d,
      download: h,
      author: m,
      authorUrl: k,
      priceAmount: N,
      priceCurrency: M,
      installed: (s == null ? void 0 : s.installed) ?? !1,
      activated: (s == null ? void 0 : s.activated) ?? !1
    };
  }), c = /* @__PURE__ */ new Set();
  return g.filter((s) => {
    const d = s.slug || s.name || JSON.stringify(s);
    return c.has(d) ? !1 : (c.add(d), !0);
  });
}
function Dt({ plugin: r, pluginInAction: t, onAction: n }) {
  var g, c, T, s, d, h;
  const i = (m) => {
    n(m, r);
  };
  return /* @__PURE__ */ E.jsx("div", { className: "plugin-actions gv-card-content gv-flex gv-gap-sm gv-mt-md", children: r.installed ? r.activated ? /* @__PURE__ */ E.jsx(
    "button",
    {
      className: "gv-button gv-button-secondary",
      disabled: t[r.slug],
      onClick: () => i("deactivate"),
      children: t[r.slug] ? ((g = marketplaceConfig == null ? void 0 : marketplaceConfig.labels) == null ? void 0 : g.deactivating) || "Deactivating..." : ((c = marketplaceConfig == null ? void 0 : marketplaceConfig.labels) == null ? void 0 : c.deactivate) || "Deactivate"
    }
  ) : /* @__PURE__ */ E.jsx(
    "button",
    {
      className: "gv-button gv-button-primary",
      disabled: t[r.slug],
      onClick: () => i("activate"),
      children: t[r.slug] ? ((T = marketplaceConfig == null ? void 0 : marketplaceConfig.labels) == null ? void 0 : T.activating) || "Activating..." : ((s = marketplaceConfig == null ? void 0 : marketplaceConfig.labels) == null ? void 0 : s.activate) || "Activate"
    }
  ) : /* @__PURE__ */ E.jsx(
    "button",
    {
      className: "gv-button gv-button-secondary",
      disabled: t[r.slug],
      onClick: () => i("install"),
      children: t[r.slug] ? ((d = marketplaceConfig == null ? void 0 : marketplaceConfig.labels) == null ? void 0 : d.installing) || "Installing..." : ((h = marketplaceConfig == null ? void 0 : marketplaceConfig.labels) == null ? void 0 : h.install) || "Install"
    }
  ) });
}
var $t = Object.defineProperty, Gt = (r, t, n) => t in r ? $t(r, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : r[t] = n, Y = (r, t, n) => (Gt(r, t + "", n), n);
const me = {};
async function U(r) {
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
    t && U(t).then((n) => this.innerHTML = n);
  }
  connectedCallback() {
    this.fetchFlag(this.getAttribute("src"));
  }
  attributeChangedCallback(t, n, i) {
    t === "src" && n !== i && this.fetchFlag(i);
  }
}
Y(be, "TAG_NAME", "gv-flag");
class ye extends HTMLElement {
  static get observedAttributes() {
    return ["src"];
  }
  fetchIcon(t) {
    t && U(t).then((n) => this.innerHTML = n);
  }
  connectedCallback() {
    this.fetchIcon(this.getAttribute("src"));
  }
  attributeChangedCallback(t, n, i) {
    t === "src" && n !== i && this.fetchIcon(i);
  }
}
Y(ye, "TAG_NAME", "gv-icon");
class Ee extends HTMLElement {
  static get observedAttributes() {
    return ["src"];
  }
  fetchIllustration(t) {
    t && U(t).then((n) => this.innerHTML = n);
  }
  connectedCallback() {
    this.fetchIllustration(this.getAttribute("src"));
  }
  attributeChangedCallback(t, n, i) {
    t === "src" && n !== i && this.fetchIllustration(i);
  }
}
Y(Ee, "TAG_NAME", "gv-illustration");
class _e extends HTMLElement {
  static get observedAttributes() {
    return ["src"];
  }
  fetchIndicator(t) {
    t && U(t).then((n) => this.innerHTML = n);
  }
  connectedCallback() {
    this.fetchIndicator(this.getAttribute("src"));
  }
  attributeChangedCallback(t, n, i) {
    t === "src" && n !== i && this.fetchIndicator(i);
  }
}
Y(_e, "TAG_NAME", "gv-indicator");
class pe extends HTMLElement {
  static get observedAttributes() {
    return ["src"];
  }
  fetchLoader(t) {
    t && U(t).then((n) => this.innerHTML = n);
  }
  connectedCallback() {
    this.fetchLoader(this.getAttribute("src"));
  }
  attributeChangedCallback(t, n, i) {
    t === "src" && n !== i && this.fetchLoader(i);
  }
}
Y(pe, "TAG_NAME", "gv-loader");
class Te extends HTMLElement {
  static get observedAttributes() {
    return ["src"];
  }
  fetchLogo(t) {
    t && U(t).then((n) => this.innerHTML = n);
  }
  connectedCallback() {
    this.fetchLogo(this.getAttribute("src"));
  }
  attributeChangedCallback(t, n, i) {
    t === "src" && n !== i && this.fetchLogo(i);
  }
}
Y(Te, "TAG_NAME", "gv-logo");
class Ce extends HTMLElement {
  static get observedAttributes() {
    return ["src"];
  }
  fetchPayIcon(t) {
    t && U(t).then((n) => this.innerHTML = n);
  }
  connectedCallback() {
    this.fetchPayIcon(this.getAttribute("src"));
  }
  attributeChangedCallback(t, n, i) {
    t === "src" && n !== i && this.fetchPayIcon(i);
  }
}
Y(Ce, "TAG_NAME", "gv-pay-icon");
class xe extends HTMLElement {
  static get observedAttributes() {
    return ["src"];
  }
  fetchTile(t) {
    t && U(t).then((n) => this.innerHTML = n);
  }
  connectedCallback() {
    this.fetchTile(this.getAttribute("src"));
  }
  attributeChangedCallback(t, n, i) {
    t === "src" && n !== i && this.fetchTile(i);
  }
}
Y(xe, "TAG_NAME", "gv-tile");
function H(r, t) {
  customElements.get(r) || customElements.define(r, t);
}
H(be.TAG_NAME, be);
H(ye.TAG_NAME, ye);
H(Ee.TAG_NAME, Ee);
H(_e.TAG_NAME, _e);
H(pe.TAG_NAME, pe);
H(Te.TAG_NAME, Te);
H(Ce.TAG_NAME, Ce);
H(xe.TAG_NAME, xe);
const Wt = (r, t, n, i) => {
  var c, T, s, d;
  const g = [n, {
    code: t,
    ...i || {}
  }];
  if ((T = (c = r == null ? void 0 : r.services) == null ? void 0 : c.logger) != null && T.forward)
    return r.services.logger.forward(g, "warn", "react-i18next::", !0);
  B(g[0]) && (g[0] = `react-i18next:: ${g[0]}`), (d = (s = r == null ? void 0 : r.services) == null ? void 0 : s.logger) != null && d.warn ? r.services.logger.warn(...g) : console != null && console.warn && console.warn(...g);
}, Qe = {}, Ae = (r, t, n, i) => {
  B(n) && Qe[n] || (B(n) && (Qe[n] = /* @__PURE__ */ new Date()), Wt(r, t, n, i));
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
}, we = (r, t, n) => {
  r.loadNamespaces(t, at(r, n));
}, et = (r, t, n, i) => {
  if (B(n) && (n = [n]), r.options.preload && r.options.preload.indexOf(t) > -1) return we(r, n, i);
  n.forEach((g) => {
    r.options.ns.indexOf(g) < 0 && r.options.ns.push(g);
  }), r.loadLanguages(t, at(r, i));
}, Yt = (r, t, n = {}) => !t.languages || !t.languages.length ? (Ae(t, "NO_LANGUAGES", "i18n.languages were undefined or empty", {
  languages: t.languages
}), !0) : t.hasLoadedNamespace(r, {
  lng: n.lng,
  precheck: (i, g) => {
    if (n.bindI18n && n.bindI18n.indexOf("languageChanging") > -1 && i.services.backendConnector.backend && i.isLanguageChangingTo && !g(i.isLanguageChangingTo, r)) return !1;
  }
}), B = (r) => typeof r == "string", Ut = (r) => typeof r == "object" && r !== null, Ht = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, zt = {
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
  var C, b, x, $;
  const {
    i18n: n
  } = t, {
    i18n: i,
    defaultNS: g
  } = Ot(Zt) || {}, c = n || i || Xt();
  if (c && !c.reportNamespaces && (c.reportNamespaces = new Qt()), !c) {
    Ae(c, "NO_I18NEXT_INSTANCE", "useTranslation: You will need to pass in an i18next instance by using initReactI18next");
    const A = (F, S) => B(S) ? S : Ut(S) && B(S.defaultValue) ? S.defaultValue : Array.isArray(F) ? F[F.length - 1] : F, j = [A, {}, !1];
    return j.t = A, j.i18n = {}, j.ready = !1, j;
  }
  (C = c.options.react) != null && C.wait && Ae(c, "DEPRECATED_OPTION", "useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  const T = {
    ...Kt(),
    ...c.options.react,
    ...t
  }, {
    useSuspense: s,
    keyPrefix: d
  } = T;
  let h = g || ((b = c.options) == null ? void 0 : b.defaultNS);
  h = B(h) ? [h] : h || ["translation"], ($ = (x = c.reportNamespaces).addUsedNamespaces) == null || $.call(x, h);
  const m = (c.isInitialized || c.initializedStoreOnce) && h.every((A) => Yt(A, c, T)), k = tr(c, t.lng || null, T.nsMode === "fallback" ? h : h[0], d), N = () => k, M = () => nt(c, t.lng || null, T.nsMode === "fallback" ? h : h[0], d), [z, G] = te(N);
  let L = h.join();
  t.lng && (L = `${t.lng}${L}`);
  const I = er(L), p = rt(!0);
  oe(() => {
    const {
      bindI18n: A,
      bindI18nStore: j
    } = T;
    p.current = !0, !m && !s && (t.lng ? et(c, t.lng, h, () => {
      p.current && G(M);
    }) : we(c, h, () => {
      p.current && G(M);
    })), m && I && I !== L && p.current && G(M);
    const F = () => {
      p.current && G(M);
    };
    return A && (c == null || c.on(A, F)), j && (c == null || c.store.on(j, F)), () => {
      p.current = !1, c && A && (A == null || A.split(" ").forEach((S) => c.off(S, F))), j && c && j.split(" ").forEach((S) => c.store.off(S, F));
    };
  }, [c, L]), oe(() => {
    p.current && m && G(N);
  }, [c, d, m]);
  const _ = [z, c, m];
  if (_.t = z, _.i18n = c, _.ready = m, m || !m && !s) return _;
  throw new Promise((A) => {
    t.lng ? et(c, t.lng, h, () => A()) : we(c, h, () => A());
  });
};
function ar({ apiBaseUrl: r, useWPHandlers: t, wpConfig: n, enableDefaultStyles: i, assetsBaseUrl: g }) {
  const [c, T] = te([]), [s, d] = te(!0), [h, m] = te({}), [k, N] = te({}), { t: M } = rr();
  oe(() => {
    async function _() {
      try {
        const b = await (await fetch(`${r}`)).json(), x = Lt(b);
        T(x);
      } catch (C) {
        console.error("Failed to fetch plugins", C);
      } finally {
        d(!1);
      }
    }
    _();
  }, [r, t, n]);
  const z = async (_, C) => {
    var b;
    m((x) => ({ ...x, [C.slug]: !0 }));
    try {
      let x = `${r}/${_}/${C.slug}`;
      const $ = `download_url=${encodeURIComponent(C.download || "")}`;
      t ? x = `${n.ajax_url}?action=marketplace_${_}_plugin&_wpnonce=${n.nonce}&nonce=${n.nonce}&slug=${C.slug}&${$}` : x = x + (x.includes("?") ? "&" : "?") + $;
      const j = await (await fetch(x, { method: "POST" })).json();
      j.success ? T(
        (F) => F.map(
          (S) => S.slug === C.slug ? { ...S, installed: j.data.installed, activated: j.data.activated } : S
        )
      ) : alert(((b = j.data) == null ? void 0 : b.message) || "Failed to perform action");
    } catch (x) {
      console.error("Plugin action failed", x);
    } finally {
      m((x) => ({ ...x, [C.slug]: !1 }));
    }
  }, G = (_, C) => {
    _.stopPropagation(), N((b) => ({ ...b, [C.slug]: !0 })), setTimeout(() => {
      N((b) => ({ ...b, [C.slug]: !1 }));
    }, 2e3);
  };
  if (s) return /* @__PURE__ */ E.jsx("p", { children: "Loading plugins..." });
  const L = /* @__PURE__ */ new Map(), I = /* @__PURE__ */ new Map();
  c.forEach((_) => {
    I.has(_.slug) || I.set(_.slug, _);
  }), Array.from(I.values()).forEach((_) => {
    const C = Array.isArray(_.categories) && _.categories.length ? String(_.categories[0]) : "Others";
    L.has(C) || L.set(C, []), L.get(C).push(_);
  });
  const p = Array.from(L.entries());
  return /* @__PURE__ */ E.jsx("div", { className: "marketplace-container gv-flex gv-flex-col gv-flex-wrap gv-gap-lg gv-mt-fluid", children: p.map(([_, C]) => /* @__PURE__ */ E.jsxs("section", { className: "", children: [
    /* @__PURE__ */ E.jsx("h2", { className: "gv-heading-md gv-mb-sm", children: _ }),
    /* @__PURE__ */ E.jsx("div", { className: "gv-grid gv-gap-lg gv-tab-grid-cols-1 gv-desk-grid-cols-2", children: C.map((b) => {
      var x, $;
      return /* @__PURE__ */ E.jsxs("a", { href: "#", className: "gv-shortcut-tile gv-surface-bright", onClick: (A) => A.preventDefault(), children: [
        /* @__PURE__ */ E.jsx("gv-tile", { "aria-hidden": "true", src: `${g || window.marketplaceConfig && window.marketplaceConfig.assetsBaseUrl || ""}assets/icons/placeholder.svg` }),
        /* @__PURE__ */ E.jsxs("div", { className: "gv-content", children: [
          /* @__PURE__ */ E.jsx("h3", { className: "gv-title", children: b.name }),
          /* @__PURE__ */ E.jsx("p", { children: b.description ? b.description : b.shortDescription }),
          /* @__PURE__ */ E.jsxs("div", { className: "gv-price", children: [
            /* @__PURE__ */ E.jsx("span", { className: "gv-price-prefix", children: M("migratorMail_hi") }),
            /* @__PURE__ */ E.jsxs("span", { className: "gv-price-text", children: [
              b.priceCurrency,
              " ",
              b.priceAmount
            ] }),
            /* @__PURE__ */ E.jsx("span", { className: "gv-period", children: "/mo" })
          ] })
        ] }),
        /* @__PURE__ */ E.jsx("gv-icon", { "aria-hidden": "true", src: `${g || window.marketplaceConfig && window.marketplaceConfig.assetsBaseUrl || ""}assets/icons/arrow_forward.svg` }),
        t ? /* @__PURE__ */ E.jsx(
          Dt,
          {
            plugin: b,
            pluginInAction: h,
            onAction: z
          }
        ) : b.download && /* @__PURE__ */ E.jsx("div", { className: "plugin-actions gv-card-content gv-flex gv-gap-sm gv-mt-md", children: /* @__PURE__ */ E.jsx(
          "a",
          {
            href: b.download,
            download: !0,
            className: "gv-button gv-button-secondary",
            onClick: (A) => G(A, b),
            style: {
              pointerEvents: k[b.slug] ? "none" : "auto",
              opacity: k[b.slug] ? 0.6 : 1
            },
            children: k[b.slug] ? ((x = marketplaceConfig == null ? void 0 : marketplaceConfig.labels) == null ? void 0 : x.downloading) || "Downloading..." : (($ = marketplaceConfig == null ? void 0 : marketplaceConfig.labels) == null ? void 0 : $.download) || "Download"
          }
        ) })
      ] }, b.slug);
    }) })
  ] }, _)) });
}
const sr = ({ apiBaseUrl: r, useWPHandlers: t, wpConfig: n, enableDefaultStyles: i, assetsBaseUrl: g }) => /* @__PURE__ */ E.jsxs("div", { className: "marketplace-container gv-p-lg", children: [
  /* @__PURE__ */ E.jsxs("div", { className: "gv-content-container gv-p-lg gv-flex-column-md", style: { background: "#F3F4F0" }, children: [
    /* @__PURE__ */ E.jsx("h2", { className: "gv-heading-lg", children: "one.com WP marketplace" }),
    /* @__PURE__ */ E.jsx("p", { className: "gv-text-sm", children: "Your place to find recommended and relevant plugins for your site." })
  ] }),
  /* @__PURE__ */ E.jsx(
    ar,
    {
      apiBaseUrl: r,
      useWPHandlers: t,
      wpConfig: n,
      enableDefaultStyles: i,
      assetsBaseUrl: g
    }
  )
] });
export {
  sr as default
};
