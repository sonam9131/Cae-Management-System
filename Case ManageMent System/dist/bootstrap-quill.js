!function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.Quill = e() : t.Quill = e()
}(window, function() {
    return function(t) {
        var e = {};
        function r(i) {
            if (e[i])
                return e[i].exports;
            var n = e[i] = {
                i: i,
                l: !1,
                exports: {}
            };
            return t[i].call(n.exports, n, n.exports, r),
            n.l = !0,
            n.exports
        }
        return r.m = t,
        r.c = e,
        r.d = function(t, e, i) {
            r.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: i
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
            var i = Object.create(null);
            if (r.r(i),
            Object.defineProperty(i, "default", {
                enumerable: !0,
                value: t
            }),
            2 & e && "string" != typeof t)
                for (var n in t)
                    r.d(i, n, function(e) {
                        return t[e]
                    }
                    .bind(null, n));
            return i
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
        r(r.s = 43)
    }([function(t, e, r) {
        "use strict";
        r.r(e);
        var i, n = class {
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
                let e, r = this.iterator(), i = 0;
                for (; e = r(); ) {
                    if (e === t)
                        return i;
                    i += 1
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
                let r, i = this.iterator();
                for (; r = i(); ) {
                    let i = r.length();
                    if (t < i || e && t === i && (null == r.next || 0 !== r.next.length()))
                        return [r, t];
                    t -= i
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
                let i, [n,s] = this.find(t), o = t - s, l = this.iterator(n);
                for (; (i = l()) && o < t + e; ) {
                    let n = i.length();
                    t > o ? r(i, t - o, Math.min(e, o + n - t)) : r(i, 0, Math.min(n, t + e - o)),
                    o += n
                }
            }
            map(t) {
                return this.reduce(function(e, r) {
                    return e.push(t(r)),
                    e
                }, [])
            }
            reduce(t, e) {
                let r, i = this.iterator();
                for (; r = i(); )
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
        }(i || (i = {}));
        var o = i;
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
                const i = this.query(e);
                if (null == i)
                    throw new s(`Unable to create ${e} blot`);
                const n = i
                  , o = new n(t,e instanceof Node || e.nodeType === Node.TEXT_NODE ? e : n.create(r),r);
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
            formatAt(t, e, r, i) {
                let n = this.isolate(t, e);
                if (null != this.scroll.query(r, o.BLOT) && i)
                    n.wrap(r, i);
                else if (null != this.scroll.query(r, o.ATTRIBUTE)) {
                    let t = this.scroll.create(this.statics.scope);
                    n.wrap(t),
                    t.format(r, i)
                }
            }
            insertAt(t, e, r) {
                let i = null == r ? this.scroll.create("text", e) : this.scroll.create(e, r)
                  , n = this.split(t);
                this.parent.insertBefore(i, n || void 0)
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
        class c extends u {
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
                this.children = new n,
                Array.from(this.domNode.childNodes).filter(t=>t !== this.uiNode).reverse().forEach(t=>{
                    try {
                        let e = h(t, this.scroll);
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
                let[r,i] = this.children.find(e);
                return null == t.blotName && t(r) || null != t.blotName && r instanceof t ? [r, i] : r instanceof c ? r.descendant(t, i) : [null, -1]
            }
            descendants(t, e=0, r=Number.MAX_VALUE) {
                let i = []
                  , n = r;
                return this.children.forEachAt(e, r, function(e, r, s) {
                    (null == t.blotName && t(e) || null != t.blotName && e instanceof t) && i.push(e),
                    e instanceof c && (i = i.concat(e.descendants(t, r, n))),
                    n -= s
                }),
                i
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
                    t = !0) : e instanceof c ? e.unwrap() : e.remove())
                }
                )
            }
            formatAt(t, e, r, i) {
                this.children.forEachAt(t, e, function(t, e, n) {
                    t.formatAt(e, n, r, i)
                })
            }
            insertAt(t, e, r) {
                let[i,n] = this.children.find(t);
                if (i)
                    i.insertAt(n, e, r);
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
                let[r,i] = this.children.find(t, e)
                  , n = [[this, t]];
                return r instanceof c ? n.concat(r.path(i, e)) : (null != r && n.push([r, i]),
                n)
            }
            removeChild(t) {
                this.children.remove(t)
            }
            replaceWith(t, e) {
                const r = "string" == typeof t ? this.scroll.create(t, e) : t;
                return r instanceof c && this.moveChildren(r),
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
                this.children.forEachAt(t, this.length(), function(t, i, n) {
                    const s = t.split(i, e);
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
                  , i = [];
                t.forEach(t=>{
                    t.target === this.domNode && "childList" === t.type && (r.push.apply(r, t.addedNodes),
                    i.push.apply(i, t.removedNodes))
                }
                ),
                i.forEach(t=>{
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
                    let r = h(t, this.scroll);
                    r.next == e && null != r.next || (null != r.parent && r.parent.removeChild(this),
                    this.insertBefore(r, e || void 0))
                }
                ),
                this.enforceAllowedChildren()
            }
        }
        function h(t, e) {
            let r = e.find(t);
            if (null == r)
                try {
                    r = e.create(t)
                } catch (i) {
                    r = e.create(o.INLINE),
                    Array.from(t.childNodes).forEach(function(t) {
                        r.domNode.appendChild(t)
                    }),
                    t.parentNode && t.parentNode.replaceChild(r.domNode, t),
                    r.attach()
                }
            return r
        }
        var d = c;
        class f extends d {
            checkMerge() {
                return null !== this.next && this.next.statics.blotName === this.statics.blotName
            }
            deleteAt(t, e) {
                super.deleteAt(t, e),
                this.enforceAllowedChildren()
            }
            formatAt(t, e, r, i) {
                super.formatAt(t, e, r, i),
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
        f.blotName = "container",
        f.scope = o.BLOCK_BLOT;
        var p = f;
        class m extends u {
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
        m.scope = o.INLINE_BLOT;
        var g = m;
        class b {
            static keys(t) {
                return Array.from(t.attributes).map(function(t) {
                    return t.name
                })
            }
            constructor(t, e, r={}) {
                this.attrName = t,
                this.keyName = e;
                let i = o.TYPE & o.ATTRIBUTE;
                null != r.scope ? this.scope = r.scope & o.LEVEL | i : this.scope = o.ATTRIBUTE,
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
        function y(t, e) {
            return (t.getAttribute("class") || "").split(/\s+/).filter(function(t) {
                return 0 === t.indexOf(`${e}-`)
            })
        }
        var v = class extends b {
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
                y(t, this.keyName).forEach(function(e) {
                    t.classList.remove(e)
                }),
                0 === t.classList.length && t.removeAttribute("class")
            }
            value(t) {
                let e = (y(t, this.keyName)[0] || "").slice(this.keyName.length + 1);
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
        var E = class extends b {
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
                let e = b.keys(this.domNode)
                  , r = v.keys(this.domNode)
                  , i = E.keys(this.domNode);
                e.concat(r).concat(i).forEach(e=>{
                    let r = t.scroll.query(e, o.ATTRIBUTE);
                    r instanceof b && (this.attributes[r.attrName] = r)
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
        class w extends d {
            constructor(t, e) {
                super(t, e),
                this.attributes = new x(this.domNode)
            }
            static formats(t, e) {
                const r = e.query(w.blotName);
                if (null == r || t.tagName !== r.tagName)
                    return "string" == typeof this.tagName || (Array.isArray(this.tagName) ? t.tagName.toLowerCase() : void 0)
            }
            format(t, e) {
                if (t !== this.statics.blotName || e) {
                    const r = this.scroll.query(t, o.INLINE);
                    if (null == r)
                        return;
                    r instanceof b ? this.attributes.attribute(r, e) : !e || t === this.statics.blotName && this.formats()[t] === e || this.replaceWith(t, e)
                } else
                    this.children.forEach(t=>{
                        t instanceof w || (t = t.wrap(w.blotName, !0)),
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
            formatAt(t, e, r, i) {
                if (null != this.formats()[r] || this.scroll.query(r, o.ATTRIBUTE)) {
                    this.isolate(t, e).format(r, i)
                } else
                    super.formatAt(t, e, r, i)
            }
            optimize(t) {
                super.optimize(t);
                let e = this.formats();
                if (0 === Object.keys(e).length)
                    return this.unwrap();
                let r = this.next;
                r instanceof w && r.prev === this && function(t, e) {
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
                return r instanceof w && this.attributes.move(r),
                r
            }
        }
        w.allowedChildren = [w, g],
        w.blotName = "inline",
        w.scope = o.INLINE_BLOT,
        w.tagName = "SPAN";
        var A = w;
        class L extends d {
            constructor(t, e) {
                super(t, e),
                this.attributes = new x(this.domNode)
            }
            static formats(t, e) {
                const r = e.query(L.blotName);
                if (null == r || t.tagName !== r.tagName)
                    return "string" == typeof this.tagName || (Array.isArray(this.tagName) ? t.tagName.toLowerCase() : void 0)
            }
            format(t, e) {
                const r = this.scroll.query(t, o.BLOCK);
                null != r && (r instanceof b ? this.attributes.attribute(r, e) : t !== this.statics.blotName || e ? !e || t === this.statics.blotName && this.formats()[t] === e || this.replaceWith(t, e) : this.replaceWith(L.blotName))
            }
            formats() {
                const t = this.attributes.values()
                  , e = this.statics.formats(this.domNode, this.scroll);
                return null != e && (t[this.statics.blotName] = e),
                t
            }
            formatAt(t, e, r, i) {
                null != this.scroll.query(r, o.BLOCK) ? this.format(r, i) : super.formatAt(t, e, r, i)
            }
            insertAt(t, e, r) {
                if (null == r || null != this.scroll.query(e, o.INLINE))
                    super.insertAt(t, e, r);
                else {
                    const i = this.split(t);
                    if (null == i)
                        throw new Error("Attempt to insertAt after block boundaries");
                    {
                        const t = this.scroll.create(e, r);
                        i.parent.insertBefore(t, i)
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
        L.allowedChildren = [A, L, g],
        L.blotName = "block",
        L.scope = o.BLOCK_BLOT,
        L.tagName = "P";
        var T = L;
        const q = {
            attributes: !0,
            characterData: !0,
            characterDataOldValue: !0,
            childList: !0,
            subtree: !0
        }
          , S = 100;
        class k extends d {
            constructor(t, e) {
                super(null, e),
                this.registry = t,
                this.scroll = this,
                this.build(),
                this.observer = new MutationObserver(t=>{
                    this.update(t)
                }
                ),
                this.observer.observe(this.domNode, q),
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
            formatAt(t, e, r, i) {
                this.update(),
                super.formatAt(t, e, r, i)
            }
            insertAt(t, e, r) {
                this.update(),
                super.insertAt(t, e, r)
            }
            optimize(t=[], e={}) {
                super.optimize(e);
                const r = e.mutationsMap || new WeakMap;
                let i = Array.from(this.observer.takeRecords());
                for (; i.length > 0; )
                    t.push(i.pop());
                let n = (t,e=!0)=>{
                    null != t && t !== this && null != t.domNode.parentNode && (r.has(t.domNode) || r.set(t.domNode, []),
                    e && n(t.parent))
                }
                  , s = function(t) {
                    r.has(t.domNode) && (t instanceof d && t.children.forEach(s),
                    r.delete(t.domNode),
                    t.optimize(e))
                }
                  , o = t;
                for (let e = 0; o.length > 0; e += 1) {
                    if (e >= S)
                        throw new Error("[Parchment] Maximum optimize iterations reached");
                    for (o.forEach(t=>{
                        let e = this.find(t.target, !0);
                        null != e && (e.domNode === t.target && ("childList" === t.type ? (n(this.find(t.previousSibling, !1)),
                        Array.from(t.addedNodes).forEach(t=>{
                            const e = this.find(t, !1);
                            n(e, !1),
                            e instanceof d && e.children.forEach(function(t) {
                                n(t, !1)
                            })
                        }
                        )) : "attributes" === t.type && n(e.prev)),
                        n(e))
                    }
                    ),
                    this.children.forEach(s),
                    i = (o = Array.from(this.observer.takeRecords())).slice(); i.length > 0; )
                        t.push(i.pop())
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
        k.defaultChild = T,
        k.allowedChildren = [T, p],
        k.scope = o.BLOCK_BLOT,
        k.tagName = "DIV";
        var C = k;
        var O = class extends g {
            static formats(t, e) {}
            format(t, e) {
                super.formatAt(0, this.length(), t, e)
            }
            formatAt(t, e, r, i) {
                0 === t && e === this.length() ? this.format(r, i) : super.formatAt(t, e, r, i)
            }
            formats() {
                return this.statics.formats(this.domNode, this.scroll)
            }
        }
        ;
        class R extends g {
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
                0 === this.text.length ? this.remove() : this.next instanceof R && this.next.prev === this && (this.insertAt(this.length(), this.next.value()),
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
        R.blotName = "text",
        R.scope = o.INLINE_BLOT;
        var B = R;
        r.d(e, "ParentBlot", function() {
            return d
        }),
        r.d(e, "ContainerBlot", function() {
            return p
        }),
        r.d(e, "LeafBlot", function() {
            return g
        }),
        r.d(e, "EmbedBlot", function() {
            return O
        }),
        r.d(e, "ScrollBlot", function() {
            return C
        }),
        r.d(e, "BlockBlot", function() {
            return T
        }),
        r.d(e, "InlineBlot", function() {
            return A
        }),
        r.d(e, "TextBlot", function() {
            return B
        }),
        r.d(e, "Attributor", function() {
            return b
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
        var i = r(2)
          , n = r.n(i)
          , s = r(0)
          , o = r(5)
          , l = r.n(o)
          , a = r(13)
          , u = r.n(a)
          , c = r(16)
          , h = r.n(c)
          , d = r(18)
          , f = r.n(d)
          , p = r(17)
          , m = r(4)
          , g = r(7)
          , b = r(6);
        const y = /^[ -~]*$/;
        function v(t, e, r, i=!1) {
            if ("function" == typeof t.html)
                return t.html(e, r);
            if (t instanceof b.a)
                return t.value().slice(e, e + r);
            if (t.children) {
                if ("list-container" === t.statics.blotName) {
                    const i = [];
                    return t.children.forEachAt(e, r, (t,e,r)=>{
                        const n = t.formats();
                        i.push({
                            child: t,
                            offset: e,
                            length: r,
                            indent: n.indent || 0,
                            type: n.list
                        })
                    }
                    ),
                    function t(e, r, i) {
                        if (0 === e.length) {
                            const [e] = E(i.pop());
                            return r <= 0 ? `</li></${e}>` : `</li></${e}>${t([], r - 1, i)}`
                        }
                        const [{child: n, offset: s, length: o, indent: l, type: a},...u] = e
                          , [c,h] = E(a);
                        if (l > r)
                            return i.push(c),
                            `<${c}><li${h}>${v(n, s, o)}${t(u, l, i)}`;
                        if (l === r)
                            return `</li><li${h}>${v(n, s, o)}${t(u, l, i)}`;
                        if (l === r - 1) {
                            const [e] = E(i.pop());
                            return `</li></${e}></li><li${h}>${v(n, s, o)}${t(u, l, i)}`
                        }
                        const [d] = E(i.pop());
                        return `</li></${d}>${t(e, r - 1, i)}`
                    }(i, -1, [])
                }
                const n = [];
                if (t.children.forEachAt(e, r, (t,e,r)=>{
                    n.push(v(t, e, r))
                }
                ),
                i || "list" === t.statics.blotName)
                    return n.join("");
                const {outerHTML: s, innerHTML: o} = t.domNode
                  , [l,a] = s.split(`>${o}<`);
                return `${l}>${n.join("")}<${a}`
            }
            return t.domNode.outerHTML
        }
        function N(t, e) {
            return Object.keys(e).reduce((r,i)=>null == t[i] ? r : (e[i] === t[i] ? r[i] = e[i] : Array.isArray(e[i]) ? e[i].indexOf(t[i]) < 0 && (r[i] = e[i].concat([t[i]])) : r[i] = [e[i], t[i]],
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
                const i = function(t) {
                    return t.reduce((t,e)=>{
                        if ("string" == typeof e.insert) {
                            const r = e.insert.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
                            return t.insert(r, e.attributes)
                        }
                        return t.push(e)
                    }
                    , new n.a)
                }(t);
                return i.reduce((t,i)=>{
                    const n = i.retain || i.delete || i.insert.length || 1;
                    let o = i.attributes || {};
                    if (null != i.insert) {
                        if ("string" == typeof i.insert) {
                            let n = i.insert;
                            n.endsWith("\n") && e && (e = !1,
                            n = n.slice(0, -1)),
                            t >= r && !n.endsWith("\n") && (e = !0),
                            this.scroll.insertAt(t, n);
                            const [a,u] = this.scroll.line(t);
                            let c = l()({}, Object(m.c)(a));
                            if (a instanceof m.d) {
                                const [t] = a.descendant(s.LeafBlot, u);
                                c = l()(c, Object(m.c)(t))
                            }
                            o = f.a.attributes.diff(c, o) || {}
                        } else if ("object" == typeof i.insert) {
                            const e = Object.keys(i.insert)[0];
                            if (null == e)
                                return t;
                            this.scroll.insertAt(t, e, i.insert[e])
                        }
                        r += n
                    }
                    return Object.keys(o).forEach(e=>{
                        this.scroll.formatAt(t, n, e, o[e])
                    }
                    ),
                    t + n
                }
                , 0),
                i.reduce((t,e)=>"number" == typeof e.delete ? (this.scroll.deleteAt(t, e.delete),
                t) : t + (e.retain || e.insert.length || 1), 0),
                this.scroll.batchEnd(),
                this.scroll.optimize(),
                this.update(i)
            }
            deleteText(t, e) {
                return this.scroll.deleteAt(t, e),
                this.update((new n.a).retain(t).delete(e))
            }
            formatLine(t, e, r={}) {
                this.scroll.update(),
                Object.keys(r).forEach(i=>{
                    this.scroll.lines(t, Math.max(e, 1)).forEach(t=>{
                        t.format(i, r[i])
                    }
                    )
                }
                ),
                this.scroll.optimize();
                const i = (new n.a).retain(t).retain(e, u()(r));
                return this.update(i)
            }
            formatText(t, e, r={}) {
                Object.keys(r).forEach(i=>{
                    this.scroll.formatAt(t, e, i, r[i])
                }
                );
                const i = (new n.a).retain(t).retain(e, u()(r));
                return this.update(i)
            }
            getContents(t, e) {
                return this.delta.slice(t, t + e)
            }
            getDelta() {
                return this.scroll.lines().reduce((t,e)=>t.concat(e.delta()), new n.a)
            }
            getFormat(t, e=0) {
                let r = []
                  , i = [];
                0 === e ? this.scroll.path(t).forEach(t=>{
                    const [e] = t;
                    e instanceof m.d ? r.push(e) : e instanceof s.LeafBlot && i.push(e)
                }
                ) : (r = this.scroll.lines(t, e),
                i = this.scroll.descendants(s.LeafBlot, t, e));
                const n = [r, i].map(t=>{
                    if (0 === t.length)
                        return {};
                    let e = Object(m.c)(t.shift());
                    for (; Object.keys(e).length > 0; ) {
                        const r = t.shift();
                        if (null == r)
                            return e;
                        e = N(Object(m.c)(r), e)
                    }
                    return e
                }
                );
                return l.a.apply(l.a, n)
            }
            getHTML(t, e) {
                const [r,i] = this.scroll.line(t);
                return r.length() >= i + e ? v(r, i, e, !0) : v(this.scroll, t, e, !0)
            }
            getText(t, e) {
                return this.getContents(t, e).filter(t=>"string" == typeof t.insert).map(t=>t.insert).join("")
            }
            insertEmbed(t, e, r) {
                return this.scroll.insertAt(t, e, r),
                this.update((new n.a).retain(t).insert({
                    [e]: r
                }))
            }
            insertText(t, e, r={}) {
                return e = e.replace(/\r\n/g, "\n").replace(/\r/g, "\n"),
                this.scroll.insertAt(t, e),
                Object.keys(r).forEach(i=>{
                    this.scroll.formatAt(t, e.length, i, r[i])
                }
                ),
                this.update((new n.a).retain(t).insert(e, u()(r)))
            }
            isBlank() {
                if (0 === this.scroll.children.length)
                    return !0;
                if (this.scroll.children.length > 1)
                    return !1;
                const t = this.scroll.children.head;
                return t.statics.blotName === m.d.blotName && !(t.children.length > 1) && t.children.head instanceof g.a
            }
            removeFormat(t, e) {
                const r = this.getText(t, e)
                  , [i,s] = this.scroll.line(t + e);
                let o = 0
                  , l = new n.a;
                null != i && (o = i.length() - s,
                l = i.delta().slice(s, s + o - 1).insert("\n"));
                const a = this.getContents(t, e + o).diff((new n.a).insert(r).concat(l))
                  , u = (new n.a).retain(t).concat(a);
                return this.applyDelta(u)
            }
            update(t, e=[], r) {
                const i = this.delta;
                if (1 === e.length && "characterData" === e[0].type && e[0].target.data.match(y) && this.scroll.find(e[0].target)) {
                    const s = this.scroll.find(e[0].target)
                      , o = Object(m.c)(s)
                      , l = s.offset(this.scroll)
                      , a = e[0].oldValue.replace(p.a.CONTENTS, "")
                      , u = (new n.a).insert(a)
                      , c = (new n.a).insert(s.value());
                    t = (new n.a).retain(l).concat(u.diff(c, r)).reduce((t,e)=>e.insert ? t.insert(e.insert, o) : t.push(e), new n.a),
                    this.delta = i.compose(t)
                } else
                    this.delta = this.getDelta(),
                    t && h()(i.compose(t), this.delta) || (t = i.diff(this.delta, r));
                return t
            }
        }
          , w = r(3)
          , A = r(8)
          , L = r(20)
          , T = r(22)
          , q = r(11)
          , S = r(24);
        r.d(e, "a", function() {
            return O
        });
        const k = Object(q.a)("quill")
          , C = new s.Registry;
        class O {
            static debug(t) {
                !0 === t && (t = "log"),
                q.a.level(t)
            }
            static find(t) {
                return T.a.get(t) || C.find(t)
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
                    }, e)).theme && e.theme !== O.DEFAULTS.theme) {
                        if (e.theme = O.import(`themes/${e.theme}`),
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
                    const i = Object.keys(r.modules).concat(Object.keys(e.modules)).reduce((t,e)=>{
                        const r = O.import(`modules/${e}`);
                        return null == r ? k.error(`Cannot load ${e} module. Are you sure you registered it?`) : t[e] = r.DEFAULTS || {},
                        t
                    }
                    , {});
                    null != e.modules && e.modules.toolbar && e.modules.toolbar.constructor !== Object && (e.modules.toolbar = {
                        container: e.modules.toolbar
                    });
                    return e = l()(!0, {}, O.DEFAULTS, {
                        modules: i
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
                this.options.debug && O.debug(this.options.debug);
                const r = this.container.innerHTML.trim();
                this.container.classList.add("ql-container"),
                this.container.innerHTML = "",
                T.a.set(this.container, this),
                this.root = this.addContainer("ql-editor"),
                this.root.addEventListener("dragstart", t=>{
                    t.preventDefault()
                }
                ),
                this.root.classList.add("ql-blank"),
                this.root.setAttribute("data-gramm", !1),
                this.scrollingContainer = this.options.scrollingContainer || this.root,
                this.emitter = new w.a;
                const i = this.options.registry.query(s.ScrollBlot.blotName);
                this.scroll = new i(this.options.registry,this.root,{
                    emitter: this.emitter
                }),
                this.editor = new x(this.scroll),
                this.selection = new L.b(this.scroll,this.emitter),
                this.theme = new this.options.theme(this,this.options),
                this.keyboard = this.theme.addModule("keyboard"),
                this.clipboard = this.theme.addModule("clipboard"),
                this.history = this.theme.addModule("history"),
                this.uploader = this.theme.addModule("uploader"),
                this.theme.init(),
                this.emitter.on(w.a.events.EDITOR_CHANGE, t=>{
                    t === w.a.events.TEXT_CHANGE && this.root.classList.toggle("ql-blank", this.editor.isBlank())
                }
                ),
                this.emitter.on(w.a.events.SCROLL_UPDATE, (t,e)=>{
                    const r = this.selection.lastRange
                      , i = r && 0 === r.length ? r.index : void 0;
                    R.call(this, ()=>this.editor.update(null, e, i), t)
                }
                );
                const n = this.clipboard.convert({
                    html: `${r}<p><br></p>`,
                    text: "\n"
                });
                this.setContents(n),
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
                return [t,e,,r] = B(t, e, r),
                R.call(this, ()=>this.editor.deleteText(t, e), r, t, -1 * e)
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
            format(t, e, r=w.a.sources.API) {
                return R.call(this, ()=>{
                    const r = this.getSelection(!0);
                    let i = new n.a;
                    if (null == r)
                        return i;
                    if (this.scroll.query(t, s.Scope.BLOCK))
                        i = this.editor.formatLine(r.index, r.length, {
                            [t]: e
                        });
                    else {
                        if (0 === r.length)
                            return this.selection.format(t, e),
                            i;
                        i = this.editor.formatText(r.index, r.length, {
                            [t]: e
                        })
                    }
                    return this.setSelection(r, w.a.sources.SILENT),
                    i
                }
                , r)
            }
            formatLine(t, e, r, i, n) {
                let s;
                return [t,e,s,n] = B(t, e, r, i, n),
                R.call(this, ()=>this.editor.formatLine(t, e, s), n, t, 0)
            }
            formatText(t, e, r, i, n) {
                let s;
                return [t,e,s,n] = B(t, e, r, i, n),
                R.call(this, ()=>this.editor.formatText(t, e, s), n, t, 0)
            }
            getBounds(t, e=0) {
                let r;
                r = "number" == typeof t ? this.selection.getBounds(t, e) : this.selection.getBounds(t.index, t.length);
                const i = this.container.getBoundingClientRect();
                return {
                    bottom: r.bottom - i.top,
                    height: r.height,
                    left: r.left - i.left,
                    right: r.right - i.left,
                    top: r.top - i.top,
                    width: r.width
                }
            }
            getContents(t=0, e=this.getLength() - t) {
                return [t,e] = B(t, e),
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
                return [t,e] = B(t, e),
                this.editor.getHTML(t, e)
            }
            getText(t=0, e=this.getLength() - t) {
                return [t,e] = B(t, e),
                this.editor.getText(t, e)
            }
            hasFocus() {
                return this.selection.hasFocus()
            }
            insertEmbed(t, e, r, i=O.sources.API) {
                return R.call(this, ()=>this.editor.insertEmbed(t, e, r), i, t)
            }
            insertText(t, e, r, i, n) {
                let s;
                return [t,,s,n] = B(t, 0, r, i, n),
                R.call(this, ()=>this.editor.insertText(t, e, s), n, t, e.length)
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
                return [t,e,,r] = B(t, e, r),
                R.call(this, ()=>this.editor.removeFormat(t, e), r, t)
            }
            scrollIntoView() {
                this.selection.scrollIntoView(this.scrollingContainer)
            }
            setContents(t, e=w.a.sources.API) {
                return R.call(this, ()=>{
                    t = new n.a(t);
                    const e = this.getLength()
                      , r = this.editor.deleteText(0, e)
                      , i = this.editor.applyDelta(t)
                      , s = i.ops[i.ops.length - 1];
                    return null != s && "string" == typeof s.insert && "\n" === s.insert[s.insert.length - 1] && (this.editor.deleteText(this.getLength() - 1, 1),
                    i.delete(1)),
                    r.compose(i)
                }
                , e)
            }
            setSelection(t, e, r) {
                null == t ? this.selection.setRange(null, e || O.sources.API) : ([t,e,,r] = B(t, e, r),
                this.selection.setRange(new L.a(Math.max(0, t),e), r),
                r !== w.a.sources.SILENT && this.selection.scrollIntoView(this.scrollingContainer))
            }
            setText(t, e=w.a.sources.API) {
                const r = (new n.a).insert(t);
                return this.setContents(r, e)
            }
            update(t=w.a.sources.USER) {
                const e = this.scroll.update(t);
                return this.selection.update(t),
                e
            }
            updateContents(t, e=w.a.sources.API) {
                return R.call(this, ()=>(t = new n.a(t),
                this.editor.applyDelta(t, e)), e, !0)
            }
        }
        function R(t, e, r, i) {
            if (!this.isEnabled() && e === w.a.sources.USER)
                return new n.a;
            let s = null == r ? null : this.getSelection();
            const o = this.editor.delta
              , l = t();
            if (null != s && (!0 === r && (r = s.index),
            null == i ? s = I(s, l, e) : 0 !== i && (s = I(s, r, i, e)),
            this.setSelection(s, w.a.sources.SILENT)),
            l.length() > 0) {
                const t = [w.a.events.TEXT_CHANGE, l, o, e];
                this.emitter.emit(w.a.events.EDITOR_CHANGE, ...t),
                e !== w.a.sources.SILENT && this.emitter.emit(...t)
            }
            return l
        }
        function B(t, e, r, i, n) {
            let s = {};
            return "number" == typeof t.index && "number" == typeof t.length ? "number" != typeof e ? (n = i,
            i = r,
            r = e,
            e = t.length,
            t = t.index) : (e = t.length,
            t = t.index) : "number" != typeof e && (n = i,
            i = r,
            r = e,
            e = 0),
            "object" == typeof r ? (s = r,
            n = i) : "string" == typeof r && (null != i ? s[r] = i : n = r),
            [t, e, s, n = n || w.a.sources.API]
        }
        function I(t, e, r, i) {
            if (null == t)
                return null;
            let s, o;
            return e instanceof n.a ? [s,o] = [t.index, t.index + t.length].map(t=>e.transformPosition(t, i !== w.a.sources.USER)) : [s,o] = [t.index, t.index + t.length].map(t=>t < e || t === e && i === w.a.sources.USER ? t : r >= 0 ? t + r : Math.max(e, t + r)),
            new L.a(s,o - s)
        }
        O.DEFAULTS = {
            bounds: null,
            modules: {},
            placeholder: "",
            readOnly: !1,
            registry: C,
            scrollingContainer: null,
            theme: "default"
        },
        O.events = w.a.events,
        O.sources = w.a.sources,
        O.version = "undefined" == typeof QUILL_VERSION ? "dev" : QUILL_VERSION,
        O.imports = {
            delta: n.a,
            parchment: s,
            "core/module": A.a,
            "core/theme": S.a
        }
    }
    , function(t, e, r) {
        var i = r(34)
          , n = r(16)
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
                if (n(t.attributes, r.attributes)) {
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
            return this.forEach(function(i) {
                (t(i) ? e : r).push(i)
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
            for (var r = [], i = o.iterator(this.ops), n = 0; n < e && i.hasNext(); ) {
                var s;
                n < t ? s = i.next(t - n) : (s = i.next(e - n),
                r.push(s)),
                n += o.length(s)
            }
            return new a(r)
        }
        ,
        a.prototype.compose = function(t) {
            for (var e = o.iterator(this.ops), r = o.iterator(t.ops), i = new a; e.hasNext() || r.hasNext(); )
                if ("insert" === r.peekType())
                    i.push(r.next());
                else if ("delete" === e.peekType())
                    i.push(e.next());
                else {
                    var n = Math.min(e.peekLength(), r.peekLength())
                      , s = e.next(n)
                      , l = r.next(n);
                    if ("number" == typeof l.retain) {
                        var u = {};
                        "number" == typeof s.retain ? u.retain = n : u.insert = s.insert;
                        var c = o.attributes.compose(s.attributes, l.attributes, "number" == typeof s.retain);
                        c && (u.attributes = c),
                        i.push(u)
                    } else
                        "number" == typeof l.delete && "number" == typeof s.retain && i.push(l)
                }
            return i.chop()
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
              , u = i(r[0], r[1], e)
              , c = o.iterator(this.ops)
              , h = o.iterator(t.ops);
            return u.forEach(function(t) {
                for (var e = t[1].length; e > 0; ) {
                    var r = 0;
                    switch (t[0]) {
                    case i.INSERT:
                        r = Math.min(h.peekLength(), e),
                        s.push(h.next(r));
                        break;
                    case i.DELETE:
                        r = Math.min(e, c.peekLength()),
                        c.next(r),
                        s.delete(r);
                        break;
                    case i.EQUAL:
                        r = Math.min(c.peekLength(), h.peekLength(), e);
                        var l = c.next(r)
                          , a = h.next(r);
                        n(l.insert, a.insert) ? s.retain(r, o.attributes.diff(l.attributes, a.attributes)) : s.push(a).delete(r)
                    }
                    e -= r
                }
            }),
            s.chop()
        }
        ,
        a.prototype.eachLine = function(t, e) {
            e = e || "\n";
            for (var r = o.iterator(this.ops), i = new a, n = 0; r.hasNext(); ) {
                if ("insert" !== r.peekType())
                    return;
                var s = r.peek()
                  , l = o.length(s) - r.peekLength()
                  , u = "string" == typeof s.insert ? s.insert.indexOf(e, l) - l : -1;
                if (u < 0)
                    i.push(r.next());
                else if (u > 0)
                    i.push(r.next(u));
                else {
                    if (!1 === t(i, r.next(1).attributes || {}, n))
                        return;
                    n += 1,
                    i = new a
                }
            }
            i.length() > 0 && t(i, {}, n)
        }
        ,
        a.prototype.transform = function(t, e) {
            if (e = !!e,
            "number" == typeof t)
                return this.transformPosition(t, e);
            for (var r = o.iterator(this.ops), i = o.iterator(t.ops), n = new a; r.hasNext() || i.hasNext(); )
                if ("insert" !== r.peekType() || !e && "insert" === i.peekType())
                    if ("insert" === i.peekType())
                        n.push(i.next());
                    else {
                        var s = Math.min(r.peekLength(), i.peekLength())
                          , l = r.next(s)
                          , u = i.next(s);
                        if (l.delete)
                            continue;
                        u.delete ? n.push(u) : n.retain(s, o.attributes.transform(l.attributes, u.attributes, e))
                    }
                else
                    n.retain(o.length(r.next()));
            return n.chop()
        }
        ,
        a.prototype.transformPosition = function(t, e) {
            e = !!e;
            for (var r = o.iterator(this.ops), i = 0; r.hasNext() && i <= t; ) {
                var n = r.peekLength()
                  , s = r.peekType();
                r.next(),
                "delete" !== s ? ("insert" === s && (i < t || !e) && (t += n),
                i += n) : t -= Math.min(n, t - i)
            }
            return t
        }
        ,
        t.exports = a
    }
    , function(t, e, r) {
        "use strict";
        var i = r(32)
          , n = r.n(i)
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
        class a extends n.a {
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
                (this.listeners[t.type] || []).forEach(({node: r, handler: i})=>{
                    (t.target === r || r.contains(t.target)) && i(t, ...e)
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
            return m
        }),
        r.d(e, "a", function() {
            return f
        }),
        r.d(e, "d", function() {
            return d
        });
        var i = r(5)
          , n = r.n(i)
          , s = r(2)
          , o = r.n(s)
          , l = r(0)
          , a = r(7)
          , u = r(10)
          , c = r(6);
        const h = 1;
        class d extends l.BlockBlot {
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
            formatAt(t, e, r, i) {
                e <= 0 || (this.scroll.query(r, l.Scope.BLOCK) ? t + e === this.length() && this.format(r, i) : super.formatAt(t, Math.min(e, this.length() - t - 1), r, i),
                this.cache = {})
            }
            insertAt(t, e, r) {
                if (null != r)
                    return void super.insertAt(t, e, r);
                if (0 === e.length)
                    return;
                const i = e.split("\n")
                  , n = i.shift();
                n.length > 0 && (t < this.length() - 1 || null == this.children.tail ? super.insertAt(Math.min(t, this.length() - 1), n) : this.children.tail.insertAt(this.children.tail.length(), n),
                this.cache = {});
                let s = this;
                i.reduce((t,e)=>((s = s.split(t, !0)).insertAt(0, e),
                e.length), t + n.length)
            }
            insertBefore(t, e) {
                const {head: r} = this.children;
                super.insertBefore(t, e),
                r instanceof a.a && r.remove(),
                this.cache = {}
            }
            length() {
                return null == this.cache.length && (this.cache.length = super.length() + h),
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
                if (e && (0 === t || t >= this.length() - h)) {
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
        d.blotName = "block",
        d.tagName = "P",
        d.defaultChild = a.a,
        d.allowedChildren = [a.a, u.a, l.EmbedBlot, c.a];
        class f extends l.EmbedBlot {
            attach() {
                super.attach(),
                this.attributes = new l.AttributorStore(this.domNode)
            }
            delta() {
                return (new o.a).insert(this.value(), n()(this.formats(), this.attributes.values()))
            }
            format(t, e) {
                const r = this.scroll.query(t, l.Scope.BLOCK_ATTRIBUTE);
                null != r && this.attributes.attribute(r, e)
            }
            formatAt(t, e, r, i) {
                this.format(r, i)
            }
            insertAt(t, e, r) {
                if ("string" == typeof e && e.endsWith("\n")) {
                    const r = this.scroll.create(d.blotName);
                    this.parent.insertBefore(r, 0 === t ? this : this.next),
                    r.insertAt(0, e.slice(0, -1))
                } else
                    super.insertAt(t, e, r)
            }
        }
        function p(t) {
            return t.descendants(l.LeafBlot).reduce((t,e)=>0 === e.length() ? t : t.insert(e.value(), m(e)), new o.a).insert("\n", m(t))
        }
        function m(t, e={}) {
            return null == t ? e : ("function" == typeof t.formats && (e = n()(e, t.formats())),
            null == t.parent || "scroll" === t.parent.blotName || t.parent.statics.scope !== t.statics.scope ? e : m(t.parent, e))
        }
        f.scope = l.Scope.BLOCK_BLOT
    }
    , function(t, e, r) {
        "use strict";
        var i = Object.prototype.hasOwnProperty
          , n = Object.prototype.toString
          , s = function(t) {
            return "function" == typeof Array.isArray ? Array.isArray(t) : "[object Array]" === n.call(t)
        }
          , o = function(t) {
            if (!t || "[object Object]" !== n.call(t))
                return !1;
            var e, r = i.call(t, "constructor"), s = t.constructor && t.constructor.prototype && i.call(t.constructor.prototype, "isPrototypeOf");
            if (t.constructor && !r && !s)
                return !1;
            for (e in t)
                ;
            return void 0 === e || i.call(t, e)
        };
        t.exports = function t() {
            var e, r, i, n, l, a, u = arguments[0], c = 1, h = arguments.length, d = !1;
            for ("boolean" == typeof u && (d = u,
            u = arguments[1] || {},
            c = 2),
            (null == u || "object" != typeof u && "function" != typeof u) && (u = {}); c < h; ++c)
                if (null != (e = arguments[c]))
                    for (r in e)
                        i = u[r],
                        u !== (n = e[r]) && (d && n && (o(n) || (l = s(n))) ? (l ? (l = !1,
                        a = i && s(i) ? i : []) : a = i && o(i) ? i : {},
                        u[r] = t(d, a, n)) : void 0 !== n && (u[r] = n));
            return u
        }
    }
    , function(t, e, r) {
        "use strict";
        var i = r(0);
        e.a = class extends i.TextBlot {
        }
    }
    , function(t, e, r) {
        "use strict";
        var i = r(0);
        class n extends i.EmbedBlot {
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
        n.blotName = "break",
        n.tagName = "BR",
        e.a = n
    }
    , function(t, e, r) {
        "use strict";
        class i {
            constructor(t, e={}) {
                this.quill = t,
                this.options = e
            }
        }
        i.DEFAULTS = {},
        e.a = i
    }
    , function(t, e, r) {
        "use strict";
        var i = r(1)
          , n = r(4)
          , s = r(7)
          , o = r(12)
          , l = r(17)
          , a = r(30)
          , u = r(10)
          , c = r(0)
          , h = r(3);
        function d(t) {
            return t instanceof n.d || t instanceof n.a
        }
        class f extends c.ScrollBlot {
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
                this.emitter.emit(h.a.events.SCROLL_BLOT_MOUNT, t)
            }
            emitUnmount(t) {
                this.emitter.emit(h.a.events.SCROLL_BLOT_UNMOUNT, t)
            }
            deleteAt(t, e) {
                const [r,i] = this.line(t)
                  , [o] = this.line(t + e);
                if (super.deleteAt(t, e),
                null != o && r !== o && i > 0) {
                    if (r instanceof n.a || o instanceof n.a)
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
            formatAt(t, e, r, i) {
                super.formatAt(t, e, r, i),
                this.optimize()
            }
            insertAt(t, e, r) {
                if (t >= this.length())
                    if (null == r || null == this.scroll.query(e, c.Scope.BLOCK)) {
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
                if (t.statics.scope === c.Scope.INLINE_BLOT) {
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
                return t === this.length() ? this.line(t - 1) : this.descendant(d, t)
            }
            lines(t=0, e=Number.MAX_VALUE) {
                const r = (t,e,i)=>{
                    let n = []
                      , s = i;
                    return t.children.forEachAt(e, i, (t,e,i)=>{
                        d(t) ? n.push(t) : t instanceof c.ContainerBlot && (n = n.concat(r(t, e, s))),
                        s -= i
                    }
                    ),
                    n
                }
                ;
                return r(this, t, e)
            }
            optimize(t=[], e={}) {
                !0 !== this.batch && (super.optimize(t, e),
                t.length > 0 && this.emitter.emit(h.a.events.SCROLL_OPTIMIZE, t, e))
            }
            path(t) {
                return super.path(t).slice(1)
            }
            remove() {}
            update(t) {
                if (!0 === this.batch)
                    return;
                let e = h.a.sources.USER;
                "string" == typeof t && (e = t),
                Array.isArray(t) || (t = this.observer.takeRecords()),
                t.length > 0 && this.emitter.emit(h.a.events.SCROLL_BEFORE_UPDATE, e, t),
                super.update(t.concat([])),
                t.length > 0 && this.emitter.emit(h.a.events.SCROLL_UPDATE, e, t)
            }
        }
        f.blotName = "scroll",
        f.className = "ql-editor",
        f.tagName = "DIV",
        f.defaultChild = n.d,
        f.allowedChildren = [n.d, n.a, o.a];
        var p = f
          , m = r(6)
          , g = r(31)
          , b = r(8);
        class y extends b.a {
            constructor(t, e) {
                super(t, e),
                this.lastRecorded = 0,
                this.ignoreChange = !1,
                this.clear(),
                this.quill.on(i.a.events.EDITOR_CHANGE, (t,e,r,n)=>{
                    t !== i.a.events.TEXT_CHANGE || this.ignoreChange || (this.options.userOnly && n !== i.a.sources.USER ? this.transform(e) : this.record(e, r))
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
                this.quill.updateContents(r[t], i.a.sources.USER),
                this.ignoreChange = !1;
                const n = function(t, e) {
                    const r = e.reduce((t,e)=>t + (e.delete || 0), 0);
                    let i = e.length() - r;
                    (function(t, e) {
                        const r = e.ops[e.ops.length - 1];
                        if (null == r)
                            return !1;
                        if (null != r.insert)
                            return "string" == typeof r.insert && r.insert.endsWith("\n");
                        if (null != r.attributes)
                            return Object.keys(r.attributes).some(e=>null != t.query(e, c.Scope.BLOCK));
                        return !1
                    }
                    )(t, e) && (i -= 1);
                    return i
                }(this.quill.scroll, r[t]);
                this.quill.setSelection(n)
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
                const i = Date.now();
                if (this.lastRecorded + this.options.delay > i && this.stack.undo.length > 0) {
                    const e = this.stack.undo.pop();
                    r = r.compose(e.undo),
                    t = e.redo.compose(t)
                } else
                    this.lastRecorded = i;
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
        y.DEFAULTS = {
            delay: 1e3,
            maxStack: 100,
            userOnly: !1
        };
        var v = r(15)
          , N = r(2)
          , E = r.n(N);
        class x extends b.a {
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
                    const i = t.selection.normalizeNative(r)
                      , n = t.selection.normalizedToRange(i);
                    this.upload(n, e.dataTransfer.files)
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
                    this.quill.updateContents(r, h.a.sources.USER),
                    this.quill.setSelection(t.index + e.length, h.a.sources.SILENT)
                }
                )
            }
        };
        var w = x;
        i.a.register({
            "blots/block": n.d,
            "blots/block/embed": n.a,
            "blots/break": s.a,
            "blots/container": o.a,
            "blots/cursor": l.a,
            "blots/embed": a.a,
            "blots/inline": u.a,
            "blots/scroll": p,
            "blots/text": m.a,
            "modules/clipboard": g.a,
            "modules/history": y,
            "modules/keyboard": v.a,
            "modules/uploader": w
        });
        e.a = i.a
    }
    , function(t, e, r) {
        "use strict";
        var i = r(0)
          , n = r(7)
          , s = r(6);
        class o extends i.InlineBlot {
            static compare(t, e) {
                const r = o.order.indexOf(t)
                  , i = o.order.indexOf(e);
                return r >= 0 || i >= 0 ? r - i : t === e ? 0 : t < e ? -1 : 1
            }
            formatAt(t, e, r, n) {
                if (o.compare(this.statics.blotName, r) < 0 && this.scroll.query(r, i.Scope.BLOT)) {
                    const i = this.isolate(t, e);
                    n && i.wrap(r, n)
                } else
                    super.formatAt(t, e, r, n)
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
        o.allowedChildren = [o, n.a, i.EmbedBlot, s.a],
        o.order = ["cursor", "inline", "underline", "strike", "italic", "bold", "script", "link", "code"],
        e.a = o
    }
    , function(t, e, r) {
        "use strict";
        const i = ["error", "warn", "log", "info"];
        let n = "warn";
        function s(t, ...e) {
            i.indexOf(t) <= i.indexOf(n) && console[t](...e)
        }
        function o(t) {
            return i.reduce((e,r)=>(e[r] = s.bind(console, r, t),
            e), {})
        }
        o.level = (t=>{
            n = t
        }
        ),
        s.level = o.level,
        e.a = o
    }
    , function(t, e, r) {
        "use strict";
        var i = r(0);
        e.a = class extends i.ContainerBlot {
        }
    }
    , function(t, e, r) {
        (function(e) {
            var r = function() {
                "use strict";
                function t(t, e) {
                    return null != e && t instanceof e
                }
                var r, i, n;
                try {
                    r = Map
                } catch (t) {
                    r = function() {}
                }
                try {
                    i = Set
                } catch (t) {
                    i = function() {}
                }
                try {
                    n = Promise
                } catch (t) {
                    n = function() {}
                }
                function s(o, a, u, c, h) {
                    "object" == typeof a && (u = a.depth,
                    c = a.prototype,
                    h = a.includeNonEnumerable,
                    a = a.circular);
                    var d = []
                      , f = []
                      , p = void 0 !== e;
                    return void 0 === a && (a = !0),
                    void 0 === u && (u = 1 / 0),
                    function o(u, m) {
                        if (null === u)
                            return null;
                        if (0 === m)
                            return u;
                        var g, b;
                        if ("object" != typeof u)
                            return u;
                        if (t(u, r))
                            g = new r;
                        else if (t(u, i))
                            g = new i;
                        else if (t(u, n))
                            g = new n(function(t, e) {
                                u.then(function(e) {
                                    t(o(e, m - 1))
                                }, function(t) {
                                    e(o(t, m - 1))
                                })
                            }
                            );
                        else if (s.__isArray(u))
                            g = [];
                        else if (s.__isRegExp(u))
                            g = new RegExp(u.source,l(u)),
                            u.lastIndex && (g.lastIndex = u.lastIndex);
                        else if (s.__isDate(u))
                            g = new Date(u.getTime());
                        else {
                            if (p && e.isBuffer(u))
                                return g = new e(u.length),
                                u.copy(g),
                                g;
                            t(u, Error) ? g = Object.create(u) : void 0 === c ? (b = Object.getPrototypeOf(u),
                            g = Object.create(b)) : (g = Object.create(c),
                            b = c)
                        }
                        if (a) {
                            var y = d.indexOf(u);
                            if (-1 != y)
                                return f[y];
                            d.push(u),
                            f.push(g)
                        }
                        for (var v in t(u, r) && u.forEach(function(t, e) {
                            var r = o(e, m - 1)
                              , i = o(t, m - 1);
                            g.set(r, i)
                        }),
                        t(u, i) && u.forEach(function(t) {
                            var e = o(t, m - 1);
                            g.add(e)
                        }),
                        u) {
                            var N;
                            b && (N = Object.getOwnPropertyDescriptor(b, v)),
                            N && null == N.set || (g[v] = o(u[v], m - 1))
                        }
                        if (Object.getOwnPropertySymbols) {
                            var E = Object.getOwnPropertySymbols(u);
                            for (v = 0; v < E.length; v++) {
                                var x = E[v];
                                (!(A = Object.getOwnPropertyDescriptor(u, x)) || A.enumerable || h) && (g[x] = o(u[x], m - 1),
                                A.enumerable || Object.defineProperty(g, x, {
                                    enumerable: !1
                                }))
                            }
                        }
                        if (h) {
                            var w = Object.getOwnPropertyNames(u);
                            for (v = 0; v < w.length; v++) {
                                var A, L = w[v];
                                (A = Object.getOwnPropertyDescriptor(u, L)) && A.enumerable || (g[L] = o(u[L], m - 1),
                                Object.defineProperty(g, L, {
                                    enumerable: !1
                                }))
                            }
                        }
                        return g
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
            return d
        }),
        r.d(e, "b", function() {
            return c
        }),
        r.d(e, "c", function() {
            return h
        });
        var i = r(4)
          , n = r(7)
          , s = r(17)
          , o = r(10)
          , l = r(6)
          , a = r(12)
          , u = r(1);
        class c extends a.a {
            static create(t) {
                const e = super.create(t);
                return e.setAttribute("spellcheck", !1),
                e
            }
            html(t, e) {
                return `<pre>${this.domNode.innerText.slice(t, t + e)}</pre>`
            }
        }
        class h extends i.d {
            static register() {
                u.a.register(c)
            }
        }
        class d extends o.a {
        }
        d.blotName = "code",
        d.tagName = "CODE",
        h.blotName = "code-block",
        h.className = "ql-code-block",
        h.tagName = "DIV",
        c.blotName = "code-block-container",
        c.className = "ql-code-block-container",
        c.tagName = "DIV",
        c.allowedChildren = [h],
        h.allowedChildren = [l.a, n.a, s.a],
        h.requiredContainer = c,
        h.TAB = "  "
    }
    , function(t, e, r) {
        "use strict";
        r.d(e, "a", function() {
            return v
        }),
        r.d(e, "b", function() {
            return S
        });
        var i = r(13)
          , n = r.n(i)
          , s = r(16)
          , o = r.n(s)
          , l = r(5)
          , a = r.n(l)
          , u = r(2)
          , c = r.n(u)
          , h = r(18)
          , d = r.n(h)
          , f = r(0)
          , p = r(1)
          , m = r(11)
          , g = r(8);
        const b = Object(m.a)("quill:keyboard")
          , y = /Mac/i.test(navigator.platform) ? "metaKey" : "ctrlKey";
        class v extends g.a {
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
                }, w),
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
                const i = S(t);
                null != i ? ("function" == typeof e && (e = {
                    handler: e
                }),
                "function" == typeof r && (r = {
                    handler: r
                }),
                (Array.isArray(i.key) ? i.key : [i.key]).forEach(t=>{
                    const n = a()({}, i, {
                        key: t
                    }, e, r);
                    this.bindings[n.key] = this.bindings[n.key] || [],
                    this.bindings[n.key].push(n)
                }
                )) : b.warn("Attempted to add invalid keyboard binding", i)
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
                    const [i,n] = this.quill.getLine(r.index)
                      , [s,l] = this.quill.getLeaf(r.index)
                      , [a,u] = 0 === r.length ? [s, l] : this.quill.getLeaf(r.index + r.length)
                      , c = s instanceof f.TextBlot ? s.value().slice(0, l) : ""
                      , h = a instanceof f.TextBlot ? a.value().slice(u) : ""
                      , d = {
                        collapsed: 0 === r.length,
                        empty: 0 === r.length && i.length() <= 1,
                        format: this.quill.getFormat(r),
                        line: i,
                        offset: n,
                        prefix: c,
                        suffix: h,
                        event: t
                    };
                    e.some(t=>{
                        if (null != t.collapsed && t.collapsed !== d.collapsed)
                            return !1;
                        if (null != t.empty && t.empty !== d.empty)
                            return !1;
                        if (null != t.offset && t.offset !== d.offset)
                            return !1;
                        if (Array.isArray(t.format)) {
                            if (t.format.every(t=>null == d.format[t]))
                                return !1
                        } else if ("object" == typeof t.format && !Object.keys(t.format).every(e=>!0 === t.format[e] ? null != d.format[e] : !1 === t.format[e] ? null == d.format[e] : o()(t.format[e], d.format[e])))
                            return !1;
                        return !(null != t.prefix && !t.prefix.test(d.prefix)) && (!(null != t.suffix && !t.suffix.test(d.suffix)) && !0 !== t.handler.call(this, r, d, t))
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
            let i = {};
            if (0 === e.offset) {
                const [e] = this.quill.getLine(t.index - 1);
                if (null != e && (e.length() > 1 || "table" === e.statics.blotName)) {
                    const e = r.formats()
                      , n = this.quill.getFormat(t.index - 1, 1);
                    i = d.a.attributes.diff(e, n) || {}
                }
            }
            const n = /[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(e.prefix) ? 2 : 1;
            this.quill.deleteText(t.index - n, n, p.a.sources.USER),
            Object.keys(i).length > 0 && this.quill.formatLine(t.index - n, n, i, p.a.sources.USER),
            this.quill.focus()
        }
        function E(t, e) {
            const r = /^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(e.suffix) ? 2 : 1;
            if (t.index >= this.quill.getLength() - r)
                return;
            let i = {}
              , n = 0;
            const [s] = this.quill.getLine(t.index);
            if (e.offset >= s.length() - 1) {
                const [e] = this.quill.getLine(t.index + 1);
                if (e) {
                    const r = s.formats()
                      , o = this.quill.getFormat(t.index, 1);
                    i = d.a.attributes.diff(r, o) || {},
                    n = e.length()
                }
            }
            this.quill.deleteText(t.index, r, p.a.sources.USER),
            Object.keys(i).length > 0 && this.quill.formatLine(t.index + n - 1, r, i, p.a.sources.USER)
        }
        function x(t) {
            const e = this.quill.getLines(t);
            let r = {};
            if (e.length > 1) {
                const t = e[0].formats()
                  , i = e[e.length - 1].formats();
                r = d.a.attributes.diff(i, t) || {}
            }
            this.quill.deleteText(t, p.a.sources.USER),
            Object.keys(r).length > 0 && this.quill.formatLine(t.index, 1, r, p.a.sources.USER),
            this.quill.setSelection(t.index, p.a.sources.SILENT),
            this.quill.focus()
        }
        function w(t, e) {
            t.length > 0 && this.quill.scroll.deleteAt(t.index, t.length);
            const r = Object.keys(e.format).reduce((t,r)=>(this.quill.scroll.query(r, f.Scope.BLOCK) && !Array.isArray(e.format[r]) && (t[r] = e.format[r]),
            t), {});
            this.quill.insertText(t.index, "\n", r, p.a.sources.USER),
            this.quill.setSelection(t.index + 1, p.a.sources.SILENT),
            this.quill.focus(),
            Object.keys(e.format).forEach(t=>{
                null == r[t] && (Array.isArray(e.format[t]) || "link" !== t && this.quill.format(t, e.format[t], p.a.sources.USER))
            }
            )
        }
        function A(t) {
            return {
                key: "Tab",
                shiftKey: !t,
                format: {
                    "code-block": !0
                },
                handler(e) {
                    const r = this.quill.scroll.query("code-block")
                      , i = 0 === e.length ? this.quill.getLines(e.index, 1) : this.quill.getLines(e);
                    let {index: n, length: s} = e;
                    i.forEach((e,i)=>{
                        t ? (e.insertAt(0, r.TAB),
                        0 === i ? n += r.TAB.length : s += r.TAB.length) : e.domNode.textContent.startsWith(r.TAB) && (e.deleteAt(0, r.TAB.length),
                        0 === i ? n -= r.TAB.length : s -= r.TAB.length)
                    }
                    ),
                    this.quill.update(p.a.sources.USER),
                    this.quill.setSelection(n, s, p.a.sources.SILENT)
                }
            }
        }
        function L(t, e) {
            return {
                key: t,
                shiftKey: e,
                altKey: null,
                ["ArrowLeft" === t ? "prefix" : "suffix"]: /^$/,
                handler(r) {
                    let {index: i} = r;
                    "ArrowRight" === t && (i += r.length + 1);
                    const [n] = this.quill.getLeaf(i);
                    return !(n instanceof f.EmbedBlot) || ("ArrowLeft" === t ? e ? this.quill.setSelection(r.index - 1, r.length + 1, p.a.sources.USER) : this.quill.setSelection(r.index - 1, p.a.sources.USER) : e ? this.quill.setSelection(r.index, r.length + 1, p.a.sources.USER) : this.quill.setSelection(r.index + r.length + 1, p.a.sources.USER),
                    !1)
                }
            }
        }
        function T(t) {
            return {
                key: t[0],
                shortKey: !0,
                handler(e, r) {
                    this.quill.format(t, !r.format[t], p.a.sources.USER)
                }
            }
        }
        function q(t) {
            return {
                key: t ? "ArrowUp" : "ArrowDown",
                collapsed: !0,
                format: ["table"],
                handler(e, r) {
                    const i = t ? "prev" : "next"
                      , n = r.line
                      , s = n.parent[i];
                    if (null != s) {
                        if ("table-row" === s.statics.blotName) {
                            let t = s.children.head
                              , e = n;
                            for (; null != e.prev; )
                                e = e.prev,
                                t = t.next;
                            const i = t.offset(this.quill.scroll) + Math.min(r.offset, t.length() - 1);
                            this.quill.setSelection(i, 0, p.a.sources.USER)
                        }
                    } else {
                        const e = n.table()[i];
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
                t = n()(t, !1)
            }
            return t.shortKey && (t[y] = t.shortKey,
            delete t.shortKey),
            t
        }
        v.DEFAULTS = {
            bindings: {
                bold: T("bold"),
                italic: T("italic"),
                underline: T("underline"),
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
                "indent code-block": A(!0),
                "outdent code-block": A(!1),
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
                        const r = (new c.a).retain(t.index).delete(t.length).insert("\t");
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
                          , i = a()({}, e.formats(), {
                            list: "checked"
                        })
                          , n = (new c.a).retain(t.index).insert("\n", i).retain(e.length() - r - 1).retain(1, {
                            list: "unchecked"
                        });
                        this.quill.updateContents(n, p.a.sources.USER),
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
                        const [r,i] = this.quill.getLine(t.index)
                          , n = (new c.a).retain(t.index).insert("\n", e.format).retain(r.length() - i - 1).retain(1, {
                            header: null
                        });
                        this.quill.updateContents(n, p.a.sources.USER),
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
                            const [r,i,n,s] = e.getTable(t)
                              , o = function(t, e, r, i) {
                                if (null == e.prev && null == e.next)
                                    return null == r.prev && null == r.next ? 0 === i ? -1 : 1 : null == r.prev ? -1 : 1;
                                if (null == e.prev)
                                    return -1;
                                if (null == e.next)
                                    return 1;
                                return null
                            }(0, i, n, s);
                            if (null == o)
                                return;
                            let l = r.offset();
                            if (o < 0) {
                                const e = (new c.a).retain(l).insert("\n");
                                this.quill.updateContents(e, p.a.sources.USER),
                                this.quill.setSelection(t.index + 1, t.length, p.a.sources.SILENT)
                            } else if (o > 0) {
                                l += r.length();
                                const t = (new c.a).retain(l).insert("\n");
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
                        const {event: r, line: i} = e
                          , n = i.offset(this.quill.scroll);
                        r.shiftKey ? this.quill.setSelection(n - 1, p.a.sources.USER) : this.quill.setSelection(n + i.length(), p.a.sources.USER)
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
                          , [i,n] = this.quill.getLine(t.index);
                        if (n > r)
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
                        const o = (new c.a).retain(t.index - n).delete(r + 1).retain(i.length() - 2 - n).retain(1, {
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
                        let i = 2
                          , n = e;
                        for (; null != n && n.length() <= 1 && n.formats()["code-block"]; )
                            if (n = n.prev,
                            (i -= 1) <= 0) {
                                const i = (new c.a).retain(t.index + e.length() - r - 2).retain(1, {
                                    "code-block": null
                                }).delete(1);
                                return this.quill.updateContents(i, p.a.sources.USER),
                                this.quill.setSelection(t.index - 1, p.a.sources.SILENT),
                                !1
                            }
                        return !0
                    }
                },
                "embed left": L("ArrowLeft", !1),
                "embed left shift": L("ArrowLeft", !0),
                "embed right": L("ArrowRight", !1),
                "embed right shift": L("ArrowRight", !0),
                "table down": q(!1),
                "table up": q(!0)
            }
        }
    }
    , function(t, e, r) {
        var i = Array.prototype.slice
          , n = r(35)
          , s = r(36)
          , o = t.exports = function(t, e, r) {
            return r || (r = {}),
            t === e || (t instanceof Date && e instanceof Date ? t.getTime() === e.getTime() : !t || !e || "object" != typeof t && "object" != typeof e ? r.strict ? t === e : t == e : function(t, e, r) {
                var u, c;
                if (l(t) || l(e))
                    return !1;
                if (t.prototype !== e.prototype)
                    return !1;
                if (s(t))
                    return !!s(e) && (t = i.call(t),
                    e = i.call(e),
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
                    var h = n(t)
                      , d = n(e)
                } catch (t) {
                    return !1
                }
                if (h.length != d.length)
                    return !1;
                for (h.sort(),
                d.sort(),
                u = h.length - 1; u >= 0; u--)
                    if (h[u] != d[u])
                        return !1;
                for (u = h.length - 1; u >= 0; u--)
                    if (c = h[u],
                    !o(t[c], e[c], r))
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
        var i = r(0)
          , n = r(6);
        class s extends i.EmbedBlot {
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
                  , n = 0;
                for (; null != r && r.statics.scope !== i.Scope.BLOCK_BLOT; )
                    n += r.offset(r.parent),
                    r = r.parent;
                null != r && (this.savedLength = s.CONTENTS.length,
                r.optimize(),
                r.formatAt(n, s.CONTENTS.length, t, e),
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
                let e, r, i;
                for (null != t && t.start.node === this.textNode && t.end.node === this.textNode && ([e,r,i] = [this.textNode, t.start.offset, t.end.offset]); null != this.domNode.lastChild && this.domNode.lastChild !== this.textNode; )
                    this.domNode.parentNode.insertBefore(this.domNode.lastChild, this.domNode);
                if (this.textNode.data !== s.CONTENTS) {
                    const t = this.textNode.data.split(s.CONTENTS).join("");
                    this.next instanceof n.a ? (e = this.next.domNode,
                    this.next.insertAt(0, t),
                    this.textNode.data = s.CONTENTS) : (this.textNode.data = t,
                    this.parent.insertBefore(this.scroll.create(this.textNode), this),
                    this.textNode = document.createTextNode(s.CONTENTS),
                    this.domNode.appendChild(this.textNode))
                }
                return this.remove(),
                null != r ? ([r,i] = [r, i].map(t=>Math.max(0, Math.min(e.data.length, t - 1))),
                {
                    startNode: e,
                    startOffset: r,
                    endNode: e,
                    endOffset: i
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
        var i = r(16)
          , n = r(5)
          , s = {
            attributes: {
                compose: function(t, e, r) {
                    "object" != typeof t && (t = {}),
                    "object" != typeof e && (e = {});
                    var i = n(!0, {}, e);
                    for (var s in r || (i = Object.keys(i).reduce(function(t, e) {
                        return null != i[e] && (t[e] = i[e]),
                        t
                    }, {})),
                    t)
                        void 0 !== t[s] && void 0 === e[s] && (i[s] = t[s]);
                    return Object.keys(i).length > 0 ? i : void 0
                },
                diff: function(t, e) {
                    "object" != typeof t && (t = {}),
                    "object" != typeof e && (e = {});
                    var r = Object.keys(t).concat(Object.keys(e)).reduce(function(r, n) {
                        return i(t[n], e[n]) || (r[n] = void 0 === e[n] ? null : e[n]),
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
                        var i = Object.keys(e).reduce(function(r, i) {
                            return void 0 === t[i] && (r[i] = e[i]),
                            r
                        }, {});
                        return Object.keys(i).length > 0 ? i : void 0
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
                  , i = s.length(e);
                if (t >= i - r ? (t = i - r,
                this.index += 1,
                this.offset = 0) : this.offset += t,
                "number" == typeof e.delete)
                    return {
                        delete: t
                    };
                var n = {};
                return e.attributes && (n.attributes = e.attributes),
                "number" == typeof e.retain ? n.retain = t : "string" == typeof e.insert ? n.insert = e.insert.substr(r, t) : n.insert = e.insert,
                n
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
            return n
        }),
        r.d(e, "b", function() {
            return s
        }),
        r.d(e, "c", function() {
            return o
        });
        var i = r(0);
        class n extends i.StyleAttributor {
            value(t) {
                let e = super.value(t);
                if (!e.startsWith("rgb("))
                    return e;
                return `#${(e = e.replace(/^[^\d]+/, "").replace(/[^\d]+$/, "")).split(",").map(t=>`00${parseInt(t, 10).toString(16)}`.slice(-2)).join("")}`
            }
        }
        const s = new i.ClassAttributor("color","ql-color",{
            scope: i.Scope.INLINE
        })
          , o = new n("color","color",{
            scope: i.Scope.INLINE
        })
    }
    , function(t, e, r) {
        "use strict";
        r.d(e, "a", function() {
            return h
        }),
        r.d(e, "b", function() {
            return d
        });
        var i = r(0)
          , n = r(13)
          , s = r.n(n)
          , o = r(16)
          , l = r.n(o)
          , a = r(3)
          , u = r(11);
        const c = Object(u.a)("quill:selection");
        class h {
            constructor(t, e=0) {
                this.index = t,
                this.length = e
            }
        }
        class d {
            constructor(t, e) {
                this.emitter = e,
                this.scroll = t,
                this.composing = !1,
                this.mouseDown = !1,
                this.root = this.scroll.domNode,
                this.cursor = this.scroll.create("cursor", this),
                this.savedRange = new h(0,0),
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
                        const {startNode: t, startOffset: r, endNode: i, endOffset: n} = e.range;
                        this.setNativeRange(t, r, i, n),
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
                if (null != r && r.native.collapsed && !this.scroll.query(t, i.Scope.BLOCK)) {
                    if (r.start.node !== this.cursor.textNode) {
                        const t = this.scroll.find(r.start.node, !1);
                        if (null == t)
                            return;
                        if (t instanceof i.LeafBlot) {
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
                let i;
                t = Math.min(t, r - 1),
                e = Math.min(t + e, r - 1) - t;
                let[n,s] = this.scroll.leaf(t);
                if (null == n)
                    return null;
                [i,s] = n.position(s, !0);
                const o = document.createRange();
                if (e > 0)
                    return o.setStart(i, s),
                    [n,s] = this.scroll.leaf(t + e),
                    null == n ? null : ([i,s] = n.position(s, !0),
                    o.setEnd(i, s),
                    o.getBoundingClientRect());
                let l, a = "left";
                return i instanceof Text ? (s < i.data.length ? (o.setStart(i, s),
                o.setEnd(i, s + 1)) : (o.setStart(i, s - 1),
                o.setEnd(i, s),
                a = "right"),
                l = o.getBoundingClientRect()) : (l = n.domNode.getBoundingClientRect(),
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
                return c.info("getNativeRange", r),
                r
            }
            getRange() {
                const t = this.getNativeRange();
                return null == t ? [null, null] : [this.normalizedToRange(t), t]
            }
            hasFocus() {
                return document.activeElement === this.root || f(this.root, document.activeElement)
            }
            normalizedToRange(t) {
                const e = [[t.start.node, t.start.offset]];
                t.native.collapsed || e.push([t.end.node, t.end.offset]);
                const r = e.map(t=>{
                    const [e,r] = t
                      , n = this.scroll.find(e, !0)
                      , s = n.offset(this.scroll);
                    return 0 === r ? s : n instanceof i.ContainerBlot ? s + n.length() : s + n.index(e, r)
                }
                )
                  , n = Math.min(Math.max(...r), this.scroll.length() - 1)
                  , s = Math.min(n, ...r);
                return new h(s,n - s)
            }
            normalizeNative(t) {
                if (!f(this.root, t.startContainer) || !t.collapsed && !f(this.root, t.endContainer))
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
                  , i = this.scroll.length();
                return e.forEach((t,e)=>{
                    t = Math.min(i - 1, t);
                    const [n,s] = this.scroll.leaf(t)
                      , [o,l] = n.position(s, 0 !== e);
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
                const i = this.scroll.length() - 1
                  , [n] = this.scroll.line(Math.min(e.index, i));
                let s = n;
                if (e.length > 0 && ([s] = this.scroll.line(Math.min(e.index + e.length, i))),
                null == n || null == s)
                    return;
                const o = t.getBoundingClientRect();
                r.top < o.top ? t.scrollTop -= o.top - r.top : r.bottom > o.bottom && (t.scrollTop += r.bottom - o.bottom)
            }
            setNativeRange(t, e, r=t, i=e, n=!1) {
                if (c.info("setNativeRange", t, e, r, i),
                null != t && (null == this.root.parentNode || null == t.parentNode || null == r.parentNode))
                    return;
                const s = document.getSelection();
                if (null != s)
                    if (null != t) {
                        this.hasFocus() || this.root.focus();
                        const {native: o} = this.getNativeRange() || {};
                        if (null == o || n || t !== o.startContainer || e !== o.startOffset || r !== o.endContainer || i !== o.endOffset) {
                            "BR" === t.tagName && (e = Array.from(t.parentNode.childNodes).indexOf(t),
                            t = t.parentNode),
                            "BR" === r.tagName && (i = Array.from(r.parentNode.childNodes).indexOf(r),
                            r = r.parentNode);
                            const n = document.createRange();
                            n.setStart(t, e),
                            n.setEnd(r, i),
                            s.removeAllRanges(),
                            s.addRange(n)
                        }
                    } else
                        s.removeAllRanges(),
                        this.root.blur()
            }
            setRange(t, e=!1, r=a.a.sources.API) {
                if ("string" == typeof e && (r = e,
                e = !1),
                c.info("setRange", t),
                null != t) {
                    const r = this.rangeToNative(t);
                    this.setNativeRange(...r, e)
                } else
                    this.setNativeRange(null);
                this.update(r)
            }
            update(t=a.a.sources.USER) {
                const e = this.lastRange
                  , [r,i] = this.getRange();
                if (this.lastRange = r,
                null != this.lastRange && (this.savedRange = this.lastRange),
                !l()(e, this.lastRange)) {
                    !this.composing && null != i && i.native.collapsed && i.start.node !== this.cursor.textNode && this.cursor.restore();
                    const r = [a.a.events.SELECTION_CHANGE, s()(this.lastRange), s()(e), t];
                    this.emitter.emit(a.a.events.EDITOR_CHANGE, ...r),
                    t !== a.a.sources.SILENT && this.emitter.emit(...r)
                }
            }
        }
        function f(t, e) {
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
        var i = r(0);
        const n = {
            scope: i.Scope.BLOCK,
            whitelist: ["rtl"]
        }
          , s = new i.Attributor("direction","dir",n)
          , o = new i.ClassAttributor("direction","ql-direction",n)
          , l = new i.StyleAttributor("direction","direction",n)
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
        var i = r(0);
        const n = {
            scope: i.Scope.BLOCK,
            whitelist: ["right", "center", "justify"]
        }
          , s = new i.Attributor("align","align",n)
          , o = new i.ClassAttributor("align","ql-align",n)
          , l = new i.StyleAttributor("align","text-align",n)
    }
    , function(t, e, r) {
        "use strict";
        class i {
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
        i.DEFAULTS = {
            modules: {}
        },
        i.themes = {
            default: i
        },
        e.a = i
    }
    , function(t, e, r) {
        "use strict";
        r.d(e, "a", function() {
            return s
        }),
        r.d(e, "b", function() {
            return o
        });
        var i = r(0)
          , n = r(19);
        const s = new i.ClassAttributor("background","ql-bg",{
            scope: i.Scope.INLINE
        })
          , o = new n.a("background","background-color",{
            scope: i.Scope.INLINE
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
        var i = r(0);
        const n = {
            scope: i.Scope.INLINE,
            whitelist: ["serif", "monospace"]
        }
          , s = new i.ClassAttributor("font","ql-font",n);
        const o = new class extends i.StyleAttributor {
            value(t) {
                return super.value(t).replace(/["']/g, "")
            }
        }
        ("font","font-family",n)
    }
    , function(t, e, r) {
        "use strict";
        r.d(e, "a", function() {
            return n
        }),
        r.d(e, "b", function() {
            return s
        });
        var i = r(0);
        const n = new i.ClassAttributor("size","ql-size",{
            scope: i.Scope.INLINE,
            whitelist: ["small", "large", "huge"]
        })
          , s = new i.StyleAttributor("size","font-size",{
            scope: i.Scope.INLINE,
            whitelist: ["10px", "18px", "32px"]
        })
    }
    , function(t, e, r) {
        t.exports = {
            align: {
                "": r(44),
                center: r(45),
                right: r(46),
                justify: r(47)
            },
            background: r(48),
            block: r(49),
            blockquote: r(50),
            bold: r(51),
            clean: r(52),
            code: r(42),
            "code-block": r(42),
            color: r(53),
            direction: {
                "": r(54),
                rtl: r(55)
            },
            emoji: r(56),
            float: {
                center: r(57),
                full: r(58),
                left: r(59),
                right: r(60)
            },
            formula: r(61),
            header: {
                1: r(62),
                2: r(63),
                3: r(64),
                4: r(65),
                5: r(66),
                6: r(67)
            },
            italic: r(68),
            image: r(69),
            indent: {
                "+1": r(70),
                "-1": r(71)
            },
            link: r(72),
            list: {
                ordered: r(73),
                bullet: r(74),
                check: r(75)
            },
            menu: r(33),
            script: {
                sub: r(76),
                super: r(77)
            },
            send: r(78),
            strike: r(79),
            underline: r(80),
            video: r(81)
        }
    }
    , function(t, e, r) {
        "use strict";
        r.r(e);
        var i = r(9)
          , n = r(5)
          , s = r.n(n)
          , o = r(15);
        i.a.register({
            "modules/keyboard": class extends o.a {
                addBinding(t, e={}, r={}, i=!1) {
                    if (super.addBinding(t, e, r),
                    i) {
                        let i = Object(o.b)(t);
                        if (null == i)
                            return;
                        (Array.isArray(i.key) ? i.key : [i.key]).forEach(t=>{
                            const n = s()({}, i, {
                                key: t
                            }, e, r);
                            this.bindings[n.key].unshift(this.bindings[n.key].pop())
                        }
                        )
                    }
                }
            }
        }, !0);
        e.default = i.a
    }
    , function(t, e, r) {
        "use strict";
        var i = r(0)
          , n = r(6);
        const s = "\ufeff";
        e.a = class extends i.EmbedBlot {
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
                const i = t.data.split(s).join("");
                if (t === this.leftGuard)
                    if (this.prev instanceof n.a) {
                        const t = this.prev.length();
                        this.prev.insertAt(t, i),
                        e = {
                            startNode: this.prev.domNode,
                            startOffset: t + i.length
                        }
                    } else
                        r = document.createTextNode(i),
                        this.parent.insertBefore(this.scroll.create(r), this),
                        e = {
                            startNode: r,
                            startOffset: i.length
                        };
                else
                    t === this.rightGuard && (this.next instanceof n.a ? (this.next.insertAt(0, i),
                    e = {
                        startNode: this.next.domNode,
                        startOffset: i.length
                    }) : (r = document.createTextNode(i),
                    this.parent.insertBefore(this.scroll.create(r), this.next),
                    e = {
                        startNode: r,
                        startOffset: i.length
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
            return q
        });
        var i = r(5)
          , n = r.n(i)
          , s = r(2)
          , o = r.n(s)
          , l = r(0)
          , a = r(1)
          , u = r(11)
          , c = r(8)
          , h = r(23)
          , d = r(25)
          , f = r(14)
          , p = r(19)
          , m = r(21)
          , g = r(26)
          , b = r(27);
        const y = Object(u.a)("quill:clipboard")
          , v = [[Node.TEXT_NODE, function(t, e) {
            let r = t.data;
            if ("O:P" === t.parentNode.tagName)
                return e.insert(r.trim());
            if (0 === r.trim().length && null == t.parentNode)
                return e;
            if (!function t(e) {
                if (null == e)
                    return !1;
                T.has(e) || ("PRE" === e.tagName ? T.set(e, !0) : T.set(e, t(e.parentNode)));
                return T.get(e)
            }(t)) {
                const e = (t,e)=>{
                    const r = e.replace(/[^\u00a0]/g, "");
                    return r.length < 1 && t ? " " : r
                }
                ;
                r = (r = r.replace(/\r\n/g, " ").replace(/\n/g, " ")).replace(/\s\s+/g, e.bind(e, !0)),
                (null == t.previousSibling && L(t.parentNode) || null != t.previousSibling && L(t.previousSibling)) && (r = r.replace(/^\s+/, e.bind(e, !1))),
                (null == t.nextSibling && L(t.parentNode) || null != t.nextSibling && L(t.nextSibling)) && (r = r.replace(/\s+$/, e.bind(e, !1)))
            }
            return e.insert(r)
        }
        ], [Node.TEXT_NODE, k], ["br", function(t, e) {
            A(e, "\n") || e.insert("\n");
            return e
        }
        ], [Node.ELEMENT_NODE, k], [Node.ELEMENT_NODE, function(t, e, r) {
            const i = r.query(t);
            if (null == i)
                return e;
            if (i.prototype instanceof l.EmbedBlot) {
                const e = {}
                  , n = i.value(t);
                if (null != n)
                    return e[i.blotName] = n,
                    (new o.a).insert(e, i.formats(t, r))
            } else if ("function" == typeof i.formats)
                return w(e, i.blotName, i.formats(t, r));
            return e
        }
        ], [Node.ELEMENT_NODE, function(t, e, r) {
            const i = l.Attributor.keys(t)
              , n = l.ClassAttributor.keys(t)
              , s = l.StyleAttributor.keys(t)
              , o = {};
            if (i.concat(n).concat(s).forEach(e=>{
                let i = r.query(e, l.Scope.ATTRIBUTE);
                null != i && (o[i.attrName] = i.value(t),
                o[i.attrName]) || (null == (i = N[e]) || i.attrName !== e && i.keyName !== e || (o[i.attrName] = i.value(t) || void 0),
                null == (i = E[e]) || i.attrName !== e && i.keyName !== e || (i = E[e],
                o[i.attrName] = i.value(t) || void 0))
            }
            ),
            Object.keys(o).length > 0)
                return w(e, o);
            return e
        }
        ], [Node.ELEMENT_NODE, function(t, e) {
            const r = {}
              , i = t.style || {};
            "italic" === i.fontStyle && (r.italic = !0);
            (i.fontWeight.startsWith("bold") || parseInt(i.fontWeight, 10) >= 700) && (r.bold = !0);
            Object.keys(r).length > 0 && (e = w(e, r));
            if (parseFloat(i.textIndent || 0) > 0)
                return (new o.a).insert("\t").concat(e);
            return e
        }
        ], ["li", function(t, e, r) {
            const i = r.query(t);
            if (null == i || "list" !== i.blotName || !A(e, "\n"))
                return e;
            let n = -1
              , s = t.parentNode;
            for (; null != s; )
                ["OL", "UL"].includes(s.tagName) && (n += 1),
                s = s.parentNode;
            return n <= 0 ? e : e.compose((new o.a).retain(e.length() - 1).retain(1, {
                indent: n
            }))
        }
        ], ["ol, ul", function(t, e) {
            const r = "OL" === t.tagName ? "ordered" : "bullet";
            return w(e, "list", r)
        }
        ], ["pre", function(t, e, r) {
            const i = r.query("code-block")
              , n = !i || i.formats(t, r);
            return w(e, "code-block", n)
        }
        ], ["tr", function(t, e) {
            const r = "TABLE" === t.parentNode.tagName ? t.parentNode : t.parentNode.parentNode
              , i = Array.from(r.querySelectorAll("tr")).indexOf(t) + 1;
            return w(e, "table", i)
        }
        ], ["b", S.bind(S, "bold")], ["i", S.bind(S, "italic")], ["style", function() {
            return new o.a
        }
        ]]
          , N = [h.a, m.a].reduce((t,e)=>(t[e.keyName] = e,
        t), {})
          , E = [h.c, d.b, p.c, m.c, g.b, b.b].reduce((t,e)=>(t[e.keyName] = e,
        t), {});
        class x extends c.a {
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
                if (r[f.c.blotName])
                    return (new o.a).insert(e, {
                        [f.c.blotName]: r[f.c.blotName]
                    });
                if (!t)
                    return (new o.a).insert(e || "");
                const i = this.quill.root.ownerDocument.createElement("div");
                i.innerHTML = t.replace(/>\r?\n +</g, "><");
                const n = new WeakMap
                  , [s,l] = this.prepareMatching(i, n)
                  , a = q(this.quill.scroll, i, s, l, n);
                return A(a, "\n") && null == a.ops[a.ops.length - 1].attributes ? a.compose((new o.a).retain(a.length() - 1).delete(1)) : a
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
                    const i = this.convert({
                        html: e,
                        text: ""
                    });
                    this.quill.updateContents((new o.a).retain(t).concat(i), r),
                    this.quill.setSelection(t + i.length(), a.a.sources.SILENT)
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
                  , i = this.quill.getSemanticHTML(e);
                t.clipboardData.setData("text/plain", r),
                t.clipboardData.setData("text/html", i)
            }
            onPaste(t, e) {
                const r = t.clipboardData.getData("text/html")
                  , i = t.clipboardData.getData("text/plain")
                  , n = this.convert({
                    text: i,
                    html: r
                });
                y.log("onPaste", n, {
                    text: i,
                    html: r
                });
                const s = (new o.a).retain(e.index).delete(e.length).concat(n);
                this.quill.updateContents(s, a.a.sources.USER),
                this.quill.setSelection(s.length() - e.length, a.a.sources.SILENT),
                this.quill.scrollIntoView()
            }
            prepareMatching(t, e) {
                const r = []
                  , i = [];
                return this.matchers.forEach(n=>{
                    const [s,o] = n;
                    switch (s) {
                    case Node.TEXT_NODE:
                        i.push(o);
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
                [r, i]
            }
        }
        function w(t, e, r) {
            return "object" == typeof e ? Object.keys(e).reduce((t,r)=>w(t, r, e[r]), t) : t.reduce((t,i)=>i.attributes && i.attributes[e] ? t.push(i) : t.insert(i.insert, n()({}, {
                [e]: r
            }, i.attributes)), new o.a)
        }
        function A(t, e) {
            let r = "";
            for (let i = t.ops.length - 1; i >= 0 && r.length < e.length; --i) {
                const e = t.ops[i];
                if ("string" != typeof e.insert)
                    break;
                r = e.insert + r
            }
            return r.slice(-1 * e.length) === e
        }
        function L(t) {
            return 0 !== t.childNodes.length && ["address", "article", "blockquote", "canvas", "dd", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "iframe", "li", "main", "nav", "ol", "output", "p", "pre", "section", "table", "td", "tr", "ul", "video"].includes(t.tagName.toLowerCase())
        }
        x.DEFAULTS = {
            matchers: []
        };
        const T = new WeakMap;
        function q(t, e, r, i, n) {
            return e.nodeType === e.TEXT_NODE ? i.reduce((r,i)=>i(e, r, t), new o.a) : e.nodeType === e.ELEMENT_NODE ? Array.from(e.childNodes || []).reduce((s,o)=>{
                let l = q(t, o, r, i, n);
                return o.nodeType === e.ELEMENT_NODE && (l = r.reduce((e,r)=>r(o, e, t), l),
                l = (n.get(o) || []).reduce((e,r)=>r(o, e, t), l)),
                s.concat(l)
            }
            , new o.a) : new o.a
        }
        function S(t, e, r) {
            return w(r, t, !0)
        }
        function k(t, e) {
            return A(e, "\n") || (L(t) || e.length() > 0 && t.nextSibling && L(t.nextSibling)) && e.insert("\n"),
            e
        }
    }
    , function(t, e, r) {
        "use strict";
        var i = Object.prototype.hasOwnProperty
          , n = "~";
        function s() {}
        function o(t, e, r, i, s) {
            if ("function" != typeof r)
                throw new TypeError("The listener must be a function");
            var o = new function(t, e, r) {
                this.fn = t,
                this.context = e,
                this.once = r || !1
            }
            (r,i || t,s)
              , l = n ? n + e : e;
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
        (new s).__proto__ || (n = !1)),
        a.prototype.eventNames = function() {
            var t, e, r = [];
            if (0 === this._eventsCount)
                return r;
            for (e in t = this._events)
                i.call(t, e) && r.push(n ? e.slice(1) : e);
            return Object.getOwnPropertySymbols ? r.concat(Object.getOwnPropertySymbols(t)) : r
        }
        ,
        a.prototype.listeners = function(t) {
            var e = n ? n + t : t
              , r = this._events[e];
            if (!r)
                return [];
            if (r.fn)
                return [r.fn];
            for (var i = 0, s = r.length, o = new Array(s); i < s; i++)
                o[i] = r[i].fn;
            return o
        }
        ,
        a.prototype.listenerCount = function(t) {
            var e = n ? n + t : t
              , r = this._events[e];
            return r ? r.fn ? 1 : r.length : 0
        }
        ,
        a.prototype.emit = function(t, e, r, i, s, o) {
            var l = n ? n + t : t;
            if (!this._events[l])
                return !1;
            var a, u, c = this._events[l], h = arguments.length;
            if (c.fn) {
                switch (c.once && this.removeListener(t, c.fn, void 0, !0),
                h) {
                case 1:
                    return c.fn.call(c.context),
                    !0;
                case 2:
                    return c.fn.call(c.context, e),
                    !0;
                case 3:
                    return c.fn.call(c.context, e, r),
                    !0;
                case 4:
                    return c.fn.call(c.context, e, r, i),
                    !0;
                case 5:
                    return c.fn.call(c.context, e, r, i, s),
                    !0;
                case 6:
                    return c.fn.call(c.context, e, r, i, s, o),
                    !0
                }
                for (u = 1,
                a = new Array(h - 1); u < h; u++)
                    a[u - 1] = arguments[u];
                c.fn.apply(c.context, a)
            } else {
                var d, f = c.length;
                for (u = 0; u < f; u++)
                    switch (c[u].once && this.removeListener(t, c[u].fn, void 0, !0),
                    h) {
                    case 1:
                        c[u].fn.call(c[u].context);
                        break;
                    case 2:
                        c[u].fn.call(c[u].context, e);
                        break;
                    case 3:
                        c[u].fn.call(c[u].context, e, r);
                        break;
                    case 4:
                        c[u].fn.call(c[u].context, e, r, i);
                        break;
                    default:
                        if (!a)
                            for (d = 1,
                            a = new Array(h - 1); d < h; d++)
                                a[d - 1] = arguments[d];
                        c[u].fn.apply(c[u].context, a)
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
        a.prototype.removeListener = function(t, e, r, i) {
            var s = n ? n + t : t;
            if (!this._events[s])
                return this;
            if (!e)
                return l(this, s),
                this;
            var o = this._events[s];
            if (o.fn)
                o.fn !== e || i && !o.once || r && o.context !== r || l(this, s);
            else {
                for (var a = 0, u = [], c = o.length; a < c; a++)
                    (o[a].fn !== e || i && !o[a].once || r && o[a].context !== r) && u.push(o[a]);
                u.length ? this._events[s] = 1 === u.length ? u[0] : u : l(this, s)
            }
            return this
        }
        ,
        a.prototype.removeAllListeners = function(t) {
            var e;
            return t ? (e = n ? n + t : t,
            this._events[e] && l(this, e)) : (this._events = new s,
            this._eventsCount = 0),
            this
        }
        ,
        a.prototype.off = a.prototype.removeListener,
        a.prototype.addListener = a.prototype.on,
        a.prefixed = n,
        a.EventEmitter = a,
        t.exports = a
    }
    , function(t, e) {
        t.exports = '<svg class="i" viewbox="0 0 24 24"><use href="#menu-down" /></svg>'
    }
    , function(t, e) {
        var r = -1
          , i = 1
          , n = 0;
        function s(t, e, u) {
            if (t == e)
                return t ? [[n, t]] : [];
            (u < 0 || t.length < u) && (u = null);
            var h = l(t, e)
              , d = t.substring(0, h);
            h = a(t = t.substring(h), e = e.substring(h));
            var f = t.substring(t.length - h)
              , p = function(t, e) {
                var u;
                if (!t)
                    return [[i, e]];
                if (!e)
                    return [[r, t]];
                var c = t.length > e.length ? t : e
                  , h = t.length > e.length ? e : t
                  , d = c.indexOf(h);
                if (-1 != d)
                    return u = [[i, c.substring(0, d)], [n, h], [i, c.substring(d + h.length)]],
                    t.length > e.length && (u[0][0] = u[2][0] = r),
                    u;
                if (1 == h.length)
                    return [[r, t], [i, e]];
                var f = function(t, e) {
                    var r = t.length > e.length ? t : e
                      , i = t.length > e.length ? e : t;
                    if (r.length < 4 || 2 * i.length < r.length)
                        return null;
                    function n(t, e, r) {
                        for (var i, n, s, o, u = t.substring(r, r + Math.floor(t.length / 4)), c = -1, h = ""; -1 != (c = e.indexOf(u, c + 1)); ) {
                            var d = l(t.substring(r), e.substring(c))
                              , f = a(t.substring(0, r), e.substring(0, c));
                            h.length < f + d && (h = e.substring(c - f, c) + e.substring(c, c + d),
                            i = t.substring(0, r - f),
                            n = t.substring(r + d),
                            s = e.substring(0, c - f),
                            o = e.substring(c + d))
                        }
                        return 2 * h.length >= t.length ? [i, n, s, o, h] : null
                    }
                    var s, o, u, c, h, d = n(r, i, Math.ceil(r.length / 4)), f = n(r, i, Math.ceil(r.length / 2));
                    if (!d && !f)
                        return null;
                    s = f ? d && d[4].length > f[4].length ? d : f : d;
                    t.length > e.length ? (o = s[0],
                    u = s[1],
                    c = s[2],
                    h = s[3]) : (c = s[0],
                    h = s[1],
                    o = s[2],
                    u = s[3]);
                    var p = s[4];
                    return [o, u, c, h, p]
                }(t, e);
                if (f) {
                    var p = f[0]
                      , m = f[1]
                      , g = f[2]
                      , b = f[3]
                      , y = f[4]
                      , v = s(p, g)
                      , N = s(m, b);
                    return v.concat([[n, y]], N)
                }
                return function(t, e) {
                    for (var n = t.length, s = e.length, l = Math.ceil((n + s) / 2), a = l, u = 2 * l, c = new Array(u), h = new Array(u), d = 0; d < u; d++)
                        c[d] = -1,
                        h[d] = -1;
                    c[a + 1] = 0,
                    h[a + 1] = 0;
                    for (var f = n - s, p = f % 2 != 0, m = 0, g = 0, b = 0, y = 0, v = 0; v < l; v++) {
                        for (var N = -v + m; N <= v - g; N += 2) {
                            for (var E = a + N, x = (q = N == -v || N != v && c[E - 1] < c[E + 1] ? c[E + 1] : c[E - 1] + 1) - N; q < n && x < s && t.charAt(q) == e.charAt(x); )
                                q++,
                                x++;
                            if (c[E] = q,
                            q > n)
                                g += 2;
                            else if (x > s)
                                m += 2;
                            else if (p) {
                                var w = a + f - N;
                                if (w >= 0 && w < u && -1 != h[w]) {
                                    var A = n - h[w];
                                    if (q >= A)
                                        return o(t, e, q, x)
                                }
                            }
                        }
                        for (var L = -v + b; L <= v - y; L += 2) {
                            for (var w = a + L, T = (A = L == -v || L != v && h[w - 1] < h[w + 1] ? h[w + 1] : h[w - 1] + 1) - L; A < n && T < s && t.charAt(n - A - 1) == e.charAt(s - T - 1); )
                                A++,
                                T++;
                            if (h[w] = A,
                            A > n)
                                y += 2;
                            else if (T > s)
                                b += 2;
                            else if (!p) {
                                var E = a + f - L;
                                if (E >= 0 && E < u && -1 != c[E]) {
                                    var q = c[E]
                                      , x = a + q - E;
                                    if (q >= (A = n - A))
                                        return o(t, e, q, x)
                                }
                            }
                        }
                    }
                    return [[r, t], [i, e]]
                }(t, e)
            }(t = t.substring(0, t.length - h), e = e.substring(0, e.length - h));
            return d && p.unshift([n, d]),
            f && p.push([n, f]),
            function t(e) {
                e.push([n, ""]);
                var s = 0;
                var o = 0;
                var u = 0;
                var c = "";
                var h = "";
                var d;
                for (; s < e.length; )
                    switch (e[s][0]) {
                    case i:
                        u++,
                        h += e[s][1],
                        s++;
                        break;
                    case r:
                        o++,
                        c += e[s][1],
                        s++;
                        break;
                    case n:
                        o + u > 1 ? (0 !== o && 0 !== u && (0 !== (d = l(h, c)) && (s - o - u > 0 && e[s - o - u - 1][0] == n ? e[s - o - u - 1][1] += h.substring(0, d) : (e.splice(0, 0, [n, h.substring(0, d)]),
                        s++),
                        h = h.substring(d),
                        c = c.substring(d)),
                        0 !== (d = a(h, c)) && (e[s][1] = h.substring(h.length - d) + e[s][1],
                        h = h.substring(0, h.length - d),
                        c = c.substring(0, c.length - d))),
                        0 === o ? e.splice(s - u, o + u, [i, h]) : 0 === u ? e.splice(s - o, o + u, [r, c]) : e.splice(s - o - u, o + u, [r, c], [i, h]),
                        s = s - o - u + (o ? 1 : 0) + (u ? 1 : 0) + 1) : 0 !== s && e[s - 1][0] == n ? (e[s - 1][1] += e[s][1],
                        e.splice(s, 1)) : s++,
                        u = 0,
                        o = 0,
                        c = "",
                        h = ""
                    }
                "" === e[e.length - 1][1] && e.pop();
                var f = !1;
                s = 1;
                for (; s < e.length - 1; )
                    e[s - 1][0] == n && e[s + 1][0] == n && (e[s][1].substring(e[s][1].length - e[s - 1][1].length) == e[s - 1][1] ? (e[s][1] = e[s - 1][1] + e[s][1].substring(0, e[s][1].length - e[s - 1][1].length),
                    e[s + 1][1] = e[s - 1][1] + e[s + 1][1],
                    e.splice(s - 1, 1),
                    f = !0) : e[s][1].substring(0, e[s + 1][1].length) == e[s + 1][1] && (e[s - 1][1] += e[s + 1][1],
                    e[s][1] = e[s][1].substring(e[s + 1][1].length) + e[s + 1][1],
                    e.splice(s + 1, 1),
                    f = !0)),
                    s++;
                f && t(e)
            }(p),
            null != u && (p = function(t, e) {
                var i = function(t, e) {
                    if (0 === e)
                        return [n, t];
                    for (var i = 0, s = 0; s < t.length; s++) {
                        var o = t[s];
                        if (o[0] === r || o[0] === n) {
                            var l = i + o[1].length;
                            if (e === l)
                                return [s + 1, t];
                            if (e < l) {
                                t = t.slice();
                                var a = e - i
                                  , u = [o[0], o[1].slice(0, a)]
                                  , c = [o[0], o[1].slice(a)];
                                return t.splice(s, 1, u, c),
                                [s + 1, t]
                            }
                            i = l
                        }
                    }
                    throw new Error("cursor_pos is out of bounds!")
                }(t, e)
                  , s = i[1]
                  , o = i[0]
                  , l = s[o]
                  , a = s[o + 1];
                if (null == l)
                    return t;
                if (l[0] !== n)
                    return t;
                if (null != a && l[1] + a[1] === a[1] + l[1])
                    return s.splice(o, 2, a, l),
                    c(s, o, 2);
                if (null != a && 0 === a[1].indexOf(l[1])) {
                    s.splice(o, 2, [a[0], l[1]], [0, l[1]]);
                    var u = a[1].slice(l[1].length);
                    return u.length > 0 && s.splice(o + 2, 0, [a[0], u]),
                    c(s, o, 3)
                }
                return t
            }(p, u)),
            p = function(t) {
                for (var e = !1, s = function(t) {
                    return t.charCodeAt(0) >= 56320 && t.charCodeAt(0) <= 57343
                }, o = 2; o < t.length; o += 1)
                    t[o - 2][0] === n && ((l = t[o - 2][1]).charCodeAt(l.length - 1) >= 55296 && l.charCodeAt(l.length - 1) <= 56319) && t[o - 1][0] === r && s(t[o - 1][1]) && t[o][0] === i && s(t[o][1]) && (e = !0,
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
        function o(t, e, r, i) {
            var n = t.substring(0, r)
              , o = e.substring(0, i)
              , l = t.substring(r)
              , a = e.substring(i)
              , u = s(n, o)
              , c = s(l, a);
            return u.concat(c)
        }
        function l(t, e) {
            if (!t || !e || t.charAt(0) != e.charAt(0))
                return 0;
            for (var r = 0, i = Math.min(t.length, e.length), n = i, s = 0; r < n; )
                t.substring(s, n) == e.substring(s, n) ? s = r = n : i = n,
                n = Math.floor((i - r) / 2 + r);
            return n
        }
        function a(t, e) {
            if (!t || !e || t.charAt(t.length - 1) != e.charAt(e.length - 1))
                return 0;
            for (var r = 0, i = Math.min(t.length, e.length), n = i, s = 0; r < n; )
                t.substring(t.length - n, t.length - s) == e.substring(e.length - n, e.length - s) ? s = r = n : i = n,
                n = Math.floor((i - r) / 2 + r);
            return n
        }
        var u = s;
        function c(t, e, r) {
            for (var i = e + r - 1; i >= 0 && i >= e - 1; i--)
                if (i + 1 < t.length) {
                    var n = t[i]
                      , s = t[i + 1];
                    n[0] === s[1] && t.splice(i, 2, [n[0], n[1] + s[1]])
                }
            return t
        }
        u.INSERT = i,
        u.DELETE = r,
        u.EQUAL = n,
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
        function i(t) {
            return "[object Arguments]" == Object.prototype.toString.call(t)
        }
        function n(t) {
            return t && "object" == typeof t && "number" == typeof t.length && Object.prototype.hasOwnProperty.call(t, "callee") && !Object.prototype.propertyIsEnumerable.call(t, "callee") || !1
        }
        (e = t.exports = r ? i : n).supported = i,
        e.unsupported = n
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
            var i = r(39)
              , n = r(40)
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
                    return h(this, t)
                }
                return u(this, t, e, r)
            }
            function u(t, e, r, i) {
                if ("number" == typeof e)
                    throw new TypeError('"value" argument must not be a number');
                return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer ? function(t, e, r, i) {
                    if (e.byteLength,
                    r < 0 || e.byteLength < r)
                        throw new RangeError("'offset' is out of bounds");
                    if (e.byteLength < r + (i || 0))
                        throw new RangeError("'length' is out of bounds");
                    e = void 0 === r && void 0 === i ? new Uint8Array(e) : void 0 === i ? new Uint8Array(e,r) : new Uint8Array(e,r,i);
                    a.TYPED_ARRAY_SUPPORT ? (t = e).__proto__ = a.prototype : t = d(t, e);
                    return t
                }(t, e, r, i) : "string" == typeof e ? function(t, e, r) {
                    "string" == typeof r && "" !== r || (r = "utf8");
                    if (!a.isEncoding(r))
                        throw new TypeError('"encoding" must be a valid string encoding');
                    var i = 0 | p(e, r)
                      , n = (t = l(t, i)).write(e, r);
                    n !== i && (t = t.slice(0, n));
                    return t
                }(t, e, r) : function(t, e) {
                    if (a.isBuffer(e)) {
                        var r = 0 | f(e.length);
                        return 0 === (t = l(t, r)).length ? t : (e.copy(t, 0, 0, r),
                        t)
                    }
                    if (e) {
                        if ("undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length"in e)
                            return "number" != typeof e.length || (i = e.length) != i ? l(t, 0) : d(t, e);
                        if ("Buffer" === e.type && s(e.data))
                            return d(t, e.data)
                    }
                    var i;
                    throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
                }(t, e)
            }
            function c(t) {
                if ("number" != typeof t)
                    throw new TypeError('"size" argument must be a number');
                if (t < 0)
                    throw new RangeError('"size" argument must not be negative')
            }
            function h(t, e) {
                if (c(e),
                t = l(t, e < 0 ? 0 : 0 | f(e)),
                !a.TYPED_ARRAY_SUPPORT)
                    for (var r = 0; r < e; ++r)
                        t[r] = 0;
                return t
            }
            function d(t, e) {
                var r = e.length < 0 ? 0 : 0 | f(e.length);
                t = l(t, r);
                for (var i = 0; i < r; i += 1)
                    t[i] = 255 & e[i];
                return t
            }
            function f(t) {
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
                for (var i = !1; ; )
                    switch (e) {
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return r;
                    case "utf8":
                    case "utf-8":
                    case void 0:
                        return j(t).length;
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
                        if (i)
                            return j(t).length;
                        e = ("" + e).toLowerCase(),
                        i = !0
                    }
            }
            function m(t, e, r) {
                var i = t[e];
                t[e] = t[r],
                t[r] = i
            }
            function g(t, e, r, i, n) {
                if (0 === t.length)
                    return -1;
                if ("string" == typeof r ? (i = r,
                r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648),
                r = +r,
                isNaN(r) && (r = n ? 0 : t.length - 1),
                r < 0 && (r = t.length + r),
                r >= t.length) {
                    if (n)
                        return -1;
                    r = t.length - 1
                } else if (r < 0) {
                    if (!n)
                        return -1;
                    r = 0
                }
                if ("string" == typeof e && (e = a.from(e, i)),
                a.isBuffer(e))
                    return 0 === e.length ? -1 : b(t, e, r, i, n);
                if ("number" == typeof e)
                    return e &= 255,
                    a.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? n ? Uint8Array.prototype.indexOf.call(t, e, r) : Uint8Array.prototype.lastIndexOf.call(t, e, r) : b(t, [e], r, i, n);
                throw new TypeError("val must be string, number or Buffer")
            }
            function b(t, e, r, i, n) {
                var s, o = 1, l = t.length, a = e.length;
                if (void 0 !== i && ("ucs2" === (i = String(i).toLowerCase()) || "ucs-2" === i || "utf16le" === i || "utf-16le" === i)) {
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
                if (n) {
                    var c = -1;
                    for (s = r; s < l; s++)
                        if (u(t, s) === u(e, -1 === c ? 0 : s - c)) {
                            if (-1 === c && (c = s),
                            s - c + 1 === a)
                                return c * o
                        } else
                            -1 !== c && (s -= s - c),
                            c = -1
                } else
                    for (r + a > l && (r = l - a),
                    s = r; s >= 0; s--) {
                        for (var h = !0, d = 0; d < a; d++)
                            if (u(t, s + d) !== u(e, d)) {
                                h = !1;
                                break
                            }
                        if (h)
                            return s
                    }
                return -1
            }
            function y(t, e, r, i) {
                r = Number(r) || 0;
                var n = t.length - r;
                i ? (i = Number(i)) > n && (i = n) : i = n;
                var s = e.length;
                if (s % 2 != 0)
                    throw new TypeError("Invalid hex string");
                i > s / 2 && (i = s / 2);
                for (var o = 0; o < i; ++o) {
                    var l = parseInt(e.substr(2 * o, 2), 16);
                    if (isNaN(l))
                        return o;
                    t[r + o] = l
                }
                return o
            }
            function v(t, e, r, i) {
                return z(j(e, t.length - r), t, r, i)
            }
            function N(t, e, r, i) {
                return z(function(t) {
                    for (var e = [], r = 0; r < t.length; ++r)
                        e.push(255 & t.charCodeAt(r));
                    return e
                }(e), t, r, i)
            }
            function E(t, e, r, i) {
                return N(t, e, r, i)
            }
            function x(t, e, r, i) {
                return z(F(e), t, r, i)
            }
            function w(t, e, r, i) {
                return z(function(t, e) {
                    for (var r, i, n, s = [], o = 0; o < t.length && !((e -= 2) < 0); ++o)
                        r = t.charCodeAt(o),
                        i = r >> 8,
                        n = r % 256,
                        s.push(n),
                        s.push(i);
                    return s
                }(e, t.length - r), t, r, i)
            }
            function A(t, e, r) {
                return 0 === e && r === t.length ? i.fromByteArray(t) : i.fromByteArray(t.slice(e, r))
            }
            function L(t, e, r) {
                r = Math.min(t.length, r);
                for (var i = [], n = e; n < r; ) {
                    var s, o, l, a, u = t[n], c = null, h = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
                    if (n + h <= r)
                        switch (h) {
                        case 1:
                            u < 128 && (c = u);
                            break;
                        case 2:
                            128 == (192 & (s = t[n + 1])) && (a = (31 & u) << 6 | 63 & s) > 127 && (c = a);
                            break;
                        case 3:
                            s = t[n + 1],
                            o = t[n + 2],
                            128 == (192 & s) && 128 == (192 & o) && (a = (15 & u) << 12 | (63 & s) << 6 | 63 & o) > 2047 && (a < 55296 || a > 57343) && (c = a);
                            break;
                        case 4:
                            s = t[n + 1],
                            o = t[n + 2],
                            l = t[n + 3],
                            128 == (192 & s) && 128 == (192 & o) && 128 == (192 & l) && (a = (15 & u) << 18 | (63 & s) << 12 | (63 & o) << 6 | 63 & l) > 65535 && a < 1114112 && (c = a)
                        }
                    null === c ? (c = 65533,
                    h = 1) : c > 65535 && (c -= 65536,
                    i.push(c >>> 10 & 1023 | 55296),
                    c = 56320 | 1023 & c),
                    i.push(c),
                    n += h
                }
                return function(t) {
                    var e = t.length;
                    if (e <= T)
                        return String.fromCharCode.apply(String, t);
                    var r = ""
                      , i = 0;
                    for (; i < e; )
                        r += String.fromCharCode.apply(String, t.slice(i, i += T));
                    return r
                }(i)
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
                return function(t, e, r, i) {
                    return c(e),
                    e <= 0 ? l(t, e) : void 0 !== r ? "string" == typeof i ? l(t, e).fill(r, i) : l(t, e).fill(r) : l(t, e)
                }(null, t, e, r)
            }
            ,
            a.allocUnsafe = function(t) {
                return h(null, t)
            }
            ,
            a.allocUnsafeSlow = function(t) {
                return h(null, t)
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
                for (var r = t.length, i = e.length, n = 0, s = Math.min(r, i); n < s; ++n)
                    if (t[n] !== e[n]) {
                        r = t[n],
                        i = e[n];
                        break
                    }
                return r < i ? -1 : i < r ? 1 : 0
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
                var i = a.allocUnsafe(e)
                  , n = 0;
                for (r = 0; r < t.length; ++r) {
                    var o = t[r];
                    if (!a.isBuffer(o))
                        throw new TypeError('"list" argument must be an Array of Buffers');
                    o.copy(i, n),
                    n += o.length
                }
                return i
            }
            ,
            a.byteLength = p,
            a.prototype._isBuffer = !0,
            a.prototype.swap16 = function() {
                var t = this.length;
                if (t % 2 != 0)
                    throw new RangeError("Buffer size must be a multiple of 16-bits");
                for (var e = 0; e < t; e += 2)
                    m(this, e, e + 1);
                return this
            }
            ,
            a.prototype.swap32 = function() {
                var t = this.length;
                if (t % 4 != 0)
                    throw new RangeError("Buffer size must be a multiple of 32-bits");
                for (var e = 0; e < t; e += 4)
                    m(this, e, e + 3),
                    m(this, e + 1, e + 2);
                return this
            }
            ,
            a.prototype.swap64 = function() {
                var t = this.length;
                if (t % 8 != 0)
                    throw new RangeError("Buffer size must be a multiple of 64-bits");
                for (var e = 0; e < t; e += 8)
                    m(this, e, e + 7),
                    m(this, e + 1, e + 6),
                    m(this, e + 2, e + 5),
                    m(this, e + 3, e + 4);
                return this
            }
            ,
            a.prototype.toString = function() {
                var t = 0 | this.length;
                return 0 === t ? "" : 0 === arguments.length ? L(this, 0, t) : function(t, e, r) {
                    var i = !1;
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
                            return L(this, e, r);
                        case "ascii":
                            return q(this, e, r);
                        case "latin1":
                        case "binary":
                            return S(this, e, r);
                        case "base64":
                            return A(this, e, r);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return C(this, e, r);
                        default:
                            if (i)
                                throw new TypeError("Unknown encoding: " + t);
                            t = (t + "").toLowerCase(),
                            i = !0
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
            a.prototype.compare = function(t, e, r, i, n) {
                if (!a.isBuffer(t))
                    throw new TypeError("Argument must be a Buffer");
                if (void 0 === e && (e = 0),
                void 0 === r && (r = t ? t.length : 0),
                void 0 === i && (i = 0),
                void 0 === n && (n = this.length),
                e < 0 || r > t.length || i < 0 || n > this.length)
                    throw new RangeError("out of range index");
                if (i >= n && e >= r)
                    return 0;
                if (i >= n)
                    return -1;
                if (e >= r)
                    return 1;
                if (e >>>= 0,
                r >>>= 0,
                i >>>= 0,
                n >>>= 0,
                this === t)
                    return 0;
                for (var s = n - i, o = r - e, l = Math.min(s, o), u = this.slice(i, n), c = t.slice(e, r), h = 0; h < l; ++h)
                    if (u[h] !== c[h]) {
                        s = u[h],
                        o = c[h];
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
                return g(this, t, e, r, !0)
            }
            ,
            a.prototype.lastIndexOf = function(t, e, r) {
                return g(this, t, e, r, !1)
            }
            ,
            a.prototype.write = function(t, e, r, i) {
                if (void 0 === e)
                    i = "utf8",
                    r = this.length,
                    e = 0;
                else if (void 0 === r && "string" == typeof e)
                    i = e,
                    r = this.length,
                    e = 0;
                else {
                    if (!isFinite(e))
                        throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                    e |= 0,
                    isFinite(r) ? (r |= 0,
                    void 0 === i && (i = "utf8")) : (i = r,
                    r = void 0)
                }
                var n = this.length - e;
                if ((void 0 === r || r > n) && (r = n),
                t.length > 0 && (r < 0 || e < 0) || e > this.length)
                    throw new RangeError("Attempt to write outside buffer bounds");
                i || (i = "utf8");
                for (var s = !1; ; )
                    switch (i) {
                    case "hex":
                        return y(this, t, e, r);
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
                        return w(this, t, e, r);
                    default:
                        if (s)
                            throw new TypeError("Unknown encoding: " + i);
                        i = ("" + i).toLowerCase(),
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
            var T = 4096;
            function q(t, e, r) {
                var i = "";
                r = Math.min(t.length, r);
                for (var n = e; n < r; ++n)
                    i += String.fromCharCode(127 & t[n]);
                return i
            }
            function S(t, e, r) {
                var i = "";
                r = Math.min(t.length, r);
                for (var n = e; n < r; ++n)
                    i += String.fromCharCode(t[n]);
                return i
            }
            function k(t, e, r) {
                var i = t.length;
                (!e || e < 0) && (e = 0),
                (!r || r < 0 || r > i) && (r = i);
                for (var n = "", s = e; s < r; ++s)
                    n += P(t[s]);
                return n
            }
            function C(t, e, r) {
                for (var i = t.slice(e, r), n = "", s = 0; s < i.length; s += 2)
                    n += String.fromCharCode(i[s] + 256 * i[s + 1]);
                return n
            }
            function O(t, e, r) {
                if (t % 1 != 0 || t < 0)
                    throw new RangeError("offset is not uint");
                if (t + e > r)
                    throw new RangeError("Trying to access beyond buffer length")
            }
            function R(t, e, r, i, n, s) {
                if (!a.isBuffer(t))
                    throw new TypeError('"buffer" argument must be a Buffer instance');
                if (e > n || e < s)
                    throw new RangeError('"value" argument is out of bounds');
                if (r + i > t.length)
                    throw new RangeError("Index out of range")
            }
            function B(t, e, r, i) {
                e < 0 && (e = 65535 + e + 1);
                for (var n = 0, s = Math.min(t.length - r, 2); n < s; ++n)
                    t[r + n] = (e & 255 << 8 * (i ? n : 1 - n)) >>> 8 * (i ? n : 1 - n)
            }
            function I(t, e, r, i) {
                e < 0 && (e = 4294967295 + e + 1);
                for (var n = 0, s = Math.min(t.length - r, 4); n < s; ++n)
                    t[r + n] = e >>> 8 * (i ? n : 3 - n) & 255
            }
            function _(t, e, r, i, n, s) {
                if (r + i > t.length)
                    throw new RangeError("Index out of range");
                if (r < 0)
                    throw new RangeError("Index out of range")
            }
            function U(t, e, r, i, s) {
                return s || _(t, 0, r, 4),
                n.write(t, e, r, i, 23, 4),
                r + 4
            }
            function D(t, e, r, i, s) {
                return s || _(t, 0, r, 8),
                n.write(t, e, r, i, 52, 8),
                r + 8
            }
            a.prototype.slice = function(t, e) {
                var r, i = this.length;
                if (t = ~~t,
                e = void 0 === e ? i : ~~e,
                t < 0 ? (t += i) < 0 && (t = 0) : t > i && (t = i),
                e < 0 ? (e += i) < 0 && (e = 0) : e > i && (e = i),
                e < t && (e = t),
                a.TYPED_ARRAY_SUPPORT)
                    (r = this.subarray(t, e)).__proto__ = a.prototype;
                else {
                    var n = e - t;
                    r = new a(n,void 0);
                    for (var s = 0; s < n; ++s)
                        r[s] = this[s + t]
                }
                return r
            }
            ,
            a.prototype.readUIntLE = function(t, e, r) {
                t |= 0,
                e |= 0,
                r || O(t, e, this.length);
                for (var i = this[t], n = 1, s = 0; ++s < e && (n *= 256); )
                    i += this[t + s] * n;
                return i
            }
            ,
            a.prototype.readUIntBE = function(t, e, r) {
                t |= 0,
                e |= 0,
                r || O(t, e, this.length);
                for (var i = this[t + --e], n = 1; e > 0 && (n *= 256); )
                    i += this[t + --e] * n;
                return i
            }
            ,
            a.prototype.readUInt8 = function(t, e) {
                return e || O(t, 1, this.length),
                this[t]
            }
            ,
            a.prototype.readUInt16LE = function(t, e) {
                return e || O(t, 2, this.length),
                this[t] | this[t + 1] << 8
            }
            ,
            a.prototype.readUInt16BE = function(t, e) {
                return e || O(t, 2, this.length),
                this[t] << 8 | this[t + 1]
            }
            ,
            a.prototype.readUInt32LE = function(t, e) {
                return e || O(t, 4, this.length),
                (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
            }
            ,
            a.prototype.readUInt32BE = function(t, e) {
                return e || O(t, 4, this.length),
                16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
            }
            ,
            a.prototype.readIntLE = function(t, e, r) {
                t |= 0,
                e |= 0,
                r || O(t, e, this.length);
                for (var i = this[t], n = 1, s = 0; ++s < e && (n *= 256); )
                    i += this[t + s] * n;
                return i >= (n *= 128) && (i -= Math.pow(2, 8 * e)),
                i
            }
            ,
            a.prototype.readIntBE = function(t, e, r) {
                t |= 0,
                e |= 0,
                r || O(t, e, this.length);
                for (var i = e, n = 1, s = this[t + --i]; i > 0 && (n *= 256); )
                    s += this[t + --i] * n;
                return s >= (n *= 128) && (s -= Math.pow(2, 8 * e)),
                s
            }
            ,
            a.prototype.readInt8 = function(t, e) {
                return e || O(t, 1, this.length),
                128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
            }
            ,
            a.prototype.readInt16LE = function(t, e) {
                e || O(t, 2, this.length);
                var r = this[t] | this[t + 1] << 8;
                return 32768 & r ? 4294901760 | r : r
            }
            ,
            a.prototype.readInt16BE = function(t, e) {
                e || O(t, 2, this.length);
                var r = this[t + 1] | this[t] << 8;
                return 32768 & r ? 4294901760 | r : r
            }
            ,
            a.prototype.readInt32LE = function(t, e) {
                return e || O(t, 4, this.length),
                this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
            }
            ,
            a.prototype.readInt32BE = function(t, e) {
                return e || O(t, 4, this.length),
                this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
            }
            ,
            a.prototype.readFloatLE = function(t, e) {
                return e || O(t, 4, this.length),
                n.read(this, t, !0, 23, 4)
            }
            ,
            a.prototype.readFloatBE = function(t, e) {
                return e || O(t, 4, this.length),
                n.read(this, t, !1, 23, 4)
            }
            ,
            a.prototype.readDoubleLE = function(t, e) {
                return e || O(t, 8, this.length),
                n.read(this, t, !0, 52, 8)
            }
            ,
            a.prototype.readDoubleBE = function(t, e) {
                return e || O(t, 8, this.length),
                n.read(this, t, !1, 52, 8)
            }
            ,
            a.prototype.writeUIntLE = function(t, e, r, i) {
                (t = +t,
                e |= 0,
                r |= 0,
                i) || R(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
                var n = 1
                  , s = 0;
                for (this[e] = 255 & t; ++s < r && (n *= 256); )
                    this[e + s] = t / n & 255;
                return e + r
            }
            ,
            a.prototype.writeUIntBE = function(t, e, r, i) {
                (t = +t,
                e |= 0,
                r |= 0,
                i) || R(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
                var n = r - 1
                  , s = 1;
                for (this[e + n] = 255 & t; --n >= 0 && (s *= 256); )
                    this[e + n] = t / s & 255;
                return e + r
            }
            ,
            a.prototype.writeUInt8 = function(t, e, r) {
                return t = +t,
                e |= 0,
                r || R(this, t, e, 1, 255, 0),
                a.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
                this[e] = 255 & t,
                e + 1
            }
            ,
            a.prototype.writeUInt16LE = function(t, e, r) {
                return t = +t,
                e |= 0,
                r || R(this, t, e, 2, 65535, 0),
                a.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t,
                this[e + 1] = t >>> 8) : B(this, t, e, !0),
                e + 2
            }
            ,
            a.prototype.writeUInt16BE = function(t, e, r) {
                return t = +t,
                e |= 0,
                r || R(this, t, e, 2, 65535, 0),
                a.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8,
                this[e + 1] = 255 & t) : B(this, t, e, !1),
                e + 2
            }
            ,
            a.prototype.writeUInt32LE = function(t, e, r) {
                return t = +t,
                e |= 0,
                r || R(this, t, e, 4, 4294967295, 0),
                a.TYPED_ARRAY_SUPPORT ? (this[e + 3] = t >>> 24,
                this[e + 2] = t >>> 16,
                this[e + 1] = t >>> 8,
                this[e] = 255 & t) : I(this, t, e, !0),
                e + 4
            }
            ,
            a.prototype.writeUInt32BE = function(t, e, r) {
                return t = +t,
                e |= 0,
                r || R(this, t, e, 4, 4294967295, 0),
                a.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24,
                this[e + 1] = t >>> 16,
                this[e + 2] = t >>> 8,
                this[e + 3] = 255 & t) : I(this, t, e, !1),
                e + 4
            }
            ,
            a.prototype.writeIntLE = function(t, e, r, i) {
                if (t = +t,
                e |= 0,
                !i) {
                    var n = Math.pow(2, 8 * r - 1);
                    R(this, t, e, r, n - 1, -n)
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
            a.prototype.writeIntBE = function(t, e, r, i) {
                if (t = +t,
                e |= 0,
                !i) {
                    var n = Math.pow(2, 8 * r - 1);
                    R(this, t, e, r, n - 1, -n)
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
                r || R(this, t, e, 1, 127, -128),
                a.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
                t < 0 && (t = 255 + t + 1),
                this[e] = 255 & t,
                e + 1
            }
            ,
            a.prototype.writeInt16LE = function(t, e, r) {
                return t = +t,
                e |= 0,
                r || R(this, t, e, 2, 32767, -32768),
                a.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t,
                this[e + 1] = t >>> 8) : B(this, t, e, !0),
                e + 2
            }
            ,
            a.prototype.writeInt16BE = function(t, e, r) {
                return t = +t,
                e |= 0,
                r || R(this, t, e, 2, 32767, -32768),
                a.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8,
                this[e + 1] = 255 & t) : B(this, t, e, !1),
                e + 2
            }
            ,
            a.prototype.writeInt32LE = function(t, e, r) {
                return t = +t,
                e |= 0,
                r || R(this, t, e, 4, 2147483647, -2147483648),
                a.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t,
                this[e + 1] = t >>> 8,
                this[e + 2] = t >>> 16,
                this[e + 3] = t >>> 24) : I(this, t, e, !0),
                e + 4
            }
            ,
            a.prototype.writeInt32BE = function(t, e, r) {
                return t = +t,
                e |= 0,
                r || R(this, t, e, 4, 2147483647, -2147483648),
                t < 0 && (t = 4294967295 + t + 1),
                a.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24,
                this[e + 1] = t >>> 16,
                this[e + 2] = t >>> 8,
                this[e + 3] = 255 & t) : I(this, t, e, !1),
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
                return D(this, t, e, !0, r)
            }
            ,
            a.prototype.writeDoubleBE = function(t, e, r) {
                return D(this, t, e, !1, r)
            }
            ,
            a.prototype.copy = function(t, e, r, i) {
                if (r || (r = 0),
                i || 0 === i || (i = this.length),
                e >= t.length && (e = t.length),
                e || (e = 0),
                i > 0 && i < r && (i = r),
                i === r)
                    return 0;
                if (0 === t.length || 0 === this.length)
                    return 0;
                if (e < 0)
                    throw new RangeError("targetStart out of bounds");
                if (r < 0 || r >= this.length)
                    throw new RangeError("sourceStart out of bounds");
                if (i < 0)
                    throw new RangeError("sourceEnd out of bounds");
                i > this.length && (i = this.length),
                t.length - e < i - r && (i = t.length - e + r);
                var n, s = i - r;
                if (this === t && r < e && e < i)
                    for (n = s - 1; n >= 0; --n)
                        t[n + e] = this[n + r];
                else if (s < 1e3 || !a.TYPED_ARRAY_SUPPORT)
                    for (n = 0; n < s; ++n)
                        t[n + e] = this[n + r];
                else
                    Uint8Array.prototype.set.call(t, this.subarray(r, r + s), e);
                return s
            }
            ,
            a.prototype.fill = function(t, e, r, i) {
                if ("string" == typeof t) {
                    if ("string" == typeof e ? (i = e,
                    e = 0,
                    r = this.length) : "string" == typeof r && (i = r,
                    r = this.length),
                    1 === t.length) {
                        var n = t.charCodeAt(0);
                        n < 256 && (t = n)
                    }
                    if (void 0 !== i && "string" != typeof i)
                        throw new TypeError("encoding must be a string");
                    if ("string" == typeof i && !a.isEncoding(i))
                        throw new TypeError("Unknown encoding: " + i)
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
                    var o = a.isBuffer(t) ? t : j(new a(t,i).toString())
                      , l = o.length;
                    for (s = 0; s < r - e; ++s)
                        this[s + e] = o[s % l]
                }
                return this
            }
            ;
            var M = /[^+\/0-9A-Za-z-_]/g;
            function P(t) {
                return t < 16 ? "0" + t.toString(16) : t.toString(16)
            }
            function j(t, e) {
                var r;
                e = e || 1 / 0;
                for (var i = t.length, n = null, s = [], o = 0; o < i; ++o) {
                    if ((r = t.charCodeAt(o)) > 55295 && r < 57344) {
                        if (!n) {
                            if (r > 56319) {
                                (e -= 3) > -1 && s.push(239, 191, 189);
                                continue
                            }
                            if (o + 1 === i) {
                                (e -= 3) > -1 && s.push(239, 191, 189);
                                continue
                            }
                            n = r;
                            continue
                        }
                        if (r < 56320) {
                            (e -= 3) > -1 && s.push(239, 191, 189),
                            n = r;
                            continue
                        }
                        r = 65536 + (n - 55296 << 10 | r - 56320)
                    } else
                        n && (e -= 3) > -1 && s.push(239, 191, 189);
                    if (n = null,
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
                return i.toByteArray(function(t) {
                    if ((t = function(t) {
                        return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
                    }(t).replace(M, "")).length < 2)
                        return "";
                    for (; t.length % 4 != 0; )
                        t += "=";
                    return t
                }(t))
            }
            function z(t, e, r, i) {
                for (var n = 0; n < i && !(n + r >= e.length || n >= t.length); ++n)
                    e[n + r] = t[n];
                return n
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
              , i = e[1];
            return 3 * (r + i) / 4 - i
        }
        ,
        e.toByteArray = function(t) {
            for (var e, r = u(t), i = r[0], o = r[1], l = new s(function(t, e, r) {
                return 3 * (e + r) / 4 - r
            }(0, i, o)), a = 0, c = o > 0 ? i - 4 : i, h = 0; h < c; h += 4)
                e = n[t.charCodeAt(h)] << 18 | n[t.charCodeAt(h + 1)] << 12 | n[t.charCodeAt(h + 2)] << 6 | n[t.charCodeAt(h + 3)],
                l[a++] = e >> 16 & 255,
                l[a++] = e >> 8 & 255,
                l[a++] = 255 & e;
            2 === o && (e = n[t.charCodeAt(h)] << 2 | n[t.charCodeAt(h + 1)] >> 4,
            l[a++] = 255 & e);
            1 === o && (e = n[t.charCodeAt(h)] << 10 | n[t.charCodeAt(h + 1)] << 4 | n[t.charCodeAt(h + 2)] >> 2,
            l[a++] = e >> 8 & 255,
            l[a++] = 255 & e);
            return l
        }
        ,
        e.fromByteArray = function(t) {
            for (var e, r = t.length, n = r % 3, s = [], o = 0, l = r - n; o < l; o += 16383)
                s.push(c(t, o, o + 16383 > l ? l : o + 16383));
            1 === n ? (e = t[r - 1],
            s.push(i[e >> 2] + i[e << 4 & 63] + "==")) : 2 === n && (e = (t[r - 2] << 8) + t[r - 1],
            s.push(i[e >> 10] + i[e >> 4 & 63] + i[e << 2 & 63] + "="));
            return s.join("")
        }
        ;
        for (var i = [], n = [], s = "undefined" != typeof Uint8Array ? Uint8Array : Array, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", l = 0, a = o.length; l < a; ++l)
            i[l] = o[l],
            n[o.charCodeAt(l)] = l;
        function u(t) {
            var e = t.length;
            if (e % 4 > 0)
                throw new Error("Invalid string. Length must be a multiple of 4");
            var r = t.indexOf("=");
            return -1 === r && (r = e),
            [r, r === e ? 0 : 4 - r % 4]
        }
        function c(t, e, r) {
            for (var n, s, o = [], l = e; l < r; l += 3)
                n = (t[l] << 16 & 16711680) + (t[l + 1] << 8 & 65280) + (255 & t[l + 2]),
                o.push(i[(s = n) >> 18 & 63] + i[s >> 12 & 63] + i[s >> 6 & 63] + i[63 & s]);
            return o.join("")
        }
        n["-".charCodeAt(0)] = 62,
        n["_".charCodeAt(0)] = 63
    }
    , function(t, e) {
        e.read = function(t, e, r, i, n) {
            var s, o, l = 8 * n - i - 1, a = (1 << l) - 1, u = a >> 1, c = -7, h = r ? n - 1 : 0, d = r ? -1 : 1, f = t[e + h];
            for (h += d,
            s = f & (1 << -c) - 1,
            f >>= -c,
            c += l; c > 0; s = 256 * s + t[e + h],
            h += d,
            c -= 8)
                ;
            for (o = s & (1 << -c) - 1,
            s >>= -c,
            c += i; c > 0; o = 256 * o + t[e + h],
            h += d,
            c -= 8)
                ;
            if (0 === s)
                s = 1 - u;
            else {
                if (s === a)
                    return o ? NaN : 1 / 0 * (f ? -1 : 1);
                o += Math.pow(2, i),
                s -= u
            }
            return (f ? -1 : 1) * o * Math.pow(2, s - i)
        }
        ,
        e.write = function(t, e, r, i, n, s) {
            var o, l, a, u = 8 * s - n - 1, c = (1 << u) - 1, h = c >> 1, d = 23 === n ? Math.pow(2, -24) - Math.pow(2, -77) : 0, f = i ? 0 : s - 1, p = i ? 1 : -1, m = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
            for (e = Math.abs(e),
            isNaN(e) || e === 1 / 0 ? (l = isNaN(e) ? 1 : 0,
            o = c) : (o = Math.floor(Math.log(e) / Math.LN2),
            e * (a = Math.pow(2, -o)) < 1 && (o--,
            a *= 2),
            (e += o + h >= 1 ? d / a : d * Math.pow(2, 1 - h)) * a >= 2 && (o++,
            a /= 2),
            o + h >= c ? (l = 0,
            o = c) : o + h >= 1 ? (l = (e * a - 1) * Math.pow(2, n),
            o += h) : (l = e * Math.pow(2, h - 1) * Math.pow(2, n),
            o = 0)); n >= 8; t[r + f] = 255 & l,
            f += p,
            l /= 256,
            n -= 8)
                ;
            for (o = o << n | l,
            u += n; u > 0; t[r + f] = 255 & o,
            f += p,
            o /= 256,
            u -= 8)
                ;
            t[r + f - p] |= 128 * m
        }
    }
    , function(t, e) {
        var r = {}.toString;
        t.exports = Array.isArray || function(t) {
            return "[object Array]" == r.call(t)
        }
    }
    , function(t, e) {
        t.exports = '<svg class="i" viewbox="0 0 24 24"><use href="#code-braces" /></svg>'
    }
    , function(t, e, r) {
        t.exports = r(83)
    }
    , function(t, e) {
        t.exports = '<svg class="i" viewbox="0 0 24 24"><use href="#format-align-left" /></svg>'
    }
    , function(t, e) {
        t.exports = '<svg class="i" viewbox="0 0 24 24"><use href="#format-align-center" /></svg>'
    }
    , function(t, e) {
        t.exports = '<svg class="i" viewbox="0 0 24 24"><use href="#format-align-right" /></svg>'
    }
    , function(t, e) {
        t.exports = '<svg class="i" viewbox="0 0 24 24"><use href="#format-align-justify" /></svg>'
    }
    , function(t, e) {
        t.exports = '<svg class="i" viewbox="0 0 24 24"><use href="#format-color-fill" /></svg>'
    }
    , function(t, e) {
        t.exports = '<svg class="i" viewbox="0 0 24 24"><use href="#format-pilcrow" /></svg>'
    }
    , function(t, e) {
        t.exports = '<svg class="i" viewbox="0 0 24 24"><use href="#format-quote-close" /></svg>'
    }
    , function(t, e) {
        t.exports = '<svg class="i" viewbox="0 0 24 24"><use href="#format-bold" /></svg>'
    }
    , function(t, e) {
        t.exports = '<svg class="i" viewbox="0 0 24 24"><use href="#format-clear" /></svg>'
    }
    , function(t, e) {
        t.exports = '<svg class="i" viewbox="0 0 24 24"><use href="#palette" /></svg>'
    }
    , function(t, e) {
        t.exports = '<svg class="i" viewbox="0 0 24 24"><use href="#format-textdirection-l-to-r" /></svg>'
    }
    , function(t, e) {
        t.exports = '<svg class="i" viewbox="0 0 24 24"><use href="#format-textdirection-r-to-l" /></svg>'
    }
    , function(t, e) {
        t.exports = '<svg class="i" viewbox="0 0 24 24"><use href="#emoticon-happy" /></svg>'
    }
    , function(t, e) {
        t.exports = '<svg class="i" viewbox="0 0 24 24"><use href="#format-float-center" /></svg>'
    }
    , function(t, e) {
        t.exports = '<svg class="i" viewbox="0 0 24 24"><use href="#view-day" /></svg>'
    }
    , function(t, e) {
        t.exports = '<svg class="i" viewbox="0 0 24 24"><use href="#format-float-left" /></svg>'
    }
    , function(t, e) {
        t.exports = '<svg class="i" viewbox="0 0 24 24"><use href="#format-float-right" /></svg>'
    }
    , function(t, e) {
        t.exports = '<svg class="i" viewbox="0 0 24 24"><use href="#function-variant" /></svg>'
    }
    , function(t, e) {
        t.exports = '<svg class="i" viewbox="0 0 24 24"><use href="#format-header-1" /></svg>'
    }
    , function(t, e) {
        t.exports = '<svg class="i" viewbox="0 0 24 24"><use href="#format-header-2" /></svg>'
    }
    , function(t, e) {
        t.exports = '<svg class="i" viewbox="0 0 24 24"><use href="#format-header-3" /></svg>'
    }
    , function(t, e) {
        t.exports = '<svg class="i" viewbox="0 0 24 24"><use href="#format-header-4" /></svg>'
    }
    , function(t, e) {
        t.exports = '<svg class="i" viewbox="0 0 24 24"><use href="#format-header-5" /></svg>'
    }
    , function(t, e) {
        t.exports = '<svg class="i" viewbox="0 0 24 24"><use href="#format-header-6" /></svg>'
    }
    , function(t, e) {
        t.exports = '<svg class="i" viewbox="0 0 24 24"><use href="#format-italic" /></svg>'
    }
    , function(t, e) {
        t.exports = '<svg class="i" viewbox="0 0 24 24"><use href="#image" /></svg>'
    }
    , function(t, e) {
        t.exports = '<svg class="i" viewbox="0 0 24 24"><use href="#format-indent-increase" /></svg>'
    }
    , function(t, e) {
        t.exports = '<svg class="i" viewbox="0 0 24 24"><use href="#format-indent-decrease" /></svg>'
    }
    , function(t, e) {
        t.exports = '<svg class="i" viewbox="0 0 24 24"><use href="#link-variant" /></svg>'
    }
    , function(t, e) {
        t.exports = '<svg class="i" viewbox="0 0 24 24"><use href="#format-list-numbers" /></svg>'
    }
    , function(t, e) {
        t.exports = '<svg class="i" viewbox="0 0 24 24"><use href="#format-list-bulleted" /></svg>'
    }
    , function(t, e) {
        t.exports = '<svg class="i" viewbox="0 0 24 24"><use href="#format-list-checks" /></svg>'
    }
    , function(t, e) {
        t.exports = '<svg class="i" viewbox="0 0 24 24"><use href="#format-subscript" /></svg>'
    }
    , function(t, e) {
        t.exports = '<svg class="i" viewbox="0 0 24 24"><use href="#format-superscript" /></svg>'
    }
    , function(t, e) {
        t.exports = '<svg class="i" viewbox="0 0 24 24"><use href="#send" /></svg>'
    }
    , function(t, e) {
        t.exports = '<svg class="i" viewbox="0 0 24 24"><use href="#format-strikethrough" /></svg>'
    }
    , function(t, e) {
        t.exports = '<svg class="i" viewbox="0 0 24 24"><use href="#format-underline" /></svg>'
    }
    , function(t, e) {
        t.exports = '<svg class="i" viewbox="0 0 24 24"><use href="#movie" /></svg>'
    }
    , , function(t, e, r) {
        "use strict";
        r.r(e);
        var i = r(29)
          , n = r(23)
          , s = r(21)
          , o = r(0);
        var l = new class extends o.ClassAttributor {
            add(t, e) {
                if ("+1" === e || "-1" === e) {
                    const r = this.value(t) || 0;
                    e = "+1" === e ? r + 1 : r - 1
                }
                return 0 === e ? (this.remove(t),
                !0) : super.add(t, e)
            }
            canAdd(t, e) {
                return super.canAdd(t, e) || super.canAdd(t, parseInt(e, 10))
            }
            value(t) {
                return parseInt(super.value(t), 10) || void 0
            }
        }
        ("indent","ql-indent",{
            scope: o.Scope.BLOCK,
            whitelist: [1, 2, 3, 4, 5, 6, 7, 8]
        })
          , a = r(4);
        class u extends a.d {
        }
        u.blotName = "blockquote",
        u.tagName = "blockquote";
        var c = u;
        class h extends a.d {
            static formats(t) {
                return this.tagName.indexOf(t.tagName) + 1
            }
        }
        h.blotName = "header",
        h.tagName = ["H1", "H2", "H3", "H4", "H5", "H6"];
        var d = h
          , f = r(12)
          , p = r(1);
        class m extends f.a {
        }
        m.blotName = "list-container",
        m.tagName = "OL";
        class g extends a.d {
            static create(t) {
                const e = super.create();
                return e.setAttribute("data-list", t),
                e
            }
            static formats(t) {
                return t.getAttribute("data-list") || void 0
            }
            static register() {
                p.a.register(m)
            }
            constructor(t, e) {
                super(t, e);
                const r = r=>{
                    if (r.target !== e)
                        return;
                    const i = this.statics.formats(e, t);
                    "checked" === i ? this.format("list", "unchecked") : "unchecked" === i && this.format("list", "checked")
                }
                ;
                e.addEventListener("touchstart", r),
                e.addEventListener("mousedown", r)
            }
            format(t, e) {
                t === this.statics.blotName && e ? this.domNode.setAttribute("data-list", e) : super.format(t, e)
            }
        }
        g.blotName = "list",
        g.tagName = "LI",
        m.allowedChildren = [g],
        g.requiredContainer = m;
        var b = r(25)
          , y = r(19)
          , v = r(26)
          , N = r(27)
          , E = r(10);
        class x extends E.a {
            static create() {
                return super.create()
            }
            static formats() {
                return !0
            }
            optimize(t) {
                super.optimize(t),
                this.domNode.tagName !== this.statics.tagName[0] && this.replaceWith(this.statics.blotName)
            }
        }
        x.blotName = "bold",
        x.tagName = ["STRONG", "B"];
        var w = x;
        class A extends w {
        }
        A.blotName = "italic",
        A.tagName = ["EM", "I"];
        var L = A;
        class T extends E.a {
            static create(t) {
                const e = super.create(t);
                return e.setAttribute("href", this.sanitize(t)),
                e.setAttribute("target", "_blank"),
                e
            }
            static formats(t) {
                return t.getAttribute("href")
            }
            static sanitize(t) {
                return q(t, this.PROTOCOL_WHITELIST) ? t : this.SANITIZED_URL
            }
            format(t, e) {
                t === this.statics.blotName && e ? this.domNode.setAttribute("href", this.constructor.sanitize(e)) : super.format(t, e)
            }
        }
        function q(t, e) {
            const r = document.createElement("a");
            r.href = t;
            const i = r.href.slice(0, r.href.indexOf(":"));
            return e.indexOf(i) > -1
        }
        T.blotName = "link",
        T.tagName = "A",
        T.SANITIZED_URL = "about:blank",
        T.PROTOCOL_WHITELIST = ["http", "https", "mailto", "tel"];
        class S extends E.a {
            static create(t) {
                return "super" === t ? document.createElement("sup") : "sub" === t ? document.createElement("sub") : super.create(t)
            }
            static formats(t) {
                return "SUB" === t.tagName ? "sub" : "SUP" === t.tagName ? "super" : void 0
            }
        }
        S.blotName = "script",
        S.tagName = ["SUB", "SUP"];
        var k = S;
        class C extends E.a {
        }
        C.blotName = "strike",
        C.tagName = "S";
        var O = C;
        class R extends E.a {
        }
        R.blotName = "underline",
        R.tagName = "U";
        var B = R
          , I = r(30);
        class _ extends I.a {
            static create(t) {
                if (null == window.katex)
                    throw new Error("Formula module requires KaTeX.");
                const e = super.create(t);
                return "string" == typeof t && (window.katex.render(t, e, {
                    throwOnError: !1,
                    errorColor: "#f00"
                }),
                e.setAttribute("data-value", t)),
                e
            }
            static value(t) {
                return t.getAttribute("data-value")
            }
            html() {
                const {formula: t} = this.value();
                return `<span>${t}</span>`
            }
        }
        _.blotName = "formula",
        _.className = "ql-formula",
        _.tagName = "SPAN";
        var U = _;
        const D = ["alt", "height", "width"];
        class M extends o.EmbedBlot {
            static create(t) {
                const e = super.create(t);
                return "string" == typeof t && e.setAttribute("src", this.sanitize(t)),
                e
            }
            static formats(t) {
                return D.reduce((e,r)=>(t.hasAttribute(r) && (e[r] = t.getAttribute(r)),
                e), {})
            }
            static match(t) {
                return /\.(jpe?g|gif|png)$/.test(t) || /^data:image\/.+;base64/.test(t)
            }
            static register() {
                /Firefox/i.test(navigator.userAgent) && setTimeout(()=>{
                    document.execCommand("enableObjectResizing", !1, !1)
                }
                , 1)
            }
            static sanitize(t) {
                return q(t, ["http", "https", "data"]) ? t : "//:0"
            }
            static value(t) {
                return t.getAttribute("src")
            }
            format(t, e) {
                D.indexOf(t) > -1 ? e ? this.domNode.setAttribute(t, e) : this.domNode.removeAttribute(t) : super.format(t, e)
            }
        }
        M.blotName = "image",
        M.tagName = "IMG";
        var P = M;
        const j = ["height", "width"];
        class F extends a.a {
            static create(t) {
                const e = super.create(t);
                return e.setAttribute("frameborder", "0"),
                e.setAttribute("allowfullscreen", !0),
                e.setAttribute("src", this.sanitize(t)),
                e
            }
            static formats(t) {
                return j.reduce((e,r)=>(t.hasAttribute(r) && (e[r] = t.getAttribute(r)),
                e), {})
            }
            static sanitize(t) {
                return T.sanitize(t)
            }
            static value(t) {
                return t.getAttribute("src")
            }
            format(t, e) {
                j.indexOf(t) > -1 ? e ? this.domNode.setAttribute(t, e) : this.domNode.removeAttribute(t) : super.format(t, e)
            }
            html() {
                const {video: t} = this.value();
                return `<a href="${t}">${t}</a>`
            }
        }
        F.blotName = "video",
        F.className = "ql-video",
        F.tagName = "IFRAME";
        var z = F
          , K = r(14)
          , H = r(2)
          , $ = r.n(H)
          , Y = r(8)
          , W = r(7)
          , G = r(17)
          , V = r(6)
          , X = r(31);
        const Z = new o.ClassAttributor("code-token","hljs",{
            scope: o.Scope.INLINE
        });
        class Q extends E.a {
            static formats(t, e) {
                for (; null != t && t !== e.domNode; ) {
                    if (t.classList.contains(K.c.className))
                        return super.formats(t, e);
                    t = t.parentNode
                }
            }
            constructor(t, e, r) {
                super(t, e, r),
                Z.add(this.domNode, r)
            }
            format(t, e) {
                t !== Q.blotName ? super.format(t, e) : e ? Z.add(this.domNode, e) : (Z.remove(this.domNode),
                this.domNode.classList.remove(this.statics.className))
            }
            optimize(...t) {
                super.optimize(...t),
                Z.value(this.domNode) || this.unwrap()
            }
        }
        Q.blotName = "code-token",
        Q.className = "ql-token";
        class J extends K.c {
            static create(t) {
                const e = super.create(t);
                return "string" == typeof t && e.setAttribute("data-language", t),
                e
            }
            static formats(t) {
                return t.getAttribute("data-language") || "plain"
            }
            static register() {}
            delta() {
                if (null == this.cache.delta) {
                    const t = super.delta();
                    this.cache.delta = t.compose((new $.a).retain(t.length(), {
                        [Q.blotName]: null
                    }))
                }
                return this.cache.delta
            }
            format(t, e) {
                t === this.statics.blotName && e ? this.domNode.setAttribute("data-language", e) : super.format(t, e)
            }
            replaceWith(t, e) {
                return this.formatAt(0, this.length(), Q.blotName, !1),
                super.replaceWith(t, e)
            }
        }
        class tt extends K.b {
            attach() {
                super.attach(),
                this.forceNext = !1,
                this.scroll.emitMount(this)
            }
            format(t, e) {
                t === J.blotName && (this.forceNext = !0,
                this.children.forEach(r=>{
                    r.format(t, e)
                }
                ))
            }
            formatAt(t, e, r, i) {
                r === J.blotName && (this.forceNext = !0),
                super.formatAt(t, e, r, i)
            }
            highlight(t, e=!1) {
                if (null == this.children.head)
                    return;
                const r = `${Array.from(this.domNode.childNodes).filter(t=>t !== this.uiNode).map(t=>t.textContent).join("\n")}\n`
                  , i = J.formats(this.children.head.domNode);
                if (e || this.forceNext || this.cachedText !== r) {
                    if (r.trim().length > 0 || null == this.cachedText) {
                        const e = this.children.reduce((t,e)=>t.concat(Object(a.b)(e)), new $.a)
                          , n = t(r, i);
                        e.diff(n).reduce((t,{retain: e, attributes: r})=>e ? (r && Object.keys(r).forEach(i=>{
                            [J.blotName, Q.blotName].includes(i) && this.formatAt(t, e, i, r[i])
                        }
                        ),
                        t + e) : t, 0)
                    }
                    this.cachedText = r,
                    this.forceNext = !1
                }
            }
            optimize(t) {
                if (super.optimize(t),
                null != this.parent && null != this.children.head && null != this.uiNode) {
                    const t = J.formats(this.children.head.domNode);
                    t !== this.uiNode.value && (this.uiNode.value = t)
                }
            }
        }
        tt.allowedChildren = [J],
        J.requiredContainer = tt,
        J.allowedChildren = [Q, G.a, V.a, W.a];
        class et extends Y.a {
            static register() {
                p.a.register(Q, !0),
                p.a.register(J, !0),
                p.a.register(tt, !0)
            }
            constructor(t, e) {
                if (super(t, e),
                null == this.options.hljs)
                    throw new Error("Syntax module requires highlight.js. Please include the library on the page before Quill.");
                this.highlightBlot = this.highlightBlot.bind(this),
                this.initListener(),
                this.initTimer()
            }
            initListener() {
                this.quill.on(p.a.events.SCROLL_BLOT_MOUNT, t=>{
                    if (!(t instanceof tt))
                        return;
                    const e = this.quill.root.ownerDocument.createElement("select");
                    this.options.languages.forEach(({key: t, label: r})=>{
                        const i = e.ownerDocument.createElement("option");
                        i.textContent = r,
                        i.setAttribute("value", t),
                        e.appendChild(i)
                    }
                    ),
                    e.addEventListener("change", ()=>{
                        t.format(J.blotName, e.value),
                        this.quill.root.focus(),
                        this.highlight(t, !0)
                    }
                    ),
                    null == t.uiNode && (t.attachUI(e),
                    t.children.head && (e.value = J.formats(t.children.head.domNode)))
                }
                )
            }
            initTimer() {
                let t = null;
                this.quill.on(p.a.events.SCROLL_OPTIMIZE, ()=>{
                    clearTimeout(t),
                    t = setTimeout(()=>{
                        this.highlight(),
                        t = null
                    }
                    , this.options.interval)
                }
                )
            }
            highlight(t=null, e=!1) {
                if (this.quill.selection.composing)
                    return;
                this.quill.update(p.a.sources.USER);
                const r = this.quill.getSelection();
                (null == t ? this.quill.scroll.descendants(tt) : [t]).forEach(t=>{
                    t.highlight(this.highlightBlot, e)
                }
                ),
                this.quill.update(p.a.sources.SILENT),
                null != r && this.quill.setSelection(r, p.a.sources.SILENT)
            }
            highlightBlot(t, e="plain") {
                if ("plain" === e)
                    return t.replace(/[&<>"']/g, t=>{
                        return {
                            "&": "&amp;",
                            "<": "&lt;",
                            ">": "&gt;",
                            '"': "&quot;",
                            "'": "&#39;"
                        }[t]
                    }
                    ).split("\n").reduce((t,r,i)=>(0 !== i && t.insert("\n", {
                        [K.c.blotName]: e
                    }),
                    t.insert(r)), new $.a);
                const r = this.quill.root.ownerDocument.createElement("div");
                return r.classList.add(K.c.className),
                r.innerHTML = this.options.hljs.highlight(e, t).value,
                Object(X.b)(this.quill.scroll, r, [(t,e)=>{
                    const r = Z.value(t);
                    return r ? e.compose((new $.a).retain(e.length(), {
                        [Q.blotName]: r
                    })) : e
                }
                ], [(t,r)=>t.data.split("\n").reduce((t,r,i)=>(0 !== i && t.insert("\n", {
                    [K.c.blotName]: e
                }),
                t.insert(r)), r)], new WeakMap)
            }
        }
        et.DEFAULTS = {
            hljs: (()=>window.hljs)(),
            interval: 1e3,
            languages: [{
                key: "plain",
                label: "Plain"
            }, {
                key: "bash",
                label: "Bash"
            }, {
                key: "cpp",
                label: "C++"
            }, {
                key: "cs",
                label: "C#"
            }, {
                key: "css",
                label: "CSS"
            }, {
                key: "diff",
                label: "Diff"
            }, {
                key: "xml",
                label: "HTML/XML"
            }, {
                key: "java",
                label: "Java"
            }, {
                key: "javascript",
                label: "Javascript"
            }, {
                key: "markdown",
                label: "Markdown"
            }, {
                key: "php",
                label: "PHP"
            }, {
                key: "python",
                label: "Python"
            }, {
                key: "ruby",
                label: "Ruby"
            }, {
                key: "sql",
                label: "SQL"
            }]
        };
        class rt extends a.d {
            static create(t) {
                const e = super.create();
                return t ? e.setAttribute("data-row", t) : e.setAttribute("data-row", ot()),
                e
            }
            static formats(t) {
                if (t.hasAttribute("data-row"))
                    return t.getAttribute("data-row")
            }
            format(t, e) {
                t === rt.blotName && e ? this.domNode.setAttribute("data-row", e) : super.format(t, e)
            }
            table() {
                let t = this.parent;
                for (; null != t && "table-container" !== t.statics.blotName; )
                    t = t.parent;
                return t
            }
        }
        rt.blotName = "table",
        rt.tagName = "TD";
        class it extends f.a {
            checkMerge() {
                if (super.checkMerge() && null != this.next.children.head) {
                    const t = this.children.head.formats()
                      , e = this.children.tail.formats()
                      , r = this.next.children.head.formats()
                      , i = this.next.children.tail.formats();
                    return t.table === e.table && t.table === r.table && t.table === i.table
                }
                return !1
            }
            optimize(...t) {
                super.optimize(...t),
                this.children.forEach(t=>{
                    if (null == t.next)
                        return;
                    const e = t.formats()
                      , r = t.next.formats();
                    if (e.table !== r.table) {
                        const e = this.splitAfter(t);
                        e && e.optimize(),
                        this.prev && this.prev.optimize()
                    }
                }
                )
            }
        }
        it.blotName = "table-row",
        it.tagName = "TR";
        class nt extends f.a {
        }
        nt.blotName = "table-body",
        nt.tagName = "TBODY";
        class st extends f.a {
            balanceCells() {
                const t = this.descendants(it)
                  , e = t.reduce((t,e)=>Math.max(e.children.length, t), 0);
                t.forEach(t=>{
                    new Array(e - t.children.length).fill(0).forEach(()=>{
                        let e;
                        null != t.children.head && (e = rt.formats(t.children.head.domNode));
                        const r = this.scroll.create(rt.blotName, e);
                        t.appendChild(r),
                        r.optimize()
                    }
                    )
                }
                )
            }
            deleteColumn(t) {
                const [e] = this.descendant(nt);
                null != e && null != e.children.head && e.children.forEach(e=>{
                    const r = e.children.at(t);
                    null != r && r.remove()
                }
                )
            }
            insertColumn(t) {
                const [e] = this.descendant(nt);
                null != e && null != e.children.head && e.children.forEach(e=>{
                    const r = e.children.at(t)
                      , i = rt.formats(e.children.head.domNode)
                      , n = this.scroll.create(rt.blotName, i);
                    e.insertBefore(n, r)
                }
                )
            }
            insertRow(t) {
                const [e] = this.descendant(nt);
                if (null == e || null == e.children.head)
                    return;
                const r = ot()
                  , i = this.scroll.create(it.blotName);
                e.children.head.children.forEach(()=>{
                    const t = this.scroll.create(rt.blotName, r);
                    i.appendChild(t)
                }
                );
                const n = e.children.at(t);
                e.insertBefore(i, n)
            }
        }
        function ot() {
            return `row-${Math.random().toString(36).slice(2, 6)}`
        }
        st.blotName = "table-container",
        st.tagName = "TABLE",
        st.allowedChildren = [nt],
        nt.requiredContainer = st,
        nt.allowedChildren = [it],
        it.requiredContainer = nt,
        it.allowedChildren = [rt],
        rt.requiredContainer = it;
        var lt = class extends Y.a {
            static register() {
                p.a.register(rt),
                p.a.register(it),
                p.a.register(nt),
                p.a.register(st)
            }
            constructor(...t) {
                super(...t),
                this.listenBalanceCells()
            }
            balanceTables() {
                this.quill.scroll.descendants(st).forEach(t=>{
                    t.balanceCells()
                }
                )
            }
            deleteColumn() {
                const [t,e,r] = this.getTable();
                if (null == r)
                    return;
                const i = e.children.indexOf(r);
                t.deleteColumn(i),
                this.quill.update(p.a.sources.USER)
            }
            deleteRow() {
                const [,t] = this.getTable();
                null != t && (t.remove(),
                this.quill.update(p.a.sources.USER))
            }
            deleteTable() {
                const [t] = this.getTable();
                if (null == t)
                    return;
                const e = t.offset();
                t.remove(),
                this.quill.update(p.a.sources.USER),
                this.quill.setSelection(e, p.a.sources.SILENT)
            }
            getTable(t=this.quill.getSelection()) {
                if (null == t)
                    return [null, null, null, -1];
                const [e,r] = this.quill.getLine(t.index);
                if (null == e || e.statics.blotName !== rt.blotName)
                    return [null, null, null, -1];
                const i = e.parent;
                return [i.parent.parent, i, e, r]
            }
            insertColumn(t) {
                const e = this.quill.getSelection()
                  , [r,i,n] = this.getTable(e);
                if (null == n)
                    return;
                const s = i.children.offset(n);
                r.insertColumn(s + t),
                this.quill.update(p.a.sources.USER);
                let o = i.parent.children.indexOf(i);
                0 === t && (o += 1),
                this.quill.setSelection(e.index + o, e.length, p.a.sources.SILENT)
            }
            insertColumnLeft() {
                this.insertColumn(0)
            }
            insertColumnRight() {
                this.insertColumn(1)
            }
            insertRow(t) {
                const e = this.quill.getSelection()
                  , [r,i,n] = this.getTable(e);
                if (null == n)
                    return;
                const s = i.parent.children.indexOf(i);
                r.insertRow(s + t),
                this.quill.update(p.a.sources.USER),
                t > 0 ? this.quill.setSelection(e, p.a.sources.SILENT) : this.quill.setSelection(e.index + i.children.length, e.length, p.a.sources.SILENT)
            }
            insertRowAbove() {
                this.insertRow(0)
            }
            insertRowBelow() {
                this.insertRow(1)
            }
            insertTable(t, e) {
                const r = this.quill.getSelection();
                if (null == r)
                    return;
                const i = new Array(t).fill(0).reduce(t=>{
                    const r = new Array(e).fill("\n").join("");
                    return t.insert(r, {
                        table: ot()
                    })
                }
                , (new $.a).retain(r.index));
                this.quill.updateContents(i, p.a.sources.USER),
                this.quill.setSelection(r.index, p.a.sources.SILENT),
                this.balanceTables()
            }
            listenBalanceCells() {
                this.quill.on(p.a.events.SCROLL_OPTIMIZE, t=>{
                    t.some(t=>"TABLE" === t.target.tagName && (this.quill.once(p.a.events.TEXT_CHANGE, (t,e,r)=>{
                        r === p.a.sources.USER && this.balanceTables()
                    }
                    ),
                    !0))
                }
                )
            }
        }
          , at = r(9);
        const ut = at.a.import("core/module");
        class ct extends ut {
            constructor(t, e) {
                super(t, e),
                this.htmlField = ht(e.htmlField, t),
                this.deltaField = ht(e.deltaField, t),
                this.textField = ht(e.textField, t),
                this.form = this.htmlField ? this.htmlField.form : this.deltaField ? this.deltaField.form : !!this.textField && this.textField.form,
                this.form && (this.form.addEventListener("submit", this.update.bind(this), !0),
                this.options.submitKey && this.quill.keyboard.addBinding(this.options.submitKey, this.submit.bind(this), {}, !0)),
                this.options.updateOnBlur && (this.quill.on(at.a.events.SELECTION_CHANGE, (t,e,r)=>{
                    t || this.update.call(this)
                }
                ),
                this.form && this.form.addEventListener("click", this.update.bind(this), !0)),
                this.options.updateOnChange && this.quill.on(at.a.events.EDITOR_CHANGE, (t,e,r,i)=>{
                    t === at.a.events.TEXT_CHANGE && this.update.call(this)
                }
                ),
                this.update()
            }
            update() {
                this.deltaField && (this.deltaField.value = JSON.stringify(this.quill.getContents())),
                this.htmlField && (this.htmlField.value = this.quill.root.innerHTML),
                this.textField && (this.textField.value = this.quill.root.innerText)
            }
            submit() {
                this.update.call(this),
                this.form && this.form.submit()
            }
        }
        function ht(t, e) {
            if (t instanceof HTMLInputElement)
                return t;
            if ("string" == typeof t) {
                var r = document.createElement("input");
                return r.type = "hidden",
                r.name = t,
                r.classList.add("ql-form-input"),
                r.classList.add("ql-form-" + t),
                e.addContainer(r),
                r
            }
            if (!1 === t)
                return !1;
            throw new TypeError("Expected HTMLInputElement or string: " + t)
        }
        ct.DEFAULTS = {
            htmlField: "html",
            deltaField: "delta",
            textField: "text",
            submitKey: {
                key: "S",
                shortKey: !0
            },
            updateOnBlur: !0,
            updateOnChange: !1
        },
        at.a.register("modules/form", ct);
        const dt = at.a.import("core/module")
          , ft = at.a.import("delta")
          , {Attributor: pt, Scope: mt} = at.a.import("parchment");
        class gt extends dt {
            constructor(t, e) {
                super(t, e),
                this.transforms = e,
                this.registerTypeListener(),
                this.registerPasteListener()
            }
            registerPasteListener() {
                for (const t in this.transforms) {
                    const e = this.transforms[t];
                    this.quill.clipboard.addMatcher(Node.TEXT_NODE, (t,r)=>{
                        if ("string" == typeof t.data)
                            return r.ops.forEach((t,r,i)=>{
                                if ("string" == typeof t.insert) {
                                    let n = bt(e, t.insert)
                                      , s = new ft([t]).compose(n);
                                    i.splice(r, 1, ...s.ops)
                                }
                            }
                            ),
                            r
                    }
                    )
                }
            }
            registerTypeListener() {
                this.quill.keyboard.addBinding({
                    key: 38,
                    collapsed: !0,
                    format: ["autoformat-helper"]
                }, this.forwardKeyboardUp.bind(this)),
                this.quill.keyboard.addBinding({
                    key: 40,
                    collapsed: !0,
                    format: ["autoformat-helper"]
                }, this.forwardKeyboardDown.bind(this)),
                this.quill.on(at.a.events.TEXT_CHANGE, (t,e,r)=>{
                    let i = t.ops;
                    if ("user" !== r || !i || i.length < 1)
                        return;
                    let n = i.length - 1
                      , s = i[n];
                    for (; !s.insert && n > 0; )
                        s = i[--n];
                    if (!s.insert || "string" != typeof s.insert)
                        return;
                    let o = "\n" === s.insert
                      , l = this.quill.getSelection();
                    if (!l)
                        return;
                    let a = this.quill.getLength() - l.index - (o ? 1 : 0)
                      , u = l.index
                      , [c] = this.quill.getLeaf(u);
                    if (!c || !c.text)
                        return;
                    let h = c.offset(c.scroll)
                      , d = u - h
                      , f = !1;
                    for (const t in this.transforms) {
                        const e = this.transforms[t];
                        if (e.helper && e.helper.trigger && s.insert.match(e.helper.trigger))
                            this.quill.formatText(u, 1, "autoformat-helper", t, at.a.sources.API),
                            this.openHelper(e, u);
                        else if (s.insert.match(e.trigger || /./)) {
                            this.closeHelper(e);
                            let t = (new ft).retain(h)
                              , r = bt(e, c.text, d);
                            r && (t = t.concat(r)),
                            this.quill.updateContents(t, "api"),
                            f = !0
                        }
                    }
                    f && setTimeout(()=>{
                        this.quill.setSelection(this.quill.getLength() - a, "api")
                    }
                    , 0)
                }
                )
            }
            forwardKeyboard(t, e) {
                if (this.currentHelper && this.currentHelper.container) {
                    let t = this.currentHelper.container.querySelector(".dropdown-menu");
                    console.log("keyboard", t, e.event),
                    t.dispatchEvent(e.event)
                }
            }
            forwardKeyboardUp(t, e) {
                var r = new KeyboardEvent("keydown",{
                    key: "ArrowUp",
                    keyCode: 38,
                    which: 38,
                    bubbles: !0,
                    cancelable: !0
                });
                e.event = r,
                this.forwardKeyboard(t, e)
            }
            forwardKeyboardDown(t, e) {
                var r = new KeyboardEvent("keydown",{
                    key: "ArrowDown",
                    keyCode: 40,
                    which: 40,
                    bubbles: !0,
                    cancelable: !0
                });
                e.event = r,
                this.forwardKeyboard(t, e)
            }
            openHelper(t, e) {
                if (t.helper && (this.currentHelper = t.helper,
                "function" == typeof t.helper.open)) {
                    console.log("openHelper", e, this.quill.getFormat(e));
                    let r = this.quill.getBounds(e)
                      , i = this.quill.addContainer("ql-helper");
                    i.style.position = "absolute",
                    i.style.top = r.top + "px",
                    i.style.left = r.left + "px",
                    i.style.width = r.width + "px",
                    i.style.height = r.height + "px",
                    console.log("openHelper", r, i),
                    t.helper.container = i,
                    t.helper.open(i)
                }
            }
            closeHelper(t) {
                t.helper && "function" == typeof t.helper.close && t.helper.close(t.helper.container)
            }
        }
        function bt(t, e, r) {
            t.find.global || (t.find = new RegExp(t.find,t.find.flags + "g")),
            t.find.lastIndex = 0;
            let i = new ft
              , n = null;
            if (void 0 !== r && null !== r)
                for (n = t.find.exec(e); n && n.length && n.index < r; ) {
                    if (n.index < r && n.index + n[0].length + 1 >= r) {
                        i = i.concat(yt(t, n).ops);
                        break
                    }
                    n = t.find.exec(e)
                }
            else
                for (; null !== (n = t.find.exec(e)); ) {
                    let r = yt(t, n);
                    i = i.concat(r.ops),
                    e = e.substr(r.rightIndex),
                    t.find.lastIndex = 0
                }
            return i
        }
        function yt(t, e) {
            let r = (e = function(t, e) {
                if (t.extract) {
                    let r = new RegExp(t.extract).exec(e[0]);
                    return r && r.length ? (r.index += e.index,
                    r) : e
                }
                return e
            }(t, e)).index
              , i = function(t, e) {
                let r = new RegExp(t.extract || t.find);
                return t.transform ? e.replace(r, t.transform) : e
            }(t, e[0])
              , n = i;
            t.insert && ((n = {})[t.insert] = i);
            let s = function(t, e) {
                let r = {};
                return "string" == typeof t.format ? r[t.format] = e : "object" == typeof t.format && (r = t.format),
                r
            }(t, i);
            const o = new ft;
            return o.retain(r).delete(e[0].length).insert(n, s),
            {
                ops: o,
                rightIndex: r + e[0].length
            }
        }
        gt.DEFAULTS = {
            hashtag: {
                trigger: /[\s.,;:!?]/,
                find: /(?:^|\s)#[^\s.,;:!?]+/i,
                extract: /#([^\s.,;:!?]+)/i,
                transform: "$1",
                insert: "hashtag"
            },
            mention: {
                trigger: /[\s.,;:!?]/,
                find: /(?:^|\s)@[^\s.,;:!?]+/i,
                extract: /@([^\s.,;:!?]+)/i,
                transform: "$1",
                insert: "mention"
            },
            link: {
                trigger: /[\s]/,
                find: /https?:\/\/[\S]+|(www\.[\S]+)/gi,
                transform: function(t, e) {
                    return e ? "http://" + t : t
                },
                format: "link"
            }
        };
        const vt = new pt("autoformat-helper","data-helper",{
            scope: mt.INLINE
        })
          , Nt = at.a.import("blots/embed")
          , Et = at.a.import("blots/inline")
          , xt = at.a.import("blots/text")
          , wt = at.a.import("blots/cursor");
        class At extends Nt {
            static create(t) {
                let e = super.create(t);
                return e.setAttribute("href", this.BASE_URL + t),
                e.setAttribute("spellcheck", !1),
                e.textContent = "#" + t,
                e
            }
            static formats(t) {
                return t.getAttribute("href").substr(this.BASE_URL.length)
            }
            format(t, e) {
                this.domNode.setAttribute("href", this.BASE_URL + e)
            }
            static value(t) {
                return t.textContent.substr(1)
            }
        }
        At.blotName = "hashtag",
        At.className = "ql-hashtag",
        At.tagName = "A",
        At.BASE_URL = "#";
        class Lt extends Et {
            static create(t) {
                let e = super.create(t);
                return e.setAttribute("href", this.BASE_URL + t),
                e.setAttribute("spellcheck", !1),
                e
            }
            static formats(t) {
                return t.getAttribute("href").substr(this.BASE_URL.length)
            }
            format(t, e) {
                this.domNode.setAttribute("href", this.BASE_URL + e)
            }
        }
        Lt.blotName = "hashtag",
        Lt.className = "ql-hashtag",
        Lt.tagName = "A",
        Lt.allowedChildren = [xt, wt],
        Lt.BASE_URL = "#";
        const Tt = at.a.import("blots/embed");
        class qt extends Tt {
            static create(t) {
                const e = super.create(t);
                return e.setAttribute("title", t),
                e.setAttribute("href", this.BASE_URL + t),
                e.textContent = "@" + t,
                e
            }
            static value(t) {
                return t.textContent.substr(1)
            }
        }
        qt.blotName = "mention",
        qt.className = "ql-mention",
        qt.tagName = "A",
        qt.BASE_URL = "/";
        var St = qt
          , kt = r(11);
        function Ct(t, e) {
            return function(t) {
                if (Array.isArray(t))
                    return t
            }(t) || function(t, e) {
                var r = []
                  , i = !0
                  , n = !1
                  , s = void 0;
                try {
                    for (var o, l = t[Symbol.iterator](); !(i = (o = l.next()).done) && (r.push(o.value),
                    !e || r.length !== e); i = !0)
                        ;
                } catch (t) {
                    n = !0,
                    s = t
                } finally {
                    try {
                        i || null == l.return || l.return()
                    } finally {
                        if (n)
                            throw s
                    }
                }
                return r
            }(t, e) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }
        let Ot = Object(kt.a)("quill:toolmodule");
        class Rt extends Y.a {
            constructor(t, e) {
                if (super(t, e),
                Array.isArray(this.options.container)) {
                    const e = document.createElement("div");
                    It(e, this.options.container),
                    t.container.parentNode.insertBefore(e, t.container),
                    this.container = e
                } else
                    "string" == typeof this.options.container ? this.container = document.querySelector(this.options.container) : this.container = this.options.container;
                if (!(this.container instanceof HTMLElement))
                    return Ot.error("Container required for toolbar", this.options);
                this.container.classList.add("ql-toolbar"),
                this.controls = [],
                this.handlers = {},
                Object.keys(this.options.handlers).forEach(t=>{
                    this.addHandler(t, this.options.handlers[t])
                }
                ),
                Array.from(this.container.querySelectorAll("button, select")).forEach(t=>{
                    this.attach(t)
                }
                ),
                this.quill.on(p.a.events.EDITOR_CHANGE, (t,e)=>{
                    t === p.a.events.SELECTION_CHANGE && this.update(e)
                }
                ),
                this.quill.on(p.a.events.SCROLL_OPTIMIZE, ()=>{
                    const t = Ct(this.quill.selection.getRange(), 1)[0];
                    this.update(t)
                }
                )
            }
            addHandler(t, e) {
                this.handlers[t] = e
            }
            attach(t) {
                let e = Array.from(t.classList).find(t=>0 === t.indexOf("ql-"));
                if (!e)
                    return;
                if (e = e.slice("ql-".length),
                "BUTTON" === t.tagName && t.setAttribute("type", "button"),
                null == this.handlers[e] && null == this.quill.scroll.query(e))
                    return void Ot.warn("ignoring attaching to nonexistent format", e, t);
                const r = "SELECT" === t.tagName ? "change" : "click";
                t.addEventListener(r, r=>{
                    let i;
                    if ("SELECT" === t.tagName) {
                        if (t.selectedIndex < 0)
                            return;
                        const e = t.options[t.selectedIndex];
                        i = !e.hasAttribute("selected") && (e.value || !1)
                    } else
                        i = !t.classList.contains("ql-active") && !t.classList.contains("active") && (t.value || !t.hasAttribute("value")),
                        r.preventDefault();
                    this.quill.focus();
                    const n = Ct(this.quill.selection.getRange(), 1)[0];
                    if (null != this.handlers[e])
                        this.handlers[e].call(this, i);
                    else if (this.quill.scroll.query(e).prototype instanceof o.EmbedBlot) {
                        if (!(i = prompt(`Enter ${e}`)))
                            return;
                        this.quill.updateContents((new $.a).retain(n.index).delete(n.length).insert({
                            [e]: i
                        }), p.a.sources.USER)
                    } else
                        this.quill.format(e, i, p.a.sources.USER);
                    this.update(n)
                }
                ),
                this.controls.push([e, t])
            }
            update(t) {
                const e = null == t ? {} : this.quill.getFormat(t);
                this.controls.forEach(r=>{
                    const i = Ct(r, 2)
                      , n = i[0]
                      , s = i[1];
                    if ("SELECT" === s.tagName) {
                        let r;
                        if (null == t)
                            r = null;
                        else if (null == e[n])
                            r = s.querySelector("option[selected]");
                        else if (!Array.isArray(e[n])) {
                            let t = e[n];
                            "string" == typeof t && (t = t.replace(/"/g, '\\"')),
                            r = s.querySelector(`option[value="${t}"]`)
                        }
                        null == r ? (s.value = "",
                        s.selectedIndex = -1) : r.selected = !0
                    } else if (null == t)
                        s.classList.remove("ql-active"),
                        s.classList.remove("active");
                    else if (s.hasAttribute("value")) {
                        const t = e[n] === s.getAttribute("value") || null != e[n] && e[n].toString() === s.getAttribute("value") || null == e[n] && !s.getAttribute("value");
                        s.classList.toggle("ql-active", t),
                        s.classList.toggle("active", t)
                    } else
                        s.classList.toggle("ql-active", null != e[n]),
                        s.classList.toggle("active", null != e[n])
                }
                )
            }
        }
        function Bt(t, e, r) {
            const i = document.createElement("button");
            i.setAttribute("type", "button"),
            i.classList.add(`ql-${e}`),
            i.classList.add("btn"),
            null != r && (i.value = r),
            t.appendChild(i)
        }
        function It(t, e) {
            var r, i, n;
            Array.isArray(e[0]) || (e = [e]),
            e.forEach(e=>{
                const i = document.createElement("span");
                i.classList.add("ql-formats"),
                i.classList.add("btn-group"),
                e.forEach(t=>{
                    if ("string" == typeof t)
                        Bt(i, t);
                    else {
                        const e = Object.keys(t)[0]
                          , s = t[e];
                        Array.isArray(s) ? s.some(Array.isArray) ? (e = e,
                        n = s,
                        (r = i).className = "",
                        r.classList.add("ql-section"),
                        e.split(" ").forEach(t=>r.classList.add("ql-" + t)),
                        It(r, n)) : function(t, e, r) {
                            const i = document.createElement("select");
                            i.classList.add(`ql-${e}`),
                            r.forEach(t=>{
                                const e = document.createElement("option");
                                !1 !== t ? e.setAttribute("value", t) : e.setAttribute("selected", "selected"),
                                i.appendChild(e)
                            }
                            ),
                            t.appendChild(i)
                        }(i, e, s) : Bt(i, e, s)
                    }
                }
                ),
                t.appendChild(i)
            }
            )
        }
        Rt.DEFAULTS = {};
        class _t extends Rt {
            constructor(t, e) {
                super(t, e),
                this.container.classList.add("ql-toolbar", "ql-theme", "btn-toolbar")
            }
        }
        _t.DEFAULTS = {
            container: null,
            handlers: {
                clean() {
                    const t = this.quill.getSelection();
                    if (null != t)
                        if (0 === t.length) {
                            const t = this.quill.getFormat();
                            Object.keys(t).forEach(t=>{
                                null != this.quill.scroll.query(t, o.Scope.INLINE) && this.quill.format(t, !1, p.a.sources.USER)
                            }
                            )
                        } else
                            this.quill.removeFormat(t, p.a.sources.USER)
                },
                direction(t) {
                    const e = this.quill.getFormat().align;
                    "rtl" === t && null == e ? this.quill.format("align", "right", p.a.sources.USER) : t || "right" !== e || this.quill.format("align", !1, p.a.sources.USER),
                    this.quill.format("direction", t, p.a.sources.USER)
                },
                indent(t) {
                    const e = this.quill.getSelection()
                      , r = this.quill.getFormat(e)
                      , i = parseInt(r.indent || 0, 10);
                    if ("+1" === t || "-1" === t) {
                        let e = "+1" === t ? 1 : -1;
                        "rtl" === r.direction && (e *= -1),
                        this.quill.format("indent", i + e, p.a.sources.USER)
                    }
                },
                link(t) {
                    !0 === t && (t = prompt("Enter link URL:")),
                    this.quill.format("link", t, p.a.sources.USER)
                },
                list(t) {
                    const e = this.quill.getSelection()
                      , r = this.quill.getFormat(e);
                    "check" === t ? "checked" === r.list || "unchecked" === r.list ? this.quill.format("list", !1, p.a.sources.USER) : this.quill.format("list", "unchecked", p.a.sources.USER) : this.quill.format("list", t, p.a.sources.USER)
                }
            }
        };
        var Ut = r(28)
          , Dt = r.n(Ut)
          , Mt = r(33)
          , Pt = r.n(Mt);
        var jt = class {
            constructor(t) {
                this.select = t,
                this.container = document.createElement("div"),
                this.buildPicker(),
                this.select.style.display = "none",
                this.select.parentNode.insertBefore(this.container, this.select),
                this.label.addEventListener("mousedown", t=>{
                    this.label.hasAttribute("aria-expanded") || this.options.classList.toggle("show")
                }
                ),
                this.select.addEventListener("change", this.update.bind(this))
            }
            buildItem(t) {
                let e = document.createElement("button");
                return e.classList.add("dropdown-item"),
                t.hasAttribute("value") && e.setAttribute("data-value", t.getAttribute("value")),
                t.textContent && e.setAttribute("data-label", t.textContent),
                e.addEventListener("click", t=>{
                    this.selectItem(e, !0)
                }
                ),
                e
            }
            buildLabel() {
                let t = document.createElement("button");
                return t.classList.add("dropdown-toggle", "btn"),
                t.setAttribute("data-toggle", "dropdown"),
                t.innerHTML = Pt.a,
                this.container.appendChild(t),
                t
            }
            buildOptions() {
                let t = document.createElement("div");
                return t.classList.add("dropdown-menu"),
                [].slice.call(this.select.options).forEach(e=>{
                    let r = this.buildItem(e);
                    t.appendChild(r),
                    !0 === e.selected && this.selectItem(r)
                }
                ),
                this.container.appendChild(t),
                t
            }
            buildPicker() {
                [].slice.call(this.select.attributes).forEach(t=>{
                    this.container.setAttribute(t.name, t.value)
                }
                ),
                this.container.classList.add("dropdown"),
                this.label = this.buildLabel(),
                this.options = this.buildOptions()
            }
            close() {
                this.options.classList.remove("show")
            }
            selectItem(t, e=!1) {
                let r = this.container.querySelector(".dropdown-item.active");
                if (t !== r && (null != r && r.classList.remove("active"),
                null != t && (t.classList.add("active"),
                this.select.selectedIndex = [].indexOf.call(t.parentNode.children, t),
                t.hasAttribute("data-value") ? this.label.setAttribute("data-value", t.getAttribute("data-value")) : this.label.removeAttribute("data-value"),
                t.hasAttribute("data-label") ? this.label.setAttribute("data-label", t.getAttribute("data-label")) : this.label.removeAttribute("data-label"),
                e))) {
                    if ("function" == typeof Event)
                        this.select.dispatchEvent(new Event("change"));
                    else if ("object" == typeof Event) {
                        let t = document.createEvent("Event");
                        t.initEvent("change", !0, !0),
                        this.select.dispatchEvent(t)
                    }
                    this.close()
                }
            }
            update() {
                let t;
                if (this.select.selectedIndex > -1) {
                    let e = this.container.querySelector(".dropdown-menu").children[this.select.selectedIndex];
                    t = this.select.options[this.select.selectedIndex],
                    this.selectItem(e)
                } else
                    this.selectItem(null);
                let e = null != t && t !== this.select.querySelector("option[selected]");
                this.label.classList.toggle("active", e)
            }
        }
        ;
        var Ft = class extends jt {
            constructor(t, e) {
                super(t),
                this.label.innerHTML = e,
                this.container.classList.add("ql-color-picker"),
                [].slice.call(this.container.querySelectorAll(".dropdown-item"), 0, 7).forEach(function(t) {
                    t.classList.add("ql-primary")
                })
            }
            buildItem(t) {
                let e = super.buildItem(t);
                return e.style.backgroundColor = t.getAttribute("value") || "",
                e
            }
            selectItem(t, e) {
                super.selectItem(t, e);
                let r = this.label.querySelector(".i")
                  , i = t && t.getAttribute("data-value") || "";
                r && ("line" === r.tagName ? r.style.stroke = i : r.style.fill = i)
            }
        }
        ;
        var zt = class extends jt {
            constructor(t, e) {
                super(t),
                this.container.classList.add("ql-icon-picker"),
                [].forEach.call(this.container.querySelectorAll(".dropdown-item"), t=>{
                    t.innerHTML = e[t.getAttribute("data-value") || ""]
                }
                ),
                this.defaultItem = this.container.querySelector(".dropdown-item.active"),
                this.selectItem(this.defaultItem)
            }
            selectItem(t, e) {
                super.selectItem(t, e),
                t = t || this.defaultItem,
                this.label.innerHTML = t.innerHTML
            }
        }
        ;
        var Kt = class {
            constructor(t, e) {
                this.quill = t,
                this.boundsContainer = e || document.body,
                this.root = t.addContainer("ql-tooltip"),
                this.root.innerHTML = this.constructor.TEMPLATE,
                this.quill.root === this.quill.scrollingContainer && this.quill.root.addEventListener("scroll", ()=>{
                    this.root.style.marginTop = -1 * this.quill.root.scrollTop + "px"
                }
                ),
                this.hide()
            }
            hide() {
                this.root.classList.add("ql-hidden")
            }
            position(t) {
                let e = t.left + t.width / 2 - this.root.offsetWidth / 2
                  , r = t.bottom + this.quill.root.scrollTop;
                this.root.style.left = e + "px",
                this.root.style.top = r + "px",
                this.root.classList.remove("ql-flip");
                let i = this.boundsContainer.getBoundingClientRect()
                  , n = this.root.getBoundingClientRect()
                  , s = 0;
                if (n.right > i.right && (s = i.right - n.right,
                this.root.style.left = e + s + "px"),
                n.left < i.left && (s = i.left - n.left,
                this.root.style.left = e + s + "px"),
                n.bottom > i.bottom) {
                    let e = n.bottom - n.top
                      , i = t.bottom - t.top + e;
                    this.root.style.top = r - i + "px",
                    this.root.classList.add("ql-flip")
                }
                return s
            }
            show() {
                this.root.classList.remove("ql-editing"),
                this.root.classList.remove("ql-hidden")
            }
        }
          , Ht = r(5)
          , $t = r.n(Ht)
          , Yt = r(3)
          , Wt = r(24);
        var Gt = class {
            constructor(t) {
                this.container = t,
                this.items = [].slice.call(this.container.children),
                this.buildDropdown()
            }
            buildLabel() {
                let t = document.createElement("button");
                return t.classList.add("dropdown-toggle", "btn"),
                t.setAttribute("data-toggle", "dropdown"),
                t.innerHTML = Pt.a,
                this.container.appendChild(t),
                t
            }
            buildItems() {
                let t = document.createElement("div");
                return t.classList.add("dropdown-menu"),
                console.log("build dropdown items", this.items),
                this.items.forEach((e,r,i)=>{
                    if (e.classList.contains("btn-group")) {
                        if ([].slice.call(e.children).forEach(r=>{
                            r.classList.add("dropdown-item"),
                            t.appendChild(r),
                            e.remove()
                        }
                        ),
                        r < i.length - 1) {
                            let e = document.createElement("div");
                            e.classList.add("dropdown-divider"),
                            t.appendChild(e)
                        }
                    } else
                        e.classList.add("dropdown-item"),
                        t.appendChild(e)
                }
                ),
                this.container.appendChild(t),
                t
            }
            buildDropdown() {
                this.container.classList.add("dropdown"),
                this.label = this.buildLabel(),
                this.dropdownMenu = this.buildItems()
            }
        }
          , Vt = r(15);
        class Xt extends Kt {
            constructor(t, e) {
                super(t, e),
                this.textbox = this.root.querySelector('input[type="text"]'),
                this.listen()
            }
            listen() {
                this.textbox.addEventListener("keydown", t=>{
                    Vt.a.match(t, "enter") ? (this.save(),
                    t.preventDefault()) : Vt.a.match(t, "escape") && (this.cancel(),
                    t.preventDefault())
                }
                )
            }
            cancel() {
                this.hide()
            }
            edit(t="link", e=null) {
                this.root.classList.remove("ql-hidden"),
                this.root.classList.add("ql-editing"),
                null != e ? this.textbox.value = e : t !== this.root.getAttribute("data-mode") && (this.textbox.value = ""),
                this.position(this.quill.getBounds(this.quill.selection.savedRange)),
                this.textbox.select(),
                this.textbox.setAttribute("placeholder", this.textbox.getAttribute(`data-${t}`) || ""),
                this.root.setAttribute("data-mode", t)
            }
            restoreFocus() {
                let t = this.quill.scrollingContainer.scrollTop;
                this.quill.focus(),
                this.quill.scrollingContainer.scrollTop = t
            }
            save() {
                let t = this.textbox.value;
                switch (this.root.getAttribute("data-mode")) {
                case "link":
                    {
                        let e = this.quill.root.scrollTop;
                        this.linkRange ? (this.quill.formatText(this.linkRange, "link", t, Yt.a.sources.USER),
                        delete this.linkRange) : (this.restoreFocus(),
                        this.quill.format("link", t, Yt.a.sources.USER)),
                        this.quill.root.scrollTop = e;
                        break
                    }
                case "video":
                    t = function(t) {
                        let e = t.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/) || t.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtu\.be\/([a-zA-Z0-9_-]+)/);
                        if (e)
                            return (e[1] || "https") + "://www.youtube.com/embed/" + e[2] + "?showinfo=0";
                        if (e = t.match(/^(?:(https?):\/\/)?(?:www\.)?vimeo\.com\/(\d+)/))
                            return (e[1] || "https") + "://player.vimeo.com/video/" + e[2] + "/";
                        return t
                    }(t);
                case "formula":
                    {
                        if (!t)
                            break;
                        let e = this.quill.getSelection(!0);
                        if (null != e) {
                            let r = e.index + e.length;
                            this.quill.insertEmbed(r, this.root.getAttribute("data-mode"), t, Yt.a.sources.USER),
                            "formula" === this.root.getAttribute("data-mode") && this.quill.insertText(r + 1, " ", Yt.a.sources.USER),
                            this.quill.setSelection(r + 2, Yt.a.sources.USER)
                        }
                        break
                    }
                }
                this.textbox.value = "",
                this.hide()
            }
        }
        const Zt = [!1, "center", "right", "justify"]
          , Qt = ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466"]
          , Jt = [!1, "serif", "monospace"]
          , te = ["1", "2", "3", !1]
          , ee = ["small", !1, "large", "huge"];
        class re extends Wt.a {
            constructor(t, e) {
                super(t, e);
                let r = e=>{
                    if (!document.body.contains(t.root))
                        return document.body.removeEventListener("click", r);
                    null == this.tooltip || this.tooltip.root.contains(e.target) || document.activeElement === this.tooltip.textbox || this.quill.hasFocus() || this.tooltip.hide(),
                    null != this.pickers && this.pickers.forEach(function(t) {
                        t.container.contains(e.target) || t.close()
                    })
                }
                ;
                this.quill.container.classList.add("ql-theme"),
                t.emitter.listenDOM("click", document.body, r)
            }
            addModule(t) {
                let e = super.addModule(t);
                return "toolbar" === t && this.extendToolbar && this.extendToolbar(e),
                e
            }
            buildButtons(t, e) {
                t.forEach(t=>{
                    (t.getAttribute("class") || "").split(/\s+/).forEach(r=>{
                        if (r.startsWith("ql-") && (r = r.slice("ql-".length),
                        null != e[r]))
                            if ("direction" === r)
                                t.innerHTML = e[r][""] + e[r].rtl;
                            else if ("string" == typeof e[r])
                                t.innerHTML = e[r];
                            else {
                                let i = t.value || "";
                                null != i && e[r][i] && (t.innerHTML = e[r][i])
                            }
                    }
                    )
                }
                )
            }
            buildPickers(t, e) {
                this.pickers = t.map(t=>{
                    if (t.classList.contains("ql-align"))
                        return null == t.querySelector("option") && ie(t, Zt),
                        new zt(t,e.align);
                    if (t.classList.contains("ql-background") || t.classList.contains("ql-color")) {
                        let r = t.classList.contains("ql-background") ? "background" : "color";
                        return null == t.querySelector("option") && ie(t, Qt, "background" === r ? "#ffffff" : "#000000"),
                        new Ft(t,e[r])
                    }
                    return null == t.querySelector("option") && (t.classList.contains("ql-font") ? ie(t, Jt) : t.classList.contains("ql-header") ? ie(t, te) : t.classList.contains("ql-size") && ie(t, ee)),
                    new jt(t)
                }
                );
                this.quill.on(Yt.a.events.EDITOR_CHANGE, ()=>{
                    this.pickers.forEach(function(t) {
                        t.update()
                    })
                }
                )
            }
            buildSections(t, e) {
                t.forEach(t=>new Gt(t))
            }
        }
        function ie(t, e, r=!1) {
            e.forEach(function(e) {
                let i = document.createElement("option");
                e === r ? i.setAttribute("selected", "selected") : i.setAttribute("value", e),
                t.appendChild(i)
            })
        }
        re.DEFAULTS = $t()(!0, {}, Wt.a.DEFAULTS, {
            modules: {
                toolbar: {
                    handlers: {
                        formula: function() {
                            this.quill.theme.tooltip.edit("formula")
                        },
                        image: function() {
                            let t = this.container.querySelector("input.ql-image[type=file]");
                            null == t && ((t = document.createElement("input")).setAttribute("type", "file"),
                            t.setAttribute("accept", "image/png, image/gif, image/jpeg, image/bmp, image/x-icon"),
                            t.classList.add("ql-image"),
                            t.addEventListener("change", ()=>{
                                if (null != t.files && null != t.files[0]) {
                                    let e = new FileReader;
                                    e.onload = (e=>{
                                        let r = this.quill.getSelection(!0);
                                        this.quill.updateContents((new $.a).retain(r.index).delete(r.length).insert({
                                            image: e.target.result
                                        }), Yt.a.sources.USER),
                                        this.quill.setSelection(r.index + 1, Yt.a.sources.SILENT),
                                        t.value = ""
                                    }
                                    ),
                                    e.readAsDataURL(t.files[0])
                                }
                            }
                            ),
                            this.container.appendChild(t)),
                            t.click()
                        },
                        video: function() {
                            this.quill.theme.tooltip.edit("video")
                        }
                    }
                }
            }
        });
        var ne = r(20);
        function se(t, e) {
            return function(t) {
                if (Array.isArray(t))
                    return t
            }(t) || function(t, e) {
                var r = []
                  , i = !0
                  , n = !1
                  , s = void 0;
                try {
                    for (var o, l = t[Symbol.iterator](); !(i = (o = l.next()).done) && (r.push(o.value),
                    !e || r.length !== e); i = !0)
                        ;
                } catch (t) {
                    n = !0,
                    s = t
                } finally {
                    try {
                        i || null == l.return || l.return()
                    } finally {
                        if (n)
                            throw s
                    }
                }
                return r
            }(t, e) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }
        const oe = [[{
            header: ["1", "2", "3", !1]
        }], ["bold", "italic", "underline", "link"], [{
            list: "ordered"
        }, {
            list: "bullet"
        }], ["clean"]];
        class le extends re {
            constructor(t, e) {
                null != e.modules.toolbar && null == e.modules.toolbar.container && (e.modules.toolbar.container = oe),
                super(t, e),
                this.quill.container.classList.add("ql-snow")
            }
            extendToolbar(t) {
                t.container.classList.add("ql-snow"),
                this.buildButtons([].slice.call(t.container.querySelectorAll("button")), Dt.a),
                this.buildPickers([].slice.call(t.container.querySelectorAll("select")), Dt.a),
                this.tooltip = new ae(this.quill,this.options.bounds),
                t.container.querySelector(".ql-link") && this.quill.keyboard.addBinding({
                    key: "K",
                    shortKey: !0
                }, function(e, r) {
                    t.handlers.link.call(t, !r.format.link)
                })
            }
        }
        le.DEFAULTS = $t()(!0, {}, re.DEFAULTS, {
            modules: {
                toolbar: {
                    handlers: {
                        link: function(t) {
                            if (t) {
                                let t = this.quill.getSelection();
                                if (null === t || 0 === t.length)
                                    return;
                                let e = this.quill.getText(t);
                                /^\S+@\S+\.\S+$/.test(e) && 0 !== e.indexOf("mailto:") && (e = "mailto:" + e),
                                this.quill.theme.tooltip.edit("link", e)
                            } else
                                this.quill.format("link", !1)
                        }
                    }
                }
            }
        });
        class ae extends Xt {
            constructor(t, e) {
                super(t, e),
                this.preview = this.root.querySelector("a.ql-preview")
            }
            listen() {
                super.listen(),
                this.root.querySelector("a.ql-action").addEventListener("click", t=>{
                    this.root.classList.contains("ql-editing") ? this.save() : this.edit("link", this.preview.textContent),
                    t.preventDefault()
                }
                ),
                this.root.querySelector("a.ql-remove").addEventListener("click", t=>{
                    if (null != this.linkRange) {
                        let t = this.linkRange;
                        this.restoreFocus(),
                        this.quill.formatText(t, "link", !1, Yt.a.sources.USER),
                        delete this.linkRange
                    }
                    t.preventDefault(),
                    this.hide()
                }
                ),
                this.quill.on(Yt.a.events.SELECTION_CHANGE, (t,e,r)=>{
                    if (null != t) {
                        if (0 === t.length && r === Yt.a.sources.USER) {
                            let e = se(this.quill.scroll.descendant(T, t.index), 2)
                              , r = e[0]
                              , i = e[1];
                            if (null != r) {
                                this.linkRange = new ne.a(t.index - i,r.length());
                                let e = T.formats(r.domNode);
                                return this.preview.textContent = e,
                                this.preview.setAttribute("href", e),
                                this.show(),
                                void this.position(this.quill.getBounds(this.linkRange))
                            }
                        } else
                            delete this.linkRange;
                        this.hide()
                    }
                }
                )
            }
            show() {
                super.show(),
                this.root.removeAttribute("data-mode")
            }
        }
        ae.TEMPLATE = ['<a class="ql-preview" target="_blank" href="about:blank"></a>', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-action"></a>', '<a class="ql-remove"></a>'].join("");
        var ue = le;
        const ce = [["bold", "italic", "link"], [{
            header: 1
        }, {
            header: 2
        }, "blockquote"]];
        class he extends re {
            constructor(t, e) {
                null != e.modules.toolbar && null == e.modules.toolbar.container && (e.modules.toolbar.container = ce),
                super(t, e),
                this.quill.container.classList.add("ql-bubble")
            }
            extendToolbar(t) {
                this.tooltip = new de(this.quill,this.options.bounds),
                this.tooltip.root.appendChild(t.container),
                this.buildButtons([].slice.call(t.container.querySelectorAll("button")), Dt.a),
                this.buildPickers([].slice.call(t.container.querySelectorAll("select")), Dt.a)
            }
        }
        he.DEFAULTS = $t()(!0, {}, re.DEFAULTS, {
            modules: {
                toolbar: {
                    handlers: {
                        link: function(t) {
                            t ? this.quill.theme.tooltip.edit() : this.quill.format("link", !1)
                        }
                    }
                }
            }
        });
        class de extends Xt {
            constructor(t, e) {
                super(t, e),
                this.quill.on(Yt.a.events.EDITOR_CHANGE, (t,e,r,i)=>{
                    if (t === Yt.a.events.SELECTION_CHANGE)
                        if (null != e && e.length > 0 && i === Yt.a.sources.USER) {
                            this.show(),
                            this.root.style.left = "0px",
                            this.root.style.width = "",
                            this.root.style.width = this.root.offsetWidth + "px";
                            let t = this.quill.getLines(e.index, e.length);
                            if (1 === t.length)
                                this.position(this.quill.getBounds(e));
                            else {
                                let r = t[t.length - 1]
                                  , i = this.quill.getIndex(r)
                                  , n = Math.min(r.length() - 1, e.index + e.length - i)
                                  , s = this.quill.getBounds(new ne.a(i,n));
                                this.position(s)
                            }
                        } else
                            document.activeElement !== this.textbox && this.quill.hasFocus() && this.hide()
                }
                )
            }
            listen() {
                super.listen(),
                this.root.querySelector(".ql-close").addEventListener("click", ()=>{
                    this.root.classList.remove("ql-editing")
                }
                ),
                this.quill.on(Yt.a.events.SCROLL_OPTIMIZE, ()=>{
                    setTimeout(()=>{
                        if (this.root.classList.contains("ql-hidden"))
                            return;
                        let t = this.quill.getSelection();
                        null != t && this.position(this.quill.getBounds(t))
                    }
                    , 1)
                }
                )
            }
            cancel() {
                this.show()
            }
            position(t) {
                let e = super.position(t)
                  , r = this.root.querySelector(".ql-tooltip-arrow");
                if (r.style.marginLeft = "",
                0 === e)
                    return e;
                r.style.marginLeft = -1 * e - r.offsetWidth / 2 + "px"
            }
        }
        de.TEMPLATE = ['<span class="ql-tooltip-arrow"></span>', '<div class="ql-tooltip-editor">', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-close"></a>', "</div>"].join(""),
        i.default.register({
            "attributors/attribute/direction": s.a,
            "attributors/class/align": n.b,
            "attributors/class/background": b.a,
            "attributors/class/color": y.b,
            "attributors/class/direction": s.b,
            "attributors/class/font": v.a,
            "attributors/class/size": N.a,
            "attributors/style/align": n.c,
            "attributors/style/background": b.b,
            "attributors/style/color": y.c,
            "attributors/style/direction": s.c,
            "attributors/style/font": v.b,
            "attributors/style/size": N.b
        }, !0),
        i.default.register({
            "formats/align": n.b,
            "formats/direction": s.b,
            "formats/indent": l,
            "formats/background": b.b,
            "formats/color": y.c,
            "formats/font": v.a,
            "formats/size": N.a,
            "formats/blockquote": c,
            "formats/code-block": K.c,
            "formats/header": d,
            "formats/list": g,
            "formats/bold": w,
            "formats/code": K.a,
            "formats/italic": L,
            "formats/link": T,
            "formats/script": k,
            "formats/strike": O,
            "formats/underline": B,
            "formats/formula": U,
            "formats/image": P,
            "formats/video": z,
            "modules/syntax": et,
            "modules/table": lt,
            "formats/hashtag": At,
            "formats/mention": St
        }, !0),
        i.default.register({
            "modules/toolbar": _t,
            "modules/form": ct,
            "modules/autoformat": gt,
            "formats/autoformat-helper": vt,
            "themes/snow": ue,
            "themes/bubble": he,
            "ui/icons": Dt.a,
            "ui/picker": jt,
            "ui/icon-picker": zt,
            "ui/color-picker": Ft,
            "ui/tooltip": Kt
        }, !0),
        window.Quill = i.default;
        e.default = i.default
    }
    ]).default
});
