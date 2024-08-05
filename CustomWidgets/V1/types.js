/*
 * modules/types.js v3.4.0.20230215
 * (c) 2009-2023 Corporate Web Solutions Ltd.
 * All client side / JavaScript code may not be used in any way without a valid JSCharting license.
 * License holder usage is governed by the license.txt terms included with the distribution.
 * To license JSCharting for your own use, please visit jscharting.com 
 */
'use strict'; (function (d) {
    function K(d, b) { function a() { this.constructor = d } Ca(d, b); d.prototype = null === b ? Object.create(b) : (a.prototype = b.prototype, new a) } function db(d, b) {
        function a(a) { return function (b) { return c([a, b]) } } function c(a) {
            if (e) throw new TypeError("Generator is already executing."); for (; g;)try {
                if (e = 1, m && (h = a[0] & 2 ? m["return"] : a[0] ? m["throw"] || ((h = m["return"]) && h.call(m), 0) : m.next) && !(h = h.call(m, a[1])).done) return h; if (m = 0, h) a = [a[0] & 2, h.value]; switch (a[0]) {
                    case 0: case 1: h = a; break; case 4: return g.label++,
                        { value: a[1], done: !1 }; case 5: g.label++; m = a[1]; a = [0]; continue; case 7: a = g.ops.pop(); g.trys.pop(); continue; default: if (!(h = g.trys, h = 0 < h.length && h[h.length - 1]) && (6 === a[0] || 2 === a[0])) { g = 0; continue } if (3 === a[0] && (!h || a[1] > h[0] && a[1] < h[3])) g.label = a[1]; else if (6 === a[0] && g.label < h[1]) g.label = h[1], h = a; else if (h && g.label < h[2]) g.label = h[2], g.ops.push(a); else { h[2] && g.ops.pop(); g.trys.pop(); continue }
                }a = b.call(d, g)
            } catch (n) { a = [6, n], m = 0 } finally { e = h = 0 } if (a[0] & 5) throw a[1]; return { value: a[0] ? a[1] : void 0, done: !0 }
        } var g =
            { label: 0, sent: function () { if (h[0] & 1) throw h[1]; return h[1] }, trys: [], ops: [] }, e, m, h, l; return l = { next: a(0), "throw": a(1), "return": a(2) }, "function" === typeof Symbol && (l[Symbol.iterator] = function () { return this }), l
    } function D(d) { var b = "function" === typeof Symbol && d[Symbol.iterator], a = 0; return b ? b.call(d) : { next: function () { d && a >= d.length && (d = void 0); return { value: d && d[a++], done: !d } } } } function N(d, b) {
        var a = "function" === typeof Symbol && d[Symbol.iterator]; if (!a) return d; d = a.call(d); var c, g = []; try {
            for (; (void 0 === b ||
                0 < b--) && !(c = d.next()).done;)g.push(c.value)
        } catch (m) { var e = { error: m } } finally { try { c && !c.done && (a = d["return"]) && a.call(d) } finally { if (e) throw e.error; } } return g
    } function C() { for (var d = [], b = 0; b < arguments.length; b++)d = d.concat(N(arguments[b])); return d } function ua(d, b) { for (; 0 > d;)d += 360; for (; b < d;)b += 360; return b - d } function dc(e, b, a) {
        function c(c) {
            for (var b = c.rows, l = b || c, k = [], n = [], p = 0, q = 0, r = a.height / l, B = l === e.length, G = 0, A = []; 0 < l;) {
                for (var F = 0, E = [], J = 0; q < e.length;) {
                    var L = e[q], M = L.limits || [0, 0], da = M[0]; M =
                        M[1]; var I = B ? a.width : 1 === c ? a.width / e.length : 0; L = b ? L : h(L, g(r, I), L.innerSize[4] ? I : B ? a.width : d.undefVal); I = L.outerBox; if (!b && (I[2] < da || I[3] < M)) return null; I[0] = F; I[1] = p; L.row = G; L.column = J; if (.001 < F + I[2] - a.width || b && J === c.cols) break; q++; J++; F += I[2]; E.push(L); if (B) break
                } A.push((a.width - F) / (2 * (E.length + 1))); q === e.length ? a.height : p + r; E.length && n.push(E.length); k = k.concat(E); l--; G++; p += r
            } c = f(n); c = m(k) / (1 + c); return { currentBoxes: k, usedSpace: c, emptyUnitWidths: A, rowHeight: r, currentColumns: n }
        } function g(a, c) {
            var b =
                0; d.jsLib.each(e, function (g) { g = h(g, a, c).outerBox[3]; if (!b || b > g) b = g }); return b
        } function f(a) { if (0 === a.length) return 0; var c = 0, b = 0, g = 0; d.jsLib.map(a, function (a, d) { 0 < a && (g++, c += a, b = b > a ? b : a) }); var e = c / g; return d.jsLib.sum(d.jsLib.map(a, function (a) { return 0 < a ? Math.abs(a - e) : 0 })) / (g * b) } function m(a) { var c = d.jsLib.map(a, function (a) { return a.outerBox[2] * a.outerBox[3] }), b = d.jsLib.sum(c), g = b / a.length; a = d.jsLib.sum(d.jsLib.map(c, function (a) { return Math.abs(a - g) })); return (b - a) / l } function h(a, c, b) {
            var g = a.outerBox.slice(0),
            d = a.innerSize.slice(0), e = g[2] - d[0], f = g[3] - d[1], m = d[0] / d[1], h = !!b; if (h) { var l = d[2] ? g[2] : b, k = d[3] ? g[3] : (b - e) / m + f; k > c && (d[3] ? g[3] : c) < k && (h = !1) } h || (k = d[3] ? g[3] : c, l = a.innerSize[4] ? g[2] : d[2] ? g[2] : Math.max(c - f, 0) * m + e); g[2] = l; g[3] = k; d[0] = l - e; d[1] = k - f; return { outerBox: g, innerSize: d }
        } for (var l = a.width * a.height, k, n = e.length, p, q = 0; q <= n; q++)(k = c(q || b)) && k.currentBoxes.length === e.length && (!p || k.usedSpace > p.usedSpace) && (p = k), p || n !== k.currentBoxes.length && q !== n - 1 || (p = k); p = p || k; return ec(d.jsLib.map(p.currentBoxes,
            function (a) { return a.outerBox }), { columnsPerRow: p.currentColumns, unitWidths: p.emptyUnitWidths, rowHeight: p.rowHeight, height: a.height, width: a.width })
    } function ec(e, b) {
        for (var a = [], c = b.columnsPerRow, g = c.length, f = Math.ceil(e.length / g), m = function (a, b) { for (var g = c[a] * a, d = g; d < g + c[a] && d <= e.length; d++)b(d) }, h = function (a) { var c = []; m(a, function (a) { return c.push(e[a][3]) }); return Math.max.apply(Math, C(c)) }, l = function (a) { var c = 0; m(a, function (a) { return c += e[a][2] }); return c }, k = 0, n = 0; n < g; n++)k += h(n); var p = b.height /
            k, q = 0; 1 < p && (n = (b.height - k) / (g + 1), q = n / 2, p = (b.height - n) / k); k = function (g) { var d = l(g), f = b.width / d, k = h(g) * p, n = 0; if (1 < f) { var r = (b.width - d) / (c[g] + 1); n = r / 2; f = (b.width - r) / d } m(g, function (c) { c = e[c][2] * f; a.push([n, q, c, k]); n += c }); q += k }; for (n = 0; n < g; n++)k(n); for (k = 0; k < e.length; k++)n = e[k], e[k] = d.bboxLib.fromCenter(d.bboxLib.center(a[k]), [n[2], n[3]]); return { boxes: e, rows: g, cols: f, spaces: a }
    } function Da(e, b, a) { e = d.bboxLib.ltrbMargins(e, b, a); return [e[1], e[2], e[3], e[0]] } function eb(d, b) {
        d = d[1] + d[3] - b[1]; return 0 < d ? {
            cy: b[1] +
                d / 2, overlap: d
        } : { cy: 0, overlap: 0 }
    } function fc(e, b) { var a = d.bboxLib.bestLayout(e, b, !0), c = a.rows, g = a.cols, f = b.equal, m = b.padding, h = a.maxSize, l = h * m, k, n = [], p = b.width - (f ? l * (g + 1) : 0); b = (b.height - (f ? l * (c + 1) : 0)) / c; h = Math.min(p / g, b); !f && m && (h = 1 >= m ? h - h * m : h - m); for (m = 0; m < c; m++) { var q = Math.min(e - m * g, g), r = p / q; for (k = 0; k < q; k++)n.push({ cx: (k + 1) * r - r / 2 + (f ? l * (k + 1) : 0), cy: (m + 1) * b - b / 2 + (f ? l * (m + 1) : 0), size: h, maxWidth: r, maxHeight: h, innerSize: h / 3 + "%" }) } return { layout: a, boxes: n } } function gc(e, b) {
        var a = new d.pathLib.Path({
            hasLines: e.hasLines,
            hasCurves: e.hasCurves, isClosed: e.isClosed, hasErrors: e.hasErrors
        }), c = [], g = 0; for (e = e.shapes; g < e.length; g++) { for (var f = [], m = { items: f }, h = 0, l = e[g].items; h < l.length; h++) { for (var k = l[h], n = [k[0]], p = 1; p < k.length; p++)n[p] = b(k[p]); f[h] = n } c.push(m) } a.shapes = c; return a
    } function fb(e, b, a) { var c = e.length(), g = 1 / c; b = d.jsLib.def(b) ? b * g : 0; a = d.jsLib.def(a) ? (c - a) * g : 0; return d.pathLib.subPath(e, b, a) } function pa(e, b) {
        void 0 === b && (b = {}); var a = e.currentOptions, c, g = d.jsLib.getValType(a.angle), f = function (a) {
            var b; "string" ===
                d.jsLib.getValType(b = c[a]) && -1 < b.indexOf("%") && (c[a] = e.replaceTokens(c[a]))
        }; "object" === g && (c = d.jsLib.merge({}, a.angle)) ? (d.jsLib.defaults(c, b), d.jsLib.each(["start", "end", "orientation", "sweep"], f), c = Ea(c)) : c = "undefined" !== g ? Ea(a.angle) : Ea(b); return c
    } function Ea(e, b) { var a; if (!b) return gb(e); (a = b ? d.jsLib.evalPath(e, b) : e) && d.jsLib.setPathVal(e, b, gb(a)) } function gb(e) {
        var b, a; switch (d.jsLib.getValType(e)) {
            case "number": var c = !0, g = e; break; case "array": if (2 <= e.length) { var f = c = !0; g = e[0]; var m = e[1] } else 1 ===
                e.length && (g = e[0], c = !0); break; case "object": if (e) { c = typeof (g = e.start) !== d.undef; f = typeof (m = e.end) !== d.undef; var h = typeof (b = e.orientation) !== d.undef, l = typeof (a = d.normalizationUtils.percOrNum(e.sweep, 360)) !== d.undef }
        }e = g; if (c && f) var k = e, n = m; else c && l ? (k = e, n = e + a) : h && l ? (k = b - a / 2, n = k + a) : h && c ? (k = e, n = 2 * (b - e) + e) : h && f ? (n = m, k = m - 2 * (m - b)) : l ? (k = -(a / 2), n = a / 2) : h ? (k = b - 180, n = k + 360) : c ? (k = e, n = k + 360) : f && (n = m, k = n - 360); return { start: k, end: n }
    } function Fa(d) { if (!d.keys) { var b = []; d.forEach(function (a, c) { b.push(c) }); return b } return Array.from(d.keys()) }
    function hc(d) { if (!d.values) { var b = []; d.forEach(function (a) { b.push(a) }); return b } return Array.from(d.values()) } function ic(e) {
        function b(a, c) { return a < c ? -1 : a > c ? 1 : 0 } var a = e.ciManager, c = e.visualizer.layersReversed, g = e.points().map(function (a) { return a.y }); g = [Math.min.apply(Math, C(g)), Math.max.apply(Math, C(g))]; var f = (new d.dataUtil.nest).key("y").entries(e.points().items), m = function (a) { return d.jsLib.find(f, function (c) { return c.key === a + "" }).values }, h = function (c, g) {
            var e = d.parentPropToIds(c.currentOptions.parent),
            f = e.map(function (c) { return a.exists(c)._i }), m = d.parentPropToIds(g.currentOptions.parent), h = m.map(function (c) { return a.exists(c)._i }); return 0 === e.length || 0 === m.length ? b(c._i, g._i) : b(va(f, "min"), va(h, "min"))
        }, l = []; e = function (a) { a = m(a); a.sort(h); l.push.apply(l, C(a)) }; if (c) for (c = g[1]; c >= g[0]; c--)e(c); else for (c = g[0]; c <= g[1]; c++)e(c); return l
    } function hb(d) { if (d) { if ("string" === typeof d) return "all" === d.toLowerCase() ? "all" : "level"; if (d) return "all" === d.with ? "all" : "level" } else return "" } function Ga(e, b, a,
        c, g, f, m) {
            void 0 === m && (m = []); var h = e.series, l = h.indexer, k, n = {}, p = function (a) { if ((a = a.options("annotation")) && a.margin) return d.jsLib.parseMargin(a.margin); a = h.chart.options("defaultAnnotation"); return d.jsLib.parseMargin(a.margin || [3, 3]) }, q = function (a, c) { var b = m.find(function (c) { return c.adjust && c.adjust.id === a.id }); b && (c = c.slice(0), b.adjust.right ? c[1] += b.adjust.right : b.adjust.bottom && (c[2] += b.adjust.bottom)); return c }, r = new ib; b.forEach(function (b) {
                var g = b._i, m = p(b); m = q(b, m); k = h.indexer.getValue("coordinates",
                    g); k.meta; if (e.isPlacedByLayout(b)) { var u = e.getParents(b); r.addVertex(b._i, aa(aa({}, a[g]), { margin: m, _i: g, y: b.y })); n[b._i] = b.y; d.jsLib.each(u, function (a) { a = a._i; var b = g; c && (b = N([b, a], 2), a = b[0], b = b[1]); r.addEdge(a, b) }); if (e.isCompactHierarchy(b)) { var t = e.getChildren(b); u = a[g]; var v = u.totalWidth, w = (v - u.width) / 2; t.forEach(function (c, g) { r.addVertex(c._i, aa(aa({}, a[c._i]), { width: v, margin: [m[0], m[1], m[2], 2 * w], _i: c._i, y: b.y + g + 1 })); n[c._i] = b.y + g + 1; r.addEdge(g ? t[g - 1]._i : b._i, c._i) }) } } !f && e.clearPrevCoord(l.getValue("coordinates",
                        g)); h.indexer.setValue("coordinates", g, k)
            }); b = new jb; b.vertexWidth(function (a) { return a.d.width }).vertexHeight(function (a) { return a.d.height }).vertexTopMargin(function (a) { return a.d.margin[0] }).vertexRightMargin(function (a) { return a.d.margin[1] }).vertexBottomMargin(function (a) { return a.d.margin[2] }).vertexLeftMargin(function (a) { return a.d.margin[3] }).layerMargin(5).layerMargin(5).layerAssignment(function (a) { return n }).ltor("right" === g || "left" === g); var t = b.layout(r), u = [], v = h.userPoints, w = []; h.points().each(function (c) {
                var b =
                    c._i, g = t.vertices[c._i]; g && e.isPlacedByLayout(c) && (h.getPointAttr(v[b]), k = h.indexer.getValue("coordinates", b), b = a[b], g = [g.x - b.width / 2, g.y - b.height / 2, b.width, b.height], d.bboxLib.collideList(u, g) && w.push(c), u.push(g), k.xyz = g)
            }); return { boxes: u, rootBoxes: [], layout: t, overlapPoints: w }
    } function kb(e, b, a, c) {
        b = a.rectPos; var g = e.series; c = g.ctManager; c.isType("gauge", g); var f = "roundcaps" === c.settingVal("columnType", g), m = e.getShapeOptions(g.renderRect); c = g.pane; var h = d.bboxLib.fromRect(g.renderRect), l = c.angleArc();
        e = e.series.xAxis.options("staticColumnWidth"); g = d.bboxLib.center(h); var k = h[3] / 2, n = c.getRadarType(), p = "caPaneRadar" === c.kind; f = p || !f ? {} : { caps: { end: "round", start: "round" } }; m = a.pathOptions = d.jsLib.merge(lb(l, b, h, m, f.caps), { rectPos: b, arcCfg: l }); d.jsLib.def(e) && (h = (m.r + m.innerR) / 2, m.r = h + e / 2, m.innerR = h - e / 2); if ("spider" === n) a = mb(c, b); else if (p) a = d.shapeLib.arc(g[0], g[1], k, k, a.pathOptions = d.jsLib.merge(m, f)); else return { arcShape: a.pathOptions }; return d.shapeLib.flattenD(a)
    } function mb(e, b) {
        b = d.bboxLib.boxPoints(d.bboxLib.fromRect(b),
            "tl,tm,tr,br,bm,bl"); b = d.jsLib.map(b, function (a) { return e.projection.webVal2linxy(a[0], a[1]) }); b = d.shapeLib.pointsToPath(b); return d.shapeLib.flattenD(b) + "Z"
    } function lb(e, b, a, c, g) {
        void 0 === g && (g = {}); a || (a = b.targetBox); var f = d.bboxLib.center(a), m = a[3] / 2; a = a[3] / 2; c = d.jsLib.pick(d.jsLib.evalPath(c, "innerSize"), 0) * m; m = function (a) { return d.trigLib.toRadians(d.mathLib.mapValue(e.start, e.end, 0, 1, a)) }; m = [m(b.x), m(b.x + b.width)]; b.ccw && m.reverse(); var h = d.mathLib.mapValue(c, a, 1, 0, b.y); b = d.mathLib.mapValue(c,
            a, 1, 0, b.y + b.height); h === b && (h += .001); return { start: m[0], end: m[1], open: !1, r: h, innerR: b, cxy: f, caps: g }
    } function jc(e, b, a, c, g, f, m) {
        var h = e.series; a = h.info.type.roundCaps; e = d.jsLib.clone(b.pathOptions); a && (a = d.trigLib.arcCapDegOffset(e.r, e.innerR), e.start -= a, e.end += a); f = kc(f, e, g, m); var l = c[2] / 2; f = d.jsLib.filter(f, function (a) { a = d.trigLib.pointDistance(b.pathOptions.cxy, a.cxy) + g[1] / 2; return !h.isVisible || a <= l }); return d.jsLib.map(f, function (a) {
            var c = d.bboxLib.fromCenter(a.cxy, a.size); c.rotate = a.angle; c.isInside =
                d.isAlignInside(a.alignment); return c
        })
    } function wa(e, b, a) {
        var c = b.metrics(); c.px; var g = c.textSize, f = c.tickLength; e.currentOptions; var m = e.chartArea, h = e.sideIndex(), l = 0 === h || 1 === h, k = m.angleArc(), n = k.end - k.start, p = "caPaneRadar" === m.kind && "spider" === m.getRadarType(); e.tickMetricsData.maxLength; var q = "outside" === d.jsLib.pick(b.options("placement"), "outside"), r = b.options("padding"), t = q ? lc : mc; h = d.bboxLib.fromRect(e.viewState.caRect); var u = d.bboxLib.center(h); h = h[2] / 2; var v = c.angle, w = function (a, c) {
            return d.trigLib.gpdp(u,
                a, c)
        }, x = w(c.angle, h), y = function () { var a = d.trigLib.gpdp_text(x, G + 90, r, f, d.jsLib.map(g, function (a) { return a + r }), t); A = [a[0], a[1], g[0], g[1]] }, z = function (a) { a %= 180; -90 > a ? a += 180 : 90 < a && (a -= 180); return a }; if (e.isHoriz) { var B = [x, w(c.angle, h + (q ? f : -f))]; x = B[1]; var G = q ? v : v + 180; y() } else if (v = void 0, y = e.getValToLin()(b.value()), 360 > n) {
            B = l ? k.end : k.start; v = B - (l ? -90 : 90); G = q ? v : v + 180; x = w(B, e.getCaLen(b.value())); B = [x, d.trigLib.gpdp(x, G, f)]; x = B[1]; b._cxyRotate = z(v); var A = d.bboxLib.fromCenter(d.trigLib.gpdp(x, G, g[0] /
                2 + r), g)
        } else q = e.interpolationAxis, k = void 0, k = q.tickPositions ? d.mathLib.avg(nc(q.tickPositions.all).slice(0, 2)) : q.min, l = q.getValToLin()(k), v = q.valToAngle(k), b._cxyRotate = z(v + 90), d.mathLib.goodNumber(y) && (p ? (e = m.projection.webVal2linxy(l, y), B = [], A = d.bboxLib.fromCenter(e, g)) : (e = e.getCaLen(b.value()), B = [], A = d.bboxLib.fromCenter(w(v, e), g))); m = B.slice(0); e = A.slice(0); m.push.apply(m, C(d.bboxLib.boxPoints(e, "tl,tr,br,bl"))); e = b._bbox = d.bboxLib.bboxFromPoints(m); m = d.jsLib.map(m, function (a) {
            return d.trigLib.pDist(u,
                a)
        }); h = Math.max.apply(Math, C(m)) - h; if (a) return b._positionData.tickPoints = B, b._positionData; a = b._bboxClipped = A.slice(0); a[2] = c.textSize[0]; a[3] = c.textSize[1]; return b._positionData = { tickPoints: B, textBBox: A, rLength: h, bbox: e }
    } function nc(d) { var b, a = []; try { for (var c = D(d), g = c.next(); !g.done; g = c.next()) { var e = g.value; !e.pop && a.push(e) } } catch (h) { var m = { error: h } } finally { try { g && !g.done && (b = c.return) && b.call(c) } finally { if (m) throw m.error; } } return a } function nb(e, b, a, c, g, f, m, h) {
        void 0 === m && (m = [0, 0]); void 0 ===
            h && (h = [0, 0]); var l = "caPaneLinear" === e.kind; if (a.length) {
                var k = e._metrics, n = 0 < g.length ? g : [g], p = { top: "bottom", bottom: "top" }, q = { left: "right", right: "left" }, r = d.bboxLib.fromRect(b.renderRect), t = !g.placement && (l || "funnel" === e.kind || "pie" === e.kind && !c.innerSize || "caPaneRadar" === e.kind); g = 0; if (e.isRadial) { var u = e.angleArc(); g = u.end - u.start } r = d.bboxLib.pad(d.bboxLib.translate(r, h), -2); var v = k.renderBox.slice(0); if (k.clipBounds[3]) {
                    h = k.clipBounds; h = d.bboxLib.toLTRB(k.clipBounds); var w = d.bboxLib.toLTRB(k.shapeBounds);
                    h = [h[0], w[1], h[2], w[3]]; h = d.bboxLib.fromLTRB(h); if (e.isRadial) if (h = k.shapeBounds, e.hasNeedles) { c = d.trigLib.gpdp(d.bboxLib.center(v), u.start + g / 2, v[2] / 4); var x = d.bboxLib.fromCenter(c, [v[2] / 3, v[2] / 3]) } else x = d.bboxLib.pad(v, (1 - c.innerSize) * v[2] / 2); else x = l ? h : k.innerBounds || k.shapeBounds || (v[2] ? v : e.box)
                } else h = e.rootVisuals && e.rootVisuals.innerBox.getBboxArray(); var y; u = function (c, g) {
                    var f = {
                        all: [], top: [], middle: [], middleCenter: [], insideMiddleLeft: [], insideMiddleRight: [], outsideMiddleLeft: [], outsideMiddleRight: [],
                        bottom: [], topLeft: [], topRight: [], topCenter: [], bottomLeft: [], bottomRight: [], bottomCenter: [], userOffsets: []
                    }; y = !1; var m = n.slice(0); m.forEach(function (a, c) { return a._i = c }); var h = "left left,inside center center,inside right,inside right".split(" "); m = d.jsLib.sortBy(m, function (a) { return h.indexOf((a.align || "center") + ("inside" === ob(e, a) ? ",inside" : "")) }); var l = []; m.forEach(function (e, m) {
                        var h = a[e._i]; if (h) {
                            var k = e.align || "center", n = (e.verticalAlign || "top").toLowerCase(), r = (p[n] || n).toLowerCase(), u = (q[k] ||
                                k).toLowerCase(), v = "middle" === n, w = "inside" === (e.placement || (v && "center" !== k && t ? "outside" : "inside")), x = v && w ? g : c, B = void 0; if (h._textAttr.match(/<br\/?>/gi) || !1 === e.autoWrap || e.maxWidth) B = h.setPreliminarySize(!0).getBboxArray(!1, !0); else { h.attr({ maxWidth: d.undefVal }); var z = h.setPreliminarySize(!0).getBboxArray(!1, !0); h.attr({ maxWidth: v ? x[2] : b.renderRect.width }); B = h.setPreliminarySize(!0).getBboxArray(!1, !0); B[2] < z[2] && (y = !0) } h instanceof d.Panel && (z = 0, h.margin.left && (z = h.margin.left.px + h.margin.right.px ||
                                    0), B[2] = h.getOverflowWidth().px + z); var A = d.bboxLib.alignTo(B, x, w ? k : u, k, r, n); x = function (a) { if (n === a && "right" === k) { var c = f[a + "Left"].slice(0); c.push(f[a + "Center"].slice(0)); a = d.bboxLib.bboxUnion(c); A[0] < a[0] && (A[0] = d.bboxLib.rightX(a)) } }; x("top"); x("bottom"); x = !1; "center" === k && v && f.middle.length ? v && f.middle.length ? (A = d.bboxLib.alignAvoidGreedy(A, f.middle, "d"), x = !0) : "top" === n ? (A = d.bboxLib.alignAvoidGreedy(A, f.topCenter, "r"), x = !0) : "bottom" === n && (A = d.bboxLib.alignAvoidGreedy(A, f.bottomCenter, "r"), x = !0) :
                                        "right" === k && v && f.outsideMiddleRight.length ? (A = d.bboxLib.alignAvoidGreedy(A, f.outsideMiddleRight, "d"), x = !0) : "left" === k && v && f.outsideMiddleLeft.length && (A = d.bboxLib.alignAvoidGreedy(A, f.outsideMiddleLeft, "d"), x = !0); B = [0, 0]; r = { offsetX: A[0] + B[0], offsetY: A[1] + B[1], yContentAlignment: r, xContentAlignment: k }; x || (v ? A[1] += m : A[0] += m); A = d.bboxLib.translate(A, B); l[e._i] = A; f.userOffsets.push(B); !w && v && "center" !== k ? (f["left" === k ? "outsideMiddleLeft" : "outsideMiddleRight"].push(A), r.xContentAlignment = u, h.childElements.forEach(function (a) { return a.attr({ xAlignment: u }) })) :
                                            (f[n].push(A), v ? w && ("left" === k ? f.insideMiddleLeft.push(A) : "right" === k ? f.insideMiddleRight.push(A) : f.middleCenter.push(A)) : f[n + d.strLib.upperFirst(k)].push(A)); h.attr(r)
                        }
                    }); f.all = l; if (1 < f.bottom.length) { m = d.bboxLib.bboxUnion(f.bottom); m = d.bboxLib.bottomY(m); var k = c.slice(0); k[3] = m - k[1]; d.jsLib.each(f.bottom, function (a) { var c = d.bboxLib.alignTo(a, k, "center", "center", "bottom", "bottom"); a[1] = c[1] }) } return f
                }; c = u(h, x); if (d.bboxLib.collideAny(c.all) || y) {
                    k = !0; y && !k && (h = d.bboxLib.fromLTRB(w), k = !0, c = u(h, x));
                    g = d.bboxLib.collideAny(c.top); v = d.bboxLib.collideAny(c.bottom); if (g || v) k || (h = d.bboxLib.fromLTRB(w), k = !0, c = u(h, x), g = d.bboxLib.collideAny(c.top), v = d.bboxLib.collideAny(c.bottom)), g && (d.bboxLib.alignBoxesTo(c.topCenter, h, "x", "mcmc"), d.bboxLib.unsquishBoxes(c.topRight, "l"), d.bboxLib.unsquishSnapTo(c.top, h, "r")), v && (d.bboxLib.alignBoxesTo(c.bottomCenter, h, "x", "mcmc"), d.bboxLib.unsquishBoxes(c.bottomRight, "l"), d.bboxLib.unsquishSnapTo(c.bottom, h, "r")); w = function (a, c) {
                        d.bboxLib.collideAny(a) && d.bboxLib.unsquishSnapTo(a,
                            x, "d")
                    }; w(c.middle); w(c.outsideMiddleLeft, l ? e.box : x); w(c.outsideMiddleRight, l ? e.box : x)
                } (function (a) { var c = function (a) { var c; if (a.length) { var b = d.bboxLib.bboxUnion(a), g = d.bboxLib.snapInside(b, r); b = d.bboxLib.offsetBetween(g, b); try { for (var e = D(a), f = e.next(); !f.done; f = e.next())d.bboxLib.translateRef(f.value, b) } catch (da) { var m = { error: da } } finally { try { f && !f.done && (c = e.return) && c.call(e) } finally { if (m) throw m.error; } } } }; c(a.top); c(a.bottom); c(a.middle); c(a.outsideMiddleLeft); c(a.outsideMiddleRight) })(c); if (c.outsideMiddleLeft.length ||
                    c.outsideMiddleRight.length) l ? (d.bboxLib.alignBoxesTo(c.outsideMiddleLeft, e.box, "xy", "mlml"), d.bboxLib.alignBoxesTo(c.outsideMiddleRight, e.box, "xy", "mrmr")) : (d.bboxLib.alignBoxesTo(c.outsideMiddleLeft, h, "xy", "mrml"), d.bboxLib.alignBoxesTo(c.outsideMiddleRight, h, "xy", "mlmr")); c.middle.length && (d.bboxLib.alignBoxesTo(c.middleCenter, x, "y", "mcmc"), d.bboxLib.alignBoxesTo(c.insideMiddleLeft, x, "y", "mcmc"), d.bboxLib.alignBoxesTo(c.insideMiddleRight, x, "y", "mcmc")); d.bboxLib.squishH(c.top, h[0], d.bboxLib.rightX(h));
                d.bboxLib.squishH(c.bottom, h[0], d.bboxLib.rightX(h)); if (l = d.bboxLib.bboxUnion(c.middle)) w = d.bboxLib.bboxUnion(c.bottom), h = d.bboxLib.bboxUnion(c.outsideMiddleRight), k = d.bboxLib.bboxUnion(c.outsideMiddleLeft), u = d.bboxLib.bboxUnion(c.top), w && d.bboxLib.bottomY(l) > w[1] && d.bboxLib.squish(c.bottom, "d", d.bboxLib.bottomY(l)), h && d.bboxLib.rightX(l) > h[0] && d.bboxLib.squish(c.outsideMiddleRight, "r", d.bboxLib.rightX(l)), k && l[0] < d.bboxLib.rightX(k) && d.bboxLib.squish(c.outsideMiddleLeft, "l", l[0]), u && l[1] < d.bboxLib.bottomY(u) &&
                    d.bboxLib.squish(c.top, "u", l[1]); (function (c) { var b = d.jsLib.epa(f, ["animation"]); d.jsLib.each(n, function (g, f) { var e = a[f]; f = c[f]; g = g.offset && d.stylingLib.offsetToAttr(g.offset) || [0, 0]; g = { offsetX: f[0] + m[0] + g[0], offsetY: f[1] + m[1] + g[1] }; b && (g.animation = d.jsLib.copy(b)); e.attr(g) }) })(c.all); e._metrics.labelBoxes = c
            }
    } function qb(e, b, a, c, g, f, m, h) {
        var l = a.childElements[g]; g = d.stylingLib.labelToAttr(d.jsLib.extend({}, e), void 0, d.jsLib.epa(b, ["_series", "0", "info", "style", "base"])); g.autoWrap = g.autoWrap || "default";
        g.val = f; d.jsLib.defaults(g, { xAlignment: "center", padding: 3 }); var k = ob(b, e); f = d.jsLib.evalPath(e, "align") || "center"; var n = d.jsLib.evalPath(e, "verticalAlign") || "top"; e = "middle" === n; k = "inside" === k; a = l || c.textStack().add(a); g.xAlignment = d.undefVal; g.yAlignment = d.undefVal; g.maxWidth = g.maxWidth || m; if (m = d.jsLib.epa(h, ["animation"])) g.animation = d.jsLib.copy(m); a.attr(g); m = a.composeCombinations()[0].minSize; m = [0, 0, m.width.px, m.height.px]; m = d.bboxLib.addTrblMargin(m, oc(a)); m = m.slice(2); f = [f, n]; f = ["top" === f[1] ?
            m[1] : 0, e && !k ? "right" === f[0] ? m[0] : 0 : 0, "bottom" === f[1] ? m[1] : 0, e && !k ? "left" === f[0] ? m[0] : 0 : 0]; b.shapeSize.labelMargin ? d.jsLib.each(f, function (a, c) { b.shapeSize.labelMargin[c] = Math.max(b.shapeSize.labelMargin[c], a) }) : b.shapeSize.labelMargin = f; return this
    } function oc(d) { return d ? (d = d.margin, [d.top.px, d.right.px, d.bottom.px, d.left.px]) : [0, 0, 0, 0] } function ob(e, b) {
        var a = "caPaneLinear" === e.kind; e = !b.placement && (a || "funnel" === e.kind || "pie" === e.kind || "caPaneRadar" === e.kind); a = d.jsLib.evalPath(b, "align") || "center";
        var c = d.jsLib.evalPath(b, "verticalAlign") || "top"; return b.placement || ("middle" === c && "center" !== a && e ? "outside" : "inside")
    } function rb(e, b) {
        if ("needle" === e) {
            var a = b.arc; e = a.cxy; a = a.angle; var c = b.xyz[2], g = b.xyzs[2]; b = a - 90; var f = a + 90, m = 9, h = d.trigLib.gpdp(e, a, c); 0 !== g && (e = d.trigLib.gpdp(e, a, g), m = d.mathLib.mapValue(m, 3, 0, c, g)); e = [d.trigLib.gpdp(e, b, m / 2), d.trigLib.gpdp(h, b, 1.5), d.trigLib.gpdp(h, f, 1.5), d.trigLib.gpdp(e, f, m / 2)]; e = d.shapeLib.flattenD(["M", e[0], "L", e[1], d.shapeLib.arcSegment(h[0], h[1], 1.5, d.trigLib.toRadians(b),
                d.trigLib.toRadians(f)), "L", e[3]]) + "Z"
        } else e = null; return e
    } function sb(e, b) { e = d.jsLib.cloneDeep(e); d.jsLib.merge(b.defaultMinorTick, e.defaultTick); d.jsLib.evalPath(e, "defaultTick.label") && d.jsLib.def(d.jsLib.evalPath(b, "defaultTick.label.visible")) && delete b.defaultTick.label.visible; d.jsLib.evalPath(e, "defaultMinorTick.label") && d.jsLib.def(d.jsLib.evalPath(b, "defaultMinorTick.label.visible")) && delete b.defaultMinorTick.label.visible; d.jsLib.defaultsDeep(e, b); return e } function Ha(e, b, a) {
        void 0 ===
        a && (a = {}); var c = d.trigLib.getPolarPoint, g = d.trigLib.toRadians, f = d.trigLib.toDegrees, m = d.trigLib.lineDistance, h = d.trigLib.pointDistance, l = d.trigLib.angleOfPoints, k = d.jsLib.pick(a.widthFactor, 1), n = { x: 0, y: 0 }, p = e.r, q = e.innerR, r = p - q, t = f(e.start), u = f(e.end - e.start); t = (t + 360) % 360; f = t + u / 2; a.gradientStopAnchor && (b = t + u * a.gradientStopAnchor - f); u = d.jsLib.def(a.pathObj); a = (u ? a.pathObj : d.pathLib.fromString(d.shapeLib.arc(0, 0, 2 * p, 2 * p, d.jsLib.defaults({ cxy: [0, 0] }, e)))).bbox(); u && (a = d.bboxLib.translate(a, [-e.cxy[0],
        -e.cxy[1]])); q = c(0, 0, g(f), q + r / 2); p = c(0, 0, g(t), p); t = a[2]; r = a[3]; b = f + 90 + (b || 0); var v = d.trigLib.getPolarPoint; f = d.trigLib.lineIntersect; var w = d.trigLib.toRadians, x; u = [0, 0, t, r]; var y = d.bboxLib.center(u), z = u[0] + u[2], B = u[1] + u[3]; b = (b + 360) % 360; (x = { 0: [0, 0, 1, 0], 90: [0, 0, 0, 1], 180: [1, 0, 0, 0], 270: [0, 1, 0, 0], 360: [0, 0, 1, 0] }[b]) || (x = { x: y[0], y: y[1] }, v = v(y[0], y[1], w(b - 90), 10), r >= t ? (w = { x: z, y: u[1] }, y = { x: z, y: B }, w = f(x, v, w, y), w.y < u[1] || w.y > B ? (w = { x: u[0], y: u[1] }, y = { x: z, y: u[1] }, w = f(x, v, w, y), t = w.x / z, x = 90 > b || 270 < b ? [0, 1 - t, 1, t,
            0] : [1, t, 0, 1 - t]) : (t = w.y / r, x = 180 < b ? [1 - t, 1, t, 0] : [t, 0, 1 - t, 1])) : (w = { x: u[0], y: u[1] }, y = { x: z, y: u[1] }, w = f(x, v, w, y), w.x < u[0] || w.x > z ? (w = { x: z, y: u[1] }, y = { x: z, y: B }, w = f(x, v, w, y), t = w.y / u[3], x = 180 < b && 315 > b ? [1 - t, 1, t, 0] : [t, 0, 1 - t, 1]) : (t = w.x / t, x = [0, 1 - t, 1, t], 90 < b && (x = [1, t, 0, 1 - t]), 270 < b && (x = [0, 1 - t, 1, t])))); t = x; r = { x: d.mathLib.mapValue(0, 1, a[0], a[0] + a[2], q.x), y: d.mathLib.mapValue(0, 1, a[1], a[1] + a[3], q.y) }; r.x -= .5; r.y -= .5; t[0] += r.x; t[2] += r.x; t[1] += r.y; t[3] += r.y; a = m(n, q, { x: a[0] + t[0] * a[2], y: a[1] + t[1] * a[3] }); m = m(n, q, p) * k / a; e.gradientDistance =
                2 * a; e = l({ x: t[0], y: t[1] }, { x: t[2], y: t[3] }); l = h({ x: t[0], y: t[1] }, { x: t[2], y: t[3] }); h = c(t[0], t[1], g(e), l / 2); m *= l / 2; l = c(h.x, h.y, g(e - 180), m); c = c(h.x, h.y, g(e), m); return [l.x, l.y, c.x, c.y]
    } function pc(d, b) { d.series.info.type.isRadarColumn && (b.pathObj = kb(d, null, b)) } function qc(e, b, a) {
        if (b.length) {
            a = d.jsLib.evalPath(a, "outline.width") || 1; var c = d.jsLib.map(b, function (a) { return { id: a.id, percent: a.tokenValue("%percentOfTotal") } }); e = d.bboxLib.fromRect(e); for (var g = Ia(c, e, function (a) { return a.percent }, function (a) { return a },
                function (a) { return a.id }), f = 0; f < b.length; f++) { var m = b[f], h = m.currentOptions; h = d.jsLib.evalPath(h, "shape.outline") || h.line || {}; h = d.jsLib.def(h.width) ? h.width / 2 : 1; var l = g[c[f].id]; .001 > Math.abs(l[0] - e[0]) && (l[0] += h); .001 > Math.abs(l[1] - e[1]) && (l[1] += h); .001 > Math.abs(l[2] - (e[0] + e[2])) && (l[2] -= h + a); .001 > Math.abs(l[3] - (e[1] + e[3])) && (l[3] -= h + a); l = d.bboxLib.fromLTRB(l); m.renderRect = { x: l[0], y: l[1], width: l[2], height: l[3] } }
        }
    } function rc(e, b) {
        var a = e.series, c = a.rootVisuals; a.info.type; var g = a.info.style, f = {};
        if (e.coordinates.line) { var m = e.paths.lines ? e.paths.lines.join(" ").replace(/,/g, " ") : d.shapeLib.multiLineToPath(e.coordinates.line).join(" "); f.pathAnimation = { type: "line", shift: d.jsLib.evalPath(b, "shift") }; var h = d.jsLib.copy(g.attr.line); (e = a.options("shape.outline")) && d.jsLib.extend(h, d.stylingLib.lineToAttr(e)) } return {
            d: m, state: h, shapeName: "line", target: c.line, zIndex: a.zIndex + d.consts.zIndexReference.series + 5, visGetter: function () { return a.visuals.line }, visSetter: function (c) {
                return a.visuals.line =
                    c
            }, animation: f, events: {}
        }
    } function Ia(e, b, a, c, g, f) { e = d.jsLib.map(e, function (b) { return [b, a(b, c)] }); e = d.jsLib.sortBy(e, function (a) { return a[1] }).reverse(); b = N(b, 4); var m = b[0], h = b[1], l = b[2], k = b[3]; b = []; var n = d.jsLib.extendCopy(xa.squarified, f); m = Ja(sc(d.jsLib.map(e, function (a) { return a[1] }), l * k), [], new tc(m, h, l, k), [], n); tb(m, b); m = {}; for (h = 0; h < e.length; h++)l = c(e[h][0]), l.length ? d.jsLib.extend(m, Ia(l, d.bboxLib.fromLTRB(b[h]), a, c, g, f)) : m[g(e[h][0])] = b[h]; return m } function uc(e, b) {
        var a = e.series, c = e.shapeLabelMeta,
        g, f = a.renderer, m = a.rootVisuals; if (!c.labelSize || b) {
            var h = d.jsLib.evalPath(a.currentOptions, "shape.label"); b = d.jsLib.evalPath(h, "text"); if (!b) return e; "function" === d.jsLib.getValType(b) && (b = b(a)); if (b = a.replaceTokens(b)) {
                c.labelText = b; h = d.stylingLib.labelToAttr(h); h.autoWrap = "default"; h.val = b; if (e = d.jsLib.evalPath(c, "label.bounds")) h.maxWidth = e[2], h.maxHeight = e[3]; h.zIndex = a.zIndex + d.consts.zIndexReference.label; (g = m.label) ? g.attr(d.jsLib.merge({}, h)) : g = m.label = f.textStack().attr(d.jsLib.merge({},
                    h)).add(m.points); c.labelAttr = h; f = g.composeCombinations()[0].minSize; f = [f.width.px, f.height.px]; c.labelSize = f; c = [e[0], e[1], f[0], f[1]]; f = d.bboxLib.toLTRB(c); m = d.bboxLib.toLTRB(d.bboxLib.fromRect(a.renderRect)); a = Math.min(f[0] - m[0], 0) + Math.max(f[2] - m[2], 0); f = Math.min(f[1] - m[1], 0) + Math.max(f[3] - m[3], 0); g.attr({ x: c[0] - a - 2 * (0 < a ? 1 : -1), y: c[1] - f - 2 * (0 < f ? 1 : -1) })
            }
        }
    } function vc(e, b, a, c) {
        var g = b.size, f = b.neck, m = b.inverted, h = d.bboxLib.fromCenter(b.cxy, [.9 * g[1], g[1]]); g = d.jsLib.pick(b.innerPadding, 4) / 2; var l = h[1],
            k = h[1] + h[3]; b = k - h[3] * f; var n = h[0], p = h[0] + h[2], q = (n + p) / 2, r = f ? h[2] * (1 - wc) : 0; m && (l = k, k = h[1], b = k + h[3] * f); var t = [n, l], u = [p, l], v = [q - r / 2, b], w = [q + r / 2, b], x = [v[0], k], y = [w[0], k], z = function (a, c) { var b = [[t[0], c], [u[0], c]]; b = d.trigLib.lineIntersect(a[0], a[1], b[0], b[1]); if (b.onLine1) return [b.x, b.y]; if (.001 > Math.abs(a[0][1] - c)) return a[0]; if (.001 > Math.abs(a[1][1] - c)) return a[1] }; f = function (a, c) { c = "left" === c ? [[t, v], [v, x]] : [[u, w], [w, y]]; return z(c[0], a) || z(c[1], a) }; m = h[1] + e[0] * h[3]; e = h[1] + e[1] * h[3]; h = (m + e) / 2; d.mathLib.diff(m,
                e) < 2 * g && (g = d.mathLib.diff(m, e) / 3); g = m > e ? -g : g; a || (m += g); c || (e -= g); a = Math.max(m, e); a = Math.min(m, e) < b && a > b; c = []; c.push(f(m, "left"), f(m, "right"), f(e, "right"), f(e, "left")); b = { left: f(h, "left"), right: f(h, "right") }; a && (c.splice(2, 0, w), c.push(v)); return { points: c, path: d.shapeLib.flattenD(d.shapeLib.pointsToPath(c)) + "Z", bounds: d.bboxLib.bboxFromPoints(c), labelAnchors: b }
    } function xc(d, b, a, c) {
        c = c || {}; var g = c.maxIterations || 100; c = c.tolerance || 1E-10; var f = d(b), e = d(a), h = a - b; if (0 < f * e) throw "Initial bisect points must have opposite signs";
        if (0 === f) return b; if (0 === e) return a; for (a = 0; a < g; ++a) { h /= 2; e = b + h; var l = d(e); 0 <= l * f && (b = e); if (Math.abs(h) < c || 0 === l) return e } return b + h
    } function Ka(d, b, a) { return Math.min(d, b) * Math.min(d, b) * Math.PI <= a + 1E-10 ? Math.abs(d - b) : xc(function (c) { return ub(d, b, c) - a }, 0, d + b) } function La(d, b) { return d * d * Math.acos(1 - b / d) - (d - b) * Math.sqrt(b * (2 * d - b)) } function X(d, b) { return Math.sqrt((d.x - b.x) * (d.x - b.x) + (d.y - b.y) * (d.y - b.y)) } function ub(d, b, a) {
        if (a >= d + b) return 0; if (a <= Math.abs(d - b)) return Math.PI * Math.min(d, b) * Math.min(d,
            b); var c = b - (a * a - d * d + b * b) / (2 * a); return La(d, d - (a * a - b * b + d * d) / (2 * a)) + La(b, c)
    } function vb(d, b) { var a = X(d, b), c = d.radius, g = b.radius; if (a >= c + g || a <= Math.abs(c - g)) return []; var f = (c * c - g * g + a * a) / (2 * a); g = Math.sqrt(c * c - f * f); c = d.x + f * (b.x - d.x) / a; f = d.y + f * (b.y - d.y) / a; var e = g / a * -(b.y - d.y); d = g / a * -(b.x - d.x); return [{ x: c + e, y: f - d }, { x: c - e, y: f + d }] } function yc(d) { for (var b = [], a = 0; a < d.length; ++a)for (var c = a + 1; c < d.length; ++c)for (var g = vb(d[a], d[c]), f = 0; f < g.length; ++f) { var e = g[f]; e.parentIndex = [a, c]; b.push(e) } return b } function wb(d) {
        for (var b =
            { x: 0, y: 0 }, a = 0; a < d.length; ++a)b.x += d[a].x, b.y += d[a].y; b.x /= d.length; b.y /= d.length; return b
    } function Ma(d, b) {
        var a = yc(d), c = a.filter(function (a) { a: { for (var c = 0; c < d.length; ++c)if (X(a, d[c]) > d[c].radius + 1E-10) { a = !1; break a } a = !0 } return a }), g = 0, f = 0, e = [], h; if (1 < c.length) {
            var l = wb(c); for (h = 0; h < c.length; ++h) { var k = c[h]; k.angle = Math.atan2(k.x - l.x, k.y - l.y) } c.sort(function (a, c) { return c.angle - a.angle }); l = c[c.length - 1]; for (h = 0; h < c.length; ++h) {
                k = c[h]; f += (l.x + k.x) * (k.y - l.y); for (var n = { x: (k.x + l.x) / 2, y: (k.y + l.y) / 2 },
                    p = null, q = 0; q < k.parentIndex.length; ++q)if (-1 < l.parentIndex.indexOf(k.parentIndex[q])) { var r = d[k.parentIndex[q]], t = Math.atan2(l.x - r.x, l.y - r.y), u = t - Math.atan2(k.x - r.x, k.y - r.y); 0 > u && (u += 2 * Math.PI); t -= u / 2; t = X(n, { x: r.x + r.radius * Math.sin(t), y: r.y + r.radius * Math.cos(t) }); t > 2 * r.radius && (t = 2 * r.radius); if (null === p || p.width > t) p = { circle: r, width: t, p1: k, p2: l } } null !== p && (e.push(p), g += La(p.circle.radius, p.width), l = k)
            }
        } else {
            l = d[0]; for (h = 1; h < d.length; ++h)d[h].radius < l.radius && (l = d[h]); g = !1; for (h = 0; h < d.length; ++h)if (X(d[h],
                l) > Math.abs(l.radius - d[h].radius)) { g = !0; break } g ? g = f = 0 : (g = l.radius * l.radius * Math.PI, e.push({ circle: l, p1: { x: l.x, y: l.y + l.radius }, p2: { x: l.x - 1E-10, y: l.y + l.radius }, width: 2 * l.radius }))
        } f /= 2; b && (b.area = g + f, b.arcArea = g, b.polygonArea = f, b.arcs = e, b.innerPoints = c, b.intersectionPoints = a); return g + f
    } function ya(d, b) {
        function a(a) { return a.map(function (a) { return d[a] }) } for (var c = 0, g = 0; g < b.length; ++g) {
            var f = b[g]; if (1 != f.sets.length) {
                if (2 == f.sets.length) {
                    var e = d[f.sets[0]], h = d[f.sets[1]]; e = ub(e.radius, h.radius, X(e,
                        h))
                } else e = Ma(a(f.sets)); h = f.hasOwnProperty("weight") ? f.weight : 1; c += h * (e - f.size) * (e - f.size)
            }
        } return c
    } function zc(d, b) {
        function a(a, c) { return c.size - a.size } function c(a) { return a.set in r } function g(a, c) { f[c].x = a.x; f[c].y = a.y; r[c] = !0 } b = b && b.lossFunction ? b.lossFunction : ya; for (var f = {}, e = {}, h, l = 0; l < d.length; ++l) { var k = d[l]; 1 == k.sets.length && (h = k.sets[0], f[h] = { x: 1E10, y: 1E10, rowid: f.length, size: k.size, radius: Math.sqrt(k.size / Math.PI) }, e[h] = []) } d = d.filter(function (a) { return 2 == a.sets.length }); for (l = 0; l <
            d.length; ++l) { k = d[l]; var n = k.hasOwnProperty("weight") ? k.weight : 1, p = k.sets[0], q = k.sets[1]; k.size + 1E-10 >= Math.min(f[p].size, f[q].size) && (n = 0); e[p].push({ set: q, size: k.size, weight: n }); e[q].push({ set: p, size: k.size, weight: n }) } k = []; for (h in e) if (e.hasOwnProperty(h)) { for (l = n = 0; l < e[h].length; ++l)n += e[h][l].size * e[h][l].weight; k.push({ set: h, size: n }) } k.sort(a); var r = {}; g({ x: 0, y: 0 }, k[0].set); for (l = 1; l < k.length; ++l) {
                n = k[l].set; var t = e[n].filter(c); h = f[n]; t.sort(a); if (0 === t.length) throw "ERROR: missing pairwise overlap information";
                p = []; for (q = 0; q < t.length; ++q) { var u = f[t[q].set], v = Ka(h.radius, u.radius, t[q].size); p.push({ x: u.x - v, y: u.y }); p.push({ x: u.x + v, y: u.y }); p.push({ y: u.y - v, x: u.x }); p.push({ y: u.y + v, x: u.x }); for (var w = q + 1; w < t.length; ++w) { var x = f[t[w].set], y = Ka(h.radius, x.radius, t[w].size); x = vb({ x: u.x, y: u.y, radius: v }, { x: x.x, y: x.y, radius: y }); for (y = 0; y < x.length; ++y)p.push(x[y]) } } h = 1E50; t = p[0]; for (q = 0; q < p.length; ++q)f[n].x = p[q].x, f[n].y = p[q].y, u = b(f, d), u < h && (h = u, t = p[q]); g(t, n)
            } return f
    } function xb(d, b) { return Array(d).fill(0).map(function () { return Array(b).fill(0) }) }
    function Ac(d) { d = d.slice(); var b = [], a = {}, c; for (c = 0; c < d.length; ++c) { var g = d[c]; if (1 == g.sets.length) b.push(g.sets[0]); else if (2 == g.sets.length) { var f = g.sets[0], e = g.sets[1]; a[[f, e].join()] = !0; a[[e, f].join()] = !0 } } b.sort(function (a, c) { return a > c ? 1 : -1 }); for (c = 0; c < b.length; ++c)for (f = b[c], g = c + 1; g < b.length; ++g)e = b[g], [f, e].join() in a || d.push({ sets: [f, e], size: 0 }); return d } function Bc(d, b, a) {
        var c = xb(b.length, b.length), g = xb(b.length, b.length); d.filter(function (a) { return 2 == a.sets.length }).map(function (d) {
            var f =
                a[d.sets[0]], e = a[d.sets[1]], l = Ka(Math.sqrt(b[f].size / Math.PI), Math.sqrt(b[e].size / Math.PI), d.size); c[f][e] = c[e][f] = l; l = 0; d.size + 1E-10 >= Math.min(b[f].size, b[e].size) ? l = 1 : 1E-10 >= d.size && (l = -1); g[f][e] = g[e][f] = l
        }); return { distances: c, constraints: g }
    } function ma(d, b) { for (var a = 0, c = 0; c < d.length; ++c)a += d[c] * b[c]; return a } function Na(d) { return Math.sqrt(ma(d, d)) } function Oa(d, b, a) { for (var c = 0; c < b.length; ++c)d[c] = b[c] * a } function fa(d, b, a, c, g) { for (var f = 0; f < d.length; ++f)d[f] = b * a[f] + c * g[f] } function yb(d, b, a) {
        function c(a) {
            for (var c =
                0; c < a.length; c++)u[t][c] = a[c]; u[t].fx = a.fx
        } a = a || {}; var g = a.maxIterations || 200 * b.length, f = a.nonZeroDelta || 1.05, e = a.zeroDelta || .001, h = a.minErrorDelta || 1E-6, l = a.minErrorDelta || 1E-5, k = void 0 !== a.rho ? a.rho : 1, n = void 0 !== a.chi ? a.chi : 2, p = void 0 !== a.psi ? a.psi : -.5, q = void 0 !== a.sigma ? a.sigma : .5, r, t = b.length, u = Array(t + 1); u[0] = b; u[0].fx = d(b); for (var v = u[0].id = 0; v < t; ++v) { var w = b.slice(); w[v] = w[v] ? w[v] * f : e; u[v + 1] = w; u[v + 1].fx = d(w); u[v + 1].id = v + 1 } f = function (a, c) { return a.fx - c.fx }; e = b.slice(); w = b.slice(); var x = b.slice();
        b = b.slice(); for (var y = 0; y < g; ++y) {
            u.sort(f); a.history && (v = u.map(function (a) { var c = a.slice(); c.fx = a.fx; c.id = a.id; return c }), v.sort(function (a, c) { return a.id - c.id }), a.history.push({ x: u[0].slice(), fx: u[0].fx, simplex: v })); for (v = r = 0; v < t; ++v)r = Math.max(r, Math.abs(u[0][v] - u[1][v])); if (Math.abs(u[0].fx - u[t].fx) < h && r < l) break; for (v = 0; v < t; ++v) { for (r = e[v] = 0; r < t; ++r)e[v] += u[r][v]; e[v] /= t } v = u[t]; fa(w, 1 + k, e, -k, v); w.fx = d(w); if (w.fx < u[0].fx) fa(b, 1 + n, e, -n, v), b.fx = d(b), b.fx < w.fx ? c(b) : c(w); else if (w.fx >= u[t - 1].fx) {
                if (r =
                    !1, w.fx > v.fx ? (fa(x, 1 + p, e, -p, v), x.fx = d(x), x.fx < v.fx ? c(x) : r = !0) : (fa(x, 1 - p * k, e, p * k, v), x.fx = d(x), x.fx < w.fx ? c(x) : r = !0), r) { if (1 <= q) break; for (v = 1; v < u.length; ++v)fa(u[v], 1 - q, u[0], q, u[v]), u[v].fx = d(u[v]) }
            } else c(w)
        } u.sort(f); return { fx: u[0].fx, x: u[0] }
    } function Cc(d, b, a, c, g, f, m) {
        function e(e, h, p) { for (var r = 0; 16 > r; ++r)if (g = (e + h) / 2, fa(c.x, 1, a.x, g, b), n = c.fx = d(c.x, c.fxprime), q = ma(c.fxprime, b), n > l + f * g * k || n >= p) h = g; else { if (Math.abs(q) <= -m * k) return g; 0 <= q * (h - e) && (h = e); e = g; p = n } return 0 } var l = a.fx, k = ma(a.fxprime, b), n =
            l, p = l, q = k, r = 0; g = g || 1; f = f || 1E-6; m = m || .1; for (var t = 0; 10 > t; ++t) { fa(c.x, 1, a.x, g, b); n = c.fx = d(c.x, c.fxprime); q = ma(c.fxprime, b); if (n > l + f * g * k || t && n >= p) return e(r, g, p); if (Math.abs(q) <= -m * k) break; if (0 <= q) return e(g, r, n); p = n; r = g; g *= 2 } return g
    } function Dc(d, b, a) {
        var c = { x: b.slice(), fx: 0, fxprime: b.slice() }, g = { x: b.slice(), fx: 0, fxprime: b.slice() }, f = b.slice(), e = 1; a = a || {}; var h = a.maxIterations || 20 * b.length; c.fx = d(c.x, c.fxprime); b = c.fxprime.slice(); Oa(b, c.fxprime, -1); for (var l = 0; l < h; ++l) {
            e = Cc(d, b, c, g, e); a.history &&
                a.history.push({ x: c.x.slice(), fx: c.fx, fxprime: c.fxprime.slice(), alpha: e }); if (e) { fa(f, 1, g.fxprime, -1, c.fxprime); var k = ma(c.fxprime, c.fxprime); k = Math.max(0, ma(f, g.fxprime) / k); fa(b, k, b, -1, g.fxprime); k = c; c = g; g = k } else Oa(b, c.fxprime, -1); if (1E-5 >= Na(c.fxprime)) break
        } a.history && a.history.push({ x: c.x.slice(), fx: c.fx, fxprime: c.fxprime.slice(), alpha: e }); return c
    } function Ec(d, b) {
        b = b || {}; var a = b.restarts || 10, c = [], g = {}, f; for (f = 0; f < d.length; ++f) { var e = d[f]; 1 == e.sets.length && (g[e.sets[0]] = c.length, c.push(e)) } f =
            Bc(d, c, g); var h = f.distances, l = f.constraints, k = Na(h.map(Na)) / h.length; h = h.map(function (a) { return a.map(function (a) { return a / k }) }); d = function (a, c) { var b = h, g = 0, d; for (d = 0; d < c.length; ++d)c[d] = 0; for (d = 0; d < b.length; ++d)for (var f = a[2 * d], e = a[2 * d + 1], m = d + 1; m < b.length; ++m) { var k = a[2 * m], n = a[2 * m + 1], p = b[d][m], q = l[d][m], A = (k - f) * (k - f) + (n - e) * (n - e), F = Math.sqrt(A); A -= p * p; 0 < q && F <= p || 0 > q && F >= p || (g += 2 * A * A, c[2 * d] += 4 * A * (f - k), c[2 * d + 1] += 4 * A * (e - n), c[2 * m] += 4 * A * (k - f), c[2 * m + 1] += 4 * A * (n - e)) } return g }; for (f = 0; f < a; ++f)if (g = Array(2 *
                h.length).fill(.5), g = Dc(d, g, b), !n || g.fx < n.fx) var n = g; a = n.x; n = {}; for (f = 0; f < c.length; ++f)d = c[f], n[d.sets[0]] = { x: a[2 * f] * k, y: a[2 * f + 1] * k, radius: Math.sqrt(d.size / Math.PI) }; if (b.history) for (f = 0; f < b.history.length; ++f)Oa(b.history[f].x, k, 1); return n
    } function Fc(d, b) { var a = zc(d, b), c = b.lossFunction || ya; if (8 <= d.length) { b = Ec(d, b); var g = c(b, d); d = c(a, d); g + 1E-8 < d && (a = b) } return a } function Gc(d, b) {
        b = b || {}; b.maxIterations = b.maxIterations || 500; var a = b.initialLayout || Fc, c = b.lossFunction || ya; d = Ac(d); var g = a(d, b); a = [];
        var f = []; for (e in g) g.hasOwnProperty(e) && (a.push(g[e].x), a.push(g[e].y), f.push(e)); b = yb(function (a) { for (var b = {}, e = 0; e < f.length; ++e) { var m = f[e]; b[m] = { x: a[2 * e], y: a[2 * e + 1], radius: g[m].radius } } return c(b, d) }, a, b).x; for (a = 0; a < f.length; ++a) { var e = f[a]; g[e].x = b[2 * a]; g[e].y = b[2 * a + 1] } return g
    } function Hc(d) {
        function b(a) { a.parent !== a && (a.parent = b(a.parent)); return a.parent } function a(a, c) { a = b(a); c = b(c); a.parent = c } d.map(function (a) { a.parent = a }); for (var c = 0; c < d.length; ++c)for (var g = c + 1; g < d.length; ++g) {
            var f =
                d[c].radius + d[g].radius; X(d[c], d[g]) + 1E-10 < f && a(d[g], d[c])
        } g = {}; for (c = 0; c < d.length; ++c) { var e = b(d[c]).parent.setid; e in g || (g[e] = []); g[e].push(d[c]) } d.map(function (a) { delete a.parent }); d = []; for (e in g) g.hasOwnProperty(e) && d.push(g[e]); return d
    } function Ic(d, b, a) {
        null === a ? (d = d.map(function (a, c) { return aa({ idx: c }, a) }), d.sort(function (a, c) { return a.radius > c.radius ? -1 : a.radius < c.radius ? 1 : a.idx - c.idx })) : d.sort(a); if (0 < d.length) { var c = d[0].x, g = d[0].y; for (a = 0; a < d.length; ++a)d[a].x -= c, d[a].y -= g } 2 == d.length &&
            X(d[0], d[1]) < Math.abs(d[1].radius - d[0].radius) && (d[1].x = d[0].x + d[0].radius - d[1].radius - 1E-10, d[1].y = d[0].y); if (1 < d.length) for (a = Math.atan2(d[1].x, d[1].y) - b, c = Math.cos(a), g = Math.sin(a), a = 0; a < d.length; ++a) { var f = d[a].x, e = d[a].y; d[a].x = c * f - g * e; d[a].y = g * f + c * e } if (2 < d.length) { for (b = Math.atan2(d[2].x, d[2].y) - b; 0 > b;)b += 2 * Math.PI; for (; b > 2 * Math.PI;)b -= 2 * Math.PI; if (b > Math.PI) for (b = d[1].y / (1E-10 + d[1].x), a = 0; a < d.length; ++a)c = (d[a].x + b * d[a].y) / (1 + b * b), d[a].x = 2 * c - d[a].x, d[a].y = 2 * c * b - d[a].y }
    } function Pa(d) {
        var b =
            function (a) { var c = Math.max.apply(null, d.map(function (c) { return c[a] + c.radius })), b = Math.min.apply(null, d.map(function (c) { return c[a] - c.radius })); return { max: c, min: b } }; return { xRange: b("x"), yRange: b("y") }
    } function Jc(d, b, a) {
        function c(a, c, d) {
            if (a) {
                var b = a.bounds; if (c) c = h.xRange.max - b.xRange.min + l; else { c = h.xRange.max - b.xRange.max; var f = (b.xRange.max - b.xRange.min) / 2 - (h.xRange.max - h.xRange.min) / 2; 0 > f && (c += f) } d ? d = h.yRange.max - b.yRange.min + l : (d = h.yRange.max - b.yRange.max, f = (b.yRange.max - b.yRange.min) / 2 - (h.yRange.max -
                    h.yRange.min) / 2, 0 > f && (d += f)); for (b = 0; b < a.length; ++b)a[b].x += c, a[b].y += d, g.push(a[b])
            }
        } null === b && (b = Math.PI / 2); var g = []; for (e in d) if (d.hasOwnProperty(e)) { var f = d[e]; g.push({ x: f.x, y: f.y, radius: f.radius, setid: e }) } var e = Hc(g); for (d = 0; d < e.length; ++d)Ic(e[d], b, a), f = Pa(e[d]), e[d].size = (f.xRange.max - f.xRange.min) * (f.yRange.max - f.yRange.min), e[d].bounds = f; e.sort(function (a, c) { return c.size - a.size }); g = e[0]; var h = g.bounds, l = (h.xRange.max - h.xRange.min) / 50; for (b = 1; b < e.length;)c(e[b], !0, !1), c(e[b + 1], !1, !0), c(e[b +
            2], !0, !0), b += 3, h = Pa(g); b = {}; for (d = 0; d < g.length; ++d)b[g[d].setid] = g[d]; return b
    } function Kc(e) { var b = {}; Ma(e, b); e = b.arcs; if (0 === e.length) return "M 0 0"; if (1 == e.length) return e = e[0].circle, d.shapes.circle(e.x - e.radius, e.y - e.radius, 2 * e.radius, 2 * e.radius); b = ["\nM", e[0].p2.x, e[0].p2.y]; for (var a = 0; a < e.length; ++a) { var c = e[a], g = c.circle.radius; b.push("\nA", g, g, 0, c.width > g ? 1 : 0, 1, c.p1.x, c.p1.y) } return b.join(" ") } function Qa(d, b, a) {
        var c = b[0].radius - X(b[0], d), g; for (g = 1; g < b.length; ++g) {
            var f = b[g].radius - X(b[g],
                d); f <= c && (c = f)
        } for (g = 0; g < a.length; ++g)f = X(a[g], d) - a[g].radius, f <= c && (c = f); return c
    } function zb(d, b) {
        var a = [], c; for (c = 0; c < d.length; ++c) { var g = d[c]; a.push({ x: g.x, y: g.y }); a.push({ x: g.x + g.radius / 2, y: g.y }); a.push({ x: g.x - g.radius / 2, y: g.y }); a.push({ x: g.x, y: g.y + g.radius / 2 }); a.push({ x: g.x, y: g.y - g.radius / 2 }) } g = a[0]; var f = Qa(a[0], d, b); for (c = 1; c < a.length; ++c) { var e = Qa(a[c], d, b); e >= f && (g = a[c], f = e) } c = yb(function (a) { return -1 * Qa({ x: a[0], y: a[1] }, d, b) }, [g.x, g.y], { maxIterations: 500, minErrorDelta: 1E-10 }).x; a = {
            x: c[0],
            y: c[1], size: 2 * Math.abs(c.fx || 0)
        }; g = !0; for (c = 0; c < d.length; ++c)if (X(a, d[c]) > d[c].radius) { g = !1; break } for (c = 0; c < b.length; ++c)if (X(a, b[c]) < b[c].radius) { g = !1; break } g || (1 == d.length ? a = { x: d[0].x, y: d[0].y } : (c = {}, Ma(d, c), a = 0 === c.arcs.length ? { x: 0, y: -1E3, disjoint: !0 } : 1 == c.arcs.length ? { x: c.arcs[0].circle.x, y: c.arcs[0].circle.y } : b.length ? zb(d, []) : wb(c.arcs.map(function (a) { return a.p1 })))); return a
    } function Lc(e) {
        var b = d.jsLib.reduce(e, function (a, c) { return 1 === c.sets.length ? Math.min(c.size, a) : a }, Infinity); return !d.jsLib.find(e,
            function (a) { return a.size < b })
    } function Mc(e, b, a, c) {
        if (c.navigator && c.navigator.enabled && c.chartArea) {
            var g = b.currentOptions; e = g.chartArea; a = d.jsLib.isArray(e); var f = c.navigator, m = a ? e.length - 1 : 0; if (!(0 > m)) {
                g.toolbar.items["export"].visible = !1; g.toolbar.items.resetZoom.exclude = !0; g.animation = { duration: 0 }; g.events = g.events || []; g.events.load = function () { b.navigator = b.navigator || new Nc(b, f); var a = b.chartAreas(-1).axes(0); b.navigator.setRange({ min: a.range.min, max: a.range.max }) }; c = !1 !== d.jsLib.evalPath(f,
                    "previewArea.visible"); var h = !1 !== d.jsLib.evalPath(f, "toolbar.visible"); c && (g.extraOverflows = [0, 10, 0, 10]); var l = d.jsLib.copy(a ? e[0].series[0] : g.series[0]); l.type = d.jsLib.evalPath(f, "scrollbarSeries.type") || "area"; l.color = d.jsLib.evalPath(f, "previewArea.color") || "#a0a0a0"; l.line = { width: 1 }; l.states = { hover: { line: { width: 1 } } }; l.isPreview = !0; l.defaultPoint = { marker_type: "none", focusGlow_width: 0 }; var k = l.points[0]; d.jsLib.isUndefined(k.y) && d.jsLib.def(k.close) && d.jsLib.each(l.points, function (a) {
                        return a.y =
                            a.close
                    }); a ? d.jsLib.each(e, function (a) { a.xAxis = d.jsLib.merge(d.jsLib.copy(g.xAxis), a.xAxis); var c = g.yAxis || {}, b = a.yAxis || {}; c = d.jsLib.isArray(c) ? c : [c]; b = d.jsLib.isArray(b) ? b : [b]; for (var f = [], e = b.length, m = 0, h = Math.max(c.length, b.length); m < h; m++) { var l = c[m] || {}; e && delete l.id; f.push(d.jsLib.merge(d.jsLib.cloneDeep(l), b[m] || b[0])) } a.yAxis = f }) : (e = g.chartArea = [{ series: g.series.splice(0), yAxis: g.yAxis, xAxis: g.xAxis }], g.series = []); d.jsLib.omit(g, "xAxis", "yAxis"); h && (e[0].extraOverflows = [36, 0, 0, 0]); c && (a =
                        { height: (d.jsLib.evalPath(f, "previewArea.height") || 55) + 16, legend: { visible: !1 }, series: [l], defaultTooltip: { enabled: !1 }, yAxis: { visible: !1 }, xAxis: { defaultTick: { label_color: "#fff", line_color: "#fff" }, defaultMinorTick: { label_color: "#fff", line_color: "#fff" }, events: { setRange: function (a, c) { (c = b.navigator) && c.setRange(a) } } } }, d.jsLib.extendScoped(a.xAxis, g.xAxis, { scale: !0, formatString: !0, cultureName: !0 }), !1 !== f.xScrollbarEnabled && (a.extraOverflows = [0, 0, 16, 0]), e.push(a)); d.jsLib.each(e, function (a, c) {
                            a.xAxis = d.jsLib.merge(a.xAxis ||
                                {}, { defaultTick: { enabled: c >= m, placement: c > m ? "inside" : "outside" }, overflow: "hidden", scale: { zoomLimit: 0 } }); a.yAxis ? (a = d.jsLib.isArray(a.yAxis) ? a.yAxis : [a.yAxis], d.jsLib.each(a, function (a) { a.defaultTick = d.jsLib.merge(a.defaultTick || {}, { placement: "inside" }) })) : a.yAxis = { defaultTick: { placement: "inside" } }; return !0
                        })
            }
        }
    } function qa(e, b, a) {
        void 0 === b && (b = "sum"); if ((!e || !e.length) && d.jsLib.def(a)) return a; switch (b) {
            case "sum": return d.mathLib.arraySum(e); case "average": return b = d.mathLib.arraySum(e), d.jsLib.isNull(b) ?
                NaN : b / e.length; case "min": return Math.min.apply(Math, C(e)); case "max": return Math.max.apply(Math, C(e))
        }
    } function Oc(e, b) {
        e.highlights = function (a, c, d) { c.isRendered && c.calIndexer && ra(c, !1) }; e.data = function (a, c, b) { c.isRendered && c.calIndexer && (c.data = d.undefVal, c.userOptions.data = a, b.updateCalendar = !0, b.needRedraw = !0) }; e.defaultCultureName = function (a, c, d) {
            if (c.isRendered) {
                c.axes().each(function (a) { return a.invalidate().options({}, !1) }); c.chartAreaSet.invalidate(); if (c = c.calIndexer) d.updateCalendar = !0,
                    c && c.setOptions(a); d.needRedraw = !0
            }
        }; e.calendar = function (a, c, d) { c.isRendered && (c = c.calIndexer) && (d.updateCalendar = !0, c.options(a), d.needRedraw = !0) }; b.calendar = function (a, c, b) { a.ctManager.isType("calendar") && !a.isRendered && (Pc(a, d.jsLib.expandOptionsProperties(a.currentOptions, "template,data,series,palette,targetElement")), c = d.jsLib.cloneDeep(c), c.series = a.currentOptions.series, c.palette = a.currentOptions.palette, delete a.currentOptions.series); return c }
    } function Pc(e, b) {
        var a = e.calIndexer = new Qc(e,
            b), c = function (a, c) { var d = function (a, c) { var d = a.legendEntry; a = d && d.trackerElement; d && a && (d = d.options("cursor") || c, a.attr({ cursor: d, visibility: "default" === c ? "hidden" : "visible" })) }; a.chart.series().each(function (a) { a.options({ visible: !1 }, !1); d(a, "pointer") }); a.options({ visible: !0 }, c); d(a, "default"); return !1 }; (function (a) {
                a.highlights = d.collectionPropFactory(d.UpdatablesCollection, function () { return a._highlights }, function (c) {
                    d.jsLib.each(c, d.normalizationUtils.idFyObj); d.jsLib.setPathVal(a.userOptions,
                        "highlights", c); ra(a)
                }, { push: function (c, b) { d.normalizationUtils.idFyObj(c); var g = a.userOptions, f = d.jsLib.evalPath(g, "highlights"); d.jsLib.setPathVal(g, "highlights", f || []); g.highlights.push(c); ra(a, b) }, splice: function (c, b, g, e) { var f; d.jsLib.each(g, d.normalizationUtils.idFyObj); var m = a.userOptions, h = d.jsLib.evalPath(m, "highlights"); d.jsLib.setPathVal(m, "highlights", h || []); (f = m.highlights).splice.apply(f, C([c, b], g)); ra(a, e) } })
            })(e); e.zoom = function (a, b) {
                var g; a && "initial" !== a || (a = e.calIndexer.options("initial"));
                (g = (a = a ? R(a) : d.undefVal) ? e.series().find(function (c) { return c.currentOptions.attributes.date <= a && c.currentOptions.attributes.endDate >= a }) : e.series(0)) && c(g, b)
            }; a.updateChart(b)
    } function Rc(d) { d.dataInfo.subValsMax; d.dataInfo.subValsMin; return function (d) { var a = ['<b>%name</b> <span style="align:right; verticalAlign:top;">%zValue</span>']; (d = 1 < d.userOptions.attributes.groupCount ? '<chart type=sparkline style="align:center;" width=120 height=40 data=%subvalueList>' : void 0) && a.push(d); return a.join("<br/><hr>") } }
    function Sc(d) { d = d.view; var b = ""; "year" !== d && ("month" === d ? b = "%name" : "dayhours" === d && (b = "%name")); if (b) return '<span style="align:right; verticalAlign:top">' + b + "</span>" } function Tc(e) {
        var b, a, c; e = e.series; var g = [], f = function (a) { var c = d.jsLib.getValType(a); "array" === c ? d.jsLib.each(a, f) : "object" === c ? a.date && (a.date.range ? f(a.date.range) : f(a.date)) : g.push(V(a)) }; try {
            for (var m = D(e), h = m.next(); !h.done; h = m.next()) {
                var l = h.value; try {
                    for (var k = (a = void 0, D(l.points)), n = k.next(); !n.done; n = k.next()) {
                        var p = n.value;
                        p.date && f(p.date)
                    }
                } catch (r) { a = { error: r } } finally { try { n && !n.done && (c = k.return) && c.call(k) } finally { if (a) throw a.error; } }
            }
        } catch (r) { var q = { error: r } } finally { try { h && !h.done && (b = m.return) && b.call(m) } finally { if (q) throw q.error; } } if (g) return [Math.min.apply(Math, C(g)), Math.max.apply(Math, C(g))]
    } function ra(e, b) {
        d.jsLib.mergeCollections(e.userOptions.highlights || {}, e._highlights, function (a) { return new Uc(e, a) }, function (a, c) { return c.options(a, b) }); !1 !== b && e.series().each(function (a) {
            return a.isVisible && a.visualizer.renderPatternHighlights &&
                a.visualizer.renderPatternHighlights()
        })
    } function Ra(e) { return d.jsLib.isArray(e) ? d.jsLib.join(e, " ") : e } function Vc(e, b, a) {
        void 0 === b && (b = ka); void 0 === a && (a = .4); var c = e.end - e.start, g = 0 > c, f = g ? -1 : 1, m = f * b, h = g ? Math.max : Math.min, l = d.jsLib.def(e.pos) ? e.pos : [0, 1], k = e.start, n = e.end, p = e.r, q = e.innerR, r = e.cxy, t = e.caps, u = []; a = f * a / Math.max(e.innerR, 1); var v = function (a) { return d.mathLib.mapValue(l[0], l[1], k, n, a) }, w = function (a) {
            if (g) {
                var c = a.start; a.start = a.end; a.end = c; c = a.caps.start; a.caps.start = a.caps.end; a.caps.end =
                    c; a.inverted = !0
            } u.push(a)
        }; if (f * c > b) { var x = k; for (e = k + m; 0 >= f * (e - n);) { b = x === k; c = e === n; x = b ? x : x - a; var y = c ? e : e + a; w({ start: x, end: y, r: p, innerR: q, cxy: r, pos: [v(x), v(y)], skipEndFix: !0, caps: { start: b ? t.start : "gap", end: c ? t.end : "gap" } }); x = e; e = h(x + m, n); .2 > d.mathLib.diff(e, n) && (e = n); if (c) break } } else e.pos = [v(k), v(n)], e.skipEndFix = !0, w(e); return u
    } function Ab(e) { var b = e.caps, a = 0; e = 2 * d.trigLib.arcCapDegOffset(e.r, e.innerR); "round" === b.start && a++; "round" === b.end && a++; 1 === a && (e /= 2); 0 === a && (e = 0); return e } function Wc(e) {
        var b =
            function (a) { var c = !1; Xc(a, function (a) { if (a[1] < a[0]) return c = !0, !1 }); return c }; return !(b(e) || b(d.rangeLib.invert(e, [0, 1])))
    } function Xc(d, b) { for (var a = 0, c = d.length; a < c && !1 !== b(d[a], a, a === d.length - 1, a ? d[a - 1] : void 0); a++); } function Yc() {
        d.shapes.gaugeOutline = function (e, b, a, c, g) {
            var f = g.start; c = g.r || a || c; a = .2 * c; var m = g.end - .001, h = d.mathLib.math.cos(f), l = d.mathLib.math.sin(f), k = d.mathLib.math.cos(m), n = d.mathLib.math.sin(m), p = g.end - f < d.mathLib.math.PI ? 0 : 1, q = d.trigLib.toDegrees(f), r = d.trigLib.toDegrees(m),
                t = ua(q, r), u = 180 < t ? ua(r, q + t / 2 + 180) : 90; g = [e + c * h, b + c * l]; var v = [e + c * k, b + c * n]; v = d.trigLib.getPolarPoint(v[0], v[1], d.trigLib.toRadians(d.trigLib.toDegrees(m) + 180), a); var w = d.trigLib.getPolarPoint(g[0], g[1], d.trigLib.toRadians(d.trigLib.toDegrees(f) + 180), a); f = d.trigLib.getPolarPoint(v.x, v.y, d.trigLib.toRadians(d.trigLib.toDegrees(m) + u), a); m = d.trigLib.getPolarPoint(w.x, w.y, d.trigLib.toRadians(q - u), a); u = []; 200 > t && (t = r + 40, u = q - 40, q = ua(t, u), r = .3 * c, t = d.trigLib.getPolarPoint(e, b, d.trigLib.toRadians(t), r), u = d.trigLib.getPolarPoint(e,
                    b, d.trigLib.toRadians(u), r), u = ["L", t.x, t.y, "A", r, r, 0, 180 > q ? 0 : 1, 1, u.x, u.y]); e = ["M", e + c * h, b + c * l, "A", c, c, 0, p, 1, e + c * k, b + c * n]; b = ["L", m.x, m.y]; g = ["A", a, a, 0, 0, 1, g[0], g[1]]; e.push.apply(e, C(["A", a, a, 0, 0, 1, f.x, f.y])); e.push.apply(e, C(u)); e.push.apply(e, C(b)); e.push.apply(e, C(g)); return e
        }
    } function ca(e) { return d.jsLib.isNumber(e) && !d.jsLib.isNaN(e) } function Sa(e) {
        return d.jsLib.reduce(d.jsLib.isString(e) ? e.trim().split(Ta.dataDelimiter) : e, function (b, a) {
            d.jsLib.isString(a) ? a.length && "NaN" !== a && "null" !== a ? (a =
                parseFloat(a), !d.jsLib.isNaN(a) && b.push(a)) : b.push(null) : b.push(a); return b
        }, [])
    } function Zc() { d.jsLib.each($c, function (e) { return d.registerVisual(e, ad) }) } function bd(d) { d.flowEvents.beforeRenderSeries.on(cd); d.flowEvents.nextRenderSeries.on(dd) } function cd(e) {
        var b = N(e, 6), a = b[0], c = b[1]; e = b[2]; var g = b[3], f = b[4]; b = b[5]; a.ctManager.isType("treemap") && (qc(c, a.series().items, a.currentOptions), c = a.series(function (c) { return c.chartArea.id === a.id && !1 === c.info.type.isShape && c.pane === d.undefVal }).sortBy("zIndex"),
            c.each(function (a) { return f.push(function () { return a.render(a.renderRect, g) }) }), c.each(function (a) { return f.push(function () { return a.renderLabels(a.renderRect, g) }) }), b()); a.panes && a.panes.count && a.panes.renderData(e, g)
    } function dd(e) {
        var b = N(e, 4), a = b[1]; e = b[2]; var c = b[3]; b = b[0].series(function (a) { return a.info.type.isShape && !a.pane }).items; if (b.length) {
            a = fc(b.length, { width: a.width, height: a.height, padding: 0, equal: !0 }).boxes; for (var g = 0, f = b.length; g < f; g++) {
                var m = a[g], h = b[g]; m = d.rectLib.centerRect(m.cx,
                    m.cy, m.maxWidth, m.size); h.render(e, d.jsLib.merge({ rect: m }, c))
            }
        }
    } var Ca = function (d, b) { Ca = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (a, c) { a.__proto__ = c } || function (a, c) { for (var d in c) c.hasOwnProperty(d) && (a[d] = c[d]) }; return Ca(d, b) }, aa = function () { aa = Object.assign || function (d) { for (var b, a = 1, c = arguments.length; a < c; a++) { b = arguments[a]; for (var g in b) Object.prototype.hasOwnProperty.call(b, g) && (d[g] = b[g]) } return d }; return aa.apply(this, arguments) }, sa = function (e, b) {
        var a = d.bboxLib.center(e),
        c = d.bboxLib.center(b); b = Math.min(e[2] / b[2], e[3] / b[3]); var g = b * e[2]; return { x: a[0] - (c[0] - a[0]) * b - g / 2, y: a[1] - (c[1] - a[1]) * b - g / 2, width: g, height: g, resize: { ratio: b, offsetX: -((c[0] - a[0]) * b), offsetY: -((c[1] - a[1]) * b), cxOrg: e[0] + e[2] / 2, cyOrg: e[1] + e[3] / 2, wOrg: e[2] } }
    }, ta = function (d) { for (var b = [0, 0]; d;)b[0] += d.x.px + d.offsetX, b[1] += d.y.px + d.offsetY, d = d.parent; return b }, ia = function (e, b, a) { return d.bboxLib.translate(e, d.bboxLib.offsetBetween(ta(b), ta(a))) }, ed = function () {
        function d() { } d.prototype.edges = function () {
            var d,
            a, c, g = []; try { for (var f = D(this.vertices()), e = f.next(); !e.done; e = f.next()) { var h = e.value; try { for (var l = (a = void 0, D(this.outVertices(h))), k = l.next(); !k.done; k = l.next())g.push([h, k.value]) } catch (p) { a = { error: p } } finally { try { k && !k.done && (c = l.return) && c.call(l) } finally { if (a) throw a.error; } } } } catch (p) { var n = { error: p } } finally { try { e && !e.done && (d = f.return) && d.call(f) } finally { if (n) throw n.error; } } return g
        }; d.prototype.outEdges = function (d) {
            var a, c, b, f, e, h; return db(this, function (g) {
                switch (g.label) {
                    case 0: g.trys.push([0,
                        5, 6, 7]), a = D(this.outVertices(d)), c = a.next(), g.label = 1; case 1: if (c.done) return [3, 4]; b = c.value; return [4, [d, b]]; case 2: g.sent(), g.label = 3; case 3: return c = a.next(), [3, 1]; case 4: return [3, 7]; case 5: return f = g.sent(), e = { error: f }, [3, 7]; case 6: try { c && !c.done && (h = a.return) && h.call(a) } finally { if (e) throw e.error; } return [7]; case 7: return [2]
                }
            })
        }; d.prototype.inEdges = function (d) {
            var a, c, b, f, e, h; return db(this, function (g) {
                switch (g.label) {
                    case 0: g.trys.push([0, 5, 6, 7]), a = D(this.inVertices(d)), c = a.next(), g.label = 1; case 1: if (c.done) return [3,
                        4]; b = c.value; return [4, [b, d]]; case 2: g.sent(), g.label = 3; case 3: return c = a.next(), [3, 1]; case 4: return [3, 7]; case 5: return f = g.sent(), e = { error: f }, [3, 7]; case 6: try { c && !c.done && (h = a.return) && h.call(a) } finally { if (e) throw e.error; } return [7]; case 7: return [2]
                }
            })
        }; d.prototype.toJSON = function () { var d = this; return { vertices: this.vertices().map(function (a) { return { u: a, d: d.vertex(a) } }), edges: this.edges().map(function (a) { var c = N(a, 2); a = c[0]; c = c[1]; return { u: a, v: c, d: d.edge(a, c) } }) } }; d.prototype.toString = function () { return JSON.stringify(this.toJSON()) };
        return d
    }(), Bb = new WeakMap, P = function (d) { return Bb.get(d) }, Z = function (d, b) { if (null === d.vertex(b)) throw Error("Invalid vertex: " + b); }, Cb = function (d) {
        function b() { var a = d.call(this) || this; Bb.set(a, { vertices: new Map, numVertices: 0, numEdges: 0 }); return a } K(b, d); b.prototype.vertex = function (a) { var c = P(this).vertices; return c.get(a) ? c.get(a).data : null }; b.prototype.edge = function (a, c) { var d = P(this).vertices; return d.get(a) && d.get(a).outVertices.get(c) ? d.get(a).outVertices.get(c) : null }; b.prototype.vertices = function () { return Fa(P(this).vertices) };
        b.prototype.outVertices = function (a) { Z(this, a); return Fa(P(this).vertices.get(a).outVertices) }; b.prototype.inVertices = function (a) { Z(this, a); return Fa(P(this).vertices.get(a).inVertices) }; b.prototype.parent = function (a) { Z(this, a); return P(this).vertices.get(a).parent }; b.prototype.children = function (a) { Z(this, a); return Array.from(P(this).vertices.get(a).children) }; b.prototype.numVertices = function () { return P(this).numVertices }; b.prototype.numEdges = function () { return P(this).numEdges }; b.prototype.outDegree =
            function (a) { Z(this, a); return P(this).vertices.get(a).outVertices.size }; b.prototype.inDegree = function (a) { Z(this, a); return P(this).vertices.get(a).inVertices.size }; b.prototype.addVertex = function (a, c) { void 0 === c && (c = {}); if (this.vertex(a)) throw Error("Duplicated vertex: " + a); P(this).vertices.set(a, { outVertices: new Map, inVertices: new Map, children: new Set, parent: null, data: c }); P(this).numVertices++; return this }; b.prototype.addEdge = function (a, c, d) {
                void 0 === d && (d = {}); Z(this, a); Z(this, c); if (this.edge(a, c)) throw Error("Duplicated edge: (" +
                    a + ", " + c + ")"); P(this).numEdges++; P(this).vertices.get(a).outVertices.set(c, d); P(this).vertices.get(c).inVertices.set(a, d); return this
            }; b.prototype.setChild = function (a, c) { Z(this, a); Z(this, c); P(this).vertices.get(a).children.add(c); P(this).vertices.get(c).parent = a; return this }; b.prototype.removeVertex = function (a) {
                var c, d; try { for (var b = D(this.outVertices(a)), e = b.next(); !e.done; e = b.next()) { var h = e.value; this.removeEdge(a, h) } } catch (q) { var l = { error: q } } finally {
                    try { e && !e.done && (c = b.return) && c.call(b) } finally {
                        if (l) throw l.error;
                    }
                } try { for (var k = D(this.inVertices(a)), n = k.next(); !n.done; n = k.next())h = n.value, this.removeEdge(h, a) } catch (q) { var p = { error: q } } finally { try { n && !n.done && (d = k.return) && d.call(k) } finally { if (p) throw p.error; } } (l = this.parent(a)) && this.unsetChild(l, a); P(this).vertices.delete(a); P(this).numVertices--; return this
            }; b.prototype.removeEdge = function (a, c) {
                if (null === this.edge(a, c)) throw Error("Invalid edge: (" + a + ", " + c + ")"); P(this).vertices.get(a).outVertices.delete(c); P(this).vertices.get(c).inVertices.delete(a);
                P(this).numEdges--; return this
            }; b.prototype.unsetChild = function (a, c) { Z(this, a); Z(this, c); P(this).vertices.get(a).children.delete(c); P(this).vertices.get(c).parent = null; return this }; return b
    }(ed), S = function (d, b, a, c) { if (0 === c.length) return b.get(d)[a]; b.get(d)[a] = c[0]; return d }, fd = function (d, b) { return function (a, c) { return d({ u: a, v: c, ud: b.vertex(a), vd: b.vertex(c), d: b.edge(a, c) }) } }, Db = function (d, b, a, c) {
        var g, f; if (c.has(b)) {
            if (b = c.get(b), b !== a) try {
                for (var e = D(d.vertices()), h = e.next(); !h.done; h = e.next()) {
                    var l =
                        h.value; c.get(l) === b && c.set(l, a)
                }
            } catch (r) { var k = { error: r } } finally { try { h && !h.done && (g = e.return) && g.call(e) } finally { if (k) throw k.error; } }
        } else { c.set(b, a); try { for (var n = D(d.outVertices(b)), p = n.next(); !p.done; p = n.next())l = p.value, Db(d, l, a, c) } catch (r) { var q = { error: r } } finally { try { p && !p.done && (f = n.return) && f.call(n) } finally { if (q) throw q.error; } } }
    }, gd = function (d) {
        var b, a = new Map; try { for (var c = D(d.vertices()), g = c.next(); !g.done; g = c.next()) { var f = g.value; 0 === d.inDegree(f) && Db(d, f, f, a) } } catch (l) { var e = { error: l } } finally {
            try {
                g &&
                !g.done && (b = c.return) && b.call(c)
            } finally { if (e) throw e.error; }
        } var h = hc(a); return h.filter(function (a, c) { return h.indexOf(a) === c }).map(function (c) { return d.vertices().filter(function (d) { return a.get(d) === c }) })
    }, hd = function (d, b, a) {
        var c, g = []; try { for (var f = D(d.vertices()), e = f.next(); !e.done; e = f.next()) { var h = e.value, l = b[h]; void 0 === g[l] && (g[l] = []); g[l].push(h) } } catch (n) { var k = { error: n } } finally { try { e && !e.done && (c = f.return) && c.call(f) } finally { if (k) throw k.error; } } if (a) {
            for (d = 0; d < g.length; ++d)void 0 ===
                g[d] && (g[d] = []); return g
        } return g.filter(function (a) { return void 0 !== a })
    }, id = 0, jd = function (d, b, a, c, g) {
        var f, e; try {
            for (var h = D(d.edges()), l = h.next(); !l.done; l = h.next()) {
                var k = N(l.value, 2), n = k[0], p = k[1], q = d.edge(n, p); if (1 < a[p] - a[n]) {
                    var r = n; for (e = a[n] + 1; e < a[p]; ++e) { var t = "__symbol__" + ++id; d.addVertex(t, { u: n, v: p, dummy: !0, width: q.width + c, origWidth: q.width, height: g, origHeight: 0, layer: e }); d.addEdge(r, t, { u: n, v: p, dummy: !0, reversed: d.edge(n, p).reversed, width: q.width }); b[e].push(t); r = t } d.addEdge(r, p, {
                        u: n,
                        v: p, dummy: !0, reversed: d.edge(n, p).reversed, width: q.width
                    }); d.removeEdge(n, p)
                }
            }
        } catch (v) { var u = { error: v } } finally { try { l && !l.done && (f = h.return) && f.call(h) } finally { if (u) throw u.error; } }
    }, kd = function (d, b, a) { for (var c, g, f = b.length, e = a.length, h = {}, l = new Int8Array(f * e), k = 0; k < e; ++k)h[a[k]] = k; for (k = 0; k < f; ++k) { a = b[k]; try { for (var n = (c = void 0, D(d.outVertices(a))), p = n.next(); !p.done; p = n.next())l[k * e + h[p.value]] = 1 } catch (q) { c = { error: q } } finally { try { p && !p.done && (g = n.return) && g.call(n) } finally { if (c) throw c.error; } } } return l },
        ld = function (d, b, a, c) { void 0 === c && (c = !1); var g = {}, f = b.length, e = a.length; d = kd(d, b, a); var h = function (a, c) { return g[a] - g[c] }; if (c) { for (c = 0; c < f; ++c) { for (var l = 0, k = 0, n = 0; n < e; ++n) { var p = d[c * e + n]; k += p; l += n * p } g[b[c]] = l / k } b.sort(h) } else { for (n = 0; n < e; ++n) { for (c = k = l = 0; c < f; ++c)p = d[c * e + n], k += p, l += c * p; g[a[n]] = l / k } a.sort(h) } }, Ua = new WeakMap, md = function () {
            function d() { Ua.set(this, { repeat: 8, method: ld }) } d.prototype.call = function (d, a) {
                for (var c = a.length, b = this.repeat(), f = this.method(), e = 0; e < b; ++e) {
                    for (var h = 1; h < c; ++h)f(d,
                        a[h - 1], a[h]); for (h = c - 1; 0 < h; --h)f(d, a[h - 1], a[h], !0)
                }
            }; d.prototype.repeat = function () { return S(this, Ua, "repeat", arguments) }; d.prototype.method = function () { return S(this, Ua, "method", arguments) }; return d
        }(), nd = function (d, b, a) {
            var c, g, f; b = []; try { for (var e = D(a), h = e.next(); !h.done; h = e.next()) { var l = h.value; try { for (var k = (g = void 0, D(d.inVertices(l))), n = k.next(); !n.done; n = k.next())b.push([n.value, l]) } catch (q) { g = { error: q } } finally { try { n && !n.done && (f = k.return) && f.call(k) } finally { if (g) throw g.error; } } } } catch (q) {
                var p =
                    { error: q }
            } finally { try { h && !h.done && (c = e.return) && c.call(e) } finally { if (p) throw p.error; } } return b
        }, od = function (d, b) { var a, c = [], g = []; try { for (var f = D(d), e = f.next(); !e.done; e = f.next()) { var h = e.value; b(h) ? c.push(h) : g.push(h) } } catch (k) { var l = { error: k } } finally { try { e && !e.done && (a = f.return) && a.call(f) } finally { if (l) throw l.error; } } return [c, g] }, pd = function (d, b) {
            var a, c, g, f, e, h = b.length - 2, l = {}, k = {}, n = function (a) { a = N(a, 2); var c = a[1]; return l[a[0]] && l[c] }; try {
                for (var p = D(d.vertices()), q = p.next(); !q.done; q = p.next()) {
                    var r =
                        q.value, t = d.vertex(r); l[r] = !!t.dummy; k[r] = t.order
                }
            } catch (J) { var u = { error: J } } finally { try { q && !q.done && (a = p.return) && a.call(p) } finally { if (u) throw u.error; } } for (u = 1; u < h; ++u) {
                a = nd(d, b[u], b[u + 1]); p = N(od(a, n), 2); a = p[0]; p = p[1]; try {
                    for (var v = (c = void 0, D(a)), w = v.next(); !w.done; w = v.next()) {
                        var x = N(w.value, 2), y = x[0], z = x[1]; try { for (var B = (f = void 0, D(p)), G = B.next(); !G.done; G = B.next()) { var A = N(G.value, 2), F = A[0], E = A[1]; if (k[y] < k[F] && k[z] > k[E] || k[y] > k[F] && k[z] < k[E]) d.edge(F, E).type1Conflict = !0 } } catch (J) { f = { error: J } } finally {
                            try {
                                G &&
                                !G.done && (e = B.return) && e.call(B)
                            } finally { if (f) throw f.error; }
                        }
                    }
                } catch (J) { c = { error: J } } finally { try { w && !w.done && (g = v.return) && g.call(v) } finally { if (c) throw c.error; } }
            }
        }, Eb = function (d, b, a) { void 0 === a && (a = !1); b = a ? d.outVertices(b) : d.inVertices(b); b.sort(function (a, b) { return d.vertex(a).order - d.vertex(b).order }); a = (b.length - 1) / 2; return { left: b[Math.floor(a)], right: b[Math.ceil(a)] } }, qd = function (d, b, a) {
            var c, g, f, e, h, l, k = a.rtol, n = void 0 === k ? !1 : k; a = a.btot; var p = void 0 === a ? !1 : a, q = function () {
                var a = []; if (p) for (var c =
                    b.length - 2; 0 <= c; --c)a.push(b[c]); else for (c = 1; c < b.length; ++c)a.push(b[c]); return a
            }; a = function (a) { var c = []; if (n) for (var d = a.length - 1; 0 <= d; --d)c.push(a[d]); else for (d = 0; d < a.length; ++d)c.push(a[d]); return c }; k = p ? function (a, c) { return d.edge(c, a) } : function (a, c) { return d.edge(a, c) }; var r = p ? function (a) { return d.outDegree(a) } : function (a) { return d.inDegree(a) }, t = p ? function (a, c) { return Eb(a, c, !0) } : function (a, c) { return Eb(a, c) }; try {
                for (var u = D(d.vertices()), v = u.next(); !v.done; v = u.next()) {
                    var w = v.value; d.vertex(w).root =
                        w; d.vertex(w).align = w
                }
            } catch (O) { var x = { error: O } } finally { try { v && !v.done && (c = u.return) && c.call(u) } finally { if (x) throw x.error; } } try {
                for (var y = D(q()), z = y.next(); !z.done; z = y.next()) {
                    var B = z.value; x = n ? Infinity : -Infinity; try {
                        for (var G = (f = void 0, D(a(B))), A = G.next(); !A.done; A = G.next()) {
                            var F = A.value; if (0 < r(F)) {
                                var E = t(d, F), J = E.left, L = E.right; c = J === L ? [J] : n ? [L, J] : [J, L]; try {
                                    for (var M = (h = void 0, D(c)), da = M.next(); !da.done; da = M.next())if (w = da.value, !k(w, F).type1Conflict && !k(w, F).type2Conflict && (n ? x > d.vertex(w).order :
                                        x < d.vertex(w).order)) { d.vertex(F).align = d.vertex(F).root = d.vertex(w).root; d.vertex(w).align = F; x = d.vertex(w).order; break }
                                } catch (O) { h = { error: O } } finally { try { da && !da.done && (l = M.return) && l.call(M) } finally { if (h) throw h.error; } }
                            }
                        }
                    } catch (O) { f = { error: O } } finally { try { A && !A.done && (e = G.return) && e.call(G) } finally { if (f) throw f.error; } }
                }
            } catch (O) { var I = { error: O } } finally { try { z && !z.done && (g = y.return) && g.call(y) } finally { if (I) throw I.error; } }
        }, rd = function (d, b, a) {
            var c, g, f, e; a = a.rtol; var h = void 0 === a ? !1 : a, l = h ? function (a) {
                return b[a.layer][a.order +
                    1]
            } : function (a) { return b[a.layer][a.order - 1] }, k = function (a) { var c = d.vertex(a); if (null === c.x) { c.x = 0; var g = a; do { g = d.vertex(g); if (h ? g.order < b[g.layer].length - 1 : 0 < g.order) { var f = l(g); f = d.vertex(f); var e = f.root, m = d.vertex(e); k(e); c.sink === a && (c.sink = m.sink); c.sink === m.sink ? c.x = Math.max(c.x, m.x + (f.width + g.width) / 2) : (e = d.vertex(m.sink), e.shift = Math.min(e.shift, c.x - m.x - (f.width + g.width) / 2)) } g = g.align } while (g !== a) } }; try {
                for (var n = D(d.vertices()), p = n.next(); !p.done; p = n.next()) {
                    var q = p.value, r = d.vertex(q); r.sink =
                        q; r.shift = Infinity; r.x = null
                }
            } catch (E) { var t = { error: E } } finally { try { p && !p.done && (c = n.return) && c.call(n) } finally { if (t) throw t.error; } } try { for (var u = D(d.vertices()), v = u.next(); !v.done; v = u.next())q = v.value, d.vertex(q).root === q && k(q) } catch (E) { var w = { error: E } } finally { try { v && !v.done && (g = u.return) && g.call(u) } finally { if (w) throw w.error; } } try { for (var x = D(d.vertices()), y = x.next(); !y.done; y = x.next())q = y.value, r = d.vertex(q), r.x = d.vertex(r.root).x } catch (E) { var z = { error: E } } finally {
                try { y && !y.done && (f = x.return) && f.call(x) } finally {
                    if (z) throw z.error;
                }
            } try { for (var B = D(d.vertices()), G = B.next(); !G.done; G = B.next()) { q = G.value; r = d.vertex(q); var A = d.vertex(d.vertex(r.root).sink).shift; Infinity > A && (r.x += A) } } catch (E) { var F = { error: E } } finally { try { G && !G.done && (e = B.return) && e.call(B) } finally { if (F) throw F.error; } }
        }, sd = function (d) { d.sort(function (d, a) { return d - a }) }, td = function (d, b) {
            var a, c, g, f, e, h, l, k, n, p, q, r, t, u; pd(d, b); var v = {}; try { for (var w = D(d.vertices()), x = w.next(); !x.done; x = w.next()) { var y = x.value; v[y] = [] } } catch (U) { var z = { error: U } } finally {
                try {
                    x && !x.done &&
                    (a = w.return) && a.call(w)
                } finally { if (z) throw z.error; }
            } z = [{ rtol: !1, btot: !1 }, { rtol: !0, btot: !1 }, { rtol: !1, btot: !0 }, { rtol: !0, btot: !0 }]; a = -Infinity; w = Infinity; for (x = 0; x < z.length; ++x) {
                var B = z[x]; qd(d, b, B); rd(d, b, B); var G = Infinity, A = -Infinity; try { for (var F = (c = void 0, D(d.vertices())), E = F.next(); !E.done; E = F.next())y = E.value, B.rtol && (d.vertex(y).x = -d.vertex(y).x), G = Math.min(G, d.vertex(y).x), A = Math.max(A, d.vertex(y).x) } catch (U) { c = { error: U } } finally {
                    try { E && !E.done && (g = F.return) && g.call(F) } finally {
                        if (c) throw c.error;
                    }
                } A - G < w - a && (a = G, w = A); try { for (var J = (f = void 0, D(d.vertices())), L = J.next(); !L.done; L = J.next())y = L.value, v[y].push(d.vertex(y).x) } catch (U) { f = { error: U } } finally { try { L && !L.done && (e = J.return) && e.call(J) } finally { if (f) throw f.error; } }
            } for (x = 0; x < z.length; ++x)if (B = z[x], B.rtol) {
                A = -Infinity; try { for (var M = (h = void 0, D(d.vertices())), C = M.next(); !C.done; C = M.next())y = C.value, A = Math.max(A, v[y][x]) } catch (U) { h = { error: U } } finally { try { C && !C.done && (l = M.return) && l.call(M) } finally { if (h) throw h.error; } } try {
                    for (var I = (k = void 0,
                        D(d.vertices())), O = I.next(); !O.done; O = I.next())y = O.value, v[y][x] += w - A
                } catch (U) { k = { error: U } } finally { try { O && !O.done && (n = I.return) && n.call(I) } finally { if (k) throw k.error; } }
            } else {
                G = Infinity; try { for (var W = (p = void 0, D(d.vertices())), H = W.next(); !H.done; H = W.next())y = H.value, G = Math.min(G, v[y][x]) } catch (U) { p = { error: U } } finally { try { H && !H.done && (q = W.return) && q.call(W) } finally { if (p) throw p.error; } } try { for (var Q = (r = void 0, D(d.vertices())), ba = Q.next(); !ba.done; ba = Q.next())y = ba.value, v[y][x] += a - G } catch (U) { r = { error: U } } finally {
                    try {
                        ba &&
                        !ba.done && (t = Q.return) && t.call(Q)
                    } finally { if (r) throw r.error; }
                }
            } b = function (a) { sd(v[a]); d.vertex(a).x = (v[a][1] + v[a][2]) / 2; d.edges().some(function (c) { var b = N(c, 2); c = b[0]; if (b[1] === a && (b = d.vertex(a).x - d.vertex(c).x, 10 > Math.abs(b))) return d.vertex(a).x = d.vertex(c).x, !0 }) }; try { for (var Y = D(d.vertices()), ea = Y.next(); !ea.done; ea = Y.next())y = ea.value, b(y) } catch (U) { var la = { error: U } } finally { try { ea && !ea.done && (u = Y.return) && u.call(Y) } finally { if (la) throw la.error; } }
        }, ud = function () {
            function d() { } d.prototype.call =
                function (d, a) {
                    var c, b, f, e, h; td(d, a); var l = 0; try {
                        for (var k = D(a), n = k.next(); !n.done; n = k.next()) {
                            var p = n.value; a = 0; try { for (var q = (b = void 0, D(p)), r = q.next(); !r.done; r = q.next()) { var t = r.value; a = Math.max(a, d.vertex(t).height) } } catch (M) { b = { error: M } } finally { try { r && !r.done && (f = q.return) && f.call(q) } finally { if (b) throw b.error; } } l += a / 2; try { for (var u = (e = void 0, D(p)), v = u.next(); !v.done; v = u.next())t = v.value, d.vertex(t).y = l } catch (M) { e = { error: M } } finally {
                                try { v && !v.done && (h = u.return) && h.call(u) } finally {
                                    if (e) throw e.error;
                                }
                            } l += a / 2
                        }
                    } catch (M) { var w = { error: M } } finally { try { n && !n.done && (c = k.return) && c.call(k) } finally { if (w) throw w.error; } } var x, y; c = w = Infinity; try { for (var z = D(d.vertices()), B = z.next(); !B.done; B = z.next()) { var G = B.value, A = d.vertex(G); w = Math.min(w, A.x - A.origWidth / 2); c = Math.min(c, A.y - A.origHeight / 2) } } catch (M) { var F = { error: M } } finally { try { B && !B.done && (x = z.return) && x.call(z) } finally { if (F) throw F.error; } } try { for (var E = D(d.vertices()), J = E.next(); !J.done; J = E.next())G = J.value, A = d.vertex(G), A.x -= w, A.y -= c } catch (M) {
                        var L =
                            { error: M }
                    } finally { try { J && !J.done && (y = E.return) && y.call(E) } finally { if (L) throw L.error; } }
                }; return d
        }(), Fb = function (d, b, a) {
            var c; if (0 === b.length) return []; var g = [], f = [], e = d.vertex(b[0])[a ? "v" : "u"]; try { for (var h = D(b), l = h.next(); !l.done; l = h.next()) { var k = l.value, n = d.vertex(k); (!n.dummy || n[a ? "v" : "u"] !== e) && 0 < f.length && (g = g.concat(f), f = []); n.dummy && (f.push(k), e = n[a ? "v" : "u"]) } } catch (q) { var p = { error: q } } finally { try { l && !l.done && (c = h.return) && c.call(h) } finally { if (p) throw p.error; } } 0 < f.length && (g = g.concat(f));
            return g
        }, Gb = function (d, b, a) { var c, g, f = 0, e = 0; try { for (var h = D(b), l = h.next(); !l.done; l = h.next()) { var k = l.value; f += d.vertex(k)[a ? "x" : "y"]; e += d.vertex(k).origWidth || 0 } } catch (t) { var n = { error: t } } finally { try { l && !l.done && (c = h.return) && c.call(h) } finally { if (n) throw n.error; } } n = f / b.length - (e - 1) / 2; try { for (var p = D(b), q = p.next(); !q.done; q = p.next())k = q.value, d.vertex(k)[a ? "x" : "y"] = n, n += d.vertex(k).origWidth || 0 } catch (t) { var r = { error: t } } finally { try { q && !q.done && (g = p.return) && g.call(p) } finally { if (r) throw r.error; } } },
        vd = function (d, b, a) { for (var c, g, f, e, h = 0; h < b.length - 1; ++h)try { for (var l = (c = void 0, D(Fb(d, b[h], !1))), k = l.next(); !k.done; k = l.next()) { var n = k.value; Gb(d, n, a) } } catch (r) { c = { error: r } } finally { try { k && !k.done && (g = l.return) && g.call(l) } finally { if (c) throw c.error; } } for (h = b.length - 1; 0 < h; --h)try { for (var p = (f = void 0, D(Fb(d, b[h], !0))), q = p.next(); !q.done; q = p.next())n = q.value, Gb(d, n, a) } catch (r) { f = { error: r } } finally { try { q && !q.done && (e = p.return) && e.call(p) } finally { if (f) throw f.error; } } }, Va = new WeakMap, wd = function () {
            function d() {
                Va.set(this,
                    { f: function () { return 0 } })
            } d.prototype.call = function (d) { var a, c = Va.get(this).f, b = {}; try { for (var f = D(d.vertices()), e = f.next(); !e.done; e = f.next()) { var h = e.value; b[h] = c(h) } } catch (k) { var l = { error: k } } finally { try { e && !e.done && (a = f.return) && a.call(f) } finally { if (l) throw l.error; } } return b }; d.prototype.f = function () { return S(this, Va, "f", arguments) }; return d
        }(), xd = function (d, b) {
            var a, c, g = b.ltor, f = b.vertexWidth, e = b.vertexHeight, h = b.edgeWidth, l = b.layerMargin, k = b.vertexMargin, n = b.vertexLeftMargin, p = b.vertexRightMargin,
            q = b.vertexTopMargin; b = b.vertexBottomMargin; var r = new Cb; try { for (var t = D(d.vertices()), u = t.next(); !u.done; u = t.next()) { var v = u.value, w = d.vertex(v), x = f({ u: v, d: w }), y = e({ u: v, d: w }), z = n({ u: v, d: w }) + p({ u: v, d: w }), B = q({ u: v, d: w }) + b({ u: v, d: w }); r.addVertex(v, { width: g ? y + k + B : x + l + z, height: g ? x + l + z : y + k + B, origWidth: g ? y : x, origHeight: g ? x : y }) } } catch (M) { var G = { error: M } } finally { try { u && !u.done && (a = t.return) && a.call(t) } finally { if (G) throw G.error; } } try {
                for (var A = D(d.edges()), F = A.next(); !F.done; F = A.next()) {
                    var E = N(F.value, 2);
                    v = E[0]; var J = E[1]; r.addEdge(v, J, { width: h(v, J) })
                }
            } catch (M) { var L = { error: M } } finally { try { F && !F.done && (c = A.return) && c.call(A) } finally { if (L) throw L.error; } } return r
        }, yd = function (d, b, a) {
            var c, g, f, e, h, l, k, n, p = { vertices: {}, edges: {} }, q = []; try { for (var r = D(d.vertices()), t = r.next(); !t.done; t = r.next()) { var u = t.value; p.edges[u] = {} } } catch (Q) { var v = { error: Q } } finally { try { t && !t.done && (c = r.return) && c.call(r) } finally { if (v) throw v.error; } } try {
                for (var w = D(b), x = w.next(); !x.done; x = w.next()) {
                    var y = x.value; v = -Infinity; try {
                        for (var z =
                            (f = void 0, D(y)), B = z.next(); !B.done; B = z.next())u = B.value, v = Math.max(v, d.vertex(u).origHeight || 0)
                    } catch (Q) { f = { error: Q } } finally { try { B && !B.done && (e = z.return) && e.call(z) } finally { if (f) throw f.error; } } q.push(v)
                }
            } catch (Q) { var G = { error: Q } } finally { try { x && !x.done && (g = w.return) && g.call(w) } finally { if (G) throw G.error; } } for (G = 0; G < b.length; ++G) {
                y = b[G]; g = q[G]; try {
                    for (var A = (h = void 0, D(y)), F = A.next(); !F.done; F = A.next()) {
                        u = F.value; var E = d.vertex(u); if (!E.dummy) {
                            p.vertices[u] = {
                                x: a ? E.y : E.x, y: a ? E.x : E.y, width: a ? E.origHeight :
                                    E.origWidth, height: a ? E.origWidth : E.origHeight, layer: E.layer, order: E.order
                            }; try {
                                for (var J = (k = void 0, D(d.outVertices(u))), L = J.next(); !L.done; L = J.next()) {
                                    var M = L.value, C = a ? [[E.y + (E.origHeight || 0) / 2, E.x], [E.y + g / 2, E.x]] : [[E.x, E.y + (E.origHeight || 0) / 2], [E.x, E.y + g / 2]]; y = M; var I = d.vertex(y); for (f = G + 1; I.dummy;)a ? (C.push([I.y - q[f] / 2, I.x]), C.push([I.y + q[f] / 2, I.x])) : (C.push([I.x, I.y - q[f] / 2]), C.push([I.x, I.y + q[f] / 2])), y = d.outVertices(y)[0], I = d.vertex(y), f += 1; a ? (C.push([I.y - q[f] / 2, I.x]), C.push([I.y - (I.origHeight ||
                                        0) / 2, I.x])) : (C.push([I.x, I.y - q[f] / 2]), C.push([I.x, I.y - (I.origHeight || 0) / 2])); f = C; e = a; for (w = 1; w < f.length - 1;)(e ? f[w][1] : f[w][0]) === (e ? f[w + 1][1] : f[w + 1][0]) ? f.splice(w, 2) : w += 2; if (d.edge(u, M).reversed) { var O = p.edges[y]; y = u; e = f = void 0; w = []; try { for (var W = D(C), H = W.next(); !H.done; H = W.next())w.unshift(H.value) } catch (Q) { e = { error: Q } } finally { try { H && !H.done && (f = W.return) && f.call(W) } finally { if (e) throw e.error; } } O[y] = { points: w, reversed: !0, width: d.edge(u, M).width } } else p.edges[u][y] = {
                                            points: C, reversed: !1, width: d.edge(u,
                                                M).width
                                        }
                                }
                            } catch (Q) { k = { error: Q } } finally { try { L && !L.done && (n = J.return) && n.call(J) } finally { if (k) throw k.error; } }
                        }
                    }
                } catch (Q) { h = { error: Q } } finally { try { F && !F.done && (l = A.return) && l.call(A) } finally { if (h) throw h.error; } }
            } return p
        }, T = new WeakMap, zd = function () {
            function d() {
                T.set(this, {
                    vertexWidth: function (d) { return d.d.width }, vertexHeight: function (d) { return d.d.height }, edgeWidth: function () { return 1 }, layerMargin: 10, vertexMargin: 10, vertexLeftMargin: function () { return 0 }, vertexRightMargin: function () { return 0 }, vertexTopMargin: function () { return 0 },
                    vertexBottomMargin: function () { return 0 }, edgeMargin: 10, ltor: !0, edgeBundling: !1, layerAssignment: new wd, crossingReduction: new md, positionAssignment: new ud
                })
            } d.prototype.layout = function (d) {
                var a, c = xd(d, {
                    vertexWidth: this.vertexWidth(), vertexHeight: this.vertexHeight(), edgeWidth: fd(this.edgeWidth(), d), layerMargin: this.layerMargin(), vertexMargin: this.vertexMargin(), vertexLeftMargin: this.vertexLeftMargin(), vertexRightMargin: this.vertexRightMargin(), vertexTopMargin: this.vertexTopMargin(), vertexBottomMargin: this.vertexBottomMargin(),
                    ltor: this.ltor()
                }); d = this.layerAssignment().call(c); var b = hd(c, d, !0); jd(c, b, d, this.edgeMargin(), this.layerMargin()); var f = b.map(function () { return [] }); d = function (a) { var d, g, h = b.map(function (c) { return c.filter(function (c) { return -1 < a.indexOf(c) }) }); e.crossingReduction().call(c, h); for (var m = 0; m < b.length; ++m)try { for (var l = (d = void 0, D(h[m])), k = l.next(); !k.done; k = l.next())f[m].push(k.value) } catch (w) { d = { error: w } } finally { try { k && !k.done && (g = l.return) && g.call(l) } finally { if (d) throw d.error; } } }; var e = this; try {
                    for (var h =
                        D(gd(c)), l = h.next(); !l.done; l = h.next())d(l.value)
                } catch (n) { var k = { error: n } } finally { try { l && !l.done && (a = h.return) && a.call(h) } finally { if (k) throw k.error; } } for (k = 0; k < f.length; ++k)for (a = f[k], h = 0; h < a.length; ++h)l = a[h], c.vertex(l).layer = k, c.vertex(l).order = h; this.positionAssignment().call(c, f); this.edgeBundling() && vd(c, f, this.ltor()); return yd(c, f, this.ltor())
            }; d.prototype.vertexWidth = function (d) { return S(this, T, "vertexWidth", arguments) }; d.prototype.vertexHeight = function (d) {
                return S(this, T, "vertexHeight",
                    arguments)
            }; d.prototype.edgeWidth = function (d) { return S(this, T, "edgeWidth", arguments) }; d.prototype.layerMargin = function (d) { return S(this, T, "layerMargin", arguments) }; d.prototype.vertexMargin = function (d) { return S(this, T, "vertexMargin", arguments) }; d.prototype.edgeMargin = function (d) { return S(this, T, "edgeMargin", arguments) }; d.prototype.vertexLeftMargin = function (d) { return S(this, T, "vertexLeftMargin", arguments) }; d.prototype.vertexRightMargin = function (d) { return S(this, T, "vertexRightMargin", arguments) }; d.prototype.vertexTopMargin =
                function (d) { return S(this, T, "vertexTopMargin", arguments) }; d.prototype.vertexBottomMargin = function (d) { return S(this, T, "vertexBottomMargin", arguments) }; d.prototype.ltor = function (d) { return S(this, T, "ltor", arguments) }; d.prototype.edgeBundling = function (d) { return S(this, T, "edgeBundling", arguments) }; d.prototype.layerAssignment = function (d) { return S(this, T, "layerAssignment", arguments) }; d.prototype.crossingReduction = function (d) { return S(this, T, "crossingReduction", arguments) }; d.prototype.positionAssignment =
                    function (d) { return S(this, T, "positionAssignment", arguments) }; return d
        }(), Hb = function (e) {
            function b() { var a = null !== e && e.apply(this, arguments) || this; a.connectorVisuals = []; a.connectorAttrs = []; a.connectorAttrsHL = []; return a } K(b, e); b.prototype.buildChildLookup = function () {
                var a = this, c = a.series; a.noodles = a.noodles || []; if (!a.childLookup) {
                    var b = a.childLookup = {}; c.seriesDirty.points() ? c.userPoints.forEach(function (g, e) {
                        var f; e = d.parentNoodles({ currentOptions: g, series: c, _i: e }); (f = a.noodles).push.apply(f, C(e));
                        e.length && d.jsLib.each(e, function (a) { a = a.pid; b[a] = b[a] || []; b[a].push({ currentOptions: g, _i: g._i }) })
                    }) : this.eachPoint(function (c) { var g, f = d.parentNoodles(c); (g = a.noodles).push.apply(g, C(f)); f.length && d.jsLib.each(f, function (a) { a = a.pid; b[a] = b[a] || []; b[a].push(c) }) })
                }
            }; b.prototype.setCoordinates = function (a, c) { this.series.chartArea.isDragging || (this.noodles = this.childLookup = d.undefVal); return this }; b.prototype.getParents = function (a) {
                var c = this, b = [], f, e = []; if (a) {
                    if (f = a.options("parent")) e = d.parentPropToIds(f);
                    return d.jsLib.map(e, function (a) { return c.series.ciManager.exists(a) })
                } this.eachPoint(function (a) { (f = a.options("parent")) ? (e = d.parentPropToIds(f), !c.series.ciManager.exists(e[0]) && b.push(a)) : b.push(a) }); return d.jsLib.uniq(b)
            }; b.prototype.getChildren = function (a) { this.series; this.buildChildLookup(); return this.childLookup[a.currentOptions.id] || [] }; b.prototype.walkUpTree = function (a, c, b) { var g = this; a = this.getParents(a); var e; c && (e = c(a, b)); d.jsLib.each(a, function (a) { g.walkUpTree(a, c, e) }) }; b.prototype.destroy =
                function () { var a = this, c = a.series; a.series.renderer.renderer; var b = c.rootVisuals.area; a.connectorVisuals.slice(0).forEach(function (c) { b.removeChild(c.el); d.jsLib.removeArrItem(a.connectorVisuals, c); c.destroy() }) }; return b
        }(d.SeriesBaseType), ib = Cb, jb = zd, Ib = function () { return { axes: "x,y", values: "", requiredData: "", customAxisOptions: { z: { visible: !1 }, x: { visible: !1, staticDraggable: !0 }, y: { visible: !1, staticDraggable: !0 } } } }, va = function (e, b, a) { return d.dataUtil.calculations(a ? e.map(d.dataUtil.keyArg(a)) : e, b) },
        Cd = function (e) {
            function b() { var a = null !== e && e.apply(this, arguments) || this; a.kind = "annotation"; a.typeConfig = Ib(); a._dragOffset = [0, 0]; a.isCompactHierarchy_cache = []; return a } K(b, e); b.prototype.getTypeConfigDefault = function () { return Ib() }; b.prototype.assignLayers = function (a, c) {
                var b = this; this.isCompactHierarchy_cache = []; d.jsLib.each(a, function (a) {
                    var g = b.getChildren(a).map(function (a) { return a.y }).filter(d.jsLib.def), f = b.getParents(a), e = f.map(function (a) { return a.y }).filter(d.jsLib.def), k; g.length && (k =
                        Math.min.apply(Math, C(g)) - 1); var n; e.length && e.length === f.length && (n = Math.min.apply(Math, C(e)) + 1); k > c && n && (k = n); g = d.jsLib.pick(a.options("y"), k, c); d.jsLib.def(a.y) ? a.y = Math.max(g, a.y) : a.y = g; b._maxLayer = Math.max(g, b._maxLayer); b.assignLayers(b.getChildren(a), g + 1)
                })
            }; b.prototype.correctLayers = function () {
                var a = this, c = this.series, b = this.getParents().map(function (a) { return a.id }); this.eachPoint(function (g) {
                    var f = a.getParents(g); 1 < f.length && (f = d.jsLib.map(f, function (a) { return a.y }), d.jsLib.find(f, function (a) {
                        return a >=
                            g.y
                    }) && (d.jsLib.def(g.options("y")) && d.emitter.emit("warning", c.name || c.id, "orgChildLevel", { data: [g.options("id")], container: c.chart.getWrapper() }), g.y = Math.max.apply(Math, C(f)) + 1, a.walkUpTree(g, function (a, c) { var g = c; d.jsLib.each(a, function (a) { var c = g, f = a.userOptions.y, e = -1 < b.indexOf(a.id) ? 0 : void 0; g = a.y = d.jsLib.pick(f, e, c) }); return g - 1 }, g.y - 1)))
                })
            }; b.prototype.reverseLayers = function () { var a = this._maxLayer; this.eachPoint(function (c) { c.y = a - c.y }) }; b.prototype.applyBoundsToAxes = function (a, c) {
                var d = this.series,
                b = d.chartArea, e = d.xAxis; d = d.yAxis; b.isZoomed = b.isZoomedDragArea = a[2] > c[2] || a[3] > c[3]; a[2] < c[2] && (a[0] = c[0], a[2] = c[2]); a[3] < c[3] && (a[1] = c[1], a[3] = c[3]); e.zoomRange = []; d.zoomRange = []; e.setStaticRange([a[0], a[0] + a[2]], [c[0], c[0] + c[2]]); d.setStaticRange([a[1], a[1] + a[3]], [c[1], c[1] + c[3]])
            }; b.prototype.applyDragOffset = function () { var a = this.series; this._dragOffset = [-a.xAxis.zoomRange[0], -a.yAxis.zoomRange[0]] }; b.prototype.isLastLayerWithChildren = function (a) {
                var c = this; return !this.series.points().items.some(function (d) {
                    return c.getChildren(d).length &&
                        d.y > a.y
                })
            }; b.prototype.isCompactHierarchy = function (a) {
                var c = this, b = a.id, f = c.isCompactHierarchy_cache, e; if (d.jsLib.def(e = f[b])) return e; var h = c.series, l = h.ctManager.settingVal("organizationType", h.currentOptions); e = "vertical" === (a.options("leafPointLayout") || "").toString().toLowerCase(); h = "vertical" === (h.options("leafPointLayout") || "").toString().toLowerCase(); if ("down" !== l || !e && !h || !1 === e) return f[b] = !1; l = c.getChildren(a); f[b] = 1 <= l.length && !l.some(function (a) { return c.getChildren(a).length }) && !l.some(function (a) {
                    return 1 <
                        c.getParents(a).length
                }) && (e || c.isLastLayerWithChildren(a)); return f[b]
            }; b.prototype.isCompacted = function (a) { a = this.getParents(a); for (var c = 0; c < a.length; c++)if (this.isCompactHierarchy(a[c])) return !0 }; b.prototype.isPlacedByLayout = function (a) { a = this.getParents(a); return !a.length || !this.isCompactHierarchy(a[0]) }; b.prototype.setCoordinates = function (a, c) {
                var b = this; e.prototype.setCoordinates.call(this, a, c); var f = this, m = this.series, h = m.indexer; c = c && c.forceCoordinates; var l = ib; if (m.chartArea.isDragging) f.applyDragOffset();
                else if (l && jb) {
                    f._dragOffset = [0, 0]; l = m.options("shape.padding"); l = d.jsLib.def(l) ? 1 <= l ? l : l * Math.min(a.width, a.height) : 10; var k = m.chart.options("defaultAnnotation"); d.jsLib.parseMargin(k.margin || [3, 3]); var n = function (a) { a.points ? H.push(a.points) : d.jsLib.each(a, n) }, p = function (a) { if ((a = a.options("annotation")) && a.margin) return d.jsLib.parseMargin(a.margin); a = m.chart.options("defaultAnnotation"); return d.jsLib.parseMargin(a.margin || [3, 3]) }, q = m.userPoints; k = m.ctManager.settingVal("organizationType", m.currentOptions);
                    var r = "right" === k || "left" === k, t = f.layersReversed = "left" === k || "up" === k, u = f.getParents(); f._maxLayer = 0; f.eachPoint(function (a) { return a.y = void 0 }); f.assignLayers(u, 0); f.correctLayers(); t && f.reverseLayers(); m.indexer.indexKeys(["coordinates", "bbox"], {}, 0); var v = {}, w = { all: 0 }, x = { all: 0 }; if (!c) {
                        u = m.points().items; var y = (new d.dataUtil.nest).key("y").entries(u); for (u = 0; u < y.length; u++) {
                            for (var z = y[u], B = 0, G = 0, A = 0; A < z.values.length; A++) {
                                var F = z.values[A]; v = {}; var E = { meta: v, styleSet: m.getPointAttr(q[F._i]) };
                                this.initPointLabel(F, E, E.styleSet); m.indexer.setValue("coordinates", F._i, E); F = v.annotationOptions; var J = F.syncWidth, L = F.syncHeight; if (J || L) { J = "all" === J; L = "all" === L; var D = v.annotationOptions.label || {}; d.jsLib.def(D.width) || d.jsLib.def(F.width) || (J ? w.all = Math.max(w.all, v.labelSize[0]) : B = Math.max(B, v.labelSize[0])); d.jsLib.def(D.height) || d.jsLib.def(F.height) || (L ? x.all = Math.max(x.all, v.labelSize[1]) : G = Math.max(G, v.labelSize[1])) }
                            } w[z.key] = B; x[z.key] = G
                        } (2 < Object.keys(w).length || 0 < w.all || 2 < Object.keys(x).length ||
                            0 < x.all) && f.eachPoint(function (a, c) {
                                E = m.indexer.getValue("coordinates", c); v = E.meta; c = v.annotationOptions; var b = c.syncWidth, g = c.syncHeight, f = v.annotationOptions.label || {}, e = w[a.y + ""]; a = x[a.y + ""]; if (b && !d.jsLib.def(f.width) && !d.jsLib.def(c.width)) { var h; if (b = "all" === b ? w.all : e) { if (d.jsLib.def(h = f.maxWidth) && Math.min(b, h) > v.labelSize[0]) { v.syncWidth = v.labelSize[0] = Math.min(b, h); var l = !0 } l || (v.syncWidth = v.labelSize[0] = b) } } !g || d.jsLib.def(f.height) || d.jsLib.def(c.height) || (b = "all" === g ? x.all : a, v.syncHeight =
                                    v.labelSize[1] = b)
                            })
                    } var H = []; this.coordinates = { line: H }; var I = function (a) { a = m.indexer.getValue("coordinates", a._i).meta.labelSize; return { width: a[0], height: a[1] } }, O = function (a) { var c = f.getChildren(a), b = I(a); if (!f.isCompactHierarchy(a)) return { isCompact: !1, width: b.width, height: b.height }; c = c.map(I).map(function (c) { return c.width + 5 + p(a)[3] }); c = d.jsLib.max(C([b.width], c)); return { isCompact: !0, width: b.width, height: b.height, totalWidth: c } }; q = m.points().items; var W = q.reduce(function (a, c) { a[c._i] = O(c); return a },
                        {}), K = q.reduce(function (a, c, d) { d = W[d]; if (d.isCompact) { var b = a[c.y]; a[c.y] = b ? Math.max(b, d.height) : d.height } return a }, {}); q.forEach(function (a, c) { if (c = K[a.y]) W[a._i].height = c }); var Q = ic(m); u = Ga(f, Q, W, t, k, c); var ba = u.boxes; q = u.rootBoxes; q = u.layout; var Y = u.overlapPoints; if (Y.length) {
                            var ea = r ? "bottom" : "right", la = Y.map(function (a) { return { point: a } }), U = void 0, pb = function (a, c) {
                                var b = r ? 0 : 3, g = r ? 2 : 1, f = p(c), e = p(a); b = f[b] + e[g]; return r ? { diff: c.coord().xyz[1] - (d.bboxLib.bottomY(a.coord().xyz) + b), marginGap: b } : {
                                    diff: c.coord().xyz[0] -
                                        (d.bboxLib.rightX(a.coord().xyz) + b), marginGap: b
                                }
                            }, ja = []; q = function (a) { a = la[a]; var c = a.point, b = c.coord().xyz; if (U = a.otherPoint = m.points().items.find(function (a) { return a.y === c.y && d.bboxLib.collide(b, a.coord().xyz) })) { var g = Q.indexOf(c), f = Q.indexOf(U); if (a.curIsOnRight = g > f) g = pb(U, c).diff, a.diff = g, a.adjust = { id: U.id }, a.adjust[ea] = Math.abs(g), ja.push(a) } }; for (u = 0; u < la.length; u++)q(u); u = Ga(f, Q, W, t, k, c, ja); ba = u.boxes; q = u.rootBoxes; q = u.layout; Y = u.overlapPoints; ja = []; if (Y.length) {
                                q = function (a) {
                                    var c = Y[a];
                                    if ((a = d.jsLib.find(la, function (a) { return a.point._i === c._i })) && a.curIsOnRight) { var b = a.adjust[ea], g = pb(a.otherPoint, c); g = d.mathLib.diff(b, Math.abs(g.diff)); a.adjust[ea] = b / g * b; ja.push(a) }
                                }; for (u = 0; u < Y.length; u++)q(u); c = Ga(f, Q, W, t, k, c, ja); ba = c.boxes; q = c.rootBoxes; q = c.layout; Y = c.overlapPoints
                            }
                        } m.points().each(function (a) {
                            if (f.isCompactHierarchy(a)) {
                                var c = m.indexer.getValue("coordinates", a._i).xyz, d = f.getChildren(a), b = p(a), g = c[1] + I(a).height + b[0] + b[2], e = c[0] + 5; d.forEach(function (c) {
                                    c = m.indexer.getValue("coordinates",
                                        c._i); var d = c.meta.labelSize, b = p(a), f = [e + b[3] + 5, g, d[0], d[1]]; g += d[1] + b[0] + b[2]; c.xyz = f; ba.push(f)
                                })
                            }
                        }); n(q.edges); (function (a) {
                            var c = b.series.points().items; c.forEach(function (g) {
                                var e = a[g._i], h = "pid", l = "c_i"; f.layersReversed && (h = "cid", l = "p_i"); var k = d.jsLib.filter(f.noodles, function (a) { return a[h] === g.currentOptions.id }); e && Object.keys(e).length && !b.isCompactHierarchy(g) ? k.forEach(function (a) {
                                    var c = e[a[l]]; if (c) {
                                        a.points = c.points; c = m.indexer.getValue("coordinates", g._i).xyz[3]; var d = I(g).height;
                                        c -= d; 0 < c && (a.points[0][1] -= c); f.layersReversed && (a.points = a.points.slice(0), a.points.reverse())
                                    }
                                }) : k.forEach(function (a) { var d = c.find(function (c) { return c._i === a.p_i }), b = c.find(function (c) { return c._i === a.c_i }), g = N(m.indexer.getValue("coordinates", d._i).xyz, 2), f = g[0]; g = g[1]; d = I(d).height; var e = N(m.indexer.getValue("coordinates", b._i).xyz, 4); b = e[0]; var h = e[1]; e[2]; e = e[3]; a.points = [[f + 5, g + d], [f + 5, h + e / 2], [b, h + e / 2]] })
                            })
                        })(q.edges); c = d.bboxLib.pad(d.bboxLib.bboxUnion(ba), -l); k = d.bboxLib.center(c); a = d.bboxLib.fromRect(a);
                    l = d.bboxLib.center(a); k = f._coordOffset = [l[0] - k[0], l[1] - k[1]]; if (0 > k[0] || 0 > k[1]) q = f.getParents().map(function (a) { return m.indexer.getValue("coordinates", a._i).xyz }), t = d.bboxLib.bboxUnion(q), t = d.bboxLib.center(t), l = [d.jsLib.clamp(l[0] - t[0], a[2] - c[2], 0), d.jsLib.clamp(l[1] - t[1], a[3] - c[3], 0)], 0 > k[0] && (k[0] = l[0]), 0 > k[1] && (k[1] = l[1]); c = d.bboxLib.translate(c, k); f.applyBoundsToAxes(c, a); f.renderOrder = h.sortByNone(); f.renderOrderRev = f.renderOrder.slice(0); f.renderOrderRev.reverse()
                } return this
            }; b.prototype.haloPath =
                function (a, c) { var b = this.series, f, m = a.visuals.body; if ((m = m && m.rootPanel) && (f = d.jsLib.evalPath(m, "rect.d"))) { a = b.chartArea.rootVisuals.dataContent; var h = m.globalX - a.globalX, l = m.globalY - a.globalY; return gc(d.pathLib.fromString(f), function (a) { return [a[0] + h, a[1] + l] }).toString() } return e.prototype.haloPath.call(this, a, c) }; b.prototype.render = function (a) {
                    var c = this.series, b = this, f; c.currentOptions.shape || {}; c.rootVisuals; c.visuals; c.preRender(a); c.info.type; c.info.style; var e = b._dragOffset, h = b._coordOffset.slice(0);
                    h = d.bboxLib.translate(h, e); var l = c.points().items, k; e = function (g, e) {
                        k = l[b.renderOrder[g]]; var m = k.currentOptions, n = (g = m.annotation) && g.asHTML; g = c.indexer.getValue("coordinates", k._i) || { meta: {} }; var p = g.styleSet || c.getPointAttr(m); e = k.visuals; m = p.pointAttr[m.selected ? d.consts.SELECT_STATE : k._state || d.consts.NORMAL_STATE]; var q = d.bboxLib.translate(g.xyz, h); g.hitTest = function (a, c) { return d.bboxLib.pointInside(q, [a, c]) }; g.pathD = d.bboxLib.toPath(q); g.shapeBounds = q.slice(0); p = {}; if (n) {
                            var r = c.chartArea.rootVisuals.content.getGlobalBbox();
                            q[0] += r.x; q[1] += r.y
                        } p[n ? "left" : "offsetX"] = n ? q[0] + "px" : q[0]; p[n ? "top" : "offsetY"] = n ? q[1] + "px" : q[1]; f = b.render_applyDynamicAttrVals([f, m, p], b._initialPosSet ? a : !1, m); c.chartArea.isDragging && d.jsLib.setPathVal(f, "animation.duration", 0); n = g.meta.annotationOptions; n.syncWidth && (f.width = g.meta.labelSize[0]); n.syncHeight && (f.height = g.meta.labelSize[1]); e.body.rootPanel.attr(f); b.hideUnusedPointVisuals(k)
                    }; for (var n = 0, p = l.length; n < p; n++)e(n); b._initialPosSet = !0; b.hideUnused(); return b
                }; b.prototype.renderHierarchy =
                    function (a) { var c = this.series; c.indexer; var b = this._dragOffset, f = this._coordOffset.slice(0); f = d.bboxLib.translate(f, b); this.noodles || this.buildChildLookup(); b = this.noodles.map(function (a) { var b = d.jsLib.merge({ color: "#707070", width: 1 }, c.options("line") || {}, c.ciManager.exists(a.cid).options("connectorLine") || {}, a.line), g = d.jsLib.pick(b.radius, 3); return d.jsLib.merge(d.stylingLib.lineToAttr(b), { radius: g, key: a.key, zIndex: a.zIndex || 5 }) }); this.squareConnectorLines(b, f); this.updateLines(b, a); return this };
            b.prototype.squareConnectorLines = function (a, c) {
                var b = this, f = this.series, e = f.ciManager, h = this.noodles, l = f.ctManager.settingVal("organizationType", f.currentOptions), k = "up" === l || "down" === l, n = f.rootVisuals.line, p = "rightangle" === f.ctSv("organizationConnectorType"), q = []; h.forEach(function (a) { q.push(a.layer = e.exists(a.pid).y) }); var r = [Math.min.apply(Math, C(q)), Math.max.apply(Math, C(q))], t = c.map(function (a) { return -a }), u = function (a) {
                    var c = { vc: k ? 1 : 0, hc: k ? 0 : 1, o: [0, 0], i: [0, 0], f: [0, 0], b: [0, 0] }; c.o[c.vc] = a[0][c.vc] <
                        a[1][c.vc] ? 1 : -1; c.f[c.hc] = a[0][c.hc] < a[1][c.hc] ? 1 : -1; c.i[c.vc] = -1 * c.o[c.vc]; c.b[c.hc] = -1 * c.f[c.hc]; return c
                }, v = function (a) { var c = e.exists(a.cid); a = e.exists(a.pid); return c && a && c.y === a.y }, w = function (a) { return [a[0], a[a.length - 1]] }; f = (new d.dataUtil.nest).key("y").entries(f.points().items); var x = {}; d.jsLib.each(f, function (a) { var c = x[a.key] = []; d.jsLib.each(a.values, function (a) { c.push(d.bboxLib.translate(a.coord().shapeBounds, t)) }) }); f = function (g) {
                    var f = h.filter(function (a) { return a.layer === g }), e = f.map(function (a) { return a.points }).map(w),
                    m = u(e[0]); e = 0 < m.o[m.vc]; var k = f.filter(function (a) { return !v(a) }).map(function (a) { return a.points }).map(function (a) { return [a[0], a[a.length - 1]] }), q = []; k.forEach(function (a) { return q.push.apply(q, C(a)) }); var r = d.bboxLib.bboxFromPoints(q), t = d.jsLib.filter(x[g + ""], function (a) { return d.bboxLib.collide(r, a) }), y = k[0], z = { left: 0, up: 1, right: 2, down: 3 }[l]; t.forEach(function (a) { a = d.bboxLib.toLTRB(a)[z]; var c = [y[0].slice(0), y[1]]; c[0][m.vc] = a; k.push(c) }); var D = d.mathLib.avg([va(k, e ? "max" : "min", function (a) { return a[0][m.vc] }),
                    va(k, e ? "min" : "max", function (a) { return a[1][m.vc] })]), H = [0, 0]; f = d.jsLib.sortBy(f, function (a) { d.trigLib.pDist.apply(b, w(a.points)) }); (new d.dataUtil.nest).key("pid").entries(f).forEach(function (b) {
                        b = d.jsLib.sortBy(b.values, function (a) { return d.trigLib.pDist.apply(void 0, w(a.points)) }); b.reverse(); var g = b.map(function (c) { return d.jsLib.find(a, function (a) { return a.key === c.key }) }), f = 1 < (new d.dataUtil.nest).key("stroke").entries(g).length; H = [0, 0]; b.forEach(function (a, b) {
                            if (p) if (6 === a.points.length) {
                                var e =
                                    a.points, h = [e[0], e[2]], k = [e[0]], l = k[0]; b = function () { return k[k.length - 1] }; e = e[e.length - 1]; m = u(h); h = d.mathLib.diff(l[m.vc], D); d.axisUtils.addXlatD(k, m.o, 1.5 * h); l = d.mathLib.diff(l[m.hc], a.points[2][m.hc]); d.axisUtils.addXlatD(k, m.f, l); l = (e[m.vc] - a.points[3][m.vc]) / 2; d.axisUtils.addXlatD(k, m.o, d.mathLib.diff(b()[m.vc], e[m.vc] - 1.5 * l)); m = u([b(), e]); b = d.mathLib.diff(b()[m.hc], e[m.hc]); d.axisUtils.addXlatD(k, m.f, b); k.push(e); a.pathPoints = k; a.zIndex = 5
                            } else if (3 === a.points.length) a.pathPoints = C(a.points),
                                a.zIndex = 5; else {
                                    h = w(a.points); var q = [a.points[0]]; l = q[0]; var r = v(a); b = function () { return q[q.length - 1] }; e = a.points[a.points.length - 1]; m = u(h); var t = 0 < m.f[m.hc] ? 0 : 1; h = d.mathLib.diff(l[m.vc], D); r ? (h /= 2, t = d.mathLib.diff(l[m.vc], e[m.vc]), d.axisUtils.addXlatD(q, m.i, h), l = d.mathLib.diff(b()[m.hc], e[m.hc]), d.axisUtils.addXlatD(q, m.f, l / 2), d.axisUtils.addXlatD(q, m.o, 2 * h + t), d.axisUtils.addXlatD(q, m.f, l / 2), d.axisUtils.addXlatD(q, m.i, h), a.pathPoints = q, a.zIndex = 5) : (d.axisUtils.addXlatD(q, m.o, h + H[t]), l = d.mathLib.diff(b()[m.hc],
                                        e[m.hc]), d.axisUtils.addXlatD(q, m.f, l), b = d.mathLib.diff(b()[m.vc], e[m.vc]), d.axisUtils.addXlatD(q, m.o, b), a.pathPoints = q, a.zIndex = 5 + H[t], f && H[t]++)
                            } var x = d.jsLib.find(g, function (c) { return c.key === a.key }); x.d = d.pathLib.fromString(function (a) { return p ? d.shapeLib.roundCorners(a, x.radius) : d.shapeLib.pointsToPath(a) }(d.dmUtils.snapPointsToPanel(n, (a.pathPoints || a.points).map(function (a) { return d.bboxLib.translate(a, c) }), 1))); x.zIndex = a.zIndex
                        })
                    })
                }; for (var y = r[0]; y <= r[1]; y++)f(y)
            }; b.prototype.updateLines =
                function (a, c) {
                    var b = this, f = b.series, e = f.chartArea.isDragging, h = b.series.renderer.renderer, l = f.rootVisuals.line; d.jsLib.epa(c, ["preserveNoodleAttrs"]) || (b.connectorAttrs = d.jsLib.map(a, function (a) { return b.render_applyDynamicAttrVals(a, c) })); var k = b.connectorAttrsHL; a = b.connectorAttrs; k.length && (a = a.map(function (a) { var c = d.jsLib.find(k, function (c) { return c.key === a.key }); return c ? d.jsLib.merge({}, a, c) : a })); a && d.jsLib.def(a.length) && d.jsLib.mergeCollections(a, b.connectorVisuals, function (a) {
                        a.zIndex = a.zIndex ||
                            -1; var c = h.path(d.jsLib.clone(a)).add(l); c.data.key = a.key; b.connectorVisuals.push(c)
                    }, function (a, c) { c.attr(e ? d.jsLib.merge({}, a, { animation: { duration: 0 } }) : d.jsLib.extend({}, a)) }, function (a) { l.removeChild(a.el); d.jsLib.removeArrItem(b.connectorVisuals, a); a.destroy() }, function (a) { return a.key }, function (a) { return a.data.key }); return b
                }; b.prototype.styleLines = function (a, c, b) { return d.visStyleConnectors(this, a, c, b) }; b.prototype.resetLines = function (a) {
                    var c = this, b = c.connectorAttrs.slice(0); if (a) {
                        var f = [],
                        e = c.series.renderer.renderer, h = c.series.rootVisuals.line, l = function (a) { var b = c.connectorAttrs[a], g = c.connectorVisuals[a]; h.removeChild(g.el); g.destroy(); g = e.path(b).add(h); g.data.key = b.key; c.connectorVisuals[a] = g; c.connectorAttrsHL.length && (a = d.jsLib.find(c.connectorAttrsHL, function (a) { return a.key === b.key })) && d.jsLib.removeArrItem(c.connectorAttrsHL, a) }; a.forEach(function (a) { var b = d.jsLib.findIndex(c.connectorAttrs, function (c) { return c.key === a }); -1 < b ? l(b) : f.push(a) }); return f
                    } c.connectorAttrsHL =
                        []; this.updateLines([], { animation: { duration: 0 } }); this.updateLines(b, { animation: { duration: 0 } })
                }; b.prototype.styleLine = function (a, c) { var b = a.key, f = this.connectorVisuals, e = this.connectorAttrs, h = d.jsLib.findIndex(e, function (a) { return a.key === b }); if (f = f[h]) a = d.jsLib.merge({}, e[h], a), a = this.render_applyDynamicAttrVals(a, c), c && (c = d.jsLib.epa(c, ["animation"])) && d.jsLib.merge(a, { animation: c }), f.attr(a) }; b.prototype.initPointLabel = function (a, c, b) {
                    var g = this.series; c = c.meta; var e = a.visuals, h, l = g.rootVisuals.shapeLabels,
                        k = a.currentOptions, n = g.chart.options("defaultAnnotation"); n = d.jsLib.merge({}, n); var p = k.annotation; p && d.jsLib.merge(n, p); c.labelSize || (l.attr({ autoWrap: "default" }), k = d.jsLib.epa(k, ["annotation", "label", "text"]) || d.jsLib.epa(k, ["label", "text"]) || g.info.labelTextInfo.label, "function" === d.jsLib.getValType(k) && (k = k(a)), k = a.replaceTokens(k), c.labelText = k, a = d.jsLib.merge({ label: { align: "center", verticalAlign: "middle" } }, n, { label: b.label }, { label: { text: k } }, { animation: { duration: 0 } }), b = a.asHTML, a.margin = 0, (h =
                            e.body) ? h.options(a) : h = e.body = (new d.Annotation(g.chart, a, l)).add(l), b ? h.rootPanel.attr({ pointerEvents: "none" }) : !1 === d.jsLib.epa(a, ["label", "autoWrap"]) ? h.rootVisuals.content.attr({ autoWrap: "default" }) : "golden" !== h.rootVisuals.content && h.rootVisuals.content.attr({ autoWrap: "golden" }), g = h.rootPanel, g.attr({ autoWrap: "default", width: d.jsLib.def(a.width) ? d.undefVal : null, height: d.jsLib.def(a.height) ? d.undefVal : null }), e = (b ? g : g.setPreliminarySize(!0)).getBbox(), e = [e.width, e.height], g.attr({
                                autoWrap: "default",
                                width: d.jsLib.pick(a.width, e[0]), height: d.jsLib.pick(a.height, e[1])
                            }), c.labelSize = e, c.annotationOptions = a, a.syncWidth = p && hb(p.syncWidth), a.syncHeight = p && hb(p.syncHeight), (b ? h.target : g).refresh()); return this
                }; b.prototype.hideUnusedPointVisuals = function (a) { var c = a.visuals; d.hideVisual(c.rect); !a.series.options("forceMarker") && d.hideVisual(c.marker); d.hideVisual(c.marker); d.hideVisual(c.labelConnector) }; b.prototype.hideUnused = function () {
                    var a = this.series, c = a.visuals; !a.info.type.drawArea && c.area && this.hideVisual(c.area);
                    return this
                }; return b
        }(Hb), kc = function (e, b, a, c, g) {
            void 0 === g && (g = 5); var f = Math.PI / 2, m = a[1] / 2 + g, h = a[0] / 2 + g, l = b.cxy; g = b.start; var k = b.end, n = b.innerR, p = b.r, q = d.trigLib.toDegrees((g + k) / 2), r = d.trigLib.toRadians(q), t = { outleft: { aA: g, aCxyA: g - f }, inleft: { aA: g, aCxyA: g + f }, inright: { aA: k, aCxyA: k - f }, outright: { aA: k, aCxyA: k + f } }, u = { outtop: function () { return p + m }, outbottom: function () { return n - m }, intop: function () { return p - m }, inbottom: function () { return n + m }, inmiddle: function () { return (n + p) / 2 } }; return d.jsLib.map(e, function (b) {
                var g =
                    b.align, f = u[b.vAlign](); if ("incenter" === g) f = { cxy: d.trigLib.gpp(l, r, f), angle: q, size: a }; else { g = t[g]; var e = d.trigLib.gpp(l, g.aA, f); g = d.trigLib.gpp(e, g.aCxyA, h); e = d.trigLib.angleOfPoints(l, g); g = d.trigLib.gpdp(l, e, f); f = { cxy: g, angle: e, size: a } } f.angle = d.trigLib.ensureUprightText(f.angle - (c ? 0 : 90)); f.alignment = b; return f
            })
        }, lc = [.9, 0], mc = [0, 0], Dd = function (e) {
            function b(a, c, d) { return e.call(this, a, c, d) || this } K(b, e); b.prototype.measure = function (a) {
                var c = this.viewState, b = this.rootVisuals; this.renderer; if (c && !1 !==
                    this.isVisible) { if (b.label.rootPanel.calculateMargin(), a && (a.pop && (a = this.viewState.caRect = { x: 0, y: 0, width: a[0], height: a[1] }), a)) return this.viewState.caRect = a, c = d.bboxLib.fromRect(a), a = this.measure_ticks(a), this.tickBounds = a.slice(0), b = "caPaneRadar" === this.chartArea.kind, this.isHoriz || b ? (c = Da(c, a, !0), this.overflowSize = { tL: [c[0], c[3]], bR: [c[2], c[1]], margins: c }, a ? a : void 0) : [0, 0, 0, 0] } else if (!1 === this.isVisible) return this._sizeMetrics.length = this.isHoriz ? a[0] : a[1], [0, 0, 0, 0]
            }; b.prototype.init = function () {
                for (var a =
                    [], c = 0; c < arguments.length; c++)a[c] = arguments[c]; e.prototype.init.apply(this, C(a)); a = N(a, 3); a[0]; a[1]; a[2]; this.defaultContextOptions = {}; this.isRadial = !0
            }; b.prototype.measure_ticks = function (a) {
                var c = this; this.currentOptions; var b = this.viewState, f = [], e = [], h = [], l = [], k = []; a = a || b.caRect; var n = this.chartArea.angleArc(); 360 === Math.abs(n.end - n.start) && this.isHoriz; var p = this.isHoriz ? function (a, c) { return (c && a.rotated ? a.rotated[3] : a.textSize[1]) + a.tickLength + a.tickPadding || 0 } : function (a, c) {
                    return (c && a.rotated ?
                        a.rotated[2] : a.textSize[0]) + a.tickLength + a.tickPadding || 0
                }; n = d.jsLib.epa(this.currentOptions, ["defaultTick", "label", "rotate"]) || 0; this.isHoriz && 0 !== n; n = []; if (b && !1 !== this.isVisible) return this.setTicks(b).setAttribs(), b = this._ticks, b.length && (d.jsLib.each(b, function (a) { a.invalid ? wa(c, a) : (a = a.metrics(), e.push(a.textSize[0]), h.push(a.textSize[1]), l.push(p(a))) }), n = e.length ? [Math.max.apply(Math, C(e)), Math.max.apply(Math, C(h))] : [0, 0], d.jsLib.each(b, function (a, d) { a.invalid || (wa(c, a), f.push(a._bbox), k.push(a._positionData.rLength)) }),
                    b = Math.max.apply(Math, C(l)), this.tickMetricsData = { maxTextSize: n, maxLength: b, maxRadiusLen: Math.max.apply(Math, C(k)), maxLengthAll: b }, a = (a.width - a.height) / 2, n = d.bboxLib.bboxUnion(f) || [0, 0, 0, 0], n[0] -= 0 > a ? a : 0, n[1] += 0 < a ? a : 0), n
            }; b.prototype.setTicks = function (a) {
                e.prototype.setTicks.call(this, a); var c = this.chartArea.angleArc(); a = this._ticks; if (360 === Math.abs(c.end - c.start) && this.isHoriz && a.length) {
                    c = a[0]; var b = a[a.length - 1]; wa(this, c); wa(this, b); d.trigLib.normalizeAngle(c._metrics.angle) === d.trigLib.normalizeAngle(b._metrics.angle) &&
                        a.shift()
                } return this
            }; b.prototype.valToAngle = function (a, c) { void 0 === c && (c = this.viewState); var b = this, f = b.chartArea; if (b.isRadial && b.isHoriz) { var e = f.angleArc(); return d.jsLib.mapDeep(a, function (a) { var g = b.range; a = 360 !== d.mathLib.diff(e.end, e.start) ? d.jsLib.clamp(a, g.min, g.max) : a; a = c.valToLin(a); return d.mathLib.mapValue(e.start, e.end, 0, 1, a) }) } }; b.prototype.adjustRange = function () {
                var a = this; if (!a.syncAxis && !a.isZoomed) {
                    var c = function (c) { return d.jsLib.evalPath(a.userOptions, "scale.range." + c) }, b = c("min"),
                    f = c("max"); c = c("padding"); if (!d.jsLib.def(c) && a.isRadial && a.isHoriz && "x" === a.prefix) { c = a.range; var m = 0; "category" === a.type && (m = a.shortestValDistance / 2); c.min = d.jsLib.def(b) ? b : a.min - m; c.max = d.jsLib.def(f) ? f : a.max + m; a.unZoomedRange = { min: c.min, max: c.max } } else e.prototype.adjustRange.call(this)
                } return this
            }; b.prototype.getLinePath = function (a) {
                var c = this.chartArea; a = this.sideIndex(); a = 0 === a || 1 === a; c = c.angleArc(); var d = this.interpolationAxis; return this.isHoriz || 360 > c.end - c.start ? d.getCaPath(d.posToVal(a ?
                    1 : 0)) : "M0 0"
            }; b.prototype.getCaPath = function (a, c, b, f) {
                void 0 === b && (b = this.viewState); void 0 === f && (f = 1); var g = this, e = b.chartArea, l = d.jsLib.def(a.pop); if ("object" === typeof f) { var k = f; f = d.jsLib.pick(k.lineWidth, 1); var n = k.forMarker; k.posOnly } k = function (a, c, b, g, f, e, h) { void 0 === h && (h = !0); return d.shapeLib.flattenD(d.shapeLib.arc(a, c, 2 * b, 2 * b, { start: d.trigLib.toRadians(f), end: d.trigLib.toRadians(e), open: h, r: b, innerR: g })) }; var p = e.getShapeOptions(), q = d.bboxLib.fromRect(b.caRect || b.chartArea.contentRect ||
                    b.chartArea.innerRect), r = d.bboxLib.center(q), t = q[2] / 2, u = p.innerSize ? p.innerSize * t : 0; p = e.angleArc(); var v = b.valToLin; n && g.isHoriz && "caPaneGauge" === e.kind && e.hasNeedles && (u = t - (g.options("defaultTick.line.length") || 10)); n = function (a, c, b) { void 0 === b && (b = !1); if (b) return d.shapeLib.flattenD(d.shapeLib.pointsToPath(a)) + "Z" + d.shapeLib.flattenD(d.shapeLib.pointsToPath(c)) + "Z"; c.reverse(); a.push.apply(a, C(c)); return d.shapeLib.flattenD(d.shapeLib.pointsToPath(a)) + "Z" }; q = e.getRadarType(); if (!g.isHoriz) {
                        if ("polar" ===
                            q) { f = function (a) { return d.mathLib.mapValue(u, t, 1, 0, v(a)) }; if (a.pop) { b = f(a[0]); var w = f(a[1]); w > b && (f = N([w, b], 2), b = f[0], w = f[1]) } else b = f(a); return k(r[0], r[1], b, w, p.start, p.end, !a.pop) } if (l) return k = this.getCaPoints(a[0], d.undefVal, b, f), a = this.getCaPoints(a[1], d.undefVal, b, f), n(k, a, !0)
                    } else if (g.isHoriz) {
                        w = function (a) { a = g.valToAngle(a); return [d.trigLib.gpdp(r, a, u), d.trigLib.gpdp(r, a, t)] }; c = g.getTicksPos(); if (l) {
                            if ("polar" === q) return b = d.jsLib.sortBy([g.valToAngle(a[0]), g.valToAngle(a[1])]), k(r[0], r[1],
                                t, u, b[0], b[1], !a.pop); k = g.getTicksPos(); var x = [v(a[0]), v(a[1])], y = e.projection.webVal2linxy; k = d.jsLib.filter(k, function (a) { return a > x[0] && a < x[1] }); k.push.apply(k, C(x)); k = d.jsLib.sortedUniq(d.jsLib.sortBy(k)); var z = []; d.jsLib.each(k, function (a) { z.push(y(a, 0)) }); k.reverse(); d.jsLib.each(k, function (a) { z.push(y(a, 1)) }); return d.shapeLib.pointsToPath(z).join(" ") + "Z"
                        } k = v(a); if (-1 < c.indexOf(k)) return d.shapeLib.pointsToPath(w(a)).join(" "); a = this.getCaPoints(a, d.undefVal, b, f); return d.shapeLib.pointsToPath(a).join(" ")
                    } a =
                        this.getCaPoints(a, c, b, f); return d.shapeLib.pointsToPath(a).join(" ") + (l || this.isRadial ? "Z" : "")
            }; b.prototype.getCaLen = function (a, c) { void 0 === c && (c = this.viewState); var b = c.caRect || c.chartArea.contentRect, f = c.valToLin; f = f(a); return this.isRadial && !this.isHoriz ? (a = b.width / 2, c = this.chartArea.getShapeOptions(), c = d.jsLib.pick(d.jsLib.epa(c, ["innerSize"]), 0) * a, d.mathLib.mapValue(c, a, 1, 0, f)) : e.prototype.getCaLen.call(this, a, c) }; b.prototype.clusterWidth = function () {
                var a = this.chartArea, c = this.viewState; if (!this.isHoriz) return c =
                    c.caRect || c.chartArea.contentRect || c.chartArea.innerRect, a = a.getShapeOptions(), c = d.bboxLib.fromRect(c)[2] / 2, a = c - (a.innerSize ? a.innerSize * c : 0), d.jsLib.pick(this.options("staticColumnWidth"), this.getShortestDistPerc() * a * (1 - this.options("spacingPercentage")))
            }; b.prototype.render_line = function (a, c) {
                void 0 === c && (c = {}); var b = this.rootVisuals.line, f = this.currentOptions.line, m = this.chartArea, h = d.bboxLib.fromRect(a), l = d.bboxLib.center(h); if (this.isHoriz) {
                    c = d.stylingLib.lineToAttr(f); var k = f.breaks, n = "caPaneRadar" ===
                        m.kind && "spider" === m.getRadarType(); !k && n ? (b = this.renderer, this.rootVisuals.line.destroy(), b = this.rootVisuals.line = b.renderer.element("path").add(this.rootVisuals.main), c.d = this.getLinePath(a)) : (a = l[0] - h[0], h = c["stroke-width"], k && (c.breaks = d.jsLib.merge(d.jsLib.copy(k), { intervals: d.jsLib.sortBy(k.custom && k.custom.pop ? k.custom : this.getTicksPos()) })), m = m.angleArc(), c.start = d.trigLib.toRadians(m.start), c.end = d.trigLib.toRadians(m.end), c.r = a + h / 2, c.cxy = l, c.innerR = a - h / 2, c.caps = { start: "round", end: "round" },
                            c.fill = c.stroke, c.shading = "solid", f = f.color, -1 < f.toLowerCase().indexOf("smartpalette") && (f = f.split(/:/gi), f = this.chart.getSmartPalette(1 < f.length ? f[1] : this.chart.palette)) && (f = f.getTraditionalStops(), this.isInverted() || (f = d.jsLib.map(f, function (a) { return [1 - a[0], a[1], a[2]] }), f = d.jsLib.sortBy(f, function (a) { return a[0] })), c.fill = { stops: f }), c.stroke = d.undefVal, c["stroke-width"] = d.undefVal); b.attr(c)
                } else e.prototype.render_line.call(this, a, c)
            }; b.prototype.setRootVisuals = function () {
                if (!this.rootVisuals &&
                    !1 !== this.options("visible")) { var a = this.renderer; e.prototype.setRootVisuals.call(this); this.isHoriz && (this.rootVisuals.line.destroy(), this.rootVisuals.line = a.renderer.element("arcShape").add(this.rootVisuals.main)) } return this
            }; return b
        }(d.Axis), Jb = d.jsLib.plainArray(["padding", "margin"]), Wa = function () { return { spacingPercentage: .1, visible: !0, line: { width: 0 }, defaultTick: { label: { visible: !1 }, gridLine: { color: "#d9d9d9", width: "column", visible: !0 }, line: { length: 0 } }, alternateGridFill: "none" } }, Kb = function (e) {
            function b() {
                var a =
                    null !== e && e.apply(this, arguments) || this; a.kind = "caPaneAx"; return a
            } K(b, e); b.prototype.eachAxis = function (a) { this.xAxis && a(this.xAxis); this.yAxis && a(this.yAxis); return this }; b.prototype.xAxisDefaults = function (a) { var c = Wa(); "category" !== a.type && d.jsLib.setPathVal(c, "defaultTick.gridLine.width", 0); return c }; b.prototype.yAxisDefaults = function () { return Wa() }; b.prototype.populateAxisPanels = function (a) { }; b.prototype.setAxes = function () {
                var a = this._series[0].xAxis, c = this._series[0].yAxis, b = !!this.xAxis, f = !!this.yAxis,
                e = sb(a.userOptions, this.xAxisDefaults(a)), h = "caPaneRadar" === this.kind || "caPaneGauge" === this.kind || "caPaneRadial" === this.kind ? Dd : d.Axis, l = this.xAxis = this.xAxis || new h(this, d.jsLib.omit(e, "id"), "x"); l.parentAxis = a; b ? l.options(e, !1) : a.childAxes.push(l); l.chartArea = this; b = sb(c.userOptions, this.yAxisDefaults()); h = this.yAxis = this.yAxis || new h(this, d.jsLib.omit(b, "id"), "y"); h.parentAxis = c; f ? h.options(b, !1) : c.childAxes.push(h); !f && c.childAxes.push(h); h.chartArea = this; h.setRootVisuals(); f = function (a, c, b) {
                    b =
                    b.split(","); d.jsLib.each(b, function (d) { a[d] = c[d] })
                }; f(l, a, "clusterCounts,type,dataType,dataPositions,range,min,max,shortestValDistance,shortestPercDistance"); (function (a, c, b) { b = b.split(","); d.jsLib.each(b, function (d) { a[d] = c[d] ? c[d].slice(0) : [] }) })(l, a, "catList,data"); l.range || d.jsLib.merge(l, { range: { min: -.012, max: .012, range: .4 }, min: 0, max: 0, data: [0], shortestPercDistance: 1.66, shortestValDistance: 1, dataType: "number" }); l.adjustRange(); l.setViewState(!0); f(h, c, "noData,dataSortedUniq,type,dataType,dataPositions,range,min,max");
                h.setRange(); h.setViewState(!0); this._axes = [l, h]; return this
            }; b.prototype.renderAxes = function (a, c) { this.eachAxis(function (d) { d.interpolationAxis && d.interpolationAxis.measure(a); d.render(a).renderOnCa(a, c) }); return this }; return b
        }(function (e) {
            function b(a, c) {
                var b = e.call(this, a.chartArea.chart, {}) || this; b.caPanes = a; b.kind = "caPane"; b.labelBoxes = { inside: [], outside: [] }; b._axes = []; b.renderRect = { x: 0, y: 0, width: 0, height: 0, borderWidth: 0 }; b.shapeSize = {}; b._metrics = {
                    renderBox: [0, 0, 0, 0], tickBounds: [0, 0, 0, 0],
                    clipBounds: [0, 0, 0, 0], shapeBounds: [0, 0, 0, 0], availableBounds: d.undefVal, labelBoxes: {}
                }; b._series = c; b.hash = c.hash; b.chartArea = a.chartArea; b.ctm = b.chartArea.ctManager; b.collisionManager = new d.CollisionManager(b); d.jsLib.each(b._series, function (a) { a.setPane(b) }); b.initFP(); return b
            } K(b, e); b.prototype.getAxisMarkerVisualTargets = function () { var a = this.rootVisuals; return { behind: a.axisMarkersBehind, front: a.axisMarkersFront } }; b.prototype.setProjection = function (a) { }; b.prototype.getShapeOptions = function (a) {
                return d.getShapeOptions(this._currentOptions.ca,
                    a || this.chartArea.renderRect)
            }; b.prototype.update = function (a, c) { var b = this; b._series = a; b.hash = a.hash; d.jsLib.each(b._series, function (a) { a.setPane(b) }); b.initShapeItems(c); return b }; b.prototype.initFP = function () { var a = this; this.axes = d.collectionPropFactory(d.AxisCollectionWrapper, function () { return a._axes }, function (a) { }) }; b.prototype.xAxisDefaults = function (a) { return {} }; b.prototype.getGlobalOffsets = function () {
                if (!this.globalOffsets) {
                    var a = this.rootVisuals.content.getGlobalBbox(), c = this.caPanes.rootPanel.parent.getGlobalBbox();
                    this.globalOffsets = { x: a.x - c.x, y: a.y - c.y }
                } return this.globalOffsets
            }; b.prototype.measure = function (a) { this.setRect(a); var c = this.rootVisuals.rootStack.getBboxArray(); c[0] = a.x + c[0]; c[1] = a.y + c[1]; return { limits: this.getShapeOptions().size, outerBox: c, innerSize: this.insideInnerRootSize, isLinear: "caPaneLinear" === this.kind, isHoriz: this.isHoriz } }; b.prototype.setRect = function (a) { this.rect = d.jsLib.copy(a); this.box = d.bboxLib.fromRect(a); this.measureWrapper() }; b.prototype.adjustByShapeOptions = function (a) {
                var c =
                    this.getShapeOptions(); a = a.slice(0); var b = c.size; b && (d.jsLib.def(b[0]) && d.jsLib.def(b[1]) ? a = d.bboxLib.setSize(a, b) : d.jsLib.def(b[0]) && (b = Math.max(a[2], a[3]) / b[0], a = d.bboxLib.setSize(a, [a[2] / b, a[3] / b]))); if (b = c.cxy) a = d.bboxLib.fromCenter(b, a.slice(2)), this.hasUserLayout = !0; (b = c.offset) && d.bboxLib.translateRef(a, b); return a
            }; b.prototype.renderData = function (a, c) {
                var b = this, f = { x: 0, y: 0 }; d.jsLib.extend(f, { width: a[0], height: a[1] }); var e = d.stylingLib.boxToAttr(b._currentOptions.ca); e = e.stroke && d.jsLib.has(e.stroke,
                    "stroke-width") ? e.stroke["stroke-width"] : 1; f = b.measureRenderRect(d.rectLib.padBox(f, e / 2)); var h = b.renderRect = f.renderRect; f = f.clipPath; b.contentRect = h; b.insideInnerRootSize = a; b.setProjection(); b.renderAxes(h, c); f && b.renderCaClip(f); b.collisionManager.reset(); b.eachSeries(function (a) { return b.renderSerie(a, h, c) }); b.eachSeries(function (a) { return b.renderSerieLabels(a, h, c) }); b.renderExtras(); return b
            }; b.prototype.renderSerie = function (a, c, b) {
                a.renderRect = c; a.pointBodyDGenerator = rb; c = d.jsLib.merge({ rect: a.axisRect },
                    b); a.userPoints.length && a.visualizer.render(c)
            }; b.prototype.renderSerieLabels = function (a, c, b) { a.renderRect = c; a.pointBodyDGenerator = rb; c = d.jsLib.merge({ rect: a.axisRect }, b); a.userPoints.length && a.visualizer.renderLabels(c) }; b.prototype.postArrange = function (a) {
                var c = this._metrics; this.alignLabels(a); if (!this.hasUserLayout && "caPaneLinear" !== this.kind) {
                    a = (c.labelBoxes.all || []).slice(0); a.push.apply(a, C([c.shapeBounds])); a = d.bboxLib.bboxUnion(a); a = d.bboxLib.offsetBetween(d.bboxLib.center(c.availableBounds),
                        d.bboxLib.center(a)); c = this.rootPanel; a = { offsetX: c.attr("offsetX") + a[0], offsetY: c.attr("offsetY") + a[1] }; var b = this._currentOptions.ca.offset; if (b) { b = N(b.split(","), 2); var f = b[1]; a.offsetX += parseInt(b[0]) || 0; a.offsetY += parseInt(f) || 0 } c.attr(a)
                } return this
            }; b.prototype.measureRenderRect = function (a) { return { renderRect: a, clipPath: this.clipPath(a) } }; b.prototype.renderCaClip = function (a) {
                var c = this.rootVisuals, b = this.rootVisuals.content, f = this._currentOptions.ca, e = d.stylingLib.boxToAttr(f); !1 !== f.clip && b.attr({
                    clipPath: a,
                    shadow: f.shadow
                }); c.contentStroke && c.contentStroke.attr(d.jsLib.merge({ d: a, fill: d.jsLib.evalPath(e, "fill.fill") || "none" }, d.jsLib.omit(e.stroke, "fill"))); return this
            }; b.prototype.clipPath = function (a) { return null }; b.prototype.toGaugeSize = function (a) { a = Math.min(a[0], a[1]); return [a, a] }; b.prototype.getSize = function (a) { return [this.box[2], this.box[3]] }; b.prototype.defaultShapeOptions = function () { return { fill: "none", outline: { color: "none" }, ca: { clip: !1, outline: { color: "#A0A0A0", width: 0 } }, padding: .1, margin: 5 } };
            b.prototype.normalizeShapeOptions = function (a) { return { padding: a.padding, label: a.label, outline: a.outline, ca: a, fill: "none" } }; b.prototype.initShapeItems = function (a) {
                var c = this, b = 1 === c._series.length ? c._series[0] : d.undefVal, f = c.rootVisuals, e = d.jsLib.copy(c.chart.options("defaultSeries.shape") || {}); b && d.jsLib.merge(e, b.options("shape")); c._currentOptions = d.jsLib.merge(c._currentOptions || c.defaultShapeOptions(), c.normalizeShapeOptions(e)); if (e = c.getShapeOptions().label) 0 < e.length ? d.jsLib.each(e, function (d,
                    g) { return c.setShapeLabel(d, b, g, a) }) : e.text && (f = f.label.childElements, 1 === f.length ? c.setShapeLabel(e, b, 0, a) : f.length && f[0].textAttr === e.text || c.setShapeLabel(e, b, 0, a)); c.setAxes(); return this
            }; b.prototype.destroyShapeLabels = function () { for (var a = this.rootVisuals.label.childElements; a.length;)a[0].destroy() }; b.prototype.alignLabels = function (a) {
                var c = this.rootVisuals.label.childElements; if (c.length) {
                    var b = this.getShapeOptions(), f = b.label, e = ta(this.caPanes.rootPanel), h = ta(this.rootVisuals.label), l = ta(this.chartArea.rootVisuals.content);
                    h = d.bboxLib.offsetBetween(e, h); e = d.bboxLib.offsetBetween(l, e); nb(this, this.chartArea, c, b, f, a, h, e)
                }
            }; b.prototype.setShapeLabel = function (a, c, b, f) { var g = this.rootVisuals.label, e; if (e = d.jsLib.evalPath(a, "text")) e = this.shapeLabelText(e, c), qb(a, this, g, this.renderer, b, e, this.chartArea.rootRect.width, f); return this }; b.prototype.shapeLabelText = function (a, c) { "function" === d.jsLib.getValType(a) && (a = a(c || this._series.slice(0))); c && (a = c.replaceTokens(a)); return a }; b.prototype.applyShapeAttrs = function () {
                var a = d.jsLib.extendScoped(d.stylingLib.shapeToAttr(this._currentOptions),
                    this._currentOptions, Jb), c = this.shapeSize.innerMargin || [0, 0, 0, 0], b = this.parseMarginPadding(a.padding), f = this.shapeSize.labelMargin || [0, 0, 0, 0]; c && (a.padding = d.jsLib.arraySum(c, b)); a.margin = d.jsLib.arraySum(d.jsLib.parseMargin(a.margin), f); this.rootVisuals.innerBox.attr(a)
            }; b.prototype.calculateShapeSize = function () {
                var a = d.jsLib.extendScoped(d.stylingLib.shapeToAttr(this._currentOptions), this._currentOptions, Jb); return {
                    margin: this.parseMarginPadding(a.margin), padding: this.parseMarginPadding(a.padding),
                    outlineWidth: a["stroke-width"]
                }
            }; b.prototype.parseMarginPadding = function (a) { if (a && d.jsLib.isNumber(a) && 1 > Math.abs(a)) { var c = this._metrics.availableBounds || this.box; a = a * Math.min(c[2], c[3]) / 2 } return d.jsLib.parseMargin(a) }; b.prototype.measureInner = function (a) { }; b.prototype.measureWrapper = function () {
                var a = this.rootPanel, c = this.rootVisuals.contentHolder, b = this.box, f = this.shapeSize, e = f.labelMargin || [0, 0, 0, 0], h = this.calculateShapeSize(), l = 2 * (h.outlineWidth || 0); e = this.insideInnerRootSize = [b[2] - h.margin[0] -
                    h.margin[2] - h.padding[0] - h.padding[2] - l - e[1] - e[3], b[3] - h.margin[1] - h.margin[3] - h.padding[1] - h.padding[3] - l - e[0] - e[2]]; this.measureInner(e); b = f.axisSizeOffset || [0, 0]; f = d.jsLib.arraySum(f.axesOverflows || [0, 0, 0, 0], f.innerMargin || [0, 0, 0, 0]); f = [e[0] - f[1] - f[3] - b[1], e[1] - f[0] - f[2] - b[0]]; f = this.insideInnerRootSize = this.toGaugeSize(f); c.attr({ width: f[0], height: f[1] }); this.applyShapeAttrs(); a.update(); this.measureInner([f[0] + b[1], f[1] + b[0]]); return this
            }; b.prototype.setShapeSize = function (a, c) {
                var d = this._metrics;
                d.shapeBounds = a.slice(0); d.availableBounds = c
            }; b.prototype.setAvSpace = function (a) { this._metrics.availableBounds = a }; b.prototype.assumeSize = function () { return [1, 1] }; b.prototype.eachSeries = function (a) { d.jsLib.each(this._series, a); return this }; b.prototype.eachAxis = function (a) { }; b.prototype.setAxes = function () { }; b.prototype.renderAxes = function (a, c) { }; b.prototype.renderExtras = function () { return this }; b.prototype.setRootVisuals = function () { return this }; b.prototype.wrap = function (a) {
                var c = this.renderer; a.root =
                    c.panel({ xContentAlignment: "center", yContentAlignment: "middle" }); a.innerRoot = c.panel({ width: "*", height: "*" }); a.label = c.panel({ width: "*", height: "*" }); a.innerBox = c.box().add(a.innerRoot); a.rootStack = c.panel({ xContentAlignment: "center", yContentAlignment: "middle", val: [a.innerRoot, a.label] }); a.rootStack.add(a.root); a.mainStacks.add(a.innerBox); this.rootPanel = a.root; return a
            }; b.prototype.add = function (a) { this.rootPanel.add(a); return this }; return b
        }(d.BaseChartItem)), Lb = function (e) {
            function b(a, c) {
                c = e.call(this,
                    a, c) || this; c.caPanes = a; c.kind = "caPaneRadial"; c.projection = { lin2valxy: function (a, c, d) { return [a, c] }, val2linxy: function (a, c, d) { return [a, c] }, webVal2linxy: function (a, c, d) { return [a, c] } }; c.isRadial = !0; c.staticBodyDGetter = kb; c.staticPositionsFromAligments = jc; c.isHoriz = !1; return c
            } K(b, e); b.prototype.toGaugeSize = function (a) { a = Math.min(a[0], a[1]); return [a, a] }; b.prototype.xAxisDefaults = function (a) { return { isRadial: !0 } }; b.prototype.yAxisDefaults = function () { return { isRadial: !0 } }; b.prototype.normalizeShapeOptions =
                function (a) { var c = e.prototype.normalizeShapeOptions.call(this, a); c.outline = "none"; c.label = a.label; c.ca.fill = d.jsLib.pick(a.innerFill, c.ca.fill); d.jsLib.has(a, "padding") && (c.padding = a.padding); return c }; b.prototype.angleArc = function () { return pa(this._series[0], { start: -90, sweep: 360 }) }; b.prototype.clipPath = function (a) { return (a = this.axes({ isHoriz: !0 })[0]) ? a.getLinePath() : null }; b.prototype.measureInner = function (a) { this.populateAxisPanels(a) }; b.prototype.getRadarType = function () { return "polar" }; b.prototype.getCompleteVisInfo =
                    function (a) { a = a.rectCompletePos; if ("spider" === this.getRadarType()) return mb(this, a); a = lb(this.angleArc(), a); return a.pop ? d.jsLib.map(a, function (a) { return d.shapeLib.arc(a.cxy[0], a.cxy[1], a.r, a.r, a) }) : d.shapeLib.arc(a.cxy[0], a.cxy[1], a.r, a.r, a) }; b.prototype.populateAxisPanels = function (a) {
                        function c(a) { return !1 === a ? b.rootVisuals.axisBehindAll : void 0 === a ? b.rootVisuals.axisBehind : b.rootVisuals.axisFront } function d(a) { return function (c) { c.isVisible && c.rootPanel && !c.isAdded && c.add(a) } } var b = this, e = b.insideInnerRootSize.slice(0);
                        e = [Math.max(e[0], e[1]), Math.max(e[0], e[1])]; a.width && (e = a); a = function (a) { return !a.isHoriz }; var h = function (a) { return a.isHoriz }, l = d(c(b.xAxis.options("line.onTop"))), k = d(c(b.yAxis.options("line.onTop"))); l(b.xAxis); k(b.yAxis); var n = [0, 0, 0, 0]; b.axes(h).each(function (a) { a.measure(e) && (n = a.overflowSize.margins) }); b.axes(a).each(function (a) { a.measure(e) }); l = function (a) { return a.measure(e) }; b.axes(a).each(l); b.axes(h).each(l); b.shapeSize.innerMargin = n; return b
                    }; b.prototype.setRootVisuals = function () {
                        var a =
                            this.renderer; if (!this.rootVisuals) { var c = this.chart.boxDefaults().outline.width; c = this.rootVisuals = d.panels(a).build({ axisMarkers: !0, background: !0, gridLines: !0, content: { stroke: { width: 1, onFront: !0 } }, outline: { width: c }, contentHolderFront: !0 }); c.axisBehindAll = a.panel({ zIndex: d.zIndexReference.axis }).add(c.contentHolderBehind); c.axisBehind = a.panel({ zIndex: d.zIndexReference.axis }).add(c.axisContentBehind); c.axisFront = a.panel({ zIndex: d.zIndexReference.axis }).add(c.axisContentFront); this.wrap(c) } return this
                    };
            b.prototype.renderExtras = function () { return this }; b.prototype.setRenderRect = function (a) { var c = this._metrics, b = d.bboxLib.fromRect(a), f = this.clipPath(a); f = d.pathLib.bbox(f); this.renderRect = a; this.insideInnerRootSize = b.slice(2); this.populateAxisPanels(this.renderRect); a = d.bboxLib.bboxUnion([this.xAxis.tickBounds, this.yAxis.tickBounds]); var e = d.bboxLib.bboxUnion([a, f]); c.renderBox = b; c.clipBounds = f; c.tickBounds = a; c.shapeBounds = e; return this }; b.prototype.setShapeSize = function (a, c) {
                var b = a.slice(2), f = a.slice(0);
                this.setAvSpace(c); c = b[0]; c = d.bboxLib.fromCenter(d.bboxLib.center(a), [c, c]); this.setRenderRect(d.rectLib.fromBBox(c)); a = this._metrics; c = Da(a.clipBounds, a.tickBounds, !0); f = d.stylingLib.padMargin(f, c); c = Math.max.apply(Math, C(f.slice(2))); c = d.bboxLib.fromCenter(d.bboxLib.center(f), [c, c]); this.setRenderRect(d.rectLib.fromBBox(c)); f = sa(f, a.clipBounds); f = d.bboxLib.fromRect(f); c = Math.max.apply(Math, C(f.slice(2))); c = d.bboxLib.fromCenter(d.bboxLib.center(f), [c, c]); this.setRenderRect(d.rectLib.fromBBox(c))
            };
            b.prototype.renderData = function (a, c) {
                e.prototype.renderData.call(this, a, c); a = this._metrics; c = this.clipPath(this.renderRect); c = d.pathLib.bbox(c); var b = d.bboxLib.fromRect(this.renderRect), f = d.bboxLib.bboxUnion([this.xAxis.tickBounds, this.yAxis.tickBounds]), m = d.bboxLib.bboxUnion([f, c]); a.renderBox = ia(b, this.rootVisuals.content, this.caPanes.rootPanel); a.clipBounds = ia(c, this.rootVisuals.content, this.caPanes.rootPanel); a.shapeBounds = ia(m, this.rootVisuals.content, this.caPanes.rootPanel); a.tickBounds = ia(f,
                    this.rootVisuals.content, this.caPanes.rootPanel); return this
            }; return b
        }(Kb), Ed = function (e) {
            function b() { var a = null !== e && e.apply(this, arguments) || this; a.kind = "caPaneRadar"; return a } K(b, e); b.prototype.defaultShapeOptions = function () { return { ca: { clip: !1 }, padding: .05, margin: 5, fill: "none", outline: { width: 0 } } }; b.prototype.xAxisDefaults = function (a) { a = e.prototype.xAxisDefaults.call(this, a); return d.jsLib.merge(a, { line_visible: !0, defaultTick: { gridLine: { color: "#d9d9d9" } }, isRadial: !0 }) }; b.prototype.setAxes = function () {
                e.prototype.setAxes.call(this);
                this.xAxis.interpolationAxis = this.yAxis; this.yAxis.interpolationAxis = this.xAxis; this.yAxis.isRadial = this.xAxis.isRadial = !0; this.yAxis.isHoriz = !1; this.xAxis.isHoriz = !0; return this
            }; b.prototype.angleArc = function () { var a = this.xAxis, c = this._series[0], b = { start: -90, sweep: 360 }; b = pa(this._series[0], b); var f = b.end - b.start; d.jsLib.def(d.jsLib.evalPath(c, "currentOptions.angle.start")) && 360 !== f || (a = "category" === a.type ? -(a.getShortestDistPerc() / 2 * 360) : 0, b.start += a, b.end += a); return b }; b.prototype.setProjection =
                function (a) {
                    var c = d.bboxLib.fromRect(a || this.renderRect), b = d.bboxLib.center(c), f = c[2] / 2, e = this.xAxis.getTicksPos(), h = this.angleArc(); this.xAxis; var l = this.yAxis; this.projection.val2linxy = function (a, c, b) { a = d.mathLib.mapValue(h.start, h.end, 0, 1, a); return d.trigLib.gpdp([.5, .5], a, .5 - .5 * c) }; this.projection.webVal2linxy = function (a, g, m) {
                        m = d.mathLib.mapValue(h.start, h.end, 0, 1, a); if (-1 < e.indexOf(a)) return a = d.trigLib.gpdp([.5, .5], m, .5 - .5 * g), [a[0] * c[2], a[1] * c[3]]; a = l.getCaPath(l.posToVal(g), d.undefVal, d.undefVal,
                            { posOnly: !0 }); a = d.pathLib.pathIntersects(d.pathLib.fromString(a), d.trigLib.gpdp(b, m, 0), d.trigLib.gpdp(b, m, f)); return !a.length || (a = a[0].intersect, a = [a.x, a.y], d.jsLib.isNull(a[0]) || d.jsLib.isNull(a[1])) ? b.slice(0) : a
                    }
                }; b.prototype.populateAxisPanels = function (a) {
                    function c(a) { return !1 === a ? b.rootVisuals.axisBehindAll : void 0 === a ? b.rootVisuals.axisBehind : b.rootVisuals.axisFront } function d(a) { return function (c) { c.isVisible && c.rootPanel && !c.isAdded && c.add(a) } } var b = this, e = d(c(b.xAxis.options("line.onTop"))),
                        h = d(c(b.yAxis.options("line.onTop"))); e(b.xAxis); h(b.yAxis); e = function (c) { return c.measure(a) }; b.axes(function (a) { return !a.isHoriz }).each(e); b.axes(function (a) { return a.isHoriz }).each(e); b.shapeSize.innerMargin = Da(b._metrics.clipBounds, b._metrics.tickBounds); return b
                }; b.prototype.toGaugeSize = function (a) { a = this.measureRenderRect(d.rectLib.fromBBox(d.bboxLib.fromCenter([0, 0], a))); a = d.jsLib.join(a.clipPath, " "); return d.pathLib.bbox(a).slice(2) }; b.prototype.measureInner = function (a) {
                    e.prototype.measureInner.call(this,
                        a)
                }; b.prototype.measureRenderRect = function (a) { var c = this.clipPath(a); a = d.bboxLib.fromRect(a); c = d.pathLib.bbox(c); a = sa(a, c); c = this.clipPath(a); return { renderRect: a, clipPath: c } }; b.prototype.renderData = function (a, c) {
                    e.prototype.renderData.call(this, a, c); a = this._metrics; c = this.clipPath(this.renderRect); c = d.pathLib.bbox(c); var b = d.bboxLib.bboxUnion([this.xAxis.tickBounds, this.yAxis.tickBounds, c]); a.clipBounds = ia(c, this.rootVisuals.content, this.caPanes.rootPanel); a.shapeBounds = ia(b, this.rootVisuals.content,
                        this.caPanes.rootPanel); return this
                }; b.prototype.clipPath = function (a) { var c = d.bboxLib.fromRect(a), b = this.angleArc(); b = { start: d.trigLib.toRadians(b.start), end: d.trigLib.toRadians(b.end), r: c[2] / 2, innerR: 0 }; a = d.bboxLib.center(d.bboxLib.fromRect(a)); return d.shapeLib.arc(a[0], a[1], c[2], c[3], b) }; b.prototype.getRadarType = function () { var a = this._series[0], c = this.xAxis; a = a.ctManager.settingVal("radarType", a); "auto" === a && (a = "category" === c.type ? "spider" : "polar"); return a }; b.prototype.renderSerie = function (a,
                    c, d) { a.coordinatesModifier = pc; e.prototype.renderSerie.call(this, a, c, d) }; b.prototype.getShaderOptions = function (a) { return Ha(a, 0) }; return b
        }(Lb), Mb = function () { return d.jsLib.merge(Wa(), { line: { color: "none" }, isRadial: !0, defaultTick: { gridLine: { color: "none" }, label: { visible: !1 } } }) }, Nb = function () {
            return {
                isRadial: !0, alternateGridFill: "none", scale: { minorInterval: "auto" }, defaultTick: { placement: "inside", line: { color: "#c3c3c3", width: 2, length: 10 }, gridLine: { width: 0 } }, defaultMinorTick: {
                    label: { visible: !1 }, placement: "inside",
                    line: { color: "#c3c3c3", length: 5 }, gridLine: { width: 0 }
                }
            }
        }, Fd = function (e) {
            function b() { var a = null !== e && e.apply(this, arguments) || this; a.kind = "caPaneGauge"; a.isHoriz = !0; return a } K(b, e); b.prototype.setAxes = function () { e.prototype.setAxes.call(this); this.xAxis.interpolationAxis = this.yAxis; this.yAxis.interpolationAxis = this.xAxis; this.yAxis.isRadial = this.xAxis.isRadial = !0; this.yAxis.isHoriz = !0; this.xAxis.isHoriz = !1; return this }; b.prototype.angleArc = function () { return pa(this._series[0], { orientation: -90, sweep: 270 }) };
            b.prototype.xAxisDefaults = function (a) { var c = this.hasNeedles ? Mb() : d.jsLib.merge(Mb(), { spacingPercentage: 1 < d.jsLib.evalPath(this, "_series.0.userPoints.length") ? .2 : 0, defaultTick: { gridLine: { color: "#d9d9d9", width: "column" }, label: { visible: !1 } } }); "category" !== a.type && d.jsLib.setPathVal(c, "defaultTick.gridLine.width", 0); return c }; b.prototype.yAxisDefaults = function () {
                return this.hasNeedles ? Nb() : d.jsLib.merge(Nb(), {
                    scale: { minorInterval: "none" }, line: { visible: !0 }, defaultTick: { placement: "outside", line: { length: 0 } },
                    defaultMinorTick: { label: { visible: !1 }, placement: "outside", line: { length: 0 }, gridLine: { width: 0 } }
                })
            }; b.prototype.toGaugeSize = function (a) { a = this.measureRenderRect(d.rectLib.fromBBox(d.bboxLib.fromCenter([0, 0], a))); a = d.jsLib.join(a.clipPath, " "); return d.pathLib.bbox(a).slice(2) }; b.prototype.defaultShapeOptions = function () {
                var a = this.hasNeedles, c = { ca: { fill: this.chart.boxDefaults().boxVisible ? "#ffffff" : "#fcfcfc", outline: { color: "#c3c3c3", width: 1 }, clip: !1 }, padding: .1, margin: 0, fill: "none", outline: { width: 0 } };
                return a ? c : d.jsLib.defaultsDeep({ fill: "none", outline: { color: "none" }, ca: { fill: "none", outline: { color: "none" }, innerSize: "50%" } }, c)
            }; b.prototype.normalizeShapeOptions = function (a) { var c = e.prototype.normalizeShapeOptions.call(this, a); this.hasNeedles && (c.ca.fill = a.fill); return c }; b.prototype.measureRenderRect = function (a) {
                var c = a, b = this.clipPath(a); "clip" !== this.chart.ctManager.settingVal("circularGaugeType", this._series[0]) && this.hasNeedles || (a = d.bboxLib.fromRect(a), b = d.pathLib.bbox(b), c = sa(a, b), b = this.clipPath(c));
                return { renderRect: c, clipPath: b }
            }; b.prototype.clipPath = function (a) {
                var c = d.bboxLib.fromRect(a), b = this.angleArc(); b = { start: d.trigLib.toRadians(b.start), end: d.trigLib.toRadians(b.end), r: c[2] / 2, innerR: 0 }; a = d.bboxLib.center(d.bboxLib.fromRect(a)); var f = this.chart.ctManager.settingVal("circularGaugeType", this._series[0]); if (this.hasNeedles || "circle" === f) { var e = { clip: "gaugeOutline", circle: "circle", arc: "clip" }[f]; "circle" === f && (a = c); return d.shapes[e](a[0], a[1], c[2], c[this.hasNeedles ? 3 : 2], b) } f = this.getShapeOptions(c);
                b.innerR = c[2] / 2 * f.innerSize; return d.shapeLib.arc(a[0], a[1], c[2], c[2], b)
            }; b.prototype.setProjection = function () { var a = d.bboxLib.fromRect(this.renderRect), c = this.getShapeOptions(); d.bboxLib.center(a); a[2] / 2; var b = this.angleArc(); this.yAxis; this.xAxis; this.projection.val2linxy = function (a, g, e) { g = d.mathLib.mapValue(b.start, b.end, 0, 1, g); a = d.mathLib.mapValue(.5, c.innerSize ? .5 * c.innerSize : 0, 0, 1, a); return d.trigLib.gpdp([.5, .5], g, a) } }; b.prototype.renderExtras = function () {
                if (this.hasNeedles) {
                    var a = this.rootVisuals.axisMarkersFront,
                    c = d.bboxLib.fromRect(this.renderRect), b = this.getShapeOptions().innerPadding, e = c[2] / 2; b = d.jsLib.def(b) ? d.mathLib.mapValue(.86 * e, e, 0, 1, b) : .86 * e; b = d.bboxLib.pad(c, b); c = 0 < b[2]; e = { zIndex: 0, d: c ? d.shapes.circle(b[0], b[1], b[2], b[2]) : "M0 0", fill: { linearGradient: [0, 1, 0, 0], stops: [[0, "#777"], [1, "#111"]] }, stroke: { linearGradient: [0, 0, 0, 1], stops: [[0, "#666"], [1, "#555"]] }, "stroke-width": 2 }; (b = this.rootVisuals.needleBase) ? b.attr(e) : c && (this.rootVisuals.needleBase = this.renderer.renderer.path().attr(e).add(a))
                } return this
            };
            return b
        }(Lb), Gd = function (e) {
            function b(a, c) { var d = e.call(this, a, c) || this; d.caPanes = a; d.kind = "caPaneLinear"; d.widthHeightRatio = 5; a = d.ctm.settingVal("linearGaugeType", c[0]); d.isHoriz = "vertical" !== a; return d } K(b, e); b.prototype.yAxisDefaults = function () { return { line: { visible: !0 }, alternateGridFill: "none", defaultTick: { gridLine: { width: 0 } } } }; b.prototype.toGaugeSize = function (a) {
                var c = this.xAxis, b = this.isHoriz ? [0, 1] : [1, 0], e = a[b[0]], m = a[b[1]]; a = a.slice(0); var h = "category" === this.xAxis.type ? this.xAxis.dataPositions.items.length :
                    this._series[0].userPoints.length, l = c.options("staticColumnWidth"); c = 1 + c.options("spacingPercentage") || 0; this.widthPerPoint = l ? l * c : d.mathLib.math.min(m / h, e / this.widthHeightRatio); a[b[1]] = this.widthPerPoint * h; a.push(!this.isHoriz && l); a.push(this.isHoriz && l); a.push(!!l); return a
            }; b.prototype.getSize = function (a) { a = Math.max(this.box[2], this.box[3]); return this.isHoriz ? [a, a / this.widthHeightRatio] : [a / this.widthHeightRatio, a] }; b.prototype.setAxes = function () {
                e.prototype.setAxes.call(this); this.widthPerPoint &&
                    !d.jsLib.evalPath(this.xAxis, "userOptions.defaultTick.gridLine.width") && d.jsLib.setPathVal(this.xAxis, "currentOptions.defaultTick.gridLine.width", this.widthPerPoint); return this
            }; b.prototype.populateAxisPanels = function (a) {
                function c(a) { return function (c) { c.isVisible && c.rootPanel && !c.isAdded && c.add(a) } } var b = this.rootVisuals, e = d.axisUtils.axesBySideIndex(this.axes()), m = 0, h = 0, l = a.slice(0), k, n = [b.topAxes, b.rightAxes, b.bottomAxes, b.leftAxes]; a = function (a) { return !a.isHoriz }; b = function (a) { return a.isHoriz };
                d.jsLib.times(4, function (a) { d.jsLib.each(e[a], c(n[a])) }); this.axes(a).each(function (a) { if (k = a.measure(l)) h += k[2], l[0] -= k[2] }); this.axes(b).each(function (a) { if (k = a.measure(l)) m += k[3], l[1] -= k[3] }); var p = function (a) { return a.measure(l) }; this.axes(a).each(p); this.axes(b).each(p); a = d.bboxLib.bboxUnion([this.xAxis.tickBounds, this.yAxis.tickBounds]); a[2] > l[2] && (h = a[2] - l[2]); a[3] > l[3] && (m = a[3] - l[3]); this.shapeSize.axisSizeOffset = [m, h]; return this
            }; b.prototype.measureInner = function (a) {
                this.populateAxisPanels(a);
                this.shapeSize.axesOverflows = d.updateOverflows(this)
            }; b.prototype.assumeSize = function () { return this.isHoriz ? [2.5, .55] : [.55, 2.5] }; b.prototype.clipPath = function (a) { var c = this.rootVisuals.content, b = a.borderWidth; return (d.getBreaksPath(c, this.axes(), b) || d.bboxLib.toPath(d.bboxLib.fromRect(d.dmUtils.snapToPanel(c, a, b)))).clipPath }; b.prototype.setRootVisuals = function () {
                if (!this.rootVisuals) {
                    var a = this.chart.boxDefaults().outline.width; a = this.rootVisuals = d.panels(this.renderer).build({
                        axis: {}, axisMarkers: !0,
                        background: !0, gridLines: !0, overflow: !0, outline: { width: a }, content: { stroke: { width: 0 }, holder: { stretch: !1 } }
                    }); this.wrap(a)
                } return this
            }; b.prototype.renderData = function (a, c) { e.prototype.renderData.call(this, a, c); a = this._metrics; c = [this.yAxis.tickBounds, this.xAxis.tickBounds, d.bboxLib.fromRect(this.contentRect)]; a.clipBounds = ia(d.bboxLib.fromRect(this.contentRect), this.rootVisuals.content, this.caPanes.rootPanel); a.shapeBounds = ia(d.bboxLib.bboxUnion(c), this.rootVisuals.content, this.caPanes.rootPanel); return this };
            return b
        }(Kb), Hd = function () {
            function e(b) { this.chartArea = b; this._panes = []; this.count = 0 } e.prototype.setPanes = function (b) {
                var a = this, c = a.chartArea; a.chart = c.chart; var g = c.ctManager.getPaneGroups(c._series); d.jsLib.mergeCollections(g, a._panes, function (c) { a: { var d = a.chartArea.ctManager; if (d.isType("radar")) c = new Ed(a, c); else { if (d.isType("gauge")) if (d = d.settingVal("gaugeType", c[0]), "circular" === d) { c = new Fd(a, c); break a } else if ("linear" === d) { c = new Gd(a, c); break a } c = void 0 } } return c.initShapeItems(b) }, function (a,
                    c) { return c.update(a, b) }, function (a) { return a.destroy() }, function (a) { return a.hash }, function (a) { return a.hash }); a.count = a._panes.length; a.add(c); return a
            }; e.prototype.eachPane = function (b) { d.jsLib.each(this._panes, b); return this }; e.prototype.renderAxes = function () { return this }; e.prototype.renderData = function (b, a) {
                var c = b.borderWidth / 2; this._panes.length; this.caBox = d.bboxLib.fromRect(b); this.caRect = b; this.rootPanel.attr({ offsetX: c + b.x, offsetY: c + b.y }); c = d.bboxLib.bestScaledLayout(this._panes.map(function (a) { return a.assumeSize() }),
                    b); c.boxes = d.bboxLib.splitIntoColsRows(b, c.cols, c.rows); var g = c.boxes, e = []; this.eachPane(function (a, c) { c = d.rectLib.fromBBox(g[c]); a.setProjection(c); a = a.measure(c); a.limits[0] && a.limits[0] < a.outerBox[2] && (a.outerBox[2] = a.limits[0] + .1); e.push(a) }); b = dc(e, { cols: c.cols, rows: c.rows }, b); var m = b.boxes, h = b.spaces; this.eachPane(function (c, b) {
                        var g = m[b]; b = h[b]; if (g) {
                            c.setAvSpace(b); if (0 > g[2] || 0 > g[3]) { var e = c.measure(d.rectLib.fromBBox(b)); g = d.bboxLib.fromCenter(d.bboxLib.center(g), [e.outerBox[2], e.outerBox[3]]) } g =
                                c.adjustByShapeOptions(g); c.setShapeSize(g, b); var f = c.measure(d.rectLib.fromBBox(g)); e = f.innerSize; f = f.outerBox; var l = [b[2] - f[2], b[3] - f[3]]; g = [f[2] - g[2], f[3] - g[3]]; 0 < l[0] && 0 < g[0] && (f[0] -= g[0] / 2); 0 < l[1] && 0 < g[1] && (f[1] -= g[1] / 2); c.rootPanel.attr({ offsetX: f[0], offsetY: f[1], width: f[2], height: f[3] }); c.rootVisuals.contentHolder.attr({ width: e[0], height: e[1] }); c.setShapeSize(f, b); c.renderData([e[0], e[1]], a)
                        }
                    }); this.rootPanel.update(); this.eachPane(function (c, b) { c.postArrange(a) }); return this
            }; e.prototype.add =
                function (b) { var a = this.rootPanel = this.rootPanel || this.chart.renderer.panel(); this.eachPane(function (c) { return c.add(a) }); this.rootPanel.add(b.rootVisuals.dataContent) }; return e
        }(), xa = { squarified: { changeDirection: !0, direction: 0, lowRatio: !0 }, sliceanddice: { changeDirection: !0, direction: 0, lowRatio: !1 }, stripes: { changeDirection: !1, direction: 0, lowRatio: !1 } }, Ob = function () { return { axes: "y", values: "y", privateAxes: "y", requiredData: "y", supportedData: "y", customAxisOptions: { y: { visible: !1 } } } }, Id = function (e) {
            function b() {
                var a =
                    null !== e && e.apply(this, arguments) || this; a.kind = "treemap"; a.staticSeriesBodyInfo = [rc]; a.collidePointBoxes = !1; a.typeConfig = Ob(); a.hcLabelsOnly = !0; return a
            } K(b, e); b.prototype.getTypeConfigDefault = function () { return Ob() }; b.prototype.hideUnusedPointVisuals = function (a) { d.hideVisual(a.visuals.marker) }; b.prototype.setCoordinates = function (a, c) {
                e.prototype.setCoordinates.call(this, a, c); var b = this; c = b.series; var f = c.ctManager, m = xa.squarified, h = [], l = c.indexer, k = d.bboxLib.fromRect(c.renderRect), n, p = f.settingVal("treemapMode",
                    c); f = f.settingVal("treemapDirection", c); p && (d.jsLib.isString(p) ? (m = xa[p] || m, f && (m.direction = "horizontal" === f ? 0 : 1)) : (m = p.type && xa[p.type] || m, p.direction && (m.direction = "horizontal" === p.direction ? 0 : 1))); (p = c.indexer.data.coordinates || c.prevCoords) && (p = p.slice(0)); l.indexKeys(["coordinates"], {}, 0); var q = c.points().items, r = function (a) { return b.getChildren(a) }, t = Ia(q.filter(function (a) { return !b.getParents(a).length }), k, function (a) { return b.valueGetter(a, r) }, r, function (a) { return b.idGetter(a) }, m); m = function (a,
                        c) { c = t[u.idGetter(q[a])]; if (!c) return "continue"; c = d.bboxLib.fromLTRB(c); var g = d.bboxLib.toPath(c), e = d.bboxLib.center(c), f = d.pathLib.fromString(g); h.push(c); n = { path: g, xyz: e.slice(0), xyzs: e.slice(0), cxy: e.slice(0), meta: { label: { bounds: c.slice(0) } }, bbox: c.slice(0), hitTest: function (a, c) { return f.hitTest(a, c) } }; b.clearPrevCoord(l.getValue("coordinates", a)); l.setValue("coordinates", a, n) }; var u = this; p = 0; for (f = q.length; p < f; p++)m(p); b.coordinates.line = [d.bboxLib.toPoints(k, 5)]; m = (m = d.jsLib.evalPath(b.shapeLabelMeta,
                            "label.bounds")) && (m[0] !== k[0] || m[1] !== k[1]); b.shapeLabelMeta.label = { bounds: k }; uc(b, m); h.length && (b.coordShapeBbox = a, b.coordRectAll = a, b.coordRect = a); b.coordDirty = !1; b.renderOrder = c.indexer.sortByNone(); b.renderOrderRev = b.renderOrder.slice(0); b.renderOrderRev.reverse(); return this
            }; b.prototype.getIconPaths = function (a, c) { return d.getColumnIconPathsStatic(this, a, c) }; b.prototype.possibleLabelPositions = function (a, c, b, d, e) { return [d.bbox] }; b.prototype.valueGetter = function (a, c) {
                var b = d.jsLib.isArray(a) ? a :
                    c(a); if (b.length) { for (var e = a = 0; e < b.length; e++)a += this.valueGetter.call(this, b[e], c); return a } return this.series.indexer.getValue("y", a._i)
            }; b.prototype.idGetter = function (a) { return d.jsLib.isNumber(a) ? a : a.id || JSON.stringify(a) }; return b
        }(Hb), tc = function () {
            function e(b, a, c, d) { this.x = b; this.y = a; this.height = d; this.width = c } e.prototype.shortestEdge = function () { return Math.min(this.height, this.width) }; e.prototype.getCoordinates = function (b, a, c) {
                var g = this.x, e = this.y, m = [], h = this.height ? d.jsLib.sum(b) / this.height :
                    0, l = this.width ? d.jsLib.sum(b) / this.width : 0; if ((c = !c) && a || !c && this.width >= this.height) for (a = 0; a < b.length; a++)c = h ? b[a] / h : 0, m.push([g, e, g + h, e + c]), e += c; else for (a = 0; a < b.length; a++)c = l ? b[a] / l : 0, m.push([g, e, g + c, e + l]), g += c; return m
            }; e.prototype.cutArea = function (b, a, c) { (c = !c) && a || !c && this.width >= this.height ? (b = this.height ? b / this.height : 0, b = new e(this.x + b, this.y, this.width - b, this.height)) : (b = this.width ? b / this.width : 0, b = new e(this.x, this.y + b, this.width, this.height - b)); return b }; return e
        }(), sc = function (e, b) {
            var a =
                [], c = d.jsLib.sum(e); b = c ? b / c : 0; for (c = 0; c < e.length; c++)a[c] = e[c] * b; return a
        }, tb = function (d, b) { if (d[0].length) for (var a = 0; a < d.length; a++)tb(d[a], b); else b.push(d) }, Ja = function (e, b, a, c, g) {
            var f = g.changeDirection, m = g.lowRatio, h = g.direction; if (0 === e.length) c.push(a.getCoordinates(b, h, m)); else {
                var l = a.shortestEdge(), k = e[0], n; !(n = 0 === b.length) && (n = m) && (n = b.slice(), n.push(k), n = Pb(b, l) >= Pb(n, l)); n ? (b.push(k), Ja(e.slice(1), b, a, c, g)) : (f && (g.direction = 1 - h), f = a.cutArea(d.jsLib.sum(b), h, m), c.push(a.getCoordinates(b,
                    h, m)), Ja(e, [], f, c, g)); return c
            }
        }, Pb = function (e, b) { var a = Math.min.apply(Math, e), c = Math.max.apply(Math, e); e = d.jsLib.sum(e); return Math.max(Math.pow(b, 2) * c / Math.pow(e, 2), Math.pow(e, 2) / (a * Math.pow(b, 2))) }, Qb = function () { return { axes: "y", values: "y", privateAxes: "y", requiredData: "y", supportedData: "y", customAxisOptions: { y: { visible: !1 } } } }, Xa = function (d) { if (d && d.series.name && 1 < d.series.chartArea.series().items.length || !d) return { verticalAlign: "bottom", text: "%name" } }, Ya = function (e) {
            function b() {
                var a = null !== e &&
                    e.apply(this, arguments) || this; a.labelBoxes = { inside: [], outside: [] }; a.outsideLabelMargin = 10; a.typeConfig = Qb(); a._metrics = { renderBox: [0, 0, 0, 0], tickBounds: [0, 0, 0, 0], clipBounds: [0, 0, 0, 0], shapeBounds: [0, 0, 0, 0], innerBounds: d.undefVal, availableBounds: d.undefVal, labelBoxes: { all: [], top: [], middle: [], bottom: [], userOffsets: [] } }; a.shapeSize = { labelMargin: d.undefVal }; return a
            } K(b, e); b.prototype.getTypeConfigDefault = function () { return Qb() }; b.prototype.setCoordinates = function (a, c) {
                var b = this.series; b.info.type; var e =
                    d.bboxLib.fromRect(a), m = d.bboxLib.center(e), h = a, l = function (a) { d.jsLib.def(a.x) && (a = d.bboxLib.fromRect(a)); var c = Math.min(a[2], a[3]); return d.bboxLib.fromCenter(d.bboxLib.center(a), [c, c]) }(a), k = b.indexer.data.coordinates || b.prevCoords; k && (k = k.slice(0)); c = d.jsLib.merge({ phase: "outsideLabels" }, c); this.setCoordinatesWith(d.rectLib.fromBBox(l), c); c.phase = ""; var n = d.bboxLib.fromRect(this.coordRectAll), p = d.bboxLib.fromRect(this.coordRect), q = d.bboxLib.center(n); if (d.bboxLib.bInsideA(e, n)) e = h = sa(p, this.coordShapeBbox),
                        this.setCoordinatesWith(a, c, e); else if (!(n[2] <= e[2] && n[3] <= e[3])) { q = function () { var a = Math.min(l[2] + r, l[2] + t); l = d.bboxLib.fromCenter(m, [a, a]); h = d.rectLib.fromBBox(l) }; var r = Math.min(e[2] - n[2], 0), t = Math.min(e[3] - n[3], 0); q(); 10 < h.width && this.setCoordinatesWith(a, c, h); n = d.bboxLib.fromRect(this.coordRectAll); r = Math.max(e[2] - n[2], 0); t = Math.max(e[3] - n[3], 0); q(); this.setCoordinatesWith(a, c, h) } n = d.bboxLib.fromRect(this.coordRectAll); q = d.bboxLib.center(n); a = m[0] - q[0]; e = m[1] - q[1]; (a || e) && this.setCoordinatesWith(d.rectLib.translate(h,
                            a, e), c); if (k) for (c = 0, a = b.points().items.length; c < a; c++)if (e = b.indexer.getValue("coordinates", c)) e.coordPrev = this.clearPrevCoord(k[c]); this.renderOrder = b.indexer.sortByNone(); this.renderOrderRev = this.renderOrder.slice(0); this.renderOrderRev.reverse(); return this
            }; b.prototype.setCoordinatesWith = function (a, c, b) { return this }; b.prototype.unsquishLabels = function (a) {
                var c = this.series.indexer, b = function (a) { return c.getValue("coordinates", a).meta.label }, e = function (a, c) {
                    a = b(a)[1]; c = b(c)[1]; return a < c ? -1 : a >
                        c ? 1 : 0
                }; d.jsLib.each(a, function (a) { return a.sort(e) }); a[0].reverse(); a[1].reverse(); var m, h, l = function () { h[1] + h[3] > m[1] && (h[1] = m[1] - h[3] - 1) }, k = function () { h[1] < m[1] + m[3] && (h[1] = m[1] + m[3] + 1) }, n = function (a, c) { return function (d, g) { h = b(d); !g && c && (m = c, a()); g && a(); m = h } }; d.jsLib.each(a[0], n(l)); d.jsLib.each(a[1], n(l)); d.jsLib.each(a[2], n(k)); d.jsLib.each(a[3], n(k)); var p = d.jsLib.map(a, function (a) { return d.bboxLib.bboxUnion(d.jsLib.map(a, b)) || [] }), q; (q = eb(p[0], p[3])).overlap && (d.jsLib.each(a[0], n(l, d.bboxLib.translate(p[3],
                    [0, q.overlap / 2]))), d.jsLib.each(a[3], n(k, p[0]))); (q = eb(p[1], p[2])).overlap && (d.jsLib.each(a[1], n(l, d.bboxLib.translate(p[2], [0, q.overlap / 2]))), d.jsLib.each(a[2], n(k, p[1])))
            }; b.prototype.initShapeItems = function (a) {
                var c = this, b = c.series, e = b.rootVisuals, m = d.jsLib.copy(b.chart.options("defaultSeries.shape") || {}); b && d.jsLib.merge(m, b.options("shape")); m = c.getShapeOptions(b.contentRect()); if (m = c.normalizeShapeLabels(m)) 0 < m.length ? d.jsLib.each(m, function (d, e) { return c.setShapeLabel(d, b, e, a) }) : m.text && (e =
                    e.shapeLabels.childElements, 1 === e.length ? c.setShapeLabel(m, b, 0, a) : e.length && e[0].textAttr === m.text || c.setShapeLabel(m, b, 0, a)); return this
            }; b.prototype.normalizeShapeLabels = function (a) { var c = a.label; a = a.defaultLabel; if (c) { var b = Xa(); c.pop ? d.jsLib.each(c, function (a) { return d.jsLib.defaults(a, b) }) : d.jsLib.defaults(c, b) } else c = a ? d.jsLib.merge(Xa(this) || {}, a) : Xa(this); return c }; b.prototype.destroyShapeLabels = function () { var a = d.jsLib.epa(this.series.rootVisuals, ["shapeLabels", "childElements"]); if (a) for (; a.length;)a[0].destroy() };
            b.prototype.setShapeLabel = function (a, c, b, e) { c = this.series; var g = c.rootVisuals.shapeLabels, f; if (f = d.jsLib.evalPath(a, "text")) f = this.shapeLabelText(f), qb(a, this, g, c.renderer, b, f, c.chartArea.renderRect.width, e); return this }; b.prototype.alignLabels = function (a) {
                var c = this.series, b = c.rootVisuals.shapeLabels.childElements; if (b.length) {
                    var e = this.getShapeOptions(c.contentRect()), m = this._metrics, h = this.normalizeShapeLabels(e); m.renderBox = d.bboxLib.fromRect(c.chartArea.renderRect); m.clipBounds = this.coordShapeBbox;
                    m.tickBounds = d.bboxLib.fromRect(this.coordRectAll); m.availableBounds = d.bboxLib.fromRect(this.coordRect); m.shapeBounds = d.bboxLib.fromRect(this.coordRectAll); nb(this, c.chartArea, b, e, h, a)
                }
            }; b.prototype.shapeLabelText = function (a) { var c = d.jsLib.getValType(a), b = this.series; "function" === c && (a = a(b)); return b.replaceTokens(a) }; return b
        }(d.SeriesBaseType), wc = 1 / 1.618, Jd = function (d) { var b = function (a, b) { a = a.y; b = b.y; return a < b ? -1 : a > b ? 1 : 0 }, a = function (a, d) { return b(d, a) }; return d ? a : b }, Rb = function () {
            return {
                axes: "y",
                values: "x,y", privateAxes: "x,y", requiredData: "y", supportedData: "x,y", customAxisOptions: { z: { visible: !1, scale: { includeOrigin: !0 } }, y: { visible: !1 } }
            }
        }, Za = function (e) {
            function b() { var a = null !== e && e.apply(this, arguments) || this; a.kind = "funnel"; a.typeConfig = Rb(); return a } K(b, e); b.prototype.getTypeConfigDefault = function () { return Rb() }; b.prototype.setCoordinatesWith = function (a, c, b) {
                var e = this, g = e.series, h = g.currentOptions, l = e.getShapeOptions(g.contentRect(), a); a = d.bboxLib.fromRect(b || a); var k = [], n = [], p = [], q =
                    [], r = g.indexer, t, u, v = g.points().items.slice(0), w, x, y, z = 0; d.jsLib.evalPath(h, "emptyPointMode") || "undefined"; var B = [[], [], [], []]; e.initShapeItems(c); r.indexKeys(["coordinates"], {}, 0); b = d.jsLib.pick(l.cxy, d.bboxLib.center(a)); var G = b[0], A = b[1]; if (h = l.offset) G += h[0], A += h[1]; l.cxy = b; h = d.bboxLib.fromCenter([G, A], [a[2], a[3]]); e.coordRect = d.rectLib.fromBBox(h); l.size = l.size.length ? l.size : [a[2], a[3]]; v.sort(Jd(!l.inverted)); a = function (a, b) {
                        w = v[a]; u = w._i; y = w.currentOptions; x = g.getPointAttr(y); r.getValue("pos",
                            u).xyz; var f = w.replaceTokens({ token: "%percentOfSeries" }) / 100, h = [G, A]; a = vc([z, z + f], l, !a, a === b - 1); b = a.path; var m = d.bboxLib.center(a.bounds), E = d.pathLib.fromString(b); q.push(a.bounds); t = { path: b, xyz: m.slice(0), xyzs: m.slice(0), cxy: h.slice(0), meta: { label: d.undefVal }, bbox: a.bounds.slice(0), pathOptions: a }; x.labelVisible && (h = e.positionLabel(w, E, x, t, c), t.meta.labelOutside || "outsideLabels" === c.phase ? (B["right" === ("left" === x.label.align ? "left" : "right") ? l.inverted ? 0 : 3 : l.inverted ? 1 : 2].push(u), p.push(h)) : n.push(h),
                                k.push(t.meta.label = h)); var F = e.getLabelHitTest(); t.hitTest = function (a, c) { return E.hitTest(a, c) || F(this, a, c) }; r.setValue("coordinates", u, t); z += f
                    }; h = 0; for (b = v.length; h < b; h++)a(h, b); d.bboxLib.collideAny(p) && e.unsquishLabels(B); if (q.length) { e.coordShapeBbox = d.bboxLib.bboxUnion(q); var F = [d.bboxLib.bboxUnion(k)]; e.coordShapeBbox && F.push(e.coordShapeBbox); F = d.bboxLib.bboxUnion(F); e.coordRectAll = d.rectLib.fromBBox(F) } e.labelBoxes = { inside: n, outside: p }; e.alignLabels(c); F && e._metrics.labelBoxes.all.length &&
                        (e.coordRectAll = d.rectLib.fromBBox(d.bboxLib.bboxUnion(C([F], e._metrics.labelBoxes.all)))); e.coordDirty = !1; return this
            }; b.prototype.positionLabel = function (a, c, b, e, m) {
                var g = m; m = g.phase; this.series; var f = b.label.placement, k = "outsideLabels" === m ? "outside" : f || "auto", n = b.label.autoHide; f = e.xyz; e.bbox; if (m = e.meta) m.marker && e.meta.marker[2], m.labelFits = !0; this.initPointLabel(a, e, b, g); g = m.labelSize; if (c = "outside" !== k ? d.polyFitLib.fitBoxInPath(c, g, f) : d.undefVal) return c = d.bboxLib.fromCenter(d.bboxLib.center(c),
                    g), m.labelOutside = !1, c; if ("inside" === k) return m.labelFits = !n, m.labelOutside = !1, d.bboxLib.fromCenter(f, g); a = this.outsideLabelMargin + d.jsLib.pick(a.options("label.margin"), 5); c = e.pathOptions.labelAnchors.right; "right" === ("left" === b.label.align ? "left" : "right") ? c = [c[0] + a, f[1] - g[1] / 2] : (c = e.pathOptions.labelAnchors.left, c = [c[0] - a - g[0], f[1] - g[1] / 2]); c.push.apply(c, C(g)); this.hasOutsideLabels = m.labelOutside = !0; return c
            }; b.prototype.renderLabel = function (a, c, b, e, m) {
                e = this.series; var g = a.visuals, f = e.renderer,
                    k = e.rootVisuals, n = b.meta, p = c.label.autoHide, q; !1 === b.meta.labelFits && p && (q = !0); var r = n && n.labelText ? n.labelText : a.replaceTokens(e.info.labelTextInfo.label), t = n && n.labelAttr ? n.labelAttr : d.stylingLib.labelToAttr(c.label); !b.meta.labelOutside && c.label.hcColor && (t.fill = c.label.hcColor); (p = g.label) ? t.val = r : p = g.label = f.textStack(r); p.composeCombinations(); b.xyz; if (n) {
                        if (r = n.label.slice(0)) t = this.render_applyDynamicAttrVals([t, { x: r[0], y: r[1], zIndex: e.zIndex + d.consts.zIndexReference.label }], m), p.attr(t);
                        r = d.bboxLib.pad(r, -d.jsLib.pick(a.options("label.margin"), 5)); t = d.bboxLib.center(r); if (b.meta.labelOutside && c.labelConnector) {
                            var u = "left" === c.label.align ? "left" : "right"; b = [b.pathOptions.labelAnchors[u], ["left" === u ? r[0] + r[2] : r[0], t[1]]]; b = d.dmUtils.snapPointsToPanel(k.points, b, 1); b = d.shapeLib.pointsToPath(b); b = fb(d.pathLib.fromString(b), 3, 0); t = this.render_applyDynamicAttrVals([{ opacity: 1, d: b, zIndex: e.zIndex + d.consts.zIndexReference.labelConnector }, c.labelConnectorAttr], m); (p = g.labelConnector) ? p.attr(t) :
                                g.labelConnector = f.renderer.path().attr(t).add(k.points)
                        } else d.hideVisual(g.labelConnector); if (a.labelAutoHidden = q) d.hideVisual(g.label), d.emitter.emit("tip", e.name || "", "pLabelHidden", { data: [e.name || e.currentOptions.id || " ", d.strLib.shortenEllipsis(n.labelText, 10)], container: e.chartArea.chart.getWrapper() })
                    }
            }; b.prototype.getShapeOptions = function (a, c) {
                a = e.prototype.getShapeOptions.call(this, a, c); var b = this.series.ctManager; c = b.settingVal("funnelOrientationType"); var f = b.isType("pyramid"); b = b.isType("cone");
                var m = f || b; "inverted" === c && (m = !m); d.jsLib.merge(a, { inverted: m, neck: b || f ? 0 : .2 }); return a
            }; b.prototype.getIconPaths = function (a, c) { return d.getColumnIconPathsStatic(this, a, c) }; return b
        }(Ya), Sb = function () { return { axes: "x,y,z", values: "x,y,z", requiredData: "x,y,z", supportedData: "x,y,z", privateAxes: "", customAxisOptions: { z: { visible: !1 } } } }, Tb = function (e) {
            function b() { var a = null !== e && e.apply(this, arguments) || this; a.kind = "heatmap"; a.hcLabelsOnly = !0; a.typeConfig = Sb(); a.skipSubvalues = !0; return a } K(b, e); b.prototype.getTypeConfigDefault =
                function () { return Sb() }; b.prototype.pointArrayExpander = function (a) { return { x: a[0], y: a[1], z: a[2] } }; b.prototype.setCoordinates = function (a, c) {
                    c ? c.coordinatesCorrection : null; var b = this; c = b.series; var e = c.indexer, m = b.getShapeOptions(a).innerPadding, h = b.isHoriz(), l, k, n = c.xAxis, p = c.yAxis, q = a.x, r = a.y, t = a.width, u = a.height, v = function (a) { return (a.unZoomedRange.max - a.unZoomedRange.min) / (a.range.max - a.range.min) }, w = [h ? u : t, h ? t : u], x = [n.dataSortedUniq.length, p.dataSortedUniq.length], y = [w[0] / x[0] * v(n), w[1] / x[1] * v(p)];
                    h && y.reverse(); m && (h = Math.min.apply(Math, C(y)), n = y.slice(0), n.unshift(0, 0), y = d.bboxLib.pad(n, 1 <= m ? m : h * m).slice(2)); e.indexKeys(["coordinates"], {}, 0); var z = c.points().items; m = function (a, c) {
                        l = e.getValue("pos", a); c = [q + l.xyz[0] * t, r + l.xyz[1] * u]; var g = d.bboxLib.fromCenter(c, y); k = { path: b.toPointPath(z[a], g), xyz: c, xyzs: c, cxy: c, meta: { label: { bounds: g.slice(0) } }, bbox: g.slice(0) }; !1 !== z[a].currentOptions.mouseTracking && (k.hitTest = function (a, c) { return d.bboxLib.pointInside(g, [a, c]) }); b.clearPrevCoord(e.getValue("coordinates",
                            a)); e.setValue("coordinates", a, k)
                    }; h = 0; for (n = z.length; h < n; h++)m(h); b.coordRect = a; b.coordDirty = !1; b.renderOrder = c.indexer.sortByNone(); b.renderOrderRev = b.renderOrder.slice(0); b.renderOrderRev.reverse(); return this
                }; b.prototype.toPointPath = function (a, c) { return d.bboxLib.toPath(c) }; b.prototype.getIconPaths = function (a, c) { return d.getColumnIconPathsStatic(this, a, c) }; return b
        }(function (d) {
            function b() { var a = null !== d && d.apply(this, arguments) || this; a.collidePointBoxes = !1; return a } K(b, d); b.prototype.possibleLabelPositions =
                function (a, c, b, d, e) { return [d.bbox] }; return b
        }(d.SeriesBaseType)), Kd = "stroke stroke-opacity stroke-width stroke-dasharray stroke-linejoin stroke-linecap".split(" "), Ld = ["opacity", "fill", "hatchPattern", "hatch"], Md = d.timeLib.CalendarPattern, Ub = function () { return { axes: "x,y,z", values: "x,y,z", requiredData: "x,y,z", supportedData: "x,y,z", privateAxes: "", customAxisOptions: { z: { visible: !1 } } } }, Nd = function (e) {
            function b() {
                var a = null !== e && e.apply(this, arguments) || this; a.kind = "calendar"; a.hcLabelsOnly = !0; a.typeConfig =
                    Ub(); a.pointDataKeys = "x y z complete completeX complete.y complete.x name".split(" "); a.skipSubvalues = !0; a.highlightVisuals = []; a.highlightAttrs = []; return a
            } K(b, e); b.prototype.render = function (a, c) { if (!(this.series.chart.isRendered && this.isRendered || this.series.isVisible)) return this; e.prototype.render.call(this, a, c); return this.renderPatternHighlights(a) }; b.prototype.wrapLabel = function (a, c, b) {
                if (32 > Math.min(c.maxWidth, c.maxHeight)) return e.prototype.wrapLabel.call(this, a, c, b); var d = this.series.chartArea.renderer.panel({ type: "scroll" }).attr(c);
                a.attr({ maxWidth: c.maxWidth, maxHeight: c.maxHeight }).add(d); (b.label = b.label || {}).wrapped = !0; return d
            }; b.prototype.toPointPath = function (a, c) { return d.bboxLib.toPath(c) }; b.prototype.renderPatternHighlights = function (a) {
                var c, b, e, m = this, h = m.series, l = d.bboxLib.toLTRB(d.bboxLib.fromRect(h.contentRect())), k = h.indexer, n = m.isHoriz(), p = h.currentOptions.attributes, q = m.series.chart._highlights, r = function (a) { return d.jsLib.filter(h._points, function (c) { return a.isInside(c.currentOptions.attributes.date) }) }, t = function (a) {
                    var c,
                    b = []; try { for (var d = D(a), e = d.next(); !e.done; e = d.next()) { var g = e.value; b[g.x + "," + g.y] = g } } catch (ja) { var f = { error: ja } } finally { try { e && !e.done && (c = d.return) && c.call(d) } finally { if (f) throw f.error; } } return b
                }, u = function (a) {
                    var c = a.slice(0); a = []; var b, e, g = function () { e = []; k = c.pop(); b = k[1]; e = [k[0], k[1]] }, f = function (a) { b = a[1]; e.push(b); d.jsLib.removeArrItem(c, a) }, h = function (a) { var b = a[0] + "," + a[1]; return d.jsLib.filter(c, function (a) { a = a[0]; return a[0] + "," + a[1] === b }) }, m = function (a, c) {
                        c = d.trigLib.angleOfPoints(c[0],
                            c[1]); return ua(a, c)
                    }; for (g(); ;) { var l = h(b); if (1 === l.length) { var k = l[0]; f(k) } else if (2 === l.length) { var n = d.trigLib.angleOfPoints(k[1], k[0]); k = m(n, l[0]) < m(n, l[1]) ? l[0] : l[1]; f(k) } else if (!l.length && c.length) e.length && a.push(e), g(); else { e.length && a.push(e); break } } return a
                }, v = h.xAxis.getRange(), w = h.yAxis.getRange(), x = [k.min("x"), k.max("x")], y = [k.min("y"), k.max("y")], z = [v.min + .5, v.max + .5], B = [w.min + .5, w.max + .5]; !h.xAxis.isInverted() && z.reverse(); !h.yAxis.isInverted() && B.reverse(); n && (c = [B, z], b = N(c, 2), z =
                    b[0], B = b[1], c); var G = n ? function (a) { return [d.mathLib.mapValue(l[0], l[2], z[0], z[1], a[1]), d.mathLib.mapValue(l[1], l[3], B[0], B[1], a[0])] } : function (a) { return [d.mathLib.mapValue(l[0], l[2], z[0], z[1], a[0]), d.mathLib.mapValue(l[1], l[3], B[0], B[1], a[1])] }, A = [], F = [], E = function (a) {
                        var c = a.split(","); a = parseInt(c[0]); c = parseInt(c[1]); a !== x[0] && F[a - 1 + "," + c] || A.push([[a, c + 1], [a, c]]); c !== y[0] && F[a + "," + (c - 1)] || A.push([[a, c], [a + 1, c]]); a !== x[1] && F[a + 1 + "," + c] || A.push([[a + 1, c], [a + 1, c + 1]]); c !== y[1] && F[a + "," + (c + 1)] || A.push([[a +
                            1, c + 1], [a, c + 1]])
                    }, J = function (a, c, b) {
                        var e; if (c.length) {
                            var g = !1; F = t(c); A = []; try { for (var f = D(c), h = f.next(); !h.done; h = f.next()) { var l = h.value, m = l.userOptions.z; !d.jsLib.isNull(m) && d.jsLib.def(m) && ("", g = !0); E(l.x + "," + l.y) } } catch (Ad) { var k = { error: Ad } } finally { try { h && !h.done && (e = f.return) && e.call(f) } finally { if (k) throw k.error; } } c = u(A); c = d.jsLib.map(c, function (a) { a = d.jsLib.map(a, G); return d.shapeLib.flattenD(d.shapeLib.pointsToPath(a)) + " Z " }).join(" "); k = d.jsLib.merge({}, a.currentOptions); !g && a.asEmpty(k);
                            return d.jsLib.merge(d.stylingLib.shapeToAttr(k), { d: c, key: a.id + b })
                        } return []
                    }; if (q) {
                        var C = [], H = h.id, K = []; c = function (a) {
                            var c, b, d = [], e = new Md(a.currentOptions.pattern); if (e.isInterval) {
                                e.setRange(p.date, p.endDate); var g = []; m.eachPoint(function (a) { var c = e.isInside(a.currentOptions.attributes.date); -1 < c && (d.push(a), g[c] ? g[c].push(a) : g[c] = [a]) }); var f = 0, h = d.length; try { for (var l = (c = void 0, D(g)), k = l.next(); !k.done; k = l.next()) { var n = k.value; n && (C.push([h, J(a, n, f++)]), K.push(h)) } } catch (Bd) { c = { error: Bd } } finally {
                                    try {
                                        k &&
                                        !k.done && (b = l.return) && b.call(l)
                                    } finally { if (c) throw c.error; }
                                }
                            } else d = r(e), h = d.length, C.push([h, J(a, d, 0)]), K.push(h); a.updateItemSet(H, d)
                        }; try { for (var I = D(q), O = I.next(); !O.done; O = I.next())c(O.value) } catch (Q) { var P = { error: Q } } finally { try { O && !O.done && (e = I.return) && e.call(I) } finally { if (P) throw P.error; } } K = d.jsLib.sortedUniq(d.jsLib.sortBy(K, function (a) { return a })); var R = h.zIndex; C = d.jsLib.map(C, function (a) { a[1].zIndex = R + K.indexOf(a[0]) - 1; return a[1] }); m.updateHighlights(C, a)
                    } return m
            }; b.prototype.updateHighlights =
                function (a, c) {
                    var b = this, e = b.series.renderer.renderer, m = b.series.rootVisuals.area; b.highlightAttrs = d.jsLib.map(a, function (a) { return b.render_applyDynamicAttrVals(a, c) }); var h = []; d.jsLib.each(b.highlightAttrs, function (c) { h.push(d.jsLib.omit(c, Kd)); var b = c.zIndex + 2 * a.length, e = c.key + "OL"; h.push(d.jsLib.merge(d.jsLib.omit(c, Ld), { key: e, zIndex: b })) }); (a = b.highlightAttrs = h) && d.jsLib.mergeCollections(a, b.highlightVisuals, function (a) { var c = e.path(a).add(m); c.data.key = a.key; b.highlightVisuals.push(c) }, function (a,
                        c) { return c.attr(a) }, function (a) { m.removeChild(a.el); d.jsLib.removeArrItem(b.highlightVisuals, a) }, function (a) { return a.key }, function (a) { return a.data.key }); return b
                }; b.prototype.clearHighlightVisuals = function () { var a = this.series, c; if ((c = this.highlightVisuals) && a.rootVisuals) { var b = a.rootVisuals.area; d.jsLib.each(c, function (a) { b.removeChild(a.el); a.destroy() }) } }; b.prototype.getTypeConfigDefault = function () { return Ub() }; b.prototype.styleIconVisual = function (a, c) { }; b.prototype.getIconVisual = function (a,
                    c, b) {
                        var e = this.series, g = e.chart; c = e.renderer; var h = { z: { fStr: "d4" } }, l = parseFloat(e.replaceTokens("{%zMaxSum}", h)), k = parseFloat(e.replaceTokens("{%zMinSum}", h)); b = b.iconVisual || {}; var n = b.root = b.root || c.panel({ yAlignment: "center" }), p = [0 > k ? k : 0, 0 < l ? l : 0]; h = parseFloat(e.replaceTokens("{%zSum}", h)); e = e.options("palette") || g.palette; "object" === d.jsLib.getValType(e) ? (g = g.getSmartPalette(e), g = g.getValueColor(d.mathLib.mapValue(g.axisRange[0], g.axisRange[1], p[0], p[1], h))) : g = e[0]; b.base = b.base || c.createVisual({
                            type: "bar",
                            max: 0 < l ? l : 0, min: 0 > k ? k : 0, width: a[0], height: a[1], colors: [g, g, "rgba(193,193,193,.4)"], data: [h]
                        }).add(n); return b
                }; b.prototype.setIconVisualAttr = function (a, c) { c.isStyled = !0 }; b.prototype.getIconPaths = function (a) { }; return b
        }(Tb), Vb = function () { return { axes: "y,z", values: "x,y,z", privateAxes: "x,y,z", requiredData: "y", supportedData: "x,y,z", customAxisOptions: { z: { visible: !1, scale: { includeOrigin: !0 } }, y: { visible: !1 } } } }, Od = function (e) {
            function b(a) {
                var c = e.call(this, a) || this; c.series = a; c.kind = "pie"; c.typeConfig = Vb();
                return c
            } K(b, e); b.prototype.getTypeConfigDefault = function () { return Vb() }; b.prototype.pointArrayExpander = function (a) { return { x: a[0], y: a[1], z: a[2] } }; b.prototype.render = function (a) { var c = this.series.rootVisuals.points; a = a || {}; a.coordinatesCorrection = function (a) { return d.dmUtils.snapPointToPanel(c, a, 1) }; e.prototype.render.call(this, a); a.coordinatesCorrection = null; return this }; b.prototype.setCoordinates = function (a, c) {
                var b = this.series; b.info.type; var e = d.bboxLib.fromRect(a), m = d.bboxLib.center(e), h = a, l =
                    function (a) { d.jsLib.def(a.x) && (a = d.bboxLib.fromRect(a)); var c = Math.min(a[2], a[3]); return d.bboxLib.fromCenter(d.bboxLib.center(a), [c, c]) }(a), k = b.indexer.data.coordinates || b.prevCoords; k && (k = k.slice(0)); c = d.jsLib.merge({ phase: "outsideLabels" }, c); this.setCoordinatesWith(d.rectLib.fromBBox(l), c); c.phase = ""; var n = d.bboxLib.fromRect(this.coordRectAll), p = d.bboxLib.fromRect(this.coordRect), q = d.bboxLib.center(n); if (d.bboxLib.bInsideA(e, n)) e = h = sa(p, this.coordShapeBbox), this.setCoordinatesWith(a, c, e); else if (!(n[2] <=
                        e[2] && n[3] <= e[3])) { q = function () { var a = Math.min(l[2] + r, l[2] + t); l = d.bboxLib.fromCenter(m, [a, a]); h = d.rectLib.fromBBox(l) }; var r = Math.min(e[2] - n[2], 0), t = Math.min(e[3] - n[3], 0); q(); 10 < h.width && this.setCoordinatesWith(a, c, h); n = d.bboxLib.fromRect(this.coordRectAll); r = Math.max(e[2] - n[2], 0); t = Math.max(e[3] - n[3], 0); q(); this.setCoordinatesWith(a, c, h) } n = d.bboxLib.fromRect(this.coordRectAll); q = d.bboxLib.center(n); a = m[0] - q[0]; e = m[1] - q[1]; (a || e) && this.setCoordinatesWith(d.rectLib.translate(h, a, e), c); if (k) for (c = 0,
                            a = b.points().items.length; c < a; c++)b.indexer.getValue("coordinates", c).coordPrev = this.clearPrevCoord(k[c]); this.renderOrder = b.indexer.sortByNone(); this.renderOrderRev = this.renderOrder.slice(0); this.renderOrderRev.reverse(); return this
            }; b.prototype.setCoordinatesWith = function (a, c, b) {
                var e = c ? c.coordinatesCorrection : null, g = this, h = g.series, l = h.currentOptions, k = g.getShapeOptions(h.contentRect(), a), n = pa(h); a = b || a; var p = [], q = [], r = [], t = [], u = h.indexer, v, w = h.points().items, x, y, z, B, G = 0, A = d.jsLib.pick(l.explodeOffset,
                    15); d.jsLib.evalPath(l, "emptyPointMode") || "undefined"; var F, E, D = [[], [], [], []], H = function (a) { return d.jsLib.def(a) ? d.mathLib.mapValue(O || 0, I, 0, 1, a) : a }; g.hasOutsideLabels = !1; g.initShapeItems(c); var M = d.jsLib.evalPath(n, "start") || 0, K = 2 * Math.PI; if (l = d.jsLib.evalPath(n, "end")) K = d.trigLib.toRadians(l - M); M -= 90; u.hasAllKeys("zs,ze"); u.indexKeys(["coordinates"], {}, 0); l = "donut" === h.ctManager.settingVal("pieType", h); var I = d.jsLib.pick(k.size[0], Math.max(10, Math.min(a.height, a.width))) / 2, O = d.jsLib.def(k.innerSize) ?
                        1 < k.innerSize ? k.innerSize / 2 : H(k.innerSize) : H(l ? .33 : 0), P = H(.66); l = d.jsLib.pick(k.cxy, d.bboxLib.center(d.bboxLib.fromRect(a))); var N = l[0], Q = l[1]; if (k = k.offset) N += k[0], Q += k[1]; k = d.bboxLib.fromCenter([N, Q], [2 * I, 2 * I]); g.coordRect = d.rectLib.fromBBox(k); var R = h.zAxis.range && 0 > h.zAxis.range.min; k = u.getValue("pos", 0).xyzOrigins; var S = R ? k[2] : d.undefVal, V = 0 < S && 1 > S ? H(S) : I; k = function (a, b) {
                            x = w[a]; B = x.currentOptions; y = h.getPointAttr(B); z = u.getValue("pos", a).xyz; E = d.jsLib.def(z[2]) && !d.jsLib.isNaN(z[2]) ? H(z[2]) :
                                I; F = O; var f = void 0; R && (z[2] < S ? (F = H(z[2]), E = V) : (F = V, E = H(z[2]))); f = E; var k = d.jsLib.def(z[2]) ? d.jsLib.def(.66) ? d.mathLib.mapValue(F, E, 0, 1, .66) : .66 : P; if (u.getValue("isEmpty", a)) return "continue"; b = x.replaceTokens({ token: "%percentOfSeries" }); var l = [N, Q], m = d.mathLib.mapValue(0, K, 0, 100, b), n = d.mathLib.mapValue(0, K, 0, 100, G), C = d.trigLib.toDegrees(n); M && (C += M, n = d.trigLib.toRadians(C)); C = n + m / 2; if (B.exploded || B.selected) l = d.bboxLib.fromRect(d.trigLib.getPolarPoint(l[0], l[1], C, A)).slice(0, 2); v = {
                                    sweep: m, angle: n,
                                    path: d.undefVal, xyz: d.undefVal, xyzs: d.undefVal, cxy: l.slice(0), outerR: f, innerR: O, meta: { label: d.undefVal }
                                }; f = [l[0], l[1]]; f = e ? e(f) : f; k = d.trigLib.getPolarPoint(f[0], f[1], C, k); v.xyzs = v.xyz = [k.x, k.y]; k = v.pathOptions = { start: v.angle, end: v.angle + v.sweep, open: !1, r: E, innerR: F, cxy: f }; k = v.path = d.shapeLib.arc(f[0], f[1], E, E, k); var J = d.pathLib.fromString(k); t.push(J.bbox()); y.labelVisible && (k = g.positionLabel(x, J, y, v, c), v.meta.labelOutside || "outsideLabels" === c.phase ? (D[d.trigLib.quadrant(v.angle + v.sweep / 2)].push(a),
                                    r.push(k)) : v.meta.labelFits && q.push(k), v.meta.label = k, v.meta.labelFits && p.push(k)); var L = g.getLabelHitTest(); v.hitTest = function (a, c) { return J.hitTest(a, c) || L(this, a, c) }; g.clearPrevCoord(u.getValue("coordinates", a)); u.setValue("coordinates", a, v); G += b
                        }; l = 0; for (n = w.length; l < n; l++)k(l); d.bboxLib.collideAny(r) && g.unsquishLabels(D); if (t.length) { g.coordShapeBbox = d.bboxLib.bboxUnion(t); var T = [d.bboxLib.bboxUnion(p)]; g.coordShapeBbox && T.push(g.coordShapeBbox); T = d.bboxLib.bboxUnion(T); g.coordRectAll = d.rectLib.fromBBox(T) } g.labelBoxes =
                            { inside: q, outside: r }; g._metrics.innerBounds = O ? d.bboxLib.fromCenter([N, Q], [2 * O, 2 * O]) : g.coordShapeBbox; g.alignLabels(c); T && g._metrics.labelBoxes.all.length && (g.coordRectAll = d.rectLib.fromBBox(d.bboxLib.bboxUnion(C([T], g._metrics.labelBoxes.all)))); g.coordDirty = !1; return this
            }; b.prototype.positionLabel = function (a, c, b, e, m) {
                var g = m; m = g.phase; var f = this.series, k = b.label.placement; m = "auto" === k ? "outsideLabels" === m ? "outside" : k || "auto" : k; k = b.label.autoHide; a.visuals; f.renderer; f.visuals; f.rootVisuals; var n =
                    e.xyz; if (f = e.meta) f.marker && e.meta.marker[2], f.labelFits = !0; this.initPointLabel(a, e, b, g); b = f.labelSize; if (c = "outside" !== m ? d.polyFitLib.fitBoxInPath(c, b, n) : d.undefVal) return a = d.bboxLib.center(c), c = d.bboxLib.fromCenter(a, b), f.labelOutside = !1, c; if ("inside" === m) return f.labelFits = !k, f.labelOutside = !1, d.bboxLib.fromCenter(n, b); c = d.bboxLib.fromRect(this.coordRect); g = d.bboxLib.center(c); m = c[2] / 2; k = d.trigLib.normalizeAngle(d.trigLib.toDegrees(e.angle)); e = d.trigLib.toDegrees(e.sweep); e = (k + e / 2 + 90) % 360; g = d.trigLib.getPolarDegPoint(g[0],
                        g[1], d.trigLib.normalizeAngle(e - 90), m); a = this.outsideLabelMargin + d.jsLib.pick(a.options("label.margin"), 5); c = 180 > e ? [c[0] + c[2] + a, g.y - b[1] / 2] : [c[0] - b[0] - a, g.y - b[1] / 2]; c.push.apply(c, C(b)); this.hasOutsideLabels = f.labelOutside = !0; return c
            }; b.prototype.renderLabel = function (a, c, b, e, m) {
                e = this.series; var g = a.visuals, f = e.renderer, k = e.rootVisuals, n = b.meta, p = c.label.autoHide, q; !1 === b.meta.labelFits && p && (q = !0); var r = n && n.labelText ? n.labelText : a.replaceTokens(e.info.labelTextInfo.label), t = n && n.labelAttr ? n.labelAttr :
                    d.jsLib.omit(d.stylingLib.labelToAttr(c.label, ["offset"]), ["offsetX", "offsetY"]); !b.meta.labelOutside && c.label.hcColor && (t.fill = c.label.hcColor); (p = g.label) ? t.val = r : p = g.label = f.textStack(r); p.composeCombinations(); b.xyz; if (n) {
                        if (r = n.label.slice(0)) t = this.render_applyDynamicAttrVals([t, { x: r[0], y: r[1], zIndex: e.zIndex + d.consts.zIndexReference.label }], m), p.attr(t); r = d.bboxLib.pad(r, -d.jsLib.pick(a.options("label.margin"), 5)); if ((t = c.label.line) && !1 === t.visible || !b.meta.labelOutside || !c.labelConnector) d.hideVisual(g.labelConnector);
                        else {
                            t = b.angle + b.sweep / 2; var u = Math.min(this.coordRect.width / 2, b.outerR); b = d.trigLib.quadrant(t); b = 1 === b || 2 === b ? "left" : "right"; var v = [[r[0], r[1] + r[3] / 2], [r[0] + r[2], r[1] + r[3] / 2]], w = d.bboxLib.center(d.bboxLib.fromRect(this.coordRect)), x = d.trigLib.getPolarPoint(w[0], w[1], t, this.coordRect.width / 2); x = [w, [x.x, x.y]]; x = d.trigLib.lineIntersect(v[0], v[1], x[0], x[1]); null === x.x && (v = v["right" === b ? 0 : 1], x.x = v[0], x.y = v[1]); t = d.bboxLib.fromRect(d.trigLib.getPolarPoint(w[0], w[1], t, u)).slice(0, 2); u = d.bboxLib.center(r);
                            u[0] = "left" === b ? r[0] + r[2] + 3 : r[0] - 3; r = [x.x, x.y]; "left" === b ? (r[0] < u[0] && (r = u), t[0] < r[0] && (t = r), p.attr({ xAlignment: "right" })) : (r[0] > u[0] && (r = u), t[0] > r[0] && (t = r), p.attr({ xAlignment: "left" })); r = [u, r, t]; r = d.dmUtils.snapPointsToPanel(k.points, r, 1); r = d.shapeLib.pointsToPath(r); r = fb(d.pathLib.fromString(r), 0, 0); t = this.render_applyDynamicAttrVals([{ opacity: 1, d: r, zIndex: e.zIndex + d.consts.zIndexReference.labelConnector, caps: { size: 7, overflow: !1, type: "none", fill: c.baseColor, start: { type: "circle" } } }, c.labelConnectorAttr],
                                m); (p = g.labelConnector) ? p.attr(t) : g.labelConnector = f.renderer.path().attr(t).add(k.points)
                        } q && (d.hideVisual(g.label), d.emitter.emit("tip", e.name || "", "pLabelHidden", { data: [e.name || e.currentOptions.id || " ", d.strLib.shortenEllipsis(n.labelText, 10)], container: e.chartArea.chart.getWrapper() })); a.labelAutoHidden = q
                    }
            }; b.prototype.hideUnusedPointVisuals = function (a) {
                var c = a.visuals; d.hideVisual(c.rect); this.series.options("forceMarker") || a.options("marker.visible") || d.hideVisual(c.marker); d.hideVisual(c.rectComplete);
                d.hideVisual(c.rect); d.hideVisual(c.errorX); d.hideVisual(c.errorY); d.hideVisual(c.errorXV); d.hideVisual(c.errorYV)
            }; b.prototype.render_applyDynamicAttrVals = function (a, c, b) { return e.prototype.render_applyDynamicAttrVals.call(this, a, c, b) }; b.prototype.getIconPaths = function (a, c) { return d.getColumnIconPathsStatic(this, a, c) }; b.prototype.getPointAnimatorOptions = function (a, c) { return a.coordPrev ? { slice: { to: a.pathOptions, from: a.coordPrev.pathOptions } } : {} }; return b
        }(Ya), Wb = function () {
            return {
                axes: "y,z", values: "x,y,z",
                privateAxes: "x,y,z", requiredData: "y", supportedData: "x,y,z", customAxisOptions: { z: { visible: !1, scale: { includeOrigin: !0 } }, y: { visible: !1 } }
            }
        }, na = function (d) { d = d.userOptions; return d.sets || (d.x ? [d.x] : d.name ? [d.name] : void 0) }, Pd = function (e) {
            function b() {
                var a = null !== e && e.apply(this, arguments) || this; a.kind = "venn"; a.typeConfig = Wb(); a.pointValueParser = function (a, b) {
                    var c = function () { return b.sets && 1 === b.sets.length ? b.sets[0] : void 0 }; return d.parsePointValues(a, aa(aa({}, b), {
                        x: b.x || c() || b.name, y: b.y, name: b.name ||
                            b.x || c()
                    }), ["x", "y", "name"])
                }; a.validateData = d.jsLib.Memoize("validateData", function (c) {
                    var b = a.series, e = d.jsLib.reduce(c, function (a, c) { (c = c.sets) && 1 === c.length ? a.circles[c[0]] = !0 : c && a.intersections.push(c); return a }, { circles: {}, intersections: [] }), m = d.jsLib.filter(c, function (a) { if (a.sets) { var c = 1 === a.sets.length; a = !d.jsLib.find(a.sets, function (a) { return !e.circles[a] }); return c || a } return !1 }); c.length !== m.length && d.emitter.emit("error", b.id, "invalidData", { data: [b.name || b.id], container: b.chart.getWrapper() });
                    return m
                }); a.getVennLayout = function (c, b, e) {
                    var g = a.series.chart.getWrapper(); if (c.length) {
                        var f = Gc(c, { lossFunction: ya }), l = f = Jc(f, Math.PI * e / 180, null); e = []; f = []; for (var k in l) l.hasOwnProperty(k) && (f.push(k), e.push(l[k])); var n = b.x, p = b.y, q = b.width, r = b.height; k = Pa(e); b = k.xRange; k = k.yRange; if (b.max == b.min || k.max == k.min) d.emitter.emit("warning", "Venn Layout", "Not scaling solution: zero size detected", { container: g }), e = l; else {
                            l = Math.min(r / (k.max - k.min), q / (b.max - b.min)); n += (q - (b.max - b.min) * l) / 2; p += (r - (k.max -
                                k.min) * l) / 2; q = {}; for (r = 0; r < e.length; ++r) { var t = e[r]; q[f[r]] = { radius: l * t.radius, x: n + (t.x - b.min) * l, y: p + (t.y - k.min) * l } } e = q
                        } f = e; b = {}; k = {}; l = []; for (var u in f) l.push(u), k[u] = []; for (u = 0; u < l.length; u++)for (p = f[l[u]], n = u + 1; n < l.length; ++n)q = f[l[n]], r = X(p, q), r + q.radius <= p.radius + 1E-10 ? k[l[n]].push(l[u]) : r + p.radius <= q.radius + 1E-10 && k[l[u]].push(l[n]); for (u = 0; u < c.length; ++u) {
                            l = c[u].sets; p = {}; n = {}; for (q = 0; q < l.length; ++q)for (p[l[q]] = !0, r = k[l[q]], t = 0; t < r.length; ++t)n[r[t]] = !0; q = []; r = []; for (var v in f) v in p ? q.push(f[v]) :
                                v in n || r.push(f[v]); p = zb(q, r); b[l] = p; p.disjoint && 0 < c[u].size && d.emitter.emit("warning", "Venn Layout", "Area " + l + " not represented on screen", { container: g })
                        } c = { circles: e, textCentres: b }
                    } else c = {}; return c
                }; a.getVennLayoutMemo = d.jsLib.Memoize("getVennLayout", a.getVennLayout); return a
            } K(b, e); b.prototype.contextDefaults = function () { return { states: { muted: { enabled: !0 } }, shape: { padding: .1 }, defaultPoint: { hoverAction: "highlightPoint", label: { visible: !0 }, states: { muted: { opacity: .1 }, hover: { enabled: !1, fill: "currentColor" } } } } };
            b.prototype.getTypeConfigDefault = function () { return Wb() }; b.prototype.pointArrayExpander = function (a) { return { x: a[0], y: a[1], sets: a[2] } }; b.prototype.render = function (a) { var c = this.series, b = c.points().items.map(function (a) { return { sets: na(a), size: a.currentOptions.y } }); this.data = this.validateData(b); this.isEuler = Lc(this.data); var f = c.rootVisuals.points; a = a || {}; a.coordinatesCorrection = function (a) { return d.dmUtils.snapPointToPanel(f, a, 1) }; e.prototype.render.call(this, a); a.coordinatesCorrection = null; return this };
            b.prototype.setCoordinates = function (a, c) {
                var b, e = this.series, m = "colorbypoint" !== this.series.ctSv("vennType"), h = pa(e), l = c ? c.coordinatesCorrection : function (a) { return a }, k = this.getShapeOptions(e.contentRect(), a), n = e.indexer, p = e.points().items; p = p.filter(function (a) { var c = na(a); return c && c.length && (!d.jsLib.isUndefined(a.name || a.x) || 1 === c.length) }).sort(function (a, c) { a = na(a).length; c = na(c).length; return a === c ? 0 : a > c ? 1 : -1 }); n.indexKeys(["coordinates"], {}, 0); var q = k.cxy, r = k.offset, t = k.size; k = aa({}, a); a =
                    d.bboxLib.fromRect(a); t && t.length && (t = t[0], a = d.bboxLib.setSize(a, [t, t])); q && q.length && (a = d.bboxLib.fromCenter(q, a.slice(2))); r && r.length && (a = d.bboxLib.translate(a, r)); d.jsLib.merge(k, d.rectLib.fromBBox(a)); h = this.getVennLayoutMemo(this.data, k, h.start || (this.isEuler ? 0 : 90)); var u = h.circles; h = h.textCentres; q = []; var v = {}; r = 0; for (var w = p.length; r < w; r++) {
                        k = p[r]; t = na(k); var x = u[n.getValue("x", r)], y = (a = h[t.join(",")]) && l([a.x, a.y]); a = void 0; if (x) {
                            var z = l([x.x, x.y]); a = {
                                path: d.shapes.circle(z[0] - x.radius, z[1] -
                                    x.radius, 2 * x.radius, 2 * x.radius).join(" "), xyz: y, xyzs: y, styleSet: e.getPointAttr(k.currentOptions), meta: { label: d.undefVal }
                            }; v[t[0]] = a
                        } else z = t.map(function (a) { return u[a] }), m && !k.userOptions.color && (t = t.map(function (a) { return v[a] && v[a].styleSet.baseColor }), k.currentOptions.color = d.colorLib.simplify(t)), 0 > z.indexOf(void 0) && (a = { path: Kc(z), xyz: y, xyzs: y, styleSet: e.getPointAttr(k.currentOptions), meta: { label: d.undefVal } }); this.clearPrevCoord(n.getValue("coordinates", k._i)); n.setValue("coordinates", k._i,
                            a); q.push(k._i)
                    } m = []; for (r = p.length - 1; 0 <= r; r--)k = p[r], t = na(k), a = n.getValue("coordinates", k._i), l = (null === (b = a) || void 0 === b ? void 0 : b.styleSet) || e.getPointAttr(k.currentOptions), l.labelVisible && a && (z = h[t.join(",")], a.meta.label = { bounds: d.bboxLib.fromCenter([z.x, z.y], [z.size, z.size]) }, this.initPointLabel(k, a, l, c), l = d.bboxLib.fromCenter([z.x, z.y], a.meta.labelInternalSize), a.meta.labelText && (d.bboxLib.collideList(m, l) ? a.meta.labelFits = !1 : m.push(l)), a.meta.label.bounds = l); this.coordDirty = !1; this.renderOrder =
                        q; this.renderOrderRev = this.renderOrder.slice(0); this.renderOrderRev.reverse(); return this
            }; b.prototype.pointLeVisible = function (a) { return !(!a.x && !a.name) }; b.prototype.renderLabel = function (a, c, b, e, m) {
                e = this.series; var g = a.visuals, f = e.renderer, k = e.chartArea.collisionManager, n = b.meta, p; !1 === b.meta.labelFits && !1 !== d.jsLib.epa(a.currentOptions, ["label", "autoHide"]) && (p = !0); var q = n && n.labelText ? n.labelText : a.replaceTokens(e.info.labelTextInfo.label), r = n && n.labelAttr ? n.labelAttr : d.jsLib.omit(d.stylingLib.labelToAttr(c.label,
                    ["offset"]), ["offsetX", "offsetY"]); !b.meta.labelOutside && c.label.hcColor && (r.fill = c.label.hcColor); (c = g.label) ? r.val = q : c = g.label = f.textStack(q); if (n && n.label) { if (b = n.label.bounds.slice(0)) r = this.render_applyDynamicAttrVals([r, { x: b[0], y: b[1], width: b[2], height: b[3], zIndex: e.zIndex + d.consts.zIndexReference.label }], m), c.attr(r); p && d.hideVisual(g.label); a.labelAutoHidden = p; k.addLabelBox(b) }
            }; b.prototype.hideUnusedPointVisuals = function (a) {
                var c = a.visuals; d.hideVisual(c.rect); this.series.options("forceMarker") ||
                    a.options("marker.visible") || d.hideVisual(c.marker); d.hideVisual(c.rectComplete); d.hideVisual(c.rect); d.hideVisual(c.errorX); d.hideVisual(c.errorY); d.hideVisual(c.errorXV); d.hideVisual(c.errorYV)
            }; b.prototype.getIconPaths = function (a, c) { return d.getColumnIconPathsStatic(this, a, c) }; return b
        }(Ya), H = { scrollbarHeight: 16, handleControlSize: 19, scrollbarControlSize: 8, toolbarHeight: 36, toolbarItemsHeight: 24, toolbarButtonsNumber: 3, iconStrokeWidth: 1, itemMargin: 6, rangeFormat: "MM/dd/yyyy" }, Xb = function (d) {
            return {
                type: "button",
                style: "cursor:ew-resize;", position: "inside " + d, boxVisible: !1, margin: 0, icon: { d: "M 0 0 H 10 V 20 H 0 V 0 M 4 5 V 15 M 6 5 V 15", size: H.handleControlSize, fill: "#f2f2f2", stroke: "#999999", strokeWidth: H.iconStrokeWidth }
            }
        }, Yb = function (d, b) { return { type: "input", position: "tltl", value: d, width: 90, "text-align": "center", "background-color": "white", border: "1px solid #bdbdbd", margin: [-H.toolbarHeight + H.itemMargin, 0, 0, H.itemMargin], height: H.toolbarItemsHeight, events_focusout: b } }, Nc = function () {
            function e(b, a) {
                this.chart =
                b; this.chartAxesX = []; this.chartAxesY = []; this.rendered = !1; this.rangeBarItems = []; this.scrollBarItems = []; this.clientXOffset = 0; this.state = {}; this.defaults = H; this.docVUp = this.docMM = d.undefVal; this.actionIdleDefer = new d.idleDefer; var c = b.boxDefaults(1); this.options = d.jsLib.merge({ fill: c.fill, toolbar: { fill: c.fill, outline: c.outline.color }, previewArea: { scrollbar: { color: c.fill } } }, a); this.init(b.chartAreaSet.items)
            } e.prototype.init = function (b) {
                this.state.scrollbar = !1 !== this.options.xScrollbarEnabled; this.state.toolbar =
                    !1 !== this.options.toolbar.visible; this.state.previewArea = !1 !== this.options.previewArea.visible; for (var a = 0, c = b.length; a < c; a++) { var d = b[a]; a === c - 1 && this.state.previewArea ? this.refAxis = d.axes(0) : (this.chartAxesX.push(d.axes(0)), this.chartAxesY.push([d.axes(1), d.axes(2)])); d.rootPanel.attr({ offsetY: -a }) } this.refAxis = this.refAxis || this.chartAxesX[0]; this.refRange = this.refAxis.range; this._docElement || (this._docElement = this.chart.renderer.renderer.documentElement)
            }; e.prototype.setRange = function (b) {
                var a =
                    this; a.chart.chartAreaSet.each(function (c) { c.readyDefer.release(c.navHold); a.rendered && (c.navHold = c.readyDefer.hold("navZoom")) }); a.currentRange = { min: b.min, max: b.max }; d.jsLib.each(a.chartAxesX, function (a) { return a.zoom(b.min, b.max) }); d.jsLib.each(a.chartAxesY, function (a) { return d.jsLib.each(a, function (a) { return a && a.zoom() }) }); a.rendered ? (a.state.toolbar && a.updateToolbarItems(), a.state.previewArea && a.updateScrollBarItems()) : (a.state.toolbar && a.addToolbarItems(), a.state.previewArea && a.addScrollBarItems(),
                        a.refAxis.chart.redraw()); a.chart.chartAreaSet.each(function (a) { a.readyDefer.release(a.navHold) }); a.rendered = !0
            }; e.prototype.updateToolbarItems = function () { var b = this.rangeBarItems, a = b[0]; b = b[2]; var c = this.getFormattedRange(this.currentRange); a.options({ value: c.min }); b.options({ value: c.max }); b = this.chartAxesX[0].chartArea; a = b.rootVisuals.contentStroke.getBbox(); b = d.dmUtils.snapPointToPanel(b.rootVisuals.contentOverlay, [a.x, a.y], 1); this.toolbarBackground.attr({ width: a.width, offsetX: b[0], offsetY: b[1] }) };
            e.prototype.updateScrollBarItems = function () { var b = this.refAxis, a = this.currentRange, c = this.valToPx(b, a.min); b = this.valToPx(b, a.max); 1 < Math.abs(this.leftX - c) && (this.leftX = c); 1 < Math.abs(this.rightX - b) && (this.rightX = b); this.updateLeftCurtain(); this.updateRightCurtain(); this.updateScrollbarIcon() }; e.prototype.scrollBarVisibility = function () { return Math.abs(this.rightX - this.leftX) > 2 * H.scrollbarControlSize ? "visible" : "hidden" }; e.prototype.getLeftCurtainIconPosition = function () {
                return d.dmUtils.snapPointToPanel(this.refAxis.chart.rootVisuals.uiItemsFront,
                    [this.leftX - H.handleControlSize / 2, this.handleTopOffset], 1)
            }; e.prototype.getRightCurtainIconPosition = function () { return d.dmUtils.snapPointToPanel(this.refAxis.chartArea.rootVisuals.contentOverlay, [this.rightX - 2 - H.handleControlSize / 2, this.handleTopOffset], 1) }; e.prototype.getScrollbarIconPosition = function () {
                return d.dmUtils.snapPointToPanel(this.refAxis.chartArea.rootVisuals.contentOverlay, [(this.leftX + this.rightX) / 2 - H.scrollbarControlSize / 2, this.scrollBarTopOffset + (H.scrollbarHeight - H.scrollbarControlSize) /
                    2], 1)
            }; e.prototype.valToPx = function (b, a) { return b._sizeMetrics.length * b.viewState.valToLin(a) }; e.prototype.attachDoc = function () { var b = this, a = b.refAxis.chartArea, c = this._docElement; b.docMM && b.docVUp || (a = a.rootVisuals.content, this.docMM = a.externalOn(c, "vmove", function (a) { return b.docVMoveHandler(a) }), this.docVUp = a.externalOn(c, "vup", function (a) { return b.vupHandler() })) }; e.prototype.detachDoc = function () { this.docMM && this.docMM.un(); this.docVUp && this.docVUp.un(); this.docMM = this.docVUp = null }; e.prototype.addScrollBarItems =
                function () {
                    var b = this, a = this, c = a.refAxis, e = a.currentRange, f = a.state.scrollbar, m = a.state.toolbar, h = c.chartArea, l = h.rootVisuals.contentStroke.getBbox(), k = a.options.toolbar, n = h.rootVisuals.contentOverlay, p = a.options.previewArea; a.actionIdleDefer = a.actionIdleDefer || new d.idleDefer; a.leftX = a.valToPx(c, e.min) - 1; a.rightX = a.valToPx(c, e.max) + 1; if (f) {
                        var q = d.dmUtils.snapPointToPanel(n, [0, l.y + l.height], 1); a.scrollBar = h.renderer.shape("rectangle", {
                            width: l.width, offsetX: q[0], offsetY: q[1], height: H.scrollbarHeight,
                            fill: d.colorLib.modifyColor(d.colorLib.colorMods.crysBright, p.scrollbar.color), stroke: k.outline
                        }).add(n)
                    } k = d.dmUtils.snapPointToPanel(n, [0, l.y], 0); a.leftCurtain = h.renderer.shape("rectangle", { width: a.leftX, offsetX: k[0], offsetY: k[1], height: l.height + (f ? H.scrollbarHeight : 0), fill: p.scrollbar.color, opacity: .7 }).add(n); k = d.dmUtils.snapPointToPanel(n, [a.rightX, l.y], 0); a.rightCurtain = h.renderer.shape("rectangle", {
                        width: l.width - a.rightX, offsetX: k[0], offsetY: k[1], height: l.height + (f ? H.scrollbarHeight : 0), fill: p.scrollbar.color,
                        opacity: .7
                    }).add(n); h = c.chartArea.rootPanel.getBbox(); n = a.chartAxesX.length; p = 2 * H.iconStrokeWidth; a.markerHeight = l.height; a.handleTopOffset = h.y - n - (m ? H.toolbarHeight : 0) + (l.height - H.handleControlSize) / 2 - p; a.scrollBarTopOffset = h.y - n - (m ? H.toolbarHeight : 0) + l.height - p; c.chart.uiItems.add(Xb(a.getLeftCurtainIconPosition())); c.chart.uiItems.add(Xb(a.getRightCurtainIconPosition())); a.scrollBarItems = c.chart.uiItems().items.splice(-2); m = function (c) { return function () { a.currentItemId = c; a.attachDoc() } }; a.scrollBarItems[0].rootPanel.el.on("vdown",
                        m(0)); a.scrollBarItems[1].rootPanel.el.on("vdown", m(1)); a.scrollBarItems[0].rootPanel.el.on("vup", function () { return a.vupHandler() }); a.scrollBarItems[1].rootPanel.el.on("vup", function () { return a.vupHandler() }); c.chartArea.rootPanel.el.on("vup", function () { return a.vupHandler() }); c.chartArea.rootPanel.el.on("vdown", function (a) {
                            var c = b.getNavigatorAreaBbox(); a.clientX - c.left < b.leftX || a.clientX - c.left > b.rightX ? (b.currentItemId = 2, b.updateNavigatorFast(a, e)) : (b.currentItemId = 3, b.clientXOffset = a.clientX -
                                (b.rightX + b.leftX) / 2); b.attachDoc()
                        }); c.chartArea.rootPanel.el.on("vmove", function (c) { return a.vMoveHandler(c) }); f && (c.chart.uiItems.add({ type: "button", style: "cursor:ew-resize;", position: "inside " + a.getScrollbarIconPosition(), boxVisible: !1, margin: 0, icon: { d: "M 0 0 V 8 M 4 0 V 8 M 8 0 V 8", size: H.scrollbarControlSize, fill: "#f2f2f2", stroke: "#999999", strokeWidth: H.iconStrokeWidth } }), a.scrollbarControlIcon = a.refAxis.chart.uiItems(-1), a.scrollbarControlIcon.rootPanel.el.on("vdown", m(2)), a.scrollbarControlIcon.rootPanel.el.on("vup",
                            function () { return a.vupHandler() }))
                }; e.prototype.vMoveHandler = function (b) { void 0 !== this.currentItemId && this.updateNavigatorFast(b, this.currentRange) }; e.prototype.vupHandler = function () { this.actionCaUpdate(); this.actionIdleDefer.clearAll(); this.currentItemId = void 0; this.detachDoc() }; e.prototype.actionCaUpdate = function () { var b = d.jsLib.isUndefined(this.currentItemId), a = this.currentRange.min, c = this.currentRange.max, e = a > c; this.clientXOffset = 0; !b && this.setRange({ min: e ? c : a, max: e ? a : c }) }; e.prototype.docVMoveHandler =
                    function (b) { this.vMoveHandler(b.eventArgs) && b.eventArgs.preventDefault() }; e.prototype.addToolbarItems = function () {
                        var b = this, a = b.refRange, c = [], e = b.getFormattedRange(b.currentRange); c.push(Yb(e.min, function (c) { c = b.getRangeFromString(c); !d.jsLib.isNaN(c) && c < b.currentRange.max && b.setRange({ min: Math.max(c, a.min), max: b.currentRange.max }) })); c.push({ position: "tltl", label: "-", height: H.toolbarItemsHeight, boxVisible: !1, margin: [-H.toolbarHeight + H.itemMargin, 0, 0, H.itemMargin] }); c.push(Yb(e.max, function (c) {
                            c =
                            b.getRangeFromString(c); !d.jsLib.isNaN(c) && c > b.currentRange.min && b.setRange({ min: b.currentRange.min, max: Math.min(c, a.max) })
                        })); e = d.jsLib.evalPath(b.options, "toolbar.quickZoomIntervals"); e = b.getToolbarButtonHandlers(e); d.jsLib.each(e, function (d) {
                            c.push({
                                position: "trtr", label: { text: d.name, autoWrap: "default" }, height: H.toolbarItemsHeight, margin: [-H.toolbarHeight + H.itemMargin, H.itemMargin, 0, 0], events_click: function () {
                                    if (d.range) { var c = b.currentRange; b.setRange({ min: Math.max(c.max - d.range, a.min), max: c.max }) } else b.setRange({
                                        min: a.min,
                                        max: a.max
                                    })
                                }
                            })
                        }); b.chart.uiItems.add(c); e = b.chartAxesX[0].chartArea; var f = e.rootVisuals.contentStroke.getBbox(), m = b.options.toolbar, h = e.rootVisuals.contentOverlay, l = d.dmUtils.snapPointToPanel(h, [f.x, f.y], 1); b.toolbarBackground = e.renderer.shape("rectangle", { width: f.width, offsetX: l[0], offsetY: l[1], height: H.toolbarHeight, margin: [-H.toolbarHeight, 0, 0], fill: m.fill, stroke: m.outline }).add(h); b.rangeBarItems = b.chart.uiItems().items.splice(-(H.toolbarButtonsNumber + 4))
                    }; e.prototype.getFormattedRange = function (b) {
                        var a =
                            this.refAxis, c = a.formatter(), d = "time" === a.type, e = function (b) { return d ? c.formatDate(new Date(b), H.rangeFormat) : a.format(b) }; return { min: e(b.min), max: e(b.max) }
                    }; e.prototype.getRangeFromString = function (b) { return "time" === this.refAxis.type ? (new Date(b)).getTime() : parseFloat(b) }; e.prototype.getToolbarButtonHandlers = function (b) {
                        var a = this, c = a.refRange.range, e = []; if (b) b = b.split(","), d.jsLib.each(b, function (b) { b = b.split("="); var d = a.parseInterval(b[0], c); d && (b[1] && (d.name = b[1]), e.push(d)) }); else {
                            b = a.chartAxesX[0].unZoomedRange;
                            b = (new Date(b.max - b.min)).getTime(); var f = []; for (e.push({ name: "Max" }); f.length < H.toolbarButtonsNumber;) { var m = a.parseInterval(b /= 1.5, c), h = m.name; -1 < f.indexOf(h) || (e.unshift(m), f.push(h)) }
                        } return e
                    }; e.prototype.parseInterval = function (b, a) {
                        var c = "ms s m h d m y".split(" "), e = [1E3, 60, 60, 24, 30, 12]; if (d.jsLib.isString(b)) {
                            b = b.trim(); if ("Max" === b) return { name: b }; var f = b.match("[0-9]+"), m = b.match("[a-zA-Z]+"); if (f && m) {
                                var h = parseInt(f[0]) || 1; m = m[0]; f = 0; for (var l = e.length; f < l; f++) {
                                    if (c[f] === m && 100 > a / h) return {
                                        name: b,
                                        range: h
                                    }; h *= e[f]
                                } return
                            }
                        } else h = b; m = h; b = -1; h = 0; for (f = a = 1; 1 < m;)a *= f, f = e.shift(), b++, h = m, m /= f; a: { e = [[1, 10, 100], [1, 30], [1, 5, 30], [1, 12], [1, 7], [1, 3, 6], [1, 2, 5, 50]][b]; m = e[0]; f = Math.abs(h - m); l = 1; for (var k = e.length; l < k; l++) { m = e[l]; var n = Math.abs(h - m); if (n > f) { e = e[l - 1]; break a } else f = n } e = m } return { name: "" + e + c[b], range: a * e }
                    }; e.prototype.getNavigatorAreaBbox = function () { return this.refAxis.chartArea.rootPanel.el.el.getBoundingClientRect() }; e.prototype.updateNavigatorFast = function (b, a) {
                        a = this.getNavigatorAreaBbox();
                        var c = this.currentItemId, e = b.clientX, f = a.width - 0; if (0 === c) this.leftX = d.jsLib.clamp(e - a.left, 0, this.rightX); else if (1 === c) this.rightX = d.jsLib.clamp(e - a.left, this.leftX, f); else if (c || !b) b = 2 === c ? a.left : this.clientXOffset, a = this.rightX - this.leftX, this.leftX = e = d.jsLib.clamp(e - b - a / 2, 0, f - a), this.rightX = e + a; 1 !== c && this.updateLeftCurtain(); 0 !== c && this.updateRightCurtain(); this.state.scrollbar && this.updateScrollbarIcon()
                    }; e.prototype.updateLeftCurtain = function () {
                        var b = this.refAxis, a = b.linToVal(this.leftX);
                        this.leftCurtain.attr({ width: Math.ceil(this.leftX + 1) }); this.scrollBarItems[0].options({ position: "inside " + this.getLeftCurtainIconPosition() }); this.currentRange.min = Math.max(b.range.min, a)
                    }; e.prototype.updateRightCurtain = function () {
                        var b = this.refAxis, a = b.linToVal(this.rightX), c = b.chartArea.rootVisuals.contentOverlay, e = Math.ceil(this.rightX), f = d.dmUtils.snapPointToPanel(b.chartArea.rootVisuals.contentOverlay, [this.rightX, 0], 0); this.rightCurtain.attr({ width: Math.ceil(c.getBbox().width - e + 1), offsetX: f[0] });
                        this.scrollBarItems[1].options({ position: "inside " + this.getRightCurtainIconPosition() }); this.currentRange.max = Math.min(b.range.max, a)
                    }; e.prototype.updateScrollbarIcon = function () { this.state.scrollbar && this.scrollbarControlIcon.options({ position: "inside " + this.getScrollbarIconPosition(), visibility: this.scrollBarVisibility() }) }; return e
        }(), Qd = d.timeLib.GroupingFunctions, $a = d.timeLib.CalendarPattern, oa = { millisecond: 1, second: 1E3, minute: 6E4, hour: 36E5, day: 864E5, week: 6048E5, month: 24192E5, year: 314496E5, decade: 314496E6 },
        ab = oa.day, Zb = oa.hour, Rd = oa.minute, bb = function (d) { return d }, R = function (d) { return d.getMonth ? d : new Date(d) }, V = function (d) { return R(d).getTime() }, cb = { years: 12, decade: 11, year: 10, quarter: 9, month: 8, week: 7, dayofyear: 6.2, day: 6.1, weekday: 6, hour: 3, minuteofday: 2.1, minute: 2, secondofhour: 1.1, second: 1 }, $b = function (d) { return d.unit ? d.mod ? 0 : cb[d.unit] * (d.mul ? d.mul : 1) / (d.mod ? d.mod : 1) : cb[d] }, za = function (d) { return Sd[Math.floor(cb[d.unit || d])] }, Sd = [, "second", "minute", "hour", , , "day", "week", "month", "quarter", "year", "decade",
            "years"], ac = function (e) { return d.jsLib.isString(e) ? d.timeLib.intervalToSpan({ unit: za(e) }) : d.timeLib.intervalToSpan({ unit: za(e.unit), multiplier: e.mul || 1 }) }, Aa = {
                decade: { x: "month", y: "year", z: "month", v: "day", interval: "decade", format: { series: "year", point: "year,month", x: { unit: "month", toDate: function (d) { return new Date(2020, d - 1, 1) } }, y: { unit: "year", toDate: function (d) { return new Date(d, 0, 1) } } }, spans: { interval: 11 * oa.year } }, years: {
                    x: "month", y: "year", z: "month", v: "day", interval: "none", format: {
                        series: "year", point: "year,month",
                        x: { unit: "month", toDate: function (d) { return new Date(2020, d - 1, 1) } }, y: { unit: "year", toDate: function (d) { return new Date(d, 0, 1) } }
                    }
                }, year: { x: "week", y: "weekday", z: "day", v: "hour", interval: "year", format: { point: "day,month,year" }, defPattern: { month: "*" } }, quarter: { x: "week", y: "weekday", z: "day", v: "hour", interval: "quarter", defPattern: { month: "*" } }, month: { x: "weekday", y: "week", z: "day", v: "hour", interval: "month" }, week: { x: "hour", y: "weekday", z: "hour", v: "minute", interval: "week", format: { point: "weekday,hour" } }, week30min: {
                    x: {
                        unit: "minuteofday",
                        mul: 30, mod: 48
                    }, y: "weekday", z: "hour", v: "minute", interval: "week", format: { point: "weekday,hour,minute", x: { interval: 6, unit: "hour", toDate: function (d) { return (new Date(2020, 0, 1)).setMinutes(30 * d) } } }
                }, day: { x: "hour", y: "minute", z: "minute", v: "second", interval: "day" }, dayminutes: { x: "hour", y: "minute", z: "minute", v: "second", interval: "day", format: { series: "day,month,year", point: "hour,minute" } }, dayhours: {
                    x: { unit: "hour", mul: 1, mod: 6 }, y: { unit: "hour", mul: 6 }, z: "hour", v: "minute", interval: "day", format: {
                        x: "hidden", y: {
                            interval: 1,
                            unit: { hour: "numeric", minute: "2-digit" }, toDate: function (d) { return (new Date(2020, 0, 1)).setHours(6 * d) }
                        }, series: "day,month", point: "hour,minute"
                    }
                }, day30min: { x: { unit: "minuteofday", mul: 30, mod: 6 }, y: { unit: "hour", mul: 3 }, z: { unit: "minuteofday", mul: 30, mod: 6 }, v: "minute", interval: "day", format: { y: { interval: 1 }, series: "day,month", point: "hour,minute" } }, day15min: { x: { unit: "minuteofday", mul: 15, mod: 12 }, y: { unit: "hour", mul: 3 }, z: "minute", v: "second", interval: "day", format: { y: { interval: 1 }, series: "day,month,year", point: "hour,minute" } },
                day5min: { x: { unit: "minuteofday", mul: 5, mod: 12 }, y: { unit: "hour", mul: 1 }, z: { unit: "minuteofday", mul: 5, mod: 12 }, v: "minute", interval: "day", format: { y: { interval: 3 }, x: { unit: { minute: "2-digit" }, toDate: function (d) { return (new Date(2020, 0, 1)).setMinutes(5 * d) } }, series: "day,month", point: "hour,minute" } }, hour: { x: "hour", y: "second", z: "second", v: "millisecond", interval: "hour" }, hourseconds: { x: "hour", y: "second", z: "second", v: "millisecond", interval: "hour" }, hour30sec: {
                    x: { unit: "secondofhour", mul: 30, mod: 10 }, y: {
                        unit: "minuteofday",
                        mul: 5
                    }, z: "second", v: { unit: "millisecond", mul: 50 }, interval: "hour", format: { x: "hidden" }
                }, hour10sec: { x: { unit: "secondofhour", mul: 10, mod: 30 }, y: { unit: "minuteofday", mul: 5 }, z: "second", v: { unit: "millisecond", mul: 50 }, interval: "hour", format: { x: "hidden" } }, hourminutes: { x: { unit: "minute", mul: 1, mod: 10 }, y: { unit: "minuteofday", mul: 10 }, z: "minute", v: { unit: "second", mul: 10 }, interval: "hour", format: { x: "hidden" } }, minute: { x: "second", y: "millisecond", z: "millisecond", v: "millisecond", interval: "hour" }
            }, Td = ["day", "hour"], Vd = function (e,
                b, a, c) { var g = V(b) - V(e); e = function (a) { return { hour: "hourMinutes", day: "dayHours" }[a] || a }; b = ""; for (var f in oa) 1.3 * g >= oa[f] && (b = f); return a && (f = d.jsLib.filter(Ud, function (c) { return c.cell >= a && c.interval >= g }), f.length) ? (f = d.jsLib.sortBy(f, function (a) { return a.interval })[0], f.interval > 5 * g ? e(b) : e(f.name)) : e(b) }, Ud = function () {
                    var e = [], b = function (a) { return ac(d.jsLib.sortBy([a.x, a.y], function (a) { return $b(a) })[0]) }, a; for (a in Aa) {
                        var c = Aa[a]; e.push({
                            cell: d.jsLib.evalPath(c, "spans.cell") || b(c), interval: d.jsLib.evalPath(c,
                                "spans.interval") || ac(c.interval), name: a
                        })
                    } return d.jsLib.sortBy(e, function (a) { return a.cell })
                }(), Wd = function (e) { var b = [], a = {}, c = d.jsLib.evalPath; e = d.jsLib.map(e, function (a) { b.push(a.attributes); return d.jsLib.omit(a, ["attributes"]) }); e = d.jsLib.merge.apply(d.jsLib, C([{}], e)); d.jsLib.each(b, function (b) { var d, e; for (e in b) c(a, e + ".pop") && b[e].pop ? (d = a[e]).push.apply(d, C(b[e])) : a[e] = b[e].pop ? b[e].slice(0) : b[e] }); for (var g in a) a[g].pop && (a[g] = a[g].join("")); e.attributes = a; return e }, Xd = function (e, b) {
                    for (var a =
                        e.length, c, g, f, m = function (a) { return d.jsLib.def(a) && !d.jsLib.isNaN(a) }, h = function (c) { for (; c < a; c++)if (m(e[c])) return c; return -1 }, l = 0; l < a; l++)f = e[l], m(f) ? (c = f, g = l) : (f = h(l), d.jsLib.def(g) && -1 < f ? e[l] = d.mathLib.mapValue(c, e[f], g, f, l) : b && (e[l] = 0)); return e
                }, Qc = function () {
                    function e(b, a) { this.chart = b; this.chartOptions = a; this.userOptions = {}; this.currentOptions = {}; this.legendEntries = []; this.resetData().options(a.calendar || {}) } e.prototype.resetData = function () {
                        this.data = []; this.dateRange = []; this.dataInfo = {
                            subValsMin: Number.MAX_VALUE,
                            subValsMax: Number.MIN_VALUE
                        }; return this
                    }; e.prototype.hasData = function () { return this.data && this.data.length }; e.prototype.options = function (b, a) { a = this.optionsGetter(b); if ("NotGetter" !== a) return a; d.jsLib.merge(this.userOptions, b); this.setOptions(); return this }; e.prototype.optionsGetter = function (b) { var a = d.jsLib.getValType(b), c = this.currentOptions; return "undefined" === a ? c : "string" === a ? d.jsLib.evalPath(c, b.replace(/_/g, ".")) : "NotGetter" }; e.prototype.setOptions = function () {
                        var b = this.chart.ctManager, a =
                            this.currentOptions = d.jsLib.merge(this.defaultOptions(), this.userOptions), c = -1 < b.curCtDst().ct.explicit.indexOf("calendarType"); a.view = c ? b.settingVal("calendarType") : a.view || "auto"; this.fnSet = new Qd(a.weekStart); a.view && this.setView(a.view); a.culture = this.chart.currentOptions.defaultCultureName || a.culture; this.isHoriz = this.chart.ctManager.isHoriz(); return this
                    }; e.prototype.defaultOptions = function () {
                        return {
                            view: "auto", calculation: "sum", culture: "us-en", weekStart: 0, defaultEmptyPoint: {
                                mouseTracking: !1,
                                color: "#fff", outline: { color: "#c9c9c9" }, hatch: { style: "dark-upward-diagonal", color: "#f0f0f0" }, legendEntry: { name: "No Data", value: " ", sortOrder: 1E3, cursor: "default" }
                            }, defaultEdgePoint: { color: "#fdfdfd", label: { color: "#dfdfdf" } }
                        }
                    }; e.prototype.setRange = function (b, a) { this.range = [V(b), V(a)] }; e.prototype.setView = function (b) { var a = b.toLowerCase(), c = Aa[a]; -1 < Td.indexOf(b) || ("auto" === b ? this.groupingFns = this.groupings = this.view = d.undefVal : (this.view = a, this.setGroupings(c))) }; e.prototype.setAutoView = function (b) {
                        b =
                        Vd(b[0], b[1], this.dataInfo.minInterval, this.currentOptions.view); this.setView(b)
                    }; e.prototype.setGroupings = function (b) { var a = this.fnSet, c = b.x, e = b.y, f = b.z, m = b.v, h = b.interval; this.groupings = b; this.sortedGroupingNames = d.jsLib.sortBy([c, e], function (a) { return $b(a) }); var l = {}; l[b.interval] = "*"; this.calPatInterval = new $a(l); this.groupingFns = { x: a.fn(c), y: a.fn(e), z: a.fn(f), v: a.fn(m), interval: a.fn(h) }; this.formatters = { x: bb, y: bb, z: bb }; return this }; e.prototype.indexRawDataItem = function (b, a) {
                        b = V(b); var c = this.calPatInterval.isInside(b),
                            d = [this.groupingFns.x(b), this.groupingFns.y(b), b]; this.addDataAt(c, d[0], d[1], { x: b, y: a }); return d
                    }; e.prototype.setData = function (b) {
                        var a, c, e = this.currentOptions; this.rawData = b; this.resetData(); if (b) {
                            var f = function (a) { return !0 }; if (e.range) { var m = d.jsLib.map(e.range, V); f = function (a) { return d.rangeLib.isValInsideInc(m, a) } } e = []; var h = Number.MAX_VALUE, l = void 0, k = void 0, n = []; try {
                                for (var p = D(b), q = p.next(); !q.done; q = p.next()) {
                                    var r = q.value, t = V(r[0]); !d.jsLib.isNaN(t) && f(t) && (e.push(t), d.jsLib.def(l) && (k = t -
                                        l, h = k < h ? k : h), l = t, n.push(r))
                                }
                            } catch (y) { var u = { error: y } } finally { try { q && !q.done && (a = p.return) && a.call(p) } finally { if (u) throw u.error; } } this.dateRange = [R(qa(e, "min")), R(qa(e, "max"))]; this.dataInfo.minInterval = h; !this.view && this.setAutoView(this.dateRange); this.setViewRange(this.dateRange); try { for (var v = D(n), w = v.next(); !w.done; w = v.next())r = w.value, this.indexRawDataItem(r[0], r[1]) } catch (y) { var x = { error: y } } finally { try { w && !w.done && (c = v.return) && c.call(v) } finally { if (x) throw x.error; } }
                        } else e.range && this.setViewRange(e.range);
                        return this
                    }; e.prototype.setViewRange = function (b) { var a = this.fnSet, c = a.fn(this.groupings.interval)(b[0]); c = a.reverseFn(this.groupings.interval)(b[0], c); var d = a.fn(this.groupings.interval)(b[1]); b = a.reverseFn(this.groupings.interval)(b[1], d + 1); b = R(V(b) - 1); this.viewRange = [c, b]; this.calPatInterval.setRange(c, b); return this }; e.prototype.addDataAt = function (b, a, c, e) { var g = this.data; d.jsLib.def(g[b]) || (g[b] = []); g = g[b]; d.jsLib.def(g[a]) ? d.jsLib.def(g[a][c]) || (g[a][c] = []) : (g[a] = [], g[a][c] = []); g[a][c].push(e) };
                    e.prototype.getDataAt = function (b, a, c, e) {
                        var g = this.currentOptions, m = g.calculation, h = g.interpolateSubvalues; if (b = this.data[b]) {
                            a = b[a] ? b[a][c] : void 0; if (d.jsLib.def(a) && !a.grouped) {
                                var l = this.groupingFns.v, k = 0, n = [], p = []; e = [l(e[0]), l(e[1])]; for (c = e[0]; c < e[1] + 1; c++)n[c] = []; d.jsLib.each(a, function (a) { var c = l(a.x); d.jsLib.def(p[c]) ? p[c].push(a.y) : (p[c] = [a.y], k++); n[c].push(a.y) }); var q = []; d.jsLib.each(p, function (a, c) { d.jsLib.def(a) && (a = qa(a, m), !d.jsLib.isNaN(a) && q.push(a)) }); a.grouped = d.jsLib.map(n, function (a) {
                                    return qa(a,
                                        m, h || "sum" !== m ? NaN : 0)
                                }); a.groupCount = k; h && (a.grouped = Xd(a.grouped, "sum" === m)); a.calc = qa(q, m)
                            } return a
                        }
                    }; e.prototype.preGetPoints = function () {
                        var b = this, a = [], c = []; d.jsLib.each(b.chart.userOptions.series, function (c) { return a.push.apply(a, C(d.jsLib.map(c.points, function (a) { return c.defaultPoint ? d.jsLib.merge({}, a, c.defaultPoint || {}) : a }))) }); d.jsLib.each(a, function (a) {
                            var e = a.date, g = d.jsLib.getValType(e); "object" !== g ? c.push([e.pop ? d.jsLib.map(e, R) : R(e), a]) : c.push([new $a("object" === g ? d.jsLib.expandOptionsProperties(e) :
                                { date: e }, b), a])
                        }); return c
                    }; e.prototype.getPoints = function (b, a) {
                        var c = this, e = b || c.range, f = c.formatters; b = c.calPatInterval.isInside(e[0]); var m = [], h = c.hasData(), l = function (a, b, e, g, k, l, n) {
                            var p = c.dataInfo, q = p.pointSubValsMax, r = p.subValsMin, t = p.subValsMax, u = Math.min.apply(Math, C(g)), v = Math.max.apply(Math, C(g)); a = { name: f.pointName(l[0]), x: a, y: b, z: e, subvalue: { values: [g] }, attributes: { date: V(l[0]), endDate: V(l[1]), groupCount: k } }; d.jsLib.isNull(e) && !n && h && (d.jsLib.merge(a, c.currentOptions.defaultEmptyPoint),
                                (a.tooltip || a.events) && delete a.mouseTracking); n && d.jsLib.merge(a, d.jsLib.omit(n, ["x", "y"])); n && !d.jsLib.def(n.z) && !d.jsLib.def(n.color) && d.jsLib.isNull(e) ? a.color = "#ffffff" : n || h || (a.color = "#ffffff"); m.push(a); p.pointSubValsMax = g.length > q ? g.length : q; p.subValsMin = u < r ? u : r; p.subValsMax = v > t ? v : t
                        }, k = function (c) {
                            var b = new $a({ date: { range: c } }), e = d.jsLib.filter(a, function (a) { return a[0].pop ? d.rangeLib.intersect(c, a[0]) || a[0][1].getTime() === c[0].getTime() : a[0].isInside ? a[0].isInside(c[0]) : b.isInside(a[0]) });
                            return 1 < e.length ? (e = d.jsLib.map(e, function (a) { return d.jsLib.omit(a[1], ["date"]) }), Wd(e)) : e[0] && d.jsLib.omit(e[0][1], ["date"])
                        }; if (e) {
                            var n = function (a, c) { return function (b) { return e[1] - e[0] >= a ? [0, c] : b } }, p = { weekday: function (a) { return 7 > Math.ceil((e[1] - e[0]) / ab) && a[0] < a[1] ? a : [0, 6] }, hour: n(24 * Zb, 23), minute: n(Zb, 59), second: n(Rd, 59) }; n = !1; var q = [c.groupingFns.x(e[0]), c.groupingFns.x(e[1])], r = [c.groupingFns.y(e[0]), c.groupingFns.y(e[1])]; p[c.groupings.x] && (q = p[c.groupings.x](q)); p[c.groupings.y] && (r = p[c.groupings.y](r));
                            for (var t = function (a) { a = R(this.options("attributes.date")); d.rangeLib.isValInsideInc(c.dateRange, a) && this.chart.zoom(a) }, u = q[0]; u <= q[1]; u++)for (var v = r[0]; v <= r[1]; v++) { var w = c.xyToDate(u, v, e[0]); if (d.rangeLib.isValInsideInc(e, w[0])) if (p = c.getDataAt(b, u, v, w)) { var x = p.calc; l(u, v, p.calc, p.grouped, p.groupCount, w, k(w)); !d.jsLib.isNaN(x) && c.zVals.push(x) } else l(u, v, null, [], 0, w, k(w)), n = !0; else l(u, v, null, [], 0, w, d.jsLib.merge({ nativeClick: t }, c.currentOptions.defaultEdgePoint)) } c.hasEmptyPoints = n
                        } return m
                    };
                    e.prototype.getSeries = function () {
                        var b, a = this.currentOptions, c = this.preGetPoints(); this.zVals = []; this.dataInfo.pointSubValsMax = 0; this.setFormatting(); var e = this.formatters, f = this.calPatInterval.intervalRanges, m = []; a = a.initial ? R(a.initial) : d.undefVal; try {
                            for (var h = D(f), l = h.next(); !l.done; l = h.next()) {
                                var k = l.value; m.push({ name: e.seriesName(R(k[0])), visible: !1, attributes: { date: k[0], endDate: k[1], maxSubVals: this.dataInfo.pointSubValsMax }, points: this.getPoints(k, c) }); if (a && d.rangeLib.isValInsideInc(k, a)) var n =
                                    m[m.length - 1].visible = !0
                            }
                        } catch (q) { var p = { error: q } } finally { try { l && !l.done && (b = h.return) && b.call(h) } finally { if (p) throw p.error; } } a && n || (m[0].visible = !0, m[0].legendEntry = { initialCursor: "default" }); this.dataInfo.zValRange = [Math.min.apply(Math, C(this.zVals)), Math.max.apply(Math, C(this.zVals))]; return m
                    }; e.prototype.xyToDate = function (b, a, c) {
                        var e = this.sortedGroupingNames[1], f = this.sortedGroupingNames[0], m = this.groupings.x === e, h = m ? b : a; b = m ? a : b; e = this.fnSet.reverseFn(e); f = this.fnSet.reverseFn(f); c = V(d.jsLib.pick(c,
                            this.range ? this.range[0] : this.dateRange[0])); c = e(c, h); return [f(c, b), R(V(f(c, b + 1)) - 1)]
                    }; e.prototype.setFormatting = function () {
                        var b = this, a = b.currentOptions, c = b.groupings, e = d.jsLib.evalPath(c, "format.series"), f = d.jsLib.evalPath(c, "format.point"), m = b.options("seriesFormat"), h = b.options("pointFormat"), l = function (c) { var b = new d.formatting.Formatter(a.culture || "en-US", c); return function (a) { return b.formatDate(R(a), {}) } }, k = function (c) {
                            var b = new d.formatting.Formatter(a.culture || "en-US", c); return function (a) {
                                return b.formatDate(R(a),
                                    c)
                            }
                        }, n = function (a) { return "week" === a ? function (c) { return "Week " + b.fnSet.fn(a)(c) } : l(d.timeLib.unitToFormatOptions(a)) }, p = function (a) { return d.jsLib.merge.apply(d.jsLib, C(d.timeLib.unitListToFormatOptions(a.split(",")))) }; e = m ? k(m) : e ? l(p(e)) : n(c.interval); c = h ? k(h) : f ? l(p(f)) : n(c.z); b.formatters = { seriesName: e, pointName: c }
                    }; e.prototype.getAxisOptions = function () {
                        var b = this, a = b.currentOptions, c = b.groupings, e = a.weekStart, f = { x: za(c.x), y: za(c.y) }, m = function (c, b) {
                            var e = !d.jsLib.isString(c); return new d.formatting.Formatter(a.culture ||
                                "en-US", e ? c : d.timeLib.unitToFormatOptions(c, b))
                        }, h = m("hour"), l = m("minute", !0), k = function (a, c, d) { var e = m(c); return function (g) { return e.formatDate(d ? d(g) : b.fnSet.reverseFn(c)(a, g), {}) } }, n = {
                            year: {}, month: {}, week: function () {
                                for (var a = m("month"), c = b.fnSet.fn("week"), e = V(b.viewRange[0]), g = [], f = 0; 12 > f; f++) {
                                    var h = d.timeLib.addTimeInterval(e, d.jsLib.def(void 0) ? { unit: "month", multiplier: void 0 } : { unit: "month" }); h = V(h); var k = [c(R(e)), c(R(V(h) - 1))]; g.push({
                                        value: Math.floor((k[0] + k[1]) / 2), label: {
                                            text: a.formatDate(R(e),
                                                {})
                                        }
                                    }); e = h
                                } return { defaultTick: { enabled: !1, line: { length: 0 }, gridLine: { width: 0 } }, customTicks: g }
                            }(), weekday: function () { var a = m("weekday"), c = [], b = V("4/1/2018"); b += e * ab; for (var g = 0; 7 > g; g++)c.push(a.formatDate(R(b), {})), b += ab; return { defaultTick: { line: { length: 0 }, gridLine: { width: 0 } }, customTicks: d.jsLib.map(c, function (a, c) { return { value: c, label: { text: a } } }) } }(), hour: { scale: { interval: 3 }, defaultTick: { label: { text: function (a) { return h.formatDate(new Date(2020, 0, 1, a), {}) } } } }, minute: {
                                scale: { interval: 10 }, defaultTick: {
                                    label: {
                                        text: function (a) {
                                            return l.formatDate(new Date(2020,
                                                0, 1, 0, a), {})
                                        }
                                    }
                                }
                            }, hidden: { defaultTick: { enabled: !1 } }
                        }, p = function (a) {
                            var b = c[a], e = d.jsLib.evalPath(c, "format." + a), g = e || {}, h = d.jsLib.isString(g); if (e || !d.jsLib.isString(b) && !h) { var l = function (a) { return a }; if ("hidden" === g || b.mul && b.mod && !g.toDate) return n.hidden; !b.mul || b.mod || g.toDate || (l = function (a) { return a * b.mul }); var m = k(R("1/1/2020"), g.unit || f[a], g.toDate); a = { defaultTick: { label: { text: function (a) { return m(l(a)) } } } }; g.interval && d.jsLib.setPathVal(a, "scale.interval", g.interval); return a } return n[h ?
                                g : b]
                        }; return { x: p("x"), y: p("y") }
                    }; e.prototype.updateChart = function (b) {
                        var a = this, c = this.chart, e = this.currentOptions, f = this.isHoriz, m = !!b.data, h = !!e.range, l = !!d.jsLib.epa(c.userOptions, ["series", "length"]), k = this.dataInfo; b = b || c.currentOptions; c.dirty = !0; if (m || h || l) {
                            k = void 0; c.isRendered && (k = (k = c.series().find(function (a) { return a.isVisible })) && d.jsLib.evalPath(k.currentOptions, "attributes.date"), this.currentOptions.initial = k); var n = d.jsLib.evalPath(c, "data.val"); this.setData(n || b.data); k = this.dataInfo;
                            h || m || !l || (h = Tc(b)) && this.setViewRange(h); l = this.getSeries(); h = this.getAxisOptions(); b.series = l; n || b.data && b.data.length ? (k = k.zValRange, n = Math.abs, n = Math.max(n(k[0]), n(k[1])), k = Math.min.apply(Math, C(k)), b.palette = d.palettes.getPaletteConfig(b.palette, [k, n])) : b.palette || (b.palette = ["#ffffff"]); d.jsLib.merge(b, h); k = function () { return { alternateGridFill: "none", originTick: { enabled: !1 }, defaultTick: { gridLine: { width: 0 } }, line: { width: 0 } } }; n = { orientation: "top" }; l = { scale: { invert: !0 } }; c.typeContextOptions = {
                                axes: d.jsLib.merge(h,
                                    { x: d.jsLib.merge(f ? l : n, k()), y: d.jsLib.merge(f ? n : l, k()) }), legend: { defaultEntry: { value: e.calculation ? "%" + e.calculation : d.undefVal, style: { fontWeight: "bold" }, states: { hidden: { style: { fontWeight: "normal" } }, hover: { style: { fontWeight: "normal" } } }, events: { mouseOver: function (a) { return !1 } } } }, chartArea: { clipContent: !1 }, chart: {
                                        palette: b.palette, defaultSeries: {
                                            shape: { innerPadding: "1px" }, legendEntry: { visible: !0, value: m ? "%z" + this.currentOptions.calculation : " " }, defaultPoint: {
                                                legendEntry: { visible: !1 }, tooltip: Rc(this),
                                                label: { text: Sc(this), autoHide: !0, padding: 5 }
                                            }
                                        }
                                    }
                            }; c.isRendered && c.axes().each(function (c) { c.defaultContextOptions = d.jsLib.evalPath(a.chart, "typeContextOptions.axes." + c.prefix) || {}; c.ticks().remove(!1) }); e = void 0; b = c.userOptions.highlights = c.userOptions.highlights || []; b.length && (e = d.jsLib.find(b, function (a) { return a.isDefault })) && d.jsLib.removeArrItem(b, e); (e = Aa[this.view].defPattern) && b.unshift({ isDefault: !0, pattern: e, outline: {} }); ra(c, !1)
                        } else d.emitter.emit("error", "initCal", "calNoData", { container: c.getWrapper() })
                    };
                    e.prototype.syncLegendEntries = function (b) { var a, c = (a = this.legendEntries).length; if (this.hasEmptyPoints && this.hasData()) return c ? d.jsLib.each(a, function (a) { return a.setColumns() }) : (a.push(b = b.addEntry(new d.EntryWrapper(b.chart, this.currentOptions.defaultEmptyPoint))), b.setColumns(), this.legendEntries = a), a; c && a.shift().destroy() }; return e
                }(), Uc = function (e) {
                    function b(a, c, b) { void 0 === b && (b = []); c = e.call(this, a, c, b) || this; c.chart = a; return c } K(b, e); b.prototype.defaultOptions = function () {
                        return d.jsLib.merge({
                            outline: {
                                width: 1,
                                color: "#353535"
                            }, empty: { opacity: .3 }
                        }, this.chart.userOptions.defaultHighlight)
                    }; b.prototype.render = function (a, c) { this.chart.series().each(function (a) { a.isVisible && a.visualizer.renderPatternHighlights && a.visualizer.renderPatternHighlights(c) }); return this }; b.prototype.items = function () { var a = []; d.jsLib.each(this.itemSets, function (c) { return a.push.apply(a, C(c)) }); return new d.UpdatablesCollection(a) }; b.prototype.updateItemSet = function (a, c) { this.itemSets = this.itemSets || {}; this.itemSets[a] = c }; b.prototype.asEmpty =
                        function (a) { return d.jsLib.merge(a, this.currentOptions.empty) }; b.prototype.remove = function (a) { var c = this; a = this.chart; var b = a.userOptions, e = a.currentOptions, m = a._highlights.indexOf(this), h = function (a) { d.jsLib.remove(a.highlights, function (a) { return a.id === c.id }) }; h(b); h(e); a._highlights.splice(m, 1); this.ciManager.remove(this); this.render() }; b.prototype.setRootVisuals = function () { return this }; return b
                }(d.BaseChartItem), ka = Math.PI, Yd = {
                    radialGradient: {}, stops: [[0, "black", .4], [.1, "black", .4], [1, "black",
                        0]]
                }, Zd = d.jsLib.plainArray("start end transform animation fill stroke".split(" ")), ae = function (d) { function b() { return null !== d && d.apply(this, arguments) || this } K(b, d); b.prototype.applierType = function () { return $d }; b.prototype.bbox = function () { return this.attrApplier.bbox() }; b.prototype.hitTest = function (a, c) { return this.attrApplier.hitTest && this.attrApplier.hitTest(a, c) }; return b }(d.CompositeElement), $d = function (e) {
                    function b() { var a = null !== e && e.apply(this, arguments) || this; a._pathObjects = []; return a } K(b,
                        e); b.prototype.animAttrs = function () { return Zd }; b.prototype.registerPathObj = function (a, c) { a = d.pathLib.fromString(a); return this._pathObjects[c] = a }; b.prototype.getPathObj = function (a) { return this._pathObjects[a] }; b.prototype.clearPathObjList = function () { this._pathObjects = [] }; b.prototype.constructChildren = function (a) {
                            var c, b = this, e = d.jsLib.pick(a["stroke-width"], 1); b._cornerR = void 0; var m = []; b.clearPathObjList(); var h = d.colorLib.toHexOpacity(d.colorLib.simplify(a.fill)), l = function (a) {
                                a = d.jsLib.merge({},
                                    a); "gap" === a.caps.start && (a.caps.start = "flat"); "gap" === a.caps.end && (a.caps.end = "flat"); return a
                            }, k = function (a) { a.omit = ["key"]; m.push(a) }; if (a.r - a.innerR && "none" !== a.fill && 0 !== h.opacity) {
                                h = void 0; a.breaks && (h = b.applyBreaks(a), h = (null === (c = h) || void 0 === c ? 0 : c.length) ? h : void 0); var n = b.splitArcs(h || [a], ka / 4), p = d.jsLib.map(n, function (a) { return Ra(d.shapeLib.arc(a.cxy[0], a.cxy[1], a.r, a.r, a)) }), q = "solid" !== a.shading || a.fill.stops ? b.arcsToGradients(n, a) : []; c = n[0]; h = d.jsLib.last(n); c = c.inverted ? c.end : c.start;
                                var r = h.inverted ? h.start : h.end; h = r - c; var t = 0 > h; h = Math.abs(h) > 2 * ka - .8 * Ab(a); var u = b.shadowClip(a, { start: c, end: r, autoShadow: h, inverted: t }); d.jsLib.each(p, function (c, g) {
                                    if ((g === p.length - 1 || 1 === p.length) && u) if ("round" !== d.jsLib.evalPath(a, "caps.end")) { var f = Ha({ start: r, end: r + .08, r: a.r, innerR: a.innerR }, 0); k({ key: "sh" + g, fill: { linearGradient: t ? [f[2], f[3], f[0], f[1]] : f, stops: [[0, "black", .2], [.1, "black", .2], [1, "black", 0]] }, d: u }) } else f = N(d.trigLib.gpp(a.cxy, r, (a.r + a.innerR) / 2), 2), k({
                                        key: "shadow" + g, elType: "circle",
                                        cx: f[0], cy: f[1], r: (a.r - a.innerR) / 2 * 1.5, fill: Yd, clipPath: u
                                    }); f = "f" + g; var h = q[g] ? b.arcPathToGradient(n[g], c, q[g], f) : a.fill, m = n[g]; m = Ra(d.shapeLib.arc(m.cxy[0], m.cxy[1], m.r, m.r, l(m))); k({ key: f, d: m, fill: h, stroke: "none" }); a.stroke && k({ key: "s" + g, d: c, fill: "none", "stroke-width": e, stroke: a.stroke })
                                }); c = 1 === n.length ? !1 : t; b._outlinePath = Ra(d.shapeLib.arc(a.cxy[0], a.cxy[1], a.r, a.r, h ? { innerR: a.innerR, start: 0, end: 2 * ka } : { r: a.r, innerR: a.innerR, cxy: a.cxy, start: c ? a.end : a.start, end: c ? a.start : a.end, caps: a.caps }))
                            } b.bindConfig(m)
                        };
                    b.prototype.hitTest = function (a, c) { for (var b in this._pathObjects) if (this._pathObjects[b].hitTest && this._pathObjects[b].hitTest(a, c)) return !0 }; b.prototype.outlinePath = function () { return this._outlinePath }; b.prototype.bbox = function () { var a, c = []; for (a in this._pathObjects) c.push(this._pathObjects[a].bbox()); return d.bboxLib.bboxUnion(c) }; b.prototype.applyBreaks = function (a) {
                        var c = a.breaks, b = a.start, e = a.end, m = a.caps, h = a.r, l = a.innerR, k = a.cxy, n = Math.abs(e - b) / (2 * ka); a = Ab(a) / (2 * ka) + .01; a = d.jsLib.pick(c.gap,
                            a / n); var p = []; a = d.rangeLib.positionsToPadRanges(c.intervals, [0, 1], a); Wc(a) || (a = d.rangeLib.positionsToPadRanges(c.intervals, [0, 1], .01 / n), this._cornerR = h - l); c.invert || (a = d.rangeLib.invert(a, [0, 1])); d.jsLib.each(a, function (a) { var c = d.mathLib.mapValue(b, e, 0, 1, a[0]), g = d.mathLib.mapValue(b, e, 0, 1, a[1]); p.push({ r: h, innerR: l, cxy: k, start: c, end: g, caps: m, pos: a }) }); return p.length ? p : void 0
                    }; b.prototype.splitArcs = function (a, c) {
                        var b = []; d.jsLib.each(a, function (a) { return b.push.apply(b, C(Vc(a, c))) }); this._cornerR &&
                            this.applyMinCornerR(b); return b
                    }; b.prototype.applyMinCornerR = function (a) { var c = []; if (this._cornerR) { for (var b in a) { var e = a[b]; c.push(d.shapeLib.arcCornerR(e.r, e.innerR, e.start, e.end, this._cornerR).cornerR) } var m = Math.min.apply(Math, C(c)), h = function (a) { return "gap" === a ? "gap" : "round" === a ? "cornerR" : "flat" }; for (b in a) c = a[b], e = c.caps, c.cornerR = m, c.caps = { start: h(e.start), end: h(e.end) } } }; b.prototype.arcsToGradients = function (a, c) {
                        var b = Math.abs((c.end - c.start) / (2 * ka)), e = d.colorLib.toHexOpacity(d.colorLib.simplify(c.fill)).hex,
                        m = c.altColor || d.colorLib.toHexOpacity(d.colorLib.modifyColor(d.colorLib.colorMods.hueEffect, e)).hex, h = [0, b], l = function (a) { return d.colorLib.tween(e, m, 100 * d.mathLib.mapValue(h[0], h[1], 0, 1, a)) }, k; if (k = c.fill.stops) {
                            var n = d.jsLib.map(k, function (a) { return a[0] }); l = function (a) {
                                for (var c, b, e = 0, g = k.length; e < g; e++)if (e && (b = k[e], c = k[e - 1], a >= c[0] && a <= b[0])) return a = d.mathLib.mapValue(0, 1, c[0], b[0], a), d.colorLib.tween(d.colorLib.toHexOpacity(c[1]).hex, d.colorLib.toHexOpacity(b[1]).hex, 100 * a); c = k[k.length - 1];
                                if (a > c[0]) return c[1]
                            }
                        } c = function (a) { a = a.slice(0); var c = a[1] - a[0]; a[0] += .01 * c; a[1] -= .01 * c; c = a.slice(0); for (var b = 0, e = n.length; b < e; b++) { var g = n[b]; g > a[0] && g < a[1] && (b && g === n[b - 1] && (g += .001), c.push(g)) } return d.jsLib.sortBy(c) }; b = []; for (var p = 0, q = a.length; p < q; p++) { var r = a[p]; b[p] = r.colors = d.jsLib.map(k ? c(r.pos) : r.pos, function (a) { return l(a) }); b[p].push(d.trigLib.toDegrees(r.start + (r.end - r.start) / 2) + 90) } return b
                    }; b.prototype.arcPathToGradient = function (a, c, b, e) {
                        b = d.colorLib.parseJscFill(b); var g = (a.innerR /
                            a.r + 1.8) / 3; c = this.registerPathObj(c, e); c = Ha(a, 0, { widthFactor: g, pathObj: c }); b.linearGradient = a.inverted ? [c[2], c[3], c[0], c[1]] : c; return b
                    }; b.prototype.shadowClip = function (a, c) {
                        if (!1 !== a.shadow) {
                            var b = a.cxy, e = a.r, m = a.innerR, h = a.caps, l = c.end, k = c.inverted; if (c.autoShadow || a.shadow) return a = l + .08 * (k ? -1 : 1), c = N("round" === h.end ? ["insideround", "round"] : ["", ""], 2), h = c[0], c = c[1], l = N(k ? [a, l, c, h] : [l, a, h, c], 4), d.pathLib.fromString(d.shapeLib.arc(b[0], b[1], e, e, {
                                r: e, innerR: m, cxy: b, start: l[0], end: l[1], caps: {
                                    start: l[2],
                                    end: l[3]
                                }
                            }))
                        }
                    }; return b
                }(d.CompositeAttrApplier), Ta = { padding: 0, stroke: "#4b4b4b", none: "none", axisMarkerColor: "gray", markerRadius: 3, dataDelimiter: /[ ,]/, colorsDelimiter: /(?=[^\d.]),(?=[^\d.])/ }, ha = function () {
                    function e(b, a) { var c = this; this.currentOptions = { data: [] }; this.elements = []; this.defaults = Ta; this.getColor = function (a) { var b = c.currentOptions; return b.colors && b.colors[a] }; this.allColors = function () { return c.currentOptions.colors || [] }; this.renderer = b; this.palette = d.palettes.getPalette("default"); this.options(a) }
                    e.prototype.updateOptions = function (b) { d.jsLib.extend(this.currentOptions, this.normalizeOptions(b)) }; e.prototype.options = function (b, a) { this.updateOptions(b); b = this.currentOptions; var c = this.defaultSize(); b = { width: parseInt(b.width || b.size || c.width), height: parseInt(b.height || b.size || c.height) }; this.render(b, a) }; e.prototype.fixedSize = function () { return { width: void 0, height: void 0 } }; e.prototype.max = function (b) { return this.extremum(b, function (a, c) { return a > c }) }; e.prototype.min = function (b) {
                        return this.extremum(b,
                            function (a, c) { return a < c })
                    }; e.prototype.extremum = function (b, a) { for (var c = b[0], d = 1, e = b.length; d < e; d++) { var m = b[d]; !this.isEmptyValue(m) && a(m, c) && (c = m) } return c }; e.prototype.isEmptyValue = function (b) { return null === b || void 0 === b || b !== b }; e.prototype.parseData = function (b) { return Sa(b) }; e.prototype.normalizeOptions = function (b) {
                        var a = b.data, c = b.colors, e = b.axisMarker, f = b.snapToZero, m = b.antialias, h = b.size, l = b.rotate, k = b.radius; a && (a.length ? b.data = this.parseData(a) : d.jsLib.isNumber(a) && (b.data = [a])); c && d.jsLib.isString(c) &&
                            (b.colors = c.split(Ta.colorsDelimiter)); (a = b.padding) && d.jsLib.isString(a) ? b.padding = parseInt(a) : a && d.jsLib.isArray(a) && (b.padding = parseInt(a[0])); d.jsLib.def(e) && (d.jsLib.isString(e) ? b.axisMarker = Sa(e) : d.jsLib.isNumber(e) ? b.axisMarker = [e] : d.jsLib.isArray(e) && e.length && (b.axisMarker = e)); d.jsLib.def(f) && (b.snapToZero = "true" === f || !0 === f); d.jsLib.def(m) && (b.antialias = "true" === m || !0 === m); d.jsLib.def(l) && (b.rotate = parseFloat(l) || 0); d.jsLib.def(k) && (b.radius = parseFloat(k) || 0); d.jsLib.def(h) && d.jsLib.isString(h) &&
                                -1 < h.indexOf("x") && (e = h.split("x"), b.width = b.width || e[0], b.height = b.height || e[1], delete b.size); return b
                    }; e.prototype.primaryColor = function () { return this.getColor(0) || this.currentOptions.color || this.palette[0] }; e.prototype.stroke = function () { return this.currentOptions.stroke || this.defaults.stroke }; e.prototype.secondaryColor = function () { return this.getColor(1) || this.palette[1] }; e.prototype.axisMarkerColor = function () { return this.getColor(3) || this.defaults.axisMarkerColor }; e.prototype.addShading = function (b,
                        a) { switch (parseInt(a)) { case 1: var c = d.colorLib.cushionEffect(b, [0, .25]); break; case 2: c = d.colorLib.aquaEffect(b, !0); break; case 3: c = d.colorLib.roundedEffect(b, !0); break; case 4: c = d.colorLib.modifyFill("jumpButton", b); break; case 5: c = d.colorLib.modifyFill("titleBox", b) }return c || b }; e.prototype.padding = function () { var b = this.currentOptions.padding || this.defaults.padding; 0 < b && 1 > b && (b = Math.floor(b * Math.max(this.width, this.height))); return b }; e.prototype.defaultSize = function () { return { width: 80, height: 20 } }; e.prototype.render =
                            function (b, a, c) {
                                var e = this.currentOptions; this.gWrapper || (this.gWrapper = this.renderer.element("g"), e.tooltip && (this.renderer.element("title").attr({ text: e.tooltip }).add(this.gWrapper), this.hoverRect = this.renderer.element("rect").attr({ width: b.width, height: b.height, fill: "transparent", strokeWidth: 0 }).add(this.gWrapper))); e = e.rotate; var f = this.width !== b.width || this.height !== b.height, m = e !== this.angle; if (d.jsLib.def(e) && 0 !== e && (m || f)) {
                                    m = b.width; var h = b.height; m = d.bboxLib.rotatedAt([0, 0, m, h], [e, m / 2, h / 2]);
                                    this.rotatedWidth = m[2]; this.rotatedHeight = m[3]; this.gWrapper.attr({ rotate: [e, Math.round(b.width / 2), Math.round(b.height / 2)], translate: [-m[0], -m[1]] }); this.angle = e
                                } (f || a) && this.renderData(b, c)
                            }; e.prototype.getChartData = function (b, a) { return { elements: [] } }; e.prototype.getAxisMarkerElement = function (b, a, c, e) {
                                var f = this.currentOptions.axisMarker, g = f[0] || 0, h = f[1]; f = d.jsLib.def(h) && null !== h; g = Math.round((b - g) * e / (b - a)) + .5; b = f ? Math.round((b - h) * e / (b - a)) + .5 : g + 1; return this.renderer.path({
                                    d: "M 0.5 " + g + " L " + (Math.floor(c) +
                                        .5) + " " + g + " L " + (Math.floor(c) + .5) + " " + b + " L 0.5 " + b + " Z", strokeWidth: 0, stroke: this.defaults.none, opacity: f ? .6 : .9, fill: this.axisMarkerColor()
                                })
                            }; e.prototype.correctSize = function (b, a) { return 0 < b && 0 < a }; e.prototype.renderData = function (b, a) {
                                var c = this, e = b.width, f = b.height; if (c.correctSize(e, f)) {
                                    c.width = e; c.height = f; d.jsLib.each(c.elements, function (a) { return a.destroy() }); this.updateBackground(e, f); if (e = c.getChartData(e, f)) f = e.size, c.rotatedWidth && (f = f || {}, f = d.jsLib.extend(f, { width: c.rotatedWidth, height: c.rotatedHeight }),
                                        c.height = f.height, c.width = f.width), a && a(f), c.elements = e.elements, d.jsLib.each(c.elements, function (a) { return a.add(c.gWrapper) }); c.hoverRect && c.hoverRect.attr(b)
                                }
                            }; e.prototype.add = function (b) { this.gWrapper.add(b); return this }; e.prototype.getElement = function () { return this.gWrapper && this.gWrapper.el }; e.prototype.pixelCorrection = function (b) {
                                var a = this.currentOptions.rotate; a && a % 90 || (a ? (a = this.gWrapper.attr("transform").translate || [0, 0], a = N(d.snapPixels([a[0], a[1], 0, 0], 1, b), 2), b = a[0], a = a[1]) : (a = N(d.snapPixels([0,
                                    0, 0, 0], 1, b), 2), b = a[0], a = a[1]), this.gWrapper.attr({ translate: [b, a] }))
                            }; e.prototype.rectPath = function (b, a, c, e, f) { void 0 === f && (f = [0, 0, 0, 0]); return d.shapeLib.roundRectCorners(d.bboxLib.toPoints([b, a, c, e]), f) }; e.prototype.updateBackground = function (b, a) { var c = this.currentOptions; if (c.fill || c.outline) b = { d: "M .5 .5 l " + b + " 0 l 0 " + a + " l " + -b + " 0 Z", fill: c.fill }, this.background ? this.background.attr(b) : this.background = this.renderer.path(b).add(this.gWrapper) }; e.prototype.destroy = function () {
                                var b = this.gWrapper;
                                b = b && b.el && b.el.parentNode; d.jsLib.each(this.elements, function (a) { return a.destroy() }); this.gWrapper.destroy(); b && "svg" === b.tagName && b.parentNode.removeChild(b)
                            }; return e
                }(), bc = function (e) {
                    function b() { return null !== e && e.apply(this, arguments) || this } K(b, e); b.prototype.primaryColor = function () { return this.defaults.none }; b.prototype.stroke = function () { return this.getColor(0) || this.currentOptions.color || this.defaults.stroke }; b.prototype.complexPath = function (a, c, b) {
                        return [this.renderer.path({
                            d: a, strokeWidth: 1,
                            stroke: this.stroke(), fill: this.primaryColor()
                        })]
                    }; b.prototype.axisMarkerColor = function () { return this.getColor(3) || this.palette[0] }; b.prototype.getChartData = function (a, c) {
                        var b = this, e = this, m = e.currentOptions.data || [], h = m.length, l = []; if (!m || 2 > h) return { elements: l }; var k = this.currentOptions, n = parseFloat(k.max), p = parseFloat(k.min); k = k.axisMarker ? m.concat(k.axisMarker) : m; var q = d.jsLib.isNaN(n) ? e.max(k) : n, r = d.jsLib.isNaN(p) ? e.min(k) : p, t = a / (h - 1); n = e.allColors(); var u = n[1], v = n[2], w = q === r; 0 < q && 0 > r && (n = Math.round(q *
                            c / (q - r)), l.push(this.renderer.path({ d: "M 0 " + n + " L " + a + " " + n, strokeWidth: .3, stroke: this.axisMarkerColor(), opacity: .6, fill: this.defaults.none }))); var x = "", y = [], z = [], B; d.jsLib.each(m, function (d, f) {
                                if (e.isEmptyValue(d)) f === h - 1 && (x += "L " + a + " " + B + " "); else {
                                    var g = x ? "L" : "M", k = b.defaults.none, l = Math.floor(f * t) + .5, m = d < r ? r : d > q ? q : d; B = Math.round(w ? 0 === q ? c : c / 2 : (q - m) * c / (q - r)); x += g + " " + l + " " + B + " "; 0 === f && (y[0] = { x: l, y: B }) && u !== k && !0; f === h - 1 && (y[1] = { x: l, y: B }) && u !== k && !0; w || (d === q && (z[0] = { x: l, y: B }) && v !== k && !0, d ===
                                        r && (z[1] = { x: l, y: B }) && v !== k && !0)
                                }
                            }); m = this.complexPath(x, a, c); l.push(m[0]); m[1] && l.push(m[1]); (n = e.currentOptions.axisMarker) && n.length && l.push(e.getAxisMarkerElement(q, r, a, c)); var G = ""; n = function (d, f) { var g = b.defaults.markerRadius + 1, h = d.x; d = d.y; l.push(e.renderer.circle(h, d, b.defaults.markerRadius).attr({ fill: f })); G = G || "M -1 -1 l " + (a + 2) + " 0 l 0 " + (c + 2) + " l " + (-a - 2) + " 0 l 0 " + (-c - 2); G += "M " + (h - g) + ", " + d + " A " + g + "," + g + " 0 1,0 " + (h + g) + "," + d + " A " + g + "," + g + " 0 1,0 " + (h - g) + "," + d }; u && u !== this.defaults.none &&
                                (n(y[0], u), n(y[1], u)); v && v !== this.defaults.none && !w && (n(z[0], v), n(z[1], v)); G && m[0].attr({ clipPath: G }); G && m[1] && m[1].attr({ clipPath: G }); return { elements: l }
                    }; return b
                }(ha), be = function (e) {
                    function b() { return null !== e && e.apply(this, arguments) || this } K(b, e); b.prototype.primaryColor = function () { return this.getColor(0) || this.currentOptions.color || this.palette[0] }; b.prototype.complexPath = function (a, c, b) {
                        return [this.renderer.path({ d: a, strokeWidth: 1, stroke: this.primaryColor(), fill: this.defaults.none }), this.renderer.path({
                            d: a +
                                ("L " + (Math.floor(c) + .5) + " " + (Math.floor(b) + .5) + " L 0.5 " + (Math.floor(b) + .5) + " Z"), strokeWidth: 0, stroke: this.defaults.none, fill: d.colorLib.addOpacity(this.primaryColor(), .5)
                        })]
                    }; return b
                }(bc), cc = function (e) {
                    function b() { return null !== e && e.apply(this, arguments) || this } K(b, e); b.prototype.getColumns = function () { return 1 }; b.prototype.primaryColor = function () { var a = e.prototype.primaryColor.call(this), c = this.currentOptions.shading; c && (a = this.addShading(a, c)); return a }; b.prototype.getChartData = function (a, c) {
                        var b =
                            this.currentOptions, e = d.jsLib.pick(b.radius, 3), m = b.data, h = m ? m[0] : 0; m = m[1]; var l = d.jsLib.isNumber(m), k = parseFloat(b.max); b = parseFloat(b.min); if (d.jsLib.isNumber(h) && !d.jsLib.isNaN(h)) {
                                if (!d.jsLib.isNumber(k) || d.jsLib.isNaN(k)) { var n = l ? Math.max(h, m) : h; k = 0 > n && !l ? 0 : n + (1.33 - 1) * Math.abs(l ? h - m : n) } if (!d.jsLib.isNumber(b) || d.jsLib.isNaN(b)) n = l ? Math.min(h, m) : h, b = 0 < n && !l ? 0 : n - (1.33 - 1) * Math.abs(l ? h - m : n); if (!(k < b)) {
                                    h = h > k ? k : h < b ? b : h; l && (m = m > k ? k : m < b ? b : m); n = l ? Math.min(h, m) : 0; m = Math.round(a * ((l ? Math.max(h, m) : h) - b) /
                                        (k - b)); k = l ? Math.round(a * Math.abs(n - b) / (k - b)) : 0 <= b ? 0 : 0 >= k ? a : Math.round(a * Math.abs(b) / (k - b)); h = l || 0 < h ? this.primaryColor() : this.secondaryColor(); l = [this.renderer.path({ d: this.rectPath(.5, .5, a, c, [e, e, e, e]), stroke: this.defaults.none, fill: this.getColor(2) || "rgba(0,0,0,0.05)" })]; for (b = this.getColumns(); 5 > a / b && 1 < b;)--b; n = Math.ceil((a - 2 * (b - 1)) / b); for (var p = Math.max(k, m) + .5, q = Math.min(k, m) - .5, r = 0; q < p; q += n + 2, r++) {
                                            var t = q + n + 2 > p ? Math.round(p - q) : n, u = e && 0 === Math.min(k, m) && 0 === r, v = e && p > a - e && (0 === r && 1 === b || q + n > a -
                                                e); u = [u ? e : 0, v ? e : 0, v ? e : 0, u ? e : 0]; 2 < t && l.push(this.renderer.path({ d: this.rectPath(q, .5, t, c, u), stroke: "none", strokeWidth: 0, fill: h }))
                                        } l.push(this.renderer.path({ d: this.rectPath(0, 0, a, c, [e, e, e, e]), strokeWidth: 1, stroke: this.getColor(3) || this.defaults.none, fill: this.defaults.none })); return { elements: l }
                                }
                            }
                    }; return b
                }(ha), ce = function (e) {
                    function b() { return null !== e && e.apply(this, arguments) || this } K(b, e); b.prototype.primaryColor = function () {
                        var a = this.getColor(0) || this.currentOptions.color || this.defaults.stroke,
                        b = this.currentOptions.shading; b && (a = this.addShading(a, b)); return a
                    }; b.prototype.getChartData = function (a, b) {
                        var c = this.currentOptions.data || [], e = parseFloat(this.currentOptions.max), m = parseFloat(this.currentOptions.min), h = N(c), l = h[0], k = h[1]; h = h.slice(2); var n = this.currentOptions.color; if (ca(l) && ca(k) && (ca(e) || (e = 0 > l ? 0 : 1.33 * this.max(c)), ca(m) || (m = 0 < l ? 0 : 1.33 * this.min(c)), !(e < m || e < l || e < k || m > k || m > l))) {
                            var p = Math.max(1, 7 * b / 24), q = Math.floor(Math.max(1, 3 * b / 24)); c = Math.floor((0 > l ? a : 0) + a * (l - Math.max(m, 0) - Math.min(e,
                                0)) / (e - m)); var r = Math.floor((0 > l ? a : 0) + a * (k - Math.max(m, 0) - Math.min(e, 0)) / (e - m)) + .5; k = Math.ceil(p) - .5; var t = Math.ceil(b - p) + .5, u = k - q; q = t + q; var v = 0 > l ? Math.floor(a) : 0; c = this.rectPath(0 > l ? c + .5 : v + .5, k, Math.abs(c - v), t - k, 20 > b ? [0, 0, 0, 0] : [0 === v ? 0 : 1, 0 === v ? 1 : 0, 0 === v ? 1 : 0, 0 === v ? 0 : 1]); p = Math.min(p - 1, d.jsLib.pick(this.currentOptions.radius, d.jsLib.clamp(Math.floor(b / 10), 2, 5))); k = Math.ceil(Math.min(5, Math.max(1, b / 20))); r = "M " + r + " " + u + " L " + r + " " + q; u = [this.renderer.path({
                                    d: this.rectPath(.5, .5, Math.floor(a), Math.floor(b),
                                        [p, p, p, p]), stroke: this.defaults.none, fill: this.getColor(h.length + 2) || "rgba(0,0,0,0.05)"
                                })]; q = 1 < h.length && h[0] > h[1]; t = 1 < h.length && ca(h[0]) && ca(h[1]) && h[0] < h[1] || !h[1] && 0 < h[0]; t = [t ? p : 0, t ? 0 : p, t ? 0 : p, t ? p : 0]; n = n || "#666666"; v = (1 - d.colorLib.brightness(n)) / (h.length + 1); for (var w = h.length - 1; 0 <= w; w--) {
                                    var x = h[w]; if (ca(x)) {
                                        var y = this.getColor(w + 2) || d.colorLib.changeBrightness(n, (w + 1) * v); if (!(x < m || x > e)) {
                                            var z = (0 > l ? Math.floor(a) : 0) + .5; x = Math.floor((0 > l ? a : 0) + a * (x - Math.max(m, 0)) / (e - m)) + .5; q && (z = x, x = Math.floor(a) +
                                                .5); u.push(this.renderer.path({ d: this.rectPath(Math.min(x, z), .5, Math.abs(x - z), b, t), stroke: "none", fill: y }))
                                        }
                                    }
                                } u = u.concat([this.renderer.path({ d: c, strokeWidth: 0, stroke: this.defaults.none, fill: this.primaryColor() }), this.renderer.path({ d: r, stroke: this.getColor(1) || "#262626", fill: this.defaults.none, "stroke-width": 2 * k, "stroke-linecap": "round" }), this.renderer.path({ d: this.rectPath(0, 0, Math.floor(a), Math.floor(b), [p, p, p, p]), strokeWidth: 1, stroke: this.getColor(h.length + 3) || this.defaults.none, fill: this.defaults.none })]);
                            return { elements: u }
                        }
                    }; return b
                }(ha), de = function (e) {
                    function b() { return null !== e && e.apply(this, arguments) || this } K(b, e); b.prototype.secondaryColor = function () { return this.getColor(1) || "red" }; b.prototype.axisMarkerColor = function () { return this.getColor(2) || this.defaults.axisMarkerColor }; b.prototype.normalizeOptions = function (a) { var b = a.columnWidth; b && d.jsLib.isString(b) && (a.columnWidth = parseInt(b)); return e.prototype.normalizeOptions.call(this, a) }; b.prototype.getChartData = function (a, b) {
                        var c = this, e = this,
                        m = e.currentOptions, h = m.data || []; if (2 > h.length) return { elements: [] }; var l = [], k = 1 * (h.length + 1), n = parseFloat(m.max), p = parseFloat(m.min), q = m.axisMarker ? h.concat(m.axisMarker) : h, r = d.jsLib.isNaN(n) ? e.max(q) : n, t = d.jsLib.isNaN(p) ? Math.min(e.min(q), 0) : p, u = e.primaryColor(), v = e.secondaryColor(), w = Math.ceil(b * (r === t ? 1 : r / (r - t))) - .5; n = m.columnWidth || (a - k) / h.length; var x = m.antialias ? n : Math.floor(n); k = Math.round((a - (m.antialias ? a : k + x * h.length)) / 2); var y = (m.columnWidth ? 0 : k) + 1 + .5; (m = e.currentOptions.axisMarker) && m.length &&
                            l.push(e.getAxisMarkerElement(r, t, a, b)); var z = 4 > x ? void 0 : [1, 1, 0, 0], B = 4 > x ? void 0 : [0, 0, 1, 1]; d.jsLib.each(h, function (a) { if (!e.isEmptyValue(a)) { var d = Math.floor(r === t ? 0 : b * a / (r - t)) || 1; l.push(e.renderer.path({ d: c.rectPath(y, 0 > d ? w : w - d, x, Math.abs(d), 0 > d ? B : z), strokeWidth: 0, fill: 0 <= a ? u : v })) } y += 1 + x }); return { elements: l }
                    }; return b
                }(ha), ee = function (d) { function b() { return null !== d && d.apply(this, arguments) || this } K(b, d); b.prototype.getColumns = function () { return 10 }; return b }(cc), fe = function (e) {
                    function b() {
                        return null !==
                            e && e.apply(this, arguments) || this
                    } K(b, e); b.prototype.defaultSize = function () { return { width: 30, height: 30 } }; b.prototype.addShading = function (a, b) {
                        switch (parseInt(b)) {
                            case 1: var c = { linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 }, stops: [[0, "#fff", .66], [.4, "#fff", 0], [.6, "#fff", 0], [1, "#fff", .66]] }; break; case 2: c = { radialGradient: { cx: .5, cy: .5, r: .5 }, stops: [[0, "#fff", 0], [.8, "#fff", .2], [1, "#fff", .8]] }; break; case 3: c = { linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 }, stops: [[0, "#000", .33], [.4, "#000", 0], [.6, "#000", 0], [1, "#000", .33]] }; break;
                            case 4: c = { radialGradient: { cx: .5, cy: .5, r: .5 }, stops: [[0, "#000", 0], [1, "#000", .25]] }
                        }return c || a
                    }; b.prototype.getChartData = function (a, b) {
                        var c = this, e = this, m = e.currentOptions, h = m.data || [], l = h.length; if (1 > l) return { elements: [] }; var k = m.color, n = "black" === k ? 0 : l, p = m.colors && m.colors.slice(1) || (k ? d.jsLib.slice(d.colorLib.colorToPalette(k, { lightness: 1 }, l + n, 0), n) : e.palette), q = a / 2, r = b / 2, t = Math.min(a, b) / 2, u = d.jsLib.sum(d.jsLib.map(h, Math.abs)); a = m.shading; var v = [], w = 0, x = 0, y = Math.PI / 90; d.jsLib.each(h, function (a,
                            b) { a = Math.abs(a); 0 < a && (a = 2 * Math.PI * a / u, w += a, 1 < l ? v.push(e.renderer.path({ d: "M " + q + ", " + r + " \n\t\t\t\t\t\t\tL " + (q + t * Math.sin(w)) + ", " + (r - t * Math.cos(w)) + "\n\t\t\t\t\t\t\tA " + t + "," + t + " 0 " + (a > Math.PI ? 1 : 0) + " 0 " + (q + t * Math.sin(x)) + ", " + (r - t * Math.cos(x)) + " \n\t\t\t\t\t\t\tL " + q + ", " + r, strokeWidth: .5, stroke: e.getColor(0) || c.defaults.none, fill: p[b] })) : v.push(e.renderer.circle(q, r, t).attr({ strokeWidth: .5, stroke: e.getColor(0) || c.defaults.none, fill: p[b] })), x = y > w ? w : w - y) }); a && (h = Math.ceil(t), v.push(e.renderer.path({
                                d: "M " +
                                    (q - h) + ", " + r + "\n\t\t\t\tA " + h + "," + h + " 0 1,0 " + (q + h) + "," + r + "\n\t\t\t\tA " + h + "," + h + " 0 1,0 " + (q - h) + "," + r, strokeWidth: 0, stroke: this.defaults.none, fill: e.addShading("transparent", a)
                            }))); return { elements: v }
                    }; return b
                }(ha), ge = function (e) {
                    function b() { return null !== e && e.apply(this, arguments) || this } K(b, e); b.prototype.render = function (a, b) {
                        var c = this.currentOptions, d = c.cellSize, m = c.padding || this.defaults.padding, h = c.data.length, l = c.cells; l || (l = this.autoGrid(h)); c.cells = l; d && l && (0 < m && 1 > m ? (c.width = d[0] * l[0] / (1 -
                            m * (l[0] + 1)), c.height = d[1] * l[1] + (l[1] + 1) * m * c.width) : (m = 1 < m ? m : 1, c.width = d[0] * l[0] + (l[0] + 1) * m, c.height = d[1] * l[1] + (l[1] + 1) * m)); e.prototype.render.call(this, a, b)
                    }; b.prototype.fixedSize = function () { var a = this.currentOptions; return a.cells && a.cellSize ? { width: a.width, height: a.height } : e.prototype.fixedSize.call(this) }; b.prototype.autoGrid = function (a) { var b = Math.ceil(Math.sqrt(a)), d = Math.floor(Math.sqrt(a)); for (b * d < a && b++; 1.618 > (b + 1) / d && ((b + 1) * d - a < b / 2 || (b + 1) * (d - 1) > a);)b++, (d - 1) * b >= a && d--; return [b, d] }; b.prototype.normalizeXValue =
                        function (a, b, e) { var c = a[b]; c && d.jsLib.isString(c) && (c = d.jsLib.map(c.split("x"), function (a) { return e(a) }), ca(c[0]) && ca(c[1]) ? a[b] = c : ca(c[0]) ? a[b] = [c[0], c[0]] : delete a[b]) }; b.prototype.normalizeOptions = function (a) { var b = a.colorsNumber, g = a.padding; g && d.jsLib.isString(g) && (a.padding = parseFloat(g)); b && d.jsLib.isString(b) && (a.colorsNumber = parseInt(b)); this.normalizeXValue(a, "cells", parseInt); this.normalizeXValue(a, "cellSize", parseFloat); return e.prototype.normalizeOptions.call(this, a) }; b.prototype.getChartData =
                            function (a, b) {
                                var c = this.currentOptions, e = this.currentOptions.data || [], m = c.cells, h = c.cellSize, l = c.colors || [], k = l && 3 === l.length; if (!e.length) return { elements: [] }; var n = m[1]; m = m[0]; var p = this.padding() || 1, q = h ? h[0] : (a - p * (m + 1)) / m, r = h ? h[1] : (b - p * (n + 1)) / n; h = c.antialias ? q : Math.floor(q); q = c.antialias ? r : Math.floor(r); var t = parseFloat(this.currentOptions.max), u = parseFloat(this.currentOptions.min); r = this.max(e); var v = this.min(e); t = d.jsLib.isNaN(t) ? r : t; u = d.jsLib.isNaN(u) ? v : u; var w = Math.max(Math.max(t, -v), 0), x =
                                    Math.max(u, 0), y = Math.min(0, t), z = Math.min(0, Math.min(u, -r)); if (c.snapToZero || r === v) y = x = 0; c = function (a) { return 0 <= a ? d.colorLib.tween(k ? l[1] : "white", k ? l[2] : "#4285f4", 100 * (a - x) / (w - x || 1)) : d.colorLib.tween(k ? l[1] : "white", k ? l[0] : "#fe4c14", 100 * (a - y) / (z - y || 1)) }; r = []; a = Math.round((a - (h * m + p * (m + 1))) / 2); v = .5 + p + Math.round((b - (q * n + p * (n + 1))) / 2); for (t = u = 0; t < n; t++) {
                                        b = .5 + p + a; for (var B = 0; B < m; B++) {
                                            var C = e[u]; this.isEmptyValue(C) || r.push(this.renderer.path({
                                                d: this.rectPath(b, v, h, q, [1.5, 1.5, 1.5, 1.5]), strokeWidth: 0, stroke: this.defaults.none,
                                                fill: d.jsLib.def(C) ? c(C) : this.defaults.none
                                            })); b += p + h; u++
                                        } v += p + q
                                    } return { elements: r }
                            }; return b
                }(ha), he = function (e) {
                    function b() { return null !== e && e.apply(this, arguments) || this } K(b, e); b.prototype.defaultSize = function () { return { width: 80, height: void 0 } }; b.prototype.stroke = function () { return this.getColor(0) || this.currentOptions.color || this.defaults.stroke }; b.prototype.parseData = function (a) { return d.jsLib.isString(a) ? a.split(this.defaults.dataDelimiter) : a }; b.prototype.normalizeOptions = function (a) {
                        var b = a.interval;
                        b && d.jsLib.isString(b) && (a.interval = parseFloat(b)); return e.prototype.normalizeOptions.call(this, a)
                    }; b.prototype.getChartData = function (a, b) {
                        var c = this, e = c.currentOptions, m = parseFloat(e.min || 0) || 0, h = parseFloat(e.max || 0) || 0, l = "bottom" === e.orientation, k = e.interval, n = e.data || [], p = !!n.length, q = d.jsLib.isNumber(k) && !p; if (n || h - m) {
                            if (!n.length) { var r = h - m; if (k && k < r) { r %= k; var t = m + r; n = [m]; for (r && n.push(t); t < h;)t += k, n.push(t) } else n = [m, ((h + m) / 2).toFixed(h % 1 ? Math.min(2, ("" + h % 1).length - 2) : 0), h] } var u = n.length -
                                1, v = e.value, w = function (a) { return v ? v.replace("%value", a) : "" + a }, x = b ? Math.ceil(Math.max(0, (b - 18) / 2)) : 0, y = Math.floor(a / u), z = 0, B = 0, C = [this.renderer.path({ d: "M 0 " + (l ? x + 3 : (b || 18) - x - 3) + " l 0 " + 1.5 * (l ? -1 : 1) + " a 1.5, 1.5 0 0 " + ((l ? 1 : 0) + " 1.5, " + (l ? -1.5 : 1.5)) + (" l " + (a - 3) + " 0 a 1.5, 1.5 0 0 ") + ((l ? 1 : 0) + " 1.5, " + (l ? 1.5 : -1.5)) + (" l 0 " + 1.5 * (l ? 1 : -1)), strokeWidth: 1, stroke: c.getColor(1) || c.stroke(), fill: this.defaults.none })]; k = function (f) {
                                    q && (z = d.mathLib.mapValue(0, a, m, h, n[f])); 0 < f && f < u && C.push(A.renderer.path({
                                        d: "M " +
                                            z + " " + (l ? x : (b || 18) - x - 3) + " l 0 3", strokeWidth: 1, stroke: c.getColor(1) || c.stroke(), fill: A.defaults.none
                                    })); var g = w("" + n[f]), k = { fontFamily: "tahoma, geneva, sans-serif", fontSize: 12, fontWeight: "normal", fontStyle: "normal" }, r = d.textLib.measureText(g, k, {}), t = z - r * (f === u ? 1 : 0 === f ? 0 : .5), v = B > t && f !== u; if (B > t && f === u) { var D = p || 1 === u ? .3 : 0; C.slice(C.length - 2).forEach(function (a) { return a.attr({ opacity: D }) }) } k.text = g; k.fill = c.stroke(); k.x = t; k.y = (l ? 3 : 0) + x + 14 - 2; v ? k.opacity = .3 : k.zIndex = 1; e.rotate && 1 === Math.abs(e.rotate) /
                                        90 % 2 && (k.rotate = .1); v && !p && 1 !== u || C.push(A.renderer.element("text", k)); z += y; B = v ? B : t + r
                                }; var A = this; for (r = 0; r <= u; r++)k(r); k = { elements: C }; b || (k.size = { height: 18 }); return k
                        }
                    }; b.prototype.correctSize = function (a, b) { return 0 < a }; return b
                }(ha), ie = function (e) {
                    function b() { return null !== e && e.apply(this, arguments) || this } K(b, e); b.prototype.addShading = function (a, b) { return e.prototype.addShading.call(this, a, "1" === b ? "5" : b) }; b.prototype.getChartData = function (a, b) {
                        var c = this, e = this, m = e.currentOptions, h = m.data || [], l =
                            h.length, k = d.jsLib.pick(m.radius, 3); if (2 > l) return { elements: [] }; var n = m.color, p = "black" === n ? 0 : l, q = m.colors && m.colors.slice(1) || (n ? d.jsLib.slice(d.colorLib.colorToPalette(n, { lightness: 1 }, l + p, 0), p) : e.palette), r = m.shading, t = d.jsLib.sum(d.jsLib.map(h, Math.abs)), u = [], v = .5; d.jsLib.each(h, function (d, f) {
                                d = Math.abs(d); 0 < d && (d = Math.round(a * d / t), u.push(e.renderer.path({
                                    d: c.rectPath(v, .5, Math.round((f === h.length - 1 ? a : v + d) - v), b, [0 === f ? k : 0, f === h.length - 1 ? k : 0, f === h.length - 1 ? k : 0, 0 === f ? k : 0]), strokeWidth: 0, stroke: c.defaults.none,
                                    fill: r ? c.addShading(q[f], r) : q[f]
                                })), v += d)
                            }); u.push(this.renderer.path({ d: this.rectPath(0, 0, a, b, [k, k, k, k]), strokeWidth: 1, stroke: this.getColor(0) || this.defaults.none, fill: this.defaults.none })); return { elements: u }
                    }; return b
                }(ha), Ba = { sparkline: bc, arealine: be, bar: cc, bullet: ce, column: de, progress: ee, pie: fe, heatmap: ge, scale: he, barfull: ie }, je = function (e) {
                    function b(a, b) {
                        var c = this, f = b.data; c = function () { return f && f.length && (1 === Sa(f).length ? Ba.bar : Ba.sparkline) || Ba.sparkline }; if (b.type) {
                            var m = void 0; return (m =
                                "chart" === b.type ? c() : Ba[b.type.toLowerCase()] || c()) && new m(a, d.jsLib.omit(b, ["type"]))
                        } return c = e.call(this, a, b) || this
                    } K(b, e); return b
                }(ha), ad = function () {
                    function e(b, a) { this.currentOptions = {}; this.renderer = b; this.options(a) } e.prototype.options = function (b, a) { var c = this.currentOptions, e = b.size; d.jsLib.def(e) && d.jsLib.isString(e) && -1 < e.indexOf("x") && (e = e.split("x"), b.width = b.width || e[0], b.height = b.height || e[1], delete b.size); d.jsLib.extend(c, b); this.nanoChart && this.nanoChart.updateOptions(b); this.render(a) };
                    e.prototype.render = function (b) {
                        var a = this, c = a.currentOptions, d = function (b) { a.skipSetSize = !0; b && b.height && a.rootPanel && a.rootPanel.attr({ height: b.height }); b && b.width && a.rootPanel && a.rootPanel.attr({ width: b.width }) }; if (a.rootPanel) a.nanoChart.render(a.getRootSize(), b, d); else {
                            a.nanoChart = new je(a.renderer.renderer, c); var e = a.nanoChart.defaultSize(), m = a.nanoChart.fixedSize(); a.rootPanel = a.renderer.panel({
                                width: c.width || c.size || m.width || e.width, height: c.height || c.size || m.height || e.height, margin: c.margin,
                                xAlignment: c.align || "left", yAlignment: c.verticalAlign || "top"
                            }); a.nanoChart.render(a.getRootSize(), b, d); a.nanoChart.add(a.rootPanel)
                        }
                    }; e.prototype.add = function (b) { var a = this, c = this.rootPanel; c.add(b); c.on("setSize", function () { !0 !== a.skipSetSize && a.nanoChart.render(a.getRootSize()); a.skipSetSize = !1 }); c.on("pixelCorrection", function () { a.nanoChart.pixelCorrection(c) }); this.nanoChart.pixelCorrection(c); return c }; e.prototype.getRootSize = function () { var b = this.rootPanel; return { width: b.width.px, height: b.height.px } };
                    e.prototype.destroy = function () { this.nanoChart.destroy(); this.rootPanel.destroy() }; return e
                }(), $c = "sparkline arealine bar bullet column progress pie heatmap scale chart barfull".split(" "); (function () { d.registerTag("arcShape", function (d, b) { return d.createElement(ae, "g", b) }); Yc() })(); d.moduleLoader.registerModule("modules/types") && (d.registerSeriesType("annotation", Cd), d.registerPanes(Hd), d.registerSeriesType("treemap", Id), d.registerSeriesType("funnel", Za), d.registerSeriesType("cone", Za), d.registerSeriesType("pyramid",
                    Za), d.registerSeriesType("heatmap", Tb), d.registerSeriesType("calendar", Nd), d.registerSeriesType("pie", Od), d.registerSeriesType("venn", Pd), d.chartOptionsAppliers.navigator = Mc, Oc(d.chartOptionsAppliers, d.chartOptionsModifiers), Zc(), d.chartInitializers.types = bd)
})(JSC.internal._modules.types.export);
