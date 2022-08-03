// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"adb63":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "987ba490efc798f1";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"jbkOT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _editorjs = require("@editorjs/editorjs");
var _editorjsDefault = parcelHelpers.interopDefault(_editorjs);
var _header = require("@editorjs/header");
var _headerDefault = parcelHelpers.interopDefault(_header);
var _quote = require("@editorjs/quote");
var _quoteDefault = parcelHelpers.interopDefault(_quote);
const editor = new (0, _editorjsDefault.default)({
    holder: "editorjs",
    tools: {
        header: (0, _headerDefault.default),
        quote: (0, _quoteDefault.default)
    }
});

},{"@editorjs/editorjs":"4eyUD","@editorjs/header":"kkSVA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@editorjs/quote":"l0hGJ"}],"4eyUD":[function(require,module,exports) {
/*! For license information please see editor.js.LICENSE.txt */ !function(t, e) {
    module.exports = e();
}(window, function() {
    return function(t1) {
        var e1 = {};
        function n(o) {
            if (e1[o]) return e1[o].exports;
            var r = e1[o] = {
                i: o,
                l: !1,
                exports: {}
            };
            return t1[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
        }
        return n.m = t1, n.c = e1, n.d = function(t, e, o) {
            n.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: o
            });
        }, n.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            });
        }, n.t = function(t, e2) {
            if (1 & e2 && (t = n(t)), 8 & e2) return t;
            if (4 & e2 && "object" == typeof t && t && t.__esModule) return t;
            var o = Object.create(null);
            if (n.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: t
            }), 2 & e2 && "string" != typeof t) for(var r in t)n.d(o, r, (function(e) {
                return t[e];
            }).bind(null, r));
            return o;
        }, n.n = function(t) {
            var e = t && t.__esModule ? function() {
                return t.default;
            } : function() {
                return t;
            };
            return n.d(e, "a", e), e;
        }, n.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
        }, n.p = "", n(n.s = 187);
    }([
        function(t2, e3, n1) {
            var o = n1(10), r = n1(17), i = n1(27), a = n1(23), s = n1(31), l = function(t, e, n) {
                var c, u, f, d, p = t & l.F, h = t & l.G, v = t & l.S, g = t & l.P, y = t & l.B, b = h ? o : v ? o[e] || (o[e] = {}) : (o[e] || {}).prototype, m = h ? r : r[e] || (r[e] = {}), k = m.prototype || (m.prototype = {});
                for(c in h && (n = e), n)f = ((u = !p && b && void 0 !== b[c]) ? b : n)[c], d = y && u ? s(f, o) : g && "function" == typeof f ? s(Function.call, f) : f, b && a(b, c, f, t & l.U), m[c] != f && i(m, c, d), g && k[c] != f && (k[c] = f);
            };
            o.core = r, l.F = 1, l.G = 2, l.S = 4, l.P = 8, l.B = 16, l.W = 32, l.U = 64, l.R = 128, t2.exports = l;
        },
        function(t3, e) {
            t3.exports = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            };
        },
        function(t4, e4) {
            t4.exports = function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            };
        },
        function(t5, e5) {
            function n2(t, e) {
                for(var n = 0; n < e.length; n++){
                    var o = e[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
                }
            }
            t5.exports = function(t, e, o) {
                return e && n2(t.prototype, e), o && n2(t, o), t;
            };
        },
        function(t6, e6) {
            function n(e) {
                return t6.exports = n = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t);
                }, n(e);
            }
            t6.exports = n;
        },
        function(t7, e7, n) {
            var o = n(110);
            t7.exports = function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && o(t, e);
            };
        },
        function(t8, e8, n) {
            var o = n(59), r = n(152);
            t8.exports = function(t, e) {
                return !e || "object" !== o(e) && "function" != typeof e ? r(t) : e;
            };
        },
        function(t9, e9, n3) {
            var o1, r1, i1;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r1 = [
                e9,
                n3(20),
                n3(371),
                n3(21),
                n3(403),
                n3(14)
            ], void 0 === (i1 = "function" == typeof (o1 = function(t10, e10, o2, r2, i2, a1) {
                "use strict";
                var s1, l1 = n3(1);
                function c1(t, e) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "log", o = arguments.length > 3 ? arguments[3] : void 0, r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "color: inherit";
                    if ("console" in window && window.console[n]) {
                        var i = [
                            "info",
                            "log",
                            "warn",
                            "error"
                        ].includes(n), a = [];
                        switch(c1.logLevel){
                            case s1.ERROR:
                                if ("error" !== n) return;
                                break;
                            case s1.WARN:
                                if (![
                                    "error",
                                    "warn"
                                ].includes(n)) return;
                                break;
                            case s1.INFO:
                                if (!i || t) return;
                        }
                        o && a.push(o);
                        var l = "Editor.js ".concat("2.25.0"), u = "line-height: 1em;\n            color: #006FEA;\n            display: inline-block;\n            font-size: 11px;\n            line-height: 1em;\n            background-color: #fff;\n            padding: 4px 9px;\n            border-radius: 30px;\n            border: 1px solid rgba(56, 138, 229, 0.16);\n            margin: 4px 5px 4px 0;";
                        t && (i ? (a.unshift(u, r), e = "%c".concat(l, "%c ").concat(e)) : e = "( ".concat(l, " )").concat(e));
                        try {
                            if (i) {
                                if (o) {
                                    var f;
                                    (f = console)[n].apply(f, [
                                        "".concat(e, " %o")
                                    ].concat(a));
                                } else {
                                    var d;
                                    (d = console)[n].apply(d, [
                                        e
                                    ].concat(a));
                                }
                            } else console[n](e);
                        } catch (t) {}
                    }
                }
                Object.defineProperty(t10, "__esModule", {
                    value: !0
                }), t10.setLogLevel = function(t) {
                    c1.logLevel = t;
                }, t10.typeOf = d1, t10.isFunction = p, t10.isObject = h, t10.isString = function(t) {
                    return "string" === d1(t);
                }, t10.isBoolean = function(t) {
                    return "boolean" === d1(t);
                }, t10.isNumber = function(t) {
                    return "number" === d1(t);
                }, t10.isUndefined = v, t10.isClass = function(t) {
                    return p(t) && /^\s*class\s+/.test(t.toString());
                }, t10.isEmpty = function(t) {
                    return !t || 0 === Object.keys(t).length && t.constructor === Object;
                }, t10.isPromise = function(t) {
                    return Promise.resolve(t) === t;
                }, t10.isPrintableKey = function(t) {
                    return t > 47 && t < 58 || 32 === t || 13 === t || 229 === t || t > 64 && t < 91 || t > 95 && t < 112 || t > 185 && t < 193 || t > 218 && t < 223;
                }, t10.sequence = function(t) {
                    return g.apply(this, arguments);
                }, t10.array = function(t) {
                    return Array.prototype.slice.call(t);
                }, t10.delay = function(t, e) {
                    return function() {
                        var n = this, o = arguments;
                        window.setTimeout(function() {
                            return t.apply(n, o);
                        }, e);
                    };
                }, t10.getFileExtension = function(t) {
                    return t.name.split(".").pop();
                }, t10.isValidMimeType = function(t) {
                    return /^[-\w]+\/([-+\w]+|\*)$/.test(t);
                }, t10.debounce = function(t, e, n) {
                    var o, r = this;
                    return function() {
                        for(var i = arguments.length, a = new Array(i), s = 0; s < i; s++)a[s] = arguments[s];
                        var l = r, c = function() {
                            o = null, n || t.apply(l, a);
                        }, u = n && !o;
                        window.clearTimeout(o), o = window.setTimeout(c, e), u && t.apply(l, a);
                    };
                }, t10.throttle = function(t, e) {
                    var n, o, r, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0, a = null, s = 0;
                    i || (i = {});
                    var l = function() {
                        s = !1 === i.leading ? 0 : Date.now(), a = null, r = t.apply(n, o), a || (n = o = null);
                    };
                    return function() {
                        var c = Date.now();
                        s || !1 !== i.leading || (s = c);
                        var u = e - (c - s);
                        return n = this, o = arguments, u <= 0 || u > e ? (a && (clearTimeout(a), a = null), s = c, r = t.apply(n, o), a || (n = o = null)) : a || !1 === i.trailing || (a = setTimeout(l, u)), r;
                    };
                }, t10.copyTextToClipboard = function(t) {
                    var e = a1.default.make("div", "codex-editor-clipboard", {
                        innerHTML: t
                    });
                    document.body.appendChild(e);
                    var n = window.getSelection(), o = document.createRange();
                    o.selectNode(e), window.getSelection().removeAllRanges(), n.addRange(o), document.execCommand("copy"), document.body.removeChild(e);
                }, t10.getUserOS = y, t10.capitalize = function(t) {
                    return t[0].toUpperCase() + t.slice(1);
                }, t10.deepMerge = function t(e) {
                    for(var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)r[i - 1] = arguments[i];
                    if (!r.length) return e;
                    var a = r.shift();
                    if (h(e) && h(a)) for(var s in a)h(a[s]) ? (e[s] || Object.assign(e, (0, o2.default)({}, s, {})), t(e[s], a[s])) : Object.assign(e, (0, o2.default)({}, s, a[s]));
                    return t.apply(void 0, [
                        e
                    ].concat(r));
                }, t10.beautifyShortcut = function(t) {
                    var e = y();
                    return t = t.replace(/shift/gi, "\u21E7").replace(/backspace/gi, "\u232B").replace(/enter/gi, "\u23CE").replace(/up/gi, "\u2191").replace(/left/gi, "\u2192").replace(/down/gi, "\u2193").replace(/right/gi, "\u2190").replace(/escape/gi, "\u238B").replace(/insert/gi, "Ins").replace(/delete/gi, "\u2421").replace(/\+/gi, " + "), t = e.mac ? t.replace(/ctrl|cmd/gi, "\u2318").replace(/alt/gi, "\u2325") : t.replace(/cmd/gi, "Ctrl").replace(/windows/gi, "WIN");
                }, t10.getValidUrl = function(t) {
                    try {
                        return new URL(t).href;
                    } catch (t11) {}
                    return "//" === t.substring(0, 2) ? window.location.protocol + t : window.location.origin + t;
                }, t10.generateBlockId = function() {
                    return (0, i2.nanoid)(10);
                }, t10.openTab = function(t) {
                    window.open(t, "_blank");
                }, t10.generateId = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    return "".concat(t).concat(Math.floor(1e8 * Math.random()).toString(16));
                }, t10.deprecationAssert = function(t, e, n) {
                    var o = "\xab".concat(e, "\xbb is deprecated and will be removed in the next major release. Please use the \xab").concat(n, "\xbb instead.");
                    t && f1(o, "warn");
                }, t10.cacheable = function(t12, e11, n4) {
                    var o = n4.value ? "value" : "get", r = n4[o], i = "#".concat(e11, "Cache");
                    if (n4[o] = function() {
                        if (void 0 === this[i]) {
                            for(var t = arguments.length, e = new Array(t), n = 0; n < t; n++)e[n] = arguments[n];
                            this[i] = r.apply.apply(r, [
                                this
                            ].concat(e));
                        }
                        return this[i];
                    }, "get" === o && n4.set) {
                        var a = n4.set;
                        n4.set = function(e) {
                            delete t12[i], a.apply(this, e);
                        };
                    }
                    return n4;
                }, t10.isMobileScreen = function() {
                    return window.matchMedia("(max-width: 650px)").matches;
                }, t10.equals = function(t, e) {
                    var n = Array.isArray(t) || h(t), o = Array.isArray(e) || h(e);
                    return n || o ? JSON.stringify(t) === JSON.stringify(e) : t === e;
                }, t10.isIosDevice = t10.isTouchSupported = t10.logLabeled = t10.log = t10.mouseButtons = t10.keyCodes = t10.LogLevels = void 0, e10 = l1(e10), o2 = l1(o2), r2 = l1(r2), a1 = l1(a1), t10.LogLevels = s1, function(t) {
                    t.VERBOSE = "VERBOSE", t.INFO = "INFO", t.WARN = "WARN", t.ERROR = "ERROR";
                }(s1 || (t10.LogLevels = s1 = {})), t10.keyCodes = {
                    BACKSPACE: 8,
                    TAB: 9,
                    ENTER: 13,
                    SHIFT: 16,
                    CTRL: 17,
                    ALT: 18,
                    ESC: 27,
                    SPACE: 32,
                    LEFT: 37,
                    UP: 38,
                    DOWN: 40,
                    RIGHT: 39,
                    DELETE: 46,
                    META: 91
                }, t10.mouseButtons = {
                    LEFT: 0,
                    WHEEL: 1,
                    RIGHT: 2,
                    BACKWARD: 3,
                    FORWARD: 4
                }, c1.logLevel = s1.VERBOSE;
                var u1 = c1.bind(window, !1);
                t10.log = u1;
                var f1 = c1.bind(window, !0);
                function d1(t) {
                    return Object.prototype.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
                }
                function p(t) {
                    return "function" === d1(t) || "asyncfunction" === d1(t);
                }
                function h(t) {
                    return "object" === d1(t);
                }
                function v(t) {
                    return "undefined" === d1(t);
                }
                function g() {
                    return (g = (0, r2.default)(e10.default.mark(function t13(n5) {
                        var o3, i, a, s, l = arguments;
                        return e10.default.wrap(function(t14) {
                            for(;;)switch(t14.prev = t14.next){
                                case 0:
                                    return s = function() {
                                        return (s = (0, r2.default)(e10.default.mark(function t15(n, o, r) {
                                            return e10.default.wrap(function(t) {
                                                for(;;)switch(t.prev = t.next){
                                                    case 0:
                                                        return t.prev = 0, t.next = 3, n.function(n.data);
                                                    case 3:
                                                        return t.next = 5, o(v(n.data) ? {} : n.data);
                                                    case 5:
                                                        t.next = 10;
                                                        break;
                                                    case 7:
                                                        t.prev = 7, t.t0 = t.catch(0), r(v(n.data) ? {} : n.data);
                                                    case 10:
                                                    case "end":
                                                        return t.stop();
                                                }
                                            }, t15, null, [
                                                [
                                                    0,
                                                    7
                                                ]
                                            ]);
                                        }))).apply(this, arguments);
                                    }, a = function(t, e, n) {
                                        return s.apply(this, arguments);
                                    }, o3 = l.length > 1 && void 0 !== l[1] ? l[1] : function() {}, i = l.length > 2 && void 0 !== l[2] ? l[2] : function() {}, t14.abrupt("return", n5.reduce(function() {
                                        var t16 = (0, r2.default)(e10.default.mark(function t17(n, r) {
                                            return e10.default.wrap(function(t) {
                                                for(;;)switch(t.prev = t.next){
                                                    case 0:
                                                        return t.next = 2, n;
                                                    case 2:
                                                        return t.abrupt("return", a(r, o3, i));
                                                    case 3:
                                                    case "end":
                                                        return t.stop();
                                                }
                                            }, t17);
                                        }));
                                        return function(e, n) {
                                            return t16.apply(this, arguments);
                                        };
                                    }(), Promise.resolve()));
                                case 5:
                                case "end":
                                    return t14.stop();
                            }
                        }, t13);
                    }))).apply(this, arguments);
                }
                function y() {
                    var t18 = {
                        win: !1,
                        mac: !1,
                        x11: !1,
                        linux: !1
                    }, e = Object.keys(t18).find(function(t) {
                        return -1 !== navigator.appVersion.toLowerCase().indexOf(t);
                    });
                    return e ? (t18[e] = !0, t18) : t18;
                }
                t10.logLabeled = f1;
                var b = "ontouchstart" in document.documentElement;
                t10.isTouchSupported = b;
                var m = "undefined" != typeof window && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || "MacIntel" === window.navigator.platform && window.navigator.maxTouchPoints > 1);
                t10.isIosDevice = m;
            }) ? o1.apply(e9, r1) : o1) || (t9.exports = i1);
        },
        function(t19, e12, n6) {
            var o = n6(59);
            function r() {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap;
                return r = function() {
                    return t;
                }, t;
            }
            t19.exports = function(t) {
                if (t && t.__esModule) return t;
                if (null === t || "object" !== o(t) && "function" != typeof t) return {
                    default: t
                };
                var e = r();
                if (e && e.has(t)) return e.get(t);
                var n = {}, i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for(var a in t)if (Object.prototype.hasOwnProperty.call(t, a)) {
                    var s = i ? Object.getOwnPropertyDescriptor(t, a) : null;
                    s && (s.get || s.set) ? Object.defineProperty(n, a, s) : n[a] = t[a];
                }
                return n.default = t, e && e.set(t, n), n;
            };
        },
        function(t20, e13, n7) {
            var o4, r3, i3;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r3 = [
                e13,
                n7(2),
                n7(3),
                n7(111)
            ], void 0 === (i3 = "function" == typeof (o4 = function(o5, r4, i4, a2) {
                "use strict";
                var s = n7(1);
                function l(t21) {
                    if ("undefined" == typeof Symbol || null == t21[Symbol.iterator]) {
                        if (Array.isArray(t21) || (t21 = function(t, e) {
                            if (t) {
                                if ("string" == typeof t) return c(t, e);
                                var n = Object.prototype.toString.call(t).slice(8, -1);
                                return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? c(t, e) : void 0;
                            }
                        }(t21))) {
                            var e14 = 0, n8 = function() {};
                            return {
                                s: n8,
                                n: function() {
                                    return e14 >= t21.length ? {
                                        done: !0
                                    } : {
                                        done: !1,
                                        value: t21[e14++]
                                    };
                                },
                                e: function(t) {
                                    throw t;
                                },
                                f: n8
                            };
                        }
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    }
                    var o, r, i = !0, a = !1;
                    return {
                        s: function() {
                            o = t21[Symbol.iterator]();
                        },
                        n: function() {
                            var t = o.next();
                            return i = t.done, t;
                        },
                        e: function(t) {
                            a = !0, r = t;
                        },
                        f: function() {
                            try {
                                i || null == o.return || o.return();
                            } finally{
                                if (a) throw r;
                            }
                        }
                    };
                }
                function c(t, e) {
                    (null == e || e > t.length) && (e = t.length);
                    for(var n = 0, o = new Array(e); n < e; n++)o[n] = t[n];
                    return o;
                }
                Object.defineProperty(o5, "__esModule", {
                    value: !0
                }), o5.default = void 0, r4 = s(r4), i4 = s(i4), a2 = s(a2);
                var u = function() {
                    function t22(e16) {
                        var n = this, o6 = e16.config, i = e16.eventsDispatcher;
                        if ((0, r4.default)(this, t22), this.nodes = {}, this.listeners = new a2.default, this.readOnlyMutableListeners = {
                            on: function(t, e, o) {
                                var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                                n.mutableListenerIds.push(n.listeners.on(t, e, o, r));
                            },
                            clearAll: function() {
                                var t, e = l(n.mutableListenerIds);
                                try {
                                    for(e.s(); !(t = e.n()).done;){
                                        var o = t.value;
                                        n.listeners.offById(o);
                                    }
                                } catch (t23) {
                                    e.e(t23);
                                } finally{
                                    e.f();
                                }
                                n.mutableListenerIds = [];
                            }
                        }, this.mutableListenerIds = [], (this instanceof t22 ? this.constructor : void 0) === t22) throw new TypeError("Constructors for abstract class Module are not allowed.");
                        this.config = o6, this.eventsDispatcher = i;
                    }
                    return (0, i4.default)(t22, [
                        {
                            key: "removeAllNodes",
                            value: function() {
                                for(var t in this.nodes){
                                    var e = this.nodes[t];
                                    e instanceof HTMLElement && e.remove();
                                }
                            }
                        },
                        {
                            key: "state",
                            set: function(t) {
                                this.Editor = t;
                            }
                        },
                        {
                            key: "isRtl",
                            get: function() {
                                return "rtl" === this.config.i18n.direction;
                            }
                        }
                    ]), t22;
                }();
                o5.default = u, u.displayName = "Module", t20.exports = e13.default;
            }) ? o4.apply(e13, r3) : o4) || (t20.exports = i3);
        },
        function(t, e) {
            var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
            "number" == typeof __g && (__g = n);
        },
        function(t24, e) {
            t24.exports = function(t) {
                try {
                    return !!t();
                } catch (t25) {
                    return !0;
                }
            };
        },
        function(t26, e, n) {
            var o = n(13);
            t26.exports = function(t) {
                if (!o(t)) throw TypeError(t + " is not an object!");
                return t;
            };
        },
        function(t27, e) {
            t27.exports = function(t) {
                return "object" == typeof t ? null !== t : "function" == typeof t;
            };
        },
        function(t28, e17, n10) {
            var o7, r5, i5;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r5 = [
                e17,
                n10(42),
                n10(2),
                n10(3),
                n10(7)
            ], void 0 === (i5 = "function" == typeof (o7 = function(o8, r6, i6, a3, s) {
                "use strict";
                var l = n10(8), c = n10(1);
                Object.defineProperty(o8, "__esModule", {
                    value: !0
                }), o8.default = void 0, r6 = c(r6), i6 = c(i6), a3 = c(a3), s = l(s);
                var u = function() {
                    function t29() {
                        (0, i6.default)(this, t29);
                    }
                    return (0, a3.default)(t29, null, [
                        {
                            key: "isSingleTag",
                            value: function(t) {
                                return t.tagName && [
                                    "AREA",
                                    "BASE",
                                    "BR",
                                    "COL",
                                    "COMMAND",
                                    "EMBED",
                                    "HR",
                                    "IMG",
                                    "INPUT",
                                    "KEYGEN",
                                    "LINK",
                                    "META",
                                    "PARAM",
                                    "SOURCE",
                                    "TRACK",
                                    "WBR"
                                ].includes(t.tagName);
                            }
                        },
                        {
                            key: "isLineBreakTag",
                            value: function(t) {
                                return t && t.tagName && [
                                    "BR",
                                    "WBR"
                                ].includes(t.tagName);
                            }
                        },
                        {
                            key: "make",
                            value: function(t) {
                                var e, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, i = document.createElement(t);
                                for(var a in Array.isArray(n) ? (e = i.classList).add.apply(e, (0, r6.default)(n)) : n && i.classList.add(n), o)Object.prototype.hasOwnProperty.call(o, a) && (i[a] = o[a]);
                                return i;
                            }
                        },
                        {
                            key: "text",
                            value: function(t) {
                                return document.createTextNode(t);
                            }
                        },
                        {
                            key: "svg",
                            value: function(t) {
                                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 14, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 14, o = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                                return o.classList.add("icon", "icon--" + t), o.setAttribute("width", e + "px"), o.setAttribute("height", n + "px"), o.innerHTML = '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#'.concat(t, '"></use>'), o;
                            }
                        },
                        {
                            key: "append",
                            value: function(t, e18) {
                                Array.isArray(e18) ? e18.forEach(function(e) {
                                    return t.appendChild(e);
                                }) : t.appendChild(e18);
                            }
                        },
                        {
                            key: "prepend",
                            value: function(t, e19) {
                                Array.isArray(e19) ? (e19 = e19.reverse()).forEach(function(e) {
                                    return t.prepend(e);
                                }) : t.prepend(e19);
                            }
                        },
                        {
                            key: "swap",
                            value: function(t, e) {
                                var n = document.createElement("div"), o = t.parentNode;
                                o.insertBefore(n, t), o.insertBefore(t, e), o.insertBefore(e, n), o.removeChild(n);
                            }
                        },
                        {
                            key: "find",
                            value: function() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document, e = arguments.length > 1 ? arguments[1] : void 0;
                                return t.querySelector(e);
                            }
                        },
                        {
                            key: "get",
                            value: function(t) {
                                return document.getElementById(t);
                            }
                        },
                        {
                            key: "findAll",
                            value: function() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document, e = arguments.length > 1 ? arguments[1] : void 0;
                                return t.querySelectorAll(e);
                            }
                        },
                        {
                            key: "findAllInputs",
                            value: function(e20) {
                                return s.array(e20.querySelectorAll(t29.allInputsSelector)).reduce(function(e, n) {
                                    return t29.isNativeInput(n) || t29.containsOnlyInlineElements(n) ? [].concat((0, r6.default)(e), [
                                        n
                                    ]) : [].concat((0, r6.default)(e), (0, r6.default)(t29.getDeepestBlockElements(n)));
                                }, []);
                            }
                        },
                        {
                            key: "getDeepestNode",
                            value: function(e) {
                                var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], o = n ? "lastChild" : "firstChild", r = n ? "previousSibling" : "nextSibling";
                                if (e && e.nodeType === Node.ELEMENT_NODE && e[o]) {
                                    var i = e[o];
                                    if (t29.isSingleTag(i) && !t29.isNativeInput(i) && !t29.isLineBreakTag(i)) {
                                        if (i[r]) i = i[r];
                                        else {
                                            if (!i.parentNode[r]) return i.parentNode;
                                            i = i.parentNode[r];
                                        }
                                    }
                                    return this.getDeepestNode(i, n);
                                }
                                return e;
                            }
                        },
                        {
                            key: "isElement",
                            value: function(t) {
                                return !s.isNumber(t) && t && t.nodeType && t.nodeType === Node.ELEMENT_NODE;
                            }
                        },
                        {
                            key: "isFragment",
                            value: function(t) {
                                return !s.isNumber(t) && t && t.nodeType && t.nodeType === Node.DOCUMENT_FRAGMENT_NODE;
                            }
                        },
                        {
                            key: "isContentEditable",
                            value: function(t) {
                                return "true" === t.contentEditable;
                            }
                        },
                        {
                            key: "isNativeInput",
                            value: function(t) {
                                return !(!t || !t.tagName) && [
                                    "INPUT",
                                    "TEXTAREA"
                                ].includes(t.tagName);
                            }
                        },
                        {
                            key: "canSetCaret",
                            value: function(e) {
                                var n = !0;
                                if (t29.isNativeInput(e)) switch(e.type){
                                    case "file":
                                    case "checkbox":
                                    case "radio":
                                    case "hidden":
                                    case "submit":
                                    case "button":
                                    case "image":
                                    case "reset":
                                        n = !1;
                                }
                                else n = t29.isContentEditable(e);
                                return n;
                            }
                        },
                        {
                            key: "isNodeEmpty",
                            value: function(t) {
                                return !(this.isSingleTag(t) && !this.isLineBreakTag(t)) && 0 === (this.isElement(t) && this.isNativeInput(t) ? t.value : t.textContent.replace("\u200B", "")).trim().length;
                            }
                        },
                        {
                            key: "isLeaf",
                            value: function(t) {
                                return !!t && 0 === t.childNodes.length;
                            }
                        },
                        {
                            key: "isEmpty",
                            value: function(t) {
                                t.normalize();
                                for(var e = [
                                    t
                                ]; e.length > 0;)if (t = e.shift()) {
                                    if (this.isLeaf(t) && !this.isNodeEmpty(t)) return !1;
                                    t.childNodes && e.push.apply(e, (0, r6.default)(Array.from(t.childNodes)));
                                }
                                return !0;
                            }
                        },
                        {
                            key: "isHTMLString",
                            value: function(e) {
                                var n = t29.make("div");
                                return n.innerHTML = e, n.childElementCount > 0;
                            }
                        },
                        {
                            key: "getContentLength",
                            value: function(e) {
                                return t29.isNativeInput(e) ? e.value.length : e.nodeType === Node.TEXT_NODE ? e.length : e.textContent.length;
                            }
                        },
                        {
                            key: "containsOnlyInlineElements",
                            value: function(e21) {
                                var n11;
                                return s.isString(e21) ? (n11 = document.createElement("div")).innerHTML = e21 : n11 = e21, Array.from(n11.children).every(function e(n) {
                                    return !t29.blockElements.includes(n.tagName.toLowerCase()) && Array.from(n.children).every(e);
                                });
                            }
                        },
                        {
                            key: "getDeepestBlockElements",
                            value: function(e22) {
                                return t29.containsOnlyInlineElements(e22) ? [
                                    e22
                                ] : Array.from(e22.children).reduce(function(e, n) {
                                    return [].concat((0, r6.default)(e), (0, r6.default)(t29.getDeepestBlockElements(n)));
                                }, []);
                            }
                        },
                        {
                            key: "getHolder",
                            value: function(t) {
                                return s.isString(t) ? document.getElementById(t) : t;
                            }
                        },
                        {
                            key: "isExtensionNode",
                            value: function(t) {
                                return t && [
                                    "GRAMMARLY-EXTENSION"
                                ].includes(t.nodeName);
                            }
                        },
                        {
                            key: "isAnchor",
                            value: function(t) {
                                return "a" === t.tagName.toLowerCase();
                            }
                        },
                        {
                            key: "offset",
                            value: function(t) {
                                var e = t.getBoundingClientRect(), n = window.pageXOffset || document.documentElement.scrollLeft, o = window.pageYOffset || document.documentElement.scrollTop, r = e.top + o, i = e.left + n;
                                return {
                                    top: r,
                                    left: i,
                                    bottom: r + e.height,
                                    right: i + e.width
                                };
                            }
                        },
                        {
                            key: "allInputsSelector",
                            get: function() {
                                return "[contenteditable=true], textarea, input:not([type]), " + [
                                    "text",
                                    "password",
                                    "email",
                                    "number",
                                    "search",
                                    "tel",
                                    "url"
                                ].map(function(t) {
                                    return 'input[type="'.concat(t, '"]');
                                }).join(", ");
                            }
                        },
                        {
                            key: "blockElements",
                            get: function() {
                                return [
                                    "address",
                                    "article",
                                    "aside",
                                    "blockquote",
                                    "canvas",
                                    "div",
                                    "dl",
                                    "dt",
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
                                    "header",
                                    "hgroup",
                                    "hr",
                                    "li",
                                    "main",
                                    "nav",
                                    "noscript",
                                    "ol",
                                    "output",
                                    "p",
                                    "pre",
                                    "ruby",
                                    "section",
                                    "table",
                                    "tr",
                                    "tfoot",
                                    "ul",
                                    "video"
                                ];
                            }
                        }
                    ]), t29;
                }();
                o8.default = u, u.displayName = "Dom", t28.exports = e17.default;
            }) ? o7.apply(e17, r5) : o7) || (t28.exports = i5);
        },
        function(t30, e, n) {
            var o = n(69)("wks"), r = n(44), i = n(10).Symbol, a = "function" == typeof i;
            (t30.exports = function(t) {
                return o[t] || (o[t] = a && i[t] || (a ? i : r)("Symbol." + t));
            }).store = o;
        },
        function(t31, e, n) {
            var o = n(33), r = Math.min;
            t31.exports = function(t) {
                return t > 0 ? r(o(t), 9007199254740991) : 0;
            };
        },
        function(t, e) {
            var n = t.exports = {
                version: "2.6.11"
            };
            "number" == typeof __e && (__e = n);
        },
        function(t, e, n) {
            t.exports = !n(11)(function() {
                return 7 != Object.defineProperty({}, "a", {
                    get: function() {
                        return 7;
                    }
                }).a;
            });
        },
        function(t32, e23, n12) {
            var o = n12(12), r = n12(116), i = n12(40), a = Object.defineProperty;
            e23.f = n12(18) ? Object.defineProperty : function(t, e, n) {
                if (o(t), e = i(e, !0), o(n), r) try {
                    return a(t, e, n);
                } catch (t33) {}
                if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
                return "value" in n && (t[e] = n.value), t;
            };
        },
        function(t, e, n) {
            t.exports = n(147);
        },
        function(t34, e24) {
            function n13(t, e, n, o, r, i, a) {
                try {
                    var s = t[i](a), l = s.value;
                } catch (t35) {
                    return void n(t35);
                }
                s.done ? e(l) : Promise.resolve(l).then(o, r);
            }
            t34.exports = function(t36) {
                return function() {
                    var e = this, o = arguments;
                    return new Promise(function(r, i) {
                        var a = t36.apply(e, o);
                        function s(t) {
                            n13(a, r, i, s, l, "next", t);
                        }
                        function l(t) {
                            n13(a, r, i, s, l, "throw", t);
                        }
                        s(void 0);
                    });
                };
            };
        },
        function(t37, e, n) {
            var o = n(38);
            t37.exports = function(t) {
                return Object(o(t));
            };
        },
        function(t38, e25, n14) {
            var o = n14(10), r = n14(27), i = n14(26), a = n14(44)("src"), s2 = n14(192), l = ("" + s2).split("toString");
            n14(17).inspectSource = function(t) {
                return s2.call(t);
            }, (t38.exports = function(t, e, n, s) {
                var c = "function" == typeof n;
                c && (i(n, "name") || r(n, "name", e)), t[e] !== n && (c && (i(n, a) || r(n, a, t[e] ? "" + t[e] : l.join(String(e)))), t === o ? t[e] = n : s ? t[e] ? t[e] = n : r(t, e, n) : (delete t[e], r(t, e, n)));
            })(Function.prototype, "toString", function() {
                return "function" == typeof this && this[a] || s2.call(this);
            });
        },
        function(t39, e26, n15) {
            var o9 = n15(0), r7 = n15(11), i = n15(38), a = /"/g, s3 = function(t, e, n, o) {
                var r = String(i(t)), s = "<" + e;
                return "" !== n && (s += " " + n + '="' + String(o).replace(a, "&quot;") + '"'), s + ">" + r + "</" + e + ">";
            };
            t39.exports = function(t, e27) {
                var n = {};
                n[t] = e27(s3), o9(o9.P + o9.F * r7(function() {
                    var e = ""[t]('"');
                    return e !== e.toLowerCase() || e.split('"').length > 3;
                }), "String", n);
            };
        },
        function(t40, e28, n16) {
            var o10, r8, i7;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r8 = [
                e28,
                n16(2),
                n16(3),
                n16(7),
                n16(14)
            ], void 0 === (i7 = "function" == typeof (o10 = function(o11, r9, i8, a, s) {
                "use strict";
                var l = n16(8), c = n16(1);
                Object.defineProperty(o11, "__esModule", {
                    value: !0
                }), o11.default = void 0, r9 = c(r9), i8 = c(i8), a = l(a), s = c(s);
                var u = function() {
                    function t41() {
                        (0, r9.default)(this, t41), this.instance = null, this.selection = null, this.savedSelectionRange = null, this.isFakeBackgroundEnabled = !1, this.commandBackground = "backColor", this.commandRemoveFormat = "removeFormat";
                    }
                    return (0, i8.default)(t41, [
                        {
                            key: "removeFakeBackground",
                            value: function() {
                                this.isFakeBackgroundEnabled && (this.isFakeBackgroundEnabled = !1, document.execCommand(this.commandRemoveFormat));
                            }
                        },
                        {
                            key: "setFakeBackground",
                            value: function() {
                                document.execCommand(this.commandBackground, !1, "#a8d6ff"), this.isFakeBackgroundEnabled = !0;
                            }
                        },
                        {
                            key: "save",
                            value: function() {
                                this.savedSelectionRange = t41.range;
                            }
                        },
                        {
                            key: "restore",
                            value: function() {
                                if (this.savedSelectionRange) {
                                    var t = window.getSelection();
                                    t.removeAllRanges(), t.addRange(this.savedSelectionRange);
                                }
                            }
                        },
                        {
                            key: "clearSaved",
                            value: function() {
                                this.savedSelectionRange = null;
                            }
                        },
                        {
                            key: "collapseToEnd",
                            value: function() {
                                var t = window.getSelection(), e = document.createRange();
                                e.selectNodeContents(t.focusNode), e.collapse(!1), t.removeAllRanges(), t.addRange(e);
                            }
                        },
                        {
                            key: "findParentTag",
                            value: function(t, e) {
                                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10, o12 = window.getSelection(), r = null;
                                if (!o12 || !o12.anchorNode || !o12.focusNode) return null;
                                var i9 = [
                                    o12.anchorNode,
                                    o12.focusNode
                                ];
                                return i9.forEach(function(o) {
                                    for(var i = n; i > 0 && o.parentNode && (o.tagName !== t || (r = o, e && o.classList && !o.classList.contains(e) && (r = null), !r));)o = o.parentNode, i--;
                                }), r;
                            }
                        },
                        {
                            key: "expandToTag",
                            value: function(t) {
                                var e = window.getSelection();
                                e.removeAllRanges();
                                var n = document.createRange();
                                n.selectNodeContents(t), e.addRange(n);
                            }
                        }
                    ], [
                        {
                            key: "isSelectionAtEditor",
                            value: function(e) {
                                if (!e) return !1;
                                var n = e.anchorNode || e.focusNode;
                                n && n.nodeType === Node.TEXT_NODE && (n = n.parentNode);
                                var o = null;
                                return n && n instanceof Element && (o = n.closest(".".concat(t41.CSS.editorZone))), !!o && o.nodeType === Node.ELEMENT_NODE;
                            }
                        },
                        {
                            key: "isRangeAtEditor",
                            value: function(e) {
                                if (e) {
                                    var n = e.startContainer;
                                    n && n.nodeType === Node.TEXT_NODE && (n = n.parentNode);
                                    var o = null;
                                    return n && n instanceof Element && (o = n.closest(".".concat(t41.CSS.editorZone))), !!o && o.nodeType === Node.ELEMENT_NODE;
                                }
                            }
                        },
                        {
                            key: "getRangeFromSelection",
                            value: function(t) {
                                return t && t.rangeCount ? t.getRangeAt(0) : null;
                            }
                        },
                        {
                            key: "get",
                            value: function() {
                                return window.getSelection();
                            }
                        },
                        {
                            key: "setCursor",
                            value: function(t) {
                                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n = document.createRange(), o = window.getSelection();
                                if (s.default.isNativeInput(t)) {
                                    if (!s.default.canSetCaret(t)) return;
                                    return t.focus(), t.selectionStart = t.selectionEnd = e, t.getBoundingClientRect();
                                }
                                return n.setStart(t, e), n.setEnd(t, e), o.removeAllRanges(), o.addRange(n), n.getBoundingClientRect();
                            }
                        },
                        {
                            key: "addFakeCursor",
                            value: function(e) {
                                var n = t41.range, o = s.default.make("span", "codex-editor__fake-cursor");
                                o.dataset.mutationFree = "true", !n || e && !e.contains(n.startContainer) || (n.collapse(), n.insertNode(o));
                            }
                        },
                        {
                            key: "removeFakeCursor",
                            value: function() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document.body, e = s.default.find(t, ".codex-editor__fake-cursor");
                                e && e.remove();
                            }
                        },
                        {
                            key: "CSS",
                            get: function() {
                                return {
                                    editorWrapper: "codex-editor",
                                    editorZone: "codex-editor__redactor"
                                };
                            }
                        },
                        {
                            key: "anchorNode",
                            get: function() {
                                var t = window.getSelection();
                                return t ? t.anchorNode : null;
                            }
                        },
                        {
                            key: "anchorElement",
                            get: function() {
                                var t = window.getSelection();
                                if (!t) return null;
                                var e = t.anchorNode;
                                return e ? s.default.isElement(e) ? e : e.parentElement : null;
                            }
                        },
                        {
                            key: "anchorOffset",
                            get: function() {
                                var t = window.getSelection();
                                return t ? t.anchorOffset : null;
                            }
                        },
                        {
                            key: "isCollapsed",
                            get: function() {
                                var t = window.getSelection();
                                return t ? t.isCollapsed : null;
                            }
                        },
                        {
                            key: "isAtEditor",
                            get: function() {
                                return this.isSelectionAtEditor(t41.get());
                            }
                        },
                        {
                            key: "isSelectionExists",
                            get: function() {
                                return !!t41.get().anchorNode;
                            }
                        },
                        {
                            key: "range",
                            get: function() {
                                return this.getRangeFromSelection(this.get());
                            }
                        },
                        {
                            key: "rect",
                            get: function() {
                                var t, e = document.selection, n = {
                                    x: 0,
                                    y: 0,
                                    width: 0,
                                    height: 0
                                };
                                if (e && "Control" !== e.type) return t = e.createRange(), n.x = t.boundingLeft, n.y = t.boundingTop, n.width = t.boundingWidth, n.height = t.boundingHeight, n;
                                if (!window.getSelection) return a.log("Method window.getSelection is not supported", "warn"), n;
                                if (null === (e = window.getSelection()).rangeCount || isNaN(e.rangeCount)) return a.log("Method SelectionUtils.rangeCount is not supported", "warn"), n;
                                if (0 === e.rangeCount) return n;
                                if ((t = e.getRangeAt(0).cloneRange()).getBoundingClientRect && (n = t.getBoundingClientRect()), 0 === n.x && 0 === n.y) {
                                    var o = document.createElement("span");
                                    if (o.getBoundingClientRect) {
                                        o.appendChild(document.createTextNode("\u200B")), t.insertNode(o), n = o.getBoundingClientRect();
                                        var r = o.parentNode;
                                        r.removeChild(o), r.normalize();
                                    }
                                }
                                return n;
                            }
                        },
                        {
                            key: "text",
                            get: function() {
                                return window.getSelection ? window.getSelection().toString() : "";
                            }
                        }
                    ]), t41;
                }();
                o11.default = u, u.displayName = "SelectionUtils", t40.exports = e28.default;
            }) ? o10.apply(e28, r8) : o10) || (t40.exports = i7);
        },
        function(t42, e29) {
            var n = {}.hasOwnProperty;
            t42.exports = function(t, e) {
                return n.call(t, e);
            };
        },
        function(t43, e30, n17) {
            var o = n17(19), r = n17(43);
            t43.exports = n17(18) ? function(t, e, n) {
                return o.f(t, e, r(1, n));
            } : function(t, e, n) {
                return t[e] = n, t;
            };
        },
        function(t44, e, n) {
            var o = n(63), r = n(38);
            t44.exports = function(t) {
                return o(r(t));
            };
        },
        function(t45, e31, n) {
            "use strict";
            var o = n(11);
            t45.exports = function(t, e) {
                return !!t && o(function() {
                    e ? t.call(null, function() {}, 1) : t.call(null);
                });
            };
        },
        function(t46, e32, n) {
            var o = n(361), r = n(362), i = n(148), a = n(363);
            t46.exports = function(t, e) {
                return o(t) || r(t, e) || i(t, e) || a();
            };
        },
        function(t47, e33, n18) {
            var o13 = n18(32);
            t47.exports = function(t, e, n19) {
                if (o13(t), void 0 === e) return t;
                switch(n19){
                    case 1:
                        return function(n) {
                            return t.call(e, n);
                        };
                    case 2:
                        return function(n, o) {
                            return t.call(e, n, o);
                        };
                    case 3:
                        return function(n, o, r) {
                            return t.call(e, n, o, r);
                        };
                }
                return function() {
                    return t.apply(e, arguments);
                };
            };
        },
        function(t48, e) {
            t48.exports = function(t) {
                if ("function" != typeof t) throw TypeError(t + " is not a function!");
                return t;
            };
        },
        function(t49, e) {
            var n = Math.ceil, o = Math.floor;
            t49.exports = function(t) {
                return isNaN(t = +t) ? 0 : (t > 0 ? o : n)(t);
            };
        },
        function(t50, e34, n) {
            var o = n(64), r = n(43), i = n(28), a = n(40), s = n(26), l = n(116), c = Object.getOwnPropertyDescriptor;
            e34.f = n(18) ? c : function(t, e) {
                if (t = i(t), e = a(e, !0), l) try {
                    return c(t, e);
                } catch (t51) {}
                if (s(t, e)) return r(!o.f.call(t, e), t[e]);
            };
        },
        function(t52, e35, n20) {
            var o = n20(0), r = n20(17), i = n20(11);
            t52.exports = function(t, e) {
                var n = (r.Object || {})[t] || Object[t], a = {};
                a[t] = e(n), o(o.S + o.F * i(function() {
                    n(1);
                }), "Object", a);
            };
        },
        function(t53, e36, n21) {
            var o = n21(31), r = n21(63), i = n21(22), a = n21(16), s4 = n21(132);
            t53.exports = function(t, e37) {
                var n = 1 == t, l = 2 == t, c = 3 == t, u = 4 == t, f = 6 == t, d = 5 == t || f, p = e37 || s4;
                return function(e, s, h) {
                    for(var v, g, y = i(e), b = r(y), m = o(s, h, 3), k = a(b.length), x = 0, w = n ? p(e, k) : l ? p(e, 0) : void 0; k > x; x++)if ((d || x in b) && (g = m(v = b[x], x, y), t)) {
                        if (n) w[x] = g;
                        else if (g) switch(t){
                            case 3:
                                return !0;
                            case 5:
                                return v;
                            case 6:
                                return x;
                            case 2:
                                w.push(v);
                        }
                        else if (u) return !1;
                    }
                    return f ? -1 : c || u ? u : w;
                };
            };
        },
        function(t54, e) {
            var n = {}.toString;
            t54.exports = function(t) {
                return n.call(t).slice(8, -1);
            };
        },
        function(t55, e) {
            t55.exports = function(t) {
                if (null == t) throw TypeError("Can't call method on  " + t);
                return t;
            };
        },
        function(t56, e38, n22) {
            "use strict";
            if (n22(18)) {
                var o14 = n22(45), r10 = n22(10), i10 = n22(11), a4 = n22(0), s5 = n22(80), l2 = n22(109), c2 = n22(31), u2 = n22(57), f2 = n22(43), d2 = n22(27), p1 = n22(58), h1 = n22(33), v = n22(16), g = n22(143), y1 = n22(47), b1 = n22(40), m1 = n22(26), k = n22(65), x = n22(13), w1 = n22(22), S1 = n22(101), T = n22(48), E = n22(50), B = n22(49).f, C1 = n22(103), _1 = n22(44), I1 = n22(15), O1 = n22(36), M = n22(70), R = n22(66), A = n22(105), N = n22(55), L = n22(73), P = n22(56), D = n22(104), j = n22(134), F = n22(19), H = n22(34), U = F.f, z = H.f, W = r10.RangeError, Y = r10.TypeError, V = r10.Uint8Array, X = Array.prototype, K = l2.ArrayBuffer, G = l2.DataView, Z = O1(0), q = O1(2), J = O1(3), $ = O1(4), Q = O1(5), tt = O1(6), et = M(!0), nt = M(!1), ot = A.values, rt = A.keys, it = A.entries, at = X.lastIndexOf, st = X.reduce, lt = X.reduceRight, ct = X.join, ut = X.sort, ft = X.slice, dt = X.toString, pt = X.toLocaleString, ht = I1("iterator"), vt = I1("toStringTag"), gt = _1("typed_constructor"), yt = _1("def_constructor"), bt = s5.CONSTR, mt = s5.TYPED, kt = s5.VIEW, xt = O1(1, function(t, e) {
                    return Bt(R(t, t[yt]), e);
                }), wt = i10(function() {
                    return 1 === new V(new Uint16Array([
                        1
                    ]).buffer)[0];
                }), St = !!V && !!V.prototype.set && i10(function() {
                    new V(1).set({});
                }), Tt = function(t, e) {
                    var n = h1(t);
                    if (n < 0 || n % e) throw W("Wrong offset!");
                    return n;
                }, Et = function(t) {
                    if (x(t) && mt in t) return t;
                    throw Y(t + " is not a typed array!");
                }, Bt = function(t, e) {
                    if (!x(t) || !(gt in t)) throw Y("It is not a typed array constructor!");
                    return new t(e);
                }, Ct = function(t, e) {
                    return _t(R(t, t[yt]), e);
                }, _t = function(t, e) {
                    for(var n = 0, o = e.length, r = Bt(t, o); o > n;)r[n] = e[n++];
                    return r;
                }, It = function(t, e, n) {
                    U(t, e, {
                        get: function() {
                            return this._d[n];
                        }
                    });
                }, Ot = function(t) {
                    var e, n, o, r, i, a, s = w1(t), l = arguments.length, u = l > 1 ? arguments[1] : void 0, f = void 0 !== u, d = C1(s);
                    if (null != d && !S1(d)) {
                        for(a = d.call(s), o = [], e = 0; !(i = a.next()).done; e++)o.push(i.value);
                        s = o;
                    }
                    for(f && l > 2 && (u = c2(u, arguments[2], 2)), e = 0, n = v(s.length), r = Bt(this, n); n > e; e++)r[e] = f ? u(s[e], e) : s[e];
                    return r;
                }, Mt = function() {
                    for(var t = 0, e = arguments.length, n = Bt(this, e); e > t;)n[t] = arguments[t++];
                    return n;
                }, Rt = !!V && i10(function() {
                    pt.call(new V(1));
                }), At = function() {
                    return pt.apply(Rt ? ft.call(Et(this)) : Et(this), arguments);
                }, Nt = {
                    copyWithin: function(t, e) {
                        return j.call(Et(this), t, e, arguments.length > 2 ? arguments[2] : void 0);
                    },
                    every: function(t) {
                        return $(Et(this), t, arguments.length > 1 ? arguments[1] : void 0);
                    },
                    fill: function(t) {
                        return D.apply(Et(this), arguments);
                    },
                    filter: function(t) {
                        return Ct(this, q(Et(this), t, arguments.length > 1 ? arguments[1] : void 0));
                    },
                    find: function(t) {
                        return Q(Et(this), t, arguments.length > 1 ? arguments[1] : void 0);
                    },
                    findIndex: function(t) {
                        return tt(Et(this), t, arguments.length > 1 ? arguments[1] : void 0);
                    },
                    forEach: function(t) {
                        Z(Et(this), t, arguments.length > 1 ? arguments[1] : void 0);
                    },
                    indexOf: function(t) {
                        return nt(Et(this), t, arguments.length > 1 ? arguments[1] : void 0);
                    },
                    includes: function(t) {
                        return et(Et(this), t, arguments.length > 1 ? arguments[1] : void 0);
                    },
                    join: function(t) {
                        return ct.apply(Et(this), arguments);
                    },
                    lastIndexOf: function(t) {
                        return at.apply(Et(this), arguments);
                    },
                    map: function(t) {
                        return xt(Et(this), t, arguments.length > 1 ? arguments[1] : void 0);
                    },
                    reduce: function(t) {
                        return st.apply(Et(this), arguments);
                    },
                    reduceRight: function(t) {
                        return lt.apply(Et(this), arguments);
                    },
                    reverse: function() {
                        for(var t, e = Et(this).length, n = Math.floor(e / 2), o = 0; o < n;)t = this[o], this[o++] = this[--e], this[e] = t;
                        return this;
                    },
                    some: function(t) {
                        return J(Et(this), t, arguments.length > 1 ? arguments[1] : void 0);
                    },
                    sort: function(t) {
                        return ut.call(Et(this), t);
                    },
                    subarray: function(t, e) {
                        var n = Et(this), o = n.length, r = y1(t, o);
                        return new (R(n, n[yt]))(n.buffer, n.byteOffset + r * n.BYTES_PER_ELEMENT, v((void 0 === e ? o : y1(e, o)) - r));
                    }
                }, Lt = function(t, e) {
                    return Ct(this, ft.call(Et(this), t, e));
                }, Pt = function(t) {
                    Et(this);
                    var e = Tt(arguments[1], 1), n = this.length, o = w1(t), r = v(o.length), i = 0;
                    if (r + e > n) throw W("Wrong length!");
                    for(; i < r;)this[e + i] = o[i++];
                }, Dt = {
                    entries: function() {
                        return it.call(Et(this));
                    },
                    keys: function() {
                        return rt.call(Et(this));
                    },
                    values: function() {
                        return ot.call(Et(this));
                    }
                }, jt = function(t, e) {
                    return x(t) && t[mt] && "symbol" != typeof e && e in t && String(+e) == String(e);
                }, Ft = function(t, e) {
                    return jt(t, e = b1(e, !0)) ? f2(2, t[e]) : z(t, e);
                }, Ht = function(t, e, n) {
                    return !(jt(t, e = b1(e, !0)) && x(n) && m1(n, "value")) || m1(n, "get") || m1(n, "set") || n.configurable || m1(n, "writable") && !n.writable || m1(n, "enumerable") && !n.enumerable ? U(t, e, n) : (t[e] = n.value, t);
                };
                bt || (H.f = Ft, F.f = Ht), a4(a4.S + a4.F * !bt, "Object", {
                    getOwnPropertyDescriptor: Ft,
                    defineProperty: Ht
                }), i10(function() {
                    dt.call({});
                }) && (dt = pt = function() {
                    return ct.call(this);
                });
                var Ut = p1({}, Nt);
                p1(Ut, Dt), d2(Ut, ht, Dt.values), p1(Ut, {
                    slice: Lt,
                    set: Pt,
                    constructor: function() {},
                    toString: dt,
                    toLocaleString: At
                }), It(Ut, "buffer", "b"), It(Ut, "byteOffset", "o"), It(Ut, "byteLength", "l"), It(Ut, "length", "e"), U(Ut, vt, {
                    get: function() {
                        return this[mt];
                    }
                }), t56.exports = function(t57, e, n23, l4) {
                    var c = t57 + ((l4 = !!l4) ? "Clamped" : "") + "Array", f4 = "get" + t57, p3 = "set" + t57, h = r10[c], y3 = h || {}, b = h && E(h), m = !h || !s5.ABV, w = {}, S = h && h.prototype, C = function(t58, n24) {
                        U(t58, n24, {
                            get: function() {
                                return function(t, n) {
                                    var o = t._d;
                                    return o.v[f4](n * e + o.o, wt);
                                }(this, n24);
                            },
                            set: function(t59) {
                                return function(t, n, o) {
                                    var r = t._d;
                                    l4 && (o = (o = Math.round(o)) < 0 ? 0 : o > 255 ? 255 : 255 & o), r.v[p3](n * e + r.o, o, wt);
                                }(this, n24, t59);
                            },
                            enumerable: !0
                        });
                    };
                    m ? (h = n23(function(t, n, o, r) {
                        u2(t, h, c, "_d");
                        var i, a, s, l, f = 0, p = 0;
                        if (x(n)) {
                            if (!(n instanceof K || "ArrayBuffer" == (l = k(n)) || "SharedArrayBuffer" == l)) return mt in n ? _t(h, n) : Ot.call(h, n);
                            i = n, p = Tt(o, e);
                            var y = n.byteLength;
                            if (void 0 === r) {
                                if (y % e) throw W("Wrong length!");
                                if ((a = y - p) < 0) throw W("Wrong length!");
                            } else if ((a = v(r) * e) + p > y) throw W("Wrong length!");
                            s = a / e;
                        } else s = g(n), i = new K(a = s * e);
                        for(d2(t, "_d", {
                            b: i,
                            o: p,
                            l: a,
                            e: s,
                            v: new G(i)
                        }); f < s;)C(t, f++);
                    }), S = h.prototype = T(Ut), d2(S, "constructor", h)) : i10(function() {
                        h(1);
                    }) && i10(function() {
                        new h(-1);
                    }) && L(function(t) {
                        new h, new h(null), new h(1.5), new h(t);
                    }, !0) || (h = n23(function(t, n, o, r) {
                        var i;
                        return u2(t, h, c), x(n) ? n instanceof K || "ArrayBuffer" == (i = k(n)) || "SharedArrayBuffer" == i ? void 0 !== r ? new y3(n, Tt(o, e), r) : void 0 !== o ? new y3(n, Tt(o, e)) : new y3(n) : mt in n ? _t(h, n) : Ot.call(h, n) : new y3(g(n));
                    }), Z(b !== Function.prototype ? B(y3).concat(B(b)) : B(y3), function(t) {
                        t in h || d2(h, t, y3[t]);
                    }), h.prototype = S, o14 || (S.constructor = h));
                    var _ = S[ht], I = !!_ && ("values" == _.name || null == _.name), O = Dt.values;
                    d2(h, gt, !0), d2(S, mt, c), d2(S, kt, !0), d2(S, yt, h), (l4 ? new h(1)[vt] == c : vt in S) || U(S, vt, {
                        get: function() {
                            return c;
                        }
                    }), w[c] = h, a4(a4.G + a4.W + a4.F * (h != y3), w), a4(a4.S, c, {
                        BYTES_PER_ELEMENT: e
                    }), a4(a4.S + a4.F * i10(function() {
                        y3.of.call(h, 1);
                    }), c, {
                        from: Ot,
                        of: Mt
                    }), "BYTES_PER_ELEMENT" in S || d2(S, "BYTES_PER_ELEMENT", e), a4(a4.P, c, Nt), P(c), a4(a4.P + a4.F * St, c, {
                        set: Pt
                    }), a4(a4.P + a4.F * !I, c, Dt), o14 || S.toString == dt || (S.toString = dt), a4(a4.P + a4.F * i10(function() {
                        new h(1).slice();
                    }), c, {
                        slice: Lt
                    }), a4(a4.P + a4.F * (i10(function() {
                        return [
                            1,
                            2
                        ].toLocaleString() != new h([
                            1,
                            2
                        ]).toLocaleString();
                    }) || !i10(function() {
                        S.toLocaleString.call([
                            1,
                            2
                        ]);
                    })), c, {
                        toLocaleString: At
                    }), N[c] = I ? _ : O, o14 || I || d2(S, ht, O);
                };
            } else t56.exports = function() {};
        },
        function(t60, e39, n25) {
            var o = n25(13);
            t60.exports = function(t, e) {
                if (!o(t)) return t;
                var n, r;
                if (e && "function" == typeof (n = t.toString) && !o(r = n.call(t))) return r;
                if ("function" == typeof (n = t.valueOf) && !o(r = n.call(t))) return r;
                if (!e && "function" == typeof (n = t.toString) && !o(r = n.call(t))) return r;
                throw TypeError("Can't convert object to primitive value");
            };
        },
        function(t61, e40, n) {
            var o = n(44)("meta"), r = n(13), i = n(26), a = n(19).f, s = 0, l = Object.isExtensible || function() {
                return !0;
            }, c = !n(11)(function() {
                return l(Object.preventExtensions({}));
            }), u = function(t) {
                a(t, o, {
                    value: {
                        i: "O" + ++s,
                        w: {}
                    }
                });
            }, f = t61.exports = {
                KEY: o,
                NEED: !1,
                fastKey: function(t, e) {
                    if (!r(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                    if (!i(t, o)) {
                        if (!l(t)) return "F";
                        if (!e) return "E";
                        u(t);
                    }
                    return t[o].i;
                },
                getWeak: function(t, e) {
                    if (!i(t, o)) {
                        if (!l(t)) return !0;
                        if (!e) return !1;
                        u(t);
                    }
                    return t[o].w;
                },
                onFreeze: function(t) {
                    return c && f.NEED && l(t) && !i(t, o) && u(t), t;
                }
            };
        },
        function(t62, e, n) {
            var o = n(368), r = n(369), i = n(148), a = n(370);
            t62.exports = function(t) {
                return o(t) || r(t) || i(t) || a();
            };
        },
        function(t63, e41) {
            t63.exports = function(t, e) {
                return {
                    enumerable: !(1 & t),
                    configurable: !(2 & t),
                    writable: !(4 & t),
                    value: e
                };
            };
        },
        function(t64, e) {
            var n = 0, o = Math.random();
            t64.exports = function(t) {
                return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + o).toString(36));
            };
        },
        function(t, e) {
            t.exports = !1;
        },
        function(t65, e, n) {
            var o = n(118), r = n(88);
            t65.exports = Object.keys || function(t) {
                return o(t, r);
            };
        },
        function(t66, e42, n) {
            var o = n(33), r = Math.max, i = Math.min;
            t66.exports = function(t, e) {
                return (t = o(t)) < 0 ? r(t + e, 0) : i(t, e);
            };
        },
        function(t67, e43, n26) {
            var o16 = n26(12), r = n26(119), i = n26(88), a = n26(87)("IE_PROTO"), s = function() {}, l = function() {
                var t, e = n26(85)("iframe"), o = i.length;
                for(e.style.display = "none", n26(89).appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write("<script>document.F=Object</script>"), t.close(), l = t.F; o--;)delete l.prototype[i[o]];
                return l();
            };
            t67.exports = Object.create || function(t, e) {
                var n;
                return null !== t ? (s.prototype = o16(t), n = new s, s.prototype = null, n[a] = t) : n = l(), void 0 === e ? n : r(n, e);
            };
        },
        function(t68, e, n) {
            var o = n(118), r = n(88).concat("length", "prototype");
            e.f = Object.getOwnPropertyNames || function(t) {
                return o(t, r);
            };
        },
        function(t69, e, n) {
            var o = n(26), r = n(22), i = n(87)("IE_PROTO"), a = Object.prototype;
            t69.exports = Object.getPrototypeOf || function(t) {
                return t = r(t), o(t, i) ? t[i] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? a : null;
            };
        },
        function(t70, e, n) {
            var o = n(15)("unscopables"), r = Array.prototype;
            null == r[o] && n(27)(r, o, {}), t70.exports = function(t) {
                r[o][t] = !0;
            };
        },
        function(t71, e44, n) {
            var o = n(13);
            t71.exports = function(t, e) {
                if (!o(t) || t._t !== e) throw TypeError("Incompatible receiver, " + e + " required!");
                return t;
            };
        },
        function(t72, e45, n27) {
            var o = n27(19).f, r = n27(26), i = n27(15)("toStringTag");
            t72.exports = function(t, e, n) {
                t && !r(t = n ? t : t.prototype, i) && o(t, i, {
                    configurable: !0,
                    value: e
                });
            };
        },
        function(t73, e46, n28) {
            var o = n28(0), r12 = n28(38), i = n28(11), a = n28(91), s7 = "[" + a + "]", l5 = RegExp("^" + s7 + s7 + "*"), c = RegExp(s7 + s7 + "*$"), u = function(t, e, n) {
                var r = {}, s = i(function() {
                    return !!a[t]() || "\u200B\x85" != "\u200B\x85"[t]();
                }), l = r[t] = s ? e(f) : a[t];
                n && (r[n] = l), o(o.P + o.F * s, "String", r);
            }, f = u.trim = function(t, e) {
                return t = String(r12(t)), 1 & e && (t = t.replace(l5, "")), 2 & e && (t = t.replace(c, "")), t;
            };
            t73.exports = u;
        },
        function(t, e) {
            t.exports = {};
        },
        function(t74, e47, n) {
            "use strict";
            var o = n(10), r = n(19), i = n(18), a = n(15)("species");
            t74.exports = function(t) {
                var e = o[t];
                i && e && !e[a] && r.f(e, a, {
                    configurable: !0,
                    get: function() {
                        return this;
                    }
                });
            };
        },
        function(t75, e48) {
            t75.exports = function(t, e, n, o) {
                if (!(t instanceof e) || void 0 !== o && o in t) throw TypeError(n + ": incorrect invocation!");
                return t;
            };
        },
        function(t76, e49, n29) {
            var o = n29(23);
            t76.exports = function(t, e, n) {
                for(var r in e)o(t, r, e[r], n);
                return t;
            };
        },
        function(t77, e50) {
            function n(e) {
                return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? t77.exports = n = function(t) {
                    return typeof t;
                } : t77.exports = n = function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                }, n(e);
            }
            t77.exports = n;
        },
        function(t78, e51, n30) {
            var o17, r13, i12;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r13 = [
                e51,
                n30(2),
                n30(3),
                n30(150)
            ], void 0 === (i12 = "function" == typeof (o17 = function(o18, r, i, a) {
                "use strict";
                var s = n30(1);
                Object.defineProperty(o18, "__esModule", {
                    value: !0
                }), o18.default = void 0, r = s(r), i = s(i), a = s(a);
                var l = function() {
                    function t79() {
                        (0, r.default)(this, t79);
                    }
                    return (0, i.default)(t79, null, [
                        {
                            key: "ui",
                            value: function(e, n) {
                                return t79._t(e, n);
                            }
                        },
                        {
                            key: "t",
                            value: function(e, n) {
                                return t79._t(e, n);
                            }
                        },
                        {
                            key: "setDictionary",
                            value: function(e) {
                                t79.currentDictionary = e;
                            }
                        },
                        {
                            key: "_t",
                            value: function(e, n) {
                                var o = t79.getNamespace(e);
                                return o && o[n] ? o[n] : n;
                            }
                        },
                        {
                            key: "getNamespace",
                            value: function(e52) {
                                return e52.split(".").reduce(function(t, e) {
                                    return t && Object.keys(t).length ? t[e] : {};
                                }, t79.currentDictionary);
                            }
                        }
                    ]), t79;
                }();
                o18.default = l, l.displayName = "I18n", l.currentDictionary = a.default, t78.exports = e51.default;
            }) ? o17.apply(e51, r13) : o17) || (t78.exports = i12);
        },
        function(t80, e53, n31) {
            var o19, r14, i13;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r14 = [
                e53,
                n31(30),
                n31(20),
                n31(21),
                n31(42),
                n31(2),
                n31(3),
                n31(152),
                n31(113),
                n31(5),
                n31(6),
                n31(4),
                n31(14),
                n31(7),
                n31(112),
                n31(25),
                n31(81)
            ], void 0 === (i13 = "function" == typeof (o19 = function(t81, e54, o20, r15, i14, a6, s8, l6, c4, u4, f5, d, p, h, v, g, y4) {
                "use strict";
                var b, m3 = n31(8), k1 = n31(1);
                function x() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(t81, "__esModule", {
                    value: !0
                }), t81.default = t81.BlockToolAPI = void 0, e54 = k1(e54), o20 = k1(o20), r15 = k1(r15), i14 = k1(i14), a6 = k1(a6), s8 = k1(s8), l6 = k1(l6), c4 = k1(c4), u4 = k1(u4), f5 = k1(f5), d = k1(d), p = k1(p), h = m3(h), v = k1(v), g = k1(g), y4 = k1(y4), t81.BlockToolAPI = b, function(t) {
                    t.APPEND_CALLBACK = "appendCallback", t.RENDERED = "rendered", t.MOVED = "moved", t.UPDATED = "updated", t.REMOVED = "removed", t.ON_PASTE = "onPaste";
                }(b || (t81.BlockToolAPI = b = {}));
                var w3 = function(t82) {
                    (0, u4.default)(T, t82);
                    var n32, y, m, k, w, S = (n32 = T, function() {
                        var t, e = (0, d.default)(n32);
                        if (x()) {
                            var o = (0, d.default)(this).constructor;
                            t = Reflect.construct(e, arguments, o);
                        } else t = e.apply(this, arguments);
                        return (0, f5.default)(this, t);
                    });
                    function T(t83) {
                        var e55, n33 = t83.id, o21 = void 0 === n33 ? h.generateBlockId() : n33, r = t83.data, s = t83.tool, c = t83.api, u = t83.readOnly, f = t83.tunesData;
                        return (0, a6.default)(this, T), (e55 = S.call(this)).cachedInputs = [], e55.tunesInstances = new Map, e55.defaultTunesInstances = new Map, e55.unavailableTunesData = {}, e55.inputIndex = 0, e55.modificationDebounceTimer = 450, e55.didMutated = h.debounce(function() {
                            var t84 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], n34 = t84 instanceof InputEvent || !t84.some(function(t85) {
                                var e = t85.addedNodes, n = void 0 === e ? [] : e, o = t85.removedNodes;
                                return [].concat((0, i14.default)(Array.from(n)), (0, i14.default)(Array.from(o))).some(function(t) {
                                    return p.default.isElement(t) && "true" === t.dataset.mutationFree;
                                });
                            });
                            n34 && (e55.cachedInputs = [], e55.updateCurrentInput(), e55.call(b.UPDATED), e55.emit("didMutated", (0, l6.default)(e55)));
                        }, e55.modificationDebounceTimer), e55.handleFocus = function() {
                            e55.cachedInputs = [], e55.updateCurrentInput();
                        }, e55.name = s.name, e55.id = o21, e55.settings = s.settings, e55.config = s.settings.config || {}, e55.api = c, e55.blockAPI = new v.default((0, l6.default)(e55)), e55.mutationObserver = new MutationObserver(e55.didMutated), e55.tool = s, e55.toolInstance = s.create(r, e55.blockAPI, u), e55.tunes = s.tunes, e55.composeTunes(f), e55.holder = e55.compose(), e55;
                    }
                    return (0, s8.default)(T, [
                        {
                            key: "call",
                            value: function(t, e) {
                                if (h.isFunction(this.toolInstance[t])) {
                                    t === b.APPEND_CALLBACK && h.log("`appendCallback` hook is deprecated and will be removed in the next major release. Use `rendered` hook instead", "warn");
                                    try {
                                        this.toolInstance[t].call(this.toolInstance, e);
                                    } catch (e) {
                                        h.log("Error during '".concat(t, "' call: ").concat(e.message), "error");
                                    }
                                }
                            }
                        },
                        {
                            key: "mergeWith",
                            value: (w = (0, r15.default)(o20.default.mark(function t86(e) {
                                return o20.default.wrap(function(t) {
                                    for(;;)switch(t.prev = t.next){
                                        case 0:
                                            return t.next = 2, this.toolInstance.merge(e);
                                        case 2:
                                        case "end":
                                            return t.stop();
                                    }
                                }, t86, this);
                            })), function(t) {
                                return w.apply(this, arguments);
                            })
                        },
                        {
                            key: "save",
                            value: (k = (0, r15.default)(o20.default.mark(function t87() {
                                var n35, r, a, s, l = this;
                                return o20.default.wrap(function(t88) {
                                    for(;;)switch(t88.prev = t88.next){
                                        case 0:
                                            return t88.next = 2, this.toolInstance.save(this.pluginsContent);
                                        case 2:
                                            return n35 = t88.sent, r = this.unavailableTunesData, [].concat((0, i14.default)(this.tunesInstances.entries()), (0, i14.default)(this.defaultTunesInstances.entries())).forEach(function(t) {
                                                var n = (0, e54.default)(t, 2), o = n[0], i = n[1];
                                                if (h.isFunction(i.save)) try {
                                                    r[o] = i.save();
                                                } catch (t89) {
                                                    h.log("Tune ".concat(i.constructor.name, " save method throws an Error %o"), "warn", t89);
                                                }
                                            }), a = window.performance.now(), t88.abrupt("return", Promise.resolve(n35).then(function(t) {
                                                return s = window.performance.now(), {
                                                    id: l.id,
                                                    tool: l.name,
                                                    data: t,
                                                    tunes: r,
                                                    time: s - a
                                                };
                                            }).catch(function(t) {
                                                h.log("Saving proccess for ".concat(l.name, " tool failed due to the ").concat(t), "log", "red");
                                            }));
                                        case 7:
                                        case "end":
                                            return t88.stop();
                                    }
                                }, t87, this);
                            })), function() {
                                return k.apply(this, arguments);
                            })
                        },
                        {
                            key: "validate",
                            value: (m = (0, r15.default)(o20.default.mark(function t90(e) {
                                var n;
                                return o20.default.wrap(function(t) {
                                    for(;;)switch(t.prev = t.next){
                                        case 0:
                                            if (n = !0, !(this.toolInstance.validate instanceof Function)) {
                                                t.next = 5;
                                                break;
                                            }
                                            return t.next = 4, this.toolInstance.validate(e);
                                        case 4:
                                            n = t.sent;
                                        case 5:
                                            return t.abrupt("return", n);
                                        case 6:
                                        case "end":
                                            return t.stop();
                                    }
                                }, t90, this);
                            })), function(t) {
                                return m.apply(this, arguments);
                            })
                        },
                        {
                            key: "renderTunes",
                            value: function() {
                                var t91 = document.createDocumentFragment(), e56 = document.createDocumentFragment();
                                return this.tunesInstances.forEach(function(e) {
                                    p.default.append(t91, e.render());
                                }), this.defaultTunesInstances.forEach(function(t) {
                                    p.default.append(e56, t.render());
                                }), [
                                    t91,
                                    e56
                                ];
                            }
                        },
                        {
                            key: "updateCurrentInput",
                            value: function() {
                                this.currentInput = p.default.isNativeInput(document.activeElement) || !g.default.anchorNode ? document.activeElement : g.default.anchorNode;
                            }
                        },
                        {
                            key: "willSelect",
                            value: function() {
                                this.mutationObserver.observe(this.holder.firstElementChild, {
                                    childList: !0,
                                    subtree: !0,
                                    characterData: !0,
                                    attributes: !0
                                }), this.addInputEvents();
                            }
                        },
                        {
                            key: "willUnselect",
                            value: function() {
                                this.mutationObserver.disconnect(), this.removeInputEvents();
                            }
                        },
                        {
                            key: "dispatchChange",
                            value: function() {
                                this.didMutated();
                            }
                        },
                        {
                            key: "destroy",
                            value: function() {
                                (0, c4.default)((0, d.default)(T.prototype), "destroy", this).call(this), h.isFunction(this.toolInstance.destroy) && this.toolInstance.destroy();
                            }
                        },
                        {
                            key: "renderSettings",
                            value: function() {
                                if (h.isFunction(this.toolInstance.renderSettings)) return this.toolInstance.renderSettings();
                            }
                        },
                        {
                            key: "getActiveToolboxEntry",
                            value: (y = (0, r15.default)(o20.default.mark(function t92() {
                                var n36, r, i15;
                                return o20.default.wrap(function(t93) {
                                    for(;;)switch(t93.prev = t93.next){
                                        case 0:
                                            if (1 !== (n36 = this.tool.toolbox).length) {
                                                t93.next = 3;
                                                break;
                                            }
                                            return t93.abrupt("return", Promise.resolve(this.tool.toolbox[0]));
                                        case 3:
                                            return t93.next = 5, this.data;
                                        case 5:
                                            return r = t93.sent, i15 = n36, t93.abrupt("return", i15.find(function(t94) {
                                                return Object.entries(t94.data).some(function(t) {
                                                    var n = (0, e54.default)(t, 2), o = n[0], i = n[1];
                                                    return r[o] && h.equals(r[o], i);
                                                });
                                            }));
                                        case 8:
                                        case "end":
                                            return t93.stop();
                                    }
                                }, t92, this);
                            })), function() {
                                return y.apply(this, arguments);
                            })
                        },
                        {
                            key: "compose",
                            value: function() {
                                var t95 = p.default.make("div", T.CSS.wrapper), e57 = p.default.make("div", T.CSS.content), n = this.toolInstance.render();
                                e57.appendChild(n);
                                var o = e57;
                                return [].concat((0, i14.default)(this.tunesInstances.values()), (0, i14.default)(this.defaultTunesInstances.values())).forEach(function(t) {
                                    if (h.isFunction(t.wrap)) try {
                                        o = t.wrap(o);
                                    } catch (e) {
                                        h.log("Tune ".concat(t.constructor.name, " wrap method throws an Error %o"), "warn", e);
                                    }
                                }), t95.appendChild(o), t95;
                            }
                        },
                        {
                            key: "composeTunes",
                            value: function(t96) {
                                var n = this;
                                Array.from(this.tunes.values()).forEach(function(e) {
                                    (e.isInternal ? n.defaultTunesInstances : n.tunesInstances).set(e.name, e.create(t96[e.name], n.blockAPI));
                                }), Object.entries(t96).forEach(function(t) {
                                    var o = (0, e54.default)(t, 2), r = o[0], i = o[1];
                                    n.tunesInstances.has(r) || (n.unavailableTunesData[r] = i);
                                });
                            }
                        },
                        {
                            key: "addInputEvents",
                            value: function() {
                                var t = this;
                                this.inputs.forEach(function(e) {
                                    e.addEventListener("focus", t.handleFocus), p.default.isNativeInput(e) && e.addEventListener("input", t.didMutated);
                                });
                            }
                        },
                        {
                            key: "removeInputEvents",
                            value: function() {
                                var t = this;
                                this.inputs.forEach(function(e) {
                                    e.removeEventListener("focus", t.handleFocus), p.default.isNativeInput(e) && e.removeEventListener("input", t.didMutated);
                                });
                            }
                        },
                        {
                            key: "inputs",
                            get: function() {
                                if (0 !== this.cachedInputs.length) return this.cachedInputs;
                                var t = p.default.findAllInputs(this.holder);
                                return this.inputIndex > t.length - 1 && (this.inputIndex = t.length - 1), this.cachedInputs = t, t;
                            }
                        },
                        {
                            key: "currentInput",
                            get: function() {
                                return this.inputs[this.inputIndex];
                            },
                            set: function(t) {
                                var e58 = this.inputs.findIndex(function(e) {
                                    return e === t || e.contains(t);
                                });
                                -1 !== e58 && (this.inputIndex = e58);
                            }
                        },
                        {
                            key: "firstInput",
                            get: function() {
                                return this.inputs[0];
                            }
                        },
                        {
                            key: "lastInput",
                            get: function() {
                                var t = this.inputs;
                                return t[t.length - 1];
                            }
                        },
                        {
                            key: "nextInput",
                            get: function() {
                                return this.inputs[this.inputIndex + 1];
                            }
                        },
                        {
                            key: "previousInput",
                            get: function() {
                                return this.inputs[this.inputIndex - 1];
                            }
                        },
                        {
                            key: "data",
                            get: function() {
                                return this.save().then(function(t) {
                                    return t && !h.isEmpty(t.data) ? t.data : {};
                                });
                            }
                        },
                        {
                            key: "sanitize",
                            get: function() {
                                return this.tool.sanitizeConfig;
                            }
                        },
                        {
                            key: "mergeable",
                            get: function() {
                                return h.isFunction(this.toolInstance.merge);
                            }
                        },
                        {
                            key: "isEmpty",
                            get: function() {
                                var t = p.default.isEmpty(this.pluginsContent), e = !this.hasMedia;
                                return t && e;
                            }
                        },
                        {
                            key: "hasMedia",
                            get: function() {
                                return !!this.holder.querySelector([
                                    "img",
                                    "iframe",
                                    "video",
                                    "audio",
                                    "source",
                                    "input",
                                    "textarea",
                                    "twitterwidget"
                                ].join(","));
                            }
                        },
                        {
                            key: "focused",
                            set: function(t) {
                                this.holder.classList.toggle(T.CSS.focused, t);
                            },
                            get: function() {
                                return this.holder.classList.contains(T.CSS.focused);
                            }
                        },
                        {
                            key: "selected",
                            set: function(t) {
                                t ? (this.holder.classList.add(T.CSS.selected), g.default.addFakeCursor(this.holder)) : (this.holder.classList.remove(T.CSS.selected), g.default.removeFakeCursor(this.holder));
                            },
                            get: function() {
                                return this.holder.classList.contains(T.CSS.selected);
                            }
                        },
                        {
                            key: "stretched",
                            set: function(t) {
                                this.holder.classList.toggle(T.CSS.wrapperStretched, t);
                            },
                            get: function() {
                                return this.holder.classList.contains(T.CSS.wrapperStretched);
                            }
                        },
                        {
                            key: "dropTarget",
                            set: function(t) {
                                this.holder.classList.toggle(T.CSS.dropTarget, t);
                            }
                        },
                        {
                            key: "pluginsContent",
                            get: function() {
                                var t = this.holder.querySelector(".".concat(T.CSS.content));
                                if (t && t.childNodes.length) for(var e = t.childNodes.length - 1; e >= 0; e--){
                                    var n = t.childNodes[e];
                                    if (!p.default.isExtensionNode(n)) return n;
                                }
                                return null;
                            }
                        }
                    ], [
                        {
                            key: "CSS",
                            get: function() {
                                return {
                                    wrapper: "ce-block",
                                    wrapperStretched: "ce-block--stretched",
                                    content: "ce-block__content",
                                    focused: "ce-block--focused",
                                    selected: "ce-block--selected",
                                    dropTarget: "ce-block--drop-target"
                                };
                            }
                        }
                    ]), T;
                }(y4.default);
                t81.default = w3, w3.displayName = "Block";
            }) ? o19.apply(e53, r14) : o19) || (t80.exports = i13);
        },
        function(t97, e59, n37) {
            var o22, r16, i16;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r16 = [
                e59,
                n37(2),
                n37(3),
                n37(381),
                n37(7)
            ], void 0 === (i16 = "function" == typeof (o22 = function(o, r, i, a, s) {
                "use strict";
                var l = n37(8), c = n37(1);
                Object.defineProperty(o, "__esModule", {
                    value: !0
                }), o.default = void 0, r = c(r), i = c(i), a = c(a), s = l(s);
                var u = function() {
                    function t98(e60) {
                        var n = this;
                        (0, r.default)(this, t98), this.iterator = null, this.activated = !1, this.onKeyDown = function(e) {
                            if (n.isEventReadyForHandling(e)) switch(t98.usedKeys.includes(e.keyCode) && e.preventDefault(), e.keyCode){
                                case s.keyCodes.TAB:
                                    n.handleTabPress(e);
                                    break;
                                case s.keyCodes.LEFT:
                                case s.keyCodes.UP:
                                    n.flipLeft();
                                    break;
                                case s.keyCodes.RIGHT:
                                case s.keyCodes.DOWN:
                                    n.flipRight();
                                    break;
                                case s.keyCodes.ENTER:
                                    n.handleEnterPress(e);
                            }
                        }, this.iterator = new a.default(e60.items, e60.focusedItemClass), this.activateCallback = e60.activateCallback, this.allowedKeys = e60.allowedKeys || t98.usedKeys;
                    }
                    return (0, i.default)(t98, [
                        {
                            key: "activate",
                            value: function(t) {
                                this.activated = !0, t && this.iterator.setItems(t), document.addEventListener("keydown", this.onKeyDown);
                            }
                        },
                        {
                            key: "deactivate",
                            value: function() {
                                this.activated = !1, this.dropCursor(), document.removeEventListener("keydown", this.onKeyDown);
                            }
                        },
                        {
                            key: "focusFirst",
                            value: function() {
                                this.dropCursor(), this.flipRight();
                            }
                        },
                        {
                            key: "flipLeft",
                            value: function() {
                                this.iterator.previous(), this.flipCallback();
                            }
                        },
                        {
                            key: "flipRight",
                            value: function() {
                                this.iterator.next(), this.flipCallback();
                            }
                        },
                        {
                            key: "hasFocus",
                            value: function() {
                                return !!this.iterator.currentItem;
                            }
                        },
                        {
                            key: "dropCursor",
                            value: function() {
                                this.iterator.dropCursor();
                            }
                        },
                        {
                            key: "isEventReadyForHandling",
                            value: function(t) {
                                return this.activated && this.allowedKeys.includes(t.keyCode);
                            }
                        },
                        {
                            key: "handleTabPress",
                            value: function(t) {
                                switch(t.shiftKey ? a.default.directions.LEFT : a.default.directions.RIGHT){
                                    case a.default.directions.RIGHT:
                                        this.flipRight();
                                        break;
                                    case a.default.directions.LEFT:
                                        this.flipLeft();
                                }
                            }
                        },
                        {
                            key: "handleEnterPress",
                            value: function(t) {
                                this.activated && (this.iterator.currentItem && this.iterator.currentItem.click(), s.isFunction(this.activateCallback) && this.activateCallback(this.iterator.currentItem), t.preventDefault(), t.stopPropagation());
                            }
                        },
                        {
                            key: "flipCallback",
                            value: function() {
                                this.iterator.currentItem && this.iterator.currentItem.scrollIntoViewIfNeeded();
                            }
                        }
                    ], [
                        {
                            key: "usedKeys",
                            get: function() {
                                return [
                                    s.keyCodes.TAB,
                                    s.keyCodes.LEFT,
                                    s.keyCodes.RIGHT,
                                    s.keyCodes.ENTER,
                                    s.keyCodes.UP,
                                    s.keyCodes.DOWN
                                ];
                            }
                        }
                    ]), t98;
                }();
                o.default = u, u.displayName = "Flipper", t97.exports = e59.default;
            }) ? o22.apply(e59, r16) : o22) || (t97.exports = i16);
        },
        function(t99, e, n) {
            var o = n(37);
            t99.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
                return "String" == o(t) ? t.split("") : Object(t);
            };
        },
        function(t, e) {
            e.f = ({}).propertyIsEnumerable;
        },
        function(t100, e61, n38) {
            var o = n38(37), r = n38(15)("toStringTag"), i = "Arguments" == o(function() {
                return arguments;
            }());
            t100.exports = function(t101) {
                var e62, n, a;
                return void 0 === t101 ? "Undefined" : null === t101 ? "Null" : "string" == typeof (n = function(t, e) {
                    try {
                        return t[e];
                    } catch (t102) {}
                }(e62 = Object(t101), r)) ? n : i ? o(e62) : "Object" == (a = o(e62)) && "function" == typeof e62.callee ? "Arguments" : a;
            };
        },
        function(t103, e63, n39) {
            var o = n39(12), r = n39(32), i = n39(15)("species");
            t103.exports = function(t, e) {
                var n, a = o(t).constructor;
                return void 0 === a || null == (n = o(a)[i]) ? e : r(n);
            };
        },
        function(t104, e64, n40) {
            var o23, r17, i17;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r17 = [
                e64,
                n40(7),
                n40(379)
            ], void 0 === (i17 = "function" == typeof (o23 = function(t105, e65, o24) {
                "use strict";
                var r18 = n40(1), i18 = n40(8);
                function a7(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = {
                        tags: e
                    }, r = new o24.default(n);
                    return r.clean(t);
                }
                function s(t106, n41) {
                    var o25, r19, i19;
                    return Array.isArray(t106) ? (i19 = n41, t106.map(function(t) {
                        return s(t, i19);
                    })) : e65.isObject(t106) ? function(t, n) {
                        var o, r = {};
                        for(var i in t)if (Object.prototype.hasOwnProperty.call(t, i)) {
                            var a = t[i], l = (o = n[i], e65.isObject(o) || e65.isBoolean(o) || e65.isFunction(o) ? n[i] : n);
                            r[i] = s(a, l);
                        }
                        return r;
                    }(t106, n41) : e65.isString(t106) ? (o25 = t106, r19 = n41, e65.isObject(r19) ? a7(o25, r19) : !1 === r19 ? a7(o25, {}) : o25) : t106;
                }
                Object.defineProperty(t105, "__esModule", {
                    value: !0
                }), t105.sanitizeBlocks = function(t107, n) {
                    return t107.map(function(t) {
                        var o = e65.isFunction(n) ? n(t.tool) : n;
                        return e65.isEmpty(o) || (t.data = s(t.data, o)), t;
                    });
                }, t105.clean = a7, e65 = i18(e65), o24 = r18(o24);
            }) ? o23.apply(e64, r17) : o23) || (t104.exports = i17);
        },
        function(t108, e66, n42) {
            var o26, r20, i20;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r20 = [
                e66,
                n42(2),
                n42(3),
                n42(7)
            ], void 0 === (i20 = "function" == typeof (o26 = function(t109, e, o27, r21) {
                "use strict";
                var i21, a8, s9, l7, c5, u5, f = n42(8), d = n42(1);
                Object.defineProperty(t109, "__esModule", {
                    value: !0
                }), t109.default = t109.InternalTuneSettings = t109.InternalInlineToolSettings = t109.InternalBlockToolSettings = t109.CommonInternalSettings = t109.UserSettings = t109.ToolType = void 0, e = d(e), o27 = d(o27), r21 = f(r21), t109.ToolType = i21, function(t) {
                    t[t.Block = 0] = "Block", t[t.Inline = 1] = "Inline", t[t.Tune = 2] = "Tune";
                }(i21 || (t109.ToolType = i21 = {})), t109.UserSettings = a8, function(t) {
                    t.Shortcut = "shortcut", t.Toolbox = "toolbox", t.EnabledInlineTools = "inlineToolbar", t.EnabledBlockTunes = "tunes", t.Config = "config";
                }(a8 || (t109.UserSettings = a8 = {})), t109.CommonInternalSettings = s9, function(t) {
                    t.Shortcut = "shortcut", t.SanitizeConfig = "sanitize";
                }(s9 || (t109.CommonInternalSettings = s9 = {})), t109.InternalBlockToolSettings = l7, function(t) {
                    t.IsEnabledLineBreaks = "enableLineBreaks", t.Toolbox = "toolbox", t.ConversionConfig = "conversionConfig", t.IsReadOnlySupported = "isReadOnlySupported", t.PasteConfig = "pasteConfig";
                }(l7 || (t109.InternalBlockToolSettings = l7 = {})), t109.InternalInlineToolSettings = c5, function(t) {
                    t.IsInline = "isInline", t.Title = "title";
                }(c5 || (t109.InternalInlineToolSettings = c5 = {})), t109.InternalTuneSettings = u5, function(t) {
                    t.IsTune = "isTune";
                }(u5 || (t109.InternalTuneSettings = u5 = {}));
                var p = function() {
                    function t110(n) {
                        var o = n.name, r = n.constructable, i = n.config, a = n.api, s = n.isDefault, l = n.isInternal, c = void 0 !== l && l, u = n.defaultPlaceholder;
                        (0, e.default)(this, t110), this.api = a, this.name = o, this.constructable = r, this.config = i, this.isDefault = s, this.isInternal = c, this.defaultPlaceholder = u;
                    }
                    return (0, o27.default)(t110, [
                        {
                            key: "reset",
                            value: function() {
                                if (r21.isFunction(this.constructable.reset)) return this.constructable.reset();
                            }
                        },
                        {
                            key: "prepare",
                            value: function() {
                                if (r21.isFunction(this.constructable.prepare)) return this.constructable.prepare({
                                    toolName: this.name,
                                    config: this.settings
                                });
                            }
                        },
                        {
                            key: "isInline",
                            value: function() {
                                return this.type === i21.Inline;
                            }
                        },
                        {
                            key: "isBlock",
                            value: function() {
                                return this.type === i21.Block;
                            }
                        },
                        {
                            key: "isTune",
                            value: function() {
                                return this.type === i21.Tune;
                            }
                        },
                        {
                            key: "settings",
                            get: function() {
                                var t = this.config[a8.Config] || {};
                                return this.isDefault && !("placeholder" in t) && this.defaultPlaceholder && (t.placeholder = this.defaultPlaceholder), t;
                            }
                        },
                        {
                            key: "shortcut",
                            get: function() {
                                var t = this.constructable[s9.Shortcut];
                                return this.config[a8.Shortcut] || t;
                            }
                        },
                        {
                            key: "sanitizeConfig",
                            get: function() {
                                return this.constructable[s9.SanitizeConfig] || {};
                            }
                        }
                    ]), t110;
                }();
                t109.default = p, p.displayName = "BaseTool";
            }) ? o26.apply(e66, r20) : o26) || (t108.exports = i20);
        },
        function(t111, e67, n) {
            var o = n(17), r = n(10), i = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
            (t111.exports = function(t, e) {
                return i[t] || (i[t] = void 0 !== e ? e : {});
            })("versions", []).push({
                version: o.version,
                mode: n(45) ? "pure" : "global",
                copyright: "\xa9 2019 Denis Pushkarev (zloirock.ru)"
            });
        },
        function(t112, e68, n43) {
            var o = n43(28), r = n43(16), i = n43(47);
            t112.exports = function(t) {
                return function(e, n, a) {
                    var s, l = o(e), c = r(l.length), u = i(a, c);
                    if (t && n != n) {
                        for(; c > u;)if ((s = l[u++]) != s) return !0;
                    } else for(; c > u; u++)if ((t || u in l) && l[u] === n) return t || u || 0;
                    return !t && -1;
                };
            };
        },
        function(t, e) {
            e.f = Object.getOwnPropertySymbols;
        },
        function(t113, e, n) {
            var o = n(37);
            t113.exports = Array.isArray || function(t) {
                return "Array" == o(t);
            };
        },
        function(t115, e69, n44) {
            var o = n44(15)("iterator"), r = !1;
            try {
                var i = [
                    7
                ][o]();
                i.return = function() {
                    r = !0;
                }, Array.from(i, function() {
                    throw 2;
                });
            } catch (t114) {}
            t115.exports = function(t, e) {
                if (!e && !r) return !1;
                var n = !1;
                try {
                    var i = [
                        7
                    ], a = i[o]();
                    a.next = function() {
                        return {
                            done: n = !0
                        };
                    }, i[o] = function() {
                        return a;
                    }, t(i);
                } catch (t116) {}
                return n;
            };
        },
        function(t117, e70, n) {
            "use strict";
            var o = n(12);
            t117.exports = function() {
                var t = o(this), e = "";
                return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.unicode && (e += "u"), t.sticky && (e += "y"), e;
            };
        },
        function(t118, e71, n45) {
            "use strict";
            var o = n45(65), r = RegExp.prototype.exec;
            t118.exports = function(t, e) {
                var n = t.exec;
                if ("function" == typeof n) {
                    var i = n.call(t, e);
                    if ("object" != typeof i) throw new TypeError("RegExp exec method returned something other than an Object or null");
                    return i;
                }
                if ("RegExp" !== o(t)) throw new TypeError("RegExp#exec called on incompatible receiver");
                return r.call(t, e);
            };
        },
        function(t119, e72, n46) {
            "use strict";
            n46(136);
            var o28 = n46(23), r22 = n46(27), i = n46(11), a = n46(38), s = n46(15), l = n46(106), c = s("species"), u = !i(function() {
                var t120 = /./;
                return t120.exec = function() {
                    var t = [];
                    return t.groups = {
                        a: "7"
                    }, t;
                }, "7" !== "".replace(t120, "$<a>");
            }), f = function() {
                var t = /(?:)/, e = t.exec;
                t.exec = function() {
                    return e.apply(this, arguments);
                };
                var n = "ab".split(t);
                return 2 === n.length && "a" === n[0] && "b" === n[1];
            }();
            t119.exports = function(t121, e73, n47) {
                var d = s(t121), p = !i(function() {
                    var e = {};
                    return e[d] = function() {
                        return 7;
                    }, 7 != ""[t121](e);
                }), h = p ? !i(function() {
                    var e = !1, n = /a/;
                    return n.exec = function() {
                        return e = !0, null;
                    }, "split" === t121 && (n.constructor = {}, n.constructor[c] = function() {
                        return n;
                    }), n[d](""), !e;
                }) : void 0;
                if (!p || !h || "replace" === t121 && !u || "split" === t121 && !f) {
                    var v = /./[d], g = n47(a, d, ""[t121], function(t, e, n, o, r) {
                        return e.exec === l ? p && !r ? {
                            done: !0,
                            value: v.call(e, n, o)
                        } : {
                            done: !0,
                            value: t.call(n, e, o)
                        } : {
                            done: !1
                        };
                    }), y = g[0], b = g[1];
                    o28(String.prototype, t121, y), r22(RegExp.prototype, d, 2 == e73 ? function(t, e) {
                        return b.call(t, this, e);
                    } : function(t) {
                        return b.call(t, this);
                    });
                }
            };
        },
        function(t122, e74, n48) {
            var o = n48(31), r = n48(131), i = n48(101), a = n48(12), s = n48(16), l = n48(103), c = {}, u = {};
            (e74 = t122.exports = function(t, e, n, f, d) {
                var p, h, v, g, y = d ? function() {
                    return t;
                } : l(t), b = o(n, f, e ? 2 : 1), m = 0;
                if ("function" != typeof y) throw TypeError(t + " is not iterable!");
                if (i(y)) {
                    for(p = s(t.length); p > m; m++)if ((g = e ? b(a(h = t[m])[0], h[1]) : b(t[m])) === c || g === u) return g;
                } else for(v = y.call(t); !(h = v.next()).done;)if ((g = r(v, b, h.value, e)) === c || g === u) return g;
            }).BREAK = c, e74.RETURN = u;
        },
        function(t, e, n) {
            var o = n(10).navigator;
            t.exports = o && o.userAgent || "";
        },
        function(t123, e75, n49) {
            "use strict";
            var o29 = n49(10), r = n49(0), i = n49(23), a = n49(58), s = n49(41), l = n49(77), c = n49(57), u = n49(13), f = n49(11), d = n49(73), p = n49(53), h = n49(92);
            t123.exports = function(t124, e76, n50, v, g, y) {
                var b = o29[t124], m = b, k = g ? "set" : "add", x = m && m.prototype, w = {}, S = function(t125) {
                    var e = x[t125];
                    i(x, t125, "delete" == t125 || "has" == t125 ? function(t) {
                        return !(y && !u(t)) && e.call(this, 0 === t ? 0 : t);
                    } : "get" == t125 ? function(t) {
                        return y && !u(t) ? void 0 : e.call(this, 0 === t ? 0 : t);
                    } : "add" == t125 ? function(t) {
                        return e.call(this, 0 === t ? 0 : t), this;
                    } : function(t, n) {
                        return e.call(this, 0 === t ? 0 : t, n), this;
                    });
                };
                if ("function" == typeof m && (y || x.forEach && !f(function() {
                    (new m).entries().next();
                }))) {
                    var T = new m, E = T[k](y ? {} : -0, 1) != T, B = f(function() {
                        T.has(1);
                    }), C = d(function(t) {
                        new m(t);
                    }), _ = !y && f(function() {
                        for(var t = new m, e = 5; e--;)t[k](e, e);
                        return !t.has(-0);
                    });
                    C || ((m = e76(function(e, n) {
                        c(e, m, t124);
                        var o = h(new b, e, m);
                        return null != n && l(n, g, o[k], o), o;
                    })).prototype = x, x.constructor = m), (B || _) && (S("delete"), S("has"), g && S("get")), (_ || E) && S(k), y && x.clear && delete x.clear;
                } else m = v.getConstructor(e76, t124, g, k), a(m.prototype, n50), s.NEED = !0;
                return p(m, t124), w[t124] = m, r(r.G + r.W + r.F * (m != b), w), y || v.setStrong(m, t124, g), m;
            };
        },
        function(t, e, n) {
            for(var o, r = n(10), i = n(27), a = n(44), s = a("typed_array"), l = a("view"), c = !(!r.ArrayBuffer || !r.DataView), u = c, f = 0, d = "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(","); f < 9;)(o = r[d[f++]]) ? (i(o.prototype, s, !0), i(o.prototype, l, !0)) : u = !1;
            t.exports = {
                ABV: c,
                CONSTR: u,
                TYPED: s,
                VIEW: l
            };
        },
        function(t126, e77, n51) {
            var o30, r23, i22;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r23 = [
                e77,
                n51(2),
                n51(3),
                n51(7)
            ], void 0 === (i22 = "function" == typeof (o30 = function(o31, r24, i23, a9) {
                "use strict";
                var s = n51(1);
                Object.defineProperty(o31, "__esModule", {
                    value: !0
                }), o31.default = void 0, r24 = s(r24), i23 = s(i23);
                var l = function() {
                    function t127() {
                        (0, r24.default)(this, t127), this.subscribers = {};
                    }
                    return (0, i23.default)(t127, [
                        {
                            key: "on",
                            value: function(t, e) {
                                t in this.subscribers || (this.subscribers[t] = []), this.subscribers[t].push(e);
                            }
                        },
                        {
                            key: "once",
                            value: function(t, e) {
                                var n = this;
                                t in this.subscribers || (this.subscribers[t] = []), this.subscribers[t].push(function o(r) {
                                    var i = e(r), a = n.subscribers[t].indexOf(o);
                                    return -1 !== a && n.subscribers[t].splice(a, 1), i;
                                });
                            }
                        },
                        {
                            key: "emit",
                            value: function(t128, e78) {
                                !(0, a9.isEmpty)(this.subscribers) && this.subscribers[t128] && this.subscribers[t128].reduce(function(t, e) {
                                    return e(t) || t;
                                }, e78);
                            }
                        },
                        {
                            key: "off",
                            value: function(t, e) {
                                for(var n = 0; n < this.subscribers[t].length; n++)if (this.subscribers[t][n] === e) {
                                    delete this.subscribers[t][n];
                                    break;
                                }
                            }
                        },
                        {
                            key: "destroy",
                            value: function() {
                                this.subscribers = null;
                            }
                        }
                    ]), t127;
                }();
                o31.default = l, l.displayName = "EventsDispatcher", t126.exports = e77.default;
            }) ? o30.apply(e77, r23) : o30) || (t126.exports = i22);
        },
        function(t129, e79, n52) {
            var o32, r25, i24;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r25 = [
                e79,
                n52(2),
                n52(3),
                n52(5),
                n52(6),
                n52(4),
                n52(9)
            ], void 0 === (i24 = "function" == typeof (o32 = function(o33, r, i, a, s, l, c) {
                "use strict";
                var u = n52(1);
                function f() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o33, "__esModule", {
                    value: !0
                }), o33.default = void 0, r = u(r), i = u(i), a = u(a), s = u(s), l = u(l);
                var d = function(t130) {
                    (0, a.default)(o34, t130);
                    var e, n53 = (e = o34, function() {
                        var t, n = (0, l.default)(e);
                        if (f()) {
                            var o = (0, l.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, s.default)(this, t);
                    });
                    function o34() {
                        return (0, r.default)(this, o34), n53.apply(this, arguments);
                    }
                    return (0, i.default)(o34, [
                        {
                            key: "getMethodsForTool",
                            value: function(t) {
                                return Object.assign(this.methods, {
                                    i18n: this.Editor.I18nAPI.getMethodsForTool(t)
                                });
                            }
                        },
                        {
                            key: "methods",
                            get: function() {
                                return {
                                    blocks: this.Editor.BlocksAPI.methods,
                                    caret: this.Editor.CaretAPI.methods,
                                    events: this.Editor.EventsAPI.methods,
                                    listeners: this.Editor.ListenersAPI.methods,
                                    notifier: this.Editor.NotifierAPI.methods,
                                    sanitizer: this.Editor.SanitizerAPI.methods,
                                    saver: this.Editor.SaverAPI.methods,
                                    selection: this.Editor.SelectionAPI.methods,
                                    styles: this.Editor.StylesAPI.classes,
                                    toolbar: this.Editor.ToolbarAPI.methods,
                                    inlineToolbar: this.Editor.InlineToolbarAPI.methods,
                                    tooltip: this.Editor.TooltipAPI.methods,
                                    i18n: this.Editor.I18nAPI.methods,
                                    readOnly: this.Editor.ReadOnlyAPI.methods,
                                    ui: this.Editor.UiAPI.methods
                                };
                            }
                        }
                    ]), o34;
                }((c = u(c)).default);
                o33.default = d, d.displayName = "API", t129.exports = e79.default;
            }) ? o32.apply(e79, r25) : o32) || (t129.exports = i24);
        },
        function(t131, e80, n54) {
            var o35, r26, i25;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r26 = [
                e80,
                n54(2),
                n54(3),
                n54(5),
                n54(6),
                n54(4),
                n54(9),
                n54(14),
                n54(7),
                n54(60),
                n54(84),
                n54(114),
                n54(385)
            ], void 0 === (i25 = "function" == typeof (o35 = function(o36, r27, i26, a10, s10, l, c, u, f, d, p, h, v) {
                "use strict";
                var g = n54(8), y = n54(1);
                function b() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o36, "__esModule", {
                    value: !0
                }), o36.default = void 0, r27 = y(r27), i26 = y(i26), a10 = y(a10), s10 = y(s10), l = y(l), c = y(c), u = y(u), f = g(f), d = y(d), h = y(h), v = g(v);
                var m = function(t132) {
                    (0, a10.default)(o37, t132);
                    var e81, n55 = (e81 = o37, function() {
                        var t, n = (0, l.default)(e81);
                        if (b()) {
                            var o = (0, l.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, s10.default)(this, t);
                    });
                    function o37(t) {
                        var e, i = t.config, a = t.eventsDispatcher;
                        return (0, r27.default)(this, o37), (e = n55.call(this, {
                            config: i,
                            eventsDispatcher: a
                        })).tooltip = new h.default, e;
                    }
                    return (0, i26.default)(o37, [
                        {
                            key: "toggleReadOnly",
                            value: function(t) {
                                t ? (this.destroy(), this.Editor.BlockSettings.destroy(), this.disableModuleBindings()) : (this.drawUI(), this.enableModuleBindings());
                            }
                        },
                        {
                            key: "moveAndOpen",
                            value: function() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.Editor.BlockManager.currentBlock;
                                if (this.toolboxInstance.close(), this.Editor.BlockSettings.close(), t) {
                                    this.hoveredBlock = t;
                                    var e, n = t.holder, o = this.Editor.UI.isMobile, r = t.pluginsContent, i = window.getComputedStyle(r), a = parseInt(i.paddingTop, 10), s = n.offsetHeight;
                                    e = o ? n.offsetTop + s : n.offsetTop + a, this.nodes.wrapper.style.top = "".concat(Math.floor(e), "px"), 1 === this.Editor.BlockManager.blocks.length && t.isEmpty ? this.blockTunesToggler.hide() : this.blockTunesToggler.show(), this.open();
                                }
                            }
                        },
                        {
                            key: "close",
                            value: function() {
                                this.Editor.ReadOnly.isEnabled || (this.nodes.wrapper.classList.remove(this.CSS.toolbarOpened), this.blockActions.hide(), this.toolboxInstance.close(), this.Editor.BlockSettings.close());
                            }
                        },
                        {
                            key: "open",
                            value: function() {
                                var t = this, e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                                !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], f.delay(function() {
                                    t.nodes.wrapper.classList.add(t.CSS.toolbarOpened), e ? t.blockActions.show() : t.blockActions.hide();
                                }, 50)();
                            }
                        },
                        {
                            key: "make",
                            value: function() {
                                var t = this;
                                this.nodes.wrapper = u.default.make("div", this.CSS.toolbar), [
                                    "content",
                                    "actions"
                                ].forEach(function(e) {
                                    t.nodes[e] = u.default.make("div", t.CSS[e]);
                                }), u.default.append(this.nodes.wrapper, this.nodes.content), u.default.append(this.nodes.content, this.nodes.actions), this.nodes.plusButton = u.default.make("div", this.CSS.plusButton), u.default.append(this.nodes.plusButton, u.default.svg("plus", 16, 16)), u.default.append(this.nodes.actions, this.nodes.plusButton), this.readOnlyMutableListeners.on(this.nodes.plusButton, "click", function() {
                                    t.tooltip.hide(!0), t.plusButtonClicked();
                                }, !1);
                                var e82 = u.default.make("div");
                                e82.appendChild(document.createTextNode(d.default.ui(p.I18nInternalNS.ui.toolbar.toolbox, "Add"))), e82.appendChild(u.default.make("div", this.CSS.plusButtonShortcut, {
                                    textContent: "\u21E5 Tab"
                                })), this.tooltip.onHover(this.nodes.plusButton, e82, {
                                    hidingDelay: 400
                                }), this.nodes.settingsToggler = u.default.make("span", this.CSS.settingsToggler);
                                var n = u.default.svg("dots", 16, 16);
                                u.default.append(this.nodes.settingsToggler, n), u.default.append(this.nodes.actions, this.nodes.settingsToggler), this.tooltip.onHover(this.nodes.settingsToggler, d.default.ui(p.I18nInternalNS.ui.blockTunes.toggler, "Click to tune"), {
                                    hidingDelay: 400
                                }), u.default.append(this.nodes.actions, this.makeToolbox()), u.default.append(this.nodes.actions, this.Editor.BlockSettings.nodes.wrapper), u.default.append(this.Editor.UI.nodes.wrapper, this.nodes.wrapper);
                            }
                        },
                        {
                            key: "makeToolbox",
                            value: function() {
                                var t = this;
                                return this.toolboxInstance = new v.default({
                                    api: this.Editor.API.methods,
                                    tools: this.Editor.Tools.blockTools,
                                    i18nLabels: {
                                        filter: d.default.ui(p.I18nInternalNS.ui.toolbar.toolbox, "Filter"),
                                        nothingFound: d.default.ui(p.I18nInternalNS.ui.toolbar.toolbox, "Nothing found")
                                    }
                                }), this.toolboxInstance.on(v.ToolboxEvent.Opened, function() {
                                    t.Editor.UI.nodes.wrapper.classList.add(t.CSS.openedToolboxHolderModifier);
                                }), this.toolboxInstance.on(v.ToolboxEvent.Closed, function() {
                                    t.Editor.UI.nodes.wrapper.classList.remove(t.CSS.openedToolboxHolderModifier);
                                }), this.toolboxInstance.on(v.ToolboxEvent.BlockAdded, function(e) {
                                    var n = e.block, o = t.Editor, r = o.BlockManager, i = o.Caret, a = r.getBlockById(n.id);
                                    0 === a.inputs.length && (a === r.lastBlock ? (r.insertAtEnd(), i.setToBlock(r.lastBlock)) : i.setToBlock(r.nextBlock));
                                }), this.toolboxInstance.make();
                            }
                        },
                        {
                            key: "plusButtonClicked",
                            value: function() {
                                this.Editor.BlockManager.currentBlock = this.hoveredBlock, this.toolboxInstance.toggle();
                            }
                        },
                        {
                            key: "enableModuleBindings",
                            value: function() {
                                var t = this;
                                this.readOnlyMutableListeners.on(this.nodes.settingsToggler, "mousedown", function(e) {
                                    e.stopPropagation(), t.settingsTogglerClicked(), t.toolboxInstance.close(), t.tooltip.hide(!0);
                                }, !0), f.isMobileScreen() || this.eventsDispatcher.on(this.Editor.UI.events.blockHovered, function(e) {
                                    t.Editor.BlockSettings.opened || t.toolboxInstance.opened || t.moveAndOpen(e.block);
                                });
                            }
                        },
                        {
                            key: "disableModuleBindings",
                            value: function() {
                                this.readOnlyMutableListeners.clearAll();
                            }
                        },
                        {
                            key: "settingsTogglerClicked",
                            value: function() {
                                this.Editor.BlockManager.currentBlock = this.hoveredBlock, this.Editor.BlockSettings.opened ? this.Editor.BlockSettings.close() : this.Editor.BlockSettings.open(this.hoveredBlock);
                            }
                        },
                        {
                            key: "drawUI",
                            value: function() {
                                this.Editor.BlockSettings.make(), this.make();
                            }
                        },
                        {
                            key: "destroy",
                            value: function() {
                                this.removeAllNodes(), this.toolboxInstance && this.toolboxInstance.destroy(), this.tooltip.destroy();
                            }
                        },
                        {
                            key: "CSS",
                            get: function() {
                                return {
                                    toolbar: "ce-toolbar",
                                    content: "ce-toolbar__content",
                                    actions: "ce-toolbar__actions",
                                    actionsOpened: "ce-toolbar__actions--opened",
                                    toolbarOpened: "ce-toolbar--opened",
                                    openedToolboxHolderModifier: "codex-editor--toolbox-opened",
                                    plusButton: "ce-toolbar__plus",
                                    plusButtonShortcut: "ce-toolbar__plus-shortcut",
                                    settingsToggler: "ce-toolbar__settings-btn",
                                    settingsTogglerHidden: "ce-toolbar__settings-btn--hidden"
                                };
                            }
                        },
                        {
                            key: "opened",
                            get: function() {
                                return this.nodes.wrapper.classList.contains(this.CSS.toolbarOpened);
                            }
                        },
                        {
                            key: "toolbox",
                            get: function() {
                                var t = this;
                                return {
                                    opened: this.toolboxInstance.opened,
                                    close: function() {
                                        t.toolboxInstance.close();
                                    },
                                    open: function() {
                                        t.Editor.BlockManager.currentBlock = t.hoveredBlock, t.toolboxInstance.open();
                                    },
                                    toggle: function() {
                                        return t.toolboxInstance.toggle();
                                    },
                                    hasFocus: function() {
                                        return t.toolboxInstance.hasFocus();
                                    }
                                };
                            }
                        },
                        {
                            key: "blockActions",
                            get: function() {
                                var t = this;
                                return {
                                    hide: function() {
                                        t.nodes.actions.classList.remove(t.CSS.actionsOpened);
                                    },
                                    show: function() {
                                        t.nodes.actions.classList.add(t.CSS.actionsOpened);
                                    }
                                };
                            }
                        },
                        {
                            key: "blockTunesToggler",
                            get: function() {
                                var t = this;
                                return {
                                    hide: function() {
                                        return t.nodes.settingsToggler.classList.add(t.CSS.settingsTogglerHidden);
                                    },
                                    show: function() {
                                        return t.nodes.settingsToggler.classList.remove(t.CSS.settingsTogglerHidden);
                                    }
                                };
                            }
                        }
                    ]), o37;
                }(c.default);
                o36.default = m, m.displayName = "Toolbar", t131.exports = e80.default;
            }) ? o35.apply(e80, r26) : o35) || (t131.exports = i25);
        },
        function(t133, e83, n56) {
            var o38, r28, i27;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r28 = [
                e83,
                n56(30),
                n56(150),
                n56(7)
            ], void 0 === (i27 = "function" == typeof (o38 = function(t134, e, o39, r) {
                "use strict";
                var i28 = n56(1);
                Object.defineProperty(t134, "__esModule", {
                    value: !0
                }), t134.I18nInternalNS = void 0, e = i28(e);
                var a11 = function t135(n57, o) {
                    var i = {};
                    return Object.entries(n57).forEach(function(n) {
                        var a = (0, e.default)(n, 2), s = a[0], l = a[1];
                        if ((0, r.isObject)(l)) {
                            var c = o ? "".concat(o, ".").concat(s) : s, u = Object.values(l).every(function(t) {
                                return (0, r.isString)(t);
                            });
                            i[s] = u ? c : t135(l, c);
                        } else i[s] = l;
                    }), i;
                }((o39 = i28(o39)).default);
                t134.I18nInternalNS = a11;
            }) ? o38.apply(e83, r28) : o38) || (t133.exports = i27);
        },
        function(t136, e, n) {
            var o = n(13), r = n(10).document, i = o(r) && o(r.createElement);
            t136.exports = function(t) {
                return i ? r.createElement(t) : {};
            };
        },
        function(t, e, n) {
            e.f = n(15);
        },
        function(t137, e, n) {
            var o = n(69)("keys"), r = n(44);
            t137.exports = function(t) {
                return o[t] || (o[t] = r(t));
            };
        },
        function(t, e) {
            t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
        },
        function(t, e, n) {
            var o = n(10).document;
            t.exports = o && o.documentElement;
        },
        function(t138, e84, n58) {
            var o40 = n58(13), r = n58(12), i = function(t, e) {
                if (r(t), !o40(e) && null !== e) throw TypeError(e + ": can't set as prototype!");
            };
            t138.exports = {
                set: Object.setPrototypeOf || ("__proto__" in {} ? function(t140, e, o) {
                    try {
                        (o = n58(31)(Function.call, n58(34).f(Object.prototype, "__proto__").set, 2))(t140, []), e = !(t140 instanceof Array);
                    } catch (t139) {
                        e = !0;
                    }
                    return function(t, n) {
                        return i(t, n), e ? t.__proto__ = n : o(t, n), t;
                    };
                }({}, !1) : void 0),
                check: i
            };
        },
        function(t, e) {
            t.exports = "	\n\v\f\r \xa0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";
        },
        function(t141, e85, n59) {
            var o = n59(13), r = n59(90).set;
            t141.exports = function(t, e, n) {
                var i, a = e.constructor;
                return a !== n && "function" == typeof a && (i = a.prototype) !== n.prototype && o(i) && r && r(t, i), t;
            };
        },
        function(t142, e86, n60) {
            "use strict";
            var o = n60(33), r = n60(38);
            t142.exports = function(t) {
                var e = String(r(this)), n = "", i = o(t);
                if (i < 0 || i == 1 / 0) throw RangeError("Count can't be negative");
                for(; i > 0; (i >>>= 1) && (e += e))1 & i && (n += e);
                return n;
            };
        },
        function(t143, e) {
            t143.exports = Math.sign || function(t) {
                return 0 == (t = +t) || t != t ? t : t < 0 ? -1 : 1;
            };
        },
        function(t144, e) {
            var n = Math.expm1;
            t144.exports = !n || n(10) > 22025.465794806718 || n(10) < 22025.465794806718 || -0.00000000000000002 != n(-0.00000000000000002) ? function(t) {
                return 0 == (t = +t) ? t : t > -0.000001 && t < 1e-6 ? t + t * t / 2 : Math.exp(t) - 1;
            } : n;
        },
        function(t145, e87, n61) {
            var o = n61(33), r = n61(38);
            t145.exports = function(t) {
                return function(e, n) {
                    var i, a, s = String(r(e)), l = o(n), c = s.length;
                    return l < 0 || l >= c ? t ? "" : void 0 : (i = s.charCodeAt(l)) < 55296 || i > 56319 || l + 1 === c || (a = s.charCodeAt(l + 1)) < 56320 || a > 57343 ? t ? s.charAt(l) : i : t ? s.slice(l, l + 2) : a - 56320 + (i - 55296 << 10) + 65536;
                };
            };
        },
        function(t146, e88, n62) {
            "use strict";
            var o = n62(45), r = n62(0), i = n62(23), a = n62(27), s = n62(55), l = n62(130), c = n62(53), u = n62(50), f = n62(15)("iterator"), d = !([].keys && "next" in [].keys()), p = function() {
                return this;
            };
            t146.exports = function(t147, e, n, h, v, g, y) {
                l(n, e, h);
                var b, m, k, x = function(t) {
                    if (!d && t in E) return E[t];
                    switch(t){
                        case "keys":
                        case "values":
                            return function() {
                                return new n(this, t);
                            };
                    }
                    return function() {
                        return new n(this, t);
                    };
                }, w = e + " Iterator", S = "values" == v, T = !1, E = t147.prototype, B = E[f] || E["@@iterator"] || v && E[v], C = B || x(v), _ = v ? S ? x("entries") : C : void 0, I = "Array" == e && E.entries || B;
                if (I && (k = u(I.call(new t147))) !== Object.prototype && k.next && (c(k, w, !0), o || "function" == typeof k[f] || a(k, f, p)), S && B && "values" !== B.name && (T = !0, C = function() {
                    return B.call(this);
                }), o && !y || !d && !T && E[f] || a(E, f, C), s[e] = C, s[w] = p, v) {
                    if (b = {
                        values: S ? C : x("values"),
                        keys: g ? C : x("keys"),
                        entries: _
                    }, y) for(m in b)m in E || i(E, m, b[m]);
                    else r(r.P + r.F * (d || T), e, b);
                }
                return b;
            };
        },
        function(t148, e89, n63) {
            var o = n63(99), r = n63(38);
            t148.exports = function(t, e, n) {
                if (o(e)) throw TypeError("String#" + n + " doesn't accept regex!");
                return String(r(t));
            };
        },
        function(t149, e90, n) {
            var o = n(13), r = n(37), i = n(15)("match");
            t149.exports = function(t) {
                var e;
                return o(t) && (void 0 !== (e = t[i]) ? !!e : "RegExp" == r(t));
            };
        },
        function(t150, e91, n) {
            var o = n(15)("match");
            t150.exports = function(t) {
                var e = /./;
                try {
                    "/./"[t](e);
                } catch (n) {
                    try {
                        return e[o] = !1, !"/./"[t](e);
                    } catch (t) {}
                }
                return !0;
            };
        },
        function(t151, e, n) {
            var o = n(55), r = n(15)("iterator"), i = Array.prototype;
            t151.exports = function(t) {
                return void 0 !== t && (o.Array === t || i[r] === t);
            };
        },
        function(t152, e92, n64) {
            "use strict";
            var o = n64(19), r = n64(43);
            t152.exports = function(t, e, n) {
                e in t ? o.f(t, e, r(0, n)) : t[e] = n;
            };
        },
        function(t153, e, n) {
            var o = n(65), r = n(15)("iterator"), i = n(55);
            t153.exports = n(17).getIteratorMethod = function(t) {
                if (null != t) return t[r] || t["@@iterator"] || i[o(t)];
            };
        },
        function(t154, e93, n65) {
            "use strict";
            var o = n65(22), r = n65(47), i = n65(16);
            t154.exports = function(t) {
                for(var e = o(this), n = i(e.length), a = arguments.length, s = r(a > 1 ? arguments[1] : void 0, n), l = a > 2 ? arguments[2] : void 0, c = void 0 === l ? n : r(l, n); c > s;)e[s++] = t;
                return e;
            };
        },
        function(t155, e94, n66) {
            "use strict";
            var o = n66(51), r = n66(135), i = n66(55), a = n66(28);
            t155.exports = n66(97)(Array, "Array", function(t, e) {
                this._t = a(t), this._i = 0, this._k = e;
            }, function() {
                var t = this._t, e = this._k, n = this._i++;
                return !t || n >= t.length ? (this._t = void 0, r(1)) : r(0, "keys" == e ? n : "values" == e ? t[n] : [
                    n,
                    t[n]
                ]);
            }, "values"), i.Arguments = i.Array, o("keys"), o("values"), o("entries");
        },
        function(t156, e95, n67) {
            "use strict";
            var o41, r29, i = n67(74), a = RegExp.prototype.exec, s = String.prototype.replace, l8 = a, c = (o41 = /a/, r29 = /b*/g, a.call(o41, "a"), a.call(r29, "a"), 0 !== o41.lastIndex || 0 !== r29.lastIndex), u = void 0 !== /()??/.exec("")[1];
            (c || u) && (l8 = function(t) {
                var e, n, o, r, l = this;
                return u && (n = new RegExp("^" + l.source + "$(?!\\s)", i.call(l))), c && (e = l.lastIndex), o = a.call(l, t), c && o && (l.lastIndex = l.global ? o.index + o[0].length : e), u && o && o.length > 1 && s.call(o[0], n, function() {
                    for(r = 1; r < arguments.length - 2; r++)void 0 === arguments[r] && (o[r] = void 0);
                }), o;
            }), t156.exports = l8;
        },
        function(t157, e96, n68) {
            "use strict";
            var o = n68(96)(!0);
            t157.exports = function(t, e, n) {
                return e + (n ? o(t, e).length : 1);
            };
        },
        function(t158, e97, n69) {
            var o, r, i, a = n69(31), s = n69(124), l = n69(89), c = n69(85), u = n69(10), f = u.process, d = u.setImmediate, p = u.clearImmediate, h = u.MessageChannel, v = u.Dispatch, g = 0, y = {}, b = function() {
                var t = +this;
                if (y.hasOwnProperty(t)) {
                    var e = y[t];
                    delete y[t], e();
                }
            }, m = function(t) {
                b.call(t.data);
            };
            d && p || (d = function(t) {
                for(var e = [], n = 1; arguments.length > n;)e.push(arguments[n++]);
                return y[++g] = function() {
                    s("function" == typeof t ? t : Function(t), e);
                }, o(g), g;
            }, p = function(t) {
                delete y[t];
            }, "process" == n69(37)(f) ? o = function(t) {
                f.nextTick(a(b, t, 1));
            } : v && v.now ? o = function(t) {
                v.now(a(b, t, 1));
            } : h ? (i = (r = new h).port2, r.port1.onmessage = m, o = a(i.postMessage, i, 1)) : u.addEventListener && "function" == typeof postMessage && !u.importScripts ? (o = function(t) {
                u.postMessage(t + "", "*");
            }, u.addEventListener("message", m, !1)) : o = "onreadystatechange" in c("script") ? function(t) {
                l.appendChild(c("script")).onreadystatechange = function() {
                    l.removeChild(this), b.call(t);
                };
            } : function(t) {
                setTimeout(a(b, t, 1), 0);
            }), t158.exports = {
                set: d,
                clear: p
            };
        },
        function(t159, e98, n70) {
            "use strict";
            var o42 = n70(10), r30 = n70(18), i29 = n70(45), a12 = n70(80), s11 = n70(27), l9 = n70(58), c6 = n70(11), u6 = n70(57), f6 = n70(33), d4 = n70(16), p = n70(143), h = n70(49).f, v = n70(19).f, g = n70(104), y = n70(53), b = o42.ArrayBuffer, m = o42.DataView, k = o42.Math, x = o42.RangeError, w = o42.Infinity, S = b, T = k.abs, E = k.pow, B = k.floor, C = k.log, _ = k.LN2, I = r30 ? "_b" : "buffer", O = r30 ? "_l" : "byteLength", M = r30 ? "_o" : "byteOffset";
            function R(t, e, n) {
                var o, r, i, a = new Array(n), s = 8 * n - e - 1, l = (1 << s) - 1, c = l >> 1, u = 23 === e ? E(2, -24) - E(2, -77) : 0, f = 0, d = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
                for((t = T(t)) != t || t === w ? (r = t != t ? 1 : 0, o = l) : (o = B(C(t) / _), t * (i = E(2, -o)) < 1 && (o--, i *= 2), (t += o + c >= 1 ? u / i : u * E(2, 1 - c)) * i >= 2 && (o++, i /= 2), o + c >= l ? (r = 0, o = l) : o + c >= 1 ? (r = (t * i - 1) * E(2, e), o += c) : (r = t * E(2, c - 1) * E(2, e), o = 0)); e >= 8; a[f++] = 255 & r, r /= 256, e -= 8);
                for(o = o << e | r, s += e; s > 0; a[f++] = 255 & o, o /= 256, s -= 8);
                return a[--f] |= 128 * d, a;
            }
            function A(t, e, n) {
                var o, r = 8 * n - e - 1, i = (1 << r) - 1, a = i >> 1, s = r - 7, l = n - 1, c = t[l--], u = 127 & c;
                for(c >>= 7; s > 0; u = 256 * u + t[l], l--, s -= 8);
                for(o = u & (1 << -s) - 1, u >>= -s, s += e; s > 0; o = 256 * o + t[l], l--, s -= 8);
                if (0 === u) u = 1 - a;
                else {
                    if (u === i) return o ? NaN : c ? -w : w;
                    o += E(2, e), u -= a;
                }
                return (c ? -1 : 1) * o * E(2, u - e);
            }
            function N(t) {
                return t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0];
            }
            function L(t) {
                return [
                    255 & t
                ];
            }
            function P(t) {
                return [
                    255 & t,
                    t >> 8 & 255
                ];
            }
            function D(t) {
                return [
                    255 & t,
                    t >> 8 & 255,
                    t >> 16 & 255,
                    t >> 24 & 255
                ];
            }
            function j(t) {
                return R(t, 52, 8);
            }
            function F(t) {
                return R(t, 23, 4);
            }
            function H(t, e, n) {
                v(t.prototype, e, {
                    get: function() {
                        return this[n];
                    }
                });
            }
            function U(t, e, n, o) {
                var r = p(+n);
                if (r + e > t[O]) throw x("Wrong index!");
                var i = t[I]._b, a = r + t[M], s = i.slice(a, a + e);
                return o ? s : s.reverse();
            }
            function z(t, e, n, o, r, i) {
                var a = p(+n);
                if (a + e > t[O]) throw x("Wrong index!");
                for(var s = t[I]._b, l = a + t[M], c = o(+r), u = 0; u < e; u++)s[l + u] = c[i ? u : e - u - 1];
            }
            if (a12.ABV) {
                if (!c6(function() {
                    b(1);
                }) || !c6(function() {
                    new b(-1);
                }) || c6(function() {
                    return new b, new b(1.5), new b(NaN), "ArrayBuffer" != b.name;
                })) {
                    for(var W, Y = (b = function(t) {
                        return u6(this, b), new S(p(t));
                    }).prototype = S.prototype, V = h(S), X = 0; V.length > X;)(W = V[X++]) in b || s11(b, W, S[W]);
                    i29 || (Y.constructor = b);
                }
                var K = new m(new b(2)), G = m.prototype.setInt8;
                K.setInt8(0, 2147483648), K.setInt8(1, 2147483649), !K.getInt8(0) && K.getInt8(1) || l9(m.prototype, {
                    setInt8: function(t, e) {
                        G.call(this, t, e << 24 >> 24);
                    },
                    setUint8: function(t, e) {
                        G.call(this, t, e << 24 >> 24);
                    }
                }, !0);
            } else b = function(t) {
                u6(this, b, "ArrayBuffer");
                var e = p(t);
                this._b = g.call(new Array(e), 0), this[O] = e;
            }, m = function(t, e, n) {
                u6(this, m, "DataView"), u6(t, b, "DataView");
                var o = t[O], r = f6(e);
                if (r < 0 || r > o) throw x("Wrong offset!");
                if (r + (n = void 0 === n ? o - r : d4(n)) > o) throw x("Wrong length!");
                this[I] = t, this[M] = r, this[O] = n;
            }, r30 && (H(b, "byteLength", "_l"), H(m, "buffer", "_b"), H(m, "byteLength", "_l"), H(m, "byteOffset", "_o")), l9(m.prototype, {
                getInt8: function(t) {
                    return U(this, 1, t)[0] << 24 >> 24;
                },
                getUint8: function(t) {
                    return U(this, 1, t)[0];
                },
                getInt16: function(t) {
                    var e = U(this, 2, t, arguments[1]);
                    return (e[1] << 8 | e[0]) << 16 >> 16;
                },
                getUint16: function(t) {
                    var e = U(this, 2, t, arguments[1]);
                    return e[1] << 8 | e[0];
                },
                getInt32: function(t) {
                    return N(U(this, 4, t, arguments[1]));
                },
                getUint32: function(t) {
                    return N(U(this, 4, t, arguments[1])) >>> 0;
                },
                getFloat32: function(t) {
                    return A(U(this, 4, t, arguments[1]), 23, 4);
                },
                getFloat64: function(t) {
                    return A(U(this, 8, t, arguments[1]), 52, 8);
                },
                setInt8: function(t, e) {
                    z(this, 1, t, L, e);
                },
                setUint8: function(t, e) {
                    z(this, 1, t, L, e);
                },
                setInt16: function(t, e) {
                    z(this, 2, t, P, e, arguments[2]);
                },
                setUint16: function(t, e) {
                    z(this, 2, t, P, e, arguments[2]);
                },
                setInt32: function(t, e) {
                    z(this, 4, t, D, e, arguments[2]);
                },
                setUint32: function(t, e) {
                    z(this, 4, t, D, e, arguments[2]);
                },
                setFloat32: function(t, e) {
                    z(this, 4, t, F, e, arguments[2]);
                },
                setFloat64: function(t, e) {
                    z(this, 8, t, j, e, arguments[2]);
                }
            });
            y(b, "ArrayBuffer"), y(m, "DataView"), s11(m.prototype, a12.VIEW, !0), e98.ArrayBuffer = b, e98.DataView = m;
        },
        function(t160, e99) {
            function n(e100, o) {
                return t160.exports = n = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t;
                }, n(e100, o);
            }
            t160.exports = n;
        },
        function(t161, e101, n71) {
            var o43, r31, i30;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r31 = [
                e101,
                n71(2),
                n71(3),
                n71(7)
            ], void 0 === (i30 = "function" == typeof (o43 = function(o44, r32, i31, a) {
                "use strict";
                var s12 = n71(8), l = n71(1);
                Object.defineProperty(o44, "__esModule", {
                    value: !0
                }), o44.default = void 0, r32 = l(r32), i31 = l(i31), a = s12(a);
                var c = function() {
                    function t162() {
                        (0, r32.default)(this, t162), this.allListeners = [];
                    }
                    return (0, i31.default)(t162, [
                        {
                            key: "on",
                            value: function(t, e, n) {
                                var o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3], r = a.generateId("l"), i = {
                                    id: r,
                                    element: t,
                                    eventType: e,
                                    handler: n,
                                    options: o
                                }, s = this.findOne(t, e, n);
                                if (!s) return this.allListeners.push(i), t.addEventListener(e, n, o), r;
                            }
                        },
                        {
                            key: "off",
                            value: function(t163, e102, n72, o) {
                                var r = this, i = this.findAll(t163, e102, n72);
                                i.forEach(function(t, e) {
                                    var n = r.allListeners.indexOf(i[e]);
                                    n > -1 && (r.allListeners.splice(n, 1), t.element.removeEventListener(t.eventType, t.handler, t.options));
                                });
                            }
                        },
                        {
                            key: "offById",
                            value: function(t) {
                                var e = this.findById(t);
                                e && e.element.removeEventListener(e.eventType, e.handler, e.options);
                            }
                        },
                        {
                            key: "findOne",
                            value: function(t, e, n) {
                                var o = this.findAll(t, e, n);
                                return o.length > 0 ? o[0] : null;
                            }
                        },
                        {
                            key: "findAll",
                            value: function(t164, e, n) {
                                var o = t164 ? this.findByEventTarget(t164) : [];
                                return t164 && e && n ? o.filter(function(t) {
                                    return t.eventType === e && t.handler === n;
                                }) : t164 && e ? o.filter(function(t) {
                                    return t.eventType === e;
                                }) : o;
                            }
                        },
                        {
                            key: "removeAll",
                            value: function() {
                                this.allListeners.map(function(t) {
                                    t.element.removeEventListener(t.eventType, t.handler, t.options);
                                }), this.allListeners = [];
                            }
                        },
                        {
                            key: "destroy",
                            value: function() {
                                this.removeAll();
                            }
                        },
                        {
                            key: "findByEventTarget",
                            value: function(t) {
                                return this.allListeners.filter(function(e) {
                                    if (e.element === t) return e;
                                });
                            }
                        },
                        {
                            key: "findByType",
                            value: function(t) {
                                return this.allListeners.filter(function(e) {
                                    if (e.eventType === t) return e;
                                });
                            }
                        },
                        {
                            key: "findByHandler",
                            value: function(t) {
                                return this.allListeners.filter(function(e) {
                                    if (e.handler === t) return e;
                                });
                            }
                        },
                        {
                            key: "findById",
                            value: function(t) {
                                return this.allListeners.find(function(e) {
                                    return e.id === t;
                                });
                            }
                        }
                    ]), t162;
                }();
                o44.default = c, c.displayName = "Listeners", t161.exports = e101.default;
            }) ? o43.apply(e101, r31) : o43) || (t161.exports = i30);
        },
        function(t165, e103, n73) {
            var o45, r, i;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [
                e103
            ], void 0 === (i = "function" == typeof (o45 = function(n74) {
                "use strict";
                Object.defineProperty(n74, "__esModule", {
                    value: !0
                }), n74.default = void 0;
                var o = function(t) {
                    var e104 = {
                        get id () {
                            return t.id;
                        },
                        get name () {
                            return t.name;
                        },
                        get config () {
                            return t.config;
                        },
                        get holder () {
                            return t.holder;
                        },
                        get isEmpty () {
                            return t.isEmpty;
                        },
                        get selected () {
                            return t.selected;
                        },
                        set stretched (e){
                            t.stretched = e;
                        },
                        get stretched () {
                            return t.stretched;
                        },
                        call: function(e, n) {
                            return t.call(e, n);
                        },
                        save: function() {
                            return t.save();
                        },
                        validate: function(e) {
                            return t.validate(e);
                        },
                        dispatchChange: function() {
                            t.dispatchChange();
                        }
                    };
                    Object.setPrototypeOf(this, e104);
                };
                n74.default = o, t165.exports = e103.default;
            }) ? o45.apply(e103, r) : o45) || (t165.exports = i);
        },
        function(t166, e105, n75) {
            var o = n75(376);
            function r33(e106, n76, i32) {
                return "undefined" != typeof Reflect && Reflect.get ? t166.exports = r33 = Reflect.get : t166.exports = r33 = function(t, e, n) {
                    var r = o(t, e);
                    if (r) {
                        var i = Object.getOwnPropertyDescriptor(r, e);
                        return i.get ? i.get.call(n) : i.value;
                    }
                }, r33(e106, n76, i32 || e106);
            }
            t166.exports = r33;
        },
        function(t167, e107, n77) {
            var o46, r34, i33;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r34 = [
                e107,
                n77(2),
                n77(3),
                n77(380)
            ], void 0 === (i33 = "function" == typeof (o46 = function(o, r, i, a) {
                "use strict";
                var s = n77(1);
                Object.defineProperty(o, "__esModule", {
                    value: !0
                }), o.default = void 0, r = s(r), i = s(i), a = s(a);
                var l = function() {
                    function t168() {
                        (0, r.default)(this, t168), this.lib = new a.default;
                    }
                    return (0, i.default)(t168, [
                        {
                            key: "destroy",
                            value: function() {
                                this.lib.destroy();
                            }
                        },
                        {
                            key: "show",
                            value: function(t, e, n) {
                                this.lib.show(t, e, n);
                            }
                        },
                        {
                            key: "hide",
                            value: function() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                this.lib.hide(t);
                            }
                        },
                        {
                            key: "onHover",
                            value: function(t, e, n) {
                                this.lib.onHover(t, e, n);
                            }
                        }
                    ]), t168;
                }();
                o.default = l, l.displayName = "Tooltip", t167.exports = e107.default;
            }) ? o46.apply(e107, r34) : o46) || (t167.exports = i33);
        },
        function(t169, e108, n78) {
            var o47, r35, i34;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r35 = [
                e108,
                n78(42),
                n78(2),
                n78(3),
                n78(384)
            ], void 0 === (i34 = "function" == typeof (o47 = function(o48, r, i, a, s) {
                "use strict";
                var l = n78(1);
                Object.defineProperty(o48, "__esModule", {
                    value: !0
                }), o48.default = void 0, r = l(r), i = l(i), a = l(a), s = l(s);
                var c = function() {
                    function t170() {
                        (0, i.default)(this, t170), this.registeredShortcuts = new Map;
                    }
                    return (0, a.default)(t170, [
                        {
                            key: "add",
                            value: function(t) {
                                if (this.findShortcut(t.on, t.name)) throw Error("Shortcut ".concat(t.name, " is already registered for ").concat(t.on, ". Please remove it before add a new handler."));
                                var e = new s.default({
                                    name: t.name,
                                    on: t.on,
                                    callback: t.handler
                                }), n = this.registeredShortcuts.get(t.on) || [];
                                this.registeredShortcuts.set(t.on, [].concat((0, r.default)(n), [
                                    e
                                ]));
                            }
                        },
                        {
                            key: "remove",
                            value: function(t171, e) {
                                var n = this.findShortcut(t171, e);
                                if (n) {
                                    n.remove();
                                    var o = this.registeredShortcuts.get(t171);
                                    this.registeredShortcuts.set(t171, o.filter(function(t) {
                                        return t !== n;
                                    }));
                                }
                            }
                        },
                        {
                            key: "findShortcut",
                            value: function(t172, e) {
                                return (this.registeredShortcuts.get(t172) || []).find(function(t) {
                                    return t.name === e;
                                });
                            }
                        }
                    ]), t170;
                }();
                c.displayName = "Shortcuts";
                var u = new c;
                o48.default = u, t169.exports = e108.default;
            }) ? o47.apply(e108, r35) : o47) || (t169.exports = i34);
        },
        function(t, e, n) {
            t.exports = !n(18) && !n(11)(function() {
                return 7 != Object.defineProperty(n(85)("div"), "a", {
                    get: function() {
                        return 7;
                    }
                }).a;
            });
        },
        function(t173, e109, n) {
            var o = n(10), r = n(17), i = n(45), a = n(86), s = n(19).f;
            t173.exports = function(t) {
                var e = r.Symbol || (r.Symbol = i ? {} : o.Symbol || {});
                "_" == t.charAt(0) || t in e || s(e, t, {
                    value: a.f(t)
                });
            };
        },
        function(t174, e110, n79) {
            var o = n79(26), r = n79(28), i = n79(70)(!1), a = n79(87)("IE_PROTO");
            t174.exports = function(t, e) {
                var n, s = r(t), l = 0, c = [];
                for(n in s)n != a && o(s, n) && c.push(n);
                for(; e.length > l;)o(s, n = e[l++]) && (~i(c, n) || c.push(n));
                return c;
            };
        },
        function(t175, e111, n80) {
            var o = n80(19), r = n80(12), i = n80(46);
            t175.exports = n80(18) ? Object.defineProperties : function(t, e) {
                r(t);
                for(var n, a = i(e), s = a.length, l = 0; s > l;)o.f(t, n = a[l++], e[n]);
                return t;
            };
        },
        function(t176, e, n) {
            var o = n(28), r = n(49).f, i = {}.toString, a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
            t176.exports.f = function(t177) {
                return a && "[object Window]" == i.call(t177) ? function(t) {
                    try {
                        return r(t);
                    } catch (t178) {
                        return a.slice();
                    }
                }(t177) : r(o(t177));
            };
        },
        function(t179, e112, n81) {
            "use strict";
            var o49 = n81(18), r = n81(46), i = n81(71), a = n81(64), s = n81(22), l = n81(63), c7 = Object.assign;
            t179.exports = !c7 || n81(11)(function() {
                var t180 = {}, e = {}, n = Symbol(), o = "abcdefghijklmnopqrst";
                return t180[n] = 7, o.split("").forEach(function(t) {
                    e[t] = t;
                }), 7 != c7({}, t180)[n] || Object.keys(c7({}, e)).join("") != o;
            }) ? function(t, e) {
                for(var n = s(t), c = arguments.length, u = 1, f = i.f, d = a.f; c > u;)for(var p, h = l(arguments[u++]), v = f ? r(h).concat(f(h)) : r(h), g = v.length, y = 0; g > y;)p = v[y++], o49 && !d.call(h, p) || (n[p] = h[p]);
                return n;
            } : c7;
        },
        function(t181, e113) {
            t181.exports = Object.is || function(t, e) {
                return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e;
            };
        },
        function(t182, e114, n82) {
            "use strict";
            var o50 = n82(32), r36 = n82(13), i = n82(124), a = [].slice, s13 = {}, l = function(t, e, n) {
                if (!(e in s13)) {
                    for(var o = [], r = 0; r < e; r++)o[r] = "a[" + r + "]";
                    s13[e] = Function("F,a", "return new F(" + o.join(",") + ")");
                }
                return s13[e](t, n);
            };
            t182.exports = Function.bind || function(t) {
                var e = o50(this), n = a.call(arguments, 1), s = function() {
                    var o = n.concat(a.call(arguments));
                    return this instanceof s ? l(e, o.length, o) : i(e, o, t);
                };
                return r36(e.prototype) && (s.prototype = e.prototype), s;
            };
        },
        function(t183, e115) {
            t183.exports = function(t, e, n) {
                var o = void 0 === n;
                switch(e.length){
                    case 0:
                        return o ? t() : t.call(n);
                    case 1:
                        return o ? t(e[0]) : t.call(n, e[0]);
                    case 2:
                        return o ? t(e[0], e[1]) : t.call(n, e[0], e[1]);
                    case 3:
                        return o ? t(e[0], e[1], e[2]) : t.call(n, e[0], e[1], e[2]);
                    case 4:
                        return o ? t(e[0], e[1], e[2], e[3]) : t.call(n, e[0], e[1], e[2], e[3]);
                }
                return t.apply(n, e);
            };
        },
        function(t184, e116, n83) {
            var o = n83(10).parseInt, r = n83(54).trim, i = n83(91), a = /^[-+]?0[xX]/;
            t184.exports = 8 !== o(i + "08") || 22 !== o(i + "0x16") ? function(t, e) {
                var n = r(String(t), 3);
                return o(n, e >>> 0 || (a.test(n) ? 16 : 10));
            } : o;
        },
        function(t185, e117, n84) {
            var o = n84(10).parseFloat, r = n84(54).trim;
            t185.exports = 1 / o(n84(91) + "-0") != -1 / 0 ? function(t) {
                var e = r(String(t), 3), n = o(e);
                return 0 === n && "-" == e.charAt(0) ? -0 : n;
            } : o;
        },
        function(t186, e118, n) {
            var o = n(37);
            t186.exports = function(t, e) {
                if ("number" != typeof t && "Number" != o(t)) throw TypeError(e);
                return +t;
            };
        },
        function(t187, e, n) {
            var o = n(13), r = Math.floor;
            t187.exports = function(t) {
                return !o(t) && isFinite(t) && r(t) === t;
            };
        },
        function(t188, e) {
            t188.exports = Math.log1p || function(t) {
                return (t = +t) > -0.00000001 && t < 1e-8 ? t - t * t / 2 : Math.log(1 + t);
            };
        },
        function(t189, e119, n85) {
            "use strict";
            var o = n85(48), r = n85(43), i = n85(53), a = {};
            n85(27)(a, n85(15)("iterator"), function() {
                return this;
            }), t189.exports = function(t, e, n) {
                t.prototype = o(a, {
                    next: r(1, n)
                }), i(t, e + " Iterator");
            };
        },
        function(t190, e120, n86) {
            var o = n86(12);
            t190.exports = function(t, e, n, r) {
                try {
                    return r ? e(o(n)[0], n[1]) : e(n);
                } catch (e121) {
                    var i = t.return;
                    throw void 0 !== i && o(i.call(t)), e121;
                }
            };
        },
        function(t191, e122, n) {
            var o = n(282);
            t191.exports = function(t, e) {
                return new (o(t))(e);
            };
        },
        function(t192, e123, n87) {
            var o = n87(32), r = n87(22), i = n87(63), a = n87(16);
            t192.exports = function(t, e, n, s, l) {
                o(e);
                var c = r(t), u = i(c), f = a(c.length), d = l ? f - 1 : 0, p = l ? -1 : 1;
                if (n < 2) for(;;){
                    if (d in u) {
                        s = u[d], d += p;
                        break;
                    }
                    if (d += p, l ? d < 0 : f <= d) throw TypeError("Reduce of empty array with no initial value");
                }
                for(; l ? d >= 0 : f > d; d += p)d in u && (s = e(s, u[d], d, c));
                return s;
            };
        },
        function(t193, e124, n88) {
            "use strict";
            var o = n88(22), r = n88(47), i = n88(16);
            t193.exports = [].copyWithin || function(t, e) {
                var n = o(this), a = i(n.length), s = r(t, a), l = r(e, a), c = arguments.length > 2 ? arguments[2] : void 0, u = Math.min((void 0 === c ? a : r(c, a)) - l, a - s), f = 1;
                for(l < s && s < l + u && (f = -1, l += u - 1, s += u - 1); u-- > 0;)l in n ? n[s] = n[l] : delete n[s], s += f, l += f;
                return n;
            };
        },
        function(t194, e125) {
            t194.exports = function(t, e) {
                return {
                    value: e,
                    done: !!t
                };
            };
        },
        function(t, e, n) {
            "use strict";
            var o = n(106);
            n(0)({
                target: "RegExp",
                proto: !0,
                forced: o !== /./.exec
            }, {
                exec: o
            });
        },
        function(t, e, n) {
            n(18) && "g" != /./g.flags && n(19).f(RegExp.prototype, "flags", {
                configurable: !0,
                get: n(74)
            });
        },
        function(t195, e126, n89) {
            "use strict";
            var o51, r37, i35, a13, s14 = n89(45), l10 = n89(10), c8 = n89(31), u7 = n89(65), f = n89(0), d = n89(13), p = n89(32), h = n89(57), v = n89(77), g = n89(66), y = n89(108).set, b = n89(302)(), m = n89(139), k = n89(303), x = n89(78), w = n89(140), S = l10.TypeError, T = l10.process, E = T && T.versions, B = E && E.v8 || "", C = l10.Promise, _ = "process" == u7(T), I = function() {}, O = r37 = m.f, M = !!function() {
                try {
                    var t196 = C.resolve(1), e = (t196.constructor = {})[n89(15)("species")] = function(t) {
                        t(I, I);
                    };
                    return (_ || "function" == typeof PromiseRejectionEvent) && t196.then(I) instanceof e && 0 !== B.indexOf("6.6") && -1 === x.indexOf("Chrome/66");
                } catch (t) {}
            }(), R = function(t) {
                var e;
                return !(!d(t) || "function" != typeof (e = t.then)) && e;
            }, A = function(t198, e127) {
                if (!t198._n) {
                    t198._n = !0;
                    var n90 = t198._c;
                    b(function() {
                        for(var o = t198._v, r = 1 == t198._s, i36 = 0, a14 = function(e) {
                            var n, i, a, s = r ? e.ok : e.fail, l = e.resolve, c = e.reject, u = e.domain;
                            try {
                                s ? (r || (2 == t198._h && P(t198), t198._h = 1), !0 === s ? n = o : (u && u.enter(), n = s(o), u && (u.exit(), a = !0)), n === e.promise ? c(S("Promise-chain cycle")) : (i = R(n)) ? i.call(n, l, c) : l(n)) : c(o);
                            } catch (t) {
                                u && !a && u.exit(), c(t);
                            }
                        }; n90.length > i36;)a14(n90[i36++]);
                        t198._c = [], t198._n = !1, e127 && !t198._h && N(t198);
                    });
                }
            }, N = function(t) {
                y.call(l10, function() {
                    var e, n, o, r = t._v, i = L(t);
                    if (i && (e = k(function() {
                        _ ? T.emit("unhandledRejection", r, t) : (n = l10.onunhandledrejection) ? n({
                            promise: t,
                            reason: r
                        }) : (o = l10.console) && o.error && o.error("Unhandled promise rejection", r);
                    }), t._h = _ || L(t) ? 2 : 1), t._a = void 0, i && e.e) throw e.v;
                });
            }, L = function(t) {
                return 1 !== t._h && 0 === (t._a || t._c).length;
            }, P = function(t) {
                y.call(l10, function() {
                    var e;
                    _ ? T.emit("rejectionHandled", t) : (e = l10.onrejectionhandled) && e({
                        promise: t,
                        reason: t._v
                    });
                });
            }, D = function(t) {
                var e = this;
                e._d || (e._d = !0, (e = e._w || e)._v = t, e._s = 2, e._a || (e._a = e._c.slice()), A(e, !0));
            }, j = function(t199) {
                var e, n = this;
                if (!n._d) {
                    n._d = !0, n = n._w || n;
                    try {
                        if (n === t199) throw S("Promise can't be resolved itself");
                        (e = R(t199)) ? b(function() {
                            var o = {
                                _w: n,
                                _d: !1
                            };
                            try {
                                e.call(t199, c8(j, o, 1), c8(D, o, 1));
                            } catch (t) {
                                D.call(o, t);
                            }
                        }) : (n._v = t199, n._s = 1, A(n, !1));
                    } catch (t) {
                        D.call({
                            _w: n,
                            _d: !1
                        }, t);
                    }
                }
            };
            M || (C = function(t) {
                h(this, C, "Promise", "_h"), p(t), o51.call(this);
                try {
                    t(c8(j, this, 1), c8(D, this, 1));
                } catch (t200) {
                    D.call(this, t200);
                }
            }, (o51 = function(t) {
                this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1;
            }).prototype = n89(58)(C.prototype, {
                then: function(t, e) {
                    var n = O(g(this, C));
                    return n.ok = "function" != typeof t || t, n.fail = "function" == typeof e && e, n.domain = _ ? T.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && A(this, !1), n.promise;
                },
                catch: function(t) {
                    return this.then(void 0, t);
                }
            }), i35 = function() {
                var t = new o51;
                this.promise = t, this.resolve = c8(j, t, 1), this.reject = c8(D, t, 1);
            }, m.f = O = function(t) {
                return t === C || t === a13 ? new i35(t) : r37(t);
            }), f(f.G + f.W + f.F * !M, {
                Promise: C
            }), n89(53)(C, "Promise"), n89(56)("Promise"), a13 = n89(17).Promise, f(f.S + f.F * !M, "Promise", {
                reject: function(t) {
                    var e = O(this);
                    return (0, e.reject)(t), e.promise;
                }
            }), f(f.S + f.F * (s14 || !M), "Promise", {
                resolve: function(t) {
                    return w(s14 && this === a13 ? C : this, t);
                }
            }), f(f.S + f.F * !(M && n89(73)(function(t) {
                C.all(t).catch(I);
            })), "Promise", {
                all: function(t201) {
                    var e = this, n92 = O(e), o = n92.resolve, r = n92.reject, i37 = k(function() {
                        var n = [], i = 0, a = 1;
                        v(t201, !1, function(t202) {
                            var s = i++, l = !1;
                            n.push(void 0), a++, e.resolve(t202).then(function(t) {
                                l || (l = !0, n[s] = t, --a || o(n));
                            }, r);
                        }), --a || o(n);
                    });
                    return i37.e && r(i37.v), n92.promise;
                },
                race: function(t203) {
                    var e = this, n = O(e), o = n.reject, r = k(function() {
                        v(t203, !1, function(t) {
                            e.resolve(t).then(n.resolve, o);
                        });
                    });
                    return r.e && o(r.v), n.promise;
                }
            });
        },
        function(t204, e128, n93) {
            "use strict";
            var o52 = n93(32);
            function r(t205) {
                var e, n;
                this.promise = new t205(function(t, o) {
                    if (void 0 !== e || void 0 !== n) throw TypeError("Bad Promise constructor");
                    e = t, n = o;
                }), this.resolve = o52(e), this.reject = o52(n);
            }
            t204.exports.f = function(t) {
                return new r(t);
            };
        },
        function(t206, e129, n94) {
            var o = n94(12), r = n94(13), i = n94(139);
            t206.exports = function(t, e) {
                if (o(t), r(e) && e.constructor === t) return e;
                var n = i.f(t);
                return (0, n.resolve)(e), n.promise;
            };
        },
        function(t207, e130, n95) {
            "use strict";
            var o53 = n95(19).f, r38 = n95(48), i38 = n95(58), a = n95(31), s = n95(57), l = n95(77), c9 = n95(97), u8 = n95(135), f = n95(56), d = n95(18), p = n95(41).fastKey, h = n95(52), v = d ? "_s" : "size", g = function(t, e) {
                var n, o = p(e);
                if ("F" !== o) return t._i[o];
                for(n = t._f; n; n = n.n)if (n.k == e) return n;
            };
            t207.exports = {
                getConstructor: function(t208, e, n96, c) {
                    var u = t208(function(t, o) {
                        s(t, u, e, "_i"), t._t = e, t._i = r38(null), t._f = void 0, t._l = void 0, t[v] = 0, null != o && l(o, n96, t[c], t);
                    });
                    return i38(u.prototype, {
                        clear: function() {
                            for(var t = h(this, e), n = t._i, o = t._f; o; o = o.n)o.r = !0, o.p && (o.p = o.p.n = void 0), delete n[o.i];
                            t._f = t._l = void 0, t[v] = 0;
                        },
                        delete: function(t) {
                            var n = h(this, e), o = g(n, t);
                            if (o) {
                                var r = o.n, i = o.p;
                                delete n._i[o.i], o.r = !0, i && (i.n = r), r && (r.p = i), n._f == o && (n._f = r), n._l == o && (n._l = i), n[v]--;
                            }
                            return !!o;
                        },
                        forEach: function(t) {
                            h(this, e);
                            for(var n, o = a(t, arguments.length > 1 ? arguments[1] : void 0, 3); n = n ? n.n : this._f;)for(o(n.v, n.k, this); n && n.r;)n = n.p;
                        },
                        has: function(t) {
                            return !!g(h(this, e), t);
                        }
                    }), d && o53(u.prototype, "size", {
                        get: function() {
                            return h(this, e)[v];
                        }
                    }), u;
                },
                def: function(t, e, n) {
                    var o, r, i = g(t, e);
                    return i ? i.v = n : (t._l = i = {
                        i: r = p(e, !0),
                        k: e,
                        v: n,
                        p: o = t._l,
                        n: void 0,
                        r: !1
                    }, t._f || (t._f = i), o && (o.n = i), t[v]++, "F" !== r && (t._i[r] = i)), t;
                },
                getEntry: g,
                setStrong: function(t209, e131, n97) {
                    c9(t209, e131, function(t, n) {
                        this._t = h(t, e131), this._k = n, this._l = void 0;
                    }, function() {
                        for(var t = this._k, e = this._l; e && e.r;)e = e.p;
                        return this._t && (this._l = e = e ? e.n : this._t._f) ? u8(0, "keys" == t ? e.k : "values" == t ? e.v : [
                            e.k,
                            e.v
                        ]) : (this._t = void 0, u8(1));
                    }, n97 ? "entries" : "values", !n97, !0), f(e131);
                }
            };
        },
        function(t210, e132, n98) {
            "use strict";
            var o54 = n98(58), r = n98(41).getWeak, i39 = n98(12), a = n98(13), s = n98(57), l = n98(77), c10 = n98(36), u = n98(26), f = n98(52), d = c10(5), p = c10(6), h = 0, v = function(t) {
                return t._l || (t._l = new g);
            }, g = function() {
                this.a = [];
            }, y = function(t211, e) {
                return d(t211.a, function(t) {
                    return t[0] === e;
                });
            };
            g.prototype = {
                get: function(t) {
                    var e = y(this, t);
                    if (e) return e[1];
                },
                has: function(t) {
                    return !!y(this, t);
                },
                set: function(t, e) {
                    var n = y(this, t);
                    n ? n[1] = e : this.a.push([
                        t,
                        e
                    ]);
                },
                delete: function(t) {
                    var e133 = p(this.a, function(e) {
                        return e[0] === t;
                    });
                    return ~e133 && this.a.splice(e133, 1), !!~e133;
                }
            }, t210.exports = {
                getConstructor: function(t212, e, n99, i) {
                    var c = t212(function(t, o) {
                        s(t, c, e, "_i"), t._t = e, t._i = h++, t._l = void 0, null != o && l(o, n99, t[i], t);
                    });
                    return o54(c.prototype, {
                        delete: function(t) {
                            if (!a(t)) return !1;
                            var n = r(t);
                            return !0 === n ? v(f(this, e)).delete(t) : n && u(n, this._i) && delete n[this._i];
                        },
                        has: function(t) {
                            if (!a(t)) return !1;
                            var n = r(t);
                            return !0 === n ? v(f(this, e)).has(t) : n && u(n, this._i);
                        }
                    }), c;
                },
                def: function(t, e, n) {
                    var o = r(i39(e), !0);
                    return !0 === o ? v(t).set(e, n) : o[t._i] = n, t;
                },
                ufstore: v
            };
        },
        function(t213, e134, n100) {
            var o = n100(33), r = n100(16);
            t213.exports = function(t) {
                if (void 0 === t) return 0;
                var e = o(t), n = r(e);
                if (e !== n) throw RangeError("Wrong length!");
                return n;
            };
        },
        function(t214, e135, n101) {
            var o = n101(49), r = n101(71), i = n101(12), a = n101(10).Reflect;
            t214.exports = a && a.ownKeys || function(t) {
                var e = o.f(i(t)), n = r.f;
                return n ? e.concat(n(t)) : e;
            };
        },
        function(t215, e136, n102) {
            var o = n102(16), r = n102(93), i = n102(38);
            t215.exports = function(t, e, n, a) {
                var s = String(i(t)), l = s.length, c = void 0 === n ? " " : String(n), u = o(e);
                if (u <= l || "" == c) return s;
                var f = u - l, d = r.call(c, Math.ceil(f / c.length));
                return d.length > f && (d = d.slice(0, f)), a ? d + s : s + d;
            };
        },
        function(t216, e137, n103) {
            var o = n103(18), r = n103(46), i = n103(28), a = n103(64).f;
            t216.exports = function(t) {
                return function(e) {
                    for(var n, s = i(e), l = r(s), c = l.length, u = 0, f = []; c > u;)n = l[u++], o && !a.call(s, n) || f.push(t ? [
                        n,
                        s[n]
                    ] : s[n]);
                    return f;
                };
            };
        },
        function(t217, e138, n104) {
            var o55 = function(t218) {
                "use strict";
                var e139 = Object.prototype, n105 = e139.hasOwnProperty, o56 = "function" == typeof Symbol ? Symbol : {}, r39 = o56.iterator || "@@iterator", i40 = o56.asyncIterator || "@@asyncIterator", a15 = o56.toStringTag || "@@toStringTag";
                function s15(t219, e140, n106, o57) {
                    var r40 = e140 && e140.prototype instanceof u9 ? e140 : u9, i41 = Object.create(r40.prototype), a16 = new w(o57 || []);
                    return i41._invoke = function(t, e, n) {
                        var o = "suspendedStart";
                        return function(r, i) {
                            if ("executing" === o) throw new Error("Generator is already running");
                            if ("completed" === o) {
                                if ("throw" === r) throw i;
                                return T();
                            }
                            for(n.method = r, n.arg = i;;){
                                var a = n.delegate;
                                if (a) {
                                    var s = m(a, n);
                                    if (s) {
                                        if (s === c11) continue;
                                        return s;
                                    }
                                }
                                if ("next" === n.method) n.sent = n._sent = n.arg;
                                else if ("throw" === n.method) {
                                    if ("suspendedStart" === o) throw o = "completed", n.arg;
                                    n.dispatchException(n.arg);
                                } else "return" === n.method && n.abrupt("return", n.arg);
                                o = "executing";
                                var u = l11(t, e, n);
                                if ("normal" === u.type) {
                                    if (o = n.done ? "completed" : "suspendedYield", u.arg === c11) continue;
                                    return {
                                        value: u.arg,
                                        done: n.done
                                    };
                                }
                                "throw" === u.type && (o = "completed", n.method = "throw", n.arg = u.arg);
                            }
                        };
                    }(t219, n106, a16), i41;
                }
                function l11(t, e, n) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, n)
                        };
                    } catch (t220) {
                        return {
                            type: "throw",
                            arg: t220
                        };
                    }
                }
                t218.wrap = s15;
                var c11 = {};
                function u9() {}
                function f7() {}
                function d() {}
                var p = {};
                p[r39] = function() {
                    return this;
                };
                var h = Object.getPrototypeOf, v = h && h(h(S([])));
                v && v !== e139 && n105.call(v, r39) && (p = v);
                var g = d.prototype = u9.prototype = Object.create(p);
                function y(t221) {
                    [
                        "next",
                        "throw",
                        "return"
                    ].forEach(function(e) {
                        t221[e] = function(t) {
                            return this._invoke(e, t);
                        };
                    });
                }
                function b(t222, e) {
                    var o58;
                    this._invoke = function(r41, i42) {
                        function a17() {
                            return new e(function(o59, a18) {
                                !function o(r, i, a, s) {
                                    var c = l11(t222[r], t222, i);
                                    if ("throw" !== c.type) {
                                        var u = c.arg, f = u.value;
                                        return f && "object" == typeof f && n105.call(f, "__await") ? e.resolve(f.__await).then(function(t) {
                                            o("next", t, a, s);
                                        }, function(t) {
                                            o("throw", t, a, s);
                                        }) : e.resolve(f).then(function(t) {
                                            u.value = t, a(u);
                                        }, function(t) {
                                            return o("throw", t, a, s);
                                        });
                                    }
                                    s(c.arg);
                                }(r41, i42, o59, a18);
                            });
                        }
                        return o58 = o58 ? o58.then(a17, a17) : a17();
                    };
                }
                function m(t, e) {
                    var n = t.iterator[e.method];
                    if (void 0 === n) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, m(t, e), "throw" === e.method)) return c11;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method");
                        }
                        return c11;
                    }
                    var o = l11(n, t.iterator, e.arg);
                    if ("throw" === o.type) return e.method = "throw", e.arg = o.arg, e.delegate = null, c11;
                    var r = o.arg;
                    return r ? r.done ? (e[t.resultName] = r.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, c11) : r : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, c11);
                }
                function k(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
                }
                function x(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e;
                }
                function w(t) {
                    this.tryEntries = [
                        {
                            tryLoc: "root"
                        }
                    ], t.forEach(k, this), this.reset(!0);
                }
                function S(t) {
                    if (t) {
                        var e141 = t[r39];
                        if (e141) return e141.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var o = -1, i = function e() {
                                for(; ++o < t.length;)if (n105.call(t, o)) return e.value = t[o], e.done = !1, e;
                                return e.value = void 0, e.done = !0, e;
                            };
                            return i.next = i;
                        }
                    }
                    return {
                        next: T
                    };
                }
                function T() {
                    return {
                        value: void 0,
                        done: !0
                    };
                }
                return f7.prototype = g.constructor = d, d.constructor = f7, d[a15] = f7.displayName = "GeneratorFunction", t218.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === f7 || "GeneratorFunction" === (e.displayName || e.name));
                }, t218.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, d) : (t.__proto__ = d, a15 in t || (t[a15] = "GeneratorFunction")), t.prototype = Object.create(g), t;
                }, t218.awrap = function(t) {
                    return {
                        __await: t
                    };
                }, y(b.prototype), b.prototype[i40] = function() {
                    return this;
                }, t218.AsyncIterator = b, t218.async = function(e, n, o, r, i) {
                    void 0 === i && (i = Promise);
                    var a = new b(s15(e, n, o, r), i);
                    return t218.isGeneratorFunction(n) ? a : a.next().then(function(t) {
                        return t.done ? t.value : a.next();
                    });
                }, y(g), g[a15] = "Generator", g[r39] = function() {
                    return this;
                }, g.toString = function() {
                    return "[object Generator]";
                }, t218.keys = function(t) {
                    var e = [];
                    for(var n107 in t)e.push(n107);
                    return e.reverse(), function n() {
                        for(; e.length;){
                            var o = e.pop();
                            if (o in t) return n.value = o, n.done = !1, n;
                        }
                        return n.done = !0, n;
                    };
                }, t218.values = S, w.prototype = {
                    constructor: w,
                    reset: function(t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(x), !t) for(var e in this)"t" === e.charAt(0) && n105.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0);
                    },
                    stop: function() {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval;
                    },
                    dispatchException: function(t) {
                        if (this.done) throw t;
                        var e = this;
                        function o60(n, o) {
                            return a.type = "throw", a.arg = t, e.next = n, o && (e.method = "next", e.arg = void 0), !!o;
                        }
                        for(var r = this.tryEntries.length - 1; r >= 0; --r){
                            var i = this.tryEntries[r], a = i.completion;
                            if ("root" === i.tryLoc) return o60("end");
                            if (i.tryLoc <= this.prev) {
                                var s = n105.call(i, "catchLoc"), l = n105.call(i, "finallyLoc");
                                if (s && l) {
                                    if (this.prev < i.catchLoc) return o60(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return o60(i.finallyLoc);
                                } else if (s) {
                                    if (this.prev < i.catchLoc) return o60(i.catchLoc, !0);
                                } else {
                                    if (!l) throw new Error("try statement without catch or finally");
                                    if (this.prev < i.finallyLoc) return o60(i.finallyLoc);
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for(var o = this.tryEntries.length - 1; o >= 0; --o){
                            var r = this.tryEntries[o];
                            if (r.tryLoc <= this.prev && n105.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                                var i = r;
                                break;
                            }
                        }
                        i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                        var a = i ? i.completion : {};
                        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, c11) : this.complete(a);
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), c11;
                    },
                    finish: function(t) {
                        for(var e = this.tryEntries.length - 1; e >= 0; --e){
                            var n = this.tryEntries[e];
                            if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), x(n), c11;
                        }
                    },
                    catch: function(t) {
                        for(var e = this.tryEntries.length - 1; e >= 0; --e){
                            var n = this.tryEntries[e];
                            if (n.tryLoc === t) {
                                var o = n.completion;
                                if ("throw" === o.type) {
                                    var r = o.arg;
                                    x(n);
                                }
                                return r;
                            }
                        }
                        throw new Error("illegal catch attempt");
                    },
                    delegateYield: function(t, e, n) {
                        return this.delegate = {
                            iterator: S(t),
                            resultName: e,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = void 0), c11;
                    }
                }, t218;
            }(t217.exports);
            try {
                regeneratorRuntime = o55;
            } catch (t) {
                Function("r", "regeneratorRuntime = r")(o55);
            }
        },
        function(t223, e143, n108) {
            var o = n108(149);
            t223.exports = function(t, e) {
                if (t) {
                    if ("string" == typeof t) return o(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? o(t, e) : void 0;
                }
            };
        },
        function(t224, e144) {
            t224.exports = function(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for(var n = 0, o = new Array(e); n < e; n++)o[n] = t[n];
                return o;
            };
        },
        function(t) {
            t.exports = JSON.parse('{"ui":{"blockTunes":{"toggler":{"Click to tune":"","or drag to move":""}},"inlineToolbar":{"converter":{"Convert to":""}},"toolbar":{"toolbox":{"Add":"","Filter":"","Nothing found":""}}},"toolNames":{"Text":"","Link":"","Bold":"","Italic":""},"tools":{"link":{"Add a link":""},"stub":{"The block can not be displayed correctly.":""}},"blockTunes":{"delete":{"Delete":""},"moveUp":{"Move up":""},"moveDown":{"Move down":""}}}');
        },
        function(t225, e145, n109) {
            var o61, r42, i43;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r42 = [
                e145,
                n109(2),
                n109(5),
                n109(6),
                n109(4),
                n109(153)
            ], void 0 === (i43 = "function" == typeof (o61 = function(t226, e146, o62, r, i, a19) {
                "use strict";
                var s16 = n109(1);
                function l() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(t226, "__esModule", {
                    value: !0
                }), t226.CriticalError = void 0, e146 = s16(e146), o62 = s16(o62), r = s16(r), i = s16(i);
                var c = function(t227) {
                    (0, o62.default)(s, t227);
                    var n, a = (n = s, function() {
                        var t, e = (0, i.default)(n);
                        if (l()) {
                            var o = (0, i.default)(this).constructor;
                            t = Reflect.construct(e, arguments, o);
                        } else t = e.apply(this, arguments);
                        return (0, r.default)(this, t);
                    });
                    function s() {
                        return (0, e146.default)(this, s), a.apply(this, arguments);
                    }
                    return s;
                }((0, (a19 = s16(a19)).default)(Error));
                t226.CriticalError = c, c.displayName = "CriticalError";
            }) ? o61.apply(e145, r42) : o61) || (t225.exports = i43);
        },
        function(t228, e) {
            t228.exports = function(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t;
            };
        },
        function(t229, e147, n110) {
            var o = n110(4), r = n110(110), i = n110(372), a = n110(373);
            function s(e148) {
                var n = "function" == typeof Map ? new Map : void 0;
                return t229.exports = s = function(t) {
                    if (null === t || !i(t)) return t;
                    if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
                    if (void 0 !== n) {
                        if (n.has(t)) return n.get(t);
                        n.set(t, e);
                    }
                    function e() {
                        return a(t, arguments, o(this).constructor);
                    }
                    return e.prototype = Object.create(t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), r(e, t);
                }, s(e148);
            }
            t229.exports = s;
        },
        function(t230, e149, n111) {
            var o63, r43, i44;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r43 = [
                e149,
                n111(20),
                n111(21),
                n111(2),
                n111(3),
                n111(5),
                n111(6),
                n111(4),
                n111(7),
                n111(112),
                n111(9),
                n111(61)
            ], void 0 === (i44 = "function" == typeof (o63 = function(o64, r44, i45, a20, s, l, c, u, f, d, p, h) {
                "use strict";
                var v = n111(8), g = n111(1);
                function y() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o64, "__esModule", {
                    value: !0
                }), o64.default = void 0, r44 = g(r44), i45 = g(i45), a20 = g(a20), s = g(s), l = g(l), c = g(c), u = g(u), f = v(f), d = g(d), p = g(p), h = g(h);
                var b = function(t231) {
                    (0, l.default)(o65, t231);
                    var e150, n112 = (e150 = o65, function() {
                        var t, n = (0, u.default)(e150);
                        if (y()) {
                            var o = (0, u.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, c.default)(this, t);
                    });
                    function o65() {
                        var t;
                        return (0, a20.default)(this, o65), (t = n112.apply(this, arguments)).insert = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.config.defaultBlock, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, o = (arguments.length > 2 && void 0 !== arguments[2] && arguments[2], arguments.length > 3 ? arguments[3] : void 0), r = arguments.length > 4 ? arguments[4] : void 0, i = arguments.length > 5 ? arguments[5] : void 0, a = t.Editor.BlockManager.insert({
                                tool: e,
                                data: n,
                                index: o,
                                needToFocus: r,
                                replace: i
                            });
                            return new d.default(a);
                        }, t.composeBlockData = function() {
                            var e151 = (0, i45.default)(r44.default.mark(function e152(n) {
                                var o, i;
                                return r44.default.wrap(function(e) {
                                    for(;;)switch(e.prev = e.next){
                                        case 0:
                                            return o = t.Editor.Tools.blockTools.get(n), i = new h.default({
                                                tool: o,
                                                api: t.Editor.API,
                                                readOnly: !0,
                                                data: {},
                                                tunesData: {}
                                            }), e.abrupt("return", i.data);
                                        case 3:
                                        case "end":
                                            return e.stop();
                                    }
                                }, e152);
                            }));
                            return function(t) {
                                return e151.apply(this, arguments);
                            };
                        }(), t.update = function(e, n) {
                            var o = t.Editor.BlockManager, r = o.getBlockById(e);
                            if (r) {
                                var i = o.getBlockIndex(r);
                                o.insert({
                                    id: r.id,
                                    tool: r.name,
                                    data: n,
                                    index: i,
                                    replace: !0,
                                    tunes: r.tunes
                                });
                            } else f.log("blocks.update(): Block with passed id was not found", "warn");
                        }, t;
                    }
                    return (0, s.default)(o65, [
                        {
                            key: "getBlocksCount",
                            value: function() {
                                return this.Editor.BlockManager.blocks.length;
                            }
                        },
                        {
                            key: "getCurrentBlockIndex",
                            value: function() {
                                return this.Editor.BlockManager.currentBlockIndex;
                            }
                        },
                        {
                            key: "getBlockIndex",
                            value: function(t) {
                                var e = this.Editor.BlockManager.getBlockById(t);
                                if (e) return this.Editor.BlockManager.getBlockIndex(e);
                                f.logLabeled("There is no block with id `" + t + "`", "warn");
                            }
                        },
                        {
                            key: "getBlockByIndex",
                            value: function(t) {
                                var e = this.Editor.BlockManager.getBlockByIndex(t);
                                if (void 0 !== e) return new d.default(e);
                                f.logLabeled("There is no block at index `" + t + "`", "warn");
                            }
                        },
                        {
                            key: "getById",
                            value: function(t) {
                                var e = this.Editor.BlockManager.getBlockById(t);
                                return void 0 === e ? (f.logLabeled("There is no block with id `" + t + "`", "warn"), null) : new d.default(e);
                            }
                        },
                        {
                            key: "swap",
                            value: function(t, e) {
                                f.log("`blocks.swap()` method is deprecated and will be removed in the next major release. Use `block.move()` method instead", "info"), this.Editor.BlockManager.swap(t, e);
                            }
                        },
                        {
                            key: "move",
                            value: function(t, e) {
                                this.Editor.BlockManager.move(t, e);
                            }
                        },
                        {
                            key: "delete",
                            value: function(t) {
                                try {
                                    this.Editor.BlockManager.removeBlock(t);
                                } catch (t232) {
                                    return void f.logLabeled(t232, "warn");
                                }
                                0 === this.Editor.BlockManager.blocks.length && this.Editor.BlockManager.insert(), this.Editor.BlockManager.currentBlock && this.Editor.Caret.setToBlock(this.Editor.BlockManager.currentBlock, this.Editor.Caret.positions.END), this.Editor.Toolbar.close();
                            }
                        },
                        {
                            key: "clear",
                            value: function() {
                                this.Editor.BlockManager.clear(!0), this.Editor.InlineToolbar.close();
                            }
                        },
                        {
                            key: "render",
                            value: function(t) {
                                return this.Editor.BlockManager.clear(), this.Editor.Renderer.render(t.blocks);
                            }
                        },
                        {
                            key: "renderFromHTML",
                            value: function(t) {
                                return this.Editor.BlockManager.clear(), this.Editor.Paste.processText(t, !0);
                            }
                        },
                        {
                            key: "stretchBlock",
                            value: function(t) {
                                var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                                f.deprecationAssert(!0, "blocks.stretchBlock()", "BlockAPI");
                                var n = this.Editor.BlockManager.getBlockByIndex(t);
                                n && (n.stretched = e);
                            }
                        },
                        {
                            key: "insertNewBlock",
                            value: function() {
                                f.log("Method blocks.insertNewBlock() is deprecated and it will be removed in the next major release. Use blocks.insert() instead.", "warn"), this.insert();
                            }
                        },
                        {
                            key: "methods",
                            get: function() {
                                var t = this;
                                return {
                                    clear: function() {
                                        return t.clear();
                                    },
                                    render: function(e) {
                                        return t.render(e);
                                    },
                                    renderFromHTML: function(e) {
                                        return t.renderFromHTML(e);
                                    },
                                    delete: function(e) {
                                        return t.delete(e);
                                    },
                                    swap: function(e, n) {
                                        return t.swap(e, n);
                                    },
                                    move: function(e, n) {
                                        return t.move(e, n);
                                    },
                                    getBlockByIndex: function(e) {
                                        return t.getBlockByIndex(e);
                                    },
                                    getById: function(e) {
                                        return t.getById(e);
                                    },
                                    getCurrentBlockIndex: function() {
                                        return t.getCurrentBlockIndex();
                                    },
                                    getBlockIndex: function(e) {
                                        return t.getBlockIndex(e);
                                    },
                                    getBlocksCount: function() {
                                        return t.getBlocksCount();
                                    },
                                    stretchBlock: function(e) {
                                        var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                                        return t.stretchBlock(e, n);
                                    },
                                    insertNewBlock: function() {
                                        return t.insertNewBlock();
                                    },
                                    insert: this.insert,
                                    update: this.update,
                                    composeBlockData: this.composeBlockData
                                };
                            }
                        }
                    ]), o65;
                }(p.default);
                o64.default = b, b.displayName = "BlocksAPI", t230.exports = e149.default;
            }) ? o63.apply(e149, r43) : o63) || (t230.exports = i44);
        },
        function(t233, e153, n113) {
            var o66, r45, i46;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r45 = [
                e153,
                n113(2),
                n113(3),
                n113(5),
                n113(6),
                n113(4),
                n113(9)
            ], void 0 === (i46 = "function" == typeof (o66 = function(o67, r, i, a, s, l, c) {
                "use strict";
                var u = n113(1);
                function f() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o67, "__esModule", {
                    value: !0
                }), o67.default = void 0, r = u(r), i = u(i), a = u(a), s = u(s), l = u(l);
                var d = function(t234) {
                    (0, a.default)(o68, t234);
                    var e154, n114 = (e154 = o68, function() {
                        var t, n = (0, l.default)(e154);
                        if (f()) {
                            var o = (0, l.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, s.default)(this, t);
                    });
                    function o68() {
                        var t;
                        return (0, r.default)(this, o68), (t = n114.apply(this, arguments)).setToFirstBlock = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.Editor.Caret.positions.DEFAULT, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                            return !!t.Editor.BlockManager.firstBlock && (t.Editor.Caret.setToBlock(t.Editor.BlockManager.firstBlock, e, n), !0);
                        }, t.setToLastBlock = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.Editor.Caret.positions.DEFAULT, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                            return !!t.Editor.BlockManager.lastBlock && (t.Editor.Caret.setToBlock(t.Editor.BlockManager.lastBlock, e, n), !0);
                        }, t.setToPreviousBlock = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.Editor.Caret.positions.DEFAULT, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                            return !!t.Editor.BlockManager.previousBlock && (t.Editor.Caret.setToBlock(t.Editor.BlockManager.previousBlock, e, n), !0);
                        }, t.setToNextBlock = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.Editor.Caret.positions.DEFAULT, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                            return !!t.Editor.BlockManager.nextBlock && (t.Editor.Caret.setToBlock(t.Editor.BlockManager.nextBlock, e, n), !0);
                        }, t.setToBlock = function(e) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t.Editor.Caret.positions.DEFAULT, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                            return !!t.Editor.BlockManager.blocks[e] && (t.Editor.Caret.setToBlock(t.Editor.BlockManager.blocks[e], n, o), !0);
                        }, t.focus = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                            return e ? t.setToLastBlock(t.Editor.Caret.positions.END) : t.setToFirstBlock(t.Editor.Caret.positions.START);
                        }, t;
                    }
                    return (0, i.default)(o68, [
                        {
                            key: "methods",
                            get: function() {
                                return {
                                    setToFirstBlock: this.setToFirstBlock,
                                    setToLastBlock: this.setToLastBlock,
                                    setToPreviousBlock: this.setToPreviousBlock,
                                    setToNextBlock: this.setToNextBlock,
                                    setToBlock: this.setToBlock,
                                    focus: this.focus
                                };
                            }
                        }
                    ]), o68;
                }((c = u(c)).default);
                o67.default = d, d.displayName = "CaretAPI", t233.exports = e153.default;
            }) ? o66.apply(e153, r45) : o66) || (t233.exports = i46);
        },
        function(t235, e155, n115) {
            var o69, r46, i47;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r46 = [
                e155,
                n115(2),
                n115(3),
                n115(5),
                n115(6),
                n115(4),
                n115(9)
            ], void 0 === (i47 = "function" == typeof (o69 = function(o70, r, i, a, s, l, c) {
                "use strict";
                var u = n115(1);
                function f() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o70, "__esModule", {
                    value: !0
                }), o70.default = void 0, r = u(r), i = u(i), a = u(a), s = u(s), l = u(l);
                var d = function(t236) {
                    (0, a.default)(o71, t236);
                    var e156, n116 = (e156 = o71, function() {
                        var t, n = (0, l.default)(e156);
                        if (f()) {
                            var o = (0, l.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, s.default)(this, t);
                    });
                    function o71() {
                        return (0, r.default)(this, o71), n116.apply(this, arguments);
                    }
                    return (0, i.default)(o71, [
                        {
                            key: "on",
                            value: function(t, e) {
                                this.eventsDispatcher.on(t, e);
                            }
                        },
                        {
                            key: "emit",
                            value: function(t, e) {
                                this.eventsDispatcher.emit(t, e);
                            }
                        },
                        {
                            key: "off",
                            value: function(t, e) {
                                this.eventsDispatcher.off(t, e);
                            }
                        },
                        {
                            key: "methods",
                            get: function() {
                                var t = this;
                                return {
                                    emit: function(e, n) {
                                        return t.emit(e, n);
                                    },
                                    off: function(e, n) {
                                        return t.off(e, n);
                                    },
                                    on: function(e, n) {
                                        return t.on(e, n);
                                    }
                                };
                            }
                        }
                    ]), o71;
                }((c = u(c)).default);
                o70.default = d, d.displayName = "EventsAPI", t235.exports = e155.default;
            }) ? o69.apply(e155, r46) : o69) || (t235.exports = i47);
        },
        function(t237, e157, n117) {
            var o72, r47, i48;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r47 = [
                e157,
                n117(2),
                n117(3),
                n117(5),
                n117(6),
                n117(4),
                n117(60),
                n117(7),
                n117(9)
            ], void 0 === (i48 = "function" == typeof (o72 = function(o73, r, i, a, s, l, c, u, f) {
                "use strict";
                var d = n117(1);
                function p() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o73, "__esModule", {
                    value: !0
                }), o73.default = void 0, r = d(r), i = d(i), a = d(a), s = d(s), l = d(l), c = d(c);
                var h = function(t238) {
                    (0, a.default)(o74, t238);
                    var e158, n118 = (e158 = o74, function() {
                        var t, n = (0, l.default)(e158);
                        if (p()) {
                            var o = (0, l.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, s.default)(this, t);
                    });
                    function o74() {
                        return (0, r.default)(this, o74), n118.apply(this, arguments);
                    }
                    return (0, i.default)(o74, [
                        {
                            key: "getMethodsForTool",
                            value: function(t) {
                                return Object.assign(this.methods, {
                                    t: function(e) {
                                        return c.default.t(o74.getNamespace(t), e);
                                    }
                                });
                            }
                        },
                        {
                            key: "methods",
                            get: function() {
                                return {
                                    t: function() {
                                        (0, u.logLabeled)("I18n.t() method can be accessed only from Tools", "warn");
                                    }
                                };
                            }
                        }
                    ], [
                        {
                            key: "getNamespace",
                            value: function(t) {
                                return t.isTune() ? "blockTunes.".concat(t.name) : "tools.".concat(t.name);
                            }
                        }
                    ]), o74;
                }((f = d(f)).default);
                o73.default = h, h.displayName = "I18nAPI", t237.exports = e157.default;
            }) ? o72.apply(e157, r47) : o72) || (t237.exports = i48);
        },
        function(t239, e159, n119) {
            var o75, r48, i49;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r48 = [
                e159,
                n119(2),
                n119(3),
                n119(5),
                n119(6),
                n119(4),
                n119(9)
            ], void 0 === (i49 = "function" == typeof (o75 = function(o76, r, i, a, s, l, c) {
                "use strict";
                var u = n119(1);
                function f() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o76, "__esModule", {
                    value: !0
                }), o76.default = void 0, r = u(r), i = u(i), a = u(a), s = u(s), l = u(l);
                var d = function(t240) {
                    (0, a.default)(o77, t240);
                    var e, n120 = (e = o77, function() {
                        var t, n = (0, l.default)(e);
                        if (f()) {
                            var o = (0, l.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, s.default)(this, t);
                    });
                    function o77() {
                        return (0, r.default)(this, o77), n120.apply(this, arguments);
                    }
                    return (0, i.default)(o77, [
                        {
                            key: "open",
                            value: function() {
                                this.Editor.InlineToolbar.tryToShow();
                            }
                        },
                        {
                            key: "close",
                            value: function() {
                                this.Editor.InlineToolbar.close();
                            }
                        },
                        {
                            key: "methods",
                            get: function() {
                                var t = this;
                                return {
                                    close: function() {
                                        return t.close();
                                    },
                                    open: function() {
                                        return t.open();
                                    }
                                };
                            }
                        }
                    ]), o77;
                }((c = u(c)).default);
                o76.default = d, d.displayName = "InlineToolbarAPI", t239.exports = e159.default;
            }) ? o75.apply(e159, r48) : o75) || (t239.exports = i49);
        },
        function(t241, e160, n121) {
            var o78, r49, i50;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r49 = [
                e160,
                n121(2),
                n121(3),
                n121(5),
                n121(6),
                n121(4),
                n121(9)
            ], void 0 === (i50 = "function" == typeof (o78 = function(o79, r50, i, a, s, l, c) {
                "use strict";
                var u = n121(1);
                function f() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o79, "__esModule", {
                    value: !0
                }), o79.default = void 0, r50 = u(r50), i = u(i), a = u(a), s = u(s), l = u(l);
                var d = function(t242) {
                    (0, a.default)(o80, t242);
                    var e161, n122 = (e161 = o80, function() {
                        var t, n = (0, l.default)(e161);
                        if (f()) {
                            var o = (0, l.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, s.default)(this, t);
                    });
                    function o80() {
                        return (0, r50.default)(this, o80), n122.apply(this, arguments);
                    }
                    return (0, i.default)(o80, [
                        {
                            key: "on",
                            value: function(t, e, n, o) {
                                return this.listeners.on(t, e, n, o);
                            }
                        },
                        {
                            key: "off",
                            value: function(t, e, n, o) {
                                this.listeners.off(t, e, n, o);
                            }
                        },
                        {
                            key: "offById",
                            value: function(t) {
                                this.listeners.offById(t);
                            }
                        },
                        {
                            key: "methods",
                            get: function() {
                                var t = this;
                                return {
                                    on: function(e, n, o, r) {
                                        return t.on(e, n, o, r);
                                    },
                                    off: function(e, n, o, r) {
                                        return t.off(e, n, o, r);
                                    },
                                    offById: function(e) {
                                        return t.offById(e);
                                    }
                                };
                            }
                        }
                    ]), o80;
                }((c = u(c)).default);
                o79.default = d, d.displayName = "ListenersAPI", t241.exports = e160.default;
            }) ? o78.apply(e160, r49) : o78) || (t241.exports = i50);
        },
        function(t243, e162, n123) {
            var o81, r51, i51;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r51 = [
                e162,
                n123(2),
                n123(3),
                n123(5),
                n123(6),
                n123(4),
                n123(377),
                n123(9)
            ], void 0 === (i51 = "function" == typeof (o81 = function(o82, r, i52, a21, s, l, c, u) {
                "use strict";
                var f = n123(1);
                function d() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o82, "__esModule", {
                    value: !0
                }), o82.default = void 0, r = f(r), i52 = f(i52), a21 = f(a21), s = f(s), l = f(l), c = f(c);
                var p = function(t244) {
                    (0, a21.default)(o83, t244);
                    var e163, n124 = (e163 = o83, function() {
                        var t, n = (0, l.default)(e163);
                        if (d()) {
                            var o = (0, l.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, s.default)(this, t);
                    });
                    function o83(t) {
                        var e, i = t.config, a = t.eventsDispatcher;
                        return (0, r.default)(this, o83), (e = n124.call(this, {
                            config: i,
                            eventsDispatcher: a
                        })).notifier = new c.default, e;
                    }
                    return (0, i52.default)(o83, [
                        {
                            key: "show",
                            value: function(t) {
                                return this.notifier.show(t);
                            }
                        },
                        {
                            key: "methods",
                            get: function() {
                                var t = this;
                                return {
                                    show: function(e) {
                                        return t.show(e);
                                    }
                                };
                            }
                        }
                    ]), o83;
                }((u = f(u)).default);
                o82.default = p, p.displayName = "NotifierAPI", t243.exports = e162.default;
            }) ? o81.apply(e162, r51) : o81) || (t243.exports = i51);
        },
        function(t245, e164, n125) {
            var o84, r52, i53;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r52 = [
                e164,
                n125(2),
                n125(3),
                n125(5),
                n125(6),
                n125(4),
                n125(9)
            ], void 0 === (i53 = "function" == typeof (o84 = function(o85, r, i, a, s, l, c) {
                "use strict";
                var u = n125(1);
                function f() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o85, "__esModule", {
                    value: !0
                }), o85.default = void 0, r = u(r), i = u(i), a = u(a), s = u(s), l = u(l);
                var d = function(t246) {
                    (0, a.default)(o86, t246);
                    var e165, n126 = (e165 = o86, function() {
                        var t, n = (0, l.default)(e165);
                        if (f()) {
                            var o = (0, l.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, s.default)(this, t);
                    });
                    function o86() {
                        return (0, r.default)(this, o86), n126.apply(this, arguments);
                    }
                    return (0, i.default)(o86, [
                        {
                            key: "toggle",
                            value: function(t) {
                                return this.Editor.ReadOnly.toggle(t);
                            }
                        },
                        {
                            key: "methods",
                            get: function() {
                                var t = this;
                                return {
                                    toggle: function(e) {
                                        return t.toggle(e);
                                    },
                                    get isEnabled () {
                                        return t.isEnabled;
                                    }
                                };
                            }
                        },
                        {
                            key: "isEnabled",
                            get: function() {
                                return this.Editor.ReadOnly.isEnabled;
                            }
                        }
                    ]), o86;
                }((c = u(c)).default);
                o85.default = d, d.displayName = "ReadOnlyAPI", t245.exports = e164.default;
            }) ? o84.apply(e164, r52) : o84) || (t245.exports = i53);
        },
        function(t247, e166, n127) {
            var o87, r53, i54;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r53 = [
                e166,
                n127(2),
                n127(3),
                n127(5),
                n127(6),
                n127(4),
                n127(9),
                n127(67)
            ], void 0 === (i54 = "function" == typeof (o87 = function(o88, r, i, a, s, l, c, u) {
                "use strict";
                var f = n127(1);
                function d() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o88, "__esModule", {
                    value: !0
                }), o88.default = void 0, r = f(r), i = f(i), a = f(a), s = f(s), l = f(l);
                var p = function(t248) {
                    (0, a.default)(o89, t248);
                    var e167, n128 = (e167 = o89, function() {
                        var t, n = (0, l.default)(e167);
                        if (d()) {
                            var o = (0, l.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, s.default)(this, t);
                    });
                    function o89() {
                        return (0, r.default)(this, o89), n128.apply(this, arguments);
                    }
                    return (0, i.default)(o89, [
                        {
                            key: "clean",
                            value: function(t, e) {
                                return (0, u.clean)(t, e);
                            }
                        },
                        {
                            key: "methods",
                            get: function() {
                                var t = this;
                                return {
                                    clean: function(e, n) {
                                        return t.clean(e, n);
                                    }
                                };
                            }
                        }
                    ]), o89;
                }((c = f(c)).default);
                o88.default = p, p.displayName = "SanitizerAPI", t247.exports = e166.default;
            }) ? o87.apply(e166, r53) : o87) || (t247.exports = i54);
        },
        function(t249, e168, n129) {
            var o90, r54, i55;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r54 = [
                e168,
                n129(2),
                n129(3),
                n129(5),
                n129(6),
                n129(4),
                n129(7),
                n129(9)
            ], void 0 === (i55 = "function" == typeof (o90 = function(o91, r, i, a, s, l, c, u) {
                "use strict";
                var f = n129(8), d = n129(1);
                function p() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o91, "__esModule", {
                    value: !0
                }), o91.default = void 0, r = d(r), i = d(i), a = d(a), s = d(s), l = d(l), c = f(c);
                var h = function(t250) {
                    (0, a.default)(o92, t250);
                    var e, n130 = (e = o92, function() {
                        var t, n = (0, l.default)(e);
                        if (p()) {
                            var o = (0, l.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, s.default)(this, t);
                    });
                    function o92() {
                        return (0, r.default)(this, o92), n130.apply(this, arguments);
                    }
                    return (0, i.default)(o92, [
                        {
                            key: "save",
                            value: function() {
                                var t = "Editor's content can not be saved in read-only mode";
                                return this.Editor.ReadOnly.isEnabled ? (c.logLabeled(t, "warn"), Promise.reject(new Error(t))) : this.Editor.Saver.save();
                            }
                        },
                        {
                            key: "methods",
                            get: function() {
                                var t = this;
                                return {
                                    save: function() {
                                        return t.save();
                                    }
                                };
                            }
                        }
                    ]), o92;
                }((u = d(u)).default);
                o91.default = h, h.displayName = "SaverAPI", t249.exports = e168.default;
            }) ? o90.apply(e168, r54) : o90) || (t249.exports = i55);
        },
        function(t251, e169, n131) {
            var o93, r55, i56;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r55 = [
                e169,
                n131(2),
                n131(3),
                n131(5),
                n131(6),
                n131(4),
                n131(25),
                n131(9)
            ], void 0 === (i56 = "function" == typeof (o93 = function(o94, r, i, a, s, l, c, u) {
                "use strict";
                var f = n131(1);
                function d() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o94, "__esModule", {
                    value: !0
                }), o94.default = void 0, r = f(r), i = f(i), a = f(a), s = f(s), l = f(l), c = f(c);
                var p = function(t252) {
                    (0, a.default)(o95, t252);
                    var e170, n132 = (e170 = o95, function() {
                        var t, n = (0, l.default)(e170);
                        if (d()) {
                            var o = (0, l.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, s.default)(this, t);
                    });
                    function o95() {
                        return (0, r.default)(this, o95), n132.apply(this, arguments);
                    }
                    return (0, i.default)(o95, [
                        {
                            key: "findParentTag",
                            value: function(t, e) {
                                return (new c.default).findParentTag(t, e);
                            }
                        },
                        {
                            key: "expandToTag",
                            value: function(t) {
                                (new c.default).expandToTag(t);
                            }
                        },
                        {
                            key: "methods",
                            get: function() {
                                var t = this;
                                return {
                                    findParentTag: function(e, n) {
                                        return t.findParentTag(e, n);
                                    },
                                    expandToTag: function(e) {
                                        return t.expandToTag(e);
                                    }
                                };
                            }
                        }
                    ]), o95;
                }((u = f(u)).default);
                o94.default = p, p.displayName = "SelectionAPI", t251.exports = e169.default;
            }) ? o93.apply(e169, r55) : o93) || (t251.exports = i56);
        },
        function(t253, e171, n133) {
            var o96, r56, i57;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r56 = [
                e171,
                n133(2),
                n133(3),
                n133(5),
                n133(6),
                n133(4),
                n133(9)
            ], void 0 === (i57 = "function" == typeof (o96 = function(o97, r, i, a, s, l, c) {
                "use strict";
                var u = n133(1);
                function f() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o97, "__esModule", {
                    value: !0
                }), o97.default = void 0, r = u(r), i = u(i), a = u(a), s = u(s), l = u(l);
                var d = function(t254) {
                    (0, a.default)(o98, t254);
                    var e, n134 = (e = o98, function() {
                        var t, n = (0, l.default)(e);
                        if (f()) {
                            var o = (0, l.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, s.default)(this, t);
                    });
                    function o98() {
                        return (0, r.default)(this, o98), n134.apply(this, arguments);
                    }
                    return (0, i.default)(o98, [
                        {
                            key: "classes",
                            get: function() {
                                return {
                                    block: "cdx-block",
                                    inlineToolButton: "ce-inline-tool",
                                    inlineToolButtonActive: "ce-inline-tool--active",
                                    input: "cdx-input",
                                    loader: "cdx-loader",
                                    button: "cdx-button",
                                    settingsButton: "cdx-settings-button",
                                    settingsButtonActive: "cdx-settings-button--active"
                                };
                            }
                        }
                    ]), o98;
                }((c = u(c)).default);
                o97.default = d, d.displayName = "StylesAPI", t253.exports = e171.default;
            }) ? o96.apply(e171, r56) : o96) || (t253.exports = i57);
        },
        function(t255, e172, n135) {
            var o99, r57, i58;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r57 = [
                e172,
                n135(2),
                n135(3),
                n135(5),
                n135(6),
                n135(4),
                n135(9),
                n135(7)
            ], void 0 === (i58 = "function" == typeof (o99 = function(o100, r, i, a, s, l, c, u) {
                "use strict";
                var f = n135(8), d = n135(1);
                function p() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o100, "__esModule", {
                    value: !0
                }), o100.default = void 0, r = d(r), i = d(i), a = d(a), s = d(s), l = d(l), c = d(c), u = f(u);
                var h = function(t256) {
                    (0, a.default)(o101, t256);
                    var e173, n136 = (e173 = o101, function() {
                        var t, n = (0, l.default)(e173);
                        if (p()) {
                            var o = (0, l.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, s.default)(this, t);
                    });
                    function o101() {
                        return (0, r.default)(this, o101), n136.apply(this, arguments);
                    }
                    return (0, i.default)(o101, [
                        {
                            key: "open",
                            value: function() {
                                this.Editor.Toolbar.moveAndOpen();
                            }
                        },
                        {
                            key: "close",
                            value: function() {
                                this.Editor.Toolbar.close();
                            }
                        },
                        {
                            key: "toggleBlockSettings",
                            value: function(t) {
                                -1 !== this.Editor.BlockManager.currentBlockIndex ? (null != t ? t : !this.Editor.BlockSettings.opened) ? (this.Editor.Toolbar.moveAndOpen(), this.Editor.BlockSettings.open()) : this.Editor.BlockSettings.close() : u.logLabeled("Could't toggle the Toolbar because there is no block selected ", "warn");
                            }
                        },
                        {
                            key: "methods",
                            get: function() {
                                var t = this;
                                return {
                                    close: function() {
                                        return t.close();
                                    },
                                    open: function() {
                                        return t.open();
                                    },
                                    toggleBlockSettings: function(e) {
                                        return t.toggleBlockSettings(e);
                                    }
                                };
                            }
                        }
                    ]), o101;
                }(c.default);
                o100.default = h, h.displayName = "ToolbarAPI", t255.exports = e172.default;
            }) ? o99.apply(e172, r57) : o99) || (t255.exports = i58);
        },
        function(t257, e174, n137) {
            var o102, r58, i59;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r58 = [
                e174,
                n137(2),
                n137(3),
                n137(5),
                n137(6),
                n137(4),
                n137(9),
                n137(114)
            ], void 0 === (i59 = "function" == typeof (o102 = function(o103, r, i60, a22, s, l, c, u) {
                "use strict";
                var f = n137(1);
                function d() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o103, "__esModule", {
                    value: !0
                }), o103.default = void 0, r = f(r), i60 = f(i60), a22 = f(a22), s = f(s), l = f(l), c = f(c), u = f(u);
                var p = function(t258) {
                    (0, a22.default)(o104, t258);
                    var e175, n138 = (e175 = o104, function() {
                        var t, n = (0, l.default)(e175);
                        if (d()) {
                            var o = (0, l.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, s.default)(this, t);
                    });
                    function o104(t) {
                        var e, i = t.config, a = t.eventsDispatcher;
                        return (0, r.default)(this, o104), (e = n138.call(this, {
                            config: i,
                            eventsDispatcher: a
                        })).tooltip = new u.default, e;
                    }
                    return (0, i60.default)(o104, [
                        {
                            key: "destroy",
                            value: function() {
                                this.tooltip.destroy();
                            }
                        },
                        {
                            key: "show",
                            value: function(t, e, n) {
                                this.tooltip.show(t, e, n);
                            }
                        },
                        {
                            key: "hide",
                            value: function() {
                                this.tooltip.hide();
                            }
                        },
                        {
                            key: "onHover",
                            value: function(t, e, n) {
                                this.tooltip.onHover(t, e, n);
                            }
                        },
                        {
                            key: "methods",
                            get: function() {
                                var t = this;
                                return {
                                    show: function(e, n, o) {
                                        return t.show(e, n, o);
                                    },
                                    hide: function() {
                                        return t.hide();
                                    },
                                    onHover: function(e, n, o) {
                                        return t.onHover(e, n, o);
                                    }
                                };
                            }
                        }
                    ]), o104;
                }(c.default);
                o103.default = p, p.displayName = "TooltipAPI", t257.exports = e174.default;
            }) ? o102.apply(e174, r58) : o102) || (t257.exports = i59);
        },
        function(t259, e176, n139) {
            var o105, r59, i61;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r59 = [
                e176,
                n139(2),
                n139(3),
                n139(5),
                n139(6),
                n139(4),
                n139(9)
            ], void 0 === (i61 = "function" == typeof (o105 = function(o106, r, i, a, s, l, c) {
                "use strict";
                var u = n139(1);
                function f() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o106, "__esModule", {
                    value: !0
                }), o106.default = void 0, r = u(r), i = u(i), a = u(a), s = u(s), l = u(l);
                var d = function(t260) {
                    (0, a.default)(o107, t260);
                    var e, n140 = (e = o107, function() {
                        var t, n = (0, l.default)(e);
                        if (f()) {
                            var o = (0, l.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, s.default)(this, t);
                    });
                    function o107() {
                        return (0, r.default)(this, o107), n140.apply(this, arguments);
                    }
                    return (0, i.default)(o107, [
                        {
                            key: "methods",
                            get: function() {
                                return {
                                    nodes: this.editorNodes
                                };
                            }
                        },
                        {
                            key: "editorNodes",
                            get: function() {
                                return {
                                    wrapper: this.Editor.UI.nodes.wrapper,
                                    redactor: this.Editor.UI.nodes.redactor
                                };
                            }
                        }
                    ]), o107;
                }((c = u(c)).default);
                o106.default = d, d.displayName = "UiAPI", t259.exports = e176.default;
            }) ? o105.apply(e176, r59) : o105) || (t259.exports = i61);
        },
        function(t261, e177, n141) {
            var o108, r60, i62;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r60 = [
                e177,
                n141(2),
                n141(3),
                n141(5),
                n141(6),
                n141(4),
                n141(9),
                n141(7),
                n141(25),
                n141(62)
            ], void 0 === (i62 = "function" == typeof (o108 = function(o109, r61, i63, a23, s17, l12, c12, u, f, d) {
                "use strict";
                var p = n141(8), h = n141(1);
                function v() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o109, "__esModule", {
                    value: !0
                }), o109.default = void 0, r61 = h(r61), i63 = h(i63), a23 = h(a23), s17 = h(s17), l12 = h(l12), c12 = h(c12), u = p(u), f = h(f), d = h(d);
                var g = function(t262) {
                    (0, a23.default)(o110, t262);
                    var e178, n142 = (e178 = o110, function() {
                        var t, n = (0, l12.default)(e178);
                        if (v()) {
                            var o = (0, l12.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, s17.default)(this, t);
                    });
                    function o110() {
                        return (0, r61.default)(this, o110), n142.apply(this, arguments);
                    }
                    return (0, i63.default)(o110, [
                        {
                            key: "keydown",
                            value: function(t) {
                                switch(this.beforeKeydownProcessing(t), t.keyCode){
                                    case u.keyCodes.BACKSPACE:
                                        this.backspace(t);
                                        break;
                                    case u.keyCodes.ENTER:
                                        this.enter(t);
                                        break;
                                    case u.keyCodes.DOWN:
                                    case u.keyCodes.RIGHT:
                                        this.arrowRightAndDown(t);
                                        break;
                                    case u.keyCodes.UP:
                                    case u.keyCodes.LEFT:
                                        this.arrowLeftAndUp(t);
                                        break;
                                    case u.keyCodes.TAB:
                                        this.tabPressed(t);
                                }
                            }
                        },
                        {
                            key: "beforeKeydownProcessing",
                            value: function(t) {
                                this.needToolbarClosing(t) && u.isPrintableKey(t.keyCode) && (this.Editor.Toolbar.close(), this.Editor.ConversionToolbar.close(), t.ctrlKey || t.metaKey || t.altKey || t.shiftKey || (this.Editor.BlockManager.clearFocused(), this.Editor.BlockSelection.clearSelection(t)));
                            }
                        },
                        {
                            key: "keyup",
                            value: function(t) {
                                t.shiftKey || this.Editor.UI.checkEmptiness();
                            }
                        },
                        {
                            key: "tabPressed",
                            value: function(t) {
                                this.Editor.BlockSelection.clearSelection(t);
                                var e = this.Editor, n = e.BlockManager, o = e.InlineToolbar, r = e.ConversionToolbar, i = n.currentBlock;
                                if (i) {
                                    var a = i.isEmpty, s = i.tool.isDefault && a, l = !a && r.opened, c = !a && !f.default.isCollapsed && o.opened;
                                    s ? this.activateToolbox() : l || c || this.activateBlockSettings();
                                }
                            }
                        },
                        {
                            key: "dragOver",
                            value: function(t) {
                                this.Editor.BlockManager.getBlockByChildNode(t.target).dropTarget = !0;
                            }
                        },
                        {
                            key: "dragLeave",
                            value: function(t) {
                                this.Editor.BlockManager.getBlockByChildNode(t.target).dropTarget = !1;
                            }
                        },
                        {
                            key: "handleCommandC",
                            value: function(t) {
                                var e = this.Editor.BlockSelection;
                                e.anyBlockSelected && e.copySelectedBlocks(t);
                            }
                        },
                        {
                            key: "handleCommandX",
                            value: function(t) {
                                var e179 = this.Editor, n = e179.BlockSelection, o = e179.BlockManager, r = e179.Caret;
                                n.anyBlockSelected && n.copySelectedBlocks(t).then(function() {
                                    var e = o.removeSelectedBlocks(), i = o.insertDefaultBlockAtIndex(e, !0);
                                    r.setToBlock(i, r.positions.START), n.clearSelection(t);
                                });
                            }
                        },
                        {
                            key: "enter",
                            value: function(t) {
                                var e = this.Editor, n = e.BlockManager, o = e.UI;
                                if (!n.currentBlock.tool.isLineBreaksEnabled && !(o.someToolbarOpened && o.someFlipperButtonFocused || t.shiftKey)) {
                                    var r = this.Editor.BlockManager.currentBlock;
                                    this.Editor.Caret.isAtStart && !this.Editor.BlockManager.currentBlock.hasMedia ? this.Editor.BlockManager.insertDefaultBlockAtIndex(this.Editor.BlockManager.currentBlockIndex) : r = this.Editor.BlockManager.split(), this.Editor.Caret.setToBlock(r), this.Editor.Toolbar.moveAndOpen(r), t.preventDefault();
                                }
                            }
                        },
                        {
                            key: "backspace",
                            value: function(t) {
                                var e = this.Editor, n = e.BlockManager, o = e.BlockSelection, r = e.Caret, i = n.currentBlock, a = i.tool;
                                if (i.selected || i.isEmpty && i.currentInput === i.firstInput) {
                                    t.preventDefault();
                                    var s = n.currentBlockIndex;
                                    return n.previousBlock && 0 === n.previousBlock.inputs.length ? n.removeBlock(s - 1) : n.removeBlock(), r.setToBlock(n.currentBlock, s ? r.positions.END : r.positions.START), this.Editor.Toolbar.close(), void o.clearSelection(t);
                                }
                                if (!a.isLineBreaksEnabled || r.isAtStart) {
                                    var l = 0 === n.currentBlockIndex;
                                    r.isAtStart && f.default.isCollapsed && i.currentInput === i.firstInput && !l && (t.preventDefault(), this.mergeBlocks());
                                }
                            }
                        },
                        {
                            key: "mergeBlocks",
                            value: function() {
                                var t = this.Editor, e = t.BlockManager, n = t.Caret, o = t.Toolbar, r = e.previousBlock, i = e.currentBlock;
                                if (i.name !== r.name || !r.mergeable) return 0 === r.inputs.length || r.isEmpty ? (e.removeBlock(e.currentBlockIndex - 1), n.setToBlock(e.currentBlock), void o.close()) : void (n.navigatePrevious() && o.close());
                                n.createShadow(r.pluginsContent), e.mergeBlocks(r, i).then(function() {
                                    n.restoreCaret(r.pluginsContent), r.pluginsContent.normalize(), o.close();
                                });
                            }
                        },
                        {
                            key: "arrowRightAndDown",
                            value: function(t) {
                                var e = this, n = d.default.usedKeys.includes(t.keyCode) && (!t.shiftKey || t.keyCode === u.keyCodes.TAB);
                                if (!this.Editor.UI.someToolbarOpened || !n) {
                                    this.Editor.BlockManager.clearFocused(), this.Editor.Toolbar.close();
                                    var o = this.Editor.Caret.isAtEnd || this.Editor.BlockSelection.anyBlockSelected;
                                    t.shiftKey && t.keyCode === u.keyCodes.DOWN && o ? this.Editor.CrossBlockSelection.toggleBlockSelectedState() : ((t.keyCode === u.keyCodes.DOWN || t.keyCode === u.keyCodes.RIGHT && !this.isRtl ? this.Editor.Caret.navigateNext() : this.Editor.Caret.navigatePrevious()) ? t.preventDefault() : u.delay(function() {
                                        e.Editor.BlockManager.currentBlock && e.Editor.BlockManager.currentBlock.updateCurrentInput();
                                    }, 20)(), this.Editor.BlockSelection.clearSelection(t));
                                }
                            }
                        },
                        {
                            key: "arrowLeftAndUp",
                            value: function(t) {
                                var e = this;
                                if (this.Editor.UI.someToolbarOpened) {
                                    if (d.default.usedKeys.includes(t.keyCode) && (!t.shiftKey || t.keyCode === u.keyCodes.TAB)) return;
                                    this.Editor.UI.closeAllToolbars();
                                }
                                this.Editor.BlockManager.clearFocused(), this.Editor.Toolbar.close();
                                var n = this.Editor.Caret.isAtStart || this.Editor.BlockSelection.anyBlockSelected;
                                t.shiftKey && t.keyCode === u.keyCodes.UP && n ? this.Editor.CrossBlockSelection.toggleBlockSelectedState(!1) : ((t.keyCode === u.keyCodes.UP || t.keyCode === u.keyCodes.LEFT && !this.isRtl ? this.Editor.Caret.navigatePrevious() : this.Editor.Caret.navigateNext()) ? t.preventDefault() : u.delay(function() {
                                    e.Editor.BlockManager.currentBlock && e.Editor.BlockManager.currentBlock.updateCurrentInput();
                                }, 20)(), this.Editor.BlockSelection.clearSelection(t));
                            }
                        },
                        {
                            key: "needToolbarClosing",
                            value: function(t) {
                                var e = t.keyCode === u.keyCodes.ENTER && this.Editor.Toolbar.toolbox.opened, n = t.keyCode === u.keyCodes.ENTER && this.Editor.BlockSettings.opened, o = t.keyCode === u.keyCodes.ENTER && this.Editor.InlineToolbar.opened, r = t.keyCode === u.keyCodes.ENTER && this.Editor.ConversionToolbar.opened, i = t.keyCode === u.keyCodes.TAB;
                                return !(t.shiftKey || i || e || n || o || r);
                            }
                        },
                        {
                            key: "activateToolbox",
                            value: function() {
                                this.Editor.Toolbar.opened || this.Editor.Toolbar.moveAndOpen(), this.Editor.Toolbar.toolbox.open();
                            }
                        },
                        {
                            key: "activateBlockSettings",
                            value: function() {
                                this.Editor.Toolbar.opened || (this.Editor.BlockManager.currentBlock.focused = !0, this.Editor.Toolbar.moveAndOpen()), this.Editor.BlockSettings.opened || this.Editor.BlockSettings.open();
                            }
                        }
                    ]), o110;
                }(c12.default);
                o109.default = g, g.displayName = "BlockEvents", t261.exports = e177.default;
            }) ? o108.apply(e177, r60) : o108) || (t261.exports = i62);
        },
        function(t263, e180, n143) {
            var o111, r62, i64;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r62 = [
                e180,
                n143(20),
                n143(21),
                n143(2),
                n143(3),
                n143(5),
                n143(6),
                n143(4),
                n143(61),
                n143(9),
                n143(14),
                n143(7),
                n143(382),
                n143(112),
                n143(383)
            ], void 0 === (i64 = "function" == typeof (o111 = function(o112, r63, i65, a24, s18, l13, c13, u10, f8, d5, p4, h3, v1, g, y) {
                "use strict";
                var b3 = n143(8), m = n143(1);
                function k() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o112, "__esModule", {
                    value: !0
                }), o112.default = void 0, r63 = m(r63), i65 = m(i65), a24 = m(a24), s18 = m(s18), l13 = m(l13), c13 = m(c13), u10 = m(u10), f8 = b3(f8), d5 = m(d5), p4 = m(p4), h3 = b3(h3), v1 = m(v1), g = m(g);
                var x = function(t264) {
                    (0, l13.default)(b, t264);
                    var e181, n144, o113, d6 = (e181 = b, function() {
                        var t, n = (0, u10.default)(e181);
                        if (k()) {
                            var o = (0, u10.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, c13.default)(this, t);
                    });
                    function b() {
                        var t;
                        return (0, a24.default)(this, b), (t = d6.apply(this, arguments))._currentBlockIndex = -1, t._blocks = null, t;
                    }
                    return (0, s18.default)(b, [
                        {
                            key: "prepare",
                            value: function() {
                                var t = this, e182 = new v1.default(this.Editor.UI.nodes.redactor);
                                this._blocks = new Proxy(e182, {
                                    set: v1.default.set,
                                    get: v1.default.get
                                }), this.listeners.on(document, "copy", function(e) {
                                    return t.Editor.BlockEvents.handleCommandC(e);
                                });
                            }
                        },
                        {
                            key: "toggleReadOnly",
                            value: function(t) {
                                t ? this.disableModuleBindings() : this.enableModuleBindings();
                            }
                        },
                        {
                            key: "composeBlock",
                            value: function(t) {
                                var e = t.tool, n = t.data, o = void 0 === n ? {} : n, r = t.id, i = void 0 === r ? void 0 : r, a = t.tunes, s = void 0 === a ? {} : a, l = this.Editor.ReadOnly.isEnabled, c = this.Editor.Tools.blockTools.get(e), u = new f8.default({
                                    id: i,
                                    data: o,
                                    tool: c,
                                    api: this.Editor.API,
                                    readOnly: l,
                                    tunesData: s
                                });
                                return l || this.bindBlockEvents(u), u;
                            }
                        },
                        {
                            key: "insert",
                            value: function() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e = t.id, n = void 0 === e ? void 0 : e, o = t.tool, r = void 0 === o ? this.config.defaultBlock : o, i = t.data, a = void 0 === i ? {} : i, s = t.index, l = t.needToFocus, c = void 0 === l || l, u = t.replace, f = void 0 !== u && u, d = t.tunes, p = void 0 === d ? {} : d, h = s;
                                void 0 === h && (h = this.currentBlockIndex + (f ? 0 : 1));
                                var v = this.composeBlock({
                                    id: n,
                                    tool: r,
                                    data: a,
                                    tunes: p
                                });
                                return f && this.blockDidMutated(y.BlockMutationType.Removed, this.getBlockByIndex(h), {
                                    index: h
                                }), this._blocks.insert(h, v, f), this.blockDidMutated(y.BlockMutationType.Added, v, {
                                    index: h
                                }), c ? this.currentBlockIndex = h : h <= this.currentBlockIndex && this.currentBlockIndex++, v;
                            }
                        },
                        {
                            key: "replace",
                            value: function(t) {
                                var e = t.tool, n = void 0 === e ? this.config.defaultBlock : e, o = t.data, r = void 0 === o ? {} : o;
                                return this.insert({
                                    tool: n,
                                    data: r,
                                    index: this.currentBlockIndex,
                                    replace: !0
                                });
                            }
                        },
                        {
                            key: "paste",
                            value: function(t, e) {
                                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], o = this.insert({
                                    tool: t,
                                    replace: n
                                });
                                try {
                                    o.call(f8.BlockToolAPI.ON_PASTE, e);
                                } catch (e183) {
                                    h3.log("".concat(t, ": onPaste callback call is failed"), "error", e183);
                                }
                                return o;
                            }
                        },
                        {
                            key: "insertDefaultBlockAtIndex",
                            value: function(t) {
                                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = this.composeBlock({
                                    tool: this.config.defaultBlock
                                });
                                return this._blocks[t] = n, this.blockDidMutated(y.BlockMutationType.Added, n, {
                                    index: t
                                }), e ? this.currentBlockIndex = t : t <= this.currentBlockIndex && this.currentBlockIndex++, n;
                            }
                        },
                        {
                            key: "insertAtEnd",
                            value: function() {
                                return this.currentBlockIndex = this.blocks.length - 1, this.insert();
                            }
                        },
                        {
                            key: "mergeBlocks",
                            value: (o113 = (0, i65.default)(r63.default.mark(function t265(e, n) {
                                var o, i;
                                return r63.default.wrap(function(t) {
                                    for(;;)switch(t.prev = t.next){
                                        case 0:
                                            if (o = this._blocks.indexOf(n), !n.isEmpty) {
                                                t.next = 3;
                                                break;
                                            }
                                            return t.abrupt("return");
                                        case 3:
                                            return t.next = 5, n.data;
                                        case 5:
                                            if (i = t.sent, h3.isEmpty(i)) {
                                                t.next = 9;
                                                break;
                                            }
                                            return t.next = 9, e.mergeWith(i);
                                        case 9:
                                            this.removeBlock(o), this.currentBlockIndex = this._blocks.indexOf(e);
                                        case 11:
                                        case "end":
                                            return t.stop();
                                    }
                                }, t265, this);
                            })), function(t, e) {
                                return o113.apply(this, arguments);
                            })
                        },
                        {
                            key: "removeBlock",
                            value: function() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.currentBlockIndex;
                                if (!this.validateIndex(t)) throw new Error("Can't find a Block to remove");
                                var e = this._blocks[t];
                                e.destroy(), this._blocks.remove(t), this.blockDidMutated(y.BlockMutationType.Removed, e, {
                                    index: t
                                }), this.currentBlockIndex >= t && this.currentBlockIndex--, this.blocks.length ? 0 === t && (this.currentBlockIndex = 0) : (this.currentBlockIndex = -1, this.insert());
                            }
                        },
                        {
                            key: "removeSelectedBlocks",
                            value: function() {
                                for(var t, e = this.blocks.length - 1; e >= 0; e--)this.blocks[e].selected && (this.removeBlock(e), t = e);
                                return t;
                            }
                        },
                        {
                            key: "removeAllBlocks",
                            value: function() {
                                for(var t = this.blocks.length - 1; t >= 0; t--)this._blocks.remove(t);
                                this.currentBlockIndex = -1, this.insert(), this.currentBlock.firstInput.focus();
                            }
                        },
                        {
                            key: "split",
                            value: function() {
                                var t = this.Editor.Caret.extractFragmentFromCaretPosition(), e = p4.default.make("div");
                                e.appendChild(t);
                                var n = {
                                    text: p4.default.isEmpty(e) ? "" : e.innerHTML
                                };
                                return this.insert({
                                    data: n
                                });
                            }
                        },
                        {
                            key: "getBlockByIndex",
                            value: function(t) {
                                return -1 === t && (t = this._blocks.length - 1), this._blocks[t];
                            }
                        },
                        {
                            key: "getBlockIndex",
                            value: function(t) {
                                return this._blocks.indexOf(t);
                            }
                        },
                        {
                            key: "getBlockById",
                            value: function(t) {
                                return this._blocks.array.find(function(e) {
                                    return e.id === t;
                                });
                            }
                        },
                        {
                            key: "getBlock",
                            value: function(t) {
                                p4.default.isElement(t) || (t = t.parentNode);
                                var e = this._blocks.nodes, n = t.closest(".".concat(f8.default.CSS.wrapper)), o = e.indexOf(n);
                                if (o >= 0) return this._blocks[o];
                            }
                        },
                        {
                            key: "highlightCurrentNode",
                            value: function() {
                                this.clearFocused(), this.currentBlock.focused = !0;
                            }
                        },
                        {
                            key: "clearFocused",
                            value: function() {
                                this.blocks.forEach(function(t) {
                                    t.focused = !1;
                                });
                            }
                        },
                        {
                            key: "setCurrentBlockByChildNode",
                            value: function(t) {
                                p4.default.isElement(t) || (t = t.parentNode);
                                var e = t.closest(".".concat(f8.default.CSS.wrapper));
                                if (e) {
                                    var n = e.closest(".".concat(this.Editor.UI.CSS.editorWrapper));
                                    if (null == n ? void 0 : n.isEqualNode(this.Editor.UI.nodes.wrapper)) return this.currentBlockIndex = this._blocks.nodes.indexOf(e), this.currentBlock.updateCurrentInput(), this.currentBlock;
                                }
                            }
                        },
                        {
                            key: "getBlockByChildNode",
                            value: function(t266) {
                                p4.default.isElement(t266) || (t266 = t266.parentNode);
                                var e = t266.closest(".".concat(f8.default.CSS.wrapper));
                                return this.blocks.find(function(t) {
                                    return t.holder === e;
                                });
                            }
                        },
                        {
                            key: "swap",
                            value: function(t, e) {
                                this._blocks.swap(t, e), this.currentBlockIndex = e;
                            }
                        },
                        {
                            key: "move",
                            value: function(t) {
                                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.currentBlockIndex;
                                isNaN(t) || isNaN(e) ? h3.log("Warning during 'move' call: incorrect indices provided.", "warn") : this.validateIndex(t) && this.validateIndex(e) ? (this._blocks.move(t, e), this.currentBlockIndex = t, this.blockDidMutated(y.BlockMutationType.Moved, this.currentBlock, {
                                    fromIndex: e,
                                    toIndex: t
                                })) : h3.log("Warning during 'move' call: indices cannot be lower than 0 or greater than the amount of blocks.", "warn");
                            }
                        },
                        {
                            key: "dropPointer",
                            value: function() {
                                this.currentBlockIndex = -1, this.clearFocused();
                            }
                        },
                        {
                            key: "clear",
                            value: function() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                this._blocks.removeAll(), this.dropPointer(), t && this.insert(), this.Editor.UI.checkEmptiness();
                            }
                        },
                        {
                            key: "destroy",
                            value: (n144 = (0, i65.default)(r63.default.mark(function t267() {
                                return r63.default.wrap(function(t268) {
                                    for(;;)switch(t268.prev = t268.next){
                                        case 0:
                                            return t268.next = 2, Promise.all(this.blocks.map(function(t) {
                                                return t.destroy();
                                            }));
                                        case 2:
                                        case "end":
                                            return t268.stop();
                                    }
                                }, t267, this);
                            })), function() {
                                return n144.apply(this, arguments);
                            })
                        },
                        {
                            key: "bindBlockEvents",
                            value: function(t269) {
                                var e = this, n = this.Editor.BlockEvents;
                                this.readOnlyMutableListeners.on(t269.holder, "keydown", function(t) {
                                    n.keydown(t);
                                }), this.readOnlyMutableListeners.on(t269.holder, "keyup", function(t) {
                                    n.keyup(t);
                                }), this.readOnlyMutableListeners.on(t269.holder, "dragover", function(t) {
                                    n.dragOver(t);
                                }), this.readOnlyMutableListeners.on(t269.holder, "dragleave", function(t) {
                                    n.dragLeave(t);
                                }), t269.on("didMutated", function(t) {
                                    return e.blockDidMutated(y.BlockMutationType.Changed, t, {
                                        index: e.getBlockIndex(t)
                                    });
                                });
                            }
                        },
                        {
                            key: "disableModuleBindings",
                            value: function() {
                                this.readOnlyMutableListeners.clearAll();
                            }
                        },
                        {
                            key: "enableModuleBindings",
                            value: function() {
                                var t = this;
                                this.readOnlyMutableListeners.on(document, "cut", function(e) {
                                    return t.Editor.BlockEvents.handleCommandX(e);
                                }), this.blocks.forEach(function(e) {
                                    t.bindBlockEvents(e);
                                });
                            }
                        },
                        {
                            key: "validateIndex",
                            value: function(t) {
                                return !(t < 0 || t >= this._blocks.length);
                            }
                        },
                        {
                            key: "blockDidMutated",
                            value: function(t, e) {
                                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, o = new CustomEvent(t, {
                                    detail: Object.assign({
                                        target: new g.default(e)
                                    }, n)
                                });
                                return this.Editor.ModificationsObserver.onChange(o), e;
                            }
                        },
                        {
                            key: "currentBlockIndex",
                            get: function() {
                                return this._currentBlockIndex;
                            },
                            set: function(t) {
                                this._blocks[this._currentBlockIndex] && this._blocks[this._currentBlockIndex].willUnselect(), this._blocks[t] && this._blocks[t].willSelect(), this._currentBlockIndex = t;
                            }
                        },
                        {
                            key: "firstBlock",
                            get: function() {
                                return this._blocks[0];
                            }
                        },
                        {
                            key: "lastBlock",
                            get: function() {
                                return this._blocks[this._blocks.length - 1];
                            }
                        },
                        {
                            key: "currentBlock",
                            get: function() {
                                return this._blocks[this.currentBlockIndex];
                            },
                            set: function(t) {
                                this.currentBlockIndex = this.getBlockIndex(t);
                            }
                        },
                        {
                            key: "nextBlock",
                            get: function() {
                                return this.currentBlockIndex === this._blocks.length - 1 ? null : this._blocks[this.currentBlockIndex + 1];
                            }
                        },
                        {
                            key: "nextContentfulBlock",
                            get: function() {
                                return this.blocks.slice(this.currentBlockIndex + 1).find(function(t) {
                                    return !!t.inputs.length;
                                });
                            }
                        },
                        {
                            key: "previousContentfulBlock",
                            get: function() {
                                return this.blocks.slice(0, this.currentBlockIndex).reverse().find(function(t) {
                                    return !!t.inputs.length;
                                });
                            }
                        },
                        {
                            key: "previousBlock",
                            get: function() {
                                return 0 === this.currentBlockIndex ? null : this._blocks[this.currentBlockIndex - 1];
                            }
                        },
                        {
                            key: "blocks",
                            get: function() {
                                return this._blocks.array;
                            }
                        },
                        {
                            key: "isEditorEmpty",
                            get: function() {
                                return this.blocks.every(function(t) {
                                    return t.isEmpty;
                                });
                            }
                        }
                    ]), b;
                }(d5.default);
                o112.default = x, x.displayName = "BlockManager", t263.exports = e180.default;
            }) ? o111.apply(e180, r62) : o111) || (t263.exports = i64);
        },
        function(t270, e184, n145) {
            var o114, r64, i66;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r64 = [
                e184,
                n145(2),
                n145(3),
                n145(5),
                n145(6),
                n145(4),
                n145(9),
                n145(7),
                n145(14),
                n145(115),
                n145(25),
                n145(67)
            ], void 0 === (i66 = "function" == typeof (o114 = function(o115, r65, i67, a25, s19, l14, c, u, f, d, p, h) {
                "use strict";
                var v = n145(8), g = n145(1);
                function y() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o115, "__esModule", {
                    value: !0
                }), o115.default = void 0, r65 = g(r65), i67 = g(i67), a25 = g(a25), s19 = g(s19), l14 = g(l14), c = g(c), u = v(u), f = g(f), d = g(d), p = g(p);
                var b = function(t271) {
                    (0, a25.default)(o116, t271);
                    var e185, n146 = (e185 = o116, function() {
                        var t, n = (0, l14.default)(e185);
                        if (y()) {
                            var o = (0, l14.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, s19.default)(this, t);
                    });
                    function o116() {
                        var t;
                        return (0, r65.default)(this, o116), (t = n146.apply(this, arguments)).anyBlockSelectedCache = null, t.needToSelectAll = !1, t.nativeInputSelected = !1, t.readyToBlockSelection = !1, t;
                    }
                    return (0, i67.default)(o116, [
                        {
                            key: "prepare",
                            value: function() {
                                var t = this;
                                this.selection = new p.default, d.default.add({
                                    name: "CMD+A",
                                    handler: function(e) {
                                        var n = t.Editor, o = n.BlockManager;
                                        if (n.ReadOnly.isEnabled) return e.preventDefault(), void t.selectAllBlocks();
                                        o.currentBlock && t.handleCommandA(e);
                                    },
                                    on: this.Editor.UI.nodes.redactor
                                });
                            }
                        },
                        {
                            key: "toggleReadOnly",
                            value: function(t) {
                                p.default.get().removeAllRanges(), this.allBlocksSelected = !1;
                            }
                        },
                        {
                            key: "unSelectBlockByIndex",
                            value: function(t) {
                                var e = this.Editor.BlockManager;
                                (isNaN(t) ? e.currentBlock : e.getBlockByIndex(t)).selected = !1, this.clearCache();
                            }
                        },
                        {
                            key: "clearSelection",
                            value: function(t) {
                                var e186 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = this.Editor, o = n.BlockManager, r = n.Caret, i = n.RectangleSelection;
                                this.needToSelectAll = !1, this.nativeInputSelected = !1, this.readyToBlockSelection = !1;
                                var a = t && t instanceof KeyboardEvent, s = a && u.isPrintableKey(t.keyCode);
                                if (this.anyBlockSelected && a && s && !p.default.isSelectionExists) {
                                    var l = o.removeSelectedBlocks();
                                    o.insertDefaultBlockAtIndex(l, !0), r.setToBlock(o.currentBlock), u.delay(function() {
                                        var e = t.key;
                                        r.insertContentAtCaretPosition(e.length > 1 ? "" : e);
                                    }, 20)();
                                }
                                this.Editor.CrossBlockSelection.clear(t), this.anyBlockSelected && !i.isRectActivated() ? (e186 && this.selection.restore(), this.allBlocksSelected = !1) : this.Editor.RectangleSelection.clearSelection();
                            }
                        },
                        {
                            key: "copySelectedBlocks",
                            value: function(t272) {
                                var e = this;
                                t272.preventDefault();
                                var n147 = f.default.make("div");
                                this.selectedBlocks.forEach(function(t) {
                                    var o = (0, h.clean)(t.holder.innerHTML, e.sanitizerConfig), r = f.default.make("p");
                                    r.innerHTML = o, n147.appendChild(r);
                                });
                                var o117 = Array.from(n147.childNodes).map(function(t) {
                                    return t.textContent;
                                }).join("\n\n"), r66 = n147.innerHTML;
                                return t272.clipboardData.setData("text/plain", o117), t272.clipboardData.setData("text/html", r66), Promise.all(this.selectedBlocks.map(function(t) {
                                    return t.save();
                                })).then(function(n) {
                                    try {
                                        t272.clipboardData.setData(e.Editor.Paste.MIME_TYPE, JSON.stringify(n));
                                    } catch (t) {}
                                });
                            }
                        },
                        {
                            key: "selectBlockByIndex",
                            value: function(t) {
                                var e, n = this.Editor.BlockManager;
                                n.clearFocused(), e = isNaN(t) ? n.currentBlock : n.getBlockByIndex(t), this.selection.save(), p.default.get().removeAllRanges(), e.selected = !0, this.clearCache(), this.Editor.InlineToolbar.close();
                            }
                        },
                        {
                            key: "clearCache",
                            value: function() {
                                this.anyBlockSelectedCache = null;
                            }
                        },
                        {
                            key: "destroy",
                            value: function() {
                                d.default.remove(this.Editor.UI.nodes.redactor, "CMD+A");
                            }
                        },
                        {
                            key: "handleCommandA",
                            value: function(t) {
                                if (this.Editor.RectangleSelection.clearSelection(), !f.default.isNativeInput(t.target) || this.readyToBlockSelection) {
                                    var e = this.Editor.BlockManager.getBlock(t.target).inputs;
                                    e.length > 1 && !this.readyToBlockSelection ? this.readyToBlockSelection = !0 : 1 !== e.length || this.needToSelectAll ? this.needToSelectAll ? (t.preventDefault(), this.selectAllBlocks(), this.needToSelectAll = !1, this.readyToBlockSelection = !1, this.Editor.ConversionToolbar.close()) : this.readyToBlockSelection && (t.preventDefault(), this.selectBlockByIndex(), this.needToSelectAll = !0) : this.needToSelectAll = !0;
                                } else this.readyToBlockSelection = !0;
                            }
                        },
                        {
                            key: "selectAllBlocks",
                            value: function() {
                                this.selection.save(), p.default.get().removeAllRanges(), this.allBlocksSelected = !0, this.Editor.InlineToolbar.close();
                            }
                        },
                        {
                            key: "sanitizerConfig",
                            get: function() {
                                return {
                                    p: {},
                                    h1: {},
                                    h2: {},
                                    h3: {},
                                    h4: {},
                                    h5: {},
                                    h6: {},
                                    ol: {},
                                    ul: {},
                                    li: {},
                                    br: !0,
                                    img: {
                                        src: !0,
                                        width: !0,
                                        height: !0
                                    },
                                    a: {
                                        href: !0
                                    },
                                    b: {},
                                    i: {},
                                    u: {}
                                };
                            }
                        },
                        {
                            key: "allBlocksSelected",
                            get: function() {
                                return this.Editor.BlockManager.blocks.every(function(t) {
                                    return !0 === t.selected;
                                });
                            },
                            set: function(t) {
                                this.Editor.BlockManager.blocks.forEach(function(e) {
                                    e.selected = t;
                                }), this.clearCache();
                            }
                        },
                        {
                            key: "anyBlockSelected",
                            get: function() {
                                var t273 = this.Editor.BlockManager;
                                return null === this.anyBlockSelectedCache && (this.anyBlockSelectedCache = t273.blocks.some(function(t) {
                                    return !0 === t.selected;
                                })), this.anyBlockSelectedCache;
                            }
                        },
                        {
                            key: "selectedBlocks",
                            get: function() {
                                return this.Editor.BlockManager.blocks.filter(function(t) {
                                    return t.selected;
                                });
                            }
                        }
                    ]), o116;
                }(c.default);
                o115.default = b, b.displayName = "BlockSelection", t270.exports = e184.default;
            }) ? o114.apply(e184, r64) : o114) || (t270.exports = i66);
        },
        function(t274, e187, n148) {
            var o118, r67, i68;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r67 = [
                e187,
                n148(2),
                n148(3),
                n148(5),
                n148(6),
                n148(4),
                n148(25),
                n148(9),
                n148(14),
                n148(7)
            ], void 0 === (i68 = "function" == typeof (o118 = function(o119, r68, i69, a26, s20, l, c, u, f, d) {
                "use strict";
                var p = n148(8), h = n148(1);
                function v() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o119, "__esModule", {
                    value: !0
                }), o119.default = void 0, r68 = h(r68), i69 = h(i69), a26 = h(a26), s20 = h(s20), l = h(l), c = h(c), u = h(u), f = h(f), d = p(d);
                var g = function(t275) {
                    (0, a26.default)(o120, t275);
                    var e188, n149 = (e188 = o120, function() {
                        var t, n = (0, l.default)(e188);
                        if (v()) {
                            var o = (0, l.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, s20.default)(this, t);
                    });
                    function o120() {
                        return (0, r68.default)(this, o120), n149.apply(this, arguments);
                    }
                    return (0, i69.default)(o120, [
                        {
                            key: "setToBlock",
                            value: function(t) {
                                var e, n = this, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.positions.DEFAULT, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, i = this.Editor.BlockManager;
                                switch(o){
                                    case this.positions.START:
                                        e = t.firstInput;
                                        break;
                                    case this.positions.END:
                                        e = t.lastInput;
                                        break;
                                    default:
                                        e = t.currentInput;
                                }
                                if (e) {
                                    var a = f.default.getDeepestNode(e, o === this.positions.END), s = f.default.getContentLength(a);
                                    switch(!0){
                                        case o === this.positions.START:
                                            r = 0;
                                            break;
                                        case o === this.positions.END:
                                        case r > s:
                                            r = s;
                                    }
                                    d.delay(function() {
                                        n.set(a, r);
                                    }, 20)(), i.setCurrentBlockByChildNode(t.holder), i.currentBlock.currentInput = e;
                                }
                            }
                        },
                        {
                            key: "setToInput",
                            value: function(t) {
                                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.positions.DEFAULT, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, o = this.Editor.BlockManager.currentBlock, r = f.default.getDeepestNode(t);
                                switch(e){
                                    case this.positions.START:
                                        this.set(r, 0);
                                        break;
                                    case this.positions.END:
                                        this.set(r, f.default.getContentLength(r));
                                        break;
                                    default:
                                        n && this.set(r, n);
                                }
                                o.currentInput = t;
                            }
                        },
                        {
                            key: "set",
                            value: function(t) {
                                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n = c.default.setCursor(t, e), o = n.top, r = n.bottom, i = window, a = i.innerHeight;
                                o < 0 && window.scrollBy(0, o), r > a && window.scrollBy(0, r - a);
                            }
                        },
                        {
                            key: "setToTheLastBlock",
                            value: function() {
                                var t = this.Editor.BlockManager.lastBlock;
                                if (t) {
                                    if (t.tool.isDefault && t.isEmpty) this.setToBlock(t);
                                    else {
                                        var e = this.Editor.BlockManager.insertAtEnd();
                                        this.setToBlock(e);
                                    }
                                }
                            }
                        },
                        {
                            key: "extractFragmentFromCaretPosition",
                            value: function() {
                                var t = c.default.get();
                                if (t.rangeCount) {
                                    var e = t.getRangeAt(0), n = this.Editor.BlockManager.currentBlock.currentInput;
                                    if (e.deleteContents(), n) {
                                        if (f.default.isNativeInput(n)) {
                                            var o = n, r = document.createDocumentFragment(), i = o.value.substring(0, o.selectionStart), a = o.value.substring(o.selectionStart);
                                            return r.textContent = a, o.value = i, r;
                                        }
                                        var s = e.cloneRange();
                                        return s.selectNodeContents(n), s.setStart(e.endContainer, e.endOffset), s.extractContents();
                                    }
                                }
                            }
                        },
                        {
                            key: "navigateNext",
                            value: function() {
                                var t = this.Editor.BlockManager, e = t.currentBlock, n = t.nextContentfulBlock, o = e.nextInput, r = this.isAtEnd, i = n;
                                if (!i && !o) {
                                    if (e.tool.isDefault || !r) return !1;
                                    i = t.insertAtEnd();
                                }
                                return !!r && (o ? this.setToInput(o, this.positions.START) : this.setToBlock(i, this.positions.START), !0);
                            }
                        },
                        {
                            key: "navigatePrevious",
                            value: function() {
                                var t = this.Editor.BlockManager, e = t.currentBlock, n = t.previousContentfulBlock;
                                if (!e) return !1;
                                var o = e.previousInput;
                                return !(!n && !o || !this.isAtStart || (o ? this.setToInput(o, this.positions.END) : this.setToBlock(n, this.positions.END), 0));
                            }
                        },
                        {
                            key: "createShadow",
                            value: function(t) {
                                var e = document.createElement("span");
                                e.classList.add(o120.CSS.shadowCaret), t.insertAdjacentElement("beforeend", e);
                            }
                        },
                        {
                            key: "restoreCaret",
                            value: function(t276) {
                                var e = t276.querySelector(".".concat(o120.CSS.shadowCaret));
                                e && ((new c.default).expandToTag(e), setTimeout(function() {
                                    var t = document.createRange();
                                    t.selectNode(e), t.extractContents();
                                }, 50));
                            }
                        },
                        {
                            key: "insertContentAtCaretPosition",
                            value: function(t277) {
                                var e = document.createDocumentFragment(), n = document.createElement("div"), o = c.default.get(), r = c.default.range;
                                n.innerHTML = t277, Array.from(n.childNodes).forEach(function(t) {
                                    return e.appendChild(t);
                                }), 0 === e.childNodes.length && e.appendChild(new Text);
                                var i = e.lastChild;
                                r.deleteContents(), r.insertNode(e);
                                var a = document.createRange();
                                a.setStart(i, i.textContent.length), o.removeAllRanges(), o.addRange(a);
                            }
                        },
                        {
                            key: "getHigherLevelSiblings",
                            value: function(t, e) {
                                for(var n = t, o = []; n.parentNode && "true" !== n.parentNode.contentEditable;)n = n.parentNode;
                                for(var r = "left" === e ? "previousSibling" : "nextSibling"; n[r];)n = n[r], o.push(n);
                                return o;
                            }
                        },
                        {
                            key: "positions",
                            get: function() {
                                return {
                                    START: "start",
                                    END: "end",
                                    DEFAULT: "default"
                                };
                            }
                        },
                        {
                            key: "isAtStart",
                            get: function() {
                                var t278 = c.default.get(), e189 = f.default.getDeepestNode(this.Editor.BlockManager.currentBlock.currentInput), n150 = t278.focusNode;
                                if (f.default.isNativeInput(e189)) return 0 === e189.selectionEnd;
                                if (!t278.anchorNode) return !1;
                                var o121 = n150.textContent.search(/\S/);
                                -1 === o121 && (o121 = 0);
                                var r = t278.focusOffset;
                                return n150.nodeType !== Node.TEXT_NODE && n150.childNodes.length && (n150.childNodes[r] ? (n150 = n150.childNodes[r], r = 0) : r = (n150 = n150.childNodes[r - 1]).textContent.length), !(!f.default.isLineBreakTag(e189) && !f.default.isEmpty(e189) || !this.getHigherLevelSiblings(n150, "left").every(function(t) {
                                    var e = f.default.isLineBreakTag(t), n = 1 === t.children.length && f.default.isLineBreakTag(t.children[0]), o = e || n;
                                    return f.default.isEmpty(t) && !o;
                                }) || r !== o121) || null === e189 || n150 === e189 && r <= o121;
                            }
                        },
                        {
                            key: "isAtEnd",
                            get: function() {
                                var t279 = c.default.get(), e190 = t279.focusNode, n = f.default.getDeepestNode(this.Editor.BlockManager.currentBlock.currentInput, !0);
                                if (f.default.isNativeInput(n)) return n.selectionEnd === n.value.length;
                                if (!t279.focusNode) return !1;
                                var o = t279.focusOffset;
                                if (e190.nodeType !== Node.TEXT_NODE && e190.childNodes.length && (e190.childNodes[o - 1] ? o = (e190 = e190.childNodes[o - 1]).textContent.length : (e190 = e190.childNodes[0], o = 0)), f.default.isLineBreakTag(n) || f.default.isEmpty(n)) {
                                    var r = this.getHigherLevelSiblings(e190, "right");
                                    if (r.every(function(t, e) {
                                        return e === r.length - 1 && f.default.isLineBreakTag(t) || f.default.isEmpty(t) && !f.default.isLineBreakTag(t);
                                    }) && o === e190.textContent.length) return !0;
                                }
                                var i = n.textContent.replace(/\s+$/, "");
                                return e190 === n && o >= i.length;
                            }
                        }
                    ], [
                        {
                            key: "CSS",
                            get: function() {
                                return {
                                    shadowCaret: "cdx-shadow-caret"
                                };
                            }
                        }
                    ]), o120;
                }(u.default);
                o119.default = g, g.displayName = "Caret", t274.exports = e187.default;
            }) ? o118.apply(e187, r67) : o118) || (t274.exports = i68);
        },
        function(t280, e191, n151) {
            var o122, r69, i70;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r69 = [
                e191,
                n151(20),
                n151(21),
                n151(2),
                n151(3),
                n151(5),
                n151(6),
                n151(4),
                n151(9),
                n151(25),
                n151(7)
            ], void 0 === (i70 = "function" == typeof (o122 = function(o123, r70, i71, a27, s21, l15, c14, u, f9, d, p) {
                "use strict";
                var h = n151(8), v = n151(1);
                function g() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o123, "__esModule", {
                    value: !0
                }), o123.default = void 0, r70 = v(r70), i71 = v(i71), a27 = v(a27), s21 = v(s21), l15 = v(l15), c14 = v(c14), u = v(u), f9 = v(f9), d = v(d), p = h(p);
                var y = function(t281) {
                    (0, l15.default)(f, t281);
                    var e192, n152, o124 = (e192 = f, function() {
                        var t, n = (0, u.default)(e192);
                        if (g()) {
                            var o = (0, u.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, c14.default)(this, t);
                    });
                    function f() {
                        var t;
                        return (0, a27.default)(this, f), (t = o124.apply(this, arguments)).onMouseUp = function() {
                            t.listeners.off(document, "mouseover", t.onMouseOver), t.listeners.off(document, "mouseup", t.onMouseUp);
                        }, t.onMouseOver = function(e) {
                            var n = t.Editor, o = n.BlockManager, r = n.BlockSelection, i = o.getBlockByChildNode(e.relatedTarget) || t.lastSelectedBlock, a = o.getBlockByChildNode(e.target);
                            if (i && a && a !== i) {
                                if (i === t.firstSelectedBlock) return d.default.get().removeAllRanges(), i.selected = !0, a.selected = !0, void r.clearCache();
                                if (a === t.firstSelectedBlock) return i.selected = !1, a.selected = !1, void r.clearCache();
                                t.Editor.InlineToolbar.close(), t.toggleBlocksSelectedState(i, a), t.lastSelectedBlock = a;
                            }
                        }, t;
                    }
                    return (0, s21.default)(f, [
                        {
                            key: "prepare",
                            value: (n152 = (0, i71.default)(r70.default.mark(function t282() {
                                var e = this;
                                return r70.default.wrap(function(t283) {
                                    for(;;)switch(t283.prev = t283.next){
                                        case 0:
                                            this.listeners.on(document, "mousedown", function(t) {
                                                e.enableCrossBlockSelection(t);
                                            });
                                        case 1:
                                        case "end":
                                            return t283.stop();
                                    }
                                }, t282, this);
                            })), function() {
                                return n152.apply(this, arguments);
                            })
                        },
                        {
                            key: "watchSelection",
                            value: function(t) {
                                if (t.button === p.mouseButtons.LEFT) {
                                    var e = this.Editor.BlockManager;
                                    this.firstSelectedBlock = e.getBlock(t.target), this.lastSelectedBlock = this.firstSelectedBlock, this.listeners.on(document, "mouseover", this.onMouseOver), this.listeners.on(document, "mouseup", this.onMouseUp);
                                }
                            }
                        },
                        {
                            key: "toggleBlockSelectedState",
                            value: function() {
                                var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0], e = this.Editor, n = e.BlockManager, o = e.BlockSelection;
                                this.lastSelectedBlock || (this.lastSelectedBlock = this.firstSelectedBlock = n.currentBlock), this.firstSelectedBlock === this.lastSelectedBlock && (this.firstSelectedBlock.selected = !0, o.clearCache(), d.default.get().removeAllRanges());
                                var r = n.blocks.indexOf(this.lastSelectedBlock) + (t ? 1 : -1), i = n.blocks[r];
                                i && (this.lastSelectedBlock.selected !== i.selected ? (i.selected = !0, o.clearCache()) : (this.lastSelectedBlock.selected = !1, o.clearCache()), this.lastSelectedBlock = i, this.Editor.InlineToolbar.close(), i.holder.scrollIntoView({
                                    block: "nearest"
                                }));
                            }
                        },
                        {
                            key: "clear",
                            value: function(t) {
                                var e = this.Editor, n = e.BlockManager, o = e.BlockSelection, r = e.Caret, i = n.blocks.indexOf(this.firstSelectedBlock), a = n.blocks.indexOf(this.lastSelectedBlock);
                                if (o.anyBlockSelected && i > -1 && a > -1) {
                                    if (t && t instanceof KeyboardEvent) switch(t.keyCode){
                                        case p.keyCodes.DOWN:
                                        case p.keyCodes.RIGHT:
                                            r.setToBlock(n.blocks[Math.max(i, a)], r.positions.END);
                                            break;
                                        case p.keyCodes.UP:
                                        case p.keyCodes.LEFT:
                                            r.setToBlock(n.blocks[Math.min(i, a)], r.positions.START);
                                            break;
                                        default:
                                            r.setToBlock(n.blocks[Math.max(i, a)], r.positions.END);
                                    }
                                    else r.setToBlock(n.blocks[Math.max(i, a)], r.positions.END);
                                }
                                this.firstSelectedBlock = this.lastSelectedBlock = null;
                            }
                        },
                        {
                            key: "enableCrossBlockSelection",
                            value: function(t) {
                                var e = this.Editor.UI;
                                d.default.isCollapsed || this.Editor.BlockSelection.clearSelection(t), e.nodes.redactor.contains(t.target) ? this.watchSelection(t) : this.Editor.BlockSelection.clearSelection(t);
                            }
                        },
                        {
                            key: "toggleBlocksSelectedState",
                            value: function(t, e) {
                                for(var n = this.Editor, o = n.BlockManager, r = n.BlockSelection, i = o.blocks.indexOf(t), a = o.blocks.indexOf(e), s = t.selected !== e.selected, l = Math.min(i, a); l <= Math.max(i, a); l++){
                                    var c = o.blocks[l];
                                    c !== this.firstSelectedBlock && c !== (s ? t : e) && (o.blocks[l].selected = !o.blocks[l].selected, r.clearCache());
                                }
                            }
                        },
                        {
                            key: "isCrossBlockSelectionStarted",
                            get: function() {
                                return !!this.firstSelectedBlock && !!this.lastSelectedBlock;
                            }
                        }
                    ]), f;
                }(f9.default);
                o123.default = y, y.displayName = "CrossBlockSelection", t280.exports = e191.default;
            }) ? o122.apply(e191, r69) : o122) || (t280.exports = i70);
        },
        function(t284, e193, n153) {
            var o125, r71, i72;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r71 = [
                e193,
                n153(20),
                n153(21),
                n153(2),
                n153(3),
                n153(5),
                n153(6),
                n153(4),
                n153(25),
                n153(9)
            ], void 0 === (i72 = "function" == typeof (o125 = function(o126, r, i73, a28, s22, l16, c, u, f, d7) {
                "use strict";
                var p = n153(1);
                function h() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o126, "__esModule", {
                    value: !0
                }), o126.default = void 0, r = p(r), i73 = p(i73), a28 = p(a28), s22 = p(s22), l16 = p(l16), c = p(c), u = p(u), f = p(f);
                var v = function(t285) {
                    (0, l16.default)(d, t285);
                    var e194, n154, o127 = (e194 = d, function() {
                        var t, n = (0, u.default)(e194);
                        if (h()) {
                            var o = (0, u.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, c.default)(this, t);
                    });
                    function d() {
                        var t;
                        return (0, a28.default)(this, d), (t = o127.apply(this, arguments)).isStartedAtEditor = !1, t;
                    }
                    return (0, s22.default)(d, [
                        {
                            key: "toggleReadOnly",
                            value: function(t) {
                                t ? this.disableModuleBindings() : this.enableModuleBindings();
                            }
                        },
                        {
                            key: "enableModuleBindings",
                            value: function() {
                                var t = this, e195 = this.Editor.UI;
                                this.readOnlyMutableListeners.on(e195.nodes.holder, "drop", function() {
                                    var e196 = (0, i73.default)(r.default.mark(function e197(n) {
                                        return r.default.wrap(function(e) {
                                            for(;;)switch(e.prev = e.next){
                                                case 0:
                                                    return e.next = 2, t.processDrop(n);
                                                case 2:
                                                case "end":
                                                    return e.stop();
                                            }
                                        }, e197);
                                    }));
                                    return function(t) {
                                        return e196.apply(this, arguments);
                                    };
                                }(), !0), this.readOnlyMutableListeners.on(e195.nodes.holder, "dragstart", function() {
                                    t.processDragStart();
                                }), this.readOnlyMutableListeners.on(e195.nodes.holder, "dragover", function(e) {
                                    t.processDragOver(e);
                                }, !0);
                            }
                        },
                        {
                            key: "disableModuleBindings",
                            value: function() {
                                this.readOnlyMutableListeners.clearAll();
                            }
                        },
                        {
                            key: "processDrop",
                            value: (n154 = (0, i73.default)(r.default.mark(function t286(e) {
                                var n, o, i, a, s, l;
                                return r.default.wrap(function(t287) {
                                    for(;;)switch(t287.prev = t287.next){
                                        case 0:
                                            return n = this.Editor, o = n.BlockManager, i = n.Caret, a = n.Paste, e.preventDefault(), o.blocks.forEach(function(t) {
                                                t.dropTarget = !1;
                                            }), f.default.isAtEditor && !f.default.isCollapsed && this.isStartedAtEditor && document.execCommand("delete"), this.isStartedAtEditor = !1, (s = o.setCurrentBlockByChildNode(e.target)) ? this.Editor.Caret.setToBlock(s, i.positions.END) : (l = o.setCurrentBlockByChildNode(o.lastBlock.holder), this.Editor.Caret.setToBlock(l, i.positions.END)), t287.next = 9, a.processDataTransfer(e.dataTransfer, !0);
                                        case 9:
                                        case "end":
                                            return t287.stop();
                                    }
                                }, t286, this);
                            })), function(t) {
                                return n154.apply(this, arguments);
                            })
                        },
                        {
                            key: "processDragStart",
                            value: function() {
                                f.default.isAtEditor && !f.default.isCollapsed && (this.isStartedAtEditor = !0), this.Editor.InlineToolbar.close();
                            }
                        },
                        {
                            key: "processDragOver",
                            value: function(t) {
                                t.preventDefault();
                            }
                        }
                    ]), d;
                }((d7 = p(d7)).default);
                o126.default = v, v.displayName = "DragNDrop", t284.exports = e193.default;
            }) ? o125.apply(e193, r71) : o125) || (t284.exports = i72);
        },
        function(t288, e198, n155) {
            var o128, r72, i74;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r72 = [
                e198,
                n155(2),
                n155(3),
                n155(5),
                n155(6),
                n155(4),
                n155(9),
                n155(7)
            ], void 0 === (i74 = "function" == typeof (o128 = function(o129, r, i, a, s, l, c, u) {
                "use strict";
                var f = n155(8), d = n155(1);
                function p() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o129, "__esModule", {
                    value: !0
                }), o129.default = void 0, r = d(r), i = d(i), a = d(a), s = d(s), l = d(l), c = d(c), u = f(u);
                var h = function(t289) {
                    (0, a.default)(o130, t289);
                    var e, n156 = (e = o130, function() {
                        var t, n = (0, l.default)(e);
                        if (p()) {
                            var o = (0, l.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, s.default)(this, t);
                    });
                    function o130() {
                        var t;
                        return (0, r.default)(this, o130), (t = n156.apply(this, arguments)).disabled = !1, t;
                    }
                    return (0, i.default)(o130, [
                        {
                            key: "enable",
                            value: function() {
                                this.disabled = !1;
                            }
                        },
                        {
                            key: "disable",
                            value: function() {
                                this.disabled = !0;
                            }
                        },
                        {
                            key: "onChange",
                            value: function(t) {
                                !this.disabled && u.isFunction(this.config.onChange) && this.config.onChange(this.Editor.API.methods, t);
                            }
                        }
                    ]), o130;
                }(c.default);
                o129.default = h, h.displayName = "ModificationsObserver", t288.exports = e198.default;
            }) ? o128.apply(e198, r72) : o128) || (t288.exports = i74);
        },
        function(t290, e199, n157) {
            var o131, r73, i75;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r73 = [
                e199,
                n157(42),
                n157(30),
                n157(20),
                n157(21),
                n157(2),
                n157(3),
                n157(5),
                n157(6),
                n157(4),
                n157(9),
                n157(14),
                n157(7),
                n157(67)
            ], void 0 === (i75 = "function" == typeof (o131 = function(o132, r74, i76, a29, s23, l17, c15, u11, f10, d8, p5, h, v, g) {
                "use strict";
                var y5 = n157(8), b4 = n157(1);
                function m() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o132, "__esModule", {
                    value: !0
                }), o132.default = void 0, r74 = b4(r74), i76 = b4(i76), a29 = b4(a29), s23 = b4(s23), l17 = b4(l17), c15 = b4(c15), u11 = b4(u11), f10 = b4(f10), d8 = b4(d8), p5 = b4(p5), h = b4(h), v = y5(v);
                var k2 = function(t291) {
                    (0, u11.default)(T, t291);
                    var e200, n158, o133, p6, y, b, k, x, w, S = (e200 = T, function() {
                        var t, n = (0, d8.default)(e200);
                        if (m()) {
                            var o = (0, d8.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, f10.default)(this, t);
                    });
                    function T() {
                        var t292;
                        return (0, l17.default)(this, T), (t292 = S.apply(this, arguments)).MIME_TYPE = "application/x-editor-js", t292.toolsTags = {}, t292.tagsByTool = {}, t292.toolsPatterns = [], t292.toolsFiles = {}, t292.exceptionList = [], t292.processTool = function(e) {
                            try {
                                var n = e.create({}, {}, !1);
                                if (!1 === e.pasteConfig) return void t292.exceptionList.push(e.name);
                                if (!v.isFunction(n.onPaste)) return;
                                t292.getTagsConfig(e), t292.getFilesConfig(e), t292.getPatternsConfig(e);
                            } catch (t) {
                                v.log("Paste handling for \xab".concat(e.name, "\xbb Tool hasn't been set up because of the error"), "warn", t);
                            }
                        }, t292.handlePasteEvent = function() {
                            var e201 = (0, s23.default)(a29.default.mark(function e202(n) {
                                var o, r, i;
                                return a29.default.wrap(function(e) {
                                    for(;;)switch(e.prev = e.next){
                                        case 0:
                                            if (o = t292.Editor, r = o.BlockManager, i = o.Toolbar, r.currentBlock && (!t292.isNativeBehaviour(n.target) || n.clipboardData.types.includes("Files"))) {
                                                e.next = 3;
                                                break;
                                            }
                                            return e.abrupt("return");
                                        case 3:
                                            if (!r.currentBlock || !t292.exceptionList.includes(r.currentBlock.name)) {
                                                e.next = 5;
                                                break;
                                            }
                                            return e.abrupt("return");
                                        case 5:
                                            n.preventDefault(), t292.processDataTransfer(n.clipboardData), r.clearFocused(), i.close();
                                        case 9:
                                        case "end":
                                            return e.stop();
                                    }
                                }, e202);
                            }));
                            return function(t) {
                                return e201.apply(this, arguments);
                            };
                        }(), t292;
                    }
                    return (0, c15.default)(T, [
                        {
                            key: "prepare",
                            value: (w = (0, s23.default)(a29.default.mark(function t293() {
                                return a29.default.wrap(function(t) {
                                    for(;;)switch(t.prev = t.next){
                                        case 0:
                                            this.processTools();
                                        case 1:
                                        case "end":
                                            return t.stop();
                                    }
                                }, t293, this);
                            })), function() {
                                return w.apply(this, arguments);
                            })
                        },
                        {
                            key: "toggleReadOnly",
                            value: function(t) {
                                t ? this.unsetCallback() : this.setCallback();
                            }
                        },
                        {
                            key: "processDataTransfer",
                            value: (x = (0, s23.default)(a29.default.mark(function t294(e203) {
                                var n, o, r, i, s, l, c, u, f, d = arguments;
                                return a29.default.wrap(function(t295) {
                                    for(;;)switch(t295.prev = t295.next){
                                        case 0:
                                            if (n = d.length > 1 && void 0 !== d[1] && d[1], o = this.Editor.Tools, !((r = e203.types).includes ? r.includes("Files") : r.contains("Files"))) {
                                                t295.next = 8;
                                                break;
                                            }
                                            return t295.next = 7, this.processFiles(e203.files);
                                        case 7:
                                            return t295.abrupt("return");
                                        case 8:
                                            if (i = e203.getData(this.MIME_TYPE), s = e203.getData("text/plain"), l = e203.getData("text/html"), !i) {
                                                t295.next = 19;
                                                break;
                                            }
                                            return t295.prev = 12, this.insertEditorJSData(JSON.parse(i)), t295.abrupt("return");
                                        case 17:
                                            t295.prev = 17, t295.t0 = t295.catch(12);
                                        case 19:
                                            if (n && s.trim() && l.trim() && (l = "<p>" + (l.trim() ? l : s) + "</p>"), c = Object.keys(this.toolsTags).reduce(function(t, e) {
                                                return t[e.toLowerCase()] = !0, t;
                                            }, {}), u = Object.assign({}, c, o.getAllInlineToolsSanitizeConfig(), {
                                                br: {}
                                            }), (f = (0, g.clean)(l, u)).trim() && f.trim() !== s && h.default.isHTMLString(f)) {
                                                t295.next = 28;
                                                break;
                                            }
                                            return t295.next = 26, this.processText(s);
                                        case 26:
                                            t295.next = 30;
                                            break;
                                        case 28:
                                            return t295.next = 30, this.processText(f, !0);
                                        case 30:
                                        case "end":
                                            return t295.stop();
                                    }
                                }, t294, this, [
                                    [
                                        12,
                                        17
                                    ]
                                ]);
                            })), function(t) {
                                return x.apply(this, arguments);
                            })
                        },
                        {
                            key: "processText",
                            value: (k = (0, s23.default)(a29.default.mark(function t296(e204) {
                                var n159, o, r, i, l, c, u, f = this, d = arguments;
                                return a29.default.wrap(function(t297) {
                                    for(;;)switch(t297.prev = t297.next){
                                        case 0:
                                            if (n159 = d.length > 1 && void 0 !== d[1] && d[1], o = this.Editor, r = o.Caret, i = o.BlockManager, (l = n159 ? this.processHTML(e204) : this.processPlain(e204)).length) {
                                                t297.next = 5;
                                                break;
                                            }
                                            return t297.abrupt("return");
                                        case 5:
                                            if (1 !== l.length) {
                                                t297.next = 8;
                                                break;
                                            }
                                            return l[0].isBlock ? this.processSingleBlock(l.pop()) : this.processInlinePaste(l.pop()), t297.abrupt("return");
                                        case 8:
                                            c = i.currentBlock && i.currentBlock.tool.isDefault, u = c && i.currentBlock.isEmpty, l.map(function() {
                                                var t298 = (0, s23.default)(a29.default.mark(function t299(e, n) {
                                                    return a29.default.wrap(function(t) {
                                                        for(;;)switch(t.prev = t.next){
                                                            case 0:
                                                                return t.abrupt("return", f.insertBlock(e, 0 === n && u));
                                                            case 1:
                                                            case "end":
                                                                return t.stop();
                                                        }
                                                    }, t299);
                                                }));
                                                return function(e, n) {
                                                    return t298.apply(this, arguments);
                                                };
                                            }()), i.currentBlock && r.setToBlock(i.currentBlock, r.positions.END);
                                        case 12:
                                        case "end":
                                            return t297.stop();
                                    }
                                }, t296, this);
                            })), function(t) {
                                return k.apply(this, arguments);
                            })
                        },
                        {
                            key: "setCallback",
                            value: function() {
                                this.listeners.on(this.Editor.UI.nodes.holder, "paste", this.handlePasteEvent);
                            }
                        },
                        {
                            key: "unsetCallback",
                            value: function() {
                                this.listeners.off(this.Editor.UI.nodes.holder, "paste", this.handlePasteEvent);
                            }
                        },
                        {
                            key: "processTools",
                            value: function() {
                                var t = this.Editor.Tools.blockTools;
                                Array.from(t.values()).forEach(this.processTool);
                            }
                        },
                        {
                            key: "getTagsConfig",
                            value: function(t300) {
                                var e = this, n160 = t300.pasteConfig.tags || [];
                                n160.forEach(function(n) {
                                    Object.prototype.hasOwnProperty.call(e.toolsTags, n) ? v.log("Paste handler for \xab".concat(t300.name, "\xbb Tool on \xab").concat(n, "\xbb tag is skipped ") + "because it is already used by \xab".concat(e.toolsTags[n].tool.name, "\xbb Tool."), "warn") : e.toolsTags[n.toUpperCase()] = {
                                        tool: t300
                                    };
                                }), this.tagsByTool[t300.name] = n160.map(function(t) {
                                    return t.toUpperCase();
                                });
                            }
                        },
                        {
                            key: "getFilesConfig",
                            value: function(t) {
                                var e205 = t.pasteConfig.files, n = void 0 === e205 ? {} : e205, o = n.extensions, r = n.mimeTypes;
                                (o || r) && (o && !Array.isArray(o) && (v.log("\xabextensions\xbb property of the onDrop config for \xab".concat(t.name, "\xbb Tool should be an array")), o = []), r && !Array.isArray(r) && (v.log("\xabmimeTypes\xbb property of the onDrop config for \xab".concat(t.name, "\xbb Tool should be an array")), r = []), r && (r = r.filter(function(e) {
                                    return !!v.isValidMimeType(e) || (v.log("MIME type value \xab".concat(e, "\xbb for the \xab").concat(t.name, "\xbb Tool is not a valid MIME type"), "warn"), !1);
                                })), this.toolsFiles[t.name] = {
                                    extensions: o || [],
                                    mimeTypes: r || []
                                });
                            }
                        },
                        {
                            key: "getPatternsConfig",
                            value: function(t) {
                                var e = this;
                                t.pasteConfig.patterns && !v.isEmpty(t.pasteConfig.patterns) && Object.entries(t.pasteConfig.patterns).forEach(function(n) {
                                    var o = (0, i76.default)(n, 2), r = o[0], a = o[1];
                                    a instanceof RegExp || v.log("Pattern ".concat(a, " for \xab").concat(t.name, "\xbb Tool is skipped because it should be a Regexp instance."), "warn"), e.toolsPatterns.push({
                                        key: r,
                                        pattern: a,
                                        tool: t
                                    });
                                });
                            }
                        },
                        {
                            key: "isNativeBehaviour",
                            value: function(t) {
                                return h.default.isNativeInput(t);
                            }
                        },
                        {
                            key: "processFiles",
                            value: (b = (0, s23.default)(a29.default.mark(function t301(e206) {
                                var n, o, r, i, s = this;
                                return a29.default.wrap(function(t302) {
                                    for(;;)switch(t302.prev = t302.next){
                                        case 0:
                                            return n = this.Editor.BlockManager, t302.next = 3, Promise.all(Array.from(e206).map(function(t) {
                                                return s.processFile(t);
                                            }));
                                        case 3:
                                            o = (o = t302.sent).filter(function(t) {
                                                return !!t;
                                            }), r = n.currentBlock.tool.isDefault, i = r && n.currentBlock.isEmpty, o.forEach(function(t, e) {
                                                n.paste(t.type, t.event, 0 === e && i);
                                            });
                                        case 8:
                                        case "end":
                                            return t302.stop();
                                    }
                                }, t301, this);
                            })), function(t) {
                                return b.apply(this, arguments);
                            })
                        },
                        {
                            key: "processFile",
                            value: (y = (0, s23.default)(a29.default.mark(function t303(e207) {
                                var n161, o134, r75, s24, l18;
                                return a29.default.wrap(function(t304) {
                                    for(;;)switch(t304.prev = t304.next){
                                        case 0:
                                            if (n161 = v.getFileExtension(e207), o134 = Object.entries(this.toolsFiles).find(function(t305) {
                                                var o135 = (0, i76.default)(t305, 2), r76 = (o135[0], o135[1]), a = r76.mimeTypes, s = r76.extensions, l = e207.type.split("/"), c = (0, i76.default)(l, 2), u = c[0], f = c[1], d = s.find(function(t) {
                                                    return t.toLowerCase() === n161.toLowerCase();
                                                }), p = a.find(function(t) {
                                                    var e = t.split("/"), n = (0, i76.default)(e, 2), o = n[0], r = n[1];
                                                    return o === u && (r === f || "*" === r);
                                                });
                                                return !!d || !!p;
                                            })) {
                                                t304.next = 4;
                                                break;
                                            }
                                            return t304.abrupt("return");
                                        case 4:
                                            return r75 = (0, i76.default)(o134, 1), s24 = r75[0], l18 = this.composePasteEvent("file", {
                                                file: e207
                                            }), t304.abrupt("return", {
                                                event: l18,
                                                type: s24
                                            });
                                        case 7:
                                        case "end":
                                            return t304.stop();
                                    }
                                }, t303, this);
                            })), function(t) {
                                return y.apply(this, arguments);
                            })
                        },
                        {
                            key: "processHTML",
                            value: function(t306) {
                                var e208 = this, n = this.Editor.Tools, o136 = h.default.make("DIV");
                                return o136.innerHTML = t306, this.getNodes(o136).map(function(t307) {
                                    var o, r = n.defaultTool, i = !1;
                                    switch(t307.nodeType){
                                        case Node.DOCUMENT_FRAGMENT_NODE:
                                            (o = h.default.make("div")).appendChild(t307);
                                            break;
                                        case Node.ELEMENT_NODE:
                                            o = t307, i = !0, e208.toolsTags[o.tagName] && (r = e208.toolsTags[o.tagName].tool);
                                    }
                                    var a = r.pasteConfig.tags.reduce(function(t, e) {
                                        return t[e.toLowerCase()] = {}, t;
                                    }, {}), s = Object.assign({}, a, r.baseSanitizeConfig);
                                    o.innerHTML = (0, g.clean)(o.innerHTML, s);
                                    var l = e208.composePasteEvent("tag", {
                                        data: o
                                    });
                                    return {
                                        content: o,
                                        isBlock: i,
                                        tool: r.name,
                                        event: l
                                    };
                                }).filter(function(t) {
                                    return !h.default.isNodeEmpty(t.content) || h.default.isSingleTag(t.content);
                                });
                            }
                        },
                        {
                            key: "processPlain",
                            value: function(t308) {
                                var e = this, n162 = this.config.defaultBlock;
                                if (!t308) return [];
                                var o = n162;
                                return t308.split(/\r?\n/).filter(function(t) {
                                    return t.trim();
                                }).map(function(t) {
                                    var n = h.default.make("div");
                                    n.textContent = t;
                                    var r = e.composePasteEvent("tag", {
                                        data: n
                                    });
                                    return {
                                        content: n,
                                        tool: o,
                                        isBlock: !1,
                                        event: r
                                    };
                                });
                            }
                        },
                        {
                            key: "processSingleBlock",
                            value: (p6 = (0, s23.default)(a29.default.mark(function t309(e) {
                                var n, o, r, i;
                                return a29.default.wrap(function(t) {
                                    for(;;)switch(t.prev = t.next){
                                        case 0:
                                            if (n = this.Editor, o = n.Caret, r = n.BlockManager, (i = r.currentBlock) && e.tool === i.name && h.default.containsOnlyInlineElements(e.content.innerHTML)) {
                                                t.next = 5;
                                                break;
                                            }
                                            return this.insertBlock(e, (null == i ? void 0 : i.tool.isDefault) && i.isEmpty), t.abrupt("return");
                                        case 5:
                                            o.insertContentAtCaretPosition(e.content.innerHTML);
                                        case 6:
                                        case "end":
                                            return t.stop();
                                    }
                                }, t309, this);
                            })), function(t) {
                                return p6.apply(this, arguments);
                            })
                        },
                        {
                            key: "processInlinePaste",
                            value: (o133 = (0, s23.default)(a29.default.mark(function t310(e) {
                                var n, o, r, i, s, l, c, u;
                                return a29.default.wrap(function(t) {
                                    for(;;)switch(t.prev = t.next){
                                        case 0:
                                            if (n = this.Editor, o = n.BlockManager, r = n.Caret, i = e.content, !(o.currentBlock && o.currentBlock.tool.isDefault && i.textContent.length < T.PATTERN_PROCESSING_MAX_LENGTH)) {
                                                t.next = 12;
                                                break;
                                            }
                                            return t.next = 6, this.processPattern(i.textContent);
                                        case 6:
                                            if (!(s = t.sent)) {
                                                t.next = 12;
                                                break;
                                            }
                                            return l = o.currentBlock && o.currentBlock.tool.isDefault && o.currentBlock.isEmpty, c = o.paste(s.tool, s.event, l), r.setToBlock(c, r.positions.END), t.abrupt("return");
                                        case 12:
                                            o.currentBlock && o.currentBlock.currentInput ? (u = o.currentBlock.tool.baseSanitizeConfig, document.execCommand("insertHTML", !1, (0, g.clean)(i.innerHTML, u))) : this.insertBlock(e);
                                        case 13:
                                        case "end":
                                            return t.stop();
                                    }
                                }, t310, this);
                            })), function(t) {
                                return o133.apply(this, arguments);
                            })
                        },
                        {
                            key: "processPattern",
                            value: (n158 = (0, s23.default)(a29.default.mark(function t311(e) {
                                var n163, o;
                                return a29.default.wrap(function(t312) {
                                    for(;;)switch(t312.prev = t312.next){
                                        case 0:
                                            if (n163 = this.toolsPatterns.find(function(t) {
                                                var n = t.pattern.exec(e);
                                                return !!n && e === n.shift();
                                            })) {
                                                t312.next = 3;
                                                break;
                                            }
                                            return t312.abrupt("return");
                                        case 3:
                                            return o = this.composePasteEvent("pattern", {
                                                key: n163.key,
                                                data: e
                                            }), t312.abrupt("return", {
                                                event: o,
                                                tool: n163.tool.name
                                            });
                                        case 5:
                                        case "end":
                                            return t312.stop();
                                    }
                                }, t311, this);
                            })), function(t) {
                                return n158.apply(this, arguments);
                            })
                        },
                        {
                            key: "insertBlock",
                            value: function(t) {
                                var e, n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], o = this.Editor, r = o.BlockManager, i = o.Caret, a = r.currentBlock;
                                if (n && a && a.isEmpty) return e = r.paste(t.tool, t.event, !0), void i.setToBlock(e, i.positions.END);
                                e = r.paste(t.tool, t.event), i.setToBlock(e, i.positions.END);
                            }
                        },
                        {
                            key: "insertEditorJSData",
                            value: function(t313) {
                                var e209 = this.Editor, n = e209.BlockManager, o = e209.Caret, r77 = e209.Tools;
                                (0, g.sanitizeBlocks)(t313, function(t) {
                                    return r77.blockTools.get(t).sanitizeConfig;
                                }).forEach(function(t, e) {
                                    var r = t.tool, i = t.data, a = !1;
                                    0 === e && (a = n.currentBlock && n.currentBlock.tool.isDefault && n.currentBlock.isEmpty);
                                    var s = n.insert({
                                        tool: r,
                                        data: i,
                                        replace: a
                                    });
                                    o.setToBlock(s, o.positions.END);
                                });
                            }
                        },
                        {
                            key: "processElementNode",
                            value: function(t314, e210, n) {
                                var o = Object.keys(this.toolsTags), i = t314, a = (this.toolsTags[i.tagName] || {}).tool, s = this.tagsByTool[null == a ? void 0 : a.name] || [], l = o.includes(i.tagName), c = h.default.blockElements.includes(i.tagName.toLowerCase()), u = Array.from(i.children).some(function(t) {
                                    var e = t.tagName;
                                    return o.includes(e) && !s.includes(e);
                                }), f = Array.from(i.children).some(function(t) {
                                    var e = t.tagName;
                                    return h.default.blockElements.includes(e.toLowerCase());
                                });
                                return c || l || u ? l && !u || c && !f && !u ? [].concat((0, r74.default)(e210), [
                                    n,
                                    i
                                ]) : void 0 : (n.appendChild(i), [].concat((0, r74.default)(e210), [
                                    n
                                ]));
                            }
                        },
                        {
                            key: "getNodes",
                            value: function(t315) {
                                var e, n = this;
                                return Array.from(t315.childNodes).reduce(function t(o, i) {
                                    if (h.default.isEmpty(i) && !h.default.isSingleTag(i)) return o;
                                    var a = o[o.length - 1], s = new DocumentFragment;
                                    switch(a && h.default.isFragment(a) && (s = o.pop()), i.nodeType){
                                        case Node.ELEMENT_NODE:
                                            if (e = n.processElementNode(i, o, s)) return e;
                                            break;
                                        case Node.TEXT_NODE:
                                            return s.appendChild(i), [].concat((0, r74.default)(o), [
                                                s
                                            ]);
                                        default:
                                            return [].concat((0, r74.default)(o), [
                                                s
                                            ]);
                                    }
                                    return [].concat((0, r74.default)(o), (0, r74.default)(Array.from(i.childNodes).reduce(t, [])));
                                }, []);
                            }
                        },
                        {
                            key: "composePasteEvent",
                            value: function(t, e) {
                                return new CustomEvent(t, {
                                    detail: e
                                });
                            }
                        }
                    ]), T;
                }(p5.default);
                o132.default = k2, k2.displayName = "Paste", k2.PATTERN_PROCESSING_MAX_LENGTH = 450, t290.exports = e199.default;
            }) ? o131.apply(e199, r73) : o131) || (t290.exports = i75);
        },
        function(t316, e211, n164) {
            var o137, r78, i77;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r78 = [
                e211,
                n164(20),
                n164(30),
                n164(21),
                n164(2),
                n164(3),
                n164(5),
                n164(6),
                n164(4),
                n164(9),
                n164(151)
            ], void 0 === (i77 = "function" == typeof (o137 = function(o138, r, i78, a30, s, l, c, u, f, d9, p) {
                "use strict";
                var h4 = n164(1);
                function v() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o138, "__esModule", {
                    value: !0
                }), o138.default = void 0, r = h4(r), i78 = h4(i78), a30 = h4(a30), s = h4(s), l = h4(l), c = h4(c), u = h4(u), f = h4(f);
                var g = function(t317) {
                    (0, c.default)(h, t317);
                    var e212, n165, o139, d = (e212 = h, function() {
                        var t, n = (0, f.default)(e212);
                        if (v()) {
                            var o = (0, f.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, u.default)(this, t);
                    });
                    function h() {
                        var t;
                        return (0, s.default)(this, h), (t = d.apply(this, arguments)).toolsDontSupportReadOnly = [], t.readOnlyEnabled = !1, t;
                    }
                    return (0, l.default)(h, [
                        {
                            key: "prepare",
                            value: (o139 = (0, a30.default)(r.default.mark(function t318() {
                                var e213, n166, o;
                                return r.default.wrap(function(t319) {
                                    for(;;)switch(t319.prev = t319.next){
                                        case 0:
                                            e213 = this.Editor.Tools, n166 = e213.blockTools, o = [], Array.from(n166.entries()).forEach(function(t) {
                                                var e = (0, i78.default)(t, 2), n = e[0];
                                                e[1].isReadOnlySupported || o.push(n);
                                            }), this.toolsDontSupportReadOnly = o, this.config.readOnly && o.length > 0 && this.throwCriticalError(), this.toggle(this.config.readOnly);
                                        case 7:
                                        case "end":
                                            return t319.stop();
                                    }
                                }, t318, this);
                            })), function() {
                                return o139.apply(this, arguments);
                            })
                        },
                        {
                            key: "toggle",
                            value: (n165 = (0, a30.default)(r.default.mark(function t320() {
                                var e, n, o, i, a = arguments;
                                return r.default.wrap(function(t) {
                                    for(;;)switch(t.prev = t.next){
                                        case 0:
                                            (e = a.length > 0 && void 0 !== a[0] ? a[0] : !this.readOnlyEnabled) && this.toolsDontSupportReadOnly.length > 0 && this.throwCriticalError(), n = this.readOnlyEnabled, this.readOnlyEnabled = e, t.t0 = r.default.keys(this.Editor);
                                        case 5:
                                            if ((t.t1 = t.t0()).done) {
                                                t.next = 12;
                                                break;
                                            }
                                            if (o = t.t1.value, this.Editor[o].toggleReadOnly) {
                                                t.next = 9;
                                                break;
                                            }
                                            return t.abrupt("continue", 5);
                                        case 9:
                                            this.Editor[o].toggleReadOnly(e), t.next = 5;
                                            break;
                                        case 12:
                                            if (n !== e) {
                                                t.next = 14;
                                                break;
                                            }
                                            return t.abrupt("return", this.readOnlyEnabled);
                                        case 14:
                                            return t.next = 16, this.Editor.Saver.save();
                                        case 16:
                                            return i = t.sent, t.next = 19, this.Editor.BlockManager.clear();
                                        case 19:
                                            return t.next = 21, this.Editor.Renderer.render(i.blocks);
                                        case 21:
                                            return t.abrupt("return", this.readOnlyEnabled);
                                        case 22:
                                        case "end":
                                            return t.stop();
                                    }
                                }, t320, this);
                            })), function() {
                                return n165.apply(this, arguments);
                            })
                        },
                        {
                            key: "throwCriticalError",
                            value: function() {
                                throw new p.CriticalError("To enable read-only mode all connected tools should support it. Tools ".concat(this.toolsDontSupportReadOnly.join(", "), " don't support read-only mode."));
                            }
                        },
                        {
                            key: "isEnabled",
                            get: function() {
                                return this.readOnlyEnabled;
                            }
                        }
                    ]), h;
                }((d9 = h4(d9)).default);
                o138.default = g, g.displayName = "ReadOnly", t316.exports = e211.default;
            }) ? o137.apply(e211, r78) : o137) || (t316.exports = i77);
        },
        function(t321, e214, n167) {
            var o140, r79, i79;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r79 = [
                e214,
                n167(2),
                n167(3),
                n167(5),
                n167(6),
                n167(4),
                n167(9),
                n167(14),
                n167(25),
                n167(61),
                n167(7)
            ], void 0 === (i79 = "function" == typeof (o140 = function(o141, r80, i80, a31, s25, l19, c16, u12, f11, d10, p) {
                "use strict";
                var h = n167(8), v = n167(1);
                function g(t322) {
                    if ("undefined" == typeof Symbol || null == t322[Symbol.iterator]) {
                        if (Array.isArray(t322) || (t322 = function(t, e) {
                            if (t) {
                                if ("string" == typeof t) return y(t, e);
                                var n = Object.prototype.toString.call(t).slice(8, -1);
                                return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? y(t, e) : void 0;
                            }
                        }(t322))) {
                            var e215 = 0, n168 = function() {};
                            return {
                                s: n168,
                                n: function() {
                                    return e215 >= t322.length ? {
                                        done: !0
                                    } : {
                                        done: !1,
                                        value: t322[e215++]
                                    };
                                },
                                e: function(t) {
                                    throw t;
                                },
                                f: n168
                            };
                        }
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    }
                    var o, r, i = !0, a = !1;
                    return {
                        s: function() {
                            o = t322[Symbol.iterator]();
                        },
                        n: function() {
                            var t = o.next();
                            return i = t.done, t;
                        },
                        e: function(t) {
                            a = !0, r = t;
                        },
                        f: function() {
                            try {
                                i || null == o.return || o.return();
                            } finally{
                                if (a) throw r;
                            }
                        }
                    };
                }
                function y(t, e) {
                    (null == e || e > t.length) && (e = t.length);
                    for(var n = 0, o = new Array(e); n < e; n++)o[n] = t[n];
                    return o;
                }
                function b() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o141, "__esModule", {
                    value: !0
                }), o141.default = void 0, r80 = v(r80), i80 = v(i80), a31 = v(a31), s25 = v(s25), l19 = v(l19), c16 = v(c16), u12 = v(u12), f11 = v(f11), d10 = v(d10), p = h(p);
                var m = function(t323) {
                    (0, a31.default)(o142, t323);
                    var e217, n170 = (e217 = o142, function() {
                        var t, n = (0, l19.default)(e217);
                        if (b()) {
                            var o = (0, l19.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, s25.default)(this, t);
                    });
                    function o142() {
                        var t;
                        return (0, r80.default)(this, o142), (t = n170.apply(this, arguments)).isRectSelectionActivated = !1, t.SCROLL_SPEED = 3, t.HEIGHT_OF_SCROLL_ZONE = 40, t.BOTTOM_SCROLL_ZONE = 1, t.TOP_SCROLL_ZONE = 2, t.MAIN_MOUSE_BUTTON = 0, t.mousedown = !1, t.isScrolling = !1, t.inScrollZone = null, t.startX = 0, t.startY = 0, t.mouseX = 0, t.mouseY = 0, t.stackOfSelected = [], t.listenerIds = [], t;
                    }
                    return (0, i80.default)(o142, [
                        {
                            key: "prepare",
                            value: function() {
                                this.enableModuleBindings();
                            }
                        },
                        {
                            key: "startSelection",
                            value: function(t324, e) {
                                var n = document.elementFromPoint(t324 - window.pageXOffset, e - window.pageYOffset);
                                n.closest(".".concat(this.Editor.Toolbar.CSS.toolbar)) || (this.Editor.BlockSelection.allBlocksSelected = !1, this.clearSelection(), this.stackOfSelected = []);
                                var o = [
                                    ".".concat(d10.default.CSS.content),
                                    ".".concat(this.Editor.Toolbar.CSS.toolbar),
                                    ".".concat(this.Editor.InlineToolbar.CSS.inlineToolbar)
                                ], r = n.closest("." + this.Editor.UI.CSS.editorWrapper), i = o.some(function(t) {
                                    return !!n.closest(t);
                                });
                                r && !i && (this.mousedown = !0, this.startX = t324, this.startY = e);
                            }
                        },
                        {
                            key: "endSelection",
                            value: function() {
                                this.mousedown = !1, this.startX = 0, this.startY = 0, this.overlayRectangle.style.display = "none";
                            }
                        },
                        {
                            key: "isRectActivated",
                            value: function() {
                                return this.isRectSelectionActivated;
                            }
                        },
                        {
                            key: "clearSelection",
                            value: function() {
                                this.isRectSelectionActivated = !1;
                            }
                        },
                        {
                            key: "enableModuleBindings",
                            value: function() {
                                var t = this, e218 = this.genHTML().container;
                                this.listeners.on(e218, "mousedown", function(e) {
                                    t.processMouseDown(e);
                                }, !1), this.listeners.on(document.body, "mousemove", p.throttle(function(e) {
                                    t.processMouseMove(e);
                                }, 10), {
                                    passive: !0
                                }), this.listeners.on(document.body, "mouseleave", function() {
                                    t.processMouseLeave();
                                }), this.listeners.on(window, "scroll", p.throttle(function(e) {
                                    t.processScroll(e);
                                }, 10), {
                                    passive: !0
                                }), this.listeners.on(document.body, "mouseup", function() {
                                    t.processMouseUp();
                                }, !1);
                            }
                        },
                        {
                            key: "processMouseDown",
                            value: function(t) {
                                t.button === this.MAIN_MOUSE_BUTTON && (null !== t.target.closest(u12.default.allInputsSelector) || this.startSelection(t.pageX, t.pageY));
                            }
                        },
                        {
                            key: "processMouseMove",
                            value: function(t) {
                                this.changingRectangle(t), this.scrollByZones(t.clientY);
                            }
                        },
                        {
                            key: "processMouseLeave",
                            value: function() {
                                this.clearSelection(), this.endSelection();
                            }
                        },
                        {
                            key: "processScroll",
                            value: function(t) {
                                this.changingRectangle(t);
                            }
                        },
                        {
                            key: "processMouseUp",
                            value: function() {
                                this.clearSelection(), this.endSelection();
                            }
                        },
                        {
                            key: "scrollByZones",
                            value: function(t) {
                                this.inScrollZone = null, t <= this.HEIGHT_OF_SCROLL_ZONE && (this.inScrollZone = this.TOP_SCROLL_ZONE), document.documentElement.clientHeight - t <= this.HEIGHT_OF_SCROLL_ZONE && (this.inScrollZone = this.BOTTOM_SCROLL_ZONE), this.inScrollZone ? this.isScrolling || (this.scrollVertical(this.inScrollZone === this.TOP_SCROLL_ZONE ? -this.SCROLL_SPEED : this.SCROLL_SPEED), this.isScrolling = !0) : this.isScrolling = !1;
                            }
                        },
                        {
                            key: "genHTML",
                            value: function() {
                                var t = this.Editor.UI, e = t.nodes.holder.querySelector("." + t.CSS.editorWrapper), n = u12.default.make("div", o142.CSS.overlay, {}), r = u12.default.make("div", o142.CSS.overlayContainer, {}), i = u12.default.make("div", o142.CSS.rect, {});
                                return r.appendChild(i), n.appendChild(r), e.appendChild(n), this.overlayRectangle = i, {
                                    container: e,
                                    overlay: n
                                };
                            }
                        },
                        {
                            key: "scrollVertical",
                            value: function(t) {
                                var e = this;
                                if (this.inScrollZone && this.mousedown) {
                                    var n = window.pageYOffset;
                                    window.scrollBy(0, t), this.mouseY += window.pageYOffset - n, setTimeout(function() {
                                        e.scrollVertical(t);
                                    }, 0);
                                }
                            }
                        },
                        {
                            key: "changingRectangle",
                            value: function(t) {
                                if (this.mousedown) {
                                    void 0 !== t.pageY && (this.mouseX = t.pageX, this.mouseY = t.pageY);
                                    var e = this.genInfoForMouseSelection(), n = e.rightPos, o = e.leftPos, r = e.index, i = this.startX > n && this.mouseX > n, a = this.startX < o && this.mouseX < o;
                                    this.rectCrossesBlocks = !(i || a), this.isRectSelectionActivated || (this.rectCrossesBlocks = !1, this.isRectSelectionActivated = !0, this.shrinkRectangleToPoint(), this.overlayRectangle.style.display = "block"), this.updateRectangleSize(), this.Editor.Toolbar.close(), void 0 !== r && (this.trySelectNextBlock(r), this.inverseSelection(), f11.default.get().removeAllRanges());
                                }
                            }
                        },
                        {
                            key: "shrinkRectangleToPoint",
                            value: function() {
                                this.overlayRectangle.style.left = "".concat(this.startX - window.pageXOffset, "px"), this.overlayRectangle.style.top = "".concat(this.startY - window.pageYOffset, "px"), this.overlayRectangle.style.bottom = "calc(100% - ".concat(this.startY - window.pageYOffset, "px"), this.overlayRectangle.style.right = "calc(100% - ".concat(this.startX - window.pageXOffset, "px");
                            }
                        },
                        {
                            key: "inverseSelection",
                            value: function() {
                                var t = this.Editor.BlockManager.getBlockByIndex(this.stackOfSelected[0]).selected;
                                if (this.rectCrossesBlocks && !t) {
                                    var e, n = g(this.stackOfSelected);
                                    try {
                                        for(n.s(); !(e = n.n()).done;){
                                            var o = e.value;
                                            this.Editor.BlockSelection.selectBlockByIndex(o);
                                        }
                                    } catch (t) {
                                        n.e(t);
                                    } finally{
                                        n.f();
                                    }
                                }
                                if (!this.rectCrossesBlocks && t) {
                                    var r, i = g(this.stackOfSelected);
                                    try {
                                        for(i.s(); !(r = i.n()).done;){
                                            var a = r.value;
                                            this.Editor.BlockSelection.unSelectBlockByIndex(a);
                                        }
                                    } catch (t) {
                                        i.e(t);
                                    } finally{
                                        i.f();
                                    }
                                }
                            }
                        },
                        {
                            key: "updateRectangleSize",
                            value: function() {
                                this.mouseY >= this.startY ? (this.overlayRectangle.style.top = "".concat(this.startY - window.pageYOffset, "px"), this.overlayRectangle.style.bottom = "calc(100% - ".concat(this.mouseY - window.pageYOffset, "px")) : (this.overlayRectangle.style.bottom = "calc(100% - ".concat(this.startY - window.pageYOffset, "px"), this.overlayRectangle.style.top = "".concat(this.mouseY - window.pageYOffset, "px")), this.mouseX >= this.startX ? (this.overlayRectangle.style.left = "".concat(this.startX - window.pageXOffset, "px"), this.overlayRectangle.style.right = "calc(100% - ".concat(this.mouseX - window.pageXOffset, "px")) : (this.overlayRectangle.style.right = "calc(100% - ".concat(this.startX - window.pageXOffset, "px"), this.overlayRectangle.style.left = "".concat(this.mouseX - window.pageXOffset, "px"));
                            }
                        },
                        {
                            key: "genInfoForMouseSelection",
                            value: function() {
                                var t325, e = document.body.offsetWidth / 2, n = this.mouseY - window.pageYOffset, o = document.elementFromPoint(e, n), r = this.Editor.BlockManager.getBlockByChildNode(o);
                                void 0 !== r && (t325 = this.Editor.BlockManager.blocks.findIndex(function(t) {
                                    return t.holder === r.holder;
                                }));
                                var i = this.Editor.BlockManager.lastBlock.holder.querySelector("." + d10.default.CSS.content), a = Number.parseInt(window.getComputedStyle(i).width, 10) / 2;
                                return {
                                    index: t325,
                                    leftPos: e - a,
                                    rightPos: e + a
                                };
                            }
                        },
                        {
                            key: "addBlockInSelection",
                            value: function(t) {
                                this.rectCrossesBlocks && this.Editor.BlockSelection.selectBlockByIndex(t), this.stackOfSelected.push(t);
                            }
                        },
                        {
                            key: "trySelectNextBlock",
                            value: function(t) {
                                var e = this, n = this.stackOfSelected[this.stackOfSelected.length - 1] === t, o = this.stackOfSelected.length;
                                if (!n) {
                                    var r = this.stackOfSelected[o - 1] - this.stackOfSelected[o - 2] > 0, i = 0;
                                    o > 1 && (i = r ? 1 : -1);
                                    var a = t > this.stackOfSelected[o - 1] && 1 === i, s = t < this.stackOfSelected[o - 1] && -1 === i, l = !(a || s || 0 === i);
                                    if (l || !(t > this.stackOfSelected[o - 1] || void 0 === this.stackOfSelected[o - 1])) {
                                        if (!l && t < this.stackOfSelected[o - 1]) for(var c = this.stackOfSelected[o - 1] - 1; c >= t; c--)this.addBlockInSelection(c);
                                        else if (l) {
                                            var u, f = o - 1;
                                            for(u = t > this.stackOfSelected[o - 1] ? function() {
                                                return t > e.stackOfSelected[f];
                                            } : function() {
                                                return t < e.stackOfSelected[f];
                                            }; u();)this.rectCrossesBlocks && this.Editor.BlockSelection.unSelectBlockByIndex(this.stackOfSelected[f]), this.stackOfSelected.pop(), f--;
                                        }
                                    } else for(var d = this.stackOfSelected[o - 1] + 1 || t; d <= t; d++)this.addBlockInSelection(d);
                                }
                            }
                        }
                    ], [
                        {
                            key: "CSS",
                            get: function() {
                                return {
                                    overlay: "codex-editor-overlay",
                                    overlayContainer: "codex-editor-overlay__container",
                                    rect: "codex-editor-overlay__rectangle",
                                    topScrollZone: "codex-editor-overlay__scroll-zone--top",
                                    bottomScrollZone: "codex-editor-overlay__scroll-zone--bottom"
                                };
                            }
                        }
                    ]), o142;
                }(c16.default);
                o141.default = m, m.displayName = "RectangleSelection", t321.exports = e214.default;
            }) ? o140.apply(e214, r79) : o140) || (t321.exports = i79);
        },
        function(t326, e219, n171) {
            var o143, r81, i81;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r81 = [
                e219,
                n171(20),
                n171(21),
                n171(2),
                n171(3),
                n171(5),
                n171(6),
                n171(4),
                n171(9),
                n171(7)
            ], void 0 === (i81 = "function" == typeof (o143 = function(o144, r, i82, a32, s26, l20, c17, u13, f12, d) {
                "use strict";
                var p7 = n171(8), h5 = n171(1);
                function v() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o144, "__esModule", {
                    value: !0
                }), o144.default = void 0, r = h5(r), i82 = h5(i82), a32 = h5(a32), s26 = h5(s26), l20 = h5(l20), c17 = h5(c17), u13 = h5(u13), f12 = h5(f12), d = p7(d);
                var g = function(t327) {
                    (0, l20.default)(p8, t327);
                    var e220, n172, o145, f13 = (e220 = p8, function() {
                        var t, n = (0, u13.default)(e220);
                        if (v()) {
                            var o = (0, u13.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, c17.default)(this, t);
                    });
                    function p8() {
                        return (0, a32.default)(this, p8), f13.apply(this, arguments);
                    }
                    return (0, s26.default)(p8, [
                        {
                            key: "render",
                            value: (o145 = (0, i82.default)(r.default.mark(function t328(e) {
                                var n, o, i = this;
                                return r.default.wrap(function(t329) {
                                    for(;;)switch(t329.prev = t329.next){
                                        case 0:
                                            return n = e.map(function(t) {
                                                return {
                                                    function: function() {
                                                        return i.insertBlock(t);
                                                    }
                                                };
                                            }), this.Editor.ModificationsObserver.disable(), t329.next = 4, d.sequence(n);
                                        case 4:
                                            return o = t329.sent, this.Editor.ModificationsObserver.enable(), this.Editor.UI.checkEmptiness(), t329.abrupt("return", o);
                                        case 8:
                                        case "end":
                                            return t329.stop();
                                    }
                                }, t328, this);
                            })), function(t) {
                                return o145.apply(this, arguments);
                            })
                        },
                        {
                            key: "insertBlock",
                            value: (n172 = (0, i82.default)(r.default.mark(function t330(e) {
                                var n, o, i, a, s, l, c, u, f, p, h;
                                return r.default.wrap(function(t) {
                                    for(;;)switch(t.prev = t.next){
                                        case 0:
                                            if (o = this.Editor, i = o.Tools, a = o.BlockManager, s = e.type, l = e.data, c = e.tunes, u = e.id, !i.available.has(s)) {
                                                t.next = 13;
                                                break;
                                            }
                                            t.prev = 3, a.insert({
                                                id: u,
                                                tool: s,
                                                data: l,
                                                tunes: c
                                            }), t.next = 11;
                                            break;
                                        case 7:
                                            throw t.prev = 7, t.t0 = t.catch(3), d.log("Block \xab".concat(s, "\xbb skipped because of plugins error"), "warn", l), Error(t.t0);
                                        case 11:
                                            t.next = 18;
                                            break;
                                        case 13:
                                            f = {
                                                savedData: {
                                                    id: u,
                                                    type: s,
                                                    data: l
                                                },
                                                title: s
                                            }, i.unavailable.has(s) && (p = i.unavailable.get(s).toolbox, h = null === (n = p[0]) || void 0 === n ? void 0 : n.title, f.title = h || f.title), a.insert({
                                                id: u,
                                                tool: i.stubTool,
                                                data: f
                                            }).stretched = !0, d.log("Tool \xab".concat(s, "\xbb is not found. Check 'tools' property at your initial Editor.js config."), "warn");
                                        case 18:
                                        case "end":
                                            return t.stop();
                                    }
                                }, t330, this, [
                                    [
                                        3,
                                        7
                                    ]
                                ]);
                            })), function(t) {
                                return n172.apply(this, arguments);
                            })
                        }
                    ]), p8;
                }(f12.default);
                o144.default = g, g.displayName = "Renderer", t326.exports = e219.default;
            }) ? o143.apply(e219, r81) : o143) || (t326.exports = i81);
        },
        function(t331, e221, n173) {
            var o146, r82, i83;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r82 = [
                e221,
                n173(20),
                n173(21),
                n173(2),
                n173(3),
                n173(5),
                n173(6),
                n173(4),
                n173(9),
                n173(7),
                n173(67)
            ], void 0 === (i83 = "function" == typeof (o146 = function(o147, r83, i84, a33, s27, l21, c18, u14, f14, d, p) {
                "use strict";
                var h6 = n173(8), v = n173(1);
                function g() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o147, "__esModule", {
                    value: !0
                }), o147.default = void 0, r83 = v(r83), i84 = v(i84), a33 = v(a33), s27 = v(s27), l21 = v(l21), c18 = v(c18), u14 = v(u14), f14 = v(f14), d = h6(d);
                var y = function(t332) {
                    (0, l21.default)(h, t332);
                    var e222, n174, o148, f = (e222 = h, function() {
                        var t, n = (0, u14.default)(e222);
                        if (g()) {
                            var o = (0, u14.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, c18.default)(this, t);
                    });
                    function h() {
                        return (0, a33.default)(this, h), f.apply(this, arguments);
                    }
                    return (0, s27.default)(h, [
                        {
                            key: "save",
                            value: (o148 = (0, i84.default)(r83.default.mark(function t333() {
                                var e, n, o, i, a, s, l, c = this;
                                return r83.default.wrap(function(t334) {
                                    for(;;)switch(t334.prev = t334.next){
                                        case 0:
                                            return e = this.Editor, n = e.BlockManager, o = e.Tools, i = n.blocks, a = [], t334.prev = 2, i.forEach(function(t) {
                                                a.push(c.getSavedData(t));
                                            }), t334.next = 6, Promise.all(a);
                                        case 6:
                                            return s = t334.sent, t334.next = 9, (0, p.sanitizeBlocks)(s, function(t) {
                                                return o.blockTools.get(t).sanitizeConfig;
                                            });
                                        case 9:
                                            return l = t334.sent, t334.abrupt("return", this.makeOutput(l));
                                        case 13:
                                            t334.prev = 13, t334.t0 = t334.catch(2), d.logLabeled("Saving failed due to the Error %o", "error", t334.t0);
                                        case 16:
                                        case "end":
                                            return t334.stop();
                                    }
                                }, t333, this, [
                                    [
                                        2,
                                        13
                                    ]
                                ]);
                            })), function() {
                                return o148.apply(this, arguments);
                            })
                        },
                        {
                            key: "getSavedData",
                            value: (n174 = (0, i84.default)(r83.default.mark(function t335(e) {
                                var n, o;
                                return r83.default.wrap(function(t) {
                                    for(;;)switch(t.prev = t.next){
                                        case 0:
                                            return t.next = 2, e.save();
                                        case 2:
                                            if (n = t.sent, t.t0 = n, !t.t0) {
                                                t.next = 8;
                                                break;
                                            }
                                            return t.next = 7, e.validate(n.data);
                                        case 7:
                                            t.t0 = t.sent;
                                        case 8:
                                            return o = t.t0, t.abrupt("return", Object.assign(Object.assign({}, n), {
                                                isValid: o
                                            }));
                                        case 10:
                                        case "end":
                                            return t.stop();
                                    }
                                }, t335);
                            })), function(t) {
                                return n174.apply(this, arguments);
                            })
                        },
                        {
                            key: "makeOutput",
                            value: function(t336) {
                                var e = this, n = 0, o = [];
                                return d.log("[Editor.js saving]:", "groupCollapsed"), t336.forEach(function(t) {
                                    var r = t.id, i = t.tool, a = t.data, s = t.tunes, l = t.time, c = t.isValid;
                                    if (n += l, d.log("".concat(i.charAt(0).toUpperCase() + i.slice(1)), "group"), !c) return d.log("Block \xab".concat(i, "\xbb skipped because saved data is invalid")), void d.log(void 0, "groupEnd");
                                    if (d.log(a), d.log(void 0, "groupEnd"), i !== e.Editor.Tools.stubTool) {
                                        var u = Object.assign({
                                            id: r,
                                            type: i,
                                            data: a
                                        }, !d.isEmpty(s) && {
                                            tunes: s
                                        });
                                        o.push(u);
                                    } else o.push(a);
                                }), d.log("Total", "log", n), d.log(void 0, "groupEnd"), {
                                    time: +new Date,
                                    blocks: o,
                                    version: "2.25.0"
                                };
                            }
                        }
                    ]), h;
                }(f14.default);
                o147.default = y, y.displayName = "Saver", t331.exports = e221.default;
            }) ? o146.apply(e221, r82) : o146) || (t331.exports = i83);
        },
        function(t337, e223, n175) {
            var o149, r84, i85;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r84 = [
                e223,
                n175(30),
                n175(2),
                n175(3),
                n175(5),
                n175(6),
                n175(4),
                n175(9),
                n175(14),
                n175(62),
                n175(7),
                n175(25)
            ], void 0 === (i85 = "function" == typeof (o149 = function(o150, r, i86, a, s, l, c, u, f, d, p, h) {
                "use strict";
                var v = n175(8), g = n175(1);
                function y() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o150, "__esModule", {
                    value: !0
                }), o150.default = void 0, r = g(r), i86 = g(i86), a = g(a), s = g(s), l = g(l), c = g(c), u = g(u), f = g(f), d = g(d), p = v(p), h = g(h);
                var b = function(t338) {
                    (0, s.default)(o151, t338);
                    var e224, n176 = (e224 = o151, function() {
                        var t, n = (0, c.default)(e224);
                        if (y()) {
                            var o = (0, c.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, l.default)(this, t);
                    });
                    function o151() {
                        var t;
                        return (0, i86.default)(this, o151), (t = n176.apply(this, arguments)).buttons = [], t.flipper = null, t.selection = new h.default, t;
                    }
                    return (0, a.default)(o151, [
                        {
                            key: "make",
                            value: function() {
                                this.nodes.wrapper = f.default.make("div", this.CSS.wrapper), this.nodes.toolSettings = f.default.make("div", this.CSS.toolSettings), this.nodes.defaultSettings = f.default.make("div", this.CSS.defaultSettings), f.default.append(this.nodes.wrapper, [
                                    this.nodes.toolSettings,
                                    this.nodes.defaultSettings
                                ]), this.enableFlipper();
                            }
                        },
                        {
                            key: "destroy",
                            value: function() {
                                this.flipper && (this.flipper.deactivate(), this.flipper = null), this.removeAllNodes();
                            }
                        },
                        {
                            key: "open",
                            value: function() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.Editor.BlockManager.currentBlock;
                                this.nodes.wrapper.classList.add(this.CSS.wrapperOpened), this.selection.save(), t.selected = !0, this.Editor.BlockSelection.clearCache(), this.addToolSettings(t), this.addTunes(t), this.eventsDispatcher.emit(this.events.opened), this.flipper.activate(this.blockTunesButtons);
                            }
                        },
                        {
                            key: "close",
                            value: function() {
                                this.nodes.wrapper.classList.remove(this.CSS.wrapperOpened), h.default.isAtEditor || this.selection.restore(), this.selection.clearSaved(), !this.Editor.CrossBlockSelection.isCrossBlockSelectionStarted && this.Editor.BlockManager.currentBlock && (this.Editor.BlockManager.currentBlock.selected = !1), this.nodes.toolSettings.innerHTML = "", this.nodes.defaultSettings.innerHTML = "", this.eventsDispatcher.emit(this.events.closed), this.buttons = [], this.flipper.deactivate();
                            }
                        },
                        {
                            key: "addToolSettings",
                            value: function(t) {
                                var e = t.renderSettings();
                                e && f.default.append(this.nodes.toolSettings, e);
                            }
                        },
                        {
                            key: "addTunes",
                            value: function(t) {
                                var e = t.renderTunes(), n = (0, r.default)(e, 2), o = n[0], i = n[1];
                                f.default.append(this.nodes.toolSettings, o), f.default.append(this.nodes.defaultSettings, i);
                            }
                        },
                        {
                            key: "enableFlipper",
                            value: function() {
                                var t = this;
                                this.flipper = new d.default({
                                    focusedItemClass: this.CSS.focusedButton,
                                    activateCallback: function(e) {
                                        e && f.default.canSetCaret(e) ? t.close() : p.delay(function() {
                                            t.Editor.Caret.setToBlock(t.Editor.BlockManager.currentBlock);
                                        }, 50)();
                                    }
                                });
                            }
                        },
                        {
                            key: "events",
                            get: function() {
                                return {
                                    opened: "block-settings-opened",
                                    closed: "block-settings-closed"
                                };
                            }
                        },
                        {
                            key: "CSS",
                            get: function() {
                                return {
                                    wrapper: "ce-settings",
                                    wrapperOpened: "ce-settings--opened",
                                    toolSettings: "ce-settings__plugin-zone",
                                    defaultSettings: "ce-settings__default-zone",
                                    button: "ce-settings__button",
                                    focusedButton: "ce-settings__button--focused",
                                    focusedButtonAnimated: "ce-settings__button--focused-animated"
                                };
                            }
                        },
                        {
                            key: "opened",
                            get: function() {
                                return this.nodes.wrapper.classList.contains(this.CSS.wrapperOpened);
                            }
                        },
                        {
                            key: "blockTunesButtons",
                            get: function() {
                                var t = this, e225 = this.Editor.StylesAPI;
                                if (0 !== this.buttons.length) return this.buttons;
                                var n = this.nodes.toolSettings.querySelectorAll(".".concat(e225.classes.settingsButton, ", ").concat(f.default.allInputsSelector)), o = this.nodes.defaultSettings.querySelectorAll(".".concat(this.CSS.button));
                                return n.forEach(function(e) {
                                    t.buttons.push(e);
                                }), o.forEach(function(e) {
                                    t.buttons.push(e);
                                }), this.buttons;
                            }
                        }
                    ]), o151;
                }(u.default);
                o150.default = b, b.displayName = "BlockSettings", t337.exports = e223.default;
            }) ? o149.apply(e223, r84) : o149) || (t337.exports = i85);
        },
        function(t339, e226, n177) {
            var o152, r85, i87;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r85 = [
                e226,
                n177(30),
                n177(20),
                n177(21),
                n177(42),
                n177(2),
                n177(3),
                n177(5),
                n177(6),
                n177(4),
                n177(9),
                n177(14),
                n177(7),
                n177(62),
                n177(60),
                n177(84),
                n177(67)
            ], void 0 === (i87 = "function" == typeof (o152 = function(o153, r86, i88, a34, s28, l22, c19, u15, f15, d11, p9, h, v, g, y, b, m) {
                "use strict";
                var k3 = n177(8), x = n177(1);
                function w() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o153, "__esModule", {
                    value: !0
                }), o153.default = void 0, r86 = x(r86), i88 = x(i88), a34 = x(a34), s28 = x(s28), l22 = x(l22), c19 = x(c19), u15 = x(u15), f15 = x(f15), d11 = x(d11), p9 = x(p9), h = x(h), v = k3(v), g = x(g), y = x(y);
                var S = function(t340) {
                    (0, u15.default)(k, t340);
                    var e227, n178, o154, p10 = (e227 = k, function() {
                        var t, n = (0, d11.default)(e227);
                        if (w()) {
                            var o = (0, d11.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, f15.default)(this, t);
                    });
                    function k() {
                        var t;
                        return (0, l22.default)(this, k), (t = p10.apply(this, arguments)).opened = !1, t.tools = [], t.flipper = null, t.togglingCallback = null, t;
                    }
                    return (0, c19.default)(k, [
                        {
                            key: "make",
                            value: function() {
                                this.nodes.wrapper = h.default.make("div", [
                                    k.CSS.conversionToolbarWrapper
                                ].concat((0, s28.default)(this.isRtl ? [
                                    this.Editor.UI.CSS.editorRtlFix
                                ] : []))), this.nodes.tools = h.default.make("div", k.CSS.conversionToolbarTools);
                                var t = h.default.make("div", k.CSS.conversionToolbarLabel, {
                                    textContent: y.default.ui(b.I18nInternalNS.ui.inlineToolbar.converter, "Convert to")
                                });
                                return this.addTools(), this.enableFlipper(), h.default.append(this.nodes.wrapper, t), h.default.append(this.nodes.wrapper, this.nodes.tools), this.nodes.wrapper;
                            }
                        },
                        {
                            key: "destroy",
                            value: function() {
                                this.flipper && (this.flipper.deactivate(), this.flipper = null), this.removeAllNodes();
                            }
                        },
                        {
                            key: "toggle",
                            value: function(t) {
                                this.opened ? this.close() : this.open(), v.isFunction(t) && (this.togglingCallback = t);
                            }
                        },
                        {
                            key: "open",
                            value: function() {
                                var t341 = this;
                                this.filterTools(), this.opened = !0, this.nodes.wrapper.classList.add(k.CSS.conversionToolbarShowed), window.requestAnimationFrame(function() {
                                    t341.flipper.activate(t341.tools.map(function(t) {
                                        return t.button;
                                    }).filter(function(t) {
                                        return !t.classList.contains(k.CSS.conversionToolHidden);
                                    })), t341.flipper.focusFirst(), v.isFunction(t341.togglingCallback) && t341.togglingCallback(!0);
                                });
                            }
                        },
                        {
                            key: "close",
                            value: function() {
                                this.opened = !1, this.flipper.deactivate(), this.nodes.wrapper.classList.remove(k.CSS.conversionToolbarShowed), v.isFunction(this.togglingCallback) && this.togglingCallback(!1);
                            }
                        },
                        {
                            key: "hasTools",
                            value: function() {
                                return 1 !== this.tools.length || this.tools[0].name !== this.config.defaultBlock;
                            }
                        },
                        {
                            key: "replaceWithBlock",
                            value: (o154 = (0, a34.default)(i88.default.mark(function t342(e, n) {
                                var o, r, a, s, l, c, u, f, d, p = this;
                                return i88.default.wrap(function(t) {
                                    for(;;)switch(t.prev = t.next){
                                        case 0:
                                            return o = this.Editor.BlockManager.currentBlock.tool, t.next = 3, this.Editor.BlockManager.currentBlock.save();
                                        case 3:
                                            if (r = t.sent, a = r.data, s = this.Editor.Tools.blockTools.get(e), l = "", c = o.conversionConfig.export, !v.isFunction(c)) {
                                                t.next = 12;
                                                break;
                                            }
                                            l = c(a), t.next = 18;
                                            break;
                                        case 12:
                                            if (!v.isString(c)) {
                                                t.next = 16;
                                                break;
                                            }
                                            l = a[c], t.next = 18;
                                            break;
                                        case 16:
                                            return v.log("Conversion \xabexport\xbb property must be a string or function. String means key of saved data object to export. Function should export processed string to export."), t.abrupt("return");
                                        case 18:
                                            if (u = (0, m.clean)(l, s.sanitizeConfig), f = {}, d = s.conversionConfig.import, !v.isFunction(d)) {
                                                t.next = 25;
                                                break;
                                            }
                                            f = d(u), t.next = 31;
                                            break;
                                        case 25:
                                            if (!v.isString(d)) {
                                                t.next = 29;
                                                break;
                                            }
                                            f[d] = u, t.next = 31;
                                            break;
                                        case 29:
                                            return v.log("Conversion \xabimport\xbb property must be a string or function. String means key of tool data to import. Function accepts a imported string and return composed tool data."), t.abrupt("return");
                                        case 31:
                                            n && (f = Object.assign(f, n)), this.Editor.BlockManager.replace({
                                                tool: e,
                                                data: f
                                            }), this.Editor.BlockSelection.clearSelection(), this.close(), this.Editor.InlineToolbar.close(), v.delay(function() {
                                                p.Editor.Caret.setToBlock(p.Editor.BlockManager.currentBlock);
                                            }, 10)();
                                        case 37:
                                        case "end":
                                            return t.stop();
                                    }
                                }, t342, this);
                            })), function(t, e) {
                                return o154.apply(this, arguments);
                            })
                        },
                        {
                            key: "addTools",
                            value: function() {
                                var t = this, e228 = this.Editor.Tools.blockTools;
                                Array.from(e228.entries()).forEach(function(e229) {
                                    var n = (0, r86.default)(e229, 2), o = n[0], i = n[1], a = i.conversionConfig;
                                    a && a.import && i.toolbox.forEach(function(e) {
                                        return t.addToolIfValid(o, e);
                                    });
                                });
                            }
                        },
                        {
                            key: "addToolIfValid",
                            value: function(t, e) {
                                !v.isEmpty(e) && e.icon && this.addTool(t, e);
                            }
                        },
                        {
                            key: "addTool",
                            value: function(t, e) {
                                var n = this, o155 = h.default.make("div", [
                                    k.CSS.conversionTool
                                ]), r = h.default.make("div", [
                                    k.CSS.conversionToolIcon
                                ]);
                                o155.dataset.tool = t, r.innerHTML = e.icon, h.default.append(o155, r), h.default.append(o155, h.default.text(y.default.t(b.I18nInternalNS.toolNames, e.title || v.capitalize(t)))), h.default.append(this.nodes.tools, o155), this.tools.push({
                                    name: t,
                                    button: o155,
                                    toolboxItem: e
                                }), this.listeners.on(o155, "click", (0, a34.default)(i88.default.mark(function o156() {
                                    return i88.default.wrap(function(o) {
                                        for(;;)switch(o.prev = o.next){
                                            case 0:
                                                return o.next = 2, n.replaceWithBlock(t, e.data);
                                            case 2:
                                            case "end":
                                                return o.stop();
                                        }
                                    }, o156);
                                })));
                            }
                        },
                        {
                            key: "filterTools",
                            value: (n178 = (0, a34.default)(i88.default.mark(function t343() {
                                var e230, n, o;
                                return i88.default.wrap(function(t344) {
                                    for(;;)switch(t344.prev = t344.next){
                                        case 0:
                                            return o = function(t, e) {
                                                return t.icon === e.icon && t.title === e.title;
                                            }, e230 = this.Editor.BlockManager.currentBlock, t344.next = 4, e230.getActiveToolboxEntry();
                                        case 4:
                                            n = t344.sent, this.tools.forEach(function(t) {
                                                var r = !1;
                                                if (n) {
                                                    var i = o(n, t.toolboxItem);
                                                    r = t.button.dataset.tool === e230.name && i;
                                                }
                                                t.button.hidden = r, t.button.classList.toggle(k.CSS.conversionToolHidden, r);
                                            });
                                        case 6:
                                        case "end":
                                            return t344.stop();
                                    }
                                }, t343, this);
                            })), function() {
                                return n178.apply(this, arguments);
                            })
                        },
                        {
                            key: "enableFlipper",
                            value: function() {
                                this.flipper = new g.default({
                                    focusedItemClass: k.CSS.conversionToolFocused
                                });
                            }
                        }
                    ], [
                        {
                            key: "CSS",
                            get: function() {
                                return {
                                    conversionToolbarWrapper: "ce-conversion-toolbar",
                                    conversionToolbarShowed: "ce-conversion-toolbar--showed",
                                    conversionToolbarTools: "ce-conversion-toolbar__tools",
                                    conversionToolbarLabel: "ce-conversion-toolbar__label",
                                    conversionTool: "ce-conversion-tool",
                                    conversionToolHidden: "ce-conversion-tool--hidden",
                                    conversionToolIcon: "ce-conversion-tool__icon",
                                    conversionToolFocused: "ce-conversion-tool--focused",
                                    conversionToolActive: "ce-conversion-tool--active"
                                };
                            }
                        }
                    ]), k;
                }(p9.default);
                o153.default = S, S.displayName = "ConversionToolbar", t339.exports = e226.default;
            }) ? o152.apply(e226, r85) : o152) || (t339.exports = i87);
        },
        function(t345, e231, n179) {
            var o157, r87, i89;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r87 = [
                e231,
                n179(20),
                n179(21),
                n179(42),
                n179(30),
                n179(2),
                n179(3),
                n179(5),
                n179(6),
                n179(4),
                n179(9),
                n179(14),
                n179(25),
                n179(7),
                n179(62),
                n179(60),
                n179(84),
                n179(115),
                n179(114),
                n179(68)
            ], void 0 === (i89 = "function" == typeof (o157 = function(o158, r88, i90, a35, s29, l, c, u, f, d, p11, h, v, g, y, b, m, k, x, w) {
                "use strict";
                var S = n179(8), T = n179(1);
                function E() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o158, "__esModule", {
                    value: !0
                }), o158.default = void 0, r88 = T(r88), i90 = T(i90), a35 = T(a35), s29 = T(s29), l = T(l), c = T(c), u = T(u), f = T(f), d = T(d), p11 = T(p11), h = T(h), v = T(v), g = S(g), y = T(y), b = T(b), k = T(k), x = T(x);
                var B = function(t346) {
                    (0, u.default)(p, t346);
                    var e232, n180, o159 = (e232 = p, function() {
                        var t, n = (0, d.default)(e232);
                        if (E()) {
                            var o = (0, d.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, f.default)(this, t);
                    });
                    function p(t) {
                        var e, n = t.config, r = t.eventsDispatcher;
                        return (0, l.default)(this, p), (e = o159.call(this, {
                            config: n,
                            eventsDispatcher: r
                        })).CSS = {
                            inlineToolbar: "ce-inline-toolbar",
                            inlineToolbarShowed: "ce-inline-toolbar--showed",
                            inlineToolbarLeftOriented: "ce-inline-toolbar--left-oriented",
                            inlineToolbarRightOriented: "ce-inline-toolbar--right-oriented",
                            inlineToolbarShortcut: "ce-inline-toolbar__shortcut",
                            buttonsWrapper: "ce-inline-toolbar__buttons",
                            actionsWrapper: "ce-inline-toolbar__actions",
                            inlineToolButton: "ce-inline-tool",
                            inputField: "cdx-input",
                            focusedButton: "ce-inline-tool--focused",
                            conversionToggler: "ce-inline-toolbar__dropdown",
                            conversionTogglerHidden: "ce-inline-toolbar__dropdown--hidden",
                            conversionTogglerContent: "ce-inline-toolbar__dropdown-content",
                            togglerAndButtonsWrapper: "ce-inline-toolbar__toggler-and-button-wrapper"
                        }, e.opened = !1, e.toolbarVerticalMargin = 5, e.buttonsList = null, e.width = 0, e.flipper = null, e.tooltip = new x.default, e;
                    }
                    return (0, c.default)(p, [
                        {
                            key: "toggleReadOnly",
                            value: function(t) {
                                t ? (this.destroy(), this.Editor.ConversionToolbar.destroy()) : this.make();
                            }
                        },
                        {
                            key: "tryToShow",
                            value: function() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                                this.allowedToShow() ? (this.move(), this.open(e), this.Editor.Toolbar.close()) : t && this.close();
                            }
                        },
                        {
                            key: "move",
                            value: function() {
                                var t = v.default.rect, e = this.Editor.UI.nodes.wrapper.getBoundingClientRect(), n = {
                                    x: t.x - e.left,
                                    y: t.y + t.height - e.top + this.toolbarVerticalMargin
                                };
                                t.width && (n.x += Math.floor(t.width / 2));
                                var o = n.x - this.width / 2, r = n.x + this.width / 2;
                                this.nodes.wrapper.classList.toggle(this.CSS.inlineToolbarLeftOriented, o < this.Editor.UI.contentRect.left), this.nodes.wrapper.classList.toggle(this.CSS.inlineToolbarRightOriented, r > this.Editor.UI.contentRect.right), this.nodes.wrapper.style.left = Math.floor(n.x) + "px", this.nodes.wrapper.style.top = Math.floor(n.y) + "px";
                            }
                        },
                        {
                            key: "close",
                            value: function() {
                                var t = this;
                                this.opened && (this.Editor.ReadOnly.isEnabled || (this.nodes.wrapper.classList.remove(this.CSS.inlineToolbarShowed), Array.from(this.toolsInstances.entries()).forEach(function(e) {
                                    var n = (0, s29.default)(e, 2), o = n[0], r = n[1], i = t.getToolShortcut(o);
                                    i && k.default.remove(t.Editor.UI.nodes.redactor, i), g.isFunction(r.clear) && r.clear();
                                }), this.opened = !1, this.flipper.deactivate(), this.Editor.ConversionToolbar.close()));
                            }
                        },
                        {
                            key: "open",
                            value: function() {
                                var t347 = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                                if (!this.opened) {
                                    this.addToolsFiltered(), this.nodes.wrapper.classList.add(this.CSS.inlineToolbarShowed), this.buttonsList = this.nodes.buttons.querySelectorAll(".".concat(this.CSS.inlineToolButton)), this.opened = !0, t347 && this.Editor.ConversionToolbar.hasTools() ? this.setConversionTogglerContent() : this.nodes.conversionToggler.hidden = !0;
                                    var e = Array.from(this.buttonsList);
                                    e.unshift(this.nodes.conversionToggler), e = e.filter(function(t) {
                                        return !t.hidden;
                                    }), this.flipper.activate(e);
                                }
                            }
                        },
                        {
                            key: "containsNode",
                            value: function(t) {
                                return this.nodes.wrapper.contains(t);
                            }
                        },
                        {
                            key: "destroy",
                            value: function() {
                                this.flipper && (this.flipper.deactivate(), this.flipper = null), this.removeAllNodes(), this.tooltip.destroy();
                            }
                        },
                        {
                            key: "make",
                            value: function() {
                                var t = this;
                                this.nodes.wrapper = h.default.make("div", [
                                    this.CSS.inlineToolbar
                                ].concat((0, a35.default)(this.isRtl ? [
                                    this.Editor.UI.CSS.editorRtlFix
                                ] : []))), this.nodes.togglerAndButtonsWrapper = h.default.make("div", this.CSS.togglerAndButtonsWrapper), this.nodes.buttons = h.default.make("div", this.CSS.buttonsWrapper), this.nodes.actions = h.default.make("div", this.CSS.actionsWrapper), this.listeners.on(this.nodes.wrapper, "mousedown", function(e) {
                                    e.target.closest(".".concat(t.CSS.actionsWrapper)) || e.preventDefault();
                                }), h.default.append(this.nodes.wrapper, [
                                    this.nodes.togglerAndButtonsWrapper,
                                    this.nodes.actions
                                ]), h.default.append(this.Editor.UI.nodes.wrapper, this.nodes.wrapper), this.addConversionToggler(), h.default.append(this.nodes.togglerAndButtonsWrapper, this.nodes.buttons), this.prepareConversionToolbar(), this.recalculateWidth(), this.enableFlipper();
                            }
                        },
                        {
                            key: "allowedToShow",
                            value: function() {
                                var t = v.default.get(), e = v.default.text;
                                if (!t || !t.anchorNode) return !1;
                                if (t.isCollapsed || e.length < 1) return !1;
                                var n = h.default.isElement(t.anchorNode) ? t.anchorNode : t.anchorNode.parentElement;
                                if (t && [
                                    "IMG",
                                    "INPUT"
                                ].includes(n.tagName)) return !1;
                                if (null === n.closest('[contenteditable="true"]')) return !1;
                                var o = this.Editor.BlockManager.getBlock(t.anchorNode);
                                return !!o && 0 !== o.tool.inlineTools.size;
                            }
                        },
                        {
                            key: "recalculateWidth",
                            value: function() {
                                this.width = this.nodes.wrapper.offsetWidth;
                            }
                        },
                        {
                            key: "addConversionToggler",
                            value: function() {
                                var t = this;
                                this.nodes.conversionToggler = h.default.make("div", this.CSS.conversionToggler), this.nodes.conversionTogglerContent = h.default.make("div", this.CSS.conversionTogglerContent);
                                var e233 = h.default.svg("toggler-down", 13, 13);
                                this.nodes.conversionToggler.appendChild(this.nodes.conversionTogglerContent), this.nodes.conversionToggler.appendChild(e233), this.nodes.togglerAndButtonsWrapper.appendChild(this.nodes.conversionToggler), this.listeners.on(this.nodes.conversionToggler, "click", function() {
                                    t.Editor.ConversionToolbar.toggle(function(e) {
                                        !e && t.opened ? t.flipper.activate() : t.opened && t.flipper.deactivate();
                                    });
                                }), this.tooltip.onHover(this.nodes.conversionToggler, b.default.ui(m.I18nInternalNS.ui.inlineToolbar.converter, "Convert to"), {
                                    placement: "top",
                                    hidingDelay: 100
                                });
                            }
                        },
                        {
                            key: "setConversionTogglerContent",
                            value: (n180 = (0, i90.default)(r88.default.mark(function t348() {
                                var e, n, o, i, a, s;
                                return r88.default.wrap(function(t) {
                                    for(;;)switch(t.prev = t.next){
                                        case 0:
                                            return e = this.Editor.BlockManager, n = e.currentBlock, o = n.name, i = n.tool.conversionConfig, a = i && i.export, this.nodes.conversionToggler.hidden = !a, this.nodes.conversionToggler.classList.toggle(this.CSS.conversionTogglerHidden, !a), t.next = 9, n.getActiveToolboxEntry();
                                        case 9:
                                            if (t.t0 = t.sent, t.t0) {
                                                t.next = 12;
                                                break;
                                            }
                                            t.t0 = {};
                                        case 12:
                                            s = t.t0, this.nodes.conversionTogglerContent.innerHTML = s.icon || s.title || g.capitalize(o);
                                        case 14:
                                        case "end":
                                            return t.stop();
                                    }
                                }, t348, this);
                            })), function() {
                                return n180.apply(this, arguments);
                            })
                        },
                        {
                            key: "prepareConversionToolbar",
                            value: function() {
                                var t = this.Editor.ConversionToolbar.make();
                                h.default.append(this.nodes.wrapper, t);
                            }
                        },
                        {
                            key: "addToolsFiltered",
                            value: function() {
                                var t = this, e234 = v.default.get(), n = this.Editor.BlockManager.getBlock(e234.anchorNode);
                                this.nodes.buttons.innerHTML = "", this.nodes.actions.innerHTML = "", this.toolsInstances = new Map, Array.from(n.tool.inlineTools.values()).forEach(function(e) {
                                    t.addTool(e);
                                }), this.recalculateWidth();
                            }
                        },
                        {
                            key: "addTool",
                            value: function(t349) {
                                var e = this, n = t349.create(), o = n.render();
                                if (o) {
                                    if (o.dataset.tool = t349.name, this.nodes.buttons.appendChild(o), this.toolsInstances.set(t349.name, n), g.isFunction(n.renderActions)) {
                                        var r = n.renderActions();
                                        this.nodes.actions.appendChild(r);
                                    }
                                    this.listeners.on(o, "click", function(t) {
                                        e.toolClicked(n), t.preventDefault();
                                    });
                                    var i = this.getToolShortcut(t349.name);
                                    if (i) try {
                                        this.enableShortcuts(n, i);
                                    } catch (t) {}
                                    var a = h.default.make("div"), s = b.default.t(m.I18nInternalNS.toolNames, t349.title || g.capitalize(t349.name));
                                    a.appendChild(h.default.text(s)), i && a.appendChild(h.default.make("div", this.CSS.inlineToolbarShortcut, {
                                        textContent: g.beautifyShortcut(i)
                                    })), this.tooltip.onHover(o, a, {
                                        placement: "top",
                                        hidingDelay: 100
                                    }), n.checkState(v.default.get());
                                } else g.log("Render method must return an instance of Node", "warn", t349.name);
                            }
                        },
                        {
                            key: "getToolShortcut",
                            value: function(t) {
                                var e = this.Editor.Tools, n = e.inlineTools.get(t), o = e.internal.inlineTools;
                                return Array.from(o.keys()).includes(t) ? this.inlineTools[t][w.CommonInternalSettings.Shortcut] : n.shortcut;
                            }
                        },
                        {
                            key: "enableShortcuts",
                            value: function(t, e235) {
                                var n = this;
                                k.default.add({
                                    name: e235,
                                    handler: function(e) {
                                        var o = n.Editor.BlockManager.currentBlock;
                                        o && o.tool.enabledInlineTools && (e.preventDefault(), n.toolClicked(t));
                                    },
                                    on: this.Editor.UI.nodes.redactor
                                });
                            }
                        },
                        {
                            key: "toolClicked",
                            value: function(t) {
                                var e = v.default.range;
                                t.surround(e), this.checkToolsState();
                            }
                        },
                        {
                            key: "checkToolsState",
                            value: function() {
                                this.toolsInstances.forEach(function(t) {
                                    t.checkState(v.default.get());
                                });
                            }
                        },
                        {
                            key: "enableFlipper",
                            value: function() {
                                this.flipper = new y.default({
                                    focusedItemClass: this.CSS.focusedButton,
                                    allowedKeys: [
                                        g.keyCodes.ENTER,
                                        g.keyCodes.TAB
                                    ]
                                });
                            }
                        },
                        {
                            key: "inlineTools",
                            get: function() {
                                var t = {};
                                return Array.from(this.Editor.Tools.inlineTools.entries()).forEach(function(e) {
                                    var n = (0, s29.default)(e, 2), o = n[0], r = n[1];
                                    t[o] = r.create();
                                }), t;
                            }
                        }
                    ]), p;
                }(p11.default);
                o158.default = B, B.displayName = "InlineToolbar", t345.exports = e231.default;
            }) ? o157.apply(e231, r87) : o157) || (t345.exports = i89);
        },
        function(t350, e236, n181) {
            var o160, r89, i91;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r89 = [
                e236,
                n181(42),
                n181(30),
                n181(20),
                n181(21),
                n181(2),
                n181(3),
                n181(5),
                n181(6),
                n181(4),
                n181(59),
                n181(389),
                n181(9),
                n181(7),
                n181(390),
                n181(391),
                n181(392),
                n181(393),
                n181(394),
                n181(398),
                n181(399),
                n181(400),
                n181(185)
            ], void 0 === (i91 = "function" == typeof (o160 = function(o161, r90, i92, a36, s30, l, c, u, f, d, p12, h, v, g, y, b, m, k, x, w, S, T, E) {
                "use strict";
                var B = n181(8), C = n181(1);
                function _() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o161, "__esModule", {
                    value: !0
                }), o161.default = void 0, r90 = C(r90), i92 = C(i92), a36 = C(a36), s30 = C(s30), l = C(l), c = C(c), u = C(u), f = C(f), d = C(d), p12 = C(p12), h = C(h), v = C(v), g = B(g), y = C(y), b = C(b), m = C(m), k = C(k), x = C(x), w = C(w), S = C(S), T = C(T), E = C(E);
                var I = function(t, e, n, o) {
                    var r, i = arguments.length, a = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                    if ("object" === ("undefined" == typeof Reflect ? "undefined" : (0, p12.default)(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
                    else for(var s = t.length - 1; s >= 0; s--)(r = t[s]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, n, a) : r(e, n)) || a);
                    return i > 3 && a && Object.defineProperty(e, n, a), a;
                }, O = function(t351) {
                    (0, u.default)(p, t351);
                    var e237, n182, o162 = (e237 = p, function() {
                        var t, n = (0, d.default)(e237);
                        if (_()) {
                            var o = (0, d.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, f.default)(this, t);
                    });
                    function p() {
                        var t;
                        return (0, l.default)(this, p), (t = o162.apply(this, arguments)).stubTool = "stub", t.toolsAvailable = new E.default, t.toolsUnavailable = new E.default, t;
                    }
                    return (0, c.default)(p, [
                        {
                            key: "prepare",
                            value: (n182 = (0, s30.default)(a36.default.mark(function t352() {
                                var e, n, o = this;
                                return a36.default.wrap(function(t353) {
                                    for(;;)switch(t353.prev = t353.next){
                                        case 0:
                                            if (this.validateTools(), this.config.tools = g.deepMerge({}, this.internalTools, this.config.tools), Object.prototype.hasOwnProperty.call(this.config, "tools") && 0 !== Object.keys(this.config.tools).length) {
                                                t353.next = 4;
                                                break;
                                            }
                                            throw Error("Can't start without tools");
                                        case 4:
                                            if (e = this.prepareConfig(), this.factory = new x.default(e, this.config, this.Editor.API), 0 !== (n = this.getListOfPrepareFunctions(e)).length) {
                                                t353.next = 9;
                                                break;
                                            }
                                            return t353.abrupt("return", Promise.resolve());
                                        case 9:
                                            return t353.next = 11, g.sequence(n, function(t) {
                                                o.toolPrepareMethodSuccess(t);
                                            }, function(t) {
                                                o.toolPrepareMethodFallback(t);
                                            });
                                        case 11:
                                            this.prepareBlockTools();
                                        case 12:
                                        case "end":
                                            return t353.stop();
                                    }
                                }, t352, this);
                            })), function() {
                                return n182.apply(this, arguments);
                            })
                        },
                        {
                            key: "getAllInlineToolsSanitizeConfig",
                            value: function() {
                                var t = {};
                                return Array.from(this.inlineTools.values()).forEach(function(e) {
                                    Object.assign(t, e.sanitizeConfig);
                                }), t;
                            }
                        },
                        {
                            key: "destroy",
                            value: function() {
                                Object.values(this.available).forEach(function() {
                                    var t354 = (0, s30.default)(a36.default.mark(function t355(e) {
                                        return a36.default.wrap(function(t) {
                                            for(;;)switch(t.prev = t.next){
                                                case 0:
                                                    if (!g.isFunction(e.reset)) {
                                                        t.next = 3;
                                                        break;
                                                    }
                                                    return t.next = 3, e.reset();
                                                case 3:
                                                case "end":
                                                    return t.stop();
                                            }
                                        }, t355);
                                    }));
                                    return function(e) {
                                        return t354.apply(this, arguments);
                                    };
                                }());
                            }
                        },
                        {
                            key: "toolPrepareMethodSuccess",
                            value: function(t356) {
                                var e = this.factory.get(t356.toolName);
                                if (e.isInline()) {
                                    var n = [
                                        "render",
                                        "surround",
                                        "checkState"
                                    ].filter(function(t) {
                                        return !e.create()[t];
                                    });
                                    if (n.length) return g.log("Incorrect Inline Tool: ".concat(e.name, ". Some of required methods is not implemented %o"), "warn", n), void this.toolsUnavailable.set(e.name, e);
                                }
                                this.toolsAvailable.set(e.name, e);
                            }
                        },
                        {
                            key: "toolPrepareMethodFallback",
                            value: function(t) {
                                this.toolsUnavailable.set(t.toolName, this.factory.get(t.toolName));
                            }
                        },
                        {
                            key: "getListOfPrepareFunctions",
                            value: function(t357) {
                                var e = [];
                                return Object.entries(t357).forEach(function(t) {
                                    var n = (0, i92.default)(t, 2), o = n[0], r = n[1];
                                    e.push({
                                        function: g.isFunction(r.class.prepare) ? r.class.prepare : function() {},
                                        data: {
                                            toolName: o,
                                            config: r.config
                                        }
                                    });
                                }), e;
                            }
                        },
                        {
                            key: "prepareBlockTools",
                            value: function() {
                                var t = this;
                                Array.from(this.blockTools.values()).forEach(function(e) {
                                    t.assignInlineToolsToBlockTool(e), t.assignBlockTunesToBlockTool(e);
                                });
                            }
                        },
                        {
                            key: "assignInlineToolsToBlockTool",
                            value: function(t358) {
                                var e = this;
                                !1 !== this.config.inlineToolbar && (!0 !== t358.enabledInlineTools ? Array.isArray(t358.enabledInlineTools) && (t358.inlineTools = new E.default(t358.enabledInlineTools.map(function(t) {
                                    return [
                                        t,
                                        e.inlineTools.get(t)
                                    ];
                                }))) : t358.inlineTools = new E.default(Array.isArray(this.config.inlineToolbar) ? this.config.inlineToolbar.map(function(t) {
                                    return [
                                        t,
                                        e.inlineTools.get(t)
                                    ];
                                }) : Array.from(this.inlineTools.entries())));
                            }
                        },
                        {
                            key: "assignBlockTunesToBlockTool",
                            value: function(t359) {
                                var e = this;
                                if (!1 !== t359.enabledBlockTunes) {
                                    if (Array.isArray(t359.enabledBlockTunes)) {
                                        var n = new E.default(t359.enabledBlockTunes.map(function(t) {
                                            return [
                                                t,
                                                e.blockTunes.get(t)
                                            ];
                                        }));
                                        t359.tunes = new E.default([].concat((0, r90.default)(n), (0, r90.default)(this.blockTunes.internalTools)));
                                    } else if (Array.isArray(this.config.tunes)) {
                                        var o = new E.default(this.config.tunes.map(function(t) {
                                            return [
                                                t,
                                                e.blockTunes.get(t)
                                            ];
                                        }));
                                        t359.tunes = new E.default([].concat((0, r90.default)(o), (0, r90.default)(this.blockTunes.internalTools)));
                                    } else t359.tunes = this.blockTunes.internalTools;
                                }
                            }
                        },
                        {
                            key: "validateTools",
                            value: function() {
                                for(var t in this.config.tools)if (Object.prototype.hasOwnProperty.call(this.config.tools, t)) {
                                    if (t in this.internalTools) return;
                                    var e = this.config.tools[t];
                                    if (!g.isFunction(e) && !g.isFunction(e.class)) throw Error("Tool \xab".concat(t, "\xbb must be a constructor function or an object with function in the \xabclass\xbb property"));
                                }
                            }
                        },
                        {
                            key: "prepareConfig",
                            value: function() {
                                var t = {};
                                for(var e in this.config.tools)g.isObject(this.config.tools[e]) ? t[e] = this.config.tools[e] : t[e] = {
                                    class: this.config.tools[e]
                                };
                                return t;
                            }
                        },
                        {
                            key: "available",
                            get: function() {
                                return this.toolsAvailable;
                            }
                        },
                        {
                            key: "unavailable",
                            get: function() {
                                return this.toolsUnavailable;
                            }
                        },
                        {
                            key: "inlineTools",
                            get: function() {
                                return this.available.inlineTools;
                            }
                        },
                        {
                            key: "blockTools",
                            get: function() {
                                return this.available.blockTools;
                            }
                        },
                        {
                            key: "blockTunes",
                            get: function() {
                                return this.available.blockTunes;
                            }
                        },
                        {
                            key: "defaultTool",
                            get: function() {
                                return this.blockTools.get(this.config.defaultBlock);
                            }
                        },
                        {
                            key: "internal",
                            get: function() {
                                return this.available.internalTools;
                            }
                        },
                        {
                            key: "internalTools",
                            get: function() {
                                return {
                                    bold: {
                                        class: y.default,
                                        isInternal: !0
                                    },
                                    italic: {
                                        class: b.default,
                                        isInternal: !0
                                    },
                                    link: {
                                        class: m.default,
                                        isInternal: !0
                                    },
                                    paragraph: {
                                        class: h.default,
                                        inlineToolbar: !0,
                                        isInternal: !0
                                    },
                                    stub: {
                                        class: k.default,
                                        isInternal: !0
                                    },
                                    moveUp: {
                                        class: T.default,
                                        isInternal: !0
                                    },
                                    delete: {
                                        class: S.default,
                                        isInternal: !0
                                    },
                                    moveDown: {
                                        class: w.default,
                                        isInternal: !0
                                    }
                                };
                            }
                        }
                    ]), p;
                }(v.default);
                o161.default = O, O.displayName = "Tools", I([
                    g.cacheable
                ], O.prototype, "getAllInlineToolsSanitizeConfig", null), t350.exports = e236.default;
            }) ? o160.apply(e236, r89) : o160) || (t350.exports = i91);
        },
        function(t360, e238, n183) {
            var o163, r91, i93;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r91 = [
                e238,
                n183(30),
                n183(2),
                n183(3),
                n183(5),
                n183(6),
                n183(4),
                n183(153)
            ], void 0 === (i93 = "function" == typeof (o163 = function(o164, r, i, a, s, l, c, u) {
                "use strict";
                var f = n183(1);
                function d() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o164, "__esModule", {
                    value: !0
                }), o164.default = void 0, r = f(r), i = f(i), a = f(a), s = f(s), l = f(l), c = f(c);
                var p = function(t361) {
                    (0, s.default)(o165, t361);
                    var e, n184 = (e = o165, function() {
                        var t, n = (0, c.default)(e);
                        if (d()) {
                            var o = (0, c.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, l.default)(this, t);
                    });
                    function o165() {
                        return (0, i.default)(this, o165), n184.apply(this, arguments);
                    }
                    return (0, a.default)(o165, [
                        {
                            key: "blockTools",
                            get: function() {
                                return new o165(Array.from(this.entries()).filter(function(t) {
                                    return (0, r.default)(t, 2)[1].isBlock();
                                }));
                            }
                        },
                        {
                            key: "inlineTools",
                            get: function() {
                                return new o165(Array.from(this.entries()).filter(function(t) {
                                    return (0, r.default)(t, 2)[1].isInline();
                                }));
                            }
                        },
                        {
                            key: "blockTunes",
                            get: function() {
                                return new o165(Array.from(this.entries()).filter(function(t) {
                                    return (0, r.default)(t, 2)[1].isTune();
                                }));
                            }
                        },
                        {
                            key: "internalTools",
                            get: function() {
                                return new o165(Array.from(this.entries()).filter(function(t) {
                                    return (0, r.default)(t, 2)[1].isInternal;
                                }));
                            }
                        },
                        {
                            key: "externalTools",
                            get: function() {
                                return new o165(Array.from(this.entries()).filter(function(t) {
                                    return !(0, r.default)(t, 2)[1].isInternal;
                                }));
                            }
                        }
                    ]), o165;
                }((0, (u = f(u)).default)(Map));
                o164.default = p, p.displayName = "ToolsCollection", t360.exports = e238.default;
            }) ? o163.apply(e238, r91) : o163) || (t360.exports = i93);
        },
        function(t362, e239, n185) {
            var o166, r92, i94;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r92 = [
                e239,
                n185(30),
                n185(42),
                n185(20),
                n185(21),
                n185(2),
                n185(3),
                n185(5),
                n185(6),
                n185(4),
                n185(401),
                n185(9),
                n185(14),
                n185(7),
                n185(25),
                n185(61),
                n185(62)
            ], void 0 === (i94 = "function" == typeof (o166 = function(o167, r93, i95, a37, s31, l23, c20, u16, f16, d12, p13, h7, v, g, y, b, m) {
                "use strict";
                var k4 = n185(8), x = n185(1);
                function w() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o167, "__esModule", {
                    value: !0
                }), o167.default = void 0, r93 = x(r93), i95 = x(i95), a37 = x(a37), s31 = x(s31), l23 = x(l23), c20 = x(c20), u16 = x(u16), f16 = x(f16), d12 = x(d12), p13 = x(p13), h7 = x(h7), v = x(v), g = k4(g), y = x(y), b = x(b), m = x(m);
                var S = function(t363) {
                    (0, u16.default)(k, t363);
                    var e240, o168, h = (e240 = k, function() {
                        var t, n = (0, d12.default)(e240);
                        if (w()) {
                            var o = (0, d12.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, f16.default)(this, t);
                    });
                    function k() {
                        var t;
                        return (0, l23.default)(this, k), (t = h.apply(this, arguments)).isMobile = !1, t.contentRectCache = void 0, t.resizeDebouncer = g.debounce(function() {
                            t.windowResize();
                        }, 200), t;
                    }
                    return (0, c20.default)(k, [
                        {
                            key: "addLoader",
                            value: function() {
                                this.nodes.loader = v.default.make("div", this.CSS.editorLoader), this.nodes.wrapper.prepend(this.nodes.loader), this.nodes.redactor.classList.add(this.CSS.editorZoneHidden);
                            }
                        },
                        {
                            key: "removeLoader",
                            value: function() {
                                this.nodes.loader.remove(), this.nodes.redactor.classList.remove(this.CSS.editorZoneHidden);
                            }
                        },
                        {
                            key: "prepare",
                            value: (o168 = (0, s31.default)(a37.default.mark(function t364() {
                                return a37.default.wrap(function(t) {
                                    for(;;)switch(t.prev = t.next){
                                        case 0:
                                            this.checkIsMobile(), this.make(), this.addLoader(), this.appendSVGSprite(), this.loadStyles();
                                        case 5:
                                        case "end":
                                            return t.stop();
                                    }
                                }, t364, this);
                            })), function() {
                                return o168.apply(this, arguments);
                            })
                        },
                        {
                            key: "toggleReadOnly",
                            value: function(t) {
                                t ? this.disableModuleBindings() : this.enableModuleBindings();
                            }
                        },
                        {
                            key: "checkEmptiness",
                            value: function() {
                                var t = this.Editor.BlockManager;
                                this.nodes.wrapper.classList.toggle(this.CSS.editorEmpty, t.isEditorEmpty);
                            }
                        },
                        {
                            key: "destroy",
                            value: function() {
                                this.nodes.holder.innerHTML = "";
                            }
                        },
                        {
                            key: "closeAllToolbars",
                            value: function() {
                                var t = this.Editor, e = t.Toolbar, n = t.BlockSettings, o = t.InlineToolbar, r = t.ConversionToolbar;
                                n.close(), o.close(), r.close(), e.toolbox.close();
                            }
                        },
                        {
                            key: "checkIsMobile",
                            value: function() {
                                this.isMobile = window.innerWidth < 650;
                            }
                        },
                        {
                            key: "make",
                            value: function() {
                                this.nodes.holder = v.default.getHolder(this.config.holder), this.nodes.wrapper = v.default.make("div", [
                                    this.CSS.editorWrapper
                                ].concat((0, i95.default)(this.isRtl ? [
                                    this.CSS.editorRtlFix
                                ] : []))), this.nodes.redactor = v.default.make("div", this.CSS.editorZone), this.nodes.holder.offsetWidth < this.contentRect.width && this.nodes.wrapper.classList.add(this.CSS.editorWrapperNarrow), this.nodes.redactor.style.paddingBottom = this.config.minHeight + "px", this.nodes.wrapper.appendChild(this.nodes.redactor), this.nodes.holder.appendChild(this.nodes.wrapper);
                            }
                        },
                        {
                            key: "loadStyles",
                            value: function() {
                                var t = n185(402);
                                if (!v.default.get("editor-js-styles")) {
                                    var e = v.default.make("style", null, {
                                        id: "editor-js-styles",
                                        textContent: t.toString()
                                    });
                                    v.default.prepend(document.head, e);
                                }
                            }
                        },
                        {
                            key: "enableModuleBindings",
                            value: function() {
                                var t = this;
                                this.readOnlyMutableListeners.on(this.nodes.redactor, "click", function(e) {
                                    t.redactorClicked(e);
                                }, !1), this.readOnlyMutableListeners.on(this.nodes.redactor, "mousedown", function(e) {
                                    t.documentTouched(e);
                                }, !0), this.readOnlyMutableListeners.on(this.nodes.redactor, "touchstart", function(e) {
                                    t.documentTouched(e);
                                }, !0), this.readOnlyMutableListeners.on(document, "keydown", function(e) {
                                    t.documentKeydown(e);
                                }, !0), this.readOnlyMutableListeners.on(document, "mousedown", function(e) {
                                    t.documentClicked(e);
                                }, !0), this.readOnlyMutableListeners.on(document, "selectionchange", function(e) {
                                    t.selectionChanged(e);
                                }, !0), this.readOnlyMutableListeners.on(window, "resize", function() {
                                    t.resizeDebouncer();
                                }, {
                                    passive: !0
                                }), this.watchBlockHoveredEvents();
                            }
                        },
                        {
                            key: "watchBlockHoveredEvents",
                            value: function() {
                                var t, e = this;
                                this.readOnlyMutableListeners.on(this.nodes.redactor, "mousemove", g.throttle(function(n) {
                                    var o = n.target.closest(".ce-block");
                                    e.Editor.BlockSelection.anyBlockSelected || o && t !== o && (t = o, e.eventsDispatcher.emit(e.events.blockHovered, {
                                        block: e.Editor.BlockManager.getBlockByChildNode(o)
                                    }));
                                }, 20), {
                                    passive: !0
                                });
                            }
                        },
                        {
                            key: "disableModuleBindings",
                            value: function() {
                                this.readOnlyMutableListeners.clearAll();
                            }
                        },
                        {
                            key: "windowResize",
                            value: function() {
                                this.contentRectCache = null, this.checkIsMobile();
                            }
                        },
                        {
                            key: "documentKeydown",
                            value: function(t) {
                                switch(t.keyCode){
                                    case g.keyCodes.ENTER:
                                        this.enterPressed(t);
                                        break;
                                    case g.keyCodes.BACKSPACE:
                                        this.backspacePressed(t);
                                        break;
                                    case g.keyCodes.ESC:
                                        this.escapePressed(t);
                                        break;
                                    default:
                                        this.defaultBehaviour(t);
                                }
                            }
                        },
                        {
                            key: "defaultBehaviour",
                            value: function(t) {
                                var e = this.Editor.BlockManager.currentBlock, n = t.target.closest(".".concat(this.CSS.editorWrapper)), o = t.altKey || t.ctrlKey || t.metaKey || t.shiftKey;
                                void 0 === e || null !== n ? n || e && o || (this.Editor.BlockManager.dropPointer(), this.Editor.Toolbar.close()) : this.Editor.BlockEvents.keydown(t);
                            }
                        },
                        {
                            key: "backspacePressed",
                            value: function(t) {
                                var e = this.Editor, n = e.BlockManager, o = e.BlockSelection, r = e.Caret;
                                if (o.anyBlockSelected && !y.default.isSelectionExists) {
                                    var i = n.removeSelectedBlocks();
                                    r.setToBlock(n.insertDefaultBlockAtIndex(i, !0), r.positions.START), o.clearSelection(t), t.preventDefault(), t.stopPropagation(), t.stopImmediatePropagation();
                                }
                            }
                        },
                        {
                            key: "escapePressed",
                            value: function(t) {
                                this.Editor.BlockSelection.clearSelection(t), this.Editor.Toolbar.toolbox.opened ? (this.Editor.Toolbar.toolbox.close(), this.Editor.Caret.setToBlock(this.Editor.BlockManager.currentBlock)) : this.Editor.BlockSettings.opened ? this.Editor.BlockSettings.close() : this.Editor.ConversionToolbar.opened ? this.Editor.ConversionToolbar.close() : this.Editor.InlineToolbar.opened ? this.Editor.InlineToolbar.close() : this.Editor.Toolbar.close();
                            }
                        },
                        {
                            key: "enterPressed",
                            value: function(t) {
                                var e = this.Editor, n = e.BlockManager, o = e.BlockSelection, r = n.currentBlockIndex >= 0;
                                if (o.anyBlockSelected && !y.default.isSelectionExists) return o.clearSelection(t), t.preventDefault(), t.stopImmediatePropagation(), void t.stopPropagation();
                                if (!this.someToolbarOpened && r && "BODY" === t.target.tagName) {
                                    var i = this.Editor.BlockManager.insert();
                                    this.Editor.Caret.setToBlock(i), this.Editor.BlockManager.highlightCurrentNode(), this.Editor.Toolbar.moveAndOpen(i);
                                }
                                this.Editor.BlockSelection.clearSelection(t);
                            }
                        },
                        {
                            key: "documentClicked",
                            value: function(t) {
                                if (t.isTrusted) {
                                    var e = t.target;
                                    this.nodes.holder.contains(e) || y.default.isAtEditor || (this.Editor.BlockManager.dropPointer(), this.Editor.Toolbar.close());
                                    var n = this.Editor.BlockSettings.nodes.wrapper.contains(e), o = this.Editor.Toolbar.nodes.settingsToggler.contains(e), r = n || o;
                                    if (this.Editor.BlockSettings.opened && !r) {
                                        this.Editor.BlockSettings.close();
                                        var i = this.Editor.BlockManager.getBlockByChildNode(e);
                                        this.Editor.Toolbar.moveAndOpen(i);
                                    }
                                    this.Editor.BlockSelection.clearSelection(t);
                                }
                            }
                        },
                        {
                            key: "documentTouched",
                            value: function(t) {
                                var e = t.target;
                                if (e === this.nodes.redactor) {
                                    var n = t instanceof MouseEvent ? t.clientX : t.touches[0].clientX, o = t instanceof MouseEvent ? t.clientY : t.touches[0].clientY;
                                    e = document.elementFromPoint(n, o);
                                }
                                try {
                                    this.Editor.BlockManager.setCurrentBlockByChildNode(e), this.Editor.BlockManager.highlightCurrentNode();
                                } catch (t365) {
                                    this.Editor.RectangleSelection.isRectActivated() || this.Editor.Caret.setToTheLastBlock();
                                }
                                this.Editor.Toolbar.moveAndOpen();
                            }
                        },
                        {
                            key: "redactorClicked",
                            value: function(t) {
                                var e = this.Editor.BlockSelection;
                                if (y.default.isCollapsed) {
                                    var n = function() {
                                        t.stopImmediatePropagation(), t.stopPropagation();
                                    }, o = t.target, r = t.metaKey || t.ctrlKey;
                                    if (v.default.isAnchor(o) && r) {
                                        n();
                                        var i = o.getAttribute("href"), a = g.getValidUrl(i);
                                        g.openTab(a);
                                    } else {
                                        var s = this.Editor.BlockManager.getBlockByIndex(-1), l = v.default.offset(s.holder).bottom, c = t.pageY;
                                        if (t.target instanceof Element && t.target.isEqualNode(this.nodes.redactor) && !e.anyBlockSelected && l < c) {
                                            n();
                                            var u = this.Editor, f = u.BlockManager, d = u.Caret, p = u.Toolbar;
                                            f.lastBlock.tool.isDefault && f.lastBlock.isEmpty || f.insertAtEnd(), d.setToTheLastBlock(), p.moveAndOpen(f.lastBlock);
                                        }
                                    }
                                }
                            }
                        },
                        {
                            key: "selectionChanged",
                            value: function(t) {
                                var e = this.Editor, n = e.CrossBlockSelection, o = e.BlockSelection, r = y.default.anchorElement;
                                if (n.isCrossBlockSelectionStarted && o.anyBlockSelected && y.default.get().removeAllRanges(), r) {
                                    var i = null === r.closest(".".concat(b.default.CSS.content));
                                    if (i && (this.Editor.InlineToolbar.containsNode(r) || this.Editor.InlineToolbar.close(), "true" !== r.dataset.inlineToolbar)) return;
                                    this.Editor.BlockManager.currentBlock || this.Editor.BlockManager.setCurrentBlockByChildNode(r);
                                    var a = !0 !== i;
                                    this.Editor.InlineToolbar.tryToShow(!0, a);
                                } else y.default.range || this.Editor.InlineToolbar.close();
                            }
                        },
                        {
                            key: "appendSVGSprite",
                            value: function() {
                                var t = v.default.make("div");
                                t.hidden = !0, t.style.display = "none", t.innerHTML = p13.default, v.default.append(this.nodes.wrapper, t);
                            }
                        },
                        {
                            key: "events",
                            get: function() {
                                return {
                                    blockHovered: "block-hovered"
                                };
                            }
                        },
                        {
                            key: "CSS",
                            get: function() {
                                return {
                                    editorWrapper: "codex-editor",
                                    editorWrapperNarrow: "codex-editor--narrow",
                                    editorZone: "codex-editor__redactor",
                                    editorZoneHidden: "codex-editor__redactor--hidden",
                                    editorLoader: "codex-editor__loader",
                                    editorEmpty: "codex-editor--empty",
                                    editorRtlFix: "codex-editor--rtl"
                                };
                            }
                        },
                        {
                            key: "contentRect",
                            get: function() {
                                if (this.contentRectCache) return this.contentRectCache;
                                var t = this.nodes.wrapper.querySelector(".".concat(b.default.CSS.content));
                                return t ? (this.contentRectCache = t.getBoundingClientRect(), this.contentRectCache) : {
                                    width: 650,
                                    left: 0,
                                    right: 0
                                };
                            }
                        },
                        {
                            key: "someToolbarOpened",
                            get: function() {
                                var t = this.Editor, e = t.Toolbar, n = t.BlockSettings, o = t.InlineToolbar, r = t.ConversionToolbar;
                                return n.opened || o.opened || r.opened || e.toolbox.opened;
                            }
                        },
                        {
                            key: "someFlipperButtonFocused",
                            get: function() {
                                return !!this.Editor.Toolbar.toolbox.hasFocus() || Object.entries(this.Editor).filter(function(t) {
                                    var e = (0, r93.default)(t, 2);
                                    return e[0], e[1].flipper instanceof m.default;
                                }).some(function(t) {
                                    var e = (0, r93.default)(t, 2);
                                    return e[0], e[1].flipper.hasFocus();
                                });
                            }
                        }
                    ]), k;
                }(h7.default);
                o167.default = S, S.displayName = "UI", t362.exports = e239.default;
            }) ? o166.apply(e239, r92) : o166) || (t362.exports = i94);
        },
        function(t, e, n) {
            n(188), t.exports = n(360);
        },
        function(t, e, n) {
            n(189);
        },
        function(t, e, n) {
            "use strict";
            n(190), n(333), n(335), n(338), n(340), n(342), n(344), n(346), n(348), n(350), n(352), n(354), n(356), n(147);
        },
        function(t, e, n) {
            n(191), n(194), n(195), n(196), n(197), n(198), n(199), n(200), n(201), n(202), n(203), n(204), n(205), n(206), n(207), n(208), n(209), n(210), n(211), n(212), n(213), n(214), n(215), n(216), n(217), n(218), n(219), n(220), n(221), n(222), n(223), n(224), n(225), n(226), n(227), n(228), n(229), n(230), n(231), n(232), n(233), n(234), n(235), n(237), n(238), n(239), n(240), n(241), n(242), n(243), n(244), n(245), n(246), n(247), n(248), n(249), n(250), n(251), n(252), n(253), n(254), n(255), n(256), n(257), n(258), n(259), n(260), n(261), n(262), n(263), n(264), n(265), n(266), n(267), n(268), n(269), n(270), n(272), n(273), n(275), n(276), n(277), n(278), n(279), n(280), n(281), n(283), n(284), n(285), n(286), n(287), n(288), n(289), n(290), n(291), n(292), n(293), n(294), n(295), n(105), n(296), n(136), n(297), n(137), n(298), n(299), n(300), n(301), n(138), n(304), n(305), n(306), n(307), n(308), n(309), n(310), n(311), n(312), n(313), n(314), n(315), n(316), n(317), n(318), n(319), n(320), n(321), n(322), n(323), n(324), n(325), n(326), n(327), n(328), n(329), n(330), n(331), n(332), t.exports = n(17);
        },
        function(t366, e241, n186) {
            "use strict";
            var o169 = n186(10), r94 = n186(26), i96 = n186(18), a38 = n186(0), s = n186(23), l = n186(41).KEY, c = n186(11), u = n186(69), f = n186(53), d = n186(44), p = n186(15), h = n186(86), v = n186(117), g = n186(193), y = n186(72), b = n186(12), m = n186(13), k = n186(22), x = n186(28), w = n186(40), S = n186(43), T = n186(48), E = n186(120), B = n186(34), C = n186(71), _ = n186(19), I = n186(46), O = B.f, M = _.f, R = E.f, A = o169.Symbol, N = o169.JSON, L = N && N.stringify, P = p("_hidden"), D = p("toPrimitive"), j = {}.propertyIsEnumerable, F = u("symbol-registry"), H = u("symbols"), U = u("op-symbols"), z = Object.prototype, W = "function" == typeof A && !!C.f, Y = o169.QObject, V = !Y || !Y.prototype || !Y.prototype.findChild, X = i96 && c(function() {
                return 7 != T(M({}, "a", {
                    get: function() {
                        return M(this, "a", {
                            value: 7
                        }).a;
                    }
                })).a;
            }) ? function(t, e, n) {
                var o = O(z, e);
                o && delete z[e], M(t, e, n), o && t !== z && M(z, e, o);
            } : M, K = function(t) {
                var e = H[t] = T(A.prototype);
                return e._k = t, e;
            }, G = W && "symbol" == typeof A.iterator ? function(t) {
                return "symbol" == typeof t;
            } : function(t) {
                return t instanceof A;
            }, Z = function(t, e, n) {
                return t === z && Z(U, e, n), b(t), e = w(e, !0), b(n), r94(H, e) ? (n.enumerable ? (r94(t, P) && t[P][e] && (t[P][e] = !1), n = T(n, {
                    enumerable: S(0, !1)
                })) : (r94(t, P) || M(t, P, S(1, {})), t[P][e] = !0), X(t, e, n)) : M(t, e, n);
            }, q = function(t, e) {
                b(t);
                for(var n, o = g(e = x(e)), r = 0, i = o.length; i > r;)Z(t, n = o[r++], e[n]);
                return t;
            }, J = function(t) {
                var e = j.call(this, t = w(t, !0));
                return !(this === z && r94(H, t) && !r94(U, t)) && (!(e || !r94(this, t) || !r94(H, t) || r94(this, P) && this[P][t]) || e);
            }, $ = function(t, e) {
                if (t = x(t), e = w(e, !0), t !== z || !r94(H, e) || r94(U, e)) {
                    var n = O(t, e);
                    return !n || !r94(H, e) || r94(t, P) && t[P][e] || (n.enumerable = !0), n;
                }
            }, Q = function(t) {
                for(var e, n = R(x(t)), o = [], i = 0; n.length > i;)r94(H, e = n[i++]) || e == P || e == l || o.push(e);
                return o;
            }, tt = function(t) {
                for(var e, n = t === z, o = R(n ? U : x(t)), i = [], a = 0; o.length > a;)!r94(H, e = o[a++]) || n && !r94(z, e) || i.push(H[e]);
                return i;
            };
            W || (s((A = function() {
                if (this instanceof A) throw TypeError("Symbol is not a constructor!");
                var t = d(arguments.length > 0 ? arguments[0] : void 0), e = function(n) {
                    this === z && e.call(U, n), r94(this, P) && r94(this[P], t) && (this[P][t] = !1), X(this, t, S(1, n));
                };
                return i96 && V && X(z, t, {
                    configurable: !0,
                    set: e
                }), K(t);
            }).prototype, "toString", function() {
                return this._k;
            }), B.f = $, _.f = Z, n186(49).f = E.f = Q, n186(64).f = J, C.f = tt, i96 && !n186(45) && s(z, "propertyIsEnumerable", J, !0), h.f = function(t) {
                return K(p(t));
            }), a38(a38.G + a38.W + a38.F * !W, {
                Symbol: A
            });
            for(var et = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), nt = 0; et.length > nt;)p(et[nt++]);
            for(var ot = I(p.store), rt = 0; ot.length > rt;)v(ot[rt++]);
            a38(a38.S + a38.F * !W, "Symbol", {
                for: function(t) {
                    return r94(F, t += "") ? F[t] : F[t] = A(t);
                },
                keyFor: function(t) {
                    if (!G(t)) throw TypeError(t + " is not a symbol!");
                    for(var e in F)if (F[e] === t) return e;
                },
                useSetter: function() {
                    V = !0;
                },
                useSimple: function() {
                    V = !1;
                }
            }), a38(a38.S + a38.F * !W, "Object", {
                create: function(t, e) {
                    return void 0 === e ? T(t) : q(T(t), e);
                },
                defineProperty: Z,
                defineProperties: q,
                getOwnPropertyDescriptor: $,
                getOwnPropertyNames: Q,
                getOwnPropertySymbols: tt
            });
            var it = c(function() {
                C.f(1);
            });
            a38(a38.S + a38.F * it, "Object", {
                getOwnPropertySymbols: function(t) {
                    return C.f(k(t));
                }
            }), N && a38(a38.S + a38.F * (!W || c(function() {
                var t = A();
                return "[null]" != L([
                    t
                ]) || "{}" != L({
                    a: t
                }) || "{}" != L(Object(t));
            })), "JSON", {
                stringify: function(t367) {
                    for(var e242, n, o = [
                        t367
                    ], r = 1; arguments.length > r;)o.push(arguments[r++]);
                    if (n = e242 = o[1], (m(e242) || void 0 !== t367) && !G(t367)) return y(e242) || (e242 = function(t, e) {
                        if ("function" == typeof n && (e = n.call(this, t, e)), !G(e)) return e;
                    }), o[1] = e242, L.apply(N, o);
                }
            }), A.prototype[D] || n186(27)(A.prototype, D, A.prototype.valueOf), f(A, "Symbol"), f(Math, "Math", !0), f(o169.JSON, "JSON", !0);
        },
        function(t, e, n) {
            t.exports = n(69)("native-function-to-string", Function.toString);
        },
        function(t368, e243, n187) {
            var o = n187(46), r = n187(71), i = n187(64);
            t368.exports = function(t) {
                var e = o(t), n = r.f;
                if (n) for(var a, s = n(t), l = i.f, c = 0; s.length > c;)l.call(t, a = s[c++]) && e.push(a);
                return e;
            };
        },
        function(t, e, n) {
            var o = n(0);
            o(o.S, "Object", {
                create: n(48)
            });
        },
        function(t, e, n) {
            var o = n(0);
            o(o.S + o.F * !n(18), "Object", {
                defineProperty: n(19).f
            });
        },
        function(t, e, n) {
            var o = n(0);
            o(o.S + o.F * !n(18), "Object", {
                defineProperties: n(119)
            });
        },
        function(t369, e244, n) {
            var o = n(28), r = n(34).f;
            n(35)("getOwnPropertyDescriptor", function() {
                return function(t, e) {
                    return r(o(t), e);
                };
            });
        },
        function(t370, e, n) {
            var o = n(22), r = n(50);
            n(35)("getPrototypeOf", function() {
                return function(t) {
                    return r(o(t));
                };
            });
        },
        function(t371, e, n) {
            var o = n(22), r = n(46);
            n(35)("keys", function() {
                return function(t) {
                    return r(o(t));
                };
            });
        },
        function(t, e, n) {
            n(35)("getOwnPropertyNames", function() {
                return n(120).f;
            });
        },
        function(t372, e245, n) {
            var o = n(13), r = n(41).onFreeze;
            n(35)("freeze", function(t) {
                return function(e) {
                    return t && o(e) ? t(r(e)) : e;
                };
            });
        },
        function(t373, e246, n) {
            var o = n(13), r = n(41).onFreeze;
            n(35)("seal", function(t) {
                return function(e) {
                    return t && o(e) ? t(r(e)) : e;
                };
            });
        },
        function(t374, e247, n) {
            var o = n(13), r = n(41).onFreeze;
            n(35)("preventExtensions", function(t) {
                return function(e) {
                    return t && o(e) ? t(r(e)) : e;
                };
            });
        },
        function(t375, e248, n) {
            var o = n(13);
            n(35)("isFrozen", function(t) {
                return function(e) {
                    return !o(e) || !!t && t(e);
                };
            });
        },
        function(t376, e249, n) {
            var o = n(13);
            n(35)("isSealed", function(t) {
                return function(e) {
                    return !o(e) || !!t && t(e);
                };
            });
        },
        function(t377, e250, n) {
            var o = n(13);
            n(35)("isExtensible", function(t) {
                return function(e) {
                    return !!o(e) && (!t || t(e));
                };
            });
        },
        function(t, e, n) {
            var o = n(0);
            o(o.S + o.F, "Object", {
                assign: n(121)
            });
        },
        function(t, e, n) {
            var o = n(0);
            o(o.S, "Object", {
                is: n(122)
            });
        },
        function(t, e, n) {
            var o = n(0);
            o(o.S, "Object", {
                setPrototypeOf: n(90).set
            });
        },
        function(t, e, n) {
            "use strict";
            var o = n(65), r = {};
            r[n(15)("toStringTag")] = "z", r + "" != "[object z]" && n(23)(Object.prototype, "toString", function() {
                return "[object " + o(this) + "]";
            }, !0);
        },
        function(t, e, n) {
            var o = n(0);
            o(o.P, "Function", {
                bind: n(123)
            });
        },
        function(t, e, n) {
            var o = n(19).f, r = Function.prototype, i = /^\s*function ([^ (]*)/;
            "name" in r || n(18) && o(r, "name", {
                configurable: !0,
                get: function() {
                    try {
                        return ("" + this).match(i)[1];
                    } catch (t) {
                        return "";
                    }
                }
            });
        },
        function(t378, e, n) {
            "use strict";
            var o = n(13), r = n(50), i = n(15)("hasInstance"), a = Function.prototype;
            i in a || n(19).f(a, i, {
                value: function(t) {
                    if ("function" != typeof this || !o(t)) return !1;
                    if (!o(this.prototype)) return t instanceof this;
                    for(; t = r(t);)if (this.prototype === t) return !0;
                    return !1;
                }
            });
        },
        function(t, e, n) {
            var o = n(0), r = n(125);
            o(o.G + o.F * (parseInt != r), {
                parseInt: r
            });
        },
        function(t, e, n) {
            var o = n(0), r = n(126);
            o(o.G + o.F * (parseFloat != r), {
                parseFloat: r
            });
        },
        function(t379, e251, n188) {
            "use strict";
            var o170 = n188(10), r95 = n188(26), i97 = n188(37), a39 = n188(92), s = n188(40), l24 = n188(11), c21 = n188(49).f, u17 = n188(34).f, f = n188(19).f, d = n188(54).trim, p = o170.Number, h = p, v = p.prototype, g = "Number" == i97(n188(48)(v)), y = "trim" in String.prototype, b = function(t) {
                var e = s(t, !1);
                if ("string" == typeof e && e.length > 2) {
                    var n, o, r, i = (e = y ? e.trim() : d(e, 3)).charCodeAt(0);
                    if (43 === i || 45 === i) {
                        if (88 === (n = e.charCodeAt(2)) || 120 === n) return NaN;
                    } else if (48 === i) {
                        switch(e.charCodeAt(1)){
                            case 66:
                            case 98:
                                o = 2, r = 49;
                                break;
                            case 79:
                            case 111:
                                o = 8, r = 55;
                                break;
                            default:
                                return +e;
                        }
                        for(var a, l = e.slice(2), c = 0, u = l.length; c < u; c++)if ((a = l.charCodeAt(c)) < 48 || a > r) return NaN;
                        return parseInt(l, o);
                    }
                }
                return +e;
            };
            if (!p(" 0o1") || !p("0b1") || p("+0x1")) {
                p = function(t) {
                    var e = arguments.length < 1 ? 0 : t, n = this;
                    return n instanceof p && (g ? l24(function() {
                        v.valueOf.call(n);
                    }) : "Number" != i97(n)) ? a39(new h(b(e)), n, p) : b(e);
                };
                for(var m, k = n188(18) ? c21(h) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), x = 0; k.length > x; x++)r95(h, m = k[x]) && !r95(p, m) && f(p, m, u17(h, m));
                p.prototype = v, v.constructor = p, n188(23)(o170, "Number", p);
            }
        },
        function(t380, e252, n189) {
            "use strict";
            var o171 = n189(0), r = n189(33), i = n189(127), a = n189(93), s32 = 1..toFixed, l25 = Math.floor, c22 = [
                0,
                0,
                0,
                0,
                0,
                0
            ], u = "Number.toFixed: incorrect invocation!", f = function(t, e) {
                for(var n = -1, o = e; ++n < 6;)o += t * c22[n], c22[n] = o % 1e7, o = l25(o / 1e7);
            }, d = function(t) {
                for(var e = 6, n = 0; --e >= 0;)n += c22[e], c22[e] = l25(n / t), n = n % t * 1e7;
            }, p = function() {
                for(var t = 6, e = ""; --t >= 0;)if ("" !== e || 0 === t || 0 !== c22[t]) {
                    var n = String(c22[t]);
                    e = "" === e ? n : e + a.call("0", 7 - n.length) + n;
                }
                return e;
            }, h = function(t, e, n) {
                return 0 === e ? n : e % 2 == 1 ? h(t, e - 1, n * t) : h(t * t, e / 2, n);
            };
            o171(o171.P + o171.F * (!!s32 && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== 0xde0b6b3a7640080.toFixed(0)) || !n189(11)(function() {
                s32.call({});
            })), "Number", {
                toFixed: function(t381) {
                    var e253, n190, o, s, l = i(this, u), c = r(t381), v = "", g = "0";
                    if (c < 0 || c > 20) throw RangeError(u);
                    if (l != l) return "NaN";
                    if (l <= -1000000000000000000000 || l >= 1e21) return String(l);
                    if (l < 0 && (v = "-", l = -l), l > 1e-21) {
                        if (n190 = (e253 = function(t) {
                            for(var e = 0, n = t; n >= 4096;)e += 12, n /= 4096;
                            for(; n >= 2;)e += 1, n /= 2;
                            return e;
                        }(l * h(2, 69, 1)) - 69) < 0 ? l * h(2, -e253, 1) : l / h(2, e253, 1), n190 *= 4503599627370496, (e253 = 52 - e253) > 0) {
                            for(f(0, n190), o = c; o >= 7;)f(1e7, 0), o -= 7;
                            for(f(h(10, o, 1), 0), o = e253 - 1; o >= 23;)d(8388608), o -= 23;
                            d(1 << o), f(1, 1), d(2), g = p();
                        } else f(0, n190), f(1 << -e253, 0), g = p() + a.call("0", c);
                    }
                    return g = c > 0 ? v + ((s = g.length) <= c ? "0." + a.call("0", c - s) + g : g.slice(0, s - c) + "." + g.slice(s - c)) : v + g;
                }
            });
        },
        function(t382, e254, n) {
            "use strict";
            var o = n(0), r = n(11), i = n(127), a = 1..toPrecision;
            o(o.P + o.F * (r(function() {
                return "1" !== a.call(1, void 0);
            }) || !r(function() {
                a.call({});
            })), "Number", {
                toPrecision: function(t) {
                    var e = i(this, "Number#toPrecision: incorrect invocation!");
                    return void 0 === t ? a.call(e) : a.call(e, t);
                }
            });
        },
        function(t, e, n) {
            var o = n(0);
            o(o.S, "Number", {
                EPSILON: Math.pow(2, -52)
            });
        },
        function(t383, e, n) {
            var o = n(0), r = n(10).isFinite;
            o(o.S, "Number", {
                isFinite: function(t) {
                    return "number" == typeof t && r(t);
                }
            });
        },
        function(t, e, n) {
            var o = n(0);
            o(o.S, "Number", {
                isInteger: n(128)
            });
        },
        function(t384, e, n) {
            var o = n(0);
            o(o.S, "Number", {
                isNaN: function(t) {
                    return t != t;
                }
            });
        },
        function(t385, e, n) {
            var o = n(0), r = n(128), i = Math.abs;
            o(o.S, "Number", {
                isSafeInteger: function(t) {
                    return r(t) && i(t) <= 9007199254740991;
                }
            });
        },
        function(t, e, n) {
            var o = n(0);
            o(o.S, "Number", {
                MAX_SAFE_INTEGER: 9007199254740991
            });
        },
        function(t, e, n) {
            var o = n(0);
            o(o.S, "Number", {
                MIN_SAFE_INTEGER: -9007199254740991
            });
        },
        function(t, e, n) {
            var o = n(0), r = n(126);
            o(o.S + o.F * (Number.parseFloat != r), "Number", {
                parseFloat: r
            });
        },
        function(t, e, n) {
            var o = n(0), r = n(125);
            o(o.S + o.F * (Number.parseInt != r), "Number", {
                parseInt: r
            });
        },
        function(t386, e, n) {
            var o = n(0), r = n(129), i = Math.sqrt, a = Math.acosh;
            o(o.S + o.F * !(a && 710 == Math.floor(a(Number.MAX_VALUE)) && a(1 / 0) == 1 / 0), "Math", {
                acosh: function(t) {
                    return (t = +t) < 1 ? NaN : t > 94906265.62425156 ? Math.log(t) + Math.LN2 : r(t - 1 + i(t - 1) * i(t + 1));
                }
            });
        },
        function(t387, e255, n) {
            var o = n(0), r = Math.asinh;
            o(o.S + o.F * !(r && 1 / r(0) > 0), "Math", {
                asinh: function t(e) {
                    return isFinite(e = +e) && 0 != e ? e < 0 ? -t(-e) : Math.log(e + Math.sqrt(e * e + 1)) : e;
                }
            });
        },
        function(t388, e, n) {
            var o = n(0), r = Math.atanh;
            o(o.S + o.F * !(r && 1 / r(-0) < 0), "Math", {
                atanh: function(t) {
                    return 0 == (t = +t) ? t : Math.log((1 + t) / (1 - t)) / 2;
                }
            });
        },
        function(t389, e, n) {
            var o = n(0), r = n(94);
            o(o.S, "Math", {
                cbrt: function(t) {
                    return r(t = +t) * Math.pow(Math.abs(t), 1 / 3);
                }
            });
        },
        function(t390, e, n) {
            var o = n(0);
            o(o.S, "Math", {
                clz32: function(t) {
                    return (t >>>= 0) ? 31 - Math.floor(Math.log(t + .5) * Math.LOG2E) : 32;
                }
            });
        },
        function(t391, e, n) {
            var o = n(0), r = Math.exp;
            o(o.S, "Math", {
                cosh: function(t) {
                    return (r(t = +t) + r(-t)) / 2;
                }
            });
        },
        function(t, e, n) {
            var o = n(0), r = n(95);
            o(o.S + o.F * (r != Math.expm1), "Math", {
                expm1: r
            });
        },
        function(t, e, n) {
            var o = n(0);
            o(o.S, "Math", {
                fround: n(236)
            });
        },
        function(t392, e256, n191) {
            var o = n191(94), r96 = Math.pow, i = r96(2, -52), a = r96(2, -23), s = r96(2, 127) * (2 - a), l = r96(2, -126);
            t392.exports = Math.fround || function(t) {
                var e, n, r = Math.abs(t), c = o(t);
                return r < l ? c * (r / l / a + 1 / i - 1 / i) * l * a : (n = (e = (1 + a / i) * r) - (e - r)) > s || n != n ? c * (1 / 0) : c * n;
            };
        },
        function(t, e, n192) {
            var o172 = n192(0), r = Math.abs;
            o172(o172.S, "Math", {
                hypot: function(t, e) {
                    for(var n, o, i = 0, a = 0, s = arguments.length, l = 0; a < s;)l < (n = r(arguments[a++])) ? (i = i * (o = l / n) * o + 1, l = n) : i += n > 0 ? (o = n / l) * o : n;
                    return l === 1 / 0 ? 1 / 0 : l * Math.sqrt(i);
                }
            });
        },
        function(t393, e257, n193) {
            var o173 = n193(0), r97 = Math.imul;
            o173(o173.S + o173.F * n193(11)(function() {
                return -5 != r97(4294967295, 5) || 2 != r97.length;
            }), "Math", {
                imul: function(t, e) {
                    var n = +t, o = +e, r = 65535 & n, i = 65535 & o;
                    return 0 | r * i + ((65535 & n >>> 16) * i + r * (65535 & o >>> 16) << 16 >>> 0);
                }
            });
        },
        function(t394, e, n) {
            var o = n(0);
            o(o.S, "Math", {
                log10: function(t) {
                    return Math.log(t) * Math.LOG10E;
                }
            });
        },
        function(t, e, n) {
            var o = n(0);
            o(o.S, "Math", {
                log1p: n(129)
            });
        },
        function(t395, e, n) {
            var o = n(0);
            o(o.S, "Math", {
                log2: function(t) {
                    return Math.log(t) / Math.LN2;
                }
            });
        },
        function(t, e, n) {
            var o = n(0);
            o(o.S, "Math", {
                sign: n(94)
            });
        },
        function(t396, e, n) {
            var o = n(0), r = n(95), i = Math.exp;
            o(o.S + o.F * n(11)(function() {
                return -0.00000000000000002 != !Math.sinh(-0.00000000000000002);
            }), "Math", {
                sinh: function(t) {
                    return Math.abs(t = +t) < 1 ? (r(t) - r(-t)) / 2 : (i(t - 1) - i(-t - 1)) * (Math.E / 2);
                }
            });
        },
        function(t397, e258, n194) {
            var o = n194(0), r = n194(95), i = Math.exp;
            o(o.S, "Math", {
                tanh: function(t) {
                    var e = r(t = +t), n = r(-t);
                    return e == 1 / 0 ? 1 : n == 1 / 0 ? -1 : (e - n) / (i(t) + i(-t));
                }
            });
        },
        function(t398, e, n) {
            var o = n(0);
            o(o.S, "Math", {
                trunc: function(t) {
                    return (t > 0 ? Math.floor : Math.ceil)(t);
                }
            });
        },
        function(t, e259, n195) {
            var o174 = n195(0), r = n195(47), i = String.fromCharCode, a40 = String.fromCodePoint;
            o174(o174.S + o174.F * (!!a40 && 1 != a40.length), "String", {
                fromCodePoint: function(t) {
                    for(var e, n = [], o = arguments.length, a = 0; o > a;){
                        if (e = +arguments[a++], r(e, 1114111) !== e) throw RangeError(e + " is not a valid code point");
                        n.push(e < 65536 ? i(e) : i(55296 + ((e -= 65536) >> 10), e % 1024 + 56320));
                    }
                    return n.join("");
                }
            });
        },
        function(t399, e260, n196) {
            var o175 = n196(0), r = n196(28), i = n196(16);
            o175(o175.S, "String", {
                raw: function(t) {
                    for(var e = r(t.raw), n = i(e.length), o = arguments.length, a = [], s = 0; n > s;)a.push(String(e[s++])), s < o && a.push(String(arguments[s]));
                    return a.join("");
                }
            });
        },
        function(t400, e, n) {
            "use strict";
            n(54)("trim", function(t) {
                return function() {
                    return t(this, 3);
                };
            });
        },
        function(t401, e261, n197) {
            "use strict";
            var o = n197(96)(!0);
            n197(97)(String, "String", function(t) {
                this._t = String(t), this._i = 0;
            }, function() {
                var t, e = this._t, n = this._i;
                return n >= e.length ? {
                    value: void 0,
                    done: !0
                } : (t = o(e, n), this._i += t.length, {
                    value: t,
                    done: !1
                });
            });
        },
        function(t402, e, n) {
            "use strict";
            var o = n(0), r = n(96)(!1);
            o(o.P, "String", {
                codePointAt: function(t) {
                    return r(this, t);
                }
            });
        },
        function(t403, e262, n198) {
            "use strict";
            var o176 = n198(0), r = n198(16), i = n198(98), a = "".endsWith;
            o176(o176.P + o176.F * n198(100)("endsWith"), "String", {
                endsWith: function(t) {
                    var e = i(this, t, "endsWith"), n = arguments.length > 1 ? arguments[1] : void 0, o = r(e.length), s = void 0 === n ? o : Math.min(r(n), o), l = String(t);
                    return a ? a.call(e, l, s) : e.slice(s - l.length, s) === l;
                }
            });
        },
        function(t404, e, n) {
            "use strict";
            var o = n(0), r = n(98);
            o(o.P + o.F * n(100)("includes"), "String", {
                includes: function(t) {
                    return !!~r(this, t, "includes").indexOf(t, arguments.length > 1 ? arguments[1] : void 0);
                }
            });
        },
        function(t, e, n) {
            var o = n(0);
            o(o.P, "String", {
                repeat: n(93)
            });
        },
        function(t405, e263, n199) {
            "use strict";
            var o177 = n199(0), r = n199(16), i = n199(98), a = "".startsWith;
            o177(o177.P + o177.F * n199(100)("startsWith"), "String", {
                startsWith: function(t) {
                    var e = i(this, t, "startsWith"), n = r(Math.min(arguments.length > 1 ? arguments[1] : void 0, e.length)), o = String(t);
                    return a ? a.call(e, o, n) : e.slice(n, n + o.length) === o;
                }
            });
        },
        function(t406, e264, n) {
            "use strict";
            n(24)("anchor", function(t) {
                return function(e) {
                    return t(this, "a", "name", e);
                };
            });
        },
        function(t407, e, n) {
            "use strict";
            n(24)("big", function(t) {
                return function() {
                    return t(this, "big", "", "");
                };
            });
        },
        function(t408, e, n) {
            "use strict";
            n(24)("blink", function(t) {
                return function() {
                    return t(this, "blink", "", "");
                };
            });
        },
        function(t409, e, n) {
            "use strict";
            n(24)("bold", function(t) {
                return function() {
                    return t(this, "b", "", "");
                };
            });
        },
        function(t410, e, n) {
            "use strict";
            n(24)("fixed", function(t) {
                return function() {
                    return t(this, "tt", "", "");
                };
            });
        },
        function(t411, e265, n) {
            "use strict";
            n(24)("fontcolor", function(t) {
                return function(e) {
                    return t(this, "font", "color", e);
                };
            });
        },
        function(t412, e266, n) {
            "use strict";
            n(24)("fontsize", function(t) {
                return function(e) {
                    return t(this, "font", "size", e);
                };
            });
        },
        function(t413, e, n) {
            "use strict";
            n(24)("italics", function(t) {
                return function() {
                    return t(this, "i", "", "");
                };
            });
        },
        function(t414, e267, n) {
            "use strict";
            n(24)("link", function(t) {
                return function(e) {
                    return t(this, "a", "href", e);
                };
            });
        },
        function(t415, e, n) {
            "use strict";
            n(24)("small", function(t) {
                return function() {
                    return t(this, "small", "", "");
                };
            });
        },
        function(t416, e, n) {
            "use strict";
            n(24)("strike", function(t) {
                return function() {
                    return t(this, "strike", "", "");
                };
            });
        },
        function(t417, e, n) {
            "use strict";
            n(24)("sub", function(t) {
                return function() {
                    return t(this, "sub", "", "");
                };
            });
        },
        function(t418, e, n) {
            "use strict";
            n(24)("sup", function(t) {
                return function() {
                    return t(this, "sup", "", "");
                };
            });
        },
        function(t, e, n) {
            var o = n(0);
            o(o.S, "Date", {
                now: function() {
                    return (new Date).getTime();
                }
            });
        },
        function(t, e268, n200) {
            "use strict";
            var o = n200(0), r = n200(22), i = n200(40);
            o(o.P + o.F * n200(11)(function() {
                return null !== new Date(NaN).toJSON() || 1 !== Date.prototype.toJSON.call({
                    toISOString: function() {
                        return 1;
                    }
                });
            }), "Date", {
                toJSON: function(t) {
                    var e = r(this), n = i(e);
                    return "number" != typeof n || isFinite(n) ? e.toISOString() : null;
                }
            });
        },
        function(t, e, n) {
            var o = n(0), r = n(271);
            o(o.P + o.F * (Date.prototype.toISOString !== r), "Date", {
                toISOString: r
            });
        },
        function(t419, e269, n201) {
            "use strict";
            var o178 = n201(11), r = Date.prototype.getTime, i = Date.prototype.toISOString, a = function(t) {
                return t > 9 ? t : "0" + t;
            };
            t419.exports = o178(function() {
                return "0385-07-25T07:06:39.999Z" != i.call(new Date(-50000000000001));
            }) || !o178(function() {
                i.call(new Date(NaN));
            }) ? function() {
                if (!isFinite(r.call(this))) throw RangeError("Invalid time value");
                var t = this, e = t.getUTCFullYear(), n = t.getUTCMilliseconds(), o = e < 0 ? "-" : e > 9999 ? "+" : "";
                return o + ("00000" + Math.abs(e)).slice(o ? -6 : -4) + "-" + a(t.getUTCMonth() + 1) + "-" + a(t.getUTCDate()) + "T" + a(t.getUTCHours()) + ":" + a(t.getUTCMinutes()) + ":" + a(t.getUTCSeconds()) + "." + (n > 99 ? n : "0" + a(n)) + "Z";
            } : i;
        },
        function(t420, e, n) {
            var o = Date.prototype, r = o.toString, i = o.getTime;
            new Date(NaN) + "" != "Invalid Date" && n(23)(o, "toString", function() {
                var t = i.call(this);
                return t == t ? r.call(this) : "Invalid Date";
            });
        },
        function(t, e, n) {
            var o = n(15)("toPrimitive"), r = Date.prototype;
            o in r || n(27)(r, o, n(274));
        },
        function(t421, e, n) {
            "use strict";
            var o = n(12), r = n(40);
            t421.exports = function(t) {
                if ("string" !== t && "number" !== t && "default" !== t) throw TypeError("Incorrect hint");
                return r(o(this), "number" != t);
            };
        },
        function(t, e, n) {
            var o = n(0);
            o(o.S, "Array", {
                isArray: n(72)
            });
        },
        function(t422, e270, n202) {
            "use strict";
            var o = n202(31), r98 = n202(0), i = n202(22), a = n202(131), s = n202(101), l = n202(16), c = n202(102), u = n202(103);
            r98(r98.S + r98.F * !n202(73)(function(t) {
                Array.from(t);
            }), "Array", {
                from: function(t) {
                    var e, n, r, f, d = i(t), p = "function" == typeof this ? this : Array, h = arguments.length, v = h > 1 ? arguments[1] : void 0, g = void 0 !== v, y = 0, b = u(d);
                    if (g && (v = o(v, h > 2 ? arguments[2] : void 0, 2)), null == b || p == Array && s(b)) for(n = new p(e = l(d.length)); e > y; y++)c(n, y, g ? v(d[y], y) : d[y]);
                    else for(f = b.call(d), n = new p; !(r = f.next()).done; y++)c(n, y, g ? a(f, v, [
                        r.value,
                        y
                    ], !0) : r.value);
                    return n.length = y, n;
                }
            });
        },
        function(t423, e271, n203) {
            "use strict";
            var o = n203(0), r = n203(102);
            o(o.S + o.F * n203(11)(function() {
                function t() {}
                return !(Array.of.call(t) instanceof t);
            }), "Array", {
                of: function() {
                    for(var t = 0, e = arguments.length, n = new ("function" == typeof this ? this : Array)(e); e > t;)r(n, t, arguments[t++]);
                    return n.length = e, n;
                }
            });
        },
        function(t424, e, n) {
            "use strict";
            var o = n(0), r = n(28), i = [].join;
            o(o.P + o.F * (n(63) != Object || !n(29)(i)), "Array", {
                join: function(t) {
                    return i.call(r(this), void 0 === t ? "," : t);
                }
            });
        },
        function(t425, e272, n204) {
            "use strict";
            var o179 = n204(0), r99 = n204(89), i = n204(37), a = n204(47), s = n204(16), l = [].slice;
            o179(o179.P + o179.F * n204(11)(function() {
                r99 && l.call(r99);
            }), "Array", {
                slice: function(t, e) {
                    var n = s(this.length), o = i(this);
                    if (e = void 0 === e ? n : e, "Array" == o) return l.call(this, t, e);
                    for(var r = a(t, n), c = a(e, n), u = s(c - r), f = new Array(u), d = 0; d < u; d++)f[d] = "String" == o ? this.charAt(r + d) : this[r + d];
                    return f;
                }
            });
        },
        function(t426, e, n) {
            "use strict";
            var o = n(0), r = n(32), i = n(22), a = n(11), s = [].sort, l = [
                1,
                2,
                3
            ];
            o(o.P + o.F * (a(function() {
                l.sort(void 0);
            }) || !a(function() {
                l.sort(null);
            }) || !n(29)(s)), "Array", {
                sort: function(t) {
                    return void 0 === t ? s.call(i(this)) : s.call(i(this), r(t));
                }
            });
        },
        function(t427, e, n) {
            "use strict";
            var o = n(0), r = n(36)(0), i = n(29)([].forEach, !0);
            o(o.P + o.F * !i, "Array", {
                forEach: function(t) {
                    return r(this, t, arguments[1]);
                }
            });
        },
        function(t428, e273, n) {
            var o = n(13), r = n(72), i = n(15)("species");
            t428.exports = function(t) {
                var e;
                return r(t) && ("function" != typeof (e = t.constructor) || e !== Array && !r(e.prototype) || (e = void 0), o(e) && null === (e = e[i]) && (e = void 0)), void 0 === e ? Array : e;
            };
        },
        function(t429, e, n) {
            "use strict";
            var o = n(0), r = n(36)(1);
            o(o.P + o.F * !n(29)([].map, !0), "Array", {
                map: function(t) {
                    return r(this, t, arguments[1]);
                }
            });
        },
        function(t430, e, n) {
            "use strict";
            var o = n(0), r = n(36)(2);
            o(o.P + o.F * !n(29)([].filter, !0), "Array", {
                filter: function(t) {
                    return r(this, t, arguments[1]);
                }
            });
        },
        function(t431, e, n) {
            "use strict";
            var o = n(0), r = n(36)(3);
            o(o.P + o.F * !n(29)([].some, !0), "Array", {
                some: function(t) {
                    return r(this, t, arguments[1]);
                }
            });
        },
        function(t432, e, n) {
            "use strict";
            var o = n(0), r = n(36)(4);
            o(o.P + o.F * !n(29)([].every, !0), "Array", {
                every: function(t) {
                    return r(this, t, arguments[1]);
                }
            });
        },
        function(t433, e, n) {
            "use strict";
            var o = n(0), r = n(133);
            o(o.P + o.F * !n(29)([].reduce, !0), "Array", {
                reduce: function(t) {
                    return r(this, t, arguments.length, arguments[1], !1);
                }
            });
        },
        function(t434, e, n) {
            "use strict";
            var o = n(0), r = n(133);
            o(o.P + o.F * !n(29)([].reduceRight, !0), "Array", {
                reduceRight: function(t) {
                    return r(this, t, arguments.length, arguments[1], !0);
                }
            });
        },
        function(t435, e, n) {
            "use strict";
            var o = n(0), r = n(70)(!1), i = [].indexOf, a = !!i && 1 / [
                1
            ].indexOf(1, -0) < 0;
            o(o.P + o.F * (a || !n(29)(i)), "Array", {
                indexOf: function(t) {
                    return a ? i.apply(this, arguments) || 0 : r(this, t, arguments[1]);
                }
            });
        },
        function(t436, e274, n205) {
            "use strict";
            var o180 = n205(0), r = n205(28), i = n205(33), a = n205(16), s = [].lastIndexOf, l = !!s && 1 / [
                1
            ].lastIndexOf(1, -0) < 0;
            o180(o180.P + o180.F * (l || !n205(29)(s)), "Array", {
                lastIndexOf: function(t) {
                    if (l) return s.apply(this, arguments) || 0;
                    var e = r(this), n = a(e.length), o = n - 1;
                    for(arguments.length > 1 && (o = Math.min(o, i(arguments[1]))), o < 0 && (o = n + o); o >= 0; o--)if (o in e && e[o] === t) return o || 0;
                    return -1;
                }
            });
        },
        function(t, e, n) {
            var o = n(0);
            o(o.P, "Array", {
                copyWithin: n(134)
            }), n(51)("copyWithin");
        },
        function(t, e, n) {
            var o = n(0);
            o(o.P, "Array", {
                fill: n(104)
            }), n(51)("fill");
        },
        function(t437, e, n) {
            "use strict";
            var o = n(0), r = n(36)(5), i = !0;
            "find" in [] && Array(1).find(function() {
                i = !1;
            }), o(o.P + o.F * i, "Array", {
                find: function(t) {
                    return r(this, t, arguments.length > 1 ? arguments[1] : void 0);
                }
            }), n(51)("find");
        },
        function(t438, e, n) {
            "use strict";
            var o = n(0), r = n(36)(6), i = "findIndex", a = !0;
            i in [] && Array(1)[i](function() {
                a = !1;
            }), o(o.P + o.F * a, "Array", {
                findIndex: function(t) {
                    return r(this, t, arguments.length > 1 ? arguments[1] : void 0);
                }
            }), n(51)(i);
        },
        function(t, e, n) {
            n(56)("Array");
        },
        function(t439, e275, n206) {
            var o181 = n206(10), r = n206(92), i98 = n206(19).f, a = n206(49).f, s = n206(99), l = n206(74), c = o181.RegExp, u = c, f = c.prototype, d = /a/g, p = /a/g, h = new c(d) !== d;
            if (n206(18) && (!h || n206(11)(function() {
                return p[n206(15)("match")] = !1, c(d) != d || c(p) == p || "/a/i" != c(d, "i");
            }))) {
                c = function(t, e) {
                    var n = this instanceof c, o = s(t), i = void 0 === e;
                    return !n && o && t.constructor === c && i ? t : r(h ? new u(o && !i ? t.source : t, e) : u((o = t instanceof c) ? t.source : t, o && i ? l.call(t) : e), n ? this : f, c);
                };
                for(var v = function(t) {
                    (t in c) || i98(c, t, {
                        configurable: !0,
                        get: function() {
                            return u[t];
                        },
                        set: function(e) {
                            u[t] = e;
                        }
                    });
                }, g = a(u), y = 0; g.length > y;)v(g[y++]);
                f.constructor = c, c.prototype = f, n206(23)(o181, "RegExp", c);
            }
            n206(56)("RegExp");
        },
        function(t440, e, n) {
            "use strict";
            n(137);
            var o = n(12), r = n(74), i = n(18), a = /./.toString, s = function(t) {
                n(23)(RegExp.prototype, "toString", t, !0);
            };
            n(11)(function() {
                return "/a/b" != a.call({
                    source: "a",
                    flags: "b"
                });
            }) ? s(function() {
                var t = o(this);
                return "/".concat(t.source, "/", "flags" in t ? t.flags : !i && t instanceof RegExp ? r.call(t) : void 0);
            }) : "toString" != a.name && s(function() {
                return a.call(this);
            });
        },
        function(t441, e276, n207) {
            "use strict";
            var o182 = n207(12), r100 = n207(16), i = n207(107), a = n207(75);
            n207(76)("match", 1, function(t442, e277, n208, s) {
                return [
                    function(n) {
                        var o = t442(this), r = null == n ? void 0 : n[e277];
                        return void 0 !== r ? r.call(n, o) : new RegExp(n)[e277](String(o));
                    },
                    function(t) {
                        var e = s(n208, t, this);
                        if (e.done) return e.value;
                        var l = o182(t), c = String(this);
                        if (!l.global) return a(l, c);
                        var u = l.unicode;
                        l.lastIndex = 0;
                        for(var f, d = [], p = 0; null !== (f = a(l, c));){
                            var h = String(f[0]);
                            d[p] = h, "" === h && (l.lastIndex = i(c, r100(l.lastIndex), u)), p++;
                        }
                        return 0 === p ? null : d;
                    }
                ];
            });
        },
        function(t443, e278, n209) {
            "use strict";
            var o183 = n209(12), r101 = n209(22), i99 = n209(16), a41 = n209(33), s33 = n209(107), l26 = n209(75), c23 = Math.max, u18 = Math.min, f17 = Math.floor, d13 = /\$([$&`']|\d\d?|<[^>]*>)/g, p14 = /\$([$&`']|\d\d?)/g;
            n209(76)("replace", 2, function(t444, e279, n210, h) {
                return [
                    function(o, r) {
                        var i = t444(this), a = null == o ? void 0 : o[e279];
                        return void 0 !== a ? a.call(o, i, r) : n210.call(String(i), o, r);
                    },
                    function(t, e) {
                        var r = h(n210, t, this, e);
                        if (r.done) return r.value;
                        var f = o183(t), d = String(this), p = "function" == typeof e;
                        p || (e = String(e));
                        var g = f.global;
                        if (g) {
                            var y = f.unicode;
                            f.lastIndex = 0;
                        }
                        for(var b = [];;){
                            var m = l26(f, d);
                            if (null === m) break;
                            if (b.push(m), !g) break;
                            "" === String(m[0]) && (f.lastIndex = s33(d, i99(f.lastIndex), y));
                        }
                        for(var k, x = "", w = 0, S = 0; S < b.length; S++){
                            m = b[S];
                            for(var T = String(m[0]), E = c23(u18(a41(m.index), d.length), 0), B = [], C = 1; C < m.length; C++)B.push(void 0 === (k = m[C]) ? k : String(k));
                            var _ = m.groups;
                            if (p) {
                                var I = [
                                    T
                                ].concat(B, E, d);
                                void 0 !== _ && I.push(_);
                                var O = String(e.apply(void 0, I));
                            } else O = v(T, d, E, B, _, e);
                            E >= w && (x += d.slice(w, E) + O, w = E + T.length);
                        }
                        return x + d.slice(w);
                    }
                ];
                function v(t, e, o, i, a, s34) {
                    var l = o + t.length, c = i.length, u19 = p14;
                    return void 0 !== a && (a = r101(a), u19 = d13), n210.call(s34, u19, function(n, r) {
                        var s;
                        switch(r.charAt(0)){
                            case "$":
                                return "$";
                            case "&":
                                return t;
                            case "`":
                                return e.slice(0, o);
                            case "'":
                                return e.slice(l);
                            case "<":
                                s = a[r.slice(1, -1)];
                                break;
                            default:
                                var u = +r;
                                if (0 === u) return n;
                                if (u > c) {
                                    var d = f17(u / 10);
                                    return 0 === d ? n : d <= c ? void 0 === i[d - 1] ? r.charAt(1) : i[d - 1] + r.charAt(1) : n;
                                }
                                s = i[u - 1];
                        }
                        return void 0 === s ? "" : s;
                    });
                }
            });
        },
        function(t445, e280, n211) {
            "use strict";
            var o184 = n211(12), r102 = n211(122), i = n211(75);
            n211(76)("search", 1, function(t446, e281, n212, a) {
                return [
                    function(n) {
                        var o = t446(this), r = null == n ? void 0 : n[e281];
                        return void 0 !== r ? r.call(n, o) : new RegExp(n)[e281](String(o));
                    },
                    function(t) {
                        var e = a(n212, t, this);
                        if (e.done) return e.value;
                        var s = o184(t), l = String(this), c = s.lastIndex;
                        r102(c, 0) || (s.lastIndex = 0);
                        var u = i(s, l);
                        return r102(s.lastIndex, c) || (s.lastIndex = c), null === u ? -1 : u.index;
                    }
                ];
            });
        },
        function(t447, e282, n213) {
            "use strict";
            var o185 = n213(99), r103 = n213(12), i100 = n213(66), a42 = n213(107), s35 = n213(16), l27 = n213(75), c24 = n213(106), u20 = n213(11), f18 = Math.min, d14 = [].push, p15 = "length", h8 = !u20(function() {
                RegExp(4294967295, "y");
            });
            n213(76)("split", 2, function(t448, e283, n214, u21) {
                var v2;
                return v2 = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1)[p15] || 2 != "ab".split(/(?:ab)*/)[p15] || 4 != ".".split(/(.?)(.?)/)[p15] || ".".split(/()()/)[p15] > 1 || "".split(/.?/)[p15] ? function(t, e) {
                    var r = String(this);
                    if (void 0 === t && 0 === e) return [];
                    if (!o185(t)) return n214.call(r, t, e);
                    for(var i, a, s, l = [], u = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""), f = 0, h = void 0 === e ? 4294967295 : e >>> 0, v = new RegExp(t.source, u + "g"); (i = c24.call(v, r)) && !((a = v.lastIndex) > f && (l.push(r.slice(f, i.index)), i[p15] > 1 && i.index < r[p15] && d14.apply(l, i.slice(1)), s = i[0][p15], f = a, l[p15] >= h));)v.lastIndex === i.index && v.lastIndex++;
                    return f === r[p15] ? !s && v.test("") || l.push("") : l.push(r.slice(f)), l[p15] > h ? l.slice(0, h) : l;
                } : "0".split(void 0, 0)[p15] ? function(t, e) {
                    return void 0 === t && 0 === e ? [] : n214.call(this, t, e);
                } : n214, [
                    function(n, o) {
                        var r = t448(this), i = null == n ? void 0 : n[e283];
                        return void 0 !== i ? i.call(n, r, o) : v2.call(String(r), n, o);
                    },
                    function(t, e) {
                        var o = u21(v2, t, this, e, v2 !== n214);
                        if (o.done) return o.value;
                        var c = r103(t), d = String(this), p = i100(c, RegExp), g = c.unicode, y = (c.ignoreCase ? "i" : "") + (c.multiline ? "m" : "") + (c.unicode ? "u" : "") + (h8 ? "y" : "g"), b = new p(h8 ? c : "^(?:" + c.source + ")", y), m = void 0 === e ? 4294967295 : e >>> 0;
                        if (0 === m) return [];
                        if (0 === d.length) return null === l27(b, d) ? [
                            d
                        ] : [];
                        for(var k = 0, x = 0, w = []; x < d.length;){
                            b.lastIndex = h8 ? x : 0;
                            var S, T = l27(b, h8 ? d : d.slice(x));
                            if (null === T || (S = f18(s35(b.lastIndex + (h8 ? 0 : x)), d.length)) === k) x = a42(d, x, g);
                            else {
                                if (w.push(d.slice(k, x)), w.length === m) return w;
                                for(var E = 1; E <= T.length - 1; E++)if (w.push(T[E]), w.length === m) return w;
                                x = k = S;
                            }
                        }
                        return w.push(d.slice(k)), w;
                    }
                ];
            });
        },
        function(t449, e284, n215) {
            var o186 = n215(10), r104 = n215(108).set, i = o186.MutationObserver || o186.WebKitMutationObserver, a = o186.process, s = o186.Promise, l = "process" == n215(37)(a);
            t449.exports = function() {
                var t, e, n, c = function() {
                    var o, r;
                    for(l && (o = a.domain) && o.exit(); t;){
                        r = t.fn, t = t.next;
                        try {
                            r();
                        } catch (o) {
                            throw t ? n() : e = void 0, o;
                        }
                    }
                    e = void 0, o && o.enter();
                };
                if (l) n = function() {
                    a.nextTick(c);
                };
                else if (!i || o186.navigator && o186.navigator.standalone) {
                    if (s && s.resolve) {
                        var u = s.resolve(void 0);
                        n = function() {
                            u.then(c);
                        };
                    } else n = function() {
                        r104.call(o186, c);
                    };
                } else {
                    var f = !0, d = document.createTextNode("");
                    new i(c).observe(d, {
                        characterData: !0
                    }), n = function() {
                        d.data = f = !f;
                    };
                }
                return function(o) {
                    var r = {
                        fn: o,
                        next: void 0
                    };
                    e && (e.next = r), t || (t = r, n()), e = r;
                };
            };
        },
        function(t450, e) {
            t450.exports = function(t) {
                try {
                    return {
                        e: !1,
                        v: t()
                    };
                } catch (t451) {
                    return {
                        e: !0,
                        v: t451
                    };
                }
            };
        },
        function(t452, e285, n) {
            "use strict";
            var o = n(141), r = n(52);
            t452.exports = n(79)("Map", function(t) {
                return function() {
                    return t(this, arguments.length > 0 ? arguments[0] : void 0);
                };
            }, {
                get: function(t) {
                    var e = o.getEntry(r(this, "Map"), t);
                    return e && e.v;
                },
                set: function(t, e) {
                    return o.def(r(this, "Map"), 0 === t ? 0 : t, e);
                }
            }, o, !0);
        },
        function(t453, e, n) {
            "use strict";
            var o = n(141), r = n(52);
            t453.exports = n(79)("Set", function(t) {
                return function() {
                    return t(this, arguments.length > 0 ? arguments[0] : void 0);
                };
            }, {
                add: function(t) {
                    return o.def(r(this, "Set"), t = 0 === t ? 0 : t, t);
                }
            }, o);
        },
        function(t454, e286, n216) {
            "use strict";
            var o, r105 = n216(10), i101 = n216(36)(0), a = n216(23), s = n216(41), l = n216(121), c = n216(142), u = n216(13), f = n216(52), d = n216(52), p = !r105.ActiveXObject && "ActiveXObject" in r105, h = s.getWeak, v = Object.isExtensible, g = c.ufstore, y = function(t) {
                return function() {
                    return t(this, arguments.length > 0 ? arguments[0] : void 0);
                };
            }, b = {
                get: function(t) {
                    if (u(t)) {
                        var e = h(t);
                        return !0 === e ? g(f(this, "WeakMap")).get(t) : e ? e[this._i] : void 0;
                    }
                },
                set: function(t, e) {
                    return c.def(f(this, "WeakMap"), t, e);
                }
            }, m = t454.exports = n216(79)("WeakMap", y, b, c, !0, !0);
            d && p && (l((o = c.getConstructor(y, "WeakMap")).prototype, b), s.NEED = !0, i101([
                "delete",
                "has",
                "get",
                "set"
            ], function(t) {
                var e287 = m.prototype, n = e287[t];
                a(e287, t, function(e, r) {
                    if (u(e) && !v(e)) {
                        this._f || (this._f = new o);
                        var i = this._f[t](e, r);
                        return "set" == t ? this : i;
                    }
                    return n.call(this, e, r);
                });
            }));
        },
        function(t455, e, n) {
            "use strict";
            var o = n(142), r = n(52);
            n(79)("WeakSet", function(t) {
                return function() {
                    return t(this, arguments.length > 0 ? arguments[0] : void 0);
                };
            }, {
                add: function(t) {
                    return o.def(r(this, "WeakSet"), t, !0);
                }
            }, o, !1, !0);
        },
        function(t456, e288, n217) {
            "use strict";
            var o187 = n217(0), r106 = n217(80), i102 = n217(109), a = n217(12), s = n217(47), l = n217(16), c25 = n217(13), u22 = n217(10).ArrayBuffer, f = n217(66), d = i102.ArrayBuffer, p = i102.DataView, h9 = r106.ABV && u22.isView, v = d.prototype.slice, g = r106.VIEW;
            o187(o187.G + o187.W + o187.F * (u22 !== d), {
                ArrayBuffer: d
            }), o187(o187.S + o187.F * !r106.CONSTR, "ArrayBuffer", {
                isView: function(t) {
                    return h9 && h9(t) || c25(t) && g in t;
                }
            }), o187(o187.P + o187.U + o187.F * n217(11)(function() {
                return !new d(2).slice(1, void 0).byteLength;
            }), "ArrayBuffer", {
                slice: function(t, e) {
                    if (void 0 !== v && void 0 === e) return v.call(a(this), t);
                    for(var n = a(this).byteLength, o = s(t, n), r = s(void 0 === e ? n : e, n), i = new (f(this, d))(l(r - o)), c = new p(this), u = new p(i), h = 0; o < r;)u.setUint8(h++, c.getUint8(o++));
                    return i;
                }
            }), n217(56)("ArrayBuffer");
        },
        function(t, e, n) {
            var o = n(0);
            o(o.G + o.W + o.F * !n(80).ABV, {
                DataView: n(109).DataView
            });
        },
        function(t457, e289, n218) {
            n218(39)("Int8", 1, function(t) {
                return function(e, n, o) {
                    return t(this, e, n, o);
                };
            });
        },
        function(t458, e290, n219) {
            n219(39)("Uint8", 1, function(t) {
                return function(e, n, o) {
                    return t(this, e, n, o);
                };
            });
        },
        function(t459, e291, n220) {
            n220(39)("Uint8", 1, function(t) {
                return function(e, n, o) {
                    return t(this, e, n, o);
                };
            }, !0);
        },
        function(t460, e292, n221) {
            n221(39)("Int16", 2, function(t) {
                return function(e, n, o) {
                    return t(this, e, n, o);
                };
            });
        },
        function(t461, e293, n222) {
            n222(39)("Uint16", 2, function(t) {
                return function(e, n, o) {
                    return t(this, e, n, o);
                };
            });
        },
        function(t462, e294, n223) {
            n223(39)("Int32", 4, function(t) {
                return function(e, n, o) {
                    return t(this, e, n, o);
                };
            });
        },
        function(t463, e295, n224) {
            n224(39)("Uint32", 4, function(t) {
                return function(e, n, o) {
                    return t(this, e, n, o);
                };
            });
        },
        function(t464, e296, n225) {
            n225(39)("Float32", 4, function(t) {
                return function(e, n, o) {
                    return t(this, e, n, o);
                };
            });
        },
        function(t465, e297, n226) {
            n226(39)("Float64", 8, function(t) {
                return function(e, n, o) {
                    return t(this, e, n, o);
                };
            });
        },
        function(t466, e298, n227) {
            var o188 = n227(0), r = n227(32), i = n227(12), a = (n227(10).Reflect || {}).apply, s = Function.apply;
            o188(o188.S + o188.F * !n227(11)(function() {
                a(function() {});
            }), "Reflect", {
                apply: function(t, e, n) {
                    var o = r(t), l = i(n);
                    return a ? a(o, e, l) : s.call(o, e, l);
                }
            });
        },
        function(t467, e299, n228) {
            var o189 = n228(0), r = n228(48), i = n228(32), a = n228(12), s = n228(13), l28 = n228(11), c = n228(123), u = (n228(10).Reflect || {}).construct, f = l28(function() {
                function t() {}
                return !(u(function() {}, [], t) instanceof t);
            }), d = !l28(function() {
                u(function() {});
            });
            o189(o189.S + o189.F * (f || d), "Reflect", {
                construct: function(t, e) {
                    i(t), a(e);
                    var n = arguments.length < 3 ? t : i(arguments[2]);
                    if (d && !f) return u(t, e, n);
                    if (t == n) {
                        switch(e.length){
                            case 0:
                                return new t;
                            case 1:
                                return new t(e[0]);
                            case 2:
                                return new t(e[0], e[1]);
                            case 3:
                                return new t(e[0], e[1], e[2]);
                            case 4:
                                return new t(e[0], e[1], e[2], e[3]);
                        }
                        var o = [
                            null
                        ];
                        return o.push.apply(o, e), new (c.apply(t, o));
                    }
                    var l = n.prototype, p = r(s(l) ? l : Object.prototype), h = Function.apply.call(t, p, e);
                    return s(h) ? h : p;
                }
            });
        },
        function(t468, e300, n229) {
            var o = n229(19), r = n229(0), i = n229(12), a = n229(40);
            r(r.S + r.F * n229(11)(function() {
                Reflect.defineProperty(o.f({}, 1, {
                    value: 1
                }), 1, {
                    value: 2
                });
            }), "Reflect", {
                defineProperty: function(t, e, n) {
                    i(t), e = a(e, !0), i(n);
                    try {
                        return o.f(t, e, n), !0;
                    } catch (t469) {
                        return !1;
                    }
                }
            });
        },
        function(t470, e301, n230) {
            var o = n230(0), r = n230(34).f, i = n230(12);
            o(o.S, "Reflect", {
                deleteProperty: function(t, e) {
                    var n = r(i(t), e);
                    return !(n && !n.configurable) && delete t[e];
                }
            });
        },
        function(t471, e302, n231) {
            "use strict";
            var o = n231(0), r = n231(12), i = function(t) {
                this._t = r(t), this._i = 0;
                var e, n = this._k = [];
                for(e in t)n.push(e);
            };
            n231(130)(i, "Object", function() {
                var t, e = this._k;
                do {
                    if (this._i >= e.length) return {
                        value: void 0,
                        done: !0
                    };
                }while (!((t = e[this._i++]) in this._t));
                return {
                    value: t,
                    done: !1
                };
            }), o(o.S, "Reflect", {
                enumerate: function(t) {
                    return new i(t);
                }
            });
        },
        function(t472, e303, n232) {
            var o = n232(34), r = n232(50), i = n232(26), a43 = n232(0), s = n232(13), l = n232(12);
            a43(a43.S, "Reflect", {
                get: function t(e, n) {
                    var a, c, u = arguments.length < 3 ? e : arguments[2];
                    return l(e) === u ? e[n] : (a = o.f(e, n)) ? i(a, "value") ? a.value : void 0 !== a.get ? a.get.call(u) : void 0 : s(c = r(e)) ? t(c, n, u) : void 0;
                }
            });
        },
        function(t473, e304, n) {
            var o = n(34), r = n(0), i = n(12);
            r(r.S, "Reflect", {
                getOwnPropertyDescriptor: function(t, e) {
                    return o.f(i(t), e);
                }
            });
        },
        function(t474, e, n) {
            var o = n(0), r = n(50), i = n(12);
            o(o.S, "Reflect", {
                getPrototypeOf: function(t) {
                    return r(i(t));
                }
            });
        },
        function(t475, e305, n) {
            var o = n(0);
            o(o.S, "Reflect", {
                has: function(t, e) {
                    return e in t;
                }
            });
        },
        function(t476, e, n) {
            var o = n(0), r = n(12), i = Object.isExtensible;
            o(o.S, "Reflect", {
                isExtensible: function(t) {
                    return r(t), !i || i(t);
                }
            });
        },
        function(t, e, n) {
            var o = n(0);
            o(o.S, "Reflect", {
                ownKeys: n(144)
            });
        },
        function(t477, e, n) {
            var o = n(0), r = n(12), i = Object.preventExtensions;
            o(o.S, "Reflect", {
                preventExtensions: function(t) {
                    r(t);
                    try {
                        return i && i(t), !0;
                    } catch (t478) {
                        return !1;
                    }
                }
            });
        },
        function(t479, e306, n233) {
            var o = n233(19), r = n233(34), i = n233(50), a = n233(26), s36 = n233(0), l = n233(43), c = n233(12), u = n233(13);
            s36(s36.S, "Reflect", {
                set: function t(e, n, s) {
                    var f, d, p = arguments.length < 4 ? e : arguments[3], h = r.f(c(e), n);
                    if (!h) {
                        if (u(d = i(e))) return t(d, n, s, p);
                        h = l(0);
                    }
                    if (a(h, "value")) {
                        if (!1 === h.writable || !u(p)) return !1;
                        if (f = r.f(p, n)) {
                            if (f.get || f.set || !1 === f.writable) return !1;
                            f.value = s, o.f(p, n, f);
                        } else o.f(p, n, l(0, s));
                        return !0;
                    }
                    return void 0 !== h.set && (h.set.call(p, s), !0);
                }
            });
        },
        function(t480, e307, n) {
            var o = n(0), r = n(90);
            r && o(o.S, "Reflect", {
                setPrototypeOf: function(t, e) {
                    r.check(t, e);
                    try {
                        return r.set(t, e), !0;
                    } catch (t481) {
                        return !1;
                    }
                }
            });
        },
        function(t, e, n) {
            n(334), t.exports = n(17).Array.includes;
        },
        function(t482, e, n) {
            "use strict";
            var o = n(0), r = n(70)(!0);
            o(o.P, "Array", {
                includes: function(t) {
                    return r(this, t, arguments.length > 1 ? arguments[1] : void 0);
                }
            }), n(51)("includes");
        },
        function(t, e, n) {
            n(336), t.exports = n(17).Array.flatMap;
        },
        function(t483, e308, n234) {
            "use strict";
            var o190 = n234(0), r = n234(337), i = n234(22), a = n234(16), s = n234(32), l = n234(132);
            o190(o190.P, "Array", {
                flatMap: function(t) {
                    var e, n, o = i(this);
                    return s(t), e = a(o.length), n = l(o, 0), r(n, o, o, e, 0, 1, t, arguments[1]), n;
                }
            }), n234(51)("flatMap");
        },
        function(t484, e309, n235) {
            "use strict";
            var o = n235(72), r = n235(13), i = n235(16), a = n235(31), s = n235(15)("isConcatSpreadable");
            t484.exports = function t(e, n, l, c, u, f, d, p) {
                for(var h, v, g = u, y = 0, b = !!d && a(d, p, 3); y < c;){
                    if (y in l) {
                        if (h = b ? b(l[y], y, n) : l[y], v = !1, r(h) && (v = void 0 !== (v = h[s]) ? !!v : o(h)), v && f > 0) g = t(e, n, h, i(h.length), g, f - 1) - 1;
                        else {
                            if (g >= 9007199254740991) throw TypeError();
                            e[g] = h;
                        }
                        g++;
                    }
                    y++;
                }
                return g;
            };
        },
        function(t, e, n) {
            n(339), t.exports = n(17).String.padStart;
        },
        function(t485, e, n) {
            "use strict";
            var o = n(0), r = n(145), i = n(78), a = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i);
            o(o.P + o.F * a, "String", {
                padStart: function(t) {
                    return r(this, t, arguments.length > 1 ? arguments[1] : void 0, !0);
                }
            });
        },
        function(t, e, n) {
            n(341), t.exports = n(17).String.padEnd;
        },
        function(t486, e, n) {
            "use strict";
            var o = n(0), r = n(145), i = n(78), a = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i);
            o(o.P + o.F * a, "String", {
                padEnd: function(t) {
                    return r(this, t, arguments.length > 1 ? arguments[1] : void 0, !1);
                }
            });
        },
        function(t, e, n) {
            n(343), t.exports = n(17).String.trimLeft;
        },
        function(t487, e, n) {
            "use strict";
            n(54)("trimLeft", function(t) {
                return function() {
                    return t(this, 1);
                };
            }, "trimStart");
        },
        function(t, e, n) {
            n(345), t.exports = n(17).String.trimRight;
        },
        function(t488, e, n) {
            "use strict";
            n(54)("trimRight", function(t) {
                return function() {
                    return t(this, 2);
                };
            }, "trimEnd");
        },
        function(t, e, n) {
            n(347), t.exports = n(86).f("asyncIterator");
        },
        function(t, e, n) {
            n(117)("asyncIterator");
        },
        function(t, e, n) {
            n(349), t.exports = n(17).Object.getOwnPropertyDescriptors;
        },
        function(t489, e310, n236) {
            var o191 = n236(0), r = n236(144), i = n236(28), a = n236(34), s = n236(102);
            o191(o191.S, "Object", {
                getOwnPropertyDescriptors: function(t) {
                    for(var e, n, o = i(t), l = a.f, c = r(o), u = {}, f = 0; c.length > f;)void 0 !== (n = l(o, e = c[f++])) && s(u, e, n);
                    return u;
                }
            });
        },
        function(t, e, n) {
            n(351), t.exports = n(17).Object.values;
        },
        function(t490, e, n) {
            var o = n(0), r = n(146)(!1);
            o(o.S, "Object", {
                values: function(t) {
                    return r(t);
                }
            });
        },
        function(t, e, n) {
            n(353), t.exports = n(17).Object.entries;
        },
        function(t491, e, n) {
            var o = n(0), r = n(146)(!0);
            o(o.S, "Object", {
                entries: function(t) {
                    return r(t);
                }
            });
        },
        function(t, e, n) {
            "use strict";
            n(138), n(355), t.exports = n(17).Promise.finally;
        },
        function(t492, e311, n237) {
            "use strict";
            var o = n237(0), r = n237(17), i = n237(10), a = n237(66), s = n237(140);
            o(o.P + o.R, "Promise", {
                finally: function(t) {
                    var e = a(this, r.Promise || i.Promise), n238 = "function" == typeof t;
                    return this.then(n238 ? function(n) {
                        return s(e, t()).then(function() {
                            return n;
                        });
                    } : t, n238 ? function(n) {
                        return s(e, t()).then(function() {
                            throw n;
                        });
                    } : t);
                }
            });
        },
        function(t, e, n) {
            n(357), n(358), n(359), t.exports = n(17);
        },
        function(t493, e312, n239) {
            var o192 = n239(10), r107 = n239(0), i = n239(78), a = [].slice, s = /MSIE .\./.test(i), l = function(t) {
                return function(e, n) {
                    var o = arguments.length > 2, r = !!o && a.call(arguments, 2);
                    return t(o ? function() {
                        ("function" == typeof e ? e : Function(e)).apply(this, r);
                    } : e, n);
                };
            };
            r107(r107.G + r107.B + r107.F * s, {
                setTimeout: l(o192.setTimeout),
                setInterval: l(o192.setInterval)
            });
        },
        function(t, e, n) {
            var o = n(0), r = n(108);
            o(o.G + o.B, {
                setImmediate: r.set,
                clearImmediate: r.clear
            });
        },
        function(t, e, n) {
            for(var o = n(105), r = n(46), i = n(23), a = n(10), s = n(27), l = n(55), c = n(15), u = c("iterator"), f = c("toStringTag"), d = l.Array, p = {
                CSSRuleList: !0,
                CSSStyleDeclaration: !1,
                CSSValueList: !1,
                ClientRectList: !1,
                DOMRectList: !1,
                DOMStringList: !1,
                DOMTokenList: !0,
                DataTransferItemList: !1,
                FileList: !1,
                HTMLAllCollection: !1,
                HTMLCollection: !1,
                HTMLFormElement: !1,
                HTMLSelectElement: !1,
                MediaList: !0,
                MimeTypeArray: !1,
                NamedNodeMap: !1,
                NodeList: !0,
                PaintRequestList: !1,
                Plugin: !1,
                PluginArray: !1,
                SVGLengthList: !1,
                SVGNumberList: !1,
                SVGPathSegList: !1,
                SVGPointList: !1,
                SVGStringList: !1,
                SVGTransformList: !1,
                SourceBufferList: !1,
                StyleSheetList: !0,
                TextTrackCueList: !1,
                TextTrackList: !1,
                TouchList: !1
            }, h = r(p), v = 0; v < h.length; v++){
                var g, y = h[v], b = p[y], m = a[y], k = m && m.prototype;
                if (k && (k[u] || s(k, u, d), k[f] || s(k, f, y), l[y] = d, b)) for(g in o)k[g] || i(k, g, o[g], !0);
            }
        },
        function(t494, e313, n240) {
            var o193, r108, i103;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r108 = [
                e313,
                n240(30),
                n240(2),
                n240(3),
                n240(364),
                n240(366),
                n240(367),
                n240(7)
            ], void 0 === (i103 = "function" == typeof (o193 = function(o194, r109, i104, a44, s37, l, c, u) {
                "use strict";
                var f = n240(8), d = n240(1);
                Object.defineProperty(o194, "__esModule", {
                    value: !0
                }), o194.default = void 0, r109 = d(r109), i104 = d(i104), a44 = d(a44), c = d(c), u = f(u);
                var p = function() {
                    function t495(e) {
                        var n = this;
                        (0, i104.default)(this, t495);
                        var o = function() {};
                        u.isObject(e) && u.isFunction(e.onReady) && (o = e.onReady);
                        var r = new c.default(e);
                        this.isReady = r.isReady.then(function() {
                            n.exportAPI(r), o();
                        });
                    }
                    return (0, a44.default)(t495, [
                        {
                            key: "exportAPI",
                            value: function(t496) {
                                var e = this;
                                [
                                    "configuration"
                                ].forEach(function(n) {
                                    e[n] = t496[n];
                                }), this.destroy = function() {
                                    for(var n in Object.values(t496.moduleInstances).forEach(function(t) {
                                        u.isFunction(t.destroy) && t.destroy(), t.listeners.removeAll();
                                    }), t496 = null, e)Object.prototype.hasOwnProperty.call(e, n) && delete e[n];
                                    Object.setPrototypeOf(e, null);
                                }, Object.setPrototypeOf(this, t496.moduleInstances.API.methods), delete this.exportAPI, Object.entries({
                                    blocks: {
                                        clear: "clear",
                                        render: "render"
                                    },
                                    caret: {
                                        focus: "focus"
                                    },
                                    events: {
                                        on: "on",
                                        off: "off",
                                        emit: "emit"
                                    },
                                    saver: {
                                        save: "save"
                                    }
                                }).forEach(function(n241) {
                                    var o195 = (0, r109.default)(n241, 2), i = o195[0], a45 = o195[1];
                                    Object.entries(a45).forEach(function(n) {
                                        var o = (0, r109.default)(n, 2), a = o[0], s = o[1];
                                        e[s] = t496.moduleInstances.API.methods[i][a];
                                    });
                                });
                            }
                        }
                    ], [
                        {
                            key: "version",
                            get: function() {
                                return "2.25.0";
                            }
                        }
                    ]), t495;
                }();
                o194.default = p, p.displayName = "EditorJS", t494.exports = e313.default;
            }) ? o193.apply(e313, r108) : o193) || (t494.exports = i103);
        },
        function(t497, e) {
            t497.exports = function(t) {
                if (Array.isArray(t)) return t;
            };
        },
        function(t498, e314) {
            t498.exports = function(t, e) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
                    var n = [], o = !0, r = !1, i = void 0;
                    try {
                        for(var a, s = t[Symbol.iterator](); !(o = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e); o = !0);
                    } catch (t) {
                        r = !0, i = t;
                    } finally{
                        try {
                            o || null == s.return || s.return();
                        } finally{
                            if (r) throw i;
                        }
                    }
                    return n;
                }
            };
        },
        function(t, e) {
            t.exports = function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            };
        },
        function(t499, e, n) {
            (e = t499.exports = function(...t) {
                return r(...t);
            }).__esModule = !0;
            const o = n(365), r = o.default;
            Object.assign(e, o);
        },
        function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function() {}, e.revert = function() {};
        },
        function(t500, e315, n242) {
            var o196, r110, i105;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r110 = [], void 0 === (i105 = "function" == typeof (o196 = function() {
                "use strict";
                Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function(t) {
                    for(var e = (this.document || this.ownerDocument).querySelectorAll(t), n = e.length; --n >= 0 && e.item(n) !== this;);
                    return n > -1;
                }), Element.prototype.closest || (Element.prototype.closest = function(t) {
                    var e = this;
                    if (!document.documentElement.contains(e)) return null;
                    do {
                        if (e.matches(t)) return e;
                        e = e.parentElement || e.parentNode;
                    }while (null !== e);
                    return null;
                }), Element.prototype.prepend || (Element.prototype.prepend = function(t501) {
                    var e = document.createDocumentFragment();
                    Array.isArray(t501) || (t501 = [
                        t501
                    ]), t501.forEach(function(t) {
                        var n = t instanceof Node;
                        e.appendChild(n ? t : document.createTextNode(t));
                    }), this.insertBefore(e, this.firstChild);
                }), Element.prototype.scrollIntoViewIfNeeded || (Element.prototype.scrollIntoViewIfNeeded = function(t) {
                    t = 0 === arguments.length || !!t;
                    var e = this.parentNode, n = window.getComputedStyle(e, null), o = parseInt(n.getPropertyValue("border-top-width")), r = parseInt(n.getPropertyValue("border-left-width")), i = this.offsetTop - e.offsetTop < e.scrollTop, a = this.offsetTop - e.offsetTop + this.clientHeight - o > e.scrollTop + e.clientHeight, s = this.offsetLeft - e.offsetLeft < e.scrollLeft, l = this.offsetLeft - e.offsetLeft + this.clientWidth - r > e.scrollLeft + e.clientWidth, c = i && !a;
                    (i || a) && t && (e.scrollTop = this.offsetTop - e.offsetTop - e.clientHeight / 2 - o + this.clientHeight / 2), (s || l) && t && (e.scrollLeft = this.offsetLeft - e.offsetLeft - e.clientWidth / 2 - r + this.clientWidth / 2), (i || a || s || l) && !t && this.scrollIntoView(c);
                });
            }) ? o196.apply(e315, r110) : o196) || (t500.exports = i105);
        },
        function(t502, e316, n243) {
            var o197, r111, i106;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r111 = [
                e316,
                n243(20),
                n243(21),
                n243(2),
                n243(3),
                n243(14),
                n243(7),
                n243(60),
                n243(151),
                n243(81)
            ], void 0 === (i106 = "function" == typeof (o197 = function(o198, r, i107, a, s38, l, c, u, f, d) {
                "use strict";
                var p = n243(8), h = n243(1);
                Object.defineProperty(o198, "__esModule", {
                    value: !0
                }), o198.default = void 0, r = h(r), i107 = h(i107), a = h(a), s38 = h(s38), l = h(l), c = p(c), u = h(u), d = h(d);
                var v = n243(375), g = [];
                v.keys().forEach(function(t) {
                    t.match(/^\.\/[^_][\w/]*\.([tj])s$/) && g.push(v(t));
                });
                var y = function() {
                    function t503(e318) {
                        var n, o199, s = this;
                        (0, a.default)(this, t503), this.moduleInstances = {}, this.eventsDispatcher = new d.default, this.isReady = new Promise(function(t, e) {
                            n = t, o199 = e;
                        }), Promise.resolve().then((0, i107.default)(r.default.mark(function t504() {
                            return r.default.wrap(function(t505) {
                                for(;;)switch(t505.prev = t505.next){
                                    case 0:
                                        return s.configuration = e318, t505.next = 3, s.validate();
                                    case 3:
                                        return t505.next = 5, s.init();
                                    case 5:
                                        return t505.next = 7, s.start();
                                    case 7:
                                        c.logLabeled("I'm ready! (\uFF89\u25D5\u30EE\u25D5)\uFF89*:\uFF65\uFF9F\u2727", "log", "", "color: #E24A75"), setTimeout((0, i107.default)(r.default.mark(function t506() {
                                            var e, o, i;
                                            return r.default.wrap(function(t) {
                                                for(;;)switch(t.prev = t.next){
                                                    case 0:
                                                        return t.next = 2, s.render();
                                                    case 2:
                                                        s.configuration.autofocus && (e = s.moduleInstances, o = e.BlockManager, (i = e.Caret).setToBlock(o.blocks[0], i.positions.START), o.highlightCurrentNode()), s.moduleInstances.UI.removeLoader(), n();
                                                    case 5:
                                                    case "end":
                                                        return t.stop();
                                                }
                                            }, t506);
                                        })), 500);
                                    case 9:
                                    case "end":
                                        return t505.stop();
                                }
                            }, t504);
                        }))).catch(function(t) {
                            c.log("Editor.js is not ready because of ".concat(t), "error"), o199(t);
                        });
                    }
                    var e317, n244;
                    return (0, s38.default)(t503, [
                        {
                            key: "validate",
                            value: (n244 = (0, i107.default)(r.default.mark(function t507() {
                                var e, n, o;
                                return r.default.wrap(function(t) {
                                    for(;;)switch(t.prev = t.next){
                                        case 0:
                                            if (e = this.config, n = e.holderId, o = e.holder, !n || !o) {
                                                t.next = 3;
                                                break;
                                            }
                                            throw Error("\xabholderId\xbb and \xabholder\xbb param can't assign at the same time.");
                                        case 3:
                                            if (!c.isString(o) || l.default.get(o)) {
                                                t.next = 5;
                                                break;
                                            }
                                            throw Error("element with ID \xab".concat(o, "\xbb is missing. Pass correct holder's ID."));
                                        case 5:
                                            if (!o || !c.isObject(o) || l.default.isElement(o)) {
                                                t.next = 7;
                                                break;
                                            }
                                            throw Error("\xabholder\xbb value must be an Element node");
                                        case 7:
                                        case "end":
                                            return t.stop();
                                    }
                                }, t507, this);
                            })), function() {
                                return n244.apply(this, arguments);
                            })
                        },
                        {
                            key: "init",
                            value: function() {
                                this.constructModules(), this.configureModules();
                            }
                        },
                        {
                            key: "start",
                            value: (e317 = (0, i107.default)(r.default.mark(function t508() {
                                var e319, n = this;
                                return r.default.wrap(function(t509) {
                                    for(;;)switch(t509.prev = t509.next){
                                        case 0:
                                            return e319 = [
                                                "Tools",
                                                "UI",
                                                "BlockManager",
                                                "Paste",
                                                "BlockSelection",
                                                "RectangleSelection",
                                                "CrossBlockSelection",
                                                "ReadOnly"
                                            ], t509.next = 3, e319.reduce(function(t510, e) {
                                                return t510.then((0, i107.default)(r.default.mark(function t511() {
                                                    return r.default.wrap(function(t) {
                                                        for(;;)switch(t.prev = t.next){
                                                            case 0:
                                                                return t.prev = 0, t.next = 3, n.moduleInstances[e].prepare();
                                                            case 3:
                                                                t.next = 10;
                                                                break;
                                                            case 5:
                                                                if (t.prev = 5, t.t0 = t.catch(0), !(t.t0 instanceof f.CriticalError)) {
                                                                    t.next = 9;
                                                                    break;
                                                                }
                                                                throw new Error(t.t0.message);
                                                            case 9:
                                                                c.log("Module ".concat(e, " was skipped because of %o"), "warn", t.t0);
                                                            case 10:
                                                            case "end":
                                                                return t.stop();
                                                        }
                                                    }, t511, null, [
                                                        [
                                                            0,
                                                            5
                                                        ]
                                                    ]);
                                                })));
                                            }, Promise.resolve());
                                        case 3:
                                        case "end":
                                            return t509.stop();
                                    }
                                }, t508);
                            })), function() {
                                return e317.apply(this, arguments);
                            })
                        },
                        {
                            key: "render",
                            value: function() {
                                return this.moduleInstances.Renderer.render(this.config.data.blocks);
                            }
                        },
                        {
                            key: "constructModules",
                            value: function() {
                                var t512 = this;
                                g.forEach(function(e) {
                                    var n = c.isFunction(e) ? e : e.default;
                                    try {
                                        t512.moduleInstances[n.displayName] = new n({
                                            config: t512.configuration,
                                            eventsDispatcher: t512.eventsDispatcher
                                        });
                                    } catch (t) {
                                        c.log("Module ".concat(n.displayName, " skipped because"), "error", t);
                                    }
                                });
                            }
                        },
                        {
                            key: "configureModules",
                            value: function() {
                                for(var t in this.moduleInstances)Object.prototype.hasOwnProperty.call(this.moduleInstances, t) && (this.moduleInstances[t].state = this.getModulesDiff(t));
                            }
                        },
                        {
                            key: "getModulesDiff",
                            value: function(t) {
                                var e = {};
                                for(var n in this.moduleInstances)n !== t && (e[n] = this.moduleInstances[n]);
                                return e;
                            }
                        },
                        {
                            key: "configuration",
                            set: function(t) {
                                var e, n;
                                c.isObject(t) ? this.config = Object.assign({}, t) : this.config = {
                                    holder: t
                                }, c.deprecationAssert(!!this.config.holderId, "config.holderId", "config.holder"), this.config.holderId && !this.config.holder && (this.config.holder = this.config.holderId, this.config.holderId = null), null == this.config.holder && (this.config.holder = "editorjs"), this.config.logLevel || (this.config.logLevel = c.LogLevels.VERBOSE), c.setLogLevel(this.config.logLevel), c.deprecationAssert(Boolean(this.config.initialBlock), "config.initialBlock", "config.defaultBlock"), this.config.defaultBlock = this.config.defaultBlock || this.config.initialBlock || "paragraph", this.config.minHeight = void 0 !== this.config.minHeight ? this.config.minHeight : 300;
                                var o = {
                                    type: this.config.defaultBlock,
                                    data: {}
                                };
                                this.config.placeholder = this.config.placeholder || !1, this.config.sanitizer = this.config.sanitizer || {
                                    p: !0,
                                    b: !0,
                                    a: !0
                                }, this.config.hideToolbar = !!this.config.hideToolbar && this.config.hideToolbar, this.config.tools = this.config.tools || {}, this.config.i18n = this.config.i18n || {}, this.config.data = this.config.data || {
                                    blocks: []
                                }, this.config.onReady = this.config.onReady || function() {}, this.config.onChange = this.config.onChange || function() {}, this.config.inlineToolbar = void 0 === this.config.inlineToolbar || this.config.inlineToolbar, !c.isEmpty(this.config.data) && this.config.data.blocks && 0 !== this.config.data.blocks.length || (this.config.data = {
                                    blocks: [
                                        o
                                    ]
                                }), this.config.readOnly = this.config.readOnly || !1, (null === (e = this.config.i18n) || void 0 === e ? void 0 : e.messages) && u.default.setDictionary(this.config.i18n.messages), this.config.i18n.direction = (null === (n = this.config.i18n) || void 0 === n ? void 0 : n.direction) || "ltr";
                            },
                            get: function() {
                                return this.config;
                            }
                        }
                    ]), t503;
                }();
                o198.default = y, y.displayName = "Core", t502.exports = e316.default;
            }) ? o197.apply(e316, r111) : o197) || (t502.exports = i106);
        },
        function(t513, e, n) {
            var o = n(149);
            t513.exports = function(t) {
                if (Array.isArray(t)) return o(t);
            };
        },
        function(t514, e) {
            t514.exports = function(t) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
            };
        },
        function(t, e) {
            t.exports = function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            };
        },
        function(t515, e320) {
            t515.exports = function(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t;
            };
        },
        function(t516, e) {
            t516.exports = function(t) {
                return -1 !== Function.toString.call(t).indexOf("[native code]");
            };
        },
        function(t517, e321, n245) {
            var o = n245(110), r112 = n245(374);
            function i108(e322, n246, a) {
                return r112() ? t517.exports = i108 = Reflect.construct : t517.exports = i108 = function(t, e, n) {
                    var r = [
                        null
                    ];
                    r.push.apply(r, e);
                    var i = new (Function.bind.apply(t, r));
                    return n && o(i, n.prototype), i;
                }, i108.apply(null, arguments);
            }
            t517.exports = i108;
        },
        function(t, e) {
            t.exports = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                } catch (t) {
                    return !1;
                }
            };
        },
        function(t518, e323, n) {
            var o = {
                "./api": 82,
                "./api/": 82,
                "./api/blocks": 154,
                "./api/blocks.ts": 154,
                "./api/caret": 155,
                "./api/caret.ts": 155,
                "./api/events": 156,
                "./api/events.ts": 156,
                "./api/i18n": 157,
                "./api/i18n.ts": 157,
                "./api/index": 82,
                "./api/index.ts": 82,
                "./api/inlineToolbar": 158,
                "./api/inlineToolbar.ts": 158,
                "./api/listeners": 159,
                "./api/listeners.ts": 159,
                "./api/notifier": 160,
                "./api/notifier.ts": 160,
                "./api/readonly": 161,
                "./api/readonly.ts": 161,
                "./api/sanitizer": 162,
                "./api/sanitizer.ts": 162,
                "./api/saver": 163,
                "./api/saver.ts": 163,
                "./api/selection": 164,
                "./api/selection.ts": 164,
                "./api/styles": 165,
                "./api/styles.ts": 165,
                "./api/toolbar": 166,
                "./api/toolbar.ts": 166,
                "./api/tooltip": 167,
                "./api/tooltip.ts": 167,
                "./api/ui": 168,
                "./api/ui.ts": 168,
                "./blockEvents": 169,
                "./blockEvents.ts": 169,
                "./blockManager": 170,
                "./blockManager.ts": 170,
                "./blockSelection": 171,
                "./blockSelection.ts": 171,
                "./caret": 172,
                "./caret.ts": 172,
                "./crossBlockSelection": 173,
                "./crossBlockSelection.ts": 173,
                "./dragNDrop": 174,
                "./dragNDrop.ts": 174,
                "./modificationsObserver": 175,
                "./modificationsObserver.ts": 175,
                "./paste": 176,
                "./paste.ts": 176,
                "./readonly": 177,
                "./readonly.ts": 177,
                "./rectangleSelection": 178,
                "./rectangleSelection.ts": 178,
                "./renderer": 179,
                "./renderer.ts": 179,
                "./saver": 180,
                "./saver.ts": 180,
                "./toolbar": 83,
                "./toolbar/": 83,
                "./toolbar/blockSettings": 181,
                "./toolbar/blockSettings.ts": 181,
                "./toolbar/conversion": 182,
                "./toolbar/conversion.ts": 182,
                "./toolbar/index": 83,
                "./toolbar/index.ts": 83,
                "./toolbar/inline": 183,
                "./toolbar/inline.ts": 183,
                "./tools": 184,
                "./tools.ts": 184,
                "./ui": 186,
                "./ui.ts": 186
            };
            function r(t) {
                var e = i(t);
                return n(e);
            }
            function i(t) {
                if (!n.o(o, t)) {
                    var e = new Error("Cannot find module '" + t + "'");
                    throw e.code = "MODULE_NOT_FOUND", e;
                }
                return o[t];
            }
            r.keys = function() {
                return Object.keys(o);
            }, r.resolve = i, t518.exports = r, r.id = 375;
        },
        function(t519, e324, n) {
            var o = n(4);
            t519.exports = function(t, e) {
                for(; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = o(t)););
                return t;
            };
        },
        function(t520, e, n) {
            var o200, r113, i109;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r113 = [
                e,
                n(2),
                n(3),
                n(378)
            ], void 0 === (i109 = "function" == typeof (o200 = function(o, r, i, a) {
                "use strict";
                var s = n(1);
                Object.defineProperty(o, "__esModule", {
                    value: !0
                }), o.default = void 0, r = s(r), i = s(i), a = s(a);
                var l = function() {
                    function t521() {
                        (0, r.default)(this, t521);
                    }
                    return (0, i.default)(t521, [
                        {
                            key: "show",
                            value: function(t) {
                                a.default.show(t);
                            }
                        }
                    ]), t521;
                }();
                o.default = l, l.displayName = "Notifier", t520.exports = e.default;
            }) ? o200.apply(e, r113) : o200) || (t520.exports = i109);
        },
        function(t522, e325, n247) {
            window, t522.exports = function(t523) {
                var e326 = {};
                function n(o) {
                    if (e326[o]) return e326[o].exports;
                    var r = e326[o] = {
                        i: o,
                        l: !1,
                        exports: {}
                    };
                    return t523[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
                }
                return n.m = t523, n.c = e326, n.d = function(t, e, o) {
                    n.o(t, e) || Object.defineProperty(t, e, {
                        enumerable: !0,
                        get: o
                    });
                }, n.r = function(t) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                }, n.t = function(t, e327) {
                    if (1 & e327 && (t = n(t)), 8 & e327) return t;
                    if (4 & e327 && "object" == typeof t && t && t.__esModule) return t;
                    var o = Object.create(null);
                    if (n.r(o), Object.defineProperty(o, "default", {
                        enumerable: !0,
                        value: t
                    }), 2 & e327 && "string" != typeof t) for(var r in t)n.d(o, r, (function(e) {
                        return t[e];
                    }).bind(null, r));
                    return o;
                }, n.n = function(t) {
                    var e = t && t.__esModule ? function() {
                        return t.default;
                    } : function() {
                        return t;
                    };
                    return n.d(e, "a", e), e;
                }, n.o = function(t, e) {
                    return Object.prototype.hasOwnProperty.call(t, e);
                }, n.p = "/", n(n.s = 0);
            }([
                function(t524, e328, n248) {
                    "use strict";
                    n248(1), t524.exports = function() {
                        var t = n248(6), e = null;
                        return {
                            show: function(n) {
                                if (n.message) {
                                    !function() {
                                        if (e) return !0;
                                        e = t.getWrapper(), document.body.appendChild(e);
                                    }();
                                    var o = null, r = n.time || 8e3;
                                    switch(n.type){
                                        case "confirm":
                                            o = t.confirm(n);
                                            break;
                                        case "prompt":
                                            o = t.prompt(n);
                                            break;
                                        default:
                                            o = t.alert(n), window.setTimeout(function() {
                                                o.remove();
                                            }, r);
                                    }
                                    e.appendChild(o), o.classList.add("cdx-notify--bounce-in");
                                }
                            }
                        };
                    }();
                },
                function(t, e, n) {
                    var o = n(2);
                    "string" == typeof o && (o = [
                        [
                            t.i,
                            o,
                            ""
                        ]
                    ]), n(4)(o, {
                        hmr: !0,
                        transform: void 0,
                        insertInto: void 0
                    }), o.locals && (t.exports = o.locals);
                },
                function(t, e, n) {
                    (t.exports = n(3)(!1)).push([
                        t.i,
                        '.cdx-notify--error{background:#fffbfb!important}.cdx-notify--error::before{background:#fb5d5d!important}.cdx-notify__input{max-width:130px;padding:5px 10px;background:#f7f7f7;border:0;border-radius:3px;font-size:13px;color:#656b7c;outline:0}.cdx-notify__input:-ms-input-placeholder{color:#656b7c}.cdx-notify__input::placeholder{color:#656b7c}.cdx-notify__input:focus:-ms-input-placeholder{color:rgba(101,107,124,.3)}.cdx-notify__input:focus::placeholder{color:rgba(101,107,124,.3)}.cdx-notify__button{border:none;border-radius:3px;font-size:13px;padding:5px 10px;cursor:pointer}.cdx-notify__button:last-child{margin-left:10px}.cdx-notify__button--cancel{background:#f2f5f7;box-shadow:0 2px 1px 0 rgba(16,19,29,0);color:#656b7c}.cdx-notify__button--cancel:hover{background:#eee}.cdx-notify__button--confirm{background:#34c992;box-shadow:0 1px 1px 0 rgba(18,49,35,.05);color:#fff}.cdx-notify__button--confirm:hover{background:#33b082}.cdx-notify__btns-wrapper{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;margin-top:5px}.cdx-notify__cross{position:absolute;top:5px;right:5px;width:10px;height:10px;padding:5px;opacity:.54;cursor:pointer}.cdx-notify__cross::after,.cdx-notify__cross::before{content:\'\';position:absolute;left:9px;top:5px;height:12px;width:2px;background:#575d67}.cdx-notify__cross::before{transform:rotate(-45deg)}.cdx-notify__cross::after{transform:rotate(45deg)}.cdx-notify__cross:hover{opacity:1}.cdx-notifies{position:fixed;z-index:2;bottom:20px;left:20px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",sans-serif}.cdx-notify{position:relative;width:220px;margin-top:15px;padding:13px 16px;background:#fff;box-shadow:0 11px 17px 0 rgba(23,32,61,.13);border-radius:5px;font-size:14px;line-height:1.4em;word-wrap:break-word}.cdx-notify::before{content:\'\';position:absolute;display:block;top:0;left:0;width:3px;height:calc(100% - 6px);margin:3px;border-radius:5px;background:0 0}@keyframes bounceIn{0%{opacity:0;transform:scale(.3)}50%{opacity:1;transform:scale(1.05)}70%{transform:scale(.9)}100%{transform:scale(1)}}.cdx-notify--bounce-in{animation-name:bounceIn;animation-duration:.6s;animation-iteration-count:1}.cdx-notify--success{background:#fafffe!important}.cdx-notify--success::before{background:#41ffb1!important}',
                        ""
                    ]);
                },
                function(t525, e329) {
                    t525.exports = function(t526) {
                        var e330 = [];
                        return e330.toString = function() {
                            return this.map(function(e331) {
                                var n249 = function(t527, e) {
                                    var n, o = t527[1] || "", r = t527[3];
                                    if (!r) return o;
                                    if (e && "function" == typeof btoa) {
                                        var i = (n = r, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(n)))) + " */"), a = r.sources.map(function(t) {
                                            return "/*# sourceURL=" + r.sourceRoot + t + " */";
                                        });
                                        return [
                                            o
                                        ].concat(a).concat([
                                            i
                                        ]).join("\n");
                                    }
                                    return [
                                        o
                                    ].join("\n");
                                }(e331, t526);
                                return e331[2] ? "@media " + e331[2] + "{" + n249 + "}" : n249;
                            }).join("");
                        }, e330.i = function(t, n) {
                            "string" == typeof t && (t = [
                                [
                                    null,
                                    t,
                                    ""
                                ]
                            ]);
                            for(var o = {}, r = 0; r < this.length; r++){
                                var i = this[r][0];
                                "number" == typeof i && (o[i] = !0);
                            }
                            for(r = 0; r < t.length; r++){
                                var a = t[r];
                                "number" == typeof a[0] && o[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), e330.push(a));
                            }
                        }, e330;
                    };
                },
                function(t528, e332, n250) {
                    var o201, r114, i110 = {}, a46 = (o201 = function() {
                        return window && document && document.all && !window.atob;
                    }, function() {
                        return void 0 === r114 && (r114 = o201.apply(this, arguments)), r114;
                    }), s39 = function(t529) {
                        var e = {};
                        return function(t530) {
                            if ("function" == typeof t530) return t530();
                            if (void 0 === e[t530]) {
                                var n = (function(t) {
                                    return document.querySelector(t);
                                }).call(this, t530);
                                if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
                                    n = n.contentDocument.head;
                                } catch (t) {
                                    n = null;
                                }
                                e[t530] = n;
                            }
                            return e[t530];
                        };
                    }(), l29 = null, c = 0, u = [], f = n250(5);
                    function d(t, e) {
                        for(var n = 0; n < t.length; n++){
                            var o = t[n], r = i110[o.id];
                            if (r) {
                                r.refs++;
                                for(var a = 0; a < r.parts.length; a++)r.parts[a](o.parts[a]);
                                for(; a < o.parts.length; a++)r.parts.push(b(o.parts[a], e));
                            } else {
                                var s = [];
                                for(a = 0; a < o.parts.length; a++)s.push(b(o.parts[a], e));
                                i110[o.id] = {
                                    id: o.id,
                                    refs: 1,
                                    parts: s
                                };
                            }
                        }
                    }
                    function p(t, e) {
                        for(var n = [], o = {}, r = 0; r < t.length; r++){
                            var i = t[r], a = e.base ? i[0] + e.base : i[0], s = {
                                css: i[1],
                                media: i[2],
                                sourceMap: i[3]
                            };
                            o[a] ? o[a].parts.push(s) : n.push(o[a] = {
                                id: a,
                                parts: [
                                    s
                                ]
                            });
                        }
                        return n;
                    }
                    function h(t, e) {
                        var n = s39(t.insertInto);
                        if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
                        var o = u[u.length - 1];
                        if ("top" === t.insertAt) o ? o.nextSibling ? n.insertBefore(e, o.nextSibling) : n.appendChild(e) : n.insertBefore(e, n.firstChild), u.push(e);
                        else if ("bottom" === t.insertAt) n.appendChild(e);
                        else {
                            if ("object" != typeof t.insertAt || !t.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
                            var r = s39(t.insertInto + " " + t.insertAt.before);
                            n.insertBefore(e, r);
                        }
                    }
                    function v(t) {
                        if (null === t.parentNode) return !1;
                        t.parentNode.removeChild(t);
                        var e = u.indexOf(t);
                        e >= 0 && u.splice(e, 1);
                    }
                    function g(t) {
                        var e = document.createElement("style");
                        return void 0 === t.attrs.type && (t.attrs.type = "text/css"), y(e, t.attrs), h(t, e), e;
                    }
                    function y(t, e) {
                        Object.keys(e).forEach(function(n) {
                            t.setAttribute(n, e[n]);
                        });
                    }
                    function b(t531, e333) {
                        var n251, o202, r115, i111;
                        if (e333.transform && t531.css) {
                            if (!(i111 = e333.transform(t531.css))) return function() {};
                            t531.css = i111;
                        }
                        if (e333.singleton) {
                            var a = c++;
                            n251 = l29 || (l29 = g(e333)), o202 = x.bind(null, n251, a, !1), r115 = x.bind(null, n251, a, !0);
                        } else t531.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n251 = function(t) {
                            var e = document.createElement("link");
                            return void 0 === t.attrs.type && (t.attrs.type = "text/css"), t.attrs.rel = "stylesheet", y(e, t.attrs), h(t, e), e;
                        }(e333), o202 = (function(t, e, n) {
                            var o = n.css, r = n.sourceMap, i = void 0 === e.convertToAbsoluteUrls && r;
                            (e.convertToAbsoluteUrls || i) && (o = f(o)), r && (o += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */");
                            var a = new Blob([
                                o
                            ], {
                                type: "text/css"
                            }), s = t.href;
                            t.href = URL.createObjectURL(a), s && URL.revokeObjectURL(s);
                        }).bind(null, n251, e333), r115 = function() {
                            v(n251), n251.href && URL.revokeObjectURL(n251.href);
                        }) : (n251 = g(e333), o202 = (function(t, e) {
                            var n = e.css, o = e.media;
                            if (o && t.setAttribute("media", o), t.styleSheet) t.styleSheet.cssText = n;
                            else {
                                for(; t.firstChild;)t.removeChild(t.firstChild);
                                t.appendChild(document.createTextNode(n));
                            }
                        }).bind(null, n251), r115 = function() {
                            v(n251);
                        });
                        return o202(t531), function(e) {
                            if (e) {
                                if (e.css === t531.css && e.media === t531.media && e.sourceMap === t531.sourceMap) return;
                                o202(t531 = e);
                            } else r115();
                        };
                    }
                    t528.exports = function(t532, e) {
                        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
                        (e = e || {}).attrs = "object" == typeof e.attrs ? e.attrs : {}, e.singleton || "boolean" == typeof e.singleton || (e.singleton = a46()), e.insertInto || (e.insertInto = "head"), e.insertAt || (e.insertAt = "bottom");
                        var n = p(t532, e);
                        return d(n, e), function(t) {
                            for(var o = [], r = 0; r < n.length; r++){
                                var a = n[r];
                                (s = i110[a.id]).refs--, o.push(s);
                            }
                            for(t && d(p(t, e), e), r = 0; r < o.length; r++){
                                var s;
                                if (0 === (s = o[r]).refs) {
                                    for(var l = 0; l < s.parts.length; l++)s.parts[l]();
                                    delete i110[s.id];
                                }
                            }
                        };
                    };
                    var m, k = (m = [], function(t, e) {
                        return m[t] = e, m.filter(Boolean).join("\n");
                    });
                    function x(t, e, n, o) {
                        var r = n ? "" : o.css;
                        if (t.styleSheet) t.styleSheet.cssText = k(e, r);
                        else {
                            var i = document.createTextNode(r), a = t.childNodes;
                            a[e] && t.removeChild(a[e]), a.length ? t.insertBefore(i, a[e]) : t.appendChild(i);
                        }
                    }
                },
                function(t533, e334) {
                    t533.exports = function(t534) {
                        var e335 = "undefined" != typeof window && window.location;
                        if (!e335) throw new Error("fixUrls requires window.location");
                        if (!t534 || "string" != typeof t534) return t534;
                        var n = e335.protocol + "//" + e335.host, o = n + e335.pathname.replace(/\/[^\/]*$/, "/");
                        return t534.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(t, e336) {
                            var r, i = e336.trim().replace(/^"(.*)"$/, function(t, e) {
                                return e;
                            }).replace(/^'(.*)'$/, function(t, e) {
                                return e;
                            });
                            return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i) ? t : (r = 0 === i.indexOf("//") ? i : 0 === i.indexOf("/") ? n + i : o + i.replace(/^\.\//, ""), "url(" + JSON.stringify(r) + ")");
                        });
                    };
                },
                function(t535, e337, n252) {
                    "use strict";
                    var o203, r, i112, a47, s, l;
                    t535.exports = (o203 = "cdx-notify", r = "cdx-notify__cross", i112 = "cdx-notify__button--confirm", a47 = "cdx-notify__button", s = "cdx-notify__btns-wrapper", {
                        alert: l = function(t) {
                            var e = document.createElement("DIV"), n = document.createElement("DIV"), i = t.message, a = t.style;
                            return e.classList.add(o203), a && e.classList.add(o203 + "--" + a), e.innerHTML = i, n.classList.add(r), n.addEventListener("click", e.remove.bind(e)), e.appendChild(n), e;
                        },
                        confirm: function(t) {
                            var e = l(t), n = document.createElement("div"), o = document.createElement("button"), c = document.createElement("button"), u = e.querySelector("." + r), f = t.cancelHandler, d = t.okHandler;
                            return n.classList.add(s), o.innerHTML = t.okText || "Confirm", c.innerHTML = t.cancelText || "Cancel", o.classList.add(a47), c.classList.add(a47), o.classList.add(i112), c.classList.add("cdx-notify__button--cancel"), f && "function" == typeof f && (c.addEventListener("click", f), u.addEventListener("click", f)), d && "function" == typeof d && o.addEventListener("click", d), o.addEventListener("click", e.remove.bind(e)), c.addEventListener("click", e.remove.bind(e)), n.appendChild(o), n.appendChild(c), e.appendChild(n), e;
                        },
                        prompt: function(t) {
                            var e = l(t), n = document.createElement("div"), o = document.createElement("button"), c = document.createElement("input"), u = e.querySelector("." + r), f = t.cancelHandler, d = t.okHandler;
                            return n.classList.add(s), o.innerHTML = t.okText || "Ok", o.classList.add(a47), o.classList.add(i112), c.classList.add("cdx-notify__input"), t.placeholder && c.setAttribute("placeholder", t.placeholder), t.default && (c.value = t.default), t.inputType && (c.type = t.inputType), f && "function" == typeof f && u.addEventListener("click", f), d && "function" == typeof d && o.addEventListener("click", function() {
                                d(c.value);
                            }), o.addEventListener("click", e.remove.bind(e)), n.appendChild(c), n.appendChild(o), e.appendChild(n), e;
                        },
                        getWrapper: function() {
                            var t = document.createElement("DIV");
                            return t.classList.add("cdx-notifies"), t;
                        }
                    });
                }
            ]);
        },
        function(t536, e338, n253) {
            var o204, r116;
            void 0 === (r116 = "function" == typeof (o204 = function() {
                function t537(t538) {
                    var e = t538.tags;
                    if (!Object.keys(e).map(function(t) {
                        return typeof e[t];
                    }).every(function(t) {
                        return "object" === t || "boolean" === t || "function" === t;
                    })) throw new Error("The configuration was invalid");
                    this.config = t538;
                }
                var e339 = [
                    "P",
                    "LI",
                    "TD",
                    "TH",
                    "DIV",
                    "H1",
                    "H2",
                    "H3",
                    "H4",
                    "H5",
                    "H6",
                    "PRE"
                ];
                function n254(t) {
                    return -1 !== e339.indexOf(t.nodeName);
                }
                var o205 = [
                    "A",
                    "B",
                    "STRONG",
                    "I",
                    "EM",
                    "SUB",
                    "SUP",
                    "U",
                    "STRIKE"
                ];
                function r(t) {
                    return -1 !== o205.indexOf(t.nodeName);
                }
                function i(t, e, n) {
                    return "function" == typeof t.tags[e] ? t.tags[e](n) : t.tags[e];
                }
                function a(t, e) {
                    return void 0 === e || "boolean" == typeof e && !e;
                }
                function s(t, e, n) {
                    var o = t.name.toLowerCase();
                    return !0 !== e && ("function" == typeof e[o] ? !e[o](t.value, n) : void 0 === e[o] || !1 === e[o] || "string" == typeof e[o] && e[o] !== t.value);
                }
                return t537.prototype.clean = function(t) {
                    const e = document.implementation.createHTMLDocument(), n = e.createElement("div");
                    return n.innerHTML = t, this._sanitize(e, n), n.innerHTML;
                }, t537.prototype._sanitize = function(t539, e340) {
                    var o = function(t, e) {
                        return t.createTreeWalker(e, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT, null, !1);
                    }(t539, e340), l = o.firstChild();
                    if (l) do {
                        if (l.nodeType !== Node.TEXT_NODE) {
                            if (l.nodeType === Node.COMMENT_NODE) {
                                e340.removeChild(l), this._sanitize(t539, e340);
                                break;
                            }
                            var c, u = r(l);
                            u && (c = Array.prototype.some.call(l.childNodes, n254));
                            var f = !!e340.parentNode, d = n254(e340) && n254(l) && f, p = l.nodeName.toLowerCase(), h = i(this.config, p, l);
                            if (u && c || a(0, h) || !this.config.keepNestedBlockElements && d) {
                                if ("SCRIPT" !== l.nodeName && "STYLE" !== l.nodeName) for(; l.childNodes.length > 0;)e340.insertBefore(l.childNodes[0], l);
                                e340.removeChild(l), this._sanitize(t539, e340);
                                break;
                            }
                            for(var v = 0; v < l.attributes.length; v += 1){
                                var g = l.attributes[v];
                                s(g, h, l) && (l.removeAttribute(g.name), v -= 1);
                            }
                            this._sanitize(t539, l);
                        } else if ("" === l.data.trim() && (l.previousElementSibling && n254(l.previousElementSibling) || l.nextElementSibling && n254(l.nextElementSibling))) {
                            e340.removeChild(l), this._sanitize(t539, e340);
                            break;
                        }
                    }while (l = o.nextSibling());
                }, t537;
            }) ? o204.call(e338, n253, e338, t536) : o204) || (t536.exports = r116);
        },
        function(t540, e341, n255) {
            window, t540.exports = function(t541) {
                var e342 = {};
                function n(o) {
                    if (e342[o]) return e342[o].exports;
                    var r = e342[o] = {
                        i: o,
                        l: !1,
                        exports: {}
                    };
                    return t541[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
                }
                return n.m = t541, n.c = e342, n.d = function(t, e, o) {
                    n.o(t, e) || Object.defineProperty(t, e, {
                        enumerable: !0,
                        get: o
                    });
                }, n.r = function(t) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                }, n.t = function(t, e343) {
                    if (1 & e343 && (t = n(t)), 8 & e343) return t;
                    if (4 & e343 && "object" == typeof t && t && t.__esModule) return t;
                    var o = Object.create(null);
                    if (n.r(o), Object.defineProperty(o, "default", {
                        enumerable: !0,
                        value: t
                    }), 2 & e343 && "string" != typeof t) for(var r in t)n.d(o, r, (function(e) {
                        return t[e];
                    }).bind(null, r));
                    return o;
                }, n.n = function(t) {
                    var e = t && t.__esModule ? function() {
                        return t.default;
                    } : function() {
                        return t;
                    };
                    return n.d(e, "a", e), e;
                }, n.o = function(t, e) {
                    return Object.prototype.hasOwnProperty.call(t, e);
                }, n.p = "", n(n.s = 0);
            }([
                function(t, e, n) {
                    t.exports = n(1);
                },
                function(t542, e344, n256) {
                    "use strict";
                    n256.r(e344), n256.d(e344, "default", function() {
                        return o206;
                    });
                    class o206 {
                        constructor(){
                            this.nodes = {
                                wrapper: null,
                                content: null
                            }, this.showed = !1, this.offsetTop = 10, this.offsetLeft = 10, this.offsetRight = 10, this.hidingDelay = 0, this.handleWindowScroll = ()=>{
                                this.showed && this.hide(!0);
                            }, this.loadStyles(), this.prepare(), window.addEventListener("scroll", this.handleWindowScroll, {
                                passive: !0
                            });
                        }
                        get CSS() {
                            return {
                                tooltip: "ct",
                                tooltipContent: "ct__content",
                                tooltipShown: "ct--shown",
                                placement: {
                                    left: "ct--left",
                                    bottom: "ct--bottom",
                                    right: "ct--right",
                                    top: "ct--top"
                                }
                            };
                        }
                        show(t, e, n) {
                            this.nodes.wrapper || this.prepare(), this.hidingTimeout && clearTimeout(this.hidingTimeout);
                            const o = Object.assign({
                                placement: "bottom",
                                marginTop: 0,
                                marginLeft: 0,
                                marginRight: 0,
                                marginBottom: 0,
                                delay: 70,
                                hidingDelay: 0
                            }, n);
                            if (o.hidingDelay && (this.hidingDelay = o.hidingDelay), this.nodes.content.innerHTML = "", "string" == typeof e) this.nodes.content.appendChild(document.createTextNode(e));
                            else {
                                if (!(e instanceof Node)) throw Error("[CodeX Tooltip] Wrong type of \xabcontent\xbb passed. It should be an instance of Node or String. But " + typeof e + " given.");
                                this.nodes.content.appendChild(e);
                            }
                            switch(this.nodes.wrapper.classList.remove(...Object.values(this.CSS.placement)), o.placement){
                                case "top":
                                    this.placeTop(t, o);
                                    break;
                                case "left":
                                    this.placeLeft(t, o);
                                    break;
                                case "right":
                                    this.placeRight(t, o);
                                    break;
                                case "bottom":
                                default:
                                    this.placeBottom(t, o);
                            }
                            o && o.delay ? this.showingTimeout = setTimeout(()=>{
                                this.nodes.wrapper.classList.add(this.CSS.tooltipShown), this.showed = !0;
                            }, o.delay) : (this.nodes.wrapper.classList.add(this.CSS.tooltipShown), this.showed = !0);
                        }
                        hide(t = !1) {
                            if (this.hidingDelay && !t) return this.hidingTimeout && clearTimeout(this.hidingTimeout), void (this.hidingTimeout = setTimeout(()=>{
                                this.hide(!0);
                            }, this.hidingDelay));
                            this.nodes.wrapper.classList.remove(this.CSS.tooltipShown), this.showed = !1, this.showingTimeout && clearTimeout(this.showingTimeout);
                        }
                        onHover(t, e, n) {
                            t.addEventListener("mouseenter", ()=>{
                                this.show(t, e, n);
                            }), t.addEventListener("mouseleave", ()=>{
                                this.hide();
                            });
                        }
                        destroy() {
                            this.nodes.wrapper.remove(), window.removeEventListener("scroll", this.handleWindowScroll);
                        }
                        prepare() {
                            this.nodes.wrapper = this.make("div", this.CSS.tooltip), this.nodes.content = this.make("div", this.CSS.tooltipContent), this.append(this.nodes.wrapper, this.nodes.content), this.append(document.body, this.nodes.wrapper);
                        }
                        loadStyles() {
                            const t = "codex-tooltips-style";
                            if (document.getElementById(t)) return;
                            const e = n256(2), o = this.make("style", null, {
                                textContent: e.toString(),
                                id: t
                            });
                            this.prepend(document.head, o);
                        }
                        placeBottom(t, e) {
                            const n = t.getBoundingClientRect(), o = n.left + t.clientWidth / 2 - this.nodes.wrapper.offsetWidth / 2, r = n.bottom + window.pageYOffset + this.offsetTop + e.marginTop;
                            this.applyPlacement("bottom", o, r);
                        }
                        placeTop(t, e) {
                            const n = t.getBoundingClientRect(), o = n.left + t.clientWidth / 2 - this.nodes.wrapper.offsetWidth / 2, r = n.top + window.pageYOffset - this.nodes.wrapper.clientHeight - this.offsetTop;
                            this.applyPlacement("top", o, r);
                        }
                        placeLeft(t, e) {
                            const n = t.getBoundingClientRect(), o = n.left - this.nodes.wrapper.offsetWidth - this.offsetLeft - e.marginLeft, r = n.top + window.pageYOffset + t.clientHeight / 2 - this.nodes.wrapper.offsetHeight / 2;
                            this.applyPlacement("left", o, r);
                        }
                        placeRight(t, e) {
                            const n = t.getBoundingClientRect(), o = n.right + this.offsetRight + e.marginRight, r = n.top + window.pageYOffset + t.clientHeight / 2 - this.nodes.wrapper.offsetHeight / 2;
                            this.applyPlacement("right", o, r);
                        }
                        applyPlacement(t, e, n) {
                            this.nodes.wrapper.classList.add(this.CSS.placement[t]), this.nodes.wrapper.style.left = e + "px", this.nodes.wrapper.style.top = n + "px";
                        }
                        make(t, e = null, n = {}) {
                            const o = document.createElement(t);
                            Array.isArray(e) ? o.classList.add(...e) : e && o.classList.add(e);
                            for(const t543 in n)n.hasOwnProperty(t543) && (o[t543] = n[t543]);
                            return o;
                        }
                        append(t, e345) {
                            Array.isArray(e345) ? e345.forEach((e)=>t.appendChild(e)) : t.appendChild(e345);
                        }
                        prepend(t, e346) {
                            Array.isArray(e346) ? (e346 = e346.reverse()).forEach((e)=>t.prepend(e)) : t.prepend(e346);
                        }
                    }
                },
                function(t, e) {
                    t.exports = '.ct{z-index:999;opacity:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;-webkit-transition:opacity 50ms ease-in,-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,transform 70ms cubic-bezier(.215,.61,.355,1),-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);will-change:opacity,top,left;-webkit-box-shadow:0 8px 12px 0 rgba(29,32,43,.17),0 4px 5px -3px rgba(5,6,12,.49);box-shadow:0 8px 12px 0 rgba(29,32,43,.17),0 4px 5px -3px rgba(5,6,12,.49);border-radius:9px}.ct,.ct:before{position:absolute;top:0;left:0}.ct:before{content:"";bottom:0;right:0;background-color:#1d202b;z-index:-1;border-radius:4px}@supports(-webkit-mask-box-image:url("")){.ct:before{border-radius:0;-webkit-mask-box-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M10.71 0h2.58c3.02 0 4.64.42 6.1 1.2a8.18 8.18 0 013.4 3.4C23.6 6.07 24 7.7 24 10.71v2.58c0 3.02-.42 4.64-1.2 6.1a8.18 8.18 0 01-3.4 3.4c-1.47.8-3.1 1.21-6.11 1.21H10.7c-3.02 0-4.64-.42-6.1-1.2a8.18 8.18 0 01-3.4-3.4C.4 17.93 0 16.3 0 13.29V10.7c0-3.02.42-4.64 1.2-6.1a8.18 8.18 0 013.4-3.4C6.07.4 7.7 0 10.71 0z"/></svg>\') 48% 41% 37.9% 53.3%}}@media (--mobile){.ct{display:none}}.ct__content{padding:6px 10px;color:#cdd1e0;font-size:12px;text-align:center;letter-spacing:.02em;line-height:1em}.ct:after{content:"";width:8px;height:8px;position:absolute;background-color:#1d202b;z-index:-1}.ct--bottom{-webkit-transform:translateY(5px);transform:translateY(5px)}.ct--bottom:after{top:-3px;left:50%;-webkit-transform:translateX(-50%) rotate(-45deg);transform:translateX(-50%) rotate(-45deg)}.ct--top{-webkit-transform:translateY(-5px);transform:translateY(-5px)}.ct--top:after{top:auto;bottom:-3px;left:50%;-webkit-transform:translateX(-50%) rotate(-45deg);transform:translateX(-50%) rotate(-45deg)}.ct--left{-webkit-transform:translateX(-5px);transform:translateX(-5px)}.ct--left:after{top:50%;left:auto;right:0;-webkit-transform:translate(41.6%,-50%) rotate(-45deg);transform:translate(41.6%,-50%) rotate(-45deg)}.ct--right{-webkit-transform:translateX(5px);transform:translateX(5px)}.ct--right:after{top:50%;left:0;-webkit-transform:translate(-41.6%,-50%) rotate(-45deg);transform:translate(-41.6%,-50%) rotate(-45deg)}.ct--shown{opacity:1;-webkit-transform:none;transform:none}';
                }
            ]).default;
        },
        function(t544, e347, n257) {
            var o207, r117, i113;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r117 = [
                e347,
                n257(2),
                n257(3),
                n257(14),
                n257(7),
                n257(25)
            ], void 0 === (i113 = "function" == typeof (o207 = function(o208, r, i, a, s, l) {
                "use strict";
                var c = n257(8), u = n257(1);
                Object.defineProperty(o208, "__esModule", {
                    value: !0
                }), o208.default = void 0, r = u(r), i = u(i), a = u(a), s = c(s), l = u(l);
                var f = function() {
                    function t545(e, n) {
                        (0, r.default)(this, t545), this.cursor = -1, this.items = [], this.items = e || [], this.focusedCssClass = n;
                    }
                    return (0, i.default)(t545, [
                        {
                            key: "setItems",
                            value: function(t) {
                                this.items = t;
                            }
                        },
                        {
                            key: "next",
                            value: function() {
                                this.cursor = this.leafNodesAndReturnIndex(t545.directions.RIGHT);
                            }
                        },
                        {
                            key: "previous",
                            value: function() {
                                this.cursor = this.leafNodesAndReturnIndex(t545.directions.LEFT);
                            }
                        },
                        {
                            key: "dropCursor",
                            value: function() {
                                -1 !== this.cursor && (this.items[this.cursor].classList.remove(this.focusedCssClass), this.cursor = -1);
                            }
                        },
                        {
                            key: "leafNodesAndReturnIndex",
                            value: function(e) {
                                var n = this;
                                if (0 === this.items.length) return this.cursor;
                                var o = this.cursor;
                                return -1 === o ? o = e === t545.directions.RIGHT ? -1 : 0 : this.items[o].classList.remove(this.focusedCssClass), o = e === t545.directions.RIGHT ? (o + 1) % this.items.length : (this.items.length + o - 1) % this.items.length, a.default.canSetCaret(this.items[o]) && s.delay(function() {
                                    return l.default.setCursor(n.items[o]);
                                }, 50)(), this.items[o].classList.add(this.focusedCssClass), o;
                            }
                        },
                        {
                            key: "currentItem",
                            get: function() {
                                return -1 === this.cursor ? null : this.items[this.cursor];
                            }
                        }
                    ]), t545;
                }();
                o208.default = f, f.displayName = "DomIterator", f.directions = {
                    RIGHT: "right",
                    LEFT: "left"
                }, t544.exports = e347.default;
            }) ? o207.apply(e347, r117) : o207) || (t544.exports = i113);
        },
        function(t546, e348, n258) {
            var o209, r118, i114;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r118 = [
                e348,
                n258(2),
                n258(3),
                n258(7),
                n258(14),
                n258(61)
            ], void 0 === (i114 = "function" == typeof (o209 = function(o210, r119, i115, a48, s, l) {
                "use strict";
                var c = n258(8), u = n258(1);
                Object.defineProperty(o210, "__esModule", {
                    value: !0
                }), o210.default = void 0, r119 = u(r119), i115 = u(i115), a48 = c(a48), s = u(s);
                var f = function() {
                    function t547(e) {
                        (0, r119.default)(this, t547), this.blocks = [], this.workingArea = e;
                    }
                    return (0, i115.default)(t547, [
                        {
                            key: "push",
                            value: function(t) {
                                this.blocks.push(t), this.insertToDOM(t);
                            }
                        },
                        {
                            key: "swap",
                            value: function(t, e) {
                                var n = this.blocks[e];
                                s.default.swap(this.blocks[t].holder, n.holder), this.blocks[e] = this.blocks[t], this.blocks[t] = n;
                            }
                        },
                        {
                            key: "move",
                            value: function(t, e) {
                                var n = this.blocks.splice(e, 1)[0], o = t - 1, r = Math.max(0, o), i = this.blocks[r];
                                t > 0 ? this.insertToDOM(n, "afterend", i) : this.insertToDOM(n, "beforebegin", i), this.blocks.splice(t, 0, n);
                                var a = this.composeBlockEvent("move", {
                                    fromIndex: e,
                                    toIndex: t
                                });
                                n.call(l.BlockToolAPI.MOVED, a);
                            }
                        },
                        {
                            key: "insert",
                            value: function(t, e) {
                                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                if (this.length) {
                                    t > this.length && (t = this.length), n && (this.blocks[t].holder.remove(), this.blocks[t].call(l.BlockToolAPI.REMOVED));
                                    var o = n ? 1 : 0;
                                    if (this.blocks.splice(t, o, e), t > 0) {
                                        var r = this.blocks[t - 1];
                                        this.insertToDOM(e, "afterend", r);
                                    } else {
                                        var i = this.blocks[t + 1];
                                        i ? this.insertToDOM(e, "beforebegin", i) : this.insertToDOM(e);
                                    }
                                } else this.push(e);
                            }
                        },
                        {
                            key: "remove",
                            value: function(t) {
                                isNaN(t) && (t = this.length - 1), this.blocks[t].holder.remove(), this.blocks[t].call(l.BlockToolAPI.REMOVED), this.blocks.splice(t, 1);
                            }
                        },
                        {
                            key: "removeAll",
                            value: function() {
                                this.workingArea.innerHTML = "", this.blocks.forEach(function(t) {
                                    return t.call(l.BlockToolAPI.REMOVED);
                                }), this.blocks.length = 0;
                            }
                        },
                        {
                            key: "insertAfter",
                            value: function(t, e) {
                                var n = this.blocks.indexOf(t);
                                this.insert(n + 1, e);
                            }
                        },
                        {
                            key: "get",
                            value: function(t) {
                                return this.blocks[t];
                            }
                        },
                        {
                            key: "indexOf",
                            value: function(t) {
                                return this.blocks.indexOf(t);
                            }
                        },
                        {
                            key: "insertToDOM",
                            value: function(t, e, n) {
                                e ? n.holder.insertAdjacentElement(e, t.holder) : this.workingArea.appendChild(t.holder), t.call(l.BlockToolAPI.RENDERED);
                            }
                        },
                        {
                            key: "composeBlockEvent",
                            value: function(t, e) {
                                return new CustomEvent(t, {
                                    detail: e
                                });
                            }
                        },
                        {
                            key: "length",
                            get: function() {
                                return this.blocks.length;
                            }
                        },
                        {
                            key: "array",
                            get: function() {
                                return this.blocks;
                            }
                        },
                        {
                            key: "nodes",
                            get: function() {
                                return a48.array(this.workingArea.children);
                            }
                        }
                    ], [
                        {
                            key: "set",
                            value: function(t, e, n) {
                                return isNaN(Number(e)) ? (Reflect.set(t, e, n), !0) : (t.insert(+e, n), !0);
                            }
                        },
                        {
                            key: "get",
                            value: function(t, e) {
                                return isNaN(Number(e)) ? Reflect.get(t, e) : t.get(+e);
                            }
                        }
                    ]), t547;
                }();
                o210.default = f, f.displayName = "Blocks", t546.exports = e348.default;
            }) ? o209.apply(e348, r118) : o209) || (t546.exports = i114);
        },
        function(t548, e349, n) {
            var o, r, i;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [
                e349
            ], void 0 === (i = "function" == typeof (o = function(t549) {
                "use strict";
                var e;
                Object.defineProperty(t549, "__esModule", {
                    value: !0
                }), t549.BlockMutationType = void 0, t549.BlockMutationType = e, function(t) {
                    t.Added = "block-added", t.Removed = "block-removed", t.Moved = "block-moved", t.Changed = "block-changed";
                }(e || (t549.BlockMutationType = e = {}));
            }) ? o.apply(e349, r) : o) || (t548.exports = i);
        },
        function(t550, e350, n259) {
            window, t550.exports = function(t551) {
                var e351 = {};
                function n(o) {
                    if (e351[o]) return e351[o].exports;
                    var r = e351[o] = {
                        i: o,
                        l: !1,
                        exports: {}
                    };
                    return t551[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
                }
                return n.m = t551, n.c = e351, n.d = function(t, e, o) {
                    n.o(t, e) || Object.defineProperty(t, e, {
                        enumerable: !0,
                        get: o
                    });
                }, n.r = function(t) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                }, n.t = function(t, e352) {
                    if (1 & e352 && (t = n(t)), 8 & e352) return t;
                    if (4 & e352 && "object" == typeof t && t && t.__esModule) return t;
                    var o = Object.create(null);
                    if (n.r(o), Object.defineProperty(o, "default", {
                        enumerable: !0,
                        value: t
                    }), 2 & e352 && "string" != typeof t) for(var r in t)n.d(o, r, (function(e) {
                        return t[e];
                    }).bind(null, r));
                    return o;
                }, n.n = function(t) {
                    var e = t && t.__esModule ? function() {
                        return t.default;
                    } : function() {
                        return t;
                    };
                    return n.d(e, "a", e), e;
                }, n.o = function(t, e) {
                    return Object.prototype.hasOwnProperty.call(t, e);
                }, n.p = "", n(n.s = 0);
            }([
                function(t552, e353, n260) {
                    "use strict";
                    function o211(t, e) {
                        for(var n = 0; n < e.length; n++){
                            var o = e[n];
                            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
                        }
                    }
                    function r120(t, e, n) {
                        return e && o211(t.prototype, e), n && o211(t, n), t;
                    }
                    n260.r(e353);
                    var i116 = function() {
                        function t553(e354) {
                            var n = this;
                            !function(t, e) {
                                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                            }(this, t553), this.commands = {}, this.keys = {}, this.name = e354.name, this.parseShortcutName(e354.name), this.element = e354.on, this.callback = e354.callback, this.executeShortcut = function(t) {
                                n.execute(t);
                            }, this.element.addEventListener("keydown", this.executeShortcut, !1);
                        }
                        return r120(t553, null, [
                            {
                                key: "supportedCommands",
                                get: function() {
                                    return {
                                        SHIFT: [
                                            "SHIFT"
                                        ],
                                        CMD: [
                                            "CMD",
                                            "CONTROL",
                                            "COMMAND",
                                            "WINDOWS",
                                            "CTRL"
                                        ],
                                        ALT: [
                                            "ALT",
                                            "OPTION"
                                        ]
                                    };
                                }
                            },
                            {
                                key: "keyCodes",
                                get: function() {
                                    return {
                                        0: 48,
                                        1: 49,
                                        2: 50,
                                        3: 51,
                                        4: 52,
                                        5: 53,
                                        6: 54,
                                        7: 55,
                                        8: 56,
                                        9: 57,
                                        A: 65,
                                        B: 66,
                                        C: 67,
                                        D: 68,
                                        E: 69,
                                        F: 70,
                                        G: 71,
                                        H: 72,
                                        I: 73,
                                        J: 74,
                                        K: 75,
                                        L: 76,
                                        M: 77,
                                        N: 78,
                                        O: 79,
                                        P: 80,
                                        Q: 81,
                                        R: 82,
                                        S: 83,
                                        T: 84,
                                        U: 85,
                                        V: 86,
                                        W: 87,
                                        X: 88,
                                        Y: 89,
                                        Z: 90,
                                        BACKSPACE: 8,
                                        ENTER: 13,
                                        ESCAPE: 27,
                                        LEFT: 37,
                                        UP: 38,
                                        RIGHT: 39,
                                        DOWN: 40,
                                        INSERT: 45,
                                        DELETE: 46
                                    };
                                }
                            }
                        ]), r120(t553, [
                            {
                                key: "parseShortcutName",
                                value: function(e) {
                                    e = e.split("+");
                                    for(var n = 0; n < e.length; n++){
                                        e[n] = e[n].toUpperCase();
                                        var o = !1;
                                        for(var r in t553.supportedCommands)if (t553.supportedCommands[r].includes(e[n])) {
                                            o = this.commands[r] = !0;
                                            break;
                                        }
                                        o || (this.keys[e[n]] = !0);
                                    }
                                    for(var i in t553.supportedCommands)this.commands[i] || (this.commands[i] = !1);
                                }
                            },
                            {
                                key: "execute",
                                value: function(e) {
                                    var n, o = {
                                        CMD: e.ctrlKey || e.metaKey,
                                        SHIFT: e.shiftKey,
                                        ALT: e.altKey
                                    }, r = !0;
                                    for(n in this.commands)this.commands[n] !== o[n] && (r = !1);
                                    var i, a = !0;
                                    for(i in this.keys)a = a && e.keyCode === t553.keyCodes[i];
                                    r && a && this.callback(e);
                                }
                            },
                            {
                                key: "remove",
                                value: function() {
                                    this.element.removeEventListener("keydown", this.executeShortcut);
                                }
                            }
                        ]), t553;
                    }();
                    e353.default = i116;
                }
            ]).default;
        },
        function(t554, e355, n261) {
            var o212, r121, i117;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r121 = [
                e355,
                n261(20),
                n261(21),
                n261(2),
                n261(3),
                n261(113),
                n261(5),
                n261(6),
                n261(4),
                n261(59),
                n261(7),
                n261(61),
                n261(115),
                n261(81),
                n261(386),
                n261(60),
                n261(84)
            ], void 0 === (i117 = "function" == typeof (o212 = function(t555, e356, o213, r122, i118, a49, s40, l30, c26, u23, f, d, p, h10, v, g, y) {
                "use strict";
                var b5 = n261(8), m = n261(1);
                function k() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(t555, "__esModule", {
                    value: !0
                }), t555.default = t555.ToolboxEvent = void 0, e356 = m(e356), o213 = m(o213), r122 = m(r122), i118 = m(i118), a49 = m(a49), s40 = m(s40), l30 = m(l30), c26 = m(c26), u23 = m(u23), f = b5(f), p = m(p), h10 = m(h10), v = b5(v), g = m(g);
                var x, w = function(t, e, n, o) {
                    var r, i = arguments.length, a = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                    if ("object" === ("undefined" == typeof Reflect ? "undefined" : (0, u23.default)(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
                    else for(var s = t.length - 1; s >= 0; s--)(r = t[s]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, n, a) : r(e, n)) || a);
                    return i > 3 && a && Object.defineProperty(e, n, a), a;
                };
                t555.ToolboxEvent = x, function(t) {
                    t.Opened = "toolbox-opened", t.Closed = "toolbox-closed", t.BlockAdded = "toolbox-block-added";
                }(x || (t555.ToolboxEvent = x = {}));
                var S = function(t556) {
                    (0, s40.default)(b, t556);
                    var n262, u, h = (n262 = b, function() {
                        var t, e = (0, c26.default)(n262);
                        if (k()) {
                            var o = (0, c26.default)(this).constructor;
                            t = Reflect.construct(e, arguments, o);
                        } else t = e.apply(this, arguments);
                        return (0, l30.default)(this, t);
                    });
                    function b(t) {
                        var e, n = t.api, o = t.tools, i = t.i18nLabels;
                        return (0, r122.default)(this, b), (e = h.call(this)).opened = !1, e.nodes = {
                            toolbox: null
                        }, e.clickListenerId = null, e.onOverlayClicked = function() {
                            e.close();
                        }, e.api = n, e.tools = o, e.i18nLabels = i, e;
                    }
                    return (0, i118.default)(b, [
                        {
                            key: "make",
                            value: function() {
                                return this.popover = new v.default({
                                    className: b.CSS.toolbox,
                                    searchable: !0,
                                    filterLabel: this.i18nLabels.filter,
                                    nothingFoundLabel: this.i18nLabels.nothingFound,
                                    items: this.toolboxItemsToBeDisplayed
                                }), this.popover.on(v.PopoverEvent.OverlayClicked, this.onOverlayClicked), this.enableShortcuts(), this.nodes.toolbox = this.popover.getElement(), this.nodes.toolbox;
                            }
                        },
                        {
                            key: "hasFocus",
                            value: function() {
                                return this.popover.hasFocus();
                            }
                        },
                        {
                            key: "destroy",
                            value: function() {
                                (0, a49.default)((0, c26.default)(b.prototype), "destroy", this).call(this), this.nodes && this.nodes.toolbox && (this.nodes.toolbox.remove(), this.nodes.toolbox = null), this.api.listeners.offById(this.clickListenerId), this.removeAllShortcuts(), this.popover.off(v.PopoverEvent.OverlayClicked, this.onOverlayClicked);
                            }
                        },
                        {
                            key: "toolButtonActivated",
                            value: function(t, e) {
                                this.insertNewBlock(t, e);
                            }
                        },
                        {
                            key: "open",
                            value: function() {
                                this.isEmpty || (this.shouldOpenPopoverBottom || (this.nodes.toolbox.style.setProperty("--popover-height", this.popover.calculateHeight() + "px"), this.nodes.toolbox.classList.add(b.CSS.toolboxOpenedTop)), this.popover.show(), this.opened = !0, this.emit(x.Opened));
                            }
                        },
                        {
                            key: "close",
                            value: function() {
                                this.popover.hide(), this.opened = !1, this.nodes.toolbox.classList.remove(b.CSS.toolboxOpenedTop), this.emit(x.Closed);
                            }
                        },
                        {
                            key: "toggle",
                            value: function() {
                                this.opened ? this.close() : this.open();
                            }
                        },
                        {
                            key: "areToolboxSettingsValid",
                            value: function(t, e) {
                                return !(!t || t && !t.icon && (f.log("Toolbar icon is missed. Tool %o skipped", "warn", e), 1));
                            }
                        },
                        {
                            key: "enableShortcuts",
                            value: function() {
                                var t = this;
                                this.toolsToBeDisplayed.forEach(function(e) {
                                    var n = e.shortcut;
                                    n && t.enableShortcutForTool(e.name, n);
                                });
                            }
                        },
                        {
                            key: "enableShortcutForTool",
                            value: function(t, e357) {
                                var n = this;
                                p.default.add({
                                    name: e357,
                                    on: this.api.ui.nodes.redactor,
                                    handler: function(e) {
                                        e.preventDefault(), n.insertNewBlock(t);
                                    }
                                });
                            }
                        },
                        {
                            key: "removeAllShortcuts",
                            value: function() {
                                var t = this;
                                this.toolsToBeDisplayed.forEach(function(e) {
                                    var n = e.shortcut;
                                    n && p.default.remove(t.api.ui.nodes.redactor, n);
                                });
                            }
                        },
                        {
                            key: "insertNewBlock",
                            value: (u = (0, o213.default)(e356.default.mark(function t557(n, o) {
                                var r, i, a, s, l, c;
                                return e356.default.wrap(function(t) {
                                    for(;;)switch(t.prev = t.next){
                                        case 0:
                                            if (r = this.api.blocks.getCurrentBlockIndex(), i = this.api.blocks.getBlockByIndex(r)) {
                                                t.next = 4;
                                                break;
                                            }
                                            return t.abrupt("return");
                                        case 4:
                                            if (a = i.isEmpty ? r : r + 1, !o) {
                                                t.next = 10;
                                                break;
                                            }
                                            return t.next = 8, this.api.blocks.composeBlockData(n);
                                        case 8:
                                            l = t.sent, s = Object.assign(l, o);
                                        case 10:
                                            (c = this.api.blocks.insert(n, s, void 0, a, void 0, i.isEmpty)).call(d.BlockToolAPI.APPEND_CALLBACK), this.api.caret.setToBlock(a), this.emit(x.BlockAdded, {
                                                block: c
                                            }), this.api.toolbar.close();
                                        case 15:
                                        case "end":
                                            return t.stop();
                                    }
                                }, t557, this);
                            })), function(t, e) {
                                return u.apply(this, arguments);
                            })
                        },
                        {
                            key: "isEmpty",
                            get: function() {
                                return 0 === this.toolsToBeDisplayed.length;
                            }
                        },
                        {
                            key: "shouldOpenPopoverBottom",
                            get: function() {
                                var t = this.nodes.toolbox.getBoundingClientRect(), e = this.api.ui.nodes.redactor.getBoundingClientRect(), n = this.popover.calculateHeight(), o = t.top + n, r = t.top - n, i = Math.min(window.innerHeight, e.bottom);
                                return r < e.top || o <= i;
                            }
                        },
                        {
                            key: "toolsToBeDisplayed",
                            get: function() {
                                var t = this;
                                return Array.from(this.tools.values()).reduce(function(e358, n) {
                                    var o = n.toolbox;
                                    if (o) {
                                        var r = o.filter(function(e) {
                                            return t.areToolboxSettingsValid(e, n.name);
                                        });
                                        e358.push(Object.assign(Object.assign({}, n), {
                                            toolbox: r
                                        }));
                                    }
                                    return e358;
                                }, []);
                            }
                        },
                        {
                            key: "toolboxItemsToBeDisplayed",
                            get: function() {
                                var t558 = this, e359 = function(e, n) {
                                    return {
                                        icon: e.icon,
                                        label: g.default.t(y.I18nInternalNS.toolNames, e.title || f.capitalize(n.name)),
                                        name: n.name,
                                        onClick: function(o) {
                                            t558.toolButtonActivated(n.name, e.data);
                                        },
                                        secondaryLabel: n.shortcut ? f.beautifyShortcut(n.shortcut) : ""
                                    };
                                };
                                return this.toolsToBeDisplayed.reduce(function(t, n) {
                                    return Array.isArray(n.toolbox) ? n.toolbox.forEach(function(o) {
                                        t.push(e359(o, n));
                                    }) : t.push(e359(n.toolbox, n)), t;
                                }, []);
                            }
                        }
                    ], [
                        {
                            key: "CSS",
                            get: function() {
                                return {
                                    toolbox: "ce-toolbox",
                                    toolboxOpenedTop: "ce-toolbox--opened-top"
                                };
                            }
                        }
                    ]), b;
                }(h10.default);
                t555.default = S, S.displayName = "Toolbox", w([
                    f.cacheable
                ], S.prototype, "toolsToBeDisplayed", null), w([
                    f.cacheable
                ], S.prototype, "toolboxItemsToBeDisplayed", null);
            }) ? o212.apply(e355, r121) : o212) || (t554.exports = i117);
        },
        function(t559, e360, n263) {
            var o214, r123, i119;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r123 = [
                e360,
                n263(2),
                n263(3),
                n263(5),
                n263(6),
                n263(4),
                n263(59),
                n263(14),
                n263(111),
                n263(62),
                n263(387),
                n263(81),
                n263(7),
                n263(388)
            ], void 0 === (i119 = "function" == typeof (o214 = function(t560, e361, o215, r124, i120, a50, s41, l31, c, u, f, d15, p, h) {
                "use strict";
                var v = n263(1);
                function g() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(t560, "__esModule", {
                    value: !0
                }), t560.default = t560.PopoverEvent = void 0, e361 = v(e361), o215 = v(o215), r124 = v(r124), i120 = v(i120), a50 = v(a50), s41 = v(s41), l31 = v(l31), c = v(c), u = v(u), f = v(f), d15 = v(d15), h = v(h);
                var y, b = function(t, e, n, o) {
                    var r, i = arguments.length, a = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                    if ("object" === ("undefined" == typeof Reflect ? "undefined" : (0, s41.default)(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
                    else for(var l = t.length - 1; l >= 0; l--)(r = t[l]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, n, a) : r(e, n)) || a);
                    return i > 3 && a && Object.defineProperty(e, n, a), a;
                };
                t560.PopoverEvent = y, function(t) {
                    t.OverlayClicked = "overlay-clicked";
                }(y || (t560.PopoverEvent = y = {}));
                var m = function(t561) {
                    (0, r124.default)(d, t561);
                    var n264, s = (n264 = d, function() {
                        var t, e = (0, a50.default)(n264);
                        if (g()) {
                            var o = (0, a50.default)(this).constructor;
                            t = Reflect.construct(e, arguments, o);
                        } else t = e.apply(this, arguments);
                        return (0, i120.default)(this, t);
                    });
                    function d(t) {
                        var n, o = t.items, r = t.className, i = t.searchable, a = t.filterLabel, l = t.nothingFoundLabel;
                        return (0, e361.default)(this, d), (n = s.call(this)).isShown = !1, n.nodes = {
                            wrapper: null,
                            popover: null,
                            items: null,
                            nothingFound: null,
                            overlay: null
                        }, n.scrollLocker = new h.default, n.items = o, n.className = r || "", n.searchable = i, n.listeners = new c.default, n.filterLabel = a, n.nothingFoundLabel = l, n.render(), n.enableFlipper(), n;
                    }
                    return (0, o215.default)(d, [
                        {
                            key: "getElement",
                            value: function() {
                                return this.nodes.wrapper;
                            }
                        },
                        {
                            key: "show",
                            value: function() {
                                var t = this;
                                this.search.clear(), this.nodes.items.scrollTop = 0, this.nodes.popover.classList.add(d.CSS.popoverOpened), this.nodes.overlay.classList.remove(d.CSS.popoverOverlayHidden), this.flipper.activate(), this.searchable && window.requestAnimationFrame(function() {
                                    t.search.focus();
                                }), (0, p.isMobileScreen)() && this.scrollLocker.lock(), this.isShown = !0;
                            }
                        },
                        {
                            key: "hide",
                            value: function() {
                                this.isShown && (this.nodes.popover.classList.remove(d.CSS.popoverOpened), this.nodes.overlay.classList.add(d.CSS.popoverOverlayHidden), this.flipper.deactivate(), (0, p.isMobileScreen)() && this.scrollLocker.unlock(), this.isShown = !1);
                            }
                        },
                        {
                            key: "destroy",
                            value: function() {
                                this.listeners.removeAll();
                            }
                        },
                        {
                            key: "hasFocus",
                            value: function() {
                                return this.flipper.hasFocus();
                            }
                        },
                        {
                            key: "calculateHeight",
                            value: function() {
                                var t, e = this.nodes.popover.cloneNode(!0);
                                return e.style.visibility = "hidden", e.style.position = "absolute", e.style.top = "-1000px", e.classList.add(d.CSS.popoverOpened), document.body.appendChild(e), t = e.offsetHeight, e.remove(), t;
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var t = this;
                                this.nodes.wrapper = l31.default.make("div", this.className), this.nodes.popover = l31.default.make("div", d.CSS.popover), this.nodes.wrapper.appendChild(this.nodes.popover), this.nodes.overlay = l31.default.make("div", [
                                    d.CSS.popoverOverlay,
                                    d.CSS.popoverOverlayHidden
                                ]), this.nodes.wrapper.appendChild(this.nodes.overlay), this.searchable && this.addSearch(this.nodes.popover), this.nodes.items = l31.default.make("div", d.CSS.itemsWrapper), this.items.forEach(function(e) {
                                    t.nodes.items.appendChild(t.createItem(e));
                                }), this.nodes.popover.appendChild(this.nodes.items), this.nodes.nothingFound = l31.default.make("div", [
                                    d.CSS.noFoundMessage
                                ], {
                                    textContent: this.nothingFoundLabel
                                }), this.nodes.popover.appendChild(this.nodes.nothingFound), this.listeners.on(this.nodes.popover, "click", function(e) {
                                    var n = e.target.closest(".".concat(d.CSS.item));
                                    n && t.itemClicked(n);
                                }), this.listeners.on(this.nodes.overlay, "click", function() {
                                    t.emit(y.OverlayClicked);
                                });
                            }
                        },
                        {
                            key: "addSearch",
                            value: function(t562) {
                                var e = this;
                                this.search = new f.default({
                                    items: this.items,
                                    placeholder: this.filterLabel,
                                    onSearch: function(t) {
                                        var n = [];
                                        e.items.forEach(function(o, r) {
                                            var i = e.nodes.items.children[r];
                                            t.includes(o) ? (n.push(i), i.classList.remove(d.CSS.itemHidden)) : i.classList.add(d.CSS.itemHidden);
                                        }), e.nodes.nothingFound.classList.toggle(d.CSS.noFoundMessageShown, 0 === n.length), e.flipper.deactivate(), e.flipper.activate(n), e.flipper.focusFirst();
                                    }
                                });
                                var n265 = this.search.getElement();
                                t562.appendChild(n265);
                            }
                        },
                        {
                            key: "createItem",
                            value: function(t) {
                                var e = l31.default.make("div", d.CSS.item);
                                e.dataset.itemName = t.name;
                                var n = l31.default.make("div", d.CSS.itemLabel, {
                                    innerHTML: t.label
                                });
                                return t.icon && e.appendChild(l31.default.make("div", d.CSS.itemIcon, {
                                    innerHTML: t.icon
                                })), e.appendChild(n), t.secondaryLabel && e.appendChild(l31.default.make("div", d.CSS.itemSecondaryLabel, {
                                    textContent: t.secondaryLabel
                                })), e;
                            }
                        },
                        {
                            key: "itemClicked",
                            value: function(t) {
                                var e = this.nodes.wrapper.querySelectorAll(".".concat(d.CSS.item)), n = Array.from(e).indexOf(t), o = this.items[n];
                                o.onClick(o);
                            }
                        },
                        {
                            key: "enableFlipper",
                            value: function() {
                                var t = Array.from(this.nodes.wrapper.querySelectorAll(".".concat(d.CSS.item)));
                                this.flipper = new u.default({
                                    items: t,
                                    focusedItemClass: d.CSS.itemFocused,
                                    allowedKeys: [
                                        p.keyCodes.TAB,
                                        p.keyCodes.UP,
                                        p.keyCodes.DOWN,
                                        p.keyCodes.ENTER
                                    ]
                                });
                            }
                        }
                    ], [
                        {
                            key: "CSS",
                            get: function() {
                                return {
                                    popover: "ce-popover",
                                    popoverOpened: "ce-popover--opened",
                                    itemsWrapper: "ce-popover__items",
                                    item: "ce-popover__item",
                                    itemHidden: "ce-popover__item--hidden",
                                    itemFocused: "ce-popover__item--focused",
                                    itemLabel: "ce-popover__item-label",
                                    itemIcon: "ce-popover__item-icon",
                                    itemSecondaryLabel: "ce-popover__item-secondary-label",
                                    noFoundMessage: "ce-popover__no-found",
                                    noFoundMessageShown: "ce-popover__no-found--shown",
                                    popoverOverlay: "ce-popover__overlay",
                                    popoverOverlayHidden: "ce-popover__overlay--hidden"
                                };
                            }
                        }
                    ]), d;
                }(d15.default);
                t560.default = m, m.displayName = "Popover", b([
                    p.cacheable
                ], m.prototype, "calculateHeight", null);
            }) ? o214.apply(e360, r123) : o214) || (t559.exports = i119);
        },
        function(t563, e362, n266) {
            var o216, r125, i121;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r125 = [
                e362,
                n266(2),
                n266(3),
                n266(14),
                n266(111)
            ], void 0 === (i121 = "function" == typeof (o216 = function(o217, r126, i122, a, s) {
                "use strict";
                var l = n266(1);
                Object.defineProperty(o217, "__esModule", {
                    value: !0
                }), o217.default = void 0, r126 = l(r126), i122 = l(i122), a = l(a), s = l(s);
                var c = function() {
                    function t564(e) {
                        var n = e.items, o = e.onSearch, i = e.placeholder;
                        (0, r126.default)(this, t564), this.listeners = new s.default, this.items = n, this.onSearch = o, this.render(i);
                    }
                    return (0, i122.default)(t564, [
                        {
                            key: "getElement",
                            value: function() {
                                return this.wrapper;
                            }
                        },
                        {
                            key: "focus",
                            value: function() {
                                this.input.focus();
                            }
                        },
                        {
                            key: "clear",
                            value: function() {
                                this.input.value = "", this.searchQuery = "", this.onSearch(this.foundItems);
                            }
                        },
                        {
                            key: "destroy",
                            value: function() {
                                this.listeners.removeAll();
                            }
                        },
                        {
                            key: "render",
                            value: function(e) {
                                var n = this;
                                this.wrapper = a.default.make("div", t564.CSS.wrapper);
                                var o = a.default.make("div", t564.CSS.icon), r = a.default.svg("search", 16, 16);
                                this.input = a.default.make("input", t564.CSS.input, {
                                    placeholder: e
                                }), o.appendChild(r), this.wrapper.appendChild(o), this.wrapper.appendChild(this.input), this.listeners.on(this.input, "input", function() {
                                    n.searchQuery = n.input.value, n.onSearch(n.foundItems);
                                });
                            }
                        },
                        {
                            key: "checkItem",
                            value: function(t) {
                                var e = t.label.toLowerCase(), n = this.searchQuery.toLowerCase();
                                return e.includes(n);
                            }
                        },
                        {
                            key: "foundItems",
                            get: function() {
                                var t = this;
                                return this.items.filter(function(e) {
                                    return t.checkItem(e);
                                });
                            }
                        }
                    ], [
                        {
                            key: "CSS",
                            get: function() {
                                return {
                                    wrapper: "cdx-search-field",
                                    icon: "cdx-search-field__icon",
                                    input: "cdx-search-field__input"
                                };
                            }
                        }
                    ]), t564;
                }();
                o217.default = c, c.displayName = "SearchInput", t563.exports = e362.default;
            }) ? o216.apply(e362, r125) : o216) || (t563.exports = i121);
        },
        function(t565, e, n) {
            var o218, r127, i123;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r127 = [
                e,
                n(2),
                n(3),
                n(7)
            ], void 0 === (i123 = "function" == typeof (o218 = function(o, r, i, a) {
                "use strict";
                var s = n(1);
                Object.defineProperty(o, "__esModule", {
                    value: !0
                }), o.default = void 0, r = s(r), i = s(i);
                var l = function() {
                    function t() {
                        (0, r.default)(this, t);
                    }
                    return (0, i.default)(t, [
                        {
                            key: "lock",
                            value: function() {
                                a.isIosDevice ? this.lockHard() : document.body.classList.add(t.CSS.scrollLocked);
                            }
                        },
                        {
                            key: "unlock",
                            value: function() {
                                a.isIosDevice ? this.unlockHard() : document.body.classList.remove(t.CSS.scrollLocked);
                            }
                        },
                        {
                            key: "lockHard",
                            value: function() {
                                this.scrollPosition = window.pageYOffset, document.documentElement.style.setProperty("--window-scroll-offset", "".concat(this.scrollPosition, "px")), document.body.classList.add(t.CSS.scrollLockedHard);
                            }
                        },
                        {
                            key: "unlockHard",
                            value: function() {
                                document.body.classList.remove(t.CSS.scrollLockedHard), null !== this.scrollPosition && window.scrollTo(0, this.scrollPosition), this.scrollPosition = null;
                            }
                        }
                    ]), t;
                }();
                o.default = l, l.displayName = "ScrollLocker", l.CSS = {
                    scrollLocked: "ce-scroll-locked",
                    scrollLockedHard: "ce-scroll-locked--hard"
                }, t565.exports = e.default;
            }) ? o218.apply(e, r127) : o218) || (t565.exports = i123);
        },
        function(t566, e363, n267) {
            window, t566.exports = function(t567) {
                var e364 = {};
                function n(o) {
                    if (e364[o]) return e364[o].exports;
                    var r = e364[o] = {
                        i: o,
                        l: !1,
                        exports: {}
                    };
                    return t567[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
                }
                return n.m = t567, n.c = e364, n.d = function(t, e, o) {
                    n.o(t, e) || Object.defineProperty(t, e, {
                        enumerable: !0,
                        get: o
                    });
                }, n.r = function(t) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                }, n.t = function(t, e365) {
                    if (1 & e365 && (t = n(t)), 8 & e365) return t;
                    if (4 & e365 && "object" == typeof t && t && t.__esModule) return t;
                    var o = Object.create(null);
                    if (n.r(o), Object.defineProperty(o, "default", {
                        enumerable: !0,
                        value: t
                    }), 2 & e365 && "string" != typeof t) for(var r in t)n.d(o, r, (function(e) {
                        return t[e];
                    }).bind(null, r));
                    return o;
                }, n.n = function(t) {
                    var e = t && t.__esModule ? function() {
                        return t.default;
                    } : function() {
                        return t;
                    };
                    return n.d(e, "a", e), e;
                }, n.o = function(t, e) {
                    return Object.prototype.hasOwnProperty.call(t, e);
                }, n.p = "/", n(n.s = 0);
            }([
                function(t568, e366, n268) {
                    function o219(t, e) {
                        for(var n = 0; n < e.length; n++){
                            var o = e[n];
                            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
                        }
                    }
                    function r128(t, e, n) {
                        return e && o219(t.prototype, e), n && o219(t, n), t;
                    }
                    n268(1).toString();
                    var i124 = function() {
                        function t569(e367) {
                            var n = e367.data, o = e367.config, r = e367.api, i = e367.readOnly;
                            !function(t, e) {
                                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                            }(this, t569), this.api = r, this.readOnly = i, this._CSS = {
                                block: this.api.styles.block,
                                wrapper: "ce-paragraph"
                            }, this.readOnly || (this.onKeyUp = this.onKeyUp.bind(this)), this._placeholder = o.placeholder ? o.placeholder : t569.DEFAULT_PLACEHOLDER, this._data = {}, this._element = this.drawView(), this._preserveBlank = void 0 !== o.preserveBlank && o.preserveBlank, this.data = n;
                        }
                        return r128(t569, null, [
                            {
                                key: "DEFAULT_PLACEHOLDER",
                                get: function() {
                                    return "";
                                }
                            }
                        ]), r128(t569, [
                            {
                                key: "onKeyUp",
                                value: function(t) {
                                    "Backspace" !== t.code && "Delete" !== t.code || "" === this._element.textContent && (this._element.innerHTML = "");
                                }
                            },
                            {
                                key: "drawView",
                                value: function() {
                                    var t = document.createElement("DIV");
                                    return t.classList.add(this._CSS.wrapper, this._CSS.block), t.contentEditable = !1, t.dataset.placeholder = this.api.i18n.t(this._placeholder), this.readOnly || (t.contentEditable = !0, t.addEventListener("keyup", this.onKeyUp)), t;
                                }
                            },
                            {
                                key: "render",
                                value: function() {
                                    return this._element;
                                }
                            },
                            {
                                key: "merge",
                                value: function(t) {
                                    var e = {
                                        text: this.data.text + t.text
                                    };
                                    this.data = e;
                                }
                            },
                            {
                                key: "validate",
                                value: function(t) {
                                    return !("" === t.text.trim() && !this._preserveBlank);
                                }
                            },
                            {
                                key: "save",
                                value: function(t) {
                                    return {
                                        text: t.innerHTML
                                    };
                                }
                            },
                            {
                                key: "onPaste",
                                value: function(t) {
                                    var e = {
                                        text: t.detail.data.innerHTML
                                    };
                                    this.data = e;
                                }
                            },
                            {
                                key: "data",
                                get: function() {
                                    var t = this._element.innerHTML;
                                    return this._data.text = t, this._data;
                                },
                                set: function(t) {
                                    this._data = t || {}, this._element.innerHTML = this._data.text || "";
                                }
                            }
                        ], [
                            {
                                key: "conversionConfig",
                                get: function() {
                                    return {
                                        export: "text",
                                        import: "text"
                                    };
                                }
                            },
                            {
                                key: "sanitize",
                                get: function() {
                                    return {
                                        text: {
                                            br: !0
                                        }
                                    };
                                }
                            },
                            {
                                key: "isReadOnlySupported",
                                get: function() {
                                    return !0;
                                }
                            },
                            {
                                key: "pasteConfig",
                                get: function() {
                                    return {
                                        tags: [
                                            "P"
                                        ]
                                    };
                                }
                            },
                            {
                                key: "toolbox",
                                get: function() {
                                    return {
                                        icon: n268(5).default,
                                        title: "Text"
                                    };
                                }
                            }
                        ]), t569;
                    }();
                    t568.exports = i124;
                },
                function(t, e, n) {
                    var o = n(2), r = n(3);
                    "string" == typeof (r = r.__esModule ? r.default : r) && (r = [
                        [
                            t.i,
                            r,
                            ""
                        ]
                    ]), o(r, {
                        insert: "head",
                        singleton: !1
                    }), t.exports = r.locals || {};
                },
                function(t570, e368, n269) {
                    "use strict";
                    var o220, r129 = function() {
                        var t = {};
                        return function(e) {
                            if (void 0 === t[e]) {
                                var n = document.querySelector(e);
                                if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
                                    n = n.contentDocument.head;
                                } catch (t571) {
                                    n = null;
                                }
                                t[e] = n;
                            }
                            return t[e];
                        };
                    }(), i125 = [];
                    function a51(t) {
                        for(var e = -1, n = 0; n < i125.length; n++)if (i125[n].identifier === t) {
                            e = n;
                            break;
                        }
                        return e;
                    }
                    function s42(t, e) {
                        for(var n = {}, o = [], r = 0; r < t.length; r++){
                            var s = t[r], l = e.base ? s[0] + e.base : s[0], c = n[l] || 0, u = "".concat(l, " ").concat(c);
                            n[l] = c + 1;
                            var f = a51(u), d = {
                                css: s[1],
                                media: s[2],
                                sourceMap: s[3]
                            };
                            -1 !== f ? (i125[f].references++, i125[f].updater(d)) : i125.push({
                                identifier: u,
                                updater: v(d, e),
                                references: 1
                            }), o.push(u);
                        }
                        return o;
                    }
                    function l32(t573) {
                        var e = document.createElement("style"), o = t573.attributes || {};
                        if (void 0 === o.nonce) {
                            var i = n269.nc;
                            i && (o.nonce = i);
                        }
                        if (Object.keys(o).forEach(function(t) {
                            e.setAttribute(t, o[t]);
                        }), "function" == typeof t573.insert) t573.insert(e);
                        else {
                            var a = r129(t573.insert || "head");
                            if (!a) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                            a.appendChild(e);
                        }
                        return e;
                    }
                    var c27, u24 = (c27 = [], function(t, e) {
                        return c27[t] = e, c27.filter(Boolean).join("\n");
                    });
                    function f19(t, e, n, o) {
                        var r = n ? "" : o.media ? "@media ".concat(o.media, " {").concat(o.css, "}") : o.css;
                        if (t.styleSheet) t.styleSheet.cssText = u24(e, r);
                        else {
                            var i = document.createTextNode(r), a = t.childNodes;
                            a[e] && t.removeChild(a[e]), a.length ? t.insertBefore(i, a[e]) : t.appendChild(i);
                        }
                    }
                    function d16(t, e, n) {
                        var o = n.css, r = n.media, i = n.sourceMap;
                        if (r ? t.setAttribute("media", r) : t.removeAttribute("media"), i && btoa && (o += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i)))), " */")), t.styleSheet) t.styleSheet.cssText = o;
                        else {
                            for(; t.firstChild;)t.removeChild(t.firstChild);
                            t.appendChild(document.createTextNode(o));
                        }
                    }
                    var p = null, h = 0;
                    function v(t574, e369) {
                        var n, o, r;
                        if (e369.singleton) {
                            var i = h++;
                            n = p || (p = l32(e369)), o = f19.bind(null, n, i, !1), r = f19.bind(null, n, i, !0);
                        } else n = l32(e369), o = d16.bind(null, n, e369), r = function() {
                            !function(t) {
                                if (null === t.parentNode) return !1;
                                t.parentNode.removeChild(t);
                            }(n);
                        };
                        return o(t574), function(e) {
                            if (e) {
                                if (e.css === t574.css && e.media === t574.media && e.sourceMap === t574.sourceMap) return;
                                o(t574 = e);
                            } else r();
                        };
                    }
                    t570.exports = function(t575, e) {
                        (e = e || {}).singleton || "boolean" == typeof e.singleton || (e.singleton = (void 0 === o220 && (o220 = Boolean(window && document && document.all && !window.atob)), o220));
                        var n = s42(t575 = t575 || [], e);
                        return function(t) {
                            if (t = t || [], "[object Array]" === Object.prototype.toString.call(t)) {
                                for(var o = 0; o < n.length; o++){
                                    var r = a51(n[o]);
                                    i125[r].references--;
                                }
                                for(var l = s42(t, e), c = 0; c < n.length; c++){
                                    var u = a51(n[c]);
                                    0 === i125[u].references && (i125[u].updater(), i125.splice(u, 1));
                                }
                                n = l;
                            }
                        };
                    };
                },
                function(t, e, n) {
                    (e = n(4)(!1)).push([
                        t.i,
                        ".ce-paragraph {\n    line-height: 1.6em;\n    outline: none;\n}\n\n.ce-paragraph[data-placeholder]:empty::before{\n  content: attr(data-placeholder);\n  color: #707684;\n  font-weight: normal;\n  opacity: 0;\n}\n\n/** Show placeholder at the first paragraph if Editor is empty */\n.codex-editor--empty .ce-block:first-child .ce-paragraph[data-placeholder]:empty::before {\n  opacity: 1;\n}\n\n.codex-editor--toolbox-opened .ce-block:first-child .ce-paragraph[data-placeholder]:empty::before,\n.codex-editor--empty .ce-block:first-child .ce-paragraph[data-placeholder]:empty:focus::before {\n  opacity: 0;\n}\n\n.ce-paragraph p:first-of-type{\n    margin-top: 0;\n}\n\n.ce-paragraph p:last-of-type{\n    margin-bottom: 0;\n}\n",
                        ""
                    ]), t.exports = e;
                },
                function(t576, e370, n270) {
                    "use strict";
                    t576.exports = function(t577) {
                        var e371 = [];
                        return e371.toString = function() {
                            return this.map(function(e372) {
                                var n271 = function(t578, e) {
                                    var n, o, r, i = t578[1] || "", a = t578[3];
                                    if (!a) return i;
                                    if (e && "function" == typeof btoa) {
                                        var s = (n = a, o = btoa(unescape(encodeURIComponent(JSON.stringify(n)))), r = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o), "/*# ".concat(r, " */")), l = a.sources.map(function(t) {
                                            return "/*# sourceURL=".concat(a.sourceRoot || "").concat(t, " */");
                                        });
                                        return [
                                            i
                                        ].concat(l).concat([
                                            s
                                        ]).join("\n");
                                    }
                                    return [
                                        i
                                    ].join("\n");
                                }(e372, t577);
                                return e372[2] ? "@media ".concat(e372[2], " {").concat(n271, "}") : n271;
                            }).join("");
                        }, e371.i = function(t, n, o) {
                            "string" == typeof t && (t = [
                                [
                                    null,
                                    t,
                                    ""
                                ]
                            ]);
                            var r = {};
                            if (o) for(var i = 0; i < this.length; i++){
                                var a = this[i][0];
                                null != a && (r[a] = !0);
                            }
                            for(var s = 0; s < t.length; s++){
                                var l = [].concat(t[s]);
                                o && r[l[0]] || (n && (l[2] ? l[2] = "".concat(n, " and ").concat(l[2]) : l[2] = n), e371.push(l));
                            }
                        }, e371;
                    };
                },
                function(t, e, n) {
                    "use strict";
                    n.r(e), e.default = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0.2 -0.3 9 11.4" width="12" height="14">\n  <path d="M0 2.77V.92A1 1 0 01.2.28C.35.1.56 0 .83 0h7.66c.28.01.48.1.63.28.14.17.21.38.21.64v1.85c0 .26-.08.48-.23.66-.15.17-.37.26-.66.26-.28 0-.5-.09-.64-.26a1 1 0 01-.21-.66V1.69H5.6v7.58h.5c.25 0 .45.08.6.23.17.16.25.35.25.6s-.08.45-.24.6a.87.87 0 01-.62.22H3.21a.87.87 0 01-.61-.22.78.78 0 01-.24-.6c0-.25.08-.44.24-.6a.85.85 0 01.61-.23h.5V1.7H1.73v1.08c0 .26-.08.48-.23.66-.15.17-.37.26-.66.26-.28 0-.5-.09-.64-.26A1 1 0 010 2.77z"/>\n</svg>\n';
                }
            ]);
        },
        function(t579, e373, n) {
            var o221, r130, i126;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r130 = [
                e373,
                n(2),
                n(3),
                n(14)
            ], void 0 === (i126 = "function" == typeof (o221 = function(o, r, i, a) {
                "use strict";
                var s = n(1);
                Object.defineProperty(o, "__esModule", {
                    value: !0
                }), o.default = void 0, r = s(r), i = s(i), a = s(a);
                var l = function() {
                    function t() {
                        (0, r.default)(this, t), this.commandName = "bold", this.CSS = {
                            button: "ce-inline-tool",
                            buttonActive: "ce-inline-tool--active",
                            buttonModifier: "ce-inline-tool--bold"
                        }, this.nodes = {
                            button: void 0
                        };
                    }
                    return (0, i.default)(t, [
                        {
                            key: "render",
                            value: function() {
                                return this.nodes.button = document.createElement("button"), this.nodes.button.type = "button", this.nodes.button.classList.add(this.CSS.button, this.CSS.buttonModifier), this.nodes.button.appendChild(a.default.svg("bold", 12, 14)), this.nodes.button;
                            }
                        },
                        {
                            key: "surround",
                            value: function(t) {
                                document.execCommand(this.commandName);
                            }
                        },
                        {
                            key: "checkState",
                            value: function(t) {
                                var e = document.queryCommandState(this.commandName);
                                return this.nodes.button.classList.toggle(this.CSS.buttonActive, e), e;
                            }
                        },
                        {
                            key: "shortcut",
                            get: function() {
                                return "CMD+B";
                            }
                        }
                    ], [
                        {
                            key: "sanitize",
                            get: function() {
                                return {
                                    b: {}
                                };
                            }
                        }
                    ]), t;
                }();
                o.default = l, l.displayName = "BoldInlineTool", l.isInline = !0, l.title = "Bold", t579.exports = e373.default;
            }) ? o221.apply(e373, r130) : o221) || (t579.exports = i126);
        },
        function(t580, e374, n) {
            var o222, r131, i127;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r131 = [
                e374,
                n(2),
                n(3),
                n(14)
            ], void 0 === (i127 = "function" == typeof (o222 = function(o, r, i, a) {
                "use strict";
                var s = n(1);
                Object.defineProperty(o, "__esModule", {
                    value: !0
                }), o.default = void 0, r = s(r), i = s(i), a = s(a);
                var l = function() {
                    function t() {
                        (0, r.default)(this, t), this.commandName = "italic", this.CSS = {
                            button: "ce-inline-tool",
                            buttonActive: "ce-inline-tool--active",
                            buttonModifier: "ce-inline-tool--italic"
                        }, this.nodes = {
                            button: null
                        };
                    }
                    return (0, i.default)(t, [
                        {
                            key: "render",
                            value: function() {
                                return this.nodes.button = document.createElement("button"), this.nodes.button.type = "button", this.nodes.button.classList.add(this.CSS.button, this.CSS.buttonModifier), this.nodes.button.appendChild(a.default.svg("italic", 4, 11)), this.nodes.button;
                            }
                        },
                        {
                            key: "surround",
                            value: function(t) {
                                document.execCommand(this.commandName);
                            }
                        },
                        {
                            key: "checkState",
                            value: function(t) {
                                var e = document.queryCommandState(this.commandName);
                                return this.nodes.button.classList.toggle(this.CSS.buttonActive, e), e;
                            }
                        },
                        {
                            key: "shortcut",
                            get: function() {
                                return "CMD+I";
                            }
                        }
                    ], [
                        {
                            key: "sanitize",
                            get: function() {
                                return {
                                    i: {}
                                };
                            }
                        }
                    ]), t;
                }();
                o.default = l, l.displayName = "ItalicInlineTool", l.isInline = !0, l.title = "Italic", t580.exports = e374.default;
            }) ? o222.apply(e374, r131) : o222) || (t580.exports = i127);
        },
        function(t581, e375, n272) {
            var o223, r132, i128;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r132 = [
                e375,
                n272(2),
                n272(3),
                n272(25),
                n272(14),
                n272(7)
            ], void 0 === (i128 = "function" == typeof (o223 = function(o224, r, i, a, s, l) {
                "use strict";
                var c = n272(8), u = n272(1);
                Object.defineProperty(o224, "__esModule", {
                    value: !0
                }), o224.default = void 0, r = u(r), i = u(i), a = u(a), s = u(s), l = c(l);
                var f = function() {
                    function t582(e) {
                        var n = e.api;
                        (0, r.default)(this, t582), this.commandLink = "createLink", this.commandUnlink = "unlink", this.ENTER_KEY = 13, this.CSS = {
                            button: "ce-inline-tool",
                            buttonActive: "ce-inline-tool--active",
                            buttonModifier: "ce-inline-tool--link",
                            buttonUnlink: "ce-inline-tool--unlink",
                            input: "ce-inline-tool-input",
                            inputShowed: "ce-inline-tool-input--showed"
                        }, this.nodes = {
                            button: null,
                            input: null
                        }, this.inputOpened = !1, this.toolbar = n.toolbar, this.inlineToolbar = n.inlineToolbar, this.notifier = n.notifier, this.i18n = n.i18n, this.selection = new a.default;
                    }
                    return (0, i.default)(t582, [
                        {
                            key: "render",
                            value: function() {
                                return this.nodes.button = document.createElement("button"), this.nodes.button.type = "button", this.nodes.button.classList.add(this.CSS.button, this.CSS.buttonModifier), this.nodes.button.appendChild(s.default.svg("link", 14, 10)), this.nodes.button.appendChild(s.default.svg("unlink", 15, 11)), this.nodes.button;
                            }
                        },
                        {
                            key: "renderActions",
                            value: function() {
                                var t = this;
                                return this.nodes.input = document.createElement("input"), this.nodes.input.placeholder = this.i18n.t("Add a link"), this.nodes.input.classList.add(this.CSS.input), this.nodes.input.addEventListener("keydown", function(e) {
                                    e.keyCode === t.ENTER_KEY && t.enterPressed(e);
                                }), this.nodes.input;
                            }
                        },
                        {
                            key: "surround",
                            value: function(t) {
                                if (t) {
                                    this.inputOpened ? (this.selection.restore(), this.selection.removeFakeBackground()) : (this.selection.setFakeBackground(), this.selection.save());
                                    var e = this.selection.findParentTag("A");
                                    if (e) return this.selection.expandToTag(e), this.unlink(), this.closeActions(), this.checkState(), void this.toolbar.close();
                                }
                                this.toggleActions();
                            }
                        },
                        {
                            key: "checkState",
                            value: function(t) {
                                var e = this.selection.findParentTag("A");
                                if (e) {
                                    this.nodes.button.classList.add(this.CSS.buttonUnlink), this.nodes.button.classList.add(this.CSS.buttonActive), this.openActions();
                                    var n = e.getAttribute("href");
                                    this.nodes.input.value = "null" !== n ? n : "", this.selection.save();
                                } else this.nodes.button.classList.remove(this.CSS.buttonUnlink), this.nodes.button.classList.remove(this.CSS.buttonActive);
                                return !!e;
                            }
                        },
                        {
                            key: "clear",
                            value: function() {
                                this.closeActions();
                            }
                        },
                        {
                            key: "toggleActions",
                            value: function() {
                                this.inputOpened ? this.closeActions(!1) : this.openActions(!0);
                            }
                        },
                        {
                            key: "openActions",
                            value: function() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                this.nodes.input.classList.add(this.CSS.inputShowed), t && this.nodes.input.focus(), this.inputOpened = !0;
                            }
                        },
                        {
                            key: "closeActions",
                            value: function() {
                                var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                                if (this.selection.isFakeBackgroundEnabled) {
                                    var e = new a.default;
                                    e.save(), this.selection.restore(), this.selection.removeFakeBackground(), e.restore();
                                }
                                this.nodes.input.classList.remove(this.CSS.inputShowed), this.nodes.input.value = "", t && this.selection.clearSaved(), this.inputOpened = !1;
                            }
                        },
                        {
                            key: "enterPressed",
                            value: function(t) {
                                var e = this.nodes.input.value || "";
                                return e.trim() ? this.validateURL(e) ? (e = this.prepareLink(e), this.selection.restore(), this.selection.removeFakeBackground(), this.insertLink(e), t.preventDefault(), t.stopPropagation(), t.stopImmediatePropagation(), this.selection.collapseToEnd(), void this.inlineToolbar.close()) : (this.notifier.show({
                                    message: "Pasted link is not valid.",
                                    style: "error"
                                }), void l.log("Incorrect Link pasted", "warn", e)) : (this.selection.restore(), this.unlink(), t.preventDefault(), void this.closeActions());
                            }
                        },
                        {
                            key: "validateURL",
                            value: function(t) {
                                return !/\s/.test(t);
                            }
                        },
                        {
                            key: "prepareLink",
                            value: function(t) {
                                return t = t.trim(), t = this.addProtocol(t);
                            }
                        },
                        {
                            key: "addProtocol",
                            value: function(t) {
                                if (/^(\w+):(\/\/)?/.test(t)) return t;
                                var e = /^\/[^/\s]/.test(t), n = "#" === t.substring(0, 1), o = /^\/\/[^/\s]/.test(t);
                                return e || n || o || (t = "http://" + t), t;
                            }
                        },
                        {
                            key: "insertLink",
                            value: function(t) {
                                var e = this.selection.findParentTag("A");
                                e && this.selection.expandToTag(e), document.execCommand(this.commandLink, !1, t);
                            }
                        },
                        {
                            key: "unlink",
                            value: function() {
                                document.execCommand(this.commandUnlink);
                            }
                        },
                        {
                            key: "shortcut",
                            get: function() {
                                return "CMD+K";
                            }
                        }
                    ], [
                        {
                            key: "sanitize",
                            get: function() {
                                return {
                                    a: {
                                        href: !0,
                                        target: "_blank",
                                        rel: "nofollow"
                                    }
                                };
                            }
                        }
                    ]), t582;
                }();
                o224.default = f, f.displayName = "LinkInlineTool", f.isInline = !0, f.title = "Link", t581.exports = e375.default;
            }) ? o223.apply(e375, r132) : o223) || (t581.exports = i128);
        },
        function(t583, e376, n273) {
            var o225, r133, i129;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r133 = [
                e376,
                n273(2),
                n273(3),
                n273(14)
            ], void 0 === (i129 = "function" == typeof (o225 = function(o226, r134, i, a) {
                "use strict";
                var s = n273(1);
                Object.defineProperty(o226, "__esModule", {
                    value: !0
                }), o226.default = void 0, r134 = s(r134), i = s(i), a = s(a);
                var l = function() {
                    function t584(e) {
                        var n = e.data, o = e.api;
                        (0, r134.default)(this, t584), this.CSS = {
                            wrapper: "ce-stub",
                            info: "ce-stub__info",
                            title: "ce-stub__title",
                            subtitle: "ce-stub__subtitle"
                        }, this.api = o, this.title = n.title || this.api.i18n.t("Error"), this.subtitle = this.api.i18n.t("The block can not be displayed correctly."), this.savedData = n.savedData, this.wrapper = this.make();
                    }
                    return (0, i.default)(t584, [
                        {
                            key: "render",
                            value: function() {
                                return this.wrapper;
                            }
                        },
                        {
                            key: "save",
                            value: function() {
                                return this.savedData;
                            }
                        },
                        {
                            key: "make",
                            value: function() {
                                var t = a.default.make("div", this.CSS.wrapper), e = a.default.svg("sad-face", 52, 52), n = a.default.make("div", this.CSS.info), o = a.default.make("div", this.CSS.title, {
                                    textContent: this.title
                                }), r = a.default.make("div", this.CSS.subtitle, {
                                    textContent: this.subtitle
                                });
                                return t.appendChild(e), n.appendChild(o), n.appendChild(r), t.appendChild(n), t;
                            }
                        }
                    ]), t584;
                }();
                o226.default = l, l.displayName = "Stub", l.isReadOnlySupported = !0, t583.exports = e376.default;
            }) ? o225.apply(e376, r133) : o225) || (t583.exports = i129);
        },
        function(t585, e377, n274) {
            var o227, r135, i130;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r135 = [
                e377,
                n274(2),
                n274(3),
                n274(68),
                n274(395),
                n274(396),
                n274(397)
            ], void 0 === (i130 = "function" == typeof (o227 = function(o228, r136, i131, a, s, l, c) {
                "use strict";
                var u = n274(1);
                Object.defineProperty(o228, "__esModule", {
                    value: !0
                }), o228.default = void 0, r136 = u(r136), i131 = u(i131), s = u(s), l = u(l), c = u(c);
                var f = function(t, e) {
                    var n = {};
                    for(var o in t)Object.prototype.hasOwnProperty.call(t, o) && e.indexOf(o) < 0 && (n[o] = t[o]);
                    if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
                        var r = 0;
                        for(o = Object.getOwnPropertySymbols(t); r < o.length; r++)e.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(t, o[r]) && (n[o[r]] = t[o[r]]);
                    }
                    return n;
                }, d = function() {
                    function t586(e, n, o) {
                        (0, r136.default)(this, t586), this.api = o, this.config = e, this.editorConfig = n;
                    }
                    return (0, i131.default)(t586, [
                        {
                            key: "get",
                            value: function(t) {
                                var e = this.config[t], n = e.class, o = e.isInternal, r = void 0 !== o && o, i = f(e, [
                                    "class",
                                    "isInternal"
                                ]);
                                return new (this.getConstructor(n))({
                                    name: t,
                                    constructable: n,
                                    config: i,
                                    api: this.api,
                                    isDefault: t === this.editorConfig.defaultBlock,
                                    defaultPlaceholder: this.editorConfig.placeholder,
                                    isInternal: r
                                });
                            }
                        },
                        {
                            key: "getConstructor",
                            value: function(t) {
                                switch(!0){
                                    case t[a.InternalInlineToolSettings.IsInline]:
                                        return s.default;
                                    case t[a.InternalTuneSettings.IsTune]:
                                        return l.default;
                                    default:
                                        return c.default;
                                }
                            }
                        }
                    ]), t586;
                }();
                o228.default = d, d.displayName = "ToolsFactory", t585.exports = e377.default;
            }) ? o227.apply(e377, r135) : o227) || (t585.exports = i130);
        },
        function(t587, e378, n275) {
            var o229, r137, i132;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r137 = [
                e378,
                n275(2),
                n275(3),
                n275(5),
                n275(6),
                n275(4),
                n275(68)
            ], void 0 === (i132 = "function" == typeof (o229 = function(o230, r, i, a, s, l, c) {
                "use strict";
                var u = n275(8), f = n275(1);
                function d() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o230, "__esModule", {
                    value: !0
                }), o230.default = void 0, r = f(r), i = f(i), a = f(a), s = f(s), l = f(l);
                var p = function(t588) {
                    (0, a.default)(o231, t588);
                    var e, n276 = (e = o231, function() {
                        var t, n = (0, l.default)(e);
                        if (d()) {
                            var o = (0, l.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, s.default)(this, t);
                    });
                    function o231() {
                        var t;
                        return (0, r.default)(this, o231), (t = n276.apply(this, arguments)).type = c.ToolType.Inline, t;
                    }
                    return (0, i.default)(o231, [
                        {
                            key: "create",
                            value: function() {
                                return new this.constructable({
                                    api: this.api.getMethodsForTool(this),
                                    config: this.settings
                                });
                            }
                        },
                        {
                            key: "title",
                            get: function() {
                                return this.constructable[c.InternalInlineToolSettings.Title];
                            }
                        }
                    ]), o231;
                }((c = u(c)).default);
                o230.default = p, p.displayName = "InlineTool", t587.exports = e378.default;
            }) ? o229.apply(e378, r137) : o229) || (t587.exports = i132);
        },
        function(t589, e379, n277) {
            var o232, r138, i133;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r138 = [
                e379,
                n277(2),
                n277(3),
                n277(5),
                n277(6),
                n277(4),
                n277(68)
            ], void 0 === (i133 = "function" == typeof (o232 = function(o233, r, i, a, s, l, c) {
                "use strict";
                var u = n277(8), f = n277(1);
                function d() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o233, "__esModule", {
                    value: !0
                }), o233.default = void 0, r = f(r), i = f(i), a = f(a), s = f(s), l = f(l);
                var p = function(t590) {
                    (0, a.default)(o234, t590);
                    var e380, n278 = (e380 = o234, function() {
                        var t, n = (0, l.default)(e380);
                        if (d()) {
                            var o = (0, l.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, s.default)(this, t);
                    });
                    function o234() {
                        var t;
                        return (0, r.default)(this, o234), (t = n278.apply(this, arguments)).type = c.ToolType.Tune, t;
                    }
                    return (0, i.default)(o234, [
                        {
                            key: "create",
                            value: function(t, e) {
                                return new this.constructable({
                                    api: this.api.getMethodsForTool(this),
                                    config: this.settings,
                                    block: e,
                                    data: t
                                });
                            }
                        }
                    ]), o234;
                }((c = u(c)).default);
                o233.default = p, p.displayName = "BlockTune", t589.exports = e379.default;
            }) ? o232.apply(e379, r138) : o232) || (t589.exports = i133);
        },
        function(t591, e381, n279) {
            var o235, r139, i134;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r139 = [
                e381,
                n279(2),
                n279(3),
                n279(113),
                n279(5),
                n279(6),
                n279(4),
                n279(59),
                n279(68),
                n279(7),
                n279(185)
            ], void 0 === (i134 = "function" == typeof (o235 = function(o236, r140, i135, a52, s43, l, c, u, f, d, p) {
                "use strict";
                var h = n279(8), v = n279(1);
                function g() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (t) {
                        return !1;
                    }
                }
                Object.defineProperty(o236, "__esModule", {
                    value: !0
                }), o236.default = void 0, r140 = v(r140), i135 = v(i135), a52 = v(a52), s43 = v(s43), l = v(l), c = v(c), u = v(u), f = h(f), d = h(d), p = v(p);
                var y = function(t, e, n, o) {
                    var r, i = arguments.length, a = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                    if ("object" === ("undefined" == typeof Reflect ? "undefined" : (0, u.default)(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
                    else for(var s = t.length - 1; s >= 0; s--)(r = t[s]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, n, a) : r(e, n)) || a);
                    return i > 3 && a && Object.defineProperty(e, n, a), a;
                }, b = function(t592) {
                    (0, s43.default)(o237, t592);
                    var e382, n280 = (e382 = o237, function() {
                        var t, n = (0, c.default)(e382);
                        if (g()) {
                            var o = (0, c.default)(this).constructor;
                            t = Reflect.construct(n, arguments, o);
                        } else t = n.apply(this, arguments);
                        return (0, l.default)(this, t);
                    });
                    function o237() {
                        var t;
                        return (0, r140.default)(this, o237), (t = n280.apply(this, arguments)).type = f.ToolType.Block, t.inlineTools = new p.default, t.tunes = new p.default, t;
                    }
                    return (0, i135.default)(o237, [
                        {
                            key: "create",
                            value: function(t, e, n) {
                                return new this.constructable({
                                    data: t,
                                    block: e,
                                    readOnly: n,
                                    api: this.api.getMethodsForTool(this),
                                    config: this.settings
                                });
                            }
                        },
                        {
                            key: "isReadOnlySupported",
                            get: function() {
                                return !0 === this.constructable[f.InternalBlockToolSettings.IsReadOnlySupported];
                            }
                        },
                        {
                            key: "isLineBreaksEnabled",
                            get: function() {
                                return this.constructable[f.InternalBlockToolSettings.IsEnabledLineBreaks];
                            }
                        },
                        {
                            key: "toolbox",
                            get: function() {
                                var t = this.constructable[f.InternalBlockToolSettings.Toolbox], e383 = this.config[f.UserSettings.Toolbox];
                                if (!d.isEmpty(t) && !1 !== e383) return e383 ? Array.isArray(t) ? Array.isArray(e383) ? e383.map(function(e, n) {
                                    var o = t[n];
                                    return o ? Object.assign(Object.assign({}, o), e) : e;
                                }) : [
                                    e383
                                ] : Array.isArray(e383) ? e383 : [
                                    Object.assign(Object.assign({}, t), e383)
                                ] : Array.isArray(t) ? t : [
                                    t
                                ];
                            }
                        },
                        {
                            key: "conversionConfig",
                            get: function() {
                                return this.constructable[f.InternalBlockToolSettings.ConversionConfig];
                            }
                        },
                        {
                            key: "enabledInlineTools",
                            get: function() {
                                return this.config[f.UserSettings.EnabledInlineTools] || !1;
                            }
                        },
                        {
                            key: "enabledBlockTunes",
                            get: function() {
                                return this.config[f.UserSettings.EnabledBlockTunes];
                            }
                        },
                        {
                            key: "pasteConfig",
                            get: function() {
                                return this.constructable[f.InternalBlockToolSettings.PasteConfig] || {};
                            }
                        },
                        {
                            key: "sanitizeConfig",
                            get: function() {
                                var t = (0, a52.default)((0, c.default)(o237.prototype), "sanitizeConfig", this), e = this.baseSanitizeConfig;
                                if (d.isEmpty(t)) return e;
                                var n = {};
                                for(var r in t)if (Object.prototype.hasOwnProperty.call(t, r)) {
                                    var i = t[r];
                                    d.isObject(i) ? n[r] = Object.assign({}, e, i) : n[r] = i;
                                }
                                return n;
                            }
                        },
                        {
                            key: "baseSanitizeConfig",
                            get: function() {
                                var t = {};
                                return Array.from(this.inlineTools.values()).forEach(function(e) {
                                    return Object.assign(t, e.sanitizeConfig);
                                }), Array.from(this.tunes.values()).forEach(function(e) {
                                    return Object.assign(t, e.sanitizeConfig);
                                }), t;
                            }
                        }
                    ]), o237;
                }(f.default);
                o236.default = b, b.displayName = "BlockTool", y([
                    d.cacheable
                ], b.prototype, "sanitizeConfig", null), y([
                    d.cacheable
                ], b.prototype, "baseSanitizeConfig", null), t591.exports = e381.default;
            }) ? o235.apply(e381, r139) : o235) || (t591.exports = i134);
        },
        function(t593, e384, n281) {
            var o238, r141, i136;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r141 = [
                e384,
                n281(2),
                n281(3),
                n281(14)
            ], void 0 === (i136 = "function" == typeof (o238 = function(o239, r142, i137, a53) {
                "use strict";
                var s44 = n281(1);
                Object.defineProperty(o239, "__esModule", {
                    value: !0
                }), o239.default = void 0, r142 = s44(r142), i137 = s44(i137), a53 = s44(a53);
                var l = function() {
                    function t594(e) {
                        var n = e.api;
                        (0, r142.default)(this, t594), this.CSS = {
                            button: "ce-settings__button",
                            wrapper: "ce-tune-move-down",
                            animation: "wobble"
                        }, this.api = n;
                    }
                    return (0, i137.default)(t594, [
                        {
                            key: "render",
                            value: function() {
                                var t = this, e = a53.default.make("div", [
                                    this.CSS.button,
                                    this.CSS.wrapper
                                ], {});
                                return e.appendChild(a53.default.svg("arrow-down", 14, 14)), this.api.listeners.on(e, "click", function(n) {
                                    return t.handleClick(n, e);
                                }, !1), this.api.tooltip.onHover(e, this.api.i18n.t("Move down"), {
                                    hidingDelay: 300
                                }), e;
                            }
                        },
                        {
                            key: "handleClick",
                            value: function(t, e) {
                                var n = this, o = this.api.blocks.getCurrentBlockIndex(), r = this.api.blocks.getBlockByIndex(o + 1);
                                if (!r) return e.classList.add(this.CSS.animation), void window.setTimeout(function() {
                                    e.classList.remove(n.CSS.animation);
                                }, 500);
                                var i = r.holder, a = i.getBoundingClientRect(), s = Math.abs(window.innerHeight - i.offsetHeight);
                                a.top < window.innerHeight && (s = window.scrollY + i.offsetHeight), window.scrollTo(0, s), this.api.blocks.move(o + 1), this.api.toolbar.toggleBlockSettings(!0), this.api.tooltip.hide();
                            }
                        }
                    ]), t594;
                }();
                o239.default = l, l.displayName = "MoveDownTune", l.isTune = !0, t593.exports = e384.default;
            }) ? o238.apply(e384, r141) : o238) || (t593.exports = i136);
        },
        function(t595, e385, n282) {
            var o240, r143, i138;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r143 = [
                e385,
                n282(2),
                n282(3),
                n282(14)
            ], void 0 === (i138 = "function" == typeof (o240 = function(o241, r, i, a) {
                "use strict";
                var s = n282(1);
                Object.defineProperty(o241, "__esModule", {
                    value: !0
                }), o241.default = void 0, r = s(r), i = s(i), a = s(a);
                var l = function() {
                    function t596(e) {
                        var n = this, o = e.api;
                        (0, r.default)(this, t596), this.CSS = {
                            button: "ce-settings__button",
                            buttonDelete: "ce-settings__button--delete",
                            buttonConfirm: "ce-settings__button--confirm"
                        }, this.nodes = {
                            button: null
                        }, this.api = o, this.resetConfirmation = function() {
                            n.setConfirmation(!1);
                        };
                    }
                    return (0, i.default)(t596, [
                        {
                            key: "render",
                            value: function() {
                                var t = this;
                                return this.nodes.button = a.default.make("div", [
                                    this.CSS.button,
                                    this.CSS.buttonDelete
                                ], {}), this.nodes.button.appendChild(a.default.svg("cross", 12, 12)), this.api.listeners.on(this.nodes.button, "click", function(e) {
                                    return t.handleClick(e);
                                }, !1), this.api.tooltip.onHover(this.nodes.button, this.api.i18n.t("Delete"), {
                                    hidingDelay: 300
                                }), this.nodes.button;
                            }
                        },
                        {
                            key: "handleClick",
                            value: function(t) {
                                this.needConfirmation ? (this.api.events.off("block-settings-closed", this.resetConfirmation), this.api.blocks.delete(), this.api.toolbar.close(), this.api.tooltip.hide(), t.stopPropagation()) : (this.setConfirmation(!0), this.api.events.on("block-settings-closed", this.resetConfirmation));
                            }
                        },
                        {
                            key: "setConfirmation",
                            value: function(t) {
                                this.needConfirmation = t, this.nodes.button.classList.add(this.CSS.buttonConfirm);
                            }
                        }
                    ]), t596;
                }();
                o241.default = l, l.displayName = "DeleteTune", l.isTune = !0, t595.exports = e385.default;
            }) ? o240.apply(e385, r143) : o240) || (t595.exports = i138);
        },
        function(t597, e386, n283) {
            var o242, r144, i139;
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r144 = [
                e386,
                n283(2),
                n283(3),
                n283(14)
            ], void 0 === (i139 = "function" == typeof (o242 = function(o243, r145, i140, a54) {
                "use strict";
                var s45 = n283(1);
                Object.defineProperty(o243, "__esModule", {
                    value: !0
                }), o243.default = void 0, r145 = s45(r145), i140 = s45(i140), a54 = s45(a54);
                var l33 = function() {
                    function t598(e) {
                        var n = e.api;
                        (0, r145.default)(this, t598), this.CSS = {
                            button: "ce-settings__button",
                            wrapper: "ce-tune-move-up",
                            animation: "wobble"
                        }, this.api = n;
                    }
                    return (0, i140.default)(t598, [
                        {
                            key: "render",
                            value: function() {
                                var t = this, e = a54.default.make("div", [
                                    this.CSS.button,
                                    this.CSS.wrapper
                                ], {});
                                return e.appendChild(a54.default.svg("arrow-up", 14, 14)), this.api.listeners.on(e, "click", function(n) {
                                    return t.handleClick(n, e);
                                }, !1), this.api.tooltip.onHover(e, this.api.i18n.t("Move up"), {
                                    hidingDelay: 300
                                }), e;
                            }
                        },
                        {
                            key: "handleClick",
                            value: function(t, e) {
                                var n = this, o = this.api.blocks.getCurrentBlockIndex(), r = this.api.blocks.getBlockByIndex(o), i = this.api.blocks.getBlockByIndex(o - 1);
                                if (0 === o || !r || !i) return e.classList.add(this.CSS.animation), void window.setTimeout(function() {
                                    e.classList.remove(n.CSS.animation);
                                }, 500);
                                var a, s = r.holder, l = i.holder, c = s.getBoundingClientRect(), u = l.getBoundingClientRect();
                                a = u.top > 0 ? Math.abs(c.top) - Math.abs(u.top) : window.innerHeight - Math.abs(c.top) + Math.abs(u.top), window.scrollBy(0, -1 * a), this.api.blocks.move(o - 1), this.api.toolbar.toggleBlockSettings(!0), this.api.tooltip.hide();
                            }
                        }
                    ]), t598;
                }();
                o243.default = l33, l33.displayName = "MoveUpTune", l33.isTune = !0, t597.exports = e386.default;
            }) ? o242.apply(e386, r144) : o242) || (t597.exports = i139);
        },
        function(t, e, n) {
            "use strict";
            n.r(e), e.default = '<?xml version="1.0" encoding="utf-8"?>\n<svg xmlns="http://www.w3.org/2000/svg">\n<symbol id="arrow-down" viewBox="0 0 14 14">\n  <path transform="matrix(1 0 0 -1 0 14)" d="M8.024 4.1v8.6a1.125 1.125 0 0 1-2.25 0V4.1L2.18 7.695A1.125 1.125 0 1 1 .59 6.104L6.103.588c.44-.439 1.151-.439 1.59 0l5.516 5.516a1.125 1.125 0 0 1-1.59 1.59L8.023 4.1z"/>\n\n</symbol>\n<symbol id="arrow-up" viewBox="0 0 14 14">\n    <path d="M8.024 4.1v8.6a1.125 1.125 0 0 1-2.25 0V4.1L2.18 7.695A1.125 1.125 0 1 1 .59 6.104L6.103.588c.44-.439 1.151-.439 1.59 0l5.516 5.516a1.125 1.125 0 0 1-1.59 1.59L8.023 4.1z"/>\n\n</symbol>\n<symbol id="bold" viewBox="0 0 12 14"><path d="M5.997 14H1.72c-.618 0-1.058-.138-1.323-.415C.132 13.308 0 12.867 0 12.262V1.738C0 1.121.135.676.406.406.676.136 1.114 0 1.719 0h4.536c.669 0 1.248.041 1.738.124.49.083.93.242 1.318.478a3.458 3.458 0 0 1 1.461 1.752c.134.366.2.753.2 1.16 0 1.401-.7 2.426-2.1 3.075 1.84.586 2.76 1.726 2.76 3.42 0 .782-.2 1.487-.602 2.114a3.61 3.61 0 0 1-1.623 1.39 5.772 5.772 0 0 1-1.471.377c-.554.073-1.2.11-1.939.11zm-.21-6.217h-2.95v4.087h3.046c1.916 0 2.874-.69 2.874-2.072 0-.707-.248-1.22-.745-1.537-.496-.319-1.238-.478-2.225-.478zM2.837 2.13v3.619h2.597c.707 0 1.252-.067 1.638-.2.385-.134.68-.389.883-.765.16-.267.239-.566.239-.897 0-.707-.252-1.176-.755-1.409-.503-.232-1.27-.348-2.301-.348H2.836z"/>\n</symbol>\n<symbol id="cross" viewBox="0 0 237 237">\n  <path transform="rotate(45 280.675 51.325)" d="M191 191V73c0-5.523 4.477-10 10-10h25c5.523 0 10 4.477 10 10v118h118c5.523 0 10 4.477 10 10v25c0 5.523-4.477 10-10 10H236v118c0 5.523-4.477 10-10 10h-25c-5.523 0-10-4.477-10-10V236H73c-5.523 0-10-4.477-10-10v-25c0-5.523 4.477-10 10-10h118z"/>\n\n</symbol>\n<symbol id="dots" viewBox="0 0 16 16">\n  <g transform="translate(4 1.5)" fill-rule="evenodd">\n    <circle cx="1.3" cy="1.3" r="1.3"/>\n    <circle cx="6.5" cy="1.3" r="1.3"/>\n    <circle cx="6.5" cy="6.5" r="1.3"/>\n    <circle cx="1.3" cy="6.5" r="1.3"/>\n    <circle cx="6.5" cy="11.7" r="1.3"/>\n    <circle cx="1.3" cy="11.7" r="1.3"/>\n  </g>\n\n</symbol>\n<symbol id="italic" viewBox="0 0 4 11">\n    <path d="M3.289 4.17L2.164 9.713c-.078.384-.238.674-.48.87-.243.198-.52.296-.831.296-.312 0-.545-.1-.699-.302-.153-.202-.192-.49-.116-.864L1.15 4.225c.077-.38.232-.665.466-.857a1.25 1.25 0 01.818-.288c.312 0 .55.096.713.288.163.192.21.46.141.801zm-.667-2.09c-.295 0-.53-.09-.706-.273-.176-.181-.233-.439-.173-.77.055-.302.207-.55.457-.745C2.45.097 2.716 0 3 0c.273 0 .5.088.68.265.179.176.238.434.177.771-.06.327-.21.583-.45.767-.24.185-.502.277-.785.277z"/>\n\n</symbol>\n<symbol id="link" viewBox="0 0 14 10">\n  <path d="M6 0v2H5a3 3 0 000 6h1v2H5A5 5 0 115 0h1zm2 0h1a5 5 0 110 10H8V8h1a3 3 0 000-6H8V0zM5 4h4a1 1 0 110 2H5a1 1 0 110-2z"/>\n\n</symbol>\n<symbol id="plus" viewBox="0 0 16 16">\n  <g transform="translate(1 1.5)" fill-rule="evenodd">\n    <rect x="6" width="2" height="13" rx="1"/>\n    <rect x=".5" y="5.5" width="13" height="2" rx="1"/>\n  </g>\n\n</symbol>\n<symbol id="sad-face" viewBox="0 0 52 52">\n    <path fill="#D76B6B" fill-rule="nonzero" d="M26 52C11.64 52 0 40.36 0 26S11.64 0 26 0s26 11.64 26 26-11.64 26-26 26zm0-3.25c12.564 0 22.75-10.186 22.75-22.75S38.564 3.25 26 3.25 3.25 13.436 3.25 26 13.436 48.75 26 48.75zM15.708 33.042a2.167 2.167 0 1 1 0-4.334 2.167 2.167 0 0 1 0 4.334zm23.834 0a2.167 2.167 0 1 1 0-4.334 2.167 2.167 0 0 1 0 4.334zm-15.875 5.452a1.083 1.083 0 1 1-1.834-1.155c1.331-2.114 3.49-3.179 6.334-3.179 2.844 0 5.002 1.065 6.333 3.18a1.083 1.083 0 1 1-1.833 1.154c-.913-1.45-2.366-2.167-4.5-2.167s-3.587.717-4.5 2.167z"/>\n\n</symbol>\n<symbol id="search" viewBox="0 0 16 16">\n  <path d="M12.711 2.18a7.448 7.448 0 0 1 .79 9.603l2.143 2.144a1.214 1.214 0 1 1-1.717 1.717L11.783 13.5a7.446 7.446 0 1 1 .928-11.32ZM11.39 3.61a5.5 5.5 0 1 0-7.778 7.78 5.5 5.5 0 0 0 7.778-7.78Z" fill-rule="evenodd"/>\n\n</symbol>\n<symbol id="toggler-down">\n  <path d="M6.5 9.294a.792.792 0 01-.562-.232L2.233 5.356a.794.794 0 011.123-1.123L6.5 7.377l3.144-3.144a.794.794 0 011.123 1.123L7.062 9.062a.792.792 0 01-.562.232z"/>\n\n</symbol>\n<symbol id="unlink" viewBox="0 0 15 11">\n  <path d="M13.073 2.099l-1.448 1.448A3 3 0 009 2H8V0h1c1.68 0 3.166.828 4.073 2.099zM6.929 4l-.879.879L7.172 6H5a1 1 0 110-2h1.929zM6 0v2H5a3 3 0 100 6h1v2H5A5 5 0 115 0h1zm6.414 7l2.122 2.121-1.415 1.415L11 8.414l-2.121 2.122L7.464 9.12 9.586 7 7.464 4.879 8.88 3.464 11 5.586l2.121-2.122 1.415 1.415L12.414 7z"/>\n\n</symbol></svg>';
        },
        function(t, e) {
            t.exports = '.codex-editor{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;z-index:1}.codex-editor .hide,.codex-editor__redactor--hidden{display:none}.codex-editor__redactor [contenteditable]:empty:after{content:"\\feff "}@media (min-width:651px){.codex-editor--narrow .codex-editor__redactor{margin-right:50px}}@media (min-width:651px){.codex-editor--narrow.codex-editor--rtl .codex-editor__redactor{margin-left:50px;margin-right:0}}@media (min-width:651px){.codex-editor--narrow .ce-toolbar__actions{right:-5px}}.codex-editor__loader{position:relative;height:30vh}.codex-editor__loader:before{content:"";position:absolute;left:50%;top:50%;width:30px;height:30px;margin-top:-15px;margin-left:-15px;border-radius:50%;border:2px solid rgba(201,201,204,.48);border-top-color:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-animation:editor-loader-spin .8s linear infinite;animation:editor-loader-spin .8s linear infinite;will-change:transform}.codex-editor-copyable{position:absolute;height:1px;width:1px;top:-400%;opacity:.001}.codex-editor-overlay{position:fixed;top:0;left:0;right:0;bottom:0;z-index:999;pointer-events:none;overflow:hidden}.codex-editor-overlay__container{position:relative;pointer-events:auto;z-index:0}.codex-editor-overlay__rectangle{position:absolute;pointer-events:none;background-color:rgba(46,170,220,.2);border:1px solid transparent}.codex-editor svg{fill:currentColor;vertical-align:middle;max-height:100%}::-moz-selection{background-color:#d4ecff}::selection{background-color:#d4ecff}.codex-editor--toolbox-opened [contentEditable=true][data-placeholder]:focus:before{opacity:0!important}@-webkit-keyframes editor-loader-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes editor-loader-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.ce-scroll-locked{overflow:hidden}.ce-scroll-locked--hard{overflow:hidden;top:calc(-1*var(--window-scroll-offset));position:fixed;width:100%}.ce-toolbar{position:absolute;left:0;right:0;top:0;-webkit-transition:opacity .1s ease;transition:opacity .1s ease;will-change:opacity,top;display:none}.ce-toolbar--opened{display:block}.ce-toolbar__content{max-width:650px;margin:0 auto;position:relative}.ce-toolbar__plus{color:#1d202b;cursor:pointer;width:26px;height:26px;border-radius:7px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}@media (max-width:650px){.ce-toolbar__plus{width:36px;height:36px}}@media (hover:hover){.ce-toolbar__plus:hover{background-color:#eff2f5}}.ce-toolbar__plus{-ms-flex-negative:0;flex-shrink:0}.ce-toolbar__plus--active{background-color:#eff2f5;-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.ce-toolbar__plus-shortcut{opacity:.6;word-spacing:-2px;margin-top:5px}@media (max-width:650px){.ce-toolbar__plus{position:absolute;background-color:#fff;border:1px solid #e8e8eb;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px rgba(13,20,33,.13);border-radius:6px;z-index:2}}@media (max-width:650px) and (max-width:650px){.ce-toolbar__plus{-webkit-box-shadow:0 8px 6px -6px rgba(33,48,73,.19);box-shadow:0 8px 6px -6px rgba(33,48,73,.19);border-bottom-color:#c7c7c7}}@media (max-width:650px){.ce-toolbar__plus{position:static}.ce-toolbar__plus--left-oriented:before{left:15px;margin-left:0}.ce-toolbar__plus--right-oriented:before{left:auto;right:15px;margin-left:0}}.ce-toolbar__actions{position:absolute;right:100%;opacity:0;display:-webkit-box;display:-ms-flexbox;display:flex;padding-right:5px}.ce-toolbar__actions--opened{opacity:1}@media (max-width:650px){.ce-toolbar__actions{right:auto}}.ce-toolbar__settings-btn{color:#1d202b;width:26px;height:26px;border-radius:7px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}@media (max-width:650px){.ce-toolbar__settings-btn{width:36px;height:36px}}@media (hover:hover){.ce-toolbar__settings-btn:hover{background-color:#eff2f5}}.ce-toolbar__settings-btn{margin-left:5px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ce-toolbar__settings-btn--active{background-color:#eff2f5;-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@media (min-width:651px){.ce-toolbar__settings-btn{width:18px}}.ce-toolbar__settings-btn--hidden{display:none}@media (max-width:650px){.ce-toolbar__settings-btn{position:absolute;background-color:#fff;border:1px solid #e8e8eb;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px rgba(13,20,33,.13);border-radius:6px;z-index:2}}@media (max-width:650px) and (max-width:650px){.ce-toolbar__settings-btn{-webkit-box-shadow:0 8px 6px -6px rgba(33,48,73,.19);box-shadow:0 8px 6px -6px rgba(33,48,73,.19);border-bottom-color:#c7c7c7}}@media (max-width:650px){.ce-toolbar__settings-btn{position:static}.ce-toolbar__settings-btn--left-oriented:before{left:15px;margin-left:0}.ce-toolbar__settings-btn--right-oriented:before{left:auto;right:15px;margin-left:0}}@media (min-width:651px){.codex-editor--narrow .ce-toolbar__plus{left:5px}}.ce-toolbox{--gap:8px}@media (min-width:651px){.ce-toolbox{position:absolute;top:calc(26px + var(--gap));left:0}.ce-toolbox--opened-top{top:calc(-1*(var(--gap) + var(--popover-height)))}}@media (min-width:651px){.codex-editor--narrow .ce-toolbox{left:auto;right:0}.codex-editor--narrow .ce-toolbox .ce-popover{right:0}}.ce-inline-toolbar{position:absolute;background-color:#fff;border:1px solid #e8e8eb;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px rgba(13,20,33,.13);border-radius:6px;z-index:2}@media (max-width:650px){.ce-inline-toolbar{-webkit-box-shadow:0 8px 6px -6px rgba(33,48,73,.19);box-shadow:0 8px 6px -6px rgba(33,48,73,.19);border-bottom-color:#c7c7c7}}.ce-inline-toolbar{-webkit-transform:translateX(-50%) translateY(8px) scale(.9);transform:translateX(-50%) translateY(8px) scale(.9);opacity:0;visibility:hidden;-webkit-transition:opacity .25s ease,-webkit-transform .15s ease;transition:opacity .25s ease,-webkit-transform .15s ease;transition:transform .15s ease,opacity .25s ease;transition:transform .15s ease,opacity .25s ease,-webkit-transform .15s ease;will-change:transform,opacity;top:0;left:0;z-index:3}.ce-inline-toolbar--left-oriented:before{left:15px;margin-left:0}.ce-inline-toolbar--right-oriented:before{left:auto;right:15px;margin-left:0}.ce-inline-toolbar--showed{opacity:1;visibility:visible;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.ce-inline-toolbar--left-oriented{-webkit-transform:translateX(-23px) translateY(8px) scale(.9);transform:translateX(-23px) translateY(8px) scale(.9)}.ce-inline-toolbar--left-oriented.ce-inline-toolbar--showed{-webkit-transform:translateX(-23px);transform:translateX(-23px)}.ce-inline-toolbar--right-oriented{-webkit-transform:translateX(-100%) translateY(8px) scale(.9);transform:translateX(-100%) translateY(8px) scale(.9);margin-left:23px}.ce-inline-toolbar--right-oriented.ce-inline-toolbar--showed{-webkit-transform:translateX(-100%);transform:translateX(-100%)}.ce-inline-toolbar [hidden]{display:none!important}.ce-inline-toolbar__toggler-and-button-wrapper{width:100%;padding:0 6px}.ce-inline-toolbar__buttons,.ce-inline-toolbar__toggler-and-button-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex}.ce-inline-toolbar__dropdown{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;height:34px;padding:0 9px 0 10px;margin:0 6px 0 -6px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;border-right:1px solid rgba(201,201,204,.48)}.ce-inline-toolbar__dropdown:hover{background:#eff2f5}.ce-inline-toolbar__dropdown--hidden{display:none}.ce-inline-toolbar__dropdown-content{display:-webkit-box;display:-ms-flexbox;display:flex;font-weight:500;font-size:14px}.ce-inline-toolbar__dropdown-content svg{height:12px}.ce-inline-toolbar__dropdown .icon--toggler-down{margin-left:4px}.ce-inline-toolbar__shortcut{opacity:.6;word-spacing:-3px;margin-top:3px}.ce-inline-tool{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:34px;height:34px;line-height:34px;padding:0!important;text-align:center;border-radius:3px;cursor:pointer;border:0;outline:none;background-color:transparent;vertical-align:bottom;color:#000;margin:0}.ce-inline-tool:hover{background-color:#eff2f5}.ce-inline-tool{border-radius:0;line-height:normal;width:auto;padding:0 5px!important;min-width:24px}.ce-inline-tool--active{color:#388ae5}.ce-inline-tool--focused{-webkit-box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);background:rgba(34,186,255,.08)!important}.ce-inline-tool--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.ce-inline-tool:not(:last-of-type){margin-right:2px}.ce-inline-tool .icon{height:12px}.ce-inline-tool--link .icon--unlink,.ce-inline-tool--unlink .icon--link{display:none}.ce-inline-tool--unlink .icon--unlink{display:inline-block;margin-bottom:-1px}.ce-inline-tool-input{outline:none;border:0;border-radius:0 0 4px 4px;margin:0;font-size:13px;padding:10px;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;display:none;font-weight:500;border-top:1px solid rgba(201,201,204,.48)}.ce-inline-tool-input::-webkit-input-placeholder{color:#707684}.ce-inline-tool-input::-moz-placeholder{color:#707684}.ce-inline-tool-input:-ms-input-placeholder{color:#707684}.ce-inline-tool-input::-ms-input-placeholder{color:#707684}.ce-inline-tool-input::placeholder{color:#707684}.ce-inline-tool-input--showed{display:block}.ce-conversion-toolbar{position:absolute;background-color:#fff;border:1px solid #e8e8eb;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px rgba(13,20,33,.13);border-radius:6px;z-index:2}@media (max-width:650px){.ce-conversion-toolbar{-webkit-box-shadow:0 8px 6px -6px rgba(33,48,73,.19);box-shadow:0 8px 6px -6px rgba(33,48,73,.19);border-bottom-color:#c7c7c7}}.ce-conversion-toolbar{opacity:0;visibility:hidden;will-change:transform,opacity;-webkit-transition:opacity .1s ease,-webkit-transform .1s ease;transition:opacity .1s ease,-webkit-transform .1s ease;transition:transform .1s ease,opacity .1s ease;transition:transform .1s ease,opacity .1s ease,-webkit-transform .1s ease;-webkit-transform:translateY(-8px);transform:translateY(-8px);left:-1px;width:150px;margin-top:5px;-webkit-box-sizing:content-box;box-sizing:content-box}.ce-conversion-toolbar--left-oriented:before{left:15px;margin-left:0}.ce-conversion-toolbar--right-oriented:before{left:auto;right:15px;margin-left:0}.ce-conversion-toolbar--showed{opacity:1;visibility:visible;-webkit-transform:none;transform:none}.ce-conversion-toolbar [hidden]{display:none!important}.ce-conversion-toolbar__buttons{display:-webkit-box;display:-ms-flexbox;display:flex}.ce-conversion-toolbar__label{color:#707684;font-size:11px;font-weight:500;letter-spacing:.33px;padding:10px 10px 5px;text-transform:uppercase}.ce-conversion-tool{display:-webkit-box;display:-ms-flexbox;display:flex;padding:5px 10px;font-size:14px;line-height:20px;font-weight:500;cursor:pointer;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.ce-conversion-tool--hidden{display:none}.ce-conversion-tool--focused{-webkit-box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);background:rgba(34,186,255,.08)!important}.ce-conversion-tool--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.ce-conversion-tool:hover{background:#eff2f5}.ce-conversion-tool__icon{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;width:20px;height:20px;border:1px solid rgba(201,201,204,.48);border-radius:3px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-right:10px;background:#fff}.ce-conversion-tool__icon svg{width:11px;height:11px}.ce-conversion-tool--last{margin-right:0!important}.ce-conversion-tool--active{color:#388ae5!important;-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.ce-settings{position:absolute;background-color:#fff;border:1px solid #e8e8eb;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px rgba(13,20,33,.13);border-radius:6px;z-index:2}@media (max-width:650px){.ce-settings{-webkit-box-shadow:0 8px 6px -6px rgba(33,48,73,.19);box-shadow:0 8px 6px -6px rgba(33,48,73,.19);border-bottom-color:#c7c7c7}}.ce-settings{top:34px;left:0;min-width:114px;-webkit-box-sizing:content-box;box-sizing:content-box}.ce-settings--left-oriented:before{left:15px;margin-left:0}.ce-settings--right-oriented:before{left:auto;right:15px;margin-left:0}@media (max-width:650px){.ce-settings{bottom:40px;right:auto;top:auto}}.ce-settings:before{left:auto;right:12px}@media (max-width:650px){.ce-settings:before{bottom:-5px;top:auto}}.ce-settings{display:none}.ce-settings--opened{display:block;-webkit-animation-duration:.1s;animation-duration:.1s;-webkit-animation-name:panelShowing;animation-name:panelShowing}.ce-settings__plugin-zone:not(:empty){padding:3px 3px 0}.ce-settings__default-zone:not(:empty){padding:3px}.ce-settings__button{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:34px;height:34px;line-height:34px;padding:0!important;text-align:center;border-radius:3px;cursor:pointer;border:0;outline:none;background-color:transparent;vertical-align:bottom;color:#000;margin:0}.ce-settings__button:hover{background-color:#eff2f5}.ce-settings__button--active{color:#388ae5}.ce-settings__button--focused{-webkit-box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);background:rgba(34,186,255,.08)!important}.ce-settings__button--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.ce-settings__button:not(:nth-child(3n+3)){margin-right:3px}.ce-settings__button:nth-child(n+4){margin-top:3px}.ce-settings__button{line-height:32px}.ce-settings__button--disabled{cursor:not-allowed!important;opacity:.3}.ce-settings__button--selected{color:#388ae5}.ce-settings__button--delete{-webkit-transition:background-color .3s ease;transition:background-color .3s ease;will-change:background-color}.ce-settings__button--delete .icon{-webkit-transition:-webkit-transform .2s ease-out;transition:-webkit-transform .2s ease-out;transition:transform .2s ease-out;transition:transform .2s ease-out,-webkit-transform .2s ease-out;will-change:transform}.ce-settings__button--confirm{background-color:#e24a4a!important;color:#fff}.ce-settings__button--confirm:hover{background-color:#d54a4a!important}.ce-settings__button--confirm .icon{-webkit-transform:rotate(90deg);transform:rotate(90deg)}@-webkit-keyframes fade-in{0%{opacity:0}to{opacity:1}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}.ce-block{-webkit-animation:fade-in .3s ease;animation:fade-in .3s ease;-webkit-animation-fill-mode:none;-webkit-animation-fill-mode:initial;animation-fill-mode:none}.ce-block:first-of-type{margin-top:0}.ce-block--selected .ce-block__content{background:#e1f2ff}.ce-block--selected .ce-block__content [contenteditable]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ce-block--selected .ce-block__content .ce-stub,.ce-block--selected .ce-block__content img{opacity:.55}.ce-block--stretched .ce-block__content{max-width:none}.ce-block__content{position:relative;max-width:650px;margin:0 auto;-webkit-transition:background-color .15s ease;transition:background-color .15s ease}.ce-block--drop-target .ce-block__content:before{content:"";position:absolute;top:100%;left:-20px;margin-top:-1px;height:8px;width:8px;border:solid #388ae5;border-width:1px 1px 0 0;-webkit-transform-origin:right;transform-origin:right;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.ce-block--drop-target .ce-block__content:after{content:"";position:absolute;top:100%;height:1px;width:100%;color:#388ae5;background:repeating-linear-gradient(90deg,#388ae5,#388ae5 1px,#fff 0,#fff 6px)}.ce-block a{cursor:pointer;text-decoration:underline}.ce-block b{font-weight:700}.ce-block i{font-style:italic}@media (min-width:651px){.codex-editor--narrow .ce-block--focused{margin-right:-50px;padding-right:50px}}.wobble{-webkit-animation-name:wobble;animation-name:wobble;-webkit-animation-duration:.4s;animation-duration:.4s}@-webkit-keyframes wobble{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}15%{-webkit-transform:translate3d(-5%,0,0) rotate(-5deg);transform:translate3d(-5%,0,0) rotate(-5deg)}30%{-webkit-transform:translate3d(2%,0,0) rotate(3deg);transform:translate3d(2%,0,0) rotate(3deg)}45%{-webkit-transform:translate3d(-3%,0,0) rotate(-3deg);transform:translate3d(-3%,0,0) rotate(-3deg)}60%{-webkit-transform:translate3d(2%,0,0) rotate(2deg);transform:translate3d(2%,0,0) rotate(2deg)}75%{-webkit-transform:translate3d(-1%,0,0) rotate(-1deg);transform:translate3d(-1%,0,0) rotate(-1deg)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes wobble{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}15%{-webkit-transform:translate3d(-5%,0,0) rotate(-5deg);transform:translate3d(-5%,0,0) rotate(-5deg)}30%{-webkit-transform:translate3d(2%,0,0) rotate(3deg);transform:translate3d(2%,0,0) rotate(3deg)}45%{-webkit-transform:translate3d(-3%,0,0) rotate(-3deg);transform:translate3d(-3%,0,0) rotate(-3deg)}60%{-webkit-transform:translate3d(2%,0,0) rotate(2deg);transform:translate3d(2%,0,0) rotate(2deg)}75%{-webkit-transform:translate3d(-1%,0,0) rotate(-1deg);transform:translate3d(-1%,0,0) rotate(-1deg)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@-webkit-keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}20%{-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}60%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}20%{-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}60%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@-webkit-keyframes selectionBounce{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}50%{-webkit-transform:scale3d(1.01,1.01,1.01);transform:scale3d(1.01,1.01,1.01)}70%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes selectionBounce{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}50%{-webkit-transform:scale3d(1.01,1.01,1.01);transform:scale3d(1.01,1.01,1.01)}70%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@-webkit-keyframes buttonClicked{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.95,.95,.95);transform:scale3d(.95,.95,.95)}60%{-webkit-transform:scale3d(1.02,1.02,1.02);transform:scale3d(1.02,1.02,1.02)}80%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes buttonClicked{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.95,.95,.95);transform:scale3d(.95,.95,.95)}60%{-webkit-transform:scale3d(1.02,1.02,1.02);transform:scale3d(1.02,1.02,1.02)}80%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@-webkit-keyframes panelShowing{0%{opacity:0;-webkit-transform:translateY(-8px) scale(.9);transform:translateY(-8px) scale(.9)}70%{opacity:1;-webkit-transform:translateY(2px);transform:translateY(2px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes panelShowing{0%{opacity:0;-webkit-transform:translateY(-8px) scale(.9);transform:translateY(-8px) scale(.9)}70%{opacity:1;-webkit-transform:translateY(2px);transform:translateY(2px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes panelShowingMobile{0%{opacity:0;-webkit-transform:translateY(14px) scale(.98);transform:translateY(14px) scale(.98)}70%{opacity:1;-webkit-transform:translateY(-4px);transform:translateY(-4px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes panelShowingMobile{0%{opacity:0;-webkit-transform:translateY(14px) scale(.98);transform:translateY(14px) scale(.98)}70%{opacity:1;-webkit-transform:translateY(-4px);transform:translateY(-4px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}.cdx-block{padding:.4em 0}.cdx-block::-webkit-input-placeholder{line-height:normal!important}.cdx-input{border:1px solid rgba(201,201,204,.48);-webkit-box-shadow:inset 0 1px 2px 0 rgba(35,44,72,.06);box-shadow:inset 0 1px 2px 0 rgba(35,44,72,.06);border-radius:3px;padding:10px 12px;outline:none;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.cdx-input[data-placeholder]:before{position:static!important;display:inline-block;width:0;white-space:nowrap;pointer-events:none}.cdx-settings-button{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:34px;height:34px;line-height:34px;padding:0!important;text-align:center;border-radius:3px;cursor:pointer;border:0;outline:none;background-color:transparent;vertical-align:bottom;color:#000;margin:0}.cdx-settings-button:hover{background-color:#eff2f5}.cdx-settings-button--focused{-webkit-box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);background:rgba(34,186,255,.08)!important}.cdx-settings-button--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.cdx-settings-button:not(:nth-child(3n+3)){margin-right:3px}.cdx-settings-button:nth-child(n+4){margin-top:3px}.cdx-settings-button--active{color:#388ae5}.cdx-loader{position:relative;border:1px solid rgba(201,201,204,.48)}.cdx-loader:before{content:"";position:absolute;left:50%;top:50%;width:18px;height:18px;margin:-11px 0 0 -11px;border:2px solid rgba(201,201,204,.48);border-left-color:#388ae5;border-radius:50%;-webkit-animation:cdxRotation 1.2s linear infinite;animation:cdxRotation 1.2s linear infinite}@-webkit-keyframes cdxRotation{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes cdxRotation{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.cdx-button{padding:13px;border-radius:3px;border:1px solid rgba(201,201,204,.48);font-size:14.9px;background:#fff;-webkit-box-shadow:0 2px 2px 0 rgba(18,30,57,.04);box-shadow:0 2px 2px 0 rgba(18,30,57,.04);color:#707684;text-align:center;cursor:pointer}.cdx-button:hover{background:#fbfcfe;-webkit-box-shadow:0 1px 3px 0 rgba(18,30,57,.08);box-shadow:0 1px 3px 0 rgba(18,30,57,.08)}.cdx-button svg{height:20px;margin-right:.2em;margin-top:-2px}.ce-stub{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;padding:3.5em 0;margin:17px 0;border-radius:3px;background:#fcf7f7;color:#b46262}.ce-stub__info{margin-left:20px}.ce-stub__title{margin-bottom:3px;font-weight:600;font-size:18px;text-transform:capitalize}.ce-stub__subtitle{font-size:16px}.codex-editor.codex-editor--rtl{direction:rtl}.codex-editor.codex-editor--rtl .cdx-list{padding-left:0;padding-right:40px}.codex-editor.codex-editor--rtl .ce-toolbar__plus{right:-26px;left:auto}.codex-editor.codex-editor--rtl .ce-toolbar__actions{right:auto;left:-26px}@media (max-width:650px){.codex-editor.codex-editor--rtl .ce-toolbar__actions{margin-left:0;margin-right:auto;padding-right:0;padding-left:10px}}.codex-editor.codex-editor--rtl .ce-settings{left:5px;right:auto}.codex-editor.codex-editor--rtl .ce-settings:before{right:auto;left:25px}.codex-editor.codex-editor--rtl .ce-settings__button:not(:nth-child(3n+3)){margin-left:3px;margin-right:0}.codex-editor.codex-editor--rtl .ce-conversion-tool__icon{margin-right:0;margin-left:10px}.codex-editor.codex-editor--rtl .ce-inline-toolbar__dropdown{border-right:0 solid transparent;border-left:1px solid rgba(201,201,204,.48);margin:0 -6px 0 6px}.codex-editor.codex-editor--rtl .ce-inline-toolbar__dropdown .icon--toggler-down{margin-left:0;margin-right:4px}@media (min-width:651px){.codex-editor--narrow.codex-editor--rtl .ce-toolbar__plus{left:0;right:5px}}@media (min-width:651px){.codex-editor--narrow.codex-editor--rtl .ce-toolbar__actions{left:-5px}}.ce-popover{opacity:0;will-change:opacity,transform;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:6px;min-width:200px;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-negative:0;flex-shrink:0;max-height:0;pointer-events:none;position:absolute;background-color:#fff;border:1px solid #e8e8eb;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px rgba(13,20,33,.13);border-radius:6px;z-index:2}@media (max-width:650px){.ce-popover{-webkit-box-shadow:0 8px 6px -6px rgba(33,48,73,.19);box-shadow:0 8px 6px -6px rgba(33,48,73,.19);border-bottom-color:#c7c7c7}}.ce-popover{z-index:4;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.ce-popover--left-oriented:before{left:15px;margin-left:0}.ce-popover--right-oriented:before{left:auto;right:15px;margin-left:0}.ce-popover--opened{opacity:1;max-height:270px;pointer-events:auto;-webkit-animation:panelShowing .1s ease;animation:panelShowing .1s ease}@media (max-width:650px){.ce-popover--opened{-webkit-animation:panelShowingMobile .25s ease;animation:panelShowingMobile .25s ease}}.ce-popover::-webkit-scrollbar{width:7px}.ce-popover::-webkit-scrollbar-thumb{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:inset 0 0 2px 2px #eff2f5;box-shadow:inset 0 0 2px 2px #eff2f5;border-color:transparent;border-style:solid;border-width:4px 3px 4px 0}@media (max-width:650px){.ce-popover{position:fixed;max-width:none;min-width:auto;left:5px;right:5px;bottom:calc(5px + env(safe-area-inset-bottom));top:auto;border-radius:10px}}.ce-popover__items{overflow-y:auto;-ms-scroll-chaining:none;overscroll-behavior:contain}@media (min-width:651px){.ce-popover__items{margin-top:5px}}.ce-popover__item{display:grid;grid-template-columns:auto auto 1fr;grid-template-rows:auto;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:start;white-space:nowrap;padding:3px;font-size:14px;line-height:20px;font-weight:500;cursor:pointer;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-radius:6px}.ce-popover__item:not(:last-of-type){margin-bottom:1px}@media (hover:hover){.ce-popover__item:hover{background-color:#eff2f5}}@media (max-width:650px){.ce-popover__item{font-size:16px;padding:4px}}.ce-popover__item--focused{-webkit-box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);background:rgba(34,186,255,.08)!important}.ce-popover__item--hidden{display:none}.ce-popover__item-icon{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;width:26px;height:26px;border:1px solid rgba(201,201,204,.48);border-radius:5px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;background:#fff;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-negative:0;flex-shrink:0;margin-right:10px}@media (max-width:650px){.ce-popover__item-icon{width:36px;height:36px;border-radius:8px}}.ce-popover__item-icon svg{width:12px;height:12px}.ce-popover__item-label:after{content:"";width:25px;display:inline-block}.ce-popover__item-secondary-label{color:#707684;font-size:12px;margin-left:auto;white-space:nowrap;letter-spacing:-.1em;padding-right:5px;margin-bottom:-2px;opacity:.6}@media (max-width:650px){.ce-popover__item-secondary-label{display:none}}.ce-popover__no-found{display:grid;grid-template-columns:auto auto 1fr;grid-template-rows:auto;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:start;white-space:nowrap;padding:3px;font-size:14px;line-height:20px;font-weight:500;cursor:pointer;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-radius:6px}.ce-popover__no-found:not(:last-of-type){margin-bottom:1px}@media (hover:hover){.ce-popover__no-found:hover{background-color:#eff2f5}}@media (max-width:650px){.ce-popover__no-found{font-size:16px;padding:4px}}.ce-popover__no-found{color:#707684;display:none;cursor:default}.ce-popover__no-found--shown{display:block}.ce-popover__no-found:hover{background-color:transparent}@media (max-width:650px){.ce-popover__overlay{position:fixed;top:0;bottom:0;left:0;right:0;background:#1d202b;opacity:.5;z-index:3;-webkit-transition:opacity .12s ease-in;transition:opacity .12s ease-in;will-change:opacity;visibility:visible}.ce-popover .cdx-search-field{display:none}}.ce-popover__overlay--hidden{z-index:0;opacity:0;visibility:hidden}.cdx-search-field{--icon-margin-right:10px;background:rgba(232,232,235,.49);border:1px solid rgba(226,226,229,.2);border-radius:6px;padding:2px;display:grid;grid-template-columns:auto auto 1fr;grid-template-rows:auto}.cdx-search-field__icon{width:26px;height:26px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-right:var(--icon-margin-right)}.cdx-search-field__icon .icon{width:14px;height:14px;color:#707684;-ms-flex-negative:0;flex-shrink:0}.cdx-search-field__input{font-size:14px;outline:none;font-weight:500;font-family:inherit;border:0;background:transparent;margin:0;padding:0;line-height:22px;min-width:calc(100% - 26px - var(--icon-margin-right))}.cdx-search-field__input::-webkit-input-placeholder{color:#707684;font-weight:500}.cdx-search-field__input::-moz-placeholder{color:#707684;font-weight:500}.cdx-search-field__input:-ms-input-placeholder{color:#707684;font-weight:500}.cdx-search-field__input::-ms-input-placeholder{color:#707684;font-weight:500}.cdx-search-field__input::placeholder{color:#707684;font-weight:500}';
        },
        function(t599, e387, n284) {
            "use strict";
            n284.r(e387), n284.d(e387, "nanoid", function() {
                return s46;
            }), n284.d(e387, "customAlphabet", function() {
                return a55;
            }), n284.d(e387, "customRandom", function() {
                return i141;
            }), n284.d(e387, "urlAlphabet", function() {
                return o244;
            }), n284.d(e387, "random", function() {
                return r146;
            });
            let o244 = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
            let r146 = (t)=>crypto.getRandomValues(new Uint8Array(t)), i141 = (t, e, n)=>{
                let o = (2 << Math.log(t.length - 1) / Math.LN2) - 1, r = -~(1.6 * o * e / t.length);
                return ()=>{
                    let i = "";
                    for(;;){
                        let a = n(r), s = r;
                        for(; s--;)if (i += t[a[s] & o] || "", i.length === e) return i;
                    }
                };
            }, a55 = (t, e)=>i141(t, e, r146), s46 = (t = 21)=>{
                let e = "", n = crypto.getRandomValues(new Uint8Array(t));
                for(; t--;){
                    let o = 63 & n[t];
                    e += o < 36 ? o.toString(36) : o < 62 ? (o - 26).toString(36).toUpperCase() : o < 63 ? "_" : "-";
                }
                return e;
            };
        }
    ]);
});

},{}],"kkSVA":[function(require,module,exports) {
!function(e, t) {
    module.exports = t();
}(window, function() {
    return function(e1) {
        var t1 = {};
        function n(r) {
            if (t1[r]) return t1[r].exports;
            var i = t1[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e1[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
        }
        return n.m = e1, n.c = t1, n.d = function(e, t, r) {
            n.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: r
            });
        }, n.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            });
        }, n.t = function(e, t2) {
            if (1 & t2 && (e = n(e)), 8 & t2) return e;
            if (4 & t2 && "object" == typeof e && e && e.__esModule) return e;
            var r = Object.create(null);
            if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t2 && "string" != typeof e) for(var i in e)n.d(r, i, (function(t) {
                return e[t];
            }).bind(null, i));
            return r;
        }, n.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default;
            } : function() {
                return e;
            };
            return n.d(t, "a", t), t;
        }, n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }, n.p = "/", n(n.s = 0);
    }([
        function(e2, t3, n1) {
            function r1(e3) {
                return (r1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e;
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                })(e3);
            }
            function i1(e, t) {
                for(var n = 0; n < t.length; n++){
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            n1(1).toString();
            /**
 * Header block for the Editor.js.
 *
 * @author CodeX (team@ifmo.su)
 * @copyright CodeX 2018
 * @license MIT
 * @version 2.0.0
 */ var a1 = function() {
                function e4(t5) {
                    var n = t5.data, r = t5.config, i = t5.api, a = t5.readOnly;
                    !function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                    }(this, e4), this.api = i, this.readOnly = a, this._CSS = {
                        block: this.api.styles.block,
                        settingsButton: this.api.styles.settingsButton,
                        settingsButtonActive: this.api.styles.settingsButtonActive,
                        wrapper: "ce-header"
                    }, this._settings = r, this._data = this.normalizeData(n), this.settingsButtons = [], this._element = this.getTag();
                }
                var t4, a2, o;
                return t4 = e4, o = [
                    {
                        key: "conversionConfig",
                        get: function() {
                            return {
                                export: "text",
                                import: "text"
                            };
                        }
                    },
                    {
                        key: "sanitize",
                        get: function() {
                            return {
                                level: !1,
                                text: {}
                            };
                        }
                    },
                    {
                        key: "isReadOnlySupported",
                        get: function() {
                            return !0;
                        }
                    },
                    {
                        key: "pasteConfig",
                        get: function() {
                            return {
                                tags: [
                                    "H1",
                                    "H2",
                                    "H3",
                                    "H4",
                                    "H5",
                                    "H6"
                                ]
                            };
                        }
                    },
                    {
                        key: "toolbox",
                        get: function() {
                            return {
                                icon: n1(6).default,
                                title: "Heading"
                            };
                        }
                    }
                ], a2 = [
                    {
                        key: "normalizeData",
                        value: function(e) {
                            var t = {};
                            return "object" !== r1(e) && (e = {}), t.text = e.text || "", t.level = parseInt(e.level) || this.defaultLevel.number, t;
                        }
                    },
                    {
                        key: "render",
                        value: function() {
                            return this._element;
                        }
                    },
                    {
                        key: "renderSettings",
                        value: function() {
                            var e = this, t = document.createElement("DIV");
                            return this.levels.length <= 1 || this.levels.forEach(function(n) {
                                var r = document.createElement("SPAN");
                                r.classList.add(e._CSS.settingsButton), e.currentLevel.number === n.number && r.classList.add(e._CSS.settingsButtonActive), r.innerHTML = n.svg, r.dataset.level = n.number, r.addEventListener("click", function() {
                                    e.setLevel(n.number);
                                }), t.appendChild(r), e.settingsButtons.push(r);
                            }), t;
                        }
                    },
                    {
                        key: "setLevel",
                        value: function(e) {
                            var t = this;
                            this.data = {
                                level: e,
                                text: this.data.text
                            }, this.settingsButtons.forEach(function(n) {
                                n.classList.toggle(t._CSS.settingsButtonActive, parseInt(n.dataset.level) === e);
                            });
                        }
                    },
                    {
                        key: "merge",
                        value: function(e) {
                            var t = {
                                text: this.data.text + e.text,
                                level: this.data.level
                            };
                            this.data = t;
                        }
                    },
                    {
                        key: "validate",
                        value: function(e) {
                            return "" !== e.text.trim();
                        }
                    },
                    {
                        key: "save",
                        value: function(e) {
                            return {
                                text: e.innerHTML,
                                level: this.currentLevel.number
                            };
                        }
                    },
                    {
                        key: "getTag",
                        value: function() {
                            var e = document.createElement(this.currentLevel.tag);
                            return e.innerHTML = this._data.text || "", e.classList.add(this._CSS.wrapper), e.contentEditable = this.readOnly ? "false" : "true", e.dataset.placeholder = this.api.i18n.t(this._settings.placeholder || ""), e;
                        }
                    },
                    {
                        key: "onPaste",
                        value: function(e5) {
                            var t6 = e5.detail.data, n = this.defaultLevel.number;
                            switch(t6.tagName){
                                case "H1":
                                    n = 1;
                                    break;
                                case "H2":
                                    n = 2;
                                    break;
                                case "H3":
                                    n = 3;
                                    break;
                                case "H4":
                                    n = 4;
                                    break;
                                case "H5":
                                    n = 5;
                                    break;
                                case "H6":
                                    n = 6;
                            }
                            this._settings.levels && (n = this._settings.levels.reduce(function(e, t) {
                                return Math.abs(t - n) < Math.abs(e - n) ? t : e;
                            })), this.data = {
                                level: n,
                                text: t6.innerHTML
                            };
                        }
                    },
                    {
                        key: "data",
                        get: function() {
                            return this._data.text = this._element.innerHTML, this._data.level = this.currentLevel.number, this._data;
                        },
                        set: function(e) {
                            if (this._data = this.normalizeData(e), void 0 !== e.level && this._element.parentNode) {
                                var t = this.getTag();
                                t.innerHTML = this._element.innerHTML, this._element.parentNode.replaceChild(t, this._element), this._element = t;
                            }
                            void 0 !== e.text && (this._element.innerHTML = this._data.text || "");
                        }
                    },
                    {
                        key: "currentLevel",
                        get: function() {
                            var e = this, t7 = this.levels.find(function(t) {
                                return t.number === e._data.level;
                            });
                            return t7 || (t7 = this.defaultLevel), t7;
                        }
                    },
                    {
                        key: "defaultLevel",
                        get: function() {
                            var e = this;
                            if (this._settings.defaultLevel) {
                                var t8 = this.levels.find(function(t) {
                                    return t.number === e._settings.defaultLevel;
                                });
                                if (t8) return t8;
                                console.warn("(\u0E07'\u0300-'\u0301)\u0E07 Heading Tool: the default level specified was not found in available levels");
                            }
                            return this.levels[1];
                        }
                    },
                    {
                        key: "levels",
                        get: function() {
                            var e = this, t10 = [
                                {
                                    number: 1,
                                    tag: "H1",
                                    svg: '<svg width="16" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M2.14 1.494V4.98h4.62V1.494c0-.498.098-.871.293-1.12A.927.927 0 0 1 7.82 0c.322 0 .583.123.782.37.2.246.3.62.3 1.124v9.588c0 .503-.101.88-.303 1.128a.957.957 0 0 1-.779.374.921.921 0 0 1-.77-.378c-.193-.251-.29-.626-.29-1.124V6.989H2.14v4.093c0 .503-.1.88-.302 1.128a.957.957 0 0 1-.778.374.921.921 0 0 1-.772-.378C.096 11.955 0 11.58 0 11.082V1.494C0 .996.095.623.285.374A.922.922 0 0 1 1.06 0c.321 0 .582.123.782.37.199.246.299.62.299 1.124zm11.653 9.985V5.27c-1.279.887-2.14 1.33-2.583 1.33a.802.802 0 0 1-.563-.228.703.703 0 0 1-.245-.529c0-.232.08-.402.241-.511.161-.11.446-.25.854-.424.61-.259 1.096-.532 1.462-.818a5.84 5.84 0 0 0 .97-.962c.282-.355.466-.573.552-.655.085-.082.246-.123.483-.123.267 0 .481.093.642.28.161.186.242.443.242.77v7.813c0 .914-.345 1.371-1.035 1.371-.307 0-.554-.093-.74-.28-.187-.186-.28-.461-.28-.825z"/></svg>'
                                },
                                {
                                    number: 2,
                                    tag: "H2",
                                    svg: '<svg width="18" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M2.152 1.494V4.98h4.646V1.494c0-.498.097-.871.293-1.12A.934.934 0 0 1 7.863 0c.324 0 .586.123.786.37.2.246.301.62.301 1.124v9.588c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378c-.194-.251-.29-.626-.29-1.124V6.989H2.152v4.093c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378C.097 11.955 0 11.58 0 11.082V1.494C0 .996.095.623.286.374A.929.929 0 0 1 1.066 0c.323 0 .585.123.786.37.2.246.3.62.3 1.124zm10.99 9.288h3.527c.351 0 .62.072.804.216.185.144.277.34.277.588 0 .22-.073.408-.22.56-.146.154-.368.23-.665.23h-4.972c-.338 0-.601-.093-.79-.28a.896.896 0 0 1-.284-.659c0-.162.06-.377.182-.645s.255-.478.399-.631a38.617 38.617 0 0 1 1.621-1.598c.482-.444.827-.735 1.034-.875.369-.261.676-.523.922-.787.245-.263.432-.534.56-.81.129-.278.193-.549.193-.815 0-.288-.069-.546-.206-.773a1.428 1.428 0 0 0-.56-.53 1.618 1.618 0 0 0-.774-.19c-.59 0-1.054.26-1.392.777-.045.068-.12.252-.226.554-.106.302-.225.534-.358.696-.133.162-.328.243-.585.243a.76.76 0 0 1-.56-.223c-.149-.148-.223-.351-.223-.608 0-.31.07-.635.21-.972.139-.338.347-.645.624-.92a3.093 3.093 0 0 1 1.054-.665c.426-.169.924-.253 1.496-.253.69 0 1.277.108 1.764.324.315.144.592.343.83.595.24.252.425.544.558.875.133.33.2.674.2 1.03 0 .558-.14 1.066-.416 1.523-.277.457-.56.815-.848 1.074-.288.26-.771.666-1.45 1.22-.677.554-1.142.984-1.394 1.29a3.836 3.836 0 0 0-.331.44z"/></svg>'
                                },
                                {
                                    number: 3,
                                    tag: "H3",
                                    svg: '<svg width="18" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M2.152 1.494V4.98h4.646V1.494c0-.498.097-.871.293-1.12A.934.934 0 0 1 7.863 0c.324 0 .586.123.786.37.2.246.301.62.301 1.124v9.588c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378c-.194-.251-.29-.626-.29-1.124V6.989H2.152v4.093c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378C.097 11.955 0 11.58 0 11.082V1.494C0 .996.095.623.286.374A.929.929 0 0 1 1.066 0c.323 0 .585.123.786.37.2.246.3.62.3 1.124zm11.61 4.919c.418 0 .778-.123 1.08-.368.301-.245.452-.597.452-1.055 0-.35-.12-.65-.36-.902-.241-.252-.566-.378-.974-.378-.277 0-.505.038-.684.116a1.1 1.1 0 0 0-.426.306 2.31 2.31 0 0 0-.296.49c-.093.2-.178.388-.255.565a.479.479 0 0 1-.245.225.965.965 0 0 1-.409.081.706.706 0 0 1-.5-.22c-.152-.148-.228-.345-.228-.59 0-.236.071-.484.214-.745a2.72 2.72 0 0 1 .627-.746 3.149 3.149 0 0 1 1.024-.568 4.122 4.122 0 0 1 1.368-.214c.44 0 .842.06 1.205.18.364.12.679.294.947.52.267.228.47.49.606.79.136.3.204.622.204.967 0 .454-.099.843-.296 1.168-.198.324-.48.64-.848.95.354.19.653.408.895.653.243.245.426.516.548.813.123.298.184.619.184.964 0 .413-.083.812-.248 1.198-.166.386-.41.73-.732 1.031a3.49 3.49 0 0 1-1.147.708c-.443.17-.932.256-1.467.256a3.512 3.512 0 0 1-1.464-.293 3.332 3.332 0 0 1-1.699-1.64c-.142-.314-.214-.573-.214-.777 0-.263.085-.475.255-.636a.89.89 0 0 1 .637-.242c.127 0 .25.037.367.112a.53.53 0 0 1 .232.27c.236.63.489 1.099.759 1.405.27.306.65.46 1.14.46a1.714 1.714 0 0 0 1.46-.824c.17-.273.256-.588.256-.947 0-.53-.145-.947-.436-1.249-.29-.302-.694-.453-1.212-.453-.09 0-.231.01-.422.028-.19.018-.313.027-.367.027-.25 0-.443-.062-.579-.187-.136-.125-.204-.299-.204-.521 0-.218.081-.394.245-.528.163-.134.406-.2.728-.2h.28z"/></svg>'
                                },
                                {
                                    number: 4,
                                    tag: "H4",
                                    svg: '<svg width="20" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M2.152 1.494V4.98h4.646V1.494c0-.498.097-.871.293-1.12A.934.934 0 0 1 7.863 0c.324 0 .586.123.786.37.2.246.301.62.301 1.124v9.588c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378c-.194-.251-.29-.626-.29-1.124V6.989H2.152v4.093c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378C.097 11.955 0 11.58 0 11.082V1.494C0 .996.095.623.286.374A.929.929 0 0 1 1.066 0c.323 0 .585.123.786.37.2.246.3.62.3 1.124zm13.003 10.09v-1.252h-3.38c-.427 0-.746-.097-.96-.29-.213-.193-.32-.456-.32-.788 0-.085.016-.171.048-.259.031-.088.078-.18.141-.276.063-.097.128-.19.195-.28.068-.09.15-.2.25-.33l3.568-4.774a5.44 5.44 0 0 1 .576-.683.763.763 0 0 1 .542-.212c.682 0 1.023.39 1.023 1.171v5.212h.29c.346 0 .623.047.832.142.208.094.313.3.313.62 0 .26-.086.45-.256.568-.17.12-.427.179-.768.179h-.41v1.252c0 .346-.077.603-.23.771-.152.168-.356.253-.612.253a.78.78 0 0 1-.61-.26c-.154-.173-.232-.427-.232-.764zm-2.895-2.76h2.895V4.91L12.26 8.823z"/></svg>'
                                },
                                {
                                    number: 5,
                                    tag: "H5",
                                    svg: '<svg width="18" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M2.152 1.494V4.98h4.646V1.494c0-.498.097-.871.293-1.12A.934.934 0 0 1 7.863 0c.324 0 .586.123.786.37.2.246.301.62.301 1.124v9.588c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378c-.194-.251-.29-.626-.29-1.124V6.989H2.152v4.093c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378C.097 11.955 0 11.58 0 11.082V1.494C0 .996.095.623.286.374A.929.929 0 0 1 1.066 0c.323 0 .585.123.786.37.2.246.3.62.3 1.124zm14.16 2.645h-3.234l-.388 2.205c.644-.344 1.239-.517 1.783-.517.436 0 .843.082 1.222.245.38.164.712.39.998.677.286.289.51.63.674 1.025.163.395.245.82.245 1.273 0 .658-.148 1.257-.443 1.797-.295.54-.72.97-1.276 1.287-.556.318-1.197.477-1.923.477-.813 0-1.472-.15-1.978-.45-.506-.3-.865-.643-1.076-1.031-.21-.388-.316-.727-.316-1.018 0-.177.073-.345.22-.504a.725.725 0 0 1 .556-.238c.381 0 .665.22.85.66.182.404.427.719.736.943.309.225.654.337 1.035.337.35 0 .656-.09.919-.272.263-.182.466-.431.61-.749.142-.318.214-.678.214-1.082 0-.436-.078-.808-.232-1.117a1.607 1.607 0 0 0-.62-.69 1.674 1.674 0 0 0-.864-.229c-.39 0-.67.048-.837.143-.168.095-.41.262-.725.5-.316.239-.576.358-.78.358a.843.843 0 0 1-.592-.242c-.173-.16-.259-.344-.259-.548 0-.022.025-.177.075-.463l.572-3.26c.063-.39.181-.675.354-.852.172-.177.454-.265.844-.265h3.595c.708 0 1.062.27 1.062.81a.711.711 0 0 1-.26.572c-.172.145-.426.218-.762.218z"/></svg>'
                                },
                                {
                                    number: 6,
                                    tag: "H6",
                                    svg: '<svg width="18" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M2.152 1.494V4.98h4.646V1.494c0-.498.097-.871.293-1.12A.934.934 0 0 1 7.863 0c.324 0 .586.123.786.37.2.246.301.62.301 1.124v9.588c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378c-.194-.251-.29-.626-.29-1.124V6.989H2.152v4.093c0 .503-.101.88-.304 1.128a.964.964 0 0 1-.783.374.928.928 0 0 1-.775-.378C.097 11.955 0 11.58 0 11.082V1.494C0 .996.095.623.286.374A.929.929 0 0 1 1.066 0c.323 0 .585.123.786.37.2.246.3.62.3 1.124zM12.53 7.058a3.093 3.093 0 0 1 1.004-.814 2.734 2.734 0 0 1 1.214-.264c.43 0 .827.08 1.19.24.365.161.684.39.957.686.274.296.485.645.635 1.048a3.6 3.6 0 0 1 .223 1.262c0 .637-.145 1.216-.437 1.736-.292.52-.699.926-1.221 1.218-.522.292-1.114.438-1.774.438-.76 0-1.416-.186-1.967-.557-.552-.37-.974-.919-1.265-1.645-.292-.726-.438-1.613-.438-2.662 0-.855.088-1.62.265-2.293.176-.674.43-1.233.76-1.676.33-.443.73-.778 1.2-1.004.47-.226 1.006-.339 1.608-.339.579 0 1.089.113 1.53.34.44.225.773.506.997.84.224.335.335.656.335.964 0 .185-.07.354-.21.505a.698.698 0 0 1-.536.227.874.874 0 0 1-.529-.18 1.039 1.039 0 0 1-.36-.498 1.42 1.42 0 0 0-.495-.655 1.3 1.3 0 0 0-.786-.247c-.24 0-.479.069-.716.207a1.863 1.863 0 0 0-.6.56c-.33.479-.525 1.333-.584 2.563zm1.832 4.213c.456 0 .834-.186 1.133-.56.298-.373.447-.862.447-1.468 0-.412-.07-.766-.21-1.062a1.584 1.584 0 0 0-.577-.678 1.47 1.47 0 0 0-.807-.234c-.28 0-.548.074-.804.224-.255.149-.461.365-.617.647a2.024 2.024 0 0 0-.234.994c0 .61.158 1.12.475 1.527.316.407.714.61 1.194.61z"/></svg>'
                                }
                            ];
                            return this._settings.levels ? t10.filter(function(t) {
                                return e._settings.levels.includes(t.number);
                            }) : t10;
                        }
                    }
                ], i1(t4.prototype, a2), o && i1(t4, o), e4;
            }();
            e2.exports = a1;
        },
        function(e, t, n) {
            var r = n(2);
            "string" == typeof r && (r = [
                [
                    e.i,
                    r,
                    ""
                ]
            ]);
            var i = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            n(4)(r, i);
            r.locals && (e.exports = r.locals);
        },
        function(e, t, n) {
            (e.exports = n(3)(!1)).push([
                e.i,
                "/**\n * Plugin styles\n */\n.ce-header {\n  padding: 0.6em 0 3px;\n  margin: 0;\n  line-height: 1.25em;\n  outline: none;\n}\n\n.ce-header p,\n.ce-header div{\n  padding: 0 !important;\n  margin: 0 !important;\n}\n\n/**\n * Styles for Plugin icon in Toolbar\n */\n.ce-header__icon {}\n\n.ce-header[contentEditable=true][data-placeholder]::before{\n  position: absolute;\n  content: attr(data-placeholder);\n  color: #707684;\n  font-weight: normal;\n  display: none;\n  cursor: text;\n}\n\n.ce-header[contentEditable=true][data-placeholder]:empty::before {\n  display: block;\n}\n\n.ce-header[contentEditable=true][data-placeholder]:empty:focus::before {\n  display: none;\n}\n",
                ""
            ]);
        },
        function(e6, t11) {
            e6.exports = function(e7) {
                var t12 = [];
                return t12.toString = function() {
                    return this.map(function(t13) {
                        var n2 = function(e8, t) {
                            var n = e8[1] || "", r = e8[3];
                            if (!r) return n;
                            if (t && "function" == typeof btoa) {
                                var i = (o = r, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */"), a = r.sources.map(function(e) {
                                    return "/*# sourceURL=" + r.sourceRoot + e + " */";
                                });
                                return [
                                    n
                                ].concat(a).concat([
                                    i
                                ]).join("\n");
                            }
                            var o;
                            return [
                                n
                            ].join("\n");
                        }(t13, e7);
                        return t13[2] ? "@media " + t13[2] + "{" + n2 + "}" : n2;
                    }).join("");
                }, t12.i = function(e, n) {
                    "string" == typeof e && (e = [
                        [
                            null,
                            e,
                            ""
                        ]
                    ]);
                    for(var r = {}, i = 0; i < this.length; i++){
                        var a = this[i][0];
                        "number" == typeof a && (r[a] = !0);
                    }
                    for(i = 0; i < e.length; i++){
                        var o = e[i];
                        "number" == typeof o[0] && r[o[0]] || (n && !o[2] ? o[2] = n : n && (o[2] = "(" + o[2] + ") and (" + n + ")"), t12.push(o));
                    }
                }, t12;
            };
        },
        function(e9, t14, n3) {
            var r2, i2, a3 = {}, o1 = (r2 = function() {
                return window && document && document.all && !window.atob;
            }, function() {
                return void 0 === i2 && (i2 = r2.apply(this, arguments)), i2;
            }), s1 = function(e) {
                return document.querySelector(e);
            }, c1 = function(e10) {
                var t = {};
                return function(e) {
                    if ("function" == typeof e) return e();
                    if (void 0 === t[e]) {
                        var n = s1.call(this, e);
                        if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
                            n = n.contentDocument.head;
                        } catch (e11) {
                            n = null;
                        }
                        t[e] = n;
                    }
                    return t[e];
                };
            }(), l = null, u = 0, f = [], d = n3(5);
            function h(e, t) {
                for(var n = 0; n < e.length; n++){
                    var r = e[n], i = a3[r.id];
                    if (i) {
                        i.refs++;
                        for(var o = 0; o < i.parts.length; o++)i.parts[o](r.parts[o]);
                        for(; o < r.parts.length; o++)i.parts.push(y(r.parts[o], t));
                    } else {
                        var s = [];
                        for(o = 0; o < r.parts.length; o++)s.push(y(r.parts[o], t));
                        a3[r.id] = {
                            id: r.id,
                            refs: 1,
                            parts: s
                        };
                    }
                }
            }
            function v(e, t) {
                for(var n = [], r = {}, i = 0; i < e.length; i++){
                    var a = e[i], o = t.base ? a[0] + t.base : a[0], s = {
                        css: a[1],
                        media: a[2],
                        sourceMap: a[3]
                    };
                    r[o] ? r[o].parts.push(s) : n.push(r[o] = {
                        id: o,
                        parts: [
                            s
                        ]
                    });
                }
                return n;
            }
            function p(e, t) {
                var n = c1(e.insertInto);
                if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
                var r = f[f.length - 1];
                if ("top" === e.insertAt) r ? r.nextSibling ? n.insertBefore(t, r.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild), f.push(t);
                else if ("bottom" === e.insertAt) n.appendChild(t);
                else {
                    if ("object" != typeof e.insertAt || !e.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
                    var i = c1(e.insertInto + " " + e.insertAt.before);
                    n.insertBefore(t, i);
                }
            }
            function g(e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
                var t = f.indexOf(e);
                t >= 0 && f.splice(t, 1);
            }
            function m(e) {
                var t = document.createElement("style");
                return void 0 === e.attrs.type && (e.attrs.type = "text/css"), b(t, e.attrs), p(e, t), t;
            }
            function b(e, t) {
                Object.keys(t).forEach(function(n) {
                    e.setAttribute(n, t[n]);
                });
            }
            function y(e12, t15) {
                var n, r, i, a;
                if (t15.transform && e12.css) {
                    if (!(a = t15.transform(e12.css))) return function() {};
                    e12.css = a;
                }
                if (t15.singleton) {
                    var o = u++;
                    n = l || (l = m(t15)), r = L.bind(null, n, o, !1), i = L.bind(null, n, o, !0);
                } else e12.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function(e) {
                    var t = document.createElement("link");
                    return void 0 === e.attrs.type && (e.attrs.type = "text/css"), e.attrs.rel = "stylesheet", b(t, e.attrs), p(e, t), t;
                }(t15), r = _.bind(null, n, t15), i = function() {
                    g(n), n.href && URL.revokeObjectURL(n.href);
                }) : (n = m(t15), r = H.bind(null, n), i = function() {
                    g(n);
                });
                return r(e12), function(t) {
                    if (t) {
                        if (t.css === e12.css && t.media === e12.media && t.sourceMap === e12.sourceMap) return;
                        r(e12 = t);
                    } else i();
                };
            }
            e9.exports = function(e13, t) {
                if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
                (t = t || {}).attrs = "object" == typeof t.attrs ? t.attrs : {}, t.singleton || "boolean" == typeof t.singleton || (t.singleton = o1()), t.insertInto || (t.insertInto = "head"), t.insertAt || (t.insertAt = "bottom");
                var n = v(e13, t);
                return h(n, t), function(e) {
                    for(var r = [], i = 0; i < n.length; i++){
                        var o = n[i];
                        (s = a3[o.id]).refs--, r.push(s);
                    }
                    e && h(v(e, t), t);
                    for(i = 0; i < r.length; i++){
                        var s;
                        if (0 === (s = r[i]).refs) {
                            for(var c = 0; c < s.parts.length; c++)s.parts[c]();
                            delete a3[s.id];
                        }
                    }
                };
            };
            var w, x = (w = [], function(e, t) {
                return w[e] = t, w.filter(Boolean).join("\n");
            });
            function L(e, t, n, r) {
                var i = n ? "" : r.css;
                if (e.styleSheet) e.styleSheet.cssText = x(t, i);
                else {
                    var a = document.createTextNode(i), o = e.childNodes;
                    o[t] && e.removeChild(o[t]), o.length ? e.insertBefore(a, o[t]) : e.appendChild(a);
                }
            }
            function H(e, t) {
                var n = t.css, r = t.media;
                if (r && e.setAttribute("media", r), e.styleSheet) e.styleSheet.cssText = n;
                else {
                    for(; e.firstChild;)e.removeChild(e.firstChild);
                    e.appendChild(document.createTextNode(n));
                }
            }
            function _(e, t, n) {
                var r = n.css, i = n.sourceMap, a = void 0 === t.convertToAbsoluteUrls && i;
                (t.convertToAbsoluteUrls || a) && (r = d(r)), i && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */");
                var o = new Blob([
                    r
                ], {
                    type: "text/css"
                }), s = e.href;
                e.href = URL.createObjectURL(o), s && URL.revokeObjectURL(s);
            }
        },
        function(e14, t16) {
            e14.exports = function(e15) {
                var t17 = "undefined" != typeof window && window.location;
                if (!t17) throw new Error("fixUrls requires window.location");
                if (!e15 || "string" != typeof e15) return e15;
                var n = t17.protocol + "//" + t17.host, r = n + t17.pathname.replace(/\/[^\/]*$/, "/");
                return e15.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(e, t18) {
                    var i, a = t18.trim().replace(/^"(.*)"$/, function(e, t) {
                        return t;
                    }).replace(/^'(.*)'$/, function(e, t) {
                        return t;
                    });
                    return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a) ? e : (i = 0 === a.indexOf("//") ? a : 0 === a.indexOf("/") ? n + a : r + a.replace(/^\.\//, ""), "url(" + JSON.stringify(i) + ")");
                });
            };
        },
        function(e, t, n) {
            "use strict";
            n.r(t), t.default = '<svg width="10" height="14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 14">\n  <path d="M7.6 8.15H2.25v4.525a1.125 1.125 0 0 1-2.25 0V1.125a1.125 1.125 0 1 1 2.25 0V5.9H7.6V1.125a1.125 1.125 0 0 1 2.25 0v11.55a1.125 1.125 0 0 1-2.25 0V8.15z"/>\n</svg>\n';
        }
    ]);
});

},{}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"l0hGJ":[function(require,module,exports) {
!function(t, e) {
    module.exports = e();
}(window, function() {
    return function(t1) {
        var e1 = {};
        function n(r) {
            if (e1[r]) return e1[r].exports;
            var o = e1[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return t1[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
        }
        return n.m = t1, n.c = e1, n.d = function(t, e, r) {
            n.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: r
            });
        }, n.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            });
        }, n.t = function(t, e2) {
            if (1 & e2 && (t = n(t)), 8 & e2) return t;
            if (4 & e2 && "object" == typeof t && t && t.__esModule) return t;
            var r = Object.create(null);
            if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: t
            }), 2 & e2 && "string" != typeof t) for(var o in t)n.d(r, o, (function(e) {
                return t[e];
            }).bind(null, o));
            return r;
        }, n.n = function(t) {
            var e = t && t.__esModule ? function() {
                return t.default;
            } : function() {
                return t;
            };
            return n.d(e, "a", e), e;
        }, n.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
        }, n.p = "/", n(n.s = 0);
    }([
        function(t2, e3, n1) {
            function r1(t3) {
                return function(t) {
                    if (Array.isArray(t)) {
                        for(var e = 0, n = new Array(t.length); e < t.length; e++)n[e] = t[e];
                        return n;
                    }
                }(t3) || function(t) {
                    if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t);
                }(t3) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance");
                }();
            }
            function o1(t, e) {
                for(var n = 0; n < e.length; n++){
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
                }
            }
            function i1(t, e, n) {
                return e && o1(t.prototype, e), n && o1(t, n), t;
            }
            n1(1).toString();
            var a1 = function() {
                function t4(e4) {
                    var n = e4.data, r = e4.config, o = e4.api, i = e4.readOnly;
                    !function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    }(this, t4);
                    var a = t4.ALIGNMENTS, s = t4.DEFAULT_ALIGNMENT;
                    this.api = o, this.readOnly = i, this.quotePlaceholder = r.quotePlaceholder || t4.DEFAULT_QUOTE_PLACEHOLDER, this.captionPlaceholder = r.captionPlaceholder || t4.DEFAULT_CAPTION_PLACEHOLDER, this.data = {
                        text: n.text || "",
                        caption: n.caption || "",
                        alignment: Object.values(a).includes(n.alignment) && n.alignment || r.defaultAlignment || s
                    };
                }
                return i1(t4, [
                    {
                        key: "CSS",
                        get: function() {
                            return {
                                baseClass: this.api.styles.block,
                                wrapper: "cdx-quote",
                                text: "cdx-quote__text",
                                input: this.api.styles.input,
                                caption: "cdx-quote__caption",
                                settingsWrapper: "cdx-quote-settings",
                                settingsButton: this.api.styles.settingsButton,
                                settingsButtonActive: this.api.styles.settingsButtonActive
                            };
                        }
                    },
                    {
                        key: "settings",
                        get: function() {
                            return [
                                {
                                    name: "left",
                                    icon: '<svg width="16" height="11" viewBox="0 0 16 11" xmlns="http://www.w3.org/2000/svg" ><path d="M1.069 0H13.33a1.069 1.069 0 0 1 0 2.138H1.07a1.069 1.069 0 1 1 0-2.138zm0 4.275H9.03a1.069 1.069 0 1 1 0 2.137H1.07a1.069 1.069 0 1 1 0-2.137zm0 4.275h9.812a1.069 1.069 0 0 1 0 2.137H1.07a1.069 1.069 0 0 1 0-2.137z" /></svg>'
                                },
                                {
                                    name: "center",
                                    icon: '<svg width="16" height="11" viewBox="0 0 16 11" xmlns="http://www.w3.org/2000/svg" ><path d="M1.069 0H13.33a1.069 1.069 0 0 1 0 2.138H1.07a1.069 1.069 0 1 1 0-2.138zm3.15 4.275h5.962a1.069 1.069 0 0 1 0 2.137H4.22a1.069 1.069 0 1 1 0-2.137zM1.069 8.55H13.33a1.069 1.069 0 0 1 0 2.137H1.07a1.069 1.069 0 0 1 0-2.137z"/></svg>'
                                }
                            ];
                        }
                    }
                ], [
                    {
                        key: "isReadOnlySupported",
                        get: function() {
                            return !0;
                        }
                    },
                    {
                        key: "toolbox",
                        get: function() {
                            return {
                                icon: '<svg width="15" height="14" viewBox="0 0 15 14" xmlns="http://www.w3.org/2000/svg"><path d="M13.53 6.185l.027.025a1.109 1.109 0 0 1 0 1.568l-5.644 5.644a1.109 1.109 0 1 1-1.569-1.568l4.838-4.837L6.396 2.23A1.125 1.125 0 1 1 7.986.64l5.52 5.518.025.027zm-5.815 0l.026.025a1.109 1.109 0 0 1 0 1.568l-5.644 5.644a1.109 1.109 0 1 1-1.568-1.568l4.837-4.837L.58 2.23A1.125 1.125 0 0 1 2.171.64L7.69 6.158l.025.027z" /></svg>',
                                title: "Quote"
                            };
                        }
                    },
                    {
                        key: "contentless",
                        get: function() {
                            return !0;
                        }
                    },
                    {
                        key: "enableLineBreaks",
                        get: function() {
                            return !0;
                        }
                    },
                    {
                        key: "DEFAULT_QUOTE_PLACEHOLDER",
                        get: function() {
                            return "Enter a quote";
                        }
                    },
                    {
                        key: "DEFAULT_CAPTION_PLACEHOLDER",
                        get: function() {
                            return "Enter a caption";
                        }
                    },
                    {
                        key: "ALIGNMENTS",
                        get: function() {
                            return {
                                left: "left",
                                center: "center"
                            };
                        }
                    },
                    {
                        key: "DEFAULT_ALIGNMENT",
                        get: function() {
                            return t4.ALIGNMENTS.left;
                        }
                    },
                    {
                        key: "conversionConfig",
                        get: function() {
                            return {
                                import: "text",
                                export: function(t) {
                                    return t.caption ? "".concat(t.text, " \u2014 ").concat(t.caption) : t.text;
                                }
                            };
                        }
                    }
                ]), i1(t4, [
                    {
                        key: "render",
                        value: function() {
                            var t = this._make("blockquote", [
                                this.CSS.baseClass,
                                this.CSS.wrapper
                            ]), e = this._make("div", [
                                this.CSS.input,
                                this.CSS.text
                            ], {
                                contentEditable: !this.readOnly,
                                innerHTML: this.data.text
                            }), n = this._make("div", [
                                this.CSS.input,
                                this.CSS.caption
                            ], {
                                contentEditable: !this.readOnly,
                                innerHTML: this.data.caption
                            });
                            return e.dataset.placeholder = this.quotePlaceholder, n.dataset.placeholder = this.captionPlaceholder, t.appendChild(e), t.appendChild(n), t;
                        }
                    },
                    {
                        key: "save",
                        value: function(t) {
                            var e = t.querySelector(".".concat(this.CSS.text)), n = t.querySelector(".".concat(this.CSS.caption));
                            return Object.assign(this.data, {
                                text: e.innerHTML,
                                caption: n.innerHTML
                            });
                        }
                    },
                    {
                        key: "renderSettings",
                        value: function() {
                            var t = this, e5 = this._make("div", [
                                this.CSS.settingsWrapper
                            ], {});
                            return this.settings.map(function(n) {
                                var r, o = t._make("div", t.CSS.settingsButton, {
                                    innerHTML: n.icon,
                                    title: "".concat((r = n.name, r[0].toUpperCase() + r.substr(1)), " alignment")
                                });
                                return o.classList.toggle(t.CSS.settingsButtonActive, n.name === t.data.alignment), e5.appendChild(o), o;
                            }).forEach(function(e6, n2, r2) {
                                e6.addEventListener("click", function() {
                                    t._toggleTune(t.settings[n2].name), r2.forEach(function(e, n) {
                                        var r = t.settings[n].name;
                                        e.classList.toggle(t.CSS.settingsButtonActive, r === t.data.alignment);
                                    });
                                });
                            }), e5;
                        }
                    },
                    {
                        key: "_toggleTune",
                        value: function(t) {
                            this.data.alignment = t;
                        }
                    },
                    {
                        key: "_make",
                        value: function(t) {
                            var e, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, i = document.createElement(t);
                            Array.isArray(n) ? (e = i.classList).add.apply(e, r1(n)) : n && i.classList.add(n);
                            for(var a in o)i[a] = o[a];
                            return i;
                        }
                    }
                ], [
                    {
                        key: "sanitize",
                        get: function() {
                            return {
                                text: {
                                    br: !0
                                },
                                caption: {
                                    br: !0
                                },
                                alignment: {}
                            };
                        }
                    }
                ]), t4;
            }();
            t2.exports = a1;
        },
        function(t, e, n) {
            var r = n(2);
            "string" == typeof r && (r = [
                [
                    t.i,
                    r,
                    ""
                ]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            n(4)(r, o);
            r.locals && (t.exports = r.locals);
        },
        function(t, e, n) {
            (t.exports = n(3)(!1)).push([
                t.i,
                ".cdx-quote-icon svg {\n  transform: rotate(180deg);\n}\n\n.cdx-quote {\n  margin: 0;\n}\n\n.cdx-quote__text {\n  min-height: 158px;\n  margin-bottom: 10px;\n}\n\n.cdx-quote__caption {}\n\n.cdx-quote [contentEditable=true][data-placeholder]::before{\n  position: absolute;\n  content: attr(data-placeholder);\n  color: #707684;\n  font-weight: normal;\n  opacity: 0;\n}\n\n.cdx-quote [contentEditable=true][data-placeholder]:empty::before {\n  opacity: 1;\n}\n\n.cdx-quote [contentEditable=true][data-placeholder]:empty:focus::before {\n  opacity: 0;\n}\n\n\n.cdx-quote-settings {\n  display: flex;\n}\n\n.cdx-quote-settings .cdx-settings-button {\n  width: 50%;\n}\n",
                ""
            ]);
        },
        function(t5, e7) {
            t5.exports = function(t6) {
                var e8 = [];
                return e8.toString = function() {
                    return this.map(function(e9) {
                        var n3 = function(t7, e) {
                            var n = t7[1] || "", r = t7[3];
                            if (!r) return n;
                            if (e && "function" == typeof btoa) {
                                var o = (a = r, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(a)))) + " */"), i = r.sources.map(function(t) {
                                    return "/*# sourceURL=" + r.sourceRoot + t + " */";
                                });
                                return [
                                    n
                                ].concat(i).concat([
                                    o
                                ]).join("\n");
                            }
                            var a;
                            return [
                                n
                            ].join("\n");
                        }(e9, t6);
                        return e9[2] ? "@media " + e9[2] + "{" + n3 + "}" : n3;
                    }).join("");
                }, e8.i = function(t, n) {
                    "string" == typeof t && (t = [
                        [
                            null,
                            t,
                            ""
                        ]
                    ]);
                    for(var r = {}, o = 0; o < this.length; o++){
                        var i = this[o][0];
                        "number" == typeof i && (r[i] = !0);
                    }
                    for(o = 0; o < t.length; o++){
                        var a = t[o];
                        "number" == typeof a[0] && r[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), e8.push(a));
                    }
                }, e8;
            };
        },
        function(t8, e10, n4) {
            var r3, o2, i2 = {}, a2 = (r3 = function() {
                return window && document && document.all && !window.atob;
            }, function() {
                return void 0 === o2 && (o2 = r3.apply(this, arguments)), o2;
            }), s1 = function(t9) {
                var e = {};
                return function(t10) {
                    if ("function" == typeof t10) return t10();
                    if (void 0 === e[t10]) {
                        var n = (function(t) {
                            return document.querySelector(t);
                        }).call(this, t10);
                        if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
                            n = n.contentDocument.head;
                        } catch (t) {
                            n = null;
                        }
                        e[t10] = n;
                    }
                    return e[t10];
                };
            }(), c1 = null, u = 0, l = [], f = n4(5);
            function p(t, e) {
                for(var n = 0; n < t.length; n++){
                    var r = t[n], o = i2[r.id];
                    if (o) {
                        o.refs++;
                        for(var a = 0; a < o.parts.length; a++)o.parts[a](r.parts[a]);
                        for(; a < r.parts.length; a++)o.parts.push(m(r.parts[a], e));
                    } else {
                        var s = [];
                        for(a = 0; a < r.parts.length; a++)s.push(m(r.parts[a], e));
                        i2[r.id] = {
                            id: r.id,
                            refs: 1,
                            parts: s
                        };
                    }
                }
            }
            function d(t, e) {
                for(var n = [], r = {}, o = 0; o < t.length; o++){
                    var i = t[o], a = e.base ? i[0] + e.base : i[0], s = {
                        css: i[1],
                        media: i[2],
                        sourceMap: i[3]
                    };
                    r[a] ? r[a].parts.push(s) : n.push(r[a] = {
                        id: a,
                        parts: [
                            s
                        ]
                    });
                }
                return n;
            }
            function h(t, e) {
                var n = s1(t.insertInto);
                if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
                var r = l[l.length - 1];
                if ("top" === t.insertAt) r ? r.nextSibling ? n.insertBefore(e, r.nextSibling) : n.appendChild(e) : n.insertBefore(e, n.firstChild), l.push(e);
                else if ("bottom" === t.insertAt) n.appendChild(e);
                else {
                    if ("object" != typeof t.insertAt || !t.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
                    var o = s1(t.insertInto + " " + t.insertAt.before);
                    n.insertBefore(e, o);
                }
            }
            function g(t) {
                if (null === t.parentNode) return !1;
                t.parentNode.removeChild(t);
                var e = l.indexOf(t);
                e >= 0 && l.splice(e, 1);
            }
            function v(t) {
                var e = document.createElement("style");
                return void 0 === t.attrs.type && (t.attrs.type = "text/css"), y(e, t.attrs), h(t, e), e;
            }
            function y(t, e) {
                Object.keys(e).forEach(function(n) {
                    t.setAttribute(n, e[n]);
                });
            }
            function m(t11, e11) {
                var n5, r4, o3, i3;
                if (e11.transform && t11.css) {
                    if (!(i3 = e11.transform(t11.css))) return function() {};
                    t11.css = i3;
                }
                if (e11.singleton) {
                    var a = u++;
                    n5 = c1 || (c1 = v(e11)), r4 = w.bind(null, n5, a, !1), o3 = w.bind(null, n5, a, !0);
                } else t11.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n5 = function(t) {
                    var e = document.createElement("link");
                    return void 0 === t.attrs.type && (t.attrs.type = "text/css"), t.attrs.rel = "stylesheet", y(e, t.attrs), h(t, e), e;
                }(e11), r4 = (function(t, e, n) {
                    var r = n.css, o = n.sourceMap, i = void 0 === e.convertToAbsoluteUrls && o;
                    (e.convertToAbsoluteUrls || i) && (r = f(r));
                    o && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");
                    var a = new Blob([
                        r
                    ], {
                        type: "text/css"
                    }), s = t.href;
                    t.href = URL.createObjectURL(a), s && URL.revokeObjectURL(s);
                }).bind(null, n5, e11), o3 = function() {
                    g(n5), n5.href && URL.revokeObjectURL(n5.href);
                }) : (n5 = v(e11), r4 = (function(t, e) {
                    var n = e.css, r = e.media;
                    r && t.setAttribute("media", r);
                    if (t.styleSheet) t.styleSheet.cssText = n;
                    else {
                        for(; t.firstChild;)t.removeChild(t.firstChild);
                        t.appendChild(document.createTextNode(n));
                    }
                }).bind(null, n5), o3 = function() {
                    g(n5);
                });
                return r4(t11), function(e) {
                    if (e) {
                        if (e.css === t11.css && e.media === t11.media && e.sourceMap === t11.sourceMap) return;
                        r4(t11 = e);
                    } else o3();
                };
            }
            t8.exports = function(t12, e) {
                if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
                (e = e || {}).attrs = "object" == typeof e.attrs ? e.attrs : {}, e.singleton || "boolean" == typeof e.singleton || (e.singleton = a2()), e.insertInto || (e.insertInto = "head"), e.insertAt || (e.insertAt = "bottom");
                var n = d(t12, e);
                return p(n, e), function(t) {
                    for(var r = [], o = 0; o < n.length; o++){
                        var a = n[o];
                        (s = i2[a.id]).refs--, r.push(s);
                    }
                    t && p(d(t, e), e);
                    for(o = 0; o < r.length; o++){
                        var s;
                        if (0 === (s = r[o]).refs) {
                            for(var c = 0; c < s.parts.length; c++)s.parts[c]();
                            delete i2[s.id];
                        }
                    }
                };
            };
            var b, x = (b = [], function(t, e) {
                return b[t] = e, b.filter(Boolean).join("\n");
            });
            function w(t, e, n, r) {
                var o = n ? "" : r.css;
                if (t.styleSheet) t.styleSheet.cssText = x(e, o);
                else {
                    var i = document.createTextNode(o), a = t.childNodes;
                    a[e] && t.removeChild(a[e]), a.length ? t.insertBefore(i, a[e]) : t.appendChild(i);
                }
            }
        },
        function(t13, e12) {
            t13.exports = function(t14) {
                var e13 = "undefined" != typeof window && window.location;
                if (!e13) throw new Error("fixUrls requires window.location");
                if (!t14 || "string" != typeof t14) return t14;
                var n = e13.protocol + "//" + e13.host, r = n + e13.pathname.replace(/\/[^\/]*$/, "/");
                return t14.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(t, e14) {
                    var o, i = e14.trim().replace(/^"(.*)"$/, function(t, e) {
                        return e;
                    }).replace(/^'(.*)'$/, function(t, e) {
                        return e;
                    });
                    return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i) ? t : (o = 0 === i.indexOf("//") ? i : 0 === i.indexOf("/") ? n + i : r + i.replace(/^\.\//, ""), "url(" + JSON.stringify(o) + ")");
                });
            };
        }
    ]);
});

},{}]},["adb63","jbkOT"], "jbkOT", "parcelRequire6330")

//# sourceMappingURL=editor.efc798f1.js.map
