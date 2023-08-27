(function (Lr, bn) {
  typeof exports == "object" && typeof module < "u"
    ? (module.exports = bn())
    : typeof define == "function" && define.amd
    ? define(bn)
    : ((Lr = typeof globalThis < "u" ? globalThis : Lr || self),
      (Lr.ReelsInitializer = bn()));
})(this, function () {
  "use strict";
  function Lr(e) {
    return e &&
      e.__esModule &&
      Object.prototype.hasOwnProperty.call(e, "default")
      ? e.default
      : e;
  }
  var bn = { exports: {} },
    zi = {},
    Wu = { exports: {} },
    H = {};
  /**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var Ir = Symbol.for("react.element"),
    wm = Symbol.for("react.portal"),
    Sm = Symbol.for("react.fragment"),
    xm = Symbol.for("react.strict_mode"),
    Em = Symbol.for("react.profiler"),
    Tm = Symbol.for("react.provider"),
    Cm = Symbol.for("react.context"),
    km = Symbol.for("react.forward_ref"),
    Pm = Symbol.for("react.suspense"),
    Om = Symbol.for("react.memo"),
    _m = Symbol.for("react.lazy"),
    Gu = Symbol.iterator;
  function Lm(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (Gu && e[Gu]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var Yu = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Ku = Object.assign,
    Qu = {};
  function Fn(e, t, n) {
    (this.props = e),
      (this.context = t),
      (this.refs = Qu),
      (this.updater = n || Yu);
  }
  (Fn.prototype.isReactComponent = {}),
    (Fn.prototype.setState = function (e, t) {
      if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, e, t, "setState");
    }),
    (Fn.prototype.forceUpdate = function (e) {
      this.updater.enqueueForceUpdate(this, e, "forceUpdate");
    });
  function Xu() {}
  Xu.prototype = Fn.prototype;
  function Ds(e, t, n) {
    (this.props = e),
      (this.context = t),
      (this.refs = Qu),
      (this.updater = n || Yu);
  }
  var bs = (Ds.prototype = new Xu());
  (bs.constructor = Ds), Ku(bs, Fn.prototype), (bs.isPureReactComponent = !0);
  var qu = Array.isArray,
    Ju = Object.prototype.hasOwnProperty,
    Fs = { current: null },
    Zu = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ec(e, t, n) {
    var r,
      i = {},
      o = null,
      s = null;
    if (t != null)
      for (r in (t.ref !== void 0 && (s = t.ref),
      t.key !== void 0 && (o = "" + t.key),
      t))
        Ju.call(t, r) && !Zu.hasOwnProperty(r) && (i[r] = t[r]);
    var l = arguments.length - 2;
    if (l === 1) i.children = n;
    else if (1 < l) {
      for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
      i.children = a;
    }
    if (e && e.defaultProps)
      for (r in ((l = e.defaultProps), l)) i[r] === void 0 && (i[r] = l[r]);
    return {
      $$typeof: Ir,
      type: e,
      key: o,
      ref: s,
      props: i,
      _owner: Fs.current,
    };
  }
  function Im(e, t) {
    return {
      $$typeof: Ir,
      type: e.type,
      key: t,
      ref: e.ref,
      props: e.props,
      _owner: e._owner,
    };
  }
  function Bs(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Ir;
  }
  function Mm(e) {
    var t = { "=": "=0", ":": "=2" };
    return (
      "$" +
      e.replace(/[=:]/g, function (n) {
        return t[n];
      })
    );
  }
  var tc = /\/+/g;
  function Vs(e, t) {
    return typeof e == "object" && e !== null && e.key != null
      ? Mm("" + e.key)
      : t.toString(36);
  }
  function Ai(e, t, n, r, i) {
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
            case Ir:
            case wm:
              s = !0;
          }
      }
    if (s)
      return (
        (s = e),
        (i = i(s)),
        (e = r === "" ? "." + Vs(s, 0) : r),
        qu(i)
          ? ((n = ""),
            e != null && (n = e.replace(tc, "$&/") + "/"),
            Ai(i, t, n, "", function (u) {
              return u;
            }))
          : i != null &&
            (Bs(i) &&
              (i = Im(
                i,
                n +
                  (!i.key || (s && s.key === i.key)
                    ? ""
                    : ("" + i.key).replace(tc, "$&/") + "/") +
                  e
              )),
            t.push(i)),
        1
      );
    if (((s = 0), (r = r === "" ? "." : r + ":"), qu(e)))
      for (var l = 0; l < e.length; l++) {
        o = e[l];
        var a = r + Vs(o, l);
        s += Ai(o, t, n, a, i);
      }
    else if (((a = Lm(e)), typeof a == "function"))
      for (e = a.call(e), l = 0; !(o = e.next()).done; )
        (o = o.value), (a = r + Vs(o, l++)), (s += Ai(o, t, n, a, i));
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
  function $i(e, t, n) {
    if (e == null) return e;
    var r = [],
      i = 0;
    return (
      Ai(e, r, "", "", function (o) {
        return t.call(n, o, i++);
      }),
      r
    );
  }
  function Nm(e) {
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
  var Ne = { current: null },
    ji = { transition: null },
    Rm = {
      ReactCurrentDispatcher: Ne,
      ReactCurrentBatchConfig: ji,
      ReactCurrentOwner: Fs,
    };
  (H.Children = {
    map: $i,
    forEach: function (e, t, n) {
      $i(
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
        $i(e, function () {
          t++;
        }),
        t
      );
    },
    toArray: function (e) {
      return (
        $i(e, function (t) {
          return t;
        }) || []
      );
    },
    only: function (e) {
      if (!Bs(e))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return e;
    },
  }),
    (H.Component = Fn),
    (H.Fragment = Sm),
    (H.Profiler = Em),
    (H.PureComponent = Ds),
    (H.StrictMode = xm),
    (H.Suspense = Pm),
    (H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Rm),
    (H.cloneElement = function (e, t, n) {
      if (e == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            e +
            "."
        );
      var r = Ku({}, e.props),
        i = e.key,
        o = e.ref,
        s = e._owner;
      if (t != null) {
        if (
          (t.ref !== void 0 && ((o = t.ref), (s = Fs.current)),
          t.key !== void 0 && (i = "" + t.key),
          e.type && e.type.defaultProps)
        )
          var l = e.type.defaultProps;
        for (a in t)
          Ju.call(t, a) &&
            !Zu.hasOwnProperty(a) &&
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
        $$typeof: Ir,
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
          $$typeof: Cm,
          _currentValue: e,
          _currentValue2: e,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (e.Provider = { $$typeof: Tm, _context: e }),
        (e.Consumer = e)
      );
    }),
    (H.createElement = ec),
    (H.createFactory = function (e) {
      var t = ec.bind(null, e);
      return (t.type = e), t;
    }),
    (H.createRef = function () {
      return { current: null };
    }),
    (H.forwardRef = function (e) {
      return { $$typeof: km, render: e };
    }),
    (H.isValidElement = Bs),
    (H.lazy = function (e) {
      return { $$typeof: _m, _payload: { _status: -1, _result: e }, _init: Nm };
    }),
    (H.memo = function (e, t) {
      return { $$typeof: Om, type: e, compare: t === void 0 ? null : t };
    }),
    (H.startTransition = function (e) {
      var t = ji.transition;
      ji.transition = {};
      try {
        e();
      } finally {
        ji.transition = t;
      }
    }),
    (H.unstable_act = function () {
      throw Error("act(...) is not supported in production builds of React.");
    }),
    (H.useCallback = function (e, t) {
      return Ne.current.useCallback(e, t);
    }),
    (H.useContext = function (e) {
      return Ne.current.useContext(e);
    }),
    (H.useDebugValue = function () {}),
    (H.useDeferredValue = function (e) {
      return Ne.current.useDeferredValue(e);
    }),
    (H.useEffect = function (e, t) {
      return Ne.current.useEffect(e, t);
    }),
    (H.useId = function () {
      return Ne.current.useId();
    }),
    (H.useImperativeHandle = function (e, t, n) {
      return Ne.current.useImperativeHandle(e, t, n);
    }),
    (H.useInsertionEffect = function (e, t) {
      return Ne.current.useInsertionEffect(e, t);
    }),
    (H.useLayoutEffect = function (e, t) {
      return Ne.current.useLayoutEffect(e, t);
    }),
    (H.useMemo = function (e, t) {
      return Ne.current.useMemo(e, t);
    }),
    (H.useReducer = function (e, t, n) {
      return Ne.current.useReducer(e, t, n);
    }),
    (H.useRef = function (e) {
      return Ne.current.useRef(e);
    }),
    (H.useState = function (e) {
      return Ne.current.useState(e);
    }),
    (H.useSyncExternalStore = function (e, t, n) {
      return Ne.current.useSyncExternalStore(e, t, n);
    }),
    (H.useTransition = function () {
      return Ne.current.useTransition();
    }),
    (H.version = "18.2.0"),
    (Wu.exports = H);
  var R = Wu.exports;
  const Q = Lr(R);
  /**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var zm = R,
    Am = Symbol.for("react.element"),
    $m = Symbol.for("react.fragment"),
    jm = Object.prototype.hasOwnProperty,
    Dm =
      zm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    bm = { key: !0, ref: !0, __self: !0, __source: !0 };
  function nc(e, t, n) {
    var r,
      i = {},
      o = null,
      s = null;
    n !== void 0 && (o = "" + n),
      t.key !== void 0 && (o = "" + t.key),
      t.ref !== void 0 && (s = t.ref);
    for (r in t) jm.call(t, r) && !bm.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps)
      for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
    return {
      $$typeof: Am,
      type: e,
      key: o,
      ref: s,
      props: i,
      _owner: Dm.current,
    };
  }
  (zi.Fragment = $m), (zi.jsx = nc), (zi.jsxs = nc), (bn.exports = zi);
  var P = bn.exports,
    Us = {},
    rc = { exports: {} },
    Ue = {},
    ic = { exports: {} },
    oc = {};
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
        e: for (var Y = 0, J = N.length, Ee = J >>> 1; Y < Ee; ) {
          var et = 2 * (Y + 1) - 1,
            Wt = N[et],
            Ve = et + 1,
            ft = N[Ve];
          if (0 > i(Wt, D))
            Ve < J && 0 > i(ft, Wt)
              ? ((N[Y] = ft), (N[Ve] = D), (Y = Ve))
              : ((N[Y] = Wt), (N[et] = D), (Y = et));
          else if (Ve < J && 0 > i(ft, D)) (N[Y] = ft), (N[Ve] = D), (Y = Ve);
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
      v = !1,
      y = !1,
      k = typeof setTimeout == "function" ? setTimeout : null,
      f = typeof clearTimeout == "function" ? clearTimeout : null,
      m = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" &&
      navigator.scheduling !== void 0 &&
      navigator.scheduling.isInputPending !== void 0 &&
      navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function g(N) {
      for (var A = n(u); A !== null; ) {
        if (A.callback === null) r(u);
        else if (A.startTime <= N)
          r(u), (A.sortIndex = A.expirationTime), t(a, A);
        else break;
        A = n(u);
      }
    }
    function w(N) {
      if (((y = !1), g(N), !v))
        if (n(a) !== null) (v = !0), Ze(S);
        else {
          var A = n(u);
          A !== null && Me(w, A.startTime - N);
        }
    }
    function S(N, A) {
      (v = !1), y && ((y = !1), f(_), (_ = -1)), (h = !0);
      var D = p;
      try {
        for (
          g(A), d = n(a);
          d !== null && (!(d.expirationTime > A) || (N && !M()));

        ) {
          var Y = d.callback;
          if (typeof Y == "function") {
            (d.callback = null), (p = d.priorityLevel);
            var J = Y(d.expirationTime <= A);
            (A = e.unstable_now()),
              typeof J == "function" ? (d.callback = J) : d === n(a) && r(a),
              g(A);
          } else r(a);
          d = n(a);
        }
        if (d !== null) var Ee = !0;
        else {
          var et = n(u);
          et !== null && Me(w, et.startTime - A), (Ee = !1);
        }
        return Ee;
      } finally {
        (d = null), (p = D), (h = !1);
      }
    }
    var T = !1,
      x = null,
      _ = -1,
      O = 5,
      b = -1;
    function M() {
      return !(e.unstable_now() - b < O);
    }
    function j() {
      if (x !== null) {
        var N = e.unstable_now();
        b = N;
        var A = !0;
        try {
          A = x(!0, N);
        } finally {
          A ? B() : ((T = !1), (x = null));
        }
      } else T = !1;
    }
    var B;
    if (typeof m == "function")
      B = function () {
        m(j);
      };
    else if (typeof MessageChannel < "u") {
      var pe = new MessageChannel(),
        dt = pe.port2;
      (pe.port1.onmessage = j),
        (B = function () {
          dt.postMessage(null);
        });
    } else
      B = function () {
        k(j, 0);
      };
    function Ze(N) {
      (x = N), T || ((T = !0), B());
    }
    function Me(N, A) {
      _ = k(function () {
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
        v || h || ((v = !0), Ze(S));
      }),
      (e.unstable_forceFrameRate = function (N) {
        0 > N || 125 < N
          ? console.error(
              "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
            )
          : (O = 0 < N ? Math.floor(1e3 / N) : 5);
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
                (y ? (f(_), (_ = -1)) : (y = !0), Me(w, D - Y)))
            : ((N.sortIndex = J), t(a, N), v || h || ((v = !0), Ze(S))),
          N
        );
      }),
      (e.unstable_shouldYield = M),
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
  })(oc),
    (ic.exports = oc);
  var Fm = ic.exports;
  /**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var sc = R,
    He = Fm;
  function L(e) {
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
  var lc = new Set(),
    Mr = {};
  function wn(e, t) {
    Bn(e, t), Bn(e + "Capture", t);
  }
  function Bn(e, t) {
    for (Mr[e] = t, e = 0; e < t.length; e++) lc.add(t[e]);
  }
  var Nt = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    Hs = Object.prototype.hasOwnProperty,
    Bm =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    ac = {},
    uc = {};
  function Vm(e) {
    return Hs.call(uc, e)
      ? !0
      : Hs.call(ac, e)
      ? !1
      : Bm.test(e)
      ? (uc[e] = !0)
      : ((ac[e] = !0), !1);
  }
  function Um(e, t, n, r) {
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
  function Hm(e, t, n, r) {
    if (t === null || typeof t > "u" || Um(e, t, n, r)) return !0;
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
  function Re(e, t, n, r, i, o, s) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = i),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = o),
      (this.removeEmptyString = s);
  }
  var Te = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      Te[e] = new Re(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      Te[t] = new Re(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (
      e
    ) {
      Te[e] = new Re(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      Te[e] = new Re(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        Te[e] = new Re(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      Te[e] = new Re(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      Te[e] = new Re(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      Te[e] = new Re(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      Te[e] = new Re(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var Ws = /[\-:]([a-z])/g;
  function Gs(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(Ws, Gs);
      Te[t] = new Re(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(Ws, Gs);
        Te[t] = new Re(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(Ws, Gs);
      Te[t] = new Re(
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
      Te[e] = new Re(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (Te.xlinkHref = new Re(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      Te[e] = new Re(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function Ys(e, t, n, r) {
    var i = Te.hasOwnProperty(t) ? Te[t] : null;
    (i !== null
      ? i.type !== 0
      : r ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (Hm(t, n, i, r) && (n = null),
      r || i === null
        ? Vm(t) &&
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
  var Rt = sc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Di = Symbol.for("react.element"),
    Vn = Symbol.for("react.portal"),
    Un = Symbol.for("react.fragment"),
    Ks = Symbol.for("react.strict_mode"),
    Qs = Symbol.for("react.profiler"),
    cc = Symbol.for("react.provider"),
    dc = Symbol.for("react.context"),
    Xs = Symbol.for("react.forward_ref"),
    qs = Symbol.for("react.suspense"),
    Js = Symbol.for("react.suspense_list"),
    Zs = Symbol.for("react.memo"),
    Kt = Symbol.for("react.lazy"),
    fc = Symbol.for("react.offscreen"),
    pc = Symbol.iterator;
  function Nr(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (pc && e[pc]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var oe = Object.assign,
    el;
  function Rr(e) {
    if (el === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        el = (t && t[1]) || "";
      }
    return (
      `
` +
      el +
      e
    );
  }
  var tl = !1;
  function nl(e, t) {
    if (!e || tl) return "";
    tl = !0;
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
      (tl = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : "") ? Rr(e) : "";
  }
  function Wm(e) {
    switch (e.tag) {
      case 5:
        return Rr(e.type);
      case 16:
        return Rr("Lazy");
      case 13:
        return Rr("Suspense");
      case 19:
        return Rr("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = nl(e.type, !1)), e;
      case 11:
        return (e = nl(e.type.render, !1)), e;
      case 1:
        return (e = nl(e.type, !0)), e;
      default:
        return "";
    }
  }
  function rl(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Un:
        return "Fragment";
      case Vn:
        return "Portal";
      case Qs:
        return "Profiler";
      case Ks:
        return "StrictMode";
      case qs:
        return "Suspense";
      case Js:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case dc:
          return (e.displayName || "Context") + ".Consumer";
        case cc:
          return (e._context.displayName || "Context") + ".Provider";
        case Xs:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case Zs:
          return (
            (t = e.displayName || null), t !== null ? t : rl(e.type) || "Memo"
          );
        case Kt:
          (t = e._payload), (e = e._init);
          try {
            return rl(e(t));
          } catch {}
      }
    return null;
  }
  function Gm(e) {
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
        return rl(t);
      case 8:
        return t === Ks ? "StrictMode" : "Mode";
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
  function Qt(e) {
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
  function hc(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function Ym(e) {
    var t = hc(e) ? "checked" : "value",
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
  function bi(e) {
    e._valueTracker || (e._valueTracker = Ym(e));
  }
  function mc(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = "";
    return (
      e && (r = hc(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function Fi(e) {
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
  function il(e, t) {
    var n = t.checked;
    return oe({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function gc(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    (n = Qt(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      });
  }
  function vc(e, t) {
    (t = t.checked), t != null && Ys(e, "checked", t, !1);
  }
  function ol(e, t) {
    vc(e, t);
    var n = Qt(t.value),
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
      ? sl(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && sl(e, t.type, Qt(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked);
  }
  function yc(e, t, n) {
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
  function sl(e, t, n) {
    (t !== "number" || Fi(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var zr = Array.isArray;
  function Hn(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
      for (n = 0; n < e.length; n++)
        (i = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== i && (e[n].selected = i),
          i && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + Qt(n), t = null, i = 0; i < e.length; i++) {
        if (e[i].value === n) {
          (e[i].selected = !0), r && (e[i].defaultSelected = !0);
          return;
        }
        t !== null || e[i].disabled || (t = e[i]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function ll(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(L(91));
    return oe({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function wc(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(L(92));
        if (zr(n)) {
          if (1 < n.length) throw Error(L(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), (n = t);
    }
    e._wrapperState = { initialValue: Qt(n) };
  }
  function Sc(e, t) {
    var n = Qt(t.value),
      r = Qt(t.defaultValue);
    n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = "" + r);
  }
  function xc(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function Ec(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function al(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? Ec(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
  }
  var Bi,
    Tc = (function (e) {
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
          Bi = Bi || document.createElement("div"),
            Bi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = Bi.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function Ar(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var $r = {
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
    Km = ["Webkit", "ms", "Moz", "O"];
  Object.keys($r).forEach(function (e) {
    Km.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), ($r[t] = $r[e]);
    });
  });
  function Cc(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || ($r.hasOwnProperty(e) && $r[e])
      ? ("" + t).trim()
      : t + "px";
  }
  function kc(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0,
          i = Cc(n, t[n], r);
        n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
      }
  }
  var Qm = oe(
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
  function ul(e, t) {
    if (t) {
      if (Qm[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(L(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(L(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(L(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(L(62));
    }
  }
  function cl(e, t) {
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
  var dl = null;
  function fl(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var pl = null,
    Wn = null,
    Gn = null;
  function Pc(e) {
    if ((e = ii(e))) {
      if (typeof pl != "function") throw Error(L(280));
      var t = e.stateNode;
      t && ((t = co(t)), pl(e.stateNode, e.type, t));
    }
  }
  function Oc(e) {
    Wn ? (Gn ? Gn.push(e) : (Gn = [e])) : (Wn = e);
  }
  function _c() {
    if (Wn) {
      var e = Wn,
        t = Gn;
      if (((Gn = Wn = null), Pc(e), t)) for (e = 0; e < t.length; e++) Pc(t[e]);
    }
  }
  function Lc(e, t) {
    return e(t);
  }
  function Ic() {}
  var hl = !1;
  function Mc(e, t, n) {
    if (hl) return e(t, n);
    hl = !0;
    try {
      return Lc(e, t, n);
    } finally {
      (hl = !1), (Wn !== null || Gn !== null) && (Ic(), _c());
    }
  }
  function jr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = co(n);
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
    if (n && typeof n != "function") throw Error(L(231, t, typeof n));
    return n;
  }
  var ml = !1;
  if (Nt)
    try {
      var Dr = {};
      Object.defineProperty(Dr, "passive", {
        get: function () {
          ml = !0;
        },
      }),
        window.addEventListener("test", Dr, Dr),
        window.removeEventListener("test", Dr, Dr);
    } catch {
      ml = !1;
    }
  function Xm(e, t, n, r, i, o, s, l, a) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, u);
    } catch (c) {
      this.onError(c);
    }
  }
  var br = !1,
    Vi = null,
    Ui = !1,
    gl = null,
    qm = {
      onError: function (e) {
        (br = !0), (Vi = e);
      },
    };
  function Jm(e, t, n, r, i, o, s, l, a) {
    (br = !1), (Vi = null), Xm.apply(qm, arguments);
  }
  function Zm(e, t, n, r, i, o, s, l, a) {
    if ((Jm.apply(this, arguments), br)) {
      if (br) {
        var u = Vi;
        (br = !1), (Vi = null);
      } else throw Error(L(198));
      Ui || ((Ui = !0), (gl = u));
    }
  }
  function Sn(e) {
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
  function Nc(e) {
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
  function Rc(e) {
    if (Sn(e) !== e) throw Error(L(188));
  }
  function e0(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = Sn(e)), t === null)) throw Error(L(188));
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
          if (o === n) return Rc(i), e;
          if (o === r) return Rc(i), t;
          o = o.sibling;
        }
        throw Error(L(188));
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
          if (!s) throw Error(L(189));
        }
      }
      if (n.alternate !== r) throw Error(L(190));
    }
    if (n.tag !== 3) throw Error(L(188));
    return n.stateNode.current === n ? e : t;
  }
  function zc(e) {
    return (e = e0(e)), e !== null ? Ac(e) : null;
  }
  function Ac(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Ac(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var $c = He.unstable_scheduleCallback,
    jc = He.unstable_cancelCallback,
    t0 = He.unstable_shouldYield,
    n0 = He.unstable_requestPaint,
    ce = He.unstable_now,
    r0 = He.unstable_getCurrentPriorityLevel,
    vl = He.unstable_ImmediatePriority,
    Dc = He.unstable_UserBlockingPriority,
    Hi = He.unstable_NormalPriority,
    i0 = He.unstable_LowPriority,
    bc = He.unstable_IdlePriority,
    Wi = null,
    Tt = null;
  function o0(e) {
    if (Tt && typeof Tt.onCommitFiberRoot == "function")
      try {
        Tt.onCommitFiberRoot(Wi, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var mt = Math.clz32 ? Math.clz32 : a0,
    s0 = Math.log,
    l0 = Math.LN2;
  function a0(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((s0(e) / l0) | 0)) | 0;
  }
  var Gi = 64,
    Yi = 4194304;
  function Fr(e) {
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
  function Ki(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      i = e.suspendedLanes,
      o = e.pingedLanes,
      s = n & 268435455;
    if (s !== 0) {
      var l = s & ~i;
      l !== 0 ? (r = Fr(l)) : ((o &= s), o !== 0 && (r = Fr(o)));
    } else (s = n & ~i), s !== 0 ? (r = Fr(s)) : o !== 0 && (r = Fr(o));
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
        (n = 31 - mt(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
    return r;
  }
  function u0(e, t) {
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
  function c0(e, t) {
    for (
      var n = e.suspendedLanes,
        r = e.pingedLanes,
        i = e.expirationTimes,
        o = e.pendingLanes;
      0 < o;

    ) {
      var s = 31 - mt(o),
        l = 1 << s,
        a = i[s];
      a === -1
        ? (!(l & n) || l & r) && (i[s] = u0(l, t))
        : a <= t && (e.expiredLanes |= l),
        (o &= ~l);
    }
  }
  function yl(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function Fc() {
    var e = Gi;
    return (Gi <<= 1), !(Gi & 4194240) && (Gi = 64), e;
  }
  function wl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Br(e, t, n) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - mt(t)),
      (e[t] = n);
  }
  function d0(e, t) {
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
      var i = 31 - mt(n),
        o = 1 << i;
      (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
    }
  }
  function Sl(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - mt(n),
        i = 1 << r;
      (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
    }
  }
  var X = 0;
  function Bc(e) {
    return (
      (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
  }
  var Vc,
    xl,
    Uc,
    Hc,
    Wc,
    El = !1,
    Qi = [],
    Xt = null,
    qt = null,
    Jt = null,
    Vr = new Map(),
    Ur = new Map(),
    Zt = [],
    f0 =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
      );
  function Gc(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Xt = null;
        break;
      case "dragenter":
      case "dragleave":
        qt = null;
        break;
      case "mouseover":
      case "mouseout":
        Jt = null;
        break;
      case "pointerover":
      case "pointerout":
        Vr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ur.delete(t.pointerId);
    }
  }
  function Hr(e, t, n, r, i, o) {
    return e === null || e.nativeEvent !== o
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: o,
          targetContainers: [i],
        }),
        t !== null && ((t = ii(t)), t !== null && xl(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        i !== null && t.indexOf(i) === -1 && t.push(i),
        e);
  }
  function p0(e, t, n, r, i) {
    switch (t) {
      case "focusin":
        return (Xt = Hr(Xt, e, t, n, r, i)), !0;
      case "dragenter":
        return (qt = Hr(qt, e, t, n, r, i)), !0;
      case "mouseover":
        return (Jt = Hr(Jt, e, t, n, r, i)), !0;
      case "pointerover":
        var o = i.pointerId;
        return Vr.set(o, Hr(Vr.get(o) || null, e, t, n, r, i)), !0;
      case "gotpointercapture":
        return (
          (o = i.pointerId), Ur.set(o, Hr(Ur.get(o) || null, e, t, n, r, i)), !0
        );
    }
    return !1;
  }
  function Yc(e) {
    var t = xn(e.target);
    if (t !== null) {
      var n = Sn(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = Nc(n)), t !== null)) {
            (e.blockedOn = t),
              Wc(e.priority, function () {
                Uc(n);
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
  function Xi(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Cl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        (dl = r), n.target.dispatchEvent(r), (dl = null);
      } else return (t = ii(n)), t !== null && xl(t), (e.blockedOn = n), !1;
      t.shift();
    }
    return !0;
  }
  function Kc(e, t, n) {
    Xi(e) && n.delete(t);
  }
  function h0() {
    (El = !1),
      Xt !== null && Xi(Xt) && (Xt = null),
      qt !== null && Xi(qt) && (qt = null),
      Jt !== null && Xi(Jt) && (Jt = null),
      Vr.forEach(Kc),
      Ur.forEach(Kc);
  }
  function Wr(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      El ||
        ((El = !0),
        He.unstable_scheduleCallback(He.unstable_NormalPriority, h0)));
  }
  function Gr(e) {
    function t(i) {
      return Wr(i, e);
    }
    if (0 < Qi.length) {
      Wr(Qi[0], e);
      for (var n = 1; n < Qi.length; n++) {
        var r = Qi[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      Xt !== null && Wr(Xt, e),
        qt !== null && Wr(qt, e),
        Jt !== null && Wr(Jt, e),
        Vr.forEach(t),
        Ur.forEach(t),
        n = 0;
      n < Zt.length;
      n++
    )
      (r = Zt[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Zt.length && ((n = Zt[0]), n.blockedOn === null); )
      Yc(n), n.blockedOn === null && Zt.shift();
  }
  var Yn = Rt.ReactCurrentBatchConfig,
    qi = !0;
  function m0(e, t, n, r) {
    var i = X,
      o = Yn.transition;
    Yn.transition = null;
    try {
      (X = 1), Tl(e, t, n, r);
    } finally {
      (X = i), (Yn.transition = o);
    }
  }
  function g0(e, t, n, r) {
    var i = X,
      o = Yn.transition;
    Yn.transition = null;
    try {
      (X = 4), Tl(e, t, n, r);
    } finally {
      (X = i), (Yn.transition = o);
    }
  }
  function Tl(e, t, n, r) {
    if (qi) {
      var i = Cl(e, t, n, r);
      if (i === null) Bl(e, t, r, Ji, n), Gc(e, r);
      else if (p0(i, e, t, n, r)) r.stopPropagation();
      else if ((Gc(e, r), t & 4 && -1 < f0.indexOf(e))) {
        for (; i !== null; ) {
          var o = ii(i);
          if (
            (o !== null && Vc(o),
            (o = Cl(e, t, n, r)),
            o === null && Bl(e, t, r, Ji, n),
            o === i)
          )
            break;
          i = o;
        }
        i !== null && r.stopPropagation();
      } else Bl(e, t, r, null, n);
    }
  }
  var Ji = null;
  function Cl(e, t, n, r) {
    if (((Ji = null), (e = fl(r)), (e = xn(e)), e !== null))
      if (((t = Sn(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = Nc(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (Ji = e), null;
  }
  function Qc(e) {
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
        switch (r0()) {
          case vl:
            return 1;
          case Dc:
            return 4;
          case Hi:
          case i0:
            return 16;
          case bc:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var en = null,
    kl = null,
    Zi = null;
  function Xc() {
    if (Zi) return Zi;
    var e,
      t = kl,
      n = t.length,
      r,
      i = "value" in en ? en.value : en.textContent,
      o = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++);
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === i[o - r]; r++);
    return (Zi = i.slice(e, 1 < r ? 1 - r : void 0));
  }
  function eo(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function to() {
    return !0;
  }
  function qc() {
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
          ? to
          : qc),
        (this.isPropagationStopped = qc),
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
            (this.isDefaultPrevented = to));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = to));
        },
        persist: function () {},
        isPersistent: to,
      }),
      t
    );
  }
  var Kn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Pl = We(Kn),
    Yr = oe({}, Kn, { view: 0, detail: 0 }),
    v0 = We(Yr),
    Ol,
    _l,
    Kr,
    no = oe({}, Yr, {
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
      getModifierState: Il,
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
          : (e !== Kr &&
              (Kr && e.type === "mousemove"
                ? ((Ol = e.screenX - Kr.screenX), (_l = e.screenY - Kr.screenY))
                : (_l = Ol = 0),
              (Kr = e)),
            Ol);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : _l;
      },
    }),
    Jc = We(no),
    y0 = oe({}, no, { dataTransfer: 0 }),
    w0 = We(y0),
    S0 = oe({}, Yr, { relatedTarget: 0 }),
    Ll = We(S0),
    x0 = oe({}, Kn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    E0 = We(x0),
    T0 = oe({}, Kn, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    C0 = We(T0),
    k0 = oe({}, Kn, { data: 0 }),
    Zc = We(k0),
    P0 = {
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
    O0 = {
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
    _0 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function L0(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = _0[e])
      ? !!t[e]
      : !1;
  }
  function Il() {
    return L0;
  }
  var I0 = oe({}, Yr, {
      key: function (e) {
        if (e.key) {
          var t = P0[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = eo(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? O0[e.keyCode] || "Unidentified"
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
      getModifierState: Il,
      charCode: function (e) {
        return e.type === "keypress" ? eo(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? eo(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    M0 = We(I0),
    N0 = oe({}, no, {
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
    ed = We(N0),
    R0 = oe({}, Yr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Il,
    }),
    z0 = We(R0),
    A0 = oe({}, Kn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    $0 = We(A0),
    j0 = oe({}, no, {
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
    D0 = We(j0),
    b0 = [9, 13, 27, 32],
    Ml = Nt && "CompositionEvent" in window,
    Qr = null;
  Nt && "documentMode" in document && (Qr = document.documentMode);
  var F0 = Nt && "TextEvent" in window && !Qr,
    td = Nt && (!Ml || (Qr && 8 < Qr && 11 >= Qr)),
    nd = String.fromCharCode(32),
    rd = !1;
  function id(e, t) {
    switch (e) {
      case "keyup":
        return b0.indexOf(t.keyCode) !== -1;
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
  function od(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var Qn = !1;
  function B0(e, t) {
    switch (e) {
      case "compositionend":
        return od(t);
      case "keypress":
        return t.which !== 32 ? null : ((rd = !0), nd);
      case "textInput":
        return (e = t.data), e === nd && rd ? null : e;
      default:
        return null;
    }
  }
  function V0(e, t) {
    if (Qn)
      return e === "compositionend" || (!Ml && id(e, t))
        ? ((e = Xc()), (Zi = kl = en = null), (Qn = !1), e)
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
        return td && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var U0 = {
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
  function sd(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!U0[e.type] : t === "textarea";
  }
  function ld(e, t, n, r) {
    Oc(r),
      (t = lo(t, "onChange")),
      0 < t.length &&
        ((n = new Pl("onChange", "change", null, n, r)),
        e.push({ event: n, listeners: t }));
  }
  var Xr = null,
    qr = null;
  function H0(e) {
    kd(e, 0);
  }
  function ro(e) {
    var t = er(e);
    if (mc(t)) return e;
  }
  function W0(e, t) {
    if (e === "change") return t;
  }
  var ad = !1;
  if (Nt) {
    var Nl;
    if (Nt) {
      var Rl = "oninput" in document;
      if (!Rl) {
        var ud = document.createElement("div");
        ud.setAttribute("oninput", "return;"),
          (Rl = typeof ud.oninput == "function");
      }
      Nl = Rl;
    } else Nl = !1;
    ad = Nl && (!document.documentMode || 9 < document.documentMode);
  }
  function cd() {
    Xr && (Xr.detachEvent("onpropertychange", dd), (qr = Xr = null));
  }
  function dd(e) {
    if (e.propertyName === "value" && ro(qr)) {
      var t = [];
      ld(t, qr, e, fl(e)), Mc(H0, t);
    }
  }
  function G0(e, t, n) {
    e === "focusin"
      ? (cd(), (Xr = t), (qr = n), Xr.attachEvent("onpropertychange", dd))
      : e === "focusout" && cd();
  }
  function Y0(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return ro(qr);
  }
  function K0(e, t) {
    if (e === "click") return ro(t);
  }
  function Q0(e, t) {
    if (e === "input" || e === "change") return ro(t);
  }
  function X0(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var gt = typeof Object.is == "function" ? Object.is : X0;
  function Jr(e, t) {
    if (gt(e, t)) return !0;
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
      if (!Hs.call(t, i) || !gt(e[i], t[i])) return !1;
    }
    return !0;
  }
  function fd(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function pd(e, t) {
    var n = fd(e);
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
      n = fd(n);
    }
  }
  function hd(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? hd(e, t.parentNode)
        : "contains" in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function md() {
    for (var e = window, t = Fi(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Fi(e.document);
    }
    return t;
  }
  function zl(e) {
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
  function q0(e) {
    var t = md(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      hd(n.ownerDocument.documentElement, n)
    ) {
      if (r !== null && zl(n)) {
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
            (i = pd(n, o));
          var s = pd(n, r);
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
  var J0 = Nt && "documentMode" in document && 11 >= document.documentMode,
    Xn = null,
    Al = null,
    Zr = null,
    $l = !1;
  function gd(e, t, n) {
    var r =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    $l ||
      Xn == null ||
      Xn !== Fi(r) ||
      ((r = Xn),
      "selectionStart" in r && zl(r)
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
      (Zr && Jr(Zr, r)) ||
        ((Zr = r),
        (r = lo(Al, "onSelect")),
        0 < r.length &&
          ((t = new Pl("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = Xn))));
  }
  function io(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var qn = {
      animationend: io("Animation", "AnimationEnd"),
      animationiteration: io("Animation", "AnimationIteration"),
      animationstart: io("Animation", "AnimationStart"),
      transitionend: io("Transition", "TransitionEnd"),
    },
    jl = {},
    vd = {};
  Nt &&
    ((vd = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete qn.animationend.animation,
      delete qn.animationiteration.animation,
      delete qn.animationstart.animation),
    "TransitionEvent" in window || delete qn.transitionend.transition);
  function oo(e) {
    if (jl[e]) return jl[e];
    if (!qn[e]) return e;
    var t = qn[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in vd) return (jl[e] = t[n]);
    return e;
  }
  var yd = oo("animationend"),
    wd = oo("animationiteration"),
    Sd = oo("animationstart"),
    xd = oo("transitionend"),
    Ed = new Map(),
    Td =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  function tn(e, t) {
    Ed.set(e, t), wn(t, [e]);
  }
  for (var Dl = 0; Dl < Td.length; Dl++) {
    var bl = Td[Dl],
      Z0 = bl.toLowerCase(),
      eg = bl[0].toUpperCase() + bl.slice(1);
    tn(Z0, "on" + eg);
  }
  tn(yd, "onAnimationEnd"),
    tn(wd, "onAnimationIteration"),
    tn(Sd, "onAnimationStart"),
    tn("dblclick", "onDoubleClick"),
    tn("focusin", "onFocus"),
    tn("focusout", "onBlur"),
    tn(xd, "onTransitionEnd"),
    Bn("onMouseEnter", ["mouseout", "mouseover"]),
    Bn("onMouseLeave", ["mouseout", "mouseover"]),
    Bn("onPointerEnter", ["pointerout", "pointerover"]),
    Bn("onPointerLeave", ["pointerout", "pointerover"]),
    wn(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    wn(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    wn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    wn(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    wn(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    wn(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var ei =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    tg = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(ei)
    );
  function Cd(e, t, n) {
    var r = e.type || "unknown-event";
    (e.currentTarget = n), Zm(r, t, void 0, e), (e.currentTarget = null);
  }
  function kd(e, t) {
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
            Cd(i, l, u), (o = a);
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
            Cd(i, l, u), (o = a);
          }
      }
    }
    if (Ui) throw ((e = gl), (Ui = !1), (gl = null), e);
  }
  function te(e, t) {
    var n = t[Yl];
    n === void 0 && (n = t[Yl] = new Set());
    var r = e + "__bubble";
    n.has(r) || (Pd(t, e, 2, !1), n.add(r));
  }
  function Fl(e, t, n) {
    var r = 0;
    t && (r |= 4), Pd(n, e, r, t);
  }
  var so = "_reactListening" + Math.random().toString(36).slice(2);
  function ti(e) {
    if (!e[so]) {
      (e[so] = !0),
        lc.forEach(function (n) {
          n !== "selectionchange" && (tg.has(n) || Fl(n, !1, e), Fl(n, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[so] || ((t[so] = !0), Fl("selectionchange", !1, t));
    }
  }
  function Pd(e, t, n, r) {
    switch (Qc(t)) {
      case 1:
        var i = m0;
        break;
      case 4:
        i = g0;
        break;
      default:
        i = Tl;
    }
    (n = i.bind(null, t, n, e)),
      (i = void 0),
      !ml ||
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
  function Bl(e, t, n, r, i) {
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
            if (((s = xn(l)), s === null)) return;
            if (((a = s.tag), a === 5 || a === 6)) {
              r = o = s;
              continue e;
            }
            l = l.parentNode;
          }
        }
        r = r.return;
      }
    Mc(function () {
      var u = o,
        c = fl(n),
        d = [];
      e: {
        var p = Ed.get(e);
        if (p !== void 0) {
          var h = Pl,
            v = e;
          switch (e) {
            case "keypress":
              if (eo(n) === 0) break e;
            case "keydown":
            case "keyup":
              h = M0;
              break;
            case "focusin":
              (v = "focus"), (h = Ll);
              break;
            case "focusout":
              (v = "blur"), (h = Ll);
              break;
            case "beforeblur":
            case "afterblur":
              h = Ll;
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
              h = Jc;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              h = w0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              h = z0;
              break;
            case yd:
            case wd:
            case Sd:
              h = E0;
              break;
            case xd:
              h = $0;
              break;
            case "scroll":
              h = v0;
              break;
            case "wheel":
              h = D0;
              break;
            case "copy":
            case "cut":
            case "paste":
              h = C0;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              h = ed;
          }
          var y = (t & 4) !== 0,
            k = !y && e === "scroll",
            f = y ? (p !== null ? p + "Capture" : null) : p;
          y = [];
          for (var m = u, g; m !== null; ) {
            g = m;
            var w = g.stateNode;
            if (
              (g.tag === 5 &&
                w !== null &&
                ((g = w),
                f !== null &&
                  ((w = jr(m, f)), w != null && y.push(ni(m, w, g)))),
              k)
            )
              break;
            m = m.return;
          }
          0 < y.length &&
            ((p = new h(p, v, null, n, c)), d.push({ event: p, listeners: y }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (
            ((p = e === "mouseover" || e === "pointerover"),
            (h = e === "mouseout" || e === "pointerout"),
            p &&
              n !== dl &&
              (v = n.relatedTarget || n.fromElement) &&
              (xn(v) || v[zt]))
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
              ? ((v = n.relatedTarget || n.toElement),
                (h = u),
                (v = v ? xn(v) : null),
                v !== null &&
                  ((k = Sn(v)), v !== k || (v.tag !== 5 && v.tag !== 6)) &&
                  (v = null))
              : ((h = null), (v = u)),
            h !== v)
          ) {
            if (
              ((y = Jc),
              (w = "onMouseLeave"),
              (f = "onMouseEnter"),
              (m = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((y = ed),
                (w = "onPointerLeave"),
                (f = "onPointerEnter"),
                (m = "pointer")),
              (k = h == null ? p : er(h)),
              (g = v == null ? p : er(v)),
              (p = new y(w, m + "leave", h, n, c)),
              (p.target = k),
              (p.relatedTarget = g),
              (w = null),
              xn(c) === u &&
                ((y = new y(f, m + "enter", v, n, c)),
                (y.target = g),
                (y.relatedTarget = k),
                (w = y)),
              (k = w),
              h && v)
            )
              t: {
                for (y = h, f = v, m = 0, g = y; g; g = Jn(g)) m++;
                for (g = 0, w = f; w; w = Jn(w)) g++;
                for (; 0 < m - g; ) (y = Jn(y)), m--;
                for (; 0 < g - m; ) (f = Jn(f)), g--;
                for (; m--; ) {
                  if (y === f || (f !== null && y === f.alternate)) break t;
                  (y = Jn(y)), (f = Jn(f));
                }
                y = null;
              }
            else y = null;
            h !== null && Od(d, p, h, y, !1),
              v !== null && k !== null && Od(d, k, v, y, !0);
          }
        }
        e: {
          if (
            ((p = u ? er(u) : window),
            (h = p.nodeName && p.nodeName.toLowerCase()),
            h === "select" || (h === "input" && p.type === "file"))
          )
            var S = W0;
          else if (sd(p))
            if (ad) S = Q0;
            else {
              S = Y0;
              var T = G0;
            }
          else
            (h = p.nodeName) &&
              h.toLowerCase() === "input" &&
              (p.type === "checkbox" || p.type === "radio") &&
              (S = K0);
          if (S && (S = S(e, u))) {
            ld(d, S, n, c);
            break e;
          }
          T && T(e, p, u),
            e === "focusout" &&
              (T = p._wrapperState) &&
              T.controlled &&
              p.type === "number" &&
              sl(p, "number", p.value);
        }
        switch (((T = u ? er(u) : window), e)) {
          case "focusin":
            (sd(T) || T.contentEditable === "true") &&
              ((Xn = T), (Al = u), (Zr = null));
            break;
          case "focusout":
            Zr = Al = Xn = null;
            break;
          case "mousedown":
            $l = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ($l = !1), gd(d, n, c);
            break;
          case "selectionchange":
            if (J0) break;
          case "keydown":
          case "keyup":
            gd(d, n, c);
        }
        var x;
        if (Ml)
          e: {
            switch (e) {
              case "compositionstart":
                var _ = "onCompositionStart";
                break e;
              case "compositionend":
                _ = "onCompositionEnd";
                break e;
              case "compositionupdate":
                _ = "onCompositionUpdate";
                break e;
            }
            _ = void 0;
          }
        else
          Qn
            ? id(e, n) && (_ = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (_ = "onCompositionStart");
        _ &&
          (td &&
            n.locale !== "ko" &&
            (Qn || _ !== "onCompositionStart"
              ? _ === "onCompositionEnd" && Qn && (x = Xc())
              : ((en = c),
                (kl = "value" in en ? en.value : en.textContent),
                (Qn = !0))),
          (T = lo(u, _)),
          0 < T.length &&
            ((_ = new Zc(_, e, null, n, c)),
            d.push({ event: _, listeners: T }),
            x ? (_.data = x) : ((x = od(n)), x !== null && (_.data = x)))),
          (x = F0 ? B0(e, n) : V0(e, n)) &&
            ((u = lo(u, "onBeforeInput")),
            0 < u.length &&
              ((c = new Zc("onBeforeInput", "beforeinput", null, n, c)),
              d.push({ event: c, listeners: u }),
              (c.data = x)));
      }
      kd(d, t);
    });
  }
  function ni(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function lo(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var i = e,
        o = i.stateNode;
      i.tag === 5 &&
        o !== null &&
        ((i = o),
        (o = jr(e, n)),
        o != null && r.unshift(ni(e, o, i)),
        (o = jr(e, t)),
        o != null && r.push(ni(e, o, i))),
        (e = e.return);
    }
    return r;
  }
  function Jn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Od(e, t, n, r, i) {
    for (var o = t._reactName, s = []; n !== null && n !== r; ) {
      var l = n,
        a = l.alternate,
        u = l.stateNode;
      if (a !== null && a === r) break;
      l.tag === 5 &&
        u !== null &&
        ((l = u),
        i
          ? ((a = jr(n, o)), a != null && s.unshift(ni(n, a, l)))
          : i || ((a = jr(n, o)), a != null && s.push(ni(n, a, l)))),
        (n = n.return);
    }
    s.length !== 0 && e.push({ event: t, listeners: s });
  }
  var ng = /\r\n?/g,
    rg = /\u0000|\uFFFD/g;
  function _d(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        ng,
        `
`
      )
      .replace(rg, "");
  }
  function ao(e, t, n) {
    if (((t = _d(t)), _d(e) !== t && n)) throw Error(L(425));
  }
  function uo() {}
  var Vl = null,
    Ul = null;
  function Hl(e, t) {
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
  var Wl = typeof setTimeout == "function" ? setTimeout : void 0,
    ig = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Ld = typeof Promise == "function" ? Promise : void 0,
    og =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Ld < "u"
        ? function (e) {
            return Ld.resolve(null).then(e).catch(sg);
          }
        : Wl;
  function sg(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Gl(e, t) {
    var n = t,
      r = 0;
    do {
      var i = n.nextSibling;
      if ((e.removeChild(n), i && i.nodeType === 8))
        if (((n = i.data), n === "/$")) {
          if (r === 0) {
            e.removeChild(i), Gr(t);
            return;
          }
          r--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
      n = i;
    } while (n);
    Gr(t);
  }
  function nn(e) {
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
  function Id(e) {
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
  var Zn = Math.random().toString(36).slice(2),
    Ct = "__reactFiber$" + Zn,
    ri = "__reactProps$" + Zn,
    zt = "__reactContainer$" + Zn,
    Yl = "__reactEvents$" + Zn,
    lg = "__reactListeners$" + Zn,
    ag = "__reactHandles$" + Zn;
  function xn(e) {
    var t = e[Ct];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[zt] || n[Ct])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = Id(e); e !== null; ) {
            if ((n = e[Ct])) return n;
            e = Id(e);
          }
        return t;
      }
      (e = n), (n = e.parentNode);
    }
    return null;
  }
  function ii(e) {
    return (
      (e = e[Ct] || e[zt]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function er(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(L(33));
  }
  function co(e) {
    return e[ri] || null;
  }
  var Kl = [],
    tr = -1;
  function rn(e) {
    return { current: e };
  }
  function ne(e) {
    0 > tr || ((e.current = Kl[tr]), (Kl[tr] = null), tr--);
  }
  function ee(e, t) {
    tr++, (Kl[tr] = e.current), (e.current = t);
  }
  var on = {},
    Oe = rn(on),
    $e = rn(!1),
    En = on;
  function nr(e, t) {
    var n = e.type.contextTypes;
    if (!n) return on;
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
  function je(e) {
    return (e = e.childContextTypes), e != null;
  }
  function fo() {
    ne($e), ne(Oe);
  }
  function Md(e, t, n) {
    if (Oe.current !== on) throw Error(L(168));
    ee(Oe, t), ee($e, n);
  }
  function Nd(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
      return n;
    r = r.getChildContext();
    for (var i in r) if (!(i in t)) throw Error(L(108, Gm(e) || "Unknown", i));
    return oe({}, n, r);
  }
  function po(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        on),
      (En = Oe.current),
      ee(Oe, e),
      ee($e, $e.current),
      !0
    );
  }
  function Rd(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(L(169));
    n
      ? ((e = Nd(e, t, En)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        ne($e),
        ne(Oe),
        ee(Oe, e))
      : ne($e),
      ee($e, n);
  }
  var At = null,
    ho = !1,
    Ql = !1;
  function zd(e) {
    At === null ? (At = [e]) : At.push(e);
  }
  function ug(e) {
    (ho = !0), zd(e);
  }
  function sn() {
    if (!Ql && At !== null) {
      Ql = !0;
      var e = 0,
        t = X;
      try {
        var n = At;
        for (X = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        (At = null), (ho = !1);
      } catch (i) {
        throw (At !== null && (At = At.slice(e + 1)), $c(vl, sn), i);
      } finally {
        (X = t), (Ql = !1);
      }
    }
    return null;
  }
  var rr = [],
    ir = 0,
    mo = null,
    go = 0,
    rt = [],
    it = 0,
    Tn = null,
    $t = 1,
    jt = "";
  function Cn(e, t) {
    (rr[ir++] = go), (rr[ir++] = mo), (mo = e), (go = t);
  }
  function Ad(e, t, n) {
    (rt[it++] = $t), (rt[it++] = jt), (rt[it++] = Tn), (Tn = e);
    var r = $t;
    e = jt;
    var i = 32 - mt(r) - 1;
    (r &= ~(1 << i)), (n += 1);
    var o = 32 - mt(t) + i;
    if (30 < o) {
      var s = i - (i % 5);
      (o = (r & ((1 << s) - 1)).toString(32)),
        (r >>= s),
        (i -= s),
        ($t = (1 << (32 - mt(t) + i)) | (n << i) | r),
        (jt = o + e);
    } else ($t = (1 << o) | (n << i) | r), (jt = e);
  }
  function Xl(e) {
    e.return !== null && (Cn(e, 1), Ad(e, 1, 0));
  }
  function ql(e) {
    for (; e === mo; )
      (mo = rr[--ir]), (rr[ir] = null), (go = rr[--ir]), (rr[ir] = null);
    for (; e === Tn; )
      (Tn = rt[--it]),
        (rt[it] = null),
        (jt = rt[--it]),
        (rt[it] = null),
        ($t = rt[--it]),
        (rt[it] = null);
  }
  var Ge = null,
    Ye = null,
    ie = !1,
    vt = null;
  function $d(e, t) {
    var n = at(5, null, null, 0);
    (n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
  }
  function jd(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t =
            t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (Ge = e), (Ye = nn(t.firstChild)), !0)
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
            ? ((n = Tn !== null ? { id: $t, overflow: jt } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824,
              }),
              (n = at(18, null, null, 0)),
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
  function Jl(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Zl(e) {
    if (ie) {
      var t = Ye;
      if (t) {
        var n = t;
        if (!jd(e, t)) {
          if (Jl(e)) throw Error(L(418));
          t = nn(n.nextSibling);
          var r = Ge;
          t && jd(e, t)
            ? $d(r, n)
            : ((e.flags = (e.flags & -4097) | 2), (ie = !1), (Ge = e));
        }
      } else {
        if (Jl(e)) throw Error(L(418));
        (e.flags = (e.flags & -4097) | 2), (ie = !1), (Ge = e);
      }
    }
  }
  function Dd(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    Ge = e;
  }
  function vo(e) {
    if (e !== Ge) return !1;
    if (!ie) return Dd(e), (ie = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !Hl(e.type, e.memoizedProps))),
      t && (t = Ye))
    ) {
      if (Jl(e)) throw (bd(), Error(L(418)));
      for (; t; ) $d(e, t), (t = nn(t.nextSibling));
    }
    if ((Dd(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(L(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                Ye = nn(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        Ye = null;
      }
    } else Ye = Ge ? nn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function bd() {
    for (var e = Ye; e; ) e = nn(e.nextSibling);
  }
  function or() {
    (Ye = Ge = null), (ie = !1);
  }
  function ea(e) {
    vt === null ? (vt = [e]) : vt.push(e);
  }
  var cg = Rt.ReactCurrentBatchConfig;
  function yt(e, t) {
    if (e && e.defaultProps) {
      (t = oe({}, t)), (e = e.defaultProps);
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  var yo = rn(null),
    wo = null,
    sr = null,
    ta = null;
  function na() {
    ta = sr = wo = null;
  }
  function ra(e) {
    var t = yo.current;
    ne(yo), (e._currentValue = t);
  }
  function ia(e, t, n) {
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
  function lr(e, t) {
    (wo = e),
      (ta = sr = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        (e.lanes & t && (De = !0), (e.firstContext = null));
  }
  function ot(e) {
    var t = e._currentValue;
    if (ta !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), sr === null)) {
        if (wo === null) throw Error(L(308));
        (sr = e), (wo.dependencies = { lanes: 0, firstContext: e });
      } else sr = sr.next = e;
    return t;
  }
  var kn = null;
  function oa(e) {
    kn === null ? (kn = [e]) : kn.push(e);
  }
  function Fd(e, t, n, r) {
    var i = t.interleaved;
    return (
      i === null ? ((n.next = n), oa(t)) : ((n.next = i.next), (i.next = n)),
      (t.interleaved = n),
      Dt(e, r)
    );
  }
  function Dt(e, t) {
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
  var ln = !1;
  function sa(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Bd(e, t) {
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
  function bt(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function an(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), W & 2)) {
      var i = r.pending;
      return (
        i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
        (r.pending = t),
        Dt(e, n)
      );
    }
    return (
      (i = r.interleaved),
      i === null ? ((t.next = t), oa(r)) : ((t.next = i.next), (i.next = t)),
      (r.interleaved = t),
      Dt(e, n)
    );
  }
  function So(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), Sl(e, n);
    }
  }
  function Vd(e, t) {
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
  function xo(e, t, n, r) {
    var i = e.updateQueue;
    ln = !1;
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
            var v = e,
              y = l;
            switch (((p = t), (h = n), y.tag)) {
              case 1:
                if (((v = y.payload), typeof v == "function")) {
                  d = v.call(h, d, p);
                  break e;
                }
                d = v;
                break e;
              case 3:
                v.flags = (v.flags & -65537) | 128;
              case 0:
                if (
                  ((v = y.payload),
                  (p = typeof v == "function" ? v.call(h, d, p) : v),
                  p == null)
                )
                  break e;
                d = oe({}, d, p);
                break e;
              case 2:
                ln = !0;
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
      (_n |= s), (e.lanes = s), (e.memoizedState = d);
    }
  }
  function Ud(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          i = r.callback;
        if (i !== null) {
          if (((r.callback = null), (r = n), typeof i != "function"))
            throw Error(L(191, i));
          i.call(r);
        }
      }
  }
  var Hd = new sc.Component().refs;
  function la(e, t, n, r) {
    (t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : oe({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Eo = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Sn(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = Ae(),
        i = fn(e),
        o = bt(r, i);
      (o.payload = t),
        n != null && (o.callback = n),
        (t = an(e, o, i)),
        t !== null && (xt(t, e, i, r), So(t, e, i));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = Ae(),
        i = fn(e),
        o = bt(r, i);
      (o.tag = 1),
        (o.payload = t),
        n != null && (o.callback = n),
        (t = an(e, o, i)),
        t !== null && (xt(t, e, i, r), So(t, e, i));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Ae(),
        r = fn(e),
        i = bt(n, r);
      (i.tag = 2),
        t != null && (i.callback = t),
        (t = an(e, i, r)),
        t !== null && (xt(t, e, r, n), So(t, e, r));
    },
  };
  function Wd(e, t, n, r, i, o, s) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, o, s)
        : t.prototype && t.prototype.isPureReactComponent
        ? !Jr(n, r) || !Jr(i, o)
        : !0
    );
  }
  function Gd(e, t, n) {
    var r = !1,
      i = on,
      o = t.contextType;
    return (
      typeof o == "object" && o !== null
        ? (o = ot(o))
        : ((i = je(t) ? En : Oe.current),
          (r = t.contextTypes),
          (o = (r = r != null) ? nr(e, i) : on)),
      (t = new t(n, o)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = Eo),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = i),
        (e.__reactInternalMemoizedMaskedChildContext = o)),
      t
    );
  }
  function Yd(e, t, n, r) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && Eo.enqueueReplaceState(t, t.state, null);
  }
  function aa(e, t, n, r) {
    var i = e.stateNode;
    (i.props = n), (i.state = e.memoizedState), (i.refs = Hd), sa(e);
    var o = t.contextType;
    typeof o == "object" && o !== null
      ? (i.context = ot(o))
      : ((o = je(t) ? En : Oe.current), (i.context = nr(e, o))),
      (i.state = e.memoizedState),
      (o = t.getDerivedStateFromProps),
      typeof o == "function" && (la(e, t, o, n), (i.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function" ||
        (typeof i.UNSAFE_componentWillMount != "function" &&
          typeof i.componentWillMount != "function") ||
        ((t = i.state),
        typeof i.componentWillMount == "function" && i.componentWillMount(),
        typeof i.UNSAFE_componentWillMount == "function" &&
          i.UNSAFE_componentWillMount(),
        t !== i.state && Eo.enqueueReplaceState(i, i.state, null),
        xo(e, n, i, r),
        (i.state = e.memoizedState)),
      typeof i.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function oi(e, t, n) {
    if (
      ((e = n.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(L(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(L(147, e));
        var i = r,
          o = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === o
          ? t.ref
          : ((t = function (s) {
              var l = i.refs;
              l === Hd && (l = i.refs = {}),
                s === null ? delete l[o] : (l[o] = s);
            }),
            (t._stringRef = o),
            t);
      }
      if (typeof e != "string") throw Error(L(284));
      if (!n._owner) throw Error(L(290, e));
    }
    return e;
  }
  function To(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        L(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e
        )
      ))
    );
  }
  function Kd(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Qd(e) {
    function t(f, m) {
      if (e) {
        var g = f.deletions;
        g === null ? ((f.deletions = [m]), (f.flags |= 16)) : g.push(m);
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
      return (f = hn(f, m)), (f.index = 0), (f.sibling = null), f;
    }
    function o(f, m, g) {
      return (
        (f.index = g),
        e
          ? ((g = f.alternate),
            g !== null
              ? ((g = g.index), g < m ? ((f.flags |= 2), m) : g)
              : ((f.flags |= 2), m))
          : ((f.flags |= 1048576), m)
      );
    }
    function s(f) {
      return e && f.alternate === null && (f.flags |= 2), f;
    }
    function l(f, m, g, w) {
      return m === null || m.tag !== 6
        ? ((m = Wa(g, f.mode, w)), (m.return = f), m)
        : ((m = i(m, g)), (m.return = f), m);
    }
    function a(f, m, g, w) {
      var S = g.type;
      return S === Un
        ? c(f, m, g.props.children, w, g.key)
        : m !== null &&
          (m.elementType === S ||
            (typeof S == "object" &&
              S !== null &&
              S.$$typeof === Kt &&
              Kd(S) === m.type))
        ? ((w = i(m, g.props)), (w.ref = oi(f, m, g)), (w.return = f), w)
        : ((w = Vo(g.type, g.key, g.props, null, f.mode, w)),
          (w.ref = oi(f, m, g)),
          (w.return = f),
          w);
    }
    function u(f, m, g, w) {
      return m === null ||
        m.tag !== 4 ||
        m.stateNode.containerInfo !== g.containerInfo ||
        m.stateNode.implementation !== g.implementation
        ? ((m = Ga(g, f.mode, w)), (m.return = f), m)
        : ((m = i(m, g.children || [])), (m.return = f), m);
    }
    function c(f, m, g, w, S) {
      return m === null || m.tag !== 7
        ? ((m = Nn(g, f.mode, w, S)), (m.return = f), m)
        : ((m = i(m, g)), (m.return = f), m);
    }
    function d(f, m, g) {
      if ((typeof m == "string" && m !== "") || typeof m == "number")
        return (m = Wa("" + m, f.mode, g)), (m.return = f), m;
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case Di:
            return (
              (g = Vo(m.type, m.key, m.props, null, f.mode, g)),
              (g.ref = oi(f, null, m)),
              (g.return = f),
              g
            );
          case Vn:
            return (m = Ga(m, f.mode, g)), (m.return = f), m;
          case Kt:
            var w = m._init;
            return d(f, w(m._payload), g);
        }
        if (zr(m) || Nr(m))
          return (m = Nn(m, f.mode, g, null)), (m.return = f), m;
        To(f, m);
      }
      return null;
    }
    function p(f, m, g, w) {
      var S = m !== null ? m.key : null;
      if ((typeof g == "string" && g !== "") || typeof g == "number")
        return S !== null ? null : l(f, m, "" + g, w);
      if (typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case Di:
            return g.key === S ? a(f, m, g, w) : null;
          case Vn:
            return g.key === S ? u(f, m, g, w) : null;
          case Kt:
            return (S = g._init), p(f, m, S(g._payload), w);
        }
        if (zr(g) || Nr(g)) return S !== null ? null : c(f, m, g, w, null);
        To(f, g);
      }
      return null;
    }
    function h(f, m, g, w, S) {
      if ((typeof w == "string" && w !== "") || typeof w == "number")
        return (f = f.get(g) || null), l(m, f, "" + w, S);
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case Di:
            return (
              (f = f.get(w.key === null ? g : w.key) || null), a(m, f, w, S)
            );
          case Vn:
            return (
              (f = f.get(w.key === null ? g : w.key) || null), u(m, f, w, S)
            );
          case Kt:
            var T = w._init;
            return h(f, m, g, T(w._payload), S);
        }
        if (zr(w) || Nr(w)) return (f = f.get(g) || null), c(m, f, w, S, null);
        To(m, w);
      }
      return null;
    }
    function v(f, m, g, w) {
      for (
        var S = null, T = null, x = m, _ = (m = 0), O = null;
        x !== null && _ < g.length;
        _++
      ) {
        x.index > _ ? ((O = x), (x = null)) : (O = x.sibling);
        var b = p(f, x, g[_], w);
        if (b === null) {
          x === null && (x = O);
          break;
        }
        e && x && b.alternate === null && t(f, x),
          (m = o(b, m, _)),
          T === null ? (S = b) : (T.sibling = b),
          (T = b),
          (x = O);
      }
      if (_ === g.length) return n(f, x), ie && Cn(f, _), S;
      if (x === null) {
        for (; _ < g.length; _++)
          (x = d(f, g[_], w)),
            x !== null &&
              ((m = o(x, m, _)),
              T === null ? (S = x) : (T.sibling = x),
              (T = x));
        return ie && Cn(f, _), S;
      }
      for (x = r(f, x); _ < g.length; _++)
        (O = h(x, f, _, g[_], w)),
          O !== null &&
            (e && O.alternate !== null && x.delete(O.key === null ? _ : O.key),
            (m = o(O, m, _)),
            T === null ? (S = O) : (T.sibling = O),
            (T = O));
      return (
        e &&
          x.forEach(function (M) {
            return t(f, M);
          }),
        ie && Cn(f, _),
        S
      );
    }
    function y(f, m, g, w) {
      var S = Nr(g);
      if (typeof S != "function") throw Error(L(150));
      if (((g = S.call(g)), g == null)) throw Error(L(151));
      for (
        var T = (S = null), x = m, _ = (m = 0), O = null, b = g.next();
        x !== null && !b.done;
        _++, b = g.next()
      ) {
        x.index > _ ? ((O = x), (x = null)) : (O = x.sibling);
        var M = p(f, x, b.value, w);
        if (M === null) {
          x === null && (x = O);
          break;
        }
        e && x && M.alternate === null && t(f, x),
          (m = o(M, m, _)),
          T === null ? (S = M) : (T.sibling = M),
          (T = M),
          (x = O);
      }
      if (b.done) return n(f, x), ie && Cn(f, _), S;
      if (x === null) {
        for (; !b.done; _++, b = g.next())
          (b = d(f, b.value, w)),
            b !== null &&
              ((m = o(b, m, _)),
              T === null ? (S = b) : (T.sibling = b),
              (T = b));
        return ie && Cn(f, _), S;
      }
      for (x = r(f, x); !b.done; _++, b = g.next())
        (b = h(x, f, _, b.value, w)),
          b !== null &&
            (e && b.alternate !== null && x.delete(b.key === null ? _ : b.key),
            (m = o(b, m, _)),
            T === null ? (S = b) : (T.sibling = b),
            (T = b));
      return (
        e &&
          x.forEach(function (j) {
            return t(f, j);
          }),
        ie && Cn(f, _),
        S
      );
    }
    function k(f, m, g, w) {
      if (
        (typeof g == "object" &&
          g !== null &&
          g.type === Un &&
          g.key === null &&
          (g = g.props.children),
        typeof g == "object" && g !== null)
      ) {
        switch (g.$$typeof) {
          case Di:
            e: {
              for (var S = g.key, T = m; T !== null; ) {
                if (T.key === S) {
                  if (((S = g.type), S === Un)) {
                    if (T.tag === 7) {
                      n(f, T.sibling),
                        (m = i(T, g.props.children)),
                        (m.return = f),
                        (f = m);
                      break e;
                    }
                  } else if (
                    T.elementType === S ||
                    (typeof S == "object" &&
                      S !== null &&
                      S.$$typeof === Kt &&
                      Kd(S) === T.type)
                  ) {
                    n(f, T.sibling),
                      (m = i(T, g.props)),
                      (m.ref = oi(f, T, g)),
                      (m.return = f),
                      (f = m);
                    break e;
                  }
                  n(f, T);
                  break;
                } else t(f, T);
                T = T.sibling;
              }
              g.type === Un
                ? ((m = Nn(g.props.children, f.mode, w, g.key)),
                  (m.return = f),
                  (f = m))
                : ((w = Vo(g.type, g.key, g.props, null, f.mode, w)),
                  (w.ref = oi(f, m, g)),
                  (w.return = f),
                  (f = w));
            }
            return s(f);
          case Vn:
            e: {
              for (T = g.key; m !== null; ) {
                if (m.key === T)
                  if (
                    m.tag === 4 &&
                    m.stateNode.containerInfo === g.containerInfo &&
                    m.stateNode.implementation === g.implementation
                  ) {
                    n(f, m.sibling),
                      (m = i(m, g.children || [])),
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
              (m = Ga(g, f.mode, w)), (m.return = f), (f = m);
            }
            return s(f);
          case Kt:
            return (T = g._init), k(f, m, T(g._payload), w);
        }
        if (zr(g)) return v(f, m, g, w);
        if (Nr(g)) return y(f, m, g, w);
        To(f, g);
      }
      return (typeof g == "string" && g !== "") || typeof g == "number"
        ? ((g = "" + g),
          m !== null && m.tag === 6
            ? (n(f, m.sibling), (m = i(m, g)), (m.return = f), (f = m))
            : (n(f, m), (m = Wa(g, f.mode, w)), (m.return = f), (f = m)),
          s(f))
        : n(f, m);
    }
    return k;
  }
  var ar = Qd(!0),
    Xd = Qd(!1),
    si = {},
    kt = rn(si),
    li = rn(si),
    ai = rn(si);
  function Pn(e) {
    if (e === si) throw Error(L(174));
    return e;
  }
  function ua(e, t) {
    switch ((ee(ai, t), ee(li, e), ee(kt, si), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : al(null, "");
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = al(t, e));
    }
    ne(kt), ee(kt, t);
  }
  function ur() {
    ne(kt), ne(li), ne(ai);
  }
  function qd(e) {
    Pn(ai.current);
    var t = Pn(kt.current),
      n = al(t, e.type);
    t !== n && (ee(li, e), ee(kt, n));
  }
  function ca(e) {
    li.current === e && (ne(kt), ne(li));
  }
  var se = rn(0);
  function Co(e) {
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
  var da = [];
  function fa() {
    for (var e = 0; e < da.length; e++)
      da[e]._workInProgressVersionPrimary = null;
    da.length = 0;
  }
  var ko = Rt.ReactCurrentDispatcher,
    pa = Rt.ReactCurrentBatchConfig,
    On = 0,
    le = null,
    he = null,
    ye = null,
    Po = !1,
    ui = !1,
    ci = 0,
    dg = 0;
  function _e() {
    throw Error(L(321));
  }
  function ha(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!gt(e[n], t[n])) return !1;
    return !0;
  }
  function ma(e, t, n, r, i, o) {
    if (
      ((On = o),
      (le = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (ko.current = e === null || e.memoizedState === null ? mg : gg),
      (e = n(r, i)),
      ui)
    ) {
      o = 0;
      do {
        if (((ui = !1), (ci = 0), 25 <= o)) throw Error(L(301));
        (o += 1),
          (ye = he = null),
          (t.updateQueue = null),
          (ko.current = vg),
          (e = n(r, i));
      } while (ui);
    }
    if (
      ((ko.current = Lo),
      (t = he !== null && he.next !== null),
      (On = 0),
      (ye = he = le = null),
      (Po = !1),
      t)
    )
      throw Error(L(300));
    return e;
  }
  function ga() {
    var e = ci !== 0;
    return (ci = 0), e;
  }
  function Pt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return ye === null ? (le.memoizedState = ye = e) : (ye = ye.next = e), ye;
  }
  function st() {
    if (he === null) {
      var e = le.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = he.next;
    var t = ye === null ? le.memoizedState : ye.next;
    if (t !== null) (ye = t), (he = e);
    else {
      if (e === null) throw Error(L(310));
      (he = e),
        (e = {
          memoizedState: he.memoizedState,
          baseState: he.baseState,
          baseQueue: he.baseQueue,
          queue: he.queue,
          next: null,
        }),
        ye === null ? (le.memoizedState = ye = e) : (ye = ye.next = e);
    }
    return ye;
  }
  function di(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function va(e) {
    var t = st(),
      n = t.queue;
    if (n === null) throw Error(L(311));
    n.lastRenderedReducer = e;
    var r = he,
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
        if ((On & c) === c)
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
            (_n |= c);
        }
        u = u.next;
      } while (u !== null && u !== o);
      a === null ? (s = r) : (a.next = l),
        gt(r, t.memoizedState) || (De = !0),
        (t.memoizedState = r),
        (t.baseState = s),
        (t.baseQueue = a),
        (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
      i = e;
      do (o = i.lane), (le.lanes |= o), (_n |= o), (i = i.next);
      while (i !== e);
    } else i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function ya(e) {
    var t = st(),
      n = t.queue;
    if (n === null) throw Error(L(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      i = n.pending,
      o = t.memoizedState;
    if (i !== null) {
      n.pending = null;
      var s = (i = i.next);
      do (o = e(o, s.action)), (s = s.next);
      while (s !== i);
      gt(o, t.memoizedState) || (De = !0),
        (t.memoizedState = o),
        t.baseQueue === null && (t.baseState = o),
        (n.lastRenderedState = o);
    }
    return [o, r];
  }
  function Jd() {}
  function Zd(e, t) {
    var n = le,
      r = st(),
      i = t(),
      o = !gt(r.memoizedState, i);
    if (
      (o && ((r.memoizedState = i), (De = !0)),
      (r = r.queue),
      wa(nf.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || o || (ye !== null && ye.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        fi(9, tf.bind(null, n, r, i, t), void 0, null),
        we === null)
      )
        throw Error(L(349));
      On & 30 || ef(n, t, i);
    }
    return i;
  }
  function ef(e, t, n) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = le.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (le.updateQueue = t),
          (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
  }
  function tf(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), rf(t) && of(e);
  }
  function nf(e, t, n) {
    return n(function () {
      rf(t) && of(e);
    });
  }
  function rf(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !gt(e, n);
    } catch {
      return !0;
    }
  }
  function of(e) {
    var t = Dt(e, 1);
    t !== null && xt(t, e, 1, -1);
  }
  function sf(e) {
    var t = Pt();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: di,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = hg.bind(null, le, e)),
      [t.memoizedState, e]
    );
  }
  function fi(e, t, n, r) {
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
  function lf() {
    return st().memoizedState;
  }
  function Oo(e, t, n, r) {
    var i = Pt();
    (le.flags |= e),
      (i.memoizedState = fi(1 | t, n, void 0, r === void 0 ? null : r));
  }
  function _o(e, t, n, r) {
    var i = st();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (he !== null) {
      var s = he.memoizedState;
      if (((o = s.destroy), r !== null && ha(r, s.deps))) {
        i.memoizedState = fi(t, n, o, r);
        return;
      }
    }
    (le.flags |= e), (i.memoizedState = fi(1 | t, n, o, r));
  }
  function af(e, t) {
    return Oo(8390656, 8, e, t);
  }
  function wa(e, t) {
    return _o(2048, 8, e, t);
  }
  function uf(e, t) {
    return _o(4, 2, e, t);
  }
  function cf(e, t) {
    return _o(4, 4, e, t);
  }
  function df(e, t) {
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
  function ff(e, t, n) {
    return (
      (n = n != null ? n.concat([e]) : null), _o(4, 4, df.bind(null, t, e), n)
    );
  }
  function Sa() {}
  function pf(e, t) {
    var n = st();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ha(t, r[1])
      ? r[0]
      : ((n.memoizedState = [e, t]), e);
  }
  function hf(e, t) {
    var n = st();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ha(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function mf(e, t, n) {
    return On & 21
      ? (gt(n, t) ||
          ((n = Fc()), (le.lanes |= n), (_n |= n), (e.baseState = !0)),
        t)
      : (e.baseState && ((e.baseState = !1), (De = !0)), (e.memoizedState = n));
  }
  function fg(e, t) {
    var n = X;
    (X = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = pa.transition;
    pa.transition = {};
    try {
      e(!1), t();
    } finally {
      (X = n), (pa.transition = r);
    }
  }
  function gf() {
    return st().memoizedState;
  }
  function pg(e, t, n) {
    var r = fn(e);
    if (
      ((n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      vf(e))
    )
      yf(t, n);
    else if (((n = Fd(e, t, n, r)), n !== null)) {
      var i = Ae();
      xt(n, e, r, i), wf(n, t, r);
    }
  }
  function hg(e, t, n) {
    var r = fn(e),
      i = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (vf(e)) yf(t, i);
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
          if (((i.hasEagerState = !0), (i.eagerState = l), gt(l, s))) {
            var a = t.interleaved;
            a === null
              ? ((i.next = i), oa(t))
              : ((i.next = a.next), (a.next = i)),
              (t.interleaved = i);
            return;
          }
        } catch {
        } finally {
        }
      (n = Fd(e, t, i, r)),
        n !== null && ((i = Ae()), xt(n, e, r, i), wf(n, t, r));
    }
  }
  function vf(e) {
    var t = e.alternate;
    return e === le || (t !== null && t === le);
  }
  function yf(e, t) {
    ui = Po = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t);
  }
  function wf(e, t, n) {
    if (n & 4194240) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), Sl(e, n);
    }
  }
  var Lo = {
      readContext: ot,
      useCallback: _e,
      useContext: _e,
      useEffect: _e,
      useImperativeHandle: _e,
      useInsertionEffect: _e,
      useLayoutEffect: _e,
      useMemo: _e,
      useReducer: _e,
      useRef: _e,
      useState: _e,
      useDebugValue: _e,
      useDeferredValue: _e,
      useTransition: _e,
      useMutableSource: _e,
      useSyncExternalStore: _e,
      useId: _e,
      unstable_isNewReconciler: !1,
    },
    mg = {
      readContext: ot,
      useCallback: function (e, t) {
        return (Pt().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: ot,
      useEffect: af,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = n != null ? n.concat([e]) : null),
          Oo(4194308, 4, df.bind(null, t, e), n)
        );
      },
      useLayoutEffect: function (e, t) {
        return Oo(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return Oo(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = Pt();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, n) {
        var r = Pt();
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
          (e = e.dispatch = pg.bind(null, le, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Pt();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: sf,
      useDebugValue: Sa,
      useDeferredValue: function (e) {
        return (Pt().memoizedState = e);
      },
      useTransition: function () {
        var e = sf(!1),
          t = e[0];
        return (e = fg.bind(null, e[1])), (Pt().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = le,
          i = Pt();
        if (ie) {
          if (n === void 0) throw Error(L(407));
          n = n();
        } else {
          if (((n = t()), we === null)) throw Error(L(349));
          On & 30 || ef(r, t, n);
        }
        i.memoizedState = n;
        var o = { value: n, getSnapshot: t };
        return (
          (i.queue = o),
          af(nf.bind(null, r, o, e), [e]),
          (r.flags |= 2048),
          fi(9, tf.bind(null, r, o, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = Pt(),
          t = we.identifierPrefix;
        if (ie) {
          var n = jt,
            r = $t;
          (n = (r & ~(1 << (32 - mt(r) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = ci++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":");
        } else (n = dg++), (t = ":" + t + "r" + n.toString(32) + ":");
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    gg = {
      readContext: ot,
      useCallback: pf,
      useContext: ot,
      useEffect: wa,
      useImperativeHandle: ff,
      useInsertionEffect: uf,
      useLayoutEffect: cf,
      useMemo: hf,
      useReducer: va,
      useRef: lf,
      useState: function () {
        return va(di);
      },
      useDebugValue: Sa,
      useDeferredValue: function (e) {
        var t = st();
        return mf(t, he.memoizedState, e);
      },
      useTransition: function () {
        var e = va(di)[0],
          t = st().memoizedState;
        return [e, t];
      },
      useMutableSource: Jd,
      useSyncExternalStore: Zd,
      useId: gf,
      unstable_isNewReconciler: !1,
    },
    vg = {
      readContext: ot,
      useCallback: pf,
      useContext: ot,
      useEffect: wa,
      useImperativeHandle: ff,
      useInsertionEffect: uf,
      useLayoutEffect: cf,
      useMemo: hf,
      useReducer: ya,
      useRef: lf,
      useState: function () {
        return ya(di);
      },
      useDebugValue: Sa,
      useDeferredValue: function (e) {
        var t = st();
        return he === null ? (t.memoizedState = e) : mf(t, he.memoizedState, e);
      },
      useTransition: function () {
        var e = ya(di)[0],
          t = st().memoizedState;
        return [e, t];
      },
      useMutableSource: Jd,
      useSyncExternalStore: Zd,
      useId: gf,
      unstable_isNewReconciler: !1,
    };
  function cr(e, t) {
    try {
      var n = "",
        r = t;
      do (n += Wm(r)), (r = r.return);
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
  function xa(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Ea(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var yg = typeof WeakMap == "function" ? WeakMap : Map;
  function Sf(e, t, n) {
    (n = bt(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
      (n.callback = function () {
        $o || (($o = !0), (ja = r)), Ea(e, t);
      }),
      n
    );
  }
  function xf(e, t, n) {
    (n = bt(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var i = t.value;
      (n.payload = function () {
        return r(i);
      }),
        (n.callback = function () {
          Ea(e, t);
        });
    }
    var o = e.stateNode;
    return (
      o !== null &&
        typeof o.componentDidCatch == "function" &&
        (n.callback = function () {
          Ea(e, t),
            typeof r != "function" &&
              (cn === null ? (cn = new Set([this])) : cn.add(this));
          var s = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: s !== null ? s : "",
          });
        }),
      n
    );
  }
  function Ef(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new yg();
      var i = new Set();
      r.set(t, i);
    } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
    i.has(n) || (i.add(n), (e = Ng.bind(null, e, t, n)), t.then(e, e));
  }
  function Tf(e) {
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
  function Cf(e, t, n, r, i) {
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
                : ((t = bt(-1, 1)), (t.tag = 2), an(n, t, 1))),
            (n.lanes |= 1)),
        e);
  }
  var wg = Rt.ReactCurrentOwner,
    De = !1;
  function ze(e, t, n, r) {
    t.child = e === null ? Xd(t, null, n, r) : ar(t, e.child, n, r);
  }
  function kf(e, t, n, r, i) {
    n = n.render;
    var o = t.ref;
    return (
      lr(t, i),
      (r = ma(e, t, n, r, o, i)),
      (n = ga()),
      e !== null && !De
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~i),
          Ft(e, t, i))
        : (ie && n && Xl(t), (t.flags |= 1), ze(e, t, r, i), t.child)
    );
  }
  function Pf(e, t, n, r, i) {
    if (e === null) {
      var o = n.type;
      return typeof o == "function" &&
        !Ha(o) &&
        o.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = o), Of(e, t, o, r, i))
        : ((e = Vo(n.type, null, r, t, t.mode, i)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((o = e.child), !(e.lanes & i))) {
      var s = o.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : Jr), n(s, r) && e.ref === t.ref)
      )
        return Ft(e, t, i);
    }
    return (
      (t.flags |= 1),
      (e = hn(o, r)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Of(e, t, n, r, i) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (Jr(o, r) && e.ref === t.ref)
        if (((De = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
          e.flags & 131072 && (De = !0);
        else return (t.lanes = e.lanes), Ft(e, t, i);
    }
    return Ta(e, t, n, r, i);
  }
  function _f(e, t, n) {
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
          ee(fr, Ke),
          (Ke |= n);
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
            ee(fr, Ke),
            (Ke |= e),
            null
          );
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (r = o !== null ? o.baseLanes : n),
          ee(fr, Ke),
          (Ke |= r);
      }
    else
      o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
        ee(fr, Ke),
        (Ke |= r);
    return ze(e, t, i, n), t.child;
  }
  function Lf(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function Ta(e, t, n, r, i) {
    var o = je(n) ? En : Oe.current;
    return (
      (o = nr(t, o)),
      lr(t, i),
      (n = ma(e, t, n, r, o, i)),
      (r = ga()),
      e !== null && !De
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~i),
          Ft(e, t, i))
        : (ie && r && Xl(t), (t.flags |= 1), ze(e, t, n, i), t.child)
    );
  }
  function If(e, t, n, r, i) {
    if (je(n)) {
      var o = !0;
      po(t);
    } else o = !1;
    if ((lr(t, i), t.stateNode === null))
      Mo(e, t), Gd(t, n, r), aa(t, n, r, i), (r = !0);
    else if (e === null) {
      var s = t.stateNode,
        l = t.memoizedProps;
      s.props = l;
      var a = s.context,
        u = n.contextType;
      typeof u == "object" && u !== null
        ? (u = ot(u))
        : ((u = je(n) ? En : Oe.current), (u = nr(t, u)));
      var c = n.getDerivedStateFromProps,
        d =
          typeof c == "function" ||
          typeof s.getSnapshotBeforeUpdate == "function";
      d ||
        (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
          typeof s.componentWillReceiveProps != "function") ||
        ((l !== r || a !== u) && Yd(t, s, r, u)),
        (ln = !1);
      var p = t.memoizedState;
      (s.state = p),
        xo(t, r, s, i),
        (a = t.memoizedState),
        l !== r || p !== a || $e.current || ln
          ? (typeof c == "function" && (la(t, n, c, r), (a = t.memoizedState)),
            (l = ln || Wd(t, n, l, r, p, a, u))
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
        Bd(e, t),
        (l = t.memoizedProps),
        (u = t.type === t.elementType ? l : yt(t.type, l)),
        (s.props = u),
        (d = t.pendingProps),
        (p = s.context),
        (a = n.contextType),
        typeof a == "object" && a !== null
          ? (a = ot(a))
          : ((a = je(n) ? En : Oe.current), (a = nr(t, a)));
      var h = n.getDerivedStateFromProps;
      (c =
        typeof h == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function") ||
        (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
          typeof s.componentWillReceiveProps != "function") ||
        ((l !== d || p !== a) && Yd(t, s, r, a)),
        (ln = !1),
        (p = t.memoizedState),
        (s.state = p),
        xo(t, r, s, i);
      var v = t.memoizedState;
      l !== d || p !== v || $e.current || ln
        ? (typeof h == "function" && (la(t, n, h, r), (v = t.memoizedState)),
          (u = ln || Wd(t, n, u, r, p, v, a) || !1)
            ? (c ||
                (typeof s.UNSAFE_componentWillUpdate != "function" &&
                  typeof s.componentWillUpdate != "function") ||
                (typeof s.componentWillUpdate == "function" &&
                  s.componentWillUpdate(r, v, a),
                typeof s.UNSAFE_componentWillUpdate == "function" &&
                  s.UNSAFE_componentWillUpdate(r, v, a)),
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
              (t.memoizedState = v)),
          (s.props = r),
          (s.state = v),
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
    return Ca(e, t, n, r, o, i);
  }
  function Ca(e, t, n, r, i, o) {
    Lf(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s) return i && Rd(t, n, !1), Ft(e, t, o);
    (r = t.stateNode), (wg.current = t);
    var l =
      s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && s
        ? ((t.child = ar(t, e.child, null, o)), (t.child = ar(t, null, l, o)))
        : ze(e, t, l, o),
      (t.memoizedState = r.state),
      i && Rd(t, n, !0),
      t.child
    );
  }
  function Mf(e) {
    var t = e.stateNode;
    t.pendingContext
      ? Md(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Md(e, t.context, !1),
      ua(e, t.containerInfo);
  }
  function Nf(e, t, n, r, i) {
    return or(), ea(i), (t.flags |= 256), ze(e, t, n, r), t.child;
  }
  var ka = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Pa(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Rf(e, t, n) {
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
      ee(se, i & 1),
      e === null)
    )
      return (
        Zl(t),
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
                  : (o = Uo(s, r, 0, null)),
                (e = Nn(e, r, n, null)),
                (o.return = t),
                (e.return = t),
                (o.sibling = e),
                (t.child = o),
                (t.child.memoizedState = Pa(n)),
                (t.memoizedState = ka),
                e)
              : Oa(t, s))
      );
    if (((i = e.memoizedState), i !== null && ((l = i.dehydrated), l !== null)))
      return Sg(e, t, s, r, l, i, n);
    if (o) {
      (o = r.fallback), (s = t.mode), (i = e.child), (l = i.sibling);
      var a = { mode: "hidden", children: r.children };
      return (
        !(s & 1) && t.child !== i
          ? ((r = t.child),
            (r.childLanes = 0),
            (r.pendingProps = a),
            (t.deletions = null))
          : ((r = hn(i, a)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
        l !== null ? (o = hn(l, o)) : ((o = Nn(o, s, n, null)), (o.flags |= 2)),
        (o.return = t),
        (r.return = t),
        (r.sibling = o),
        (t.child = r),
        (r = o),
        (o = t.child),
        (s = e.child.memoizedState),
        (s =
          s === null
            ? Pa(n)
            : {
                baseLanes: s.baseLanes | n,
                cachePool: null,
                transitions: s.transitions,
              }),
        (o.memoizedState = s),
        (o.childLanes = e.childLanes & ~n),
        (t.memoizedState = ka),
        r
      );
    }
    return (
      (o = e.child),
      (e = o.sibling),
      (r = hn(o, { mode: "visible", children: r.children })),
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
  function Oa(e, t) {
    return (
      (t = Uo({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function Io(e, t, n, r) {
    return (
      r !== null && ea(r),
      ar(t, e.child, null, n),
      (e = Oa(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Sg(e, t, n, r, i, o, s) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = xa(Error(L(422)))), Io(e, t, s, r))
        : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((o = r.fallback),
          (i = t.mode),
          (r = Uo({ mode: "visible", children: r.children }, i, 0, null)),
          (o = Nn(o, i, s, null)),
          (o.flags |= 2),
          (r.return = t),
          (o.return = t),
          (r.sibling = o),
          (t.child = r),
          t.mode & 1 && ar(t, e.child, null, s),
          (t.child.memoizedState = Pa(s)),
          (t.memoizedState = ka),
          o);
    if (!(t.mode & 1)) return Io(e, t, s, null);
    if (i.data === "$!") {
      if (((r = i.nextSibling && i.nextSibling.dataset), r)) var l = r.dgst;
      return (
        (r = l), (o = Error(L(419))), (r = xa(o, r, void 0)), Io(e, t, s, r)
      );
    }
    if (((l = (s & e.childLanes) !== 0), De || l)) {
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
            ((o.retryLane = i), Dt(e, i), xt(r, e, i, -1));
      }
      return Ua(), (r = xa(Error(L(421)))), Io(e, t, s, r);
    }
    return i.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = Rg.bind(null, e)),
        (i._reactRetry = t),
        null)
      : ((e = o.treeContext),
        (Ye = nn(i.nextSibling)),
        (Ge = t),
        (ie = !0),
        (vt = null),
        e !== null &&
          ((rt[it++] = $t),
          (rt[it++] = jt),
          (rt[it++] = Tn),
          ($t = e.id),
          (jt = e.overflow),
          (Tn = t)),
        (t = Oa(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function zf(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), ia(e.return, t, n);
  }
  function _a(e, t, n, r, i) {
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
  function Af(e, t, n) {
    var r = t.pendingProps,
      i = r.revealOrder,
      o = r.tail;
    if ((ze(e, t, r.children, n), (r = se.current), r & 2))
      (r = (r & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && e.flags & 128)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && zf(e, n, t);
          else if (e.tag === 19) zf(e, n, t);
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
    if ((ee(se, r), !(t.mode & 1))) t.memoizedState = null;
    else
      switch (i) {
        case "forwards":
          for (n = t.child, i = null; n !== null; )
            (e = n.alternate),
              e !== null && Co(e) === null && (i = n),
              (n = n.sibling);
          (n = i),
            n === null
              ? ((i = t.child), (t.child = null))
              : ((i = n.sibling), (n.sibling = null)),
            _a(t, !1, i, n, o);
          break;
        case "backwards":
          for (n = null, i = t.child, t.child = null; i !== null; ) {
            if (((e = i.alternate), e !== null && Co(e) === null)) {
              t.child = i;
              break;
            }
            (e = i.sibling), (i.sibling = n), (n = i), (i = e);
          }
          _a(t, !0, n, null, o);
          break;
        case "together":
          _a(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function Mo(e, t) {
    !(t.mode & 1) &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function Ft(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (_n |= t.lanes),
      !(n & t.childLanes))
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(L(153));
    if (t.child !== null) {
      for (
        e = t.child, n = hn(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (n = n.sibling = hn(e, e.pendingProps)),
          (n.return = t);
      n.sibling = null;
    }
    return t.child;
  }
  function xg(e, t, n) {
    switch (t.tag) {
      case 3:
        Mf(t), or();
        break;
      case 5:
        qd(t);
        break;
      case 1:
        je(t.type) && po(t);
        break;
      case 4:
        ua(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          i = t.memoizedProps.value;
        ee(yo, r._currentValue), (r._currentValue = i);
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (ee(se, se.current & 1), (t.flags |= 128), null)
            : n & t.child.childLanes
            ? Rf(e, t, n)
            : (ee(se, se.current & 1),
              (e = Ft(e, t, n)),
              e !== null ? e.sibling : null);
        ee(se, se.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
          if (r) return Af(e, t, n);
          t.flags |= 128;
        }
        if (
          ((i = t.memoizedState),
          i !== null &&
            ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
          ee(se, se.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), _f(e, t, n);
    }
    return Ft(e, t, n);
  }
  var $f, La, jf, Df;
  ($f = function (e, t) {
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
    (La = function () {}),
    (jf = function (e, t, n, r) {
      var i = e.memoizedProps;
      if (i !== r) {
        (e = t.stateNode), Pn(kt.current);
        var o = null;
        switch (n) {
          case "input":
            (i = il(e, i)), (r = il(e, r)), (o = []);
            break;
          case "select":
            (i = oe({}, i, { value: void 0 })),
              (r = oe({}, r, { value: void 0 })),
              (o = []);
            break;
          case "textarea":
            (i = ll(e, i)), (r = ll(e, r)), (o = []);
            break;
          default:
            typeof i.onClick != "function" &&
              typeof r.onClick == "function" &&
              (e.onclick = uo);
        }
        ul(n, r);
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
                (Mr.hasOwnProperty(u)
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
                  (Mr.hasOwnProperty(u)
                    ? (a != null && u === "onScroll" && te("scroll", e),
                      o || l === a || (o = []))
                    : (o = o || []).push(u, a));
        }
        n && (o = o || []).push("style", n);
        var u = o;
        (t.updateQueue = u) && (t.flags |= 4);
      }
    }),
    (Df = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    });
  function pi(e, t) {
    if (!ie)
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
  function Le(e) {
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
  function Eg(e, t, n) {
    var r = t.pendingProps;
    switch ((ql(t), t.tag)) {
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
        return Le(t), null;
      case 1:
        return je(t.type) && fo(), Le(t), null;
      case 3:
        return (
          (r = t.stateNode),
          ur(),
          ne($e),
          ne(Oe),
          fa(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (vo(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                ((t.flags |= 1024), vt !== null && (Fa(vt), (vt = null)))),
          La(e, t),
          Le(t),
          null
        );
      case 5:
        ca(t);
        var i = Pn(ai.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          jf(e, t, n, r, i),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(L(166));
            return Le(t), null;
          }
          if (((e = Pn(kt.current)), vo(t))) {
            (r = t.stateNode), (n = t.type);
            var o = t.memoizedProps;
            switch (((r[Ct] = t), (r[ri] = o), (e = (t.mode & 1) !== 0), n)) {
              case "dialog":
                te("cancel", r), te("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                te("load", r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < ei.length; i++) te(ei[i], r);
                break;
              case "source":
                te("error", r);
                break;
              case "img":
              case "image":
              case "link":
                te("error", r), te("load", r);
                break;
              case "details":
                te("toggle", r);
                break;
              case "input":
                gc(r, o), te("invalid", r);
                break;
              case "select":
                (r._wrapperState = { wasMultiple: !!o.multiple }),
                  te("invalid", r);
                break;
              case "textarea":
                wc(r, o), te("invalid", r);
            }
            ul(n, o), (i = null);
            for (var s in o)
              if (o.hasOwnProperty(s)) {
                var l = o[s];
                s === "children"
                  ? typeof l == "string"
                    ? r.textContent !== l &&
                      (o.suppressHydrationWarning !== !0 &&
                        ao(r.textContent, l, e),
                      (i = ["children", l]))
                    : typeof l == "number" &&
                      r.textContent !== "" + l &&
                      (o.suppressHydrationWarning !== !0 &&
                        ao(r.textContent, l, e),
                      (i = ["children", "" + l]))
                  : Mr.hasOwnProperty(s) &&
                    l != null &&
                    s === "onScroll" &&
                    te("scroll", r);
              }
            switch (n) {
              case "input":
                bi(r), yc(r, o, !0);
                break;
              case "textarea":
                bi(r), xc(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof o.onClick == "function" && (r.onclick = uo);
            }
            (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
          } else {
            (s = i.nodeType === 9 ? i : i.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = Ec(n)),
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
              (e[Ct] = t),
              (e[ri] = r),
              $f(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((s = cl(n, r)), n)) {
                case "dialog":
                  te("cancel", e), te("close", e), (i = r);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  te("load", e), (i = r);
                  break;
                case "video":
                case "audio":
                  for (i = 0; i < ei.length; i++) te(ei[i], e);
                  i = r;
                  break;
                case "source":
                  te("error", e), (i = r);
                  break;
                case "img":
                case "image":
                case "link":
                  te("error", e), te("load", e), (i = r);
                  break;
                case "details":
                  te("toggle", e), (i = r);
                  break;
                case "input":
                  gc(e, r), (i = il(e, r)), te("invalid", e);
                  break;
                case "option":
                  i = r;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!r.multiple }),
                    (i = oe({}, r, { value: void 0 })),
                    te("invalid", e);
                  break;
                case "textarea":
                  wc(e, r), (i = ll(e, r)), te("invalid", e);
                  break;
                default:
                  i = r;
              }
              ul(n, i), (l = i);
              for (o in l)
                if (l.hasOwnProperty(o)) {
                  var a = l[o];
                  o === "style"
                    ? kc(e, a)
                    : o === "dangerouslySetInnerHTML"
                    ? ((a = a ? a.__html : void 0), a != null && Tc(e, a))
                    : o === "children"
                    ? typeof a == "string"
                      ? (n !== "textarea" || a !== "") && Ar(e, a)
                      : typeof a == "number" && Ar(e, "" + a)
                    : o !== "suppressContentEditableWarning" &&
                      o !== "suppressHydrationWarning" &&
                      o !== "autoFocus" &&
                      (Mr.hasOwnProperty(o)
                        ? a != null && o === "onScroll" && te("scroll", e)
                        : a != null && Ys(e, o, a, s));
                }
              switch (n) {
                case "input":
                  bi(e), yc(e, r, !1);
                  break;
                case "textarea":
                  bi(e), xc(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + Qt(r.value));
                  break;
                case "select":
                  (e.multiple = !!r.multiple),
                    (o = r.value),
                    o != null
                      ? Hn(e, !!r.multiple, o, !1)
                      : r.defaultValue != null &&
                        Hn(e, !!r.multiple, r.defaultValue, !0);
                  break;
                default:
                  typeof i.onClick == "function" && (e.onclick = uo);
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
        return Le(t), null;
      case 6:
        if (e && t.stateNode != null) Df(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(L(166));
          if (((n = Pn(ai.current)), Pn(kt.current), vo(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[Ct] = t),
              (o = r.nodeValue !== n) && ((e = Ge), e !== null))
            )
              switch (e.tag) {
                case 3:
                  ao(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    ao(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            o && (t.flags |= 4);
          } else
            (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[Ct] = t),
              (t.stateNode = r);
        }
        return Le(t), null;
      case 13:
        if (
          (ne(se),
          (r = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (ie && Ye !== null && t.mode & 1 && !(t.flags & 128))
            bd(), or(), (t.flags |= 98560), (o = !1);
          else if (((o = vo(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!o) throw Error(L(318));
              if (
                ((o = t.memoizedState),
                (o = o !== null ? o.dehydrated : null),
                !o)
              )
                throw Error(L(317));
              o[Ct] = t;
            } else
              or(),
                !(t.flags & 128) && (t.memoizedState = null),
                (t.flags |= 4);
            Le(t), (o = !1);
          } else vt !== null && (Fa(vt), (vt = null)), (o = !0);
          if (!o) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              t.mode & 1 &&
                (e === null || se.current & 1 ? me === 0 && (me = 3) : Ua())),
            t.updateQueue !== null && (t.flags |= 4),
            Le(t),
            null);
      case 4:
        return (
          ur(),
          La(e, t),
          e === null && ti(t.stateNode.containerInfo),
          Le(t),
          null
        );
      case 10:
        return ra(t.type._context), Le(t), null;
      case 17:
        return je(t.type) && fo(), Le(t), null;
      case 19:
        if ((ne(se), (o = t.memoizedState), o === null)) return Le(t), null;
        if (((r = (t.flags & 128) !== 0), (s = o.rendering), s === null))
          if (r) pi(o, !1);
          else {
            if (me !== 0 || (e !== null && e.flags & 128))
              for (e = t.child; e !== null; ) {
                if (((s = Co(e)), s !== null)) {
                  for (
                    t.flags |= 128,
                      pi(o, !1),
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
                  return ee(se, (se.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            o.tail !== null &&
              ce() > pr &&
              ((t.flags |= 128), (r = !0), pi(o, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = Co(s)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                pi(o, !0),
                o.tail === null &&
                  o.tailMode === "hidden" &&
                  !s.alternate &&
                  !ie)
              )
                return Le(t), null;
            } else
              2 * ce() - o.renderingStartTime > pr &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), pi(o, !1), (t.lanes = 4194304));
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
            (o.renderingStartTime = ce()),
            (t.sibling = null),
            (n = se.current),
            ee(se, r ? (n & 1) | 2 : n & 1),
            t)
          : (Le(t), null);
      case 22:
      case 23:
        return (
          Va(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && t.mode & 1
            ? Ke & 1073741824 &&
              (Le(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Le(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(L(156, t.tag));
  }
  function Tg(e, t) {
    switch ((ql(t), t.tag)) {
      case 1:
        return (
          je(t.type) && fo(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          ur(),
          ne($e),
          ne(Oe),
          fa(),
          (e = t.flags),
          e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return ca(t), null;
      case 13:
        if (
          (ne(se), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(L(340));
          or();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return ne(se), null;
      case 4:
        return ur(), null;
      case 10:
        return ra(t.type._context), null;
      case 22:
      case 23:
        return Va(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var No = !1,
    Ie = !1,
    Cg = typeof WeakSet == "function" ? WeakSet : Set,
    z = null;
  function dr(e, t) {
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
  function Ia(e, t, n) {
    try {
      n();
    } catch (r) {
      ae(e, t, r);
    }
  }
  var bf = !1;
  function kg(e, t) {
    if (((Vl = qi), (e = md()), zl(e))) {
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
      Ul = { focusedElem: e, selectionRange: n }, qi = !1, z = t;
      z !== null;

    )
      if (((t = z), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = t), (z = e);
      else
        for (; z !== null; ) {
          t = z;
          try {
            var v = t.alternate;
            if (t.flags & 1024)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (v !== null) {
                    var y = v.memoizedProps,
                      k = v.memoizedState,
                      f = t.stateNode,
                      m = f.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? y : yt(t.type, y),
                        k
                      );
                    f.__reactInternalSnapshotBeforeUpdate = m;
                  }
                  break;
                case 3:
                  var g = t.stateNode.containerInfo;
                  g.nodeType === 1
                    ? (g.textContent = "")
                    : g.nodeType === 9 &&
                      g.documentElement &&
                      g.removeChild(g.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(L(163));
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
    return (v = bf), (bf = !1), v;
  }
  function hi(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var i = (r = r.next);
      do {
        if ((i.tag & e) === e) {
          var o = i.destroy;
          (i.destroy = void 0), o !== void 0 && Ia(t, n, o);
        }
        i = i.next;
      } while (i !== r);
    }
  }
  function Ro(e, t) {
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
  function Ma(e) {
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
  function Ff(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), Ff(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[Ct],
          delete t[ri],
          delete t[Yl],
          delete t[lg],
          delete t[ag])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function Bf(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Vf(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Bf(e.return)) return null;
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
  function Na(e, t, n) {
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
            n != null || t.onclick !== null || (t.onclick = uo));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (Na(e, t, n), e = e.sibling; e !== null; )
        Na(e, t, n), (e = e.sibling);
  }
  function Ra(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
      for (Ra(e, t, n), e = e.sibling; e !== null; )
        Ra(e, t, n), (e = e.sibling);
  }
  var Ce = null,
    wt = !1;
  function un(e, t, n) {
    for (n = n.child; n !== null; ) Uf(e, t, n), (n = n.sibling);
  }
  function Uf(e, t, n) {
    if (Tt && typeof Tt.onCommitFiberUnmount == "function")
      try {
        Tt.onCommitFiberUnmount(Wi, n);
      } catch {}
    switch (n.tag) {
      case 5:
        Ie || dr(n, t);
      case 6:
        var r = Ce,
          i = wt;
        (Ce = null),
          un(e, t, n),
          (Ce = r),
          (wt = i),
          Ce !== null &&
            (wt
              ? ((e = Ce),
                (n = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : Ce.removeChild(n.stateNode));
        break;
      case 18:
        Ce !== null &&
          (wt
            ? ((e = Ce),
              (n = n.stateNode),
              e.nodeType === 8
                ? Gl(e.parentNode, n)
                : e.nodeType === 1 && Gl(e, n),
              Gr(e))
            : Gl(Ce, n.stateNode));
        break;
      case 4:
        (r = Ce),
          (i = wt),
          (Ce = n.stateNode.containerInfo),
          (wt = !0),
          un(e, t, n),
          (Ce = r),
          (wt = i);
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
              s !== void 0 && (o & 2 || o & 4) && Ia(n, t, s),
              (i = i.next);
          } while (i !== r);
        }
        un(e, t, n);
        break;
      case 1:
        if (
          !Ie &&
          (dr(n, t),
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
        un(e, t, n);
        break;
      case 21:
        un(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((Ie = (r = Ie) || n.memoizedState !== null), un(e, t, n), (Ie = r))
          : un(e, t, n);
        break;
      default:
        un(e, t, n);
    }
  }
  function Hf(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Cg()),
        t.forEach(function (r) {
          var i = zg.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(i, i));
        });
    }
  }
  function St(e, t) {
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
                (Ce = l.stateNode), (wt = !1);
                break e;
              case 3:
                (Ce = l.stateNode.containerInfo), (wt = !0);
                break e;
              case 4:
                (Ce = l.stateNode.containerInfo), (wt = !0);
                break e;
            }
            l = l.return;
          }
          if (Ce === null) throw Error(L(160));
          Uf(o, s, i), (Ce = null), (wt = !1);
          var a = i.alternate;
          a !== null && (a.return = null), (i.return = null);
        } catch (u) {
          ae(i, t, u);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) Wf(t, e), (t = t.sibling);
  }
  function Wf(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((St(t, e), Ot(e), r & 4)) {
          try {
            hi(3, e, e.return), Ro(3, e);
          } catch (y) {
            ae(e, e.return, y);
          }
          try {
            hi(5, e, e.return);
          } catch (y) {
            ae(e, e.return, y);
          }
        }
        break;
      case 1:
        St(t, e), Ot(e), r & 512 && n !== null && dr(n, n.return);
        break;
      case 5:
        if (
          (St(t, e),
          Ot(e),
          r & 512 && n !== null && dr(n, n.return),
          e.flags & 32)
        ) {
          var i = e.stateNode;
          try {
            Ar(i, "");
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
              l === "input" && o.type === "radio" && o.name != null && vc(i, o),
                cl(l, s);
              var u = cl(l, o);
              for (s = 0; s < a.length; s += 2) {
                var c = a[s],
                  d = a[s + 1];
                c === "style"
                  ? kc(i, d)
                  : c === "dangerouslySetInnerHTML"
                  ? Tc(i, d)
                  : c === "children"
                  ? Ar(i, d)
                  : Ys(i, c, d, u);
              }
              switch (l) {
                case "input":
                  ol(i, o);
                  break;
                case "textarea":
                  Sc(i, o);
                  break;
                case "select":
                  var p = i._wrapperState.wasMultiple;
                  i._wrapperState.wasMultiple = !!o.multiple;
                  var h = o.value;
                  h != null
                    ? Hn(i, !!o.multiple, h, !1)
                    : p !== !!o.multiple &&
                      (o.defaultValue != null
                        ? Hn(i, !!o.multiple, o.defaultValue, !0)
                        : Hn(i, !!o.multiple, o.multiple ? [] : "", !1));
              }
              i[ri] = o;
            } catch (y) {
              ae(e, e.return, y);
            }
        }
        break;
      case 6:
        if ((St(t, e), Ot(e), r & 4)) {
          if (e.stateNode === null) throw Error(L(162));
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
          (St(t, e), Ot(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            Gr(t.containerInfo);
          } catch (y) {
            ae(e, e.return, y);
          }
        break;
      case 4:
        St(t, e), Ot(e);
        break;
      case 13:
        St(t, e),
          Ot(e),
          (i = e.child),
          i.flags & 8192 &&
            ((o = i.memoizedState !== null),
            (i.stateNode.isHidden = o),
            !o ||
              (i.alternate !== null && i.alternate.memoizedState !== null) ||
              ($a = ce())),
          r & 4 && Hf(e);
        break;
      case 22:
        if (
          ((c = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((Ie = (u = Ie) || c), St(t, e), (Ie = u)) : St(t, e),
          Ot(e),
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
                    hi(4, p, p.return);
                    break;
                  case 1:
                    dr(p, p.return);
                    var v = p.stateNode;
                    if (typeof v.componentWillUnmount == "function") {
                      (r = p), (n = p.return);
                      try {
                        (t = r),
                          (v.props = t.memoizedProps),
                          (v.state = t.memoizedState),
                          v.componentWillUnmount();
                      } catch (y) {
                        ae(r, n, y);
                      }
                    }
                    break;
                  case 5:
                    dr(p, p.return);
                    break;
                  case 22:
                    if (p.memoizedState !== null) {
                      Kf(d);
                      continue;
                    }
                }
                h !== null ? ((h.return = p), (z = h)) : Kf(d);
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
                        (l.style.display = Cc("display", s)));
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
        St(t, e), Ot(e), r & 4 && Hf(e);
        break;
      case 21:
        break;
      default:
        St(t, e), Ot(e);
    }
  }
  function Ot(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (Bf(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(L(160));
        }
        switch (r.tag) {
          case 5:
            var i = r.stateNode;
            r.flags & 32 && (Ar(i, ""), (r.flags &= -33));
            var o = Vf(e);
            Ra(e, o, i);
            break;
          case 3:
          case 4:
            var s = r.stateNode.containerInfo,
              l = Vf(e);
            Na(e, l, s);
            break;
          default:
            throw Error(L(161));
        }
      } catch (a) {
        ae(e, e.return, a);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Pg(e, t, n) {
    (z = e), Gf(e);
  }
  function Gf(e, t, n) {
    for (var r = (e.mode & 1) !== 0; z !== null; ) {
      var i = z,
        o = i.child;
      if (i.tag === 22 && r) {
        var s = i.memoizedState !== null || No;
        if (!s) {
          var l = i.alternate,
            a = (l !== null && l.memoizedState !== null) || Ie;
          l = No;
          var u = Ie;
          if (((No = s), (Ie = a) && !u))
            for (z = i; z !== null; )
              (s = z),
                (a = s.child),
                s.tag === 22 && s.memoizedState !== null
                  ? Qf(i)
                  : a !== null
                  ? ((a.return = s), (z = a))
                  : Qf(i);
          for (; o !== null; ) (z = o), Gf(o), (o = o.sibling);
          (z = i), (No = l), (Ie = u);
        }
        Yf(e);
      } else
        i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (z = o)) : Yf(e);
    }
  }
  function Yf(e) {
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
                Ie || Ro(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !Ie)
                  if (n === null) r.componentDidMount();
                  else {
                    var i =
                      t.elementType === t.type
                        ? n.memoizedProps
                        : yt(t.type, n.memoizedProps);
                    r.componentDidUpdate(
                      i,
                      n.memoizedState,
                      r.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var o = t.updateQueue;
                o !== null && Ud(t, o, r);
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
                  Ud(t, s, n);
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
                      d !== null && Gr(d);
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
                throw Error(L(163));
            }
          Ie || (t.flags & 512 && Ma(t));
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
  function Kf(e) {
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
  function Qf(e) {
    for (; z !== null; ) {
      var t = z;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Ro(4, t);
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
              Ma(t);
            } catch (a) {
              ae(t, o, a);
            }
            break;
          case 5:
            var s = t.return;
            try {
              Ma(t);
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
  var Og = Math.ceil,
    zo = Rt.ReactCurrentDispatcher,
    za = Rt.ReactCurrentOwner,
    lt = Rt.ReactCurrentBatchConfig,
    W = 0,
    we = null,
    de = null,
    ke = 0,
    Ke = 0,
    fr = rn(0),
    me = 0,
    mi = null,
    _n = 0,
    Ao = 0,
    Aa = 0,
    gi = null,
    be = null,
    $a = 0,
    pr = 1 / 0,
    Bt = null,
    $o = !1,
    ja = null,
    cn = null,
    jo = !1,
    dn = null,
    Do = 0,
    vi = 0,
    Da = null,
    bo = -1,
    Fo = 0;
  function Ae() {
    return W & 6 ? ce() : bo !== -1 ? bo : (bo = ce());
  }
  function fn(e) {
    return e.mode & 1
      ? W & 2 && ke !== 0
        ? ke & -ke
        : cg.transition !== null
        ? (Fo === 0 && (Fo = Fc()), Fo)
        : ((e = X),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Qc(e.type))),
          e)
      : 1;
  }
  function xt(e, t, n, r) {
    if (50 < vi) throw ((vi = 0), (Da = null), Error(L(185)));
    Br(e, n, r),
      (!(W & 2) || e !== we) &&
        (e === we && (!(W & 2) && (Ao |= n), me === 4 && pn(e, ke)),
        Fe(e, r),
        n === 1 && W === 0 && !(t.mode & 1) && ((pr = ce() + 500), ho && sn()));
  }
  function Fe(e, t) {
    var n = e.callbackNode;
    c0(e, t);
    var r = Ki(e, e === we ? ke : 0);
    if (r === 0)
      n !== null && jc(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && jc(n), t === 1))
        e.tag === 0 ? ug(qf.bind(null, e)) : zd(qf.bind(null, e)),
          og(function () {
            !(W & 6) && sn();
          }),
          (n = null);
      else {
        switch (Bc(r)) {
          case 1:
            n = vl;
            break;
          case 4:
            n = Dc;
            break;
          case 16:
            n = Hi;
            break;
          case 536870912:
            n = bc;
            break;
          default:
            n = Hi;
        }
        n = op(n, Xf.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = n);
    }
  }
  function Xf(e, t) {
    if (((bo = -1), (Fo = 0), W & 6)) throw Error(L(327));
    var n = e.callbackNode;
    if (hr() && e.callbackNode !== n) return null;
    var r = Ki(e, e === we ? ke : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = Bo(e, r);
    else {
      t = r;
      var i = W;
      W |= 2;
      var o = Zf();
      (we !== e || ke !== t) && ((Bt = null), (pr = ce() + 500), In(e, t));
      do
        try {
          Ig();
          break;
        } catch (l) {
          Jf(e, l);
        }
      while (1);
      na(),
        (zo.current = o),
        (W = i),
        de !== null ? (t = 0) : ((we = null), (ke = 0), (t = me));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((i = yl(e)), i !== 0 && ((r = i), (t = ba(e, i)))),
        t === 1)
      )
        throw ((n = mi), In(e, 0), pn(e, r), Fe(e, ce()), n);
      if (t === 6) pn(e, r);
      else {
        if (
          ((i = e.current.alternate),
          !(r & 30) &&
            !_g(i) &&
            ((t = Bo(e, r)),
            t === 2 && ((o = yl(e)), o !== 0 && ((r = o), (t = ba(e, o)))),
            t === 1))
        )
          throw ((n = mi), In(e, 0), pn(e, r), Fe(e, ce()), n);
        switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(L(345));
          case 2:
            Mn(e, be, Bt);
            break;
          case 3:
            if (
              (pn(e, r),
              (r & 130023424) === r && ((t = $a + 500 - ce()), 10 < t))
            ) {
              if (Ki(e, 0) !== 0) break;
              if (((i = e.suspendedLanes), (i & r) !== r)) {
                Ae(), (e.pingedLanes |= e.suspendedLanes & i);
                break;
              }
              e.timeoutHandle = Wl(Mn.bind(null, e, be, Bt), t);
              break;
            }
            Mn(e, be, Bt);
            break;
          case 4:
            if ((pn(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, i = -1; 0 < r; ) {
              var s = 31 - mt(r);
              (o = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~o);
            }
            if (
              ((r = i),
              (r = ce() - r),
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
                  : 1960 * Og(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = Wl(Mn.bind(null, e, be, Bt), r);
              break;
            }
            Mn(e, be, Bt);
            break;
          case 5:
            Mn(e, be, Bt);
            break;
          default:
            throw Error(L(329));
        }
      }
    }
    return Fe(e, ce()), e.callbackNode === n ? Xf.bind(null, e) : null;
  }
  function ba(e, t) {
    var n = gi;
    return (
      e.current.memoizedState.isDehydrated && (In(e, t).flags |= 256),
      (e = Bo(e, t)),
      e !== 2 && ((t = be), (be = n), t !== null && Fa(t)),
      e
    );
  }
  function Fa(e) {
    be === null ? (be = e) : be.push.apply(be, e);
  }
  function _g(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var i = n[r],
              o = i.getSnapshot;
            i = i.value;
            try {
              if (!gt(o(), i)) return !1;
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
  function pn(e, t) {
    for (
      t &= ~Aa,
        t &= ~Ao,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var n = 31 - mt(t),
        r = 1 << n;
      (e[n] = -1), (t &= ~r);
    }
  }
  function qf(e) {
    if (W & 6) throw Error(L(327));
    hr();
    var t = Ki(e, 0);
    if (!(t & 1)) return Fe(e, ce()), null;
    var n = Bo(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = yl(e);
      r !== 0 && ((t = r), (n = ba(e, r)));
    }
    if (n === 1) throw ((n = mi), In(e, 0), pn(e, t), Fe(e, ce()), n);
    if (n === 6) throw Error(L(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      Mn(e, be, Bt),
      Fe(e, ce()),
      null
    );
  }
  function Ba(e, t) {
    var n = W;
    W |= 1;
    try {
      return e(t);
    } finally {
      (W = n), W === 0 && ((pr = ce() + 500), ho && sn());
    }
  }
  function Ln(e) {
    dn !== null && dn.tag === 0 && !(W & 6) && hr();
    var t = W;
    W |= 1;
    var n = lt.transition,
      r = X;
    try {
      if (((lt.transition = null), (X = 1), e)) return e();
    } finally {
      (X = r), (lt.transition = n), (W = t), !(W & 6) && sn();
    }
  }
  function Va() {
    (Ke = fr.current), ne(fr);
  }
  function In(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), ig(n)), de !== null))
      for (n = de.return; n !== null; ) {
        var r = n;
        switch ((ql(r), r.tag)) {
          case 1:
            (r = r.type.childContextTypes), r != null && fo();
            break;
          case 3:
            ur(), ne($e), ne(Oe), fa();
            break;
          case 5:
            ca(r);
            break;
          case 4:
            ur();
            break;
          case 13:
            ne(se);
            break;
          case 19:
            ne(se);
            break;
          case 10:
            ra(r.type._context);
            break;
          case 22:
          case 23:
            Va();
        }
        n = n.return;
      }
    if (
      ((we = e),
      (de = e = hn(e.current, null)),
      (ke = Ke = t),
      (me = 0),
      (mi = null),
      (Aa = Ao = _n = 0),
      (be = gi = null),
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
  function Jf(e, t) {
    do {
      var n = de;
      try {
        if ((na(), (ko.current = Lo), Po)) {
          for (var r = le.memoizedState; r !== null; ) {
            var i = r.queue;
            i !== null && (i.pending = null), (r = r.next);
          }
          Po = !1;
        }
        if (
          ((On = 0),
          (ye = he = le = null),
          (ui = !1),
          (ci = 0),
          (za.current = null),
          n === null || n.return === null)
        ) {
          (me = 1), (mi = t), (de = null);
          break;
        }
        e: {
          var o = e,
            s = n.return,
            l = n,
            a = t;
          if (
            ((t = ke),
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
            var h = Tf(s);
            if (h !== null) {
              (h.flags &= -257),
                Cf(h, s, l, o, t),
                h.mode & 1 && Ef(o, u, t),
                (t = h),
                (a = u);
              var v = t.updateQueue;
              if (v === null) {
                var y = new Set();
                y.add(a), (t.updateQueue = y);
              } else v.add(a);
              break e;
            } else {
              if (!(t & 1)) {
                Ef(o, u, t), Ua();
                break e;
              }
              a = Error(L(426));
            }
          } else if (ie && l.mode & 1) {
            var k = Tf(s);
            if (k !== null) {
              !(k.flags & 65536) && (k.flags |= 256),
                Cf(k, s, l, o, t),
                ea(cr(a, l));
              break e;
            }
          }
          (o = a = cr(a, l)),
            me !== 4 && (me = 2),
            gi === null ? (gi = [o]) : gi.push(o),
            (o = s);
          do {
            switch (o.tag) {
              case 3:
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var f = Sf(o, a, t);
                Vd(o, f);
                break e;
              case 1:
                l = a;
                var m = o.type,
                  g = o.stateNode;
                if (
                  !(o.flags & 128) &&
                  (typeof m.getDerivedStateFromError == "function" ||
                    (g !== null &&
                      typeof g.componentDidCatch == "function" &&
                      (cn === null || !cn.has(g))))
                ) {
                  (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                  var w = xf(o, l, t);
                  Vd(o, w);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        tp(n);
      } catch (S) {
        (t = S), de === n && n !== null && (de = n = n.return);
        continue;
      }
      break;
    } while (1);
  }
  function Zf() {
    var e = zo.current;
    return (zo.current = Lo), e === null ? Lo : e;
  }
  function Ua() {
    (me === 0 || me === 3 || me === 2) && (me = 4),
      we === null || (!(_n & 268435455) && !(Ao & 268435455)) || pn(we, ke);
  }
  function Bo(e, t) {
    var n = W;
    W |= 2;
    var r = Zf();
    (we !== e || ke !== t) && ((Bt = null), In(e, t));
    do
      try {
        Lg();
        break;
      } catch (i) {
        Jf(e, i);
      }
    while (1);
    if ((na(), (W = n), (zo.current = r), de !== null)) throw Error(L(261));
    return (we = null), (ke = 0), me;
  }
  function Lg() {
    for (; de !== null; ) ep(de);
  }
  function Ig() {
    for (; de !== null && !t0(); ) ep(de);
  }
  function ep(e) {
    var t = ip(e.alternate, e, Ke);
    (e.memoizedProps = e.pendingProps),
      t === null ? tp(e) : (de = t),
      (za.current = null);
  }
  function tp(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), t.flags & 32768)) {
        if (((n = Tg(n, t)), n !== null)) {
          (n.flags &= 32767), (de = n);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (me = 6), (de = null);
          return;
        }
      } else if (((n = Eg(n, t, Ke)), n !== null)) {
        de = n;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        de = t;
        return;
      }
      de = t = e;
    } while (t !== null);
    me === 0 && (me = 5);
  }
  function Mn(e, t, n) {
    var r = X,
      i = lt.transition;
    try {
      (lt.transition = null), (X = 1), Mg(e, t, n, r);
    } finally {
      (lt.transition = i), (X = r);
    }
    return null;
  }
  function Mg(e, t, n, r) {
    do hr();
    while (dn !== null);
    if (W & 6) throw Error(L(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
      throw Error(L(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var o = n.lanes | n.childLanes;
    if (
      (d0(e, o),
      e === we && ((de = we = null), (ke = 0)),
      (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
        jo ||
        ((jo = !0),
        op(Hi, function () {
          return hr(), null;
        })),
      (o = (n.flags & 15990) !== 0),
      n.subtreeFlags & 15990 || o)
    ) {
      (o = lt.transition), (lt.transition = null);
      var s = X;
      X = 1;
      var l = W;
      (W |= 4),
        (za.current = null),
        kg(e, n),
        Wf(n, e),
        q0(Ul),
        (qi = !!Vl),
        (Ul = Vl = null),
        (e.current = n),
        Pg(n),
        n0(),
        (W = l),
        (X = s),
        (lt.transition = o);
    } else e.current = n;
    if (
      (jo && ((jo = !1), (dn = e), (Do = i)),
      (o = e.pendingLanes),
      o === 0 && (cn = null),
      o0(n.stateNode),
      Fe(e, ce()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
    if ($o) throw (($o = !1), (e = ja), (ja = null), e);
    return (
      Do & 1 && e.tag !== 0 && hr(),
      (o = e.pendingLanes),
      o & 1 ? (e === Da ? vi++ : ((vi = 0), (Da = e))) : (vi = 0),
      sn(),
      null
    );
  }
  function hr() {
    if (dn !== null) {
      var e = Bc(Do),
        t = lt.transition,
        n = X;
      try {
        if (((lt.transition = null), (X = 16 > e ? 16 : e), dn === null))
          var r = !1;
        else {
          if (((e = dn), (dn = null), (Do = 0), W & 6)) throw Error(L(331));
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
                        hi(8, c, o);
                    }
                    var d = c.child;
                    if (d !== null) (d.return = c), (z = d);
                    else
                      for (; z !== null; ) {
                        c = z;
                        var p = c.sibling,
                          h = c.return;
                        if ((Ff(c), c === u)) {
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
                var v = o.alternate;
                if (v !== null) {
                  var y = v.child;
                  if (y !== null) {
                    v.child = null;
                    do {
                      var k = y.sibling;
                      (y.sibling = null), (y = k);
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
                      hi(9, o, o.return);
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
            var g = s.child;
            if (s.subtreeFlags & 2064 && g !== null) (g.return = s), (z = g);
            else
              e: for (s = m; z !== null; ) {
                if (((l = z), l.flags & 2048))
                  try {
                    switch (l.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ro(9, l);
                    }
                  } catch (S) {
                    ae(l, l.return, S);
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
            ((W = i), sn(), Tt && typeof Tt.onPostCommitFiberRoot == "function")
          )
            try {
              Tt.onPostCommitFiberRoot(Wi, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        (X = n), (lt.transition = t);
      }
    }
    return !1;
  }
  function np(e, t, n) {
    (t = cr(n, t)),
      (t = Sf(e, t, 1)),
      (e = an(e, t, 1)),
      (t = Ae()),
      e !== null && (Br(e, 1, t), Fe(e, t));
  }
  function ae(e, t, n) {
    if (e.tag === 3) np(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          np(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" &&
              (cn === null || !cn.has(r)))
          ) {
            (e = cr(n, e)),
              (e = xf(t, e, 1)),
              (t = an(t, e, 1)),
              (e = Ae()),
              t !== null && (Br(t, 1, e), Fe(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function Ng(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
      (t = Ae()),
      (e.pingedLanes |= e.suspendedLanes & n),
      we === e &&
        (ke & n) === n &&
        (me === 4 || (me === 3 && (ke & 130023424) === ke && 500 > ce() - $a)
          ? In(e, 0)
          : (Aa |= n)),
      Fe(e, t);
  }
  function rp(e, t) {
    t === 0 &&
      (e.mode & 1
        ? ((t = Yi), (Yi <<= 1), !(Yi & 130023424) && (Yi = 4194304))
        : (t = 1));
    var n = Ae();
    (e = Dt(e, t)), e !== null && (Br(e, t, n), Fe(e, n));
  }
  function Rg(e) {
    var t = e.memoizedState,
      n = 0;
    t !== null && (n = t.retryLane), rp(e, n);
  }
  function zg(e, t) {
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
        throw Error(L(314));
    }
    r !== null && r.delete(t), rp(e, n);
  }
  var ip;
  ip = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || $e.current) De = !0;
      else {
        if (!(e.lanes & n) && !(t.flags & 128)) return (De = !1), xg(e, t, n);
        De = !!(e.flags & 131072);
      }
    else (De = !1), ie && t.flags & 1048576 && Ad(t, go, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        Mo(e, t), (e = t.pendingProps);
        var i = nr(t, Oe.current);
        lr(t, n), (i = ma(null, t, r, e, i, n));
        var o = ga();
        return (
          (t.flags |= 1),
          typeof i == "object" &&
          i !== null &&
          typeof i.render == "function" &&
          i.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              je(r) ? ((o = !0), po(t)) : (o = !1),
              (t.memoizedState =
                i.state !== null && i.state !== void 0 ? i.state : null),
              sa(t),
              (i.updater = Eo),
              (t.stateNode = i),
              (i._reactInternals = t),
              aa(t, r, e, n),
              (t = Ca(null, t, r, !0, o, n)))
            : ((t.tag = 0), ie && o && Xl(t), ze(null, t, i, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (Mo(e, t),
            (e = t.pendingProps),
            (i = r._init),
            (r = i(r._payload)),
            (t.type = r),
            (i = t.tag = $g(r)),
            (e = yt(r, e)),
            i)
          ) {
            case 0:
              t = Ta(null, t, r, e, n);
              break e;
            case 1:
              t = If(null, t, r, e, n);
              break e;
            case 11:
              t = kf(null, t, r, e, n);
              break e;
            case 14:
              t = Pf(null, t, r, yt(r.type, e), n);
              break e;
          }
          throw Error(L(306, r, ""));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (i = t.pendingProps),
          (i = t.elementType === r ? i : yt(r, i)),
          Ta(e, t, r, i, n)
        );
      case 1:
        return (
          (r = t.type),
          (i = t.pendingProps),
          (i = t.elementType === r ? i : yt(r, i)),
          If(e, t, r, i, n)
        );
      case 3:
        e: {
          if ((Mf(t), e === null)) throw Error(L(387));
          (r = t.pendingProps),
            (o = t.memoizedState),
            (i = o.element),
            Bd(e, t),
            xo(t, r, null, n);
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
              (i = cr(Error(L(423)), t)), (t = Nf(e, t, r, n, i));
              break e;
            } else if (r !== i) {
              (i = cr(Error(L(424)), t)), (t = Nf(e, t, r, n, i));
              break e;
            } else
              for (
                Ye = nn(t.stateNode.containerInfo.firstChild),
                  Ge = t,
                  ie = !0,
                  vt = null,
                  n = Xd(t, null, r, n),
                  t.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
          else {
            if ((or(), r === i)) {
              t = Ft(e, t, n);
              break e;
            }
            ze(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          qd(t),
          e === null && Zl(t),
          (r = t.type),
          (i = t.pendingProps),
          (o = e !== null ? e.memoizedProps : null),
          (s = i.children),
          Hl(r, i) ? (s = null) : o !== null && Hl(r, o) && (t.flags |= 32),
          Lf(e, t),
          ze(e, t, s, n),
          t.child
        );
      case 6:
        return e === null && Zl(t), null;
      case 13:
        return Rf(e, t, n);
      case 4:
        return (
          ua(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = ar(t, null, r, n)) : ze(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (i = t.pendingProps),
          (i = t.elementType === r ? i : yt(r, i)),
          kf(e, t, r, i, n)
        );
      case 7:
        return ze(e, t, t.pendingProps, n), t.child;
      case 8:
        return ze(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return ze(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (i = t.pendingProps),
            (o = t.memoizedProps),
            (s = i.value),
            ee(yo, r._currentValue),
            (r._currentValue = s),
            o !== null)
          )
            if (gt(o.value, s)) {
              if (o.children === i.children && !$e.current) {
                t = Ft(e, t, n);
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
                        (a = bt(-1, n & -n)), (a.tag = 2);
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
                        ia(o.return, n, t),
                        (l.lanes |= n);
                      break;
                    }
                    a = a.next;
                  }
                } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
                else if (o.tag === 18) {
                  if (((s = o.return), s === null)) throw Error(L(341));
                  (s.lanes |= n),
                    (l = s.alternate),
                    l !== null && (l.lanes |= n),
                    ia(s, n, t),
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
          ze(e, t, i.children, n), (t = t.child);
        }
        return t;
      case 9:
        return (
          (i = t.type),
          (r = t.pendingProps.children),
          lr(t, n),
          (i = ot(i)),
          (r = r(i)),
          (t.flags |= 1),
          ze(e, t, r, n),
          t.child
        );
      case 14:
        return (
          (r = t.type),
          (i = yt(r, t.pendingProps)),
          (i = yt(r.type, i)),
          Pf(e, t, r, i, n)
        );
      case 15:
        return Of(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (i = t.pendingProps),
          (i = t.elementType === r ? i : yt(r, i)),
          Mo(e, t),
          (t.tag = 1),
          je(r) ? ((e = !0), po(t)) : (e = !1),
          lr(t, n),
          Gd(t, r, i),
          aa(t, r, i, n),
          Ca(null, t, r, !0, e, n)
        );
      case 19:
        return Af(e, t, n);
      case 22:
        return _f(e, t, n);
    }
    throw Error(L(156, t.tag));
  };
  function op(e, t) {
    return $c(e, t);
  }
  function Ag(e, t, n, r) {
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
  function at(e, t, n, r) {
    return new Ag(e, t, n, r);
  }
  function Ha(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function $g(e) {
    if (typeof e == "function") return Ha(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === Xs)) return 11;
      if (e === Zs) return 14;
    }
    return 2;
  }
  function hn(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = at(e.tag, t, e.key, e.mode)),
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
  function Vo(e, t, n, r, i, o) {
    var s = 2;
    if (((r = e), typeof e == "function")) Ha(e) && (s = 1);
    else if (typeof e == "string") s = 5;
    else
      e: switch (e) {
        case Un:
          return Nn(n.children, i, o, t);
        case Ks:
          (s = 8), (i |= 8);
          break;
        case Qs:
          return (
            (e = at(12, n, t, i | 2)), (e.elementType = Qs), (e.lanes = o), e
          );
        case qs:
          return (e = at(13, n, t, i)), (e.elementType = qs), (e.lanes = o), e;
        case Js:
          return (e = at(19, n, t, i)), (e.elementType = Js), (e.lanes = o), e;
        case fc:
          return Uo(n, i, o, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case cc:
                s = 10;
                break e;
              case dc:
                s = 9;
                break e;
              case Xs:
                s = 11;
                break e;
              case Zs:
                s = 14;
                break e;
              case Kt:
                (s = 16), (r = null);
                break e;
            }
          throw Error(L(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = at(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
    );
  }
  function Nn(e, t, n, r) {
    return (e = at(7, e, r, t)), (e.lanes = n), e;
  }
  function Uo(e, t, n, r) {
    return (
      (e = at(22, e, r, t)),
      (e.elementType = fc),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function Wa(e, t, n) {
    return (e = at(6, e, null, t)), (e.lanes = n), e;
  }
  function Ga(e, t, n) {
    return (
      (t = at(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function jg(e, t, n, r, i) {
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
      (this.eventTimes = wl(0)),
      (this.expirationTimes = wl(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = wl(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = i),
      (this.mutableSourceEagerHydrationData = null);
  }
  function Ya(e, t, n, r, i, o, s, l, a) {
    return (
      (e = new jg(e, t, n, l, a)),
      t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
      (o = at(3, null, null, t)),
      (e.current = o),
      (o.stateNode = e),
      (o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      sa(o),
      e
    );
  }
  function Dg(e, t, n) {
    var r =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: Vn,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function sp(e) {
    if (!e) return on;
    e = e._reactInternals;
    e: {
      if (Sn(e) !== e || e.tag !== 1) throw Error(L(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (je(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(L(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (je(n)) return Nd(e, n, t);
    }
    return t;
  }
  function lp(e, t, n, r, i, o, s, l, a) {
    return (
      (e = Ya(n, r, !0, e, i, o, s, l, a)),
      (e.context = sp(null)),
      (n = e.current),
      (r = Ae()),
      (i = fn(n)),
      (o = bt(r, i)),
      (o.callback = t ?? null),
      an(n, o, i),
      (e.current.lanes = i),
      Br(e, i, r),
      Fe(e, r),
      e
    );
  }
  function Ho(e, t, n, r) {
    var i = t.current,
      o = Ae(),
      s = fn(i);
    return (
      (n = sp(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = bt(o, s)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = an(i, t, s)),
      e !== null && (xt(e, i, s, o), So(e, i, s)),
      s
    );
  }
  function Wo(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function ap(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Ka(e, t) {
    ap(e, t), (e = e.alternate) && ap(e, t);
  }
  function bg() {
    return null;
  }
  var up =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Qa(e) {
    this._internalRoot = e;
  }
  (Go.prototype.render = Qa.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(L(409));
      Ho(e, t, null, null);
    }),
    (Go.prototype.unmount = Qa.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          Ln(function () {
            Ho(null, e, null, null);
          }),
            (t[zt] = null);
        }
      });
  function Go(e) {
    this._internalRoot = e;
  }
  Go.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Hc();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Zt.length && t !== 0 && t < Zt[n].priority; n++);
      Zt.splice(n, 0, e), n === 0 && Yc(e);
    }
  };
  function Xa(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function Yo(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function cp() {}
  function Fg(e, t, n, r, i) {
    if (i) {
      if (typeof r == "function") {
        var o = r;
        r = function () {
          var u = Wo(s);
          o.call(u);
        };
      }
      var s = lp(t, r, e, 0, null, !1, !1, "", cp);
      return (
        (e._reactRootContainer = s),
        (e[zt] = s.current),
        ti(e.nodeType === 8 ? e.parentNode : e),
        Ln(),
        s
      );
    }
    for (; (i = e.lastChild); ) e.removeChild(i);
    if (typeof r == "function") {
      var l = r;
      r = function () {
        var u = Wo(a);
        l.call(u);
      };
    }
    var a = Ya(e, 0, !1, null, null, !1, !1, "", cp);
    return (
      (e._reactRootContainer = a),
      (e[zt] = a.current),
      ti(e.nodeType === 8 ? e.parentNode : e),
      Ln(function () {
        Ho(t, a, n, r);
      }),
      a
    );
  }
  function Ko(e, t, n, r, i) {
    var o = n._reactRootContainer;
    if (o) {
      var s = o;
      if (typeof i == "function") {
        var l = i;
        i = function () {
          var a = Wo(s);
          l.call(a);
        };
      }
      Ho(t, s, e, i);
    } else s = Fg(n, t, e, i, r);
    return Wo(s);
  }
  (Vc = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Fr(t.pendingLanes);
          n !== 0 &&
            (Sl(t, n | 1), Fe(t, ce()), !(W & 6) && ((pr = ce() + 500), sn()));
        }
        break;
      case 13:
        Ln(function () {
          var r = Dt(e, 1);
          if (r !== null) {
            var i = Ae();
            xt(r, e, 1, i);
          }
        }),
          Ka(e, 1);
    }
  }),
    (xl = function (e) {
      if (e.tag === 13) {
        var t = Dt(e, 134217728);
        if (t !== null) {
          var n = Ae();
          xt(t, e, 134217728, n);
        }
        Ka(e, 134217728);
      }
    }),
    (Uc = function (e) {
      if (e.tag === 13) {
        var t = fn(e),
          n = Dt(e, t);
        if (n !== null) {
          var r = Ae();
          xt(n, e, t, r);
        }
        Ka(e, t);
      }
    }),
    (Hc = function () {
      return X;
    }),
    (Wc = function (e, t) {
      var n = X;
      try {
        return (X = e), t();
      } finally {
        X = n;
      }
    }),
    (pl = function (e, t, n) {
      switch (t) {
        case "input":
          if ((ol(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
                var i = co(r);
                if (!i) throw Error(L(90));
                mc(r), ol(r, i);
              }
            }
          }
          break;
        case "textarea":
          Sc(e, n);
          break;
        case "select":
          (t = n.value), t != null && Hn(e, !!n.multiple, t, !1);
      }
    }),
    (Lc = Ba),
    (Ic = Ln);
  var Bg = { usingClientEntryPoint: !1, Events: [ii, er, co, Oc, _c, Ba] },
    yi = {
      findFiberByHostInstance: xn,
      bundleType: 0,
      version: "18.2.0",
      rendererPackageName: "react-dom",
    },
    Vg = {
      bundleType: yi.bundleType,
      version: yi.version,
      rendererPackageName: yi.rendererPackageName,
      rendererConfig: yi.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: Rt.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = zc(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: yi.findFiberByHostInstance || bg,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Qo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Qo.isDisabled && Qo.supportsFiber)
      try {
        (Wi = Qo.inject(Vg)), (Tt = Qo);
      } catch {}
  }
  (Ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Bg),
    (Ue.createPortal = function (e, t) {
      var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Xa(t)) throw Error(L(200));
      return Dg(e, t, null, n);
    }),
    (Ue.createRoot = function (e, t) {
      if (!Xa(e)) throw Error(L(299));
      var n = !1,
        r = "",
        i = up;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
        (t = Ya(e, 1, !1, null, null, n, !1, r, i)),
        (e[zt] = t.current),
        ti(e.nodeType === 8 ? e.parentNode : e),
        new Qa(t)
      );
    }),
    (Ue.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(L(188))
          : ((e = Object.keys(e).join(",")), Error(L(268, e)));
      return (e = zc(t)), (e = e === null ? null : e.stateNode), e;
    }),
    (Ue.flushSync = function (e) {
      return Ln(e);
    }),
    (Ue.hydrate = function (e, t, n) {
      if (!Yo(t)) throw Error(L(200));
      return Ko(null, e, t, !0, n);
    }),
    (Ue.hydrateRoot = function (e, t, n) {
      if (!Xa(e)) throw Error(L(405));
      var r = (n != null && n.hydratedSources) || null,
        i = !1,
        o = "",
        s = up;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (i = !0),
          n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
        (t = lp(t, null, e, 1, n ?? null, i, !1, o, s)),
        (e[zt] = t.current),
        ti(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          (n = r[e]),
            (i = n._getVersion),
            (i = i(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, i])
              : t.mutableSourceEagerHydrationData.push(n, i);
      return new Go(t);
    }),
    (Ue.render = function (e, t, n) {
      if (!Yo(t)) throw Error(L(200));
      return Ko(null, e, t, !1, n);
    }),
    (Ue.unmountComponentAtNode = function (e) {
      if (!Yo(e)) throw Error(L(40));
      return e._reactRootContainer
        ? (Ln(function () {
            Ko(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[zt] = null);
            });
          }),
          !0)
        : !1;
    }),
    (Ue.unstable_batchedUpdates = Ba),
    (Ue.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!Yo(n)) throw Error(L(200));
      if (e == null || e._reactInternals === void 0) throw Error(L(38));
      return Ko(e, t, n, !1, r);
    }),
    (Ue.version = "18.2.0-next-9e3b772b8-20220608");
  function dp() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(dp);
      } catch (e) {
        console.error(e);
      }
  }
  dp(), (rc.exports = Ue);
  var Ug = rc.exports,
    fp = Ug;
  (Us.createRoot = fp.createRoot), (Us.hydrateRoot = fp.hydrateRoot);
  var Hg = {
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
  function Wg(e) {
    if (typeof e == "number") return { value: e, unit: "px" };
    var t,
      n = (e.match(/^[0-9.]*/) || "").toString();
    n.includes(".") ? (t = parseFloat(n)) : (t = parseInt(n, 10));
    var r = (e.match(/[^0-9]*$/) || "").toString();
    return Hg[r]
      ? { value: t, unit: r }
      : (console.warn(
          "React Spinners: "
            .concat(e, " is not a valid css value. Defaulting to ")
            .concat(t, "px.")
        ),
        { value: t, unit: "px" });
  }
  function Xo(e) {
    var t = Wg(e);
    return "".concat(t.value).concat(t.unit);
  }
  var pp = function (e, t, n) {
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
    qo =
      (globalThis && globalThis.__assign) ||
      function () {
        return (
          (qo =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++) {
                t = arguments[n];
                for (var i in t)
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              }
              return e;
            }),
          qo.apply(this, arguments)
        );
      },
    Gg =
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
    hp = [
      pp(
        "PuffLoader",
        "0% {transform: scale(0)} 100% {transform: scale(1.0)}",
        "puff-1"
      ),
      pp("PuffLoader", "0% {opacity: 1} 100% {opacity: 0}", "puff-2"),
    ];
  function Yg(e) {
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
      d = Gg(e, ["loading", "color", "speedMultiplier", "cssOverride", "size"]),
      p = qo(
        {
          display: "inherit",
          position: "relative",
          width: Xo(c),
          height: Xo(c),
        },
        a
      ),
      h = function (v) {
        return {
          position: "absolute",
          height: Xo(c),
          width: Xo(c),
          border: "thick solid ".concat(i),
          borderRadius: "50%",
          opacity: "1",
          top: "0",
          left: "0",
          animationFillMode: "both",
          animation: "".concat(hp[0], ", ").concat(hp[1]),
          animationDuration: "".concat(2 / s, "s"),
          animationIterationCount: "infinite",
          animationTimingFunction:
            "cubic-bezier(0.165, 0.84, 0.44, 1), cubic-bezier(0.3, 0.61, 0.355, 1)",
          animationDelay: v === 1 ? "-1s" : "0s",
        };
      };
    return n
      ? R.createElement(
          "span",
          qo({ style: p }, d),
          R.createElement("span", { style: h(1) }),
          R.createElement("span", { style: h(2) })
        )
      : null;
  }
  const Kg = "Left",
    Qg = "Right",
    Xg = "Up",
    qg = "Down",
    mr = {
      delta: 10,
      preventScrollOnSwipe: !1,
      rotationAngle: 0,
      trackMouse: !1,
      trackTouch: !0,
      swipeDuration: 1 / 0,
      touchEventOptions: { passive: !0 },
    },
    qa = { first: !0, initial: [0, 0], start: 0, swiping: !1, xy: [0, 0] },
    mp = "mousemove",
    gp = "mouseup",
    Jg = "touchend",
    Zg = "touchmove",
    ev = "touchstart";
  function tv(e, t, n, r) {
    return e > t ? (n > 0 ? Qg : Kg) : r > 0 ? qg : Xg;
  }
  function vp(e, t) {
    if (t === 0) return e;
    const n = (Math.PI / 180) * t,
      r = e[0] * Math.cos(n) + e[1] * Math.sin(n),
      i = e[1] * Math.cos(n) - e[0] * Math.sin(n);
    return [r, i];
  }
  function nv(e, t) {
    const n = (c) => {
        const d = "touches" in c;
        (d && c.touches.length > 1) ||
          e((p, h) => {
            h.trackMouse &&
              !d &&
              (document.addEventListener(mp, r),
              document.addEventListener(gp, s));
            const { clientX: v, clientY: y } = d ? c.touches[0] : c,
              k = vp([v, y], h.rotationAngle);
            return (
              h.onTouchStartOrOnMouseDown &&
                h.onTouchStartOrOnMouseDown({ event: c }),
              Object.assign(Object.assign(Object.assign({}, p), qa), {
                initial: k.slice(),
                xy: k,
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
          const { clientX: v, clientY: y } = h ? c.touches[0] : c,
            [k, f] = vp([v, y], p.rotationAngle),
            m = k - d.xy[0],
            g = f - d.xy[1],
            w = Math.abs(m),
            S = Math.abs(g),
            T = (c.timeStamp || 0) - d.start,
            x = Math.sqrt(w * w + S * S) / (T || 1),
            _ = [m / (T || 1), g / (T || 1)],
            O = tv(w, S, m, g),
            b =
              typeof p.delta == "number"
                ? p.delta
                : p.delta[O.toLowerCase()] || mr.delta;
          if (w < b && S < b && !d.swiping) return d;
          const M = {
            absX: w,
            absY: S,
            deltaX: m,
            deltaY: g,
            dir: O,
            event: c,
            first: d.first,
            initial: d.initial,
            velocity: x,
            vxvy: _,
          };
          M.first && p.onSwipeStart && p.onSwipeStart(M),
            p.onSwiping && p.onSwiping(M);
          let j = !1;
          return (
            (p.onSwiping || p.onSwiped || p[`onSwiped${O}`]) && (j = !0),
            j &&
              p.preventScrollOnSwipe &&
              p.trackTouch &&
              c.cancelable &&
              c.preventDefault(),
            Object.assign(Object.assign({}, d), {
              first: !1,
              eventData: M,
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
              const v = p[`onSwiped${h.dir}`];
              v && v(h);
            }
          } else p.onTap && p.onTap({ event: c });
          return (
            p.onTouchEndOrOnMouseUp && p.onTouchEndOrOnMouseUp({ event: c }),
            Object.assign(Object.assign(Object.assign({}, d), qa), {
              eventData: h,
            })
          );
        });
      },
      o = () => {
        document.removeEventListener(mp, r),
          document.removeEventListener(gp, s);
      },
      s = (c) => {
        o(), i(c);
      },
      l = (c, d) => {
        let p = () => {};
        if (c && c.addEventListener) {
          const h = Object.assign(
              Object.assign({}, mr.touchEventOptions),
              d.touchEventOptions
            ),
            v = [
              [ev, n, h],
              [
                Zg,
                r,
                Object.assign(
                  Object.assign({}, h),
                  d.preventScrollOnSwipe ? { passive: !1 } : {}
                ),
              ],
              [Jg, i, h],
            ];
          v.forEach(([y, k, f]) => c.addEventListener(y, k, f)),
            (p = () => v.forEach(([y, k]) => c.removeEventListener(y, k)));
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
  function rv(e, t, n, r) {
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
  function iv(e) {
    const { trackMouse: t } = e,
      n = R.useRef(Object.assign({}, qa)),
      r = R.useRef(Object.assign({}, mr)),
      i = R.useRef(Object.assign({}, r.current));
    (i.current = Object.assign({}, r.current)),
      (r.current = Object.assign(Object.assign({}, mr), e));
    let o;
    for (o in mr) r.current[o] === void 0 && (r.current[o] = mr[o]);
    const [s, l] = R.useMemo(
      () => nv((a) => (n.current = a(n.current, r.current)), { trackMouse: t }),
      [t]
    );
    return (n.current = rv(n.current, r.current, i.current, l)), s;
  }
  var Be = function () {
    return (
      (Be =
        Object.assign ||
        function (t) {
          for (var n, r = 1, i = arguments.length; r < i; r++) {
            n = arguments[r];
            for (var o in n)
              Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
          }
          return t;
        }),
      Be.apply(this, arguments)
    );
  };
  function Jo(e, t, n) {
    if (n || arguments.length === 2)
      for (var r = 0, i = t.length, o; r < i; r++)
        (o || !(r in t)) &&
          (o || (o = Array.prototype.slice.call(t, 0, r)), (o[r] = t[r]));
    return e.concat(o || Array.prototype.slice.call(t));
  }
  var re = "-ms-",
    wi = "-moz-",
    K = "-webkit-",
    yp = "comm",
    Zo = "rule",
    Ja = "decl",
    ov = "@import",
    wp = "@keyframes",
    sv = "@layer",
    lv = Math.abs,
    Za = String.fromCharCode,
    av = Object.assign;
  function uv(e, t) {
    return Se(e, 0) ^ 45
      ? (((((((t << 2) ^ Se(e, 0)) << 2) ^ Se(e, 1)) << 2) ^ Se(e, 2)) << 2) ^
          Se(e, 3)
      : 0;
  }
  function Sp(e) {
    return e.trim();
  }
  function mn(e, t) {
    return (e = t.exec(e)) ? e[0] : e;
  }
  function U(e, t, n) {
    return e.replace(t, n);
  }
  function es(e, t) {
    return e.indexOf(t);
  }
  function Se(e, t) {
    return e.charCodeAt(t) | 0;
  }
  function gr(e, t, n) {
    return e.slice(t, n);
  }
  function Vt(e) {
    return e.length;
  }
  function eu(e) {
    return e.length;
  }
  function ts(e, t) {
    return t.push(e), e;
  }
  function cv(e, t) {
    return e.map(t).join("");
  }
  var ns = 1,
    vr = 1,
    xp = 0,
    ut = 0,
    fe = 0,
    yr = "";
  function rs(e, t, n, r, i, o, s) {
    return {
      value: e,
      root: t,
      parent: n,
      type: r,
      props: i,
      children: o,
      line: ns,
      column: vr,
      length: s,
      return: "",
    };
  }
  function Si(e, t) {
    return av(
      rs("", null, null, "", null, null, 0),
      e,
      { length: -e.length },
      t
    );
  }
  function dv() {
    return fe;
  }
  function fv() {
    return (
      (fe = ut > 0 ? Se(yr, --ut) : 0), vr--, fe === 10 && ((vr = 1), ns--), fe
    );
  }
  function Et() {
    return (
      (fe = ut < xp ? Se(yr, ut++) : 0), vr++, fe === 10 && ((vr = 1), ns++), fe
    );
  }
  function Rn() {
    return Se(yr, ut);
  }
  function is() {
    return ut;
  }
  function os(e, t) {
    return gr(yr, e, t);
  }
  function tu(e) {
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
  function pv(e) {
    return (ns = vr = 1), (xp = Vt((yr = e))), (ut = 0), [];
  }
  function hv(e) {
    return (yr = ""), e;
  }
  function nu(e) {
    return Sp(os(ut - 1, ru(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
  }
  function mv(e) {
    for (; (fe = Rn()) && fe < 33; ) Et();
    return tu(e) > 2 || tu(fe) > 3 ? "" : " ";
  }
  function gv(e, t) {
    for (
      ;
      --t &&
      Et() &&
      !(fe < 48 || fe > 102 || (fe > 57 && fe < 65) || (fe > 70 && fe < 97));

    );
    return os(e, is() + (t < 6 && Rn() == 32 && Et() == 32));
  }
  function ru(e) {
    for (; Et(); )
      switch (fe) {
        case e:
          return ut;
        case 34:
        case 39:
          e !== 34 && e !== 39 && ru(fe);
          break;
        case 40:
          e === 41 && ru(e);
          break;
        case 92:
          Et();
          break;
      }
    return ut;
  }
  function vv(e, t) {
    for (; Et() && e + fe !== 47 + 10; )
      if (e + fe === 42 + 42 && Rn() === 47) break;
    return "/*" + os(t, ut - 1) + "*" + Za(e === 47 ? e : Et());
  }
  function yv(e) {
    for (; !tu(Rn()); ) Et();
    return os(e, ut);
  }
  function wv(e) {
    return hv(ss("", null, null, null, [""], (e = pv(e)), 0, [0], e));
  }
  function ss(e, t, n, r, i, o, s, l, a) {
    for (
      var u = 0,
        c = 0,
        d = s,
        p = 0,
        h = 0,
        v = 0,
        y = 1,
        k = 1,
        f = 1,
        m = 0,
        g = "",
        w = i,
        S = o,
        T = r,
        x = g;
      k;

    )
      switch (((v = m), (m = Et()))) {
        case 40:
          if (v != 108 && Se(x, d - 1) == 58) {
            es((x += U(nu(m), "&", "&\f")), "&\f") != -1 && (f = -1);
            break;
          }
        case 34:
        case 39:
        case 91:
          x += nu(m);
          break;
        case 9:
        case 10:
        case 13:
        case 32:
          x += mv(v);
          break;
        case 92:
          x += gv(is() - 1, 7);
          continue;
        case 47:
          switch (Rn()) {
            case 42:
            case 47:
              ts(Sv(vv(Et(), is()), t, n), a);
              break;
            default:
              x += "/";
          }
          break;
        case 123 * y:
          l[u++] = Vt(x) * f;
        case 125 * y:
        case 59:
        case 0:
          switch (m) {
            case 0:
            case 125:
              k = 0;
            case 59 + c:
              f == -1 && (x = U(x, /\f/g, "")),
                h > 0 &&
                  Vt(x) - d &&
                  ts(
                    h > 32
                      ? Tp(x + ";", r, n, d - 1)
                      : Tp(U(x, " ", "") + ";", r, n, d - 2),
                    a
                  );
              break;
            case 59:
              x += ";";
            default:
              if (
                (ts((T = Ep(x, t, n, u, c, i, l, g, (w = []), (S = []), d)), o),
                m === 123)
              )
                if (c === 0) ss(x, t, T, T, w, o, d, l, S);
                else
                  switch (p === 99 && Se(x, 3) === 110 ? 100 : p) {
                    case 100:
                    case 108:
                    case 109:
                    case 115:
                      ss(
                        e,
                        T,
                        T,
                        r && ts(Ep(e, T, T, 0, 0, i, l, g, i, (w = []), d), S),
                        i,
                        S,
                        d,
                        l,
                        r ? w : S
                      );
                      break;
                    default:
                      ss(x, T, T, T, [""], S, 0, l, S);
                  }
          }
          (u = c = h = 0), (y = f = 1), (g = x = ""), (d = s);
          break;
        case 58:
          (d = 1 + Vt(x)), (h = v);
        default:
          if (y < 1) {
            if (m == 123) --y;
            else if (m == 125 && y++ == 0 && fv() == 125) continue;
          }
          switch (((x += Za(m)), m * y)) {
            case 38:
              f = c > 0 ? 1 : ((x += "\f"), -1);
              break;
            case 44:
              (l[u++] = (Vt(x) - 1) * f), (f = 1);
              break;
            case 64:
              Rn() === 45 && (x += nu(Et())),
                (p = Rn()),
                (c = d = Vt((g = x += yv(is())))),
                m++;
              break;
            case 45:
              v === 45 && Vt(x) == 2 && (y = 0);
          }
      }
    return o;
  }
  function Ep(e, t, n, r, i, o, s, l, a, u, c) {
    for (
      var d = i - 1, p = i === 0 ? o : [""], h = eu(p), v = 0, y = 0, k = 0;
      v < r;
      ++v
    )
      for (var f = 0, m = gr(e, d + 1, (d = lv((y = s[v])))), g = e; f < h; ++f)
        (g = Sp(y > 0 ? p[f] + " " + m : U(m, /&\f/g, p[f]))) && (a[k++] = g);
    return rs(e, t, n, i === 0 ? Zo : l, a, u, c);
  }
  function Sv(e, t, n) {
    return rs(e, t, n, yp, Za(dv()), gr(e, 2, -2), 0);
  }
  function Tp(e, t, n, r) {
    return rs(e, t, n, Ja, gr(e, 0, r), gr(e, r + 1, -1), r);
  }
  function Cp(e, t, n) {
    switch (uv(e, t)) {
      case 5103:
        return K + "print-" + e + e;
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
        return K + e + e;
      case 4789:
        return wi + e + e;
      case 5349:
      case 4246:
      case 4810:
      case 6968:
      case 2756:
        return K + e + wi + e + re + e + e;
      case 5936:
        switch (Se(e, t + 11)) {
          case 114:
            return K + e + re + U(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
          case 108:
            return K + e + re + U(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
          case 45:
            return K + e + re + U(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
        }
      case 6828:
      case 4268:
      case 2903:
        return K + e + re + e + e;
      case 6165:
        return K + e + re + "flex-" + e + e;
      case 5187:
        return (
          K + e + U(e, /(\w+).+(:[^]+)/, K + "box-$1$2" + re + "flex-$1$2") + e
        );
      case 5443:
        return (
          K +
          e +
          re +
          "flex-item-" +
          U(e, /flex-|-self/g, "") +
          (mn(e, /flex-|baseline/)
            ? ""
            : re + "grid-row-" + U(e, /flex-|-self/g, "")) +
          e
        );
      case 4675:
        return (
          K +
          e +
          re +
          "flex-line-pack" +
          U(e, /align-content|flex-|-self/g, "") +
          e
        );
      case 5548:
        return K + e + re + U(e, "shrink", "negative") + e;
      case 5292:
        return K + e + re + U(e, "basis", "preferred-size") + e;
      case 6060:
        return (
          K +
          "box-" +
          U(e, "-grow", "") +
          K +
          e +
          re +
          U(e, "grow", "positive") +
          e
        );
      case 4554:
        return K + U(e, /([^-])(transform)/g, "$1" + K + "$2") + e;
      case 6187:
        return (
          U(U(U(e, /(zoom-|grab)/, K + "$1"), /(image-set)/, K + "$1"), e, "") +
          e
        );
      case 5495:
      case 3959:
        return U(e, /(image-set\([^]*)/, K + "$1$`$1");
      case 4968:
        return (
          U(
            U(e, /(.+:)(flex-)?(.*)/, K + "box-pack:$3" + re + "flex-pack:$3"),
            /s.+-b[^;]+/,
            "justify"
          ) +
          K +
          e +
          e
        );
      case 4200:
        if (!mn(e, /flex-|baseline/))
          return re + "grid-column-align" + gr(e, t) + e;
        break;
      case 2592:
      case 3360:
        return re + U(e, "template-", "") + e;
      case 4384:
      case 3616:
        return n &&
          n.some(function (r, i) {
            return (t = i), mn(r.props, /grid-\w+-end/);
          })
          ? ~es(e + (n = n[t].value), "span")
            ? e
            : re +
              U(e, "-start", "") +
              e +
              re +
              "grid-row-span:" +
              (~es(n, "span") ? mn(n, /\d+/) : +mn(n, /\d+/) - +mn(e, /\d+/)) +
              ";"
          : re + U(e, "-start", "") + e;
      case 4896:
      case 4128:
        return n &&
          n.some(function (r) {
            return mn(r.props, /grid-\w+-start/);
          })
          ? e
          : re + U(U(e, "-end", "-span"), "span ", "") + e;
      case 4095:
      case 3583:
      case 4068:
      case 2532:
        return U(e, /(.+)-inline(.+)/, K + "$1$2") + e;
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
        if (Vt(e) - 1 - t > 6)
          switch (Se(e, t + 1)) {
            case 109:
              if (Se(e, t + 4) !== 45) break;
            case 102:
              return (
                U(
                  e,
                  /(.+:)(.+)-([^]+)/,
                  "$1" +
                    K +
                    "$2-$3$1" +
                    wi +
                    (Se(e, t + 3) == 108 ? "$3" : "$2-$3")
                ) + e
              );
            case 115:
              return ~es(e, "stretch")
                ? Cp(U(e, "stretch", "fill-available"), t, n) + e
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
              re +
              i +
              ":" +
              o +
              u +
              (s ? re + i + "-span:" + (l ? a : +a - +o) + u : "") +
              e
            );
          }
        );
      case 4949:
        if (Se(e, t + 6) === 121) return U(e, ":", ":" + K) + e;
        break;
      case 6444:
        switch (Se(e, Se(e, 14) === 45 ? 18 : 11)) {
          case 120:
            return (
              U(
                e,
                /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,
                "$1" +
                  K +
                  (Se(e, 14) === 45 ? "inline-" : "") +
                  "box$3$1" +
                  K +
                  "$2$3$1" +
                  re +
                  "$2box$3"
              ) + e
            );
          case 100:
            return U(e, ":", ":" + re) + e;
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
  function wr(e, t) {
    for (var n = "", r = eu(e), i = 0; i < r; i++) n += t(e[i], i, e, t) || "";
    return n;
  }
  function xv(e, t, n, r) {
    switch (e.type) {
      case sv:
        if (e.children.length) break;
      case ov:
      case Ja:
        return (e.return = e.return || e.value);
      case yp:
        return "";
      case wp:
        return (e.return = e.value + "{" + wr(e.children, r) + "}");
      case Zo:
        e.value = e.props.join(",");
    }
    return Vt((n = wr(e.children, r)))
      ? (e.return = e.value + "{" + n + "}")
      : "";
  }
  function Ev(e) {
    var t = eu(e);
    return function (n, r, i, o) {
      for (var s = "", l = 0; l < t; l++) s += e[l](n, r, i, o) || "";
      return s;
    };
  }
  function Tv(e) {
    return function (t) {
      t.root || ((t = t.return) && e(t));
    };
  }
  function Cv(e, t, n, r) {
    if (e.length > -1 && !e.return)
      switch (e.type) {
        case Ja:
          e.return = Cp(e.value, e.length, n);
          return;
        case wp:
          return wr([Si(e, { value: U(e.value, "@", "@" + K) })], r);
        case Zo:
          if (e.length)
            return cv(e.props, function (i) {
              switch (mn(i, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return wr(
                    [Si(e, { props: [U(i, /:(read-\w+)/, ":" + wi + "$1")] })],
                    r
                  );
                case "::placeholder":
                  return wr(
                    [
                      Si(e, {
                        props: [U(i, /:(plac\w+)/, ":" + K + "input-$1")],
                      }),
                      Si(e, { props: [U(i, /:(plac\w+)/, ":" + wi + "$1")] }),
                      Si(e, { props: [U(i, /:(plac\w+)/, re + "input-$1")] }),
                    ],
                    r
                  );
              }
              return "";
            });
      }
  }
  var kp = {
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
    Sr =
      (typeof process < "u" &&
        process.env !== void 0 &&
        (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR)) ||
      "data-styled",
    iu = typeof window < "u" && "HTMLElement" in window,
    kv = !!(typeof SC_DISABLE_SPEEDY == "boolean"
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
    Pp = Object.freeze([]),
    zn = Object.freeze({});
  function Pv(e, t, n) {
    return (
      n === void 0 && (n = zn), (e.theme !== n.theme && e.theme) || t || n.theme
    );
  }
  var Op = new Set([
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
    Ov = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
    _v = /(^-|-$)/g;
  function _p(e) {
    return e.replace(Ov, "-").replace(_v, "");
  }
  var Lv = /(a)(d)/gi,
    Lp = function (e) {
      return String.fromCharCode(e + (e > 25 ? 39 : 97));
    };
  function ou(e) {
    var t,
      n = "";
    for (t = Math.abs(e); t > 52; t = (t / 52) | 0) n = Lp(t % 52) + n;
    return (Lp(t % 52) + n).replace(Lv, "$1-$2");
  }
  var su,
    xr = function (e, t) {
      for (var n = t.length; n; ) e = (33 * e) ^ t.charCodeAt(--n);
      return e;
    },
    Ip = function (e) {
      return xr(5381, e);
    };
  function Iv(e) {
    return ou(Ip(e) >>> 0);
  }
  function Mv(e) {
    return e.displayName || e.name || "Component";
  }
  function lu(e) {
    return typeof e == "string" && !0;
  }
  var Mp = typeof Symbol == "function" && Symbol.for,
    Np = Mp ? Symbol.for("react.memo") : 60115,
    Nv = Mp ? Symbol.for("react.forward_ref") : 60112,
    Rv = {
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
    zv = {
      name: !0,
      length: !0,
      prototype: !0,
      caller: !0,
      callee: !0,
      arguments: !0,
      arity: !0,
    },
    Rp = {
      $$typeof: !0,
      compare: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
      type: !0,
    },
    Av =
      (((su = {})[Nv] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
      }),
      (su[Np] = Rp),
      su);
  function zp(e) {
    return ("type" in (t = e) && t.type.$$typeof) === Np
      ? Rp
      : "$$typeof" in e
      ? Av[e.$$typeof]
      : Rv;
    var t;
  }
  var $v = Object.defineProperty,
    jv = Object.getOwnPropertyNames,
    Ap = Object.getOwnPropertySymbols,
    Dv = Object.getOwnPropertyDescriptor,
    bv = Object.getPrototypeOf,
    $p = Object.prototype;
  function jp(e, t, n) {
    if (typeof t != "string") {
      if ($p) {
        var r = bv(t);
        r && r !== $p && jp(e, r, n);
      }
      var i = jv(t);
      Ap && (i = i.concat(Ap(t)));
      for (var o = zp(e), s = zp(t), l = 0; l < i.length; ++l) {
        var a = i[l];
        if (!(a in zv || (n && n[a]) || (s && a in s) || (o && a in o))) {
          var u = Dv(t, a);
          try {
            $v(e, a, u);
          } catch {}
        }
      }
    }
    return e;
  }
  function Er(e) {
    return typeof e == "function";
  }
  function au(e) {
    return typeof e == "object" && "styledComponentId" in e;
  }
  function An(e, t) {
    return e && t ? "".concat(e, " ").concat(t) : e || t || "";
  }
  function Dp(e, t) {
    if (e.length === 0) return "";
    for (var n = e[0], r = 1; r < e.length; r++) n += t ? t + e[r] : e[r];
    return n;
  }
  function xi(e) {
    return (
      e !== null &&
      typeof e == "object" &&
      e.constructor.name === Object.name &&
      !("props" in e && e.$$typeof)
    );
  }
  function uu(e, t, n) {
    if ((n === void 0 && (n = !1), !n && !xi(e) && !Array.isArray(e))) return t;
    if (Array.isArray(t))
      for (var r = 0; r < t.length; r++) e[r] = uu(e[r], t[r]);
    else if (xi(t)) for (var r in t) e[r] = uu(e[r], t[r]);
    return e;
  }
  function Ei(e) {
    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
    return new Error(
      "An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#"
        .concat(e, " for more information.")
        .concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")
    );
  }
  var Fv = (function () {
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
              if ((o <<= 1) < 0) throw Ei(16, "".concat(t));
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
    ls = new Map(),
    as = new Map(),
    cu = 1,
    us = function (e) {
      if (ls.has(e)) return ls.get(e);
      for (; as.has(cu); ) cu++;
      var t = cu++;
      return ls.set(e, t), as.set(t, e), t;
    },
    Bv = function (e, t) {
      ls.set(e, t), as.set(t, e);
    },
    Vv = "style["
      .concat(Sr, "][")
      .concat("data-styled-version", '="')
      .concat("6.0.0-rc.3", '"]'),
    Uv = new RegExp(
      "^".concat(Sr, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')
    ),
    Hv = function (e, t, n) {
      for (var r, i = n.split(","), o = 0, s = i.length; o < s; o++)
        (r = i[o]) && e.registerName(t, r);
    },
    Wv = function (e, t) {
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
          var a = l.match(Uv);
          if (a) {
            var u = 0 | parseInt(a[1], 10),
              c = a[2];
            u !== 0 && (Bv(c, u), Hv(e, c, a[3]), e.getTag().insertRules(u, i)),
              (i.length = 0);
          } else i.push(l);
        }
      }
    };
  function Gv() {
    return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
  }
  var bp = function (e) {
      var t = document.head,
        n = e || t,
        r = document.createElement("style"),
        i = (function (l) {
          for (var a = l.childNodes, u = a.length; u >= 0; u--) {
            var c = a[u];
            if (c && c.nodeType === 1 && c.hasAttribute(Sr)) return c;
          }
        })(n),
        o = i !== void 0 ? i.nextSibling : null;
      r.setAttribute(Sr, "active"),
        r.setAttribute("data-styled-version", "6.0.0-rc.3");
      var s = Gv();
      return s && r.setAttribute("nonce", s), n.insertBefore(r, o), r;
    },
    Yv = (function () {
      function e(t) {
        (this.element = bp(t)),
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
            throw Ei(17);
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
    Kv = (function () {
      function e(t) {
        (this.element = bp(t)),
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
    Qv = (function () {
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
    Fp = iu,
    Xv = { isServer: !iu, useCSSOMInjection: !kv },
    Bp = (function () {
      function e(t, n, r) {
        t === void 0 && (t = zn),
          n === void 0 && (n = {}),
          (this.options = Be(Be({}, Xv), t)),
          (this.gs = n),
          (this.names = new Map(r)),
          (this.server = !!t.isServer),
          !this.server &&
            iu &&
            Fp &&
            ((Fp = !1),
            (function (i) {
              for (
                var o = document.querySelectorAll(Vv), s = 0, l = o.length;
                s < l;
                s++
              ) {
                var a = o[s];
                a &&
                  a.getAttribute(Sr) !== "active" &&
                  (Wv(i, a), a.parentNode && a.parentNode.removeChild(a));
              }
            })(this));
      }
      return (
        (e.registerId = function (t) {
          return us(t);
        }),
        (e.prototype.reconstructWithOptions = function (t, n) {
          return (
            n === void 0 && (n = !0),
            new e(
              Be(Be({}, this.options), t),
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
                return n.isServer ? new Qv(i) : r ? new Yv(i) : new Kv(i);
              })(this.options)),
              new Fv(t)))
          );
          var t;
        }),
        (e.prototype.hasNameForId = function (t, n) {
          return this.names.has(t) && this.names.get(t).has(n);
        }),
        (e.prototype.registerName = function (t, n) {
          if ((us(t), this.names.has(t))) this.names.get(t).add(n);
          else {
            var r = new Set();
            r.add(n), this.names.set(t, r);
          }
        }),
        (e.prototype.insertRules = function (t, n, r) {
          this.registerName(t, n), this.getTag().insertRules(us(t), r);
        }),
        (e.prototype.clearNames = function (t) {
          this.names.has(t) && this.names.get(t).clear();
        }),
        (e.prototype.clearRules = function (t) {
          this.getTag().clearGroup(us(t)), this.clearNames(t);
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
                    return as.get(h);
                  })(l);
                  if (a === void 0) return "continue";
                  var u = t.names.get(a),
                    c = n.getGroup(l);
                  if (u === void 0 || c.length === 0) return "continue";
                  var d = ""
                      .concat(Sr, ".g")
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
    qv = /&/g,
    Jv = /^\s*\/\/.*$/gm;
  function Vp(e, t) {
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
          (n.children = Vp(n.children, t)),
        n
      );
    });
  }
  function Zv(e) {
    var t,
      n,
      r,
      i = e === void 0 ? zn : e,
      o = i.options,
      s = o === void 0 ? zn : o,
      l = i.plugins,
      a = l === void 0 ? Pp : l,
      u = function (p, h, v) {
        return v === n ||
          (v.startsWith(n) && v.endsWith(n) && v.replaceAll(n, "").length > 0)
          ? ".".concat(t)
          : p;
      },
      c = a.slice();
    c.push(function (p) {
      p.type === Zo &&
        p.value.includes("&") &&
        (p.props[0] = p.props[0].replace(qv, n).replace(r, u));
    }),
      s.prefix && c.push(Cv),
      c.push(xv);
    var d = function (p, h, v, y) {
      h === void 0 && (h = ""),
        v === void 0 && (v = ""),
        y === void 0 && (y = "&"),
        (t = y),
        (n = h),
        (r = new RegExp("\\".concat(n, "\\b"), "g"));
      var k = p.replace(Jv, ""),
        f = wv(v || h ? "".concat(v, " ").concat(h, " { ").concat(k, " }") : k);
      s.namespace && (f = Vp(f, s.namespace));
      var m = [];
      return (
        wr(
          f,
          Ev(
            c.concat(
              Tv(function (g) {
                return m.push(g);
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
              return h.name || Ei(15), xr(p, h.name);
            }, 5381)
            .toString()
        : ""),
      d
    );
  }
  var e1 = new Bp(),
    du = Zv(),
    Up = Q.createContext({
      shouldForwardProp: void 0,
      styleSheet: e1,
      stylis: du,
    });
  Up.Consumer, Q.createContext(void 0);
  function Hp() {
    return R.useContext(Up);
  }
  var t1 = (function () {
      function e(t, n) {
        var r = this;
        (this.inject = function (i, o) {
          o === void 0 && (o = du);
          var s = r.name + o.hash;
          i.hasNameForId(r.id, s) ||
            i.insertRules(r.id, s, o(r.rules, s, "@keyframes"));
        }),
          (this.toString = function () {
            throw Ei(12, String(r.name));
          }),
          (this.name = t),
          (this.id = "sc-keyframes-".concat(t)),
          (this.rules = n);
      }
      return (
        (e.prototype.getName = function (t) {
          return t === void 0 && (t = du), this.name + t.hash;
        }),
        e
      );
    })(),
    n1 = function (e) {
      return e >= "A" && e <= "Z";
    };
  function Wp(e) {
    for (var t = "", n = 0; n < e.length; n++) {
      var r = e[n];
      if (n === 1 && r === "-" && e[0] === "-") return e;
      n1(r) ? (t += "-" + r.toLowerCase()) : (t += r);
    }
    return t.startsWith("ms-") ? "-" + t : t;
  }
  var Gp = function (e) {
      return e == null || e === !1 || e === "";
    },
    Yp = function (e) {
      var t,
        n,
        r = [];
      for (var i in e) {
        var o = e[i];
        e.hasOwnProperty(i) &&
          !Gp(o) &&
          ((Array.isArray(o) && o.isCss) || Er(o)
            ? r.push("".concat(Wp(i), ":"), o, ";")
            : xi(o)
            ? r.push.apply(
                r,
                Jo(Jo(["".concat(i, " {")], Yp(o), !1), ["}"], !1)
              )
            : r.push(
                ""
                  .concat(Wp(i), ": ")
                  .concat(
                    ((t = i),
                    (n = o) == null || typeof n == "boolean" || n === ""
                      ? ""
                      : typeof n != "number" ||
                        n === 0 ||
                        t in kp ||
                        t.startsWith("--")
                      ? String(n).trim()
                      : "".concat(n, "px")),
                    ";"
                  )
              ));
      }
      return r;
    };
  function $n(e, t, n, r) {
    if (Gp(e)) return [];
    if (au(e)) return [".".concat(e.styledComponentId)];
    if (Er(e)) {
      if (!Er((o = e)) || (o.prototype && o.prototype.isReactComponent) || !t)
        return [e];
      var i = e(t);
      return $n(i, t, n, r);
    }
    var o;
    return e instanceof t1
      ? n
        ? (e.inject(n, r), [e.getName(r)])
        : [e]
      : xi(e)
      ? Yp(e)
      : Array.isArray(e)
      ? e.flatMap(function (s) {
          return $n(s, t, n, r);
        })
      : [e.toString()];
  }
  function r1(e) {
    for (var t = 0; t < e.length; t += 1) {
      var n = e[t];
      if (Er(n) && !au(n)) return !1;
    }
    return !0;
  }
  var i1 = Ip("6.0.0-rc.3"),
    o1 = (function () {
      function e(t, n, r) {
        (this.rules = t),
          (this.staticRulesId = ""),
          (this.isStatic = (r === void 0 || r.isStatic) && r1(t)),
          (this.componentId = n),
          (this.baseHash = xr(i1, n)),
          (this.baseStyle = r),
          Bp.registerId(n);
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
              i = An(i, this.staticRulesId);
            else {
              var o = Dp($n(this.rules, t, n, r)),
                s = ou(xr(this.baseHash, o) >>> 0);
              if (!n.hasNameForId(this.componentId, s)) {
                var l = r(o, ".".concat(s), void 0, this.componentId);
                n.insertRules(this.componentId, s, l);
              }
              (i = An(i, s)), (this.staticRulesId = s);
            }
          else {
            for (
              var a = xr(this.baseHash, r.hash), u = "", c = 0;
              c < this.rules.length;
              c++
            ) {
              var d = this.rules[c];
              if (typeof d == "string") u += d;
              else if (d) {
                var p = Dp($n(d, t, n, r));
                (a = xr(a, p)), (u += p);
              }
            }
            if (u) {
              var h = ou(a >>> 0);
              n.hasNameForId(this.componentId, h) ||
                n.insertRules(
                  this.componentId,
                  h,
                  r(u, ".".concat(h), void 0, this.componentId)
                ),
                (i = An(i, h));
            }
          }
          return i;
        }),
        e
      );
    })(),
    Kp = Q.createContext(void 0);
  Kp.Consumer;
  function s1() {
    return R.useContext(Kp);
  }
  var fu = {};
  function l1(e, t, n) {
    var r,
      i = au(e),
      o = e,
      s = !lu(e),
      l = t.componentId,
      a =
        l === void 0
          ? (function (S, T) {
              var x = typeof S != "string" ? "sc" : _p(S);
              fu[x] = (fu[x] || 0) + 1;
              var _ = "".concat(x, "-").concat(Iv("6.0.0-rc.3" + x + fu[x]));
              return T ? "".concat(T, "-").concat(_) : _;
            })(t.displayName, t.parentComponentId)
          : l,
      u = t.displayName,
      c =
        u === void 0
          ? (function (S) {
              return lu(S) ? "styled.".concat(S) : "Styled(".concat(Mv(S), ")");
            })(e)
          : u,
      d = (r = t.attrs) !== null && r !== void 0 ? r : [],
      p =
        t.displayName && t.componentId
          ? "".concat(_p(t.displayName), "-").concat(t.componentId)
          : t.componentId || a,
      h = i && o.attrs ? o.attrs.concat(d).filter(Boolean) : d,
      v = t.shouldForwardProp;
    if (i && o.shouldForwardProp) {
      var y = o.shouldForwardProp;
      if (t.shouldForwardProp) {
        var k = t.shouldForwardProp;
        v = function (S, T) {
          return y(S, T) && k(S, T);
        };
      } else v = y;
    }
    var f = new o1(n, p, i ? o.componentStyle : void 0),
      m = f.isStatic && d.length === 0;
    function g(S, T) {
      return (function (x, _, O, b) {
        var M = x.attrs,
          j = x.componentStyle,
          B = x.defaultProps,
          pe = x.foldedComponentIds,
          dt = x.styledComponentId,
          Ze = x.target,
          Me = s1(),
          N = Hp(),
          A = x.shouldForwardProp || N.shouldForwardProp,
          D = (function (Ve, ft, _r) {
            for (
              var Gt,
                pt = Be(Be({}, ft), { className: void 0, theme: _r }),
                Mi = 0;
              Mi < Ve.length;
              Mi += 1
            ) {
              var Ni = Er((Gt = Ve[Mi])) ? Gt(pt) : Gt;
              for (var Mt in Ni)
                pt[Mt] =
                  Mt === "className"
                    ? An(pt[Mt], Ni[Mt])
                    : Mt === "style"
                    ? Be(Be({}, pt[Mt]), Ni[Mt])
                    : Ni[Mt];
            }
            return (
              ft.className && (pt.className = An(pt.className, ft.className)),
              pt
            );
          })(M, _, Pv(_, Me, B) || zn),
          Y = D.as || Ze,
          J = {};
        for (var Ee in D)
          D[Ee] === void 0 ||
            Ee[0] === "$" ||
            Ee === "as" ||
            Ee === "theme" ||
            (Ee === "forwardedAs"
              ? (J.as = D.forwardedAs)
              : (A && !A(Ee, Y)) || (J[Ee] = D[Ee]));
        var et = (function (Ve, ft, _r) {
            var Gt = Hp(),
              pt = Ve.generateAndInjectStyles(
                ft ? zn : _r,
                Gt.styleSheet,
                Gt.stylis
              );
            return pt;
          })(j, b, D),
          Wt = An(pe, dt);
        return (
          et && (Wt += " " + et),
          D.className && (Wt += " " + D.className),
          (J[lu(Y) && !Op.has(Y) ? "class" : "className"] = Wt),
          (J.ref = O),
          R.createElement(Y, J)
        );
      })(w, S, T, m);
    }
    g.displayName = c;
    var w = Q.forwardRef(g);
    return (
      (w.attrs = h),
      (w.componentStyle = f),
      (w.displayName = c),
      (w.shouldForwardProp = v),
      (w.foldedComponentIds = i
        ? An(o.foldedComponentIds, o.styledComponentId)
        : ""),
      (w.styledComponentId = p),
      (w.target = i ? o.target : e),
      Object.defineProperty(w, "defaultProps", {
        get: function () {
          return this._foldedDefaultProps;
        },
        set: function (S) {
          this._foldedDefaultProps = i
            ? (function (T) {
                for (var x = [], _ = 1; _ < arguments.length; _++)
                  x[_ - 1] = arguments[_];
                for (var O = 0, b = x; O < b.length; O++) uu(T, b[O], !0);
                return T;
              })({}, o.defaultProps, S)
            : S;
        },
      }),
      Object.defineProperty(w, "toString", {
        value: function () {
          return ".".concat(w.styledComponentId);
        },
      }),
      s &&
        jp(w, e, {
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
  function Qp(e, t) {
    for (var n = [e[0]], r = 0, i = t.length; r < i; r += 1)
      n.push(t[r], e[r + 1]);
    return n;
  }
  var Xp = function (e) {
    return Object.assign(e, { isCss: !0 });
  };
  function Ti(e) {
    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
    if (Er(e) || xi(e)) {
      var r = e;
      return Xp($n(Qp(Pp, Jo([r], t, !0))));
    }
    var i = e;
    return t.length === 0 && i.length === 1 && typeof i[0] == "string"
      ? $n(i)
      : Xp($n(Qp(i, t)));
  }
  function pu(e, t, n) {
    if ((n === void 0 && (n = zn), !t)) throw Ei(1, t);
    var r = function (i) {
      for (var o = [], s = 1; s < arguments.length; s++)
        o[s - 1] = arguments[s];
      return e(t, n, Ti.apply(void 0, Jo([i], o, !1)));
    };
    return (
      (r.attrs = function (i) {
        return pu(
          e,
          t,
          Be(Be({}, n), {
            attrs: Array.prototype.concat(n.attrs, i).filter(Boolean),
          })
        );
      }),
      (r.withConfig = function (i) {
        return pu(e, t, Be(Be({}, n), i));
      }),
      r
    );
  }
  function qp(e) {
    return pu(l1, e);
  }
  var V = qp;
  Op.forEach(function (e) {
    V[e] = qp(e);
  });
  const jx = "",
    Dx = "",
    bx = "",
    Fx = "";
  function Jp(e) {
    return (
      e !== null &&
      typeof e == "object" &&
      "constructor" in e &&
      e.constructor === Object
    );
  }
  function hu(e, t) {
    e === void 0 && (e = {}),
      t === void 0 && (t = {}),
      Object.keys(t).forEach((n) => {
        typeof e[n] > "u"
          ? (e[n] = t[n])
          : Jp(t[n]) &&
            Jp(e[n]) &&
            Object.keys(t[n]).length > 0 &&
            hu(e[n], t[n]);
      });
  }
  const Zp = {
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
  function jn() {
    const e = typeof document < "u" ? document : {};
    return hu(e, Zp), e;
  }
  const a1 = {
    document: Zp,
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
  function Qe() {
    const e = typeof window < "u" ? window : {};
    return hu(e, a1), e;
  }
  function u1(e) {
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
  function mu(e, t) {
    return t === void 0 && (t = 0), setTimeout(e, t);
  }
  function cs() {
    return Date.now();
  }
  function c1(e) {
    const t = Qe();
    let n;
    return (
      t.getComputedStyle && (n = t.getComputedStyle(e, null)),
      !n && e.currentStyle && (n = e.currentStyle),
      n || (n = e.style),
      n
    );
  }
  function d1(e, t) {
    t === void 0 && (t = "x");
    const n = Qe();
    let r, i, o;
    const s = c1(e);
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
  function ds(e) {
    return (
      typeof e == "object" &&
      e !== null &&
      e.constructor &&
      Object.prototype.toString.call(e).slice(8, -1) === "Object"
    );
  }
  function f1(e) {
    return typeof window < "u" && typeof window.HTMLElement < "u"
      ? e instanceof HTMLElement
      : e && (e.nodeType === 1 || e.nodeType === 11);
  }
  function Xe() {
    const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
      t = ["__proto__", "constructor", "prototype"];
    for (let n = 1; n < arguments.length; n += 1) {
      const r = n < 0 || arguments.length <= n ? void 0 : arguments[n];
      if (r != null && !f1(r)) {
        const i = Object.keys(Object(r)).filter((o) => t.indexOf(o) < 0);
        for (let o = 0, s = i.length; o < s; o += 1) {
          const l = i[o],
            a = Object.getOwnPropertyDescriptor(r, l);
          a !== void 0 &&
            a.enumerable &&
            (ds(e[l]) && ds(r[l])
              ? r[l].__swiper__
                ? (e[l] = r[l])
                : Xe(e[l], r[l])
              : !ds(e[l]) && ds(r[l])
              ? ((e[l] = {}), r[l].__swiper__ ? (e[l] = r[l]) : Xe(e[l], r[l]))
              : (e[l] = r[l]));
        }
      }
    }
    return e;
  }
  function fs(e, t, n) {
    e.style.setProperty(t, n);
  }
  function eh(e) {
    let { swiper: t, targetPosition: n, side: r } = e;
    const i = Qe(),
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
        let v = o + h * (n - o);
        if ((c(v, n) && (v = n), t.wrapperEl.scrollTo({ [r]: v }), c(v, n))) {
          (t.wrapperEl.style.overflow = "hidden"),
            (t.wrapperEl.style.scrollSnapType = ""),
            setTimeout(() => {
              (t.wrapperEl.style.overflow = ""),
                t.wrapperEl.scrollTo({ [r]: v });
            }),
            i.cancelAnimationFrame(t.cssModeFrameID);
          return;
        }
        t.cssModeFrameID = i.requestAnimationFrame(d);
      };
    d();
  }
  function Ut(e, t) {
    return (
      t === void 0 && (t = ""), [...e.children].filter((n) => n.matches(t))
    );
  }
  function p1(e, t) {
    t === void 0 && (t = []);
    const n = document.createElement(e);
    return n.classList.add(...(Array.isArray(t) ? t : [t])), n;
  }
  function h1(e, t) {
    const n = [];
    for (; e.previousElementSibling; ) {
      const r = e.previousElementSibling;
      t ? r.matches(t) && n.push(r) : n.push(r), (e = r);
    }
    return n;
  }
  function m1(e, t) {
    const n = [];
    for (; e.nextElementSibling; ) {
      const r = e.nextElementSibling;
      t ? r.matches(t) && n.push(r) : n.push(r), (e = r);
    }
    return n;
  }
  function gn(e, t) {
    return Qe().getComputedStyle(e, null).getPropertyValue(t);
  }
  function th(e) {
    let t = e,
      n;
    if (t) {
      for (n = 0; (t = t.previousSibling) !== null; )
        t.nodeType === 1 && (n += 1);
      return n;
    }
  }
  function g1(e, t) {
    const n = [];
    let r = e.parentElement;
    for (; r; )
      t ? r.matches(t) && n.push(r) : n.push(r), (r = r.parentElement);
    return n;
  }
  function nh(e, t, n) {
    const r = Qe();
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
  let gu;
  function v1() {
    const e = Qe(),
      t = jn();
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
  function rh() {
    return gu || (gu = v1()), gu;
  }
  let vu;
  function y1(e) {
    let { userAgent: t } = e === void 0 ? {} : e;
    const n = rh(),
      r = Qe(),
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
    let v = i === "MacIntel";
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
        v &&
        n.touch &&
        y.indexOf(`${l}x${a}`) >= 0 &&
        ((c = o.match(/(Version)\/([\d.]+)/)),
        c || (c = [0, 1, "13_0_0"]),
        (v = !1)),
      u && !h && ((s.os = "android"), (s.android = !0)),
      (c || p || d) && ((s.os = "ios"), (s.ios = !0)),
      s
    );
  }
  function w1(e) {
    return e === void 0 && (e = {}), vu || (vu = y1(e)), vu;
  }
  let yu;
  function S1() {
    const e = Qe();
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
  function x1() {
    return yu || (yu = S1()), yu;
  }
  function E1(e) {
    let { swiper: t, on: n, emit: r } = e;
    const i = Qe();
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
              let v = p,
                y = h;
              d.forEach((k) => {
                let { contentBoxSize: f, contentRect: m, target: g } = k;
                (g && g !== t.el) ||
                  ((v = m ? m.width : (f[0] || f).inlineSize),
                  (y = m ? m.height : (f[0] || f).blockSize));
              }),
                (v !== p || y !== h) && l();
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
  function T1(e) {
    let { swiper: t, extendParams: n, on: r, emit: i } = e;
    const o = [],
      s = Qe(),
      l = function (c, d) {
        d === void 0 && (d = {});
        const p = s.MutationObserver || s.WebkitMutationObserver,
          h = new p((v) => {
            if (t.__preventObserver__) return;
            if (v.length === 1) {
              i("observerUpdate", v[0]);
              return;
            }
            const y = function () {
              i("observerUpdate", v[0]);
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
            const c = g1(t.el);
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
  var C1 = {
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
  function k1() {
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
          parseInt(gn(r, "padding-left") || 0, 10) -
          parseInt(gn(r, "padding-right") || 0, 10)),
        (n =
          n -
          parseInt(gn(r, "padding-top") || 0, 10) -
          parseInt(gn(r, "padding-bottom") || 0, 10)),
        Number.isNaN(t) && (t = 0),
        Number.isNaN(n) && (n = 0),
        Object.assign(e, {
          width: t,
          height: n,
          size: e.isHorizontal() ? t : n,
        }));
  }
  function P1() {
    const e = this;
    function t(M) {
      return e.isHorizontal()
        ? M
        : {
            width: "height",
            "margin-top": "margin-left",
            "margin-bottom ": "margin-right",
            "margin-left": "margin-top",
            "margin-right": "margin-bottom",
            "padding-left": "padding-top",
            "padding-right": "padding-bottom",
            marginRight: "marginBottom",
          }[M];
    }
    function n(M, j) {
      return parseFloat(M.getPropertyValue(t(j)) || 0);
    }
    const r = e.params,
      { wrapperEl: i, slidesEl: o, size: s, rtlTranslate: l, wrongRTL: a } = e,
      u = e.virtual && r.virtual.enabled,
      c = u ? e.virtual.slides.length : e.slides.length,
      d = Ut(o, `.${e.params.slideClass}, swiper-slide`),
      p = u ? e.virtual.slides.length : d.length;
    let h = [];
    const v = [],
      y = [];
    let k = r.slidesOffsetBefore;
    typeof k == "function" && (k = r.slidesOffsetBefore.call(e));
    let f = r.slidesOffsetAfter;
    typeof f == "function" && (f = r.slidesOffsetAfter.call(e));
    const m = e.snapGrid.length,
      g = e.slidesGrid.length;
    let w = r.spaceBetween,
      S = -k,
      T = 0,
      x = 0;
    if (typeof s > "u") return;
    typeof w == "string" && w.indexOf("%") >= 0
      ? (w = (parseFloat(w.replace("%", "")) / 100) * s)
      : typeof w == "string" && (w = parseFloat(w)),
      (e.virtualSize = -w),
      d.forEach((M) => {
        l ? (M.style.marginLeft = "") : (M.style.marginRight = ""),
          (M.style.marginBottom = ""),
          (M.style.marginTop = "");
      }),
      r.centeredSlides &&
        r.cssMode &&
        (fs(i, "--swiper-centered-offset-before", ""),
        fs(i, "--swiper-centered-offset-after", ""));
    const _ = r.grid && r.grid.rows > 1 && e.grid;
    _ && e.grid.initSlides(p);
    let O;
    const b =
      r.slidesPerView === "auto" &&
      r.breakpoints &&
      Object.keys(r.breakpoints).filter(
        (M) => typeof r.breakpoints[M].slidesPerView < "u"
      ).length > 0;
    for (let M = 0; M < p; M += 1) {
      O = 0;
      let j;
      if (
        (d[M] && (j = d[M]),
        _ && e.grid.updateSlide(M, j, p, t),
        !(d[M] && gn(j, "display") === "none"))
      ) {
        if (r.slidesPerView === "auto") {
          b && (d[M].style[t("width")] = "");
          const B = getComputedStyle(j),
            pe = j.style.transform,
            dt = j.style.webkitTransform;
          if (
            (pe && (j.style.transform = "none"),
            dt && (j.style.webkitTransform = "none"),
            r.roundLengths)
          )
            O = e.isHorizontal() ? nh(j, "width", !0) : nh(j, "height", !0);
          else {
            const Ze = n(B, "width"),
              Me = n(B, "padding-left"),
              N = n(B, "padding-right"),
              A = n(B, "margin-left"),
              D = n(B, "margin-right"),
              Y = B.getPropertyValue("box-sizing");
            if (Y && Y === "border-box") O = Ze + A + D;
            else {
              const { clientWidth: J, offsetWidth: Ee } = j;
              O = Ze + Me + N + A + D + (Ee - J);
            }
          }
          pe && (j.style.transform = pe),
            dt && (j.style.webkitTransform = dt),
            r.roundLengths && (O = Math.floor(O));
        } else
          (O = (s - (r.slidesPerView - 1) * w) / r.slidesPerView),
            r.roundLengths && (O = Math.floor(O)),
            d[M] && (d[M].style[t("width")] = `${O}px`);
        d[M] && (d[M].swiperSlideSize = O),
          y.push(O),
          r.centeredSlides
            ? ((S = S + O / 2 + T / 2 + w),
              T === 0 && M !== 0 && (S = S - s / 2 - w),
              M === 0 && (S = S - s / 2 - w),
              Math.abs(S) < 1 / 1e3 && (S = 0),
              r.roundLengths && (S = Math.floor(S)),
              x % r.slidesPerGroup === 0 && h.push(S),
              v.push(S))
            : (r.roundLengths && (S = Math.floor(S)),
              (x - Math.min(e.params.slidesPerGroupSkip, x)) %
                e.params.slidesPerGroup ===
                0 && h.push(S),
              v.push(S),
              (S = S + O + w)),
          (e.virtualSize += O + w),
          (T = O),
          (x += 1);
      }
    }
    if (
      ((e.virtualSize = Math.max(e.virtualSize, s) + f),
      l &&
        a &&
        (r.effect === "slide" || r.effect === "coverflow") &&
        (i.style.width = `${e.virtualSize + w}px`),
      r.setWrapperSize && (i.style[t("width")] = `${e.virtualSize + w}px`),
      _ && e.grid.updateWrapperSize(O, h, t),
      !r.centeredSlides)
    ) {
      const M = [];
      for (let j = 0; j < h.length; j += 1) {
        let B = h[j];
        r.roundLengths && (B = Math.floor(B)),
          h[j] <= e.virtualSize - s && M.push(B);
      }
      (h = M),
        Math.floor(e.virtualSize - s) - Math.floor(h[h.length - 1]) > 1 &&
          h.push(e.virtualSize - s);
    }
    if (u && r.loop) {
      const M = y[0] + w;
      if (r.slidesPerGroup > 1) {
        const j = Math.ceil(
            (e.virtual.slidesBefore + e.virtual.slidesAfter) / r.slidesPerGroup
          ),
          B = M * r.slidesPerGroup;
        for (let pe = 0; pe < j; pe += 1) h.push(h[h.length - 1] + B);
      }
      for (
        let j = 0;
        j < e.virtual.slidesBefore + e.virtual.slidesAfter;
        j += 1
      )
        r.slidesPerGroup === 1 && h.push(h[h.length - 1] + M),
          v.push(v[v.length - 1] + M),
          (e.virtualSize += M);
    }
    if ((h.length === 0 && (h = [0]), w !== 0)) {
      const M = e.isHorizontal() && l ? "marginLeft" : t("marginRight");
      d.filter((j, B) =>
        !r.cssMode || r.loop ? !0 : B !== d.length - 1
      ).forEach((j) => {
        j.style[M] = `${w}px`;
      });
    }
    if (r.centeredSlides && r.centeredSlidesBounds) {
      let M = 0;
      y.forEach((B) => {
        M += B + (w || 0);
      }),
        (M -= w);
      const j = M - s;
      h = h.map((B) => (B <= 0 ? -k : B > j ? j + f : B));
    }
    if (r.centerInsufficientSlides) {
      let M = 0;
      if (
        (y.forEach((j) => {
          M += j + (w || 0);
        }),
        (M -= w),
        M < s)
      ) {
        const j = (s - M) / 2;
        h.forEach((B, pe) => {
          h[pe] = B - j;
        }),
          v.forEach((B, pe) => {
            v[pe] = B + j;
          });
      }
    }
    if (
      (Object.assign(e, {
        slides: d,
        snapGrid: h,
        slidesGrid: v,
        slidesSizesGrid: y,
      }),
      r.centeredSlides && r.cssMode && !r.centeredSlidesBounds)
    ) {
      fs(i, "--swiper-centered-offset-before", `${-h[0]}px`),
        fs(
          i,
          "--swiper-centered-offset-after",
          `${e.size / 2 - y[y.length - 1] / 2}px`
        );
      const M = -e.snapGrid[0],
        j = -e.slidesGrid[0];
      (e.snapGrid = e.snapGrid.map((B) => B + M)),
        (e.slidesGrid = e.slidesGrid.map((B) => B + j));
    }
    if (
      (p !== c && e.emit("slidesLengthChange"),
      h.length !== m &&
        (e.params.watchOverflow && e.checkOverflow(),
        e.emit("snapGridLengthChange")),
      v.length !== g && e.emit("slidesGridLengthChange"),
      r.watchSlidesProgress && e.updateSlidesOffset(),
      !u && !r.cssMode && (r.effect === "slide" || r.effect === "fade"))
    ) {
      const M = `${r.containerModifierClass}backface-hidden`,
        j = e.el.classList.contains(M);
      p <= r.maxBackfaceHiddenSlides
        ? j || e.el.classList.add(M)
        : j && e.el.classList.remove(M);
    }
  }
  function O1(e) {
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
  function _1() {
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
  function L1(e) {
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
        v = h + t.slidesSizesGrid[a];
      ((h >= 0 && h < t.size - 1) ||
        (v > 1 && v <= t.size) ||
        (h <= 0 && v >= t.size)) &&
        (t.visibleSlides.push(u),
        t.visibleSlidesIndexes.push(a),
        r[a].classList.add(n.slideVisibleClass)),
        (u.progress = i ? -d : d),
        (u.originalProgress = i ? -p : p);
    }
  }
  function I1(e) {
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
        v = t.slidesGrid[t.slidesGrid.length - 1],
        y = Math.abs(e);
      y >= p ? (l = (y - p) / v) : (l = (y + v - h) / v), l > 1 && (l -= 1);
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
  function M1() {
    const e = this,
      { slides: t, params: n, slidesEl: r, activeIndex: i } = e,
      o = e.virtual && n.virtual.enabled,
      s = (a) => Ut(r, `.${n.slideClass}${a}, swiper-slide${a}`)[0];
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
      let a = m1(l, `.${n.slideClass}, swiper-slide`)[0];
      n.loop && !a && (a = t[0]), a && a.classList.add(n.slideNextClass);
      let u = h1(l, `.${n.slideClass}, swiper-slide`)[0];
      n.loop && !u === 0 && (u = t[t.length - 1]),
        u && u.classList.add(n.slidePrevClass);
    }
    e.emitSlidesClasses();
  }
  const ps = (e, t) => {
      if (!e || e.destroyed || !e.params) return;
      const n = () =>
          e.isElement ? "swiper-slide" : `.${e.params.slideClass}`,
        r = t.closest(n());
      if (r) {
        const i = r.querySelector(`.${e.params.lazyPreloaderClass}`);
        i && i.remove();
      }
    },
    wu = (e, t) => {
      if (!e.slides[t]) return;
      const n = e.slides[t].querySelector('[loading="lazy"]');
      n && n.removeAttribute("loading");
    },
    Su = (e) => {
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
            l.includes(a.column) && wu(e, u);
          });
        return;
      }
      const o = i + r - 1;
      if (e.params.rewind || e.params.loop)
        for (let s = i - t; s <= o + t; s += 1) {
          const l = ((s % n) + n) % n;
          (l < i || l > o) && wu(e, l);
        }
      else
        for (let s = Math.max(i - t, 0); s <= Math.min(o + t, n - 1); s += 1)
          s !== i && (s > o || s < i) && wu(e, s);
    };
  function N1(e) {
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
  function R1(e) {
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
    if ((typeof a > "u" && (a = N1(t)), r.indexOf(n) >= 0)) u = r.indexOf(n);
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
      t.initialized && Su(t),
      t.emit("activeIndexChange"),
      t.emit("snapIndexChange"),
      s !== d && t.emit("realIndexChange"),
      (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange");
  }
  function z1(e) {
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
  var A1 = {
    updateSize: k1,
    updateSlides: P1,
    updateAutoHeight: O1,
    updateSlidesOffset: _1,
    updateSlidesProgress: L1,
    updateProgress: I1,
    updateSlidesClasses: M1,
    updateActiveIndex: R1,
    updateClickedSlide: z1,
  };
  function $1(e) {
    e === void 0 && (e = this.isHorizontal() ? "x" : "y");
    const t = this,
      { params: n, rtlTranslate: r, translate: i, wrapperEl: o } = t;
    if (n.virtualTranslate) return r ? -i : i;
    if (n.cssMode) return i;
    let s = d1(o, e);
    return (s += t.cssOverflowAdjustment()), r && (s = -s), s || 0;
  }
  function j1(e, t) {
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
  function D1() {
    return -this.snapGrid[0];
  }
  function b1() {
    return -this.snapGrid[this.snapGrid.length - 1];
  }
  function F1(e, t, n, r, i) {
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
            eh({ swiper: o, targetPosition: -c, side: d ? "left" : "top" }), !0
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
  var B1 = {
    getTranslate: $1,
    setTranslate: j1,
    minTranslate: D1,
    maxTranslate: b1,
    translateTo: F1,
  };
  function V1(e, t) {
    const n = this;
    n.params.cssMode || (n.wrapperEl.style.transitionDuration = `${e}ms`),
      n.emit("setTransition", e, t);
  }
  function ih(e) {
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
  function U1(e, t) {
    e === void 0 && (e = !0);
    const n = this,
      { params: r } = n;
    r.cssMode ||
      (r.autoHeight && n.updateAutoHeight(),
      ih({ swiper: n, runCallbacks: e, direction: t, step: "Start" }));
  }
  function H1(e, t) {
    e === void 0 && (e = !0);
    const n = this,
      { params: r } = n;
    (n.animating = !1),
      !r.cssMode &&
        (n.setTransition(0),
        ih({ swiper: n, runCallbacks: e, direction: t, step: "End" }));
  }
  var W1 = { setTransition: V1, transitionStart: U1, transitionEnd: H1 };
  function G1(e, t, n, r, i) {
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
      enabled: v,
    } = o;
    if ((o.animating && l.preventInteractionOnTransition) || (!v && !r && !i))
      return !1;
    const y = Math.min(o.params.slidesPerGroupSkip, s);
    let k = y + Math.floor((s - y) / o.params.slidesPerGroup);
    k >= a.length && (k = a.length - 1);
    const f = -a[k];
    if (l.normalizeSlideIndex)
      for (let g = 0; g < u.length; g += 1) {
        const w = -Math.floor(f * 100),
          S = Math.floor(u[g] * 100),
          T = Math.floor(u[g + 1] * 100);
        typeof u[g + 1] < "u"
          ? w >= S && w < T - (T - S) / 2
            ? (s = g)
            : w >= S && w < T && (s = g + 1)
          : w >= S && (s = g);
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
      const g = o.isHorizontal(),
        w = p ? f : -f;
      if (t === 0) {
        const S = o.virtual && o.params.virtual.enabled;
        S &&
          ((o.wrapperEl.style.scrollSnapType = "none"),
          (o._immediateVirtual = !0)),
          S && !o._cssModeVirtualInitialSet && o.params.initialSlide > 0
            ? ((o._cssModeVirtualInitialSet = !0),
              requestAnimationFrame(() => {
                h[g ? "scrollLeft" : "scrollTop"] = w;
              }))
            : (h[g ? "scrollLeft" : "scrollTop"] = w),
          S &&
            requestAnimationFrame(() => {
              (o.wrapperEl.style.scrollSnapType = ""),
                (o._immediateVirtual = !1);
            });
      } else {
        if (!o.support.smoothScroll)
          return (
            eh({ swiper: o, targetPosition: w, side: g ? "left" : "top" }), !0
          );
        h.scrollTo({ [g ? "left" : "top"]: w, behavior: "smooth" });
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
  function Y1(e, t, n, r) {
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
  function K1(e, t, n) {
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
  function Q1(e, t, n) {
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
      v = o.map((f) => p(f));
    let y = o[v.indexOf(h) - 1];
    if (typeof y > "u" && i.cssMode) {
      let f;
      o.forEach((m, g) => {
        h >= m && (f = g);
      }),
        typeof f < "u" && (y = o[f > 0 ? f - 1 : f]);
    }
    let k = 0;
    if (
      (typeof y < "u" &&
        ((k = s.indexOf(y)),
        k < 0 && (k = r.activeIndex - 1),
        i.slidesPerView === "auto" &&
          i.slidesPerGroup === 1 &&
          i.slidesPerGroupAuto &&
          ((k = k - r.slidesPerViewDynamic("previous", !0) + 1),
          (k = Math.max(k, 0)))),
      i.rewind && r.isBeginning)
    ) {
      const f =
        r.params.virtual && r.params.virtual.enabled && r.virtual
          ? r.virtual.slides.length - 1
          : r.slides.length - 1;
      return r.slideTo(f, e, t, n);
    }
    return r.slideTo(k, e, t, n);
  }
  function X1(e, t, n) {
    e === void 0 && (e = this.params.speed), t === void 0 && (t = !0);
    const r = this;
    return r.slideTo(r.activeIndex, e, t, n);
  }
  function q1(e, t, n, r) {
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
  function J1() {
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
                Ut(n, `${s}[data-swiper-slide-index="${o}"]`)[0]
              )),
              mu(() => {
                e.slideTo(i);
              }))
            : e.slideTo(i)
          : i > e.slides.length - r
          ? (e.loopFix(),
            (i = e.getSlideIndex(
              Ut(n, `${s}[data-swiper-slide-index="${o}"]`)[0]
            )),
            mu(() => {
              e.slideTo(i);
            }))
          : e.slideTo(i);
    } else e.slideTo(i);
  }
  var Z1 = {
    slideTo: G1,
    slideToLoop: Y1,
    slideNext: K1,
    slidePrev: Q1,
    slideReset: X1,
    slideToClosest: q1,
    slideToClickedSlide: J1,
  };
  function ey(e) {
    const t = this,
      { params: n, slidesEl: r } = t;
    if (!n.loop || (t.virtual && t.params.virtual.enabled)) return;
    Ut(r, `.${n.slideClass}, swiper-slide`).forEach((o, s) => {
      o.setAttribute("data-swiper-slide-index", s);
    }),
      t.loopFix({
        slideRealIndex: e,
        direction: n.centeredSlides ? void 0 : "next",
      });
  }
  function ty(e) {
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
    const v =
      h.slidesPerView === "auto"
        ? a.slidesPerViewDynamic()
        : Math.ceil(parseFloat(h.slidesPerView, 10));
    let y = h.loopedSlides || v;
    y % h.slidesPerGroup !== 0 &&
      (y += h.slidesPerGroup - (y % h.slidesPerGroup)),
      (a.loopedSlides = y);
    const k = [],
      f = [];
    let m = a.activeIndex;
    typeof o > "u"
      ? (o = a.getSlideIndex(
          a.slides.filter((x) => x.classList.contains(h.slideActiveClass))[0]
        ))
      : (m = o);
    const g = r === "next" || !r,
      w = r === "prev" || !r;
    let S = 0,
      T = 0;
    if (o < y) {
      S = Math.max(y - o, h.slidesPerGroup);
      for (let x = 0; x < y - o; x += 1) {
        const _ = x - Math.floor(x / u.length) * u.length;
        k.push(u.length - _ - 1);
      }
    } else if (o > a.slides.length - y * 2) {
      T = Math.max(o - (a.slides.length - y * 2), h.slidesPerGroup);
      for (let x = 0; x < T; x += 1) {
        const _ = x - Math.floor(x / u.length) * u.length;
        f.push(_);
      }
    }
    if (
      (w &&
        k.forEach((x) => {
          (a.slides[x].swiperLoopMoveDOM = !0),
            p.prepend(a.slides[x]),
            (a.slides[x].swiperLoopMoveDOM = !1);
        }),
      g &&
        f.forEach((x) => {
          (a.slides[x].swiperLoopMoveDOM = !0),
            p.append(a.slides[x]),
            (a.slides[x].swiperLoopMoveDOM = !1);
        }),
      a.recalcSlides(),
      h.slidesPerView === "auto" && a.updateSlides(),
      h.watchSlidesProgress && a.updateSlidesOffset(),
      n)
    ) {
      if (k.length > 0 && w)
        if (typeof t > "u") {
          const x = a.slidesGrid[m],
            O = a.slidesGrid[m + S] - x;
          l
            ? a.setTranslate(a.translate - O)
            : (a.slideTo(m + S, 0, !1, !0),
              i && (a.touches[a.isHorizontal() ? "startX" : "startY"] += O));
        } else i && a.slideToLoop(t, 0, !1, !0);
      else if (f.length > 0 && g)
        if (typeof t > "u") {
          const x = a.slidesGrid[m],
            O = a.slidesGrid[m - T] - x;
          l
            ? a.setTranslate(a.translate - O)
            : (a.slideTo(m - T, 0, !1, !0),
              i && (a.touches[a.isHorizontal() ? "startX" : "startY"] += O));
        } else a.slideToLoop(t, 0, !1, !0);
    }
    if (
      ((a.allowSlidePrev = c),
      (a.allowSlideNext = d),
      a.controller && a.controller.control && !s)
    ) {
      const x = {
        slideRealIndex: t,
        slideTo: !1,
        direction: r,
        setTranslate: i,
        activeSlideIndex: o,
        byController: !0,
      };
      Array.isArray(a.controller.control)
        ? a.controller.control.forEach((_) => {
            !_.destroyed && _.params.loop && _.loopFix(x);
          })
        : a.controller.control instanceof a.constructor &&
          a.controller.control.params.loop &&
          a.controller.control.loopFix(x);
    }
    a.emit("loopFix");
  }
  function ny() {
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
  var ry = { loopCreate: ey, loopFix: ty, loopDestroy: ny };
  function iy(e) {
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
  function oy() {
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
  var sy = { setGrabCursor: iy, unsetGrabCursor: oy };
  function ly(e, t) {
    t === void 0 && (t = this);
    function n(r) {
      if (!r || r === jn() || r === Qe()) return null;
      r.assignedSlot && (r = r.assignedSlot);
      const i = r.closest(e);
      return !i && !r.getRootNode ? null : i || n(r.getRootNode().host);
    }
    return n(t);
  }
  function ay(e) {
    const t = this,
      n = jn(),
      r = Qe(),
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
    if (o.noSwiping && (h ? ly(p, u) : u.closest(p))) {
      t.allowClick = !0;
      return;
    }
    if (o.swipeHandler && !u.closest(o.swipeHandler)) return;
    (s.currentX = a.pageX), (s.currentY = a.pageY);
    const v = s.currentX,
      y = s.currentY,
      k = o.edgeSwipeDetection || o.iOSEdgeSwipeDetection,
      f = o.edgeSwipeThreshold || o.iOSEdgeSwipeThreshold;
    if (k && (v <= f || v >= r.innerWidth - f))
      if (k === "prevent") e.preventDefault();
      else return;
    Object.assign(i, {
      isTouched: !0,
      isMoved: !1,
      allowTouchCallbacks: !0,
      isScrolling: void 0,
      startMoving: void 0,
    }),
      (s.startX = v),
      (s.startY = y),
      (i.touchStartTime = cs()),
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
    const g = m && t.allowTouchMove && o.touchStartPreventDefault;
    (o.touchStartForcePreventDefault || g) &&
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
  function uy(e) {
    const t = jn(),
      n = this,
      r = n.touchEventsData,
      { params: i, touches: o, rtlTranslate: s, enabled: l } = n;
    if (!l || (!i.simulateTouch && e.pointerType === "mouse")) return;
    let a = e;
    if ((a.originalEvent && (a = a.originalEvent), !r.isTouched)) {
      r.startMoving && r.isScrolling && n.emit("touchMoveOpposite", a);
      return;
    }
    const u = r.evCache.findIndex((T) => T.pointerId === a.pointerId);
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
          (r.touchStartTime = cs()));
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
      v = o.currentY - o.startY;
    if (n.params.threshold && Math.sqrt(h ** 2 + v ** 2) < n.params.threshold)
      return;
    if (typeof r.isScrolling > "u") {
      let T;
      (n.isHorizontal() && o.currentY === o.startY) ||
      (n.isVertical() && o.currentX === o.startX)
        ? (r.isScrolling = !1)
        : h * h + v * v >= 25 &&
          ((T = (Math.atan2(Math.abs(v), Math.abs(h)) * 180) / Math.PI),
          (r.isScrolling = n.isHorizontal()
            ? T > i.touchAngle
            : 90 - T > i.touchAngle));
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
    let y = n.isHorizontal() ? h : v,
      k = n.isHorizontal()
        ? o.currentX - o.previousX
        : o.currentY - o.previousY;
    i.oneWayMovement &&
      ((y = Math.abs(y) * (s ? 1 : -1)), (k = Math.abs(k) * (s ? 1 : -1))),
      (o.diff = y),
      (y *= i.touchRatio),
      s && ((y = -y), (k = -k));
    const f = n.touchesDirection;
    (n.swipeDirection = y > 0 ? "prev" : "next"),
      (n.touchesDirection = k > 0 ? "prev" : "next");
    const m = n.params.loop && !i.cssMode;
    if (!r.isMoved) {
      if (
        (m && n.loopFix({ direction: n.swipeDirection }),
        (r.startTranslate = n.getTranslate()),
        n.setTransition(0),
        n.animating)
      ) {
        const T = new window.CustomEvent("transitionend", {
          bubbles: !0,
          cancelable: !0,
        });
        n.wrapperEl.dispatchEvent(T);
      }
      (r.allowMomentumBounce = !1),
        i.grabCursor &&
          (n.allowSlideNext === !0 || n.allowSlidePrev === !0) &&
          n.setGrabCursor(!0),
        n.emit("sliderFirstMove", a);
    }
    let g;
    r.isMoved &&
      f !== n.touchesDirection &&
      m &&
      Math.abs(y) >= 1 &&
      (n.loopFix({ direction: n.swipeDirection, setTranslate: !0 }), (g = !0)),
      n.emit("sliderMove", a),
      (r.isMoved = !0),
      (r.currentTranslate = y + r.startTranslate);
    let w = !0,
      S = i.resistanceRatio;
    if (
      (i.touchReleaseOnEdges && (S = 0),
      y > 0
        ? (m &&
            !g &&
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
                (-n.minTranslate() + r.startTranslate + y) ** S)))
        : y < 0 &&
          (m &&
            !g &&
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
                (n.maxTranslate() - r.startTranslate - y) ** S))),
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
  function cy(e) {
    const t = this,
      n = t.touchEventsData,
      r = n.evCache.findIndex((g) => g.pointerId === e.pointerId);
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
    const c = cs(),
      d = c - n.touchStartTime;
    if (t.allowClick) {
      const g = u.path || (u.composedPath && u.composedPath());
      t.updateClickedSlide((g && g[0]) || u.target),
        t.emit("tap click", u),
        d < 300 &&
          c - n.lastClickTime < 300 &&
          t.emit("doubleTap doubleClick", u);
    }
    if (
      ((n.lastClickTime = cs()),
      mu(() => {
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
      v = t.slidesSizesGrid[0];
    for (
      let g = 0;
      g < l.length;
      g += g < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup
    ) {
      const w = g < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
      typeof l[g + w] < "u"
        ? p >= l[g] && p < l[g + w] && ((h = g), (v = l[g + w] - l[g]))
        : p >= l[g] && ((h = g), (v = l[l.length - 1] - l[l.length - 2]));
    }
    let y = null,
      k = null;
    i.rewind &&
      (t.isBeginning
        ? (k =
            i.virtual && i.virtual.enabled && t.virtual
              ? t.virtual.slides.length - 1
              : t.slides.length - 1)
        : t.isEnd && (y = 0));
    const f = (p - l[h]) / v,
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
            : k !== null && f < 0 && Math.abs(f) > i.longSwipesRatio
            ? t.slideTo(k)
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
          t.swipeDirection === "prev" && t.slideTo(k !== null ? k : h));
    }
  }
  function oh() {
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
  function dy(e) {
    const t = this;
    t.enabled &&
      (t.allowClick ||
        (t.params.preventClicks && e.preventDefault(),
        t.params.preventClicksPropagation &&
          t.animating &&
          (e.stopPropagation(), e.stopImmediatePropagation())));
  }
  function fy() {
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
  function py(e) {
    const t = this;
    ps(t, e.target),
      !(
        t.params.cssMode ||
        (t.params.slidesPerView !== "auto" && !t.params.autoHeight)
      ) && t.update();
  }
  let sh = !1;
  function hy() {}
  const lh = (e, t) => {
    const n = jn(),
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
            oh,
            !0
          )
        : e[u]("observerUpdate", oh, !0),
      i[a]("load", e.onLoad, { capture: !0 });
  };
  function my() {
    const e = this,
      t = jn(),
      { params: n } = e;
    (e.onTouchStart = ay.bind(e)),
      (e.onTouchMove = uy.bind(e)),
      (e.onTouchEnd = cy.bind(e)),
      n.cssMode && (e.onScroll = fy.bind(e)),
      (e.onClick = dy.bind(e)),
      (e.onLoad = py.bind(e)),
      sh || (t.addEventListener("touchstart", hy), (sh = !0)),
      lh(e, "on");
  }
  function gy() {
    lh(this, "off");
  }
  var vy = { attachEvents: my, detachEvents: gy };
  const ah = (e, t) => e.grid && t.grid && t.grid.rows > 1;
  function yy() {
    const e = this,
      { realIndex: t, initialized: n, params: r, el: i } = e,
      o = r.breakpoints;
    if (!o || (o && Object.keys(o).length === 0)) return;
    const s = e.getBreakpoint(o, e.params.breakpointsBase, e.el);
    if (!s || e.currentBreakpoint === s) return;
    const a = (s in o ? o[s] : void 0) || e.originalParams,
      u = ah(e, r),
      c = ah(e, a),
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
        const k = r[y] && r[y].enabled,
          f = a[y] && a[y].enabled;
        k && !f && e[y].disable(), !k && f && e[y].enable();
      });
    const p = a.direction && a.direction !== r.direction,
      h = r.loop && (a.slidesPerView !== r.slidesPerView || p);
    p && n && e.changeDirection(), Xe(e.params, a);
    const v = e.params.enabled;
    Object.assign(e, {
      allowTouchMove: e.params.allowTouchMove,
      allowSlideNext: e.params.allowSlideNext,
      allowSlidePrev: e.params.allowSlidePrev,
    }),
      d && !v ? e.disable() : !d && v && e.enable(),
      (e.currentBreakpoint = s),
      e.emit("_beforeBreakpoint", a),
      h && n && (e.loopDestroy(), e.loopCreate(t), e.updateSlides()),
      e.emit("breakpoint", a);
  }
  function wy(e, t, n) {
    if ((t === void 0 && (t = "window"), !e || (t === "container" && !n)))
      return;
    let r = !1;
    const i = Qe(),
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
  var Sy = { setBreakpoint: yy, getBreakpoint: wy };
  function xy(e, t) {
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
  function Ey() {
    const e = this,
      { classNames: t, params: n, rtl: r, el: i, device: o } = e,
      s = xy(
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
  function Ty() {
    const e = this,
      { el: t, classNames: n } = e;
    t.classList.remove(...n), e.emitContainerClasses();
  }
  var Cy = { addClasses: Ey, removeClasses: Ty };
  function ky() {
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
  var Py = { checkOverflow: ky },
    uh = {
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
  function Oy(e, t) {
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
  const xu = {
      eventsEmitter: C1,
      update: A1,
      translate: B1,
      transition: W1,
      slide: Z1,
      loop: ry,
      grabCursor: sy,
      events: vy,
      breakpoints: Sy,
      checkOverflow: Py,
      classes: Cy,
    },
    Eu = {};
  let Ci = class Yt {
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
      const s = jn();
      if (
        n.el &&
        typeof n.el == "string" &&
        s.querySelectorAll(n.el).length > 1
      ) {
        const c = [];
        return (
          s.querySelectorAll(n.el).forEach((d) => {
            const p = Xe({}, n, { el: d });
            c.push(new Yt(p));
          }),
          c
        );
      }
      const l = this;
      (l.__swiper__ = !0),
        (l.support = rh()),
        (l.device = w1({ userAgent: n.userAgent })),
        (l.browser = x1()),
        (l.eventsListeners = {}),
        (l.eventsAnyListeners = []),
        (l.modules = [...l.__modules__]),
        n.modules && Array.isArray(n.modules) && l.modules.push(...n.modules);
      const a = {};
      l.modules.forEach((c) => {
        c({
          params: n,
          swiper: l,
          extendParams: Oy(n, a),
          on: l.on.bind(l),
          once: l.once.bind(l),
          off: l.off.bind(l),
          emit: l.emit.bind(l),
        });
      });
      const u = Xe({}, uh, a);
      return (
        (l.params = Xe({}, u, Eu, n)),
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
        i = Ut(n, `.${r.slideClass}, swiper-slide`),
        o = th(i[0]);
      return th(t) - o;
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
      t.slides = Ut(n, `.${r.slideClass}, swiper-slide`);
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
          s.complete && ps(t, s);
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
          : Ut(r, i())[0])();
      return (
        !s &&
          n.params.createElements &&
          ((s = p1("div", n.params.wrapperClass)),
          r.append(s),
          Ut(r, `.${n.params.slideClass}`).forEach((l) => {
            s.append(l);
          })),
        Object.assign(n, {
          el: r,
          wrapperEl: s,
          slidesEl: n.isElement ? r.parentNode.host : s,
          hostEl: n.isElement ? r.parentNode.host : r,
          mounted: !0,
          rtl: r.dir.toLowerCase() === "rtl" || gn(r, "direction") === "rtl",
          rtlTranslate:
            n.params.direction === "horizontal" &&
            (r.dir.toLowerCase() === "rtl" || gn(r, "direction") === "rtl"),
          wrongRTL: gn(s, "display") === "-webkit-box",
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
              ? ps(n, i)
              : i.addEventListener("load", (o) => {
                  ps(n, o.target);
                });
          }),
          Su(n),
          (n.initialized = !0),
          Su(n),
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
          t !== !1 && ((r.el.swiper = null), u1(r)),
          (r.destroyed = !0)),
        null
      );
    }
    static extendDefaults(t) {
      Xe(Eu, t);
    }
    static get extendedDefaults() {
      return Eu;
    }
    static get defaults() {
      return uh;
    }
    static installModule(t) {
      Yt.prototype.__modules__ || (Yt.prototype.__modules__ = []);
      const n = Yt.prototype.__modules__;
      typeof t == "function" && n.indexOf(t) < 0 && n.push(t);
    }
    static use(t) {
      return Array.isArray(t)
        ? (t.forEach((n) => Yt.installModule(n)), Yt)
        : (Yt.installModule(t), Yt);
    }
  };
  Object.keys(xu).forEach((e) => {
    Object.keys(xu[e]).forEach((t) => {
      Ci.prototype[t] = xu[e][t];
    });
  }),
    Ci.use([E1, T1]);
  const ch = [
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
  function Dn(e) {
    return (
      typeof e == "object" &&
      e !== null &&
      e.constructor &&
      Object.prototype.toString.call(e).slice(8, -1) === "Object"
    );
  }
  function vn(e, t) {
    const n = ["__proto__", "constructor", "prototype"];
    Object.keys(t)
      .filter((r) => n.indexOf(r) < 0)
      .forEach((r) => {
        typeof e[r] > "u"
          ? (e[r] = t[r])
          : Dn(t[r]) && Dn(e[r]) && Object.keys(t[r]).length > 0
          ? t[r].__swiper__
            ? (e[r] = t[r])
            : vn(e[r], t[r])
          : (e[r] = t[r]);
      });
  }
  function dh(e) {
    return (
      e === void 0 && (e = {}),
      e.navigation &&
        typeof e.navigation.nextEl > "u" &&
        typeof e.navigation.prevEl > "u"
    );
  }
  function fh(e) {
    return (
      e === void 0 && (e = {}), e.pagination && typeof e.pagination.el > "u"
    );
  }
  function ph(e) {
    return e === void 0 && (e = {}), e.scrollbar && typeof e.scrollbar.el > "u";
  }
  function hh(e) {
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
  function _y(e) {
    return (
      e === void 0 && (e = ""),
      e
        ? e.includes("swiper-wrapper")
          ? e
          : `swiper-wrapper ${e}`
        : "swiper-wrapper"
    );
  }
  function Ly(e) {
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
        (O) => O !== "children" && O !== "direction" && O !== "wrapperClass"
      ),
      {
        params: c,
        pagination: d,
        navigation: p,
        scrollbar: h,
        virtual: v,
        thumbs: y,
      } = t;
    let k, f, m, g, w, S, T, x;
    i.includes("thumbs") &&
      r.thumbs &&
      r.thumbs.swiper &&
      c.thumbs &&
      !c.thumbs.swiper &&
      (k = !0),
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
        (g = !0),
      i.includes("navigation") &&
        r.navigation &&
        (r.navigation.prevEl || s) &&
        (r.navigation.nextEl || o) &&
        (c.navigation || c.navigation === !1) &&
        p &&
        !p.prevEl &&
        !p.nextEl &&
        (w = !0);
    const _ = (O) => {
      t[O] &&
        (t[O].destroy(),
        O === "navigation"
          ? (t.isElement && (t[O].prevEl.remove(), t[O].nextEl.remove()),
            (c[O].prevEl = void 0),
            (c[O].nextEl = void 0),
            (t[O].prevEl = void 0),
            (t[O].nextEl = void 0))
          : (t.isElement && t[O].el.remove(),
            (c[O].el = void 0),
            (t[O].el = void 0)));
    };
    i.includes("loop") &&
      t.isElement &&
      (c.loop && !r.loop ? (S = !0) : !c.loop && r.loop ? (T = !0) : (x = !0)),
      u.forEach((O) => {
        if (Dn(c[O]) && Dn(r[O]))
          vn(c[O], r[O]),
            (O === "navigation" || O === "pagination" || O === "scrollbar") &&
              "enabled" in r[O] &&
              !r[O].enabled &&
              _(O);
        else {
          const b = r[O];
          (b === !0 || b === !1) &&
          (O === "navigation" || O === "pagination" || O === "scrollbar")
            ? b === !1 && _(O)
            : (c[O] = r[O]);
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
        v &&
        c.virtual.enabled &&
        ((v.slides = n), v.update(!0)),
      i.includes("children") && n && c.loop && (x = !0),
      k && y.init() && y.update(!0),
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
      g &&
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
      (S || x) && t.loopDestroy(),
      (T || x) && t.loopCreate(),
      t.update();
  }
  function Iy(e, t) {
    e === void 0 && (e = {}), t === void 0 && (t = !0);
    const n = { on: {} },
      r = {},
      i = {};
    vn(n, Ci.defaults),
      vn(n, Ci.extendedDefaults),
      (n._emitClasses = !0),
      (n.init = !1);
    const o = {},
      s = ch.map((a) => a.replace(/_/, "")),
      l = Object.assign({}, e);
    return (
      Object.keys(l).forEach((a) => {
        typeof e[a] > "u" ||
          (s.indexOf(a) >= 0
            ? Dn(e[a])
              ? ((n[a] = {}), (i[a] = {}), vn(n[a], e[a]), vn(i[a], e[a]))
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
  function My(e, t) {
    let {
      el: n,
      nextEl: r,
      prevEl: i,
      paginationEl: o,
      scrollbarEl: s,
      swiper: l,
    } = e;
    dh(t) &&
      r &&
      i &&
      ((l.params.navigation.nextEl = r),
      (l.originalParams.navigation.nextEl = r),
      (l.params.navigation.prevEl = i),
      (l.originalParams.navigation.prevEl = i)),
      fh(t) &&
        o &&
        ((l.params.pagination.el = o), (l.originalParams.pagination.el = o)),
      ph(t) &&
        s &&
        ((l.params.scrollbar.el = s), (l.originalParams.scrollbar.el = s)),
      l.init(n);
  }
  function Ny(e, t, n, r, i) {
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
      ch
        .filter((a) => a[0] === "_")
        .map((a) => a.replace(/_/, ""))
        .forEach((a) => {
          if (a in e && a in t)
            if (Dn(e[a]) && Dn(t[a])) {
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
  const Ry = (e) => {
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
  function hs() {
    return (
      (hs = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
      hs.apply(this, arguments)
    );
  }
  function mh(e) {
    return (
      e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
    );
  }
  function gh(e) {
    const t = [];
    return (
      Q.Children.toArray(e).forEach((n) => {
        mh(n)
          ? t.push(n)
          : n.props &&
            n.props.children &&
            gh(n.props.children).forEach((r) => t.push(r));
      }),
      t
    );
  }
  function zy(e) {
    const t = [],
      n = {
        "container-start": [],
        "container-end": [],
        "wrapper-start": [],
        "wrapper-end": [],
      };
    return (
      Q.Children.toArray(e).forEach((r) => {
        if (mh(r)) t.push(r);
        else if (r.props && r.props.slot && n[r.props.slot])
          n[r.props.slot].push(r);
        else if (r.props && r.props.children) {
          const i = gh(r.props.children);
          i.length > 0
            ? i.forEach((o) => t.push(o))
            : n["container-end"].push(r);
        } else n["container-end"].push(r);
      }),
      { slides: t, slots: n }
    );
  }
  function Ay(e, t, n) {
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
      Q.cloneElement(c, { swiper: e, style: i, key: `slide-${d}` })
    );
  }
  function ki(e, t) {
    return typeof window > "u" ? R.useEffect(e, t) : R.useLayoutEffect(e, t);
  }
  const vh = R.createContext(null),
    $y = R.createContext(null),
    Tu = R.forwardRef(function (e, t) {
      let {
          className: n,
          tag: r = "div",
          wrapperTag: i = "div",
          children: o,
          onSwiper: s,
          ...l
        } = e === void 0 ? {} : e,
        a = !1;
      const [u, c] = R.useState("swiper"),
        [d, p] = R.useState(null),
        [h, v] = R.useState(!1),
        y = R.useRef(!1),
        k = R.useRef(null),
        f = R.useRef(null),
        m = R.useRef(null),
        g = R.useRef(null),
        w = R.useRef(null),
        S = R.useRef(null),
        T = R.useRef(null),
        x = R.useRef(null),
        { params: _, passedParams: O, rest: b, events: M } = Iy(l),
        { slides: j, slots: B } = zy(o),
        pe = () => {
          v(!h);
        };
      Object.assign(_.on, {
        _containerClasses(A, D) {
          c(D);
        },
      });
      const dt = () => {
        Object.assign(_.on, M), (a = !0);
        const A = { ..._ };
        if (
          (delete A.wrapperClass,
          (f.current = new Ci(A)),
          f.current.virtual && f.current.params.virtual.enabled)
        ) {
          f.current.virtual.slides = j;
          const D = {
            cache: !1,
            slides: j,
            renderExternal: p,
            renderExternalUpdate: !1,
          };
          vn(f.current.params.virtual, D),
            vn(f.current.originalParams.virtual, D);
        }
      };
      k.current || dt(), f.current && f.current.on("_beforeBreakpoint", pe);
      const Ze = () => {
          a ||
            !M ||
            !f.current ||
            Object.keys(M).forEach((A) => {
              f.current.on(A, M[A]);
            });
        },
        Me = () => {
          !M ||
            !f.current ||
            Object.keys(M).forEach((A) => {
              f.current.off(A, M[A]);
            });
        };
      R.useEffect(() => () => {
        f.current && f.current.off("_beforeBreakpoint", pe);
      }),
        R.useEffect(() => {
          !y.current &&
            f.current &&
            (f.current.emitSlidesClasses(), (y.current = !0));
        }),
        ki(() => {
          if ((t && (t.current = k.current), !!k.current))
            return (
              f.current.destroyed && dt(),
              My(
                {
                  el: k.current,
                  nextEl: w.current,
                  prevEl: S.current,
                  paginationEl: T.current,
                  scrollbarEl: x.current,
                  swiper: f.current,
                },
                _
              ),
              s && s(f.current),
              () => {
                f.current && !f.current.destroyed && f.current.destroy(!0, !1);
              }
            );
        }, []),
        ki(() => {
          Ze();
          const A = Ny(O, m.current, j, g.current, (D) => D.key);
          return (
            (m.current = O),
            (g.current = j),
            A.length &&
              f.current &&
              !f.current.destroyed &&
              Ly({
                swiper: f.current,
                slides: j,
                passedParams: O,
                changedParams: A,
                nextEl: w.current,
                prevEl: S.current,
                scrollbarEl: x.current,
                paginationEl: T.current,
              }),
            () => {
              Me();
            }
          );
        }),
        ki(() => {
          Ry(f.current);
        }, [d]);
      function N() {
        return _.virtual
          ? Ay(f.current, j, d)
          : j.map((A, D) =>
              Q.cloneElement(A, { swiper: f.current, swiperSlideIndex: D })
            );
      }
      return Q.createElement(
        r,
        hs({ ref: k, className: hh(`${u}${n ? ` ${n}` : ""}`) }, b),
        Q.createElement(
          $y.Provider,
          { value: f.current },
          B["container-start"],
          Q.createElement(
            i,
            { className: _y(_.wrapperClass) },
            B["wrapper-start"],
            N(),
            B["wrapper-end"]
          ),
          dh(_) &&
            Q.createElement(
              Q.Fragment,
              null,
              Q.createElement("div", {
                ref: S,
                className: "swiper-button-prev",
              }),
              Q.createElement("div", {
                ref: w,
                className: "swiper-button-next",
              })
            ),
          ph(_) &&
            Q.createElement("div", { ref: x, className: "swiper-scrollbar" }),
          fh(_) &&
            Q.createElement("div", { ref: T, className: "swiper-pagination" }),
          B["container-end"]
        )
      );
    });
  Tu.displayName = "Swiper";
  const Cu = R.forwardRef(function (e, t) {
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
    const d = R.useRef(null),
      [p, h] = R.useState("swiper-slide"),
      [v, y] = R.useState(!1);
    function k(w, S, T) {
      S === d.current && h(T);
    }
    ki(() => {
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
          o.on("_slideClass", k),
          () => {
            o && o.off("_slideClass", k);
          }
        );
      }
    }),
      ki(() => {
        o && d.current && !o.destroyed && h(o.getSlideClasses(d.current));
      }, [o]);
    const f = {
        isActive: p.indexOf("swiper-slide-active") >= 0,
        isVisible: p.indexOf("swiper-slide-visible") >= 0,
        isPrev: p.indexOf("swiper-slide-prev") >= 0,
        isNext: p.indexOf("swiper-slide-next") >= 0,
      },
      m = () => (typeof r == "function" ? r(f) : r),
      g = () => {
        y(!0);
      };
    return Q.createElement(
      n,
      hs(
        {
          ref: d,
          className: hh(`${p}${i ? ` ${i}` : ""}`),
          "data-swiper-slide-index": a,
          onLoad: g,
        },
        c
      ),
      s &&
        Q.createElement(
          vh.Provider,
          { value: f },
          Q.createElement(
            "div",
            {
              className: "swiper-zoom-container",
              "data-swiper-zoom": typeof s == "number" ? s : void 0,
            },
            m(),
            l &&
              !v &&
              Q.createElement("div", { className: "swiper-lazy-preloader" })
          )
        ),
      !s &&
        Q.createElement(
          vh.Provider,
          { value: f },
          m(),
          l &&
            !v &&
            Q.createElement("div", { className: "swiper-lazy-preloader" })
        )
    );
  });
  Cu.displayName = "SwiperSlide";
  function yh(e, t) {
    return function () {
      return e.apply(t, arguments);
    };
  }
  const { toString: jy } = Object.prototype,
    { getPrototypeOf: ku } = Object,
    ms = ((e) => (t) => {
      const n = jy.call(t);
      return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
    })(Object.create(null)),
    _t = (e) => ((e = e.toLowerCase()), (t) => ms(t) === e),
    gs = (e) => (t) => typeof t === e,
    { isArray: Tr } = Array,
    Pi = gs("undefined");
  function Dy(e) {
    return (
      e !== null &&
      !Pi(e) &&
      e.constructor !== null &&
      !Pi(e.constructor) &&
      ct(e.constructor.isBuffer) &&
      e.constructor.isBuffer(e)
    );
  }
  const wh = _t("ArrayBuffer");
  function by(e) {
    let t;
    return (
      typeof ArrayBuffer < "u" && ArrayBuffer.isView
        ? (t = ArrayBuffer.isView(e))
        : (t = e && e.buffer && wh(e.buffer)),
      t
    );
  }
  const Fy = gs("string"),
    ct = gs("function"),
    Sh = gs("number"),
    vs = (e) => e !== null && typeof e == "object",
    By = (e) => e === !0 || e === !1,
    ys = (e) => {
      if (ms(e) !== "object") return !1;
      const t = ku(e);
      return (
        (t === null ||
          t === Object.prototype ||
          Object.getPrototypeOf(t) === null) &&
        !(Symbol.toStringTag in e) &&
        !(Symbol.iterator in e)
      );
    },
    Vy = _t("Date"),
    Uy = _t("File"),
    Hy = _t("Blob"),
    Wy = _t("FileList"),
    Gy = (e) => vs(e) && ct(e.pipe),
    Yy = (e) => {
      let t;
      return (
        e &&
        ((typeof FormData == "function" && e instanceof FormData) ||
          (ct(e.append) &&
            ((t = ms(e)) === "formdata" ||
              (t === "object" &&
                ct(e.toString) &&
                e.toString() === "[object FormData]"))))
      );
    },
    Ky = _t("URLSearchParams"),
    Qy = (e) =>
      e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  function Oi(e, t, { allOwnKeys: n = !1 } = {}) {
    if (e === null || typeof e > "u") return;
    let r, i;
    if ((typeof e != "object" && (e = [e]), Tr(e)))
      for (r = 0, i = e.length; r < i; r++) t.call(null, e[r], r, e);
    else {
      const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
        s = o.length;
      let l;
      for (r = 0; r < s; r++) (l = o[r]), t.call(null, e[l], l, e);
    }
  }
  function xh(e, t) {
    t = t.toLowerCase();
    const n = Object.keys(e);
    let r = n.length,
      i;
    for (; r-- > 0; ) if (((i = n[r]), t === i.toLowerCase())) return i;
    return null;
  }
  const Eh = (() =>
      typeof globalThis < "u"
        ? globalThis
        : typeof self < "u"
        ? self
        : typeof window < "u"
        ? window
        : global)(),
    Th = (e) => !Pi(e) && e !== Eh;
  function Pu() {
    const { caseless: e } = (Th(this) && this) || {},
      t = {},
      n = (r, i) => {
        const o = (e && xh(t, i)) || i;
        ys(t[o]) && ys(r)
          ? (t[o] = Pu(t[o], r))
          : ys(r)
          ? (t[o] = Pu({}, r))
          : Tr(r)
          ? (t[o] = r.slice())
          : (t[o] = r);
      };
    for (let r = 0, i = arguments.length; r < i; r++)
      arguments[r] && Oi(arguments[r], n);
    return t;
  }
  const Xy = (e, t, n, { allOwnKeys: r } = {}) => (
      Oi(
        t,
        (i, o) => {
          n && ct(i) ? (e[o] = yh(i, n)) : (e[o] = i);
        },
        { allOwnKeys: r }
      ),
      e
    ),
    qy = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
    Jy = (e, t, n, r) => {
      (e.prototype = Object.create(t.prototype, r)),
        (e.prototype.constructor = e),
        Object.defineProperty(e, "super", { value: t.prototype }),
        n && Object.assign(e.prototype, n);
    },
    Zy = (e, t, n, r) => {
      let i, o, s;
      const l = {};
      if (((t = t || {}), e == null)) return t;
      do {
        for (i = Object.getOwnPropertyNames(e), o = i.length; o-- > 0; )
          (s = i[o]),
            (!r || r(s, e, t)) && !l[s] && ((t[s] = e[s]), (l[s] = !0));
        e = n !== !1 && ku(e);
      } while (e && (!n || n(e, t)) && e !== Object.prototype);
      return t;
    },
    ew = (e, t, n) => {
      (e = String(e)),
        (n === void 0 || n > e.length) && (n = e.length),
        (n -= t.length);
      const r = e.indexOf(t, n);
      return r !== -1 && r === n;
    },
    tw = (e) => {
      if (!e) return null;
      if (Tr(e)) return e;
      let t = e.length;
      if (!Sh(t)) return null;
      const n = new Array(t);
      for (; t-- > 0; ) n[t] = e[t];
      return n;
    },
    nw = (
      (e) => (t) =>
        e && t instanceof e
    )(typeof Uint8Array < "u" && ku(Uint8Array)),
    rw = (e, t) => {
      const r = (e && e[Symbol.iterator]).call(e);
      let i;
      for (; (i = r.next()) && !i.done; ) {
        const o = i.value;
        t.call(e, o[0], o[1]);
      }
    },
    iw = (e, t) => {
      let n;
      const r = [];
      for (; (n = e.exec(t)) !== null; ) r.push(n);
      return r;
    },
    ow = _t("HTMLFormElement"),
    sw = (e) =>
      e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, i) {
        return r.toUpperCase() + i;
      }),
    Ch = (
      ({ hasOwnProperty: e }) =>
      (t, n) =>
        e.call(t, n)
    )(Object.prototype),
    lw = _t("RegExp"),
    kh = (e, t) => {
      const n = Object.getOwnPropertyDescriptors(e),
        r = {};
      Oi(n, (i, o) => {
        t(i, o, e) !== !1 && (r[o] = i);
      }),
        Object.defineProperties(e, r);
    },
    aw = (e) => {
      kh(e, (t, n) => {
        if (ct(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
          return !1;
        const r = e[n];
        if (ct(r)) {
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
    uw = (e, t) => {
      const n = {},
        r = (i) => {
          i.forEach((o) => {
            n[o] = !0;
          });
        };
      return Tr(e) ? r(e) : r(String(e).split(t)), n;
    },
    cw = () => {},
    dw = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
    Ou = "abcdefghijklmnopqrstuvwxyz",
    Ph = "0123456789",
    Oh = { DIGIT: Ph, ALPHA: Ou, ALPHA_DIGIT: Ou + Ou.toUpperCase() + Ph },
    fw = (e = 16, t = Oh.ALPHA_DIGIT) => {
      let n = "";
      const { length: r } = t;
      for (; e--; ) n += t[(Math.random() * r) | 0];
      return n;
    };
  function pw(e) {
    return !!(
      e &&
      ct(e.append) &&
      e[Symbol.toStringTag] === "FormData" &&
      e[Symbol.iterator]
    );
  }
  const hw = (e) => {
      const t = new Array(10),
        n = (r, i) => {
          if (vs(r)) {
            if (t.indexOf(r) >= 0) return;
            if (!("toJSON" in r)) {
              t[i] = r;
              const o = Tr(r) ? [] : {};
              return (
                Oi(r, (s, l) => {
                  const a = n(s, i + 1);
                  !Pi(a) && (o[l] = a);
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
    mw = _t("AsyncFunction"),
    C = {
      isArray: Tr,
      isArrayBuffer: wh,
      isBuffer: Dy,
      isFormData: Yy,
      isArrayBufferView: by,
      isString: Fy,
      isNumber: Sh,
      isBoolean: By,
      isObject: vs,
      isPlainObject: ys,
      isUndefined: Pi,
      isDate: Vy,
      isFile: Uy,
      isBlob: Hy,
      isRegExp: lw,
      isFunction: ct,
      isStream: Gy,
      isURLSearchParams: Ky,
      isTypedArray: nw,
      isFileList: Wy,
      forEach: Oi,
      merge: Pu,
      extend: Xy,
      trim: Qy,
      stripBOM: qy,
      inherits: Jy,
      toFlatObject: Zy,
      kindOf: ms,
      kindOfTest: _t,
      endsWith: ew,
      toArray: tw,
      forEachEntry: rw,
      matchAll: iw,
      isHTMLForm: ow,
      hasOwnProperty: Ch,
      hasOwnProp: Ch,
      reduceDescriptors: kh,
      freezeMethods: aw,
      toObjectSet: uw,
      toCamelCase: sw,
      noop: cw,
      toFiniteNumber: dw,
      findKey: xh,
      global: Eh,
      isContextDefined: Th,
      ALPHABET: Oh,
      generateString: fw,
      isSpecCompliantForm: pw,
      toJSONObject: hw,
      isAsyncFn: mw,
      isThenable: (e) => e && (vs(e) || ct(e)) && ct(e.then) && ct(e.catch),
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
  const _h = G.prototype,
    Lh = {};
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
    Lh[e] = { value: e };
  }),
    Object.defineProperties(G, Lh),
    Object.defineProperty(_h, "isAxiosError", { value: !0 }),
    (G.from = (e, t, n, r, i, o) => {
      const s = Object.create(_h);
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
  const gw = null;
  function _u(e) {
    return C.isPlainObject(e) || C.isArray(e);
  }
  function Ih(e) {
    return C.endsWith(e, "[]") ? e.slice(0, -2) : e;
  }
  function Mh(e, t, n) {
    return e
      ? e
          .concat(t)
          .map(function (i, o) {
            return (i = Ih(i)), !n && o ? "[" + i + "]" : i;
          })
          .join(n ? "." : "")
      : t;
  }
  function vw(e) {
    return C.isArray(e) && !e.some(_u);
  }
  const yw = C.toFlatObject(C, {}, null, function (t) {
    return /^is[A-Z]/.test(t);
  });
  function ws(e, t, n) {
    if (!C.isObject(e)) throw new TypeError("target must be an object");
    (t = t || new FormData()),
      (n = C.toFlatObject(
        n,
        { metaTokens: !0, dots: !1, indexes: !1 },
        !1,
        function (y, k) {
          return !C.isUndefined(k[y]);
        }
      ));
    const r = n.metaTokens,
      i = n.visitor || c,
      o = n.dots,
      s = n.indexes,
      a = (n.Blob || (typeof Blob < "u" && Blob)) && C.isSpecCompliantForm(t);
    if (!C.isFunction(i)) throw new TypeError("visitor must be a function");
    function u(v) {
      if (v === null) return "";
      if (C.isDate(v)) return v.toISOString();
      if (!a && C.isBlob(v))
        throw new G("Blob is not supported. Use a Buffer instead.");
      return C.isArrayBuffer(v) || C.isTypedArray(v)
        ? a && typeof Blob == "function"
          ? new Blob([v])
          : Buffer.from(v)
        : v;
    }
    function c(v, y, k) {
      let f = v;
      if (v && !k && typeof v == "object") {
        if (C.endsWith(y, "{}"))
          (y = r ? y : y.slice(0, -2)), (v = JSON.stringify(v));
        else if (
          (C.isArray(v) && vw(v)) ||
          ((C.isFileList(v) || C.endsWith(y, "[]")) && (f = C.toArray(v)))
        )
          return (
            (y = Ih(y)),
            f.forEach(function (g, w) {
              !(C.isUndefined(g) || g === null) &&
                t.append(
                  s === !0 ? Mh([y], w, o) : s === null ? y : y + "[]",
                  u(g)
                );
            }),
            !1
          );
      }
      return _u(v) ? !0 : (t.append(Mh(k, y, o), u(v)), !1);
    }
    const d = [],
      p = Object.assign(yw, {
        defaultVisitor: c,
        convertValue: u,
        isVisitable: _u,
      });
    function h(v, y) {
      if (!C.isUndefined(v)) {
        if (d.indexOf(v) !== -1)
          throw Error("Circular reference detected in " + y.join("."));
        d.push(v),
          C.forEach(v, function (f, m) {
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
  function Nh(e) {
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
  function Lu(e, t) {
    (this._pairs = []), e && ws(e, this, t);
  }
  const Rh = Lu.prototype;
  (Rh.append = function (t, n) {
    this._pairs.push([t, n]);
  }),
    (Rh.toString = function (t) {
      const n = t
        ? function (r) {
            return t.call(this, r, Nh);
          }
        : Nh;
      return this._pairs
        .map(function (i) {
          return n(i[0]) + "=" + n(i[1]);
        }, "")
        .join("&");
    });
  function ww(e) {
    return encodeURIComponent(e)
      .replace(/%3A/gi, ":")
      .replace(/%24/g, "$")
      .replace(/%2C/gi, ",")
      .replace(/%20/g, "+")
      .replace(/%5B/gi, "[")
      .replace(/%5D/gi, "]");
  }
  function zh(e, t, n) {
    if (!t) return e;
    const r = (n && n.encode) || ww,
      i = n && n.serialize;
    let o;
    if (
      (i
        ? (o = i(t, n))
        : (o = C.isURLSearchParams(t)
            ? t.toString()
            : new Lu(t, n).toString(r)),
      o)
    ) {
      const s = e.indexOf("#");
      s !== -1 && (e = e.slice(0, s)),
        (e += (e.indexOf("?") === -1 ? "?" : "&") + o);
    }
    return e;
  }
  class Sw {
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
  const Ah = Sw,
    $h = {
      silentJSONParsing: !0,
      forcedJSONParsing: !0,
      clarifyTimeoutError: !1,
    },
    xw = typeof URLSearchParams < "u" ? URLSearchParams : Lu,
    Ew = typeof FormData < "u" ? FormData : null,
    Tw = typeof Blob < "u" ? Blob : null,
    Cw = (() => {
      let e;
      return typeof navigator < "u" &&
        ((e = navigator.product) === "ReactNative" ||
          e === "NativeScript" ||
          e === "NS")
        ? !1
        : typeof window < "u" && typeof document < "u";
    })(),
    kw = (() =>
      typeof WorkerGlobalScope < "u" &&
      self instanceof WorkerGlobalScope &&
      typeof self.importScripts == "function")(),
    Lt = {
      isBrowser: !0,
      classes: { URLSearchParams: xw, FormData: Ew, Blob: Tw },
      isStandardBrowserEnv: Cw,
      isStandardBrowserWebWorkerEnv: kw,
      protocols: ["http", "https", "file", "blob", "url", "data"],
    };
  function Pw(e, t) {
    return ws(
      e,
      new Lt.classes.URLSearchParams(),
      Object.assign(
        {
          visitor: function (n, r, i, o) {
            return Lt.isNode && C.isBuffer(n)
              ? (this.append(r, n.toString("base64")), !1)
              : o.defaultVisitor.apply(this, arguments);
          },
        },
        t
      )
    );
  }
  function Ow(e) {
    return C.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
      t[0] === "[]" ? "" : t[1] || t[0]
    );
  }
  function _w(e) {
    const t = {},
      n = Object.keys(e);
    let r;
    const i = n.length;
    let o;
    for (r = 0; r < i; r++) (o = n[r]), (t[o] = e[o]);
    return t;
  }
  function jh(e) {
    function t(n, r, i, o) {
      let s = n[o++];
      const l = Number.isFinite(+s),
        a = o >= n.length;
      return (
        (s = !s && C.isArray(i) ? i.length : s),
        a
          ? (C.hasOwnProp(i, s) ? (i[s] = [i[s], r]) : (i[s] = r), !l)
          : ((!i[s] || !C.isObject(i[s])) && (i[s] = []),
            t(n, r, i[s], o) && C.isArray(i[s]) && (i[s] = _w(i[s])),
            !l)
      );
    }
    if (C.isFormData(e) && C.isFunction(e.entries)) {
      const n = {};
      return (
        C.forEachEntry(e, (r, i) => {
          t(Ow(r), i, n, 0);
        }),
        n
      );
    }
    return null;
  }
  const Lw = { "Content-Type": void 0 };
  function Iw(e, t, n) {
    if (C.isString(e))
      try {
        return (t || JSON.parse)(e), C.trim(e);
      } catch (r) {
        if (r.name !== "SyntaxError") throw r;
      }
    return (n || JSON.stringify)(e);
  }
  const Ss = {
    transitional: $h,
    adapter: ["xhr", "http"],
    transformRequest: [
      function (t, n) {
        const r = n.getContentType() || "",
          i = r.indexOf("application/json") > -1,
          o = C.isObject(t);
        if ((o && C.isHTMLForm(t) && (t = new FormData(t)), C.isFormData(t)))
          return i && i ? JSON.stringify(jh(t)) : t;
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
            return Pw(t, this.formSerializer).toString();
          if ((l = C.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
            const a = this.env && this.env.FormData;
            return ws(
              l ? { "files[]": t } : t,
              a && new a(),
              this.formSerializer
            );
          }
        }
        return o || i ? (n.setContentType("application/json", !1), Iw(t)) : t;
      },
    ],
    transformResponse: [
      function (t) {
        const n = this.transitional || Ss.transitional,
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
    env: { FormData: Lt.classes.FormData, Blob: Lt.classes.Blob },
    validateStatus: function (t) {
      return t >= 200 && t < 300;
    },
    headers: { common: { Accept: "application/json, text/plain, */*" } },
  };
  C.forEach(["delete", "get", "head"], function (t) {
    Ss.headers[t] = {};
  }),
    C.forEach(["post", "put", "patch"], function (t) {
      Ss.headers[t] = C.merge(Lw);
    });
  const Iu = Ss,
    Mw = C.toObjectSet([
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
    Nw = (e) => {
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
                !(!n || (t[n] && Mw[n])) &&
                  (n === "set-cookie"
                    ? t[n]
                      ? t[n].push(r)
                      : (t[n] = [r])
                    : (t[n] = t[n] ? t[n] + ", " + r : r));
            }),
        t
      );
    },
    Dh = Symbol("internals");
  function _i(e) {
    return e && String(e).trim().toLowerCase();
  }
  function xs(e) {
    return e === !1 || e == null ? e : C.isArray(e) ? e.map(xs) : String(e);
  }
  function Rw(e) {
    const t = Object.create(null),
      n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let r;
    for (; (r = n.exec(e)); ) t[r[1]] = r[2];
    return t;
  }
  const zw = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
  function Mu(e, t, n, r, i) {
    if (C.isFunction(r)) return r.call(this, t, n);
    if ((i && (t = n), !!C.isString(t))) {
      if (C.isString(r)) return t.indexOf(r) !== -1;
      if (C.isRegExp(r)) return r.test(t);
    }
  }
  function Aw(e) {
    return e
      .trim()
      .toLowerCase()
      .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
  }
  function $w(e, t) {
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
  class Es {
    constructor(t) {
      t && this.set(t);
    }
    set(t, n, r) {
      const i = this;
      function o(l, a, u) {
        const c = _i(a);
        if (!c) throw new Error("header name must be a non-empty string");
        const d = C.findKey(i, c);
        (!d || i[d] === void 0 || u === !0 || (u === void 0 && i[d] !== !1)) &&
          (i[d || a] = xs(l));
      }
      const s = (l, a) => C.forEach(l, (u, c) => o(u, c, a));
      return (
        C.isPlainObject(t) || t instanceof this.constructor
          ? s(t, n)
          : C.isString(t) && (t = t.trim()) && !zw(t)
          ? s(Nw(t), n)
          : t != null && o(n, t, r),
        this
      );
    }
    get(t, n) {
      if (((t = _i(t)), t)) {
        const r = C.findKey(this, t);
        if (r) {
          const i = this[r];
          if (!n) return i;
          if (n === !0) return Rw(i);
          if (C.isFunction(n)) return n.call(this, i, r);
          if (C.isRegExp(n)) return n.exec(i);
          throw new TypeError("parser must be boolean|regexp|function");
        }
      }
    }
    has(t, n) {
      if (((t = _i(t)), t)) {
        const r = C.findKey(this, t);
        return !!(r && this[r] !== void 0 && (!n || Mu(this, this[r], r, n)));
      }
      return !1;
    }
    delete(t, n) {
      const r = this;
      let i = !1;
      function o(s) {
        if (((s = _i(s)), s)) {
          const l = C.findKey(r, s);
          l && (!n || Mu(r, r[l], l, n)) && (delete r[l], (i = !0));
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
        (!t || Mu(this, this[o], o, t, !0)) && (delete this[o], (i = !0));
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
            (n[s] = xs(i)), delete n[o];
            return;
          }
          const l = t ? Aw(o) : String(o).trim();
          l !== o && delete n[o], (n[l] = xs(i)), (r[l] = !0);
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
      const r = (this[Dh] = this[Dh] = { accessors: {} }).accessors,
        i = this.prototype;
      function o(s) {
        const l = _i(s);
        r[l] || ($w(i, s), (r[l] = !0));
      }
      return C.isArray(t) ? t.forEach(o) : o(t), this;
    }
  }
  Es.accessor([
    "Content-Type",
    "Content-Length",
    "Accept",
    "Accept-Encoding",
    "User-Agent",
    "Authorization",
  ]),
    C.freezeMethods(Es.prototype),
    C.freezeMethods(Es);
  const Ht = Es;
  function Nu(e, t) {
    const n = this || Iu,
      r = t || n,
      i = Ht.from(r.headers);
    let o = r.data;
    return (
      C.forEach(e, function (l) {
        o = l.call(n, o, i.normalize(), t ? t.status : void 0);
      }),
      i.normalize(),
      o
    );
  }
  function bh(e) {
    return !!(e && e.__CANCEL__);
  }
  function Li(e, t, n) {
    G.call(this, e ?? "canceled", G.ERR_CANCELED, t, n),
      (this.name = "CanceledError");
  }
  C.inherits(Li, G, { __CANCEL__: !0 });
  function jw(e, t, n) {
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
  const Dw = Lt.isStandardBrowserEnv
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
  function bw(e) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
  }
  function Fw(e, t) {
    return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
  }
  function Fh(e, t) {
    return e && !bw(t) ? Fw(e, t) : t;
  }
  const Bw = Lt.isStandardBrowserEnv
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
  function Vw(e) {
    const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
    return (t && t[1]) || "";
  }
  function Uw(e, t) {
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
  function Bh(e, t) {
    let n = 0;
    const r = Uw(50, 250);
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
  const Ts = {
    http: gw,
    xhr:
      typeof XMLHttpRequest < "u" &&
      function (e) {
        return new Promise(function (n, r) {
          let i = e.data;
          const o = Ht.from(e.headers).normalize(),
            s = e.responseType;
          let l;
          function a() {
            e.cancelToken && e.cancelToken.unsubscribe(l),
              e.signal && e.signal.removeEventListener("abort", l);
          }
          C.isFormData(i) &&
            (Lt.isStandardBrowserEnv || Lt.isStandardBrowserWebWorkerEnv
              ? o.setContentType(!1)
              : o.setContentType("multipart/form-data;", !1));
          let u = new XMLHttpRequest();
          if (e.auth) {
            const h = e.auth.username || "",
              v = e.auth.password
                ? unescape(encodeURIComponent(e.auth.password))
                : "";
            o.set("Authorization", "Basic " + btoa(h + ":" + v));
          }
          const c = Fh(e.baseURL, e.url);
          u.open(
            e.method.toUpperCase(),
            zh(c, e.params, e.paramsSerializer),
            !0
          ),
            (u.timeout = e.timeout);
          function d() {
            if (!u) return;
            const h = Ht.from(
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
            jw(
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
              let v = e.timeout
                ? "timeout of " + e.timeout + "ms exceeded"
                : "timeout exceeded";
              const y = e.transitional || $h;
              e.timeoutErrorMessage && (v = e.timeoutErrorMessage),
                r(
                  new G(
                    v,
                    y.clarifyTimeoutError ? G.ETIMEDOUT : G.ECONNABORTED,
                    e,
                    u
                  )
                ),
                (u = null);
            }),
            Lt.isStandardBrowserEnv)
          ) {
            const h =
              (e.withCredentials || Bw(c)) &&
              e.xsrfCookieName &&
              Dw.read(e.xsrfCookieName);
            h && o.set(e.xsrfHeaderName, h);
          }
          i === void 0 && o.setContentType(null),
            "setRequestHeader" in u &&
              C.forEach(o.toJSON(), function (v, y) {
                u.setRequestHeader(y, v);
              }),
            C.isUndefined(e.withCredentials) ||
              (u.withCredentials = !!e.withCredentials),
            s && s !== "json" && (u.responseType = e.responseType),
            typeof e.onDownloadProgress == "function" &&
              u.addEventListener("progress", Bh(e.onDownloadProgress, !0)),
            typeof e.onUploadProgress == "function" &&
              u.upload &&
              u.upload.addEventListener("progress", Bh(e.onUploadProgress)),
            (e.cancelToken || e.signal) &&
              ((l = (h) => {
                u &&
                  (r(!h || h.type ? new Li(null, e, u) : h),
                  u.abort(),
                  (u = null));
              }),
              e.cancelToken && e.cancelToken.subscribe(l),
              e.signal &&
                (e.signal.aborted
                  ? l()
                  : e.signal.addEventListener("abort", l)));
          const p = Vw(c);
          if (p && Lt.protocols.indexOf(p) === -1) {
            r(new G("Unsupported protocol " + p + ":", G.ERR_BAD_REQUEST, e));
            return;
          }
          u.send(i || null);
        });
      },
  };
  C.forEach(Ts, (e, t) => {
    if (e) {
      try {
        Object.defineProperty(e, "name", { value: t });
      } catch {}
      Object.defineProperty(e, "adapterName", { value: t });
    }
  });
  const Hw = {
    getAdapter: (e) => {
      e = C.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      for (
        let i = 0;
        i < t && ((n = e[i]), !(r = C.isString(n) ? Ts[n.toLowerCase()] : n));
        i++
      );
      if (!r)
        throw r === !1
          ? new G(
              `Adapter ${n} is not supported by the environment`,
              "ERR_NOT_SUPPORT"
            )
          : new Error(
              C.hasOwnProp(Ts, n)
                ? `Adapter '${n}' is not available in the build`
                : `Unknown adapter '${n}'`
            );
      if (!C.isFunction(r)) throw new TypeError("adapter is not a function");
      return r;
    },
    adapters: Ts,
  };
  function Ru(e) {
    if (
      (e.cancelToken && e.cancelToken.throwIfRequested(),
      e.signal && e.signal.aborted)
    )
      throw new Li(null, e);
  }
  function Vh(e) {
    return (
      Ru(e),
      (e.headers = Ht.from(e.headers)),
      (e.data = Nu.call(e, e.transformRequest)),
      ["post", "put", "patch"].indexOf(e.method) !== -1 &&
        e.headers.setContentType("application/x-www-form-urlencoded", !1),
      Hw.getAdapter(e.adapter || Iu.adapter)(e).then(
        function (r) {
          return (
            Ru(e),
            (r.data = Nu.call(e, e.transformResponse, r)),
            (r.headers = Ht.from(r.headers)),
            r
          );
        },
        function (r) {
          return (
            bh(r) ||
              (Ru(e),
              r &&
                r.response &&
                ((r.response.data = Nu.call(
                  e,
                  e.transformResponse,
                  r.response
                )),
                (r.response.headers = Ht.from(r.response.headers)))),
            Promise.reject(r)
          );
        }
      )
    );
  }
  const Uh = (e) => (e instanceof Ht ? e.toJSON() : e);
  function Cr(e, t) {
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
      headers: (u, c) => i(Uh(u), Uh(c), !0),
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
  const Hh = "1.4.0",
    zu = {};
  ["object", "boolean", "number", "function", "string", "symbol"].forEach(
    (e, t) => {
      zu[e] = function (r) {
        return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
      };
    }
  );
  const Wh = {};
  zu.transitional = function (t, n, r) {
    function i(o, s) {
      return (
        "[Axios v" +
        Hh +
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
          !Wh[s] &&
          ((Wh[s] = !0),
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
  function Ww(e, t, n) {
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
  const Au = { assertOptions: Ww, validators: zu },
    yn = Au.validators;
  class Cs {
    constructor(t) {
      (this.defaults = t),
        (this.interceptors = { request: new Ah(), response: new Ah() });
    }
    request(t, n) {
      typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
        (n = Cr(this.defaults, n));
      const { transitional: r, paramsSerializer: i, headers: o } = n;
      r !== void 0 &&
        Au.assertOptions(
          r,
          {
            silentJSONParsing: yn.transitional(yn.boolean),
            forcedJSONParsing: yn.transitional(yn.boolean),
            clarifyTimeoutError: yn.transitional(yn.boolean),
          },
          !1
        ),
        i != null &&
          (C.isFunction(i)
            ? (n.paramsSerializer = { serialize: i })
            : Au.assertOptions(
                i,
                { encode: yn.function, serialize: yn.function },
                !0
              )),
        (n.method = (n.method || this.defaults.method || "get").toLowerCase());
      let s;
      (s = o && C.merge(o.common, o[n.method])),
        s &&
          C.forEach(
            ["delete", "get", "head", "post", "put", "patch", "common"],
            (v) => {
              delete o[v];
            }
          ),
        (n.headers = Ht.concat(s, o));
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
        const v = [Vh.bind(this), void 0];
        for (
          v.unshift.apply(v, l),
            v.push.apply(v, u),
            p = v.length,
            c = Promise.resolve(n);
          d < p;

        )
          c = c.then(v[d++], v[d++]);
        return c;
      }
      p = l.length;
      let h = n;
      for (d = 0; d < p; ) {
        const v = l[d++],
          y = l[d++];
        try {
          h = v(h);
        } catch (k) {
          y.call(this, k);
          break;
        }
      }
      try {
        c = Vh.call(this, h);
      } catch (v) {
        return Promise.reject(v);
      }
      for (d = 0, p = u.length; d < p; ) c = c.then(u[d++], u[d++]);
      return c;
    }
    getUri(t) {
      t = Cr(this.defaults, t);
      const n = Fh(t.baseURL, t.url);
      return zh(n, t.params, t.paramsSerializer);
    }
  }
  C.forEach(["delete", "get", "head", "options"], function (t) {
    Cs.prototype[t] = function (n, r) {
      return this.request(
        Cr(r || {}, { method: t, url: n, data: (r || {}).data })
      );
    };
  }),
    C.forEach(["post", "put", "patch"], function (t) {
      function n(r) {
        return function (o, s, l) {
          return this.request(
            Cr(l || {}, {
              method: t,
              headers: r ? { "Content-Type": "multipart/form-data" } : {},
              url: o,
              data: s,
            })
          );
        };
      }
      (Cs.prototype[t] = n()), (Cs.prototype[t + "Form"] = n(!0));
    });
  const ks = Cs;
  class $u {
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
          r.reason || ((r.reason = new Li(o, s, l)), n(r.reason));
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
        token: new $u(function (i) {
          t = i;
        }),
        cancel: t,
      };
    }
  }
  const Gw = $u;
  function Yw(e) {
    return function (n) {
      return e.apply(null, n);
    };
  }
  function Kw(e) {
    return C.isObject(e) && e.isAxiosError === !0;
  }
  const ju = {
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
  Object.entries(ju).forEach(([e, t]) => {
    ju[t] = e;
  });
  const Qw = ju;
  function Gh(e) {
    const t = new ks(e),
      n = yh(ks.prototype.request, t);
    return (
      C.extend(n, ks.prototype, t, { allOwnKeys: !0 }),
      C.extend(n, t, null, { allOwnKeys: !0 }),
      (n.create = function (i) {
        return Gh(Cr(e, i));
      }),
      n
    );
  }
  const ge = Gh(Iu);
  (ge.Axios = ks),
    (ge.CanceledError = Li),
    (ge.CancelToken = Gw),
    (ge.isCancel = bh),
    (ge.VERSION = Hh),
    (ge.toFormData = ws),
    (ge.AxiosError = G),
    (ge.Cancel = ge.CanceledError),
    (ge.all = function (t) {
      return Promise.all(t);
    }),
    (ge.spread = Yw),
    (ge.isAxiosError = Kw),
    (ge.mergeConfig = Cr),
    (ge.AxiosHeaders = Ht),
    (ge.formToJSON = (e) => jh(C.isHTMLForm(e) ? new FormData(e) : e)),
    (ge.HttpStatusCode = Qw),
    (ge.default = ge);
  const Yh = ge,
    Kh = "https://subscriptions.paxify.io";
  async function Xw(e) {
    const t = `${Kh}/firebase/tracking`;
    return Yh.post(t, e)
      .then((n) => n.data)
      .then((n) => Promise.resolve(n))
      .catch((n) => {
        const r = n.result;
        return Promise.reject(r);
      });
  }
  async function qw(e, t) {
    return Yh.post(`${Kh}/firebase/update-resources`, {
      accessKey: e,
      componentCount: t,
    })
      .then((n) => Promise.resolve(n))
      .catch((n) => {
        const r = n.result;
        return Promise.reject(r);
      });
  }
  var qe = ((e) => (
    (e.INITIALIZED = "reels_init"),
    (e.SLIDE_VIEWED = "reels_slide_viewed"),
    (e.REELS_OPENED = "reels_opened"),
    (e.REELS_CLOSED = "reels_closed"),
    (e.STORY_VIEWED = "reels_story_viewed"),
    (e.INTERACTED = "reels_interacted"),
    e
  ))(qe || {});
  function Jw(e) {
    var t = Object.create(null);
    return function (n) {
      return t[n] === void 0 && (t[n] = e(n)), t[n];
    };
  }
  var Qh = { exports: {} },
    q = {};
  /** @license React v16.13.1
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var xe = typeof Symbol == "function" && Symbol.for,
    Du = xe ? Symbol.for("react.element") : 60103,
    bu = xe ? Symbol.for("react.portal") : 60106,
    Ps = xe ? Symbol.for("react.fragment") : 60107,
    Os = xe ? Symbol.for("react.strict_mode") : 60108,
    _s = xe ? Symbol.for("react.profiler") : 60114,
    Ls = xe ? Symbol.for("react.provider") : 60109,
    Is = xe ? Symbol.for("react.context") : 60110,
    Fu = xe ? Symbol.for("react.async_mode") : 60111,
    Ms = xe ? Symbol.for("react.concurrent_mode") : 60111,
    Ns = xe ? Symbol.for("react.forward_ref") : 60112,
    Rs = xe ? Symbol.for("react.suspense") : 60113,
    Zw = xe ? Symbol.for("react.suspense_list") : 60120,
    zs = xe ? Symbol.for("react.memo") : 60115,
    As = xe ? Symbol.for("react.lazy") : 60116,
    eS = xe ? Symbol.for("react.block") : 60121,
    tS = xe ? Symbol.for("react.fundamental") : 60117,
    nS = xe ? Symbol.for("react.responder") : 60118,
    rS = xe ? Symbol.for("react.scope") : 60119;
  function Je(e) {
    if (typeof e == "object" && e !== null) {
      var t = e.$$typeof;
      switch (t) {
        case Du:
          switch (((e = e.type), e)) {
            case Fu:
            case Ms:
            case Ps:
            case _s:
            case Os:
            case Rs:
              return e;
            default:
              switch (((e = e && e.$$typeof), e)) {
                case Is:
                case Ns:
                case As:
                case zs:
                case Ls:
                  return e;
                default:
                  return t;
              }
          }
        case bu:
          return t;
      }
    }
  }
  function Xh(e) {
    return Je(e) === Ms;
  }
  (q.AsyncMode = Fu),
    (q.ConcurrentMode = Ms),
    (q.ContextConsumer = Is),
    (q.ContextProvider = Ls),
    (q.Element = Du),
    (q.ForwardRef = Ns),
    (q.Fragment = Ps),
    (q.Lazy = As),
    (q.Memo = zs),
    (q.Portal = bu),
    (q.Profiler = _s),
    (q.StrictMode = Os),
    (q.Suspense = Rs),
    (q.isAsyncMode = function (e) {
      return Xh(e) || Je(e) === Fu;
    }),
    (q.isConcurrentMode = Xh),
    (q.isContextConsumer = function (e) {
      return Je(e) === Is;
    }),
    (q.isContextProvider = function (e) {
      return Je(e) === Ls;
    }),
    (q.isElement = function (e) {
      return typeof e == "object" && e !== null && e.$$typeof === Du;
    }),
    (q.isForwardRef = function (e) {
      return Je(e) === Ns;
    }),
    (q.isFragment = function (e) {
      return Je(e) === Ps;
    }),
    (q.isLazy = function (e) {
      return Je(e) === As;
    }),
    (q.isMemo = function (e) {
      return Je(e) === zs;
    }),
    (q.isPortal = function (e) {
      return Je(e) === bu;
    }),
    (q.isProfiler = function (e) {
      return Je(e) === _s;
    }),
    (q.isStrictMode = function (e) {
      return Je(e) === Os;
    }),
    (q.isSuspense = function (e) {
      return Je(e) === Rs;
    }),
    (q.isValidElementType = function (e) {
      return (
        typeof e == "string" ||
        typeof e == "function" ||
        e === Ps ||
        e === Ms ||
        e === _s ||
        e === Os ||
        e === Rs ||
        e === Zw ||
        (typeof e == "object" &&
          e !== null &&
          (e.$$typeof === As ||
            e.$$typeof === zs ||
            e.$$typeof === Ls ||
            e.$$typeof === Is ||
            e.$$typeof === Ns ||
            e.$$typeof === tS ||
            e.$$typeof === nS ||
            e.$$typeof === rS ||
            e.$$typeof === eS))
      );
    }),
    (q.typeOf = Je),
    (Qh.exports = q);
  var iS = Qh.exports,
    qh = iS,
    oS = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    },
    sS = {
      $$typeof: !0,
      compare: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
      type: !0,
    },
    Jh = {};
  (Jh[qh.ForwardRef] = oS), (Jh[qh.Memo] = sS);
  function lS(e) {
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
  var aS = /[A-Z]|^ms/g,
    uS = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
    Zh = function (t) {
      return t.charCodeAt(1) === 45;
    },
    em = function (t) {
      return t != null && typeof t != "boolean";
    },
    Bu = Jw(function (e) {
      return Zh(e) ? e : e.replace(aS, "-$&").toLowerCase();
    }),
    tm = function (t, n) {
      switch (t) {
        case "animation":
        case "animationName":
          if (typeof n == "string")
            return n.replace(uS, function (r, i, o) {
              return (It = { name: i, styles: o, next: It }), i;
            });
      }
      return kp[t] !== 1 && !Zh(t) && typeof n == "number" && n !== 0
        ? n + "px"
        : n;
    },
    Hx =
      "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
  function Ii(e, t, n) {
    if (n == null) return "";
    if (n.__emotion_styles !== void 0) return n;
    switch (typeof n) {
      case "boolean":
        return "";
      case "object": {
        if (n.anim === 1)
          return (It = { name: n.name, styles: n.styles, next: It }), n.name;
        if (n.styles !== void 0) {
          var r = n.next;
          if (r !== void 0)
            for (; r !== void 0; )
              (It = { name: r.name, styles: r.styles, next: It }), (r = r.next);
          var i = n.styles + ";";
          return i;
        }
        return cS(e, t, n);
      }
      case "function": {
        if (e !== void 0) {
          var o = It,
            s = n(e);
          return (It = o), Ii(e, t, s);
        }
        break;
      }
    }
    if (t == null) return n;
    var l = t[n];
    return l !== void 0 ? l : n;
  }
  function cS(e, t, n) {
    var r = "";
    if (Array.isArray(n))
      for (var i = 0; i < n.length; i++) r += Ii(e, t, n[i]) + ";";
    else
      for (var o in n) {
        var s = n[o];
        if (typeof s != "object")
          t != null && t[s] !== void 0
            ? (r += o + "{" + t[s] + "}")
            : em(s) && (r += Bu(o) + ":" + tm(o, s) + ";");
        else if (
          Array.isArray(s) &&
          typeof s[0] == "string" &&
          (t == null || t[s[0]] === void 0)
        )
          for (var l = 0; l < s.length; l++)
            em(s[l]) && (r += Bu(o) + ":" + tm(o, s[l]) + ";");
        else {
          var a = Ii(e, t, s);
          switch (o) {
            case "animation":
            case "animationName": {
              r += Bu(o) + ":" + a + ";";
              break;
            }
            default:
              r += o + "{" + a + "}";
          }
        }
      }
    return r;
  }
  var nm = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
    It,
    dS = function (t, n, r) {
      if (
        t.length === 1 &&
        typeof t[0] == "object" &&
        t[0] !== null &&
        t[0].styles !== void 0
      )
        return t[0];
      var i = !0,
        o = "";
      It = void 0;
      var s = t[0];
      s == null || s.raw === void 0
        ? ((i = !1), (o += Ii(r, n, s)))
        : (o += s[0]);
      for (var l = 1; l < t.length; l++)
        (o += Ii(r, n, t[l])), i && (o += s[l]);
      nm.lastIndex = 0;
      for (var a = "", u; (u = nm.exec(o)) !== null; ) a += "-" + u[1];
      var c = lS(o) + a;
      return { name: c, styles: o, next: It };
    };
  function fS() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return dS(t);
  }
  const $s = {
    small: 576,
    medium: 768,
    large: 992,
    xLarge: 1200,
    mdpiScreen: 1279,
    largeLaptop: 1439,
    fourK: 2160,
    tallPhone: "(max-width: 360px) and (min-height: 740px)",
  };
  Object.keys($s).reduce((e, t) => {
    const n = typeof $s[t] == "string" ? "" : "min-width:",
      r = typeof $s[t] == "string" ? "" : "px";
    return (
      (e[t] = (i) => fS`
        @media (${n + $s[t] + r}) {
          ${i};
        }
      `),
      e
    );
  }, {});
  function pS() {
    return typeof window < "u"
      ? window.matchMedia("(max-width: 1200px) and (min-width: 768px)").matches
      : null;
  }
  function Vu() {
    return typeof window < "u"
      ? window.matchMedia("(max-width: 440px)").matches
      : null;
  }
  function hS() {
    if (typeof window < "u") {
      const { innerWidth: e } = window;
      return e < 350 ? "small" : e >= 351 && e <= 400 ? "medium" : "large";
    } else return "medium";
  }
  const rm = {},
    kr = { domain: window.location.host, device: Vu() ? "mobile" : "desktop" };
  function im(e, t) {
    if ((clearTimeout(rm[e]), window[e] == null)) {
      rm[e] = setTimeout(() => {
        im(e, t);
      }, 500);
      return;
    }
    t();
  }
  function Pr(e) {
    im("dataLayer", () => {
      if (window.dataLayer == null) {
        console.error("dataLayer not available");
        return;
      }
      window.dataLayer.push(e);
    });
  }
  const mS = () => ({
      event: qe.INITIALIZED,
      payload: { name: qe.INITIALIZED, time: new Date().getTime(), ...kr },
    }),
    gS = (e) => ({
      event: qe.SLIDE_VIEWED,
      payload: {
        name: qe.SLIDE_VIEWED,
        time: new Date().getTime(),
        slide: e,
        ...kr,
      },
    }),
    vS = (e) => ({
      event: qe.STORY_VIEWED,
      payload: {
        name: qe.STORY_VIEWED,
        time: new Date().getTime(),
        story: e,
        ...kr,
      },
    }),
    yS = () => ({
      event: qe.REELS_OPENED,
      payload: { name: qe.REELS_OPENED, time: new Date().getTime(), ...kr },
    }),
    wS = () => ({
      event: qe.REELS_CLOSED,
      payload: { name: qe.REELS_CLOSED, time: new Date().getTime(), ...kr },
    }),
    SS = () => ({
      event: qe.INTERACTED,
      payload: { name: qe.INTERACTED, time: new Date().getTime(), ...kr },
    }),
    Or = async (e) => {
      await Xw(e);
    },
    om = "GTM-NP83NW9",
    xS = `https://www.googletagmanager.com/gtm.js?id=${om}`,
    ES = `https://www.googletagmanager.com/ns.html?id=${om}`,
    sm =
      "https://www.paxify.io/_next/image?url=%2Fassets%2Flogo%2Flogo.png&w=384&q=75",
    TS = async (e, t) => {
      const n = [];
      for (const r of e) {
        const i = new Image();
        (i.src = r), n.push(i);
      }
      t(n);
    },
    CS = (e) => {
      const t = btoa(e);
      return encodeURIComponent(t);
    },
    kS = (e) => {
      const t = decodeURIComponent(e);
      return atob(t);
    },
    lm = (e) => !!(typeof e == "number" && e >= 0 && isFinite(e)),
    PS = (e, t) => {
      switch (t.type) {
        case "UPDATE_FIELD":
          return { ...e, [t.field]: t.value };
        default:
          return e;
      }
    },
    OS = () => {
      const [e, t] = Q.useReducer(PS, {
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
    _S = (e, t) => {
      switch (t.type) {
        case "UPDATE_CONFIG":
          return { ...e, [t.field]: t.value };
        default:
          return e;
      }
    },
    LS = () => {
      const [e, t] = Q.useReducer(_S, { parent: null, modified: null });
      return {
        config: e,
        updateConfig: (r, i) => {
          t({ type: "UPDATE_CONFIG", field: r, value: i });
        },
      };
    },
    IS = () =>
      P.jsxs("svg", {
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
          P.jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
          P.jsx("path", {
            d: "M9 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z",
            strokeWidth: "0",
            fill: "currentColor",
          }),
          P.jsx("path", {
            d: "M17 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z",
            strokeWidth: "0",
            fill: "currentColor",
          }),
        ],
      }),
    MS = () =>
      P.jsxs("svg", {
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
          P.jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
          P.jsx("path", {
            d: "M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z",
            strokeWidth: "0",
            fill: "currentColor",
          }),
        ],
      }),
    NS = ({ size: e = 50, color: t = "white" }) =>
      P.jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        cursor: "pointer",
        width: e,
        height: e,
        fill: t,
        className: "bi bi-chevron-left",
        viewBox: "0 0 16 16",
        children: [
          " ",
          P.jsx("path", {
            fillRule: "evenodd",
            d: "M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z",
          }),
          " ",
        ],
      }),
    RS = ({ size: e = 50, color: t = "white" }) =>
      P.jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        cursor: "pointer",
        width: e,
        height: e,
        fill: t,
        className: "bi bi-chevron-right",
        viewBox: "0 0 16 16",
        children: [
          " ",
          P.jsx("path", {
            fillRule: "evenodd",
            d: "M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z",
          }),
          " ",
        ],
      }),
    am = V("div")`
  display: flex;
  flex-wrap: wrap;
`,
    js = V(am)`
  align-items: center;
  gap: ${(e) => (e.gap ? e.gap : "0")};
`,
    zS = V(am)`
  flex-direction: column;
  gap: ${(e) => (e.gap ? e.gap : "0")};
`,
    AS = () =>
      P.jsxs("svg", {
        fill: "white",
        id: "filledHeart",
        height: "40px",
        width: "40px",
        "data-name": "filledHeart",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 122.88 107.39",
        children: [
          P.jsx("title", { children: "red-heart" }),
          P.jsx("path", {
            style: { fill: "#ed1b24", fillRule: "evenodd" },
            d: "M60.83,17.18c8-8.35,13.62-15.57,26-17C110-2.46,131.27,21.26,119.57,44.61c-3.33,6.65-10.11,14.56-17.61,22.32-8.23,8.52-17.34,16.87-23.72,23.2l-17.4,17.26L46.46,93.55C29.16,76.89,1,55.92,0,29.94-.63,11.74,13.73.08,30.25.29c14.76.2,21,7.54,30.58,16.89Z",
          }),
        ],
      }),
    $S = ({ fill: e = "white" }) =>
      P.jsx("svg", {
        fill: e,
        height: "40px",
        width: "40px",
        version: "1.1",
        id: "Capa_1",
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        viewBox: "0 0 471.701 471.701",
        xmlSpace: "preserve",
        children: P.jsx("g", {
          children: P.jsx("path", {
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
    jS = () =>
      P.jsxs("svg", {
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
          P.jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
          P.jsx("path", {
            d: "M8 9h-1a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-8a2 2 0 0 0 -2 -2h-1",
          }),
          P.jsx("path", { d: "M12 14v-11" }),
          P.jsx("path", { d: "M9 6l3 -3l3 3" }),
        ],
      }),
    DS = V.div`
  gap: 5px;
  right: 15px;
  bottom: 15px;
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
    bS = V.img`
  width: 50px !important;
  height: 50px !important;
  border-radius: 50%;
`,
    FS = V(js)`
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
    BS = V(js)`
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
    VS = V.div`
  cursor: pointer;
  position: absolute;
  right: 15px;
  top: -45px;
  transition: all 0.3s ease-in-out;

  @media (max-width: 768px) {
    top: -50px;
  }
`,
    US = V(js)`
  width: 80%;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex: 1;
  }
`,
    HS = V.button`
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
    WS = V(zS)`
  gap: 12px;
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
`,
    GS = V.div`
  top: -100px;
  right: 17px;
  cursor: pointer;
  position: absolute;
`,
    YS = V.div`
  opacity: ${({ $hover: e }) => (e ? 1 : 0)};
  transition: all 0.3s ease-in-out;

  @media (max-width: 768px) {
    opacity: 1;
  }
`,
    KS = ({
      story: e,
      handleCTAClick: t,
      toggleStoryLike: n,
      setShareOpen: r,
      handleShare: i,
      handlePromoClick: o,
      shareOpen: s,
      isHovering: l,
    }) => {
      var a, u, c, d, p, h, v, y, k, f, m, g, w;
      return P.jsxs(FS, {
        children: [
          P.jsxs(YS, {
            $hover: l,
            children: [
              ((a = e == null ? void 0 : e.layout) == null
                ? void 0
                : a.likeButton) &&
                P.jsx(VS, {
                  id: "like",
                  onClick: (S) => n(S),
                  children:
                    (u = e == null ? void 0 : e.layout) != null && u.isLiked
                      ? P.jsx(AS, {})
                      : P.jsx($S, {}),
                }),
              P.jsx(GS, {
                onClick: async (S) => {
                  S.stopPropagation(), r(!s), await i();
                },
                children: P.jsx(jS, {}),
              }),
            ],
          }),
          ((c = e == null ? void 0 : e.layout) == null ? void 0 : c.design) ===
            1 &&
            P.jsxs(BS, {
              gap: "12px",
              children: [
                P.jsx(bS, {
                  src:
                    (d = e == null ? void 0 : e.layout) == null
                      ? void 0
                      : d.author,
                }),
                P.jsxs(US, {
                  gap: "25px",
                  children: [
                    P.jsxs(WS, {
                      children: [
                        P.jsx("div", {
                          children:
                            (p = e == null ? void 0 : e.layout) == null
                              ? void 0
                              : p.title,
                        }),
                        P.jsx("div", {
                          children:
                            (h = e == null ? void 0 : e.layout) == null
                              ? void 0
                              : h.description,
                        }),
                      ],
                    }),
                    ((v = e == null ? void 0 : e.layout) == null
                      ? void 0
                      : v.cta) &&
                      P.jsx(HS, {
                        background:
                          (k =
                            (y = e == null ? void 0 : e.layout) == null
                              ? void 0
                              : y.cta) == null
                            ? void 0
                            : k.backgroundColor,
                        textColor:
                          (m =
                            (f = e == null ? void 0 : e.layout) == null
                              ? void 0
                              : f.cta) == null
                            ? void 0
                            : m.textColor,
                        onClick: (S) => {
                          var T, x;
                          t(
                            S,
                            (x =
                              (T = e == null ? void 0 : e.layout) == null
                                ? void 0
                                : T.cta) == null
                              ? void 0
                              : x.link
                          );
                        },
                        children:
                          (w =
                            (g = e == null ? void 0 : e.layout) == null
                              ? void 0
                              : g.cta) == null
                            ? void 0
                            : w.text,
                      }),
                  ],
                }),
              ],
            }),
          P.jsxs(DS, {
            onClick: o,
            children: [P.jsx("img", { src: sm }), "By Paxify"],
          }),
        ],
      });
    },
    QS = Q.memo(KS),
    XS = V.div`
  flex-grow: 1;
  height: 4px;
  width: auto;
  border: 1px solid white;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`,
    qS = V.div`
  height: 100%;
  background-color: white;
  width: ${(e) => e.filled}%;
  max-width: 100%;
  display: block !important;
`,
    JS = ({ filled: e = 0 }) =>
      P.jsx(XS, { children: P.jsx(qS, { filled: e }) }),
    ZS = Q.memo(JS),
    ex = ({ fill: e = "#fff" }) =>
      P.jsxs("svg", {
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
          P.jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
          P.jsx("path", { d: "M15 8a5 5 0 0 1 0 8" }),
          P.jsx("path", { d: "M17.7 5a9 9 0 0 1 0 14" }),
          P.jsx("path", {
            d: "M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5",
          }),
        ],
      }),
    tx = ({ fill: e = "#fff" }) =>
      P.jsxs("svg", {
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
          P.jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
          P.jsx("path", {
            d: "M15 8a5 5 0 0 1 1.912 4.934m-1.377 2.602a5 5 0 0 1 -.535 .464",
          }),
          P.jsx("path", {
            d: "M17.7 5a9 9 0 0 1 2.362 11.086m-1.676 2.299a9 9 0 0 1 -.686 .615",
          }),
          P.jsx("path", {
            d: "M9.069 5.054l.431 -.554a.8 .8 0 0 1 1.5 .5v2m0 4v8a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l1.294 -1.664",
          }),
          P.jsx("path", { d: "M3 3l18 18" }),
        ],
      }),
    nx = V.div`
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
    rx = V.div`
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
    ix = V.div`
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
    ox = V.div`
  right: 5px;
  z-index: 50;
  cursor: pointer;
  position: absolute;
  transition: all 0.3s ease-in-out;

  @media (max-width: 768px) {
    top: 25px;
  }
`,
    sx = ({
      activeStory: e,
      filteredConfig: t,
      isProgressBarFilled: n,
      closeOverlay: r,
      isHovering: i,
      audioRef: o,
      videoRef: s,
    }) => {
      var u, c;
      const [l, a] = R.useState(!1);
      return (
        R.useEffect(() => {
          o.current && (o.current.volume = l ? 0 : 1);
        }, [l, o]),
        R.useEffect(() => {
          s.current && (s.current.volume = l ? 0 : 1);
        }, [l, s]),
        P.jsxs(ix, {
          children: [
            P.jsx(nx, {
              children:
                e == null
                  ? void 0
                  : e.player.map((d, p) => P.jsx(ZS, { filled: n(p) }, d.id)),
            }),
            P.jsx(rx, {
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
              P.jsx(ox, {
                onClick: (d) => {
                  d.stopPropagation(), a(!l);
                },
                $hover: i,
                children: l ? P.jsx(tx, {}) : P.jsx(ex, {}),
              }),
          ],
        })
      );
    },
    lx = Q.memo(sx),
    ax = 4500,
    ux = V(js)`
  overflow: hidden;
  align-items: center;
  justify-content: center;
  padding: 10px;
  gap: 10px;
`,
    Uu = V.img`
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
    right: 57.5px;
  }

  @media (max-width: 350px) {
    right: 45px;
  }
`,
    um = Ti`
  position: relative;
  cursor: pointer;
`,
    cx = V("div")`
  ${um}
  width: 200px;
  height: 300px;
  border-radius: 15px;
  background-image: url(${({ background: e }) => e});
  background-repeat: no-repeat;
  background-size: cover;
  transition: all 0.3s ease-in-out;

  &:hover {
    width: 250px;
    height: 380px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.7);
  }

  &:hover ${Uu} {
    opacity: 0;
  }

  @media (max-width: 768px) {
    width: 200px;
    height: 300px;

    &:hover {
      width: 200px;
      height: 300px;
    }

    &:hover ${Uu} {
      opacity: 1;
    }
  }

  @media (max-width: 400px) {
    width: 180px;
    height: 270px;

    &:hover {
      width: 180px;
      height: 270px;
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
    dx = V.div`
  ${um}
  padding: 5px;
  border-radius: 50%;
  border: ${({ width: e, color: t, $isViewed: n }) =>
    `${n ? "1" : e}px solid ${n ? "grey" : t}`};
  width: fit-content;
`,
    fx = V.div`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  padding: 2px;
  background-image: url(${({ background: e }) => e});
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
    px = V.div`
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
    hx = V(Tu)`
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
`,
    mx = V.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 9999;
  border-radius: 12px;
  background: rgba(0, 0, 0, 0.9);
`,
    gx = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      margin: "0 auto",
    },
    cm = Ti`
  z-index: 0;
  top: 10px;
  width: 30%;
  cursor: pointer;
  position: absolute;
  height: calc(100% - 10px);
  display: block !important;
`,
    vx = V.div`
  left: 0;
  ${cm}
`,
    yx = V.div`
  right: 0;
  ${cm}
`,
    wx = V.div`
  position: relative;
  min-height: 50vh;
  width: ${(e) => (e.$isActive ? "425px" : "225px")};

  & img {
    width: 100%;
  }

  & video {
    width: 100%;
    height: 756px;
  }
`,
    Hu = Ti`
  border-radius: 12px;

  @media (max-width: 768px) {
    border-radius: 0;
  }
`,
    Sx = V.img`
  z-index: -1;
  ${Hu}
`,
    dm = V.img`
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
    xx = V.img`
  cursor: pointer;
  position: relative;
  ${Hu}

  &:hover {
    ${dm} {
      opacity: 0;
    }
`,
    Ex = V.video`
  z-index: -1;
  object-fit: fill;
  ${Hu}
`,
    fm = Ti`
  top: 45%;
  z-index: 999999;
  cursor: pointer;
  position: absolute;
`,
    Tx = V.div`
  left: -80px;
  ${fm}

  @media (max-width: 768px) {
    left: 0;
  }
`,
    Cx = V.div`
  right: -80px;
  ${fm}

  @media (max-width: 768px) {
    right: 0;
  }
`,
    kx = V(Tu)`
  height: ${({ layout: e }) => (e === 1 ? "400px" : "250px")};
  margin: 0 10px;
  display: flex;
  align-items: center;
  max-width: 1200px;
  overflow: scroll;
  position: relative;

  // Scrollbar styles for different browsers
  overflow: auto;
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
    Px = V.div`
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
    Ox = V.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,
    _x = V.div`
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
    Lx = ({ settings: e }) => {
      var mm, gm;
      const { config: t, updateConfig: n } = LS(),
        { storyState: r, updateField: i } = OS(),
        o = R.useRef(null),
        s = R.useRef(null),
        [l, a] = R.useState(null),
        [u, c] = R.useState(0),
        [d, p] = R.useState(),
        [h, v] = R.useState(),
        [y, k] = R.useState([]),
        [f, m] = R.useState(!1),
        [g, w] = R.useState(!1),
        [S, T] = R.useState(null),
        x = () => {
          Me(), i("overlaySwipePosition", 0);
        },
        _ = (E) => {
          r.showOverlay &&
            E.dir === "Down" &&
            (w(!0), i("overlaySwipePosition", E.deltaY));
        },
        O = () => {
          i("overlaySwipePosition", 0), w(!1);
        },
        b = iv({
          onSwipedDown: () => x(),
          onSwiping: (E) => _(E),
          onSwiped: () => O(),
          delta: 30,
          preventScrollOnSwipe: !0,
        });
      R.useEffect(() => {
        const I = new URLSearchParams(window.location.search).get("reelife");
        if (I) {
          const $ = kS(I),
            [F, Z] = $.split("&"),
            ue = parseInt(F.split("story=")[1]) || 0,
            Pe = parseInt(Z.split("slide=")[1]) || 0;
          if (lm(ue) && lm(Pe)) {
            if (e && e.stories) {
              const tt = e.stories[ue];
              i("activeStory", tt),
                i("activeStoryIndex", ue),
                i("activeSlideProgress", 0),
                i("showOverlay", !0),
                c(Pe);
            }
          } else console.error("Invalid link.");
        }
      }, []),
        R.useEffect(() => {
          const E = o.current;
          r.showOverlay
            ? ((document.body.style.overflow = "hidden"),
              E == null || E.pause())
            : (document.body.style.overflow = "visible");
        }, [r.showOverlay]),
        R.useEffect(() => {
          const E = o.current,
            I = () => {
              document.hidden && (w(!0), E == null || E.pause());
            };
          return (
            document.addEventListener("visibilitychange", I),
            () => {
              document.removeEventListener("visibilitychange", I);
            }
          );
        }, []),
        R.useEffect(() => {
          const E = () => !!document.getElementById("paxify-analytics"),
            I = () => {
              const F = document.createElement("script");
              (F.id = "paxify-analytics"),
                (F.src = xS),
                (F.async = !0),
                (
                  document.head || document.getElementsByTagName("head")[0]
                ).appendChild(F);
            },
            $ = () => {
              const F = document.createElement("noscript"),
                Z = document.createElement("iframe");
              (Z.src = ES),
                (Z.height = "0"),
                (Z.width = "0"),
                (Z.style.display = "none"),
                (Z.style.visibility = "hidden"),
                F.appendChild(Z);
              const ue =
                document.body || document.getElementsByTagName("body")[0];
              ue.insertBefore(F, ue.firstChild);
            };
          E()
            ? console.info("GTM script already present")
            : (I(), $(), console.info("GTM script added"));
        }, []),
        R.useEffect(() => {
          var E, I;
          if (
            (I = (E = r.activeStory) == null ? void 0 : E.player) != null &&
            I[u]
          ) {
            const $ = gS(r.activeStory.player[u]);
            Pr($), Or($);
          }
        }, [u]),
        R.useEffect(() => {
          const E = M(e),
            I = mS();
          Pr(I), Or(I), n("parent", E), a(E);
        }, []),
        R.useEffect(() => {
          if (r.activeStory && r.activeStory.player.length === u + 1) {
            const E = vS(r.activeStory);
            Pr(E), Or(E);
          }
        }, [u, r.activeStory]),
        R.useEffect(() => {
          (async () => {
            var F;
            const I =
                (F = t.parent) == null
                  ? void 0
                  : F.stories.map((Z) =>
                      Z.player.map((ue) => {
                        var Pe;
                        return (
                          ue.content.type === "image" &&
                          ((Pe = ue == null ? void 0 : ue.content) == null
                            ? void 0
                            : Pe.source)
                        );
                      })
                    ),
              $ = I == null ? void 0 : I.flat().filter((Z) => Z);
            await TS($ ?? [], k);
          })();
        }, [t.parent]),
        R.useEffect(() => {
          var E, I, $, F;
          if (r.activeStory && (E = r.activeStory) != null && E.player[u]) {
            const Z =
              ((F =
                ($ =
                  (I = r.activeStory) == null
                    ? void 0
                    : I.player[u].enhancements) == null
                  ? void 0
                  : $.audio) == null
                ? void 0
                : F.src) || null;
            i("activeSlideAudio", Z);
          }
        }, [r.activeStory, u]),
        R.useEffect(() => {
          const E = o.current;
          if (r.contentType === "image") {
            if (!r.activeSlideAudio && E) {
              E.pause(), (E.currentTime = 0);
              return;
            }
            if (E && !g && !r.activeSlideLoading && r.contentType === "image") {
              const I = E == null ? void 0 : E.play();
              I !== void 0 &&
                I.catch(($) => {
                  console.error("Autoplay error:", $);
                });
            }
          }
          return () => {
            E && (E.pause(), (E.currentTime = 0));
          };
        }, [r.activeSlideAudio, r.contentType, r.activeSlideLoading]),
        R.useEffect(() => {
          const E = o.current;
          r.contentType === "image" &&
            !r.activeSlideLoading &&
            (g ? E == null || E.pause() : E == null || E.play());
        }, [g, r.contentType, r.activeSlideLoading]),
        R.useEffect(() => {
          w(!1);
        }, [r.activeStoryIndex]),
        R.useEffect(() => {
          w(!!f);
        }, [f]),
        R.useEffect(() => {
          r.activeSlideProgress >= 100 &&
            r.activeStory &&
            t.parent &&
            (c((E) => {
              var I, $;
              return (
                E ===
                  ((I = r.activeStory) == null ? void 0 : I.player.length) -
                    1 &&
                  (r.activeStoryIndex !== t.parent.stories.length - 1
                    ? h == null || h.slideNext()
                    : Me()),
                (E + 1) %
                  (($ = r.activeStory) == null ? void 0 : $.player.length)
              );
            }),
            i("activeSlideProgress", 0));
        }, [r.activeSlideProgress]),
        R.useEffect(() => {
          if (!g && r.activeStory && !r.activeSlideLoading) {
            const I =
                (1500 / (r.activeStory.player[u].content.timeout || ax)) * 2,
              $ = setInterval(() => {
                r.activeSlideLoading ||
                  i("activeSlideProgress", r.activeSlideProgress + I);
              }, 25);
            return () => {
              clearInterval($);
            };
          }
        }, [r.activeStory, r.activeSlideProgress, u, r.activeSlideLoading, g]),
        R.useEffect(() => {
          i("activeSlideProgress", 0);
        }, [r.activeStory, u]),
        R.useEffect(() => {
          var E;
          if (
            r.activeStory &&
            u === ((E = r.activeStory) == null ? void 0 : E.player.length) - 1
          ) {
            const I = { ...t.parent };
            I.stories &&
              ((I.stories[r.activeStoryIndex].container.isViewed = !0), a(I));
          }
        }, [r.activeStory, u]),
        R.useEffect(() => {
          if (!r.showOverlay) {
            const E = { ...l };
            if (E.stories) {
              const I = E.stories.filter((F) => F.container.isViewed),
                $ = E.stories.filter((F) => !F.container.isViewed);
              (E.stories = [...$, ...I]), a((F) => ({ ...F, ...E }));
            }
          }
        }, [r.showOverlay]);
      const M = (E) => {
          const I = { ...E };
          return (
            E &&
              (I.stories = I.stories.filter(($) => {
                if ($ != null && $.player)
                  return ($.player =
                    $ == null ? void 0 : $.player.filter((F) => F !== null));
              })),
            I
          );
        },
        j = () => {
          const E = yS();
          Pr(E), Or(E);
        },
        B = () => {
          const E = SS();
          i("interactedWithStory", !0), Pr(E), Or(E);
        },
        pe = () => {
          const E = wS();
          Pr(E), Or(E);
        },
        dt = async () => {
          const E = `https://${window.location.host}/?reelife=${CS(
            `story=${r.activeStoryIndex}&slide=${u}`
          )}`;
          if (navigator.share)
            try {
              await navigator.share({
                url: E,
                title: "Paxify Reels",
                text: "Check out this story on Paxify ReeLife!",
              });
            } catch (I) {
              console.error(`Error trying to share: ${I}`);
            }
        },
        Ze = (E) => {
          var $;
          j(), !r.interactedWithStory && B();
          const I =
            (($ = t.parent) == null
              ? void 0
              : $.stories.findIndex((F) => F.id === E.id)) || 0;
          i("activeStoryIndex", I),
            i("activeSlideProgress", 0),
            c(0),
            i("activeStory", E),
            w(!1),
            i("showOverlay", !0);
        },
        Me = () => {
          pe(), i("showOverlay", !1), i("activeStory", null);
        },
        N = (E) =>
          P.jsx(cx, {
            background: E.container.background.src,
            onClick: () => Ze(E),
            children: P.jsx(Uu, {
              $isViewed: E.container.isViewed,
              width: E.container.border.width,
              color: E.container.border.color,
              src: E.container.author.src,
              alt: "story",
            }),
          }),
        A = (E) =>
          P.jsx(dx, {
            $isViewed: E.container.isViewed,
            width: E.container.border.width,
            color: E.container.border.color,
            children: P.jsx(fx, {
              background: E.container.author.src,
              onClick: () => Ze(E),
            }),
          }),
        D = (E, I) => {
          switch (E) {
            case 1:
              return N(I);
            case 2:
              return A(I);
            default:
              return console.error(`No layout exist for id ${E}`), null;
          }
        },
        Y = () => {
          var I, $, F, Z, ue, Pe, tt, ht, nt;
          const E = hS();
          return window.innerWidth > 768 && window.innerWidth < 1200
            ? ((F =
                ($ = (I = t.parent) == null ? void 0 : I.config) == null
                  ? void 0
                  : $.container.storiesPerView) == null
                ? void 0
                : F.tablet) ?? 2
            : window.innerWidth >= 1200
            ? ((Pe =
                (ue = (Z = t.parent) == null ? void 0 : Z.config) == null
                  ? void 0
                  : ue.container.storiesPerView) == null
                ? void 0
                : Pe.desktop) ?? 3
            : ((nt =
                (ht = (tt = t.parent) == null ? void 0 : tt.config) == null
                  ? void 0
                  : ht.container.storiesPerView) == null
                ? void 0
                : nt.mobile[E]) ?? 1.5;
        },
        J = (E) => {
          E.stopPropagation(),
            c(
              (I) => (
                u === 0 &&
                  (r.activeStoryIndex !== 0
                    ? h == null || h.slidePrev()
                    : Me()),
                I - 1
              )
            );
        },
        Ee = (E) => {
          E.stopPropagation(),
            r.activeStory &&
              t.parent &&
              c((I) => {
                var $, F;
                return I ===
                  (($ = r.activeStory) == null ? void 0 : $.player.length) - 1
                  ? (r.activeStoryIndex !== t.parent.stories.length - 1
                      ? h.slideNext()
                      : Me(),
                    0)
                  : (I + 1) %
                      ((F = r.activeStory) == null ? void 0 : F.player.length);
              });
        },
        et = (E, I) => {
          E.stopPropagation(),
            i("activeSlideLoading", !0),
            I === "LEFT" ? J(E) : Ee(E);
        },
        Wt = () => {
          var E, I, $, F, Z, ue, Pe, tt, ht, nt, Ri;
          return (I = (E = t.parent) == null ? void 0 : E.config) != null &&
            I.overlay.slidesPerView
            ? Vu()
              ? (Z =
                  (F = ($ = t.parent) == null ? void 0 : $.config) == null
                    ? void 0
                    : F.overlay.slidesPerView) == null
                ? void 0
                : Z.mobile
              : pS()
              ? (tt =
                  (Pe = (ue = t.parent) == null ? void 0 : ue.config) == null
                    ? void 0
                    : Pe.overlay.slidesPerView) == null
                ? void 0
                : tt.tablet
              : (Ri =
                  (nt = (ht = t.parent) == null ? void 0 : ht.config) == null
                    ? void 0
                    : nt.overlay.slidesPerView) == null
              ? void 0
              : Ri.desktop
            : 1;
        };
      R.useEffect(
        () => () => {
          clearTimeout(S);
        },
        [S]
      ),
        R.useEffect(() => {
          var I;
          const E =
            (I = r.activeStory) == null ? void 0 : I.player[u].content.type;
          i("contentType", E);
        }, [r.activeStory, u]);
      const Ve = () => {
          const E = s.current;
          E && E.play();
        },
        ft = () => {
          const E = s.current;
          E && E.pause();
        };
      R.useEffect(() => {
        g ? ft() : Ve();
      }, [g]);
      const _r = () => {
          var E, I;
          w(!0),
            (E = o.current) == null || E.pause(),
            (I = s.current) == null || I.pause(),
            window.open("https://paxify.io", "_blank");
        },
        Gt = (E) => {
          E.stopPropagation();
          const I = setTimeout(() => {
            const $ = document.getElementById("play-pause");
            $ &&
              (($.style.width = "85px"),
              ($.style.height = "85px"),
              ($.style.opacity = "1"),
              setTimeout(() => {
                ($.style.opacity = "0"),
                  ($.style.width = "1px"),
                  ($.style.height = "1px");
              }, 300)),
              w((F) => !F);
          }, 200);
          T(I);
        },
        pt = (E) => {
          var Z, ue, Pe, tt;
          E.stopPropagation(), clearTimeout(S);
          const I = !(
              (ue =
                (Z = r.activeStory) == null ? void 0 : Z.player[u].layout) !=
                null && ue.isLiked
            ),
            $ = { ...t.parent },
            F = document.getElementById("like");
          if (
            (F &&
              ((F.style.transform = "scale(1.5)"),
              setTimeout(() => {
                F.style.transform = "scale(1)";
              }, 300)),
            $)
          ) {
            const ht =
                (Pe = $.stories) == null ? void 0 : Pe[r.activeStoryIndex],
              nt =
                (tt = ht == null ? void 0 : ht.player) == null ? void 0 : tt[u];
            nt != null && nt.layout && (nt.layout.isLiked = I);
          }
          n("parent", $);
        },
        Mi = (E) => (E === u ? r.activeSlideProgress : E < u ? 100 : 0),
        Mt = {
          setStoryPause: w,
          toggleStoryLike: pt,
          setShareOpen: m,
          handleShare: dt,
          shareOpen: f,
          handleCTAClick: (E, I) => {
            if ((E.stopPropagation(), w(!0), r.contentType === "video/mp4")) {
              const $ = s.current;
              $ && $.pause();
            }
            window.open(I, "_blank");
          },
          handlePromoClick: _r,
          ...t,
        },
        $x = {
          filteredConfig: l,
          isProgressBarFilled: Mi,
          closeOverlay: Me,
          audioRef: o,
          videoRef: s,
          ...t,
        };
      return P.jsx(P.Fragment, {
        children: P.jsxs(ux, {
          className: "app-container",
          children: [
            P.jsx(kx, {
              onInit: (E) => {
                p(E);
              },
              layout:
                ((gm = (mm = t.parent) == null ? void 0 : mm.config) == null
                  ? void 0
                  : gm.layout) ?? 1,
              slidesPerView: Y(),
              children:
                l == null
                  ? void 0
                  : l.stories.map((E) => {
                      var I, $;
                      return P.jsx(
                        Cu,
                        {
                          children: D(
                            (($ = (I = t.parent) == null ? void 0 : I.config) ==
                            null
                              ? void 0
                              : $.layout) ?? 1,
                            E
                          ),
                        },
                        E.id
                      );
                    }),
            }),
            r.showOverlay &&
              P.jsxs(px, {
                $swipePosition: r.overlaySwipePosition,
                onClick: Me,
                ...b,
                children: [
                  P.jsx("audio", {
                    ref: o,
                    src: r.activeSlideAudio,
                    autoPlay: !1,
                  }),
                  P.jsx(hx, {
                    centeredSlides: !0,
                    onInit: (E) => {
                      v(E);
                    },
                    initialSlide: r.activeStoryIndex,
                    spaceBetween: Vu() ? 30 : 0,
                    slidesPerView: Wt(),
                    onSlideChange: (E) => {
                      var I;
                      i(
                        "activeStory",
                        (I = t.parent) == null
                          ? void 0
                          : I.stories[E.activeIndex]
                      ),
                        i("activeStoryIndex", E.activeIndex),
                        c(0);
                    },
                    navigation: {
                      nextEl: ".swiper-button-next",
                      prevEl: ".swiper-button-prev",
                    },
                    children:
                      l == null
                        ? void 0
                        : l.stories.map((E, I) => {
                            var Pe, tt, ht, nt, Ri, vm, ym;
                            const $ = I === r.activeStoryIndex,
                              F =
                                (Pe = r.activeStory) == null
                                  ? void 0
                                  : Pe.player[u],
                              Z = r.activeSlideLoading && $,
                              ue =
                                ((ht =
                                  (tt = l == null ? void 0 : l.config) == null
                                    ? void 0
                                    : tt.navigation) == null
                                  ? void 0
                                  : ht.show) || !1;
                            return P.jsx(
                              Cu,
                              {
                                children: P.jsxs(
                                  wx,
                                  {
                                    $isActive: $,
                                    children: [
                                      Z &&
                                        P.jsx(mx, {
                                          onClick: (ve) => ve.stopPropagation(),
                                          children: P.jsx(Yg, {
                                            loading: !0,
                                            color: "#a1f1f1",
                                            cssOverride: gx,
                                            size: 150,
                                            "aria-label": "Loading Spinner",
                                          }),
                                        }),
                                      $ &&
                                        !Z &&
                                        P.jsx(lx, {
                                          activeStory: r.activeStory,
                                          ...$x,
                                        }),
                                      $ &&
                                        P.jsxs(Ox, {
                                          onMouseEnter: () =>
                                            n("isHovering", !0),
                                          onMouseLeave: () =>
                                            n("isHovering", !1),
                                          onClick: (ve) => Gt(ve),
                                          onDoubleClick: (ve) => pt(ve),
                                          children: [
                                            P.jsx(vx, {
                                              onClick: (ve) => et(ve, "LEFT"),
                                            }),
                                            P.jsx(yx, {
                                              onClick: (ve) => et(ve, "RIGHT"),
                                            }),
                                            P.jsx(Px, {
                                              id: "play-pause",
                                              children: g
                                                ? P.jsx(MS, {})
                                                : P.jsx(IS, {}),
                                            }),
                                            (F == null
                                              ? void 0
                                              : F.content.type) === "image" &&
                                              P.jsx(Sx, {
                                                id: "story-image",
                                                onClick: (ve) => Gt(ve),
                                                onLoad: () =>
                                                  i("activeSlideLoading", !1),
                                                src:
                                                  F == null
                                                    ? void 0
                                                    : F.content.source,
                                              }),
                                            (F == null
                                              ? void 0
                                              : F.content.type) ===
                                              "video/mp4" &&
                                              P.jsx(Ex, {
                                                playsInline: !0,
                                                ref: s,
                                                onLoadedData: () => {
                                                  w(!1),
                                                    i("activeSlideLoading", !1);
                                                },
                                                autoPlay: !g,
                                                children: P.jsx("source", {
                                                  src: F.content.source,
                                                  type: "video/mp4",
                                                }),
                                              }),
                                            ue &&
                                              P.jsxs(P.Fragment, {
                                                children: [
                                                  r.activeStoryIndex !== 0 &&
                                                    P.jsx(Tx, {
                                                      onClick: (ve) => J(ve),
                                                      children: P.jsx(NS, {
                                                        color:
                                                          ((Ri =
                                                            (nt =
                                                              l == null
                                                                ? void 0
                                                                : l.config) ==
                                                            null
                                                              ? void 0
                                                              : nt.navigation) ==
                                                          null
                                                            ? void 0
                                                            : Ri.color) ??
                                                          "white",
                                                      }),
                                                    }),
                                                  r.activeStoryIndex !==
                                                    l.stories.length - 1 &&
                                                    P.jsx(Cx, {
                                                      onClick: (ve) => Ee(ve),
                                                      children: P.jsx(RS, {
                                                        color:
                                                          ((ym =
                                                            (vm =
                                                              l == null
                                                                ? void 0
                                                                : l.config) ==
                                                            null
                                                              ? void 0
                                                              : vm.navigation) ==
                                                          null
                                                            ? void 0
                                                            : ym.color) ??
                                                          "white",
                                                      }),
                                                    }),
                                                ],
                                              }),
                                            P.jsx(QS, { story: F, ...Mt }),
                                          ],
                                        }),
                                      !$ &&
                                        P.jsxs(P.Fragment, {
                                          children: [
                                            P.jsx(xx, {
                                              onClick: (ve) => {
                                                ve.stopPropagation(),
                                                  h == null || h.slideTo(I);
                                              },
                                              src: E.player[0].content.source,
                                            }),
                                            P.jsx(dm, {
                                              onClick: (ve) => {
                                                ve.stopPropagation(),
                                                  h == null || h.slideTo(I);
                                              },
                                              $isViewed: E.container.isViewed,
                                              width: E.container.border.width,
                                              color: E.container.border.color,
                                              src: E.container.author.src,
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
                  P.jsxs(_x, {
                    onClick: _r,
                    children: [
                      P.jsx("img", { width: 150, src: sm }),
                      "By Paxify",
                    ],
                  }),
                ],
              }),
          ],
        }),
      });
    },
    Ix = ({ settings: e = {} }) => P.jsx(Lx, { settings: e }),
    pm = [
      {
        id: "story-1",
        container: {
          border: { color: "#e1306c", width: 3 },
          background: { src: "https://picsum.photos/150/250" },
          author: { src: "https://picsum.photos/210/210" },
          isViewed: !1,
        },
        player: [
          {
            id: 1,
            content: {
              width: 1080,
              height: 1920,
              source: "https://picsum.photos/1080/1920",
              timeout: 5e3,
              type: "image",
            },
            enhancements: {
              audio: {
                src: "https://cdn.shopify.com/s/files/1/0762/0499/8931/files/mixkit-game-show-suspense-waiting-667.wav?v=1689275490",
              },
            },
            layout: {
              design: 1,
              isLiked: !0,
              likeButton: !0,
              author: "https://picsum.photos/105/105",
              title: "Unleash Your Inner Artist",
              description: "by Chef John Delucie",
              cta: {
                text: "SHOP NOW",
                link: "https://google.com",
                backgroundColor: "#2ecc71",
              },
            },
          },
          {
            id: 2,
            content: {
              width: 1080,
              height: 1920,
              timeout: 6e4,
              source:
                "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
              type: "video/mp4",
            },
            layout: {
              design: 1,
              likeButton: !0,
              isLiked: !1,
              author: "https://picsum.photos/106/104",
              title: "Achieve Mindfulness",
              description: "by Sarah Wilson",
              cta: {
                text: "VISIT LINK",
                link: "https://google.com",
                backgroundColor: "#e1306c",
              },
            },
          },
          {
            id: 3,
            content: {
              width: 1080,
              height: 1920,
              source: "https://picsum.photos/1090/1930",
              type: "image",
            },
            layout: { likeButton: !0 },
          },
          {
            id: 4,
            content: {
              width: 1080,
              height: 1920,
              source: "https://picsum.photos/1070/1990",
              type: "image",
              timeout: 4e3,
            },
            layout: {
              design: 1,
              likeButton: !0,
              isLiked: !0,
              author: "https://picsum.photos/103/103",
              title: "Elevate Your Fitness Journey",
              description: "by Dr. Barbara Sturm",
            },
          },
          {
            id: 5,
            content: {
              width: 1080,
              height: 1920,
              source: "https://picsum.photos/1085/1930",
              type: "image",
            },
            enhancements: {
              audio: {
                src: "https://cdn.shopify.com/s/files/1/0762/0499/8931/files/mixkit-intro-transition-1146.wav?v=1689275489",
              },
            },
          },
        ],
      },
      {
        id: "story-2",
        container: {
          border: { color: "#e1306c", width: 3 },
          background: { src: "https://picsum.photos/151/251" },
          author: { src: "https://picsum.photos/209/211" },
          isViewed: !1,
        },
        player: [
          {
            id: 6,
            content: {
              width: 1080,
              height: 1920,
              source: "https://picsum.photos/1080/1921",
              type: "image",
              timeout: 3e3,
            },
            enhancements: {
              audio: {
                src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
              },
            },
            layout: {
              design: 1,
              likeButton: !0,
              isLiked: !0,
              author: "https://picsum.photos/104/101",
              title: "Unlock Inner Peace",
              description: "by Vex King",
              cta: {
                text: "SHOP NOW",
                link: "https://google.com",
                backgroundColor: "#3498db",
              },
            },
          },
        ],
      },
      {
        id: "story-3",
        container: {
          border: { color: "#e1306c", width: 3 },
          background: { src: "https://picsum.photos/152/252" },
          author: { src: "https://picsum.photos/211/207" },
          isViewed: !1,
        },
        player: [
          {
            id: 7,
            content: {
              width: 1080,
              height: 1920,
              source: "https://picsum.photos/1080/1922",
              type: "image",
              timeout: 5e3,
            },
          },
          {
            id: 10,
            content: {
              width: 1080,
              height: 1920,
              source: "https://picsum.photos/1081/1929",
              type: "image",
              timeout: 3e3,
            },
          },
          {
            id: 11,
            content: {
              width: 1080,
              height: 1920,
              timeout: 6e4,
              source:
                "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
              type: "video/mp4",
            },
            layout: {
              design: 1,
              likeButton: !0,
              isLiked: !1,
              author: "https://picsum.photos/106/104",
              title: "Achieve Mindfulness",
              description: "by Sarah Wilson",
              cta: {
                text: "VISIT LINK",
                link: "https://google.com",
                backgroundColor: "#e1306c",
              },
            },
          },
          {
            id: 12,
            content: {
              width: 1080,
              height: 1920,
              source: "https://picsum.photos/1081/1929",
              type: "image",
              timeout: 3e3,
            },
          },
        ],
      },
      {
        id: "story-4",
        container: {
          border: { color: "#e1306c", width: 3 },
          background: { src: "https://picsum.photos/153/253" },
          author: { src: "https://picsum.photos/207/207" },
          isViewed: !1,
        },
        player: [
          {
            id: 8,
            content: {
              width: 1080,
              height: 1920,
              source: "https://picsum.photos/1080/1923",
              type: "image",
              timeout: 4500,
            },
          },
        ],
      },
      {
        id: "story-5",
        container: {
          border: { color: "#e1306c", width: 3 },
          background: { src: "https://picsum.photos/154/249" },
          author: { src: "https://picsum.photos/209/216" },
          isViewed: !1,
        },
        player: [
          {
            id: 9,
            content: {
              width: 1080,
              height: 1920,
              source: "https://picsum.photos/1080/1919",
              type: "image",
              timeout: 7e3,
            },
          },
        ],
      },
    ],
    Mx = {
      id: "reels-demo-circle",
      config: {
        layout: 2,
        navigation: { show: !0, color: "white" },
        container: {
          storiesPerView: {
            mobile: { small: 1.5, medium: 1.6, large: 1.7 },
            tablet: 3,
            desktop: 3.5,
          },
        },
        overlay: { slidesPerView: { mobile: 1, tablet: 1, desktop: 3 } },
        close: { show: !0, color: "white" },
      },
      stories: [...pm],
    },
    Nx = {
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
      stories: [...pm],
    },
    hm = { accessKey: "E7jh1uy2srdmxQ7o5ZbzovwUFeA2", config: [Mx, Nx] },
    Rx = document.getElementsByClassName("paxify-app"),
    zx = Math.min(Rx.length, 2);
  class Ax extends R.Component {
    constructor(t) {
      super(t), (this.state = {});
    }
    render() {
      var r, i;
      const t =
        ((r = this.props.reelsSettings) == null ? void 0 : r.accessKey) ||
        hm.accessKey;
      if (
        (qw(t, zx),
        Array.from(document.querySelectorAll(".app-container")).length < 2)
      )
        if ((i = this.props) != null && i.elementId) {
          const { elementId: o, reelsSettings: s } = this.props;
          return Us.createRoot(document.getElementById(o)).render(
            P.jsx(Q.StrictMode, {
              children: P.jsx(Ix, { settings: s || hm.config[0] }),
            })
          );
        } else console.log("Please provide an element ID.");
      else
        console.log(
          "Component limit reached. Only 2 components are allowed as per the Basic plan."
        );
    }
  }
  return Ax;
});
