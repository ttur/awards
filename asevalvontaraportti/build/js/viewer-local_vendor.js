/*! jQuery v2.2.3 | (c) jQuery Foundation | jquery.org/license */
!function(t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t);
    } : e(t);
}("undefined" != typeof window ? window : this, function(t, e) {
    function n(t) {
        var e = !!t && "length" in t && t.length, n = K.type(t);
        return "function" !== n && !K.isWindow(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t);
    }
    function i(t, e, n) {
        if (K.isFunction(e)) return K.grep(t, function(t, i) {
            return !!e.call(t, i, t) !== n;
        });
        if (e.nodeType) return K.grep(t, function(t) {
            return t === e !== n;
        });
        if ("string" == typeof e) {
            if (lt.test(e)) return K.filter(e, t, n);
            e = K.filter(e, t);
        }
        return K.grep(t, function(t) {
            return Y.call(e, t) > -1 !== n;
        });
    }
    function r(t, e) {
        for (;(t = t[e]) && 1 !== t.nodeType; ) ;
        return t;
    }
    function o() {
        $.removeEventListener("DOMContentLoaded", o), t.removeEventListener("load", o), K.ready();
    }
    function s() {
        this.expando = K.expando + s.uid++;
    }
    function a(t, e, n) {
        var i;
        if (void 0 === n && 1 === t.nodeType) if (i = "data-" + e.replace(xt, "-$&").toLowerCase(), "string" == typeof (n = t.getAttribute(i))) {
            try {
                n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : wt.test(n) ? K.parseJSON(n) : n);
            } catch (t) {}
            bt.set(t, e, n);
        } else n = void 0;
        return n;
    }
    function u(t, e, n, i) {
        var r, o = 1, s = 20, a = i ? function() {
            return i.cur();
        } : function() {
            return K.css(t, e, "");
        }, u = a(), l = n && n[3] || (K.cssNumber[e] ? "" : "px"), c = (K.cssNumber[e] || "px" !== l && +u) && Tt.exec(K.css(t, e));
        if (c && c[3] !== l) {
            l = l || c[3], n = n || [], c = +u || 1;
            do {
                o = o || ".5", c /= o, K.style(t, e, c + l);
            } while (o !== (o = a() / u) && 1 !== o && --s);
        }
        return n && (c = +c || +u || 0, r = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = l, i.start = c, 
        i.end = r)), r;
    }
    function l(t, e) {
        var n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
        return void 0 === e || e && K.nodeName(t, e) ? K.merge([ t ], n) : n;
    }
    function c(t, e) {
        for (var n = 0, i = t.length; i > n; n++) yt.set(t[n], "globalEval", !e || yt.get(e[n], "globalEval"));
    }
    function h(t, e, n, i, r) {
        for (var o, s, a, u, h, f, d = e.createDocumentFragment(), p = [], m = 0, g = t.length; g > m; m++) if ((o = t[m]) || 0 === o) if ("object" === K.type(o)) K.merge(p, o.nodeType ? [ o ] : o); else if (It.test(o)) {
            for (s = s || d.appendChild(e.createElement("div")), a = (Et.exec(o) || [ "", "" ])[1].toLowerCase(), 
            u = Nt[a] || Nt._default, s.innerHTML = u[1] + K.htmlPrefilter(o) + u[2], f = u[0]; f--; ) s = s.lastChild;
            K.merge(p, s.childNodes), (s = d.firstChild).textContent = "";
        } else p.push(e.createTextNode(o));
        for (d.textContent = "", m = 0; o = p[m++]; ) if (i && K.inArray(o, i) > -1) r && r.push(o); else if (h = K.contains(o.ownerDocument, o), 
        s = l(d.appendChild(o), "script"), h && c(s), n) for (f = 0; o = s[f++]; ) At.test(o.type || "") && n.push(o);
        return d;
    }
    function f() {
        return !0;
    }
    function d() {
        return !1;
    }
    function p() {
        try {
            return $.activeElement;
        } catch (t) {}
    }
    function m(t, e, n, i, r, o) {
        var s, a;
        if ("object" == typeof e) {
            "string" != typeof n && (i = i || n, n = void 0);
            for (a in e) m(t, a, n, i, e[a], o);
            return t;
        }
        if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, 
        i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = d; else if (!r) return t;
        return 1 === o && (s = r, r = function(t) {
            return K().off(t), s.apply(this, arguments);
        }, r.guid = s.guid || (s.guid = K.guid++)), t.each(function() {
            K.event.add(this, e, r, i, n);
        });
    }
    function g(t, e) {
        return K.nodeName(t, "table") && K.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t;
    }
    function v(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t;
    }
    function y(t) {
        var e = Lt.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t;
    }
    function b(t, e) {
        var n, i, r, o, s, a, u, l;
        if (1 === e.nodeType) {
            if (yt.hasData(t) && (o = yt.access(t), s = yt.set(e, o), l = o.events)) {
                delete s.handle, s.events = {};
                for (r in l) for (n = 0, i = l[r].length; i > n; n++) K.event.add(e, r, l[r][n]);
            }
            bt.hasData(t) && (a = bt.access(t), u = K.extend({}, a), bt.set(e, u));
        }
    }
    function w(t, e) {
        var n = e.nodeName.toLowerCase();
        "input" === n && St.test(t.type) ? e.checked = t.checked : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue);
    }
    function x(t, e, n, i) {
        e = V.apply([], e);
        var r, o, s, a, u, c, f = 0, d = t.length, p = d - 1, m = e[0], g = K.isFunction(m);
        if (g || d > 1 && "string" == typeof m && !Z.checkClone && jt.test(m)) return t.each(function(r) {
            var o = t.eq(r);
            g && (e[0] = m.call(this, r, o.html())), x(o, e, n, i);
        });
        if (d && (r = h(e, t[0].ownerDocument, !1, t, i), o = r.firstChild, 1 === r.childNodes.length && (r = o), 
        o || i)) {
            for (a = (s = K.map(l(r, "script"), v)).length; d > f; f++) u = r, f !== p && (u = K.clone(u, !0, !0), 
            a && K.merge(s, l(u, "script"))), n.call(t[f], u, f);
            if (a) for (c = s[s.length - 1].ownerDocument, K.map(s, y), f = 0; a > f; f++) u = s[f], At.test(u.type || "") && !yt.access(u, "globalEval") && K.contains(c, u) && (u.src ? K._evalUrl && K._evalUrl(u.src) : K.globalEval(u.textContent.replace(Wt, "")));
        }
        return t;
    }
    function _(t, e, n) {
        for (var i, r = e ? K.filter(e, t) : t, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || K.cleanData(l(i)), 
        i.parentNode && (n && K.contains(i.ownerDocument, i) && c(l(i, "script")), i.parentNode.removeChild(i));
        return t;
    }
    function T(t, e) {
        var n = K(e.createElement(t)).appendTo(e.body), i = K.css(n[0], "display");
        return n.detach(), i;
    }
    function C(t) {
        var e = $, n = Rt[t];
        return n || ("none" !== (n = T(t, e)) && n || (Ft = (Ft || K("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), 
        (e = Ft[0].contentDocument).write(), e.close(), n = T(t, e), Ft.detach()), Rt[t] = n), n;
    }
    function k(t, e, n) {
        var i, r, o, s, a = t.style;
        return n = n || Bt(t), "" !== (s = n ? n.getPropertyValue(e) || n[e] : void 0) && void 0 !== s || K.contains(t.ownerDocument, t) || (s = K.style(t, e)), 
        n && !Z.pixelMarginRight() && zt.test(s) && qt.test(e) && (i = a.width, r = a.minWidth, o = a.maxWidth, 
        a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o), void 0 !== s ? s + "" : s;
    }
    function S(t, e) {
        return {
            get: function() {
                return t() ? void delete this.get : (this.get = e).apply(this, arguments);
            }
        };
    }
    function E(t) {
        if (t in Qt) return t;
        for (var e = t[0].toUpperCase() + t.slice(1), n = Gt.length; n--; ) if ((t = Gt[n] + e) in Qt) return t;
    }
    function A(t, e, n) {
        var i = Tt.exec(e);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e;
    }
    function N(t, e, n, i, r) {
        for (var o = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; 4 > o; o += 2) "margin" === n && (s += K.css(t, n + Ct[o], !0, r)), 
        i ? ("content" === n && (s -= K.css(t, "padding" + Ct[o], !0, r)), "margin" !== n && (s -= K.css(t, "border" + Ct[o] + "Width", !0, r))) : (s += K.css(t, "padding" + Ct[o], !0, r), 
        "padding" !== n && (s += K.css(t, "border" + Ct[o] + "Width", !0, r)));
        return s;
    }
    function I(e, n, i) {
        var r = !0, o = "width" === n ? e.offsetWidth : e.offsetHeight, s = Bt(e), a = "border-box" === K.css(e, "boxSizing", !1, s);
        if ($.msFullscreenElement && t.top !== t && e.getClientRects().length && (o = Math.round(100 * e.getBoundingClientRect()[n])), 
        0 >= o || null == o) {
            if ((0 > (o = k(e, n, s)) || null == o) && (o = e.style[n]), zt.test(o)) return o;
            r = a && (Z.boxSizingReliable() || o === e.style[n]), o = parseFloat(o) || 0;
        }
        return o + N(e, n, i || (a ? "border" : "content"), r, s) + "px";
    }
    function P(t, e) {
        for (var n, i, r, o = [], s = 0, a = t.length; a > s; s++) (i = t[s]).style && (o[s] = yt.get(i, "olddisplay"), 
        n = i.style.display, e ? (o[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && kt(i) && (o[s] = yt.access(i, "olddisplay", C(i.nodeName)))) : (r = kt(i), 
        "none" === n && r || yt.set(i, "olddisplay", r ? n : K.css(i, "display"))));
        for (s = 0; a > s; s++) (i = t[s]).style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? o[s] || "" : "none"));
        return t;
    }
    function M(t, e, n, i, r) {
        return new M.prototype.init(t, e, n, i, r);
    }
    function D() {
        return t.setTimeout(function() {
            Jt = void 0;
        }), Jt = K.now();
    }
    function O(t, e) {
        var n, i = 0, r = {
            height: t
        };
        for (e = e ? 1 : 0; 4 > i; i += 2 - e) n = Ct[i], r["margin" + n] = r["padding" + n] = t;
        return e && (r.opacity = r.width = t), r;
    }
    function H(t, e, n) {
        for (var i, r = (j.tweeners[e] || []).concat(j.tweeners["*"]), o = 0, s = r.length; s > o; o++) if (i = r[o].call(n, e, t)) return i;
    }
    function j(t, e, n) {
        var i, r, o = 0, s = j.prefilters.length, a = K.Deferred().always(function() {
            delete u.elem;
        }), u = function() {
            if (r) return !1;
            for (var e = Jt || D(), n = Math.max(0, l.startTime + l.duration - e), i = 1 - (n / l.duration || 0), o = 0, s = l.tweens.length; s > o; o++) l.tweens[o].run(i);
            return a.notifyWith(t, [ l, i, n ]), 1 > i && s ? n : (a.resolveWith(t, [ l ]), !1);
        }, l = a.promise({
            elem: t,
            props: K.extend({}, e),
            opts: K.extend(!0, {
                specialEasing: {},
                easing: K.easing._default
            }, n),
            originalProperties: e,
            originalOptions: n,
            startTime: Jt || D(),
            duration: n.duration,
            tweens: [],
            createTween: function(e, n) {
                var i = K.Tween(t, l.opts, e, n, l.opts.specialEasing[e] || l.opts.easing);
                return l.tweens.push(i), i;
            },
            stop: function(e) {
                var n = 0, i = e ? l.tweens.length : 0;
                if (r) return this;
                for (r = !0; i > n; n++) l.tweens[n].run(1);
                return e ? (a.notifyWith(t, [ l, 1, 0 ]), a.resolveWith(t, [ l, e ])) : a.rejectWith(t, [ l, e ]), this;
            }
        }), c = l.props;
        for (function(t, e) {
            var n, i, r, o, s;
            for (n in t) if (i = K.camelCase(n), r = e[i], o = t[n], K.isArray(o) && (r = o[1], o = t[n] = o[0]), 
            n !== i && (t[i] = o, delete t[n]), (s = K.cssHooks[i]) && "expand" in s) {
                o = s.expand(o), delete t[i];
                for (n in o) n in t || (t[n] = o[n], e[n] = r);
            } else e[i] = r;
        }(c, l.opts.specialEasing); s > o; o++) if (i = j.prefilters[o].call(l, t, c, l.opts)) return K.isFunction(i.stop) && (K._queueHooks(l.elem, l.opts.queue).stop = K.proxy(i.stop, i)), 
        i;
        return K.map(c, H, l), K.isFunction(l.opts.start) && l.opts.start.call(t, l), K.fx.timer(K.extend(u, {
            elem: t,
            anim: l,
            queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always);
    }
    function L(t) {
        return t.getAttribute && t.getAttribute("class") || "";
    }
    function W(t) {
        return function(e, n) {
            "string" != typeof e && (n = e, e = "*");
            var i, r = 0, o = e.toLowerCase().match(pt) || [];
            if (K.isFunction(n)) for (;i = o[r++]; ) "+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n);
        };
    }
    function F(t, e, n, i) {
        function r(a) {
            var u;
            return o[a] = !0, K.each(t[a] || [], function(t, a) {
                var l = a(e, n, i);
                return "string" != typeof l || s || o[l] ? s ? !(u = l) : void 0 : (e.dataTypes.unshift(l), r(l), !1);
            }), u;
        }
        var o = {}, s = t === ye;
        return r(e.dataTypes[0]) || !o["*"] && r("*");
    }
    function R(t, e) {
        var n, i, r = K.ajaxSettings.flatOptions || {};
        for (n in e) void 0 !== e[n] && ((r[n] ? t : i || (i = {}))[n] = e[n]);
        return i && K.extend(!0, t, i), t;
    }
    function q(t, e, n, i) {
        var r;
        if (K.isArray(e)) K.each(e, function(e, r) {
            n || _e.test(t) ? i(t, r) : q(t + "[" + ("object" == typeof r && null != r ? e : "") + "]", r, n, i);
        }); else if (n || "object" !== K.type(e)) i(t, e); else for (r in e) q(t + "[" + r + "]", e[r], n, i);
    }
    function z(t) {
        return K.isWindow(t) ? t : 9 === t.nodeType && t.defaultView;
    }
    var B = [], $ = t.document, U = B.slice, V = B.concat, X = B.push, Y = B.indexOf, G = {}, Q = G.toString, J = G.hasOwnProperty, Z = {}, K = function(t, e) {
        return new K.fn.init(t, e);
    }, tt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, et = /^-ms-/, nt = /-([\da-z])/gi, it = function(t, e) {
        return e.toUpperCase();
    };
    K.fn = K.prototype = {
        jquery: "2.2.3",
        constructor: K,
        selector: "",
        length: 0,
        toArray: function() {
            return U.call(this);
        },
        get: function(t) {
            return null != t ? 0 > t ? this[t + this.length] : this[t] : U.call(this);
        },
        pushStack: function(t) {
            var e = K.merge(this.constructor(), t);
            return e.prevObject = this, e.context = this.context, e;
        },
        each: function(t) {
            return K.each(this, t);
        },
        map: function(t) {
            return this.pushStack(K.map(this, function(e, n) {
                return t.call(e, n, e);
            }));
        },
        slice: function() {
            return this.pushStack(U.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(t) {
            var e = this.length, n = +t + (0 > t ? e : 0);
            return this.pushStack(n >= 0 && e > n ? [ this[n] ] : []);
        },
        end: function() {
            return this.prevObject || this.constructor();
        },
        push: X,
        sort: B.sort,
        splice: B.splice
    }, K.extend = K.fn.extend = function() {
        var t, e, n, i, r, o, s = arguments[0] || {}, a = 1, u = arguments.length, l = !1;
        for ("boolean" == typeof s && (l = s, s = arguments[a] || {}, a++), "object" == typeof s || K.isFunction(s) || (s = {}), 
        a === u && (s = this, a--); u > a; a++) if (null != (t = arguments[a])) for (e in t) n = s[e], i = t[e], 
        s !== i && (l && i && (K.isPlainObject(i) || (r = K.isArray(i))) ? (r ? (r = !1, o = n && K.isArray(n) ? n : []) : o = n && K.isPlainObject(n) ? n : {}, 
        s[e] = K.extend(l, o, i)) : void 0 !== i && (s[e] = i));
        return s;
    }, K.extend({
        expando: "jQuery" + ("2.2.3" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t);
        },
        noop: function() {},
        isFunction: function(t) {
            return "function" === K.type(t);
        },
        isArray: Array.isArray,
        isWindow: function(t) {
            return null != t && t === t.window;
        },
        isNumeric: function(t) {
            var e = t && t.toString();
            return !K.isArray(t) && e - parseFloat(e) + 1 >= 0;
        },
        isPlainObject: function(t) {
            var e;
            if ("object" !== K.type(t) || t.nodeType || K.isWindow(t)) return !1;
            if (t.constructor && !J.call(t, "constructor") && !J.call(t.constructor.prototype || {}, "isPrototypeOf")) return !1;
            for (e in t) ;
            return void 0 === e || J.call(t, e);
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t) return !1;
            return !0;
        },
        type: function(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? G[Q.call(t)] || "object" : typeof t;
        },
        globalEval: function(t) {
            var e, n = eval;
            (t = K.trim(t)) && (1 === t.indexOf("use strict") ? (e = $.createElement("script"), e.text = t, $.head.appendChild(e).parentNode.removeChild(e)) : n(t));
        },
        camelCase: function(t) {
            return t.replace(et, "ms-").replace(nt, it);
        },
        nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
        },
        each: function(t, e) {
            var i, r = 0;
            if (n(t)) for (i = t.length; i > r && !1 !== e.call(t[r], r, t[r]); r++) ; else for (r in t) if (!1 === e.call(t[r], r, t[r])) break;
            return t;
        },
        trim: function(t) {
            return null == t ? "" : (t + "").replace(tt, "");
        },
        makeArray: function(t, e) {
            var i = e || [];
            return null != t && (n(Object(t)) ? K.merge(i, "string" == typeof t ? [ t ] : t) : X.call(i, t)), i;
        },
        inArray: function(t, e, n) {
            return null == e ? -1 : Y.call(e, t, n);
        },
        merge: function(t, e) {
            for (var n = +e.length, i = 0, r = t.length; n > i; i++) t[r++] = e[i];
            return t.length = r, t;
        },
        grep: function(t, e, n) {
            for (var i = [], r = 0, o = t.length, s = !n; o > r; r++) !e(t[r], r) !== s && i.push(t[r]);
            return i;
        },
        map: function(t, e, i) {
            var r, o, s = 0, a = [];
            if (n(t)) for (r = t.length; r > s; s++) null != (o = e(t[s], s, i)) && a.push(o); else for (s in t) null != (o = e(t[s], s, i)) && a.push(o);
            return V.apply([], a);
        },
        guid: 1,
        proxy: function(t, e) {
            var n, i, r;
            return "string" == typeof e && (n = t[e], e = t, t = n), K.isFunction(t) ? (i = U.call(arguments, 2), 
            r = function() {
                return t.apply(e || this, i.concat(U.call(arguments)));
            }, r.guid = t.guid = t.guid || K.guid++, r) : void 0;
        },
        now: Date.now,
        support: Z
    }), "function" == typeof Symbol && (K.fn[Symbol.iterator] = B[Symbol.iterator]), K.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
        G["[object " + e + "]"] = e.toLowerCase();
    });
    var rt = function(t) {
        function e(t, e, n, i) {
            var r, o, s, a, u, l, h, d, p = e && e.ownerDocument, m = e ? e.nodeType : 9;
            if (n = n || [], "string" != typeof t || !t || 1 !== m && 9 !== m && 11 !== m) return n;
            if (!i && ((e ? e.ownerDocument || e : W) !== I && N(e), e = e || I, M)) {
                if (11 !== m && (l = mt.exec(t))) if (r = l[1]) {
                    if (9 === m) {
                        if (!(s = e.getElementById(r))) return n;
                        if (s.id === r) return n.push(s), n;
                    } else if (p && (s = p.getElementById(r)) && j(e, s) && s.id === r) return n.push(s), n;
                } else {
                    if (l[2]) return Q.apply(n, e.getElementsByTagName(t)), n;
                    if ((r = l[3]) && b.getElementsByClassName && e.getElementsByClassName) return Q.apply(n, e.getElementsByClassName(r)), 
                    n;
                }
                if (b.qsa && !B[t + " "] && (!D || !D.test(t))) {
                    if (1 !== m) p = e, d = t; else if ("object" !== e.nodeName.toLowerCase()) {
                        for ((a = e.getAttribute("id")) ? a = a.replace(vt, "\\$&") : e.setAttribute("id", a = L), o = (h = T(t)).length, 
                        u = ct.test(a) ? "#" + a : "[id='" + a + "']"; o--; ) h[o] = u + " " + f(h[o]);
                        d = h.join(","), p = gt.test(t) && c(e.parentNode) || e;
                    }
                    if (d) try {
                        return Q.apply(n, p.querySelectorAll(d)), n;
                    } catch (t) {} finally {
                        a === L && e.removeAttribute("id");
                    }
                }
            }
            return k(t.replace(ot, "$1"), e, n, i);
        }
        function n() {
            function t(n, i) {
                return e.push(n + " ") > w.cacheLength && delete t[e.shift()], t[n + " "] = i;
            }
            var e = [];
            return t;
        }
        function i(t) {
            return t[L] = !0, t;
        }
        function r(t) {
            var e = I.createElement("div");
            try {
                return !!t(e);
            } catch (t) {
                return !1;
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null;
            }
        }
        function o(t, e) {
            for (var n = t.split("|"), i = n.length; i--; ) w.attrHandle[n[i]] = e;
        }
        function s(t, e) {
            var n = e && t, i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || U) - (~t.sourceIndex || U);
            if (i) return i;
            if (n) for (;n = n.nextSibling; ) if (n === e) return -1;
            return t ? 1 : -1;
        }
        function a(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t;
            };
        }
        function u(t) {
            return function(e) {
                var n = e.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && e.type === t;
            };
        }
        function l(t) {
            return i(function(e) {
                return e = +e, i(function(n, i) {
                    for (var r, o = t([], n.length, e), s = o.length; s--; ) n[r = o[s]] && (n[r] = !(i[r] = n[r]));
                });
            });
        }
        function c(t) {
            return t && void 0 !== t.getElementsByTagName && t;
        }
        function h() {}
        function f(t) {
            for (var e = 0, n = t.length, i = ""; n > e; e++) i += t[e].value;
            return i;
        }
        function d(t, e, n) {
            var i = e.dir, r = n && "parentNode" === i, o = R++;
            return e.first ? function(e, n, o) {
                for (;e = e[i]; ) if (1 === e.nodeType || r) return t(e, n, o);
            } : function(e, n, s) {
                var a, u, l, c = [ F, o ];
                if (s) {
                    for (;e = e[i]; ) if ((1 === e.nodeType || r) && t(e, n, s)) return !0;
                } else for (;e = e[i]; ) if (1 === e.nodeType || r) {
                    if (l = e[L] || (e[L] = {}), u = l[e.uniqueID] || (l[e.uniqueID] = {}), (a = u[i]) && a[0] === F && a[1] === o) return c[2] = a[2];
                    if (u[i] = c, c[2] = t(e, n, s)) return !0;
                }
            };
        }
        function p(t) {
            return t.length > 1 ? function(e, n, i) {
                for (var r = t.length; r--; ) if (!t[r](e, n, i)) return !1;
                return !0;
            } : t[0];
        }
        function m(t, e, n, i, r) {
            for (var o, s = [], a = 0, u = t.length, l = null != e; u > a; a++) (o = t[a]) && (n && !n(o, i, r) || (s.push(o), 
            l && e.push(a)));
            return s;
        }
        function g(t, n, r, o, s, a) {
            return o && !o[L] && (o = g(o)), s && !s[L] && (s = g(s, a)), i(function(i, a, u, l) {
                var c, h, f, d = [], p = [], g = a.length, v = i || function(t, n, i) {
                    for (var r = 0, o = n.length; o > r; r++) e(t, n[r], i);
                    return i;
                }(n || "*", u.nodeType ? [ u ] : u, []), y = !t || !i && n ? v : m(v, d, t, u, l), b = r ? s || (i ? t : g || o) ? [] : a : y;
                if (r && r(y, b, u, l), o) for (c = m(b, p), o(c, [], u, l), h = c.length; h--; ) (f = c[h]) && (b[p[h]] = !(y[p[h]] = f));
                if (i) {
                    if (s || t) {
                        if (s) {
                            for (c = [], h = b.length; h--; ) (f = b[h]) && c.push(y[h] = f);
                            s(null, b = [], c, l);
                        }
                        for (h = b.length; h--; ) (f = b[h]) && (c = s ? Z(i, f) : d[h]) > -1 && (i[c] = !(a[c] = f));
                    }
                } else b = m(b === a ? b.splice(g, b.length) : b), s ? s(null, a, b, l) : Q.apply(a, b);
            });
        }
        function v(t) {
            for (var e, n, i, r = t.length, o = w.relative[t[0].type], s = o || w.relative[" "], a = o ? 1 : 0, u = d(function(t) {
                return t === e;
            }, s, !0), l = d(function(t) {
                return Z(e, t) > -1;
            }, s, !0), c = [ function(t, n, i) {
                var r = !o && (i || n !== S) || ((e = n).nodeType ? u(t, n, i) : l(t, n, i));
                return e = null, r;
            } ]; r > a; a++) if (n = w.relative[t[a].type]) c = [ d(p(c), n) ]; else {
                if ((n = w.filter[t[a].type].apply(null, t[a].matches))[L]) {
                    for (i = ++a; r > i && !w.relative[t[i].type]; i++) ;
                    return g(a > 1 && p(c), a > 1 && f(t.slice(0, a - 1).concat({
                        value: " " === t[a - 2].type ? "*" : ""
                    })).replace(ot, "$1"), n, i > a && v(t.slice(a, i)), r > i && v(t = t.slice(i)), r > i && f(t));
                }
                c.push(n);
            }
            return p(c);
        }
        var y, b, w, x, _, T, C, k, S, E, A, N, I, P, M, D, O, H, j, L = "sizzle" + 1 * new Date(), W = t.document, F = 0, R = 0, q = n(), z = n(), B = n(), $ = function(t, e) {
            return t === e && (A = !0), 0;
        }, U = 1 << 31, V = {}.hasOwnProperty, X = [], Y = X.pop, G = X.push, Q = X.push, J = X.slice, Z = function(t, e) {
            for (var n = 0, i = t.length; i > n; n++) if (t[n] === e) return n;
            return -1;
        }, K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", tt = "[\\x20\\t\\r\\n\\f]", et = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", nt = "\\[" + tt + "*(" + et + ")(?:" + tt + "*([*^$|!~]?=)" + tt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + et + "))|)" + tt + "*\\]", it = ":(" + et + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + nt + ")*)|.*)\\)|)", rt = new RegExp(tt + "+", "g"), ot = new RegExp("^" + tt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + tt + "+$", "g"), st = new RegExp("^" + tt + "*," + tt + "*"), at = new RegExp("^" + tt + "*([>+~]|" + tt + ")" + tt + "*"), ut = new RegExp("=" + tt + "*([^\\]'\"]*?)" + tt + "*\\]", "g"), lt = new RegExp(it), ct = new RegExp("^" + et + "$"), ht = {
            ID: new RegExp("^#(" + et + ")"),
            CLASS: new RegExp("^\\.(" + et + ")"),
            TAG: new RegExp("^(" + et + "|[*])"),
            ATTR: new RegExp("^" + nt),
            PSEUDO: new RegExp("^" + it),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + tt + "*(even|odd|(([+-]|)(\\d*)n|)" + tt + "*(?:([+-]|)" + tt + "*(\\d+)|))" + tt + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + K + ")$", "i"),
            needsContext: new RegExp("^" + tt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + tt + "*((?:-\\d)?\\d*)" + tt + "*\\)|)(?=[^-]|$)", "i")
        }, ft = /^(?:input|select|textarea|button)$/i, dt = /^h\d$/i, pt = /^[^{]+\{\s*\[native \w/, mt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, gt = /[+~]/, vt = /'|\\/g, yt = new RegExp("\\\\([\\da-f]{1,6}" + tt + "?|(" + tt + ")|.)", "ig"), bt = function(t, e, n) {
            var i = "0x" + e - 65536;
            return i != i || n ? e : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320);
        }, wt = function() {
            N();
        };
        try {
            Q.apply(X = J.call(W.childNodes), W.childNodes), X[W.childNodes.length].nodeType;
        } catch (t) {
            Q = {
                apply: X.length ? function(t, e) {
                    G.apply(t, J.call(e));
                } : function(t, e) {
                    for (var n = t.length, i = 0; t[n++] = e[i++]; ) ;
                    t.length = n - 1;
                }
            };
        }
        b = e.support = {}, _ = e.isXML = function(t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return !!e && "HTML" !== e.nodeName;
        }, N = e.setDocument = function(t) {
            var e, n, i = t ? t.ownerDocument || t : W;
            return i !== I && 9 === i.nodeType && i.documentElement ? (I = i, P = I.documentElement, M = !_(I), 
            (n = I.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", wt, !1) : n.attachEvent && n.attachEvent("onunload", wt)), 
            b.attributes = r(function(t) {
                return t.className = "i", !t.getAttribute("className");
            }), b.getElementsByTagName = r(function(t) {
                return t.appendChild(I.createComment("")), !t.getElementsByTagName("*").length;
            }), b.getElementsByClassName = pt.test(I.getElementsByClassName), b.getById = r(function(t) {
                return P.appendChild(t).id = L, !I.getElementsByName || !I.getElementsByName(L).length;
            }), b.getById ? (w.find.ID = function(t, e) {
                if (void 0 !== e.getElementById && M) {
                    var n = e.getElementById(t);
                    return n ? [ n ] : [];
                }
            }, w.filter.ID = function(t) {
                var e = t.replace(yt, bt);
                return function(t) {
                    return t.getAttribute("id") === e;
                };
            }) : (delete w.find.ID, w.filter.ID = function(t) {
                var e = t.replace(yt, bt);
                return function(t) {
                    var n = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                    return n && n.value === e;
                };
            }), w.find.TAG = b.getElementsByTagName ? function(t, e) {
                return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : b.qsa ? e.querySelectorAll(t) : void 0;
            } : function(t, e) {
                var n, i = [], r = 0, o = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (;n = o[r++]; ) 1 === n.nodeType && i.push(n);
                    return i;
                }
                return o;
            }, w.find.CLASS = b.getElementsByClassName && function(t, e) {
                return void 0 !== e.getElementsByClassName && M ? e.getElementsByClassName(t) : void 0;
            }, O = [], D = [], (b.qsa = pt.test(I.querySelectorAll)) && (r(function(t) {
                P.appendChild(t).innerHTML = "<a id='" + L + "'></a><select id='" + L + "-\r\\' msallowcapture=''><option selected=''></option></select>", 
                t.querySelectorAll("[msallowcapture^='']").length && D.push("[*^$]=" + tt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || D.push("\\[" + tt + "*(?:value|" + K + ")"), 
                t.querySelectorAll("[id~=" + L + "-]").length || D.push("~="), t.querySelectorAll(":checked").length || D.push(":checked"), 
                t.querySelectorAll("a#" + L + "+*").length || D.push(".#.+[+~]");
            }), r(function(t) {
                var e = I.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && D.push("name" + tt + "*[*^$|!~]?="), 
                t.querySelectorAll(":enabled").length || D.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), 
                D.push(",.*:");
            })), (b.matchesSelector = pt.test(H = P.matches || P.webkitMatchesSelector || P.mozMatchesSelector || P.oMatchesSelector || P.msMatchesSelector)) && r(function(t) {
                b.disconnectedMatch = H.call(t, "div"), H.call(t, "[s!='']:x"), O.push("!=", it);
            }), D = D.length && new RegExp(D.join("|")), O = O.length && new RegExp(O.join("|")), e = pt.test(P.compareDocumentPosition), 
            j = e || pt.test(P.contains) ? function(t, e) {
                var n = 9 === t.nodeType ? t.documentElement : t, i = e && e.parentNode;
                return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)));
            } : function(t, e) {
                if (e) for (;e = e.parentNode; ) if (e === t) return !0;
                return !1;
            }, $ = e ? function(t, e) {
                if (t === e) return A = !0, 0;
                var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return n || (1 & (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !b.sortDetached && e.compareDocumentPosition(t) === n ? t === I || t.ownerDocument === W && j(W, t) ? -1 : e === I || e.ownerDocument === W && j(W, e) ? 1 : E ? Z(E, t) - Z(E, e) : 0 : 4 & n ? -1 : 1);
            } : function(t, e) {
                if (t === e) return A = !0, 0;
                var n, i = 0, r = t.parentNode, o = e.parentNode, a = [ t ], u = [ e ];
                if (!r || !o) return t === I ? -1 : e === I ? 1 : r ? -1 : o ? 1 : E ? Z(E, t) - Z(E, e) : 0;
                if (r === o) return s(t, e);
                for (n = t; n = n.parentNode; ) a.unshift(n);
                for (n = e; n = n.parentNode; ) u.unshift(n);
                for (;a[i] === u[i]; ) i++;
                return i ? s(a[i], u[i]) : a[i] === W ? -1 : u[i] === W ? 1 : 0;
            }, I) : I;
        }, e.matches = function(t, n) {
            return e(t, null, null, n);
        }, e.matchesSelector = function(t, n) {
            if ((t.ownerDocument || t) !== I && N(t), n = n.replace(ut, "='$1']"), b.matchesSelector && M && !B[n + " "] && (!O || !O.test(n)) && (!D || !D.test(n))) try {
                var i = H.call(t, n);
                if (i || b.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i;
            } catch (t) {}
            return e(n, I, null, [ t ]).length > 0;
        }, e.contains = function(t, e) {
            return (t.ownerDocument || t) !== I && N(t), j(t, e);
        }, e.attr = function(t, e) {
            (t.ownerDocument || t) !== I && N(t);
            var n = w.attrHandle[e.toLowerCase()], i = n && V.call(w.attrHandle, e.toLowerCase()) ? n(t, e, !M) : void 0;
            return void 0 !== i ? i : b.attributes || !M ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null;
        }, e.error = function(t) {
            throw new Error("Syntax error, unrecognized expression: " + t);
        }, e.uniqueSort = function(t) {
            var e, n = [], i = 0, r = 0;
            if (A = !b.detectDuplicates, E = !b.sortStable && t.slice(0), t.sort($), A) {
                for (;e = t[r++]; ) e === t[r] && (i = n.push(r));
                for (;i--; ) t.splice(n[i], 1);
            }
            return E = null, t;
        }, x = e.getText = function(t) {
            var e, n = "", i = 0, r = t.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) n += x(t);
                } else if (3 === r || 4 === r) return t.nodeValue;
            } else for (;e = t[i++]; ) n += x(e);
            return n;
        }, (w = e.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: ht,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(t) {
                    return t[1] = t[1].replace(yt, bt), t[3] = (t[3] || t[4] || t[5] || "").replace(yt, bt), "~=" === t[2] && (t[3] = " " + t[3] + " "), 
                    t.slice(0, 4);
                },
                CHILD: function(t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), 
                    t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t;
                },
                PSEUDO: function(t) {
                    var e, n = !t[6] && t[2];
                    return ht.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && lt.test(n) && (e = T(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), 
                    t[2] = n.slice(0, e)), t.slice(0, 3));
                }
            },
            filter: {
                TAG: function(t) {
                    var e = t.replace(yt, bt).toLowerCase();
                    return "*" === t ? function() {
                        return !0;
                    } : function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e;
                    };
                },
                CLASS: function(t) {
                    var e = q[t + " "];
                    return e || (e = new RegExp("(^|" + tt + ")" + t + "(" + tt + "|$)")) && q(t, function(t) {
                        return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "");
                    });
                },
                ATTR: function(t, n, i) {
                    return function(r) {
                        var o = e.attr(r, t);
                        return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(rt, " ") + " ").indexOf(i) > -1 : "|=" === n && (o === i || o.slice(0, i.length + 1) === i + "-"));
                    };
                },
                CHILD: function(t, e, n, i, r) {
                    var o = "nth" !== t.slice(0, 3), s = "last" !== t.slice(-4), a = "of-type" === e;
                    return 1 === i && 0 === r ? function(t) {
                        return !!t.parentNode;
                    } : function(e, n, u) {
                        var l, c, h, f, d, p, m = o !== s ? "nextSibling" : "previousSibling", g = e.parentNode, v = a && e.nodeName.toLowerCase(), y = !u && !a, b = !1;
                        if (g) {
                            if (o) {
                                for (;m; ) {
                                    for (f = e; f = f[m]; ) if (a ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                                    p = m = "only" === t && !p && "nextSibling";
                                }
                                return !0;
                            }
                            if (p = [ s ? g.firstChild : g.lastChild ], s && y) {
                                for (b = (d = (l = (c = (h = (f = g)[L] || (f[L] = {}))[f.uniqueID] || (h[f.uniqueID] = {}))[t] || [])[0] === F && l[1]) && l[2], 
                                f = d && g.childNodes[d]; f = ++d && f && f[m] || (b = d = 0) || p.pop(); ) if (1 === f.nodeType && ++b && f === e) {
                                    c[t] = [ F, d, b ];
                                    break;
                                }
                            } else if (y && (f = e, h = f[L] || (f[L] = {}), c = h[f.uniqueID] || (h[f.uniqueID] = {}), l = c[t] || [], 
                            d = l[0] === F && l[1], b = d), !1 === b) for (;(f = ++d && f && f[m] || (b = d = 0) || p.pop()) && ((a ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++b || (y && (h = f[L] || (f[L] = {}), 
                            c = h[f.uniqueID] || (h[f.uniqueID] = {}), c[t] = [ F, b ]), f !== e)); ) ;
                            return (b -= r) === i || b % i == 0 && b / i >= 0;
                        }
                    };
                },
                PSEUDO: function(t, n) {
                    var r, o = w.pseudos[t] || w.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return o[L] ? o(n) : o.length > 1 ? (r = [ t, t, "", n ], w.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function(t, e) {
                        for (var i, r = o(t, n), s = r.length; s--; ) i = Z(t, r[s]), t[i] = !(e[i] = r[s]);
                    }) : function(t) {
                        return o(t, 0, r);
                    }) : o;
                }
            },
            pseudos: {
                not: i(function(t) {
                    var e = [], n = [], r = C(t.replace(ot, "$1"));
                    return r[L] ? i(function(t, e, n, i) {
                        for (var o, s = r(t, null, i, []), a = t.length; a--; ) (o = s[a]) && (t[a] = !(e[a] = o));
                    }) : function(t, i, o) {
                        return e[0] = t, r(e, null, o, n), e[0] = null, !n.pop();
                    };
                }),
                has: i(function(t) {
                    return function(n) {
                        return e(t, n).length > 0;
                    };
                }),
                contains: i(function(t) {
                    return t = t.replace(yt, bt), function(e) {
                        return (e.textContent || e.innerText || x(e)).indexOf(t) > -1;
                    };
                }),
                lang: i(function(t) {
                    return ct.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(yt, bt).toLowerCase(), function(e) {
                        var n;
                        do {
                            if (n = M ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-");
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1;
                    };
                }),
                target: function(e) {
                    var n = t.location && t.location.hash;
                    return n && n.slice(1) === e.id;
                },
                root: function(t) {
                    return t === P;
                },
                focus: function(t) {
                    return t === I.activeElement && (!I.hasFocus || I.hasFocus()) && !!(t.type || t.href || ~t.tabIndex);
                },
                enabled: function(t) {
                    return !1 === t.disabled;
                },
                disabled: function(t) {
                    return !0 === t.disabled;
                },
                checked: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected;
                },
                selected: function(t) {
                    return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected;
                },
                empty: function(t) {
                    for (t = t.firstChild; t; t = t.nextSibling) if (t.nodeType < 6) return !1;
                    return !0;
                },
                parent: function(t) {
                    return !w.pseudos.empty(t);
                },
                header: function(t) {
                    return dt.test(t.nodeName);
                },
                input: function(t) {
                    return ft.test(t.nodeName);
                },
                button: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e;
                },
                text: function(t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase());
                },
                first: l(function() {
                    return [ 0 ];
                }),
                last: l(function(t, e) {
                    return [ e - 1 ];
                }),
                eq: l(function(t, e, n) {
                    return [ 0 > n ? n + e : n ];
                }),
                even: l(function(t, e) {
                    for (var n = 0; e > n; n += 2) t.push(n);
                    return t;
                }),
                odd: l(function(t, e) {
                    for (var n = 1; e > n; n += 2) t.push(n);
                    return t;
                }),
                lt: l(function(t, e, n) {
                    for (var i = 0 > n ? n + e : n; --i >= 0; ) t.push(i);
                    return t;
                }),
                gt: l(function(t, e, n) {
                    for (var i = 0 > n ? n + e : n; ++i < e; ) t.push(i);
                    return t;
                })
            }
        }).pseudos.nth = w.pseudos.eq;
        for (y in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) w.pseudos[y] = a(y);
        for (y in {
            submit: !0,
            reset: !0
        }) w.pseudos[y] = u(y);
        return h.prototype = w.filters = w.pseudos, w.setFilters = new h(), T = e.tokenize = function(t, n) {
            var i, r, o, s, a, u, l, c = z[t + " "];
            if (c) return n ? 0 : c.slice(0);
            for (a = t, u = [], l = w.preFilter; a; ) {
                i && !(r = st.exec(a)) || (r && (a = a.slice(r[0].length) || a), u.push(o = [])), i = !1, (r = at.exec(a)) && (i = r.shift(), 
                o.push({
                    value: i,
                    type: r[0].replace(ot, " ")
                }), a = a.slice(i.length));
                for (s in w.filter) !(r = ht[s].exec(a)) || l[s] && !(r = l[s](r)) || (i = r.shift(), o.push({
                    value: i,
                    type: s,
                    matches: r
                }), a = a.slice(i.length));
                if (!i) break;
            }
            return n ? a.length : a ? e.error(t) : z(t, u).slice(0);
        }, C = e.compile = function(t, n) {
            var r, o = [], s = [], a = B[t + " "];
            if (!a) {
                for (n || (n = T(t)), r = n.length; r--; ) (a = v(n[r]))[L] ? o.push(a) : s.push(a);
                (a = B(t, function(t, n) {
                    var r = n.length > 0, o = t.length > 0, s = function(i, s, a, u, l) {
                        var c, h, f, d = 0, p = "0", g = i && [], v = [], y = S, b = i || o && w.find.TAG("*", l), x = F += null == y ? 1 : Math.random() || .1, _ = b.length;
                        for (l && (S = s === I || s || l); p !== _ && null != (c = b[p]); p++) {
                            if (o && c) {
                                for (h = 0, s || c.ownerDocument === I || (N(c), a = !M); f = t[h++]; ) if (f(c, s || I, a)) {
                                    u.push(c);
                                    break;
                                }
                                l && (F = x);
                            }
                            r && ((c = !f && c) && d--, i && g.push(c));
                        }
                        if (d += p, r && p !== d) {
                            for (h = 0; f = n[h++]; ) f(g, v, s, a);
                            if (i) {
                                if (d > 0) for (;p--; ) g[p] || v[p] || (v[p] = Y.call(u));
                                v = m(v);
                            }
                            Q.apply(u, v), l && !i && v.length > 0 && d + n.length > 1 && e.uniqueSort(u);
                        }
                        return l && (F = x, S = y), g;
                    };
                    return r ? i(s) : s;
                }(s, o))).selector = t;
            }
            return a;
        }, k = e.select = function(t, e, n, i) {
            var r, o, s, a, u, l = "function" == typeof t && t, h = !i && T(t = l.selector || t);
            if (n = n || [], 1 === h.length) {
                if ((o = h[0] = h[0].slice(0)).length > 2 && "ID" === (s = o[0]).type && b.getById && 9 === e.nodeType && M && w.relative[o[1].type]) {
                    if (!(e = (w.find.ID(s.matches[0].replace(yt, bt), e) || [])[0])) return n;
                    l && (e = e.parentNode), t = t.slice(o.shift().value.length);
                }
                for (r = ht.needsContext.test(t) ? 0 : o.length; r-- && (s = o[r], !w.relative[a = s.type]); ) if ((u = w.find[a]) && (i = u(s.matches[0].replace(yt, bt), gt.test(o[0].type) && c(e.parentNode) || e))) {
                    if (o.splice(r, 1), !(t = i.length && f(o))) return Q.apply(n, i), n;
                    break;
                }
            }
            return (l || C(t, h))(i, e, !M, n, !e || gt.test(t) && c(e.parentNode) || e), n;
        }, b.sortStable = L.split("").sort($).join("") === L, b.detectDuplicates = !!A, N(), b.sortDetached = r(function(t) {
            return 1 & t.compareDocumentPosition(I.createElement("div"));
        }), r(function(t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href");
        }) || o("type|href|height|width", function(t, e, n) {
            return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2);
        }), b.attributes && r(function(t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value");
        }) || o("value", function(t, e, n) {
            return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue;
        }), r(function(t) {
            return null == t.getAttribute("disabled");
        }) || o(K, function(t, e, n) {
            var i;
            return n ? void 0 : !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null;
        }), e;
    }(t);
    K.find = rt, K.expr = rt.selectors, K.expr[":"] = K.expr.pseudos, K.uniqueSort = K.unique = rt.uniqueSort, 
    K.text = rt.getText, K.isXMLDoc = rt.isXML, K.contains = rt.contains;
    var ot = function(t, e, n) {
        for (var i = [], r = void 0 !== n; (t = t[e]) && 9 !== t.nodeType; ) if (1 === t.nodeType) {
            if (r && K(t).is(n)) break;
            i.push(t);
        }
        return i;
    }, st = function(t, e) {
        for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
        return n;
    }, at = K.expr.match.needsContext, ut = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, lt = /^.[^:#\[\.,]*$/;
    K.filter = function(t, e, n) {
        var i = e[0];
        return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? K.find.matchesSelector(i, t) ? [ i ] : [] : K.find.matches(t, K.grep(e, function(t) {
            return 1 === t.nodeType;
        }));
    }, K.fn.extend({
        find: function(t) {
            var e, n = this.length, i = [], r = this;
            if ("string" != typeof t) return this.pushStack(K(t).filter(function() {
                for (e = 0; n > e; e++) if (K.contains(r[e], this)) return !0;
            }));
            for (e = 0; n > e; e++) K.find(t, r[e], i);
            return i = this.pushStack(n > 1 ? K.unique(i) : i), i.selector = this.selector ? this.selector + " " + t : t, 
            i;
        },
        filter: function(t) {
            return this.pushStack(i(this, t || [], !1));
        },
        not: function(t) {
            return this.pushStack(i(this, t || [], !0));
        },
        is: function(t) {
            return !!i(this, "string" == typeof t && at.test(t) ? K(t) : t || [], !1).length;
        }
    });
    var ct, ht = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (K.fn.init = function(t, e, n) {
        var i, r;
        if (!t) return this;
        if (n = n || ct, "string" == typeof t) {
            if (!(i = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [ null, t, null ] : ht.exec(t)) || !i[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
            if (i[1]) {
                if (e = e instanceof K ? e[0] : e, K.merge(this, K.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : $, !0)), 
                ut.test(i[1]) && K.isPlainObject(e)) for (i in e) K.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                return this;
            }
            return (r = $.getElementById(i[2])) && r.parentNode && (this.length = 1, this[0] = r), this.context = $, 
            this.selector = t, this;
        }
        return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : K.isFunction(t) ? void 0 !== n.ready ? n.ready(t) : t(K) : (void 0 !== t.selector && (this.selector = t.selector, 
        this.context = t.context), K.makeArray(t, this));
    }).prototype = K.fn, ct = K($);
    var ft = /^(?:parents|prev(?:Until|All))/, dt = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    K.fn.extend({
        has: function(t) {
            var e = K(t, this), n = e.length;
            return this.filter(function() {
                for (var t = 0; n > t; t++) if (K.contains(this, e[t])) return !0;
            });
        },
        closest: function(t, e) {
            for (var n, i = 0, r = this.length, o = [], s = at.test(t) || "string" != typeof t ? K(t, e || this.context) : 0; r > i; i++) for (n = this[i]; n && n !== e; n = n.parentNode) if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && K.find.matchesSelector(n, t))) {
                o.push(n);
                break;
            }
            return this.pushStack(o.length > 1 ? K.uniqueSort(o) : o);
        },
        index: function(t) {
            return t ? "string" == typeof t ? Y.call(K(t), this[0]) : Y.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function(t, e) {
            return this.pushStack(K.uniqueSort(K.merge(this.get(), K(t, e))));
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
        }
    }), K.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null;
        },
        parents: function(t) {
            return ot(t, "parentNode");
        },
        parentsUntil: function(t, e, n) {
            return ot(t, "parentNode", n);
        },
        next: function(t) {
            return r(t, "nextSibling");
        },
        prev: function(t) {
            return r(t, "previousSibling");
        },
        nextAll: function(t) {
            return ot(t, "nextSibling");
        },
        prevAll: function(t) {
            return ot(t, "previousSibling");
        },
        nextUntil: function(t, e, n) {
            return ot(t, "nextSibling", n);
        },
        prevUntil: function(t, e, n) {
            return ot(t, "previousSibling", n);
        },
        siblings: function(t) {
            return st((t.parentNode || {}).firstChild, t);
        },
        children: function(t) {
            return st(t.firstChild);
        },
        contents: function(t) {
            return t.contentDocument || K.merge([], t.childNodes);
        }
    }, function(t, e) {
        K.fn[t] = function(n, i) {
            var r = K.map(this, e, n);
            return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (r = K.filter(i, r)), this.length > 1 && (dt[t] || K.uniqueSort(r), 
            ft.test(t) && r.reverse()), this.pushStack(r);
        };
    });
    var pt = /\S+/g;
    K.Callbacks = function(t) {
        t = "string" == typeof t ? function(t) {
            var e = {};
            return K.each(t.match(pt) || [], function(t, n) {
                e[n] = !0;
            }), e;
        }(t) : K.extend({}, t);
        var e, n, i, r, o = [], s = [], a = -1, u = function() {
            for (r = t.once, i = e = !0; s.length; a = -1) for (n = s.shift(); ++a < o.length; ) !1 === o[a].apply(n[0], n[1]) && t.stopOnFalse && (a = o.length, 
            n = !1);
            t.memory || (n = !1), e = !1, r && (o = n ? [] : "");
        }, l = {
            add: function() {
                return o && (n && !e && (a = o.length - 1, s.push(n)), function e(n) {
                    K.each(n, function(n, i) {
                        K.isFunction(i) ? t.unique && l.has(i) || o.push(i) : i && i.length && "string" !== K.type(i) && e(i);
                    });
                }(arguments), n && !e && u()), this;
            },
            remove: function() {
                return K.each(arguments, function(t, e) {
                    for (var n; (n = K.inArray(e, o, n)) > -1; ) o.splice(n, 1), a >= n && a--;
                }), this;
            },
            has: function(t) {
                return t ? K.inArray(t, o) > -1 : o.length > 0;
            },
            empty: function() {
                return o && (o = []), this;
            },
            disable: function() {
                return r = s = [], o = n = "", this;
            },
            disabled: function() {
                return !o;
            },
            lock: function() {
                return r = s = [], n || (o = n = ""), this;
            },
            locked: function() {
                return !!r;
            },
            fireWith: function(t, n) {
                return r || (n = n || [], n = [ t, n.slice ? n.slice() : n ], s.push(n), e || u()), this;
            },
            fire: function() {
                return l.fireWith(this, arguments), this;
            },
            fired: function() {
                return !!i;
            }
        };
        return l;
    }, K.extend({
        Deferred: function(t) {
            var e = [ [ "resolve", "done", K.Callbacks("once memory"), "resolved" ], [ "reject", "fail", K.Callbacks("once memory"), "rejected" ], [ "notify", "progress", K.Callbacks("memory") ] ], n = "pending", i = {
                state: function() {
                    return n;
                },
                always: function() {
                    return r.done(arguments).fail(arguments), this;
                },
                then: function() {
                    var t = arguments;
                    return K.Deferred(function(n) {
                        K.each(e, function(e, o) {
                            var s = K.isFunction(t[e]) && t[e];
                            r[o[1]](function() {
                                var t = s && s.apply(this, arguments);
                                t && K.isFunction(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === i ? n.promise() : this, s ? [ t ] : arguments);
                            });
                        }), t = null;
                    }).promise();
                },
                promise: function(t) {
                    return null != t ? K.extend(t, i) : i;
                }
            }, r = {};
            return i.pipe = i.then, K.each(e, function(t, o) {
                var s = o[2], a = o[3];
                i[o[1]] = s.add, a && s.add(function() {
                    n = a;
                }, e[1 ^ t][2].disable, e[2][2].lock), r[o[0]] = function() {
                    return r[o[0] + "With"](this === r ? i : this, arguments), this;
                }, r[o[0] + "With"] = s.fireWith;
            }), i.promise(r), t && t.call(r, r), r;
        },
        when: function(t) {
            var e, n, i, r = 0, o = U.call(arguments), s = o.length, a = 1 !== s || t && K.isFunction(t.promise) ? s : 0, u = 1 === a ? t : K.Deferred(), l = function(t, n, i) {
                return function(r) {
                    n[t] = this, i[t] = arguments.length > 1 ? U.call(arguments) : r, i === e ? u.notifyWith(n, i) : --a || u.resolveWith(n, i);
                };
            };
            if (s > 1) for (e = new Array(s), n = new Array(s), i = new Array(s); s > r; r++) o[r] && K.isFunction(o[r].promise) ? o[r].promise().progress(l(r, n, e)).done(l(r, i, o)).fail(u.reject) : --a;
            return a || u.resolveWith(i, o), u.promise();
        }
    });
    var mt;
    K.fn.ready = function(t) {
        return K.ready.promise().done(t), this;
    }, K.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) {
            t ? K.readyWait++ : K.ready(!0);
        },
        ready: function(t) {
            (!0 === t ? --K.readyWait : K.isReady) || (K.isReady = !0, !0 !== t && --K.readyWait > 0 || (mt.resolveWith($, [ K ]), 
            K.fn.triggerHandler && (K($).triggerHandler("ready"), K($).off("ready"))));
        }
    }), K.ready.promise = function(e) {
        return mt || (mt = K.Deferred(), "complete" === $.readyState || "loading" !== $.readyState && !$.documentElement.doScroll ? t.setTimeout(K.ready) : ($.addEventListener("DOMContentLoaded", o), 
        t.addEventListener("load", o))), mt.promise(e);
    }, K.ready.promise();
    var gt = function(t, e, n, i, r, o, s) {
        var a = 0, u = t.length, l = null == n;
        if ("object" === K.type(n)) {
            r = !0;
            for (a in n) gt(t, e, a, n[a], !0, o, s);
        } else if (void 0 !== i && (r = !0, K.isFunction(i) || (s = !0), l && (s ? (e.call(t, i), e = null) : (l = e, 
        e = function(t, e, n) {
            return l.call(K(t), n);
        })), e)) for (;u > a; a++) e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
        return r ? t : l ? e.call(t) : u ? e(t[0], n) : o;
    }, vt = function(t) {
        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType;
    };
    s.uid = 1, s.prototype = {
        register: function(t, e) {
            var n = e || {};
            return t.nodeType ? t[this.expando] = n : Object.defineProperty(t, this.expando, {
                value: n,
                writable: !0,
                configurable: !0
            }), t[this.expando];
        },
        cache: function(t) {
            if (!vt(t)) return {};
            var e = t[this.expando];
            return e || (e = {}, vt(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                value: e,
                configurable: !0
            }))), e;
        },
        set: function(t, e, n) {
            var i, r = this.cache(t);
            if ("string" == typeof e) r[e] = n; else for (i in e) r[i] = e[i];
            return r;
        },
        get: function(t, e) {
            return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][e];
        },
        access: function(t, e, n) {
            var i;
            return void 0 === e || e && "string" == typeof e && void 0 === n ? void 0 !== (i = this.get(t, e)) ? i : this.get(t, K.camelCase(e)) : (this.set(t, e, n), 
            void 0 !== n ? n : e);
        },
        remove: function(t, e) {
            var n, i, r, o = t[this.expando];
            if (void 0 !== o) {
                if (void 0 === e) this.register(t); else {
                    K.isArray(e) ? i = e.concat(e.map(K.camelCase)) : (r = K.camelCase(e), e in o ? i = [ e, r ] : (i = r, 
                    i = i in o ? [ i ] : i.match(pt) || [])), n = i.length;
                    for (;n--; ) delete o[i[n]];
                }
                (void 0 === e || K.isEmptyObject(o)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando]);
            }
        },
        hasData: function(t) {
            var e = t[this.expando];
            return void 0 !== e && !K.isEmptyObject(e);
        }
    };
    var yt = new s(), bt = new s(), wt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, xt = /[A-Z]/g;
    K.extend({
        hasData: function(t) {
            return bt.hasData(t) || yt.hasData(t);
        },
        data: function(t, e, n) {
            return bt.access(t, e, n);
        },
        removeData: function(t, e) {
            bt.remove(t, e);
        },
        _data: function(t, e, n) {
            return yt.access(t, e, n);
        },
        _removeData: function(t, e) {
            yt.remove(t, e);
        }
    }), K.fn.extend({
        data: function(t, e) {
            var n, i, r, o = this[0], s = o && o.attributes;
            if (void 0 === t) {
                if (this.length && (r = bt.get(o), 1 === o.nodeType && !yt.get(o, "hasDataAttrs"))) {
                    for (n = s.length; n--; ) s[n] && 0 === (i = s[n].name).indexOf("data-") && (i = K.camelCase(i.slice(5)), 
                    a(o, i, r[i]));
                    yt.set(o, "hasDataAttrs", !0);
                }
                return r;
            }
            return "object" == typeof t ? this.each(function() {
                bt.set(this, t);
            }) : gt(this, function(e) {
                var n, i;
                if (o && void 0 === e) {
                    if (void 0 !== (n = bt.get(o, t) || bt.get(o, t.replace(xt, "-$&").toLowerCase()))) return n;
                    if (i = K.camelCase(t), void 0 !== (n = bt.get(o, i))) return n;
                    if (void 0 !== (n = a(o, i, void 0))) return n;
                } else i = K.camelCase(t), this.each(function() {
                    var n = bt.get(this, i);
                    bt.set(this, i, e), t.indexOf("-") > -1 && void 0 !== n && bt.set(this, t, e);
                });
            }, null, e, arguments.length > 1, null, !0);
        },
        removeData: function(t) {
            return this.each(function() {
                bt.remove(this, t);
            });
        }
    }), K.extend({
        queue: function(t, e, n) {
            var i;
            return t ? (e = (e || "fx") + "queue", i = yt.get(t, e), n && (!i || K.isArray(n) ? i = yt.access(t, e, K.makeArray(n)) : i.push(n)), 
            i || []) : void 0;
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var n = K.queue(t, e), i = n.length, r = n.shift(), o = K._queueHooks(t, e);
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === e && n.unshift("inprogress"), delete o.stop, 
            r.call(t, function() {
                K.dequeue(t, e);
            }, o)), !i && o && o.empty.fire();
        },
        _queueHooks: function(t, e) {
            var n = e + "queueHooks";
            return yt.get(t, n) || yt.access(t, n, {
                empty: K.Callbacks("once memory").add(function() {
                    yt.remove(t, [ e + "queue", n ]);
                })
            });
        }
    }), K.fn.extend({
        queue: function(t, e) {
            var n = 2;
            return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? K.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                var n = K.queue(this, t, e);
                K._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && K.dequeue(this, t);
            });
        },
        dequeue: function(t) {
            return this.each(function() {
                K.dequeue(this, t);
            });
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", []);
        },
        promise: function(t, e) {
            var n, i = 1, r = K.Deferred(), o = this, s = this.length, a = function() {
                --i || r.resolveWith(o, [ o ]);
            };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--; ) (n = yt.get(o[s], t + "queueHooks")) && n.empty && (i++, 
            n.empty.add(a));
            return a(), r.promise(e);
        }
    });
    var _t = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Tt = new RegExp("^(?:([+-])=|)(" + _t + ")([a-z%]*)$", "i"), Ct = [ "Top", "Right", "Bottom", "Left" ], kt = function(t, e) {
        return t = e || t, "none" === K.css(t, "display") || !K.contains(t.ownerDocument, t);
    }, St = /^(?:checkbox|radio)$/i, Et = /<([\w:-]+)/, At = /^$|\/(?:java|ecma)script/i, Nt = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        thead: [ 1, "<table>", "</table>" ],
        col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: [ 0, "", "" ]
    };
    Nt.optgroup = Nt.option, Nt.tbody = Nt.tfoot = Nt.colgroup = Nt.caption = Nt.thead, Nt.th = Nt.td;
    var It = /<|&#?\w+;/;
    !function() {
        var t = $.createDocumentFragment().appendChild($.createElement("div")), e = $.createElement("input");
        e.setAttribute("type", "radio"), e.setAttribute("checked", "checked"), e.setAttribute("name", "t"), 
        t.appendChild(e), Z.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", 
        Z.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue;
    }();
    var Pt = /^key/, Mt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Dt = /^([^.]*)(?:\.(.+)|)/;
    K.event = {
        global: {},
        add: function(t, e, n, i, r) {
            var o, s, a, u, l, c, h, f, d, p, m, g = yt.get(t);
            if (g) for (n.handler && (o = n, n = o.handler, r = o.selector), n.guid || (n.guid = K.guid++), (u = g.events) || (u = g.events = {}), 
            (s = g.handle) || (s = g.handle = function(e) {
                return void 0 !== K && K.event.triggered !== e.type ? K.event.dispatch.apply(t, arguments) : void 0;
            }), l = (e = (e || "").match(pt) || [ "" ]).length; l--; ) a = Dt.exec(e[l]) || [], d = m = a[1], p = (a[2] || "").split(".").sort(), 
            d && (h = K.event.special[d] || {}, d = (r ? h.delegateType : h.bindType) || d, h = K.event.special[d] || {}, 
            c = K.extend({
                type: d,
                origType: m,
                data: i,
                handler: n,
                guid: n.guid,
                selector: r,
                needsContext: r && K.expr.match.needsContext.test(r),
                namespace: p.join(".")
            }, o), (f = u[d]) || (f = u[d] = [], f.delegateCount = 0, h.setup && !1 !== h.setup.call(t, i, p, s) || t.addEventListener && t.addEventListener(d, s)), 
            h.add && (h.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), r ? f.splice(f.delegateCount++, 0, c) : f.push(c), 
            K.event.global[d] = !0);
        },
        remove: function(t, e, n, i, r) {
            var o, s, a, u, l, c, h, f, d, p, m, g = yt.hasData(t) && yt.get(t);
            if (g && (u = g.events)) {
                for (l = (e = (e || "").match(pt) || [ "" ]).length; l--; ) if (a = Dt.exec(e[l]) || [], d = m = a[1], 
                p = (a[2] || "").split(".").sort(), d) {
                    for (h = K.event.special[d] || {}, f = u[d = (i ? h.delegateType : h.bindType) || d] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), 
                    s = o = f.length; o--; ) c = f[o], !r && m !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (f.splice(o, 1), 
                    c.selector && f.delegateCount--, h.remove && h.remove.call(t, c));
                    s && !f.length && (h.teardown && !1 !== h.teardown.call(t, p, g.handle) || K.removeEvent(t, d, g.handle), 
                    delete u[d]);
                } else for (d in u) K.event.remove(t, d + e[l], n, i, !0);
                K.isEmptyObject(u) && yt.remove(t, "handle events");
            }
        },
        dispatch: function(t) {
            t = K.event.fix(t);
            var e, n, i, r, o, s = [], a = U.call(arguments), u = (yt.get(this, "events") || {})[t.type] || [], l = K.event.special[t.type] || {};
            if (a[0] = t, t.delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, t)) {
                for (s = K.event.handlers.call(this, t, u), e = 0; (r = s[e++]) && !t.isPropagationStopped(); ) for (t.currentTarget = r.elem, 
                n = 0; (o = r.handlers[n++]) && !t.isImmediatePropagationStopped(); ) t.rnamespace && !t.rnamespace.test(o.namespace) || (t.handleObj = o, 
                t.data = o.data, void 0 !== (i = ((K.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, a)) && !1 === (t.result = i) && (t.preventDefault(), 
                t.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, t), t.result;
            }
        },
        handlers: function(t, e) {
            var n, i, r, o, s = [], a = e.delegateCount, u = t.target;
            if (a && u.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1)) for (;u !== this; u = u.parentNode || this) if (1 === u.nodeType && (!0 !== u.disabled || "click" !== t.type)) {
                for (i = [], n = 0; a > n; n++) o = e[n], r = o.selector + " ", void 0 === i[r] && (i[r] = o.needsContext ? K(r, this).index(u) > -1 : K.find(r, this, null, [ u ]).length), 
                i[r] && i.push(o);
                i.length && s.push({
                    elem: u,
                    handlers: i
                });
            }
            return a < e.length && s.push({
                elem: this,
                handlers: e.slice(a)
            }), s;
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t;
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(t, e) {
                var n, i, r, o = e.button;
                return null == t.pageX && null != e.clientX && (n = t.target.ownerDocument || $, i = n.documentElement, 
                r = n.body, t.pageX = e.clientX + (i && i.scrollLeft || r && r.scrollLeft || 0) - (i && i.clientLeft || r && r.clientLeft || 0), 
                t.pageY = e.clientY + (i && i.scrollTop || r && r.scrollTop || 0) - (i && i.clientTop || r && r.clientTop || 0)), 
                t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t;
            }
        },
        fix: function(t) {
            if (t[K.expando]) return t;
            var e, n, i, r = t.type, o = t, s = this.fixHooks[r];
            for (s || (this.fixHooks[r] = s = Mt.test(r) ? this.mouseHooks : Pt.test(r) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, 
            t = new K.Event(o), e = i.length; e--; ) n = i[e], t[n] = o[n];
            return t.target || (t.target = $), 3 === t.target.nodeType && (t.target = t.target.parentNode), s.filter ? s.filter(t, o) : t;
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== p() && this.focus ? (this.focus(), !1) : void 0;
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === p() && this.blur ? (this.blur(), !1) : void 0;
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && K.nodeName(this, "input") ? (this.click(), !1) : void 0;
                },
                _default: function(t) {
                    return K.nodeName(t.target, "a");
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result);
                }
            }
        }
    }, K.removeEvent = function(t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n);
    }, K.Event = function(t, e) {
        return this instanceof K.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? f : d) : this.type = t, 
        e && K.extend(this, e), this.timeStamp = t && t.timeStamp || K.now(), void (this[K.expando] = !0)) : new K.Event(t, e);
    }, K.Event.prototype = {
        constructor: K.Event,
        isDefaultPrevented: d,
        isPropagationStopped: d,
        isImmediatePropagationStopped: d,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = f, t && t.preventDefault();
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = f, t && t.stopPropagation();
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = f, t && t.stopImmediatePropagation(), this.stopPropagation();
        }
    }, K.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(t, e) {
        K.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var n, i = t.relatedTarget, r = t.handleObj;
                return i && (i === this || K.contains(this, i)) || (t.type = r.origType, n = r.handler.apply(this, arguments), 
                t.type = e), n;
            }
        };
    }), K.fn.extend({
        on: function(t, e, n, i) {
            return m(this, t, e, n, i);
        },
        one: function(t, e, n, i) {
            return m(this, t, e, n, i, 1);
        },
        off: function(t, e, n) {
            var i, r;
            if (t && t.preventDefault && t.handleObj) return i = t.handleObj, K(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), 
            this;
            if ("object" == typeof t) {
                for (r in t) this.off(r, e, t[r]);
                return this;
            }
            return !1 !== e && "function" != typeof e || (n = e, e = void 0), !1 === n && (n = d), this.each(function() {
                K.event.remove(this, t, n, e);
            });
        }
    });
    var Ot = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, Ht = /<script|<style|<link/i, jt = /checked\s*(?:[^=]|=\s*.checked.)/i, Lt = /^true\/(.*)/, Wt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    K.extend({
        htmlPrefilter: function(t) {
            return t.replace(Ot, "<$1></$2>");
        },
        clone: function(t, e, n) {
            var i, r, o, s, a = t.cloneNode(!0), u = K.contains(t.ownerDocument, t);
            if (!(Z.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || K.isXMLDoc(t))) for (s = l(a), o = l(t), 
            i = 0, r = o.length; r > i; i++) w(o[i], s[i]);
            if (e) if (n) for (o = o || l(t), s = s || l(a), i = 0, r = o.length; r > i; i++) b(o[i], s[i]); else b(t, a);
            return (s = l(a, "script")).length > 0 && c(s, !u && l(t, "script")), a;
        },
        cleanData: function(t) {
            for (var e, n, i, r = K.event.special, o = 0; void 0 !== (n = t[o]); o++) if (vt(n)) {
                if (e = n[yt.expando]) {
                    if (e.events) for (i in e.events) r[i] ? K.event.remove(n, i) : K.removeEvent(n, i, e.handle);
                    n[yt.expando] = void 0;
                }
                n[bt.expando] && (n[bt.expando] = void 0);
            }
        }
    }), K.fn.extend({
        domManip: x,
        detach: function(t) {
            return _(this, t, !0);
        },
        remove: function(t) {
            return _(this, t);
        },
        text: function(t) {
            return gt(this, function(t) {
                return void 0 === t ? K.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t);
                });
            }, null, t, arguments.length);
        },
        append: function() {
            return x(this, arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    g(this, t).appendChild(t);
                }
            });
        },
        prepend: function() {
            return x(this, arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = g(this, t);
                    e.insertBefore(t, e.firstChild);
                }
            });
        },
        before: function() {
            return x(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this);
            });
        },
        after: function() {
            return x(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling);
            });
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (K.cleanData(l(t, !1)), t.textContent = "");
            return this;
        },
        clone: function(t, e) {
            return t = null != t && t, e = null == e ? t : e, this.map(function() {
                return K.clone(this, t, e);
            });
        },
        html: function(t) {
            return gt(this, function(t) {
                var e = this[0] || {}, n = 0, i = this.length;
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                if ("string" == typeof t && !Ht.test(t) && !Nt[(Et.exec(t) || [ "", "" ])[1].toLowerCase()]) {
                    t = K.htmlPrefilter(t);
                    try {
                        for (;i > n; n++) 1 === (e = this[n] || {}).nodeType && (K.cleanData(l(e, !1)), e.innerHTML = t);
                        e = 0;
                    } catch (t) {}
                }
                e && this.empty().append(t);
            }, null, t, arguments.length);
        },
        replaceWith: function() {
            var t = [];
            return x(this, arguments, function(e) {
                var n = this.parentNode;
                K.inArray(this, t) < 0 && (K.cleanData(l(this)), n && n.replaceChild(e, this));
            }, t);
        }
    }), K.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, e) {
        K.fn[t] = function(t) {
            for (var n, i = [], r = K(t), o = r.length - 1, s = 0; o >= s; s++) n = s === o ? this : this.clone(!0), 
            K(r[s])[e](n), X.apply(i, n.get());
            return this.pushStack(i);
        };
    });
    var Ft, Rt = {
        HTML: "block",
        BODY: "block"
    }, qt = /^margin/, zt = new RegExp("^(" + _t + ")(?!px)[a-z%]+$", "i"), Bt = function(e) {
        var n = e.ownerDocument.defaultView;
        return n && n.opener || (n = t), n.getComputedStyle(e);
    }, $t = function(t, e, n, i) {
        var r, o, s = {};
        for (o in e) s[o] = t.style[o], t.style[o] = e[o];
        r = n.apply(t, i || []);
        for (o in e) t.style[o] = s[o];
        return r;
    }, Ut = $.documentElement;
    !function() {
        var e, n, i, r, o = $.createElement("div"), s = $.createElement("div");
        if (s.style) {
            s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", Z.clearCloneStyle = "content-box" === s.style.backgroundClip, 
            o.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", 
            o.appendChild(s);
            function a() {
                s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", 
                s.innerHTML = "", Ut.appendChild(o);
                var a = t.getComputedStyle(s);
                e = "1%" !== a.top, r = "2px" === a.marginLeft, n = "4px" === a.width, s.style.marginRight = "50%", 
                i = "4px" === a.marginRight, Ut.removeChild(o);
            }
            K.extend(Z, {
                pixelPosition: function() {
                    return a(), e;
                },
                boxSizingReliable: function() {
                    return null == n && a(), n;
                },
                pixelMarginRight: function() {
                    return null == n && a(), i;
                },
                reliableMarginLeft: function() {
                    return null == n && a(), r;
                },
                reliableMarginRight: function() {
                    var e, n = s.appendChild($.createElement("div"));
                    return n.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", 
                    n.style.marginRight = n.style.width = "0", s.style.width = "1px", Ut.appendChild(o), e = !parseFloat(t.getComputedStyle(n).marginRight), 
                    Ut.removeChild(o), s.removeChild(n), e;
                }
            });
        }
    }();
    var Vt = /^(none|table(?!-c[ea]).+)/, Xt = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Yt = {
        letterSpacing: "0",
        fontWeight: "400"
    }, Gt = [ "Webkit", "O", "Moz", "ms" ], Qt = $.createElement("div").style;
    K.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var n = k(t, "opacity");
                        return "" === n ? "1" : n;
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function(t, e, n, i) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var r, o, s, a = K.camelCase(e), l = t.style;
                return e = K.cssProps[a] || (K.cssProps[a] = E(a) || a), s = K.cssHooks[e] || K.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (r = s.get(t, !1, i)) ? r : l[e] : ("string" === (o = typeof n) && (r = Tt.exec(n)) && r[1] && (n = u(t, e, r), 
                o = "number"), void (null != n && n == n && ("number" === o && (n += r && r[3] || (K.cssNumber[a] ? "" : "px")), 
                Z.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), s && "set" in s && void 0 === (n = s.set(t, n, i)) || (l[e] = n))));
            }
        },
        css: function(t, e, n, i) {
            var r, o, s, a = K.camelCase(e);
            return e = K.cssProps[a] || (K.cssProps[a] = E(a) || a), (s = K.cssHooks[e] || K.cssHooks[a]) && "get" in s && (r = s.get(t, !0, n)), 
            void 0 === r && (r = k(t, e, i)), "normal" === r && e in Yt && (r = Yt[e]), "" === n || n ? (o = parseFloat(r), 
            !0 === n || isFinite(o) ? o || 0 : r) : r;
        }
    }), K.each([ "height", "width" ], function(t, e) {
        K.cssHooks[e] = {
            get: function(t, n, i) {
                return n ? Vt.test(K.css(t, "display")) && 0 === t.offsetWidth ? $t(t, Xt, function() {
                    return I(t, e, i);
                }) : I(t, e, i) : void 0;
            },
            set: function(t, n, i) {
                var r, o = i && Bt(t), s = i && N(t, e, i, "border-box" === K.css(t, "boxSizing", !1, o), o);
                return s && (r = Tt.exec(n)) && "px" !== (r[3] || "px") && (t.style[e] = n, n = K.css(t, e)), A(0, n, s);
            }
        };
    }), K.cssHooks.marginLeft = S(Z.reliableMarginLeft, function(t, e) {
        return e ? (parseFloat(k(t, "marginLeft")) || t.getBoundingClientRect().left - $t(t, {
            marginLeft: 0
        }, function() {
            return t.getBoundingClientRect().left;
        })) + "px" : void 0;
    }), K.cssHooks.marginRight = S(Z.reliableMarginRight, function(t, e) {
        return e ? $t(t, {
            display: "inline-block"
        }, k, [ t, "marginRight" ]) : void 0;
    }), K.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(t, e) {
        K.cssHooks[t + e] = {
            expand: function(n) {
                for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [ n ]; 4 > i; i++) r[t + Ct[i] + e] = o[i] || o[i - 2] || o[0];
                return r;
            }
        }, qt.test(t) || (K.cssHooks[t + e].set = A);
    }), K.fn.extend({
        css: function(t, e) {
            return gt(this, function(t, e, n) {
                var i, r, o = {}, s = 0;
                if (K.isArray(e)) {
                    for (i = Bt(t), r = e.length; r > s; s++) o[e[s]] = K.css(t, e[s], !1, i);
                    return o;
                }
                return void 0 !== n ? K.style(t, e, n) : K.css(t, e);
            }, t, e, arguments.length > 1);
        },
        show: function() {
            return P(this, !0);
        },
        hide: function() {
            return P(this);
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                kt(this) ? K(this).show() : K(this).hide();
            });
        }
    }), K.Tween = M, (M.prototype = {
        constructor: M,
        init: function(t, e, n, i, r, o) {
            this.elem = t, this.prop = n, this.easing = r || K.easing._default, this.options = e, this.start = this.now = this.cur(), 
            this.end = i, this.unit = o || (K.cssNumber[n] ? "" : "px");
        },
        cur: function() {
            var t = M.propHooks[this.prop];
            return t && t.get ? t.get(this) : M.propHooks._default.get(this);
        },
        run: function(t) {
            var e, n = M.propHooks[this.prop];
            return this.options.duration ? this.pos = e = K.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, 
            this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
            n && n.set ? n.set(this) : M.propHooks._default.set(this), this;
        }
    }).init.prototype = M.prototype, (M.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = K.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0;
            },
            set: function(t) {
                K.fx.step[t.prop] ? K.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[K.cssProps[t.prop]] && !K.cssHooks[t.prop] ? t.elem[t.prop] = t.now : K.style(t.elem, t.prop, t.now + t.unit);
            }
        }
    }).scrollTop = M.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
        }
    }, K.easing = {
        linear: function(t) {
            return t;
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2;
        },
        _default: "swing"
    }, K.fx = M.prototype.init, K.fx.step = {};
    var Jt, Zt, Kt = /^(?:toggle|show|hide)$/, te = /queueHooks$/;
    K.Animation = K.extend(j, {
        tweeners: {
            "*": [ function(t, e) {
                var n = this.createTween(t, e);
                return u(n.elem, t, Tt.exec(e), n), n;
            } ]
        },
        tweener: function(t, e) {
            K.isFunction(t) ? (e = t, t = [ "*" ]) : t = t.match(pt);
            for (var n, i = 0, r = t.length; r > i; i++) n = t[i], j.tweeners[n] = j.tweeners[n] || [], j.tweeners[n].unshift(e);
        },
        prefilters: [ function(t, e, n) {
            var i, r, o, s, a, u, l, c = this, h = {}, f = t.style, d = t.nodeType && kt(t), p = yt.get(t, "fxshow");
            n.queue || (null == (a = K._queueHooks(t, "fx")).unqueued && (a.unqueued = 0, u = a.empty.fire, a.empty.fire = function() {
                a.unqueued || u();
            }), a.unqueued++, c.always(function() {
                c.always(function() {
                    a.unqueued--, K.queue(t, "fx").length || a.empty.fire();
                });
            })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [ f.overflow, f.overflowX, f.overflowY ], 
            "inline" === ("none" === (l = K.css(t, "display")) ? yt.get(t, "olddisplay") || C(t.nodeName) : l) && "none" === K.css(t, "float") && (f.display = "inline-block")), 
            n.overflow && (f.overflow = "hidden", c.always(function() {
                f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2];
            }));
            for (i in e) if (r = e[i], Kt.exec(r)) {
                if (delete e[i], o = o || "toggle" === r, r === (d ? "hide" : "show")) {
                    if ("show" !== r || !p || void 0 === p[i]) continue;
                    d = !0;
                }
                h[i] = p && p[i] || K.style(t, i);
            } else l = void 0;
            if (K.isEmptyObject(h)) "inline" === ("none" === l ? C(t.nodeName) : l) && (f.display = l); else {
                p ? "hidden" in p && (d = p.hidden) : p = yt.access(t, "fxshow", {}), o && (p.hidden = !d), d ? K(t).show() : c.done(function() {
                    K(t).hide();
                }), c.done(function() {
                    var e;
                    yt.remove(t, "fxshow");
                    for (e in h) K.style(t, e, h[e]);
                });
                for (i in h) s = H(d ? p[i] : 0, i, c), i in p || (p[i] = s.start, d && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0));
            }
        } ],
        prefilter: function(t, e) {
            e ? j.prefilters.unshift(t) : j.prefilters.push(t);
        }
    }), K.speed = function(t, e, n) {
        var i = t && "object" == typeof t ? K.extend({}, t) : {
            complete: n || !n && e || K.isFunction(t) && t,
            duration: t,
            easing: n && e || e && !K.isFunction(e) && e
        };
        return i.duration = K.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in K.fx.speeds ? K.fx.speeds[i.duration] : K.fx.speeds._default, 
        null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
            K.isFunction(i.old) && i.old.call(this), i.queue && K.dequeue(this, i.queue);
        }, i;
    }, K.fn.extend({
        fadeTo: function(t, e, n, i) {
            return this.filter(kt).css("opacity", 0).show().end().animate({
                opacity: e
            }, t, n, i);
        },
        animate: function(t, e, n, i) {
            var r = K.isEmptyObject(t), o = K.speed(e, n, i), s = function() {
                var e = j(this, K.extend({}, t), o);
                (r || yt.get(this, "finish")) && e.stop(!0);
            };
            return s.finish = s, r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s);
        },
        stop: function(t, e, n) {
            var i = function(t) {
                var e = t.stop;
                delete t.stop, e(n);
            };
            return "string" != typeof t && (n = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), 
            this.each(function() {
                var e = !0, r = null != t && t + "queueHooks", o = K.timers, s = yt.get(this);
                if (r) s[r] && s[r].stop && i(s[r]); else for (r in s) s[r] && s[r].stop && te.test(r) && i(s[r]);
                for (r = o.length; r--; ) o[r].elem !== this || null != t && o[r].queue !== t || (o[r].anim.stop(n), 
                e = !1, o.splice(r, 1));
                !e && n || K.dequeue(this, t);
            });
        },
        finish: function(t) {
            return !1 !== t && (t = t || "fx"), this.each(function() {
                var e, n = yt.get(this), i = n[t + "queue"], r = n[t + "queueHooks"], o = K.timers, s = i ? i.length : 0;
                for (n.finish = !0, K.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = o.length; e--; ) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), 
                o.splice(e, 1));
                for (e = 0; s > e; e++) i[e] && i[e].finish && i[e].finish.call(this);
                delete n.finish;
            });
        }
    }), K.each([ "toggle", "show", "hide" ], function(t, e) {
        var n = K.fn[e];
        K.fn[e] = function(t, i, r) {
            return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(O(e, !0), t, i, r);
        };
    }), K.each({
        slideDown: O("show"),
        slideUp: O("hide"),
        slideToggle: O("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(t, e) {
        K.fn[t] = function(t, n, i) {
            return this.animate(e, t, n, i);
        };
    }), K.timers = [], K.fx.tick = function() {
        var t, e = 0, n = K.timers;
        for (Jt = K.now(); e < n.length; e++) (t = n[e])() || n[e] !== t || n.splice(e--, 1);
        n.length || K.fx.stop(), Jt = void 0;
    }, K.fx.timer = function(t) {
        K.timers.push(t), t() ? K.fx.start() : K.timers.pop();
    }, K.fx.interval = 13, K.fx.start = function() {
        Zt || (Zt = t.setInterval(K.fx.tick, K.fx.interval));
    }, K.fx.stop = function() {
        t.clearInterval(Zt), Zt = null;
    }, K.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, K.fn.delay = function(e, n) {
        return e = K.fx ? K.fx.speeds[e] || e : e, n = n || "fx", this.queue(n, function(n, i) {
            var r = t.setTimeout(n, e);
            i.stop = function() {
                t.clearTimeout(r);
            };
        });
    }, function() {
        var t = $.createElement("input"), e = $.createElement("select"), n = e.appendChild($.createElement("option"));
        t.type = "checkbox", Z.checkOn = "" !== t.value, Z.optSelected = n.selected, e.disabled = !0, Z.optDisabled = !n.disabled, 
        (t = $.createElement("input")).value = "t", t.type = "radio", Z.radioValue = "t" === t.value;
    }();
    var ee, ne = K.expr.attrHandle;
    K.fn.extend({
        attr: function(t, e) {
            return gt(this, K.attr, t, e, arguments.length > 1);
        },
        removeAttr: function(t) {
            return this.each(function() {
                K.removeAttr(this, t);
            });
        }
    }), K.extend({
        attr: function(t, e, n) {
            var i, r, o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === t.getAttribute ? K.prop(t, e, n) : (1 === o && K.isXMLDoc(t) || (e = e.toLowerCase(), 
            r = K.attrHooks[e] || (K.expr.match.bool.test(e) ? ee : void 0)), void 0 !== n ? null === n ? void K.removeAttr(t, e) : r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), 
            n) : r && "get" in r && null !== (i = r.get(t, e)) ? i : null == (i = K.find.attr(t, e)) ? void 0 : i);
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!Z.radioValue && "radio" === e && K.nodeName(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e), n && (t.value = n), e;
                    }
                }
            }
        },
        removeAttr: function(t, e) {
            var n, i, r = 0, o = e && e.match(pt);
            if (o && 1 === t.nodeType) for (;n = o[r++]; ) i = K.propFix[n] || n, K.expr.match.bool.test(n) && (t[i] = !1), 
            t.removeAttribute(n);
        }
    }), ee = {
        set: function(t, e, n) {
            return !1 === e ? K.removeAttr(t, n) : t.setAttribute(n, n), n;
        }
    }, K.each(K.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var n = ne[e] || K.find.attr;
        ne[e] = function(t, e, i) {
            var r, o;
            return i || (o = ne[e], ne[e] = r, r = null != n(t, e, i) ? e.toLowerCase() : null, ne[e] = o), r;
        };
    });
    var ie = /^(?:input|select|textarea|button)$/i, re = /^(?:a|area)$/i;
    K.fn.extend({
        prop: function(t, e) {
            return gt(this, K.prop, t, e, arguments.length > 1);
        },
        removeProp: function(t) {
            return this.each(function() {
                delete this[K.propFix[t] || t];
            });
        }
    }), K.extend({
        prop: function(t, e, n) {
            var i, r, o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && K.isXMLDoc(t) || (e = K.propFix[e] || e, r = K.propHooks[e]), 
            void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : t[e] = n : r && "get" in r && null !== (i = r.get(t, e)) ? i : t[e];
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var e = K.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : ie.test(t.nodeName) || re.test(t.nodeName) && t.href ? 0 : -1;
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), Z.optSelected || (K.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null;
        },
        set: function(t) {
            var e = t.parentNode;
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex);
        }
    }), K.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
        K.propFix[this.toLowerCase()] = this;
    });
    var oe = /[\t\r\n\f]/g;
    K.fn.extend({
        addClass: function(t) {
            var e, n, i, r, o, s, a, u = 0;
            if (K.isFunction(t)) return this.each(function(e) {
                K(this).addClass(t.call(this, e, L(this)));
            });
            if ("string" == typeof t && t) for (e = t.match(pt) || []; n = this[u++]; ) if (r = L(n), i = 1 === n.nodeType && (" " + r + " ").replace(oe, " ")) {
                for (s = 0; o = e[s++]; ) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                r !== (a = K.trim(i)) && n.setAttribute("class", a);
            }
            return this;
        },
        removeClass: function(t) {
            var e, n, i, r, o, s, a, u = 0;
            if (K.isFunction(t)) return this.each(function(e) {
                K(this).removeClass(t.call(this, e, L(this)));
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof t && t) for (e = t.match(pt) || []; n = this[u++]; ) if (r = L(n), i = 1 === n.nodeType && (" " + r + " ").replace(oe, " ")) {
                for (s = 0; o = e[s++]; ) for (;i.indexOf(" " + o + " ") > -1; ) i = i.replace(" " + o + " ", " ");
                r !== (a = K.trim(i)) && n.setAttribute("class", a);
            }
            return this;
        },
        toggleClass: function(t, e) {
            var n = typeof t;
            return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : K.isFunction(t) ? this.each(function(n) {
                K(this).toggleClass(t.call(this, n, L(this), e), e);
            }) : this.each(function() {
                var e, i, r, o;
                if ("string" === n) for (i = 0, r = K(this), o = t.match(pt) || []; e = o[i++]; ) r.hasClass(e) ? r.removeClass(e) : r.addClass(e); else void 0 !== t && "boolean" !== n || ((e = L(this)) && yt.set(this, "__className__", e), 
                this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : yt.get(this, "__className__") || ""));
            });
        },
        hasClass: function(t) {
            var e, n, i = 0;
            for (e = " " + t + " "; n = this[i++]; ) if (1 === n.nodeType && (" " + L(n) + " ").replace(oe, " ").indexOf(e) > -1) return !0;
            return !1;
        }
    });
    var se = /\r/g, ae = /[\x20\t\r\n\f]+/g;
    K.fn.extend({
        val: function(t) {
            var e, n, i, r = this[0];
            return arguments.length ? (i = K.isFunction(t), this.each(function(n) {
                var r;
                1 === this.nodeType && (null == (r = i ? t.call(this, n, K(this).val()) : t) ? r = "" : "number" == typeof r ? r += "" : K.isArray(r) && (r = K.map(r, function(t) {
                    return null == t ? "" : t + "";
                })), (e = K.valHooks[this.type] || K.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r));
            })) : r ? (e = K.valHooks[r.type] || K.valHooks[r.nodeName.toLowerCase()]) && "get" in e && void 0 !== (n = e.get(r, "value")) ? n : "string" == typeof (n = r.value) ? n.replace(se, "") : null == n ? "" : n : void 0;
        }
    }), K.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = K.find.attr(t, "value");
                    return null != e ? e : K.trim(K.text(t)).replace(ae, " ");
                }
            },
            select: {
                get: function(t) {
                    for (var e, n, i = t.options, r = t.selectedIndex, o = "select-one" === t.type || 0 > r, s = o ? null : [], a = o ? r + 1 : i.length, u = 0 > r ? a : o ? r : 0; a > u; u++) if (((n = i[u]).selected || u === r) && (Z.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !K.nodeName(n.parentNode, "optgroup"))) {
                        if (e = K(n).val(), o) return e;
                        s.push(e);
                    }
                    return s;
                },
                set: function(t, e) {
                    for (var n, i, r = t.options, o = K.makeArray(e), s = r.length; s--; ) i = r[s], (i.selected = K.inArray(K.valHooks.option.get(i), o) > -1) && (n = !0);
                    return n || (t.selectedIndex = -1), o;
                }
            }
        }
    }), K.each([ "radio", "checkbox" ], function() {
        K.valHooks[this] = {
            set: function(t, e) {
                return K.isArray(e) ? t.checked = K.inArray(K(t).val(), e) > -1 : void 0;
            }
        }, Z.checkOn || (K.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value;
        });
    });
    var ue = /^(?:focusinfocus|focusoutblur)$/;
    K.extend(K.event, {
        trigger: function(e, n, i, r) {
            var o, s, a, u, l, c, h, f = [ i || $ ], d = J.call(e, "type") ? e.type : e, p = J.call(e, "namespace") ? e.namespace.split(".") : [];
            if (s = a = i = i || $, 3 !== i.nodeType && 8 !== i.nodeType && !ue.test(d + K.event.triggered) && (d.indexOf(".") > -1 && (p = d.split("."), 
            d = p.shift(), p.sort()), l = d.indexOf(":") < 0 && "on" + d, e = e[K.expando] ? e : new K.Event(d, "object" == typeof e && e), 
            e.isTrigger = r ? 2 : 3, e.namespace = p.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
            e.result = void 0, e.target || (e.target = i), n = null == n ? [ e ] : K.makeArray(n, [ e ]), h = K.event.special[d] || {}, 
            r || !h.trigger || !1 !== h.trigger.apply(i, n))) {
                if (!r && !h.noBubble && !K.isWindow(i)) {
                    for (u = h.delegateType || d, ue.test(u + d) || (s = s.parentNode); s; s = s.parentNode) f.push(s), 
                    a = s;
                    a === (i.ownerDocument || $) && f.push(a.defaultView || a.parentWindow || t);
                }
                for (o = 0; (s = f[o++]) && !e.isPropagationStopped(); ) e.type = o > 1 ? u : h.bindType || d, (c = (yt.get(s, "events") || {})[e.type] && yt.get(s, "handle")) && c.apply(s, n), 
                (c = l && s[l]) && c.apply && vt(s) && (e.result = c.apply(s, n), !1 === e.result && e.preventDefault());
                return e.type = d, r || e.isDefaultPrevented() || h._default && !1 !== h._default.apply(f.pop(), n) || !vt(i) || l && K.isFunction(i[d]) && !K.isWindow(i) && ((a = i[l]) && (i[l] = null), 
                K.event.triggered = d, i[d](), K.event.triggered = void 0, a && (i[l] = a)), e.result;
            }
        },
        simulate: function(t, e, n) {
            var i = K.extend(new K.Event(), n, {
                type: t,
                isSimulated: !0
            });
            K.event.trigger(i, null, e), i.isDefaultPrevented() && n.preventDefault();
        }
    }), K.fn.extend({
        trigger: function(t, e) {
            return this.each(function() {
                K.event.trigger(t, e, this);
            });
        },
        triggerHandler: function(t, e) {
            var n = this[0];
            return n ? K.event.trigger(t, e, n, !0) : void 0;
        }
    }), K.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
        K.fn[e] = function(t, n) {
            return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e);
        };
    }), K.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t);
        }
    }), Z.focusin = "onfocusin" in t, Z.focusin || K.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        var n = function(t) {
            K.event.simulate(e, t.target, K.event.fix(t));
        };
        K.event.special[e] = {
            setup: function() {
                var i = this.ownerDocument || this, r = yt.access(i, e);
                r || i.addEventListener(t, n, !0), yt.access(i, e, (r || 0) + 1);
            },
            teardown: function() {
                var i = this.ownerDocument || this, r = yt.access(i, e) - 1;
                r ? yt.access(i, e, r) : (i.removeEventListener(t, n, !0), yt.remove(i, e));
            }
        };
    });
    var le = t.location, ce = K.now(), he = /\?/;
    K.parseJSON = function(t) {
        return JSON.parse(t + "");
    }, K.parseXML = function(e) {
        var n;
        if (!e || "string" != typeof e) return null;
        try {
            n = new t.DOMParser().parseFromString(e, "text/xml");
        } catch (t) {
            n = void 0;
        }
        return n && !n.getElementsByTagName("parsererror").length || K.error("Invalid XML: " + e), n;
    };
    var fe = /#.*$/, de = /([?&])_=[^&]*/, pe = /^(.*?):[ \t]*([^\r\n]*)$/gm, me = /^(?:GET|HEAD)$/, ge = /^\/\//, ve = {}, ye = {}, be = "*/".concat("*"), we = $.createElement("a");
    we.href = le.href, K.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: le.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(le.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": be,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": K.parseJSON,
                "text xml": K.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? R(R(t, K.ajaxSettings), e) : R(K.ajaxSettings, t);
        },
        ajaxPrefilter: W(ve),
        ajaxTransport: W(ye),
        ajax: function(e, n) {
            function i(e, n, i, a) {
                var l, h, y, b, x, T = n;
                2 !== w && (w = 2, u && t.clearTimeout(u), r = void 0, s = a || "", _.readyState = e > 0 ? 4 : 0, l = e >= 200 && 300 > e || 304 === e, 
                i && (b = function(t, e, n) {
                    for (var i, r, o, s, a = t.contents, u = t.dataTypes; "*" === u[0]; ) u.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
                    if (i) for (r in a) if (a[r] && a[r].test(i)) {
                        u.unshift(r);
                        break;
                    }
                    if (u[0] in n) o = u[0]; else {
                        for (r in n) {
                            if (!u[0] || t.converters[r + " " + u[0]]) {
                                o = r;
                                break;
                            }
                            s || (s = r);
                        }
                        o = o || s;
                    }
                    return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0;
                }(f, _, i)), b = function(t, e, n, i) {
                    var r, o, s, a, u, l = {}, c = t.dataTypes.slice();
                    if (c[1]) for (s in t.converters) l[s.toLowerCase()] = t.converters[s];
                    for (o = c.shift(); o; ) if (t.responseFields[o] && (n[t.responseFields[o]] = e), !u && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), 
                    u = o, o = c.shift()) if ("*" === o) o = u; else if ("*" !== u && u !== o) {
                        if (!(s = l[u + " " + o] || l["* " + o])) for (r in l) if ((a = r.split(" "))[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
                            !0 === s ? s = l[r] : !0 !== l[r] && (o = a[0], c.unshift(a[1]));
                            break;
                        }
                        if (!0 !== s) if (s && t.throws) e = s(e); else try {
                            e = s(e);
                        } catch (t) {
                            return {
                                state: "parsererror",
                                error: s ? t : "No conversion from " + u + " to " + o
                            };
                        }
                    }
                    return {
                        state: "success",
                        data: e
                    };
                }(f, b, _, l), l ? (f.ifModified && ((x = _.getResponseHeader("Last-Modified")) && (K.lastModified[o] = x), 
                (x = _.getResponseHeader("etag")) && (K.etag[o] = x)), 204 === e || "HEAD" === f.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = b.state, 
                h = b.data, y = b.error, l = !y)) : (y = T, !e && T || (T = "error", 0 > e && (e = 0))), _.status = e, 
                _.statusText = (n || T) + "", l ? m.resolveWith(d, [ h, T, _ ]) : m.rejectWith(d, [ _, T, y ]), _.statusCode(v), 
                v = void 0, c && p.trigger(l ? "ajaxSuccess" : "ajaxError", [ _, f, l ? h : y ]), g.fireWith(d, [ _, T ]), 
                c && (p.trigger("ajaxComplete", [ _, f ]), --K.active || K.event.trigger("ajaxStop")));
            }
            "object" == typeof e && (n = e, e = void 0), n = n || {};
            var r, o, s, a, u, l, c, h, f = K.ajaxSetup({}, n), d = f.context || f, p = f.context && (d.nodeType || d.jquery) ? K(d) : K.event, m = K.Deferred(), g = K.Callbacks("once memory"), v = f.statusCode || {}, y = {}, b = {}, w = 0, x = "canceled", _ = {
                readyState: 0,
                getResponseHeader: function(t) {
                    var e;
                    if (2 === w) {
                        if (!a) for (a = {}; e = pe.exec(s); ) a[e[1].toLowerCase()] = e[2];
                        e = a[t.toLowerCase()];
                    }
                    return null == e ? null : e;
                },
                getAllResponseHeaders: function() {
                    return 2 === w ? s : null;
                },
                setRequestHeader: function(t, e) {
                    var n = t.toLowerCase();
                    return w || (t = b[n] = b[n] || t, y[t] = e), this;
                },
                overrideMimeType: function(t) {
                    return w || (f.mimeType = t), this;
                },
                statusCode: function(t) {
                    var e;
                    if (t) if (2 > w) for (e in t) v[e] = [ v[e], t[e] ]; else _.always(t[_.status]);
                    return this;
                },
                abort: function(t) {
                    var e = t || x;
                    return r && r.abort(e), i(0, e), this;
                }
            };
            if (m.promise(_).complete = g.add, _.success = _.done, _.error = _.fail, f.url = ((e || f.url || le.href) + "").replace(fe, "").replace(ge, le.protocol + "//"), 
            f.type = n.method || n.type || f.method || f.type, f.dataTypes = K.trim(f.dataType || "*").toLowerCase().match(pt) || [ "" ], 
            null == f.crossDomain) {
                l = $.createElement("a");
                try {
                    l.href = f.url, l.href = l.href, f.crossDomain = we.protocol + "//" + we.host != l.protocol + "//" + l.host;
                } catch (t) {
                    f.crossDomain = !0;
                }
            }
            if (f.data && f.processData && "string" != typeof f.data && (f.data = K.param(f.data, f.traditional)), 
            F(ve, f, n, _), 2 === w) return _;
            (c = K.event && f.global) && 0 == K.active++ && K.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), 
            f.hasContent = !me.test(f.type), o = f.url, f.hasContent || (f.data && (o = f.url += (he.test(o) ? "&" : "?") + f.data, 
            delete f.data), !1 === f.cache && (f.url = de.test(o) ? o.replace(de, "$1_=" + ce++) : o + (he.test(o) ? "&" : "?") + "_=" + ce++)), 
            f.ifModified && (K.lastModified[o] && _.setRequestHeader("If-Modified-Since", K.lastModified[o]), K.etag[o] && _.setRequestHeader("If-None-Match", K.etag[o])), 
            (f.data && f.hasContent && !1 !== f.contentType || n.contentType) && _.setRequestHeader("Content-Type", f.contentType), 
            _.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + be + "; q=0.01" : "") : f.accepts["*"]);
            for (h in f.headers) _.setRequestHeader(h, f.headers[h]);
            if (f.beforeSend && (!1 === f.beforeSend.call(d, _, f) || 2 === w)) return _.abort();
            x = "abort";
            for (h in {
                success: 1,
                error: 1,
                complete: 1
            }) _[h](f[h]);
            if (r = F(ye, f, n, _)) {
                if (_.readyState = 1, c && p.trigger("ajaxSend", [ _, f ]), 2 === w) return _;
                f.async && f.timeout > 0 && (u = t.setTimeout(function() {
                    _.abort("timeout");
                }, f.timeout));
                try {
                    w = 1, r.send(y, i);
                } catch (t) {
                    if (!(2 > w)) throw t;
                    i(-1, t);
                }
            } else i(-1, "No Transport");
            return _;
        },
        getJSON: function(t, e, n) {
            return K.get(t, e, n, "json");
        },
        getScript: function(t, e) {
            return K.get(t, void 0, e, "script");
        }
    }), K.each([ "get", "post" ], function(t, e) {
        K[e] = function(t, n, i, r) {
            return K.isFunction(n) && (r = r || i, i = n, n = void 0), K.ajax(K.extend({
                url: t,
                type: e,
                dataType: r,
                data: n,
                success: i
            }, K.isPlainObject(t) && t));
        };
    }), K._evalUrl = function(t) {
        return K.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            throws: !0
        });
    }, K.fn.extend({
        wrapAll: function(t) {
            var e;
            return K.isFunction(t) ? this.each(function(e) {
                K(this).wrapAll(t.call(this, e));
            }) : (this[0] && (e = K(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), 
            e.map(function() {
                for (var t = this; t.firstElementChild; ) t = t.firstElementChild;
                return t;
            }).append(this)), this);
        },
        wrapInner: function(t) {
            return K.isFunction(t) ? this.each(function(e) {
                K(this).wrapInner(t.call(this, e));
            }) : this.each(function() {
                var e = K(this), n = e.contents();
                n.length ? n.wrapAll(t) : e.append(t);
            });
        },
        wrap: function(t) {
            var e = K.isFunction(t);
            return this.each(function(n) {
                K(this).wrapAll(e ? t.call(this, n) : t);
            });
        },
        unwrap: function() {
            return this.parent().each(function() {
                K.nodeName(this, "body") || K(this).replaceWith(this.childNodes);
            }).end();
        }
    }), K.expr.filters.hidden = function(t) {
        return !K.expr.filters.visible(t);
    }, K.expr.filters.visible = function(t) {
        return t.offsetWidth > 0 || t.offsetHeight > 0 || t.getClientRects().length > 0;
    };
    var xe = /%20/g, _e = /\[\]$/, Te = /\r?\n/g, Ce = /^(?:submit|button|image|reset|file)$/i, ke = /^(?:input|select|textarea|keygen)/i;
    K.param = function(t, e) {
        var n, i = [], r = function(t, e) {
            e = K.isFunction(e) ? e() : null == e ? "" : e, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e);
        };
        if (void 0 === e && (e = K.ajaxSettings && K.ajaxSettings.traditional), K.isArray(t) || t.jquery && !K.isPlainObject(t)) K.each(t, function() {
            r(this.name, this.value);
        }); else for (n in t) q(n, t[n], e, r);
        return i.join("&").replace(xe, "+");
    }, K.fn.extend({
        serialize: function() {
            return K.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                var t = K.prop(this, "elements");
                return t ? K.makeArray(t) : this;
            }).filter(function() {
                var t = this.type;
                return this.name && !K(this).is(":disabled") && ke.test(this.nodeName) && !Ce.test(t) && (this.checked || !St.test(t));
            }).map(function(t, e) {
                var n = K(this).val();
                return null == n ? null : K.isArray(n) ? K.map(n, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(Te, "\r\n")
                    };
                }) : {
                    name: e.name,
                    value: n.replace(Te, "\r\n")
                };
            }).get();
        }
    }), K.ajaxSettings.xhr = function() {
        try {
            return new t.XMLHttpRequest();
        } catch (t) {}
    };
    var Se = {
        0: 200,
        1223: 204
    }, Ee = K.ajaxSettings.xhr();
    Z.cors = !!Ee && "withCredentials" in Ee, Z.ajax = Ee = !!Ee, K.ajaxTransport(function(e) {
        var n, i;
        return Z.cors || Ee && !e.crossDomain ? {
            send: function(r, o) {
                var s, a = e.xhr();
                if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (s in e.xhrFields) a[s] = e.xhrFields[s];
                e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                for (s in r) a.setRequestHeader(s, r[s]);
                n = function(t) {
                    return function() {
                        n && (n = i = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Se[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                            binary: a.response
                        } : {
                            text: a.responseText
                        }, a.getAllResponseHeaders()));
                    };
                }, a.onload = n(), i = a.onerror = n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function() {
                    4 === a.readyState && t.setTimeout(function() {
                        n && i();
                    });
                }, n = n("abort");
                try {
                    a.send(e.hasContent && e.data || null);
                } catch (t) {
                    if (n) throw t;
                }
            },
            abort: function() {
                n && n();
            }
        } : void 0;
    }), K.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(t) {
                return K.globalEval(t), t;
            }
        }
    }), K.ajaxPrefilter("script", function(t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET");
    }), K.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var e, n;
            return {
                send: function(i, r) {
                    e = K("<script>").prop({
                        charset: t.scriptCharset,
                        src: t.url
                    }).on("load error", n = function(t) {
                        e.remove(), n = null, t && r("error" === t.type ? 404 : 200, t.type);
                    }), $.head.appendChild(e[0]);
                },
                abort: function() {
                    n && n();
                }
            };
        }
    });
    var Ae = [], Ne = /(=)\?(?=&|$)|\?\?/;
    K.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = Ae.pop() || K.expando + "_" + ce++;
            return this[t] = !0, t;
        }
    }), K.ajaxPrefilter("json jsonp", function(e, n, i) {
        var r, o, s, a = !1 !== e.jsonp && (Ne.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ne.test(e.data) && "data");
        return a || "jsonp" === e.dataTypes[0] ? (r = e.jsonpCallback = K.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, 
        a ? e[a] = e[a].replace(Ne, "$1" + r) : !1 !== e.jsonp && (e.url += (he.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), 
        e.converters["script json"] = function() {
            return s || K.error(r + " was not called"), s[0];
        }, e.dataTypes[0] = "json", o = t[r], t[r] = function() {
            s = arguments;
        }, i.always(function() {
            void 0 === o ? K(t).removeProp(r) : t[r] = o, e[r] && (e.jsonpCallback = n.jsonpCallback, Ae.push(r)), 
            s && K.isFunction(o) && o(s[0]), s = o = void 0;
        }), "script") : void 0;
    }), K.parseHTML = function(t, e, n) {
        if (!t || "string" != typeof t) return null;
        "boolean" == typeof e && (n = e, e = !1), e = e || $;
        var i = ut.exec(t), r = !n && [];
        return i ? [ e.createElement(i[1]) ] : (i = h([ t ], e, r), r && r.length && K(r).remove(), K.merge([], i.childNodes));
    };
    var Ie = K.fn.load;
    K.fn.load = function(t, e, n) {
        if ("string" != typeof t && Ie) return Ie.apply(this, arguments);
        var i, r, o, s = this, a = t.indexOf(" ");
        return a > -1 && (i = K.trim(t.slice(a)), t = t.slice(0, a)), K.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (r = "POST"), 
        s.length > 0 && K.ajax({
            url: t,
            type: r || "GET",
            dataType: "html",
            data: e
        }).done(function(t) {
            o = arguments, s.html(i ? K("<div>").append(K.parseHTML(t)).find(i) : t);
        }).always(n && function(t, e) {
            s.each(function() {
                n.apply(this, o || [ t.responseText, e, t ]);
            });
        }), this;
    }, K.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(t, e) {
        K.fn[e] = function(t) {
            return this.on(e, t);
        };
    }), K.expr.filters.animated = function(t) {
        return K.grep(K.timers, function(e) {
            return t === e.elem;
        }).length;
    }, K.offset = {
        setOffset: function(t, e, n) {
            var i, r, o, s, a, u, l = K.css(t, "position"), c = K(t), h = {};
            "static" === l && (t.style.position = "relative"), a = c.offset(), o = K.css(t, "top"), u = K.css(t, "left"), 
            ("absolute" === l || "fixed" === l) && (o + u).indexOf("auto") > -1 ? (i = c.position(), s = i.top, 
            r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(u) || 0), K.isFunction(e) && (e = e.call(t, n, K.extend({}, a))), 
            null != e.top && (h.top = e.top - a.top + s), null != e.left && (h.left = e.left - a.left + r), "using" in e ? e.using.call(t, h) : c.css(h);
        }
    }, K.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                K.offset.setOffset(this, t, e);
            });
            var e, n, i = this[0], r = {
                top: 0,
                left: 0
            }, o = i && i.ownerDocument;
            return o ? (e = o.documentElement, K.contains(e, i) ? (r = i.getBoundingClientRect(), n = z(o), {
                top: r.top + n.pageYOffset - e.clientTop,
                left: r.left + n.pageXOffset - e.clientLeft
            }) : r) : void 0;
        },
        position: function() {
            if (this[0]) {
                var t, e, n = this[0], i = {
                    top: 0,
                    left: 0
                };
                return "fixed" === K.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), 
                e = this.offset(), K.nodeName(t[0], "html") || (i = t.offset()), i.top += K.css(t[0], "borderTopWidth", !0), 
                i.left += K.css(t[0], "borderLeftWidth", !0)), {
                    top: e.top - i.top - K.css(n, "marginTop", !0),
                    left: e.left - i.left - K.css(n, "marginLeft", !0)
                };
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent; t && "static" === K.css(t, "position"); ) t = t.offsetParent;
                return t || Ut;
            });
        }
    }), K.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, e) {
        var n = "pageYOffset" === e;
        K.fn[t] = function(i) {
            return gt(this, function(t, i, r) {
                var o = z(t);
                return void 0 === r ? o ? o[e] : t[i] : void (o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : t[i] = r);
            }, t, i, arguments.length);
        };
    }), K.each([ "top", "left" ], function(t, e) {
        K.cssHooks[e] = S(Z.pixelPosition, function(t, n) {
            return n ? (n = k(t, e), zt.test(n) ? K(t).position()[e] + "px" : n) : void 0;
        });
    }), K.each({
        Height: "height",
        Width: "width"
    }, function(t, e) {
        K.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, function(n, i) {
            K.fn[i] = function(i, r) {
                var o = arguments.length && (n || "boolean" != typeof i), s = n || (!0 === i || !0 === r ? "margin" : "border");
                return gt(this, function(e, n, i) {
                    var r;
                    return K.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, 
                    Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === i ? K.css(e, n, s) : K.style(e, n, i, s);
                }, e, o ? i : void 0, o, null);
            };
        });
    }), K.fn.extend({
        bind: function(t, e, n) {
            return this.on(t, null, e, n);
        },
        unbind: function(t, e) {
            return this.off(t, null, e);
        },
        delegate: function(t, e, n, i) {
            return this.on(e, t, n, i);
        },
        undelegate: function(t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n);
        },
        size: function() {
            return this.length;
        }
    }), K.fn.andSelf = K.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return K;
    });
    var Pe = t.jQuery, Me = t.$;
    return K.noConflict = function(e) {
        return t.$ === K && (t.$ = Me), e && t.jQuery === K && (t.jQuery = Pe), K;
    }, e || (t.jQuery = t.$ = K), K;
}), //     Underscore may be freely distributed under the MIT license.
function() {
    function t(t) {
        return function(e, n, i, r) {
            n = b(n, r, 4);
            var o = !S(e) && y.keys(e), s = (o || e).length, a = t > 0 ? 0 : s - 1;
            return arguments.length < 3 && (i = e[o ? o[a] : a], a += t), function(e, n, i, r, o, s) {
                for (;o >= 0 && o < s; o += t) {
                    var a = r ? r[o] : o;
                    i = n(i, e[a], a, e);
                }
                return i;
            }(e, n, i, o, a, s);
        };
    }
    function e(t) {
        return function(e, n, i) {
            n = w(n, i);
            for (var r = k(e), o = t > 0 ? 0 : r - 1; o >= 0 && o < r; o += t) if (n(e[o], o, e)) return o;
            return -1;
        };
    }
    function n(t, e, n) {
        return function(i, r, o) {
            var s = 0, a = k(i);
            if ("number" == typeof o) t > 0 ? s = o >= 0 ? o : Math.max(o + a, s) : a = o >= 0 ? Math.min(o + 1, a) : o + a + 1; else if (n && o && a) return o = n(i, r), 
            i[o] === r ? o : -1;
            if (r != r) return (o = e(c.call(i, s, a), y.isNaN)) >= 0 ? o + s : -1;
            for (o = t > 0 ? s : a - 1; o >= 0 && o < a; o += t) if (i[o] === r) return o;
            return -1;
        };
    }
    function i(t, e) {
        var n = P.length, i = t.constructor, r = y.isFunction(i) && i.prototype || a, o = "constructor";
        for (y.has(t, o) && !y.contains(e, o) && e.push(o); n--; ) (o = P[n]) in t && t[o] !== r[o] && !y.contains(e, o) && e.push(o);
    }
    var r = this, o = r._, s = Array.prototype, a = Object.prototype, u = Function.prototype, l = s.push, c = s.slice, h = a.toString, f = a.hasOwnProperty, d = Array.isArray, p = Object.keys, m = u.bind, g = Object.create, v = function() {}, y = function(t) {
        return t instanceof y ? t : this instanceof y ? void (this._wrapped = t) : new y(t);
    };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = y), 
    exports._ = y) : r._ = y, y.VERSION = "1.8.3";
    var b = function(t, e, n) {
        if (void 0 === e) return t;
        switch (null == n ? 3 : n) {
          case 1:
            return function(n) {
                return t.call(e, n);
            };

          case 2:
            return function(n, i) {
                return t.call(e, n, i);
            };

          case 3:
            return function(n, i, r) {
                return t.call(e, n, i, r);
            };

          case 4:
            return function(n, i, r, o) {
                return t.call(e, n, i, r, o);
            };
        }
        return function() {
            return t.apply(e, arguments);
        };
    }, w = function(t, e, n) {
        return null == t ? y.identity : y.isFunction(t) ? b(t, e, n) : y.isObject(t) ? y.matcher(t) : y.property(t);
    };
    y.iteratee = function(t, e) {
        return w(t, e, 1 / 0);
    };
    var x = function(t, e) {
        return function(n) {
            var i = arguments.length;
            if (i < 2 || null == n) return n;
            for (var r = 1; r < i; r++) for (var o = arguments[r], s = t(o), a = s.length, u = 0; u < a; u++) {
                var l = s[u];
                e && void 0 !== n[l] || (n[l] = o[l]);
            }
            return n;
        };
    }, _ = function(t) {
        if (!y.isObject(t)) return {};
        if (g) return g(t);
        v.prototype = t;
        var e = new v();
        return v.prototype = null, e;
    }, T = function(t) {
        return function(e) {
            return null == e ? void 0 : e[t];
        };
    }, C = Math.pow(2, 53) - 1, k = T("length"), S = function(t) {
        var e = k(t);
        return "number" == typeof e && e >= 0 && e <= C;
    };
    y.each = y.forEach = function(t, e, n) {
        e = b(e, n);
        var i, r;
        if (S(t)) for (i = 0, r = t.length; i < r; i++) e(t[i], i, t); else {
            var o = y.keys(t);
            for (i = 0, r = o.length; i < r; i++) e(t[o[i]], o[i], t);
        }
        return t;
    }, y.map = y.collect = function(t, e, n) {
        e = w(e, n);
        for (var i = !S(t) && y.keys(t), r = (i || t).length, o = Array(r), s = 0; s < r; s++) {
            var a = i ? i[s] : s;
            o[s] = e(t[a], a, t);
        }
        return o;
    }, y.reduce = y.foldl = y.inject = t(1), y.reduceRight = y.foldr = t(-1), y.find = y.detect = function(t, e, n) {
        var i;
        if (void 0 !== (i = S(t) ? y.findIndex(t, e, n) : y.findKey(t, e, n)) && -1 !== i) return t[i];
    }, y.filter = y.select = function(t, e, n) {
        var i = [];
        return e = w(e, n), y.each(t, function(t, n, r) {
            e(t, n, r) && i.push(t);
        }), i;
    }, y.reject = function(t, e, n) {
        return y.filter(t, y.negate(w(e)), n);
    }, y.every = y.all = function(t, e, n) {
        e = w(e, n);
        for (var i = !S(t) && y.keys(t), r = (i || t).length, o = 0; o < r; o++) {
            var s = i ? i[o] : o;
            if (!e(t[s], s, t)) return !1;
        }
        return !0;
    }, y.some = y.any = function(t, e, n) {
        e = w(e, n);
        for (var i = !S(t) && y.keys(t), r = (i || t).length, o = 0; o < r; o++) {
            var s = i ? i[o] : o;
            if (e(t[s], s, t)) return !0;
        }
        return !1;
    }, y.contains = y.includes = y.include = function(t, e, n, i) {
        return S(t) || (t = y.values(t)), ("number" != typeof n || i) && (n = 0), y.indexOf(t, e, n) >= 0;
    }, y.invoke = function(t, e) {
        var n = c.call(arguments, 2), i = y.isFunction(e);
        return y.map(t, function(t) {
            var r = i ? e : t[e];
            return null == r ? r : r.apply(t, n);
        });
    }, y.pluck = function(t, e) {
        return y.map(t, y.property(e));
    }, y.where = function(t, e) {
        return y.filter(t, y.matcher(e));
    }, y.findWhere = function(t, e) {
        return y.find(t, y.matcher(e));
    }, y.max = function(t, e, n) {
        var i, r, o = -1 / 0, s = -1 / 0;
        if (null == e && null != t) for (var a = 0, u = (t = S(t) ? t : y.values(t)).length; a < u; a++) (i = t[a]) > o && (o = i); else e = w(e, n), 
        y.each(t, function(t, n, i) {
            ((r = e(t, n, i)) > s || r === -1 / 0 && o === -1 / 0) && (o = t, s = r);
        });
        return o;
    }, y.min = function(t, e, n) {
        var i, r, o = 1 / 0, s = 1 / 0;
        if (null == e && null != t) for (var a = 0, u = (t = S(t) ? t : y.values(t)).length; a < u; a++) (i = t[a]) < o && (o = i); else e = w(e, n), 
        y.each(t, function(t, n, i) {
            ((r = e(t, n, i)) < s || r === 1 / 0 && o === 1 / 0) && (o = t, s = r);
        });
        return o;
    }, y.shuffle = function(t) {
        for (var e, n = S(t) ? t : y.values(t), i = n.length, r = Array(i), o = 0; o < i; o++) (e = y.random(0, o)) !== o && (r[o] = r[e]), 
        r[e] = n[o];
        return r;
    }, y.sample = function(t, e, n) {
        return null == e || n ? (S(t) || (t = y.values(t)), t[y.random(t.length - 1)]) : y.shuffle(t).slice(0, Math.max(0, e));
    }, y.sortBy = function(t, e, n) {
        return e = w(e, n), y.pluck(y.map(t, function(t, n, i) {
            return {
                value: t,
                index: n,
                criteria: e(t, n, i)
            };
        }).sort(function(t, e) {
            var n = t.criteria, i = e.criteria;
            if (n !== i) {
                if (n > i || void 0 === n) return 1;
                if (n < i || void 0 === i) return -1;
            }
            return t.index - e.index;
        }), "value");
    };
    var E = function(t) {
        return function(e, n, i) {
            var r = {};
            return n = w(n, i), y.each(e, function(i, o) {
                var s = n(i, o, e);
                t(r, i, s);
            }), r;
        };
    };
    y.groupBy = E(function(t, e, n) {
        y.has(t, n) ? t[n].push(e) : t[n] = [ e ];
    }), y.indexBy = E(function(t, e, n) {
        t[n] = e;
    }), y.countBy = E(function(t, e, n) {
        y.has(t, n) ? t[n]++ : t[n] = 1;
    }), y.toArray = function(t) {
        return t ? y.isArray(t) ? c.call(t) : S(t) ? y.map(t, y.identity) : y.values(t) : [];
    }, y.size = function(t) {
        return null == t ? 0 : S(t) ? t.length : y.keys(t).length;
    }, y.partition = function(t, e, n) {
        e = w(e, n);
        var i = [], r = [];
        return y.each(t, function(t, n, o) {
            (e(t, n, o) ? i : r).push(t);
        }), [ i, r ];
    }, y.first = y.head = y.take = function(t, e, n) {
        if (null != t) return null == e || n ? t[0] : y.initial(t, t.length - e);
    }, y.initial = function(t, e, n) {
        return c.call(t, 0, Math.max(0, t.length - (null == e || n ? 1 : e)));
    }, y.last = function(t, e, n) {
        if (null != t) return null == e || n ? t[t.length - 1] : y.rest(t, Math.max(0, t.length - e));
    }, y.rest = y.tail = y.drop = function(t, e, n) {
        return c.call(t, null == e || n ? 1 : e);
    }, y.compact = function(t) {
        return y.filter(t, y.identity);
    };
    var A = function(t, e, n, i) {
        for (var r = [], o = 0, s = i || 0, a = k(t); s < a; s++) {
            var u = t[s];
            if (S(u) && (y.isArray(u) || y.isArguments(u))) {
                e || (u = A(u, e, n));
                var l = 0, c = u.length;
                for (r.length += c; l < c; ) r[o++] = u[l++];
            } else n || (r[o++] = u);
        }
        return r;
    };
    y.flatten = function(t, e) {
        return A(t, e, !1);
    }, y.without = function(t) {
        return y.difference(t, c.call(arguments, 1));
    }, y.uniq = y.unique = function(t, e, n, i) {
        y.isBoolean(e) || (i = n, n = e, e = !1), null != n && (n = w(n, i));
        for (var r = [], o = [], s = 0, a = k(t); s < a; s++) {
            var u = t[s], l = n ? n(u, s, t) : u;
            e ? (s && o === l || r.push(u), o = l) : n ? y.contains(o, l) || (o.push(l), r.push(u)) : y.contains(r, u) || r.push(u);
        }
        return r;
    }, y.union = function() {
        return y.uniq(A(arguments, !0, !0));
    }, y.intersection = function(t) {
        for (var e = [], n = arguments.length, i = 0, r = k(t); i < r; i++) {
            var o = t[i];
            if (!y.contains(e, o)) {
                for (var s = 1; s < n && y.contains(arguments[s], o); s++) ;
                s === n && e.push(o);
            }
        }
        return e;
    }, y.difference = function(t) {
        var e = A(arguments, !0, !0, 1);
        return y.filter(t, function(t) {
            return !y.contains(e, t);
        });
    }, y.zip = function() {
        return y.unzip(arguments);
    }, y.unzip = function(t) {
        for (var e = t && y.max(t, k).length || 0, n = Array(e), i = 0; i < e; i++) n[i] = y.pluck(t, i);
        return n;
    }, y.object = function(t, e) {
        for (var n = {}, i = 0, r = k(t); i < r; i++) e ? n[t[i]] = e[i] : n[t[i][0]] = t[i][1];
        return n;
    }, y.findIndex = e(1), y.findLastIndex = e(-1), y.sortedIndex = function(t, e, n, i) {
        for (var r = (n = w(n, i, 1))(e), o = 0, s = k(t); o < s; ) {
            var a = Math.floor((o + s) / 2);
            n(t[a]) < r ? o = a + 1 : s = a;
        }
        return o;
    }, y.indexOf = n(1, y.findIndex, y.sortedIndex), y.lastIndexOf = n(-1, y.findLastIndex), y.range = function(t, e, n) {
        null == e && (e = t || 0, t = 0), n = n || 1;
        for (var i = Math.max(Math.ceil((e - t) / n), 0), r = Array(i), o = 0; o < i; o++, t += n) r[o] = t;
        return r;
    };
    var N = function(t, e, n, i, r) {
        if (!(i instanceof e)) return t.apply(n, r);
        var o = _(t.prototype), s = t.apply(o, r);
        return y.isObject(s) ? s : o;
    };
    y.bind = function(t, e) {
        if (m && t.bind === m) return m.apply(t, c.call(arguments, 1));
        if (!y.isFunction(t)) throw new TypeError("Bind must be called on a function");
        var n = c.call(arguments, 2), i = function() {
            return N(t, i, e, this, n.concat(c.call(arguments)));
        };
        return i;
    }, y.partial = function(t) {
        var e = c.call(arguments, 1), n = function() {
            for (var i = 0, r = e.length, o = Array(r), s = 0; s < r; s++) o[s] = e[s] === y ? arguments[i++] : e[s];
            for (;i < arguments.length; ) o.push(arguments[i++]);
            return N(t, n, this, this, o);
        };
        return n;
    }, y.bindAll = function(t) {
        var e, n, i = arguments.length;
        if (i <= 1) throw new Error("bindAll must be passed function names");
        for (e = 1; e < i; e++) t[n = arguments[e]] = y.bind(t[n], t);
        return t;
    }, y.memoize = function(t, e) {
        var n = function(i) {
            var r = n.cache, o = "" + (e ? e.apply(this, arguments) : i);
            return y.has(r, o) || (r[o] = t.apply(this, arguments)), r[o];
        };
        return n.cache = {}, n;
    }, y.delay = function(t, e) {
        var n = c.call(arguments, 2);
        return setTimeout(function() {
            return t.apply(null, n);
        }, e);
    }, y.defer = y.partial(y.delay, y, 1), y.throttle = function(t, e, n) {
        var i, r, o, s = null, a = 0;
        n || (n = {});
        var u = function() {
            a = !1 === n.leading ? 0 : y.now(), s = null, o = t.apply(i, r), s || (i = r = null);
        };
        return function() {
            var l = y.now();
            a || !1 !== n.leading || (a = l);
            var c = e - (l - a);
            return i = this, r = arguments, c <= 0 || c > e ? (s && (clearTimeout(s), s = null), a = l, o = t.apply(i, r), 
            s || (i = r = null)) : s || !1 === n.trailing || (s = setTimeout(u, c)), o;
        };
    }, y.debounce = function(t, e, n) {
        var i, r, o, s, a, u = function() {
            var l = y.now() - s;
            l < e && l >= 0 ? i = setTimeout(u, e - l) : (i = null, n || (a = t.apply(o, r), i || (o = r = null)));
        };
        return function() {
            o = this, r = arguments, s = y.now();
            var l = n && !i;
            return i || (i = setTimeout(u, e)), l && (a = t.apply(o, r), o = r = null), a;
        };
    }, y.wrap = function(t, e) {
        return y.partial(e, t);
    }, y.negate = function(t) {
        return function() {
            return !t.apply(this, arguments);
        };
    }, y.compose = function() {
        var t = arguments, e = t.length - 1;
        return function() {
            for (var n = e, i = t[e].apply(this, arguments); n--; ) i = t[n].call(this, i);
            return i;
        };
    }, y.after = function(t, e) {
        return function() {
            if (--t < 1) return e.apply(this, arguments);
        };
    }, y.before = function(t, e) {
        var n;
        return function() {
            return --t > 0 && (n = e.apply(this, arguments)), t <= 1 && (e = null), n;
        };
    }, y.once = y.partial(y.before, 2);
    var I = !{
        toString: null
    }.propertyIsEnumerable("toString"), P = [ "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString" ];
    y.keys = function(t) {
        if (!y.isObject(t)) return [];
        if (p) return p(t);
        var e = [];
        for (var n in t) y.has(t, n) && e.push(n);
        return I && i(t, e), e;
    }, y.allKeys = function(t) {
        if (!y.isObject(t)) return [];
        var e = [];
        for (var n in t) e.push(n);
        return I && i(t, e), e;
    }, y.values = function(t) {
        for (var e = y.keys(t), n = e.length, i = Array(n), r = 0; r < n; r++) i[r] = t[e[r]];
        return i;
    }, y.mapObject = function(t, e, n) {
        e = w(e, n);
        for (var i, r = y.keys(t), o = r.length, s = {}, a = 0; a < o; a++) s[i = r[a]] = e(t[i], i, t);
        return s;
    }, y.pairs = function(t) {
        for (var e = y.keys(t), n = e.length, i = Array(n), r = 0; r < n; r++) i[r] = [ e[r], t[e[r]] ];
        return i;
    }, y.invert = function(t) {
        for (var e = {}, n = y.keys(t), i = 0, r = n.length; i < r; i++) e[t[n[i]]] = n[i];
        return e;
    }, y.functions = y.methods = function(t) {
        var e = [];
        for (var n in t) y.isFunction(t[n]) && e.push(n);
        return e.sort();
    }, y.extend = x(y.allKeys), y.extendOwn = y.assign = x(y.keys), y.findKey = function(t, e, n) {
        e = w(e, n);
        for (var i, r = y.keys(t), o = 0, s = r.length; o < s; o++) if (i = r[o], e(t[i], i, t)) return i;
    }, y.pick = function(t, e, n) {
        var i, r, o = {}, s = t;
        if (null == s) return o;
        y.isFunction(e) ? (r = y.allKeys(s), i = b(e, n)) : (r = A(arguments, !1, !1, 1), i = function(t, e, n) {
            return e in n;
        }, s = Object(s));
        for (var a = 0, u = r.length; a < u; a++) {
            var l = r[a], c = s[l];
            i(c, l, s) && (o[l] = c);
        }
        return o;
    }, y.omit = function(t, e, n) {
        if (y.isFunction(e)) e = y.negate(e); else {
            var i = y.map(A(arguments, !1, !1, 1), String);
            e = function(t, e) {
                return !y.contains(i, e);
            };
        }
        return y.pick(t, e, n);
    }, y.defaults = x(y.allKeys, !0), y.create = function(t, e) {
        var n = _(t);
        return e && y.extendOwn(n, e), n;
    }, y.clone = function(t) {
        return y.isObject(t) ? y.isArray(t) ? t.slice() : y.extend({}, t) : t;
    }, y.tap = function(t, e) {
        return e(t), t;
    }, y.isMatch = function(t, e) {
        var n = y.keys(e), i = n.length;
        if (null == t) return !i;
        for (var r = Object(t), o = 0; o < i; o++) {
            var s = n[o];
            if (e[s] !== r[s] || !(s in r)) return !1;
        }
        return !0;
    };
    var M = function(t, e, n, i) {
        if (t === e) return 0 !== t || 1 / t == 1 / e;
        if (null == t || null == e) return t === e;
        t instanceof y && (t = t._wrapped), e instanceof y && (e = e._wrapped);
        var r = h.call(t);
        if (r !== h.call(e)) return !1;
        switch (r) {
          case "[object RegExp]":
          case "[object String]":
            return "" + t == "" + e;

          case "[object Number]":
            return +t != +t ? +e != +e : 0 == +t ? 1 / +t == 1 / e : +t == +e;

          case "[object Date]":
          case "[object Boolean]":
            return +t == +e;
        }
        var o = "[object Array]" === r;
        if (!o) {
            if ("object" != typeof t || "object" != typeof e) return !1;
            var s = t.constructor, a = e.constructor;
            if (s !== a && !(y.isFunction(s) && s instanceof s && y.isFunction(a) && a instanceof a) && "constructor" in t && "constructor" in e) return !1;
        }
        n = n || [], i = i || [];
        for (var u = n.length; u--; ) if (n[u] === t) return i[u] === e;
        if (n.push(t), i.push(e), o) {
            if ((u = t.length) !== e.length) return !1;
            for (;u--; ) if (!M(t[u], e[u], n, i)) return !1;
        } else {
            var l, c = y.keys(t);
            if (u = c.length, y.keys(e).length !== u) return !1;
            for (;u--; ) if (l = c[u], !y.has(e, l) || !M(t[l], e[l], n, i)) return !1;
        }
        return n.pop(), i.pop(), !0;
    };
    y.isEqual = function(t, e) {
        return M(t, e);
    }, y.isEmpty = function(t) {
        return null == t || (S(t) && (y.isArray(t) || y.isString(t) || y.isArguments(t)) ? 0 === t.length : 0 === y.keys(t).length);
    }, y.isElement = function(t) {
        return !(!t || 1 !== t.nodeType);
    }, y.isArray = d || function(t) {
        return "[object Array]" === h.call(t);
    }, y.isObject = function(t) {
        var e = typeof t;
        return "function" === e || "object" === e && !!t;
    }, y.each([ "Arguments", "Function", "String", "Number", "Date", "RegExp", "Error" ], function(t) {
        y["is" + t] = function(e) {
            return h.call(e) === "[object " + t + "]";
        };
    }), y.isArguments(arguments) || (y.isArguments = function(t) {
        return y.has(t, "callee");
    }), "function" != typeof /./ && "object" != typeof Int8Array && (y.isFunction = function(t) {
        return "function" == typeof t || !1;
    }), y.isFinite = function(t) {
        return isFinite(t) && !isNaN(parseFloat(t));
    }, y.isNaN = function(t) {
        return y.isNumber(t) && t !== +t;
    }, y.isBoolean = function(t) {
        return !0 === t || !1 === t || "[object Boolean]" === h.call(t);
    }, y.isNull = function(t) {
        return null === t;
    }, y.isUndefined = function(t) {
        return void 0 === t;
    }, y.has = function(t, e) {
        return null != t && f.call(t, e);
    }, y.noConflict = function() {
        return r._ = o, this;
    }, y.identity = function(t) {
        return t;
    }, y.constant = function(t) {
        return function() {
            return t;
        };
    }, y.noop = function() {}, y.property = T, y.propertyOf = function(t) {
        return null == t ? function() {} : function(e) {
            return t[e];
        };
    }, y.matcher = y.matches = function(t) {
        return t = y.extendOwn({}, t), function(e) {
            return y.isMatch(e, t);
        };
    }, y.times = function(t, e, n) {
        var i = Array(Math.max(0, t));
        e = b(e, n, 1);
        for (var r = 0; r < t; r++) i[r] = e(r);
        return i;
    }, y.random = function(t, e) {
        return null == e && (e = t, t = 0), t + Math.floor(Math.random() * (e - t + 1));
    }, y.now = Date.now || function() {
        return new Date().getTime();
    };
    var D = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;"
    }, O = y.invert(D), H = function(t) {
        var e = function(e) {
            return t[e];
        }, n = "(?:" + y.keys(t).join("|") + ")", i = RegExp(n), r = RegExp(n, "g");
        return function(t) {
            return t = null == t ? "" : "" + t, i.test(t) ? t.replace(r, e) : t;
        };
    };
    y.escape = H(D), y.unescape = H(O), y.result = function(t, e, n) {
        var i = null == t ? void 0 : t[e];
        return void 0 === i && (i = n), y.isFunction(i) ? i.call(t) : i;
    };
    var j = 0;
    y.uniqueId = function(t) {
        var e = ++j + "";
        return t ? t + e : e;
    }, y.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var L = /(.)^/, W = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "\u2028": "u2028",
        "\u2029": "u2029"
    }, F = /\\|'|\r|\n|\u2028|\u2029/g, R = function(t) {
        return "\\" + W[t];
    };
    y.template = function(t, e, n) {
        !e && n && (e = n), e = y.defaults({}, e, y.templateSettings);
        var i = RegExp([ (e.escape || L).source, (e.interpolate || L).source, (e.evaluate || L).source ].join("|") + "|$", "g"), r = 0, o = "__p+='";
        t.replace(i, function(e, n, i, s, a) {
            return o += t.slice(r, a).replace(F, R), r = a + e.length, n ? o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : i ? o += "'+\n((__t=(" + i + "))==null?'':__t)+\n'" : s && (o += "';\n" + s + "\n__p+='"), 
            e;
        }), o += "';\n", e.variable || (o = "with(obj||{}){\n" + o + "}\n"), o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
        try {
            var s = new Function(e.variable || "obj", "_", o);
        } catch (t) {
            throw t.source = o, t;
        }
        var a = function(t) {
            return s.call(this, t, y);
        }, u = e.variable || "obj";
        return a.source = "function(" + u + "){\n" + o + "}", a;
    }, y.chain = function(t) {
        var e = y(t);
        return e._chain = !0, e;
    };
    var q = function(t, e) {
        return t._chain ? y(e).chain() : e;
    };
    y.mixin = function(t) {
        y.each(y.functions(t), function(e) {
            var n = y[e] = t[e];
            y.prototype[e] = function() {
                var t = [ this._wrapped ];
                return l.apply(t, arguments), q(this, n.apply(y, t));
            };
        });
    }, y.mixin(y), y.each([ "pop", "push", "reverse", "shift", "sort", "splice", "unshift" ], function(t) {
        var e = s[t];
        y.prototype[t] = function() {
            var n = this._wrapped;
            return e.apply(n, arguments), "shift" !== t && "splice" !== t || 0 !== n.length || delete n[0], q(this, n);
        };
    }), y.each([ "concat", "join", "slice" ], function(t) {
        var e = s[t];
        y.prototype[t] = function() {
            return q(this, e.apply(this._wrapped, arguments));
        };
    }), y.prototype.value = function() {
        return this._wrapped;
    }, y.prototype.valueOf = y.prototype.toJSON = y.prototype.value, y.prototype.toString = function() {
        return "" + this._wrapped;
    }, "function" == typeof define && define.amd && define("underscore", [], function() {
        return y;
    });
}.call(this), //     Backbone may be freely distributed under the MIT license.
function(t) {
    var e = "object" == typeof self && self.self === self && self || "object" == typeof global && global.global === global && global;
    if ("function" == typeof define && define.amd) define([ "underscore", "jquery", "exports" ], function(n, i, r) {
        e.Backbone = t(e, r, n, i);
    }); else if ("undefined" != typeof exports) {
        var n, i = require("underscore");
        try {
            n = require("jquery");
        } catch (t) {}
        t(e, exports, i, n);
    } else e.Backbone = t(e, {}, e._, e.jQuery || e.Zepto || e.ender || e.$);
}(function(t, e, n, i) {
    var r = t.Backbone, o = Array.prototype.slice;
    e.VERSION = "1.3.3", e.$ = i, e.noConflict = function() {
        return t.Backbone = r, this;
    }, e.emulateHTTP = !1, e.emulateJSON = !1;
    var s = function(t, e, i) {
        n.each(e, function(e, r) {
            n[r] && (t.prototype[r] = function(t, e, i) {
                switch (t) {
                  case 1:
                    return function() {
                        return n[e](this[i]);
                    };

                  case 2:
                    return function(t) {
                        return n[e](this[i], t);
                    };

                  case 3:
                    return function(t, r) {
                        return n[e](this[i], a(t, this), r);
                    };

                  case 4:
                    return function(t, r, o) {
                        return n[e](this[i], a(t, this), r, o);
                    };

                  default:
                    return function() {
                        var t = o.call(arguments);
                        return t.unshift(this[i]), n[e].apply(n, t);
                    };
                }
            }(e, r, i));
        });
    }, a = function(t, e) {
        return n.isFunction(t) ? t : n.isObject(t) && !e._isModel(t) ? u(t) : n.isString(t) ? function(e) {
            return e.get(t);
        } : t;
    }, u = function(t) {
        var e = n.matches(t);
        return function(t) {
            return e(t.attributes);
        };
    }, l = e.Events = {}, c = /\s+/, h = function(t, e, i, r, o) {
        var s, a = 0;
        if (i && "object" == typeof i) {
            void 0 !== r && "context" in o && void 0 === o.context && (o.context = r);
            for (s = n.keys(i); a < s.length; a++) e = h(t, e, s[a], i[s[a]], o);
        } else if (i && c.test(i)) for (s = i.split(c); a < s.length; a++) e = t(e, s[a], r, o); else e = t(e, i, r, o);
        return e;
    };
    l.on = function(t, e, n) {
        return f(this, t, e, n);
    };
    var f = function(t, e, n, i, r) {
        if (t._events = h(d, t._events || {}, e, n, {
            context: i,
            ctx: t,
            listening: r
        }), r) {
            (t._listeners || (t._listeners = {}))[r.id] = r;
        }
        return t;
    };
    l.listenTo = function(t, e, i) {
        if (!t) return this;
        var r = t._listenId || (t._listenId = n.uniqueId("l")), o = this._listeningTo || (this._listeningTo = {}), s = o[r];
        if (!s) {
            var a = this._listenId || (this._listenId = n.uniqueId("l"));
            s = o[r] = {
                obj: t,
                objId: r,
                id: a,
                listeningTo: o,
                count: 0
            };
        }
        return f(t, e, i, this, s), this;
    };
    var d = function(t, e, n, i) {
        if (n) {
            var r = t[e] || (t[e] = []), o = i.context, s = i.ctx, a = i.listening;
            a && a.count++, r.push({
                callback: n,
                context: o,
                ctx: o || s,
                listening: a
            });
        }
        return t;
    };
    l.off = function(t, e, n) {
        return this._events ? (this._events = h(p, this._events, t, e, {
            context: n,
            listeners: this._listeners
        }), this) : this;
    }, l.stopListening = function(t, e, i) {
        var r = this._listeningTo;
        if (!r) return this;
        for (var o = t ? [ t._listenId ] : n.keys(r), s = 0; s < o.length; s++) {
            var a = r[o[s]];
            if (!a) break;
            a.obj.off(e, i, this);
        }
        return this;
    };
    var p = function(t, e, i, r) {
        if (t) {
            var o, s = 0, a = r.context, u = r.listeners;
            if (e || i || a) {
                for (var l = e ? [ e ] : n.keys(t); s < l.length; s++) {
                    var c = t[e = l[s]];
                    if (!c) break;
                    for (var h = [], f = 0; f < c.length; f++) {
                        var d = c[f];
                        i && i !== d.callback && i !== d.callback._callback || a && a !== d.context ? h.push(d) : (o = d.listening) && 0 == --o.count && (delete u[o.id], 
                        delete o.listeningTo[o.objId]);
                    }
                    h.length ? t[e] = h : delete t[e];
                }
                return t;
            }
            for (var p = n.keys(u); s < p.length; s++) delete u[(o = u[p[s]]).id], delete o.listeningTo[o.objId];
        }
    };
    l.once = function(t, e, i) {
        var r = h(m, {}, t, e, n.bind(this.off, this));
        return "string" == typeof t && null == i && (e = void 0), this.on(r, e, i);
    }, l.listenToOnce = function(t, e, i) {
        var r = h(m, {}, e, i, n.bind(this.stopListening, this, t));
        return this.listenTo(t, r);
    };
    var m = function(t, e, i, r) {
        if (i) {
            var o = t[e] = n.once(function() {
                r(e, o), i.apply(this, arguments);
            });
            o._callback = i;
        }
        return t;
    };
    l.trigger = function(t) {
        if (!this._events) return this;
        for (var e = Math.max(0, arguments.length - 1), n = Array(e), i = 0; i < e; i++) n[i] = arguments[i + 1];
        return h(g, this._events, t, void 0, n), this;
    };
    var g = function(t, e, n, i) {
        if (t) {
            var r = t[e], o = t.all;
            r && o && (o = o.slice()), r && v(r, i), o && v(o, [ e ].concat(i));
        }
        return t;
    }, v = function(t, e) {
        var n, i = -1, r = t.length, o = e[0], s = e[1], a = e[2];
        switch (e.length) {
          case 0:
            for (;++i < r; ) (n = t[i]).callback.call(n.ctx);
            return;

          case 1:
            for (;++i < r; ) (n = t[i]).callback.call(n.ctx, o);
            return;

          case 2:
            for (;++i < r; ) (n = t[i]).callback.call(n.ctx, o, s);
            return;

          case 3:
            for (;++i < r; ) (n = t[i]).callback.call(n.ctx, o, s, a);
            return;

          default:
            for (;++i < r; ) (n = t[i]).callback.apply(n.ctx, e);
            return;
        }
    };
    l.bind = l.on, l.unbind = l.off, n.extend(e, l);
    var y = e.Model = function(t, e) {
        var i = t || {};
        e || (e = {}), this.cid = n.uniqueId(this.cidPrefix), this.attributes = {}, e.collection && (this.collection = e.collection), 
        e.parse && (i = this.parse(i, e) || {});
        var r = n.result(this, "defaults");
        i = n.defaults(n.extend({}, r, i), r), this.set(i, e), this.changed = {}, this.initialize.apply(this, arguments);
    };
    n.extend(y.prototype, l, {
        changed: null,
        validationError: null,
        idAttribute: "id",
        cidPrefix: "c",
        initialize: function() {},
        toJSON: function(t) {
            return n.clone(this.attributes);
        },
        sync: function() {
            return e.sync.apply(this, arguments);
        },
        get: function(t) {
            return this.attributes[t];
        },
        escape: function(t) {
            return n.escape(this.get(t));
        },
        has: function(t) {
            return null != this.get(t);
        },
        matches: function(t) {
            return !!n.iteratee(t, this)(this.attributes);
        },
        set: function(t, e, i) {
            if (null == t) return this;
            var r;
            if ("object" == typeof t ? (r = t, i = e) : (r = {})[t] = e, i || (i = {}), !this._validate(r, i)) return !1;
            var o = i.unset, s = i.silent, a = [], u = this._changing;
            this._changing = !0, u || (this._previousAttributes = n.clone(this.attributes), this.changed = {});
            var l = this.attributes, c = this.changed, h = this._previousAttributes;
            for (var f in r) e = r[f], n.isEqual(l[f], e) || a.push(f), n.isEqual(h[f], e) ? delete c[f] : c[f] = e, 
            o ? delete l[f] : l[f] = e;
            if (this.idAttribute in r && (this.id = this.get(this.idAttribute)), !s) {
                a.length && (this._pending = i);
                for (var d = 0; d < a.length; d++) this.trigger("change:" + a[d], this, l[a[d]], i);
            }
            if (u) return this;
            if (!s) for (;this._pending; ) i = this._pending, this._pending = !1, this.trigger("change", this, i);
            return this._pending = !1, this._changing = !1, this;
        },
        unset: function(t, e) {
            return this.set(t, void 0, n.extend({}, e, {
                unset: !0
            }));
        },
        clear: function(t) {
            var e = {};
            for (var i in this.attributes) e[i] = void 0;
            return this.set(e, n.extend({}, t, {
                unset: !0
            }));
        },
        hasChanged: function(t) {
            return null == t ? !n.isEmpty(this.changed) : n.has(this.changed, t);
        },
        changedAttributes: function(t) {
            if (!t) return !!this.hasChanged() && n.clone(this.changed);
            var e = this._changing ? this._previousAttributes : this.attributes, i = {};
            for (var r in t) {
                var o = t[r];
                n.isEqual(e[r], o) || (i[r] = o);
            }
            return !!n.size(i) && i;
        },
        previous: function(t) {
            return null != t && this._previousAttributes ? this._previousAttributes[t] : null;
        },
        previousAttributes: function() {
            return n.clone(this._previousAttributes);
        },
        fetch: function(t) {
            var e = this, i = (t = n.extend({
                parse: !0
            }, t)).success;
            return t.success = function(n) {
                var r = t.parse ? e.parse(n, t) : n;
                if (!e.set(r, t)) return !1;
                i && i.call(t.context, e, n, t), e.trigger("sync", e, n, t);
            }, L(this, t), this.sync("read", this, t);
        },
        save: function(t, e, i) {
            var r;
            null == t || "object" == typeof t ? (r = t, i = e) : (r = {})[t] = e;
            var o = (i = n.extend({
                validate: !0,
                parse: !0
            }, i)).wait;
            if (r && !o) {
                if (!this.set(r, i)) return !1;
            } else if (!this._validate(r, i)) return !1;
            var s = this, a = i.success, u = this.attributes;
            i.success = function(t) {
                s.attributes = u;
                var e = i.parse ? s.parse(t, i) : t;
                if (o && (e = n.extend({}, r, e)), e && !s.set(e, i)) return !1;
                a && a.call(i.context, s, t, i), s.trigger("sync", s, t, i);
            }, L(this, i), r && o && (this.attributes = n.extend({}, u, r));
            var l = this.isNew() ? "create" : i.patch ? "patch" : "update";
            "patch" !== l || i.attrs || (i.attrs = r);
            var c = this.sync(l, this, i);
            return this.attributes = u, c;
        },
        destroy: function(t) {
            var e = this, i = (t = t ? n.clone(t) : {}).success, r = t.wait, o = function() {
                e.stopListening(), e.trigger("destroy", e, e.collection, t);
            };
            t.success = function(n) {
                r && o(), i && i.call(t.context, e, n, t), e.isNew() || e.trigger("sync", e, n, t);
            };
            var s = !1;
            return this.isNew() ? n.defer(t.success) : (L(this, t), s = this.sync("delete", this, t)), r || o(), 
            s;
        },
        url: function() {
            var t = n.result(this, "urlRoot") || n.result(this.collection, "url") || j();
            if (this.isNew()) return t;
            var e = this.get(this.idAttribute);
            return t.replace(/[^\/]$/, "$&/") + encodeURIComponent(e);
        },
        parse: function(t, e) {
            return t;
        },
        clone: function() {
            return new this.constructor(this.attributes);
        },
        isNew: function() {
            return !this.has(this.idAttribute);
        },
        isValid: function(t) {
            return this._validate({}, n.extend({}, t, {
                validate: !0
            }));
        },
        _validate: function(t, e) {
            if (!e.validate || !this.validate) return !0;
            t = n.extend({}, this.attributes, t);
            var i = this.validationError = this.validate(t, e) || null;
            return !i || (this.trigger("invalid", this, i, n.extend(e, {
                validationError: i
            })), !1);
        }
    });
    s(y, {
        keys: 1,
        values: 1,
        pairs: 1,
        invert: 1,
        pick: 0,
        omit: 0,
        chain: 1,
        isEmpty: 1
    }, "attributes");
    var b = e.Collection = function(t, e) {
        e || (e = {}), e.model && (this.model = e.model), void 0 !== e.comparator && (this.comparator = e.comparator), 
        this._reset(), this.initialize.apply(this, arguments), t && this.reset(t, n.extend({
            silent: !0
        }, e));
    }, w = {
        add: !0,
        remove: !0,
        merge: !0
    }, x = {
        add: !0,
        remove: !1
    }, _ = function(t, e, n) {
        n = Math.min(Math.max(n, 0), t.length);
        var i, r = Array(t.length - n), o = e.length;
        for (i = 0; i < r.length; i++) r[i] = t[i + n];
        for (i = 0; i < o; i++) t[i + n] = e[i];
        for (i = 0; i < r.length; i++) t[i + o + n] = r[i];
    };
    n.extend(b.prototype, l, {
        model: y,
        initialize: function() {},
        toJSON: function(t) {
            return this.map(function(e) {
                return e.toJSON(t);
            });
        },
        sync: function() {
            return e.sync.apply(this, arguments);
        },
        add: function(t, e) {
            return this.set(t, n.extend({
                merge: !1
            }, e, x));
        },
        remove: function(t, e) {
            e = n.extend({}, e);
            var i = !n.isArray(t);
            t = i ? [ t ] : t.slice();
            var r = this._removeModels(t, e);
            return !e.silent && r.length && (e.changes = {
                added: [],
                merged: [],
                removed: r
            }, this.trigger("update", this, e)), i ? r[0] : r;
        },
        set: function(t, e) {
            if (null != t) {
                (e = n.extend({}, w, e)).parse && !this._isModel(t) && (t = this.parse(t, e) || []);
                var i = !n.isArray(t);
                t = i ? [ t ] : t.slice();
                var r = e.at;
                null != r && (r = +r), r > this.length && (r = this.length), r < 0 && (r += this.length + 1);
                var o, s, a = [], u = [], l = [], c = [], h = {}, f = e.add, d = e.merge, p = e.remove, m = !1, g = this.comparator && null == r && !1 !== e.sort, v = n.isString(this.comparator) ? this.comparator : null;
                for (s = 0; s < t.length; s++) {
                    o = t[s];
                    var y = this.get(o);
                    if (y) {
                        if (d && o !== y) {
                            var b = this._isModel(o) ? o.attributes : o;
                            e.parse && (b = y.parse(b, e)), y.set(b, e), l.push(y), g && !m && (m = y.hasChanged(v));
                        }
                        h[y.cid] || (h[y.cid] = !0, a.push(y)), t[s] = y;
                    } else f && (o = t[s] = this._prepareModel(o, e)) && (u.push(o), this._addReference(o, e), h[o.cid] = !0, 
                    a.push(o));
                }
                if (p) {
                    for (s = 0; s < this.length; s++) h[(o = this.models[s]).cid] || c.push(o);
                    c.length && this._removeModels(c, e);
                }
                var x = !1, T = !g && f && p;
                if (a.length && T ? (x = this.length !== a.length || n.some(this.models, function(t, e) {
                    return t !== a[e];
                }), this.models.length = 0, _(this.models, a, 0), this.length = this.models.length) : u.length && (g && (m = !0), 
                _(this.models, u, null == r ? this.length : r), this.length = this.models.length), m && this.sort({
                    silent: !0
                }), !e.silent) {
                    for (s = 0; s < u.length; s++) null != r && (e.index = r + s), (o = u[s]).trigger("add", o, this, e);
                    (m || x) && this.trigger("sort", this, e), (u.length || c.length || l.length) && (e.changes = {
                        added: u,
                        removed: c,
                        merged: l
                    }, this.trigger("update", this, e));
                }
                return i ? t[0] : t;
            }
        },
        reset: function(t, e) {
            e = e ? n.clone(e) : {};
            for (var i = 0; i < this.models.length; i++) this._removeReference(this.models[i], e);
            return e.previousModels = this.models, this._reset(), t = this.add(t, n.extend({
                silent: !0
            }, e)), e.silent || this.trigger("reset", this, e), t;
        },
        push: function(t, e) {
            return this.add(t, n.extend({
                at: this.length
            }, e));
        },
        pop: function(t) {
            var e = this.at(this.length - 1);
            return this.remove(e, t);
        },
        unshift: function(t, e) {
            return this.add(t, n.extend({
                at: 0
            }, e));
        },
        shift: function(t) {
            var e = this.at(0);
            return this.remove(e, t);
        },
        slice: function() {
            return o.apply(this.models, arguments);
        },
        get: function(t) {
            if (null != t) return this._byId[t] || this._byId[this.modelId(t.attributes || t)] || t.cid && this._byId[t.cid];
        },
        has: function(t) {
            return null != this.get(t);
        },
        at: function(t) {
            return t < 0 && (t += this.length), this.models[t];
        },
        where: function(t, e) {
            return this[e ? "find" : "filter"](t);
        },
        findWhere: function(t) {
            return this.where(t, !0);
        },
        sort: function(t) {
            var e = this.comparator;
            if (!e) throw new Error("Cannot sort a set without a comparator");
            t || (t = {});
            var i = e.length;
            return n.isFunction(e) && (e = n.bind(e, this)), 1 === i || n.isString(e) ? this.models = this.sortBy(e) : this.models.sort(e), 
            t.silent || this.trigger("sort", this, t), this;
        },
        pluck: function(t) {
            return this.map(t + "");
        },
        fetch: function(t) {
            var e = (t = n.extend({
                parse: !0
            }, t)).success, i = this;
            return t.success = function(n) {
                var r = t.reset ? "reset" : "set";
                i[r](n, t), e && e.call(t.context, i, n, t), i.trigger("sync", i, n, t);
            }, L(this, t), this.sync("read", this, t);
        },
        create: function(t, e) {
            var i = (e = e ? n.clone(e) : {}).wait;
            if (!(t = this._prepareModel(t, e))) return !1;
            i || this.add(t, e);
            var r = this, o = e.success;
            return e.success = function(t, e, n) {
                i && r.add(t, n), o && o.call(n.context, t, e, n);
            }, t.save(null, e), t;
        },
        parse: function(t, e) {
            return t;
        },
        clone: function() {
            return new this.constructor(this.models, {
                model: this.model,
                comparator: this.comparator
            });
        },
        modelId: function(t) {
            return t[this.model.prototype.idAttribute || "id"];
        },
        _reset: function() {
            this.length = 0, this.models = [], this._byId = {};
        },
        _prepareModel: function(t, e) {
            if (this._isModel(t)) return t.collection || (t.collection = this), t;
            (e = e ? n.clone(e) : {}).collection = this;
            var i = new this.model(t, e);
            return i.validationError ? (this.trigger("invalid", this, i.validationError, e), !1) : i;
        },
        _removeModels: function(t, e) {
            for (var n = [], i = 0; i < t.length; i++) {
                var r = this.get(t[i]);
                if (r) {
                    var o = this.indexOf(r);
                    this.models.splice(o, 1), this.length--, delete this._byId[r.cid];
                    var s = this.modelId(r.attributes);
                    null != s && delete this._byId[s], e.silent || (e.index = o, r.trigger("remove", r, this, e)), n.push(r), 
                    this._removeReference(r, e);
                }
            }
            return n;
        },
        _isModel: function(t) {
            return t instanceof y;
        },
        _addReference: function(t, e) {
            this._byId[t.cid] = t;
            var n = this.modelId(t.attributes);
            null != n && (this._byId[n] = t), t.on("all", this._onModelEvent, this);
        },
        _removeReference: function(t, e) {
            delete this._byId[t.cid];
            var n = this.modelId(t.attributes);
            null != n && delete this._byId[n], this === t.collection && delete t.collection, t.off("all", this._onModelEvent, this);
        },
        _onModelEvent: function(t, e, n, i) {
            if (e) {
                if (("add" === t || "remove" === t) && n !== this) return;
                if ("destroy" === t && this.remove(e, i), "change" === t) {
                    var r = this.modelId(e.previousAttributes()), o = this.modelId(e.attributes);
                    r !== o && (null != r && delete this._byId[r], null != o && (this._byId[o] = e));
                }
            }
            this.trigger.apply(this, arguments);
        }
    });
    s(b, {
        forEach: 3,
        each: 3,
        map: 3,
        collect: 3,
        reduce: 0,
        foldl: 0,
        inject: 0,
        reduceRight: 0,
        foldr: 0,
        find: 3,
        detect: 3,
        filter: 3,
        select: 3,
        reject: 3,
        every: 3,
        all: 3,
        some: 3,
        any: 3,
        include: 3,
        includes: 3,
        contains: 3,
        invoke: 0,
        max: 3,
        min: 3,
        toArray: 1,
        size: 1,
        first: 3,
        head: 3,
        take: 3,
        initial: 3,
        rest: 3,
        tail: 3,
        drop: 3,
        last: 3,
        without: 0,
        difference: 0,
        indexOf: 3,
        shuffle: 1,
        lastIndexOf: 3,
        isEmpty: 1,
        chain: 1,
        sample: 3,
        partition: 3,
        groupBy: 3,
        countBy: 3,
        sortBy: 3,
        indexBy: 3,
        findIndex: 3,
        findLastIndex: 3
    }, "models");
    var T = e.View = function(t) {
        this.cid = n.uniqueId("view"), n.extend(this, n.pick(t, k)), this._ensureElement(), this.initialize.apply(this, arguments);
    }, C = /^(\S+)\s*(.*)$/, k = [ "model", "collection", "el", "id", "attributes", "className", "tagName", "events" ];
    n.extend(T.prototype, l, {
        tagName: "div",
        $: function(t) {
            return this.$el.find(t);
        },
        initialize: function() {},
        render: function() {
            return this;
        },
        remove: function() {
            return this._removeElement(), this.stopListening(), this;
        },
        _removeElement: function() {
            this.$el.remove();
        },
        setElement: function(t) {
            return this.undelegateEvents(), this._setElement(t), this.delegateEvents(), this;
        },
        _setElement: function(t) {
            this.$el = t instanceof e.$ ? t : e.$(t), this.el = this.$el[0];
        },
        delegateEvents: function(t) {
            if (t || (t = n.result(this, "events")), !t) return this;
            this.undelegateEvents();
            for (var e in t) {
                var i = t[e];
                if (n.isFunction(i) || (i = this[i]), i) {
                    var r = e.match(C);
                    this.delegate(r[1], r[2], n.bind(i, this));
                }
            }
            return this;
        },
        delegate: function(t, e, n) {
            return this.$el.on(t + ".delegateEvents" + this.cid, e, n), this;
        },
        undelegateEvents: function() {
            return this.$el && this.$el.off(".delegateEvents" + this.cid), this;
        },
        undelegate: function(t, e, n) {
            return this.$el.off(t + ".delegateEvents" + this.cid, e, n), this;
        },
        _createElement: function(t) {
            return document.createElement(t);
        },
        _ensureElement: function() {
            if (this.el) this.setElement(n.result(this, "el")); else {
                var t = n.extend({}, n.result(this, "attributes"));
                this.id && (t.id = n.result(this, "id")), this.className && (t.class = n.result(this, "className")), 
                this.setElement(this._createElement(n.result(this, "tagName"))), this._setAttributes(t);
            }
        },
        _setAttributes: function(t) {
            this.$el.attr(t);
        }
    }), e.sync = function(t, i, r) {
        var o = S[t];
        n.defaults(r || (r = {}), {
            emulateHTTP: e.emulateHTTP,
            emulateJSON: e.emulateJSON
        });
        var s = {
            type: o,
            dataType: "json"
        };
        if (r.url || (s.url = n.result(i, "url") || j()), null != r.data || !i || "create" !== t && "update" !== t && "patch" !== t || (s.contentType = "application/json", 
        s.data = JSON.stringify(r.attrs || i.toJSON(r))), r.emulateJSON && (s.contentType = "application/x-www-form-urlencoded", 
        s.data = s.data ? {
            model: s.data
        } : {}), r.emulateHTTP && ("PUT" === o || "DELETE" === o || "PATCH" === o)) {
            s.type = "POST", r.emulateJSON && (s.data._method = o);
            var a = r.beforeSend;
            r.beforeSend = function(t) {
                if (t.setRequestHeader("X-HTTP-Method-Override", o), a) return a.apply(this, arguments);
            };
        }
        "GET" === s.type || r.emulateJSON || (s.processData = !1);
        var u = r.error;
        r.error = function(t, e, n) {
            r.textStatus = e, r.errorThrown = n, u && u.call(r.context, t, e, n);
        };
        var l = r.xhr = e.ajax(n.extend(s, r));
        return i.trigger("request", i, l, r), l;
    };
    var S = {
        create: "POST",
        update: "PUT",
        patch: "PATCH",
        delete: "DELETE",
        read: "GET"
    };
    e.ajax = function() {
        return e.$.ajax.apply(e.$, arguments);
    };
    var E = e.Router = function(t) {
        t || (t = {}), t.routes && (this.routes = t.routes), this._bindRoutes(), this.initialize.apply(this, arguments);
    }, A = /\((.*?)\)/g, N = /(\(\?)?:\w+/g, I = /\*\w+/g, P = /[\-{}\[\]+?.,\\\^$|#\s]/g;
    n.extend(E.prototype, l, {
        initialize: function() {},
        route: function(t, i, r) {
            n.isRegExp(t) || (t = this._routeToRegExp(t)), n.isFunction(i) && (r = i, i = ""), r || (r = this[i]);
            var o = this;
            return e.history.route(t, function(n) {
                var s = o._extractParameters(t, n);
                !1 !== o.execute(r, s, i) && (o.trigger.apply(o, [ "route:" + i ].concat(s)), o.trigger("route", i, s), 
                e.history.trigger("route", o, i, s));
            }), this;
        },
        execute: function(t, e, n) {
            t && t.apply(this, e);
        },
        navigate: function(t, n) {
            return e.history.navigate(t, n), this;
        },
        _bindRoutes: function() {
            if (this.routes) {
                this.routes = n.result(this, "routes");
                for (var t, e = n.keys(this.routes); null != (t = e.pop()); ) this.route(t, this.routes[t]);
            }
        },
        _routeToRegExp: function(t) {
            return t = t.replace(P, "\\$&").replace(A, "(?:$1)?").replace(N, function(t, e) {
                return e ? t : "([^/?]+)";
            }).replace(I, "([^?]*?)"), new RegExp("^" + t + "(?:\\?([\\s\\S]*))?$");
        },
        _extractParameters: function(t, e) {
            var i = t.exec(e).slice(1);
            return n.map(i, function(t, e) {
                return e === i.length - 1 ? t || null : t ? decodeURIComponent(t) : null;
            });
        }
    });
    var M = e.History = function() {
        this.handlers = [], this.checkUrl = n.bind(this.checkUrl, this), "undefined" != typeof window && (this.location = window.location, 
        this.history = window.history);
    }, D = /^[#\/]|\s+$/g, O = /^\/+|\/+$/g, H = /#.*$/;
    M.started = !1, n.extend(M.prototype, l, {
        interval: 50,
        atRoot: function() {
            return this.location.pathname.replace(/[^\/]$/, "$&/") === this.root && !this.getSearch();
        },
        matchRoot: function() {
            return this.decodeFragment(this.location.pathname).slice(0, this.root.length - 1) + "/" === this.root;
        },
        decodeFragment: function(t) {
            return decodeURI(t.replace(/%25/g, "%2525"));
        },
        getSearch: function() {
            var t = this.location.href.replace(/#.*/, "").match(/\?.+/);
            return t ? t[0] : "";
        },
        getHash: function(t) {
            var e = (t || this).location.href.match(/#(.*)$/);
            return e ? e[1] : "";
        },
        getPath: function() {
            var t = this.decodeFragment(this.location.pathname + this.getSearch()).slice(this.root.length - 1);
            return "/" === t.charAt(0) ? t.slice(1) : t;
        },
        getFragment: function(t) {
            return null == t && (t = this._usePushState || !this._wantsHashChange ? this.getPath() : this.getHash()), 
            t.replace(D, "");
        },
        start: function(t) {
            if (M.started) throw new Error("Backbone.history has already been started");
            if (M.started = !0, this.options = n.extend({
                root: "/"
            }, this.options, t), this.root = this.options.root, this._wantsHashChange = !1 !== this.options.hashChange, 
            this._hasHashChange = "onhashchange" in window && (void 0 === document.documentMode || document.documentMode > 7), 
            this._useHashChange = this._wantsHashChange && this._hasHashChange, this._wantsPushState = !!this.options.pushState, 
            this._hasPushState = !(!this.history || !this.history.pushState), this._usePushState = this._wantsPushState && this._hasPushState, 
            this.fragment = this.getFragment(), this.root = ("/" + this.root + "/").replace(O, "/"), this._wantsHashChange && this._wantsPushState) {
                if (!this._hasPushState && !this.atRoot()) {
                    var e = this.root.slice(0, -1) || "/";
                    return this.location.replace(e + "#" + this.getPath()), !0;
                }
                this._hasPushState && this.atRoot() && this.navigate(this.getHash(), {
                    replace: !0
                });
            }
            if (!this._hasHashChange && this._wantsHashChange && !this._usePushState) {
                this.iframe = document.createElement("iframe"), this.iframe.src = "javascript:0", this.iframe.style.display = "none", 
                this.iframe.tabIndex = -1;
                var i = document.body, r = i.insertBefore(this.iframe, i.firstChild).contentWindow;
                r.document.open(), r.document.close(), r.location.hash = "#" + this.fragment;
            }
            var o = window.addEventListener || function(t, e) {
                return attachEvent("on" + t, e);
            };
            if (this._usePushState ? o("popstate", this.checkUrl, !1) : this._useHashChange && !this.iframe ? o("hashchange", this.checkUrl, !1) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), 
            !this.options.silent) return this.loadUrl();
        },
        stop: function() {
            var t = window.removeEventListener || function(t, e) {
                return detachEvent("on" + t, e);
            };
            this._usePushState ? t("popstate", this.checkUrl, !1) : this._useHashChange && !this.iframe && t("hashchange", this.checkUrl, !1), 
            this.iframe && (document.body.removeChild(this.iframe), this.iframe = null), this._checkUrlInterval && clearInterval(this._checkUrlInterval), 
            M.started = !1;
        },
        route: function(t, e) {
            this.handlers.unshift({
                route: t,
                callback: e
            });
        },
        checkUrl: function(t) {
            var e = this.getFragment();
            if (e === this.fragment && this.iframe && (e = this.getHash(this.iframe.contentWindow)), e === this.fragment) return !1;
            this.iframe && this.navigate(e), this.loadUrl();
        },
        loadUrl: function(t) {
            return !!this.matchRoot() && (t = this.fragment = this.getFragment(t), n.some(this.handlers, function(e) {
                if (e.route.test(t)) return e.callback(t), !0;
            }));
        },
        navigate: function(t, e) {
            if (!M.started) return !1;
            e && !0 !== e || (e = {
                trigger: !!e
            }), t = this.getFragment(t || "");
            var n = this.root;
            "" !== t && "?" !== t.charAt(0) || (n = n.slice(0, -1) || "/");
            var i = n + t;
            if (t = this.decodeFragment(t.replace(H, "")), this.fragment !== t) {
                if (this.fragment = t, this._usePushState) this.history[e.replace ? "replaceState" : "pushState"]({}, document.title, i); else {
                    if (!this._wantsHashChange) return this.location.assign(i);
                    if (this._updateHash(this.location, t, e.replace), this.iframe && t !== this.getHash(this.iframe.contentWindow)) {
                        var r = this.iframe.contentWindow;
                        e.replace || (r.document.open(), r.document.close()), this._updateHash(r.location, t, e.replace);
                    }
                }
                return e.trigger ? this.loadUrl(t) : void 0;
            }
        },
        _updateHash: function(t, e, n) {
            if (n) {
                var i = t.href.replace(/(javascript:|#).*$/, "");
                t.replace(i + "#" + e);
            } else t.hash = "#" + e;
        }
    }), e.history = new M();
    y.extend = b.extend = E.extend = T.extend = M.extend = function(t, e) {
        var i, r = this;
        return i = t && n.has(t, "constructor") ? t.constructor : function() {
            return r.apply(this, arguments);
        }, n.extend(i, r, e), i.prototype = n.create(r.prototype, t), i.prototype.constructor = i, i.__super__ = r.prototype, 
        i;
    };
    var j = function() {
        throw new Error('A "url" property or function must be specified');
    }, L = function(t, e) {
        var n = e.error;
        e.error = function(i) {
            n && n.call(e.context, t, i, e), t.trigger("error", t, i, e);
        };
    };
    return e;
}), function(t) {
    "function" == typeof define && define.amd ? define([ "jquery" ], t) : t(jQuery);
}(function(t) {
    function e(e, i) {
        var r, o, s, a = e.nodeName.toLowerCase();
        return "area" === a ? (r = e.parentNode, o = r.name, !(!e.href || !o || "map" !== r.nodeName.toLowerCase()) && (!!(s = t("img[usemap='#" + o + "']")[0]) && n(s))) : (/^(input|select|textarea|button|object)$/.test(a) ? !e.disabled : "a" === a ? e.href || i : i) && n(e);
    }
    function n(e) {
        return t.expr.filters.visible(e) && !t(e).parents().addBack().filter(function() {
            return "hidden" === t.css(this, "visibility");
        }).length;
    }
    t.ui = t.ui || {}, t.extend(t.ui, {
        version: "1.11.4",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), t.fn.extend({
        scrollParent: function(e) {
            var n = this.css("position"), i = "absolute" === n, r = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/, o = this.parents().filter(function() {
                var e = t(this);
                return (!i || "static" !== e.css("position")) && r.test(e.css("overflow") + e.css("overflow-y") + e.css("overflow-x"));
            }).eq(0);
            return "fixed" !== n && o.length ? o : t(this[0].ownerDocument || document);
        },
        uniqueId: function() {
            var t = 0;
            return function() {
                return this.each(function() {
                    this.id || (this.id = "ui-id-" + ++t);
                });
            };
        }(),
        removeUniqueId: function() {
            return this.each(function() {
                /^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id");
            });
        }
    }), t.extend(t.expr[":"], {
        data: t.expr.createPseudo ? t.expr.createPseudo(function(e) {
            return function(n) {
                return !!t.data(n, e);
            };
        }) : function(e, n, i) {
            return !!t.data(e, i[3]);
        },
        focusable: function(n) {
            return e(n, !isNaN(t.attr(n, "tabindex")));
        },
        tabbable: function(n) {
            var i = t.attr(n, "tabindex"), r = isNaN(i);
            return (r || i >= 0) && e(n, !r);
        }
    }), t("<a>").outerWidth(1).jquery || t.each([ "Width", "Height" ], function(e, n) {
        function i(e, n, i, o) {
            return t.each(r, function() {
                n -= parseFloat(t.css(e, "padding" + this)) || 0, i && (n -= parseFloat(t.css(e, "border" + this + "Width")) || 0), 
                o && (n -= parseFloat(t.css(e, "margin" + this)) || 0);
            }), n;
        }
        var r = "Width" === n ? [ "Left", "Right" ] : [ "Top", "Bottom" ], o = n.toLowerCase(), s = {
            innerWidth: t.fn.innerWidth,
            innerHeight: t.fn.innerHeight,
            outerWidth: t.fn.outerWidth,
            outerHeight: t.fn.outerHeight
        };
        t.fn["inner" + n] = function(e) {
            return void 0 === e ? s["inner" + n].call(this) : this.each(function() {
                t(this).css(o, i(this, e) + "px");
            });
        }, t.fn["outer" + n] = function(e, r) {
            return "number" != typeof e ? s["outer" + n].call(this, e) : this.each(function() {
                t(this).css(o, i(this, e, !0, r) + "px");
            });
        };
    }), t.fn.addBack || (t.fn.addBack = function(t) {
        return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
    }), t("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (t.fn.removeData = function(e) {
        return function(n) {
            return arguments.length ? e.call(this, t.camelCase(n)) : e.call(this);
        };
    }(t.fn.removeData)), t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), t.fn.extend({
        focus: function(e) {
            return function(n, i) {
                return "number" == typeof n ? this.each(function() {
                    var e = this;
                    setTimeout(function() {
                        t(e).focus(), i && i.call(e);
                    }, n);
                }) : e.apply(this, arguments);
            };
        }(t.fn.focus),
        disableSelection: function() {
            var t = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
            return function() {
                return this.bind(t + ".ui-disableSelection", function(t) {
                    t.preventDefault();
                });
            };
        }(),
        enableSelection: function() {
            return this.unbind(".ui-disableSelection");
        },
        zIndex: function(e) {
            if (void 0 !== e) return this.css("zIndex", e);
            if (this.length) for (var n, i, r = t(this[0]); r.length && r[0] !== document; ) {
                if (("absolute" === (n = r.css("position")) || "relative" === n || "fixed" === n) && (i = parseInt(r.css("zIndex"), 10), 
                !isNaN(i) && 0 !== i)) return i;
                r = r.parent();
            }
            return 0;
        }
    }), t.ui.plugin = {
        add: function(e, n, i) {
            var r, o = t.ui[e].prototype;
            for (r in i) o.plugins[r] = o.plugins[r] || [], o.plugins[r].push([ n, i[r] ]);
        },
        call: function(t, e, n, i) {
            var r, o = t.plugins[e];
            if (o && (i || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType)) for (r = 0; o.length > r; r++) t.options[o[r][0]] && o[r][1].apply(t.element, n);
        }
    };
    var i = 0, r = Array.prototype.slice;
    t.cleanData = function(e) {
        return function(n) {
            var i, r, o;
            for (o = 0; null != (r = n[o]); o++) try {
                (i = t._data(r, "events")) && i.remove && t(r).triggerHandler("remove");
            } catch (t) {}
            e(n);
        };
    }(t.cleanData), t.widget = function(e, n, i) {
        var r, o, s, a, u = {}, l = e.split(".")[0];
        return e = e.split(".")[1], r = l + "-" + e, i || (i = n, n = t.Widget), t.expr[":"][r.toLowerCase()] = function(e) {
            return !!t.data(e, r);
        }, t[l] = t[l] || {}, o = t[l][e], s = t[l][e] = function(t, e) {
            return this._createWidget ? void (arguments.length && this._createWidget(t, e)) : new s(t, e);
        }, t.extend(s, o, {
            version: i.version,
            _proto: t.extend({}, i),
            _childConstructors: []
        }), a = new n(), a.options = t.widget.extend({}, a.options), t.each(i, function(e, i) {
            return t.isFunction(i) ? void (u[e] = function() {
                var t = function() {
                    return n.prototype[e].apply(this, arguments);
                }, r = function(t) {
                    return n.prototype[e].apply(this, t);
                };
                return function() {
                    var e, n = this._super, o = this._superApply;
                    return this._super = t, this._superApply = r, e = i.apply(this, arguments), this._super = n, this._superApply = o, 
                    e;
                };
            }()) : void (u[e] = i);
        }), s.prototype = t.widget.extend(a, {
            widgetEventPrefix: o ? a.widgetEventPrefix || e : e
        }, u, {
            constructor: s,
            namespace: l,
            widgetName: e,
            widgetFullName: r
        }), o ? (t.each(o._childConstructors, function(e, n) {
            var i = n.prototype;
            t.widget(i.namespace + "." + i.widgetName, s, n._proto);
        }), delete o._childConstructors) : n._childConstructors.push(s), t.widget.bridge(e, s), s;
    }, t.widget.extend = function(e) {
        for (var n, i, o = r.call(arguments, 1), s = 0, a = o.length; a > s; s++) for (n in o[s]) i = o[s][n], 
        o[s].hasOwnProperty(n) && void 0 !== i && (e[n] = t.isPlainObject(i) ? t.isPlainObject(e[n]) ? t.widget.extend({}, e[n], i) : t.widget.extend({}, i) : i);
        return e;
    }, t.widget.bridge = function(e, n) {
        var i = n.prototype.widgetFullName || e;
        t.fn[e] = function(o) {
            var s = "string" == typeof o, a = r.call(arguments, 1), u = this;
            return s ? this.each(function() {
                var n, r = t.data(this, i);
                return "instance" === o ? (u = r, !1) : r ? t.isFunction(r[o]) && "_" !== o.charAt(0) ? (n = r[o].apply(r, a)) !== r && void 0 !== n ? (u = n && n.jquery ? u.pushStack(n.get()) : n, 
                !1) : void 0 : t.error("no such method '" + o + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; attempted to call method '" + o + "'");
            }) : (a.length && (o = t.widget.extend.apply(null, [ o ].concat(a))), this.each(function() {
                var e = t.data(this, i);
                e ? (e.option(o || {}), e._init && e._init()) : t.data(this, i, new n(o, this));
            })), u;
        };
    }, t.Widget = function() {}, t.Widget._childConstructors = [], t.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(e, n) {
            n = t(n || this.defaultElement || this)[0], this.element = t(n), this.uuid = i++, this.eventNamespace = "." + this.widgetName + this.uuid, 
            this.bindings = t(), this.hoverable = t(), this.focusable = t(), n !== this && (t.data(n, this.widgetFullName, this), 
            this._on(!0, this.element, {
                remove: function(t) {
                    t.target === n && this.destroy();
                }
            }), this.document = t(n.style ? n.ownerDocument : n.document || n), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), 
            this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this._create(), this._trigger("create", null, this._getCreateEventData()), 
            this._init();
        },
        _getCreateOptions: t.noop,
        _getCreateEventData: t.noop,
        _create: t.noop,
        _init: t.noop,
        destroy: function() {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)), 
            this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), 
            this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus");
        },
        _destroy: t.noop,
        widget: function() {
            return this.element;
        },
        option: function(e, n) {
            var i, r, o, s = e;
            if (0 === arguments.length) return t.widget.extend({}, this.options);
            if ("string" == typeof e) if (s = {}, i = e.split("."), e = i.shift(), i.length) {
                for (r = s[e] = t.widget.extend({}, this.options[e]), o = 0; i.length - 1 > o; o++) r[i[o]] = r[i[o]] || {}, 
                r = r[i[o]];
                if (e = i.pop(), 1 === arguments.length) return void 0 === r[e] ? null : r[e];
                r[e] = n;
            } else {
                if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];
                s[e] = n;
            }
            return this._setOptions(s), this;
        },
        _setOptions: function(t) {
            var e;
            for (e in t) this._setOption(e, t[e]);
            return this;
        },
        _setOption: function(t, e) {
            return this.options[t] = e, "disabled" === t && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!e), 
            e && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), 
            this;
        },
        enable: function() {
            return this._setOptions({
                disabled: !1
            });
        },
        disable: function() {
            return this._setOptions({
                disabled: !0
            });
        },
        _on: function(e, n, i) {
            var r, o = this;
            "boolean" != typeof e && (i = n, n = e, e = !1), i ? (n = r = t(n), this.bindings = this.bindings.add(n)) : (i = n, 
            n = this.element, r = this.widget()), t.each(i, function(i, s) {
                function a() {
                    return e || !0 !== o.options.disabled && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof s ? o[s] : s).apply(o, arguments) : void 0;
                }
                "string" != typeof s && (a.guid = s.guid = s.guid || a.guid || t.guid++);
                var u = i.match(/^([\w:-]*)\s*(.*)$/), l = u[1] + o.eventNamespace, c = u[2];
                c ? r.delegate(c, l, a) : n.bind(l, a);
            });
        },
        _off: function(e, n) {
            n = (n || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(n).undelegate(n), 
            this.bindings = t(this.bindings.not(e).get()), this.focusable = t(this.focusable.not(e).get()), this.hoverable = t(this.hoverable.not(e).get());
        },
        _delay: function(t, e) {
            var n = this;
            return setTimeout(function() {
                return ("string" == typeof t ? n[t] : t).apply(n, arguments);
            }, e || 0);
        },
        _hoverable: function(e) {
            this.hoverable = this.hoverable.add(e), this._on(e, {
                mouseenter: function(e) {
                    t(e.currentTarget).addClass("ui-state-hover");
                },
                mouseleave: function(e) {
                    t(e.currentTarget).removeClass("ui-state-hover");
                }
            });
        },
        _focusable: function(e) {
            this.focusable = this.focusable.add(e), this._on(e, {
                focusin: function(e) {
                    t(e.currentTarget).addClass("ui-state-focus");
                },
                focusout: function(e) {
                    t(e.currentTarget).removeClass("ui-state-focus");
                }
            });
        },
        _trigger: function(e, n, i) {
            var r, o, s = this.options[e];
            if (i = i || {}, n = t.Event(n), n.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), 
            n.target = this.element[0], o = n.originalEvent) for (r in o) r in n || (n[r] = o[r]);
            return this.element.trigger(n, i), !(t.isFunction(s) && !1 === s.apply(this.element[0], [ n ].concat(i)) || n.isDefaultPrevented());
        }
    }, t.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(e, n) {
        t.Widget.prototype["_" + e] = function(i, r, o) {
            "string" == typeof r && (r = {
                effect: r
            });
            var s, a = r ? !0 === r || "number" == typeof r ? n : r.effect || n : e;
            "number" == typeof (r = r || {}) && (r = {
                duration: r
            }), s = !t.isEmptyObject(r), r.complete = o, r.delay && i.delay(r.delay), s && t.effects && t.effects.effect[a] ? i[e](r) : a !== e && i[a] ? i[a](r.duration, r.easing, o) : i.queue(function(n) {
                t(this)[e](), o && o.call(i[0]), n();
            });
        };
    }), t.widget;
    var o = !1;
    t(document).mouseup(function() {
        o = !1;
    }), t.widget("ui.mouse", {
        version: "1.11.4",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var e = this;
            this.element.bind("mousedown." + this.widgetName, function(t) {
                return e._mouseDown(t);
            }).bind("click." + this.widgetName, function(n) {
                return !0 === t.data(n.target, e.widgetName + ".preventClickEvent") ? (t.removeData(n.target, e.widgetName + ".preventClickEvent"), 
                n.stopImmediatePropagation(), !1) : void 0;
            }), this.started = !1;
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
        },
        _mouseDown: function(e) {
            if (!o) {
                this._mouseMoved = !1, this._mouseStarted && this._mouseUp(e), this._mouseDownEvent = e;
                var n = this, i = 1 === e.which, r = !("string" != typeof this.options.cancel || !e.target.nodeName) && t(e.target).closest(this.options.cancel).length;
                return !(i && !r && this._mouseCapture(e)) || (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    n.mouseDelayMet = !0;
                }, this.options.delay)), this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(e), 
                !this._mouseStarted) ? (e.preventDefault(), !0) : (!0 === t.data(e.target, this.widgetName + ".preventClickEvent") && t.removeData(e.target, this.widgetName + ".preventClickEvent"), 
                this._mouseMoveDelegate = function(t) {
                    return n._mouseMove(t);
                }, this._mouseUpDelegate = function(t) {
                    return n._mouseUp(t);
                }, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), 
                e.preventDefault(), o = !0, !0));
            }
        },
        _mouseMove: function(e) {
            if (this._mouseMoved) {
                if (t.ui.ie && (!document.documentMode || 9 > document.documentMode) && !e.button) return this._mouseUp(e);
                if (!e.which) return this._mouseUp(e);
            }
            return (e.which || e.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, e), 
            this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted);
        },
        _mouseUp: function(e) {
            return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), 
            this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), 
            this._mouseStop(e)), o = !1, !1;
        },
        _mouseDistanceMet: function(t) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance;
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet;
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return !0;
        }
    }), function() {
        function e(t, e, n) {
            return [ parseFloat(t[0]) * (f.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (f.test(t[1]) ? n / 100 : 1) ];
        }
        function n(e, n) {
            return parseInt(t.css(e, n), 10) || 0;
        }
        t.ui = t.ui || {};
        var i, r, o = Math.max, s = Math.abs, a = Math.round, u = /left|center|right/, l = /top|center|bottom/, c = /[\+\-]\d+(\.[\d]+)?%?/, h = /^\w+/, f = /%$/, d = t.fn.position;
        t.position = {
            scrollbarWidth: function() {
                if (void 0 !== i) return i;
                var e, n, r = t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"), o = r.children()[0];
                return t("body").append(r), e = o.offsetWidth, r.css("overflow", "scroll"), n = o.offsetWidth, e === n && (n = r[0].clientWidth), 
                r.remove(), i = e - n;
            },
            getScrollInfo: function(e) {
                var n = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"), i = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"), r = "scroll" === n || "auto" === n && e.width < e.element[0].scrollWidth;
                return {
                    width: "scroll" === i || "auto" === i && e.height < e.element[0].scrollHeight ? t.position.scrollbarWidth() : 0,
                    height: r ? t.position.scrollbarWidth() : 0
                };
            },
            getWithinInfo: function(e) {
                var n = t(e || window), i = t.isWindow(n[0]), r = !!n[0] && 9 === n[0].nodeType;
                return {
                    element: n,
                    isWindow: i,
                    isDocument: r,
                    offset: n.offset() || {
                        left: 0,
                        top: 0
                    },
                    scrollLeft: n.scrollLeft(),
                    scrollTop: n.scrollTop(),
                    width: i || r ? n.width() : n.outerWidth(),
                    height: i || r ? n.height() : n.outerHeight()
                };
            }
        }, t.fn.position = function(i) {
            if (!i || !i.of) return d.apply(this, arguments);
            i = t.extend({}, i);
            var f, p, m, g, v, y, b = t(i.of), w = t.position.getWithinInfo(i.within), x = t.position.getScrollInfo(w), _ = (i.collision || "flip").split(" "), T = {};
            return y = function(e) {
                var n = e[0];
                return 9 === n.nodeType ? {
                    width: e.width(),
                    height: e.height(),
                    offset: {
                        top: 0,
                        left: 0
                    }
                } : t.isWindow(n) ? {
                    width: e.width(),
                    height: e.height(),
                    offset: {
                        top: e.scrollTop(),
                        left: e.scrollLeft()
                    }
                } : n.preventDefault ? {
                    width: 0,
                    height: 0,
                    offset: {
                        top: n.pageY,
                        left: n.pageX
                    }
                } : {
                    width: e.outerWidth(),
                    height: e.outerHeight(),
                    offset: e.offset()
                };
            }(b), b[0].preventDefault && (i.at = "left top"), p = y.width, m = y.height, g = y.offset, v = t.extend({}, g), 
            t.each([ "my", "at" ], function() {
                var t, e, n = (i[this] || "").split(" ");
                1 === n.length && (n = u.test(n[0]) ? n.concat([ "center" ]) : l.test(n[0]) ? [ "center" ].concat(n) : [ "center", "center" ]), 
                n[0] = u.test(n[0]) ? n[0] : "center", n[1] = l.test(n[1]) ? n[1] : "center", t = c.exec(n[0]), e = c.exec(n[1]), 
                T[this] = [ t ? t[0] : 0, e ? e[0] : 0 ], i[this] = [ h.exec(n[0])[0], h.exec(n[1])[0] ];
            }), 1 === _.length && (_[1] = _[0]), "right" === i.at[0] ? v.left += p : "center" === i.at[0] && (v.left += p / 2), 
            "bottom" === i.at[1] ? v.top += m : "center" === i.at[1] && (v.top += m / 2), f = e(T.at, p, m), v.left += f[0], 
            v.top += f[1], this.each(function() {
                var u, l, c = t(this), h = c.outerWidth(), d = c.outerHeight(), y = n(this, "marginLeft"), C = n(this, "marginTop"), k = h + y + n(this, "marginRight") + x.width, S = d + C + n(this, "marginBottom") + x.height, E = t.extend({}, v), A = e(T.my, c.outerWidth(), c.outerHeight());
                "right" === i.my[0] ? E.left -= h : "center" === i.my[0] && (E.left -= h / 2), "bottom" === i.my[1] ? E.top -= d : "center" === i.my[1] && (E.top -= d / 2), 
                E.left += A[0], E.top += A[1], r || (E.left = a(E.left), E.top = a(E.top)), u = {
                    marginLeft: y,
                    marginTop: C
                }, t.each([ "left", "top" ], function(e, n) {
                    t.ui.position[_[e]] && t.ui.position[_[e]][n](E, {
                        targetWidth: p,
                        targetHeight: m,
                        elemWidth: h,
                        elemHeight: d,
                        collisionPosition: u,
                        collisionWidth: k,
                        collisionHeight: S,
                        offset: [ f[0] + A[0], f[1] + A[1] ],
                        my: i.my,
                        at: i.at,
                        within: w,
                        elem: c
                    });
                }), i.using && (l = function(t) {
                    var e = g.left - E.left, n = e + p - h, r = g.top - E.top, a = r + m - d, u = {
                        target: {
                            element: b,
                            left: g.left,
                            top: g.top,
                            width: p,
                            height: m
                        },
                        element: {
                            element: c,
                            left: E.left,
                            top: E.top,
                            width: h,
                            height: d
                        },
                        horizontal: 0 > n ? "left" : e > 0 ? "right" : "center",
                        vertical: 0 > a ? "top" : r > 0 ? "bottom" : "middle"
                    };
                    h > p && p > s(e + n) && (u.horizontal = "center"), d > m && m > s(r + a) && (u.vertical = "middle"), 
                    u.important = o(s(e), s(n)) > o(s(r), s(a)) ? "horizontal" : "vertical", i.using.call(this, t, u);
                }), c.offset(t.extend(E, {
                    using: l
                }));
            });
        }, t.ui.position = {
            fit: {
                left: function(t, e) {
                    var n, i = e.within, r = i.isWindow ? i.scrollLeft : i.offset.left, s = i.width, a = t.left - e.collisionPosition.marginLeft, u = r - a, l = a + e.collisionWidth - s - r;
                    e.collisionWidth > s ? u > 0 && 0 >= l ? (n = t.left + u + e.collisionWidth - s - r, t.left += u - n) : t.left = l > 0 && 0 >= u ? r : u > l ? r + s - e.collisionWidth : r : u > 0 ? t.left += u : l > 0 ? t.left -= l : t.left = o(t.left - a, t.left);
                },
                top: function(t, e) {
                    var n, i = e.within, r = i.isWindow ? i.scrollTop : i.offset.top, s = e.within.height, a = t.top - e.collisionPosition.marginTop, u = r - a, l = a + e.collisionHeight - s - r;
                    e.collisionHeight > s ? u > 0 && 0 >= l ? (n = t.top + u + e.collisionHeight - s - r, t.top += u - n) : t.top = l > 0 && 0 >= u ? r : u > l ? r + s - e.collisionHeight : r : u > 0 ? t.top += u : l > 0 ? t.top -= l : t.top = o(t.top - a, t.top);
                }
            },
            flip: {
                left: function(t, e) {
                    var n, i, r = e.within, o = r.offset.left + r.scrollLeft, a = r.width, u = r.isWindow ? r.scrollLeft : r.offset.left, l = t.left - e.collisionPosition.marginLeft, c = l - u, h = l + e.collisionWidth - a - u, f = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0, d = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0, p = -2 * e.offset[0];
                    0 > c ? (0 > (n = t.left + f + d + p + e.collisionWidth - a - o) || s(c) > n) && (t.left += f + d + p) : h > 0 && ((i = t.left - e.collisionPosition.marginLeft + f + d + p - u) > 0 || h > s(i)) && (t.left += f + d + p);
                },
                top: function(t, e) {
                    var n, i, r = e.within, o = r.offset.top + r.scrollTop, a = r.height, u = r.isWindow ? r.scrollTop : r.offset.top, l = t.top - e.collisionPosition.marginTop, c = l - u, h = l + e.collisionHeight - a - u, f = "top" === e.my[1] ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0, d = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0, p = -2 * e.offset[1];
                    0 > c ? (0 > (i = t.top + f + d + p + e.collisionHeight - a - o) || s(c) > i) && (t.top += f + d + p) : h > 0 && ((n = t.top - e.collisionPosition.marginTop + f + d + p - u) > 0 || h > s(n)) && (t.top += f + d + p);
                }
            },
            flipfit: {
                left: function() {
                    t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments);
                },
                top: function() {
                    t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments);
                }
            }
        }, function() {
            var e, n, i, o, s, a = document.getElementsByTagName("body")[0], u = document.createElement("div");
            e = document.createElement(a ? "div" : "body"), i = {
                visibility: "hidden",
                width: 0,
                height: 0,
                border: 0,
                margin: 0,
                background: "none"
            }, a && t.extend(i, {
                position: "absolute",
                left: "-1000px",
                top: "-1000px"
            });
            for (s in i) e.style[s] = i[s];
            e.appendChild(u), (n = a || document.documentElement).insertBefore(e, n.firstChild), u.style.cssText = "position: absolute; left: 10.7432222px;", 
            o = t(u).offset().left, r = o > 10 && 11 > o, e.innerHTML = "", n.removeChild(e);
        }();
    }(), t.ui.position, t.widget("ui.sortable", t.ui.mouse, {
        version: "1.11.4",
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3,
            activate: null,
            beforeStop: null,
            change: null,
            deactivate: null,
            out: null,
            over: null,
            receive: null,
            remove: null,
            sort: null,
            start: null,
            stop: null,
            update: null
        },
        _isOverAxis: function(t, e, n) {
            return t >= e && e + n > t;
        },
        _isFloating: function(t) {
            return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"));
        },
        _create: function() {
            this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.offset = this.element.offset(), 
            this._mouseInit(), this._setHandleClassName(), this.ready = !0;
        },
        _setOption: function(t, e) {
            this._super(t, e), "handle" === t && this._setHandleClassName();
        },
        _setHandleClassName: function() {
            this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle"), t.each(this.items, function() {
                (this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item).addClass("ui-sortable-handle");
            });
        },
        _destroy: function() {
            this.element.removeClass("ui-sortable ui-sortable-disabled").find(".ui-sortable-handle").removeClass("ui-sortable-handle"), 
            this._mouseDestroy();
            for (var t = this.items.length - 1; t >= 0; t--) this.items[t].item.removeData(this.widgetName + "-item");
            return this;
        },
        _mouseCapture: function(e, n) {
            var i = null, r = !1, o = this;
            return !this.reverting && (!this.options.disabled && "static" !== this.options.type && (this._refreshItems(e), 
            t(e.target).parents().each(function() {
                return t.data(this, o.widgetName + "-item") === o ? (i = t(this), !1) : void 0;
            }), t.data(e.target, o.widgetName + "-item") === o && (i = t(e.target)), !!i && (!(this.options.handle && !n && (t(this.options.handle, i).find("*").addBack().each(function() {
                this === e.target && (r = !0);
            }), !r)) && (this.currentItem = i, this._removeCurrentsFromItems(), !0))));
        },
        _mouseStart: function(e, n, i) {
            var r, o, s = this.options;
            if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), this._cacheHelperProportions(), 
            this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), 
            this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            }, t.extend(this.offset, {
                click: {
                    left: e.pageX - this.offset.left,
                    top: e.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(e), 
            this.originalPageX = e.pageX, this.originalPageY = e.pageY, s.cursorAt && this._adjustOffsetFromHelper(s.cursorAt), 
            this.domPosition = {
                prev: this.currentItem.prev()[0],
                parent: this.currentItem.parent()[0]
            }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), s.containment && this._setContainment(), 
            s.cursor && "auto" !== s.cursor && (o = this.document.find("body"), this.storedCursor = o.css("cursor"), 
            o.css("cursor", s.cursor), this.storedStylesheet = t("<style>*{ cursor: " + s.cursor + " !important; }</style>").appendTo(o)), 
            s.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", s.opacity)), 
            s.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", s.zIndex)), 
            this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), 
            this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), 
            !i) for (r = this.containers.length - 1; r >= 0; r--) this.containers[r]._trigger("activate", e, this._uiHash(this));
            return t.ui.ddmanager && (t.ui.ddmanager.current = this), t.ui.ddmanager && !s.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), 
            this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(e), !0;
        },
        _mouseDrag: function(e) {
            var n, i, r, o, s = this.options, a = !1;
            for (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), 
            this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < s.scrollSensitivity ? this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop + s.scrollSpeed : e.pageY - this.overflowOffset.top < s.scrollSensitivity && (this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop - s.scrollSpeed), 
            this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < s.scrollSensitivity ? this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft + s.scrollSpeed : e.pageX - this.overflowOffset.left < s.scrollSensitivity && (this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft - s.scrollSpeed)) : (e.pageY - this.document.scrollTop() < s.scrollSensitivity ? a = this.document.scrollTop(this.document.scrollTop() - s.scrollSpeed) : this.window.height() - (e.pageY - this.document.scrollTop()) < s.scrollSensitivity && (a = this.document.scrollTop(this.document.scrollTop() + s.scrollSpeed)), 
            e.pageX - this.document.scrollLeft() < s.scrollSensitivity ? a = this.document.scrollLeft(this.document.scrollLeft() - s.scrollSpeed) : this.window.width() - (e.pageX - this.document.scrollLeft()) < s.scrollSensitivity && (a = this.document.scrollLeft(this.document.scrollLeft() + s.scrollSpeed))), 
            !1 !== a && t.ui.ddmanager && !s.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)), this.positionAbs = this._convertPositionTo("absolute"), 
            this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), 
            this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), 
            n = this.items.length - 1; n >= 0; n--) if (i = this.items[n], r = i.item[0], (o = this._intersectsWithPointer(i)) && i.instance === this.currentContainer && r !== this.currentItem[0] && this.placeholder[1 === o ? "next" : "prev"]()[0] !== r && !t.contains(this.placeholder[0], r) && ("semi-dynamic" !== this.options.type || !t.contains(this.element[0], r))) {
                if (this.direction = 1 === o ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(i)) break;
                this._rearrange(e, i), this._trigger("change", e, this._uiHash());
                break;
            }
            return this._contactContainers(e), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), this._trigger("sort", e, this._uiHash()), 
            this.lastPositionAbs = this.positionAbs, !1;
        },
        _mouseStop: function(e, n) {
            if (e) {
                if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options.revert) {
                    var i = this, r = this.placeholder.offset(), o = this.options.axis, s = {};
                    o && "x" !== o || (s.left = r.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)), 
                    o && "y" !== o || (s.top = r.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)), 
                    this.reverting = !0, t(this.helper).animate(s, parseInt(this.options.revert, 10) || 500, function() {
                        i._clear(e);
                    });
                } else this._clear(e, n);
                return !1;
            }
        },
        cancel: function() {
            if (this.dragging) {
                this._mouseUp({
                    target: null
                }), "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                for (var e = this.containers.length - 1; e >= 0; e--) this.containers[e]._trigger("deactivate", null, this._uiHash(this)), 
                this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), 
                this.containers[e].containerCache.over = 0);
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), 
            "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), 
            t.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)), 
            this;
        },
        serialize: function(e) {
            var n = this._getItemsAsjQuery(e && e.connected), i = [];
            return e = e || {}, t(n).each(function() {
                var n = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
                n && i.push((e.key || n[1] + "[]") + "=" + (e.key && e.expression ? n[1] : n[2]));
            }), !i.length && e.key && i.push(e.key + "="), i.join("&");
        },
        toArray: function(e) {
            var n = this._getItemsAsjQuery(e && e.connected), i = [];
            return e = e || {}, n.each(function() {
                i.push(t(e.item || this).attr(e.attribute || "id") || "");
            }), i;
        },
        _intersectsWith: function(t) {
            var e = this.positionAbs.left, n = e + this.helperProportions.width, i = this.positionAbs.top, r = i + this.helperProportions.height, o = t.left, s = o + t.width, a = t.top, u = a + t.height, l = this.offset.click.top, c = this.offset.click.left, h = "x" === this.options.axis || i + l > a && u > i + l, f = "y" === this.options.axis || e + c > o && s > e + c, d = h && f;
            return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? d : e + this.helperProportions.width / 2 > o && s > n - this.helperProportions.width / 2 && i + this.helperProportions.height / 2 > a && u > r - this.helperProportions.height / 2;
        },
        _intersectsWithPointer: function(t) {
            var e = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height), n = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width), i = e && n, r = this._getDragVerticalDirection(), o = this._getDragHorizontalDirection();
            return !!i && (this.floating ? o && "right" === o || "down" === r ? 2 : 1 : r && ("down" === r ? 2 : 1));
        },
        _intersectsWithSides: function(t) {
            var e = this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height), n = this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width), i = this._getDragVerticalDirection(), r = this._getDragHorizontalDirection();
            return this.floating && r ? "right" === r && n || "left" === r && !n : i && ("down" === i && e || "up" === i && !e);
        },
        _getDragVerticalDirection: function() {
            var t = this.positionAbs.top - this.lastPositionAbs.top;
            return 0 !== t && (t > 0 ? "down" : "up");
        },
        _getDragHorizontalDirection: function() {
            var t = this.positionAbs.left - this.lastPositionAbs.left;
            return 0 !== t && (t > 0 ? "right" : "left");
        },
        refresh: function(t) {
            return this._refreshItems(t), this._setHandleClassName(), this.refreshPositions(), this;
        },
        _connectWith: function() {
            var t = this.options;
            return t.connectWith.constructor === String ? [ t.connectWith ] : t.connectWith;
        },
        _getItemsAsjQuery: function(e) {
            function n() {
                a.push(this);
            }
            var i, r, o, s, a = [], u = [], l = this._connectWith();
            if (l && e) for (i = l.length - 1; i >= 0; i--) for (o = t(l[i], this.document[0]), r = o.length - 1; r >= 0; r--) (s = t.data(o[r], this.widgetFullName)) && s !== this && !s.options.disabled && u.push([ t.isFunction(s.options.items) ? s.options.items.call(s.element) : t(s.options.items, s.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), s ]);
            for (u.push([ t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem
            }) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this ]), 
            i = u.length - 1; i >= 0; i--) u[i][0].each(n);
            return t(a);
        },
        _removeCurrentsFromItems: function() {
            var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = t.grep(this.items, function(t) {
                for (var n = 0; e.length > n; n++) if (e[n] === t.item[0]) return !1;
                return !0;
            });
        },
        _refreshItems: function(e) {
            this.items = [], this.containers = [ this ];
            var n, i, r, o, s, a, u, l, c = this.items, h = [ [ t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {
                item: this.currentItem
            }) : t(this.options.items, this.element), this ] ], f = this._connectWith();
            if (f && this.ready) for (n = f.length - 1; n >= 0; n--) for (r = t(f[n], this.document[0]), i = r.length - 1; i >= 0; i--) (o = t.data(r[i], this.widgetFullName)) && o !== this && !o.options.disabled && (h.push([ t.isFunction(o.options.items) ? o.options.items.call(o.element[0], e, {
                item: this.currentItem
            }) : t(o.options.items, o.element), o ]), this.containers.push(o));
            for (n = h.length - 1; n >= 0; n--) for (s = h[n][1], a = h[n][0], i = 0, l = a.length; l > i; i++) (u = t(a[i])).data(this.widgetName + "-item", s), 
            c.push({
                item: u,
                instance: s,
                width: 0,
                height: 0,
                left: 0,
                top: 0
            });
        },
        refreshPositions: function(e) {
            this.floating = !!this.items.length && ("x" === this.options.axis || this._isFloating(this.items[0].item)), 
            this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
            var n, i, r, o;
            for (n = this.items.length - 1; n >= 0; n--) (i = this.items[n]).instance !== this.currentContainer && this.currentContainer && i.item[0] !== this.currentItem[0] || (r = this.options.toleranceElement ? t(this.options.toleranceElement, i.item) : i.item, 
            e || (i.width = r.outerWidth(), i.height = r.outerHeight()), o = r.offset(), i.left = o.left, i.top = o.top);
            if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this); else for (n = this.containers.length - 1; n >= 0; n--) o = this.containers[n].element.offset(), 
            this.containers[n].containerCache.left = o.left, this.containers[n].containerCache.top = o.top, this.containers[n].containerCache.width = this.containers[n].element.outerWidth(), 
            this.containers[n].containerCache.height = this.containers[n].element.outerHeight();
            return this;
        },
        _createPlaceholder: function(e) {
            var n, i = (e = e || this).options;
            i.placeholder && i.placeholder.constructor !== String || (n = i.placeholder, i.placeholder = {
                element: function() {
                    var i = e.currentItem[0].nodeName.toLowerCase(), r = t("<" + i + ">", e.document[0]).addClass(n || e.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
                    return "tbody" === i ? e._createTrPlaceholder(e.currentItem.find("tr").eq(0), t("<tr>", e.document[0]).appendTo(r)) : "tr" === i ? e._createTrPlaceholder(e.currentItem, r) : "img" === i && r.attr("src", e.currentItem.attr("src")), 
                    n || r.css("visibility", "hidden"), r;
                },
                update: function(t, r) {
                    (!n || i.forcePlaceholderSize) && (r.height() || r.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)), 
                    r.width() || r.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)));
                }
            }), e.placeholder = t(i.placeholder.element.call(e.element, e.currentItem)), e.currentItem.after(e.placeholder), 
            i.placeholder.update(e, e.placeholder);
        },
        _createTrPlaceholder: function(e, n) {
            var i = this;
            e.children().each(function() {
                t("<td>&#160;</td>", i.document[0]).attr("colspan", t(this).attr("colspan") || 1).appendTo(n);
            });
        },
        _contactContainers: function(e) {
            var n, i, r, o, s, a, u, l, c, h, f = null, d = null;
            for (n = this.containers.length - 1; n >= 0; n--) if (!t.contains(this.currentItem[0], this.containers[n].element[0])) if (this._intersectsWith(this.containers[n].containerCache)) {
                if (f && t.contains(this.containers[n].element[0], f.element[0])) continue;
                f = this.containers[n], d = n;
            } else this.containers[n].containerCache.over && (this.containers[n]._trigger("out", e, this._uiHash(this)), 
            this.containers[n].containerCache.over = 0);
            if (f) if (1 === this.containers.length) this.containers[d].containerCache.over || (this.containers[d]._trigger("over", e, this._uiHash(this)), 
            this.containers[d].containerCache.over = 1); else {
                for (r = 1e4, o = null, s = (c = f.floating || this._isFloating(this.currentItem)) ? "left" : "top", 
                a = c ? "width" : "height", h = c ? "clientX" : "clientY", i = this.items.length - 1; i >= 0; i--) t.contains(this.containers[d].element[0], this.items[i].item[0]) && this.items[i].item[0] !== this.currentItem[0] && (u = this.items[i].item.offset()[s], 
                l = !1, e[h] - u > this.items[i][a] / 2 && (l = !0), r > Math.abs(e[h] - u) && (r = Math.abs(e[h] - u), 
                o = this.items[i], this.direction = l ? "up" : "down"));
                if (!o && !this.options.dropOnEmpty) return;
                if (this.currentContainer === this.containers[d]) return void (this.currentContainer.containerCache.over || (this.containers[d]._trigger("over", e, this._uiHash()), 
                this.currentContainer.containerCache.over = 1));
                o ? this._rearrange(e, o, null, !0) : this._rearrange(e, null, this.containers[d].element, !0), this._trigger("change", e, this._uiHash()), 
                this.containers[d]._trigger("change", e, this._uiHash(this)), this.currentContainer = this.containers[d], 
                this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[d]._trigger("over", e, this._uiHash(this)), 
                this.containers[d].containerCache.over = 1;
            }
        },
        _createHelper: function(e) {
            var n = this.options, i = t.isFunction(n.helper) ? t(n.helper.apply(this.element[0], [ e, this.currentItem ])) : "clone" === n.helper ? this.currentItem.clone() : this.currentItem;
            return i.parents("body").length || t("parent" !== n.appendTo ? n.appendTo : this.currentItem[0].parentNode)[0].appendChild(i[0]), 
            i[0] === this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }), (!i[0].style.width || n.forceHelperSize) && i.width(this.currentItem.width()), (!i[0].style.height || n.forceHelperSize) && i.height(this.currentItem.height()), 
            i;
        },
        _adjustOffsetFromHelper: function(e) {
            "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
                left: +e[0],
                top: +e[1] || 0
            }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), 
            "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top);
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var e = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), 
            e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
                top: 0,
                left: 0
            }), {
                top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            };
        },
        _getRelativeOffset: function() {
            if ("relative" === this.cssPosition) {
                var t = this.currentItem.position();
                return {
                    top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                };
            }
            return {
                top: 0,
                left: 0
            };
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            };
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            };
        },
        _setContainment: function() {
            var e, n, i, r = this.options;
            "parent" === r.containment && (r.containment = this.helper[0].parentNode), ("document" === r.containment || "window" === r.containment) && (this.containment = [ 0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === r.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === r.containment ? this.document.width() : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top ]), 
            /^(document|window|parent)$/.test(r.containment) || (e = t(r.containment)[0], n = t(r.containment).offset(), 
            i = "hidden" !== t(e).css("overflow"), this.containment = [ n.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left, n.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top, n.left + (i ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderLeftWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, n.top + (i ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderTopWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top ]);
        },
        _convertPositionTo: function(e, n) {
            n || (n = this.position);
            var i = "absolute" === e ? 1 : -1, r = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, o = /(html|body)/i.test(r[0].tagName);
            return {
                top: n.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : r.scrollTop()) * i,
                left: n.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : r.scrollLeft()) * i
            };
        },
        _generatePosition: function(e) {
            var n, i, r = this.options, o = e.pageX, s = e.pageY, a = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, u = /(html|body)/i.test(a[0].tagName);
            return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), 
            this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (o = this.containment[0] + this.offset.click.left), 
            e.pageY - this.offset.click.top < this.containment[1] && (s = this.containment[1] + this.offset.click.top), 
            e.pageX - this.offset.click.left > this.containment[2] && (o = this.containment[2] + this.offset.click.left), 
            e.pageY - this.offset.click.top > this.containment[3] && (s = this.containment[3] + this.offset.click.top)), 
            r.grid && (n = this.originalPageY + Math.round((s - this.originalPageY) / r.grid[1]) * r.grid[1], s = this.containment ? n - this.offset.click.top >= this.containment[1] && n - this.offset.click.top <= this.containment[3] ? n : n - this.offset.click.top >= this.containment[1] ? n - r.grid[1] : n + r.grid[1] : n, 
            i = this.originalPageX + Math.round((o - this.originalPageX) / r.grid[0]) * r.grid[0], o = this.containment ? i - this.offset.click.left >= this.containment[0] && i - this.offset.click.left <= this.containment[2] ? i : i - this.offset.click.left >= this.containment[0] ? i - r.grid[0] : i + r.grid[0] : i)), 
            {
                top: s - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : u ? 0 : a.scrollTop()),
                left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : u ? 0 : a.scrollLeft())
            };
        },
        _rearrange: function(t, e, n, i) {
            n ? n[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling), 
            this.counter = this.counter ? ++this.counter : 1;
            var r = this.counter;
            this._delay(function() {
                r === this.counter && this.refreshPositions(!i);
            });
        },
        _clear: function(t, e) {
            function n(t, e, n) {
                return function(i) {
                    n._trigger(t, i, e._uiHash(e));
                };
            }
            this.reverting = !1;
            var i, r = [];
            if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), 
            this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                for (i in this._storedCSS) ("auto" === this._storedCSS[i] || "static" === this._storedCSS[i]) && (this._storedCSS[i] = "");
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper");
            } else this.currentItem.show();
            for (this.fromOutside && !e && r.push(function(t) {
                this._trigger("receive", t, this._uiHash(this.fromOutside));
            }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || r.push(function(t) {
                this._trigger("update", t, this._uiHash());
            }), this !== this.currentContainer && (e || (r.push(function(t) {
                this._trigger("remove", t, this._uiHash());
            }), r.push(function(t) {
                return function(e) {
                    t._trigger("receive", e, this._uiHash(this));
                };
            }.call(this, this.currentContainer)), r.push(function(t) {
                return function(e) {
                    t._trigger("update", e, this._uiHash(this));
                };
            }.call(this, this.currentContainer)))), i = this.containers.length - 1; i >= 0; i--) e || r.push(n("deactivate", this, this.containers[i])), 
            this.containers[i].containerCache.over && (r.push(n("out", this, this.containers[i])), this.containers[i].containerCache.over = 0);
            if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), 
            this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), 
            this.dragging = !1, e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), 
            this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), 
            !e) {
                for (i = 0; r.length > i; i++) r[i].call(this, t);
                this._trigger("stop", t, this._uiHash());
            }
            return this.fromOutside = !1, !this.cancelHelperRemoval;
        },
        _trigger: function() {
            !1 === t.Widget.prototype._trigger.apply(this, arguments) && this.cancel();
        },
        _uiHash: function(e) {
            var n = e || this;
            return {
                helper: n.helper,
                placeholder: n.placeholder || t([]),
                position: n.position,
                originalPosition: n.originalPosition,
                offset: n.positionAbs,
                item: n.currentItem,
                sender: e ? e.element : null
            };
        }
    }), t.widget("ui.slider", t.ui.mouse, {
        version: "1.11.4",
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null,
            change: null,
            slide: null,
            start: null,
            stop: null
        },
        numPages: 5,
        _create: function() {
            this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), 
            this._mouseInit(), this._calculateNewMax(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all"), 
            this._refresh(), this._setOption("disabled", this.options.disabled), this._animateOff = !1;
        },
        _refresh: function() {
            this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue();
        },
        _createHandles: function() {
            var e, n, i = this.options, r = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"), o = [];
            for (n = i.values && i.values.length || 1, r.length > n && (r.slice(n).remove(), r = r.slice(0, n)), 
            e = r.length; n > e; e++) o.push("<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>");
            this.handles = r.add(t(o.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.each(function(e) {
                t(this).data("ui-slider-handle-index", e);
            });
        },
        _createRange: function() {
            var e = this.options, n = "";
            e.range ? (!0 === e.range && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [ e.values[0], e.values[0] ] : t.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [ this._valueMin(), this._valueMin() ]), 
            this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
                left: "",
                bottom: ""
            }) : (this.range = t("<div></div>").appendTo(this.element), n = "ui-slider-range ui-widget-header ui-corner-all"), 
            this.range.addClass(n + ("min" === e.range || "max" === e.range ? " ui-slider-range-" + e.range : ""))) : (this.range && this.range.remove(), 
            this.range = null);
        },
        _setupEvents: function() {
            this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), 
            this._focusable(this.handles);
        },
        _destroy: function() {
            this.handles.remove(), this.range && this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"), 
            this._mouseDestroy();
        },
        _mouseCapture: function(e) {
            var n, i, r, o, s, a, u, l = this, c = this.options;
            return !c.disabled && (this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            }, this.elementOffset = this.element.offset(), n = {
                x: e.pageX,
                y: e.pageY
            }, i = this._normValueFromMouse(n), r = this._valueMax() - this._valueMin() + 1, this.handles.each(function(e) {
                var n = Math.abs(i - l.values(e));
                (r > n || r === n && (e === l._lastChangedValue || l.values(e) === c.min)) && (r = n, o = t(this), s = e);
            }), !1 !== this._start(e, s) && (this._mouseSliding = !0, this._handleIndex = s, o.addClass("ui-state-active").focus(), 
            a = o.offset(), u = !t(e.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = u ? {
                left: 0,
                top: 0
            } : {
                left: e.pageX - a.left - o.width() / 2,
                top: e.pageY - a.top - o.height() / 2 - (parseInt(o.css("borderTopWidth"), 10) || 0) - (parseInt(o.css("borderBottomWidth"), 10) || 0) + (parseInt(o.css("marginTop"), 10) || 0)
            }, this.handles.hasClass("ui-state-hover") || this._slide(e, s, i), this._animateOff = !0, !0));
        },
        _mouseStart: function() {
            return !0;
        },
        _mouseDrag: function(t) {
            var e = {
                x: t.pageX,
                y: t.pageY
            }, n = this._normValueFromMouse(e);
            return this._slide(t, this._handleIndex, n), !1;
        },
        _mouseStop: function(t) {
            return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(t, this._handleIndex), 
            this._change(t, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, 
            !1;
        },
        _detectOrientation: function() {
            this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal";
        },
        _normValueFromMouse: function(t) {
            var e, n, i, r, o;
            return "horizontal" === this.orientation ? (e = this.elementSize.width, n = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, 
            n = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), (i = n / e) > 1 && (i = 1), 
            0 > i && (i = 0), "vertical" === this.orientation && (i = 1 - i), r = this._valueMax() - this._valueMin(), 
            o = this._valueMin() + i * r, this._trimAlignValue(o);
        },
        _start: function(t, e) {
            var n = {
                handle: this.handles[e],
                value: this.value()
            };
            return this.options.values && this.options.values.length && (n.value = this.values(e), n.values = this.values()), 
            this._trigger("start", t, n);
        },
        _slide: function(t, e, n) {
            var i, r, o;
            this.options.values && this.options.values.length ? (i = this.values(e ? 0 : 1), 2 === this.options.values.length && !0 === this.options.range && (0 === e && n > i || 1 === e && i > n) && (n = i), 
            n !== this.values(e) && (r = this.values(), r[e] = n, o = this._trigger("slide", t, {
                handle: this.handles[e],
                value: n,
                values: r
            }), i = this.values(e ? 0 : 1), !1 !== o && this.values(e, n))) : n !== this.value() && !1 !== (o = this._trigger("slide", t, {
                handle: this.handles[e],
                value: n
            })) && this.value(n);
        },
        _stop: function(t, e) {
            var n = {
                handle: this.handles[e],
                value: this.value()
            };
            this.options.values && this.options.values.length && (n.value = this.values(e), n.values = this.values()), 
            this._trigger("stop", t, n);
        },
        _change: function(t, e) {
            if (!this._keySliding && !this._mouseSliding) {
                var n = {
                    handle: this.handles[e],
                    value: this.value()
                };
                this.options.values && this.options.values.length && (n.value = this.values(e), n.values = this.values()), 
                this._lastChangedValue = e, this._trigger("change", t, n);
            }
        },
        value: function(t) {
            return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), void this._change(null, 0)) : this._value();
        },
        values: function(e, n) {
            var i, r, o;
            if (arguments.length > 1) return this.options.values[e] = this._trimAlignValue(n), this._refreshValue(), 
            void this._change(null, e);
            if (!arguments.length) return this._values();
            if (!t.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(e) : this.value();
            for (i = this.options.values, r = arguments[0], o = 0; i.length > o; o += 1) i[o] = this._trimAlignValue(r[o]), 
            this._change(null, o);
            this._refreshValue();
        },
        _setOption: function(e, n) {
            var i, r = 0;
            switch ("range" === e && !0 === this.options.range && ("min" === n ? (this.options.value = this._values(0), 
            this.options.values = null) : "max" === n && (this.options.value = this._values(this.options.values.length - 1), 
            this.options.values = null)), t.isArray(this.options.values) && (r = this.options.values.length), "disabled" === e && this.element.toggleClass("ui-state-disabled", !!n), 
            this._super(e, n), e) {
              case "orientation":
                this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), 
                this._refreshValue(), this.handles.css("horizontal" === n ? "bottom" : "left", "");
                break;

              case "value":
                this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                break;

              case "values":
                for (this._animateOff = !0, this._refreshValue(), i = 0; r > i; i += 1) this._change(null, i);
                this._animateOff = !1;
                break;

              case "step":
              case "min":
              case "max":
                this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
                break;

              case "range":
                this._animateOff = !0, this._refresh(), this._animateOff = !1;
            }
        },
        _value: function() {
            var t = this.options.value;
            return t = this._trimAlignValue(t);
        },
        _values: function(t) {
            var e, n, i;
            if (arguments.length) return e = this.options.values[t], e = this._trimAlignValue(e);
            if (this.options.values && this.options.values.length) {
                for (n = this.options.values.slice(), i = 0; n.length > i; i += 1) n[i] = this._trimAlignValue(n[i]);
                return n;
            }
            return [];
        },
        _trimAlignValue: function(t) {
            if (this._valueMin() >= t) return this._valueMin();
            if (t >= this._valueMax()) return this._valueMax();
            var e = this.options.step > 0 ? this.options.step : 1, n = (t - this._valueMin()) % e, i = t - n;
            return 2 * Math.abs(n) >= e && (i += n > 0 ? e : -e), parseFloat(i.toFixed(5));
        },
        _calculateNewMax: function() {
            var t = this.options.max, e = this._valueMin(), n = this.options.step;
            t = Math.floor(+(t - e).toFixed(this._precision()) / n) * n + e, this.max = parseFloat(t.toFixed(this._precision()));
        },
        _precision: function() {
            var t = this._precisionOf(this.options.step);
            return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t;
        },
        _precisionOf: function(t) {
            var e = "" + t, n = e.indexOf(".");
            return -1 === n ? 0 : e.length - n - 1;
        },
        _valueMin: function() {
            return this.options.min;
        },
        _valueMax: function() {
            return this.max;
        },
        _refreshValue: function() {
            var e, n, i, r, o, s = this.options.range, a = this.options, u = this, l = !this._animateOff && a.animate, c = {};
            this.options.values && this.options.values.length ? this.handles.each(function(i) {
                n = (u.values(i) - u._valueMin()) / (u._valueMax() - u._valueMin()) * 100, c["horizontal" === u.orientation ? "left" : "bottom"] = n + "%", 
                t(this).stop(1, 1)[l ? "animate" : "css"](c, a.animate), !0 === u.options.range && ("horizontal" === u.orientation ? (0 === i && u.range.stop(1, 1)[l ? "animate" : "css"]({
                    left: n + "%"
                }, a.animate), 1 === i && u.range[l ? "animate" : "css"]({
                    width: n - e + "%"
                }, {
                    queue: !1,
                    duration: a.animate
                })) : (0 === i && u.range.stop(1, 1)[l ? "animate" : "css"]({
                    bottom: n + "%"
                }, a.animate), 1 === i && u.range[l ? "animate" : "css"]({
                    height: n - e + "%"
                }, {
                    queue: !1,
                    duration: a.animate
                }))), e = n;
            }) : (i = this.value(), r = this._valueMin(), o = this._valueMax(), n = o !== r ? (i - r) / (o - r) * 100 : 0, 
            c["horizontal" === this.orientation ? "left" : "bottom"] = n + "%", this.handle.stop(1, 1)[l ? "animate" : "css"](c, a.animate), 
            "min" === s && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
                width: n + "%"
            }, a.animate), "max" === s && "horizontal" === this.orientation && this.range[l ? "animate" : "css"]({
                width: 100 - n + "%"
            }, {
                queue: !1,
                duration: a.animate
            }), "min" === s && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
                height: n + "%"
            }, a.animate), "max" === s && "vertical" === this.orientation && this.range[l ? "animate" : "css"]({
                height: 100 - n + "%"
            }, {
                queue: !1,
                duration: a.animate
            }));
        },
        _handleEvents: {
            keydown: function(e) {
                var n, i, r, o = t(e.target).data("ui-slider-handle-index");
                switch (e.keyCode) {
                  case t.ui.keyCode.HOME:
                  case t.ui.keyCode.END:
                  case t.ui.keyCode.PAGE_UP:
                  case t.ui.keyCode.PAGE_DOWN:
                  case t.ui.keyCode.UP:
                  case t.ui.keyCode.RIGHT:
                  case t.ui.keyCode.DOWN:
                  case t.ui.keyCode.LEFT:
                    if (e.preventDefault(), !this._keySliding && (this._keySliding = !0, t(e.target).addClass("ui-state-active"), 
                    !1 === this._start(e, o))) return;
                }
                switch (r = this.options.step, n = i = this.options.values && this.options.values.length ? this.values(o) : this.value(), 
                e.keyCode) {
                  case t.ui.keyCode.HOME:
                    i = this._valueMin();
                    break;

                  case t.ui.keyCode.END:
                    i = this._valueMax();
                    break;

                  case t.ui.keyCode.PAGE_UP:
                    i = this._trimAlignValue(n + (this._valueMax() - this._valueMin()) / this.numPages);
                    break;

                  case t.ui.keyCode.PAGE_DOWN:
                    i = this._trimAlignValue(n - (this._valueMax() - this._valueMin()) / this.numPages);
                    break;

                  case t.ui.keyCode.UP:
                  case t.ui.keyCode.RIGHT:
                    if (n === this._valueMax()) return;
                    i = this._trimAlignValue(n + r);
                    break;

                  case t.ui.keyCode.DOWN:
                  case t.ui.keyCode.LEFT:
                    if (n === this._valueMin()) return;
                    i = this._trimAlignValue(n - r);
                }
                this._slide(e, o, i);
            },
            keyup: function(e) {
                var n = t(e.target).data("ui-slider-handle-index");
                this._keySliding && (this._keySliding = !1, this._stop(e, n), this._change(e, n), t(e.target).removeClass("ui-state-active"));
            }
        }
    });
    var s = t;
    t.effects = {
        effect: {}
    }, function(t, e) {
        function n(t, e, n) {
            var i = c[e.type] || {};
            return null == t ? n || !e.def ? null : e.def : (t = i.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : i.mod ? (t + i.mod) % i.mod : 0 > t ? 0 : t > i.max ? i.max : t);
        }
        function i(n) {
            var i = u(), r = i._rgba = [];
            return n = n.toLowerCase(), d(a, function(t, o) {
                var s, a = o.re.exec(n), u = a && o.parse(a), c = o.space || "rgba";
                return u ? (s = i[c](u), i[l[c].cache] = s[l[c].cache], r = i._rgba = s._rgba, !1) : e;
            }), r.length ? ("0,0,0,0" === r.join() && t.extend(r, o.transparent), i) : o[n];
        }
        function r(t, e, n) {
            return 1 > 6 * (n = (n + 1) % 1) ? t + 6 * (e - t) * n : 1 > 2 * n ? e : 2 > 3 * n ? t + 6 * (e - t) * (2 / 3 - n) : t;
        }
        var o, s = /^([\-+])=\s*(\d+\.?\d*)/, a = [ {
            re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function(t) {
                return [ t[1], t[2], t[3], t[4] ];
            }
        }, {
            re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function(t) {
                return [ 2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4] ];
            }
        }, {
            re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
            parse: function(t) {
                return [ parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16) ];
            }
        }, {
            re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
            parse: function(t) {
                return [ parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16) ];
            }
        }, {
            re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            space: "hsla",
            parse: function(t) {
                return [ t[1], t[2] / 100, t[3] / 100, t[4] ];
            }
        } ], u = t.Color = function(e, n, i, r) {
            return new t.Color.fn.parse(e, n, i, r);
        }, l = {
            rgba: {
                props: {
                    red: {
                        idx: 0,
                        type: "byte"
                    },
                    green: {
                        idx: 1,
                        type: "byte"
                    },
                    blue: {
                        idx: 2,
                        type: "byte"
                    }
                }
            },
            hsla: {
                props: {
                    hue: {
                        idx: 0,
                        type: "degrees"
                    },
                    saturation: {
                        idx: 1,
                        type: "percent"
                    },
                    lightness: {
                        idx: 2,
                        type: "percent"
                    }
                }
            }
        }, c = {
            byte: {
                floor: !0,
                max: 255
            },
            percent: {
                max: 1
            },
            degrees: {
                mod: 360,
                floor: !0
            }
        }, h = u.support = {}, f = t("<p>")[0], d = t.each;
        f.style.cssText = "background-color:rgba(1,1,1,.5)", h.rgba = f.style.backgroundColor.indexOf("rgba") > -1, 
        d(l, function(t, e) {
            e.cache = "_" + t, e.props.alpha = {
                idx: 3,
                type: "percent",
                def: 1
            };
        }), u.fn = t.extend(u.prototype, {
            parse: function(r, s, a, c) {
                if (r === e) return this._rgba = [ null, null, null, null ], this;
                (r.jquery || r.nodeType) && (r = t(r).css(s), s = e);
                var h = this, f = t.type(r), p = this._rgba = [];
                return s !== e && (r = [ r, s, a, c ], f = "array"), "string" === f ? this.parse(i(r) || o._default) : "array" === f ? (d(l.rgba.props, function(t, e) {
                    p[e.idx] = n(r[e.idx], e);
                }), this) : "object" === f ? (r instanceof u ? d(l, function(t, e) {
                    r[e.cache] && (h[e.cache] = r[e.cache].slice());
                }) : d(l, function(e, i) {
                    var o = i.cache;
                    d(i.props, function(t, e) {
                        if (!h[o] && i.to) {
                            if ("alpha" === t || null == r[t]) return;
                            h[o] = i.to(h._rgba);
                        }
                        h[o][e.idx] = n(r[t], e, !0);
                    }), h[o] && 0 > t.inArray(null, h[o].slice(0, 3)) && (h[o][3] = 1, i.from && (h._rgba = i.from(h[o])));
                }), this) : e;
            },
            is: function(t) {
                var n = u(t), i = !0, r = this;
                return d(l, function(t, o) {
                    var s, a = n[o.cache];
                    return a && (s = r[o.cache] || o.to && o.to(r._rgba) || [], d(o.props, function(t, n) {
                        return null != a[n.idx] ? i = a[n.idx] === s[n.idx] : e;
                    })), i;
                }), i;
            },
            _space: function() {
                var t = [], e = this;
                return d(l, function(n, i) {
                    e[i.cache] && t.push(n);
                }), t.pop();
            },
            transition: function(t, e) {
                var i = u(t), r = i._space(), o = l[r], s = 0 === this.alpha() ? u("transparent") : this, a = s[o.cache] || o.to(s._rgba), h = a.slice();
                return i = i[o.cache], d(o.props, function(t, r) {
                    var o = r.idx, s = a[o], u = i[o], l = c[r.type] || {};
                    null !== u && (null === s ? h[o] = u : (l.mod && (u - s > l.mod / 2 ? s += l.mod : s - u > l.mod / 2 && (s -= l.mod)), 
                    h[o] = n((u - s) * e + s, r)));
                }), this[r](h);
            },
            blend: function(e) {
                if (1 === this._rgba[3]) return this;
                var n = this._rgba.slice(), i = n.pop(), r = u(e)._rgba;
                return u(t.map(n, function(t, e) {
                    return (1 - i) * r[e] + i * t;
                }));
            },
            toRgbaString: function() {
                var e = "rgba(", n = t.map(this._rgba, function(t, e) {
                    return null == t ? e > 2 ? 1 : 0 : t;
                });
                return 1 === n[3] && (n.pop(), e = "rgb("), e + n.join() + ")";
            },
            toHslaString: function() {
                var e = "hsla(", n = t.map(this.hsla(), function(t, e) {
                    return null == t && (t = e > 2 ? 1 : 0), e && 3 > e && (t = Math.round(100 * t) + "%"), t;
                });
                return 1 === n[3] && (n.pop(), e = "hsl("), e + n.join() + ")";
            },
            toHexString: function(e) {
                var n = this._rgba.slice(), i = n.pop();
                return e && n.push(~~(255 * i)), "#" + t.map(n, function(t) {
                    return 1 === (t = (t || 0).toString(16)).length ? "0" + t : t;
                }).join("");
            },
            toString: function() {
                return 0 === this._rgba[3] ? "transparent" : this.toRgbaString();
            }
        }), u.fn.parse.prototype = u.fn, l.hsla.to = function(t) {
            if (null == t[0] || null == t[1] || null == t[2]) return [ null, null, null, t[3] ];
            var e, n, i = t[0] / 255, r = t[1] / 255, o = t[2] / 255, s = t[3], a = Math.max(i, r, o), u = Math.min(i, r, o), l = a - u, c = a + u, h = .5 * c;
            return e = u === a ? 0 : i === a ? 60 * (r - o) / l + 360 : r === a ? 60 * (o - i) / l + 120 : 60 * (i - r) / l + 240, 
            n = 0 === l ? 0 : .5 >= h ? l / c : l / (2 - c), [ Math.round(e) % 360, n, h, null == s ? 1 : s ];
        }, l.hsla.from = function(t) {
            if (null == t[0] || null == t[1] || null == t[2]) return [ null, null, null, t[3] ];
            var e = t[0] / 360, n = t[1], i = t[2], o = t[3], s = .5 >= i ? i * (1 + n) : i + n - i * n, a = 2 * i - s;
            return [ Math.round(255 * r(a, s, e + 1 / 3)), Math.round(255 * r(a, s, e)), Math.round(255 * r(a, s, e - 1 / 3)), o ];
        }, d(l, function(i, r) {
            var o = r.props, a = r.cache, l = r.to, c = r.from;
            u.fn[i] = function(i) {
                if (l && !this[a] && (this[a] = l(this._rgba)), i === e) return this[a].slice();
                var r, s = t.type(i), h = "array" === s || "object" === s ? i : arguments, f = this[a].slice();
                return d(o, function(t, e) {
                    var i = h["object" === s ? t : e.idx];
                    null == i && (i = f[e.idx]), f[e.idx] = n(i, e);
                }), c ? (r = u(c(f)), r[a] = f, r) : u(f);
            }, d(o, function(e, n) {
                u.fn[e] || (u.fn[e] = function(r) {
                    var o, a = t.type(r), u = "alpha" === e ? this._hsla ? "hsla" : "rgba" : i, l = this[u](), c = l[n.idx];
                    return "undefined" === a ? c : ("function" === a && (r = r.call(this, c), a = t.type(r)), null == r && n.empty ? this : ("string" === a && (o = s.exec(r)) && (r = c + parseFloat(o[2]) * ("+" === o[1] ? 1 : -1)), 
                    l[n.idx] = r, this[u](l)));
                });
            });
        }), u.hook = function(e) {
            var n = e.split(" ");
            d(n, function(e, n) {
                t.cssHooks[n] = {
                    set: function(e, r) {
                        var o, s, a = "";
                        if ("transparent" !== r && ("string" !== t.type(r) || (o = i(r)))) {
                            if (r = u(o || r), !h.rgba && 1 !== r._rgba[3]) {
                                for (s = "backgroundColor" === n ? e.parentNode : e; ("" === a || "transparent" === a) && s && s.style; ) try {
                                    a = t.css(s, "backgroundColor"), s = s.parentNode;
                                } catch (t) {}
                                r = r.blend(a && "transparent" !== a ? a : "_default");
                            }
                            r = r.toRgbaString();
                        }
                        try {
                            e.style[n] = r;
                        } catch (t) {}
                    }
                }, t.fx.step[n] = function(e) {
                    e.colorInit || (e.start = u(e.elem, n), e.end = u(e.end), e.colorInit = !0), t.cssHooks[n].set(e.elem, e.start.transition(e.end, e.pos));
                };
            });
        }, u.hook("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor"), 
        t.cssHooks.borderColor = {
            expand: function(t) {
                var e = {};
                return d([ "Top", "Right", "Bottom", "Left" ], function(n, i) {
                    e["border" + i + "Color"] = t;
                }), e;
            }
        }, o = t.Color.names = {
            aqua: "#00ffff",
            black: "#000000",
            blue: "#0000ff",
            fuchsia: "#ff00ff",
            gray: "#808080",
            green: "#008000",
            lime: "#00ff00",
            maroon: "#800000",
            navy: "#000080",
            olive: "#808000",
            purple: "#800080",
            red: "#ff0000",
            silver: "#c0c0c0",
            teal: "#008080",
            white: "#ffffff",
            yellow: "#ffff00",
            transparent: [ null, null, null, 0 ],
            _default: "#ffffff"
        };
    }(s), function() {
        function e(e) {
            var n, i, r = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle, o = {};
            if (r && r.length && r[0] && r[r[0]]) for (i = r.length; i--; ) n = r[i], "string" == typeof r[n] && (o[t.camelCase(n)] = r[n]); else for (n in r) "string" == typeof r[n] && (o[n] = r[n]);
            return o;
        }
        var n = [ "add", "remove", "toggle" ], i = {
            border: 1,
            borderBottom: 1,
            borderColor: 1,
            borderLeft: 1,
            borderRight: 1,
            borderTop: 1,
            borderWidth: 1,
            margin: 1,
            padding: 1
        };
        t.each([ "borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle" ], function(e, n) {
            t.fx.step[n] = function(t) {
                ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (s.style(t.elem, n, t.end), t.setAttr = !0);
            };
        }), t.fn.addBack || (t.fn.addBack = function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
        }), t.effects.animateClass = function(r, o, s, a) {
            var u = t.speed(o, s, a);
            return this.queue(function() {
                var o, s = t(this), a = s.attr("class") || "", l = u.children ? s.find("*").addBack() : s;
                l = l.map(function() {
                    return {
                        el: t(this),
                        start: e(this)
                    };
                }), (o = function() {
                    t.each(n, function(t, e) {
                        r[e] && s[e + "Class"](r[e]);
                    });
                })(), l = l.map(function() {
                    return this.end = e(this.el[0]), this.diff = function(e, n) {
                        var r, o, s = {};
                        for (r in n) o = n[r], e[r] !== o && (i[r] || (t.fx.step[r] || !isNaN(parseFloat(o))) && (s[r] = o));
                        return s;
                    }(this.start, this.end), this;
                }), s.attr("class", a), l = l.map(function() {
                    var e = this, n = t.Deferred(), i = t.extend({}, u, {
                        queue: !1,
                        complete: function() {
                            n.resolve(e);
                        }
                    });
                    return this.el.animate(this.diff, i), n.promise();
                }), t.when.apply(t, l.get()).done(function() {
                    o(), t.each(arguments, function() {
                        var e = this.el;
                        t.each(this.diff, function(t) {
                            e.css(t, "");
                        });
                    }), u.complete.call(s[0]);
                });
            });
        }, t.fn.extend({
            addClass: function(e) {
                return function(n, i, r, o) {
                    return i ? t.effects.animateClass.call(this, {
                        add: n
                    }, i, r, o) : e.apply(this, arguments);
                };
            }(t.fn.addClass),
            removeClass: function(e) {
                return function(n, i, r, o) {
                    return arguments.length > 1 ? t.effects.animateClass.call(this, {
                        remove: n
                    }, i, r, o) : e.apply(this, arguments);
                };
            }(t.fn.removeClass),
            toggleClass: function(e) {
                return function(n, i, r, o, s) {
                    return "boolean" == typeof i || void 0 === i ? r ? t.effects.animateClass.call(this, i ? {
                        add: n
                    } : {
                        remove: n
                    }, r, o, s) : e.apply(this, arguments) : t.effects.animateClass.call(this, {
                        toggle: n
                    }, i, r, o);
                };
            }(t.fn.toggleClass),
            switchClass: function(e, n, i, r, o) {
                return t.effects.animateClass.call(this, {
                    add: n,
                    remove: e
                }, i, r, o);
            }
        });
    }(), function() {
        function e(e, n, i, r) {
            return t.isPlainObject(e) && (n = e, e = e.effect), e = {
                effect: e
            }, null == n && (n = {}), t.isFunction(n) && (r = n, i = null, n = {}), ("number" == typeof n || t.fx.speeds[n]) && (r = i, 
            i = n, n = {}), t.isFunction(i) && (r = i, i = null), n && t.extend(e, n), i = i || n.duration, e.duration = t.fx.off ? 0 : "number" == typeof i ? i : i in t.fx.speeds ? t.fx.speeds[i] : t.fx.speeds._default, 
            e.complete = r || n.complete, e;
        }
        function n(e) {
            return !(e && "number" != typeof e && !t.fx.speeds[e]) || ("string" == typeof e && !t.effects.effect[e] || (!!t.isFunction(e) || "object" == typeof e && !e.effect));
        }
        t.extend(t.effects, {
            version: "1.11.4",
            save: function(t, e) {
                for (var n = 0; e.length > n; n++) null !== e[n] && t.data("ui-effects-" + e[n], t[0].style[e[n]]);
            },
            restore: function(t, e) {
                var n, i;
                for (i = 0; e.length > i; i++) null !== e[i] && (void 0 === (n = t.data("ui-effects-" + e[i])) && (n = ""), 
                t.css(e[i], n));
            },
            setMode: function(t, e) {
                return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e;
            },
            getBaseline: function(t, e) {
                var n, i;
                switch (t[0]) {
                  case "top":
                    n = 0;
                    break;

                  case "middle":
                    n = .5;
                    break;

                  case "bottom":
                    n = 1;
                    break;

                  default:
                    n = t[0] / e.height;
                }
                switch (t[1]) {
                  case "left":
                    i = 0;
                    break;

                  case "center":
                    i = .5;
                    break;

                  case "right":
                    i = 1;
                    break;

                  default:
                    i = t[1] / e.width;
                }
                return {
                    x: i,
                    y: n
                };
            },
            createWrapper: function(e) {
                if (e.parent().is(".ui-effects-wrapper")) return e.parent();
                var n = {
                    width: e.outerWidth(!0),
                    height: e.outerHeight(!0),
                    float: e.css("float")
                }, i = t("<div></div>").addClass("ui-effects-wrapper").css({
                    fontSize: "100%",
                    background: "transparent",
                    border: "none",
                    margin: 0,
                    padding: 0
                }), r = {
                    width: e.width(),
                    height: e.height()
                }, o = document.activeElement;
                try {
                    o.id;
                } catch (t) {
                    o = document.body;
                }
                return e.wrap(i), (e[0] === o || t.contains(e[0], o)) && t(o).focus(), i = e.parent(), "static" === e.css("position") ? (i.css({
                    position: "relative"
                }), e.css({
                    position: "relative"
                })) : (t.extend(n, {
                    position: e.css("position"),
                    zIndex: e.css("z-index")
                }), t.each([ "top", "left", "bottom", "right" ], function(t, i) {
                    n[i] = e.css(i), isNaN(parseInt(n[i], 10)) && (n[i] = "auto");
                }), e.css({
                    position: "relative",
                    top: 0,
                    left: 0,
                    right: "auto",
                    bottom: "auto"
                })), e.css(r), i.css(n).show();
            },
            removeWrapper: function(e) {
                var n = document.activeElement;
                return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === n || t.contains(e[0], n)) && t(n).focus()), 
                e;
            },
            setTransition: function(e, n, i, r) {
                return r = r || {}, t.each(n, function(t, n) {
                    var o = e.cssUnit(n);
                    o[0] > 0 && (r[n] = o[0] * i + o[1]);
                }), r;
            }
        }), t.fn.extend({
            effect: function() {
                function n(e) {
                    function n() {
                        t.isFunction(o) && o.call(r[0]), t.isFunction(e) && e();
                    }
                    var r = t(this), o = i.complete, a = i.mode;
                    (r.is(":hidden") ? "hide" === a : "show" === a) ? (r[a](), n()) : s.call(r[0], i, n);
                }
                var i = e.apply(this, arguments), r = i.mode, o = i.queue, s = t.effects.effect[i.effect];
                return t.fx.off || !s ? r ? this[r](i.duration, i.complete) : this.each(function() {
                    i.complete && i.complete.call(this);
                }) : !1 === o ? this.each(n) : this.queue(o || "fx", n);
            },
            show: function(t) {
                return function(i) {
                    if (n(i)) return t.apply(this, arguments);
                    var r = e.apply(this, arguments);
                    return r.mode = "show", this.effect.call(this, r);
                };
            }(t.fn.show),
            hide: function(t) {
                return function(i) {
                    if (n(i)) return t.apply(this, arguments);
                    var r = e.apply(this, arguments);
                    return r.mode = "hide", this.effect.call(this, r);
                };
            }(t.fn.hide),
            toggle: function(t) {
                return function(i) {
                    if (n(i) || "boolean" == typeof i) return t.apply(this, arguments);
                    var r = e.apply(this, arguments);
                    return r.mode = "toggle", this.effect.call(this, r);
                };
            }(t.fn.toggle),
            cssUnit: function(e) {
                var n = this.css(e), i = [];
                return t.each([ "em", "px", "%", "pt" ], function(t, e) {
                    n.indexOf(e) > 0 && (i = [ parseFloat(n), e ]);
                }), i;
            }
        });
    }(), function() {
        var e = {};
        t.each([ "Quad", "Cubic", "Quart", "Quint", "Expo" ], function(t, n) {
            e[n] = function(e) {
                return Math.pow(e, t + 2);
            };
        }), t.extend(e, {
            Sine: function(t) {
                return 1 - Math.cos(t * Math.PI / 2);
            },
            Circ: function(t) {
                return 1 - Math.sqrt(1 - t * t);
            },
            Elastic: function(t) {
                return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15);
            },
            Back: function(t) {
                return t * t * (3 * t - 2);
            },
            Bounce: function(t) {
                for (var e, n = 4; ((e = Math.pow(2, --n)) - 1) / 11 > t; ) ;
                return 1 / Math.pow(4, 3 - n) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2);
            }
        }), t.each(e, function(e, n) {
            t.easing["easeIn" + e] = n, t.easing["easeOut" + e] = function(t) {
                return 1 - n(1 - t);
            }, t.easing["easeInOut" + e] = function(t) {
                return .5 > t ? n(2 * t) / 2 : 1 - n(-2 * t + 2) / 2;
            };
        });
    }(), t.effects, t.effects.effect.blind = function(e, n) {
        var i, r, o, s = t(this), a = [ "position", "top", "bottom", "left", "right", "height", "width" ], u = t.effects.setMode(s, e.mode || "hide"), l = e.direction || "up", c = /up|down|vertical/.test(l), h = c ? "height" : "width", f = c ? "top" : "left", d = /up|left|vertical|horizontal/.test(l), p = {}, m = "show" === u;
        s.parent().is(".ui-effects-wrapper") ? t.effects.save(s.parent(), a) : t.effects.save(s, a), s.show(), 
        r = (i = t.effects.createWrapper(s).css({
            overflow: "hidden"
        }))[h](), o = parseFloat(i.css(f)) || 0, p[h] = m ? r : 0, d || (s.css(c ? "bottom" : "right", 0).css(c ? "top" : "left", "auto").css({
            position: "absolute"
        }), p[f] = m ? o : r + o), m && (i.css(h, 0), d || i.css(f, o + r)), i.animate(p, {
            duration: e.duration,
            easing: e.easing,
            queue: !1,
            complete: function() {
                "hide" === u && s.hide(), t.effects.restore(s, a), t.effects.removeWrapper(s), n();
            }
        });
    }, t.effects.effect.bounce = function(e, n) {
        var i, r, o, s = t(this), a = [ "position", "top", "bottom", "left", "right", "height", "width" ], u = t.effects.setMode(s, e.mode || "effect"), l = "hide" === u, c = "show" === u, h = e.direction || "up", f = e.distance, d = e.times || 5, p = 2 * d + (c || l ? 1 : 0), m = e.duration / p, g = e.easing, v = "up" === h || "down" === h ? "top" : "left", y = "up" === h || "left" === h, b = s.queue(), w = b.length;
        for ((c || l) && a.push("opacity"), t.effects.save(s, a), s.show(), t.effects.createWrapper(s), f || (f = s["top" === v ? "outerHeight" : "outerWidth"]() / 3), 
        c && (o = {
            opacity: 1
        }, o[v] = 0, s.css("opacity", 0).css(v, y ? 2 * -f : 2 * f).animate(o, m, g)), l && (f /= Math.pow(2, d - 1)), 
        (o = {})[v] = 0, i = 0; d > i; i++) r = {}, r[v] = (y ? "-=" : "+=") + f, s.animate(r, m, g).animate(o, m, g), 
        f = l ? 2 * f : f / 2;
        l && (r = {
            opacity: 0
        }, r[v] = (y ? "-=" : "+=") + f, s.animate(r, m, g)), s.queue(function() {
            l && s.hide(), t.effects.restore(s, a), t.effects.removeWrapper(s), n();
        }), w > 1 && b.splice.apply(b, [ 1, 0 ].concat(b.splice(w, p + 1))), s.dequeue();
    }, t.effects.effect.clip = function(e, n) {
        var i, r, o, s = t(this), a = [ "position", "top", "bottom", "left", "right", "height", "width" ], u = "show" === t.effects.setMode(s, e.mode || "hide"), l = "vertical" === (e.direction || "vertical"), c = l ? "height" : "width", h = l ? "top" : "left", f = {};
        t.effects.save(s, a), s.show(), i = t.effects.createWrapper(s).css({
            overflow: "hidden"
        }), o = (r = "IMG" === s[0].tagName ? i : s)[c](), u && (r.css(c, 0), r.css(h, o / 2)), f[c] = u ? o : 0, 
        f[h] = u ? 0 : o / 2, r.animate(f, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function() {
                u || s.hide(), t.effects.restore(s, a), t.effects.removeWrapper(s), n();
            }
        });
    }, t.effects.effect.drop = function(e, n) {
        var i, r = t(this), o = [ "position", "top", "bottom", "left", "right", "opacity", "height", "width" ], s = t.effects.setMode(r, e.mode || "hide"), a = "show" === s, u = e.direction || "left", l = "up" === u || "down" === u ? "top" : "left", c = "up" === u || "left" === u ? "pos" : "neg", h = {
            opacity: a ? 1 : 0
        };
        t.effects.save(r, o), r.show(), t.effects.createWrapper(r), i = e.distance || r["top" === l ? "outerHeight" : "outerWidth"](!0) / 2, 
        a && r.css("opacity", 0).css(l, "pos" === c ? -i : i), h[l] = (a ? "pos" === c ? "+=" : "-=" : "pos" === c ? "-=" : "+=") + i, 
        r.animate(h, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function() {
                "hide" === s && r.hide(), t.effects.restore(r, o), t.effects.removeWrapper(r), n();
            }
        });
    }, t.effects.effect.explode = function(e, n) {
        function i() {
            v.push(this), v.length === c * h && (f.css({
                visibility: "visible"
            }), t(v).remove(), d || f.hide(), n());
        }
        var r, o, s, a, u, l, c = e.pieces ? Math.round(Math.sqrt(e.pieces)) : 3, h = c, f = t(this), d = "show" === t.effects.setMode(f, e.mode || "hide"), p = f.show().css("visibility", "hidden").offset(), m = Math.ceil(f.outerWidth() / h), g = Math.ceil(f.outerHeight() / c), v = [];
        for (r = 0; c > r; r++) for (a = p.top + r * g, l = r - (c - 1) / 2, o = 0; h > o; o++) s = p.left + o * m, 
        u = o - (h - 1) / 2, f.clone().appendTo("body").wrap("<div></div>").css({
            position: "absolute",
            visibility: "visible",
            left: -o * m,
            top: -r * g
        }).parent().addClass("ui-effects-explode").css({
            position: "absolute",
            overflow: "hidden",
            width: m,
            height: g,
            left: s + (d ? u * m : 0),
            top: a + (d ? l * g : 0),
            opacity: d ? 0 : 1
        }).animate({
            left: s + (d ? 0 : u * m),
            top: a + (d ? 0 : l * g),
            opacity: d ? 1 : 0
        }, e.duration || 500, e.easing, i);
    }, t.effects.effect.fade = function(e, n) {
        var i = t(this), r = t.effects.setMode(i, e.mode || "toggle");
        i.animate({
            opacity: r
        }, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: n
        });
    }, t.effects.effect.fold = function(e, n) {
        var i, r, o = t(this), s = [ "position", "top", "bottom", "left", "right", "height", "width" ], a = t.effects.setMode(o, e.mode || "hide"), u = "show" === a, l = "hide" === a, c = e.size || 15, h = /([0-9]+)%/.exec(c), f = !!e.horizFirst, d = u !== f, p = d ? [ "width", "height" ] : [ "height", "width" ], m = e.duration / 2, g = {}, v = {};
        t.effects.save(o, s), o.show(), i = t.effects.createWrapper(o).css({
            overflow: "hidden"
        }), r = d ? [ i.width(), i.height() ] : [ i.height(), i.width() ], h && (c = parseInt(h[1], 10) / 100 * r[l ? 0 : 1]), 
        u && i.css(f ? {
            height: 0,
            width: c
        } : {
            height: c,
            width: 0
        }), g[p[0]] = u ? r[0] : c, v[p[1]] = u ? r[1] : 0, i.animate(g, m, e.easing).animate(v, m, e.easing, function() {
            l && o.hide(), t.effects.restore(o, s), t.effects.removeWrapper(o), n();
        });
    }, t.effects.effect.highlight = function(e, n) {
        var i = t(this), r = [ "backgroundImage", "backgroundColor", "opacity" ], o = t.effects.setMode(i, e.mode || "show"), s = {
            backgroundColor: i.css("backgroundColor")
        };
        "hide" === o && (s.opacity = 0), t.effects.save(i, r), i.show().css({
            backgroundImage: "none",
            backgroundColor: e.color || "#ffff99"
        }).animate(s, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function() {
                "hide" === o && i.hide(), t.effects.restore(i, r), n();
            }
        });
    }, t.effects.effect.size = function(e, n) {
        var i, r, o, s = t(this), a = [ "position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity" ], u = [ "width", "height", "overflow" ], l = [ "fontSize" ], c = [ "borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom" ], h = [ "borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight" ], f = t.effects.setMode(s, e.mode || "effect"), d = e.restore || "effect" !== f, p = e.scale || "both", m = e.origin || [ "middle", "center" ], g = s.css("position"), v = d ? a : [ "position", "top", "bottom", "left", "right", "overflow", "opacity" ], y = {
            height: 0,
            width: 0,
            outerHeight: 0,
            outerWidth: 0
        };
        "show" === f && s.show(), i = {
            height: s.height(),
            width: s.width(),
            outerHeight: s.outerHeight(),
            outerWidth: s.outerWidth()
        }, "toggle" === e.mode && "show" === f ? (s.from = e.to || y, s.to = e.from || i) : (s.from = e.from || ("show" === f ? y : i), 
        s.to = e.to || ("hide" === f ? y : i)), o = {
            from: {
                y: s.from.height / i.height,
                x: s.from.width / i.width
            },
            to: {
                y: s.to.height / i.height,
                x: s.to.width / i.width
            }
        }, ("box" === p || "both" === p) && (o.from.y !== o.to.y && (v = v.concat(c), s.from = t.effects.setTransition(s, c, o.from.y, s.from), 
        s.to = t.effects.setTransition(s, c, o.to.y, s.to)), o.from.x !== o.to.x && (v = v.concat(h), s.from = t.effects.setTransition(s, h, o.from.x, s.from), 
        s.to = t.effects.setTransition(s, h, o.to.x, s.to))), ("content" === p || "both" === p) && o.from.y !== o.to.y && (v = v.concat(l).concat(u), 
        s.from = t.effects.setTransition(s, l, o.from.y, s.from), s.to = t.effects.setTransition(s, l, o.to.y, s.to)), 
        t.effects.save(s, v), s.show(), t.effects.createWrapper(s), s.css("overflow", "hidden").css(s.from), 
        m && (r = t.effects.getBaseline(m, i), s.from.top = (i.outerHeight - s.outerHeight()) * r.y, s.from.left = (i.outerWidth - s.outerWidth()) * r.x, 
        s.to.top = (i.outerHeight - s.to.outerHeight) * r.y, s.to.left = (i.outerWidth - s.to.outerWidth) * r.x), 
        s.css(s.from), ("content" === p || "both" === p) && (c = c.concat([ "marginTop", "marginBottom" ]).concat(l), 
        h = h.concat([ "marginLeft", "marginRight" ]), u = a.concat(c).concat(h), s.find("*[width]").each(function() {
            var n = t(this), i = n.height(), r = n.width(), s = n.outerHeight(), a = n.outerWidth();
            d && t.effects.save(n, u), n.from = {
                height: i * o.from.y,
                width: r * o.from.x,
                outerHeight: s * o.from.y,
                outerWidth: a * o.from.x
            }, n.to = {
                height: i * o.to.y,
                width: r * o.to.x,
                outerHeight: i * o.to.y,
                outerWidth: r * o.to.x
            }, o.from.y !== o.to.y && (n.from = t.effects.setTransition(n, c, o.from.y, n.from), n.to = t.effects.setTransition(n, c, o.to.y, n.to)), 
            o.from.x !== o.to.x && (n.from = t.effects.setTransition(n, h, o.from.x, n.from), n.to = t.effects.setTransition(n, h, o.to.x, n.to)), 
            n.css(n.from), n.animate(n.to, e.duration, e.easing, function() {
                d && t.effects.restore(n, u);
            });
        })), s.animate(s.to, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function() {
                0 === s.to.opacity && s.css("opacity", s.from.opacity), "hide" === f && s.hide(), t.effects.restore(s, v), 
                d || ("static" === g ? s.css({
                    position: "relative",
                    top: s.to.top,
                    left: s.to.left
                }) : t.each([ "top", "left" ], function(t, e) {
                    s.css(e, function(e, n) {
                        var i = parseInt(n, 10), r = t ? s.to.left : s.to.top;
                        return "auto" === n ? r + "px" : i + r + "px";
                    });
                })), t.effects.removeWrapper(s), n();
            }
        });
    }, t.effects.effect.scale = function(e, n) {
        var i = t(this), r = t.extend(!0, {}, e), o = t.effects.setMode(i, e.mode || "effect"), s = parseInt(e.percent, 10) || (0 === parseInt(e.percent, 10) ? 0 : "hide" === o ? 0 : 100), a = e.direction || "both", u = e.origin, l = {
            height: i.height(),
            width: i.width(),
            outerHeight: i.outerHeight(),
            outerWidth: i.outerWidth()
        }, c = "horizontal" !== a ? s / 100 : 1, h = "vertical" !== a ? s / 100 : 1;
        r.effect = "size", r.queue = !1, r.complete = n, "effect" !== o && (r.origin = u || [ "middle", "center" ], 
        r.restore = !0), r.from = e.from || ("show" === o ? {
            height: 0,
            width: 0,
            outerHeight: 0,
            outerWidth: 0
        } : l), r.to = {
            height: l.height * c,
            width: l.width * h,
            outerHeight: l.outerHeight * c,
            outerWidth: l.outerWidth * h
        }, r.fade && ("show" === o && (r.from.opacity = 0, r.to.opacity = 1), "hide" === o && (r.from.opacity = 1, 
        r.to.opacity = 0)), i.effect(r);
    }, t.effects.effect.puff = function(e, n) {
        var i = t(this), r = t.effects.setMode(i, e.mode || "hide"), o = "hide" === r, s = parseInt(e.percent, 10) || 150, a = s / 100, u = {
            height: i.height(),
            width: i.width(),
            outerHeight: i.outerHeight(),
            outerWidth: i.outerWidth()
        };
        t.extend(e, {
            effect: "scale",
            queue: !1,
            fade: !0,
            mode: r,
            complete: n,
            percent: o ? s : 100,
            from: o ? u : {
                height: u.height * a,
                width: u.width * a,
                outerHeight: u.outerHeight * a,
                outerWidth: u.outerWidth * a
            }
        }), i.effect(e);
    }, t.effects.effect.pulsate = function(e, n) {
        var i, r = t(this), o = t.effects.setMode(r, e.mode || "show"), s = "show" === o, a = "hide" === o, u = s || "hide" === o, l = 2 * (e.times || 5) + (u ? 1 : 0), c = e.duration / l, h = 0, f = r.queue(), d = f.length;
        for ((s || !r.is(":visible")) && (r.css("opacity", 0).show(), h = 1), i = 1; l > i; i++) r.animate({
            opacity: h
        }, c, e.easing), h = 1 - h;
        r.animate({
            opacity: h
        }, c, e.easing), r.queue(function() {
            a && r.hide(), n();
        }), d > 1 && f.splice.apply(f, [ 1, 0 ].concat(f.splice(d, l + 1))), r.dequeue();
    }, t.effects.effect.shake = function(e, n) {
        var i, r = t(this), o = [ "position", "top", "bottom", "left", "right", "height", "width" ], s = t.effects.setMode(r, e.mode || "effect"), a = e.direction || "left", u = e.distance || 20, l = e.times || 3, c = 2 * l + 1, h = Math.round(e.duration / c), f = "up" === a || "down" === a ? "top" : "left", d = "up" === a || "left" === a, p = {}, m = {}, g = {}, v = r.queue(), y = v.length;
        for (t.effects.save(r, o), r.show(), t.effects.createWrapper(r), p[f] = (d ? "-=" : "+=") + u, m[f] = (d ? "+=" : "-=") + 2 * u, 
        g[f] = (d ? "-=" : "+=") + 2 * u, r.animate(p, h, e.easing), i = 1; l > i; i++) r.animate(m, h, e.easing).animate(g, h, e.easing);
        r.animate(m, h, e.easing).animate(p, h / 2, e.easing).queue(function() {
            "hide" === s && r.hide(), t.effects.restore(r, o), t.effects.removeWrapper(r), n();
        }), y > 1 && v.splice.apply(v, [ 1, 0 ].concat(v.splice(y, c + 1))), r.dequeue();
    }, t.effects.effect.slide = function(e, n) {
        var i, r = t(this), o = [ "position", "top", "bottom", "left", "right", "width", "height" ], s = t.effects.setMode(r, e.mode || "show"), a = "show" === s, u = e.direction || "left", l = "up" === u || "down" === u ? "top" : "left", c = "up" === u || "left" === u, h = {};
        t.effects.save(r, o), r.show(), i = e.distance || r["top" === l ? "outerHeight" : "outerWidth"](!0), 
        t.effects.createWrapper(r).css({
            overflow: "hidden"
        }), a && r.css(l, c ? isNaN(i) ? "-" + i : -i : i), h[l] = (a ? c ? "+=" : "-=" : c ? "-=" : "+=") + i, 
        r.animate(h, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function() {
                "hide" === s && r.hide(), t.effects.restore(r, o), t.effects.removeWrapper(r), n();
            }
        });
    }, t.effects.effect.transfer = function(e, n) {
        var i = t(this), r = t(e.to), o = "fixed" === r.css("position"), s = t("body"), a = o ? s.scrollTop() : 0, u = o ? s.scrollLeft() : 0, l = r.offset(), c = {
            top: l.top - a,
            left: l.left - u,
            height: r.innerHeight(),
            width: r.innerWidth()
        }, h = i.offset(), f = t("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(e.className).css({
            top: h.top - a,
            left: h.left - u,
            height: i.innerHeight(),
            width: i.innerWidth(),
            position: o ? "fixed" : "absolute"
        }).animate(c, e.duration, e.easing, function() {
            f.remove(), n();
        });
    };
}), /*!
 * Modernizr v2.8.3
 * www.modernizr.com
 *
 * Copyright (c) Faruk Ates, Paul Irish, Alex Sexton
 * Available under the BSD and MIT licenses: www.modernizr.com/license/
 */
window.Modernizr = function(t, e, n) {
    function i(t) {
        p.cssText = t;
    }
    function r(t, e) {
        return typeof t === e;
    }
    function o(t, e) {
        return !!~("" + t).indexOf(e);
    }
    function s(t, e) {
        for (var i in t) {
            var r = t[i];
            if (!o(r, "-") && p[r] !== n) return "pfx" != e || r;
        }
        return !1;
    }
    function a(t, e, i) {
        var o = t.charAt(0).toUpperCase() + t.slice(1), a = (t + " " + b.join(o + " ") + o).split(" ");
        return r(e, "string") || r(e, "undefined") ? s(a, e) : (a = (t + " " + w.join(o + " ") + o).split(" "), 
        function(t, e, i) {
            for (var o in t) {
                var s = e[t[o]];
                if (s !== n) return !1 === i ? t[o] : r(s, "function") ? s.bind(i || e) : s;
            }
            return !1;
        }(a, e, i));
    }
    var u, l, c = {}, h = e.documentElement, f = "modernizr", d = e.createElement(f), p = d.style, m = e.createElement("input"), g = ":)", v = {}.toString, y = " -webkit- -moz- -o- -ms- ".split(" "), b = "Webkit Moz O ms".split(" "), w = "Webkit Moz O ms".toLowerCase().split(" "), x = "http://www.w3.org/2000/svg", _ = {}, T = {}, C = {}, k = [], S = k.slice, E = function(t, n, i, r) {
        var o, s, a, u, l = e.createElement("div"), c = e.body, d = c || e.createElement("body");
        if (parseInt(i, 10)) for (;i--; ) (a = e.createElement("div")).id = r ? r[i] : f + (i + 1), l.appendChild(a);
        return o = [ "&#173;", '<style id="s', f, '">', t, "</style>" ].join(""), l.id = f, (c ? l : d).innerHTML += o, 
        d.appendChild(l), c || (d.style.background = "", d.style.overflow = "hidden", u = h.style.overflow, 
        h.style.overflow = "hidden", h.appendChild(d)), s = n(l, t), c ? l.parentNode.removeChild(l) : (d.parentNode.removeChild(d), 
        h.style.overflow = u), !!s;
    }, A = function() {
        var t = {
            select: "input",
            change: "input",
            submit: "form",
            reset: "form",
            error: "img",
            load: "img",
            abort: "img"
        };
        return function(i, o) {
            o = o || e.createElement(t[i] || "div");
            var s = (i = "on" + i) in o;
            return s || (o.setAttribute || (o = e.createElement("div")), o.setAttribute && o.removeAttribute && (o.setAttribute(i, ""), 
            s = r(o[i], "function"), r(o[i], "undefined") || (o[i] = n), o.removeAttribute(i))), o = null, s;
        };
    }(), N = {}.hasOwnProperty;
    l = r(N, "undefined") || r(N.call, "undefined") ? function(t, e) {
        return e in t && r(t.constructor.prototype[e], "undefined");
    } : function(t, e) {
        return N.call(t, e);
    }, Function.prototype.bind || (Function.prototype.bind = function(t) {
        var e = this;
        if ("function" != typeof e) throw new TypeError();
        var n = S.call(arguments, 1), i = function() {
            if (this instanceof i) {
                var r = function() {};
                r.prototype = e.prototype;
                var o = new r(), s = e.apply(o, n.concat(S.call(arguments)));
                return Object(s) === s ? s : o;
            }
            return e.apply(t, n.concat(S.call(arguments)));
        };
        return i;
    }), _.flexbox = function() {
        return a("flexWrap");
    }, _.flexboxlegacy = function() {
        return a("boxDirection");
    }, _.canvas = function() {
        var t = e.createElement("canvas");
        return !(!t.getContext || !t.getContext("2d"));
    }, _.canvastext = function() {
        return !(!c.canvas || !r(e.createElement("canvas").getContext("2d").fillText, "function"));
    }, _.webgl = function() {
        return !!t.WebGLRenderingContext;
    }, _.touch = function() {
        var n;
        return "ontouchstart" in t || t.DocumentTouch && e instanceof DocumentTouch ? n = !0 : E([ "@media (", y.join("touch-enabled),("), f, ")", "{#modernizr{top:9px;position:absolute}}" ].join(""), function(t) {
            n = 9 === t.offsetTop;
        }), n;
    }, _.geolocation = function() {
        return "geolocation" in navigator;
    }, _.postmessage = function() {
        return !!t.postMessage;
    }, _.websqldatabase = function() {
        return !!t.openDatabase;
    }, _.indexedDB = function() {
        return !!a("indexedDB", t);
    }, _.hashchange = function() {
        return A("hashchange", t) && (e.documentMode === n || e.documentMode > 7);
    }, _.history = function() {
        return !(!t.history || !history.pushState);
    }, _.draganddrop = function() {
        var t = e.createElement("div");
        return "draggable" in t || "ondragstart" in t && "ondrop" in t;
    }, _.websockets = function() {
        return "WebSocket" in t || "MozWebSocket" in t;
    }, _.rgba = function() {
        return i("background-color:rgba(150,255,150,.5)"), o(p.backgroundColor, "rgba");
    }, _.hsla = function() {
        return i("background-color:hsla(120,40%,100%,.5)"), o(p.backgroundColor, "rgba") || o(p.backgroundColor, "hsla");
    }, _.multiplebgs = function() {
        return i("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(p.background);
    }, _.backgroundsize = function() {
        return a("backgroundSize");
    }, _.borderimage = function() {
        return a("borderImage");
    }, _.borderradius = function() {
        return a("borderRadius");
    }, _.boxshadow = function() {
        return a("boxShadow");
    }, _.textshadow = function() {
        return "" === e.createElement("div").style.textShadow;
    }, _.opacity = function() {
        return function(t, e) {
            i(y.join(t + ";") + (e || ""));
        }("opacity:.55"), /^0.55$/.test(p.opacity);
    }, _.cssanimations = function() {
        return a("animationName");
    }, _.csscolumns = function() {
        return a("columnCount");
    }, _.cssgradients = function() {
        var t = "background-image:";
        return i((t + "-webkit- ".split(" ").join("gradient(linear,left top,right bottom,from(#9f9),to(white));" + t) + y.join("linear-gradient(left top,#9f9, white);" + t)).slice(0, -t.length)), 
        o(p.backgroundImage, "gradient");
    }, _.cssreflections = function() {
        return a("boxReflect");
    }, _.csstransforms = function() {
        return !!a("transform");
    }, _.csstransforms3d = function() {
        var t = !!a("perspective");
        return t && "webkitPerspective" in h.style && E("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(e, n) {
            t = 9 === e.offsetLeft && 3 === e.offsetHeight;
        }), t;
    }, _.csstransitions = function() {
        return a("transition");
    }, _.fontface = function() {
        var t;
        return E('@font-face {font-family:"font";src:url("https://")}', function(n, i) {
            var r = e.getElementById("smodernizr"), o = r.sheet || r.styleSheet, s = o ? o.cssRules && o.cssRules[0] ? o.cssRules[0].cssText : o.cssText || "" : "";
            t = /src/i.test(s) && 0 === s.indexOf(i.split(" ")[0]);
        }), t;
    }, _.generatedcontent = function() {
        var t;
        return E([ "#", f, "{font:0/0 a}#", f, ':after{content:"', g, '";visibility:hidden;font:3px/1 a}' ].join(""), function(e) {
            t = e.offsetHeight >= 3;
        }), t;
    }, _.video = function() {
        var t = e.createElement("video"), n = !1;
        try {
            (n = !!t.canPlayType) && ((n = new Boolean(n)).ogg = t.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), 
            n.h264 = t.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), n.webm = t.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""));
        } catch (t) {}
        return n;
    }, _.audio = function() {
        var t = e.createElement("audio"), n = !1;
        try {
            (n = !!t.canPlayType) && ((n = new Boolean(n)).ogg = t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), 
            n.mp3 = t.canPlayType("audio/mpeg;").replace(/^no$/, ""), n.wav = t.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), 
            n.m4a = (t.canPlayType("audio/x-m4a;") || t.canPlayType("audio/aac;")).replace(/^no$/, ""));
        } catch (t) {}
        return n;
    }, _.localstorage = function() {
        try {
            return localStorage.setItem(f, f), localStorage.removeItem(f), !0;
        } catch (t) {
            return !1;
        }
    }, _.sessionstorage = function() {
        try {
            return sessionStorage.setItem(f, f), sessionStorage.removeItem(f), !0;
        } catch (t) {
            return !1;
        }
    }, _.webworkers = function() {
        return !!t.Worker;
    }, _.applicationcache = function() {
        return !!t.applicationCache;
    }, _.svg = function() {
        return !!e.createElementNS && !!e.createElementNS(x, "svg").createSVGRect;
    }, _.inlinesvg = function() {
        var t = e.createElement("div");
        return t.innerHTML = "<svg/>", (t.firstChild && t.firstChild.namespaceURI) == x;
    }, _.smil = function() {
        return !!e.createElementNS && /SVGAnimate/.test(v.call(e.createElementNS(x, "animate")));
    }, _.svgclippaths = function() {
        return !!e.createElementNS && /SVGClipPath/.test(v.call(e.createElementNS(x, "clipPath")));
    };
    for (var I in _) l(_, I) && (u = I.toLowerCase(), c[u] = _[I](), k.push((c[u] ? "" : "no-") + u));
    return c.input || (c.input = function(n) {
        for (var i = 0, r = n.length; i < r; i++) C[n[i]] = !!(n[i] in m);
        return C.list && (C.list = !(!e.createElement("datalist") || !t.HTMLDataListElement)), C;
    }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), c.inputtypes = function(t) {
        for (var i, r, o, s = 0, a = t.length; s < a; s++) m.setAttribute("type", r = t[s]), (i = "text" !== m.type) && (m.value = g, 
        m.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(r) && m.style.WebkitAppearance !== n ? (h.appendChild(m), 
        i = (o = e.defaultView).getComputedStyle && "textfield" !== o.getComputedStyle(m, null).WebkitAppearance && 0 !== m.offsetHeight, 
        h.removeChild(m)) : /^(search|tel)$/.test(r) || (i = /^(url|email)$/.test(r) ? m.checkValidity && !1 === m.checkValidity() : m.value != g)), 
        T[t[s]] = !!i;
        return T;
    }("search tel url email datetime date month week time datetime-local number range color".split(" "))), 
    c.addTest = function(t, e) {
        if ("object" == typeof t) for (var i in t) l(t, i) && c.addTest(i, t[i]); else {
            if (t = t.toLowerCase(), c[t] !== n) return c;
            e = "function" == typeof e ? e() : e, h.className += " " + (e ? "" : "no-") + t, c[t] = e;
        }
        return c;
    }, i(""), d = m = null, function(t, e) {
        function n() {
            var t = p.elements;
            return "string" == typeof t ? t.split(" ") : t;
        }
        function i(t) {
            var e = d[t[h]];
            return e || (e = {}, f++, t[h] = f, d[f] = e), e;
        }
        function r(t, n, r) {
            if (n || (n = e), a) return n.createElement(t);
            r || (r = i(n));
            var o;
            return !(o = r.cache[t] ? r.cache[t].cloneNode() : c.test(t) ? (r.cache[t] = r.createElem(t)).cloneNode() : r.createElem(t)).canHaveChildren || l.test(t) || o.tagUrn ? o : r.frag.appendChild(o);
        }
        function o(t) {
            t || (t = e);
            var o = i(t);
            return !p.shivCSS || s || o.hasCSS || (o.hasCSS = !!function(t, e) {
                var n = t.createElement("p"), i = t.getElementsByTagName("head")[0] || t.documentElement;
                return n.innerHTML = "x<style>" + e + "</style>", i.insertBefore(n.lastChild, i.firstChild);
            }(t, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), 
            a || function(t, e) {
                e.cache || (e.cache = {}, e.createElem = t.createElement, e.createFrag = t.createDocumentFragment, e.frag = e.createFrag()), 
                t.createElement = function(n) {
                    return p.shivMethods ? r(n, t, e) : e.createElem(n);
                }, t.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + n().join().replace(/[\w\-]+/g, function(t) {
                    return e.createElem(t), e.frag.createElement(t), 'c("' + t + '")';
                }) + ");return n}")(p, e.frag);
            }(t, o), t;
        }
        var s, a, u = t.html5 || {}, l = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, c = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, h = "_html5shiv", f = 0, d = {};
        !function() {
            try {
                var t = e.createElement("a");
                t.innerHTML = "<xyz></xyz>", s = "hidden" in t, a = 1 == t.childNodes.length || function() {
                    e.createElement("a");
                    var t = e.createDocumentFragment();
                    return void 0 === t.cloneNode || void 0 === t.createDocumentFragment || void 0 === t.createElement;
                }();
            } catch (t) {
                s = !0, a = !0;
            }
        }();
        var p = {
            elements: u.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
            version: "3.7.0",
            shivCSS: !1 !== u.shivCSS,
            supportsUnknownElements: a,
            shivMethods: !1 !== u.shivMethods,
            type: "default",
            shivDocument: o,
            createElement: r,
            createDocumentFragment: function(t, r) {
                if (t || (t = e), a) return t.createDocumentFragment();
                for (var o = (r = r || i(t)).frag.cloneNode(), s = 0, u = n(), l = u.length; s < l; s++) o.createElement(u[s]);
                return o;
            }
        };
        t.html5 = p, o(e);
    }(this, e), c._version = "2.8.3", c._prefixes = y, c._domPrefixes = w, c._cssomPrefixes = b, c.mq = function(e) {
        var n = t.matchMedia || t.msMatchMedia;
        if (n) return n(e) && n(e).matches || !1;
        var i;
        return E("@media " + e + " { #" + f + " { position: absolute; } }", function(e) {
            i = "absolute" == (t.getComputedStyle ? getComputedStyle(e, null) : e.currentStyle).position;
        }), i;
    }, c.hasEvent = A, c.testProp = function(t) {
        return s([ t ]);
    }, c.testAllProps = a, c.testStyles = E, c.prefixed = function(t, e, n) {
        return e ? a(t, e, n) : a(t, "pfx");
    }, h.className = h.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + " js " + k.join(" "), c;
}(this, this.document), function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.ES6Promise = e();
}(this, function() {
    "use strict";
    function t(t) {
        return "function" == typeof t;
    }
    function e() {
        var t = setTimeout;
        return function() {
            return t(n, 1);
        };
    }
    function n() {
        for (var t = 0; t < w; t += 2) {
            (0, N[t])(N[t + 1]), N[t] = void 0, N[t + 1] = void 0;
        }
        w = 0;
    }
    function i(t, e) {
        var n = arguments, i = this, r = new this.constructor(o);
        void 0 === r[P] && g(r);
        var s = i._state;
        return s ? function() {
            var t = n[s - 1];
            T(function() {
                return m(s, r, t, i._result);
            });
        }() : f(i, r, t, e), r;
    }
    function r(t) {
        if (t && "object" == typeof t && t.constructor === this) return t;
        var e = new this(o);
        return u(e, t), e;
    }
    function o() {}
    function s(t) {
        try {
            return t.then;
        } catch (t) {
            return H.error = t, H;
        }
    }
    function a(e, n, o) {
        n.constructor === e.constructor && o === i && n.constructor.resolve === r ? function(t, e) {
            e._state === D ? c(t, e._result) : e._state === O ? h(t, e._result) : f(e, void 0, function(e) {
                return u(t, e);
            }, function(e) {
                return h(t, e);
            });
        }(e, n) : o === H ? h(e, H.error) : void 0 === o ? c(e, n) : t(o) ? function(t, e, n) {
            T(function(t) {
                var i = !1, r = function(t, e, n, i) {
                    try {
                        t.call(e, n, i);
                    } catch (t) {
                        return t;
                    }
                }(n, e, function(n) {
                    i || (i = !0, e !== n ? u(t, n) : c(t, n));
                }, function(e) {
                    i || (i = !0, h(t, e));
                }, t._label);
                !i && r && (i = !0, h(t, r));
            }, t);
        }(e, n, o) : c(e, n);
    }
    function u(t, e) {
        t === e ? h(t, new TypeError("You cannot resolve a promise with itself")) : function(t) {
            return "function" == typeof t || "object" == typeof t && null !== t;
        }(e) ? a(t, e, s(e)) : c(t, e);
    }
    function l(t) {
        t._onerror && t._onerror(t._result), d(t);
    }
    function c(t, e) {
        t._state === M && (t._result = e, t._state = D, 0 !== t._subscribers.length && T(d, t));
    }
    function h(t, e) {
        t._state === M && (t._state = O, t._result = e, T(l, t));
    }
    function f(t, e, n, i) {
        var r = t._subscribers, o = r.length;
        t._onerror = null, r[o] = e, r[o + D] = n, r[o + O] = i, 0 === o && t._state && T(d, t);
    }
    function d(t) {
        var e = t._subscribers, n = t._state;
        if (0 !== e.length) {
            for (var i = void 0, r = void 0, o = t._result, s = 0; s < e.length; s += 3) i = e[s], r = e[s + n], 
            i ? m(n, i, r, o) : r(o);
            t._subscribers.length = 0;
        }
    }
    function p() {
        this.error = null;
    }
    function m(e, n, i, r) {
        var o = t(i), s = void 0, a = void 0, l = void 0, f = void 0;
        if (o) {
            if ((s = function(t, e) {
                try {
                    return t(e);
                } catch (t) {
                    return j.error = t, j;
                }
            }(i, r)) === j ? (f = !0, a = s.error, s = null) : l = !0, n === s) return void h(n, new TypeError("A promises callback cannot return that same promise."));
        } else s = r, l = !0;
        n._state !== M || (o && l ? u(n, s) : f ? h(n, a) : e === D ? c(n, s) : e === O && h(n, s));
    }
    function g(t) {
        t[P] = L++, t._state = void 0, t._result = void 0, t._subscribers = [];
    }
    function v(t, e) {
        this._instanceConstructor = t, this.promise = new t(o), this.promise[P] || g(this.promise), b(e) ? (this._input = e, 
        this.length = e.length, this._remaining = e.length, this._result = new Array(this.length), 0 === this.length ? c(this.promise, this._result) : (this.length = this.length || 0, 
        this._enumerate(), 0 === this._remaining && c(this.promise, this._result))) : h(this.promise, new Error("Array Methods must be provided an Array"));
    }
    function y(t) {
        this[P] = L++, this._result = this._state = void 0, this._subscribers = [], o !== t && ("function" != typeof t && function() {
            throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
        }(), this instanceof y ? function(t, e) {
            try {
                e(function(e) {
                    u(t, e);
                }, function(e) {
                    h(t, e);
                });
            } catch (e) {
                h(t, e);
            }
        }(this, t) : function() {
            throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
        }());
    }
    var b = Array.isArray ? Array.isArray : function(t) {
        return "[object Array]" === Object.prototype.toString.call(t);
    }, w = 0, x = void 0, _ = void 0, T = function(t, e) {
        N[w] = t, N[w + 1] = e, 2 === (w += 2) && (_ ? _(n) : I());
    }, C = "undefined" != typeof window ? window : void 0, k = C || {}, S = k.MutationObserver || k.WebKitMutationObserver, E = "undefined" == typeof self && "undefined" != typeof process && "[object process]" === {}.toString.call(process), A = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel, N = new Array(1e3), I = void 0;
    I = E ? function() {
        return process.nextTick(n);
    } : S ? function() {
        var t = 0, e = new S(n), i = document.createTextNode("");
        return e.observe(i, {
            characterData: !0
        }), function() {
            i.data = t = ++t % 2;
        };
    }() : A ? function() {
        var t = new MessageChannel();
        return t.port1.onmessage = n, function() {
            return t.port2.postMessage(0);
        };
    }() : void 0 === C && "function" == typeof require ? function() {
        try {
            var t = require("vertx");
            return void 0 !== (x = t.runOnLoop || t.runOnContext) ? function() {
                x(n);
            } : e();
        } catch (t) {
            return e();
        }
    }() : e();
    var P = Math.random().toString(36).substring(16), M = void 0, D = 1, O = 2, H = new p(), j = new p(), L = 0;
    return v.prototype._enumerate = function() {
        for (var t = this.length, e = this._input, n = 0; this._state === M && n < t; n++) this._eachEntry(e[n], n);
    }, v.prototype._eachEntry = function(t, e) {
        var n = this._instanceConstructor, u = n.resolve;
        if (u === r) {
            var l = s(t);
            if (l === i && t._state !== M) this._settledAt(t._state, e, t._result); else if ("function" != typeof l) this._remaining--, 
            this._result[e] = t; else if (n === y) {
                var c = new n(o);
                a(c, t, l), this._willSettleAt(c, e);
            } else this._willSettleAt(new n(function(e) {
                return e(t);
            }), e);
        } else this._willSettleAt(u(t), e);
    }, v.prototype._settledAt = function(t, e, n) {
        var i = this.promise;
        i._state === M && (this._remaining--, t === O ? h(i, n) : this._result[e] = n), 0 === this._remaining && c(i, this._result);
    }, v.prototype._willSettleAt = function(t, e) {
        var n = this;
        f(t, void 0, function(t) {
            return n._settledAt(D, e, t);
        }, function(t) {
            return n._settledAt(O, e, t);
        });
    }, y.all = function(t) {
        return new v(this, t).promise;
    }, y.race = function(t) {
        var e = this;
        return new e(b(t) ? function(n, i) {
            for (var r = t.length, o = 0; o < r; o++) e.resolve(t[o]).then(n, i);
        } : function(t, e) {
            return e(new TypeError("You must pass an array to race."));
        });
    }, y.resolve = r, y.reject = function(t) {
        var e = new this(o);
        return h(e, t), e;
    }, y._setScheduler = function(t) {
        _ = t;
    }, y._setAsap = function(t) {
        T = t;
    }, y._asap = T, y.prototype = {
        constructor: y,
        then: i,
        catch: function(t) {
            return this.then(null, t);
        }
    }, y.polyfill = function() {
        var t = void 0;
        if ("undefined" != typeof global) t = global; else if ("undefined" != typeof self) t = self; else try {
            t = Function("return this")();
        } catch (t) {
            throw new Error("polyfill failed because global object is unavailable in this environment");
        }
        var e = t.Promise;
        if (e) {
            var n = null;
            try {
                n = Object.prototype.toString.call(e.resolve());
            } catch (t) {}
            if ("[object Promise]" === n && !e.cast) return;
        }
        t.Promise = y;
    }, y.Promise = y, y;
});

var Froogaloop = function() {
    function t(e) {
        return new t.fn.init(e);
    }
    function e(t, e, n) {
        if (!n.contentWindow.postMessage) return !1;
        var i = JSON.stringify({
            method: t,
            value: e
        });
        n.contentWindow.postMessage(i, a);
    }
    function n(t) {
        var e, n;
        try {
            n = (e = JSON.parse(t.data)).event || e.method;
        } catch (t) {}
        if ("ready" != n || s || (s = !0), !/^https?:\/\/player.vimeo.com/.test(t.origin)) return !1;
        var i = e.value, r = e.data, a = "" === a ? null : e.player_id, u = function(t, e) {
            return e ? o[e] && o[e][t] : o[t];
        }(n, a), l = [];
        return !!u && (void 0 !== i && l.push(i), r && l.push(r), a && l.push(a), l.length > 0 ? u.apply(null, l) : u.call());
    }
    function i(t, e, n) {
        n ? (o[n] || (o[n] = {}), o[n][t] = e) : o[t] = e;
    }
    function r(t) {
        return !!(t && t.constructor && t.call && t.apply);
    }
    var o = {}, s = !1, a = (Array.prototype.slice, "*");
    return t.fn = t.prototype = {
        element: null,
        init: function(t) {
            return "string" == typeof t && (t = document.getElementById(t)), this.element = t, this.element ? this : null;
        },
        api: function(t, n) {
            if (!this.element || !t) return !1;
            var o = this.element, s = "" !== o.id ? o.id : null, a = r(n) ? null : n, u = r(n) ? n : null;
            return u && i(t, u, s), e(t, a, o), this;
        },
        addEvent: function(t, n) {
            if (!this.element) return !1;
            var r = this.element, o = "" !== r.id ? r.id : null;
            return i(t, n, o), "ready" != t ? e("addEventListener", t, r) : "ready" == t && s && n.call(null, o), 
            this;
        },
        removeEvent: function(t) {
            if (!this.element) return !1;
            var n = this.element, i = function(t, e) {
                if (e && o[e]) {
                    if (!o[e][t]) return !1;
                    o[e][t] = null;
                } else {
                    if (!o[t]) return !1;
                    o[t] = null;
                }
                return !0;
            }(t, "" !== n.id ? n.id : null);
            "ready" != t && i && e("removeEventListener", t, n);
        }
    }, t.fn.init.prototype = t.fn, window.addEventListener ? window.addEventListener("message", n, !1) : window.attachEvent("onmessage", n), 
    window.Froogaloop = window.$f = t;
}();

/*
 *	jQuery dotdotdot 1.8.1
 *
 *	Copyright (c) Fred Heusschen
 *	www.frebsite.nl
 *
 *	Plugin website:
 *	dotdotdot.frebsite.nl
 *
 *	Licensed under the MIT license.
 *	http://en.wikipedia.org/wiki/MIT_License
 */
!function(t, e) {
    function n(e, o, u, c, h) {
        var f = !1;
        return e.contents().detach().each(function() {
            var d = t(this);
            if (void 0 === this) return !0;
            if (d.is("script, .dotdotdot-keep")) e.append(d); else {
                if (f) return !0;
                e.append(d), !h || d.is(c.after) || d.find(c.after).length || e[e.is("a, table, thead, tbody, tfoot, tr, col, colgroup, object, embed, param, ol, ul, dl, blockquote, select, optgroup, option, textarea, script, style") ? "after" : "append"](h), 
                i(u, c) && (f = 3 == this.nodeType ? function(e, n, o, u, c) {
                    var h = e[0];
                    if (!h) return !1;
                    var f = a(h), d = -1 !== f.indexOf(" ") ? " " : "　", p = "letter" == u.wrap ? "" : d, m = f.split(p), g = -1, v = -1, y = 0, b = m.length - 1;
                    u.fallbackToLetter && 0 == y && 0 == b && (p = "", m = f.split(p), b = m.length - 1);
                    for (;y <= b && (0 != y || 0 != b); ) {
                        var w = Math.floor((y + b) / 2);
                        if (w == v) break;
                        v = w, s(h, m.slice(0, v + 1).join(p) + u.ellipsis), o.children().each(function() {
                            t(this).toggle().toggle();
                        }), i(o, u) ? (b = v, u.fallbackToLetter && 0 == y && 0 == b && (p = "", m = m[0].split(p), g = -1, 
                        v = -1, y = 0, b = m.length - 1)) : (g = v, y = v);
                    }
                    if (-1 == g || 1 == m.length && 0 == m[0].length) {
                        var x = e.parent();
                        e.detach();
                        var _ = c && c.closest(x).length ? c.length : 0;
                        x.contents().length > _ ? h = l(x.contents().eq(-1 - _), n) : (h = l(x, n, !0), _ || x.detach()), h && (f = r(a(h), u), 
                        s(h, f), _ && c && t(h).parent().append(c));
                    } else f = r(m.slice(0, g + 1).join(p), u), s(h, f);
                    return !0;
                }(d, o, u, c, h) : n(d, o, u, c, h)), f || h && h.detach();
            }
        }), o.addClass("is-truncated"), f;
    }
    function i(t, e) {
        return t.innerHeight() > e.maxHeight;
    }
    function r(e, n) {
        for (;t.inArray(e.slice(-1), n.lastCharacter.remove) > -1; ) e = e.slice(0, -1);
        return t.inArray(e.slice(-1), n.lastCharacter.noEllipsis) < 0 && (e += n.ellipsis), e;
    }
    function o(t) {
        return {
            width: t.innerWidth(),
            height: t.innerHeight()
        };
    }
    function s(t, e) {
        t.innerText ? t.innerText = e : t.nodeValue ? t.nodeValue = e : t.textContent && (t.textContent = e);
    }
    function a(t) {
        return t.innerText ? t.innerText : t.nodeValue ? t.nodeValue : t.textContent ? t.textContent : "";
    }
    function u(t) {
        do {
            t = t.previousSibling;
        } while (t && 1 !== t.nodeType && 3 !== t.nodeType);
        return t;
    }
    function l(e, n, i) {
        var r, o = e && e[0];
        if (o) {
            if (!i) {
                if (3 === o.nodeType) return o;
                if (t.trim(e.text())) return l(e.contents().last(), n);
            }
            for (r = u(o); !r; ) {
                if ((e = e.parent()).is(n) || !e.length) return !1;
                r = u(e[0]);
            }
            if (r) return l(t(r), n);
        }
        return !1;
    }
    if (!t.fn.dotdotdot) {
        t.fn.dotdotdot = function(e) {
            if (0 == this.length) return t.fn.dotdotdot.debug('No element found for "' + this.selector + '".'), 
            this;
            if (this.length > 1) return this.each(function() {
                t(this).dotdotdot(e);
            });
            var r = this, s = r.contents();
            r.data("dotdotdot") && r.trigger("destroy.dot"), r.data("dotdotdot-style", r.attr("style") || ""), r.css("word-wrap", "break-word"), 
            "nowrap" === r.css("white-space") && r.css("white-space", "normal"), r.bind_events = function() {
                return r.bind("update.dot", function(e, o) {
                    switch (r.removeClass("is-truncated"), e.preventDefault(), e.stopPropagation(), typeof a.height) {
                      case "number":
                        a.maxHeight = a.height;
                        break;

                      case "function":
                        a.maxHeight = a.height.call(r[0]);
                        break;

                      default:
                        a.maxHeight = function(t) {
                            for (var e = t.innerHeight(), n = [ "paddingTop", "paddingBottom" ], i = 0, r = n.length; i < r; i++) {
                                var o = parseInt(t.css(n[i]), 10);
                                isNaN(o) && (o = 0), e -= o;
                            }
                            return e;
                        }(r);
                    }
                    a.maxHeight += a.tolerance, void 0 !== o && (("string" == typeof o || "nodeType" in o && 1 === o.nodeType) && (o = t("<div />").append(o).contents()), 
                    o instanceof t && (s = o)), (f = r.wrapInner('<div class="dotdotdot" />').children()).contents().detach().end().append(s.clone(!0)).find("br").replaceWith("  <br />  ").end().css({
                        height: "auto",
                        width: "auto",
                        border: "none",
                        padding: 0,
                        margin: 0
                    });
                    var l = !1, c = !1;
                    return u.afterElement && ((l = u.afterElement.clone(!0)).show(), u.afterElement.detach()), i(f, a) && (c = "children" == a.wrap ? function(t, e, n) {
                        var r = t.children(), o = !1;
                        t.empty();
                        for (var s = 0, a = r.length; s < a; s++) {
                            var u = r.eq(s);
                            if (t.append(u), n && t.append(n), i(t, e)) {
                                u.remove(), o = !0;
                                break;
                            }
                            n && n.detach();
                        }
                        return o;
                    }(f, a, l) : n(f, r, f, a, l)), f.replaceWith(f.contents()), f = null, t.isFunction(a.callback) && a.callback.call(r[0], c, s), 
                    u.isTruncated = c, c;
                }).bind("isTruncated.dot", function(t, e) {
                    return t.preventDefault(), t.stopPropagation(), "function" == typeof e && e.call(r[0], u.isTruncated), 
                    u.isTruncated;
                }).bind("originalContent.dot", function(t, e) {
                    return t.preventDefault(), t.stopPropagation(), "function" == typeof e && e.call(r[0], s), s;
                }).bind("destroy.dot", function(t) {
                    t.preventDefault(), t.stopPropagation(), r.unwatch().unbind_events().contents().detach().end().append(s).attr("style", r.data("dotdotdot-style") || "").removeClass("is-truncated").data("dotdotdot", !1);
                }), r;
            }, r.unbind_events = function() {
                return r.unbind(".dot"), r;
            }, r.watch = function() {
                if (r.unwatch(), "window" == a.watch) {
                    var e = t(window), n = e.width(), i = e.height();
                    e.bind("resize.dot" + u.dotId, function() {
                        n == e.width() && i == e.height() && a.windowResizeFix || (n = e.width(), i = e.height(), h && clearInterval(h), 
                        h = setTimeout(function() {
                            r.trigger("update.dot");
                        }, 100));
                    });
                } else l = o(r), h = setInterval(function() {
                    if (r.is(":visible")) {
                        var t = o(r);
                        l.width == t.width && l.height == t.height || (r.trigger("update.dot"), l = t);
                    }
                }, 500);
                return r;
            }, r.unwatch = function() {
                return t(window).unbind("resize.dot" + u.dotId), h && clearInterval(h), r;
            };
            var a = t.extend(!0, {}, t.fn.dotdotdot.defaults, e), u = {}, l = {}, h = null, f = null;
            return a.lastCharacter.remove instanceof Array || (a.lastCharacter.remove = t.fn.dotdotdot.defaultArrays.lastCharacter.remove), 
            a.lastCharacter.noEllipsis instanceof Array || (a.lastCharacter.noEllipsis = t.fn.dotdotdot.defaultArrays.lastCharacter.noEllipsis), 
            u.afterElement = function(e, n) {
                return !!e && ("string" == typeof e ? !!(e = t(e, n)).length && e : !!e.jquery && e);
            }(a.after, r), u.isTruncated = !1, u.dotId = c++, r.data("dotdotdot", !0).bind_events().trigger("update.dot"), 
            a.watch && r.watch(), r;
        }, t.fn.dotdotdot.defaults = {
            ellipsis: "... ",
            wrap: "word",
            fallbackToLetter: !0,
            lastCharacter: {},
            tolerance: 0,
            callback: null,
            after: null,
            height: null,
            watch: !1,
            windowResizeFix: !0
        }, t.fn.dotdotdot.defaultArrays = {
            lastCharacter: {
                remove: [ " ", "　", ",", ";", ".", "!", "?" ],
                noEllipsis: []
            }
        }, t.fn.dotdotdot.debug = function(t) {};
        var c = 1, h = t.fn.html;
        t.fn.html = function(e) {
            /*
 *	jQuery dotdotdot 1.8.1
 *
 *	Copyright (c) Fred Heusschen
 *	www.frebsite.nl
 *
 *	Plugin website:
 *	dotdotdot.frebsite.nl
 *
 *	Licensed under the MIT license.
 *	http://en.wikipedia.org/wiki/MIT_License
 */
            return void 0 != e && !t.isFunction(e) && this.data("dotdotdot") ? this.trigger("update", [ e ]) : h.apply(this, arguments);
        };
        var f = t.fn.text;
        t.fn.text = function(e) {
            return void 0 != e && !t.isFunction(e) && this.data("dotdotdot") ? (e = t("<div />").text(e).html(), 
            this.trigger("update", [ e ])) : f.apply(this, arguments);
        };
    }
}(jQuery), jQuery(document).ready(function(t) {
    t(".dot-ellipsis").each(function() {
        var e = t(this).hasClass("dot-resize-update"), n = t(this).hasClass("dot-timer-update"), i = 0, r = t(this).attr("class").split(/\s+/);
        t.each(r, function(t, e) {
            var n = e.match(/^dot-height-(\d+)$/);
            null !== n && (i = Number(n[1]));
        });
        var o = new Object();
        n && (o.watch = !0), e && (o.watch = "window"), i > 0 && (o.height = i), t(this).dotdotdot(o);
    });
}), jQuery(window).load(function() {
    jQuery(".dot-ellipsis.dot-load-update").trigger("update.dot");
});

/*
 * Date Format 1.2.3
 * (c) 2007-2009 Steven Levithan <stevenlevithan.com>
 * MIT license
 *
 * Includes enhancements by Scott Trenda <scott.trenda.net>
 * and Kris Kowal <cixar.com/~kris.kowal/>
 *
 * Accepts a date, a mask, or a date and a mask.
 * Returns a formatted version of the given date.
 * The date defaults to the current date/time.
 * The mask defaults to dateFormat.masks.default.
 */
var dateFormat = function() {
    var t = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g, e = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g, n = /[^-+\dA-Z]/g, i = function(t, e) {
        for (t = String(t), e = e || 2; t.length < e; ) t = "0" + t;
        return t;
    };
    return function(r, o, s) {
        var a = dateFormat;
        if (1 != arguments.length || "[object String]" != Object.prototype.toString.call(r) || /\d/.test(r) || (o = r, 
        r = void 0), r = r ? new Date(r) : new Date(), isNaN(r)) throw SyntaxError("invalid date");
        "UTC:" == (o = String(a.masks[o] || o || a.masks.default)).slice(0, 4) && (o = o.slice(4), s = !0);
        var u = s ? "getUTC" : "get", l = r[u + "Date"](), c = r[u + "Day"](), h = r[u + "Month"](), f = r[u + "FullYear"](), d = r[u + "Hours"](), p = r[u + "Minutes"](), m = r[u + "Seconds"](), g = r[u + "Milliseconds"](), v = s ? 0 : r.getTimezoneOffset(), y = {
            d: l,
            dd: i(l),
            ddd: a.i18n.dayNames[c],
            dddd: a.i18n.dayNames[c + 7],
            m: h + 1,
            mm: i(h + 1),
            mmm: a.i18n.monthNames[h],
            mmmm: a.i18n.monthNames[h + 12],
            yy: String(f).slice(2),
            yyyy: f,
            h: d % 12 || 12,
            hh: i(d % 12 || 12),
            H: d,
            HH: i(d),
            M: p,
            MM: i(p),
            s: m,
            ss: i(m),
            l: i(g, 3),
            L: i(g > 99 ? Math.round(g / 10) : g),
            t: d < 12 ? "a" : "p",
            tt: d < 12 ? "am" : "pm",
            T: d < 12 ? "A" : "P",
            TT: d < 12 ? "AM" : "PM",
            Z: s ? "UTC" : (String(r).match(e) || [ "" ]).pop().replace(n, ""),
            o: (v > 0 ? "-" : "+") + i(100 * Math.floor(Math.abs(v) / 60) + Math.abs(v) % 60, 4),
            S: [ "th", "st", "nd", "rd" ][l % 10 > 3 ? 0 : (l % 100 - l % 10 != 10) * l % 10]
        };
        return o.replace(t, function(t) {
            return t in y ? y[t] : t.slice(1, t.length - 1);
        });
    };
}();

dateFormat.masks = {
    default: "ddd mmm dd yyyy HH:MM:ss",
    shortDate: "m/d/yy",
    mediumDate: "mmm d, yyyy",
    longDate: "mmmm d, yyyy",
    fullDate: "dddd, mmmm d, yyyy",
    shortTime: "h:MM TT",
    mediumTime: "h:MM:ss TT",
    longTime: "h:MM:ss TT Z",
    isoDate: "yyyy-mm-dd",
    isoTime: "HH:MM:ss",
    isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
    isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
}, dateFormat.i18n = {
    dayNames: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
    monthNames: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]
}, Date.prototype.format = function(t, e) {
    return dateFormat(this, t, e);
}, /**! Calculate the md5 hash of a string
 * +   original by: Webtoolkit.info (http://www.webtoolkit.info/)
 * + namespaced by: Michael White (http://crestidg.com)
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
**/
md5 = function(t) {
    var e, n, i, r, o, s, a, u, l, c = function(t, e) {
        return t << e | t >>> 32 - e;
    }, h = function(t, e) {
        var n, i, r, o, s;
        return r = 2147483648 & t, o = 2147483648 & e, n = 1073741824 & t, i = 1073741824 & e, s = (1073741823 & t) + (1073741823 & e), 
        n & i ? 2147483648 ^ s ^ r ^ o : n | i ? 1073741824 & s ? 3221225472 ^ s ^ r ^ o : 1073741824 ^ s ^ r ^ o : s ^ r ^ o;
    }, f = function(t, e, n, i, r, o, s) {
        return t = h(t, h(h(function(t, e, n) {
            return t & e | ~t & n;
        }(e, n, i), r), s)), h(c(t, o), e);
    }, d = function(t, e, n, i, r, o, s) {
        return t = h(t, h(h(function(t, e, n) {
            return t & n | e & ~n;
        }(e, n, i), r), s)), h(c(t, o), e);
    }, p = function(t, e, n, i, r, o, s) {
        return t = h(t, h(h(function(t, e, n) {
            return t ^ e ^ n;
        }(e, n, i), r), s)), h(c(t, o), e);
    }, m = function(t, e, n, i, r, o, s) {
        return t = h(t, h(h(function(t, e, n) {
            return e ^ (t | ~n);
        }(e, n, i), r), s)), h(c(t, o), e);
    }, g = function(t) {
        var e, n = "", i = "";
        for (e = 0; e <= 3; e++) n += (i = "0" + (t >>> 8 * e & 255).toString(16)).substr(i.length - 2, 2);
        return n;
    }, v = Array();
    for (v = function(t) {
        for (var e, n = t.length, i = n + 8, r = 16 * ((i - i % 64) / 64 + 1), o = Array(r - 1), s = 0, a = 0; a < n; ) s = a % 4 * 8, 
        o[e = (a - a % 4) / 4] = o[e] | t.charCodeAt(a) << s, a++;
        return e = (a - a % 4) / 4, s = a % 4 * 8, o[e] = o[e] | 128 << s, o[r - 2] = n << 3, o[r - 1] = n >>> 29, 
        o;
    }(t), s = 1732584193, a = 4023233417, u = 2562383102, l = 271733878, e = 0; e < v.length; e += 16) n = s, 
    i = a, r = u, o = l, a = m(a = m(a = m(a = m(a = p(a = p(a = p(a = p(a = d(a = d(a = d(a = d(a = f(a = f(a = f(a = f(a, u = f(u, l = f(l, s = f(s, a, u, l, v[e + 0], 7, 3614090360), a, u, v[e + 1], 12, 3905402710), s, a, v[e + 2], 17, 606105819), l, s, v[e + 3], 22, 3250441966), u = f(u, l = f(l, s = f(s, a, u, l, v[e + 4], 7, 4118548399), a, u, v[e + 5], 12, 1200080426), s, a, v[e + 6], 17, 2821735955), l, s, v[e + 7], 22, 4249261313), u = f(u, l = f(l, s = f(s, a, u, l, v[e + 8], 7, 1770035416), a, u, v[e + 9], 12, 2336552879), s, a, v[e + 10], 17, 4294925233), l, s, v[e + 11], 22, 2304563134), u = f(u, l = f(l, s = f(s, a, u, l, v[e + 12], 7, 1804603682), a, u, v[e + 13], 12, 4254626195), s, a, v[e + 14], 17, 2792965006), l, s, v[e + 15], 22, 1236535329), u = d(u, l = d(l, s = d(s, a, u, l, v[e + 1], 5, 4129170786), a, u, v[e + 6], 9, 3225465664), s, a, v[e + 11], 14, 643717713), l, s, v[e + 0], 20, 3921069994), u = d(u, l = d(l, s = d(s, a, u, l, v[e + 5], 5, 3593408605), a, u, v[e + 10], 9, 38016083), s, a, v[e + 15], 14, 3634488961), l, s, v[e + 4], 20, 3889429448), u = d(u, l = d(l, s = d(s, a, u, l, v[e + 9], 5, 568446438), a, u, v[e + 14], 9, 3275163606), s, a, v[e + 3], 14, 4107603335), l, s, v[e + 8], 20, 1163531501), u = d(u, l = d(l, s = d(s, a, u, l, v[e + 13], 5, 2850285829), a, u, v[e + 2], 9, 4243563512), s, a, v[e + 7], 14, 1735328473), l, s, v[e + 12], 20, 2368359562), u = p(u, l = p(l, s = p(s, a, u, l, v[e + 5], 4, 4294588738), a, u, v[e + 8], 11, 2272392833), s, a, v[e + 11], 16, 1839030562), l, s, v[e + 14], 23, 4259657740), u = p(u, l = p(l, s = p(s, a, u, l, v[e + 1], 4, 2763975236), a, u, v[e + 4], 11, 1272893353), s, a, v[e + 7], 16, 4139469664), l, s, v[e + 10], 23, 3200236656), u = p(u, l = p(l, s = p(s, a, u, l, v[e + 13], 4, 681279174), a, u, v[e + 0], 11, 3936430074), s, a, v[e + 3], 16, 3572445317), l, s, v[e + 6], 23, 76029189), u = p(u, l = p(l, s = p(s, a, u, l, v[e + 9], 4, 3654602809), a, u, v[e + 12], 11, 3873151461), s, a, v[e + 15], 16, 530742520), l, s, v[e + 2], 23, 3299628645), u = m(u, l = m(l, s = m(s, a, u, l, v[e + 0], 6, 4096336452), a, u, v[e + 7], 10, 1126891415), s, a, v[e + 14], 15, 2878612391), l, s, v[e + 5], 21, 4237533241), u = m(u, l = m(l, s = m(s, a, u, l, v[e + 12], 6, 1700485571), a, u, v[e + 3], 10, 2399980690), s, a, v[e + 10], 15, 4293915773), l, s, v[e + 1], 21, 2240044497), u = m(u, l = m(l, s = m(s, a, u, l, v[e + 8], 6, 1873313359), a, u, v[e + 15], 10, 4264355552), s, a, v[e + 6], 15, 2734768916), l, s, v[e + 13], 21, 1309151649), u = m(u, l = m(l, s = m(s, a, u, l, v[e + 4], 6, 4149444226), a, u, v[e + 11], 10, 3174756917), s, a, v[e + 2], 15, 718787259), l, s, v[e + 9], 21, 3951481745), 
    s = h(s, n), a = h(a, i), u = h(u, r), l = h(l, o);
    return (g(s) + g(a) + g(u) + g(l)).toLowerCase();
}, /*
*   JavaScript interface for the SoundCloud Player widget
*   Author: Matas Petrikas, matas@soundcloud.com
*   Copyright (c) 2009  SoundCloud Ltd.
*   Licensed under the MIT license:
*   http://www.opensource.org/licenses/mit-license.php
*/
function() {
    var t = /msie/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent);
    window.soundcloud = {
        version: "0.1",
        debug: !1,
        _listeners: [],
        _redispatch: function(t, e, n) {
            var i, r = this._listeners[t] || [], o = "soundcloud:" + t;
            try {
                i = this.getPlayer(e);
            } catch (i) {
                return void (this.debug && window.console && console.error("unable to dispatch widget event " + t + " for the widget id " + e, n, i));
            }
            window.jQuery ? jQuery(i).trigger(o, [ n ]) : window.Prototype && $(i).fire(o, n);
            for (var s = 0, a = r.length; s < a; s += 1) r[s].apply(i, [ i, n ]);
            this.debug && window.console && console.log(o, t, e, n);
        },
        addEventListener: function(t, e) {
            this._listeners[t] || (this._listeners[t] = []), this._listeners[t].push(e);
        },
        removeEventListener: function(t, e) {
            for (var n = this._listeners[t] || [], i = 0, r = n.length; i < r; i += 1) n[i] === e && n.splice(i, 1);
        },
        getPlayer: function(e) {
            var n;
            try {
                if (!e) throw "The SoundCloud Widget DOM object needs an id atribute, please refer to SoundCloud Widget API documentation.";
                if (n = t ? window[e] : document[e]) {
                    if (n.api_getFlashId) return n;
                    throw "The SoundCloud Widget External Interface is not accessible. Check that allowscriptaccess is set to 'always' in embed code";
                }
                throw "The SoundCloud Widget with an id " + e + " couldn't be found";
            } catch (t) {
                throw console && console.error && console.error(t), t;
            }
        },
        onPlayerReady: function(t, e) {
            this._redispatch("onPlayerReady", t, e);
        },
        onMediaStart: function(t, e) {
            this._redispatch("onMediaStart", t, e);
        },
        onMediaEnd: function(t, e) {
            this._redispatch("onMediaEnd", t, e);
        },
        onMediaPlay: function(t, e) {
            this._redispatch("onMediaPlay", t, e);
        },
        onMediaPause: function(t, e) {
            this._redispatch("onMediaPause", t, e);
        },
        onMediaBuffering: function(t, e) {
            this._redispatch("onMediaBuffering", t, e);
        },
        onMediaSeek: function(t, e) {
            this._redispatch("onMediaSeek", t, e);
        },
        onMediaDoneBuffering: function(t, e) {
            this._redispatch("onMediaDoneBuffering", t, e);
        },
        onPlayerError: function(t, e) {
            this._redispatch("onPlayerError", t, e);
        }
    };
}(), /*
* RetargetMouseScroll JavaScript Library v0.0.2
* 2009-07-30
* By Eli Grey, http://eligrey.com
*
* http://github.com/eligrey/RetargetMouseScroll/tree/master
*
* Licensed under the X11/MIT License
*   See LICENSE.md or http://eligrey.com/blog/about/license
*/
"function" != typeof this.RetargetMouseScroll && function() {
    var t = [ "DOMMouseScroll", "mousewheel" ];
    this.RetargetMouseScroll = function(e, n, i, r) {
        e || (e = document), n || (n = window), "boolean" != typeof i && (i = !0);
        var o, s, a, u = function(t) {
            !function(t, e, n, i) {
                n && (t.preventDefault ? t.preventDefault() : event.returnValue = !1);
                var r = t.detail || -t.wheelDelta / 40;
                r *= 19, "number" != typeof i || isNaN(i) || (r *= i), e.scrollBy ? e.scrollBy(0, r) : e.scrollTop += r;
            }(t = t || window.event, n, i, r);
        };
        return (o = e.addEventListener) ? (o.call(e, t[0], u, !1), o.call(e, t[1], u, !1)) : (o = e.attachEvent) && o.call(e, "on" + t[1], u), 
        (s = e.removeEventListener) ? a = function() {
            s.call(e, t[0], u, !1), s.call(e, t[1], u, !1);
        } : (s = e.detachEvent) && (a = function() {
            s.call(e, "on" + t[1], u);
        }), {
            restore: a
        };
    };
}.call(this), /*!
 * Copyright (c) 2010 Chris O'Hara <cohara87@gmail.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
function(t, e) {
    "function" == typeof define && define.amd ? define([ "exports" ], e) : e("object" == typeof exports ? exports : t);
}(this, function(t) {
    function e(t) {
        for (var e in h) t = t.replace(h[e], "");
        return t;
    }
    function n(t) {
        var e = /\/\*.*?\*\//g;
        return t.replace(/\s*[a-z-]+\s*=\s*'[^']*'/gi, function(t) {
            return t.replace(e, "");
        }).replace(/\s*[a-z-]+\s*=\s*"[^"]*"/gi, function(t) {
            return t.replace(e, "");
        }).replace(/\s*[a-z-]+\s*=\s*[^\s]+/gi, function(t) {
            return t.replace(e, "");
        });
    }
    function i(t) {
        if (/^(\d?\d?\d)\.(\d?\d?\d)\.(\d?\d?\d)\.(\d?\d?\d)$/.test(t)) {
            return !(t.split(".").sort()[3] > 255);
        }
        return !1;
    }
    function r(t) {
        return !!/^::|^::1|^([a-fA-F0-9]{1,4}::?){1,7}([a-fA-F0-9]{1,4})$/.test(t);
    }
    function o(t) {
        if (t instanceof Date) return t;
        var e = Date.parse(t);
        return isNaN(e) ? null : new Date(e);
    }
    var s = {
        "&nbsp;": " ",
        "&iexcl;": "¡",
        "&cent;": "¢",
        "&pound;": "£",
        "&curren;": "€",
        "&yen;": "¥",
        "&brvbar;": "Š",
        "&sect;": "§",
        "&uml;": "š",
        "&copy;": "©",
        "&ordf;": "ª",
        "&laquo;": "«",
        "&not;": "¬",
        "&shy;": "­",
        "&reg;": "®",
        "&macr;": "¯",
        "&deg;": "°",
        "&plusmn;": "±",
        "&sup2;": "²",
        "&sup3;": "³",
        "&acute;": "Ž",
        "&micro;": "µ",
        "&para;": "¶",
        "&middot;": "·",
        "&cedil;": "ž",
        "&sup1;": "¹",
        "&ordm;": "º",
        "&raquo;": "»",
        "&frac14;": "Œ",
        "&frac12;": "œ",
        "&frac34;": "Ÿ",
        "&iquest;": "¿",
        "&Agrave;": "À",
        "&Aacute;": "Á",
        "&Acirc;": "Â",
        "&Atilde;": "Ã",
        "&Auml;": "Ä",
        "&Aring;": "Å",
        "&AElig;": "Æ",
        "&Ccedil;": "Ç",
        "&Egrave;": "È",
        "&Eacute;": "É",
        "&Ecirc;": "Ê",
        "&Euml;": "Ë",
        "&Igrave;": "Ì",
        "&Iacute;": "Í",
        "&Icirc;": "Î",
        "&Iuml;": "Ï",
        "&ETH;": "Ð",
        "&Ntilde;": "Ñ",
        "&Ograve;": "Ò",
        "&Oacute;": "Ó",
        "&Ocirc;": "Ô",
        "&Otilde;": "Õ",
        "&Ouml;": "Ö",
        "&times;": "×",
        "&Oslash;": "Ø",
        "&Ugrave;": "Ù",
        "&Uacute;": "Ú",
        "&Ucirc;": "Û",
        "&Uuml;": "Ü",
        "&Yacute;": "Ý",
        "&THORN;": "Þ",
        "&szlig;": "ß",
        "&agrave;": "à",
        "&aacute;": "á",
        "&acirc;": "â",
        "&atilde;": "ã",
        "&auml;": "ä",
        "&aring;": "å",
        "&aelig;": "æ",
        "&ccedil;": "ç",
        "&egrave;": "è",
        "&eacute;": "é",
        "&ecirc;": "ê",
        "&euml;": "ë",
        "&igrave;": "ì",
        "&iacute;": "í",
        "&icirc;": "î",
        "&iuml;": "ï",
        "&eth;": "ð",
        "&ntilde;": "ñ",
        "&ograve;": "ò",
        "&oacute;": "ó",
        "&ocirc;": "ô",
        "&otilde;": "õ",
        "&ouml;": "ö",
        "&divide;": "÷",
        "&oslash;": "ø",
        "&ugrave;": "ù",
        "&uacute;": "ú",
        "&ucirc;": "û",
        "&uuml;": "ü",
        "&yacute;": "ý",
        "&thorn;": "þ",
        "&yuml;": "ÿ",
        "&quot;": '"',
        "&lt;": "<",
        "&gt;": ">",
        "&apos;": "'",
        "&minus;": "−",
        "&circ;": "ˆ",
        "&tilde;": "˜",
        "&Scaron;": "Š",
        "&lsaquo;": "‹",
        "&OElig;": "Œ",
        "&lsquo;": "‘",
        "&rsquo;": "’",
        "&ldquo;": "“",
        "&rdquo;": "”",
        "&bull;": "•",
        "&ndash;": "–",
        "&mdash;": "—",
        "&trade;": "™",
        "&scaron;": "š",
        "&rsaquo;": "›",
        "&oelig;": "œ",
        "&Yuml;": "Ÿ",
        "&fnof;": "ƒ",
        "&Alpha;": "Α",
        "&Beta;": "Β",
        "&Gamma;": "Γ",
        "&Delta;": "Δ",
        "&Epsilon;": "Ε",
        "&Zeta;": "Ζ",
        "&Eta;": "Η",
        "&Theta;": "Θ",
        "&Iota;": "Ι",
        "&Kappa;": "Κ",
        "&Lambda;": "Λ",
        "&Mu;": "Μ",
        "&Nu;": "Ν",
        "&Xi;": "Ξ",
        "&Omicron;": "Ο",
        "&Pi;": "Π",
        "&Rho;": "Ρ",
        "&Sigma;": "Σ",
        "&Tau;": "Τ",
        "&Upsilon;": "Υ",
        "&Phi;": "Φ",
        "&Chi;": "Χ",
        "&Psi;": "Ψ",
        "&Omega;": "Ω",
        "&alpha;": "α",
        "&beta;": "β",
        "&gamma;": "γ",
        "&delta;": "δ",
        "&epsilon;": "ε",
        "&zeta;": "ζ",
        "&eta;": "η",
        "&theta;": "θ",
        "&iota;": "ι",
        "&kappa;": "κ",
        "&lambda;": "λ",
        "&mu;": "μ",
        "&nu;": "ν",
        "&xi;": "ξ",
        "&omicron;": "ο",
        "&pi;": "π",
        "&rho;": "ρ",
        "&sigmaf;": "ς",
        "&sigma;": "σ",
        "&tau;": "τ",
        "&upsilon;": "υ",
        "&phi;": "φ",
        "&chi;": "χ",
        "&psi;": "ψ",
        "&omega;": "ω",
        "&thetasym;": "ϑ",
        "&upsih;": "ϒ",
        "&piv;": "ϖ",
        "&ensp;": " ",
        "&emsp;": " ",
        "&thinsp;": " ",
        "&zwnj;": "‌",
        "&zwj;": "‍",
        "&lrm;": "‎",
        "&rlm;": "‏",
        "&sbquo;": "‚",
        "&bdquo;": "„",
        "&dagger;": "†",
        "&Dagger;": "‡",
        "&hellip;": "…",
        "&permil;": "‰",
        "&prime;": "′",
        "&Prime;": "″",
        "&oline;": "‾",
        "&frasl;": "⁄",
        "&euro;": "€",
        "&image;": "ℑ",
        "&weierp;": "℘",
        "&real;": "ℜ",
        "&alefsym;": "ℵ",
        "&larr;": "←",
        "&uarr;": "↑",
        "&rarr;": "→",
        "&darr;": "↓",
        "&harr;": "↔",
        "&crarr;": "↵",
        "&lArr;": "⇐",
        "&uArr;": "⇑",
        "&rArr;": "⇒",
        "&dArr;": "⇓",
        "&hArr;": "⇔",
        "&forall;": "∀",
        "&part;": "∂",
        "&exist;": "∃",
        "&empty;": "∅",
        "&nabla;": "∇",
        "&isin;": "∈",
        "&notin;": "∉",
        "&ni;": "∋",
        "&prod;": "∏",
        "&sum;": "∑",
        "&lowast;": "∗",
        "&radic;": "√",
        "&prop;": "∝",
        "&infin;": "∞",
        "&ang;": "∠",
        "&and;": "∧",
        "&or;": "∨",
        "&cap;": "∩",
        "&cup;": "∪",
        "&int;": "∫",
        "&there4;": "∴",
        "&sim;": "∼",
        "&cong;": "≅",
        "&asymp;": "≈",
        "&ne;": "≠",
        "&equiv;": "≡",
        "&le;": "≤",
        "&ge;": "≥",
        "&sub;": "⊂",
        "&sup;": "⊃",
        "&nsub;": "⊄",
        "&sube;": "⊆",
        "&supe;": "⊇",
        "&oplus;": "⊕",
        "&otimes;": "⊗",
        "&perp;": "⊥",
        "&sdot;": "⋅",
        "&lceil;": "⌈",
        "&rceil;": "⌉",
        "&lfloor;": "⌊",
        "&rfloor;": "⌋",
        "&lang;": "〈",
        "&rang;": "〉",
        "&loz;": "◊",
        "&spades;": "♠",
        "&clubs;": "♣",
        "&hearts;": "♥",
        "&diams;": "♦"
    }, a = function(t) {
        if (!~t.indexOf("&")) return t;
        for (var e in s) t = t.replace(new RegExp(e, "g"), s[e]);
        return t = t.replace(/&#x(0*[0-9a-f]{2,5});?/gi, function(t, e) {
            return String.fromCharCode(parseInt(+e, 16));
        }), t = t.replace(/&#([0-9]{2,4});?/gi, function(t, e) {
            return String.fromCharCode(+e);
        }), t = t.replace(/&amp;/g, "&");
    }, u = function(t) {
        t = (t = t.replace(/&/g, "&amp;")).replace(/'/g, "&#39;");
        for (var e in s) t = t.replace(new RegExp(s[e], "g"), e);
        return t;
    };
    t.entities = {
        encode: u,
        decode: a
    };
    var l = {
        "document.cookie": "",
        "document.write": "",
        ".parentNode": "",
        ".innerHTML": "",
        "window.location": "",
        "-moz-binding": "",
        "\x3c!--": "&lt;!--",
        "--\x3e": "--&gt;",
        "<![CDATA[": "&lt;![CDATA["
    }, c = {
        "javascript\\s*:": "",
        "expression\\s*(\\(|&\\#40;)": "",
        "vbscript\\s*:": "",
        "Redirect\\s+302": ""
    }, h = [ /%0[0-8bcef]/g, /%1[0-9a-f]/g, /[\x00-\x08]/g, /\x0b/g, /\x0c/g, /[\x0e-\x1f]/g ], f = [ "javascript", "expression", "vbscript", "script", "applet", "alert", "document", "write", "cookie", "window" ];
    t.xssClean = function(i, r) {
        if ("object" == typeof i) {
            for (var o in i) i[o] = t.xssClean(i[o]);
            return i;
        }
        i = (i = (i = (i = (i = e(i)).replace(/\&([a-z\_0-9]+)\=([a-z\_0-9]+)/i, "!*$^#(@*#&$1=$2")).replace(/(&\#?[0-9a-z]{2,})([\x00-\x20])*;?/i, "$1;$2")).replace(/(&\#x?)([0-9A-F]+);?/i, "$1;$2")).replace("!*$^#(@*#&", "&");
        try {
            i = decodeURIComponent(i);
        } catch (t) {}
        var s = i = (i = e(i = i.replace(/[a-z]+=([\'\"]).*?\1/gi, function(t, e) {
            return t.replace(e, function(t) {
                return t.replace(">", "&gt;").replace("<", "&lt;").replace("\\", "\\\\");
            }(e));
        }))).replace("\t", " ");
        for (var o in l) i = i.replace(o, l[o]);
        for (var o in c) i = i.replace(new RegExp(o, "i"), c[o]);
        for (var o in f) {
            var a = f[o].split("").join("\\s*") + "\\s*";
            i = i.replace(new RegExp("(" + a + ")(\\W)", "ig"), function(t, e, n) {
                return e.replace(/\s+/g, "") + n;
            });
        }
        do {
            var u = i;
            i.match(/<a/i) && (i = i.replace(/<a\s+([^>]*?)(>|$)/gi, function(t, e, i) {
                return e = n(e.replace("<", "").replace(">", "")), t.replace(e, e.replace(/href=.*?(alert\(|alert&\#40;|javascript\:|charset\=|window\.|document\.|\.cookie|<script|<xss|base64\s*,)/gi, ""));
            })), i.match(/<img/i) && (i = i.replace(/<img\s+([^>]*?)(\s?\/?>|$)/gi, function(t, e, i) {
                return e = n(e.replace("<", "").replace(">", "")), t.replace(e, e.replace(/src=.*?(alert\(|alert&\#40;|javascript\:|charset\=|window\.|document\.|\.cookie|<script|<xss|base64\s*,)/gi, ""));
            })), (i.match(/script/i) || i.match(/xss/i)) && (i = i.replace(/<(\/*)(script|xss)(.*?)\>/gi, ""));
        } while (u != i);
        event_handlers = [ "[^a-z_-]on\\w*" ], r || event_handlers.push("xmlns"), i = i.replace(new RegExp("<([^><]+?)(" + event_handlers.join("|") + ")(\\s*=\\s*[^><]*)([><]*)", "i"), "<$1$4"), 
        naughty = "alert|applet|audio|basefont|base|behavior|bgsound|blink|body|embed|expression|form|frameset|frame|head|html|ilayer|iframe|input|isindex|layer|link|meta|object|plaintext|style|script|textarea|title|video|xml|xss", 
        i = (i = i.replace(new RegExp("<(/*\\s*)(" + naughty + ")([^><]*)([><]*)", "gi"), function(t, e, n, i, r) {
            return "&lt;" + e + n + i + r.replace(">", "&gt;").replace("<", "&lt;");
        })).replace(/(alert|cmd|passthru|eval|exec|expression|system|fopen|fsockopen|file|file_get_contents|readfile|unlink)(\s*)\((.*?)\)/gi, "$1$2&#40;$3&#41;");
        for (var o in l) i = i.replace(o, l[o]);
        for (var o in c) i = i.replace(new RegExp(o, "i"), c[o]);
        if (r && i !== s) throw new Error("Image may contain XSS");
        return i;
    };
    var d = t.Validator = function() {};
    d.prototype.check = function(t, e) {
        return this.str = void 0 === t || null === t || isNaN(t) && void 0 === t.length ? "" : t + "", this.msg = e, 
        this._errors = this._errors || [], this;
    }, d.prototype.validate = d.prototype.check, d.prototype.assert = d.prototype.check, d.prototype.error = function(t) {
        throw new Error(t);
    }, d.prototype.isAfter = function(t) {
        t = t || new Date();
        var e = o(this.str), n = o(t);
        return e && n && e >= n ? this : this.error(this.msg || "Invalid date");
    }, d.prototype.isBefore = function(t) {
        t = t || new Date();
        var e = o(this.str), n = o(t);
        return e && n && e <= n ? this : this.error(this.msg || "Invalid date");
    }, d.prototype.isEmail = function() {
        return this.str.match(/^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/) ? this : this.error(this.msg || "Invalid email");
    }, d.prototype.isCreditCard = function() {
        if (this.str = this.str.replace(/[^0-9]+/g, ""), !this.str.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)) return this.error(this.msg || "Invalid credit card");
        for (var t, e, n = 0, i = !1, r = this.length - 1; r >= 0; r--) t = this.substring(r, r + 1), e = parseInt(t, 10), 
        n += i && (e *= 2) >= 10 ? e % 10 + 1 : e, i = !i;
        return n % 10 != 0 ? this.error(this.msg || "Invalid credit card") : this;
    }, d.prototype.isUrl = function() {
        return !this.str.match(/^(?!mailto:)(?:(?:https?|ftp):\/\/)?(?:\S+(?::\S*)?@)?(?:(?:(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))|localhost)(?::\d{2,5})?(?:\/[^\s]*)?$/i) || this.str.length > 2083 ? this.error(this.msg || "Invalid URL") : this;
    }, d.prototype.isIPv4 = function() {
        return i(this.str) ? this : this.error(this.msg || "Invalid IP");
    }, d.prototype.isIPv6 = function() {
        return r(this.str) ? this : this.error(this.msg || "Invalid IP");
    }, d.prototype.isIP = function() {
        return i(this.str) || r(this.str) ? this : this.error(this.msg || "Invalid IP");
    }, d.prototype.isAlpha = function() {
        return this.str.match(/^[a-zA-Z]+$/) ? this : this.error(this.msg || "Invalid characters");
    }, d.prototype.isAlphanumeric = function() {
        return this.str.match(/^[a-zA-Z0-9]+$/) ? this : this.error(this.msg || "Invalid characters");
    }, d.prototype.isNumeric = function() {
        return this.str.match(/^-?[0-9]+$/) ? this : this.error(this.msg || "Invalid number");
    }, d.prototype.isHexadecimal = function() {
        return this.str.match(/^[0-9a-fA-F]+$/) ? this : this.error(this.msg || "Invalid hexadecimal");
    }, d.prototype.isHexColor = function() {
        return this.str.match(/^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/) ? this : this.error(this.msg || "Invalid hexcolor");
    }, d.prototype.isLowercase = function() {
        return this.str !== this.str.toLowerCase() ? this.error(this.msg || "Invalid characters") : this;
    }, d.prototype.isUppercase = function() {
        return this.str !== this.str.toUpperCase() ? this.error(this.msg || "Invalid characters") : this;
    }, d.prototype.isInt = function() {
        return this.str.match(/^(?:-?(?:0|[1-9][0-9]*))$/) ? this : this.error(this.msg || "Invalid integer");
    }, d.prototype.isDecimal = function() {
        return this.str.match(/^(?:-?(?:0|[1-9][0-9]*))?(?:\.[0-9]*)?$/) ? this : this.error(this.msg || "Invalid decimal");
    }, d.prototype.isDivisibleBy = function(t) {
        return parseFloat(this.str) % parseInt(t, 10) == 0;
    }, d.prototype.isFloat = function() {
        return this.isDecimal();
    }, d.prototype.notNull = function() {
        return "" === this.str ? this.error(this.msg || "String is empty") : this;
    }, d.prototype.isNull = function() {
        return "" !== this.str ? this.error(this.msg || "String is not empty") : this;
    }, d.prototype.notEmpty = function() {
        return this.str.match(/^[\s\t\r\n]*$/) ? this.error(this.msg || "String is whitespace") : this;
    }, d.prototype.equals = function(t) {
        return this.str != t ? this.error(this.msg || "Not equal") : this;
    }, d.prototype.contains = function(t) {
        return -1 !== this.str.indexOf(t) && t ? this : this.error(this.msg || "Invalid characters");
    }, d.prototype.notContains = function(t) {
        return this.str.indexOf(t) >= 0 ? this.error(this.msg || "Invalid characters") : this;
    }, d.prototype.regex = d.prototype.is = function(t, e) {
        return "RegExp" !== Object.prototype.toString.call(t).slice(8, -1) && (t = new RegExp(t, e)), this.str.match(t) ? this : this.error(this.msg || "Invalid characters");
    }, d.prototype.notRegex = d.prototype.not = function(t, e) {
        return "RegExp" !== Object.prototype.toString.call(t).slice(8, -1) && (t = new RegExp(t, e)), this.str.match(t) && this.error(this.msg || "Invalid characters"), 
        this;
    }, d.prototype.len = function(t, e) {
        return this.str.length < t ? this.error(this.msg || "String is too small") : void 0 !== typeof e && this.str.length > e ? this.error(this.msg || "String is too large") : this;
    }, d.prototype.isUUID = function(t) {
        var e;
        return e = 3 == t || "v3" == t ? /[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i : 4 == t || "v4" == t ? /[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i : 5 == t || "v5" == t ? /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i : /[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i, 
        this.str.match(e) ? this : this.error(this.msg || "Not a UUID");
    }, d.prototype.isUUIDv3 = function() {
        return this.isUUID(3);
    }, d.prototype.isUUIDv4 = function() {
        return this.isUUID(4);
    }, d.prototype.isUUIDv5 = function() {
        return this.isUUID(5);
    }, d.prototype.isDate = function() {
        var t = Date.parse(this.str);
        return isNaN(t) ? this.error(this.msg || "Not a date") : this;
    }, d.prototype.isIn = function(t) {
        return t && "function" == typeof t.indexOf ? ~t.indexOf(this.str) ? this : this.error(this.msg || "Unexpected value") : this.error(this.msg || "Invalid in() argument");
    }, d.prototype.notIn = function(t) {
        return t && "function" == typeof t.indexOf ? -1 !== t.indexOf(this.str) ? this.error(this.msg || "Unexpected value") : this : this.error(this.msg || "Invalid notIn() argument");
    }, d.prototype.min = function(t) {
        var e = parseFloat(this.str);
        return !isNaN(e) && e < t ? this.error(this.msg || "Invalid number") : this;
    }, d.prototype.max = function(t) {
        var e = parseFloat(this.str);
        return !isNaN(e) && e > t ? this.error(this.msg || "Invalid number") : this;
    };
    var p = t.Filter = function() {};
    return p.prototype.modify = function(t) {
        this.str = t;
    }, p.prototype.convert = p.prototype.sanitize = function(t) {
        return this.str = null == t ? "" : t + "", this;
    }, p.prototype.xss = function(e) {
        return this.modify(t.xssClean(this.str, e)), this.str;
    }, p.prototype.entityDecode = function() {
        return this.modify(a(this.str)), this.str;
    }, p.prototype.entityEncode = function() {
        return this.modify(u(this.str)), this.str;
    }, p.prototype.escape = function() {
        return this.modify(this.str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;")), 
        this.str;
    }, p.prototype.ltrim = function(t) {
        return t = t || "\\r\\n\\t\\s", this.modify(this.str.replace(new RegExp("^[" + t + "]+", "g"), "")), 
        this.str;
    }, p.prototype.rtrim = function(t) {
        return t = t || "\\r\\n\\t\\s", this.modify(this.str.replace(new RegExp("[" + t + "]+$", "g"), "")), 
        this.str;
    }, p.prototype.trim = function(t) {
        return t = t || "\\r\\n\\t\\s", this.modify(this.str.replace(new RegExp("^[" + t + "]+|[" + t + "]+$", "g"), "")), 
        this.str;
    }, p.prototype.ifNull = function(t) {
        return this.str && "" !== this.str || this.modify(t), this.str;
    }, p.prototype.toFloat = function() {
        return this.modify(parseFloat(this.str)), this.str;
    }, p.prototype.toInt = function(t) {
        return t = t || 10, this.modify(parseInt(this.str, t)), this.str;
    }, p.prototype.toBoolean = function() {
        return this.str && "0" != this.str && "false" != this.str && "" != this.str ? this.modify(!0) : this.modify(!1), 
        this.str;
    }, p.prototype.toBooleanStrict = function() {
        return "1" == this.str || "true" == this.str ? this.modify(!0) : this.modify(!1), this.str;
    }, t.sanitize = t.convert = function(e) {
        return new t.Filter().sanitize(e);
    }, t.check = t.validate = t.assert = function(e, n) {
        return new t.Validator().check(e, n);
    }, t;
}), function(t, e) {
    "use strict";
    var n = "vendor", i = "version", r = "architecture", o = function(t, e) {
        var n = {};
        for (var i in t) e[i] && e[i].length % 2 == 0 ? n[i] = e[i].concat(t[i]) : n[i] = t[i];
        return n;
    }, s = function(t, e) {
        return "string" == typeof t && -1 !== e.toLowerCase().indexOf(t.toLowerCase());
    }, a = function(t) {
        return t.toLowerCase();
    }, u = function(t) {
        return "string" == typeof t ? t.split(".")[0] : void 0;
    }, l = {
        rgx: function() {
            for (var t, e, n, i, r, o, s, a = 0, u = arguments; a < u.length && !o; ) {
                var l = u[a], c = u[a + 1];
                if (void 0 === t) {
                    t = {};
                    for (i in c) c.hasOwnProperty(i) && ("object" == typeof (r = c[i]) ? t[r[0]] = void 0 : t[r] = void 0);
                }
                for (e = n = 0; e < l.length && !o; ) if (o = l[e++].exec(this.getUA())) for (i = 0; i < c.length; i++) s = o[++n], 
                "object" == typeof (r = c[i]) && r.length > 0 ? 2 == r.length ? "function" == typeof r[1] ? t[r[0]] = r[1].call(this, s) : t[r[0]] = r[1] : 3 == r.length ? "function" != typeof r[1] || r[1].exec && r[1].test ? t[r[0]] = s ? s.replace(r[1], r[2]) : void 0 : t[r[0]] = s ? r[1].call(this, s, r[2]) : void 0 : 4 == r.length && (t[r[0]] = s ? r[3].call(this, s.replace(r[1], r[2])) : void 0) : t[r] = s || void 0;
                a += 2;
            }
            return t;
        },
        str: function(t, e) {
            for (var n in e) if ("object" == typeof e[n] && e[n].length > 0) {
                for (var i = 0; i < e[n].length; i++) if (s(e[n][i], t)) return "?" === n ? void 0 : n;
            } else if (s(e[n], t)) return "?" === n ? void 0 : n;
            return t;
        }
    }, c = {
        oldsafari: {
            version: {
                "1.0": "/8",
                1.2: "/1",
                1.3: "/3",
                "2.0": "/412",
                "2.0.2": "/416",
                "2.0.3": "/417",
                "2.0.4": "/419",
                "?": "/"
            }
        }
    }, h = {
        amazon: {
            model: {
                "Fire Phone": [ "SD", "KF" ]
            }
        },
        sprint: {
            model: {
                "Evo Shift 4G": "7373KT"
            },
            vendor: {
                HTC: "APA",
                Sprint: "Sprint"
            }
        }
    }, f = {
        windows: {
            version: {
                ME: "4.90",
                "NT 3.11": "NT3.51",
                "NT 4.0": "NT4.0",
                2e3: "NT 5.0",
                XP: [ "NT 5.1", "NT 5.2" ],
                Vista: "NT 6.0",
                7: "NT 6.1",
                8: "NT 6.2",
                8.1: "NT 6.3",
                10: [ "NT 6.4", "NT 10.0" ],
                RT: "ARM"
            }
        }
    }, d = {
        browser: [ [ /(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i ], [ "name", i ], [ /(OPiOS)[\/\s]+([\w\.]+)/i ], [ [ "name", "Opera Mini" ], i ], [ /\s(opr)\/([\w\.]+)/i ], [ [ "name", "Opera" ], i ], [ /(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]+)*/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs)\/([\w\.-]+)/i ], [ "name", i ], [ /(trident).+rv[:\s]([\w\.]+).+like\sgecko/i ], [ [ "name", "IE" ], i ], [ /(edge)\/((\d+)?[\w\.]+)/i ], [ "name", i ], [ /(yabrowser)\/([\w\.]+)/i ], [ [ "name", "Yandex" ], i ], [ /(comodo_dragon)\/([\w\.]+)/i ], [ [ "name", /_/g, " " ], i ], [ /(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i, /(qqbrowser)[\/\s]?([\w\.]+)/i ], [ "name", i ], [ /(uc\s?browser)[\/\s]?([\w\.]+)/i, /ucweb.+(ucbrowser)[\/\s]?([\w\.]+)/i, /JUC.+(ucweb)[\/\s]?([\w\.]+)/i ], [ [ "name", "UCBrowser" ], i ], [ /(dolfin)\/([\w\.]+)/i ], [ [ "name", "Dolphin" ], i ], [ /((?:android.+)crmo|crios)\/([\w\.]+)/i ], [ [ "name", "Chrome" ], i ], [ /XiaoMi\/MiuiBrowser\/([\w\.]+)/i ], [ i, [ "name", "MIUI Browser" ] ], [ /android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)/i ], [ i, [ "name", "Android Browser" ] ], [ /FBAV\/([\w\.]+);/i ], [ i, [ "name", "Facebook" ] ], [ /fxios\/([\w\.-]+)/i ], [ i, [ "name", "Firefox" ] ], [ /version\/([\w\.]+).+?mobile\/\w+\s(safari)/i ], [ i, [ "name", "Mobile Safari" ] ], [ /version\/([\w\.]+).+?(mobile\s?safari|safari)/i ], [ i, "name" ], [ /webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i ], [ "name", [ i, l.str, c.oldsafari.version ] ], [ /(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i ], [ "name", i ], [ /(navigator|netscape)\/([\w\.-]+)/i ], [ [ "name", "Netscape" ], i ], [ /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]+)*/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i ], [ "name", i ] ],
        cpu: [ [ /(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i ], [ [ r, "amd64" ] ], [ /(ia32(?=;))/i ], [ [ r, a ] ], [ /((?:i[346]|x)86)[;\)]/i ], [ [ r, "ia32" ] ], [ /windows\s(ce|mobile);\sppc;/i ], [ [ r, "arm" ] ], [ /((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i ], [ [ r, /ower/, "", a ] ], [ /(sun4\w)[;\)]/i ], [ [ r, "sparc" ] ], [ /((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i ], [ [ r, a ] ] ],
        device: [ [ /\((ipad|playbook);[\w\s\);-]+(rim|apple)/i ], [ "model", n, [ "type", "tablet" ] ], [ /applecoremedia\/[\w\.]+ \((ipad)/ ], [ "model", [ n, "Apple" ], [ "type", "tablet" ] ], [ /(apple\s{0,1}tv)/i ], [ [ "model", "Apple TV" ], [ n, "Apple" ] ], [ /(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i ], [ n, "model", [ "type", "tablet" ] ], [ /(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i ], [ "model", [ n, "Amazon" ], [ "type", "tablet" ] ], [ /(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i ], [ [ "model", l.str, h.amazon.model ], [ n, "Amazon" ], [ "type", "mobile" ] ], [ /\((ip[honed|\s\w*]+);.+(apple)/i ], [ "model", n, [ "type", "mobile" ] ], [ /\((ip[honed|\s\w*]+);/i ], [ "model", [ n, "Apple" ], [ "type", "mobile" ] ], [ /(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i ], [ n, "model", [ "type", "mobile" ] ], [ /\(bb10;\s(\w+)/i ], [ "model", [ n, "BlackBerry" ], [ "type", "mobile" ] ], [ /android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7)/i ], [ "model", [ n, "Asus" ], [ "type", "tablet" ] ], [ /(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i ], [ [ n, "Sony" ], [ "model", "Xperia Tablet" ], [ "type", "tablet" ] ], [ /(?:sony)?(?:(?:(?:c|d)\d{4})|(?:so[-l].+))\sbuild\//i ], [ [ n, "Sony" ], [ "model", "Xperia Phone" ], [ "type", "mobile" ] ], [ /\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i ], [ n, "model", [ "type", "console" ] ], [ /android.+;\s(shield)\sbuild/i ], [ "model", [ n, "Nvidia" ], [ "type", "console" ] ], [ /(playstation\s[34portablevi]+)/i ], [ "model", [ n, "Sony" ], [ "type", "console" ] ], [ /(sprint\s(\w+))/i ], [ [ n, l.str, h.sprint.vendor ], [ "model", l.str, h.sprint.model ], [ "type", "mobile" ] ], [ /(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i ], [ n, "model", [ "type", "tablet" ] ], [ /(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, /(zte)-(\w+)*/i, /(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i ], [ n, [ "model", /_/g, " " ], [ "type", "mobile" ] ], [ /(nexus\s9)/i ], [ "model", [ n, "HTC" ], [ "type", "tablet" ] ], [ /[\s\(;](xbox(?:\sone)?)[\s\);]/i ], [ "model", [ n, "Microsoft" ], [ "type", "console" ] ], [ /(kin\.[onetw]{3})/i ], [ [ "model", /\./g, " " ], [ n, "Microsoft" ], [ "type", "mobile" ] ], [ /\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w+)*/i, /(XT\d{3,4}) build\//i, /(nexus\s[6])/i ], [ "model", [ n, "Motorola" ], [ "type", "mobile" ] ], [ /android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i ], [ "model", [ n, "Motorola" ], [ "type", "tablet" ] ], [ /android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n8000|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i ], [ [ n, "Samsung" ], "model", [ "type", "tablet" ] ], [ /((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-n900))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i, /sec-((sgh\w+))/i ], [ [ n, "Samsung" ], "model", [ "type", "mobile" ] ], [ /(samsung);smarttv/i ], [ n, "model", [ "type", "smarttv" ] ], [ /\(dtv[\);].+(aquos)/i ], [ "model", [ n, "Sharp" ], [ "type", "smarttv" ] ], [ /sie-(\w+)*/i ], [ "model", [ n, "Siemens" ], [ "type", "mobile" ] ], [ /(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]+)*/i ], [ [ n, "Nokia" ], "model", [ "type", "mobile" ] ], [ /android\s3\.[\s\w;-]{10}(a\d{3})/i ], [ "model", [ n, "Acer" ], [ "type", "tablet" ] ], [ /android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i ], [ [ n, "LG" ], "model", [ "type", "tablet" ] ], [ /(lg) netcast\.tv/i ], [ n, "model", [ "type", "smarttv" ] ], [ /(nexus\s[45])/i, /lg[e;\s\/-]+(\w+)*/i ], [ "model", [ n, "LG" ], [ "type", "mobile" ] ], [ /android.+(ideatab[a-z0-9\-\s]+)/i ], [ "model", [ n, "Lenovo" ], [ "type", "tablet" ] ], [ /linux;.+((jolla));/i ], [ n, "model", [ "type", "mobile" ] ], [ /((pebble))app\/[\d\.]+\s/i ], [ n, "model", [ "type", "wearable" ] ], [ /android.+;\s(glass)\s\d/i ], [ "model", [ n, "Google" ], [ "type", "wearable" ] ], [ /android.+(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:one|one[\s_]plus)?[\s_]*(?:\d\w)?)\s+build/i ], [ [ "model", /_/g, " " ], [ n, "Xiaomi" ], [ "type", "mobile" ] ], [ /\s(tablet)[;\/\s]/i, /\s(mobile)[;\/\s]/i ], [ [ "type", a ], n, "model" ] ],
        engine: [ [ /windows.+\sedge\/([\w\.]+)/i ], [ i, [ "name", "EdgeHTML" ] ], [ /(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i ], [ "name", i ], [ /rv\:([\w\.]+).*(gecko)/i ], [ i, "name" ] ],
        os: [ [ /microsoft\s(windows)\s(vista|xp)/i ], [ "name", i ], [ /(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i ], [ "name", [ i, l.str, f.windows.version ] ], [ /(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i ], [ [ "name", "Windows" ], [ i, l.str, f.windows.version ] ], [ /\((bb)(10);/i ], [ [ "name", "BlackBerry" ], i ], [ /(blackberry)\w*\/?([\w\.]+)*/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i, /linux;.+(sailfish);/i ], [ "name", i ], [ /(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i ], [ [ "name", "Symbian" ], i ], [ /\((series40);/i ], [ "name" ], [ /mozilla.+\(mobile;.+gecko.+firefox/i ], [ [ "name", "Firefox OS" ], i ], [ /(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w+)*/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?([\w\.-]+)*/i, /(hurd|linux)\s?([\w\.]+)*/i, /(gnu)\s?([\w\.]+)*/i ], [ "name", i ], [ /(cros)\s[\w]+\s([\w\.]+\w)/i ], [ [ "name", "Chromium OS" ], i ], [ /(sunos)\s?([\w\.]+\d)*/i ], [ [ "name", "Solaris" ], i ], [ /\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i ], [ "name", i ], [ /(ip[honead]+)(?:.*os\s([\w]+)*\slike\smac|;\sopera)/i ], [ [ "name", "iOS" ], [ i, /_/g, "." ] ], [ /(mac\sos\sx)\s?([\w\s\.]+\w)*/i, /(macintosh|mac(?=_powerpc)\s)/i ], [ [ "name", "Mac OS" ], [ i, /_/g, "." ] ], [ /((?:open)?solaris)[\/\s-]?([\w\.]+)*/i, /(haiku)\s(\w+)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i, /(unix)\s?([\w\.]+)*/i ], [ "name", i ] ]
    }, p = function(e, n) {
        if (!(this instanceof p)) return new p(e, n).getResult();
        var i = e || (t && t.navigator && t.navigator.userAgent ? t.navigator.userAgent : ""), r = n ? o(d, n) : d;
        return this.getBrowser = function() {
            var t = l.rgx.apply(this, r.browser);
            return t.major = u(t.version), t;
        }, this.getCPU = function() {
            return l.rgx.apply(this, r.cpu);
        }, this.getDevice = function() {
            return l.rgx.apply(this, r.device);
        }, this.getEngine = function() {
            return l.rgx.apply(this, r.engine);
        }, this.getOS = function() {
            return l.rgx.apply(this, r.os);
        }, this.getResult = function() {
            return {
                ua: this.getUA(),
                browser: this.getBrowser(),
                engine: this.getEngine(),
                os: this.getOS(),
                device: this.getDevice(),
                cpu: this.getCPU()
            };
        }, this.getUA = function() {
            return i;
        }, this.setUA = function(t) {
            return i = t, this;
        }, this;
    };
    p.VERSION = "0.7.10", p.BROWSER = {
        NAME: "name",
        MAJOR: "major",
        VERSION: i
    }, p.CPU = {
        ARCHITECTURE: r
    }, p.DEVICE = {
        MODEL: "model",
        VENDOR: n,
        TYPE: "type",
        CONSOLE: "console",
        MOBILE: "mobile",
        SMARTTV: "smarttv",
        TABLET: "tablet",
        WEARABLE: "wearable",
        EMBEDDED: "embedded"
    }, p.ENGINE = {
        NAME: "name",
        VERSION: i
    }, p.OS = {
        NAME: "name",
        VERSION: i
    }, "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = p), 
    exports.UAParser = p) : "function" == typeof define && define.amd ? define("ua-parser-js", [], function() {
        return p;
    }) : t.UAParser = p;
    var m = t.jQuery || t.Zepto;
    if (void 0 !== m) {
        var g = new p();
        m.ua = g.getResult(), m.ua.get = function() {
            return g.getUA();
        }, m.ua.set = function(t) {
            g.setUA(t);
            var e = g.getResult();
            for (var n in e) m.ua[n] = e[n];
        };
    }
}("object" == typeof window ? window : this), function() {
    function t(t, a) {
        t = t || "", a = a || {};
        for (var u in e) e.hasOwnProperty(u) && (a.autoFix && (a["fix_" + u] = !0), a.fix = a.fix || a["fix_" + u]);
        var l = document.createElement("div"), c = function(e) {
            t = e + t;
        }, h = {
            comment: /^<!--/,
            endTag: /^<\//,
            atomicTag: /^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,
            startTag: /^</,
            chars: /^[^<]/
        }, f = {
            comment: function() {
                var e = t.indexOf("--\x3e");
                if (e >= 0) return {
                    content: t.substr(4, e - 1),
                    length: e + 3
                };
            },
            endTag: function() {
                var e = t.match(i);
                if (e) return {
                    tagName: e[1],
                    length: e[0].length
                };
            },
            atomicTag: function() {
                var e = f.startTag();
                if (e) {
                    var n = t.slice(e.length);
                    if (n.match(new RegExp("</\\s*" + e.tagName + "\\s*>", "i"))) {
                        var i = n.match(new RegExp("([\\s\\S]*?)</\\s*" + e.tagName + "\\s*>", "i"));
                        if (i) return {
                            tagName: e.tagName,
                            attrs: e.attrs,
                            content: i[1],
                            length: i[0].length + e.length
                        };
                    }
                }
            },
            startTag: function() {
                if (-1 === t.indexOf(">")) return null;
                var e = t.match(n);
                if (e) {
                    var i = {}, s = {}, a = e[2];
                    return e[2].replace(r, function(t, e) {
                        if (arguments[2] || arguments[3] || arguments[4] || arguments[5]) if (arguments[5]) i[arguments[5]] = "", 
                        s[e] = !0; else {
                            var n = arguments[2] || arguments[3] || arguments[4] || o.test(e) && e || "";
                            i[e] = function(t) {
                                return "string" == typeof t && -1 !== t.indexOf("&") ? (l.innerHTML = t, l.textContent || l.innerText || t) : t;
                            }(n);
                        } else i[e] = null;
                        a = a.replace(t, "");
                    }), {
                        tagName: e[1],
                        attrs: i,
                        booleanAttrs: s,
                        rest: a,
                        unary: !!e[3],
                        length: e[0].length
                    };
                }
            },
            chars: function() {
                var e = t.indexOf("<");
                return {
                    length: e >= 0 ? e : t.length
                };
            }
        }, d = function() {
            for (var e in h) if (h[e].test(t)) {
                s && console.log("suspected " + e);
                var n = f[e]();
                return n ? (s && console.log("parsed " + e, n), n.type = n.type || e, n.text = t.substr(0, n.length), 
                t = t.slice(n.length), n) : null;
            }
        };
        return a.fix && function() {
            var e = /^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i, n = /^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i, i = [];
            i.last = function() {
                return this[this.length - 1];
            }, i.lastTagNameEq = function(t) {
                var e = this.last();
                return e && e.tagName && e.tagName.toUpperCase() === t.toUpperCase();
            }, i.containsTagName = function(t) {
                for (var e, n = 0; e = this[n]; n++) if (e.tagName === t) return !0;
                return !1;
            };
            var r = function(t) {
                return t && "startTag" === t.type && (t.unary = e.test(t.tagName) || t.unary, t.html5Unary = !/\/>$/.test(t.text)), 
                t;
            }, o = d, s = function() {
                var t = i.pop();
                c("</" + t.tagName + ">");
            }, u = {
                startTag: function(t) {
                    var e = t.tagName;
                    "TR" === e.toUpperCase() && i.lastTagNameEq("TABLE") ? (c("<TBODY>"), h()) : a.fix_selfClose && n.test(e) && i.containsTagName(e) ? i.lastTagNameEq(e) ? s() : (c("</" + t.tagName + ">"), 
                    h()) : t.unary || i.push(t);
                },
                endTag: function(t) {
                    i.last() ? a.fix_tagSoup && !i.lastTagNameEq(t.tagName) ? s() : i.pop() : a.fix_tagSoup && l();
                }
            }, l = function() {
                o(), h();
            }, h = function() {
                var e = function() {
                    var e = t, n = r(o());
                    return t = e, n;
                }();
                e && u[e.type] && u[e.type](e);
            };
            d = function() {
                return h(), r(o());
            };
        }(), {
            append: function(e) {
                t += e;
            },
            readToken: d,
            readTokens: function(t) {
                for (var e; e = d(); ) if (t[e.type] && !1 === t[e.type](e)) return;
            },
            clear: function() {
                var e = t;
                return t = "", e;
            },
            rest: function() {
                return t;
            },
            stack: []
        };
    }
    var e = function() {
        var t, e = {}, n = this.document.createElement("div");
        return t = "<P><I></P></I>", n.innerHTML = t, e.tagSoup = n.innerHTML !== t, n.innerHTML = "<P><i><P></P></i></P>", 
        e.selfClose = 2 === n.childNodes.length, e;
    }(), n = /^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/, i = /^<\/([\-A-Za-z0-9_]+)[^>]*>/, r = /(?:([\-A-Za-z0-9_]+)\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))|(?:([\-A-Za-z0-9_]+)(\s|$)+)/g, o = /^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i, s = !1;
    t.supports = e, t.tokenToString = function(t) {
        var e = {
            comment: function(t) {
                return "\x3c!--" + t.content;
            },
            endTag: function(t) {
                return "</" + t.tagName + ">";
            },
            atomicTag: function(t) {
                return s && console.log(t), e.startTag(t) + t.content + e.endTag(t);
            },
            startTag: function(t) {
                var e = "<" + t.tagName;
                for (var n in t.attrs) {
                    e += " " + n;
                    var i = t.attrs[n];
                    void 0 !== t.booleanAttrs && void 0 !== t.booleanAttrs[n] || (e += '="' + (i ? i.replace(/(^|[^\\])"/g, '$1\\"') : "") + '"');
                }
                return t.rest && (e += t.rest), e + (t.unary && !t.html5Unary ? "/>" : ">");
            },
            chars: function(t) {
                return t.text;
            }
        };
        return e[t.type](t);
    }, t.escapeAttributes = function(t) {
        var e = {};
        for (var n in t) {
            var i = t[n];
            e[n] = i && i.replace(/(^|[^\\])"/g, '$1\\"');
        }
        return e;
    };
    for (var a in e) t.browserHasFlaw = t.browserHasFlaw || !e[a] && a;
    this.htmlParser = t;
}(), //     postscribe is freely distributable under the MIT license.
function() {
    function t() {}
    function e(t) {
        return t !== h && null !== t;
    }
    function n(t) {
        return "function" == typeof t;
    }
    function i(t, e, n) {
        var i, r = t && t.length || 0;
        for (i = 0; i < r; i++) e.call(n, t[i], i);
    }
    function r(t, e, n) {
        var i;
        for (i in t) t.hasOwnProperty(i) && e.call(n, i, t[i]);
    }
    function o(t, e) {
        return r(e, function(e, n) {
            t[e] = n;
        }), t;
    }
    function s(t) {
        try {
            return f.call(t);
        } catch (n) {
            var e = [];
            return i(t, function(t) {
                e.push(t);
            }), e;
        }
    }
    function a(t) {
        return !!(t && "tagName" in t) && !!~t.tagName.toLowerCase().indexOf("script");
    }
    function u(t) {
        return !!(t && "tagName" in t) && !!~t.tagName.toLowerCase().indexOf("style");
    }
    var l = {
        afterAsync: t,
        afterDequeue: t,
        afterStreamStart: t,
        afterWrite: t,
        autoFix: !0,
        beforeEnqueue: t,
        beforeWriteToken: function(t) {
            return t;
        },
        beforeWrite: function(t) {
            return t;
        },
        done: t,
        error: function(t) {
            throw t;
        },
        releaseAsync: !1
    }, c = this, h = void 0;
    if (!c.postscribe) {
        var f = Array.prototype.slice, d = function(t) {
            return t[t.length - 1];
        }, p = function() {
            function t(t, n, i) {
                var r = c + n;
                if (2 === arguments.length) {
                    var o = t.getAttribute(r);
                    return e(o) ? String(o) : o;
                }
                e(i) && "" !== i ? t.setAttribute(r, i) : t.removeAttribute(r);
            }
            function l(e, n) {
                var i = e.ownerDocument;
                o(this, {
                    root: e,
                    options: n,
                    win: i.defaultView || i.parentWindow,
                    doc: i,
                    parser: htmlParser("", {
                        autoFix: n.autoFix
                    }),
                    actuals: [ e ],
                    proxyHistory: "",
                    proxyRoot: i.createElement(e.nodeName),
                    scriptStack: [],
                    writeQueue: []
                }), t(this.proxyRoot, "proxyof", 0);
            }
            var c = "data-ps-";
            return l.prototype.write = function() {
                [].push.apply(this.writeQueue, arguments);
                for (var t; !this.deferredRemote && this.writeQueue.length; ) n(t = this.writeQueue.shift()) ? this.callFunction(t) : this.writeImpl(t);
            }, l.prototype.callFunction = function(t) {
                var e = {
                    type: "function",
                    value: t.name || t.toString()
                };
                this.onScriptStart(e), t.call(this.win, this.doc), this.onScriptDone(e);
            }, l.prototype.writeImpl = function(t) {
                this.parser.append(t);
                for (var e, n, i, r = []; (e = this.parser.readToken()) && !(n = a(e)) && !(i = u(e)); ) (e = this.options.beforeWriteToken(e)) && r.push(e);
                this.writeStaticTokens(r), n && this.handleScriptToken(e), i && this.handleStyleToken(e);
            }, l.prototype.writeStaticTokens = function(t) {
                var e = this.buildChunk(t);
                if (e.actual) return e.html = this.proxyHistory + e.actual, this.proxyHistory += e.proxy, this.proxyRoot.innerHTML = e.html, 
                this.walkChunk(), e;
            }, l.prototype.buildChunk = function(t) {
                var e = this.actuals.length, n = [], r = [], o = [];
                return i(t, function(t) {
                    var i = htmlParser.tokenToString(t);
                    if (n.push(i), t.attrs) {
                        if (!/^noscript$/i.test(t.tagName)) {
                            var s = e++;
                            r.push(i.replace(/(\/?>)/, " " + c + "id=" + s + " $1")), "ps-script" !== t.attrs.id && "ps-style" !== t.attrs.id && o.push("atomicTag" === t.type ? "" : "<" + t.tagName + " " + c + "proxyof=" + s + (t.unary ? " />" : ">"));
                        }
                    } else r.push(i), o.push("endTag" === t.type ? i : "");
                }), {
                    tokens: t,
                    raw: n.join(""),
                    actual: r.join(""),
                    proxy: o.join("")
                };
            }, l.prototype.walkChunk = function() {
                for (var n, i = [ this.proxyRoot ]; e(n = i.shift()); ) {
                    var r = 1 === n.nodeType;
                    if (!(r && t(n, "proxyof"))) {
                        r && (this.actuals[t(n, "id")] = n, t(n, "id", null));
                        var o = n.parentNode && t(n.parentNode, "proxyof");
                        o && this.actuals[o].appendChild(n);
                    }
                    i.unshift.apply(i, s(n.childNodes));
                }
            }, l.prototype.handleScriptToken = function(t) {
                var e = this.parser.clear();
                if (e && this.writeQueue.unshift(e), t.src = t.attrs.src || t.attrs.SRC, t = this.options.beforeWriteToken(t)) {
                    t.src && this.scriptStack.length ? this.deferredRemote = t : this.onScriptStart(t);
                    var n = this;
                    this.writeScriptToken(t, function() {
                        n.onScriptDone(t);
                    });
                }
            }, l.prototype.handleStyleToken = function(t) {
                var e = this.parser.clear();
                e && this.writeQueue.unshift(e), t.type = t.attrs.type || t.attrs.TYPE || "text/css", (t = this.options.beforeWriteToken(t)) && this.writeStyleToken(t), 
                e && this.write();
            }, l.prototype.writeStyleToken = function(t) {
                var e = this.buildStyle(t);
                this.insertStyle(e), t.content && (e.styleSheet && !e.sheet ? e.styleSheet.cssText = t.content : e.appendChild(this.doc.createTextNode(t.content)));
            }, l.prototype.buildStyle = function(t) {
                var e = this.doc.createElement(t.tagName);
                return e.setAttribute("type", t.type), r(t.attrs, function(t, n) {
                    e.setAttribute(t, n);
                }), e;
            }, l.prototype.insertStyle = function(t) {
                this.writeImpl('<span id="ps-style"/>');
                var e = this.doc.getElementById("ps-style");
                e.parentNode.replaceChild(t, e);
            }, l.prototype.onScriptStart = function(t) {
                t.outerWrites = this.writeQueue, this.writeQueue = [], this.scriptStack.unshift(t);
            }, l.prototype.onScriptDone = function(t) {
                t === this.scriptStack[0] ? (this.scriptStack.shift(), this.write.apply(this, t.outerWrites), !this.scriptStack.length && this.deferredRemote && (this.onScriptStart(this.deferredRemote), 
                this.deferredRemote = null)) : this.options.error({
                    message: "Bad script nesting or script finished twice"
                });
            }, l.prototype.writeScriptToken = function(t, e) {
                var n = this.buildScript(t), i = this.shouldRelease(n), r = this.options.afterAsync;
                t.src && (n.src = t.src, this.scriptLoadHandler(n, i ? r : function() {
                    e(), r();
                }));
                try {
                    this.insertScript(n), t.src && !i || e();
                } catch (t) {
                    this.options.error(t), e();
                }
            }, l.prototype.buildScript = function(t) {
                var e = this.doc.createElement(t.tagName);
                return r(t.attrs, function(t, n) {
                    e.setAttribute(t, n);
                }), t.content && (e.text = t.content), e;
            }, l.prototype.insertScript = function(t) {
                this.writeImpl('<span id="ps-script"/>');
                var e = this.doc.getElementById("ps-script");
                e.parentNode.replaceChild(t, e);
            }, l.prototype.scriptLoadHandler = function(t, e) {
                function n() {
                    t = t.onload = t.onreadystatechange = t.onerror = null;
                }
                function i() {
                    n(), e();
                }
                var r = this.options.error;
                o(t, {
                    onload: function() {
                        i();
                    },
                    onreadystatechange: function() {
                        /^(loaded|complete)$/.test(t.readyState) && i();
                    },
                    onerror: function() {
                        !function(t) {
                            n(), r(t), e();
                        }({
                            message: "remote script failed " + t.src
                        });
                    }
                });
            }, l.prototype.shouldRelease = function(t) {
                return !/^script$/i.test(t.nodeName) || !!(this.options.releaseAsync && t.src && t.hasAttribute("async"));
            }, l;
        }();
        c.postscribe = function() {
            function i() {
                var e, n = h.shift();
                n && ((e = d(n)).afterDequeue(), n.stream = function(e, n, r) {
                    function l(t) {
                        t = r.beforeWrite(t), f.write(t), r.afterWrite(t);
                    }
                    (f = new p(e, r)).id = u++, f.name = r.name || f.id, a.streams[f.name] = f;
                    var c = e.ownerDocument, h = {
                        close: c.close,
                        open: c.open,
                        write: c.write,
                        writeln: c.writeln
                    };
                    o(c, {
                        close: t,
                        open: t,
                        write: function() {
                            return l(s(arguments).join(""));
                        },
                        writeln: function() {
                            return l(s(arguments).join("") + "\n");
                        }
                    });
                    var d = f.win.onerror || t;
                    return f.win.onerror = function(t, e, n) {
                        r.error({
                            msg: t + " - " + e + ":" + n
                        }), d.apply(f.win, arguments);
                    }, f.write(n, function() {
                        o(c, h), f.win.onerror = d, r.done(), f = null, i();
                    }), f;
                }.apply(null, n), e.afterStreamStart());
            }
            function a(o, s, a) {
                n(a) && (a = {
                    done: a
                }), a = function(t, n) {
                    return t = t || {}, r(n, function(n, i) {
                        e(t[n]) || (t[n] = i);
                    }), t;
                }(a, l);
                var u = [ o = /^#/.test(o) ? c.document.getElementById(o.substr(1)) : o.jquery ? o[0] : o, s, a ];
                return o.postscribe = {
                    cancel: function() {
                        u.stream ? u.stream.abort() : u[1] = t;
                    }
                }, a.beforeEnqueue(u), h.push(u), f || i(), o.postscribe;
            }
            var u = 0, h = [], f = null;
            return o(a, {
                streams: {},
                queue: h,
                WriteStream: p
            });
        }();
    }
}(), function(t, e) {
    function n() {
        b = C = w = x = _ = T = I;
    }
    function i(t) {
        return parseFloat(t) || 0;
    }
    function r() {
        k = {
            top: e.pageYOffset,
            left: e.pageXOffset
        };
    }
    function o() {
        if (e.pageXOffset != k.left) return r(), void w();
        e.pageYOffset != k.top && (r(), a());
    }
    function s(t) {
        setTimeout(function() {
            e.pageYOffset != k.top && (k.top = e.pageYOffset, a());
        }, 0);
    }
    function a() {
        for (var t = E.length - 1; t >= 0; t--) u(E[t]);
    }
    function u(t) {
        if (t.inited) {
            var e = k.top <= t.limit.start ? 0 : k.top >= t.limit.end ? 2 : 1;
            t.mode != e && function(t, e) {
                var n = t.node.style;
                switch (e) {
                  case 0:
                    n.position = "absolute", n.left = t.offset.left + "px", n.right = t.offset.right + "px", n.top = t.offset.top + "px", 
                    n.bottom = "auto", n.width = "auto", n.marginLeft = 0, n.marginRight = 0, n.marginTop = 0;
                    break;

                  case 1:
                    n.position = "fixed", n.left = t.box.left + "px", n.right = t.box.right + "px", n.top = t.css.top, n.bottom = "auto", 
                    n.width = "auto", n.marginLeft = 0, n.marginRight = 0, n.marginTop = 0;
                    break;

                  case 2:
                    n.position = "absolute", n.left = t.offset.left + "px", n.right = t.offset.right + "px", n.top = "auto", 
                    n.bottom = 0, n.width = "auto", n.marginLeft = 0, n.marginRight = 0;
                }
                t.mode = e;
            }(t, e);
        }
    }
    function l(t) {
        isNaN(parseFloat(t.computed.top)) || t.isCell || "none" == t.computed.display || (t.inited = !0, t.clone || function(t) {
            t.clone = document.createElement("div");
            var e = t.node.nextSibling || t.node, n = t.clone.style;
            n.height = t.height + "px", n.width = t.width + "px", n.marginTop = t.computed.marginTop, n.marginBottom = t.computed.marginBottom, 
            n.marginLeft = t.computed.marginLeft, n.marginRight = t.computed.marginRight, n.padding = n.border = n.borderSpacing = 0, 
            n.fontSize = "1em", n.position = "static", n.cssFloat = t.computed.cssFloat, t.node.parentNode.insertBefore(t.clone, e);
        }(t), "absolute" != t.parent.computed.position && "relative" != t.parent.computed.position && (t.parent.node.style.position = "relative"), 
        u(t), t.parent.height = t.parent.node.offsetHeight, t.docOffsetTop = p(t.clone));
    }
    function c(t) {
        var e = !0;
        t.clone && function(t) {
            t.clone.parentNode.removeChild(t.clone), t.clone = void 0;
        }(t), function(t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
        }(t.node.style, t.css);
        for (var n = E.length - 1; n >= 0; n--) if (E[n].node !== t.node && E[n].parent.node === t.parent.node) {
            e = !1;
            break;
        }
        e && (t.parent.node.style.position = t.parent.css.position), t.mode = -1;
    }
    function h() {
        for (var t = E.length - 1; t >= 0; t--) l(E[t]);
    }
    function f() {
        for (var t = E.length - 1; t >= 0; t--) c(E[t]);
    }
    function d(t) {
        var e = getComputedStyle(t), n = t.parentNode, r = getComputedStyle(n), o = t.style.position;
        t.style.position = "relative";
        var s = {
            top: e.top,
            marginTop: e.marginTop,
            marginBottom: e.marginBottom,
            marginLeft: e.marginLeft,
            marginRight: e.marginRight,
            cssFloat: e.cssFloat,
            display: e.display
        }, a = {
            top: i(e.top),
            marginBottom: i(e.marginBottom),
            paddingLeft: i(e.paddingLeft),
            paddingRight: i(e.paddingRight),
            borderLeftWidth: i(e.borderLeftWidth),
            borderRightWidth: i(e.borderRightWidth)
        };
        t.style.position = o;
        var u = {
            position: t.style.position,
            top: t.style.top,
            bottom: t.style.bottom,
            left: t.style.left,
            right: t.style.right,
            width: t.style.width,
            marginTop: t.style.marginTop,
            marginLeft: t.style.marginLeft,
            marginRight: t.style.marginRight
        }, l = m(t), c = m(n), h = {
            node: n,
            css: {
                position: n.style.position
            },
            computed: {
                position: r.position
            },
            numeric: {
                borderLeftWidth: i(r.borderLeftWidth),
                borderRightWidth: i(r.borderRightWidth),
                borderTopWidth: i(r.borderTopWidth),
                borderBottomWidth: i(r.borderBottomWidth)
            }
        };
        return {
            node: t,
            box: {
                left: l.win.left,
                right: N.clientWidth - l.win.right
            },
            offset: {
                top: l.win.top - c.win.top - h.numeric.borderTopWidth,
                left: l.win.left - c.win.left - h.numeric.borderLeftWidth,
                right: -l.win.right + c.win.right - h.numeric.borderRightWidth
            },
            css: u,
            isCell: "table-cell" == e.display,
            computed: s,
            numeric: a,
            width: l.win.right - l.win.left,
            height: l.win.bottom - l.win.top,
            mode: -1,
            inited: !1,
            parent: h,
            limit: {
                start: l.doc.top - a.top,
                end: c.doc.top + n.offsetHeight - h.numeric.borderBottomWidth - t.offsetHeight - a.top - a.marginBottom
            }
        };
    }
    function p(t) {
        for (var e = 0; t; ) e += t.offsetTop, t = t.offsetParent;
        return e;
    }
    function m(t) {
        var n = t.getBoundingClientRect();
        return {
            doc: {
                top: n.top + e.pageYOffset,
                left: n.left + e.pageXOffset
            },
            win: n
        };
    }
    function g() {
        S = setInterval(function() {
            !function() {
                for (var t = E.length - 1; t >= 0; t--) if (E[t].inited) {
                    var e = Math.abs(p(E[t].clone) - E[t].docOffsetTop), n = Math.abs(E[t].parent.node.offsetHeight - E[t].parent.height);
                    if (e >= 2 || n >= 2) return !1;
                }
                return !0;
            }() && w();
        }, 500);
    }
    function v() {
        clearInterval(S);
    }
    function y() {
        A && (document[P] ? v() : g());
    }
    function b() {
        A || (r(), h(), e.addEventListener("scroll", o), e.addEventListener("wheel", s), e.addEventListener("resize", w), 
        e.addEventListener("orientationchange", w), t.addEventListener(M, y), g(), A = !0);
    }
    function w() {
        if (A) {
            f();
            for (var t = E.length - 1; t >= 0; t--) E[t] = d(E[t].node);
            h();
        }
    }
    function x() {
        e.removeEventListener("scroll", o), e.removeEventListener("wheel", s), e.removeEventListener("resize", w), 
        e.removeEventListener("orientationchange", w), t.removeEventListener(M, y), v(), A = !1;
    }
    function _() {
        x(), f();
    }
    function T() {
        for (_(); E.length; ) E.pop();
    }
    function C(t) {
        for (var e = E.length - 1; e >= 0; e--) if (E[e].node === t) return;
        var n = d(t);
        E.push(n), A ? l(n) : b();
    }
    var k, S, E = [], A = !1, N = t.documentElement, I = function() {}, P = "hidden", M = "visibilitychange";
    void 0 !== t.webkitHidden && (P = "webkitHidden", M = "webkitvisibilitychange"), e.getComputedStyle || n();
    for (var D = [ "", "-webkit-", "-moz-", "-ms-" ], O = document.createElement("div"), H = D.length - 1; H >= 0; H--) {
        try {
            O.style.position = D[H] + "sticky";
        } catch (t) {}
        "" != O.style.position && n();
    }
    r(), e.Stickyfill = {
        stickies: E,
        add: C,
        remove: function(t) {
            for (var e = E.length - 1; e >= 0; e--) E[e].node === t && (c(E[e]), E.splice(e, 1));
        },
        init: b,
        rebuild: w,
        pause: x,
        stop: _,
        kill: T
    };
}(document, window), window.jQuery && (window.jQuery.fn.Stickyfill = function(t) {
    return this.each(function() {
        Stickyfill.add(this);
    }), this;
});/*  Copyright (C) 2012-2014  Kurt Milam - http://xioup.com | Source: https://gist.github.com/1868955
 *  
 *  This mixin now has its own github repository: https://github.com/kurtmilam/underscoreDeepExtend
 *  It's also available through npm and bower
 *  
 *  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
**/