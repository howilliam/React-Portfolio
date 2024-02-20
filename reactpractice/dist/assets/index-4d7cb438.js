function dm(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const o = Object.getOwnPropertyDescriptor(r, i);
          o &&
            Object.defineProperty(
              e,
              i,
              o.get ? o : { enumerable: !0, get: () => r[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const l of o.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && r(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
function pm(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Rf = { exports: {} },
  Bo = {},
  $f = { exports: {} },
  M = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hi = Symbol.for("react.element"),
  hm = Symbol.for("react.portal"),
  mm = Symbol.for("react.fragment"),
  gm = Symbol.for("react.strict_mode"),
  vm = Symbol.for("react.profiler"),
  ym = Symbol.for("react.provider"),
  _m = Symbol.for("react.context"),
  Em = Symbol.for("react.forward_ref"),
  wm = Symbol.for("react.suspense"),
  Sm = Symbol.for("react.memo"),
  Cm = Symbol.for("react.lazy"),
  $u = Symbol.iterator;
function Tm(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = ($u && e[$u]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Mf = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  jf = Object.assign,
  zf = {};
function mr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = zf),
    (this.updater = n || Mf);
}
mr.prototype.isReactComponent = {};
mr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
mr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function bf() {}
bf.prototype = mr.prototype;
function ha(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = zf),
    (this.updater = n || Mf);
}
var ma = (ha.prototype = new bf());
ma.constructor = ha;
jf(ma, mr.prototype);
ma.isPureReactComponent = !0;
var Mu = Array.isArray,
  Ff = Object.prototype.hasOwnProperty,
  ga = { current: null },
  Vf = { key: !0, ref: !0, __self: !0, __source: !0 };
function Uf(e, t, n) {
  var r,
    i = {},
    o = null,
    l = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (l = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Ff.call(t, r) && !Vf.hasOwnProperty(r) && (i[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) i.children = n;
  else if (1 < s) {
    for (var a = Array(s), u = 0; u < s; u++) a[u] = arguments[u + 2];
    i.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) i[r] === void 0 && (i[r] = s[r]);
  return {
    $$typeof: hi,
    type: e,
    key: o,
    ref: l,
    props: i,
    _owner: ga.current,
  };
}
function Nm(e, t) {
  return {
    $$typeof: hi,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function va(e) {
  return typeof e == "object" && e !== null && e.$$typeof === hi;
}
function km(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var ju = /\/+/g;
function wl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? km("" + e.key)
    : t.toString(36);
}
function qi(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else
    switch (o) {
      case "string":
      case "number":
        l = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case hi:
          case hm:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (i = i(l)),
      (e = r === "" ? "." + wl(l, 0) : r),
      Mu(i)
        ? ((n = ""),
          e != null && (n = e.replace(ju, "$&/") + "/"),
          qi(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (va(i) &&
            (i = Nm(
              i,
              n +
                (!i.key || (l && l.key === i.key)
                  ? ""
                  : ("" + i.key).replace(ju, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((l = 0), (r = r === "" ? "." : r + ":"), Mu(e)))
    for (var s = 0; s < e.length; s++) {
      o = e[s];
      var a = r + wl(o, s);
      l += qi(o, t, n, a, i);
    }
  else if (((a = Tm(e)), typeof a == "function"))
    for (e = a.call(e), s = 0; !(o = e.next()).done; )
      (o = o.value), (a = r + wl(o, s++)), (l += qi(o, t, n, a, i));
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
  return l;
}
function xi(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    qi(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function xm(e) {
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
var ye = { current: null },
  Zi = { transition: null },
  Am = {
    ReactCurrentDispatcher: ye,
    ReactCurrentBatchConfig: Zi,
    ReactCurrentOwner: ga,
  };
M.Children = {
  map: xi,
  forEach: function (e, t, n) {
    xi(
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
      xi(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      xi(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!va(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
M.Component = mr;
M.Fragment = mm;
M.Profiler = vm;
M.PureComponent = ha;
M.StrictMode = gm;
M.Suspense = wm;
M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Am;
M.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = jf({}, e.props),
    i = e.key,
    o = e.ref,
    l = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (l = ga.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (a in t)
      Ff.call(t, a) &&
        !Vf.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    s = Array(a);
    for (var u = 0; u < a; u++) s[u] = arguments[u + 2];
    r.children = s;
  }
  return { $$typeof: hi, type: e.type, key: i, ref: o, props: r, _owner: l };
};
M.createContext = function (e) {
  return (
    (e = {
      $$typeof: _m,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: ym, _context: e }),
    (e.Consumer = e)
  );
};
M.createElement = Uf;
M.createFactory = function (e) {
  var t = Uf.bind(null, e);
  return (t.type = e), t;
};
M.createRef = function () {
  return { current: null };
};
M.forwardRef = function (e) {
  return { $$typeof: Em, render: e };
};
M.isValidElement = va;
M.lazy = function (e) {
  return { $$typeof: Cm, _payload: { _status: -1, _result: e }, _init: xm };
};
M.memo = function (e, t) {
  return { $$typeof: Sm, type: e, compare: t === void 0 ? null : t };
};
M.startTransition = function (e) {
  var t = Zi.transition;
  Zi.transition = {};
  try {
    e();
  } finally {
    Zi.transition = t;
  }
};
M.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
M.useCallback = function (e, t) {
  return ye.current.useCallback(e, t);
};
M.useContext = function (e) {
  return ye.current.useContext(e);
};
M.useDebugValue = function () {};
M.useDeferredValue = function (e) {
  return ye.current.useDeferredValue(e);
};
M.useEffect = function (e, t) {
  return ye.current.useEffect(e, t);
};
M.useId = function () {
  return ye.current.useId();
};
M.useImperativeHandle = function (e, t, n) {
  return ye.current.useImperativeHandle(e, t, n);
};
M.useInsertionEffect = function (e, t) {
  return ye.current.useInsertionEffect(e, t);
};
M.useLayoutEffect = function (e, t) {
  return ye.current.useLayoutEffect(e, t);
};
M.useMemo = function (e, t) {
  return ye.current.useMemo(e, t);
};
M.useReducer = function (e, t, n) {
  return ye.current.useReducer(e, t, n);
};
M.useRef = function (e) {
  return ye.current.useRef(e);
};
M.useState = function (e) {
  return ye.current.useState(e);
};
M.useSyncExternalStore = function (e, t, n) {
  return ye.current.useSyncExternalStore(e, t, n);
};
M.useTransition = function () {
  return ye.current.useTransition();
};
M.version = "18.2.0";
$f.exports = M;
var A = $f.exports;
const Wf = pm(A),
  Om = dm({ __proto__: null, default: Wf }, [A]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Lm = A,
  Pm = Symbol.for("react.element"),
  Dm = Symbol.for("react.fragment"),
  Im = Object.prototype.hasOwnProperty,
  Rm = Lm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  $m = { key: !0, ref: !0, __self: !0, __source: !0 };
function Hf(e, t, n) {
  var r,
    i = {},
    o = null,
    l = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (l = t.ref);
  for (r in t) Im.call(t, r) && !$m.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: Pm,
    type: e,
    key: o,
    ref: l,
    props: i,
    _owner: Rm.current,
  };
}
Bo.Fragment = Dm;
Bo.jsx = Hf;
Bo.jsxs = Hf;
Rf.exports = Bo;
var C = Rf.exports,
  cs = {},
  Bf = { exports: {} },
  $e = {},
  Kf = { exports: {} },
  Yf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(O, I) {
    var R = O.length;
    O.push(I);
    e: for (; 0 < R; ) {
      var V = (R - 1) >>> 1,
        H = O[V];
      if (0 < i(H, I)) (O[V] = I), (O[R] = H), (R = V);
      else break e;
    }
  }
  function n(O) {
    return O.length === 0 ? null : O[0];
  }
  function r(O) {
    if (O.length === 0) return null;
    var I = O[0],
      R = O.pop();
    if (R !== I) {
      O[0] = R;
      e: for (var V = 0, H = O.length, dt = H >>> 1; V < dt; ) {
        var Ee = 2 * (V + 1) - 1,
          je = O[Ee],
          xe = Ee + 1,
          pt = O[xe];
        if (0 > i(je, R))
          xe < H && 0 > i(pt, je)
            ? ((O[V] = pt), (O[xe] = R), (V = xe))
            : ((O[V] = je), (O[Ee] = R), (V = Ee));
        else if (xe < H && 0 > i(pt, R)) (O[V] = pt), (O[xe] = R), (V = xe);
        else break e;
      }
    }
    return I;
  }
  function i(O, I) {
    var R = O.sortIndex - I.sortIndex;
    return R !== 0 ? R : O.id - I.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var l = Date,
      s = l.now();
    e.unstable_now = function () {
      return l.now() - s;
    };
  }
  var a = [],
    u = [],
    c = 1,
    p = null,
    m = 3,
    v = !1,
    _ = !1,
    y = !1,
    E = typeof setTimeout == "function" ? setTimeout : null,
    d = typeof clearTimeout == "function" ? clearTimeout : null,
    f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(O) {
    for (var I = n(u); I !== null; ) {
      if (I.callback === null) r(u);
      else if (I.startTime <= O)
        r(u), (I.sortIndex = I.expirationTime), t(a, I);
      else break;
      I = n(u);
    }
  }
  function g(O) {
    if (((y = !1), h(O), !_))
      if (n(a) !== null) (_ = !0), oe(w);
      else {
        var I = n(u);
        I !== null && pe(g, I.startTime - O);
      }
  }
  function w(O, I) {
    (_ = !1), y && ((y = !1), d(x), (x = -1)), (v = !0);
    var R = m;
    try {
      for (
        h(I), p = n(a);
        p !== null && (!(p.expirationTime > I) || (O && !z()));

      ) {
        var V = p.callback;
        if (typeof V == "function") {
          (p.callback = null), (m = p.priorityLevel);
          var H = V(p.expirationTime <= I);
          (I = e.unstable_now()),
            typeof H == "function" ? (p.callback = H) : p === n(a) && r(a),
            h(I);
        } else r(a);
        p = n(a);
      }
      if (p !== null) var dt = !0;
      else {
        var Ee = n(u);
        Ee !== null && pe(g, Ee.startTime - I), (dt = !1);
      }
      return dt;
    } finally {
      (p = null), (m = R), (v = !1);
    }
  }
  var N = !1,
    k = null,
    x = -1,
    $ = 5,
    P = -1;
  function z() {
    return !(e.unstable_now() - P < $);
  }
  function ie() {
    if (k !== null) {
      var O = e.unstable_now();
      P = O;
      var I = !0;
      try {
        I = k(!0, O);
      } finally {
        I ? q() : ((N = !1), (k = null));
      }
    } else N = !1;
  }
  var q;
  if (typeof f == "function")
    q = function () {
      f(ie);
    };
  else if (typeof MessageChannel < "u") {
    var nt = new MessageChannel(),
      ft = nt.port2;
    (nt.port1.onmessage = ie),
      (q = function () {
        ft.postMessage(null);
      });
  } else
    q = function () {
      E(ie, 0);
    };
  function oe(O) {
    (k = O), N || ((N = !0), q());
  }
  function pe(O, I) {
    x = E(function () {
      O(e.unstable_now());
    }, I);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (O) {
      O.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      _ || v || ((_ = !0), oe(w));
    }),
    (e.unstable_forceFrameRate = function (O) {
      0 > O || 125 < O
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : ($ = 0 < O ? Math.floor(1e3 / O) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (O) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var I = 3;
          break;
        default:
          I = m;
      }
      var R = m;
      m = I;
      try {
        return O();
      } finally {
        m = R;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (O, I) {
      switch (O) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          O = 3;
      }
      var R = m;
      m = O;
      try {
        return I();
      } finally {
        m = R;
      }
    }),
    (e.unstable_scheduleCallback = function (O, I, R) {
      var V = e.unstable_now();
      switch (
        (typeof R == "object" && R !== null
          ? ((R = R.delay), (R = typeof R == "number" && 0 < R ? V + R : V))
          : (R = V),
        O)
      ) {
        case 1:
          var H = -1;
          break;
        case 2:
          H = 250;
          break;
        case 5:
          H = 1073741823;
          break;
        case 4:
          H = 1e4;
          break;
        default:
          H = 5e3;
      }
      return (
        (H = R + H),
        (O = {
          id: c++,
          callback: I,
          priorityLevel: O,
          startTime: R,
          expirationTime: H,
          sortIndex: -1,
        }),
        R > V
          ? ((O.sortIndex = R),
            t(u, O),
            n(a) === null &&
              O === n(u) &&
              (y ? (d(x), (x = -1)) : (y = !0), pe(g, R - V)))
          : ((O.sortIndex = H), t(a, O), _ || v || ((_ = !0), oe(w))),
        O
      );
    }),
    (e.unstable_shouldYield = z),
    (e.unstable_wrapCallback = function (O) {
      var I = m;
      return function () {
        var R = m;
        m = I;
        try {
          return O.apply(this, arguments);
        } finally {
          m = R;
        }
      };
    });
})(Yf);
Kf.exports = Yf;
var Mm = Kf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Qf = A,
  Pe = Mm;
function T(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
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
var Gf = new Set(),
  Qr = {};
function Tn(e, t) {
  er(e, t), er(e + "Capture", t);
}
function er(e, t) {
  for (Qr[e] = t, e = 0; e < t.length; e++) Gf.add(t[e]);
}
var wt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  fs = Object.prototype.hasOwnProperty,
  jm =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  zu = {},
  bu = {};
function zm(e) {
  return fs.call(bu, e)
    ? !0
    : fs.call(zu, e)
    ? !1
    : jm.test(e)
    ? (bu[e] = !0)
    : ((zu[e] = !0), !1);
}
function bm(e, t, n, r) {
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
function Fm(e, t, n, r) {
  if (t === null || typeof t > "u" || bm(e, t, n, r)) return !0;
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
function _e(e, t, n, r, i, o, l) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = l);
}
var ae = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ae[e] = new _e(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ae[t] = new _e(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ae[e] = new _e(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ae[e] = new _e(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ae[e] = new _e(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ae[e] = new _e(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ae[e] = new _e(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ae[e] = new _e(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ae[e] = new _e(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ya = /[\-:]([a-z])/g;
function _a(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ya, _a);
    ae[t] = new _e(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ya, _a);
    ae[t] = new _e(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(ya, _a);
  ae[t] = new _e(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ae[e] = new _e(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ae.xlinkHref = new _e(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ae[e] = new _e(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ea(e, t, n, r) {
  var i = ae.hasOwnProperty(t) ? ae[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Fm(t, n, i, r) && (n = null),
    r || i === null
      ? zm(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
var kt = Qf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Ai = Symbol.for("react.element"),
  $n = Symbol.for("react.portal"),
  Mn = Symbol.for("react.fragment"),
  wa = Symbol.for("react.strict_mode"),
  ds = Symbol.for("react.profiler"),
  Xf = Symbol.for("react.provider"),
  qf = Symbol.for("react.context"),
  Sa = Symbol.for("react.forward_ref"),
  ps = Symbol.for("react.suspense"),
  hs = Symbol.for("react.suspense_list"),
  Ca = Symbol.for("react.memo"),
  Lt = Symbol.for("react.lazy"),
  Zf = Symbol.for("react.offscreen"),
  Fu = Symbol.iterator;
function Cr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Fu && e[Fu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Q = Object.assign,
  Sl;
function Ir(e) {
  if (Sl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Sl = (t && t[1]) || "";
    }
  return (
    `
` +
    Sl +
    e
  );
}
var Cl = !1;
function Tl(e, t) {
  if (!e || Cl) return "";
  Cl = !0;
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
          l = i.length - 1,
          s = o.length - 1;
        1 <= l && 0 <= s && i[l] !== o[s];

      )
        s--;
      for (; 1 <= l && 0 <= s; l--, s--)
        if (i[l] !== o[s]) {
          if (l !== 1 || s !== 1)
            do
              if ((l--, s--, 0 > s || i[l] !== o[s])) {
                var a =
                  `
` + i[l].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= l && 0 <= s);
          break;
        }
    }
  } finally {
    (Cl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Ir(e) : "";
}
function Vm(e) {
  switch (e.tag) {
    case 5:
      return Ir(e.type);
    case 16:
      return Ir("Lazy");
    case 13:
      return Ir("Suspense");
    case 19:
      return Ir("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Tl(e.type, !1)), e;
    case 11:
      return (e = Tl(e.type.render, !1)), e;
    case 1:
      return (e = Tl(e.type, !0)), e;
    default:
      return "";
  }
}
function ms(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Mn:
      return "Fragment";
    case $n:
      return "Portal";
    case ds:
      return "Profiler";
    case wa:
      return "StrictMode";
    case ps:
      return "Suspense";
    case hs:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case qf:
        return (e.displayName || "Context") + ".Consumer";
      case Xf:
        return (e._context.displayName || "Context") + ".Provider";
      case Sa:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Ca:
        return (
          (t = e.displayName || null), t !== null ? t : ms(e.type) || "Memo"
        );
      case Lt:
        (t = e._payload), (e = e._init);
        try {
          return ms(e(t));
        } catch {}
    }
  return null;
}
function Um(e) {
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
      return ms(t);
    case 8:
      return t === wa ? "StrictMode" : "Mode";
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
function Kt(e) {
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
function Jf(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Wm(e) {
  var t = Jf(e) ? "checked" : "value",
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
        set: function (l) {
          (r = "" + l), o.call(this, l);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (l) {
          r = "" + l;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Oi(e) {
  e._valueTracker || (e._valueTracker = Wm(e));
}
function ed(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Jf(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function ho(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function gs(e, t) {
  var n = t.checked;
  return Q({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Vu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Kt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function td(e, t) {
  (t = t.checked), t != null && Ea(e, "checked", t, !1);
}
function vs(e, t) {
  td(e, t);
  var n = Kt(t.value),
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
    ? ys(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && ys(e, t.type, Kt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Uu(e, t, n) {
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
function ys(e, t, n) {
  (t !== "number" || ho(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Rr = Array.isArray;
function Qn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Kt(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function _s(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(T(91));
  return Q({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Wu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(T(92));
      if (Rr(n)) {
        if (1 < n.length) throw Error(T(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Kt(n) };
}
function nd(e, t) {
  var n = Kt(t.value),
    r = Kt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Hu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function rd(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Es(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? rd(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Li,
  id = (function (e) {
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
        Li = Li || document.createElement("div"),
          Li.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Li.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Gr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var jr = {
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
  Hm = ["Webkit", "ms", "Moz", "O"];
Object.keys(jr).forEach(function (e) {
  Hm.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (jr[t] = jr[e]);
  });
});
function od(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (jr.hasOwnProperty(e) && jr[e])
    ? ("" + t).trim()
    : t + "px";
}
function ld(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = od(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var Bm = Q(
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
function ws(e, t) {
  if (t) {
    if (Bm[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(T(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(T(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(T(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(T(62));
  }
}
function Ss(e, t) {
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
var Cs = null;
function Ta(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Ts = null,
  Gn = null,
  Xn = null;
function Bu(e) {
  if ((e = vi(e))) {
    if (typeof Ts != "function") throw Error(T(280));
    var t = e.stateNode;
    t && ((t = Xo(t)), Ts(e.stateNode, e.type, t));
  }
}
function sd(e) {
  Gn ? (Xn ? Xn.push(e) : (Xn = [e])) : (Gn = e);
}
function ad() {
  if (Gn) {
    var e = Gn,
      t = Xn;
    if (((Xn = Gn = null), Bu(e), t)) for (e = 0; e < t.length; e++) Bu(t[e]);
  }
}
function ud(e, t) {
  return e(t);
}
function cd() {}
var Nl = !1;
function fd(e, t, n) {
  if (Nl) return e(t, n);
  Nl = !0;
  try {
    return ud(e, t, n);
  } finally {
    (Nl = !1), (Gn !== null || Xn !== null) && (cd(), ad());
  }
}
function Xr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Xo(n);
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
  if (n && typeof n != "function") throw Error(T(231, t, typeof n));
  return n;
}
var Ns = !1;
if (wt)
  try {
    var Tr = {};
    Object.defineProperty(Tr, "passive", {
      get: function () {
        Ns = !0;
      },
    }),
      window.addEventListener("test", Tr, Tr),
      window.removeEventListener("test", Tr, Tr);
  } catch {
    Ns = !1;
  }
function Km(e, t, n, r, i, o, l, s, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var zr = !1,
  mo = null,
  go = !1,
  ks = null,
  Ym = {
    onError: function (e) {
      (zr = !0), (mo = e);
    },
  };
function Qm(e, t, n, r, i, o, l, s, a) {
  (zr = !1), (mo = null), Km.apply(Ym, arguments);
}
function Gm(e, t, n, r, i, o, l, s, a) {
  if ((Qm.apply(this, arguments), zr)) {
    if (zr) {
      var u = mo;
      (zr = !1), (mo = null);
    } else throw Error(T(198));
    go || ((go = !0), (ks = u));
  }
}
function Nn(e) {
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
function dd(e) {
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
function Ku(e) {
  if (Nn(e) !== e) throw Error(T(188));
}
function Xm(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Nn(e)), t === null)) throw Error(T(188));
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
        if (o === n) return Ku(i), e;
        if (o === r) return Ku(i), t;
        o = o.sibling;
      }
      throw Error(T(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var l = !1, s = i.child; s; ) {
        if (s === n) {
          (l = !0), (n = i), (r = o);
          break;
        }
        if (s === r) {
          (l = !0), (r = i), (n = o);
          break;
        }
        s = s.sibling;
      }
      if (!l) {
        for (s = o.child; s; ) {
          if (s === n) {
            (l = !0), (n = o), (r = i);
            break;
          }
          if (s === r) {
            (l = !0), (r = o), (n = i);
            break;
          }
          s = s.sibling;
        }
        if (!l) throw Error(T(189));
      }
    }
    if (n.alternate !== r) throw Error(T(190));
  }
  if (n.tag !== 3) throw Error(T(188));
  return n.stateNode.current === n ? e : t;
}
function pd(e) {
  return (e = Xm(e)), e !== null ? hd(e) : null;
}
function hd(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = hd(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var md = Pe.unstable_scheduleCallback,
  Yu = Pe.unstable_cancelCallback,
  qm = Pe.unstable_shouldYield,
  Zm = Pe.unstable_requestPaint,
  Z = Pe.unstable_now,
  Jm = Pe.unstable_getCurrentPriorityLevel,
  Na = Pe.unstable_ImmediatePriority,
  gd = Pe.unstable_UserBlockingPriority,
  vo = Pe.unstable_NormalPriority,
  eg = Pe.unstable_LowPriority,
  vd = Pe.unstable_IdlePriority,
  Ko = null,
  lt = null;
function tg(e) {
  if (lt && typeof lt.onCommitFiberRoot == "function")
    try {
      lt.onCommitFiberRoot(Ko, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ze = Math.clz32 ? Math.clz32 : ig,
  ng = Math.log,
  rg = Math.LN2;
function ig(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((ng(e) / rg) | 0)) | 0;
}
var Pi = 64,
  Di = 4194304;
function $r(e) {
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
function yo(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    l = n & 268435455;
  if (l !== 0) {
    var s = l & ~i;
    s !== 0 ? (r = $r(s)) : ((o &= l), o !== 0 && (r = $r(o)));
  } else (l = n & ~i), l !== 0 ? (r = $r(l)) : o !== 0 && (r = $r(o));
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
      (n = 31 - Ze(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function og(e, t) {
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
function lg(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var l = 31 - Ze(o),
      s = 1 << l,
      a = i[l];
    a === -1
      ? (!(s & n) || s & r) && (i[l] = og(s, t))
      : a <= t && (e.expiredLanes |= s),
      (o &= ~s);
  }
}
function xs(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function yd() {
  var e = Pi;
  return (Pi <<= 1), !(Pi & 4194240) && (Pi = 64), e;
}
function kl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function mi(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ze(t)),
    (e[t] = n);
}
function sg(e, t) {
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
    var i = 31 - Ze(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function ka(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ze(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var b = 0;
function _d(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Ed,
  xa,
  wd,
  Sd,
  Cd,
  As = !1,
  Ii = [],
  jt = null,
  zt = null,
  bt = null,
  qr = new Map(),
  Zr = new Map(),
  Dt = [],
  ag =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Qu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      jt = null;
      break;
    case "dragenter":
    case "dragleave":
      zt = null;
      break;
    case "mouseover":
    case "mouseout":
      bt = null;
      break;
    case "pointerover":
    case "pointerout":
      qr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Zr.delete(t.pointerId);
  }
}
function Nr(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = vi(t)), t !== null && xa(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function ug(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (jt = Nr(jt, e, t, n, r, i)), !0;
    case "dragenter":
      return (zt = Nr(zt, e, t, n, r, i)), !0;
    case "mouseover":
      return (bt = Nr(bt, e, t, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return qr.set(o, Nr(qr.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), Zr.set(o, Nr(Zr.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function Td(e) {
  var t = un(e.target);
  if (t !== null) {
    var n = Nn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = dd(n)), t !== null)) {
          (e.blockedOn = t),
            Cd(e.priority, function () {
              wd(n);
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
function Ji(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Os(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Cs = r), n.target.dispatchEvent(r), (Cs = null);
    } else return (t = vi(n)), t !== null && xa(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Gu(e, t, n) {
  Ji(e) && n.delete(t);
}
function cg() {
  (As = !1),
    jt !== null && Ji(jt) && (jt = null),
    zt !== null && Ji(zt) && (zt = null),
    bt !== null && Ji(bt) && (bt = null),
    qr.forEach(Gu),
    Zr.forEach(Gu);
}
function kr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    As ||
      ((As = !0),
      Pe.unstable_scheduleCallback(Pe.unstable_NormalPriority, cg)));
}
function Jr(e) {
  function t(i) {
    return kr(i, e);
  }
  if (0 < Ii.length) {
    kr(Ii[0], e);
    for (var n = 1; n < Ii.length; n++) {
      var r = Ii[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    jt !== null && kr(jt, e),
      zt !== null && kr(zt, e),
      bt !== null && kr(bt, e),
      qr.forEach(t),
      Zr.forEach(t),
      n = 0;
    n < Dt.length;
    n++
  )
    (r = Dt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Dt.length && ((n = Dt[0]), n.blockedOn === null); )
    Td(n), n.blockedOn === null && Dt.shift();
}
var qn = kt.ReactCurrentBatchConfig,
  _o = !0;
function fg(e, t, n, r) {
  var i = b,
    o = qn.transition;
  qn.transition = null;
  try {
    (b = 1), Aa(e, t, n, r);
  } finally {
    (b = i), (qn.transition = o);
  }
}
function dg(e, t, n, r) {
  var i = b,
    o = qn.transition;
  qn.transition = null;
  try {
    (b = 4), Aa(e, t, n, r);
  } finally {
    (b = i), (qn.transition = o);
  }
}
function Aa(e, t, n, r) {
  if (_o) {
    var i = Os(e, t, n, r);
    if (i === null) Ml(e, t, r, Eo, n), Qu(e, r);
    else if (ug(i, e, t, n, r)) r.stopPropagation();
    else if ((Qu(e, r), t & 4 && -1 < ag.indexOf(e))) {
      for (; i !== null; ) {
        var o = vi(i);
        if (
          (o !== null && Ed(o),
          (o = Os(e, t, n, r)),
          o === null && Ml(e, t, r, Eo, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else Ml(e, t, r, null, n);
  }
}
var Eo = null;
function Os(e, t, n, r) {
  if (((Eo = null), (e = Ta(r)), (e = un(e)), e !== null))
    if (((t = Nn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = dd(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Eo = e), null;
}
function Nd(e) {
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
      switch (Jm()) {
        case Na:
          return 1;
        case gd:
          return 4;
        case vo:
        case eg:
          return 16;
        case vd:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Rt = null,
  Oa = null,
  eo = null;
function kd() {
  if (eo) return eo;
  var e,
    t = Oa,
    n = t.length,
    r,
    i = "value" in Rt ? Rt.value : Rt.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === i[o - r]; r++);
  return (eo = i.slice(e, 1 < r ? 1 - r : void 0));
}
function to(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ri() {
  return !0;
}
function Xu() {
  return !1;
}
function Me(e) {
  function t(n, r, i, o, l) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = l),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(o) : o[s]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Ri
        : Xu),
      (this.isPropagationStopped = Xu),
      this
    );
  }
  return (
    Q(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Ri));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ri));
      },
      persist: function () {},
      isPersistent: Ri,
    }),
    t
  );
}
var gr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  La = Me(gr),
  gi = Q({}, gr, { view: 0, detail: 0 }),
  pg = Me(gi),
  xl,
  Al,
  xr,
  Yo = Q({}, gi, {
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
    getModifierState: Pa,
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
        : (e !== xr &&
            (xr && e.type === "mousemove"
              ? ((xl = e.screenX - xr.screenX), (Al = e.screenY - xr.screenY))
              : (Al = xl = 0),
            (xr = e)),
          xl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Al;
    },
  }),
  qu = Me(Yo),
  hg = Q({}, Yo, { dataTransfer: 0 }),
  mg = Me(hg),
  gg = Q({}, gi, { relatedTarget: 0 }),
  Ol = Me(gg),
  vg = Q({}, gr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  yg = Me(vg),
  _g = Q({}, gr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Eg = Me(_g),
  wg = Q({}, gr, { data: 0 }),
  Zu = Me(wg),
  Sg = {
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
  Cg = {
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
  Tg = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Ng(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Tg[e]) ? !!t[e] : !1;
}
function Pa() {
  return Ng;
}
var kg = Q({}, gi, {
    key: function (e) {
      if (e.key) {
        var t = Sg[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = to(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Cg[e.keyCode] || "Unidentified"
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
    getModifierState: Pa,
    charCode: function (e) {
      return e.type === "keypress" ? to(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? to(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  xg = Me(kg),
  Ag = Q({}, Yo, {
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
  Ju = Me(Ag),
  Og = Q({}, gi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Pa,
  }),
  Lg = Me(Og),
  Pg = Q({}, gr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Dg = Me(Pg),
  Ig = Q({}, Yo, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
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
  Rg = Me(Ig),
  $g = [9, 13, 27, 32],
  Da = wt && "CompositionEvent" in window,
  br = null;
wt && "documentMode" in document && (br = document.documentMode);
var Mg = wt && "TextEvent" in window && !br,
  xd = wt && (!Da || (br && 8 < br && 11 >= br)),
  ec = String.fromCharCode(32),
  tc = !1;
function Ad(e, t) {
  switch (e) {
    case "keyup":
      return $g.indexOf(t.keyCode) !== -1;
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
function Od(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var jn = !1;
function jg(e, t) {
  switch (e) {
    case "compositionend":
      return Od(t);
    case "keypress":
      return t.which !== 32 ? null : ((tc = !0), ec);
    case "textInput":
      return (e = t.data), e === ec && tc ? null : e;
    default:
      return null;
  }
}
function zg(e, t) {
  if (jn)
    return e === "compositionend" || (!Da && Ad(e, t))
      ? ((e = kd()), (eo = Oa = Rt = null), (jn = !1), e)
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
      return xd && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var bg = {
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
function nc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!bg[e.type] : t === "textarea";
}
function Ld(e, t, n, r) {
  sd(r),
    (t = wo(t, "onChange")),
    0 < t.length &&
      ((n = new La("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Fr = null,
  ei = null;
function Fg(e) {
  Vd(e, 0);
}
function Qo(e) {
  var t = Fn(e);
  if (ed(t)) return e;
}
function Vg(e, t) {
  if (e === "change") return t;
}
var Pd = !1;
if (wt) {
  var Ll;
  if (wt) {
    var Pl = "oninput" in document;
    if (!Pl) {
      var rc = document.createElement("div");
      rc.setAttribute("oninput", "return;"),
        (Pl = typeof rc.oninput == "function");
    }
    Ll = Pl;
  } else Ll = !1;
  Pd = Ll && (!document.documentMode || 9 < document.documentMode);
}
function ic() {
  Fr && (Fr.detachEvent("onpropertychange", Dd), (ei = Fr = null));
}
function Dd(e) {
  if (e.propertyName === "value" && Qo(ei)) {
    var t = [];
    Ld(t, ei, e, Ta(e)), fd(Fg, t);
  }
}
function Ug(e, t, n) {
  e === "focusin"
    ? (ic(), (Fr = t), (ei = n), Fr.attachEvent("onpropertychange", Dd))
    : e === "focusout" && ic();
}
function Wg(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Qo(ei);
}
function Hg(e, t) {
  if (e === "click") return Qo(t);
}
function Bg(e, t) {
  if (e === "input" || e === "change") return Qo(t);
}
function Kg(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var et = typeof Object.is == "function" ? Object.is : Kg;
function ti(e, t) {
  if (et(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!fs.call(t, i) || !et(e[i], t[i])) return !1;
  }
  return !0;
}
function oc(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function lc(e, t) {
  var n = oc(e);
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
    n = oc(n);
  }
}
function Id(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Id(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Rd() {
  for (var e = window, t = ho(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ho(e.document);
  }
  return t;
}
function Ia(e) {
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
function Yg(e) {
  var t = Rd(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Id(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Ia(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = lc(n, o));
        var l = lc(n, r);
        i &&
          l &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== l.node ||
            e.focusOffset !== l.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(l.node, l.offset))
            : (t.setEnd(l.node, l.offset), e.addRange(t)));
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
var Qg = wt && "documentMode" in document && 11 >= document.documentMode,
  zn = null,
  Ls = null,
  Vr = null,
  Ps = !1;
function sc(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ps ||
    zn == null ||
    zn !== ho(r) ||
    ((r = zn),
    "selectionStart" in r && Ia(r)
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
    (Vr && ti(Vr, r)) ||
      ((Vr = r),
      (r = wo(Ls, "onSelect")),
      0 < r.length &&
        ((t = new La("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = zn))));
}
function $i(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var bn = {
    animationend: $i("Animation", "AnimationEnd"),
    animationiteration: $i("Animation", "AnimationIteration"),
    animationstart: $i("Animation", "AnimationStart"),
    transitionend: $i("Transition", "TransitionEnd"),
  },
  Dl = {},
  $d = {};
wt &&
  (($d = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete bn.animationend.animation,
    delete bn.animationiteration.animation,
    delete bn.animationstart.animation),
  "TransitionEvent" in window || delete bn.transitionend.transition);
function Go(e) {
  if (Dl[e]) return Dl[e];
  if (!bn[e]) return e;
  var t = bn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in $d) return (Dl[e] = t[n]);
  return e;
}
var Md = Go("animationend"),
  jd = Go("animationiteration"),
  zd = Go("animationstart"),
  bd = Go("transitionend"),
  Fd = new Map(),
  ac =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function qt(e, t) {
  Fd.set(e, t), Tn(t, [e]);
}
for (var Il = 0; Il < ac.length; Il++) {
  var Rl = ac[Il],
    Gg = Rl.toLowerCase(),
    Xg = Rl[0].toUpperCase() + Rl.slice(1);
  qt(Gg, "on" + Xg);
}
qt(Md, "onAnimationEnd");
qt(jd, "onAnimationIteration");
qt(zd, "onAnimationStart");
qt("dblclick", "onDoubleClick");
qt("focusin", "onFocus");
qt("focusout", "onBlur");
qt(bd, "onTransitionEnd");
er("onMouseEnter", ["mouseout", "mouseover"]);
er("onMouseLeave", ["mouseout", "mouseover"]);
er("onPointerEnter", ["pointerout", "pointerover"]);
er("onPointerLeave", ["pointerout", "pointerover"]);
Tn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Tn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Tn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Tn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Tn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Tn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Mr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  qg = new Set("cancel close invalid load scroll toggle".split(" ").concat(Mr));
function uc(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Gm(r, t, void 0, e), (e.currentTarget = null);
}
function Vd(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var l = r.length - 1; 0 <= l; l--) {
          var s = r[l],
            a = s.instance,
            u = s.currentTarget;
          if (((s = s.listener), a !== o && i.isPropagationStopped())) break e;
          uc(i, s, u), (o = a);
        }
      else
        for (l = 0; l < r.length; l++) {
          if (
            ((s = r[l]),
            (a = s.instance),
            (u = s.currentTarget),
            (s = s.listener),
            a !== o && i.isPropagationStopped())
          )
            break e;
          uc(i, s, u), (o = a);
        }
    }
  }
  if (go) throw ((e = ks), (go = !1), (ks = null), e);
}
function U(e, t) {
  var n = t[Ms];
  n === void 0 && (n = t[Ms] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Ud(t, e, 2, !1), n.add(r));
}
function $l(e, t, n) {
  var r = 0;
  t && (r |= 4), Ud(n, e, r, t);
}
var Mi = "_reactListening" + Math.random().toString(36).slice(2);
function ni(e) {
  if (!e[Mi]) {
    (e[Mi] = !0),
      Gf.forEach(function (n) {
        n !== "selectionchange" && (qg.has(n) || $l(n, !1, e), $l(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Mi] || ((t[Mi] = !0), $l("selectionchange", !1, t));
  }
}
function Ud(e, t, n, r) {
  switch (Nd(t)) {
    case 1:
      var i = fg;
      break;
    case 4:
      i = dg;
      break;
    default:
      i = Aa;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !Ns ||
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
function Ml(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var l = r.tag;
      if (l === 3 || l === 4) {
        var s = r.stateNode.containerInfo;
        if (s === i || (s.nodeType === 8 && s.parentNode === i)) break;
        if (l === 4)
          for (l = r.return; l !== null; ) {
            var a = l.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = l.stateNode.containerInfo),
              a === i || (a.nodeType === 8 && a.parentNode === i))
            )
              return;
            l = l.return;
          }
        for (; s !== null; ) {
          if (((l = un(s)), l === null)) return;
          if (((a = l.tag), a === 5 || a === 6)) {
            r = o = l;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  fd(function () {
    var u = o,
      c = Ta(n),
      p = [];
    e: {
      var m = Fd.get(e);
      if (m !== void 0) {
        var v = La,
          _ = e;
        switch (e) {
          case "keypress":
            if (to(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = xg;
            break;
          case "focusin":
            (_ = "focus"), (v = Ol);
            break;
          case "focusout":
            (_ = "blur"), (v = Ol);
            break;
          case "beforeblur":
          case "afterblur":
            v = Ol;
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
            v = qu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = mg;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = Lg;
            break;
          case Md:
          case jd:
          case zd:
            v = yg;
            break;
          case bd:
            v = Dg;
            break;
          case "scroll":
            v = pg;
            break;
          case "wheel":
            v = Rg;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = Eg;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Ju;
        }
        var y = (t & 4) !== 0,
          E = !y && e === "scroll",
          d = y ? (m !== null ? m + "Capture" : null) : m;
        y = [];
        for (var f = u, h; f !== null; ) {
          h = f;
          var g = h.stateNode;
          if (
            (h.tag === 5 &&
              g !== null &&
              ((h = g),
              d !== null && ((g = Xr(f, d)), g != null && y.push(ri(f, g, h)))),
            E)
          )
            break;
          f = f.return;
        }
        0 < y.length &&
          ((m = new v(m, _, null, n, c)), p.push({ event: m, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (v = e === "mouseout" || e === "pointerout"),
          m &&
            n !== Cs &&
            (_ = n.relatedTarget || n.fromElement) &&
            (un(_) || _[St]))
        )
          break e;
        if (
          (v || m) &&
          ((m =
            c.window === c
              ? c
              : (m = c.ownerDocument)
              ? m.defaultView || m.parentWindow
              : window),
          v
            ? ((_ = n.relatedTarget || n.toElement),
              (v = u),
              (_ = _ ? un(_) : null),
              _ !== null &&
                ((E = Nn(_)), _ !== E || (_.tag !== 5 && _.tag !== 6)) &&
                (_ = null))
            : ((v = null), (_ = u)),
          v !== _)
        ) {
          if (
            ((y = qu),
            (g = "onMouseLeave"),
            (d = "onMouseEnter"),
            (f = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((y = Ju),
              (g = "onPointerLeave"),
              (d = "onPointerEnter"),
              (f = "pointer")),
            (E = v == null ? m : Fn(v)),
            (h = _ == null ? m : Fn(_)),
            (m = new y(g, f + "leave", v, n, c)),
            (m.target = E),
            (m.relatedTarget = h),
            (g = null),
            un(c) === u &&
              ((y = new y(d, f + "enter", _, n, c)),
              (y.target = h),
              (y.relatedTarget = E),
              (g = y)),
            (E = g),
            v && _)
          )
            t: {
              for (y = v, d = _, f = 0, h = y; h; h = On(h)) f++;
              for (h = 0, g = d; g; g = On(g)) h++;
              for (; 0 < f - h; ) (y = On(y)), f--;
              for (; 0 < h - f; ) (d = On(d)), h--;
              for (; f--; ) {
                if (y === d || (d !== null && y === d.alternate)) break t;
                (y = On(y)), (d = On(d));
              }
              y = null;
            }
          else y = null;
          v !== null && cc(p, m, v, y, !1),
            _ !== null && E !== null && cc(p, E, _, y, !0);
        }
      }
      e: {
        if (
          ((m = u ? Fn(u) : window),
          (v = m.nodeName && m.nodeName.toLowerCase()),
          v === "select" || (v === "input" && m.type === "file"))
        )
          var w = Vg;
        else if (nc(m))
          if (Pd) w = Bg;
          else {
            w = Wg;
            var N = Ug;
          }
        else
          (v = m.nodeName) &&
            v.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (w = Hg);
        if (w && (w = w(e, u))) {
          Ld(p, w, n, c);
          break e;
        }
        N && N(e, m, u),
          e === "focusout" &&
            (N = m._wrapperState) &&
            N.controlled &&
            m.type === "number" &&
            ys(m, "number", m.value);
      }
      switch (((N = u ? Fn(u) : window), e)) {
        case "focusin":
          (nc(N) || N.contentEditable === "true") &&
            ((zn = N), (Ls = u), (Vr = null));
          break;
        case "focusout":
          Vr = Ls = zn = null;
          break;
        case "mousedown":
          Ps = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Ps = !1), sc(p, n, c);
          break;
        case "selectionchange":
          if (Qg) break;
        case "keydown":
        case "keyup":
          sc(p, n, c);
      }
      var k;
      if (Da)
        e: {
          switch (e) {
            case "compositionstart":
              var x = "onCompositionStart";
              break e;
            case "compositionend":
              x = "onCompositionEnd";
              break e;
            case "compositionupdate":
              x = "onCompositionUpdate";
              break e;
          }
          x = void 0;
        }
      else
        jn
          ? Ad(e, n) && (x = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (x = "onCompositionStart");
      x &&
        (xd &&
          n.locale !== "ko" &&
          (jn || x !== "onCompositionStart"
            ? x === "onCompositionEnd" && jn && (k = kd())
            : ((Rt = c),
              (Oa = "value" in Rt ? Rt.value : Rt.textContent),
              (jn = !0))),
        (N = wo(u, x)),
        0 < N.length &&
          ((x = new Zu(x, e, null, n, c)),
          p.push({ event: x, listeners: N }),
          k ? (x.data = k) : ((k = Od(n)), k !== null && (x.data = k)))),
        (k = Mg ? jg(e, n) : zg(e, n)) &&
          ((u = wo(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new Zu("onBeforeInput", "beforeinput", null, n, c)),
            p.push({ event: c, listeners: u }),
            (c.data = k)));
    }
    Vd(p, t);
  });
}
function ri(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function wo(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = Xr(e, n)),
      o != null && r.unshift(ri(e, o, i)),
      (o = Xr(e, t)),
      o != null && r.push(ri(e, o, i))),
      (e = e.return);
  }
  return r;
}
function On(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function cc(e, t, n, r, i) {
  for (var o = t._reactName, l = []; n !== null && n !== r; ) {
    var s = n,
      a = s.alternate,
      u = s.stateNode;
    if (a !== null && a === r) break;
    s.tag === 5 &&
      u !== null &&
      ((s = u),
      i
        ? ((a = Xr(n, o)), a != null && l.unshift(ri(n, a, s)))
        : i || ((a = Xr(n, o)), a != null && l.push(ri(n, a, s)))),
      (n = n.return);
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var Zg = /\r\n?/g,
  Jg = /\u0000|\uFFFD/g;
function fc(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Zg,
      `
`
    )
    .replace(Jg, "");
}
function ji(e, t, n) {
  if (((t = fc(t)), fc(e) !== t && n)) throw Error(T(425));
}
function So() {}
var Ds = null,
  Is = null;
function Rs(e, t) {
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
var $s = typeof setTimeout == "function" ? setTimeout : void 0,
  ev = typeof clearTimeout == "function" ? clearTimeout : void 0,
  dc = typeof Promise == "function" ? Promise : void 0,
  tv =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof dc < "u"
      ? function (e) {
          return dc.resolve(null).then(e).catch(nv);
        }
      : $s;
function nv(e) {
  setTimeout(function () {
    throw e;
  });
}
function jl(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), Jr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  Jr(t);
}
function Ft(e) {
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
function pc(e) {
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
var vr = Math.random().toString(36).slice(2),
  ot = "__reactFiber$" + vr,
  ii = "__reactProps$" + vr,
  St = "__reactContainer$" + vr,
  Ms = "__reactEvents$" + vr,
  rv = "__reactListeners$" + vr,
  iv = "__reactHandles$" + vr;
function un(e) {
  var t = e[ot];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[St] || n[ot])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = pc(e); e !== null; ) {
          if ((n = e[ot])) return n;
          e = pc(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function vi(e) {
  return (
    (e = e[ot] || e[St]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Fn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(T(33));
}
function Xo(e) {
  return e[ii] || null;
}
var js = [],
  Vn = -1;
function Zt(e) {
  return { current: e };
}
function W(e) {
  0 > Vn || ((e.current = js[Vn]), (js[Vn] = null), Vn--);
}
function F(e, t) {
  Vn++, (js[Vn] = e.current), (e.current = t);
}
var Yt = {},
  de = Zt(Yt),
  Te = Zt(!1),
  vn = Yt;
function tr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Yt;
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
function Ne(e) {
  return (e = e.childContextTypes), e != null;
}
function Co() {
  W(Te), W(de);
}
function hc(e, t, n) {
  if (de.current !== Yt) throw Error(T(168));
  F(de, t), F(Te, n);
}
function Wd(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(T(108, Um(e) || "Unknown", i));
  return Q({}, n, r);
}
function To(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Yt),
    (vn = de.current),
    F(de, e),
    F(Te, Te.current),
    !0
  );
}
function mc(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(T(169));
  n
    ? ((e = Wd(e, t, vn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      W(Te),
      W(de),
      F(de, e))
    : W(Te),
    F(Te, n);
}
var mt = null,
  qo = !1,
  zl = !1;
function Hd(e) {
  mt === null ? (mt = [e]) : mt.push(e);
}
function ov(e) {
  (qo = !0), Hd(e);
}
function Jt() {
  if (!zl && mt !== null) {
    zl = !0;
    var e = 0,
      t = b;
    try {
      var n = mt;
      for (b = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (mt = null), (qo = !1);
    } catch (i) {
      throw (mt !== null && (mt = mt.slice(e + 1)), md(Na, Jt), i);
    } finally {
      (b = t), (zl = !1);
    }
  }
  return null;
}
var Un = [],
  Wn = 0,
  No = null,
  ko = 0,
  ze = [],
  be = 0,
  yn = null,
  gt = 1,
  vt = "";
function sn(e, t) {
  (Un[Wn++] = ko), (Un[Wn++] = No), (No = e), (ko = t);
}
function Bd(e, t, n) {
  (ze[be++] = gt), (ze[be++] = vt), (ze[be++] = yn), (yn = e);
  var r = gt;
  e = vt;
  var i = 32 - Ze(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - Ze(t) + i;
  if (30 < o) {
    var l = i - (i % 5);
    (o = (r & ((1 << l) - 1)).toString(32)),
      (r >>= l),
      (i -= l),
      (gt = (1 << (32 - Ze(t) + i)) | (n << i) | r),
      (vt = o + e);
  } else (gt = (1 << o) | (n << i) | r), (vt = e);
}
function Ra(e) {
  e.return !== null && (sn(e, 1), Bd(e, 1, 0));
}
function $a(e) {
  for (; e === No; )
    (No = Un[--Wn]), (Un[Wn] = null), (ko = Un[--Wn]), (Un[Wn] = null);
  for (; e === yn; )
    (yn = ze[--be]),
      (ze[be] = null),
      (vt = ze[--be]),
      (ze[be] = null),
      (gt = ze[--be]),
      (ze[be] = null);
}
var Le = null,
  Oe = null,
  B = !1,
  qe = null;
function Kd(e, t) {
  var n = Fe(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function gc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Le = e), (Oe = Ft(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Le = e), (Oe = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = yn !== null ? { id: gt, overflow: vt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Fe(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Le = e),
            (Oe = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function zs(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function bs(e) {
  if (B) {
    var t = Oe;
    if (t) {
      var n = t;
      if (!gc(e, t)) {
        if (zs(e)) throw Error(T(418));
        t = Ft(n.nextSibling);
        var r = Le;
        t && gc(e, t)
          ? Kd(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (B = !1), (Le = e));
      }
    } else {
      if (zs(e)) throw Error(T(418));
      (e.flags = (e.flags & -4097) | 2), (B = !1), (Le = e);
    }
  }
}
function vc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Le = e;
}
function zi(e) {
  if (e !== Le) return !1;
  if (!B) return vc(e), (B = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Rs(e.type, e.memoizedProps))),
    t && (t = Oe))
  ) {
    if (zs(e)) throw (Yd(), Error(T(418)));
    for (; t; ) Kd(e, t), (t = Ft(t.nextSibling));
  }
  if ((vc(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(T(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Oe = Ft(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Oe = null;
    }
  } else Oe = Le ? Ft(e.stateNode.nextSibling) : null;
  return !0;
}
function Yd() {
  for (var e = Oe; e; ) e = Ft(e.nextSibling);
}
function nr() {
  (Oe = Le = null), (B = !1);
}
function Ma(e) {
  qe === null ? (qe = [e]) : qe.push(e);
}
var lv = kt.ReactCurrentBatchConfig;
function Ge(e, t) {
  if (e && e.defaultProps) {
    (t = Q({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var xo = Zt(null),
  Ao = null,
  Hn = null,
  ja = null;
function za() {
  ja = Hn = Ao = null;
}
function ba(e) {
  var t = xo.current;
  W(xo), (e._currentValue = t);
}
function Fs(e, t, n) {
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
function Zn(e, t) {
  (Ao = e),
    (ja = Hn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ce = !0), (e.firstContext = null));
}
function We(e) {
  var t = e._currentValue;
  if (ja !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Hn === null)) {
      if (Ao === null) throw Error(T(308));
      (Hn = e), (Ao.dependencies = { lanes: 0, firstContext: e });
    } else Hn = Hn.next = e;
  return t;
}
var cn = null;
function Fa(e) {
  cn === null ? (cn = [e]) : cn.push(e);
}
function Qd(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Fa(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    Ct(e, r)
  );
}
function Ct(e, t) {
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
var Pt = !1;
function Va(e) {
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
function yt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Vt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), j & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      Ct(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Fa(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    Ct(e, n)
  );
}
function no(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ka(e, n);
  }
}
function yc(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var l = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = l) : (o = o.next = l), (n = n.next);
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
function Oo(e, t, n, r) {
  var i = e.updateQueue;
  Pt = !1;
  var o = i.firstBaseUpdate,
    l = i.lastBaseUpdate,
    s = i.shared.pending;
  if (s !== null) {
    i.shared.pending = null;
    var a = s,
      u = a.next;
    (a.next = null), l === null ? (o = u) : (l.next = u), (l = a);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (s = c.lastBaseUpdate),
      s !== l &&
        (s === null ? (c.firstBaseUpdate = u) : (s.next = u),
        (c.lastBaseUpdate = a)));
  }
  if (o !== null) {
    var p = i.baseState;
    (l = 0), (c = u = a = null), (s = o);
    do {
      var m = s.lane,
        v = s.eventTime;
      if ((r & m) === m) {
        c !== null &&
          (c = c.next =
            {
              eventTime: v,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var _ = e,
            y = s;
          switch (((m = t), (v = n), y.tag)) {
            case 1:
              if (((_ = y.payload), typeof _ == "function")) {
                p = _.call(v, p, m);
                break e;
              }
              p = _;
              break e;
            case 3:
              _.flags = (_.flags & -65537) | 128;
            case 0:
              if (
                ((_ = y.payload),
                (m = typeof _ == "function" ? _.call(v, p, m) : _),
                m == null)
              )
                break e;
              p = Q({}, p, m);
              break e;
            case 2:
              Pt = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (m = i.effects),
          m === null ? (i.effects = [s]) : m.push(s));
      } else
        (v = {
          eventTime: v,
          lane: m,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          c === null ? ((u = c = v), (a = p)) : (c = c.next = v),
          (l |= m);
      if (((s = s.next), s === null)) {
        if (((s = i.shared.pending), s === null)) break;
        (m = s),
          (s = m.next),
          (m.next = null),
          (i.lastBaseUpdate = m),
          (i.shared.pending = null);
      }
    } while (1);
    if (
      (c === null && (a = p),
      (i.baseState = a),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (l |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (En |= l), (e.lanes = l), (e.memoizedState = p);
  }
}
function _c(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(T(191, i));
        i.call(r);
      }
    }
}
var Xd = new Qf.Component().refs;
function Vs(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Q({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Zo = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Nn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = me(),
      i = Wt(e),
      o = yt(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = Vt(e, o, i)),
      t !== null && (Je(t, e, i, r), no(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = me(),
      i = Wt(e),
      o = yt(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Vt(e, o, i)),
      t !== null && (Je(t, e, i, r), no(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = me(),
      r = Wt(e),
      i = yt(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = Vt(e, i, r)),
      t !== null && (Je(t, e, r, n), no(t, e, r));
  },
};
function Ec(e, t, n, r, i, o, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, l)
      : t.prototype && t.prototype.isPureReactComponent
      ? !ti(n, r) || !ti(i, o)
      : !0
  );
}
function qd(e, t, n) {
  var r = !1,
    i = Yt,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = We(o))
      : ((i = Ne(t) ? vn : de.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? tr(e, i) : Yt)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Zo),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function wc(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Zo.enqueueReplaceState(t, t.state, null);
}
function Us(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = Xd), Va(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (i.context = We(o))
    : ((o = Ne(t) ? vn : de.current), (i.context = tr(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Vs(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Zo.enqueueReplaceState(i, i.state, null),
      Oo(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Ar(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(T(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(T(147, e));
      var i = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (l) {
            var s = i.refs;
            s === Xd && (s = i.refs = {}),
              l === null ? delete s[o] : (s[o] = l);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(T(284));
    if (!n._owner) throw Error(T(290, e));
  }
  return e;
}
function bi(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      T(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Sc(e) {
  var t = e._init;
  return t(e._payload);
}
function Zd(e) {
  function t(d, f) {
    if (e) {
      var h = d.deletions;
      h === null ? ((d.deletions = [f]), (d.flags |= 16)) : h.push(f);
    }
  }
  function n(d, f) {
    if (!e) return null;
    for (; f !== null; ) t(d, f), (f = f.sibling);
    return null;
  }
  function r(d, f) {
    for (d = new Map(); f !== null; )
      f.key !== null ? d.set(f.key, f) : d.set(f.index, f), (f = f.sibling);
    return d;
  }
  function i(d, f) {
    return (d = Ht(d, f)), (d.index = 0), (d.sibling = null), d;
  }
  function o(d, f, h) {
    return (
      (d.index = h),
      e
        ? ((h = d.alternate),
          h !== null
            ? ((h = h.index), h < f ? ((d.flags |= 2), f) : h)
            : ((d.flags |= 2), f))
        : ((d.flags |= 1048576), f)
    );
  }
  function l(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function s(d, f, h, g) {
    return f === null || f.tag !== 6
      ? ((f = Bl(h, d.mode, g)), (f.return = d), f)
      : ((f = i(f, h)), (f.return = d), f);
  }
  function a(d, f, h, g) {
    var w = h.type;
    return w === Mn
      ? c(d, f, h.props.children, g, h.key)
      : f !== null &&
        (f.elementType === w ||
          (typeof w == "object" &&
            w !== null &&
            w.$$typeof === Lt &&
            Sc(w) === f.type))
      ? ((g = i(f, h.props)), (g.ref = Ar(d, f, h)), (g.return = d), g)
      : ((g = ao(h.type, h.key, h.props, null, d.mode, g)),
        (g.ref = Ar(d, f, h)),
        (g.return = d),
        g);
  }
  function u(d, f, h, g) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== h.containerInfo ||
      f.stateNode.implementation !== h.implementation
      ? ((f = Kl(h, d.mode, g)), (f.return = d), f)
      : ((f = i(f, h.children || [])), (f.return = d), f);
  }
  function c(d, f, h, g, w) {
    return f === null || f.tag !== 7
      ? ((f = mn(h, d.mode, g, w)), (f.return = d), f)
      : ((f = i(f, h)), (f.return = d), f);
  }
  function p(d, f, h) {
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return (f = Bl("" + f, d.mode, h)), (f.return = d), f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Ai:
          return (
            (h = ao(f.type, f.key, f.props, null, d.mode, h)),
            (h.ref = Ar(d, null, f)),
            (h.return = d),
            h
          );
        case $n:
          return (f = Kl(f, d.mode, h)), (f.return = d), f;
        case Lt:
          var g = f._init;
          return p(d, g(f._payload), h);
      }
      if (Rr(f) || Cr(f))
        return (f = mn(f, d.mode, h, null)), (f.return = d), f;
      bi(d, f);
    }
    return null;
  }
  function m(d, f, h, g) {
    var w = f !== null ? f.key : null;
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return w !== null ? null : s(d, f, "" + h, g);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Ai:
          return h.key === w ? a(d, f, h, g) : null;
        case $n:
          return h.key === w ? u(d, f, h, g) : null;
        case Lt:
          return (w = h._init), m(d, f, w(h._payload), g);
      }
      if (Rr(h) || Cr(h)) return w !== null ? null : c(d, f, h, g, null);
      bi(d, h);
    }
    return null;
  }
  function v(d, f, h, g, w) {
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return (d = d.get(h) || null), s(f, d, "" + g, w);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Ai:
          return (d = d.get(g.key === null ? h : g.key) || null), a(f, d, g, w);
        case $n:
          return (d = d.get(g.key === null ? h : g.key) || null), u(f, d, g, w);
        case Lt:
          var N = g._init;
          return v(d, f, h, N(g._payload), w);
      }
      if (Rr(g) || Cr(g)) return (d = d.get(h) || null), c(f, d, g, w, null);
      bi(f, g);
    }
    return null;
  }
  function _(d, f, h, g) {
    for (
      var w = null, N = null, k = f, x = (f = 0), $ = null;
      k !== null && x < h.length;
      x++
    ) {
      k.index > x ? (($ = k), (k = null)) : ($ = k.sibling);
      var P = m(d, k, h[x], g);
      if (P === null) {
        k === null && (k = $);
        break;
      }
      e && k && P.alternate === null && t(d, k),
        (f = o(P, f, x)),
        N === null ? (w = P) : (N.sibling = P),
        (N = P),
        (k = $);
    }
    if (x === h.length) return n(d, k), B && sn(d, x), w;
    if (k === null) {
      for (; x < h.length; x++)
        (k = p(d, h[x], g)),
          k !== null &&
            ((f = o(k, f, x)), N === null ? (w = k) : (N.sibling = k), (N = k));
      return B && sn(d, x), w;
    }
    for (k = r(d, k); x < h.length; x++)
      ($ = v(k, d, x, h[x], g)),
        $ !== null &&
          (e && $.alternate !== null && k.delete($.key === null ? x : $.key),
          (f = o($, f, x)),
          N === null ? (w = $) : (N.sibling = $),
          (N = $));
    return (
      e &&
        k.forEach(function (z) {
          return t(d, z);
        }),
      B && sn(d, x),
      w
    );
  }
  function y(d, f, h, g) {
    var w = Cr(h);
    if (typeof w != "function") throw Error(T(150));
    if (((h = w.call(h)), h == null)) throw Error(T(151));
    for (
      var N = (w = null), k = f, x = (f = 0), $ = null, P = h.next();
      k !== null && !P.done;
      x++, P = h.next()
    ) {
      k.index > x ? (($ = k), (k = null)) : ($ = k.sibling);
      var z = m(d, k, P.value, g);
      if (z === null) {
        k === null && (k = $);
        break;
      }
      e && k && z.alternate === null && t(d, k),
        (f = o(z, f, x)),
        N === null ? (w = z) : (N.sibling = z),
        (N = z),
        (k = $);
    }
    if (P.done) return n(d, k), B && sn(d, x), w;
    if (k === null) {
      for (; !P.done; x++, P = h.next())
        (P = p(d, P.value, g)),
          P !== null &&
            ((f = o(P, f, x)), N === null ? (w = P) : (N.sibling = P), (N = P));
      return B && sn(d, x), w;
    }
    for (k = r(d, k); !P.done; x++, P = h.next())
      (P = v(k, d, x, P.value, g)),
        P !== null &&
          (e && P.alternate !== null && k.delete(P.key === null ? x : P.key),
          (f = o(P, f, x)),
          N === null ? (w = P) : (N.sibling = P),
          (N = P));
    return (
      e &&
        k.forEach(function (ie) {
          return t(d, ie);
        }),
      B && sn(d, x),
      w
    );
  }
  function E(d, f, h, g) {
    if (
      (typeof h == "object" &&
        h !== null &&
        h.type === Mn &&
        h.key === null &&
        (h = h.props.children),
      typeof h == "object" && h !== null)
    ) {
      switch (h.$$typeof) {
        case Ai:
          e: {
            for (var w = h.key, N = f; N !== null; ) {
              if (N.key === w) {
                if (((w = h.type), w === Mn)) {
                  if (N.tag === 7) {
                    n(d, N.sibling),
                      (f = i(N, h.props.children)),
                      (f.return = d),
                      (d = f);
                    break e;
                  }
                } else if (
                  N.elementType === w ||
                  (typeof w == "object" &&
                    w !== null &&
                    w.$$typeof === Lt &&
                    Sc(w) === N.type)
                ) {
                  n(d, N.sibling),
                    (f = i(N, h.props)),
                    (f.ref = Ar(d, N, h)),
                    (f.return = d),
                    (d = f);
                  break e;
                }
                n(d, N);
                break;
              } else t(d, N);
              N = N.sibling;
            }
            h.type === Mn
              ? ((f = mn(h.props.children, d.mode, g, h.key)),
                (f.return = d),
                (d = f))
              : ((g = ao(h.type, h.key, h.props, null, d.mode, g)),
                (g.ref = Ar(d, f, h)),
                (g.return = d),
                (d = g));
          }
          return l(d);
        case $n:
          e: {
            for (N = h.key; f !== null; ) {
              if (f.key === N)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === h.containerInfo &&
                  f.stateNode.implementation === h.implementation
                ) {
                  n(d, f.sibling),
                    (f = i(f, h.children || [])),
                    (f.return = d),
                    (d = f);
                  break e;
                } else {
                  n(d, f);
                  break;
                }
              else t(d, f);
              f = f.sibling;
            }
            (f = Kl(h, d.mode, g)), (f.return = d), (d = f);
          }
          return l(d);
        case Lt:
          return (N = h._init), E(d, f, N(h._payload), g);
      }
      if (Rr(h)) return _(d, f, h, g);
      if (Cr(h)) return y(d, f, h, g);
      bi(d, h);
    }
    return (typeof h == "string" && h !== "") || typeof h == "number"
      ? ((h = "" + h),
        f !== null && f.tag === 6
          ? (n(d, f.sibling), (f = i(f, h)), (f.return = d), (d = f))
          : (n(d, f), (f = Bl(h, d.mode, g)), (f.return = d), (d = f)),
        l(d))
      : n(d, f);
  }
  return E;
}
var rr = Zd(!0),
  Jd = Zd(!1),
  yi = {},
  st = Zt(yi),
  oi = Zt(yi),
  li = Zt(yi);
function fn(e) {
  if (e === yi) throw Error(T(174));
  return e;
}
function Ua(e, t) {
  switch ((F(li, t), F(oi, e), F(st, yi), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Es(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Es(t, e));
  }
  W(st), F(st, t);
}
function ir() {
  W(st), W(oi), W(li);
}
function ep(e) {
  fn(li.current);
  var t = fn(st.current),
    n = Es(t, e.type);
  t !== n && (F(oi, e), F(st, n));
}
function Wa(e) {
  oi.current === e && (W(st), W(oi));
}
var K = Zt(0);
function Lo(e) {
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
var bl = [];
function Ha() {
  for (var e = 0; e < bl.length; e++)
    bl[e]._workInProgressVersionPrimary = null;
  bl.length = 0;
}
var ro = kt.ReactCurrentDispatcher,
  Fl = kt.ReactCurrentBatchConfig,
  _n = 0,
  Y = null,
  ee = null,
  ne = null,
  Po = !1,
  Ur = !1,
  si = 0,
  sv = 0;
function ue() {
  throw Error(T(321));
}
function Ba(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!et(e[n], t[n])) return !1;
  return !0;
}
function Ka(e, t, n, r, i, o) {
  if (
    ((_n = o),
    (Y = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ro.current = e === null || e.memoizedState === null ? fv : dv),
    (e = n(r, i)),
    Ur)
  ) {
    o = 0;
    do {
      if (((Ur = !1), (si = 0), 25 <= o)) throw Error(T(301));
      (o += 1),
        (ne = ee = null),
        (t.updateQueue = null),
        (ro.current = pv),
        (e = n(r, i));
    } while (Ur);
  }
  if (
    ((ro.current = Do),
    (t = ee !== null && ee.next !== null),
    (_n = 0),
    (ne = ee = Y = null),
    (Po = !1),
    t)
  )
    throw Error(T(300));
  return e;
}
function Ya() {
  var e = si !== 0;
  return (si = 0), e;
}
function it() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ne === null ? (Y.memoizedState = ne = e) : (ne = ne.next = e), ne;
}
function He() {
  if (ee === null) {
    var e = Y.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ee.next;
  var t = ne === null ? Y.memoizedState : ne.next;
  if (t !== null) (ne = t), (ee = e);
  else {
    if (e === null) throw Error(T(310));
    (ee = e),
      (e = {
        memoizedState: ee.memoizedState,
        baseState: ee.baseState,
        baseQueue: ee.baseQueue,
        queue: ee.queue,
        next: null,
      }),
      ne === null ? (Y.memoizedState = ne = e) : (ne = ne.next = e);
  }
  return ne;
}
function ai(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Vl(e) {
  var t = He(),
    n = t.queue;
  if (n === null) throw Error(T(311));
  n.lastRenderedReducer = e;
  var r = ee,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var l = i.next;
      (i.next = o.next), (o.next = l);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var s = (l = null),
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
        var p = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        a === null ? ((s = a = p), (l = r)) : (a = a.next = p),
          (Y.lanes |= c),
          (En |= c);
      }
      u = u.next;
    } while (u !== null && u !== o);
    a === null ? (l = r) : (a.next = s),
      et(r, t.memoizedState) || (Ce = !0),
      (t.memoizedState = r),
      (t.baseState = l),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (Y.lanes |= o), (En |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ul(e) {
  var t = He(),
    n = t.queue;
  if (n === null) throw Error(T(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var l = (i = i.next);
    do (o = e(o, l.action)), (l = l.next);
    while (l !== i);
    et(o, t.memoizedState) || (Ce = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function tp() {}
function np(e, t) {
  var n = Y,
    r = He(),
    i = t(),
    o = !et(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (Ce = !0)),
    (r = r.queue),
    Qa(op.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (ne !== null && ne.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      ui(9, ip.bind(null, n, r, i, t), void 0, null),
      re === null)
    )
      throw Error(T(349));
    _n & 30 || rp(n, t, i);
  }
  return i;
}
function rp(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Y.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Y.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function ip(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), lp(t) && sp(e);
}
function op(e, t, n) {
  return n(function () {
    lp(t) && sp(e);
  });
}
function lp(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !et(e, n);
  } catch {
    return !0;
  }
}
function sp(e) {
  var t = Ct(e, 1);
  t !== null && Je(t, e, 1, -1);
}
function Cc(e) {
  var t = it();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ai,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = cv.bind(null, Y, e)),
    [t.memoizedState, e]
  );
}
function ui(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Y.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Y.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function ap() {
  return He().memoizedState;
}
function io(e, t, n, r) {
  var i = it();
  (Y.flags |= e),
    (i.memoizedState = ui(1 | t, n, void 0, r === void 0 ? null : r));
}
function Jo(e, t, n, r) {
  var i = He();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (ee !== null) {
    var l = ee.memoizedState;
    if (((o = l.destroy), r !== null && Ba(r, l.deps))) {
      i.memoizedState = ui(t, n, o, r);
      return;
    }
  }
  (Y.flags |= e), (i.memoizedState = ui(1 | t, n, o, r));
}
function Tc(e, t) {
  return io(8390656, 8, e, t);
}
function Qa(e, t) {
  return Jo(2048, 8, e, t);
}
function up(e, t) {
  return Jo(4, 2, e, t);
}
function cp(e, t) {
  return Jo(4, 4, e, t);
}
function fp(e, t) {
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
function dp(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Jo(4, 4, fp.bind(null, t, e), n)
  );
}
function Ga() {}
function pp(e, t) {
  var n = He();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ba(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function hp(e, t) {
  var n = He();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ba(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function mp(e, t, n) {
  return _n & 21
    ? (et(n, t) || ((n = yd()), (Y.lanes |= n), (En |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ce = !0)), (e.memoizedState = n));
}
function av(e, t) {
  var n = b;
  (b = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Fl.transition;
  Fl.transition = {};
  try {
    e(!1), t();
  } finally {
    (b = n), (Fl.transition = r);
  }
}
function gp() {
  return He().memoizedState;
}
function uv(e, t, n) {
  var r = Wt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    vp(e))
  )
    yp(t, n);
  else if (((n = Qd(e, t, n, r)), n !== null)) {
    var i = me();
    Je(n, e, r, i), _p(n, t, r);
  }
}
function cv(e, t, n) {
  var r = Wt(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (vp(e)) yp(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var l = t.lastRenderedState,
          s = o(l, n);
        if (((i.hasEagerState = !0), (i.eagerState = s), et(s, l))) {
          var a = t.interleaved;
          a === null
            ? ((i.next = i), Fa(t))
            : ((i.next = a.next), (a.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = Qd(e, t, i, r)),
      n !== null && ((i = me()), Je(n, e, r, i), _p(n, t, r));
  }
}
function vp(e) {
  var t = e.alternate;
  return e === Y || (t !== null && t === Y);
}
function yp(e, t) {
  Ur = Po = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function _p(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ka(e, n);
  }
}
var Do = {
    readContext: We,
    useCallback: ue,
    useContext: ue,
    useEffect: ue,
    useImperativeHandle: ue,
    useInsertionEffect: ue,
    useLayoutEffect: ue,
    useMemo: ue,
    useReducer: ue,
    useRef: ue,
    useState: ue,
    useDebugValue: ue,
    useDeferredValue: ue,
    useTransition: ue,
    useMutableSource: ue,
    useSyncExternalStore: ue,
    useId: ue,
    unstable_isNewReconciler: !1,
  },
  fv = {
    readContext: We,
    useCallback: function (e, t) {
      return (it().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: We,
    useEffect: Tc,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        io(4194308, 4, fp.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return io(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return io(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = it();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = it();
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
        (e = e.dispatch = uv.bind(null, Y, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = it();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Cc,
    useDebugValue: Ga,
    useDeferredValue: function (e) {
      return (it().memoizedState = e);
    },
    useTransition: function () {
      var e = Cc(!1),
        t = e[0];
      return (e = av.bind(null, e[1])), (it().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Y,
        i = it();
      if (B) {
        if (n === void 0) throw Error(T(407));
        n = n();
      } else {
        if (((n = t()), re === null)) throw Error(T(349));
        _n & 30 || rp(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        Tc(op.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        ui(9, ip.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = it(),
        t = re.identifierPrefix;
      if (B) {
        var n = vt,
          r = gt;
        (n = (r & ~(1 << (32 - Ze(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = si++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = sv++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  dv = {
    readContext: We,
    useCallback: pp,
    useContext: We,
    useEffect: Qa,
    useImperativeHandle: dp,
    useInsertionEffect: up,
    useLayoutEffect: cp,
    useMemo: hp,
    useReducer: Vl,
    useRef: ap,
    useState: function () {
      return Vl(ai);
    },
    useDebugValue: Ga,
    useDeferredValue: function (e) {
      var t = He();
      return mp(t, ee.memoizedState, e);
    },
    useTransition: function () {
      var e = Vl(ai)[0],
        t = He().memoizedState;
      return [e, t];
    },
    useMutableSource: tp,
    useSyncExternalStore: np,
    useId: gp,
    unstable_isNewReconciler: !1,
  },
  pv = {
    readContext: We,
    useCallback: pp,
    useContext: We,
    useEffect: Qa,
    useImperativeHandle: dp,
    useInsertionEffect: up,
    useLayoutEffect: cp,
    useMemo: hp,
    useReducer: Ul,
    useRef: ap,
    useState: function () {
      return Ul(ai);
    },
    useDebugValue: Ga,
    useDeferredValue: function (e) {
      var t = He();
      return ee === null ? (t.memoizedState = e) : mp(t, ee.memoizedState, e);
    },
    useTransition: function () {
      var e = Ul(ai)[0],
        t = He().memoizedState;
      return [e, t];
    },
    useMutableSource: tp,
    useSyncExternalStore: np,
    useId: gp,
    unstable_isNewReconciler: !1,
  };
function or(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Vm(r)), (r = r.return);
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
function Wl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ws(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var hv = typeof WeakMap == "function" ? WeakMap : Map;
function Ep(e, t, n) {
  (n = yt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Ro || ((Ro = !0), (Js = r)), Ws(e, t);
    }),
    n
  );
}
function wp(e, t, n) {
  (n = yt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Ws(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Ws(e, t),
          typeof r != "function" &&
            (Ut === null ? (Ut = new Set([this])) : Ut.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: l !== null ? l : "",
        });
      }),
    n
  );
}
function Nc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new hv();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = Av.bind(null, e, t, n)), t.then(e, e));
}
function kc(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function xc(e, t, n, r, i) {
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
              : ((t = yt(-1, 1)), (t.tag = 2), Vt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var mv = kt.ReactCurrentOwner,
  Ce = !1;
function he(e, t, n, r) {
  t.child = e === null ? Jd(t, null, n, r) : rr(t, e.child, n, r);
}
function Ac(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    Zn(t, i),
    (r = Ka(e, t, n, r, o, i)),
    (n = Ya()),
    e !== null && !Ce
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Tt(e, t, i))
      : (B && n && Ra(t), (t.flags |= 1), he(e, t, r, i), t.child)
  );
}
function Oc(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !ru(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Sp(e, t, o, r, i))
      : ((e = ao(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var l = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : ti), n(l, r) && e.ref === t.ref)
    )
      return Tt(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = Ht(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Sp(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (ti(o, r) && e.ref === t.ref)
      if (((Ce = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (Ce = !0);
      else return (t.lanes = e.lanes), Tt(e, t, i);
  }
  return Hs(e, t, n, r, i);
}
function Cp(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        F(Kn, Ae),
        (Ae |= n);
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
          F(Kn, Ae),
          (Ae |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        F(Kn, Ae),
        (Ae |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      F(Kn, Ae),
      (Ae |= r);
  return he(e, t, i, n), t.child;
}
function Tp(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Hs(e, t, n, r, i) {
  var o = Ne(n) ? vn : de.current;
  return (
    (o = tr(t, o)),
    Zn(t, i),
    (n = Ka(e, t, n, r, o, i)),
    (r = Ya()),
    e !== null && !Ce
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Tt(e, t, i))
      : (B && r && Ra(t), (t.flags |= 1), he(e, t, n, i), t.child)
  );
}
function Lc(e, t, n, r, i) {
  if (Ne(n)) {
    var o = !0;
    To(t);
  } else o = !1;
  if ((Zn(t, i), t.stateNode === null))
    oo(e, t), qd(t, n, r), Us(t, n, r, i), (r = !0);
  else if (e === null) {
    var l = t.stateNode,
      s = t.memoizedProps;
    l.props = s;
    var a = l.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = We(u))
      : ((u = Ne(n) ? vn : de.current), (u = tr(t, u)));
    var c = n.getDerivedStateFromProps,
      p =
        typeof c == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function";
    p ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((s !== r || a !== u) && wc(t, l, r, u)),
      (Pt = !1);
    var m = t.memoizedState;
    (l.state = m),
      Oo(t, r, l, i),
      (a = t.memoizedState),
      s !== r || m !== a || Te.current || Pt
        ? (typeof c == "function" && (Vs(t, n, c, r), (a = t.memoizedState)),
          (s = Pt || Ec(t, n, s, r, m, a, u))
            ? (p ||
                (typeof l.UNSAFE_componentWillMount != "function" &&
                  typeof l.componentWillMount != "function") ||
                (typeof l.componentWillMount == "function" &&
                  l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == "function" &&
                  l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (l.props = r),
          (l.state = a),
          (l.context = u),
          (r = s))
        : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (l = t.stateNode),
      Gd(e, t),
      (s = t.memoizedProps),
      (u = t.type === t.elementType ? s : Ge(t.type, s)),
      (l.props = u),
      (p = t.pendingProps),
      (m = l.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = We(a))
        : ((a = Ne(n) ? vn : de.current), (a = tr(t, a)));
    var v = n.getDerivedStateFromProps;
    (c =
      typeof v == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function") ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((s !== p || m !== a) && wc(t, l, r, a)),
      (Pt = !1),
      (m = t.memoizedState),
      (l.state = m),
      Oo(t, r, l, i);
    var _ = t.memoizedState;
    s !== p || m !== _ || Te.current || Pt
      ? (typeof v == "function" && (Vs(t, n, v, r), (_ = t.memoizedState)),
        (u = Pt || Ec(t, n, u, r, m, _, a) || !1)
          ? (c ||
              (typeof l.UNSAFE_componentWillUpdate != "function" &&
                typeof l.componentWillUpdate != "function") ||
              (typeof l.componentWillUpdate == "function" &&
                l.componentWillUpdate(r, _, a),
              typeof l.UNSAFE_componentWillUpdate == "function" &&
                l.UNSAFE_componentWillUpdate(r, _, a)),
            typeof l.componentDidUpdate == "function" && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof l.componentDidUpdate != "function" ||
              (s === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = _)),
        (l.props = r),
        (l.state = _),
        (l.context = a),
        (r = u))
      : (typeof l.componentDidUpdate != "function" ||
          (s === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Bs(e, t, n, r, o, i);
}
function Bs(e, t, n, r, i, o) {
  Tp(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return i && mc(t, n, !1), Tt(e, t, o);
  (r = t.stateNode), (mv.current = t);
  var s =
    l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && l
      ? ((t.child = rr(t, e.child, null, o)), (t.child = rr(t, null, s, o)))
      : he(e, t, s, o),
    (t.memoizedState = r.state),
    i && mc(t, n, !0),
    t.child
  );
}
function Np(e) {
  var t = e.stateNode;
  t.pendingContext
    ? hc(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && hc(e, t.context, !1),
    Ua(e, t.containerInfo);
}
function Pc(e, t, n, r, i) {
  return nr(), Ma(i), (t.flags |= 256), he(e, t, n, r), t.child;
}
var Ks = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ys(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function kp(e, t, n) {
  var r = t.pendingProps,
    i = K.current,
    o = !1,
    l = (t.flags & 128) !== 0,
    s;
  if (
    ((s = l) ||
      (s = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    s
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    F(K, i & 1),
    e === null)
  )
    return (
      bs(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((l = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (l = { mode: "hidden", children: l }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = l))
                : (o = nl(l, r, 0, null)),
              (e = mn(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Ys(n)),
              (t.memoizedState = Ks),
              e)
            : Xa(t, l))
    );
  if (((i = e.memoizedState), i !== null && ((s = i.dehydrated), s !== null)))
    return gv(e, t, l, r, s, i, n);
  if (o) {
    (o = r.fallback), (l = t.mode), (i = e.child), (s = i.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(l & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = Ht(i, a)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      s !== null ? (o = Ht(s, o)) : ((o = mn(o, l, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (l = e.child.memoizedState),
      (l =
        l === null
          ? Ys(n)
          : {
              baseLanes: l.baseLanes | n,
              cachePool: null,
              transitions: l.transitions,
            }),
      (o.memoizedState = l),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Ks),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = Ht(o, { mode: "visible", children: r.children })),
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
function Xa(e, t) {
  return (
    (t = nl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Fi(e, t, n, r) {
  return (
    r !== null && Ma(r),
    rr(t, e.child, null, n),
    (e = Xa(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function gv(e, t, n, r, i, o, l) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Wl(Error(T(422)))), Fi(e, t, l, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = nl({ mode: "visible", children: r.children }, i, 0, null)),
        (o = mn(o, i, l, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && rr(t, e.child, null, l),
        (t.child.memoizedState = Ys(l)),
        (t.memoizedState = Ks),
        o);
  if (!(t.mode & 1)) return Fi(e, t, l, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (o = Error(T(419))), (r = Wl(o, r, void 0)), Fi(e, t, l, r);
  }
  if (((s = (l & e.childLanes) !== 0), Ce || s)) {
    if (((r = re), r !== null)) {
      switch (l & -l) {
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
      (i = i & (r.suspendedLanes | l) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), Ct(e, i), Je(r, e, i, -1));
    }
    return nu(), (r = Wl(Error(T(421)))), Fi(e, t, l, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Ov.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Oe = Ft(i.nextSibling)),
      (Le = t),
      (B = !0),
      (qe = null),
      e !== null &&
        ((ze[be++] = gt),
        (ze[be++] = vt),
        (ze[be++] = yn),
        (gt = e.id),
        (vt = e.overflow),
        (yn = t)),
      (t = Xa(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Dc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Fs(e.return, t, n);
}
function Hl(e, t, n, r, i) {
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
function xp(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((he(e, t, r.children, n), (r = K.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Dc(e, n, t);
        else if (e.tag === 19) Dc(e, n, t);
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
  if ((F(K, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && Lo(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Hl(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Lo(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        Hl(t, !0, n, null, o);
        break;
      case "together":
        Hl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function oo(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Tt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (En |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(T(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Ht(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Ht(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function vv(e, t, n) {
  switch (t.tag) {
    case 3:
      Np(t), nr();
      break;
    case 5:
      ep(t);
      break;
    case 1:
      Ne(t.type) && To(t);
      break;
    case 4:
      Ua(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      F(xo, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (F(K, K.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? kp(e, t, n)
          : (F(K, K.current & 1),
            (e = Tt(e, t, n)),
            e !== null ? e.sibling : null);
      F(K, K.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return xp(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        F(K, K.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Cp(e, t, n);
  }
  return Tt(e, t, n);
}
var Ap, Qs, Op, Lp;
Ap = function (e, t) {
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
};
Qs = function () {};
Op = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), fn(st.current);
    var o = null;
    switch (n) {
      case "input":
        (i = gs(e, i)), (r = gs(e, r)), (o = []);
        break;
      case "select":
        (i = Q({}, i, { value: void 0 })),
          (r = Q({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = _s(e, i)), (r = _s(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = So);
    }
    ws(n, r);
    var l;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var s = i[u];
          for (l in s) s.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Qr.hasOwnProperty(u)
              ? o || (o = [])
              : (o = o || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((s = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && a !== s && (a != null || s != null))
      )
        if (u === "style")
          if (s) {
            for (l in s)
              !s.hasOwnProperty(l) ||
                (a && a.hasOwnProperty(l)) ||
                (n || (n = {}), (n[l] = ""));
            for (l in a)
              a.hasOwnProperty(l) &&
                s[l] !== a[l] &&
                (n || (n = {}), (n[l] = a[l]));
          } else n || (o || (o = []), o.push(u, n)), (n = a);
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (s = s ? s.__html : void 0),
              a != null && s !== a && (o = o || []).push(u, a))
            : u === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (o = o || []).push(u, "" + a)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Qr.hasOwnProperty(u)
                ? (a != null && u === "onScroll" && U("scroll", e),
                  o || s === a || (o = []))
                : (o = o || []).push(u, a));
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Lp = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Or(e, t) {
  if (!B)
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
function ce(e) {
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
function yv(e, t, n) {
  var r = t.pendingProps;
  switch (($a(t), t.tag)) {
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
      return ce(t), null;
    case 1:
      return Ne(t.type) && Co(), ce(t), null;
    case 3:
      return (
        (r = t.stateNode),
        ir(),
        W(Te),
        W(de),
        Ha(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (zi(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), qe !== null && (na(qe), (qe = null)))),
        Qs(e, t),
        ce(t),
        null
      );
    case 5:
      Wa(t);
      var i = fn(li.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Op(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(T(166));
          return ce(t), null;
        }
        if (((e = fn(st.current)), zi(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[ot] = t), (r[ii] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              U("cancel", r), U("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              U("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Mr.length; i++) U(Mr[i], r);
              break;
            case "source":
              U("error", r);
              break;
            case "img":
            case "image":
            case "link":
              U("error", r), U("load", r);
              break;
            case "details":
              U("toggle", r);
              break;
            case "input":
              Vu(r, o), U("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                U("invalid", r);
              break;
            case "textarea":
              Wu(r, o), U("invalid", r);
          }
          ws(n, o), (i = null);
          for (var l in o)
            if (o.hasOwnProperty(l)) {
              var s = o[l];
              l === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (o.suppressHydrationWarning !== !0 &&
                      ji(r.textContent, s, e),
                    (i = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (o.suppressHydrationWarning !== !0 &&
                      ji(r.textContent, s, e),
                    (i = ["children", "" + s]))
                : Qr.hasOwnProperty(l) &&
                  s != null &&
                  l === "onScroll" &&
                  U("scroll", r);
            }
          switch (n) {
            case "input":
              Oi(r), Uu(r, o, !0);
              break;
            case "textarea":
              Oi(r), Hu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = So);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (l = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = rd(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = l.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = l.createElement(n, { is: r.is }))
                : ((e = l.createElement(n)),
                  n === "select" &&
                    ((l = e),
                    r.multiple
                      ? (l.multiple = !0)
                      : r.size && (l.size = r.size)))
              : (e = l.createElementNS(e, n)),
            (e[ot] = t),
            (e[ii] = r),
            Ap(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((l = Ss(n, r)), n)) {
              case "dialog":
                U("cancel", e), U("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                U("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Mr.length; i++) U(Mr[i], e);
                i = r;
                break;
              case "source":
                U("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                U("error", e), U("load", e), (i = r);
                break;
              case "details":
                U("toggle", e), (i = r);
                break;
              case "input":
                Vu(e, r), (i = gs(e, r)), U("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = Q({}, r, { value: void 0 })),
                  U("invalid", e);
                break;
              case "textarea":
                Wu(e, r), (i = _s(e, r)), U("invalid", e);
                break;
              default:
                i = r;
            }
            ws(n, i), (s = i);
            for (o in s)
              if (s.hasOwnProperty(o)) {
                var a = s[o];
                o === "style"
                  ? ld(e, a)
                  : o === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && id(e, a))
                  : o === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && Gr(e, a)
                    : typeof a == "number" && Gr(e, "" + a)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (Qr.hasOwnProperty(o)
                      ? a != null && o === "onScroll" && U("scroll", e)
                      : a != null && Ea(e, o, a, l));
              }
            switch (n) {
              case "input":
                Oi(e), Uu(e, r, !1);
                break;
              case "textarea":
                Oi(e), Hu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Kt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Qn(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Qn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = So);
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
      return ce(t), null;
    case 6:
      if (e && t.stateNode != null) Lp(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(T(166));
        if (((n = fn(li.current)), fn(st.current), zi(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[ot] = t),
            (o = r.nodeValue !== n) && ((e = Le), e !== null))
          )
            switch (e.tag) {
              case 3:
                ji(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  ji(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[ot] = t),
            (t.stateNode = r);
      }
      return ce(t), null;
    case 13:
      if (
        (W(K),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (B && Oe !== null && t.mode & 1 && !(t.flags & 128))
          Yd(), nr(), (t.flags |= 98560), (o = !1);
        else if (((o = zi(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(T(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(T(317));
            o[ot] = t;
          } else
            nr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ce(t), (o = !1);
        } else qe !== null && (na(qe), (qe = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || K.current & 1 ? te === 0 && (te = 3) : nu())),
          t.updateQueue !== null && (t.flags |= 4),
          ce(t),
          null);
    case 4:
      return (
        ir(), Qs(e, t), e === null && ni(t.stateNode.containerInfo), ce(t), null
      );
    case 10:
      return ba(t.type._context), ce(t), null;
    case 17:
      return Ne(t.type) && Co(), ce(t), null;
    case 19:
      if ((W(K), (o = t.memoizedState), o === null)) return ce(t), null;
      if (((r = (t.flags & 128) !== 0), (l = o.rendering), l === null))
        if (r) Or(o, !1);
        else {
          if (te !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((l = Lo(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    Or(o, !1),
                    r = l.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (l = o.alternate),
                    l === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = l.childLanes),
                        (o.lanes = l.lanes),
                        (o.child = l.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = l.memoizedProps),
                        (o.memoizedState = l.memoizedState),
                        (o.updateQueue = l.updateQueue),
                        (o.type = l.type),
                        (e = l.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return F(K, (K.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            Z() > lr &&
            ((t.flags |= 128), (r = !0), Or(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Lo(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Or(o, !0),
              o.tail === null && o.tailMode === "hidden" && !l.alternate && !B)
            )
              return ce(t), null;
          } else
            2 * Z() - o.renderingStartTime > lr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Or(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((l.sibling = t.child), (t.child = l))
          : ((n = o.last),
            n !== null ? (n.sibling = l) : (t.child = l),
            (o.last = l));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = Z()),
          (t.sibling = null),
          (n = K.current),
          F(K, r ? (n & 1) | 2 : n & 1),
          t)
        : (ce(t), null);
    case 22:
    case 23:
      return (
        tu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ae & 1073741824 && (ce(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ce(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(T(156, t.tag));
}
function _v(e, t) {
  switch (($a(t), t.tag)) {
    case 1:
      return (
        Ne(t.type) && Co(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        ir(),
        W(Te),
        W(de),
        Ha(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Wa(t), null;
    case 13:
      if ((W(K), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(T(340));
        nr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return W(K), null;
    case 4:
      return ir(), null;
    case 10:
      return ba(t.type._context), null;
    case 22:
    case 23:
      return tu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Vi = !1,
  fe = !1,
  Ev = typeof WeakSet == "function" ? WeakSet : Set,
  L = null;
function Bn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        G(e, t, r);
      }
    else n.current = null;
}
function Gs(e, t, n) {
  try {
    n();
  } catch (r) {
    G(e, t, r);
  }
}
var Ic = !1;
function wv(e, t) {
  if (((Ds = _o), (e = Rd()), Ia(e))) {
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
          var l = 0,
            s = -1,
            a = -1,
            u = 0,
            c = 0,
            p = e,
            m = null;
          t: for (;;) {
            for (
              var v;
              p !== n || (i !== 0 && p.nodeType !== 3) || (s = l + i),
                p !== o || (r !== 0 && p.nodeType !== 3) || (a = l + r),
                p.nodeType === 3 && (l += p.nodeValue.length),
                (v = p.firstChild) !== null;

            )
              (m = p), (p = v);
            for (;;) {
              if (p === e) break t;
              if (
                (m === n && ++u === i && (s = l),
                m === o && ++c === r && (a = l),
                (v = p.nextSibling) !== null)
              )
                break;
              (p = m), (m = p.parentNode);
            }
            p = v;
          }
          n = s === -1 || a === -1 ? null : { start: s, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Is = { focusedElem: e, selectionRange: n }, _o = !1, L = t; L !== null; )
    if (((t = L), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (L = e);
    else
      for (; L !== null; ) {
        t = L;
        try {
          var _ = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (_ !== null) {
                  var y = _.memoizedProps,
                    E = _.memoizedState,
                    d = t.stateNode,
                    f = d.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : Ge(t.type, y),
                      E
                    );
                  d.__reactInternalSnapshotBeforeUpdate = f;
                }
                break;
              case 3:
                var h = t.stateNode.containerInfo;
                h.nodeType === 1
                  ? (h.textContent = "")
                  : h.nodeType === 9 &&
                    h.documentElement &&
                    h.removeChild(h.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(T(163));
            }
        } catch (g) {
          G(t, t.return, g);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (L = e);
          break;
        }
        L = t.return;
      }
  return (_ = Ic), (Ic = !1), _;
}
function Wr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && Gs(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function el(e, t) {
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
function Xs(e) {
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
function Pp(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Pp(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[ot], delete t[ii], delete t[Ms], delete t[rv], delete t[iv])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Dp(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Rc(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Dp(e.return)) return null;
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
function qs(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = So));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (qs(e, t, n), e = e.sibling; e !== null; ) qs(e, t, n), (e = e.sibling);
}
function Zs(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Zs(e, t, n), e = e.sibling; e !== null; ) Zs(e, t, n), (e = e.sibling);
}
var le = null,
  Xe = !1;
function At(e, t, n) {
  for (n = n.child; n !== null; ) Ip(e, t, n), (n = n.sibling);
}
function Ip(e, t, n) {
  if (lt && typeof lt.onCommitFiberUnmount == "function")
    try {
      lt.onCommitFiberUnmount(Ko, n);
    } catch {}
  switch (n.tag) {
    case 5:
      fe || Bn(n, t);
    case 6:
      var r = le,
        i = Xe;
      (le = null),
        At(e, t, n),
        (le = r),
        (Xe = i),
        le !== null &&
          (Xe
            ? ((e = le),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : le.removeChild(n.stateNode));
      break;
    case 18:
      le !== null &&
        (Xe
          ? ((e = le),
            (n = n.stateNode),
            e.nodeType === 8
              ? jl(e.parentNode, n)
              : e.nodeType === 1 && jl(e, n),
            Jr(e))
          : jl(le, n.stateNode));
      break;
    case 4:
      (r = le),
        (i = Xe),
        (le = n.stateNode.containerInfo),
        (Xe = !0),
        At(e, t, n),
        (le = r),
        (Xe = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !fe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            l = o.destroy;
          (o = o.tag),
            l !== void 0 && (o & 2 || o & 4) && Gs(n, t, l),
            (i = i.next);
        } while (i !== r);
      }
      At(e, t, n);
      break;
    case 1:
      if (
        !fe &&
        (Bn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          G(n, t, s);
        }
      At(e, t, n);
      break;
    case 21:
      At(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((fe = (r = fe) || n.memoizedState !== null), At(e, t, n), (fe = r))
        : At(e, t, n);
      break;
    default:
      At(e, t, n);
  }
}
function $c(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Ev()),
      t.forEach(function (r) {
        var i = Lv.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function Qe(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          l = t,
          s = l;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (le = s.stateNode), (Xe = !1);
              break e;
            case 3:
              (le = s.stateNode.containerInfo), (Xe = !0);
              break e;
            case 4:
              (le = s.stateNode.containerInfo), (Xe = !0);
              break e;
          }
          s = s.return;
        }
        if (le === null) throw Error(T(160));
        Ip(o, l, i), (le = null), (Xe = !1);
        var a = i.alternate;
        a !== null && (a.return = null), (i.return = null);
      } catch (u) {
        G(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Rp(t, e), (t = t.sibling);
}
function Rp(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Qe(t, e), rt(e), r & 4)) {
        try {
          Wr(3, e, e.return), el(3, e);
        } catch (y) {
          G(e, e.return, y);
        }
        try {
          Wr(5, e, e.return);
        } catch (y) {
          G(e, e.return, y);
        }
      }
      break;
    case 1:
      Qe(t, e), rt(e), r & 512 && n !== null && Bn(n, n.return);
      break;
    case 5:
      if (
        (Qe(t, e),
        rt(e),
        r & 512 && n !== null && Bn(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Gr(i, "");
        } catch (y) {
          G(e, e.return, y);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          l = n !== null ? n.memoizedProps : o,
          s = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            s === "input" && o.type === "radio" && o.name != null && td(i, o),
              Ss(s, l);
            var u = Ss(s, o);
            for (l = 0; l < a.length; l += 2) {
              var c = a[l],
                p = a[l + 1];
              c === "style"
                ? ld(i, p)
                : c === "dangerouslySetInnerHTML"
                ? id(i, p)
                : c === "children"
                ? Gr(i, p)
                : Ea(i, c, p, u);
            }
            switch (s) {
              case "input":
                vs(i, o);
                break;
              case "textarea":
                nd(i, o);
                break;
              case "select":
                var m = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var v = o.value;
                v != null
                  ? Qn(i, !!o.multiple, v, !1)
                  : m !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Qn(i, !!o.multiple, o.defaultValue, !0)
                      : Qn(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[ii] = o;
          } catch (y) {
            G(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((Qe(t, e), rt(e), r & 4)) {
        if (e.stateNode === null) throw Error(T(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (y) {
          G(e, e.return, y);
        }
      }
      break;
    case 3:
      if (
        (Qe(t, e), rt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Jr(t.containerInfo);
        } catch (y) {
          G(e, e.return, y);
        }
      break;
    case 4:
      Qe(t, e), rt(e);
      break;
    case 13:
      Qe(t, e),
        rt(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Ja = Z())),
        r & 4 && $c(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((fe = (u = fe) || c), Qe(t, e), (fe = u)) : Qe(t, e),
        rt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (L = e, c = e.child; c !== null; ) {
            for (p = L = c; L !== null; ) {
              switch (((m = L), (v = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Wr(4, m, m.return);
                  break;
                case 1:
                  Bn(m, m.return);
                  var _ = m.stateNode;
                  if (typeof _.componentWillUnmount == "function") {
                    (r = m), (n = m.return);
                    try {
                      (t = r),
                        (_.props = t.memoizedProps),
                        (_.state = t.memoizedState),
                        _.componentWillUnmount();
                    } catch (y) {
                      G(r, n, y);
                    }
                  }
                  break;
                case 5:
                  Bn(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    jc(p);
                    continue;
                  }
              }
              v !== null ? ((v.return = m), (L = v)) : jc(p);
            }
            c = c.sibling;
          }
        e: for (c = null, p = e; ; ) {
          if (p.tag === 5) {
            if (c === null) {
              c = p;
              try {
                (i = p.stateNode),
                  u
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((s = p.stateNode),
                      (a = p.memoizedProps.style),
                      (l =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (s.style.display = od("display", l)));
              } catch (y) {
                G(e, e.return, y);
              }
            }
          } else if (p.tag === 6) {
            if (c === null)
              try {
                p.stateNode.nodeValue = u ? "" : p.memoizedProps;
              } catch (y) {
                G(e, e.return, y);
              }
          } else if (
            ((p.tag !== 22 && p.tag !== 23) ||
              p.memoizedState === null ||
              p === e) &&
            p.child !== null
          ) {
            (p.child.return = p), (p = p.child);
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            c === p && (c = null), (p = p.return);
          }
          c === p && (c = null), (p.sibling.return = p.return), (p = p.sibling);
        }
      }
      break;
    case 19:
      Qe(t, e), rt(e), r & 4 && $c(e);
      break;
    case 21:
      break;
    default:
      Qe(t, e), rt(e);
  }
}
function rt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Dp(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(T(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Gr(i, ""), (r.flags &= -33));
          var o = Rc(e);
          Zs(e, o, i);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo,
            s = Rc(e);
          qs(e, s, l);
          break;
        default:
          throw Error(T(161));
      }
    } catch (a) {
      G(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Sv(e, t, n) {
  (L = e), $p(e);
}
function $p(e, t, n) {
  for (var r = (e.mode & 1) !== 0; L !== null; ) {
    var i = L,
      o = i.child;
    if (i.tag === 22 && r) {
      var l = i.memoizedState !== null || Vi;
      if (!l) {
        var s = i.alternate,
          a = (s !== null && s.memoizedState !== null) || fe;
        s = Vi;
        var u = fe;
        if (((Vi = l), (fe = a) && !u))
          for (L = i; L !== null; )
            (l = L),
              (a = l.child),
              l.tag === 22 && l.memoizedState !== null
                ? zc(i)
                : a !== null
                ? ((a.return = l), (L = a))
                : zc(i);
        for (; o !== null; ) (L = o), $p(o), (o = o.sibling);
        (L = i), (Vi = s), (fe = u);
      }
      Mc(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (L = o)) : Mc(e);
  }
}
function Mc(e) {
  for (; L !== null; ) {
    var t = L;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              fe || el(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !fe)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ge(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && _c(t, o, r);
              break;
            case 3:
              var l = t.updateQueue;
              if (l !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                _c(t, l, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
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
                    var p = c.dehydrated;
                    p !== null && Jr(p);
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
              throw Error(T(163));
          }
        fe || (t.flags & 512 && Xs(t));
      } catch (m) {
        G(t, t.return, m);
      }
    }
    if (t === e) {
      L = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (L = n);
      break;
    }
    L = t.return;
  }
}
function jc(e) {
  for (; L !== null; ) {
    var t = L;
    if (t === e) {
      L = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (L = n);
      break;
    }
    L = t.return;
  }
}
function zc(e) {
  for (; L !== null; ) {
    var t = L;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            el(4, t);
          } catch (a) {
            G(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              G(t, i, a);
            }
          }
          var o = t.return;
          try {
            Xs(t);
          } catch (a) {
            G(t, o, a);
          }
          break;
        case 5:
          var l = t.return;
          try {
            Xs(t);
          } catch (a) {
            G(t, l, a);
          }
      }
    } catch (a) {
      G(t, t.return, a);
    }
    if (t === e) {
      L = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (L = s);
      break;
    }
    L = t.return;
  }
}
var Cv = Math.ceil,
  Io = kt.ReactCurrentDispatcher,
  qa = kt.ReactCurrentOwner,
  Ve = kt.ReactCurrentBatchConfig,
  j = 0,
  re = null,
  J = null,
  se = 0,
  Ae = 0,
  Kn = Zt(0),
  te = 0,
  ci = null,
  En = 0,
  tl = 0,
  Za = 0,
  Hr = null,
  we = null,
  Ja = 0,
  lr = 1 / 0,
  ht = null,
  Ro = !1,
  Js = null,
  Ut = null,
  Ui = !1,
  $t = null,
  $o = 0,
  Br = 0,
  ea = null,
  lo = -1,
  so = 0;
function me() {
  return j & 6 ? Z() : lo !== -1 ? lo : (lo = Z());
}
function Wt(e) {
  return e.mode & 1
    ? j & 2 && se !== 0
      ? se & -se
      : lv.transition !== null
      ? (so === 0 && (so = yd()), so)
      : ((e = b),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Nd(e.type))),
        e)
    : 1;
}
function Je(e, t, n, r) {
  if (50 < Br) throw ((Br = 0), (ea = null), Error(T(185)));
  mi(e, n, r),
    (!(j & 2) || e !== re) &&
      (e === re && (!(j & 2) && (tl |= n), te === 4 && It(e, se)),
      ke(e, r),
      n === 1 && j === 0 && !(t.mode & 1) && ((lr = Z() + 500), qo && Jt()));
}
function ke(e, t) {
  var n = e.callbackNode;
  lg(e, t);
  var r = yo(e, e === re ? se : 0);
  if (r === 0)
    n !== null && Yu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Yu(n), t === 1))
      e.tag === 0 ? ov(bc.bind(null, e)) : Hd(bc.bind(null, e)),
        tv(function () {
          !(j & 6) && Jt();
        }),
        (n = null);
    else {
      switch (_d(r)) {
        case 1:
          n = Na;
          break;
        case 4:
          n = gd;
          break;
        case 16:
          n = vo;
          break;
        case 536870912:
          n = vd;
          break;
        default:
          n = vo;
      }
      n = Wp(n, Mp.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Mp(e, t) {
  if (((lo = -1), (so = 0), j & 6)) throw Error(T(327));
  var n = e.callbackNode;
  if (Jn() && e.callbackNode !== n) return null;
  var r = yo(e, e === re ? se : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Mo(e, r);
  else {
    t = r;
    var i = j;
    j |= 2;
    var o = zp();
    (re !== e || se !== t) && ((ht = null), (lr = Z() + 500), hn(e, t));
    do
      try {
        kv();
        break;
      } catch (s) {
        jp(e, s);
      }
    while (1);
    za(),
      (Io.current = o),
      (j = i),
      J !== null ? (t = 0) : ((re = null), (se = 0), (t = te));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = xs(e)), i !== 0 && ((r = i), (t = ta(e, i)))), t === 1)
    )
      throw ((n = ci), hn(e, 0), It(e, r), ke(e, Z()), n);
    if (t === 6) It(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !Tv(i) &&
          ((t = Mo(e, r)),
          t === 2 && ((o = xs(e)), o !== 0 && ((r = o), (t = ta(e, o)))),
          t === 1))
      )
        throw ((n = ci), hn(e, 0), It(e, r), ke(e, Z()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(T(345));
        case 2:
          an(e, we, ht);
          break;
        case 3:
          if (
            (It(e, r), (r & 130023424) === r && ((t = Ja + 500 - Z()), 10 < t))
          ) {
            if (yo(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              me(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = $s(an.bind(null, e, we, ht), t);
            break;
          }
          an(e, we, ht);
          break;
        case 4:
          if ((It(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var l = 31 - Ze(r);
            (o = 1 << l), (l = t[l]), l > i && (i = l), (r &= ~o);
          }
          if (
            ((r = i),
            (r = Z() - r),
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
                : 1960 * Cv(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = $s(an.bind(null, e, we, ht), r);
            break;
          }
          an(e, we, ht);
          break;
        case 5:
          an(e, we, ht);
          break;
        default:
          throw Error(T(329));
      }
    }
  }
  return ke(e, Z()), e.callbackNode === n ? Mp.bind(null, e) : null;
}
function ta(e, t) {
  var n = Hr;
  return (
    e.current.memoizedState.isDehydrated && (hn(e, t).flags |= 256),
    (e = Mo(e, t)),
    e !== 2 && ((t = we), (we = n), t !== null && na(t)),
    e
  );
}
function na(e) {
  we === null ? (we = e) : we.push.apply(we, e);
}
function Tv(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!et(o(), i)) return !1;
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
function It(e, t) {
  for (
    t &= ~Za,
      t &= ~tl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Ze(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function bc(e) {
  if (j & 6) throw Error(T(327));
  Jn();
  var t = yo(e, 0);
  if (!(t & 1)) return ke(e, Z()), null;
  var n = Mo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = xs(e);
    r !== 0 && ((t = r), (n = ta(e, r)));
  }
  if (n === 1) throw ((n = ci), hn(e, 0), It(e, t), ke(e, Z()), n);
  if (n === 6) throw Error(T(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    an(e, we, ht),
    ke(e, Z()),
    null
  );
}
function eu(e, t) {
  var n = j;
  j |= 1;
  try {
    return e(t);
  } finally {
    (j = n), j === 0 && ((lr = Z() + 500), qo && Jt());
  }
}
function wn(e) {
  $t !== null && $t.tag === 0 && !(j & 6) && Jn();
  var t = j;
  j |= 1;
  var n = Ve.transition,
    r = b;
  try {
    if (((Ve.transition = null), (b = 1), e)) return e();
  } finally {
    (b = r), (Ve.transition = n), (j = t), !(j & 6) && Jt();
  }
}
function tu() {
  (Ae = Kn.current), W(Kn);
}
function hn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), ev(n)), J !== null))
    for (n = J.return; n !== null; ) {
      var r = n;
      switch (($a(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Co();
          break;
        case 3:
          ir(), W(Te), W(de), Ha();
          break;
        case 5:
          Wa(r);
          break;
        case 4:
          ir();
          break;
        case 13:
          W(K);
          break;
        case 19:
          W(K);
          break;
        case 10:
          ba(r.type._context);
          break;
        case 22:
        case 23:
          tu();
      }
      n = n.return;
    }
  if (
    ((re = e),
    (J = e = Ht(e.current, null)),
    (se = Ae = t),
    (te = 0),
    (ci = null),
    (Za = tl = En = 0),
    (we = Hr = null),
    cn !== null)
  ) {
    for (t = 0; t < cn.length; t++)
      if (((n = cn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var l = o.next;
          (o.next = i), (r.next = l);
        }
        n.pending = r;
      }
    cn = null;
  }
  return e;
}
function jp(e, t) {
  do {
    var n = J;
    try {
      if ((za(), (ro.current = Do), Po)) {
        for (var r = Y.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        Po = !1;
      }
      if (
        ((_n = 0),
        (ne = ee = Y = null),
        (Ur = !1),
        (si = 0),
        (qa.current = null),
        n === null || n.return === null)
      ) {
        (te = 1), (ci = t), (J = null);
        break;
      }
      e: {
        var o = e,
          l = n.return,
          s = n,
          a = t;
        if (
          ((t = se),
          (s.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            c = s,
            p = c.tag;
          if (!(c.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var m = c.alternate;
            m
              ? ((c.updateQueue = m.updateQueue),
                (c.memoizedState = m.memoizedState),
                (c.lanes = m.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var v = kc(l);
          if (v !== null) {
            (v.flags &= -257),
              xc(v, l, s, o, t),
              v.mode & 1 && Nc(o, u, t),
              (t = v),
              (a = u);
            var _ = t.updateQueue;
            if (_ === null) {
              var y = new Set();
              y.add(a), (t.updateQueue = y);
            } else _.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Nc(o, u, t), nu();
              break e;
            }
            a = Error(T(426));
          }
        } else if (B && s.mode & 1) {
          var E = kc(l);
          if (E !== null) {
            !(E.flags & 65536) && (E.flags |= 256),
              xc(E, l, s, o, t),
              Ma(or(a, s));
            break e;
          }
        }
        (o = a = or(a, s)),
          te !== 4 && (te = 2),
          Hr === null ? (Hr = [o]) : Hr.push(o),
          (o = l);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var d = Ep(o, a, t);
              yc(o, d);
              break e;
            case 1:
              s = a;
              var f = o.type,
                h = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof f.getDerivedStateFromError == "function" ||
                  (h !== null &&
                    typeof h.componentDidCatch == "function" &&
                    (Ut === null || !Ut.has(h))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var g = wp(o, s, t);
                yc(o, g);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Fp(n);
    } catch (w) {
      (t = w), J === n && n !== null && (J = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function zp() {
  var e = Io.current;
  return (Io.current = Do), e === null ? Do : e;
}
function nu() {
  (te === 0 || te === 3 || te === 2) && (te = 4),
    re === null || (!(En & 268435455) && !(tl & 268435455)) || It(re, se);
}
function Mo(e, t) {
  var n = j;
  j |= 2;
  var r = zp();
  (re !== e || se !== t) && ((ht = null), hn(e, t));
  do
    try {
      Nv();
      break;
    } catch (i) {
      jp(e, i);
    }
  while (1);
  if ((za(), (j = n), (Io.current = r), J !== null)) throw Error(T(261));
  return (re = null), (se = 0), te;
}
function Nv() {
  for (; J !== null; ) bp(J);
}
function kv() {
  for (; J !== null && !qm(); ) bp(J);
}
function bp(e) {
  var t = Up(e.alternate, e, Ae);
  (e.memoizedProps = e.pendingProps),
    t === null ? Fp(e) : (J = t),
    (qa.current = null);
}
function Fp(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = _v(n, t)), n !== null)) {
        (n.flags &= 32767), (J = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (te = 6), (J = null);
        return;
      }
    } else if (((n = yv(n, t, Ae)), n !== null)) {
      J = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      J = t;
      return;
    }
    J = t = e;
  } while (t !== null);
  te === 0 && (te = 5);
}
function an(e, t, n) {
  var r = b,
    i = Ve.transition;
  try {
    (Ve.transition = null), (b = 1), xv(e, t, n, r);
  } finally {
    (Ve.transition = i), (b = r);
  }
  return null;
}
function xv(e, t, n, r) {
  do Jn();
  while ($t !== null);
  if (j & 6) throw Error(T(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(T(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (sg(e, o),
    e === re && ((J = re = null), (se = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ui ||
      ((Ui = !0),
      Wp(vo, function () {
        return Jn(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = Ve.transition), (Ve.transition = null);
    var l = b;
    b = 1;
    var s = j;
    (j |= 4),
      (qa.current = null),
      wv(e, n),
      Rp(n, e),
      Yg(Is),
      (_o = !!Ds),
      (Is = Ds = null),
      (e.current = n),
      Sv(n),
      Zm(),
      (j = s),
      (b = l),
      (Ve.transition = o);
  } else e.current = n;
  if (
    (Ui && ((Ui = !1), ($t = e), ($o = i)),
    (o = e.pendingLanes),
    o === 0 && (Ut = null),
    tg(n.stateNode),
    ke(e, Z()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Ro) throw ((Ro = !1), (e = Js), (Js = null), e);
  return (
    $o & 1 && e.tag !== 0 && Jn(),
    (o = e.pendingLanes),
    o & 1 ? (e === ea ? Br++ : ((Br = 0), (ea = e))) : (Br = 0),
    Jt(),
    null
  );
}
function Jn() {
  if ($t !== null) {
    var e = _d($o),
      t = Ve.transition,
      n = b;
    try {
      if (((Ve.transition = null), (b = 16 > e ? 16 : e), $t === null))
        var r = !1;
      else {
        if (((e = $t), ($t = null), ($o = 0), j & 6)) throw Error(T(331));
        var i = j;
        for (j |= 4, L = e.current; L !== null; ) {
          var o = L,
            l = o.child;
          if (L.flags & 16) {
            var s = o.deletions;
            if (s !== null) {
              for (var a = 0; a < s.length; a++) {
                var u = s[a];
                for (L = u; L !== null; ) {
                  var c = L;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Wr(8, c, o);
                  }
                  var p = c.child;
                  if (p !== null) (p.return = c), (L = p);
                  else
                    for (; L !== null; ) {
                      c = L;
                      var m = c.sibling,
                        v = c.return;
                      if ((Pp(c), c === u)) {
                        L = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = v), (L = m);
                        break;
                      }
                      L = v;
                    }
                }
              }
              var _ = o.alternate;
              if (_ !== null) {
                var y = _.child;
                if (y !== null) {
                  _.child = null;
                  do {
                    var E = y.sibling;
                    (y.sibling = null), (y = E);
                  } while (y !== null);
                }
              }
              L = o;
            }
          }
          if (o.subtreeFlags & 2064 && l !== null) (l.return = o), (L = l);
          else
            e: for (; L !== null; ) {
              if (((o = L), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Wr(9, o, o.return);
                }
              var d = o.sibling;
              if (d !== null) {
                (d.return = o.return), (L = d);
                break e;
              }
              L = o.return;
            }
        }
        var f = e.current;
        for (L = f; L !== null; ) {
          l = L;
          var h = l.child;
          if (l.subtreeFlags & 2064 && h !== null) (h.return = l), (L = h);
          else
            e: for (l = f; L !== null; ) {
              if (((s = L), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      el(9, s);
                  }
                } catch (w) {
                  G(s, s.return, w);
                }
              if (s === l) {
                L = null;
                break e;
              }
              var g = s.sibling;
              if (g !== null) {
                (g.return = s.return), (L = g);
                break e;
              }
              L = s.return;
            }
        }
        if (
          ((j = i), Jt(), lt && typeof lt.onPostCommitFiberRoot == "function")
        )
          try {
            lt.onPostCommitFiberRoot(Ko, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (b = n), (Ve.transition = t);
    }
  }
  return !1;
}
function Fc(e, t, n) {
  (t = or(n, t)),
    (t = Ep(e, t, 1)),
    (e = Vt(e, t, 1)),
    (t = me()),
    e !== null && (mi(e, 1, t), ke(e, t));
}
function G(e, t, n) {
  if (e.tag === 3) Fc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Fc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Ut === null || !Ut.has(r)))
        ) {
          (e = or(n, e)),
            (e = wp(t, e, 1)),
            (t = Vt(t, e, 1)),
            (e = me()),
            t !== null && (mi(t, 1, e), ke(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Av(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = me()),
    (e.pingedLanes |= e.suspendedLanes & n),
    re === e &&
      (se & n) === n &&
      (te === 4 || (te === 3 && (se & 130023424) === se && 500 > Z() - Ja)
        ? hn(e, 0)
        : (Za |= n)),
    ke(e, t);
}
function Vp(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Di), (Di <<= 1), !(Di & 130023424) && (Di = 4194304))
      : (t = 1));
  var n = me();
  (e = Ct(e, t)), e !== null && (mi(e, t, n), ke(e, n));
}
function Ov(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Vp(e, n);
}
function Lv(e, t) {
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
      throw Error(T(314));
  }
  r !== null && r.delete(t), Vp(e, n);
}
var Up;
Up = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Te.current) Ce = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ce = !1), vv(e, t, n);
      Ce = !!(e.flags & 131072);
    }
  else (Ce = !1), B && t.flags & 1048576 && Bd(t, ko, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      oo(e, t), (e = t.pendingProps);
      var i = tr(t, de.current);
      Zn(t, n), (i = Ka(null, t, r, e, i, n));
      var o = Ya();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ne(r) ? ((o = !0), To(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Va(t),
            (i.updater = Zo),
            (t.stateNode = i),
            (i._reactInternals = t),
            Us(t, r, e, n),
            (t = Bs(null, t, r, !0, o, n)))
          : ((t.tag = 0), B && o && Ra(t), he(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (oo(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = Dv(r)),
          (e = Ge(r, e)),
          i)
        ) {
          case 0:
            t = Hs(null, t, r, e, n);
            break e;
          case 1:
            t = Lc(null, t, r, e, n);
            break e;
          case 11:
            t = Ac(null, t, r, e, n);
            break e;
          case 14:
            t = Oc(null, t, r, Ge(r.type, e), n);
            break e;
        }
        throw Error(T(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ge(r, i)),
        Hs(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ge(r, i)),
        Lc(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((Np(t), e === null)) throw Error(T(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          Gd(e, t),
          Oo(t, r, null, n);
        var l = t.memoizedState;
        if (((r = l.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: l.cache,
              pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
              transitions: l.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (i = or(Error(T(423)), t)), (t = Pc(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = or(Error(T(424)), t)), (t = Pc(e, t, r, n, i));
            break e;
          } else
            for (
              Oe = Ft(t.stateNode.containerInfo.firstChild),
                Le = t,
                B = !0,
                qe = null,
                n = Jd(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((nr(), r === i)) {
            t = Tt(e, t, n);
            break e;
          }
          he(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        ep(t),
        e === null && bs(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (l = i.children),
        Rs(r, i) ? (l = null) : o !== null && Rs(r, o) && (t.flags |= 32),
        Tp(e, t),
        he(e, t, l, n),
        t.child
      );
    case 6:
      return e === null && bs(t), null;
    case 13:
      return kp(e, t, n);
    case 4:
      return (
        Ua(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = rr(t, null, r, n)) : he(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ge(r, i)),
        Ac(e, t, r, i, n)
      );
    case 7:
      return he(e, t, t.pendingProps, n), t.child;
    case 8:
      return he(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return he(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (l = i.value),
          F(xo, r._currentValue),
          (r._currentValue = l),
          o !== null)
        )
          if (et(o.value, l)) {
            if (o.children === i.children && !Te.current) {
              t = Tt(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var s = o.dependencies;
              if (s !== null) {
                l = o.child;
                for (var a = s.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (o.tag === 1) {
                      (a = yt(-1, n & -n)), (a.tag = 2);
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
                      Fs(o.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (o.tag === 10) l = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((l = o.return), l === null)) throw Error(T(341));
                (l.lanes |= n),
                  (s = l.alternate),
                  s !== null && (s.lanes |= n),
                  Fs(l, n, t),
                  (l = o.sibling);
              } else l = o.child;
              if (l !== null) l.return = o;
              else
                for (l = o; l !== null; ) {
                  if (l === t) {
                    l = null;
                    break;
                  }
                  if (((o = l.sibling), o !== null)) {
                    (o.return = l.return), (l = o);
                    break;
                  }
                  l = l.return;
                }
              o = l;
            }
        he(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Zn(t, n),
        (i = We(i)),
        (r = r(i)),
        (t.flags |= 1),
        he(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = Ge(r, t.pendingProps)),
        (i = Ge(r.type, i)),
        Oc(e, t, r, i, n)
      );
    case 15:
      return Sp(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ge(r, i)),
        oo(e, t),
        (t.tag = 1),
        Ne(r) ? ((e = !0), To(t)) : (e = !1),
        Zn(t, n),
        qd(t, r, i),
        Us(t, r, i, n),
        Bs(null, t, r, !0, e, n)
      );
    case 19:
      return xp(e, t, n);
    case 22:
      return Cp(e, t, n);
  }
  throw Error(T(156, t.tag));
};
function Wp(e, t) {
  return md(e, t);
}
function Pv(e, t, n, r) {
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
function Fe(e, t, n, r) {
  return new Pv(e, t, n, r);
}
function ru(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Dv(e) {
  if (typeof e == "function") return ru(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Sa)) return 11;
    if (e === Ca) return 14;
  }
  return 2;
}
function Ht(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Fe(e.tag, t, e.key, e.mode)),
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
function ao(e, t, n, r, i, o) {
  var l = 2;
  if (((r = e), typeof e == "function")) ru(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else
    e: switch (e) {
      case Mn:
        return mn(n.children, i, o, t);
      case wa:
        (l = 8), (i |= 8);
        break;
      case ds:
        return (
          (e = Fe(12, n, t, i | 2)), (e.elementType = ds), (e.lanes = o), e
        );
      case ps:
        return (e = Fe(13, n, t, i)), (e.elementType = ps), (e.lanes = o), e;
      case hs:
        return (e = Fe(19, n, t, i)), (e.elementType = hs), (e.lanes = o), e;
      case Zf:
        return nl(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Xf:
              l = 10;
              break e;
            case qf:
              l = 9;
              break e;
            case Sa:
              l = 11;
              break e;
            case Ca:
              l = 14;
              break e;
            case Lt:
              (l = 16), (r = null);
              break e;
          }
        throw Error(T(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Fe(l, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function mn(e, t, n, r) {
  return (e = Fe(7, e, r, t)), (e.lanes = n), e;
}
function nl(e, t, n, r) {
  return (
    (e = Fe(22, e, r, t)),
    (e.elementType = Zf),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Bl(e, t, n) {
  return (e = Fe(6, e, null, t)), (e.lanes = n), e;
}
function Kl(e, t, n) {
  return (
    (t = Fe(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Iv(e, t, n, r, i) {
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
    (this.eventTimes = kl(0)),
    (this.expirationTimes = kl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = kl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function iu(e, t, n, r, i, o, l, s, a) {
  return (
    (e = new Iv(e, t, n, s, a)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Fe(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Va(o),
    e
  );
}
function Rv(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: $n,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Hp(e) {
  if (!e) return Yt;
  e = e._reactInternals;
  e: {
    if (Nn(e) !== e || e.tag !== 1) throw Error(T(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ne(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(T(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ne(n)) return Wd(e, n, t);
  }
  return t;
}
function Bp(e, t, n, r, i, o, l, s, a) {
  return (
    (e = iu(n, r, !0, e, i, o, l, s, a)),
    (e.context = Hp(null)),
    (n = e.current),
    (r = me()),
    (i = Wt(n)),
    (o = yt(r, i)),
    (o.callback = t ?? null),
    Vt(n, o, i),
    (e.current.lanes = i),
    mi(e, i, r),
    ke(e, r),
    e
  );
}
function rl(e, t, n, r) {
  var i = t.current,
    o = me(),
    l = Wt(i);
  return (
    (n = Hp(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = yt(o, l)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Vt(i, t, l)),
    e !== null && (Je(e, i, l, o), no(e, i, l)),
    l
  );
}
function jo(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Vc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ou(e, t) {
  Vc(e, t), (e = e.alternate) && Vc(e, t);
}
function $v() {
  return null;
}
var Kp =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function lu(e) {
  this._internalRoot = e;
}
il.prototype.render = lu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(T(409));
  rl(e, t, null, null);
};
il.prototype.unmount = lu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    wn(function () {
      rl(null, e, null, null);
    }),
      (t[St] = null);
  }
};
function il(e) {
  this._internalRoot = e;
}
il.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Sd();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Dt.length && t !== 0 && t < Dt[n].priority; n++);
    Dt.splice(n, 0, e), n === 0 && Td(e);
  }
};
function su(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function ol(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Uc() {}
function Mv(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var u = jo(l);
        o.call(u);
      };
    }
    var l = Bp(t, r, e, 0, null, !1, !1, "", Uc);
    return (
      (e._reactRootContainer = l),
      (e[St] = l.current),
      ni(e.nodeType === 8 ? e.parentNode : e),
      wn(),
      l
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var u = jo(a);
      s.call(u);
    };
  }
  var a = iu(e, 0, !1, null, null, !1, !1, "", Uc);
  return (
    (e._reactRootContainer = a),
    (e[St] = a.current),
    ni(e.nodeType === 8 ? e.parentNode : e),
    wn(function () {
      rl(t, a, n, r);
    }),
    a
  );
}
function ll(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var l = o;
    if (typeof i == "function") {
      var s = i;
      i = function () {
        var a = jo(l);
        s.call(a);
      };
    }
    rl(t, l, e, i);
  } else l = Mv(n, t, e, i, r);
  return jo(l);
}
Ed = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = $r(t.pendingLanes);
        n !== 0 &&
          (ka(t, n | 1), ke(t, Z()), !(j & 6) && ((lr = Z() + 500), Jt()));
      }
      break;
    case 13:
      wn(function () {
        var r = Ct(e, 1);
        if (r !== null) {
          var i = me();
          Je(r, e, 1, i);
        }
      }),
        ou(e, 1);
  }
};
xa = function (e) {
  if (e.tag === 13) {
    var t = Ct(e, 134217728);
    if (t !== null) {
      var n = me();
      Je(t, e, 134217728, n);
    }
    ou(e, 134217728);
  }
};
wd = function (e) {
  if (e.tag === 13) {
    var t = Wt(e),
      n = Ct(e, t);
    if (n !== null) {
      var r = me();
      Je(n, e, t, r);
    }
    ou(e, t);
  }
};
Sd = function () {
  return b;
};
Cd = function (e, t) {
  var n = b;
  try {
    return (b = e), t();
  } finally {
    b = n;
  }
};
Ts = function (e, t, n) {
  switch (t) {
    case "input":
      if ((vs(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var i = Xo(r);
            if (!i) throw Error(T(90));
            ed(r), vs(r, i);
          }
        }
      }
      break;
    case "textarea":
      nd(e, n);
      break;
    case "select":
      (t = n.value), t != null && Qn(e, !!n.multiple, t, !1);
  }
};
ud = eu;
cd = wn;
var jv = { usingClientEntryPoint: !1, Events: [vi, Fn, Xo, sd, ad, eu] },
  Lr = {
    findFiberByHostInstance: un,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  zv = {
    bundleType: Lr.bundleType,
    version: Lr.version,
    rendererPackageName: Lr.rendererPackageName,
    rendererConfig: Lr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: kt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = pd(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Lr.findFiberByHostInstance || $v,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Wi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Wi.isDisabled && Wi.supportsFiber)
    try {
      (Ko = Wi.inject(zv)), (lt = Wi);
    } catch {}
}
$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = jv;
$e.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!su(t)) throw Error(T(200));
  return Rv(e, t, null, n);
};
$e.createRoot = function (e, t) {
  if (!su(e)) throw Error(T(299));
  var n = !1,
    r = "",
    i = Kp;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = iu(e, 1, !1, null, null, n, !1, r, i)),
    (e[St] = t.current),
    ni(e.nodeType === 8 ? e.parentNode : e),
    new lu(t)
  );
};
$e.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(T(188))
      : ((e = Object.keys(e).join(",")), Error(T(268, e)));
  return (e = pd(t)), (e = e === null ? null : e.stateNode), e;
};
$e.flushSync = function (e) {
  return wn(e);
};
$e.hydrate = function (e, t, n) {
  if (!ol(t)) throw Error(T(200));
  return ll(null, e, t, !0, n);
};
$e.hydrateRoot = function (e, t, n) {
  if (!su(e)) throw Error(T(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    l = Kp;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (t = Bp(t, null, e, 1, n ?? null, i, !1, o, l)),
    (e[St] = t.current),
    ni(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new il(t);
};
$e.render = function (e, t, n) {
  if (!ol(t)) throw Error(T(200));
  return ll(null, e, t, !1, n);
};
$e.unmountComponentAtNode = function (e) {
  if (!ol(e)) throw Error(T(40));
  return e._reactRootContainer
    ? (wn(function () {
        ll(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[St] = null);
        });
      }),
      !0)
    : !1;
};
$e.unstable_batchedUpdates = eu;
$e.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!ol(n)) throw Error(T(200));
  if (e == null || e._reactInternals === void 0) throw Error(T(38));
  return ll(e, t, n, !1, r);
};
$e.version = "18.2.0-next-9e3b772b8-20220608";
function Yp() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Yp);
    } catch (e) {
      console.error(e);
    }
}
Yp(), (Bf.exports = $e);
var bv = Bf.exports,
  Wc = bv;
(cs.createRoot = Wc.createRoot), (cs.hydrateRoot = Wc.hydrateRoot);
/**
 * @remix-run/router v1.15.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function fi() {
  return (
    (fi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    fi.apply(this, arguments)
  );
}
var Mt;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Mt || (Mt = {}));
const Hc = "popstate";
function Fv(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let { pathname: o, search: l, hash: s } = r.location;
    return ra(
      "",
      { pathname: o, search: l, hash: s },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default"
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : zo(i);
  }
  return Uv(t, n, null, e);
}
function X(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Qp(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Vv() {
  return Math.random().toString(36).substr(2, 8);
}
function Bc(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function ra(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    fi(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? yr(t) : t,
      { state: n, key: (t && t.key) || r || Vv() }
    )
  );
}
function zo(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function yr(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function Uv(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: o = !1 } = r,
    l = i.history,
    s = Mt.Pop,
    a = null,
    u = c();
  u == null && ((u = 0), l.replaceState(fi({}, l.state, { idx: u }), ""));
  function c() {
    return (l.state || { idx: null }).idx;
  }
  function p() {
    s = Mt.Pop;
    let E = c(),
      d = E == null ? null : E - u;
    (u = E), a && a({ action: s, location: y.location, delta: d });
  }
  function m(E, d) {
    s = Mt.Push;
    let f = ra(y.location, E, d);
    n && n(f, E), (u = c() + 1);
    let h = Bc(f, u),
      g = y.createHref(f);
    try {
      l.pushState(h, "", g);
    } catch (w) {
      if (w instanceof DOMException && w.name === "DataCloneError") throw w;
      i.location.assign(g);
    }
    o && a && a({ action: s, location: y.location, delta: 1 });
  }
  function v(E, d) {
    s = Mt.Replace;
    let f = ra(y.location, E, d);
    n && n(f, E), (u = c());
    let h = Bc(f, u),
      g = y.createHref(f);
    l.replaceState(h, "", g),
      o && a && a({ action: s, location: y.location, delta: 0 });
  }
  function _(E) {
    let d = i.location.origin !== "null" ? i.location.origin : i.location.href,
      f = typeof E == "string" ? E : zo(E);
    return (
      (f = f.replace(/ $/, "%20")),
      X(
        d,
        "No window.location.(origin|href) available to create URL for href: " +
          f
      ),
      new URL(f, d)
    );
  }
  let y = {
    get action() {
      return s;
    },
    get location() {
      return e(i, l);
    },
    listen(E) {
      if (a) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(Hc, p),
        (a = E),
        () => {
          i.removeEventListener(Hc, p), (a = null);
        }
      );
    },
    createHref(E) {
      return t(i, E);
    },
    createURL: _,
    encodeLocation(E) {
      let d = _(E);
      return { pathname: d.pathname, search: d.search, hash: d.hash };
    },
    push: m,
    replace: v,
    go(E) {
      return l.go(E);
    },
  };
  return y;
}
var Kc;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Kc || (Kc = {}));
function Wv(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? yr(t) : t,
    i = sr(r.pathname || "/", n);
  if (i == null) return null;
  let o = Gp(e);
  Hv(o);
  let l = null;
  for (let s = 0; l == null && s < o.length; ++s) {
    let a = ty(i);
    l = Jv(o[s], a);
  }
  return l;
}
function Gp(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (o, l, s) => {
    let a = {
      relativePath: s === void 0 ? o.path || "" : s,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: l,
      route: o,
    };
    a.relativePath.startsWith("/") &&
      (X(
        a.relativePath.startsWith(r),
        'Absolute route path "' +
          a.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (a.relativePath = a.relativePath.slice(r.length)));
    let u = Bt([r, a.relativePath]),
      c = n.concat(a);
    o.children &&
      o.children.length > 0 &&
      (X(
        o.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      Gp(o.children, t, c, u)),
      !(o.path == null && !o.index) &&
        t.push({ path: u, score: qv(u, o.index), routesMeta: c });
  };
  return (
    e.forEach((o, l) => {
      var s;
      if (o.path === "" || !((s = o.path) != null && s.includes("?"))) i(o, l);
      else for (let a of Xp(o.path)) i(o, l, a);
    }),
    t
  );
}
function Xp(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith("?"),
    o = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [o, ""] : [o];
  let l = Xp(r.join("/")),
    s = [];
  return (
    s.push(...l.map((a) => (a === "" ? o : [o, a].join("/")))),
    i && s.push(...l),
    s.map((a) => (e.startsWith("/") && a === "" ? "/" : a))
  );
}
function Hv(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Zv(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const Bv = /^:[\w-]+$/,
  Kv = 3,
  Yv = 2,
  Qv = 1,
  Gv = 10,
  Xv = -2,
  Yc = (e) => e === "*";
function qv(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Yc) && (r += Xv),
    t && (r += Yv),
    n
      .filter((i) => !Yc(i))
      .reduce((i, o) => i + (Bv.test(o) ? Kv : o === "" ? Qv : Gv), r)
  );
}
function Zv(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Jv(e, t) {
  let { routesMeta: n } = e,
    r = {},
    i = "/",
    o = [];
  for (let l = 0; l < n.length; ++l) {
    let s = n[l],
      a = l === n.length - 1,
      u = i === "/" ? t : t.slice(i.length) || "/",
      c = ia(
        { path: s.relativePath, caseSensitive: s.caseSensitive, end: a },
        u
      );
    if (!c) return null;
    Object.assign(r, c.params);
    let p = s.route;
    o.push({
      params: r,
      pathname: Bt([i, c.pathname]),
      pathnameBase: oy(Bt([i, c.pathnameBase])),
      route: p,
    }),
      c.pathnameBase !== "/" && (i = Bt([i, c.pathnameBase]));
  }
  return o;
}
function ia(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = ey(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let o = i[0],
    l = o.replace(/(.)\/+$/, "$1"),
    s = i.slice(1);
  return {
    params: r.reduce((u, c, p) => {
      let { paramName: m, isOptional: v } = c;
      if (m === "*") {
        let y = s[p] || "";
        l = o.slice(0, o.length - y.length).replace(/(.)\/+$/, "$1");
      }
      const _ = s[p];
      return (
        v && !_ ? (u[m] = void 0) : (u[m] = (_ || "").replace(/%2F/g, "/")), u
      );
    }, {}),
    pathname: o,
    pathnameBase: l,
    pattern: e,
  };
}
function ey(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Qp(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    i =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (l, s, a) => (
            r.push({ paramName: s, isOptional: a != null }),
            a ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (i += "\\/*$")
      : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, t ? void 0 : "i"), r]
  );
}
function ty(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      Qp(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function sr(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function ny(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: i = "",
  } = typeof e == "string" ? yr(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : ry(n, t)) : t,
    search: ly(r),
    hash: sy(i),
  };
}
function ry(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((i) => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Yl(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function iy(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function qp(e, t) {
  let n = iy(e);
  return t
    ? n.map((r, i) => (i === e.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function Zp(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == "string"
    ? (i = yr(e))
    : ((i = fi({}, e)),
      X(
        !i.pathname || !i.pathname.includes("?"),
        Yl("?", "pathname", "search", i)
      ),
      X(
        !i.pathname || !i.pathname.includes("#"),
        Yl("#", "pathname", "hash", i)
      ),
      X(!i.search || !i.search.includes("#"), Yl("#", "search", "hash", i)));
  let o = e === "" || i.pathname === "",
    l = o ? "/" : i.pathname,
    s;
  if (l == null) s = n;
  else {
    let p = t.length - 1;
    if (!r && l.startsWith("..")) {
      let m = l.split("/");
      for (; m[0] === ".."; ) m.shift(), (p -= 1);
      i.pathname = m.join("/");
    }
    s = p >= 0 ? t[p] : "/";
  }
  let a = ny(i, s),
    u = l && l !== "/" && l.endsWith("/"),
    c = (o || l === ".") && n.endsWith("/");
  return !a.pathname.endsWith("/") && (u || c) && (a.pathname += "/"), a;
}
const Bt = (e) => e.join("/").replace(/\/\/+/g, "/"),
  oy = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  ly = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  sy = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function ay(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Jp = ["post", "put", "patch", "delete"];
new Set(Jp);
const uy = ["get", ...Jp];
new Set(uy);
/**
 * React Router v6.22.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function di() {
  return (
    (di = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    di.apply(this, arguments)
  );
}
const sl = A.createContext(null),
  eh = A.createContext(null),
  en = A.createContext(null),
  al = A.createContext(null),
  kn = A.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  th = A.createContext(null);
function cy(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  _i() || X(!1);
  let { basename: r, navigator: i } = A.useContext(en),
    { hash: o, pathname: l, search: s } = ul(e, { relative: n }),
    a = l;
  return (
    r !== "/" && (a = l === "/" ? r : Bt([r, l])),
    i.createHref({ pathname: a, search: s, hash: o })
  );
}
function _i() {
  return A.useContext(al) != null;
}
function Ei() {
  return _i() || X(!1), A.useContext(al).location;
}
function nh(e) {
  A.useContext(en).static || A.useLayoutEffect(e);
}
function fy() {
  let { isDataRoute: e } = A.useContext(kn);
  return e ? Ty() : dy();
}
function dy() {
  _i() || X(!1);
  let e = A.useContext(sl),
    { basename: t, future: n, navigator: r } = A.useContext(en),
    { matches: i } = A.useContext(kn),
    { pathname: o } = Ei(),
    l = JSON.stringify(qp(i, n.v7_relativeSplatPath)),
    s = A.useRef(!1);
  return (
    nh(() => {
      s.current = !0;
    }),
    A.useCallback(
      function (u, c) {
        if ((c === void 0 && (c = {}), !s.current)) return;
        if (typeof u == "number") {
          r.go(u);
          return;
        }
        let p = Zp(u, JSON.parse(l), o, c.relative === "path");
        e == null &&
          t !== "/" &&
          (p.pathname = p.pathname === "/" ? t : Bt([t, p.pathname])),
          (c.replace ? r.replace : r.push)(p, c.state, c);
      },
      [t, r, l, o, e]
    )
  );
}
function ul(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = A.useContext(en),
    { matches: i } = A.useContext(kn),
    { pathname: o } = Ei(),
    l = JSON.stringify(qp(i, r.v7_relativeSplatPath));
  return A.useMemo(() => Zp(e, JSON.parse(l), o, n === "path"), [e, l, o, n]);
}
function py(e, t) {
  return hy(e, t);
}
function hy(e, t, n, r) {
  _i() || X(!1);
  let { navigator: i } = A.useContext(en),
    { matches: o } = A.useContext(kn),
    l = o[o.length - 1],
    s = l ? l.params : {};
  l && l.pathname;
  let a = l ? l.pathnameBase : "/";
  l && l.route;
  let u = Ei(),
    c;
  if (t) {
    var p;
    let E = typeof t == "string" ? yr(t) : t;
    a === "/" || ((p = E.pathname) != null && p.startsWith(a)) || X(!1),
      (c = E);
  } else c = u;
  let m = c.pathname || "/",
    v = m;
  if (a !== "/") {
    let E = a.replace(/^\//, "").split("/");
    v = "/" + m.replace(/^\//, "").split("/").slice(E.length).join("/");
  }
  let _ = Wv(e, { pathname: v }),
    y = _y(
      _ &&
        _.map((E) =>
          Object.assign({}, E, {
            params: Object.assign({}, s, E.params),
            pathname: Bt([
              a,
              i.encodeLocation
                ? i.encodeLocation(E.pathname).pathname
                : E.pathname,
            ]),
            pathnameBase:
              E.pathnameBase === "/"
                ? a
                : Bt([
                    a,
                    i.encodeLocation
                      ? i.encodeLocation(E.pathnameBase).pathname
                      : E.pathnameBase,
                  ]),
          })
        ),
      o,
      n,
      r
    );
  return t && y
    ? A.createElement(
        al.Provider,
        {
          value: {
            location: di(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              c
            ),
            navigationType: Mt.Pop,
          },
        },
        y
      )
    : y;
}
function my() {
  let e = Cy(),
    t = ay(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
    o = null;
  return A.createElement(
    A.Fragment,
    null,
    A.createElement("h2", null, "Unexpected Application Error!"),
    A.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? A.createElement("pre", { style: i }, n) : null,
    o
  );
}
const gy = A.createElement(my, null);
class vy extends A.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? A.createElement(
          kn.Provider,
          { value: this.props.routeContext },
          A.createElement(th.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function yy(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = A.useContext(sl);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    A.createElement(kn.Provider, { value: t }, r)
  );
}
function _y(e, t, n, r) {
  var i;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var o;
    if ((o = n) != null && o.errors) e = n.matches;
    else return null;
  }
  let l = e,
    s = (i = n) == null ? void 0 : i.errors;
  if (s != null) {
    let c = l.findIndex(
      (p) => p.route.id && (s == null ? void 0 : s[p.route.id])
    );
    c >= 0 || X(!1), (l = l.slice(0, Math.min(l.length, c + 1)));
  }
  let a = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < l.length; c++) {
      let p = l[c];
      if (
        ((p.route.HydrateFallback || p.route.hydrateFallbackElement) && (u = c),
        p.route.id)
      ) {
        let { loaderData: m, errors: v } = n,
          _ =
            p.route.loader &&
            m[p.route.id] === void 0 &&
            (!v || v[p.route.id] === void 0);
        if (p.route.lazy || _) {
          (a = !0), u >= 0 ? (l = l.slice(0, u + 1)) : (l = [l[0]]);
          break;
        }
      }
    }
  return l.reduceRight((c, p, m) => {
    let v,
      _ = !1,
      y = null,
      E = null;
    n &&
      ((v = s && p.route.id ? s[p.route.id] : void 0),
      (y = p.route.errorElement || gy),
      a &&
        (u < 0 && m === 0
          ? (Ny("route-fallback", !1), (_ = !0), (E = null))
          : u === m &&
            ((_ = !0), (E = p.route.hydrateFallbackElement || null))));
    let d = t.concat(l.slice(0, m + 1)),
      f = () => {
        let h;
        return (
          v
            ? (h = y)
            : _
            ? (h = E)
            : p.route.Component
            ? (h = A.createElement(p.route.Component, null))
            : p.route.element
            ? (h = p.route.element)
            : (h = c),
          A.createElement(yy, {
            match: p,
            routeContext: { outlet: c, matches: d, isDataRoute: n != null },
            children: h,
          })
        );
      };
    return n && (p.route.ErrorBoundary || p.route.errorElement || m === 0)
      ? A.createElement(vy, {
          location: n.location,
          revalidation: n.revalidation,
          component: y,
          error: v,
          children: f(),
          routeContext: { outlet: null, matches: d, isDataRoute: !0 },
        })
      : f();
  }, null);
}
var rh = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(rh || {}),
  bo = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(bo || {});
function Ey(e) {
  let t = A.useContext(sl);
  return t || X(!1), t;
}
function wy(e) {
  let t = A.useContext(eh);
  return t || X(!1), t;
}
function Sy(e) {
  let t = A.useContext(kn);
  return t || X(!1), t;
}
function ih(e) {
  let t = Sy(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || X(!1), n.route.id;
}
function Cy() {
  var e;
  let t = A.useContext(th),
    n = wy(bo.UseRouteError),
    r = ih(bo.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function Ty() {
  let { router: e } = Ey(rh.UseNavigateStable),
    t = ih(bo.UseNavigateStable),
    n = A.useRef(!1);
  return (
    nh(() => {
      n.current = !0;
    }),
    A.useCallback(
      function (i, o) {
        o === void 0 && (o = {}),
          n.current &&
            (typeof i == "number"
              ? e.navigate(i)
              : e.navigate(i, di({ fromRouteId: t }, o)));
      },
      [e, t]
    )
  );
}
const Qc = {};
function Ny(e, t, n) {
  !t && !Qc[e] && (Qc[e] = !0);
}
function uo(e) {
  X(!1);
}
function ky(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = Mt.Pop,
    navigator: o,
    static: l = !1,
    future: s,
  } = e;
  _i() && X(!1);
  let a = t.replace(/^\/*/, "/"),
    u = A.useMemo(
      () => ({
        basename: a,
        navigator: o,
        static: l,
        future: di({ v7_relativeSplatPath: !1 }, s),
      }),
      [a, s, o, l]
    );
  typeof r == "string" && (r = yr(r));
  let {
      pathname: c = "/",
      search: p = "",
      hash: m = "",
      state: v = null,
      key: _ = "default",
    } = r,
    y = A.useMemo(() => {
      let E = sr(c, a);
      return E == null
        ? null
        : {
            location: { pathname: E, search: p, hash: m, state: v, key: _ },
            navigationType: i,
          };
    }, [a, c, p, m, v, _, i]);
  return y == null
    ? null
    : A.createElement(
        en.Provider,
        { value: u },
        A.createElement(al.Provider, { children: n, value: y })
      );
}
function xy(e) {
  let { children: t, location: n } = e;
  return py(oa(t), n);
}
new Promise(() => {});
function oa(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    A.Children.forEach(e, (r, i) => {
      if (!A.isValidElement(r)) return;
      let o = [...t, i];
      if (r.type === A.Fragment) {
        n.push.apply(n, oa(r.props.children, o));
        return;
      }
      r.type !== uo && X(!1), !r.props.index || !r.props.children || X(!1);
      let l = {
        id: r.props.id || o.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (l.children = oa(r.props.children, o)), n.push(l);
    }),
    n
  );
}
/**
 * React Router DOM v6.22.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Fo() {
  return (
    (Fo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Fo.apply(this, arguments)
  );
}
function oh(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Ay(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Oy(e, t) {
  return e.button === 0 && (!t || t === "_self") && !Ay(e);
}
const Ly = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  Py = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "unstable_viewTransition",
    "children",
  ],
  Dy = "6";
try {
  window.__reactRouterVersion = Dy;
} catch {}
const Iy = A.createContext({ isTransitioning: !1 }),
  Ry = "startTransition",
  Gc = Om[Ry];
function $y(e) {
  let { basename: t, children: n, future: r, window: i } = e,
    o = A.useRef();
  o.current == null && (o.current = Fv({ window: i, v5Compat: !0 }));
  let l = o.current,
    [s, a] = A.useState({ action: l.action, location: l.location }),
    { v7_startTransition: u } = r || {},
    c = A.useCallback(
      (p) => {
        u && Gc ? Gc(() => a(p)) : a(p);
      },
      [a, u]
    );
  return (
    A.useLayoutEffect(() => l.listen(c), [l, c]),
    A.createElement(ky, {
      basename: t,
      children: n,
      location: s.location,
      navigationType: s.action,
      navigator: l,
      future: r,
    })
  );
}
const My =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  jy = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  zy = A.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: i,
        reloadDocument: o,
        replace: l,
        state: s,
        target: a,
        to: u,
        preventScrollReset: c,
        unstable_viewTransition: p,
      } = t,
      m = oh(t, Ly),
      { basename: v } = A.useContext(en),
      _,
      y = !1;
    if (typeof u == "string" && jy.test(u) && ((_ = u), My))
      try {
        let h = new URL(window.location.href),
          g = u.startsWith("//") ? new URL(h.protocol + u) : new URL(u),
          w = sr(g.pathname, v);
        g.origin === h.origin && w != null
          ? (u = w + g.search + g.hash)
          : (y = !0);
      } catch {}
    let E = cy(u, { relative: i }),
      d = Fy(u, {
        replace: l,
        state: s,
        target: a,
        preventScrollReset: c,
        relative: i,
        unstable_viewTransition: p,
      });
    function f(h) {
      r && r(h), h.defaultPrevented || d(h);
    }
    return A.createElement(
      "a",
      Fo({}, m, { href: _ || E, onClick: y || o ? r : f, ref: n, target: a })
    );
  }),
  Ql = A.forwardRef(function (t, n) {
    let {
        "aria-current": r = "page",
        caseSensitive: i = !1,
        className: o = "",
        end: l = !1,
        style: s,
        to: a,
        unstable_viewTransition: u,
        children: c,
      } = t,
      p = oh(t, Py),
      m = ul(a, { relative: p.relative }),
      v = Ei(),
      _ = A.useContext(eh),
      { navigator: y, basename: E } = A.useContext(en),
      d = _ != null && Vy(m) && u === !0,
      f = y.encodeLocation ? y.encodeLocation(m).pathname : m.pathname,
      h = v.pathname,
      g =
        _ && _.navigation && _.navigation.location
          ? _.navigation.location.pathname
          : null;
    i ||
      ((h = h.toLowerCase()),
      (g = g ? g.toLowerCase() : null),
      (f = f.toLowerCase())),
      g && E && (g = sr(g, E) || g);
    const w = f !== "/" && f.endsWith("/") ? f.length - 1 : f.length;
    let N = h === f || (!l && h.startsWith(f) && h.charAt(w) === "/"),
      k =
        g != null &&
        (g === f || (!l && g.startsWith(f) && g.charAt(f.length) === "/")),
      x = { isActive: N, isPending: k, isTransitioning: d },
      $ = N ? r : void 0,
      P;
    typeof o == "function"
      ? (P = o(x))
      : (P = [
          o,
          N ? "active" : null,
          k ? "pending" : null,
          d ? "transitioning" : null,
        ]
          .filter(Boolean)
          .join(" "));
    let z = typeof s == "function" ? s(x) : s;
    return A.createElement(
      zy,
      Fo({}, p, {
        "aria-current": $,
        className: P,
        ref: n,
        style: z,
        to: a,
        unstable_viewTransition: u,
      }),
      typeof c == "function" ? c(x) : c
    );
  });
var la;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(la || (la = {}));
var Xc;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Xc || (Xc = {}));
function by(e) {
  let t = A.useContext(sl);
  return t || X(!1), t;
}
function Fy(e, t) {
  let {
      target: n,
      replace: r,
      state: i,
      preventScrollReset: o,
      relative: l,
      unstable_viewTransition: s,
    } = t === void 0 ? {} : t,
    a = fy(),
    u = Ei(),
    c = ul(e, { relative: l });
  return A.useCallback(
    (p) => {
      if (Oy(p, n)) {
        p.preventDefault();
        let m = r !== void 0 ? r : zo(u) === zo(c);
        a(e, {
          replace: m,
          state: i,
          preventScrollReset: o,
          relative: l,
          unstable_viewTransition: s,
        });
      }
    },
    [u, a, c, r, i, n, e, o, l, s]
  );
}
function Vy(e, t) {
  t === void 0 && (t = {});
  let n = A.useContext(Iy);
  n == null && X(!1);
  let { basename: r } = by(la.useViewTransitionState),
    i = ul(e, { relative: t.relative });
  if (!n.isTransitioning) return !1;
  let o = sr(n.currentLocation.pathname, r) || n.currentLocation.pathname,
    l = sr(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return ia(i.pathname, l) != null || ia(i.pathname, o) != null;
}
const Uy = () =>
  C.jsx("nav", {
    className: "navbar navbar-expand-lg navbar-light bg-light",
    children: C.jsxs("div", {
      className: "container-fluid",
      children: [
        C.jsx("a", {
          className: "navbar-brand",
          href: "/",
          children: "William Ho",
        }),
        C.jsx("button", {
          className: "navbar-toggler",
          type: "button",
          "data-bs-toggle": "collapse",
          "data-bs-target": "#navbarSupportedContent",
          "aria-controls": "navbarSupportedContent",
          "aria-expanded": "false",
          "aria-label": "Toggle navigation",
          children: C.jsx("span", { className: "navbar-toggler-icon" }),
        }),
        C.jsx("div", {
          className: "collapse navbar-collapse",
          id: "navbarSupportedContent",
          children: C.jsxs("ul", {
            className: "navbar-nav mr-auto",
            children: [
              C.jsx("li", {
                className: "nav-item",
                children: C.jsx(Ql, {
                  to: "/",
                  end: !0,
                  className: ({ isActive: e }) =>
                    e ? "nav-link active" : "nav-link",
                  children: "Home",
                }),
              }),
              C.jsx("li", {
                className: "nav-item",
                children: C.jsx(Ql, {
                  to: "/project",
                  className: ({ isActive: e }) =>
                    e ? "nav-link active" : "nav-link",
                  children: "Projects",
                }),
              }),
              C.jsx("li", {
                className: "nav-item",
                children: C.jsx(Ql, {
                  to: "/contact",
                  className: ({ isActive: e }) =>
                    e ? "nav-link active" : "nav-link",
                  children: "Contact",
                }),
              }),
            ],
          }),
        }),
      ],
    }),
  });
const Wy = () =>
  C.jsxs(C.Fragment, {
    children: [
      C.jsx("div", {
        className: "p-5 mb-4 bg-body-tertiary rounded-3 ImperialBackground",
        children: C.jsx("div", {
          className: "container-fluid py-5 jumboCopy",
          children: C.jsxs("div", {
            className: "card",
            style: { backgroundColor: "rgba(255, 255, 255, 0.7)" },
            children: [
              C.jsx("h1", {
                className: "display-5 fw-bold",
                children: "William Ho",
              }),
              C.jsx("p", {
                className: "col-md-12 fs-4",
                children: "Welcome to my portfolio",
              }),
            ],
          }),
        }),
      }),
      C.jsx("div", {
        className: "container-fluid customContent",
        children: C.jsxs("div", {
          className: "row",
          children: [
            C.jsx("div", { className: "col-lg-1" }),
            C.jsxs("div", {
              className: "col-lg-5 col-md-6 col-sm-12",
              id: "About",
              children: [
                C.jsx("h3", {
                  className: "contentHeading",
                  children: "About Me",
                }),
                C.jsx("p", {
                  children:
                    "I am a Master's in Aeronautical Engineering graduate at Imperial College London, where I have consistently achieved high academic performance, earning an Upper Second-class, 2:1. My final year project involved data-driven estimation and control of a highly non-linear chaotic flow using MATLAB. I also undertook projects in parallel computing, simulating the 2D Shallow water equation in C++ using OpenMP and BLAS, and exploring the double pendulum problem using object-oriented programming in C++. During my academic journey, I conducted an in-depth analysis of the Android app market, comparing over ten thousand apps in Google Play across different categories. This involved data cleaning, exploring app categories, and conducting sentiment analysis of user reviews using Python.",
                }),
              ],
            }),
            C.jsxs("div", {
              className: "col-lg-5 col-md-6 col-sm-12",
              id: "Skills",
              children: [
                C.jsx("h3", {
                  className: "contentHeading",
                  children: "Skills",
                }),
                C.jsxs("p", {
                  children: [
                    " ",
                    "I am looking to learn and develop relevant skills in front-end web development from this boot camp. Outside of the boot camp, I am currently developing my programming skills and knowledge in Data Science. I have a keen interest in data-driven projects such as self-driving cars and algorithmic trading.",
                  ],
                }),
              ],
            }),
            C.jsx("div", { className: "col-lg-1" }),
          ],
        }),
      }),
    ],
  });
function Hy(e) {
  return C.jsx("div", { className: "wrapper", children: e.children });
}
function By(e) {
  return C.jsx("h1", { className: "title", children: e.children });
}
const Ky = [
  {
    id: 1,
    name: "Refactor Webpage",
    image: "/public/project1.png",
    github: "https://github.com/howilliam/Refactor-Webpage",
    link: "https://howilliam.github.io/Refactor-Webpage/",
  },
  {
    id: 2,
    name: "Portfolio",
    image: "/public/project2.png",
    github: "https://github.com/howilliam/Portfolio",
    link: "https://howilliam.github.io/Portfolio/",
  },
  {
    id: 3,
    name: "Bootstrap portfolio",
    image: "/public/project3.png",
    github: "https://github.com/howilliam/Bootstrap-Portfolio",
    link: "https://howilliam.github.io/Bootstrap-Portfolio/",
  },
  {
    id: 4,
    name: "Password generator",
    image: "/public/project4.png",
    github: "https://github.com/howilliam/passwordGenerator",
    link: "https://howilliam.github.io/passwordGenerator/",
  },
  {
    id: 5,
    name: "Code Quiz",
    image: "/public/project5.png",
    github: "https://github.com/howilliam/CodeQuiz",
    link: "https://howilliam.github.io/CodeQuiz/",
  },
  {
    id: 6,
    name: "Book Search",
    image: "/public/project6.png",
    github: "https://github.com/howilliam/book-search",
    link: "https://howilliam.github.io/book-search/",
  },
];
function Yy(e) {
  return C.jsxs("div", {
    className: "card",
    children: [
      C.jsx("div", {
        className: "img-container",
        children: C.jsx("img", {
          alt: e.name,
          src: e.image,
          className: "card-img-top",
        }),
      }),
      C.jsx("div", {
        className: "content",
        children: C.jsxs("ul", {
          children: [
            C.jsxs("li", {
              children: [
                C.jsx("strong", { children: "Project:" }),
                " ",
                e.name,
              ],
            }),
            C.jsxs("li", {
              children: [
                C.jsx("strong", { children: "Website:" }),
                " ",
                C.jsx("a", {
                  href: e.link,
                  class: "btn btn-dark",
                  children: "Click Here",
                }),
              ],
            }),
            C.jsxs("li", {
              children: [
                C.jsx("strong", { children: "Github:" }),
                " ",
                C.jsx("a", {
                  href: e.github,
                  class: "btn btn-dark",
                  children: "Click Here",
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
const Qy = () => {
  const [e, t] = A.useState(Ky);
  return C.jsxs(Hy, {
    children: [
      C.jsx(By, { children: "Project List" }),
      e.map((n) =>
        C.jsx(
          Yy,
          {
            id: n.id,
            name: n.name,
            image: n.image,
            github: n.github,
            link: n.link,
          },
          n.id
        )
      ),
    ],
  });
};
function Gy() {
  return C.jsx("footer", {
    className: "bg-dark text-light p-4",
    children: C.jsx("div", {
      className: "container",
      children: C.jsxs("div", {
        className: "row",
        children: [
          C.jsxs("div", {
            className: "col-md-6",
            id: "Contact",
            children: [
              C.jsx("h5", { children: "Contact Me" }),
              C.jsx("p", { children: "Email: williamtzefengho@gmail.com" }),
              C.jsx("p", { children: "Phone: (+44) 456-7890" }),
              C.jsx("p", {
                children: C.jsx("a", {
                  href: "https://uk.linkedin.com/in/william-ho-b519621b2",
                  target: "_blank",
                  classNmae: "text-primary custom-link",
                  children: "LinkedIn",
                }),
              }),
            ],
          }),
          C.jsxs("div", {
            className: "col-md-6",
            children: [
              C.jsx("h5", { children: "GitHub Profile" }),
              C.jsx("p", {
                children: C.jsx("a", {
                  href: "https://github.com/howilliam",
                  target: "_blank",
                  className: "text-primary custom-link",
                  children: "GitHub",
                }),
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
const Xy = () => {
  const [e, t] = A.useState({ name: "", email: "", message: "" }),
    n = (i) => {
      const o = i.target.value,
        l = i.target.name;
      t({ ...e, [l]: o });
    },
    r = (i) => {
      i.preventDefault(),
        !e.name || !e.email || !e.message
          ? alert("Name, email or message has not been entered!")
          : e.message.length < 2
          ? alert("Are you sure your message is long enough!")
          : (alert(
              `Hello, ${e.name}! Thank you for your message. We will get in touch with you soon.`
            ),
            t({ name: "", email: "", message: "" }));
    };
  return C.jsxs(C.Fragment, {
    children: [
      C.jsxs("div", {
        children: [
          C.jsxs("form", {
            children: [
              C.jsxs("div", {
                className: "form-group",
                children: [
                  C.jsx("label", { htmlFor: "Name", children: "Name" }),
                  C.jsx("input", {
                    value: e.name,
                    name: "name",
                    onChange: n,
                    type: "text",
                    className: "form-control",
                    id: "Name",
                    placeholder: "Enter name",
                  }),
                ],
              }),
              C.jsxs("div", {
                className: "form-group",
                children: [
                  C.jsx("label", {
                    htmlFor: "exampleInputEmail1",
                    children: "Email address",
                  }),
                  C.jsx("input", {
                    name: "email",
                    value: e.email,
                    onChange: n,
                    type: "email",
                    className: "form-control",
                    id: "exampleInputEmail1",
                    "aria-describedby": "emailHelp",
                    placeholder: "Enter email",
                  }),
                  C.jsx("small", {
                    id: "emailHelp",
                    className: "form-text text-muted",
                    children: "We'll never share your email with anyone else.",
                  }),
                ],
              }),
              C.jsxs("div", {
                class: "form-group",
                children: [
                  C.jsx("label", {
                    for: "exampleFormControlTextarea1",
                    children: "Message",
                  }),
                  C.jsx("textarea", {
                    name: "message",
                    value: e.message,
                    onChange: n,
                    class: "form-control",
                    id: "exampleFormControlTextarea1",
                    rows: "3",
                  }),
                ],
              }),
              C.jsx("button", {
                onClick: r,
                type: "submit",
                className: "btn btn-primary",
                children: "Submit",
              }),
            ],
          }),
          C.jsx("div", {
            className: "center-container p-3",
            children: C.jsx("a", {
              href: "/src/assets/CV 2024.pdf",
              className: "btn btn-primary",
              children: "My CV",
            }),
          }),
        ],
      }),
      C.jsx(Gy, {}),
    ],
  });
};
const qy = () =>
    C.jsxs($y, {
      children: [
        C.jsx(Uy, {}),
        C.jsx("div", {
          className:
            "d-flex flex-column w-full justify-content-center align-items-center myStyle",
          children: C.jsxs(xy, {
            children: [
              C.jsx(uo, { path: "/", element: C.jsx(Wy, {}) }),
              C.jsx(uo, { path: "/project", element: C.jsx(Qy, {}) }),
              C.jsx(uo, { path: "/contact", element: C.jsx(Xy, {}) }),
            ],
          }),
        }),
      ],
    }),
  Zy = () => C.jsx("div", { children: C.jsx(qy, {}) });
var ge = "top",
  De = "bottom",
  Ie = "right",
  ve = "left",
  cl = "auto",
  _r = [ge, De, Ie, ve],
  Sn = "start",
  ar = "end",
  lh = "clippingParents",
  au = "viewport",
  Dn = "popper",
  sh = "reference",
  sa = _r.reduce(function (e, t) {
    return e.concat([t + "-" + Sn, t + "-" + ar]);
  }, []),
  uu = [].concat(_r, [cl]).reduce(function (e, t) {
    return e.concat([t, t + "-" + Sn, t + "-" + ar]);
  }, []),
  ah = "beforeRead",
  uh = "read",
  ch = "afterRead",
  fh = "beforeMain",
  dh = "main",
  ph = "afterMain",
  hh = "beforeWrite",
  mh = "write",
  gh = "afterWrite",
  vh = [ah, uh, ch, fh, dh, ph, hh, mh, gh];
function ct(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Re(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return (t && t.defaultView) || window;
  }
  return e;
}
function Cn(e) {
  var t = Re(e).Element;
  return e instanceof t || e instanceof Element;
}
function Ue(e) {
  var t = Re(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function cu(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = Re(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Jy(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function (n) {
    var r = t.styles[n] || {},
      i = t.attributes[n] || {},
      o = t.elements[n];
    !Ue(o) ||
      !ct(o) ||
      (Object.assign(o.style, r),
      Object.keys(i).forEach(function (l) {
        var s = i[l];
        s === !1 ? o.removeAttribute(l) : o.setAttribute(l, s === !0 ? "" : s);
      }));
  });
}
function e_(e) {
  var t = e.state,
    n = {
      popper: {
        position: t.options.strategy,
        left: "0",
        top: "0",
        margin: "0",
      },
      arrow: { position: "absolute" },
      reference: {},
    };
  return (
    Object.assign(t.elements.popper.style, n.popper),
    (t.styles = n),
    t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
    function () {
      Object.keys(t.elements).forEach(function (r) {
        var i = t.elements[r],
          o = t.attributes[r] || {},
          l = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]),
          s = l.reduce(function (a, u) {
            return (a[u] = ""), a;
          }, {});
        !Ue(i) ||
          !ct(i) ||
          (Object.assign(i.style, s),
          Object.keys(o).forEach(function (a) {
            i.removeAttribute(a);
          }));
      });
    }
  );
}
const fu = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Jy,
  effect: e_,
  requires: ["computeStyles"],
};
function at(e) {
  return e.split("-")[0];
}
var gn = Math.max,
  Vo = Math.min,
  ur = Math.round;
function aa() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands)
    ? e.brands
        .map(function (t) {
          return t.brand + "/" + t.version;
        })
        .join(" ")
    : navigator.userAgent;
}
function yh() {
  return !/^((?!chrome|android).)*safari/i.test(aa());
}
function cr(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(),
    i = 1,
    o = 1;
  t &&
    Ue(e) &&
    ((i = (e.offsetWidth > 0 && ur(r.width) / e.offsetWidth) || 1),
    (o = (e.offsetHeight > 0 && ur(r.height) / e.offsetHeight) || 1));
  var l = Cn(e) ? Re(e) : window,
    s = l.visualViewport,
    a = !yh() && n,
    u = (r.left + (a && s ? s.offsetLeft : 0)) / i,
    c = (r.top + (a && s ? s.offsetTop : 0)) / o,
    p = r.width / i,
    m = r.height / o;
  return {
    width: p,
    height: m,
    top: c,
    right: u + p,
    bottom: c + m,
    left: u,
    x: u,
    y: c,
  };
}
function du(e) {
  var t = cr(e),
    n = e.offsetWidth,
    r = e.offsetHeight;
  return (
    Math.abs(t.width - n) <= 1 && (n = t.width),
    Math.abs(t.height - r) <= 1 && (r = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: n, height: r }
  );
}
function _h(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && cu(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r)) return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Nt(e) {
  return Re(e).getComputedStyle(e);
}
function t_(e) {
  return ["table", "td", "th"].indexOf(ct(e)) >= 0;
}
function tn(e) {
  return ((Cn(e) ? e.ownerDocument : e.document) || window.document)
    .documentElement;
}
function fl(e) {
  return ct(e) === "html"
    ? e
    : e.assignedSlot || e.parentNode || (cu(e) ? e.host : null) || tn(e);
}
function qc(e) {
  return !Ue(e) || Nt(e).position === "fixed" ? null : e.offsetParent;
}
function n_(e) {
  var t = /firefox/i.test(aa()),
    n = /Trident/i.test(aa());
  if (n && Ue(e)) {
    var r = Nt(e);
    if (r.position === "fixed") return null;
  }
  var i = fl(e);
  for (cu(i) && (i = i.host); Ue(i) && ["html", "body"].indexOf(ct(i)) < 0; ) {
    var o = Nt(i);
    if (
      o.transform !== "none" ||
      o.perspective !== "none" ||
      o.contain === "paint" ||
      ["transform", "perspective"].indexOf(o.willChange) !== -1 ||
      (t && o.willChange === "filter") ||
      (t && o.filter && o.filter !== "none")
    )
      return i;
    i = i.parentNode;
  }
  return null;
}
function wi(e) {
  for (var t = Re(e), n = qc(e); n && t_(n) && Nt(n).position === "static"; )
    n = qc(n);
  return n &&
    (ct(n) === "html" || (ct(n) === "body" && Nt(n).position === "static"))
    ? t
    : n || n_(e) || t;
}
function pu(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Kr(e, t, n) {
  return gn(e, Vo(t, n));
}
function r_(e, t, n) {
  var r = Kr(e, t, n);
  return r > n ? n : r;
}
function Eh() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function wh(e) {
  return Object.assign({}, Eh(), e);
}
function Sh(e, t) {
  return t.reduce(function (n, r) {
    return (n[r] = e), n;
  }, {});
}
var i_ = function (t, n) {
  return (
    (t =
      typeof t == "function"
        ? t(Object.assign({}, n.rects, { placement: n.placement }))
        : t),
    wh(typeof t != "number" ? t : Sh(t, _r))
  );
};
function o_(e) {
  var t,
    n = e.state,
    r = e.name,
    i = e.options,
    o = n.elements.arrow,
    l = n.modifiersData.popperOffsets,
    s = at(n.placement),
    a = pu(s),
    u = [ve, Ie].indexOf(s) >= 0,
    c = u ? "height" : "width";
  if (!(!o || !l)) {
    var p = i_(i.padding, n),
      m = du(o),
      v = a === "y" ? ge : ve,
      _ = a === "y" ? De : Ie,
      y =
        n.rects.reference[c] + n.rects.reference[a] - l[a] - n.rects.popper[c],
      E = l[a] - n.rects.reference[a],
      d = wi(o),
      f = d ? (a === "y" ? d.clientHeight || 0 : d.clientWidth || 0) : 0,
      h = y / 2 - E / 2,
      g = p[v],
      w = f - m[c] - p[_],
      N = f / 2 - m[c] / 2 + h,
      k = Kr(g, N, w),
      x = a;
    n.modifiersData[r] = ((t = {}), (t[x] = k), (t.centerOffset = k - N), t);
  }
}
function l_(e) {
  var t = e.state,
    n = e.options,
    r = n.element,
    i = r === void 0 ? "[data-popper-arrow]" : r;
  i != null &&
    ((typeof i == "string" && ((i = t.elements.popper.querySelector(i)), !i)) ||
      (_h(t.elements.popper, i) && (t.elements.arrow = i)));
}
const Ch = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: o_,
  effect: l_,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"],
};
function fr(e) {
  return e.split("-")[1];
}
var s_ = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function a_(e, t) {
  var n = e.x,
    r = e.y,
    i = t.devicePixelRatio || 1;
  return { x: ur(n * i) / i || 0, y: ur(r * i) / i || 0 };
}
function Zc(e) {
  var t,
    n = e.popper,
    r = e.popperRect,
    i = e.placement,
    o = e.variation,
    l = e.offsets,
    s = e.position,
    a = e.gpuAcceleration,
    u = e.adaptive,
    c = e.roundOffsets,
    p = e.isFixed,
    m = l.x,
    v = m === void 0 ? 0 : m,
    _ = l.y,
    y = _ === void 0 ? 0 : _,
    E = typeof c == "function" ? c({ x: v, y }) : { x: v, y };
  (v = E.x), (y = E.y);
  var d = l.hasOwnProperty("x"),
    f = l.hasOwnProperty("y"),
    h = ve,
    g = ge,
    w = window;
  if (u) {
    var N = wi(n),
      k = "clientHeight",
      x = "clientWidth";
    if (
      (N === Re(n) &&
        ((N = tn(n)),
        Nt(N).position !== "static" &&
          s === "absolute" &&
          ((k = "scrollHeight"), (x = "scrollWidth"))),
      (N = N),
      i === ge || ((i === ve || i === Ie) && o === ar))
    ) {
      g = De;
      var $ = p && N === w && w.visualViewport ? w.visualViewport.height : N[k];
      (y -= $ - r.height), (y *= a ? 1 : -1);
    }
    if (i === ve || ((i === ge || i === De) && o === ar)) {
      h = Ie;
      var P = p && N === w && w.visualViewport ? w.visualViewport.width : N[x];
      (v -= P - r.width), (v *= a ? 1 : -1);
    }
  }
  var z = Object.assign({ position: s }, u && s_),
    ie = c === !0 ? a_({ x: v, y }, Re(n)) : { x: v, y };
  if (((v = ie.x), (y = ie.y), a)) {
    var q;
    return Object.assign(
      {},
      z,
      ((q = {}),
      (q[g] = f ? "0" : ""),
      (q[h] = d ? "0" : ""),
      (q.transform =
        (w.devicePixelRatio || 1) <= 1
          ? "translate(" + v + "px, " + y + "px)"
          : "translate3d(" + v + "px, " + y + "px, 0)"),
      q)
    );
  }
  return Object.assign(
    {},
    z,
    ((t = {}),
    (t[g] = f ? y + "px" : ""),
    (t[h] = d ? v + "px" : ""),
    (t.transform = ""),
    t)
  );
}
function u_(e) {
  var t = e.state,
    n = e.options,
    r = n.gpuAcceleration,
    i = r === void 0 ? !0 : r,
    o = n.adaptive,
    l = o === void 0 ? !0 : o,
    s = n.roundOffsets,
    a = s === void 0 ? !0 : s,
    u = {
      placement: at(t.placement),
      variation: fr(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: i,
      isFixed: t.options.strategy === "fixed",
    };
  t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      Zc(
        Object.assign({}, u, {
          offsets: t.modifiersData.popperOffsets,
          position: t.options.strategy,
          adaptive: l,
          roundOffsets: a,
        })
      )
    )),
    t.modifiersData.arrow != null &&
      (t.styles.arrow = Object.assign(
        {},
        t.styles.arrow,
        Zc(
          Object.assign({}, u, {
            offsets: t.modifiersData.arrow,
            position: "absolute",
            adaptive: !1,
            roundOffsets: a,
          })
        )
      )),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-placement": t.placement,
    }));
}
const hu = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: u_,
  data: {},
};
var Hi = { passive: !0 };
function c_(e) {
  var t = e.state,
    n = e.instance,
    r = e.options,
    i = r.scroll,
    o = i === void 0 ? !0 : i,
    l = r.resize,
    s = l === void 0 ? !0 : l,
    a = Re(t.elements.popper),
    u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return (
    o &&
      u.forEach(function (c) {
        c.addEventListener("scroll", n.update, Hi);
      }),
    s && a.addEventListener("resize", n.update, Hi),
    function () {
      o &&
        u.forEach(function (c) {
          c.removeEventListener("scroll", n.update, Hi);
        }),
        s && a.removeEventListener("resize", n.update, Hi);
    }
  );
}
const mu = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function () {},
  effect: c_,
  data: {},
};
var f_ = { left: "right", right: "left", bottom: "top", top: "bottom" };
function co(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return f_[t];
  });
}
var d_ = { start: "end", end: "start" };
function Jc(e) {
  return e.replace(/start|end/g, function (t) {
    return d_[t];
  });
}
function gu(e) {
  var t = Re(e),
    n = t.pageXOffset,
    r = t.pageYOffset;
  return { scrollLeft: n, scrollTop: r };
}
function vu(e) {
  return cr(tn(e)).left + gu(e).scrollLeft;
}
function p_(e, t) {
  var n = Re(e),
    r = tn(e),
    i = n.visualViewport,
    o = r.clientWidth,
    l = r.clientHeight,
    s = 0,
    a = 0;
  if (i) {
    (o = i.width), (l = i.height);
    var u = yh();
    (u || (!u && t === "fixed")) && ((s = i.offsetLeft), (a = i.offsetTop));
  }
  return { width: o, height: l, x: s + vu(e), y: a };
}
function h_(e) {
  var t,
    n = tn(e),
    r = gu(e),
    i = (t = e.ownerDocument) == null ? void 0 : t.body,
    o = gn(
      n.scrollWidth,
      n.clientWidth,
      i ? i.scrollWidth : 0,
      i ? i.clientWidth : 0
    ),
    l = gn(
      n.scrollHeight,
      n.clientHeight,
      i ? i.scrollHeight : 0,
      i ? i.clientHeight : 0
    ),
    s = -r.scrollLeft + vu(e),
    a = -r.scrollTop;
  return (
    Nt(i || n).direction === "rtl" &&
      (s += gn(n.clientWidth, i ? i.clientWidth : 0) - o),
    { width: o, height: l, x: s, y: a }
  );
}
function yu(e) {
  var t = Nt(e),
    n = t.overflow,
    r = t.overflowX,
    i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + i + r);
}
function Th(e) {
  return ["html", "body", "#document"].indexOf(ct(e)) >= 0
    ? e.ownerDocument.body
    : Ue(e) && yu(e)
    ? e
    : Th(fl(e));
}
function Yr(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = Th(e),
    i = r === ((n = e.ownerDocument) == null ? void 0 : n.body),
    o = Re(r),
    l = i ? [o].concat(o.visualViewport || [], yu(r) ? r : []) : r,
    s = t.concat(l);
  return i ? s : s.concat(Yr(fl(l)));
}
function ua(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  });
}
function m_(e, t) {
  var n = cr(e, !1, t === "fixed");
  return (
    (n.top = n.top + e.clientTop),
    (n.left = n.left + e.clientLeft),
    (n.bottom = n.top + e.clientHeight),
    (n.right = n.left + e.clientWidth),
    (n.width = e.clientWidth),
    (n.height = e.clientHeight),
    (n.x = n.left),
    (n.y = n.top),
    n
  );
}
function ef(e, t, n) {
  return t === au ? ua(p_(e, n)) : Cn(t) ? m_(t, n) : ua(h_(tn(e)));
}
function g_(e) {
  var t = Yr(fl(e)),
    n = ["absolute", "fixed"].indexOf(Nt(e).position) >= 0,
    r = n && Ue(e) ? wi(e) : e;
  return Cn(r)
    ? t.filter(function (i) {
        return Cn(i) && _h(i, r) && ct(i) !== "body";
      })
    : [];
}
function v_(e, t, n, r) {
  var i = t === "clippingParents" ? g_(e) : [].concat(t),
    o = [].concat(i, [n]),
    l = o[0],
    s = o.reduce(function (a, u) {
      var c = ef(e, u, r);
      return (
        (a.top = gn(c.top, a.top)),
        (a.right = Vo(c.right, a.right)),
        (a.bottom = Vo(c.bottom, a.bottom)),
        (a.left = gn(c.left, a.left)),
        a
      );
    }, ef(e, l, r));
  return (
    (s.width = s.right - s.left),
    (s.height = s.bottom - s.top),
    (s.x = s.left),
    (s.y = s.top),
    s
  );
}
function Nh(e) {
  var t = e.reference,
    n = e.element,
    r = e.placement,
    i = r ? at(r) : null,
    o = r ? fr(r) : null,
    l = t.x + t.width / 2 - n.width / 2,
    s = t.y + t.height / 2 - n.height / 2,
    a;
  switch (i) {
    case ge:
      a = { x: l, y: t.y - n.height };
      break;
    case De:
      a = { x: l, y: t.y + t.height };
      break;
    case Ie:
      a = { x: t.x + t.width, y: s };
      break;
    case ve:
      a = { x: t.x - n.width, y: s };
      break;
    default:
      a = { x: t.x, y: t.y };
  }
  var u = i ? pu(i) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (o) {
      case Sn:
        a[u] = a[u] - (t[c] / 2 - n[c] / 2);
        break;
      case ar:
        a[u] = a[u] + (t[c] / 2 - n[c] / 2);
        break;
    }
  }
  return a;
}
function dr(e, t) {
  t === void 0 && (t = {});
  var n = t,
    r = n.placement,
    i = r === void 0 ? e.placement : r,
    o = n.strategy,
    l = o === void 0 ? e.strategy : o,
    s = n.boundary,
    a = s === void 0 ? lh : s,
    u = n.rootBoundary,
    c = u === void 0 ? au : u,
    p = n.elementContext,
    m = p === void 0 ? Dn : p,
    v = n.altBoundary,
    _ = v === void 0 ? !1 : v,
    y = n.padding,
    E = y === void 0 ? 0 : y,
    d = wh(typeof E != "number" ? E : Sh(E, _r)),
    f = m === Dn ? sh : Dn,
    h = e.rects.popper,
    g = e.elements[_ ? f : m],
    w = v_(Cn(g) ? g : g.contextElement || tn(e.elements.popper), a, c, l),
    N = cr(e.elements.reference),
    k = Nh({ reference: N, element: h, strategy: "absolute", placement: i }),
    x = ua(Object.assign({}, h, k)),
    $ = m === Dn ? x : N,
    P = {
      top: w.top - $.top + d.top,
      bottom: $.bottom - w.bottom + d.bottom,
      left: w.left - $.left + d.left,
      right: $.right - w.right + d.right,
    },
    z = e.modifiersData.offset;
  if (m === Dn && z) {
    var ie = z[i];
    Object.keys(P).forEach(function (q) {
      var nt = [Ie, De].indexOf(q) >= 0 ? 1 : -1,
        ft = [ge, De].indexOf(q) >= 0 ? "y" : "x";
      P[q] += ie[ft] * nt;
    });
  }
  return P;
}
function y_(e, t) {
  t === void 0 && (t = {});
  var n = t,
    r = n.placement,
    i = n.boundary,
    o = n.rootBoundary,
    l = n.padding,
    s = n.flipVariations,
    a = n.allowedAutoPlacements,
    u = a === void 0 ? uu : a,
    c = fr(r),
    p = c
      ? s
        ? sa
        : sa.filter(function (_) {
            return fr(_) === c;
          })
      : _r,
    m = p.filter(function (_) {
      return u.indexOf(_) >= 0;
    });
  m.length === 0 && (m = p);
  var v = m.reduce(function (_, y) {
    return (
      (_[y] = dr(e, { placement: y, boundary: i, rootBoundary: o, padding: l })[
        at(y)
      ]),
      _
    );
  }, {});
  return Object.keys(v).sort(function (_, y) {
    return v[_] - v[y];
  });
}
function __(e) {
  if (at(e) === cl) return [];
  var t = co(e);
  return [Jc(e), t, Jc(t)];
}
function E_(e) {
  var t = e.state,
    n = e.options,
    r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (
      var i = n.mainAxis,
        o = i === void 0 ? !0 : i,
        l = n.altAxis,
        s = l === void 0 ? !0 : l,
        a = n.fallbackPlacements,
        u = n.padding,
        c = n.boundary,
        p = n.rootBoundary,
        m = n.altBoundary,
        v = n.flipVariations,
        _ = v === void 0 ? !0 : v,
        y = n.allowedAutoPlacements,
        E = t.options.placement,
        d = at(E),
        f = d === E,
        h = a || (f || !_ ? [co(E)] : __(E)),
        g = [E].concat(h).reduce(function (Ee, je) {
          return Ee.concat(
            at(je) === cl
              ? y_(t, {
                  placement: je,
                  boundary: c,
                  rootBoundary: p,
                  padding: u,
                  flipVariations: _,
                  allowedAutoPlacements: y,
                })
              : je
          );
        }, []),
        w = t.rects.reference,
        N = t.rects.popper,
        k = new Map(),
        x = !0,
        $ = g[0],
        P = 0;
      P < g.length;
      P++
    ) {
      var z = g[P],
        ie = at(z),
        q = fr(z) === Sn,
        nt = [ge, De].indexOf(ie) >= 0,
        ft = nt ? "width" : "height",
        oe = dr(t, {
          placement: z,
          boundary: c,
          rootBoundary: p,
          altBoundary: m,
          padding: u,
        }),
        pe = nt ? (q ? Ie : ve) : q ? De : ge;
      w[ft] > N[ft] && (pe = co(pe));
      var O = co(pe),
        I = [];
      if (
        (o && I.push(oe[ie] <= 0),
        s && I.push(oe[pe] <= 0, oe[O] <= 0),
        I.every(function (Ee) {
          return Ee;
        }))
      ) {
        ($ = z), (x = !1);
        break;
      }
      k.set(z, I);
    }
    if (x)
      for (
        var R = _ ? 3 : 1,
          V = function (je) {
            var xe = g.find(function (pt) {
              var on = k.get(pt);
              if (on)
                return on.slice(0, je).every(function (yl) {
                  return yl;
                });
            });
            if (xe) return ($ = xe), "break";
          },
          H = R;
        H > 0;
        H--
      ) {
        var dt = V(H);
        if (dt === "break") break;
      }
    t.placement !== $ &&
      ((t.modifiersData[r]._skip = !0), (t.placement = $), (t.reset = !0));
  }
}
const kh = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: E_,
  requiresIfExists: ["offset"],
  data: { _skip: !1 },
};
function tf(e, t, n) {
  return (
    n === void 0 && (n = { x: 0, y: 0 }),
    {
      top: e.top - t.height - n.y,
      right: e.right - t.width + n.x,
      bottom: e.bottom - t.height + n.y,
      left: e.left - t.width - n.x,
    }
  );
}
function nf(e) {
  return [ge, Ie, De, ve].some(function (t) {
    return e[t] >= 0;
  });
}
function w_(e) {
  var t = e.state,
    n = e.name,
    r = t.rects.reference,
    i = t.rects.popper,
    o = t.modifiersData.preventOverflow,
    l = dr(t, { elementContext: "reference" }),
    s = dr(t, { altBoundary: !0 }),
    a = tf(l, r),
    u = tf(s, i, o),
    c = nf(a),
    p = nf(u);
  (t.modifiersData[n] = {
    referenceClippingOffsets: a,
    popperEscapeOffsets: u,
    isReferenceHidden: c,
    hasPopperEscaped: p,
  }),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-reference-hidden": c,
      "data-popper-escaped": p,
    }));
}
const xh = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: w_,
};
function S_(e, t, n) {
  var r = at(e),
    i = [ve, ge].indexOf(r) >= 0 ? -1 : 1,
    o = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n,
    l = o[0],
    s = o[1];
  return (
    (l = l || 0),
    (s = (s || 0) * i),
    [ve, Ie].indexOf(r) >= 0 ? { x: s, y: l } : { x: l, y: s }
  );
}
function C_(e) {
  var t = e.state,
    n = e.options,
    r = e.name,
    i = n.offset,
    o = i === void 0 ? [0, 0] : i,
    l = uu.reduce(function (c, p) {
      return (c[p] = S_(p, t.rects, o)), c;
    }, {}),
    s = l[t.placement],
    a = s.x,
    u = s.y;
  t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += a),
    (t.modifiersData.popperOffsets.y += u)),
    (t.modifiersData[r] = l);
}
const Ah = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: C_,
};
function T_(e) {
  var t = e.state,
    n = e.name;
  t.modifiersData[n] = Nh({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement,
  });
}
const _u = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: T_,
  data: {},
};
function N_(e) {
  return e === "x" ? "y" : "x";
}
function k_(e) {
  var t = e.state,
    n = e.options,
    r = e.name,
    i = n.mainAxis,
    o = i === void 0 ? !0 : i,
    l = n.altAxis,
    s = l === void 0 ? !1 : l,
    a = n.boundary,
    u = n.rootBoundary,
    c = n.altBoundary,
    p = n.padding,
    m = n.tether,
    v = m === void 0 ? !0 : m,
    _ = n.tetherOffset,
    y = _ === void 0 ? 0 : _,
    E = dr(t, { boundary: a, rootBoundary: u, padding: p, altBoundary: c }),
    d = at(t.placement),
    f = fr(t.placement),
    h = !f,
    g = pu(d),
    w = N_(g),
    N = t.modifiersData.popperOffsets,
    k = t.rects.reference,
    x = t.rects.popper,
    $ =
      typeof y == "function"
        ? y(Object.assign({}, t.rects, { placement: t.placement }))
        : y,
    P =
      typeof $ == "number"
        ? { mainAxis: $, altAxis: $ }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, $),
    z = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
    ie = { x: 0, y: 0 };
  if (N) {
    if (o) {
      var q,
        nt = g === "y" ? ge : ve,
        ft = g === "y" ? De : Ie,
        oe = g === "y" ? "height" : "width",
        pe = N[g],
        O = pe + E[nt],
        I = pe - E[ft],
        R = v ? -x[oe] / 2 : 0,
        V = f === Sn ? k[oe] : x[oe],
        H = f === Sn ? -x[oe] : -k[oe],
        dt = t.elements.arrow,
        Ee = v && dt ? du(dt) : { width: 0, height: 0 },
        je = t.modifiersData["arrow#persistent"]
          ? t.modifiersData["arrow#persistent"].padding
          : Eh(),
        xe = je[nt],
        pt = je[ft],
        on = Kr(0, k[oe], Ee[oe]),
        yl = h
          ? k[oe] / 2 - R - on - xe - P.mainAxis
          : V - on - xe - P.mainAxis,
        lm = h
          ? -k[oe] / 2 + R + on + pt + P.mainAxis
          : H + on + pt + P.mainAxis,
        _l = t.elements.arrow && wi(t.elements.arrow),
        sm = _l ? (g === "y" ? _l.clientTop || 0 : _l.clientLeft || 0) : 0,
        ku = (q = z == null ? void 0 : z[g]) != null ? q : 0,
        am = pe + yl - ku - sm,
        um = pe + lm - ku,
        xu = Kr(v ? Vo(O, am) : O, pe, v ? gn(I, um) : I);
      (N[g] = xu), (ie[g] = xu - pe);
    }
    if (s) {
      var Au,
        cm = g === "x" ? ge : ve,
        fm = g === "x" ? De : Ie,
        ln = N[w],
        ki = w === "y" ? "height" : "width",
        Ou = ln + E[cm],
        Lu = ln - E[fm],
        El = [ge, ve].indexOf(d) !== -1,
        Pu = (Au = z == null ? void 0 : z[w]) != null ? Au : 0,
        Du = El ? Ou : ln - k[ki] - x[ki] - Pu + P.altAxis,
        Iu = El ? ln + k[ki] + x[ki] - Pu - P.altAxis : Lu,
        Ru = v && El ? r_(Du, ln, Iu) : Kr(v ? Du : Ou, ln, v ? Iu : Lu);
      (N[w] = Ru), (ie[w] = Ru - ln);
    }
    t.modifiersData[r] = ie;
  }
}
const Oh = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: k_,
  requiresIfExists: ["offset"],
};
function x_(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function A_(e) {
  return e === Re(e) || !Ue(e) ? gu(e) : x_(e);
}
function O_(e) {
  var t = e.getBoundingClientRect(),
    n = ur(t.width) / e.offsetWidth || 1,
    r = ur(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function L_(e, t, n) {
  n === void 0 && (n = !1);
  var r = Ue(t),
    i = Ue(t) && O_(t),
    o = tn(t),
    l = cr(e, i, n),
    s = { scrollLeft: 0, scrollTop: 0 },
    a = { x: 0, y: 0 };
  return (
    (r || (!r && !n)) &&
      ((ct(t) !== "body" || yu(o)) && (s = A_(t)),
      Ue(t)
        ? ((a = cr(t, !0)), (a.x += t.clientLeft), (a.y += t.clientTop))
        : o && (a.x = vu(o))),
    {
      x: l.left + s.scrollLeft - a.x,
      y: l.top + s.scrollTop - a.y,
      width: l.width,
      height: l.height,
    }
  );
}
function P_(e) {
  var t = new Map(),
    n = new Set(),
    r = [];
  e.forEach(function (o) {
    t.set(o.name, o);
  });
  function i(o) {
    n.add(o.name);
    var l = [].concat(o.requires || [], o.requiresIfExists || []);
    l.forEach(function (s) {
      if (!n.has(s)) {
        var a = t.get(s);
        a && i(a);
      }
    }),
      r.push(o);
  }
  return (
    e.forEach(function (o) {
      n.has(o.name) || i(o);
    }),
    r
  );
}
function D_(e) {
  var t = P_(e);
  return vh.reduce(function (n, r) {
    return n.concat(
      t.filter(function (i) {
        return i.phase === r;
      })
    );
  }, []);
}
function I_(e) {
  var t;
  return function () {
    return (
      t ||
        (t = new Promise(function (n) {
          Promise.resolve().then(function () {
            (t = void 0), n(e());
          });
        })),
      t
    );
  };
}
function R_(e) {
  var t = e.reduce(function (n, r) {
    var i = n[r.name];
    return (
      (n[r.name] = i
        ? Object.assign({}, i, r, {
            options: Object.assign({}, i.options, r.options),
            data: Object.assign({}, i.data, r.data),
          })
        : r),
      n
    );
  }, {});
  return Object.keys(t).map(function (n) {
    return t[n];
  });
}
var rf = { placement: "bottom", modifiers: [], strategy: "absolute" };
function of() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function (r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function dl(e) {
  e === void 0 && (e = {});
  var t = e,
    n = t.defaultModifiers,
    r = n === void 0 ? [] : n,
    i = t.defaultOptions,
    o = i === void 0 ? rf : i;
  return function (s, a, u) {
    u === void 0 && (u = o);
    var c = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, rf, o),
        modifiersData: {},
        elements: { reference: s, popper: a },
        attributes: {},
        styles: {},
      },
      p = [],
      m = !1,
      v = {
        state: c,
        setOptions: function (d) {
          var f = typeof d == "function" ? d(c.options) : d;
          y(),
            (c.options = Object.assign({}, o, c.options, f)),
            (c.scrollParents = {
              reference: Cn(s)
                ? Yr(s)
                : s.contextElement
                ? Yr(s.contextElement)
                : [],
              popper: Yr(a),
            });
          var h = D_(R_([].concat(r, c.options.modifiers)));
          return (
            (c.orderedModifiers = h.filter(function (g) {
              return g.enabled;
            })),
            _(),
            v.update()
          );
        },
        forceUpdate: function () {
          if (!m) {
            var d = c.elements,
              f = d.reference,
              h = d.popper;
            if (of(f, h)) {
              (c.rects = {
                reference: L_(f, wi(h), c.options.strategy === "fixed"),
                popper: du(h),
              }),
                (c.reset = !1),
                (c.placement = c.options.placement),
                c.orderedModifiers.forEach(function (P) {
                  return (c.modifiersData[P.name] = Object.assign({}, P.data));
                });
              for (var g = 0; g < c.orderedModifiers.length; g++) {
                if (c.reset === !0) {
                  (c.reset = !1), (g = -1);
                  continue;
                }
                var w = c.orderedModifiers[g],
                  N = w.fn,
                  k = w.options,
                  x = k === void 0 ? {} : k,
                  $ = w.name;
                typeof N == "function" &&
                  (c = N({ state: c, options: x, name: $, instance: v }) || c);
              }
            }
          }
        },
        update: I_(function () {
          return new Promise(function (E) {
            v.forceUpdate(), E(c);
          });
        }),
        destroy: function () {
          y(), (m = !0);
        },
      };
    if (!of(s, a)) return v;
    v.setOptions(u).then(function (E) {
      !m && u.onFirstUpdate && u.onFirstUpdate(E);
    });
    function _() {
      c.orderedModifiers.forEach(function (E) {
        var d = E.name,
          f = E.options,
          h = f === void 0 ? {} : f,
          g = E.effect;
        if (typeof g == "function") {
          var w = g({ state: c, name: d, instance: v, options: h }),
            N = function () {};
          p.push(w || N);
        }
      });
    }
    function y() {
      p.forEach(function (E) {
        return E();
      }),
        (p = []);
    }
    return v;
  };
}
var $_ = dl(),
  M_ = [mu, _u, hu, fu],
  j_ = dl({ defaultModifiers: M_ }),
  z_ = [mu, _u, hu, fu, Ah, kh, Oh, Ch, xh],
  Eu = dl({ defaultModifiers: z_ });
const Lh = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      afterMain: ph,
      afterRead: ch,
      afterWrite: gh,
      applyStyles: fu,
      arrow: Ch,
      auto: cl,
      basePlacements: _r,
      beforeMain: fh,
      beforeRead: ah,
      beforeWrite: hh,
      bottom: De,
      clippingParents: lh,
      computeStyles: hu,
      createPopper: Eu,
      createPopperBase: $_,
      createPopperLite: j_,
      detectOverflow: dr,
      end: ar,
      eventListeners: mu,
      flip: kh,
      hide: xh,
      left: ve,
      main: dh,
      modifierPhases: vh,
      offset: Ah,
      placements: uu,
      popper: Dn,
      popperGenerator: dl,
      popperOffsets: _u,
      preventOverflow: Oh,
      read: uh,
      reference: sh,
      right: Ie,
      start: Sn,
      top: ge,
      variationPlacements: sa,
      viewport: au,
      write: mh,
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
/*!
 * Bootstrap v5.3.3 (https://getbootstrap.com/)
 * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */ const Ot = new Map(),
  Gl = {
    set(e, t, n) {
      Ot.has(e) || Ot.set(e, new Map());
      const r = Ot.get(e);
      if (!r.has(t) && r.size !== 0) {
        console.error(
          `Bootstrap doesn't allow more than one instance per element. Bound instance: ${
            Array.from(r.keys())[0]
          }.`
        );
        return;
      }
      r.set(t, n);
    },
    get(e, t) {
      return (Ot.has(e) && Ot.get(e).get(t)) || null;
    },
    remove(e, t) {
      if (!Ot.has(e)) return;
      const n = Ot.get(e);
      n.delete(t), n.size === 0 && Ot.delete(e);
    },
  },
  b_ = 1e6,
  F_ = 1e3,
  ca = "transitionend",
  Ph = (e) => (
    e &&
      window.CSS &&
      window.CSS.escape &&
      (e = e.replace(/#([^\s"#']+)/g, (t, n) => `#${CSS.escape(n)}`)),
    e
  ),
  V_ = (e) =>
    e == null
      ? `${e}`
      : Object.prototype.toString
          .call(e)
          .match(/\s([a-z]+)/i)[1]
          .toLowerCase(),
  U_ = (e) => {
    do e += Math.floor(Math.random() * b_);
    while (document.getElementById(e));
    return e;
  },
  W_ = (e) => {
    if (!e) return 0;
    let { transitionDuration: t, transitionDelay: n } =
      window.getComputedStyle(e);
    const r = Number.parseFloat(t),
      i = Number.parseFloat(n);
    return !r && !i
      ? 0
      : ((t = t.split(",")[0]),
        (n = n.split(",")[0]),
        (Number.parseFloat(t) + Number.parseFloat(n)) * F_);
  },
  Dh = (e) => {
    e.dispatchEvent(new Event(ca));
  },
  _t = (e) =>
    !e || typeof e != "object"
      ? !1
      : (typeof e.jquery < "u" && (e = e[0]), typeof e.nodeType < "u"),
  Qt = (e) =>
    _t(e)
      ? e.jquery
        ? e[0]
        : e
      : typeof e == "string" && e.length > 0
      ? document.querySelector(Ph(e))
      : null,
  Er = (e) => {
    if (!_t(e) || e.getClientRects().length === 0) return !1;
    const t = getComputedStyle(e).getPropertyValue("visibility") === "visible",
      n = e.closest("details:not([open])");
    if (!n) return t;
    if (n !== e) {
      const r = e.closest("summary");
      if ((r && r.parentNode !== n) || r === null) return !1;
    }
    return t;
  },
  Gt = (e) =>
    !e || e.nodeType !== Node.ELEMENT_NODE || e.classList.contains("disabled")
      ? !0
      : typeof e.disabled < "u"
      ? e.disabled
      : e.hasAttribute("disabled") && e.getAttribute("disabled") !== "false",
  Ih = (e) => {
    if (!document.documentElement.attachShadow) return null;
    if (typeof e.getRootNode == "function") {
      const t = e.getRootNode();
      return t instanceof ShadowRoot ? t : null;
    }
    return e instanceof ShadowRoot ? e : e.parentNode ? Ih(e.parentNode) : null;
  },
  Uo = () => {},
  Si = (e) => {
    e.offsetHeight;
  },
  Rh = () =>
    window.jQuery && !document.body.hasAttribute("data-bs-no-jquery")
      ? window.jQuery
      : null,
  Xl = [],
  H_ = (e) => {
    document.readyState === "loading"
      ? (Xl.length ||
          document.addEventListener("DOMContentLoaded", () => {
            for (const t of Xl) t();
          }),
        Xl.push(e))
      : e();
  },
  Be = () => document.documentElement.dir === "rtl",
  Ye = (e) => {
    H_(() => {
      const t = Rh();
      if (t) {
        const n = e.NAME,
          r = t.fn[n];
        (t.fn[n] = e.jQueryInterface),
          (t.fn[n].Constructor = e),
          (t.fn[n].noConflict = () => ((t.fn[n] = r), e.jQueryInterface));
      }
    });
  },
  Se = (e, t = [], n = e) => (typeof e == "function" ? e(...t) : n),
  $h = (e, t, n = !0) => {
    if (!n) {
      Se(e);
      return;
    }
    const r = 5,
      i = W_(t) + r;
    let o = !1;
    const l = ({ target: s }) => {
      s === t && ((o = !0), t.removeEventListener(ca, l), Se(e));
    };
    t.addEventListener(ca, l),
      setTimeout(() => {
        o || Dh(t);
      }, i);
  },
  wu = (e, t, n, r) => {
    const i = e.length;
    let o = e.indexOf(t);
    return o === -1
      ? !n && r
        ? e[i - 1]
        : e[0]
      : ((o += n ? 1 : -1),
        r && (o = (o + i) % i),
        e[Math.max(0, Math.min(o, i - 1))]);
  },
  B_ = /[^.]*(?=\..*)\.|.*/,
  K_ = /\..*/,
  Y_ = /::\d+$/,
  ql = {};
let lf = 1;
const Mh = { mouseenter: "mouseover", mouseleave: "mouseout" },
  Q_ = new Set([
    "click",
    "dblclick",
    "mouseup",
    "mousedown",
    "contextmenu",
    "mousewheel",
    "DOMMouseScroll",
    "mouseover",
    "mouseout",
    "mousemove",
    "selectstart",
    "selectend",
    "keydown",
    "keypress",
    "keyup",
    "orientationchange",
    "touchstart",
    "touchmove",
    "touchend",
    "touchcancel",
    "pointerdown",
    "pointermove",
    "pointerup",
    "pointerleave",
    "pointercancel",
    "gesturestart",
    "gesturechange",
    "gestureend",
    "focus",
    "blur",
    "change",
    "reset",
    "select",
    "submit",
    "focusin",
    "focusout",
    "load",
    "unload",
    "beforeunload",
    "resize",
    "move",
    "DOMContentLoaded",
    "readystatechange",
    "error",
    "abort",
    "scroll",
  ]);
function jh(e, t) {
  return (t && `${t}::${lf++}`) || e.uidEvent || lf++;
}
function zh(e) {
  const t = jh(e);
  return (e.uidEvent = t), (ql[t] = ql[t] || {}), ql[t];
}
function G_(e, t) {
  return function n(r) {
    return (
      Su(r, { delegateTarget: e }),
      n.oneOff && S.off(e, r.type, t),
      t.apply(e, [r])
    );
  };
}
function X_(e, t, n) {
  return function r(i) {
    const o = e.querySelectorAll(t);
    for (let { target: l } = i; l && l !== this; l = l.parentNode)
      for (const s of o)
        if (s === l)
          return (
            Su(i, { delegateTarget: l }),
            r.oneOff && S.off(e, i.type, t, n),
            n.apply(l, [i])
          );
  };
}
function bh(e, t, n = null) {
  return Object.values(e).find(
    (r) => r.callable === t && r.delegationSelector === n
  );
}
function Fh(e, t, n) {
  const r = typeof t == "string",
    i = r ? n : t || n;
  let o = Vh(e);
  return Q_.has(o) || (o = e), [r, i, o];
}
function sf(e, t, n, r, i) {
  if (typeof t != "string" || !e) return;
  let [o, l, s] = Fh(t, n, r);
  t in Mh &&
    (l = ((_) =>
      function (y) {
        if (
          !y.relatedTarget ||
          (y.relatedTarget !== y.delegateTarget &&
            !y.delegateTarget.contains(y.relatedTarget))
        )
          return _.call(this, y);
      })(l));
  const a = zh(e),
    u = a[s] || (a[s] = {}),
    c = bh(u, l, o ? n : null);
  if (c) {
    c.oneOff = c.oneOff && i;
    return;
  }
  const p = jh(l, t.replace(B_, "")),
    m = o ? X_(e, n, l) : G_(e, l);
  (m.delegationSelector = o ? n : null),
    (m.callable = l),
    (m.oneOff = i),
    (m.uidEvent = p),
    (u[p] = m),
    e.addEventListener(s, m, o);
}
function fa(e, t, n, r, i) {
  const o = bh(t[n], r, i);
  o && (e.removeEventListener(n, o, !!i), delete t[n][o.uidEvent]);
}
function q_(e, t, n, r) {
  const i = t[n] || {};
  for (const [o, l] of Object.entries(i))
    o.includes(r) && fa(e, t, n, l.callable, l.delegationSelector);
}
function Vh(e) {
  return (e = e.replace(K_, "")), Mh[e] || e;
}
const S = {
  on(e, t, n, r) {
    sf(e, t, n, r, !1);
  },
  one(e, t, n, r) {
    sf(e, t, n, r, !0);
  },
  off(e, t, n, r) {
    if (typeof t != "string" || !e) return;
    const [i, o, l] = Fh(t, n, r),
      s = l !== t,
      a = zh(e),
      u = a[l] || {},
      c = t.startsWith(".");
    if (typeof o < "u") {
      if (!Object.keys(u).length) return;
      fa(e, a, l, o, i ? n : null);
      return;
    }
    if (c) for (const p of Object.keys(a)) q_(e, a, p, t.slice(1));
    for (const [p, m] of Object.entries(u)) {
      const v = p.replace(Y_, "");
      (!s || t.includes(v)) && fa(e, a, l, m.callable, m.delegationSelector);
    }
  },
  trigger(e, t, n) {
    if (typeof t != "string" || !e) return null;
    const r = Rh(),
      i = Vh(t),
      o = t !== i;
    let l = null,
      s = !0,
      a = !0,
      u = !1;
    o &&
      r &&
      ((l = r.Event(t, n)),
      r(e).trigger(l),
      (s = !l.isPropagationStopped()),
      (a = !l.isImmediatePropagationStopped()),
      (u = l.isDefaultPrevented()));
    const c = Su(new Event(t, { bubbles: s, cancelable: !0 }), n);
    return (
      u && c.preventDefault(),
      a && e.dispatchEvent(c),
      c.defaultPrevented && l && l.preventDefault(),
      c
    );
  },
};
function Su(e, t = {}) {
  for (const [n, r] of Object.entries(t))
    try {
      e[n] = r;
    } catch {
      Object.defineProperty(e, n, {
        configurable: !0,
        get() {
          return r;
        },
      });
    }
  return e;
}
function af(e) {
  if (e === "true") return !0;
  if (e === "false") return !1;
  if (e === Number(e).toString()) return Number(e);
  if (e === "" || e === "null") return null;
  if (typeof e != "string") return e;
  try {
    return JSON.parse(decodeURIComponent(e));
  } catch {
    return e;
  }
}
function Zl(e) {
  return e.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
}
const Et = {
  setDataAttribute(e, t, n) {
    e.setAttribute(`data-bs-${Zl(t)}`, n);
  },
  removeDataAttribute(e, t) {
    e.removeAttribute(`data-bs-${Zl(t)}`);
  },
  getDataAttributes(e) {
    if (!e) return {};
    const t = {},
      n = Object.keys(e.dataset).filter(
        (r) => r.startsWith("bs") && !r.startsWith("bsConfig")
      );
    for (const r of n) {
      let i = r.replace(/^bs/, "");
      (i = i.charAt(0).toLowerCase() + i.slice(1, i.length)),
        (t[i] = af(e.dataset[r]));
    }
    return t;
  },
  getDataAttribute(e, t) {
    return af(e.getAttribute(`data-bs-${Zl(t)}`));
  },
};
class Ci {
  static get Default() {
    return {};
  }
  static get DefaultType() {
    return {};
  }
  static get NAME() {
    throw new Error(
      'You have to implement the static method "NAME", for each component!'
    );
  }
  _getConfig(t) {
    return (
      (t = this._mergeConfigObj(t)),
      (t = this._configAfterMerge(t)),
      this._typeCheckConfig(t),
      t
    );
  }
  _configAfterMerge(t) {
    return t;
  }
  _mergeConfigObj(t, n) {
    const r = _t(n) ? Et.getDataAttribute(n, "config") : {};
    return {
      ...this.constructor.Default,
      ...(typeof r == "object" ? r : {}),
      ...(_t(n) ? Et.getDataAttributes(n) : {}),
      ...(typeof t == "object" ? t : {}),
    };
  }
  _typeCheckConfig(t, n = this.constructor.DefaultType) {
    for (const [r, i] of Object.entries(n)) {
      const o = t[r],
        l = _t(o) ? "element" : V_(o);
      if (!new RegExp(i).test(l))
        throw new TypeError(
          `${this.constructor.NAME.toUpperCase()}: Option "${r}" provided type "${l}" but expected type "${i}".`
        );
    }
  }
}
const Z_ = "5.3.3";
class tt extends Ci {
  constructor(t, n) {
    super(),
      (t = Qt(t)),
      t &&
        ((this._element = t),
        (this._config = this._getConfig(n)),
        Gl.set(this._element, this.constructor.DATA_KEY, this));
  }
  dispose() {
    Gl.remove(this._element, this.constructor.DATA_KEY),
      S.off(this._element, this.constructor.EVENT_KEY);
    for (const t of Object.getOwnPropertyNames(this)) this[t] = null;
  }
  _queueCallback(t, n, r = !0) {
    $h(t, n, r);
  }
  _getConfig(t) {
    return (
      (t = this._mergeConfigObj(t, this._element)),
      (t = this._configAfterMerge(t)),
      this._typeCheckConfig(t),
      t
    );
  }
  static getInstance(t) {
    return Gl.get(Qt(t), this.DATA_KEY);
  }
  static getOrCreateInstance(t, n = {}) {
    return this.getInstance(t) || new this(t, typeof n == "object" ? n : null);
  }
  static get VERSION() {
    return Z_;
  }
  static get DATA_KEY() {
    return `bs.${this.NAME}`;
  }
  static get EVENT_KEY() {
    return `.${this.DATA_KEY}`;
  }
  static eventName(t) {
    return `${t}${this.EVENT_KEY}`;
  }
}
const Jl = (e) => {
    let t = e.getAttribute("data-bs-target");
    if (!t || t === "#") {
      let n = e.getAttribute("href");
      if (!n || (!n.includes("#") && !n.startsWith("."))) return null;
      n.includes("#") && !n.startsWith("#") && (n = `#${n.split("#")[1]}`),
        (t = n && n !== "#" ? n.trim() : null);
    }
    return t
      ? t
          .split(",")
          .map((n) => Ph(n))
          .join(",")
      : null;
  },
  D = {
    find(e, t = document.documentElement) {
      return [].concat(...Element.prototype.querySelectorAll.call(t, e));
    },
    findOne(e, t = document.documentElement) {
      return Element.prototype.querySelector.call(t, e);
    },
    children(e, t) {
      return [].concat(...e.children).filter((n) => n.matches(t));
    },
    parents(e, t) {
      const n = [];
      let r = e.parentNode.closest(t);
      for (; r; ) n.push(r), (r = r.parentNode.closest(t));
      return n;
    },
    prev(e, t) {
      let n = e.previousElementSibling;
      for (; n; ) {
        if (n.matches(t)) return [n];
        n = n.previousElementSibling;
      }
      return [];
    },
    next(e, t) {
      let n = e.nextElementSibling;
      for (; n; ) {
        if (n.matches(t)) return [n];
        n = n.nextElementSibling;
      }
      return [];
    },
    focusableChildren(e) {
      const t = [
        "a",
        "button",
        "input",
        "textarea",
        "select",
        "details",
        "[tabindex]",
        '[contenteditable="true"]',
      ]
        .map((n) => `${n}:not([tabindex^="-"])`)
        .join(",");
      return this.find(t, e).filter((n) => !Gt(n) && Er(n));
    },
    getSelectorFromElement(e) {
      const t = Jl(e);
      return t && D.findOne(t) ? t : null;
    },
    getElementFromSelector(e) {
      const t = Jl(e);
      return t ? D.findOne(t) : null;
    },
    getMultipleElementsFromSelector(e) {
      const t = Jl(e);
      return t ? D.find(t) : [];
    },
  },
  pl = (e, t = "hide") => {
    const n = `click.dismiss${e.EVENT_KEY}`,
      r = e.NAME;
    S.on(document, n, `[data-bs-dismiss="${r}"]`, function (i) {
      if (
        (["A", "AREA"].includes(this.tagName) && i.preventDefault(), Gt(this))
      )
        return;
      const o = D.getElementFromSelector(this) || this.closest(`.${r}`);
      e.getOrCreateInstance(o)[t]();
    });
  },
  J_ = "alert",
  eE = "bs.alert",
  Uh = `.${eE}`,
  tE = `close${Uh}`,
  nE = `closed${Uh}`,
  rE = "fade",
  iE = "show";
class hl extends tt {
  static get NAME() {
    return J_;
  }
  close() {
    if (S.trigger(this._element, tE).defaultPrevented) return;
    this._element.classList.remove(iE);
    const n = this._element.classList.contains(rE);
    this._queueCallback(() => this._destroyElement(), this._element, n);
  }
  _destroyElement() {
    this._element.remove(), S.trigger(this._element, nE), this.dispose();
  }
  static jQueryInterface(t) {
    return this.each(function () {
      const n = hl.getOrCreateInstance(this);
      if (typeof t == "string") {
        if (n[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        n[t](this);
      }
    });
  }
}
pl(hl, "close");
Ye(hl);
const oE = "button",
  lE = "bs.button",
  sE = `.${lE}`,
  aE = ".data-api",
  uE = "active",
  uf = '[data-bs-toggle="button"]',
  cE = `click${sE}${aE}`;
class ml extends tt {
  static get NAME() {
    return oE;
  }
  toggle() {
    this._element.setAttribute(
      "aria-pressed",
      this._element.classList.toggle(uE)
    );
  }
  static jQueryInterface(t) {
    return this.each(function () {
      const n = ml.getOrCreateInstance(this);
      t === "toggle" && n[t]();
    });
  }
}
S.on(document, cE, uf, (e) => {
  e.preventDefault();
  const t = e.target.closest(uf);
  ml.getOrCreateInstance(t).toggle();
});
Ye(ml);
const fE = "swipe",
  wr = ".bs.swipe",
  dE = `touchstart${wr}`,
  pE = `touchmove${wr}`,
  hE = `touchend${wr}`,
  mE = `pointerdown${wr}`,
  gE = `pointerup${wr}`,
  vE = "touch",
  yE = "pen",
  _E = "pointer-event",
  EE = 40,
  wE = { endCallback: null, leftCallback: null, rightCallback: null },
  SE = {
    endCallback: "(function|null)",
    leftCallback: "(function|null)",
    rightCallback: "(function|null)",
  };
class Wo extends Ci {
  constructor(t, n) {
    super(),
      (this._element = t),
      !(!t || !Wo.isSupported()) &&
        ((this._config = this._getConfig(n)),
        (this._deltaX = 0),
        (this._supportPointerEvents = !!window.PointerEvent),
        this._initEvents());
  }
  static get Default() {
    return wE;
  }
  static get DefaultType() {
    return SE;
  }
  static get NAME() {
    return fE;
  }
  dispose() {
    S.off(this._element, wr);
  }
  _start(t) {
    if (!this._supportPointerEvents) {
      this._deltaX = t.touches[0].clientX;
      return;
    }
    this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX);
  }
  _end(t) {
    this._eventIsPointerPenTouch(t) &&
      (this._deltaX = t.clientX - this._deltaX),
      this._handleSwipe(),
      Se(this._config.endCallback);
  }
  _move(t) {
    this._deltaX =
      t.touches && t.touches.length > 1
        ? 0
        : t.touches[0].clientX - this._deltaX;
  }
  _handleSwipe() {
    const t = Math.abs(this._deltaX);
    if (t <= EE) return;
    const n = t / this._deltaX;
    (this._deltaX = 0),
      n && Se(n > 0 ? this._config.rightCallback : this._config.leftCallback);
  }
  _initEvents() {
    this._supportPointerEvents
      ? (S.on(this._element, mE, (t) => this._start(t)),
        S.on(this._element, gE, (t) => this._end(t)),
        this._element.classList.add(_E))
      : (S.on(this._element, dE, (t) => this._start(t)),
        S.on(this._element, pE, (t) => this._move(t)),
        S.on(this._element, hE, (t) => this._end(t)));
  }
  _eventIsPointerPenTouch(t) {
    return (
      this._supportPointerEvents &&
      (t.pointerType === yE || t.pointerType === vE)
    );
  }
  static isSupported() {
    return (
      "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0
    );
  }
}
const CE = "carousel",
  TE = "bs.carousel",
  nn = `.${TE}`,
  Wh = ".data-api",
  NE = "ArrowLeft",
  kE = "ArrowRight",
  xE = 500,
  Pr = "next",
  Ln = "prev",
  In = "left",
  fo = "right",
  AE = `slide${nn}`,
  es = `slid${nn}`,
  OE = `keydown${nn}`,
  LE = `mouseenter${nn}`,
  PE = `mouseleave${nn}`,
  DE = `dragstart${nn}`,
  IE = `load${nn}${Wh}`,
  RE = `click${nn}${Wh}`,
  Hh = "carousel",
  Bi = "active",
  $E = "slide",
  ME = "carousel-item-end",
  jE = "carousel-item-start",
  zE = "carousel-item-next",
  bE = "carousel-item-prev",
  Bh = ".active",
  Kh = ".carousel-item",
  FE = Bh + Kh,
  VE = ".carousel-item img",
  UE = ".carousel-indicators",
  WE = "[data-bs-slide], [data-bs-slide-to]",
  HE = '[data-bs-ride="carousel"]',
  BE = { [NE]: fo, [kE]: In },
  KE = {
    interval: 5e3,
    keyboard: !0,
    pause: "hover",
    ride: !1,
    touch: !0,
    wrap: !0,
  },
  YE = {
    interval: "(number|boolean)",
    keyboard: "boolean",
    pause: "(string|boolean)",
    ride: "(boolean|string)",
    touch: "boolean",
    wrap: "boolean",
  };
class Ti extends tt {
  constructor(t, n) {
    super(t, n),
      (this._interval = null),
      (this._activeElement = null),
      (this._isSliding = !1),
      (this.touchTimeout = null),
      (this._swipeHelper = null),
      (this._indicatorsElement = D.findOne(UE, this._element)),
      this._addEventListeners(),
      this._config.ride === Hh && this.cycle();
  }
  static get Default() {
    return KE;
  }
  static get DefaultType() {
    return YE;
  }
  static get NAME() {
    return CE;
  }
  next() {
    this._slide(Pr);
  }
  nextWhenVisible() {
    !document.hidden && Er(this._element) && this.next();
  }
  prev() {
    this._slide(Ln);
  }
  pause() {
    this._isSliding && Dh(this._element), this._clearInterval();
  }
  cycle() {
    this._clearInterval(),
      this._updateInterval(),
      (this._interval = setInterval(
        () => this.nextWhenVisible(),
        this._config.interval
      ));
  }
  _maybeEnableCycle() {
    if (this._config.ride) {
      if (this._isSliding) {
        S.one(this._element, es, () => this.cycle());
        return;
      }
      this.cycle();
    }
  }
  to(t) {
    const n = this._getItems();
    if (t > n.length - 1 || t < 0) return;
    if (this._isSliding) {
      S.one(this._element, es, () => this.to(t));
      return;
    }
    const r = this._getItemIndex(this._getActive());
    if (r === t) return;
    const i = t > r ? Pr : Ln;
    this._slide(i, n[t]);
  }
  dispose() {
    this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
  }
  _configAfterMerge(t) {
    return (t.defaultInterval = t.interval), t;
  }
  _addEventListeners() {
    this._config.keyboard && S.on(this._element, OE, (t) => this._keydown(t)),
      this._config.pause === "hover" &&
        (S.on(this._element, LE, () => this.pause()),
        S.on(this._element, PE, () => this._maybeEnableCycle())),
      this._config.touch && Wo.isSupported() && this._addTouchEventListeners();
  }
  _addTouchEventListeners() {
    for (const r of D.find(VE, this._element))
      S.on(r, DE, (i) => i.preventDefault());
    const n = {
      leftCallback: () => this._slide(this._directionToOrder(In)),
      rightCallback: () => this._slide(this._directionToOrder(fo)),
      endCallback: () => {
        this._config.pause === "hover" &&
          (this.pause(),
          this.touchTimeout && clearTimeout(this.touchTimeout),
          (this.touchTimeout = setTimeout(
            () => this._maybeEnableCycle(),
            xE + this._config.interval
          )));
      },
    };
    this._swipeHelper = new Wo(this._element, n);
  }
  _keydown(t) {
    if (/input|textarea/i.test(t.target.tagName)) return;
    const n = BE[t.key];
    n && (t.preventDefault(), this._slide(this._directionToOrder(n)));
  }
  _getItemIndex(t) {
    return this._getItems().indexOf(t);
  }
  _setActiveIndicatorElement(t) {
    if (!this._indicatorsElement) return;
    const n = D.findOne(Bh, this._indicatorsElement);
    n.classList.remove(Bi), n.removeAttribute("aria-current");
    const r = D.findOne(`[data-bs-slide-to="${t}"]`, this._indicatorsElement);
    r && (r.classList.add(Bi), r.setAttribute("aria-current", "true"));
  }
  _updateInterval() {
    const t = this._activeElement || this._getActive();
    if (!t) return;
    const n = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
    this._config.interval = n || this._config.defaultInterval;
  }
  _slide(t, n = null) {
    if (this._isSliding) return;
    const r = this._getActive(),
      i = t === Pr,
      o = n || wu(this._getItems(), r, i, this._config.wrap);
    if (o === r) return;
    const l = this._getItemIndex(o),
      s = (v) =>
        S.trigger(this._element, v, {
          relatedTarget: o,
          direction: this._orderToDirection(t),
          from: this._getItemIndex(r),
          to: l,
        });
    if (s(AE).defaultPrevented || !r || !o) return;
    const u = !!this._interval;
    this.pause(),
      (this._isSliding = !0),
      this._setActiveIndicatorElement(l),
      (this._activeElement = o);
    const c = i ? jE : ME,
      p = i ? zE : bE;
    o.classList.add(p), Si(o), r.classList.add(c), o.classList.add(c);
    const m = () => {
      o.classList.remove(c, p),
        o.classList.add(Bi),
        r.classList.remove(Bi, p, c),
        (this._isSliding = !1),
        s(es);
    };
    this._queueCallback(m, r, this._isAnimated()), u && this.cycle();
  }
  _isAnimated() {
    return this._element.classList.contains($E);
  }
  _getActive() {
    return D.findOne(FE, this._element);
  }
  _getItems() {
    return D.find(Kh, this._element);
  }
  _clearInterval() {
    this._interval && (clearInterval(this._interval), (this._interval = null));
  }
  _directionToOrder(t) {
    return Be() ? (t === In ? Ln : Pr) : t === In ? Pr : Ln;
  }
  _orderToDirection(t) {
    return Be() ? (t === Ln ? In : fo) : t === Ln ? fo : In;
  }
  static jQueryInterface(t) {
    return this.each(function () {
      const n = Ti.getOrCreateInstance(this, t);
      if (typeof t == "number") {
        n.to(t);
        return;
      }
      if (typeof t == "string") {
        if (n[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
}
S.on(document, RE, WE, function (e) {
  const t = D.getElementFromSelector(this);
  if (!t || !t.classList.contains(Hh)) return;
  e.preventDefault();
  const n = Ti.getOrCreateInstance(t),
    r = this.getAttribute("data-bs-slide-to");
  if (r) {
    n.to(r), n._maybeEnableCycle();
    return;
  }
  if (Et.getDataAttribute(this, "slide") === "next") {
    n.next(), n._maybeEnableCycle();
    return;
  }
  n.prev(), n._maybeEnableCycle();
});
S.on(window, IE, () => {
  const e = D.find(HE);
  for (const t of e) Ti.getOrCreateInstance(t);
});
Ye(Ti);
const QE = "collapse",
  GE = "bs.collapse",
  Ni = `.${GE}`,
  XE = ".data-api",
  qE = `show${Ni}`,
  ZE = `shown${Ni}`,
  JE = `hide${Ni}`,
  e0 = `hidden${Ni}`,
  t0 = `click${Ni}${XE}`,
  ts = "show",
  Yn = "collapse",
  Ki = "collapsing",
  n0 = "collapsed",
  r0 = `:scope .${Yn} .${Yn}`,
  i0 = "collapse-horizontal",
  o0 = "width",
  l0 = "height",
  s0 = ".collapse.show, .collapse.collapsing",
  da = '[data-bs-toggle="collapse"]',
  a0 = { parent: null, toggle: !0 },
  u0 = { parent: "(null|element)", toggle: "boolean" };
class pi extends tt {
  constructor(t, n) {
    super(t, n), (this._isTransitioning = !1), (this._triggerArray = []);
    const r = D.find(da);
    for (const i of r) {
      const o = D.getSelectorFromElement(i),
        l = D.find(o).filter((s) => s === this._element);
      o !== null && l.length && this._triggerArray.push(i);
    }
    this._initializeChildren(),
      this._config.parent ||
        this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()),
      this._config.toggle && this.toggle();
  }
  static get Default() {
    return a0;
  }
  static get DefaultType() {
    return u0;
  }
  static get NAME() {
    return QE;
  }
  toggle() {
    this._isShown() ? this.hide() : this.show();
  }
  show() {
    if (this._isTransitioning || this._isShown()) return;
    let t = [];
    if (
      (this._config.parent &&
        (t = this._getFirstLevelChildren(s0)
          .filter((s) => s !== this._element)
          .map((s) => pi.getOrCreateInstance(s, { toggle: !1 }))),
      (t.length && t[0]._isTransitioning) ||
        S.trigger(this._element, qE).defaultPrevented)
    )
      return;
    for (const s of t) s.hide();
    const r = this._getDimension();
    this._element.classList.remove(Yn),
      this._element.classList.add(Ki),
      (this._element.style[r] = 0),
      this._addAriaAndCollapsedClass(this._triggerArray, !0),
      (this._isTransitioning = !0);
    const i = () => {
        (this._isTransitioning = !1),
          this._element.classList.remove(Ki),
          this._element.classList.add(Yn, ts),
          (this._element.style[r] = ""),
          S.trigger(this._element, ZE);
      },
      l = `scroll${r[0].toUpperCase() + r.slice(1)}`;
    this._queueCallback(i, this._element, !0),
      (this._element.style[r] = `${this._element[l]}px`);
  }
  hide() {
    if (
      this._isTransitioning ||
      !this._isShown() ||
      S.trigger(this._element, JE).defaultPrevented
    )
      return;
    const n = this._getDimension();
    (this._element.style[n] = `${this._element.getBoundingClientRect()[n]}px`),
      Si(this._element),
      this._element.classList.add(Ki),
      this._element.classList.remove(Yn, ts);
    for (const i of this._triggerArray) {
      const o = D.getElementFromSelector(i);
      o && !this._isShown(o) && this._addAriaAndCollapsedClass([i], !1);
    }
    this._isTransitioning = !0;
    const r = () => {
      (this._isTransitioning = !1),
        this._element.classList.remove(Ki),
        this._element.classList.add(Yn),
        S.trigger(this._element, e0);
    };
    (this._element.style[n] = ""), this._queueCallback(r, this._element, !0);
  }
  _isShown(t = this._element) {
    return t.classList.contains(ts);
  }
  _configAfterMerge(t) {
    return (t.toggle = !!t.toggle), (t.parent = Qt(t.parent)), t;
  }
  _getDimension() {
    return this._element.classList.contains(i0) ? o0 : l0;
  }
  _initializeChildren() {
    if (!this._config.parent) return;
    const t = this._getFirstLevelChildren(da);
    for (const n of t) {
      const r = D.getElementFromSelector(n);
      r && this._addAriaAndCollapsedClass([n], this._isShown(r));
    }
  }
  _getFirstLevelChildren(t) {
    const n = D.find(r0, this._config.parent);
    return D.find(t, this._config.parent).filter((r) => !n.includes(r));
  }
  _addAriaAndCollapsedClass(t, n) {
    if (t.length)
      for (const r of t)
        r.classList.toggle(n0, !n), r.setAttribute("aria-expanded", n);
  }
  static jQueryInterface(t) {
    const n = {};
    return (
      typeof t == "string" && /show|hide/.test(t) && (n.toggle = !1),
      this.each(function () {
        const r = pi.getOrCreateInstance(this, n);
        if (typeof t == "string") {
          if (typeof r[t] > "u") throw new TypeError(`No method named "${t}"`);
          r[t]();
        }
      })
    );
  }
}
S.on(document, t0, da, function (e) {
  (e.target.tagName === "A" ||
    (e.delegateTarget && e.delegateTarget.tagName === "A")) &&
    e.preventDefault();
  for (const t of D.getMultipleElementsFromSelector(this))
    pi.getOrCreateInstance(t, { toggle: !1 }).toggle();
});
Ye(pi);
const cf = "dropdown",
  c0 = "bs.dropdown",
  xn = `.${c0}`,
  Cu = ".data-api",
  f0 = "Escape",
  ff = "Tab",
  d0 = "ArrowUp",
  df = "ArrowDown",
  p0 = 2,
  h0 = `hide${xn}`,
  m0 = `hidden${xn}`,
  g0 = `show${xn}`,
  v0 = `shown${xn}`,
  Yh = `click${xn}${Cu}`,
  Qh = `keydown${xn}${Cu}`,
  y0 = `keyup${xn}${Cu}`,
  Rn = "show",
  _0 = "dropup",
  E0 = "dropend",
  w0 = "dropstart",
  S0 = "dropup-center",
  C0 = "dropdown-center",
  dn = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
  T0 = `${dn}.${Rn}`,
  po = ".dropdown-menu",
  N0 = ".navbar",
  k0 = ".navbar-nav",
  x0 = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
  A0 = Be() ? "top-end" : "top-start",
  O0 = Be() ? "top-start" : "top-end",
  L0 = Be() ? "bottom-end" : "bottom-start",
  P0 = Be() ? "bottom-start" : "bottom-end",
  D0 = Be() ? "left-start" : "right-start",
  I0 = Be() ? "right-start" : "left-start",
  R0 = "top",
  $0 = "bottom",
  M0 = {
    autoClose: !0,
    boundary: "clippingParents",
    display: "dynamic",
    offset: [0, 2],
    popperConfig: null,
    reference: "toggle",
  },
  j0 = {
    autoClose: "(boolean|string)",
    boundary: "(string|element)",
    display: "string",
    offset: "(array|string|function)",
    popperConfig: "(null|object|function)",
    reference: "(string|element|object)",
  };
class ut extends tt {
  constructor(t, n) {
    super(t, n),
      (this._popper = null),
      (this._parent = this._element.parentNode),
      (this._menu =
        D.next(this._element, po)[0] ||
        D.prev(this._element, po)[0] ||
        D.findOne(po, this._parent)),
      (this._inNavbar = this._detectNavbar());
  }
  static get Default() {
    return M0;
  }
  static get DefaultType() {
    return j0;
  }
  static get NAME() {
    return cf;
  }
  toggle() {
    return this._isShown() ? this.hide() : this.show();
  }
  show() {
    if (Gt(this._element) || this._isShown()) return;
    const t = { relatedTarget: this._element };
    if (!S.trigger(this._element, g0, t).defaultPrevented) {
      if (
        (this._createPopper(),
        "ontouchstart" in document.documentElement && !this._parent.closest(k0))
      )
        for (const r of [].concat(...document.body.children))
          S.on(r, "mouseover", Uo);
      this._element.focus(),
        this._element.setAttribute("aria-expanded", !0),
        this._menu.classList.add(Rn),
        this._element.classList.add(Rn),
        S.trigger(this._element, v0, t);
    }
  }
  hide() {
    if (Gt(this._element) || !this._isShown()) return;
    const t = { relatedTarget: this._element };
    this._completeHide(t);
  }
  dispose() {
    this._popper && this._popper.destroy(), super.dispose();
  }
  update() {
    (this._inNavbar = this._detectNavbar()),
      this._popper && this._popper.update();
  }
  _completeHide(t) {
    if (!S.trigger(this._element, h0, t).defaultPrevented) {
      if ("ontouchstart" in document.documentElement)
        for (const r of [].concat(...document.body.children))
          S.off(r, "mouseover", Uo);
      this._popper && this._popper.destroy(),
        this._menu.classList.remove(Rn),
        this._element.classList.remove(Rn),
        this._element.setAttribute("aria-expanded", "false"),
        Et.removeDataAttribute(this._menu, "popper"),
        S.trigger(this._element, m0, t);
    }
  }
  _getConfig(t) {
    if (
      ((t = super._getConfig(t)),
      typeof t.reference == "object" &&
        !_t(t.reference) &&
        typeof t.reference.getBoundingClientRect != "function")
    )
      throw new TypeError(
        `${cf.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`
      );
    return t;
  }
  _createPopper() {
    if (typeof Lh > "u")
      throw new TypeError(
        "Bootstrap's dropdowns require Popper (https://popper.js.org)"
      );
    let t = this._element;
    this._config.reference === "parent"
      ? (t = this._parent)
      : _t(this._config.reference)
      ? (t = Qt(this._config.reference))
      : typeof this._config.reference == "object" &&
        (t = this._config.reference);
    const n = this._getPopperConfig();
    this._popper = Eu(t, this._menu, n);
  }
  _isShown() {
    return this._menu.classList.contains(Rn);
  }
  _getPlacement() {
    const t = this._parent;
    if (t.classList.contains(E0)) return D0;
    if (t.classList.contains(w0)) return I0;
    if (t.classList.contains(S0)) return R0;
    if (t.classList.contains(C0)) return $0;
    const n =
      getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() ===
      "end";
    return t.classList.contains(_0) ? (n ? O0 : A0) : n ? P0 : L0;
  }
  _detectNavbar() {
    return this._element.closest(N0) !== null;
  }
  _getOffset() {
    const { offset: t } = this._config;
    return typeof t == "string"
      ? t.split(",").map((n) => Number.parseInt(n, 10))
      : typeof t == "function"
      ? (n) => t(n, this._element)
      : t;
  }
  _getPopperConfig() {
    const t = {
      placement: this._getPlacement(),
      modifiers: [
        {
          name: "preventOverflow",
          options: { boundary: this._config.boundary },
        },
        { name: "offset", options: { offset: this._getOffset() } },
      ],
    };
    return (
      (this._inNavbar || this._config.display === "static") &&
        (Et.setDataAttribute(this._menu, "popper", "static"),
        (t.modifiers = [{ name: "applyStyles", enabled: !1 }])),
      { ...t, ...Se(this._config.popperConfig, [t]) }
    );
  }
  _selectMenuItem({ key: t, target: n }) {
    const r = D.find(x0, this._menu).filter((i) => Er(i));
    r.length && wu(r, n, t === df, !r.includes(n)).focus();
  }
  static jQueryInterface(t) {
    return this.each(function () {
      const n = ut.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof n[t] > "u") throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
  static clearMenus(t) {
    if (t.button === p0 || (t.type === "keyup" && t.key !== ff)) return;
    const n = D.find(T0);
    for (const r of n) {
      const i = ut.getInstance(r);
      if (!i || i._config.autoClose === !1) continue;
      const o = t.composedPath(),
        l = o.includes(i._menu);
      if (
        o.includes(i._element) ||
        (i._config.autoClose === "inside" && !l) ||
        (i._config.autoClose === "outside" && l) ||
        (i._menu.contains(t.target) &&
          ((t.type === "keyup" && t.key === ff) ||
            /input|select|option|textarea|form/i.test(t.target.tagName)))
      )
        continue;
      const s = { relatedTarget: i._element };
      t.type === "click" && (s.clickEvent = t), i._completeHide(s);
    }
  }
  static dataApiKeydownHandler(t) {
    const n = /input|textarea/i.test(t.target.tagName),
      r = t.key === f0,
      i = [d0, df].includes(t.key);
    if ((!i && !r) || (n && !r)) return;
    t.preventDefault();
    const o = this.matches(dn)
        ? this
        : D.prev(this, dn)[0] ||
          D.next(this, dn)[0] ||
          D.findOne(dn, t.delegateTarget.parentNode),
      l = ut.getOrCreateInstance(o);
    if (i) {
      t.stopPropagation(), l.show(), l._selectMenuItem(t);
      return;
    }
    l._isShown() && (t.stopPropagation(), l.hide(), o.focus());
  }
}
S.on(document, Qh, dn, ut.dataApiKeydownHandler);
S.on(document, Qh, po, ut.dataApiKeydownHandler);
S.on(document, Yh, ut.clearMenus);
S.on(document, y0, ut.clearMenus);
S.on(document, Yh, dn, function (e) {
  e.preventDefault(), ut.getOrCreateInstance(this).toggle();
});
Ye(ut);
const Gh = "backdrop",
  z0 = "fade",
  pf = "show",
  hf = `mousedown.bs.${Gh}`,
  b0 = {
    className: "modal-backdrop",
    clickCallback: null,
    isAnimated: !1,
    isVisible: !0,
    rootElement: "body",
  },
  F0 = {
    className: "string",
    clickCallback: "(function|null)",
    isAnimated: "boolean",
    isVisible: "boolean",
    rootElement: "(element|string)",
  };
class Xh extends Ci {
  constructor(t) {
    super(),
      (this._config = this._getConfig(t)),
      (this._isAppended = !1),
      (this._element = null);
  }
  static get Default() {
    return b0;
  }
  static get DefaultType() {
    return F0;
  }
  static get NAME() {
    return Gh;
  }
  show(t) {
    if (!this._config.isVisible) {
      Se(t);
      return;
    }
    this._append();
    const n = this._getElement();
    this._config.isAnimated && Si(n),
      n.classList.add(pf),
      this._emulateAnimation(() => {
        Se(t);
      });
  }
  hide(t) {
    if (!this._config.isVisible) {
      Se(t);
      return;
    }
    this._getElement().classList.remove(pf),
      this._emulateAnimation(() => {
        this.dispose(), Se(t);
      });
  }
  dispose() {
    this._isAppended &&
      (S.off(this._element, hf),
      this._element.remove(),
      (this._isAppended = !1));
  }
  _getElement() {
    if (!this._element) {
      const t = document.createElement("div");
      (t.className = this._config.className),
        this._config.isAnimated && t.classList.add(z0),
        (this._element = t);
    }
    return this._element;
  }
  _configAfterMerge(t) {
    return (t.rootElement = Qt(t.rootElement)), t;
  }
  _append() {
    if (this._isAppended) return;
    const t = this._getElement();
    this._config.rootElement.append(t),
      S.on(t, hf, () => {
        Se(this._config.clickCallback);
      }),
      (this._isAppended = !0);
  }
  _emulateAnimation(t) {
    $h(t, this._getElement(), this._config.isAnimated);
  }
}
const V0 = "focustrap",
  U0 = "bs.focustrap",
  Ho = `.${U0}`,
  W0 = `focusin${Ho}`,
  H0 = `keydown.tab${Ho}`,
  B0 = "Tab",
  K0 = "forward",
  mf = "backward",
  Y0 = { autofocus: !0, trapElement: null },
  Q0 = { autofocus: "boolean", trapElement: "element" };
class qh extends Ci {
  constructor(t) {
    super(),
      (this._config = this._getConfig(t)),
      (this._isActive = !1),
      (this._lastTabNavDirection = null);
  }
  static get Default() {
    return Y0;
  }
  static get DefaultType() {
    return Q0;
  }
  static get NAME() {
    return V0;
  }
  activate() {
    this._isActive ||
      (this._config.autofocus && this._config.trapElement.focus(),
      S.off(document, Ho),
      S.on(document, W0, (t) => this._handleFocusin(t)),
      S.on(document, H0, (t) => this._handleKeydown(t)),
      (this._isActive = !0));
  }
  deactivate() {
    this._isActive && ((this._isActive = !1), S.off(document, Ho));
  }
  _handleFocusin(t) {
    const { trapElement: n } = this._config;
    if (t.target === document || t.target === n || n.contains(t.target)) return;
    const r = D.focusableChildren(n);
    r.length === 0
      ? n.focus()
      : this._lastTabNavDirection === mf
      ? r[r.length - 1].focus()
      : r[0].focus();
  }
  _handleKeydown(t) {
    t.key === B0 && (this._lastTabNavDirection = t.shiftKey ? mf : K0);
  }
}
const gf = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
  vf = ".sticky-top",
  Yi = "padding-right",
  yf = "margin-right";
class pa {
  constructor() {
    this._element = document.body;
  }
  getWidth() {
    const t = document.documentElement.clientWidth;
    return Math.abs(window.innerWidth - t);
  }
  hide() {
    const t = this.getWidth();
    this._disableOverFlow(),
      this._setElementAttributes(this._element, Yi, (n) => n + t),
      this._setElementAttributes(gf, Yi, (n) => n + t),
      this._setElementAttributes(vf, yf, (n) => n - t);
  }
  reset() {
    this._resetElementAttributes(this._element, "overflow"),
      this._resetElementAttributes(this._element, Yi),
      this._resetElementAttributes(gf, Yi),
      this._resetElementAttributes(vf, yf);
  }
  isOverflowing() {
    return this.getWidth() > 0;
  }
  _disableOverFlow() {
    this._saveInitialAttribute(this._element, "overflow"),
      (this._element.style.overflow = "hidden");
  }
  _setElementAttributes(t, n, r) {
    const i = this.getWidth(),
      o = (l) => {
        if (l !== this._element && window.innerWidth > l.clientWidth + i)
          return;
        this._saveInitialAttribute(l, n);
        const s = window.getComputedStyle(l).getPropertyValue(n);
        l.style.setProperty(n, `${r(Number.parseFloat(s))}px`);
      };
    this._applyManipulationCallback(t, o);
  }
  _saveInitialAttribute(t, n) {
    const r = t.style.getPropertyValue(n);
    r && Et.setDataAttribute(t, n, r);
  }
  _resetElementAttributes(t, n) {
    const r = (i) => {
      const o = Et.getDataAttribute(i, n);
      if (o === null) {
        i.style.removeProperty(n);
        return;
      }
      Et.removeDataAttribute(i, n), i.style.setProperty(n, o);
    };
    this._applyManipulationCallback(t, r);
  }
  _applyManipulationCallback(t, n) {
    if (_t(t)) {
      n(t);
      return;
    }
    for (const r of D.find(t, this._element)) n(r);
  }
}
const G0 = "modal",
  X0 = "bs.modal",
  Ke = `.${X0}`,
  q0 = ".data-api",
  Z0 = "Escape",
  J0 = `hide${Ke}`,
  e1 = `hidePrevented${Ke}`,
  Zh = `hidden${Ke}`,
  Jh = `show${Ke}`,
  t1 = `shown${Ke}`,
  n1 = `resize${Ke}`,
  r1 = `click.dismiss${Ke}`,
  i1 = `mousedown.dismiss${Ke}`,
  o1 = `keydown.dismiss${Ke}`,
  l1 = `click${Ke}${q0}`,
  _f = "modal-open",
  s1 = "fade",
  Ef = "show",
  ns = "modal-static",
  a1 = ".modal.show",
  u1 = ".modal-dialog",
  c1 = ".modal-body",
  f1 = '[data-bs-toggle="modal"]',
  d1 = { backdrop: !0, focus: !0, keyboard: !0 },
  p1 = { backdrop: "(boolean|string)", focus: "boolean", keyboard: "boolean" };
class pr extends tt {
  constructor(t, n) {
    super(t, n),
      (this._dialog = D.findOne(u1, this._element)),
      (this._backdrop = this._initializeBackDrop()),
      (this._focustrap = this._initializeFocusTrap()),
      (this._isShown = !1),
      (this._isTransitioning = !1),
      (this._scrollBar = new pa()),
      this._addEventListeners();
  }
  static get Default() {
    return d1;
  }
  static get DefaultType() {
    return p1;
  }
  static get NAME() {
    return G0;
  }
  toggle(t) {
    return this._isShown ? this.hide() : this.show(t);
  }
  show(t) {
    this._isShown ||
      this._isTransitioning ||
      S.trigger(this._element, Jh, { relatedTarget: t }).defaultPrevented ||
      ((this._isShown = !0),
      (this._isTransitioning = !0),
      this._scrollBar.hide(),
      document.body.classList.add(_f),
      this._adjustDialog(),
      this._backdrop.show(() => this._showElement(t)));
  }
  hide() {
    !this._isShown ||
      this._isTransitioning ||
      S.trigger(this._element, J0).defaultPrevented ||
      ((this._isShown = !1),
      (this._isTransitioning = !0),
      this._focustrap.deactivate(),
      this._element.classList.remove(Ef),
      this._queueCallback(
        () => this._hideModal(),
        this._element,
        this._isAnimated()
      ));
  }
  dispose() {
    S.off(window, Ke),
      S.off(this._dialog, Ke),
      this._backdrop.dispose(),
      this._focustrap.deactivate(),
      super.dispose();
  }
  handleUpdate() {
    this._adjustDialog();
  }
  _initializeBackDrop() {
    return new Xh({
      isVisible: !!this._config.backdrop,
      isAnimated: this._isAnimated(),
    });
  }
  _initializeFocusTrap() {
    return new qh({ trapElement: this._element });
  }
  _showElement(t) {
    document.body.contains(this._element) ||
      document.body.append(this._element),
      (this._element.style.display = "block"),
      this._element.removeAttribute("aria-hidden"),
      this._element.setAttribute("aria-modal", !0),
      this._element.setAttribute("role", "dialog"),
      (this._element.scrollTop = 0);
    const n = D.findOne(c1, this._dialog);
    n && (n.scrollTop = 0), Si(this._element), this._element.classList.add(Ef);
    const r = () => {
      this._config.focus && this._focustrap.activate(),
        (this._isTransitioning = !1),
        S.trigger(this._element, t1, { relatedTarget: t });
    };
    this._queueCallback(r, this._dialog, this._isAnimated());
  }
  _addEventListeners() {
    S.on(this._element, o1, (t) => {
      if (t.key === Z0) {
        if (this._config.keyboard) {
          this.hide();
          return;
        }
        this._triggerBackdropTransition();
      }
    }),
      S.on(window, n1, () => {
        this._isShown && !this._isTransitioning && this._adjustDialog();
      }),
      S.on(this._element, i1, (t) => {
        S.one(this._element, r1, (n) => {
          if (!(this._element !== t.target || this._element !== n.target)) {
            if (this._config.backdrop === "static") {
              this._triggerBackdropTransition();
              return;
            }
            this._config.backdrop && this.hide();
          }
        });
      });
  }
  _hideModal() {
    (this._element.style.display = "none"),
      this._element.setAttribute("aria-hidden", !0),
      this._element.removeAttribute("aria-modal"),
      this._element.removeAttribute("role"),
      (this._isTransitioning = !1),
      this._backdrop.hide(() => {
        document.body.classList.remove(_f),
          this._resetAdjustments(),
          this._scrollBar.reset(),
          S.trigger(this._element, Zh);
      });
  }
  _isAnimated() {
    return this._element.classList.contains(s1);
  }
  _triggerBackdropTransition() {
    if (S.trigger(this._element, e1).defaultPrevented) return;
    const n =
        this._element.scrollHeight > document.documentElement.clientHeight,
      r = this._element.style.overflowY;
    r === "hidden" ||
      this._element.classList.contains(ns) ||
      (n || (this._element.style.overflowY = "hidden"),
      this._element.classList.add(ns),
      this._queueCallback(() => {
        this._element.classList.remove(ns),
          this._queueCallback(() => {
            this._element.style.overflowY = r;
          }, this._dialog);
      }, this._dialog),
      this._element.focus());
  }
  _adjustDialog() {
    const t =
        this._element.scrollHeight > document.documentElement.clientHeight,
      n = this._scrollBar.getWidth(),
      r = n > 0;
    if (r && !t) {
      const i = Be() ? "paddingLeft" : "paddingRight";
      this._element.style[i] = `${n}px`;
    }
    if (!r && t) {
      const i = Be() ? "paddingRight" : "paddingLeft";
      this._element.style[i] = `${n}px`;
    }
  }
  _resetAdjustments() {
    (this._element.style.paddingLeft = ""),
      (this._element.style.paddingRight = "");
  }
  static jQueryInterface(t, n) {
    return this.each(function () {
      const r = pr.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof r[t] > "u") throw new TypeError(`No method named "${t}"`);
        r[t](n);
      }
    });
  }
}
S.on(document, l1, f1, function (e) {
  const t = D.getElementFromSelector(this);
  ["A", "AREA"].includes(this.tagName) && e.preventDefault(),
    S.one(t, Jh, (i) => {
      i.defaultPrevented ||
        S.one(t, Zh, () => {
          Er(this) && this.focus();
        });
    });
  const n = D.findOne(a1);
  n && pr.getInstance(n).hide(), pr.getOrCreateInstance(t).toggle(this);
});
pl(pr);
Ye(pr);
const h1 = "offcanvas",
  m1 = "bs.offcanvas",
  xt = `.${m1}`,
  em = ".data-api",
  g1 = `load${xt}${em}`,
  v1 = "Escape",
  wf = "show",
  Sf = "showing",
  Cf = "hiding",
  y1 = "offcanvas-backdrop",
  tm = ".offcanvas.show",
  _1 = `show${xt}`,
  E1 = `shown${xt}`,
  w1 = `hide${xt}`,
  Tf = `hidePrevented${xt}`,
  nm = `hidden${xt}`,
  S1 = `resize${xt}`,
  C1 = `click${xt}${em}`,
  T1 = `keydown.dismiss${xt}`,
  N1 = '[data-bs-toggle="offcanvas"]',
  k1 = { backdrop: !0, keyboard: !0, scroll: !1 },
  x1 = { backdrop: "(boolean|string)", keyboard: "boolean", scroll: "boolean" };
class Xt extends tt {
  constructor(t, n) {
    super(t, n),
      (this._isShown = !1),
      (this._backdrop = this._initializeBackDrop()),
      (this._focustrap = this._initializeFocusTrap()),
      this._addEventListeners();
  }
  static get Default() {
    return k1;
  }
  static get DefaultType() {
    return x1;
  }
  static get NAME() {
    return h1;
  }
  toggle(t) {
    return this._isShown ? this.hide() : this.show(t);
  }
  show(t) {
    if (
      this._isShown ||
      S.trigger(this._element, _1, { relatedTarget: t }).defaultPrevented
    )
      return;
    (this._isShown = !0),
      this._backdrop.show(),
      this._config.scroll || new pa().hide(),
      this._element.setAttribute("aria-modal", !0),
      this._element.setAttribute("role", "dialog"),
      this._element.classList.add(Sf);
    const r = () => {
      (!this._config.scroll || this._config.backdrop) &&
        this._focustrap.activate(),
        this._element.classList.add(wf),
        this._element.classList.remove(Sf),
        S.trigger(this._element, E1, { relatedTarget: t });
    };
    this._queueCallback(r, this._element, !0);
  }
  hide() {
    if (!this._isShown || S.trigger(this._element, w1).defaultPrevented) return;
    this._focustrap.deactivate(),
      this._element.blur(),
      (this._isShown = !1),
      this._element.classList.add(Cf),
      this._backdrop.hide();
    const n = () => {
      this._element.classList.remove(wf, Cf),
        this._element.removeAttribute("aria-modal"),
        this._element.removeAttribute("role"),
        this._config.scroll || new pa().reset(),
        S.trigger(this._element, nm);
    };
    this._queueCallback(n, this._element, !0);
  }
  dispose() {
    this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
  }
  _initializeBackDrop() {
    const t = () => {
        if (this._config.backdrop === "static") {
          S.trigger(this._element, Tf);
          return;
        }
        this.hide();
      },
      n = !!this._config.backdrop;
    return new Xh({
      className: y1,
      isVisible: n,
      isAnimated: !0,
      rootElement: this._element.parentNode,
      clickCallback: n ? t : null,
    });
  }
  _initializeFocusTrap() {
    return new qh({ trapElement: this._element });
  }
  _addEventListeners() {
    S.on(this._element, T1, (t) => {
      if (t.key === v1) {
        if (this._config.keyboard) {
          this.hide();
          return;
        }
        S.trigger(this._element, Tf);
      }
    });
  }
  static jQueryInterface(t) {
    return this.each(function () {
      const n = Xt.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (n[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        n[t](this);
      }
    });
  }
}
S.on(document, C1, N1, function (e) {
  const t = D.getElementFromSelector(this);
  if ((["A", "AREA"].includes(this.tagName) && e.preventDefault(), Gt(this)))
    return;
  S.one(t, nm, () => {
    Er(this) && this.focus();
  });
  const n = D.findOne(tm);
  n && n !== t && Xt.getInstance(n).hide(),
    Xt.getOrCreateInstance(t).toggle(this);
});
S.on(window, g1, () => {
  for (const e of D.find(tm)) Xt.getOrCreateInstance(e).show();
});
S.on(window, S1, () => {
  for (const e of D.find("[aria-modal][class*=show][class*=offcanvas-]"))
    getComputedStyle(e).position !== "fixed" &&
      Xt.getOrCreateInstance(e).hide();
});
pl(Xt);
Ye(Xt);
const A1 = /^aria-[\w-]*$/i,
  rm = {
    "*": ["class", "dir", "id", "lang", "role", A1],
    a: ["target", "href", "title", "rel"],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    dd: [],
    div: [],
    dl: [],
    dt: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ["src", "srcset", "alt", "title", "width", "height"],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: [],
  },
  O1 = new Set([
    "background",
    "cite",
    "href",
    "itemtype",
    "longdesc",
    "poster",
    "src",
    "xlink:href",
  ]),
  L1 = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,
  P1 = (e, t) => {
    const n = e.nodeName.toLowerCase();
    return t.includes(n)
      ? O1.has(n)
        ? !!L1.test(e.nodeValue)
        : !0
      : t.filter((r) => r instanceof RegExp).some((r) => r.test(n));
  };
function D1(e, t, n) {
  if (!e.length) return e;
  if (n && typeof n == "function") return n(e);
  const i = new window.DOMParser().parseFromString(e, "text/html"),
    o = [].concat(...i.body.querySelectorAll("*"));
  for (const l of o) {
    const s = l.nodeName.toLowerCase();
    if (!Object.keys(t).includes(s)) {
      l.remove();
      continue;
    }
    const a = [].concat(...l.attributes),
      u = [].concat(t["*"] || [], t[s] || []);
    for (const c of a) P1(c, u) || l.removeAttribute(c.nodeName);
  }
  return i.body.innerHTML;
}
const I1 = "TemplateFactory",
  R1 = {
    allowList: rm,
    content: {},
    extraClass: "",
    html: !1,
    sanitize: !0,
    sanitizeFn: null,
    template: "<div></div>",
  },
  $1 = {
    allowList: "object",
    content: "object",
    extraClass: "(string|function)",
    html: "boolean",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    template: "string",
  },
  M1 = {
    entry: "(string|element|function|null)",
    selector: "(string|element)",
  };
class j1 extends Ci {
  constructor(t) {
    super(), (this._config = this._getConfig(t));
  }
  static get Default() {
    return R1;
  }
  static get DefaultType() {
    return $1;
  }
  static get NAME() {
    return I1;
  }
  getContent() {
    return Object.values(this._config.content)
      .map((t) => this._resolvePossibleFunction(t))
      .filter(Boolean);
  }
  hasContent() {
    return this.getContent().length > 0;
  }
  changeContent(t) {
    return (
      this._checkContent(t),
      (this._config.content = { ...this._config.content, ...t }),
      this
    );
  }
  toHtml() {
    const t = document.createElement("div");
    t.innerHTML = this._maybeSanitize(this._config.template);
    for (const [i, o] of Object.entries(this._config.content))
      this._setContent(t, o, i);
    const n = t.children[0],
      r = this._resolvePossibleFunction(this._config.extraClass);
    return r && n.classList.add(...r.split(" ")), n;
  }
  _typeCheckConfig(t) {
    super._typeCheckConfig(t), this._checkContent(t.content);
  }
  _checkContent(t) {
    for (const [n, r] of Object.entries(t))
      super._typeCheckConfig({ selector: n, entry: r }, M1);
  }
  _setContent(t, n, r) {
    const i = D.findOne(r, t);
    if (i) {
      if (((n = this._resolvePossibleFunction(n)), !n)) {
        i.remove();
        return;
      }
      if (_t(n)) {
        this._putElementInTemplate(Qt(n), i);
        return;
      }
      if (this._config.html) {
        i.innerHTML = this._maybeSanitize(n);
        return;
      }
      i.textContent = n;
    }
  }
  _maybeSanitize(t) {
    return this._config.sanitize
      ? D1(t, this._config.allowList, this._config.sanitizeFn)
      : t;
  }
  _resolvePossibleFunction(t) {
    return Se(t, [this]);
  }
  _putElementInTemplate(t, n) {
    if (this._config.html) {
      (n.innerHTML = ""), n.append(t);
      return;
    }
    n.textContent = t.textContent;
  }
}
const z1 = "tooltip",
  b1 = new Set(["sanitize", "allowList", "sanitizeFn"]),
  rs = "fade",
  F1 = "modal",
  Qi = "show",
  V1 = ".tooltip-inner",
  Nf = `.${F1}`,
  kf = "hide.bs.modal",
  Dr = "hover",
  is = "focus",
  U1 = "click",
  W1 = "manual",
  H1 = "hide",
  B1 = "hidden",
  K1 = "show",
  Y1 = "shown",
  Q1 = "inserted",
  G1 = "click",
  X1 = "focusin",
  q1 = "focusout",
  Z1 = "mouseenter",
  J1 = "mouseleave",
  ew = {
    AUTO: "auto",
    TOP: "top",
    RIGHT: Be() ? "left" : "right",
    BOTTOM: "bottom",
    LEFT: Be() ? "right" : "left",
  },
  tw = {
    allowList: rm,
    animation: !0,
    boundary: "clippingParents",
    container: !1,
    customClass: "",
    delay: 0,
    fallbackPlacements: ["top", "right", "bottom", "left"],
    html: !1,
    offset: [0, 6],
    placement: "top",
    popperConfig: null,
    sanitize: !0,
    sanitizeFn: null,
    selector: !1,
    template:
      '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    title: "",
    trigger: "hover focus",
  },
  nw = {
    allowList: "object",
    animation: "boolean",
    boundary: "(string|element)",
    container: "(string|element|boolean)",
    customClass: "(string|function)",
    delay: "(number|object)",
    fallbackPlacements: "array",
    html: "boolean",
    offset: "(array|string|function)",
    placement: "(string|function)",
    popperConfig: "(null|object|function)",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    selector: "(string|boolean)",
    template: "string",
    title: "(string|element|function)",
    trigger: "string",
  };
class Sr extends tt {
  constructor(t, n) {
    if (typeof Lh > "u")
      throw new TypeError(
        "Bootstrap's tooltips require Popper (https://popper.js.org)"
      );
    super(t, n),
      (this._isEnabled = !0),
      (this._timeout = 0),
      (this._isHovered = null),
      (this._activeTrigger = {}),
      (this._popper = null),
      (this._templateFactory = null),
      (this._newContent = null),
      (this.tip = null),
      this._setListeners(),
      this._config.selector || this._fixTitle();
  }
  static get Default() {
    return tw;
  }
  static get DefaultType() {
    return nw;
  }
  static get NAME() {
    return z1;
  }
  enable() {
    this._isEnabled = !0;
  }
  disable() {
    this._isEnabled = !1;
  }
  toggleEnabled() {
    this._isEnabled = !this._isEnabled;
  }
  toggle() {
    if (this._isEnabled) {
      if (
        ((this._activeTrigger.click = !this._activeTrigger.click),
        this._isShown())
      ) {
        this._leave();
        return;
      }
      this._enter();
    }
  }
  dispose() {
    clearTimeout(this._timeout),
      S.off(this._element.closest(Nf), kf, this._hideModalHandler),
      this._element.getAttribute("data-bs-original-title") &&
        this._element.setAttribute(
          "title",
          this._element.getAttribute("data-bs-original-title")
        ),
      this._disposePopper(),
      super.dispose();
  }
  show() {
    if (this._element.style.display === "none")
      throw new Error("Please use show on visible elements");
    if (!(this._isWithContent() && this._isEnabled)) return;
    const t = S.trigger(this._element, this.constructor.eventName(K1)),
      r = (
        Ih(this._element) || this._element.ownerDocument.documentElement
      ).contains(this._element);
    if (t.defaultPrevented || !r) return;
    this._disposePopper();
    const i = this._getTipElement();
    this._element.setAttribute("aria-describedby", i.getAttribute("id"));
    const { container: o } = this._config;
    if (
      (this._element.ownerDocument.documentElement.contains(this.tip) ||
        (o.append(i), S.trigger(this._element, this.constructor.eventName(Q1))),
      (this._popper = this._createPopper(i)),
      i.classList.add(Qi),
      "ontouchstart" in document.documentElement)
    )
      for (const s of [].concat(...document.body.children))
        S.on(s, "mouseover", Uo);
    const l = () => {
      S.trigger(this._element, this.constructor.eventName(Y1)),
        this._isHovered === !1 && this._leave(),
        (this._isHovered = !1);
    };
    this._queueCallback(l, this.tip, this._isAnimated());
  }
  hide() {
    if (
      !this._isShown() ||
      S.trigger(this._element, this.constructor.eventName(H1)).defaultPrevented
    )
      return;
    if (
      (this._getTipElement().classList.remove(Qi),
      "ontouchstart" in document.documentElement)
    )
      for (const i of [].concat(...document.body.children))
        S.off(i, "mouseover", Uo);
    (this._activeTrigger[U1] = !1),
      (this._activeTrigger[is] = !1),
      (this._activeTrigger[Dr] = !1),
      (this._isHovered = null);
    const r = () => {
      this._isWithActiveTrigger() ||
        (this._isHovered || this._disposePopper(),
        this._element.removeAttribute("aria-describedby"),
        S.trigger(this._element, this.constructor.eventName(B1)));
    };
    this._queueCallback(r, this.tip, this._isAnimated());
  }
  update() {
    this._popper && this._popper.update();
  }
  _isWithContent() {
    return !!this._getTitle();
  }
  _getTipElement() {
    return (
      this.tip ||
        (this.tip = this._createTipElement(
          this._newContent || this._getContentForTemplate()
        )),
      this.tip
    );
  }
  _createTipElement(t) {
    const n = this._getTemplateFactory(t).toHtml();
    if (!n) return null;
    n.classList.remove(rs, Qi),
      n.classList.add(`bs-${this.constructor.NAME}-auto`);
    const r = U_(this.constructor.NAME).toString();
    return (
      n.setAttribute("id", r), this._isAnimated() && n.classList.add(rs), n
    );
  }
  setContent(t) {
    (this._newContent = t),
      this._isShown() && (this._disposePopper(), this.show());
  }
  _getTemplateFactory(t) {
    return (
      this._templateFactory
        ? this._templateFactory.changeContent(t)
        : (this._templateFactory = new j1({
            ...this._config,
            content: t,
            extraClass: this._resolvePossibleFunction(this._config.customClass),
          })),
      this._templateFactory
    );
  }
  _getContentForTemplate() {
    return { [V1]: this._getTitle() };
  }
  _getTitle() {
    return (
      this._resolvePossibleFunction(this._config.title) ||
      this._element.getAttribute("data-bs-original-title")
    );
  }
  _initializeOnDelegatedTarget(t) {
    return this.constructor.getOrCreateInstance(
      t.delegateTarget,
      this._getDelegateConfig()
    );
  }
  _isAnimated() {
    return (
      this._config.animation || (this.tip && this.tip.classList.contains(rs))
    );
  }
  _isShown() {
    return this.tip && this.tip.classList.contains(Qi);
  }
  _createPopper(t) {
    const n = Se(this._config.placement, [this, t, this._element]),
      r = ew[n.toUpperCase()];
    return Eu(this._element, t, this._getPopperConfig(r));
  }
  _getOffset() {
    const { offset: t } = this._config;
    return typeof t == "string"
      ? t.split(",").map((n) => Number.parseInt(n, 10))
      : typeof t == "function"
      ? (n) => t(n, this._element)
      : t;
  }
  _resolvePossibleFunction(t) {
    return Se(t, [this._element]);
  }
  _getPopperConfig(t) {
    const n = {
      placement: t,
      modifiers: [
        {
          name: "flip",
          options: { fallbackPlacements: this._config.fallbackPlacements },
        },
        { name: "offset", options: { offset: this._getOffset() } },
        {
          name: "preventOverflow",
          options: { boundary: this._config.boundary },
        },
        {
          name: "arrow",
          options: { element: `.${this.constructor.NAME}-arrow` },
        },
        {
          name: "preSetPlacement",
          enabled: !0,
          phase: "beforeMain",
          fn: (r) => {
            this._getTipElement().setAttribute(
              "data-popper-placement",
              r.state.placement
            );
          },
        },
      ],
    };
    return { ...n, ...Se(this._config.popperConfig, [n]) };
  }
  _setListeners() {
    const t = this._config.trigger.split(" ");
    for (const n of t)
      if (n === "click")
        S.on(
          this._element,
          this.constructor.eventName(G1),
          this._config.selector,
          (r) => {
            this._initializeOnDelegatedTarget(r).toggle();
          }
        );
      else if (n !== W1) {
        const r =
            n === Dr
              ? this.constructor.eventName(Z1)
              : this.constructor.eventName(X1),
          i =
            n === Dr
              ? this.constructor.eventName(J1)
              : this.constructor.eventName(q1);
        S.on(this._element, r, this._config.selector, (o) => {
          const l = this._initializeOnDelegatedTarget(o);
          (l._activeTrigger[o.type === "focusin" ? is : Dr] = !0), l._enter();
        }),
          S.on(this._element, i, this._config.selector, (o) => {
            const l = this._initializeOnDelegatedTarget(o);
            (l._activeTrigger[o.type === "focusout" ? is : Dr] =
              l._element.contains(o.relatedTarget)),
              l._leave();
          });
      }
    (this._hideModalHandler = () => {
      this._element && this.hide();
    }),
      S.on(this._element.closest(Nf), kf, this._hideModalHandler);
  }
  _fixTitle() {
    const t = this._element.getAttribute("title");
    t &&
      (!this._element.getAttribute("aria-label") &&
        !this._element.textContent.trim() &&
        this._element.setAttribute("aria-label", t),
      this._element.setAttribute("data-bs-original-title", t),
      this._element.removeAttribute("title"));
  }
  _enter() {
    if (this._isShown() || this._isHovered) {
      this._isHovered = !0;
      return;
    }
    (this._isHovered = !0),
      this._setTimeout(() => {
        this._isHovered && this.show();
      }, this._config.delay.show);
  }
  _leave() {
    this._isWithActiveTrigger() ||
      ((this._isHovered = !1),
      this._setTimeout(() => {
        this._isHovered || this.hide();
      }, this._config.delay.hide));
  }
  _setTimeout(t, n) {
    clearTimeout(this._timeout), (this._timeout = setTimeout(t, n));
  }
  _isWithActiveTrigger() {
    return Object.values(this._activeTrigger).includes(!0);
  }
  _getConfig(t) {
    const n = Et.getDataAttributes(this._element);
    for (const r of Object.keys(n)) b1.has(r) && delete n[r];
    return (
      (t = { ...n, ...(typeof t == "object" && t ? t : {}) }),
      (t = this._mergeConfigObj(t)),
      (t = this._configAfterMerge(t)),
      this._typeCheckConfig(t),
      t
    );
  }
  _configAfterMerge(t) {
    return (
      (t.container = t.container === !1 ? document.body : Qt(t.container)),
      typeof t.delay == "number" &&
        (t.delay = { show: t.delay, hide: t.delay }),
      typeof t.title == "number" && (t.title = t.title.toString()),
      typeof t.content == "number" && (t.content = t.content.toString()),
      t
    );
  }
  _getDelegateConfig() {
    const t = {};
    for (const [n, r] of Object.entries(this._config))
      this.constructor.Default[n] !== r && (t[n] = r);
    return (t.selector = !1), (t.trigger = "manual"), t;
  }
  _disposePopper() {
    this._popper && (this._popper.destroy(), (this._popper = null)),
      this.tip && (this.tip.remove(), (this.tip = null));
  }
  static jQueryInterface(t) {
    return this.each(function () {
      const n = Sr.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof n[t] > "u") throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
}
Ye(Sr);
const rw = "popover",
  iw = ".popover-header",
  ow = ".popover-body",
  lw = {
    ...Sr.Default,
    content: "",
    offset: [0, 8],
    placement: "right",
    template:
      '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    trigger: "click",
  },
  sw = { ...Sr.DefaultType, content: "(null|string|element|function)" };
class Tu extends Sr {
  static get Default() {
    return lw;
  }
  static get DefaultType() {
    return sw;
  }
  static get NAME() {
    return rw;
  }
  _isWithContent() {
    return this._getTitle() || this._getContent();
  }
  _getContentForTemplate() {
    return { [iw]: this._getTitle(), [ow]: this._getContent() };
  }
  _getContent() {
    return this._resolvePossibleFunction(this._config.content);
  }
  static jQueryInterface(t) {
    return this.each(function () {
      const n = Tu.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof n[t] > "u") throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
}
Ye(Tu);
const aw = "scrollspy",
  uw = "bs.scrollspy",
  Nu = `.${uw}`,
  cw = ".data-api",
  fw = `activate${Nu}`,
  xf = `click${Nu}`,
  dw = `load${Nu}${cw}`,
  pw = "dropdown-item",
  Pn = "active",
  hw = '[data-bs-spy="scroll"]',
  os = "[href]",
  mw = ".nav, .list-group",
  Af = ".nav-link",
  gw = ".nav-item",
  vw = ".list-group-item",
  yw = `${Af}, ${gw} > ${Af}, ${vw}`,
  _w = ".dropdown",
  Ew = ".dropdown-toggle",
  ww = {
    offset: null,
    rootMargin: "0px 0px -25%",
    smoothScroll: !1,
    target: null,
    threshold: [0.1, 0.5, 1],
  },
  Sw = {
    offset: "(number|null)",
    rootMargin: "string",
    smoothScroll: "boolean",
    target: "element",
    threshold: "array",
  };
class gl extends tt {
  constructor(t, n) {
    super(t, n),
      (this._targetLinks = new Map()),
      (this._observableSections = new Map()),
      (this._rootElement =
        getComputedStyle(this._element).overflowY === "visible"
          ? null
          : this._element),
      (this._activeTarget = null),
      (this._observer = null),
      (this._previousScrollData = { visibleEntryTop: 0, parentScrollTop: 0 }),
      this.refresh();
  }
  static get Default() {
    return ww;
  }
  static get DefaultType() {
    return Sw;
  }
  static get NAME() {
    return aw;
  }
  refresh() {
    this._initializeTargetsAndObservables(),
      this._maybeEnableSmoothScroll(),
      this._observer
        ? this._observer.disconnect()
        : (this._observer = this._getNewObserver());
    for (const t of this._observableSections.values())
      this._observer.observe(t);
  }
  dispose() {
    this._observer.disconnect(), super.dispose();
  }
  _configAfterMerge(t) {
    return (
      (t.target = Qt(t.target) || document.body),
      (t.rootMargin = t.offset ? `${t.offset}px 0px -30%` : t.rootMargin),
      typeof t.threshold == "string" &&
        (t.threshold = t.threshold.split(",").map((n) => Number.parseFloat(n))),
      t
    );
  }
  _maybeEnableSmoothScroll() {
    this._config.smoothScroll &&
      (S.off(this._config.target, xf),
      S.on(this._config.target, xf, os, (t) => {
        const n = this._observableSections.get(t.target.hash);
        if (n) {
          t.preventDefault();
          const r = this._rootElement || window,
            i = n.offsetTop - this._element.offsetTop;
          if (r.scrollTo) {
            r.scrollTo({ top: i, behavior: "smooth" });
            return;
          }
          r.scrollTop = i;
        }
      }));
  }
  _getNewObserver() {
    const t = {
      root: this._rootElement,
      threshold: this._config.threshold,
      rootMargin: this._config.rootMargin,
    };
    return new IntersectionObserver((n) => this._observerCallback(n), t);
  }
  _observerCallback(t) {
    const n = (l) => this._targetLinks.get(`#${l.target.id}`),
      r = (l) => {
        (this._previousScrollData.visibleEntryTop = l.target.offsetTop),
          this._process(n(l));
      },
      i = (this._rootElement || document.documentElement).scrollTop,
      o = i >= this._previousScrollData.parentScrollTop;
    this._previousScrollData.parentScrollTop = i;
    for (const l of t) {
      if (!l.isIntersecting) {
        (this._activeTarget = null), this._clearActiveClass(n(l));
        continue;
      }
      const s = l.target.offsetTop >= this._previousScrollData.visibleEntryTop;
      if (o && s) {
        if ((r(l), !i)) return;
        continue;
      }
      !o && !s && r(l);
    }
  }
  _initializeTargetsAndObservables() {
    (this._targetLinks = new Map()), (this._observableSections = new Map());
    const t = D.find(os, this._config.target);
    for (const n of t) {
      if (!n.hash || Gt(n)) continue;
      const r = D.findOne(decodeURI(n.hash), this._element);
      Er(r) &&
        (this._targetLinks.set(decodeURI(n.hash), n),
        this._observableSections.set(n.hash, r));
    }
  }
  _process(t) {
    this._activeTarget !== t &&
      (this._clearActiveClass(this._config.target),
      (this._activeTarget = t),
      t.classList.add(Pn),
      this._activateParents(t),
      S.trigger(this._element, fw, { relatedTarget: t }));
  }
  _activateParents(t) {
    if (t.classList.contains(pw)) {
      D.findOne(Ew, t.closest(_w)).classList.add(Pn);
      return;
    }
    for (const n of D.parents(t, mw))
      for (const r of D.prev(n, yw)) r.classList.add(Pn);
  }
  _clearActiveClass(t) {
    t.classList.remove(Pn);
    const n = D.find(`${os}.${Pn}`, t);
    for (const r of n) r.classList.remove(Pn);
  }
  static jQueryInterface(t) {
    return this.each(function () {
      const n = gl.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (n[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
}
S.on(window, dw, () => {
  for (const e of D.find(hw)) gl.getOrCreateInstance(e);
});
Ye(gl);
const Cw = "tab",
  Tw = "bs.tab",
  An = `.${Tw}`,
  Nw = `hide${An}`,
  kw = `hidden${An}`,
  xw = `show${An}`,
  Aw = `shown${An}`,
  Ow = `click${An}`,
  Lw = `keydown${An}`,
  Pw = `load${An}`,
  Dw = "ArrowLeft",
  Of = "ArrowRight",
  Iw = "ArrowUp",
  Lf = "ArrowDown",
  ls = "Home",
  Pf = "End",
  pn = "active",
  Df = "fade",
  ss = "show",
  Rw = "dropdown",
  im = ".dropdown-toggle",
  $w = ".dropdown-menu",
  as = `:not(${im})`,
  Mw = '.list-group, .nav, [role="tablist"]',
  jw = ".nav-item, .list-group-item",
  zw = `.nav-link${as}, .list-group-item${as}, [role="tab"]${as}`,
  om =
    '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
  us = `${zw}, ${om}`,
  bw = `.${pn}[data-bs-toggle="tab"], .${pn}[data-bs-toggle="pill"], .${pn}[data-bs-toggle="list"]`;
class hr extends tt {
  constructor(t) {
    super(t),
      (this._parent = this._element.closest(Mw)),
      this._parent &&
        (this._setInitialAttributes(this._parent, this._getChildren()),
        S.on(this._element, Lw, (n) => this._keydown(n)));
  }
  static get NAME() {
    return Cw;
  }
  show() {
    const t = this._element;
    if (this._elemIsActive(t)) return;
    const n = this._getActiveElem(),
      r = n ? S.trigger(n, Nw, { relatedTarget: t }) : null;
    S.trigger(t, xw, { relatedTarget: n }).defaultPrevented ||
      (r && r.defaultPrevented) ||
      (this._deactivate(n, t), this._activate(t, n));
  }
  _activate(t, n) {
    if (!t) return;
    t.classList.add(pn), this._activate(D.getElementFromSelector(t));
    const r = () => {
      if (t.getAttribute("role") !== "tab") {
        t.classList.add(ss);
        return;
      }
      t.removeAttribute("tabindex"),
        t.setAttribute("aria-selected", !0),
        this._toggleDropDown(t, !0),
        S.trigger(t, Aw, { relatedTarget: n });
    };
    this._queueCallback(r, t, t.classList.contains(Df));
  }
  _deactivate(t, n) {
    if (!t) return;
    t.classList.remove(pn),
      t.blur(),
      this._deactivate(D.getElementFromSelector(t));
    const r = () => {
      if (t.getAttribute("role") !== "tab") {
        t.classList.remove(ss);
        return;
      }
      t.setAttribute("aria-selected", !1),
        t.setAttribute("tabindex", "-1"),
        this._toggleDropDown(t, !1),
        S.trigger(t, kw, { relatedTarget: n });
    };
    this._queueCallback(r, t, t.classList.contains(Df));
  }
  _keydown(t) {
    if (![Dw, Of, Iw, Lf, ls, Pf].includes(t.key)) return;
    t.stopPropagation(), t.preventDefault();
    const n = this._getChildren().filter((i) => !Gt(i));
    let r;
    if ([ls, Pf].includes(t.key)) r = n[t.key === ls ? 0 : n.length - 1];
    else {
      const i = [Of, Lf].includes(t.key);
      r = wu(n, t.target, i, !0);
    }
    r && (r.focus({ preventScroll: !0 }), hr.getOrCreateInstance(r).show());
  }
  _getChildren() {
    return D.find(us, this._parent);
  }
  _getActiveElem() {
    return this._getChildren().find((t) => this._elemIsActive(t)) || null;
  }
  _setInitialAttributes(t, n) {
    this._setAttributeIfNotExists(t, "role", "tablist");
    for (const r of n) this._setInitialAttributesOnChild(r);
  }
  _setInitialAttributesOnChild(t) {
    t = this._getInnerElement(t);
    const n = this._elemIsActive(t),
      r = this._getOuterElement(t);
    t.setAttribute("aria-selected", n),
      r !== t && this._setAttributeIfNotExists(r, "role", "presentation"),
      n || t.setAttribute("tabindex", "-1"),
      this._setAttributeIfNotExists(t, "role", "tab"),
      this._setInitialAttributesOnTargetPanel(t);
  }
  _setInitialAttributesOnTargetPanel(t) {
    const n = D.getElementFromSelector(t);
    n &&
      (this._setAttributeIfNotExists(n, "role", "tabpanel"),
      t.id && this._setAttributeIfNotExists(n, "aria-labelledby", `${t.id}`));
  }
  _toggleDropDown(t, n) {
    const r = this._getOuterElement(t);
    if (!r.classList.contains(Rw)) return;
    const i = (o, l) => {
      const s = D.findOne(o, r);
      s && s.classList.toggle(l, n);
    };
    i(im, pn), i($w, ss), r.setAttribute("aria-expanded", n);
  }
  _setAttributeIfNotExists(t, n, r) {
    t.hasAttribute(n) || t.setAttribute(n, r);
  }
  _elemIsActive(t) {
    return t.classList.contains(pn);
  }
  _getInnerElement(t) {
    return t.matches(us) ? t : D.findOne(us, t);
  }
  _getOuterElement(t) {
    return t.closest(jw) || t;
  }
  static jQueryInterface(t) {
    return this.each(function () {
      const n = hr.getOrCreateInstance(this);
      if (typeof t == "string") {
        if (n[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
}
S.on(document, Ow, om, function (e) {
  ["A", "AREA"].includes(this.tagName) && e.preventDefault(),
    !Gt(this) && hr.getOrCreateInstance(this).show();
});
S.on(window, Pw, () => {
  for (const e of D.find(bw)) hr.getOrCreateInstance(e);
});
Ye(hr);
const Fw = "toast",
  Vw = "bs.toast",
  rn = `.${Vw}`,
  Uw = `mouseover${rn}`,
  Ww = `mouseout${rn}`,
  Hw = `focusin${rn}`,
  Bw = `focusout${rn}`,
  Kw = `hide${rn}`,
  Yw = `hidden${rn}`,
  Qw = `show${rn}`,
  Gw = `shown${rn}`,
  Xw = "fade",
  If = "hide",
  Gi = "show",
  Xi = "showing",
  qw = { animation: "boolean", autohide: "boolean", delay: "number" },
  Zw = { animation: !0, autohide: !0, delay: 5e3 };
class vl extends tt {
  constructor(t, n) {
    super(t, n),
      (this._timeout = null),
      (this._hasMouseInteraction = !1),
      (this._hasKeyboardInteraction = !1),
      this._setListeners();
  }
  static get Default() {
    return Zw;
  }
  static get DefaultType() {
    return qw;
  }
  static get NAME() {
    return Fw;
  }
  show() {
    if (S.trigger(this._element, Qw).defaultPrevented) return;
    this._clearTimeout(),
      this._config.animation && this._element.classList.add(Xw);
    const n = () => {
      this._element.classList.remove(Xi),
        S.trigger(this._element, Gw),
        this._maybeScheduleHide();
    };
    this._element.classList.remove(If),
      Si(this._element),
      this._element.classList.add(Gi, Xi),
      this._queueCallback(n, this._element, this._config.animation);
  }
  hide() {
    if (!this.isShown() || S.trigger(this._element, Kw).defaultPrevented)
      return;
    const n = () => {
      this._element.classList.add(If),
        this._element.classList.remove(Xi, Gi),
        S.trigger(this._element, Yw);
    };
    this._element.classList.add(Xi),
      this._queueCallback(n, this._element, this._config.animation);
  }
  dispose() {
    this._clearTimeout(),
      this.isShown() && this._element.classList.remove(Gi),
      super.dispose();
  }
  isShown() {
    return this._element.classList.contains(Gi);
  }
  _maybeScheduleHide() {
    this._config.autohide &&
      (this._hasMouseInteraction ||
        this._hasKeyboardInteraction ||
        (this._timeout = setTimeout(() => {
          this.hide();
        }, this._config.delay)));
  }
  _onInteraction(t, n) {
    switch (t.type) {
      case "mouseover":
      case "mouseout": {
        this._hasMouseInteraction = n;
        break;
      }
      case "focusin":
      case "focusout": {
        this._hasKeyboardInteraction = n;
        break;
      }
    }
    if (n) {
      this._clearTimeout();
      return;
    }
    const r = t.relatedTarget;
    this._element === r ||
      this._element.contains(r) ||
      this._maybeScheduleHide();
  }
  _setListeners() {
    S.on(this._element, Uw, (t) => this._onInteraction(t, !0)),
      S.on(this._element, Ww, (t) => this._onInteraction(t, !1)),
      S.on(this._element, Hw, (t) => this._onInteraction(t, !0)),
      S.on(this._element, Bw, (t) => this._onInteraction(t, !1));
  }
  _clearTimeout() {
    clearTimeout(this._timeout), (this._timeout = null);
  }
  static jQueryInterface(t) {
    return this.each(function () {
      const n = vl.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof n[t] > "u") throw new TypeError(`No method named "${t}"`);
        n[t](this);
      }
    });
  }
}
pl(vl);
Ye(vl);
cs.createRoot(document.getElementById("root")).render(
  C.jsx(Wf.StrictMode, { children: C.jsx(Zy, {}) })
);
