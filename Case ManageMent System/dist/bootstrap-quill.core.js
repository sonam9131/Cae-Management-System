!function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.Quill = e() : t.Quill = e()
}(window, function() {
    return function(t) {
        var e = {};
        function r(n) {
            if (e[n])
                return e[n].exports;
            var i = e[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return t[n].call(i.exports, i, i.exports, r),
            i.l = !0,
            i.exports
        }
        return r.m = t,
        r.c = e,
        r.d = function(t, e, n) {
            r.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: n
            })
        }
        ,
        r.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }),
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }
        ,
        r.t = function(t, e) {
            if (1 & e && (t = r(t)),
            8 & e)
                return t;
            if (4 & e && "object" == typeof t && t && t.__esModule)
                return t;
            var n = Object.create(null);
            if (r.r(n),
            Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }),
            2 & e && "string" != typeof t)
                for (var i in t)
                    r.d(n, i, function(e) {
                        return t[e]
                    }
                    .bind(null, i));
            return n
        }
        ,
        r.n = function(t) {
            var e = t && t.__esModule ? function() {
                return t.default
            }
            : function() {
                return t
            }
            ;
            return r.d(e, "a", e),
            e
        }
        ,
        r.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }
        ,
        r.p = "",
        r(r.s = 82)
    }([function(t, e, r) {
        "use strict";
        r.r(e);
        var n, i = class {
            constructor() {
                this.head = this.tail = null,
                this.length = 0
            }
            append(...t) {
                this.insertBefore(t[0], null),
                t.length > 1 && this.append.apply(this, t.slice(1))
            }
            at(t) {
                let e, r = this.iterator();
                for (; (e = r()) && t > 0; )
                    t -= 1;
                return e
            }
            contains(t) {
                let e, r = this.iterator();
                for (; e = r(); )
                    if (e === t)
                        return !0;
                return !1
            }
            indexOf(t) {
                let e, r = this.iterator(), n = 0;
                for (; e = r(); ) {
                    if (e === t)
                        return n;
                    n += 1
                }
                return -1
            }
            insertBefore(t, e) {
                t && (t.next = e,
                null != e ? (t.prev = e.prev,
                null != e.prev && (e.prev.next = t),
                e.prev = t,
                e === this.head && (this.head = t)) : null != this.tail ? (this.tail.next = t,
                t.prev = this.tail,
                this.tail = t) : (t.prev = null,
                this.head = this.tail = t),
                this.length += 1)
            }
            offset(t) {
                let e = 0
                  , r = this.head;
                for (; null != r; ) {
                    if (r === t)
                        return e;
                    e += r.length(),
                    r = r.next
                }
                return -1
            }
            remove(t) {
                this.contains(t) && (null != t.prev && (t.prev.next = t.next),
                null != t.next && (t.next.prev = t.prev),
                t === this.head && (this.head = t.next),
                t === this.tail && (this.tail = t.prev),
                this.length -= 1)
            }
            iterator(t=this.head) {
                return function() {
                    let e = t;
                    return null != t && (t = t.next),
                    e
                }
            }
            find(t, e=!1) {
                let r, n = this.iterator();
                for (; r = n(); ) {
                    let n = r.length();
                    if (t < n || e && t === n && (null == r.next || 0 !== r.next.length()))
                        return [r, t];
                    t -= n
                }
                return [null, 0]
            }
            forEach(t) {
                let e, r = this.iterator();
                for (; e = r(); )
                    t(e)
            }
            forEachAt(t, e, r) {
                if (e <= 0)
                    return;
                let n, [i,s] = this.find(t), o = t - s, l = this.iterator(i);
                for (; (n = l()) && o < t + e; ) {
                    let i = n.length();
                    t > o ? r(n, t - o, Math.min(e, o + i - t)) : r(n, 0, Math.min(i, t + e - o)),
                    o += i
                }
            }
            map(t) {
                return this.reduce(function(e, r) {
                    return e.push(t(r)),
                    e
                }, [])
            }
            reduce(t, e) {
                let r, n = this.iterator();
                for (; r = n(); )
                    e = t(e, r);
                return e
            }
        }
        ;
        class s extends Error {
            constructor(t) {
                super(t = "[Parchment] " + t),
                this.message = t,
                this.name = this.constructor.name
            }
        }
        !function(t) {
            t[t.TYPE = 3] = "TYPE",
            t[t.LEVEL = 12] = "LEVEL",
            t[t.ATTRIBUTE = 13] = "ATTRIBUTE",
            t[t.BLOT = 14] = "BLOT",
            t[t.INLINE = 7] = "INLINE",
            t[t.BLOCK = 11] = "BLOCK",
            t[t.BLOCK_BLOT = 10] = "BLOCK_BLOT",
            t[t.INLINE_BLOT = 6] = "INLINE_BLOT",
            t[t.BLOCK_ATTRIBUTE = 9] = "BLOCK_ATTRIBUTE",
            t[t.INLINE_ATTRIBUTE = 5] = "INLINE_ATTRIBUTE",
            t[t.ANY = 15] = "ANY"
        }(n || (n = {}));
        var o = n;
        class l {
            constructor() {
                this.attributes = {},
                this.classes = {},
                this.tags = {},
                this.types = {}
            }
            static find(t, e=!1) {
                return null == t ? null : this.blots.has(t) ? this.blots.get(t) || null : e ? this.find(t.parentNode, e) : null
            }
            create(t, e, r) {
                const n = this.query(e);
                if (null == n)
                    throw new s(`Unable to create ${e} blot`);
                const i = n
                  , o = new i(t,e instanceof Node || e.nodeType === Node.TEXT_NODE ? e : i.create(r),r);
                return l.blots.set(o.domNode, o),
                o
            }
            find(t, e=!1) {
                return l.find(t, e)
            }
            query(t, e=o.ANY) {
                let r;
                if ("string" == typeof t)
                    r = this.types[t] || this.attributes[t];
                else if (t instanceof Text || t.nodeType === Node.TEXT_NODE)
                    r = this.types.text;
                else if ("number" == typeof t)
                    t & o.LEVEL & o.BLOCK ? r = this.types.block : t & o.LEVEL & o.INLINE && (r = this.types.inline);
                else if (t instanceof HTMLElement) {
                    let e = (t.getAttribute("class") || "").split(/\s+/);
                    for (let t in e)
                        if (r = this.classes[e[t]])
                            break;
                    r = r || this.tags[t.tagName]
                }
                return null == r ? null : e & o.LEVEL & r.scope && e & o.TYPE & r.scope ? r : null
            }
            register(...t) {
                if (t.length > 1)
                    return t.map(t=>this.register(t));
                let e = t[0];
                if ("string" != typeof e.blotName && "string" != typeof e.attrName)
                    throw new s("Invalid definition");
                if ("abstract" === e.blotName)
                    throw new s("Cannot register abstract class");
                if (this.types[e.blotName || e.attrName] = e,
                "string" == typeof e.keyName)
                    this.attributes[e.keyName] = e;
                else if (null != e.className && (this.classes[e.className] = e),
                null != e.tagName) {
                    Array.isArray(e.tagName) ? e.tagName = e.tagName.map(function(t) {
                        return t.toUpperCase()
                    }) : e.tagName = e.tagName.toUpperCase(),
                    (Array.isArray(e.tagName) ? e.tagName : [e.tagName]).forEach(t=>{
                        null != this.tags[t] && null != e.className || (this.tags[t] = e)
                    }
                    )
                }
                return e
            }
        }
        l.blots = new WeakMap;
        class a {
            constructor(t, e) {
                this.scroll = t,
                this.domNode = e,
                l.blots.set(e, this),
                this.prev = null,
                this.next = null
            }
            get statics() {
                return this.constructor
            }
            static create(t) {
                if (null == this.tagName)
                    throw new s("Blot definition missing tagName");
                let e;
                return Array.isArray(this.tagName) ? ("string" == typeof t && (t = t.toUpperCase(),
                parseInt(t).toString() === t && (t = parseInt(t))),
                e = "number" == typeof t ? document.createElement(this.tagName[t - 1]) : this.tagName.indexOf(t) > -1 ? document.createElement(t) : document.createElement(this.tagName[0])) : e = document.createElement(this.tagName),
                this.className && e.classList.add(this.className),
                e
            }
            attach() {}
            clone() {
                let t = this.domNode.cloneNode(!1);
                return this.scroll.create(t)
            }
            detach() {
                null != this.parent && this.parent.removeChild(this),
                l.blots.delete(this.domNode)
            }
            deleteAt(t, e) {
                this.isolate(t, e).remove()
            }
            formatAt(t, e, r, n) {
                let i = this.isolate(t, e);
                if (null != this.scroll.query(r, o.BLOT) && n)
                    i.wrap(r, n);
                else if (null != this.scroll.query(r, o.ATTRIBUTE)) {
                    let t = this.scroll.create(this.statics.scope);
                    i.wrap(t),
                    t.format(r, n)
                }
            }
            insertAt(t, e, r) {
                let n = null == r ? this.scroll.create("text", e) : this.scroll.create(e, r)
                  , i = this.split(t);
                this.parent.insertBefore(n, i || void 0)
            }
            isolate(t, e) {
                let r = this.split(t);
                if (null == r)
                    throw new Error("Attempt to isolate at end");
                return r.split(e),
                r
            }
            length() {
                return 1
            }
            offset(t=this.parent) {
                return null == this.parent || this == t ? 0 : this.parent.children.offset(this) + this.parent.offset(t)
            }
            optimize(t) {
                !this.statics.requiredContainer || this.parent instanceof this.statics.requiredContainer || this.wrap(this.statics.requiredContainer.blotName)
            }
            remove() {
                null != this.domNode.parentNode && this.domNode.parentNode.removeChild(this.domNode),
                this.detach()
            }
            replaceWith(t, e) {
                const r = "string" == typeof t ? this.scroll.create(t, e) : t;
                return null != this.parent && (this.parent.insertBefore(r, this.next || void 0),
                this.remove()),
                r
            }
            split(t, e) {
                return 0 === t ? this : this.next
            }
            update(t, e) {}
            wrap(t, e) {
                let r = "string" == typeof t ? this.scroll.create(t, e) : t;
                return null != this.parent && this.parent.insertBefore(r, this.next || void 0),
                r.appendChild(this),
                r
            }
        }
        a.blotName = "abstract";
        var u = a;
        class h extends u {
            constructor(t, e) {
                super(t, e),
                this.uiNode = null,
                this.build()
            }
            appendChild(t) {
                this.insertBefore(t)
            }
            attach() {
                super.attach(),
                this.children.forEach(t=>{
                    t.attach()
                }
                )
            }
            attachUI(t) {
                null != this.uiNode && this.uiNode.remove(),
                this.uiNode = t,
                this.uiNode.setAttribute("contenteditable", "false"),
                this.domNode.insertBefore(this.uiNode, this.domNode.firstChild)
            }
            build() {
                this.children = new i,
                Array.from(this.domNode.childNodes).filter(t=>t !== this.uiNode).reverse().forEach(t=>{
                    try {
                        let e = c(t, this.scroll);
                        this.insertBefore(e, this.children.head || void 0)
                    } catch (t) {
                        if (t instanceof s)
                            return;
                        throw t
                    }
                }
                )
            }
            deleteAt(t, e) {
                if (0 === t && e === this.length())
                    return this.remove();
                this.children.forEachAt(t, e, function(t, e, r) {
                    t.deleteAt(e, r)
                })
            }
            descendant(t, e=0) {
                let[r,n] = this.children.find(e);
                return null == t.blotName && t(r) || null != t.blotName && r instanceof t ? [r, n] : r instanceof h ? r.descendant(t, n) : [null, -1]
            }
            descendants(t, e=0, r=Number.MAX_VALUE) {
                let n = []
                  , i = r;
                return this.children.forEachAt(e, r, function(e, r, s) {
                    (null == t.blotName && t(e) || null != t.blotName && e instanceof t) && n.push(e),
                    e instanceof h && (n = n.concat(e.descendants(t, r, i))),
                    i -= s
                }),
                n
            }
            detach() {
                this.children.forEach(function(t) {
                    t.detach()
                }),
                super.detach()
            }
            enforceAllowedChildren() {
                let t = !1;
                this.children.forEach(e=>{
                    if (t)
                        return;
                    this.statics.allowedChildren.some(t=>e instanceof t) || (e.statics.scope === o.BLOCK_BLOT ? (null != e.next && this.splitAfter(e),
                    null != e.prev && this.splitAfter(e.prev),
                    e.parent.unwrap(),
                    t = !0) : e instanceof h ? e.unwrap() : e.remove())
                }
                )
            }
            formatAt(t, e, r, n) {
                this.children.forEachAt(t, e, function(t, e, i) {
                    t.formatAt(e, i, r, n)
                })
            }
            insertAt(t, e, r) {
                let[n,i] = this.children.find(t);
                if (n)
                    n.insertAt(i, e, r);
                else {
                    let t = null == r ? this.scroll.create("text", e) : this.scroll.create(e, r);
                    this.appendChild(t)
                }
            }
            insertBefore(t, e) {
                null != t.parent && t.parent.children.remove(t);
                let r = null;
                this.children.insertBefore(t, e || null),
                null != e && (r = e.domNode),
                this.domNode.parentNode == t.domNode && this.domNode.nextSibling == r || this.domNode.insertBefore(t.domNode, r),
                t.parent = this,
                t.attach()
            }
            length() {
                return this.children.reduce(function(t, e) {
                    return t + e.length()
                }, 0)
            }
            moveChildren(t, e) {
                this.children.forEach(function(r) {
                    t.insertBefore(r, e)
                })
            }
            optimize(t) {
                if (super.optimize(t),
                this.enforceAllowedChildren(),
                null != this.uiNode && this.uiNode !== this.domNode.firstChild && this.domNode.insertBefore(this.uiNode, this.domNode.firstChild),
                0 === this.children.length)
                    if (null != this.statics.defaultChild) {
                        let t = this.scroll.create(this.statics.defaultChild.blotName);
                        this.appendChild(t)
                    } else
                        this.remove()
            }
            path(t, e=!1) {
                let[r,n] = this.children.find(t, e)
                  , i = [[this, t]];
                return r instanceof h ? i.concat(r.path(n, e)) : (null != r && i.push([r, n]),
                i)
            }
            removeChild(t) {
                this.children.remove(t)
            }
            replaceWith(t, e) {
                const r = "string" == typeof t ? this.scroll.create(t, e) : t;
                return r instanceof h && this.moveChildren(r),
                super.replaceWith(r)
            }
            split(t, e=!1) {
                if (!e) {
                    if (0 === t)
                        return this;
                    if (t === this.length())
                        return this.next
                }
                let r = this.clone();
                return this.parent && this.parent.insertBefore(r, this.next || void 0),
                this.children.forEachAt(t, this.length(), function(t, n, i) {
                    const s = t.split(n, e);
                    null != s && r.appendChild(s)
                }),
                r
            }
            splitAfter(t) {
                let e = this.clone();
                for (; null != t.next; )
                    e.appendChild(t.next);
                return this.parent && this.parent.insertBefore(e, this.next || void 0),
                e
            }
            unwrap() {
                this.parent && this.moveChildren(this.parent, this.next || void 0),
                this.remove()
            }
            update(t, e) {
                let r = []
                  , n = [];
                t.forEach(t=>{
                    t.target === this.domNode && "childList" === t.type && (r.push.apply(r, t.addedNodes),
                    n.push.apply(n, t.removedNodes))
                }
                ),
                n.forEach(t=>{
                    if (null != t.parentNode && "IFRAME" !== t.tagName && document.body.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY)
                        return;
                    let e = this.scroll.find(t);
                    null != e && (null != e.domNode.parentNode && e.domNode.parentNode !== this.domNode || e.detach())
                }
                ),
                r.filter(t=>t.parentNode === this.domNode || t === this.uiNode).sort(function(t, e) {
                    return t === e ? 0 : t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING ? 1 : -1
                }).forEach(t=>{
                    let e = null;
                    null != t.nextSibling && (e = this.scroll.find(t.nextSibling));
                    let r = c(t, this.scroll);
                    r.next == e && null != r.next || (null != r.parent && r.parent.removeChild(this),
                    this.insertBefore(r, e || void 0))
                }
                ),
                this.enforceAllowedChildren()
            }
        }
        function c(t, e) {
            let r = e.find(t);
            if (null == r)
                try {
                    r = e.create(t)
                } catch (n) {
                    r = e.create(o.INLINE),
                    Array.from(t.childNodes).forEach(function(t) {
                        r.domNode.appendChild(t)
                    }),
                    t.parentNode && t.parentNode.replaceChild(r.domNode, t),
                    r.attach()
                }
            return r
        }
        var f = h;
        class d extends f {
            checkMerge() {
                return null !== this.next && this.next.statics.blotName === this.statics.blotName
            }
            deleteAt(t, e) {
                super.deleteAt(t, e),
                this.enforceAllowedChildren()
            }
            formatAt(t, e, r, n) {
                super.formatAt(t, e, r, n),
                this.enforceAllowedChildren()
            }
            insertAt(t, e, r) {
                super.insertAt(t, e, r),
                this.enforceAllowedChildren()
            }
            optimize(t) {
                super.optimize(t),
                this.children.length > 0 && null != this.next && this.checkMerge() && (this.next.moveChildren(this),
                this.next.remove())
            }
        }
        d.blotName = "container",
        d.scope = o.BLOCK_BLOT;
        var p = d;
        class g extends u {
            static value(t) {
                return !0
            }
            index(t, e) {
                return this.domNode === t || this.domNode.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY ? Math.min(e, 1) : -1
            }
            position(t, e) {
                let r = Array.from(this.parent.domNode.childNodes).indexOf(this.domNode);
                return t > 0 && (r += 1),
                [this.parent.domNode, r]
            }
            value() {
                return {
                    [this.statics.blotName]: this.statics.value(this.domNode) || !0
                }
            }
        }
        g.scope = o.INLINE_BLOT;
        var m = g;
        class y {
            static keys(t) {
                return Array.from(t.attributes).map(function(t) {
                    return t.name
                })
            }
            constructor(t, e, r={}) {
                this.attrName = t,
                this.keyName = e;
                let n = o.TYPE & o.ATTRIBUTE;
                null != r.scope ? this.scope = r.scope & o.LEVEL | n : this.scope = o.ATTRIBUTE,
                null != r.whitelist && (this.whitelist = r.whitelist)
            }
            add(t, e) {
                return !!this.canAdd(t, e) && (t.setAttribute(this.keyName, e),
                !0)
            }
            canAdd(t, e) {
                return null == this.whitelist || ("string" == typeof e ? this.whitelist.indexOf(e.replace(/["']/g, "")) > -1 : this.whitelist.indexOf(e) > -1)
            }
            remove(t) {
                t.removeAttribute(this.keyName)
            }
            value(t) {
                let e = t.getAttribute(this.keyName);
                return this.canAdd(t, e) && e ? e : ""
            }
        }
        function b(t, e) {
            return (t.getAttribute("class") || "").split(/\s+/).filter(function(t) {
                return 0 === t.indexOf(`${e}-`)
            })
        }
        var v = class extends y {
            static keys(t) {
                return (t.getAttribute("class") || "").split(/\s+/).map(function(t) {
                    return t.split("-").slice(0, -1).join("-")
                })
            }
            add(t, e) {
                return !!this.canAdd(t, e) && (this.remove(t),
                t.classList.add(`${this.keyName}-${e}`),
                !0)
            }
            remove(t) {
                b(t, this.keyName).forEach(function(e) {
                    t.classList.remove(e)
                }),
                0 === t.classList.length && t.removeAttribute("class")
            }
            value(t) {
                let e = (b(t, this.keyName)[0] || "").slice(this.keyName.length + 1);
                return this.canAdd(t, e) ? e : ""
            }
        }
        ;
        function N(t) {
            let e = t.split("-")
              , r = e.slice(1).map(function(t) {
                return t[0].toUpperCase() + t.slice(1)
            }).join("");
            return e[0] + r
        }
        var E = class extends y {
            static keys(t) {
                return (t.getAttribute("style") || "").split(";").map(function(t) {
                    return t.split(":")[0].trim()
                })
            }
            add(t, e) {
                return !!this.canAdd(t, e) && (t.style[N(this.keyName)] = e,
                !0)
            }
            remove(t) {
                t.style[N(this.keyName)] = "",
                t.getAttribute("style") || t.removeAttribute("style")
            }
            value(t) {
                let e = t.style[N(this.keyName)];
                return this.canAdd(t, e) ? e : ""
            }
        }
        ;
        var x = class {
            constructor(t) {
                this.attributes = {},
                this.domNode = t,
                this.build()
            }
            attribute(t, e) {
                e ? t.add(this.domNode, e) && (null != t.value(this.domNode) ? this.attributes[t.attrName] = t : delete this.attributes[t.attrName]) : (t.remove(this.domNode),
                delete this.attributes[t.attrName])
            }
            build() {
                this.attributes = {};
                const t = l.find(this.domNode);
                if (null == t)
                    return;
                let e = y.keys(this.domNode)
                  , r = v.keys(this.domNode)
                  , n = E.keys(this.domNode);
                e.concat(r).concat(n).forEach(e=>{
                    let r = t.scroll.query(e, o.ATTRIBUTE);
                    r instanceof y && (this.attributes[r.attrName] = r)
                }
                )
            }
            copy(t) {
                Object.keys(this.attributes).forEach(e=>{
                    let r = this.attributes[e].value(this.domNode);
                    t.format(e, r)
                }
                )
            }
            move(t) {
                this.copy(t),
                Object.keys(this.attributes).forEach(t=>{
                    this.attributes[t].remove(this.domNode)
                }
                ),
                this.attributes = {}
            }
            values() {
                return Object.keys(this.attributes).reduce((t,e)=>(t[e] = this.attributes[e].value(this.domNode),
                t), {})
            }
        }
        ;
        class A extends f {
            constructor(t, e) {
                super(t, e),
                this.attributes = new x(this.domNode)
            }
            static formats(t, e) {
                const r = e.query(A.blotName);
                if (null == r || t.tagName !== r.tagName)
                    return "string" == typeof this.tagName || (Array.isArray(this.tagName) ? t.tagName.toLowerCase() : void 0)
            }
            format(t, e) {
                if (t !== this.statics.blotName || e) {
                    const r = this.scroll.query(t, o.INLINE);
                    if (null == r)
                        return;
                    r instanceof y ? this.attributes.attribute(r, e) : !e || t === this.statics.blotName && this.formats()[t] === e || this.replaceWith(t, e)
                } else
                    this.children.forEach(t=>{
                        t instanceof A || (t = t.wrap(A.blotName, !0)),
                        this.attributes.copy(t)
                    }
                    ),
                    this.unwrap()
            }
            formats() {
                let t = this.attributes.values()
                  , e = this.statics.formats(this.domNode, this.scroll);
                return null != e && (t[this.statics.blotName] = e),
                t
            }
            formatAt(t, e, r, n) {
                if (null != this.formats()[r] || this.scroll.query(r, o.ATTRIBUTE)) {
                    this.isolate(t, e).format(r, n)
                } else
                    super.formatAt(t, e, r, n)
            }
            optimize(t) {
                super.optimize(t);
                let e = this.formats();
                if (0 === Object.keys(e).length)
                    return this.unwrap();
                let r = this.next;
                r instanceof A && r.prev === this && function(t, e) {
                    if (Object.keys(t).length !== Object.keys(e).length)
                        return !1;
                    for (let r in t)
                        if (t[r] !== e[r])
                            return !1;
                    return !0
                }(e, r.formats()) && (r.moveChildren(this),
                r.remove())
            }
            replaceWith(t, e) {
                const r = super.replaceWith(t, e);
                return this.attributes.copy(r),
                r
            }
            update(t, e) {
                super.update(t, e),
                t.some(t=>t.target === this.domNode && "attributes" === t.type) && this.attributes.build()
            }
            wrap(t, e) {
                const r = super.wrap(t, e);
                return r instanceof A && this.attributes.move(r),
                r
            }
        }
        A.allowedChildren = [A, m],
        A.blotName = "inline",
        A.scope = o.INLINE_BLOT,
        A.tagName = "SPAN";
        var w = A;
        class T extends f {
            constructor(t, e) {
                super(t, e),
                this.attributes = new x(this.domNode)
            }
            static formats(t, e) {
                const r = e.query(T.blotName);
                if (null == r || t.tagName !== r.tagName)
                    return "string" == typeof this.tagName || (Array.isArray(this.tagName) ? t.tagName.toLowerCase() : void 0)
            }
            format(t, e) {
                const r = this.scroll.query(t, o.BLOCK);
                null != r && (r instanceof y ? this.attributes.attribute(r, e) : t !== this.statics.blotName || e ? !e || t === this.statics.blotName && this.formats()[t] === e || this.replaceWith(t, e) : this.replaceWith(T.blotName))
            }
            formats() {
                const t = this.attributes.values()
                  , e = this.statics.formats(this.domNode, this.scroll);
                return null != e && (t[this.statics.blotName] = e),
                t
            }
            formatAt(t, e, r, n) {
                null != this.scroll.query(r, o.BLOCK) ? this.format(r, n) : super.formatAt(t, e, r, n)
            }
            insertAt(t, e, r) {
                if (null == r || null != this.scroll.query(e, o.INLINE))
                    super.insertAt(t, e, r);
                else {
                    const n = this.split(t);
                    if (null == n)
                        throw new Error("Attempt to insertAt after block boundaries");
                    {
                        const t = this.scroll.create(e, r);
                        n.parent.insertBefore(t, n)
                    }
                }
            }
            replaceWith(t, e) {
                const r = super.replaceWith(t, e);
                return this.attributes.copy(r),
                r
            }
            update(t, e) {
                super.update(t, e),
                t.some(t=>t.target === this.domNode && "attributes" === t.type) && this.attributes.build()
            }
        }
        T.allowedChildren = [w, T, m],
        T.blotName = "block",
        T.scope = o.BLOCK_BLOT,
        T.tagName = "P";
        var L = T;
        const O = {
            attributes: !0,
            characterData: !0,
            characterDataOldValue: !0,
            childList: !0,
            subtree: !0
        }
          , S = 100;
        class k extends f {
            constructor(t, e) {
                super(null, e),
                this.registry = t,
                this.scroll = this,
                this.build(),
                this.observer = new MutationObserver(t=>{
                    this.update(t)
                }
                ),
                this.observer.observe(this.domNode, O),
                this.attach()
            }
            create(t, e) {
                return this.registry.create(this, t, e)
            }
            find(t, e=!1) {
                return this.registry.find(t, e)
            }
            query(t, e=o.ANY) {
                return this.registry.query(t, e)
            }
            register(...t) {
                return this.registry.register(...t)
            }
            build() {
                null != this.scroll && super.build()
            }
            detach() {
                super.detach(),
                this.observer.disconnect()
            }
            deleteAt(t, e) {
                this.update(),
                0 === t && e === this.length() ? this.children.forEach(function(t) {
                    t.remove()
                }) : super.deleteAt(t, e)
            }
            formatAt(t, e, r, n) {
                this.update(),
                super.formatAt(t, e, r, n)
            }
            insertAt(t, e, r) {
                this.update(),
                super.insertAt(t, e, r)
            }
            optimize(t=[], e={}) {
                super.optimize(e);
                const r = e.mutationsMap || new WeakMap;
                let n = Array.from(this.observer.takeRecords());
                for (; n.length > 0; )
                    t.push(n.pop());
                let i = (t,e=!0)=>{
                    null != t && t !== this && null != t.domNode.parentNode && (r.has(t.domNode) || r.set(t.domNode, []),
                    e && i(t.parent))
                }
                  , s = function(t) {
                    r.has(t.domNode) && (t instanceof f && t.children.forEach(s),
                    r.delete(t.domNode),
                    t.optimize(e))
                }
                  , o = t;
                for (let e = 0; o.length > 0; e += 1) {
                    if (e >= S)
                        throw new Error("[Parchment] Maximum optimize iterations reached");
                    for (o.forEach(t=>{
                        let e = this.find(t.target, !0);
                        null != e && (e.domNode === t.target && ("childList" === t.type ? (i(this.find(t.previousSibling, !1)),
                        Array.from(t.addedNodes).forEach(t=>{
                            const e = this.find(t, !1);
                            i(e, !1),
                            e instanceof f && e.children.forEach(function(t) {
                                i(t, !1)
                            })
                        }
                        )) : "attributes" === t.type && i(e.prev)),
                        i(e))
                    }
                    ),
                    this.children.forEach(s),
                    n = (o = Array.from(this.observer.takeRecords())).slice(); n.length > 0; )
                        t.push(n.pop())
                }
            }
            update(t, e={}) {
                t = t || this.observer.takeRecords();
                const r = new WeakMap;
                t.map(t=>{
                    let e = l.find(t.target, !0);
                    return null == e ? null : r.has(e.domNode) ? (r.get(e.domNode).push(t),
                    null) : (r.set(e.domNode, [t]),
                    e)
                }
                ).forEach(t=>{
                    null != t && t !== this && r.has(t.domNode) && t.update(r.get(t.domNode) || [], e)
                }
                ),
                e.mutationsMap = r,
                r.has(this.domNode) && super.update(r.get(this.domNode), e),
                this.optimize(t, e)
            }
        }
        k.blotName = "scroll",
        k.defaultChild = L,
        k.allowedChildren = [L, p],
        k.scope = o.BLOCK_BLOT,
        k.tagName = "DIV";
        var C = k;
        var R = class extends m {
            static formats(t, e) {}
            format(t, e) {
                super.formatAt(0, this.length(), t, e)
            }
            formatAt(t, e, r, n) {
                0 === t && e === this.length() ? this.format(r, n) : super.formatAt(t, e, r, n)
            }
            formats() {
                return this.statics.formats(this.domNode, this.scroll)
            }
        }
        ;
        class B extends m {
            constructor(t, e) {
                super(t, e),
                this.text = this.statics.value(this.domNode)
            }
            static create(t) {
                return document.createTextNode(t)
            }
            static value(t) {
                let e = t.data;
                return e.normalize && (e = e.normalize()),
                e
            }
            deleteAt(t, e) {
                this.domNode.data = this.text = this.text.slice(0, t) + this.text.slice(t + e)
            }
            index(t, e) {
                return this.domNode === t ? e : -1
            }
            insertAt(t, e, r) {
                null == r ? (this.text = this.text.slice(0, t) + e + this.text.slice(t),
                this.domNode.data = this.text) : super.insertAt(t, e, r)
            }
            length() {
                return this.text.length
            }
            optimize(t) {
                super.optimize(t),
                this.text = this.statics.value(this.domNode),
                0 === this.text.length ? this.remove() : this.next instanceof B && this.next.prev === this && (this.insertAt(this.length(), this.next.value()),
                this.next.remove())
            }
            position(t, e=!1) {
                return [this.domNode, t]
            }
            split(t, e=!1) {
                if (!e) {
                    if (0 === t)
                        return this;
                    if (t === this.length())
                        return this.next
                }
                let r = this.scroll.create(this.domNode.splitText(t));
                return this.parent.insertBefore(r, this.next || void 0),
                this.text = this.statics.value(this.domNode),
                r
            }
            update(t, e) {
                t.some(t=>"characterData" === t.type && t.target === this.domNode) && (this.text = this.statics.value(this.domNode))
            }
            value() {
                return this.text
            }
        }
        B.blotName = "text",
        B.scope = o.INLINE_BLOT;
        var _ = B;
        r.d(e, "ParentBlot", function() {
            return f
        }),
        r.d(e, "ContainerBlot", function() {
            return p
        }),
        r.d(e, "LeafBlot", function() {
            return m
        }),
        r.d(e, "EmbedBlot", function() {
            return R
        }),
        r.d(e, "ScrollBlot", function() {
            return C
        }),
        r.d(e, "BlockBlot", function() {
            return L
        }),
        r.d(e, "InlineBlot", function() {
            return w
        }),
        r.d(e, "TextBlot", function() {
            return _
        }),
        r.d(e, "Attributor", function() {
            return y
        }),
        r.d(e, "ClassAttributor", function() {
            return v
        }),
        r.d(e, "StyleAttributor", function() {
            return E
        }),
        r.d(e, "AttributorStore", function() {
            return x
        }),
        r.d(e, "Registry", function() {
            return l
        }),
        r.d(e, "Scope", function() {
            return o
        })
    }
    , function(t, e, r) {
        "use strict";
        var n = r(2)
          , i = r.n(n)
          , s = r(0)
          , o = r(5)
          , l = r.n(o)
          , a = r(13)
          , u = r.n(a)
          , h = r(16)
          , c = r.n(h)
          , f = r(18)
          , d = r.n(f)
          , p = r(17)
          , g = r(4)
          , m = r(7)
          , y = r(6);
        const b = /^[ -~]*$/;
        function v(t, e, r, n=!1) {
            if ("function" == typeof t.html)
                return t.html(e, r);
            if (t instanceof y.a)
                return t.value().slice(e, e + r);
            if (t.children) {
                if ("list-container" === t.statics.blotName) {
                    const n = [];
                    return t.children.forEachAt(e, r, (t,e,r)=>{
                        const i = t.formats();
                        n.push({
                            child: t,
                            offset: e,
                            length: r,
                            indent: i.indent || 0,
                            type: i.list
                        })
                    }
                    ),
                    function t(e, r, n) {
                        if (0 === e.length) {
                            const [e] = E(n.pop());
                            return r <= 0 ? `</li></${e}>` : `</li></${e}>${t([], r - 1, n)}`
                        }
                        const [{child: i, offset: s, length: o, indent: l, type: a},...u] = e
                          , [h,c] = E(a);
                        if (l > r)
                            return n.push(h),
                            `<${h}><li${c}>${v(i, s, o)}${t(u, l, n)}`;
                        if (l === r)
                            return `</li><li${c}>${v(i, s, o)}${t(u, l, n)}`;
                        if (l === r - 1) {
                            const [e] = E(n.pop());
                            return `</li></${e}></li><li${c}>${v(i, s, o)}${t(u, l, n)}`
                        }
                        const [f] = E(n.pop());
                        return `</li></${f}>${t(e, r - 1, n)}`
                    }(n, -1, [])
                }
                const i = [];
                if (t.children.forEachAt(e, r, (t,e,r)=>{
                    i.push(v(t, e, r))
                }
                ),
                n || "list" === t.statics.blotName)
                    return i.join("");
                const {outerHTML: s, innerHTML: o} = t.domNode
                  , [l,a] = s.split(`>${o}<`);
                return `${l}>${i.join("")}<${a}`
            }
            return t.domNode.outerHTML
        }
        function N(t, e) {
            return Object.keys(e).reduce((r,n)=>null == t[n] ? r : (e[n] === t[n] ? r[n] = e[n] : Array.isArray(e[n]) ? e[n].indexOf(t[n]) < 0 && (r[n] = e[n].concat([t[n]])) : r[n] = [e[n], t[n]],
            r), {})
        }
        function E(t) {
            const e = "ordered" === t ? "ol" : "ul";
            switch (t) {
            case "checked":
                return [e, ' data-list="checked"'];
            case "unchecked":
                return [e, ' data-list="unchecked"'];
            default:
                return [e, ""]
            }
        }
        var x = class {
            constructor(t) {
                this.scroll = t,
                this.delta = this.getDelta()
            }
            applyDelta(t) {
                let e = !1;
                this.scroll.update();
                let r = this.scroll.length();
                this.scroll.batchStart();
                const n = function(t) {
                    return t.reduce((t,e)=>{
                        if ("string" == typeof e.insert) {
                            const r = e.insert.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
                            return t.insert(r, e.attributes)
                        }
                        return t.push(e)
                    }
                    , new i.a)
                }(t);
                return n.reduce((t,n)=>{
                    const i = n.retain || n.delete || n.insert.length || 1;
                    let o = n.attributes || {};
                    if (null != n.insert) {
                        if ("string" == typeof n.insert) {
                            let i = n.insert;
                            i.endsWith("\n") && e && (e = !1,
                            i = i.slice(0, -1)),
                            t >= r && !i.endsWith("\n") && (e = !0),
                            this.scroll.insertAt(t, i);
                            const [a,u] = this.scroll.line(t);
                            let h = l()({}, Object(g.c)(a));
                            if (a instanceof g.d) {
                                const [t] = a.descendant(s.LeafBlot, u);
                                h = l()(h, Object(g.c)(t))
                            }
                            o = d.a.attributes.diff(h, o) || {}
                        } else if ("object" == typeof n.insert) {
                            const e = Object.keys(n.insert)[0];
                            if (null == e)
                                return t;
                            this.scroll.insertAt(t, e, n.insert[e])
                        }
                        r += i
                    }
                    return Object.keys(o).forEach(e=>{
                        this.scroll.formatAt(t, i, e, o[e])
                    }
                    ),
                    t + i
                }
                , 0),
                n.reduce((t,e)=>"number" == typeof e.delete ? (this.scroll.deleteAt(t, e.delete),
                t) : t + (e.retain || e.insert.length || 1), 0),
                this.scroll.batchEnd(),
                this.scroll.optimize(),
                this.update(n)
            }
            deleteText(t, e) {
                return this.scroll.deleteAt(t, e),
                this.update((new i.a).retain(t).delete(e))
            }
            formatLine(t, e, r={}) {
                this.scroll.update(),
                Object.keys(r).forEach(n=>{
                    this.scroll.lines(t, Math.max(e, 1)).forEach(t=>{
                        t.format(n, r[n])
                    }
                    )
                }
                ),
                this.scroll.optimize();
                const n = (new i.a).retain(t).retain(e, u()(r));
                return this.update(n)
            }
            formatText(t, e, r={}) {
                Object.keys(r).forEach(n=>{
                    this.scroll.formatAt(t, e, n, r[n])
                }
                );
                const n = (new i.a).retain(t).retain(e, u()(r));
                return this.update(n)
            }
            getContents(t, e) {
                return this.delta.slice(t, t + e)
            }
            getDelta() {
                return this.scroll.lines().reduce((t,e)=>t.concat(e.delta()), new i.a)
            }
            getFormat(t, e=0) {
                let r = []
                  , n = [];
                0 === e ? this.scroll.path(t).forEach(t=>{
                    const [e] = t;
                    e instanceof g.d ? r.push(e) : e instanceof s.LeafBlot && n.push(e)
                }
                ) : (r = this.scroll.lines(t, e),
                n = this.scroll.descendants(s.LeafBlot, t, e));
                const i = [r, n].map(t=>{
                    if (0 === t.length)
                        return {};
                    let e = Object(g.c)(t.shift());
                    for (; Object.keys(e).length > 0; ) {
                        const r = t.shift();
                        if (null == r)
                            return e;
                        e = N(Object(g.c)(r), e)
                    }
                    return e
                }
                );
                return l.a.apply(l.a, i)
            }
            getHTML(t, e) {
                const [r,n] = this.scroll.line(t);
                return r.length() >= n + e ? v(r, n, e, !0) : v(this.scroll, t, e, !0)
            }
            getText(t, e) {
                return this.getContents(t, e).filter(t=>"string" == typeof t.insert).map(t=>t.insert).join("")
            }
            insertEmbed(t, e, r) {
                return this.scroll.insertAt(t, e, r),
                this.update((new i.a).retain(t).insert({
                    [e]: r
                }))
            }
            insertText(t, e, r={}) {
                return e = e.replace(/\r\n/g, "\n").replace(/\r/g, "\n"),
                this.scroll.insertAt(t, e),
                Object.keys(r).forEach(n=>{
                    this.scroll.formatAt(t, e.length, n, r[n])
                }
                ),
                this.update((new i.a).retain(t).insert(e, u()(r)))
            }
            isBlank() {
                if (0 === this.scroll.children.length)
                    return !0;
                if (this.scroll.children.length > 1)
                    return !1;
                const t = this.scroll.children.head;
                return t.statics.blotName === g.d.blotName && !(t.children.length > 1) && t.children.head instanceof m.a
            }
            removeFormat(t, e) {
                const r = this.getText(t, e)
                  , [n,s] = this.scroll.line(t + e);
                let o = 0
                  , l = new i.a;
                null != n && (o = n.length() - s,
                l = n.delta().slice(s, s + o - 1).insert("\n"));
                const a = this.getContents(t, e + o).diff((new i.a).insert(r).concat(l))
                  , u = (new i.a).retain(t).concat(a);
                return this.applyDelta(u)
            }
            update(t, e=[], r) {
                const n = this.delta;
                if (1 === e.length && "characterData" === e[0].type && e[0].target.data.match(b) && this.scroll.find(e[0].target)) {
                    const s = this.scroll.find(e[0].target)
                      , o = Object(g.c)(s)
                      , l = s.offset(this.scroll)
                      , a = e[0].oldValue.replace(p.a.CONTENTS, "")
                      , u = (new i.a).insert(a)
                      , h = (new i.a).insert(s.value());
                    t = (new i.a).retain(l).concat(u.diff(h, r)).reduce((t,e)=>e.insert ? t.insert(e.insert, o) : t.push(e), new i.a),
                    this.delta = n.compose(t)
                } else
                    this.delta = this.getDelta(),
                    t && c()(n.compose(t), this.delta) || (t = n.diff(this.delta, r));
                return t
            }
        }
          , A = r(3)
          , w = r(8)
          , T = r(20)
          , L = r(22)
          , O = r(11)
          , S = r(24);
        r.d(e, "a", function() {
            return R
        });
        const k = Object(O.a)("quill")
          , C = new s.Registry;
        class R {
            static debug(t) {
                !0 === t && (t = "log"),
                O.a.level(t)
            }
            static find(t) {
                return L.a.get(t) || C.find(t)
            }
            static import(t) {
                return null == this.imports[t] && k.error(`Cannot import ${t}. Are you sure it was registered?`),
                this.imports[t]
            }
            static register(t, e, r=!1) {
                if ("string" != typeof t) {
                    const r = t.attrName || t.blotName;
                    "string" == typeof r ? this.register(`formats/${r}`, t, e) : Object.keys(t).forEach(r=>{
                        this.register(r, t[r], e)
                    }
                    )
                } else
                    null == this.imports[t] || r || k.warn(`Overwriting ${t} with`, e),
                    this.imports[t] = e,
                    (t.startsWith("blots/") || t.startsWith("formats/")) && "abstract" !== e.blotName && C.register(e),
                    "function" == typeof e.register && e.register(C)
            }
            constructor(t, e={}) {
                if (this.options = function(t, e) {
                    if ((e = l()(!0, {
                        container: t,
                        modules: {
                            clipboard: !0,
                            keyboard: !0,
                            history: !0,
                            uploader: !0
                        }
                    }, e)).theme && e.theme !== R.DEFAULTS.theme) {
                        if (e.theme = R.import(`themes/${e.theme}`),
                        null == e.theme)
                            throw new Error(`Invalid theme ${e.theme}. Did you register it?`)
                    } else
                        e.theme = S.a;
                    const r = l()(!0, {}, e.theme.DEFAULTS);
                    [r, e].forEach(t=>{
                        t.modules = t.modules || {},
                        Object.keys(t.modules).forEach(e=>{
                            !0 === t.modules[e] && (t.modules[e] = {})
                        }
                        )
                    }
                    );
                    const n = Object.keys(r.modules).concat(Object.keys(e.modules)).reduce((t,e)=>{
                        const r = R.import(`modules/${e}`);
                        return null == r ? k.error(`Cannot load ${e} module. Are you sure you registered it?`) : t[e] = r.DEFAULTS || {},
                        t
                    }
                    , {});
                    null != e.modules && e.modules.toolbar && e.modules.toolbar.constructor !== Object && (e.modules.toolbar = {
                        container: e.modules.toolbar
                    });
                    return e = l()(!0, {}, R.DEFAULTS, {
                        modules: n
                    }, r, e),
                    ["bounds", "container", "scrollingContainer"].forEach(t=>{
                        "string" == typeof e[t] && (e[t] = document.querySelector(e[t]))
                    }
                    ),
                    e.modules = Object.keys(e.modules).reduce((t,r)=>(e.modules[r] && (t[r] = e.modules[r]),
                    t), {}),
                    e
                }(t, e),
                this.container = this.options.container,
                null == this.container)
                    return k.error("Invalid Quill container", t);
                this.options.debug && R.debug(this.options.debug);
                const r = this.container.innerHTML.trim();
                this.container.classList.add("ql-container"),
                this.container.innerHTML = "",
                L.a.set(this.container, this),
                this.root = this.addContainer("ql-editor"),
                this.root.addEventListener("dragstart", t=>{
                    t.preventDefault()
                }
                ),
                this.root.classList.add("ql-blank"),
                this.root.setAttribute("data-gramm", !1),
                this.scrollingContainer = this.options.scrollingContainer || this.root,
                this.emitter = new A.a;
                const n = this.options.registry.query(s.ScrollBlot.blotName);
                this.scroll = new n(this.options.registry,this.root,{
                    emitter: this.emitter
                }),
                this.editor = new x(this.scroll),
                this.selection = new T.b(this.scroll,this.emitter),
                this.theme = new this.options.theme(this,this.options),
                this.keyboard = this.theme.addModule("keyboard"),
                this.clipboard = this.theme.addModule("clipboard"),
                this.history = this.theme.addModule("history"),
                this.uploader = this.theme.addModule("uploader"),
                this.theme.init(),
                this.emitter.on(A.a.events.EDITOR_CHANGE, t=>{
                    t === A.a.events.TEXT_CHANGE && this.root.classList.toggle("ql-blank", this.editor.isBlank())
                }
                ),
                this.emitter.on(A.a.events.SCROLL_UPDATE, (t,e)=>{
                    const r = this.selection.lastRange
                      , n = r && 0 === r.length ? r.index : void 0;
                    B.call(this, ()=>this.editor.update(null, e, n), t)
                }
                );
                const i = this.clipboard.convert({
                    html: `${r}<p><br></p>`,
                    text: "\n"
                });
                this.setContents(i),
                this.history.clear(),
                this.options.placeholder && this.root.setAttribute("data-placeholder", this.options.placeholder),
                this.options.readOnly && this.disable()
            }
            addContainer(t, e=null) {
                if ("string" == typeof t) {
                    const e = t;
                    (t = document.createElement("div")).classList.add(e)
                }
                return this.container.insertBefore(t, e),
                t
            }
            blur() {
                this.selection.setRange(null)
            }
            deleteText(t, e, r) {
                return [t,e,,r] = _(t, e, r),
                B.call(this, ()=>this.editor.deleteText(t, e), r, t, -1 * e)
            }
            disable() {
                this.enable(!1)
            }
            enable(t=!0) {
                this.scroll.enable(t),
                this.container.classList.toggle("ql-disabled", !t)
            }
            focus() {
                const {scrollTop: t} = this.scrollingContainer;
                this.selection.focus(),
                this.scrollingContainer.scrollTop = t,
                this.scrollIntoView()
            }
            format(t, e, r=A.a.sources.API) {
                return B.call(this, ()=>{
                    const r = this.getSelection(!0);
                    let n = new i.a;
                    if (null == r)
                        return n;
                    if (this.scroll.query(t, s.Scope.BLOCK))
                        n = this.editor.formatLine(r.index, r.length, {
                            [t]: e
                        });
                    else {
                        if (0 === r.length)
                            return this.selection.format(t, e),
                            n;
                        n = this.editor.formatText(r.index, r.length, {
                            [t]: e
                        })
                    }
                    return this.setSelection(r, A.a.sources.SILENT),
                    n
                }
                , r)
            }
            formatLine(t, e, r, n, i) {
                let s;
                return [t,e,s,i] = _(t, e, r, n, i),
                B.call(this, ()=>this.editor.formatLine(t, e, s), i, t, 0)
            }
            formatText(t, e, r, n, i) {
                let s;
                return [t,e,s,i] = _(t, e, r, n, i),
                B.call(this, ()=>this.editor.formatText(t, e, s), i, t, 0)
            }
            getBounds(t, e=0) {
                let r;
                r = "number" == typeof t ? this.selection.getBounds(t, e) : this.selection.getBounds(t.index, t.length);
                const n = this.container.getBoundingClientRect();
                return {
                    bottom: r.bottom - n.top,
                    height: r.height,
                    left: r.left - n.left,
                    right: r.right - n.left,
                    top: r.top - n.top,
                    width: r.width
                }
            }
            getContents(t=0, e=this.getLength() - t) {
                return [t,e] = _(t, e),
                this.editor.getContents(t, e)
            }
            getFormat(t=this.getSelection(!0), e=0) {
                return "number" == typeof t ? this.editor.getFormat(t, e) : this.editor.getFormat(t.index, t.length)
            }
            getIndex(t) {
                return t.offset(this.scroll)
            }
            getLength() {
                return this.scroll.length()
            }
            getLeaf(t) {
                return this.scroll.leaf(t)
            }
            getLine(t) {
                return this.scroll.line(t)
            }
            getLines(t=0, e=Number.MAX_VALUE) {
                return "number" != typeof t ? this.scroll.lines(t.index, t.length) : this.scroll.lines(t, e)
            }
            getModule(t) {
                return this.theme.modules[t]
            }
            getSelection(t=!1) {
                return t && this.focus(),
                this.update(),
                this.selection.getRange()[0]
            }
            getSemanticHTML(t=0, e=this.getLength() - t) {
                return [t,e] = _(t, e),
                this.editor.getHTML(t, e)
            }
            getText(t=0, e=this.getLength() - t) {
                return [t,e] = _(t, e),
                this.editor.getText(t, e)
            }
            hasFocus() {
                return this.selection.hasFocus()
            }
            insertEmbed(t, e, r, n=R.sources.API) {
                return B.call(this, ()=>this.editor.insertEmbed(t, e, r), n, t)
            }
            insertText(t, e, r, n, i) {
                let s;
                return [t,,s,i] = _(t, 0, r, n, i),
                B.call(this, ()=>this.editor.insertText(t, e, s), i, t, e.length)
            }
            isEnabled() {
                return !this.container.classList.contains("ql-disabled")
            }
            off(...t) {
                return this.emitter.off(...t)
            }
            on(...t) {
                return this.emitter.on(...t)
            }
            once(...t) {
                return this.emitter.once(...t)
            }
            removeFormat(t, e, r) {
                return [t,e,,r] = _(t, e, r),
                B.call(this, ()=>this.editor.removeFormat(t, e), r, t)
            }
            scrollIntoView() {
                this.selection.scrollIntoView(this.scrollingContainer)
            }
            setContents(t, e=A.a.sources.API) {
                return B.call(this, ()=>{
                    t = new i.a(t);
                    const e = this.getLength()
                      , r = this.editor.deleteText(0, e)
                      , n = this.editor.applyDelta(t)
                      , s = n.ops[n.ops.length - 1];
                    return null != s && "string" == typeof s.insert && "\n" === s.insert[s.insert.length - 1] && (this.editor.deleteText(this.getLength() - 1, 1),
                    n.delete(1)),
                    r.compose(n)
                }
                , e)
            }
            setSelection(t, e, r) {
                null == t ? this.selection.setRange(null, e || R.sources.API) : ([t,e,,r] = _(t, e, r),
                this.selection.setRange(new T.a(Math.max(0, t),e), r),
                r !== A.a.sources.SILENT && this.selection.scrollIntoView(this.scrollingContainer))
            }
            setText(t, e=A.a.sources.API) {
                const r = (new i.a).insert(t);
                return this.setContents(r, e)
            }
            update(t=A.a.sources.USER) {
                const e = this.scroll.update(t);
                return this.selection.update(t),
                e
            }
            updateContents(t, e=A.a.sources.API) {
                return B.call(this, ()=>(t = new i.a(t),
                this.editor.applyDelta(t, e)), e, !0)
            }
        }
        function B(t, e, r, n) {
            if (!this.isEnabled() && e === A.a.sources.USER)
                return new i.a;
            let s = null == r ? null : this.getSelection();
            const o = this.editor.delta
              , l = t();
            if (null != s && (!0 === r && (r = s.index),
            null == n ? s = q(s, l, e) : 0 !== n && (s = q(s, r, n, e)),
            this.setSelection(s, A.a.sources.SILENT)),
            l.length() > 0) {
                const t = [A.a.events.TEXT_CHANGE, l, o, e];
                this.emitter.emit(A.a.events.EDITOR_CHANGE, ...t),
                e !== A.a.sources.SILENT && this.emitter.emit(...t)
            }
            return l
        }
        function _(t, e, r, n, i) {
            let s = {};
            return "number" == typeof t.index && "number" == typeof t.length ? "number" != typeof e ? (i = n,
            n = r,
            r = e,
            e = t.length,
            t = t.index) : (e = t.length,
            t = t.index) : "number" != typeof e && (i = n,
            n = r,
            r = e,
            e = 0),
            "object" == typeof r ? (s = r,
            i = n) : "string" == typeof r && (null != n ? s[r] = n : i = r),
            [t, e, s, i = i || A.a.sources.API]
        }
        function q(t, e, r, n) {
            if (null == t)
                return null;
            let s, o;
            return e instanceof i.a ? [s,o] = [t.index, t.index + t.length].map(t=>e.transformPosition(t, n !== A.a.sources.USER)) : [s,o] = [t.index, t.index + t.length].map(t=>t < e || t === e && n === A.a.sources.USER ? t : r >= 0 ? t + r : Math.max(e, t + r)),
            new T.a(s,o - s)
        }
        R.DEFAULTS = {
            bounds: null,
            modules: {},
            placeholder: "",
            readOnly: !1,
            registry: C,
            scrollingContainer: null,
            theme: "default"
        },
        R.events = A.a.events,
        R.sources = A.a.sources,
        R.version = "undefined" == typeof QUILL_VERSION ? "dev" : QUILL_VERSION,
        R.imports = {
            delta: i.a,
            parchment: s,
            "core/module": w.a,
            "core/theme": S.a
        }
    }
    , function(t, e, r) {
        var n = r(34)
          , i = r(16)
          , s = r(5)
          , o = r(18)
          , l = String.fromCharCode(0)
          , a = function(t) {
            Array.isArray(t) ? this.ops = t : null != t && Array.isArray(t.ops) ? this.ops = t.ops : this.ops = []
        };
        a.prototype.insert = function(t, e) {
            var r = {};
            return 0 === t.length ? this : (r.insert = t,
            null != e && "object" == typeof e && Object.keys(e).length > 0 && (r.attributes = e),
            this.push(r))
        }
        ,
        a.prototype.delete = function(t) {
            return t <= 0 ? this : this.push({
                delete: t
            })
        }
        ,
        a.prototype.retain = function(t, e) {
            if (t <= 0)
                return this;
            var r = {
                retain: t
            };
            return null != e && "object" == typeof e && Object.keys(e).length > 0 && (r.attributes = e),
            this.push(r)
        }
        ,
        a.prototype.push = function(t) {
            var e = this.ops.length
              , r = this.ops[e - 1];
            if (t = s(!0, {}, t),
            "object" == typeof r) {
                if ("number" == typeof t.delete && "number" == typeof r.delete)
                    return this.ops[e - 1] = {
                        delete: r.delete + t.delete
                    },
                    this;
                if ("number" == typeof r.delete && null != t.insert && (e -= 1,
                "object" != typeof (r = this.ops[e - 1])))
                    return this.ops.unshift(t),
                    this;
                if (i(t.attributes, r.attributes)) {
                    if ("string" == typeof t.insert && "string" == typeof r.insert)
                        return this.ops[e - 1] = {
                            insert: r.insert + t.insert
                        },
                        "object" == typeof t.attributes && (this.ops[e - 1].attributes = t.attributes),
                        this;
                    if ("number" == typeof t.retain && "number" == typeof r.retain)
                        return this.ops[e - 1] = {
                            retain: r.retain + t.retain
                        },
                        "object" == typeof t.attributes && (this.ops[e - 1].attributes = t.attributes),
                        this
                }
            }
            return e === this.ops.length ? this.ops.push(t) : this.ops.splice(e, 0, t),
            this
        }
        ,
        a.prototype.chop = function() {
            var t = this.ops[this.ops.length - 1];
            return t && t.retain && !t.attributes && this.ops.pop(),
            this
        }
        ,
        a.prototype.filter = function(t) {
            return this.ops.filter(t)
        }
        ,
        a.prototype.forEach = function(t) {
            this.ops.forEach(t)
        }
        ,
        a.prototype.map = function(t) {
            return this.ops.map(t)
        }
        ,
        a.prototype.partition = function(t) {
            var e = []
              , r = [];
            return this.forEach(function(n) {
                (t(n) ? e : r).push(n)
            }),
            [e, r]
        }
        ,
        a.prototype.reduce = function(t, e) {
            return this.ops.reduce(t, e)
        }
        ,
        a.prototype.changeLength = function() {
            return this.reduce(function(t, e) {
                return e.insert ? t + o.length(e) : e.delete ? t - e.delete : t
            }, 0)
        }
        ,
        a.prototype.length = function() {
            return this.reduce(function(t, e) {
                return t + o.length(e)
            }, 0)
        }
        ,
        a.prototype.slice = function(t, e) {
            t = t || 0,
            "number" != typeof e && (e = 1 / 0);
            for (var r = [], n = o.iterator(this.ops), i = 0; i < e && n.hasNext(); ) {
                var s;
                i < t ? s = n.next(t - i) : (s = n.next(e - i),
                r.push(s)),
                i += o.length(s)
            }
            return new a(r)
        }
        ,
        a.prototype.compose = function(t) {
            for (var e = o.iterator(this.ops), r = o.iterator(t.ops), n = new a; e.hasNext() || r.hasNext(); )
                if ("insert" === r.peekType())
                    n.push(r.next());
                else if ("delete" === e.peekType())
                    n.push(e.next());
                else {
                    var i = Math.min(e.peekLength(), r.peekLength())
                      , s = e.next(i)
                      , l = r.next(i);
                    if ("number" == typeof l.retain) {
                        var u = {};
                        "number" == typeof s.retain ? u.retain = i : u.insert = s.insert;
                        var h = o.attributes.compose(s.attributes, l.attributes, "number" == typeof s.retain);
                        h && (u.attributes = h),
                        n.push(u)
                    } else
                        "number" == typeof l.delete && "number" == typeof s.retain && n.push(l)
                }
            return n.chop()
        }
        ,
        a.prototype.concat = function(t) {
            var e = new a(this.ops.slice());
            return t.ops.length > 0 && (e.push(t.ops[0]),
            e.ops = e.ops.concat(t.ops.slice(1))),
            e
        }
        ,
        a.prototype.diff = function(t, e) {
            if (this.ops === t.ops)
                return new a;
            var r = [this, t].map(function(e) {
                return e.map(function(r) {
                    if (null != r.insert)
                        return "string" == typeof r.insert ? r.insert : l;
                    throw new Error("diff() called " + (e === t ? "on" : "with") + " non-document")
                }).join("")
            })
              , s = new a
              , u = n(r[0], r[1], e)
              , h = o.iterator(this.ops)
              , c = o.iterator(t.ops);
            return u.forEach(function(t) {
                for (var e = t[1].length; e > 0; ) {
                    var r = 0;
                    switch (t[0]) {
                    case n.INSERT:
                        r = Math.min(c.peekLength(), e),
                        s.push(c.next(r));
                        break;
                    case n.DELETE:
                        r = Math.min(e, h.peekLength()),
                        h.next(r),
                        s.delete(r);
                        break;
                    case n.EQUAL:
                        r = Math.min(h.peekLength(), c.peekLength(), e);
                        var l = h.next(r)
                          , a = c.next(r);
                        i(l.insert, a.insert) ? s.retain(r, o.attributes.diff(l.attributes, a.attributes)) : s.push(a).delete(r)
                    }
                    e -= r
                }
            }),
            s.chop()
        }
        ,
        a.prototype.eachLine = function(t, e) {
            e = e || "\n";
            for (var r = o.iterator(this.ops), n = new a, i = 0; r.hasNext(); ) {
                if ("insert" !== r.peekType())
                    return;
                var s = r.peek()
                  , l = o.length(s) - r.peekLength()
                  , u = "string" == typeof s.insert ? s.insert.indexOf(e, l) - l : -1;
                if (u < 0)
                    n.push(r.next());
                else if (u > 0)
                    n.push(r.next(u));
                else {
                    if (!1 === t(n, r.next(1).attributes || {}, i))
                        return;
                    i += 1,
                    n = new a
                }
            }
            n.length() > 0 && t(n, {}, i)
        }
        ,
        a.prototype.transform = function(t, e) {
            if (e = !!e,
            "number" == typeof t)
                return this.transformPosition(t, e);
            for (var r = o.iterator(this.ops), n = o.iterator(t.ops), i = new a; r.hasNext() || n.hasNext(); )
                if ("insert" !== r.peekType() || !e && "insert" === n.peekType())
                    if ("insert" === n.peekType())
                        i.push(n.next());
                    else {
                        var s = Math.min(r.peekLength(), n.peekLength())
                          , l = r.next(s)
                          , u = n.next(s);
                        if (l.delete)
                            continue;
                        u.delete ? i.push(u) : i.retain(s, o.attributes.transform(l.attributes, u.attributes, e))
                    }
                else
                    i.retain(o.length(r.next()));
            return i.chop()
        }
        ,
        a.prototype.transformPosition = function(t, e) {
            e = !!e;
            for (var r = o.iterator(this.ops), n = 0; r.hasNext() && n <= t; ) {
                var i = r.peekLength()
                  , s = r.peekType();
                r.next(),
                "delete" !== s ? ("insert" === s && (n < t || !e) && (t += i),
                n += i) : t -= Math.min(i, t - n)
            }
            return t
        }
        ,
        t.exports = a
    }
    , function(t, e, r) {
        "use strict";
        var n = r(32)
          , i = r.n(n)
          , s = r(22)
          , o = r(11);
        const l = Object(o.a)("quill:events");
        ["selectionchange", "mousedown", "mouseup", "click"].forEach(t=>{
            document.addEventListener(t, (...t)=>{
                Array.from(document.querySelectorAll(".ql-container")).forEach(e=>{
                    const r = s.a.get(e);
                    r && r.emitter && r.emitter.handleDOM(...t)
                }
                )
            }
            )
        }
        );
        class a extends i.a {
            constructor() {
                super(),
                this.listeners = {},
                this.on("error", l.error)
            }
            emit(...t) {
                l.log.call(l, ...t),
                super.emit(...t)
            }
            handleDOM(t, ...e) {
                (this.listeners[t.type] || []).forEach(({node: r, handler: n})=>{
                    (t.target === r || r.contains(t.target)) && n(t, ...e)
                }
                )
            }
            listenDOM(t, e, r) {
                this.listeners[t] || (this.listeners[t] = []),
                this.listeners[t].push({
                    node: e,
                    handler: r
                })
            }
        }
        a.events = {
            EDITOR_CHANGE: "editor-change",
            SCROLL_BEFORE_UPDATE: "scroll-before-update",
            SCROLL_BLOT_MOUNT: "scroll-blot-mount",
            SCROLL_BLOT_UNMOUNT: "scroll-blot-unmount",
            SCROLL_OPTIMIZE: "scroll-optimize",
            SCROLL_UPDATE: "scroll-update",
            SELECTION_CHANGE: "selection-change",
            TEXT_CHANGE: "text-change"
        },
        a.sources = {
            API: "api",
            SILENT: "silent",
            USER: "user"
        },
        e.a = a
    }
    , function(t, e, r) {
        "use strict";
        r.d(e, "b", function() {
            return p
        }),
        r.d(e, "c", function() {
            return g
        }),
        r.d(e, "a", function() {
            return d
        }),
        r.d(e, "d", function() {
            return f
        });
        var n = r(5)
          , i = r.n(n)
          , s = r(2)
          , o = r.n(s)
          , l = r(0)
          , a = r(7)
          , u = r(10)
          , h = r(6);
        const c = 1;
        class f extends l.BlockBlot {
            constructor(t, e) {
                super(t, e),
                this.cache = {}
            }
            delta() {
                return null == this.cache.delta && (this.cache.delta = p(this)),
                this.cache.delta
            }
            deleteAt(t, e) {
                super.deleteAt(t, e),
                this.cache = {}
            }
            formatAt(t, e, r, n) {
                e <= 0 || (this.scroll.query(r, l.Scope.BLOCK) ? t + e === this.length() && this.format(r, n) : super.formatAt(t, Math.min(e, this.length() - t - 1), r, n),
                this.cache = {})
            }
            insertAt(t, e, r) {
                if (null != r)
                    return void super.insertAt(t, e, r);
                if (0 === e.length)
                    return;
                const n = e.split("\n")
                  , i = n.shift();
                i.length > 0 && (t < this.length() - 1 || null == this.children.tail ? super.insertAt(Math.min(t, this.length() - 1), i) : this.children.tail.insertAt(this.children.tail.length(), i),
                this.cache = {});
                let s = this;
                n.reduce((t,e)=>((s = s.split(t, !0)).insertAt(0, e),
                e.length), t + i.length)
            }
            insertBefore(t, e) {
                const {head: r} = this.children;
                super.insertBefore(t, e),
                r instanceof a.a && r.remove(),
                this.cache = {}
            }
            length() {
                return null == this.cache.length && (this.cache.length = super.length() + c),
                this.cache.length
            }
            moveChildren(t, e) {
                super.moveChildren(t, e),
                this.cache = {}
            }
            optimize(t) {
                super.optimize(t),
                this.cache = {}
            }
            path(t) {
                return super.path(t, !0)
            }
            removeChild(t) {
                super.removeChild(t),
                this.cache = {}
            }
            split(t, e=!1) {
                if (e && (0 === t || t >= this.length() - c)) {
                    const e = this.clone();
                    return 0 === t ? (this.parent.insertBefore(e, this),
                    this) : (this.parent.insertBefore(e, this.next),
                    e)
                }
                const r = super.split(t, e);
                return this.cache = {},
                r
            }
        }
        f.blotName = "block",
        f.tagName = "P",
        f.defaultChild = a.a,
        f.allowedChildren = [a.a, u.a, l.EmbedBlot, h.a];
        class d extends l.EmbedBlot {
            attach() {
                super.attach(),
                this.attributes = new l.AttributorStore(this.domNode)
            }
            delta() {
                return (new o.a).insert(this.value(), i()(this.formats(), this.attributes.values()))
            }
            format(t, e) {
                const r = this.scroll.query(t, l.Scope.BLOCK_ATTRIBUTE);
                null != r && this.attributes.attribute(r, e)
            }
            formatAt(t, e, r, n) {
                this.format(r, n)
            }
            insertAt(t, e, r) {
                if ("string" == typeof e && e.endsWith("\n")) {
                    const r = this.scroll.create(f.blotName);
                    this.parent.insertBefore(r, 0 === t ? this : this.next),
                    r.insertAt(0, e.slice(0, -1))
                } else
                    super.insertAt(t, e, r)
            }
        }
        function p(t) {
            return t.descendants(l.LeafBlot).reduce((t,e)=>0 === e.length() ? t : t.insert(e.value(), g(e)), new o.a).insert("\n", g(t))
        }
        function g(t, e={}) {
            return null == t ? e : ("function" == typeof t.formats && (e = i()(e, t.formats())),
            null == t.parent || "scroll" === t.parent.blotName || t.parent.statics.scope !== t.statics.scope ? e : g(t.parent, e))
        }
        d.scope = l.Scope.BLOCK_BLOT
    }
    , function(t, e, r) {
        "use strict";
        var n = Object.prototype.hasOwnProperty
          , i = Object.prototype.toString
          , s = function(t) {
            return "function" == typeof Array.isArray ? Array.isArray(t) : "[object Array]" === i.call(t)
        }
          , o = function(t) {
            if (!t || "[object Object]" !== i.call(t))
                return !1;
            var e, r = n.call(t, "constructor"), s = t.constructor && t.constructor.prototype && n.call(t.constructor.prototype, "isPrototypeOf");
            if (t.constructor && !r && !s)
                return !1;
            for (e in t)
                ;
            return void 0 === e || n.call(t, e)
        };
        t.exports = function t() {
            var e, r, n, i, l, a, u = arguments[0], h = 1, c = arguments.length, f = !1;
            for ("boolean" == typeof u && (f = u,
            u = arguments[1] || {},
            h = 2),
            (null == u || "object" != typeof u && "function" != typeof u) && (u = {}); h < c; ++h)
                if (null != (e = arguments[h]))
                    for (r in e)
                        n = u[r],
                        u !== (i = e[r]) && (f && i && (o(i) || (l = s(i))) ? (l ? (l = !1,
                        a = n && s(n) ? n : []) : a = n && o(n) ? n : {},
                        u[r] = t(f, a, i)) : void 0 !== i && (u[r] = i));
            return u
        }
    }
    , function(t, e, r) {
        "use strict";
        var n = r(0);
        e.a = class extends n.TextBlot {
        }
    }
    , function(t, e, r) {
        "use strict";
        var n = r(0);
        class i extends n.EmbedBlot {
            static value() {}
            optimize() {
                (this.prev || this.next) && this.remove()
            }
            length() {
                return 0
            }
            value() {
                return ""
            }
        }
        i.blotName = "break",
        i.tagName = "BR",
        e.a = i
    }
    , function(t, e, r) {
        "use strict";
        class n {
            constructor(t, e={}) {
                this.quill = t,
                this.options = e
            }
        }
        n.DEFAULTS = {},
        e.a = n
    }
    , function(t, e, r) {
        "use strict";
        var n = r(1)
          , i = r(4)
          , s = r(7)
          , o = r(12)
          , l = r(17)
          , a = r(30)
          , u = r(10)
          , h = r(0)
          , c = r(3);
        function f(t) {
            return t instanceof i.d || t instanceof i.a
        }
        class d extends h.ScrollBlot {
            constructor(t, e, {emitter: r}) {
                super(t, e),
                this.emitter = r,
                this.domNode.addEventListener("DOMNodeInserted", ()=>{}
                ),
                this.optimize(),
                this.enable()
            }
            batchStart() {
                this.batch = !0
            }
            batchEnd() {
                this.batch = !1,
                this.optimize()
            }
            emitMount(t) {
                this.emitter.emit(c.a.events.SCROLL_BLOT_MOUNT, t)
            }
            emitUnmount(t) {
                this.emitter.emit(c.a.events.SCROLL_BLOT_UNMOUNT, t)
            }
            deleteAt(t, e) {
                const [r,n] = this.line(t)
                  , [o] = this.line(t + e);
                if (super.deleteAt(t, e),
                null != o && r !== o && n > 0) {
                    if (r instanceof i.a || o instanceof i.a)
                        return void this.optimize();
                    const t = o.children.head instanceof s.a ? null : o.children.head;
                    r.moveChildren(o, t),
                    r.remove()
                }
                this.optimize()
            }
            enable(t=!0) {
                this.domNode.setAttribute("contenteditable", t)
            }
            formatAt(t, e, r, n) {
                super.formatAt(t, e, r, n),
                this.optimize()
            }
            insertAt(t, e, r) {
                if (t >= this.length())
                    if (null == r || null == this.scroll.query(e, h.Scope.BLOCK)) {
                        const t = this.scroll.create(this.statics.defaultChild.blotName);
                        this.appendChild(t),
                        null == r && e.endsWith("\n") ? t.insertAt(0, e.slice(0, -1), r) : t.insertAt(0, e, r)
                    } else {
                        const t = this.scroll.create(e, r);
                        this.appendChild(t)
                    }
                else
                    super.insertAt(t, e, r);
                this.optimize()
            }
            insertBefore(t, e) {
                if (t.statics.scope === h.Scope.INLINE_BLOT) {
                    const r = this.scroll.create(this.statics.defaultChild.blotName);
                    r.appendChild(t),
                    super.insertBefore(r, e)
                } else
                    super.insertBefore(t, e)
            }
            leaf(t) {
                return this.path(t).pop() || [null, -1]
            }
            line(t) {
                return t === this.length() ? this.line(t - 1) : this.descendant(f, t)
            }
            lines(t=0, e=Number.MAX_VALUE) {
                const r = (t,e,n)=>{
                    let i = []
                      , s = n;
                    return t.children.forEachAt(e, n, (t,e,n)=>{
                        f(t) ? i.push(t) : t instanceof h.ContainerBlot && (i = i.concat(r(t, e, s))),
                        s -= n
                    }
                    ),
                    i
                }
                ;
                return r(this, t, e)
            }
            optimize(t=[], e={}) {
                !0 !== this.batch && (super.optimize(t, e),
                t.length > 0 && this.emitter.emit(c.a.events.SCROLL_OPTIMIZE, t, e))
            }
            path(t) {
                return super.path(t).slice(1)
            }
            remove() {}
            update(t) {
                if (!0 === this.batch)
                    return;
                let e = c.a.sources.USER;
                "string" == typeof t && (e = t),
                Array.isArray(t) || (t = this.observer.takeRecords()),
                t.length > 0 && this.emitter.emit(c.a.events.SCROLL_BEFORE_UPDATE, e, t),
                super.update(t.concat([])),
                t.length > 0 && this.emitter.emit(c.a.events.SCROLL_UPDATE, e, t)
            }
        }
        d.blotName = "scroll",
        d.className = "ql-editor",
        d.tagName = "DIV",
        d.defaultChild = i.d,
        d.allowedChildren = [i.d, i.a, o.a];
        var p = d
          , g = r(6)
          , m = r(31)
          , y = r(8);
        class b extends y.a {
            constructor(t, e) {
                super(t, e),
                this.lastRecorded = 0,
                this.ignoreChange = !1,
                this.clear(),
                this.quill.on(n.a.events.EDITOR_CHANGE, (t,e,r,i)=>{
                    t !== n.a.events.TEXT_CHANGE || this.ignoreChange || (this.options.userOnly && i !== n.a.sources.USER ? this.transform(e) : this.record(e, r))
                }
                ),
                this.quill.keyboard.addBinding({
                    key: "z",
                    shortKey: !0
                }, this.undo.bind(this)),
                this.quill.keyboard.addBinding({
                    key: "z",
                    shortKey: !0,
                    shiftKey: !0
                }, this.redo.bind(this)),
                /Win/i.test(navigator.platform) && this.quill.keyboard.addBinding({
                    key: "y",
                    shortKey: !0
                }, this.redo.bind(this))
            }
            change(t, e) {
                if (0 === this.stack[t].length)
                    return;
                const r = this.stack[t].pop();
                this.stack[e].push(r),
                this.lastRecorded = 0,
                this.ignoreChange = !0,
                this.quill.updateContents(r[t], n.a.sources.USER),
                this.ignoreChange = !1;
                const i = function(t, e) {
                    const r = e.reduce((t,e)=>t + (e.delete || 0), 0);
                    let n = e.length() - r;
                    (function(t, e) {
                        const r = e.ops[e.ops.length - 1];
                        if (null == r)
                            return !1;
                        if (null != r.insert)
                            return "string" == typeof r.insert && r.insert.endsWith("\n");
                        if (null != r.attributes)
                            return Object.keys(r.attributes).some(e=>null != t.query(e, h.Scope.BLOCK));
                        return !1
                    }
                    )(t, e) && (n -= 1);
                    return n
                }(this.quill.scroll, r[t]);
                this.quill.setSelection(i)
            }
            clear() {
                this.stack = {
                    undo: [],
                    redo: []
                }
            }
            cutoff() {
                this.lastRecorded = 0
            }
            record(t, e) {
                if (0 === t.ops.length)
                    return;
                this.stack.redo = [];
                let r = this.quill.getContents().diff(e);
                const n = Date.now();
                if (this.lastRecorded + this.options.delay > n && this.stack.undo.length > 0) {
                    const e = this.stack.undo.pop();
                    r = r.compose(e.undo),
                    t = e.redo.compose(t)
                } else
                    this.lastRecorded = n;
                this.stack.undo.push({
                    redo: t,
                    undo: r
                }),
                this.stack.undo.length > this.options.maxStack && this.stack.undo.shift()
            }
            redo() {
                this.change("redo", "undo")
            }
            transform(t) {
                this.stack.undo.forEach(e=>{
                    e.undo = t.transform(e.undo, !0),
                    e.redo = t.transform(e.redo, !0)
                }
                ),
                this.stack.redo.forEach(e=>{
                    e.undo = t.transform(e.undo, !0),
                    e.redo = t.transform(e.redo, !0)
                }
                )
            }
            undo() {
                this.change("undo", "redo")
            }
        }
        b.DEFAULTS = {
            delay: 1e3,
            maxStack: 100,
            userOnly: !1
        };
        var v = r(15)
          , N = r(2)
          , E = r.n(N);
        class x extends y.a {
            constructor(t, e) {
                super(t, e),
                t.root.addEventListener("drop", e=>{
                    let r;
                    if (e.preventDefault(),
                    document.caretRangeFromPoint)
                        r = document.caretRangeFromPoint(e.clientX, e.clientY);
                    else {
                        if (!document.caretPositionFromPoint)
                            return;
                        {
                            const t = document.caretPositionFromPoint(e.clientX, e.clientY);
                            (r = document.createRange()).setStart(t.offsetNode, t.offset),
                            r.setEnd(t.offsetNode, t.offset)
                        }
                    }
                    const n = t.selection.normalizeNative(r)
                      , i = t.selection.normalizedToRange(n);
                    this.upload(i, e.dataTransfer.files)
                }
                )
            }
            upload(t, e) {
                const r = [];
                Array.from(e).forEach(t=>{
                    t && this.options.mimetypes.includes(t.type) && r.push(t)
                }
                ),
                r.length > 0 && this.options.handler.call(this, t, r)
            }
        }
        x.DEFAULTS = {
            mimetypes: ["image/png", "image/jpeg"],
            handler(t, e) {
                const r = e.map(t=>new Promise(e=>{
                    const r = new FileReader;
                    r.onload = (t=>{
                        e(t.target.result)
                    }
                    ),
                    r.readAsDataURL(t)
                }
                ));
                Promise.all(r).then(e=>{
                    const r = e.reduce((t,e)=>t.insert({
                        image: e
                    }), (new E.a).retain(t.index).delete(t.length));
                    this.quill.updateContents(r, c.a.sources.USER),
                    this.quill.setSelection(t.index + e.length, c.a.sources.SILENT)
                }
                )
            }
        };
        var A = x;
        n.a.register({
            "blots/block": i.d,
            "blots/block/embed": i.a,
            "blots/break": s.a,
            "blots/container": o.a,
            "blots/cursor": l.a,
            "blots/embed": a.a,
            "blots/inline": u.a,
            "blots/scroll": p,
            "blots/text": g.a,
            "modules/clipboard": m.a,
            "modules/history": b,
            "modules/keyboard": v.a,
            "modules/uploader": A
        });
        e.a = n.a
    }
    , function(t, e, r) {
        "use strict";
        var n = r(0)
          , i = r(7)
          , s = r(6);
        class o extends n.InlineBlot {
            static compare(t, e) {
                const r = o.order.indexOf(t)
                  , n = o.order.indexOf(e);
                return r >= 0 || n >= 0 ? r - n : t === e ? 0 : t < e ? -1 : 1
            }
            formatAt(t, e, r, i) {
                if (o.compare(this.statics.blotName, r) < 0 && this.scroll.query(r, n.Scope.BLOT)) {
                    const n = this.isolate(t, e);
                    i && n.wrap(r, i)
                } else
                    super.formatAt(t, e, r, i)
            }
            optimize(t) {
                if (super.optimize(t),
                this.parent instanceof o && o.compare(this.statics.blotName, this.parent.statics.blotName) > 0) {
                    const t = this.parent.isolate(this.offset(), this.length());
                    this.moveChildren(t),
                    t.wrap(this)
                }
            }
        }
        o.allowedChildren = [o, i.a, n.EmbedBlot, s.a],
        o.order = ["cursor", "inline", "underline", "strike", "italic", "bold", "script", "link", "code"],
        e.a = o
    }
    , function(t, e, r) {
        "use strict";
        const n = ["error", "warn", "log", "info"];
        let i = "warn";
        function s(t, ...e) {
            n.indexOf(t) <= n.indexOf(i) && console[t](...e)
        }
        function o(t) {
            return n.reduce((e,r)=>(e[r] = s.bind(console, r, t),
            e), {})
        }
        o.level = (t=>{
            i = t
        }
        ),
        s.level = o.level,
        e.a = o
    }
    , function(t, e, r) {
        "use strict";
        var n = r(0);
        e.a = class extends n.ContainerBlot {
        }
    }
    , function(t, e, r) {
        (function(e) {
            var r = function() {
                "use strict";
                function t(t, e) {
                    return null != e && t instanceof e
                }
                var r, n, i;
                try {
                    r = Map
                } catch (t) {
                    r = function() {}
                }
                try {
                    n = Set
                } catch (t) {
                    n = function() {}
                }
                try {
                    i = Promise
                } catch (t) {
                    i = function() {}
                }
                function s(o, a, u, h, c) {
                    "object" == typeof a && (u = a.depth,
                    h = a.prototype,
                    c = a.includeNonEnumerable,
                    a = a.circular);
                    var f = []
                      , d = []
                      , p = void 0 !== e;
                    return void 0 === a && (a = !0),
                    void 0 === u && (u = 1 / 0),
                    function o(u, g) {
                        if (null === u)
                            return null;
                        if (0 === g)
                            return u;
                        var m, y;
                        if ("object" != typeof u)
                            return u;
                        if (t(u, r))
                            m = new r;
                        else if (t(u, n))
                            m = new n;
                        else if (t(u, i))
                            m = new i(function(t, e) {
                                u.then(function(e) {
                                    t(o(e, g - 1))
                                }, function(t) {
                                    e(o(t, g - 1))
                                })
                            }
                            );
                        else if (s.__isArray(u))
                            m = [];
                        else if (s.__isRegExp(u))
                            m = new RegExp(u.source,l(u)),
                            u.lastIndex && (m.lastIndex = u.lastIndex);
                        else if (s.__isDate(u))
                            m = new Date(u.getTime());
                        else {
                            if (p && e.isBuffer(u))
                                return m = new e(u.length),
                                u.copy(m),
                                m;
                            t(u, Error) ? m = Object.create(u) : void 0 === h ? (y = Object.getPrototypeOf(u),
                            m = Object.create(y)) : (m = Object.create(h),
                            y = h)
                        }
                        if (a) {
                            var b = f.indexOf(u);
                            if (-1 != b)
                                return d[b];
                            f.push(u),
                            d.push(m)
                        }
                        for (var v in t(u, r) && u.forEach(function(t, e) {
                            var r = o(e, g - 1)
                              , n = o(t, g - 1);
                            m.set(r, n)
                        }),
                        t(u, n) && u.forEach(function(t) {
                            var e = o(t, g - 1);
                            m.add(e)
                        }),
                        u) {
                            var N;
                            y && (N = Object.getOwnPropertyDescriptor(y, v)),
                            N && null == N.set || (m[v] = o(u[v], g - 1))
                        }
                        if (Object.getOwnPropertySymbols) {
                            var E = Object.getOwnPropertySymbols(u);
                            for (v = 0; v < E.length; v++) {
                                var x = E[v];
                                (!(w = Object.getOwnPropertyDescriptor(u, x)) || w.enumerable || c) && (m[x] = o(u[x], g - 1),
                                w.enumerable || Object.defineProperty(m, x, {
                                    enumerable: !1
                                }))
                            }
                        }
                        if (c) {
                            var A = Object.getOwnPropertyNames(u);
                            for (v = 0; v < A.length; v++) {
                                var w, T = A[v];
                                (w = Object.getOwnPropertyDescriptor(u, T)) && w.enumerable || (m[T] = o(u[T], g - 1),
                                Object.defineProperty(m, T, {
                                    enumerable: !1
                                }))
                            }
                        }
                        return m
                    }(o, u)
                }
                function o(t) {
                    return Object.prototype.toString.call(t)
                }
                function l(t) {
                    var e = "";
                    return t.global && (e += "g"),
                    t.ignoreCase && (e += "i"),
                    t.multiline && (e += "m"),
                    e
                }
                return s.clonePrototype = function(t) {
                    if (null === t)
                        return null;
                    var e = function() {};
                    return e.prototype = t,
                    new e
                }
                ,
                s.__objToStr = o,
                s.__isDate = function(t) {
                    return "object" == typeof t && "[object Date]" === o(t)
                }
                ,
                s.__isArray = function(t) {
                    return "object" == typeof t && "[object Array]" === o(t)
                }
                ,
                s.__isRegExp = function(t) {
                    return "object" == typeof t && "[object RegExp]" === o(t)
                }
                ,
                s.__getRegExpFlags = l,
                s
            }();
            "object" == typeof t && t.exports && (t.exports = r)
        }
        ).call(this, r(37).Buffer)
    }
    , function(t, e, r) {
        "use strict";
        r.d(e, "a", function() {
            return f
        }),
        r.d(e, "b", function() {
            return h
        }),
        r.d(e, "c", function() {
            return c
        });
        var n = r(4)
          , i = r(7)
          , s = r(17)
          , o = r(10)
          , l = r(6)
          , a = r(12)
          , u = r(1);
        class h extends a.a {
            static create(t) {
                const e = super.create(t);
                return e.setAttribute("spellcheck", !1),
                e
            }
            html(t, e) {
                return `<pre>${this.domNode.innerText.slice(t, t + e)}</pre>`
            }
        }
        class c extends n.d {
            static register() {
                u.a.register(h)
            }
        }
        class f extends o.a {
        }
        f.blotName = "code",
        f.tagName = "CODE",
        c.blotName = "code-block",
        c.className = "ql-code-block",
        c.tagName = "DIV",
        h.blotName = "code-block-container",
        h.className = "ql-code-block-container",
        h.tagName = "DIV",
        h.allowedChildren = [c],
        c.allowedChildren = [l.a, i.a, s.a],
        c.requiredContainer = h,
        c.TAB = "  "
    }
    , function(t, e, r) {
        "use strict";
        r.d(e, "a", function() {
            return v
        }),
        r.d(e, "b", function() {
            return S
        });
        var n = r(13)
          , i = r.n(n)
          , s = r(16)
          , o = r.n(s)
          , l = r(5)
          , a = r.n(l)
          , u = r(2)
          , h = r.n(u)
          , c = r(18)
          , f = r.n(c)
          , d = r(0)
          , p = r(1)
          , g = r(11)
          , m = r(8);
        const y = Object(g.a)("quill:keyboard")
          , b = /Mac/i.test(navigator.platform) ? "metaKey" : "ctrlKey";
        class v extends m.a {
            static match(t, e) {
                return !["altKey", "ctrlKey", "metaKey", "shiftKey"].some(r=>!!e[r] !== t[r] && null !== e[r]) && (e.key === t.key || e.key === t.which)
            }
            constructor(t, e) {
                super(t, e),
                this.bindings = {},
                Object.keys(this.options.bindings).forEach(t=>{
                    this.options.bindings[t] && this.addBinding(this.options.bindings[t])
                }
                ),
                this.addBinding({
                    key: "Enter",
                    shiftKey: null
                }, A),
                this.addBinding({
                    key: "Enter",
                    metaKey: null,
                    ctrlKey: null,
                    altKey: null
                }, ()=>{}
                ),
                /Firefox/i.test(navigator.userAgent) ? (this.addBinding({
                    key: "Backspace"
                }, {
                    collapsed: !0
                }, N),
                this.addBinding({
                    key: "Delete"
                }, {
                    collapsed: !0
                }, E)) : (this.addBinding({
                    key: "Backspace"
                }, {
                    collapsed: !0,
                    prefix: /^.?$/
                }, N),
                this.addBinding({
                    key: "Delete"
                }, {
                    collapsed: !0,
                    suffix: /^.?$/
                }, E)),
                this.addBinding({
                    key: "Backspace"
                }, {
                    collapsed: !1
                }, x),
                this.addBinding({
                    key: "Delete"
                }, {
                    collapsed: !1
                }, x),
                this.addBinding({
                    key: "Backspace",
                    altKey: null,
                    ctrlKey: null,
                    metaKey: null,
                    shiftKey: null
                }, {
                    collapsed: !0,
                    offset: 0
                }, N),
                this.listen()
            }
            addBinding(t, e={}, r={}) {
                const n = S(t);
                null != n ? ("function" == typeof e && (e = {
                    handler: e
                }),
                "function" == typeof r && (r = {
                    handler: r
                }),
                (Array.isArray(n.key) ? n.key : [n.key]).forEach(t=>{
                    const i = a()({}, n, {
                        key: t
                    }, e, r);
                    this.bindings[i.key] = this.bindings[i.key] || [],
                    this.bindings[i.key].push(i)
                }
                )) : y.warn("Attempted to add invalid keyboard binding", n)
            }
            listen() {
                this.quill.root.addEventListener("keydown", t=>{
                    if (t.defaultPrevented)
                        return;
                    const e = (this.bindings[t.key] || []).concat(this.bindings[t.which] || []).filter(e=>v.match(t, e));
                    if (0 === e.length)
                        return;
                    const r = this.quill.getSelection();
                    if (null == r || !this.quill.hasFocus())
                        return;
                    const [n,i] = this.quill.getLine(r.index)
                      , [s,l] = this.quill.getLeaf(r.index)
                      , [a,u] = 0 === r.length ? [s, l] : this.quill.getLeaf(r.index + r.length)
                      , h = s instanceof d.TextBlot ? s.value().slice(0, l) : ""
                      , c = a instanceof d.TextBlot ? a.value().slice(u) : ""
                      , f = {
                        collapsed: 0 === r.length,
                        empty: 0 === r.length && n.length() <= 1,
                        format: this.quill.getFormat(r),
                        line: n,
                        offset: i,
                        prefix: h,
                        suffix: c,
                        event: t
                    };
                    e.some(t=>{
                        if (null != t.collapsed && t.collapsed !== f.collapsed)
                            return !1;
                        if (null != t.empty && t.empty !== f.empty)
                            return !1;
                        if (null != t.offset && t.offset !== f.offset)
                            return !1;
                        if (Array.isArray(t.format)) {
                            if (t.format.every(t=>null == f.format[t]))
                                return !1
                        } else if ("object" == typeof t.format && !Object.keys(t.format).every(e=>!0 === t.format[e] ? null != f.format[e] : !1 === t.format[e] ? null == f.format[e] : o()(t.format[e], f.format[e])))
                            return !1;
                        return !(null != t.prefix && !t.prefix.test(f.prefix)) && (!(null != t.suffix && !t.suffix.test(f.suffix)) && !0 !== t.handler.call(this, r, f, t))
                    }
                    ) && t.preventDefault()
                }
                )
            }
        }
        function N(t, e) {
            if (0 === t.index || this.quill.getLength() <= 1)
                return;
            const [r] = this.quill.getLine(t.index);
            let n = {};
            if (0 === e.offset) {
                const [e] = this.quill.getLine(t.index - 1);
                if (null != e && (e.length() > 1 || "table" === e.statics.blotName)) {
                    const e = r.formats()
                      , i = this.quill.getFormat(t.index - 1, 1);
                    n = f.a.attributes.diff(e, i) || {}
                }
            }
            const i = /[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(e.prefix) ? 2 : 1;
            this.quill.deleteText(t.index - i, i, p.a.sources.USER),
            Object.keys(n).length > 0 && this.quill.formatLine(t.index - i, i, n, p.a.sources.USER),
            this.quill.focus()
        }
        function E(t, e) {
            const r = /^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(e.suffix) ? 2 : 1;
            if (t.index >= this.quill.getLength() - r)
                return;
            let n = {}
              , i = 0;
            const [s] = this.quill.getLine(t.index);
            if (e.offset >= s.length() - 1) {
                const [e] = this.quill.getLine(t.index + 1);
                if (e) {
                    const r = s.formats()
                      , o = this.quill.getFormat(t.index, 1);
                    n = f.a.attributes.diff(r, o) || {},
                    i = e.length()
                }
            }
            this.quill.deleteText(t.index, r, p.a.sources.USER),
            Object.keys(n).length > 0 && this.quill.formatLine(t.index + i - 1, r, n, p.a.sources.USER)
        }
        function x(t) {
            const e = this.quill.getLines(t);
            let r = {};
            if (e.length > 1) {
                const t = e[0].formats()
                  , n = e[e.length - 1].formats();
                r = f.a.attributes.diff(n, t) || {}
            }
            this.quill.deleteText(t, p.a.sources.USER),
            Object.keys(r).length > 0 && this.quill.formatLine(t.index, 1, r, p.a.sources.USER),
            this.quill.setSelection(t.index, p.a.sources.SILENT),
            this.quill.focus()
        }
        function A(t, e) {
            t.length > 0 && this.quill.scroll.deleteAt(t.index, t.length);
            const r = Object.keys(e.format).reduce((t,r)=>(this.quill.scroll.query(r, d.Scope.BLOCK) && !Array.isArray(e.format[r]) && (t[r] = e.format[r]),
            t), {});
            this.quill.insertText(t.index, "\n", r, p.a.sources.USER),
            this.quill.setSelection(t.index + 1, p.a.sources.SILENT),
            this.quill.focus(),
            Object.keys(e.format).forEach(t=>{
                null == r[t] && (Array.isArray(e.format[t]) || "link" !== t && this.quill.format(t, e.format[t], p.a.sources.USER))
            }
            )
        }
        function w(t) {
            return {
                key: "Tab",
                shiftKey: !t,
                format: {
                    "code-block": !0
                },
                handler(e) {
                    const r = this.quill.scroll.query("code-block")
                      , n = 0 === e.length ? this.quill.getLines(e.index, 1) : this.quill.getLines(e);
                    let {index: i, length: s} = e;
                    n.forEach((e,n)=>{
                        t ? (e.insertAt(0, r.TAB),
                        0 === n ? i += r.TAB.length : s += r.TAB.length) : e.domNode.textContent.startsWith(r.TAB) && (e.deleteAt(0, r.TAB.length),
                        0 === n ? i -= r.TAB.length : s -= r.TAB.length)
                    }
                    ),
                    this.quill.update(p.a.sources.USER),
                    this.quill.setSelection(i, s, p.a.sources.SILENT)
                }
            }
        }
        function T(t, e) {
            return {
                key: t,
                shiftKey: e,
                altKey: null,
                ["ArrowLeft" === t ? "prefix" : "suffix"]: /^$/,
                handler(r) {
                    let {index: n} = r;
                    "ArrowRight" === t && (n += r.length + 1);
                    const [i] = this.quill.getLeaf(n);
                    return !(i instanceof d.EmbedBlot) || ("ArrowLeft" === t ? e ? this.quill.setSelection(r.index - 1, r.length + 1, p.a.sources.USER) : this.quill.setSelection(r.index - 1, p.a.sources.USER) : e ? this.quill.setSelection(r.index, r.length + 1, p.a.sources.USER) : this.quill.setSelection(r.index + r.length + 1, p.a.sources.USER),
                    !1)
                }
            }
        }
        function L(t) {
            return {
                key: t[0],
                shortKey: !0,
                handler(e, r) {
                    this.quill.format(t, !r.format[t], p.a.sources.USER)
                }
            }
        }
        function O(t) {
            return {
                key: t ? "ArrowUp" : "ArrowDown",
                collapsed: !0,
                format: ["table"],
                handler(e, r) {
                    const n = t ? "prev" : "next"
                      , i = r.line
                      , s = i.parent[n];
                    if (null != s) {
                        if ("table-row" === s.statics.blotName) {
                            let t = s.children.head
                              , e = i;
                            for (; null != e.prev; )
                                e = e.prev,
                                t = t.next;
                            const n = t.offset(this.quill.scroll) + Math.min(r.offset, t.length() - 1);
                            this.quill.setSelection(n, 0, p.a.sources.USER)
                        }
                    } else {
                        const e = i.table()[n];
                        null != e && (t ? this.quill.setSelection(e.offset(this.quill.scroll) + e.length() - 1, 0, p.a.sources.USER) : this.quill.setSelection(e.offset(this.quill.scroll), 0, p.a.sources.USER))
                    }
                    return !1
                }
            }
        }
        function S(t) {
            if ("string" == typeof t || "number" == typeof t)
                t = {
                    key: t
                };
            else {
                if ("object" != typeof t)
                    return null;
                t = i()(t, !1)
            }
            return t.shortKey && (t[b] = t.shortKey,
            delete t.shortKey),
            t
        }
        v.DEFAULTS = {
            bindings: {
                bold: L("bold"),
                italic: L("italic"),
                underline: L("underline"),
                indent: {
                    key: "Tab",
                    format: ["blockquote", "indent", "list"],
                    handler(t, e) {
                        return !(!e.collapsed || 0 === e.offset) || (this.quill.format("indent", "+1", p.a.sources.USER),
                        !1)
                    }
                },
                outdent: {
                    key: "Tab",
                    shiftKey: !0,
                    format: ["blockquote", "indent", "list"],
                    handler(t, e) {
                        return !(!e.collapsed || 0 === e.offset) || (this.quill.format("indent", "-1", p.a.sources.USER),
                        !1)
                    }
                },
                "outdent backspace": {
                    key: "Backspace",
                    collapsed: !0,
                    shiftKey: null,
                    metaKey: null,
                    ctrlKey: null,
                    altKey: null,
                    format: ["indent", "list"],
                    offset: 0,
                    handler(t, e) {
                        null != e.format.indent ? this.quill.format("indent", "-1", p.a.sources.USER) : null != e.format.list && this.quill.format("list", !1, p.a.sources.USER)
                    }
                },
                "indent code-block": w(!0),
                "outdent code-block": w(!1),
                "remove tab": {
                    key: "Tab",
                    shiftKey: !0,
                    collapsed: !0,
                    prefix: /\t$/,
                    handler(t) {
                        this.quill.deleteText(t.index - 1, 1, p.a.sources.USER)
                    }
                },
                tab: {
                    key: "Tab",
                    handler(t, e) {
                        if (e.format.table)
                            return !0;
                        this.quill.history.cutoff();
                        const r = (new h.a).retain(t.index).delete(t.length).insert("\t");
                        return this.quill.updateContents(r, p.a.sources.USER),
                        this.quill.history.cutoff(),
                        this.quill.setSelection(t.index + 1, p.a.sources.SILENT),
                        !1
                    }
                },
                "blockquote empty enter": {
                    key: "Enter",
                    collapsed: !0,
                    format: ["blockquote"],
                    empty: !0,
                    handler() {
                        this.quill.format("blockquote", !1, p.a.sources.USER)
                    }
                },
                "list empty enter": {
                    key: "Enter",
                    collapsed: !0,
                    format: ["list"],
                    empty: !0,
                    handler(t, e) {
                        this.quill.format("list", !1, p.a.sources.USER),
                        e.format.indent && this.quill.format("indent", !1, p.a.sources.USER)
                    }
                },
                "checklist enter": {
                    key: "Enter",
                    collapsed: !0,
                    format: {
                        list: "checked"
                    },
                    handler(t) {
                        const [e,r] = this.quill.getLine(t.index)
                          , n = a()({}, e.formats(), {
                            list: "checked"
                        })
                          , i = (new h.a).retain(t.index).insert("\n", n).retain(e.length() - r - 1).retain(1, {
                            list: "unchecked"
                        });
                        this.quill.updateContents(i, p.a.sources.USER),
                        this.quill.setSelection(t.index + 1, p.a.sources.SILENT),
                        this.quill.scrollIntoView()
                    }
                },
                "header enter": {
                    key: "Enter",
                    collapsed: !0,
                    format: ["header"],
                    suffix: /^$/,
                    handler(t, e) {
                        const [r,n] = this.quill.getLine(t.index)
                          , i = (new h.a).retain(t.index).insert("\n", e.format).retain(r.length() - n - 1).retain(1, {
                            header: null
                        });
                        this.quill.updateContents(i, p.a.sources.USER),
                        this.quill.setSelection(t.index + 1, p.a.sources.SILENT),
                        this.quill.scrollIntoView()
                    }
                },
                "table backspace": {
                    key: "Backspace",
                    format: ["table"],
                    collapsed: !0,
                    offset: 0,
                    handler() {}
                },
                "table delete": {
                    key: "Delete",
                    format: ["table"],
                    collapsed: !0,
                    suffix: /^$/,
                    handler() {}
                },
                "table enter": {
                    key: "Enter",
                    shiftKey: null,
                    format: ["table"],
                    handler(t) {
                        const e = this.quill.getModule("table");
                        if (e) {
                            const [r,n,i,s] = e.getTable(t)
                              , o = function(t, e, r, n) {
                                if (null == e.prev && null == e.next)
                                    return null == r.prev && null == r.next ? 0 === n ? -1 : 1 : null == r.prev ? -1 : 1;
                                if (null == e.prev)
                                    return -1;
                                if (null == e.next)
                                    return 1;
                                return null
                            }(0, n, i, s);
                            if (null == o)
                                return;
                            let l = r.offset();
                            if (o < 0) {
                                const e = (new h.a).retain(l).insert("\n");
                                this.quill.updateContents(e, p.a.sources.USER),
                                this.quill.setSelection(t.index + 1, t.length, p.a.sources.SILENT)
                            } else if (o > 0) {
                                l += r.length();
                                const t = (new h.a).retain(l).insert("\n");
                                this.quill.updateContents(t, p.a.sources.USER),
                                this.quill.setSelection(l, p.a.sources.USER)
                            }
                        }
                    }
                },
                "table tab": {
                    key: "Tab",
                    shiftKey: null,
                    format: ["table"],
                    handler(t, e) {
                        const {event: r, line: n} = e
                          , i = n.offset(this.quill.scroll);
                        r.shiftKey ? this.quill.setSelection(i - 1, p.a.sources.USER) : this.quill.setSelection(i + n.length(), p.a.sources.USER)
                    }
                },
                "list autofill": {
                    key: " ",
                    collapsed: !0,
                    format: {
                        list: !1,
                        "code-block": !1,
                        blockquote: !1,
                        header: !1,
                        table: !1
                    },
                    prefix: /^\s*?(\d+\.|-|\*|\[ ?\]|\[x\])$/,
                    handler(t, e) {
                        if (null == this.quill.scroll.query("list"))
                            return !0;
                        const {length: r} = e.prefix
                          , [n,i] = this.quill.getLine(t.index);
                        if (i > r)
                            return !0;
                        let s;
                        switch (e.prefix.trim()) {
                        case "[]":
                        case "[ ]":
                            s = "unchecked";
                            break;
                        case "[x]":
                            s = "checked";
                            break;
                        case "-":
                        case "*":
                            s = "bullet";
                            break;
                        default:
                            s = "ordered"
                        }
                        this.quill.insertText(t.index, " ", p.a.sources.USER),
                        this.quill.history.cutoff();
                        const o = (new h.a).retain(t.index - i).delete(r + 1).retain(n.length() - 2 - i).retain(1, {
                            list: s
                        });
                        return this.quill.updateContents(o, p.a.sources.USER),
                        this.quill.history.cutoff(),
                        this.quill.setSelection(t.index - r, p.a.sources.SILENT),
                        !1
                    }
                },
                "code exit": {
                    key: "Enter",
                    collapsed: !0,
                    format: ["code-block"],
                    prefix: /^$/,
                    suffix: /^\s*$/,
                    handler(t) {
                        const [e,r] = this.quill.getLine(t.index);
                        let n = 2
                          , i = e;
                        for (; null != i && i.length() <= 1 && i.formats()["code-block"]; )
                            if (i = i.prev,
                            (n -= 1) <= 0) {
                                const n = (new h.a).retain(t.index + e.length() - r - 2).retain(1, {
                                    "code-block": null
                                }).delete(1);
                                return this.quill.updateContents(n, p.a.sources.USER),
                                this.quill.setSelection(t.index - 1, p.a.sources.SILENT),
                                !1
                            }
                        return !0
                    }
                },
                "embed left": T("ArrowLeft", !1),
                "embed left shift": T("ArrowLeft", !0),
                "embed right": T("ArrowRight", !1),
                "embed right shift": T("ArrowRight", !0),
                "table down": O(!1),
                "table up": O(!0)
            }
        }
    }
    , function(t, e, r) {
        var n = Array.prototype.slice
          , i = r(35)
          , s = r(36)
          , o = t.exports = function(t, e, r) {
            return r || (r = {}),
            t === e || (t instanceof Date && e instanceof Date ? t.getTime() === e.getTime() : !t || !e || "object" != typeof t && "object" != typeof e ? r.strict ? t === e : t == e : function(t, e, r) {
                var u, h;
                if (l(t) || l(e))
                    return !1;
                if (t.prototype !== e.prototype)
                    return !1;
                if (s(t))
                    return !!s(e) && (t = n.call(t),
                    e = n.call(e),
                    o(t, e, r));
                if (a(t)) {
                    if (!a(e))
                        return !1;
                    if (t.length !== e.length)
                        return !1;
                    for (u = 0; u < t.length; u++)
                        if (t[u] !== e[u])
                            return !1;
                    return !0
                }
                try {
                    var c = i(t)
                      , f = i(e)
                } catch (t) {
                    return !1
                }
                if (c.length != f.length)
                    return !1;
                for (c.sort(),
                f.sort(),
                u = c.length - 1; u >= 0; u--)
                    if (c[u] != f[u])
                        return !1;
                for (u = c.length - 1; u >= 0; u--)
                    if (h = c[u],
                    !o(t[h], e[h], r))
                        return !1;
                return typeof t == typeof e
            }(t, e, r))
        }
        ;
        function l(t) {
            return null === t || void 0 === t
        }
        function a(t) {
            return !(!t || "object" != typeof t || "number" != typeof t.length) && ("function" == typeof t.copy && "function" == typeof t.slice && !(t.length > 0 && "number" != typeof t[0]))
        }
    }
    , function(t, e, r) {
        "use strict";
        var n = r(0)
          , i = r(6);
        class s extends n.EmbedBlot {
            static value() {}
            constructor(t, e, r) {
                super(t, e),
                this.selection = r,
                this.textNode = document.createTextNode(s.CONTENTS),
                this.domNode.appendChild(this.textNode),
                this.savedLength = 0
            }
            detach() {
                null != this.parent && this.parent.removeChild(this)
            }
            format(t, e) {
                if (0 !== this.savedLength)
                    return void super.format(t, e);
                let r = this
                  , i = 0;
                for (; null != r && r.statics.scope !== n.Scope.BLOCK_BLOT; )
                    i += r.offset(r.parent),
                    r = r.parent;
                null != r && (this.savedLength = s.CONTENTS.length,
                r.optimize(),
                r.formatAt(i, s.CONTENTS.length, t, e),
                this.savedLength = 0)
            }
            index(t, e) {
                return t === this.textNode ? 0 : super.index(t, e)
            }
            length() {
                return this.savedLength
            }
            position() {
                return [this.textNode, this.textNode.data.length]
            }
            remove() {
                super.remove(),
                this.parent = null
            }
            restore() {
                if (this.selection.composing || null == this.parent)
                    return null;
                const t = this.selection.getNativeRange();
                let e, r, n;
                for (null != t && t.start.node === this.textNode && t.end.node === this.textNode && ([e,r,n] = [this.textNode, t.start.offset, t.end.offset]); null != this.domNode.lastChild && this.domNode.lastChild !== this.textNode; )
                    this.domNode.parentNode.insertBefore(this.domNode.lastChild, this.domNode);
                if (this.textNode.data !== s.CONTENTS) {
                    const t = this.textNode.data.split(s.CONTENTS).join("");
                    this.next instanceof i.a ? (e = this.next.domNode,
                    this.next.insertAt(0, t),
                    this.textNode.data = s.CONTENTS) : (this.textNode.data = t,
                    this.parent.insertBefore(this.scroll.create(this.textNode), this),
                    this.textNode = document.createTextNode(s.CONTENTS),
                    this.domNode.appendChild(this.textNode))
                }
                return this.remove(),
                null != r ? ([r,n] = [r, n].map(t=>Math.max(0, Math.min(e.data.length, t - 1))),
                {
                    startNode: e,
                    startOffset: r,
                    endNode: e,
                    endOffset: n
                }) : null
            }
            update(t, e) {
                if (t.some(t=>"characterData" === t.type && t.target === this.textNode)) {
                    const t = this.restore();
                    t && (e.range = t)
                }
            }
            value() {
                return ""
            }
        }
        s.blotName = "cursor",
        s.className = "ql-cursor",
        s.tagName = "span",
        s.CONTENTS = "\ufeff",
        e.a = s
    }
    , function(t, e, r) {
        var n = r(16)
          , i = r(5)
          , s = {
            attributes: {
                compose: function(t, e, r) {
                    "object" != typeof t && (t = {}),
                    "object" != typeof e && (e = {});
                    var n = i(!0, {}, e);
                    for (var s in r || (n = Object.keys(n).reduce(function(t, e) {
                        return null != n[e] && (t[e] = n[e]),
                        t
                    }, {})),
                    t)
                        void 0 !== t[s] && void 0 === e[s] && (n[s] = t[s]);
                    return Object.keys(n).length > 0 ? n : void 0
                },
                diff: function(t, e) {
                    "object" != typeof t && (t = {}),
                    "object" != typeof e && (e = {});
                    var r = Object.keys(t).concat(Object.keys(e)).reduce(function(r, i) {
                        return n(t[i], e[i]) || (r[i] = void 0 === e[i] ? null : e[i]),
                        r
                    }, {});
                    return Object.keys(r).length > 0 ? r : void 0
                },
                transform: function(t, e, r) {
                    if ("object" != typeof t)
                        return e;
                    if ("object" == typeof e) {
                        if (!r)
                            return e;
                        var n = Object.keys(e).reduce(function(r, n) {
                            return void 0 === t[n] && (r[n] = e[n]),
                            r
                        }, {});
                        return Object.keys(n).length > 0 ? n : void 0
                    }
                }
            },
            iterator: function(t) {
                return new o(t)
            },
            length: function(t) {
                return "number" == typeof t.delete ? t.delete : "number" == typeof t.retain ? t.retain : "string" == typeof t.insert ? t.insert.length : 1
            }
        };
        function o(t) {
            this.ops = t,
            this.index = 0,
            this.offset = 0
        }
        o.prototype.hasNext = function() {
            return this.peekLength() < 1 / 0
        }
        ,
        o.prototype.next = function(t) {
            t || (t = 1 / 0);
            var e = this.ops[this.index];
            if (e) {
                var r = this.offset
                  , n = s.length(e);
                if (t >= n - r ? (t = n - r,
                this.index += 1,
                this.offset = 0) : this.offset += t,
                "number" == typeof e.delete)
                    return {
                        delete: t
                    };
                var i = {};
                return e.attributes && (i.attributes = e.attributes),
                "number" == typeof e.retain ? i.retain = t : "string" == typeof e.insert ? i.insert = e.insert.substr(r, t) : i.insert = e.insert,
                i
            }
            return {
                retain: 1 / 0
            }
        }
        ,
        o.prototype.peek = function() {
            return this.ops[this.index]
        }
        ,
        o.prototype.peekLength = function() {
            return this.ops[this.index] ? s.length(this.ops[this.index]) - this.offset : 1 / 0
        }
        ,
        o.prototype.peekType = function() {
            return this.ops[this.index] ? "number" == typeof this.ops[this.index].delete ? "delete" : "number" == typeof this.ops[this.index].retain ? "retain" : "insert" : "retain"
        }
        ,
        t.exports = s
    }
    , function(t, e, r) {
        "use strict";
        r.d(e, "a", function() {
            return i
        }),
        r.d(e, "b", function() {
            return s
        }),
        r.d(e, "c", function() {
            return o
        });
        var n = r(0);
        class i extends n.StyleAttributor {
            value(t) {
                let e = super.value(t);
                if (!e.startsWith("rgb("))
                    return e;
                return `#${(e = e.replace(/^[^\d]+/, "").replace(/[^\d]+$/, "")).split(",").map(t=>`00${parseInt(t, 10).toString(16)}`.slice(-2)).join("")}`
            }
        }
        const s = new n.ClassAttributor("color","ql-color",{
            scope: n.Scope.INLINE
        })
          , o = new i("color","color",{
            scope: n.Scope.INLINE
        })
    }
    , function(t, e, r) {
        "use strict";
        r.d(e, "a", function() {
            return c
        }),
        r.d(e, "b", function() {
            return f
        });
        var n = r(0)
          , i = r(13)
          , s = r.n(i)
          , o = r(16)
          , l = r.n(o)
          , a = r(3)
          , u = r(11);
        const h = Object(u.a)("quill:selection");
        class c {
            constructor(t, e=0) {
                this.index = t,
                this.length = e
            }
        }
        class f {
            constructor(t, e) {
                this.emitter = e,
                this.scroll = t,
                this.composing = !1,
                this.mouseDown = !1,
                this.root = this.scroll.domNode,
                this.cursor = this.scroll.create("cursor", this),
                this.savedRange = new c(0,0),
                this.lastRange = this.savedRange,
                this.handleComposition(),
                this.handleDragging(),
                this.emitter.listenDOM("selectionchange", document, ()=>{
                    this.mouseDown || setTimeout(this.update.bind(this, a.a.sources.USER), 1)
                }
                ),
                this.emitter.on(a.a.events.SCROLL_BEFORE_UPDATE, ()=>{
                    if (!this.hasFocus())
                        return;
                    const t = this.getNativeRange();
                    null != t && t.start.node !== this.cursor.textNode && this.emitter.once(a.a.events.SCROLL_UPDATE, ()=>{
                        try {
                            this.setNativeRange(t.start.node, t.start.offset, t.end.node, t.end.offset),
                            this.update(a.a.sources.SILENT)
                        } catch (t) {}
                    }
                    )
                }
                ),
                this.emitter.on(a.a.events.SCROLL_OPTIMIZE, (t,e)=>{
                    if (e.range) {
                        const {startNode: t, startOffset: r, endNode: n, endOffset: i} = e.range;
                        this.setNativeRange(t, r, n, i),
                        this.update(a.a.sources.SILENT)
                    }
                }
                ),
                this.update(a.a.sources.SILENT)
            }
            handleComposition() {
                this.root.addEventListener("compositionstart", ()=>{
                    this.composing = !0
                }
                ),
                this.root.addEventListener("compositionend", ()=>{
                    if (this.composing = !1,
                    this.cursor.parent) {
                        const t = this.cursor.restore();
                        if (!t)
                            return;
                        setTimeout(()=>{
                            this.setNativeRange(t.startNode, t.startOffset, t.endNode, t.endOffset)
                        }
                        , 1)
                    }
                }
                )
            }
            handleDragging() {
                this.emitter.listenDOM("mousedown", document.body, ()=>{
                    this.mouseDown = !0
                }
                ),
                this.emitter.listenDOM("mouseup", document.body, ()=>{
                    this.mouseDown = !1,
                    this.update(a.a.sources.USER)
                }
                )
            }
            focus() {
                this.hasFocus() || (this.root.focus(),
                this.setRange(this.savedRange))
            }
            format(t, e) {
                this.scroll.update();
                const r = this.getNativeRange();
                if (null != r && r.native.collapsed && !this.scroll.query(t, n.Scope.BLOCK)) {
                    if (r.start.node !== this.cursor.textNode) {
                        const t = this.scroll.find(r.start.node, !1);
                        if (null == t)
                            return;
                        if (t instanceof n.LeafBlot) {
                            const e = t.split(r.start.offset);
                            t.parent.insertBefore(this.cursor, e)
                        } else
                            t.insertBefore(this.cursor, r.start.node);
                        this.cursor.attach()
                    }
                    this.cursor.format(t, e),
                    this.scroll.optimize(),
                    this.setNativeRange(this.cursor.textNode, this.cursor.textNode.data.length),
                    this.update()
                }
            }
            getBounds(t, e=0) {
                const r = this.scroll.length();
                let n;
                t = Math.min(t, r - 1),
                e = Math.min(t + e, r - 1) - t;
                let[i,s] = this.scroll.leaf(t);
                if (null == i)
                    return null;
                [n,s] = i.position(s, !0);
                const o = document.createRange();
                if (e > 0)
                    return o.setStart(n, s),
                    [i,s] = this.scroll.leaf(t + e),
                    null == i ? null : ([n,s] = i.position(s, !0),
                    o.setEnd(n, s),
                    o.getBoundingClientRect());
                let l, a = "left";
                return n instanceof Text ? (s < n.data.length ? (o.setStart(n, s),
                o.setEnd(n, s + 1)) : (o.setStart(n, s - 1),
                o.setEnd(n, s),
                a = "right"),
                l = o.getBoundingClientRect()) : (l = i.domNode.getBoundingClientRect(),
                s > 0 && (a = "right")),
                {
                    bottom: l.top + l.height,
                    height: l.height,
                    left: l[a],
                    right: l[a],
                    top: l.top,
                    width: 0
                }
            }
            getNativeRange() {
                const t = document.getSelection();
                if (null == t || t.rangeCount <= 0)
                    return null;
                const e = t.getRangeAt(0);
                if (null == e)
                    return null;
                const r = this.normalizeNative(e);
                return h.info("getNativeRange", r),
                r
            }
            getRange() {
                const t = this.getNativeRange();
                return null == t ? [null, null] : [this.normalizedToRange(t), t]
            }
            hasFocus() {
                return document.activeElement === this.root || d(this.root, document.activeElement)
            }
            normalizedToRange(t) {
                const e = [[t.start.node, t.start.offset]];
                t.native.collapsed || e.push([t.end.node, t.end.offset]);
                const r = e.map(t=>{
                    const [e,r] = t
                      , i = this.scroll.find(e, !0)
                      , s = i.offset(this.scroll);
                    return 0 === r ? s : i instanceof n.ContainerBlot ? s + i.length() : s + i.index(e, r)
                }
                )
                  , i = Math.min(Math.max(...r), this.scroll.length() - 1)
                  , s = Math.min(i, ...r);
                return new c(s,i - s)
            }
            normalizeNative(t) {
                if (!d(this.root, t.startContainer) || !t.collapsed && !d(this.root, t.endContainer))
                    return null;
                const e = {
                    start: {
                        node: t.startContainer,
                        offset: t.startOffset
                    },
                    end: {
                        node: t.endContainer,
                        offset: t.endOffset
                    },
                    native: t
                };
                return [e.start, e.end].forEach(t=>{
                    let {node: e, offset: r} = t;
                    for (; !(e instanceof Text) && e.childNodes.length > 0; )
                        if (e.childNodes.length > r)
                            e = e.childNodes[r],
                            r = 0;
                        else {
                            if (e.childNodes.length !== r)
                                break;
                            r = (e = e.lastChild)instanceof Text ? e.data.length : e.childNodes.length > 0 ? e.childNodes.length : e.childNodes.length + 1
                        }
                    t.node = e,
                    t.offset = r
                }
                ),
                e
            }
            rangeToNative(t) {
                const e = t.collapsed ? [t.index] : [t.index, t.index + t.length]
                  , r = []
                  , n = this.scroll.length();
                return e.forEach((t,e)=>{
                    t = Math.min(n - 1, t);
                    const [i,s] = this.scroll.leaf(t)
                      , [o,l] = i.position(s, 0 !== e);
                    r.push(o, l)
                }
                ),
                r.length < 2 ? r.concat(r) : r
            }
            scrollIntoView(t) {
                const e = this.lastRange;
                if (null == e)
                    return;
                const r = this.getBounds(e.index, e.length);
                if (null == r)
                    return;
                const n = this.scroll.length() - 1
                  , [i] = this.scroll.line(Math.min(e.index, n));
                let s = i;
                if (e.length > 0 && ([s] = this.scroll.line(Math.min(e.index + e.length, n))),
                null == i || null == s)
                    return;
                const o = t.getBoundingClientRect();
                r.top < o.top ? t.scrollTop -= o.top - r.top : r.bottom > o.bottom && (t.scrollTop += r.bottom - o.bottom)
            }
            setNativeRange(t, e, r=t, n=e, i=!1) {
                if (h.info("setNativeRange", t, e, r, n),
                null != t && (null == this.root.parentNode || null == t.parentNode || null == r.parentNode))
                    return;
                const s = document.getSelection();
                if (null != s)
                    if (null != t) {
                        this.hasFocus() || this.root.focus();
                        const {native: o} = this.getNativeRange() || {};
                        if (null == o || i || t !== o.startContainer || e !== o.startOffset || r !== o.endContainer || n !== o.endOffset) {
                            "BR" === t.tagName && (e = Array.from(t.parentNode.childNodes).indexOf(t),
                            t = t.parentNode),
                            "BR" === r.tagName && (n = Array.from(r.parentNode.childNodes).indexOf(r),
                            r = r.parentNode);
                            const i = document.createRange();
                            i.setStart(t, e),
                            i.setEnd(r, n),
                            s.removeAllRanges(),
                            s.addRange(i)
                        }
                    } else
                        s.removeAllRanges(),
                        this.root.blur()
            }
            setRange(t, e=!1, r=a.a.sources.API) {
                if ("string" == typeof e && (r = e,
                e = !1),
                h.info("setRange", t),
                null != t) {
                    const r = this.rangeToNative(t);
                    this.setNativeRange(...r, e)
                } else
                    this.setNativeRange(null);
                this.update(r)
            }
            update(t=a.a.sources.USER) {
                const e = this.lastRange
                  , [r,n] = this.getRange();
                if (this.lastRange = r,
                null != this.lastRange && (this.savedRange = this.lastRange),
                !l()(e, this.lastRange)) {
                    !this.composing && null != n && n.native.collapsed && n.start.node !== this.cursor.textNode && this.cursor.restore();
                    const r = [a.a.events.SELECTION_CHANGE, s()(this.lastRange), s()(e), t];
                    this.emitter.emit(a.a.events.EDITOR_CHANGE, ...r),
                    t !== a.a.sources.SILENT && this.emitter.emit(...r)
                }
            }
        }
        function d(t, e) {
            try {
                e.parentNode
            } catch (t) {
                return !1
            }
            return t.contains(e)
        }
    }
    , function(t, e, r) {
        "use strict";
        r.d(e, "a", function() {
            return s
        }),
        r.d(e, "b", function() {
            return o
        }),
        r.d(e, "c", function() {
            return l
        });
        var n = r(0);
        const i = {
            scope: n.Scope.BLOCK,
            whitelist: ["rtl"]
        }
          , s = new n.Attributor("direction","dir",i)
          , o = new n.ClassAttributor("direction","ql-direction",i)
          , l = new n.StyleAttributor("direction","direction",i)
    }
    , function(t, e, r) {
        "use strict";
        e.a = new WeakMap
    }
    , function(t, e, r) {
        "use strict";
        r.d(e, "a", function() {
            return s
        }),
        r.d(e, "b", function() {
            return o
        }),
        r.d(e, "c", function() {
            return l
        });
        var n = r(0);
        const i = {
            scope: n.Scope.BLOCK,
            whitelist: ["right", "center", "justify"]
        }
          , s = new n.Attributor("align","align",i)
          , o = new n.ClassAttributor("align","ql-align",i)
          , l = new n.StyleAttributor("align","text-align",i)
    }
    , function(t, e, r) {
        "use strict";
        class n {
            constructor(t, e) {
                this.quill = t,
                this.options = e,
                this.modules = {}
            }
            init() {
                Object.keys(this.options.modules).forEach(t=>{
                    null == this.modules[t] && this.addModule(t)
                }
                )
            }
            addModule(t) {
                const e = this.quill.constructor.import(`modules/${t}`);
                return this.modules[t] = new e(this.quill,this.options.modules[t] || {}),
                this.modules[t]
            }
        }
        n.DEFAULTS = {
            modules: {}
        },
        n.themes = {
            default: n
        },
        e.a = n
    }
    , , function(t, e, r) {
        "use strict";
        r.d(e, "a", function() {
            return s
        }),
        r.d(e, "b", function() {
            return o
        });
        var n = r(0)
          , i = r(19);
        const s = new n.ClassAttributor("background","ql-bg",{
            scope: n.Scope.INLINE
        })
          , o = new i.a("background","background-color",{
            scope: n.Scope.INLINE
        })
    }
    , function(t, e, r) {
        "use strict";
        r.d(e, "b", function() {
            return o
        }),
        r.d(e, "a", function() {
            return s
        });
        var n = r(0);
        const i = {
            scope: n.Scope.INLINE,
            whitelist: ["serif", "monospace"]
        }
          , s = new n.ClassAttributor("font","ql-font",i);
        const o = new class extends n.StyleAttributor {
            value(t) {
                return super.value(t).replace(/["']/g, "")
            }
        }
        ("font","font-family",i)
    }
    , function(t, e, r) {
        "use strict";
        r.d(e, "a", function() {
            return i
        }),
        r.d(e, "b", function() {
            return s
        });
        var n = r(0);
        const i = new n.ClassAttributor("size","ql-size",{
            scope: n.Scope.INLINE,
            whitelist: ["small", "large", "huge"]
        })
          , s = new n.StyleAttributor("size","font-size",{
            scope: n.Scope.INLINE,
            whitelist: ["10px", "18px", "32px"]
        })
    }
    , function(t, e, r) {
        "use strict";
        r.r(e);
        var n = r(9)
          , i = r(5)
          , s = r.n(i)
          , o = r(15);
        n.a.register({
            "modules/keyboard": class extends o.a {
                addBinding(t, e={}, r={}, n=!1) {
                    if (super.addBinding(t, e, r),
                    n) {
                        let n = Object(o.b)(t);
                        if (null == n)
                            return;
                        (Array.isArray(n.key) ? n.key : [n.key]).forEach(t=>{
                            const i = s()({}, n, {
                                key: t
                            }, e, r);
                            this.bindings[i.key].unshift(this.bindings[i.key].pop())
                        }
                        )
                    }
                }
            }
        }, !0);
        e.default = n.a
    }
    , function(t, e, r) {
        "use strict";
        var n = r(0)
          , i = r(6);
        const s = "\ufeff";
        e.a = class extends n.EmbedBlot {
            constructor(t, e) {
                super(t, e),
                this.contentNode = document.createElement("span"),
                this.contentNode.setAttribute("contenteditable", !1),
                Array.from(this.domNode.childNodes).forEach(t=>{
                    this.contentNode.appendChild(t)
                }
                ),
                this.leftGuard = document.createTextNode(s),
                this.rightGuard = document.createTextNode(s),
                this.domNode.appendChild(this.leftGuard),
                this.domNode.appendChild(this.contentNode),
                this.domNode.appendChild(this.rightGuard)
            }
            index(t, e) {
                return t === this.leftGuard ? 0 : t === this.rightGuard ? 1 : super.index(t, e)
            }
            restore(t) {
                let e, r;
                const n = t.data.split(s).join("");
                if (t === this.leftGuard)
                    if (this.prev instanceof i.a) {
                        const t = this.prev.length();
                        this.prev.insertAt(t, n),
                        e = {
                            startNode: this.prev.domNode,
                            startOffset: t + n.length
                        }
                    } else
                        r = document.createTextNode(n),
                        this.parent.insertBefore(this.scroll.create(r), this),
                        e = {
                            startNode: r,
                            startOffset: n.length
                        };
                else
                    t === this.rightGuard && (this.next instanceof i.a ? (this.next.insertAt(0, n),
                    e = {
                        startNode: this.next.domNode,
                        startOffset: n.length
                    }) : (r = document.createTextNode(n),
                    this.parent.insertBefore(this.scroll.create(r), this.next),
                    e = {
                        startNode: r,
                        startOffset: n.length
                    }));
                return t.data = s,
                e
            }
            update(t, e) {
                t.forEach(t=>{
                    if ("characterData" === t.type && (t.target === this.leftGuard || t.target === this.rightGuard)) {
                        const r = this.restore(t.target);
                        r && (e.range = r)
                    }
                }
                )
            }
        }
    }
    , function(t, e, r) {
        "use strict";
        r.d(e, "a", function() {
            return x
        }),
        r.d(e, "b", function() {
            return O
        });
        var n = r(5)
          , i = r.n(n)
          , s = r(2)
          , o = r.n(s)
          , l = r(0)
          , a = r(1)
          , u = r(11)
          , h = r(8)
          , c = r(23)
          , f = r(26)
          , d = r(14)
          , p = r(19)
          , g = r(21)
          , m = r(27)
          , y = r(28);
        const b = Object(u.a)("quill:clipboard")
          , v = [[Node.TEXT_NODE, function(t, e) {
            let r = t.data;
            if ("O:P" === t.parentNode.tagName)
                return e.insert(r.trim());
            if (0 === r.trim().length && null == t.parentNode)
                return e;
            if (!function t(e) {
                if (null == e)
                    return !1;
                L.has(e) || ("PRE" === e.tagName ? L.set(e, !0) : L.set(e, t(e.parentNode)));
                return L.get(e)
            }(t)) {
                const e = (t,e)=>{
                    const r = e.replace(/[^\u00a0]/g, "");
                    return r.length < 1 && t ? " " : r
                }
                ;
                r = (r = r.replace(/\r\n/g, " ").replace(/\n/g, " ")).replace(/\s\s+/g, e.bind(e, !0)),
                (null == t.previousSibling && T(t.parentNode) || null != t.previousSibling && T(t.previousSibling)) && (r = r.replace(/^\s+/, e.bind(e, !1))),
                (null == t.nextSibling && T(t.parentNode) || null != t.nextSibling && T(t.nextSibling)) && (r = r.replace(/\s+$/, e.bind(e, !1)))
            }
            return e.insert(r)
        }
        ], [Node.TEXT_NODE, k], ["br", function(t, e) {
            w(e, "\n") || e.insert("\n");
            return e
        }
        ], [Node.ELEMENT_NODE, k], [Node.ELEMENT_NODE, function(t, e, r) {
            const n = r.query(t);
            if (null == n)
                return e;
            if (n.prototype instanceof l.EmbedBlot) {
                const e = {}
                  , i = n.value(t);
                if (null != i)
                    return e[n.blotName] = i,
                    (new o.a).insert(e, n.formats(t, r))
            } else if ("function" == typeof n.formats)
                return A(e, n.blotName, n.formats(t, r));
            return e
        }
        ], [Node.ELEMENT_NODE, function(t, e, r) {
            const n = l.Attributor.keys(t)
              , i = l.ClassAttributor.keys(t)
              , s = l.StyleAttributor.keys(t)
              , o = {};
            if (n.concat(i).concat(s).forEach(e=>{
                let n = r.query(e, l.Scope.ATTRIBUTE);
                null != n && (o[n.attrName] = n.value(t),
                o[n.attrName]) || (null == (n = N[e]) || n.attrName !== e && n.keyName !== e || (o[n.attrName] = n.value(t) || void 0),
                null == (n = E[e]) || n.attrName !== e && n.keyName !== e || (n = E[e],
                o[n.attrName] = n.value(t) || void 0))
            }
            ),
            Object.keys(o).length > 0)
                return A(e, o);
            return e
        }
        ], [Node.ELEMENT_NODE, function(t, e) {
            const r = {}
              , n = t.style || {};
            "italic" === n.fontStyle && (r.italic = !0);
            (n.fontWeight.startsWith("bold") || parseInt(n.fontWeight, 10) >= 700) && (r.bold = !0);
            Object.keys(r).length > 0 && (e = A(e, r));
            if (parseFloat(n.textIndent || 0) > 0)
                return (new o.a).insert("\t").concat(e);
            return e
        }
        ], ["li", function(t, e, r) {
            const n = r.query(t);
            if (null == n || "list" !== n.blotName || !w(e, "\n"))
                return e;
            let i = -1
              , s = t.parentNode;
            for (; null != s; )
                ["OL", "UL"].includes(s.tagName) && (i += 1),
                s = s.parentNode;
            return i <= 0 ? e : e.compose((new o.a).retain(e.length() - 1).retain(1, {
                indent: i
            }))
        }
        ], ["ol, ul", function(t, e) {
            const r = "OL" === t.tagName ? "ordered" : "bullet";
            return A(e, "list", r)
        }
        ], ["pre", function(t, e, r) {
            const n = r.query("code-block")
              , i = !n || n.formats(t, r);
            return A(e, "code-block", i)
        }
        ], ["tr", function(t, e) {
            const r = "TABLE" === t.parentNode.tagName ? t.parentNode : t.parentNode.parentNode
              , n = Array.from(r.querySelectorAll("tr")).indexOf(t) + 1;
            return A(e, "table", n)
        }
        ], ["b", S.bind(S, "bold")], ["i", S.bind(S, "italic")], ["style", function() {
            return new o.a
        }
        ]]
          , N = [c.a, g.a].reduce((t,e)=>(t[e.keyName] = e,
        t), {})
          , E = [c.c, f.b, p.c, g.c, m.b, y.b].reduce((t,e)=>(t[e.keyName] = e,
        t), {});
        class x extends h.a {
            constructor(t, e) {
                super(t, e),
                this.quill.root.addEventListener("copy", this.onCaptureCopy.bind(this)),
                this.quill.root.addEventListener("cut", this.onCaptureCut.bind(this)),
                this.quill.root.addEventListener("paste", this.onCapturePaste.bind(this)),
                this.matchers = [],
                v.concat(this.options.matchers).forEach(([t,e])=>{
                    this.addMatcher(t, e)
                }
                )
            }
            addMatcher(t, e) {
                this.matchers.push([t, e])
            }
            convert({html: t, text: e}) {
                const r = this.quill.getFormat(this.quill.selection.savedRange.index);
                if (r[d.c.blotName])
                    return (new o.a).insert(e, {
                        [d.c.blotName]: r[d.c.blotName]
                    });
                if (!t)
                    return (new o.a).insert(e || "");
                const n = this.quill.root.ownerDocument.createElement("div");
                n.innerHTML = t.replace(/>\r?\n +</g, "><");
                const i = new WeakMap
                  , [s,l] = this.prepareMatching(n, i)
                  , a = O(this.quill.scroll, n, s, l, i);
                return w(a, "\n") && null == a.ops[a.ops.length - 1].attributes ? a.compose((new o.a).retain(a.length() - 1).delete(1)) : a
            }
            dangerouslyPasteHTML(t, e, r=a.a.sources.API) {
                if ("string" == typeof t) {
                    const r = this.convert({
                        html: t,
                        text: ""
                    });
                    this.quill.setContents(r, e),
                    this.quill.setSelection(0, a.a.sources.SILENT)
                } else {
                    const n = this.convert({
                        html: e,
                        text: ""
                    });
                    this.quill.updateContents((new o.a).retain(t).concat(n), r),
                    this.quill.setSelection(t + n.length(), a.a.sources.SILENT)
                }
            }
            onCaptureCopy(t) {
                if (t.defaultPrevented)
                    return;
                this.quill.update();
                const [e] = this.quill.selection.getRange();
                e && (this.onCopy(t, e),
                t.preventDefault())
            }
            onCaptureCut(t) {
                if (t.defaultPrevented)
                    return;
                this.quill.update();
                const [e] = this.quill.selection.getRange();
                e && (this.onCopy(t, e),
                this.quill.deleteText(e, a.a.sources.USER),
                t.preventDefault())
            }
            onCapturePaste(t) {
                if (t.defaultPrevented || !this.quill.isEnabled())
                    return;
                const e = this.quill.getSelection(!0)
                  , r = Array.from(t.clipboardData.files || []);
                r.length > 0 ? this.quill.uploader.upload(e, r) : this.onPaste(t, e),
                t.preventDefault()
            }
            onCopy(t, e) {
                const r = this.quill.getText(e)
                  , n = this.quill.getSemanticHTML(e);
                t.clipboardData.setData("text/plain", r),
                t.clipboardData.setData("text/html", n)
            }
            onPaste(t, e) {
                const r = t.clipboardData.getData("text/html")
                  , n = t.clipboardData.getData("text/plain")
                  , i = this.convert({
                    text: n,
                    html: r
                });
                b.log("onPaste", i, {
                    text: n,
                    html: r
                });
                const s = (new o.a).retain(e.index).delete(e.length).concat(i);
                this.quill.updateContents(s, a.a.sources.USER),
                this.quill.setSelection(s.length() - e.length, a.a.sources.SILENT),
                this.quill.scrollIntoView()
            }
            prepareMatching(t, e) {
                const r = []
                  , n = [];
                return this.matchers.forEach(i=>{
                    const [s,o] = i;
                    switch (s) {
                    case Node.TEXT_NODE:
                        n.push(o);
                        break;
                    case Node.ELEMENT_NODE:
                        r.push(o);
                        break;
                    default:
                        Array.from(t.querySelectorAll(s)).forEach(t=>{
                            if (e.has(t)) {
                                e.get(t).push(o)
                            } else
                                e.set(t, [o])
                        }
                        )
                    }
                }
                ),
                [r, n]
            }
        }
        function A(t, e, r) {
            return "object" == typeof e ? Object.keys(e).reduce((t,r)=>A(t, r, e[r]), t) : t.reduce((t,n)=>n.attributes && n.attributes[e] ? t.push(n) : t.insert(n.insert, i()({}, {
                [e]: r
            }, n.attributes)), new o.a)
        }
        function w(t, e) {
            let r = "";
            for (let n = t.ops.length - 1; n >= 0 && r.length < e.length; --n) {
                const e = t.ops[n];
                if ("string" != typeof e.insert)
                    break;
                r = e.insert + r
            }
            return r.slice(-1 * e.length) === e
        }
        function T(t) {
            return 0 !== t.childNodes.length && ["address", "article", "blockquote", "canvas", "dd", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "iframe", "li", "main", "nav", "ol", "output", "p", "pre", "section", "table", "td", "tr", "ul", "video"].includes(t.tagName.toLowerCase())
        }
        x.DEFAULTS = {
            matchers: []
        };
        const L = new WeakMap;
        function O(t, e, r, n, i) {
            return e.nodeType === e.TEXT_NODE ? n.reduce((r,n)=>n(e, r, t), new o.a) : e.nodeType === e.ELEMENT_NODE ? Array.from(e.childNodes || []).reduce((s,o)=>{
                let l = O(t, o, r, n, i);
                return o.nodeType === e.ELEMENT_NODE && (l = r.reduce((e,r)=>r(o, e, t), l),
                l = (i.get(o) || []).reduce((e,r)=>r(o, e, t), l)),
                s.concat(l)
            }
            , new o.a) : new o.a
        }
        function S(t, e, r) {
            return A(r, t, !0)
        }
        function k(t, e) {
            return w(e, "\n") || (T(t) || e.length() > 0 && t.nextSibling && T(t.nextSibling)) && e.insert("\n"),
            e
        }
    }
    , function(t, e, r) {
        "use strict";
        var n = Object.prototype.hasOwnProperty
          , i = "~";
        function s() {}
        function o(t, e, r, n, s) {
            if ("function" != typeof r)
                throw new TypeError("The listener must be a function");
            var o = new function(t, e, r) {
                this.fn = t,
                this.context = e,
                this.once = r || !1
            }
            (r,n || t,s)
              , l = i ? i + e : e;
            return t._events[l] ? t._events[l].fn ? t._events[l] = [t._events[l], o] : t._events[l].push(o) : (t._events[l] = o,
            t._eventsCount++),
            t
        }
        function l(t, e) {
            0 == --t._eventsCount ? t._events = new s : delete t._events[e]
        }
        function a() {
            this._events = new s,
            this._eventsCount = 0
        }
        Object.create && (s.prototype = Object.create(null),
        (new s).__proto__ || (i = !1)),
        a.prototype.eventNames = function() {
            var t, e, r = [];
            if (0 === this._eventsCount)
                return r;
            for (e in t = this._events)
                n.call(t, e) && r.push(i ? e.slice(1) : e);
            return Object.getOwnPropertySymbols ? r.concat(Object.getOwnPropertySymbols(t)) : r
        }
        ,
        a.prototype.listeners = function(t) {
            var e = i ? i + t : t
              , r = this._events[e];
            if (!r)
                return [];
            if (r.fn)
                return [r.fn];
            for (var n = 0, s = r.length, o = new Array(s); n < s; n++)
                o[n] = r[n].fn;
            return o
        }
        ,
        a.prototype.listenerCount = function(t) {
            var e = i ? i + t : t
              , r = this._events[e];
            return r ? r.fn ? 1 : r.length : 0
        }
        ,
        a.prototype.emit = function(t, e, r, n, s, o) {
            var l = i ? i + t : t;
            if (!this._events[l])
                return !1;
            var a, u, h = this._events[l], c = arguments.length;
            if (h.fn) {
                switch (h.once && this.removeListener(t, h.fn, void 0, !0),
                c) {
                case 1:
                    return h.fn.call(h.context),
                    !0;
                case 2:
                    return h.fn.call(h.context, e),
                    !0;
                case 3:
                    return h.fn.call(h.context, e, r),
                    !0;
                case 4:
                    return h.fn.call(h.context, e, r, n),
                    !0;
                case 5:
                    return h.fn.call(h.context, e, r, n, s),
                    !0;
                case 6:
                    return h.fn.call(h.context, e, r, n, s, o),
                    !0
                }
                for (u = 1,
                a = new Array(c - 1); u < c; u++)
                    a[u - 1] = arguments[u];
                h.fn.apply(h.context, a)
            } else {
                var f, d = h.length;
                for (u = 0; u < d; u++)
                    switch (h[u].once && this.removeListener(t, h[u].fn, void 0, !0),
                    c) {
                    case 1:
                        h[u].fn.call(h[u].context);
                        break;
                    case 2:
                        h[u].fn.call(h[u].context, e);
                        break;
                    case 3:
                        h[u].fn.call(h[u].context, e, r);
                        break;
                    case 4:
                        h[u].fn.call(h[u].context, e, r, n);
                        break;
                    default:
                        if (!a)
                            for (f = 1,
                            a = new Array(c - 1); f < c; f++)
                                a[f - 1] = arguments[f];
                        h[u].fn.apply(h[u].context, a)
                    }
            }
            return !0
        }
        ,
        a.prototype.on = function(t, e, r) {
            return o(this, t, e, r, !1)
        }
        ,
        a.prototype.once = function(t, e, r) {
            return o(this, t, e, r, !0)
        }
        ,
        a.prototype.removeListener = function(t, e, r, n) {
            var s = i ? i + t : t;
            if (!this._events[s])
                return this;
            if (!e)
                return l(this, s),
                this;
            var o = this._events[s];
            if (o.fn)
                o.fn !== e || n && !o.once || r && o.context !== r || l(this, s);
            else {
                for (var a = 0, u = [], h = o.length; a < h; a++)
                    (o[a].fn !== e || n && !o[a].once || r && o[a].context !== r) && u.push(o[a]);
                u.length ? this._events[s] = 1 === u.length ? u[0] : u : l(this, s)
            }
            return this
        }
        ,
        a.prototype.removeAllListeners = function(t) {
            var e;
            return t ? (e = i ? i + t : t,
            this._events[e] && l(this, e)) : (this._events = new s,
            this._eventsCount = 0),
            this
        }
        ,
        a.prototype.off = a.prototype.removeListener,
        a.prototype.addListener = a.prototype.on,
        a.prefixed = i,
        a.EventEmitter = a,
        t.exports = a
    }
    , , function(t, e) {
        var r = -1
          , n = 1
          , i = 0;
        function s(t, e, u) {
            if (t == e)
                return t ? [[i, t]] : [];
            (u < 0 || t.length < u) && (u = null);
            var c = l(t, e)
              , f = t.substring(0, c);
            c = a(t = t.substring(c), e = e.substring(c));
            var d = t.substring(t.length - c)
              , p = function(t, e) {
                var u;
                if (!t)
                    return [[n, e]];
                if (!e)
                    return [[r, t]];
                var h = t.length > e.length ? t : e
                  , c = t.length > e.length ? e : t
                  , f = h.indexOf(c);
                if (-1 != f)
                    return u = [[n, h.substring(0, f)], [i, c], [n, h.substring(f + c.length)]],
                    t.length > e.length && (u[0][0] = u[2][0] = r),
                    u;
                if (1 == c.length)
                    return [[r, t], [n, e]];
                var d = function(t, e) {
                    var r = t.length > e.length ? t : e
                      , n = t.length > e.length ? e : t;
                    if (r.length < 4 || 2 * n.length < r.length)
                        return null;
                    function i(t, e, r) {
                        for (var n, i, s, o, u = t.substring(r, r + Math.floor(t.length / 4)), h = -1, c = ""; -1 != (h = e.indexOf(u, h + 1)); ) {
                            var f = l(t.substring(r), e.substring(h))
                              , d = a(t.substring(0, r), e.substring(0, h));
                            c.length < d + f && (c = e.substring(h - d, h) + e.substring(h, h + f),
                            n = t.substring(0, r - d),
                            i = t.substring(r + f),
                            s = e.substring(0, h - d),
                            o = e.substring(h + f))
                        }
                        return 2 * c.length >= t.length ? [n, i, s, o, c] : null
                    }
                    var s, o, u, h, c, f = i(r, n, Math.ceil(r.length / 4)), d = i(r, n, Math.ceil(r.length / 2));
                    if (!f && !d)
                        return null;
                    s = d ? f && f[4].length > d[4].length ? f : d : f;
                    t.length > e.length ? (o = s[0],
                    u = s[1],
                    h = s[2],
                    c = s[3]) : (h = s[0],
                    c = s[1],
                    o = s[2],
                    u = s[3]);
                    var p = s[4];
                    return [o, u, h, c, p]
                }(t, e);
                if (d) {
                    var p = d[0]
                      , g = d[1]
                      , m = d[2]
                      , y = d[3]
                      , b = d[4]
                      , v = s(p, m)
                      , N = s(g, y);
                    return v.concat([[i, b]], N)
                }
                return function(t, e) {
                    for (var i = t.length, s = e.length, l = Math.ceil((i + s) / 2), a = l, u = 2 * l, h = new Array(u), c = new Array(u), f = 0; f < u; f++)
                        h[f] = -1,
                        c[f] = -1;
                    h[a + 1] = 0,
                    c[a + 1] = 0;
                    for (var d = i - s, p = d % 2 != 0, g = 0, m = 0, y = 0, b = 0, v = 0; v < l; v++) {
                        for (var N = -v + g; N <= v - m; N += 2) {
                            for (var E = a + N, x = (O = N == -v || N != v && h[E - 1] < h[E + 1] ? h[E + 1] : h[E - 1] + 1) - N; O < i && x < s && t.charAt(O) == e.charAt(x); )
                                O++,
                                x++;
                            if (h[E] = O,
                            O > i)
                                m += 2;
                            else if (x > s)
                                g += 2;
                            else if (p) {
                                var A = a + d - N;
                                if (A >= 0 && A < u && -1 != c[A]) {
                                    var w = i - c[A];
                                    if (O >= w)
                                        return o(t, e, O, x)
                                }
                            }
                        }
                        for (var T = -v + y; T <= v - b; T += 2) {
                            for (var A = a + T, L = (w = T == -v || T != v && c[A - 1] < c[A + 1] ? c[A + 1] : c[A - 1] + 1) - T; w < i && L < s && t.charAt(i - w - 1) == e.charAt(s - L - 1); )
                                w++,
                                L++;
                            if (c[A] = w,
                            w > i)
                                b += 2;
                            else if (L > s)
                                y += 2;
                            else if (!p) {
                                var E = a + d - T;
                                if (E >= 0 && E < u && -1 != h[E]) {
                                    var O = h[E]
                                      , x = a + O - E;
                                    if (O >= (w = i - w))
                                        return o(t, e, O, x)
                                }
                            }
                        }
                    }
                    return [[r, t], [n, e]]
                }(t, e)
            }(t = t.substring(0, t.length - c), e = e.substring(0, e.length - c));
            return f && p.unshift([i, f]),
            d && p.push([i, d]),
            function t(e) {
                e.push([i, ""]);
                var s = 0;
                var o = 0;
                var u = 0;
                var h = "";
                var c = "";
                var f;
                for (; s < e.length; )
                    switch (e[s][0]) {
                    case n:
                        u++,
                        c += e[s][1],
                        s++;
                        break;
                    case r:
                        o++,
                        h += e[s][1],
                        s++;
                        break;
                    case i:
                        o + u > 1 ? (0 !== o && 0 !== u && (0 !== (f = l(c, h)) && (s - o - u > 0 && e[s - o - u - 1][0] == i ? e[s - o - u - 1][1] += c.substring(0, f) : (e.splice(0, 0, [i, c.substring(0, f)]),
                        s++),
                        c = c.substring(f),
                        h = h.substring(f)),
                        0 !== (f = a(c, h)) && (e[s][1] = c.substring(c.length - f) + e[s][1],
                        c = c.substring(0, c.length - f),
                        h = h.substring(0, h.length - f))),
                        0 === o ? e.splice(s - u, o + u, [n, c]) : 0 === u ? e.splice(s - o, o + u, [r, h]) : e.splice(s - o - u, o + u, [r, h], [n, c]),
                        s = s - o - u + (o ? 1 : 0) + (u ? 1 : 0) + 1) : 0 !== s && e[s - 1][0] == i ? (e[s - 1][1] += e[s][1],
                        e.splice(s, 1)) : s++,
                        u = 0,
                        o = 0,
                        h = "",
                        c = ""
                    }
                "" === e[e.length - 1][1] && e.pop();
                var d = !1;
                s = 1;
                for (; s < e.length - 1; )
                    e[s - 1][0] == i && e[s + 1][0] == i && (e[s][1].substring(e[s][1].length - e[s - 1][1].length) == e[s - 1][1] ? (e[s][1] = e[s - 1][1] + e[s][1].substring(0, e[s][1].length - e[s - 1][1].length),
                    e[s + 1][1] = e[s - 1][1] + e[s + 1][1],
                    e.splice(s - 1, 1),
                    d = !0) : e[s][1].substring(0, e[s + 1][1].length) == e[s + 1][1] && (e[s - 1][1] += e[s + 1][1],
                    e[s][1] = e[s][1].substring(e[s + 1][1].length) + e[s + 1][1],
                    e.splice(s + 1, 1),
                    d = !0)),
                    s++;
                d && t(e)
            }(p),
            null != u && (p = function(t, e) {
                var n = function(t, e) {
                    if (0 === e)
                        return [i, t];
                    for (var n = 0, s = 0; s < t.length; s++) {
                        var o = t[s];
                        if (o[0] === r || o[0] === i) {
                            var l = n + o[1].length;
                            if (e === l)
                                return [s + 1, t];
                            if (e < l) {
                                t = t.slice();
                                var a = e - n
                                  , u = [o[0], o[1].slice(0, a)]
                                  , h = [o[0], o[1].slice(a)];
                                return t.splice(s, 1, u, h),
                                [s + 1, t]
                            }
                            n = l
                        }
                    }
                    throw new Error("cursor_pos is out of bounds!")
                }(t, e)
                  , s = n[1]
                  , o = n[0]
                  , l = s[o]
                  , a = s[o + 1];
                if (null == l)
                    return t;
                if (l[0] !== i)
                    return t;
                if (null != a && l[1] + a[1] === a[1] + l[1])
                    return s.splice(o, 2, a, l),
                    h(s, o, 2);
                if (null != a && 0 === a[1].indexOf(l[1])) {
                    s.splice(o, 2, [a[0], l[1]], [0, l[1]]);
                    var u = a[1].slice(l[1].length);
                    return u.length > 0 && s.splice(o + 2, 0, [a[0], u]),
                    h(s, o, 3)
                }
                return t
            }(p, u)),
            p = function(t) {
                for (var e = !1, s = function(t) {
                    return t.charCodeAt(0) >= 56320 && t.charCodeAt(0) <= 57343
                }, o = 2; o < t.length; o += 1)
                    t[o - 2][0] === i && ((l = t[o - 2][1]).charCodeAt(l.length - 1) >= 55296 && l.charCodeAt(l.length - 1) <= 56319) && t[o - 1][0] === r && s(t[o - 1][1]) && t[o][0] === n && s(t[o][1]) && (e = !0,
                    t[o - 1][1] = t[o - 2][1].slice(-1) + t[o - 1][1],
                    t[o][1] = t[o - 2][1].slice(-1) + t[o][1],
                    t[o - 2][1] = t[o - 2][1].slice(0, -1));
                var l;
                if (!e)
                    return t;
                for (var a = [], o = 0; o < t.length; o += 1)
                    t[o][1].length > 0 && a.push(t[o]);
                return a
            }(p)
        }
        function o(t, e, r, n) {
            var i = t.substring(0, r)
              , o = e.substring(0, n)
              , l = t.substring(r)
              , a = e.substring(n)
              , u = s(i, o)
              , h = s(l, a);
            return u.concat(h)
        }
        function l(t, e) {
            if (!t || !e || t.charAt(0) != e.charAt(0))
                return 0;
            for (var r = 0, n = Math.min(t.length, e.length), i = n, s = 0; r < i; )
                t.substring(s, i) == e.substring(s, i) ? s = r = i : n = i,
                i = Math.floor((n - r) / 2 + r);
            return i
        }
        function a(t, e) {
            if (!t || !e || t.charAt(t.length - 1) != e.charAt(e.length - 1))
                return 0;
            for (var r = 0, n = Math.min(t.length, e.length), i = n, s = 0; r < i; )
                t.substring(t.length - i, t.length - s) == e.substring(e.length - i, e.length - s) ? s = r = i : n = i,
                i = Math.floor((n - r) / 2 + r);
            return i
        }
        var u = s;
        function h(t, e, r) {
            for (var n = e + r - 1; n >= 0 && n >= e - 1; n--)
                if (n + 1 < t.length) {
                    var i = t[n]
                      , s = t[n + 1];
                    i[0] === s[1] && t.splice(n, 2, [i[0], i[1] + s[1]])
                }
            return t
        }
        u.INSERT = n,
        u.DELETE = r,
        u.EQUAL = i,
        t.exports = u
    }
    , function(t, e) {
        function r(t) {
            var e = [];
            for (var r in t)
                e.push(r);
            return e
        }
        (t.exports = "function" == typeof Object.keys ? Object.keys : r).shim = r
    }
    , function(t, e) {
        var r = "[object Arguments]" == function() {
            return Object.prototype.toString.call(arguments)
        }();
        function n(t) {
            return "[object Arguments]" == Object.prototype.toString.call(t)
        }
        function i(t) {
            return t && "object" == typeof t && "number" == typeof t.length && Object.prototype.hasOwnProperty.call(t, "callee") && !Object.prototype.propertyIsEnumerable.call(t, "callee") || !1
        }
        (e = t.exports = r ? n : i).supported = n,
        e.unsupported = i
    }
    , function(t, e, r) {
        "use strict";
        (function(t) {
            /*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
            var n = r(39)
              , i = r(40)
              , s = r(41);
            function o() {
                return a.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
            }
            function l(t, e) {
                if (o() < e)
                    throw new RangeError("Invalid typed array length");
                return a.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(e)).__proto__ = a.prototype : (null === t && (t = new a(e)),
                t.length = e),
                t
            }
            function a(t, e, r) {
                if (!(a.TYPED_ARRAY_SUPPORT || this instanceof a))
                    return new a(t,e,r);
                if ("number" == typeof t) {
                    if ("string" == typeof e)
                        throw new Error("If encoding is specified then the first argument must be a string");
                    return c(this, t)
                }
                return u(this, t, e, r)
            }
            function u(t, e, r, n) {
                if ("number" == typeof e)
                    throw new TypeError('"value" argument must not be a number');
                return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer ? function(t, e, r, n) {
                    if (e.byteLength,
                    r < 0 || e.byteLength < r)
                        throw new RangeError("'offset' is out of bounds");
                    if (e.byteLength < r + (n || 0))
                        throw new RangeError("'length' is out of bounds");
                    e = void 0 === r && void 0 === n ? new Uint8Array(e) : void 0 === n ? new Uint8Array(e,r) : new Uint8Array(e,r,n);
                    a.TYPED_ARRAY_SUPPORT ? (t = e).__proto__ = a.prototype : t = f(t, e);
                    return t
                }(t, e, r, n) : "string" == typeof e ? function(t, e, r) {
                    "string" == typeof r && "" !== r || (r = "utf8");
                    if (!a.isEncoding(r))
                        throw new TypeError('"encoding" must be a valid string encoding');
                    var n = 0 | p(e, r)
                      , i = (t = l(t, n)).write(e, r);
                    i !== n && (t = t.slice(0, i));
                    return t
                }(t, e, r) : function(t, e) {
                    if (a.isBuffer(e)) {
                        var r = 0 | d(e.length);
                        return 0 === (t = l(t, r)).length ? t : (e.copy(t, 0, 0, r),
                        t)
                    }
                    if (e) {
                        if ("undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length"in e)
                            return "number" != typeof e.length || (n = e.length) != n ? l(t, 0) : f(t, e);
                        if ("Buffer" === e.type && s(e.data))
                            return f(t, e.data)
                    }
                    var n;
                    throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
                }(t, e)
            }
            function h(t) {
                if ("number" != typeof t)
                    throw new TypeError('"size" argument must be a number');
                if (t < 0)
                    throw new RangeError('"size" argument must not be negative')
            }
            function c(t, e) {
                if (h(e),
                t = l(t, e < 0 ? 0 : 0 | d(e)),
                !a.TYPED_ARRAY_SUPPORT)
                    for (var r = 0; r < e; ++r)
                        t[r] = 0;
                return t
            }
            function f(t, e) {
                var r = e.length < 0 ? 0 : 0 | d(e.length);
                t = l(t, r);
                for (var n = 0; n < r; n += 1)
                    t[n] = 255 & e[n];
                return t
            }
            function d(t) {
                if (t >= o())
                    throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + o().toString(16) + " bytes");
                return 0 | t
            }
            function p(t, e) {
                if (a.isBuffer(t))
                    return t.length;
                if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer))
                    return t.byteLength;
                "string" != typeof t && (t = "" + t);
                var r = t.length;
                if (0 === r)
                    return 0;
                for (var n = !1; ; )
                    switch (e) {
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return r;
                    case "utf8":
                    case "utf-8":
                    case void 0:
                        return M(t).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return 2 * r;
                    case "hex":
                        return r >>> 1;
                    case "base64":
                        return F(t).length;
                    default:
                        if (n)
                            return M(t).length;
                        e = ("" + e).toLowerCase(),
                        n = !0
                    }
            }
            function g(t, e, r) {
                var n = t[e];
                t[e] = t[r],
                t[r] = n
            }
            function m(t, e, r, n, i) {
                if (0 === t.length)
                    return -1;
                if ("string" == typeof r ? (n = r,
                r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648),
                r = +r,
                isNaN(r) && (r = i ? 0 : t.length - 1),
                r < 0 && (r = t.length + r),
                r >= t.length) {
                    if (i)
                        return -1;
                    r = t.length - 1
                } else if (r < 0) {
                    if (!i)
                        return -1;
                    r = 0
                }
                if ("string" == typeof e && (e = a.from(e, n)),
                a.isBuffer(e))
                    return 0 === e.length ? -1 : y(t, e, r, n, i);
                if ("number" == typeof e)
                    return e &= 255,
                    a.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(t, e, r) : Uint8Array.prototype.lastIndexOf.call(t, e, r) : y(t, [e], r, n, i);
                throw new TypeError("val must be string, number or Buffer")
            }
            function y(t, e, r, n, i) {
                var s, o = 1, l = t.length, a = e.length;
                if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
                    if (t.length < 2 || e.length < 2)
                        return -1;
                    o = 2,
                    l /= 2,
                    a /= 2,
                    r /= 2
                }
                function u(t, e) {
                    return 1 === o ? t[e] : t.readUInt16BE(e * o)
                }
                if (i) {
                    var h = -1;
                    for (s = r; s < l; s++)
                        if (u(t, s) === u(e, -1 === h ? 0 : s - h)) {
                            if (-1 === h && (h = s),
                            s - h + 1 === a)
                                return h * o
                        } else
                            -1 !== h && (s -= s - h),
                            h = -1
                } else
                    for (r + a > l && (r = l - a),
                    s = r; s >= 0; s--) {
                        for (var c = !0, f = 0; f < a; f++)
                            if (u(t, s + f) !== u(e, f)) {
                                c = !1;
                                break
                            }
                        if (c)
                            return s
                    }
                return -1
            }
            function b(t, e, r, n) {
                r = Number(r) || 0;
                var i = t.length - r;
                n ? (n = Number(n)) > i && (n = i) : n = i;
                var s = e.length;
                if (s % 2 != 0)
                    throw new TypeError("Invalid hex string");
                n > s / 2 && (n = s / 2);
                for (var o = 0; o < n; ++o) {
                    var l = parseInt(e.substr(2 * o, 2), 16);
                    if (isNaN(l))
                        return o;
                    t[r + o] = l
                }
                return o
            }
            function v(t, e, r, n) {
                return K(M(e, t.length - r), t, r, n)
            }
            function N(t, e, r, n) {
                return K(function(t) {
                    for (var e = [], r = 0; r < t.length; ++r)
                        e.push(255 & t.charCodeAt(r));
                    return e
                }(e), t, r, n)
            }
            function E(t, e, r, n) {
                return N(t, e, r, n)
            }
            function x(t, e, r, n) {
                return K(F(e), t, r, n)
            }
            function A(t, e, r, n) {
                return K(function(t, e) {
                    for (var r, n, i, s = [], o = 0; o < t.length && !((e -= 2) < 0); ++o)
                        r = t.charCodeAt(o),
                        n = r >> 8,
                        i = r % 256,
                        s.push(i),
                        s.push(n);
                    return s
                }(e, t.length - r), t, r, n)
            }
            function w(t, e, r) {
                return 0 === e && r === t.length ? n.fromByteArray(t) : n.fromByteArray(t.slice(e, r))
            }
            function T(t, e, r) {
                r = Math.min(t.length, r);
                for (var n = [], i = e; i < r; ) {
                    var s, o, l, a, u = t[i], h = null, c = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
                    if (i + c <= r)
                        switch (c) {
                        case 1:
                            u < 128 && (h = u);
                            break;
                        case 2:
                            128 == (192 & (s = t[i + 1])) && (a = (31 & u) << 6 | 63 & s) > 127 && (h = a);
                            break;
                        case 3:
                            s = t[i + 1],
                            o = t[i + 2],
                            128 == (192 & s) && 128 == (192 & o) && (a = (15 & u) << 12 | (63 & s) << 6 | 63 & o) > 2047 && (a < 55296 || a > 57343) && (h = a);
                            break;
                        case 4:
                            s = t[i + 1],
                            o = t[i + 2],
                            l = t[i + 3],
                            128 == (192 & s) && 128 == (192 & o) && 128 == (192 & l) && (a = (15 & u) << 18 | (63 & s) << 12 | (63 & o) << 6 | 63 & l) > 65535 && a < 1114112 && (h = a)
                        }
                    null === h ? (h = 65533,
                    c = 1) : h > 65535 && (h -= 65536,
                    n.push(h >>> 10 & 1023 | 55296),
                    h = 56320 | 1023 & h),
                    n.push(h),
                    i += c
                }
                return function(t) {
                    var e = t.length;
                    if (e <= L)
                        return String.fromCharCode.apply(String, t);
                    var r = ""
                      , n = 0;
                    for (; n < e; )
                        r += String.fromCharCode.apply(String, t.slice(n, n += L));
                    return r
                }(n)
            }
            e.Buffer = a,
            e.SlowBuffer = function(t) {
                +t != t && (t = 0);
                return a.alloc(+t)
            }
            ,
            e.INSPECT_MAX_BYTES = 50,
            a.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : function() {
                try {
                    var t = new Uint8Array(1);
                    return t.__proto__ = {
                        __proto__: Uint8Array.prototype,
                        foo: function() {
                            return 42
                        }
                    },
                    42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength
                } catch (t) {
                    return !1
                }
            }(),
            e.kMaxLength = o(),
            a.poolSize = 8192,
            a._augment = function(t) {
                return t.__proto__ = a.prototype,
                t
            }
            ,
            a.from = function(t, e, r) {
                return u(null, t, e, r)
            }
            ,
            a.TYPED_ARRAY_SUPPORT && (a.prototype.__proto__ = Uint8Array.prototype,
            a.__proto__ = Uint8Array,
            "undefined" != typeof Symbol && Symbol.species && a[Symbol.species] === a && Object.defineProperty(a, Symbol.species, {
                value: null,
                configurable: !0
            })),
            a.alloc = function(t, e, r) {
                return function(t, e, r, n) {
                    return h(e),
                    e <= 0 ? l(t, e) : void 0 !== r ? "string" == typeof n ? l(t, e).fill(r, n) : l(t, e).fill(r) : l(t, e)
                }(null, t, e, r)
            }
            ,
            a.allocUnsafe = function(t) {
                return c(null, t)
            }
            ,
            a.allocUnsafeSlow = function(t) {
                return c(null, t)
            }
            ,
            a.isBuffer = function(t) {
                return !(null == t || !t._isBuffer)
            }
            ,
            a.compare = function(t, e) {
                if (!a.isBuffer(t) || !a.isBuffer(e))
                    throw new TypeError("Arguments must be Buffers");
                if (t === e)
                    return 0;
                for (var r = t.length, n = e.length, i = 0, s = Math.min(r, n); i < s; ++i)
                    if (t[i] !== e[i]) {
                        r = t[i],
                        n = e[i];
                        break
                    }
                return r < n ? -1 : n < r ? 1 : 0
            }
            ,
            a.isEncoding = function(t) {
                switch (String(t).toLowerCase()) {
                case "hex":
                case "utf8":
                case "utf-8":
                case "ascii":
                case "latin1":
                case "binary":
                case "base64":
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return !0;
                default:
                    return !1
                }
            }
            ,
            a.concat = function(t, e) {
                if (!s(t))
                    throw new TypeError('"list" argument must be an Array of Buffers');
                if (0 === t.length)
                    return a.alloc(0);
                var r;
                if (void 0 === e)
                    for (e = 0,
                    r = 0; r < t.length; ++r)
                        e += t[r].length;
                var n = a.allocUnsafe(e)
                  , i = 0;
                for (r = 0; r < t.length; ++r) {
                    var o = t[r];
                    if (!a.isBuffer(o))
                        throw new TypeError('"list" argument must be an Array of Buffers');
                    o.copy(n, i),
                    i += o.length
                }
                return n
            }
            ,
            a.byteLength = p,
            a.prototype._isBuffer = !0,
            a.prototype.swap16 = function() {
                var t = this.length;
                if (t % 2 != 0)
                    throw new RangeError("Buffer size must be a multiple of 16-bits");
                for (var e = 0; e < t; e += 2)
                    g(this, e, e + 1);
                return this
            }
            ,
            a.prototype.swap32 = function() {
                var t = this.length;
                if (t % 4 != 0)
                    throw new RangeError("Buffer size must be a multiple of 32-bits");
                for (var e = 0; e < t; e += 4)
                    g(this, e, e + 3),
                    g(this, e + 1, e + 2);
                return this
            }
            ,
            a.prototype.swap64 = function() {
                var t = this.length;
                if (t % 8 != 0)
                    throw new RangeError("Buffer size must be a multiple of 64-bits");
                for (var e = 0; e < t; e += 8)
                    g(this, e, e + 7),
                    g(this, e + 1, e + 6),
                    g(this, e + 2, e + 5),
                    g(this, e + 3, e + 4);
                return this
            }
            ,
            a.prototype.toString = function() {
                var t = 0 | this.length;
                return 0 === t ? "" : 0 === arguments.length ? T(this, 0, t) : function(t, e, r) {
                    var n = !1;
                    if ((void 0 === e || e < 0) && (e = 0),
                    e > this.length)
                        return "";
                    if ((void 0 === r || r > this.length) && (r = this.length),
                    r <= 0)
                        return "";
                    if ((r >>>= 0) <= (e >>>= 0))
                        return "";
                    for (t || (t = "utf8"); ; )
                        switch (t) {
                        case "hex":
                            return k(this, e, r);
                        case "utf8":
                        case "utf-8":
                            return T(this, e, r);
                        case "ascii":
                            return O(this, e, r);
                        case "latin1":
                        case "binary":
                            return S(this, e, r);
                        case "base64":
                            return w(this, e, r);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return C(this, e, r);
                        default:
                            if (n)
                                throw new TypeError("Unknown encoding: " + t);
                            t = (t + "").toLowerCase(),
                            n = !0
                        }
                }
                .apply(this, arguments)
            }
            ,
            a.prototype.equals = function(t) {
                if (!a.isBuffer(t))
                    throw new TypeError("Argument must be a Buffer");
                return this === t || 0 === a.compare(this, t)
            }
            ,
            a.prototype.inspect = function() {
                var t = ""
                  , r = e.INSPECT_MAX_BYTES;
                return this.length > 0 && (t = this.toString("hex", 0, r).match(/.{2}/g).join(" "),
                this.length > r && (t += " ... ")),
                "<Buffer " + t + ">"
            }
            ,
            a.prototype.compare = function(t, e, r, n, i) {
                if (!a.isBuffer(t))
                    throw new TypeError("Argument must be a Buffer");
                if (void 0 === e && (e = 0),
                void 0 === r && (r = t ? t.length : 0),
                void 0 === n && (n = 0),
                void 0 === i && (i = this.length),
                e < 0 || r > t.length || n < 0 || i > this.length)
                    throw new RangeError("out of range index");
                if (n >= i && e >= r)
                    return 0;
                if (n >= i)
                    return -1;
                if (e >= r)
                    return 1;
                if (e >>>= 0,
                r >>>= 0,
                n >>>= 0,
                i >>>= 0,
                this === t)
                    return 0;
                for (var s = i - n, o = r - e, l = Math.min(s, o), u = this.slice(n, i), h = t.slice(e, r), c = 0; c < l; ++c)
                    if (u[c] !== h[c]) {
                        s = u[c],
                        o = h[c];
                        break
                    }
                return s < o ? -1 : o < s ? 1 : 0
            }
            ,
            a.prototype.includes = function(t, e, r) {
                return -1 !== this.indexOf(t, e, r)
            }
            ,
            a.prototype.indexOf = function(t, e, r) {
                return m(this, t, e, r, !0)
            }
            ,
            a.prototype.lastIndexOf = function(t, e, r) {
                return m(this, t, e, r, !1)
            }
            ,
            a.prototype.write = function(t, e, r, n) {
                if (void 0 === e)
                    n = "utf8",
                    r = this.length,
                    e = 0;
                else if (void 0 === r && "string" == typeof e)
                    n = e,
                    r = this.length,
                    e = 0;
                else {
                    if (!isFinite(e))
                        throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                    e |= 0,
                    isFinite(r) ? (r |= 0,
                    void 0 === n && (n = "utf8")) : (n = r,
                    r = void 0)
                }
                var i = this.length - e;
                if ((void 0 === r || r > i) && (r = i),
                t.length > 0 && (r < 0 || e < 0) || e > this.length)
                    throw new RangeError("Attempt to write outside buffer bounds");
                n || (n = "utf8");
                for (var s = !1; ; )
                    switch (n) {
                    case "hex":
                        return b(this, t, e, r);
                    case "utf8":
                    case "utf-8":
                        return v(this, t, e, r);
                    case "ascii":
                        return N(this, t, e, r);
                    case "latin1":
                    case "binary":
                        return E(this, t, e, r);
                    case "base64":
                        return x(this, t, e, r);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return A(this, t, e, r);
                    default:
                        if (s)
                            throw new TypeError("Unknown encoding: " + n);
                        n = ("" + n).toLowerCase(),
                        s = !0
                    }
            }
            ,
            a.prototype.toJSON = function() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                }
            }
            ;
            var L = 4096;
            function O(t, e, r) {
                var n = "";
                r = Math.min(t.length, r);
                for (var i = e; i < r; ++i)
                    n += String.fromCharCode(127 & t[i]);
                return n
            }
            function S(t, e, r) {
                var n = "";
                r = Math.min(t.length, r);
                for (var i = e; i < r; ++i)
                    n += String.fromCharCode(t[i]);
                return n
            }
            function k(t, e, r) {
                var n = t.length;
                (!e || e < 0) && (e = 0),
                (!r || r < 0 || r > n) && (r = n);
                for (var i = "", s = e; s < r; ++s)
                    i += j(t[s]);
                return i
            }
            function C(t, e, r) {
                for (var n = t.slice(e, r), i = "", s = 0; s < n.length; s += 2)
                    i += String.fromCharCode(n[s] + 256 * n[s + 1]);
                return i
            }
            function R(t, e, r) {
                if (t % 1 != 0 || t < 0)
                    throw new RangeError("offset is not uint");
                if (t + e > r)
                    throw new RangeError("Trying to access beyond buffer length")
            }
            function B(t, e, r, n, i, s) {
                if (!a.isBuffer(t))
                    throw new TypeError('"buffer" argument must be a Buffer instance');
                if (e > i || e < s)
                    throw new RangeError('"value" argument is out of bounds');
                if (r + n > t.length)
                    throw new RangeError("Index out of range")
            }
            function _(t, e, r, n) {
                e < 0 && (e = 65535 + e + 1);
                for (var i = 0, s = Math.min(t.length - r, 2); i < s; ++i)
                    t[r + i] = (e & 255 << 8 * (n ? i : 1 - i)) >>> 8 * (n ? i : 1 - i)
            }
            function q(t, e, r, n) {
                e < 0 && (e = 4294967295 + e + 1);
                for (var i = 0, s = Math.min(t.length - r, 4); i < s; ++i)
                    t[r + i] = e >>> 8 * (n ? i : 3 - i) & 255
            }
            function I(t, e, r, n, i, s) {
                if (r + n > t.length)
                    throw new RangeError("Index out of range");
                if (r < 0)
                    throw new RangeError("Index out of range")
            }
            function U(t, e, r, n, s) {
                return s || I(t, 0, r, 4),
                i.write(t, e, r, n, 23, 4),
                r + 4
            }
            function P(t, e, r, n, s) {
                return s || I(t, 0, r, 8),
                i.write(t, e, r, n, 52, 8),
                r + 8
            }
            a.prototype.slice = function(t, e) {
                var r, n = this.length;
                if (t = ~~t,
                e = void 0 === e ? n : ~~e,
                t < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n),
                e < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n),
                e < t && (e = t),
                a.TYPED_ARRAY_SUPPORT)
                    (r = this.subarray(t, e)).__proto__ = a.prototype;
                else {
                    var i = e - t;
                    r = new a(i,void 0);
                    for (var s = 0; s < i; ++s)
                        r[s] = this[s + t]
                }
                return r
            }
            ,
            a.prototype.readUIntLE = function(t, e, r) {
                t |= 0,
                e |= 0,
                r || R(t, e, this.length);
                for (var n = this[t], i = 1, s = 0; ++s < e && (i *= 256); )
                    n += this[t + s] * i;
                return n
            }
            ,
            a.prototype.readUIntBE = function(t, e, r) {
                t |= 0,
                e |= 0,
                r || R(t, e, this.length);
                for (var n = this[t + --e], i = 1; e > 0 && (i *= 256); )
                    n += this[t + --e] * i;
                return n
            }
            ,
            a.prototype.readUInt8 = function(t, e) {
                return e || R(t, 1, this.length),
                this[t]
            }
            ,
            a.prototype.readUInt16LE = function(t, e) {
                return e || R(t, 2, this.length),
                this[t] | this[t + 1] << 8
            }
            ,
            a.prototype.readUInt16BE = function(t, e) {
                return e || R(t, 2, this.length),
                this[t] << 8 | this[t + 1]
            }
            ,
            a.prototype.readUInt32LE = function(t, e) {
                return e || R(t, 4, this.length),
                (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
            }
            ,
            a.prototype.readUInt32BE = function(t, e) {
                return e || R(t, 4, this.length),
                16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
            }
            ,
            a.prototype.readIntLE = function(t, e, r) {
                t |= 0,
                e |= 0,
                r || R(t, e, this.length);
                for (var n = this[t], i = 1, s = 0; ++s < e && (i *= 256); )
                    n += this[t + s] * i;
                return n >= (i *= 128) && (n -= Math.pow(2, 8 * e)),
                n
            }
            ,
            a.prototype.readIntBE = function(t, e, r) {
                t |= 0,
                e |= 0,
                r || R(t, e, this.length);
                for (var n = e, i = 1, s = this[t + --n]; n > 0 && (i *= 256); )
                    s += this[t + --n] * i;
                return s >= (i *= 128) && (s -= Math.pow(2, 8 * e)),
                s
            }
            ,
            a.prototype.readInt8 = function(t, e) {
                return e || R(t, 1, this.length),
                128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
            }
            ,
            a.prototype.readInt16LE = function(t, e) {
                e || R(t, 2, this.length);
                var r = this[t] | this[t + 1] << 8;
                return 32768 & r ? 4294901760 | r : r
            }
            ,
            a.prototype.readInt16BE = function(t, e) {
                e || R(t, 2, this.length);
                var r = this[t + 1] | this[t] << 8;
                return 32768 & r ? 4294901760 | r : r
            }
            ,
            a.prototype.readInt32LE = function(t, e) {
                return e || R(t, 4, this.length),
                this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
            }
            ,
            a.prototype.readInt32BE = function(t, e) {
                return e || R(t, 4, this.length),
                this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
            }
            ,
            a.prototype.readFloatLE = function(t, e) {
                return e || R(t, 4, this.length),
                i.read(this, t, !0, 23, 4)
            }
            ,
            a.prototype.readFloatBE = function(t, e) {
                return e || R(t, 4, this.length),
                i.read(this, t, !1, 23, 4)
            }
            ,
            a.prototype.readDoubleLE = function(t, e) {
                return e || R(t, 8, this.length),
                i.read(this, t, !0, 52, 8)
            }
            ,
            a.prototype.readDoubleBE = function(t, e) {
                return e || R(t, 8, this.length),
                i.read(this, t, !1, 52, 8)
            }
            ,
            a.prototype.writeUIntLE = function(t, e, r, n) {
                (t = +t,
                e |= 0,
                r |= 0,
                n) || B(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
                var i = 1
                  , s = 0;
                for (this[e] = 255 & t; ++s < r && (i *= 256); )
                    this[e + s] = t / i & 255;
                return e + r
            }
            ,
            a.prototype.writeUIntBE = function(t, e, r, n) {
                (t = +t,
                e |= 0,
                r |= 0,
                n) || B(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
                var i = r - 1
                  , s = 1;
                for (this[e + i] = 255 & t; --i >= 0 && (s *= 256); )
                    this[e + i] = t / s & 255;
                return e + r
            }
            ,
            a.prototype.writeUInt8 = function(t, e, r) {
                return t = +t,
                e |= 0,
                r || B(this, t, e, 1, 255, 0),
                a.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
                this[e] = 255 & t,
                e + 1
            }
            ,
            a.prototype.writeUInt16LE = function(t, e, r) {
                return t = +t,
                e |= 0,
                r || B(this, t, e, 2, 65535, 0),
                a.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t,
                this[e + 1] = t >>> 8) : _(this, t, e, !0),
                e + 2
            }
            ,
            a.prototype.writeUInt16BE = function(t, e, r) {
                return t = +t,
                e |= 0,
                r || B(this, t, e, 2, 65535, 0),
                a.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8,
                this[e + 1] = 255 & t) : _(this, t, e, !1),
                e + 2
            }
            ,
            a.prototype.writeUInt32LE = function(t, e, r) {
                return t = +t,
                e |= 0,
                r || B(this, t, e, 4, 4294967295, 0),
                a.TYPED_ARRAY_SUPPORT ? (this[e + 3] = t >>> 24,
                this[e + 2] = t >>> 16,
                this[e + 1] = t >>> 8,
                this[e] = 255 & t) : q(this, t, e, !0),
                e + 4
            }
            ,
            a.prototype.writeUInt32BE = function(t, e, r) {
                return t = +t,
                e |= 0,
                r || B(this, t, e, 4, 4294967295, 0),
                a.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24,
                this[e + 1] = t >>> 16,
                this[e + 2] = t >>> 8,
                this[e + 3] = 255 & t) : q(this, t, e, !1),
                e + 4
            }
            ,
            a.prototype.writeIntLE = function(t, e, r, n) {
                if (t = +t,
                e |= 0,
                !n) {
                    var i = Math.pow(2, 8 * r - 1);
                    B(this, t, e, r, i - 1, -i)
                }
                var s = 0
                  , o = 1
                  , l = 0;
                for (this[e] = 255 & t; ++s < r && (o *= 256); )
                    t < 0 && 0 === l && 0 !== this[e + s - 1] && (l = 1),
                    this[e + s] = (t / o >> 0) - l & 255;
                return e + r
            }
            ,
            a.prototype.writeIntBE = function(t, e, r, n) {
                if (t = +t,
                e |= 0,
                !n) {
                    var i = Math.pow(2, 8 * r - 1);
                    B(this, t, e, r, i - 1, -i)
                }
                var s = r - 1
                  , o = 1
                  , l = 0;
                for (this[e + s] = 255 & t; --s >= 0 && (o *= 256); )
                    t < 0 && 0 === l && 0 !== this[e + s + 1] && (l = 1),
                    this[e + s] = (t / o >> 0) - l & 255;
                return e + r
            }
            ,
            a.prototype.writeInt8 = function(t, e, r) {
                return t = +t,
                e |= 0,
                r || B(this, t, e, 1, 127, -128),
                a.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
                t < 0 && (t = 255 + t + 1),
                this[e] = 255 & t,
                e + 1
            }
            ,
            a.prototype.writeInt16LE = function(t, e, r) {
                return t = +t,
                e |= 0,
                r || B(this, t, e, 2, 32767, -32768),
                a.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t,
                this[e + 1] = t >>> 8) : _(this, t, e, !0),
                e + 2
            }
            ,
            a.prototype.writeInt16BE = function(t, e, r) {
                return t = +t,
                e |= 0,
                r || B(this, t, e, 2, 32767, -32768),
                a.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8,
                this[e + 1] = 255 & t) : _(this, t, e, !1),
                e + 2
            }
            ,
            a.prototype.writeInt32LE = function(t, e, r) {
                return t = +t,
                e |= 0,
                r || B(this, t, e, 4, 2147483647, -2147483648),
                a.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t,
                this[e + 1] = t >>> 8,
                this[e + 2] = t >>> 16,
                this[e + 3] = t >>> 24) : q(this, t, e, !0),
                e + 4
            }
            ,
            a.prototype.writeInt32BE = function(t, e, r) {
                return t = +t,
                e |= 0,
                r || B(this, t, e, 4, 2147483647, -2147483648),
                t < 0 && (t = 4294967295 + t + 1),
                a.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24,
                this[e + 1] = t >>> 16,
                this[e + 2] = t >>> 8,
                this[e + 3] = 255 & t) : q(this, t, e, !1),
                e + 4
            }
            ,
            a.prototype.writeFloatLE = function(t, e, r) {
                return U(this, t, e, !0, r)
            }
            ,
            a.prototype.writeFloatBE = function(t, e, r) {
                return U(this, t, e, !1, r)
            }
            ,
            a.prototype.writeDoubleLE = function(t, e, r) {
                return P(this, t, e, !0, r)
            }
            ,
            a.prototype.writeDoubleBE = function(t, e, r) {
                return P(this, t, e, !1, r)
            }
            ,
            a.prototype.copy = function(t, e, r, n) {
                if (r || (r = 0),
                n || 0 === n || (n = this.length),
                e >= t.length && (e = t.length),
                e || (e = 0),
                n > 0 && n < r && (n = r),
                n === r)
                    return 0;
                if (0 === t.length || 0 === this.length)
                    return 0;
                if (e < 0)
                    throw new RangeError("targetStart out of bounds");
                if (r < 0 || r >= this.length)
                    throw new RangeError("sourceStart out of bounds");
                if (n < 0)
                    throw new RangeError("sourceEnd out of bounds");
                n > this.length && (n = this.length),
                t.length - e < n - r && (n = t.length - e + r);
                var i, s = n - r;
                if (this === t && r < e && e < n)
                    for (i = s - 1; i >= 0; --i)
                        t[i + e] = this[i + r];
                else if (s < 1e3 || !a.TYPED_ARRAY_SUPPORT)
                    for (i = 0; i < s; ++i)
                        t[i + e] = this[i + r];
                else
                    Uint8Array.prototype.set.call(t, this.subarray(r, r + s), e);
                return s
            }
            ,
            a.prototype.fill = function(t, e, r, n) {
                if ("string" == typeof t) {
                    if ("string" == typeof e ? (n = e,
                    e = 0,
                    r = this.length) : "string" == typeof r && (n = r,
                    r = this.length),
                    1 === t.length) {
                        var i = t.charCodeAt(0);
                        i < 256 && (t = i)
                    }
                    if (void 0 !== n && "string" != typeof n)
                        throw new TypeError("encoding must be a string");
                    if ("string" == typeof n && !a.isEncoding(n))
                        throw new TypeError("Unknown encoding: " + n)
                } else
                    "number" == typeof t && (t &= 255);
                if (e < 0 || this.length < e || this.length < r)
                    throw new RangeError("Out of range index");
                if (r <= e)
                    return this;
                var s;
                if (e >>>= 0,
                r = void 0 === r ? this.length : r >>> 0,
                t || (t = 0),
                "number" == typeof t)
                    for (s = e; s < r; ++s)
                        this[s] = t;
                else {
                    var o = a.isBuffer(t) ? t : M(new a(t,n).toString())
                      , l = o.length;
                    for (s = 0; s < r - e; ++s)
                        this[s + e] = o[s % l]
                }
                return this
            }
            ;
            var D = /[^+\/0-9A-Za-z-_]/g;
            function j(t) {
                return t < 16 ? "0" + t.toString(16) : t.toString(16)
            }
            function M(t, e) {
                var r;
                e = e || 1 / 0;
                for (var n = t.length, i = null, s = [], o = 0; o < n; ++o) {
                    if ((r = t.charCodeAt(o)) > 55295 && r < 57344) {
                        if (!i) {
                            if (r > 56319) {
                                (e -= 3) > -1 && s.push(239, 191, 189);
                                continue
                            }
                            if (o + 1 === n) {
                                (e -= 3) > -1 && s.push(239, 191, 189);
                                continue
                            }
                            i = r;
                            continue
                        }
                        if (r < 56320) {
                            (e -= 3) > -1 && s.push(239, 191, 189),
                            i = r;
                            continue
                        }
                        r = 65536 + (i - 55296 << 10 | r - 56320)
                    } else
                        i && (e -= 3) > -1 && s.push(239, 191, 189);
                    if (i = null,
                    r < 128) {
                        if ((e -= 1) < 0)
                            break;
                        s.push(r)
                    } else if (r < 2048) {
                        if ((e -= 2) < 0)
                            break;
                        s.push(r >> 6 | 192, 63 & r | 128)
                    } else if (r < 65536) {
                        if ((e -= 3) < 0)
                            break;
                        s.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
                    } else {
                        if (!(r < 1114112))
                            throw new Error("Invalid code point");
                        if ((e -= 4) < 0)
                            break;
                        s.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
                    }
                }
                return s
            }
            function F(t) {
                return n.toByteArray(function(t) {
                    if ((t = function(t) {
                        return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
                    }(t).replace(D, "")).length < 2)
                        return "";
                    for (; t.length % 4 != 0; )
                        t += "=";
                    return t
                }(t))
            }
            function K(t, e, r, n) {
                for (var i = 0; i < n && !(i + r >= e.length || i >= t.length); ++i)
                    e[i + r] = t[i];
                return i
            }
        }
        ).call(this, r(38))
    }
    , function(t, e) {
        var r;
        r = function() {
            return this
        }();
        try {
            r = r || Function("return this")() || (0,
            eval)("this")
        } catch (t) {
            "object" == typeof window && (r = window)
        }
        t.exports = r
    }
    , function(t, e, r) {
        "use strict";
        e.byteLength = function(t) {
            var e = u(t)
              , r = e[0]
              , n = e[1];
            return 3 * (r + n) / 4 - n
        }
        ,
        e.toByteArray = function(t) {
            for (var e, r = u(t), n = r[0], o = r[1], l = new s(function(t, e, r) {
                return 3 * (e + r) / 4 - r
            }(0, n, o)), a = 0, h = o > 0 ? n - 4 : n, c = 0; c < h; c += 4)
                e = i[t.charCodeAt(c)] << 18 | i[t.charCodeAt(c + 1)] << 12 | i[t.charCodeAt(c + 2)] << 6 | i[t.charCodeAt(c + 3)],
                l[a++] = e >> 16 & 255,
                l[a++] = e >> 8 & 255,
                l[a++] = 255 & e;
            2 === o && (e = i[t.charCodeAt(c)] << 2 | i[t.charCodeAt(c + 1)] >> 4,
            l[a++] = 255 & e);
            1 === o && (e = i[t.charCodeAt(c)] << 10 | i[t.charCodeAt(c + 1)] << 4 | i[t.charCodeAt(c + 2)] >> 2,
            l[a++] = e >> 8 & 255,
            l[a++] = 255 & e);
            return l
        }
        ,
        e.fromByteArray = function(t) {
            for (var e, r = t.length, i = r % 3, s = [], o = 0, l = r - i; o < l; o += 16383)
                s.push(h(t, o, o + 16383 > l ? l : o + 16383));
            1 === i ? (e = t[r - 1],
            s.push(n[e >> 2] + n[e << 4 & 63] + "==")) : 2 === i && (e = (t[r - 2] << 8) + t[r - 1],
            s.push(n[e >> 10] + n[e >> 4 & 63] + n[e << 2 & 63] + "="));
            return s.join("")
        }
        ;
        for (var n = [], i = [], s = "undefined" != typeof Uint8Array ? Uint8Array : Array, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", l = 0, a = o.length; l < a; ++l)
            n[l] = o[l],
            i[o.charCodeAt(l)] = l;
        function u(t) {
            var e = t.length;
            if (e % 4 > 0)
                throw new Error("Invalid string. Length must be a multiple of 4");
            var r = t.indexOf("=");
            return -1 === r && (r = e),
            [r, r === e ? 0 : 4 - r % 4]
        }
        function h(t, e, r) {
            for (var i, s, o = [], l = e; l < r; l += 3)
                i = (t[l] << 16 & 16711680) + (t[l + 1] << 8 & 65280) + (255 & t[l + 2]),
                o.push(n[(s = i) >> 18 & 63] + n[s >> 12 & 63] + n[s >> 6 & 63] + n[63 & s]);
            return o.join("")
        }
        i["-".charCodeAt(0)] = 62,
        i["_".charCodeAt(0)] = 63
    }
    , function(t, e) {
        e.read = function(t, e, r, n, i) {
            var s, o, l = 8 * i - n - 1, a = (1 << l) - 1, u = a >> 1, h = -7, c = r ? i - 1 : 0, f = r ? -1 : 1, d = t[e + c];
            for (c += f,
            s = d & (1 << -h) - 1,
            d >>= -h,
            h += l; h > 0; s = 256 * s + t[e + c],
            c += f,
            h -= 8)
                ;
            for (o = s & (1 << -h) - 1,
            s >>= -h,
            h += n; h > 0; o = 256 * o + t[e + c],
            c += f,
            h -= 8)
                ;
            if (0 === s)
                s = 1 - u;
            else {
                if (s === a)
                    return o ? NaN : 1 / 0 * (d ? -1 : 1);
                o += Math.pow(2, n),
                s -= u
            }
            return (d ? -1 : 1) * o * Math.pow(2, s - n)
        }
        ,
        e.write = function(t, e, r, n, i, s) {
            var o, l, a, u = 8 * s - i - 1, h = (1 << u) - 1, c = h >> 1, f = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0, d = n ? 0 : s - 1, p = n ? 1 : -1, g = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
            for (e = Math.abs(e),
            isNaN(e) || e === 1 / 0 ? (l = isNaN(e) ? 1 : 0,
            o = h) : (o = Math.floor(Math.log(e) / Math.LN2),
            e * (a = Math.pow(2, -o)) < 1 && (o--,
            a *= 2),
            (e += o + c >= 1 ? f / a : f * Math.pow(2, 1 - c)) * a >= 2 && (o++,
            a /= 2),
            o + c >= h ? (l = 0,
            o = h) : o + c >= 1 ? (l = (e * a - 1) * Math.pow(2, i),
            o += c) : (l = e * Math.pow(2, c - 1) * Math.pow(2, i),
            o = 0)); i >= 8; t[r + d] = 255 & l,
            d += p,
            l /= 256,
            i -= 8)
                ;
            for (o = o << i | l,
            u += i; u > 0; t[r + d] = 255 & o,
            d += p,
            o /= 256,
            u -= 8)
                ;
            t[r + d - p] |= 128 * g
        }
    }
    , function(t, e) {
        var r = {}.toString;
        t.exports = Array.isArray || function(t) {
            return "[object Array]" == r.call(t)
        }
    }
    , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, r) {
        t.exports = r(29)
    }
    ]).default
});
