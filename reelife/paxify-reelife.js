(function (zr, Hn) {
  typeof exports == "object" && typeof module < "u"
    ? (module.exports = Hn())
    : typeof define == "function" && define.amd
    ? define(Hn)
    : ((zr = typeof globalThis < "u" ? globalThis : zr || self),
      (zr.ReelsInitializer = Hn()));
})(this, function () {
  "use strict";
  function zr(e) {
    return e &&
      e.__esModule &&
      Object.prototype.hasOwnProperty.call(e, "default")
      ? e.default
      : e;
  }
  var Hn = { exports: {} },
    Bi = {},
    Xu = { exports: {} },
    H = {};
  /**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var Ar = Symbol.for("react.element"),
    km = Symbol.for("react.portal"),
    Om = Symbol.for("react.fragment"),
    _m = Symbol.for("react.strict_mode"),
    Im = Symbol.for("react.profiler"),
    Lm = Symbol.for("react.provider"),
    Mm = Symbol.for("react.context"),
    Nm = Symbol.for("react.forward_ref"),
    Rm = Symbol.for("react.suspense"),
    zm = Symbol.for("react.memo"),
    Am = Symbol.for("react.lazy"),
    qu = Symbol.iterator;
  function $m(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (qu && e[qu]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var Ju = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Zu = Object.assign,
    ec = {};
  function Wn(e, t, n) {
    (this.props = e),
      (this.context = t),
      (this.refs = ec),
      (this.updater = n || Ju);
  }
  (Wn.prototype.isReactComponent = {}),
    (Wn.prototype.setState = function (e, t) {
      if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, e, t, "setState");
    }),
    (Wn.prototype.forceUpdate = function (e) {
      this.updater.enqueueForceUpdate(this, e, "forceUpdate");
    });
  function tc() {}
  tc.prototype = Wn.prototype;
  function Ws(e, t, n) {
    (this.props = e),
      (this.context = t),
      (this.refs = ec),
      (this.updater = n || Ju);
  }
  var Gs = (Ws.prototype = new tc());
  (Gs.constructor = Ws), Zu(Gs, Wn.prototype), (Gs.isPureReactComponent = !0);
  var nc = Array.isArray,
    rc = Object.prototype.hasOwnProperty,
    Ys = { current: null },
    ic = { key: !0, ref: !0, __self: !0, __source: !0 };
  function oc(e, t, n) {
    var r,
      i = {},
      o = null,
      s = null;
    if (t != null)
      for (r in (t.ref !== void 0 && (s = t.ref),
      t.key !== void 0 && (o = "" + t.key),
      t))
        rc.call(t, r) && !ic.hasOwnProperty(r) && (i[r] = t[r]);
    var l = arguments.length - 2;
    if (l === 1) i.children = n;
    else if (1 < l) {
      for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
      i.children = a;
    }
    if (e && e.defaultProps)
      for (r in ((l = e.defaultProps), l)) i[r] === void 0 && (i[r] = l[r]);
    return {
      $$typeof: Ar,
      type: e,
      key: o,
      ref: s,
      props: i,
      _owner: Ys.current,
    };
  }
  function jm(e, t) {
    return {
      $$typeof: Ar,
      type: e.type,
      key: t,
      ref: e.ref,
      props: e.props,
      _owner: e._owner,
    };
  }
  function Qs(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Ar;
  }
  function Dm(e) {
    var t = { "=": "=0", ":": "=2" };
    return (
      "$" +
      e.replace(/[=:]/g, function (n) {
        return t[n];
      })
    );
  }
  var sc = /\/+/g;
  function Ks(e, t) {
    return typeof e == "object" && e !== null && e.key != null
      ? Dm("" + e.key)
      : t.toString(36);
  }
  function Vi(e, t, n, r, i) {
    var o = typeof e;
    (o === "undefined" || o === "boolean") && (e = null);
    var s = !1;
    if (e === null) s = !0;
    else
      switch (o) {
        case "string":
        case "number":
          s = !0;
          break;
        case "object":
          switch (e.$$typeof) {
            case Ar:
            case km:
              s = !0;
          }
      }
    if (s)
      return (
        (s = e),
        (i = i(s)),
        (e = r === "" ? "." + Ks(s, 0) : r),
        nc(i)
          ? ((n = ""),
            e != null && (n = e.replace(sc, "$&/") + "/"),
            Vi(i, t, n, "", function (u) {
              return u;
            }))
          : i != null &&
            (Qs(i) &&
              (i = jm(
                i,
                n +
                  (!i.key || (s && s.key === i.key)
                    ? ""
                    : ("" + i.key).replace(sc, "$&/") + "/") +
                  e
              )),
            t.push(i)),
        1
      );
    if (((s = 0), (r = r === "" ? "." : r + ":"), nc(e)))
      for (var l = 0; l < e.length; l++) {
        o = e[l];
        var a = r + Ks(o, l);
        s += Vi(o, t, n, a, i);
      }
    else if (((a = $m(e)), typeof a == "function"))
      for (e = a.call(e), l = 0; !(o = e.next()).done; )
        (o = o.value), (a = r + Ks(o, l++)), (s += Vi(o, t, n, a, i));
    else if (o === "object")
      throw (
        ((t = String(e)),
        Error(
          "Objects are not valid as a React child (found: " +
            (t === "[object Object]"
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : t) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    return s;
  }
  function Ui(e, t, n) {
    if (e == null) return e;
    var r = [],
      i = 0;
    return (
      Vi(e, r, "", "", function (o) {
        return t.call(n, o, i++);
      }),
      r
    );
  }
  function bm(e) {
    if (e._status === -1) {
      var t = e._result;
      (t = t()),
        t.then(
          function (n) {
            (e._status === 0 || e._status === -1) &&
              ((e._status = 1), (e._result = n));
          },
          function (n) {
            (e._status === 0 || e._status === -1) &&
              ((e._status = 2), (e._result = n));
          }
        ),
        e._status === -1 && ((e._status = 0), (e._result = t));
    }
    if (e._status === 1) return e._result.default;
    throw e._result;
  }
  var Le = { current: null },
    Hi = { transition: null },
    Fm = {
      ReactCurrentDispatcher: Le,
      ReactCurrentBatchConfig: Hi,
      ReactCurrentOwner: Ys,
    };
  (H.Children = {
    map: Ui,
    forEach: function (e, t, n) {
      Ui(
        e,
        function () {
          t.apply(this, arguments);
        },
        n
      );
    },
    count: function (e) {
      var t = 0;
      return (
        Ui(e, function () {
          t++;
        }),
        t
      );
    },
    toArray: function (e) {
      return (
        Ui(e, function (t) {
          return t;
        }) || []
      );
    },
    only: function (e) {
      if (!Qs(e))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return e;
    },
  }),
    (H.Component = Wn),
    (H.Fragment = Om),
    (H.Profiler = Im),
    (H.PureComponent = Ws),
    (H.StrictMode = _m),
    (H.Suspense = Rm),
    (H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Fm),
    (H.cloneElement = function (e, t, n) {
      if (e == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            e +
            "."
        );
      var r = Zu({}, e.props),
        i = e.key,
        o = e.ref,
        s = e._owner;
      if (t != null) {
        if (
          (t.ref !== void 0 && ((o = t.ref), (s = Ys.current)),
          t.key !== void 0 && (i = "" + t.key),
          e.type && e.type.defaultProps)
        )
          var l = e.type.defaultProps;
        for (a in t)
          rc.call(t, a) &&
            !ic.hasOwnProperty(a) &&
            (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
      }
      var a = arguments.length - 2;
      if (a === 1) r.children = n;
      else if (1 < a) {
        l = Array(a);
        for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
        r.children = l;
      }
      return {
        $$typeof: Ar,
        type: e.type,
        key: i,
        ref: o,
        props: r,
        _owner: s,
      };
    }),
    (H.createContext = function (e) {
      return (
        (e = {
          $$typeof: Mm,
          _currentValue: e,
          _currentValue2: e,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (e.Provider = { $$typeof: Lm, _context: e }),
        (e.Consumer = e)
      );
    }),
    (H.createElement = oc),
    (H.createFactory = function (e) {
      var t = oc.bind(null, e);
      return (t.type = e), t;
    }),
    (H.createRef = function () {
      return { current: null };
    }),
    (H.forwardRef = function (e) {
      return { $$typeof: Nm, render: e };
    }),
    (H.isValidElement = Qs),
    (H.lazy = function (e) {
      return { $$typeof: Am, _payload: { _status: -1, _result: e }, _init: bm };
    }),
    (H.memo = function (e, t) {
      return { $$typeof: zm, type: e, compare: t === void 0 ? null : t };
    }),
    (H.startTransition = function (e) {
      var t = Hi.transition;
      Hi.transition = {};
      try {
        e();
      } finally {
        Hi.transition = t;
      }
    }),
    (H.unstable_act = function () {
      throw Error("act(...) is not supported in production builds of React.");
    }),
    (H.useCallback = function (e, t) {
      return Le.current.useCallback(e, t);
    }),
    (H.useContext = function (e) {
      return Le.current.useContext(e);
    }),
    (H.useDebugValue = function () {}),
    (H.useDeferredValue = function (e) {
      return Le.current.useDeferredValue(e);
    }),
    (H.useEffect = function (e, t) {
      return Le.current.useEffect(e, t);
    }),
    (H.useId = function () {
      return Le.current.useId();
    }),
    (H.useImperativeHandle = function (e, t, n) {
      return Le.current.useImperativeHandle(e, t, n);
    }),
    (H.useInsertionEffect = function (e, t) {
      return Le.current.useInsertionEffect(e, t);
    }),
    (H.useLayoutEffect = function (e, t) {
      return Le.current.useLayoutEffect(e, t);
    }),
    (H.useMemo = function (e, t) {
      return Le.current.useMemo(e, t);
    }),
    (H.useReducer = function (e, t, n) {
      return Le.current.useReducer(e, t, n);
    }),
    (H.useRef = function (e) {
      return Le.current.useRef(e);
    }),
    (H.useState = function (e) {
      return Le.current.useState(e);
    }),
    (H.useSyncExternalStore = function (e, t, n) {
      return Le.current.useSyncExternalStore(e, t, n);
    }),
    (H.useTransition = function () {
      return Le.current.useTransition();
    }),
    (H.version = "18.2.0"),
    (Xu.exports = H);
  var M = Xu.exports;
  const K = zr(M);
  /**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var Bm = M,
    Vm = Symbol.for("react.element"),
    Um = Symbol.for("react.fragment"),
    Hm = Object.prototype.hasOwnProperty,
    Wm =
      Bm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    Gm = { key: !0, ref: !0, __self: !0, __source: !0 };
  function lc(e, t, n) {
    var r,
      i = {},
      o = null,
      s = null;
    n !== void 0 && (o = "" + n),
      t.key !== void 0 && (o = "" + t.key),
      t.ref !== void 0 && (s = t.ref);
    for (r in t) Hm.call(t, r) && !Gm.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps)
      for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
    return {
      $$typeof: Vm,
      type: e,
      key: o,
      ref: s,
      props: i,
      _owner: Wm.current,
    };
  }
  (Bi.Fragment = Um), (Bi.jsx = lc), (Bi.jsxs = lc), (Hn.exports = Bi);
  var k = Hn.exports,
    Ze = {},
    ac = { exports: {} },
    Ue = {},
    uc = { exports: {} },
    cc = {};
  /**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ (function (e) {
    function t(N, A) {
      var D = N.length;
      N.push(A);
      e: for (; 0 < D; ) {
        var Y = (D - 1) >>> 1,
          J = N[Y];
        if (0 < i(J, A)) (N[Y] = A), (N[D] = J), (D = Y);
        else break e;
      }
    }
    function n(N) {
      return N.length === 0 ? null : N[0];
    }
    function r(N) {
      if (N.length === 0) return null;
      var A = N[0],
        D = N.pop();
      if (D !== A) {
        N[0] = D;
        e: for (var Y = 0, J = N.length, Pe = J >>> 1; Y < Pe; ) {
          var Je = 2 * (Y + 1) - 1,
            Fe = N[Je],
            Be = Je + 1,
            ct = N[Be];
          if (0 > i(Fe, D))
            Be < J && 0 > i(ct, Fe)
              ? ((N[Y] = ct), (N[Be] = D), (Y = Be))
              : ((N[Y] = Fe), (N[Je] = D), (Y = Je));
          else if (Be < J && 0 > i(ct, D)) (N[Y] = ct), (N[Be] = D), (Y = Be);
          else break e;
        }
      }
      return A;
    }
    function i(N, A) {
      var D = N.sortIndex - A.sortIndex;
      return D !== 0 ? D : N.id - A.id;
    }
    if (
      typeof performance == "object" &&
      typeof performance.now == "function"
    ) {
      var o = performance;
      e.unstable_now = function () {
        return o.now();
      };
    } else {
      var s = Date,
        l = s.now();
      e.unstable_now = function () {
        return s.now() - l;
      };
    }
    var a = [],
      u = [],
      c = 1,
      d = null,
      p = 3,
      h = !1,
      g = !1,
      y = !1,
      T = typeof setTimeout == "function" ? setTimeout : null,
      f = typeof clearTimeout == "function" ? clearTimeout : null,
      m = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" &&
      navigator.scheduling !== void 0 &&
      navigator.scheduling.isInputPending !== void 0 &&
      navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function v(N) {
      for (var A = n(u); A !== null; ) {
        if (A.callback === null) r(u);
        else if (A.startTime <= N)
          r(u), (A.sortIndex = A.expirationTime), t(a, A);
        else break;
        A = n(u);
      }
    }
    function w(N) {
      if (((y = !1), v(N), !g))
        if (n(a) !== null) (g = !0), ut(x);
        else {
          var A = n(u);
          A !== null && St(w, A.startTime - N);
        }
    }
    function x(N, A) {
      (g = !1), y && ((y = !1), f(O), (O = -1)), (h = !0);
      var D = p;
      try {
        for (
          v(A), d = n(a);
          d !== null && (!(d.expirationTime > A) || (N && !L()));

        ) {
          var Y = d.callback;
          if (typeof Y == "function") {
            (d.callback = null), (p = d.priorityLevel);
            var J = Y(d.expirationTime <= A);
            (A = e.unstable_now()),
              typeof J == "function" ? (d.callback = J) : d === n(a) && r(a),
              v(A);
          } else r(a);
          d = n(a);
        }
        if (d !== null) var Pe = !0;
        else {
          var Je = n(u);
          Je !== null && St(w, Je.startTime - A), (Pe = !1);
        }
        return Pe;
      } finally {
        (d = null), (p = D), (h = !1);
      }
    }
    var P = !1,
      S = null,
      O = -1,
      _ = 5,
      j = -1;
    function L() {
      return !(e.unstable_now() - j < _);
    }
    function $() {
      if (S !== null) {
        var N = e.unstable_now();
        j = N;
        var A = !0;
        try {
          A = S(!0, N);
        } finally {
          A ? V() : ((P = !1), (S = null));
        }
      } else P = !1;
    }
    var V;
    if (typeof m == "function")
      V = function () {
        m($);
      };
    else if (typeof MessageChannel < "u") {
      var fe = new MessageChannel(),
        at = fe.port2;
      (fe.port1.onmessage = $),
        (V = function () {
          at.postMessage(null);
        });
    } else
      V = function () {
        T($, 0);
      };
    function ut(N) {
      (S = N), P || ((P = !0), V());
    }
    function St(N, A) {
      O = T(function () {
        N(e.unstable_now());
      }, A);
    }
    (e.unstable_IdlePriority = 5),
      (e.unstable_ImmediatePriority = 1),
      (e.unstable_LowPriority = 4),
      (e.unstable_NormalPriority = 3),
      (e.unstable_Profiling = null),
      (e.unstable_UserBlockingPriority = 2),
      (e.unstable_cancelCallback = function (N) {
        N.callback = null;
      }),
      (e.unstable_continueExecution = function () {
        g || h || ((g = !0), ut(x));
      }),
      (e.unstable_forceFrameRate = function (N) {
        0 > N || 125 < N
          ? console.error(
              "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
            )
          : (_ = 0 < N ? Math.floor(1e3 / N) : 5);
      }),
      (e.unstable_getCurrentPriorityLevel = function () {
        return p;
      }),
      (e.unstable_getFirstCallbackNode = function () {
        return n(a);
      }),
      (e.unstable_next = function (N) {
        switch (p) {
          case 1:
          case 2:
          case 3:
            var A = 3;
            break;
          default:
            A = p;
        }
        var D = p;
        p = A;
        try {
          return N();
        } finally {
          p = D;
        }
      }),
      (e.unstable_pauseExecution = function () {}),
      (e.unstable_requestPaint = function () {}),
      (e.unstable_runWithPriority = function (N, A) {
        switch (N) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            N = 3;
        }
        var D = p;
        p = N;
        try {
          return A();
        } finally {
          p = D;
        }
      }),
      (e.unstable_scheduleCallback = function (N, A, D) {
        var Y = e.unstable_now();
        switch (
          (typeof D == "object" && D !== null
            ? ((D = D.delay), (D = typeof D == "number" && 0 < D ? Y + D : Y))
            : (D = Y),
          N)
        ) {
          case 1:
            var J = -1;
            break;
          case 2:
            J = 250;
            break;
          case 5:
            J = 1073741823;
            break;
          case 4:
            J = 1e4;
            break;
          default:
            J = 5e3;
        }
        return (
          (J = D + J),
          (N = {
            id: c++,
            callback: A,
            priorityLevel: N,
            startTime: D,
            expirationTime: J,
            sortIndex: -1,
          }),
          D > Y
            ? ((N.sortIndex = D),
              t(u, N),
              n(a) === null &&
                N === n(u) &&
                (y ? (f(O), (O = -1)) : (y = !0), St(w, D - Y)))
            : ((N.sortIndex = J), t(a, N), g || h || ((g = !0), ut(x))),
          N
        );
      }),
      (e.unstable_shouldYield = L),
      (e.unstable_wrapCallback = function (N) {
        var A = p;
        return function () {
          var D = p;
          p = A;
          try {
            return N.apply(this, arguments);
          } finally {
            p = D;
          }
        };
      });
  })(cc),
    (uc.exports = cc);
  var Ym = uc.exports;
  /**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var dc = M,
    He = Ym;
  function I(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        n = 1;
      n < arguments.length;
      n++
    )
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var fc = new Set(),
    $r = {};
  function Sn(e, t) {
    Gn(e, t), Gn(e + "Capture", t);
  }
  function Gn(e, t) {
    for ($r[e] = t, e = 0; e < t.length; e++) fc.add(t[e]);
  }
  var Mt = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    Xs = Object.prototype.hasOwnProperty,
    Qm =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    pc = {},
    hc = {};
  function Km(e) {
    return Xs.call(hc, e)
      ? !0
      : Xs.call(pc, e)
      ? !1
      : Qm.test(e)
      ? (hc[e] = !0)
      : ((pc[e] = !0), !1);
  }
  function Xm(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r
          ? !1
          : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function qm(e, t, n, r) {
    if (t === null || typeof t > "u" || Xm(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
      switch (n.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function Me(e, t, n, r, i, o, s) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = i),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = o),
      (this.removeEmptyString = s);
  }
  var Ee = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      Ee[e] = new Me(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      Ee[t] = new Me(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (
      e
    ) {
      Ee[e] = new Me(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      Ee[e] = new Me(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        Ee[e] = new Me(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      Ee[e] = new Me(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      Ee[e] = new Me(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      Ee[e] = new Me(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      Ee[e] = new Me(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var qs = /[\-:]([a-z])/g;
  function Js(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(qs, Js);
      Ee[t] = new Me(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(qs, Js);
        Ee[t] = new Me(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(qs, Js);
      Ee[t] = new Me(
        t,
        1,
        !1,
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        !1
      );
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      Ee[e] = new Me(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (Ee.xlinkHref = new Me(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      Ee[e] = new Me(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function Zs(e, t, n, r) {
    var i = Ee.hasOwnProperty(t) ? Ee[t] : null;
    (i !== null
      ? i.type !== 0
      : r ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (qm(t, n, i, r) && (n = null),
      r || i === null
        ? Km(t) &&
          (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
        : i.mustUseProperty
        ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
        : ((t = i.attributeName),
          (r = i.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((i = i.type),
              (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var Nt = dc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Wi = Symbol.for("react.element"),
    Yn = Symbol.for("react.portal"),
    Qn = Symbol.for("react.fragment"),
    el = Symbol.for("react.strict_mode"),
    tl = Symbol.for("react.profiler"),
    mc = Symbol.for("react.provider"),
    gc = Symbol.for("react.context"),
    nl = Symbol.for("react.forward_ref"),
    rl = Symbol.for("react.suspense"),
    il = Symbol.for("react.suspense_list"),
    ol = Symbol.for("react.memo"),
    Gt = Symbol.for("react.lazy"),
    vc = Symbol.for("react.offscreen"),
    yc = Symbol.iterator;
  function jr(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (yc && e[yc]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var oe = Object.assign,
    sl;
  function Dr(e) {
    if (sl === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        sl = (t && t[1]) || "";
      }
    return (
      `
` +
      sl +
      e
    );
  }
  var ll = !1;
  function al(e, t) {
    if (!e || ll) return "";
    ll = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (u) {
            var r = u;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (u) {
            r = u;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (u) {
          r = u;
        }
        e();
      }
    } catch (u) {
      if (u && r && typeof u.stack == "string") {
        for (
          var i = u.stack.split(`
`),
            o = r.stack.split(`
`),
            s = i.length - 1,
            l = o.length - 1;
          1 <= s && 0 <= l && i[s] !== o[l];

        )
          l--;
        for (; 1 <= s && 0 <= l; s--, l--)
          if (i[s] !== o[l]) {
            if (s !== 1 || l !== 1)
              do
                if ((s--, l--, 0 > l || i[s] !== o[l])) {
                  var a =
                    `
` + i[s].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      a.includes("<anonymous>") &&
                      (a = a.replace("<anonymous>", e.displayName)),
                    a
                  );
                }
              while (1 <= s && 0 <= l);
            break;
          }
      }
    } finally {
      (ll = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : "") ? Dr(e) : "";
  }
  function Jm(e) {
    switch (e.tag) {
      case 5:
        return Dr(e.type);
      case 16:
        return Dr("Lazy");
      case 13:
        return Dr("Suspense");
      case 19:
        return Dr("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = al(e.type, !1)), e;
      case 11:
        return (e = al(e.type.render, !1)), e;
      case 1:
        return (e = al(e.type, !0)), e;
      default:
        return "";
    }
  }
  function ul(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Qn:
        return "Fragment";
      case Yn:
        return "Portal";
      case tl:
        return "Profiler";
      case el:
        return "StrictMode";
      case rl:
        return "Suspense";
      case il:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case gc:
          return (e.displayName || "Context") + ".Consumer";
        case mc:
          return (e._context.displayName || "Context") + ".Provider";
        case nl:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case ol:
          return (
            (t = e.displayName || null), t !== null ? t : ul(e.type) || "Memo"
          );
        case Gt:
          (t = e._payload), (e = e._init);
          try {
            return ul(e(t));
          } catch {}
      }
    return null;
  }
  function Zm(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ""),
          t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return ul(t);
      case 8:
        return t === el ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function Yt(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function wc(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function e0(e) {
    var t = wc(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var i = n.get,
        o = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return i.call(this);
          },
          set: function (s) {
            (r = "" + s), o.call(this, s);
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (s) {
            r = "" + s;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function Gi(e) {
    e._valueTracker || (e._valueTracker = e0(e));
  }
  function Sc(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = "";
    return (
      e && (r = wc(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function Yi(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function cl(e, t) {
    var n = t.checked;
    return oe({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function xc(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    (n = Yt(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      });
  }
  function Ec(e, t) {
    (t = t.checked), t != null && Zs(e, "checked", t, !1);
  }
  function dl(e, t) {
    Ec(e, t);
    var n = Yt(t.value),
      r = t.type;
    if (n != null)
      r === "number"
        ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
        : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value")
      ? fl(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && fl(e, t.type, Yt(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked);
  }
  function Tc(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (
        !(
          (r !== "submit" && r !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      (t = "" + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (n = e.name),
      n !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      n !== "" && (e.name = n);
  }
  function fl(e, t, n) {
    (t !== "number" || Yi(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var br = Array.isArray;
  function Kn(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
      for (n = 0; n < e.length; n++)
        (i = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== i && (e[n].selected = i),
          i && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + Yt(n), t = null, i = 0; i < e.length; i++) {
        if (e[i].value === n) {
          (e[i].selected = !0), r && (e[i].defaultSelected = !0);
          return;
        }
        t !== null || e[i].disabled || (t = e[i]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function pl(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(I(91));
    return oe({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function Cc(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(I(92));
        if (br(n)) {
          if (1 < n.length) throw Error(I(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), (n = t);
    }
    e._wrapperState = { initialValue: Yt(n) };
  }
  function Pc(e, t) {
    var n = Yt(t.value),
      r = Yt(t.defaultValue);
    n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = "" + r);
  }
  function kc(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function Oc(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function hl(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? Oc(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
  }
  var Qi,
    _c = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, n, r, i) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, r, i);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          Qi = Qi || document.createElement("div"),
            Qi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = Qi.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function Fr(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Br = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    t0 = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Br).forEach(function (e) {
    t0.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Br[t] = Br[e]);
    });
  });
  function Ic(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (Br.hasOwnProperty(e) && Br[e])
      ? ("" + t).trim()
      : t + "px";
  }
  function Lc(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0,
          i = Ic(n, t[n], r);
        n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
      }
  }
  var n0 = oe(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    }
  );
  function ml(e, t) {
    if (t) {
      if (n0[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(I(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(I(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(I(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(I(62));
    }
  }
  function gl(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var vl = null;
  function yl(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var wl = null,
    Xn = null,
    qn = null;
  function Mc(e) {
    if ((e = ui(e))) {
      if (typeof wl != "function") throw Error(I(280));
      var t = e.stateNode;
      t && ((t = yo(t)), wl(e.stateNode, e.type, t));
    }
  }
  function Nc(e) {
    Xn ? (qn ? qn.push(e) : (qn = [e])) : (Xn = e);
  }
  function Rc() {
    if (Xn) {
      var e = Xn,
        t = qn;
      if (((qn = Xn = null), Mc(e), t)) for (e = 0; e < t.length; e++) Mc(t[e]);
    }
  }
  function zc(e, t) {
    return e(t);
  }
  function Ac() {}
  var Sl = !1;
  function $c(e, t, n) {
    if (Sl) return e(t, n);
    Sl = !0;
    try {
      return zc(e, t, n);
    } finally {
      (Sl = !1), (Xn !== null || qn !== null) && (Ac(), Rc());
    }
  }
  function Vr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = yo(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) ||
          ((e = e.type),
          (r = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !r);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(I(231, t, typeof n));
    return n;
  }
  var xl = !1;
  if (Mt)
    try {
      var Ur = {};
      Object.defineProperty(Ur, "passive", {
        get: function () {
          xl = !0;
        },
      }),
        window.addEventListener("test", Ur, Ur),
        window.removeEventListener("test", Ur, Ur);
    } catch {
      xl = !1;
    }
  function r0(e, t, n, r, i, o, s, l, a) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, u);
    } catch (c) {
      this.onError(c);
    }
  }
  var Hr = !1,
    Ki = null,
    Xi = !1,
    El = null,
    i0 = {
      onError: function (e) {
        (Hr = !0), (Ki = e);
      },
    };
  function o0(e, t, n, r, i, o, s, l, a) {
    (Hr = !1), (Ki = null), r0.apply(i0, arguments);
  }
  function s0(e, t, n, r, i, o, s, l, a) {
    if ((o0.apply(this, arguments), Hr)) {
      if (Hr) {
        var u = Ki;
        (Hr = !1), (Ki = null);
      } else throw Error(I(198));
      Xi || ((Xi = !0), (El = u));
    }
  }
  function xn(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function jc(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function Dc(e) {
    if (xn(e) !== e) throw Error(I(188));
  }
  function l0(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = xn(e)), t === null)) throw Error(I(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var i = n.return;
      if (i === null) break;
      var o = i.alternate;
      if (o === null) {
        if (((r = i.return), r !== null)) {
          n = r;
          continue;
        }
        break;
      }
      if (i.child === o.child) {
        for (o = i.child; o; ) {
          if (o === n) return Dc(i), e;
          if (o === r) return Dc(i), t;
          o = o.sibling;
        }
        throw Error(I(188));
      }
      if (n.return !== r.return) (n = i), (r = o);
      else {
        for (var s = !1, l = i.child; l; ) {
          if (l === n) {
            (s = !0), (n = i), (r = o);
            break;
          }
          if (l === r) {
            (s = !0), (r = i), (n = o);
            break;
          }
          l = l.sibling;
        }
        if (!s) {
          for (l = o.child; l; ) {
            if (l === n) {
              (s = !0), (n = o), (r = i);
              break;
            }
            if (l === r) {
              (s = !0), (r = o), (n = i);
              break;
            }
            l = l.sibling;
          }
          if (!s) throw Error(I(189));
        }
      }
      if (n.alternate !== r) throw Error(I(190));
    }
    if (n.tag !== 3) throw Error(I(188));
    return n.stateNode.current === n ? e : t;
  }
  function bc(e) {
    return (e = l0(e)), e !== null ? Fc(e) : null;
  }
  function Fc(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Fc(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Bc = He.unstable_scheduleCallback,
    Vc = He.unstable_cancelCallback,
    a0 = He.unstable_shouldYield,
    u0 = He.unstable_requestPaint,
    ue = He.unstable_now,
    c0 = He.unstable_getCurrentPriorityLevel,
    Tl = He.unstable_ImmediatePriority,
    Uc = He.unstable_UserBlockingPriority,
    qi = He.unstable_NormalPriority,
    d0 = He.unstable_LowPriority,
    Hc = He.unstable_IdlePriority,
    Ji = null,
    xt = null;
  function f0(e) {
    if (xt && typeof xt.onCommitFiberRoot == "function")
      try {
        xt.onCommitFiberRoot(Ji, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var ft = Math.clz32 ? Math.clz32 : m0,
    p0 = Math.log,
    h0 = Math.LN2;
  function m0(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((p0(e) / h0) | 0)) | 0;
  }
  var Zi = 64,
    eo = 4194304;
  function Wr(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function to(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      i = e.suspendedLanes,
      o = e.pingedLanes,
      s = n & 268435455;
    if (s !== 0) {
      var l = s & ~i;
      l !== 0 ? (r = Wr(l)) : ((o &= s), o !== 0 && (r = Wr(o)));
    } else (s = n & ~i), s !== 0 ? (r = Wr(s)) : o !== 0 && (r = Wr(o));
    if (r === 0) return 0;
    if (
      t !== 0 &&
      t !== r &&
      !(t & i) &&
      ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
    )
      return t;
    if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= r; 0 < t; )
        (n = 31 - ft(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
    return r;
  }
  function g0(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function v0(e, t) {
    for (
      var n = e.suspendedLanes,
        r = e.pingedLanes,
        i = e.expirationTimes,
        o = e.pendingLanes;
      0 < o;

    ) {
      var s = 31 - ft(o),
        l = 1 << s,
        a = i[s];
      a === -1
        ? (!(l & n) || l & r) && (i[s] = g0(l, t))
        : a <= t && (e.expiredLanes |= l),
        (o &= ~l);
    }
  }
  function Cl(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function Wc() {
    var e = Zi;
    return (Zi <<= 1), !(Zi & 4194240) && (Zi = 64), e;
  }
  function Pl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Gr(e, t, n) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - ft(t)),
      (e[t] = n);
  }
  function y0(e, t) {
    var n = e.pendingLanes & ~t;
    (e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements);
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var i = 31 - ft(n),
        o = 1 << i;
      (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
    }
  }
  function kl(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - ft(n),
        i = 1 << r;
      (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
    }
  }
  var X = 0;
  function Gc(e) {
    return (
      (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
  }
  var Yc,
    Ol,
    Qc,
    Kc,
    Xc,
    _l = !1,
    no = [],
    Qt = null,
    Kt = null,
    Xt = null,
    Yr = new Map(),
    Qr = new Map(),
    qt = [],
    w0 =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
      );
  function qc(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Qt = null;
        break;
      case "dragenter":
      case "dragleave":
        Kt = null;
        break;
      case "mouseover":
      case "mouseout":
        Xt = null;
        break;
      case "pointerover":
      case "pointerout":
        Yr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Qr.delete(t.pointerId);
    }
  }
  function Kr(e, t, n, r, i, o) {
    return e === null || e.nativeEvent !== o
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: o,
          targetContainers: [i],
        }),
        t !== null && ((t = ui(t)), t !== null && Ol(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        i !== null && t.indexOf(i) === -1 && t.push(i),
        e);
  }
  function S0(e, t, n, r, i) {
    switch (t) {
      case "focusin":
        return (Qt = Kr(Qt, e, t, n, r, i)), !0;
      case "dragenter":
        return (Kt = Kr(Kt, e, t, n, r, i)), !0;
      case "mouseover":
        return (Xt = Kr(Xt, e, t, n, r, i)), !0;
      case "pointerover":
        var o = i.pointerId;
        return Yr.set(o, Kr(Yr.get(o) || null, e, t, n, r, i)), !0;
      case "gotpointercapture":
        return (
          (o = i.pointerId), Qr.set(o, Kr(Qr.get(o) || null, e, t, n, r, i)), !0
        );
    }
    return !1;
  }
  function Jc(e) {
    var t = En(e.target);
    if (t !== null) {
      var n = xn(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = jc(n)), t !== null)) {
            (e.blockedOn = t),
              Xc(e.priority, function () {
                Qc(n);
              });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function ro(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Ll(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        (vl = r), n.target.dispatchEvent(r), (vl = null);
      } else return (t = ui(n)), t !== null && Ol(t), (e.blockedOn = n), !1;
      t.shift();
    }
    return !0;
  }
  function Zc(e, t, n) {
    ro(e) && n.delete(t);
  }
  function x0() {
    (_l = !1),
      Qt !== null && ro(Qt) && (Qt = null),
      Kt !== null && ro(Kt) && (Kt = null),
      Xt !== null && ro(Xt) && (Xt = null),
      Yr.forEach(Zc),
      Qr.forEach(Zc);
  }
  function Xr(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      _l ||
        ((_l = !0),
        He.unstable_scheduleCallback(He.unstable_NormalPriority, x0)));
  }
  function qr(e) {
    function t(i) {
      return Xr(i, e);
    }
    if (0 < no.length) {
      Xr(no[0], e);
      for (var n = 1; n < no.length; n++) {
        var r = no[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      Qt !== null && Xr(Qt, e),
        Kt !== null && Xr(Kt, e),
        Xt !== null && Xr(Xt, e),
        Yr.forEach(t),
        Qr.forEach(t),
        n = 0;
      n < qt.length;
      n++
    )
      (r = qt[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < qt.length && ((n = qt[0]), n.blockedOn === null); )
      Jc(n), n.blockedOn === null && qt.shift();
  }
  var Jn = Nt.ReactCurrentBatchConfig,
    io = !0;
  function E0(e, t, n, r) {
    var i = X,
      o = Jn.transition;
    Jn.transition = null;
    try {
      (X = 1), Il(e, t, n, r);
    } finally {
      (X = i), (Jn.transition = o);
    }
  }
  function T0(e, t, n, r) {
    var i = X,
      o = Jn.transition;
    Jn.transition = null;
    try {
      (X = 4), Il(e, t, n, r);
    } finally {
      (X = i), (Jn.transition = o);
    }
  }
  function Il(e, t, n, r) {
    if (io) {
      var i = Ll(e, t, n, r);
      if (i === null) Yl(e, t, r, oo, n), qc(e, r);
      else if (S0(i, e, t, n, r)) r.stopPropagation();
      else if ((qc(e, r), t & 4 && -1 < w0.indexOf(e))) {
        for (; i !== null; ) {
          var o = ui(i);
          if (
            (o !== null && Yc(o),
            (o = Ll(e, t, n, r)),
            o === null && Yl(e, t, r, oo, n),
            o === i)
          )
            break;
          i = o;
        }
        i !== null && r.stopPropagation();
      } else Yl(e, t, r, null, n);
    }
  }
  var oo = null;
  function Ll(e, t, n, r) {
    if (((oo = null), (e = yl(r)), (e = En(e)), e !== null))
      if (((t = xn(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = jc(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (oo = e), null;
  }
  function ed(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (c0()) {
          case Tl:
            return 1;
          case Uc:
            return 4;
          case qi:
          case d0:
            return 16;
          case Hc:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Jt = null,
    Ml = null,
    so = null;
  function td() {
    if (so) return so;
    var e,
      t = Ml,
      n = t.length,
      r,
      i = "value" in Jt ? Jt.value : Jt.textContent,
      o = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++);
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === i[o - r]; r++);
    return (so = i.slice(e, 1 < r ? 1 - r : void 0));
  }
  function lo(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function ao() {
    return !0;
  }
  function nd() {
    return !1;
  }
  function We(e) {
    function t(n, r, i, o, s) {
      (this._reactName = n),
        (this._targetInst = i),
        (this.type = r),
        (this.nativeEvent = o),
        (this.target = s),
        (this.currentTarget = null);
      for (var l in e)
        e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(o) : o[l]));
      return (
        (this.isDefaultPrevented = (
          o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
        )
          ? ao
          : nd),
        (this.isPropagationStopped = nd),
        this
      );
    }
    return (
      oe(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = ao));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = ao));
        },
        persist: function () {},
        isPersistent: ao,
      }),
      t
    );
  }
  var Zn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Nl = We(Zn),
    Jr = oe({}, Zn, { view: 0, detail: 0 }),
    C0 = We(Jr),
    Rl,
    zl,
    Zr,
    uo = oe({}, Jr, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: $l,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== Zr &&
              (Zr && e.type === "mousemove"
                ? ((Rl = e.screenX - Zr.screenX), (zl = e.screenY - Zr.screenY))
                : (zl = Rl = 0),
              (Zr = e)),
            Rl);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : zl;
      },
    }),
    rd = We(uo),
    P0 = oe({}, uo, { dataTransfer: 0 }),
    k0 = We(P0),
    O0 = oe({}, Jr, { relatedTarget: 0 }),
    Al = We(O0),
    _0 = oe({}, Zn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    I0 = We(_0),
    L0 = oe({}, Zn, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    M0 = We(L0),
    N0 = oe({}, Zn, { data: 0 }),
    id = We(N0),
    R0 = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    z0 = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    A0 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function $0(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = A0[e])
      ? !!t[e]
      : !1;
  }
  function $l() {
    return $0;
  }
  var j0 = oe({}, Jr, {
      key: function (e) {
        if (e.key) {
          var t = R0[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = lo(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? z0[e.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: $l,
      charCode: function (e) {
        return e.type === "keypress" ? lo(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? lo(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    D0 = We(j0),
    b0 = oe({}, uo, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    od = We(b0),
    F0 = oe({}, Jr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: $l,
    }),
    B0 = We(F0),
    V0 = oe({}, Zn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    U0 = We(V0),
    H0 = oe({}, uo, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
          ? -e.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    W0 = We(H0),
    G0 = [9, 13, 27, 32],
    jl = Mt && "CompositionEvent" in window,
    ei = null;
  Mt && "documentMode" in document && (ei = document.documentMode);
  var Y0 = Mt && "TextEvent" in window && !ei,
    sd = Mt && (!jl || (ei && 8 < ei && 11 >= ei)),
    ld = String.fromCharCode(32),
    ad = !1;
  function ud(e, t) {
    switch (e) {
      case "keyup":
        return G0.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function cd(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var er = !1;
  function Q0(e, t) {
    switch (e) {
      case "compositionend":
        return cd(t);
      case "keypress":
        return t.which !== 32 ? null : ((ad = !0), ld);
      case "textInput":
        return (e = t.data), e === ld && ad ? null : e;
      default:
        return null;
    }
  }
  function K0(e, t) {
    if (er)
      return e === "compositionend" || (!jl && ud(e, t))
        ? ((e = td()), (so = Ml = Jt = null), (er = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return sd && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var X0 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function dd(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!X0[e.type] : t === "textarea";
  }
  function fd(e, t, n, r) {
    Nc(r),
      (t = mo(t, "onChange")),
      0 < t.length &&
        ((n = new Nl("onChange", "change", null, n, r)),
        e.push({ event: n, listeners: t }));
  }
  var ti = null,
    ni = null;
  function q0(e) {
    Ld(e, 0);
  }
  function co(e) {
    var t = or(e);
    if (Sc(t)) return e;
  }
  function J0(e, t) {
    if (e === "change") return t;
  }
  var pd = !1;
  if (Mt) {
    var Dl;
    if (Mt) {
      var bl = "oninput" in document;
      if (!bl) {
        var hd = document.createElement("div");
        hd.setAttribute("oninput", "return;"),
          (bl = typeof hd.oninput == "function");
      }
      Dl = bl;
    } else Dl = !1;
    pd = Dl && (!document.documentMode || 9 < document.documentMode);
  }
  function md() {
    ti && (ti.detachEvent("onpropertychange", gd), (ni = ti = null));
  }
  function gd(e) {
    if (e.propertyName === "value" && co(ni)) {
      var t = [];
      fd(t, ni, e, yl(e)), $c(q0, t);
    }
  }
  function Z0(e, t, n) {
    e === "focusin"
      ? (md(), (ti = t), (ni = n), ti.attachEvent("onpropertychange", gd))
      : e === "focusout" && md();
  }
  function eg(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return co(ni);
  }
  function tg(e, t) {
    if (e === "click") return co(t);
  }
  function ng(e, t) {
    if (e === "input" || e === "change") return co(t);
  }
  function rg(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var pt = typeof Object.is == "function" ? Object.is : rg;
  function ri(e, t) {
    if (pt(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var i = n[r];
      if (!Xs.call(t, i) || !pt(e[i], t[i])) return !1;
    }
    return !0;
  }
  function vd(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function yd(e, t) {
    var n = vd(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (((r = e + n.textContent.length), e <= t && r >= t))
          return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = vd(n);
    }
  }
  function wd(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? wd(e, t.parentNode)
        : "contains" in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function Sd() {
    for (var e = window, t = Yi(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Yi(e.document);
    }
    return t;
  }
  function Fl(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function ig(e) {
    var t = Sd(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      wd(n.ownerDocument.documentElement, n)
    ) {
      if (r !== null && Fl(n)) {
        if (
          ((t = r.start),
          (e = r.end),
          e === void 0 && (e = t),
          "selectionStart" in n)
        )
          (n.selectionStart = t),
            (n.selectionEnd = Math.min(e, n.value.length));
        else if (
          ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var i = n.textContent.length,
            o = Math.min(r.start, i);
          (r = r.end === void 0 ? o : Math.min(r.end, i)),
            !e.extend && o > r && ((i = r), (r = o), (o = i)),
            (i = yd(n, o));
          var s = yd(n, r);
          i &&
            s &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== i.node ||
              e.anchorOffset !== i.offset ||
              e.focusNode !== s.node ||
              e.focusOffset !== s.offset) &&
            ((t = t.createRange()),
            t.setStart(i.node, i.offset),
            e.removeAllRanges(),
            o > r
              ? (e.addRange(t), e.extend(s.node, s.offset))
              : (t.setEnd(s.node, s.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        (e = t[n]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top);
    }
  }
  var og = Mt && "documentMode" in document && 11 >= document.documentMode,
    tr = null,
    Bl = null,
    ii = null,
    Vl = !1;
  function xd(e, t, n) {
    var r =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Vl ||
      tr == null ||
      tr !== Yi(r) ||
      ((r = tr),
      "selectionStart" in r && Fl(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = (
            (r.ownerDocument && r.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (ii && ri(ii, r)) ||
        ((ii = r),
        (r = mo(Bl, "onSelect")),
        0 < r.length &&
          ((t = new Nl("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = tr))));
  }
  function fo(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var nr = {
      animationend: fo("Animation", "AnimationEnd"),
      animationiteration: fo("Animation", "AnimationIteration"),
      animationstart: fo("Animation", "AnimationStart"),
      transitionend: fo("Transition", "TransitionEnd"),
    },
    Ul = {},
    Ed = {};
  Mt &&
    ((Ed = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete nr.animationend.animation,
      delete nr.animationiteration.animation,
      delete nr.animationstart.animation),
    "TransitionEvent" in window || delete nr.transitionend.transition);
  function po(e) {
    if (Ul[e]) return Ul[e];
    if (!nr[e]) return e;
    var t = nr[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in Ed) return (Ul[e] = t[n]);
    return e;
  }
  var Td = po("animationend"),
    Cd = po("animationiteration"),
    Pd = po("animationstart"),
    kd = po("transitionend"),
    Od = new Map(),
    _d =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  function Zt(e, t) {
    Od.set(e, t), Sn(t, [e]);
  }
  for (var Hl = 0; Hl < _d.length; Hl++) {
    var Wl = _d[Hl],
      sg = Wl.toLowerCase(),
      lg = Wl[0].toUpperCase() + Wl.slice(1);
    Zt(sg, "on" + lg);
  }
  Zt(Td, "onAnimationEnd"),
    Zt(Cd, "onAnimationIteration"),
    Zt(Pd, "onAnimationStart"),
    Zt("dblclick", "onDoubleClick"),
    Zt("focusin", "onFocus"),
    Zt("focusout", "onBlur"),
    Zt(kd, "onTransitionEnd"),
    Gn("onMouseEnter", ["mouseout", "mouseover"]),
    Gn("onMouseLeave", ["mouseout", "mouseover"]),
    Gn("onPointerEnter", ["pointerout", "pointerover"]),
    Gn("onPointerLeave", ["pointerout", "pointerover"]),
    Sn(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    Sn(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    Sn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Sn(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    Sn(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    Sn(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var oi =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    ag = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(oi)
    );
  function Id(e, t, n) {
    var r = e.type || "unknown-event";
    (e.currentTarget = n), s0(r, t, void 0, e), (e.currentTarget = null);
  }
  function Ld(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        i = r.event;
      r = r.listeners;
      e: {
        var o = void 0;
        if (t)
          for (var s = r.length - 1; 0 <= s; s--) {
            var l = r[s],
              a = l.instance,
              u = l.currentTarget;
            if (((l = l.listener), a !== o && i.isPropagationStopped()))
              break e;
            Id(i, l, u), (o = a);
          }
        else
          for (s = 0; s < r.length; s++) {
            if (
              ((l = r[s]),
              (a = l.instance),
              (u = l.currentTarget),
              (l = l.listener),
              a !== o && i.isPropagationStopped())
            )
              break e;
            Id(i, l, u), (o = a);
          }
      }
    }
    if (Xi) throw ((e = El), (Xi = !1), (El = null), e);
  }
  function ee(e, t) {
    var n = t[Zl];
    n === void 0 && (n = t[Zl] = new Set());
    var r = e + "__bubble";
    n.has(r) || (Md(t, e, 2, !1), n.add(r));
  }
  function Gl(e, t, n) {
    var r = 0;
    t && (r |= 4), Md(n, e, r, t);
  }
  var ho = "_reactListening" + Math.random().toString(36).slice(2);
  function si(e) {
    if (!e[ho]) {
      (e[ho] = !0),
        fc.forEach(function (n) {
          n !== "selectionchange" && (ag.has(n) || Gl(n, !1, e), Gl(n, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[ho] || ((t[ho] = !0), Gl("selectionchange", !1, t));
    }
  }
  function Md(e, t, n, r) {
    switch (ed(t)) {
      case 1:
        var i = E0;
        break;
      case 4:
        i = T0;
        break;
      default:
        i = Il;
    }
    (n = i.bind(null, t, n, e)),
      (i = void 0),
      !xl ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (i = !0),
      r
        ? i !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: i })
          : e.addEventListener(t, n, !0)
        : i !== void 0
        ? e.addEventListener(t, n, { passive: i })
        : e.addEventListener(t, n, !1);
  }
  function Yl(e, t, n, r, i) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null)
      e: for (;;) {
        if (r === null) return;
        var s = r.tag;
        if (s === 3 || s === 4) {
          var l = r.stateNode.containerInfo;
          if (l === i || (l.nodeType === 8 && l.parentNode === i)) break;
          if (s === 4)
            for (s = r.return; s !== null; ) {
              var a = s.tag;
              if (
                (a === 3 || a === 4) &&
                ((a = s.stateNode.containerInfo),
                a === i || (a.nodeType === 8 && a.parentNode === i))
              )
                return;
              s = s.return;
            }
          for (; l !== null; ) {
            if (((s = En(l)), s === null)) return;
            if (((a = s.tag), a === 5 || a === 6)) {
              r = o = s;
              continue e;
            }
            l = l.parentNode;
          }
        }
        r = r.return;
      }
    $c(function () {
      var u = o,
        c = yl(n),
        d = [];
      e: {
        var p = Od.get(e);
        if (p !== void 0) {
          var h = Nl,
            g = e;
          switch (e) {
            case "keypress":
              if (lo(n) === 0) break e;
            case "keydown":
            case "keyup":
              h = D0;
              break;
            case "focusin":
              (g = "focus"), (h = Al);
              break;
            case "focusout":
              (g = "blur"), (h = Al);
              break;
            case "beforeblur":
            case "afterblur":
              h = Al;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              h = rd;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              h = k0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              h = B0;
              break;
            case Td:
            case Cd:
            case Pd:
              h = I0;
              break;
            case kd:
              h = U0;
              break;
            case "scroll":
              h = C0;
              break;
            case "wheel":
              h = W0;
              break;
            case "copy":
            case "cut":
            case "paste":
              h = M0;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              h = od;
          }
          var y = (t & 4) !== 0,
            T = !y && e === "scroll",
            f = y ? (p !== null ? p + "Capture" : null) : p;
          y = [];
          for (var m = u, v; m !== null; ) {
            v = m;
            var w = v.stateNode;
            if (
              (v.tag === 5 &&
                w !== null &&
                ((v = w),
                f !== null &&
                  ((w = Vr(m, f)), w != null && y.push(li(m, w, v)))),
              T)
            )
              break;
            m = m.return;
          }
          0 < y.length &&
            ((p = new h(p, g, null, n, c)), d.push({ event: p, listeners: y }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (
            ((p = e === "mouseover" || e === "pointerover"),
            (h = e === "mouseout" || e === "pointerout"),
            p &&
              n !== vl &&
              (g = n.relatedTarget || n.fromElement) &&
              (En(g) || g[Rt]))
          )
            break e;
          if (
            (h || p) &&
            ((p =
              c.window === c
                ? c
                : (p = c.ownerDocument)
                ? p.defaultView || p.parentWindow
                : window),
            h
              ? ((g = n.relatedTarget || n.toElement),
                (h = u),
                (g = g ? En(g) : null),
                g !== null &&
                  ((T = xn(g)), g !== T || (g.tag !== 5 && g.tag !== 6)) &&
                  (g = null))
              : ((h = null), (g = u)),
            h !== g)
          ) {
            if (
              ((y = rd),
              (w = "onMouseLeave"),
              (f = "onMouseEnter"),
              (m = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((y = od),
                (w = "onPointerLeave"),
                (f = "onPointerEnter"),
                (m = "pointer")),
              (T = h == null ? p : or(h)),
              (v = g == null ? p : or(g)),
              (p = new y(w, m + "leave", h, n, c)),
              (p.target = T),
              (p.relatedTarget = v),
              (w = null),
              En(c) === u &&
                ((y = new y(f, m + "enter", g, n, c)),
                (y.target = v),
                (y.relatedTarget = T),
                (w = y)),
              (T = w),
              h && g)
            )
              t: {
                for (y = h, f = g, m = 0, v = y; v; v = rr(v)) m++;
                for (v = 0, w = f; w; w = rr(w)) v++;
                for (; 0 < m - v; ) (y = rr(y)), m--;
                for (; 0 < v - m; ) (f = rr(f)), v--;
                for (; m--; ) {
                  if (y === f || (f !== null && y === f.alternate)) break t;
                  (y = rr(y)), (f = rr(f));
                }
                y = null;
              }
            else y = null;
            h !== null && Nd(d, p, h, y, !1),
              g !== null && T !== null && Nd(d, T, g, y, !0);
          }
        }
        e: {
          if (
            ((p = u ? or(u) : window),
            (h = p.nodeName && p.nodeName.toLowerCase()),
            h === "select" || (h === "input" && p.type === "file"))
          )
            var x = J0;
          else if (dd(p))
            if (pd) x = ng;
            else {
              x = eg;
              var P = Z0;
            }
          else
            (h = p.nodeName) &&
              h.toLowerCase() === "input" &&
              (p.type === "checkbox" || p.type === "radio") &&
              (x = tg);
          if (x && (x = x(e, u))) {
            fd(d, x, n, c);
            break e;
          }
          P && P(e, p, u),
            e === "focusout" &&
              (P = p._wrapperState) &&
              P.controlled &&
              p.type === "number" &&
              fl(p, "number", p.value);
        }
        switch (((P = u ? or(u) : window), e)) {
          case "focusin":
            (dd(P) || P.contentEditable === "true") &&
              ((tr = P), (Bl = u), (ii = null));
            break;
          case "focusout":
            ii = Bl = tr = null;
            break;
          case "mousedown":
            Vl = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Vl = !1), xd(d, n, c);
            break;
          case "selectionchange":
            if (og) break;
          case "keydown":
          case "keyup":
            xd(d, n, c);
        }
        var S;
        if (jl)
          e: {
            switch (e) {
              case "compositionstart":
                var O = "onCompositionStart";
                break e;
              case "compositionend":
                O = "onCompositionEnd";
                break e;
              case "compositionupdate":
                O = "onCompositionUpdate";
                break e;
            }
            O = void 0;
          }
        else
          er
            ? ud(e, n) && (O = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (O = "onCompositionStart");
        O &&
          (sd &&
            n.locale !== "ko" &&
            (er || O !== "onCompositionStart"
              ? O === "onCompositionEnd" && er && (S = td())
              : ((Jt = c),
                (Ml = "value" in Jt ? Jt.value : Jt.textContent),
                (er = !0))),
          (P = mo(u, O)),
          0 < P.length &&
            ((O = new id(O, e, null, n, c)),
            d.push({ event: O, listeners: P }),
            S ? (O.data = S) : ((S = cd(n)), S !== null && (O.data = S)))),
          (S = Y0 ? Q0(e, n) : K0(e, n)) &&
            ((u = mo(u, "onBeforeInput")),
            0 < u.length &&
              ((c = new id("onBeforeInput", "beforeinput", null, n, c)),
              d.push({ event: c, listeners: u }),
              (c.data = S)));
      }
      Ld(d, t);
    });
  }
  function li(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function mo(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var i = e,
        o = i.stateNode;
      i.tag === 5 &&
        o !== null &&
        ((i = o),
        (o = Vr(e, n)),
        o != null && r.unshift(li(e, o, i)),
        (o = Vr(e, t)),
        o != null && r.push(li(e, o, i))),
        (e = e.return);
    }
    return r;
  }
  function rr(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Nd(e, t, n, r, i) {
    for (var o = t._reactName, s = []; n !== null && n !== r; ) {
      var l = n,
        a = l.alternate,
        u = l.stateNode;
      if (a !== null && a === r) break;
      l.tag === 5 &&
        u !== null &&
        ((l = u),
        i
          ? ((a = Vr(n, o)), a != null && s.unshift(li(n, a, l)))
          : i || ((a = Vr(n, o)), a != null && s.push(li(n, a, l)))),
        (n = n.return);
    }
    s.length !== 0 && e.push({ event: t, listeners: s });
  }
  var ug = /\r\n?/g,
    cg = /\u0000|\uFFFD/g;
  function Rd(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        ug,
        `
`
      )
      .replace(cg, "");
  }
  function go(e, t, n) {
    if (((t = Rd(t)), Rd(e) !== t && n)) throw Error(I(425));
  }
  function vo() {}
  var Ql = null,
    Kl = null;
  function Xl(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var ql = typeof setTimeout == "function" ? setTimeout : void 0,
    dg = typeof clearTimeout == "function" ? clearTimeout : void 0,
    zd = typeof Promise == "function" ? Promise : void 0,
    fg =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof zd < "u"
        ? function (e) {
            return zd.resolve(null).then(e).catch(pg);
          }
        : ql;
  function pg(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Jl(e, t) {
    var n = t,
      r = 0;
    do {
      var i = n.nextSibling;
      if ((e.removeChild(n), i && i.nodeType === 8))
        if (((n = i.data), n === "/$")) {
          if (r === 0) {
            e.removeChild(i), qr(t);
            return;
          }
          r--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
      n = i;
    } while (n);
    qr(t);
  }
  function en(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function Ad(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var ir = Math.random().toString(36).slice(2),
    Et = "__reactFiber$" + ir,
    ai = "__reactProps$" + ir,
    Rt = "__reactContainer$" + ir,
    Zl = "__reactEvents$" + ir,
    hg = "__reactListeners$" + ir,
    mg = "__reactHandles$" + ir;
  function En(e) {
    var t = e[Et];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[Rt] || n[Et])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = Ad(e); e !== null; ) {
            if ((n = e[Et])) return n;
            e = Ad(e);
          }
        return t;
      }
      (e = n), (n = e.parentNode);
    }
    return null;
  }
  function ui(e) {
    return (
      (e = e[Et] || e[Rt]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function or(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(I(33));
  }
  function yo(e) {
    return e[ai] || null;
  }
  var ea = [],
    sr = -1;
  function tn(e) {
    return { current: e };
  }
  function te(e) {
    0 > sr || ((e.current = ea[sr]), (ea[sr] = null), sr--);
  }
  function Z(e, t) {
    sr++, (ea[sr] = e.current), (e.current = t);
  }
  var nn = {},
    ke = tn(nn),
    ze = tn(!1),
    Tn = nn;
  function lr(e, t) {
    var n = e.type.contextTypes;
    if (!n) return nn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var i = {},
      o;
    for (o in n) i[o] = t[o];
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = i)),
      i
    );
  }
  function Ae(e) {
    return (e = e.childContextTypes), e != null;
  }
  function wo() {
    te(ze), te(ke);
  }
  function $d(e, t, n) {
    if (ke.current !== nn) throw Error(I(168));
    Z(ke, t), Z(ze, n);
  }
  function jd(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
      return n;
    r = r.getChildContext();
    for (var i in r) if (!(i in t)) throw Error(I(108, Zm(e) || "Unknown", i));
    return oe({}, n, r);
  }
  function So(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        nn),
      (Tn = ke.current),
      Z(ke, e),
      Z(ze, ze.current),
      !0
    );
  }
  function Dd(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(I(169));
    n
      ? ((e = jd(e, t, Tn)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        te(ze),
        te(ke),
        Z(ke, e))
      : te(ze),
      Z(ze, n);
  }
  var zt = null,
    xo = !1,
    ta = !1;
  function bd(e) {
    zt === null ? (zt = [e]) : zt.push(e);
  }
  function gg(e) {
    (xo = !0), bd(e);
  }
  function rn() {
    if (!ta && zt !== null) {
      ta = !0;
      var e = 0,
        t = X;
      try {
        var n = zt;
        for (X = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        (zt = null), (xo = !1);
      } catch (i) {
        throw (zt !== null && (zt = zt.slice(e + 1)), Bc(Tl, rn), i);
      } finally {
        (X = t), (ta = !1);
      }
    }
    return null;
  }
  var ar = [],
    ur = 0,
    Eo = null,
    To = 0,
    et = [],
    tt = 0,
    Cn = null,
    At = 1,
    $t = "";
  function Pn(e, t) {
    (ar[ur++] = To), (ar[ur++] = Eo), (Eo = e), (To = t);
  }
  function Fd(e, t, n) {
    (et[tt++] = At), (et[tt++] = $t), (et[tt++] = Cn), (Cn = e);
    var r = At;
    e = $t;
    var i = 32 - ft(r) - 1;
    (r &= ~(1 << i)), (n += 1);
    var o = 32 - ft(t) + i;
    if (30 < o) {
      var s = i - (i % 5);
      (o = (r & ((1 << s) - 1)).toString(32)),
        (r >>= s),
        (i -= s),
        (At = (1 << (32 - ft(t) + i)) | (n << i) | r),
        ($t = o + e);
    } else (At = (1 << o) | (n << i) | r), ($t = e);
  }
  function na(e) {
    e.return !== null && (Pn(e, 1), Fd(e, 1, 0));
  }
  function ra(e) {
    for (; e === Eo; )
      (Eo = ar[--ur]), (ar[ur] = null), (To = ar[--ur]), (ar[ur] = null);
    for (; e === Cn; )
      (Cn = et[--tt]),
        (et[tt] = null),
        ($t = et[--tt]),
        (et[tt] = null),
        (At = et[--tt]),
        (et[tt] = null);
  }
  var Ge = null,
    Ye = null,
    re = !1,
    ht = null;
  function Bd(e, t) {
    var n = ot(5, null, null, 0);
    (n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
  }
  function Vd(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t =
            t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (Ge = e), (Ye = en(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (Ge = e), (Ye = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = Cn !== null ? { id: At, overflow: $t } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824,
              }),
              (n = ot(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (Ge = e),
              (Ye = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function ia(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function oa(e) {
    if (re) {
      var t = Ye;
      if (t) {
        var n = t;
        if (!Vd(e, t)) {
          if (ia(e)) throw Error(I(418));
          t = en(n.nextSibling);
          var r = Ge;
          t && Vd(e, t)
            ? Bd(r, n)
            : ((e.flags = (e.flags & -4097) | 2), (re = !1), (Ge = e));
        }
      } else {
        if (ia(e)) throw Error(I(418));
        (e.flags = (e.flags & -4097) | 2), (re = !1), (Ge = e);
      }
    }
  }
  function Ud(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    Ge = e;
  }
  function Co(e) {
    if (e !== Ge) return !1;
    if (!re) return Ud(e), (re = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !Xl(e.type, e.memoizedProps))),
      t && (t = Ye))
    ) {
      if (ia(e)) throw (Hd(), Error(I(418)));
      for (; t; ) Bd(e, t), (t = en(t.nextSibling));
    }
    if ((Ud(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(I(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                Ye = en(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        Ye = null;
      }
    } else Ye = Ge ? en(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Hd() {
    for (var e = Ye; e; ) e = en(e.nextSibling);
  }
  function cr() {
    (Ye = Ge = null), (re = !1);
  }
  function sa(e) {
    ht === null ? (ht = [e]) : ht.push(e);
  }
  var vg = Nt.ReactCurrentBatchConfig;
  function mt(e, t) {
    if (e && e.defaultProps) {
      (t = oe({}, t)), (e = e.defaultProps);
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  var Po = tn(null),
    ko = null,
    dr = null,
    la = null;
  function aa() {
    la = dr = ko = null;
  }
  function ua(e) {
    var t = Po.current;
    te(Po), (e._currentValue = t);
  }
  function ca(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
          : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function fr(e, t) {
    (ko = e),
      (la = dr = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        (e.lanes & t && ($e = !0), (e.firstContext = null));
  }
  function nt(e) {
    var t = e._currentValue;
    if (la !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), dr === null)) {
        if (ko === null) throw Error(I(308));
        (dr = e), (ko.dependencies = { lanes: 0, firstContext: e });
      } else dr = dr.next = e;
    return t;
  }
  var kn = null;
  function da(e) {
    kn === null ? (kn = [e]) : kn.push(e);
  }
  function Wd(e, t, n, r) {
    var i = t.interleaved;
    return (
      i === null ? ((n.next = n), da(t)) : ((n.next = i.next), (i.next = n)),
      (t.interleaved = n),
      jt(e, r)
    );
  }
  function jt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      (e.childLanes |= t),
        (n = e.alternate),
        n !== null && (n.childLanes |= t),
        (n = e),
        (e = e.return);
    return n.tag === 3 ? n.stateNode : null;
  }
  var on = !1;
  function fa(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Gd(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        });
  }
  function Dt(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function sn(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), W & 2)) {
      var i = r.pending;
      return (
        i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
        (r.pending = t),
        jt(e, n)
      );
    }
    return (
      (i = r.interleaved),
      i === null ? ((t.next = t), da(r)) : ((t.next = i.next), (i.next = t)),
      (r.interleaved = t),
      jt(e, n)
    );
  }
  function Oo(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), kl(e, n);
    }
  }
  function Yd(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var i = null,
        o = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var s = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          o === null ? (i = o = s) : (o = o.next = s), (n = n.next);
        } while (n !== null);
        o === null ? (i = o = t) : (o = o.next = t);
      } else i = o = t;
      (n = {
        baseState: r.baseState,
        firstBaseUpdate: i,
        lastBaseUpdate: o,
        shared: r.shared,
        effects: r.effects,
      }),
        (e.updateQueue = n);
      return;
    }
    (e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t);
  }
  function _o(e, t, n, r) {
    var i = e.updateQueue;
    on = !1;
    var o = i.firstBaseUpdate,
      s = i.lastBaseUpdate,
      l = i.shared.pending;
    if (l !== null) {
      i.shared.pending = null;
      var a = l,
        u = a.next;
      (a.next = null), s === null ? (o = u) : (s.next = u), (s = a);
      var c = e.alternate;
      c !== null &&
        ((c = c.updateQueue),
        (l = c.lastBaseUpdate),
        l !== s &&
          (l === null ? (c.firstBaseUpdate = u) : (l.next = u),
          (c.lastBaseUpdate = a)));
    }
    if (o !== null) {
      var d = i.baseState;
      (s = 0), (c = u = a = null), (l = o);
      do {
        var p = l.lane,
          h = l.eventTime;
        if ((r & p) === p) {
          c !== null &&
            (c = c.next =
              {
                eventTime: h,
                lane: 0,
                tag: l.tag,
                payload: l.payload,
                callback: l.callback,
                next: null,
              });
          e: {
            var g = e,
              y = l;
            switch (((p = t), (h = n), y.tag)) {
              case 1:
                if (((g = y.payload), typeof g == "function")) {
                  d = g.call(h, d, p);
                  break e;
                }
                d = g;
                break e;
              case 3:
                g.flags = (g.flags & -65537) | 128;
              case 0:
                if (
                  ((g = y.payload),
                  (p = typeof g == "function" ? g.call(h, d, p) : g),
                  p == null)
                )
                  break e;
                d = oe({}, d, p);
                break e;
              case 2:
                on = !0;
            }
          }
          l.callback !== null &&
            l.lane !== 0 &&
            ((e.flags |= 64),
            (p = i.effects),
            p === null ? (i.effects = [l]) : p.push(l));
        } else
          (h = {
            eventTime: h,
            lane: p,
            tag: l.tag,
            payload: l.payload,
            callback: l.callback,
            next: null,
          }),
            c === null ? ((u = c = h), (a = d)) : (c = c.next = h),
            (s |= p);
        if (((l = l.next), l === null)) {
          if (((l = i.shared.pending), l === null)) break;
          (p = l),
            (l = p.next),
            (p.next = null),
            (i.lastBaseUpdate = p),
            (i.shared.pending = null);
        }
      } while (1);
      if (
        (c === null && (a = d),
        (i.baseState = a),
        (i.firstBaseUpdate = u),
        (i.lastBaseUpdate = c),
        (t = i.shared.interleaved),
        t !== null)
      ) {
        i = t;
        do (s |= i.lane), (i = i.next);
        while (i !== t);
      } else o === null && (i.shared.lanes = 0);
      (In |= s), (e.lanes = s), (e.memoizedState = d);
    }
  }
  function Qd(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          i = r.callback;
        if (i !== null) {
          if (((r.callback = null), (r = n), typeof i != "function"))
            throw Error(I(191, i));
          i.call(r);
        }
      }
  }
  var Kd = new dc.Component().refs;
  function pa(e, t, n, r) {
    (t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : oe({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Io = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? xn(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = Re(),
        i = cn(e),
        o = Dt(r, i);
      (o.payload = t),
        n != null && (o.callback = n),
        (t = sn(e, o, i)),
        t !== null && (yt(t, e, i, r), Oo(t, e, i));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = Re(),
        i = cn(e),
        o = Dt(r, i);
      (o.tag = 1),
        (o.payload = t),
        n != null && (o.callback = n),
        (t = sn(e, o, i)),
        t !== null && (yt(t, e, i, r), Oo(t, e, i));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Re(),
        r = cn(e),
        i = Dt(n, r);
      (i.tag = 2),
        t != null && (i.callback = t),
        (t = sn(e, i, r)),
        t !== null && (yt(t, e, r, n), Oo(t, e, r));
    },
  };
  function Xd(e, t, n, r, i, o, s) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, o, s)
        : t.prototype && t.prototype.isPureReactComponent
        ? !ri(n, r) || !ri(i, o)
        : !0
    );
  }
  function qd(e, t, n) {
    var r = !1,
      i = nn,
      o = t.contextType;
    return (
      typeof o == "object" && o !== null
        ? (o = nt(o))
        : ((i = Ae(t) ? Tn : ke.current),
          (r = t.contextTypes),
          (o = (r = r != null) ? lr(e, i) : nn)),
      (t = new t(n, o)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = Io),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = i),
        (e.__reactInternalMemoizedMaskedChildContext = o)),
      t
    );
  }
  function Jd(e, t, n, r) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && Io.enqueueReplaceState(t, t.state, null);
  }
  function ha(e, t, n, r) {
    var i = e.stateNode;
    (i.props = n), (i.state = e.memoizedState), (i.refs = Kd), fa(e);
    var o = t.contextType;
    typeof o == "object" && o !== null
      ? (i.context = nt(o))
      : ((o = Ae(t) ? Tn : ke.current), (i.context = lr(e, o))),
      (i.state = e.memoizedState),
      (o = t.getDerivedStateFromProps),
      typeof o == "function" && (pa(e, t, o, n), (i.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function" ||
        (typeof i.UNSAFE_componentWillMount != "function" &&
          typeof i.componentWillMount != "function") ||
        ((t = i.state),
        typeof i.componentWillMount == "function" && i.componentWillMount(),
        typeof i.UNSAFE_componentWillMount == "function" &&
          i.UNSAFE_componentWillMount(),
        t !== i.state && Io.enqueueReplaceState(i, i.state, null),
        _o(e, n, i, r),
        (i.state = e.memoizedState)),
      typeof i.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function ci(e, t, n) {
    if (
      ((e = n.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(I(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(I(147, e));
        var i = r,
          o = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === o
          ? t.ref
          : ((t = function (s) {
              var l = i.refs;
              l === Kd && (l = i.refs = {}),
                s === null ? delete l[o] : (l[o] = s);
            }),
            (t._stringRef = o),
            t);
      }
      if (typeof e != "string") throw Error(I(284));
      if (!n._owner) throw Error(I(290, e));
    }
    return e;
  }
  function Lo(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        I(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e
        )
      ))
    );
  }
  function Zd(e) {
    var t = e._init;
    return t(e._payload);
  }
  function ef(e) {
    function t(f, m) {
      if (e) {
        var v = f.deletions;
        v === null ? ((f.deletions = [m]), (f.flags |= 16)) : v.push(m);
      }
    }
    function n(f, m) {
      if (!e) return null;
      for (; m !== null; ) t(f, m), (m = m.sibling);
      return null;
    }
    function r(f, m) {
      for (f = new Map(); m !== null; )
        m.key !== null ? f.set(m.key, m) : f.set(m.index, m), (m = m.sibling);
      return f;
    }
    function i(f, m) {
      return (f = fn(f, m)), (f.index = 0), (f.sibling = null), f;
    }
    function o(f, m, v) {
      return (
        (f.index = v),
        e
          ? ((v = f.alternate),
            v !== null
              ? ((v = v.index), v < m ? ((f.flags |= 2), m) : v)
              : ((f.flags |= 2), m))
          : ((f.flags |= 1048576), m)
      );
    }
    function s(f) {
      return e && f.alternate === null && (f.flags |= 2), f;
    }
    function l(f, m, v, w) {
      return m === null || m.tag !== 6
        ? ((m = qa(v, f.mode, w)), (m.return = f), m)
        : ((m = i(m, v)), (m.return = f), m);
    }
    function a(f, m, v, w) {
      var x = v.type;
      return x === Qn
        ? c(f, m, v.props.children, w, v.key)
        : m !== null &&
          (m.elementType === x ||
            (typeof x == "object" &&
              x !== null &&
              x.$$typeof === Gt &&
              Zd(x) === m.type))
        ? ((w = i(m, v.props)), (w.ref = ci(f, m, v)), (w.return = f), w)
        : ((w = Ko(v.type, v.key, v.props, null, f.mode, w)),
          (w.ref = ci(f, m, v)),
          (w.return = f),
          w);
    }
    function u(f, m, v, w) {
      return m === null ||
        m.tag !== 4 ||
        m.stateNode.containerInfo !== v.containerInfo ||
        m.stateNode.implementation !== v.implementation
        ? ((m = Ja(v, f.mode, w)), (m.return = f), m)
        : ((m = i(m, v.children || [])), (m.return = f), m);
    }
    function c(f, m, v, w, x) {
      return m === null || m.tag !== 7
        ? ((m = Rn(v, f.mode, w, x)), (m.return = f), m)
        : ((m = i(m, v)), (m.return = f), m);
    }
    function d(f, m, v) {
      if ((typeof m == "string" && m !== "") || typeof m == "number")
        return (m = qa("" + m, f.mode, v)), (m.return = f), m;
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case Wi:
            return (
              (v = Ko(m.type, m.key, m.props, null, f.mode, v)),
              (v.ref = ci(f, null, m)),
              (v.return = f),
              v
            );
          case Yn:
            return (m = Ja(m, f.mode, v)), (m.return = f), m;
          case Gt:
            var w = m._init;
            return d(f, w(m._payload), v);
        }
        if (br(m) || jr(m))
          return (m = Rn(m, f.mode, v, null)), (m.return = f), m;
        Lo(f, m);
      }
      return null;
    }
    function p(f, m, v, w) {
      var x = m !== null ? m.key : null;
      if ((typeof v == "string" && v !== "") || typeof v == "number")
        return x !== null ? null : l(f, m, "" + v, w);
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case Wi:
            return v.key === x ? a(f, m, v, w) : null;
          case Yn:
            return v.key === x ? u(f, m, v, w) : null;
          case Gt:
            return (x = v._init), p(f, m, x(v._payload), w);
        }
        if (br(v) || jr(v)) return x !== null ? null : c(f, m, v, w, null);
        Lo(f, v);
      }
      return null;
    }
    function h(f, m, v, w, x) {
      if ((typeof w == "string" && w !== "") || typeof w == "number")
        return (f = f.get(v) || null), l(m, f, "" + w, x);
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case Wi:
            return (
              (f = f.get(w.key === null ? v : w.key) || null), a(m, f, w, x)
            );
          case Yn:
            return (
              (f = f.get(w.key === null ? v : w.key) || null), u(m, f, w, x)
            );
          case Gt:
            var P = w._init;
            return h(f, m, v, P(w._payload), x);
        }
        if (br(w) || jr(w)) return (f = f.get(v) || null), c(m, f, w, x, null);
        Lo(m, w);
      }
      return null;
    }
    function g(f, m, v, w) {
      for (
        var x = null, P = null, S = m, O = (m = 0), _ = null;
        S !== null && O < v.length;
        O++
      ) {
        S.index > O ? ((_ = S), (S = null)) : (_ = S.sibling);
        var j = p(f, S, v[O], w);
        if (j === null) {
          S === null && (S = _);
          break;
        }
        e && S && j.alternate === null && t(f, S),
          (m = o(j, m, O)),
          P === null ? (x = j) : (P.sibling = j),
          (P = j),
          (S = _);
      }
      if (O === v.length) return n(f, S), re && Pn(f, O), x;
      if (S === null) {
        for (; O < v.length; O++)
          (S = d(f, v[O], w)),
            S !== null &&
              ((m = o(S, m, O)),
              P === null ? (x = S) : (P.sibling = S),
              (P = S));
        return re && Pn(f, O), x;
      }
      for (S = r(f, S); O < v.length; O++)
        (_ = h(S, f, O, v[O], w)),
          _ !== null &&
            (e && _.alternate !== null && S.delete(_.key === null ? O : _.key),
            (m = o(_, m, O)),
            P === null ? (x = _) : (P.sibling = _),
            (P = _));
      return (
        e &&
          S.forEach(function (L) {
            return t(f, L);
          }),
        re && Pn(f, O),
        x
      );
    }
    function y(f, m, v, w) {
      var x = jr(v);
      if (typeof x != "function") throw Error(I(150));
      if (((v = x.call(v)), v == null)) throw Error(I(151));
      for (
        var P = (x = null), S = m, O = (m = 0), _ = null, j = v.next();
        S !== null && !j.done;
        O++, j = v.next()
      ) {
        S.index > O ? ((_ = S), (S = null)) : (_ = S.sibling);
        var L = p(f, S, j.value, w);
        if (L === null) {
          S === null && (S = _);
          break;
        }
        e && S && L.alternate === null && t(f, S),
          (m = o(L, m, O)),
          P === null ? (x = L) : (P.sibling = L),
          (P = L),
          (S = _);
      }
      if (j.done) return n(f, S), re && Pn(f, O), x;
      if (S === null) {
        for (; !j.done; O++, j = v.next())
          (j = d(f, j.value, w)),
            j !== null &&
              ((m = o(j, m, O)),
              P === null ? (x = j) : (P.sibling = j),
              (P = j));
        return re && Pn(f, O), x;
      }
      for (S = r(f, S); !j.done; O++, j = v.next())
        (j = h(S, f, O, j.value, w)),
          j !== null &&
            (e && j.alternate !== null && S.delete(j.key === null ? O : j.key),
            (m = o(j, m, O)),
            P === null ? (x = j) : (P.sibling = j),
            (P = j));
      return (
        e &&
          S.forEach(function ($) {
            return t(f, $);
          }),
        re && Pn(f, O),
        x
      );
    }
    function T(f, m, v, w) {
      if (
        (typeof v == "object" &&
          v !== null &&
          v.type === Qn &&
          v.key === null &&
          (v = v.props.children),
        typeof v == "object" && v !== null)
      ) {
        switch (v.$$typeof) {
          case Wi:
            e: {
              for (var x = v.key, P = m; P !== null; ) {
                if (P.key === x) {
                  if (((x = v.type), x === Qn)) {
                    if (P.tag === 7) {
                      n(f, P.sibling),
                        (m = i(P, v.props.children)),
                        (m.return = f),
                        (f = m);
                      break e;
                    }
                  } else if (
                    P.elementType === x ||
                    (typeof x == "object" &&
                      x !== null &&
                      x.$$typeof === Gt &&
                      Zd(x) === P.type)
                  ) {
                    n(f, P.sibling),
                      (m = i(P, v.props)),
                      (m.ref = ci(f, P, v)),
                      (m.return = f),
                      (f = m);
                    break e;
                  }
                  n(f, P);
                  break;
                } else t(f, P);
                P = P.sibling;
              }
              v.type === Qn
                ? ((m = Rn(v.props.children, f.mode, w, v.key)),
                  (m.return = f),
                  (f = m))
                : ((w = Ko(v.type, v.key, v.props, null, f.mode, w)),
                  (w.ref = ci(f, m, v)),
                  (w.return = f),
                  (f = w));
            }
            return s(f);
          case Yn:
            e: {
              for (P = v.key; m !== null; ) {
                if (m.key === P)
                  if (
                    m.tag === 4 &&
                    m.stateNode.containerInfo === v.containerInfo &&
                    m.stateNode.implementation === v.implementation
                  ) {
                    n(f, m.sibling),
                      (m = i(m, v.children || [])),
                      (m.return = f),
                      (f = m);
                    break e;
                  } else {
                    n(f, m);
                    break;
                  }
                else t(f, m);
                m = m.sibling;
              }
              (m = Ja(v, f.mode, w)), (m.return = f), (f = m);
            }
            return s(f);
          case Gt:
            return (P = v._init), T(f, m, P(v._payload), w);
        }
        if (br(v)) return g(f, m, v, w);
        if (jr(v)) return y(f, m, v, w);
        Lo(f, v);
      }
      return (typeof v == "string" && v !== "") || typeof v == "number"
        ? ((v = "" + v),
          m !== null && m.tag === 6
            ? (n(f, m.sibling), (m = i(m, v)), (m.return = f), (f = m))
            : (n(f, m), (m = qa(v, f.mode, w)), (m.return = f), (f = m)),
          s(f))
        : n(f, m);
    }
    return T;
  }
  var pr = ef(!0),
    tf = ef(!1),
    di = {},
    Tt = tn(di),
    fi = tn(di),
    pi = tn(di);
  function On(e) {
    if (e === di) throw Error(I(174));
    return e;
  }
  function ma(e, t) {
    switch ((Z(pi, t), Z(fi, e), Z(Tt, di), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : hl(null, "");
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = hl(t, e));
    }
    te(Tt), Z(Tt, t);
  }
  function hr() {
    te(Tt), te(fi), te(pi);
  }
  function nf(e) {
    On(pi.current);
    var t = On(Tt.current),
      n = hl(t, e.type);
    t !== n && (Z(fi, e), Z(Tt, n));
  }
  function ga(e) {
    fi.current === e && (te(Tt), te(fi));
  }
  var se = tn(0);
  function Mo(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var va = [];
  function ya() {
    for (var e = 0; e < va.length; e++)
      va[e]._workInProgressVersionPrimary = null;
    va.length = 0;
  }
  var No = Nt.ReactCurrentDispatcher,
    wa = Nt.ReactCurrentBatchConfig,
    _n = 0,
    le = null,
    pe = null,
    ye = null,
    Ro = !1,
    hi = !1,
    mi = 0,
    yg = 0;
  function Oe() {
    throw Error(I(321));
  }
  function Sa(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!pt(e[n], t[n])) return !1;
    return !0;
  }
  function xa(e, t, n, r, i, o) {
    if (
      ((_n = o),
      (le = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (No.current = e === null || e.memoizedState === null ? Eg : Tg),
      (e = n(r, i)),
      hi)
    ) {
      o = 0;
      do {
        if (((hi = !1), (mi = 0), 25 <= o)) throw Error(I(301));
        (o += 1),
          (ye = pe = null),
          (t.updateQueue = null),
          (No.current = Cg),
          (e = n(r, i));
      } while (hi);
    }
    if (
      ((No.current = $o),
      (t = pe !== null && pe.next !== null),
      (_n = 0),
      (ye = pe = le = null),
      (Ro = !1),
      t)
    )
      throw Error(I(300));
    return e;
  }
  function Ea() {
    var e = mi !== 0;
    return (mi = 0), e;
  }
  function Ct() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return ye === null ? (le.memoizedState = ye = e) : (ye = ye.next = e), ye;
  }
  function rt() {
    if (pe === null) {
      var e = le.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = pe.next;
    var t = ye === null ? le.memoizedState : ye.next;
    if (t !== null) (ye = t), (pe = e);
    else {
      if (e === null) throw Error(I(310));
      (pe = e),
        (e = {
          memoizedState: pe.memoizedState,
          baseState: pe.baseState,
          baseQueue: pe.baseQueue,
          queue: pe.queue,
          next: null,
        }),
        ye === null ? (le.memoizedState = ye = e) : (ye = ye.next = e);
    }
    return ye;
  }
  function gi(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Ta(e) {
    var t = rt(),
      n = t.queue;
    if (n === null) throw Error(I(311));
    n.lastRenderedReducer = e;
    var r = pe,
      i = r.baseQueue,
      o = n.pending;
    if (o !== null) {
      if (i !== null) {
        var s = i.next;
        (i.next = o.next), (o.next = s);
      }
      (r.baseQueue = i = o), (n.pending = null);
    }
    if (i !== null) {
      (o = i.next), (r = r.baseState);
      var l = (s = null),
        a = null,
        u = o;
      do {
        var c = u.lane;
        if ((_n & c) === c)
          a !== null &&
            (a = a.next =
              {
                lane: 0,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null,
              }),
            (r = u.hasEagerState ? u.eagerState : e(r, u.action));
        else {
          var d = {
            lane: c,
            action: u.action,
            hasEagerState: u.hasEagerState,
            eagerState: u.eagerState,
            next: null,
          };
          a === null ? ((l = a = d), (s = r)) : (a = a.next = d),
            (le.lanes |= c),
            (In |= c);
        }
        u = u.next;
      } while (u !== null && u !== o);
      a === null ? (s = r) : (a.next = l),
        pt(r, t.memoizedState) || ($e = !0),
        (t.memoizedState = r),
        (t.baseState = s),
        (t.baseQueue = a),
        (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
      i = e;
      do (o = i.lane), (le.lanes |= o), (In |= o), (i = i.next);
      while (i !== e);
    } else i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Ca(e) {
    var t = rt(),
      n = t.queue;
    if (n === null) throw Error(I(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      i = n.pending,
      o = t.memoizedState;
    if (i !== null) {
      n.pending = null;
      var s = (i = i.next);
      do (o = e(o, s.action)), (s = s.next);
      while (s !== i);
      pt(o, t.memoizedState) || ($e = !0),
        (t.memoizedState = o),
        t.baseQueue === null && (t.baseState = o),
        (n.lastRenderedState = o);
    }
    return [o, r];
  }
  function rf() {}
  function of(e, t) {
    var n = le,
      r = rt(),
      i = t(),
      o = !pt(r.memoizedState, i);
    if (
      (o && ((r.memoizedState = i), ($e = !0)),
      (r = r.queue),
      Pa(af.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || o || (ye !== null && ye.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        vi(9, lf.bind(null, n, r, i, t), void 0, null),
        we === null)
      )
        throw Error(I(349));
      _n & 30 || sf(n, t, i);
    }
    return i;
  }
  function sf(e, t, n) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = le.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (le.updateQueue = t),
          (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
  }
  function lf(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), uf(t) && cf(e);
  }
  function af(e, t, n) {
    return n(function () {
      uf(t) && cf(e);
    });
  }
  function uf(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !pt(e, n);
    } catch {
      return !0;
    }
  }
  function cf(e) {
    var t = jt(e, 1);
    t !== null && yt(t, e, 1, -1);
  }
  function df(e) {
    var t = Ct();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: gi,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = xg.bind(null, le, e)),
      [t.memoizedState, e]
    );
  }
  function vi(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = le.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (le.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function ff() {
    return rt().memoizedState;
  }
  function zo(e, t, n, r) {
    var i = Ct();
    (le.flags |= e),
      (i.memoizedState = vi(1 | t, n, void 0, r === void 0 ? null : r));
  }
  function Ao(e, t, n, r) {
    var i = rt();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (pe !== null) {
      var s = pe.memoizedState;
      if (((o = s.destroy), r !== null && Sa(r, s.deps))) {
        i.memoizedState = vi(t, n, o, r);
        return;
      }
    }
    (le.flags |= e), (i.memoizedState = vi(1 | t, n, o, r));
  }
  function pf(e, t) {
    return zo(8390656, 8, e, t);
  }
  function Pa(e, t) {
    return Ao(2048, 8, e, t);
  }
  function hf(e, t) {
    return Ao(4, 2, e, t);
  }
  function mf(e, t) {
    return Ao(4, 4, e, t);
  }
  function gf(e, t) {
    if (typeof t == "function")
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function vf(e, t, n) {
    return (
      (n = n != null ? n.concat([e]) : null), Ao(4, 4, gf.bind(null, t, e), n)
    );
  }
  function ka() {}
  function yf(e, t) {
    var n = rt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Sa(t, r[1])
      ? r[0]
      : ((n.memoizedState = [e, t]), e);
  }
  function wf(e, t) {
    var n = rt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Sa(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function Sf(e, t, n) {
    return _n & 21
      ? (pt(n, t) ||
          ((n = Wc()), (le.lanes |= n), (In |= n), (e.baseState = !0)),
        t)
      : (e.baseState && ((e.baseState = !1), ($e = !0)), (e.memoizedState = n));
  }
  function wg(e, t) {
    var n = X;
    (X = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = wa.transition;
    wa.transition = {};
    try {
      e(!1), t();
    } finally {
      (X = n), (wa.transition = r);
    }
  }
  function xf() {
    return rt().memoizedState;
  }
  function Sg(e, t, n) {
    var r = cn(e);
    if (
      ((n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Ef(e))
    )
      Tf(t, n);
    else if (((n = Wd(e, t, n, r)), n !== null)) {
      var i = Re();
      yt(n, e, r, i), Cf(n, t, r);
    }
  }
  function xg(e, t, n) {
    var r = cn(e),
      i = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (Ef(e)) Tf(t, i);
    else {
      var o = e.alternate;
      if (
        e.lanes === 0 &&
        (o === null || o.lanes === 0) &&
        ((o = t.lastRenderedReducer), o !== null)
      )
        try {
          var s = t.lastRenderedState,
            l = o(s, n);
          if (((i.hasEagerState = !0), (i.eagerState = l), pt(l, s))) {
            var a = t.interleaved;
            a === null
              ? ((i.next = i), da(t))
              : ((i.next = a.next), (a.next = i)),
              (t.interleaved = i);
            return;
          }
        } catch {
        } finally {
        }
      (n = Wd(e, t, i, r)),
        n !== null && ((i = Re()), yt(n, e, r, i), Cf(n, t, r));
    }
  }
  function Ef(e) {
    var t = e.alternate;
    return e === le || (t !== null && t === le);
  }
  function Tf(e, t) {
    hi = Ro = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t);
  }
  function Cf(e, t, n) {
    if (n & 4194240) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), kl(e, n);
    }
  }
  var $o = {
      readContext: nt,
      useCallback: Oe,
      useContext: Oe,
      useEffect: Oe,
      useImperativeHandle: Oe,
      useInsertionEffect: Oe,
      useLayoutEffect: Oe,
      useMemo: Oe,
      useReducer: Oe,
      useRef: Oe,
      useState: Oe,
      useDebugValue: Oe,
      useDeferredValue: Oe,
      useTransition: Oe,
      useMutableSource: Oe,
      useSyncExternalStore: Oe,
      useId: Oe,
      unstable_isNewReconciler: !1,
    },
    Eg = {
      readContext: nt,
      useCallback: function (e, t) {
        return (Ct().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: nt,
      useEffect: pf,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = n != null ? n.concat([e]) : null),
          zo(4194308, 4, gf.bind(null, t, e), n)
        );
      },
      useLayoutEffect: function (e, t) {
        return zo(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return zo(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = Ct();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, n) {
        var r = Ct();
        return (
          (t = n !== void 0 ? n(t) : t),
          (r.memoizedState = r.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (r.queue = e),
          (e = e.dispatch = Sg.bind(null, le, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Ct();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: df,
      useDebugValue: ka,
      useDeferredValue: function (e) {
        return (Ct().memoizedState = e);
      },
      useTransition: function () {
        var e = df(!1),
          t = e[0];
        return (e = wg.bind(null, e[1])), (Ct().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = le,
          i = Ct();
        if (re) {
          if (n === void 0) throw Error(I(407));
          n = n();
        } else {
          if (((n = t()), we === null)) throw Error(I(349));
          _n & 30 || sf(r, t, n);
        }
        i.memoizedState = n;
        var o = { value: n, getSnapshot: t };
        return (
          (i.queue = o),
          pf(af.bind(null, r, o, e), [e]),
          (r.flags |= 2048),
          vi(9, lf.bind(null, r, o, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = Ct(),
          t = we.identifierPrefix;
        if (re) {
          var n = $t,
            r = At;
          (n = (r & ~(1 << (32 - ft(r) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = mi++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":");
        } else (n = yg++), (t = ":" + t + "r" + n.toString(32) + ":");
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    Tg = {
      readContext: nt,
      useCallback: yf,
      useContext: nt,
      useEffect: Pa,
      useImperativeHandle: vf,
      useInsertionEffect: hf,
      useLayoutEffect: mf,
      useMemo: wf,
      useReducer: Ta,
      useRef: ff,
      useState: function () {
        return Ta(gi);
      },
      useDebugValue: ka,
      useDeferredValue: function (e) {
        var t = rt();
        return Sf(t, pe.memoizedState, e);
      },
      useTransition: function () {
        var e = Ta(gi)[0],
          t = rt().memoizedState;
        return [e, t];
      },
      useMutableSource: rf,
      useSyncExternalStore: of,
      useId: xf,
      unstable_isNewReconciler: !1,
    },
    Cg = {
      readContext: nt,
      useCallback: yf,
      useContext: nt,
      useEffect: Pa,
      useImperativeHandle: vf,
      useInsertionEffect: hf,
      useLayoutEffect: mf,
      useMemo: wf,
      useReducer: Ca,
      useRef: ff,
      useState: function () {
        return Ca(gi);
      },
      useDebugValue: ka,
      useDeferredValue: function (e) {
        var t = rt();
        return pe === null ? (t.memoizedState = e) : Sf(t, pe.memoizedState, e);
      },
      useTransition: function () {
        var e = Ca(gi)[0],
          t = rt().memoizedState;
        return [e, t];
      },
      useMutableSource: rf,
      useSyncExternalStore: of,
      useId: xf,
      unstable_isNewReconciler: !1,
    };
  function mr(e, t) {
    try {
      var n = "",
        r = t;
      do (n += Jm(r)), (r = r.return);
      while (r);
      var i = n;
    } catch (o) {
      i =
        `
Error generating stack: ` +
        o.message +
        `
` +
        o.stack;
    }
    return { value: e, source: t, stack: i, digest: null };
  }
  function Oa(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function _a(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var Pg = typeof WeakMap == "function" ? WeakMap : Map;
  function Pf(e, t, n) {
    (n = Dt(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
      (n.callback = function () {
        Uo || ((Uo = !0), (Ua = r)), _a(e, t);
      }),
      n
    );
  }
  function kf(e, t, n) {
    (n = Dt(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var i = t.value;
      (n.payload = function () {
        return r(i);
      }),
        (n.callback = function () {
          _a(e, t);
        });
    }
    var o = e.stateNode;
    return (
      o !== null &&
        typeof o.componentDidCatch == "function" &&
        (n.callback = function () {
          _a(e, t),
            typeof r != "function" &&
              (an === null ? (an = new Set([this])) : an.add(this));
          var s = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: s !== null ? s : "",
          });
        }),
      n
    );
  }
  function Of(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Pg();
      var i = new Set();
      r.set(t, i);
    } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
    i.has(n) || (i.add(n), (e = bg.bind(null, e, t, n)), t.then(e, e));
  }
  function _f(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function If(e, t, n, r, i) {
    return e.mode & 1
      ? ((e.flags |= 65536), (e.lanes = i), e)
      : (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null
                ? (n.tag = 17)
                : ((t = Dt(-1, 1)), (t.tag = 2), sn(n, t, 1))),
            (n.lanes |= 1)),
        e);
  }
  var kg = Nt.ReactCurrentOwner,
    $e = !1;
  function Ne(e, t, n, r) {
    t.child = e === null ? tf(t, null, n, r) : pr(t, e.child, n, r);
  }
  function Lf(e, t, n, r, i) {
    n = n.render;
    var o = t.ref;
    return (
      fr(t, i),
      (r = xa(e, t, n, r, o, i)),
      (n = Ea()),
      e !== null && !$e
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~i),
          bt(e, t, i))
        : (re && n && na(t), (t.flags |= 1), Ne(e, t, r, i), t.child)
    );
  }
  function Mf(e, t, n, r, i) {
    if (e === null) {
      var o = n.type;
      return typeof o == "function" &&
        !Xa(o) &&
        o.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = o), Nf(e, t, o, r, i))
        : ((e = Ko(n.type, null, r, t, t.mode, i)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((o = e.child), !(e.lanes & i))) {
      var s = o.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : ri), n(s, r) && e.ref === t.ref)
      )
        return bt(e, t, i);
    }
    return (
      (t.flags |= 1),
      (e = fn(o, r)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Nf(e, t, n, r, i) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (ri(o, r) && e.ref === t.ref)
        if ((($e = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
          e.flags & 131072 && ($e = !0);
        else return (t.lanes = e.lanes), bt(e, t, i);
    }
    return Ia(e, t, n, r, i);
  }
  function Rf(e, t, n) {
    var r = t.pendingProps,
      i = r.children,
      o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if (!(t.mode & 1))
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          Z(vr, Qe),
          (Qe |= n);
      else {
        if (!(n & 1073741824))
          return (
            (e = o !== null ? o.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            Z(vr, Qe),
            (Qe |= e),
            null
          );
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (r = o !== null ? o.baseLanes : n),
          Z(vr, Qe),
          (Qe |= r);
      }
    else
      o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
        Z(vr, Qe),
        (Qe |= r);
    return Ne(e, t, i, n), t.child;
  }
  function zf(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function Ia(e, t, n, r, i) {
    var o = Ae(n) ? Tn : ke.current;
    return (
      (o = lr(t, o)),
      fr(t, i),
      (n = xa(e, t, n, r, o, i)),
      (r = Ea()),
      e !== null && !$e
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~i),
          bt(e, t, i))
        : (re && r && na(t), (t.flags |= 1), Ne(e, t, n, i), t.child)
    );
  }
  function Af(e, t, n, r, i) {
    if (Ae(n)) {
      var o = !0;
      So(t);
    } else o = !1;
    if ((fr(t, i), t.stateNode === null))
      Do(e, t), qd(t, n, r), ha(t, n, r, i), (r = !0);
    else if (e === null) {
      var s = t.stateNode,
        l = t.memoizedProps;
      s.props = l;
      var a = s.context,
        u = n.contextType;
      typeof u == "object" && u !== null
        ? (u = nt(u))
        : ((u = Ae(n) ? Tn : ke.current), (u = lr(t, u)));
      var c = n.getDerivedStateFromProps,
        d =
          typeof c == "function" ||
          typeof s.getSnapshotBeforeUpdate == "function";
      d ||
        (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
          typeof s.componentWillReceiveProps != "function") ||
        ((l !== r || a !== u) && Jd(t, s, r, u)),
        (on = !1);
      var p = t.memoizedState;
      (s.state = p),
        _o(t, r, s, i),
        (a = t.memoizedState),
        l !== r || p !== a || ze.current || on
          ? (typeof c == "function" && (pa(t, n, c, r), (a = t.memoizedState)),
            (l = on || Xd(t, n, l, r, p, a, u))
              ? (d ||
                  (typeof s.UNSAFE_componentWillMount != "function" &&
                    typeof s.componentWillMount != "function") ||
                  (typeof s.componentWillMount == "function" &&
                    s.componentWillMount(),
                  typeof s.UNSAFE_componentWillMount == "function" &&
                    s.UNSAFE_componentWillMount()),
                typeof s.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof s.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = a)),
            (s.props = r),
            (s.state = a),
            (s.context = u),
            (r = l))
          : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
            (r = !1));
    } else {
      (s = t.stateNode),
        Gd(e, t),
        (l = t.memoizedProps),
        (u = t.type === t.elementType ? l : mt(t.type, l)),
        (s.props = u),
        (d = t.pendingProps),
        (p = s.context),
        (a = n.contextType),
        typeof a == "object" && a !== null
          ? (a = nt(a))
          : ((a = Ae(n) ? Tn : ke.current), (a = lr(t, a)));
      var h = n.getDerivedStateFromProps;
      (c =
        typeof h == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function") ||
        (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
          typeof s.componentWillReceiveProps != "function") ||
        ((l !== d || p !== a) && Jd(t, s, r, a)),
        (on = !1),
        (p = t.memoizedState),
        (s.state = p),
        _o(t, r, s, i);
      var g = t.memoizedState;
      l !== d || p !== g || ze.current || on
        ? (typeof h == "function" && (pa(t, n, h, r), (g = t.memoizedState)),
          (u = on || Xd(t, n, u, r, p, g, a) || !1)
            ? (c ||
                (typeof s.UNSAFE_componentWillUpdate != "function" &&
                  typeof s.componentWillUpdate != "function") ||
                (typeof s.componentWillUpdate == "function" &&
                  s.componentWillUpdate(r, g, a),
                typeof s.UNSAFE_componentWillUpdate == "function" &&
                  s.UNSAFE_componentWillUpdate(r, g, a)),
              typeof s.componentDidUpdate == "function" && (t.flags |= 4),
              typeof s.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof s.componentDidUpdate != "function" ||
                (l === e.memoizedProps && p === e.memoizedState) ||
                (t.flags |= 4),
              typeof s.getSnapshotBeforeUpdate != "function" ||
                (l === e.memoizedProps && p === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = g)),
          (s.props = r),
          (s.state = g),
          (s.context = a),
          (r = u))
        : (typeof s.componentDidUpdate != "function" ||
            (l === e.memoizedProps && p === e.memoizedState) ||
            (t.flags |= 4),
          typeof s.getSnapshotBeforeUpdate != "function" ||
            (l === e.memoizedProps && p === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return La(e, t, n, r, o, i);
  }
  function La(e, t, n, r, i, o) {
    zf(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s) return i && Dd(t, n, !1), bt(e, t, o);
    (r = t.stateNode), (kg.current = t);
    var l =
      s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && s
        ? ((t.child = pr(t, e.child, null, o)), (t.child = pr(t, null, l, o)))
        : Ne(e, t, l, o),
      (t.memoizedState = r.state),
      i && Dd(t, n, !0),
      t.child
    );
  }
  function $f(e) {
    var t = e.stateNode;
    t.pendingContext
      ? $d(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && $d(e, t.context, !1),
      ma(e, t.containerInfo);
  }
  function jf(e, t, n, r, i) {
    return cr(), sa(i), (t.flags |= 256), Ne(e, t, n, r), t.child;
  }
  var Ma = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Na(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Df(e, t, n) {
    var r = t.pendingProps,
      i = se.current,
      o = !1,
      s = (t.flags & 128) !== 0,
      l;
    if (
      ((l = s) ||
        (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
      l
        ? ((o = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (i |= 1),
      Z(se, i & 1),
      e === null)
    )
      return (
        oa(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? (t.mode & 1
              ? e.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824)
              : (t.lanes = 1),
            null)
          : ((s = r.children),
            (e = r.fallback),
            o
              ? ((r = t.mode),
                (o = t.child),
                (s = { mode: "hidden", children: s }),
                !(r & 1) && o !== null
                  ? ((o.childLanes = 0), (o.pendingProps = s))
                  : (o = Xo(s, r, 0, null)),
                (e = Rn(e, r, n, null)),
                (o.return = t),
                (e.return = t),
                (o.sibling = e),
                (t.child = o),
                (t.child.memoizedState = Na(n)),
                (t.memoizedState = Ma),
                e)
              : Ra(t, s))
      );
    if (((i = e.memoizedState), i !== null && ((l = i.dehydrated), l !== null)))
      return Og(e, t, s, r, l, i, n);
    if (o) {
      (o = r.fallback), (s = t.mode), (i = e.child), (l = i.sibling);
      var a = { mode: "hidden", children: r.children };
      return (
        !(s & 1) && t.child !== i
          ? ((r = t.child),
            (r.childLanes = 0),
            (r.pendingProps = a),
            (t.deletions = null))
          : ((r = fn(i, a)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
        l !== null ? (o = fn(l, o)) : ((o = Rn(o, s, n, null)), (o.flags |= 2)),
        (o.return = t),
        (r.return = t),
        (r.sibling = o),
        (t.child = r),
        (r = o),
        (o = t.child),
        (s = e.child.memoizedState),
        (s =
          s === null
            ? Na(n)
            : {
                baseLanes: s.baseLanes | n,
                cachePool: null,
                transitions: s.transitions,
              }),
        (o.memoizedState = s),
        (o.childLanes = e.childLanes & ~n),
        (t.memoizedState = Ma),
        r
      );
    }
    return (
      (o = e.child),
      (e = o.sibling),
      (r = fn(o, { mode: "visible", children: r.children })),
      !(t.mode & 1) && (r.lanes = n),
      (r.return = t),
      (r.sibling = null),
      e !== null &&
        ((n = t.deletions),
        n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
      (t.child = r),
      (t.memoizedState = null),
      r
    );
  }
  function Ra(e, t) {
    return (
      (t = Xo({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function jo(e, t, n, r) {
    return (
      r !== null && sa(r),
      pr(t, e.child, null, n),
      (e = Ra(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Og(e, t, n, r, i, o, s) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = Oa(Error(I(422)))), jo(e, t, s, r))
        : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((o = r.fallback),
          (i = t.mode),
          (r = Xo({ mode: "visible", children: r.children }, i, 0, null)),
          (o = Rn(o, i, s, null)),
          (o.flags |= 2),
          (r.return = t),
          (o.return = t),
          (r.sibling = o),
          (t.child = r),
          t.mode & 1 && pr(t, e.child, null, s),
          (t.child.memoizedState = Na(s)),
          (t.memoizedState = Ma),
          o);
    if (!(t.mode & 1)) return jo(e, t, s, null);
    if (i.data === "$!") {
      if (((r = i.nextSibling && i.nextSibling.dataset), r)) var l = r.dgst;
      return (
        (r = l), (o = Error(I(419))), (r = Oa(o, r, void 0)), jo(e, t, s, r)
      );
    }
    if (((l = (s & e.childLanes) !== 0), $e || l)) {
      if (((r = we), r !== null)) {
        switch (s & -s) {
          case 4:
            i = 2;
            break;
          case 16:
            i = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            i = 32;
            break;
          case 536870912:
            i = 268435456;
            break;
          default:
            i = 0;
        }
        (i = i & (r.suspendedLanes | s) ? 0 : i),
          i !== 0 &&
            i !== o.retryLane &&
            ((o.retryLane = i), jt(e, i), yt(r, e, i, -1));
      }
      return Ka(), (r = Oa(Error(I(421)))), jo(e, t, s, r);
    }
    return i.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = Fg.bind(null, e)),
        (i._reactRetry = t),
        null)
      : ((e = o.treeContext),
        (Ye = en(i.nextSibling)),
        (Ge = t),
        (re = !0),
        (ht = null),
        e !== null &&
          ((et[tt++] = At),
          (et[tt++] = $t),
          (et[tt++] = Cn),
          (At = e.id),
          ($t = e.overflow),
          (Cn = t)),
        (t = Ra(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function bf(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), ca(e.return, t, n);
  }
  function za(e, t, n, r, i) {
    var o = e.memoizedState;
    o === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: i,
        })
      : ((o.isBackwards = t),
        (o.rendering = null),
        (o.renderingStartTime = 0),
        (o.last = r),
        (o.tail = n),
        (o.tailMode = i));
  }
  function Ff(e, t, n) {
    var r = t.pendingProps,
      i = r.revealOrder,
      o = r.tail;
    if ((Ne(e, t, r.children, n), (r = se.current), r & 2))
      (r = (r & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && e.flags & 128)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && bf(e, n, t);
          else if (e.tag === 19) bf(e, n, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      r &= 1;
    }
    if ((Z(se, r), !(t.mode & 1))) t.memoizedState = null;
    else
      switch (i) {
        case "forwards":
          for (n = t.child, i = null; n !== null; )
            (e = n.alternate),
              e !== null && Mo(e) === null && (i = n),
              (n = n.sibling);
          (n = i),
            n === null
              ? ((i = t.child), (t.child = null))
              : ((i = n.sibling), (n.sibling = null)),
            za(t, !1, i, n, o);
          break;
        case "backwards":
          for (n = null, i = t.child, t.child = null; i !== null; ) {
            if (((e = i.alternate), e !== null && Mo(e) === null)) {
              t.child = i;
              break;
            }
            (e = i.sibling), (i.sibling = n), (n = i), (i = e);
          }
          za(t, !0, n, null, o);
          break;
        case "together":
          za(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function Do(e, t) {
    !(t.mode & 1) &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function bt(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (In |= t.lanes),
      !(n & t.childLanes))
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(I(153));
    if (t.child !== null) {
      for (
        e = t.child, n = fn(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (n = n.sibling = fn(e, e.pendingProps)),
          (n.return = t);
      n.sibling = null;
    }
    return t.child;
  }
  function _g(e, t, n) {
    switch (t.tag) {
      case 3:
        $f(t), cr();
        break;
      case 5:
        nf(t);
        break;
      case 1:
        Ae(t.type) && So(t);
        break;
      case 4:
        ma(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          i = t.memoizedProps.value;
        Z(Po, r._currentValue), (r._currentValue = i);
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (Z(se, se.current & 1), (t.flags |= 128), null)
            : n & t.child.childLanes
            ? Df(e, t, n)
            : (Z(se, se.current & 1),
              (e = bt(e, t, n)),
              e !== null ? e.sibling : null);
        Z(se, se.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
          if (r) return Ff(e, t, n);
          t.flags |= 128;
        }
        if (
          ((i = t.memoizedState),
          i !== null &&
            ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
          Z(se, se.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), Rf(e, t, n);
    }
    return bt(e, t, n);
  }
  var Bf, Aa, Vf, Uf;
  (Bf = function (e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        (n.child.return = n), (n = n.child);
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
  }),
    (Aa = function () {}),
    (Vf = function (e, t, n, r) {
      var i = e.memoizedProps;
      if (i !== r) {
        (e = t.stateNode), On(Tt.current);
        var o = null;
        switch (n) {
          case "input":
            (i = cl(e, i)), (r = cl(e, r)), (o = []);
            break;
          case "select":
            (i = oe({}, i, { value: void 0 })),
              (r = oe({}, r, { value: void 0 })),
              (o = []);
            break;
          case "textarea":
            (i = pl(e, i)), (r = pl(e, r)), (o = []);
            break;
          default:
            typeof i.onClick != "function" &&
              typeof r.onClick == "function" &&
              (e.onclick = vo);
        }
        ml(n, r);
        var s;
        n = null;
        for (u in i)
          if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
            if (u === "style") {
              var l = i[u];
              for (s in l) l.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
            } else
              u !== "dangerouslySetInnerHTML" &&
                u !== "children" &&
                u !== "suppressContentEditableWarning" &&
                u !== "suppressHydrationWarning" &&
                u !== "autoFocus" &&
                ($r.hasOwnProperty(u)
                  ? o || (o = [])
                  : (o = o || []).push(u, null));
        for (u in r) {
          var a = r[u];
          if (
            ((l = i != null ? i[u] : void 0),
            r.hasOwnProperty(u) && a !== l && (a != null || l != null))
          )
            if (u === "style")
              if (l) {
                for (s in l)
                  !l.hasOwnProperty(s) ||
                    (a && a.hasOwnProperty(s)) ||
                    (n || (n = {}), (n[s] = ""));
                for (s in a)
                  a.hasOwnProperty(s) &&
                    l[s] !== a[s] &&
                    (n || (n = {}), (n[s] = a[s]));
              } else n || (o || (o = []), o.push(u, n)), (n = a);
            else
              u === "dangerouslySetInnerHTML"
                ? ((a = a ? a.__html : void 0),
                  (l = l ? l.__html : void 0),
                  a != null && l !== a && (o = o || []).push(u, a))
                : u === "children"
                ? (typeof a != "string" && typeof a != "number") ||
                  (o = o || []).push(u, "" + a)
                : u !== "suppressContentEditableWarning" &&
                  u !== "suppressHydrationWarning" &&
                  ($r.hasOwnProperty(u)
                    ? (a != null && u === "onScroll" && ee("scroll", e),
                      o || l === a || (o = []))
                    : (o = o || []).push(u, a));
        }
        n && (o = o || []).push("style", n);
        var u = o;
        (t.updateQueue = u) && (t.flags |= 4);
      }
    }),
    (Uf = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    });
  function yi(e, t) {
    if (!re)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), (t = t.sibling);
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var r = null; n !== null; )
            n.alternate !== null && (r = n), (n = n.sibling);
          r === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function _e(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      r = 0;
    if (t)
      for (var i = e.child; i !== null; )
        (n |= i.lanes | i.childLanes),
          (r |= i.subtreeFlags & 14680064),
          (r |= i.flags & 14680064),
          (i.return = e),
          (i = i.sibling);
    else
      for (i = e.child; i !== null; )
        (n |= i.lanes | i.childLanes),
          (r |= i.subtreeFlags),
          (r |= i.flags),
          (i.return = e),
          (i = i.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = n), t;
  }
  function Ig(e, t, n) {
    var r = t.pendingProps;
    switch ((ra(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return _e(t), null;
      case 1:
        return Ae(t.type) && wo(), _e(t), null;
      case 3:
        return (
          (r = t.stateNode),
          hr(),
          te(ze),
          te(ke),
          ya(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (Co(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                ((t.flags |= 1024), ht !== null && (Ga(ht), (ht = null)))),
          Aa(e, t),
          _e(t),
          null
        );
      case 5:
        ga(t);
        var i = On(pi.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          Vf(e, t, n, r, i),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(I(166));
            return _e(t), null;
          }
          if (((e = On(Tt.current)), Co(t))) {
            (r = t.stateNode), (n = t.type);
            var o = t.memoizedProps;
            switch (((r[Et] = t), (r[ai] = o), (e = (t.mode & 1) !== 0), n)) {
              case "dialog":
                ee("cancel", r), ee("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ee("load", r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < oi.length; i++) ee(oi[i], r);
                break;
              case "source":
                ee("error", r);
                break;
              case "img":
              case "image":
              case "link":
                ee("error", r), ee("load", r);
                break;
              case "details":
                ee("toggle", r);
                break;
              case "input":
                xc(r, o), ee("invalid", r);
                break;
              case "select":
                (r._wrapperState = { wasMultiple: !!o.multiple }),
                  ee("invalid", r);
                break;
              case "textarea":
                Cc(r, o), ee("invalid", r);
            }
            ml(n, o), (i = null);
            for (var s in o)
              if (o.hasOwnProperty(s)) {
                var l = o[s];
                s === "children"
                  ? typeof l == "string"
                    ? r.textContent !== l &&
                      (o.suppressHydrationWarning !== !0 &&
                        go(r.textContent, l, e),
                      (i = ["children", l]))
                    : typeof l == "number" &&
                      r.textContent !== "" + l &&
                      (o.suppressHydrationWarning !== !0 &&
                        go(r.textContent, l, e),
                      (i = ["children", "" + l]))
                  : $r.hasOwnProperty(s) &&
                    l != null &&
                    s === "onScroll" &&
                    ee("scroll", r);
              }
            switch (n) {
              case "input":
                Gi(r), Tc(r, o, !0);
                break;
              case "textarea":
                Gi(r), kc(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof o.onClick == "function" && (r.onclick = vo);
            }
            (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
          } else {
            (s = i.nodeType === 9 ? i : i.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = Oc(n)),
              e === "http://www.w3.org/1999/xhtml"
                ? n === "script"
                  ? ((e = s.createElement("div")),
                    (e.innerHTML = "<script></script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == "string"
                  ? (e = s.createElement(n, { is: r.is }))
                  : ((e = s.createElement(n)),
                    n === "select" &&
                      ((s = e),
                      r.multiple
                        ? (s.multiple = !0)
                        : r.size && (s.size = r.size)))
                : (e = s.createElementNS(e, n)),
              (e[Et] = t),
              (e[ai] = r),
              Bf(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((s = gl(n, r)), n)) {
                case "dialog":
                  ee("cancel", e), ee("close", e), (i = r);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  ee("load", e), (i = r);
                  break;
                case "video":
                case "audio":
                  for (i = 0; i < oi.length; i++) ee(oi[i], e);
                  i = r;
                  break;
                case "source":
                  ee("error", e), (i = r);
                  break;
                case "img":
                case "image":
                case "link":
                  ee("error", e), ee("load", e), (i = r);
                  break;
                case "details":
                  ee("toggle", e), (i = r);
                  break;
                case "input":
                  xc(e, r), (i = cl(e, r)), ee("invalid", e);
                  break;
                case "option":
                  i = r;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!r.multiple }),
                    (i = oe({}, r, { value: void 0 })),
                    ee("invalid", e);
                  break;
                case "textarea":
                  Cc(e, r), (i = pl(e, r)), ee("invalid", e);
                  break;
                default:
                  i = r;
              }
              ml(n, i), (l = i);
              for (o in l)
                if (l.hasOwnProperty(o)) {
                  var a = l[o];
                  o === "style"
                    ? Lc(e, a)
                    : o === "dangerouslySetInnerHTML"
                    ? ((a = a ? a.__html : void 0), a != null && _c(e, a))
                    : o === "children"
                    ? typeof a == "string"
                      ? (n !== "textarea" || a !== "") && Fr(e, a)
                      : typeof a == "number" && Fr(e, "" + a)
                    : o !== "suppressContentEditableWarning" &&
                      o !== "suppressHydrationWarning" &&
                      o !== "autoFocus" &&
                      ($r.hasOwnProperty(o)
                        ? a != null && o === "onScroll" && ee("scroll", e)
                        : a != null && Zs(e, o, a, s));
                }
              switch (n) {
                case "input":
                  Gi(e), Tc(e, r, !1);
                  break;
                case "textarea":
                  Gi(e), kc(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + Yt(r.value));
                  break;
                case "select":
                  (e.multiple = !!r.multiple),
                    (o = r.value),
                    o != null
                      ? Kn(e, !!r.multiple, o, !1)
                      : r.defaultValue != null &&
                        Kn(e, !!r.multiple, r.defaultValue, !0);
                  break;
                default:
                  typeof i.onClick == "function" && (e.onclick = vo);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return _e(t), null;
      case 6:
        if (e && t.stateNode != null) Uf(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(I(166));
          if (((n = On(pi.current)), On(Tt.current), Co(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[Et] = t),
              (o = r.nodeValue !== n) && ((e = Ge), e !== null))
            )
              switch (e.tag) {
                case 3:
                  go(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    go(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            o && (t.flags |= 4);
          } else
            (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[Et] = t),
              (t.stateNode = r);
        }
        return _e(t), null;
      case 13:
        if (
          (te(se),
          (r = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (re && Ye !== null && t.mode & 1 && !(t.flags & 128))
            Hd(), cr(), (t.flags |= 98560), (o = !1);
          else if (((o = Co(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!o) throw Error(I(318));
              if (
                ((o = t.memoizedState),
                (o = o !== null ? o.dehydrated : null),
                !o)
              )
                throw Error(I(317));
              o[Et] = t;
            } else
              cr(),
                !(t.flags & 128) && (t.memoizedState = null),
                (t.flags |= 4);
            _e(t), (o = !1);
          } else ht !== null && (Ga(ht), (ht = null)), (o = !0);
          if (!o) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              t.mode & 1 &&
                (e === null || se.current & 1 ? he === 0 && (he = 3) : Ka())),
            t.updateQueue !== null && (t.flags |= 4),
            _e(t),
            null);
      case 4:
        return (
          hr(),
          Aa(e, t),
          e === null && si(t.stateNode.containerInfo),
          _e(t),
          null
        );
      case 10:
        return ua(t.type._context), _e(t), null;
      case 17:
        return Ae(t.type) && wo(), _e(t), null;
      case 19:
        if ((te(se), (o = t.memoizedState), o === null)) return _e(t), null;
        if (((r = (t.flags & 128) !== 0), (s = o.rendering), s === null))
          if (r) yi(o, !1);
          else {
            if (he !== 0 || (e !== null && e.flags & 128))
              for (e = t.child; e !== null; ) {
                if (((s = Mo(e)), s !== null)) {
                  for (
                    t.flags |= 128,
                      yi(o, !1),
                      r = s.updateQueue,
                      r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = n,
                      n = t.child;
                    n !== null;

                  )
                    (o = n),
                      (e = r),
                      (o.flags &= 14680066),
                      (s = o.alternate),
                      s === null
                        ? ((o.childLanes = 0),
                          (o.lanes = e),
                          (o.child = null),
                          (o.subtreeFlags = 0),
                          (o.memoizedProps = null),
                          (o.memoizedState = null),
                          (o.updateQueue = null),
                          (o.dependencies = null),
                          (o.stateNode = null))
                        : ((o.childLanes = s.childLanes),
                          (o.lanes = s.lanes),
                          (o.child = s.child),
                          (o.subtreeFlags = 0),
                          (o.deletions = null),
                          (o.memoizedProps = s.memoizedProps),
                          (o.memoizedState = s.memoizedState),
                          (o.updateQueue = s.updateQueue),
                          (o.type = s.type),
                          (e = s.dependencies),
                          (o.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (n = n.sibling);
                  return Z(se, (se.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            o.tail !== null &&
              ue() > yr &&
              ((t.flags |= 128), (r = !0), yi(o, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = Mo(s)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                yi(o, !0),
                o.tail === null &&
                  o.tailMode === "hidden" &&
                  !s.alternate &&
                  !re)
              )
                return _e(t), null;
            } else
              2 * ue() - o.renderingStartTime > yr &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), yi(o, !1), (t.lanes = 4194304));
          o.isBackwards
            ? ((s.sibling = t.child), (t.child = s))
            : ((n = o.last),
              n !== null ? (n.sibling = s) : (t.child = s),
              (o.last = s));
        }
        return o.tail !== null
          ? ((t = o.tail),
            (o.rendering = t),
            (o.tail = t.sibling),
            (o.renderingStartTime = ue()),
            (t.sibling = null),
            (n = se.current),
            Z(se, r ? (n & 1) | 2 : n & 1),
            t)
          : (_e(t), null);
      case 22:
      case 23:
        return (
          Qa(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && t.mode & 1
            ? Qe & 1073741824 &&
              (_e(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : _e(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(I(156, t.tag));
  }
  function Lg(e, t) {
    switch ((ra(t), t.tag)) {
      case 1:
        return (
          Ae(t.type) && wo(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          hr(),
          te(ze),
          te(ke),
          ya(),
          (e = t.flags),
          e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return ga(t), null;
      case 13:
        if (
          (te(se), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(I(340));
          cr();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return te(se), null;
      case 4:
        return hr(), null;
      case 10:
        return ua(t.type._context), null;
      case 22:
      case 23:
        return Qa(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var bo = !1,
    Ie = !1,
    Mg = typeof WeakSet == "function" ? WeakSet : Set,
    z = null;
  function gr(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          ae(e, t, r);
        }
      else n.current = null;
  }
  function $a(e, t, n) {
    try {
      n();
    } catch (r) {
      ae(e, t, r);
    }
  }
  var Hf = !1;
  function Ng(e, t) {
    if (((Ql = io), (e = Sd()), Fl(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var i = r.anchorOffset,
              o = r.focusNode;
            r = r.focusOffset;
            try {
              n.nodeType, o.nodeType;
            } catch {
              n = null;
              break e;
            }
            var s = 0,
              l = -1,
              a = -1,
              u = 0,
              c = 0,
              d = e,
              p = null;
            t: for (;;) {
              for (
                var h;
                d !== n || (i !== 0 && d.nodeType !== 3) || (l = s + i),
                  d !== o || (r !== 0 && d.nodeType !== 3) || (a = s + r),
                  d.nodeType === 3 && (s += d.nodeValue.length),
                  (h = d.firstChild) !== null;

              )
                (p = d), (d = h);
              for (;;) {
                if (d === e) break t;
                if (
                  (p === n && ++u === i && (l = s),
                  p === o && ++c === r && (a = s),
                  (h = d.nextSibling) !== null)
                )
                  break;
                (d = p), (p = d.parentNode);
              }
              d = h;
            }
            n = l === -1 || a === -1 ? null : { start: l, end: a };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      Kl = { focusedElem: e, selectionRange: n }, io = !1, z = t;
      z !== null;

    )
      if (((t = z), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = t), (z = e);
      else
        for (; z !== null; ) {
          t = z;
          try {
            var g = t.alternate;
            if (t.flags & 1024)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (g !== null) {
                    var y = g.memoizedProps,
                      T = g.memoizedState,
                      f = t.stateNode,
                      m = f.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? y : mt(t.type, y),
                        T
                      );
                    f.__reactInternalSnapshotBeforeUpdate = m;
                  }
                  break;
                case 3:
                  var v = t.stateNode.containerInfo;
                  v.nodeType === 1
                    ? (v.textContent = "")
                    : v.nodeType === 9 &&
                      v.documentElement &&
                      v.removeChild(v.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(I(163));
              }
          } catch (w) {
            ae(t, t.return, w);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (z = e);
            break;
          }
          z = t.return;
        }
    return (g = Hf), (Hf = !1), g;
  }
  function wi(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var i = (r = r.next);
      do {
        if ((i.tag & e) === e) {
          var o = i.destroy;
          (i.destroy = void 0), o !== void 0 && $a(t, n, o);
        }
        i = i.next;
      } while (i !== r);
    }
  }
  function Fo(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var n = (t = t.next);
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function ja(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : (t.current = e);
    }
  }
  function Wf(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), Wf(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[Et],
          delete t[ai],
          delete t[Zl],
          delete t[hg],
          delete t[mg])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function Gf(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Yf(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Gf(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Da(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8
              ? ((t = n.parentNode), t.insertBefore(e, n))
              : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = vo));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (Da(e, t, n), e = e.sibling; e !== null; )
        Da(e, t, n), (e = e.sibling);
  }
  function ba(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
      for (ba(e, t, n), e = e.sibling; e !== null; )
        ba(e, t, n), (e = e.sibling);
  }
  var Te = null,
    gt = !1;
  function ln(e, t, n) {
    for (n = n.child; n !== null; ) Qf(e, t, n), (n = n.sibling);
  }
  function Qf(e, t, n) {
    if (xt && typeof xt.onCommitFiberUnmount == "function")
      try {
        xt.onCommitFiberUnmount(Ji, n);
      } catch {}
    switch (n.tag) {
      case 5:
        Ie || gr(n, t);
      case 6:
        var r = Te,
          i = gt;
        (Te = null),
          ln(e, t, n),
          (Te = r),
          (gt = i),
          Te !== null &&
            (gt
              ? ((e = Te),
                (n = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : Te.removeChild(n.stateNode));
        break;
      case 18:
        Te !== null &&
          (gt
            ? ((e = Te),
              (n = n.stateNode),
              e.nodeType === 8
                ? Jl(e.parentNode, n)
                : e.nodeType === 1 && Jl(e, n),
              qr(e))
            : Jl(Te, n.stateNode));
        break;
      case 4:
        (r = Te),
          (i = gt),
          (Te = n.stateNode.containerInfo),
          (gt = !0),
          ln(e, t, n),
          (Te = r),
          (gt = i);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !Ie &&
          ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
        ) {
          i = r = r.next;
          do {
            var o = i,
              s = o.destroy;
            (o = o.tag),
              s !== void 0 && (o & 2 || o & 4) && $a(n, t, s),
              (i = i.next);
          } while (i !== r);
        }
        ln(e, t, n);
        break;
      case 1:
        if (
          !Ie &&
          (gr(n, t),
          (r = n.stateNode),
          typeof r.componentWillUnmount == "function")
        )
          try {
            (r.props = n.memoizedProps),
              (r.state = n.memoizedState),
              r.componentWillUnmount();
          } catch (l) {
            ae(n, t, l);
          }
        ln(e, t, n);
        break;
      case 21:
        ln(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((Ie = (r = Ie) || n.memoizedState !== null), ln(e, t, n), (Ie = r))
          : ln(e, t, n);
        break;
      default:
        ln(e, t, n);
    }
  }
  function Kf(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Mg()),
        t.forEach(function (r) {
          var i = Bg.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(i, i));
        });
    }
  }
  function vt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        try {
          var o = e,
            s = t,
            l = s;
          e: for (; l !== null; ) {
            switch (l.tag) {
              case 5:
                (Te = l.stateNode), (gt = !1);
                break e;
              case 3:
                (Te = l.stateNode.containerInfo), (gt = !0);
                break e;
              case 4:
                (Te = l.stateNode.containerInfo), (gt = !0);
                break e;
            }
            l = l.return;
          }
          if (Te === null) throw Error(I(160));
          Qf(o, s, i), (Te = null), (gt = !1);
          var a = i.alternate;
          a !== null && (a.return = null), (i.return = null);
        } catch (u) {
          ae(i, t, u);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) Xf(t, e), (t = t.sibling);
  }
  function Xf(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((vt(t, e), Pt(e), r & 4)) {
          try {
            wi(3, e, e.return), Fo(3, e);
          } catch (y) {
            ae(e, e.return, y);
          }
          try {
            wi(5, e, e.return);
          } catch (y) {
            ae(e, e.return, y);
          }
        }
        break;
      case 1:
        vt(t, e), Pt(e), r & 512 && n !== null && gr(n, n.return);
        break;
      case 5:
        if (
          (vt(t, e),
          Pt(e),
          r & 512 && n !== null && gr(n, n.return),
          e.flags & 32)
        ) {
          var i = e.stateNode;
          try {
            Fr(i, "");
          } catch (y) {
            ae(e, e.return, y);
          }
        }
        if (r & 4 && ((i = e.stateNode), i != null)) {
          var o = e.memoizedProps,
            s = n !== null ? n.memoizedProps : o,
            l = e.type,
            a = e.updateQueue;
          if (((e.updateQueue = null), a !== null))
            try {
              l === "input" && o.type === "radio" && o.name != null && Ec(i, o),
                gl(l, s);
              var u = gl(l, o);
              for (s = 0; s < a.length; s += 2) {
                var c = a[s],
                  d = a[s + 1];
                c === "style"
                  ? Lc(i, d)
                  : c === "dangerouslySetInnerHTML"
                  ? _c(i, d)
                  : c === "children"
                  ? Fr(i, d)
                  : Zs(i, c, d, u);
              }
              switch (l) {
                case "input":
                  dl(i, o);
                  break;
                case "textarea":
                  Pc(i, o);
                  break;
                case "select":
                  var p = i._wrapperState.wasMultiple;
                  i._wrapperState.wasMultiple = !!o.multiple;
                  var h = o.value;
                  h != null
                    ? Kn(i, !!o.multiple, h, !1)
                    : p !== !!o.multiple &&
                      (o.defaultValue != null
                        ? Kn(i, !!o.multiple, o.defaultValue, !0)
                        : Kn(i, !!o.multiple, o.multiple ? [] : "", !1));
              }
              i[ai] = o;
            } catch (y) {
              ae(e, e.return, y);
            }
        }
        break;
      case 6:
        if ((vt(t, e), Pt(e), r & 4)) {
          if (e.stateNode === null) throw Error(I(162));
          (i = e.stateNode), (o = e.memoizedProps);
          try {
            i.nodeValue = o;
          } catch (y) {
            ae(e, e.return, y);
          }
        }
        break;
      case 3:
        if (
          (vt(t, e), Pt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            qr(t.containerInfo);
          } catch (y) {
            ae(e, e.return, y);
          }
        break;
      case 4:
        vt(t, e), Pt(e);
        break;
      case 13:
        vt(t, e),
          Pt(e),
          (i = e.child),
          i.flags & 8192 &&
            ((o = i.memoizedState !== null),
            (i.stateNode.isHidden = o),
            !o ||
              (i.alternate !== null && i.alternate.memoizedState !== null) ||
              (Va = ue())),
          r & 4 && Kf(e);
        break;
      case 22:
        if (
          ((c = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((Ie = (u = Ie) || c), vt(t, e), (Ie = u)) : vt(t, e),
          Pt(e),
          r & 8192)
        ) {
          if (
            ((u = e.memoizedState !== null),
            (e.stateNode.isHidden = u) && !c && e.mode & 1)
          )
            for (z = e, c = e.child; c !== null; ) {
              for (d = z = c; z !== null; ) {
                switch (((p = z), (h = p.child), p.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    wi(4, p, p.return);
                    break;
                  case 1:
                    gr(p, p.return);
                    var g = p.stateNode;
                    if (typeof g.componentWillUnmount == "function") {
                      (r = p), (n = p.return);
                      try {
                        (t = r),
                          (g.props = t.memoizedProps),
                          (g.state = t.memoizedState),
                          g.componentWillUnmount();
                      } catch (y) {
                        ae(r, n, y);
                      }
                    }
                    break;
                  case 5:
                    gr(p, p.return);
                    break;
                  case 22:
                    if (p.memoizedState !== null) {
                      Zf(d);
                      continue;
                    }
                }
                h !== null ? ((h.return = p), (z = h)) : Zf(d);
              }
              c = c.sibling;
            }
          e: for (c = null, d = e; ; ) {
            if (d.tag === 5) {
              if (c === null) {
                c = d;
                try {
                  (i = d.stateNode),
                    u
                      ? ((o = i.style),
                        typeof o.setProperty == "function"
                          ? o.setProperty("display", "none", "important")
                          : (o.display = "none"))
                      : ((l = d.stateNode),
                        (a = d.memoizedProps.style),
                        (s =
                          a != null && a.hasOwnProperty("display")
                            ? a.display
                            : null),
                        (l.style.display = Ic("display", s)));
                } catch (y) {
                  ae(e, e.return, y);
                }
              }
            } else if (d.tag === 6) {
              if (c === null)
                try {
                  d.stateNode.nodeValue = u ? "" : d.memoizedProps;
                } catch (y) {
                  ae(e, e.return, y);
                }
            } else if (
              ((d.tag !== 22 && d.tag !== 23) ||
                d.memoizedState === null ||
                d === e) &&
              d.child !== null
            ) {
              (d.child.return = d), (d = d.child);
              continue;
            }
            if (d === e) break e;
            for (; d.sibling === null; ) {
              if (d.return === null || d.return === e) break e;
              c === d && (c = null), (d = d.return);
            }
            c === d && (c = null),
              (d.sibling.return = d.return),
              (d = d.sibling);
          }
        }
        break;
      case 19:
        vt(t, e), Pt(e), r & 4 && Kf(e);
        break;
      case 21:
        break;
      default:
        vt(t, e), Pt(e);
    }
  }
  function Pt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (Gf(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(I(160));
        }
        switch (r.tag) {
          case 5:
            var i = r.stateNode;
            r.flags & 32 && (Fr(i, ""), (r.flags &= -33));
            var o = Yf(e);
            ba(e, o, i);
            break;
          case 3:
          case 4:
            var s = r.stateNode.containerInfo,
              l = Yf(e);
            Da(e, l, s);
            break;
          default:
            throw Error(I(161));
        }
      } catch (a) {
        ae(e, e.return, a);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Rg(e, t, n) {
    (z = e), qf(e);
  }
  function qf(e, t, n) {
    for (var r = (e.mode & 1) !== 0; z !== null; ) {
      var i = z,
        o = i.child;
      if (i.tag === 22 && r) {
        var s = i.memoizedState !== null || bo;
        if (!s) {
          var l = i.alternate,
            a = (l !== null && l.memoizedState !== null) || Ie;
          l = bo;
          var u = Ie;
          if (((bo = s), (Ie = a) && !u))
            for (z = i; z !== null; )
              (s = z),
                (a = s.child),
                s.tag === 22 && s.memoizedState !== null
                  ? ep(i)
                  : a !== null
                  ? ((a.return = s), (z = a))
                  : ep(i);
          for (; o !== null; ) (z = o), qf(o), (o = o.sibling);
          (z = i), (bo = l), (Ie = u);
        }
        Jf(e);
      } else
        i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (z = o)) : Jf(e);
    }
  }
  function Jf(e) {
    for (; z !== null; ) {
      var t = z;
      if (t.flags & 8772) {
        var n = t.alternate;
        try {
          if (t.flags & 8772)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                Ie || Fo(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !Ie)
                  if (n === null) r.componentDidMount();
                  else {
                    var i =
                      t.elementType === t.type
                        ? n.memoizedProps
                        : mt(t.type, n.memoizedProps);
                    r.componentDidUpdate(
                      i,
                      n.memoizedState,
                      r.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var o = t.updateQueue;
                o !== null && Qd(t, o, r);
                break;
              case 3:
                var s = t.updateQueue;
                if (s !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  Qd(t, s, n);
                }
                break;
              case 5:
                var l = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = l;
                  var a = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      a.autoFocus && n.focus();
                      break;
                    case "img":
                      a.src && (n.src = a.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var u = t.alternate;
                  if (u !== null) {
                    var c = u.memoizedState;
                    if (c !== null) {
                      var d = c.dehydrated;
                      d !== null && qr(d);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(I(163));
            }
          Ie || (t.flags & 512 && ja(t));
        } catch (p) {
          ae(t, t.return, p);
        }
      }
      if (t === e) {
        z = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        (n.return = t.return), (z = n);
        break;
      }
      z = t.return;
    }
  }
  function Zf(e) {
    for (; z !== null; ) {
      var t = z;
      if (t === e) {
        z = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        (n.return = t.return), (z = n);
        break;
      }
      z = t.return;
    }
  }
  function ep(e) {
    for (; z !== null; ) {
      var t = z;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Fo(4, t);
            } catch (a) {
              ae(t, n, a);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var i = t.return;
              try {
                r.componentDidMount();
              } catch (a) {
                ae(t, i, a);
              }
            }
            var o = t.return;
            try {
              ja(t);
            } catch (a) {
              ae(t, o, a);
            }
            break;
          case 5:
            var s = t.return;
            try {
              ja(t);
            } catch (a) {
              ae(t, s, a);
            }
        }
      } catch (a) {
        ae(t, t.return, a);
      }
      if (t === e) {
        z = null;
        break;
      }
      var l = t.sibling;
      if (l !== null) {
        (l.return = t.return), (z = l);
        break;
      }
      z = t.return;
    }
  }
  var zg = Math.ceil,
    Bo = Nt.ReactCurrentDispatcher,
    Fa = Nt.ReactCurrentOwner,
    it = Nt.ReactCurrentBatchConfig,
    W = 0,
    we = null,
    ce = null,
    Ce = 0,
    Qe = 0,
    vr = tn(0),
    he = 0,
    Si = null,
    In = 0,
    Vo = 0,
    Ba = 0,
    xi = null,
    je = null,
    Va = 0,
    yr = 1 / 0,
    Ft = null,
    Uo = !1,
    Ua = null,
    an = null,
    Ho = !1,
    un = null,
    Wo = 0,
    Ei = 0,
    Ha = null,
    Go = -1,
    Yo = 0;
  function Re() {
    return W & 6 ? ue() : Go !== -1 ? Go : (Go = ue());
  }
  function cn(e) {
    return e.mode & 1
      ? W & 2 && Ce !== 0
        ? Ce & -Ce
        : vg.transition !== null
        ? (Yo === 0 && (Yo = Wc()), Yo)
        : ((e = X),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : ed(e.type))),
          e)
      : 1;
  }
  function yt(e, t, n, r) {
    if (50 < Ei) throw ((Ei = 0), (Ha = null), Error(I(185)));
    Gr(e, n, r),
      (!(W & 2) || e !== we) &&
        (e === we && (!(W & 2) && (Vo |= n), he === 4 && dn(e, Ce)),
        De(e, r),
        n === 1 && W === 0 && !(t.mode & 1) && ((yr = ue() + 500), xo && rn()));
  }
  function De(e, t) {
    var n = e.callbackNode;
    v0(e, t);
    var r = to(e, e === we ? Ce : 0);
    if (r === 0)
      n !== null && Vc(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && Vc(n), t === 1))
        e.tag === 0 ? gg(np.bind(null, e)) : bd(np.bind(null, e)),
          fg(function () {
            !(W & 6) && rn();
          }),
          (n = null);
      else {
        switch (Gc(r)) {
          case 1:
            n = Tl;
            break;
          case 4:
            n = Uc;
            break;
          case 16:
            n = qi;
            break;
          case 536870912:
            n = Hc;
            break;
          default:
            n = qi;
        }
        n = cp(n, tp.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = n);
    }
  }
  function tp(e, t) {
    if (((Go = -1), (Yo = 0), W & 6)) throw Error(I(327));
    var n = e.callbackNode;
    if (wr() && e.callbackNode !== n) return null;
    var r = to(e, e === we ? Ce : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = Qo(e, r);
    else {
      t = r;
      var i = W;
      W |= 2;
      var o = ip();
      (we !== e || Ce !== t) && ((Ft = null), (yr = ue() + 500), Mn(e, t));
      do
        try {
          jg();
          break;
        } catch (l) {
          rp(e, l);
        }
      while (1);
      aa(),
        (Bo.current = o),
        (W = i),
        ce !== null ? (t = 0) : ((we = null), (Ce = 0), (t = he));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((i = Cl(e)), i !== 0 && ((r = i), (t = Wa(e, i)))),
        t === 1)
      )
        throw ((n = Si), Mn(e, 0), dn(e, r), De(e, ue()), n);
      if (t === 6) dn(e, r);
      else {
        if (
          ((i = e.current.alternate),
          !(r & 30) &&
            !Ag(i) &&
            ((t = Qo(e, r)),
            t === 2 && ((o = Cl(e)), o !== 0 && ((r = o), (t = Wa(e, o)))),
            t === 1))
        )
          throw ((n = Si), Mn(e, 0), dn(e, r), De(e, ue()), n);
        switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(I(345));
          case 2:
            Nn(e, je, Ft);
            break;
          case 3:
            if (
              (dn(e, r),
              (r & 130023424) === r && ((t = Va + 500 - ue()), 10 < t))
            ) {
              if (to(e, 0) !== 0) break;
              if (((i = e.suspendedLanes), (i & r) !== r)) {
                Re(), (e.pingedLanes |= e.suspendedLanes & i);
                break;
              }
              e.timeoutHandle = ql(Nn.bind(null, e, je, Ft), t);
              break;
            }
            Nn(e, je, Ft);
            break;
          case 4:
            if ((dn(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, i = -1; 0 < r; ) {
              var s = 31 - ft(r);
              (o = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~o);
            }
            if (
              ((r = i),
              (r = ue() - r),
              (r =
                (120 > r
                  ? 120
                  : 480 > r
                  ? 480
                  : 1080 > r
                  ? 1080
                  : 1920 > r
                  ? 1920
                  : 3e3 > r
                  ? 3e3
                  : 4320 > r
                  ? 4320
                  : 1960 * zg(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = ql(Nn.bind(null, e, je, Ft), r);
              break;
            }
            Nn(e, je, Ft);
            break;
          case 5:
            Nn(e, je, Ft);
            break;
          default:
            throw Error(I(329));
        }
      }
    }
    return De(e, ue()), e.callbackNode === n ? tp.bind(null, e) : null;
  }
  function Wa(e, t) {
    var n = xi;
    return (
      e.current.memoizedState.isDehydrated && (Mn(e, t).flags |= 256),
      (e = Qo(e, t)),
      e !== 2 && ((t = je), (je = n), t !== null && Ga(t)),
      e
    );
  }
  function Ga(e) {
    je === null ? (je = e) : je.push.apply(je, e);
  }
  function Ag(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var i = n[r],
              o = i.getSnapshot;
            i = i.value;
            try {
              if (!pt(o(), i)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        (n.return = t), (t = n);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function dn(e, t) {
    for (
      t &= ~Ba,
        t &= ~Vo,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var n = 31 - ft(t),
        r = 1 << n;
      (e[n] = -1), (t &= ~r);
    }
  }
  function np(e) {
    if (W & 6) throw Error(I(327));
    wr();
    var t = to(e, 0);
    if (!(t & 1)) return De(e, ue()), null;
    var n = Qo(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Cl(e);
      r !== 0 && ((t = r), (n = Wa(e, r)));
    }
    if (n === 1) throw ((n = Si), Mn(e, 0), dn(e, t), De(e, ue()), n);
    if (n === 6) throw Error(I(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      Nn(e, je, Ft),
      De(e, ue()),
      null
    );
  }
  function Ya(e, t) {
    var n = W;
    W |= 1;
    try {
      return e(t);
    } finally {
      (W = n), W === 0 && ((yr = ue() + 500), xo && rn());
    }
  }
  function Ln(e) {
    un !== null && un.tag === 0 && !(W & 6) && wr();
    var t = W;
    W |= 1;
    var n = it.transition,
      r = X;
    try {
      if (((it.transition = null), (X = 1), e)) return e();
    } finally {
      (X = r), (it.transition = n), (W = t), !(W & 6) && rn();
    }
  }
  function Qa() {
    (Qe = vr.current), te(vr);
  }
  function Mn(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), dg(n)), ce !== null))
      for (n = ce.return; n !== null; ) {
        var r = n;
        switch ((ra(r), r.tag)) {
          case 1:
            (r = r.type.childContextTypes), r != null && wo();
            break;
          case 3:
            hr(), te(ze), te(ke), ya();
            break;
          case 5:
            ga(r);
            break;
          case 4:
            hr();
            break;
          case 13:
            te(se);
            break;
          case 19:
            te(se);
            break;
          case 10:
            ua(r.type._context);
            break;
          case 22:
          case 23:
            Qa();
        }
        n = n.return;
      }
    if (
      ((we = e),
      (ce = e = fn(e.current, null)),
      (Ce = Qe = t),
      (he = 0),
      (Si = null),
      (Ba = Vo = In = 0),
      (je = xi = null),
      kn !== null)
    ) {
      for (t = 0; t < kn.length; t++)
        if (((n = kn[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var i = r.next,
            o = n.pending;
          if (o !== null) {
            var s = o.next;
            (o.next = i), (r.next = s);
          }
          n.pending = r;
        }
      kn = null;
    }
    return e;
  }
  function rp(e, t) {
    do {
      var n = ce;
      try {
        if ((aa(), (No.current = $o), Ro)) {
          for (var r = le.memoizedState; r !== null; ) {
            var i = r.queue;
            i !== null && (i.pending = null), (r = r.next);
          }
          Ro = !1;
        }
        if (
          ((_n = 0),
          (ye = pe = le = null),
          (hi = !1),
          (mi = 0),
          (Fa.current = null),
          n === null || n.return === null)
        ) {
          (he = 1), (Si = t), (ce = null);
          break;
        }
        e: {
          var o = e,
            s = n.return,
            l = n,
            a = t;
          if (
            ((t = Ce),
            (l.flags |= 32768),
            a !== null && typeof a == "object" && typeof a.then == "function")
          ) {
            var u = a,
              c = l,
              d = c.tag;
            if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
              var p = c.alternate;
              p
                ? ((c.updateQueue = p.updateQueue),
                  (c.memoizedState = p.memoizedState),
                  (c.lanes = p.lanes))
                : ((c.updateQueue = null), (c.memoizedState = null));
            }
            var h = _f(s);
            if (h !== null) {
              (h.flags &= -257),
                If(h, s, l, o, t),
                h.mode & 1 && Of(o, u, t),
                (t = h),
                (a = u);
              var g = t.updateQueue;
              if (g === null) {
                var y = new Set();
                y.add(a), (t.updateQueue = y);
              } else g.add(a);
              break e;
            } else {
              if (!(t & 1)) {
                Of(o, u, t), Ka();
                break e;
              }
              a = Error(I(426));
            }
          } else if (re && l.mode & 1) {
            var T = _f(s);
            if (T !== null) {
              !(T.flags & 65536) && (T.flags |= 256),
                If(T, s, l, o, t),
                sa(mr(a, l));
              break e;
            }
          }
          (o = a = mr(a, l)),
            he !== 4 && (he = 2),
            xi === null ? (xi = [o]) : xi.push(o),
            (o = s);
          do {
            switch (o.tag) {
              case 3:
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var f = Pf(o, a, t);
                Yd(o, f);
                break e;
              case 1:
                l = a;
                var m = o.type,
                  v = o.stateNode;
                if (
                  !(o.flags & 128) &&
                  (typeof m.getDerivedStateFromError == "function" ||
                    (v !== null &&
                      typeof v.componentDidCatch == "function" &&
                      (an === null || !an.has(v))))
                ) {
                  (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                  var w = kf(o, l, t);
                  Yd(o, w);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        sp(n);
      } catch (x) {
        (t = x), ce === n && n !== null && (ce = n = n.return);
        continue;
      }
      break;
    } while (1);
  }
  function ip() {
    var e = Bo.current;
    return (Bo.current = $o), e === null ? $o : e;
  }
  function Ka() {
    (he === 0 || he === 3 || he === 2) && (he = 4),
      we === null || (!(In & 268435455) && !(Vo & 268435455)) || dn(we, Ce);
  }
  function Qo(e, t) {
    var n = W;
    W |= 2;
    var r = ip();
    (we !== e || Ce !== t) && ((Ft = null), Mn(e, t));
    do
      try {
        $g();
        break;
      } catch (i) {
        rp(e, i);
      }
    while (1);
    if ((aa(), (W = n), (Bo.current = r), ce !== null)) throw Error(I(261));
    return (we = null), (Ce = 0), he;
  }
  function $g() {
    for (; ce !== null; ) op(ce);
  }
  function jg() {
    for (; ce !== null && !a0(); ) op(ce);
  }
  function op(e) {
    var t = up(e.alternate, e, Qe);
    (e.memoizedProps = e.pendingProps),
      t === null ? sp(e) : (ce = t),
      (Fa.current = null);
  }
  function sp(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), t.flags & 32768)) {
        if (((n = Lg(n, t)), n !== null)) {
          (n.flags &= 32767), (ce = n);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (he = 6), (ce = null);
          return;
        }
      } else if (((n = Ig(n, t, Qe)), n !== null)) {
        ce = n;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        ce = t;
        return;
      }
      ce = t = e;
    } while (t !== null);
    he === 0 && (he = 5);
  }
  function Nn(e, t, n) {
    var r = X,
      i = it.transition;
    try {
      (it.transition = null), (X = 1), Dg(e, t, n, r);
    } finally {
      (it.transition = i), (X = r);
    }
    return null;
  }
  function Dg(e, t, n, r) {
    do wr();
    while (un !== null);
    if (W & 6) throw Error(I(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
      throw Error(I(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var o = n.lanes | n.childLanes;
    if (
      (y0(e, o),
      e === we && ((ce = we = null), (Ce = 0)),
      (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
        Ho ||
        ((Ho = !0),
        cp(qi, function () {
          return wr(), null;
        })),
      (o = (n.flags & 15990) !== 0),
      n.subtreeFlags & 15990 || o)
    ) {
      (o = it.transition), (it.transition = null);
      var s = X;
      X = 1;
      var l = W;
      (W |= 4),
        (Fa.current = null),
        Ng(e, n),
        Xf(n, e),
        ig(Kl),
        (io = !!Ql),
        (Kl = Ql = null),
        (e.current = n),
        Rg(n),
        u0(),
        (W = l),
        (X = s),
        (it.transition = o);
    } else e.current = n;
    if (
      (Ho && ((Ho = !1), (un = e), (Wo = i)),
      (o = e.pendingLanes),
      o === 0 && (an = null),
      f0(n.stateNode),
      De(e, ue()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
    if (Uo) throw ((Uo = !1), (e = Ua), (Ua = null), e);
    return (
      Wo & 1 && e.tag !== 0 && wr(),
      (o = e.pendingLanes),
      o & 1 ? (e === Ha ? Ei++ : ((Ei = 0), (Ha = e))) : (Ei = 0),
      rn(),
      null
    );
  }
  function wr() {
    if (un !== null) {
      var e = Gc(Wo),
        t = it.transition,
        n = X;
      try {
        if (((it.transition = null), (X = 16 > e ? 16 : e), un === null))
          var r = !1;
        else {
          if (((e = un), (un = null), (Wo = 0), W & 6)) throw Error(I(331));
          var i = W;
          for (W |= 4, z = e.current; z !== null; ) {
            var o = z,
              s = o.child;
            if (z.flags & 16) {
              var l = o.deletions;
              if (l !== null) {
                for (var a = 0; a < l.length; a++) {
                  var u = l[a];
                  for (z = u; z !== null; ) {
                    var c = z;
                    switch (c.tag) {
                      case 0:
                      case 11:
                      case 15:
                        wi(8, c, o);
                    }
                    var d = c.child;
                    if (d !== null) (d.return = c), (z = d);
                    else
                      for (; z !== null; ) {
                        c = z;
                        var p = c.sibling,
                          h = c.return;
                        if ((Wf(c), c === u)) {
                          z = null;
                          break;
                        }
                        if (p !== null) {
                          (p.return = h), (z = p);
                          break;
                        }
                        z = h;
                      }
                  }
                }
                var g = o.alternate;
                if (g !== null) {
                  var y = g.child;
                  if (y !== null) {
                    g.child = null;
                    do {
                      var T = y.sibling;
                      (y.sibling = null), (y = T);
                    } while (y !== null);
                  }
                }
                z = o;
              }
            }
            if (o.subtreeFlags & 2064 && s !== null) (s.return = o), (z = s);
            else
              e: for (; z !== null; ) {
                if (((o = z), o.flags & 2048))
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      wi(9, o, o.return);
                  }
                var f = o.sibling;
                if (f !== null) {
                  (f.return = o.return), (z = f);
                  break e;
                }
                z = o.return;
              }
          }
          var m = e.current;
          for (z = m; z !== null; ) {
            s = z;
            var v = s.child;
            if (s.subtreeFlags & 2064 && v !== null) (v.return = s), (z = v);
            else
              e: for (s = m; z !== null; ) {
                if (((l = z), l.flags & 2048))
                  try {
                    switch (l.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Fo(9, l);
                    }
                  } catch (x) {
                    ae(l, l.return, x);
                  }
                if (l === s) {
                  z = null;
                  break e;
                }
                var w = l.sibling;
                if (w !== null) {
                  (w.return = l.return), (z = w);
                  break e;
                }
                z = l.return;
              }
          }
          if (
            ((W = i), rn(), xt && typeof xt.onPostCommitFiberRoot == "function")
          )
            try {
              xt.onPostCommitFiberRoot(Ji, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        (X = n), (it.transition = t);
      }
    }
    return !1;
  }
  function lp(e, t, n) {
    (t = mr(n, t)),
      (t = Pf(e, t, 1)),
      (e = sn(e, t, 1)),
      (t = Re()),
      e !== null && (Gr(e, 1, t), De(e, t));
  }
  function ae(e, t, n) {
    if (e.tag === 3) lp(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          lp(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" &&
              (an === null || !an.has(r)))
          ) {
            (e = mr(n, e)),
              (e = kf(t, e, 1)),
              (t = sn(t, e, 1)),
              (e = Re()),
              t !== null && (Gr(t, 1, e), De(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function bg(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
      (t = Re()),
      (e.pingedLanes |= e.suspendedLanes & n),
      we === e &&
        (Ce & n) === n &&
        (he === 4 || (he === 3 && (Ce & 130023424) === Ce && 500 > ue() - Va)
          ? Mn(e, 0)
          : (Ba |= n)),
      De(e, t);
  }
  function ap(e, t) {
    t === 0 &&
      (e.mode & 1
        ? ((t = eo), (eo <<= 1), !(eo & 130023424) && (eo = 4194304))
        : (t = 1));
    var n = Re();
    (e = jt(e, t)), e !== null && (Gr(e, t, n), De(e, n));
  }
  function Fg(e) {
    var t = e.memoizedState,
      n = 0;
    t !== null && (n = t.retryLane), ap(e, n);
  }
  function Bg(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          i = e.memoizedState;
        i !== null && (n = i.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(I(314));
    }
    r !== null && r.delete(t), ap(e, n);
  }
  var up;
  up = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || ze.current) $e = !0;
      else {
        if (!(e.lanes & n) && !(t.flags & 128)) return ($e = !1), _g(e, t, n);
        $e = !!(e.flags & 131072);
      }
    else ($e = !1), re && t.flags & 1048576 && Fd(t, To, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        Do(e, t), (e = t.pendingProps);
        var i = lr(t, ke.current);
        fr(t, n), (i = xa(null, t, r, e, i, n));
        var o = Ea();
        return (
          (t.flags |= 1),
          typeof i == "object" &&
          i !== null &&
          typeof i.render == "function" &&
          i.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              Ae(r) ? ((o = !0), So(t)) : (o = !1),
              (t.memoizedState =
                i.state !== null && i.state !== void 0 ? i.state : null),
              fa(t),
              (i.updater = Io),
              (t.stateNode = i),
              (i._reactInternals = t),
              ha(t, r, e, n),
              (t = La(null, t, r, !0, o, n)))
            : ((t.tag = 0), re && o && na(t), Ne(null, t, i, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (Do(e, t),
            (e = t.pendingProps),
            (i = r._init),
            (r = i(r._payload)),
            (t.type = r),
            (i = t.tag = Ug(r)),
            (e = mt(r, e)),
            i)
          ) {
            case 0:
              t = Ia(null, t, r, e, n);
              break e;
            case 1:
              t = Af(null, t, r, e, n);
              break e;
            case 11:
              t = Lf(null, t, r, e, n);
              break e;
            case 14:
              t = Mf(null, t, r, mt(r.type, e), n);
              break e;
          }
          throw Error(I(306, r, ""));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (i = t.pendingProps),
          (i = t.elementType === r ? i : mt(r, i)),
          Ia(e, t, r, i, n)
        );
      case 1:
        return (
          (r = t.type),
          (i = t.pendingProps),
          (i = t.elementType === r ? i : mt(r, i)),
          Af(e, t, r, i, n)
        );
      case 3:
        e: {
          if (($f(t), e === null)) throw Error(I(387));
          (r = t.pendingProps),
            (o = t.memoizedState),
            (i = o.element),
            Gd(e, t),
            _o(t, r, null, n);
          var s = t.memoizedState;
          if (((r = s.element), o.isDehydrated))
            if (
              ((o = {
                element: r,
                isDehydrated: !1,
                cache: s.cache,
                pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                transitions: s.transitions,
              }),
              (t.updateQueue.baseState = o),
              (t.memoizedState = o),
              t.flags & 256)
            ) {
              (i = mr(Error(I(423)), t)), (t = jf(e, t, r, n, i));
              break e;
            } else if (r !== i) {
              (i = mr(Error(I(424)), t)), (t = jf(e, t, r, n, i));
              break e;
            } else
              for (
                Ye = en(t.stateNode.containerInfo.firstChild),
                  Ge = t,
                  re = !0,
                  ht = null,
                  n = tf(t, null, r, n),
                  t.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
          else {
            if ((cr(), r === i)) {
              t = bt(e, t, n);
              break e;
            }
            Ne(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          nf(t),
          e === null && oa(t),
          (r = t.type),
          (i = t.pendingProps),
          (o = e !== null ? e.memoizedProps : null),
          (s = i.children),
          Xl(r, i) ? (s = null) : o !== null && Xl(r, o) && (t.flags |= 32),
          zf(e, t),
          Ne(e, t, s, n),
          t.child
        );
      case 6:
        return e === null && oa(t), null;
      case 13:
        return Df(e, t, n);
      case 4:
        return (
          ma(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = pr(t, null, r, n)) : Ne(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (i = t.pendingProps),
          (i = t.elementType === r ? i : mt(r, i)),
          Lf(e, t, r, i, n)
        );
      case 7:
        return Ne(e, t, t.pendingProps, n), t.child;
      case 8:
        return Ne(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Ne(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (i = t.pendingProps),
            (o = t.memoizedProps),
            (s = i.value),
            Z(Po, r._currentValue),
            (r._currentValue = s),
            o !== null)
          )
            if (pt(o.value, s)) {
              if (o.children === i.children && !ze.current) {
                t = bt(e, t, n);
                break e;
              }
            } else
              for (o = t.child, o !== null && (o.return = t); o !== null; ) {
                var l = o.dependencies;
                if (l !== null) {
                  s = o.child;
                  for (var a = l.firstContext; a !== null; ) {
                    if (a.context === r) {
                      if (o.tag === 1) {
                        (a = Dt(-1, n & -n)), (a.tag = 2);
                        var u = o.updateQueue;
                        if (u !== null) {
                          u = u.shared;
                          var c = u.pending;
                          c === null
                            ? (a.next = a)
                            : ((a.next = c.next), (c.next = a)),
                            (u.pending = a);
                        }
                      }
                      (o.lanes |= n),
                        (a = o.alternate),
                        a !== null && (a.lanes |= n),
                        ca(o.return, n, t),
                        (l.lanes |= n);
                      break;
                    }
                    a = a.next;
                  }
                } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
                else if (o.tag === 18) {
                  if (((s = o.return), s === null)) throw Error(I(341));
                  (s.lanes |= n),
                    (l = s.alternate),
                    l !== null && (l.lanes |= n),
                    ca(s, n, t),
                    (s = o.sibling);
                } else s = o.child;
                if (s !== null) s.return = o;
                else
                  for (s = o; s !== null; ) {
                    if (s === t) {
                      s = null;
                      break;
                    }
                    if (((o = s.sibling), o !== null)) {
                      (o.return = s.return), (s = o);
                      break;
                    }
                    s = s.return;
                  }
                o = s;
              }
          Ne(e, t, i.children, n), (t = t.child);
        }
        return t;
      case 9:
        return (
          (i = t.type),
          (r = t.pendingProps.children),
          fr(t, n),
          (i = nt(i)),
          (r = r(i)),
          (t.flags |= 1),
          Ne(e, t, r, n),
          t.child
        );
      case 14:
        return (
          (r = t.type),
          (i = mt(r, t.pendingProps)),
          (i = mt(r.type, i)),
          Mf(e, t, r, i, n)
        );
      case 15:
        return Nf(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (i = t.pendingProps),
          (i = t.elementType === r ? i : mt(r, i)),
          Do(e, t),
          (t.tag = 1),
          Ae(r) ? ((e = !0), So(t)) : (e = !1),
          fr(t, n),
          qd(t, r, i),
          ha(t, r, i, n),
          La(null, t, r, !0, e, n)
        );
      case 19:
        return Ff(e, t, n);
      case 22:
        return Rf(e, t, n);
    }
    throw Error(I(156, t.tag));
  };
  function cp(e, t) {
    return Bc(e, t);
  }
  function Vg(e, t, n, r) {
    (this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function ot(e, t, n, r) {
    return new Vg(e, t, n, r);
  }
  function Xa(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function Ug(e) {
    if (typeof e == "function") return Xa(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === nl)) return 11;
      if (e === ol) return 14;
    }
    return 2;
  }
  function fn(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = ot(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 14680064),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
    );
  }
  function Ko(e, t, n, r, i, o) {
    var s = 2;
    if (((r = e), typeof e == "function")) Xa(e) && (s = 1);
    else if (typeof e == "string") s = 5;
    else
      e: switch (e) {
        case Qn:
          return Rn(n.children, i, o, t);
        case el:
          (s = 8), (i |= 8);
          break;
        case tl:
          return (
            (e = ot(12, n, t, i | 2)), (e.elementType = tl), (e.lanes = o), e
          );
        case rl:
          return (e = ot(13, n, t, i)), (e.elementType = rl), (e.lanes = o), e;
        case il:
          return (e = ot(19, n, t, i)), (e.elementType = il), (e.lanes = o), e;
        case vc:
          return Xo(n, i, o, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case mc:
                s = 10;
                break e;
              case gc:
                s = 9;
                break e;
              case nl:
                s = 11;
                break e;
              case ol:
                s = 14;
                break e;
              case Gt:
                (s = 16), (r = null);
                break e;
            }
          throw Error(I(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = ot(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
    );
  }
  function Rn(e, t, n, r) {
    return (e = ot(7, e, r, t)), (e.lanes = n), e;
  }
  function Xo(e, t, n, r) {
    return (
      (e = ot(22, e, r, t)),
      (e.elementType = vc),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function qa(e, t, n) {
    return (e = ot(6, e, null, t)), (e.lanes = n), e;
  }
  function Ja(e, t, n) {
    return (
      (t = ot(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function Hg(e, t, n, r, i) {
    (this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = Pl(0)),
      (this.expirationTimes = Pl(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Pl(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = i),
      (this.mutableSourceEagerHydrationData = null);
  }
  function Za(e, t, n, r, i, o, s, l, a) {
    return (
      (e = new Hg(e, t, n, l, a)),
      t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
      (o = ot(3, null, null, t)),
      (e.current = o),
      (o.stateNode = e),
      (o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      fa(o),
      e
    );
  }
  function Wg(e, t, n) {
    var r =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: Yn,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function dp(e) {
    if (!e) return nn;
    e = e._reactInternals;
    e: {
      if (xn(e) !== e || e.tag !== 1) throw Error(I(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Ae(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(I(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (Ae(n)) return jd(e, n, t);
    }
    return t;
  }
  function fp(e, t, n, r, i, o, s, l, a) {
    return (
      (e = Za(n, r, !0, e, i, o, s, l, a)),
      (e.context = dp(null)),
      (n = e.current),
      (r = Re()),
      (i = cn(n)),
      (o = Dt(r, i)),
      (o.callback = t ?? null),
      sn(n, o, i),
      (e.current.lanes = i),
      Gr(e, i, r),
      De(e, r),
      e
    );
  }
  function qo(e, t, n, r) {
    var i = t.current,
      o = Re(),
      s = cn(i);
    return (
      (n = dp(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = Dt(o, s)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = sn(i, t, s)),
      e !== null && (yt(e, i, s, o), Oo(e, i, s)),
      s
    );
  }
  function Jo(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function pp(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function eu(e, t) {
    pp(e, t), (e = e.alternate) && pp(e, t);
  }
  function Gg() {
    return null;
  }
  var hp =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function tu(e) {
    this._internalRoot = e;
  }
  (Zo.prototype.render = tu.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(I(409));
      qo(e, t, null, null);
    }),
    (Zo.prototype.unmount = tu.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          Ln(function () {
            qo(null, e, null, null);
          }),
            (t[Rt] = null);
        }
      });
  function Zo(e) {
    this._internalRoot = e;
  }
  Zo.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Kc();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < qt.length && t !== 0 && t < qt[n].priority; n++);
      qt.splice(n, 0, e), n === 0 && Jc(e);
    }
  };
  function nu(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function es(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function mp() {}
  function Yg(e, t, n, r, i) {
    if (i) {
      if (typeof r == "function") {
        var o = r;
        r = function () {
          var u = Jo(s);
          o.call(u);
        };
      }
      var s = fp(t, r, e, 0, null, !1, !1, "", mp);
      return (
        (e._reactRootContainer = s),
        (e[Rt] = s.current),
        si(e.nodeType === 8 ? e.parentNode : e),
        Ln(),
        s
      );
    }
    for (; (i = e.lastChild); ) e.removeChild(i);
    if (typeof r == "function") {
      var l = r;
      r = function () {
        var u = Jo(a);
        l.call(u);
      };
    }
    var a = Za(e, 0, !1, null, null, !1, !1, "", mp);
    return (
      (e._reactRootContainer = a),
      (e[Rt] = a.current),
      si(e.nodeType === 8 ? e.parentNode : e),
      Ln(function () {
        qo(t, a, n, r);
      }),
      a
    );
  }
  function ts(e, t, n, r, i) {
    var o = n._reactRootContainer;
    if (o) {
      var s = o;
      if (typeof i == "function") {
        var l = i;
        i = function () {
          var a = Jo(s);
          l.call(a);
        };
      }
      qo(t, s, e, i);
    } else s = Yg(n, t, e, i, r);
    return Jo(s);
  }
  (Yc = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Wr(t.pendingLanes);
          n !== 0 &&
            (kl(t, n | 1), De(t, ue()), !(W & 6) && ((yr = ue() + 500), rn()));
        }
        break;
      case 13:
        Ln(function () {
          var r = jt(e, 1);
          if (r !== null) {
            var i = Re();
            yt(r, e, 1, i);
          }
        }),
          eu(e, 1);
    }
  }),
    (Ol = function (e) {
      if (e.tag === 13) {
        var t = jt(e, 134217728);
        if (t !== null) {
          var n = Re();
          yt(t, e, 134217728, n);
        }
        eu(e, 134217728);
      }
    }),
    (Qc = function (e) {
      if (e.tag === 13) {
        var t = cn(e),
          n = jt(e, t);
        if (n !== null) {
          var r = Re();
          yt(n, e, t, r);
        }
        eu(e, t);
      }
    }),
    (Kc = function () {
      return X;
    }),
    (Xc = function (e, t) {
      var n = X;
      try {
        return (X = e), t();
      } finally {
        X = n;
      }
    }),
    (wl = function (e, t, n) {
      switch (t) {
        case "input":
          if ((dl(e, n), (t = n.name), n.type === "radio" && t != null)) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var i = yo(r);
                if (!i) throw Error(I(90));
                Sc(r), dl(r, i);
              }
            }
          }
          break;
        case "textarea":
          Pc(e, n);
          break;
        case "select":
          (t = n.value), t != null && Kn(e, !!n.multiple, t, !1);
      }
    }),
    (zc = Ya),
    (Ac = Ln);
  var Qg = { usingClientEntryPoint: !1, Events: [ui, or, yo, Nc, Rc, Ya] },
    Ti = {
      findFiberByHostInstance: En,
      bundleType: 0,
      version: "18.2.0",
      rendererPackageName: "react-dom",
    },
    Kg = {
      bundleType: Ti.bundleType,
      version: Ti.version,
      rendererPackageName: Ti.rendererPackageName,
      rendererConfig: Ti.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: Nt.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = bc(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: Ti.findFiberByHostInstance || Gg,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ns = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ns.isDisabled && ns.supportsFiber)
      try {
        (Ji = ns.inject(Kg)), (xt = ns);
      } catch {}
  }
  (Ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Qg),
    (Ue.createPortal = function (e, t) {
      var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!nu(t)) throw Error(I(200));
      return Wg(e, t, null, n);
    }),
    (Ue.createRoot = function (e, t) {
      if (!nu(e)) throw Error(I(299));
      var n = !1,
        r = "",
        i = hp;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
        (t = Za(e, 1, !1, null, null, n, !1, r, i)),
        (e[Rt] = t.current),
        si(e.nodeType === 8 ? e.parentNode : e),
        new tu(t)
      );
    }),
    (Ue.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(I(188))
          : ((e = Object.keys(e).join(",")), Error(I(268, e)));
      return (e = bc(t)), (e = e === null ? null : e.stateNode), e;
    }),
    (Ue.flushSync = function (e) {
      return Ln(e);
    }),
    (Ue.hydrate = function (e, t, n) {
      if (!es(t)) throw Error(I(200));
      return ts(null, e, t, !0, n);
    }),
    (Ue.hydrateRoot = function (e, t, n) {
      if (!nu(e)) throw Error(I(405));
      var r = (n != null && n.hydratedSources) || null,
        i = !1,
        o = "",
        s = hp;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (i = !0),
          n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
        (t = fp(t, null, e, 1, n ?? null, i, !1, o, s)),
        (e[Rt] = t.current),
        si(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          (n = r[e]),
            (i = n._getVersion),
            (i = i(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, i])
              : t.mutableSourceEagerHydrationData.push(n, i);
      return new Zo(t);
    }),
    (Ue.render = function (e, t, n) {
      if (!es(t)) throw Error(I(200));
      return ts(null, e, t, !1, n);
    }),
    (Ue.unmountComponentAtNode = function (e) {
      if (!es(e)) throw Error(I(40));
      return e._reactRootContainer
        ? (Ln(function () {
            ts(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[Rt] = null);
            });
          }),
          !0)
        : !1;
    }),
    (Ue.unstable_batchedUpdates = Ya),
    (Ue.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!es(n)) throw Error(I(200));
      if (e == null || e._reactInternals === void 0) throw Error(I(38));
      return ts(e, t, n, !1, r);
    }),
    (Ue.version = "18.2.0-next-9e3b772b8-20220608");
  function gp() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(gp);
      } catch (e) {
        console.error(e);
      }
  }
  gp(), (ac.exports = Ue);
  var Xg = ac.exports,
    vp = Xg;
  (Ze.createRoot = vp.createRoot), (Ze.hydrateRoot = vp.hydrateRoot);
  var qg = {
    cm: !0,
    mm: !0,
    in: !0,
    px: !0,
    pt: !0,
    pc: !0,
    em: !0,
    ex: !0,
    ch: !0,
    rem: !0,
    vw: !0,
    vh: !0,
    vmin: !0,
    vmax: !0,
    "%": !0,
  };
  function Jg(e) {
    if (typeof e == "number") return { value: e, unit: "px" };
    var t,
      n = (e.match(/^[0-9.]*/) || "").toString();
    n.includes(".") ? (t = parseFloat(n)) : (t = parseInt(n, 10));
    var r = (e.match(/[^0-9]*$/) || "").toString();
    return qg[r]
      ? { value: t, unit: r }
      : (console.warn(
          "React Spinners: "
            .concat(e, " is not a valid css value. Defaulting to ")
            .concat(t, "px.")
        ),
        { value: t, unit: "px" });
  }
  function rs(e) {
    var t = Jg(e);
    return "".concat(t.value).concat(t.unit);
  }
  var yp = function (e, t, n) {
      var r = "react-spinners-".concat(e, "-").concat(n);
      if (typeof window > "u" || !window.document) return r;
      var i = document.createElement("style");
      document.head.appendChild(i);
      var o = i.sheet,
        s = `
    @keyframes `
          .concat(
            r,
            ` {
      `
          )
          .concat(
            t,
            `
    }
  `
          );
      return o && o.insertRule(s, 0), r;
    },
    is =
      (globalThis && globalThis.__assign) ||
      function () {
        return (
          (is =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++) {
                t = arguments[n];
                for (var i in t)
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              }
              return e;
            }),
          is.apply(this, arguments)
        );
      },
    Zg =
      (globalThis && globalThis.__rest) ||
      function (e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            t.indexOf(r) < 0 &&
            (n[r] = e[r]);
        if (e != null && typeof Object.getOwnPropertySymbols == "function")
          for (
            var i = 0, r = Object.getOwnPropertySymbols(e);
            i < r.length;
            i++
          )
            t.indexOf(r[i]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
              (n[r[i]] = e[r[i]]);
        return n;
      },
    wp = [
      yp(
        "PuffLoader",
        "0% {transform: scale(0)} 100% {transform: scale(1.0)}",
        "puff-1"
      ),
      yp("PuffLoader", "0% {opacity: 1} 100% {opacity: 0}", "puff-2"),
    ];
  function ev(e) {
    var t = e.loading,
      n = t === void 0 ? !0 : t,
      r = e.color,
      i = r === void 0 ? "#000000" : r,
      o = e.speedMultiplier,
      s = o === void 0 ? 1 : o,
      l = e.cssOverride,
      a = l === void 0 ? {} : l,
      u = e.size,
      c = u === void 0 ? 60 : u,
      d = Zg(e, ["loading", "color", "speedMultiplier", "cssOverride", "size"]),
      p = is(
        {
          display: "inherit",
          position: "relative",
          width: rs(c),
          height: rs(c),
        },
        a
      ),
      h = function (g) {
        return {
          position: "absolute",
          height: rs(c),
          width: rs(c),
          border: "thick solid ".concat(i),
          borderRadius: "50%",
          opacity: "1",
          top: "0",
          left: "0",
          animationFillMode: "both",
          animation: "".concat(wp[0], ", ").concat(wp[1]),
          animationDuration: "".concat(2 / s, "s"),
          animationIterationCount: "infinite",
          animationTimingFunction:
            "cubic-bezier(0.165, 0.84, 0.44, 1), cubic-bezier(0.3, 0.61, 0.355, 1)",
          animationDelay: g === 1 ? "-1s" : "0s",
        };
      };
    return n
      ? M.createElement(
          "span",
          is({ style: p }, d),
          M.createElement("span", { style: h(1) }),
          M.createElement("span", { style: h(2) })
        )
      : null;
  }
  const tv = "Left",
    nv = "Right",
    rv = "Up",
    iv = "Down",
    Sr = {
      delta: 10,
      preventScrollOnSwipe: !1,
      rotationAngle: 0,
      trackMouse: !1,
      trackTouch: !0,
      swipeDuration: 1 / 0,
      touchEventOptions: { passive: !0 },
    },
    ru = { first: !0, initial: [0, 0], start: 0, swiping: !1, xy: [0, 0] },
    Sp = "mousemove",
    xp = "mouseup",
    ov = "touchend",
    sv = "touchmove",
    lv = "touchstart";
  function av(e, t, n, r) {
    return e > t ? (n > 0 ? nv : tv) : r > 0 ? iv : rv;
  }
  function Ep(e, t) {
    if (t === 0) return e;
    const n = (Math.PI / 180) * t,
      r = e[0] * Math.cos(n) + e[1] * Math.sin(n),
      i = e[1] * Math.cos(n) - e[0] * Math.sin(n);
    return [r, i];
  }
  function uv(e, t) {
    const n = (c) => {
        const d = "touches" in c;
        (d && c.touches.length > 1) ||
          e((p, h) => {
            h.trackMouse &&
              !d &&
              (document.addEventListener(Sp, r),
              document.addEventListener(xp, s));
            const { clientX: g, clientY: y } = d ? c.touches[0] : c,
              T = Ep([g, y], h.rotationAngle);
            return (
              h.onTouchStartOrOnMouseDown &&
                h.onTouchStartOrOnMouseDown({ event: c }),
              Object.assign(Object.assign(Object.assign({}, p), ru), {
                initial: T.slice(),
                xy: T,
                start: c.timeStamp || 0,
              })
            );
          });
      },
      r = (c) => {
        e((d, p) => {
          const h = "touches" in c;
          if (h && c.touches.length > 1) return d;
          if (c.timeStamp - d.start > p.swipeDuration)
            return d.swiping
              ? Object.assign(Object.assign({}, d), { swiping: !1 })
              : d;
          const { clientX: g, clientY: y } = h ? c.touches[0] : c,
            [T, f] = Ep([g, y], p.rotationAngle),
            m = T - d.xy[0],
            v = f - d.xy[1],
            w = Math.abs(m),
            x = Math.abs(v),
            P = (c.timeStamp || 0) - d.start,
            S = Math.sqrt(w * w + x * x) / (P || 1),
            O = [m / (P || 1), v / (P || 1)],
            _ = av(w, x, m, v),
            j =
              typeof p.delta == "number"
                ? p.delta
                : p.delta[_.toLowerCase()] || Sr.delta;
          if (w < j && x < j && !d.swiping) return d;
          const L = {
            absX: w,
            absY: x,
            deltaX: m,
            deltaY: v,
            dir: _,
            event: c,
            first: d.first,
            initial: d.initial,
            velocity: S,
            vxvy: O,
          };
          L.first && p.onSwipeStart && p.onSwipeStart(L),
            p.onSwiping && p.onSwiping(L);
          let $ = !1;
          return (
            (p.onSwiping || p.onSwiped || p[`onSwiped${_}`]) && ($ = !0),
            $ &&
              p.preventScrollOnSwipe &&
              p.trackTouch &&
              c.cancelable &&
              c.preventDefault(),
            Object.assign(Object.assign({}, d), {
              first: !1,
              eventData: L,
              swiping: !0,
            })
          );
        });
      },
      i = (c) => {
        e((d, p) => {
          let h;
          if (d.swiping && d.eventData) {
            if (c.timeStamp - d.start < p.swipeDuration) {
              (h = Object.assign(Object.assign({}, d.eventData), { event: c })),
                p.onSwiped && p.onSwiped(h);
              const g = p[`onSwiped${h.dir}`];
              g && g(h);
            }
          } else p.onTap && p.onTap({ event: c });
          return (
            p.onTouchEndOrOnMouseUp && p.onTouchEndOrOnMouseUp({ event: c }),
            Object.assign(Object.assign(Object.assign({}, d), ru), {
              eventData: h,
            })
          );
        });
      },
      o = () => {
        document.removeEventListener(Sp, r),
          document.removeEventListener(xp, s);
      },
      s = (c) => {
        o(), i(c);
      },
      l = (c, d) => {
        let p = () => {};
        if (c && c.addEventListener) {
          const h = Object.assign(
              Object.assign({}, Sr.touchEventOptions),
              d.touchEventOptions
            ),
            g = [
              [lv, n, h],
              [
                sv,
                r,
                Object.assign(
                  Object.assign({}, h),
                  d.preventScrollOnSwipe ? { passive: !1 } : {}
                ),
              ],
              [ov, i, h],
            ];
          g.forEach(([y, T, f]) => c.addEventListener(y, T, f)),
            (p = () => g.forEach(([y, T]) => c.removeEventListener(y, T)));
        }
        return p;
      },
      u = {
        ref: (c) => {
          c !== null &&
            e((d, p) => {
              if (d.el === c) return d;
              const h = {};
              return (
                d.el &&
                  d.el !== c &&
                  d.cleanUpTouch &&
                  (d.cleanUpTouch(), (h.cleanUpTouch = void 0)),
                p.trackTouch && c && (h.cleanUpTouch = l(c, p)),
                Object.assign(Object.assign(Object.assign({}, d), { el: c }), h)
              );
            });
        },
      };
    return t.trackMouse && (u.onMouseDown = n), [u, l];
  }
  function cv(e, t, n, r) {
    return !t.trackTouch || !e.el
      ? (e.cleanUpTouch && e.cleanUpTouch(),
        Object.assign(Object.assign({}, e), { cleanUpTouch: void 0 }))
      : e.cleanUpTouch
      ? t.preventScrollOnSwipe !== n.preventScrollOnSwipe ||
        t.touchEventOptions.passive !== n.touchEventOptions.passive
        ? (e.cleanUpTouch(),
          Object.assign(Object.assign({}, e), { cleanUpTouch: r(e.el, t) }))
        : e
      : Object.assign(Object.assign({}, e), { cleanUpTouch: r(e.el, t) });
  }
  function dv(e) {
    const { trackMouse: t } = e,
      n = M.useRef(Object.assign({}, ru)),
      r = M.useRef(Object.assign({}, Sr)),
      i = M.useRef(Object.assign({}, r.current));
    (i.current = Object.assign({}, r.current)),
      (r.current = Object.assign(Object.assign({}, Sr), e));
    let o;
    for (o in Sr) r.current[o] === void 0 && (r.current[o] = Sr[o]);
    const [s, l] = M.useMemo(
      () => uv((a) => (n.current = a(n.current, r.current)), { trackMouse: t }),
      [t]
    );
    return (n.current = cv(n.current, r.current, i.current, l)), s;
  }
  var be = function () {
    return (
      (be =
        Object.assign ||
        function (t) {
          for (var n, r = 1, i = arguments.length; r < i; r++) {
            n = arguments[r];
            for (var o in n)
              Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
          }
          return t;
        }),
      be.apply(this, arguments)
    );
  };
  function os(e, t, n) {
    if (n || arguments.length === 2)
      for (var r = 0, i = t.length, o; r < i; r++)
        (o || !(r in t)) &&
          (o || (o = Array.prototype.slice.call(t, 0, r)), (o[r] = t[r]));
    return e.concat(o || Array.prototype.slice.call(t));
  }
  var ne = "-ms-",
    Ci = "-moz-",
    Q = "-webkit-",
    Tp = "comm",
    ss = "rule",
    iu = "decl",
    fv = "@import",
    Cp = "@keyframes",
    pv = "@layer",
    hv = Math.abs,
    ou = String.fromCharCode,
    mv = Object.assign;
  function gv(e, t) {
    return Se(e, 0) ^ 45
      ? (((((((t << 2) ^ Se(e, 0)) << 2) ^ Se(e, 1)) << 2) ^ Se(e, 2)) << 2) ^
          Se(e, 3)
      : 0;
  }
  function Pp(e) {
    return e.trim();
  }
  function pn(e, t) {
    return (e = t.exec(e)) ? e[0] : e;
  }
  function U(e, t, n) {
    return e.replace(t, n);
  }
  function ls(e, t) {
    return e.indexOf(t);
  }
  function Se(e, t) {
    return e.charCodeAt(t) | 0;
  }
  function xr(e, t, n) {
    return e.slice(t, n);
  }
  function Bt(e) {
    return e.length;
  }
  function su(e) {
    return e.length;
  }
  function as(e, t) {
    return t.push(e), e;
  }
  function vv(e, t) {
    return e.map(t).join("");
  }
  var us = 1,
    Er = 1,
    kp = 0,
    st = 0,
    de = 0,
    Tr = "";
  function cs(e, t, n, r, i, o, s) {
    return {
      value: e,
      root: t,
      parent: n,
      type: r,
      props: i,
      children: o,
      line: us,
      column: Er,
      length: s,
      return: "",
    };
  }
  function Pi(e, t) {
    return mv(
      cs("", null, null, "", null, null, 0),
      e,
      { length: -e.length },
      t
    );
  }
  function yv() {
    return de;
  }
  function wv() {
    return (
      (de = st > 0 ? Se(Tr, --st) : 0), Er--, de === 10 && ((Er = 1), us--), de
    );
  }
  function wt() {
    return (
      (de = st < kp ? Se(Tr, st++) : 0), Er++, de === 10 && ((Er = 1), us++), de
    );
  }
  function zn() {
    return Se(Tr, st);
  }
  function ds() {
    return st;
  }
  function fs(e, t) {
    return xr(Tr, e, t);
  }
  function lu(e) {
    switch (e) {
      case 0:
      case 9:
      case 10:
      case 13:
      case 32:
        return 5;
      case 33:
      case 43:
      case 44:
      case 47:
      case 62:
      case 64:
      case 126:
      case 59:
      case 123:
      case 125:
        return 4;
      case 58:
        return 3;
      case 34:
      case 39:
      case 40:
      case 91:
        return 2;
      case 41:
      case 93:
        return 1;
    }
    return 0;
  }
  function Sv(e) {
    return (us = Er = 1), (kp = Bt((Tr = e))), (st = 0), [];
  }
  function xv(e) {
    return (Tr = ""), e;
  }
  function au(e) {
    return Pp(fs(st - 1, uu(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
  }
  function Ev(e) {
    for (; (de = zn()) && de < 33; ) wt();
    return lu(e) > 2 || lu(de) > 3 ? "" : " ";
  }
  function Tv(e, t) {
    for (
      ;
      --t &&
      wt() &&
      !(de < 48 || de > 102 || (de > 57 && de < 65) || (de > 70 && de < 97));

    );
    return fs(e, ds() + (t < 6 && zn() == 32 && wt() == 32));
  }
  function uu(e) {
    for (; wt(); )
      switch (de) {
        case e:
          return st;
        case 34:
        case 39:
          e !== 34 && e !== 39 && uu(de);
          break;
        case 40:
          e === 41 && uu(e);
          break;
        case 92:
          wt();
          break;
      }
    return st;
  }
  function Cv(e, t) {
    for (; wt() && e + de !== 47 + 10; )
      if (e + de === 42 + 42 && zn() === 47) break;
    return "/*" + fs(t, st - 1) + "*" + ou(e === 47 ? e : wt());
  }
  function Pv(e) {
    for (; !lu(zn()); ) wt();
    return fs(e, st);
  }
  function kv(e) {
    return xv(ps("", null, null, null, [""], (e = Sv(e)), 0, [0], e));
  }
  function ps(e, t, n, r, i, o, s, l, a) {
    for (
      var u = 0,
        c = 0,
        d = s,
        p = 0,
        h = 0,
        g = 0,
        y = 1,
        T = 1,
        f = 1,
        m = 0,
        v = "",
        w = i,
        x = o,
        P = r,
        S = v;
      T;

    )
      switch (((g = m), (m = wt()))) {
        case 40:
          if (g != 108 && Se(S, d - 1) == 58) {
            ls((S += U(au(m), "&", "&\f")), "&\f") != -1 && (f = -1);
            break;
          }
        case 34:
        case 39:
        case 91:
          S += au(m);
          break;
        case 9:
        case 10:
        case 13:
        case 32:
          S += Ev(g);
          break;
        case 92:
          S += Tv(ds() - 1, 7);
          continue;
        case 47:
          switch (zn()) {
            case 42:
            case 47:
              as(Ov(Cv(wt(), ds()), t, n), a);
              break;
            default:
              S += "/";
          }
          break;
        case 123 * y:
          l[u++] = Bt(S) * f;
        case 125 * y:
        case 59:
        case 0:
          switch (m) {
            case 0:
            case 125:
              T = 0;
            case 59 + c:
              f == -1 && (S = U(S, /\f/g, "")),
                h > 0 &&
                  Bt(S) - d &&
                  as(
                    h > 32
                      ? _p(S + ";", r, n, d - 1)
                      : _p(U(S, " ", "") + ";", r, n, d - 2),
                    a
                  );
              break;
            case 59:
              S += ";";
            default:
              if (
                (as((P = Op(S, t, n, u, c, i, l, v, (w = []), (x = []), d)), o),
                m === 123)
              )
                if (c === 0) ps(S, t, P, P, w, o, d, l, x);
                else
                  switch (p === 99 && Se(S, 3) === 110 ? 100 : p) {
                    case 100:
                    case 108:
                    case 109:
                    case 115:
                      ps(
                        e,
                        P,
                        P,
                        r && as(Op(e, P, P, 0, 0, i, l, v, i, (w = []), d), x),
                        i,
                        x,
                        d,
                        l,
                        r ? w : x
                      );
                      break;
                    default:
                      ps(S, P, P, P, [""], x, 0, l, x);
                  }
          }
          (u = c = h = 0), (y = f = 1), (v = S = ""), (d = s);
          break;
        case 58:
          (d = 1 + Bt(S)), (h = g);
        default:
          if (y < 1) {
            if (m == 123) --y;
            else if (m == 125 && y++ == 0 && wv() == 125) continue;
          }
          switch (((S += ou(m)), m * y)) {
            case 38:
              f = c > 0 ? 1 : ((S += "\f"), -1);
              break;
            case 44:
              (l[u++] = (Bt(S) - 1) * f), (f = 1);
              break;
            case 64:
              zn() === 45 && (S += au(wt())),
                (p = zn()),
                (c = d = Bt((v = S += Pv(ds())))),
                m++;
              break;
            case 45:
              g === 45 && Bt(S) == 2 && (y = 0);
          }
      }
    return o;
  }
  function Op(e, t, n, r, i, o, s, l, a, u, c) {
    for (
      var d = i - 1, p = i === 0 ? o : [""], h = su(p), g = 0, y = 0, T = 0;
      g < r;
      ++g
    )
      for (var f = 0, m = xr(e, d + 1, (d = hv((y = s[g])))), v = e; f < h; ++f)
        (v = Pp(y > 0 ? p[f] + " " + m : U(m, /&\f/g, p[f]))) && (a[T++] = v);
    return cs(e, t, n, i === 0 ? ss : l, a, u, c);
  }
  function Ov(e, t, n) {
    return cs(e, t, n, Tp, ou(yv()), xr(e, 2, -2), 0);
  }
  function _p(e, t, n, r) {
    return cs(e, t, n, iu, xr(e, 0, r), xr(e, r + 1, -1), r);
  }
  function Ip(e, t, n) {
    switch (gv(e, t)) {
      case 5103:
        return Q + "print-" + e + e;
      case 5737:
      case 4201:
      case 3177:
      case 3433:
      case 1641:
      case 4457:
      case 2921:
      case 5572:
      case 6356:
      case 5844:
      case 3191:
      case 6645:
      case 3005:
      case 6391:
      case 5879:
      case 5623:
      case 6135:
      case 4599:
      case 4855:
      case 4215:
      case 6389:
      case 5109:
      case 5365:
      case 5621:
      case 3829:
        return Q + e + e;
      case 4789:
        return Ci + e + e;
      case 5349:
      case 4246:
      case 4810:
      case 6968:
      case 2756:
        return Q + e + Ci + e + ne + e + e;
      case 5936:
        switch (Se(e, t + 11)) {
          case 114:
            return Q + e + ne + U(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
          case 108:
            return Q + e + ne + U(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
          case 45:
            return Q + e + ne + U(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
        }
      case 6828:
      case 4268:
      case 2903:
        return Q + e + ne + e + e;
      case 6165:
        return Q + e + ne + "flex-" + e + e;
      case 5187:
        return (
          Q + e + U(e, /(\w+).+(:[^]+)/, Q + "box-$1$2" + ne + "flex-$1$2") + e
        );
      case 5443:
        return (
          Q +
          e +
          ne +
          "flex-item-" +
          U(e, /flex-|-self/g, "") +
          (pn(e, /flex-|baseline/)
            ? ""
            : ne + "grid-row-" + U(e, /flex-|-self/g, "")) +
          e
        );
      case 4675:
        return (
          Q +
          e +
          ne +
          "flex-line-pack" +
          U(e, /align-content|flex-|-self/g, "") +
          e
        );
      case 5548:
        return Q + e + ne + U(e, "shrink", "negative") + e;
      case 5292:
        return Q + e + ne + U(e, "basis", "preferred-size") + e;
      case 6060:
        return (
          Q +
          "box-" +
          U(e, "-grow", "") +
          Q +
          e +
          ne +
          U(e, "grow", "positive") +
          e
        );
      case 4554:
        return Q + U(e, /([^-])(transform)/g, "$1" + Q + "$2") + e;
      case 6187:
        return (
          U(U(U(e, /(zoom-|grab)/, Q + "$1"), /(image-set)/, Q + "$1"), e, "") +
          e
        );
      case 5495:
      case 3959:
        return U(e, /(image-set\([^]*)/, Q + "$1$`$1");
      case 4968:
        return (
          U(
            U(e, /(.+:)(flex-)?(.*)/, Q + "box-pack:$3" + ne + "flex-pack:$3"),
            /s.+-b[^;]+/,
            "justify"
          ) +
          Q +
          e +
          e
        );
      case 4200:
        if (!pn(e, /flex-|baseline/))
          return ne + "grid-column-align" + xr(e, t) + e;
        break;
      case 2592:
      case 3360:
        return ne + U(e, "template-", "") + e;
      case 4384:
      case 3616:
        return n &&
          n.some(function (r, i) {
            return (t = i), pn(r.props, /grid-\w+-end/);
          })
          ? ~ls(e + (n = n[t].value), "span")
            ? e
            : ne +
              U(e, "-start", "") +
              e +
              ne +
              "grid-row-span:" +
              (~ls(n, "span") ? pn(n, /\d+/) : +pn(n, /\d+/) - +pn(e, /\d+/)) +
              ";"
          : ne + U(e, "-start", "") + e;
      case 4896:
      case 4128:
        return n &&
          n.some(function (r) {
            return pn(r.props, /grid-\w+-start/);
          })
          ? e
          : ne + U(U(e, "-end", "-span"), "span ", "") + e;
      case 4095:
      case 3583:
      case 4068:
      case 2532:
        return U(e, /(.+)-inline(.+)/, Q + "$1$2") + e;
      case 8116:
      case 7059:
      case 5753:
      case 5535:
      case 5445:
      case 5701:
      case 4933:
      case 4677:
      case 5533:
      case 5789:
      case 5021:
      case 4765:
        if (Bt(e) - 1 - t > 6)
          switch (Se(e, t + 1)) {
            case 109:
              if (Se(e, t + 4) !== 45) break;
            case 102:
              return (
                U(
                  e,
                  /(.+:)(.+)-([^]+)/,
                  "$1" +
                    Q +
                    "$2-$3$1" +
                    Ci +
                    (Se(e, t + 3) == 108 ? "$3" : "$2-$3")
                ) + e
              );
            case 115:
              return ~ls(e, "stretch")
                ? Ip(U(e, "stretch", "fill-available"), t, n) + e
                : e;
          }
        break;
      case 5152:
      case 5920:
        return U(
          e,
          /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,
          function (r, i, o, s, l, a, u) {
            return (
              ne +
              i +
              ":" +
              o +
              u +
              (s ? ne + i + "-span:" + (l ? a : +a - +o) + u : "") +
              e
            );
          }
        );
      case 4949:
        if (Se(e, t + 6) === 121) return U(e, ":", ":" + Q) + e;
        break;
      case 6444:
        switch (Se(e, Se(e, 14) === 45 ? 18 : 11)) {
          case 120:
            return (
              U(
                e,
                /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,
                "$1" +
                  Q +
                  (Se(e, 14) === 45 ? "inline-" : "") +
                  "box$3$1" +
                  Q +
                  "$2$3$1" +
                  ne +
                  "$2box$3"
              ) + e
            );
          case 100:
            return U(e, ":", ":" + ne) + e;
        }
        break;
      case 5719:
      case 2647:
      case 2135:
      case 3927:
      case 2391:
        return U(e, "scroll-", "scroll-snap-") + e;
    }
    return e;
  }
  function Cr(e, t) {
    for (var n = "", r = su(e), i = 0; i < r; i++) n += t(e[i], i, e, t) || "";
    return n;
  }
  function _v(e, t, n, r) {
    switch (e.type) {
      case pv:
        if (e.children.length) break;
      case fv:
      case iu:
        return (e.return = e.return || e.value);
      case Tp:
        return "";
      case Cp:
        return (e.return = e.value + "{" + Cr(e.children, r) + "}");
      case ss:
        e.value = e.props.join(",");
    }
    return Bt((n = Cr(e.children, r)))
      ? (e.return = e.value + "{" + n + "}")
      : "";
  }
  function Iv(e) {
    var t = su(e);
    return function (n, r, i, o) {
      for (var s = "", l = 0; l < t; l++) s += e[l](n, r, i, o) || "";
      return s;
    };
  }
  function Lv(e) {
    return function (t) {
      t.root || ((t = t.return) && e(t));
    };
  }
  function Mv(e, t, n, r) {
    if (e.length > -1 && !e.return)
      switch (e.type) {
        case iu:
          e.return = Ip(e.value, e.length, n);
          return;
        case Cp:
          return Cr([Pi(e, { value: U(e.value, "@", "@" + Q) })], r);
        case ss:
          if (e.length)
            return vv(e.props, function (i) {
              switch (pn(i, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return Cr(
                    [Pi(e, { props: [U(i, /:(read-\w+)/, ":" + Ci + "$1")] })],
                    r
                  );
                case "::placeholder":
                  return Cr(
                    [
                      Pi(e, {
                        props: [U(i, /:(plac\w+)/, ":" + Q + "input-$1")],
                      }),
                      Pi(e, { props: [U(i, /:(plac\w+)/, ":" + Ci + "$1")] }),
                      Pi(e, { props: [U(i, /:(plac\w+)/, ne + "input-$1")] }),
                    ],
                    r
                  );
              }
              return "";
            });
      }
  }
  var Lp = {
      animationIterationCount: 1,
      aspectRatio: 1,
      borderImageOutset: 1,
      borderImageSlice: 1,
      borderImageWidth: 1,
      boxFlex: 1,
      boxFlexGroup: 1,
      boxOrdinalGroup: 1,
      columnCount: 1,
      columns: 1,
      flex: 1,
      flexGrow: 1,
      flexPositive: 1,
      flexShrink: 1,
      flexNegative: 1,
      flexOrder: 1,
      gridRow: 1,
      gridRowEnd: 1,
      gridRowSpan: 1,
      gridRowStart: 1,
      gridColumn: 1,
      gridColumnEnd: 1,
      gridColumnSpan: 1,
      gridColumnStart: 1,
      msGridRow: 1,
      msGridRowSpan: 1,
      msGridColumn: 1,
      msGridColumnSpan: 1,
      fontWeight: 1,
      lineHeight: 1,
      opacity: 1,
      order: 1,
      orphans: 1,
      tabSize: 1,
      widows: 1,
      zIndex: 1,
      zoom: 1,
      WebkitLineClamp: 1,
      fillOpacity: 1,
      floodOpacity: 1,
      stopOpacity: 1,
      strokeDasharray: 1,
      strokeDashoffset: 1,
      strokeMiterlimit: 1,
      strokeOpacity: 1,
      strokeWidth: 1,
    },
    Pr =
      (typeof process < "u" &&
        process.env !== void 0 &&
        (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR)) ||
      "data-styled",
    cu = typeof window < "u" && "HTMLElement" in window,
    Nv = !!(typeof SC_DISABLE_SPEEDY == "boolean"
      ? SC_DISABLE_SPEEDY
      : typeof process < "u" &&
        process.env !== void 0 &&
        process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 &&
        process.env.REACT_APP_SC_DISABLE_SPEEDY !== ""
      ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" &&
        process.env.REACT_APP_SC_DISABLE_SPEEDY
      : typeof process < "u" &&
        process.env !== void 0 &&
        process.env.SC_DISABLE_SPEEDY !== void 0 &&
        process.env.SC_DISABLE_SPEEDY !== "" &&
        process.env.SC_DISABLE_SPEEDY !== "false" &&
        process.env.SC_DISABLE_SPEEDY),
    Mp = Object.freeze([]),
    An = Object.freeze({});
  function Rv(e, t, n) {
    return (
      n === void 0 && (n = An), (e.theme !== n.theme && e.theme) || t || n.theme
    );
  }
  var Np = new Set([
      "a",
      "abbr",
      "address",
      "area",
      "article",
      "aside",
      "audio",
      "b",
      "base",
      "bdi",
      "bdo",
      "big",
      "blockquote",
      "body",
      "br",
      "button",
      "canvas",
      "caption",
      "cite",
      "code",
      "col",
      "colgroup",
      "data",
      "datalist",
      "dd",
      "del",
      "details",
      "dfn",
      "dialog",
      "div",
      "dl",
      "dt",
      "em",
      "embed",
      "fieldset",
      "figcaption",
      "figure",
      "footer",
      "form",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "head",
      "header",
      "hgroup",
      "hr",
      "html",
      "i",
      "iframe",
      "img",
      "input",
      "ins",
      "kbd",
      "keygen",
      "label",
      "legend",
      "li",
      "link",
      "main",
      "map",
      "mark",
      "menu",
      "menuitem",
      "meta",
      "meter",
      "nav",
      "noscript",
      "object",
      "ol",
      "optgroup",
      "option",
      "output",
      "p",
      "param",
      "picture",
      "pre",
      "progress",
      "q",
      "rp",
      "rt",
      "ruby",
      "s",
      "samp",
      "script",
      "section",
      "select",
      "small",
      "source",
      "span",
      "strong",
      "style",
      "sub",
      "summary",
      "sup",
      "table",
      "tbody",
      "td",
      "textarea",
      "tfoot",
      "th",
      "thead",
      "time",
      "title",
      "tr",
      "track",
      "u",
      "ul",
      "use",
      "var",
      "video",
      "wbr",
      "circle",
      "clipPath",
      "defs",
      "ellipse",
      "foreignObject",
      "g",
      "image",
      "line",
      "linearGradient",
      "marker",
      "mask",
      "path",
      "pattern",
      "polygon",
      "polyline",
      "radialGradient",
      "rect",
      "stop",
      "svg",
      "text",
      "tspan",
    ]),
    zv = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
    Av = /(^-|-$)/g;
  function Rp(e) {
    return e.replace(zv, "-").replace(Av, "");
  }
  var $v = /(a)(d)/gi,
    zp = function (e) {
      return String.fromCharCode(e + (e > 25 ? 39 : 97));
    };
  function du(e) {
    var t,
      n = "";
    for (t = Math.abs(e); t > 52; t = (t / 52) | 0) n = zp(t % 52) + n;
    return (zp(t % 52) + n).replace($v, "$1-$2");
  }
  var fu,
    kr = function (e, t) {
      for (var n = t.length; n; ) e = (33 * e) ^ t.charCodeAt(--n);
      return e;
    },
    Ap = function (e) {
      return kr(5381, e);
    };
  function jv(e) {
    return du(Ap(e) >>> 0);
  }
  function Dv(e) {
    return e.displayName || e.name || "Component";
  }
  function pu(e) {
    return typeof e == "string" && !0;
  }
  var $p = typeof Symbol == "function" && Symbol.for,
    jp = $p ? Symbol.for("react.memo") : 60115,
    bv = $p ? Symbol.for("react.forward_ref") : 60112,
    Fv = {
      childContextTypes: !0,
      contextType: !0,
      contextTypes: !0,
      defaultProps: !0,
      displayName: !0,
      getDefaultProps: !0,
      getDerivedStateFromError: !0,
      getDerivedStateFromProps: !0,
      mixins: !0,
      propTypes: !0,
      type: !0,
    },
    Bv = {
      name: !0,
      length: !0,
      prototype: !0,
      caller: !0,
      callee: !0,
      arguments: !0,
      arity: !0,
    },
    Dp = {
      $$typeof: !0,
      compare: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
      type: !0,
    },
    Vv =
      (((fu = {})[bv] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
      }),
      (fu[jp] = Dp),
      fu);
  function bp(e) {
    return ("type" in (t = e) && t.type.$$typeof) === jp
      ? Dp
      : "$$typeof" in e
      ? Vv[e.$$typeof]
      : Fv;
    var t;
  }
  var Uv = Object.defineProperty,
    Hv = Object.getOwnPropertyNames,
    Fp = Object.getOwnPropertySymbols,
    Wv = Object.getOwnPropertyDescriptor,
    Gv = Object.getPrototypeOf,
    Bp = Object.prototype;
  function Vp(e, t, n) {
    if (typeof t != "string") {
      if (Bp) {
        var r = Gv(t);
        r && r !== Bp && Vp(e, r, n);
      }
      var i = Hv(t);
      Fp && (i = i.concat(Fp(t)));
      for (var o = bp(e), s = bp(t), l = 0; l < i.length; ++l) {
        var a = i[l];
        if (!(a in Bv || (n && n[a]) || (s && a in s) || (o && a in o))) {
          var u = Wv(t, a);
          try {
            Uv(e, a, u);
          } catch {}
        }
      }
    }
    return e;
  }
  function Or(e) {
    return typeof e == "function";
  }
  function hu(e) {
    return typeof e == "object" && "styledComponentId" in e;
  }
  function $n(e, t) {
    return e && t ? "".concat(e, " ").concat(t) : e || t || "";
  }
  function Up(e, t) {
    if (e.length === 0) return "";
    for (var n = e[0], r = 1; r < e.length; r++) n += t ? t + e[r] : e[r];
    return n;
  }
  function ki(e) {
    return (
      e !== null &&
      typeof e == "object" &&
      e.constructor.name === Object.name &&
      !("props" in e && e.$$typeof)
    );
  }
  function mu(e, t, n) {
    if ((n === void 0 && (n = !1), !n && !ki(e) && !Array.isArray(e))) return t;
    if (Array.isArray(t))
      for (var r = 0; r < t.length; r++) e[r] = mu(e[r], t[r]);
    else if (ki(t)) for (var r in t) e[r] = mu(e[r], t[r]);
    return e;
  }
  function Oi(e) {
    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
    return new Error(
      "An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#"
        .concat(e, " for more information.")
        .concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")
    );
  }
  var Yv = (function () {
      function e(t) {
        (this.groupSizes = new Uint32Array(512)),
          (this.length = 512),
          (this.tag = t);
      }
      return (
        (e.prototype.indexOfGroup = function (t) {
          for (var n = 0, r = 0; r < t; r++) n += this.groupSizes[r];
          return n;
        }),
        (e.prototype.insertRules = function (t, n) {
          if (t >= this.groupSizes.length) {
            for (var r = this.groupSizes, i = r.length, o = i; t >= o; )
              if ((o <<= 1) < 0) throw Oi(16, "".concat(t));
            (this.groupSizes = new Uint32Array(o)),
              this.groupSizes.set(r),
              (this.length = o);
            for (var s = i; s < o; s++) this.groupSizes[s] = 0;
          }
          for (
            var l = this.indexOfGroup(t + 1), a = ((s = 0), n.length);
            s < a;
            s++
          )
            this.tag.insertRule(l, n[s]) && (this.groupSizes[t]++, l++);
        }),
        (e.prototype.clearGroup = function (t) {
          if (t < this.length) {
            var n = this.groupSizes[t],
              r = this.indexOfGroup(t),
              i = r + n;
            this.groupSizes[t] = 0;
            for (var o = r; o < i; o++) this.tag.deleteRule(r);
          }
        }),
        (e.prototype.getGroup = function (t) {
          var n = "";
          if (t >= this.length || this.groupSizes[t] === 0) return n;
          for (
            var r = this.groupSizes[t],
              i = this.indexOfGroup(t),
              o = i + r,
              s = i;
            s < o;
            s++
          )
            n += "".concat(this.tag.getRule(s)).concat(`/*!sc*/
`);
          return n;
        }),
        e
      );
    })(),
    hs = new Map(),
    ms = new Map(),
    gu = 1,
    gs = function (e) {
      if (hs.has(e)) return hs.get(e);
      for (; ms.has(gu); ) gu++;
      var t = gu++;
      return hs.set(e, t), ms.set(t, e), t;
    },
    Qv = function (e, t) {
      hs.set(e, t), ms.set(t, e);
    },
    Kv = "style["
      .concat(Pr, "][")
      .concat("data-styled-version", '="')
      .concat("6.0.0-rc.3", '"]'),
    Xv = new RegExp(
      "^".concat(Pr, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')
    ),
    qv = function (e, t, n) {
      for (var r, i = n.split(","), o = 0, s = i.length; o < s; o++)
        (r = i[o]) && e.registerName(t, r);
    },
    Jv = function (e, t) {
      for (
        var n,
          r = ((n = t.textContent) !== null && n !== void 0 ? n : "")
            .split(`/*!sc*/
`),
          i = [],
          o = 0,
          s = r.length;
        o < s;
        o++
      ) {
        var l = r[o].trim();
        if (l) {
          var a = l.match(Xv);
          if (a) {
            var u = 0 | parseInt(a[1], 10),
              c = a[2];
            u !== 0 && (Qv(c, u), qv(e, c, a[3]), e.getTag().insertRules(u, i)),
              (i.length = 0);
          } else i.push(l);
        }
      }
    };
  function Zv() {
    return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
  }
  var Hp = function (e) {
      var t = document.head,
        n = e || t,
        r = document.createElement("style"),
        i = (function (l) {
          for (var a = l.childNodes, u = a.length; u >= 0; u--) {
            var c = a[u];
            if (c && c.nodeType === 1 && c.hasAttribute(Pr)) return c;
          }
        })(n),
        o = i !== void 0 ? i.nextSibling : null;
      r.setAttribute(Pr, "active"),
        r.setAttribute("data-styled-version", "6.0.0-rc.3");
      var s = Zv();
      return s && r.setAttribute("nonce", s), n.insertBefore(r, o), r;
    },
    ey = (function () {
      function e(t) {
        (this.element = Hp(t)),
          this.element.appendChild(document.createTextNode("")),
          (this.sheet = (function (n) {
            if (n.sheet) return n.sheet;
            for (
              var r = document.styleSheets, i = 0, o = r.length;
              i < o;
              i++
            ) {
              var s = r[i];
              if (s.ownerNode === n) return s;
            }
            throw Oi(17);
          })(this.element)),
          (this.length = 0);
      }
      return (
        (e.prototype.insertRule = function (t, n) {
          try {
            return this.sheet.insertRule(n, t), this.length++, !0;
          } catch {
            return !1;
          }
        }),
        (e.prototype.deleteRule = function (t) {
          this.sheet.deleteRule(t), this.length--;
        }),
        (e.prototype.getRule = function (t) {
          var n = this.sheet.cssRules[t];
          return n && n.cssText ? n.cssText : "";
        }),
        e
      );
    })(),
    ty = (function () {
      function e(t) {
        (this.element = Hp(t)),
          (this.nodes = this.element.childNodes),
          (this.length = 0);
      }
      return (
        (e.prototype.insertRule = function (t, n) {
          if (t <= this.length && t >= 0) {
            var r = document.createTextNode(n);
            return (
              this.element.insertBefore(r, this.nodes[t] || null),
              this.length++,
              !0
            );
          }
          return !1;
        }),
        (e.prototype.deleteRule = function (t) {
          this.element.removeChild(this.nodes[t]), this.length--;
        }),
        (e.prototype.getRule = function (t) {
          return t < this.length ? this.nodes[t].textContent : "";
        }),
        e
      );
    })(),
    ny = (function () {
      function e(t) {
        (this.rules = []), (this.length = 0);
      }
      return (
        (e.prototype.insertRule = function (t, n) {
          return (
            t <= this.length && (this.rules.splice(t, 0, n), this.length++, !0)
          );
        }),
        (e.prototype.deleteRule = function (t) {
          this.rules.splice(t, 1), this.length--;
        }),
        (e.prototype.getRule = function (t) {
          return t < this.length ? this.rules[t] : "";
        }),
        e
      );
    })(),
    Wp = cu,
    ry = { isServer: !cu, useCSSOMInjection: !Nv },
    Gp = (function () {
      function e(t, n, r) {
        t === void 0 && (t = An),
          n === void 0 && (n = {}),
          (this.options = be(be({}, ry), t)),
          (this.gs = n),
          (this.names = new Map(r)),
          (this.server = !!t.isServer),
          !this.server &&
            cu &&
            Wp &&
            ((Wp = !1),
            (function (i) {
              for (
                var o = document.querySelectorAll(Kv), s = 0, l = o.length;
                s < l;
                s++
              ) {
                var a = o[s];
                a &&
                  a.getAttribute(Pr) !== "active" &&
                  (Jv(i, a), a.parentNode && a.parentNode.removeChild(a));
              }
            })(this));
      }
      return (
        (e.registerId = function (t) {
          return gs(t);
        }),
        (e.prototype.reconstructWithOptions = function (t, n) {
          return (
            n === void 0 && (n = !0),
            new e(
              be(be({}, this.options), t),
              this.gs,
              (n && this.names) || void 0
            )
          );
        }),
        (e.prototype.allocateGSInstance = function (t) {
          return (this.gs[t] = (this.gs[t] || 0) + 1);
        }),
        (e.prototype.getTag = function () {
          return (
            this.tag ||
            (this.tag =
              ((t = (function (n) {
                var r = n.useCSSOMInjection,
                  i = n.target;
                return n.isServer ? new ny(i) : r ? new ey(i) : new ty(i);
              })(this.options)),
              new Yv(t)))
          );
          var t;
        }),
        (e.prototype.hasNameForId = function (t, n) {
          return this.names.has(t) && this.names.get(t).has(n);
        }),
        (e.prototype.registerName = function (t, n) {
          if ((gs(t), this.names.has(t))) this.names.get(t).add(n);
          else {
            var r = new Set();
            r.add(n), this.names.set(t, r);
          }
        }),
        (e.prototype.insertRules = function (t, n, r) {
          this.registerName(t, n), this.getTag().insertRules(gs(t), r);
        }),
        (e.prototype.clearNames = function (t) {
          this.names.has(t) && this.names.get(t).clear();
        }),
        (e.prototype.clearRules = function (t) {
          this.getTag().clearGroup(gs(t)), this.clearNames(t);
        }),
        (e.prototype.clearTag = function () {
          this.tag = void 0;
        }),
        (e.prototype.toString = function () {
          return (function (t) {
            for (
              var n = t.getTag(),
                r = n.length,
                i = "",
                o = function (l) {
                  var a = (function (h) {
                    return ms.get(h);
                  })(l);
                  if (a === void 0) return "continue";
                  var u = t.names.get(a),
                    c = n.getGroup(l);
                  if (u === void 0 || c.length === 0) return "continue";
                  var d = ""
                      .concat(Pr, ".g")
                      .concat(l, '[id="')
                      .concat(a, '"]'),
                    p = "";
                  u !== void 0 &&
                    u.forEach(function (h) {
                      h.length > 0 && (p += "".concat(h, ","));
                    }),
                    (i += "".concat(c).concat(d, '{content:"').concat(p, '"}')
                      .concat(`/*!sc*/
`));
                },
                s = 0;
              s < r;
              s++
            )
              o(s);
            return i;
          })(this);
        }),
        e
      );
    })(),
    iy = /&/g,
    oy = /^\s*\/\/.*$/gm;
  function Yp(e, t) {
    return e.map(function (n) {
      return (
        n.type === "rule" &&
          ((n.value = "".concat(t, " ").concat(n.value)),
          (n.value = n.value.replaceAll(",", ",".concat(t, " "))),
          (n.props = n.props.map(function (r) {
            return "".concat(t, " ").concat(r);
          }))),
        Array.isArray(n.children) &&
          n.type !== "@keyframes" &&
          (n.children = Yp(n.children, t)),
        n
      );
    });
  }
  function sy(e) {
    var t,
      n,
      r,
      i = e === void 0 ? An : e,
      o = i.options,
      s = o === void 0 ? An : o,
      l = i.plugins,
      a = l === void 0 ? Mp : l,
      u = function (p, h, g) {
        return g === n ||
          (g.startsWith(n) && g.endsWith(n) && g.replaceAll(n, "").length > 0)
          ? ".".concat(t)
          : p;
      },
      c = a.slice();
    c.push(function (p) {
      p.type === ss &&
        p.value.includes("&") &&
        (p.props[0] = p.props[0].replace(iy, n).replace(r, u));
    }),
      s.prefix && c.push(Mv),
      c.push(_v);
    var d = function (p, h, g, y) {
      h === void 0 && (h = ""),
        g === void 0 && (g = ""),
        y === void 0 && (y = "&"),
        (t = y),
        (n = h),
        (r = new RegExp("\\".concat(n, "\\b"), "g"));
      var T = p.replace(oy, ""),
        f = kv(g || h ? "".concat(g, " ").concat(h, " { ").concat(T, " }") : T);
      s.namespace && (f = Yp(f, s.namespace));
      var m = [];
      return (
        Cr(
          f,
          Iv(
            c.concat(
              Lv(function (v) {
                return m.push(v);
              })
            )
          )
        ),
        m
      );
    };
    return (
      (d.hash = a.length
        ? a
            .reduce(function (p, h) {
              return h.name || Oi(15), kr(p, h.name);
            }, 5381)
            .toString()
        : ""),
      d
    );
  }
  var ly = new Gp(),
    vu = sy(),
    Qp = K.createContext({
      shouldForwardProp: void 0,
      styleSheet: ly,
      stylis: vu,
    });
  Qp.Consumer, K.createContext(void 0);
  function Kp() {
    return M.useContext(Qp);
  }
  var ay = (function () {
      function e(t, n) {
        var r = this;
        (this.inject = function (i, o) {
          o === void 0 && (o = vu);
          var s = r.name + o.hash;
          i.hasNameForId(r.id, s) ||
            i.insertRules(r.id, s, o(r.rules, s, "@keyframes"));
        }),
          (this.toString = function () {
            throw Oi(12, String(r.name));
          }),
          (this.name = t),
          (this.id = "sc-keyframes-".concat(t)),
          (this.rules = n);
      }
      return (
        (e.prototype.getName = function (t) {
          return t === void 0 && (t = vu), this.name + t.hash;
        }),
        e
      );
    })(),
    uy = function (e) {
      return e >= "A" && e <= "Z";
    };
  function Xp(e) {
    for (var t = "", n = 0; n < e.length; n++) {
      var r = e[n];
      if (n === 1 && r === "-" && e[0] === "-") return e;
      uy(r) ? (t += "-" + r.toLowerCase()) : (t += r);
    }
    return t.startsWith("ms-") ? "-" + t : t;
  }
  var qp = function (e) {
      return e == null || e === !1 || e === "";
    },
    Jp = function (e) {
      var t,
        n,
        r = [];
      for (var i in e) {
        var o = e[i];
        e.hasOwnProperty(i) &&
          !qp(o) &&
          ((Array.isArray(o) && o.isCss) || Or(o)
            ? r.push("".concat(Xp(i), ":"), o, ";")
            : ki(o)
            ? r.push.apply(
                r,
                os(os(["".concat(i, " {")], Jp(o), !1), ["}"], !1)
              )
            : r.push(
                ""
                  .concat(Xp(i), ": ")
                  .concat(
                    ((t = i),
                    (n = o) == null || typeof n == "boolean" || n === ""
                      ? ""
                      : typeof n != "number" ||
                        n === 0 ||
                        t in Lp ||
                        t.startsWith("--")
                      ? String(n).trim()
                      : "".concat(n, "px")),
                    ";"
                  )
              ));
      }
      return r;
    };
  function jn(e, t, n, r) {
    if (qp(e)) return [];
    if (hu(e)) return [".".concat(e.styledComponentId)];
    if (Or(e)) {
      if (!Or((o = e)) || (o.prototype && o.prototype.isReactComponent) || !t)
        return [e];
      var i = e(t);
      return jn(i, t, n, r);
    }
    var o;
    return e instanceof ay
      ? n
        ? (e.inject(n, r), [e.getName(r)])
        : [e]
      : ki(e)
      ? Jp(e)
      : Array.isArray(e)
      ? e.flatMap(function (s) {
          return jn(s, t, n, r);
        })
      : [e.toString()];
  }
  function cy(e) {
    for (var t = 0; t < e.length; t += 1) {
      var n = e[t];
      if (Or(n) && !hu(n)) return !1;
    }
    return !0;
  }
  var dy = Ap("6.0.0-rc.3"),
    fy = (function () {
      function e(t, n, r) {
        (this.rules = t),
          (this.staticRulesId = ""),
          (this.isStatic = (r === void 0 || r.isStatic) && cy(t)),
          (this.componentId = n),
          (this.baseHash = kr(dy, n)),
          (this.baseStyle = r),
          Gp.registerId(n);
      }
      return (
        (e.prototype.generateAndInjectStyles = function (t, n, r) {
          var i = this.baseStyle
            ? this.baseStyle.generateAndInjectStyles(t, n, r)
            : "";
          if (this.isStatic && !r.hash)
            if (
              this.staticRulesId &&
              n.hasNameForId(this.componentId, this.staticRulesId)
            )
              i = $n(i, this.staticRulesId);
            else {
              var o = Up(jn(this.rules, t, n, r)),
                s = du(kr(this.baseHash, o) >>> 0);
              if (!n.hasNameForId(this.componentId, s)) {
                var l = r(o, ".".concat(s), void 0, this.componentId);
                n.insertRules(this.componentId, s, l);
              }
              (i = $n(i, s)), (this.staticRulesId = s);
            }
          else {
            for (
              var a = kr(this.baseHash, r.hash), u = "", c = 0;
              c < this.rules.length;
              c++
            ) {
              var d = this.rules[c];
              if (typeof d == "string") u += d;
              else if (d) {
                var p = Up(jn(d, t, n, r));
                (a = kr(a, p)), (u += p);
              }
            }
            if (u) {
              var h = du(a >>> 0);
              n.hasNameForId(this.componentId, h) ||
                n.insertRules(
                  this.componentId,
                  h,
                  r(u, ".".concat(h), void 0, this.componentId)
                ),
                (i = $n(i, h));
            }
          }
          return i;
        }),
        e
      );
    })(),
    Zp = K.createContext(void 0);
  Zp.Consumer;
  function py() {
    return M.useContext(Zp);
  }
  var yu = {};
  function hy(e, t, n) {
    var r,
      i = hu(e),
      o = e,
      s = !pu(e),
      l = t.componentId,
      a =
        l === void 0
          ? (function (x, P) {
              var S = typeof x != "string" ? "sc" : Rp(x);
              yu[S] = (yu[S] || 0) + 1;
              var O = "".concat(S, "-").concat(jv("6.0.0-rc.3" + S + yu[S]));
              return P ? "".concat(P, "-").concat(O) : O;
            })(t.displayName, t.parentComponentId)
          : l,
      u = t.displayName,
      c =
        u === void 0
          ? (function (x) {
              return pu(x) ? "styled.".concat(x) : "Styled(".concat(Dv(x), ")");
            })(e)
          : u,
      d = (r = t.attrs) !== null && r !== void 0 ? r : [],
      p =
        t.displayName && t.componentId
          ? "".concat(Rp(t.displayName), "-").concat(t.componentId)
          : t.componentId || a,
      h = i && o.attrs ? o.attrs.concat(d).filter(Boolean) : d,
      g = t.shouldForwardProp;
    if (i && o.shouldForwardProp) {
      var y = o.shouldForwardProp;
      if (t.shouldForwardProp) {
        var T = t.shouldForwardProp;
        g = function (x, P) {
          return y(x, P) && T(x, P);
        };
      } else g = y;
    }
    var f = new fy(n, p, i ? o.componentStyle : void 0),
      m = f.isStatic && d.length === 0;
    function v(x, P) {
      return (function (S, O, _, j) {
        var L = S.attrs,
          $ = S.componentStyle,
          V = S.defaultProps,
          fe = S.foldedComponentIds,
          at = S.styledComponentId,
          ut = S.target,
          St = py(),
          N = Kp(),
          A = S.shouldForwardProp || N.shouldForwardProp,
          D = (function (Be, ct, Nr) {
            for (
              var vn,
                dt = be(be({}, ct), { className: void 0, theme: Nr }),
                Rr = 0;
              Rr < Be.length;
              Rr += 1
            ) {
              var Un = Or((vn = Be[Rr])) ? vn(dt) : vn;
              for (var It in Un)
                dt[It] =
                  It === "className"
                    ? $n(dt[It], Un[It])
                    : It === "style"
                    ? be(be({}, dt[It]), Un[It])
                    : Un[It];
            }
            return (
              ct.className && (dt.className = $n(dt.className, ct.className)),
              dt
            );
          })(L, O, Rv(O, St, V) || An),
          Y = D.as || ut,
          J = {};
        for (var Pe in D)
          D[Pe] === void 0 ||
            Pe[0] === "$" ||
            Pe === "as" ||
            Pe === "theme" ||
            (Pe === "forwardedAs"
              ? (J.as = D.forwardedAs)
              : (A && !A(Pe, Y)) || (J[Pe] = D[Pe]));
        var Je = (function (Be, ct, Nr) {
            var vn = Kp(),
              dt = Be.generateAndInjectStyles(
                ct ? An : Nr,
                vn.styleSheet,
                vn.stylis
              );
            return dt;
          })($, j, D),
          Fe = $n(fe, at);
        return (
          Je && (Fe += " " + Je),
          D.className && (Fe += " " + D.className),
          (J[pu(Y) && !Np.has(Y) ? "class" : "className"] = Fe),
          (J.ref = _),
          M.createElement(Y, J)
        );
      })(w, x, P, m);
    }
    v.displayName = c;
    var w = K.forwardRef(v);
    return (
      (w.attrs = h),
      (w.componentStyle = f),
      (w.displayName = c),
      (w.shouldForwardProp = g),
      (w.foldedComponentIds = i
        ? $n(o.foldedComponentIds, o.styledComponentId)
        : ""),
      (w.styledComponentId = p),
      (w.target = i ? o.target : e),
      Object.defineProperty(w, "defaultProps", {
        get: function () {
          return this._foldedDefaultProps;
        },
        set: function (x) {
          this._foldedDefaultProps = i
            ? (function (P) {
                for (var S = [], O = 1; O < arguments.length; O++)
                  S[O - 1] = arguments[O];
                for (var _ = 0, j = S; _ < j.length; _++) mu(P, j[_], !0);
                return P;
              })({}, o.defaultProps, x)
            : x;
        },
      }),
      Object.defineProperty(w, "toString", {
        value: function () {
          return ".".concat(w.styledComponentId);
        },
      }),
      s &&
        Vp(w, e, {
          attrs: !0,
          componentStyle: !0,
          displayName: !0,
          foldedComponentIds: !0,
          shouldForwardProp: !0,
          styledComponentId: !0,
          target: !0,
        }),
      w
    );
  }
  function eh(e, t) {
    for (var n = [e[0]], r = 0, i = t.length; r < i; r += 1)
      n.push(t[r], e[r + 1]);
    return n;
  }
  var th = function (e) {
    return Object.assign(e, { isCss: !0 });
  };
  function _i(e) {
    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
    if (Or(e) || ki(e)) {
      var r = e;
      return th(jn(eh(Mp, os([r], t, !0))));
    }
    var i = e;
    return t.length === 0 && i.length === 1 && typeof i[0] == "string"
      ? jn(i)
      : th(jn(eh(i, t)));
  }
  function wu(e, t, n) {
    if ((n === void 0 && (n = An), !t)) throw Oi(1, t);
    var r = function (i) {
      for (var o = [], s = 1; s < arguments.length; s++)
        o[s - 1] = arguments[s];
      return e(t, n, _i.apply(void 0, os([i], o, !1)));
    };
    return (
      (r.attrs = function (i) {
        return wu(
          e,
          t,
          be(be({}, n), {
            attrs: Array.prototype.concat(n.attrs, i).filter(Boolean),
          })
        );
      }),
      (r.withConfig = function (i) {
        return wu(e, t, be(be({}, n), i));
      }),
      r
    );
  }
  function nh(e) {
    return wu(hy, e);
  }
  var B = nh;
  Np.forEach(function (e) {
    B[e] = nh(e);
  });
  const Zx = "",
    eE = "",
    tE = "",
    nE = "";
  function rh(e) {
    return (
      e !== null &&
      typeof e == "object" &&
      "constructor" in e &&
      e.constructor === Object
    );
  }
  function Su(e, t) {
    e === void 0 && (e = {}),
      t === void 0 && (t = {}),
      Object.keys(t).forEach((n) => {
        typeof e[n] > "u"
          ? (e[n] = t[n])
          : rh(t[n]) &&
            rh(e[n]) &&
            Object.keys(t[n]).length > 0 &&
            Su(e[n], t[n]);
      });
  }
  const ih = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: { blur() {}, nodeName: "" },
    querySelector() {
      return null;
    },
    querySelectorAll() {
      return [];
    },
    getElementById() {
      return null;
    },
    createEvent() {
      return { initEvent() {} };
    },
    createElement() {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {},
        getElementsByTagName() {
          return [];
        },
      };
    },
    createElementNS() {
      return {};
    },
    importNode() {
      return null;
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
  };
  function Dn() {
    const e = typeof document < "u" ? document : {};
    return Su(e, ih), e;
  }
  const my = {
    document: ih,
    navigator: { userAgent: "" },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
    history: { replaceState() {}, pushState() {}, go() {}, back() {} },
    CustomEvent: function () {
      return this;
    },
    addEventListener() {},
    removeEventListener() {},
    getComputedStyle() {
      return {
        getPropertyValue() {
          return "";
        },
      };
    },
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia() {
      return {};
    },
    requestAnimationFrame(e) {
      return typeof setTimeout > "u" ? (e(), null) : setTimeout(e, 0);
    },
    cancelAnimationFrame(e) {
      typeof setTimeout > "u" || clearTimeout(e);
    },
  };
  function Ke() {
    const e = typeof window < "u" ? window : {};
    return Su(e, my), e;
  }
  function gy(e) {
    const t = e;
    Object.keys(t).forEach((n) => {
      try {
        t[n] = null;
      } catch {}
      try {
        delete t[n];
      } catch {}
    });
  }
  function xu(e, t) {
    return t === void 0 && (t = 0), setTimeout(e, t);
  }
  function vs() {
    return Date.now();
  }
  function vy(e) {
    const t = Ke();
    let n;
    return (
      t.getComputedStyle && (n = t.getComputedStyle(e, null)),
      !n && e.currentStyle && (n = e.currentStyle),
      n || (n = e.style),
      n
    );
  }
  function yy(e, t) {
    t === void 0 && (t = "x");
    const n = Ke();
    let r, i, o;
    const s = vy(e);
    return (
      n.WebKitCSSMatrix
        ? ((i = s.transform || s.webkitTransform),
          i.split(",").length > 6 &&
            (i = i
              .split(", ")
              .map((l) => l.replace(",", "."))
              .join(", ")),
          (o = new n.WebKitCSSMatrix(i === "none" ? "" : i)))
        : ((o =
            s.MozTransform ||
            s.OTransform ||
            s.MsTransform ||
            s.msTransform ||
            s.transform ||
            s
              .getPropertyValue("transform")
              .replace("translate(", "matrix(1, 0, 0, 1,")),
          (r = o.toString().split(","))),
      t === "x" &&
        (n.WebKitCSSMatrix
          ? (i = o.m41)
          : r.length === 16
          ? (i = parseFloat(r[12]))
          : (i = parseFloat(r[4]))),
      t === "y" &&
        (n.WebKitCSSMatrix
          ? (i = o.m42)
          : r.length === 16
          ? (i = parseFloat(r[13]))
          : (i = parseFloat(r[5]))),
      i || 0
    );
  }
  function ys(e) {
    return (
      typeof e == "object" &&
      e !== null &&
      e.constructor &&
      Object.prototype.toString.call(e).slice(8, -1) === "Object"
    );
  }
  function wy(e) {
    return typeof window < "u" && typeof window.HTMLElement < "u"
      ? e instanceof HTMLElement
      : e && (e.nodeType === 1 || e.nodeType === 11);
  }
  function Xe() {
    const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
      t = ["__proto__", "constructor", "prototype"];
    for (let n = 1; n < arguments.length; n += 1) {
      const r = n < 0 || arguments.length <= n ? void 0 : arguments[n];
      if (r != null && !wy(r)) {
        const i = Object.keys(Object(r)).filter((o) => t.indexOf(o) < 0);
        for (let o = 0, s = i.length; o < s; o += 1) {
          const l = i[o],
            a = Object.getOwnPropertyDescriptor(r, l);
          a !== void 0 &&
            a.enumerable &&
            (ys(e[l]) && ys(r[l])
              ? r[l].__swiper__
                ? (e[l] = r[l])
                : Xe(e[l], r[l])
              : !ys(e[l]) && ys(r[l])
              ? ((e[l] = {}), r[l].__swiper__ ? (e[l] = r[l]) : Xe(e[l], r[l]))
              : (e[l] = r[l]));
        }
      }
    }
    return e;
  }
  function ws(e, t, n) {
    e.style.setProperty(t, n);
  }
  function oh(e) {
    let { swiper: t, targetPosition: n, side: r } = e;
    const i = Ke(),
      o = -t.translate;
    let s = null,
      l;
    const a = t.params.speed;
    (t.wrapperEl.style.scrollSnapType = "none"),
      i.cancelAnimationFrame(t.cssModeFrameID);
    const u = n > o ? "next" : "prev",
      c = (p, h) => (u === "next" && p >= h) || (u === "prev" && p <= h),
      d = () => {
        (l = new Date().getTime()), s === null && (s = l);
        const p = Math.max(Math.min((l - s) / a, 1), 0),
          h = 0.5 - Math.cos(p * Math.PI) / 2;
        let g = o + h * (n - o);
        if ((c(g, n) && (g = n), t.wrapperEl.scrollTo({ [r]: g }), c(g, n))) {
          (t.wrapperEl.style.overflow = "hidden"),
            (t.wrapperEl.style.scrollSnapType = ""),
            setTimeout(() => {
              (t.wrapperEl.style.overflow = ""),
                t.wrapperEl.scrollTo({ [r]: g });
            }),
            i.cancelAnimationFrame(t.cssModeFrameID);
          return;
        }
        t.cssModeFrameID = i.requestAnimationFrame(d);
      };
    d();
  }
  function Vt(e, t) {
    return (
      t === void 0 && (t = ""), [...e.children].filter((n) => n.matches(t))
    );
  }
  function Sy(e, t) {
    t === void 0 && (t = []);
    const n = document.createElement(e);
    return n.classList.add(...(Array.isArray(t) ? t : [t])), n;
  }
  function xy(e, t) {
    const n = [];
    for (; e.previousElementSibling; ) {
      const r = e.previousElementSibling;
      t ? r.matches(t) && n.push(r) : n.push(r), (e = r);
    }
    return n;
  }
  function Ey(e, t) {
    const n = [];
    for (; e.nextElementSibling; ) {
      const r = e.nextElementSibling;
      t ? r.matches(t) && n.push(r) : n.push(r), (e = r);
    }
    return n;
  }
  function hn(e, t) {
    return Ke().getComputedStyle(e, null).getPropertyValue(t);
  }
  function sh(e) {
    let t = e,
      n;
    if (t) {
      for (n = 0; (t = t.previousSibling) !== null; )
        t.nodeType === 1 && (n += 1);
      return n;
    }
  }
  function Ty(e, t) {
    const n = [];
    let r = e.parentElement;
    for (; r; )
      t ? r.matches(t) && n.push(r) : n.push(r), (r = r.parentElement);
    return n;
  }
  function lh(e, t, n) {
    const r = Ke();
    return n
      ? e[t === "width" ? "offsetWidth" : "offsetHeight"] +
          parseFloat(
            r
              .getComputedStyle(e, null)
              .getPropertyValue(t === "width" ? "margin-right" : "margin-top")
          ) +
          parseFloat(
            r
              .getComputedStyle(e, null)
              .getPropertyValue(t === "width" ? "margin-left" : "margin-bottom")
          )
      : e.offsetWidth;
  }
  let Eu;
  function Cy() {
    const e = Ke(),
      t = Dn();
    return {
      smoothScroll:
        t.documentElement &&
        t.documentElement.style &&
        "scrollBehavior" in t.documentElement.style,
      touch: !!(
        "ontouchstart" in e ||
        (e.DocumentTouch && t instanceof e.DocumentTouch)
      ),
    };
  }
  function ah() {
    return Eu || (Eu = Cy()), Eu;
  }
  let Tu;
  function Py(e) {
    let { userAgent: t } = e === void 0 ? {} : e;
    const n = ah(),
      r = Ke(),
      i = r.navigator.platform,
      o = t || r.navigator.userAgent,
      s = { ios: !1, android: !1 },
      l = r.screen.width,
      a = r.screen.height,
      u = o.match(/(Android);?[\s\/]+([\d.]+)?/);
    let c = o.match(/(iPad).*OS\s([\d_]+)/);
    const d = o.match(/(iPod)(.*OS\s([\d_]+))?/),
      p = !c && o.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
      h = i === "Win32";
    let g = i === "MacIntel";
    const y = [
      "1024x1366",
      "1366x1024",
      "834x1194",
      "1194x834",
      "834x1112",
      "1112x834",
      "768x1024",
      "1024x768",
      "820x1180",
      "1180x820",
      "810x1080",
      "1080x810",
    ];
    return (
      !c &&
        g &&
        n.touch &&
        y.indexOf(`${l}x${a}`) >= 0 &&
        ((c = o.match(/(Version)\/([\d.]+)/)),
        c || (c = [0, 1, "13_0_0"]),
        (g = !1)),
      u && !h && ((s.os = "android"), (s.android = !0)),
      (c || p || d) && ((s.os = "ios"), (s.ios = !0)),
      s
    );
  }
  function ky(e) {
    return e === void 0 && (e = {}), Tu || (Tu = Py(e)), Tu;
  }
  let Cu;
  function Oy() {
    const e = Ke();
    let t = !1;
    function n() {
      const r = e.navigator.userAgent.toLowerCase();
      return (
        r.indexOf("safari") >= 0 &&
        r.indexOf("chrome") < 0 &&
        r.indexOf("android") < 0
      );
    }
    if (n()) {
      const r = String(e.navigator.userAgent);
      if (r.includes("Version/")) {
        const [i, o] = r
          .split("Version/")[1]
          .split(" ")[0]
          .split(".")
          .map((s) => Number(s));
        t = i < 16 || (i === 16 && o < 2);
      }
    }
    return {
      isSafari: t || n(),
      needPerspectiveFix: t,
      isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
        e.navigator.userAgent
      ),
    };
  }
  function _y() {
    return Cu || (Cu = Oy()), Cu;
  }
  function Iy(e) {
    let { swiper: t, on: n, emit: r } = e;
    const i = Ke();
    let o = null,
      s = null;
    const l = () => {
        !t || t.destroyed || !t.initialized || (r("beforeResize"), r("resize"));
      },
      a = () => {
        !t ||
          t.destroyed ||
          !t.initialized ||
          ((o = new ResizeObserver((d) => {
            s = i.requestAnimationFrame(() => {
              const { width: p, height: h } = t;
              let g = p,
                y = h;
              d.forEach((T) => {
                let { contentBoxSize: f, contentRect: m, target: v } = T;
                (v && v !== t.el) ||
                  ((g = m ? m.width : (f[0] || f).inlineSize),
                  (y = m ? m.height : (f[0] || f).blockSize));
              }),
                (g !== p || y !== h) && l();
            });
          })),
          o.observe(t.el));
      },
      u = () => {
        s && i.cancelAnimationFrame(s),
          o && o.unobserve && t.el && (o.unobserve(t.el), (o = null));
      },
      c = () => {
        !t || t.destroyed || !t.initialized || r("orientationchange");
      };
    n("init", () => {
      if (t.params.resizeObserver && typeof i.ResizeObserver < "u") {
        a();
        return;
      }
      i.addEventListener("resize", l),
        i.addEventListener("orientationchange", c);
    }),
      n("destroy", () => {
        u(),
          i.removeEventListener("resize", l),
          i.removeEventListener("orientationchange", c);
      });
  }
  function Ly(e) {
    let { swiper: t, extendParams: n, on: r, emit: i } = e;
    const o = [],
      s = Ke(),
      l = function (c, d) {
        d === void 0 && (d = {});
        const p = s.MutationObserver || s.WebkitMutationObserver,
          h = new p((g) => {
            if (t.__preventObserver__) return;
            if (g.length === 1) {
              i("observerUpdate", g[0]);
              return;
            }
            const y = function () {
              i("observerUpdate", g[0]);
            };
            s.requestAnimationFrame
              ? s.requestAnimationFrame(y)
              : s.setTimeout(y, 0);
          });
        h.observe(c, {
          attributes: typeof d.attributes > "u" ? !0 : d.attributes,
          childList: typeof d.childList > "u" ? !0 : d.childList,
          characterData: typeof d.characterData > "u" ? !0 : d.characterData,
        }),
          o.push(h);
      },
      a = () => {
        if (t.params.observer) {
          if (t.params.observeParents) {
            const c = Ty(t.el);
            for (let d = 0; d < c.length; d += 1) l(c[d]);
          }
          l(t.el, { childList: t.params.observeSlideChildren }),
            l(t.wrapperEl, { attributes: !1 });
        }
      },
      u = () => {
        o.forEach((c) => {
          c.disconnect();
        }),
          o.splice(0, o.length);
      };
    n({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
      r("init", a),
      r("destroy", u);
  }
  var My = {
    on(e, t, n) {
      const r = this;
      if (!r.eventsListeners || r.destroyed || typeof t != "function") return r;
      const i = n ? "unshift" : "push";
      return (
        e.split(" ").forEach((o) => {
          r.eventsListeners[o] || (r.eventsListeners[o] = []),
            r.eventsListeners[o][i](t);
        }),
        r
      );
    },
    once(e, t, n) {
      const r = this;
      if (!r.eventsListeners || r.destroyed || typeof t != "function") return r;
      function i() {
        r.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
        for (var o = arguments.length, s = new Array(o), l = 0; l < o; l++)
          s[l] = arguments[l];
        t.apply(r, s);
      }
      return (i.__emitterProxy = t), r.on(e, i, n);
    },
    onAny(e, t) {
      const n = this;
      if (!n.eventsListeners || n.destroyed || typeof e != "function") return n;
      const r = t ? "unshift" : "push";
      return (
        n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[r](e), n
      );
    },
    offAny(e) {
      const t = this;
      if (!t.eventsListeners || t.destroyed || !t.eventsAnyListeners) return t;
      const n = t.eventsAnyListeners.indexOf(e);
      return n >= 0 && t.eventsAnyListeners.splice(n, 1), t;
    },
    off(e, t) {
      const n = this;
      return (
        !n.eventsListeners ||
          n.destroyed ||
          !n.eventsListeners ||
          e.split(" ").forEach((r) => {
            typeof t > "u"
              ? (n.eventsListeners[r] = [])
              : n.eventsListeners[r] &&
                n.eventsListeners[r].forEach((i, o) => {
                  (i === t || (i.__emitterProxy && i.__emitterProxy === t)) &&
                    n.eventsListeners[r].splice(o, 1);
                });
          }),
        n
      );
    },
    emit() {
      const e = this;
      if (!e.eventsListeners || e.destroyed || !e.eventsListeners) return e;
      let t, n, r;
      for (var i = arguments.length, o = new Array(i), s = 0; s < i; s++)
        o[s] = arguments[s];
      return (
        typeof o[0] == "string" || Array.isArray(o[0])
          ? ((t = o[0]), (n = o.slice(1, o.length)), (r = e))
          : ((t = o[0].events), (n = o[0].data), (r = o[0].context || e)),
        n.unshift(r),
        (Array.isArray(t) ? t : t.split(" ")).forEach((a) => {
          e.eventsAnyListeners &&
            e.eventsAnyListeners.length &&
            e.eventsAnyListeners.forEach((u) => {
              u.apply(r, [a, ...n]);
            }),
            e.eventsListeners &&
              e.eventsListeners[a] &&
              e.eventsListeners[a].forEach((u) => {
                u.apply(r, n);
              });
        }),
        e
      );
    },
  };
  function Ny() {
    const e = this;
    let t, n;
    const r = e.el;
    typeof e.params.width < "u" && e.params.width !== null
      ? (t = e.params.width)
      : (t = r.clientWidth),
      typeof e.params.height < "u" && e.params.height !== null
        ? (n = e.params.height)
        : (n = r.clientHeight),
      !((t === 0 && e.isHorizontal()) || (n === 0 && e.isVertical())) &&
        ((t =
          t -
          parseInt(hn(r, "padding-left") || 0, 10) -
          parseInt(hn(r, "padding-right") || 0, 10)),
        (n =
          n -
          parseInt(hn(r, "padding-top") || 0, 10) -
          parseInt(hn(r, "padding-bottom") || 0, 10)),
        Number.isNaN(t) && (t = 0),
        Number.isNaN(n) && (n = 0),
        Object.assign(e, {
          width: t,
          height: n,
          size: e.isHorizontal() ? t : n,
        }));
  }
  function Ry() {
    const e = this;
    function t(L) {
      return e.isHorizontal()
        ? L
        : {
            width: "height",
            "margin-top": "margin-left",
            "margin-bottom ": "margin-right",
            "margin-left": "margin-top",
            "margin-right": "margin-bottom",
            "padding-left": "padding-top",
            "padding-right": "padding-bottom",
            marginRight: "marginBottom",
          }[L];
    }
    function n(L, $) {
      return parseFloat(L.getPropertyValue(t($)) || 0);
    }
    const r = e.params,
      { wrapperEl: i, slidesEl: o, size: s, rtlTranslate: l, wrongRTL: a } = e,
      u = e.virtual && r.virtual.enabled,
      c = u ? e.virtual.slides.length : e.slides.length,
      d = Vt(o, `.${e.params.slideClass}, swiper-slide`),
      p = u ? e.virtual.slides.length : d.length;
    let h = [];
    const g = [],
      y = [];
    let T = r.slidesOffsetBefore;
    typeof T == "function" && (T = r.slidesOffsetBefore.call(e));
    let f = r.slidesOffsetAfter;
    typeof f == "function" && (f = r.slidesOffsetAfter.call(e));
    const m = e.snapGrid.length,
      v = e.slidesGrid.length;
    let w = r.spaceBetween,
      x = -T,
      P = 0,
      S = 0;
    if (typeof s > "u") return;
    typeof w == "string" && w.indexOf("%") >= 0
      ? (w = (parseFloat(w.replace("%", "")) / 100) * s)
      : typeof w == "string" && (w = parseFloat(w)),
      (e.virtualSize = -w),
      d.forEach((L) => {
        l ? (L.style.marginLeft = "") : (L.style.marginRight = ""),
          (L.style.marginBottom = ""),
          (L.style.marginTop = "");
      }),
      r.centeredSlides &&
        r.cssMode &&
        (ws(i, "--swiper-centered-offset-before", ""),
        ws(i, "--swiper-centered-offset-after", ""));
    const O = r.grid && r.grid.rows > 1 && e.grid;
    O && e.grid.initSlides(p);
    let _;
    const j =
      r.slidesPerView === "auto" &&
      r.breakpoints &&
      Object.keys(r.breakpoints).filter(
        (L) => typeof r.breakpoints[L].slidesPerView < "u"
      ).length > 0;
    for (let L = 0; L < p; L += 1) {
      _ = 0;
      let $;
      if (
        (d[L] && ($ = d[L]),
        O && e.grid.updateSlide(L, $, p, t),
        !(d[L] && hn($, "display") === "none"))
      ) {
        if (r.slidesPerView === "auto") {
          j && (d[L].style[t("width")] = "");
          const V = getComputedStyle($),
            fe = $.style.transform,
            at = $.style.webkitTransform;
          if (
            (fe && ($.style.transform = "none"),
            at && ($.style.webkitTransform = "none"),
            r.roundLengths)
          )
            _ = e.isHorizontal() ? lh($, "width", !0) : lh($, "height", !0);
          else {
            const ut = n(V, "width"),
              St = n(V, "padding-left"),
              N = n(V, "padding-right"),
              A = n(V, "margin-left"),
              D = n(V, "margin-right"),
              Y = V.getPropertyValue("box-sizing");
            if (Y && Y === "border-box") _ = ut + A + D;
            else {
              const { clientWidth: J, offsetWidth: Pe } = $;
              _ = ut + St + N + A + D + (Pe - J);
            }
          }
          fe && ($.style.transform = fe),
            at && ($.style.webkitTransform = at),
            r.roundLengths && (_ = Math.floor(_));
        } else
          (_ = (s - (r.slidesPerView - 1) * w) / r.slidesPerView),
            r.roundLengths && (_ = Math.floor(_)),
            d[L] && (d[L].style[t("width")] = `${_}px`);
        d[L] && (d[L].swiperSlideSize = _),
          y.push(_),
          r.centeredSlides
            ? ((x = x + _ / 2 + P / 2 + w),
              P === 0 && L !== 0 && (x = x - s / 2 - w),
              L === 0 && (x = x - s / 2 - w),
              Math.abs(x) < 1 / 1e3 && (x = 0),
              r.roundLengths && (x = Math.floor(x)),
              S % r.slidesPerGroup === 0 && h.push(x),
              g.push(x))
            : (r.roundLengths && (x = Math.floor(x)),
              (S - Math.min(e.params.slidesPerGroupSkip, S)) %
                e.params.slidesPerGroup ===
                0 && h.push(x),
              g.push(x),
              (x = x + _ + w)),
          (e.virtualSize += _ + w),
          (P = _),
          (S += 1);
      }
    }
    if (
      ((e.virtualSize = Math.max(e.virtualSize, s) + f),
      l &&
        a &&
        (r.effect === "slide" || r.effect === "coverflow") &&
        (i.style.width = `${e.virtualSize + w}px`),
      r.setWrapperSize && (i.style[t("width")] = `${e.virtualSize + w}px`),
      O && e.grid.updateWrapperSize(_, h, t),
      !r.centeredSlides)
    ) {
      const L = [];
      for (let $ = 0; $ < h.length; $ += 1) {
        let V = h[$];
        r.roundLengths && (V = Math.floor(V)),
          h[$] <= e.virtualSize - s && L.push(V);
      }
      (h = L),
        Math.floor(e.virtualSize - s) - Math.floor(h[h.length - 1]) > 1 &&
          h.push(e.virtualSize - s);
    }
    if (u && r.loop) {
      const L = y[0] + w;
      if (r.slidesPerGroup > 1) {
        const $ = Math.ceil(
            (e.virtual.slidesBefore + e.virtual.slidesAfter) / r.slidesPerGroup
          ),
          V = L * r.slidesPerGroup;
        for (let fe = 0; fe < $; fe += 1) h.push(h[h.length - 1] + V);
      }
      for (
        let $ = 0;
        $ < e.virtual.slidesBefore + e.virtual.slidesAfter;
        $ += 1
      )
        r.slidesPerGroup === 1 && h.push(h[h.length - 1] + L),
          g.push(g[g.length - 1] + L),
          (e.virtualSize += L);
    }
    if ((h.length === 0 && (h = [0]), w !== 0)) {
      const L = e.isHorizontal() && l ? "marginLeft" : t("marginRight");
      d.filter(($, V) =>
        !r.cssMode || r.loop ? !0 : V !== d.length - 1
      ).forEach(($) => {
        $.style[L] = `${w}px`;
      });
    }
    if (r.centeredSlides && r.centeredSlidesBounds) {
      let L = 0;
      y.forEach((V) => {
        L += V + (w || 0);
      }),
        (L -= w);
      const $ = L - s;
      h = h.map((V) => (V <= 0 ? -T : V > $ ? $ + f : V));
    }
    if (r.centerInsufficientSlides) {
      let L = 0;
      if (
        (y.forEach(($) => {
          L += $ + (w || 0);
        }),
        (L -= w),
        L < s)
      ) {
        const $ = (s - L) / 2;
        h.forEach((V, fe) => {
          h[fe] = V - $;
        }),
          g.forEach((V, fe) => {
            g[fe] = V + $;
          });
      }
    }
    if (
      (Object.assign(e, {
        slides: d,
        snapGrid: h,
        slidesGrid: g,
        slidesSizesGrid: y,
      }),
      r.centeredSlides && r.cssMode && !r.centeredSlidesBounds)
    ) {
      ws(i, "--swiper-centered-offset-before", `${-h[0]}px`),
        ws(
          i,
          "--swiper-centered-offset-after",
          `${e.size / 2 - y[y.length - 1] / 2}px`
        );
      const L = -e.snapGrid[0],
        $ = -e.slidesGrid[0];
      (e.snapGrid = e.snapGrid.map((V) => V + L)),
        (e.slidesGrid = e.slidesGrid.map((V) => V + $));
    }
    if (
      (p !== c && e.emit("slidesLengthChange"),
      h.length !== m &&
        (e.params.watchOverflow && e.checkOverflow(),
        e.emit("snapGridLengthChange")),
      g.length !== v && e.emit("slidesGridLengthChange"),
      r.watchSlidesProgress && e.updateSlidesOffset(),
      !u && !r.cssMode && (r.effect === "slide" || r.effect === "fade"))
    ) {
      const L = `${r.containerModifierClass}backface-hidden`,
        $ = e.el.classList.contains(L);
      p <= r.maxBackfaceHiddenSlides
        ? $ || e.el.classList.add(L)
        : $ && e.el.classList.remove(L);
    }
  }
  function zy(e) {
    const t = this,
      n = [],
      r = t.virtual && t.params.virtual.enabled;
    let i = 0,
      o;
    typeof e == "number"
      ? t.setTransition(e)
      : e === !0 && t.setTransition(t.params.speed);
    const s = (l) => (r ? t.slides[t.getSlideIndexByData(l)] : t.slides[l]);
    if (t.params.slidesPerView !== "auto" && t.params.slidesPerView > 1)
      if (t.params.centeredSlides)
        (t.visibleSlides || []).forEach((l) => {
          n.push(l);
        });
      else
        for (o = 0; o < Math.ceil(t.params.slidesPerView); o += 1) {
          const l = t.activeIndex + o;
          if (l > t.slides.length && !r) break;
          n.push(s(l));
        }
    else n.push(s(t.activeIndex));
    for (o = 0; o < n.length; o += 1)
      if (typeof n[o] < "u") {
        const l = n[o].offsetHeight;
        i = l > i ? l : i;
      }
    (i || i === 0) && (t.wrapperEl.style.height = `${i}px`);
  }
  function Ay() {
    const e = this,
      t = e.slides,
      n = e.isElement
        ? e.isHorizontal()
          ? e.wrapperEl.offsetLeft
          : e.wrapperEl.offsetTop
        : 0;
    for (let r = 0; r < t.length; r += 1)
      t[r].swiperSlideOffset =
        (e.isHorizontal() ? t[r].offsetLeft : t[r].offsetTop) -
        n -
        e.cssOverflowAdjustment();
  }
  function $y(e) {
    e === void 0 && (e = (this && this.translate) || 0);
    const t = this,
      n = t.params,
      { slides: r, rtlTranslate: i, snapGrid: o } = t;
    if (r.length === 0) return;
    typeof r[0].swiperSlideOffset > "u" && t.updateSlidesOffset();
    let s = -e;
    i && (s = e),
      r.forEach((a) => {
        a.classList.remove(n.slideVisibleClass);
      }),
      (t.visibleSlidesIndexes = []),
      (t.visibleSlides = []);
    let l = n.spaceBetween;
    typeof l == "string" && l.indexOf("%") >= 0
      ? (l = (parseFloat(l.replace("%", "")) / 100) * t.size)
      : typeof l == "string" && (l = parseFloat(l));
    for (let a = 0; a < r.length; a += 1) {
      const u = r[a];
      let c = u.swiperSlideOffset;
      n.cssMode && n.centeredSlides && (c -= r[0].swiperSlideOffset);
      const d =
          (s + (n.centeredSlides ? t.minTranslate() : 0) - c) /
          (u.swiperSlideSize + l),
        p =
          (s - o[0] + (n.centeredSlides ? t.minTranslate() : 0) - c) /
          (u.swiperSlideSize + l),
        h = -(s - c),
        g = h + t.slidesSizesGrid[a];
      ((h >= 0 && h < t.size - 1) ||
        (g > 1 && g <= t.size) ||
        (h <= 0 && g >= t.size)) &&
        (t.visibleSlides.push(u),
        t.visibleSlidesIndexes.push(a),
        r[a].classList.add(n.slideVisibleClass)),
        (u.progress = i ? -d : d),
        (u.originalProgress = i ? -p : p);
    }
  }
  function jy(e) {
    const t = this;
    if (typeof e > "u") {
      const c = t.rtlTranslate ? -1 : 1;
      e = (t && t.translate && t.translate * c) || 0;
    }
    const n = t.params,
      r = t.maxTranslate() - t.minTranslate();
    let { progress: i, isBeginning: o, isEnd: s, progressLoop: l } = t;
    const a = o,
      u = s;
    if (r === 0) (i = 0), (o = !0), (s = !0);
    else {
      i = (e - t.minTranslate()) / r;
      const c = Math.abs(e - t.minTranslate()) < 1,
        d = Math.abs(e - t.maxTranslate()) < 1;
      (o = c || i <= 0), (s = d || i >= 1), c && (i = 0), d && (i = 1);
    }
    if (n.loop) {
      const c = t.getSlideIndexByData(0),
        d = t.getSlideIndexByData(t.slides.length - 1),
        p = t.slidesGrid[c],
        h = t.slidesGrid[d],
        g = t.slidesGrid[t.slidesGrid.length - 1],
        y = Math.abs(e);
      y >= p ? (l = (y - p) / g) : (l = (y + g - h) / g), l > 1 && (l -= 1);
    }
    Object.assign(t, {
      progress: i,
      progressLoop: l,
      isBeginning: o,
      isEnd: s,
    }),
      (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
        t.updateSlidesProgress(e),
      o && !a && t.emit("reachBeginning toEdge"),
      s && !u && t.emit("reachEnd toEdge"),
      ((a && !o) || (u && !s)) && t.emit("fromEdge"),
      t.emit("progress", i);
  }
  function Dy() {
    const e = this,
      { slides: t, params: n, slidesEl: r, activeIndex: i } = e,
      o = e.virtual && n.virtual.enabled,
      s = (a) => Vt(r, `.${n.slideClass}${a}, swiper-slide${a}`)[0];
    t.forEach((a) => {
      a.classList.remove(
        n.slideActiveClass,
        n.slideNextClass,
        n.slidePrevClass
      );
    });
    let l;
    if (o)
      if (n.loop) {
        let a = i - e.virtual.slidesBefore;
        a < 0 && (a = e.virtual.slides.length + a),
          a >= e.virtual.slides.length && (a -= e.virtual.slides.length),
          (l = s(`[data-swiper-slide-index="${a}"]`));
      } else l = s(`[data-swiper-slide-index="${i}"]`);
    else l = t[i];
    if (l) {
      l.classList.add(n.slideActiveClass);
      let a = Ey(l, `.${n.slideClass}, swiper-slide`)[0];
      n.loop && !a && (a = t[0]), a && a.classList.add(n.slideNextClass);
      let u = xy(l, `.${n.slideClass}, swiper-slide`)[0];
      n.loop && !u === 0 && (u = t[t.length - 1]),
        u && u.classList.add(n.slidePrevClass);
    }
    e.emitSlidesClasses();
  }
  const Ss = (e, t) => {
      if (!e || e.destroyed || !e.params) return;
      const n = () =>
          e.isElement ? "swiper-slide" : `.${e.params.slideClass}`,
        r = t.closest(n());
      if (r) {
        const i = r.querySelector(`.${e.params.lazyPreloaderClass}`);
        i && i.remove();
      }
    },
    Pu = (e, t) => {
      if (!e.slides[t]) return;
      const n = e.slides[t].querySelector('[loading="lazy"]');
      n && n.removeAttribute("loading");
    },
    ku = (e) => {
      if (!e || e.destroyed || !e.params) return;
      let t = e.params.lazyPreloadPrevNext;
      const n = e.slides.length;
      if (!n || !t || t < 0) return;
      t = Math.min(t, n);
      const r =
          e.params.slidesPerView === "auto"
            ? e.slidesPerViewDynamic()
            : Math.ceil(e.params.slidesPerView),
        i = e.activeIndex;
      if (e.params.grid && e.params.grid.rows > 1) {
        const s = i,
          l = [s - t];
        l.push(...Array.from({ length: t }).map((a, u) => s + r + u)),
          e.slides.forEach((a, u) => {
            l.includes(a.column) && Pu(e, u);
          });
        return;
      }
      const o = i + r - 1;
      if (e.params.rewind || e.params.loop)
        for (let s = i - t; s <= o + t; s += 1) {
          const l = ((s % n) + n) % n;
          (l < i || l > o) && Pu(e, l);
        }
      else
        for (let s = Math.max(i - t, 0); s <= Math.min(o + t, n - 1); s += 1)
          s !== i && (s > o || s < i) && Pu(e, s);
    };
  function by(e) {
    const { slidesGrid: t, params: n } = e,
      r = e.rtlTranslate ? e.translate : -e.translate;
    let i;
    for (let o = 0; o < t.length; o += 1)
      typeof t[o + 1] < "u"
        ? r >= t[o] && r < t[o + 1] - (t[o + 1] - t[o]) / 2
          ? (i = o)
          : r >= t[o] && r < t[o + 1] && (i = o + 1)
        : r >= t[o] && (i = o);
    return n.normalizeSlideIndex && (i < 0 || typeof i > "u") && (i = 0), i;
  }
  function Fy(e) {
    const t = this,
      n = t.rtlTranslate ? t.translate : -t.translate,
      {
        snapGrid: r,
        params: i,
        activeIndex: o,
        realIndex: s,
        snapIndex: l,
      } = t;
    let a = e,
      u;
    const c = (p) => {
      let h = p - t.virtual.slidesBefore;
      return (
        h < 0 && (h = t.virtual.slides.length + h),
        h >= t.virtual.slides.length && (h -= t.virtual.slides.length),
        h
      );
    };
    if ((typeof a > "u" && (a = by(t)), r.indexOf(n) >= 0)) u = r.indexOf(n);
    else {
      const p = Math.min(i.slidesPerGroupSkip, a);
      u = p + Math.floor((a - p) / i.slidesPerGroup);
    }
    if ((u >= r.length && (u = r.length - 1), a === o)) {
      u !== l && ((t.snapIndex = u), t.emit("snapIndexChange")),
        t.params.loop &&
          t.virtual &&
          t.params.virtual.enabled &&
          (t.realIndex = c(a));
      return;
    }
    let d;
    t.virtual && i.virtual.enabled && i.loop
      ? (d = c(a))
      : t.slides[a]
      ? (d = parseInt(
          t.slides[a].getAttribute("data-swiper-slide-index") || a,
          10
        ))
      : (d = a),
      Object.assign(t, {
        previousSnapIndex: l,
        snapIndex: u,
        previousRealIndex: s,
        realIndex: d,
        previousIndex: o,
        activeIndex: a,
      }),
      t.initialized && ku(t),
      t.emit("activeIndexChange"),
      t.emit("snapIndexChange"),
      s !== d && t.emit("realIndexChange"),
      (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange");
  }
  function By(e) {
    const t = this,
      n = t.params,
      r = e.closest(`.${n.slideClass}, swiper-slide`);
    let i = !1,
      o;
    if (r) {
      for (let s = 0; s < t.slides.length; s += 1)
        if (t.slides[s] === r) {
          (i = !0), (o = s);
          break;
        }
    }
    if (r && i)
      (t.clickedSlide = r),
        t.virtual && t.params.virtual.enabled
          ? (t.clickedIndex = parseInt(
              r.getAttribute("data-swiper-slide-index"),
              10
            ))
          : (t.clickedIndex = o);
    else {
      (t.clickedSlide = void 0), (t.clickedIndex = void 0);
      return;
    }
    n.slideToClickedSlide &&
      t.clickedIndex !== void 0 &&
      t.clickedIndex !== t.activeIndex &&
      t.slideToClickedSlide();
  }
  var Vy = {
    updateSize: Ny,
    updateSlides: Ry,
    updateAutoHeight: zy,
    updateSlidesOffset: Ay,
    updateSlidesProgress: $y,
    updateProgress: jy,
    updateSlidesClasses: Dy,
    updateActiveIndex: Fy,
    updateClickedSlide: By,
  };
  function Uy(e) {
    e === void 0 && (e = this.isHorizontal() ? "x" : "y");
    const t = this,
      { params: n, rtlTranslate: r, translate: i, wrapperEl: o } = t;
    if (n.virtualTranslate) return r ? -i : i;
    if (n.cssMode) return i;
    let s = yy(o, e);
    return (s += t.cssOverflowAdjustment()), r && (s = -s), s || 0;
  }
  function Hy(e, t) {
    const n = this,
      { rtlTranslate: r, params: i, wrapperEl: o, progress: s } = n;
    let l = 0,
      a = 0;
    const u = 0;
    n.isHorizontal() ? (l = r ? -e : e) : (a = e),
      i.roundLengths && ((l = Math.floor(l)), (a = Math.floor(a))),
      (n.previousTranslate = n.translate),
      (n.translate = n.isHorizontal() ? l : a),
      i.cssMode
        ? (o[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal()
            ? -l
            : -a)
        : i.virtualTranslate ||
          (n.isHorizontal()
            ? (l -= n.cssOverflowAdjustment())
            : (a -= n.cssOverflowAdjustment()),
          (o.style.transform = `translate3d(${l}px, ${a}px, ${u}px)`));
    let c;
    const d = n.maxTranslate() - n.minTranslate();
    d === 0 ? (c = 0) : (c = (e - n.minTranslate()) / d),
      c !== s && n.updateProgress(e),
      n.emit("setTranslate", n.translate, t);
  }
  function Wy() {
    return -this.snapGrid[0];
  }
  function Gy() {
    return -this.snapGrid[this.snapGrid.length - 1];
  }
  function Yy(e, t, n, r, i) {
    e === void 0 && (e = 0),
      t === void 0 && (t = this.params.speed),
      n === void 0 && (n = !0),
      r === void 0 && (r = !0);
    const o = this,
      { params: s, wrapperEl: l } = o;
    if (o.animating && s.preventInteractionOnTransition) return !1;
    const a = o.minTranslate(),
      u = o.maxTranslate();
    let c;
    if (
      (r && e > a ? (c = a) : r && e < u ? (c = u) : (c = e),
      o.updateProgress(c),
      s.cssMode)
    ) {
      const d = o.isHorizontal();
      if (t === 0) l[d ? "scrollLeft" : "scrollTop"] = -c;
      else {
        if (!o.support.smoothScroll)
          return (
            oh({ swiper: o, targetPosition: -c, side: d ? "left" : "top" }), !0
          );
        l.scrollTo({ [d ? "left" : "top"]: -c, behavior: "smooth" });
      }
      return !0;
    }
    return (
      t === 0
        ? (o.setTransition(0),
          o.setTranslate(c),
          n && (o.emit("beforeTransitionStart", t, i), o.emit("transitionEnd")))
        : (o.setTransition(t),
          o.setTranslate(c),
          n &&
            (o.emit("beforeTransitionStart", t, i), o.emit("transitionStart")),
          o.animating ||
            ((o.animating = !0),
            o.onTranslateToWrapperTransitionEnd ||
              (o.onTranslateToWrapperTransitionEnd = function (p) {
                !o ||
                  o.destroyed ||
                  (p.target === this &&
                    (o.wrapperEl.removeEventListener(
                      "transitionend",
                      o.onTranslateToWrapperTransitionEnd
                    ),
                    (o.onTranslateToWrapperTransitionEnd = null),
                    delete o.onTranslateToWrapperTransitionEnd,
                    n && o.emit("transitionEnd")));
              }),
            o.wrapperEl.addEventListener(
              "transitionend",
              o.onTranslateToWrapperTransitionEnd
            ))),
      !0
    );
  }
  var Qy = {
    getTranslate: Uy,
    setTranslate: Hy,
    minTranslate: Wy,
    maxTranslate: Gy,
    translateTo: Yy,
  };
  function Ky(e, t) {
    const n = this;
    n.params.cssMode || (n.wrapperEl.style.transitionDuration = `${e}ms`),
      n.emit("setTransition", e, t);
  }
  function uh(e) {
    let { swiper: t, runCallbacks: n, direction: r, step: i } = e;
    const { activeIndex: o, previousIndex: s } = t;
    let l = r;
    if (
      (l || (o > s ? (l = "next") : o < s ? (l = "prev") : (l = "reset")),
      t.emit(`transition${i}`),
      n && o !== s)
    ) {
      if (l === "reset") {
        t.emit(`slideResetTransition${i}`);
        return;
      }
      t.emit(`slideChangeTransition${i}`),
        l === "next"
          ? t.emit(`slideNextTransition${i}`)
          : t.emit(`slidePrevTransition${i}`);
    }
  }
  function Xy(e, t) {
    e === void 0 && (e = !0);
    const n = this,
      { params: r } = n;
    r.cssMode ||
      (r.autoHeight && n.updateAutoHeight(),
      uh({ swiper: n, runCallbacks: e, direction: t, step: "Start" }));
  }
  function qy(e, t) {
    e === void 0 && (e = !0);
    const n = this,
      { params: r } = n;
    (n.animating = !1),
      !r.cssMode &&
        (n.setTransition(0),
        uh({ swiper: n, runCallbacks: e, direction: t, step: "End" }));
  }
  var Jy = { setTransition: Ky, transitionStart: Xy, transitionEnd: qy };
  function Zy(e, t, n, r, i) {
    e === void 0 && (e = 0),
      t === void 0 && (t = this.params.speed),
      n === void 0 && (n = !0),
      typeof e == "string" && (e = parseInt(e, 10));
    const o = this;
    let s = e;
    s < 0 && (s = 0);
    const {
      params: l,
      snapGrid: a,
      slidesGrid: u,
      previousIndex: c,
      activeIndex: d,
      rtlTranslate: p,
      wrapperEl: h,
      enabled: g,
    } = o;
    if ((o.animating && l.preventInteractionOnTransition) || (!g && !r && !i))
      return !1;
    const y = Math.min(o.params.slidesPerGroupSkip, s);
    let T = y + Math.floor((s - y) / o.params.slidesPerGroup);
    T >= a.length && (T = a.length - 1);
    const f = -a[T];
    if (l.normalizeSlideIndex)
      for (let v = 0; v < u.length; v += 1) {
        const w = -Math.floor(f * 100),
          x = Math.floor(u[v] * 100),
          P = Math.floor(u[v + 1] * 100);
        typeof u[v + 1] < "u"
          ? w >= x && w < P - (P - x) / 2
            ? (s = v)
            : w >= x && w < P && (s = v + 1)
          : w >= x && (s = v);
      }
    if (
      o.initialized &&
      s !== d &&
      ((!o.allowSlideNext &&
        (p
          ? f > o.translate && f > o.minTranslate()
          : f < o.translate && f < o.minTranslate())) ||
        (!o.allowSlidePrev &&
          f > o.translate &&
          f > o.maxTranslate() &&
          (d || 0) !== s))
    )
      return !1;
    s !== (c || 0) && n && o.emit("beforeSlideChangeStart"),
      o.updateProgress(f);
    let m;
    if (
      (s > d ? (m = "next") : s < d ? (m = "prev") : (m = "reset"),
      (p && -f === o.translate) || (!p && f === o.translate))
    )
      return (
        o.updateActiveIndex(s),
        l.autoHeight && o.updateAutoHeight(),
        o.updateSlidesClasses(),
        l.effect !== "slide" && o.setTranslate(f),
        m !== "reset" && (o.transitionStart(n, m), o.transitionEnd(n, m)),
        !1
      );
    if (l.cssMode) {
      const v = o.isHorizontal(),
        w = p ? f : -f;
      if (t === 0) {
        const x = o.virtual && o.params.virtual.enabled;
        x &&
          ((o.wrapperEl.style.scrollSnapType = "none"),
          (o._immediateVirtual = !0)),
          x && !o._cssModeVirtualInitialSet && o.params.initialSlide > 0
            ? ((o._cssModeVirtualInitialSet = !0),
              requestAnimationFrame(() => {
                h[v ? "scrollLeft" : "scrollTop"] = w;
              }))
            : (h[v ? "scrollLeft" : "scrollTop"] = w),
          x &&
            requestAnimationFrame(() => {
              (o.wrapperEl.style.scrollSnapType = ""),
                (o._immediateVirtual = !1);
            });
      } else {
        if (!o.support.smoothScroll)
          return (
            oh({ swiper: o, targetPosition: w, side: v ? "left" : "top" }), !0
          );
        h.scrollTo({ [v ? "left" : "top"]: w, behavior: "smooth" });
      }
      return !0;
    }
    return (
      o.setTransition(t),
      o.setTranslate(f),
      o.updateActiveIndex(s),
      o.updateSlidesClasses(),
      o.emit("beforeTransitionStart", t, r),
      o.transitionStart(n, m),
      t === 0
        ? o.transitionEnd(n, m)
        : o.animating ||
          ((o.animating = !0),
          o.onSlideToWrapperTransitionEnd ||
            (o.onSlideToWrapperTransitionEnd = function (w) {
              !o ||
                o.destroyed ||
                (w.target === this &&
                  (o.wrapperEl.removeEventListener(
                    "transitionend",
                    o.onSlideToWrapperTransitionEnd
                  ),
                  (o.onSlideToWrapperTransitionEnd = null),
                  delete o.onSlideToWrapperTransitionEnd,
                  o.transitionEnd(n, m)));
            }),
          o.wrapperEl.addEventListener(
            "transitionend",
            o.onSlideToWrapperTransitionEnd
          )),
      !0
    );
  }
  function e1(e, t, n, r) {
    e === void 0 && (e = 0),
      t === void 0 && (t = this.params.speed),
      n === void 0 && (n = !0),
      typeof e == "string" && (e = parseInt(e, 10));
    const i = this;
    let o = e;
    return (
      i.params.loop &&
        (i.virtual && i.params.virtual.enabled
          ? (o = o + i.virtual.slidesBefore)
          : (o = i.getSlideIndexByData(o))),
      i.slideTo(o, t, n, r)
    );
  }
  function t1(e, t, n) {
    e === void 0 && (e = this.params.speed), t === void 0 && (t = !0);
    const r = this,
      { enabled: i, params: o, animating: s } = r;
    if (!i) return r;
    let l = o.slidesPerGroup;
    o.slidesPerView === "auto" &&
      o.slidesPerGroup === 1 &&
      o.slidesPerGroupAuto &&
      (l = Math.max(r.slidesPerViewDynamic("current", !0), 1));
    const a = r.activeIndex < o.slidesPerGroupSkip ? 1 : l,
      u = r.virtual && o.virtual.enabled;
    if (o.loop) {
      if (s && !u && o.loopPreventsSliding) return !1;
      r.loopFix({ direction: "next" }),
        (r._clientLeft = r.wrapperEl.clientLeft);
    }
    return o.rewind && r.isEnd
      ? r.slideTo(0, e, t, n)
      : r.slideTo(r.activeIndex + a, e, t, n);
  }
  function n1(e, t, n) {
    e === void 0 && (e = this.params.speed), t === void 0 && (t = !0);
    const r = this,
      {
        params: i,
        snapGrid: o,
        slidesGrid: s,
        rtlTranslate: l,
        enabled: a,
        animating: u,
      } = r;
    if (!a) return r;
    const c = r.virtual && i.virtual.enabled;
    if (i.loop) {
      if (u && !c && i.loopPreventsSliding) return !1;
      r.loopFix({ direction: "prev" }),
        (r._clientLeft = r.wrapperEl.clientLeft);
    }
    const d = l ? r.translate : -r.translate;
    function p(f) {
      return f < 0 ? -Math.floor(Math.abs(f)) : Math.floor(f);
    }
    const h = p(d),
      g = o.map((f) => p(f));
    let y = o[g.indexOf(h) - 1];
    if (typeof y > "u" && i.cssMode) {
      let f;
      o.forEach((m, v) => {
        h >= m && (f = v);
      }),
        typeof f < "u" && (y = o[f > 0 ? f - 1 : f]);
    }
    let T = 0;
    if (
      (typeof y < "u" &&
        ((T = s.indexOf(y)),
        T < 0 && (T = r.activeIndex - 1),
        i.slidesPerView === "auto" &&
          i.slidesPerGroup === 1 &&
          i.slidesPerGroupAuto &&
          ((T = T - r.slidesPerViewDynamic("previous", !0) + 1),
          (T = Math.max(T, 0)))),
      i.rewind && r.isBeginning)
    ) {
      const f =
        r.params.virtual && r.params.virtual.enabled && r.virtual
          ? r.virtual.slides.length - 1
          : r.slides.length - 1;
      return r.slideTo(f, e, t, n);
    }
    return r.slideTo(T, e, t, n);
  }
  function r1(e, t, n) {
    e === void 0 && (e = this.params.speed), t === void 0 && (t = !0);
    const r = this;
    return r.slideTo(r.activeIndex, e, t, n);
  }
  function i1(e, t, n, r) {
    e === void 0 && (e = this.params.speed),
      t === void 0 && (t = !0),
      r === void 0 && (r = 0.5);
    const i = this;
    let o = i.activeIndex;
    const s = Math.min(i.params.slidesPerGroupSkip, o),
      l = s + Math.floor((o - s) / i.params.slidesPerGroup),
      a = i.rtlTranslate ? i.translate : -i.translate;
    if (a >= i.snapGrid[l]) {
      const u = i.snapGrid[l],
        c = i.snapGrid[l + 1];
      a - u > (c - u) * r && (o += i.params.slidesPerGroup);
    } else {
      const u = i.snapGrid[l - 1],
        c = i.snapGrid[l];
      a - u <= (c - u) * r && (o -= i.params.slidesPerGroup);
    }
    return (
      (o = Math.max(o, 0)),
      (o = Math.min(o, i.slidesGrid.length - 1)),
      i.slideTo(o, e, t, n)
    );
  }
  function o1() {
    const e = this,
      { params: t, slidesEl: n } = e,
      r =
        t.slidesPerView === "auto" ? e.slidesPerViewDynamic() : t.slidesPerView;
    let i = e.clickedIndex,
      o;
    const s = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
    if (t.loop) {
      if (e.animating) return;
      (o = parseInt(
        e.clickedSlide.getAttribute("data-swiper-slide-index"),
        10
      )),
        t.centeredSlides
          ? i < e.loopedSlides - r / 2 ||
            i > e.slides.length - e.loopedSlides + r / 2
            ? (e.loopFix(),
              (i = e.getSlideIndex(
                Vt(n, `${s}[data-swiper-slide-index="${o}"]`)[0]
              )),
              xu(() => {
                e.slideTo(i);
              }))
            : e.slideTo(i)
          : i > e.slides.length - r
          ? (e.loopFix(),
            (i = e.getSlideIndex(
              Vt(n, `${s}[data-swiper-slide-index="${o}"]`)[0]
            )),
            xu(() => {
              e.slideTo(i);
            }))
          : e.slideTo(i);
    } else e.slideTo(i);
  }
  var s1 = {
    slideTo: Zy,
    slideToLoop: e1,
    slideNext: t1,
    slidePrev: n1,
    slideReset: r1,
    slideToClosest: i1,
    slideToClickedSlide: o1,
  };
  function l1(e) {
    const t = this,
      { params: n, slidesEl: r } = t;
    if (!n.loop || (t.virtual && t.params.virtual.enabled)) return;
    Vt(r, `.${n.slideClass}, swiper-slide`).forEach((o, s) => {
      o.setAttribute("data-swiper-slide-index", s);
    }),
      t.loopFix({
        slideRealIndex: e,
        direction: n.centeredSlides ? void 0 : "next",
      });
  }
  function a1(e) {
    let {
      slideRealIndex: t,
      slideTo: n = !0,
      direction: r,
      setTranslate: i,
      activeSlideIndex: o,
      byController: s,
      byMousewheel: l,
    } = e === void 0 ? {} : e;
    const a = this;
    if (!a.params.loop) return;
    a.emit("beforeLoopFix");
    const {
      slides: u,
      allowSlidePrev: c,
      allowSlideNext: d,
      slidesEl: p,
      params: h,
    } = a;
    if (
      ((a.allowSlidePrev = !0),
      (a.allowSlideNext = !0),
      a.virtual && h.virtual.enabled)
    ) {
      n &&
        (!h.centeredSlides && a.snapIndex === 0
          ? a.slideTo(a.virtual.slides.length, 0, !1, !0)
          : h.centeredSlides && a.snapIndex < h.slidesPerView
          ? a.slideTo(a.virtual.slides.length + a.snapIndex, 0, !1, !0)
          : a.snapIndex === a.snapGrid.length - 1 &&
            a.slideTo(a.virtual.slidesBefore, 0, !1, !0)),
        (a.allowSlidePrev = c),
        (a.allowSlideNext = d),
        a.emit("loopFix");
      return;
    }
    const g =
      h.slidesPerView === "auto"
        ? a.slidesPerViewDynamic()
        : Math.ceil(parseFloat(h.slidesPerView, 10));
    let y = h.loopedSlides || g;
    y % h.slidesPerGroup !== 0 &&
      (y += h.slidesPerGroup - (y % h.slidesPerGroup)),
      (a.loopedSlides = y);
    const T = [],
      f = [];
    let m = a.activeIndex;
    typeof o > "u"
      ? (o = a.getSlideIndex(
          a.slides.filter((S) => S.classList.contains(h.slideActiveClass))[0]
        ))
      : (m = o);
    const v = r === "next" || !r,
      w = r === "prev" || !r;
    let x = 0,
      P = 0;
    if (o < y) {
      x = Math.max(y - o, h.slidesPerGroup);
      for (let S = 0; S < y - o; S += 1) {
        const O = S - Math.floor(S / u.length) * u.length;
        T.push(u.length - O - 1);
      }
    } else if (o > a.slides.length - y * 2) {
      P = Math.max(o - (a.slides.length - y * 2), h.slidesPerGroup);
      for (let S = 0; S < P; S += 1) {
        const O = S - Math.floor(S / u.length) * u.length;
        f.push(O);
      }
    }
    if (
      (w &&
        T.forEach((S) => {
          (a.slides[S].swiperLoopMoveDOM = !0),
            p.prepend(a.slides[S]),
            (a.slides[S].swiperLoopMoveDOM = !1);
        }),
      v &&
        f.forEach((S) => {
          (a.slides[S].swiperLoopMoveDOM = !0),
            p.append(a.slides[S]),
            (a.slides[S].swiperLoopMoveDOM = !1);
        }),
      a.recalcSlides(),
      h.slidesPerView === "auto" && a.updateSlides(),
      h.watchSlidesProgress && a.updateSlidesOffset(),
      n)
    ) {
      if (T.length > 0 && w)
        if (typeof t > "u") {
          const S = a.slidesGrid[m],
            _ = a.slidesGrid[m + x] - S;
          l
            ? a.setTranslate(a.translate - _)
            : (a.slideTo(m + x, 0, !1, !0),
              i && (a.touches[a.isHorizontal() ? "startX" : "startY"] += _));
        } else i && a.slideToLoop(t, 0, !1, !0);
      else if (f.length > 0 && v)
        if (typeof t > "u") {
          const S = a.slidesGrid[m],
            _ = a.slidesGrid[m - P] - S;
          l
            ? a.setTranslate(a.translate - _)
            : (a.slideTo(m - P, 0, !1, !0),
              i && (a.touches[a.isHorizontal() ? "startX" : "startY"] += _));
        } else a.slideToLoop(t, 0, !1, !0);
    }
    if (
      ((a.allowSlidePrev = c),
      (a.allowSlideNext = d),
      a.controller && a.controller.control && !s)
    ) {
      const S = {
        slideRealIndex: t,
        slideTo: !1,
        direction: r,
        setTranslate: i,
        activeSlideIndex: o,
        byController: !0,
      };
      Array.isArray(a.controller.control)
        ? a.controller.control.forEach((O) => {
            !O.destroyed && O.params.loop && O.loopFix(S);
          })
        : a.controller.control instanceof a.constructor &&
          a.controller.control.params.loop &&
          a.controller.control.loopFix(S);
    }
    a.emit("loopFix");
  }
  function u1() {
    const e = this,
      { params: t, slidesEl: n } = e;
    if (!t.loop || (e.virtual && e.params.virtual.enabled)) return;
    e.recalcSlides();
    const r = [];
    e.slides.forEach((i) => {
      const o =
        typeof i.swiperSlideIndex > "u"
          ? i.getAttribute("data-swiper-slide-index") * 1
          : i.swiperSlideIndex;
      r[o] = i;
    }),
      e.slides.forEach((i) => {
        i.removeAttribute("data-swiper-slide-index");
      }),
      r.forEach((i) => {
        n.append(i);
      }),
      e.recalcSlides(),
      e.slideTo(e.realIndex, 0);
  }
  var c1 = { loopCreate: l1, loopFix: a1, loopDestroy: u1 };
  function d1(e) {
    const t = this;
    if (
      !t.params.simulateTouch ||
      (t.params.watchOverflow && t.isLocked) ||
      t.params.cssMode
    )
      return;
    const n = t.params.touchEventsTarget === "container" ? t.el : t.wrapperEl;
    t.isElement && (t.__preventObserver__ = !0),
      (n.style.cursor = "move"),
      (n.style.cursor = e ? "grabbing" : "grab"),
      t.isElement &&
        requestAnimationFrame(() => {
          t.__preventObserver__ = !1;
        });
  }
  function f1() {
    const e = this;
    (e.params.watchOverflow && e.isLocked) ||
      e.params.cssMode ||
      (e.isElement && (e.__preventObserver__ = !0),
      (e[
        e.params.touchEventsTarget === "container" ? "el" : "wrapperEl"
      ].style.cursor = ""),
      e.isElement &&
        requestAnimationFrame(() => {
          e.__preventObserver__ = !1;
        }));
  }
  var p1 = { setGrabCursor: d1, unsetGrabCursor: f1 };
  function h1(e, t) {
    t === void 0 && (t = this);
    function n(r) {
      if (!r || r === Dn() || r === Ke()) return null;
      r.assignedSlot && (r = r.assignedSlot);
      const i = r.closest(e);
      return !i && !r.getRootNode ? null : i || n(r.getRootNode().host);
    }
    return n(t);
  }
  function m1(e) {
    const t = this,
      n = Dn(),
      r = Ke(),
      i = t.touchEventsData;
    i.evCache.push(e);
    const { params: o, touches: s, enabled: l } = t;
    if (
      !l ||
      (!o.simulateTouch && e.pointerType === "mouse") ||
      (t.animating && o.preventInteractionOnTransition)
    )
      return;
    !t.animating && o.cssMode && o.loop && t.loopFix();
    let a = e;
    a.originalEvent && (a = a.originalEvent);
    let u = a.target;
    if (
      (o.touchEventsTarget === "wrapper" && !t.wrapperEl.contains(u)) ||
      ("which" in a && a.which === 3) ||
      ("button" in a && a.button > 0) ||
      (i.isTouched && i.isMoved)
    )
      return;
    const c = !!o.noSwipingClass && o.noSwipingClass !== "",
      d = e.composedPath ? e.composedPath() : e.path;
    c && a.target && a.target.shadowRoot && d && (u = d[0]);
    const p = o.noSwipingSelector
        ? o.noSwipingSelector
        : `.${o.noSwipingClass}`,
      h = !!(a.target && a.target.shadowRoot);
    if (o.noSwiping && (h ? h1(p, u) : u.closest(p))) {
      t.allowClick = !0;
      return;
    }
    if (o.swipeHandler && !u.closest(o.swipeHandler)) return;
    (s.currentX = a.pageX), (s.currentY = a.pageY);
    const g = s.currentX,
      y = s.currentY,
      T = o.edgeSwipeDetection || o.iOSEdgeSwipeDetection,
      f = o.edgeSwipeThreshold || o.iOSEdgeSwipeThreshold;
    if (T && (g <= f || g >= r.innerWidth - f))
      if (T === "prevent") e.preventDefault();
      else return;
    Object.assign(i, {
      isTouched: !0,
      isMoved: !1,
      allowTouchCallbacks: !0,
      isScrolling: void 0,
      startMoving: void 0,
    }),
      (s.startX = g),
      (s.startY = y),
      (i.touchStartTime = vs()),
      (t.allowClick = !0),
      t.updateSize(),
      (t.swipeDirection = void 0),
      o.threshold > 0 && (i.allowThresholdMove = !1);
    let m = !0;
    u.matches(i.focusableElements) &&
      ((m = !1), u.nodeName === "SELECT" && (i.isTouched = !1)),
      n.activeElement &&
        n.activeElement.matches(i.focusableElements) &&
        n.activeElement !== u &&
        n.activeElement.blur();
    const v = m && t.allowTouchMove && o.touchStartPreventDefault;
    (o.touchStartForcePreventDefault || v) &&
      !u.isContentEditable &&
      a.preventDefault(),
      o.freeMode &&
        o.freeMode.enabled &&
        t.freeMode &&
        t.animating &&
        !o.cssMode &&
        t.freeMode.onTouchStart(),
      t.emit("touchStart", a);
  }
  function g1(e) {
    const t = Dn(),
      n = this,
      r = n.touchEventsData,
      { params: i, touches: o, rtlTranslate: s, enabled: l } = n;
    if (!l || (!i.simulateTouch && e.pointerType === "mouse")) return;
    let a = e;
    if ((a.originalEvent && (a = a.originalEvent), !r.isTouched)) {
      r.startMoving && r.isScrolling && n.emit("touchMoveOpposite", a);
      return;
    }
    const u = r.evCache.findIndex((P) => P.pointerId === a.pointerId);
    u >= 0 && (r.evCache[u] = a);
    const c = r.evCache.length > 1 ? r.evCache[0] : a,
      d = c.pageX,
      p = c.pageY;
    if (a.preventedByNestedSwiper) {
      (o.startX = d), (o.startY = p);
      return;
    }
    if (!n.allowTouchMove) {
      a.target.matches(r.focusableElements) || (n.allowClick = !1),
        r.isTouched &&
          (Object.assign(o, {
            startX: d,
            startY: p,
            prevX: n.touches.currentX,
            prevY: n.touches.currentY,
            currentX: d,
            currentY: p,
          }),
          (r.touchStartTime = vs()));
      return;
    }
    if (i.touchReleaseOnEdges && !i.loop) {
      if (n.isVertical()) {
        if (
          (p < o.startY && n.translate <= n.maxTranslate()) ||
          (p > o.startY && n.translate >= n.minTranslate())
        ) {
          (r.isTouched = !1), (r.isMoved = !1);
          return;
        }
      } else if (
        (d < o.startX && n.translate <= n.maxTranslate()) ||
        (d > o.startX && n.translate >= n.minTranslate())
      )
        return;
    }
    if (
      t.activeElement &&
      a.target === t.activeElement &&
      a.target.matches(r.focusableElements)
    ) {
      (r.isMoved = !0), (n.allowClick = !1);
      return;
    }
    if (
      (r.allowTouchCallbacks && n.emit("touchMove", a),
      a.targetTouches && a.targetTouches.length > 1)
    )
      return;
    (o.currentX = d), (o.currentY = p);
    const h = o.currentX - o.startX,
      g = o.currentY - o.startY;
    if (n.params.threshold && Math.sqrt(h ** 2 + g ** 2) < n.params.threshold)
      return;
    if (typeof r.isScrolling > "u") {
      let P;
      (n.isHorizontal() && o.currentY === o.startY) ||
      (n.isVertical() && o.currentX === o.startX)
        ? (r.isScrolling = !1)
        : h * h + g * g >= 25 &&
          ((P = (Math.atan2(Math.abs(g), Math.abs(h)) * 180) / Math.PI),
          (r.isScrolling = n.isHorizontal()
            ? P > i.touchAngle
            : 90 - P > i.touchAngle));
    }
    if (
      (r.isScrolling && n.emit("touchMoveOpposite", a),
      typeof r.startMoving > "u" &&
        (o.currentX !== o.startX || o.currentY !== o.startY) &&
        (r.startMoving = !0),
      r.isScrolling ||
        (n.zoom &&
          n.params.zoom &&
          n.params.zoom.enabled &&
          r.evCache.length > 1))
    ) {
      r.isTouched = !1;
      return;
    }
    if (!r.startMoving) return;
    (n.allowClick = !1),
      !i.cssMode && a.cancelable && a.preventDefault(),
      i.touchMoveStopPropagation && !i.nested && a.stopPropagation();
    let y = n.isHorizontal() ? h : g,
      T = n.isHorizontal()
        ? o.currentX - o.previousX
        : o.currentY - o.previousY;
    i.oneWayMovement &&
      ((y = Math.abs(y) * (s ? 1 : -1)), (T = Math.abs(T) * (s ? 1 : -1))),
      (o.diff = y),
      (y *= i.touchRatio),
      s && ((y = -y), (T = -T));
    const f = n.touchesDirection;
    (n.swipeDirection = y > 0 ? "prev" : "next"),
      (n.touchesDirection = T > 0 ? "prev" : "next");
    const m = n.params.loop && !i.cssMode;
    if (!r.isMoved) {
      if (
        (m && n.loopFix({ direction: n.swipeDirection }),
        (r.startTranslate = n.getTranslate()),
        n.setTransition(0),
        n.animating)
      ) {
        const P = new window.CustomEvent("transitionend", {
          bubbles: !0,
          cancelable: !0,
        });
        n.wrapperEl.dispatchEvent(P);
      }
      (r.allowMomentumBounce = !1),
        i.grabCursor &&
          (n.allowSlideNext === !0 || n.allowSlidePrev === !0) &&
          n.setGrabCursor(!0),
        n.emit("sliderFirstMove", a);
    }
    let v;
    r.isMoved &&
      f !== n.touchesDirection &&
      m &&
      Math.abs(y) >= 1 &&
      (n.loopFix({ direction: n.swipeDirection, setTranslate: !0 }), (v = !0)),
      n.emit("sliderMove", a),
      (r.isMoved = !0),
      (r.currentTranslate = y + r.startTranslate);
    let w = !0,
      x = i.resistanceRatio;
    if (
      (i.touchReleaseOnEdges && (x = 0),
      y > 0
        ? (m &&
            !v &&
            r.currentTranslate >
              (i.centeredSlides
                ? n.minTranslate() - n.size / 2
                : n.minTranslate()) &&
            n.loopFix({
              direction: "prev",
              setTranslate: !0,
              activeSlideIndex: 0,
            }),
          r.currentTranslate > n.minTranslate() &&
            ((w = !1),
            i.resistance &&
              (r.currentTranslate =
                n.minTranslate() -
                1 +
                (-n.minTranslate() + r.startTranslate + y) ** x)))
        : y < 0 &&
          (m &&
            !v &&
            r.currentTranslate <
              (i.centeredSlides
                ? n.maxTranslate() + n.size / 2
                : n.maxTranslate()) &&
            n.loopFix({
              direction: "next",
              setTranslate: !0,
              activeSlideIndex:
                n.slides.length -
                (i.slidesPerView === "auto"
                  ? n.slidesPerViewDynamic()
                  : Math.ceil(parseFloat(i.slidesPerView, 10))),
            }),
          r.currentTranslate < n.maxTranslate() &&
            ((w = !1),
            i.resistance &&
              (r.currentTranslate =
                n.maxTranslate() +
                1 -
                (n.maxTranslate() - r.startTranslate - y) ** x))),
      w && (a.preventedByNestedSwiper = !0),
      !n.allowSlideNext &&
        n.swipeDirection === "next" &&
        r.currentTranslate < r.startTranslate &&
        (r.currentTranslate = r.startTranslate),
      !n.allowSlidePrev &&
        n.swipeDirection === "prev" &&
        r.currentTranslate > r.startTranslate &&
        (r.currentTranslate = r.startTranslate),
      !n.allowSlidePrev &&
        !n.allowSlideNext &&
        (r.currentTranslate = r.startTranslate),
      i.threshold > 0)
    )
      if (Math.abs(y) > i.threshold || r.allowThresholdMove) {
        if (!r.allowThresholdMove) {
          (r.allowThresholdMove = !0),
            (o.startX = o.currentX),
            (o.startY = o.currentY),
            (r.currentTranslate = r.startTranslate),
            (o.diff = n.isHorizontal()
              ? o.currentX - o.startX
              : o.currentY - o.startY);
          return;
        }
      } else {
        r.currentTranslate = r.startTranslate;
        return;
      }
    !i.followFinger ||
      i.cssMode ||
      (((i.freeMode && i.freeMode.enabled && n.freeMode) ||
        i.watchSlidesProgress) &&
        (n.updateActiveIndex(), n.updateSlidesClasses()),
      i.freeMode &&
        i.freeMode.enabled &&
        n.freeMode &&
        n.freeMode.onTouchMove(),
      n.updateProgress(r.currentTranslate),
      n.setTranslate(r.currentTranslate));
  }
  function v1(e) {
    const t = this,
      n = t.touchEventsData,
      r = n.evCache.findIndex((v) => v.pointerId === e.pointerId);
    if (
      (r >= 0 && n.evCache.splice(r, 1),
      ["pointercancel", "pointerout", "pointerleave"].includes(e.type) &&
        !(
          e.type === "pointercancel" &&
          (t.browser.isSafari || t.browser.isWebView)
        ))
    )
      return;
    const {
      params: i,
      touches: o,
      rtlTranslate: s,
      slidesGrid: l,
      enabled: a,
    } = t;
    if (!a || (!i.simulateTouch && e.pointerType === "mouse")) return;
    let u = e;
    if (
      (u.originalEvent && (u = u.originalEvent),
      n.allowTouchCallbacks && t.emit("touchEnd", u),
      (n.allowTouchCallbacks = !1),
      !n.isTouched)
    ) {
      n.isMoved && i.grabCursor && t.setGrabCursor(!1),
        (n.isMoved = !1),
        (n.startMoving = !1);
      return;
    }
    i.grabCursor &&
      n.isMoved &&
      n.isTouched &&
      (t.allowSlideNext === !0 || t.allowSlidePrev === !0) &&
      t.setGrabCursor(!1);
    const c = vs(),
      d = c - n.touchStartTime;
    if (t.allowClick) {
      const v = u.path || (u.composedPath && u.composedPath());
      t.updateClickedSlide((v && v[0]) || u.target),
        t.emit("tap click", u),
        d < 300 &&
          c - n.lastClickTime < 300 &&
          t.emit("doubleTap doubleClick", u);
    }
    if (
      ((n.lastClickTime = vs()),
      xu(() => {
        t.destroyed || (t.allowClick = !0);
      }),
      !n.isTouched ||
        !n.isMoved ||
        !t.swipeDirection ||
        o.diff === 0 ||
        n.currentTranslate === n.startTranslate)
    ) {
      (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
      return;
    }
    (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
    let p;
    if (
      (i.followFinger
        ? (p = s ? t.translate : -t.translate)
        : (p = -n.currentTranslate),
      i.cssMode)
    )
      return;
    if (i.freeMode && i.freeMode.enabled) {
      t.freeMode.onTouchEnd({ currentPos: p });
      return;
    }
    let h = 0,
      g = t.slidesSizesGrid[0];
    for (
      let v = 0;
      v < l.length;
      v += v < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup
    ) {
      const w = v < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
      typeof l[v + w] < "u"
        ? p >= l[v] && p < l[v + w] && ((h = v), (g = l[v + w] - l[v]))
        : p >= l[v] && ((h = v), (g = l[l.length - 1] - l[l.length - 2]));
    }
    let y = null,
      T = null;
    i.rewind &&
      (t.isBeginning
        ? (T =
            i.virtual && i.virtual.enabled && t.virtual
              ? t.virtual.slides.length - 1
              : t.slides.length - 1)
        : t.isEnd && (y = 0));
    const f = (p - l[h]) / g,
      m = h < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
    if (d > i.longSwipesMs) {
      if (!i.longSwipes) {
        t.slideTo(t.activeIndex);
        return;
      }
      t.swipeDirection === "next" &&
        (f >= i.longSwipesRatio
          ? t.slideTo(i.rewind && t.isEnd ? y : h + m)
          : t.slideTo(h)),
        t.swipeDirection === "prev" &&
          (f > 1 - i.longSwipesRatio
            ? t.slideTo(h + m)
            : T !== null && f < 0 && Math.abs(f) > i.longSwipesRatio
            ? t.slideTo(T)
            : t.slideTo(h));
    } else {
      if (!i.shortSwipes) {
        t.slideTo(t.activeIndex);
        return;
      }
      t.navigation &&
      (u.target === t.navigation.nextEl || u.target === t.navigation.prevEl)
        ? u.target === t.navigation.nextEl
          ? t.slideTo(h + m)
          : t.slideTo(h)
        : (t.swipeDirection === "next" && t.slideTo(y !== null ? y : h + m),
          t.swipeDirection === "prev" && t.slideTo(T !== null ? T : h));
    }
  }
  function ch() {
    const e = this,
      { params: t, el: n } = e;
    if (n && n.offsetWidth === 0) return;
    t.breakpoints && e.setBreakpoint();
    const { allowSlideNext: r, allowSlidePrev: i, snapGrid: o } = e,
      s = e.virtual && e.params.virtual.enabled;
    (e.allowSlideNext = !0),
      (e.allowSlidePrev = !0),
      e.updateSize(),
      e.updateSlides(),
      e.updateSlidesClasses();
    const l = s && t.loop;
    (t.slidesPerView === "auto" || t.slidesPerView > 1) &&
    e.isEnd &&
    !e.isBeginning &&
    !e.params.centeredSlides &&
    !l
      ? e.slideTo(e.slides.length - 1, 0, !1, !0)
      : e.params.loop && !s
      ? e.slideToLoop(e.realIndex, 0, !1, !0)
      : e.slideTo(e.activeIndex, 0, !1, !0),
      e.autoplay &&
        e.autoplay.running &&
        e.autoplay.paused &&
        (clearTimeout(e.autoplay.resizeTimeout),
        (e.autoplay.resizeTimeout = setTimeout(() => {
          e.autoplay &&
            e.autoplay.running &&
            e.autoplay.paused &&
            e.autoplay.resume();
        }, 500))),
      (e.allowSlidePrev = i),
      (e.allowSlideNext = r),
      e.params.watchOverflow && o !== e.snapGrid && e.checkOverflow();
  }
  function y1(e) {
    const t = this;
    t.enabled &&
      (t.allowClick ||
        (t.params.preventClicks && e.preventDefault(),
        t.params.preventClicksPropagation &&
          t.animating &&
          (e.stopPropagation(), e.stopImmediatePropagation())));
  }
  function w1() {
    const e = this,
      { wrapperEl: t, rtlTranslate: n, enabled: r } = e;
    if (!r) return;
    (e.previousTranslate = e.translate),
      e.isHorizontal()
        ? (e.translate = -t.scrollLeft)
        : (e.translate = -t.scrollTop),
      e.translate === 0 && (e.translate = 0),
      e.updateActiveIndex(),
      e.updateSlidesClasses();
    let i;
    const o = e.maxTranslate() - e.minTranslate();
    o === 0 ? (i = 0) : (i = (e.translate - e.minTranslate()) / o),
      i !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
      e.emit("setTranslate", e.translate, !1);
  }
  function S1(e) {
    const t = this;
    Ss(t, e.target),
      !(
        t.params.cssMode ||
        (t.params.slidesPerView !== "auto" && !t.params.autoHeight)
      ) && t.update();
  }
  let dh = !1;
  function x1() {}
  const fh = (e, t) => {
    const n = Dn(),
      { params: r, el: i, wrapperEl: o, device: s } = e,
      l = !!r.nested,
      a = t === "on" ? "addEventListener" : "removeEventListener",
      u = t;
    i[a]("pointerdown", e.onTouchStart, { passive: !1 }),
      n[a]("pointermove", e.onTouchMove, { passive: !1, capture: l }),
      n[a]("pointerup", e.onTouchEnd, { passive: !0 }),
      n[a]("pointercancel", e.onTouchEnd, { passive: !0 }),
      n[a]("pointerout", e.onTouchEnd, { passive: !0 }),
      n[a]("pointerleave", e.onTouchEnd, { passive: !0 }),
      (r.preventClicks || r.preventClicksPropagation) &&
        i[a]("click", e.onClick, !0),
      r.cssMode && o[a]("scroll", e.onScroll),
      r.updateOnWindowResize
        ? e[u](
            s.ios || s.android
              ? "resize orientationchange observerUpdate"
              : "resize observerUpdate",
            ch,
            !0
          )
        : e[u]("observerUpdate", ch, !0),
      i[a]("load", e.onLoad, { capture: !0 });
  };
  function E1() {
    const e = this,
      t = Dn(),
      { params: n } = e;
    (e.onTouchStart = m1.bind(e)),
      (e.onTouchMove = g1.bind(e)),
      (e.onTouchEnd = v1.bind(e)),
      n.cssMode && (e.onScroll = w1.bind(e)),
      (e.onClick = y1.bind(e)),
      (e.onLoad = S1.bind(e)),
      dh || (t.addEventListener("touchstart", x1), (dh = !0)),
      fh(e, "on");
  }
  function T1() {
    fh(this, "off");
  }
  var C1 = { attachEvents: E1, detachEvents: T1 };
  const ph = (e, t) => e.grid && t.grid && t.grid.rows > 1;
  function P1() {
    const e = this,
      { realIndex: t, initialized: n, params: r, el: i } = e,
      o = r.breakpoints;
    if (!o || (o && Object.keys(o).length === 0)) return;
    const s = e.getBreakpoint(o, e.params.breakpointsBase, e.el);
    if (!s || e.currentBreakpoint === s) return;
    const a = (s in o ? o[s] : void 0) || e.originalParams,
      u = ph(e, r),
      c = ph(e, a),
      d = r.enabled;
    u && !c
      ? (i.classList.remove(
          `${r.containerModifierClass}grid`,
          `${r.containerModifierClass}grid-column`
        ),
        e.emitContainerClasses())
      : !u &&
        c &&
        (i.classList.add(`${r.containerModifierClass}grid`),
        ((a.grid.fill && a.grid.fill === "column") ||
          (!a.grid.fill && r.grid.fill === "column")) &&
          i.classList.add(`${r.containerModifierClass}grid-column`),
        e.emitContainerClasses()),
      ["navigation", "pagination", "scrollbar"].forEach((y) => {
        if (typeof a[y] > "u") return;
        const T = r[y] && r[y].enabled,
          f = a[y] && a[y].enabled;
        T && !f && e[y].disable(), !T && f && e[y].enable();
      });
    const p = a.direction && a.direction !== r.direction,
      h = r.loop && (a.slidesPerView !== r.slidesPerView || p);
    p && n && e.changeDirection(), Xe(e.params, a);
    const g = e.params.enabled;
    Object.assign(e, {
      allowTouchMove: e.params.allowTouchMove,
      allowSlideNext: e.params.allowSlideNext,
      allowSlidePrev: e.params.allowSlidePrev,
    }),
      d && !g ? e.disable() : !d && g && e.enable(),
      (e.currentBreakpoint = s),
      e.emit("_beforeBreakpoint", a),
      h && n && (e.loopDestroy(), e.loopCreate(t), e.updateSlides()),
      e.emit("breakpoint", a);
  }
  function k1(e, t, n) {
    if ((t === void 0 && (t = "window"), !e || (t === "container" && !n)))
      return;
    let r = !1;
    const i = Ke(),
      o = t === "window" ? i.innerHeight : n.clientHeight,
      s = Object.keys(e).map((l) => {
        if (typeof l == "string" && l.indexOf("@") === 0) {
          const a = parseFloat(l.substr(1));
          return { value: o * a, point: l };
        }
        return { value: l, point: l };
      });
    s.sort((l, a) => parseInt(l.value, 10) - parseInt(a.value, 10));
    for (let l = 0; l < s.length; l += 1) {
      const { point: a, value: u } = s[l];
      t === "window"
        ? i.matchMedia(`(min-width: ${u}px)`).matches && (r = a)
        : u <= n.clientWidth && (r = a);
    }
    return r || "max";
  }
  var O1 = { setBreakpoint: P1, getBreakpoint: k1 };
  function _1(e, t) {
    const n = [];
    return (
      e.forEach((r) => {
        typeof r == "object"
          ? Object.keys(r).forEach((i) => {
              r[i] && n.push(t + i);
            })
          : typeof r == "string" && n.push(t + r);
      }),
      n
    );
  }
  function I1() {
    const e = this,
      { classNames: t, params: n, rtl: r, el: i, device: o } = e,
      s = _1(
        [
          "initialized",
          n.direction,
          { "free-mode": e.params.freeMode && n.freeMode.enabled },
          { autoheight: n.autoHeight },
          { rtl: r },
          { grid: n.grid && n.grid.rows > 1 },
          {
            "grid-column":
              n.grid && n.grid.rows > 1 && n.grid.fill === "column",
          },
          { android: o.android },
          { ios: o.ios },
          { "css-mode": n.cssMode },
          { centered: n.cssMode && n.centeredSlides },
          { "watch-progress": n.watchSlidesProgress },
        ],
        n.containerModifierClass
      );
    t.push(...s), i.classList.add(...t), e.emitContainerClasses();
  }
  function L1() {
    const e = this,
      { el: t, classNames: n } = e;
    t.classList.remove(...n), e.emitContainerClasses();
  }
  var M1 = { addClasses: I1, removeClasses: L1 };
  function N1() {
    const e = this,
      { isLocked: t, params: n } = e,
      { slidesOffsetBefore: r } = n;
    if (r) {
      const i = e.slides.length - 1,
        o = e.slidesGrid[i] + e.slidesSizesGrid[i] + r * 2;
      e.isLocked = e.size > o;
    } else e.isLocked = e.snapGrid.length === 1;
    n.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked),
      n.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked),
      t && t !== e.isLocked && (e.isEnd = !1),
      t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
  }
  var R1 = { checkOverflow: N1 },
    hh = {
      init: !0,
      direction: "horizontal",
      oneWayMovement: !1,
      touchEventsTarget: "wrapper",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      resizeObserver: !0,
      nested: !1,
      createElements: !1,
      enabled: !0,
      focusableElements:
        "input, select, option, textarea, button, video, label",
      width: null,
      height: null,
      preventInteractionOnTransition: !1,
      userAgent: null,
      url: null,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      breakpointsBase: "window",
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      slidesPerGroupAuto: !1,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !0,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 5,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: 0.85,
      watchSlidesProgress: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      loop: !1,
      loopedSlides: null,
      loopPreventsSliding: !0,
      rewind: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      maxBackfaceHiddenSlides: 10,
      containerModifierClass: "swiper-",
      slideClass: "swiper-slide",
      slideActiveClass: "swiper-slide-active",
      slideVisibleClass: "swiper-slide-visible",
      slideNextClass: "swiper-slide-next",
      slidePrevClass: "swiper-slide-prev",
      wrapperClass: "swiper-wrapper",
      lazyPreloaderClass: "swiper-lazy-preloader",
      lazyPreloadPrevNext: 0,
      runCallbacksOnInit: !0,
      _emitClasses: !1,
    };
  function z1(e, t) {
    return function (r) {
      r === void 0 && (r = {});
      const i = Object.keys(r)[0],
        o = r[i];
      if (typeof o != "object" || o === null) {
        Xe(t, r);
        return;
      }
      if (
        (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 &&
          e[i] === !0 &&
          (e[i] = { auto: !0 }),
        !(i in e && "enabled" in o))
      ) {
        Xe(t, r);
        return;
      }
      e[i] === !0 && (e[i] = { enabled: !0 }),
        typeof e[i] == "object" && !("enabled" in e[i]) && (e[i].enabled = !0),
        e[i] || (e[i] = { enabled: !1 }),
        Xe(t, r);
    };
  }
  const Ou = {
      eventsEmitter: My,
      update: Vy,
      translate: Qy,
      transition: Jy,
      slide: s1,
      loop: c1,
      grabCursor: p1,
      events: C1,
      breakpoints: O1,
      checkOverflow: R1,
      classes: M1,
    },
    _u = {};
  let Ii = class Wt {
    constructor() {
      let t, n;
      for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
        i[o] = arguments[o];
      i.length === 1 &&
      i[0].constructor &&
      Object.prototype.toString.call(i[0]).slice(8, -1) === "Object"
        ? (n = i[0])
        : ([t, n] = i),
        n || (n = {}),
        (n = Xe({}, n)),
        t && !n.el && (n.el = t);
      const s = Dn();
      if (
        n.el &&
        typeof n.el == "string" &&
        s.querySelectorAll(n.el).length > 1
      ) {
        const c = [];
        return (
          s.querySelectorAll(n.el).forEach((d) => {
            const p = Xe({}, n, { el: d });
            c.push(new Wt(p));
          }),
          c
        );
      }
      const l = this;
      (l.__swiper__ = !0),
        (l.support = ah()),
        (l.device = ky({ userAgent: n.userAgent })),
        (l.browser = _y()),
        (l.eventsListeners = {}),
        (l.eventsAnyListeners = []),
        (l.modules = [...l.__modules__]),
        n.modules && Array.isArray(n.modules) && l.modules.push(...n.modules);
      const a = {};
      l.modules.forEach((c) => {
        c({
          params: n,
          swiper: l,
          extendParams: z1(n, a),
          on: l.on.bind(l),
          once: l.once.bind(l),
          off: l.off.bind(l),
          emit: l.emit.bind(l),
        });
      });
      const u = Xe({}, hh, a);
      return (
        (l.params = Xe({}, u, _u, n)),
        (l.originalParams = Xe({}, l.params)),
        (l.passedParams = Xe({}, n)),
        l.params &&
          l.params.on &&
          Object.keys(l.params.on).forEach((c) => {
            l.on(c, l.params.on[c]);
          }),
        l.params && l.params.onAny && l.onAny(l.params.onAny),
        Object.assign(l, {
          enabled: l.params.enabled,
          el: t,
          classNames: [],
          slides: [],
          slidesGrid: [],
          snapGrid: [],
          slidesSizesGrid: [],
          isHorizontal() {
            return l.params.direction === "horizontal";
          },
          isVertical() {
            return l.params.direction === "vertical";
          },
          activeIndex: 0,
          realIndex: 0,
          isBeginning: !0,
          isEnd: !1,
          translate: 0,
          previousTranslate: 0,
          progress: 0,
          velocity: 0,
          animating: !1,
          cssOverflowAdjustment() {
            return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
          },
          allowSlideNext: l.params.allowSlideNext,
          allowSlidePrev: l.params.allowSlidePrev,
          touchEventsData: {
            isTouched: void 0,
            isMoved: void 0,
            allowTouchCallbacks: void 0,
            touchStartTime: void 0,
            isScrolling: void 0,
            currentTranslate: void 0,
            startTranslate: void 0,
            allowThresholdMove: void 0,
            focusableElements: l.params.focusableElements,
            lastClickTime: 0,
            clickTimeout: void 0,
            velocities: [],
            allowMomentumBounce: void 0,
            startMoving: void 0,
            evCache: [],
          },
          allowClick: !0,
          allowTouchMove: l.params.allowTouchMove,
          touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
          imagesToLoad: [],
          imagesLoaded: 0,
        }),
        l.emit("_swiper"),
        l.params.init && l.init(),
        l
      );
    }
    getSlideIndex(t) {
      const { slidesEl: n, params: r } = this,
        i = Vt(n, `.${r.slideClass}, swiper-slide`),
        o = sh(i[0]);
      return sh(t) - o;
    }
    getSlideIndexByData(t) {
      return this.getSlideIndex(
        this.slides.filter(
          (n) => n.getAttribute("data-swiper-slide-index") * 1 === t
        )[0]
      );
    }
    recalcSlides() {
      const t = this,
        { slidesEl: n, params: r } = t;
      t.slides = Vt(n, `.${r.slideClass}, swiper-slide`);
    }
    enable() {
      const t = this;
      t.enabled ||
        ((t.enabled = !0),
        t.params.grabCursor && t.setGrabCursor(),
        t.emit("enable"));
    }
    disable() {
      const t = this;
      t.enabled &&
        ((t.enabled = !1),
        t.params.grabCursor && t.unsetGrabCursor(),
        t.emit("disable"));
    }
    setProgress(t, n) {
      const r = this;
      t = Math.min(Math.max(t, 0), 1);
      const i = r.minTranslate(),
        s = (r.maxTranslate() - i) * t + i;
      r.translateTo(s, typeof n > "u" ? 0 : n),
        r.updateActiveIndex(),
        r.updateSlidesClasses();
    }
    emitContainerClasses() {
      const t = this;
      if (!t.params._emitClasses || !t.el) return;
      const n = t.el.className
        .split(" ")
        .filter(
          (r) =>
            r.indexOf("swiper") === 0 ||
            r.indexOf(t.params.containerModifierClass) === 0
        );
      t.emit("_containerClasses", n.join(" "));
    }
    getSlideClasses(t) {
      const n = this;
      return n.destroyed
        ? ""
        : t.className
            .split(" ")
            .filter(
              (r) =>
                r.indexOf("swiper-slide") === 0 ||
                r.indexOf(n.params.slideClass) === 0
            )
            .join(" ");
    }
    emitSlidesClasses() {
      const t = this;
      if (!t.params._emitClasses || !t.el) return;
      const n = [];
      t.slides.forEach((r) => {
        const i = t.getSlideClasses(r);
        n.push({ slideEl: r, classNames: i }), t.emit("_slideClass", r, i);
      }),
        t.emit("_slideClasses", n);
    }
    slidesPerViewDynamic(t, n) {
      t === void 0 && (t = "current"), n === void 0 && (n = !1);
      const r = this,
        {
          params: i,
          slides: o,
          slidesGrid: s,
          slidesSizesGrid: l,
          size: a,
          activeIndex: u,
        } = r;
      let c = 1;
      if (i.centeredSlides) {
        let d = o[u] ? o[u].swiperSlideSize : 0,
          p;
        for (let h = u + 1; h < o.length; h += 1)
          o[h] &&
            !p &&
            ((d += o[h].swiperSlideSize), (c += 1), d > a && (p = !0));
        for (let h = u - 1; h >= 0; h -= 1)
          o[h] &&
            !p &&
            ((d += o[h].swiperSlideSize), (c += 1), d > a && (p = !0));
      } else if (t === "current")
        for (let d = u + 1; d < o.length; d += 1)
          (n ? s[d] + l[d] - s[u] < a : s[d] - s[u] < a) && (c += 1);
      else for (let d = u - 1; d >= 0; d -= 1) s[u] - s[d] < a && (c += 1);
      return c;
    }
    update() {
      const t = this;
      if (!t || t.destroyed) return;
      const { snapGrid: n, params: r } = t;
      r.breakpoints && t.setBreakpoint(),
        [...t.el.querySelectorAll('[loading="lazy"]')].forEach((s) => {
          s.complete && Ss(t, s);
        }),
        t.updateSize(),
        t.updateSlides(),
        t.updateProgress(),
        t.updateSlidesClasses();
      function i() {
        const s = t.rtlTranslate ? t.translate * -1 : t.translate,
          l = Math.min(Math.max(s, t.maxTranslate()), t.minTranslate());
        t.setTranslate(l), t.updateActiveIndex(), t.updateSlidesClasses();
      }
      let o;
      if (r.freeMode && r.freeMode.enabled && !r.cssMode)
        i(), r.autoHeight && t.updateAutoHeight();
      else {
        if (
          (r.slidesPerView === "auto" || r.slidesPerView > 1) &&
          t.isEnd &&
          !r.centeredSlides
        ) {
          const s =
            t.virtual && r.virtual.enabled ? t.virtual.slides : t.slides;
          o = t.slideTo(s.length - 1, 0, !1, !0);
        } else o = t.slideTo(t.activeIndex, 0, !1, !0);
        o || i();
      }
      r.watchOverflow && n !== t.snapGrid && t.checkOverflow(),
        t.emit("update");
    }
    changeDirection(t, n) {
      n === void 0 && (n = !0);
      const r = this,
        i = r.params.direction;
      return (
        t || (t = i === "horizontal" ? "vertical" : "horizontal"),
        t === i ||
          (t !== "horizontal" && t !== "vertical") ||
          (r.el.classList.remove(`${r.params.containerModifierClass}${i}`),
          r.el.classList.add(`${r.params.containerModifierClass}${t}`),
          r.emitContainerClasses(),
          (r.params.direction = t),
          r.slides.forEach((o) => {
            t === "vertical" ? (o.style.width = "") : (o.style.height = "");
          }),
          r.emit("changeDirection"),
          n && r.update()),
        r
      );
    }
    changeLanguageDirection(t) {
      const n = this;
      (n.rtl && t === "rtl") ||
        (!n.rtl && t === "ltr") ||
        ((n.rtl = t === "rtl"),
        (n.rtlTranslate = n.params.direction === "horizontal" && n.rtl),
        n.rtl
          ? (n.el.classList.add(`${n.params.containerModifierClass}rtl`),
            (n.el.dir = "rtl"))
          : (n.el.classList.remove(`${n.params.containerModifierClass}rtl`),
            (n.el.dir = "ltr")),
        n.update());
    }
    mount(t) {
      const n = this;
      if (n.mounted) return !0;
      let r = t || n.params.el;
      if ((typeof r == "string" && (r = document.querySelector(r)), !r))
        return !1;
      (r.swiper = n), r.parentNode && r.parentNode.host && (n.isElement = !0);
      const i = () =>
        `.${(n.params.wrapperClass || "").trim().split(" ").join(".")}`;
      let s = (() =>
        r && r.shadowRoot && r.shadowRoot.querySelector
          ? r.shadowRoot.querySelector(i())
          : Vt(r, i())[0])();
      return (
        !s &&
          n.params.createElements &&
          ((s = Sy("div", n.params.wrapperClass)),
          r.append(s),
          Vt(r, `.${n.params.slideClass}`).forEach((l) => {
            s.append(l);
          })),
        Object.assign(n, {
          el: r,
          wrapperEl: s,
          slidesEl: n.isElement ? r.parentNode.host : s,
          hostEl: n.isElement ? r.parentNode.host : r,
          mounted: !0,
          rtl: r.dir.toLowerCase() === "rtl" || hn(r, "direction") === "rtl",
          rtlTranslate:
            n.params.direction === "horizontal" &&
            (r.dir.toLowerCase() === "rtl" || hn(r, "direction") === "rtl"),
          wrongRTL: hn(s, "display") === "-webkit-box",
        }),
        !0
      );
    }
    init(t) {
      const n = this;
      return (
        n.initialized ||
          n.mount(t) === !1 ||
          (n.emit("beforeInit"),
          n.params.breakpoints && n.setBreakpoint(),
          n.addClasses(),
          n.updateSize(),
          n.updateSlides(),
          n.params.watchOverflow && n.checkOverflow(),
          n.params.grabCursor && n.enabled && n.setGrabCursor(),
          n.params.loop && n.virtual && n.params.virtual.enabled
            ? n.slideTo(
                n.params.initialSlide + n.virtual.slidesBefore,
                0,
                n.params.runCallbacksOnInit,
                !1,
                !0
              )
            : n.slideTo(
                n.params.initialSlide,
                0,
                n.params.runCallbacksOnInit,
                !1,
                !0
              ),
          n.params.loop && n.loopCreate(),
          n.attachEvents(),
          [...n.el.querySelectorAll('[loading="lazy"]')].forEach((i) => {
            i.complete
              ? Ss(n, i)
              : i.addEventListener("load", (o) => {
                  Ss(n, o.target);
                });
          }),
          ku(n),
          (n.initialized = !0),
          ku(n),
          n.emit("init"),
          n.emit("afterInit")),
        n
      );
    }
    destroy(t, n) {
      t === void 0 && (t = !0), n === void 0 && (n = !0);
      const r = this,
        { params: i, el: o, wrapperEl: s, slides: l } = r;
      return (
        typeof r.params > "u" ||
          r.destroyed ||
          (r.emit("beforeDestroy"),
          (r.initialized = !1),
          r.detachEvents(),
          i.loop && r.loopDestroy(),
          n &&
            (r.removeClasses(),
            o.removeAttribute("style"),
            s.removeAttribute("style"),
            l &&
              l.length &&
              l.forEach((a) => {
                a.classList.remove(
                  i.slideVisibleClass,
                  i.slideActiveClass,
                  i.slideNextClass,
                  i.slidePrevClass
                ),
                  a.removeAttribute("style"),
                  a.removeAttribute("data-swiper-slide-index");
              })),
          r.emit("destroy"),
          Object.keys(r.eventsListeners).forEach((a) => {
            r.off(a);
          }),
          t !== !1 && ((r.el.swiper = null), gy(r)),
          (r.destroyed = !0)),
        null
      );
    }
    static extendDefaults(t) {
      Xe(_u, t);
    }
    static get extendedDefaults() {
      return _u;
    }
    static get defaults() {
      return hh;
    }
    static installModule(t) {
      Wt.prototype.__modules__ || (Wt.prototype.__modules__ = []);
      const n = Wt.prototype.__modules__;
      typeof t == "function" && n.indexOf(t) < 0 && n.push(t);
    }
    static use(t) {
      return Array.isArray(t)
        ? (t.forEach((n) => Wt.installModule(n)), Wt)
        : (Wt.installModule(t), Wt);
    }
  };
  Object.keys(Ou).forEach((e) => {
    Object.keys(Ou[e]).forEach((t) => {
      Ii.prototype[t] = Ou[e][t];
    });
  }),
    Ii.use([Iy, Ly]);
  const mh = [
    "eventsPrefix",
    "injectStyles",
    "injectStylesUrls",
    "modules",
    "init",
    "_direction",
    "oneWayMovement",
    "touchEventsTarget",
    "initialSlide",
    "_speed",
    "cssMode",
    "updateOnWindowResize",
    "resizeObserver",
    "nested",
    "focusableElements",
    "_enabled",
    "_width",
    "_height",
    "preventInteractionOnTransition",
    "userAgent",
    "url",
    "_edgeSwipeDetection",
    "_edgeSwipeThreshold",
    "_freeMode",
    "_autoHeight",
    "setWrapperSize",
    "virtualTranslate",
    "_effect",
    "breakpoints",
    "_spaceBetween",
    "_slidesPerView",
    "maxBackfaceHiddenSlides",
    "_grid",
    "_slidesPerGroup",
    "_slidesPerGroupSkip",
    "_slidesPerGroupAuto",
    "_centeredSlides",
    "_centeredSlidesBounds",
    "_slidesOffsetBefore",
    "_slidesOffsetAfter",
    "normalizeSlideIndex",
    "_centerInsufficientSlides",
    "_watchOverflow",
    "roundLengths",
    "touchRatio",
    "touchAngle",
    "simulateTouch",
    "_shortSwipes",
    "_longSwipes",
    "longSwipesRatio",
    "longSwipesMs",
    "_followFinger",
    "allowTouchMove",
    "_threshold",
    "touchMoveStopPropagation",
    "touchStartPreventDefault",
    "touchStartForcePreventDefault",
    "touchReleaseOnEdges",
    "uniqueNavElements",
    "_resistance",
    "_resistanceRatio",
    "_watchSlidesProgress",
    "_grabCursor",
    "preventClicks",
    "preventClicksPropagation",
    "_slideToClickedSlide",
    "_loop",
    "loopedSlides",
    "loopPreventsSliding",
    "_rewind",
    "_allowSlidePrev",
    "_allowSlideNext",
    "_swipeHandler",
    "_noSwiping",
    "noSwipingClass",
    "noSwipingSelector",
    "passiveListeners",
    "containerModifierClass",
    "slideClass",
    "slideActiveClass",
    "slideVisibleClass",
    "slideNextClass",
    "slidePrevClass",
    "wrapperClass",
    "lazyPreloaderClass",
    "lazyPreloadPrevNext",
    "runCallbacksOnInit",
    "observer",
    "observeParents",
    "observeSlideChildren",
    "a11y",
    "_autoplay",
    "_controller",
    "coverflowEffect",
    "cubeEffect",
    "fadeEffect",
    "flipEffect",
    "creativeEffect",
    "cardsEffect",
    "hashNavigation",
    "history",
    "keyboard",
    "mousewheel",
    "_navigation",
    "_pagination",
    "parallax",
    "_scrollbar",
    "_thumbs",
    "virtual",
    "zoom",
    "control",
  ];
  function bn(e) {
    return (
      typeof e == "object" &&
      e !== null &&
      e.constructor &&
      Object.prototype.toString.call(e).slice(8, -1) === "Object"
    );
  }
  function mn(e, t) {
    const n = ["__proto__", "constructor", "prototype"];
    Object.keys(t)
      .filter((r) => n.indexOf(r) < 0)
      .forEach((r) => {
        typeof e[r] > "u"
          ? (e[r] = t[r])
          : bn(t[r]) && bn(e[r]) && Object.keys(t[r]).length > 0
          ? t[r].__swiper__
            ? (e[r] = t[r])
            : mn(e[r], t[r])
          : (e[r] = t[r]);
      });
  }
  function gh(e) {
    return (
      e === void 0 && (e = {}),
      e.navigation &&
        typeof e.navigation.nextEl > "u" &&
        typeof e.navigation.prevEl > "u"
    );
  }
  function vh(e) {
    return (
      e === void 0 && (e = {}), e.pagination && typeof e.pagination.el > "u"
    );
  }
  function yh(e) {
    return e === void 0 && (e = {}), e.scrollbar && typeof e.scrollbar.el > "u";
  }
  function wh(e) {
    e === void 0 && (e = "");
    const t = e
        .split(" ")
        .map((r) => r.trim())
        .filter((r) => !!r),
      n = [];
    return (
      t.forEach((r) => {
        n.indexOf(r) < 0 && n.push(r);
      }),
      n.join(" ")
    );
  }
  function A1(e) {
    return (
      e === void 0 && (e = ""),
      e
        ? e.includes("swiper-wrapper")
          ? e
          : `swiper-wrapper ${e}`
        : "swiper-wrapper"
    );
  }
  function $1(e) {
    let {
      swiper: t,
      slides: n,
      passedParams: r,
      changedParams: i,
      nextEl: o,
      prevEl: s,
      scrollbarEl: l,
      paginationEl: a,
    } = e;
    const u = i.filter(
        (_) => _ !== "children" && _ !== "direction" && _ !== "wrapperClass"
      ),
      {
        params: c,
        pagination: d,
        navigation: p,
        scrollbar: h,
        virtual: g,
        thumbs: y,
      } = t;
    let T, f, m, v, w, x, P, S;
    i.includes("thumbs") &&
      r.thumbs &&
      r.thumbs.swiper &&
      c.thumbs &&
      !c.thumbs.swiper &&
      (T = !0),
      i.includes("controller") &&
        r.controller &&
        r.controller.control &&
        c.controller &&
        !c.controller.control &&
        (f = !0),
      i.includes("pagination") &&
        r.pagination &&
        (r.pagination.el || a) &&
        (c.pagination || c.pagination === !1) &&
        d &&
        !d.el &&
        (m = !0),
      i.includes("scrollbar") &&
        r.scrollbar &&
        (r.scrollbar.el || l) &&
        (c.scrollbar || c.scrollbar === !1) &&
        h &&
        !h.el &&
        (v = !0),
      i.includes("navigation") &&
        r.navigation &&
        (r.navigation.prevEl || s) &&
        (r.navigation.nextEl || o) &&
        (c.navigation || c.navigation === !1) &&
        p &&
        !p.prevEl &&
        !p.nextEl &&
        (w = !0);
    const O = (_) => {
      t[_] &&
        (t[_].destroy(),
        _ === "navigation"
          ? (t.isElement && (t[_].prevEl.remove(), t[_].nextEl.remove()),
            (c[_].prevEl = void 0),
            (c[_].nextEl = void 0),
            (t[_].prevEl = void 0),
            (t[_].nextEl = void 0))
          : (t.isElement && t[_].el.remove(),
            (c[_].el = void 0),
            (t[_].el = void 0)));
    };
    i.includes("loop") &&
      t.isElement &&
      (c.loop && !r.loop ? (x = !0) : !c.loop && r.loop ? (P = !0) : (S = !0)),
      u.forEach((_) => {
        if (bn(c[_]) && bn(r[_]))
          mn(c[_], r[_]),
            (_ === "navigation" || _ === "pagination" || _ === "scrollbar") &&
              "enabled" in r[_] &&
              !r[_].enabled &&
              O(_);
        else {
          const j = r[_];
          (j === !0 || j === !1) &&
          (_ === "navigation" || _ === "pagination" || _ === "scrollbar")
            ? j === !1 && O(_)
            : (c[_] = r[_]);
        }
      }),
      u.includes("controller") &&
        !f &&
        t.controller &&
        t.controller.control &&
        c.controller &&
        c.controller.control &&
        (t.controller.control = c.controller.control),
      i.includes("children") &&
        n &&
        g &&
        c.virtual.enabled &&
        ((g.slides = n), g.update(!0)),
      i.includes("children") && n && c.loop && (S = !0),
      T && y.init() && y.update(!0),
      f && (t.controller.control = c.controller.control),
      m &&
        (t.isElement &&
          (!a || typeof a == "string") &&
          ((a = document.createElement("div")),
          a.classList.add("swiper-pagination"),
          t.el.appendChild(a)),
        a && (c.pagination.el = a),
        d.init(),
        d.render(),
        d.update()),
      v &&
        (t.isElement &&
          (!l || typeof l == "string") &&
          ((l = document.createElement("div")),
          l.classList.add("swiper-scrollbar"),
          t.el.appendChild(l)),
        l && (c.scrollbar.el = l),
        h.init(),
        h.updateSize(),
        h.setTranslate()),
      w &&
        (t.isElement &&
          ((!o || typeof o == "string") &&
            ((o = document.createElement("div")),
            o.classList.add("swiper-button-next"),
            (o.innerHTML = t.hostEl.nextButtonSvg),
            t.el.appendChild(o)),
          (!s || typeof s == "string") &&
            ((s = document.createElement("div")),
            s.classList.add("swiper-button-prev"),
            (o.innerHTML = t.hostEl.prevButtonSvg),
            t.el.appendChild(s))),
        o && (c.navigation.nextEl = o),
        s && (c.navigation.prevEl = s),
        p.init(),
        p.update()),
      i.includes("allowSlideNext") && (t.allowSlideNext = r.allowSlideNext),
      i.includes("allowSlidePrev") && (t.allowSlidePrev = r.allowSlidePrev),
      i.includes("direction") && t.changeDirection(r.direction, !1),
      (x || S) && t.loopDestroy(),
      (P || S) && t.loopCreate(),
      t.update();
  }
  function j1(e, t) {
    e === void 0 && (e = {}), t === void 0 && (t = !0);
    const n = { on: {} },
      r = {},
      i = {};
    mn(n, Ii.defaults),
      mn(n, Ii.extendedDefaults),
      (n._emitClasses = !0),
      (n.init = !1);
    const o = {},
      s = mh.map((a) => a.replace(/_/, "")),
      l = Object.assign({}, e);
    return (
      Object.keys(l).forEach((a) => {
        typeof e[a] > "u" ||
          (s.indexOf(a) >= 0
            ? bn(e[a])
              ? ((n[a] = {}), (i[a] = {}), mn(n[a], e[a]), mn(i[a], e[a]))
              : ((n[a] = e[a]), (i[a] = e[a]))
            : a.search(/on[A-Z]/) === 0 && typeof e[a] == "function"
            ? t
              ? (r[`${a[2].toLowerCase()}${a.substr(3)}`] = e[a])
              : (n.on[`${a[2].toLowerCase()}${a.substr(3)}`] = e[a])
            : (o[a] = e[a]));
      }),
      ["navigation", "pagination", "scrollbar"].forEach((a) => {
        n[a] === !0 && (n[a] = {}), n[a] === !1 && delete n[a];
      }),
      { params: n, passedParams: i, rest: o, events: r }
    );
  }
  function D1(e, t) {
    let {
      el: n,
      nextEl: r,
      prevEl: i,
      paginationEl: o,
      scrollbarEl: s,
      swiper: l,
    } = e;
    gh(t) &&
      r &&
      i &&
      ((l.params.navigation.nextEl = r),
      (l.originalParams.navigation.nextEl = r),
      (l.params.navigation.prevEl = i),
      (l.originalParams.navigation.prevEl = i)),
      vh(t) &&
        o &&
        ((l.params.pagination.el = o), (l.originalParams.pagination.el = o)),
      yh(t) &&
        s &&
        ((l.params.scrollbar.el = s), (l.originalParams.scrollbar.el = s)),
      l.init(n);
  }
  function b1(e, t, n, r, i) {
    const o = [];
    if (!t) return o;
    const s = (a) => {
      o.indexOf(a) < 0 && o.push(a);
    };
    if (n && r) {
      const a = r.map(i),
        u = n.map(i);
      a.join("") !== u.join("") && s("children"),
        r.length !== n.length && s("children");
    }
    return (
      mh
        .filter((a) => a[0] === "_")
        .map((a) => a.replace(/_/, ""))
        .forEach((a) => {
          if (a in e && a in t)
            if (bn(e[a]) && bn(t[a])) {
              const u = Object.keys(e[a]),
                c = Object.keys(t[a]);
              u.length !== c.length
                ? s(a)
                : (u.forEach((d) => {
                    e[a][d] !== t[a][d] && s(a);
                  }),
                  c.forEach((d) => {
                    e[a][d] !== t[a][d] && s(a);
                  }));
            } else e[a] !== t[a] && s(a);
        }),
      o
    );
  }
  const F1 = (e) => {
    !e ||
      e.destroyed ||
      !e.params.virtual ||
      (e.params.virtual && !e.params.virtual.enabled) ||
      (e.updateSlides(),
      e.updateProgress(),
      e.updateSlidesClasses(),
      e.parallax &&
        e.params.parallax &&
        e.params.parallax.enabled &&
        e.parallax.setTranslate());
  };
  function xs() {
    return (
      (xs = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
      xs.apply(this, arguments)
    );
  }
  function Sh(e) {
    return (
      e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
    );
  }
  function xh(e) {
    const t = [];
    return (
      K.Children.toArray(e).forEach((n) => {
        Sh(n)
          ? t.push(n)
          : n.props &&
            n.props.children &&
            xh(n.props.children).forEach((r) => t.push(r));
      }),
      t
    );
  }
  function B1(e) {
    const t = [],
      n = {
        "container-start": [],
        "container-end": [],
        "wrapper-start": [],
        "wrapper-end": [],
      };
    return (
      K.Children.toArray(e).forEach((r) => {
        if (Sh(r)) t.push(r);
        else if (r.props && r.props.slot && n[r.props.slot])
          n[r.props.slot].push(r);
        else if (r.props && r.props.children) {
          const i = xh(r.props.children);
          i.length > 0
            ? i.forEach((o) => t.push(o))
            : n["container-end"].push(r);
        } else n["container-end"].push(r);
      }),
      { slides: t, slots: n }
    );
  }
  function V1(e, t, n) {
    if (!n) return null;
    const r = (c) => {
        let d = c;
        return (
          c < 0 ? (d = t.length + c) : d >= t.length && (d = d - t.length), d
        );
      },
      i = e.isHorizontal()
        ? { [e.rtlTranslate ? "right" : "left"]: `${n.offset}px` }
        : { top: `${n.offset}px` },
      { from: o, to: s } = n,
      l = e.params.loop ? -t.length : 0,
      a = e.params.loop ? t.length * 2 : t.length,
      u = [];
    for (let c = l; c < a; c += 1) c >= o && c <= s && u.push(t[r(c)]);
    return u.map((c, d) =>
      K.cloneElement(c, { swiper: e, style: i, key: `slide-${d}` })
    );
  }
  function Li(e, t) {
    return typeof window > "u" ? M.useEffect(e, t) : M.useLayoutEffect(e, t);
  }
  const Eh = M.createContext(null),
    U1 = M.createContext(null),
    Iu = M.forwardRef(function (e, t) {
      let {
          className: n,
          tag: r = "div",
          wrapperTag: i = "div",
          children: o,
          onSwiper: s,
          ...l
        } = e === void 0 ? {} : e,
        a = !1;
      const [u, c] = M.useState("swiper"),
        [d, p] = M.useState(null),
        [h, g] = M.useState(!1),
        y = M.useRef(!1),
        T = M.useRef(null),
        f = M.useRef(null),
        m = M.useRef(null),
        v = M.useRef(null),
        w = M.useRef(null),
        x = M.useRef(null),
        P = M.useRef(null),
        S = M.useRef(null),
        { params: O, passedParams: _, rest: j, events: L } = j1(l),
        { slides: $, slots: V } = B1(o),
        fe = () => {
          g(!h);
        };
      Object.assign(O.on, {
        _containerClasses(A, D) {
          c(D);
        },
      });
      const at = () => {
        Object.assign(O.on, L), (a = !0);
        const A = { ...O };
        if (
          (delete A.wrapperClass,
          (f.current = new Ii(A)),
          f.current.virtual && f.current.params.virtual.enabled)
        ) {
          f.current.virtual.slides = $;
          const D = {
            cache: !1,
            slides: $,
            renderExternal: p,
            renderExternalUpdate: !1,
          };
          mn(f.current.params.virtual, D),
            mn(f.current.originalParams.virtual, D);
        }
      };
      T.current || at(), f.current && f.current.on("_beforeBreakpoint", fe);
      const ut = () => {
          a ||
            !L ||
            !f.current ||
            Object.keys(L).forEach((A) => {
              f.current.on(A, L[A]);
            });
        },
        St = () => {
          !L ||
            !f.current ||
            Object.keys(L).forEach((A) => {
              f.current.off(A, L[A]);
            });
        };
      M.useEffect(() => () => {
        f.current && f.current.off("_beforeBreakpoint", fe);
      }),
        M.useEffect(() => {
          !y.current &&
            f.current &&
            (f.current.emitSlidesClasses(), (y.current = !0));
        }),
        Li(() => {
          if ((t && (t.current = T.current), !!T.current))
            return (
              f.current.destroyed && at(),
              D1(
                {
                  el: T.current,
                  nextEl: w.current,
                  prevEl: x.current,
                  paginationEl: P.current,
                  scrollbarEl: S.current,
                  swiper: f.current,
                },
                O
              ),
              s && s(f.current),
              () => {
                f.current && !f.current.destroyed && f.current.destroy(!0, !1);
              }
            );
        }, []),
        Li(() => {
          ut();
          const A = b1(_, m.current, $, v.current, (D) => D.key);
          return (
            (m.current = _),
            (v.current = $),
            A.length &&
              f.current &&
              !f.current.destroyed &&
              $1({
                swiper: f.current,
                slides: $,
                passedParams: _,
                changedParams: A,
                nextEl: w.current,
                prevEl: x.current,
                scrollbarEl: S.current,
                paginationEl: P.current,
              }),
            () => {
              St();
            }
          );
        }),
        Li(() => {
          F1(f.current);
        }, [d]);
      function N() {
        return O.virtual
          ? V1(f.current, $, d)
          : $.map((A, D) =>
              K.cloneElement(A, { swiper: f.current, swiperSlideIndex: D })
            );
      }
      return K.createElement(
        r,
        xs({ ref: T, className: wh(`${u}${n ? ` ${n}` : ""}`) }, j),
        K.createElement(
          U1.Provider,
          { value: f.current },
          V["container-start"],
          K.createElement(
            i,
            { className: A1(O.wrapperClass) },
            V["wrapper-start"],
            N(),
            V["wrapper-end"]
          ),
          gh(O) &&
            K.createElement(
              K.Fragment,
              null,
              K.createElement("div", {
                ref: x,
                className: "swiper-button-prev",
              }),
              K.createElement("div", {
                ref: w,
                className: "swiper-button-next",
              })
            ),
          yh(O) &&
            K.createElement("div", { ref: S, className: "swiper-scrollbar" }),
          vh(O) &&
            K.createElement("div", { ref: P, className: "swiper-pagination" }),
          V["container-end"]
        )
      );
    });
  Iu.displayName = "Swiper";
  const Lu = M.forwardRef(function (e, t) {
    let {
      tag: n = "div",
      children: r,
      className: i = "",
      swiper: o,
      zoom: s,
      lazy: l,
      virtualIndex: a,
      swiperSlideIndex: u,
      ...c
    } = e === void 0 ? {} : e;
    const d = M.useRef(null),
      [p, h] = M.useState("swiper-slide"),
      [g, y] = M.useState(!1);
    function T(w, x, P) {
      x === d.current && h(P);
    }
    Li(() => {
      if (
        (typeof u < "u" && (d.current.swiperSlideIndex = u),
        t && (t.current = d.current),
        !(!d.current || !o))
      ) {
        if (o.destroyed) {
          p !== "swiper-slide" && h("swiper-slide");
          return;
        }
        return (
          o.on("_slideClass", T),
          () => {
            o && o.off("_slideClass", T);
          }
        );
      }
    }),
      Li(() => {
        o && d.current && !o.destroyed && h(o.getSlideClasses(d.current));
      }, [o]);
    const f = {
        isActive: p.indexOf("swiper-slide-active") >= 0,
        isVisible: p.indexOf("swiper-slide-visible") >= 0,
        isPrev: p.indexOf("swiper-slide-prev") >= 0,
        isNext: p.indexOf("swiper-slide-next") >= 0,
      },
      m = () => (typeof r == "function" ? r(f) : r),
      v = () => {
        y(!0);
      };
    return K.createElement(
      n,
      xs(
        {
          ref: d,
          className: wh(`${p}${i ? ` ${i}` : ""}`),
          "data-swiper-slide-index": a,
          onLoad: v,
        },
        c
      ),
      s &&
        K.createElement(
          Eh.Provider,
          { value: f },
          K.createElement(
            "div",
            {
              className: "swiper-zoom-container",
              "data-swiper-zoom": typeof s == "number" ? s : void 0,
            },
            m(),
            l &&
              !g &&
              K.createElement("div", { className: "swiper-lazy-preloader" })
          )
        ),
      !s &&
        K.createElement(
          Eh.Provider,
          { value: f },
          m(),
          l &&
            !g &&
            K.createElement("div", { className: "swiper-lazy-preloader" })
        )
    );
  });
  Lu.displayName = "SwiperSlide";
  function Th(e, t) {
    return function () {
      return e.apply(t, arguments);
    };
  }
  const { toString: H1 } = Object.prototype,
    { getPrototypeOf: Mu } = Object,
    Es = ((e) => (t) => {
      const n = H1.call(t);
      return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
    })(Object.create(null)),
    kt = (e) => ((e = e.toLowerCase()), (t) => Es(t) === e),
    Ts = (e) => (t) => typeof t === e,
    { isArray: _r } = Array,
    Mi = Ts("undefined");
  function W1(e) {
    return (
      e !== null &&
      !Mi(e) &&
      e.constructor !== null &&
      !Mi(e.constructor) &&
      lt(e.constructor.isBuffer) &&
      e.constructor.isBuffer(e)
    );
  }
  const Ch = kt("ArrayBuffer");
  function G1(e) {
    let t;
    return (
      typeof ArrayBuffer < "u" && ArrayBuffer.isView
        ? (t = ArrayBuffer.isView(e))
        : (t = e && e.buffer && Ch(e.buffer)),
      t
    );
  }
  const Y1 = Ts("string"),
    lt = Ts("function"),
    Ph = Ts("number"),
    Cs = (e) => e !== null && typeof e == "object",
    Q1 = (e) => e === !0 || e === !1,
    Ps = (e) => {
      if (Es(e) !== "object") return !1;
      const t = Mu(e);
      return (
        (t === null ||
          t === Object.prototype ||
          Object.getPrototypeOf(t) === null) &&
        !(Symbol.toStringTag in e) &&
        !(Symbol.iterator in e)
      );
    },
    K1 = kt("Date"),
    X1 = kt("File"),
    q1 = kt("Blob"),
    J1 = kt("FileList"),
    Z1 = (e) => Cs(e) && lt(e.pipe),
    ew = (e) => {
      let t;
      return (
        e &&
        ((typeof FormData == "function" && e instanceof FormData) ||
          (lt(e.append) &&
            ((t = Es(e)) === "formdata" ||
              (t === "object" &&
                lt(e.toString) &&
                e.toString() === "[object FormData]"))))
      );
    },
    tw = kt("URLSearchParams"),
    nw = (e) =>
      e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  function Ni(e, t, { allOwnKeys: n = !1 } = {}) {
    if (e === null || typeof e > "u") return;
    let r, i;
    if ((typeof e != "object" && (e = [e]), _r(e)))
      for (r = 0, i = e.length; r < i; r++) t.call(null, e[r], r, e);
    else {
      const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
        s = o.length;
      let l;
      for (r = 0; r < s; r++) (l = o[r]), t.call(null, e[l], l, e);
    }
  }
  function kh(e, t) {
    t = t.toLowerCase();
    const n = Object.keys(e);
    let r = n.length,
      i;
    for (; r-- > 0; ) if (((i = n[r]), t === i.toLowerCase())) return i;
    return null;
  }
  const Oh = (() =>
      typeof globalThis < "u"
        ? globalThis
        : typeof self < "u"
        ? self
        : typeof window < "u"
        ? window
        : global)(),
    _h = (e) => !Mi(e) && e !== Oh;
  function Nu() {
    const { caseless: e } = (_h(this) && this) || {},
      t = {},
      n = (r, i) => {
        const o = (e && kh(t, i)) || i;
        Ps(t[o]) && Ps(r)
          ? (t[o] = Nu(t[o], r))
          : Ps(r)
          ? (t[o] = Nu({}, r))
          : _r(r)
          ? (t[o] = r.slice())
          : (t[o] = r);
      };
    for (let r = 0, i = arguments.length; r < i; r++)
      arguments[r] && Ni(arguments[r], n);
    return t;
  }
  const rw = (e, t, n, { allOwnKeys: r } = {}) => (
      Ni(
        t,
        (i, o) => {
          n && lt(i) ? (e[o] = Th(i, n)) : (e[o] = i);
        },
        { allOwnKeys: r }
      ),
      e
    ),
    iw = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
    ow = (e, t, n, r) => {
      (e.prototype = Object.create(t.prototype, r)),
        (e.prototype.constructor = e),
        Object.defineProperty(e, "super", { value: t.prototype }),
        n && Object.assign(e.prototype, n);
    },
    sw = (e, t, n, r) => {
      let i, o, s;
      const l = {};
      if (((t = t || {}), e == null)) return t;
      do {
        for (i = Object.getOwnPropertyNames(e), o = i.length; o-- > 0; )
          (s = i[o]),
            (!r || r(s, e, t)) && !l[s] && ((t[s] = e[s]), (l[s] = !0));
        e = n !== !1 && Mu(e);
      } while (e && (!n || n(e, t)) && e !== Object.prototype);
      return t;
    },
    lw = (e, t, n) => {
      (e = String(e)),
        (n === void 0 || n > e.length) && (n = e.length),
        (n -= t.length);
      const r = e.indexOf(t, n);
      return r !== -1 && r === n;
    },
    aw = (e) => {
      if (!e) return null;
      if (_r(e)) return e;
      let t = e.length;
      if (!Ph(t)) return null;
      const n = new Array(t);
      for (; t-- > 0; ) n[t] = e[t];
      return n;
    },
    uw = (
      (e) => (t) =>
        e && t instanceof e
    )(typeof Uint8Array < "u" && Mu(Uint8Array)),
    cw = (e, t) => {
      const r = (e && e[Symbol.iterator]).call(e);
      let i;
      for (; (i = r.next()) && !i.done; ) {
        const o = i.value;
        t.call(e, o[0], o[1]);
      }
    },
    dw = (e, t) => {
      let n;
      const r = [];
      for (; (n = e.exec(t)) !== null; ) r.push(n);
      return r;
    },
    fw = kt("HTMLFormElement"),
    pw = (e) =>
      e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, i) {
        return r.toUpperCase() + i;
      }),
    Ih = (
      ({ hasOwnProperty: e }) =>
      (t, n) =>
        e.call(t, n)
    )(Object.prototype),
    hw = kt("RegExp"),
    Lh = (e, t) => {
      const n = Object.getOwnPropertyDescriptors(e),
        r = {};
      Ni(n, (i, o) => {
        t(i, o, e) !== !1 && (r[o] = i);
      }),
        Object.defineProperties(e, r);
    },
    mw = (e) => {
      Lh(e, (t, n) => {
        if (lt(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
          return !1;
        const r = e[n];
        if (lt(r)) {
          if (((t.enumerable = !1), "writable" in t)) {
            t.writable = !1;
            return;
          }
          t.set ||
            (t.set = () => {
              throw Error("Can not rewrite read-only method '" + n + "'");
            });
        }
      });
    },
    gw = (e, t) => {
      const n = {},
        r = (i) => {
          i.forEach((o) => {
            n[o] = !0;
          });
        };
      return _r(e) ? r(e) : r(String(e).split(t)), n;
    },
    vw = () => {},
    yw = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
    Ru = "abcdefghijklmnopqrstuvwxyz",
    Mh = "0123456789",
    Nh = { DIGIT: Mh, ALPHA: Ru, ALPHA_DIGIT: Ru + Ru.toUpperCase() + Mh },
    ww = (e = 16, t = Nh.ALPHA_DIGIT) => {
      let n = "";
      const { length: r } = t;
      for (; e--; ) n += t[(Math.random() * r) | 0];
      return n;
    };
  function Sw(e) {
    return !!(
      e &&
      lt(e.append) &&
      e[Symbol.toStringTag] === "FormData" &&
      e[Symbol.iterator]
    );
  }
  const xw = (e) => {
      const t = new Array(10),
        n = (r, i) => {
          if (Cs(r)) {
            if (t.indexOf(r) >= 0) return;
            if (!("toJSON" in r)) {
              t[i] = r;
              const o = _r(r) ? [] : {};
              return (
                Ni(r, (s, l) => {
                  const a = n(s, i + 1);
                  !Mi(a) && (o[l] = a);
                }),
                (t[i] = void 0),
                o
              );
            }
          }
          return r;
        };
      return n(e, 0);
    },
    Ew = kt("AsyncFunction"),
    C = {
      isArray: _r,
      isArrayBuffer: Ch,
      isBuffer: W1,
      isFormData: ew,
      isArrayBufferView: G1,
      isString: Y1,
      isNumber: Ph,
      isBoolean: Q1,
      isObject: Cs,
      isPlainObject: Ps,
      isUndefined: Mi,
      isDate: K1,
      isFile: X1,
      isBlob: q1,
      isRegExp: hw,
      isFunction: lt,
      isStream: Z1,
      isURLSearchParams: tw,
      isTypedArray: uw,
      isFileList: J1,
      forEach: Ni,
      merge: Nu,
      extend: rw,
      trim: nw,
      stripBOM: iw,
      inherits: ow,
      toFlatObject: sw,
      kindOf: Es,
      kindOfTest: kt,
      endsWith: lw,
      toArray: aw,
      forEachEntry: cw,
      matchAll: dw,
      isHTMLForm: fw,
      hasOwnProperty: Ih,
      hasOwnProp: Ih,
      reduceDescriptors: Lh,
      freezeMethods: mw,
      toObjectSet: gw,
      toCamelCase: pw,
      noop: vw,
      toFiniteNumber: yw,
      findKey: kh,
      global: Oh,
      isContextDefined: _h,
      ALPHABET: Nh,
      generateString: ww,
      isSpecCompliantForm: Sw,
      toJSONObject: xw,
      isAsyncFn: Ew,
      isThenable: (e) => e && (Cs(e) || lt(e)) && lt(e.then) && lt(e.catch),
    };
  function G(e, t, n, r, i) {
    Error.call(this),
      Error.captureStackTrace
        ? Error.captureStackTrace(this, this.constructor)
        : (this.stack = new Error().stack),
      (this.message = e),
      (this.name = "AxiosError"),
      t && (this.code = t),
      n && (this.config = n),
      r && (this.request = r),
      i && (this.response = i);
  }
  C.inherits(G, Error, {
    toJSON: function () {
      return {
        message: this.message,
        name: this.name,
        description: this.description,
        number: this.number,
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        config: C.toJSONObject(this.config),
        code: this.code,
        status:
          this.response && this.response.status ? this.response.status : null,
      };
    },
  });
  const Rh = G.prototype,
    zh = {};
  [
    "ERR_BAD_OPTION_VALUE",
    "ERR_BAD_OPTION",
    "ECONNABORTED",
    "ETIMEDOUT",
    "ERR_NETWORK",
    "ERR_FR_TOO_MANY_REDIRECTS",
    "ERR_DEPRECATED",
    "ERR_BAD_RESPONSE",
    "ERR_BAD_REQUEST",
    "ERR_CANCELED",
    "ERR_NOT_SUPPORT",
    "ERR_INVALID_URL",
  ].forEach((e) => {
    zh[e] = { value: e };
  }),
    Object.defineProperties(G, zh),
    Object.defineProperty(Rh, "isAxiosError", { value: !0 }),
    (G.from = (e, t, n, r, i, o) => {
      const s = Object.create(Rh);
      return (
        C.toFlatObject(
          e,
          s,
          function (a) {
            return a !== Error.prototype;
          },
          (l) => l !== "isAxiosError"
        ),
        G.call(s, e.message, t, n, r, i),
        (s.cause = e),
        (s.name = e.name),
        o && Object.assign(s, o),
        s
      );
    });
  const Tw = null;
  function zu(e) {
    return C.isPlainObject(e) || C.isArray(e);
  }
  function Ah(e) {
    return C.endsWith(e, "[]") ? e.slice(0, -2) : e;
  }
  function $h(e, t, n) {
    return e
      ? e
          .concat(t)
          .map(function (i, o) {
            return (i = Ah(i)), !n && o ? "[" + i + "]" : i;
          })
          .join(n ? "." : "")
      : t;
  }
  function Cw(e) {
    return C.isArray(e) && !e.some(zu);
  }
  const Pw = C.toFlatObject(C, {}, null, function (t) {
    return /^is[A-Z]/.test(t);
  });
  function ks(e, t, n) {
    if (!C.isObject(e)) throw new TypeError("target must be an object");
    (t = t || new FormData()),
      (n = C.toFlatObject(
        n,
        { metaTokens: !0, dots: !1, indexes: !1 },
        !1,
        function (y, T) {
          return !C.isUndefined(T[y]);
        }
      ));
    const r = n.metaTokens,
      i = n.visitor || c,
      o = n.dots,
      s = n.indexes,
      a = (n.Blob || (typeof Blob < "u" && Blob)) && C.isSpecCompliantForm(t);
    if (!C.isFunction(i)) throw new TypeError("visitor must be a function");
    function u(g) {
      if (g === null) return "";
      if (C.isDate(g)) return g.toISOString();
      if (!a && C.isBlob(g))
        throw new G("Blob is not supported. Use a Buffer instead.");
      return C.isArrayBuffer(g) || C.isTypedArray(g)
        ? a && typeof Blob == "function"
          ? new Blob([g])
          : Buffer.from(g)
        : g;
    }
    function c(g, y, T) {
      let f = g;
      if (g && !T && typeof g == "object") {
        if (C.endsWith(y, "{}"))
          (y = r ? y : y.slice(0, -2)), (g = JSON.stringify(g));
        else if (
          (C.isArray(g) && Cw(g)) ||
          ((C.isFileList(g) || C.endsWith(y, "[]")) && (f = C.toArray(g)))
        )
          return (
            (y = Ah(y)),
            f.forEach(function (v, w) {
              !(C.isUndefined(v) || v === null) &&
                t.append(
                  s === !0 ? $h([y], w, o) : s === null ? y : y + "[]",
                  u(v)
                );
            }),
            !1
          );
      }
      return zu(g) ? !0 : (t.append($h(T, y, o), u(g)), !1);
    }
    const d = [],
      p = Object.assign(Pw, {
        defaultVisitor: c,
        convertValue: u,
        isVisitable: zu,
      });
    function h(g, y) {
      if (!C.isUndefined(g)) {
        if (d.indexOf(g) !== -1)
          throw Error("Circular reference detected in " + y.join("."));
        d.push(g),
          C.forEach(g, function (f, m) {
            (!(C.isUndefined(f) || f === null) &&
              i.call(t, f, C.isString(m) ? m.trim() : m, y, p)) === !0 &&
              h(f, y ? y.concat(m) : [m]);
          }),
          d.pop();
      }
    }
    if (!C.isObject(e)) throw new TypeError("data must be an object");
    return h(e), t;
  }
  function jh(e) {
    const t = {
      "!": "%21",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "~": "%7E",
      "%20": "+",
      "%00": "\0",
    };
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
      return t[r];
    });
  }
  function Au(e, t) {
    (this._pairs = []), e && ks(e, this, t);
  }
  const Dh = Au.prototype;
  (Dh.append = function (t, n) {
    this._pairs.push([t, n]);
  }),
    (Dh.toString = function (t) {
      const n = t
        ? function (r) {
            return t.call(this, r, jh);
          }
        : jh;
      return this._pairs
        .map(function (i) {
          return n(i[0]) + "=" + n(i[1]);
        }, "")
        .join("&");
    });
  function kw(e) {
    return encodeURIComponent(e)
      .replace(/%3A/gi, ":")
      .replace(/%24/g, "$")
      .replace(/%2C/gi, ",")
      .replace(/%20/g, "+")
      .replace(/%5B/gi, "[")
      .replace(/%5D/gi, "]");
  }
  function bh(e, t, n) {
    if (!t) return e;
    const r = (n && n.encode) || kw,
      i = n && n.serialize;
    let o;
    if (
      (i
        ? (o = i(t, n))
        : (o = C.isURLSearchParams(t)
            ? t.toString()
            : new Au(t, n).toString(r)),
      o)
    ) {
      const s = e.indexOf("#");
      s !== -1 && (e = e.slice(0, s)),
        (e += (e.indexOf("?") === -1 ? "?" : "&") + o);
    }
    return e;
  }
  class Ow {
    constructor() {
      this.handlers = [];
    }
    use(t, n, r) {
      return (
        this.handlers.push({
          fulfilled: t,
          rejected: n,
          synchronous: r ? r.synchronous : !1,
          runWhen: r ? r.runWhen : null,
        }),
        this.handlers.length - 1
      );
    }
    eject(t) {
      this.handlers[t] && (this.handlers[t] = null);
    }
    clear() {
      this.handlers && (this.handlers = []);
    }
    forEach(t) {
      C.forEach(this.handlers, function (r) {
        r !== null && t(r);
      });
    }
  }
  const Fh = Ow,
    Bh = {
      silentJSONParsing: !0,
      forcedJSONParsing: !0,
      clarifyTimeoutError: !1,
    },
    _w = typeof URLSearchParams < "u" ? URLSearchParams : Au,
    Iw = typeof FormData < "u" ? FormData : null,
    Lw = typeof Blob < "u" ? Blob : null,
    Mw = (() => {
      let e;
      return typeof navigator < "u" &&
        ((e = navigator.product) === "ReactNative" ||
          e === "NativeScript" ||
          e === "NS")
        ? !1
        : typeof window < "u" && typeof document < "u";
    })(),
    Nw = (() =>
      typeof WorkerGlobalScope < "u" &&
      self instanceof WorkerGlobalScope &&
      typeof self.importScripts == "function")(),
    Ot = {
      isBrowser: !0,
      classes: { URLSearchParams: _w, FormData: Iw, Blob: Lw },
      isStandardBrowserEnv: Mw,
      isStandardBrowserWebWorkerEnv: Nw,
      protocols: ["http", "https", "file", "blob", "url", "data"],
    };
  function Rw(e, t) {
    return ks(
      e,
      new Ot.classes.URLSearchParams(),
      Object.assign(
        {
          visitor: function (n, r, i, o) {
            return Ot.isNode && C.isBuffer(n)
              ? (this.append(r, n.toString("base64")), !1)
              : o.defaultVisitor.apply(this, arguments);
          },
        },
        t
      )
    );
  }
  function zw(e) {
    return C.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
      t[0] === "[]" ? "" : t[1] || t[0]
    );
  }
  function Aw(e) {
    const t = {},
      n = Object.keys(e);
    let r;
    const i = n.length;
    let o;
    for (r = 0; r < i; r++) (o = n[r]), (t[o] = e[o]);
    return t;
  }
  function Vh(e) {
    function t(n, r, i, o) {
      let s = n[o++];
      const l = Number.isFinite(+s),
        a = o >= n.length;
      return (
        (s = !s && C.isArray(i) ? i.length : s),
        a
          ? (C.hasOwnProp(i, s) ? (i[s] = [i[s], r]) : (i[s] = r), !l)
          : ((!i[s] || !C.isObject(i[s])) && (i[s] = []),
            t(n, r, i[s], o) && C.isArray(i[s]) && (i[s] = Aw(i[s])),
            !l)
      );
    }
    if (C.isFormData(e) && C.isFunction(e.entries)) {
      const n = {};
      return (
        C.forEachEntry(e, (r, i) => {
          t(zw(r), i, n, 0);
        }),
        n
      );
    }
    return null;
  }
  const $w = { "Content-Type": void 0 };
  function jw(e, t, n) {
    if (C.isString(e))
      try {
        return (t || JSON.parse)(e), C.trim(e);
      } catch (r) {
        if (r.name !== "SyntaxError") throw r;
      }
    return (n || JSON.stringify)(e);
  }
  const Os = {
    transitional: Bh,
    adapter: ["xhr", "http"],
    transformRequest: [
      function (t, n) {
        const r = n.getContentType() || "",
          i = r.indexOf("application/json") > -1,
          o = C.isObject(t);
        if ((o && C.isHTMLForm(t) && (t = new FormData(t)), C.isFormData(t)))
          return i && i ? JSON.stringify(Vh(t)) : t;
        if (
          C.isArrayBuffer(t) ||
          C.isBuffer(t) ||
          C.isStream(t) ||
          C.isFile(t) ||
          C.isBlob(t)
        )
          return t;
        if (C.isArrayBufferView(t)) return t.buffer;
        if (C.isURLSearchParams(t))
          return (
            n.setContentType(
              "application/x-www-form-urlencoded;charset=utf-8",
              !1
            ),
            t.toString()
          );
        let l;
        if (o) {
          if (r.indexOf("application/x-www-form-urlencoded") > -1)
            return Rw(t, this.formSerializer).toString();
          if ((l = C.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
            const a = this.env && this.env.FormData;
            return ks(
              l ? { "files[]": t } : t,
              a && new a(),
              this.formSerializer
            );
          }
        }
        return o || i ? (n.setContentType("application/json", !1), jw(t)) : t;
      },
    ],
    transformResponse: [
      function (t) {
        const n = this.transitional || Os.transitional,
          r = n && n.forcedJSONParsing,
          i = this.responseType === "json";
        if (t && C.isString(t) && ((r && !this.responseType) || i)) {
          const s = !(n && n.silentJSONParsing) && i;
          try {
            return JSON.parse(t);
          } catch (l) {
            if (s)
              throw l.name === "SyntaxError"
                ? G.from(l, G.ERR_BAD_RESPONSE, this, null, this.response)
                : l;
          }
        }
        return t;
      },
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: { FormData: Ot.classes.FormData, Blob: Ot.classes.Blob },
    validateStatus: function (t) {
      return t >= 200 && t < 300;
    },
    headers: { common: { Accept: "application/json, text/plain, */*" } },
  };
  C.forEach(["delete", "get", "head"], function (t) {
    Os.headers[t] = {};
  }),
    C.forEach(["post", "put", "patch"], function (t) {
      Os.headers[t] = C.merge($w);
    });
  const $u = Os,
    Dw = C.toObjectSet([
      "age",
      "authorization",
      "content-length",
      "content-type",
      "etag",
      "expires",
      "from",
      "host",
      "if-modified-since",
      "if-unmodified-since",
      "last-modified",
      "location",
      "max-forwards",
      "proxy-authorization",
      "referer",
      "retry-after",
      "user-agent",
    ]),
    bw = (e) => {
      const t = {};
      let n, r, i;
      return (
        e &&
          e
            .split(
              `
`
            )
            .forEach(function (s) {
              (i = s.indexOf(":")),
                (n = s.substring(0, i).trim().toLowerCase()),
                (r = s.substring(i + 1).trim()),
                !(!n || (t[n] && Dw[n])) &&
                  (n === "set-cookie"
                    ? t[n]
                      ? t[n].push(r)
                      : (t[n] = [r])
                    : (t[n] = t[n] ? t[n] + ", " + r : r));
            }),
        t
      );
    },
    Uh = Symbol("internals");
  function Ri(e) {
    return e && String(e).trim().toLowerCase();
  }
  function _s(e) {
    return e === !1 || e == null ? e : C.isArray(e) ? e.map(_s) : String(e);
  }
  function Fw(e) {
    const t = Object.create(null),
      n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let r;
    for (; (r = n.exec(e)); ) t[r[1]] = r[2];
    return t;
  }
  const Bw = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
  function ju(e, t, n, r, i) {
    if (C.isFunction(r)) return r.call(this, t, n);
    if ((i && (t = n), !!C.isString(t))) {
      if (C.isString(r)) return t.indexOf(r) !== -1;
      if (C.isRegExp(r)) return r.test(t);
    }
  }
  function Vw(e) {
    return e
      .trim()
      .toLowerCase()
      .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
  }
  function Uw(e, t) {
    const n = C.toCamelCase(" " + t);
    ["get", "set", "has"].forEach((r) => {
      Object.defineProperty(e, r + n, {
        value: function (i, o, s) {
          return this[r].call(this, t, i, o, s);
        },
        configurable: !0,
      });
    });
  }
  class Is {
    constructor(t) {
      t && this.set(t);
    }
    set(t, n, r) {
      const i = this;
      function o(l, a, u) {
        const c = Ri(a);
        if (!c) throw new Error("header name must be a non-empty string");
        const d = C.findKey(i, c);
        (!d || i[d] === void 0 || u === !0 || (u === void 0 && i[d] !== !1)) &&
          (i[d || a] = _s(l));
      }
      const s = (l, a) => C.forEach(l, (u, c) => o(u, c, a));
      return (
        C.isPlainObject(t) || t instanceof this.constructor
          ? s(t, n)
          : C.isString(t) && (t = t.trim()) && !Bw(t)
          ? s(bw(t), n)
          : t != null && o(n, t, r),
        this
      );
    }
    get(t, n) {
      if (((t = Ri(t)), t)) {
        const r = C.findKey(this, t);
        if (r) {
          const i = this[r];
          if (!n) return i;
          if (n === !0) return Fw(i);
          if (C.isFunction(n)) return n.call(this, i, r);
          if (C.isRegExp(n)) return n.exec(i);
          throw new TypeError("parser must be boolean|regexp|function");
        }
      }
    }
    has(t, n) {
      if (((t = Ri(t)), t)) {
        const r = C.findKey(this, t);
        return !!(r && this[r] !== void 0 && (!n || ju(this, this[r], r, n)));
      }
      return !1;
    }
    delete(t, n) {
      const r = this;
      let i = !1;
      function o(s) {
        if (((s = Ri(s)), s)) {
          const l = C.findKey(r, s);
          l && (!n || ju(r, r[l], l, n)) && (delete r[l], (i = !0));
        }
      }
      return C.isArray(t) ? t.forEach(o) : o(t), i;
    }
    clear(t) {
      const n = Object.keys(this);
      let r = n.length,
        i = !1;
      for (; r--; ) {
        const o = n[r];
        (!t || ju(this, this[o], o, t, !0)) && (delete this[o], (i = !0));
      }
      return i;
    }
    normalize(t) {
      const n = this,
        r = {};
      return (
        C.forEach(this, (i, o) => {
          const s = C.findKey(r, o);
          if (s) {
            (n[s] = _s(i)), delete n[o];
            return;
          }
          const l = t ? Vw(o) : String(o).trim();
          l !== o && delete n[o], (n[l] = _s(i)), (r[l] = !0);
        }),
        this
      );
    }
    concat(...t) {
      return this.constructor.concat(this, ...t);
    }
    toJSON(t) {
      const n = Object.create(null);
      return (
        C.forEach(this, (r, i) => {
          r != null &&
            r !== !1 &&
            (n[i] = t && C.isArray(r) ? r.join(", ") : r);
        }),
        n
      );
    }
    [Symbol.iterator]() {
      return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
      return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
    }
    get [Symbol.toStringTag]() {
      return "AxiosHeaders";
    }
    static from(t) {
      return t instanceof this ? t : new this(t);
    }
    static concat(t, ...n) {
      const r = new this(t);
      return n.forEach((i) => r.set(i)), r;
    }
    static accessor(t) {
      const r = (this[Uh] = this[Uh] = { accessors: {} }).accessors,
        i = this.prototype;
      function o(s) {
        const l = Ri(s);
        r[l] || (Uw(i, s), (r[l] = !0));
      }
      return C.isArray(t) ? t.forEach(o) : o(t), this;
    }
  }
  Is.accessor([
    "Content-Type",
    "Content-Length",
    "Accept",
    "Accept-Encoding",
    "User-Agent",
    "Authorization",
  ]),
    C.freezeMethods(Is.prototype),
    C.freezeMethods(Is);
  const Ut = Is;
  function Du(e, t) {
    const n = this || $u,
      r = t || n,
      i = Ut.from(r.headers);
    let o = r.data;
    return (
      C.forEach(e, function (l) {
        o = l.call(n, o, i.normalize(), t ? t.status : void 0);
      }),
      i.normalize(),
      o
    );
  }
  function Hh(e) {
    return !!(e && e.__CANCEL__);
  }
  function zi(e, t, n) {
    G.call(this, e ?? "canceled", G.ERR_CANCELED, t, n),
      (this.name = "CanceledError");
  }
  C.inherits(zi, G, { __CANCEL__: !0 });
  function Hw(e, t, n) {
    const r = n.config.validateStatus;
    !n.status || !r || r(n.status)
      ? e(n)
      : t(
          new G(
            "Request failed with status code " + n.status,
            [G.ERR_BAD_REQUEST, G.ERR_BAD_RESPONSE][
              Math.floor(n.status / 100) - 4
            ],
            n.config,
            n.request,
            n
          )
        );
  }
  const Ww = Ot.isStandardBrowserEnv
    ? (function () {
        return {
          write: function (n, r, i, o, s, l) {
            const a = [];
            a.push(n + "=" + encodeURIComponent(r)),
              C.isNumber(i) && a.push("expires=" + new Date(i).toGMTString()),
              C.isString(o) && a.push("path=" + o),
              C.isString(s) && a.push("domain=" + s),
              l === !0 && a.push("secure"),
              (document.cookie = a.join("; "));
          },
          read: function (n) {
            const r = document.cookie.match(
              new RegExp("(^|;\\s*)(" + n + ")=([^;]*)")
            );
            return r ? decodeURIComponent(r[3]) : null;
          },
          remove: function (n) {
            this.write(n, "", Date.now() - 864e5);
          },
        };
      })()
    : (function () {
        return {
          write: function () {},
          read: function () {
            return null;
          },
          remove: function () {},
        };
      })();
  function Gw(e) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
  }
  function Yw(e, t) {
    return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
  }
  function Wh(e, t) {
    return e && !Gw(t) ? Yw(e, t) : t;
  }
  const Qw = Ot.isStandardBrowserEnv
    ? (function () {
        const t = /(msie|trident)/i.test(navigator.userAgent),
          n = document.createElement("a");
        let r;
        function i(o) {
          let s = o;
          return (
            t && (n.setAttribute("href", s), (s = n.href)),
            n.setAttribute("href", s),
            {
              href: n.href,
              protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
              host: n.host,
              search: n.search ? n.search.replace(/^\?/, "") : "",
              hash: n.hash ? n.hash.replace(/^#/, "") : "",
              hostname: n.hostname,
              port: n.port,
              pathname:
                n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
            }
          );
        }
        return (
          (r = i(window.location.href)),
          function (s) {
            const l = C.isString(s) ? i(s) : s;
            return l.protocol === r.protocol && l.host === r.host;
          }
        );
      })()
    : (function () {
        return function () {
          return !0;
        };
      })();
  function Kw(e) {
    const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
    return (t && t[1]) || "";
  }
  function Xw(e, t) {
    e = e || 10;
    const n = new Array(e),
      r = new Array(e);
    let i = 0,
      o = 0,
      s;
    return (
      (t = t !== void 0 ? t : 1e3),
      function (a) {
        const u = Date.now(),
          c = r[o];
        s || (s = u), (n[i] = a), (r[i] = u);
        let d = o,
          p = 0;
        for (; d !== i; ) (p += n[d++]), (d = d % e);
        if (((i = (i + 1) % e), i === o && (o = (o + 1) % e), u - s < t))
          return;
        const h = c && u - c;
        return h ? Math.round((p * 1e3) / h) : void 0;
      }
    );
  }
  function Gh(e, t) {
    let n = 0;
    const r = Xw(50, 250);
    return (i) => {
      const o = i.loaded,
        s = i.lengthComputable ? i.total : void 0,
        l = o - n,
        a = r(l),
        u = o <= s;
      n = o;
      const c = {
        loaded: o,
        total: s,
        progress: s ? o / s : void 0,
        bytes: l,
        rate: a || void 0,
        estimated: a && s && u ? (s - o) / a : void 0,
        event: i,
      };
      (c[t ? "download" : "upload"] = !0), e(c);
    };
  }
  const Ls = {
    http: Tw,
    xhr:
      typeof XMLHttpRequest < "u" &&
      function (e) {
        return new Promise(function (n, r) {
          let i = e.data;
          const o = Ut.from(e.headers).normalize(),
            s = e.responseType;
          let l;
          function a() {
            e.cancelToken && e.cancelToken.unsubscribe(l),
              e.signal && e.signal.removeEventListener("abort", l);
          }
          C.isFormData(i) &&
            (Ot.isStandardBrowserEnv || Ot.isStandardBrowserWebWorkerEnv
              ? o.setContentType(!1)
              : o.setContentType("multipart/form-data;", !1));
          let u = new XMLHttpRequest();
          if (e.auth) {
            const h = e.auth.username || "",
              g = e.auth.password
                ? unescape(encodeURIComponent(e.auth.password))
                : "";
            o.set("Authorization", "Basic " + btoa(h + ":" + g));
          }
          const c = Wh(e.baseURL, e.url);
          u.open(
            e.method.toUpperCase(),
            bh(c, e.params, e.paramsSerializer),
            !0
          ),
            (u.timeout = e.timeout);
          function d() {
            if (!u) return;
            const h = Ut.from(
                "getAllResponseHeaders" in u && u.getAllResponseHeaders()
              ),
              y = {
                data:
                  !s || s === "text" || s === "json"
                    ? u.responseText
                    : u.response,
                status: u.status,
                statusText: u.statusText,
                headers: h,
                config: e,
                request: u,
              };
            Hw(
              function (f) {
                n(f), a();
              },
              function (f) {
                r(f), a();
              },
              y
            ),
              (u = null);
          }
          if (
            ("onloadend" in u
              ? (u.onloadend = d)
              : (u.onreadystatechange = function () {
                  !u ||
                    u.readyState !== 4 ||
                    (u.status === 0 &&
                      !(
                        u.responseURL && u.responseURL.indexOf("file:") === 0
                      )) ||
                    setTimeout(d);
                }),
            (u.onabort = function () {
              u &&
                (r(new G("Request aborted", G.ECONNABORTED, e, u)), (u = null));
            }),
            (u.onerror = function () {
              r(new G("Network Error", G.ERR_NETWORK, e, u)), (u = null);
            }),
            (u.ontimeout = function () {
              let g = e.timeout
                ? "timeout of " + e.timeout + "ms exceeded"
                : "timeout exceeded";
              const y = e.transitional || Bh;
              e.timeoutErrorMessage && (g = e.timeoutErrorMessage),
                r(
                  new G(
                    g,
                    y.clarifyTimeoutError ? G.ETIMEDOUT : G.ECONNABORTED,
                    e,
                    u
                  )
                ),
                (u = null);
            }),
            Ot.isStandardBrowserEnv)
          ) {
            const h =
              (e.withCredentials || Qw(c)) &&
              e.xsrfCookieName &&
              Ww.read(e.xsrfCookieName);
            h && o.set(e.xsrfHeaderName, h);
          }
          i === void 0 && o.setContentType(null),
            "setRequestHeader" in u &&
              C.forEach(o.toJSON(), function (g, y) {
                u.setRequestHeader(y, g);
              }),
            C.isUndefined(e.withCredentials) ||
              (u.withCredentials = !!e.withCredentials),
            s && s !== "json" && (u.responseType = e.responseType),
            typeof e.onDownloadProgress == "function" &&
              u.addEventListener("progress", Gh(e.onDownloadProgress, !0)),
            typeof e.onUploadProgress == "function" &&
              u.upload &&
              u.upload.addEventListener("progress", Gh(e.onUploadProgress)),
            (e.cancelToken || e.signal) &&
              ((l = (h) => {
                u &&
                  (r(!h || h.type ? new zi(null, e, u) : h),
                  u.abort(),
                  (u = null));
              }),
              e.cancelToken && e.cancelToken.subscribe(l),
              e.signal &&
                (e.signal.aborted
                  ? l()
                  : e.signal.addEventListener("abort", l)));
          const p = Kw(c);
          if (p && Ot.protocols.indexOf(p) === -1) {
            r(new G("Unsupported protocol " + p + ":", G.ERR_BAD_REQUEST, e));
            return;
          }
          u.send(i || null);
        });
      },
  };
  C.forEach(Ls, (e, t) => {
    if (e) {
      try {
        Object.defineProperty(e, "name", { value: t });
      } catch {}
      Object.defineProperty(e, "adapterName", { value: t });
    }
  });
  const qw = {
    getAdapter: (e) => {
      e = C.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      for (
        let i = 0;
        i < t && ((n = e[i]), !(r = C.isString(n) ? Ls[n.toLowerCase()] : n));
        i++
      );
      if (!r)
        throw r === !1
          ? new G(
              `Adapter ${n} is not supported by the environment`,
              "ERR_NOT_SUPPORT"
            )
          : new Error(
              C.hasOwnProp(Ls, n)
                ? `Adapter '${n}' is not available in the build`
                : `Unknown adapter '${n}'`
            );
      if (!C.isFunction(r)) throw new TypeError("adapter is not a function");
      return r;
    },
    adapters: Ls,
  };
  function bu(e) {
    if (
      (e.cancelToken && e.cancelToken.throwIfRequested(),
      e.signal && e.signal.aborted)
    )
      throw new zi(null, e);
  }
  function Yh(e) {
    return (
      bu(e),
      (e.headers = Ut.from(e.headers)),
      (e.data = Du.call(e, e.transformRequest)),
      ["post", "put", "patch"].indexOf(e.method) !== -1 &&
        e.headers.setContentType("application/x-www-form-urlencoded", !1),
      qw
        .getAdapter(e.adapter || $u.adapter)(e)
        .then(
          function (r) {
            return (
              bu(e),
              (r.data = Du.call(e, e.transformResponse, r)),
              (r.headers = Ut.from(r.headers)),
              r
            );
          },
          function (r) {
            return (
              Hh(r) ||
                (bu(e),
                r &&
                  r.response &&
                  ((r.response.data = Du.call(
                    e,
                    e.transformResponse,
                    r.response
                  )),
                  (r.response.headers = Ut.from(r.response.headers)))),
              Promise.reject(r)
            );
          }
        )
    );
  }
  const Qh = (e) => (e instanceof Ut ? e.toJSON() : e);
  function Ir(e, t) {
    t = t || {};
    const n = {};
    function r(u, c, d) {
      return C.isPlainObject(u) && C.isPlainObject(c)
        ? C.merge.call({ caseless: d }, u, c)
        : C.isPlainObject(c)
        ? C.merge({}, c)
        : C.isArray(c)
        ? c.slice()
        : c;
    }
    function i(u, c, d) {
      if (C.isUndefined(c)) {
        if (!C.isUndefined(u)) return r(void 0, u, d);
      } else return r(u, c, d);
    }
    function o(u, c) {
      if (!C.isUndefined(c)) return r(void 0, c);
    }
    function s(u, c) {
      if (C.isUndefined(c)) {
        if (!C.isUndefined(u)) return r(void 0, u);
      } else return r(void 0, c);
    }
    function l(u, c, d) {
      if (d in t) return r(u, c);
      if (d in e) return r(void 0, u);
    }
    const a = {
      url: o,
      method: o,
      data: o,
      baseURL: s,
      transformRequest: s,
      transformResponse: s,
      paramsSerializer: s,
      timeout: s,
      timeoutMessage: s,
      withCredentials: s,
      adapter: s,
      responseType: s,
      xsrfCookieName: s,
      xsrfHeaderName: s,
      onUploadProgress: s,
      onDownloadProgress: s,
      decompress: s,
      maxContentLength: s,
      maxBodyLength: s,
      beforeRedirect: s,
      transport: s,
      httpAgent: s,
      httpsAgent: s,
      cancelToken: s,
      socketPath: s,
      responseEncoding: s,
      validateStatus: l,
      headers: (u, c) => i(Qh(u), Qh(c), !0),
    };
    return (
      C.forEach(Object.keys(Object.assign({}, e, t)), function (c) {
        const d = a[c] || i,
          p = d(e[c], t[c], c);
        (C.isUndefined(p) && d !== l) || (n[c] = p);
      }),
      n
    );
  }
  const Kh = "1.4.0",
    Fu = {};
  ["object", "boolean", "number", "function", "string", "symbol"].forEach(
    (e, t) => {
      Fu[e] = function (r) {
        return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
      };
    }
  );
  const Xh = {};
  Fu.transitional = function (t, n, r) {
    function i(o, s) {
      return (
        "[Axios v" +
        Kh +
        "] Transitional option '" +
        o +
        "'" +
        s +
        (r ? ". " + r : "")
      );
    }
    return (o, s, l) => {
      if (t === !1)
        throw new G(
          i(s, " has been removed" + (n ? " in " + n : "")),
          G.ERR_DEPRECATED
        );
      return (
        n &&
          !Xh[s] &&
          ((Xh[s] = !0),
          console.warn(
            i(
              s,
              " has been deprecated since v" +
                n +
                " and will be removed in the near future"
            )
          )),
        t ? t(o, s, l) : !0
      );
    };
  };
  function Jw(e, t, n) {
    if (typeof e != "object")
      throw new G("options must be an object", G.ERR_BAD_OPTION_VALUE);
    const r = Object.keys(e);
    let i = r.length;
    for (; i-- > 0; ) {
      const o = r[i],
        s = t[o];
      if (s) {
        const l = e[o],
          a = l === void 0 || s(l, o, e);
        if (a !== !0)
          throw new G("option " + o + " must be " + a, G.ERR_BAD_OPTION_VALUE);
        continue;
      }
      if (n !== !0) throw new G("Unknown option " + o, G.ERR_BAD_OPTION);
    }
  }
  const Bu = { assertOptions: Jw, validators: Fu },
    gn = Bu.validators;
  class Ms {
    constructor(t) {
      (this.defaults = t),
        (this.interceptors = { request: new Fh(), response: new Fh() });
    }
    request(t, n) {
      typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
        (n = Ir(this.defaults, n));
      const { transitional: r, paramsSerializer: i, headers: o } = n;
      r !== void 0 &&
        Bu.assertOptions(
          r,
          {
            silentJSONParsing: gn.transitional(gn.boolean),
            forcedJSONParsing: gn.transitional(gn.boolean),
            clarifyTimeoutError: gn.transitional(gn.boolean),
          },
          !1
        ),
        i != null &&
          (C.isFunction(i)
            ? (n.paramsSerializer = { serialize: i })
            : Bu.assertOptions(
                i,
                { encode: gn.function, serialize: gn.function },
                !0
              )),
        (n.method = (n.method || this.defaults.method || "get").toLowerCase());
      let s;
      (s = o && C.merge(o.common, o[n.method])),
        s &&
          C.forEach(
            ["delete", "get", "head", "post", "put", "patch", "common"],
            (g) => {
              delete o[g];
            }
          ),
        (n.headers = Ut.concat(s, o));
      const l = [];
      let a = !0;
      this.interceptors.request.forEach(function (y) {
        (typeof y.runWhen == "function" && y.runWhen(n) === !1) ||
          ((a = a && y.synchronous), l.unshift(y.fulfilled, y.rejected));
      });
      const u = [];
      this.interceptors.response.forEach(function (y) {
        u.push(y.fulfilled, y.rejected);
      });
      let c,
        d = 0,
        p;
      if (!a) {
        const g = [Yh.bind(this), void 0];
        for (
          g.unshift.apply(g, l),
            g.push.apply(g, u),
            p = g.length,
            c = Promise.resolve(n);
          d < p;

        )
          c = c.then(g[d++], g[d++]);
        return c;
      }
      p = l.length;
      let h = n;
      for (d = 0; d < p; ) {
        const g = l[d++],
          y = l[d++];
        try {
          h = g(h);
        } catch (T) {
          y.call(this, T);
          break;
        }
      }
      try {
        c = Yh.call(this, h);
      } catch (g) {
        return Promise.reject(g);
      }
      for (d = 0, p = u.length; d < p; ) c = c.then(u[d++], u[d++]);
      return c;
    }
    getUri(t) {
      t = Ir(this.defaults, t);
      const n = Wh(t.baseURL, t.url);
      return bh(n, t.params, t.paramsSerializer);
    }
  }
  C.forEach(["delete", "get", "head", "options"], function (t) {
    Ms.prototype[t] = function (n, r) {
      return this.request(
        Ir(r || {}, { method: t, url: n, data: (r || {}).data })
      );
    };
  }),
    C.forEach(["post", "put", "patch"], function (t) {
      function n(r) {
        return function (o, s, l) {
          return this.request(
            Ir(l || {}, {
              method: t,
              headers: r ? { "Content-Type": "multipart/form-data" } : {},
              url: o,
              data: s,
            })
          );
        };
      }
      (Ms.prototype[t] = n()), (Ms.prototype[t + "Form"] = n(!0));
    });
  const Ns = Ms;
  class Vu {
    constructor(t) {
      if (typeof t != "function")
        throw new TypeError("executor must be a function.");
      let n;
      this.promise = new Promise(function (o) {
        n = o;
      });
      const r = this;
      this.promise.then((i) => {
        if (!r._listeners) return;
        let o = r._listeners.length;
        for (; o-- > 0; ) r._listeners[o](i);
        r._listeners = null;
      }),
        (this.promise.then = (i) => {
          let o;
          const s = new Promise((l) => {
            r.subscribe(l), (o = l);
          }).then(i);
          return (
            (s.cancel = function () {
              r.unsubscribe(o);
            }),
            s
          );
        }),
        t(function (o, s, l) {
          r.reason || ((r.reason = new zi(o, s, l)), n(r.reason));
        });
    }
    throwIfRequested() {
      if (this.reason) throw this.reason;
    }
    subscribe(t) {
      if (this.reason) {
        t(this.reason);
        return;
      }
      this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
    }
    unsubscribe(t) {
      if (!this._listeners) return;
      const n = this._listeners.indexOf(t);
      n !== -1 && this._listeners.splice(n, 1);
    }
    static source() {
      let t;
      return {
        token: new Vu(function (i) {
          t = i;
        }),
        cancel: t,
      };
    }
  }
  const Zw = Vu;
  function eS(e) {
    return function (n) {
      return e.apply(null, n);
    };
  }
  function tS(e) {
    return C.isObject(e) && e.isAxiosError === !0;
  }
  const Uu = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511,
  };
  Object.entries(Uu).forEach(([e, t]) => {
    Uu[t] = e;
  });
  const nS = Uu;
  function qh(e) {
    const t = new Ns(e),
      n = Th(Ns.prototype.request, t);
    return (
      C.extend(n, Ns.prototype, t, { allOwnKeys: !0 }),
      C.extend(n, t, null, { allOwnKeys: !0 }),
      (n.create = function (i) {
        return qh(Ir(e, i));
      }),
      n
    );
  }
  const me = qh($u);
  (me.Axios = Ns),
    (me.CanceledError = zi),
    (me.CancelToken = Zw),
    (me.isCancel = Hh),
    (me.VERSION = Kh),
    (me.toFormData = ks),
    (me.AxiosError = G),
    (me.Cancel = me.CanceledError),
    (me.all = function (t) {
      return Promise.all(t);
    }),
    (me.spread = eS),
    (me.isAxiosError = tS),
    (me.mergeConfig = Ir),
    (me.AxiosHeaders = Ut),
    (me.formToJSON = (e) => Vh(C.isHTMLForm(e) ? new FormData(e) : e)),
    (me.HttpStatusCode = nS),
    (me.default = me);
  const Ai = me,
    $i = "https://backend.paxify.io";
  async function rS(e, t, n) {
    const r = `${$i}/firebase/tracking`;
    return Ai.post(r, { tracking: e, user: { uid: t, storeId: n } })
      .then((i) => i.data)
      .then((i) => Promise.resolve(i))
      .catch((i) => {
        const o = i.result;
        return Promise.reject(o);
      });
  }
  async function iS(e, t) {
    return Ai.get(`${$i}/firebase/limit/${e}/${t}`).then((n) => n);
  }
  async function oS(e, t) {
    return Ai.get(`${$i}/firebase/analytics/${e}/${t}`).then((n) => n);
  }
  async function sS(e, t) {
    return Ai.get(`${$i}/auth/store/${e}/${t}`).then((n) => n);
  }
  async function lS(e) {
    return Ai.get(`${$i}/auth/plan/${e}`).then((t) => t);
  }
  var Ht = ((e) => (
    (e.INITIALIZED = "reels_init"),
    (e.SLIDE_VIEWED = "reels_slide_viewed"),
    (e.REELS_OPENED = "reels_opened"),
    (e.REELS_CLOSED = "reels_closed"),
    (e.STORY_VIEWED = "reels_story_viewed"),
    (e.INTERACTED = "reels_interacted"),
    (e.SHARED = "reels_shared"),
    (e.LIKED = "reels_liked"),
    (e.CTA_CLICKED = "cta_clicked"),
    e
  ))(Ht || {});
  function aS(e) {
    var t = Object.create(null);
    return function (n) {
      return t[n] === void 0 && (t[n] = e(n)), t[n];
    };
  }
  var Jh = { exports: {} },
    q = {};
  /** @license React v16.13.1
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var xe = typeof Symbol == "function" && Symbol.for,
    Hu = xe ? Symbol.for("react.element") : 60103,
    Wu = xe ? Symbol.for("react.portal") : 60106,
    Rs = xe ? Symbol.for("react.fragment") : 60107,
    zs = xe ? Symbol.for("react.strict_mode") : 60108,
    As = xe ? Symbol.for("react.profiler") : 60114,
    $s = xe ? Symbol.for("react.provider") : 60109,
    js = xe ? Symbol.for("react.context") : 60110,
    Gu = xe ? Symbol.for("react.async_mode") : 60111,
    Ds = xe ? Symbol.for("react.concurrent_mode") : 60111,
    bs = xe ? Symbol.for("react.forward_ref") : 60112,
    Fs = xe ? Symbol.for("react.suspense") : 60113,
    uS = xe ? Symbol.for("react.suspense_list") : 60120,
    Bs = xe ? Symbol.for("react.memo") : 60115,
    Vs = xe ? Symbol.for("react.lazy") : 60116,
    cS = xe ? Symbol.for("react.block") : 60121,
    dS = xe ? Symbol.for("react.fundamental") : 60117,
    fS = xe ? Symbol.for("react.responder") : 60118,
    pS = xe ? Symbol.for("react.scope") : 60119;
  function qe(e) {
    if (typeof e == "object" && e !== null) {
      var t = e.$$typeof;
      switch (t) {
        case Hu:
          switch (((e = e.type), e)) {
            case Gu:
            case Ds:
            case Rs:
            case As:
            case zs:
            case Fs:
              return e;
            default:
              switch (((e = e && e.$$typeof), e)) {
                case js:
                case bs:
                case Vs:
                case Bs:
                case $s:
                  return e;
                default:
                  return t;
              }
          }
        case Wu:
          return t;
      }
    }
  }
  function Zh(e) {
    return qe(e) === Ds;
  }
  (q.AsyncMode = Gu),
    (q.ConcurrentMode = Ds),
    (q.ContextConsumer = js),
    (q.ContextProvider = $s),
    (q.Element = Hu),
    (q.ForwardRef = bs),
    (q.Fragment = Rs),
    (q.Lazy = Vs),
    (q.Memo = Bs),
    (q.Portal = Wu),
    (q.Profiler = As),
    (q.StrictMode = zs),
    (q.Suspense = Fs),
    (q.isAsyncMode = function (e) {
      return Zh(e) || qe(e) === Gu;
    }),
    (q.isConcurrentMode = Zh),
    (q.isContextConsumer = function (e) {
      return qe(e) === js;
    }),
    (q.isContextProvider = function (e) {
      return qe(e) === $s;
    }),
    (q.isElement = function (e) {
      return typeof e == "object" && e !== null && e.$$typeof === Hu;
    }),
    (q.isForwardRef = function (e) {
      return qe(e) === bs;
    }),
    (q.isFragment = function (e) {
      return qe(e) === Rs;
    }),
    (q.isLazy = function (e) {
      return qe(e) === Vs;
    }),
    (q.isMemo = function (e) {
      return qe(e) === Bs;
    }),
    (q.isPortal = function (e) {
      return qe(e) === Wu;
    }),
    (q.isProfiler = function (e) {
      return qe(e) === As;
    }),
    (q.isStrictMode = function (e) {
      return qe(e) === zs;
    }),
    (q.isSuspense = function (e) {
      return qe(e) === Fs;
    }),
    (q.isValidElementType = function (e) {
      return (
        typeof e == "string" ||
        typeof e == "function" ||
        e === Rs ||
        e === Ds ||
        e === As ||
        e === zs ||
        e === Fs ||
        e === uS ||
        (typeof e == "object" &&
          e !== null &&
          (e.$$typeof === Vs ||
            e.$$typeof === Bs ||
            e.$$typeof === $s ||
            e.$$typeof === js ||
            e.$$typeof === bs ||
            e.$$typeof === dS ||
            e.$$typeof === fS ||
            e.$$typeof === pS ||
            e.$$typeof === cS))
      );
    }),
    (q.typeOf = qe),
    (Jh.exports = q);
  var hS = Jh.exports,
    em = hS,
    mS = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    },
    gS = {
      $$typeof: !0,
      compare: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
      type: !0,
    },
    tm = {};
  (tm[em.ForwardRef] = mS), (tm[em.Memo] = gS);
  function vS(e) {
    for (var t = 0, n, r = 0, i = e.length; i >= 4; ++r, i -= 4)
      (n =
        (e.charCodeAt(r) & 255) |
        ((e.charCodeAt(++r) & 255) << 8) |
        ((e.charCodeAt(++r) & 255) << 16) |
        ((e.charCodeAt(++r) & 255) << 24)),
        (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
        (n ^= n >>> 24),
        (t =
          ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
          ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
    switch (i) {
      case 3:
        t ^= (e.charCodeAt(r + 2) & 255) << 16;
      case 2:
        t ^= (e.charCodeAt(r + 1) & 255) << 8;
      case 1:
        (t ^= e.charCodeAt(r) & 255),
          (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
    }
    return (
      (t ^= t >>> 13),
      (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
      ((t ^ (t >>> 15)) >>> 0).toString(36)
    );
  }
  var yS = /[A-Z]|^ms/g,
    wS = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
    nm = function (t) {
      return t.charCodeAt(1) === 45;
    },
    rm = function (t) {
      return t != null && typeof t != "boolean";
    },
    Yu = aS(function (e) {
      return nm(e) ? e : e.replace(yS, "-$&").toLowerCase();
    }),
    im = function (t, n) {
      switch (t) {
        case "animation":
        case "animationName":
          if (typeof n == "string")
            return n.replace(wS, function (r, i, o) {
              return (_t = { name: i, styles: o, next: _t }), i;
            });
      }
      return Lp[t] !== 1 && !nm(t) && typeof n == "number" && n !== 0
        ? n + "px"
        : n;
    },
    sE =
      "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
  function ji(e, t, n) {
    if (n == null) return "";
    if (n.__emotion_styles !== void 0) return n;
    switch (typeof n) {
      case "boolean":
        return "";
      case "object": {
        if (n.anim === 1)
          return (_t = { name: n.name, styles: n.styles, next: _t }), n.name;
        if (n.styles !== void 0) {
          var r = n.next;
          if (r !== void 0)
            for (; r !== void 0; )
              (_t = { name: r.name, styles: r.styles, next: _t }), (r = r.next);
          var i = n.styles + ";";
          return i;
        }
        return SS(e, t, n);
      }
      case "function": {
        if (e !== void 0) {
          var o = _t,
            s = n(e);
          return (_t = o), ji(e, t, s);
        }
        break;
      }
    }
    if (t == null) return n;
    var l = t[n];
    return l !== void 0 ? l : n;
  }
  function SS(e, t, n) {
    var r = "";
    if (Array.isArray(n))
      for (var i = 0; i < n.length; i++) r += ji(e, t, n[i]) + ";";
    else
      for (var o in n) {
        var s = n[o];
        if (typeof s != "object")
          t != null && t[s] !== void 0
            ? (r += o + "{" + t[s] + "}")
            : rm(s) && (r += Yu(o) + ":" + im(o, s) + ";");
        else if (
          Array.isArray(s) &&
          typeof s[0] == "string" &&
          (t == null || t[s[0]] === void 0)
        )
          for (var l = 0; l < s.length; l++)
            rm(s[l]) && (r += Yu(o) + ":" + im(o, s[l]) + ";");
        else {
          var a = ji(e, t, s);
          switch (o) {
            case "animation":
            case "animationName": {
              r += Yu(o) + ":" + a + ";";
              break;
            }
            default:
              r += o + "{" + a + "}";
          }
        }
      }
    return r;
  }
  var om = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
    _t,
    xS = function (t, n, r) {
      if (
        t.length === 1 &&
        typeof t[0] == "object" &&
        t[0] !== null &&
        t[0].styles !== void 0
      )
        return t[0];
      var i = !0,
        o = "";
      _t = void 0;
      var s = t[0];
      s == null || s.raw === void 0
        ? ((i = !1), (o += ji(r, n, s)))
        : (o += s[0]);
      for (var l = 1; l < t.length; l++)
        (o += ji(r, n, t[l])), i && (o += s[l]);
      om.lastIndex = 0;
      for (var a = "", u; (u = om.exec(o)) !== null; ) a += "-" + u[1];
      var c = vS(o) + a;
      return { name: c, styles: o, next: _t };
    };
  function ES() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return xS(t);
  }
  const Us = {
    small: 576,
    medium: 768,
    large: 992,
    xLarge: 1200,
    mdpiScreen: 1279,
    largeLaptop: 1439,
    fourK: 2160,
    tallPhone: "(max-width: 360px) and (min-height: 740px)",
  };
  Object.keys(Us).reduce((e, t) => {
    const n = typeof Us[t] == "string" ? "" : "min-width:",
      r = typeof Us[t] == "string" ? "" : "px";
    return (
      (e[t] = (i) => ES`
        @media (${n + Us[t] + r}) {
          ${i};
        }
      `),
      e
    );
  }, {});
  function TS() {
    return typeof window < "u"
      ? window.matchMedia("(max-width: 1200px) and (min-width: 768px)").matches
      : null;
  }
  function Di() {
    return typeof window < "u"
      ? window.matchMedia("(max-width: 440px)").matches
      : null;
  }
  function CS() {
    if (typeof window < "u") {
      const { innerWidth: e } = window;
      return e < 350 ? "small" : e >= 351 && e <= 400 ? "medium" : "large";
    } else return "medium";
  }
  const sm = {},
    Fn = { device: Di() ? "mobile" : "desktop", time: new Date().getTime() };
  function lm(e, t) {
    if ((clearTimeout(sm[e]), window[e] == null)) {
      sm[e] = setTimeout(() => {
        lm(e, t);
      }, 500);
      return;
    }
    t();
  }
  function Lr(e) {
    lm("dataLayer", () => {
      if (window.dataLayer == null) {
        console.error("dataLayer not available");
        return;
      }
      window.dataLayer.push(e);
    });
  }
  const PS = () => ({ event: Ht.INITIALIZED, payload: { ...Fn } }),
    kS = (e) => ({ event: Ht.SLIDE_VIEWED, payload: { slideId: e.id, ...Fn } }),
    OS = (e) => ({ event: Ht.STORY_VIEWED, payload: { storyId: e.id, ...Fn } }),
    _S = () => ({ event: Ht.REELS_OPENED, payload: { ...Fn } }),
    IS = () => ({ event: Ht.REELS_CLOSED, payload: { ...Fn } }),
    LS = (e, t) => ({ event: e, payload: { storyId: t.id, ...Fn } }),
    MS = (e) => ({ event: Ht.CTA_CLICKED, payload: { storyId: e.id, ...Fn } }),
    Bn = async (e, t, n) => {
      await rS(e, t, n);
    },
    am = "GTM-NP83NW9",
    NS = `https://www.googletagmanager.com/gtm.js?id=${am}`,
    RS = `https://www.googletagmanager.com/ns.html?id=${am}`,
    um =
      "https://cdn.jsdelivr.net/gh/paxify-llc/builds@latest/reelife/logo.png",
    zS = async (e, t) => {
      const n = [];
      for (const r of e) {
        const i = new Image();
        (i.src = r), n.push(i);
      }
      t(n);
    },
    AS = (e) => {
      const t = btoa(e);
      return encodeURIComponent(t);
    },
    $S = (e) => {
      const t = decodeURIComponent(e);
      return atob(t);
    },
    cm = (e) => !!(typeof e == "number" && e >= 0 && isFinite(e)),
    jS = (e, t) => {
      switch (t.type) {
        case "UPDATE_FIELD":
          return { ...e, [t.field]: t.value };
        default:
          return e;
      }
    },
    DS = () => {
      const [e, t] = K.useReducer(jS, {
        isHovering: !1,
        showOverlay: !1,
        overlaySwipePosition: 0,
        activeStory: null,
        activeStoryIndex: 0,
        interactedWithStory: !1,
        contentType: "image",
        activeSlideAudio: null,
        activeSlideProgress: 0,
        activeSlideLoading: !0,
      });
      return {
        storyState: e,
        updateField: (r, i) => {
          t({ type: "UPDATE_FIELD", field: r, value: i });
        },
      };
    },
    bS = (e, t) => {
      switch (t.type) {
        case "UPDATE_CONFIG":
          return { ...e, [t.field]: t.value };
        default:
          return e;
      }
    },
    FS = () => {
      const [e, t] = K.useReducer(bS, { parent: null, modified: null });
      return {
        config: e,
        updateConfig: (r, i) => {
          t({ type: "UPDATE_CONFIG", field: r, value: i });
        },
      };
    },
    BS = () =>
      k.jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: "icon icon-tabler icon-tabler-player-pause-filled",
        width: "35",
        height: "35",
        viewBox: "0 0 24 24",
        strokeWidth: "1.5",
        stroke: "#000000",
        fill: "#000000",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
          k.jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
          k.jsx("path", {
            d: "M9 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z",
            strokeWidth: "0",
            fill: "currentColor",
          }),
          k.jsx("path", {
            d: "M17 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z",
            strokeWidth: "0",
            fill: "currentColor",
          }),
        ],
      }),
    VS = () =>
      k.jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: "icon icon-tabler icon-tabler-player-play-filled",
        width: "35",
        height: "35",
        viewBox: "0 0 24 24",
        strokeWidth: "1.5",
        stroke: "#000000",
        fill: "#000000",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
          k.jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
          k.jsx("path", {
            d: "M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z",
            strokeWidth: "0",
            fill: "currentColor",
          }),
        ],
      }),
    US = ({ size: e = 50, color: t = "white" }) =>
      k.jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        cursor: "pointer",
        width: e,
        height: e,
        fill: t,
        className: "bi bi-chevron-left",
        viewBox: "0 0 16 16",
        children: [
          " ",
          k.jsx("path", {
            fillRule: "evenodd",
            d: "M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z",
          }),
          " ",
        ],
      }),
    HS = ({ size: e = 50, color: t = "white" }) =>
      k.jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        cursor: "pointer",
        width: e,
        height: e,
        fill: t,
        className: "bi bi-chevron-right",
        viewBox: "0 0 16 16",
        children: [
          " ",
          k.jsx("path", {
            fillRule: "evenodd",
            d: "M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z",
          }),
          " ",
        ],
      }),
    dm = B("div")`
  display: flex;
  flex-wrap: wrap;
`,
    bi = B(dm)`
  align-items: center;
  gap: ${(e) => (e.gap ? e.gap : "0")};
`,
    WS = B(dm)`
  flex-direction: column;
  gap: ${(e) => (e.gap ? e.gap : "0")};
`,
    GS = () =>
      k.jsxs("svg", {
        fill: "white",
        id: "filledHeart",
        height: "40px",
        width: "40px",
        "data-name": "filledHeart",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 122.88 107.39",
        children: [
          k.jsx("title", { children: "red-heart" }),
          k.jsx("path", {
            style: { fill: "#ed1b24", fillRule: "evenodd" },
            d: "M60.83,17.18c8-8.35,13.62-15.57,26-17C110-2.46,131.27,21.26,119.57,44.61c-3.33,6.65-10.11,14.56-17.61,22.32-8.23,8.52-17.34,16.87-23.72,23.2l-17.4,17.26L46.46,93.55C29.16,76.89,1,55.92,0,29.94-.63,11.74,13.73.08,30.25.29c14.76.2,21,7.54,30.58,16.89Z",
          }),
        ],
      }),
    YS = ({ fill: e = "white" }) =>
      k.jsx("svg", {
        fill: e,
        height: "40px",
        width: "40px",
        version: "1.1",
        id: "Capa_1",
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        viewBox: "0 0 471.701 471.701",
        xmlSpace: "preserve",
        children: k.jsx("g", {
          children: k.jsx("path", {
            d: `M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,12.9l-13.1-13.1\r
	   c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,13.7,67.6,38.4,92.3\r
	   l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4\r
	   C471.801,124.501,458.301,91.701,433.601,67.001z M414.401,232.701l-178.7,178l-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3\r
	   s10.7-53.7,30.3-73.2c19.5-19.5,45.5-30.3,73.1-30.3c27.7,0,53.8,10.8,73.4,30.4l22.6,22.6c5.3,5.3,13.8,5.3,19.1,0l22.4-22.4\r
	   c19.6-19.6,45.7-30.4,73.3-30.4c27.6,0,53.6,10.8,73.2,30.3c19.6,19.6,30.3,45.6,30.3,73.3\r
	   C444.801,187.101,434.001,213.101,414.401,232.701z`,
          }),
        }),
      }),
    QS = () =>
      k.jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: "icon icon-tabler icon-tabler-share-2",
        width: "35",
        height: "35",
        viewBox: "0 0 24 24",
        strokeWidth: "1.5",
        stroke: "#fff",
        fill: "none",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
          k.jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
          k.jsx("path", {
            d: "M8 9h-1a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-8a2 2 0 0 0 -2 -2h-1",
          }),
          k.jsx("path", { d: "M12 14v-11" }),
          k.jsx("path", { d: "M9 6l3 -3l3 3" }),
        ],
      }),
    Hs = M.createContext({
      style: 1,
      subscription: null,
      isPreview: !1,
      uid: null,
      storeId: null,
    }),
    KS = B.div`
  gap: 5px;
  top: -40px;
  left: 15px;
  z-index: 9999;
  display: flex;
  color: #5e92e7;
  cursor: pointer;
  font-size: 12px;
  position: absolute;
  align-items: flex-end;
  font-family: "Poppins", sans-serif;

  & > img {
    width: 75px !important;
  }

  @media (min-width: 768px) {
    display: none;
  }
`,
    XS = B.img`
  width: 50px !important;
  height: 50px !important;
  border-radius: 50%;
`,
    qS = B(bi)`
  z-index: 100;
  position: absolute;
  bottom: 25px;
  font-family: "Popins", sans-serif;
  font-size: 14px;
  gap: 15px;
  border-radius: 10px;
  width: 100%;

  @media (max-width: 768px) {
    bottom: 75px;
  }
`,
    JS = B(bi)`
  height: 100px;
  width: 100%;
  margin: 10px;
  padding: 10px;

  border-radius: 12px;
  background: rgba(0, 0, 0, 0.5);
  transition: all 0.5s ease-in-out;

  &:hover {
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  }

  @media (max-width: 768px) {
    padding: 10px 15px;
  }
`,
    ZS = B.div`
  cursor: pointer;
  position: absolute;
  right: 15px;
  top: -45px;
  transition: all 0.3s ease-in-out;

  @media (max-width: 768px) {
    top: -50px;
  }
`,
    ex = B(bi)`
  width: 80%;
  flex-wrap: nowrap;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex: 1;
  }
`,
    tx = B.button`
  border: none;
  padding: 15px;
  border-radius: 12px;
  cursor: pointer;
  font-size: 14px;
  color: ${({ textColor: e }) => e || "white"};
  background: ${({ background: e }) => e || "grey"};
  transition: all 0.3s ease-in-out;

  &:hover {
    opacity: 0.8;
    transform: scale(1.05);
  }

  @media (max-width: 440px) {
    font-size: 12px;
  }

  @media (max-width: 350px) {
    font-size: 8px;
  }
`,
    nx = B(WS)`
  max-width: 20vw;
  @media (max-width: 440px) {
    max-width: 35vw;
  }

  @media (max-width: 390px) {
    max-width: 28vw;
  }

  @media (max-width: 350px) {
    font-size: 11px;
    max-width: 23vw;
  }

  & p {
    margin: 0;
  }
`,
    rx = B.div`
  top: -100px;
  right: 17px;
  cursor: pointer;
  position: absolute;
`,
    ix = B.div`
  opacity: ${({ $hover: e }) => (e ? 1 : 0)};
  transition: all 0.3s ease-in-out;

  @media (max-width: 768px) {
    opacity: 1;
  }
`,
    ox = B.div`
  position: relative;
  bottom: -3px;
`,
    sx = ({
      story: e,
      handleCTAClick: t,
      toggleStoryLike: n,
      setShareOpen: r,
      handleShare: i,
      handlePromoClick: o,
      shareOpen: s,
      isHovering: l,
      isLiked: a,
    }) => {
      var c, d, p, h, g, y, T, f, m, v, w;
      const { subscription: u } = M.useContext(Hs);
      return k.jsxs(qS, {
        children: [
          k.jsxs(ix, {
            $hover: l,
            children: [
              ((c = e == null ? void 0 : e.layout) == null
                ? void 0
                : c.likeButton) &&
                k.jsx(ZS, {
                  id: "like",
                  onClick: (x) => {
                    n(x);
                  },
                  children: a ? k.jsx(GS, {}) : k.jsx(YS, {}),
                }),
              k.jsx(rx, {
                onClick: async (x) => {
                  x.stopPropagation(), r(!s), await i();
                },
                children: k.jsx(QS, {}),
              }),
              (u == null ? void 0 : u.plan) === "Basic" &&
                k.jsxs(KS, {
                  onClick: o,
                  children: [
                    k.jsx("img", { src: um }),
                    k.jsx(ox, { children: "By Paxify" }),
                  ],
                }),
            ],
          }),
          ((d = e == null ? void 0 : e.layout) == null ? void 0 : d.design) ===
            1 &&
            ((p = e == null ? void 0 : e.layout) == null ? void 0 : p.cta) &&
            e.layout.cta.text &&
            e.layout.cta.link &&
            k.jsxs(JS, {
              gap: "12px",
              children: [
                k.jsx(XS, {
                  src:
                    (h = e == null ? void 0 : e.layout) == null
                      ? void 0
                      : h.author,
                }),
                k.jsxs(ex, {
                  gap: "25px",
                  children: [
                    k.jsx(nx, {
                      children: k.jsx("div", {
                        dangerouslySetInnerHTML: {
                          __html:
                            (g = e == null ? void 0 : e.layout) == null
                              ? void 0
                              : g.title,
                        },
                      }),
                    }),
                    k.jsx(tx, {
                      background:
                        (T =
                          (y = e == null ? void 0 : e.layout) == null
                            ? void 0
                            : y.cta) == null
                          ? void 0
                          : T.backgroundColor,
                      textColor:
                        (m =
                          (f = e == null ? void 0 : e.layout) == null
                            ? void 0
                            : f.cta) == null
                          ? void 0
                          : m.textColor,
                      onClick: (x) => {
                        var P, S;
                        t(
                          x,
                          (S =
                            (P = e == null ? void 0 : e.layout) == null
                              ? void 0
                              : P.cta) == null
                            ? void 0
                            : S.link
                        );
                      },
                      children:
                        (w =
                          (v = e == null ? void 0 : e.layout) == null
                            ? void 0
                            : v.cta) == null
                          ? void 0
                          : w.text,
                    }),
                  ],
                }),
              ],
            }),
        ],
      });
    },
    lx = K.memo(sx),
    ax = B.div`
  flex-grow: 1;
  height: 4px;
  width: auto;
  border: 1px solid white;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`,
    ux = B.div`
  height: 100%;
  background-color: white;
  width: ${(e) => e.filled}%;
  max-width: 100%;
  display: block !important;
`,
    cx = ({ filled: e = 0 }) =>
      k.jsx(ax, { children: k.jsx(ux, { filled: e }) }),
    dx = K.memo(cx),
    fx = ({ fill: e = "#fff" }) =>
      k.jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: "icon icon-tabler icon-tabler-volume",
        width: "34",
        height: "34",
        viewBox: "0 0 24 24",
        strokeWidth: "1.5",
        stroke: e,
        fill: "none",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
          k.jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
          k.jsx("path", { d: "M15 8a5 5 0 0 1 0 8" }),
          k.jsx("path", { d: "M17.7 5a9 9 0 0 1 0 14" }),
          k.jsx("path", {
            d: "M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5",
          }),
        ],
      }),
    px = ({ fill: e = "#fff" }) =>
      k.jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: "icon icon-tabler icon-tabler-volume-off",
        width: "34",
        height: "34",
        viewBox: "0 0 24 24",
        strokeWidth: "1.5",
        stroke: e,
        fill: "none",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
          k.jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
          k.jsx("path", {
            d: "M15 8a5 5 0 0 1 1.912 4.934m-1.377 2.602a5 5 0 0 1 -.535 .464",
          }),
          k.jsx("path", {
            d: "M17.7 5a9 9 0 0 1 2.362 11.086m-1.676 2.299a9 9 0 0 1 -.686 .615",
          }),
          k.jsx("path", {
            d: "M9.069 5.054l.431 -.554a.8 .8 0 0 1 1.5 .5v2m0 4v8a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l1.294 -1.664",
          }),
          k.jsx("path", { d: "M3 3l18 18" }),
        ],
      }),
    hx = B.div`
  gap: 4px;
  top: 0;
  width: 100%;
  padding: 0 15px;
  box-sizing: border-box;
  margin: 0 auto;
  display: flex;
  padding: 5px 10px;
  align-items: center;
  margin-bottom: 5px;
  flex-flow: row wrap;
`,
    mx = B.div`
  top: 25px;
  left: 10px;
  position: absolute;
  cursor: pointer;
  font-size: 30px;
  font-weight: 900;
  z-index: 99999999999;
  color: ${(e) => e.color};
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`,
    gx = B.div`
  width: 100%;
  position: absolute;
  padding: 10px 0;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.3) 0%,
    rgba(100, 100, 100, 0.1) 50%,
    rgba(255, 255, 255, 0) 100%
  );
`,
    vx = B.div`
  right: 5px;
  z-index: 50;
  cursor: pointer;
  position: absolute;
  transition: all 0.3s ease-in-out;

  @media (max-width: 768px) {
    top: 25px;
  }
`,
    yx = ({
      activeStory: e,
      filteredConfig: t,
      isProgressBarFilled: n,
      closeOverlay: r,
      isHovering: i,
      audioRef: o,
      videoRef: s,
    }) => {
      var u, c;
      const [l, a] = M.useState(!1);
      return (
        M.useEffect(() => {
          o.current && (o.current.volume = l ? 0 : 1);
        }, [l, o]),
        M.useEffect(() => {
          s.current && (s.current.volume = l ? 0 : 1);
        }, [l, s]),
        k.jsxs(gx, {
          children: [
            k.jsx(hx, {
              children:
                e == null
                  ? void 0
                  : e.player.map((d, p) => k.jsx(dx, { filled: n(p) }, d.id)),
            }),
            k.jsx(mx, {
              color:
                ((c =
                  (u = t == null ? void 0 : t.config) == null
                    ? void 0
                    : u.close) == null
                  ? void 0
                  : c.color) ?? "black",
              onClick: (d) => {
                d.stopPropagation(), r();
              },
              children: "✕",
            }),
            (o || s) &&
              k.jsx(vx, {
                onClick: (d) => {
                  d.stopPropagation(), a(!l);
                },
                $hover: i,
                children: l ? k.jsx(px, {}) : k.jsx(fx, {}),
              }),
          ],
        })
      );
    },
    wx = K.memo(yx),
    Sx = 4500,
    xx = B(bi)`
  overflow: hidden;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: ${({ layout: e }) => (e === 1 ? "220px" : "320px")};

  @media (max-width: 768px) {
    min-height: unset;
  }
`,
    Qu = B.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  padding: 2px;
  position: absolute;
  bottom: 10px;
  right: 62px;
  border: ${({ width: e, color: t, $isViewed: n }) =>
    `${n ? "1" : e}px solid ${n ? "grey" : t}`};
  transition: all 0.2s;

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    right: 65px;
  }

  @media (max-width: 400px) {
    right: 60px;
  }

  @media (max-width: 350px) {
    right: 40px;
  }
`,
    fm = _i`
  position: relative;
  cursor: pointer;
`,
    Ex = B("div")`
  ${fm}
  width: 200px;
  height: 300px;
  border-radius: 15px;
  background-image: url(${({ background: e }) => e});
  background-repeat: no-repeat;
  background-size: cover;
  transition: all 0.3s ease-in-out;

  &:hover {
    width: 210px;
    height: 320px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.7);
  }

  &:hover ${Qu} {
    opacity: 0;
  }

  @media (max-width: 768px) {
    width: 190px;
    height: 320px;

    &:hover {
      width: 190px;
      height: 320px;
    }

    &:hover ${Qu} {
      opacity: 1;
    }
  }

  @media (max-width: 350px) {
    width: 150px;
    height: 250px;

    &:hover {
      width: 150px;
      height: 250px;
    }
  }
`,
    Tx = B.div`
  ${fm}
  padding: 5px;
  border-radius: 50%;
  border: ${({ width: e, color: t, $isViewed: n }) =>
    `${n ? "1" : e}px solid ${n ? "grey" : t}`};
  width: fit-content;
`,
    Cx = B.div`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  padding: 2px;
  background-image: url(${({ background: e }) => e});
  background-size: cover;
  transition: height 0.3s ease-in-out, width 0.3s ease-in-out;

  &:hover {
    width: 200px;
    height: 200px;
  }

  @media (max-width: 768px) {
    &:hover {
      width: 180px;
      height: 180px;
    }
  }

  @media (max-width: 400px) {
    width: 160px;
    height: 160px;

    &:hover {
      width: 160px;
      height: 160px;
    }
  }

  @media (max-width: 350px) {
    width: 140px;
    height: 140px;

    &:hover {
      width: 140px;
      height: 140px;
    }
  }
`,
    Px = B.div`
  overflow: hidden;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 9999;

  opacity: ${({ $swipePosition: e }) => {
    const t = 1 - Math.abs(e / 1e3);
    return t > 0 ? t : 0;
  }};
  transform: translateY(${(e) => e.$swipePosition}px);
  transition: transform 0.1s ease-in-out;

  @media (max-width: 768px) {
    background-color: rgba(0, 0, 0, 0.85);
  }
`,
    kx = B(Iu)`
  position: relative;
  max-height: 95vh;
  max-width: 100vw;
  padding: 0 50px;

  @media (max-width: 768px) {
    padding: 0;
    height: 100vh;
    max-height: unset;
  }

  & > div {
    display: flex;
    align-items: center;
  }

  & > div > div {
    display: flex;
    justify-content: center;
  }

  .swiper-slide-prev,
  .swiper-slide-next {
    z-index: -1;
  }
`,
    Ox = B.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 10;
  border-radius: 12px;
  background: rgba(0, 0, 0, 0.9);
`,
    _x = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      margin: "0 auto",
    },
    pm = _i`
  z-index: 10;
  top: 10px;
  width: 30%;
  cursor: pointer;
  position: absolute;
  height: calc(100% - 10px);
  display: block !important;
`,
    Ix = B.div`
  left: 0;
  ${pm}
`,
    Lx = B.div`
  right: 0;
  ${pm}
`,
    Mx = B.div`
  position: relative;
  min-height: 350px;
  width: ${(e) => (e.$isActive ? "425px" : "225px")};

  & img {
    width: 100%;
  }

  & video {
    width: 100%;
    height: 756px;
    max-height: 100vh;
  }
`,
    Ku = _i`
  border-radius: 12px;
  max-height: 100vh;

  @media (max-width: 768px) {
    border-radius: 0;
  }
`,
    Nx = B.img`
  z-index: -1;
  height: 100%;
  min-height: 85vh;

  ${Ku}
`,
    hm = B.img`
  top: 35%;
  left: 30%;
  cursor: pointer;
  padding: 5px;
  position: absolute;
  border-radius: 50%;
  width: 80px !important;
  height: 80px !important;

  border: ${({ width: e, color: t, $isViewed: n }) =>
    `${n ? "1" : e}px solid ${n ? "grey" : t}`};
  transition: all 0.2s;

  &:hover {
    opacity: 0;
  }
`,
    Rx = B.img`
  cursor: pointer;
  position: relative;
  height: 350px;
  ${Ku}

  &:hover {
    ${hm} {
      opacity: 0;
    }
`,
    zx = B.video`
  z-index: -1;
  object-fit: fill;
  height: 85vh;
  min-height: 85vh;

  ${Ku}
`,
    mm = _i`
  top: 45%;
  z-index: 999999;
  cursor: pointer;
  position: absolute;
`,
    Ax = B.div`
  left: -80px;
  ${mm}

  @media (max-width: 768px) {
    left: 0;
  }
`,
    $x = B.div`
  right: -80px;
  ${mm}

  @media (max-width: 768px) {
    right: 0;
  }
`,
    jx = B(Iu)`
  height: ${({ layout: e }) => (e === 1 ? "400px" : "250px")};
  margin: 0 10px;
  display: flex;
  align-items: center;
  max-width: 1200px;
  overflow: scroll !important;
  position: relative;

  // Scrollbar styles for different browsers
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  &::-webkit-scrollbar-thumb {
    display: none;
    background-color: transparent;
  }
`,
    Dx = B.div`
  position: absolute;
  width: 1px;
  height: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  z-index: 10;
  opacity: 0;
  transition: all 0.3s;
  background: rgba(0, 0, 0, 0.5);
`,
    bx = B.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,
    Fx = B.div`
  gap: 5px;
  right: 10px;
  bottom: 10px;
  display: flex;
  z-index: 9999;
  color: #5e92e7;
  cursor: pointer;
  font-size: 12px;
  position: absolute;
  align-items: flex-end;
  font-family: "Poppins", sans-serif;

  @media (max-width: 768px) {
    display: none;
  }
`,
    Bx = B.div`
  gap: 25px;
  width: 100%;
  display: flex;
  overflow-x: auto;
  max-width: 1200px;
  justify-content: ${({ $hasOverflow: e }) => (e ? "unset" : "space-around")};

  @media (max-width: 768px) {
    display: none;
  }
`,
    Vx = B(Lu)`
  display: flex;
  height: fit-content;
  align-items: center;
  justify-content: center;
`,
    Ux = ({ settings: e }) => {
      const { config: t, updateConfig: n } = FS(),
        { storyState: r, updateField: i } = DS(),
        [o, s] = M.useState(!1),
        {
          uid: l,
          storeId: a,
          subscription: u,
          isPreview: c,
          style: d,
        } = M.useContext(Hs),
        p = M.useRef(null),
        h = M.useRef(null),
        [g, y] = M.useState(null),
        [T, f] = M.useState(0),
        [m, v] = M.useState(),
        [w, x] = M.useState(),
        [P, S] = M.useState([]),
        [O, _] = M.useState(!1),
        [j, L] = M.useState(!1),
        [$, V] = M.useState(null),
        fe = () => {
          Fe(), i("overlaySwipePosition", 0);
        },
        at = (E) => {
          r.showOverlay &&
            E.dir === "Down" &&
            (L(!0), i("overlaySwipePosition", E.deltaY));
        },
        ut = () => {
          i("overlaySwipePosition", 0), L(!1);
        },
        St = dv({
          onSwipedDown: () => fe(),
          onSwiping: (E) => at(E),
          onSwiped: () => ut(),
          delta: 30,
          preventScrollOnSwipe: !0,
        }),
        N = document.getElementById("story-container");
      let A = !1;
      N &&
        N.addEventListener("wheel", (E) => {
          A || ((A = !0), N.scrollLeft, E.deltaX);
        }),
        M.useEffect(() => {
          const R = new URLSearchParams(window.location.search).get("reelife");
          if (R) {
            const F = $S(R),
              [b, ie] = F.split("&"),
              ge = parseInt(b.split("story=")[1]) || 0,
              Ve = parseInt(ie.split("slide=")[1]) || 0;
            if (cm(ge) && cm(Ve)) {
              if (e && e.stories) {
                const Lt = e.stories[ge];
                i("activeStory", Lt),
                  i("activeStoryIndex", ge),
                  i("activeSlideProgress", 0),
                  i("showOverlay", !0),
                  f(Ve);
              }
            } else console.error("Invalid link.");
          }
        }, []),
        M.useEffect(() => {
          const E = p.current;
          r.showOverlay
            ? ((document.body.style.overflow = "hidden"),
              E == null || E.pause())
            : (document.body.style.overflow = "visible");
        }, [r.showOverlay]),
        M.useEffect(() => {
          const E = p.current,
            R = () => {
              document.hidden && (L(!0), E == null || E.pause());
            };
          return (
            document.addEventListener("visibilitychange", R),
            () => {
              document.removeEventListener("visibilitychange", R);
            }
          );
        }, []),
        M.useEffect(() => {
          const E = () => !!document.getElementById("paxify-analytics"),
            R = () => {
              const b = document.createElement("script");
              (b.id = "paxify-analytics"),
                (b.src = NS),
                (b.async = !0),
                (
                  document.head || document.getElementsByTagName("head")[0]
                ).appendChild(b);
            },
            F = () => {
              const b = document.createElement("noscript"),
                ie = document.createElement("iframe");
              (ie.src = RS),
                (ie.height = "0"),
                (ie.width = "0"),
                (ie.style.display = "none"),
                (ie.style.visibility = "hidden"),
                b.appendChild(ie);
              const ge =
                document.body || document.getElementsByTagName("body")[0];
              ge.insertBefore(b, ge.firstChild);
            };
          E() || (R(), F());
        }, []),
        M.useEffect(() => {
          var E, R;
          if (
            (R = (E = r.activeStory) == null ? void 0 : E.player) != null &&
            R[T]
          ) {
            const F = kS(r.activeStory);
            Lr(F), c || Bn(F, l, a);
          }
        }, [T]),
        M.useEffect(() => {
          const E = e;
          n("parent", E), y(E);
        }, []),
        M.useEffect(() => {
          if (r.activeStory && r.activeStory.player.length === T + 1) {
            const E = OS(r.activeStory);
            Lr(E), c || Bn(E, l, a);
          }
        }, [T, r.activeStory]),
        M.useEffect(() => {
          (async () => {
            var b;
            const R =
                (b = t.parent) == null
                  ? void 0
                  : b.stories.map((ie) =>
                      ie.player.map((ge) => {
                        var Ve;
                        return (
                          ge.content.type === "image" &&
                          ((Ve = ge == null ? void 0 : ge.content) == null
                            ? void 0
                            : Ve.source)
                        );
                      })
                    ),
              F = R == null ? void 0 : R.flat().filter((ie) => ie);
            await zS(F ?? [], S);
          })();
        }, [t.parent]),
        M.useEffect(() => {
          var E, R, F, b;
          if (r.activeStory && (E = r.activeStory) != null && E.player[T]) {
            const ie =
              ((b =
                (F =
                  (R = r.activeStory) == null
                    ? void 0
                    : R.player[T].enhancements) == null
                  ? void 0
                  : F.audio) == null
                ? void 0
                : b.src) || null;
            i("activeSlideAudio", ie);
          }
        }, [r.activeStory, T]),
        M.useEffect(() => {
          const E = p.current;
          if (r.contentType === "image") {
            if (!r.activeSlideAudio && E) {
              E.pause(), (E.currentTime = 0);
              return;
            }
            if (E && !j && !r.activeSlideLoading && r.contentType === "image") {
              const R = E == null ? void 0 : E.play();
              R !== void 0 &&
                R.catch((F) => {
                  console.error("Autoplay error:", F);
                });
            }
          }
          return () => {
            E && (E.pause(), (E.currentTime = 0));
          };
        }, [r.activeSlideAudio, r.contentType, r.activeSlideLoading]),
        M.useEffect(() => {
          const E = p.current;
          r.contentType === "image" &&
            !r.activeSlideLoading &&
            (j ? E == null || E.pause() : E == null || E.play());
        }, [j, r.contentType, r.activeSlideLoading]),
        M.useEffect(() => {
          L(!1);
        }, [r.activeStoryIndex]),
        M.useEffect(() => {
          L(!!O);
        }, [O]),
        M.useEffect(() => {
          r.activeSlideProgress >= 100 &&
            r.activeStory &&
            t.parent &&
            (f((E) => {
              var R, F;
              return (
                E ===
                  ((R = r.activeStory) == null ? void 0 : R.player.length) -
                    1 &&
                  (r.activeStoryIndex !== t.parent.stories.length - 1
                    ? w == null || w.slideNext()
                    : Fe()),
                (E + 1) %
                  ((F = r.activeStory) == null ? void 0 : F.player.length)
              );
            }),
            i("activeSlideProgress", 0));
        }, [r.activeSlideProgress]),
        M.useEffect(() => {
          if (!j && r.activeStory && !r.activeSlideLoading) {
            const R =
                (1500 / (r.activeStory.player[T].content.timeout || Sx)) * 2,
              F = setInterval(() => {
                r.activeSlideLoading ||
                  i("activeSlideProgress", r.activeSlideProgress + R);
              }, 25);
            return () => {
              clearInterval(F);
            };
          }
        }, [r.activeStory, r.activeSlideProgress, T, r.activeSlideLoading, j]),
        M.useEffect(() => {
          i("activeSlideProgress", 0);
        }, [r.activeStory, T]),
        M.useEffect(() => {
          if (!r.showOverlay) {
            const E = { ...g };
            if (E.stories) {
              const R = E.stories.filter((b) => b.container.isViewed),
                F = E.stories.filter((b) => !b.container.isViewed);
              (E.stories = [...F, ...R]), y((b) => ({ ...b, ...E }));
            }
          }
        }, [r.showOverlay]);
      const D = () => {
          const E = _S();
          Lr(E), c || Bn(E, l, a);
        },
        Y = (E) => {
          const R = LS(E, r.activeStory);
          i("interactedWithStory", !0), Lr(R), c || Bn(R, l, a);
        },
        J = () => {
          const E = IS();
          Lr(E), c || Bn(E, l, a);
        },
        Pe = async () => {
          const E = `https://${window.location.host}/?reelife=${AS(
            `story=${r.activeStoryIndex}&slide=${T}`
          )}`;
          if (navigator.share) {
            Y(Ht.SHARED);
            try {
              await navigator.share({
                url: E,
                title: "Paxify Reels",
                text: "Check out this story on Paxify ReeLife!",
              });
            } catch (R) {
              console.error(`Error trying to share: ${R}`);
            }
          } else console.error("Web Share API not supported.");
        },
        Je = (E) => {
          var F;
          D();
          const R =
            ((F = t.parent) == null
              ? void 0
              : F.stories.findIndex((b) => b.id === E.id)) || 0;
          i("activeStoryIndex", R),
            i("activeSlideProgress", 0),
            f(0),
            i("activeStory", E),
            L(!1),
            i("showOverlay", !0);
        },
        Fe = () => {
          J(), i("showOverlay", !1), i("activeStory", null);
        },
        Be = (E) => {
          var R, F, b;
          return k.jsx(Ex, {
            background: E.player[0].content.source,
            onClick: () => Je(E),
            children: k.jsx(Qu, {
              $isViewed: E.container.isViewed,
              width: E.container.border.width,
              color: E.container.border.color,
              src:
                (b =
                  (F =
                    (R = E == null ? void 0 : E.player) == null
                      ? void 0
                      : R[0]) == null
                    ? void 0
                    : F.layout) == null
                  ? void 0
                  : b.author,
              alt: "story",
            }),
          });
        },
        ct = (E) =>
          k.jsx(Tx, {
            $isViewed: E.container.isViewed,
            width: E.container.border.width,
            color: E.container.border.color,
            children: k.jsx(Cx, {
              background: E.player[0].content.source,
              onClick: () => Je(E),
            }),
          }),
        Nr = (E, R) => {
          switch (E) {
            case 1:
              return ct(R);
            case 2:
              return Be(R);
            default:
              return console.error(`No layout exist for id ${E}`), null;
          }
        },
        vn = () => {
          var R, F, b, ie, ge, Ve, Lt, yn, wn;
          const E = CS();
          return g
            ? window.innerWidth > 768 && window.innerWidth < 1200
              ? Math.min(
                  (b =
                    (F = (R = t.parent) == null ? void 0 : R.config) == null
                      ? void 0
                      : F.container.storiesPerView) == null
                    ? void 0
                    : b.tablet,
                  g == null ? void 0 : g.stories.length
                )
              : window.innerWidth >= 1200
              ? Math.min(
                  (Ve =
                    (ge = (ie = t.parent) == null ? void 0 : ie.config) == null
                      ? void 0
                      : ge.container.storiesPerView) == null
                    ? void 0
                    : Ve.desktop,
                  g == null ? void 0 : g.stories.length
                )
              : Math.min(
                  (wn =
                    (yn = (Lt = t.parent) == null ? void 0 : Lt.config) == null
                      ? void 0
                      : yn.container.storiesPerView) == null
                    ? void 0
                    : wn.mobile[E],
                  g == null ? void 0 : g.stories.length
                )
            : 1;
        },
        dt = (E) => {
          E.stopPropagation(),
            f(
              (R) => (
                T === 0 &&
                  (r.activeStoryIndex !== 0
                    ? w == null || w.slidePrev()
                    : Fe()),
                R - 1
              )
            );
        },
        Rr = (E) => {
          E.stopPropagation(),
            r.activeStory &&
              t.parent &&
              f((R) => {
                var F, b;
                return R ===
                  ((F = r.activeStory) == null ? void 0 : F.player.length) - 1
                  ? (r.activeStoryIndex !== t.parent.stories.length - 1
                      ? w.slideNext()
                      : Fe(),
                    0)
                  : (R + 1) %
                      ((b = r.activeStory) == null ? void 0 : b.player.length);
              });
        },
        Un = (E, R) => {
          E.stopPropagation(),
            i("activeSlideLoading", !0),
            R === "LEFT" ? dt(E) : Rr(E);
        },
        It = () => {
          var E, R, F, b, ie, ge, Ve, Lt, yn, wn, Fi;
          return (R = (E = t.parent) == null ? void 0 : E.config) != null &&
            R.overlay.slidesPerView &&
            g
            ? Di()
              ? Math.min(
                  (ie =
                    (b = (F = t.parent) == null ? void 0 : F.config) == null
                      ? void 0
                      : b.overlay.slidesPerView) == null
                    ? void 0
                    : ie.mobile,
                  g == null ? void 0 : g.stories.length
                )
              : TS()
              ? g.stories.length <= 3
                ? 1
                : Math.min(
                    (Lt =
                      (Ve = (ge = t.parent) == null ? void 0 : ge.config) ==
                      null
                        ? void 0
                        : Ve.overlay.slidesPerView) == null
                      ? void 0
                      : Lt.tablet,
                    g.stories.length
                  )
              : g.stories.length <= 3
              ? 1
              : Math.min(
                  (Fi =
                    (wn = (yn = t.parent) == null ? void 0 : yn.config) == null
                      ? void 0
                      : wn.overlay.slidesPerView) == null
                    ? void 0
                    : Fi.desktop,
                  g.stories.length
                )
            : 1;
        };
      M.useEffect(
        () => () => {
          clearTimeout($);
        },
        [$]
      ),
        M.useEffect(() => {
          var R;
          const E =
            (R = r.activeStory) == null ? void 0 : R.player[T].content.type;
          i("contentType", E);
        }, [r.activeStory, T]);
      const Qx = () => {
          const E = h.current;
          E && E.play();
        },
        Kx = () => {
          const E = h.current;
          E && E.pause();
        };
      M.useEffect(() => {
        j ? Kx() : Qx();
      }, [j]);
      const ym = () => {
          var E, R;
          L(!0),
            (E = p.current) == null || E.pause(),
            (R = h.current) == null || R.pause(),
            window.open("https://paxify.io", "_blank");
        },
        wm = (E) => {
          E.stopPropagation();
          const R = setTimeout(() => {
            const F = document.getElementById("play-pause");
            F &&
              ((F.style.width = "85px"),
              (F.style.height = "85px"),
              (F.style.opacity = "1"),
              setTimeout(() => {
                (F.style.opacity = "0"),
                  (F.style.width = "1px"),
                  (F.style.height = "1px");
              }, 300)),
              L((b) => !b);
          }, 200);
          V(R);
        },
        Sm = (E) => {
          E.stopPropagation(), clearTimeout($);
          const R = document.getElementById("like");
          R &&
            ((R.style.transform = "scale(1.5)"),
            setTimeout(() => {
              R.style.transform = "scale(1)";
            }, 300)),
            s((F) => {
              const b = !F;
              return b && Y(Ht.LIKED), b;
            });
        },
        Xx = (E) => (E === T ? r.activeSlideProgress : E < T ? 100 : 0),
        qx = {
          setStoryPause: L,
          toggleStoryLike: Sm,
          setShareOpen: _,
          handleShare: Pe,
          shareOpen: O,
          handleCTAClick: (E, R) => {
            E.stopPropagation();
            const F = MS(r.activeStory);
            if ((c || Bn(F, l, a), L(!0), r.contentType === "video/mp4")) {
              const b = h.current;
              b && b.pause();
            }
            window.open(R, "_blank");
          },
          handlePromoClick: ym,
          isLiked: o,
          ...t,
        },
        Jx = {
          filteredConfig: g,
          isProgressBarFilled: Xx,
          closeOverlay: Fe,
          audioRef: p,
          videoRef: h,
          ...t,
        };
      return k.jsxs(xx, {
        layout: d,
        className: "app-container",
        id: "story-container",
        children: [
          Di() &&
            k.jsx(jx, {
              onInit: (E) => {
                v(E);
              },
              style: {
                minWidth: Di() ? "100vw" : "1200px",
                height: "fit-content",
              },
              layout: d,
              slidesPerView: vn(),
              children:
                g == null
                  ? void 0
                  : g.stories.map((E) =>
                      k.jsx(Vx, { children: Nr(d, E) }, E.id)
                    ),
            }),
          k.jsx(Bx, {
            $hasOverflow: g ? (g == null ? void 0 : g.stories.length) > 5 : !1,
            children:
              g == null
                ? void 0
                : g.stories.map((E) =>
                    k.jsx(bi, { gap: "25px", children: Nr(d, E) }, E.id)
                  ),
          }),
          r.showOverlay &&
            k.jsxs(Px, {
              $swipePosition: r.overlaySwipePosition,
              onClick: Fe,
              ...St,
              children: [
                k.jsx("audio", {
                  ref: p,
                  src: r.activeSlideAudio,
                  autoPlay: !1,
                }),
                k.jsx(kx, {
                  centeredSlides: !0,
                  onInit: (E) => {
                    x(E);
                  },
                  initialSlide: r.activeStoryIndex,
                  spaceBetween: Di() ? 30 : 0,
                  slidesPerView: It(),
                  onSlideChange: (E) => {
                    var R;
                    i(
                      "activeStory",
                      (R = t.parent) == null ? void 0 : R.stories[E.activeIndex]
                    ),
                      i("activeStoryIndex", E.activeIndex),
                      f(0);
                  },
                  navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  },
                  children:
                    g == null
                      ? void 0
                      : g.stories.map((E, R) => {
                          var Ve, Lt, yn, wn, Fi, xm, Em, Tm, Cm, Pm;
                          const F = R === r.activeStoryIndex,
                            b =
                              (Ve = r.activeStory) == null
                                ? void 0
                                : Ve.player[T],
                            ie = r.activeSlideLoading && F,
                            ge =
                              ((yn =
                                (Lt = g == null ? void 0 : g.config) == null
                                  ? void 0
                                  : Lt.navigation) == null
                                ? void 0
                                : yn.show) ?? !1;
                          return k.jsx(
                            Lu,
                            {
                              children: k.jsxs(
                                Mx,
                                {
                                  $isActive: F,
                                  children: [
                                    ie &&
                                      k.jsx(Ox, {
                                        onClick: (ve) => ve.stopPropagation(),
                                        children: k.jsx(ev, {
                                          loading: !0,
                                          color: "#a1f1f1",
                                          cssOverride: _x,
                                          size: 150,
                                          "aria-label": "Loading Spinner",
                                        }),
                                      }),
                                    F &&
                                      !ie &&
                                      k.jsx(wx, {
                                        activeStory: r.activeStory,
                                        ...Jx,
                                      }),
                                    F &&
                                      k.jsxs(bx, {
                                        onMouseEnter: () => n("isHovering", !0),
                                        onMouseLeave: () => n("isHovering", !1),
                                        onClick: (ve) => wm(ve),
                                        onDoubleClick: (ve) => Sm(ve),
                                        children: [
                                          k.jsx(Ix, {
                                            onClick: (ve) => Un(ve, "LEFT"),
                                          }),
                                          k.jsx(Lx, {
                                            onClick: (ve) => Un(ve, "RIGHT"),
                                          }),
                                          k.jsx(Dx, {
                                            id: "play-pause",
                                            children: j
                                              ? k.jsx(VS, {})
                                              : k.jsx(BS, {}),
                                          }),
                                          (b == null
                                            ? void 0
                                            : b.content.type) === "image" &&
                                            k.jsx(Nx, {
                                              id: "story-image",
                                              onClick: (ve) => wm(ve),
                                              onLoad: () =>
                                                i("activeSlideLoading", !1),
                                              src:
                                                b == null
                                                  ? void 0
                                                  : b.content.source,
                                            }),
                                          (b == null
                                            ? void 0
                                            : b.content.type) === "video/mp4" &&
                                            k.jsx(zx, {
                                              playsInline: !0,
                                              ref: h,
                                              onLoadedData: () => {
                                                L(!1),
                                                  i("activeSlideLoading", !1);
                                              },
                                              autoPlay: !j,
                                              children: k.jsx("source", {
                                                src: b.content.source,
                                                type: "video/mp4",
                                              }),
                                            }),
                                          ge &&
                                            k.jsxs(k.Fragment, {
                                              children: [
                                                r.activeStoryIndex !== 0 &&
                                                  k.jsx(Ax, {
                                                    onClick: (ve) => dt(ve),
                                                    children: k.jsx(US, {
                                                      color:
                                                        ((Fi =
                                                          (wn =
                                                            g == null
                                                              ? void 0
                                                              : g.config) ==
                                                          null
                                                            ? void 0
                                                            : wn.navigation) ==
                                                        null
                                                          ? void 0
                                                          : Fi.color) ??
                                                        "white",
                                                    }),
                                                  }),
                                                r.activeStoryIndex !==
                                                  g.stories.length - 1 &&
                                                  k.jsx($x, {
                                                    onClick: (ve) => Rr(ve),
                                                    children: k.jsx(HS, {
                                                      color:
                                                        ((Em =
                                                          (xm =
                                                            g == null
                                                              ? void 0
                                                              : g.config) ==
                                                          null
                                                            ? void 0
                                                            : xm.navigation) ==
                                                        null
                                                          ? void 0
                                                          : Em.color) ??
                                                        "white",
                                                    }),
                                                  }),
                                              ],
                                            }),
                                          k.jsx(lx, {
                                            story: b,
                                            activeStory: r,
                                            ...qx,
                                          }),
                                        ],
                                      }),
                                    !F &&
                                      k.jsxs(k.Fragment, {
                                        children: [
                                          k.jsx(Rx, {
                                            onClick: (ve) => {
                                              ve.stopPropagation(),
                                                w == null || w.slideTo(R);
                                            },
                                            src: E.player[0].content.source,
                                          }),
                                          k.jsx(hm, {
                                            onClick: (ve) => {
                                              ve.stopPropagation(),
                                                w == null || w.slideTo(R);
                                            },
                                            $isViewed: E.container.isViewed,
                                            width: E.container.border.width,
                                            color: E.container.border.color,
                                            src:
                                              (Pm =
                                                (Cm =
                                                  (Tm =
                                                    E == null
                                                      ? void 0
                                                      : E.player) == null
                                                    ? void 0
                                                    : Tm[0]) == null
                                                  ? void 0
                                                  : Cm.layout) == null
                                                ? void 0
                                                : Pm.author,
                                          }),
                                        ],
                                      }),
                                  ],
                                },
                                E.id
                              ),
                            },
                            E.id
                          );
                        }),
                }),
                (u == null ? void 0 : u.plan) === "Basic" &&
                  k.jsxs(Fx, {
                    onClick: ym,
                    children: [
                      k.jsx("img", { width: 150, src: um }),
                      " By Paxify",
                    ],
                  }),
              ],
            }),
        ],
      });
    },
    Hx = ({ settings: e = {} }) => {
      const { uid: t, storeId: n, isPreview: r } = M.useContext(Hs);
      if (!r) {
        const i = PS();
        Lr(i), Bn(i, t, n);
      }
      return k.jsx(Ux, { settings: e });
    },
    gm = [],
    Wx = {
      id: "reels-demo-circle",
      config: {
        layout: 2,
        navigation: { show: !0, color: "white" },
        container: {
          storiesPerView: {
            mobile: { small: 1.5, medium: 1.6, large: 1.7 },
            tablet: 3,
            desktop: 3.7,
          },
        },
        overlay: { slidesPerView: { mobile: 1, tablet: 1, desktop: 3 } },
        close: { show: !0, color: "white" },
      },
      stories: [...gm],
    },
    Gx = {
      id: "reels-demo-rectangle",
      config: {
        layout: 1,
        navigation: { show: !0, color: "white" },
        container: {
          storiesPerView: {
            mobile: { small: 1.5, medium: 1.6, large: 1.7 },
            tablet: 3,
            desktop: 4,
          },
        },
        overlay: { slidesPerView: { mobile: 1, tablet: 1, desktop: 3 } },
        close: { show: !0, color: "white" },
      },
      stories: [...gm],
    },
    Mr = { accessKey: "E7jh1uy2srdmxQ7o5ZbzovwUFeA2", config: [Wx, Gx] },
    Vn = B.div`
  background-color: red;
  color: white;
  padding: 10px;
  border-radius: 5px;
  font-family: sans-serif;
`,
    vm = B.div`
  background-color: yellow;
  color: black;
  padding: 10px;
  border-radius: 5px;
  font-family: sans-serif;
`;
  class Yx extends M.Component {
    constructor(t) {
      super(t), (this.state = { dataFetched: !1 });
    }
    render() {
      const {
        uid: t,
        storeId: n,
        elementId: r,
        isPreviewMode: i = !1,
        style: o = 1,
      } = this.props;
      return (
        iS(t, n)
          .then((s) => {
            if (s.status !== 200)
              return Ze.createRoot(document.getElementById(r)).render(
                k.jsx(Vn, {
                  children:
                    "Unable to contact Paxify servers. Please try again later.",
                })
              );
            if (!s.data.data)
              return Ze.createRoot(document.getElementById(r)).render(
                k.jsx(Vn, {
                  children:
                    "You have reached the limit of your current plan. Please upgrade to continue using Reelife by Paxify.",
                })
              );
            oS(t, n)
              .then(async (a) => {
                var g, y;
                const u = await sS(t, n),
                  c = await lS(t),
                  p = (
                    (g = a == null ? void 0 : a.data) == null ? void 0 : g.data
                  ).filter((T) => T !== null);
                if (
                  ((Mr.config[0].stories = p),
                  Mr.config[0].stories.length === 0)
                )
                  return Ze.createRoot(document.getElementById(r)).render(
                    k.jsx(vm, {
                      children:
                        'No stories found. Please add stories to your store to use Reelife by Paxify. If you have already added them, please double check to see if they are set to "Active".',
                    })
                  );
                if (c.status !== 200)
                  return Ze.createRoot(document.getElementById(r)).render(
                    k.jsx(Vn, {
                      children:
                        "Unable to contact Paxify servers. Please try again later.",
                    })
                  );
                const h =
                  (y = c == null ? void 0 : c.data) == null ? void 0 : y.plan;
                if (!h.isActive)
                  return Ze.createRoot(document.getElementById(r)).render(
                    k.jsx(Vn, {
                      children:
                        "Your subscription has expired. Please renew your subscription to use Reelife by Paxify.",
                    })
                  );
                if (
                  (h.plan === "Basic" &&
                    Mr.config[0].stories.length > 5 &&
                    (console.log(
                      "You are on Basic plan. Stories will be limited to a maximum of 5."
                    ),
                    (Mr.config[0].stories = Mr.config[0].stories.slice(0, 5))),
                  u.status !== 200)
                )
                  return Ze.createRoot(document.getElementById(r)).render(
                    k.jsx(Vn, {
                      children:
                        "Unable to contact Paxify servers. Please try again later.",
                    })
                  );
                if (!u.data.message)
                  return Ze.createRoot(document.getElementById(r)).render(
                    k.jsx(Vn, {
                      children:
                        "Store is not verified. Please verify your store to use this app.",
                    })
                  );
                if (
                  (i &&
                    console.log(
                      "Preview mode is active, analytics will not be tracked for this session."
                    ),
                  r)
                )
                  return Ze.createRoot(document.getElementById(r)).render(
                    k.jsx(K.StrictMode, {
                      children: k.jsx(Hs.Provider, {
                        value: {
                          uid: t,
                          style: o,
                          storeId: n,
                          subscription: h,
                          isPreview: i,
                        },
                        children: k.jsx(Hx, { settings: Mr.config[0] }),
                      }),
                    })
                  );
                console.error("Please provide an element ID.");
              })
              .catch(
                (a) => (
                  console.error("Error while verifying:", a),
                  Ze.createRoot(document.getElementById(r)).render(
                    k.jsx(vm, {
                      children:
                        "Verification in progress. Stories will be available shortly.",
                    })
                  )
                )
              );
          })
          .catch((s) =>
            Ze.createRoot(document.getElementById(r)).render(
              k.jsx(Vn, { children: s.message })
            )
          ),
        null
      );
    }
  }
  return Yx;
});
