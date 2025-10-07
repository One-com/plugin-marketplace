import Se, { useState as ee, useEffect as fr } from "react";
var re = { exports: {} }, W = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oe;
function dr() {
  if (Oe) return W;
  Oe = 1;
  var u = Se, f = Symbol.for("react.element"), l = Symbol.for("react.fragment"), R = Object.prototype.hasOwnProperty, O = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, S = { key: !0, ref: !0, __self: !0, __source: !0 };
  function k(T, m, C) {
    var y, c = {}, p = null, P = null;
    C !== void 0 && (p = "" + C), m.key !== void 0 && (p = "" + m.key), m.ref !== void 0 && (P = m.ref);
    for (y in m) R.call(m, y) && !S.hasOwnProperty(y) && (c[y] = m[y]);
    if (T && T.defaultProps) for (y in m = T.defaultProps, m) c[y] === void 0 && (c[y] = m[y]);
    return { $$typeof: f, type: T, key: p, ref: P, props: c, _owner: O.current };
  }
  return W.Fragment = l, W.jsx = k, W.jsxs = k, W;
}
var L = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var we;
function vr() {
  return we || (we = 1, process.env.NODE_ENV !== "production" && function() {
    var u = Se, f = Symbol.for("react.element"), l = Symbol.for("react.portal"), R = Symbol.for("react.fragment"), O = Symbol.for("react.strict_mode"), S = Symbol.for("react.profiler"), k = Symbol.for("react.provider"), T = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), C = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), P = Symbol.for("react.offscreen"), b = Symbol.iterator, M = "@@iterator";
    function te(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = b && e[b] || e[M];
      return typeof r == "function" ? r : null;
    }
    var x = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function h(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
          t[a - 1] = arguments[a];
        N("error", e, t);
      }
    }
    function N(e, r, t) {
      {
        var a = x.ReactDebugCurrentFrame, i = a.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var s = t.map(function(o) {
          return String(o);
        });
        s.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var ke = !1, De = !1, Fe = !1, $e = !1, Ae = !1, ae;
    ae = Symbol.for("react.module.reference");
    function Ne(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === R || e === S || Ae || e === O || e === C || e === y || $e || e === P || ke || De || Fe || typeof e == "object" && e !== null && (e.$$typeof === p || e.$$typeof === c || e.$$typeof === k || e.$$typeof === T || e.$$typeof === m || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ae || e.getModuleId !== void 0));
    }
    function Ie(e, r, t) {
      var a = e.displayName;
      if (a)
        return a;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function ne(e) {
      return e.displayName || "Context";
    }
    function w(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && h("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case R:
          return "Fragment";
        case l:
          return "Portal";
        case S:
          return "Profiler";
        case O:
          return "StrictMode";
        case C:
          return "Suspense";
        case y:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case T:
            var r = e;
            return ne(r) + ".Consumer";
          case k:
            var t = e;
            return ne(t._context) + ".Provider";
          case m:
            return Ie(e, e.render, "ForwardRef");
          case c:
            var a = e.displayName || null;
            return a !== null ? a : w(e.type) || "Memo";
          case p: {
            var i = e, s = i._payload, o = i._init;
            try {
              return w(o(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var D = Object.assign, I = 0, oe, ie, se, le, ce, ue, fe;
    function de() {
    }
    de.__reactDisabledLog = !0;
    function Ye() {
      {
        if (I === 0) {
          oe = console.log, ie = console.info, se = console.warn, le = console.error, ce = console.group, ue = console.groupCollapsed, fe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: de,
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
        I++;
      }
    }
    function We() {
      {
        if (I--, I === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: D({}, e, {
              value: oe
            }),
            info: D({}, e, {
              value: ie
            }),
            warn: D({}, e, {
              value: se
            }),
            error: D({}, e, {
              value: le
            }),
            group: D({}, e, {
              value: ce
            }),
            groupCollapsed: D({}, e, {
              value: ue
            }),
            groupEnd: D({}, e, {
              value: fe
            })
          });
        }
        I < 0 && h("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var K = x.ReactCurrentDispatcher, z;
    function V(e, r, t) {
      {
        if (z === void 0)
          try {
            throw Error();
          } catch (i) {
            var a = i.stack.trim().match(/\n( *(at )?)/);
            z = a && a[1] || "";
          }
        return `
` + z + e;
      }
    }
    var B = !1, U;
    {
      var Le = typeof WeakMap == "function" ? WeakMap : Map;
      U = new Le();
    }
    function ve(e, r) {
      if (!e || B)
        return "";
      {
        var t = U.get(e);
        if (t !== void 0)
          return t;
      }
      var a;
      B = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = K.current, K.current = null, Ye();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (E) {
              a = E;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (E) {
              a = E;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (E) {
            a = E;
          }
          e();
        }
      } catch (E) {
        if (E && a && typeof E.stack == "string") {
          for (var n = E.stack.split(`
`), _ = a.stack.split(`
`), d = n.length - 1, v = _.length - 1; d >= 1 && v >= 0 && n[d] !== _[v]; )
            v--;
          for (; d >= 1 && v >= 0; d--, v--)
            if (n[d] !== _[v]) {
              if (d !== 1 || v !== 1)
                do
                  if (d--, v--, v < 0 || n[d] !== _[v]) {
                    var j = `
` + n[d].replace(" at new ", " at ");
                    return e.displayName && j.includes("<anonymous>") && (j = j.replace("<anonymous>", e.displayName)), typeof e == "function" && U.set(e, j), j;
                  }
                while (d >= 1 && v >= 0);
              break;
            }
        }
      } finally {
        B = !1, K.current = s, We(), Error.prepareStackTrace = i;
      }
      var A = e ? e.displayName || e.name : "", F = A ? V(A) : "";
      return typeof e == "function" && U.set(e, F), F;
    }
    function Me(e, r, t) {
      return ve(e, !1);
    }
    function Ve(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function J(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ve(e, Ve(e));
      if (typeof e == "string")
        return V(e);
      switch (e) {
        case C:
          return V("Suspense");
        case y:
          return V("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case m:
            return Me(e.render);
          case c:
            return J(e.type, r, t);
          case p: {
            var a = e, i = a._payload, s = a._init;
            try {
              return J(s(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var Y = Object.prototype.hasOwnProperty, ge = {}, me = x.ReactDebugCurrentFrame;
    function q(e) {
      if (e) {
        var r = e._owner, t = J(e.type, e._source, r ? r.type : null);
        me.setExtraStackFrame(t);
      } else
        me.setExtraStackFrame(null);
    }
    function Ue(e, r, t, a, i) {
      {
        var s = Function.call.bind(Y);
        for (var o in e)
          if (s(e, o)) {
            var n = void 0;
            try {
              if (typeof e[o] != "function") {
                var _ = Error((a || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw _.name = "Invariant Violation", _;
              }
              n = e[o](r, o, a, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (d) {
              n = d;
            }
            n && !(n instanceof Error) && (q(i), h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", t, o, typeof n), q(null)), n instanceof Error && !(n.message in ge) && (ge[n.message] = !0, q(i), h("Failed %s type: %s", t, n.message), q(null));
          }
      }
    }
    var Je = Array.isArray;
    function G(e) {
      return Je(e);
    }
    function qe(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ke(e) {
      try {
        return pe(e), !1;
      } catch {
        return !0;
      }
    }
    function pe(e) {
      return "" + e;
    }
    function he(e) {
      if (Ke(e))
        return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", qe(e)), pe(e);
    }
    var be = x.ReactCurrentOwner, ze = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ye, _e;
    function Be(e) {
      if (Y.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ge(e) {
      if (Y.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Xe(e, r) {
      typeof e.ref == "string" && be.current;
    }
    function He(e, r) {
      {
        var t = function() {
          ye || (ye = !0, h("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Ze(e, r) {
      {
        var t = function() {
          _e || (_e = !0, h("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var Qe = function(e, r, t, a, i, s, o) {
      var n = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: f,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: s
      };
      return n._store = {}, Object.defineProperty(n._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(n, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: a
      }), Object.defineProperty(n, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.freeze && (Object.freeze(n.props), Object.freeze(n)), n;
    };
    function er(e, r, t, a, i) {
      {
        var s, o = {}, n = null, _ = null;
        t !== void 0 && (he(t), n = "" + t), Ge(r) && (he(r.key), n = "" + r.key), Be(r) && (_ = r.ref, Xe(r, i));
        for (s in r)
          Y.call(r, s) && !ze.hasOwnProperty(s) && (o[s] = r[s]);
        if (e && e.defaultProps) {
          var d = e.defaultProps;
          for (s in d)
            o[s] === void 0 && (o[s] = d[s]);
        }
        if (n || _) {
          var v = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          n && He(o, v), _ && Ze(o, v);
        }
        return Qe(e, n, _, i, a, be.current, o);
      }
    }
    var X = x.ReactCurrentOwner, Ee = x.ReactDebugCurrentFrame;
    function $(e) {
      if (e) {
        var r = e._owner, t = J(e.type, e._source, r ? r.type : null);
        Ee.setExtraStackFrame(t);
      } else
        Ee.setExtraStackFrame(null);
    }
    var H;
    H = !1;
    function Z(e) {
      return typeof e == "object" && e !== null && e.$$typeof === f;
    }
    function Re() {
      {
        if (X.current) {
          var e = w(X.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function rr(e) {
      return "";
    }
    var je = {};
    function tr(e) {
      {
        var r = Re();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function xe(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = tr(r);
        if (je[t])
          return;
        je[t] = !0;
        var a = "";
        e && e._owner && e._owner !== X.current && (a = " It was passed a child from " + w(e._owner.type) + "."), $(e), h('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, a), $(null);
      }
    }
    function Te(e, r) {
      {
        if (typeof e != "object")
          return;
        if (G(e))
          for (var t = 0; t < e.length; t++) {
            var a = e[t];
            Z(a) && xe(a, r);
          }
        else if (Z(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = te(e);
          if (typeof i == "function" && i !== e.entries)
            for (var s = i.call(e), o; !(o = s.next()).done; )
              Z(o.value) && xe(o.value, r);
        }
      }
    }
    function ar(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === m || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === c))
          t = r.propTypes;
        else
          return;
        if (t) {
          var a = w(r);
          Ue(t, e.props, "prop", a, e);
        } else if (r.PropTypes !== void 0 && !H) {
          H = !0;
          var i = w(r);
          h("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && h("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function nr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var a = r[t];
          if (a !== "children" && a !== "key") {
            $(e), h("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), $(null);
            break;
          }
        }
        e.ref !== null && ($(e), h("Invalid attribute `ref` supplied to `React.Fragment`."), $(null));
      }
    }
    var Ce = {};
    function Pe(e, r, t, a, i, s) {
      {
        var o = Ne(e);
        if (!o) {
          var n = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (n += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var _ = rr();
          _ ? n += _ : n += Re();
          var d;
          e === null ? d = "null" : G(e) ? d = "array" : e !== void 0 && e.$$typeof === f ? (d = "<" + (w(e.type) || "Unknown") + " />", n = " Did you accidentally export a JSX literal instead of a component?") : d = typeof e, h("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", d, n);
        }
        var v = er(e, r, t, i, s);
        if (v == null)
          return v;
        if (o) {
          var j = r.children;
          if (j !== void 0)
            if (a)
              if (G(j)) {
                for (var A = 0; A < j.length; A++)
                  Te(j[A], e);
                Object.freeze && Object.freeze(j);
              } else
                h("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Te(j, e);
        }
        if (Y.call(r, "key")) {
          var F = w(e), E = Object.keys(r).filter(function(ur) {
            return ur !== "key";
          }), Q = E.length > 0 ? "{key: someKey, " + E.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ce[F + Q]) {
            var cr = E.length > 0 ? "{" + E.join(": ..., ") + ": ...}" : "{}";
            h(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Q, F, cr, F), Ce[F + Q] = !0;
          }
        }
        return e === R ? nr(v) : ar(v), v;
      }
    }
    function or(e, r, t) {
      return Pe(e, r, t, !0);
    }
    function ir(e, r, t) {
      return Pe(e, r, t, !1);
    }
    var sr = ir, lr = or;
    L.Fragment = R, L.jsx = sr, L.jsxs = lr;
  }()), L;
}
process.env.NODE_ENV === "production" ? re.exports = dr() : re.exports = vr();
var g = re.exports;
function gr(u) {
  var f;
  return !u || !((f = u.data) != null && f.ui_json) ? [] : u.data.ui_json.map((l) => ({
    ...l,
    // spread first ✅
    name: l.name || "Unknown",
    slug: l.slug || "",
    price: l.price || "",
    author: l.author || "",
    version: l.version || "",
    download: l.download || "",
    thumbnail: l.thumbnail || "",
    description: typeof l.description == "object" ? l.description["en-gb"] || Object.values(l.description)[0] || "" : l.description || "",
    installed: l.installed ?? !1,
    activated: l.activated ?? !1
  }));
}
function mr({ plugin: u, pluginInAction: f, onAction: l }) {
  const R = (O) => {
    l(O, u);
  };
  return /* @__PURE__ */ g.jsx("div", { className: "plugin-actions gv-card-content gv-flex gv-gap-sm gv-mt-md", children: u.installed ? u.activated ? /* @__PURE__ */ g.jsx(
    "button",
    {
      className: "gv-button gv-button-secondary",
      disabled: f[u.slug],
      onClick: () => R("deactivate"),
      children: f[u.slug] ? marketplaceConfig.labels.deactivating : marketplaceConfig.labels.deactivate
    }
  ) : /* @__PURE__ */ g.jsx(
    "button",
    {
      className: "gv-button gv-button-primary",
      disabled: f[u.slug],
      onClick: () => R("activate"),
      children: f[u.slug] ? marketplaceConfig.labels.activating : marketplaceConfig.labels.activate
    }
  ) : /* @__PURE__ */ g.jsx(
    "button",
    {
      className: "gv-button gv-button-secondary",
      disabled: f[u.slug],
      onClick: () => R("install"),
      children: f[u.slug] ? marketplaceConfig.labels.installing : marketplaceConfig.labels.install
    }
  ) });
}
function pr({ apiBaseUrl: u, useWPHandlers: f, wpConfig: l, enableDefaultStyles: R }) {
  const [O, S] = ee([]), [k, T] = ee(!0), [m, C] = ee({});
  fr(() => {
    async function c() {
      try {
        const P = await (await fetch(`${u}`)).json(), b = gr(P);
        S(b);
      } catch (p) {
        console.error("Failed to fetch plugins", p);
      } finally {
        T(!1);
      }
    }
    c();
  }, [u, f, l]);
  const y = async (c, p) => {
    var P;
    C((b) => ({ ...b, [p.slug]: !0 }));
    try {
      let b = `${u}/${c}/${p.slug}`;
      const M = `download_url=${encodeURIComponent(p.download || "")}`;
      f ? b = `${l.ajax_url}?action=marketplace_${c}_plugin&_wpnonce=${l.nonce}&slug=${p.slug}&${M}` : b = b + (b.includes("?") ? "&" : "?") + M;
      const x = await (await fetch(b, { method: "POST" })).json();
      x.success ? S(
        (h) => h.map(
          (N) => N.slug === p.slug ? { ...N, installed: x.data.installed, activated: x.data.activated } : N
        )
      ) : alert(((P = x.data) == null ? void 0 : P.message) || "Failed to perform action");
    } catch (b) {
      console.error("Plugin action failed", b);
    } finally {
      C((b) => ({ ...b, [p.slug]: !1 }));
    }
  };
  return k ? /* @__PURE__ */ g.jsx("p", { children: "Loading plugins..." }) : /* @__PURE__ */ g.jsx("div", { className: "marketplace gv-grid gv-gap-lg gv-tab-grid-cols-1 gv-desk-grid-cols-2 gv-mt-md", children: O.map((c) => /* @__PURE__ */ g.jsxs("div", { id: `plugin-${c.slug}`, className: "gv-card oc-plugins-box gv-surface-bright gv-pb-lg", children: [
    /* @__PURE__ */ g.jsx("div", { className: "gv-card-illustration", children: /* @__PURE__ */ g.jsx(
      "img",
      {
        className: "gv-tile",
        src: c.thumbnail,
        alt: c.name,
        width: "72",
        height: "72"
      }
    ) }),
    /* @__PURE__ */ g.jsxs("div", { className: "gv-card-content", children: [
      /* @__PURE__ */ g.jsx("h3", { className: "gv-card-title", children: c.name }),
      /* @__PURE__ */ g.jsxs("p", { children: [
        c.description ? c.description : c.shortDescription,
        "   "
      ] })
    ] }, c.slug),
    f === !0 && /* @__PURE__ */ g.jsx(
      mr,
      {
        plugin: c,
        pluginInAction: m,
        onAction: y
      }
    )
  ] })) });
}
const br = ({ apiBaseUrl: u, useWPHandlers: f, wpConfig: l, enableDefaultStyles: R }) => /* @__PURE__ */ g.jsxs("div", { className: "marketplace-container gv-p-lg", children: [
  /* @__PURE__ */ g.jsxs("div", { className: "gv-content-container gv-p-lg gv-flex-column-md", children: [
    /* @__PURE__ */ g.jsx("h2", { className: "gv-heading-lg", children: "one.com WP marketplace" }),
    /* @__PURE__ */ g.jsx("p", { className: "gv-text-sm", children: "Your place to find recommended and relevant plugins for your site." })
  ] }),
  /* @__PURE__ */ g.jsx(
    pr,
    {
      apiBaseUrl: u,
      useWPHandlers: f,
      wpConfig: l,
      enableDefaultStyles: R
    }
  )
] });
export {
  br as default
};
