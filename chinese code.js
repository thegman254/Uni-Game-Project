(function(e) {
    function t(t) {
        for (var n, i, r = t[0], l = t[1], c = t[2], d = 0, h = []; d < r.length; d++)
            i = r[d],
            Object.prototype.hasOwnProperty.call(o, i) && o[i] && h.push(o[i][0]),
            o[i] = 0;
        for (n in l)
            Object.prototype.hasOwnProperty.call(l, n) && (e[n] = l[n]);
        p && p(t);
        while (h.length)
            h.shift()();
        return s.push.apply(s, c || []),
        a()
    }
    function a() {
        for (var e, t = 0; t < s.length; t++) {
            for (var a = s[t], n = !0, r = 1; r < a.length; r++) {
                var l = a[r];
                0 !== o[l] && (n = !1)
            }
            n && (s.splice(t--, 1),
            e = i(i.s = a[0]))
        }
        return e
    }
    var n = {}
      , o = {
        app: 0
    }
      , s = [];
    function i(t) {
        if (n[t])
            return n[t].exports;
        var a = n[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(a.exports, a, a.exports, i),
        a.l = !0,
        a.exports
    }
    i.m = e,
    i.c = n,
    i.d = function(e, t, a) {
        i.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: a
        })
    }
    ,
    i.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    i.t = function(e, t) {
        if (1 & t && (e = i(e)),
        8 & t)
            return e;
        if (4 & t && "object" === typeof e && e && e.__esModule)
            return e;
        var a = Object.create(null);
        if (i.r(a),
        Object.defineProperty(a, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var n in e)
                i.d(a, n, function(t) {
                    return e[t]
                }
                .bind(null, n));
        return a
    }
    ,
    i.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e["default"]
        }
        : function() {
            return e
        }
        ;
        return i.d(t, "a", t),
        t
    }
    ,
    i.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    i.p = "/";
    var r = window["webpackJsonp"] = window["webpackJsonp"] || []
      , l = r.push.bind(r);
    r.push = t,
    r = r.slice();
    for (var c = 0; c < r.length; c++)
        t(r[c]);
    var p = l;
    s.push([0, "chunk-vendors"]),
    a()
}
)({
    0: function(e, t, a) {
        e.exports = a("56d7")
    },
    "01bf": function(e, t, a) {
        "use strict";
        var n = a("b714")
          , o = a.n(n);
        o.a
    },
    "034f": function(e, t, a) {
        "use strict";
        var n = a("85ec")
          , o = a.n(n);
        o.a
    },
    "0423": function(e) {
        e.exports = JSON.parse('{"title":"ぺこらボタン","mediacontorl":"コントロールボタン","stopplay":"再生を停止する","helptitle":"遊び方ぺこ?","helpcontent":"クリックボタン、ぺこらの声を再生することができますだよ~マルチクリックをサポート、同じボタンを複数回クリックして、エコー効果を作成することもできますぺこ~","additionalhelp":"私はボタンのすべてのボリュームが同じであることを約束することはできませんので、あなたの耳に注意してください、そのためごめんなさい、何でもするε=ε=ε=┏(゜ロ゜;)┛","openorderplaymode":"オンにする注文プレイ","orderplaymode":"注文プレイ","orderlistnow":"現在のプレイリスト","playthislist":"順番に再生","listempty":"プレイリストは空ぺこ〜","resetorder":"プレイリストをクリア","language":"言語","orderplaymodehelp":"注文プレイの使用方法","developerinfo":"このウェブサイトは愛好家によって設定されています、ホロライブプロダクションとは何の関係もない","repeatmode":"止まらないで（ループプレイ）","betainfo":"こんにちは、このウェブサイトはついに日本語をサポートしました　私の日本語は苦手ぺこ　間違いを見つけた場合は、Githubでお知らせください ありがとうございました","info":"更新资料","developer":"開発者：Coceki","credits":"特別な感謝：野兔子同好会 Richard_Al 昭和歌姬夏半首","translationCredits":"","tips1":"オンにする注文プレイ、欲しいものを選択してください（繰り返し可能）","tips2":"次に、右下の丸いボタンをクリックします","tips3":"ここで、コンピューターにプレイリストを自動的に再生させることができます","pekolanguage":"ぺこ語発生器","beta":"近日公開","gotit":"理解理解","entersomewords":"音声を生成するテキストを入力してください（注意：文字はあまり長くしないでください）","generate":"生成する","helpdevelope":"このウェブサイトの改善にご協力ください","volume":"ボリューム","addtohomescreen":"ホーム画面にぺこらボタンを追加する","add":"追加","dontneed":"必要ない","addtohomescreeninfo":"このウェブサイトはPWAをサポートしています。オフラインでもホーム画面に追加すると、通常のアプリとしてアクセスできます","friendlinks":"リンク集","newversion":"A brand new version is on the way","youtubesubs":"YouTube Channel(beta)","upcoming":"開始しようとしています","streaming":"生放送"}')
    },
    2955: function(e, t, a) {
        "use strict";
        var n = a("8c62")
          , o = a.n(n);
        o.a
    },
    "49f8": function(e, t, a) {
        var n = {
            "./en.json": "edd4",
            "./ja.json": "0423",
            "./zhHans.json": "ecd2"
        };
        function o(e) {
            var t = s(e);
            return a(t)
        }
        function s(e) {
            if (!a.o(n, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND",
                t
            }
            return n[e]
        }
        o.keys = function() {
            return Object.keys(n)
        }
        ,
        o.resolve = s,
        e.exports = o,
        o.id = "49f8"
    },
    "56d7": function(e, t, a) {
        "use strict";
        a.r(t);
        a("e260"),
        a("e6cf"),
        a("cca6"),
        a("a79d");
        var n = a("2b0e")
          , o = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                attrs: {
                    id: "app"
                }
            }, [a("transition", {
                attrs: {
                    name: "fab-scale"
                }
            }, [a("button", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.gotop,
                    expression: "gotop"
                }],
                staticClass: "fabbtn",
                on: {
                    click: e.toTop
                }
            }, [a("svg", {
                staticStyle: {
                    width: "36px",
                    height: "36px"
                },
                attrs: {
                    viewBox: "0 0 24 24"
                }
            }, [a("path", {
                attrs: {
                    fill: "white",
                    d: "M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z"
                }
            })])])]), a("Topbar"), a("router-view"), e.$root.dark ? a("hr", {
                staticClass: "line",
                attrs: {
                    color: "#333",
                    width: "95%"
                }
            }) : a("hr", {
                staticClass: "line",
                attrs: {
                    color: "#EEE",
                    width: "95%"
                }
            }), a("div", {
                staticStyle: {
                    padding: "10px",
                    "margin-bottom": "10px"
                }
            }, [a("p", {
                staticClass: "footertext",
                class: {
                    dark_infotext: e.$root.dark
                }
            }, [e._v(e._s(e.$t("developer")))]), a("p", {
                staticClass: "footertext",
                class: {
                    dark_infotext: e.$root.dark
                }
            }, [e._v(e._s(e.$t("credits")))]), a("p", {
                staticClass: "footertext",
                class: {
                    dark_infotext: e.$root.dark
                }
            }, [e._v(e._s(e.$t("translationCredits")))]), a("p", {
                staticClass: "footertext",
                class: {
                    dark_infotext: e.$root.dark
                }
            }, [e._v(e._s(e.$t("friendlinks")))]), e._l(e.links, (function(t, n) {
                return a("s-btn", {
                    key: n,
                    attrs: {
                        color: t.color
                    },
                    on: {
                        click: function(a) {
                            return e.See(t.href)
                        }
                    }
                }, [e._v(e._s(t.name))])
            }
            )), a("p", {
                staticClass: "footertext",
                class: {
                    dark_infotext: e.$root.dark
                }
            }, [e._v(e._s(e.$t("developerinfo")))])], 2)], 1)
        }
          , s = []
          , i = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "topbar",
                class: {
                    dark_topbar: e.$root.dark
                }
            }, [a("button", {
                staticClass: "languagebtn ripple",
                on: {
                    mouseenter: function(t) {
                        e.showlangmenu = !0
                    }
                }
            }, [a("svg", {
                staticStyle: {
                    width: "24px",
                    height: "24px"
                },
                attrs: {
                    viewBox: "0 0 24 24"
                }
            }, [a("path", {
                attrs: {
                    fill: "white",
                    d: "M12.87,15.07L10.33,12.56L10.36,12.53C12.1,10.59 13.34,8.36 14.07,6H17V4H10V2H8V4H1V6H12.17C11.5,7.92 10.44,9.75 9,11.35C8.07,10.32 7.3,9.19 6.69,8H4.69C5.42,9.63 6.42,11.17 7.67,12.56L2.58,17.58L4,19L9,14L12.11,17.11L12.87,15.07M18.5,10H16.5L12,22H14L15.12,19H19.87L21,22H23L18.5,10M15.88,17L17.5,12.67L19.12,17H15.88Z"
                }
            })])]), a("button", {
                staticClass: "themebtn ripple",
                on: {
                    click: function(t) {
                        return e.DarkMode()
                    }
                }
            }, [a("svg", {
                staticStyle: {
                    width: "24px",
                    height: "24px"
                },
                attrs: {
                    viewBox: "0 0 24 24"
                }
            }, [a("path", {
                attrs: {
                    fill: "white",
                    d: e.darkmodeicon
                }
            })])]), a("p", [e._v(e._s(e.$t("title")))]), a("transition", {
                attrs: {
                    name: "langmenu-scale"
                }
            }, [a("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.showlangmenu,
                    expression: "showlangmenu"
                }],
                staticClass: "langmenu",
                class: {
                    dark: e.$root.dark
                },
                on: {
                    mouseleave: function(t) {
                        e.showlangmenu = !1
                    }
                }
            }, e._l(e.langs, (function(t, n) {
                return a("button", {
                    key: n,
                    staticClass: "menubtn",
                    class: {
                        dark_text: e.$root.dark
                    },
                    on: {
                        click: function(a) {
                            return e.ChangeLang(t.src)
                        }
                    }
                }, [a("div", [e._v(e._s(t.title))])])
            }
            )), 0)])], 1)
        }
          , r = []
          , l = {
            data: function() {
                return {
                    langs: [{
                        title: "简体中文",
                        src: "zhHans",
                        isready: !0
                    }, {
                        title: "English",
                        src: "en",
                        isready: !0
                    }, {
                        title: "日本語(ベータ版)",
                        src: "ja",
                        isready: !0
                    }],
                    showlangmenu: !1
                }
            },
            methods: {
                ChangeLang: function(e) {
                    this.$i18n.locale = e,
                    this.$cookies.set("Lang", e)
                },
                DarkMode: function() {
                    this.$store.commit("change_dark_mode"),
                    this.$root.dark = this.$store.state.dark_mode
                },
                See: function(e) {
                    window.location.href = e
                }
            },
            computed: {
                darkmodeicon: {
                    get: function() {
                        return this.$store.state.dark_icon
                    }
                },
                darkmode: {
                    get: function() {
                        return this.$store.state.darkmode
                    }
                }
            }
        }
          , c = l
          , p = (a("fb46"),
        a("2877"))
          , d = Object(p["a"])(c, i, r, !1, null, null, null)
          , h = d.exports
          , u = {
            name: "App",
            components: {
                Topbar: h
            },
            data: function() {
                return {
                    gotop: !1,
                    prompt: !1,
                    deferred: null,
                    links: [{
                        name: "VTuber按钮合集",
                        href: "https://vtbbtn.org/",
                        color: "primary"
                    }, {
                        name: "夸按钮/あくあボタン",
                        href: "https://aquaminato.moe/",
                        color: "purple"
                    }, {
                        name: "狐按钮/フブキボタン",
                        href: "https://sfubuki.moe/",
                        color: "blue"
                    }, {
                        name: "祭按钮/まつりボタン",
                        href: "https://natsuiromatsuri.moe/",
                        color: "secondary"
                    }, {
                        name: "狼按钮/ミオボタン",
                        href: "https://ookamimio.org/",
                        color: "black"
                    }, {
                        name: "余按钮/なきりあやめボタン",
                        href: "https://nakiriayame.moe/",
                        color: "red"
                    }, {
                        name: "狗按钮/ころねボタン",
                        href: "https://korone.icu/",
                        color: "brown"
                    }]
                }
            },
            created: function() {
                (window.ActiveXObject || "ActiveXObject"in window) && (window.console.log("IE警察出动！"),
                alert("给我滚去下Chrome啊kora！"),
                this.See("https://www.google.cn/intl/zh-CN/chrome/"))
            },
            mounted: function() {
                var e = this
                  , t = new Date
                  , a = t.getHours();
                (a < 6 || a > 18) && (this.$store.commit("change_dark_mode"),
                this.$root.dark = this.$store.state.dark_mode,
                window.console.log(this.$root.dark)),
                window.onbeforeinstallprompt = function(t) {
                    window.console.log(t),
                    e.prompt = !0,
                    e.deferred = t,
                    e.showAddToHomeScreen()
                }
                ,
                window.addEventListener("scroll", this.handleScroll, !0),
                this.$i18n.locale = "zhHans",
                this.$cookies.isKey("Lang") && (this.$i18n.locale = this.$cookies.get("Lang"))
            },
            methods: {
                showAddToHomeScreen: function() {
                    window.console.log("success")
                },
                addToHomescreen: function() {
                    this.deferred.prompt();
                    var e = this;
                    this.deferred.userChoice.then((function(t) {
                        "accepted" === t.outcome ? (window.console.log("User accepted the A2HS prompt"),
                        e.addtoscreendialog = !1) : window.console.log("User dismissed the A2HS prompt")
                    }
                    ))
                },
                handleScroll: function() {
                    var e = document.documentElement.scrollTop || document.body.scrollTop;
                    this.gotop = e > 30
                },
                toTop: function() {
                    var e = document.documentElement.scrollTop || document.body.scrollTop
                      , t = setInterval((function() {
                        document.body.scrollTop = document.documentElement.scrollTop = e -= 50,
                        e <= 0 && clearInterval(t)
                    }
                    ), 10)
                },
                See: function(e) {
                    window.location.href = e
                }
            }
        }
          , m = u
          , g = (a("034f"),
        Object(p["a"])(m, o, s, !1, null, null, null))
          , f = g.exports
          , v = a("8c4f")
          , C = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "overflowC"
            }, [a("transition", {
                attrs: {
                    name: "dialog_scale"
                }
            }, [a("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.orderdialog,
                    expression: "orderdialog"
                }],
                staticClass: "orderdialog langmenu",
                class: {
                    dark: e.$root.dark
                }
            }, [a("button", {
                staticClass: "closebtn ripple",
                on: {
                    click: function(t) {
                        e.orderdialog = !1,
                        e.stopplay()
                    }
                }
            }, [a("svg", {
                staticStyle: {
                    width: "30px",
                    height: "30px"
                },
                attrs: {
                    viewBox: "0 0 24 24"
                }
            }, [a("path", {
                attrs: {
                    fill: "red",
                    d: "M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z"
                }
            })])]), a("p", {
                staticClass: "cardtext",
                class: {
                    dark_text: e.$root.dark
                }
            }, [e._v(e._s(e.$t("orderplaymode")))]), "zhHans" == e.$i18n.locale ? a("div", e._l(e.orderlist, (function(t, n) {
                return a("div", {
                    key: n
                }, [a("s-btn", {
                    attrs: {
                        color: "secondary"
                    },
                    on: {
                        click: function(a) {
                            return e.playOnly(t)
                        }
                    }
                }, [e._v(" " + e._s(t.translation.Chinese) + " ")]), a("button", {
                    staticClass: "deletebtn ripple",
                    on: {
                        click: function(t) {
                            return e.deletelist(e.index)
                        }
                    }
                }, [a("svg", {
                    staticStyle: {
                        width: "24px",
                        height: "24px"
                    },
                    attrs: {
                        viewBox: "0 0 24 24"
                    }
                }, [a("path", {
                    attrs: {
                        fill: "white",
                        d: "M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z"
                    }
                })])])], 1)
            }
            )), 0) : e._e(), "ja" == e.$i18n.locale ? a("div", e._l(e.orderlist, (function(t, n) {
                return a("div", {
                    key: n
                }, [a("s-btn", {
                    attrs: {
                        color: "secondary"
                    },
                    on: {
                        click: function(a) {
                            return e.playOnly(t)
                        }
                    }
                }, [e._v(" " + e._s(t.translation.Japanese) + " ")]), a("button", {
                    staticClass: "deletebtn ripple",
                    on: {
                        click: function(t) {
                            return e.deletelist(e.index)
                        }
                    }
                }, [a("svg", {
                    staticStyle: {
                        width: "24px",
                        height: "24px"
                    },
                    attrs: {
                        viewBox: "0 0 24 24"
                    }
                }, [a("path", {
                    attrs: {
                        fill: "white",
                        d: "M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z"
                    }
                })])])], 1)
            }
            )), 0) : e._e(), "en" == e.$i18n.locale ? a("div", e._l(e.orderlist, (function(t, n) {
                return a("div", {
                    key: n
                }, [a("s-btn", {
                    attrs: {
                        color: "secondary"
                    },
                    on: {
                        click: function(a) {
                            return e.playOnly(t)
                        }
                    }
                }, [e._v(" " + e._s(t.translation.English) + " ")]), a("button", {
                    staticClass: "deletebtn ripple",
                    on: {
                        click: function(t) {
                            return e.deletelist(e.index)
                        }
                    }
                }, [a("svg", {
                    staticStyle: {
                        width: "24px",
                        height: "24px"
                    },
                    attrs: {
                        viewBox: "0 0 24 24"
                    }
                }, [a("path", {
                    attrs: {
                        fill: "white",
                        d: "M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z"
                    }
                })])])], 1)
            }
            )), 0) : e._e(), e.$root.dark ? a("hr", {
                staticClass: "line",
                attrs: {
                    color: "#333",
                    width: "95%"
                }
            }) : a("hr", {
                staticClass: "line",
                attrs: {
                    color: "#EEE",
                    width: "95%"
                }
            }), a("p", {
                staticClass: "cardtext",
                class: {
                    dark_text: e.$root.dark
                },
                staticStyle: {
                    "font-size": "15px !important",
                    transform: "translate3d(-40%,0,0)",
                    overflow: "visible !important",
                    width: "150%"
                }
            }, [a("label", {
                attrs: {
                    for: "toggle1"
                }
            }, [a("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.repeatmode,
                    expression: "repeatmode"
                }],
                attrs: {
                    type: "checkbox",
                    id: "toggle1"
                },
                domProps: {
                    checked: Array.isArray(e.repeatmode) ? e._i(e.repeatmode, null) > -1 : e.repeatmode
                },
                on: {
                    change: function(t) {
                        var a = e.repeatmode
                          , n = t.target
                          , o = !!n.checked;
                        if (Array.isArray(a)) {
                            var s = null
                              , i = e._i(a, s);
                            n.checked ? i < 0 && (e.repeatmode = a.concat([s])) : i > -1 && (e.repeatmode = a.slice(0, i).concat(a.slice(i + 1)))
                        } else
                            e.repeatmode = o
                    }
                }
            }), a("span")]), e._v(" " + e._s(e.$t("repeatmode")) + " ")]), a("p", [a("s-btn", {
                attrs: {
                    color: "primary"
                },
                on: {
                    click: e.orderplay
                }
            }, [e._v(e._s(e.$t("playthislist")))]), a("s-btn", {
                attrs: {
                    color: "secondary"
                },
                on: {
                    click: e.stopplay
                }
            }, [e._v(e._s(e.$t("stopplay")))]), a("s-btn", {
                attrs: {
                    text: "",
                    color: "red"
                },
                on: {
                    click: e.resetorder
                }
            }, [e._v(e._s(e.$t("resetorder")))])], 1)])]), a("transition", {
                attrs: {
                    name: "dialog_scale"
                }
            }, [a("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.orderdialog,
                    expression: "orderdialog"
                }],
                staticClass: "dialog_back"
            })]), a("transition", {
                attrs: {
                    name: "fab-scale"
                }
            }, [a("button", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: 0 != e.arrysize && e.orderplaymode,
                    expression: "arrysize!=0&&orderplaymode"
                }],
                staticClass: "fabbtn",
                staticStyle: {
                    bottom: "140px !important",
                    width: "10px !important",
                    height: "10px !important",
                    background: "orange!important",
                    "z-index": "12",
                    padding: "10px"
                }
            }, [a("div", {
                staticStyle: {
                    color: "white",
                    transform: "translateY(-50%) translateX(-5px)"
                }
            }, [e._v(e._s(e.arrysize))])])]), a("transition", {
                attrs: {
                    name: "fab-scale"
                }
            }, [a("button", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.orderplaymode,
                    expression: "orderplaymode"
                }],
                staticClass: "fabbtn",
                staticStyle: {
                    bottom: "100px !important"
                },
                on: {
                    click: function(t) {
                        e.orderdialog = !0
                    }
                }
            }, [a("svg", {
                staticStyle: {
                    width: "36px",
                    height: "36px"
                },
                attrs: {
                    viewBox: "0 0 24 24"
                }
            }, [a("path", {
                attrs: {
                    fill: "white",
                    d: "M15,6H3V8H15V6M15,10H3V12H15V10M3,16H11V14H3V16M17,6V14.18C16.69,14.07 16.35,14 16,14A3,3 0 0,0 13,17A3,3 0 0,0 16,20A3,3 0 0,0 19,17V8H22V6H17Z"
                }
            })])])]), a("transition", {
                attrs: {
                    name: "dialog_scale"
                }
            }, [a("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.helpdialog,
                    expression: "helpdialog"
                }],
                staticClass: "dialog_back"
            })]), a("transition", {
                attrs: {
                    name: "dialog_scale"
                }
            }, [a("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.helpdialog,
                    expression: "helpdialog"
                }],
                staticClass: "helpdialog langmenu",
                class: {
                    dark: e.$root.dark
                }
            }, [a("p", {
                staticClass: "cardtext",
                class: {
                    dark_text: e.$root.dark
                }
            }, [e._v(e._s(e.$t("orderplaymodehelp")))]), a("p", {
                staticClass: "infotext",
                class: {
                    dark_infotext: e.$root.dark
                }
            }, [e._v(e._s(e.$t("tips1")))]), a("img", {
                attrs: {
                    src: "1.png",
                    width: "300"
                }
            }), a("p", {
                staticClass: "infotext",
                class: {
                    dark_infotext: e.$root.dark
                }
            }, [e._v(e._s(e.$t("tips2")))]), a("img", {
                attrs: {
                    src: "2.png",
                    width: "300"
                }
            }), a("p", {
                staticClass: "infotext",
                class: {
                    dark_infotext: e.$root.dark
                }
            }, [e._v(e._s(e.$t("tips3")))]), a("img", {
                attrs: {
                    src: "3.png",
                    width: "300"
                }
            }), a("p", [a("s-btn", {
                on: {
                    click: function(t) {
                        e.helpdialog = !1
                    }
                }
            }, [e._v(e._s(e.$t("gotit")))])], 1)])]), a("div", {
                staticClass: "titlediv"
            }, [a("p", {
                staticClass: "title",
                class: {
                    dark_text: e.$root.dark
                }
            }, [e._v(e._s(e.$t("title")))])]), a("div", {
                staticClass: "topdiv topdivO"
            }, [a("div", {
                staticClass: "card cardM",
                class: {
                    dark: e.$root.dark
                }
            }, [a("p", {
                staticClass: "cardtext",
                class: {
                    dark_text: e.$root.dark
                }
            }, [a("svg", {
                staticStyle: {
                    width: "42px",
                    height: "42px",
                    padding: "5px",
                    transform: "translate3d(0,30%,0)"
                },
                attrs: {
                    viewBox: "0 0 24 24"
                }
            }, [a("path", {
                attrs: {
                    fill: "orange",
                    d: "M2.6,10.59L8.38,4.8L10.07,6.5C9.83,7.35 10.22,8.28 11,8.73V14.27C10.4,14.61 10,15.26 10,16A2,2 0 0,0 12,18A2,2 0 0,0 14,16C14,15.26 13.6,14.61 13,14.27V9.41L15.07,11.5C15,11.65 15,11.82 15,12A2,2 0 0,0 17,14A2,2 0 0,0 19,12A2,2 0 0,0 17,10C16.82,10 16.65,10 16.5,10.07L13.93,7.5C14.19,6.57 13.71,5.55 12.78,5.16C12.35,5 11.9,4.96 11.5,5.07L9.8,3.38L10.59,2.6C11.37,1.81 12.63,1.81 13.41,2.6L21.4,10.59C22.19,11.37 22.19,12.63 21.4,13.41L13.41,21.4C12.63,22.19 11.37,22.19 10.59,21.4L2.6,13.41C1.81,12.63 1.81,11.37 2.6,10.59Z"
                }
            })]), e._v(" " + e._s(e.$t("info")) + " ")]), a("div", {
                staticClass: "infotext",
                class: {
                    dark_infotext: e.$root.dark
                }
            }, [e._v(e._s(e.$t("betainfo")))]), a("s-btn", {
                staticClass: "githubbtn",
                attrs: {
                    color: "black"
                },
                on: {
                    click: function(t) {
                        return e.See("https://github.com/Coceki/new-pekobutton")
                    }
                }
            }, [a("div", [e._v(e._s(e.$t("helpdevelope")))])]), a("s-btn", {
                attrs: {
                    color: "secondary"
                },
                on: {
                    click: function(t) {
                        return e.playSpecial()
                    }
                }
            }, [a("div", [e._v("Co↘ce↗ki↘お兄ちゃん")])])], 1), a("div", {
                staticClass: "card cardM",
                class: {
                    dark: e.$root.dark
                }
            }, [a("p", {
                staticClass: "cardtext",
                class: {
                    dark_text: e.$root.dark
                }
            }, [a("svg", {
                staticStyle: {
                    width: "42px",
                    height: "42px",
                    transform: "translate3d(0,30%,0)"
                },
                attrs: {
                    viewBox: "0 0 24 24"
                }
            }, [a("path", {
                attrs: {
                    fill: "#728bf3",
                    d: "M15.07,11.25L14.17,12.17C13.45,12.89 13,13.5 13,15H11V14.5C11,13.39 11.45,12.39 12.17,11.67L13.41,10.41C13.78,10.05 14,9.55 14,9C14,7.89 13.1,7 12,7A2,2 0 0,0 10,9H8A4,4 0 0,1 12,5A4,4 0 0,1 16,9C16,9.88 15.64,10.67 15.07,11.25M13,19H11V17H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z"
                }
            })]), e._v(" " + e._s(e.$t("helptitle")) + " ")]), a("div", {
                staticClass: "infotext",
                class: {
                    dark_infotext: e.$root.dark
                }
            }, [e._v(" " + e._s(e.$t("helpcontent")) + " "), a("br"), e._v(" " + e._s(e.$t("additionalhelp")) + " "), a("br")]), a("s-btn", {
                attrs: {
                    color: "red"
                },
                on: {
                    click: function(t) {
                        return e.See("https://www.youtube.com/channel/UC1DCedRgGHBdm81E1llLhOQ")
                    }
                }
            }, [a("svg", {
                staticStyle: {
                    width: "24px",
                    height: "24px",
                    position: "absolute",
                    left: "10px",
                    bottom: "50%",
                    transform: "translate3d(0,50%,0)"
                },
                attrs: {
                    viewBox: "0 0 24 24"
                }
            }, [a("path", {
                attrs: {
                    fill: "white",
                    d: "M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z"
                }
            })]), a("a", {
                staticStyle: {
                    "margin-left": "30px"
                }
            }, [e._v("Pekora Ch. 兎田ぺこら")])]), a("s-btn", {
                attrs: {
                    color: "blue"
                },
                on: {
                    click: function(t) {
                        return e.See("https://twitter.com/usadapekora")
                    }
                }
            }, [a("svg", {
                staticStyle: {
                    width: "24px",
                    height: "24px",
                    position: "absolute",
                    left: "10px",
                    bottom: "50%",
                    transform: "translate3d(0,50%,0)"
                },
                attrs: {
                    viewBox: "0 0 24 24"
                }
            }, [a("path", {
                attrs: {
                    fill: "white",
                    d: "M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"
                }
            })]), a("a", {
                staticStyle: {
                    "margin-left": "30px"
                }
            }, [e._v("Pekora Ch. 兎田ぺこら")])])], 1), a("div", {
                staticClass: "card cardM",
                class: {
                    dark: e.$root.dark
                }
            }, [a("p", {
                staticClass: "cardtext",
                class: {
                    dark_text: e.$root.dark
                }
            }, [a("svg", {
                staticStyle: {
                    width: "42px",
                    height: "42px",
                    transform: "translate3d(0,30%,0)"
                },
                attrs: {
                    viewBox: "0 0 24 24"
                }
            }, [a("path", {
                attrs: {
                    fill: "red",
                    d: "M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z"
                }
            })]), e._v(" " + e._s(e.$t("youtubesubs")) + " ")]), a("div", {
                staticClass: "subnum",
                class: {
                    dark_infotext: e.$root.dark
                }
            }, [e._v(e._s(e.channel_subs))]), a("div", {
                class: {
                    dark_infotext: e.$root.dark
                },
                staticStyle: {
                    "letter-spacing": "0.02em",
                    "margin-top": "40px",
                    "margin-left": "20px"
                }
            }, [e._v(e._s(e.$t("streaming")))]), a("div", {
                staticClass: "liveinfo"
            }, e._l(e.channel_streaming, (function(t, n) {
                return a("div", {
                    key: n,
                    staticClass: "card cardM",
                    class: {
                        dark: e.$root.dark
                    },
                    staticStyle: {
                        padding: "5px !important",
                        "padding-bottom": "20px !important",
                        margin: "10px !important"
                    }
                }, [a("p", {
                    staticClass: "livetext",
                    class: {
                        dark_text: e.$root.dark
                    }
                }, [a("svg", {
                    staticStyle: {
                        width: "24px",
                        height: "24px"
                    },
                    attrs: {
                        viewBox: "0 0 24 24"
                    }
                }, [a("path", {
                    attrs: {
                        fill: "#728bf3",
                        d: "M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12S17.5 2 12 2M17 13H11V7H12.5V11.5H17V13Z"
                    }
                })]), e._v(" " + e._s(t.snippet.title) + " ")]), a("p", {
                    class: {
                        dark_text: e.$root.dark
                    }
                }, [e._v(e._s(t.snippet.description))]), a("br"), a("button", {
                    staticClass: "goto",
                    on: {
                        click: function(a) {
                            return e.See("https://www.youtube.com/watch?v=" + t.id.videoId)
                        }
                    }
                }, [a("svg", {
                    staticStyle: {
                        width: "24px",
                        height: "24px"
                    },
                    attrs: {
                        viewBox: "0 0 24 24"
                    }
                }, [a("path", {
                    attrs: {
                        fill: "white",
                        d: "M8,5.14V19.14L19,12.14L8,5.14Z"
                    }
                })])])])
            }
            )), 0), a("div", {
                class: {
                    dark_infotext: e.$root.dark
                },
                staticStyle: {
                    "letter-spacing": "0.02em",
                    "margin-top": "40px",
                    "margin-left": "20px"
                }
            }, [e._v(e._s(e.$t("upcoming")))]), a("div", {
                staticClass: "liveinfo"
            }, e._l(e.channel_upcoming, (function(t, n) {
                return a("div", {
                    key: n,
                    staticClass: "card cardM",
                    class: {
                        dark: e.$root.dark
                    },
                    staticStyle: {
                        padding: "5px !important",
                        "padding-bottom": "20px !important",
                        margin: "10px !important"
                    }
                }, [a("p", {
                    staticClass: "livetext",
                    class: {
                        dark_text: e.$root.dark
                    }
                }, [a("svg", {
                    staticStyle: {
                        width: "24px",
                        height: "24px"
                    },
                    attrs: {
                        viewBox: "0 0 24 24"
                    }
                }, [a("path", {
                    attrs: {
                        fill: "#728bf3",
                        d: "M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12S17.5 2 12 2M17 13H11V7H12.5V11.5H17V13Z"
                    }
                })]), e._v(" " + e._s(t.snippet.title) + " ")]), a("p", {
                    class: {
                        dark_text: e.$root.dark
                    }
                }, [e._v(e._s(t.snippet.description))]), a("br"), a("button", {
                    staticClass: "goto",
                    on: {
                        click: function(a) {
                            return e.See("https://www.youtube.com/watch?v=" + t.id.videoId)
                        }
                    }
                }, [a("svg", {
                    staticStyle: {
                        width: "24px",
                        height: "24px"
                    },
                    attrs: {
                        viewBox: "0 0 24 24"
                    }
                }, [a("path", {
                    attrs: {
                        fill: "white",
                        d: "M8,5.14V19.14L19,12.14L8,5.14Z"
                    }
                })])])])
            }
            )), 0)])]), e.$root.dark ? a("hr", {
                staticClass: "line",
                attrs: {
                    color: "#333",
                    width: "95%"
                }
            }) : a("hr", {
                staticClass: "line",
                attrs: {
                    color: "#EEE",
                    width: "95%"
                }
            }), a("p", {
                staticClass: "cardtext",
                class: {
                    dark_text: e.$root.dark
                }
            }, [a("label", {
                attrs: {
                    for: "toggle"
                }
            }, [a("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.orderplaymode,
                    expression: "orderplaymode"
                }],
                attrs: {
                    type: "checkbox",
                    id: "toggle"
                },
                domProps: {
                    checked: Array.isArray(e.orderplaymode) ? e._i(e.orderplaymode, null) > -1 : e.orderplaymode
                },
                on: {
                    change: function(t) {
                        var a = e.orderplaymode
                          , n = t.target
                          , o = !!n.checked;
                        if (Array.isArray(a)) {
                            var s = null
                              , i = e._i(a, s);
                            n.checked ? i < 0 && (e.orderplaymode = a.concat([s])) : i > -1 && (e.orderplaymode = a.slice(0, i).concat(a.slice(i + 1)))
                        } else
                            e.orderplaymode = o
                    }
                }
            }), a("span")]), e._v(" " + e._s(e.$t("orderplaymode")) + " ")]), a("div", {
                staticClass: "topdiv"
            }, e._l(e.voices, (function(t, n) {
                return a("div", {
                    key: n,
                    staticClass: "card",
                    class: {
                        dark: e.$root.dark
                    }
                }, ["zhHans" == e.$i18n.locale ? a("p", {
                    staticClass: "cardtext",
                    class: {
                        dark_text: e.$root.dark
                    }
                }, [e._v(e._s(t.translation.Chinese))]) : "ja" == e.$i18n.locale ? a("p", {
                    staticClass: "cardtext",
                    class: {
                        dark_text: e.$root.dark
                    }
                }, [e._v(e._s(t.translation.Japanese))]) : "en" == e.$i18n.locale ? a("p", {
                    staticClass: "cardtext",
                    class: {
                        dark_text: e.$root.dark
                    }
                }, [e._v(e._s(t.translation.English))]) : e._e(), "zhHans" == e.$i18n.locale ? a("div", e._l(t.voicelist, (function(t, n) {
                    return a("s-btn", {
                        key: n,
                        staticClass: "btn",
                        attrs: {
                            color: "secondary"
                        },
                        on: {
                            click: function(a) {
                                return e.play(t)
                            }
                        }
                    }, [a("div", [e._v(e._s(t.translation.Chinese))])])
                }
                )), 1) : "ja" == e.$i18n.locale ? a("div", e._l(t.voicelist, (function(t, n) {
                    return a("s-btn", {
                        key: n,
                        attrs: {
                            color: "secondary"
                        },
                        on: {
                            click: function(a) {
                                return e.play(t)
                            }
                        }
                    }, [a("div", [e._v(e._s(t.translation.Japanese))])])
                }
                )), 1) : "en" == e.$i18n.locale ? a("div", e._l(t.voicelist, (function(t, n) {
                    return a("s-btn", {
                        key: n,
                        attrs: {
                            color: "secondary"
                        },
                        on: {
                            click: function(a) {
                                return e.play(t)
                            }
                        }
                    }, [a("div", [e._v(e._s(t.translation.English))])])
                }
                )), 1) : e._e()])
            }
            )), 0)], 1)
        }
          , k = []
          , y = (a("a434"),
        a("5bbd"))
          , b = new Audio
          , w = 0
          , _ = {
            data: function() {
                return {
                    voices: y.groups,
                    orderplaymode: !1,
                    orderdialog: !1,
                    orderlist: [],
                    helpdialog: !1,
                    repeatmode: !1,
                    arrysize: 0,
                    volume: 100,
                    channel_info: null,
                    channel_subs: null,
                    channel_upcoming: null,
                    channel_streaming: null
                }
            },
            created: function() {
                var e = this
                  , t = a("bc3a");
                t.get("/api/php/youtubesub.php").then((function(t) {
                    e.channel_info = t.data,
                    e.channel_subs = e.channel_info.items[0].statistics.subscriberCount
                }
                )).catch((function(e) {
                    console.log(e)
                }
                )).then((function() {}
                )),
                t.get("/api/php/upcomingstream.php").then((function(t) {
                    window.console.log(t.data),
                    e.channel_upcoming = t.data.items,
                    window.console.log(e.channel_upcoming)
                }
                )).catch((function(e) {
                    console.log(e)
                }
                )).then((function() {}
                )),
                t.get("/api/php/streaming.php").then((function(t) {
                    e.channel_streaming = t.data.items,
                    window.console.log(e.channel_streaming)
                }
                )).catch((function(e) {
                    console.log(e)
                }
                )).then((function() {}
                ))
            },
            methods: {
                play: function(e) {
                    this.orderplaymode && this.orderlist.push(e);
                    var t = new Audio;
                    t.preload = !0,
                    t.src = "voices/" + e.path,
                    this.voice = e,
                    t.volume = this.volume / 100,
                    t.play()
                },
                playOnly: function(e) {
                    var t = new Audio;
                    t.src = "voices/" + e.path,
                    t.preload = !0,
                    this.voice = e,
                    t.play()
                },
                playSpecial: function() {
                    var e = new Audio;
                    e.src = "voices/私货.mp3",
                    e.preload = !0,
                    e.play()
                },
                deletelist: function(e) {
                    this.orderlist.splice(e, 1)
                },
                orderplay: function() {
                    w = 0,
                    b = new Audio;
                    var e = this.orderlist
                      , t = this.repeatmode;
                    function a() {
                        w++,
                        w < e.length ? (b.src = "voices/" + e[w].path,
                        b.play()) : 1 == t && (w = 0,
                        b.src = "voices/" + e[w].path,
                        b.play())
                    }
                    b.preload = !0,
                    b.loop = !1,
                    b.src = "voices/" + e[w].path,
                    b.volume = this.volume / 100,
                    b.play(),
                    b.addEventListener("ended", a, !1)
                },
                resetorder: function() {
                    this.orderlist = []
                },
                See: function(e) {
                    window.location.href = e
                },
                stopplay: function() {
                    b.pause(),
                    w = 0
                }
            },
            watch: {
                orderplaymode: function() {
                    window.console.log(this.orderplaymode),
                    this.orderplaymode && (this.helpdialog = !0)
                },
                orderlist: function() {
                    this.arrysize = this.orderlist.length
                }
            }
        }
          , x = _
          , L = (a("01bf"),
        Object(p["a"])(x, C, k, !1, null, null, null))
          , E = L.exports;
        n["a"].use(v["a"]);
        var H = [{
            path: "/",
            component: E,
            meta: {
                title: "ぺこらボタン PEKO BUTTON"
            }
        }]
          , $ = new v["a"]({
            mode: "history",
            routes: H
        })
          , A = $
          , P = a("2f62");
        n["a"].use(P["a"]);
        var O = new P["a"].Store({
            state: {
                dark_mode: !1,
                dark_icon: "M2 12A10 10 0 0 0 15 21.54A10 10 0 0 1 15 2.46A10 10 0 0 0 2 12Z"
            },
            mutations: {
                change_dark_mode: function(e) {
                    e.dark_mode = !e.dark_mode,
                    "M3.55,18.54L4.96,19.95L6.76,18.16L5.34,16.74M11,22.45C11.32,22.45 13,22.45 13,22.45V19.5H11M12,5.5A6,6 0 0,0 6,11.5A6,6 0 0,0 12,17.5A6,6 0 0,0 18,11.5C18,8.18 15.31,5.5 12,5.5M20,12.5H23V10.5H20M17.24,18.16L19.04,19.95L20.45,18.54L18.66,16.74M20.45,4.46L19.04,3.05L17.24,4.84L18.66,6.26M13,0.55H11V3.5H13M4,10.5H1V12.5H4M6.76,4.84L4.96,3.05L3.55,4.46L5.34,6.26L6.76,4.84Z" == e.dark_icon ? (e.dark_icon = "M2 12A10 10 0 0 0 15 21.54A10 10 0 0 1 15 2.46A10 10 0 0 0 2 12Z",
                    document.getElementById("body").style.cssText = "background: linear-gradient(200.6deg, #ffffff 19.14%, #e9e9e9 154.68%);") : (document.getElementById("body").style.cssText = "background:linear-gradient(157.73deg, #262B2F -0.68%, #16191D 74.03%);",
                    e.dark_icon = "M3.55,18.54L4.96,19.95L6.76,18.16L5.34,16.74M11,22.45C11.32,22.45 13,22.45 13,22.45V19.5H11M12,5.5A6,6 0 0,0 6,11.5A6,6 0 0,0 12,17.5A6,6 0 0,0 18,11.5C18,8.18 15.31,5.5 12,5.5M20,12.5H23V10.5H20M17.24,18.16L19.04,19.95L20.45,18.54L18.66,16.74M20.45,4.46L19.04,3.05L17.24,4.84L18.66,6.26M13,0.55H11V3.5H13M4,10.5H1V12.5H4M6.76,4.84L4.96,3.05L3.55,4.46L5.34,6.26L6.76,4.84Z")
                }
            },
            actions: {},
            modules: {}
        })
          , J = a("9483");
        Object(J["a"])("".concat("/", "service-worker.js"), {
            ready: function() {
                console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")
            },
            registered: function() {
                console.log("Service worker has been registered.")
            },
            cached: function() {
                console.log("Content has been cached for offline use.")
            },
            updatefound: function() {
                console.log("New content is downloading.")
            },
            updated: function() {
                console.log("New content is available; please refresh.")
            },
            offline: function() {
                console.log("No internet connection found. App is running in offline mode.")
            },
            error: function(e) {
                console.error("Error during service worker registration:", e)
            }
        });
        a("4160"),
        a("d3b7"),
        a("ac1f"),
        a("466d"),
        a("159b"),
        a("ddb0");
        var S = a("a925");
        function M() {
            var e = a("49f8")
              , t = {};
            return e.keys().forEach((function(a) {
                var n = a.match(/([A-Za-z0-9-_]+)\./i);
                if (n && n.length > 1) {
                    var o = n[1];
                    t[o] = e(a)
                }
            }
            )),
            t
        }
        n["a"].use(S["a"]);
        var N = new S["a"]({
            locale: "zhHans",
            fallbackLocale: "zhHans",
            messages: M()
        })
          , V = a("2b27")
          , T = a.n(V)
          , j = (a("5363"),
        a("b0c0"),
        function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("button", {
                staticClass: "btn ripple",
                class: [e.color ? "color-" + e.color : "", {
                    dark_btn: e.$root.dark
                }],
                attrs: {
                    color: e.color
                },
                on: {
                    click: e.handleClick
                }
            }, [e._t("default")], 2)
        }
        )
          , B = []
          , I = {
            name: "s-btn",
            props: {
                color: {
                    type: String,
                    default: "primary"
                }
            },
            mounted: function() {
                window.document.documentElement.setAttribute("color", this.color)
            },
            methods: {
                handleClick: function() {
                    this.$emit("click")
                }
            }
        }
          , K = I
          , Z = (a("2955"),
        Object(p["a"])(K, j, B, !1, null, null, null))
          , z = Z.exports;
        z.install = function(e) {
            e.components(z.name, z)
        }
        ;
        var D = z
          , U = [D]
          , G = function(e) {
            U.forEach((function(t) {
                e.component(t.name, t)
            }
            ))
        }
          , Y = {
            install: G,
            Sbtn: D
        }
          , W = a("bc3a")
          , R = a.n(W)
          , F = a("a7fe")
          , q = a.n(F);
        n["a"].use(T.a),
        n["a"].use(Y),
        n["a"].use(q.a, R.a),
        n["a"].config.productionTip = !1,
        A.beforeEach((function(e, t, a) {
            e.meta.title && (document.title = e.meta.title),
            a()
        }
        )),
        new n["a"]({
            router: A,
            store: O,
            i18n: N,
            data: function() {
                return {
                    dark: !1
                }
            },
            render: function(e) {
                return e(f)
            }
        }).$mount("#app")
    },
    "5bbd": function(e) {
        e.exports = JSON.parse('{"groups":[{"name":"hahaha","translation":{"Chinese":"各种哈↑哈↑哈↑","Japanese":"いろいろははは","English":"HAHAHA"},"voicelist":[{"name":"hahahahaha","path":"hahahahaha.mp3","translation":{"Chinese":"哈↑哈↑哈↓哈↓哈↓","Japanese":"は↑は↑は↓は↓は↓","English":"HA↑HA↑HA↓HA↓HA↓"}},{"name":"hahahaha","path":"hahahaha.mp3","translation":{"Chinese":"哈↑哈↑哈↑哈↑","Japanese":"は↑は↑は↑は↑","English":"HA↑HA↑HA↑HA↑"}},{"name":"hahaha","path":"hahaha.mp3","translation":{"Chinese":"哈↑哈↑哈↑","Japanese":"は↑は↑は↑","English":"HA↑HA↑HA↑"}},{"name":"hahahaha(echo)","path":"hahahaha(echo).mp3","translation":{"Chinese":"哈↑哈↑哈↑哈↑(回音)","Japanese":"は↑は↑は↑は↑(エコー)","English":"HA↑HA↑HA↑HA↑ (Echo)"}},{"name":"哈→哈→哈↗哈↑哈→哈→","path":"哈→哈→哈↗哈↑哈→哈→.mp3","translation":{"Chinese":"哈→哈→哈↗哈↑哈→哈→","Japanese":"は→は→は↗は↑は→は→","English":"HA→HA→HA↗HA↑HA→HA→"}}]},{"name":"pekorap","translation":{"Chinese":"PekoRap","Japanese":"PekoRap","English":"PekoRap"},"voicelist":[{"name":"H！色狼！不要碰！你的胖次几厘米","path":"H！色狼！不要碰！你的胖次几厘米.mp3","translation":{"Chinese":"H！色狼！不要碰！你的胖次几厘米","Japanese":"エッチ！スケッチ！ワンタッチ！あなたのパンツ何センチ？","English":"Ecchi! Horny! Slutty! What is the length of your panty?"}}]},{"name":"others","translation":{"Chinese":"通用","Japanese":"ユニバーサル","English":"General"},"voicelist":[{"name":"benbenqia","path":"benbenqia.mp3","translation":{"Chinese":"笨笨恰~","Japanese":"ぶんぶんちゃ","English":"bun bun cha~"}},{"name":"佩克拉不知道","path":"佩克拉不知道.mp3","translation":{"Chinese":"佩克拉不知道","Japanese":"ぺこらわからない","English":"Pekora doesn\'t know"}},{"name":"对不起","path":"对不起.wav","translation":{"Chinese":"对不起~","Japanese":"ごめんなさい~","English":"I\'m sorry~"}},{"name":"真可爱呢","path":"真可爱呢.wav","translation":{"Chinese":"真可爱呢","Japanese":"可愛いだがな","English":"So cute~"}},{"name":"要上喽~","path":"要上喽~.wav","translation":{"Chinese":"要上喽~","Japanese":"行くよ~","English":"Let\'s go~"}},{"name":"Duuuuu马猴~","path":"Duuuuu马猴~.wav","translation":{"Chinese":"Duuuuu马猴~","Japanese":"Duuuuu魔法~","English":"Duuuuu Magic~"}},{"name":"不要乱看啊","path":"不要乱看啊.mp3","translation":{"Chinese":"不要乱看啊!","Japanese":"","English":"Don\'t look!"}},{"name":"请不要这样","path":"请不要这样.mp3","translation":{"Chinese":"请不要这样","Japanese":"やめてください","English":"Please stop it"}},{"name":"真的很H呢","path":"真的很H呢.mp3","translation":{"Chinese":"真的很H呢","Japanese":"本当にHなんだから","English":"So lewd"}},{"name":"我可是偶像呢","path":"我可是偶像呢.mp3","translation":{"Chinese":"我可是偶像呢","Japanese":"イドルなです","English":"I\'m an idol"}},{"name":"你们这帮人最差劲了","path":"你们这帮人最差劲了.mp3","translation":{"Chinese":"你们这帮人最差劲了","Japanese":"最悪であなたたち","English":"You guys are the worst"}},{"name":"明显不一样好吧","path":"明显不一样好吧.mp3","translation":{"Chinese":"明显不一样好吧","Japanese":"ちがうぺこでしょ明らかに","English":"Obviously they are different-peko!"}}]},{"name":"问候","translation":{"Chinese":"问候","Japanese":"あいさつ","English":"Greetings"},"voicelist":[{"name":"嗨！","path":"嗨！.wav","translation":{"Chinese":"嗨！","Japanese":"Hi!","English":"Hi!"}},{"name":"喵哈喽~","path":"喵哈喽~.wav","translation":{"Chinese":"喵哈喽~","Japanese":"にゃっはろー","English":"Nya-hallo"}},{"name":"自我介绍","path":"自我介绍.wav","translation":{"Chinese":"自我介绍","Japanese":"自己紹介","English":"Self Introduction"}},{"name":"欢迎来到兔田大家族","path":"欢迎来到兔田大家族.mp3","translation":{"Chinese":"欢迎来到兔田大家族","Japanese":"兎田ファミリようこそ","English":"Welcome to Usada Family"}},{"name":"早上好","path":"早上好.mp3","translation":{"Chinese":"早上好","Japanese":"おはよう","English":"Good morning"}},{"name":"晚上好peko","path":"晚上好peko.mp3","translation":{"Chinese":"晚上好peko","Japanese":"こんばんはぺこ","English":"Good evening"}},{"name":"阿里嘎多peko","path":"阿里嘎多peko.wav","translation":{"Chinese":"阿里嘎多peko","Japanese":"ありがとうぺこ","English":"Thank you-Peko"}},{"name":"谢谢（中文）","path":"谢谢（中文）.mp3","translation":{"Chinese":"谢谢（中文）","Japanese":"ありがとう(中国語)","English":"Thank you (Chinese)"}},{"name":"谢谢（英文）","path":"谢谢（英文）.mp3","translation":{"Chinese":"谢谢（英文）","Japanese":"ありがとう(英語)","English":"Thank you (English)"}},{"name":"再见（中文）","path":"再见（中文）.mp3","translation":{"Chinese":"再见（中文）","Japanese":"さようなら(中国語)","English":"Good bye (Chinese)"}},{"name":"我爱你（中文）","path":"我爱你（中文）.mp3","translation":{"Chinese":"我爱你（中文）","Japanese":"愛してる(中国語)","English":"I love you (Chinese)"}}]},{"name":"语气","translation":{"Chinese":"语气","Japanese":"気分","English":"Emotion"},"voicelist":[{"name":"哼~","path":"哼~.mp3","translation":{"Chinese":"哼~","Japanese":"うん~","English":"un~"}},{"name":"Olreeee!","path":"Olreeee.wav","translation":{"Chinese":"Olreeee!","Japanese":"Oreeeee!","English":"Oreeeee!"}},{"name":"歪比歪比~歪比巴卜","path":"歪比歪比~歪比巴卜.mp3","translation":{"Chinese":"歪比歪比~歪比巴卜","Japanese":"wabiwabi~wabibabo~","English":"wabiwabi~wabibabo~"}},{"name":"巴布~巴布巴布~","path":"巴布~巴布巴布~.mp3","translation":{"Chinese":"巴布~巴布巴布~","Japanese":"babu~babubau~","English":"babu~babubau~"}},{"name":"PEKOPEKOPEKOPEKO","path":"PEKOPEKOPEKOPEKO.mp3","translation":{"Chinese":"PEKOPEKOPEKOPEKO","Japanese":"PEKOPEKOPEKOPEKO","English":"PEKOPEKOPEKOPEKO"}},{"name":"PONPONPONPON","path":"PONPONPONPON.wav","translation":{"Chinese":"PONPONPONPON","Japanese":"PONPONPONPON","English":"PONPONPONPON"}},{"name":"Prrrrrre","path":"Prrrrrre.wav","translation":{"Chinese":"Prrrrrre","Japanese":"Prrrrrre","English":"Prrrrrre"}},{"name":"Sei~no","path":"Seino.wav","translation":{"Chinese":"Sei~no","Japanese":"せーの","English":"Ready~"}},{"name":"波纹呼吸","path":"波纹呼吸.mp3","translation":{"Chinese":"波纹呼吸","Japanese":"呼吸","English":"Hamon breath"}},{"name":"哈欠","path":"哈欠.mp3","translation":{"Chinese":"哈欠","Japanese":"あくび","English":"Yawning"}},{"name":"呐!","path":"呐！.mp3","translation":{"Chinese":"呐!","Japanese":"な！","English":"Nah!"}},{"name":"呐~呐~","path":"呐~呐~.mp3","translation":{"Chinese":"呐~呐~","Japanese":"ね～ね～","English":"Ne~ne~"}},{"name":"boooou~~","path":"boooou~~.wav","translation":{"Chinese":"boooou~~","Japanese":"booooo~","English":"booooo~"}},{"name":"嗨↑嗨↑嗨↑","path":"嗨↑嗨↑嗨↑.wav","translation":{"Chinese":"嗨↑嗨↑嗨↑","Japanese":"HI↑HI↑HI↑","English":"HI↑HI↑HI↑"}},{"name":"啦啦啦啦啦","path":"啦啦啦啦啦.wav","translation":{"Chinese":"啦啦啦啦啦","Japanese":"ラララララララ","English":"LALALALALALALA"}},{"name":"Ma⬆↓","path":"Ma⬆↓.wav","translation":{"Chinese":"Ma⬆↓","Japanese":"Ma⬆↓","English":"Ma⬆↓"}},{"name":"喵","path":"喵.mp3","translation":{"Chinese":"喵","Japanese":"ニャー","English":"Nya~"}},{"name":"喵2","path":"喵2.mp3","translation":{"Chinese":"喵2","Japanese":"ニャー2","English":"Nya~ 2"}},{"name":"喵喵喵喵喵喵喵喵喵喵","path":"喵喵喵喵喵喵喵喵喵喵.mp3","translation":{"Chinese":"喵喵喵喵喵喵喵喵喵喵","Japanese":"ニャーニャーニャーニャーニャーニャー","English":"Nya~Nya~Nya~Nya~Nya~Nya~Nya~Nya~"}}]},{"name":"？抖M福利","translation":{"Chinese":"？抖M福利","Japanese":"?たくさん助けて","English":"M"},"voicelist":[{"name":"恶心心","path":"恶心心.wav","translation":{"Chinese":"恶心心","Japanese":"気持ち悪い","English":"Disgusting"}},{"name":"死小孩快滚去吃饭啊白痴！","path":"死小孩快滚去吃饭啊白痴！.mp3","translation":{"Chinese":"死小孩快滚去吃饭啊白痴！","English":"Damn you kid go eat your lunch."}},{"name":"别在这里看我直播了死小孩！","path":"别在这里看我直播了死小孩！.mp3","translation":{"Chinese":"别在这里看我直播了死小孩！","English":"You Son of **** don\'t watch my stream."}},{"name":"快放完你的正月假滚回学校去啊！","path":"快放完你的正月假滚回学校去啊！.mp3","translation":{"Chinese":"快放完你的正月假滚回学校去啊！","English":"Finish your winter vacation and go back to grade school!"}},{"name":"放学来操场后面我削不死你","path":"放学来操场后面我削不死你.wav","translation":{"Chinese":"放学来操场后面我削不死你","English":"Come to gym afterward, I\'m going to kick your ass."}},{"name":"你们真的是一群色小鬼","path":"你们真的是一群色小鬼.m4a","translation":{"Chinese":"你们真的是一群色小鬼","English":"You kids are really vulgar"}}]},{"name":"名言","translation":{"Chinese":"名言","Japanese":"有名なことわざ"},"voicelist":[{"name":"喜欢佩克拉的话就推啊","path":"喜欢佩克拉的话就推啊.mp3","translation":{"Chinese":"喜欢佩克拉的话就推啊","English":"If you like Pekora, just push"}},{"name":"喜欢就推就好了啦","path":"喜欢就推就好了啦.mp3","translation":{"Chinese":"喜欢就推就好了啦","English":"Just push, if you like it."}},{"name":"佩克拉喜欢在现实中看见别人流泪的样子","path":"佩克拉喜欢在现实中看见别人流泪的样子.mp3","translation":{"Chinese":"佩克拉喜欢在现实中看见别人流泪的样子","English":"In real life, Pekora does love staring in their weeping faces"}},{"name":"佩克拉只是喜欢美丽的泪水啊","path":"佩克拉只是喜欢美丽的泪水啊.mp3","translation":{"Chinese":"佩克拉只是喜欢美丽的泪水啊","English":"Pekora only likes beautiful tears"}},{"name":"佩克拉明明是以清楚健全偶像的身份活着的","path":"佩克拉明明是以清楚健全偶像的身份活着的.mp3","translation":{"Chinese":"佩克拉明明是以清楚健全偶像的身份活着的","Japanese":"ぺこら健全なアイドルとして生きているのに","English":"Pekora lives a pure and family friendly idol life."}},{"name":"你们没有在佩克拉身上感受到色气吗","path":"你们没有在佩克拉身上感受到色气吗.mp3","translation":{"Chinese":"你们没有在佩克拉身上感受到色气吗","Japanese":"ぺこらのエロ感じたことがないって？","English":"You guys don\'t think my body is sexy?"}},{"name":"这群家伙可能没有性欲这种东西","path":"这群家伙可能没有性欲这种东西.mp3","translation":{"Chinese":"这群家伙可能没有性欲这种东西","Japanese":"こいつらには性欲というものがないのかもしれない","English":"These people have no sexual desire"}},{"name":"你们就是喜欢看佩克拉吃瘪的样子对吧","path":"你们就是喜欢看佩克拉吃瘪的样子对吧.mp3","translation":{"Chinese":"你们就是喜欢看佩克拉吃瘪的样子对吧","Japanese":"君たちがぺこら苦しんでる姿が好きって来なんでしょ？","English":"Don\'t you guys just want to see Pekora suffers?"}}]},{"name":"suprise","translation":{"Chinese":"惊叹","Japanese":"マーベル","English":"Surprise"},"voicelist":[{"name":"sugoyi","path":"sugoyi.mp3","translation":{"Chinese":"斯国一~","Japanese":"すごい","English":"Amazing"}},{"name":"尖叫","path":"尖叫.mp3","translation":{"Chinese":"尖叫（音量注意）","Japanese":"悲鳴（ボリュームに注意）","English":"scream(Volume Warning)"}},{"name":"你在干什么peko（音量注意）","path":"你在干什么peko（音量注意）.mp3","translation":{"Chinese":"你在干什么peko（音量注意）","Japanese":"何してるのぺこ（ボリュームに注意）","English":"What are you doing-peko? (Volume Warning)"}},{"name":"救救我，前辈","path":"救救我，前辈.mp3","translation":{"Chinese":"救救我，前辈（音量注意）","Japanese":"助けて、先輩（音量注意）","English":"Help me, senpai! (Volume warning)"}},{"name":"啊！搞错了！","path":"啊！搞错了！.mp3","translation":{"Chinese":"啊！搞错了！","English":"Ah... I messed up!"}}]}]}')
    },
    "85ec": function(e, t, a) {},
    "8c62": function(e, t, a) {},
    b714: function(e, t, a) {},
    bf77: function(e, t, a) {},
    ecd2: function(e) {
        e.exports = JSON.parse('{"message":"hello i18n !!","title":"Peko按钮","mediacontorl":"控制按钮","stopplay":"停止播放","helptitle":"这咋玩啊peko?","helpcontent":"点击按钮，就可以播放Pekora的语录哒呦~不需要等第一个播放完就可以直接点击下一个，也可以连点同一个按钮实现非常鬼畜的回音效果peko~","additionalhelp":"自备耳膜，我不能保证每个按钮的音量是一致的，对不起我什么都不会做的ε=ε=ε=┏(゜ロ゜;)┛","openorderplaymode":"开启序列播放","orderplaymode":"序列播放","orderlistnow":"当前的播放序列","playthislist":"播放序列","listempty":"你的序列还是空的哦peko~","resetorder":"清空当前序列","language":"语言","orderplaymodehelp":"序列播放食用方法","developerinfo":"本站为爱好者创作，与Hololive官方无关","repeatmode":"不要停下来啊（循环序列）","betainfo":"2020.6.15，全新UI设计，作者日语N114514，有的地方真的听不出了，有错误请在Github指出，谢谢大家支持","info":"更新日志","developer":"作者：Coceki","credits":"特别感谢：野兔子同好会 Richard_Al 昭和歌姬夏半首 ","translationCredits":"","tips1":"打开序列播放，点出你想要的片段（可以重复）","tips2":"然后点击右下角的圆形按钮","tips3":"在这里，你就可以让机器自动按顺序播放这些片段，形成一句话了peko","pekolanguage":"Peko语生成器","beta":"即将更新","gotit":"明白了","entersomewords":"请输入要生成的文字（性能不好别输太多，会卡）","generate":"生成","helpdevelope":"帮助完善网页","volume":"音量","addtohomescreen":"把Peko按钮添加到主屏幕","add":"添加","dontneed":"不需要","addtohomescreeninfo":"本站支持PWA，添加到主屏幕就可以像普通APP一样，即使没有网络也可以使用！","friendlinks":"友情链接","newversion":"一个全新新版本开发中","youtubesubs":"最新YouTube数据(beta)","upcoming":"即将直播","streaming":"正在直播"}')
    },
    edd4: function(e) {
        e.exports = JSON.parse('{"title":"Peko Button","mediacontorl":"Control Button","stopplay":"Stop","helptitle":"Help","helpcontent":"Click button to play Pekora\'s lines~ No need to wait for the first line to finish before playing the next one","additionalhelp":"Volumn warning. Each of the sound clips may have different volumns. Sorry but I\'m not going to do anything about it ε=ε=ε=┏(゜ロ゜;)┛","openorderplaymode":"Playlist mode","orderplaymode":"Play in order","orderlistnow":"Current playlist","playthislist":"Play in order","listempty":"Playlist is Empty peko~","resetorder":"Clear the playlist","language":"Language","orderplaymodehelp":"How to use the playlist","developerinfo":"This site is made by fans. We are not related to Hololive Official in any way.","repeatmode":"Don\'t you ever stop!(Loop play)","betainfo":"2020/6/15, Brand new UI","info":"Updates","developer":"Developer：Coceki","credits":"Special Thanks：野兔子同好会 Richard_Al 昭和歌姬夏半首","translationCredits":"English translation: HoloLive Moments","tips1":"Open the play queue, select the sound clips (duplication is allowed)","tips2":"Then click the round button on bottom right corner","tips3":"It will play these clips in order peko.","pekolanguage":"Pekolang generator","beta":"Coming soon","gotit":"Got it","entersomewords":"Please enter the sentence you want to generate(please don\'t write too long, it may lag)","generate":"Generate","helpdevelope":"Help improve the website","volume":"Volume","addtohomescreen":"Add Peko Button to home screen","add":"Add","dontneed":"Later","addtohomescreeninfo":"This site supports PWA. You can add this sit to the home screen like normal apps and use it offline.","friendlinks":"friend links","newversion":"A brand new version is on the way","youtubesubs":"YouTube Channel(beta)","upcoming":"Upcoming","streaming":"Streaming"}')
    },
    fb46: function(e, t, a) {
        "use strict";
        var n = a("bf77")
          , o = a.n(n);
        o.a
    }
});
//# sourceMappingURL=app.de82ba6b.js.map
