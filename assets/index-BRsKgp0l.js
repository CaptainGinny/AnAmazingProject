(function () {
    const n = document.createElement('link').relList;
    if (n && n.supports && n.supports('modulepreload')) return;
    for (const l of document.querySelectorAll('link[rel="modulepreload"]')) o(l);
    new MutationObserver((l) => {
        for (const u of l)
            if (u.type === 'childList')
                for (const c of u.addedNodes)
                    c.tagName === 'LINK' && c.rel === 'modulepreload' && o(c);
    }).observe(document, { childList: !0, subtree: !0 });
    function i(l) {
        const u = {};
        return (
            l.integrity && (u.integrity = l.integrity),
            l.referrerPolicy && (u.referrerPolicy = l.referrerPolicy),
            l.crossOrigin === 'use-credentials'
                ? (u.credentials = 'include')
                : l.crossOrigin === 'anonymous'
                ? (u.credentials = 'omit')
                : (u.credentials = 'same-origin'),
            u
        );
    }
    function o(l) {
        if (l.ep) return;
        l.ep = !0;
        const u = i(l);
        fetch(l.href, u);
    }
})();
function Kg(f) {
    return f && f.__esModule && Object.prototype.hasOwnProperty.call(f, 'default') ? f.default : f;
}
var tf = { exports: {} },
    Ql = {},
    nf = { exports: {} },
    Ne = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Wh;
function qg() {
    if (Wh) return Ne;
    Wh = 1;
    var f = Symbol.for('react.element'),
        n = Symbol.for('react.portal'),
        i = Symbol.for('react.fragment'),
        o = Symbol.for('react.strict_mode'),
        l = Symbol.for('react.profiler'),
        u = Symbol.for('react.provider'),
        c = Symbol.for('react.context'),
        d = Symbol.for('react.forward_ref'),
        h = Symbol.for('react.suspense'),
        g = Symbol.for('react.memo'),
        _ = Symbol.for('react.lazy'),
        w = Symbol.iterator;
    function y(E) {
        return E === null || typeof E != 'object'
            ? null
            : ((E = (w && E[w]) || E['@@iterator']), typeof E == 'function' ? E : null);
    }
    var v = {
            isMounted: function () {
                return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
        },
        T = Object.assign,
        x = {};
    function O(E, B, de) {
        (this.props = E), (this.context = B), (this.refs = x), (this.updater = de || v);
    }
    (O.prototype.isReactComponent = {}),
        (O.prototype.setState = function (E, B) {
            if (typeof E != 'object' && typeof E != 'function' && E != null)
                throw Error(
                    'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
                );
            this.updater.enqueueSetState(this, E, B, 'setState');
        }),
        (O.prototype.forceUpdate = function (E) {
            this.updater.enqueueForceUpdate(this, E, 'forceUpdate');
        });
    function F() {}
    F.prototype = O.prototype;
    function A(E, B, de) {
        (this.props = E), (this.context = B), (this.refs = x), (this.updater = de || v);
    }
    var U = (A.prototype = new F());
    (U.constructor = A), T(U, O.prototype), (U.isPureReactComponent = !0);
    var D = Array.isArray,
        I = Object.prototype.hasOwnProperty,
        V = { current: null },
        L = { key: !0, ref: !0, __self: !0, __source: !0 };
    function X(E, B, de) {
        var oe,
            me = {},
            ve = null,
            xe = null;
        if (B != null)
            for (oe in (B.ref !== void 0 && (xe = B.ref), B.key !== void 0 && (ve = '' + B.key), B))
                I.call(B, oe) && !L.hasOwnProperty(oe) && (me[oe] = B[oe]);
        var Ce = arguments.length - 2;
        if (Ce === 1) me.children = de;
        else if (1 < Ce) {
            for (var Te = Array(Ce), at = 0; at < Ce; at++) Te[at] = arguments[at + 2];
            me.children = Te;
        }
        if (E && E.defaultProps)
            for (oe in ((Ce = E.defaultProps), Ce)) me[oe] === void 0 && (me[oe] = Ce[oe]);
        return { $$typeof: f, type: E, key: ve, ref: xe, props: me, _owner: V.current };
    }
    function $(E, B) {
        return { $$typeof: f, type: E.type, key: B, ref: E.ref, props: E.props, _owner: E._owner };
    }
    function Q(E) {
        return typeof E == 'object' && E !== null && E.$$typeof === f;
    }
    function pe(E) {
        var B = { '=': '=0', ':': '=2' };
        return (
            '$' +
            E.replace(/[=:]/g, function (de) {
                return B[de];
            })
        );
    }
    var q = /\/+/g;
    function he(E, B) {
        return typeof E == 'object' && E !== null && E.key != null
            ? pe('' + E.key)
            : B.toString(36);
    }
    function ge(E, B, de, oe, me) {
        var ve = typeof E;
        (ve === 'undefined' || ve === 'boolean') && (E = null);
        var xe = !1;
        if (E === null) xe = !0;
        else
            switch (ve) {
                case 'string':
                case 'number':
                    xe = !0;
                    break;
                case 'object':
                    switch (E.$$typeof) {
                        case f:
                        case n:
                            xe = !0;
                    }
            }
        if (xe)
            return (
                (xe = E),
                (me = me(xe)),
                (E = oe === '' ? '.' + he(xe, 0) : oe),
                D(me)
                    ? ((de = ''),
                      E != null && (de = E.replace(q, '$&/') + '/'),
                      ge(me, B, de, '', function (at) {
                          return at;
                      }))
                    : me != null &&
                      (Q(me) &&
                          (me = $(
                              me,
                              de +
                                  (!me.key || (xe && xe.key === me.key)
                                      ? ''
                                      : ('' + me.key).replace(q, '$&/') + '/') +
                                  E,
                          )),
                      B.push(me)),
                1
            );
        if (((xe = 0), (oe = oe === '' ? '.' : oe + ':'), D(E)))
            for (var Ce = 0; Ce < E.length; Ce++) {
                ve = E[Ce];
                var Te = oe + he(ve, Ce);
                xe += ge(ve, B, de, Te, me);
            }
        else if (((Te = y(E)), typeof Te == 'function'))
            for (E = Te.call(E), Ce = 0; !(ve = E.next()).done; )
                (ve = ve.value), (Te = oe + he(ve, Ce++)), (xe += ge(ve, B, de, Te, me));
        else if (ve === 'object')
            throw (
                ((B = String(E)),
                Error(
                    'Objects are not valid as a React child (found: ' +
                        (B === '[object Object]'
                            ? 'object with keys {' + Object.keys(E).join(', ') + '}'
                            : B) +
                        '). If you meant to render a collection of children, use an array instead.',
                ))
            );
        return xe;
    }
    function ke(E, B, de) {
        if (E == null) return E;
        var oe = [],
            me = 0;
        return (
            ge(E, oe, '', '', function (ve) {
                return B.call(de, ve, me++);
            }),
            oe
        );
    }
    function fe(E) {
        if (E._status === -1) {
            var B = E._result;
            (B = B()),
                B.then(
                    function (de) {
                        (E._status === 0 || E._status === -1) &&
                            ((E._status = 1), (E._result = de));
                    },
                    function (de) {
                        (E._status === 0 || E._status === -1) &&
                            ((E._status = 2), (E._result = de));
                    },
                ),
                E._status === -1 && ((E._status = 0), (E._result = B));
        }
        if (E._status === 1) return E._result.default;
        throw E._result;
    }
    var ee = { current: null },
        W = { transition: null },
        b = { ReactCurrentDispatcher: ee, ReactCurrentBatchConfig: W, ReactCurrentOwner: V };
    function k() {
        throw Error('act(...) is not supported in production builds of React.');
    }
    return (
        (Ne.Children = {
            map: ke,
            forEach: function (E, B, de) {
                ke(
                    E,
                    function () {
                        B.apply(this, arguments);
                    },
                    de,
                );
            },
            count: function (E) {
                var B = 0;
                return (
                    ke(E, function () {
                        B++;
                    }),
                    B
                );
            },
            toArray: function (E) {
                return (
                    ke(E, function (B) {
                        return B;
                    }) || []
                );
            },
            only: function (E) {
                if (!Q(E))
                    throw Error(
                        'React.Children.only expected to receive a single React element child.',
                    );
                return E;
            },
        }),
        (Ne.Component = O),
        (Ne.Fragment = i),
        (Ne.Profiler = l),
        (Ne.PureComponent = A),
        (Ne.StrictMode = o),
        (Ne.Suspense = h),
        (Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = b),
        (Ne.act = k),
        (Ne.cloneElement = function (E, B, de) {
            if (E == null)
                throw Error(
                    'React.cloneElement(...): The argument must be a React element, but you passed ' +
                        E +
                        '.',
                );
            var oe = T({}, E.props),
                me = E.key,
                ve = E.ref,
                xe = E._owner;
            if (B != null) {
                if (
                    (B.ref !== void 0 && ((ve = B.ref), (xe = V.current)),
                    B.key !== void 0 && (me = '' + B.key),
                    E.type && E.type.defaultProps)
                )
                    var Ce = E.type.defaultProps;
                for (Te in B)
                    I.call(B, Te) &&
                        !L.hasOwnProperty(Te) &&
                        (oe[Te] = B[Te] === void 0 && Ce !== void 0 ? Ce[Te] : B[Te]);
            }
            var Te = arguments.length - 2;
            if (Te === 1) oe.children = de;
            else if (1 < Te) {
                Ce = Array(Te);
                for (var at = 0; at < Te; at++) Ce[at] = arguments[at + 2];
                oe.children = Ce;
            }
            return { $$typeof: f, type: E.type, key: me, ref: ve, props: oe, _owner: xe };
        }),
        (Ne.createContext = function (E) {
            return (
                (E = {
                    $$typeof: c,
                    _currentValue: E,
                    _currentValue2: E,
                    _threadCount: 0,
                    Provider: null,
                    Consumer: null,
                    _defaultValue: null,
                    _globalName: null,
                }),
                (E.Provider = { $$typeof: u, _context: E }),
                (E.Consumer = E)
            );
        }),
        (Ne.createElement = X),
        (Ne.createFactory = function (E) {
            var B = X.bind(null, E);
            return (B.type = E), B;
        }),
        (Ne.createRef = function () {
            return { current: null };
        }),
        (Ne.forwardRef = function (E) {
            return { $$typeof: d, render: E };
        }),
        (Ne.isValidElement = Q),
        (Ne.lazy = function (E) {
            return { $$typeof: _, _payload: { _status: -1, _result: E }, _init: fe };
        }),
        (Ne.memo = function (E, B) {
            return { $$typeof: g, type: E, compare: B === void 0 ? null : B };
        }),
        (Ne.startTransition = function (E) {
            var B = W.transition;
            W.transition = {};
            try {
                E();
            } finally {
                W.transition = B;
            }
        }),
        (Ne.unstable_act = k),
        (Ne.useCallback = function (E, B) {
            return ee.current.useCallback(E, B);
        }),
        (Ne.useContext = function (E) {
            return ee.current.useContext(E);
        }),
        (Ne.useDebugValue = function () {}),
        (Ne.useDeferredValue = function (E) {
            return ee.current.useDeferredValue(E);
        }),
        (Ne.useEffect = function (E, B) {
            return ee.current.useEffect(E, B);
        }),
        (Ne.useId = function () {
            return ee.current.useId();
        }),
        (Ne.useImperativeHandle = function (E, B, de) {
            return ee.current.useImperativeHandle(E, B, de);
        }),
        (Ne.useInsertionEffect = function (E, B) {
            return ee.current.useInsertionEffect(E, B);
        }),
        (Ne.useLayoutEffect = function (E, B) {
            return ee.current.useLayoutEffect(E, B);
        }),
        (Ne.useMemo = function (E, B) {
            return ee.current.useMemo(E, B);
        }),
        (Ne.useReducer = function (E, B, de) {
            return ee.current.useReducer(E, B, de);
        }),
        (Ne.useRef = function (E) {
            return ee.current.useRef(E);
        }),
        (Ne.useState = function (E) {
            return ee.current.useState(E);
        }),
        (Ne.useSyncExternalStore = function (E, B, de) {
            return ee.current.useSyncExternalStore(E, B, de);
        }),
        (Ne.useTransition = function () {
            return ee.current.useTransition();
        }),
        (Ne.version = '18.3.1'),
        Ne
    );
}
var Yh;
function Gf() {
    return Yh || ((Yh = 1), (nf.exports = qg())), nf.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Hh;
function Zg() {
    if (Hh) return Ql;
    Hh = 1;
    var f = Gf(),
        n = Symbol.for('react.element'),
        i = Symbol.for('react.fragment'),
        o = Object.prototype.hasOwnProperty,
        l = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        u = { key: !0, ref: !0, __self: !0, __source: !0 };
    function c(d, h, g) {
        var _,
            w = {},
            y = null,
            v = null;
        g !== void 0 && (y = '' + g),
            h.key !== void 0 && (y = '' + h.key),
            h.ref !== void 0 && (v = h.ref);
        for (_ in h) o.call(h, _) && !u.hasOwnProperty(_) && (w[_] = h[_]);
        if (d && d.defaultProps)
            for (_ in ((h = d.defaultProps), h)) w[_] === void 0 && (w[_] = h[_]);
        return { $$typeof: n, type: d, key: y, ref: v, props: w, _owner: l.current };
    }
    return (Ql.Fragment = i), (Ql.jsx = c), (Ql.jsxs = c), Ql;
}
var Xh;
function bg() {
    return Xh || ((Xh = 1), (tf.exports = Zg())), tf.exports;
}
var R = bg(),
    Be = Gf();
const uo = Kg(Be);
var Ru = {},
    rf = { exports: {} },
    Pn = {},
    of = { exports: {} },
    lf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Qh;
function Jg() {
    return (
        Qh ||
            ((Qh = 1),
            (function (f) {
                function n(W, b) {
                    var k = W.length;
                    W.push(b);
                    e: for (; 0 < k; ) {
                        var E = (k - 1) >>> 1,
                            B = W[E];
                        if (0 < l(B, b)) (W[E] = b), (W[k] = B), (k = E);
                        else break e;
                    }
                }
                function i(W) {
                    return W.length === 0 ? null : W[0];
                }
                function o(W) {
                    if (W.length === 0) return null;
                    var b = W[0],
                        k = W.pop();
                    if (k !== b) {
                        W[0] = k;
                        e: for (var E = 0, B = W.length, de = B >>> 1; E < de; ) {
                            var oe = 2 * (E + 1) - 1,
                                me = W[oe],
                                ve = oe + 1,
                                xe = W[ve];
                            if (0 > l(me, k))
                                ve < B && 0 > l(xe, me)
                                    ? ((W[E] = xe), (W[ve] = k), (E = ve))
                                    : ((W[E] = me), (W[oe] = k), (E = oe));
                            else if (ve < B && 0 > l(xe, k)) (W[E] = xe), (W[ve] = k), (E = ve);
                            else break e;
                        }
                    }
                    return b;
                }
                function l(W, b) {
                    var k = W.sortIndex - b.sortIndex;
                    return k !== 0 ? k : W.id - b.id;
                }
                if (typeof performance == 'object' && typeof performance.now == 'function') {
                    var u = performance;
                    f.unstable_now = function () {
                        return u.now();
                    };
                } else {
                    var c = Date,
                        d = c.now();
                    f.unstable_now = function () {
                        return c.now() - d;
                    };
                }
                var h = [],
                    g = [],
                    _ = 1,
                    w = null,
                    y = 3,
                    v = !1,
                    T = !1,
                    x = !1,
                    O = typeof setTimeout == 'function' ? setTimeout : null,
                    F = typeof clearTimeout == 'function' ? clearTimeout : null,
                    A = typeof setImmediate < 'u' ? setImmediate : null;
                typeof navigator < 'u' &&
                    navigator.scheduling !== void 0 &&
                    navigator.scheduling.isInputPending !== void 0 &&
                    navigator.scheduling.isInputPending.bind(navigator.scheduling);
                function U(W) {
                    for (var b = i(g); b !== null; ) {
                        if (b.callback === null) o(g);
                        else if (b.startTime <= W) o(g), (b.sortIndex = b.expirationTime), n(h, b);
                        else break;
                        b = i(g);
                    }
                }
                function D(W) {
                    if (((x = !1), U(W), !T))
                        if (i(h) !== null) (T = !0), fe(I);
                        else {
                            var b = i(g);
                            b !== null && ee(D, b.startTime - W);
                        }
                }
                function I(W, b) {
                    (T = !1), x && ((x = !1), F(X), (X = -1)), (v = !0);
                    var k = y;
                    try {
                        for (
                            U(b), w = i(h);
                            w !== null && (!(w.expirationTime > b) || (W && !pe()));

                        ) {
                            var E = w.callback;
                            if (typeof E == 'function') {
                                (w.callback = null), (y = w.priorityLevel);
                                var B = E(w.expirationTime <= b);
                                (b = f.unstable_now()),
                                    typeof B == 'function' ? (w.callback = B) : w === i(h) && o(h),
                                    U(b);
                            } else o(h);
                            w = i(h);
                        }
                        if (w !== null) var de = !0;
                        else {
                            var oe = i(g);
                            oe !== null && ee(D, oe.startTime - b), (de = !1);
                        }
                        return de;
                    } finally {
                        (w = null), (y = k), (v = !1);
                    }
                }
                var V = !1,
                    L = null,
                    X = -1,
                    $ = 5,
                    Q = -1;
                function pe() {
                    return !(f.unstable_now() - Q < $);
                }
                function q() {
                    if (L !== null) {
                        var W = f.unstable_now();
                        Q = W;
                        var b = !0;
                        try {
                            b = L(!0, W);
                        } finally {
                            b ? he() : ((V = !1), (L = null));
                        }
                    } else V = !1;
                }
                var he;
                if (typeof A == 'function')
                    he = function () {
                        A(q);
                    };
                else if (typeof MessageChannel < 'u') {
                    var ge = new MessageChannel(),
                        ke = ge.port2;
                    (ge.port1.onmessage = q),
                        (he = function () {
                            ke.postMessage(null);
                        });
                } else
                    he = function () {
                        O(q, 0);
                    };
                function fe(W) {
                    (L = W), V || ((V = !0), he());
                }
                function ee(W, b) {
                    X = O(function () {
                        W(f.unstable_now());
                    }, b);
                }
                (f.unstable_IdlePriority = 5),
                    (f.unstable_ImmediatePriority = 1),
                    (f.unstable_LowPriority = 4),
                    (f.unstable_NormalPriority = 3),
                    (f.unstable_Profiling = null),
                    (f.unstable_UserBlockingPriority = 2),
                    (f.unstable_cancelCallback = function (W) {
                        W.callback = null;
                    }),
                    (f.unstable_continueExecution = function () {
                        T || v || ((T = !0), fe(I));
                    }),
                    (f.unstable_forceFrameRate = function (W) {
                        0 > W || 125 < W
                            ? console.error(
                                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
                              )
                            : ($ = 0 < W ? Math.floor(1e3 / W) : 5);
                    }),
                    (f.unstable_getCurrentPriorityLevel = function () {
                        return y;
                    }),
                    (f.unstable_getFirstCallbackNode = function () {
                        return i(h);
                    }),
                    (f.unstable_next = function (W) {
                        switch (y) {
                            case 1:
                            case 2:
                            case 3:
                                var b = 3;
                                break;
                            default:
                                b = y;
                        }
                        var k = y;
                        y = b;
                        try {
                            return W();
                        } finally {
                            y = k;
                        }
                    }),
                    (f.unstable_pauseExecution = function () {}),
                    (f.unstable_requestPaint = function () {}),
                    (f.unstable_runWithPriority = function (W, b) {
                        switch (W) {
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                                break;
                            default:
                                W = 3;
                        }
                        var k = y;
                        y = W;
                        try {
                            return b();
                        } finally {
                            y = k;
                        }
                    }),
                    (f.unstable_scheduleCallback = function (W, b, k) {
                        var E = f.unstable_now();
                        switch (
                            (typeof k == 'object' && k !== null
                                ? ((k = k.delay), (k = typeof k == 'number' && 0 < k ? E + k : E))
                                : (k = E),
                            W)
                        ) {
                            case 1:
                                var B = -1;
                                break;
                            case 2:
                                B = 250;
                                break;
                            case 5:
                                B = 1073741823;
                                break;
                            case 4:
                                B = 1e4;
                                break;
                            default:
                                B = 5e3;
                        }
                        return (
                            (B = k + B),
                            (W = {
                                id: _++,
                                callback: b,
                                priorityLevel: W,
                                startTime: k,
                                expirationTime: B,
                                sortIndex: -1,
                            }),
                            k > E
                                ? ((W.sortIndex = k),
                                  n(g, W),
                                  i(h) === null &&
                                      W === i(g) &&
                                      (x ? (F(X), (X = -1)) : (x = !0), ee(D, k - E)))
                                : ((W.sortIndex = B), n(h, W), T || v || ((T = !0), fe(I))),
                            W
                        );
                    }),
                    (f.unstable_shouldYield = pe),
                    (f.unstable_wrapCallback = function (W) {
                        var b = y;
                        return function () {
                            var k = y;
                            y = b;
                            try {
                                return W.apply(this, arguments);
                            } finally {
                                y = k;
                            }
                        };
                    });
            })(lf)),
        lf
    );
}
var Gh;
function e_() {
    return Gh || ((Gh = 1), (of.exports = Jg())), of.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Kh;
function t_() {
    if (Kh) return Pn;
    Kh = 1;
    var f = Gf(),
        n = e_();
    function i(e) {
        for (
            var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, r = 1;
            r < arguments.length;
            r++
        )
            t += '&args[]=' + encodeURIComponent(arguments[r]);
        return (
            'Minified React error #' +
            e +
            '; visit ' +
            t +
            ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
        );
    }
    var o = new Set(),
        l = {};
    function u(e, t) {
        c(e, t), c(e + 'Capture', t);
    }
    function c(e, t) {
        for (l[e] = t, e = 0; e < t.length; e++) o.add(t[e]);
    }
    var d = !(
            typeof window > 'u' ||
            typeof window.document > 'u' ||
            typeof window.document.createElement > 'u'
        ),
        h = Object.prototype.hasOwnProperty,
        g =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
        _ = {},
        w = {};
    function y(e) {
        return h.call(w, e) ? !0 : h.call(_, e) ? !1 : g.test(e) ? (w[e] = !0) : ((_[e] = !0), !1);
    }
    function v(e, t, r, s) {
        if (r !== null && r.type === 0) return !1;
        switch (typeof t) {
            case 'function':
            case 'symbol':
                return !0;
            case 'boolean':
                return s
                    ? !1
                    : r !== null
                    ? !r.acceptsBooleans
                    : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
            default:
                return !1;
        }
    }
    function T(e, t, r, s) {
        if (t === null || typeof t > 'u' || v(e, t, r, s)) return !0;
        if (s) return !1;
        if (r !== null)
            switch (r.type) {
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
    function x(e, t, r, s, a, p, m) {
        (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
            (this.attributeName = s),
            (this.attributeNamespace = a),
            (this.mustUseProperty = r),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = p),
            (this.removeEmptyString = m);
    }
    var O = {};
    'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
        .split(' ')
        .forEach(function (e) {
            O[e] = new x(e, 0, !1, e, null, !1, !1);
        }),
        [
            ['acceptCharset', 'accept-charset'],
            ['className', 'class'],
            ['htmlFor', 'for'],
            ['httpEquiv', 'http-equiv'],
        ].forEach(function (e) {
            var t = e[0];
            O[t] = new x(t, 1, !1, e[1], null, !1, !1);
        }),
        ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
            O[e] = new x(e, 2, !1, e.toLowerCase(), null, !1, !1);
        }),
        ['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(
            function (e) {
                O[e] = new x(e, 2, !1, e, null, !1, !1);
            },
        ),
        'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
            .split(' ')
            .forEach(function (e) {
                O[e] = new x(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
        ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
            O[e] = new x(e, 3, !0, e, null, !1, !1);
        }),
        ['capture', 'download'].forEach(function (e) {
            O[e] = new x(e, 4, !1, e, null, !1, !1);
        }),
        ['cols', 'rows', 'size', 'span'].forEach(function (e) {
            O[e] = new x(e, 6, !1, e, null, !1, !1);
        }),
        ['rowSpan', 'start'].forEach(function (e) {
            O[e] = new x(e, 5, !1, e.toLowerCase(), null, !1, !1);
        });
    var F = /[\-:]([a-z])/g;
    function A(e) {
        return e[1].toUpperCase();
    }
    'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
        .split(' ')
        .forEach(function (e) {
            var t = e.replace(F, A);
            O[t] = new x(t, 1, !1, e, null, !1, !1);
        }),
        'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
            .split(' ')
            .forEach(function (e) {
                var t = e.replace(F, A);
                O[t] = new x(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
            }),
        ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
            var t = e.replace(F, A);
            O[t] = new x(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
        }),
        ['tabIndex', 'crossOrigin'].forEach(function (e) {
            O[e] = new x(e, 1, !1, e.toLowerCase(), null, !1, !1);
        }),
        (O.xlinkHref = new x(
            'xlinkHref',
            1,
            !1,
            'xlink:href',
            'http://www.w3.org/1999/xlink',
            !0,
            !1,
        )),
        ['src', 'href', 'action', 'formAction'].forEach(function (e) {
            O[e] = new x(e, 1, !1, e.toLowerCase(), null, !0, !0);
        });
    function U(e, t, r, s) {
        var a = O.hasOwnProperty(t) ? O[t] : null;
        (a !== null
            ? a.type !== 0
            : s ||
              !(2 < t.length) ||
              (t[0] !== 'o' && t[0] !== 'O') ||
              (t[1] !== 'n' && t[1] !== 'N')) &&
            (T(t, r, a, s) && (r = null),
            s || a === null
                ? y(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, '' + r))
                : a.mustUseProperty
                ? (e[a.propertyName] = r === null ? (a.type === 3 ? !1 : '') : r)
                : ((t = a.attributeName),
                  (s = a.attributeNamespace),
                  r === null
                      ? e.removeAttribute(t)
                      : ((a = a.type),
                        (r = a === 3 || (a === 4 && r === !0) ? '' : '' + r),
                        s ? e.setAttributeNS(s, t, r) : e.setAttribute(t, r))));
    }
    var D = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
        I = Symbol.for('react.element'),
        V = Symbol.for('react.portal'),
        L = Symbol.for('react.fragment'),
        X = Symbol.for('react.strict_mode'),
        $ = Symbol.for('react.profiler'),
        Q = Symbol.for('react.provider'),
        pe = Symbol.for('react.context'),
        q = Symbol.for('react.forward_ref'),
        he = Symbol.for('react.suspense'),
        ge = Symbol.for('react.suspense_list'),
        ke = Symbol.for('react.memo'),
        fe = Symbol.for('react.lazy'),
        ee = Symbol.for('react.offscreen'),
        W = Symbol.iterator;
    function b(e) {
        return e === null || typeof e != 'object'
            ? null
            : ((e = (W && e[W]) || e['@@iterator']), typeof e == 'function' ? e : null);
    }
    var k = Object.assign,
        E;
    function B(e) {
        if (E === void 0)
            try {
                throw Error();
            } catch (r) {
                var t = r.stack.trim().match(/\n( *(at )?)/);
                E = (t && t[1]) || '';
            }
        return (
            `
` +
            E +
            e
        );
    }
    var de = !1;
    function oe(e, t) {
        if (!e || de) return '';
        de = !0;
        var r = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            if (t)
                if (
                    ((t = function () {
                        throw Error();
                    }),
                    Object.defineProperty(t.prototype, 'props', {
                        set: function () {
                            throw Error();
                        },
                    }),
                    typeof Reflect == 'object' && Reflect.construct)
                ) {
                    try {
                        Reflect.construct(t, []);
                    } catch (z) {
                        var s = z;
                    }
                    Reflect.construct(e, [], t);
                } else {
                    try {
                        t.call();
                    } catch (z) {
                        s = z;
                    }
                    e.call(t.prototype);
                }
            else {
                try {
                    throw Error();
                } catch (z) {
                    s = z;
                }
                e();
            }
        } catch (z) {
            if (z && s && typeof z.stack == 'string') {
                for (
                    var a = z.stack.split(`
`),
                        p = s.stack.split(`
`),
                        m = a.length - 1,
                        S = p.length - 1;
                    1 <= m && 0 <= S && a[m] !== p[S];

                )
                    S--;
                for (; 1 <= m && 0 <= S; m--, S--)
                    if (a[m] !== p[S]) {
                        if (m !== 1 || S !== 1)
                            do
                                if ((m--, S--, 0 > S || a[m] !== p[S])) {
                                    var C =
                                        `
` + a[m].replace(' at new ', ' at ');
                                    return (
                                        e.displayName &&
                                            C.includes('<anonymous>') &&
                                            (C = C.replace('<anonymous>', e.displayName)),
                                        C
                                    );
                                }
                            while (1 <= m && 0 <= S);
                        break;
                    }
            }
        } finally {
            (de = !1), (Error.prepareStackTrace = r);
        }
        return (e = e ? e.displayName || e.name : '') ? B(e) : '';
    }
    function me(e) {
        switch (e.tag) {
            case 5:
                return B(e.type);
            case 16:
                return B('Lazy');
            case 13:
                return B('Suspense');
            case 19:
                return B('SuspenseList');
            case 0:
            case 2:
            case 15:
                return (e = oe(e.type, !1)), e;
            case 11:
                return (e = oe(e.type.render, !1)), e;
            case 1:
                return (e = oe(e.type, !0)), e;
            default:
                return '';
        }
    }
    function ve(e) {
        if (e == null) return null;
        if (typeof e == 'function') return e.displayName || e.name || null;
        if (typeof e == 'string') return e;
        switch (e) {
            case L:
                return 'Fragment';
            case V:
                return 'Portal';
            case $:
                return 'Profiler';
            case X:
                return 'StrictMode';
            case he:
                return 'Suspense';
            case ge:
                return 'SuspenseList';
        }
        if (typeof e == 'object')
            switch (e.$$typeof) {
                case pe:
                    return (e.displayName || 'Context') + '.Consumer';
                case Q:
                    return (e._context.displayName || 'Context') + '.Provider';
                case q:
                    var t = e.render;
                    return (
                        (e = e.displayName),
                        e ||
                            ((e = t.displayName || t.name || ''),
                            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
                        e
                    );
                case ke:
                    return (t = e.displayName || null), t !== null ? t : ve(e.type) || 'Memo';
                case fe:
                    (t = e._payload), (e = e._init);
                    try {
                        return ve(e(t));
                    } catch {}
            }
        return null;
    }
    function xe(e) {
        var t = e.type;
        switch (e.tag) {
            case 24:
                return 'Cache';
            case 9:
                return (t.displayName || 'Context') + '.Consumer';
            case 10:
                return (t._context.displayName || 'Context') + '.Provider';
            case 18:
                return 'DehydratedFragment';
            case 11:
                return (
                    (e = t.render),
                    (e = e.displayName || e.name || ''),
                    t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
                );
            case 7:
                return 'Fragment';
            case 5:
                return t;
            case 4:
                return 'Portal';
            case 3:
                return 'Root';
            case 6:
                return 'Text';
            case 16:
                return ve(t);
            case 8:
                return t === X ? 'StrictMode' : 'Mode';
            case 22:
                return 'Offscreen';
            case 12:
                return 'Profiler';
            case 21:
                return 'Scope';
            case 13:
                return 'Suspense';
            case 19:
                return 'SuspenseList';
            case 25:
                return 'TracingMarker';
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
                if (typeof t == 'function') return t.displayName || t.name || null;
                if (typeof t == 'string') return t;
        }
        return null;
    }
    function Ce(e) {
        switch (typeof e) {
            case 'boolean':
            case 'number':
            case 'string':
            case 'undefined':
                return e;
            case 'object':
                return e;
            default:
                return '';
        }
    }
    function Te(e) {
        var t = e.type;
        return (
            (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio')
        );
    }
    function at(e) {
        var t = Te(e) ? 'checked' : 'value',
            r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
            s = '' + e[t];
        if (
            !e.hasOwnProperty(t) &&
            typeof r < 'u' &&
            typeof r.get == 'function' &&
            typeof r.set == 'function'
        ) {
            var a = r.get,
                p = r.set;
            return (
                Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                        return a.call(this);
                    },
                    set: function (m) {
                        (s = '' + m), p.call(this, m);
                    },
                }),
                Object.defineProperty(e, t, { enumerable: r.enumerable }),
                {
                    getValue: function () {
                        return s;
                    },
                    setValue: function (m) {
                        s = '' + m;
                    },
                    stopTracking: function () {
                        (e._valueTracker = null), delete e[t];
                    },
                }
            );
        }
    }
    function vt(e) {
        e._valueTracker || (e._valueTracker = at(e));
    }
    function _n(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var r = t.getValue(),
            s = '';
        return (
            e && (s = Te(e) ? (e.checked ? 'true' : 'false') : e.value),
            (e = s),
            e !== r ? (t.setValue(e), !0) : !1
        );
    }
    function Re(e) {
        if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
        try {
            return e.activeElement || e.body;
        } catch {
            return e.body;
        }
    }
    function Ge(e, t) {
        var r = t.checked;
        return k({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: r ?? e._wrapperState.initialChecked,
        });
    }
    function Bt(e, t) {
        var r = t.defaultValue == null ? '' : t.defaultValue,
            s = t.checked != null ? t.checked : t.defaultChecked;
        (r = Ce(t.value != null ? t.value : r)),
            (e._wrapperState = {
                initialChecked: s,
                initialValue: r,
                controlled:
                    t.type === 'checkbox' || t.type === 'radio'
                        ? t.checked != null
                        : t.value != null,
            });
    }
    function Wt(e, t) {
        (t = t.checked), t != null && U(e, 'checked', t, !1);
    }
    function j(e, t) {
        Wt(e, t);
        var r = Ce(t.value),
            s = t.type;
        if (r != null)
            s === 'number'
                ? ((r === 0 && e.value === '') || e.value != r) && (e.value = '' + r)
                : e.value !== '' + r && (e.value = '' + r);
        else if (s === 'submit' || s === 'reset') {
            e.removeAttribute('value');
            return;
        }
        t.hasOwnProperty('value')
            ? Ln(e, t.type, r)
            : t.hasOwnProperty('defaultValue') && Ln(e, t.type, Ce(t.defaultValue)),
            t.checked == null &&
                t.defaultChecked != null &&
                (e.defaultChecked = !!t.defaultChecked);
    }
    function Yt(e, t, r) {
        if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
            var s = t.type;
            if (!((s !== 'submit' && s !== 'reset') || (t.value !== void 0 && t.value !== null)))
                return;
            (t = '' + e._wrapperState.initialValue),
                r || t === e.value || (e.value = t),
                (e.defaultValue = t);
        }
        (r = e.name),
            r !== '' && (e.name = ''),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            r !== '' && (e.name = r);
    }
    function Ln(e, t, r) {
        (t !== 'number' || Re(e.ownerDocument) !== e) &&
            (r == null
                ? (e.defaultValue = '' + e._wrapperState.initialValue)
                : e.defaultValue !== '' + r && (e.defaultValue = '' + r));
    }
    var vn = Array.isArray;
    function $e(e, t, r, s) {
        if (((e = e.options), t)) {
            t = {};
            for (var a = 0; a < r.length; a++) t['$' + r[a]] = !0;
            for (r = 0; r < e.length; r++)
                (a = t.hasOwnProperty('$' + e[r].value)),
                    e[r].selected !== a && (e[r].selected = a),
                    a && s && (e[r].defaultSelected = !0);
        } else {
            for (r = '' + Ce(r), t = null, a = 0; a < e.length; a++) {
                if (e[a].value === r) {
                    (e[a].selected = !0), s && (e[a].defaultSelected = !0);
                    return;
                }
                t !== null || e[a].disabled || (t = e[a]);
            }
            t !== null && (t.selected = !0);
        }
    }
    function Kn(e, t) {
        if (t.dangerouslySetInnerHTML != null) throw Error(i(91));
        return k({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: '' + e._wrapperState.initialValue,
        });
    }
    function Tr(e, t) {
        var r = t.value;
        if (r == null) {
            if (((r = t.children), (t = t.defaultValue), r != null)) {
                if (t != null) throw Error(i(92));
                if (vn(r)) {
                    if (1 < r.length) throw Error(i(93));
                    r = r[0];
                }
                t = r;
            }
            t == null && (t = ''), (r = t);
        }
        e._wrapperState = { initialValue: Ce(r) };
    }
    function Vr(e, t) {
        var r = Ce(t.value),
            s = Ce(t.defaultValue);
        r != null &&
            ((r = '' + r),
            r !== e.value && (e.value = r),
            t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
            s != null && (e.defaultValue = '' + s);
    }
    function pt(e) {
        var t = e.textContent;
        t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
    }
    function fr(e) {
        switch (e) {
            case 'svg':
                return 'http://www.w3.org/2000/svg';
            case 'math':
                return 'http://www.w3.org/1998/Math/MathML';
            default:
                return 'http://www.w3.org/1999/xhtml';
        }
    }
    function Ke(e, t) {
        return e == null || e === 'http://www.w3.org/1999/xhtml'
            ? fr(t)
            : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
            ? 'http://www.w3.org/1999/xhtml'
            : e;
    }
    var Ht,
        tn = (function (e) {
            return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
                ? function (t, r, s, a) {
                      MSApp.execUnsafeLocalFunction(function () {
                          return e(t, r, s, a);
                      });
                  }
                : e;
        })(function (e, t) {
            if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
                e.innerHTML = t;
            else {
                for (
                    Ht = Ht || document.createElement('div'),
                        Ht.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
                        t = Ht.firstChild;
                    e.firstChild;

                )
                    e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
            }
        });
    function nn(e, t) {
        if (t) {
            var r = e.firstChild;
            if (r && r === e.lastChild && r.nodeType === 3) {
                r.nodeValue = t;
                return;
            }
        }
        e.textContent = t;
    }
    var dr = {
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
        ct = ['Webkit', 'ms', 'Moz', 'O'];
    Object.keys(dr).forEach(function (e) {
        ct.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (dr[t] = dr[e]);
        });
    });
    function Bi(e, t, r) {
        return t == null || typeof t == 'boolean' || t === ''
            ? ''
            : r || typeof t != 'number' || t === 0 || (dr.hasOwnProperty(e) && dr[e])
            ? ('' + t).trim()
            : t + 'px';
    }
    function pr(e, t) {
        e = e.style;
        for (var r in t)
            if (t.hasOwnProperty(r)) {
                var s = r.indexOf('--') === 0,
                    a = Bi(r, t[r], s);
                r === 'float' && (r = 'cssFloat'), s ? e.setProperty(r, a) : (e[r] = a);
            }
    }
    var oi = k(
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
        },
    );
    function Er(e, t) {
        if (t) {
            if (oi[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
                throw Error(i(137, e));
            if (t.dangerouslySetInnerHTML != null) {
                if (t.children != null) throw Error(i(60));
                if (
                    typeof t.dangerouslySetInnerHTML != 'object' ||
                    !('__html' in t.dangerouslySetInnerHTML)
                )
                    throw Error(i(61));
            }
            if (t.style != null && typeof t.style != 'object') throw Error(i(62));
        }
    }
    function qn(e, t) {
        if (e.indexOf('-') === -1) return typeof t.is == 'string';
        switch (e) {
            case 'annotation-xml':
            case 'color-profile':
            case 'font-face':
            case 'font-face-src':
            case 'font-face-uri':
            case 'font-face-format':
            case 'font-face-name':
            case 'missing-glyph':
                return !1;
            default:
                return !0;
        }
    }
    var hr = null;
    function Ee(e) {
        return (
            (e = e.target || e.srcElement || window),
            e.correspondingUseElement && (e = e.correspondingUseElement),
            e.nodeType === 3 ? e.parentNode : e
        );
    }
    var mr = null,
        Nt = null,
        Mt = null;
    function yn(e) {
        if ((e = zl(e))) {
            if (typeof mr != 'function') throw Error(i(280));
            var t = e.stateNode;
            t && ((t = Xs(t)), mr(e.stateNode, e.type, t));
        }
    }
    function Pr(e) {
        Nt ? (Mt ? Mt.push(e) : (Mt = [e])) : (Nt = e);
    }
    function $r() {
        if (Nt) {
            var e = Nt,
                t = Mt;
            if (((Mt = Nt = null), yn(e), t)) for (e = 0; e < t.length; e++) yn(t[e]);
        }
    }
    function Zn(e, t) {
        return e(t);
    }
    function li() {}
    var Se = !1;
    function ue(e, t, r) {
        if (Se) return e(t, r);
        Se = !0;
        try {
            return Zn(e, t, r);
        } finally {
            (Se = !1), (Nt !== null || Mt !== null) && (li(), $r());
        }
    }
    function ze(e, t) {
        var r = e.stateNode;
        if (r === null) return null;
        var s = Xs(r);
        if (s === null) return null;
        r = s[t];
        e: switch (t) {
            case 'onClick':
            case 'onClickCapture':
            case 'onDoubleClick':
            case 'onDoubleClickCapture':
            case 'onMouseDown':
            case 'onMouseDownCapture':
            case 'onMouseMove':
            case 'onMouseMoveCapture':
            case 'onMouseUp':
            case 'onMouseUpCapture':
            case 'onMouseEnter':
                (s = !s.disabled) ||
                    ((e = e.type),
                    (s = !(e === 'button' || e === 'input' || e === 'select' || e === 'textarea'))),
                    (e = !s);
                break e;
            default:
                e = !1;
        }
        if (e) return null;
        if (r && typeof r != 'function') throw Error(i(231, t, typeof r));
        return r;
    }
    var Z = !1;
    if (d)
        try {
            var ye = {};
            Object.defineProperty(ye, 'passive', {
                get: function () {
                    Z = !0;
                },
            }),
                window.addEventListener('test', ye, ye),
                window.removeEventListener('test', ye, ye);
        } catch {
            Z = !1;
        }
    function se(e, t, r, s, a, p, m, S, C) {
        var z = Array.prototype.slice.call(arguments, 3);
        try {
            t.apply(r, z);
        } catch (H) {
            this.onError(H);
        }
    }
    var _e = !1,
        rt = null,
        Pe = !1,
        qe = null,
        Rt = {
            onError: function (e) {
                (_e = !0), (rt = e);
            },
        };
    function et(e, t, r, s, a, p, m, S, C) {
        (_e = !1), (rt = null), se.apply(Rt, arguments);
    }
    function Ye(e, t, r, s, a, p, m, S, C) {
        if ((et.apply(this, arguments), _e)) {
            if (_e) {
                var z = rt;
                (_e = !1), (rt = null);
            } else throw Error(i(198));
            Pe || ((Pe = !0), (qe = z));
        }
    }
    function je(e) {
        var t = e,
            r = e;
        if (e.alternate) for (; t.return; ) t = t.return;
        else {
            e = t;
            do (t = e), t.flags & 4098 && (r = t.return), (e = t.return);
            while (e);
        }
        return t.tag === 3 ? r : null;
    }
    function xn(e) {
        if (e.tag === 13) {
            var t = e.memoizedState;
            if (
                (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)
            )
                return t.dehydrated;
        }
        return null;
    }
    function He(e) {
        if (je(e) !== e) throw Error(i(188));
    }
    function rn(e) {
        var t = e.alternate;
        if (!t) {
            if (((t = je(e)), t === null)) throw Error(i(188));
            return t !== e ? null : e;
        }
        for (var r = e, s = t; ; ) {
            var a = r.return;
            if (a === null) break;
            var p = a.alternate;
            if (p === null) {
                if (((s = a.return), s !== null)) {
                    r = s;
                    continue;
                }
                break;
            }
            if (a.child === p.child) {
                for (p = a.child; p; ) {
                    if (p === r) return He(a), e;
                    if (p === s) return He(a), t;
                    p = p.sibling;
                }
                throw Error(i(188));
            }
            if (r.return !== s.return) (r = a), (s = p);
            else {
                for (var m = !1, S = a.child; S; ) {
                    if (S === r) {
                        (m = !0), (r = a), (s = p);
                        break;
                    }
                    if (S === s) {
                        (m = !0), (s = a), (r = p);
                        break;
                    }
                    S = S.sibling;
                }
                if (!m) {
                    for (S = p.child; S; ) {
                        if (S === r) {
                            (m = !0), (r = p), (s = a);
                            break;
                        }
                        if (S === s) {
                            (m = !0), (s = p), (r = a);
                            break;
                        }
                        S = S.sibling;
                    }
                    if (!m) throw Error(i(189));
                }
            }
            if (r.alternate !== s) throw Error(i(190));
        }
        if (r.tag !== 3) throw Error(i(188));
        return r.stateNode.current === r ? e : t;
    }
    function jn(e) {
        return (e = rn(e)), e !== null ? yt(e) : null;
    }
    function yt(e) {
        if (e.tag === 5 || e.tag === 6) return e;
        for (e = e.child; e !== null; ) {
            var t = yt(e);
            if (t !== null) return t;
            e = e.sibling;
        }
        return null;
    }
    var xt = n.unstable_scheduleCallback,
        Ct = n.unstable_cancelCallback,
        Wr = n.unstable_shouldYield,
        ko = n.unstable_requestPaint,
        Oe = n.unstable_now,
        ht = n.unstable_getCurrentPriorityLevel,
        wn = n.unstable_ImmediatePriority,
        Co = n.unstable_UserBlockingPriority,
        Ui = n.unstable_NormalPriority,
        Vi = n.unstable_LowPriority,
        An = n.unstable_IdlePriority,
        Or = null,
        on = null;
    function $i(e) {
        if (on && typeof on.onCommitFiberRoot == 'function')
            try {
                on.onCommitFiberRoot(Or, e, void 0, (e.current.flags & 128) === 128);
            } catch {}
    }
    var gr = Math.clz32 ? Math.clz32 : p1,
        f1 = Math.log,
        d1 = Math.LN2;
    function p1(e) {
        return (e >>>= 0), e === 0 ? 32 : (31 - ((f1(e) / d1) | 0)) | 0;
    }
    var Os = 64,
        Ns = 4194304;
    function hl(e) {
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
    function Ms(e, t) {
        var r = e.pendingLanes;
        if (r === 0) return 0;
        var s = 0,
            a = e.suspendedLanes,
            p = e.pingedLanes,
            m = r & 268435455;
        if (m !== 0) {
            var S = m & ~a;
            S !== 0 ? (s = hl(S)) : ((p &= m), p !== 0 && (s = hl(p)));
        } else (m = r & ~a), m !== 0 ? (s = hl(m)) : p !== 0 && (s = hl(p));
        if (s === 0) return 0;
        if (
            t !== 0 &&
            t !== s &&
            !(t & a) &&
            ((a = s & -s), (p = t & -t), a >= p || (a === 16 && (p & 4194240) !== 0))
        )
            return t;
        if ((s & 4 && (s |= r & 16), (t = e.entangledLanes), t !== 0))
            for (e = e.entanglements, t &= s; 0 < t; )
                (r = 31 - gr(t)), (a = 1 << r), (s |= e[r]), (t &= ~a);
        return s;
    }
    function h1(e, t) {
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
    function m1(e, t) {
        for (
            var r = e.suspendedLanes, s = e.pingedLanes, a = e.expirationTimes, p = e.pendingLanes;
            0 < p;

        ) {
            var m = 31 - gr(p),
                S = 1 << m,
                C = a[m];
            C === -1 ? (!(S & r) || S & s) && (a[m] = h1(S, t)) : C <= t && (e.expiredLanes |= S),
                (p &= ~S);
        }
    }
    function Sa(e) {
        return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
    }
    function xd() {
        var e = Os;
        return (Os <<= 1), !(Os & 4194240) && (Os = 64), e;
    }
    function ka(e) {
        for (var t = [], r = 0; 31 > r; r++) t.push(e);
        return t;
    }
    function ml(e, t, r) {
        (e.pendingLanes |= t),
            t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            (e = e.eventTimes),
            (t = 31 - gr(t)),
            (e[t] = r);
    }
    function g1(e, t) {
        var r = e.pendingLanes & ~t;
        (e.pendingLanes = t),
            (e.suspendedLanes = 0),
            (e.pingedLanes = 0),
            (e.expiredLanes &= t),
            (e.mutableReadLanes &= t),
            (e.entangledLanes &= t),
            (t = e.entanglements);
        var s = e.eventTimes;
        for (e = e.expirationTimes; 0 < r; ) {
            var a = 31 - gr(r),
                p = 1 << a;
            (t[a] = 0), (s[a] = -1), (e[a] = -1), (r &= ~p);
        }
    }
    function Ca(e, t) {
        var r = (e.entangledLanes |= t);
        for (e = e.entanglements; r; ) {
            var s = 31 - gr(r),
                a = 1 << s;
            (a & t) | (e[s] & t) && (e[s] |= t), (r &= ~a);
        }
    }
    var Ve = 0;
    function wd(e) {
        return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
    }
    var Sd,
        Ta,
        kd,
        Cd,
        Td,
        Ea = !1,
        Rs = [],
        si = null,
        ui = null,
        ai = null,
        gl = new Map(),
        _l = new Map(),
        ci = [],
        _1 =
            'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
                ' ',
            );
    function Ed(e, t) {
        switch (e) {
            case 'focusin':
            case 'focusout':
                si = null;
                break;
            case 'dragenter':
            case 'dragleave':
                ui = null;
                break;
            case 'mouseover':
            case 'mouseout':
                ai = null;
                break;
            case 'pointerover':
            case 'pointerout':
                gl.delete(t.pointerId);
                break;
            case 'gotpointercapture':
            case 'lostpointercapture':
                _l.delete(t.pointerId);
        }
    }
    function vl(e, t, r, s, a, p) {
        return e === null || e.nativeEvent !== p
            ? ((e = {
                  blockedOn: t,
                  domEventName: r,
                  eventSystemFlags: s,
                  nativeEvent: p,
                  targetContainers: [a],
              }),
              t !== null && ((t = zl(t)), t !== null && Ta(t)),
              e)
            : ((e.eventSystemFlags |= s),
              (t = e.targetContainers),
              a !== null && t.indexOf(a) === -1 && t.push(a),
              e);
    }
    function v1(e, t, r, s, a) {
        switch (t) {
            case 'focusin':
                return (si = vl(si, e, t, r, s, a)), !0;
            case 'dragenter':
                return (ui = vl(ui, e, t, r, s, a)), !0;
            case 'mouseover':
                return (ai = vl(ai, e, t, r, s, a)), !0;
            case 'pointerover':
                var p = a.pointerId;
                return gl.set(p, vl(gl.get(p) || null, e, t, r, s, a)), !0;
            case 'gotpointercapture':
                return (p = a.pointerId), _l.set(p, vl(_l.get(p) || null, e, t, r, s, a)), !0;
        }
        return !1;
    }
    function Pd(e) {
        var t = Wi(e.target);
        if (t !== null) {
            var r = je(t);
            if (r !== null) {
                if (((t = r.tag), t === 13)) {
                    if (((t = xn(r)), t !== null)) {
                        (e.blockedOn = t),
                            Td(e.priority, function () {
                                kd(r);
                            });
                        return;
                    }
                } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
                    e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
                    return;
                }
            }
        }
        e.blockedOn = null;
    }
    function zs(e) {
        if (e.blockedOn !== null) return !1;
        for (var t = e.targetContainers; 0 < t.length; ) {
            var r = Oa(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (r === null) {
                r = e.nativeEvent;
                var s = new r.constructor(r.type, r);
                (hr = s), r.target.dispatchEvent(s), (hr = null);
            } else return (t = zl(r)), t !== null && Ta(t), (e.blockedOn = r), !1;
            t.shift();
        }
        return !0;
    }
    function Od(e, t, r) {
        zs(e) && r.delete(t);
    }
    function y1() {
        (Ea = !1),
            si !== null && zs(si) && (si = null),
            ui !== null && zs(ui) && (ui = null),
            ai !== null && zs(ai) && (ai = null),
            gl.forEach(Od),
            _l.forEach(Od);
    }
    function yl(e, t) {
        e.blockedOn === t &&
            ((e.blockedOn = null),
            Ea || ((Ea = !0), n.unstable_scheduleCallback(n.unstable_NormalPriority, y1)));
    }
    function xl(e) {
        function t(a) {
            return yl(a, e);
        }
        if (0 < Rs.length) {
            yl(Rs[0], e);
            for (var r = 1; r < Rs.length; r++) {
                var s = Rs[r];
                s.blockedOn === e && (s.blockedOn = null);
            }
        }
        for (
            si !== null && yl(si, e),
                ui !== null && yl(ui, e),
                ai !== null && yl(ai, e),
                gl.forEach(t),
                _l.forEach(t),
                r = 0;
            r < ci.length;
            r++
        )
            (s = ci[r]), s.blockedOn === e && (s.blockedOn = null);
        for (; 0 < ci.length && ((r = ci[0]), r.blockedOn === null); )
            Pd(r), r.blockedOn === null && ci.shift();
    }
    var To = D.ReactCurrentBatchConfig,
        Ds = !0;
    function x1(e, t, r, s) {
        var a = Ve,
            p = To.transition;
        To.transition = null;
        try {
            (Ve = 1), Pa(e, t, r, s);
        } finally {
            (Ve = a), (To.transition = p);
        }
    }
    function w1(e, t, r, s) {
        var a = Ve,
            p = To.transition;
        To.transition = null;
        try {
            (Ve = 4), Pa(e, t, r, s);
        } finally {
            (Ve = a), (To.transition = p);
        }
    }
    function Pa(e, t, r, s) {
        if (Ds) {
            var a = Oa(e, t, r, s);
            if (a === null) Ha(e, t, s, Ls, r), Ed(e, s);
            else if (v1(a, e, t, r, s)) s.stopPropagation();
            else if ((Ed(e, s), t & 4 && -1 < _1.indexOf(e))) {
                for (; a !== null; ) {
                    var p = zl(a);
                    if (
                        (p !== null && Sd(p),
                        (p = Oa(e, t, r, s)),
                        p === null && Ha(e, t, s, Ls, r),
                        p === a)
                    )
                        break;
                    a = p;
                }
                a !== null && s.stopPropagation();
            } else Ha(e, t, s, null, r);
        }
    }
    var Ls = null;
    function Oa(e, t, r, s) {
        if (((Ls = null), (e = Ee(s)), (e = Wi(e)), e !== null))
            if (((t = je(e)), t === null)) e = null;
            else if (((r = t.tag), r === 13)) {
                if (((e = xn(t)), e !== null)) return e;
                e = null;
            } else if (r === 3) {
                if (t.stateNode.current.memoizedState.isDehydrated)
                    return t.tag === 3 ? t.stateNode.containerInfo : null;
                e = null;
            } else t !== e && (e = null);
        return (Ls = e), null;
    }
    function Nd(e) {
        switch (e) {
            case 'cancel':
            case 'click':
            case 'close':
            case 'contextmenu':
            case 'copy':
            case 'cut':
            case 'auxclick':
            case 'dblclick':
            case 'dragend':
            case 'dragstart':
            case 'drop':
            case 'focusin':
            case 'focusout':
            case 'input':
            case 'invalid':
            case 'keydown':
            case 'keypress':
            case 'keyup':
            case 'mousedown':
            case 'mouseup':
            case 'paste':
            case 'pause':
            case 'play':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointerup':
            case 'ratechange':
            case 'reset':
            case 'resize':
            case 'seeked':
            case 'submit':
            case 'touchcancel':
            case 'touchend':
            case 'touchstart':
            case 'volumechange':
            case 'change':
            case 'selectionchange':
            case 'textInput':
            case 'compositionstart':
            case 'compositionend':
            case 'compositionupdate':
            case 'beforeblur':
            case 'afterblur':
            case 'beforeinput':
            case 'blur':
            case 'fullscreenchange':
            case 'focus':
            case 'hashchange':
            case 'popstate':
            case 'select':
            case 'selectstart':
                return 1;
            case 'drag':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'mousemove':
            case 'mouseout':
            case 'mouseover':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'scroll':
            case 'toggle':
            case 'touchmove':
            case 'wheel':
            case 'mouseenter':
            case 'mouseleave':
            case 'pointerenter':
            case 'pointerleave':
                return 4;
            case 'message':
                switch (ht()) {
                    case wn:
                        return 1;
                    case Co:
                        return 4;
                    case Ui:
                    case Vi:
                        return 16;
                    case An:
                        return 536870912;
                    default:
                        return 16;
                }
            default:
                return 16;
        }
    }
    var fi = null,
        Na = null,
        js = null;
    function Md() {
        if (js) return js;
        var e,
            t = Na,
            r = t.length,
            s,
            a = 'value' in fi ? fi.value : fi.textContent,
            p = a.length;
        for (e = 0; e < r && t[e] === a[e]; e++);
        var m = r - e;
        for (s = 1; s <= m && t[r - s] === a[p - s]; s++);
        return (js = a.slice(e, 1 < s ? 1 - s : void 0));
    }
    function As(e) {
        var t = e.keyCode;
        return (
            'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
            e === 10 && (e = 13),
            32 <= e || e === 13 ? e : 0
        );
    }
    function Fs() {
        return !0;
    }
    function Rd() {
        return !1;
    }
    function Fn(e) {
        function t(r, s, a, p, m) {
            (this._reactName = r),
                (this._targetInst = a),
                (this.type = s),
                (this.nativeEvent = p),
                (this.target = m),
                (this.currentTarget = null);
            for (var S in e) e.hasOwnProperty(S) && ((r = e[S]), (this[S] = r ? r(p) : p[S]));
            return (
                (this.isDefaultPrevented = (
                    p.defaultPrevented != null ? p.defaultPrevented : p.returnValue === !1
                )
                    ? Fs
                    : Rd),
                (this.isPropagationStopped = Rd),
                this
            );
        }
        return (
            k(t.prototype, {
                preventDefault: function () {
                    this.defaultPrevented = !0;
                    var r = this.nativeEvent;
                    r &&
                        (r.preventDefault
                            ? r.preventDefault()
                            : typeof r.returnValue != 'unknown' && (r.returnValue = !1),
                        (this.isDefaultPrevented = Fs));
                },
                stopPropagation: function () {
                    var r = this.nativeEvent;
                    r &&
                        (r.stopPropagation
                            ? r.stopPropagation()
                            : typeof r.cancelBubble != 'unknown' && (r.cancelBubble = !0),
                        (this.isPropagationStopped = Fs));
                },
                persist: function () {},
                isPersistent: Fs,
            }),
            t
        );
    }
    var Eo = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
                return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
        },
        Ma = Fn(Eo),
        wl = k({}, Eo, { view: 0, detail: 0 }),
        S1 = Fn(wl),
        Ra,
        za,
        Sl,
        Is = k({}, wl, {
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
            getModifierState: La,
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
                return 'movementX' in e
                    ? e.movementX
                    : (e !== Sl &&
                          (Sl && e.type === 'mousemove'
                              ? ((Ra = e.screenX - Sl.screenX), (za = e.screenY - Sl.screenY))
                              : (za = Ra = 0),
                          (Sl = e)),
                      Ra);
            },
            movementY: function (e) {
                return 'movementY' in e ? e.movementY : za;
            },
        }),
        zd = Fn(Is),
        k1 = k({}, Is, { dataTransfer: 0 }),
        C1 = Fn(k1),
        T1 = k({}, wl, { relatedTarget: 0 }),
        Da = Fn(T1),
        E1 = k({}, Eo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
        P1 = Fn(E1),
        O1 = k({}, Eo, {
            clipboardData: function (e) {
                return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
            },
        }),
        N1 = Fn(O1),
        M1 = k({}, Eo, { data: 0 }),
        Dd = Fn(M1),
        R1 = {
            Esc: 'Escape',
            Spacebar: ' ',
            Left: 'ArrowLeft',
            Up: 'ArrowUp',
            Right: 'ArrowRight',
            Down: 'ArrowDown',
            Del: 'Delete',
            Win: 'OS',
            Menu: 'ContextMenu',
            Apps: 'ContextMenu',
            Scroll: 'ScrollLock',
            MozPrintableKey: 'Unidentified',
        },
        z1 = {
            8: 'Backspace',
            9: 'Tab',
            12: 'Clear',
            13: 'Enter',
            16: 'Shift',
            17: 'Control',
            18: 'Alt',
            19: 'Pause',
            20: 'CapsLock',
            27: 'Escape',
            32: ' ',
            33: 'PageUp',
            34: 'PageDown',
            35: 'End',
            36: 'Home',
            37: 'ArrowLeft',
            38: 'ArrowUp',
            39: 'ArrowRight',
            40: 'ArrowDown',
            45: 'Insert',
            46: 'Delete',
            112: 'F1',
            113: 'F2',
            114: 'F3',
            115: 'F4',
            116: 'F5',
            117: 'F6',
            118: 'F7',
            119: 'F8',
            120: 'F9',
            121: 'F10',
            122: 'F11',
            123: 'F12',
            144: 'NumLock',
            145: 'ScrollLock',
            224: 'Meta',
        },
        D1 = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
    function L1(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : (e = D1[e]) ? !!t[e] : !1;
    }
    function La() {
        return L1;
    }
    var j1 = k({}, wl, {
            key: function (e) {
                if (e.key) {
                    var t = R1[e.key] || e.key;
                    if (t !== 'Unidentified') return t;
                }
                return e.type === 'keypress'
                    ? ((e = As(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
                    : e.type === 'keydown' || e.type === 'keyup'
                    ? z1[e.keyCode] || 'Unidentified'
                    : '';
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: La,
            charCode: function (e) {
                return e.type === 'keypress' ? As(e) : 0;
            },
            keyCode: function (e) {
                return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
            },
            which: function (e) {
                return e.type === 'keypress'
                    ? As(e)
                    : e.type === 'keydown' || e.type === 'keyup'
                    ? e.keyCode
                    : 0;
            },
        }),
        A1 = Fn(j1),
        F1 = k({}, Is, {
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
        Ld = Fn(F1),
        I1 = k({}, wl, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: La,
        }),
        B1 = Fn(I1),
        U1 = k({}, Eo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
        V1 = Fn(U1),
        $1 = k({}, Is, {
            deltaX: function (e) {
                return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
            },
            deltaY: function (e) {
                return 'deltaY' in e
                    ? e.deltaY
                    : 'wheelDeltaY' in e
                    ? -e.wheelDeltaY
                    : 'wheelDelta' in e
                    ? -e.wheelDelta
                    : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
        }),
        W1 = Fn($1),
        Y1 = [9, 13, 27, 32],
        ja = d && 'CompositionEvent' in window,
        kl = null;
    d && 'documentMode' in document && (kl = document.documentMode);
    var H1 = d && 'TextEvent' in window && !kl,
        jd = d && (!ja || (kl && 8 < kl && 11 >= kl)),
        Ad = ' ',
        Fd = !1;
    function Id(e, t) {
        switch (e) {
            case 'keyup':
                return Y1.indexOf(t.keyCode) !== -1;
            case 'keydown':
                return t.keyCode !== 229;
            case 'keypress':
            case 'mousedown':
            case 'focusout':
                return !0;
            default:
                return !1;
        }
    }
    function Bd(e) {
        return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
    }
    var Po = !1;
    function X1(e, t) {
        switch (e) {
            case 'compositionend':
                return Bd(t);
            case 'keypress':
                return t.which !== 32 ? null : ((Fd = !0), Ad);
            case 'textInput':
                return (e = t.data), e === Ad && Fd ? null : e;
            default:
                return null;
        }
    }
    function Q1(e, t) {
        if (Po)
            return e === 'compositionend' || (!ja && Id(e, t))
                ? ((e = Md()), (js = Na = fi = null), (Po = !1), e)
                : null;
        switch (e) {
            case 'paste':
                return null;
            case 'keypress':
                if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
                    if (t.char && 1 < t.char.length) return t.char;
                    if (t.which) return String.fromCharCode(t.which);
                }
                return null;
            case 'compositionend':
                return jd && t.locale !== 'ko' ? null : t.data;
            default:
                return null;
        }
    }
    var G1 = {
        color: !0,
        date: !0,
        datetime: !0,
        'datetime-local': !0,
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
    function Ud(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === 'input' ? !!G1[e.type] : t === 'textarea';
    }
    function Vd(e, t, r, s) {
        Pr(s),
            (t = Ws(t, 'onChange')),
            0 < t.length &&
                ((r = new Ma('onChange', 'change', null, r, s)),
                e.push({ event: r, listeners: t }));
    }
    var Cl = null,
        Tl = null;
    function K1(e) {
        op(e, 0);
    }
    function Bs(e) {
        var t = zo(e);
        if (_n(t)) return e;
    }
    function q1(e, t) {
        if (e === 'change') return t;
    }
    var $d = !1;
    if (d) {
        var Aa;
        if (d) {
            var Fa = 'oninput' in document;
            if (!Fa) {
                var Wd = document.createElement('div');
                Wd.setAttribute('oninput', 'return;'), (Fa = typeof Wd.oninput == 'function');
            }
            Aa = Fa;
        } else Aa = !1;
        $d = Aa && (!document.documentMode || 9 < document.documentMode);
    }
    function Yd() {
        Cl && (Cl.detachEvent('onpropertychange', Hd), (Tl = Cl = null));
    }
    function Hd(e) {
        if (e.propertyName === 'value' && Bs(Tl)) {
            var t = [];
            Vd(t, Tl, e, Ee(e)), ue(K1, t);
        }
    }
    function Z1(e, t, r) {
        e === 'focusin'
            ? (Yd(), (Cl = t), (Tl = r), Cl.attachEvent('onpropertychange', Hd))
            : e === 'focusout' && Yd();
    }
    function b1(e) {
        if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return Bs(Tl);
    }
    function J1(e, t) {
        if (e === 'click') return Bs(t);
    }
    function eg(e, t) {
        if (e === 'input' || e === 'change') return Bs(t);
    }
    function tg(e, t) {
        return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
    }
    var _r = typeof Object.is == 'function' ? Object.is : tg;
    function El(e, t) {
        if (_r(e, t)) return !0;
        if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
        var r = Object.keys(e),
            s = Object.keys(t);
        if (r.length !== s.length) return !1;
        for (s = 0; s < r.length; s++) {
            var a = r[s];
            if (!h.call(t, a) || !_r(e[a], t[a])) return !1;
        }
        return !0;
    }
    function Xd(e) {
        for (; e && e.firstChild; ) e = e.firstChild;
        return e;
    }
    function Qd(e, t) {
        var r = Xd(e);
        e = 0;
        for (var s; r; ) {
            if (r.nodeType === 3) {
                if (((s = e + r.textContent.length), e <= t && s >= t))
                    return { node: r, offset: t - e };
                e = s;
            }
            e: {
                for (; r; ) {
                    if (r.nextSibling) {
                        r = r.nextSibling;
                        break e;
                    }
                    r = r.parentNode;
                }
                r = void 0;
            }
            r = Xd(r);
        }
    }
    function Gd(e, t) {
        return e && t
            ? e === t
                ? !0
                : e && e.nodeType === 3
                ? !1
                : t && t.nodeType === 3
                ? Gd(e, t.parentNode)
                : 'contains' in e
                ? e.contains(t)
                : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
            : !1;
    }
    function Kd() {
        for (var e = window, t = Re(); t instanceof e.HTMLIFrameElement; ) {
            try {
                var r = typeof t.contentWindow.location.href == 'string';
            } catch {
                r = !1;
            }
            if (r) e = t.contentWindow;
            else break;
            t = Re(e.document);
        }
        return t;
    }
    function Ia(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return (
            t &&
            ((t === 'input' &&
                (e.type === 'text' ||
                    e.type === 'search' ||
                    e.type === 'tel' ||
                    e.type === 'url' ||
                    e.type === 'password')) ||
                t === 'textarea' ||
                e.contentEditable === 'true')
        );
    }
    function ng(e) {
        var t = Kd(),
            r = e.focusedElem,
            s = e.selectionRange;
        if (t !== r && r && r.ownerDocument && Gd(r.ownerDocument.documentElement, r)) {
            if (s !== null && Ia(r)) {
                if (((t = s.start), (e = s.end), e === void 0 && (e = t), 'selectionStart' in r))
                    (r.selectionStart = t), (r.selectionEnd = Math.min(e, r.value.length));
                else if (
                    ((e = ((t = r.ownerDocument || document) && t.defaultView) || window),
                    e.getSelection)
                ) {
                    e = e.getSelection();
                    var a = r.textContent.length,
                        p = Math.min(s.start, a);
                    (s = s.end === void 0 ? p : Math.min(s.end, a)),
                        !e.extend && p > s && ((a = s), (s = p), (p = a)),
                        (a = Qd(r, p));
                    var m = Qd(r, s);
                    a &&
                        m &&
                        (e.rangeCount !== 1 ||
                            e.anchorNode !== a.node ||
                            e.anchorOffset !== a.offset ||
                            e.focusNode !== m.node ||
                            e.focusOffset !== m.offset) &&
                        ((t = t.createRange()),
                        t.setStart(a.node, a.offset),
                        e.removeAllRanges(),
                        p > s
                            ? (e.addRange(t), e.extend(m.node, m.offset))
                            : (t.setEnd(m.node, m.offset), e.addRange(t)));
                }
            }
            for (t = [], e = r; (e = e.parentNode); )
                e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (typeof r.focus == 'function' && r.focus(), r = 0; r < t.length; r++)
                (e = t[r]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top);
        }
    }
    var rg = d && 'documentMode' in document && 11 >= document.documentMode,
        Oo = null,
        Ba = null,
        Pl = null,
        Ua = !1;
    function qd(e, t, r) {
        var s = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
        Ua ||
            Oo == null ||
            Oo !== Re(s) ||
            ((s = Oo),
            'selectionStart' in s && Ia(s)
                ? (s = { start: s.selectionStart, end: s.selectionEnd })
                : ((s = (
                      (s.ownerDocument && s.ownerDocument.defaultView) ||
                      window
                  ).getSelection()),
                  (s = {
                      anchorNode: s.anchorNode,
                      anchorOffset: s.anchorOffset,
                      focusNode: s.focusNode,
                      focusOffset: s.focusOffset,
                  })),
            (Pl && El(Pl, s)) ||
                ((Pl = s),
                (s = Ws(Ba, 'onSelect')),
                0 < s.length &&
                    ((t = new Ma('onSelect', 'select', null, t, r)),
                    e.push({ event: t, listeners: s }),
                    (t.target = Oo))));
    }
    function Us(e, t) {
        var r = {};
        return (
            (r[e.toLowerCase()] = t.toLowerCase()),
            (r['Webkit' + e] = 'webkit' + t),
            (r['Moz' + e] = 'moz' + t),
            r
        );
    }
    var No = {
            animationend: Us('Animation', 'AnimationEnd'),
            animationiteration: Us('Animation', 'AnimationIteration'),
            animationstart: Us('Animation', 'AnimationStart'),
            transitionend: Us('Transition', 'TransitionEnd'),
        },
        Va = {},
        Zd = {};
    d &&
        ((Zd = document.createElement('div').style),
        'AnimationEvent' in window ||
            (delete No.animationend.animation,
            delete No.animationiteration.animation,
            delete No.animationstart.animation),
        'TransitionEvent' in window || delete No.transitionend.transition);
    function Vs(e) {
        if (Va[e]) return Va[e];
        if (!No[e]) return e;
        var t = No[e],
            r;
        for (r in t) if (t.hasOwnProperty(r) && r in Zd) return (Va[e] = t[r]);
        return e;
    }
    var bd = Vs('animationend'),
        Jd = Vs('animationiteration'),
        ep = Vs('animationstart'),
        tp = Vs('transitionend'),
        np = new Map(),
        rp =
            'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
                ' ',
            );
    function di(e, t) {
        np.set(e, t), u(t, [e]);
    }
    for (var $a = 0; $a < rp.length; $a++) {
        var Wa = rp[$a],
            ig = Wa.toLowerCase(),
            og = Wa[0].toUpperCase() + Wa.slice(1);
        di(ig, 'on' + og);
    }
    di(bd, 'onAnimationEnd'),
        di(Jd, 'onAnimationIteration'),
        di(ep, 'onAnimationStart'),
        di('dblclick', 'onDoubleClick'),
        di('focusin', 'onFocus'),
        di('focusout', 'onBlur'),
        di(tp, 'onTransitionEnd'),
        c('onMouseEnter', ['mouseout', 'mouseover']),
        c('onMouseLeave', ['mouseout', 'mouseover']),
        c('onPointerEnter', ['pointerout', 'pointerover']),
        c('onPointerLeave', ['pointerout', 'pointerover']),
        u(
            'onChange',
            'change click focusin focusout input keydown keyup selectionchange'.split(' '),
        ),
        u(
            'onSelect',
            'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
                ' ',
            ),
        ),
        u('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
        u(
            'onCompositionEnd',
            'compositionend focusout keydown keypress keyup mousedown'.split(' '),
        ),
        u(
            'onCompositionStart',
            'compositionstart focusout keydown keypress keyup mousedown'.split(' '),
        ),
        u(
            'onCompositionUpdate',
            'compositionupdate focusout keydown keypress keyup mousedown'.split(' '),
        );
    var Ol =
            'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
                ' ',
            ),
        lg = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Ol));
    function ip(e, t, r) {
        var s = e.type || 'unknown-event';
        (e.currentTarget = r), Ye(s, t, void 0, e), (e.currentTarget = null);
    }
    function op(e, t) {
        t = (t & 4) !== 0;
        for (var r = 0; r < e.length; r++) {
            var s = e[r],
                a = s.event;
            s = s.listeners;
            e: {
                var p = void 0;
                if (t)
                    for (var m = s.length - 1; 0 <= m; m--) {
                        var S = s[m],
                            C = S.instance,
                            z = S.currentTarget;
                        if (((S = S.listener), C !== p && a.isPropagationStopped())) break e;
                        ip(a, S, z), (p = C);
                    }
                else
                    for (m = 0; m < s.length; m++) {
                        if (
                            ((S = s[m]),
                            (C = S.instance),
                            (z = S.currentTarget),
                            (S = S.listener),
                            C !== p && a.isPropagationStopped())
                        )
                            break e;
                        ip(a, S, z), (p = C);
                    }
            }
        }
        if (Pe) throw ((e = qe), (Pe = !1), (qe = null), e);
    }
    function Ze(e, t) {
        var r = t[Za];
        r === void 0 && (r = t[Za] = new Set());
        var s = e + '__bubble';
        r.has(s) || (lp(t, e, 2, !1), r.add(s));
    }
    function Ya(e, t, r) {
        var s = 0;
        t && (s |= 4), lp(r, e, s, t);
    }
    var $s = '_reactListening' + Math.random().toString(36).slice(2);
    function Nl(e) {
        if (!e[$s]) {
            (e[$s] = !0),
                o.forEach(function (r) {
                    r !== 'selectionchange' && (lg.has(r) || Ya(r, !1, e), Ya(r, !0, e));
                });
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[$s] || ((t[$s] = !0), Ya('selectionchange', !1, t));
        }
    }
    function lp(e, t, r, s) {
        switch (Nd(t)) {
            case 1:
                var a = x1;
                break;
            case 4:
                a = w1;
                break;
            default:
                a = Pa;
        }
        (r = a.bind(null, t, r, e)),
            (a = void 0),
            !Z || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (a = !0),
            s
                ? a !== void 0
                    ? e.addEventListener(t, r, { capture: !0, passive: a })
                    : e.addEventListener(t, r, !0)
                : a !== void 0
                ? e.addEventListener(t, r, { passive: a })
                : e.addEventListener(t, r, !1);
    }
    function Ha(e, t, r, s, a) {
        var p = s;
        if (!(t & 1) && !(t & 2) && s !== null)
            e: for (;;) {
                if (s === null) return;
                var m = s.tag;
                if (m === 3 || m === 4) {
                    var S = s.stateNode.containerInfo;
                    if (S === a || (S.nodeType === 8 && S.parentNode === a)) break;
                    if (m === 4)
                        for (m = s.return; m !== null; ) {
                            var C = m.tag;
                            if (
                                (C === 3 || C === 4) &&
                                ((C = m.stateNode.containerInfo),
                                C === a || (C.nodeType === 8 && C.parentNode === a))
                            )
                                return;
                            m = m.return;
                        }
                    for (; S !== null; ) {
                        if (((m = Wi(S)), m === null)) return;
                        if (((C = m.tag), C === 5 || C === 6)) {
                            s = p = m;
                            continue e;
                        }
                        S = S.parentNode;
                    }
                }
                s = s.return;
            }
        ue(function () {
            var z = p,
                H = Ee(r),
                G = [];
            e: {
                var Y = np.get(e);
                if (Y !== void 0) {
                    var J = Ma,
                        re = e;
                    switch (e) {
                        case 'keypress':
                            if (As(r) === 0) break e;
                        case 'keydown':
                        case 'keyup':
                            J = A1;
                            break;
                        case 'focusin':
                            (re = 'focus'), (J = Da);
                            break;
                        case 'focusout':
                            (re = 'blur'), (J = Da);
                            break;
                        case 'beforeblur':
                        case 'afterblur':
                            J = Da;
                            break;
                        case 'click':
                            if (r.button === 2) break e;
                        case 'auxclick':
                        case 'dblclick':
                        case 'mousedown':
                        case 'mousemove':
                        case 'mouseup':
                        case 'mouseout':
                        case 'mouseover':
                        case 'contextmenu':
                            J = zd;
                            break;
                        case 'drag':
                        case 'dragend':
                        case 'dragenter':
                        case 'dragexit':
                        case 'dragleave':
                        case 'dragover':
                        case 'dragstart':
                        case 'drop':
                            J = C1;
                            break;
                        case 'touchcancel':
                        case 'touchend':
                        case 'touchmove':
                        case 'touchstart':
                            J = B1;
                            break;
                        case bd:
                        case Jd:
                        case ep:
                            J = P1;
                            break;
                        case tp:
                            J = V1;
                            break;
                        case 'scroll':
                            J = S1;
                            break;
                        case 'wheel':
                            J = W1;
                            break;
                        case 'copy':
                        case 'cut':
                        case 'paste':
                            J = N1;
                            break;
                        case 'gotpointercapture':
                        case 'lostpointercapture':
                        case 'pointercancel':
                        case 'pointerdown':
                        case 'pointermove':
                        case 'pointerout':
                        case 'pointerover':
                        case 'pointerup':
                            J = Ld;
                    }
                    var ie = (t & 4) !== 0,
                        mt = !ie && e === 'scroll',
                        N = ie ? (Y !== null ? Y + 'Capture' : null) : Y;
                    ie = [];
                    for (var P = z, M; P !== null; ) {
                        M = P;
                        var K = M.stateNode;
                        if (
                            (M.tag === 5 &&
                                K !== null &&
                                ((M = K),
                                N !== null && ((K = ze(P, N)), K != null && ie.push(Ml(P, K, M)))),
                            mt)
                        )
                            break;
                        P = P.return;
                    }
                    0 < ie.length &&
                        ((Y = new J(Y, re, null, r, H)), G.push({ event: Y, listeners: ie }));
                }
            }
            if (!(t & 7)) {
                e: {
                    if (
                        ((Y = e === 'mouseover' || e === 'pointerover'),
                        (J = e === 'mouseout' || e === 'pointerout'),
                        Y &&
                            r !== hr &&
                            (re = r.relatedTarget || r.fromElement) &&
                            (Wi(re) || re[Yr]))
                    )
                        break e;
                    if (
                        (J || Y) &&
                        ((Y =
                            H.window === H
                                ? H
                                : (Y = H.ownerDocument)
                                ? Y.defaultView || Y.parentWindow
                                : window),
                        J
                            ? ((re = r.relatedTarget || r.toElement),
                              (J = z),
                              (re = re ? Wi(re) : null),
                              re !== null &&
                                  ((mt = je(re)), re !== mt || (re.tag !== 5 && re.tag !== 6)) &&
                                  (re = null))
                            : ((J = null), (re = z)),
                        J !== re)
                    ) {
                        if (
                            ((ie = zd),
                            (K = 'onMouseLeave'),
                            (N = 'onMouseEnter'),
                            (P = 'mouse'),
                            (e === 'pointerout' || e === 'pointerover') &&
                                ((ie = Ld),
                                (K = 'onPointerLeave'),
                                (N = 'onPointerEnter'),
                                (P = 'pointer')),
                            (mt = J == null ? Y : zo(J)),
                            (M = re == null ? Y : zo(re)),
                            (Y = new ie(K, P + 'leave', J, r, H)),
                            (Y.target = mt),
                            (Y.relatedTarget = M),
                            (K = null),
                            Wi(H) === z &&
                                ((ie = new ie(N, P + 'enter', re, r, H)),
                                (ie.target = M),
                                (ie.relatedTarget = mt),
                                (K = ie)),
                            (mt = K),
                            J && re)
                        )
                            t: {
                                for (ie = J, N = re, P = 0, M = ie; M; M = Mo(M)) P++;
                                for (M = 0, K = N; K; K = Mo(K)) M++;
                                for (; 0 < P - M; ) (ie = Mo(ie)), P--;
                                for (; 0 < M - P; ) (N = Mo(N)), M--;
                                for (; P--; ) {
                                    if (ie === N || (N !== null && ie === N.alternate)) break t;
                                    (ie = Mo(ie)), (N = Mo(N));
                                }
                                ie = null;
                            }
                        else ie = null;
                        J !== null && sp(G, Y, J, ie, !1),
                            re !== null && mt !== null && sp(G, mt, re, ie, !0);
                    }
                }
                e: {
                    if (
                        ((Y = z ? zo(z) : window),
                        (J = Y.nodeName && Y.nodeName.toLowerCase()),
                        J === 'select' || (J === 'input' && Y.type === 'file'))
                    )
                        var le = q1;
                    else if (Ud(Y))
                        if ($d) le = eg;
                        else {
                            le = b1;
                            var ae = Z1;
                        }
                    else
                        (J = Y.nodeName) &&
                            J.toLowerCase() === 'input' &&
                            (Y.type === 'checkbox' || Y.type === 'radio') &&
                            (le = J1);
                    if (le && (le = le(e, z))) {
                        Vd(G, le, r, H);
                        break e;
                    }
                    ae && ae(e, Y, z),
                        e === 'focusout' &&
                            (ae = Y._wrapperState) &&
                            ae.controlled &&
                            Y.type === 'number' &&
                            Ln(Y, 'number', Y.value);
                }
                switch (((ae = z ? zo(z) : window), e)) {
                    case 'focusin':
                        (Ud(ae) || ae.contentEditable === 'true') &&
                            ((Oo = ae), (Ba = z), (Pl = null));
                        break;
                    case 'focusout':
                        Pl = Ba = Oo = null;
                        break;
                    case 'mousedown':
                        Ua = !0;
                        break;
                    case 'contextmenu':
                    case 'mouseup':
                    case 'dragend':
                        (Ua = !1), qd(G, r, H);
                        break;
                    case 'selectionchange':
                        if (rg) break;
                    case 'keydown':
                    case 'keyup':
                        qd(G, r, H);
                }
                var ce;
                if (ja)
                    e: {
                        switch (e) {
                            case 'compositionstart':
                                var we = 'onCompositionStart';
                                break e;
                            case 'compositionend':
                                we = 'onCompositionEnd';
                                break e;
                            case 'compositionupdate':
                                we = 'onCompositionUpdate';
                                break e;
                        }
                        we = void 0;
                    }
                else
                    Po
                        ? Id(e, r) && (we = 'onCompositionEnd')
                        : e === 'keydown' && r.keyCode === 229 && (we = 'onCompositionStart');
                we &&
                    (jd &&
                        r.locale !== 'ko' &&
                        (Po || we !== 'onCompositionStart'
                            ? we === 'onCompositionEnd' && Po && (ce = Md())
                            : ((fi = H),
                              (Na = 'value' in fi ? fi.value : fi.textContent),
                              (Po = !0))),
                    (ae = Ws(z, we)),
                    0 < ae.length &&
                        ((we = new Dd(we, e, null, r, H)),
                        G.push({ event: we, listeners: ae }),
                        ce ? (we.data = ce) : ((ce = Bd(r)), ce !== null && (we.data = ce)))),
                    (ce = H1 ? X1(e, r) : Q1(e, r)) &&
                        ((z = Ws(z, 'onBeforeInput')),
                        0 < z.length &&
                            ((H = new Dd('onBeforeInput', 'beforeinput', null, r, H)),
                            G.push({ event: H, listeners: z }),
                            (H.data = ce)));
            }
            op(G, t);
        });
    }
    function Ml(e, t, r) {
        return { instance: e, listener: t, currentTarget: r };
    }
    function Ws(e, t) {
        for (var r = t + 'Capture', s = []; e !== null; ) {
            var a = e,
                p = a.stateNode;
            a.tag === 5 &&
                p !== null &&
                ((a = p),
                (p = ze(e, r)),
                p != null && s.unshift(Ml(e, p, a)),
                (p = ze(e, t)),
                p != null && s.push(Ml(e, p, a))),
                (e = e.return);
        }
        return s;
    }
    function Mo(e) {
        if (e === null) return null;
        do e = e.return;
        while (e && e.tag !== 5);
        return e || null;
    }
    function sp(e, t, r, s, a) {
        for (var p = t._reactName, m = []; r !== null && r !== s; ) {
            var S = r,
                C = S.alternate,
                z = S.stateNode;
            if (C !== null && C === s) break;
            S.tag === 5 &&
                z !== null &&
                ((S = z),
                a
                    ? ((C = ze(r, p)), C != null && m.unshift(Ml(r, C, S)))
                    : a || ((C = ze(r, p)), C != null && m.push(Ml(r, C, S)))),
                (r = r.return);
        }
        m.length !== 0 && e.push({ event: t, listeners: m });
    }
    var sg = /\r\n?/g,
        ug = /\u0000|\uFFFD/g;
    function up(e) {
        return (typeof e == 'string' ? e : '' + e)
            .replace(
                sg,
                `
`,
            )
            .replace(ug, '');
    }
    function Ys(e, t, r) {
        if (((t = up(t)), up(e) !== t && r)) throw Error(i(425));
    }
    function Hs() {}
    var Xa = null,
        Qa = null;
    function Ga(e, t) {
        return (
            e === 'textarea' ||
            e === 'noscript' ||
            typeof t.children == 'string' ||
            typeof t.children == 'number' ||
            (typeof t.dangerouslySetInnerHTML == 'object' &&
                t.dangerouslySetInnerHTML !== null &&
                t.dangerouslySetInnerHTML.__html != null)
        );
    }
    var Ka = typeof setTimeout == 'function' ? setTimeout : void 0,
        ag = typeof clearTimeout == 'function' ? clearTimeout : void 0,
        ap = typeof Promise == 'function' ? Promise : void 0,
        cg =
            typeof queueMicrotask == 'function'
                ? queueMicrotask
                : typeof ap < 'u'
                ? function (e) {
                      return ap.resolve(null).then(e).catch(fg);
                  }
                : Ka;
    function fg(e) {
        setTimeout(function () {
            throw e;
        });
    }
    function qa(e, t) {
        var r = t,
            s = 0;
        do {
            var a = r.nextSibling;
            if ((e.removeChild(r), a && a.nodeType === 8))
                if (((r = a.data), r === '/$')) {
                    if (s === 0) {
                        e.removeChild(a), xl(t);
                        return;
                    }
                    s--;
                } else (r !== '$' && r !== '$?' && r !== '$!') || s++;
            r = a;
        } while (r);
        xl(t);
    }
    function pi(e) {
        for (; e != null; e = e.nextSibling) {
            var t = e.nodeType;
            if (t === 1 || t === 3) break;
            if (t === 8) {
                if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
                if (t === '/$') return null;
            }
        }
        return e;
    }
    function cp(e) {
        e = e.previousSibling;
        for (var t = 0; e; ) {
            if (e.nodeType === 8) {
                var r = e.data;
                if (r === '$' || r === '$!' || r === '$?') {
                    if (t === 0) return e;
                    t--;
                } else r === '/$' && t++;
            }
            e = e.previousSibling;
        }
        return null;
    }
    var Ro = Math.random().toString(36).slice(2),
        Nr = '__reactFiber$' + Ro,
        Rl = '__reactProps$' + Ro,
        Yr = '__reactContainer$' + Ro,
        Za = '__reactEvents$' + Ro,
        dg = '__reactListeners$' + Ro,
        pg = '__reactHandles$' + Ro;
    function Wi(e) {
        var t = e[Nr];
        if (t) return t;
        for (var r = e.parentNode; r; ) {
            if ((t = r[Yr] || r[Nr])) {
                if (((r = t.alternate), t.child !== null || (r !== null && r.child !== null)))
                    for (e = cp(e); e !== null; ) {
                        if ((r = e[Nr])) return r;
                        e = cp(e);
                    }
                return t;
            }
            (e = r), (r = e.parentNode);
        }
        return null;
    }
    function zl(e) {
        return (
            (e = e[Nr] || e[Yr]),
            !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
        );
    }
    function zo(e) {
        if (e.tag === 5 || e.tag === 6) return e.stateNode;
        throw Error(i(33));
    }
    function Xs(e) {
        return e[Rl] || null;
    }
    var ba = [],
        Do = -1;
    function hi(e) {
        return { current: e };
    }
    function be(e) {
        0 > Do || ((e.current = ba[Do]), (ba[Do] = null), Do--);
    }
    function Xe(e, t) {
        Do++, (ba[Do] = e.current), (e.current = t);
    }
    var mi = {},
        Xt = hi(mi),
        Sn = hi(!1),
        Yi = mi;
    function Lo(e, t) {
        var r = e.type.contextTypes;
        if (!r) return mi;
        var s = e.stateNode;
        if (s && s.__reactInternalMemoizedUnmaskedChildContext === t)
            return s.__reactInternalMemoizedMaskedChildContext;
        var a = {},
            p;
        for (p in r) a[p] = t[p];
        return (
            s &&
                ((e = e.stateNode),
                (e.__reactInternalMemoizedUnmaskedChildContext = t),
                (e.__reactInternalMemoizedMaskedChildContext = a)),
            a
        );
    }
    function kn(e) {
        return (e = e.childContextTypes), e != null;
    }
    function Qs() {
        be(Sn), be(Xt);
    }
    function fp(e, t, r) {
        if (Xt.current !== mi) throw Error(i(168));
        Xe(Xt, t), Xe(Sn, r);
    }
    function dp(e, t, r) {
        var s = e.stateNode;
        if (((t = t.childContextTypes), typeof s.getChildContext != 'function')) return r;
        s = s.getChildContext();
        for (var a in s) if (!(a in t)) throw Error(i(108, xe(e) || 'Unknown', a));
        return k({}, r, s);
    }
    function Gs(e) {
        return (
            (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || mi),
            (Yi = Xt.current),
            Xe(Xt, e),
            Xe(Sn, Sn.current),
            !0
        );
    }
    function pp(e, t, r) {
        var s = e.stateNode;
        if (!s) throw Error(i(169));
        r
            ? ((e = dp(e, t, Yi)),
              (s.__reactInternalMemoizedMergedChildContext = e),
              be(Sn),
              be(Xt),
              Xe(Xt, e))
            : be(Sn),
            Xe(Sn, r);
    }
    var Hr = null,
        Ks = !1,
        Ja = !1;
    function hp(e) {
        Hr === null ? (Hr = [e]) : Hr.push(e);
    }
    function hg(e) {
        (Ks = !0), hp(e);
    }
    function gi() {
        if (!Ja && Hr !== null) {
            Ja = !0;
            var e = 0,
                t = Ve;
            try {
                var r = Hr;
                for (Ve = 1; e < r.length; e++) {
                    var s = r[e];
                    do s = s(!0);
                    while (s !== null);
                }
                (Hr = null), (Ks = !1);
            } catch (a) {
                throw (Hr !== null && (Hr = Hr.slice(e + 1)), xt(wn, gi), a);
            } finally {
                (Ve = t), (Ja = !1);
            }
        }
        return null;
    }
    var jo = [],
        Ao = 0,
        qs = null,
        Zs = 0,
        bn = [],
        Jn = 0,
        Hi = null,
        Xr = 1,
        Qr = '';
    function Xi(e, t) {
        (jo[Ao++] = Zs), (jo[Ao++] = qs), (qs = e), (Zs = t);
    }
    function mp(e, t, r) {
        (bn[Jn++] = Xr), (bn[Jn++] = Qr), (bn[Jn++] = Hi), (Hi = e);
        var s = Xr;
        e = Qr;
        var a = 32 - gr(s) - 1;
        (s &= ~(1 << a)), (r += 1);
        var p = 32 - gr(t) + a;
        if (30 < p) {
            var m = a - (a % 5);
            (p = (s & ((1 << m) - 1)).toString(32)),
                (s >>= m),
                (a -= m),
                (Xr = (1 << (32 - gr(t) + a)) | (r << a) | s),
                (Qr = p + e);
        } else (Xr = (1 << p) | (r << a) | s), (Qr = e);
    }
    function ec(e) {
        e.return !== null && (Xi(e, 1), mp(e, 1, 0));
    }
    function tc(e) {
        for (; e === qs; ) (qs = jo[--Ao]), (jo[Ao] = null), (Zs = jo[--Ao]), (jo[Ao] = null);
        for (; e === Hi; )
            (Hi = bn[--Jn]),
                (bn[Jn] = null),
                (Qr = bn[--Jn]),
                (bn[Jn] = null),
                (Xr = bn[--Jn]),
                (bn[Jn] = null);
    }
    var In = null,
        Bn = null,
        tt = !1,
        vr = null;
    function gp(e, t) {
        var r = rr(5, null, null, 0);
        (r.elementType = 'DELETED'),
            (r.stateNode = t),
            (r.return = e),
            (t = e.deletions),
            t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r);
    }
    function _p(e, t) {
        switch (e.tag) {
            case 5:
                var r = e.type;
                return (
                    (t =
                        t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase()
                            ? null
                            : t),
                    t !== null ? ((e.stateNode = t), (In = e), (Bn = pi(t.firstChild)), !0) : !1
                );
            case 6:
                return (
                    (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
                    t !== null ? ((e.stateNode = t), (In = e), (Bn = null), !0) : !1
                );
            case 13:
                return (
                    (t = t.nodeType !== 8 ? null : t),
                    t !== null
                        ? ((r = Hi !== null ? { id: Xr, overflow: Qr } : null),
                          (e.memoizedState = {
                              dehydrated: t,
                              treeContext: r,
                              retryLane: 1073741824,
                          }),
                          (r = rr(18, null, null, 0)),
                          (r.stateNode = t),
                          (r.return = e),
                          (e.child = r),
                          (In = e),
                          (Bn = null),
                          !0)
                        : !1
                );
            default:
                return !1;
        }
    }
    function nc(e) {
        return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
    }
    function rc(e) {
        if (tt) {
            var t = Bn;
            if (t) {
                var r = t;
                if (!_p(e, t)) {
                    if (nc(e)) throw Error(i(418));
                    t = pi(r.nextSibling);
                    var s = In;
                    t && _p(e, t)
                        ? gp(s, r)
                        : ((e.flags = (e.flags & -4097) | 2), (tt = !1), (In = e));
                }
            } else {
                if (nc(e)) throw Error(i(418));
                (e.flags = (e.flags & -4097) | 2), (tt = !1), (In = e);
            }
        }
    }
    function vp(e) {
        for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
        In = e;
    }
    function bs(e) {
        if (e !== In) return !1;
        if (!tt) return vp(e), (tt = !0), !1;
        var t;
        if (
            ((t = e.tag !== 3) &&
                !(t = e.tag !== 5) &&
                ((t = e.type), (t = t !== 'head' && t !== 'body' && !Ga(e.type, e.memoizedProps))),
            t && (t = Bn))
        ) {
            if (nc(e)) throw (yp(), Error(i(418)));
            for (; t; ) gp(e, t), (t = pi(t.nextSibling));
        }
        if ((vp(e), e.tag === 13)) {
            if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
                throw Error(i(317));
            e: {
                for (e = e.nextSibling, t = 0; e; ) {
                    if (e.nodeType === 8) {
                        var r = e.data;
                        if (r === '/$') {
                            if (t === 0) {
                                Bn = pi(e.nextSibling);
                                break e;
                            }
                            t--;
                        } else (r !== '$' && r !== '$!' && r !== '$?') || t++;
                    }
                    e = e.nextSibling;
                }
                Bn = null;
            }
        } else Bn = In ? pi(e.stateNode.nextSibling) : null;
        return !0;
    }
    function yp() {
        for (var e = Bn; e; ) e = pi(e.nextSibling);
    }
    function Fo() {
        (Bn = In = null), (tt = !1);
    }
    function ic(e) {
        vr === null ? (vr = [e]) : vr.push(e);
    }
    var mg = D.ReactCurrentBatchConfig;
    function Dl(e, t, r) {
        if (((e = r.ref), e !== null && typeof e != 'function' && typeof e != 'object')) {
            if (r._owner) {
                if (((r = r._owner), r)) {
                    if (r.tag !== 1) throw Error(i(309));
                    var s = r.stateNode;
                }
                if (!s) throw Error(i(147, e));
                var a = s,
                    p = '' + e;
                return t !== null &&
                    t.ref !== null &&
                    typeof t.ref == 'function' &&
                    t.ref._stringRef === p
                    ? t.ref
                    : ((t = function (m) {
                          var S = a.refs;
                          m === null ? delete S[p] : (S[p] = m);
                      }),
                      (t._stringRef = p),
                      t);
            }
            if (typeof e != 'string') throw Error(i(284));
            if (!r._owner) throw Error(i(290, e));
        }
        return e;
    }
    function Js(e, t) {
        throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
                i(
                    31,
                    e === '[object Object]'
                        ? 'object with keys {' + Object.keys(t).join(', ') + '}'
                        : e,
                ),
            ))
        );
    }
    function xp(e) {
        var t = e._init;
        return t(e._payload);
    }
    function wp(e) {
        function t(N, P) {
            if (e) {
                var M = N.deletions;
                M === null ? ((N.deletions = [P]), (N.flags |= 16)) : M.push(P);
            }
        }
        function r(N, P) {
            if (!e) return null;
            for (; P !== null; ) t(N, P), (P = P.sibling);
            return null;
        }
        function s(N, P) {
            for (N = new Map(); P !== null; )
                P.key !== null ? N.set(P.key, P) : N.set(P.index, P), (P = P.sibling);
            return N;
        }
        function a(N, P) {
            return (N = Ci(N, P)), (N.index = 0), (N.sibling = null), N;
        }
        function p(N, P, M) {
            return (
                (N.index = M),
                e
                    ? ((M = N.alternate),
                      M !== null
                          ? ((M = M.index), M < P ? ((N.flags |= 2), P) : M)
                          : ((N.flags |= 2), P))
                    : ((N.flags |= 1048576), P)
            );
        }
        function m(N) {
            return e && N.alternate === null && (N.flags |= 2), N;
        }
        function S(N, P, M, K) {
            return P === null || P.tag !== 6
                ? ((P = Kc(M, N.mode, K)), (P.return = N), P)
                : ((P = a(P, M)), (P.return = N), P);
        }
        function C(N, P, M, K) {
            var le = M.type;
            return le === L
                ? H(N, P, M.props.children, K, M.key)
                : P !== null &&
                  (P.elementType === le ||
                      (typeof le == 'object' &&
                          le !== null &&
                          le.$$typeof === fe &&
                          xp(le) === P.type))
                ? ((K = a(P, M.props)), (K.ref = Dl(N, P, M)), (K.return = N), K)
                : ((K = ku(M.type, M.key, M.props, null, N.mode, K)),
                  (K.ref = Dl(N, P, M)),
                  (K.return = N),
                  K);
        }
        function z(N, P, M, K) {
            return P === null ||
                P.tag !== 4 ||
                P.stateNode.containerInfo !== M.containerInfo ||
                P.stateNode.implementation !== M.implementation
                ? ((P = qc(M, N.mode, K)), (P.return = N), P)
                : ((P = a(P, M.children || [])), (P.return = N), P);
        }
        function H(N, P, M, K, le) {
            return P === null || P.tag !== 7
                ? ((P = eo(M, N.mode, K, le)), (P.return = N), P)
                : ((P = a(P, M)), (P.return = N), P);
        }
        function G(N, P, M) {
            if ((typeof P == 'string' && P !== '') || typeof P == 'number')
                return (P = Kc('' + P, N.mode, M)), (P.return = N), P;
            if (typeof P == 'object' && P !== null) {
                switch (P.$$typeof) {
                    case I:
                        return (
                            (M = ku(P.type, P.key, P.props, null, N.mode, M)),
                            (M.ref = Dl(N, null, P)),
                            (M.return = N),
                            M
                        );
                    case V:
                        return (P = qc(P, N.mode, M)), (P.return = N), P;
                    case fe:
                        var K = P._init;
                        return G(N, K(P._payload), M);
                }
                if (vn(P) || b(P)) return (P = eo(P, N.mode, M, null)), (P.return = N), P;
                Js(N, P);
            }
            return null;
        }
        function Y(N, P, M, K) {
            var le = P !== null ? P.key : null;
            if ((typeof M == 'string' && M !== '') || typeof M == 'number')
                return le !== null ? null : S(N, P, '' + M, K);
            if (typeof M == 'object' && M !== null) {
                switch (M.$$typeof) {
                    case I:
                        return M.key === le ? C(N, P, M, K) : null;
                    case V:
                        return M.key === le ? z(N, P, M, K) : null;
                    case fe:
                        return (le = M._init), Y(N, P, le(M._payload), K);
                }
                if (vn(M) || b(M)) return le !== null ? null : H(N, P, M, K, null);
                Js(N, M);
            }
            return null;
        }
        function J(N, P, M, K, le) {
            if ((typeof K == 'string' && K !== '') || typeof K == 'number')
                return (N = N.get(M) || null), S(P, N, '' + K, le);
            if (typeof K == 'object' && K !== null) {
                switch (K.$$typeof) {
                    case I:
                        return (N = N.get(K.key === null ? M : K.key) || null), C(P, N, K, le);
                    case V:
                        return (N = N.get(K.key === null ? M : K.key) || null), z(P, N, K, le);
                    case fe:
                        var ae = K._init;
                        return J(N, P, M, ae(K._payload), le);
                }
                if (vn(K) || b(K)) return (N = N.get(M) || null), H(P, N, K, le, null);
                Js(P, K);
            }
            return null;
        }
        function re(N, P, M, K) {
            for (
                var le = null, ae = null, ce = P, we = (P = 0), Lt = null;
                ce !== null && we < M.length;
                we++
            ) {
                ce.index > we ? ((Lt = ce), (ce = null)) : (Lt = ce.sibling);
                var Ue = Y(N, ce, M[we], K);
                if (Ue === null) {
                    ce === null && (ce = Lt);
                    break;
                }
                e && ce && Ue.alternate === null && t(N, ce),
                    (P = p(Ue, P, we)),
                    ae === null ? (le = Ue) : (ae.sibling = Ue),
                    (ae = Ue),
                    (ce = Lt);
            }
            if (we === M.length) return r(N, ce), tt && Xi(N, we), le;
            if (ce === null) {
                for (; we < M.length; we++)
                    (ce = G(N, M[we], K)),
                        ce !== null &&
                            ((P = p(ce, P, we)),
                            ae === null ? (le = ce) : (ae.sibling = ce),
                            (ae = ce));
                return tt && Xi(N, we), le;
            }
            for (ce = s(N, ce); we < M.length; we++)
                (Lt = J(ce, N, we, M[we], K)),
                    Lt !== null &&
                        (e && Lt.alternate !== null && ce.delete(Lt.key === null ? we : Lt.key),
                        (P = p(Lt, P, we)),
                        ae === null ? (le = Lt) : (ae.sibling = Lt),
                        (ae = Lt));
            return (
                e &&
                    ce.forEach(function (Ti) {
                        return t(N, Ti);
                    }),
                tt && Xi(N, we),
                le
            );
        }
        function ie(N, P, M, K) {
            var le = b(M);
            if (typeof le != 'function') throw Error(i(150));
            if (((M = le.call(M)), M == null)) throw Error(i(151));
            for (
                var ae = (le = null), ce = P, we = (P = 0), Lt = null, Ue = M.next();
                ce !== null && !Ue.done;
                we++, Ue = M.next()
            ) {
                ce.index > we ? ((Lt = ce), (ce = null)) : (Lt = ce.sibling);
                var Ti = Y(N, ce, Ue.value, K);
                if (Ti === null) {
                    ce === null && (ce = Lt);
                    break;
                }
                e && ce && Ti.alternate === null && t(N, ce),
                    (P = p(Ti, P, we)),
                    ae === null ? (le = Ti) : (ae.sibling = Ti),
                    (ae = Ti),
                    (ce = Lt);
            }
            if (Ue.done) return r(N, ce), tt && Xi(N, we), le;
            if (ce === null) {
                for (; !Ue.done; we++, Ue = M.next())
                    (Ue = G(N, Ue.value, K)),
                        Ue !== null &&
                            ((P = p(Ue, P, we)),
                            ae === null ? (le = Ue) : (ae.sibling = Ue),
                            (ae = Ue));
                return tt && Xi(N, we), le;
            }
            for (ce = s(N, ce); !Ue.done; we++, Ue = M.next())
                (Ue = J(ce, N, we, Ue.value, K)),
                    Ue !== null &&
                        (e && Ue.alternate !== null && ce.delete(Ue.key === null ? we : Ue.key),
                        (P = p(Ue, P, we)),
                        ae === null ? (le = Ue) : (ae.sibling = Ue),
                        (ae = Ue));
            return (
                e &&
                    ce.forEach(function (Gg) {
                        return t(N, Gg);
                    }),
                tt && Xi(N, we),
                le
            );
        }
        function mt(N, P, M, K) {
            if (
                (typeof M == 'object' &&
                    M !== null &&
                    M.type === L &&
                    M.key === null &&
                    (M = M.props.children),
                typeof M == 'object' && M !== null)
            ) {
                switch (M.$$typeof) {
                    case I:
                        e: {
                            for (var le = M.key, ae = P; ae !== null; ) {
                                if (ae.key === le) {
                                    if (((le = M.type), le === L)) {
                                        if (ae.tag === 7) {
                                            r(N, ae.sibling),
                                                (P = a(ae, M.props.children)),
                                                (P.return = N),
                                                (N = P);
                                            break e;
                                        }
                                    } else if (
                                        ae.elementType === le ||
                                        (typeof le == 'object' &&
                                            le !== null &&
                                            le.$$typeof === fe &&
                                            xp(le) === ae.type)
                                    ) {
                                        r(N, ae.sibling),
                                            (P = a(ae, M.props)),
                                            (P.ref = Dl(N, ae, M)),
                                            (P.return = N),
                                            (N = P);
                                        break e;
                                    }
                                    r(N, ae);
                                    break;
                                } else t(N, ae);
                                ae = ae.sibling;
                            }
                            M.type === L
                                ? ((P = eo(M.props.children, N.mode, K, M.key)),
                                  (P.return = N),
                                  (N = P))
                                : ((K = ku(M.type, M.key, M.props, null, N.mode, K)),
                                  (K.ref = Dl(N, P, M)),
                                  (K.return = N),
                                  (N = K));
                        }
                        return m(N);
                    case V:
                        e: {
                            for (ae = M.key; P !== null; ) {
                                if (P.key === ae)
                                    if (
                                        P.tag === 4 &&
                                        P.stateNode.containerInfo === M.containerInfo &&
                                        P.stateNode.implementation === M.implementation
                                    ) {
                                        r(N, P.sibling),
                                            (P = a(P, M.children || [])),
                                            (P.return = N),
                                            (N = P);
                                        break e;
                                    } else {
                                        r(N, P);
                                        break;
                                    }
                                else t(N, P);
                                P = P.sibling;
                            }
                            (P = qc(M, N.mode, K)), (P.return = N), (N = P);
                        }
                        return m(N);
                    case fe:
                        return (ae = M._init), mt(N, P, ae(M._payload), K);
                }
                if (vn(M)) return re(N, P, M, K);
                if (b(M)) return ie(N, P, M, K);
                Js(N, M);
            }
            return (typeof M == 'string' && M !== '') || typeof M == 'number'
                ? ((M = '' + M),
                  P !== null && P.tag === 6
                      ? (r(N, P.sibling), (P = a(P, M)), (P.return = N), (N = P))
                      : (r(N, P), (P = Kc(M, N.mode, K)), (P.return = N), (N = P)),
                  m(N))
                : r(N, P);
        }
        return mt;
    }
    var Io = wp(!0),
        Sp = wp(!1),
        eu = hi(null),
        tu = null,
        Bo = null,
        oc = null;
    function lc() {
        oc = Bo = tu = null;
    }
    function sc(e) {
        var t = eu.current;
        be(eu), (e._currentValue = t);
    }
    function uc(e, t, r) {
        for (; e !== null; ) {
            var s = e.alternate;
            if (
                ((e.childLanes & t) !== t
                    ? ((e.childLanes |= t), s !== null && (s.childLanes |= t))
                    : s !== null && (s.childLanes & t) !== t && (s.childLanes |= t),
                e === r)
            )
                break;
            e = e.return;
        }
    }
    function Uo(e, t) {
        (tu = e),
            (oc = Bo = null),
            (e = e.dependencies),
            e !== null &&
                e.firstContext !== null &&
                (e.lanes & t && (Cn = !0), (e.firstContext = null));
    }
    function er(e) {
        var t = e._currentValue;
        if (oc !== e)
            if (((e = { context: e, memoizedValue: t, next: null }), Bo === null)) {
                if (tu === null) throw Error(i(308));
                (Bo = e), (tu.dependencies = { lanes: 0, firstContext: e });
            } else Bo = Bo.next = e;
        return t;
    }
    var Qi = null;
    function ac(e) {
        Qi === null ? (Qi = [e]) : Qi.push(e);
    }
    function kp(e, t, r, s) {
        var a = t.interleaved;
        return (
            a === null ? ((r.next = r), ac(t)) : ((r.next = a.next), (a.next = r)),
            (t.interleaved = r),
            Gr(e, s)
        );
    }
    function Gr(e, t) {
        e.lanes |= t;
        var r = e.alternate;
        for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; )
            (e.childLanes |= t),
                (r = e.alternate),
                r !== null && (r.childLanes |= t),
                (r = e),
                (e = e.return);
        return r.tag === 3 ? r.stateNode : null;
    }
    var _i = !1;
    function cc(e) {
        e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
        };
    }
    function Cp(e, t) {
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
    function Kr(e, t) {
        return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
    }
    function vi(e, t, r) {
        var s = e.updateQueue;
        if (s === null) return null;
        if (((s = s.shared), Ie & 2)) {
            var a = s.pending;
            return (
                a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
                (s.pending = t),
                Gr(e, r)
            );
        }
        return (
            (a = s.interleaved),
            a === null ? ((t.next = t), ac(s)) : ((t.next = a.next), (a.next = t)),
            (s.interleaved = t),
            Gr(e, r)
        );
    }
    function nu(e, t, r) {
        if (((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194240) !== 0))) {
            var s = t.lanes;
            (s &= e.pendingLanes), (r |= s), (t.lanes = r), Ca(e, r);
        }
    }
    function Tp(e, t) {
        var r = e.updateQueue,
            s = e.alternate;
        if (s !== null && ((s = s.updateQueue), r === s)) {
            var a = null,
                p = null;
            if (((r = r.firstBaseUpdate), r !== null)) {
                do {
                    var m = {
                        eventTime: r.eventTime,
                        lane: r.lane,
                        tag: r.tag,
                        payload: r.payload,
                        callback: r.callback,
                        next: null,
                    };
                    p === null ? (a = p = m) : (p = p.next = m), (r = r.next);
                } while (r !== null);
                p === null ? (a = p = t) : (p = p.next = t);
            } else a = p = t;
            (r = {
                baseState: s.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: p,
                shared: s.shared,
                effects: s.effects,
            }),
                (e.updateQueue = r);
            return;
        }
        (e = r.lastBaseUpdate),
            e === null ? (r.firstBaseUpdate = t) : (e.next = t),
            (r.lastBaseUpdate = t);
    }
    function ru(e, t, r, s) {
        var a = e.updateQueue;
        _i = !1;
        var p = a.firstBaseUpdate,
            m = a.lastBaseUpdate,
            S = a.shared.pending;
        if (S !== null) {
            a.shared.pending = null;
            var C = S,
                z = C.next;
            (C.next = null), m === null ? (p = z) : (m.next = z), (m = C);
            var H = e.alternate;
            H !== null &&
                ((H = H.updateQueue),
                (S = H.lastBaseUpdate),
                S !== m &&
                    (S === null ? (H.firstBaseUpdate = z) : (S.next = z), (H.lastBaseUpdate = C)));
        }
        if (p !== null) {
            var G = a.baseState;
            (m = 0), (H = z = C = null), (S = p);
            do {
                var Y = S.lane,
                    J = S.eventTime;
                if ((s & Y) === Y) {
                    H !== null &&
                        (H = H.next =
                            {
                                eventTime: J,
                                lane: 0,
                                tag: S.tag,
                                payload: S.payload,
                                callback: S.callback,
                                next: null,
                            });
                    e: {
                        var re = e,
                            ie = S;
                        switch (((Y = t), (J = r), ie.tag)) {
                            case 1:
                                if (((re = ie.payload), typeof re == 'function')) {
                                    G = re.call(J, G, Y);
                                    break e;
                                }
                                G = re;
                                break e;
                            case 3:
                                re.flags = (re.flags & -65537) | 128;
                            case 0:
                                if (
                                    ((re = ie.payload),
                                    (Y = typeof re == 'function' ? re.call(J, G, Y) : re),
                                    Y == null)
                                )
                                    break e;
                                G = k({}, G, Y);
                                break e;
                            case 2:
                                _i = !0;
                        }
                    }
                    S.callback !== null &&
                        S.lane !== 0 &&
                        ((e.flags |= 64),
                        (Y = a.effects),
                        Y === null ? (a.effects = [S]) : Y.push(S));
                } else
                    (J = {
                        eventTime: J,
                        lane: Y,
                        tag: S.tag,
                        payload: S.payload,
                        callback: S.callback,
                        next: null,
                    }),
                        H === null ? ((z = H = J), (C = G)) : (H = H.next = J),
                        (m |= Y);
                if (((S = S.next), S === null)) {
                    if (((S = a.shared.pending), S === null)) break;
                    (Y = S),
                        (S = Y.next),
                        (Y.next = null),
                        (a.lastBaseUpdate = Y),
                        (a.shared.pending = null);
                }
            } while (!0);
            if (
                (H === null && (C = G),
                (a.baseState = C),
                (a.firstBaseUpdate = z),
                (a.lastBaseUpdate = H),
                (t = a.shared.interleaved),
                t !== null)
            ) {
                a = t;
                do (m |= a.lane), (a = a.next);
                while (a !== t);
            } else p === null && (a.shared.lanes = 0);
            (qi |= m), (e.lanes = m), (e.memoizedState = G);
        }
    }
    function Ep(e, t, r) {
        if (((e = t.effects), (t.effects = null), e !== null))
            for (t = 0; t < e.length; t++) {
                var s = e[t],
                    a = s.callback;
                if (a !== null) {
                    if (((s.callback = null), (s = r), typeof a != 'function'))
                        throw Error(i(191, a));
                    a.call(s);
                }
            }
    }
    var Ll = {},
        Mr = hi(Ll),
        jl = hi(Ll),
        Al = hi(Ll);
    function Gi(e) {
        if (e === Ll) throw Error(i(174));
        return e;
    }
    function fc(e, t) {
        switch ((Xe(Al, t), Xe(jl, e), Xe(Mr, Ll), (e = t.nodeType), e)) {
            case 9:
            case 11:
                t = (t = t.documentElement) ? t.namespaceURI : Ke(null, '');
                break;
            default:
                (e = e === 8 ? t.parentNode : t),
                    (t = e.namespaceURI || null),
                    (e = e.tagName),
                    (t = Ke(t, e));
        }
        be(Mr), Xe(Mr, t);
    }
    function Vo() {
        be(Mr), be(jl), be(Al);
    }
    function Pp(e) {
        Gi(Al.current);
        var t = Gi(Mr.current),
            r = Ke(t, e.type);
        t !== r && (Xe(jl, e), Xe(Mr, r));
    }
    function dc(e) {
        jl.current === e && (be(Mr), be(jl));
    }
    var it = hi(0);
    function iu(e) {
        for (var t = e; t !== null; ) {
            if (t.tag === 13) {
                var r = t.memoizedState;
                if (
                    r !== null &&
                    ((r = r.dehydrated), r === null || r.data === '$?' || r.data === '$!')
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
    var pc = [];
    function hc() {
        for (var e = 0; e < pc.length; e++) pc[e]._workInProgressVersionPrimary = null;
        pc.length = 0;
    }
    var ou = D.ReactCurrentDispatcher,
        mc = D.ReactCurrentBatchConfig,
        Ki = 0,
        ot = null,
        Tt = null,
        zt = null,
        lu = !1,
        Fl = !1,
        Il = 0,
        gg = 0;
    function Qt() {
        throw Error(i(321));
    }
    function gc(e, t) {
        if (t === null) return !1;
        for (var r = 0; r < t.length && r < e.length; r++) if (!_r(e[r], t[r])) return !1;
        return !0;
    }
    function _c(e, t, r, s, a, p) {
        if (
            ((Ki = p),
            (ot = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (ou.current = e === null || e.memoizedState === null ? xg : wg),
            (e = r(s, a)),
            Fl)
        ) {
            p = 0;
            do {
                if (((Fl = !1), (Il = 0), 25 <= p)) throw Error(i(301));
                (p += 1),
                    (zt = Tt = null),
                    (t.updateQueue = null),
                    (ou.current = Sg),
                    (e = r(s, a));
            } while (Fl);
        }
        if (
            ((ou.current = au),
            (t = Tt !== null && Tt.next !== null),
            (Ki = 0),
            (zt = Tt = ot = null),
            (lu = !1),
            t)
        )
            throw Error(i(300));
        return e;
    }
    function vc() {
        var e = Il !== 0;
        return (Il = 0), e;
    }
    function Rr() {
        var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
        return zt === null ? (ot.memoizedState = zt = e) : (zt = zt.next = e), zt;
    }
    function tr() {
        if (Tt === null) {
            var e = ot.alternate;
            e = e !== null ? e.memoizedState : null;
        } else e = Tt.next;
        var t = zt === null ? ot.memoizedState : zt.next;
        if (t !== null) (zt = t), (Tt = e);
        else {
            if (e === null) throw Error(i(310));
            (Tt = e),
                (e = {
                    memoizedState: Tt.memoizedState,
                    baseState: Tt.baseState,
                    baseQueue: Tt.baseQueue,
                    queue: Tt.queue,
                    next: null,
                }),
                zt === null ? (ot.memoizedState = zt = e) : (zt = zt.next = e);
        }
        return zt;
    }
    function Bl(e, t) {
        return typeof t == 'function' ? t(e) : t;
    }
    function yc(e) {
        var t = tr(),
            r = t.queue;
        if (r === null) throw Error(i(311));
        r.lastRenderedReducer = e;
        var s = Tt,
            a = s.baseQueue,
            p = r.pending;
        if (p !== null) {
            if (a !== null) {
                var m = a.next;
                (a.next = p.next), (p.next = m);
            }
            (s.baseQueue = a = p), (r.pending = null);
        }
        if (a !== null) {
            (p = a.next), (s = s.baseState);
            var S = (m = null),
                C = null,
                z = p;
            do {
                var H = z.lane;
                if ((Ki & H) === H)
                    C !== null &&
                        (C = C.next =
                            {
                                lane: 0,
                                action: z.action,
                                hasEagerState: z.hasEagerState,
                                eagerState: z.eagerState,
                                next: null,
                            }),
                        (s = z.hasEagerState ? z.eagerState : e(s, z.action));
                else {
                    var G = {
                        lane: H,
                        action: z.action,
                        hasEagerState: z.hasEagerState,
                        eagerState: z.eagerState,
                        next: null,
                    };
                    C === null ? ((S = C = G), (m = s)) : (C = C.next = G),
                        (ot.lanes |= H),
                        (qi |= H);
                }
                z = z.next;
            } while (z !== null && z !== p);
            C === null ? (m = s) : (C.next = S),
                _r(s, t.memoizedState) || (Cn = !0),
                (t.memoizedState = s),
                (t.baseState = m),
                (t.baseQueue = C),
                (r.lastRenderedState = s);
        }
        if (((e = r.interleaved), e !== null)) {
            a = e;
            do (p = a.lane), (ot.lanes |= p), (qi |= p), (a = a.next);
            while (a !== e);
        } else a === null && (r.lanes = 0);
        return [t.memoizedState, r.dispatch];
    }
    function xc(e) {
        var t = tr(),
            r = t.queue;
        if (r === null) throw Error(i(311));
        r.lastRenderedReducer = e;
        var s = r.dispatch,
            a = r.pending,
            p = t.memoizedState;
        if (a !== null) {
            r.pending = null;
            var m = (a = a.next);
            do (p = e(p, m.action)), (m = m.next);
            while (m !== a);
            _r(p, t.memoizedState) || (Cn = !0),
                (t.memoizedState = p),
                t.baseQueue === null && (t.baseState = p),
                (r.lastRenderedState = p);
        }
        return [p, s];
    }
    function Op() {}
    function Np(e, t) {
        var r = ot,
            s = tr(),
            a = t(),
            p = !_r(s.memoizedState, a);
        if (
            (p && ((s.memoizedState = a), (Cn = !0)),
            (s = s.queue),
            wc(zp.bind(null, r, s, e), [e]),
            s.getSnapshot !== t || p || (zt !== null && zt.memoizedState.tag & 1))
        ) {
            if (((r.flags |= 2048), Ul(9, Rp.bind(null, r, s, a, t), void 0, null), Dt === null))
                throw Error(i(349));
            Ki & 30 || Mp(r, t, a);
        }
        return a;
    }
    function Mp(e, t, r) {
        (e.flags |= 16384),
            (e = { getSnapshot: t, value: r }),
            (t = ot.updateQueue),
            t === null
                ? ((t = { lastEffect: null, stores: null }), (ot.updateQueue = t), (t.stores = [e]))
                : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e));
    }
    function Rp(e, t, r, s) {
        (t.value = r), (t.getSnapshot = s), Dp(t) && Lp(e);
    }
    function zp(e, t, r) {
        return r(function () {
            Dp(t) && Lp(e);
        });
    }
    function Dp(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var r = t();
            return !_r(e, r);
        } catch {
            return !0;
        }
    }
    function Lp(e) {
        var t = Gr(e, 1);
        t !== null && Sr(t, e, 1, -1);
    }
    function jp(e) {
        var t = Rr();
        return (
            typeof e == 'function' && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Bl,
                lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = yg.bind(null, ot, e)),
            [t.memoizedState, e]
        );
    }
    function Ul(e, t, r, s) {
        return (
            (e = { tag: e, create: t, destroy: r, deps: s, next: null }),
            (t = ot.updateQueue),
            t === null
                ? ((t = { lastEffect: null, stores: null }),
                  (ot.updateQueue = t),
                  (t.lastEffect = e.next = e))
                : ((r = t.lastEffect),
                  r === null
                      ? (t.lastEffect = e.next = e)
                      : ((s = r.next), (r.next = e), (e.next = s), (t.lastEffect = e))),
            e
        );
    }
    function Ap() {
        return tr().memoizedState;
    }
    function su(e, t, r, s) {
        var a = Rr();
        (ot.flags |= e), (a.memoizedState = Ul(1 | t, r, void 0, s === void 0 ? null : s));
    }
    function uu(e, t, r, s) {
        var a = tr();
        s = s === void 0 ? null : s;
        var p = void 0;
        if (Tt !== null) {
            var m = Tt.memoizedState;
            if (((p = m.destroy), s !== null && gc(s, m.deps))) {
                a.memoizedState = Ul(t, r, p, s);
                return;
            }
        }
        (ot.flags |= e), (a.memoizedState = Ul(1 | t, r, p, s));
    }
    function Fp(e, t) {
        return su(8390656, 8, e, t);
    }
    function wc(e, t) {
        return uu(2048, 8, e, t);
    }
    function Ip(e, t) {
        return uu(4, 2, e, t);
    }
    function Bp(e, t) {
        return uu(4, 4, e, t);
    }
    function Up(e, t) {
        if (typeof t == 'function')
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
    function Vp(e, t, r) {
        return (r = r != null ? r.concat([e]) : null), uu(4, 4, Up.bind(null, t, e), r);
    }
    function Sc() {}
    function $p(e, t) {
        var r = tr();
        t = t === void 0 ? null : t;
        var s = r.memoizedState;
        return s !== null && t !== null && gc(t, s[1]) ? s[0] : ((r.memoizedState = [e, t]), e);
    }
    function Wp(e, t) {
        var r = tr();
        t = t === void 0 ? null : t;
        var s = r.memoizedState;
        return s !== null && t !== null && gc(t, s[1])
            ? s[0]
            : ((e = e()), (r.memoizedState = [e, t]), e);
    }
    function Yp(e, t, r) {
        return Ki & 21
            ? (_r(r, t) || ((r = xd()), (ot.lanes |= r), (qi |= r), (e.baseState = !0)), t)
            : (e.baseState && ((e.baseState = !1), (Cn = !0)), (e.memoizedState = r));
    }
    function _g(e, t) {
        var r = Ve;
        (Ve = r !== 0 && 4 > r ? r : 4), e(!0);
        var s = mc.transition;
        mc.transition = {};
        try {
            e(!1), t();
        } finally {
            (Ve = r), (mc.transition = s);
        }
    }
    function Hp() {
        return tr().memoizedState;
    }
    function vg(e, t, r) {
        var s = Si(e);
        if (((r = { lane: s, action: r, hasEagerState: !1, eagerState: null, next: null }), Xp(e)))
            Qp(t, r);
        else if (((r = kp(e, t, r, s)), r !== null)) {
            var a = sn();
            Sr(r, e, s, a), Gp(r, t, s);
        }
    }
    function yg(e, t, r) {
        var s = Si(e),
            a = { lane: s, action: r, hasEagerState: !1, eagerState: null, next: null };
        if (Xp(e)) Qp(t, a);
        else {
            var p = e.alternate;
            if (
                e.lanes === 0 &&
                (p === null || p.lanes === 0) &&
                ((p = t.lastRenderedReducer), p !== null)
            )
                try {
                    var m = t.lastRenderedState,
                        S = p(m, r);
                    if (((a.hasEagerState = !0), (a.eagerState = S), _r(S, m))) {
                        var C = t.interleaved;
                        C === null ? ((a.next = a), ac(t)) : ((a.next = C.next), (C.next = a)),
                            (t.interleaved = a);
                        return;
                    }
                } catch {
                } finally {
                }
            (r = kp(e, t, a, s)), r !== null && ((a = sn()), Sr(r, e, s, a), Gp(r, t, s));
        }
    }
    function Xp(e) {
        var t = e.alternate;
        return e === ot || (t !== null && t === ot);
    }
    function Qp(e, t) {
        Fl = lu = !0;
        var r = e.pending;
        r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)), (e.pending = t);
    }
    function Gp(e, t, r) {
        if (r & 4194240) {
            var s = t.lanes;
            (s &= e.pendingLanes), (r |= s), (t.lanes = r), Ca(e, r);
        }
    }
    var au = {
            readContext: er,
            useCallback: Qt,
            useContext: Qt,
            useEffect: Qt,
            useImperativeHandle: Qt,
            useInsertionEffect: Qt,
            useLayoutEffect: Qt,
            useMemo: Qt,
            useReducer: Qt,
            useRef: Qt,
            useState: Qt,
            useDebugValue: Qt,
            useDeferredValue: Qt,
            useTransition: Qt,
            useMutableSource: Qt,
            useSyncExternalStore: Qt,
            useId: Qt,
            unstable_isNewReconciler: !1,
        },
        xg = {
            readContext: er,
            useCallback: function (e, t) {
                return (Rr().memoizedState = [e, t === void 0 ? null : t]), e;
            },
            useContext: er,
            useEffect: Fp,
            useImperativeHandle: function (e, t, r) {
                return (
                    (r = r != null ? r.concat([e]) : null), su(4194308, 4, Up.bind(null, t, e), r)
                );
            },
            useLayoutEffect: function (e, t) {
                return su(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
                return su(4, 2, e, t);
            },
            useMemo: function (e, t) {
                var r = Rr();
                return (t = t === void 0 ? null : t), (e = e()), (r.memoizedState = [e, t]), e;
            },
            useReducer: function (e, t, r) {
                var s = Rr();
                return (
                    (t = r !== void 0 ? r(t) : t),
                    (s.memoizedState = s.baseState = t),
                    (e = {
                        pending: null,
                        interleaved: null,
                        lanes: 0,
                        dispatch: null,
                        lastRenderedReducer: e,
                        lastRenderedState: t,
                    }),
                    (s.queue = e),
                    (e = e.dispatch = vg.bind(null, ot, e)),
                    [s.memoizedState, e]
                );
            },
            useRef: function (e) {
                var t = Rr();
                return (e = { current: e }), (t.memoizedState = e);
            },
            useState: jp,
            useDebugValue: Sc,
            useDeferredValue: function (e) {
                return (Rr().memoizedState = e);
            },
            useTransition: function () {
                var e = jp(!1),
                    t = e[0];
                return (e = _g.bind(null, e[1])), (Rr().memoizedState = e), [t, e];
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, r) {
                var s = ot,
                    a = Rr();
                if (tt) {
                    if (r === void 0) throw Error(i(407));
                    r = r();
                } else {
                    if (((r = t()), Dt === null)) throw Error(i(349));
                    Ki & 30 || Mp(s, t, r);
                }
                a.memoizedState = r;
                var p = { value: r, getSnapshot: t };
                return (
                    (a.queue = p),
                    Fp(zp.bind(null, s, p, e), [e]),
                    (s.flags |= 2048),
                    Ul(9, Rp.bind(null, s, p, r, t), void 0, null),
                    r
                );
            },
            useId: function () {
                var e = Rr(),
                    t = Dt.identifierPrefix;
                if (tt) {
                    var r = Qr,
                        s = Xr;
                    (r = (s & ~(1 << (32 - gr(s) - 1))).toString(32) + r),
                        (t = ':' + t + 'R' + r),
                        (r = Il++),
                        0 < r && (t += 'H' + r.toString(32)),
                        (t += ':');
                } else (r = gg++), (t = ':' + t + 'r' + r.toString(32) + ':');
                return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
        },
        wg = {
            readContext: er,
            useCallback: $p,
            useContext: er,
            useEffect: wc,
            useImperativeHandle: Vp,
            useInsertionEffect: Ip,
            useLayoutEffect: Bp,
            useMemo: Wp,
            useReducer: yc,
            useRef: Ap,
            useState: function () {
                return yc(Bl);
            },
            useDebugValue: Sc,
            useDeferredValue: function (e) {
                var t = tr();
                return Yp(t, Tt.memoizedState, e);
            },
            useTransition: function () {
                var e = yc(Bl)[0],
                    t = tr().memoizedState;
                return [e, t];
            },
            useMutableSource: Op,
            useSyncExternalStore: Np,
            useId: Hp,
            unstable_isNewReconciler: !1,
        },
        Sg = {
            readContext: er,
            useCallback: $p,
            useContext: er,
            useEffect: wc,
            useImperativeHandle: Vp,
            useInsertionEffect: Ip,
            useLayoutEffect: Bp,
            useMemo: Wp,
            useReducer: xc,
            useRef: Ap,
            useState: function () {
                return xc(Bl);
            },
            useDebugValue: Sc,
            useDeferredValue: function (e) {
                var t = tr();
                return Tt === null ? (t.memoizedState = e) : Yp(t, Tt.memoizedState, e);
            },
            useTransition: function () {
                var e = xc(Bl)[0],
                    t = tr().memoizedState;
                return [e, t];
            },
            useMutableSource: Op,
            useSyncExternalStore: Np,
            useId: Hp,
            unstable_isNewReconciler: !1,
        };
    function yr(e, t) {
        if (e && e.defaultProps) {
            (t = k({}, t)), (e = e.defaultProps);
            for (var r in e) t[r] === void 0 && (t[r] = e[r]);
            return t;
        }
        return t;
    }
    function kc(e, t, r, s) {
        (t = e.memoizedState),
            (r = r(s, t)),
            (r = r == null ? t : k({}, t, r)),
            (e.memoizedState = r),
            e.lanes === 0 && (e.updateQueue.baseState = r);
    }
    var cu = {
        isMounted: function (e) {
            return (e = e._reactInternals) ? je(e) === e : !1;
        },
        enqueueSetState: function (e, t, r) {
            e = e._reactInternals;
            var s = sn(),
                a = Si(e),
                p = Kr(s, a);
            (p.payload = t),
                r != null && (p.callback = r),
                (t = vi(e, p, a)),
                t !== null && (Sr(t, e, a, s), nu(t, e, a));
        },
        enqueueReplaceState: function (e, t, r) {
            e = e._reactInternals;
            var s = sn(),
                a = Si(e),
                p = Kr(s, a);
            (p.tag = 1),
                (p.payload = t),
                r != null && (p.callback = r),
                (t = vi(e, p, a)),
                t !== null && (Sr(t, e, a, s), nu(t, e, a));
        },
        enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var r = sn(),
                s = Si(e),
                a = Kr(r, s);
            (a.tag = 2),
                t != null && (a.callback = t),
                (t = vi(e, a, s)),
                t !== null && (Sr(t, e, s, r), nu(t, e, s));
        },
    };
    function Kp(e, t, r, s, a, p, m) {
        return (
            (e = e.stateNode),
            typeof e.shouldComponentUpdate == 'function'
                ? e.shouldComponentUpdate(s, p, m)
                : t.prototype && t.prototype.isPureReactComponent
                ? !El(r, s) || !El(a, p)
                : !0
        );
    }
    function qp(e, t, r) {
        var s = !1,
            a = mi,
            p = t.contextType;
        return (
            typeof p == 'object' && p !== null
                ? (p = er(p))
                : ((a = kn(t) ? Yi : Xt.current),
                  (s = t.contextTypes),
                  (p = (s = s != null) ? Lo(e, a) : mi)),
            (t = new t(r, p)),
            (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
            (t.updater = cu),
            (e.stateNode = t),
            (t._reactInternals = e),
            s &&
                ((e = e.stateNode),
                (e.__reactInternalMemoizedUnmaskedChildContext = a),
                (e.__reactInternalMemoizedMaskedChildContext = p)),
            t
        );
    }
    function Zp(e, t, r, s) {
        (e = t.state),
            typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(r, s),
            typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
                t.UNSAFE_componentWillReceiveProps(r, s),
            t.state !== e && cu.enqueueReplaceState(t, t.state, null);
    }
    function Cc(e, t, r, s) {
        var a = e.stateNode;
        (a.props = r), (a.state = e.memoizedState), (a.refs = {}), cc(e);
        var p = t.contextType;
        typeof p == 'object' && p !== null
            ? (a.context = er(p))
            : ((p = kn(t) ? Yi : Xt.current), (a.context = Lo(e, p))),
            (a.state = e.memoizedState),
            (p = t.getDerivedStateFromProps),
            typeof p == 'function' && (kc(e, t, p, r), (a.state = e.memoizedState)),
            typeof t.getDerivedStateFromProps == 'function' ||
                typeof a.getSnapshotBeforeUpdate == 'function' ||
                (typeof a.UNSAFE_componentWillMount != 'function' &&
                    typeof a.componentWillMount != 'function') ||
                ((t = a.state),
                typeof a.componentWillMount == 'function' && a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == 'function' && a.UNSAFE_componentWillMount(),
                t !== a.state && cu.enqueueReplaceState(a, a.state, null),
                ru(e, r, a, s),
                (a.state = e.memoizedState)),
            typeof a.componentDidMount == 'function' && (e.flags |= 4194308);
    }
    function $o(e, t) {
        try {
            var r = '',
                s = t;
            do (r += me(s)), (s = s.return);
            while (s);
            var a = r;
        } catch (p) {
            a =
                `
Error generating stack: ` +
                p.message +
                `
` +
                p.stack;
        }
        return { value: e, source: t, stack: a, digest: null };
    }
    function Tc(e, t, r) {
        return { value: e, source: null, stack: r ?? null, digest: t ?? null };
    }
    function Ec(e, t) {
        try {
            console.error(t.value);
        } catch (r) {
            setTimeout(function () {
                throw r;
            });
        }
    }
    var kg = typeof WeakMap == 'function' ? WeakMap : Map;
    function bp(e, t, r) {
        (r = Kr(-1, r)), (r.tag = 3), (r.payload = { element: null });
        var s = t.value;
        return (
            (r.callback = function () {
                _u || ((_u = !0), (Vc = s)), Ec(e, t);
            }),
            r
        );
    }
    function Jp(e, t, r) {
        (r = Kr(-1, r)), (r.tag = 3);
        var s = e.type.getDerivedStateFromError;
        if (typeof s == 'function') {
            var a = t.value;
            (r.payload = function () {
                return s(a);
            }),
                (r.callback = function () {
                    Ec(e, t);
                });
        }
        var p = e.stateNode;
        return (
            p !== null &&
                typeof p.componentDidCatch == 'function' &&
                (r.callback = function () {
                    Ec(e, t),
                        typeof s != 'function' &&
                            (xi === null ? (xi = new Set([this])) : xi.add(this));
                    var m = t.stack;
                    this.componentDidCatch(t.value, { componentStack: m !== null ? m : '' });
                }),
            r
        );
    }
    function eh(e, t, r) {
        var s = e.pingCache;
        if (s === null) {
            s = e.pingCache = new kg();
            var a = new Set();
            s.set(t, a);
        } else (a = s.get(t)), a === void 0 && ((a = new Set()), s.set(t, a));
        a.has(r) || (a.add(r), (e = Fg.bind(null, e, t, r)), t.then(e, e));
    }
    function th(e) {
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
    function nh(e, t, r, s, a) {
        return e.mode & 1
            ? ((e.flags |= 65536), (e.lanes = a), e)
            : (e === t
                  ? (e.flags |= 65536)
                  : ((e.flags |= 128),
                    (r.flags |= 131072),
                    (r.flags &= -52805),
                    r.tag === 1 &&
                        (r.alternate === null
                            ? (r.tag = 17)
                            : ((t = Kr(-1, 1)), (t.tag = 2), vi(r, t, 1))),
                    (r.lanes |= 1)),
              e);
    }
    var Cg = D.ReactCurrentOwner,
        Cn = !1;
    function ln(e, t, r, s) {
        t.child = e === null ? Sp(t, null, r, s) : Io(t, e.child, r, s);
    }
    function rh(e, t, r, s, a) {
        r = r.render;
        var p = t.ref;
        return (
            Uo(t, a),
            (s = _c(e, t, r, s, p, a)),
            (r = vc()),
            e !== null && !Cn
                ? ((t.updateQueue = e.updateQueue),
                  (t.flags &= -2053),
                  (e.lanes &= ~a),
                  qr(e, t, a))
                : (tt && r && ec(t), (t.flags |= 1), ln(e, t, s, a), t.child)
        );
    }
    function ih(e, t, r, s, a) {
        if (e === null) {
            var p = r.type;
            return typeof p == 'function' &&
                !Gc(p) &&
                p.defaultProps === void 0 &&
                r.compare === null &&
                r.defaultProps === void 0
                ? ((t.tag = 15), (t.type = p), oh(e, t, p, s, a))
                : ((e = ku(r.type, null, s, t, t.mode, a)),
                  (e.ref = t.ref),
                  (e.return = t),
                  (t.child = e));
        }
        if (((p = e.child), !(e.lanes & a))) {
            var m = p.memoizedProps;
            if (((r = r.compare), (r = r !== null ? r : El), r(m, s) && e.ref === t.ref))
                return qr(e, t, a);
        }
        return (t.flags |= 1), (e = Ci(p, s)), (e.ref = t.ref), (e.return = t), (t.child = e);
    }
    function oh(e, t, r, s, a) {
        if (e !== null) {
            var p = e.memoizedProps;
            if (El(p, s) && e.ref === t.ref)
                if (((Cn = !1), (t.pendingProps = s = p), (e.lanes & a) !== 0))
                    e.flags & 131072 && (Cn = !0);
                else return (t.lanes = e.lanes), qr(e, t, a);
        }
        return Pc(e, t, r, s, a);
    }
    function lh(e, t, r) {
        var s = t.pendingProps,
            a = s.children,
            p = e !== null ? e.memoizedState : null;
        if (s.mode === 'hidden')
            if (!(t.mode & 1))
                (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
                    Xe(Yo, Un),
                    (Un |= r);
            else {
                if (!(r & 1073741824))
                    return (
                        (e = p !== null ? p.baseLanes | r : r),
                        (t.lanes = t.childLanes = 1073741824),
                        (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
                        (t.updateQueue = null),
                        Xe(Yo, Un),
                        (Un |= e),
                        null
                    );
                (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
                    (s = p !== null ? p.baseLanes : r),
                    Xe(Yo, Un),
                    (Un |= s);
            }
        else
            p !== null ? ((s = p.baseLanes | r), (t.memoizedState = null)) : (s = r),
                Xe(Yo, Un),
                (Un |= s);
        return ln(e, t, a, r), t.child;
    }
    function sh(e, t) {
        var r = t.ref;
        ((e === null && r !== null) || (e !== null && e.ref !== r)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
    }
    function Pc(e, t, r, s, a) {
        var p = kn(r) ? Yi : Xt.current;
        return (
            (p = Lo(t, p)),
            Uo(t, a),
            (r = _c(e, t, r, s, p, a)),
            (s = vc()),
            e !== null && !Cn
                ? ((t.updateQueue = e.updateQueue),
                  (t.flags &= -2053),
                  (e.lanes &= ~a),
                  qr(e, t, a))
                : (tt && s && ec(t), (t.flags |= 1), ln(e, t, r, a), t.child)
        );
    }
    function uh(e, t, r, s, a) {
        if (kn(r)) {
            var p = !0;
            Gs(t);
        } else p = !1;
        if ((Uo(t, a), t.stateNode === null)) du(e, t), qp(t, r, s), Cc(t, r, s, a), (s = !0);
        else if (e === null) {
            var m = t.stateNode,
                S = t.memoizedProps;
            m.props = S;
            var C = m.context,
                z = r.contextType;
            typeof z == 'object' && z !== null
                ? (z = er(z))
                : ((z = kn(r) ? Yi : Xt.current), (z = Lo(t, z)));
            var H = r.getDerivedStateFromProps,
                G = typeof H == 'function' || typeof m.getSnapshotBeforeUpdate == 'function';
            G ||
                (typeof m.UNSAFE_componentWillReceiveProps != 'function' &&
                    typeof m.componentWillReceiveProps != 'function') ||
                ((S !== s || C !== z) && Zp(t, m, s, z)),
                (_i = !1);
            var Y = t.memoizedState;
            (m.state = Y),
                ru(t, s, m, a),
                (C = t.memoizedState),
                S !== s || Y !== C || Sn.current || _i
                    ? (typeof H == 'function' && (kc(t, r, H, s), (C = t.memoizedState)),
                      (S = _i || Kp(t, r, S, s, Y, C, z))
                          ? (G ||
                                (typeof m.UNSAFE_componentWillMount != 'function' &&
                                    typeof m.componentWillMount != 'function') ||
                                (typeof m.componentWillMount == 'function' &&
                                    m.componentWillMount(),
                                typeof m.UNSAFE_componentWillMount == 'function' &&
                                    m.UNSAFE_componentWillMount()),
                            typeof m.componentDidMount == 'function' && (t.flags |= 4194308))
                          : (typeof m.componentDidMount == 'function' && (t.flags |= 4194308),
                            (t.memoizedProps = s),
                            (t.memoizedState = C)),
                      (m.props = s),
                      (m.state = C),
                      (m.context = z),
                      (s = S))
                    : (typeof m.componentDidMount == 'function' && (t.flags |= 4194308), (s = !1));
        } else {
            (m = t.stateNode),
                Cp(e, t),
                (S = t.memoizedProps),
                (z = t.type === t.elementType ? S : yr(t.type, S)),
                (m.props = z),
                (G = t.pendingProps),
                (Y = m.context),
                (C = r.contextType),
                typeof C == 'object' && C !== null
                    ? (C = er(C))
                    : ((C = kn(r) ? Yi : Xt.current), (C = Lo(t, C)));
            var J = r.getDerivedStateFromProps;
            (H = typeof J == 'function' || typeof m.getSnapshotBeforeUpdate == 'function') ||
                (typeof m.UNSAFE_componentWillReceiveProps != 'function' &&
                    typeof m.componentWillReceiveProps != 'function') ||
                ((S !== G || Y !== C) && Zp(t, m, s, C)),
                (_i = !1),
                (Y = t.memoizedState),
                (m.state = Y),
                ru(t, s, m, a);
            var re = t.memoizedState;
            S !== G || Y !== re || Sn.current || _i
                ? (typeof J == 'function' && (kc(t, r, J, s), (re = t.memoizedState)),
                  (z = _i || Kp(t, r, z, s, Y, re, C) || !1)
                      ? (H ||
                            (typeof m.UNSAFE_componentWillUpdate != 'function' &&
                                typeof m.componentWillUpdate != 'function') ||
                            (typeof m.componentWillUpdate == 'function' &&
                                m.componentWillUpdate(s, re, C),
                            typeof m.UNSAFE_componentWillUpdate == 'function' &&
                                m.UNSAFE_componentWillUpdate(s, re, C)),
                        typeof m.componentDidUpdate == 'function' && (t.flags |= 4),
                        typeof m.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
                      : (typeof m.componentDidUpdate != 'function' ||
                            (S === e.memoizedProps && Y === e.memoizedState) ||
                            (t.flags |= 4),
                        typeof m.getSnapshotBeforeUpdate != 'function' ||
                            (S === e.memoizedProps && Y === e.memoizedState) ||
                            (t.flags |= 1024),
                        (t.memoizedProps = s),
                        (t.memoizedState = re)),
                  (m.props = s),
                  (m.state = re),
                  (m.context = C),
                  (s = z))
                : (typeof m.componentDidUpdate != 'function' ||
                      (S === e.memoizedProps && Y === e.memoizedState) ||
                      (t.flags |= 4),
                  typeof m.getSnapshotBeforeUpdate != 'function' ||
                      (S === e.memoizedProps && Y === e.memoizedState) ||
                      (t.flags |= 1024),
                  (s = !1));
        }
        return Oc(e, t, r, s, p, a);
    }
    function Oc(e, t, r, s, a, p) {
        sh(e, t);
        var m = (t.flags & 128) !== 0;
        if (!s && !m) return a && pp(t, r, !1), qr(e, t, p);
        (s = t.stateNode), (Cg.current = t);
        var S = m && typeof r.getDerivedStateFromError != 'function' ? null : s.render();
        return (
            (t.flags |= 1),
            e !== null && m
                ? ((t.child = Io(t, e.child, null, p)), (t.child = Io(t, null, S, p)))
                : ln(e, t, S, p),
            (t.memoizedState = s.state),
            a && pp(t, r, !0),
            t.child
        );
    }
    function ah(e) {
        var t = e.stateNode;
        t.pendingContext
            ? fp(e, t.pendingContext, t.pendingContext !== t.context)
            : t.context && fp(e, t.context, !1),
            fc(e, t.containerInfo);
    }
    function ch(e, t, r, s, a) {
        return Fo(), ic(a), (t.flags |= 256), ln(e, t, r, s), t.child;
    }
    var Nc = { dehydrated: null, treeContext: null, retryLane: 0 };
    function Mc(e) {
        return { baseLanes: e, cachePool: null, transitions: null };
    }
    function fh(e, t, r) {
        var s = t.pendingProps,
            a = it.current,
            p = !1,
            m = (t.flags & 128) !== 0,
            S;
        if (
            ((S = m) || (S = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0),
            S
                ? ((p = !0), (t.flags &= -129))
                : (e === null || e.memoizedState !== null) && (a |= 1),
            Xe(it, a & 1),
            e === null)
        )
            return (
                rc(t),
                (e = t.memoizedState),
                e !== null && ((e = e.dehydrated), e !== null)
                    ? (t.mode & 1
                          ? e.data === '$!'
                              ? (t.lanes = 8)
                              : (t.lanes = 1073741824)
                          : (t.lanes = 1),
                      null)
                    : ((m = s.children),
                      (e = s.fallback),
                      p
                          ? ((s = t.mode),
                            (p = t.child),
                            (m = { mode: 'hidden', children: m }),
                            !(s & 1) && p !== null
                                ? ((p.childLanes = 0), (p.pendingProps = m))
                                : (p = Cu(m, s, 0, null)),
                            (e = eo(e, s, r, null)),
                            (p.return = t),
                            (e.return = t),
                            (p.sibling = e),
                            (t.child = p),
                            (t.child.memoizedState = Mc(r)),
                            (t.memoizedState = Nc),
                            e)
                          : Rc(t, m))
            );
        if (((a = e.memoizedState), a !== null && ((S = a.dehydrated), S !== null)))
            return Tg(e, t, m, s, S, a, r);
        if (p) {
            (p = s.fallback), (m = t.mode), (a = e.child), (S = a.sibling);
            var C = { mode: 'hidden', children: s.children };
            return (
                !(m & 1) && t.child !== a
                    ? ((s = t.child),
                      (s.childLanes = 0),
                      (s.pendingProps = C),
                      (t.deletions = null))
                    : ((s = Ci(a, C)), (s.subtreeFlags = a.subtreeFlags & 14680064)),
                S !== null ? (p = Ci(S, p)) : ((p = eo(p, m, r, null)), (p.flags |= 2)),
                (p.return = t),
                (s.return = t),
                (s.sibling = p),
                (t.child = s),
                (s = p),
                (p = t.child),
                (m = e.child.memoizedState),
                (m =
                    m === null
                        ? Mc(r)
                        : {
                              baseLanes: m.baseLanes | r,
                              cachePool: null,
                              transitions: m.transitions,
                          }),
                (p.memoizedState = m),
                (p.childLanes = e.childLanes & ~r),
                (t.memoizedState = Nc),
                s
            );
        }
        return (
            (p = e.child),
            (e = p.sibling),
            (s = Ci(p, { mode: 'visible', children: s.children })),
            !(t.mode & 1) && (s.lanes = r),
            (s.return = t),
            (s.sibling = null),
            e !== null &&
                ((r = t.deletions),
                r === null ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)),
            (t.child = s),
            (t.memoizedState = null),
            s
        );
    }
    function Rc(e, t) {
        return (
            (t = Cu({ mode: 'visible', children: t }, e.mode, 0, null)),
            (t.return = e),
            (e.child = t)
        );
    }
    function fu(e, t, r, s) {
        return (
            s !== null && ic(s),
            Io(t, e.child, null, r),
            (e = Rc(t, t.pendingProps.children)),
            (e.flags |= 2),
            (t.memoizedState = null),
            e
        );
    }
    function Tg(e, t, r, s, a, p, m) {
        if (r)
            return t.flags & 256
                ? ((t.flags &= -257), (s = Tc(Error(i(422)))), fu(e, t, m, s))
                : t.memoizedState !== null
                ? ((t.child = e.child), (t.flags |= 128), null)
                : ((p = s.fallback),
                  (a = t.mode),
                  (s = Cu({ mode: 'visible', children: s.children }, a, 0, null)),
                  (p = eo(p, a, m, null)),
                  (p.flags |= 2),
                  (s.return = t),
                  (p.return = t),
                  (s.sibling = p),
                  (t.child = s),
                  t.mode & 1 && Io(t, e.child, null, m),
                  (t.child.memoizedState = Mc(m)),
                  (t.memoizedState = Nc),
                  p);
        if (!(t.mode & 1)) return fu(e, t, m, null);
        if (a.data === '$!') {
            if (((s = a.nextSibling && a.nextSibling.dataset), s)) var S = s.dgst;
            return (s = S), (p = Error(i(419))), (s = Tc(p, s, void 0)), fu(e, t, m, s);
        }
        if (((S = (m & e.childLanes) !== 0), Cn || S)) {
            if (((s = Dt), s !== null)) {
                switch (m & -m) {
                    case 4:
                        a = 2;
                        break;
                    case 16:
                        a = 8;
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
                        a = 32;
                        break;
                    case 536870912:
                        a = 268435456;
                        break;
                    default:
                        a = 0;
                }
                (a = a & (s.suspendedLanes | m) ? 0 : a),
                    a !== 0 && a !== p.retryLane && ((p.retryLane = a), Gr(e, a), Sr(s, e, a, -1));
            }
            return Qc(), (s = Tc(Error(i(421)))), fu(e, t, m, s);
        }
        return a.data === '$?'
            ? ((t.flags |= 128),
              (t.child = e.child),
              (t = Ig.bind(null, e)),
              (a._reactRetry = t),
              null)
            : ((e = p.treeContext),
              (Bn = pi(a.nextSibling)),
              (In = t),
              (tt = !0),
              (vr = null),
              e !== null &&
                  ((bn[Jn++] = Xr),
                  (bn[Jn++] = Qr),
                  (bn[Jn++] = Hi),
                  (Xr = e.id),
                  (Qr = e.overflow),
                  (Hi = t)),
              (t = Rc(t, s.children)),
              (t.flags |= 4096),
              t);
    }
    function dh(e, t, r) {
        e.lanes |= t;
        var s = e.alternate;
        s !== null && (s.lanes |= t), uc(e.return, t, r);
    }
    function zc(e, t, r, s, a) {
        var p = e.memoizedState;
        p === null
            ? (e.memoizedState = {
                  isBackwards: t,
                  rendering: null,
                  renderingStartTime: 0,
                  last: s,
                  tail: r,
                  tailMode: a,
              })
            : ((p.isBackwards = t),
              (p.rendering = null),
              (p.renderingStartTime = 0),
              (p.last = s),
              (p.tail = r),
              (p.tailMode = a));
    }
    function ph(e, t, r) {
        var s = t.pendingProps,
            a = s.revealOrder,
            p = s.tail;
        if ((ln(e, t, s.children, r), (s = it.current), s & 2)) (s = (s & 1) | 2), (t.flags |= 128);
        else {
            if (e !== null && e.flags & 128)
                e: for (e = t.child; e !== null; ) {
                    if (e.tag === 13) e.memoizedState !== null && dh(e, r, t);
                    else if (e.tag === 19) dh(e, r, t);
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
            s &= 1;
        }
        if ((Xe(it, s), !(t.mode & 1))) t.memoizedState = null;
        else
            switch (a) {
                case 'forwards':
                    for (r = t.child, a = null; r !== null; )
                        (e = r.alternate), e !== null && iu(e) === null && (a = r), (r = r.sibling);
                    (r = a),
                        r === null
                            ? ((a = t.child), (t.child = null))
                            : ((a = r.sibling), (r.sibling = null)),
                        zc(t, !1, a, r, p);
                    break;
                case 'backwards':
                    for (r = null, a = t.child, t.child = null; a !== null; ) {
                        if (((e = a.alternate), e !== null && iu(e) === null)) {
                            t.child = a;
                            break;
                        }
                        (e = a.sibling), (a.sibling = r), (r = a), (a = e);
                    }
                    zc(t, !0, r, null, p);
                    break;
                case 'together':
                    zc(t, !1, null, null, void 0);
                    break;
                default:
                    t.memoizedState = null;
            }
        return t.child;
    }
    function du(e, t) {
        !(t.mode & 1) && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
    }
    function qr(e, t, r) {
        if ((e !== null && (t.dependencies = e.dependencies), (qi |= t.lanes), !(r & t.childLanes)))
            return null;
        if (e !== null && t.child !== e.child) throw Error(i(153));
        if (t.child !== null) {
            for (
                e = t.child, r = Ci(e, e.pendingProps), t.child = r, r.return = t;
                e.sibling !== null;

            )
                (e = e.sibling), (r = r.sibling = Ci(e, e.pendingProps)), (r.return = t);
            r.sibling = null;
        }
        return t.child;
    }
    function Eg(e, t, r) {
        switch (t.tag) {
            case 3:
                ah(t), Fo();
                break;
            case 5:
                Pp(t);
                break;
            case 1:
                kn(t.type) && Gs(t);
                break;
            case 4:
                fc(t, t.stateNode.containerInfo);
                break;
            case 10:
                var s = t.type._context,
                    a = t.memoizedProps.value;
                Xe(eu, s._currentValue), (s._currentValue = a);
                break;
            case 13:
                if (((s = t.memoizedState), s !== null))
                    return s.dehydrated !== null
                        ? (Xe(it, it.current & 1), (t.flags |= 128), null)
                        : r & t.child.childLanes
                        ? fh(e, t, r)
                        : (Xe(it, it.current & 1),
                          (e = qr(e, t, r)),
                          e !== null ? e.sibling : null);
                Xe(it, it.current & 1);
                break;
            case 19:
                if (((s = (r & t.childLanes) !== 0), e.flags & 128)) {
                    if (s) return ph(e, t, r);
                    t.flags |= 128;
                }
                if (
                    ((a = t.memoizedState),
                    a !== null && ((a.rendering = null), (a.tail = null), (a.lastEffect = null)),
                    Xe(it, it.current),
                    s)
                )
                    break;
                return null;
            case 22:
            case 23:
                return (t.lanes = 0), lh(e, t, r);
        }
        return qr(e, t, r);
    }
    var hh, Dc, mh, gh;
    (hh = function (e, t) {
        for (var r = t.child; r !== null; ) {
            if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
            else if (r.tag !== 4 && r.child !== null) {
                (r.child.return = r), (r = r.child);
                continue;
            }
            if (r === t) break;
            for (; r.sibling === null; ) {
                if (r.return === null || r.return === t) return;
                r = r.return;
            }
            (r.sibling.return = r.return), (r = r.sibling);
        }
    }),
        (Dc = function () {}),
        (mh = function (e, t, r, s) {
            var a = e.memoizedProps;
            if (a !== s) {
                (e = t.stateNode), Gi(Mr.current);
                var p = null;
                switch (r) {
                    case 'input':
                        (a = Ge(e, a)), (s = Ge(e, s)), (p = []);
                        break;
                    case 'select':
                        (a = k({}, a, { value: void 0 })),
                            (s = k({}, s, { value: void 0 })),
                            (p = []);
                        break;
                    case 'textarea':
                        (a = Kn(e, a)), (s = Kn(e, s)), (p = []);
                        break;
                    default:
                        typeof a.onClick != 'function' &&
                            typeof s.onClick == 'function' &&
                            (e.onclick = Hs);
                }
                Er(r, s);
                var m;
                r = null;
                for (z in a)
                    if (!s.hasOwnProperty(z) && a.hasOwnProperty(z) && a[z] != null)
                        if (z === 'style') {
                            var S = a[z];
                            for (m in S) S.hasOwnProperty(m) && (r || (r = {}), (r[m] = ''));
                        } else
                            z !== 'dangerouslySetInnerHTML' &&
                                z !== 'children' &&
                                z !== 'suppressContentEditableWarning' &&
                                z !== 'suppressHydrationWarning' &&
                                z !== 'autoFocus' &&
                                (l.hasOwnProperty(z) ? p || (p = []) : (p = p || []).push(z, null));
                for (z in s) {
                    var C = s[z];
                    if (
                        ((S = a != null ? a[z] : void 0),
                        s.hasOwnProperty(z) && C !== S && (C != null || S != null))
                    )
                        if (z === 'style')
                            if (S) {
                                for (m in S)
                                    !S.hasOwnProperty(m) ||
                                        (C && C.hasOwnProperty(m)) ||
                                        (r || (r = {}), (r[m] = ''));
                                for (m in C)
                                    C.hasOwnProperty(m) &&
                                        S[m] !== C[m] &&
                                        (r || (r = {}), (r[m] = C[m]));
                            } else r || (p || (p = []), p.push(z, r)), (r = C);
                        else
                            z === 'dangerouslySetInnerHTML'
                                ? ((C = C ? C.__html : void 0),
                                  (S = S ? S.__html : void 0),
                                  C != null && S !== C && (p = p || []).push(z, C))
                                : z === 'children'
                                ? (typeof C != 'string' && typeof C != 'number') ||
                                  (p = p || []).push(z, '' + C)
                                : z !== 'suppressContentEditableWarning' &&
                                  z !== 'suppressHydrationWarning' &&
                                  (l.hasOwnProperty(z)
                                      ? (C != null && z === 'onScroll' && Ze('scroll', e),
                                        p || S === C || (p = []))
                                      : (p = p || []).push(z, C));
                }
                r && (p = p || []).push('style', r);
                var z = p;
                (t.updateQueue = z) && (t.flags |= 4);
            }
        }),
        (gh = function (e, t, r, s) {
            r !== s && (t.flags |= 4);
        });
    function Vl(e, t) {
        if (!tt)
            switch (e.tailMode) {
                case 'hidden':
                    t = e.tail;
                    for (var r = null; t !== null; )
                        t.alternate !== null && (r = t), (t = t.sibling);
                    r === null ? (e.tail = null) : (r.sibling = null);
                    break;
                case 'collapsed':
                    r = e.tail;
                    for (var s = null; r !== null; )
                        r.alternate !== null && (s = r), (r = r.sibling);
                    s === null
                        ? t || e.tail === null
                            ? (e.tail = null)
                            : (e.tail.sibling = null)
                        : (s.sibling = null);
            }
    }
    function Gt(e) {
        var t = e.alternate !== null && e.alternate.child === e.child,
            r = 0,
            s = 0;
        if (t)
            for (var a = e.child; a !== null; )
                (r |= a.lanes | a.childLanes),
                    (s |= a.subtreeFlags & 14680064),
                    (s |= a.flags & 14680064),
                    (a.return = e),
                    (a = a.sibling);
        else
            for (a = e.child; a !== null; )
                (r |= a.lanes | a.childLanes),
                    (s |= a.subtreeFlags),
                    (s |= a.flags),
                    (a.return = e),
                    (a = a.sibling);
        return (e.subtreeFlags |= s), (e.childLanes = r), t;
    }
    function Pg(e, t, r) {
        var s = t.pendingProps;
        switch ((tc(t), t.tag)) {
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
                return Gt(t), null;
            case 1:
                return kn(t.type) && Qs(), Gt(t), null;
            case 3:
                return (
                    (s = t.stateNode),
                    Vo(),
                    be(Sn),
                    be(Xt),
                    hc(),
                    s.pendingContext && ((s.context = s.pendingContext), (s.pendingContext = null)),
                    (e === null || e.child === null) &&
                        (bs(t)
                            ? (t.flags |= 4)
                            : e === null ||
                              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                              ((t.flags |= 1024), vr !== null && (Yc(vr), (vr = null)))),
                    Dc(e, t),
                    Gt(t),
                    null
                );
            case 5:
                dc(t);
                var a = Gi(Al.current);
                if (((r = t.type), e !== null && t.stateNode != null))
                    mh(e, t, r, s, a), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
                else {
                    if (!s) {
                        if (t.stateNode === null) throw Error(i(166));
                        return Gt(t), null;
                    }
                    if (((e = Gi(Mr.current)), bs(t))) {
                        (s = t.stateNode), (r = t.type);
                        var p = t.memoizedProps;
                        switch (((s[Nr] = t), (s[Rl] = p), (e = (t.mode & 1) !== 0), r)) {
                            case 'dialog':
                                Ze('cancel', s), Ze('close', s);
                                break;
                            case 'iframe':
                            case 'object':
                            case 'embed':
                                Ze('load', s);
                                break;
                            case 'video':
                            case 'audio':
                                for (a = 0; a < Ol.length; a++) Ze(Ol[a], s);
                                break;
                            case 'source':
                                Ze('error', s);
                                break;
                            case 'img':
                            case 'image':
                            case 'link':
                                Ze('error', s), Ze('load', s);
                                break;
                            case 'details':
                                Ze('toggle', s);
                                break;
                            case 'input':
                                Bt(s, p), Ze('invalid', s);
                                break;
                            case 'select':
                                (s._wrapperState = { wasMultiple: !!p.multiple }), Ze('invalid', s);
                                break;
                            case 'textarea':
                                Tr(s, p), Ze('invalid', s);
                        }
                        Er(r, p), (a = null);
                        for (var m in p)
                            if (p.hasOwnProperty(m)) {
                                var S = p[m];
                                m === 'children'
                                    ? typeof S == 'string'
                                        ? s.textContent !== S &&
                                          (p.suppressHydrationWarning !== !0 &&
                                              Ys(s.textContent, S, e),
                                          (a = ['children', S]))
                                        : typeof S == 'number' &&
                                          s.textContent !== '' + S &&
                                          (p.suppressHydrationWarning !== !0 &&
                                              Ys(s.textContent, S, e),
                                          (a = ['children', '' + S]))
                                    : l.hasOwnProperty(m) &&
                                      S != null &&
                                      m === 'onScroll' &&
                                      Ze('scroll', s);
                            }
                        switch (r) {
                            case 'input':
                                vt(s), Yt(s, p, !0);
                                break;
                            case 'textarea':
                                vt(s), pt(s);
                                break;
                            case 'select':
                            case 'option':
                                break;
                            default:
                                typeof p.onClick == 'function' && (s.onclick = Hs);
                        }
                        (s = a), (t.updateQueue = s), s !== null && (t.flags |= 4);
                    } else {
                        (m = a.nodeType === 9 ? a : a.ownerDocument),
                            e === 'http://www.w3.org/1999/xhtml' && (e = fr(r)),
                            e === 'http://www.w3.org/1999/xhtml'
                                ? r === 'script'
                                    ? ((e = m.createElement('div')),
                                      (e.innerHTML = '<script></script>'),
                                      (e = e.removeChild(e.firstChild)))
                                    : typeof s.is == 'string'
                                    ? (e = m.createElement(r, { is: s.is }))
                                    : ((e = m.createElement(r)),
                                      r === 'select' &&
                                          ((m = e),
                                          s.multiple
                                              ? (m.multiple = !0)
                                              : s.size && (m.size = s.size)))
                                : (e = m.createElementNS(e, r)),
                            (e[Nr] = t),
                            (e[Rl] = s),
                            hh(e, t, !1, !1),
                            (t.stateNode = e);
                        e: {
                            switch (((m = qn(r, s)), r)) {
                                case 'dialog':
                                    Ze('cancel', e), Ze('close', e), (a = s);
                                    break;
                                case 'iframe':
                                case 'object':
                                case 'embed':
                                    Ze('load', e), (a = s);
                                    break;
                                case 'video':
                                case 'audio':
                                    for (a = 0; a < Ol.length; a++) Ze(Ol[a], e);
                                    a = s;
                                    break;
                                case 'source':
                                    Ze('error', e), (a = s);
                                    break;
                                case 'img':
                                case 'image':
                                case 'link':
                                    Ze('error', e), Ze('load', e), (a = s);
                                    break;
                                case 'details':
                                    Ze('toggle', e), (a = s);
                                    break;
                                case 'input':
                                    Bt(e, s), (a = Ge(e, s)), Ze('invalid', e);
                                    break;
                                case 'option':
                                    a = s;
                                    break;
                                case 'select':
                                    (e._wrapperState = { wasMultiple: !!s.multiple }),
                                        (a = k({}, s, { value: void 0 })),
                                        Ze('invalid', e);
                                    break;
                                case 'textarea':
                                    Tr(e, s), (a = Kn(e, s)), Ze('invalid', e);
                                    break;
                                default:
                                    a = s;
                            }
                            Er(r, a), (S = a);
                            for (p in S)
                                if (S.hasOwnProperty(p)) {
                                    var C = S[p];
                                    p === 'style'
                                        ? pr(e, C)
                                        : p === 'dangerouslySetInnerHTML'
                                        ? ((C = C ? C.__html : void 0), C != null && tn(e, C))
                                        : p === 'children'
                                        ? typeof C == 'string'
                                            ? (r !== 'textarea' || C !== '') && nn(e, C)
                                            : typeof C == 'number' && nn(e, '' + C)
                                        : p !== 'suppressContentEditableWarning' &&
                                          p !== 'suppressHydrationWarning' &&
                                          p !== 'autoFocus' &&
                                          (l.hasOwnProperty(p)
                                              ? C != null && p === 'onScroll' && Ze('scroll', e)
                                              : C != null && U(e, p, C, m));
                                }
                            switch (r) {
                                case 'input':
                                    vt(e), Yt(e, s, !1);
                                    break;
                                case 'textarea':
                                    vt(e), pt(e);
                                    break;
                                case 'option':
                                    s.value != null && e.setAttribute('value', '' + Ce(s.value));
                                    break;
                                case 'select':
                                    (e.multiple = !!s.multiple),
                                        (p = s.value),
                                        p != null
                                            ? $e(e, !!s.multiple, p, !1)
                                            : s.defaultValue != null &&
                                              $e(e, !!s.multiple, s.defaultValue, !0);
                                    break;
                                default:
                                    typeof a.onClick == 'function' && (e.onclick = Hs);
                            }
                            switch (r) {
                                case 'button':
                                case 'input':
                                case 'select':
                                case 'textarea':
                                    s = !!s.autoFocus;
                                    break e;
                                case 'img':
                                    s = !0;
                                    break e;
                                default:
                                    s = !1;
                            }
                        }
                        s && (t.flags |= 4);
                    }
                    t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
                }
                return Gt(t), null;
            case 6:
                if (e && t.stateNode != null) gh(e, t, e.memoizedProps, s);
                else {
                    if (typeof s != 'string' && t.stateNode === null) throw Error(i(166));
                    if (((r = Gi(Al.current)), Gi(Mr.current), bs(t))) {
                        if (
                            ((s = t.stateNode),
                            (r = t.memoizedProps),
                            (s[Nr] = t),
                            (p = s.nodeValue !== r) && ((e = In), e !== null))
                        )
                            switch (e.tag) {
                                case 3:
                                    Ys(s.nodeValue, r, (e.mode & 1) !== 0);
                                    break;
                                case 5:
                                    e.memoizedProps.suppressHydrationWarning !== !0 &&
                                        Ys(s.nodeValue, r, (e.mode & 1) !== 0);
                            }
                        p && (t.flags |= 4);
                    } else
                        (s = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(s)),
                            (s[Nr] = t),
                            (t.stateNode = s);
                }
                return Gt(t), null;
            case 13:
                if (
                    (be(it),
                    (s = t.memoizedState),
                    e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
                ) {
                    if (tt && Bn !== null && t.mode & 1 && !(t.flags & 128))
                        yp(), Fo(), (t.flags |= 98560), (p = !1);
                    else if (((p = bs(t)), s !== null && s.dehydrated !== null)) {
                        if (e === null) {
                            if (!p) throw Error(i(318));
                            if (((p = t.memoizedState), (p = p !== null ? p.dehydrated : null), !p))
                                throw Error(i(317));
                            p[Nr] = t;
                        } else Fo(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
                        Gt(t), (p = !1);
                    } else vr !== null && (Yc(vr), (vr = null)), (p = !0);
                    if (!p) return t.flags & 65536 ? t : null;
                }
                return t.flags & 128
                    ? ((t.lanes = r), t)
                    : ((s = s !== null),
                      s !== (e !== null && e.memoizedState !== null) &&
                          s &&
                          ((t.child.flags |= 8192),
                          t.mode & 1 &&
                              (e === null || it.current & 1 ? Et === 0 && (Et = 3) : Qc())),
                      t.updateQueue !== null && (t.flags |= 4),
                      Gt(t),
                      null);
            case 4:
                return Vo(), Dc(e, t), e === null && Nl(t.stateNode.containerInfo), Gt(t), null;
            case 10:
                return sc(t.type._context), Gt(t), null;
            case 17:
                return kn(t.type) && Qs(), Gt(t), null;
            case 19:
                if ((be(it), (p = t.memoizedState), p === null)) return Gt(t), null;
                if (((s = (t.flags & 128) !== 0), (m = p.rendering), m === null))
                    if (s) Vl(p, !1);
                    else {
                        if (Et !== 0 || (e !== null && e.flags & 128))
                            for (e = t.child; e !== null; ) {
                                if (((m = iu(e)), m !== null)) {
                                    for (
                                        t.flags |= 128,
                                            Vl(p, !1),
                                            s = m.updateQueue,
                                            s !== null && ((t.updateQueue = s), (t.flags |= 4)),
                                            t.subtreeFlags = 0,
                                            s = r,
                                            r = t.child;
                                        r !== null;

                                    )
                                        (p = r),
                                            (e = s),
                                            (p.flags &= 14680066),
                                            (m = p.alternate),
                                            m === null
                                                ? ((p.childLanes = 0),
                                                  (p.lanes = e),
                                                  (p.child = null),
                                                  (p.subtreeFlags = 0),
                                                  (p.memoizedProps = null),
                                                  (p.memoizedState = null),
                                                  (p.updateQueue = null),
                                                  (p.dependencies = null),
                                                  (p.stateNode = null))
                                                : ((p.childLanes = m.childLanes),
                                                  (p.lanes = m.lanes),
                                                  (p.child = m.child),
                                                  (p.subtreeFlags = 0),
                                                  (p.deletions = null),
                                                  (p.memoizedProps = m.memoizedProps),
                                                  (p.memoizedState = m.memoizedState),
                                                  (p.updateQueue = m.updateQueue),
                                                  (p.type = m.type),
                                                  (e = m.dependencies),
                                                  (p.dependencies =
                                                      e === null
                                                          ? null
                                                          : {
                                                                lanes: e.lanes,
                                                                firstContext: e.firstContext,
                                                            })),
                                            (r = r.sibling);
                                    return Xe(it, (it.current & 1) | 2), t.child;
                                }
                                e = e.sibling;
                            }
                        p.tail !== null &&
                            Oe() > Ho &&
                            ((t.flags |= 128), (s = !0), Vl(p, !1), (t.lanes = 4194304));
                    }
                else {
                    if (!s)
                        if (((e = iu(m)), e !== null)) {
                            if (
                                ((t.flags |= 128),
                                (s = !0),
                                (r = e.updateQueue),
                                r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                                Vl(p, !0),
                                p.tail === null && p.tailMode === 'hidden' && !m.alternate && !tt)
                            )
                                return Gt(t), null;
                        } else
                            2 * Oe() - p.renderingStartTime > Ho &&
                                r !== 1073741824 &&
                                ((t.flags |= 128), (s = !0), Vl(p, !1), (t.lanes = 4194304));
                    p.isBackwards
                        ? ((m.sibling = t.child), (t.child = m))
                        : ((r = p.last),
                          r !== null ? (r.sibling = m) : (t.child = m),
                          (p.last = m));
                }
                return p.tail !== null
                    ? ((t = p.tail),
                      (p.rendering = t),
                      (p.tail = t.sibling),
                      (p.renderingStartTime = Oe()),
                      (t.sibling = null),
                      (r = it.current),
                      Xe(it, s ? (r & 1) | 2 : r & 1),
                      t)
                    : (Gt(t), null);
            case 22:
            case 23:
                return (
                    Xc(),
                    (s = t.memoizedState !== null),
                    e !== null && (e.memoizedState !== null) !== s && (t.flags |= 8192),
                    s && t.mode & 1
                        ? Un & 1073741824 && (Gt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
                        : Gt(t),
                    null
                );
            case 24:
                return null;
            case 25:
                return null;
        }
        throw Error(i(156, t.tag));
    }
    function Og(e, t) {
        switch ((tc(t), t.tag)) {
            case 1:
                return (
                    kn(t.type) && Qs(),
                    (e = t.flags),
                    e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
                );
            case 3:
                return (
                    Vo(),
                    be(Sn),
                    be(Xt),
                    hc(),
                    (e = t.flags),
                    e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
                );
            case 5:
                return dc(t), null;
            case 13:
                if ((be(it), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
                    if (t.alternate === null) throw Error(i(340));
                    Fo();
                }
                return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
            case 19:
                return be(it), null;
            case 4:
                return Vo(), null;
            case 10:
                return sc(t.type._context), null;
            case 22:
            case 23:
                return Xc(), null;
            case 24:
                return null;
            default:
                return null;
        }
    }
    var pu = !1,
        Kt = !1,
        Ng = typeof WeakSet == 'function' ? WeakSet : Set,
        te = null;
    function Wo(e, t) {
        var r = e.ref;
        if (r !== null)
            if (typeof r == 'function')
                try {
                    r(null);
                } catch (s) {
                    ft(e, t, s);
                }
            else r.current = null;
    }
    function Lc(e, t, r) {
        try {
            r();
        } catch (s) {
            ft(e, t, s);
        }
    }
    var _h = !1;
    function Mg(e, t) {
        if (((Xa = Ds), (e = Kd()), Ia(e))) {
            if ('selectionStart' in e) var r = { start: e.selectionStart, end: e.selectionEnd };
            else
                e: {
                    r = ((r = e.ownerDocument) && r.defaultView) || window;
                    var s = r.getSelection && r.getSelection();
                    if (s && s.rangeCount !== 0) {
                        r = s.anchorNode;
                        var a = s.anchorOffset,
                            p = s.focusNode;
                        s = s.focusOffset;
                        try {
                            r.nodeType, p.nodeType;
                        } catch {
                            r = null;
                            break e;
                        }
                        var m = 0,
                            S = -1,
                            C = -1,
                            z = 0,
                            H = 0,
                            G = e,
                            Y = null;
                        t: for (;;) {
                            for (
                                var J;
                                G !== r || (a !== 0 && G.nodeType !== 3) || (S = m + a),
                                    G !== p || (s !== 0 && G.nodeType !== 3) || (C = m + s),
                                    G.nodeType === 3 && (m += G.nodeValue.length),
                                    (J = G.firstChild) !== null;

                            )
                                (Y = G), (G = J);
                            for (;;) {
                                if (G === e) break t;
                                if (
                                    (Y === r && ++z === a && (S = m),
                                    Y === p && ++H === s && (C = m),
                                    (J = G.nextSibling) !== null)
                                )
                                    break;
                                (G = Y), (Y = G.parentNode);
                            }
                            G = J;
                        }
                        r = S === -1 || C === -1 ? null : { start: S, end: C };
                    } else r = null;
                }
            r = r || { start: 0, end: 0 };
        } else r = null;
        for (Qa = { focusedElem: e, selectionRange: r }, Ds = !1, te = t; te !== null; )
            if (((t = te), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
                (e.return = t), (te = e);
            else
                for (; te !== null; ) {
                    t = te;
                    try {
                        var re = t.alternate;
                        if (t.flags & 1024)
                            switch (t.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    break;
                                case 1:
                                    if (re !== null) {
                                        var ie = re.memoizedProps,
                                            mt = re.memoizedState,
                                            N = t.stateNode,
                                            P = N.getSnapshotBeforeUpdate(
                                                t.elementType === t.type ? ie : yr(t.type, ie),
                                                mt,
                                            );
                                        N.__reactInternalSnapshotBeforeUpdate = P;
                                    }
                                    break;
                                case 3:
                                    var M = t.stateNode.containerInfo;
                                    M.nodeType === 1
                                        ? (M.textContent = '')
                                        : M.nodeType === 9 &&
                                          M.documentElement &&
                                          M.removeChild(M.documentElement);
                                    break;
                                case 5:
                                case 6:
                                case 4:
                                case 17:
                                    break;
                                default:
                                    throw Error(i(163));
                            }
                    } catch (K) {
                        ft(t, t.return, K);
                    }
                    if (((e = t.sibling), e !== null)) {
                        (e.return = t.return), (te = e);
                        break;
                    }
                    te = t.return;
                }
        return (re = _h), (_h = !1), re;
    }
    function $l(e, t, r) {
        var s = t.updateQueue;
        if (((s = s !== null ? s.lastEffect : null), s !== null)) {
            var a = (s = s.next);
            do {
                if ((a.tag & e) === e) {
                    var p = a.destroy;
                    (a.destroy = void 0), p !== void 0 && Lc(t, r, p);
                }
                a = a.next;
            } while (a !== s);
        }
    }
    function hu(e, t) {
        if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
            var r = (t = t.next);
            do {
                if ((r.tag & e) === e) {
                    var s = r.create;
                    r.destroy = s();
                }
                r = r.next;
            } while (r !== t);
        }
    }
    function jc(e) {
        var t = e.ref;
        if (t !== null) {
            var r = e.stateNode;
            switch (e.tag) {
                case 5:
                    e = r;
                    break;
                default:
                    e = r;
            }
            typeof t == 'function' ? t(e) : (t.current = e);
        }
    }
    function vh(e) {
        var t = e.alternate;
        t !== null && ((e.alternate = null), vh(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            e.tag === 5 &&
                ((t = e.stateNode),
                t !== null &&
                    (delete t[Nr], delete t[Rl], delete t[Za], delete t[dg], delete t[pg])),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
    }
    function yh(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 4;
    }
    function xh(e) {
        e: for (;;) {
            for (; e.sibling === null; ) {
                if (e.return === null || yh(e.return)) return null;
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
    function Ac(e, t, r) {
        var s = e.tag;
        if (s === 5 || s === 6)
            (e = e.stateNode),
                t
                    ? r.nodeType === 8
                        ? r.parentNode.insertBefore(e, t)
                        : r.insertBefore(e, t)
                    : (r.nodeType === 8
                          ? ((t = r.parentNode), t.insertBefore(e, r))
                          : ((t = r), t.appendChild(e)),
                      (r = r._reactRootContainer),
                      r != null || t.onclick !== null || (t.onclick = Hs));
        else if (s !== 4 && ((e = e.child), e !== null))
            for (Ac(e, t, r), e = e.sibling; e !== null; ) Ac(e, t, r), (e = e.sibling);
    }
    function Fc(e, t, r) {
        var s = e.tag;
        if (s === 5 || s === 6) (e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e);
        else if (s !== 4 && ((e = e.child), e !== null))
            for (Fc(e, t, r), e = e.sibling; e !== null; ) Fc(e, t, r), (e = e.sibling);
    }
    var Ut = null,
        xr = !1;
    function yi(e, t, r) {
        for (r = r.child; r !== null; ) wh(e, t, r), (r = r.sibling);
    }
    function wh(e, t, r) {
        if (on && typeof on.onCommitFiberUnmount == 'function')
            try {
                on.onCommitFiberUnmount(Or, r);
            } catch {}
        switch (r.tag) {
            case 5:
                Kt || Wo(r, t);
            case 6:
                var s = Ut,
                    a = xr;
                (Ut = null),
                    yi(e, t, r),
                    (Ut = s),
                    (xr = a),
                    Ut !== null &&
                        (xr
                            ? ((e = Ut),
                              (r = r.stateNode),
                              e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r))
                            : Ut.removeChild(r.stateNode));
                break;
            case 18:
                Ut !== null &&
                    (xr
                        ? ((e = Ut),
                          (r = r.stateNode),
                          e.nodeType === 8 ? qa(e.parentNode, r) : e.nodeType === 1 && qa(e, r),
                          xl(e))
                        : qa(Ut, r.stateNode));
                break;
            case 4:
                (s = Ut),
                    (a = xr),
                    (Ut = r.stateNode.containerInfo),
                    (xr = !0),
                    yi(e, t, r),
                    (Ut = s),
                    (xr = a);
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                if (!Kt && ((s = r.updateQueue), s !== null && ((s = s.lastEffect), s !== null))) {
                    a = s = s.next;
                    do {
                        var p = a,
                            m = p.destroy;
                        (p = p.tag), m !== void 0 && (p & 2 || p & 4) && Lc(r, t, m), (a = a.next);
                    } while (a !== s);
                }
                yi(e, t, r);
                break;
            case 1:
                if (
                    !Kt &&
                    (Wo(r, t), (s = r.stateNode), typeof s.componentWillUnmount == 'function')
                )
                    try {
                        (s.props = r.memoizedProps),
                            (s.state = r.memoizedState),
                            s.componentWillUnmount();
                    } catch (S) {
                        ft(r, t, S);
                    }
                yi(e, t, r);
                break;
            case 21:
                yi(e, t, r);
                break;
            case 22:
                r.mode & 1
                    ? ((Kt = (s = Kt) || r.memoizedState !== null), yi(e, t, r), (Kt = s))
                    : yi(e, t, r);
                break;
            default:
                yi(e, t, r);
        }
    }
    function Sh(e) {
        var t = e.updateQueue;
        if (t !== null) {
            e.updateQueue = null;
            var r = e.stateNode;
            r === null && (r = e.stateNode = new Ng()),
                t.forEach(function (s) {
                    var a = Bg.bind(null, e, s);
                    r.has(s) || (r.add(s), s.then(a, a));
                });
        }
    }
    function wr(e, t) {
        var r = t.deletions;
        if (r !== null)
            for (var s = 0; s < r.length; s++) {
                var a = r[s];
                try {
                    var p = e,
                        m = t,
                        S = m;
                    e: for (; S !== null; ) {
                        switch (S.tag) {
                            case 5:
                                (Ut = S.stateNode), (xr = !1);
                                break e;
                            case 3:
                                (Ut = S.stateNode.containerInfo), (xr = !0);
                                break e;
                            case 4:
                                (Ut = S.stateNode.containerInfo), (xr = !0);
                                break e;
                        }
                        S = S.return;
                    }
                    if (Ut === null) throw Error(i(160));
                    wh(p, m, a), (Ut = null), (xr = !1);
                    var C = a.alternate;
                    C !== null && (C.return = null), (a.return = null);
                } catch (z) {
                    ft(a, t, z);
                }
            }
        if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) kh(t, e), (t = t.sibling);
    }
    function kh(e, t) {
        var r = e.alternate,
            s = e.flags;
        switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                if ((wr(t, e), zr(e), s & 4)) {
                    try {
                        $l(3, e, e.return), hu(3, e);
                    } catch (ie) {
                        ft(e, e.return, ie);
                    }
                    try {
                        $l(5, e, e.return);
                    } catch (ie) {
                        ft(e, e.return, ie);
                    }
                }
                break;
            case 1:
                wr(t, e), zr(e), s & 512 && r !== null && Wo(r, r.return);
                break;
            case 5:
                if ((wr(t, e), zr(e), s & 512 && r !== null && Wo(r, r.return), e.flags & 32)) {
                    var a = e.stateNode;
                    try {
                        nn(a, '');
                    } catch (ie) {
                        ft(e, e.return, ie);
                    }
                }
                if (s & 4 && ((a = e.stateNode), a != null)) {
                    var p = e.memoizedProps,
                        m = r !== null ? r.memoizedProps : p,
                        S = e.type,
                        C = e.updateQueue;
                    if (((e.updateQueue = null), C !== null))
                        try {
                            S === 'input' && p.type === 'radio' && p.name != null && Wt(a, p),
                                qn(S, m);
                            var z = qn(S, p);
                            for (m = 0; m < C.length; m += 2) {
                                var H = C[m],
                                    G = C[m + 1];
                                H === 'style'
                                    ? pr(a, G)
                                    : H === 'dangerouslySetInnerHTML'
                                    ? tn(a, G)
                                    : H === 'children'
                                    ? nn(a, G)
                                    : U(a, H, G, z);
                            }
                            switch (S) {
                                case 'input':
                                    j(a, p);
                                    break;
                                case 'textarea':
                                    Vr(a, p);
                                    break;
                                case 'select':
                                    var Y = a._wrapperState.wasMultiple;
                                    a._wrapperState.wasMultiple = !!p.multiple;
                                    var J = p.value;
                                    J != null
                                        ? $e(a, !!p.multiple, J, !1)
                                        : Y !== !!p.multiple &&
                                          (p.defaultValue != null
                                              ? $e(a, !!p.multiple, p.defaultValue, !0)
                                              : $e(a, !!p.multiple, p.multiple ? [] : '', !1));
                            }
                            a[Rl] = p;
                        } catch (ie) {
                            ft(e, e.return, ie);
                        }
                }
                break;
            case 6:
                if ((wr(t, e), zr(e), s & 4)) {
                    if (e.stateNode === null) throw Error(i(162));
                    (a = e.stateNode), (p = e.memoizedProps);
                    try {
                        a.nodeValue = p;
                    } catch (ie) {
                        ft(e, e.return, ie);
                    }
                }
                break;
            case 3:
                if ((wr(t, e), zr(e), s & 4 && r !== null && r.memoizedState.isDehydrated))
                    try {
                        xl(t.containerInfo);
                    } catch (ie) {
                        ft(e, e.return, ie);
                    }
                break;
            case 4:
                wr(t, e), zr(e);
                break;
            case 13:
                wr(t, e),
                    zr(e),
                    (a = e.child),
                    a.flags & 8192 &&
                        ((p = a.memoizedState !== null),
                        (a.stateNode.isHidden = p),
                        !p ||
                            (a.alternate !== null && a.alternate.memoizedState !== null) ||
                            (Uc = Oe())),
                    s & 4 && Sh(e);
                break;
            case 22:
                if (
                    ((H = r !== null && r.memoizedState !== null),
                    e.mode & 1 ? ((Kt = (z = Kt) || H), wr(t, e), (Kt = z)) : wr(t, e),
                    zr(e),
                    s & 8192)
                ) {
                    if (
                        ((z = e.memoizedState !== null),
                        (e.stateNode.isHidden = z) && !H && e.mode & 1)
                    )
                        for (te = e, H = e.child; H !== null; ) {
                            for (G = te = H; te !== null; ) {
                                switch (((Y = te), (J = Y.child), Y.tag)) {
                                    case 0:
                                    case 11:
                                    case 14:
                                    case 15:
                                        $l(4, Y, Y.return);
                                        break;
                                    case 1:
                                        Wo(Y, Y.return);
                                        var re = Y.stateNode;
                                        if (typeof re.componentWillUnmount == 'function') {
                                            (s = Y), (r = Y.return);
                                            try {
                                                (t = s),
                                                    (re.props = t.memoizedProps),
                                                    (re.state = t.memoizedState),
                                                    re.componentWillUnmount();
                                            } catch (ie) {
                                                ft(s, r, ie);
                                            }
                                        }
                                        break;
                                    case 5:
                                        Wo(Y, Y.return);
                                        break;
                                    case 22:
                                        if (Y.memoizedState !== null) {
                                            Eh(G);
                                            continue;
                                        }
                                }
                                J !== null ? ((J.return = Y), (te = J)) : Eh(G);
                            }
                            H = H.sibling;
                        }
                    e: for (H = null, G = e; ; ) {
                        if (G.tag === 5) {
                            if (H === null) {
                                H = G;
                                try {
                                    (a = G.stateNode),
                                        z
                                            ? ((p = a.style),
                                              typeof p.setProperty == 'function'
                                                  ? p.setProperty('display', 'none', 'important')
                                                  : (p.display = 'none'))
                                            : ((S = G.stateNode),
                                              (C = G.memoizedProps.style),
                                              (m =
                                                  C != null && C.hasOwnProperty('display')
                                                      ? C.display
                                                      : null),
                                              (S.style.display = Bi('display', m)));
                                } catch (ie) {
                                    ft(e, e.return, ie);
                                }
                            }
                        } else if (G.tag === 6) {
                            if (H === null)
                                try {
                                    G.stateNode.nodeValue = z ? '' : G.memoizedProps;
                                } catch (ie) {
                                    ft(e, e.return, ie);
                                }
                        } else if (
                            ((G.tag !== 22 && G.tag !== 23) ||
                                G.memoizedState === null ||
                                G === e) &&
                            G.child !== null
                        ) {
                            (G.child.return = G), (G = G.child);
                            continue;
                        }
                        if (G === e) break e;
                        for (; G.sibling === null; ) {
                            if (G.return === null || G.return === e) break e;
                            H === G && (H = null), (G = G.return);
                        }
                        H === G && (H = null), (G.sibling.return = G.return), (G = G.sibling);
                    }
                }
                break;
            case 19:
                wr(t, e), zr(e), s & 4 && Sh(e);
                break;
            case 21:
                break;
            default:
                wr(t, e), zr(e);
        }
    }
    function zr(e) {
        var t = e.flags;
        if (t & 2) {
            try {
                e: {
                    for (var r = e.return; r !== null; ) {
                        if (yh(r)) {
                            var s = r;
                            break e;
                        }
                        r = r.return;
                    }
                    throw Error(i(160));
                }
                switch (s.tag) {
                    case 5:
                        var a = s.stateNode;
                        s.flags & 32 && (nn(a, ''), (s.flags &= -33));
                        var p = xh(e);
                        Fc(e, p, a);
                        break;
                    case 3:
                    case 4:
                        var m = s.stateNode.containerInfo,
                            S = xh(e);
                        Ac(e, S, m);
                        break;
                    default:
                        throw Error(i(161));
                }
            } catch (C) {
                ft(e, e.return, C);
            }
            e.flags &= -3;
        }
        t & 4096 && (e.flags &= -4097);
    }
    function Rg(e, t, r) {
        (te = e), Ch(e);
    }
    function Ch(e, t, r) {
        for (var s = (e.mode & 1) !== 0; te !== null; ) {
            var a = te,
                p = a.child;
            if (a.tag === 22 && s) {
                var m = a.memoizedState !== null || pu;
                if (!m) {
                    var S = a.alternate,
                        C = (S !== null && S.memoizedState !== null) || Kt;
                    S = pu;
                    var z = Kt;
                    if (((pu = m), (Kt = C) && !z))
                        for (te = a; te !== null; )
                            (m = te),
                                (C = m.child),
                                m.tag === 22 && m.memoizedState !== null
                                    ? Ph(a)
                                    : C !== null
                                    ? ((C.return = m), (te = C))
                                    : Ph(a);
                    for (; p !== null; ) (te = p), Ch(p), (p = p.sibling);
                    (te = a), (pu = S), (Kt = z);
                }
                Th(e);
            } else a.subtreeFlags & 8772 && p !== null ? ((p.return = a), (te = p)) : Th(e);
        }
    }
    function Th(e) {
        for (; te !== null; ) {
            var t = te;
            if (t.flags & 8772) {
                var r = t.alternate;
                try {
                    if (t.flags & 8772)
                        switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                Kt || hu(5, t);
                                break;
                            case 1:
                                var s = t.stateNode;
                                if (t.flags & 4 && !Kt)
                                    if (r === null) s.componentDidMount();
                                    else {
                                        var a =
                                            t.elementType === t.type
                                                ? r.memoizedProps
                                                : yr(t.type, r.memoizedProps);
                                        s.componentDidUpdate(
                                            a,
                                            r.memoizedState,
                                            s.__reactInternalSnapshotBeforeUpdate,
                                        );
                                    }
                                var p = t.updateQueue;
                                p !== null && Ep(t, p, s);
                                break;
                            case 3:
                                var m = t.updateQueue;
                                if (m !== null) {
                                    if (((r = null), t.child !== null))
                                        switch (t.child.tag) {
                                            case 5:
                                                r = t.child.stateNode;
                                                break;
                                            case 1:
                                                r = t.child.stateNode;
                                        }
                                    Ep(t, m, r);
                                }
                                break;
                            case 5:
                                var S = t.stateNode;
                                if (r === null && t.flags & 4) {
                                    r = S;
                                    var C = t.memoizedProps;
                                    switch (t.type) {
                                        case 'button':
                                        case 'input':
                                        case 'select':
                                        case 'textarea':
                                            C.autoFocus && r.focus();
                                            break;
                                        case 'img':
                                            C.src && (r.src = C.src);
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
                                    var z = t.alternate;
                                    if (z !== null) {
                                        var H = z.memoizedState;
                                        if (H !== null) {
                                            var G = H.dehydrated;
                                            G !== null && xl(G);
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
                                throw Error(i(163));
                        }
                    Kt || (t.flags & 512 && jc(t));
                } catch (Y) {
                    ft(t, t.return, Y);
                }
            }
            if (t === e) {
                te = null;
                break;
            }
            if (((r = t.sibling), r !== null)) {
                (r.return = t.return), (te = r);
                break;
            }
            te = t.return;
        }
    }
    function Eh(e) {
        for (; te !== null; ) {
            var t = te;
            if (t === e) {
                te = null;
                break;
            }
            var r = t.sibling;
            if (r !== null) {
                (r.return = t.return), (te = r);
                break;
            }
            te = t.return;
        }
    }
    function Ph(e) {
        for (; te !== null; ) {
            var t = te;
            try {
                switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        var r = t.return;
                        try {
                            hu(4, t);
                        } catch (C) {
                            ft(t, r, C);
                        }
                        break;
                    case 1:
                        var s = t.stateNode;
                        if (typeof s.componentDidMount == 'function') {
                            var a = t.return;
                            try {
                                s.componentDidMount();
                            } catch (C) {
                                ft(t, a, C);
                            }
                        }
                        var p = t.return;
                        try {
                            jc(t);
                        } catch (C) {
                            ft(t, p, C);
                        }
                        break;
                    case 5:
                        var m = t.return;
                        try {
                            jc(t);
                        } catch (C) {
                            ft(t, m, C);
                        }
                }
            } catch (C) {
                ft(t, t.return, C);
            }
            if (t === e) {
                te = null;
                break;
            }
            var S = t.sibling;
            if (S !== null) {
                (S.return = t.return), (te = S);
                break;
            }
            te = t.return;
        }
    }
    var zg = Math.ceil,
        mu = D.ReactCurrentDispatcher,
        Ic = D.ReactCurrentOwner,
        nr = D.ReactCurrentBatchConfig,
        Ie = 0,
        Dt = null,
        wt = null,
        Vt = 0,
        Un = 0,
        Yo = hi(0),
        Et = 0,
        Wl = null,
        qi = 0,
        gu = 0,
        Bc = 0,
        Yl = null,
        Tn = null,
        Uc = 0,
        Ho = 1 / 0,
        Zr = null,
        _u = !1,
        Vc = null,
        xi = null,
        vu = !1,
        wi = null,
        yu = 0,
        Hl = 0,
        $c = null,
        xu = -1,
        wu = 0;
    function sn() {
        return Ie & 6 ? Oe() : xu !== -1 ? xu : (xu = Oe());
    }
    function Si(e) {
        return e.mode & 1
            ? Ie & 2 && Vt !== 0
                ? Vt & -Vt
                : mg.transition !== null
                ? (wu === 0 && (wu = xd()), wu)
                : ((e = Ve),
                  e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Nd(e.type))),
                  e)
            : 1;
    }
    function Sr(e, t, r, s) {
        if (50 < Hl) throw ((Hl = 0), ($c = null), Error(i(185)));
        ml(e, r, s),
            (!(Ie & 2) || e !== Dt) &&
                (e === Dt && (!(Ie & 2) && (gu |= r), Et === 4 && ki(e, Vt)),
                En(e, s),
                r === 1 && Ie === 0 && !(t.mode & 1) && ((Ho = Oe() + 500), Ks && gi()));
    }
    function En(e, t) {
        var r = e.callbackNode;
        m1(e, t);
        var s = Ms(e, e === Dt ? Vt : 0);
        if (s === 0) r !== null && Ct(r), (e.callbackNode = null), (e.callbackPriority = 0);
        else if (((t = s & -s), e.callbackPriority !== t)) {
            if ((r != null && Ct(r), t === 1))
                e.tag === 0 ? hg(Nh.bind(null, e)) : hp(Nh.bind(null, e)),
                    cg(function () {
                        !(Ie & 6) && gi();
                    }),
                    (r = null);
            else {
                switch (wd(s)) {
                    case 1:
                        r = wn;
                        break;
                    case 4:
                        r = Co;
                        break;
                    case 16:
                        r = Ui;
                        break;
                    case 536870912:
                        r = An;
                        break;
                    default:
                        r = Ui;
                }
                r = Fh(r, Oh.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = r);
        }
    }
    function Oh(e, t) {
        if (((xu = -1), (wu = 0), Ie & 6)) throw Error(i(327));
        var r = e.callbackNode;
        if (Xo() && e.callbackNode !== r) return null;
        var s = Ms(e, e === Dt ? Vt : 0);
        if (s === 0) return null;
        if (s & 30 || s & e.expiredLanes || t) t = Su(e, s);
        else {
            t = s;
            var a = Ie;
            Ie |= 2;
            var p = Rh();
            (Dt !== e || Vt !== t) && ((Zr = null), (Ho = Oe() + 500), bi(e, t));
            do
                try {
                    jg();
                    break;
                } catch (S) {
                    Mh(e, S);
                }
            while (!0);
            lc(),
                (mu.current = p),
                (Ie = a),
                wt !== null ? (t = 0) : ((Dt = null), (Vt = 0), (t = Et));
        }
        if (t !== 0) {
            if ((t === 2 && ((a = Sa(e)), a !== 0 && ((s = a), (t = Wc(e, a)))), t === 1))
                throw ((r = Wl), bi(e, 0), ki(e, s), En(e, Oe()), r);
            if (t === 6) ki(e, s);
            else {
                if (
                    ((a = e.current.alternate),
                    !(s & 30) &&
                        !Dg(a) &&
                        ((t = Su(e, s)),
                        t === 2 && ((p = Sa(e)), p !== 0 && ((s = p), (t = Wc(e, p)))),
                        t === 1))
                )
                    throw ((r = Wl), bi(e, 0), ki(e, s), En(e, Oe()), r);
                switch (((e.finishedWork = a), (e.finishedLanes = s), t)) {
                    case 0:
                    case 1:
                        throw Error(i(345));
                    case 2:
                        Ji(e, Tn, Zr);
                        break;
                    case 3:
                        if ((ki(e, s), (s & 130023424) === s && ((t = Uc + 500 - Oe()), 10 < t))) {
                            if (Ms(e, 0) !== 0) break;
                            if (((a = e.suspendedLanes), (a & s) !== s)) {
                                sn(), (e.pingedLanes |= e.suspendedLanes & a);
                                break;
                            }
                            e.timeoutHandle = Ka(Ji.bind(null, e, Tn, Zr), t);
                            break;
                        }
                        Ji(e, Tn, Zr);
                        break;
                    case 4:
                        if ((ki(e, s), (s & 4194240) === s)) break;
                        for (t = e.eventTimes, a = -1; 0 < s; ) {
                            var m = 31 - gr(s);
                            (p = 1 << m), (m = t[m]), m > a && (a = m), (s &= ~p);
                        }
                        if (
                            ((s = a),
                            (s = Oe() - s),
                            (s =
                                (120 > s
                                    ? 120
                                    : 480 > s
                                    ? 480
                                    : 1080 > s
                                    ? 1080
                                    : 1920 > s
                                    ? 1920
                                    : 3e3 > s
                                    ? 3e3
                                    : 4320 > s
                                    ? 4320
                                    : 1960 * zg(s / 1960)) - s),
                            10 < s)
                        ) {
                            e.timeoutHandle = Ka(Ji.bind(null, e, Tn, Zr), s);
                            break;
                        }
                        Ji(e, Tn, Zr);
                        break;
                    case 5:
                        Ji(e, Tn, Zr);
                        break;
                    default:
                        throw Error(i(329));
                }
            }
        }
        return En(e, Oe()), e.callbackNode === r ? Oh.bind(null, e) : null;
    }
    function Wc(e, t) {
        var r = Yl;
        return (
            e.current.memoizedState.isDehydrated && (bi(e, t).flags |= 256),
            (e = Su(e, t)),
            e !== 2 && ((t = Tn), (Tn = r), t !== null && Yc(t)),
            e
        );
    }
    function Yc(e) {
        Tn === null ? (Tn = e) : Tn.push.apply(Tn, e);
    }
    function Dg(e) {
        for (var t = e; ; ) {
            if (t.flags & 16384) {
                var r = t.updateQueue;
                if (r !== null && ((r = r.stores), r !== null))
                    for (var s = 0; s < r.length; s++) {
                        var a = r[s],
                            p = a.getSnapshot;
                        a = a.value;
                        try {
                            if (!_r(p(), a)) return !1;
                        } catch {
                            return !1;
                        }
                    }
            }
            if (((r = t.child), t.subtreeFlags & 16384 && r !== null)) (r.return = t), (t = r);
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
    function ki(e, t) {
        for (
            t &= ~Bc, t &= ~gu, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
            0 < t;

        ) {
            var r = 31 - gr(t),
                s = 1 << r;
            (e[r] = -1), (t &= ~s);
        }
    }
    function Nh(e) {
        if (Ie & 6) throw Error(i(327));
        Xo();
        var t = Ms(e, 0);
        if (!(t & 1)) return En(e, Oe()), null;
        var r = Su(e, t);
        if (e.tag !== 0 && r === 2) {
            var s = Sa(e);
            s !== 0 && ((t = s), (r = Wc(e, s)));
        }
        if (r === 1) throw ((r = Wl), bi(e, 0), ki(e, t), En(e, Oe()), r);
        if (r === 6) throw Error(i(345));
        return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            Ji(e, Tn, Zr),
            En(e, Oe()),
            null
        );
    }
    function Hc(e, t) {
        var r = Ie;
        Ie |= 1;
        try {
            return e(t);
        } finally {
            (Ie = r), Ie === 0 && ((Ho = Oe() + 500), Ks && gi());
        }
    }
    function Zi(e) {
        wi !== null && wi.tag === 0 && !(Ie & 6) && Xo();
        var t = Ie;
        Ie |= 1;
        var r = nr.transition,
            s = Ve;
        try {
            if (((nr.transition = null), (Ve = 1), e)) return e();
        } finally {
            (Ve = s), (nr.transition = r), (Ie = t), !(Ie & 6) && gi();
        }
    }
    function Xc() {
        (Un = Yo.current), be(Yo);
    }
    function bi(e, t) {
        (e.finishedWork = null), (e.finishedLanes = 0);
        var r = e.timeoutHandle;
        if ((r !== -1 && ((e.timeoutHandle = -1), ag(r)), wt !== null))
            for (r = wt.return; r !== null; ) {
                var s = r;
                switch ((tc(s), s.tag)) {
                    case 1:
                        (s = s.type.childContextTypes), s != null && Qs();
                        break;
                    case 3:
                        Vo(), be(Sn), be(Xt), hc();
                        break;
                    case 5:
                        dc(s);
                        break;
                    case 4:
                        Vo();
                        break;
                    case 13:
                        be(it);
                        break;
                    case 19:
                        be(it);
                        break;
                    case 10:
                        sc(s.type._context);
                        break;
                    case 22:
                    case 23:
                        Xc();
                }
                r = r.return;
            }
        if (
            ((Dt = e),
            (wt = e = Ci(e.current, null)),
            (Vt = Un = t),
            (Et = 0),
            (Wl = null),
            (Bc = gu = qi = 0),
            (Tn = Yl = null),
            Qi !== null)
        ) {
            for (t = 0; t < Qi.length; t++)
                if (((r = Qi[t]), (s = r.interleaved), s !== null)) {
                    r.interleaved = null;
                    var a = s.next,
                        p = r.pending;
                    if (p !== null) {
                        var m = p.next;
                        (p.next = a), (s.next = m);
                    }
                    r.pending = s;
                }
            Qi = null;
        }
        return e;
    }
    function Mh(e, t) {
        do {
            var r = wt;
            try {
                if ((lc(), (ou.current = au), lu)) {
                    for (var s = ot.memoizedState; s !== null; ) {
                        var a = s.queue;
                        a !== null && (a.pending = null), (s = s.next);
                    }
                    lu = !1;
                }
                if (
                    ((Ki = 0),
                    (zt = Tt = ot = null),
                    (Fl = !1),
                    (Il = 0),
                    (Ic.current = null),
                    r === null || r.return === null)
                ) {
                    (Et = 1), (Wl = t), (wt = null);
                    break;
                }
                e: {
                    var p = e,
                        m = r.return,
                        S = r,
                        C = t;
                    if (
                        ((t = Vt),
                        (S.flags |= 32768),
                        C !== null && typeof C == 'object' && typeof C.then == 'function')
                    ) {
                        var z = C,
                            H = S,
                            G = H.tag;
                        if (!(H.mode & 1) && (G === 0 || G === 11 || G === 15)) {
                            var Y = H.alternate;
                            Y
                                ? ((H.updateQueue = Y.updateQueue),
                                  (H.memoizedState = Y.memoizedState),
                                  (H.lanes = Y.lanes))
                                : ((H.updateQueue = null), (H.memoizedState = null));
                        }
                        var J = th(m);
                        if (J !== null) {
                            (J.flags &= -257),
                                nh(J, m, S, p, t),
                                J.mode & 1 && eh(p, z, t),
                                (t = J),
                                (C = z);
                            var re = t.updateQueue;
                            if (re === null) {
                                var ie = new Set();
                                ie.add(C), (t.updateQueue = ie);
                            } else re.add(C);
                            break e;
                        } else {
                            if (!(t & 1)) {
                                eh(p, z, t), Qc();
                                break e;
                            }
                            C = Error(i(426));
                        }
                    } else if (tt && S.mode & 1) {
                        var mt = th(m);
                        if (mt !== null) {
                            !(mt.flags & 65536) && (mt.flags |= 256),
                                nh(mt, m, S, p, t),
                                ic($o(C, S));
                            break e;
                        }
                    }
                    (p = C = $o(C, S)),
                        Et !== 4 && (Et = 2),
                        Yl === null ? (Yl = [p]) : Yl.push(p),
                        (p = m);
                    do {
                        switch (p.tag) {
                            case 3:
                                (p.flags |= 65536), (t &= -t), (p.lanes |= t);
                                var N = bp(p, C, t);
                                Tp(p, N);
                                break e;
                            case 1:
                                S = C;
                                var P = p.type,
                                    M = p.stateNode;
                                if (
                                    !(p.flags & 128) &&
                                    (typeof P.getDerivedStateFromError == 'function' ||
                                        (M !== null &&
                                            typeof M.componentDidCatch == 'function' &&
                                            (xi === null || !xi.has(M))))
                                ) {
                                    (p.flags |= 65536), (t &= -t), (p.lanes |= t);
                                    var K = Jp(p, S, t);
                                    Tp(p, K);
                                    break e;
                                }
                        }
                        p = p.return;
                    } while (p !== null);
                }
                Dh(r);
            } catch (le) {
                (t = le), wt === r && r !== null && (wt = r = r.return);
                continue;
            }
            break;
        } while (!0);
    }
    function Rh() {
        var e = mu.current;
        return (mu.current = au), e === null ? au : e;
    }
    function Qc() {
        (Et === 0 || Et === 3 || Et === 2) && (Et = 4),
            Dt === null || (!(qi & 268435455) && !(gu & 268435455)) || ki(Dt, Vt);
    }
    function Su(e, t) {
        var r = Ie;
        Ie |= 2;
        var s = Rh();
        (Dt !== e || Vt !== t) && ((Zr = null), bi(e, t));
        do
            try {
                Lg();
                break;
            } catch (a) {
                Mh(e, a);
            }
        while (!0);
        if ((lc(), (Ie = r), (mu.current = s), wt !== null)) throw Error(i(261));
        return (Dt = null), (Vt = 0), Et;
    }
    function Lg() {
        for (; wt !== null; ) zh(wt);
    }
    function jg() {
        for (; wt !== null && !Wr(); ) zh(wt);
    }
    function zh(e) {
        var t = Ah(e.alternate, e, Un);
        (e.memoizedProps = e.pendingProps), t === null ? Dh(e) : (wt = t), (Ic.current = null);
    }
    function Dh(e) {
        var t = e;
        do {
            var r = t.alternate;
            if (((e = t.return), t.flags & 32768)) {
                if (((r = Og(r, t)), r !== null)) {
                    (r.flags &= 32767), (wt = r);
                    return;
                }
                if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
                else {
                    (Et = 6), (wt = null);
                    return;
                }
            } else if (((r = Pg(r, t, Un)), r !== null)) {
                wt = r;
                return;
            }
            if (((t = t.sibling), t !== null)) {
                wt = t;
                return;
            }
            wt = t = e;
        } while (t !== null);
        Et === 0 && (Et = 5);
    }
    function Ji(e, t, r) {
        var s = Ve,
            a = nr.transition;
        try {
            (nr.transition = null), (Ve = 1), Ag(e, t, r, s);
        } finally {
            (nr.transition = a), (Ve = s);
        }
        return null;
    }
    function Ag(e, t, r, s) {
        do Xo();
        while (wi !== null);
        if (Ie & 6) throw Error(i(327));
        r = e.finishedWork;
        var a = e.finishedLanes;
        if (r === null) return null;
        if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current)) throw Error(i(177));
        (e.callbackNode = null), (e.callbackPriority = 0);
        var p = r.lanes | r.childLanes;
        if (
            (g1(e, p),
            e === Dt && ((wt = Dt = null), (Vt = 0)),
            (!(r.subtreeFlags & 2064) && !(r.flags & 2064)) ||
                vu ||
                ((vu = !0),
                Fh(Ui, function () {
                    return Xo(), null;
                })),
            (p = (r.flags & 15990) !== 0),
            r.subtreeFlags & 15990 || p)
        ) {
            (p = nr.transition), (nr.transition = null);
            var m = Ve;
            Ve = 1;
            var S = Ie;
            (Ie |= 4),
                (Ic.current = null),
                Mg(e, r),
                kh(r, e),
                ng(Qa),
                (Ds = !!Xa),
                (Qa = Xa = null),
                (e.current = r),
                Rg(r),
                ko(),
                (Ie = S),
                (Ve = m),
                (nr.transition = p);
        } else e.current = r;
        if (
            (vu && ((vu = !1), (wi = e), (yu = a)),
            (p = e.pendingLanes),
            p === 0 && (xi = null),
            $i(r.stateNode),
            En(e, Oe()),
            t !== null)
        )
            for (s = e.onRecoverableError, r = 0; r < t.length; r++)
                (a = t[r]), s(a.value, { componentStack: a.stack, digest: a.digest });
        if (_u) throw ((_u = !1), (e = Vc), (Vc = null), e);
        return (
            yu & 1 && e.tag !== 0 && Xo(),
            (p = e.pendingLanes),
            p & 1 ? (e === $c ? Hl++ : ((Hl = 0), ($c = e))) : (Hl = 0),
            gi(),
            null
        );
    }
    function Xo() {
        if (wi !== null) {
            var e = wd(yu),
                t = nr.transition,
                r = Ve;
            try {
                if (((nr.transition = null), (Ve = 16 > e ? 16 : e), wi === null)) var s = !1;
                else {
                    if (((e = wi), (wi = null), (yu = 0), Ie & 6)) throw Error(i(331));
                    var a = Ie;
                    for (Ie |= 4, te = e.current; te !== null; ) {
                        var p = te,
                            m = p.child;
                        if (te.flags & 16) {
                            var S = p.deletions;
                            if (S !== null) {
                                for (var C = 0; C < S.length; C++) {
                                    var z = S[C];
                                    for (te = z; te !== null; ) {
                                        var H = te;
                                        switch (H.tag) {
                                            case 0:
                                            case 11:
                                            case 15:
                                                $l(8, H, p);
                                        }
                                        var G = H.child;
                                        if (G !== null) (G.return = H), (te = G);
                                        else
                                            for (; te !== null; ) {
                                                H = te;
                                                var Y = H.sibling,
                                                    J = H.return;
                                                if ((vh(H), H === z)) {
                                                    te = null;
                                                    break;
                                                }
                                                if (Y !== null) {
                                                    (Y.return = J), (te = Y);
                                                    break;
                                                }
                                                te = J;
                                            }
                                    }
                                }
                                var re = p.alternate;
                                if (re !== null) {
                                    var ie = re.child;
                                    if (ie !== null) {
                                        re.child = null;
                                        do {
                                            var mt = ie.sibling;
                                            (ie.sibling = null), (ie = mt);
                                        } while (ie !== null);
                                    }
                                }
                                te = p;
                            }
                        }
                        if (p.subtreeFlags & 2064 && m !== null) (m.return = p), (te = m);
                        else
                            e: for (; te !== null; ) {
                                if (((p = te), p.flags & 2048))
                                    switch (p.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            $l(9, p, p.return);
                                    }
                                var N = p.sibling;
                                if (N !== null) {
                                    (N.return = p.return), (te = N);
                                    break e;
                                }
                                te = p.return;
                            }
                    }
                    var P = e.current;
                    for (te = P; te !== null; ) {
                        m = te;
                        var M = m.child;
                        if (m.subtreeFlags & 2064 && M !== null) (M.return = m), (te = M);
                        else
                            e: for (m = P; te !== null; ) {
                                if (((S = te), S.flags & 2048))
                                    try {
                                        switch (S.tag) {
                                            case 0:
                                            case 11:
                                            case 15:
                                                hu(9, S);
                                        }
                                    } catch (le) {
                                        ft(S, S.return, le);
                                    }
                                if (S === m) {
                                    te = null;
                                    break e;
                                }
                                var K = S.sibling;
                                if (K !== null) {
                                    (K.return = S.return), (te = K);
                                    break e;
                                }
                                te = S.return;
                            }
                    }
                    if (((Ie = a), gi(), on && typeof on.onPostCommitFiberRoot == 'function'))
                        try {
                            on.onPostCommitFiberRoot(Or, e);
                        } catch {}
                    s = !0;
                }
                return s;
            } finally {
                (Ve = r), (nr.transition = t);
            }
        }
        return !1;
    }
    function Lh(e, t, r) {
        (t = $o(r, t)),
            (t = bp(e, t, 1)),
            (e = vi(e, t, 1)),
            (t = sn()),
            e !== null && (ml(e, 1, t), En(e, t));
    }
    function ft(e, t, r) {
        if (e.tag === 3) Lh(e, e, r);
        else
            for (; t !== null; ) {
                if (t.tag === 3) {
                    Lh(t, e, r);
                    break;
                } else if (t.tag === 1) {
                    var s = t.stateNode;
                    if (
                        typeof t.type.getDerivedStateFromError == 'function' ||
                        (typeof s.componentDidCatch == 'function' && (xi === null || !xi.has(s)))
                    ) {
                        (e = $o(r, e)),
                            (e = Jp(t, e, 1)),
                            (t = vi(t, e, 1)),
                            (e = sn()),
                            t !== null && (ml(t, 1, e), En(t, e));
                        break;
                    }
                }
                t = t.return;
            }
    }
    function Fg(e, t, r) {
        var s = e.pingCache;
        s !== null && s.delete(t),
            (t = sn()),
            (e.pingedLanes |= e.suspendedLanes & r),
            Dt === e &&
                (Vt & r) === r &&
                (Et === 4 || (Et === 3 && (Vt & 130023424) === Vt && 500 > Oe() - Uc)
                    ? bi(e, 0)
                    : (Bc |= r)),
            En(e, t);
    }
    function jh(e, t) {
        t === 0 &&
            (e.mode & 1 ? ((t = Ns), (Ns <<= 1), !(Ns & 130023424) && (Ns = 4194304)) : (t = 1));
        var r = sn();
        (e = Gr(e, t)), e !== null && (ml(e, t, r), En(e, r));
    }
    function Ig(e) {
        var t = e.memoizedState,
            r = 0;
        t !== null && (r = t.retryLane), jh(e, r);
    }
    function Bg(e, t) {
        var r = 0;
        switch (e.tag) {
            case 13:
                var s = e.stateNode,
                    a = e.memoizedState;
                a !== null && (r = a.retryLane);
                break;
            case 19:
                s = e.stateNode;
                break;
            default:
                throw Error(i(314));
        }
        s !== null && s.delete(t), jh(e, r);
    }
    var Ah;
    Ah = function (e, t, r) {
        if (e !== null)
            if (e.memoizedProps !== t.pendingProps || Sn.current) Cn = !0;
            else {
                if (!(e.lanes & r) && !(t.flags & 128)) return (Cn = !1), Eg(e, t, r);
                Cn = !!(e.flags & 131072);
            }
        else (Cn = !1), tt && t.flags & 1048576 && mp(t, Zs, t.index);
        switch (((t.lanes = 0), t.tag)) {
            case 2:
                var s = t.type;
                du(e, t), (e = t.pendingProps);
                var a = Lo(t, Xt.current);
                Uo(t, r), (a = _c(null, t, s, e, a, r));
                var p = vc();
                return (
                    (t.flags |= 1),
                    typeof a == 'object' &&
                    a !== null &&
                    typeof a.render == 'function' &&
                    a.$$typeof === void 0
                        ? ((t.tag = 1),
                          (t.memoizedState = null),
                          (t.updateQueue = null),
                          kn(s) ? ((p = !0), Gs(t)) : (p = !1),
                          (t.memoizedState =
                              a.state !== null && a.state !== void 0 ? a.state : null),
                          cc(t),
                          (a.updater = cu),
                          (t.stateNode = a),
                          (a._reactInternals = t),
                          Cc(t, s, e, r),
                          (t = Oc(null, t, s, !0, p, r)))
                        : ((t.tag = 0), tt && p && ec(t), ln(null, t, a, r), (t = t.child)),
                    t
                );
            case 16:
                s = t.elementType;
                e: {
                    switch (
                        (du(e, t),
                        (e = t.pendingProps),
                        (a = s._init),
                        (s = a(s._payload)),
                        (t.type = s),
                        (a = t.tag = Vg(s)),
                        (e = yr(s, e)),
                        a)
                    ) {
                        case 0:
                            t = Pc(null, t, s, e, r);
                            break e;
                        case 1:
                            t = uh(null, t, s, e, r);
                            break e;
                        case 11:
                            t = rh(null, t, s, e, r);
                            break e;
                        case 14:
                            t = ih(null, t, s, yr(s.type, e), r);
                            break e;
                    }
                    throw Error(i(306, s, ''));
                }
                return t;
            case 0:
                return (
                    (s = t.type),
                    (a = t.pendingProps),
                    (a = t.elementType === s ? a : yr(s, a)),
                    Pc(e, t, s, a, r)
                );
            case 1:
                return (
                    (s = t.type),
                    (a = t.pendingProps),
                    (a = t.elementType === s ? a : yr(s, a)),
                    uh(e, t, s, a, r)
                );
            case 3:
                e: {
                    if ((ah(t), e === null)) throw Error(i(387));
                    (s = t.pendingProps),
                        (p = t.memoizedState),
                        (a = p.element),
                        Cp(e, t),
                        ru(t, s, null, r);
                    var m = t.memoizedState;
                    if (((s = m.element), p.isDehydrated))
                        if (
                            ((p = {
                                element: s,
                                isDehydrated: !1,
                                cache: m.cache,
                                pendingSuspenseBoundaries: m.pendingSuspenseBoundaries,
                                transitions: m.transitions,
                            }),
                            (t.updateQueue.baseState = p),
                            (t.memoizedState = p),
                            t.flags & 256)
                        ) {
                            (a = $o(Error(i(423)), t)), (t = ch(e, t, s, r, a));
                            break e;
                        } else if (s !== a) {
                            (a = $o(Error(i(424)), t)), (t = ch(e, t, s, r, a));
                            break e;
                        } else
                            for (
                                Bn = pi(t.stateNode.containerInfo.firstChild),
                                    In = t,
                                    tt = !0,
                                    vr = null,
                                    r = Sp(t, null, s, r),
                                    t.child = r;
                                r;

                            )
                                (r.flags = (r.flags & -3) | 4096), (r = r.sibling);
                    else {
                        if ((Fo(), s === a)) {
                            t = qr(e, t, r);
                            break e;
                        }
                        ln(e, t, s, r);
                    }
                    t = t.child;
                }
                return t;
            case 5:
                return (
                    Pp(t),
                    e === null && rc(t),
                    (s = t.type),
                    (a = t.pendingProps),
                    (p = e !== null ? e.memoizedProps : null),
                    (m = a.children),
                    Ga(s, a) ? (m = null) : p !== null && Ga(s, p) && (t.flags |= 32),
                    sh(e, t),
                    ln(e, t, m, r),
                    t.child
                );
            case 6:
                return e === null && rc(t), null;
            case 13:
                return fh(e, t, r);
            case 4:
                return (
                    fc(t, t.stateNode.containerInfo),
                    (s = t.pendingProps),
                    e === null ? (t.child = Io(t, null, s, r)) : ln(e, t, s, r),
                    t.child
                );
            case 11:
                return (
                    (s = t.type),
                    (a = t.pendingProps),
                    (a = t.elementType === s ? a : yr(s, a)),
                    rh(e, t, s, a, r)
                );
            case 7:
                return ln(e, t, t.pendingProps, r), t.child;
            case 8:
                return ln(e, t, t.pendingProps.children, r), t.child;
            case 12:
                return ln(e, t, t.pendingProps.children, r), t.child;
            case 10:
                e: {
                    if (
                        ((s = t.type._context),
                        (a = t.pendingProps),
                        (p = t.memoizedProps),
                        (m = a.value),
                        Xe(eu, s._currentValue),
                        (s._currentValue = m),
                        p !== null)
                    )
                        if (_r(p.value, m)) {
                            if (p.children === a.children && !Sn.current) {
                                t = qr(e, t, r);
                                break e;
                            }
                        } else
                            for (p = t.child, p !== null && (p.return = t); p !== null; ) {
                                var S = p.dependencies;
                                if (S !== null) {
                                    m = p.child;
                                    for (var C = S.firstContext; C !== null; ) {
                                        if (C.context === s) {
                                            if (p.tag === 1) {
                                                (C = Kr(-1, r & -r)), (C.tag = 2);
                                                var z = p.updateQueue;
                                                if (z !== null) {
                                                    z = z.shared;
                                                    var H = z.pending;
                                                    H === null
                                                        ? (C.next = C)
                                                        : ((C.next = H.next), (H.next = C)),
                                                        (z.pending = C);
                                                }
                                            }
                                            (p.lanes |= r),
                                                (C = p.alternate),
                                                C !== null && (C.lanes |= r),
                                                uc(p.return, r, t),
                                                (S.lanes |= r);
                                            break;
                                        }
                                        C = C.next;
                                    }
                                } else if (p.tag === 10) m = p.type === t.type ? null : p.child;
                                else if (p.tag === 18) {
                                    if (((m = p.return), m === null)) throw Error(i(341));
                                    (m.lanes |= r),
                                        (S = m.alternate),
                                        S !== null && (S.lanes |= r),
                                        uc(m, r, t),
                                        (m = p.sibling);
                                } else m = p.child;
                                if (m !== null) m.return = p;
                                else
                                    for (m = p; m !== null; ) {
                                        if (m === t) {
                                            m = null;
                                            break;
                                        }
                                        if (((p = m.sibling), p !== null)) {
                                            (p.return = m.return), (m = p);
                                            break;
                                        }
                                        m = m.return;
                                    }
                                p = m;
                            }
                    ln(e, t, a.children, r), (t = t.child);
                }
                return t;
            case 9:
                return (
                    (a = t.type),
                    (s = t.pendingProps.children),
                    Uo(t, r),
                    (a = er(a)),
                    (s = s(a)),
                    (t.flags |= 1),
                    ln(e, t, s, r),
                    t.child
                );
            case 14:
                return (
                    (s = t.type),
                    (a = yr(s, t.pendingProps)),
                    (a = yr(s.type, a)),
                    ih(e, t, s, a, r)
                );
            case 15:
                return oh(e, t, t.type, t.pendingProps, r);
            case 17:
                return (
                    (s = t.type),
                    (a = t.pendingProps),
                    (a = t.elementType === s ? a : yr(s, a)),
                    du(e, t),
                    (t.tag = 1),
                    kn(s) ? ((e = !0), Gs(t)) : (e = !1),
                    Uo(t, r),
                    qp(t, s, a),
                    Cc(t, s, a, r),
                    Oc(null, t, s, !0, e, r)
                );
            case 19:
                return ph(e, t, r);
            case 22:
                return lh(e, t, r);
        }
        throw Error(i(156, t.tag));
    };
    function Fh(e, t) {
        return xt(e, t);
    }
    function Ug(e, t, r, s) {
        (this.tag = e),
            (this.key = r),
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
            (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
            (this.mode = s),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
    }
    function rr(e, t, r, s) {
        return new Ug(e, t, r, s);
    }
    function Gc(e) {
        return (e = e.prototype), !(!e || !e.isReactComponent);
    }
    function Vg(e) {
        if (typeof e == 'function') return Gc(e) ? 1 : 0;
        if (e != null) {
            if (((e = e.$$typeof), e === q)) return 11;
            if (e === ke) return 14;
        }
        return 2;
    }
    function Ci(e, t) {
        var r = e.alternate;
        return (
            r === null
                ? ((r = rr(e.tag, t, e.key, e.mode)),
                  (r.elementType = e.elementType),
                  (r.type = e.type),
                  (r.stateNode = e.stateNode),
                  (r.alternate = e),
                  (e.alternate = r))
                : ((r.pendingProps = t),
                  (r.type = e.type),
                  (r.flags = 0),
                  (r.subtreeFlags = 0),
                  (r.deletions = null)),
            (r.flags = e.flags & 14680064),
            (r.childLanes = e.childLanes),
            (r.lanes = e.lanes),
            (r.child = e.child),
            (r.memoizedProps = e.memoizedProps),
            (r.memoizedState = e.memoizedState),
            (r.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (r.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
            (r.sibling = e.sibling),
            (r.index = e.index),
            (r.ref = e.ref),
            r
        );
    }
    function ku(e, t, r, s, a, p) {
        var m = 2;
        if (((s = e), typeof e == 'function')) Gc(e) && (m = 1);
        else if (typeof e == 'string') m = 5;
        else
            e: switch (e) {
                case L:
                    return eo(r.children, a, p, t);
                case X:
                    (m = 8), (a |= 8);
                    break;
                case $:
                    return (e = rr(12, r, t, a | 2)), (e.elementType = $), (e.lanes = p), e;
                case he:
                    return (e = rr(13, r, t, a)), (e.elementType = he), (e.lanes = p), e;
                case ge:
                    return (e = rr(19, r, t, a)), (e.elementType = ge), (e.lanes = p), e;
                case ee:
                    return Cu(r, a, p, t);
                default:
                    if (typeof e == 'object' && e !== null)
                        switch (e.$$typeof) {
                            case Q:
                                m = 10;
                                break e;
                            case pe:
                                m = 9;
                                break e;
                            case q:
                                m = 11;
                                break e;
                            case ke:
                                m = 14;
                                break e;
                            case fe:
                                (m = 16), (s = null);
                                break e;
                        }
                    throw Error(i(130, e == null ? e : typeof e, ''));
            }
        return (t = rr(m, r, t, a)), (t.elementType = e), (t.type = s), (t.lanes = p), t;
    }
    function eo(e, t, r, s) {
        return (e = rr(7, e, s, t)), (e.lanes = r), e;
    }
    function Cu(e, t, r, s) {
        return (
            (e = rr(22, e, s, t)),
            (e.elementType = ee),
            (e.lanes = r),
            (e.stateNode = { isHidden: !1 }),
            e
        );
    }
    function Kc(e, t, r) {
        return (e = rr(6, e, null, t)), (e.lanes = r), e;
    }
    function qc(e, t, r) {
        return (
            (t = rr(4, e.children !== null ? e.children : [], e.key, t)),
            (t.lanes = r),
            (t.stateNode = {
                containerInfo: e.containerInfo,
                pendingChildren: null,
                implementation: e.implementation,
            }),
            t
        );
    }
    function $g(e, t, r, s, a) {
        (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = ka(0)),
            (this.expirationTimes = ka(-1)),
            (this.entangledLanes =
                this.finishedLanes =
                this.mutableReadLanes =
                this.expiredLanes =
                this.pingedLanes =
                this.suspendedLanes =
                this.pendingLanes =
                    0),
            (this.entanglements = ka(0)),
            (this.identifierPrefix = s),
            (this.onRecoverableError = a),
            (this.mutableSourceEagerHydrationData = null);
    }
    function Zc(e, t, r, s, a, p, m, S, C) {
        return (
            (e = new $g(e, t, r, S, C)),
            t === 1 ? ((t = 1), p === !0 && (t |= 8)) : (t = 0),
            (p = rr(3, null, null, t)),
            (e.current = p),
            (p.stateNode = e),
            (p.memoizedState = {
                element: s,
                isDehydrated: r,
                cache: null,
                transitions: null,
                pendingSuspenseBoundaries: null,
            }),
            cc(p),
            e
        );
    }
    function Wg(e, t, r) {
        var s = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: V,
            key: s == null ? null : '' + s,
            children: e,
            containerInfo: t,
            implementation: r,
        };
    }
    function Ih(e) {
        if (!e) return mi;
        e = e._reactInternals;
        e: {
            if (je(e) !== e || e.tag !== 1) throw Error(i(170));
            var t = e;
            do {
                switch (t.tag) {
                    case 3:
                        t = t.stateNode.context;
                        break e;
                    case 1:
                        if (kn(t.type)) {
                            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                            break e;
                        }
                }
                t = t.return;
            } while (t !== null);
            throw Error(i(171));
        }
        if (e.tag === 1) {
            var r = e.type;
            if (kn(r)) return dp(e, r, t);
        }
        return t;
    }
    function Bh(e, t, r, s, a, p, m, S, C) {
        return (
            (e = Zc(r, s, !0, e, a, p, m, S, C)),
            (e.context = Ih(null)),
            (r = e.current),
            (s = sn()),
            (a = Si(r)),
            (p = Kr(s, a)),
            (p.callback = t ?? null),
            vi(r, p, a),
            (e.current.lanes = a),
            ml(e, a, s),
            En(e, s),
            e
        );
    }
    function Tu(e, t, r, s) {
        var a = t.current,
            p = sn(),
            m = Si(a);
        return (
            (r = Ih(r)),
            t.context === null ? (t.context = r) : (t.pendingContext = r),
            (t = Kr(p, m)),
            (t.payload = { element: e }),
            (s = s === void 0 ? null : s),
            s !== null && (t.callback = s),
            (e = vi(a, t, m)),
            e !== null && (Sr(e, a, m, p), nu(e, a, m)),
            m
        );
    }
    function Eu(e) {
        if (((e = e.current), !e.child)) return null;
        switch (e.child.tag) {
            case 5:
                return e.child.stateNode;
            default:
                return e.child.stateNode;
        }
    }
    function Uh(e, t) {
        if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
            var r = e.retryLane;
            e.retryLane = r !== 0 && r < t ? r : t;
        }
    }
    function bc(e, t) {
        Uh(e, t), (e = e.alternate) && Uh(e, t);
    }
    function Yg() {
        return null;
    }
    var Vh =
        typeof reportError == 'function'
            ? reportError
            : function (e) {
                  console.error(e);
              };
    function Jc(e) {
        this._internalRoot = e;
    }
    (Pu.prototype.render = Jc.prototype.render =
        function (e) {
            var t = this._internalRoot;
            if (t === null) throw Error(i(409));
            Tu(e, t, null, null);
        }),
        (Pu.prototype.unmount = Jc.prototype.unmount =
            function () {
                var e = this._internalRoot;
                if (e !== null) {
                    this._internalRoot = null;
                    var t = e.containerInfo;
                    Zi(function () {
                        Tu(null, e, null, null);
                    }),
                        (t[Yr] = null);
                }
            });
    function Pu(e) {
        this._internalRoot = e;
    }
    Pu.prototype.unstable_scheduleHydration = function (e) {
        if (e) {
            var t = Cd();
            e = { blockedOn: null, target: e, priority: t };
            for (var r = 0; r < ci.length && t !== 0 && t < ci[r].priority; r++);
            ci.splice(r, 0, e), r === 0 && Pd(e);
        }
    };
    function ef(e) {
        return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
    }
    function Ou(e) {
        return !(
            !e ||
            (e.nodeType !== 1 &&
                e.nodeType !== 9 &&
                e.nodeType !== 11 &&
                (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
        );
    }
    function $h() {}
    function Hg(e, t, r, s, a) {
        if (a) {
            if (typeof s == 'function') {
                var p = s;
                s = function () {
                    var z = Eu(m);
                    p.call(z);
                };
            }
            var m = Bh(t, s, e, 0, null, !1, !1, '', $h);
            return (
                (e._reactRootContainer = m),
                (e[Yr] = m.current),
                Nl(e.nodeType === 8 ? e.parentNode : e),
                Zi(),
                m
            );
        }
        for (; (a = e.lastChild); ) e.removeChild(a);
        if (typeof s == 'function') {
            var S = s;
            s = function () {
                var z = Eu(C);
                S.call(z);
            };
        }
        var C = Zc(e, 0, !1, null, null, !1, !1, '', $h);
        return (
            (e._reactRootContainer = C),
            (e[Yr] = C.current),
            Nl(e.nodeType === 8 ? e.parentNode : e),
            Zi(function () {
                Tu(t, C, r, s);
            }),
            C
        );
    }
    function Nu(e, t, r, s, a) {
        var p = r._reactRootContainer;
        if (p) {
            var m = p;
            if (typeof a == 'function') {
                var S = a;
                a = function () {
                    var C = Eu(m);
                    S.call(C);
                };
            }
            Tu(t, m, e, a);
        } else m = Hg(r, t, e, a, s);
        return Eu(m);
    }
    (Sd = function (e) {
        switch (e.tag) {
            case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                    var r = hl(t.pendingLanes);
                    r !== 0 && (Ca(t, r | 1), En(t, Oe()), !(Ie & 6) && ((Ho = Oe() + 500), gi()));
                }
                break;
            case 13:
                Zi(function () {
                    var s = Gr(e, 1);
                    if (s !== null) {
                        var a = sn();
                        Sr(s, e, 1, a);
                    }
                }),
                    bc(e, 1);
        }
    }),
        (Ta = function (e) {
            if (e.tag === 13) {
                var t = Gr(e, 134217728);
                if (t !== null) {
                    var r = sn();
                    Sr(t, e, 134217728, r);
                }
                bc(e, 134217728);
            }
        }),
        (kd = function (e) {
            if (e.tag === 13) {
                var t = Si(e),
                    r = Gr(e, t);
                if (r !== null) {
                    var s = sn();
                    Sr(r, e, t, s);
                }
                bc(e, t);
            }
        }),
        (Cd = function () {
            return Ve;
        }),
        (Td = function (e, t) {
            var r = Ve;
            try {
                return (Ve = e), t();
            } finally {
                Ve = r;
            }
        }),
        (mr = function (e, t, r) {
            switch (t) {
                case 'input':
                    if ((j(e, r), (t = r.name), r.type === 'radio' && t != null)) {
                        for (r = e; r.parentNode; ) r = r.parentNode;
                        for (
                            r = r.querySelectorAll(
                                'input[name=' + JSON.stringify('' + t) + '][type="radio"]',
                            ),
                                t = 0;
                            t < r.length;
                            t++
                        ) {
                            var s = r[t];
                            if (s !== e && s.form === e.form) {
                                var a = Xs(s);
                                if (!a) throw Error(i(90));
                                _n(s), j(s, a);
                            }
                        }
                    }
                    break;
                case 'textarea':
                    Vr(e, r);
                    break;
                case 'select':
                    (t = r.value), t != null && $e(e, !!r.multiple, t, !1);
            }
        }),
        (Zn = Hc),
        (li = Zi);
    var Xg = { usingClientEntryPoint: !1, Events: [zl, zo, Xs, Pr, $r, Hc] },
        Xl = {
            findFiberByHostInstance: Wi,
            bundleType: 0,
            version: '18.3.1',
            rendererPackageName: 'react-dom',
        },
        Qg = {
            bundleType: Xl.bundleType,
            version: Xl.version,
            rendererPackageName: Xl.rendererPackageName,
            rendererConfig: Xl.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: D.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
                return (e = jn(e)), e === null ? null : e.stateNode;
            },
            findFiberByHostInstance: Xl.findFiberByHostInstance || Yg,
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
        };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
        var Mu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Mu.isDisabled && Mu.supportsFiber)
            try {
                (Or = Mu.inject(Qg)), (on = Mu);
            } catch {}
    }
    return (
        (Pn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Xg),
        (Pn.createPortal = function (e, t) {
            var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
            if (!ef(t)) throw Error(i(200));
            return Wg(e, t, null, r);
        }),
        (Pn.createRoot = function (e, t) {
            if (!ef(e)) throw Error(i(299));
            var r = !1,
                s = '',
                a = Vh;
            return (
                t != null &&
                    (t.unstable_strictMode === !0 && (r = !0),
                    t.identifierPrefix !== void 0 && (s = t.identifierPrefix),
                    t.onRecoverableError !== void 0 && (a = t.onRecoverableError)),
                (t = Zc(e, 1, !1, null, null, r, !1, s, a)),
                (e[Yr] = t.current),
                Nl(e.nodeType === 8 ? e.parentNode : e),
                new Jc(t)
            );
        }),
        (Pn.findDOMNode = function (e) {
            if (e == null) return null;
            if (e.nodeType === 1) return e;
            var t = e._reactInternals;
            if (t === void 0)
                throw typeof e.render == 'function'
                    ? Error(i(188))
                    : ((e = Object.keys(e).join(',')), Error(i(268, e)));
            return (e = jn(t)), (e = e === null ? null : e.stateNode), e;
        }),
        (Pn.flushSync = function (e) {
            return Zi(e);
        }),
        (Pn.hydrate = function (e, t, r) {
            if (!Ou(t)) throw Error(i(200));
            return Nu(null, e, t, !0, r);
        }),
        (Pn.hydrateRoot = function (e, t, r) {
            if (!ef(e)) throw Error(i(405));
            var s = (r != null && r.hydratedSources) || null,
                a = !1,
                p = '',
                m = Vh;
            if (
                (r != null &&
                    (r.unstable_strictMode === !0 && (a = !0),
                    r.identifierPrefix !== void 0 && (p = r.identifierPrefix),
                    r.onRecoverableError !== void 0 && (m = r.onRecoverableError)),
                (t = Bh(t, null, e, 1, r ?? null, a, !1, p, m)),
                (e[Yr] = t.current),
                Nl(e),
                s)
            )
                for (e = 0; e < s.length; e++)
                    (r = s[e]),
                        (a = r._getVersion),
                        (a = a(r._source)),
                        t.mutableSourceEagerHydrationData == null
                            ? (t.mutableSourceEagerHydrationData = [r, a])
                            : t.mutableSourceEagerHydrationData.push(r, a);
            return new Pu(t);
        }),
        (Pn.render = function (e, t, r) {
            if (!Ou(t)) throw Error(i(200));
            return Nu(null, e, t, !1, r);
        }),
        (Pn.unmountComponentAtNode = function (e) {
            if (!Ou(e)) throw Error(i(40));
            return e._reactRootContainer
                ? (Zi(function () {
                      Nu(null, null, e, !1, function () {
                          (e._reactRootContainer = null), (e[Yr] = null);
                      });
                  }),
                  !0)
                : !1;
        }),
        (Pn.unstable_batchedUpdates = Hc),
        (Pn.unstable_renderSubtreeIntoContainer = function (e, t, r, s) {
            if (!Ou(r)) throw Error(i(200));
            if (e == null || e._reactInternals === void 0) throw Error(i(38));
            return Nu(e, t, r, !1, s);
        }),
        (Pn.version = '18.3.1-next-f1338f8080-20240426'),
        Pn
    );
}
var qh;
function n_() {
    if (qh) return rf.exports;
    qh = 1;
    function f() {
        if (
            !(
                typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
                typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
            )
        )
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
            } catch (n) {
                console.error(n);
            }
    }
    return f(), (rf.exports = t_()), rf.exports;
}
var Zh;
function r_() {
    if (Zh) return Ru;
    Zh = 1;
    var f = n_();
    return (Ru.createRoot = f.createRoot), (Ru.hydrateRoot = f.hydrateRoot), Ru;
}
var i_ = r_(),
    F0 = { color: void 0, size: void 0, className: void 0, style: void 0, attr: void 0 },
    bh = uo.createContext && uo.createContext(F0),
    o_ = ['attr', 'size', 'title'];
function l_(f, n) {
    if (f == null) return {};
    var i = s_(f, n),
        o,
        l;
    if (Object.getOwnPropertySymbols) {
        var u = Object.getOwnPropertySymbols(f);
        for (l = 0; l < u.length; l++)
            (o = u[l]),
                !(n.indexOf(o) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(f, o) &&
                    (i[o] = f[o]);
    }
    return i;
}
function s_(f, n) {
    if (f == null) return {};
    var i = {};
    for (var o in f)
        if (Object.prototype.hasOwnProperty.call(f, o)) {
            if (n.indexOf(o) >= 0) continue;
            i[o] = f[o];
        }
    return i;
}
function ra() {
    return (
        (ra = Object.assign
            ? Object.assign.bind()
            : function (f) {
                  for (var n = 1; n < arguments.length; n++) {
                      var i = arguments[n];
                      for (var o in i) Object.prototype.hasOwnProperty.call(i, o) && (f[o] = i[o]);
                  }
                  return f;
              }),
        ra.apply(this, arguments)
    );
}
function Jh(f, n) {
    var i = Object.keys(f);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(f);
        n &&
            (o = o.filter(function (l) {
                return Object.getOwnPropertyDescriptor(f, l).enumerable;
            })),
            i.push.apply(i, o);
    }
    return i;
}
function ia(f) {
    for (var n = 1; n < arguments.length; n++) {
        var i = arguments[n] != null ? arguments[n] : {};
        n % 2
            ? Jh(Object(i), !0).forEach(function (o) {
                  u_(f, o, i[o]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(f, Object.getOwnPropertyDescriptors(i))
            : Jh(Object(i)).forEach(function (o) {
                  Object.defineProperty(f, o, Object.getOwnPropertyDescriptor(i, o));
              });
    }
    return f;
}
function u_(f, n, i) {
    return (
        (n = a_(n)),
        n in f
            ? Object.defineProperty(f, n, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (f[n] = i),
        f
    );
}
function a_(f) {
    var n = c_(f, 'string');
    return typeof n == 'symbol' ? n : n + '';
}
function c_(f, n) {
    if (typeof f != 'object' || !f) return f;
    var i = f[Symbol.toPrimitive];
    if (i !== void 0) {
        var o = i.call(f, n || 'default');
        if (typeof o != 'object') return o;
        throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return (n === 'string' ? String : Number)(f);
}
function I0(f) {
    return f && f.map((n, i) => uo.createElement(n.tag, ia({ key: i }, n.attr), I0(n.child)));
}
function Es(f) {
    return (n) => uo.createElement(f_, ra({ attr: ia({}, f.attr) }, n), I0(f.child));
}
function f_(f) {
    var n = (i) => {
        var { attr: o, size: l, title: u } = f,
            c = l_(f, o_),
            d = l || i.size || '1em',
            h;
        return (
            i.className && (h = i.className),
            f.className && (h = (h ? h + ' ' : '') + f.className),
            uo.createElement(
                'svg',
                ra(
                    { stroke: 'currentColor', fill: 'currentColor', strokeWidth: '0' },
                    i.attr,
                    o,
                    c,
                    {
                        className: h,
                        style: ia(ia({ color: f.color || i.color }, i.style), f.style),
                        height: d,
                        width: d,
                        xmlns: 'http://www.w3.org/2000/svg',
                    },
                ),
                u && uo.createElement('title', null, u),
                f.children,
            )
        );
    };
    return bh !== void 0 ? uo.createElement(bh.Consumer, null, (i) => n(i)) : n(F0);
}
function Kf(f) {
    return Es({
        tag: 'svg',
        attr: { version: '1.2', baseProfile: 'tiny', viewBox: '0 0 24 24' },
        child: [
            {
                tag: 'path',
                attr: {
                    d: 'M10.368 19.102c.349 1.049 1.011 1.086 1.478.086l5.309-11.375c.467-1.002.034-1.434-.967-.967l-11.376 5.308c-1.001.467-.963 1.129.085 1.479l4.103 1.367 1.368 4.102z',
                },
                child: [],
            },
        ],
    })(f);
}
function br(f) {
    if (f === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return f;
}
function B0(f, n) {
    (f.prototype = Object.create(n.prototype)), (f.prototype.constructor = f), (f.__proto__ = n);
}
/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var Qn = { autoSleep: 120, force3D: 'auto', nullTargetWarn: 1, units: { lineHeight: '' } },
    ul = { duration: 0.5, overwrite: !1, delay: 0 },
    qf,
    Jt,
    nt,
    sr = 1e8,
    Qe = 1 / sr,
    kf = Math.PI * 2,
    d_ = kf / 4,
    p_ = 0,
    U0 = Math.sqrt,
    h_ = Math.cos,
    m_ = Math.sin,
    It = function (n) {
        return typeof n == 'string';
    },
    dt = function (n) {
        return typeof n == 'function';
    },
    ri = function (n) {
        return typeof n == 'number';
    },
    Zf = function (n) {
        return typeof n > 'u';
    },
    Ur = function (n) {
        return typeof n == 'object';
    },
    Nn = function (n) {
        return n !== !1;
    },
    bf = function () {
        return typeof window < 'u';
    },
    zu = function (n) {
        return dt(n) || It(n);
    },
    V0 = (typeof ArrayBuffer == 'function' && ArrayBuffer.isView) || function () {},
    en = Array.isArray,
    Cf = /(?:-?\.?\d|\.)+/gi,
    $0 = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    Jo = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    sf = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    W0 = /[+-]=-?[.\d]+/,
    Y0 = /[^,'"\[\]\s]+/gi,
    g_ = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    st,
    Dr,
    Tf,
    Jf,
    Gn = {},
    oa = {},
    H0,
    X0 = function (n) {
        return (oa = _o(n, Gn)) && Dn;
    },
    ed = function (n, i) {
        return console.warn(
            'Invalid property',
            n,
            'set to',
            i,
            'Missing plugin? gsap.registerPlugin()',
        );
    },
    gs = function (n, i) {
        return !i && console.warn(n);
    },
    Q0 = function (n, i) {
        return (n && (Gn[n] = i) && oa && (oa[n] = i)) || Gn;
    },
    _s = function () {
        return 0;
    },
    __ = { suppressEvents: !0, isStart: !0, kill: !1 },
    Gu = { suppressEvents: !0, kill: !1 },
    v_ = { suppressEvents: !0 },
    td = {},
    zi = [],
    Ef = {},
    G0,
    Wn = {},
    uf = {},
    e0 = 30,
    Ku = [],
    nd = '',
    rd = function (n) {
        var i = n[0],
            o,
            l;
        if ((Ur(i) || dt(i) || (n = [n]), !(o = (i._gsap || {}).harness))) {
            for (l = Ku.length; l-- && !Ku[l].targetTest(i); );
            o = Ku[l];
        }
        for (l = n.length; l--; )
            (n[l] && (n[l]._gsap || (n[l]._gsap = new vm(n[l], o)))) || n.splice(l, 1);
        return n;
    },
    ao = function (n) {
        return n._gsap || rd(ur(n))[0]._gsap;
    },
    K0 = function (n, i, o) {
        return (o = n[i]) && dt(o) ? n[i]() : (Zf(o) && n.getAttribute && n.getAttribute(i)) || o;
    },
    Mn = function (n, i) {
        return (n = n.split(',')).forEach(i) || n;
    },
    gt = function (n) {
        return Math.round(n * 1e5) / 1e5 || 0;
    },
    Ft = function (n) {
        return Math.round(n * 1e7) / 1e7 || 0;
    },
    nl = function (n, i) {
        var o = i.charAt(0),
            l = parseFloat(i.substr(2));
        return (
            (n = parseFloat(n)), o === '+' ? n + l : o === '-' ? n - l : o === '*' ? n * l : n / l
        );
    },
    y_ = function (n, i) {
        for (var o = i.length, l = 0; n.indexOf(i[l]) < 0 && ++l < o; );
        return l < o;
    },
    la = function () {
        var n = zi.length,
            i = zi.slice(0),
            o,
            l;
        for (Ef = {}, zi.length = 0, o = 0; o < n; o++)
            (l = i[o]), l && l._lazy && (l.render(l._lazy[0], l._lazy[1], !0)._lazy = 0);
    },
    q0 = function (n, i, o, l) {
        zi.length && !Jt && la(),
            n.render(i, o, Jt && i < 0 && (n._initted || n._startAt)),
            zi.length && !Jt && la();
    },
    Z0 = function (n) {
        var i = parseFloat(n);
        return (i || i === 0) && (n + '').match(Y0).length < 2 ? i : It(n) ? n.trim() : n;
    },
    b0 = function (n) {
        return n;
    },
    cr = function (n, i) {
        for (var o in i) o in n || (n[o] = i[o]);
        return n;
    },
    x_ = function (n) {
        return function (i, o) {
            for (var l in o) l in i || (l === 'duration' && n) || l === 'ease' || (i[l] = o[l]);
        };
    },
    _o = function (n, i) {
        for (var o in i) n[o] = i[o];
        return n;
    },
    t0 = function f(n, i) {
        for (var o in i)
            o !== '__proto__' &&
                o !== 'constructor' &&
                o !== 'prototype' &&
                (n[o] = Ur(i[o]) ? f(n[o] || (n[o] = {}), i[o]) : i[o]);
        return n;
    },
    sa = function (n, i) {
        var o = {},
            l;
        for (l in n) l in i || (o[l] = n[l]);
        return o;
    },
    is = function (n) {
        var i = n.parent || st,
            o = n.keyframes ? x_(en(n.keyframes)) : cr;
        if (Nn(n.inherit)) for (; i; ) o(n, i.vars.defaults), (i = i.parent || i._dp);
        return n;
    },
    w_ = function (n, i) {
        for (var o = n.length, l = o === i.length; l && o-- && n[o] === i[o]; );
        return o < 0;
    },
    J0 = function (n, i, o, l, u) {
        var c = n[l],
            d;
        if (u) for (d = i[u]; c && c[u] > d; ) c = c._prev;
        return (
            c ? ((i._next = c._next), (c._next = i)) : ((i._next = n[o]), (n[o] = i)),
            i._next ? (i._next._prev = i) : (n[l] = i),
            (i._prev = c),
            (i.parent = i._dp = n),
            i
        );
    },
    _a = function (n, i, o, l) {
        o === void 0 && (o = '_first'), l === void 0 && (l = '_last');
        var u = i._prev,
            c = i._next;
        u ? (u._next = c) : n[o] === i && (n[o] = c),
            c ? (c._prev = u) : n[l] === i && (n[l] = u),
            (i._next = i._prev = i.parent = null);
    },
    ji = function (n, i) {
        n.parent && (!i || n.parent.autoRemoveChildren) && n.parent.remove && n.parent.remove(n),
            (n._act = 0);
    },
    co = function (n, i) {
        if (n && (!i || i._end > n._dur || i._start < 0))
            for (var o = n; o; ) (o._dirty = 1), (o = o.parent);
        return n;
    },
    S_ = function (n) {
        for (var i = n.parent; i && i.parent; ) (i._dirty = 1), i.totalDuration(), (i = i.parent);
        return n;
    },
    Pf = function (n, i, o, l) {
        return (
            n._startAt &&
            (Jt
                ? n._startAt.revert(Gu)
                : (n.vars.immediateRender && !n.vars.autoRevert) || n._startAt.render(i, !0, l))
        );
    },
    k_ = function f(n) {
        return !n || (n._ts && f(n.parent));
    },
    n0 = function (n) {
        return n._repeat ? al(n._tTime, (n = n.duration() + n._rDelay)) * n : 0;
    },
    al = function (n, i) {
        var o = Math.floor((n /= i));
        return n && o === n ? o - 1 : o;
    },
    ua = function (n, i) {
        return (n - i._start) * i._ts + (i._ts >= 0 ? 0 : i._dirty ? i.totalDuration() : i._tDur);
    },
    va = function (n) {
        return (n._end = Ft(n._start + (n._tDur / Math.abs(n._ts || n._rts || Qe) || 0)));
    },
    ya = function (n, i) {
        var o = n._dp;
        return (
            o &&
                o.smoothChildTiming &&
                n._ts &&
                ((n._start = Ft(
                    o._time -
                        (n._ts > 0
                            ? i / n._ts
                            : ((n._dirty ? n.totalDuration() : n._tDur) - i) / -n._ts),
                )),
                va(n),
                o._dirty || co(o, n)),
            n
        );
    },
    em = function (n, i) {
        var o;
        if (
            ((i._time || (!i._dur && i._initted) || (i._start < n._time && (i._dur || !i.add))) &&
                ((o = ua(n.rawTime(), i)),
                (!i._dur || Ps(0, i.totalDuration(), o) - i._tTime > Qe) && i.render(o, !0)),
            co(n, i)._dp && n._initted && n._time >= n._dur && n._ts)
        ) {
            if (n._dur < n.duration())
                for (o = n; o._dp; ) o.rawTime() >= 0 && o.totalTime(o._tTime), (o = o._dp);
            n._zTime = -Qe;
        }
    },
    jr = function (n, i, o, l) {
        return (
            i.parent && ji(i),
            (i._start = Ft((ri(o) ? o : o || n !== st ? ir(n, o, i) : n._time) + i._delay)),
            (i._end = Ft(i._start + (i.totalDuration() / Math.abs(i.timeScale()) || 0))),
            J0(n, i, '_first', '_last', n._sort ? '_start' : 0),
            Of(i) || (n._recent = i),
            l || em(n, i),
            n._ts < 0 && ya(n, n._tTime),
            n
        );
    },
    tm = function (n, i) {
        return (Gn.ScrollTrigger || ed('scrollTrigger', i)) && Gn.ScrollTrigger.create(i, n);
    },
    nm = function (n, i, o, l, u) {
        if ((od(n, i, u), !n._initted)) return 1;
        if (
            !o &&
            n._pt &&
            !Jt &&
            ((n._dur && n.vars.lazy !== !1) || (!n._dur && n.vars.lazy)) &&
            G0 !== Yn.frame
        )
            return zi.push(n), (n._lazy = [u, l]), 1;
    },
    C_ = function f(n) {
        var i = n.parent;
        return i && i._ts && i._initted && !i._lock && (i.rawTime() < 0 || f(i));
    },
    Of = function (n) {
        var i = n.data;
        return i === 'isFromStart' || i === 'isStart';
    },
    T_ = function (n, i, o, l) {
        var u = n.ratio,
            c =
                i < 0 ||
                (!i &&
                    ((!n._start && C_(n) && !(!n._initted && Of(n))) ||
                        ((n._ts < 0 || n._dp._ts < 0) && !Of(n))))
                    ? 0
                    : 1,
            d = n._rDelay,
            h = 0,
            g,
            _,
            w;
        if (
            (d &&
                n._repeat &&
                ((h = Ps(0, n._tDur, i)),
                (_ = al(h, d)),
                n._yoyo && _ & 1 && (c = 1 - c),
                _ !== al(n._tTime, d) &&
                    ((u = 1 - c), n.vars.repeatRefresh && n._initted && n.invalidate())),
            c !== u || Jt || l || n._zTime === Qe || (!i && n._zTime))
        ) {
            if (!n._initted && nm(n, i, l, o, h)) return;
            for (
                w = n._zTime,
                    n._zTime = i || (o ? Qe : 0),
                    o || (o = i && !w),
                    n.ratio = c,
                    n._from && (c = 1 - c),
                    n._time = 0,
                    n._tTime = h,
                    g = n._pt;
                g;

            )
                g.r(c, g.d), (g = g._next);
            i < 0 && Pf(n, i, o, !0),
                n._onUpdate && !o && Xn(n, 'onUpdate'),
                h && n._repeat && !o && n.parent && Xn(n, 'onRepeat'),
                (i >= n._tDur || i < 0) &&
                    n.ratio === c &&
                    (c && ji(n, 1),
                    !o &&
                        !Jt &&
                        (Xn(n, c ? 'onComplete' : 'onReverseComplete', !0), n._prom && n._prom()));
        } else n._zTime || (n._zTime = i);
    },
    E_ = function (n, i, o) {
        var l;
        if (o > i)
            for (l = n._first; l && l._start <= o; ) {
                if (l.data === 'isPause' && l._start > i) return l;
                l = l._next;
            }
        else
            for (l = n._last; l && l._start >= o; ) {
                if (l.data === 'isPause' && l._start < i) return l;
                l = l._prev;
            }
    },
    cl = function (n, i, o, l) {
        var u = n._repeat,
            c = Ft(i) || 0,
            d = n._tTime / n._tDur;
        return (
            d && !l && (n._time *= c / n._dur),
            (n._dur = c),
            (n._tDur = u ? (u < 0 ? 1e10 : Ft(c * (u + 1) + n._rDelay * u)) : c),
            d > 0 && !l && ya(n, (n._tTime = n._tDur * d)),
            n.parent && va(n),
            o || co(n.parent, n),
            n
        );
    },
    r0 = function (n) {
        return n instanceof pn ? co(n) : cl(n, n._dur);
    },
    P_ = { _start: 0, endTime: _s, totalDuration: _s },
    ir = function f(n, i, o) {
        var l = n.labels,
            u = n._recent || P_,
            c = n.duration() >= sr ? u.endTime(!1) : n._dur,
            d,
            h,
            g;
        return It(i) && (isNaN(i) || i in l)
            ? ((h = i.charAt(0)),
              (g = i.substr(-1) === '%'),
              (d = i.indexOf('=')),
              h === '<' || h === '>'
                  ? (d >= 0 && (i = i.replace(/=/, '')),
                    (h === '<' ? u._start : u.endTime(u._repeat >= 0)) +
                        (parseFloat(i.substr(1)) || 0) *
                            (g ? (d < 0 ? u : o).totalDuration() / 100 : 1))
                  : d < 0
                  ? (i in l || (l[i] = c), l[i])
                  : ((h = parseFloat(i.charAt(d - 1) + i.substr(d + 1))),
                    g && o && (h = (h / 100) * (en(o) ? o[0] : o).totalDuration()),
                    d > 1 ? f(n, i.substr(0, d - 1), o) + h : c + h))
            : i == null
            ? c
            : +i;
    },
    os = function (n, i, o) {
        var l = ri(i[1]),
            u = (l ? 2 : 1) + (n < 2 ? 0 : 1),
            c = i[u],
            d,
            h;
        if ((l && (c.duration = i[1]), (c.parent = o), n)) {
            for (d = c, h = o; h && !('immediateRender' in d); )
                (d = h.vars.defaults || {}), (h = Nn(h.vars.inherit) && h.parent);
            (c.immediateRender = Nn(d.immediateRender)),
                n < 2 ? (c.runBackwards = 1) : (c.startAt = i[u - 1]);
        }
        return new kt(i[0], c, i[u + 1]);
    },
    Ii = function (n, i) {
        return n || n === 0 ? i(n) : i;
    },
    Ps = function (n, i, o) {
        return o < n ? n : o > i ? i : o;
    },
    bt = function (n, i) {
        return !It(n) || !(i = g_.exec(n)) ? '' : i[1];
    },
    O_ = function (n, i, o) {
        return Ii(o, function (l) {
            return Ps(n, i, l);
        });
    },
    Nf = [].slice,
    rm = function (n, i) {
        return (
            n &&
            Ur(n) &&
            'length' in n &&
            ((!i && !n.length) || (n.length - 1 in n && Ur(n[0]))) &&
            !n.nodeType &&
            n !== Dr
        );
    },
    N_ = function (n, i, o) {
        return (
            o === void 0 && (o = []),
            n.forEach(function (l) {
                var u;
                return (It(l) && !i) || rm(l, 1) ? (u = o).push.apply(u, ur(l)) : o.push(l);
            }) || o
        );
    },
    ur = function (n, i, o) {
        return nt && !i && nt.selector
            ? nt.selector(n)
            : It(n) && !o && (Tf || !fl())
            ? Nf.call((i || Jf).querySelectorAll(n), 0)
            : en(n)
            ? N_(n, o)
            : rm(n)
            ? Nf.call(n, 0)
            : n
            ? [n]
            : [];
    },
    Mf = function (n) {
        return (
            (n = ur(n)[0] || gs('Invalid scope') || {}),
            function (i) {
                var o = n.current || n.nativeElement || n;
                return ur(
                    i,
                    o.querySelectorAll
                        ? o
                        : o === n
                        ? gs('Invalid scope') || Jf.createElement('div')
                        : n,
                );
            }
        );
    },
    im = function (n) {
        return n.sort(function () {
            return 0.5 - Math.random();
        });
    },
    om = function (n) {
        if (dt(n)) return n;
        var i = Ur(n) ? n : { each: n },
            o = fo(i.ease),
            l = i.from || 0,
            u = parseFloat(i.base) || 0,
            c = {},
            d = l > 0 && l < 1,
            h = isNaN(l) || d,
            g = i.axis,
            _ = l,
            w = l;
        return (
            It(l)
                ? (_ = w = { center: 0.5, edges: 0.5, end: 1 }[l] || 0)
                : !d && h && ((_ = l[0]), (w = l[1])),
            function (y, v, T) {
                var x = (T || i).length,
                    O = c[x],
                    F,
                    A,
                    U,
                    D,
                    I,
                    V,
                    L,
                    X,
                    $;
                if (!O) {
                    if ((($ = i.grid === 'auto' ? 0 : (i.grid || [1, sr])[1]), !$)) {
                        for (L = -sr; L < (L = T[$++].getBoundingClientRect().left) && $ < x; );
                        $ < x && $--;
                    }
                    for (
                        O = c[x] = [],
                            F = h ? Math.min($, x) * _ - 0.5 : l % $,
                            A = $ === sr ? 0 : h ? (x * w) / $ - 0.5 : (l / $) | 0,
                            L = 0,
                            X = sr,
                            V = 0;
                        V < x;
                        V++
                    )
                        (U = (V % $) - F),
                            (D = A - ((V / $) | 0)),
                            (O[V] = I = g ? Math.abs(g === 'y' ? D : U) : U0(U * U + D * D)),
                            I > L && (L = I),
                            I < X && (X = I);
                    l === 'random' && im(O),
                        (O.max = L - X),
                        (O.min = X),
                        (O.v = x =
                            (parseFloat(i.amount) ||
                                parseFloat(i.each) *
                                    ($ > x
                                        ? x - 1
                                        : g
                                        ? g === 'y'
                                            ? x / $
                                            : $
                                        : Math.max($, x / $)) ||
                                0) * (l === 'edges' ? -1 : 1)),
                        (O.b = x < 0 ? u - x : u),
                        (O.u = bt(i.amount || i.each) || 0),
                        (o = o && x < 0 ? mm(o) : o);
                }
                return (x = (O[y] - O.min) / O.max || 0), Ft(O.b + (o ? o(x) : x) * O.v) + O.u;
            }
        );
    },
    Rf = function (n) {
        var i = Math.pow(10, ((n + '').split('.')[1] || '').length);
        return function (o) {
            var l = Ft(Math.round(parseFloat(o) / n) * n * i);
            return (l - (l % 1)) / i + (ri(o) ? 0 : bt(o));
        };
    },
    lm = function (n, i) {
        var o = en(n),
            l,
            u;
        return (
            !o &&
                Ur(n) &&
                ((l = o = n.radius || sr),
                n.values
                    ? ((n = ur(n.values)), (u = !ri(n[0])) && (l *= l))
                    : (n = Rf(n.increment))),
            Ii(
                i,
                o
                    ? dt(n)
                        ? function (c) {
                              return (u = n(c)), Math.abs(u - c) <= l ? u : c;
                          }
                        : function (c) {
                              for (
                                  var d = parseFloat(u ? c.x : c),
                                      h = parseFloat(u ? c.y : 0),
                                      g = sr,
                                      _ = 0,
                                      w = n.length,
                                      y,
                                      v;
                                  w--;

                              )
                                  u
                                      ? ((y = n[w].x - d), (v = n[w].y - h), (y = y * y + v * v))
                                      : (y = Math.abs(n[w] - d)),
                                      y < g && ((g = y), (_ = w));
                              return (
                                  (_ = !l || g <= l ? n[_] : c),
                                  u || _ === c || ri(c) ? _ : _ + bt(c)
                              );
                          }
                    : Rf(n),
            )
        );
    },
    sm = function (n, i, o, l) {
        return Ii(en(n) ? !i : o === !0 ? !!(o = 0) : !l, function () {
            return en(n)
                ? n[~~(Math.random() * n.length)]
                : (o = o || 1e-5) &&
                      (l = o < 1 ? Math.pow(10, (o + '').length - 2) : 1) &&
                      Math.floor(
                          Math.round((n - o / 2 + Math.random() * (i - n + o * 0.99)) / o) * o * l,
                      ) / l;
        });
    },
    M_ = function () {
        for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++) i[o] = arguments[o];
        return function (l) {
            return i.reduce(function (u, c) {
                return c(u);
            }, l);
        };
    },
    R_ = function (n, i) {
        return function (o) {
            return n(parseFloat(o)) + (i || bt(o));
        };
    },
    z_ = function (n, i, o) {
        return am(n, i, 0, 1, o);
    },
    um = function (n, i, o) {
        return Ii(o, function (l) {
            return n[~~i(l)];
        });
    },
    D_ = function f(n, i, o) {
        var l = i - n;
        return en(n)
            ? um(n, f(0, n.length), i)
            : Ii(o, function (u) {
                  return ((l + ((u - n) % l)) % l) + n;
              });
    },
    L_ = function f(n, i, o) {
        var l = i - n,
            u = l * 2;
        return en(n)
            ? um(n, f(0, n.length - 1), i)
            : Ii(o, function (c) {
                  return (c = (u + ((c - n) % u)) % u || 0), n + (c > l ? u - c : c);
              });
    },
    vs = function (n) {
        for (var i = 0, o = '', l, u, c, d; ~(l = n.indexOf('random(', i)); )
            (c = n.indexOf(')', l)),
                (d = n.charAt(l + 7) === '['),
                (u = n.substr(l + 7, c - l - 7).match(d ? Y0 : Cf)),
                (o += n.substr(i, l - i) + sm(d ? u : +u[0], d ? 0 : +u[1], +u[2] || 1e-5)),
                (i = c + 1);
        return o + n.substr(i, n.length - i);
    },
    am = function (n, i, o, l, u) {
        var c = i - n,
            d = l - o;
        return Ii(u, function (h) {
            return o + (((h - n) / c) * d || 0);
        });
    },
    j_ = function f(n, i, o, l) {
        var u = isNaN(n + i)
            ? 0
            : function (v) {
                  return (1 - v) * n + v * i;
              };
        if (!u) {
            var c = It(n),
                d = {},
                h,
                g,
                _,
                w,
                y;
            if ((o === !0 && (l = 1) && (o = null), c)) (n = { p: n }), (i = { p: i });
            else if (en(n) && !en(i)) {
                for (_ = [], w = n.length, y = w - 2, g = 1; g < w; g++) _.push(f(n[g - 1], n[g]));
                w--,
                    (u = function (T) {
                        T *= w;
                        var x = Math.min(y, ~~T);
                        return _[x](T - x);
                    }),
                    (o = i);
            } else l || (n = _o(en(n) ? [] : {}, n));
            if (!_) {
                for (h in i) id.call(d, n, h, 'get', i[h]);
                u = function (T) {
                    return ud(T, d) || (c ? n.p : n);
                };
            }
        }
        return Ii(o, u);
    },
    i0 = function (n, i, o) {
        var l = n.labels,
            u = sr,
            c,
            d,
            h;
        for (c in l)
            (d = l[c] - i), d < 0 == !!o && d && u > (d = Math.abs(d)) && ((h = c), (u = d));
        return h;
    },
    Xn = function (n, i, o) {
        var l = n.vars,
            u = l[i],
            c = nt,
            d = n._ctx,
            h,
            g,
            _;
        if (u)
            return (
                (h = l[i + 'Params']),
                (g = l.callbackScope || n),
                o && zi.length && la(),
                d && (nt = d),
                (_ = h ? u.apply(g, h) : u.call(g)),
                (nt = c),
                _
            );
    },
    Zl = function (n) {
        return (
            ji(n),
            n.scrollTrigger && n.scrollTrigger.kill(!!Jt),
            n.progress() < 1 && Xn(n, 'onInterrupt'),
            n
        );
    },
    el,
    cm = [],
    fm = function (n) {
        if (n)
            if (((n = (!n.name && n.default) || n), bf() || n.headless)) {
                var i = n.name,
                    o = dt(n),
                    l =
                        i && !o && n.init
                            ? function () {
                                  this._props = [];
                              }
                            : n,
                    u = { init: _s, render: ud, add: id, kill: Z_, modifier: q_, rawVars: 0 },
                    c = { targetTest: 0, get: 0, getSetter: sd, aliases: {}, register: 0 };
                if ((fl(), n !== l)) {
                    if (Wn[i]) return;
                    cr(l, cr(sa(n, u), c)),
                        _o(l.prototype, _o(u, sa(n, c))),
                        (Wn[(l.prop = i)] = l),
                        n.targetTest && (Ku.push(l), (td[i] = 1)),
                        (i =
                            (i === 'css' ? 'CSS' : i.charAt(0).toUpperCase() + i.substr(1)) +
                            'Plugin');
                }
                Q0(i, l), n.register && n.register(Dn, l, Rn);
            } else cm.push(n);
    },
    We = 255,
    bl = {
        aqua: [0, We, We],
        lime: [0, We, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, We],
        navy: [0, 0, 128],
        white: [We, We, We],
        olive: [128, 128, 0],
        yellow: [We, We, 0],
        orange: [We, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [We, 0, 0],
        pink: [We, 192, 203],
        cyan: [0, We, We],
        transparent: [We, We, We, 0],
    },
    af = function (n, i, o) {
        return (
            (n += n < 0 ? 1 : n > 1 ? -1 : 0),
            ((n * 6 < 1
                ? i + (o - i) * n * 6
                : n < 0.5
                ? o
                : n * 3 < 2
                ? i + (o - i) * (2 / 3 - n) * 6
                : i) *
                We +
                0.5) |
                0
        );
    },
    dm = function (n, i, o) {
        var l = n ? (ri(n) ? [n >> 16, (n >> 8) & We, n & We] : 0) : bl.black,
            u,
            c,
            d,
            h,
            g,
            _,
            w,
            y,
            v,
            T;
        if (!l) {
            if ((n.substr(-1) === ',' && (n = n.substr(0, n.length - 1)), bl[n])) l = bl[n];
            else if (n.charAt(0) === '#') {
                if (
                    (n.length < 6 &&
                        ((u = n.charAt(1)),
                        (c = n.charAt(2)),
                        (d = n.charAt(3)),
                        (n =
                            '#' +
                            u +
                            u +
                            c +
                            c +
                            d +
                            d +
                            (n.length === 5 ? n.charAt(4) + n.charAt(4) : ''))),
                    n.length === 9)
                )
                    return (
                        (l = parseInt(n.substr(1, 6), 16)),
                        [l >> 16, (l >> 8) & We, l & We, parseInt(n.substr(7), 16) / 255]
                    );
                (n = parseInt(n.substr(1), 16)), (l = [n >> 16, (n >> 8) & We, n & We]);
            } else if (n.substr(0, 3) === 'hsl') {
                if (((l = T = n.match(Cf)), !i))
                    (h = (+l[0] % 360) / 360),
                        (g = +l[1] / 100),
                        (_ = +l[2] / 100),
                        (c = _ <= 0.5 ? _ * (g + 1) : _ + g - _ * g),
                        (u = _ * 2 - c),
                        l.length > 3 && (l[3] *= 1),
                        (l[0] = af(h + 1 / 3, u, c)),
                        (l[1] = af(h, u, c)),
                        (l[2] = af(h - 1 / 3, u, c));
                else if (~n.indexOf('='))
                    return (l = n.match($0)), o && l.length < 4 && (l[3] = 1), l;
            } else l = n.match(Cf) || bl.transparent;
            l = l.map(Number);
        }
        return (
            i &&
                !T &&
                ((u = l[0] / We),
                (c = l[1] / We),
                (d = l[2] / We),
                (w = Math.max(u, c, d)),
                (y = Math.min(u, c, d)),
                (_ = (w + y) / 2),
                w === y
                    ? (h = g = 0)
                    : ((v = w - y),
                      (g = _ > 0.5 ? v / (2 - w - y) : v / (w + y)),
                      (h =
                          w === u
                              ? (c - d) / v + (c < d ? 6 : 0)
                              : w === c
                              ? (d - u) / v + 2
                              : (u - c) / v + 4),
                      (h *= 60)),
                (l[0] = ~~(h + 0.5)),
                (l[1] = ~~(g * 100 + 0.5)),
                (l[2] = ~~(_ * 100 + 0.5))),
            o && l.length < 4 && (l[3] = 1),
            l
        );
    },
    pm = function (n) {
        var i = [],
            o = [],
            l = -1;
        return (
            n.split(Di).forEach(function (u) {
                var c = u.match(Jo) || [];
                i.push.apply(i, c), o.push((l += c.length + 1));
            }),
            (i.c = o),
            i
        );
    },
    o0 = function (n, i, o) {
        var l = '',
            u = (n + l).match(Di),
            c = i ? 'hsla(' : 'rgba(',
            d = 0,
            h,
            g,
            _,
            w;
        if (!u) return n;
        if (
            ((u = u.map(function (y) {
                return (
                    (y = dm(y, i, 1)) &&
                    c + (i ? y[0] + ',' + y[1] + '%,' + y[2] + '%,' + y[3] : y.join(',')) + ')'
                );
            })),
            o && ((_ = pm(n)), (h = o.c), h.join(l) !== _.c.join(l)))
        )
            for (g = n.replace(Di, '1').split(Jo), w = g.length - 1; d < w; d++)
                l +=
                    g[d] +
                    (~h.indexOf(d)
                        ? u.shift() || c + '0,0,0,0)'
                        : (_.length ? _ : u.length ? u : o).shift());
        if (!g) for (g = n.split(Di), w = g.length - 1; d < w; d++) l += g[d] + u[d];
        return l + g[w];
    },
    Di = (function () {
        var f = '(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b',
            n;
        for (n in bl) f += '|' + n + '\\b';
        return new RegExp(f + ')', 'gi');
    })(),
    A_ = /hsl[a]?\(/,
    hm = function (n) {
        var i = n.join(' '),
            o;
        if (((Di.lastIndex = 0), Di.test(i)))
            return (o = A_.test(i)), (n[1] = o0(n[1], o)), (n[0] = o0(n[0], o, pm(n[1]))), !0;
    },
    ys,
    Yn = (function () {
        var f = Date.now,
            n = 500,
            i = 33,
            o = f(),
            l = o,
            u = 1e3 / 240,
            c = u,
            d = [],
            h,
            g,
            _,
            w,
            y,
            v,
            T = function x(O) {
                var F = f() - l,
                    A = O === !0,
                    U,
                    D,
                    I,
                    V;
                if (
                    ((F > n || F < 0) && (o += F - i),
                    (l += F),
                    (I = l - o),
                    (U = I - c),
                    (U > 0 || A) &&
                        ((V = ++w.frame),
                        (y = I - w.time * 1e3),
                        (w.time = I = I / 1e3),
                        (c += U + (U >= u ? 4 : u - U)),
                        (D = 1)),
                    A || (h = g(x)),
                    D)
                )
                    for (v = 0; v < d.length; v++) d[v](I, y, V, O);
            };
        return (
            (w = {
                time: 0,
                frame: 0,
                tick: function () {
                    T(!0);
                },
                deltaRatio: function (O) {
                    return y / (1e3 / (O || 60));
                },
                wake: function () {
                    H0 &&
                        (!Tf &&
                            bf() &&
                            ((Dr = Tf = window),
                            (Jf = Dr.document || {}),
                            (Gn.gsap = Dn),
                            (Dr.gsapVersions || (Dr.gsapVersions = [])).push(Dn.version),
                            X0(oa || Dr.GreenSockGlobals || (!Dr.gsap && Dr) || {}),
                            cm.forEach(fm)),
                        (_ = typeof requestAnimationFrame < 'u' && requestAnimationFrame),
                        h && w.sleep(),
                        (g =
                            _ ||
                            function (O) {
                                return setTimeout(O, (c - w.time * 1e3 + 1) | 0);
                            }),
                        (ys = 1),
                        T(2));
                },
                sleep: function () {
                    (_ ? cancelAnimationFrame : clearTimeout)(h), (ys = 0), (g = _s);
                },
                lagSmoothing: function (O, F) {
                    (n = O || 1 / 0), (i = Math.min(F || 33, n));
                },
                fps: function (O) {
                    (u = 1e3 / (O || 240)), (c = w.time * 1e3 + u);
                },
                add: function (O, F, A) {
                    var U = F
                        ? function (D, I, V, L) {
                              O(D, I, V, L), w.remove(U);
                          }
                        : O;
                    return w.remove(O), d[A ? 'unshift' : 'push'](U), fl(), U;
                },
                remove: function (O, F) {
                    ~(F = d.indexOf(O)) && d.splice(F, 1) && v >= F && v--;
                },
                _listeners: d,
            }),
            w
        );
    })(),
    fl = function () {
        return !ys && Yn.wake();
    },
    Fe = {},
    F_ = /^[\d.\-M][\d.\-,\s]/,
    I_ = /["']/g,
    B_ = function (n) {
        for (
            var i = {},
                o = n.substr(1, n.length - 3).split(':'),
                l = o[0],
                u = 1,
                c = o.length,
                d,
                h,
                g;
            u < c;
            u++
        )
            (h = o[u]),
                (d = u !== c - 1 ? h.lastIndexOf(',') : h.length),
                (g = h.substr(0, d)),
                (i[l] = isNaN(g) ? g.replace(I_, '').trim() : +g),
                (l = h.substr(d + 1).trim());
        return i;
    },
    U_ = function (n) {
        var i = n.indexOf('(') + 1,
            o = n.indexOf(')'),
            l = n.indexOf('(', i);
        return n.substring(i, ~l && l < o ? n.indexOf(')', o + 1) : o);
    },
    V_ = function (n) {
        var i = (n + '').split('('),
            o = Fe[i[0]];
        return o && i.length > 1 && o.config
            ? o.config.apply(null, ~n.indexOf('{') ? [B_(i[1])] : U_(n).split(',').map(Z0))
            : Fe._CE && F_.test(n)
            ? Fe._CE('', n)
            : o;
    },
    mm = function (n) {
        return function (i) {
            return 1 - n(1 - i);
        };
    },
    gm = function f(n, i) {
        for (var o = n._first, l; o; )
            o instanceof pn
                ? f(o, i)
                : o.vars.yoyoEase &&
                  (!o._yoyo || !o._repeat) &&
                  o._yoyo !== i &&
                  (o.timeline
                      ? f(o.timeline, i)
                      : ((l = o._ease), (o._ease = o._yEase), (o._yEase = l), (o._yoyo = i))),
                (o = o._next);
    },
    fo = function (n, i) {
        return (n && (dt(n) ? n : Fe[n] || V_(n))) || i;
    },
    So = function (n, i, o, l) {
        o === void 0 &&
            (o = function (h) {
                return 1 - i(1 - h);
            }),
            l === void 0 &&
                (l = function (h) {
                    return h < 0.5 ? i(h * 2) / 2 : 1 - i((1 - h) * 2) / 2;
                });
        var u = { easeIn: i, easeOut: o, easeInOut: l },
            c;
        return (
            Mn(n, function (d) {
                (Fe[d] = Gn[d] = u), (Fe[(c = d.toLowerCase())] = o);
                for (var h in u)
                    Fe[c + (h === 'easeIn' ? '.in' : h === 'easeOut' ? '.out' : '.inOut')] = Fe[
                        d + '.' + h
                    ] = u[h];
            }),
            u
        );
    },
    _m = function (n) {
        return function (i) {
            return i < 0.5 ? (1 - n(1 - i * 2)) / 2 : 0.5 + n((i - 0.5) * 2) / 2;
        };
    },
    cf = function f(n, i, o) {
        var l = i >= 1 ? i : 1,
            u = (o || (n ? 0.3 : 0.45)) / (i < 1 ? i : 1),
            c = (u / kf) * (Math.asin(1 / l) || 0),
            d = function (_) {
                return _ === 1 ? 1 : l * Math.pow(2, -10 * _) * m_((_ - c) * u) + 1;
            },
            h =
                n === 'out'
                    ? d
                    : n === 'in'
                    ? function (g) {
                          return 1 - d(1 - g);
                      }
                    : _m(d);
        return (
            (u = kf / u),
            (h.config = function (g, _) {
                return f(n, g, _);
            }),
            h
        );
    },
    ff = function f(n, i) {
        i === void 0 && (i = 1.70158);
        var o = function (c) {
                return c ? --c * c * ((i + 1) * c + i) + 1 : 0;
            },
            l =
                n === 'out'
                    ? o
                    : n === 'in'
                    ? function (u) {
                          return 1 - o(1 - u);
                      }
                    : _m(o);
        return (
            (l.config = function (u) {
                return f(n, u);
            }),
            l
        );
    };
Mn('Linear,Quad,Cubic,Quart,Quint,Strong', function (f, n) {
    var i = n < 5 ? n + 1 : n;
    So(
        f + ',Power' + (i - 1),
        n
            ? function (o) {
                  return Math.pow(o, i);
              }
            : function (o) {
                  return o;
              },
        function (o) {
            return 1 - Math.pow(1 - o, i);
        },
        function (o) {
            return o < 0.5 ? Math.pow(o * 2, i) / 2 : 1 - Math.pow((1 - o) * 2, i) / 2;
        },
    );
});
Fe.Linear.easeNone = Fe.none = Fe.Linear.easeIn;
So('Elastic', cf('in'), cf('out'), cf());
(function (f, n) {
    var i = 1 / n,
        o = 2 * i,
        l = 2.5 * i,
        u = function (d) {
            return d < i
                ? f * d * d
                : d < o
                ? f * Math.pow(d - 1.5 / n, 2) + 0.75
                : d < l
                ? f * (d -= 2.25 / n) * d + 0.9375
                : f * Math.pow(d - 2.625 / n, 2) + 0.984375;
        };
    So(
        'Bounce',
        function (c) {
            return 1 - u(1 - c);
        },
        u,
    );
})(7.5625, 2.75);
So('Expo', function (f) {
    return f ? Math.pow(2, 10 * (f - 1)) : 0;
});
So('Circ', function (f) {
    return -(U0(1 - f * f) - 1);
});
So('Sine', function (f) {
    return f === 1 ? 1 : -h_(f * d_) + 1;
});
So('Back', ff('in'), ff('out'), ff());
Fe.SteppedEase =
    Fe.steps =
    Gn.SteppedEase =
        {
            config: function (n, i) {
                n === void 0 && (n = 1);
                var o = 1 / n,
                    l = n + (i ? 0 : 1),
                    u = i ? 1 : 0,
                    c = 1 - Qe;
                return function (d) {
                    return (((l * Ps(0, c, d)) | 0) + u) * o;
                };
            },
        };
ul.ease = Fe['quad.out'];
Mn('onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt', function (f) {
    return (nd += f + ',' + f + 'Params,');
});
var vm = function (n, i) {
        (this.id = p_++),
            (n._gsap = this),
            (this.target = n),
            (this.harness = i),
            (this.get = i ? i.get : K0),
            (this.set = i ? i.getSetter : sd);
    },
    xs = (function () {
        function f(i) {
            (this.vars = i),
                (this._delay = +i.delay || 0),
                (this._repeat = i.repeat === 1 / 0 ? -2 : i.repeat || 0) &&
                    ((this._rDelay = i.repeatDelay || 0), (this._yoyo = !!i.yoyo || !!i.yoyoEase)),
                (this._ts = 1),
                cl(this, +i.duration, 1, 1),
                (this.data = i.data),
                nt && ((this._ctx = nt), nt.data.push(this)),
                ys || Yn.wake();
        }
        var n = f.prototype;
        return (
            (n.delay = function (o) {
                return o || o === 0
                    ? (this.parent &&
                          this.parent.smoothChildTiming &&
                          this.startTime(this._start + o - this._delay),
                      (this._delay = o),
                      this)
                    : this._delay;
            }),
            (n.duration = function (o) {
                return arguments.length
                    ? this.totalDuration(
                          this._repeat > 0 ? o + (o + this._rDelay) * this._repeat : o,
                      )
                    : this.totalDuration() && this._dur;
            }),
            (n.totalDuration = function (o) {
                return arguments.length
                    ? ((this._dirty = 0),
                      cl(
                          this,
                          this._repeat < 0
                              ? o
                              : (o - this._repeat * this._rDelay) / (this._repeat + 1),
                      ))
                    : this._tDur;
            }),
            (n.totalTime = function (o, l) {
                if ((fl(), !arguments.length)) return this._tTime;
                var u = this._dp;
                if (u && u.smoothChildTiming && this._ts) {
                    for (ya(this, o), !u._dp || u.parent || em(u, this); u && u.parent; )
                        u.parent._time !==
                            u._start +
                                (u._ts >= 0
                                    ? u._tTime / u._ts
                                    : (u.totalDuration() - u._tTime) / -u._ts) &&
                            u.totalTime(u._tTime, !0),
                            (u = u.parent);
                    !this.parent &&
                        this._dp.autoRemoveChildren &&
                        ((this._ts > 0 && o < this._tDur) ||
                            (this._ts < 0 && o > 0) ||
                            (!this._tDur && !o)) &&
                        jr(this._dp, this, this._start - this._delay);
                }
                return (
                    (this._tTime !== o ||
                        (!this._dur && !l) ||
                        (this._initted && Math.abs(this._zTime) === Qe) ||
                        (!o && !this._initted && (this.add || this._ptLookup))) &&
                        (this._ts || (this._pTime = o), q0(this, o, l)),
                    this
                );
            }),
            (n.time = function (o, l) {
                return arguments.length
                    ? this.totalTime(
                          Math.min(this.totalDuration(), o + n0(this)) %
                              (this._dur + this._rDelay) || (o ? this._dur : 0),
                          l,
                      )
                    : this._time;
            }),
            (n.totalProgress = function (o, l) {
                return arguments.length
                    ? this.totalTime(this.totalDuration() * o, l)
                    : this.totalDuration()
                    ? Math.min(1, this._tTime / this._tDur)
                    : this.rawTime() > 0
                    ? 1
                    : 0;
            }),
            (n.progress = function (o, l) {
                return arguments.length
                    ? this.totalTime(
                          this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - o : o) +
                              n0(this),
                          l,
                      )
                    : this.duration()
                    ? Math.min(1, this._time / this._dur)
                    : this.rawTime() > 0
                    ? 1
                    : 0;
            }),
            (n.iteration = function (o, l) {
                var u = this.duration() + this._rDelay;
                return arguments.length
                    ? this.totalTime(this._time + (o - 1) * u, l)
                    : this._repeat
                    ? al(this._tTime, u) + 1
                    : 1;
            }),
            (n.timeScale = function (o, l) {
                if (!arguments.length) return this._rts === -Qe ? 0 : this._rts;
                if (this._rts === o) return this;
                var u = this.parent && this._ts ? ua(this.parent._time, this) : this._tTime;
                return (
                    (this._rts = +o || 0),
                    (this._ts = this._ps || o === -Qe ? 0 : this._rts),
                    this.totalTime(Ps(-Math.abs(this._delay), this._tDur, u), l !== !1),
                    va(this),
                    S_(this)
                );
            }),
            (n.paused = function (o) {
                return arguments.length
                    ? (this._ps !== o &&
                          ((this._ps = o),
                          o
                              ? ((this._pTime =
                                    this._tTime || Math.max(-this._delay, this.rawTime())),
                                (this._ts = this._act = 0))
                              : (fl(),
                                (this._ts = this._rts),
                                this.totalTime(
                                    this.parent && !this.parent.smoothChildTiming
                                        ? this.rawTime()
                                        : this._tTime || this._pTime,
                                    this.progress() === 1 &&
                                        Math.abs(this._zTime) !== Qe &&
                                        (this._tTime -= Qe),
                                ))),
                      this)
                    : this._ps;
            }),
            (n.startTime = function (o) {
                if (arguments.length) {
                    this._start = o;
                    var l = this.parent || this._dp;
                    return l && (l._sort || !this.parent) && jr(l, this, o - this._delay), this;
                }
                return this._start;
            }),
            (n.endTime = function (o) {
                return (
                    this._start +
                    (Nn(o) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
                );
            }),
            (n.rawTime = function (o) {
                var l = this.parent || this._dp;
                return l
                    ? o && (!this._ts || (this._repeat && this._time && this.totalProgress() < 1))
                        ? this._tTime % (this._dur + this._rDelay)
                        : this._ts
                        ? ua(l.rawTime(o), this)
                        : this._tTime
                    : this._tTime;
            }),
            (n.revert = function (o) {
                o === void 0 && (o = v_);
                var l = Jt;
                return (
                    (Jt = o),
                    (this._initted || this._startAt) &&
                        (this.timeline && this.timeline.revert(o),
                        this.totalTime(-0.01, o.suppressEvents)),
                    this.data !== 'nested' && o.kill !== !1 && this.kill(),
                    (Jt = l),
                    this
                );
            }),
            (n.globalTime = function (o) {
                for (var l = this, u = arguments.length ? o : l.rawTime(); l; )
                    (u = l._start + u / (Math.abs(l._ts) || 1)), (l = l._dp);
                return !this.parent && this._sat ? this._sat.globalTime(o) : u;
            }),
            (n.repeat = function (o) {
                return arguments.length
                    ? ((this._repeat = o === 1 / 0 ? -2 : o), r0(this))
                    : this._repeat === -2
                    ? 1 / 0
                    : this._repeat;
            }),
            (n.repeatDelay = function (o) {
                if (arguments.length) {
                    var l = this._time;
                    return (this._rDelay = o), r0(this), l ? this.time(l) : this;
                }
                return this._rDelay;
            }),
            (n.yoyo = function (o) {
                return arguments.length ? ((this._yoyo = o), this) : this._yoyo;
            }),
            (n.seek = function (o, l) {
                return this.totalTime(ir(this, o), Nn(l));
            }),
            (n.restart = function (o, l) {
                return this.play().totalTime(o ? -this._delay : 0, Nn(l));
            }),
            (n.play = function (o, l) {
                return o != null && this.seek(o, l), this.reversed(!1).paused(!1);
            }),
            (n.reverse = function (o, l) {
                return (
                    o != null && this.seek(o || this.totalDuration(), l),
                    this.reversed(!0).paused(!1)
                );
            }),
            (n.pause = function (o, l) {
                return o != null && this.seek(o, l), this.paused(!0);
            }),
            (n.resume = function () {
                return this.paused(!1);
            }),
            (n.reversed = function (o) {
                return arguments.length
                    ? (!!o !== this.reversed() && this.timeScale(-this._rts || (o ? -Qe : 0)), this)
                    : this._rts < 0;
            }),
            (n.invalidate = function () {
                return (this._initted = this._act = 0), (this._zTime = -Qe), this;
            }),
            (n.isActive = function () {
                var o = this.parent || this._dp,
                    l = this._start,
                    u;
                return !!(
                    !o ||
                    (this._ts &&
                        this._initted &&
                        o.isActive() &&
                        (u = o.rawTime(!0)) >= l &&
                        u < this.endTime(!0) - Qe)
                );
            }),
            (n.eventCallback = function (o, l, u) {
                var c = this.vars;
                return arguments.length > 1
                    ? (l
                          ? ((c[o] = l),
                            u && (c[o + 'Params'] = u),
                            o === 'onUpdate' && (this._onUpdate = l))
                          : delete c[o],
                      this)
                    : c[o];
            }),
            (n.then = function (o) {
                var l = this;
                return new Promise(function (u) {
                    var c = dt(o) ? o : b0,
                        d = function () {
                            var g = l.then;
                            (l.then = null),
                                dt(c) && (c = c(l)) && (c.then || c === l) && (l.then = g),
                                u(c),
                                (l.then = g);
                        };
                    (l._initted && l.totalProgress() === 1 && l._ts >= 0) ||
                    (!l._tTime && l._ts < 0)
                        ? d()
                        : (l._prom = d);
                });
            }),
            (n.kill = function () {
                Zl(this);
            }),
            f
        );
    })();
cr(xs.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -Qe,
    _prom: 0,
    _ps: !1,
    _rts: 1,
});
var pn = (function (f) {
    B0(n, f);
    function n(o, l) {
        var u;
        return (
            o === void 0 && (o = {}),
            (u = f.call(this, o) || this),
            (u.labels = {}),
            (u.smoothChildTiming = !!o.smoothChildTiming),
            (u.autoRemoveChildren = !!o.autoRemoveChildren),
            (u._sort = Nn(o.sortChildren)),
            st && jr(o.parent || st, br(u), l),
            o.reversed && u.reverse(),
            o.paused && u.paused(!0),
            o.scrollTrigger && tm(br(u), o.scrollTrigger),
            u
        );
    }
    var i = n.prototype;
    return (
        (i.to = function (l, u, c) {
            return os(0, arguments, this), this;
        }),
        (i.from = function (l, u, c) {
            return os(1, arguments, this), this;
        }),
        (i.fromTo = function (l, u, c, d) {
            return os(2, arguments, this), this;
        }),
        (i.set = function (l, u, c) {
            return (
                (u.duration = 0),
                (u.parent = this),
                is(u).repeatDelay || (u.repeat = 0),
                (u.immediateRender = !!u.immediateRender),
                new kt(l, u, ir(this, c), 1),
                this
            );
        }),
        (i.call = function (l, u, c) {
            return jr(this, kt.delayedCall(0, l, u), c);
        }),
        (i.staggerTo = function (l, u, c, d, h, g, _) {
            return (
                (c.duration = u),
                (c.stagger = c.stagger || d),
                (c.onComplete = g),
                (c.onCompleteParams = _),
                (c.parent = this),
                new kt(l, c, ir(this, h)),
                this
            );
        }),
        (i.staggerFrom = function (l, u, c, d, h, g, _) {
            return (
                (c.runBackwards = 1),
                (is(c).immediateRender = Nn(c.immediateRender)),
                this.staggerTo(l, u, c, d, h, g, _)
            );
        }),
        (i.staggerFromTo = function (l, u, c, d, h, g, _, w) {
            return (
                (d.startAt = c),
                (is(d).immediateRender = Nn(d.immediateRender)),
                this.staggerTo(l, u, d, h, g, _, w)
            );
        }),
        (i.render = function (l, u, c) {
            var d = this._time,
                h = this._dirty ? this.totalDuration() : this._tDur,
                g = this._dur,
                _ = l <= 0 ? 0 : Ft(l),
                w = this._zTime < 0 != l < 0 && (this._initted || !g),
                y,
                v,
                T,
                x,
                O,
                F,
                A,
                U,
                D,
                I,
                V,
                L;
            if ((this !== st && _ > h && l >= 0 && (_ = h), _ !== this._tTime || c || w)) {
                if (
                    (d !== this._time && g && ((_ += this._time - d), (l += this._time - d)),
                    (y = _),
                    (D = this._start),
                    (U = this._ts),
                    (F = !U),
                    w && (g || (d = this._zTime), (l || !u) && (this._zTime = l)),
                    this._repeat)
                ) {
                    if (((V = this._yoyo), (O = g + this._rDelay), this._repeat < -1 && l < 0))
                        return this.totalTime(O * 100 + l, u, c);
                    if (
                        ((y = Ft(_ % O)),
                        _ === h
                            ? ((x = this._repeat), (y = g))
                            : ((x = ~~(_ / O)),
                              x && x === _ / O && ((y = g), x--),
                              y > g && (y = g)),
                        (I = al(this._tTime, O)),
                        !d &&
                            this._tTime &&
                            I !== x &&
                            this._tTime - I * O - this._dur <= 0 &&
                            (I = x),
                        V && x & 1 && ((y = g - y), (L = 1)),
                        x !== I && !this._lock)
                    ) {
                        var X = V && I & 1,
                            $ = X === (V && x & 1);
                        if (
                            (x < I && (X = !X),
                            (d = X ? 0 : _ % g ? g : _),
                            (this._lock = 1),
                            (this.render(d || (L ? 0 : Ft(x * O)), u, !g)._lock = 0),
                            (this._tTime = _),
                            !u && this.parent && Xn(this, 'onRepeat'),
                            this.vars.repeatRefresh && !L && (this.invalidate()._lock = 1),
                            (d && d !== this._time) ||
                                F !== !this._ts ||
                                (this.vars.onRepeat && !this.parent && !this._act))
                        )
                            return this;
                        if (
                            ((g = this._dur),
                            (h = this._tDur),
                            $ &&
                                ((this._lock = 2),
                                (d = X ? g : -1e-4),
                                this.render(d, !0),
                                this.vars.repeatRefresh && !L && this.invalidate()),
                            (this._lock = 0),
                            !this._ts && !F)
                        )
                            return this;
                        gm(this, L);
                    }
                }
                if (
                    (this._hasPause &&
                        !this._forcing &&
                        this._lock < 2 &&
                        ((A = E_(this, Ft(d), Ft(y))), A && (_ -= y - (y = A._start))),
                    (this._tTime = _),
                    (this._time = y),
                    (this._act = !U),
                    this._initted ||
                        ((this._onUpdate = this.vars.onUpdate),
                        (this._initted = 1),
                        (this._zTime = l),
                        (d = 0)),
                    !d && y && !u && !x && (Xn(this, 'onStart'), this._tTime !== _))
                )
                    return this;
                if (y >= d && l >= 0)
                    for (v = this._first; v; ) {
                        if (((T = v._next), (v._act || y >= v._start) && v._ts && A !== v)) {
                            if (v.parent !== this) return this.render(l, u, c);
                            if (
                                (v.render(
                                    v._ts > 0
                                        ? (y - v._start) * v._ts
                                        : (v._dirty ? v.totalDuration() : v._tDur) +
                                              (y - v._start) * v._ts,
                                    u,
                                    c,
                                ),
                                y !== this._time || (!this._ts && !F))
                            ) {
                                (A = 0), T && (_ += this._zTime = -Qe);
                                break;
                            }
                        }
                        v = T;
                    }
                else {
                    v = this._last;
                    for (var Q = l < 0 ? l : y; v; ) {
                        if (((T = v._prev), (v._act || Q <= v._end) && v._ts && A !== v)) {
                            if (v.parent !== this) return this.render(l, u, c);
                            if (
                                (v.render(
                                    v._ts > 0
                                        ? (Q - v._start) * v._ts
                                        : (v._dirty ? v.totalDuration() : v._tDur) +
                                              (Q - v._start) * v._ts,
                                    u,
                                    c || (Jt && (v._initted || v._startAt)),
                                ),
                                y !== this._time || (!this._ts && !F))
                            ) {
                                (A = 0), T && (_ += this._zTime = Q ? -Qe : Qe);
                                break;
                            }
                        }
                        v = T;
                    }
                }
                if (
                    A &&
                    !u &&
                    (this.pause(), (A.render(y >= d ? 0 : -Qe)._zTime = y >= d ? 1 : -1), this._ts)
                )
                    return (this._start = D), va(this), this.render(l, u, c);
                this._onUpdate && !u && Xn(this, 'onUpdate', !0),
                    ((_ === h && this._tTime >= this.totalDuration()) || (!_ && d)) &&
                        (D === this._start || Math.abs(U) !== Math.abs(this._ts)) &&
                        (this._lock ||
                            ((l || !g) &&
                                ((_ === h && this._ts > 0) || (!_ && this._ts < 0)) &&
                                ji(this, 1),
                            !u &&
                                !(l < 0 && !d) &&
                                (_ || d || !h) &&
                                (Xn(
                                    this,
                                    _ === h && l >= 0 ? 'onComplete' : 'onReverseComplete',
                                    !0,
                                ),
                                this._prom && !(_ < h && this.timeScale() > 0) && this._prom())));
            }
            return this;
        }),
        (i.add = function (l, u) {
            var c = this;
            if ((ri(u) || (u = ir(this, u, l)), !(l instanceof xs))) {
                if (en(l))
                    return (
                        l.forEach(function (d) {
                            return c.add(d, u);
                        }),
                        this
                    );
                if (It(l)) return this.addLabel(l, u);
                if (dt(l)) l = kt.delayedCall(0, l);
                else return this;
            }
            return this !== l ? jr(this, l, u) : this;
        }),
        (i.getChildren = function (l, u, c, d) {
            l === void 0 && (l = !0),
                u === void 0 && (u = !0),
                c === void 0 && (c = !0),
                d === void 0 && (d = -sr);
            for (var h = [], g = this._first; g; )
                g._start >= d &&
                    (g instanceof kt
                        ? u && h.push(g)
                        : (c && h.push(g), l && h.push.apply(h, g.getChildren(!0, u, c)))),
                    (g = g._next);
            return h;
        }),
        (i.getById = function (l) {
            for (var u = this.getChildren(1, 1, 1), c = u.length; c--; )
                if (u[c].vars.id === l) return u[c];
        }),
        (i.remove = function (l) {
            return It(l)
                ? this.removeLabel(l)
                : dt(l)
                ? this.killTweensOf(l)
                : (_a(this, l), l === this._recent && (this._recent = this._last), co(this));
        }),
        (i.totalTime = function (l, u) {
            return arguments.length
                ? ((this._forcing = 1),
                  !this._dp &&
                      this._ts &&
                      (this._start = Ft(
                          Yn.time -
                              (this._ts > 0
                                  ? l / this._ts
                                  : (this.totalDuration() - l) / -this._ts),
                      )),
                  f.prototype.totalTime.call(this, l, u),
                  (this._forcing = 0),
                  this)
                : this._tTime;
        }),
        (i.addLabel = function (l, u) {
            return (this.labels[l] = ir(this, u)), this;
        }),
        (i.removeLabel = function (l) {
            return delete this.labels[l], this;
        }),
        (i.addPause = function (l, u, c) {
            var d = kt.delayedCall(0, u || _s, c);
            return (d.data = 'isPause'), (this._hasPause = 1), jr(this, d, ir(this, l));
        }),
        (i.removePause = function (l) {
            var u = this._first;
            for (l = ir(this, l); u; )
                u._start === l && u.data === 'isPause' && ji(u), (u = u._next);
        }),
        (i.killTweensOf = function (l, u, c) {
            for (var d = this.getTweensOf(l, c), h = d.length; h--; )
                Pi !== d[h] && d[h].kill(l, u);
            return this;
        }),
        (i.getTweensOf = function (l, u) {
            for (var c = [], d = ur(l), h = this._first, g = ri(u), _; h; )
                h instanceof kt
                    ? y_(h._targets, d) &&
                      (g
                          ? (!Pi || (h._initted && h._ts)) &&
                            h.globalTime(0) <= u &&
                            h.globalTime(h.totalDuration()) > u
                          : !u || h.isActive()) &&
                      c.push(h)
                    : (_ = h.getTweensOf(d, u)).length && c.push.apply(c, _),
                    (h = h._next);
            return c;
        }),
        (i.tweenTo = function (l, u) {
            u = u || {};
            var c = this,
                d = ir(c, l),
                h = u,
                g = h.startAt,
                _ = h.onStart,
                w = h.onStartParams,
                y = h.immediateRender,
                v,
                T = kt.to(
                    c,
                    cr(
                        {
                            ease: u.ease || 'none',
                            lazy: !1,
                            immediateRender: !1,
                            time: d,
                            overwrite: 'auto',
                            duration:
                                u.duration ||
                                Math.abs(
                                    (d - (g && 'time' in g ? g.time : c._time)) / c.timeScale(),
                                ) ||
                                Qe,
                            onStart: function () {
                                if ((c.pause(), !v)) {
                                    var O =
                                        u.duration ||
                                        Math.abs(
                                            (d - (g && 'time' in g ? g.time : c._time)) /
                                                c.timeScale(),
                                        );
                                    T._dur !== O && cl(T, O, 0, 1).render(T._time, !0, !0), (v = 1);
                                }
                                _ && _.apply(T, w || []);
                            },
                        },
                        u,
                    ),
                );
            return y ? T.render(0) : T;
        }),
        (i.tweenFromTo = function (l, u, c) {
            return this.tweenTo(u, cr({ startAt: { time: ir(this, l) } }, c));
        }),
        (i.recent = function () {
            return this._recent;
        }),
        (i.nextLabel = function (l) {
            return l === void 0 && (l = this._time), i0(this, ir(this, l));
        }),
        (i.previousLabel = function (l) {
            return l === void 0 && (l = this._time), i0(this, ir(this, l), 1);
        }),
        (i.currentLabel = function (l) {
            return arguments.length ? this.seek(l, !0) : this.previousLabel(this._time + Qe);
        }),
        (i.shiftChildren = function (l, u, c) {
            c === void 0 && (c = 0);
            for (var d = this._first, h = this.labels, g; d; )
                d._start >= c && ((d._start += l), (d._end += l)), (d = d._next);
            if (u) for (g in h) h[g] >= c && (h[g] += l);
            return co(this);
        }),
        (i.invalidate = function (l) {
            var u = this._first;
            for (this._lock = 0; u; ) u.invalidate(l), (u = u._next);
            return f.prototype.invalidate.call(this, l);
        }),
        (i.clear = function (l) {
            l === void 0 && (l = !0);
            for (var u = this._first, c; u; ) (c = u._next), this.remove(u), (u = c);
            return (
                this._dp && (this._time = this._tTime = this._pTime = 0),
                l && (this.labels = {}),
                co(this)
            );
        }),
        (i.totalDuration = function (l) {
            var u = 0,
                c = this,
                d = c._last,
                h = sr,
                g,
                _,
                w;
            if (arguments.length)
                return c.timeScale(
                    (c._repeat < 0 ? c.duration() : c.totalDuration()) / (c.reversed() ? -l : l),
                );
            if (c._dirty) {
                for (w = c.parent; d; )
                    (g = d._prev),
                        d._dirty && d.totalDuration(),
                        (_ = d._start),
                        _ > h && c._sort && d._ts && !c._lock
                            ? ((c._lock = 1), (jr(c, d, _ - d._delay, 1)._lock = 0))
                            : (h = _),
                        _ < 0 &&
                            d._ts &&
                            ((u -= _),
                            ((!w && !c._dp) || (w && w.smoothChildTiming)) &&
                                ((c._start += _ / c._ts), (c._time -= _), (c._tTime -= _)),
                            c.shiftChildren(-_, !1, -1 / 0),
                            (h = 0)),
                        d._end > u && d._ts && (u = d._end),
                        (d = g);
                cl(c, c === st && c._time > u ? c._time : u, 1, 1), (c._dirty = 0);
            }
            return c._tDur;
        }),
        (n.updateRoot = function (l) {
            if ((st._ts && (q0(st, ua(l, st)), (G0 = Yn.frame)), Yn.frame >= e0)) {
                e0 += Qn.autoSleep || 120;
                var u = st._first;
                if ((!u || !u._ts) && Qn.autoSleep && Yn._listeners.length < 2) {
                    for (; u && !u._ts; ) u = u._next;
                    u || Yn.sleep();
                }
            }
        }),
        n
    );
})(xs);
cr(pn.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var $_ = function (n, i, o, l, u, c, d) {
        var h = new Rn(this._pt, n, i, 0, 1, Cm, null, u),
            g = 0,
            _ = 0,
            w,
            y,
            v,
            T,
            x,
            O,
            F,
            A;
        for (
            h.b = o,
                h.e = l,
                o += '',
                l += '',
                (F = ~l.indexOf('random(')) && (l = vs(l)),
                c && ((A = [o, l]), c(A, n, i), (o = A[0]), (l = A[1])),
                y = o.match(sf) || [];
            (w = sf.exec(l));

        )
            (T = w[0]),
                (x = l.substring(g, w.index)),
                v ? (v = (v + 1) % 5) : x.substr(-5) === 'rgba(' && (v = 1),
                T !== y[_++] &&
                    ((O = parseFloat(y[_ - 1]) || 0),
                    (h._pt = {
                        _next: h._pt,
                        p: x || _ === 1 ? x : ',',
                        s: O,
                        c: T.charAt(1) === '=' ? nl(O, T) - O : parseFloat(T) - O,
                        m: v && v < 4 ? Math.round : 0,
                    }),
                    (g = sf.lastIndex));
        return (
            (h.c = g < l.length ? l.substring(g, l.length) : ''),
            (h.fp = d),
            (W0.test(l) || F) && (h.e = 0),
            (this._pt = h),
            h
        );
    },
    id = function (n, i, o, l, u, c, d, h, g, _) {
        dt(l) && (l = l(u || 0, n, c));
        var w = n[i],
            y =
                o !== 'get'
                    ? o
                    : dt(w)
                    ? g
                        ? n[
                              i.indexOf('set') || !dt(n['get' + i.substr(3)])
                                  ? i
                                  : 'get' + i.substr(3)
                          ](g)
                        : n[i]()
                    : w,
            v = dt(w) ? (g ? Q_ : Sm) : ld,
            T;
        if (
            (It(l) &&
                (~l.indexOf('random(') && (l = vs(l)),
                l.charAt(1) === '=' && ((T = nl(y, l) + (bt(y) || 0)), (T || T === 0) && (l = T))),
            !_ || y !== l || zf)
        )
            return !isNaN(y * l) && l !== ''
                ? ((T = new Rn(
                      this._pt,
                      n,
                      i,
                      +y || 0,
                      l - (y || 0),
                      typeof w == 'boolean' ? K_ : km,
                      0,
                      v,
                  )),
                  g && (T.fp = g),
                  d && T.modifier(d, this, n),
                  (this._pt = T))
                : (!w && !(i in n) && ed(i, l),
                  $_.call(this, n, i, y, l, v, h || Qn.stringFilter, g));
    },
    W_ = function (n, i, o, l, u) {
        if ((dt(n) && (n = ls(n, u, i, o, l)), !Ur(n) || (n.style && n.nodeType) || en(n) || V0(n)))
            return It(n) ? ls(n, u, i, o, l) : n;
        var c = {},
            d;
        for (d in n) c[d] = ls(n[d], u, i, o, l);
        return c;
    },
    ym = function (n, i, o, l, u, c) {
        var d, h, g, _;
        if (
            Wn[n] &&
            (d = new Wn[n]()).init(u, d.rawVars ? i[n] : W_(i[n], l, u, c, o), o, l, c) !== !1 &&
            ((o._pt = h = new Rn(o._pt, u, n, 0, 1, d.render, d, 0, d.priority)), o !== el)
        )
            for (g = o._ptLookup[o._targets.indexOf(u)], _ = d._props.length; _--; )
                g[d._props[_]] = h;
        return d;
    },
    Pi,
    zf,
    od = function f(n, i, o) {
        var l = n.vars,
            u = l.ease,
            c = l.startAt,
            d = l.immediateRender,
            h = l.lazy,
            g = l.onUpdate,
            _ = l.runBackwards,
            w = l.yoyoEase,
            y = l.keyframes,
            v = l.autoRevert,
            T = n._dur,
            x = n._startAt,
            O = n._targets,
            F = n.parent,
            A = F && F.data === 'nested' ? F.vars.targets : O,
            U = n._overwrite === 'auto' && !qf,
            D = n.timeline,
            I,
            V,
            L,
            X,
            $,
            Q,
            pe,
            q,
            he,
            ge,
            ke,
            fe,
            ee;
        if (
            (D && (!y || !u) && (u = 'none'),
            (n._ease = fo(u, ul.ease)),
            (n._yEase = w ? mm(fo(w === !0 ? u : w, ul.ease)) : 0),
            w && n._yoyo && !n._repeat && ((w = n._yEase), (n._yEase = n._ease), (n._ease = w)),
            (n._from = !D && !!l.runBackwards),
            !D || (y && !l.stagger))
        ) {
            if (
                ((q = O[0] ? ao(O[0]).harness : 0),
                (fe = q && l[q.prop]),
                (I = sa(l, td)),
                x &&
                    (x._zTime < 0 && x.progress(1),
                    i < 0 && _ && d && !v ? x.render(-1, !0) : x.revert(_ && T ? Gu : __),
                    (x._lazy = 0)),
                c)
            ) {
                if (
                    (ji(
                        (n._startAt = kt.set(
                            O,
                            cr(
                                {
                                    data: 'isStart',
                                    overwrite: !1,
                                    parent: F,
                                    immediateRender: !0,
                                    lazy: !x && Nn(h),
                                    startAt: null,
                                    delay: 0,
                                    onUpdate:
                                        g &&
                                        function () {
                                            return Xn(n, 'onUpdate');
                                        },
                                    stagger: 0,
                                },
                                c,
                            ),
                        )),
                    ),
                    (n._startAt._dp = 0),
                    (n._startAt._sat = n),
                    i < 0 && (Jt || (!d && !v)) && n._startAt.revert(Gu),
                    d && T && i <= 0 && o <= 0)
                ) {
                    i && (n._zTime = i);
                    return;
                }
            } else if (_ && T && !x) {
                if (
                    (i && (d = !1),
                    (L = cr(
                        {
                            overwrite: !1,
                            data: 'isFromStart',
                            lazy: d && !x && Nn(h),
                            immediateRender: d,
                            stagger: 0,
                            parent: F,
                        },
                        I,
                    )),
                    fe && (L[q.prop] = fe),
                    ji((n._startAt = kt.set(O, L))),
                    (n._startAt._dp = 0),
                    (n._startAt._sat = n),
                    i < 0 && (Jt ? n._startAt.revert(Gu) : n._startAt.render(-1, !0)),
                    (n._zTime = i),
                    !d)
                )
                    f(n._startAt, Qe, Qe);
                else if (!i) return;
            }
            for (n._pt = n._ptCache = 0, h = (T && Nn(h)) || (h && !T), V = 0; V < O.length; V++) {
                if (
                    (($ = O[V]),
                    (pe = $._gsap || rd(O)[V]._gsap),
                    (n._ptLookup[V] = ge = {}),
                    Ef[pe.id] && zi.length && la(),
                    (ke = A === O ? V : A.indexOf($)),
                    q &&
                        (he = new q()).init($, fe || I, n, ke, A) !== !1 &&
                        ((n._pt = X =
                            new Rn(n._pt, $, he.name, 0, 1, he.render, he, 0, he.priority)),
                        he._props.forEach(function (W) {
                            ge[W] = X;
                        }),
                        he.priority && (Q = 1)),
                    !q || fe)
                )
                    for (L in I)
                        Wn[L] && (he = ym(L, I, n, ke, $, A))
                            ? he.priority && (Q = 1)
                            : (ge[L] = X = id.call(n, $, L, 'get', I[L], ke, A, 0, l.stringFilter));
                n._op && n._op[V] && n.kill($, n._op[V]),
                    U &&
                        n._pt &&
                        ((Pi = n),
                        st.killTweensOf($, ge, n.globalTime(i)),
                        (ee = !n.parent),
                        (Pi = 0)),
                    n._pt && h && (Ef[pe.id] = 1);
            }
            Q && Tm(n), n._onInit && n._onInit(n);
        }
        (n._onUpdate = g),
            (n._initted = (!n._op || n._pt) && !ee),
            y && i <= 0 && D.render(sr, !0, !0);
    },
    Y_ = function (n, i, o, l, u, c, d, h) {
        var g = ((n._pt && n._ptCache) || (n._ptCache = {}))[i],
            _,
            w,
            y,
            v;
        if (!g)
            for (g = n._ptCache[i] = [], y = n._ptLookup, v = n._targets.length; v--; ) {
                if (((_ = y[v][i]), _ && _.d && _.d._pt))
                    for (_ = _.d._pt; _ && _.p !== i && _.fp !== i; ) _ = _._next;
                if (!_)
                    return (
                        (zf = 1),
                        (n.vars[i] = '+=0'),
                        od(n, d),
                        (zf = 0),
                        h ? gs(i + ' not eligible for reset') : 1
                    );
                g.push(_);
            }
        for (v = g.length; v--; )
            (w = g[v]),
                (_ = w._pt || w),
                (_.s = (l || l === 0) && !u ? l : _.s + (l || 0) + c * _.c),
                (_.c = o - _.s),
                w.e && (w.e = gt(o) + bt(w.e)),
                w.b && (w.b = _.s + bt(w.b));
    },
    H_ = function (n, i) {
        var o = n[0] ? ao(n[0]).harness : 0,
            l = o && o.aliases,
            u,
            c,
            d,
            h;
        if (!l) return i;
        u = _o({}, i);
        for (c in l) if (c in u) for (h = l[c].split(','), d = h.length; d--; ) u[h[d]] = u[c];
        return u;
    },
    X_ = function (n, i, o, l) {
        var u = i.ease || l || 'power1.inOut',
            c,
            d;
        if (en(i))
            (d = o[n] || (o[n] = [])),
                i.forEach(function (h, g) {
                    return d.push({ t: (g / (i.length - 1)) * 100, v: h, e: u });
                });
        else
            for (c in i)
                (d = o[c] || (o[c] = [])),
                    c === 'ease' || d.push({ t: parseFloat(n), v: i[c], e: u });
    },
    ls = function (n, i, o, l, u) {
        return dt(n) ? n.call(i, o, l, u) : It(n) && ~n.indexOf('random(') ? vs(n) : n;
    },
    xm = nd + 'repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert',
    wm = {};
Mn(xm + ',id,stagger,delay,duration,paused,scrollTrigger', function (f) {
    return (wm[f] = 1);
});
var kt = (function (f) {
    B0(n, f);
    function n(o, l, u, c) {
        var d;
        typeof l == 'number' && ((u.duration = l), (l = u), (u = null)),
            (d = f.call(this, c ? l : is(l)) || this);
        var h = d.vars,
            g = h.duration,
            _ = h.delay,
            w = h.immediateRender,
            y = h.stagger,
            v = h.overwrite,
            T = h.keyframes,
            x = h.defaults,
            O = h.scrollTrigger,
            F = h.yoyoEase,
            A = l.parent || st,
            U = (en(o) || V0(o) ? ri(o[0]) : 'length' in l) ? [o] : ur(o),
            D,
            I,
            V,
            L,
            X,
            $,
            Q,
            pe;
        if (
            ((d._targets = U.length
                ? rd(U)
                : gs('GSAP target ' + o + ' not found. https://gsap.com', !Qn.nullTargetWarn) ||
                  []),
            (d._ptLookup = []),
            (d._overwrite = v),
            T || y || zu(g) || zu(_))
        ) {
            if (
                ((l = d.vars),
                (D = d.timeline =
                    new pn({
                        data: 'nested',
                        defaults: x || {},
                        targets: A && A.data === 'nested' ? A.vars.targets : U,
                    })),
                D.kill(),
                (D.parent = D._dp = br(d)),
                (D._start = 0),
                y || zu(g) || zu(_))
            ) {
                if (((L = U.length), (Q = y && om(y)), Ur(y)))
                    for (X in y) ~xm.indexOf(X) && (pe || (pe = {}), (pe[X] = y[X]));
                for (I = 0; I < L; I++)
                    (V = sa(l, wm)),
                        (V.stagger = 0),
                        F && (V.yoyoEase = F),
                        pe && _o(V, pe),
                        ($ = U[I]),
                        (V.duration = +ls(g, br(d), I, $, U)),
                        (V.delay = (+ls(_, br(d), I, $, U) || 0) - d._delay),
                        !y &&
                            L === 1 &&
                            V.delay &&
                            ((d._delay = _ = V.delay), (d._start += _), (V.delay = 0)),
                        D.to($, V, Q ? Q(I, $, U) : 0),
                        (D._ease = Fe.none);
                D.duration() ? (g = _ = 0) : (d.timeline = 0);
            } else if (T) {
                is(cr(D.vars.defaults, { ease: 'none' })),
                    (D._ease = fo(T.ease || l.ease || 'none'));
                var q = 0,
                    he,
                    ge,
                    ke;
                if (en(T))
                    T.forEach(function (fe) {
                        return D.to(U, fe, '>');
                    }),
                        D.duration();
                else {
                    V = {};
                    for (X in T) X === 'ease' || X === 'easeEach' || X_(X, T[X], V, T.easeEach);
                    for (X in V)
                        for (
                            he = V[X].sort(function (fe, ee) {
                                return fe.t - ee.t;
                            }),
                                q = 0,
                                I = 0;
                            I < he.length;
                            I++
                        )
                            (ge = he[I]),
                                (ke = {
                                    ease: ge.e,
                                    duration: ((ge.t - (I ? he[I - 1].t : 0)) / 100) * g,
                                }),
                                (ke[X] = ge.v),
                                D.to(U, ke, q),
                                (q += ke.duration);
                    D.duration() < g && D.to({}, { duration: g - D.duration() });
                }
            }
            g || d.duration((g = D.duration()));
        } else d.timeline = 0;
        return (
            v === !0 && !qf && ((Pi = br(d)), st.killTweensOf(U), (Pi = 0)),
            jr(A, br(d), u),
            l.reversed && d.reverse(),
            l.paused && d.paused(!0),
            (w ||
                (!g &&
                    !T &&
                    d._start === Ft(A._time) &&
                    Nn(w) &&
                    k_(br(d)) &&
                    A.data !== 'nested')) &&
                ((d._tTime = -Qe), d.render(Math.max(0, -_) || 0)),
            O && tm(br(d), O),
            d
        );
    }
    var i = n.prototype;
    return (
        (i.render = function (l, u, c) {
            var d = this._time,
                h = this._tDur,
                g = this._dur,
                _ = l < 0,
                w = l > h - Qe && !_ ? h : l < Qe ? 0 : l,
                y,
                v,
                T,
                x,
                O,
                F,
                A,
                U,
                D;
            if (!g) T_(this, l, u, c);
            else if (
                w !== this._tTime ||
                !l ||
                c ||
                (!this._initted && this._tTime) ||
                (this._startAt && this._zTime < 0 !== _)
            ) {
                if (((y = w), (U = this.timeline), this._repeat)) {
                    if (((x = g + this._rDelay), this._repeat < -1 && _))
                        return this.totalTime(x * 100 + l, u, c);
                    if (
                        ((y = Ft(w % x)),
                        w === h
                            ? ((T = this._repeat), (y = g))
                            : ((T = ~~(w / x)),
                              T && T === Ft(w / x) && ((y = g), T--),
                              y > g && (y = g)),
                        (F = this._yoyo && T & 1),
                        F && ((D = this._yEase), (y = g - y)),
                        (O = al(this._tTime, x)),
                        y === d && !c && this._initted && T === O)
                    )
                        return (this._tTime = w), this;
                    T !== O &&
                        (U && this._yEase && gm(U, F),
                        this.vars.repeatRefresh &&
                            !F &&
                            !this._lock &&
                            this._time !== x &&
                            this._initted &&
                            ((this._lock = c = 1),
                            (this.render(Ft(x * T), !0).invalidate()._lock = 0)));
                }
                if (!this._initted) {
                    if (nm(this, _ ? l : y, c, u, w)) return (this._tTime = 0), this;
                    if (d !== this._time && !(c && this.vars.repeatRefresh && T !== O)) return this;
                    if (g !== this._dur) return this.render(l, u, c);
                }
                if (
                    ((this._tTime = w),
                    (this._time = y),
                    !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
                    (this.ratio = A = (D || this._ease)(y / g)),
                    this._from && (this.ratio = A = 1 - A),
                    y && !d && !u && !T && (Xn(this, 'onStart'), this._tTime !== w))
                )
                    return this;
                for (v = this._pt; v; ) v.r(A, v.d), (v = v._next);
                (U && U.render(l < 0 ? l : U._dur * U._ease(y / this._dur), u, c)) ||
                    (this._startAt && (this._zTime = l)),
                    this._onUpdate && !u && (_ && Pf(this, l, u, c), Xn(this, 'onUpdate')),
                    this._repeat &&
                        T !== O &&
                        this.vars.onRepeat &&
                        !u &&
                        this.parent &&
                        Xn(this, 'onRepeat'),
                    (w === this._tDur || !w) &&
                        this._tTime === w &&
                        (_ && !this._onUpdate && Pf(this, l, !0, !0),
                        (l || !g) &&
                            ((w === this._tDur && this._ts > 0) || (!w && this._ts < 0)) &&
                            ji(this, 1),
                        !u &&
                            !(_ && !d) &&
                            (w || d || F) &&
                            (Xn(this, w === h ? 'onComplete' : 'onReverseComplete', !0),
                            this._prom && !(w < h && this.timeScale() > 0) && this._prom()));
            }
            return this;
        }),
        (i.targets = function () {
            return this._targets;
        }),
        (i.invalidate = function (l) {
            return (
                (!l || !this.vars.runBackwards) && (this._startAt = 0),
                (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
                (this._ptLookup = []),
                this.timeline && this.timeline.invalidate(l),
                f.prototype.invalidate.call(this, l)
            );
        }),
        (i.resetTo = function (l, u, c, d, h) {
            ys || Yn.wake(), this._ts || this.play();
            var g = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
                _;
            return (
                this._initted || od(this, g),
                (_ = this._ease(g / this._dur)),
                Y_(this, l, u, c, d, _, g, h)
                    ? this.resetTo(l, u, c, d, 1)
                    : (ya(this, 0),
                      this.parent ||
                          J0(this._dp, this, '_first', '_last', this._dp._sort ? '_start' : 0),
                      this.render(0))
            );
        }),
        (i.kill = function (l, u) {
            if ((u === void 0 && (u = 'all'), !l && (!u || u === 'all')))
                return (this._lazy = this._pt = 0), this.parent ? Zl(this) : this;
            if (this.timeline) {
                var c = this.timeline.totalDuration();
                return (
                    this.timeline.killTweensOf(l, u, Pi && Pi.vars.overwrite !== !0)._first ||
                        Zl(this),
                    this.parent &&
                        c !== this.timeline.totalDuration() &&
                        cl(this, (this._dur * this.timeline._tDur) / c, 0, 1),
                    this
                );
            }
            var d = this._targets,
                h = l ? ur(l) : d,
                g = this._ptLookup,
                _ = this._pt,
                w,
                y,
                v,
                T,
                x,
                O,
                F;
            if ((!u || u === 'all') && w_(d, h)) return u === 'all' && (this._pt = 0), Zl(this);
            for (
                w = this._op = this._op || [],
                    u !== 'all' &&
                        (It(u) &&
                            ((x = {}),
                            Mn(u, function (A) {
                                return (x[A] = 1);
                            }),
                            (u = x)),
                        (u = H_(d, u))),
                    F = d.length;
                F--;

            )
                if (~h.indexOf(d[F])) {
                    (y = g[F]),
                        u === 'all'
                            ? ((w[F] = u), (T = y), (v = {}))
                            : ((v = w[F] = w[F] || {}), (T = u));
                    for (x in T)
                        (O = y && y[x]),
                            O &&
                                ((!('kill' in O.d) || O.d.kill(x) === !0) && _a(this, O, '_pt'),
                                delete y[x]),
                            v !== 'all' && (v[x] = 1);
                }
            return this._initted && !this._pt && _ && Zl(this), this;
        }),
        (n.to = function (l, u) {
            return new n(l, u, arguments[2]);
        }),
        (n.from = function (l, u) {
            return os(1, arguments);
        }),
        (n.delayedCall = function (l, u, c, d) {
            return new n(u, 0, {
                immediateRender: !1,
                lazy: !1,
                overwrite: !1,
                delay: l,
                onComplete: u,
                onReverseComplete: u,
                onCompleteParams: c,
                onReverseCompleteParams: c,
                callbackScope: d,
            });
        }),
        (n.fromTo = function (l, u, c) {
            return os(2, arguments);
        }),
        (n.set = function (l, u) {
            return (u.duration = 0), u.repeatDelay || (u.repeat = 0), new n(l, u);
        }),
        (n.killTweensOf = function (l, u, c) {
            return st.killTweensOf(l, u, c);
        }),
        n
    );
})(xs);
cr(kt.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 });
Mn('staggerTo,staggerFrom,staggerFromTo', function (f) {
    kt[f] = function () {
        var n = new pn(),
            i = Nf.call(arguments, 0);
        return i.splice(f === 'staggerFromTo' ? 5 : 4, 0, 0), n[f].apply(n, i);
    };
});
var ld = function (n, i, o) {
        return (n[i] = o);
    },
    Sm = function (n, i, o) {
        return n[i](o);
    },
    Q_ = function (n, i, o, l) {
        return n[i](l.fp, o);
    },
    G_ = function (n, i, o) {
        return n.setAttribute(i, o);
    },
    sd = function (n, i) {
        return dt(n[i]) ? Sm : Zf(n[i]) && n.setAttribute ? G_ : ld;
    },
    km = function (n, i) {
        return i.set(i.t, i.p, Math.round((i.s + i.c * n) * 1e6) / 1e6, i);
    },
    K_ = function (n, i) {
        return i.set(i.t, i.p, !!(i.s + i.c * n), i);
    },
    Cm = function (n, i) {
        var o = i._pt,
            l = '';
        if (!n && i.b) l = i.b;
        else if (n === 1 && i.e) l = i.e;
        else {
            for (; o; )
                (l =
                    o.p + (o.m ? o.m(o.s + o.c * n) : Math.round((o.s + o.c * n) * 1e4) / 1e4) + l),
                    (o = o._next);
            l += i.c;
        }
        i.set(i.t, i.p, l, i);
    },
    ud = function (n, i) {
        for (var o = i._pt; o; ) o.r(n, o.d), (o = o._next);
    },
    q_ = function (n, i, o, l) {
        for (var u = this._pt, c; u; ) (c = u._next), u.p === l && u.modifier(n, i, o), (u = c);
    },
    Z_ = function (n) {
        for (var i = this._pt, o, l; i; )
            (l = i._next),
                (i.p === n && !i.op) || i.op === n ? _a(this, i, '_pt') : i.dep || (o = 1),
                (i = l);
        return !o;
    },
    b_ = function (n, i, o, l) {
        l.mSet(n, i, l.m.call(l.tween, o, l.mt), l);
    },
    Tm = function (n) {
        for (var i = n._pt, o, l, u, c; i; ) {
            for (o = i._next, l = u; l && l.pr > i.pr; ) l = l._next;
            (i._prev = l ? l._prev : c) ? (i._prev._next = i) : (u = i),
                (i._next = l) ? (l._prev = i) : (c = i),
                (i = o);
        }
        n._pt = u;
    },
    Rn = (function () {
        function f(i, o, l, u, c, d, h, g, _) {
            (this.t = o),
                (this.s = u),
                (this.c = c),
                (this.p = l),
                (this.r = d || km),
                (this.d = h || this),
                (this.set = g || ld),
                (this.pr = _ || 0),
                (this._next = i),
                i && (i._prev = this);
        }
        var n = f.prototype;
        return (
            (n.modifier = function (o, l, u) {
                (this.mSet = this.mSet || this.set),
                    (this.set = b_),
                    (this.m = o),
                    (this.mt = u),
                    (this.tween = l);
            }),
            f
        );
    })();
Mn(
    nd +
        'parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger',
    function (f) {
        return (td[f] = 1);
    },
);
Gn.TweenMax = Gn.TweenLite = kt;
Gn.TimelineLite = Gn.TimelineMax = pn;
st = new pn({
    sortChildren: !1,
    defaults: ul,
    autoRemoveChildren: !0,
    id: 'root',
    smoothChildTiming: !0,
});
Qn.stringFilter = hm;
var po = [],
    qu = {},
    J_ = [],
    l0 = 0,
    ev = 0,
    df = function (n) {
        return (qu[n] || J_).map(function (i) {
            return i();
        });
    },
    Df = function () {
        var n = Date.now(),
            i = [];
        n - l0 > 2 &&
            (df('matchMediaInit'),
            po.forEach(function (o) {
                var l = o.queries,
                    u = o.conditions,
                    c,
                    d,
                    h,
                    g;
                for (d in l)
                    (c = Dr.matchMedia(l[d]).matches),
                        c && (h = 1),
                        c !== u[d] && ((u[d] = c), (g = 1));
                g && (o.revert(), h && i.push(o));
            }),
            df('matchMediaRevert'),
            i.forEach(function (o) {
                return o.onMatch(o, function (l) {
                    return o.add(null, l);
                });
            }),
            (l0 = n),
            df('matchMedia'));
    },
    Em = (function () {
        function f(i, o) {
            (this.selector = o && Mf(o)),
                (this.data = []),
                (this._r = []),
                (this.isReverted = !1),
                (this.id = ev++),
                i && this.add(i);
        }
        var n = f.prototype;
        return (
            (n.add = function (o, l, u) {
                dt(o) && ((u = l), (l = o), (o = dt));
                var c = this,
                    d = function () {
                        var g = nt,
                            _ = c.selector,
                            w;
                        return (
                            g && g !== c && g.data.push(c),
                            u && (c.selector = Mf(u)),
                            (nt = c),
                            (w = l.apply(c, arguments)),
                            dt(w) && c._r.push(w),
                            (nt = g),
                            (c.selector = _),
                            (c.isReverted = !1),
                            w
                        );
                    };
                return (
                    (c.last = d),
                    o === dt
                        ? d(c, function (h) {
                              return c.add(null, h);
                          })
                        : o
                        ? (c[o] = d)
                        : d
                );
            }),
            (n.ignore = function (o) {
                var l = nt;
                (nt = null), o(this), (nt = l);
            }),
            (n.getTweens = function () {
                var o = [];
                return (
                    this.data.forEach(function (l) {
                        return l instanceof f
                            ? o.push.apply(o, l.getTweens())
                            : l instanceof kt &&
                                  !(l.parent && l.parent.data === 'nested') &&
                                  o.push(l);
                    }),
                    o
                );
            }),
            (n.clear = function () {
                this._r.length = this.data.length = 0;
            }),
            (n.kill = function (o, l) {
                var u = this;
                if (
                    (o
                        ? (function () {
                              for (var d = u.getTweens(), h = u.data.length, g; h--; )
                                  (g = u.data[h]),
                                      g.data === 'isFlip' &&
                                          (g.revert(),
                                          g.getChildren(!0, !0, !1).forEach(function (_) {
                                              return d.splice(d.indexOf(_), 1);
                                          }));
                              for (
                                  d
                                      .map(function (_) {
                                          return {
                                              g:
                                                  _._dur ||
                                                  _._delay ||
                                                  (_._sat && !_._sat.vars.immediateRender)
                                                      ? _.globalTime(0)
                                                      : -1 / 0,
                                              t: _,
                                          };
                                      })
                                      .sort(function (_, w) {
                                          return w.g - _.g || -1 / 0;
                                      })
                                      .forEach(function (_) {
                                          return _.t.revert(o);
                                      }),
                                      h = u.data.length;
                                  h--;

                              )
                                  (g = u.data[h]),
                                      g instanceof pn
                                          ? g.data !== 'nested' &&
                                            (g.scrollTrigger && g.scrollTrigger.revert(), g.kill())
                                          : !(g instanceof kt) && g.revert && g.revert(o);
                              u._r.forEach(function (_) {
                                  return _(o, u);
                              }),
                                  (u.isReverted = !0);
                          })()
                        : this.data.forEach(function (d) {
                              return d.kill && d.kill();
                          }),
                    this.clear(),
                    l)
                )
                    for (var c = po.length; c--; ) po[c].id === this.id && po.splice(c, 1);
            }),
            (n.revert = function (o) {
                this.kill(o || {});
            }),
            f
        );
    })(),
    tv = (function () {
        function f(i) {
            (this.contexts = []), (this.scope = i), nt && nt.data.push(this);
        }
        var n = f.prototype;
        return (
            (n.add = function (o, l, u) {
                Ur(o) || (o = { matches: o });
                var c = new Em(0, u || this.scope),
                    d = (c.conditions = {}),
                    h,
                    g,
                    _;
                nt && !c.selector && (c.selector = nt.selector),
                    this.contexts.push(c),
                    (l = c.add('onMatch', l)),
                    (c.queries = o);
                for (g in o)
                    g === 'all'
                        ? (_ = 1)
                        : ((h = Dr.matchMedia(o[g])),
                          h &&
                              (po.indexOf(c) < 0 && po.push(c),
                              (d[g] = h.matches) && (_ = 1),
                              h.addListener
                                  ? h.addListener(Df)
                                  : h.addEventListener('change', Df)));
                return (
                    _ &&
                        l(c, function (w) {
                            return c.add(null, w);
                        }),
                    this
                );
            }),
            (n.revert = function (o) {
                this.kill(o || {});
            }),
            (n.kill = function (o) {
                this.contexts.forEach(function (l) {
                    return l.kill(o, !0);
                });
            }),
            f
        );
    })(),
    aa = {
        registerPlugin: function () {
            for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++) i[o] = arguments[o];
            i.forEach(function (l) {
                return fm(l);
            });
        },
        timeline: function (n) {
            return new pn(n);
        },
        getTweensOf: function (n, i) {
            return st.getTweensOf(n, i);
        },
        getProperty: function (n, i, o, l) {
            It(n) && (n = ur(n)[0]);
            var u = ao(n || {}).get,
                c = o ? b0 : Z0;
            return (
                o === 'native' && (o = ''),
                n &&
                    (i
                        ? c(((Wn[i] && Wn[i].get) || u)(n, i, o, l))
                        : function (d, h, g) {
                              return c(((Wn[d] && Wn[d].get) || u)(n, d, h, g));
                          })
            );
        },
        quickSetter: function (n, i, o) {
            if (((n = ur(n)), n.length > 1)) {
                var l = n.map(function (_) {
                        return Dn.quickSetter(_, i, o);
                    }),
                    u = l.length;
                return function (_) {
                    for (var w = u; w--; ) l[w](_);
                };
            }
            n = n[0] || {};
            var c = Wn[i],
                d = ao(n),
                h = (d.harness && (d.harness.aliases || {})[i]) || i,
                g = c
                    ? function (_) {
                          var w = new c();
                          (el._pt = 0),
                              w.init(n, o ? _ + o : _, el, 0, [n]),
                              w.render(1, w),
                              el._pt && ud(1, el);
                      }
                    : d.set(n, h);
            return c
                ? g
                : function (_) {
                      return g(n, h, o ? _ + o : _, d, 1);
                  };
        },
        quickTo: function (n, i, o) {
            var l,
                u = Dn.to(n, _o(((l = {}), (l[i] = '+=0.1'), (l.paused = !0), l), o || {})),
                c = function (h, g, _) {
                    return u.resetTo(i, h, g, _);
                };
            return (c.tween = u), c;
        },
        isTweening: function (n) {
            return st.getTweensOf(n, !0).length > 0;
        },
        defaults: function (n) {
            return n && n.ease && (n.ease = fo(n.ease, ul.ease)), t0(ul, n || {});
        },
        config: function (n) {
            return t0(Qn, n || {});
        },
        registerEffect: function (n) {
            var i = n.name,
                o = n.effect,
                l = n.plugins,
                u = n.defaults,
                c = n.extendTimeline;
            (l || '').split(',').forEach(function (d) {
                return d && !Wn[d] && !Gn[d] && gs(i + ' effect requires ' + d + ' plugin.');
            }),
                (uf[i] = function (d, h, g) {
                    return o(ur(d), cr(h || {}, u), g);
                }),
                c &&
                    (pn.prototype[i] = function (d, h, g) {
                        return this.add(uf[i](d, Ur(h) ? h : (g = h) && {}, this), g);
                    });
        },
        registerEase: function (n, i) {
            Fe[n] = fo(i);
        },
        parseEase: function (n, i) {
            return arguments.length ? fo(n, i) : Fe;
        },
        getById: function (n) {
            return st.getById(n);
        },
        exportRoot: function (n, i) {
            n === void 0 && (n = {});
            var o = new pn(n),
                l,
                u;
            for (
                o.smoothChildTiming = Nn(n.smoothChildTiming),
                    st.remove(o),
                    o._dp = 0,
                    o._time = o._tTime = st._time,
                    l = st._first;
                l;

            )
                (u = l._next),
                    (i || !(!l._dur && l instanceof kt && l.vars.onComplete === l._targets[0])) &&
                        jr(o, l, l._start - l._delay),
                    (l = u);
            return jr(st, o, 0), o;
        },
        context: function (n, i) {
            return n ? new Em(n, i) : nt;
        },
        matchMedia: function (n) {
            return new tv(n);
        },
        matchMediaRefresh: function () {
            return (
                po.forEach(function (n) {
                    var i = n.conditions,
                        o,
                        l;
                    for (l in i) i[l] && ((i[l] = !1), (o = 1));
                    o && n.revert();
                }) || Df()
            );
        },
        addEventListener: function (n, i) {
            var o = qu[n] || (qu[n] = []);
            ~o.indexOf(i) || o.push(i);
        },
        removeEventListener: function (n, i) {
            var o = qu[n],
                l = o && o.indexOf(i);
            l >= 0 && o.splice(l, 1);
        },
        utils: {
            wrap: D_,
            wrapYoyo: L_,
            distribute: om,
            random: sm,
            snap: lm,
            normalize: z_,
            getUnit: bt,
            clamp: O_,
            splitColor: dm,
            toArray: ur,
            selector: Mf,
            mapRange: am,
            pipe: M_,
            unitize: R_,
            interpolate: j_,
            shuffle: im,
        },
        install: X0,
        effects: uf,
        ticker: Yn,
        updateRoot: pn.updateRoot,
        plugins: Wn,
        globalTimeline: st,
        core: {
            PropTween: Rn,
            globals: Q0,
            Tween: kt,
            Timeline: pn,
            Animation: xs,
            getCache: ao,
            _removeLinkedListItem: _a,
            reverting: function () {
                return Jt;
            },
            context: function (n) {
                return n && nt && (nt.data.push(n), (n._ctx = nt)), nt;
            },
            suppressOverwrites: function (n) {
                return (qf = n);
            },
        },
    };
Mn('to,from,fromTo,delayedCall,set,killTweensOf', function (f) {
    return (aa[f] = kt[f]);
});
Yn.add(pn.updateRoot);
el = aa.to({}, { duration: 0 });
var nv = function (n, i) {
        for (var o = n._pt; o && o.p !== i && o.op !== i && o.fp !== i; ) o = o._next;
        return o;
    },
    rv = function (n, i) {
        var o = n._targets,
            l,
            u,
            c;
        for (l in i)
            for (u = o.length; u--; )
                (c = n._ptLookup[u][l]),
                    c &&
                        (c = c.d) &&
                        (c._pt && (c = nv(c, l)), c && c.modifier && c.modifier(i[l], n, o[u], l));
    },
    pf = function (n, i) {
        return {
            name: n,
            rawVars: 1,
            init: function (l, u, c) {
                c._onInit = function (d) {
                    var h, g;
                    if (
                        (It(u) &&
                            ((h = {}),
                            Mn(u, function (_) {
                                return (h[_] = 1);
                            }),
                            (u = h)),
                        i)
                    ) {
                        h = {};
                        for (g in u) h[g] = i(u[g]);
                        u = h;
                    }
                    rv(d, u);
                };
            },
        };
    },
    Dn =
        aa.registerPlugin(
            {
                name: 'attr',
                init: function (n, i, o, l, u) {
                    var c, d, h;
                    this.tween = o;
                    for (c in i)
                        (h = n.getAttribute(c) || ''),
                            (d = this.add(n, 'setAttribute', (h || 0) + '', i[c], l, u, 0, 0, c)),
                            (d.op = c),
                            (d.b = h),
                            this._props.push(c);
                },
                render: function (n, i) {
                    for (var o = i._pt; o; )
                        Jt ? o.set(o.t, o.p, o.b, o) : o.r(n, o.d), (o = o._next);
                },
            },
            {
                name: 'endArray',
                init: function (n, i) {
                    for (var o = i.length; o--; ) this.add(n, o, n[o] || 0, i[o], 0, 0, 0, 0, 0, 1);
                },
            },
            pf('roundProps', Rf),
            pf('modifiers'),
            pf('snap', lm),
        ) || aa;
kt.version = pn.version = Dn.version = '3.12.5';
H0 = 1;
bf() && fl();
Fe.Power0;
Fe.Power1;
Fe.Power2;
Fe.Power3;
Fe.Power4;
Fe.Linear;
Fe.Quad;
Fe.Cubic;
Fe.Quart;
Fe.Quint;
Fe.Strong;
Fe.Elastic;
Fe.Back;
Fe.SteppedEase;
Fe.Bounce;
Fe.Sine;
Fe.Expo;
Fe.Circ;
/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var s0,
    Oi,
    rl,
    ad,
    lo,
    u0,
    cd,
    iv = function () {
        return typeof window < 'u';
    },
    ii = {},
    ro = 180 / Math.PI,
    il = Math.PI / 180,
    Qo = Math.atan2,
    a0 = 1e8,
    fd = /([A-Z])/g,
    ov = /(left|right|width|margin|padding|x)/i,
    lv = /[\s,\(]\S/,
    Ar = { autoAlpha: 'opacity,visibility', scale: 'scaleX,scaleY', alpha: 'opacity' },
    Lf = function (n, i) {
        return i.set(i.t, i.p, Math.round((i.s + i.c * n) * 1e4) / 1e4 + i.u, i);
    },
    sv = function (n, i) {
        return i.set(i.t, i.p, n === 1 ? i.e : Math.round((i.s + i.c * n) * 1e4) / 1e4 + i.u, i);
    },
    uv = function (n, i) {
        return i.set(i.t, i.p, n ? Math.round((i.s + i.c * n) * 1e4) / 1e4 + i.u : i.b, i);
    },
    av = function (n, i) {
        var o = i.s + i.c * n;
        i.set(i.t, i.p, ~~(o + (o < 0 ? -0.5 : 0.5)) + i.u, i);
    },
    Pm = function (n, i) {
        return i.set(i.t, i.p, n ? i.e : i.b, i);
    },
    Om = function (n, i) {
        return i.set(i.t, i.p, n !== 1 ? i.b : i.e, i);
    },
    cv = function (n, i, o) {
        return (n.style[i] = o);
    },
    fv = function (n, i, o) {
        return n.style.setProperty(i, o);
    },
    dv = function (n, i, o) {
        return (n._gsap[i] = o);
    },
    pv = function (n, i, o) {
        return (n._gsap.scaleX = n._gsap.scaleY = o);
    },
    hv = function (n, i, o, l, u) {
        var c = n._gsap;
        (c.scaleX = c.scaleY = o), c.renderTransform(u, c);
    },
    mv = function (n, i, o, l, u) {
        var c = n._gsap;
        (c[i] = o), c.renderTransform(u, c);
    },
    ut = 'transform',
    zn = ut + 'Origin',
    gv = function f(n, i) {
        var o = this,
            l = this.target,
            u = l.style,
            c = l._gsap;
        if (n in ii && u) {
            if (((this.tfm = this.tfm || {}), n !== 'transform'))
                (n = Ar[n] || n),
                    ~n.indexOf(',')
                        ? n.split(',').forEach(function (d) {
                              return (o.tfm[d] = Jr(l, d));
                          })
                        : (this.tfm[n] = c.x ? c[n] : Jr(l, n)),
                    n === zn && (this.tfm.zOrigin = c.zOrigin);
            else
                return Ar.transform.split(',').forEach(function (d) {
                    return f.call(o, d, i);
                });
            if (this.props.indexOf(ut) >= 0) return;
            c.svg && ((this.svgo = l.getAttribute('data-svg-origin')), this.props.push(zn, i, '')),
                (n = ut);
        }
        (u || i) && this.props.push(n, i, u[n]);
    },
    Nm = function (n) {
        n.translate &&
            (n.removeProperty('translate'), n.removeProperty('scale'), n.removeProperty('rotate'));
    },
    _v = function () {
        var n = this.props,
            i = this.target,
            o = i.style,
            l = i._gsap,
            u,
            c;
        for (u = 0; u < n.length; u += 3)
            n[u + 1]
                ? (i[n[u]] = n[u + 2])
                : n[u + 2]
                ? (o[n[u]] = n[u + 2])
                : o.removeProperty(
                      n[u].substr(0, 2) === '--' ? n[u] : n[u].replace(fd, '-$1').toLowerCase(),
                  );
        if (this.tfm) {
            for (c in this.tfm) l[c] = this.tfm[c];
            l.svg && (l.renderTransform(), i.setAttribute('data-svg-origin', this.svgo || '')),
                (u = cd()),
                (!u || !u.isStart) &&
                    !o[ut] &&
                    (Nm(o),
                    l.zOrigin &&
                        o[zn] &&
                        ((o[zn] += ' ' + l.zOrigin + 'px'), (l.zOrigin = 0), l.renderTransform()),
                    (l.uncache = 1));
        }
    },
    Mm = function (n, i) {
        var o = { target: n, props: [], revert: _v, save: gv };
        return (
            n._gsap || Dn.core.getCache(n),
            i &&
                i.split(',').forEach(function (l) {
                    return o.save(l);
                }),
            o
        );
    },
    Rm,
    jf = function (n, i) {
        var o = Oi.createElementNS
            ? Oi.createElementNS((i || 'http://www.w3.org/1999/xhtml').replace(/^https/, 'http'), n)
            : Oi.createElement(n);
        return o && o.style ? o : Oi.createElement(n);
    },
    Ir = function f(n, i, o) {
        var l = getComputedStyle(n);
        return (
            l[i] ||
            l.getPropertyValue(i.replace(fd, '-$1').toLowerCase()) ||
            l.getPropertyValue(i) ||
            (!o && f(n, dl(i) || i, 1)) ||
            ''
        );
    },
    c0 = 'O,Moz,ms,Ms,Webkit'.split(','),
    dl = function (n, i, o) {
        var l = i || lo,
            u = l.style,
            c = 5;
        if (n in u && !o) return n;
        for (n = n.charAt(0).toUpperCase() + n.substr(1); c-- && !(c0[c] + n in u); );
        return c < 0 ? null : (c === 3 ? 'ms' : c >= 0 ? c0[c] : '') + n;
    },
    Af = function () {
        iv() &&
            window.document &&
            ((s0 = window),
            (Oi = s0.document),
            (rl = Oi.documentElement),
            (lo = jf('div') || { style: {} }),
            jf('div'),
            (ut = dl(ut)),
            (zn = ut + 'Origin'),
            (lo.style.cssText = 'border-width:0;line-height:0;position:absolute;padding:0'),
            (Rm = !!dl('perspective')),
            (cd = Dn.core.reverting),
            (ad = 1));
    },
    hf = function f(n) {
        var i = jf(
                'svg',
                (this.ownerSVGElement && this.ownerSVGElement.getAttribute('xmlns')) ||
                    'http://www.w3.org/2000/svg',
            ),
            o = this.parentNode,
            l = this.nextSibling,
            u = this.style.cssText,
            c;
        if ((rl.appendChild(i), i.appendChild(this), (this.style.display = 'block'), n))
            try {
                (c = this.getBBox()), (this._gsapBBox = this.getBBox), (this.getBBox = f);
            } catch {}
        else this._gsapBBox && (c = this._gsapBBox());
        return (
            o && (l ? o.insertBefore(this, l) : o.appendChild(this)),
            rl.removeChild(i),
            (this.style.cssText = u),
            c
        );
    },
    f0 = function (n, i) {
        for (var o = i.length; o--; ) if (n.hasAttribute(i[o])) return n.getAttribute(i[o]);
    },
    zm = function (n) {
        var i;
        try {
            i = n.getBBox();
        } catch {
            i = hf.call(n, !0);
        }
        return (
            (i && (i.width || i.height)) || n.getBBox === hf || (i = hf.call(n, !0)),
            i && !i.width && !i.x && !i.y
                ? {
                      x: +f0(n, ['x', 'cx', 'x1']) || 0,
                      y: +f0(n, ['y', 'cy', 'y1']) || 0,
                      width: 0,
                      height: 0,
                  }
                : i
        );
    },
    Dm = function (n) {
        return !!(n.getCTM && (!n.parentNode || n.ownerSVGElement) && zm(n));
    },
    vo = function (n, i) {
        if (i) {
            var o = n.style,
                l;
            i in ii && i !== zn && (i = ut),
                o.removeProperty
                    ? ((l = i.substr(0, 2)),
                      (l === 'ms' || i.substr(0, 6) === 'webkit') && (i = '-' + i),
                      o.removeProperty(l === '--' ? i : i.replace(fd, '-$1').toLowerCase()))
                    : o.removeAttribute(i);
        }
    },
    Ni = function (n, i, o, l, u, c) {
        var d = new Rn(n._pt, i, o, 0, 1, c ? Om : Pm);
        return (n._pt = d), (d.b = l), (d.e = u), n._props.push(o), d;
    },
    d0 = { deg: 1, rad: 1, turn: 1 },
    vv = { grid: 1, flex: 1 },
    Ai = function f(n, i, o, l) {
        var u = parseFloat(o) || 0,
            c = (o + '').trim().substr((u + '').length) || 'px',
            d = lo.style,
            h = ov.test(i),
            g = n.tagName.toLowerCase() === 'svg',
            _ = (g ? 'client' : 'offset') + (h ? 'Width' : 'Height'),
            w = 100,
            y = l === 'px',
            v = l === '%',
            T,
            x,
            O,
            F;
        if (l === c || !u || d0[l] || d0[c]) return u;
        if (
            (c !== 'px' && !y && (u = f(n, i, o, 'px')),
            (F = n.getCTM && Dm(n)),
            (v || c === '%') && (ii[i] || ~i.indexOf('adius')))
        )
            return (
                (T = F ? n.getBBox()[h ? 'width' : 'height'] : n[_]),
                gt(v ? (u / T) * w : (u / 100) * T)
            );
        if (
            ((d[h ? 'width' : 'height'] = w + (y ? c : l)),
            (x = ~i.indexOf('adius') || (l === 'em' && n.appendChild && !g) ? n : n.parentNode),
            F && (x = (n.ownerSVGElement || {}).parentNode),
            (!x || x === Oi || !x.appendChild) && (x = Oi.body),
            (O = x._gsap),
            O && v && O.width && h && O.time === Yn.time && !O.uncache)
        )
            return gt((u / O.width) * w);
        if (v && (i === 'height' || i === 'width')) {
            var A = n.style[i];
            (n.style[i] = w + l), (T = n[_]), A ? (n.style[i] = A) : vo(n, i);
        } else
            (v || c === '%') && !vv[Ir(x, 'display')] && (d.position = Ir(n, 'position')),
                x === n && (d.position = 'static'),
                x.appendChild(lo),
                (T = lo[_]),
                x.removeChild(lo),
                (d.position = 'absolute');
        return (
            h && v && ((O = ao(x)), (O.time = Yn.time), (O.width = x[_])),
            gt(y ? (T * u) / w : T && u ? (w / T) * u : 0)
        );
    },
    Jr = function (n, i, o, l) {
        var u;
        return (
            ad || Af(),
            i in Ar && i !== 'transform' && ((i = Ar[i]), ~i.indexOf(',') && (i = i.split(',')[0])),
            ii[i] && i !== 'transform'
                ? ((u = Ss(n, l)),
                  (u =
                      i !== 'transformOrigin'
                          ? u[i]
                          : u.svg
                          ? u.origin
                          : fa(Ir(n, zn)) + ' ' + u.zOrigin + 'px'))
                : ((u = n.style[i]),
                  (!u || u === 'auto' || l || ~(u + '').indexOf('calc(')) &&
                      (u =
                          (ca[i] && ca[i](n, i, o)) ||
                          Ir(n, i) ||
                          K0(n, i) ||
                          (i === 'opacity' ? 1 : 0))),
            o && !~(u + '').trim().indexOf(' ') ? Ai(n, i, u, o) + o : u
        );
    },
    yv = function (n, i, o, l) {
        if (!o || o === 'none') {
            var u = dl(i, n, 1),
                c = u && Ir(n, u, 1);
            c && c !== o
                ? ((i = u), (o = c))
                : i === 'borderColor' && (o = Ir(n, 'borderTopColor'));
        }
        var d = new Rn(this._pt, n.style, i, 0, 1, Cm),
            h = 0,
            g = 0,
            _,
            w,
            y,
            v,
            T,
            x,
            O,
            F,
            A,
            U,
            D,
            I;
        if (
            ((d.b = o),
            (d.e = l),
            (o += ''),
            (l += ''),
            l === 'auto' &&
                ((x = n.style[i]),
                (n.style[i] = l),
                (l = Ir(n, i) || l),
                x ? (n.style[i] = x) : vo(n, i)),
            (_ = [o, l]),
            hm(_),
            (o = _[0]),
            (l = _[1]),
            (y = o.match(Jo) || []),
            (I = l.match(Jo) || []),
            I.length)
        ) {
            for (; (w = Jo.exec(l)); )
                (O = w[0]),
                    (A = l.substring(h, w.index)),
                    T
                        ? (T = (T + 1) % 5)
                        : (A.substr(-5) === 'rgba(' || A.substr(-5) === 'hsla(') && (T = 1),
                    O !== (x = y[g++] || '') &&
                        ((v = parseFloat(x) || 0),
                        (D = x.substr((v + '').length)),
                        O.charAt(1) === '=' && (O = nl(v, O) + D),
                        (F = parseFloat(O)),
                        (U = O.substr((F + '').length)),
                        (h = Jo.lastIndex - U.length),
                        U ||
                            ((U = U || Qn.units[i] || D), h === l.length && ((l += U), (d.e += U))),
                        D !== U && (v = Ai(n, i, x, U) || 0),
                        (d._pt = {
                            _next: d._pt,
                            p: A || g === 1 ? A : ',',
                            s: v,
                            c: F - v,
                            m: (T && T < 4) || i === 'zIndex' ? Math.round : 0,
                        }));
            d.c = h < l.length ? l.substring(h, l.length) : '';
        } else d.r = i === 'display' && l === 'none' ? Om : Pm;
        return W0.test(l) && (d.e = 0), (this._pt = d), d;
    },
    p0 = { top: '0%', bottom: '100%', left: '0%', right: '100%', center: '50%' },
    xv = function (n) {
        var i = n.split(' '),
            o = i[0],
            l = i[1] || '50%';
        return (
            (o === 'top' || o === 'bottom' || l === 'left' || l === 'right') &&
                ((n = o), (o = l), (l = n)),
            (i[0] = p0[o] || o),
            (i[1] = p0[l] || l),
            i.join(' ')
        );
    },
    wv = function (n, i) {
        if (i.tween && i.tween._time === i.tween._dur) {
            var o = i.t,
                l = o.style,
                u = i.u,
                c = o._gsap,
                d,
                h,
                g;
            if (u === 'all' || u === !0) (l.cssText = ''), (h = 1);
            else
                for (u = u.split(','), g = u.length; --g > -1; )
                    (d = u[g]),
                        ii[d] && ((h = 1), (d = d === 'transformOrigin' ? zn : ut)),
                        vo(o, d);
            h &&
                (vo(o, ut),
                c && (c.svg && o.removeAttribute('transform'), Ss(o, 1), (c.uncache = 1), Nm(l)));
        }
    },
    ca = {
        clearProps: function (n, i, o, l, u) {
            if (u.data !== 'isFromStart') {
                var c = (n._pt = new Rn(n._pt, i, o, 0, 0, wv));
                return (c.u = l), (c.pr = -10), (c.tween = u), n._props.push(o), 1;
            }
        },
    },
    ws = [1, 0, 0, 1, 0, 0],
    Lm = {},
    jm = function (n) {
        return n === 'matrix(1, 0, 0, 1, 0, 0)' || n === 'none' || !n;
    },
    h0 = function (n) {
        var i = Ir(n, ut);
        return jm(i) ? ws : i.substr(7).match($0).map(gt);
    },
    dd = function (n, i) {
        var o = n._gsap || ao(n),
            l = n.style,
            u = h0(n),
            c,
            d,
            h,
            g;
        return o.svg && n.getAttribute('transform')
            ? ((h = n.transform.baseVal.consolidate().matrix),
              (u = [h.a, h.b, h.c, h.d, h.e, h.f]),
              u.join(',') === '1,0,0,1,0,0' ? ws : u)
            : (u === ws &&
                  !n.offsetParent &&
                  n !== rl &&
                  !o.svg &&
                  ((h = l.display),
                  (l.display = 'block'),
                  (c = n.parentNode),
                  (!c || !n.offsetParent) &&
                      ((g = 1), (d = n.nextElementSibling), rl.appendChild(n)),
                  (u = h0(n)),
                  h ? (l.display = h) : vo(n, 'display'),
                  g && (d ? c.insertBefore(n, d) : c ? c.appendChild(n) : rl.removeChild(n))),
              i && u.length > 6 ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u);
    },
    Ff = function (n, i, o, l, u, c) {
        var d = n._gsap,
            h = u || dd(n, !0),
            g = d.xOrigin || 0,
            _ = d.yOrigin || 0,
            w = d.xOffset || 0,
            y = d.yOffset || 0,
            v = h[0],
            T = h[1],
            x = h[2],
            O = h[3],
            F = h[4],
            A = h[5],
            U = i.split(' '),
            D = parseFloat(U[0]) || 0,
            I = parseFloat(U[1]) || 0,
            V,
            L,
            X,
            $;
        o
            ? h !== ws &&
              (L = v * O - T * x) &&
              ((X = D * (O / L) + I * (-x / L) + (x * A - O * F) / L),
              ($ = D * (-T / L) + I * (v / L) - (v * A - T * F) / L),
              (D = X),
              (I = $))
            : ((V = zm(n)),
              (D = V.x + (~U[0].indexOf('%') ? (D / 100) * V.width : D)),
              (I = V.y + (~(U[1] || U[0]).indexOf('%') ? (I / 100) * V.height : I))),
            l || (l !== !1 && d.smooth)
                ? ((F = D - g),
                  (A = I - _),
                  (d.xOffset = w + (F * v + A * x) - F),
                  (d.yOffset = y + (F * T + A * O) - A))
                : (d.xOffset = d.yOffset = 0),
            (d.xOrigin = D),
            (d.yOrigin = I),
            (d.smooth = !!l),
            (d.origin = i),
            (d.originIsAbsolute = !!o),
            (n.style[zn] = '0px 0px'),
            c &&
                (Ni(c, d, 'xOrigin', g, D),
                Ni(c, d, 'yOrigin', _, I),
                Ni(c, d, 'xOffset', w, d.xOffset),
                Ni(c, d, 'yOffset', y, d.yOffset)),
            n.setAttribute('data-svg-origin', D + ' ' + I);
    },
    Ss = function (n, i) {
        var o = n._gsap || new vm(n);
        if ('x' in o && !i && !o.uncache) return o;
        var l = n.style,
            u = o.scaleX < 0,
            c = 'px',
            d = 'deg',
            h = getComputedStyle(n),
            g = Ir(n, zn) || '0',
            _,
            w,
            y,
            v,
            T,
            x,
            O,
            F,
            A,
            U,
            D,
            I,
            V,
            L,
            X,
            $,
            Q,
            pe,
            q,
            he,
            ge,
            ke,
            fe,
            ee,
            W,
            b,
            k,
            E,
            B,
            de,
            oe,
            me;
        return (
            (_ = w = y = x = O = F = A = U = D = 0),
            (v = T = 1),
            (o.svg = !!(n.getCTM && Dm(n))),
            h.translate &&
                ((h.translate !== 'none' || h.scale !== 'none' || h.rotate !== 'none') &&
                    (l[ut] =
                        (h.translate !== 'none'
                            ? 'translate3d(' +
                              (h.translate + ' 0 0').split(' ').slice(0, 3).join(', ') +
                              ') '
                            : '') +
                        (h.rotate !== 'none' ? 'rotate(' + h.rotate + ') ' : '') +
                        (h.scale !== 'none' ? 'scale(' + h.scale.split(' ').join(',') + ') ' : '') +
                        (h[ut] !== 'none' ? h[ut] : '')),
                (l.scale = l.rotate = l.translate = 'none')),
            (L = dd(n, o.svg)),
            o.svg &&
                (o.uncache
                    ? ((W = n.getBBox()),
                      (g = o.xOrigin - W.x + 'px ' + (o.yOrigin - W.y) + 'px'),
                      (ee = ''))
                    : (ee = !i && n.getAttribute('data-svg-origin')),
                Ff(n, ee || g, !!ee || o.originIsAbsolute, o.smooth !== !1, L)),
            (I = o.xOrigin || 0),
            (V = o.yOrigin || 0),
            L !== ws &&
                ((pe = L[0]),
                (q = L[1]),
                (he = L[2]),
                (ge = L[3]),
                (_ = ke = L[4]),
                (w = fe = L[5]),
                L.length === 6
                    ? ((v = Math.sqrt(pe * pe + q * q)),
                      (T = Math.sqrt(ge * ge + he * he)),
                      (x = pe || q ? Qo(q, pe) * ro : 0),
                      (A = he || ge ? Qo(he, ge) * ro + x : 0),
                      A && (T *= Math.abs(Math.cos(A * il))),
                      o.svg && ((_ -= I - (I * pe + V * he)), (w -= V - (I * q + V * ge))))
                    : ((me = L[6]),
                      (de = L[7]),
                      (k = L[8]),
                      (E = L[9]),
                      (B = L[10]),
                      (oe = L[11]),
                      (_ = L[12]),
                      (w = L[13]),
                      (y = L[14]),
                      (X = Qo(me, B)),
                      (O = X * ro),
                      X &&
                          (($ = Math.cos(-X)),
                          (Q = Math.sin(-X)),
                          (ee = ke * $ + k * Q),
                          (W = fe * $ + E * Q),
                          (b = me * $ + B * Q),
                          (k = ke * -Q + k * $),
                          (E = fe * -Q + E * $),
                          (B = me * -Q + B * $),
                          (oe = de * -Q + oe * $),
                          (ke = ee),
                          (fe = W),
                          (me = b)),
                      (X = Qo(-he, B)),
                      (F = X * ro),
                      X &&
                          (($ = Math.cos(-X)),
                          (Q = Math.sin(-X)),
                          (ee = pe * $ - k * Q),
                          (W = q * $ - E * Q),
                          (b = he * $ - B * Q),
                          (oe = ge * Q + oe * $),
                          (pe = ee),
                          (q = W),
                          (he = b)),
                      (X = Qo(q, pe)),
                      (x = X * ro),
                      X &&
                          (($ = Math.cos(X)),
                          (Q = Math.sin(X)),
                          (ee = pe * $ + q * Q),
                          (W = ke * $ + fe * Q),
                          (q = q * $ - pe * Q),
                          (fe = fe * $ - ke * Q),
                          (pe = ee),
                          (ke = W)),
                      O && Math.abs(O) + Math.abs(x) > 359.9 && ((O = x = 0), (F = 180 - F)),
                      (v = gt(Math.sqrt(pe * pe + q * q + he * he))),
                      (T = gt(Math.sqrt(fe * fe + me * me))),
                      (X = Qo(ke, fe)),
                      (A = Math.abs(X) > 2e-4 ? X * ro : 0),
                      (D = oe ? 1 / (oe < 0 ? -oe : oe) : 0)),
                o.svg &&
                    ((ee = n.getAttribute('transform')),
                    (o.forceCSS = n.setAttribute('transform', '') || !jm(Ir(n, ut))),
                    ee && n.setAttribute('transform', ee))),
            Math.abs(A) > 90 &&
                Math.abs(A) < 270 &&
                (u
                    ? ((v *= -1), (A += x <= 0 ? 180 : -180), (x += x <= 0 ? 180 : -180))
                    : ((T *= -1), (A += A <= 0 ? 180 : -180))),
            (i = i || o.uncache),
            (o.x =
                _ -
                ((o.xPercent =
                    _ &&
                    ((!i && o.xPercent) ||
                        (Math.round(n.offsetWidth / 2) === Math.round(-_) ? -50 : 0)))
                    ? (n.offsetWidth * o.xPercent) / 100
                    : 0) +
                c),
            (o.y =
                w -
                ((o.yPercent =
                    w &&
                    ((!i && o.yPercent) ||
                        (Math.round(n.offsetHeight / 2) === Math.round(-w) ? -50 : 0)))
                    ? (n.offsetHeight * o.yPercent) / 100
                    : 0) +
                c),
            (o.z = y + c),
            (o.scaleX = gt(v)),
            (o.scaleY = gt(T)),
            (o.rotation = gt(x) + d),
            (o.rotationX = gt(O) + d),
            (o.rotationY = gt(F) + d),
            (o.skewX = A + d),
            (o.skewY = U + d),
            (o.transformPerspective = D + c),
            (o.zOrigin = parseFloat(g.split(' ')[2]) || (!i && o.zOrigin) || 0) && (l[zn] = fa(g)),
            (o.xOffset = o.yOffset = 0),
            (o.force3D = Qn.force3D),
            (o.renderTransform = o.svg ? kv : Rm ? Am : Sv),
            (o.uncache = 0),
            o
        );
    },
    fa = function (n) {
        return (n = n.split(' '))[0] + ' ' + n[1];
    },
    mf = function (n, i, o) {
        var l = bt(i);
        return gt(parseFloat(i) + parseFloat(Ai(n, 'x', o + 'px', l))) + l;
    },
    Sv = function (n, i) {
        (i.z = '0px'), (i.rotationY = i.rotationX = '0deg'), (i.force3D = 0), Am(n, i);
    },
    to = '0deg',
    Gl = '0px',
    no = ') ',
    Am = function (n, i) {
        var o = i || this,
            l = o.xPercent,
            u = o.yPercent,
            c = o.x,
            d = o.y,
            h = o.z,
            g = o.rotation,
            _ = o.rotationY,
            w = o.rotationX,
            y = o.skewX,
            v = o.skewY,
            T = o.scaleX,
            x = o.scaleY,
            O = o.transformPerspective,
            F = o.force3D,
            A = o.target,
            U = o.zOrigin,
            D = '',
            I = (F === 'auto' && n && n !== 1) || F === !0;
        if (U && (w !== to || _ !== to)) {
            var V = parseFloat(_) * il,
                L = Math.sin(V),
                X = Math.cos(V),
                $;
            (V = parseFloat(w) * il),
                ($ = Math.cos(V)),
                (c = mf(A, c, L * $ * -U)),
                (d = mf(A, d, -Math.sin(V) * -U)),
                (h = mf(A, h, X * $ * -U + U));
        }
        O !== Gl && (D += 'perspective(' + O + no),
            (l || u) && (D += 'translate(' + l + '%, ' + u + '%) '),
            (I || c !== Gl || d !== Gl || h !== Gl) &&
                (D +=
                    h !== Gl || I
                        ? 'translate3d(' + c + ', ' + d + ', ' + h + ') '
                        : 'translate(' + c + ', ' + d + no),
            g !== to && (D += 'rotate(' + g + no),
            _ !== to && (D += 'rotateY(' + _ + no),
            w !== to && (D += 'rotateX(' + w + no),
            (y !== to || v !== to) && (D += 'skew(' + y + ', ' + v + no),
            (T !== 1 || x !== 1) && (D += 'scale(' + T + ', ' + x + no),
            (A.style[ut] = D || 'translate(0, 0)');
    },
    kv = function (n, i) {
        var o = i || this,
            l = o.xPercent,
            u = o.yPercent,
            c = o.x,
            d = o.y,
            h = o.rotation,
            g = o.skewX,
            _ = o.skewY,
            w = o.scaleX,
            y = o.scaleY,
            v = o.target,
            T = o.xOrigin,
            x = o.yOrigin,
            O = o.xOffset,
            F = o.yOffset,
            A = o.forceCSS,
            U = parseFloat(c),
            D = parseFloat(d),
            I,
            V,
            L,
            X,
            $;
        (h = parseFloat(h)),
            (g = parseFloat(g)),
            (_ = parseFloat(_)),
            _ && ((_ = parseFloat(_)), (g += _), (h += _)),
            h || g
                ? ((h *= il),
                  (g *= il),
                  (I = Math.cos(h) * w),
                  (V = Math.sin(h) * w),
                  (L = Math.sin(h - g) * -y),
                  (X = Math.cos(h - g) * y),
                  g &&
                      ((_ *= il),
                      ($ = Math.tan(g - _)),
                      ($ = Math.sqrt(1 + $ * $)),
                      (L *= $),
                      (X *= $),
                      _ && (($ = Math.tan(_)), ($ = Math.sqrt(1 + $ * $)), (I *= $), (V *= $))),
                  (I = gt(I)),
                  (V = gt(V)),
                  (L = gt(L)),
                  (X = gt(X)))
                : ((I = w), (X = y), (V = L = 0)),
            ((U && !~(c + '').indexOf('px')) || (D && !~(d + '').indexOf('px'))) &&
                ((U = Ai(v, 'x', c, 'px')), (D = Ai(v, 'y', d, 'px'))),
            (T || x || O || F) &&
                ((U = gt(U + T - (T * I + x * L) + O)), (D = gt(D + x - (T * V + x * X) + F))),
            (l || u) &&
                (($ = v.getBBox()),
                (U = gt(U + (l / 100) * $.width)),
                (D = gt(D + (u / 100) * $.height))),
            ($ = 'matrix(' + I + ',' + V + ',' + L + ',' + X + ',' + U + ',' + D + ')'),
            v.setAttribute('transform', $),
            A && (v.style[ut] = $);
    },
    Cv = function (n, i, o, l, u) {
        var c = 360,
            d = It(u),
            h = parseFloat(u) * (d && ~u.indexOf('rad') ? ro : 1),
            g = h - l,
            _ = l + g + 'deg',
            w,
            y;
        return (
            d &&
                ((w = u.split('_')[1]),
                w === 'short' && ((g %= c), g !== g % (c / 2) && (g += g < 0 ? c : -c)),
                w === 'cw' && g < 0
                    ? (g = ((g + c * a0) % c) - ~~(g / c) * c)
                    : w === 'ccw' && g > 0 && (g = ((g - c * a0) % c) - ~~(g / c) * c)),
            (n._pt = y = new Rn(n._pt, i, o, l, g, sv)),
            (y.e = _),
            (y.u = 'deg'),
            n._props.push(o),
            y
        );
    },
    m0 = function (n, i) {
        for (var o in i) n[o] = i[o];
        return n;
    },
    Tv = function (n, i, o) {
        var l = m0({}, o._gsap),
            u = 'perspective,force3D,transformOrigin,svgOrigin',
            c = o.style,
            d,
            h,
            g,
            _,
            w,
            y,
            v,
            T;
        l.svg
            ? ((g = o.getAttribute('transform')),
              o.setAttribute('transform', ''),
              (c[ut] = i),
              (d = Ss(o, 1)),
              vo(o, ut),
              o.setAttribute('transform', g))
            : ((g = getComputedStyle(o)[ut]), (c[ut] = i), (d = Ss(o, 1)), (c[ut] = g));
        for (h in ii)
            (g = l[h]),
                (_ = d[h]),
                g !== _ &&
                    u.indexOf(h) < 0 &&
                    ((v = bt(g)),
                    (T = bt(_)),
                    (w = v !== T ? Ai(o, h, g, T) : parseFloat(g)),
                    (y = parseFloat(_)),
                    (n._pt = new Rn(n._pt, d, h, w, y - w, Lf)),
                    (n._pt.u = T || 0),
                    n._props.push(h));
        m0(d, l);
    };
Mn('padding,margin,Width,Radius', function (f, n) {
    var i = 'Top',
        o = 'Right',
        l = 'Bottom',
        u = 'Left',
        c = (n < 3 ? [i, o, l, u] : [i + u, i + o, l + o, l + u]).map(function (d) {
            return n < 2 ? f + d : 'border' + d + f;
        });
    ca[n > 1 ? 'border' + f : f] = function (d, h, g, _, w) {
        var y, v;
        if (arguments.length < 4)
            return (
                (y = c.map(function (T) {
                    return Jr(d, T, g);
                })),
                (v = y.join(' ')),
                v.split(y[0]).length === 5 ? y[0] : v
            );
        (y = (_ + '').split(' ')),
            (v = {}),
            c.forEach(function (T, x) {
                return (v[T] = y[x] = y[x] || y[((x - 1) / 2) | 0]);
            }),
            d.init(h, v, w);
    };
});
var Fm = {
    name: 'css',
    register: Af,
    targetTest: function (n) {
        return n.style && n.nodeType;
    },
    init: function (n, i, o, l, u) {
        var c = this._props,
            d = n.style,
            h = o.vars.startAt,
            g,
            _,
            w,
            y,
            v,
            T,
            x,
            O,
            F,
            A,
            U,
            D,
            I,
            V,
            L,
            X;
        ad || Af(), (this.styles = this.styles || Mm(n)), (X = this.styles.props), (this.tween = o);
        for (x in i)
            if (x !== 'autoRound' && ((_ = i[x]), !(Wn[x] && ym(x, i, o, l, n, u)))) {
                if (
                    ((v = typeof _),
                    (T = ca[x]),
                    v === 'function' && ((_ = _.call(o, l, n, u)), (v = typeof _)),
                    v === 'string' && ~_.indexOf('random(') && (_ = vs(_)),
                    T)
                )
                    T(this, n, x, _, o) && (L = 1);
                else if (x.substr(0, 2) === '--')
                    (g = (getComputedStyle(n).getPropertyValue(x) + '').trim()),
                        (_ += ''),
                        (Di.lastIndex = 0),
                        Di.test(g) || ((O = bt(g)), (F = bt(_))),
                        F ? O !== F && (g = Ai(n, x, g, F) + F) : O && (_ += O),
                        this.add(d, 'setProperty', g, _, l, u, 0, 0, x),
                        c.push(x),
                        X.push(x, 0, d[x]);
                else if (v !== 'undefined') {
                    if (
                        (h && x in h
                            ? ((g = typeof h[x] == 'function' ? h[x].call(o, l, n, u) : h[x]),
                              It(g) && ~g.indexOf('random(') && (g = vs(g)),
                              bt(g + '') ||
                                  g === 'auto' ||
                                  (g += Qn.units[x] || bt(Jr(n, x)) || ''),
                              (g + '').charAt(1) === '=' && (g = Jr(n, x)))
                            : (g = Jr(n, x)),
                        (y = parseFloat(g)),
                        (A = v === 'string' && _.charAt(1) === '=' && _.substr(0, 2)),
                        A && (_ = _.substr(2)),
                        (w = parseFloat(_)),
                        x in Ar &&
                            (x === 'autoAlpha' &&
                                (y === 1 && Jr(n, 'visibility') === 'hidden' && w && (y = 0),
                                X.push('visibility', 0, d.visibility),
                                Ni(
                                    this,
                                    d,
                                    'visibility',
                                    y ? 'inherit' : 'hidden',
                                    w ? 'inherit' : 'hidden',
                                    !w,
                                )),
                            x !== 'scale' &&
                                x !== 'transform' &&
                                ((x = Ar[x]), ~x.indexOf(',') && (x = x.split(',')[0]))),
                        (U = x in ii),
                        U)
                    ) {
                        if (
                            (this.styles.save(x),
                            D ||
                                ((I = n._gsap),
                                (I.renderTransform && !i.parseTransform) || Ss(n, i.parseTransform),
                                (V = i.smoothOrigin !== !1 && I.smooth),
                                (D = this._pt =
                                    new Rn(this._pt, d, ut, 0, 1, I.renderTransform, I, 0, -1)),
                                (D.dep = 1)),
                            x === 'scale')
                        )
                            (this._pt = new Rn(
                                this._pt,
                                I,
                                'scaleY',
                                I.scaleY,
                                (A ? nl(I.scaleY, A + w) : w) - I.scaleY || 0,
                                Lf,
                            )),
                                (this._pt.u = 0),
                                c.push('scaleY', x),
                                (x += 'X');
                        else if (x === 'transformOrigin') {
                            X.push(zn, 0, d[zn]),
                                (_ = xv(_)),
                                I.svg
                                    ? Ff(n, _, 0, V, 0, this)
                                    : ((F = parseFloat(_.split(' ')[2]) || 0),
                                      F !== I.zOrigin && Ni(this, I, 'zOrigin', I.zOrigin, F),
                                      Ni(this, d, x, fa(g), fa(_)));
                            continue;
                        } else if (x === 'svgOrigin') {
                            Ff(n, _, 1, V, 0, this);
                            continue;
                        } else if (x in Lm) {
                            Cv(this, I, x, y, A ? nl(y, A + _) : _);
                            continue;
                        } else if (x === 'smoothOrigin') {
                            Ni(this, I, 'smooth', I.smooth, _);
                            continue;
                        } else if (x === 'force3D') {
                            I[x] = _;
                            continue;
                        } else if (x === 'transform') {
                            Tv(this, _, n);
                            continue;
                        }
                    } else x in d || (x = dl(x) || x);
                    if (U || ((w || w === 0) && (y || y === 0) && !lv.test(_) && x in d))
                        (O = (g + '').substr((y + '').length)),
                            w || (w = 0),
                            (F = bt(_) || (x in Qn.units ? Qn.units[x] : O)),
                            O !== F && (y = Ai(n, x, g, F)),
                            (this._pt = new Rn(
                                this._pt,
                                U ? I : d,
                                x,
                                y,
                                (A ? nl(y, A + w) : w) - y,
                                !U && (F === 'px' || x === 'zIndex') && i.autoRound !== !1
                                    ? av
                                    : Lf,
                            )),
                            (this._pt.u = F || 0),
                            O !== F && F !== '%' && ((this._pt.b = g), (this._pt.r = uv));
                    else if (x in d) yv.call(this, n, x, g, A ? A + _ : _);
                    else if (x in n) this.add(n, x, g || n[x], A ? A + _ : _, l, u);
                    else if (x !== 'parseTransform') {
                        ed(x, _);
                        continue;
                    }
                    U || (x in d ? X.push(x, 0, d[x]) : X.push(x, 1, g || n[x])), c.push(x);
                }
            }
        L && Tm(this);
    },
    render: function (n, i) {
        if (i.tween._time || !cd()) for (var o = i._pt; o; ) o.r(n, o.d), (o = o._next);
        else i.styles.revert();
    },
    get: Jr,
    aliases: Ar,
    getSetter: function (n, i, o) {
        var l = Ar[i];
        return (
            l && l.indexOf(',') < 0 && (i = l),
            i in ii && i !== zn && (n._gsap.x || Jr(n, 'x'))
                ? o && u0 === o
                    ? i === 'scale'
                        ? pv
                        : dv
                    : (u0 = o || {}) && (i === 'scale' ? hv : mv)
                : n.style && !Zf(n.style[i])
                ? cv
                : ~i.indexOf('-')
                ? fv
                : sd(n, i)
        );
    },
    core: { _removeProperty: vo, _getMatrix: dd },
};
Dn.utils.checkPrefix = dl;
Dn.core.getStyleSaver = Mm;
(function (f, n, i, o) {
    var l = Mn(f + ',' + n + ',' + i, function (u) {
        ii[u] = 1;
    });
    Mn(n, function (u) {
        (Qn.units[u] = 'deg'), (Lm[u] = 1);
    }),
        (Ar[l[13]] = f + ',' + n),
        Mn(o, function (u) {
            var c = u.split(':');
            Ar[c[1]] = l[c[0]];
        });
})(
    'x,y,z,scale,scaleX,scaleY,xPercent,yPercent',
    'rotation,rotationX,rotationY,skewX,skewY',
    'transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective',
    '0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY',
);
Mn('x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective', function (f) {
    Qn.units[f] = 'px';
});
Dn.registerPlugin(Fm);
var hn = Dn.registerPlugin(Fm) || Dn;
hn.core.Tween;
/*!
 * @gsap/react 2.1.1
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ let g0 = typeof window < 'u' ? Be.useLayoutEffect : Be.useEffect,
    _0 = (f) => f && !Array.isArray(f) && typeof f == 'object',
    Du = [],
    Ev = {},
    Im = hn;
const ks = (f, n = Du) => {
    let i = Ev;
    _0(f)
        ? ((i = f), (f = null), (n = 'dependencies' in i ? i.dependencies : Du))
        : _0(n) && ((i = n), (n = 'dependencies' in i ? i.dependencies : Du)),
        f &&
            typeof f != 'function' &&
            console.warn('First parameter must be a function or config object');
    const { scope: o, revertOnUpdate: l } = i,
        u = Be.useRef(!1),
        c = Be.useRef(Im.context(() => {}, o)),
        d = Be.useRef((g) => c.current.add(null, g)),
        h = n && n.length && !l;
    return (
        g0(() => {
            if ((f && c.current.add(f, o), !h || !u.current)) return () => c.current.revert();
        }, n),
        h && g0(() => ((u.current = !0), () => c.current.revert()), Du),
        { context: c.current, contextSafe: d.current }
    );
};
ks.register = (f) => {
    Im = f;
};
ks.headless = !0;
function Pv(f, n) {
    for (var i = 0; i < n.length; i++) {
        var o = n[i];
        (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(f, o.key, o);
    }
}
function Ov(f, n, i) {
    return n && Pv(f.prototype, n), f;
}
/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var $t,
    Zu,
    Hn,
    Mi,
    Ri,
    ol,
    Bm,
    io,
    ss,
    Um,
    ti,
    kr,
    Vm,
    $m = function () {
        return $t || (typeof window < 'u' && ($t = window.gsap) && $t.registerPlugin && $t);
    },
    Wm = 1,
    tl = [],
    De = [],
    Br = [],
    us = Date.now,
    If = function (n, i) {
        return i;
    },
    Nv = function () {
        var n = ss.core,
            i = n.bridge || {},
            o = n._scrollers,
            l = n._proxies;
        o.push.apply(o, De),
            l.push.apply(l, Br),
            (De = o),
            (Br = l),
            (If = function (c, d) {
                return i[c](d);
            });
    },
    Li = function (n, i) {
        return ~Br.indexOf(n) && Br[Br.indexOf(n) + 1][i];
    },
    as = function (n) {
        return !!~Um.indexOf(n);
    },
    an = function (n, i, o, l, u) {
        return n.addEventListener(i, o, { passive: l !== !1, capture: !!u });
    },
    un = function (n, i, o, l) {
        return n.removeEventListener(i, o, !!l);
    },
    Lu = 'scrollLeft',
    ju = 'scrollTop',
    Bf = function () {
        return (ti && ti.isPressed) || De.cache++;
    },
    da = function (n, i) {
        var o = function l(u) {
            if (u || u === 0) {
                Wm && (Hn.history.scrollRestoration = 'manual');
                var c = ti && ti.isPressed;
                (u = l.v = Math.round(u) || (ti && ti.iOS ? 1 : 0)),
                    n(u),
                    (l.cacheID = De.cache),
                    c && If('ss', u);
            } else
                (i || De.cache !== l.cacheID || If('ref')) && ((l.cacheID = De.cache), (l.v = n()));
            return l.v + l.offset;
        };
        return (o.offset = 0), n && o;
    },
    mn = {
        s: Lu,
        p: 'left',
        p2: 'Left',
        os: 'right',
        os2: 'Right',
        d: 'width',
        d2: 'Width',
        a: 'x',
        sc: da(function (f) {
            return arguments.length
                ? Hn.scrollTo(f, Ot.sc())
                : Hn.pageXOffset || Mi[Lu] || Ri[Lu] || ol[Lu] || 0;
        }),
    },
    Ot = {
        s: ju,
        p: 'top',
        p2: 'Top',
        os: 'bottom',
        os2: 'Bottom',
        d: 'height',
        d2: 'Height',
        a: 'y',
        op: mn,
        sc: da(function (f) {
            return arguments.length
                ? Hn.scrollTo(mn.sc(), f)
                : Hn.pageYOffset || Mi[ju] || Ri[ju] || ol[ju] || 0;
        }),
    },
    On = function (n, i) {
        return (
            ((i && i._ctx && i._ctx.selector) || $t.utils.toArray)(n)[0] ||
            (typeof n == 'string' && $t.config().nullTargetWarn !== !1
                ? console.warn('Element not found:', n)
                : null)
        );
    },
    Fi = function (n, i) {
        var o = i.s,
            l = i.sc;
        as(n) && (n = Mi.scrollingElement || Ri);
        var u = De.indexOf(n),
            c = l === Ot.sc ? 1 : 2;
        !~u && (u = De.push(n) - 1), De[u + c] || an(n, 'scroll', Bf);
        var d = De[u + c],
            h =
                d ||
                (De[u + c] =
                    da(Li(n, o), !0) ||
                    (as(n)
                        ? l
                        : da(function (g) {
                              return arguments.length ? (n[o] = g) : n[o];
                          })));
        return (
            (h.target = n), d || (h.smooth = $t.getProperty(n, 'scrollBehavior') === 'smooth'), h
        );
    },
    Uf = function (n, i, o) {
        var l = n,
            u = n,
            c = us(),
            d = c,
            h = i || 50,
            g = Math.max(500, h * 3),
            _ = function (T, x) {
                var O = us();
                x || O - c > h
                    ? ((u = l), (l = T), (d = c), (c = O))
                    : o
                    ? (l += T)
                    : (l = u + ((T - u) / (O - d)) * (c - d));
            },
            w = function () {
                (u = l = o ? 0 : l), (d = c = 0);
            },
            y = function (T) {
                var x = d,
                    O = u,
                    F = us();
                return (
                    (T || T === 0) && T !== l && _(T),
                    c === d || F - d > g ? 0 : ((l + (o ? O : -O)) / ((o ? F : c) - x)) * 1e3
                );
            };
        return { update: _, reset: w, getVelocity: y };
    },
    Kl = function (n, i) {
        return i && !n._gsapAllow && n.preventDefault(), n.changedTouches ? n.changedTouches[0] : n;
    },
    v0 = function (n) {
        var i = Math.max.apply(Math, n),
            o = Math.min.apply(Math, n);
        return Math.abs(i) >= Math.abs(o) ? i : o;
    },
    Ym = function () {
        (ss = $t.core.globals().ScrollTrigger), ss && ss.core && Nv();
    },
    Hm = function (n) {
        return (
            ($t = n || $m()),
            !Zu &&
                $t &&
                typeof document < 'u' &&
                document.body &&
                ((Hn = window),
                (Mi = document),
                (Ri = Mi.documentElement),
                (ol = Mi.body),
                (Um = [Hn, Mi, Ri, ol]),
                $t.utils.clamp,
                (Vm = $t.core.context || function () {}),
                (io = 'onpointerenter' in ol ? 'pointer' : 'mouse'),
                (Bm = _t.isTouch =
                    Hn.matchMedia && Hn.matchMedia('(hover: none), (pointer: coarse)').matches
                        ? 1
                        : 'ontouchstart' in Hn ||
                          navigator.maxTouchPoints > 0 ||
                          navigator.msMaxTouchPoints > 0
                        ? 2
                        : 0),
                (kr = _t.eventTypes =
                    (
                        'ontouchstart' in Ri
                            ? 'touchstart,touchmove,touchcancel,touchend'
                            : 'onpointerdown' in Ri
                            ? 'pointerdown,pointermove,pointercancel,pointerup'
                            : 'mousedown,mousemove,mouseup,mouseup'
                    ).split(',')),
                setTimeout(function () {
                    return (Wm = 0);
                }, 500),
                Ym(),
                (Zu = 1)),
            Zu
        );
    };
mn.op = Ot;
De.cache = 0;
var _t = (function () {
    function f(i) {
        this.init(i);
    }
    var n = f.prototype;
    return (
        (n.init = function (o) {
            Zu || Hm($t) || console.warn('Please gsap.registerPlugin(Observer)'), ss || Ym();
            var l = o.tolerance,
                u = o.dragMinimum,
                c = o.type,
                d = o.target,
                h = o.lineHeight,
                g = o.debounce,
                _ = o.preventDefault,
                w = o.onStop,
                y = o.onStopDelay,
                v = o.ignore,
                T = o.wheelSpeed,
                x = o.event,
                O = o.onDragStart,
                F = o.onDragEnd,
                A = o.onDrag,
                U = o.onPress,
                D = o.onRelease,
                I = o.onRight,
                V = o.onLeft,
                L = o.onUp,
                X = o.onDown,
                $ = o.onChangeX,
                Q = o.onChangeY,
                pe = o.onChange,
                q = o.onToggleX,
                he = o.onToggleY,
                ge = o.onHover,
                ke = o.onHoverEnd,
                fe = o.onMove,
                ee = o.ignoreCheck,
                W = o.isNormalizer,
                b = o.onGestureStart,
                k = o.onGestureEnd,
                E = o.onWheel,
                B = o.onEnable,
                de = o.onDisable,
                oe = o.onClick,
                me = o.scrollSpeed,
                ve = o.capture,
                xe = o.allowClicks,
                Ce = o.lockAxis,
                Te = o.onLockAxis;
            (this.target = d = On(d) || Ri),
                (this.vars = o),
                v && (v = $t.utils.toArray(v)),
                (l = l || 1e-9),
                (u = u || 0),
                (T = T || 1),
                (me = me || 1),
                (c = c || 'wheel,touch,pointer'),
                (g = g !== !1),
                h || (h = parseFloat(Hn.getComputedStyle(ol).lineHeight) || 22);
            var at,
                vt,
                _n,
                Re,
                Ge,
                Bt,
                Wt,
                j = this,
                Yt = 0,
                Ln = 0,
                vn = o.passive || !_,
                $e = Fi(d, mn),
                Kn = Fi(d, Ot),
                Tr = $e(),
                Vr = Kn(),
                pt = ~c.indexOf('touch') && !~c.indexOf('pointer') && kr[0] === 'pointerdown',
                fr = as(d),
                Ke = d.ownerDocument || Mi,
                Ht = [0, 0, 0],
                tn = [0, 0, 0],
                nn = 0,
                dr = function () {
                    return (nn = us());
                },
                ct = function (ue, ze) {
                    return (
                        ((j.event = ue) && v && ~v.indexOf(ue.target)) ||
                        (ze && pt && ue.pointerType !== 'touch') ||
                        (ee && ee(ue, ze))
                    );
                },
                Bi = function () {
                    j._vx.reset(), j._vy.reset(), vt.pause(), w && w(j);
                },
                pr = function () {
                    var ue = (j.deltaX = v0(Ht)),
                        ze = (j.deltaY = v0(tn)),
                        Z = Math.abs(ue) >= l,
                        ye = Math.abs(ze) >= l;
                    pe && (Z || ye) && pe(j, ue, ze, Ht, tn),
                        Z &&
                            (I && j.deltaX > 0 && I(j),
                            V && j.deltaX < 0 && V(j),
                            $ && $(j),
                            q && j.deltaX < 0 != Yt < 0 && q(j),
                            (Yt = j.deltaX),
                            (Ht[0] = Ht[1] = Ht[2] = 0)),
                        ye &&
                            (X && j.deltaY > 0 && X(j),
                            L && j.deltaY < 0 && L(j),
                            Q && Q(j),
                            he && j.deltaY < 0 != Ln < 0 && he(j),
                            (Ln = j.deltaY),
                            (tn[0] = tn[1] = tn[2] = 0)),
                        (Re || _n) && (fe && fe(j), _n && (A(j), (_n = !1)), (Re = !1)),
                        Bt && !(Bt = !1) && Te && Te(j),
                        Ge && (E(j), (Ge = !1)),
                        (at = 0);
                },
                oi = function (ue, ze, Z) {
                    (Ht[Z] += ue),
                        (tn[Z] += ze),
                        j._vx.update(ue),
                        j._vy.update(ze),
                        g ? at || (at = requestAnimationFrame(pr)) : pr();
                },
                Er = function (ue, ze) {
                    Ce &&
                        !Wt &&
                        ((j.axis = Wt = Math.abs(ue) > Math.abs(ze) ? 'x' : 'y'), (Bt = !0)),
                        Wt !== 'y' && ((Ht[2] += ue), j._vx.update(ue, !0)),
                        Wt !== 'x' && ((tn[2] += ze), j._vy.update(ze, !0)),
                        g ? at || (at = requestAnimationFrame(pr)) : pr();
                },
                qn = function (ue) {
                    if (!ct(ue, 1)) {
                        ue = Kl(ue, _);
                        var ze = ue.clientX,
                            Z = ue.clientY,
                            ye = ze - j.x,
                            se = Z - j.y,
                            _e = j.isDragging;
                        (j.x = ze),
                            (j.y = Z),
                            (_e || Math.abs(j.startX - ze) >= u || Math.abs(j.startY - Z) >= u) &&
                                (A && (_n = !0),
                                _e || (j.isDragging = !0),
                                Er(ye, se),
                                _e || (O && O(j)));
                    }
                },
                hr = (j.onPress = function (Se) {
                    ct(Se, 1) ||
                        (Se && Se.button) ||
                        ((j.axis = Wt = null),
                        vt.pause(),
                        (j.isPressed = !0),
                        (Se = Kl(Se)),
                        (Yt = Ln = 0),
                        (j.startX = j.x = Se.clientX),
                        (j.startY = j.y = Se.clientY),
                        j._vx.reset(),
                        j._vy.reset(),
                        an(W ? d : Ke, kr[1], qn, vn, !0),
                        (j.deltaX = j.deltaY = 0),
                        U && U(j));
                }),
                Ee = (j.onRelease = function (Se) {
                    if (!ct(Se, 1)) {
                        un(W ? d : Ke, kr[1], qn, !0);
                        var ue = !isNaN(j.y - j.startY),
                            ze = j.isDragging,
                            Z =
                                ze &&
                                (Math.abs(j.x - j.startX) > 3 || Math.abs(j.y - j.startY) > 3),
                            ye = Kl(Se);
                        !Z &&
                            ue &&
                            (j._vx.reset(),
                            j._vy.reset(),
                            _ &&
                                xe &&
                                $t.delayedCall(0.08, function () {
                                    if (us() - nn > 300 && !Se.defaultPrevented) {
                                        if (Se.target.click) Se.target.click();
                                        else if (Ke.createEvent) {
                                            var se = Ke.createEvent('MouseEvents');
                                            se.initMouseEvent(
                                                'click',
                                                !0,
                                                !0,
                                                Hn,
                                                1,
                                                ye.screenX,
                                                ye.screenY,
                                                ye.clientX,
                                                ye.clientY,
                                                !1,
                                                !1,
                                                !1,
                                                !1,
                                                0,
                                                null,
                                            ),
                                                Se.target.dispatchEvent(se);
                                        }
                                    }
                                })),
                            (j.isDragging = j.isGesturing = j.isPressed = !1),
                            w && ze && !W && vt.restart(!0),
                            F && ze && F(j),
                            D && D(j, Z);
                    }
                }),
                mr = function (ue) {
                    return (
                        ue.touches &&
                        ue.touches.length > 1 &&
                        (j.isGesturing = !0) &&
                        b(ue, j.isDragging)
                    );
                },
                Nt = function () {
                    return (j.isGesturing = !1) || k(j);
                },
                Mt = function (ue) {
                    if (!ct(ue)) {
                        var ze = $e(),
                            Z = Kn();
                        oi((ze - Tr) * me, (Z - Vr) * me, 1),
                            (Tr = ze),
                            (Vr = Z),
                            w && vt.restart(!0);
                    }
                },
                yn = function (ue) {
                    if (!ct(ue)) {
                        (ue = Kl(ue, _)), E && (Ge = !0);
                        var ze =
                            (ue.deltaMode === 1 ? h : ue.deltaMode === 2 ? Hn.innerHeight : 1) * T;
                        oi(ue.deltaX * ze, ue.deltaY * ze, 0), w && !W && vt.restart(!0);
                    }
                },
                Pr = function (ue) {
                    if (!ct(ue)) {
                        var ze = ue.clientX,
                            Z = ue.clientY,
                            ye = ze - j.x,
                            se = Z - j.y;
                        (j.x = ze),
                            (j.y = Z),
                            (Re = !0),
                            w && vt.restart(!0),
                            (ye || se) && Er(ye, se);
                    }
                },
                $r = function (ue) {
                    (j.event = ue), ge(j);
                },
                Zn = function (ue) {
                    (j.event = ue), ke(j);
                },
                li = function (ue) {
                    return ct(ue) || (Kl(ue, _) && oe(j));
                };
            (vt = j._dc = $t.delayedCall(y || 0.25, Bi).pause()),
                (j.deltaX = j.deltaY = 0),
                (j._vx = Uf(0, 50, !0)),
                (j._vy = Uf(0, 50, !0)),
                (j.scrollX = $e),
                (j.scrollY = Kn),
                (j.isDragging = j.isGesturing = j.isPressed = !1),
                Vm(this),
                (j.enable = function (Se) {
                    return (
                        j.isEnabled ||
                            (an(fr ? Ke : d, 'scroll', Bf),
                            c.indexOf('scroll') >= 0 && an(fr ? Ke : d, 'scroll', Mt, vn, ve),
                            c.indexOf('wheel') >= 0 && an(d, 'wheel', yn, vn, ve),
                            ((c.indexOf('touch') >= 0 && Bm) || c.indexOf('pointer') >= 0) &&
                                (an(d, kr[0], hr, vn, ve),
                                an(Ke, kr[2], Ee),
                                an(Ke, kr[3], Ee),
                                xe && an(d, 'click', dr, !0, !0),
                                oe && an(d, 'click', li),
                                b && an(Ke, 'gesturestart', mr),
                                k && an(Ke, 'gestureend', Nt),
                                ge && an(d, io + 'enter', $r),
                                ke && an(d, io + 'leave', Zn),
                                fe && an(d, io + 'move', Pr)),
                            (j.isEnabled = !0),
                            Se && Se.type && hr(Se),
                            B && B(j)),
                        j
                    );
                }),
                (j.disable = function () {
                    j.isEnabled &&
                        (tl.filter(function (Se) {
                            return Se !== j && as(Se.target);
                        }).length || un(fr ? Ke : d, 'scroll', Bf),
                        j.isPressed &&
                            (j._vx.reset(), j._vy.reset(), un(W ? d : Ke, kr[1], qn, !0)),
                        un(fr ? Ke : d, 'scroll', Mt, ve),
                        un(d, 'wheel', yn, ve),
                        un(d, kr[0], hr, ve),
                        un(Ke, kr[2], Ee),
                        un(Ke, kr[3], Ee),
                        un(d, 'click', dr, !0),
                        un(d, 'click', li),
                        un(Ke, 'gesturestart', mr),
                        un(Ke, 'gestureend', Nt),
                        un(d, io + 'enter', $r),
                        un(d, io + 'leave', Zn),
                        un(d, io + 'move', Pr),
                        (j.isEnabled = j.isPressed = j.isDragging = !1),
                        de && de(j));
                }),
                (j.kill = j.revert =
                    function () {
                        j.disable();
                        var Se = tl.indexOf(j);
                        Se >= 0 && tl.splice(Se, 1), ti === j && (ti = 0);
                    }),
                tl.push(j),
                W && as(d) && (ti = j),
                j.enable(x);
        }),
        Ov(f, [
            {
                key: 'velocityX',
                get: function () {
                    return this._vx.getVelocity();
                },
            },
            {
                key: 'velocityY',
                get: function () {
                    return this._vy.getVelocity();
                },
            },
        ]),
        f
    );
})();
_t.version = '3.12.5';
_t.create = function (f) {
    return new _t(f);
};
_t.register = Hm;
_t.getAll = function () {
    return tl.slice();
};
_t.getById = function (f) {
    return tl.filter(function (n) {
        return n.vars.id === f;
    })[0];
};
$m() && $t.registerPlugin(_t);
/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var ne,
    Zo,
    Ae,
    lt,
    Cr,
    Je,
    Xm,
    pa,
    Cs,
    cs,
    Jl,
    Au,
    qt,
    xa,
    Vf,
    fn,
    y0,
    x0,
    bo,
    Qm,
    gf,
    Gm,
    cn,
    $f,
    Km,
    qm,
    Ei,
    Wf,
    pd,
    ll,
    hd,
    ha,
    Yf,
    _f,
    Fu = 1,
    Zt = Date.now,
    vf = Zt(),
    ar = 0,
    es = 0,
    w0 = function (n, i, o) {
        var l = $n(n) && (n.substr(0, 6) === 'clamp(' || n.indexOf('max') > -1);
        return (o['_' + i + 'Clamp'] = l), l ? n.substr(6, n.length - 7) : n;
    },
    S0 = function (n, i) {
        return i && (!$n(n) || n.substr(0, 6) !== 'clamp(') ? 'clamp(' + n + ')' : n;
    },
    Mv = function f() {
        return es && requestAnimationFrame(f);
    },
    k0 = function () {
        return (xa = 1);
    },
    C0 = function () {
        return (xa = 0);
    },
    Lr = function (n) {
        return n;
    },
    ts = function (n) {
        return Math.round(n * 1e5) / 1e5 || 0;
    },
    Zm = function () {
        return typeof window < 'u';
    },
    bm = function () {
        return ne || (Zm() && (ne = window.gsap) && ne.registerPlugin && ne);
    },
    yo = function (n) {
        return !!~Xm.indexOf(n);
    },
    Jm = function (n) {
        return (n === 'Height' ? hd : Ae['inner' + n]) || Cr['client' + n] || Je['client' + n];
    },
    e1 = function (n) {
        return (
            Li(n, 'getBoundingClientRect') ||
            (yo(n)
                ? function () {
                      return (na.width = Ae.innerWidth), (na.height = hd), na;
                  }
                : function () {
                      return ei(n);
                  })
        );
    },
    Rv = function (n, i, o) {
        var l = o.d,
            u = o.d2,
            c = o.a;
        return (c = Li(n, 'getBoundingClientRect'))
            ? function () {
                  return c()[l];
              }
            : function () {
                  return (i ? Jm(u) : n['client' + u]) || 0;
              };
    },
    zv = function (n, i) {
        return !i || ~Br.indexOf(n)
            ? e1(n)
            : function () {
                  return na;
              };
    },
    Fr = function (n, i) {
        var o = i.s,
            l = i.d2,
            u = i.d,
            c = i.a;
        return Math.max(
            0,
            (o = 'scroll' + l) && (c = Li(n, o))
                ? c() - e1(n)()[u]
                : yo(n)
                ? (Cr[o] || Je[o]) - Jm(l)
                : n[o] - n['offset' + l],
        );
    },
    Iu = function (n, i) {
        for (var o = 0; o < bo.length; o += 3)
            (!i || ~i.indexOf(bo[o + 1])) && n(bo[o], bo[o + 1], bo[o + 2]);
    },
    $n = function (n) {
        return typeof n == 'string';
    },
    gn = function (n) {
        return typeof n == 'function';
    },
    ns = function (n) {
        return typeof n == 'number';
    },
    oo = function (n) {
        return typeof n == 'object';
    },
    ql = function (n, i, o) {
        return n && n.progress(i ? 0 : 1) && o && n.pause();
    },
    yf = function (n, i) {
        if (n.enabled) {
            var o = n._ctx
                ? n._ctx.add(function () {
                      return i(n);
                  })
                : i(n);
            o && o.totalTime && (n.callbackAnimation = o);
        }
    },
    Go = Math.abs,
    t1 = 'left',
    n1 = 'top',
    md = 'right',
    gd = 'bottom',
    ho = 'width',
    mo = 'height',
    fs = 'Right',
    ds = 'Left',
    ps = 'Top',
    hs = 'Bottom',
    St = 'padding',
    or = 'margin',
    pl = 'Width',
    _d = 'Height',
    Pt = 'px',
    lr = function (n) {
        return Ae.getComputedStyle(n);
    },
    Dv = function (n) {
        var i = lr(n).position;
        n.style.position = i === 'absolute' || i === 'fixed' ? i : 'relative';
    },
    T0 = function (n, i) {
        for (var o in i) o in n || (n[o] = i[o]);
        return n;
    },
    ei = function (n, i) {
        var o =
                i &&
                lr(n)[Vf] !== 'matrix(1, 0, 0, 1, 0, 0)' &&
                ne
                    .to(n, {
                        x: 0,
                        y: 0,
                        xPercent: 0,
                        yPercent: 0,
                        rotation: 0,
                        rotationX: 0,
                        rotationY: 0,
                        scale: 1,
                        skewX: 0,
                        skewY: 0,
                    })
                    .progress(1),
            l = n.getBoundingClientRect();
        return o && o.progress(0).kill(), l;
    },
    ma = function (n, i) {
        var o = i.d2;
        return n['offset' + o] || n['client' + o] || 0;
    },
    r1 = function (n) {
        var i = [],
            o = n.labels,
            l = n.duration(),
            u;
        for (u in o) i.push(o[u] / l);
        return i;
    },
    Lv = function (n) {
        return function (i) {
            return ne.utils.snap(r1(n), i);
        };
    },
    vd = function (n) {
        var i = ne.utils.snap(n),
            o =
                Array.isArray(n) &&
                n.slice(0).sort(function (l, u) {
                    return l - u;
                });
        return o
            ? function (l, u, c) {
                  c === void 0 && (c = 0.001);
                  var d;
                  if (!u) return i(l);
                  if (u > 0) {
                      for (l -= c, d = 0; d < o.length; d++) if (o[d] >= l) return o[d];
                      return o[d - 1];
                  } else for (d = o.length, l += c; d--; ) if (o[d] <= l) return o[d];
                  return o[0];
              }
            : function (l, u, c) {
                  c === void 0 && (c = 0.001);
                  var d = i(l);
                  return !u || Math.abs(d - l) < c || d - l < 0 == u < 0
                      ? d
                      : i(u < 0 ? l - n : l + n);
              };
    },
    jv = function (n) {
        return function (i, o) {
            return vd(r1(n))(i, o.direction);
        };
    },
    Bu = function (n, i, o, l) {
        return o.split(',').forEach(function (u) {
            return n(i, u, l);
        });
    },
    At = function (n, i, o, l, u) {
        return n.addEventListener(i, o, { passive: !l, capture: !!u });
    },
    jt = function (n, i, o, l) {
        return n.removeEventListener(i, o, !!l);
    },
    Uu = function (n, i, o) {
        (o = o && o.wheelHandler), o && (n(i, 'wheel', o), n(i, 'touchmove', o));
    },
    E0 = {
        startColor: 'green',
        endColor: 'red',
        indent: 0,
        fontSize: '16px',
        fontWeight: 'normal',
    },
    Vu = { toggleActions: 'play', anticipatePin: 0 },
    ga = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
    bu = function (n, i) {
        if ($n(n)) {
            var o = n.indexOf('='),
                l = ~o ? +(n.charAt(o - 1) + 1) * parseFloat(n.substr(o + 1)) : 0;
            ~o && (n.indexOf('%') > o && (l *= i / 100), (n = n.substr(0, o - 1))),
                (n =
                    l +
                    (n in ga
                        ? ga[n] * i
                        : ~n.indexOf('%')
                        ? (parseFloat(n) * i) / 100
                        : parseFloat(n) || 0));
        }
        return n;
    },
    $u = function (n, i, o, l, u, c, d, h) {
        var g = u.startColor,
            _ = u.endColor,
            w = u.fontSize,
            y = u.indent,
            v = u.fontWeight,
            T = lt.createElement('div'),
            x = yo(o) || Li(o, 'pinType') === 'fixed',
            O = n.indexOf('scroller') !== -1,
            F = x ? Je : o,
            A = n.indexOf('start') !== -1,
            U = A ? g : _,
            D =
                'border-color:' +
                U +
                ';font-size:' +
                w +
                ';color:' +
                U +
                ';font-weight:' +
                v +
                ';pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;';
        return (
            (D += 'position:' + ((O || h) && x ? 'fixed;' : 'absolute;')),
            (O || h || !x) && (D += (l === Ot ? md : gd) + ':' + (c + parseFloat(y)) + 'px;'),
            d && (D += 'box-sizing:border-box;text-align:left;width:' + d.offsetWidth + 'px;'),
            (T._isStart = A),
            T.setAttribute('class', 'gsap-marker-' + n + (i ? ' marker-' + i : '')),
            (T.style.cssText = D),
            (T.innerText = i || i === 0 ? n + '-' + i : n),
            F.children[0] ? F.insertBefore(T, F.children[0]) : F.appendChild(T),
            (T._offset = T['offset' + l.op.d2]),
            Ju(T, 0, l, A),
            T
        );
    },
    Ju = function (n, i, o, l) {
        var u = { display: 'block' },
            c = o[l ? 'os2' : 'p2'],
            d = o[l ? 'p2' : 'os2'];
        (n._isFlipped = l),
            (u[o.a + 'Percent'] = l ? -100 : 0),
            (u[o.a] = l ? '1px' : 0),
            (u['border' + c + pl] = 1),
            (u['border' + d + pl] = 0),
            (u[o.p] = i + 'px'),
            ne.set(n, u);
    },
    Me = [],
    Hf = {},
    Ts,
    P0 = function () {
        return Zt() - ar > 34 && (Ts || (Ts = requestAnimationFrame(ni)));
    },
    Ko = function () {
        (!cn || !cn.isPressed || cn.startX > Je.clientWidth) &&
            (De.cache++,
            cn ? Ts || (Ts = requestAnimationFrame(ni)) : ni(),
            ar || wo('scrollStart'),
            (ar = Zt()));
    },
    xf = function () {
        (qm = Ae.innerWidth), (Km = Ae.innerHeight);
    },
    rs = function () {
        De.cache++,
            !qt &&
                !Gm &&
                !lt.fullscreenElement &&
                !lt.webkitFullscreenElement &&
                (!$f ||
                    qm !== Ae.innerWidth ||
                    Math.abs(Ae.innerHeight - Km) > Ae.innerHeight * 0.25) &&
                pa.restart(!0);
    },
    xo = {},
    Av = [],
    i1 = function f() {
        return jt(Le, 'scrollEnd', f) || so(!0);
    },
    wo = function (n) {
        return (
            (xo[n] &&
                xo[n].map(function (i) {
                    return i();
                })) ||
            Av
        );
    },
    Vn = [],
    o1 = function (n) {
        for (var i = 0; i < Vn.length; i += 5)
            (!n || (Vn[i + 4] && Vn[i + 4].query === n)) &&
                ((Vn[i].style.cssText = Vn[i + 1]),
                Vn[i].getBBox && Vn[i].setAttribute('transform', Vn[i + 2] || ''),
                (Vn[i + 3].uncache = 1));
    },
    yd = function (n, i) {
        var o;
        for (fn = 0; fn < Me.length; fn++)
            (o = Me[fn]), o && (!i || o._ctx === i) && (n ? o.kill(1) : o.revert(!0, !0));
        (ha = !0), i && o1(i), i || wo('revert');
    },
    l1 = function (n, i) {
        De.cache++,
            (i || !dn) &&
                De.forEach(function (o) {
                    return gn(o) && o.cacheID++ && (o.rec = 0);
                }),
            $n(n) && (Ae.history.scrollRestoration = pd = n);
    },
    dn,
    go = 0,
    O0,
    Fv = function () {
        if (O0 !== go) {
            var n = (O0 = go);
            requestAnimationFrame(function () {
                return n === go && so(!0);
            });
        }
    },
    s1 = function () {
        Je.appendChild(ll), (hd = (!cn && ll.offsetHeight) || Ae.innerHeight), Je.removeChild(ll);
    },
    N0 = function (n) {
        return Cs(
            '.gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end',
        ).forEach(function (i) {
            return (i.style.display = n ? 'none' : 'block');
        });
    },
    so = function (n, i) {
        if (ar && !n && !ha) {
            At(Le, 'scrollEnd', i1);
            return;
        }
        s1(),
            (dn = Le.isRefreshing = !0),
            De.forEach(function (l) {
                return gn(l) && ++l.cacheID && (l.rec = l());
            });
        var o = wo('refreshInit');
        Qm && Le.sort(),
            i || yd(),
            De.forEach(function (l) {
                gn(l) && (l.smooth && (l.target.style.scrollBehavior = 'auto'), l(0));
            }),
            Me.slice(0).forEach(function (l) {
                return l.refresh();
            }),
            (ha = !1),
            Me.forEach(function (l) {
                if (l._subPinOffset && l.pin) {
                    var u = l.vars.horizontal ? 'offsetWidth' : 'offsetHeight',
                        c = l.pin[u];
                    l.revert(!0, 1), l.adjustPinSpacing(l.pin[u] - c), l.refresh();
                }
            }),
            (Yf = 1),
            N0(!0),
            Me.forEach(function (l) {
                var u = Fr(l.scroller, l._dir),
                    c = l.vars.end === 'max' || (l._endClamp && l.end > u),
                    d = l._startClamp && l.start >= u;
                (c || d) &&
                    l.setPositions(
                        d ? u - 1 : l.start,
                        c ? Math.max(d ? u : l.start + 1, u) : l.end,
                        !0,
                    );
            }),
            N0(!1),
            (Yf = 0),
            o.forEach(function (l) {
                return l && l.render && l.render(-1);
            }),
            De.forEach(function (l) {
                gn(l) &&
                    (l.smooth &&
                        requestAnimationFrame(function () {
                            return (l.target.style.scrollBehavior = 'smooth');
                        }),
                    l.rec && l(l.rec));
            }),
            l1(pd, 1),
            pa.pause(),
            go++,
            (dn = 2),
            ni(2),
            Me.forEach(function (l) {
                return gn(l.vars.onRefresh) && l.vars.onRefresh(l);
            }),
            (dn = Le.isRefreshing = !1),
            wo('refresh');
    },
    Xf = 0,
    ea = 1,
    ms,
    ni = function (n) {
        if (n === 2 || (!dn && !ha)) {
            (Le.isUpdating = !0), ms && ms.update(0);
            var i = Me.length,
                o = Zt(),
                l = o - vf >= 50,
                u = i && Me[0].scroll();
            if (
                ((ea = Xf > u ? -1 : 1),
                dn || (Xf = u),
                l &&
                    (ar && !xa && o - ar > 200 && ((ar = 0), wo('scrollEnd')), (Jl = vf), (vf = o)),
                ea < 0)
            ) {
                for (fn = i; fn-- > 0; ) Me[fn] && Me[fn].update(0, l);
                ea = 1;
            } else for (fn = 0; fn < i; fn++) Me[fn] && Me[fn].update(0, l);
            Le.isUpdating = !1;
        }
        Ts = 0;
    },
    Qf = [
        t1,
        n1,
        gd,
        md,
        or + hs,
        or + fs,
        or + ps,
        or + ds,
        'display',
        'flexShrink',
        'float',
        'zIndex',
        'gridColumnStart',
        'gridColumnEnd',
        'gridRowStart',
        'gridRowEnd',
        'gridArea',
        'justifySelf',
        'alignSelf',
        'placeSelf',
        'order',
    ],
    ta = Qf.concat([
        ho,
        mo,
        'boxSizing',
        'max' + pl,
        'max' + _d,
        'position',
        or,
        St,
        St + ps,
        St + fs,
        St + hs,
        St + ds,
    ]),
    Iv = function (n, i, o) {
        sl(o);
        var l = n._gsap;
        if (l.spacerIsNative) sl(l.spacerState);
        else if (n._gsap.swappedIn) {
            var u = i.parentNode;
            u && (u.insertBefore(n, i), u.removeChild(i));
        }
        n._gsap.swappedIn = !1;
    },
    wf = function (n, i, o, l) {
        if (!n._gsap.swappedIn) {
            for (var u = Qf.length, c = i.style, d = n.style, h; u--; ) (h = Qf[u]), (c[h] = o[h]);
            (c.position = o.position === 'absolute' ? 'absolute' : 'relative'),
                o.display === 'inline' && (c.display = 'inline-block'),
                (d[gd] = d[md] = 'auto'),
                (c.flexBasis = o.flexBasis || 'auto'),
                (c.overflow = 'visible'),
                (c.boxSizing = 'border-box'),
                (c[ho] = ma(n, mn) + Pt),
                (c[mo] = ma(n, Ot) + Pt),
                (c[St] = d[or] = d[n1] = d[t1] = '0'),
                sl(l),
                (d[ho] = d['max' + pl] = o[ho]),
                (d[mo] = d['max' + _d] = o[mo]),
                (d[St] = o[St]),
                n.parentNode !== i && (n.parentNode.insertBefore(i, n), i.appendChild(n)),
                (n._gsap.swappedIn = !0);
        }
    },
    Bv = /([A-Z])/g,
    sl = function (n) {
        if (n) {
            var i = n.t.style,
                o = n.length,
                l = 0,
                u,
                c;
            for ((n.t._gsap || ne.core.getCache(n.t)).uncache = 1; l < o; l += 2)
                (c = n[l + 1]),
                    (u = n[l]),
                    c ? (i[u] = c) : i[u] && i.removeProperty(u.replace(Bv, '-$1').toLowerCase());
        }
    },
    Wu = function (n) {
        for (var i = ta.length, o = n.style, l = [], u = 0; u < i; u++) l.push(ta[u], o[ta[u]]);
        return (l.t = n), l;
    },
    Uv = function (n, i, o) {
        for (var l = [], u = n.length, c = o ? 8 : 0, d; c < u; c += 2)
            (d = n[c]), l.push(d, d in i ? i[d] : n[c + 1]);
        return (l.t = n.t), l;
    },
    na = { left: 0, top: 0 },
    M0 = function (n, i, o, l, u, c, d, h, g, _, w, y, v, T) {
        gn(n) && (n = n(h)),
            $n(n) &&
                n.substr(0, 3) === 'max' &&
                (n = y + (n.charAt(4) === '=' ? bu('0' + n.substr(3), o) : 0));
        var x = v ? v.time() : 0,
            O,
            F,
            A;
        if ((v && v.seek(0), isNaN(n) || (n = +n), ns(n)))
            v && (n = ne.utils.mapRange(v.scrollTrigger.start, v.scrollTrigger.end, 0, y, n)),
                d && Ju(d, o, l, !0);
        else {
            gn(i) && (i = i(h));
            var U = (n || '0').split(' '),
                D,
                I,
                V,
                L;
            (A = On(i, h) || Je),
                (D = ei(A) || {}),
                (!D || (!D.left && !D.top)) &&
                    lr(A).display === 'none' &&
                    ((L = A.style.display),
                    (A.style.display = 'block'),
                    (D = ei(A)),
                    L ? (A.style.display = L) : A.style.removeProperty('display')),
                (I = bu(U[0], D[l.d])),
                (V = bu(U[1] || '0', o)),
                (n = D[l.p] - g[l.p] - _ + I + u - V),
                d && Ju(d, V, l, o - V < 20 || (d._isStart && V > 20)),
                (o -= o - V);
        }
        if ((T && ((h[T] = n || -0.001), n < 0 && (n = 0)), c)) {
            var X = n + o,
                $ = c._isStart;
            (O = 'scroll' + l.d2),
                Ju(
                    c,
                    X,
                    l,
                    ($ && X > 20) ||
                        (!$ && (w ? Math.max(Je[O], Cr[O]) : c.parentNode[O]) <= X + 1),
                ),
                w && ((g = ei(d)), w && (c.style[l.op.p] = g[l.op.p] - l.op.m - c._offset + Pt));
        }
        return (
            v &&
                A &&
                ((O = ei(A)),
                v.seek(y),
                (F = ei(A)),
                (v._caScrollDist = O[l.p] - F[l.p]),
                (n = (n / v._caScrollDist) * y)),
            v && v.seek(x),
            v ? n : Math.round(n)
        );
    },
    Vv = /(webkit|moz|length|cssText|inset)/i,
    R0 = function (n, i, o, l) {
        if (n.parentNode !== i) {
            var u = n.style,
                c,
                d;
            if (i === Je) {
                (n._stOrig = u.cssText), (d = lr(n));
                for (c in d)
                    !+c &&
                        !Vv.test(c) &&
                        d[c] &&
                        typeof u[c] == 'string' &&
                        c !== '0' &&
                        (u[c] = d[c]);
                (u.top = o), (u.left = l);
            } else u.cssText = n._stOrig;
            (ne.core.getCache(n).uncache = 1), i.appendChild(n);
        }
    },
    u1 = function (n, i, o) {
        var l = i,
            u = l;
        return function (c) {
            var d = Math.round(n());
            return (
                d !== l &&
                    d !== u &&
                    Math.abs(d - l) > 3 &&
                    Math.abs(d - u) > 3 &&
                    ((c = d), o && o()),
                (u = l),
                (l = c),
                c
            );
        };
    },
    Yu = function (n, i, o) {
        var l = {};
        (l[i.p] = '+=' + o), ne.set(n, l);
    },
    z0 = function (n, i) {
        var o = Fi(n, i),
            l = '_scroll' + i.p2,
            u = function c(d, h, g, _, w) {
                var y = c.tween,
                    v = h.onComplete,
                    T = {};
                g = g || o();
                var x = u1(o, g, function () {
                    y.kill(), (c.tween = 0);
                });
                return (
                    (w = (_ && w) || 0),
                    (_ = _ || d - g),
                    y && y.kill(),
                    (h[l] = d),
                    (h.inherit = !1),
                    (h.modifiers = T),
                    (T[l] = function () {
                        return x(g + _ * y.ratio + w * y.ratio * y.ratio);
                    }),
                    (h.onUpdate = function () {
                        De.cache++, c.tween && ni();
                    }),
                    (h.onComplete = function () {
                        (c.tween = 0), v && v.call(y);
                    }),
                    (y = c.tween = ne.to(n, h)),
                    y
                );
            };
        return (
            (n[l] = o),
            (o.wheelHandler = function () {
                return u.tween && u.tween.kill() && (u.tween = 0);
            }),
            At(n, 'wheel', o.wheelHandler),
            Le.isTouch && At(n, 'touchmove', o.wheelHandler),
            u
        );
    },
    Le = (function () {
        function f(i, o) {
            Zo || f.register(ne) || console.warn('Please gsap.registerPlugin(ScrollTrigger)'),
                Wf(this),
                this.init(i, o);
        }
        var n = f.prototype;
        return (
            (n.init = function (o, l) {
                if (((this.progress = this.start = 0), this.vars && this.kill(!0, !0), !es)) {
                    this.update = this.refresh = this.kill = Lr;
                    return;
                }
                o = T0($n(o) || ns(o) || o.nodeType ? { trigger: o } : o, Vu);
                var u = o,
                    c = u.onUpdate,
                    d = u.toggleClass,
                    h = u.id,
                    g = u.onToggle,
                    _ = u.onRefresh,
                    w = u.scrub,
                    y = u.trigger,
                    v = u.pin,
                    T = u.pinSpacing,
                    x = u.invalidateOnRefresh,
                    O = u.anticipatePin,
                    F = u.onScrubComplete,
                    A = u.onSnapComplete,
                    U = u.once,
                    D = u.snap,
                    I = u.pinReparent,
                    V = u.pinSpacer,
                    L = u.containerAnimation,
                    X = u.fastScrollEnd,
                    $ = u.preventOverlaps,
                    Q = o.horizontal || (o.containerAnimation && o.horizontal !== !1) ? mn : Ot,
                    pe = !w && w !== 0,
                    q = On(o.scroller || Ae),
                    he = ne.core.getCache(q),
                    ge = yo(q),
                    ke =
                        ('pinType' in o ? o.pinType : Li(q, 'pinType') || (ge && 'fixed')) ===
                        'fixed',
                    fe = [o.onEnter, o.onLeave, o.onEnterBack, o.onLeaveBack],
                    ee = pe && o.toggleActions.split(' '),
                    W = 'markers' in o ? o.markers : Vu.markers,
                    b = ge ? 0 : parseFloat(lr(q)['border' + Q.p2 + pl]) || 0,
                    k = this,
                    E =
                        o.onRefreshInit &&
                        function () {
                            return o.onRefreshInit(k);
                        },
                    B = Rv(q, ge, Q),
                    de = zv(q, ge),
                    oe = 0,
                    me = 0,
                    ve = 0,
                    xe = Fi(q, Q),
                    Ce,
                    Te,
                    at,
                    vt,
                    _n,
                    Re,
                    Ge,
                    Bt,
                    Wt,
                    j,
                    Yt,
                    Ln,
                    vn,
                    $e,
                    Kn,
                    Tr,
                    Vr,
                    pt,
                    fr,
                    Ke,
                    Ht,
                    tn,
                    nn,
                    dr,
                    ct,
                    Bi,
                    pr,
                    oi,
                    Er,
                    qn,
                    hr,
                    Ee,
                    mr,
                    Nt,
                    Mt,
                    yn,
                    Pr,
                    $r,
                    Zn;
                if (
                    ((k._startClamp = k._endClamp = !1),
                    (k._dir = Q),
                    (O *= 45),
                    (k.scroller = q),
                    (k.scroll = L ? L.time.bind(L) : xe),
                    (vt = xe()),
                    (k.vars = o),
                    (l = l || o.animation),
                    'refreshPriority' in o && ((Qm = 1), o.refreshPriority === -9999 && (ms = k)),
                    (he.tweenScroll = he.tweenScroll || { top: z0(q, Ot), left: z0(q, mn) }),
                    (k.tweenTo = Ce = he.tweenScroll[Q.p]),
                    (k.scrubDuration = function (Z) {
                        (mr = ns(Z) && Z),
                            mr
                                ? Ee
                                    ? Ee.duration(Z)
                                    : (Ee = ne.to(l, {
                                          ease: 'expo',
                                          totalProgress: '+=0',
                                          inherit: !1,
                                          duration: mr,
                                          paused: !0,
                                          onComplete: function () {
                                              return F && F(k);
                                          },
                                      }))
                                : (Ee && Ee.progress(1).kill(), (Ee = 0));
                    }),
                    l &&
                        ((l.vars.lazy = !1),
                        (l._initted && !k.isReverted) ||
                            (l.vars.immediateRender !== !1 &&
                                o.immediateRender !== !1 &&
                                l.duration() &&
                                l.render(0, !0, !0)),
                        (k.animation = l.pause()),
                        (l.scrollTrigger = k),
                        k.scrubDuration(w),
                        (qn = 0),
                        h || (h = l.vars.id)),
                    D &&
                        ((!oo(D) || D.push) && (D = { snapTo: D }),
                        'scrollBehavior' in Je.style &&
                            ne.set(ge ? [Je, Cr] : q, { scrollBehavior: 'auto' }),
                        De.forEach(function (Z) {
                            return (
                                gn(Z) &&
                                Z.target === (ge ? lt.scrollingElement || Cr : q) &&
                                (Z.smooth = !1)
                            );
                        }),
                        (at = gn(D.snapTo)
                            ? D.snapTo
                            : D.snapTo === 'labels'
                            ? Lv(l)
                            : D.snapTo === 'labelsDirectional'
                            ? jv(l)
                            : D.directional !== !1
                            ? function (Z, ye) {
                                  return vd(D.snapTo)(Z, Zt() - me < 500 ? 0 : ye.direction);
                              }
                            : ne.utils.snap(D.snapTo)),
                        (Nt = D.duration || { min: 0.1, max: 2 }),
                        (Nt = oo(Nt) ? cs(Nt.min, Nt.max) : cs(Nt, Nt)),
                        (Mt = ne
                            .delayedCall(D.delay || mr / 2 || 0.1, function () {
                                var Z = xe(),
                                    ye = Zt() - me < 500,
                                    se = Ce.tween;
                                if (
                                    (ye || Math.abs(k.getVelocity()) < 10) &&
                                    !se &&
                                    !xa &&
                                    oe !== Z
                                ) {
                                    var _e = (Z - Re) / $e,
                                        rt = l && !pe ? l.totalProgress() : _e,
                                        Pe = ye ? 0 : ((rt - hr) / (Zt() - Jl)) * 1e3 || 0,
                                        qe = ne.utils.clamp(-_e, 1 - _e, (Go(Pe / 2) * Pe) / 0.185),
                                        Rt = _e + (D.inertia === !1 ? 0 : qe),
                                        et,
                                        Ye,
                                        je = D,
                                        xn = je.onStart,
                                        He = je.onInterrupt,
                                        rn = je.onComplete;
                                    if (
                                        ((et = at(Rt, k)),
                                        ns(et) || (et = Rt),
                                        (Ye = Math.round(Re + et * $e)),
                                        Z <= Ge && Z >= Re && Ye !== Z)
                                    ) {
                                        if (se && !se._initted && se.data <= Go(Ye - Z)) return;
                                        D.inertia === !1 && (qe = et - _e),
                                            Ce(
                                                Ye,
                                                {
                                                    duration: Nt(
                                                        Go(
                                                            (Math.max(Go(Rt - rt), Go(et - rt)) *
                                                                0.185) /
                                                                Pe /
                                                                0.05 || 0,
                                                        ),
                                                    ),
                                                    ease: D.ease || 'power3',
                                                    data: Go(Ye - Z),
                                                    onInterrupt: function () {
                                                        return Mt.restart(!0) && He && He(k);
                                                    },
                                                    onComplete: function () {
                                                        k.update(),
                                                            (oe = xe()),
                                                            l &&
                                                                (Ee
                                                                    ? Ee.resetTo(
                                                                          'totalProgress',
                                                                          et,
                                                                          l._tTime / l._tDur,
                                                                      )
                                                                    : l.progress(et)),
                                                            (qn = hr =
                                                                l && !pe
                                                                    ? l.totalProgress()
                                                                    : k.progress),
                                                            A && A(k),
                                                            rn && rn(k);
                                                    },
                                                },
                                                Z,
                                                qe * $e,
                                                Ye - Z - qe * $e,
                                            ),
                                            xn && xn(k, Ce.tween);
                                    }
                                } else k.isActive && oe !== Z && Mt.restart(!0);
                            })
                            .pause())),
                    h && (Hf[h] = k),
                    (y = k.trigger = On(y || (v !== !0 && v))),
                    (Zn = y && y._gsap && y._gsap.stRevert),
                    Zn && (Zn = Zn(k)),
                    (v = v === !0 ? y : On(v)),
                    $n(d) && (d = { targets: y, className: d }),
                    v &&
                        (T === !1 ||
                            T === or ||
                            (T =
                                !T &&
                                v.parentNode &&
                                v.parentNode.style &&
                                lr(v.parentNode).display === 'flex'
                                    ? !1
                                    : St),
                        (k.pin = v),
                        (Te = ne.core.getCache(v)),
                        Te.spacer
                            ? (Kn = Te.pinState)
                            : (V &&
                                  ((V = On(V)),
                                  V && !V.nodeType && (V = V.current || V.nativeElement),
                                  (Te.spacerIsNative = !!V),
                                  V && (Te.spacerState = Wu(V))),
                              (Te.spacer = pt = V || lt.createElement('div')),
                              pt.classList.add('pin-spacer'),
                              h && pt.classList.add('pin-spacer-' + h),
                              (Te.pinState = Kn = Wu(v))),
                        o.force3D !== !1 && ne.set(v, { force3D: !0 }),
                        (k.spacer = pt = Te.spacer),
                        (Er = lr(v)),
                        (dr = Er[T + Q.os2]),
                        (Ke = ne.getProperty(v)),
                        (Ht = ne.quickSetter(v, Q.a, Pt)),
                        wf(v, pt, Er),
                        (Vr = Wu(v))),
                    W)
                ) {
                    (Ln = oo(W) ? T0(W, E0) : E0),
                        (j = $u('scroller-start', h, q, Q, Ln, 0)),
                        (Yt = $u('scroller-end', h, q, Q, Ln, 0, j)),
                        (fr = j['offset' + Q.op.d2]);
                    var li = On(Li(q, 'content') || q);
                    (Bt = this.markerStart = $u('start', h, li, Q, Ln, fr, 0, L)),
                        (Wt = this.markerEnd = $u('end', h, li, Q, Ln, fr, 0, L)),
                        L && ($r = ne.quickSetter([Bt, Wt], Q.a, Pt)),
                        !ke &&
                            !(Br.length && Li(q, 'fixedMarkers') === !0) &&
                            (Dv(ge ? Je : q),
                            ne.set([j, Yt], { force3D: !0 }),
                            (Bi = ne.quickSetter(j, Q.a, Pt)),
                            (oi = ne.quickSetter(Yt, Q.a, Pt)));
                }
                if (L) {
                    var Se = L.vars.onUpdate,
                        ue = L.vars.onUpdateParams;
                    L.eventCallback('onUpdate', function () {
                        k.update(0, 0, 1), Se && Se.apply(L, ue || []);
                    });
                }
                if (
                    ((k.previous = function () {
                        return Me[Me.indexOf(k) - 1];
                    }),
                    (k.next = function () {
                        return Me[Me.indexOf(k) + 1];
                    }),
                    (k.revert = function (Z, ye) {
                        if (!ye) return k.kill(!0);
                        var se = Z !== !1 || !k.enabled,
                            _e = qt;
                        se !== k.isReverted &&
                            (se &&
                                ((yn = Math.max(xe(), k.scroll.rec || 0)),
                                (ve = k.progress),
                                (Pr = l && l.progress())),
                            Bt &&
                                [Bt, Wt, j, Yt].forEach(function (rt) {
                                    return (rt.style.display = se ? 'none' : 'block');
                                }),
                            se && ((qt = k), k.update(se)),
                            v && (!I || !k.isActive) && (se ? Iv(v, pt, Kn) : wf(v, pt, lr(v), ct)),
                            se || k.update(se),
                            (qt = _e),
                            (k.isReverted = se));
                    }),
                    (k.refresh = function (Z, ye, se, _e) {
                        if (!((qt || !k.enabled) && !ye)) {
                            if (v && Z && ar) {
                                At(f, 'scrollEnd', i1);
                                return;
                            }
                            !dn && E && E(k),
                                (qt = k),
                                Ce.tween && !se && (Ce.tween.kill(), (Ce.tween = 0)),
                                Ee && Ee.pause(),
                                x && l && l.revert({ kill: !1 }).invalidate(),
                                k.isReverted || k.revert(!0, !0),
                                (k._subPinOffset = !1);
                            var rt = B(),
                                Pe = de(),
                                qe = L ? L.duration() : Fr(q, Q),
                                Rt = $e <= 0.01,
                                et = 0,
                                Ye = _e || 0,
                                je = oo(se) ? se.end : o.end,
                                xn = o.endTrigger || y,
                                He = oo(se)
                                    ? se.start
                                    : o.start || (o.start === 0 || !y ? 0 : v ? '0 0' : '0 100%'),
                                rn = (k.pinnedContainer =
                                    o.pinnedContainer && On(o.pinnedContainer, k)),
                                jn = (y && Math.max(0, Me.indexOf(k))) || 0,
                                yt = jn,
                                xt,
                                Ct,
                                Wr,
                                ko,
                                Oe,
                                ht,
                                wn,
                                Co,
                                Ui,
                                Vi,
                                An,
                                Or,
                                on;
                            for (
                                W &&
                                oo(se) &&
                                ((Or = ne.getProperty(j, Q.p)), (on = ne.getProperty(Yt, Q.p)));
                                yt--;

                            )
                                (ht = Me[yt]),
                                    ht.end || ht.refresh(0, 1) || (qt = k),
                                    (wn = ht.pin),
                                    wn &&
                                        (wn === y || wn === v || wn === rn) &&
                                        !ht.isReverted &&
                                        (Vi || (Vi = []), Vi.unshift(ht), ht.revert(!0, !0)),
                                    ht !== Me[yt] && (jn--, yt--);
                            for (
                                gn(He) && (He = He(k)),
                                    He = w0(He, 'start', k),
                                    Re =
                                        M0(
                                            He,
                                            y,
                                            rt,
                                            Q,
                                            xe(),
                                            Bt,
                                            j,
                                            k,
                                            Pe,
                                            b,
                                            ke,
                                            qe,
                                            L,
                                            k._startClamp && '_startClamp',
                                        ) || (v ? -0.001 : 0),
                                    gn(je) && (je = je(k)),
                                    $n(je) &&
                                        !je.indexOf('+=') &&
                                        (~je.indexOf(' ')
                                            ? (je = ($n(He) ? He.split(' ')[0] : '') + je)
                                            : ((et = bu(je.substr(2), rt)),
                                              (je = $n(He)
                                                  ? He
                                                  : (L
                                                        ? ne.utils.mapRange(
                                                              0,
                                                              L.duration(),
                                                              L.scrollTrigger.start,
                                                              L.scrollTrigger.end,
                                                              Re,
                                                          )
                                                        : Re) + et),
                                              (xn = y))),
                                    je = w0(je, 'end', k),
                                    Ge =
                                        Math.max(
                                            Re,
                                            M0(
                                                je || (xn ? '100% 0' : qe),
                                                xn,
                                                rt,
                                                Q,
                                                xe() + et,
                                                Wt,
                                                Yt,
                                                k,
                                                Pe,
                                                b,
                                                ke,
                                                qe,
                                                L,
                                                k._endClamp && '_endClamp',
                                            ),
                                        ) || -0.001,
                                    et = 0,
                                    yt = jn;
                                yt--;

                            )
                                (ht = Me[yt]),
                                    (wn = ht.pin),
                                    wn &&
                                        ht.start - ht._pinPush <= Re &&
                                        !L &&
                                        ht.end > 0 &&
                                        ((xt =
                                            ht.end -
                                            (k._startClamp ? Math.max(0, ht.start) : ht.start)),
                                        ((wn === y && ht.start - ht._pinPush < Re) || wn === rn) &&
                                            isNaN(He) &&
                                            (et += xt * (1 - ht.progress)),
                                        wn === v && (Ye += xt));
                            if (
                                ((Re += et),
                                (Ge += et),
                                k._startClamp && (k._startClamp += et),
                                k._endClamp &&
                                    !dn &&
                                    ((k._endClamp = Ge || -0.001), (Ge = Math.min(Ge, Fr(q, Q)))),
                                ($e = Ge - Re || ((Re -= 0.01) && 0.001)),
                                Rt && (ve = ne.utils.clamp(0, 1, ne.utils.normalize(Re, Ge, yn))),
                                (k._pinPush = Ye),
                                Bt &&
                                    et &&
                                    ((xt = {}),
                                    (xt[Q.a] = '+=' + et),
                                    rn && (xt[Q.p] = '-=' + xe()),
                                    ne.set([Bt, Wt], xt)),
                                v && !(Yf && k.end >= Fr(q, Q)))
                            )
                                (xt = lr(v)),
                                    (ko = Q === Ot),
                                    (Wr = xe()),
                                    (tn = parseFloat(Ke(Q.a)) + Ye),
                                    !qe &&
                                        Ge > 1 &&
                                        ((An = (ge ? lt.scrollingElement || Cr : q).style),
                                        (An = {
                                            style: An,
                                            value: An['overflow' + Q.a.toUpperCase()],
                                        }),
                                        ge &&
                                            lr(Je)['overflow' + Q.a.toUpperCase()] !== 'scroll' &&
                                            (An.style['overflow' + Q.a.toUpperCase()] = 'scroll')),
                                    wf(v, pt, xt),
                                    (Vr = Wu(v)),
                                    (Ct = ei(v, !0)),
                                    (Co = ke && Fi(q, ko ? mn : Ot)()),
                                    T
                                        ? ((ct = [T + Q.os2, $e + Ye + Pt]),
                                          (ct.t = pt),
                                          (yt = T === St ? ma(v, Q) + $e + Ye : 0),
                                          yt &&
                                              (ct.push(Q.d, yt + Pt),
                                              pt.style.flexBasis !== 'auto' &&
                                                  (pt.style.flexBasis = yt + Pt)),
                                          sl(ct),
                                          rn &&
                                              Me.forEach(function ($i) {
                                                  $i.pin === rn &&
                                                      $i.vars.pinSpacing !== !1 &&
                                                      ($i._subPinOffset = !0);
                                              }),
                                          ke && xe(yn))
                                        : ((yt = ma(v, Q)),
                                          yt &&
                                              pt.style.flexBasis !== 'auto' &&
                                              (pt.style.flexBasis = yt + Pt)),
                                    ke &&
                                        ((Oe = {
                                            top: Ct.top + (ko ? Wr - Re : Co) + Pt,
                                            left: Ct.left + (ko ? Co : Wr - Re) + Pt,
                                            boxSizing: 'border-box',
                                            position: 'fixed',
                                        }),
                                        (Oe[ho] = Oe['max' + pl] = Math.ceil(Ct.width) + Pt),
                                        (Oe[mo] = Oe['max' + _d] = Math.ceil(Ct.height) + Pt),
                                        (Oe[or] =
                                            Oe[or + ps] =
                                            Oe[or + fs] =
                                            Oe[or + hs] =
                                            Oe[or + ds] =
                                                '0'),
                                        (Oe[St] = xt[St]),
                                        (Oe[St + ps] = xt[St + ps]),
                                        (Oe[St + fs] = xt[St + fs]),
                                        (Oe[St + hs] = xt[St + hs]),
                                        (Oe[St + ds] = xt[St + ds]),
                                        (Tr = Uv(Kn, Oe, I)),
                                        dn && xe(0)),
                                    l
                                        ? ((Ui = l._initted),
                                          gf(1),
                                          l.render(l.duration(), !0, !0),
                                          (nn = Ke(Q.a) - tn + $e + Ye),
                                          (pr = Math.abs($e - nn) > 1),
                                          ke && pr && Tr.splice(Tr.length - 2, 2),
                                          l.render(0, !0, !0),
                                          Ui || l.invalidate(!0),
                                          l.parent || l.totalTime(l.totalTime()),
                                          gf(0))
                                        : (nn = $e),
                                    An &&
                                        (An.value
                                            ? (An.style['overflow' + Q.a.toUpperCase()] = An.value)
                                            : An.style.removeProperty('overflow-' + Q.a));
                            else if (y && xe() && !L)
                                for (Ct = y.parentNode; Ct && Ct !== Je; )
                                    Ct._pinOffset && ((Re -= Ct._pinOffset), (Ge -= Ct._pinOffset)),
                                        (Ct = Ct.parentNode);
                            Vi &&
                                Vi.forEach(function ($i) {
                                    return $i.revert(!1, !0);
                                }),
                                (k.start = Re),
                                (k.end = Ge),
                                (vt = _n = dn ? yn : xe()),
                                !L && !dn && (vt < yn && xe(yn), (k.scroll.rec = 0)),
                                k.revert(!1, !0),
                                (me = Zt()),
                                Mt && ((oe = -1), Mt.restart(!0)),
                                (qt = 0),
                                l &&
                                    pe &&
                                    (l._initted || Pr) &&
                                    l.progress() !== Pr &&
                                    l.progress(Pr || 0, !0).render(l.time(), !0, !0),
                                (Rt || ve !== k.progress || L || x) &&
                                    (l &&
                                        !pe &&
                                        l.totalProgress(
                                            L && Re < -0.001 && !ve
                                                ? ne.utils.normalize(Re, Ge, 0)
                                                : ve,
                                            !0,
                                        ),
                                    (k.progress = Rt || (vt - Re) / $e === ve ? 0 : ve)),
                                v && T && (pt._pinOffset = Math.round(k.progress * nn)),
                                Ee && Ee.invalidate(),
                                isNaN(Or) ||
                                    ((Or -= ne.getProperty(j, Q.p)),
                                    (on -= ne.getProperty(Yt, Q.p)),
                                    Yu(j, Q, Or),
                                    Yu(Bt, Q, Or - (_e || 0)),
                                    Yu(Yt, Q, on),
                                    Yu(Wt, Q, on - (_e || 0))),
                                Rt && !dn && k.update(),
                                _ && !dn && !vn && ((vn = !0), _(k), (vn = !1));
                        }
                    }),
                    (k.getVelocity = function () {
                        return ((xe() - _n) / (Zt() - Jl)) * 1e3 || 0;
                    }),
                    (k.endAnimation = function () {
                        ql(k.callbackAnimation),
                            l &&
                                (Ee
                                    ? Ee.progress(1)
                                    : l.paused()
                                    ? pe || ql(l, k.direction < 0, 1)
                                    : ql(l, l.reversed()));
                    }),
                    (k.labelToScroll = function (Z) {
                        return (
                            (l &&
                                l.labels &&
                                (Re || k.refresh() || Re) + (l.labels[Z] / l.duration()) * $e) ||
                            0
                        );
                    }),
                    (k.getTrailing = function (Z) {
                        var ye = Me.indexOf(k),
                            se = k.direction > 0 ? Me.slice(0, ye).reverse() : Me.slice(ye + 1);
                        return (
                            $n(Z)
                                ? se.filter(function (_e) {
                                      return _e.vars.preventOverlaps === Z;
                                  })
                                : se
                        ).filter(function (_e) {
                            return k.direction > 0 ? _e.end <= Re : _e.start >= Ge;
                        });
                    }),
                    (k.update = function (Z, ye, se) {
                        if (!(L && !se && !Z)) {
                            var _e = dn === !0 ? yn : k.scroll(),
                                rt = Z ? 0 : (_e - Re) / $e,
                                Pe = rt < 0 ? 0 : rt > 1 ? 1 : rt || 0,
                                qe = k.progress,
                                Rt,
                                et,
                                Ye,
                                je,
                                xn,
                                He,
                                rn,
                                jn;
                            if (
                                (ye &&
                                    ((_n = vt),
                                    (vt = L ? xe() : _e),
                                    D && ((hr = qn), (qn = l && !pe ? l.totalProgress() : Pe))),
                                O &&
                                    v &&
                                    !qt &&
                                    !Fu &&
                                    ar &&
                                    (!Pe && Re < _e + ((_e - _n) / (Zt() - Jl)) * O
                                        ? (Pe = 1e-4)
                                        : Pe === 1 &&
                                          Ge > _e + ((_e - _n) / (Zt() - Jl)) * O &&
                                          (Pe = 0.9999)),
                                Pe !== qe && k.enabled)
                            ) {
                                if (
                                    ((Rt = k.isActive = !!Pe && Pe < 1),
                                    (et = !!qe && qe < 1),
                                    (He = Rt !== et),
                                    (xn = He || !!Pe != !!qe),
                                    (k.direction = Pe > qe ? 1 : -1),
                                    (k.progress = Pe),
                                    xn &&
                                        !qt &&
                                        ((Ye = Pe && !qe ? 0 : Pe === 1 ? 1 : qe === 1 ? 2 : 3),
                                        pe &&
                                            ((je =
                                                (!He && ee[Ye + 1] !== 'none' && ee[Ye + 1]) ||
                                                ee[Ye]),
                                            (jn =
                                                l &&
                                                (je === 'complete' || je === 'reset' || je in l)))),
                                    $ &&
                                        (He || jn) &&
                                        (jn || w || !l) &&
                                        (gn($)
                                            ? $(k)
                                            : k.getTrailing($).forEach(function (Wr) {
                                                  return Wr.endAnimation();
                                              })),
                                    pe ||
                                        (Ee && !qt && !Fu
                                            ? (Ee._dp._time - Ee._start !== Ee._time &&
                                                  Ee.render(Ee._dp._time - Ee._start),
                                              Ee.resetTo
                                                  ? Ee.resetTo(
                                                        'totalProgress',
                                                        Pe,
                                                        l._tTime / l._tDur,
                                                    )
                                                  : ((Ee.vars.totalProgress = Pe),
                                                    Ee.invalidate().restart()))
                                            : l && l.totalProgress(Pe, !!(qt && (me || Z)))),
                                    v)
                                ) {
                                    if ((Z && T && (pt.style[T + Q.os2] = dr), !ke))
                                        Ht(ts(tn + nn * Pe));
                                    else if (xn) {
                                        if (
                                            ((rn =
                                                !Z && Pe > qe && Ge + 1 > _e && _e + 1 >= Fr(q, Q)),
                                            I)
                                        )
                                            if (!Z && (Rt || rn)) {
                                                var yt = ei(v, !0),
                                                    xt = _e - Re;
                                                R0(
                                                    v,
                                                    Je,
                                                    yt.top + (Q === Ot ? xt : 0) + Pt,
                                                    yt.left + (Q === Ot ? 0 : xt) + Pt,
                                                );
                                            } else R0(v, pt);
                                        sl(Rt || rn ? Tr : Vr),
                                            (pr && Pe < 1 && Rt) ||
                                                Ht(tn + (Pe === 1 && !rn ? nn : 0));
                                    }
                                }
                                D && !Ce.tween && !qt && !Fu && Mt.restart(!0),
                                    d &&
                                        (He || (U && Pe && (Pe < 1 || !_f))) &&
                                        Cs(d.targets).forEach(function (Wr) {
                                            return Wr.classList[Rt || U ? 'add' : 'remove'](
                                                d.className,
                                            );
                                        }),
                                    c && !pe && !Z && c(k),
                                    xn && !qt
                                        ? (pe &&
                                              (jn &&
                                                  (je === 'complete'
                                                      ? l.pause().totalProgress(1)
                                                      : je === 'reset'
                                                      ? l.restart(!0).pause()
                                                      : je === 'restart'
                                                      ? l.restart(!0)
                                                      : l[je]()),
                                              c && c(k)),
                                          (He || !_f) &&
                                              (g && He && yf(k, g),
                                              fe[Ye] && yf(k, fe[Ye]),
                                              U && (Pe === 1 ? k.kill(!1, 1) : (fe[Ye] = 0)),
                                              He ||
                                                  ((Ye = Pe === 1 ? 1 : 3),
                                                  fe[Ye] && yf(k, fe[Ye]))),
                                          X &&
                                              !Rt &&
                                              Math.abs(k.getVelocity()) > (ns(X) ? X : 2500) &&
                                              (ql(k.callbackAnimation),
                                              Ee
                                                  ? Ee.progress(1)
                                                  : ql(l, je === 'reverse' ? 1 : !Pe, 1)))
                                        : pe && c && !qt && c(k);
                            }
                            if (oi) {
                                var Ct = L ? (_e / L.duration()) * (L._caScrollDist || 0) : _e;
                                Bi(Ct + (j._isFlipped ? 1 : 0)), oi(Ct);
                            }
                            $r && $r((-_e / L.duration()) * (L._caScrollDist || 0));
                        }
                    }),
                    (k.enable = function (Z, ye) {
                        k.enabled ||
                            ((k.enabled = !0),
                            At(q, 'resize', rs),
                            ge || At(q, 'scroll', Ko),
                            E && At(f, 'refreshInit', E),
                            Z !== !1 && ((k.progress = ve = 0), (vt = _n = oe = xe())),
                            ye !== !1 && k.refresh());
                    }),
                    (k.getTween = function (Z) {
                        return Z && Ce ? Ce.tween : Ee;
                    }),
                    (k.setPositions = function (Z, ye, se, _e) {
                        if (L) {
                            var rt = L.scrollTrigger,
                                Pe = L.duration(),
                                qe = rt.end - rt.start;
                            (Z = rt.start + (qe * Z) / Pe), (ye = rt.start + (qe * ye) / Pe);
                        }
                        k.refresh(
                            !1,
                            !1,
                            {
                                start: S0(Z, se && !!k._startClamp),
                                end: S0(ye, se && !!k._endClamp),
                            },
                            _e,
                        ),
                            k.update();
                    }),
                    (k.adjustPinSpacing = function (Z) {
                        if (ct && Z) {
                            var ye = ct.indexOf(Q.d) + 1;
                            (ct[ye] = parseFloat(ct[ye]) + Z + Pt),
                                (ct[1] = parseFloat(ct[1]) + Z + Pt),
                                sl(ct);
                        }
                    }),
                    (k.disable = function (Z, ye) {
                        if (
                            k.enabled &&
                            (Z !== !1 && k.revert(!0, !0),
                            (k.enabled = k.isActive = !1),
                            ye || (Ee && Ee.pause()),
                            (yn = 0),
                            Te && (Te.uncache = 1),
                            E && jt(f, 'refreshInit', E),
                            Mt && (Mt.pause(), Ce.tween && Ce.tween.kill() && (Ce.tween = 0)),
                            !ge)
                        ) {
                            for (var se = Me.length; se--; )
                                if (Me[se].scroller === q && Me[se] !== k) return;
                            jt(q, 'resize', rs), ge || jt(q, 'scroll', Ko);
                        }
                    }),
                    (k.kill = function (Z, ye) {
                        k.disable(Z, ye), Ee && !ye && Ee.kill(), h && delete Hf[h];
                        var se = Me.indexOf(k);
                        se >= 0 && Me.splice(se, 1),
                            se === fn && ea > 0 && fn--,
                            (se = 0),
                            Me.forEach(function (_e) {
                                return _e.scroller === k.scroller && (se = 1);
                            }),
                            se || dn || (k.scroll.rec = 0),
                            l &&
                                ((l.scrollTrigger = null),
                                Z && l.revert({ kill: !1 }),
                                ye || l.kill()),
                            Bt &&
                                [Bt, Wt, j, Yt].forEach(function (_e) {
                                    return _e.parentNode && _e.parentNode.removeChild(_e);
                                }),
                            ms === k && (ms = 0),
                            v &&
                                (Te && (Te.uncache = 1),
                                (se = 0),
                                Me.forEach(function (_e) {
                                    return _e.pin === v && se++;
                                }),
                                se || (Te.spacer = 0)),
                            o.onKill && o.onKill(k);
                    }),
                    Me.push(k),
                    k.enable(!1, !1),
                    Zn && Zn(k),
                    l && l.add && !$e)
                ) {
                    var ze = k.update;
                    (k.update = function () {
                        (k.update = ze), Re || Ge || k.refresh();
                    }),
                        ne.delayedCall(0.01, k.update),
                        ($e = 0.01),
                        (Re = Ge = 0);
                } else k.refresh();
                v && Fv();
            }),
            (f.register = function (o) {
                return (
                    Zo || ((ne = o || bm()), Zm() && window.document && f.enable(), (Zo = es)), Zo
                );
            }),
            (f.defaults = function (o) {
                if (o) for (var l in o) Vu[l] = o[l];
                return Vu;
            }),
            (f.disable = function (o, l) {
                (es = 0),
                    Me.forEach(function (c) {
                        return c[l ? 'kill' : 'disable'](o);
                    }),
                    jt(Ae, 'wheel', Ko),
                    jt(lt, 'scroll', Ko),
                    clearInterval(Au),
                    jt(lt, 'touchcancel', Lr),
                    jt(Je, 'touchstart', Lr),
                    Bu(jt, lt, 'pointerdown,touchstart,mousedown', k0),
                    Bu(jt, lt, 'pointerup,touchend,mouseup', C0),
                    pa.kill(),
                    Iu(jt);
                for (var u = 0; u < De.length; u += 3)
                    Uu(jt, De[u], De[u + 1]), Uu(jt, De[u], De[u + 2]);
            }),
            (f.enable = function () {
                if (
                    ((Ae = window),
                    (lt = document),
                    (Cr = lt.documentElement),
                    (Je = lt.body),
                    ne &&
                        ((Cs = ne.utils.toArray),
                        (cs = ne.utils.clamp),
                        (Wf = ne.core.context || Lr),
                        (gf = ne.core.suppressOverwrites || Lr),
                        (pd = Ae.history.scrollRestoration || 'auto'),
                        (Xf = Ae.pageYOffset),
                        ne.core.globals('ScrollTrigger', f),
                        Je))
                ) {
                    (es = 1),
                        (ll = document.createElement('div')),
                        (ll.style.height = '100vh'),
                        (ll.style.position = 'absolute'),
                        s1(),
                        Mv(),
                        _t.register(ne),
                        (f.isTouch = _t.isTouch),
                        (Ei = _t.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
                        ($f = _t.isTouch === 1),
                        At(Ae, 'wheel', Ko),
                        (Xm = [Ae, lt, Cr, Je]),
                        ne.matchMedia
                            ? ((f.matchMedia = function (h) {
                                  var g = ne.matchMedia(),
                                      _;
                                  for (_ in h) g.add(_, h[_]);
                                  return g;
                              }),
                              ne.addEventListener('matchMediaInit', function () {
                                  return yd();
                              }),
                              ne.addEventListener('matchMediaRevert', function () {
                                  return o1();
                              }),
                              ne.addEventListener('matchMedia', function () {
                                  so(0, 1), wo('matchMedia');
                              }),
                              ne.matchMedia('(orientation: portrait)', function () {
                                  return xf(), xf;
                              }))
                            : console.warn('Requires GSAP 3.11.0 or later'),
                        xf(),
                        At(lt, 'scroll', Ko);
                    var o = Je.style,
                        l = o.borderTopStyle,
                        u = ne.core.Animation.prototype,
                        c,
                        d;
                    for (
                        u.revert ||
                            Object.defineProperty(u, 'revert', {
                                value: function () {
                                    return this.time(-0.01, !0);
                                },
                            }),
                            o.borderTopStyle = 'solid',
                            c = ei(Je),
                            Ot.m = Math.round(c.top + Ot.sc()) || 0,
                            mn.m = Math.round(c.left + mn.sc()) || 0,
                            l ? (o.borderTopStyle = l) : o.removeProperty('border-top-style'),
                            Au = setInterval(P0, 250),
                            ne.delayedCall(0.5, function () {
                                return (Fu = 0);
                            }),
                            At(lt, 'touchcancel', Lr),
                            At(Je, 'touchstart', Lr),
                            Bu(At, lt, 'pointerdown,touchstart,mousedown', k0),
                            Bu(At, lt, 'pointerup,touchend,mouseup', C0),
                            Vf = ne.utils.checkPrefix('transform'),
                            ta.push(Vf),
                            Zo = Zt(),
                            pa = ne.delayedCall(0.2, so).pause(),
                            bo = [
                                lt,
                                'visibilitychange',
                                function () {
                                    var h = Ae.innerWidth,
                                        g = Ae.innerHeight;
                                    lt.hidden
                                        ? ((y0 = h), (x0 = g))
                                        : (y0 !== h || x0 !== g) && rs();
                                },
                                lt,
                                'DOMContentLoaded',
                                so,
                                Ae,
                                'load',
                                so,
                                Ae,
                                'resize',
                                rs,
                            ],
                            Iu(At),
                            Me.forEach(function (h) {
                                return h.enable(0, 1);
                            }),
                            d = 0;
                        d < De.length;
                        d += 3
                    )
                        Uu(jt, De[d], De[d + 1]), Uu(jt, De[d], De[d + 2]);
                }
            }),
            (f.config = function (o) {
                'limitCallbacks' in o && (_f = !!o.limitCallbacks);
                var l = o.syncInterval;
                (l && clearInterval(Au)) || ((Au = l) && setInterval(P0, l)),
                    'ignoreMobileResize' in o && ($f = f.isTouch === 1 && o.ignoreMobileResize),
                    'autoRefreshEvents' in o &&
                        (Iu(jt) || Iu(At, o.autoRefreshEvents || 'none'),
                        (Gm = (o.autoRefreshEvents + '').indexOf('resize') === -1));
            }),
            (f.scrollerProxy = function (o, l) {
                var u = On(o),
                    c = De.indexOf(u),
                    d = yo(u);
                ~c && De.splice(c, d ? 6 : 2),
                    l && (d ? Br.unshift(Ae, l, Je, l, Cr, l) : Br.unshift(u, l));
            }),
            (f.clearMatchMedia = function (o) {
                Me.forEach(function (l) {
                    return l._ctx && l._ctx.query === o && l._ctx.kill(!0, !0);
                });
            }),
            (f.isInViewport = function (o, l, u) {
                var c = ($n(o) ? On(o) : o).getBoundingClientRect(),
                    d = c[u ? ho : mo] * l || 0;
                return u
                    ? c.right - d > 0 && c.left + d < Ae.innerWidth
                    : c.bottom - d > 0 && c.top + d < Ae.innerHeight;
            }),
            (f.positionInViewport = function (o, l, u) {
                $n(o) && (o = On(o));
                var c = o.getBoundingClientRect(),
                    d = c[u ? ho : mo],
                    h =
                        l == null
                            ? d / 2
                            : l in ga
                            ? ga[l] * d
                            : ~l.indexOf('%')
                            ? (parseFloat(l) * d) / 100
                            : parseFloat(l) || 0;
                return u ? (c.left + h) / Ae.innerWidth : (c.top + h) / Ae.innerHeight;
            }),
            (f.killAll = function (o) {
                if (
                    (Me.slice(0).forEach(function (u) {
                        return u.vars.id !== 'ScrollSmoother' && u.kill();
                    }),
                    o !== !0)
                ) {
                    var l = xo.killAll || [];
                    (xo = {}),
                        l.forEach(function (u) {
                            return u();
                        });
                }
            }),
            f
        );
    })();
Le.version = '3.12.5';
Le.saveStyles = function (f) {
    return f
        ? Cs(f).forEach(function (n) {
              if (n && n.style) {
                  var i = Vn.indexOf(n);
                  i >= 0 && Vn.splice(i, 5),
                      Vn.push(
                          n,
                          n.style.cssText,
                          n.getBBox && n.getAttribute('transform'),
                          ne.core.getCache(n),
                          Wf(),
                      );
              }
          })
        : Vn;
};
Le.revert = function (f, n) {
    return yd(!f, n);
};
Le.create = function (f, n) {
    return new Le(f, n);
};
Le.refresh = function (f) {
    return f ? rs() : (Zo || Le.register()) && so(!0);
};
Le.update = function (f) {
    return ++De.cache && ni(f === !0 ? 2 : 0);
};
Le.clearScrollMemory = l1;
Le.maxScroll = function (f, n) {
    return Fr(f, n ? mn : Ot);
};
Le.getScrollFunc = function (f, n) {
    return Fi(On(f), n ? mn : Ot);
};
Le.getById = function (f) {
    return Hf[f];
};
Le.getAll = function () {
    return Me.filter(function (f) {
        return f.vars.id !== 'ScrollSmoother';
    });
};
Le.isScrolling = function () {
    return !!ar;
};
Le.snapDirectional = vd;
Le.addEventListener = function (f, n) {
    var i = xo[f] || (xo[f] = []);
    ~i.indexOf(n) || i.push(n);
};
Le.removeEventListener = function (f, n) {
    var i = xo[f],
        o = i && i.indexOf(n);
    o >= 0 && i.splice(o, 1);
};
Le.batch = function (f, n) {
    var i = [],
        o = {},
        l = n.interval || 0.016,
        u = n.batchMax || 1e9,
        c = function (g, _) {
            var w = [],
                y = [],
                v = ne
                    .delayedCall(l, function () {
                        _(w, y), (w = []), (y = []);
                    })
                    .pause();
            return function (T) {
                w.length || v.restart(!0),
                    w.push(T.trigger),
                    y.push(T),
                    u <= w.length && v.progress(1);
            };
        },
        d;
    for (d in n)
        o[d] = d.substr(0, 2) === 'on' && gn(n[d]) && d !== 'onRefreshInit' ? c(d, n[d]) : n[d];
    return (
        gn(u) &&
            ((u = u()),
            At(Le, 'refresh', function () {
                return (u = n.batchMax());
            })),
        Cs(f).forEach(function (h) {
            var g = {};
            for (d in o) g[d] = o[d];
            (g.trigger = h), i.push(Le.create(g));
        }),
        i
    );
};
var D0 = function (n, i, o, l) {
        return i > l ? n(l) : i < 0 && n(0), o > l ? (l - i) / (o - i) : o < 0 ? i / (i - o) : 1;
    },
    Sf = function f(n, i) {
        i === !0
            ? n.style.removeProperty('touch-action')
            : (n.style.touchAction =
                  i === !0 ? 'auto' : i ? 'pan-' + i + (_t.isTouch ? ' pinch-zoom' : '') : 'none'),
            n === Cr && f(Je, i);
    },
    Hu = { auto: 1, scroll: 1 },
    $v = function (n) {
        var i = n.event,
            o = n.target,
            l = n.axis,
            u = (i.changedTouches ? i.changedTouches[0] : i).target,
            c = u._gsap || ne.core.getCache(u),
            d = Zt(),
            h;
        if (!c._isScrollT || d - c._isScrollT > 2e3) {
            for (
                ;
                u &&
                u !== Je &&
                ((u.scrollHeight <= u.clientHeight && u.scrollWidth <= u.clientWidth) ||
                    !(Hu[(h = lr(u)).overflowY] || Hu[h.overflowX]));

            )
                u = u.parentNode;
            (c._isScroll =
                u && u !== o && !yo(u) && (Hu[(h = lr(u)).overflowY] || Hu[h.overflowX])),
                (c._isScrollT = d);
        }
        (c._isScroll || l === 'x') && (i.stopPropagation(), (i._gsapAllow = !0));
    },
    a1 = function (n, i, o, l) {
        return _t.create({
            target: n,
            capture: !0,
            debounce: !1,
            lockAxis: !0,
            type: i,
            onWheel: (l = l && $v),
            onPress: l,
            onDrag: l,
            onScroll: l,
            onEnable: function () {
                return o && At(lt, _t.eventTypes[0], j0, !1, !0);
            },
            onDisable: function () {
                return jt(lt, _t.eventTypes[0], j0, !0);
            },
        });
    },
    Wv = /(input|label|select|textarea)/i,
    L0,
    j0 = function (n) {
        var i = Wv.test(n.target.tagName);
        (i || L0) && ((n._gsapAllow = !0), (L0 = i));
    },
    Yv = function (n) {
        oo(n) || (n = {}),
            (n.preventDefault = n.isNormalizer = n.allowClicks = !0),
            n.type || (n.type = 'wheel,touch'),
            (n.debounce = !!n.debounce),
            (n.id = n.id || 'normalizer');
        var i = n,
            o = i.normalizeScrollX,
            l = i.momentum,
            u = i.allowNestedScroll,
            c = i.onRelease,
            d,
            h,
            g = On(n.target) || Cr,
            _ = ne.core.globals().ScrollSmoother,
            w = _ && _.get(),
            y =
                Ei &&
                ((n.content && On(n.content)) ||
                    (w && n.content !== !1 && !w.smooth() && w.content())),
            v = Fi(g, Ot),
            T = Fi(g, mn),
            x = 1,
            O =
                (_t.isTouch && Ae.visualViewport
                    ? Ae.visualViewport.scale * Ae.visualViewport.width
                    : Ae.outerWidth) / Ae.innerWidth,
            F = 0,
            A = gn(l)
                ? function () {
                      return l(d);
                  }
                : function () {
                      return l || 2.8;
                  },
            U,
            D,
            I = a1(g, n.type, !0, u),
            V = function () {
                return (D = !1);
            },
            L = Lr,
            X = Lr,
            $ = function () {
                (h = Fr(g, Ot)), (X = cs(Ei ? 1 : 0, h)), o && (L = cs(0, Fr(g, mn))), (U = go);
            },
            Q = function () {
                (y._gsap.y = ts(parseFloat(y._gsap.y) + v.offset) + 'px'),
                    (y.style.transform =
                        'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ' +
                        parseFloat(y._gsap.y) +
                        ', 0, 1)'),
                    (v.offset = v.cacheID = 0);
            },
            pe = function () {
                if (D) {
                    requestAnimationFrame(V);
                    var W = ts(d.deltaY / 2),
                        b = X(v.v - W);
                    if (y && b !== v.v + v.offset) {
                        v.offset = b - v.v;
                        var k = ts((parseFloat(y && y._gsap.y) || 0) - v.offset);
                        (y.style.transform =
                            'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ' + k + ', 0, 1)'),
                            (y._gsap.y = k + 'px'),
                            (v.cacheID = De.cache),
                            ni();
                    }
                    return !0;
                }
                v.offset && Q(), (D = !0);
            },
            q,
            he,
            ge,
            ke,
            fe = function () {
                $(),
                    q.isActive() &&
                        q.vars.scrollY > h &&
                        (v() > h ? q.progress(1) && v(h) : q.resetTo('scrollY', h));
            };
        return (
            y && ne.set(y, { y: '+=0' }),
            (n.ignoreCheck = function (ee) {
                return (
                    (Ei && ee.type === 'touchmove' && pe()) ||
                    (x > 1.05 && ee.type !== 'touchstart') ||
                    d.isGesturing ||
                    (ee.touches && ee.touches.length > 1)
                );
            }),
            (n.onPress = function () {
                D = !1;
                var ee = x;
                (x = ts(((Ae.visualViewport && Ae.visualViewport.scale) || 1) / O)),
                    q.pause(),
                    ee !== x && Sf(g, x > 1.01 ? !0 : o ? !1 : 'x'),
                    (he = T()),
                    (ge = v()),
                    $(),
                    (U = go);
            }),
            (n.onRelease = n.onGestureStart =
                function (ee, W) {
                    if ((v.offset && Q(), !W)) ke.restart(!0);
                    else {
                        De.cache++;
                        var b = A(),
                            k,
                            E;
                        o &&
                            ((k = T()),
                            (E = k + (b * 0.05 * -ee.velocityX) / 0.227),
                            (b *= D0(T, k, E, Fr(g, mn))),
                            (q.vars.scrollX = L(E))),
                            (k = v()),
                            (E = k + (b * 0.05 * -ee.velocityY) / 0.227),
                            (b *= D0(v, k, E, Fr(g, Ot))),
                            (q.vars.scrollY = X(E)),
                            q.invalidate().duration(b).play(0.01),
                            ((Ei && q.vars.scrollY >= h) || k >= h - 1) &&
                                ne.to({}, { onUpdate: fe, duration: b });
                    }
                    c && c(ee);
                }),
            (n.onWheel = function () {
                q._ts && q.pause(), Zt() - F > 1e3 && ((U = 0), (F = Zt()));
            }),
            (n.onChange = function (ee, W, b, k, E) {
                if (
                    (go !== U && $(),
                    W && o && T(L(k[2] === W ? he + (ee.startX - ee.x) : T() + W - k[1])),
                    b)
                ) {
                    v.offset && Q();
                    var B = E[2] === b,
                        de = B ? ge + ee.startY - ee.y : v() + b - E[1],
                        oe = X(de);
                    B && de !== oe && (ge += oe - de), v(oe);
                }
                (b || W) && ni();
            }),
            (n.onEnable = function () {
                Sf(g, o ? !1 : 'x'),
                    Le.addEventListener('refresh', fe),
                    At(Ae, 'resize', fe),
                    v.smooth &&
                        ((v.target.style.scrollBehavior = 'auto'), (v.smooth = T.smooth = !1)),
                    I.enable();
            }),
            (n.onDisable = function () {
                Sf(g, !0), jt(Ae, 'resize', fe), Le.removeEventListener('refresh', fe), I.kill();
            }),
            (n.lockAxis = n.lockAxis !== !1),
            (d = new _t(n)),
            (d.iOS = Ei),
            Ei && !v() && v(1),
            Ei && ne.ticker.add(Lr),
            (ke = d._dc),
            (q = ne.to(d, {
                ease: 'power4',
                paused: !0,
                inherit: !1,
                scrollX: o ? '+=0.1' : '+=0',
                scrollY: '+=0.1',
                modifiers: {
                    scrollY: u1(v, v(), function () {
                        return q.pause();
                    }),
                },
                onUpdate: ni,
                onComplete: ke.vars.onComplete,
            })),
            d
        );
    };
Le.sort = function (f) {
    return Me.sort(
        f ||
            function (n, i) {
                return (
                    (n.vars.refreshPriority || 0) * -1e6 +
                    n.start -
                    (i.start + (i.vars.refreshPriority || 0) * -1e6)
                );
            },
    );
};
Le.observe = function (f) {
    return new _t(f);
};
Le.normalizeScroll = function (f) {
    if (typeof f > 'u') return cn;
    if (f === !0 && cn) return cn.enable();
    if (f === !1) {
        cn && cn.kill(), (cn = f);
        return;
    }
    var n = f instanceof _t ? f : Yv(f);
    return cn && cn.target === n.target && cn.kill(), yo(n.target) && (cn = n), n;
};
Le.core = {
    _getVelocityProp: Uf,
    _inputObserver: a1,
    _scrollers: De,
    _proxies: Br,
    bridge: {
        ss: function () {
            ar || wo('scrollStart'), (ar = Zt());
        },
        ref: function () {
            return qt;
        },
    },
};
bm() && ne.registerPlugin(Le);
const wa = ({ title: f, id: n, rightIcon: i, leftIcon: o, containerClass: l }) =>
    R.jsxs('button', {
        id: n,
        className: `group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${l}`,
        children: [
            o,
            R.jsx('span', {
                className: 'relative incline-flex overflow-hidden font-general text-xs uppercase',
                children: R.jsx('div', { children: f }),
            }),
            i,
        ],
    });
hn.registerPlugin(Le);
const Hv = () => {
        const [f, n] = Be.useState(1),
            [i, o] = Be.useState(!1),
            [l, u] = Be.useState(!0),
            [c, d] = Be.useState(0),
            h = 4,
            g = Be.useRef(null),
            _ = () => {
                d((T) => T + 1);
            },
            w = (f % h) + 1,
            y = () => {
                o(!0), n(w);
            };
        Be.useEffect(() => {
            c === h - 1 && u(!1);
        }, [c]),
            ks(
                () => {
                    i &&
                        (hn.set('#next-video', { visibility: 'visible' }),
                        hn.to('#next-video', {
                            transformOrigin: 'center center',
                            scale: 1,
                            width: '100%',
                            height: '100%',
                            duration: 1,
                            ease: 'power1.inOut',
                            onStart: () => {
                                g.current.play();
                            },
                        }),
                        hn.from('#current-video', {
                            transformOrigin: 'center center',
                            scale: 0,
                            duration: 1.5,
                            ease: 'power1.inOut',
                        }));
                },
                { dependencies: [f], revertOnUpdate: !0 },
            ),
            ks(() => {
                hn.set('#video-frame', {
                    clipPath: 'polygon(14% 0%, 72% 0%, 90% 90%, 0% 100%)',
                    borderRadius: '0 0 40% 10%',
                }),
                    hn.from('#video-frame', {
                        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                        borderRadius: '0 0 0 0',
                        ease: 'power1.inOut',
                        scrollTrigger: {
                            trigger: '#video-frame',
                            start: 'center center',
                            end: 'bottom center',
                            scrub: !0,
                        },
                    });
            });
        const v = (T) => `videos/hero-${T}.mp4`;
        return R.jsxs('div', {
            className: 'relative h-dvh w-screen overflow-x-hidden',
            children: [
                l &&
                    R.jsx('div', {
                        className:
                            'flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50',
                        children: R.jsxs('div', {
                            className: 'three-body',
                            children: [
                                R.jsx('div', { className: 'three-body__dot' }),
                                R.jsx('div', { className: 'three-body__dot' }),
                                R.jsx('div', { className: 'three-body__dot' }),
                            ],
                        }),
                    }),
                R.jsxs('div', {
                    id: 'video-frame',
                    className: 'relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75',
                    children: [
                        R.jsxs('div', {
                            children: [
                                R.jsx('div', {
                                    className:
                                        'mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg',
                                    children: R.jsx('div', {
                                        onClick: y,
                                        className:
                                            'origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100',
                                        children: R.jsx('video', {
                                            ref: g,
                                            src: v(w),
                                            loop: !0,
                                            muted: !0,
                                            id: 'current-video',
                                            className:
                                                'size-64 origin-center scale-150 object-cover object-center',
                                            onLoadedData: _,
                                        }),
                                    }),
                                }),
                                R.jsx('video', {
                                    ref: g,
                                    src: v(f),
                                    loop: !0,
                                    muted: !0,
                                    id: 'next-video',
                                    className:
                                        'absolute-center invisible absolute z-20 size-64 object-cover object-center',
                                    onLoadedData: _,
                                }),
                                R.jsx('video', {
                                    src: v(f === h - 1 ? 1 : f),
                                    autoPlay: !0,
                                    loop: !0,
                                    muted: !0,
                                    className:
                                        'absolute left-0 top-0 size-full object-cover object-center',
                                    onLoadedData: _,
                                }),
                            ],
                        }),
                        R.jsxs('h1', {
                            className:
                                'special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75',
                            children: ['G', R.jsx('b', { children: 'a' }), 'ming'],
                        }),
                        R.jsx('div', {
                            className: 'absolute left-0 top-0 z-40 size-full',
                            children: R.jsxs('div', {
                                className: 'mt-24 px-5 sm:px-10',
                                children: [
                                    R.jsxs('h1', {
                                        className: 'special-font hero-heading text-blue-100',
                                        children: ['redefi', R.jsx('b', { children: 'n' }), 'e'],
                                    }),
                                    R.jsxs('p', {
                                        className:
                                            'mb-5 max-w-64 font-robert-regular text-blue-100',
                                        children: [
                                            'Enter the Metagame Layer ',
                                            R.jsx('br', {}),
                                            ' Unleash the Play Economy',
                                        ],
                                    }),
                                    R.jsx(wa, {
                                        id: 'watch-trailer',
                                        title: 'Watch Trailer',
                                        leftIcon: R.jsx(Kf, {}),
                                        containerClass: '!bg-yellow-300 flex-center gap-1',
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
                R.jsxs('h1', {
                    className: 'special-font hero-heading absolute bottom-5 right-5 text-black',
                    children: ['G', R.jsx('b', { children: 'a' }), 'ming'],
                }),
            ],
        });
    },
    c1 = ({ title: f, containerClass: n }) => {
        const i = Be.useRef(null);
        return (
            Be.useEffect(() => {
                const o = hn.context(() => {
                    hn.timeline({
                        scrollTrigger: {
                            trigger: i.current,
                            start: '100 bottom',
                            end: 'center bottom',
                            toggleActions: 'play none none reverse',
                        },
                    }).to('.animated-word', {
                        opacity: 1,
                        transform: 'translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)',
                        ease: 'power1.inOut',
                        stagger: 0.02,
                    });
                }, i);
                return () => o.revert();
            }, []),
            R.jsx('div', {
                ref: i,
                className: `animated-title ${n}`,
                children: f.split('<br />').map((o, l) =>
                    R.jsx(
                        'div',
                        {
                            className: 'flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3',
                            children: o.split(' ').map((u, c) =>
                                R.jsx(
                                    'span',
                                    {
                                        className: 'animated-word',
                                        dangerouslySetInnerHTML: { __html: u },
                                    },
                                    c,
                                ),
                            ),
                        },
                        l,
                    ),
                ),
            })
        );
    };
hn.registerPlugin(Le);
const Xv = () => (
    ks(() => {
        hn.timeline({
            scrollTrigger: {
                trigger: '#clip',
                start: 'center center',
                end: '+=800 center',
                scrub: 0.5,
                pin: !0,
                pinSpacing: !0,
            },
        }).to('.mask-clip-path', { width: '100%', height: '100%', borderRadius: 0 });
    }),
    R.jsxs('div', {
        id: 'about',
        className: 'min-h-screen w-screen',
        children: [
            R.jsxs('div', {
                className: 'relative mb-8 mt-36 flex flex-col items-center gap-5',
                children: [
                    R.jsx('h2', {
                        className: 'font-general text-sm uppercase md:text-[10px]',
                        children: 'Welcome to ...',
                    }),
                    R.jsx(c1, {
                        title: 'Disc<b>o</b>ver the worlds <br /> l<b>a</b>rgest shared adventure',
                        containerClass: 'mt-5 !text-black text-center',
                    }),
                    R.jsxs('div', {
                        className: 'about-subtext',
                        children: [
                            R.jsx('p', {
                                children: 'The Game of Games begins-your life, now an epic MMORPG',
                            }),
                            R.jsx('p', {
                                children:
                                    'Zentry unites every player from countles games and platforms',
                            }),
                        ],
                    }),
                ],
            }),
            R.jsx('div', {
                className: 'h-dvh w-screen',
                id: 'clip',
                children: R.jsx('div', {
                    className: 'mask-clip-path about-image',
                    children: R.jsx('img', {
                        src: 'img/about.webp',
                        alt: 'Background',
                        className: 'absolute left-0 top-0 size-full object-cover',
                    }),
                }),
            }),
        ],
    })
);
function Qv(f) {
    for (var n = [], i = 1; i < arguments.length; i++) n[i - 1] = arguments[i];
    f && f.addEventListener && f.addEventListener.apply(f, n);
}
function Gv(f) {
    for (var n = [], i = 1; i < arguments.length; i++) n[i - 1] = arguments[i];
    f && f.removeEventListener && f.removeEventListener.apply(f, n);
}
var A0 = typeof window < 'u',
    Kv = function (f) {
        Be.useEffect(f, []);
    },
    qv = function (f) {
        var n = Be.useRef(f);
        (n.current = f),
            Kv(function () {
                return function () {
                    return n.current();
                };
            });
    },
    Zv = function (f) {
        var n = Be.useRef(0),
            i = Be.useState(f),
            o = i[0],
            l = i[1],
            u = Be.useCallback(function (c) {
                cancelAnimationFrame(n.current),
                    (n.current = requestAnimationFrame(function () {
                        l(c);
                    }));
            }, []);
        return (
            qv(function () {
                cancelAnimationFrame(n.current);
            }),
            [o, u]
        );
    },
    bv = function () {
        var f = Zv(function () {
                return { x: A0 ? window.pageXOffset : 0, y: A0 ? window.pageYOffset : 0 };
            }),
            n = f[0],
            i = f[1];
        return (
            Be.useEffect(function () {
                var o = function () {
                    i(function (l) {
                        var u = window.pageXOffset,
                            c = window.pageYOffset;
                        return l.x !== u || l.y !== c ? { x: u, y: c } : l;
                    });
                };
                return (
                    o(),
                    Qv(window, 'scroll', o, { capture: !1, passive: !0 }),
                    function () {
                        Gv(window, 'scroll', o);
                    }
                );
            }, []),
            n
        );
    };
const Jv = ['Nexus', 'Products', 'Pricing', 'About', 'Contact'],
    ey = () => {
        const [f, n] = Be.useState(!1),
            [i, o] = Be.useState(!1),
            [l, u] = Be.useState(0),
            [c, d] = Be.useState(!0),
            h = Be.useRef(null),
            g = Be.useRef(null),
            { y: _ } = bv();
        Be.useEffect(() => {
            _ === 0
                ? (d(!0), h.current.classList.remove('floating-nav'))
                : _ > l
                ? (d(!1), h.current.classList.add('floating-nav'))
                : _ < l && (d(!0), h.current.classList.add('floating-nav')),
                u(_);
        }, [_, l]),
            Be.useEffect(() => {
                hn.to(h.current, { y: c ? 0 : -100, opacity: c ? 1 : 0, duration: 0.2 });
            }, [c]);
        const w = () => {
            n((y) => !y), o((y) => !y);
        };
        return (
            Be.useEffect(() => {
                f ? g.current.play() : g.current.pause();
            }, [f]),
            R.jsx('div', {
                ref: h,
                className:
                    'fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6',
                children: R.jsx('header', {
                    className: 'absolute top-1/2 w-full -translate-y-1/2',
                    children: R.jsxs('nav', {
                        className: 'flex size-full items-center justify-between p-4',
                        children: [
                            R.jsxs('div', {
                                className: 'flex items-center gap-7',
                                children: [
                                    R.jsx('img', {
                                        src: 'img/logo.png',
                                        alt: 'logo',
                                        className: 'w-10',
                                    }),
                                    R.jsx(wa, {
                                        id: 'product-button',
                                        title: 'Products',
                                        rightIcon: R.jsx(Kf, {}),
                                        containerClass:
                                            'bg-blue-50 md:flex items-center justify-center gap-1',
                                    }),
                                ],
                            }),
                            R.jsxs('div', {
                                className: 'flex h-full items-center',
                                children: [
                                    R.jsx('div', {
                                        className: 'hidden md:block',
                                        children: Jv.map((y) =>
                                            R.jsx(
                                                'a',
                                                {
                                                    href: `#${y.toLowerCase()}`,
                                                    className: 'nav-hover-btn',
                                                    children: y,
                                                },
                                                y,
                                            ),
                                        ),
                                    }),
                                    R.jsxs('button', {
                                        className: 'ml-10 flex items-center space-x-0.5',
                                        onClick: w,
                                        children: [
                                            R.jsx('audio', {
                                                ref: g,
                                                className: 'hidden',
                                                src: 'audio/loop.mp3',
                                                loop: !0,
                                            }),
                                            [1, 2, 3, 4].map((y) =>
                                                R.jsx(
                                                    'div',
                                                    {
                                                        className: `indicator-line ${
                                                            i ? 'active' : ''
                                                        }`,
                                                        style: { animationDelay: `${y * 0.1}s` },
                                                    },
                                                    y,
                                                ),
                                            ),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
            })
        );
    },
    qo = ({ children: f, className: n = '' }) => {
        const [i, o] = Be.useState(''),
            l = Be.useRef(),
            u = (d) => {
                if (!l.current) return;
                const { left: h, top: g, width: _, height: w } = l.current.getBoundingClientRect(),
                    y = (d.clientX - h) / _,
                    v = (d.clientY - g) / w,
                    T = (y - 0.5) * 6,
                    x = (v - 0.5) * -6,
                    O = `perspective(700px) rotateX(${T}deg) rotateY(${x}deg) scale3d(0.98, 0.98, 0.98)`;
                o(O);
            },
            c = () => {
                o('');
            };
        return R.jsx('div', {
            className: n,
            ref: l,
            onMouseMove: u,
            onMouseLeave: c,
            style: { transform: i },
            children: f,
        });
    },
    Xu = ({ src: f, title: n, description: i }) =>
        R.jsxs('div', {
            className: 'relative size-full',
            children: [
                R.jsx('video', {
                    src: f,
                    className: 'absolute left-0 top-0 size-full object-cover object-center',
                    autoPlay: !0,
                    loop: !0,
                    muted: !0,
                }),
                R.jsx('div', {
                    className:
                        'relative z-10 flex size-full flex-col justify-between p-5 text-blue-50',
                    children: R.jsxs('div', {
                        children: [
                            R.jsx('h1', { className: 'bento-title special-font', children: n }),
                            i &&
                                R.jsx('p', {
                                    className: 'mt-3 max-w-64 text-xs md:text-base',
                                    children: i,
                                }),
                        ],
                    }),
                }),
            ],
        }),
    ty = () =>
        R.jsx('section', {
            className: 'bg-black pb-52',
            children: R.jsxs('div', {
                className: 'container mx-auto px-3 md:px-10',
                children: [
                    R.jsxs('div', {
                        className: 'px-5 py-32',
                        children: [
                            R.jsx('p', {
                                className: `font-circular-web text-lg text-blue-50
                    `,
                                children: 'Into the Metagame Layer',
                            }),
                            R.jsx('p', {
                                className:
                                    'font-circular-web max-w-md text-lg text-blue-50 opacity-50',
                                children:
                                    'Immerse yourself in a rich and ever-expanding universe where a vibrant array of products converge into an interconnected overlay experience on your world.',
                            }),
                        ],
                    }),
                    R.jsx(qo, {
                        className: `border-hsla relative
            mb-7 h-96 w-full overflow-hidden rounded-md md: h-[65vh]`,
                        children: R.jsx(Xu, {
                            src: 'videos/feature-1.mp4',
                            title: R.jsxs(R.Fragment, {
                                children: ['radia', R.jsx('b', { children: 'n' }), 't'],
                            }),
                            description:
                                'An immersive and radiant journey that redefines the boundaries of virtual experiences.',
                        }),
                    }),
                    R.jsxs('div', {
                        className: 'grid h-[135vh] grid-cols-2 grid-rows-3 gap-7',
                        children: [
                            R.jsx(qo, {
                                className: 'bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2',
                                children: R.jsx(Xu, {
                                    src: 'videos/feature-2.mp4',
                                    title: R.jsxs(R.Fragment, {
                                        children: ['zig', R.jsx('b', { children: 'm' }), 'a'],
                                    }),
                                    description:
                                        'Step into a bold narrative where strategy and action collide in the ultimate adventure.',
                                }),
                            }),
                            R.jsx(qo, {
                                className: 'bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0',
                                children: R.jsx(Xu, {
                                    src: 'videos/feature-3.mp4',
                                    title: R.jsxs(R.Fragment, {
                                        children: ['n', R.jsx('b', { children: 'e' }), 'xus'],
                                    }),
                                    description:
                                        'Discover the nexus of creativity and innovation, connecting worlds like never before.',
                                }),
                            }),
                            R.jsx(qo, {
                                className: 'bento-tilt_1 me-14 md:col-span-1 md:me-0',
                                children: R.jsx(Xu, {
                                    src: 'videos/feature-4.mp4',
                                    title: R.jsxs(R.Fragment, {
                                        children: ['az', R.jsx('b', { children: 'u' }), 'l'],
                                    }),
                                    description:
                                        'Explore a serene and vibrant digital landscape, designed to captivate your senses.',
                                }),
                            }),
                            R.jsx(qo, {
                                className: 'bento-tilt_2',
                                children: R.jsxs('div', {
                                    className:
                                        'flex size-full flex-col justify-between bg-violet-300 p-5',
                                    children: [
                                        R.jsxs('h1', {
                                            className:
                                                'bento-title special-font max-w-64 text-black',
                                            children: [
                                                'M',
                                                R.jsx('b', { children: 'o' }),
                                                're co',
                                                R.jsx('b', { children: 'm' }),
                                                'ing s',
                                                R.jsx('b', { children: 'o' }),
                                                'on!',
                                            ],
                                        }),
                                        R.jsx(Kf, { className: 'm-5 scale-[5] self-end' }),
                                    ],
                                }),
                            }),
                            R.jsx(qo, {
                                className: 'bento-tilt_2',
                                children: R.jsx('video', {
                                    src: 'videos/feature-5.mp4',
                                    loop: !0,
                                    muted: !0,
                                    autoPlay: !0,
                                    className: 'size-full object-cover object-center',
                                }),
                            }),
                        ],
                    }),
                ],
            }),
        }),
    ny = () =>
        R.jsx('svg', {
            className: 'invisible absolute size-0',
            xmlns: 'http://www.w3.org/2000/svg',
            children: R.jsx('defs', {
                children: R.jsxs('filter', {
                    id: 'flt_tag',
                    children: [
                        R.jsx('feGaussianBlur', {
                            in: 'SourceGraphic',
                            stdDeviation: '8',
                            result: 'blur',
                        }),
                        R.jsx('feColorMatrix', {
                            in: 'blur',
                            mode: 'matrix',
                            values: '1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 19 -9',
                            result: 'flt_tag',
                        }),
                        R.jsx('feComposite', {
                            in: 'SourceGraphic',
                            in2: 'flt_tag',
                            operator: 'atop',
                        }),
                    ],
                }),
            }),
        }),
    ry = () => {
        const f = Be.useRef(null),
            n = () => {
                const o = f.current;
                hn.to(o, {
                    duration: 0.3,
                    rotateX: 0,
                    rotateY: 0,
                    transformPerspective: 500,
                    ease: 'power1.inOut',
                });
            },
            i = (o) => {
                const { clientX: l, clientY: u } = o,
                    c = f.current;
                if (!c) return;
                const d = c.getBoundingClientRect(),
                    h = l - d.left,
                    g = u - d.top,
                    _ = d.width / 2,
                    w = d.height / 2,
                    y = ((g - w) / w) * -10,
                    v = ((h - _) / _) * 10;
                hn.to(c, {
                    duration: 0.3,
                    rotateX: y,
                    rotateY: v,
                    transformPerspective: 500,
                    ease: 'power1.inOut',
                });
            };
        return R.jsx('section', {
            id: 'story',
            className: 'min-h-dvh w-screen bg-black text-blue-50',
            children: R.jsxs('div', {
                className: 'flex size-full flex-col items-center py-10 pb-24 ',
                children: [
                    R.jsx('p', {
                        className: 'font-general text-sm uppercase md:text-[10px]',
                        children: 'the multiversal ip world',
                    }),
                    R.jsxs('div', {
                        className: 'relative size-full',
                        children: [
                            R.jsx(c1, {
                                title: 'The st<b>o</b>ry of <br /> a hidden real<b>m</b>',
                                sectionId: '#story',
                                containerClass:
                                    'mt-5 pointer-events-none mix-blend-difference relative z-10',
                            }),
                            R.jsxs('div', {
                                className: 'story-img-container',
                                children: [
                                    R.jsx('div', {
                                        className: 'story-img-mask',
                                        children: R.jsx('div', {
                                            className: 'story-img-content',
                                            children: R.jsx('img', {
                                                ref: f,
                                                onMouseLeave: n,
                                                onMouseUp: n,
                                                onMouseEnter: n,
                                                onMouseMove: i,
                                                src: 'img/entrance.webp',
                                                alt: 'entrance',
                                                className: 'object-contain',
                                            }),
                                        }),
                                    }),
                                    R.jsx(ny, {}),
                                ],
                            }),
                        ],
                    }),
                    R.jsx('div', {
                        className:
                            '-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end',
                        children: R.jsxs('div', {
                            className: 'flex h-full w-fit flex-col items-center md:items-start',
                            children: [
                                R.jsx('p', {
                                    className:
                                        'mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start',
                                    children:
                                        'Where realms large and small meet to create a multiversal IP world .....',
                                }),
                                R.jsx(wa, {
                                    id: 'realm-button',
                                    title: 'discover prologue',
                                    containerClass: 'mt-5',
                                }),
                            ],
                        }),
                    }),
                ],
            }),
        });
    },
    Qu = ({ src: f, clipClass: n }) =>
        R.jsx('div', { className: n, children: R.jsx('img', { src: f }) }),
    iy = () =>
        R.jsx('div', {
            id: 'contact',
            className: 'my-20 min-h-96 w-screen px-10',
            children: R.jsxs('div', {
                className: 'relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden',
                children: [
                    R.jsxs('div', {
                        className:
                            'absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96',
                        children: [
                            R.jsx(Qu, {
                                src: 'img/contact-1.webp',
                                clipClass: 'contact-clip-path-1',
                            }),
                            R.jsx(Qu, {
                                src: 'img/contact-2.webp',
                                clipClass: 'contact-clip-path-2 lg:translate-y-40 translate-y-60',
                            }),
                        ],
                    }),
                    R.jsxs('div', {
                        className:
                            'absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80',
                        children: [
                            R.jsx(Qu, {
                                src: 'img/swordman-partial.webp',
                                clipClass: 'absolute md:scale-125',
                            }),
                            R.jsx(Qu, {
                                src: 'img/swordman.webp',
                                clipClass: 'sword-man-clip-path md:scale-125',
                            }),
                        ],
                    }),
                    R.jsxs('div', {
                        className: 'flex flex-col items-center text-center',
                        children: [
                            R.jsx('p', {
                                className: 'font-general text-[10px]',
                                children: 'Join Zentry',
                            }),
                            R.jsxs('p', {
                                className: `special-font mt-10 w-full font-zentry text-5xl
                    leading-[0.9] md:text-[6rem]`,
                                children: [
                                    'Lets b',
                                    R.jsx('b', { children: 'u' }),
                                    'ild the ',
                                    R.jsx('br', {}),
                                    ' new era of ',
                                    R.jsx('br', {}),
                                    ' g',
                                    R.jsx('b', { children: 'a' }),
                                    'ming t',
                                    R.jsx('b', { children: 'o' }),
                                    'gether',
                                ],
                            }),
                            R.jsx(wa, {
                                title: 'contact us',
                                containerClass: 'mt-10 cursor-pointer',
                            }),
                        ],
                    }),
                ],
            }),
        });
function oy(f) {
    return Es({
        tag: 'svg',
        attr: { viewBox: '0 0 640 512' },
        child: [
            {
                tag: 'path',
                attr: {
                    d: 'M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z',
                },
                child: [],
            },
        ],
    })(f);
}
function ly(f) {
    return Es({
        tag: 'svg',
        attr: { viewBox: '0 0 496 512' },
        child: [
            {
                tag: 'path',
                attr: {
                    d: 'M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z',
                },
                child: [],
            },
        ],
    })(f);
}
function sy(f) {
    return Es({
        tag: 'svg',
        attr: { viewBox: '0 0 448 512' },
        child: [
            {
                tag: 'path',
                attr: {
                    d: 'M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z',
                },
                child: [],
            },
        ],
    })(f);
}
function uy(f) {
    return Es({
        tag: 'svg',
        attr: { viewBox: '0 0 512 512' },
        child: [
            {
                tag: 'path',
                attr: {
                    d: 'M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z',
                },
                child: [],
            },
        ],
    })(f);
}
const ay = [
        { href: 'https://discord.com', icon: R.jsx(oy, {}) },
        { href: 'https://github.com', icon: R.jsx(ly, {}) },
        { href: 'https://twitter.com', icon: R.jsx(uy, {}) },
        { href: 'https://linkedin.com', icon: R.jsx(sy, {}) },
    ],
    cy = () =>
        R.jsx('footer', {
            className: 'w-screen bg-violet-300 py-4 text-black',
            children: R.jsxs('div', {
                className:
                    'container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row',
                children: [
                    R.jsx('p', {
                        className: 'text-center text-sm md:text-left',
                        children: 'Copyright © 2025. All rights reserved',
                    }),
                    R.jsx('div', {
                        className: 'flex justify-center gap-4 md:justify-start',
                        children: ay.map((f) =>
                            R.jsx(
                                'a',
                                {
                                    href: f.href,
                                    target: '_blank',
                                    rel: 'noopener noreferrer',
                                    className:
                                        'text-black transition-colors duration-500 eaise-in-out hover:text-white',
                                    children: f.icon,
                                },
                                f,
                            ),
                        ),
                    }),
                    R.jsx('a', {
                        href: '#privacy-policy',
                        className: 'text-center text-sm hover:underline md:text-right',
                        children: 'Privacy Policy',
                    }),
                ],
            }),
        }),
    fy = () =>
        R.jsxs('main', {
            className: 'relative min-h-screen w-screen overflow-x-hidden',
            children: [
                R.jsx(ey, {}),
                R.jsx(Hv, {}),
                R.jsx(Xv, {}),
                R.jsx(ty, {}),
                R.jsx(ry, {}),
                R.jsx(iy, {}),
                R.jsx(cy, {}),
            ],
        });
i_.createRoot(document.getElementById('root')).render(
    R.jsx(Be.StrictMode, { children: R.jsx(fy, {}) }),
);
