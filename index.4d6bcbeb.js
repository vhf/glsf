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
})({"8TtF2":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "bed887d14d6bcbeb";
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

},{}],"gLLPy":[function(require,module,exports) {
var _hastUtilToHtml = require("hast-util-to-html");
var _glsf = require("glsf");
const editor = document.getElementById("tree");
const output = document.getElementById("output");
const tree = (0, _glsf.doc)([
    (0, _glsf.heading)("Title", {
        level: 1
    }),
    (0, _glsf.heading)("Subtitle", {
        level: 2
    }),
    (0, _glsf.paragraph)("Welcome"),
    (0, _glsf.heading)("Here are columns", {
        level: 2
    }),
    (0, _glsf.columnContainer)([
        (0, _glsf.column)([
            (0, _glsf.mediaContainer)([
                (0, _glsf.image)("https://api.lorem.space/image/fashion?w=600&h=300"),
                (0, _glsf.image)("https://api.lorem.space/image/fashion?w=600&h=600"),
                (0, _glsf.image)("https://api.lorem.space/image/fashion?w=600&h=600"),
                (0, _glsf.image)("https://api.lorem.space/image/fashion?w=600&h=600"), 
            ], {
                layout: "1-3"
            }), 
        ]),
        (0, _glsf.column)([
            (0, _glsf.paragraph)("Lorem ipsum dolor sit amet, consectetur adipiscing elit."),
            (0, _glsf.paragraph)("Quisque vulputate dui eget lacus luctus, et vehicula dui sollicitudin."),
            (0, _glsf.heading)("Subtitle", {
                level: 2
            }),
            (0, _glsf.paragraph)("Duis et ultricies felis."), 
        ]), 
    ]),
    (0, _glsf.heading)("Example 1-2", {
        level: 2
    }),
    (0, _glsf.mediaContainer)([
        (0, _glsf.image)("https://api.lorem.space/image/fashion?w=600&h=300"),
        (0, _glsf.image)("https://api.lorem.space/image/fashion?w=600&h=600"),
        (0, _glsf.image)("https://api.lorem.space/image/fashion?w=600&h=600"), 
    ], {
        layout: "1-2"
    }),
    (0, _glsf.heading)("Example 1-3", {
        level: 2
    }),
    (0, _glsf.mediaContainer)([
        (0, _glsf.image)("https://api.lorem.space/image/fashion?w=600&h=300"),
        (0, _glsf.image)("https://api.lorem.space/image/fashion?w=600&h=600"),
        (0, _glsf.image)("https://api.lorem.space/image/fashion?w=600&h=600"),
        (0, _glsf.image)("https://api.lorem.space/image/fashion?w=600&h=600"), 
    ], {
        layout: "1-3"
    }),
    (0, _glsf.heading)("Example 2x2", {
        level: 2
    }),
    (0, _glsf.mediaContainer)([
        (0, _glsf.image)("https://api.lorem.space/image/fashion?w=600&h=600"),
        (0, _glsf.image)("https://api.lorem.space/image/fashion?w=600&h=600"),
        (0, _glsf.image)("https://api.lorem.space/image/fashion?w=600&h=600"),
        (0, _glsf.image)("https://api.lorem.space/image/fashion?w=600&h=600"), 
    ], {
        layout: "2x2"
    }),
    (0, _glsf.heading)("Example 3x3", {
        level: 2
    }),
    (0, _glsf.mediaContainer)([
        (0, _glsf.image)("https://api.lorem.space/image/fashion?w=600&h=600"),
        (0, _glsf.image)("https://api.lorem.space/image/fashion?w=600&h=600"),
        (0, _glsf.image)("https://api.lorem.space/image/fashion?w=600&h=600"),
        (0, _glsf.image)("https://api.lorem.space/image/fashion?w=600&h=600"),
        (0, _glsf.image)("https://api.lorem.space/image/fashion?w=600&h=600"),
        (0, _glsf.image)("https://api.lorem.space/image/fashion?w=600&h=600"),
        (0, _glsf.image)("https://api.lorem.space/image/fashion?w=600&h=600"),
        (0, _glsf.image)("https://api.lorem.space/image/fashion?w=600&h=600"),
        (0, _glsf.image)("https://api.lorem.space/image/fashion?w=600&h=600"), 
    ], {
        layout: "3x3"
    }), 
]);
function renderHtml() {
    try {
        const tree1 = JSON.parse(editor.value);
        const hast = (0, _glsf.render)(tree1);
        const html = (0, _hastUtilToHtml.toHtml)(hast);
        output.innerHTML = html;
    } catch (err) {
        console.log(err);
    }
}
editor.innerHTML = JSON.stringify(tree, null, 2);
renderHtml();
editor.addEventListener("input", renderHtml);

},{"hast-util-to-html":"c898u","glsf":"8nXCR"}],"c898u":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @typedef {import('./lib/types.js').Options} Options
 */ parcelHelpers.export(exports, "toHtml", ()=>(0, _indexJs.toHtml));
var _indexJs = require("./lib/index.js");

},{"./lib/index.js":"3Pqes","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3Pqes":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @param {Node|Array.<Node>} node
 * @param {Options} [options]
 * @returns {string}
 */ parcelHelpers.export(exports, "toHtml", ()=>toHtml);
/**
 * @typedef {import('./types.js').Node} Node
 * @typedef {import('./types.js').Options} Options
 * @typedef {import('./types.js').Context} Context
 * @typedef {import('./types.js').Quote} Quote
 */ var _propertyInformation = require("property-information");
var _htmlVoidElements = require("html-void-elements");
var _indexJs = require("./omission/index.js");
var _treeJs = require("./tree.js");
function toHtml(node, options = {}) {
    const quote = options.quote || '"';
    /** @type {Quote} */ const alternative = quote === '"' ? "'" : '"';
    if (quote !== '"' && quote !== "'") throw new Error("Invalid quote `" + quote + "`, expected `'` or `\"`");
    /** @type {Context} */ const context = {
        valid: options.allowParseErrors ? 0 : 1,
        safe: options.allowDangerousCharacters ? 0 : 1,
        schema: options.space === "svg" ? (0, _propertyInformation.svg) : (0, _propertyInformation.html),
        omit: options.omitOptionalTags ? (0, _indexJs.omission) : undefined,
        quote,
        alternative,
        smart: options.quoteSmart,
        unquoted: options.preferUnquoted,
        tight: options.tightAttributes,
        upperDoctype: options.upperDoctype,
        tightDoctype: options.tightDoctype,
        bogusComments: options.bogusComments,
        tightLists: options.tightCommaSeparatedLists,
        tightClose: options.tightSelfClosing,
        collapseEmpty: options.collapseEmptyAttributes,
        dangerous: options.allowDangerousHtml,
        voids: options.voids || (0, _htmlVoidElements.htmlVoidElements).concat(),
        entities: options.entities || {},
        close: options.closeSelfClosing,
        closeEmpty: options.closeEmptyElements
    };
    return (0, _treeJs.one)(context, // @ts-ignore Assume `node` does not contain a root.
    Array.isArray(node) ? {
        type: "root",
        children: node
    } : node, null, null);
}

},{"property-information":"9xjkX","html-void-elements":"fUgx7","./omission/index.js":"lFIFU","./tree.js":"g9BfU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9xjkX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "find", ()=>(0, _findJs.find));
parcelHelpers.export(exports, "hastToReact", ()=>(0, _hastToReactJs.hastToReact));
parcelHelpers.export(exports, "normalize", ()=>(0, _normalizeJs.normalize));
parcelHelpers.export(exports, "html", ()=>html);
parcelHelpers.export(exports, "svg", ()=>svg);
/**
 * @typedef {import('./lib/util/info.js').Info} Info
 * @typedef {import('./lib/util/schema.js').Schema} Schema
 */ var _mergeJs = require("./lib/util/merge.js");
var _xlinkJs = require("./lib/xlink.js");
var _xmlJs = require("./lib/xml.js");
var _xmlnsJs = require("./lib/xmlns.js");
var _ariaJs = require("./lib/aria.js");
var _htmlJs = require("./lib/html.js");
var _svgJs = require("./lib/svg.js");
var _findJs = require("./lib/find.js");
var _hastToReactJs = require("./lib/hast-to-react.js");
var _normalizeJs = require("./lib/normalize.js");
const html = (0, _mergeJs.merge)([
    (0, _xmlJs.xml),
    (0, _xlinkJs.xlink),
    (0, _xmlnsJs.xmlns),
    (0, _ariaJs.aria),
    (0, _htmlJs.html)
], "html");
const svg = (0, _mergeJs.merge)([
    (0, _xmlJs.xml),
    (0, _xlinkJs.xlink),
    (0, _xmlnsJs.xmlns),
    (0, _ariaJs.aria),
    (0, _svgJs.svg)
], "svg");

},{"./lib/util/merge.js":"bA18U","./lib/xlink.js":"dPUJb","./lib/xml.js":"1CTR2","./lib/xmlns.js":"kLlZk","./lib/aria.js":"5Rvig","./lib/html.js":"1wsQi","./lib/svg.js":"cwrha","./lib/find.js":"f8xh9","./lib/hast-to-react.js":false,"./lib/normalize.js":"4RPtu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bA18U":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @param {Schema[]} definitions
 * @param {string} [space]
 * @returns {Schema}
 */ parcelHelpers.export(exports, "merge", ()=>merge);
/**
 * @typedef {import('./schema.js').Properties} Properties
 * @typedef {import('./schema.js').Normal} Normal
 */ var _schemaJs = require("./schema.js");
function merge(definitions, space) {
    /** @type {Properties} */ const property = {};
    /** @type {Normal} */ const normal = {};
    let index = -1;
    while(++index < definitions.length){
        Object.assign(property, definitions[index].property);
        Object.assign(normal, definitions[index].normal);
    }
    return new (0, _schemaJs.Schema)(property, normal, space);
}

},{"./schema.js":"5Q4Yb","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5Q4Yb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @typedef {import('./info.js').Info} Info
 * @typedef {Record<string, Info>} Properties
 * @typedef {Record<string, string>} Normal
 */ parcelHelpers.export(exports, "Schema", ()=>Schema);
class Schema {
    /**
   * @constructor
   * @param {Properties} property
   * @param {Normal} normal
   * @param {string} [space]
   */ constructor(property, normal, space){
        this.property = property;
        this.normal = normal;
        if (space) this.space = space;
    }
}
/** @type {Properties} */ Schema.prototype.property = {};
/** @type {Normal} */ Schema.prototype.normal = {};
/** @type {string|null} */ Schema.prototype.space = null;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
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

},{}],"dPUJb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "xlink", ()=>xlink);
var _createJs = require("./util/create.js");
const xlink = (0, _createJs.create)({
    space: "xlink",
    transform (_, prop) {
        return "xlink:" + prop.slice(5).toLowerCase();
    },
    properties: {
        xLinkActuate: null,
        xLinkArcRole: null,
        xLinkHref: null,
        xLinkRole: null,
        xLinkShow: null,
        xLinkTitle: null,
        xLinkType: null
    }
});

},{"./util/create.js":"d3jUe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d3jUe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @param {Definition} definition
 * @returns {Schema}
 */ parcelHelpers.export(exports, "create", ()=>create);
/**
 * @typedef {import('./schema.js').Properties} Properties
 * @typedef {import('./schema.js').Normal} Normal
 *
 * @typedef {Record<string, string>} Attributes
 *
 * @typedef {Object} Definition
 * @property {Record<string, number|null>} properties
 * @property {(attributes: Attributes, property: string) => string} transform
 * @property {string} [space]
 * @property {Attributes} [attributes]
 * @property {Array<string>} [mustUseProperty]
 */ var _normalizeJs = require("../normalize.js");
var _schemaJs = require("./schema.js");
var _definedInfoJs = require("./defined-info.js");
const own = {}.hasOwnProperty;
function create(definition) {
    /** @type {Properties} */ const property = {};
    /** @type {Normal} */ const normal = {};
    /** @type {string} */ let prop;
    for(prop in definition.properties)if (own.call(definition.properties, prop)) {
        const value = definition.properties[prop];
        const info = new (0, _definedInfoJs.DefinedInfo)(prop, definition.transform(definition.attributes || {}, prop), value, definition.space);
        if (definition.mustUseProperty && definition.mustUseProperty.includes(prop)) info.mustUseProperty = true;
        property[prop] = info;
        normal[(0, _normalizeJs.normalize)(prop)] = prop;
        normal[(0, _normalizeJs.normalize)(info.attribute)] = prop;
    }
    return new (0, _schemaJs.Schema)(property, normal, definition.space);
}

},{"../normalize.js":"4RPtu","./schema.js":"5Q4Yb","./defined-info.js":"3rtLg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4RPtu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @param {string} value
 * @returns {string}
 */ parcelHelpers.export(exports, "normalize", ()=>normalize);
function normalize(value) {
    return value.toLowerCase();
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3rtLg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DefinedInfo", ()=>DefinedInfo);
var _infoJs = require("./info.js");
var _typesJs = require("./types.js");
/** @type {Array<keyof types>} */ // @ts-expect-error: hush.
const checks = Object.keys(_typesJs);
class DefinedInfo extends (0, _infoJs.Info) {
    /**
   * @constructor
   * @param {string} property
   * @param {string} attribute
   * @param {number|null} [mask]
   * @param {string} [space]
   */ constructor(property, attribute, mask, space){
        let index = -1;
        super(property, attribute);
        mark(this, "space", space);
        if (typeof mask === "number") while(++index < checks.length){
            const check = checks[index];
            mark(this, checks[index], (mask & _typesJs[check]) === _typesJs[check]);
        }
    }
}
DefinedInfo.prototype.defined = true;
/**
 * @param {DefinedInfo} values
 * @param {string} key
 * @param {unknown} value
 */ function mark(values, key, value) {
    if (value) // @ts-expect-error: assume `value` matches the expected value of `key`.
    values[key] = value;
}

},{"./info.js":"7EkGP","./types.js":"lV7ME","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7EkGP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Info", ()=>Info);
class Info {
    /**
   * @constructor
   * @param {string} property
   * @param {string} attribute
   */ constructor(property, attribute){
        /** @type {string} */ this.property = property;
        /** @type {string} */ this.attribute = attribute;
    }
}
/** @type {string|null} */ Info.prototype.space = null;
Info.prototype.boolean = false;
Info.prototype.booleanish = false;
Info.prototype.overloadedBoolean = false;
Info.prototype.number = false;
Info.prototype.commaSeparated = false;
Info.prototype.spaceSeparated = false;
Info.prototype.commaOrSpaceSeparated = false;
Info.prototype.mustUseProperty = false;
Info.prototype.defined = false;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lV7ME":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "boolean", ()=>boolean);
parcelHelpers.export(exports, "booleanish", ()=>booleanish);
parcelHelpers.export(exports, "overloadedBoolean", ()=>overloadedBoolean);
parcelHelpers.export(exports, "number", ()=>number);
parcelHelpers.export(exports, "spaceSeparated", ()=>spaceSeparated);
parcelHelpers.export(exports, "commaSeparated", ()=>commaSeparated);
parcelHelpers.export(exports, "commaOrSpaceSeparated", ()=>commaOrSpaceSeparated);
let powers = 0;
const boolean = increment();
const booleanish = increment();
const overloadedBoolean = increment();
const number = increment();
const spaceSeparated = increment();
const commaSeparated = increment();
const commaOrSpaceSeparated = increment();
function increment() {
    return 2 ** ++powers;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1CTR2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "xml", ()=>xml);
var _createJs = require("./util/create.js");
const xml = (0, _createJs.create)({
    space: "xml",
    transform (_, prop) {
        return "xml:" + prop.slice(3).toLowerCase();
    },
    properties: {
        xmlLang: null,
        xmlBase: null,
        xmlSpace: null
    }
});

},{"./util/create.js":"d3jUe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kLlZk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "xmlns", ()=>xmlns);
var _createJs = require("./util/create.js");
var _caseInsensitiveTransformJs = require("./util/case-insensitive-transform.js");
const xmlns = (0, _createJs.create)({
    space: "xmlns",
    attributes: {
        xmlnsxlink: "xmlns:xlink"
    },
    transform: (0, _caseInsensitiveTransformJs.caseInsensitiveTransform),
    properties: {
        xmlns: null,
        xmlnsXLink: null
    }
});

},{"./util/create.js":"d3jUe","./util/case-insensitive-transform.js":"87xkY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"87xkY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @param {Record<string, string>} attributes
 * @param {string} property
 * @returns {string}
 */ parcelHelpers.export(exports, "caseInsensitiveTransform", ()=>caseInsensitiveTransform);
var _caseSensitiveTransformJs = require("./case-sensitive-transform.js");
function caseInsensitiveTransform(attributes, property) {
    return (0, _caseSensitiveTransformJs.caseSensitiveTransform)(attributes, property.toLowerCase());
}

},{"./case-sensitive-transform.js":"kFRRJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kFRRJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @param {Record<string, string>} attributes
 * @param {string} attribute
 * @returns {string}
 */ parcelHelpers.export(exports, "caseSensitiveTransform", ()=>caseSensitiveTransform);
function caseSensitiveTransform(attributes, attribute) {
    return attribute in attributes ? attributes[attribute] : attribute;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5Rvig":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "aria", ()=>aria);
var _typesJs = require("./util/types.js");
var _createJs = require("./util/create.js");
const aria = (0, _createJs.create)({
    transform (_, prop) {
        return prop === "role" ? prop : "aria-" + prop.slice(4).toLowerCase();
    },
    properties: {
        ariaActiveDescendant: null,
        ariaAtomic: (0, _typesJs.booleanish),
        ariaAutoComplete: null,
        ariaBusy: (0, _typesJs.booleanish),
        ariaChecked: (0, _typesJs.booleanish),
        ariaColCount: (0, _typesJs.number),
        ariaColIndex: (0, _typesJs.number),
        ariaColSpan: (0, _typesJs.number),
        ariaControls: (0, _typesJs.spaceSeparated),
        ariaCurrent: null,
        ariaDescribedBy: (0, _typesJs.spaceSeparated),
        ariaDetails: null,
        ariaDisabled: (0, _typesJs.booleanish),
        ariaDropEffect: (0, _typesJs.spaceSeparated),
        ariaErrorMessage: null,
        ariaExpanded: (0, _typesJs.booleanish),
        ariaFlowTo: (0, _typesJs.spaceSeparated),
        ariaGrabbed: (0, _typesJs.booleanish),
        ariaHasPopup: null,
        ariaHidden: (0, _typesJs.booleanish),
        ariaInvalid: null,
        ariaKeyShortcuts: null,
        ariaLabel: null,
        ariaLabelledBy: (0, _typesJs.spaceSeparated),
        ariaLevel: (0, _typesJs.number),
        ariaLive: null,
        ariaModal: (0, _typesJs.booleanish),
        ariaMultiLine: (0, _typesJs.booleanish),
        ariaMultiSelectable: (0, _typesJs.booleanish),
        ariaOrientation: null,
        ariaOwns: (0, _typesJs.spaceSeparated),
        ariaPlaceholder: null,
        ariaPosInSet: (0, _typesJs.number),
        ariaPressed: (0, _typesJs.booleanish),
        ariaReadOnly: (0, _typesJs.booleanish),
        ariaRelevant: null,
        ariaRequired: (0, _typesJs.booleanish),
        ariaRoleDescription: (0, _typesJs.spaceSeparated),
        ariaRowCount: (0, _typesJs.number),
        ariaRowIndex: (0, _typesJs.number),
        ariaRowSpan: (0, _typesJs.number),
        ariaSelected: (0, _typesJs.booleanish),
        ariaSetSize: (0, _typesJs.number),
        ariaSort: null,
        ariaValueMax: (0, _typesJs.number),
        ariaValueMin: (0, _typesJs.number),
        ariaValueNow: (0, _typesJs.number),
        ariaValueText: null,
        role: null
    }
});

},{"./util/types.js":"lV7ME","./util/create.js":"d3jUe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1wsQi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "html", ()=>html);
var _typesJs = require("./util/types.js");
var _createJs = require("./util/create.js");
var _caseInsensitiveTransformJs = require("./util/case-insensitive-transform.js");
const html = (0, _createJs.create)({
    space: "html",
    attributes: {
        acceptcharset: "accept-charset",
        classname: "class",
        htmlfor: "for",
        httpequiv: "http-equiv"
    },
    transform: (0, _caseInsensitiveTransformJs.caseInsensitiveTransform),
    mustUseProperty: [
        "checked",
        "multiple",
        "muted",
        "selected"
    ],
    properties: {
        // Standard Properties.
        abbr: null,
        accept: (0, _typesJs.commaSeparated),
        acceptCharset: (0, _typesJs.spaceSeparated),
        accessKey: (0, _typesJs.spaceSeparated),
        action: null,
        allow: null,
        allowFullScreen: (0, _typesJs.boolean),
        allowPaymentRequest: (0, _typesJs.boolean),
        allowUserMedia: (0, _typesJs.boolean),
        alt: null,
        as: null,
        async: (0, _typesJs.boolean),
        autoCapitalize: null,
        autoComplete: (0, _typesJs.spaceSeparated),
        autoFocus: (0, _typesJs.boolean),
        autoPlay: (0, _typesJs.boolean),
        capture: (0, _typesJs.boolean),
        charSet: null,
        checked: (0, _typesJs.boolean),
        cite: null,
        className: (0, _typesJs.spaceSeparated),
        cols: (0, _typesJs.number),
        colSpan: null,
        content: null,
        contentEditable: (0, _typesJs.booleanish),
        controls: (0, _typesJs.boolean),
        controlsList: (0, _typesJs.spaceSeparated),
        coords: (0, _typesJs.number) | (0, _typesJs.commaSeparated),
        crossOrigin: null,
        data: null,
        dateTime: null,
        decoding: null,
        default: (0, _typesJs.boolean),
        defer: (0, _typesJs.boolean),
        dir: null,
        dirName: null,
        disabled: (0, _typesJs.boolean),
        download: (0, _typesJs.overloadedBoolean),
        draggable: (0, _typesJs.booleanish),
        encType: null,
        enterKeyHint: null,
        form: null,
        formAction: null,
        formEncType: null,
        formMethod: null,
        formNoValidate: (0, _typesJs.boolean),
        formTarget: null,
        headers: (0, _typesJs.spaceSeparated),
        height: (0, _typesJs.number),
        hidden: (0, _typesJs.boolean),
        high: (0, _typesJs.number),
        href: null,
        hrefLang: null,
        htmlFor: (0, _typesJs.spaceSeparated),
        httpEquiv: (0, _typesJs.spaceSeparated),
        id: null,
        imageSizes: null,
        imageSrcSet: null,
        inputMode: null,
        integrity: null,
        is: null,
        isMap: (0, _typesJs.boolean),
        itemId: null,
        itemProp: (0, _typesJs.spaceSeparated),
        itemRef: (0, _typesJs.spaceSeparated),
        itemScope: (0, _typesJs.boolean),
        itemType: (0, _typesJs.spaceSeparated),
        kind: null,
        label: null,
        lang: null,
        language: null,
        list: null,
        loading: null,
        loop: (0, _typesJs.boolean),
        low: (0, _typesJs.number),
        manifest: null,
        max: null,
        maxLength: (0, _typesJs.number),
        media: null,
        method: null,
        min: null,
        minLength: (0, _typesJs.number),
        multiple: (0, _typesJs.boolean),
        muted: (0, _typesJs.boolean),
        name: null,
        nonce: null,
        noModule: (0, _typesJs.boolean),
        noValidate: (0, _typesJs.boolean),
        onAbort: null,
        onAfterPrint: null,
        onAuxClick: null,
        onBeforePrint: null,
        onBeforeUnload: null,
        onBlur: null,
        onCancel: null,
        onCanPlay: null,
        onCanPlayThrough: null,
        onChange: null,
        onClick: null,
        onClose: null,
        onContextLost: null,
        onContextMenu: null,
        onContextRestored: null,
        onCopy: null,
        onCueChange: null,
        onCut: null,
        onDblClick: null,
        onDrag: null,
        onDragEnd: null,
        onDragEnter: null,
        onDragExit: null,
        onDragLeave: null,
        onDragOver: null,
        onDragStart: null,
        onDrop: null,
        onDurationChange: null,
        onEmptied: null,
        onEnded: null,
        onError: null,
        onFocus: null,
        onFormData: null,
        onHashChange: null,
        onInput: null,
        onInvalid: null,
        onKeyDown: null,
        onKeyPress: null,
        onKeyUp: null,
        onLanguageChange: null,
        onLoad: null,
        onLoadedData: null,
        onLoadedMetadata: null,
        onLoadEnd: null,
        onLoadStart: null,
        onMessage: null,
        onMessageError: null,
        onMouseDown: null,
        onMouseEnter: null,
        onMouseLeave: null,
        onMouseMove: null,
        onMouseOut: null,
        onMouseOver: null,
        onMouseUp: null,
        onOffline: null,
        onOnline: null,
        onPageHide: null,
        onPageShow: null,
        onPaste: null,
        onPause: null,
        onPlay: null,
        onPlaying: null,
        onPopState: null,
        onProgress: null,
        onRateChange: null,
        onRejectionHandled: null,
        onReset: null,
        onResize: null,
        onScroll: null,
        onSecurityPolicyViolation: null,
        onSeeked: null,
        onSeeking: null,
        onSelect: null,
        onSlotChange: null,
        onStalled: null,
        onStorage: null,
        onSubmit: null,
        onSuspend: null,
        onTimeUpdate: null,
        onToggle: null,
        onUnhandledRejection: null,
        onUnload: null,
        onVolumeChange: null,
        onWaiting: null,
        onWheel: null,
        open: (0, _typesJs.boolean),
        optimum: (0, _typesJs.number),
        pattern: null,
        ping: (0, _typesJs.spaceSeparated),
        placeholder: null,
        playsInline: (0, _typesJs.boolean),
        poster: null,
        preload: null,
        readOnly: (0, _typesJs.boolean),
        referrerPolicy: null,
        rel: (0, _typesJs.spaceSeparated),
        required: (0, _typesJs.boolean),
        reversed: (0, _typesJs.boolean),
        rows: (0, _typesJs.number),
        rowSpan: (0, _typesJs.number),
        sandbox: (0, _typesJs.spaceSeparated),
        scope: null,
        scoped: (0, _typesJs.boolean),
        seamless: (0, _typesJs.boolean),
        selected: (0, _typesJs.boolean),
        shape: null,
        size: (0, _typesJs.number),
        sizes: null,
        slot: null,
        span: (0, _typesJs.number),
        spellCheck: (0, _typesJs.booleanish),
        src: null,
        srcDoc: null,
        srcLang: null,
        srcSet: null,
        start: (0, _typesJs.number),
        step: null,
        style: null,
        tabIndex: (0, _typesJs.number),
        target: null,
        title: null,
        translate: null,
        type: null,
        typeMustMatch: (0, _typesJs.boolean),
        useMap: null,
        value: (0, _typesJs.booleanish),
        width: (0, _typesJs.number),
        wrap: null,
        // Legacy.
        // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
        align: null,
        aLink: null,
        archive: (0, _typesJs.spaceSeparated),
        axis: null,
        background: null,
        bgColor: null,
        border: (0, _typesJs.number),
        borderColor: null,
        bottomMargin: (0, _typesJs.number),
        cellPadding: null,
        cellSpacing: null,
        char: null,
        charOff: null,
        classId: null,
        clear: null,
        code: null,
        codeBase: null,
        codeType: null,
        color: null,
        compact: (0, _typesJs.boolean),
        declare: (0, _typesJs.boolean),
        event: null,
        face: null,
        frame: null,
        frameBorder: null,
        hSpace: (0, _typesJs.number),
        leftMargin: (0, _typesJs.number),
        link: null,
        longDesc: null,
        lowSrc: null,
        marginHeight: (0, _typesJs.number),
        marginWidth: (0, _typesJs.number),
        noResize: (0, _typesJs.boolean),
        noHref: (0, _typesJs.boolean),
        noShade: (0, _typesJs.boolean),
        noWrap: (0, _typesJs.boolean),
        object: null,
        profile: null,
        prompt: null,
        rev: null,
        rightMargin: (0, _typesJs.number),
        rules: null,
        scheme: null,
        scrolling: (0, _typesJs.booleanish),
        standby: null,
        summary: null,
        text: null,
        topMargin: (0, _typesJs.number),
        valueType: null,
        version: null,
        vAlign: null,
        vLink: null,
        vSpace: (0, _typesJs.number),
        // Non-standard Properties.
        allowTransparency: null,
        autoCorrect: null,
        autoSave: null,
        disablePictureInPicture: (0, _typesJs.boolean),
        disableRemotePlayback: (0, _typesJs.boolean),
        prefix: null,
        property: null,
        results: (0, _typesJs.number),
        security: null,
        unselectable: null
    }
});

},{"./util/types.js":"lV7ME","./util/create.js":"d3jUe","./util/case-insensitive-transform.js":"87xkY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cwrha":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "svg", ()=>svg);
var _typesJs = require("./util/types.js");
var _createJs = require("./util/create.js");
var _caseSensitiveTransformJs = require("./util/case-sensitive-transform.js");
const svg = (0, _createJs.create)({
    space: "svg",
    attributes: {
        accentHeight: "accent-height",
        alignmentBaseline: "alignment-baseline",
        arabicForm: "arabic-form",
        baselineShift: "baseline-shift",
        capHeight: "cap-height",
        className: "class",
        clipPath: "clip-path",
        clipRule: "clip-rule",
        colorInterpolation: "color-interpolation",
        colorInterpolationFilters: "color-interpolation-filters",
        colorProfile: "color-profile",
        colorRendering: "color-rendering",
        crossOrigin: "crossorigin",
        dataType: "datatype",
        dominantBaseline: "dominant-baseline",
        enableBackground: "enable-background",
        fillOpacity: "fill-opacity",
        fillRule: "fill-rule",
        floodColor: "flood-color",
        floodOpacity: "flood-opacity",
        fontFamily: "font-family",
        fontSize: "font-size",
        fontSizeAdjust: "font-size-adjust",
        fontStretch: "font-stretch",
        fontStyle: "font-style",
        fontVariant: "font-variant",
        fontWeight: "font-weight",
        glyphName: "glyph-name",
        glyphOrientationHorizontal: "glyph-orientation-horizontal",
        glyphOrientationVertical: "glyph-orientation-vertical",
        hrefLang: "hreflang",
        horizAdvX: "horiz-adv-x",
        horizOriginX: "horiz-origin-x",
        horizOriginY: "horiz-origin-y",
        imageRendering: "image-rendering",
        letterSpacing: "letter-spacing",
        lightingColor: "lighting-color",
        markerEnd: "marker-end",
        markerMid: "marker-mid",
        markerStart: "marker-start",
        navDown: "nav-down",
        navDownLeft: "nav-down-left",
        navDownRight: "nav-down-right",
        navLeft: "nav-left",
        navNext: "nav-next",
        navPrev: "nav-prev",
        navRight: "nav-right",
        navUp: "nav-up",
        navUpLeft: "nav-up-left",
        navUpRight: "nav-up-right",
        onAbort: "onabort",
        onActivate: "onactivate",
        onAfterPrint: "onafterprint",
        onBeforePrint: "onbeforeprint",
        onBegin: "onbegin",
        onCancel: "oncancel",
        onCanPlay: "oncanplay",
        onCanPlayThrough: "oncanplaythrough",
        onChange: "onchange",
        onClick: "onclick",
        onClose: "onclose",
        onCopy: "oncopy",
        onCueChange: "oncuechange",
        onCut: "oncut",
        onDblClick: "ondblclick",
        onDrag: "ondrag",
        onDragEnd: "ondragend",
        onDragEnter: "ondragenter",
        onDragExit: "ondragexit",
        onDragLeave: "ondragleave",
        onDragOver: "ondragover",
        onDragStart: "ondragstart",
        onDrop: "ondrop",
        onDurationChange: "ondurationchange",
        onEmptied: "onemptied",
        onEnd: "onend",
        onEnded: "onended",
        onError: "onerror",
        onFocus: "onfocus",
        onFocusIn: "onfocusin",
        onFocusOut: "onfocusout",
        onHashChange: "onhashchange",
        onInput: "oninput",
        onInvalid: "oninvalid",
        onKeyDown: "onkeydown",
        onKeyPress: "onkeypress",
        onKeyUp: "onkeyup",
        onLoad: "onload",
        onLoadedData: "onloadeddata",
        onLoadedMetadata: "onloadedmetadata",
        onLoadStart: "onloadstart",
        onMessage: "onmessage",
        onMouseDown: "onmousedown",
        onMouseEnter: "onmouseenter",
        onMouseLeave: "onmouseleave",
        onMouseMove: "onmousemove",
        onMouseOut: "onmouseout",
        onMouseOver: "onmouseover",
        onMouseUp: "onmouseup",
        onMouseWheel: "onmousewheel",
        onOffline: "onoffline",
        onOnline: "ononline",
        onPageHide: "onpagehide",
        onPageShow: "onpageshow",
        onPaste: "onpaste",
        onPause: "onpause",
        onPlay: "onplay",
        onPlaying: "onplaying",
        onPopState: "onpopstate",
        onProgress: "onprogress",
        onRateChange: "onratechange",
        onRepeat: "onrepeat",
        onReset: "onreset",
        onResize: "onresize",
        onScroll: "onscroll",
        onSeeked: "onseeked",
        onSeeking: "onseeking",
        onSelect: "onselect",
        onShow: "onshow",
        onStalled: "onstalled",
        onStorage: "onstorage",
        onSubmit: "onsubmit",
        onSuspend: "onsuspend",
        onTimeUpdate: "ontimeupdate",
        onToggle: "ontoggle",
        onUnload: "onunload",
        onVolumeChange: "onvolumechange",
        onWaiting: "onwaiting",
        onZoom: "onzoom",
        overlinePosition: "overline-position",
        overlineThickness: "overline-thickness",
        paintOrder: "paint-order",
        panose1: "panose-1",
        pointerEvents: "pointer-events",
        referrerPolicy: "referrerpolicy",
        renderingIntent: "rendering-intent",
        shapeRendering: "shape-rendering",
        stopColor: "stop-color",
        stopOpacity: "stop-opacity",
        strikethroughPosition: "strikethrough-position",
        strikethroughThickness: "strikethrough-thickness",
        strokeDashArray: "stroke-dasharray",
        strokeDashOffset: "stroke-dashoffset",
        strokeLineCap: "stroke-linecap",
        strokeLineJoin: "stroke-linejoin",
        strokeMiterLimit: "stroke-miterlimit",
        strokeOpacity: "stroke-opacity",
        strokeWidth: "stroke-width",
        tabIndex: "tabindex",
        textAnchor: "text-anchor",
        textDecoration: "text-decoration",
        textRendering: "text-rendering",
        typeOf: "typeof",
        underlinePosition: "underline-position",
        underlineThickness: "underline-thickness",
        unicodeBidi: "unicode-bidi",
        unicodeRange: "unicode-range",
        unitsPerEm: "units-per-em",
        vAlphabetic: "v-alphabetic",
        vHanging: "v-hanging",
        vIdeographic: "v-ideographic",
        vMathematical: "v-mathematical",
        vectorEffect: "vector-effect",
        vertAdvY: "vert-adv-y",
        vertOriginX: "vert-origin-x",
        vertOriginY: "vert-origin-y",
        wordSpacing: "word-spacing",
        writingMode: "writing-mode",
        xHeight: "x-height",
        // These were camelcased in Tiny. Now lowercased in SVG 2
        playbackOrder: "playbackorder",
        timelineBegin: "timelinebegin"
    },
    transform: (0, _caseSensitiveTransformJs.caseSensitiveTransform),
    properties: {
        about: (0, _typesJs.commaOrSpaceSeparated),
        accentHeight: (0, _typesJs.number),
        accumulate: null,
        additive: null,
        alignmentBaseline: null,
        alphabetic: (0, _typesJs.number),
        amplitude: (0, _typesJs.number),
        arabicForm: null,
        ascent: (0, _typesJs.number),
        attributeName: null,
        attributeType: null,
        azimuth: (0, _typesJs.number),
        bandwidth: null,
        baselineShift: null,
        baseFrequency: null,
        baseProfile: null,
        bbox: null,
        begin: null,
        bias: (0, _typesJs.number),
        by: null,
        calcMode: null,
        capHeight: (0, _typesJs.number),
        className: (0, _typesJs.spaceSeparated),
        clip: null,
        clipPath: null,
        clipPathUnits: null,
        clipRule: null,
        color: null,
        colorInterpolation: null,
        colorInterpolationFilters: null,
        colorProfile: null,
        colorRendering: null,
        content: null,
        contentScriptType: null,
        contentStyleType: null,
        crossOrigin: null,
        cursor: null,
        cx: null,
        cy: null,
        d: null,
        dataType: null,
        defaultAction: null,
        descent: (0, _typesJs.number),
        diffuseConstant: (0, _typesJs.number),
        direction: null,
        display: null,
        dur: null,
        divisor: (0, _typesJs.number),
        dominantBaseline: null,
        download: (0, _typesJs.boolean),
        dx: null,
        dy: null,
        edgeMode: null,
        editable: null,
        elevation: (0, _typesJs.number),
        enableBackground: null,
        end: null,
        event: null,
        exponent: (0, _typesJs.number),
        externalResourcesRequired: null,
        fill: null,
        fillOpacity: (0, _typesJs.number),
        fillRule: null,
        filter: null,
        filterRes: null,
        filterUnits: null,
        floodColor: null,
        floodOpacity: null,
        focusable: null,
        focusHighlight: null,
        fontFamily: null,
        fontSize: null,
        fontSizeAdjust: null,
        fontStretch: null,
        fontStyle: null,
        fontVariant: null,
        fontWeight: null,
        format: null,
        fr: null,
        from: null,
        fx: null,
        fy: null,
        g1: (0, _typesJs.commaSeparated),
        g2: (0, _typesJs.commaSeparated),
        glyphName: (0, _typesJs.commaSeparated),
        glyphOrientationHorizontal: null,
        glyphOrientationVertical: null,
        glyphRef: null,
        gradientTransform: null,
        gradientUnits: null,
        handler: null,
        hanging: (0, _typesJs.number),
        hatchContentUnits: null,
        hatchUnits: null,
        height: null,
        href: null,
        hrefLang: null,
        horizAdvX: (0, _typesJs.number),
        horizOriginX: (0, _typesJs.number),
        horizOriginY: (0, _typesJs.number),
        id: null,
        ideographic: (0, _typesJs.number),
        imageRendering: null,
        initialVisibility: null,
        in: null,
        in2: null,
        intercept: (0, _typesJs.number),
        k: (0, _typesJs.number),
        k1: (0, _typesJs.number),
        k2: (0, _typesJs.number),
        k3: (0, _typesJs.number),
        k4: (0, _typesJs.number),
        kernelMatrix: (0, _typesJs.commaOrSpaceSeparated),
        kernelUnitLength: null,
        keyPoints: null,
        keySplines: null,
        keyTimes: null,
        kerning: null,
        lang: null,
        lengthAdjust: null,
        letterSpacing: null,
        lightingColor: null,
        limitingConeAngle: (0, _typesJs.number),
        local: null,
        markerEnd: null,
        markerMid: null,
        markerStart: null,
        markerHeight: null,
        markerUnits: null,
        markerWidth: null,
        mask: null,
        maskContentUnits: null,
        maskUnits: null,
        mathematical: null,
        max: null,
        media: null,
        mediaCharacterEncoding: null,
        mediaContentEncodings: null,
        mediaSize: (0, _typesJs.number),
        mediaTime: null,
        method: null,
        min: null,
        mode: null,
        name: null,
        navDown: null,
        navDownLeft: null,
        navDownRight: null,
        navLeft: null,
        navNext: null,
        navPrev: null,
        navRight: null,
        navUp: null,
        navUpLeft: null,
        navUpRight: null,
        numOctaves: null,
        observer: null,
        offset: null,
        onAbort: null,
        onActivate: null,
        onAfterPrint: null,
        onBeforePrint: null,
        onBegin: null,
        onCancel: null,
        onCanPlay: null,
        onCanPlayThrough: null,
        onChange: null,
        onClick: null,
        onClose: null,
        onCopy: null,
        onCueChange: null,
        onCut: null,
        onDblClick: null,
        onDrag: null,
        onDragEnd: null,
        onDragEnter: null,
        onDragExit: null,
        onDragLeave: null,
        onDragOver: null,
        onDragStart: null,
        onDrop: null,
        onDurationChange: null,
        onEmptied: null,
        onEnd: null,
        onEnded: null,
        onError: null,
        onFocus: null,
        onFocusIn: null,
        onFocusOut: null,
        onHashChange: null,
        onInput: null,
        onInvalid: null,
        onKeyDown: null,
        onKeyPress: null,
        onKeyUp: null,
        onLoad: null,
        onLoadedData: null,
        onLoadedMetadata: null,
        onLoadStart: null,
        onMessage: null,
        onMouseDown: null,
        onMouseEnter: null,
        onMouseLeave: null,
        onMouseMove: null,
        onMouseOut: null,
        onMouseOver: null,
        onMouseUp: null,
        onMouseWheel: null,
        onOffline: null,
        onOnline: null,
        onPageHide: null,
        onPageShow: null,
        onPaste: null,
        onPause: null,
        onPlay: null,
        onPlaying: null,
        onPopState: null,
        onProgress: null,
        onRateChange: null,
        onRepeat: null,
        onReset: null,
        onResize: null,
        onScroll: null,
        onSeeked: null,
        onSeeking: null,
        onSelect: null,
        onShow: null,
        onStalled: null,
        onStorage: null,
        onSubmit: null,
        onSuspend: null,
        onTimeUpdate: null,
        onToggle: null,
        onUnload: null,
        onVolumeChange: null,
        onWaiting: null,
        onZoom: null,
        opacity: null,
        operator: null,
        order: null,
        orient: null,
        orientation: null,
        origin: null,
        overflow: null,
        overlay: null,
        overlinePosition: (0, _typesJs.number),
        overlineThickness: (0, _typesJs.number),
        paintOrder: null,
        panose1: null,
        path: null,
        pathLength: (0, _typesJs.number),
        patternContentUnits: null,
        patternTransform: null,
        patternUnits: null,
        phase: null,
        ping: (0, _typesJs.spaceSeparated),
        pitch: null,
        playbackOrder: null,
        pointerEvents: null,
        points: null,
        pointsAtX: (0, _typesJs.number),
        pointsAtY: (0, _typesJs.number),
        pointsAtZ: (0, _typesJs.number),
        preserveAlpha: null,
        preserveAspectRatio: null,
        primitiveUnits: null,
        propagate: null,
        property: (0, _typesJs.commaOrSpaceSeparated),
        r: null,
        radius: null,
        referrerPolicy: null,
        refX: null,
        refY: null,
        rel: (0, _typesJs.commaOrSpaceSeparated),
        rev: (0, _typesJs.commaOrSpaceSeparated),
        renderingIntent: null,
        repeatCount: null,
        repeatDur: null,
        requiredExtensions: (0, _typesJs.commaOrSpaceSeparated),
        requiredFeatures: (0, _typesJs.commaOrSpaceSeparated),
        requiredFonts: (0, _typesJs.commaOrSpaceSeparated),
        requiredFormats: (0, _typesJs.commaOrSpaceSeparated),
        resource: null,
        restart: null,
        result: null,
        rotate: null,
        rx: null,
        ry: null,
        scale: null,
        seed: null,
        shapeRendering: null,
        side: null,
        slope: null,
        snapshotTime: null,
        specularConstant: (0, _typesJs.number),
        specularExponent: (0, _typesJs.number),
        spreadMethod: null,
        spacing: null,
        startOffset: null,
        stdDeviation: null,
        stemh: null,
        stemv: null,
        stitchTiles: null,
        stopColor: null,
        stopOpacity: null,
        strikethroughPosition: (0, _typesJs.number),
        strikethroughThickness: (0, _typesJs.number),
        string: null,
        stroke: null,
        strokeDashArray: (0, _typesJs.commaOrSpaceSeparated),
        strokeDashOffset: null,
        strokeLineCap: null,
        strokeLineJoin: null,
        strokeMiterLimit: (0, _typesJs.number),
        strokeOpacity: (0, _typesJs.number),
        strokeWidth: null,
        style: null,
        surfaceScale: (0, _typesJs.number),
        syncBehavior: null,
        syncBehaviorDefault: null,
        syncMaster: null,
        syncTolerance: null,
        syncToleranceDefault: null,
        systemLanguage: (0, _typesJs.commaOrSpaceSeparated),
        tabIndex: (0, _typesJs.number),
        tableValues: null,
        target: null,
        targetX: (0, _typesJs.number),
        targetY: (0, _typesJs.number),
        textAnchor: null,
        textDecoration: null,
        textRendering: null,
        textLength: null,
        timelineBegin: null,
        title: null,
        transformBehavior: null,
        type: null,
        typeOf: (0, _typesJs.commaOrSpaceSeparated),
        to: null,
        transform: null,
        u1: null,
        u2: null,
        underlinePosition: (0, _typesJs.number),
        underlineThickness: (0, _typesJs.number),
        unicode: null,
        unicodeBidi: null,
        unicodeRange: null,
        unitsPerEm: (0, _typesJs.number),
        values: null,
        vAlphabetic: (0, _typesJs.number),
        vMathematical: (0, _typesJs.number),
        vectorEffect: null,
        vHanging: (0, _typesJs.number),
        vIdeographic: (0, _typesJs.number),
        version: null,
        vertAdvY: (0, _typesJs.number),
        vertOriginX: (0, _typesJs.number),
        vertOriginY: (0, _typesJs.number),
        viewBox: null,
        viewTarget: null,
        visibility: null,
        width: null,
        widths: null,
        wordSpacing: null,
        writingMode: null,
        x: null,
        x1: null,
        x2: null,
        xChannelSelector: null,
        xHeight: (0, _typesJs.number),
        y: null,
        y1: null,
        y2: null,
        yChannelSelector: null,
        z: null,
        zoomAndPan: null
    }
});

},{"./util/types.js":"lV7ME","./util/create.js":"d3jUe","./util/case-sensitive-transform.js":"kFRRJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f8xh9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @param {Schema} schema
 * @param {string} value
 * @returns {Info}
 */ parcelHelpers.export(exports, "find", ()=>find);
/**
 * @typedef {import('./util/schema.js').Schema} Schema
 */ var _normalizeJs = require("./normalize.js");
var _definedInfoJs = require("./util/defined-info.js");
var _infoJs = require("./util/info.js");
const valid = /^data[-\w.:]+$/i;
const dash = /-[a-z]/g;
const cap = /[A-Z]/g;
function find(schema, value) {
    const normal = (0, _normalizeJs.normalize)(value);
    let prop = value;
    let Type = (0, _infoJs.Info);
    if (normal in schema.normal) return schema.property[schema.normal[normal]];
    if (normal.length > 4 && normal.slice(0, 4) === "data" && valid.test(value)) {
        // Attribute or property.
        if (value.charAt(4) === "-") {
            // Turn it into a property.
            const rest = value.slice(5).replace(dash, camelcase);
            prop = "data" + rest.charAt(0).toUpperCase() + rest.slice(1);
        } else {
            // Turn it into an attribute.
            const rest = value.slice(4);
            if (!dash.test(rest)) {
                let dashes = rest.replace(cap, kebab);
                if (dashes.charAt(0) !== "-") dashes = "-" + dashes;
                value = "data" + dashes;
            }
        }
        Type = (0, _definedInfoJs.DefinedInfo);
    }
    return new Type(prop, value);
}
/**
 * @param {string} $0
 * @returns {string}
 */ function kebab($0) {
    return "-" + $0.toLowerCase();
}
/**
 * @param {string} $0
 * @returns {string}
 */ function camelcase($0) {
    return $0.charAt(1).toUpperCase();
}

},{"./normalize.js":"4RPtu","./util/defined-info.js":"3rtLg","./util/info.js":"7EkGP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fUgx7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "htmlVoidElements", ()=>htmlVoidElements);
const htmlVoidElements = [
    "area",
    "base",
    "basefont",
    "bgsound",
    "br",
    "col",
    "command",
    "embed",
    "frame",
    "hr",
    "image",
    "img",
    "input",
    "isindex",
    "keygen",
    "link",
    "menuitem",
    "meta",
    "nextid",
    "param",
    "source",
    "track",
    "wbr"
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lFIFU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "omission", ()=>omission);
/**
 * @typedef {import('../types.js').Omission} Omission
 */ var _openingJs = require("./opening.js");
var _closingJs = require("./closing.js");
const omission = {
    opening: (0, _openingJs.opening),
    closing: (0, _closingJs.closing)
};

},{"./opening.js":"9IbDY","./closing.js":"gKccf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9IbDY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "opening", ()=>opening);
/**
 * @typedef {import('../types.js').OmitHandle} OmitHandle
 * @typedef {import('../types.js').Child} Child
 */ var _hastUtilIsElement = require("hast-util-is-element");
var _commentJs = require("./util/comment.js");
var _siblingsJs = require("./util/siblings.js");
var _whitespaceStartJs = require("./util/whitespace-start.js");
var _closingJs = require("./closing.js");
var _omissionJs = require("./omission.js");
const opening = (0, _omissionJs.omission)({
    html,
    head,
    body,
    colgroup,
    tbody
});
/**
 * Whether to omit `<html>`.
 *
 * @type {OmitHandle}
 */ function html(node) {
    const head1 = (0, _siblingsJs.siblingAfter)(node, -1);
    return !head1 || !(0, _commentJs.comment)(head1);
}
/**
 * Whether to omit `<head>`.
 *
 * @type {OmitHandle}
 */ function head(node) {
    const children = node.children;
    /** @type {Array.<string>} */ const seen = [];
    let index = -1;
    /** @type {Child} */ let child;
    while(++index < children.length){
        child = children[index];
        if ((0, _hastUtilIsElement.isElement)(child, [
            "title",
            "base"
        ])) {
            if (seen.includes(child.tagName)) return false;
            seen.push(child.tagName);
        }
    }
    return children.length > 0;
}
/**
 * Whether to omit `<body>`.
 *
 * @type {OmitHandle}
 */ function body(node) {
    const head2 = (0, _siblingsJs.siblingAfter)(node, -1, true);
    return !head2 || !(0, _commentJs.comment)(head2) && !(0, _whitespaceStartJs.whitespaceStart)(head2) && !(0, _hastUtilIsElement.isElement)(head2, [
        "meta",
        "link",
        "script",
        "style",
        "template"
    ]);
}
/**
 * Whether to omit `<colgroup>`.
 * The spec describes some logic for the opening tag, but it’s easier to
 * implement in the closing tag, to the same effect, so we handle it there
 * instead.
 *
 * @type {OmitHandle}
 */ function colgroup(node, index, parent) {
    const previous = (0, _siblingsJs.siblingBefore)(parent, index);
    const head3 = (0, _siblingsJs.siblingAfter)(node, -1, true);
    // Previous colgroup was already omitted.
    if ((0, _hastUtilIsElement.isElement)(previous, "colgroup") && (0, _closingJs.closing)(previous, parent.children.indexOf(previous), parent)) return false;
    return head3 && (0, _hastUtilIsElement.isElement)(head3, "col");
}
/**
 * Whether to omit `<tbody>`.
 *
 * @type {OmitHandle}
 */ function tbody(node, index, parent) {
    const previous = (0, _siblingsJs.siblingBefore)(parent, index);
    const head4 = (0, _siblingsJs.siblingAfter)(node, -1);
    // Previous table section was already omitted.
    if ((0, _hastUtilIsElement.isElement)(previous, [
        "thead",
        "tbody"
    ]) && (0, _closingJs.closing)(previous, parent.children.indexOf(previous), parent)) return false;
    return head4 && (0, _hastUtilIsElement.isElement)(head4, "tr");
}

},{"hast-util-is-element":"3633n","./util/comment.js":"4Z2i4","./util/siblings.js":"6nHkx","./util/whitespace-start.js":"bUi9p","./closing.js":"gKccf","./omission.js":"dvtJT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3633n":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isElement", ()=>isElement);
parcelHelpers.export(exports, "convertElement", ()=>convertElement);
const isElement = /**
     * Check if a node passes a test.
     * When a `parent` node is known the `index` of node should also be given.
     *
     * @param {unknown} [node] Node to check
     * @param {Test} [test] When nullish, checks if `node` is a `Node`.
     * When `string`, works like passing `function (node) {return node.type === test}`.
     * When `function` checks if function passed the node is true.
     * When `array`, checks any one of the subtests pass.
     * @param {number} [index] Position of `node` in `parent`
     * @param {Parent} [parent] Parent of `node`
     * @param {unknown} [context] Context object to invoke `test` with
     * @returns {boolean} Whether test passed and `node` is an `Element` (object with `type` set to `element` and `tagName` set to a non-empty string).
     */ // eslint-disable-next-line max-params
/**
   * Check if a node is an element and passes a test.
   * When a `parent` node is known the `index` of node should also be given.
   *
   * @type {(
   *   (() => false) &
   *   (<T extends Element = Element>(node: unknown, test?: PredicateTest<T>, index?: number, parent?: Parent, context?: unknown) => node is T) &
   *   ((node: unknown, test: Test, index?: number, parent?: Parent, context?: unknown) => boolean)
   * )}
   */ function(node, test, index, parent, context) {
    const check = convertElement(test);
    if (index !== undefined && index !== null && (typeof index !== "number" || index < 0 || index === Number.POSITIVE_INFINITY)) throw new Error("Expected positive finite index for child node");
    if (parent !== undefined && parent !== null && (!parent.type || !parent.children)) throw new Error("Expected parent node");
    // @ts-expect-error Looks like a node.
    if (!node || !node.type || typeof node.type !== "string") return false;
    if ((parent === undefined || parent === null) !== (index === undefined || index === null)) throw new Error("Expected both parent and index");
    return check.call(context, node, index, parent);
};
const convertElement = /**
     * Generate an assertion from a check.
     * @param {Test} [test]
     * When nullish, checks if `node` is a `Node`.
     * When `string`, works like passing `function (node) {return node.type === test}`.
     * When `function` checks if function passed the node is true.
     * When `object`, checks that all keys in test are in node, and that they have (strictly) equal values.
     * When `array`, checks any one of the subtests pass.
     * @returns {AssertAnything}
     */ /**
   * @type {(
   *   (<T extends Element>(test: T['tagName']|TestFunctionPredicate<T>) => AssertPredicate<T>) &
   *   ((test?: Test) => AssertAnything)
   * )}
   */ function(test) {
    if (test === undefined || test === null) return element;
    if (typeof test === "string") return tagNameFactory(test);
    if (typeof test === "object") return anyFactory(test);
    if (typeof test === "function") return castFactory(test);
    throw new Error("Expected function, string, or array as test");
};
/**
 * @param {Array.<TagName|TestFunctionAnything>} tests
 * @returns {AssertAnything}
 */ function anyFactory(tests) {
    /** @type {Array.<AssertAnything>} */ const checks = [];
    let index1 = -1;
    while(++index1 < tests.length)checks[index1] = convertElement(tests[index1]);
    return castFactory(any);
    /**
   * @this {unknown}
   * @param {unknown[]} parameters
   * @returns {boolean}
   */ function any(...parameters) {
        let index = -1;
        while(++index < checks.length){
            if (checks[index].call(this, ...parameters)) {
                return true;
            }
        }
        return false;
    }
}
/**
 * Utility to convert a string into a function which checks a given node’s tag
 * name for said string.
 *
 * @param {TagName} check
 * @returns {AssertAnything}
 */ function tagNameFactory(check) {
    return tagName;
    /**
   * @param {unknown} node
   * @returns {boolean}
   */ function tagName(node) {
        return element(node) && node.tagName === check;
    }
}
/**
 * @param {TestFunctionAnything} check
 * @returns {AssertAnything}
 */ function castFactory(check) {
    return assertion;
    /**
   * @this {unknown}
   * @param {unknown} node
   * @param {Array.<unknown>} parameters
   * @returns {boolean}
   */ function assertion(node, ...parameters) {
        // @ts-expect-error: fine.
        return element(node) && Boolean(check.call(this, node, ...parameters));
    }
}
/**
 * Utility to return true if this is an element.
 * @param {unknown} node
 * @returns {node is Element}
 */ function element(node) {
    return Boolean(node && typeof node === "object" && // @ts-expect-error Looks like a node.
    node.type === "element" && // @ts-expect-error Looks like an element.
    typeof node.tagName === "string");
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Z2i4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "comment", ()=>comment);
/**
 * @typedef {import('../../types.js').Comment} Comment
 */ var _unistUtilIs = require("unist-util-is");
const comment = (0, _unistUtilIs.convert)("comment");

},{"unist-util-is":"chogK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"chogK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "is", ()=>is);
parcelHelpers.export(exports, "convert", ()=>convert);
const is = /**
     * Check if a node passes a test.
     * When a `parent` node is known the `index` of node should also be given.
     *
     * @param {unknown} [node] Node to check
     * @param {Test} [test]
     * When nullish, checks if `node` is a `Node`.
     * When `string`, works like passing `function (node) {return node.type === test}`.
     * When `function` checks if function passed the node is true.
     * When `object`, checks that all keys in test are in node, and that they have (strictly) equal values.
     * When `array`, checks any one of the subtests pass.
     * @param {number|null|undefined} [index] Position of `node` in `parent`
     * @param {Parent|null|undefined} [parent] Parent of `node`
     * @param {unknown} [context] Context object to invoke `test` with
     * @returns {boolean} Whether test passed and `node` is a `Node` (object with `type` set to non-empty `string`).
     */ // eslint-disable-next-line max-params
/**
   * Check if a node passes a test.
   * When a `parent` node is known the `index` of node should also be given.
   *
   * @type {(
   *   (<T extends Node>(node: unknown, test: T['type']|Partial<T>|TestFunctionPredicate<T>|Array.<T['type']|Partial<T>|TestFunctionPredicate<T>>, index?: number|null|undefined, parent?: Parent|null|undefined, context?: unknown) => node is T) &
   *   ((node?: unknown, test?: Test, index?: number|null|undefined, parent?: Parent|null|undefined, context?: unknown) => boolean)
   * )}
   */ function is1(node, test, index, parent, context) {
    const check = convert(test);
    if (index !== undefined && index !== null && (typeof index !== "number" || index < 0 || index === Number.POSITIVE_INFINITY)) throw new Error("Expected positive finite index");
    if (parent !== undefined && parent !== null && (!is1(parent) || !parent.children)) throw new Error("Expected parent node");
    if ((parent === undefined || parent === null) !== (index === undefined || index === null)) throw new Error("Expected both parent and index");
    // @ts-expect-error Looks like a node.
    return node && node.type && typeof node.type === "string" ? Boolean(check.call(context, node, index, parent)) : false;
};
const convert = /**
     * Generate an assertion from a check.
     * @param {Test} [test]
     * When nullish, checks if `node` is a `Node`.
     * When `string`, works like passing `function (node) {return node.type === test}`.
     * When `function` checks if function passed the node is true.
     * When `object`, checks that all keys in test are in node, and that they have (strictly) equal values.
     * When `array`, checks any one of the subtests pass.
     * @returns {AssertAnything}
     */ /**
   * @type {(
   *   (<T extends Node>(test: T['type']|Partial<T>|TestFunctionPredicate<T>) => AssertPredicate<T>) &
   *   ((test?: Test) => AssertAnything)
   * )}
   */ function(test) {
    if (test === undefined || test === null) return ok;
    if (typeof test === "string") return typeFactory(test);
    if (typeof test === "object") return Array.isArray(test) ? anyFactory(test) : propsFactory(test);
    if (typeof test === "function") return castFactory(test);
    throw new Error("Expected function, string, or object as test");
};
/**
 * @param {Array.<Type|Props|TestFunctionAnything>} tests
 * @returns {AssertAnything}
 */ function anyFactory(tests) {
    /** @type {Array.<AssertAnything>} */ const checks = [];
    let index1 = -1;
    while(++index1 < tests.length)checks[index1] = convert(tests[index1]);
    return castFactory(any);
    /**
   * @this {unknown}
   * @param {unknown[]} parameters
   * @returns {boolean}
   */ function any(...parameters) {
        let index = -1;
        while(++index < checks.length){
            if (checks[index].call(this, ...parameters)) return true;
        }
        return false;
    }
}
/**
 * Utility to assert each property in `test` is represented in `node`, and each
 * values are strictly equal.
 *
 * @param {Props} check
 * @returns {AssertAnything}
 */ function propsFactory(check) {
    return castFactory(all);
    /**
   * @param {Node} node
   * @returns {boolean}
   */ function all(node) {
        /** @type {string} */ let key;
        for(key in check){
            // @ts-expect-error: hush, it sure works as an index.
            if (node[key] !== check[key]) return false;
        }
        return true;
    }
}
/**
 * Utility to convert a string into a function which checks a given node’s type
 * for said string.
 *
 * @param {Type} check
 * @returns {AssertAnything}
 */ function typeFactory(check) {
    return castFactory(type);
    /**
   * @param {Node} node
   */ function type(node) {
        return node && node.type === check;
    }
}
/**
 * Utility to convert a string into a function which checks a given node’s type
 * for said string.
 * @param {TestFunctionAnything} check
 * @returns {AssertAnything}
 */ function castFactory(check) {
    return assertion;
    /**
   * @this {unknown}
   * @param {Array.<unknown>} parameters
   * @returns {boolean}
   */ function assertion(...parameters) {
        // @ts-expect-error: spreading is fine.
        return Boolean(check.call(this, ...parameters));
    }
}
// Utility to return true.
function ok() {
    return true;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6nHkx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "siblingAfter", ()=>siblingAfter);
parcelHelpers.export(exports, "siblingBefore", ()=>siblingBefore);
/**
 * @typedef {import('../../types.js').Parent} Parent
 * @typedef {import('../../types.js').Child} Child
 */ var _hastUtilWhitespace = require("hast-util-whitespace");
const siblingAfter = siblings(1);
const siblingBefore = siblings(-1);
/**
 * Factory to check siblings in a direction.
 *
 * @param {number} increment
 */ function siblings(increment) {
    return sibling;
    /**
   * Find applicable siblings in a direction.
   *
   * @param {Parent} parent
   * @param {number} index
   * @param {boolean} [includeWhitespace=false]
   * @returns {Child}
   */ function sibling(parent, index, includeWhitespace) {
        const siblings1 = parent && parent.children;
        let offset = index + increment;
        let next = siblings1 && siblings1[offset];
        if (!includeWhitespace) {
            while(next && (0, _hastUtilWhitespace.whitespace)(next)){
                offset += increment;
                next = siblings1[offset];
            }
        }
        return next;
    }
}

},{"hast-util-whitespace":"8flFy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8flFy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @param {unknown} thing
 * @returns {boolean}
 */ parcelHelpers.export(exports, "whitespace", ()=>whitespace);
function whitespace(thing) {
    /** @type {string} */ var value = // @ts-ignore looks like a node.
    thing && typeof thing === "object" && thing.type === "text" ? thing.value || "" : thing;
    // HTML whitespace expression.
    // See <https://html.spec.whatwg.org/#space-character>.
    return typeof value === "string" && value.replace(/[ \t\n\f\r]/g, "") === "";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bUi9p":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Check if `node` starts with whitespace.
 *
 * @param {Node} node
 * @returns {boolean}
 */ parcelHelpers.export(exports, "whitespaceStart", ()=>whitespaceStart);
/**
 * @typedef {import('../../types.js').Node} Node
 * @typedef {import('../../types.js').Text} Text
 */ var _unistUtilIs = require("unist-util-is");
var _hastUtilWhitespace = require("hast-util-whitespace");
/** @type {import('unist-util-is').AssertPredicate<Text>} */ // @ts-ignore
const isText = (0, _unistUtilIs.convert)("text");
function whitespaceStart(node) {
    return isText(node) && (0, _hastUtilWhitespace.whitespace)(node.value.charAt(0));
}

},{"unist-util-is":"chogK","hast-util-whitespace":"8flFy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gKccf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "closing", ()=>closing);
/**
 * @typedef {import('../types.js').OmitHandle} OmitHandle
 */ var _hastUtilIsElement = require("hast-util-is-element");
var _commentJs = require("./util/comment.js");
var _siblingsJs = require("./util/siblings.js");
var _whitespaceStartJs = require("./util/whitespace-start.js");
var _omissionJs = require("./omission.js");
const closing = (0, _omissionJs.omission)({
    html,
    head: headOrColgroupOrCaption,
    body,
    p,
    li,
    dt,
    dd,
    rt: rubyElement,
    rp: rubyElement,
    optgroup,
    option,
    menuitem,
    colgroup: headOrColgroupOrCaption,
    caption: headOrColgroupOrCaption,
    thead,
    tbody,
    tfoot,
    tr,
    td: cells,
    th: cells
});
/**
 * Macro for `</head>`, `</colgroup>`, and `</caption>`.
 *
 * @type {OmitHandle}
 */ function headOrColgroupOrCaption(_, index, parent) {
    const next = (0, _siblingsJs.siblingAfter)(parent, index, true);
    return !next || !(0, _commentJs.comment)(next) && !(0, _whitespaceStartJs.whitespaceStart)(next);
}
/**
 * Whether to omit `</html>`.
 *
 * @type {OmitHandle}
 */ function html(_, index, parent) {
    const next = (0, _siblingsJs.siblingAfter)(parent, index);
    return !next || !(0, _commentJs.comment)(next);
}
/**
 * Whether to omit `</body>`.
 *
 * @type {OmitHandle}
 */ function body(_, index, parent) {
    const next = (0, _siblingsJs.siblingAfter)(parent, index);
    return !next || !(0, _commentJs.comment)(next);
}
/**
 * Whether to omit `</p>`.
 *
 * @type {OmitHandle}
 */ function p(_, index, parent) {
    const next = (0, _siblingsJs.siblingAfter)(parent, index);
    return next ? (0, _hastUtilIsElement.isElement)(next, [
        "address",
        "article",
        "aside",
        "blockquote",
        "details",
        "div",
        "dl",
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
        "main",
        "menu",
        "nav",
        "ol",
        "p",
        "pre",
        "section",
        "table",
        "ul"
    ]) : !parent || // Confusing parent.
    !(0, _hastUtilIsElement.isElement)(parent, [
        "a",
        "audio",
        "del",
        "ins",
        "map",
        "noscript",
        "video"
    ]);
}
/**
 * Whether to omit `</li>`.
 *
 * @type {OmitHandle}
 */ function li(_, index, parent) {
    const next = (0, _siblingsJs.siblingAfter)(parent, index);
    return !next || (0, _hastUtilIsElement.isElement)(next, "li");
}
/**
 * Whether to omit `</dt>`.
 *
 * @type {OmitHandle}
 */ function dt(_, index, parent) {
    const next = (0, _siblingsJs.siblingAfter)(parent, index);
    return next && (0, _hastUtilIsElement.isElement)(next, [
        "dt",
        "dd"
    ]);
}
/**
 * Whether to omit `</dd>`.
 *
 * @type {OmitHandle}
 */ function dd(_, index, parent) {
    const next = (0, _siblingsJs.siblingAfter)(parent, index);
    return !next || (0, _hastUtilIsElement.isElement)(next, [
        "dt",
        "dd"
    ]);
}
/**
 * Whether to omit `</rt>` or `</rp>`.
 *
 * @type {OmitHandle}
 */ function rubyElement(_, index, parent) {
    const next = (0, _siblingsJs.siblingAfter)(parent, index);
    return !next || (0, _hastUtilIsElement.isElement)(next, [
        "rp",
        "rt"
    ]);
}
/**
 * Whether to omit `</optgroup>`.
 *
 * @type {OmitHandle}
 */ function optgroup(_, index, parent) {
    const next = (0, _siblingsJs.siblingAfter)(parent, index);
    return !next || (0, _hastUtilIsElement.isElement)(next, "optgroup");
}
/**
 * Whether to omit `</option>`.
 *
 * @type {OmitHandle}
 */ function option(_, index, parent) {
    const next = (0, _siblingsJs.siblingAfter)(parent, index);
    return !next || (0, _hastUtilIsElement.isElement)(next, [
        "option",
        "optgroup"
    ]);
}
/**
 * Whether to omit `</menuitem>`.
 *
 * @type {OmitHandle}
 */ function menuitem(_, index, parent) {
    const next = (0, _siblingsJs.siblingAfter)(parent, index);
    return !next || (0, _hastUtilIsElement.isElement)(next, [
        "menuitem",
        "hr",
        "menu"
    ]);
}
/**
 * Whether to omit `</thead>`.
 *
 * @type {OmitHandle}
 */ function thead(_, index, parent) {
    const next = (0, _siblingsJs.siblingAfter)(parent, index);
    return next && (0, _hastUtilIsElement.isElement)(next, [
        "tbody",
        "tfoot"
    ]);
}
/**
 * Whether to omit `</tbody>`.
 *
 * @type {OmitHandle}
 */ function tbody(_, index, parent) {
    const next = (0, _siblingsJs.siblingAfter)(parent, index);
    return !next || (0, _hastUtilIsElement.isElement)(next, [
        "tbody",
        "tfoot"
    ]);
}
/**
 * Whether to omit `</tfoot>`.
 *
 * @type {OmitHandle}
 */ function tfoot(_, index, parent) {
    return !(0, _siblingsJs.siblingAfter)(parent, index);
}
/**
 * Whether to omit `</tr>`.
 *
 * @type {OmitHandle}
 */ function tr(_, index, parent) {
    const next = (0, _siblingsJs.siblingAfter)(parent, index);
    return !next || (0, _hastUtilIsElement.isElement)(next, "tr");
}
/**
 * Whether to omit `</td>` or `</th>`.
 *
 * @type {OmitHandle}
 */ function cells(_, index, parent) {
    const next = (0, _siblingsJs.siblingAfter)(parent, index);
    return !next || (0, _hastUtilIsElement.isElement)(next, [
        "td",
        "th"
    ]);
}

},{"hast-util-is-element":"3633n","./util/comment.js":"4Z2i4","./util/siblings.js":"6nHkx","./util/whitespace-start.js":"bUi9p","./omission.js":"dvtJT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dvtJT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Factory to check if a given node can have a tag omitted.
 *
 * @param {Object.<string, OmitHandle>} handlers
 * @returns {OmitHandle}
 */ parcelHelpers.export(exports, "omission", ()=>omission);
/**
 * @typedef {import('../types.js').OmitHandle} OmitHandle
 */ const own = {}.hasOwnProperty;
function omission(handlers) {
    return omit;
    /**
   * Check if a given node can have a tag omitted.
   *
   * @type {OmitHandle}
   */ function omit(node, index, parent) {
        return own.call(handlers, node.tagName) && handlers[node.tagName](node, index, parent);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g9BfU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @type {Handle}
 */ parcelHelpers.export(exports, "one", ()=>one);
/**
 * Serialize all children of `parent`.
 *
 * @type {Handle}
 * @param {Parent} parent
 */ parcelHelpers.export(exports, "all", ()=>all);
/**
 * @type {Handle}
 * @param {Element} node
 */ // eslint-disable-next-line complexity
parcelHelpers.export(exports, "element", ()=>element);
/**
 * @typedef {import('./types.js').Handle} Handle
 * @typedef {import('./types.js').Element} Element
 * @typedef {import('./types.js').Context} Context
 * @typedef {import('./types.js').Properties} Properties
 * @typedef {import('./types.js').PropertyValue} PropertyValue
 * @typedef {import('./types.js').Parent} Parent
 */ var _propertyInformation = require("property-information");
var _spaceSeparatedTokens = require("space-separated-tokens");
var _commaSeparatedTokens = require("comma-separated-tokens");
var _stringifyEntities = require("stringify-entities");
var _ccount = require("ccount");
var _constantsJs = require("./constants.js");
var _commentJs = require("./comment.js");
var _doctypeJs = require("./doctype.js");
var _rawJs = require("./raw.js");
var _textJs = require("./text.js");
/**
 * @type {Object.<string, Handle>}
 */ const handlers = {
    comment: (0, _commentJs.comment),
    doctype: (0, _doctypeJs.doctype),
    element,
    raw: // @ts-ignore `raw` is nonstandard
    (0, _rawJs.raw),
    // @ts-ignore `root` is a parent.
    root: all,
    text: (0, _textJs.text)
};
const own = {}.hasOwnProperty;
function one(ctx, node, index, parent) {
    if (!node || !node.type) throw new Error("Expected node, not `" + node + "`");
    if (!own.call(handlers, node.type)) throw new Error("Cannot compile unknown node `" + node.type + "`");
    return handlers[node.type](ctx, node, index, parent);
}
function all(ctx, parent) {
    /** @type {Array.<string>} */ const results = [];
    const children = parent && parent.children || [];
    let index = -1;
    while(++index < children.length)results[index] = one(ctx, children[index], index, parent);
    return results.join("");
}
function element(ctx, node, index, parent) {
    const schema = ctx.schema;
    const omit = schema.space === "svg" ? undefined : ctx.omit;
    let selfClosing = schema.space === "svg" ? ctx.closeEmpty : ctx.voids.includes(node.tagName.toLowerCase());
    /** @type {Array.<string>} */ const parts = [];
    /** @type {string} */ let last;
    if (schema.space === "html" && node.tagName === "svg") ctx.schema = (0, _propertyInformation.svg);
    const attrs = serializeAttributes(ctx, node.properties);
    const content = all(ctx, schema.space === "html" && node.tagName === "template" ? node.content : node);
    ctx.schema = schema;
    // If the node is categorised as void, but it has children, remove the
    // categorisation.
    // This enables for example `menuitem`s, which are void in W3C HTML but not
    // void in WHATWG HTML, to be stringified properly.
    if (content) selfClosing = false;
    if (attrs || !omit || !omit.opening(node, index, parent)) {
        parts.push("<", node.tagName, attrs ? " " + attrs : "");
        if (selfClosing && (schema.space === "svg" || ctx.close)) {
            last = attrs.charAt(attrs.length - 1);
            if (!ctx.tightClose || last === "/" || last && last !== '"' && last !== "'") parts.push(" ");
            parts.push("/");
        }
        parts.push(">");
    }
    parts.push(content);
    if (!selfClosing && (!omit || !omit.closing(node, index, parent))) parts.push("</" + node.tagName + ">");
    return parts.join("");
}
/**
 * @param {Context} ctx
 * @param {Properties} props
 * @returns {string}
 */ function serializeAttributes(ctx, props) {
    /** @type {Array.<string>} */ const values = [];
    let index = -1;
    /** @type {string} */ let key;
    /** @type {string} */ let value;
    /** @type {string} */ let last;
    for(key in props)if (props[key] !== undefined && props[key] !== null) {
        value = serializeAttribute(ctx, key, props[key]);
        if (value) values.push(value);
    }
    while(++index < values.length){
        last = ctx.tight ? values[index].charAt(values[index].length - 1) : null;
        // In tight mode, don’t add a space after quoted attributes.
        if (index !== values.length - 1 && last !== '"' && last !== "'") values[index] += " ";
    }
    return values.join("");
}
/**
 * @param {Context} ctx
 * @param {string} key
 * @param {PropertyValue} value
 * @returns {string}
 */ // eslint-disable-next-line complexity
function serializeAttribute(ctx, key, value) {
    const info = (0, _propertyInformation.find)(ctx.schema, key);
    let quote = ctx.quote;
    /** @type {string} */ let result;
    if (info.overloadedBoolean && (value === info.attribute || value === "")) value = true;
    else if (info.boolean || info.overloadedBoolean && typeof value !== "string") value = Boolean(value);
    if (value === undefined || value === null || value === false || typeof value === "number" && Number.isNaN(value)) return "";
    const name = (0, _stringifyEntities.stringifyEntities)(info.attribute, Object.assign({}, ctx.entities, {
        // Always encode without parse errors in non-HTML.
        subset: (0, _constantsJs.constants).name[ctx.schema.space === "html" ? ctx.valid : 1][ctx.safe]
    }));
    // No value.
    // There is currently only one boolean property in SVG: `[download]` on
    // `<a>`.
    // This property does not seem to work in browsers (FF, Sa, Ch), so I can’t
    // test if dropping the value works.
    // But I assume that it should:
    //
    // ```html
    // <!doctype html>
    // <svg viewBox="0 0 100 100">
    //   <a href=https://example.com download>
    //     <circle cx=50 cy=40 r=35 />
    //   </a>
    // </svg>
    // ```
    //
    // See: <https://github.com/wooorm/property-information/blob/main/lib/svg.js>
    if (value === true) return name;
    value = typeof value === "object" && "length" in value ? // keep the code cleaner.
    (info.commaSeparated ? (0, _commaSeparatedTokens.stringify) : (0, _spaceSeparatedTokens.stringify))(value, {
        padLeft: !ctx.tightLists
    }) : String(value);
    if (ctx.collapseEmpty && !value) return name;
    // Check unquoted value.
    if (ctx.unquoted) result = (0, _stringifyEntities.stringifyEntities)(value, Object.assign({}, ctx.entities, {
        subset: (0, _constantsJs.constants).unquoted[ctx.valid][ctx.safe],
        attribute: true
    }));
    // If we don’t want unquoted, or if `value` contains character references when
    // unquoted…
    if (result !== value) {
        // If the alternative is less common than `quote`, switch.
        if (ctx.smart && (0, _ccount.ccount)(value, quote) > (0, _ccount.ccount)(value, ctx.alternative)) quote = ctx.alternative;
        result = quote + (0, _stringifyEntities.stringifyEntities)(value, Object.assign({}, ctx.entities, {
            // Always encode without parse errors in non-HTML.
            subset: (quote === "'" ? (0, _constantsJs.constants).single : (0, _constantsJs.constants).double)[ctx.schema.space === "html" ? ctx.valid : 1][ctx.safe],
            attribute: true
        })) + quote;
    }
    // Don’t add a `=` for unquoted empties.
    return name + (result ? "=" + result : result);
}

},{"property-information":"9xjkX","space-separated-tokens":"gsC2E","comma-separated-tokens":"6DPAv","stringify-entities":"bVgcP","ccount":"3gpcS","./constants.js":"9GJIh","./comment.js":"6xJn3","./doctype.js":"3xnm1","./raw.js":"2AavL","./text.js":"YdZUd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gsC2E":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Parse space separated tokens to an array of strings.
 *
 * @param {string} value Space separated tokens
 * @returns {Array.<string>} Tokens
 */ parcelHelpers.export(exports, "parse", ()=>parse);
/**
 * Serialize an array of strings as space separated tokens.
 *
 * @param {Array.<string|number>} values Tokens
 * @returns {string} Space separated tokens
 */ parcelHelpers.export(exports, "stringify", ()=>stringify);
function parse(value) {
    const input = String(value || "").trim();
    return input ? input.split(/[ \t\n\r\f]+/g) : [];
}
function stringify(values) {
    return values.join(" ").trim();
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6DPAv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @typedef {Object} StringifyOptions
 * @property {boolean} [padLeft=true] Whether to pad a space before a token (`boolean`, default: `true`).
 * @property {boolean} [padRight=false] Whether to pad a space after a token (`boolean`, default: `false`).
 */ /**
 * Parse comma separated tokens to an array.
 *
 * @param {string} value
 * @returns {Array.<string>}
 */ parcelHelpers.export(exports, "parse", ()=>parse);
/**
 * Serialize an array of strings to comma separated tokens.
 *
 * @param {Array.<string|number>} values
 * @param {StringifyOptions} [options]
 * @returns {string}
 */ parcelHelpers.export(exports, "stringify", ()=>stringify);
function parse(value) {
    /** @type {Array.<string>} */ var tokens = [];
    var input = String(value || "");
    var index = input.indexOf(",");
    var start = 0;
    /** @type {boolean} */ var end;
    /** @type {string} */ var token;
    while(!end){
        if (index === -1) {
            index = input.length;
            end = true;
        }
        token = input.slice(start, index).trim();
        if (token || !end) tokens.push(token);
        start = index + 1;
        index = input.indexOf(",", start);
    }
    return tokens;
}
function stringify(values, options) {
    var settings = options || {};
    // Ensure the last empty entry is seen.
    if (values[values.length - 1] === "") values = values.concat("");
    return values.join((settings.padRight ? " " : "") + "," + (settings.padLeft === false ? "" : " ")).trim();
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bVgcP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @typedef {import('./lib/index.js').LightOptions} LightOptions
 * @typedef {import('./lib/index.js').Options} Options
 */ var _indexJs = require("./lib/index.js");
parcelHelpers.exportAll(_indexJs, exports);

},{"./lib/index.js":"9SK3w","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9SK3w":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Encode special characters in `value`.
 *
 * @param {string} value
 *   Value to encode.
 * @param {Options} [options]
 *   Configuration.
 * @returns {string}
 *   Encoded value.
 */ parcelHelpers.export(exports, "stringifyEntities", ()=>stringifyEntities);
/**
 * Encode special characters in `value` as hexadecimals.
 *
 * @param {string} value
 *   Value to encode.
 * @param {LightOptions} [options]
 *   Configuration.
 * @returns {string}
 *   Encoded value.
 */ parcelHelpers.export(exports, "stringifyEntitiesLight", ()=>stringifyEntitiesLight);
/**
 * @typedef {import('./core.js').CoreOptions & import('./util/format-smart.js').FormatSmartOptions} Options
 * @typedef {import('./core.js').CoreOptions} LightOptions
 */ var _coreJs = require("./core.js");
var _formatSmartJs = require("./util/format-smart.js");
var _formatBasicJs = require("./util/format-basic.js");
function stringifyEntities(value, options) {
    return (0, _coreJs.core)(value, Object.assign({
        format: (0, _formatSmartJs.formatSmart)
    }, options));
}
function stringifyEntitiesLight(value, options) {
    return (0, _coreJs.core)(value, Object.assign({
        format: (0, _formatBasicJs.formatBasic)
    }, options));
}

},{"./core.js":"b76U1","./util/format-smart.js":"tAuvA","./util/format-basic.js":"dkvoz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b76U1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @typedef CoreOptions
 * @property {Array<string>} [subset=[]]
 *   Whether to only escape the given subset of characters.
 * @property {boolean} [escapeOnly=false]
 *   Whether to only escape possibly dangerous characters.
 *   Those characters are `"`, `&`, `'`, `<`, `>`, and `` ` ``.
 *
 * @typedef FormatOptions
 * @property {(code: number, next: number, options: CoreWithFormatOptions) => string} format
 *   Format strategy.
 *
 * @typedef {CoreOptions & FormatOptions & import('./util/format-smart.js').FormatSmartOptions} CoreWithFormatOptions
 */ /**
 * Encode certain characters in `value`.
 *
 * @param {string} value
 * @param {CoreWithFormatOptions} options
 * @returns {string}
 */ parcelHelpers.export(exports, "core", ()=>core);
function core(value, options) {
    value = value.replace(options.subset ? charactersToExpression(options.subset) : /["&'<>`]/g, basic);
    if (options.subset || options.escapeOnly) return value;
    return value// Surrogate pairs.
    .replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, surrogate)// BMP control characters (C0 except for LF, CR, SP; DEL; and some more
    // non-ASCII ones).
    .replace(// eslint-disable-next-line no-control-regex, unicorn/no-hex-escape
    /[\x01-\t\v\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g, basic);
    /**
   * @param {string} pair
   * @param {number} index
   * @param {string} all
   */ function surrogate(pair, index, all) {
        return options.format((pair.charCodeAt(0) - 0xd800) * 0x400 + pair.charCodeAt(1) - 0xdc00 + 0x10000, all.charCodeAt(index + 2), options);
    }
    /**
   * @param {string} character
   * @param {number} index
   * @param {string} all
   */ function basic(character, index, all) {
        return options.format(character.charCodeAt(0), all.charCodeAt(index + 1), options);
    }
}
/**
 * @param {Array<string>} subset
 * @returns {RegExp}
 */ function charactersToExpression(subset) {
    /** @type {Array<string>} */ const groups = [];
    let index = -1;
    while(++index < subset.length)groups.push(subset[index].replace(/[|\\{}()[\]^$+*?.]/g, "\\$&"));
    return new RegExp("(?:" + groups.join("|") + ")", "g");
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"tAuvA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Configurable ways to encode a character yielding pretty or small results.
 *
 * @param {number} code
 * @param {number} next
 * @param {FormatSmartOptions} options
 * @returns {string}
 */ parcelHelpers.export(exports, "formatSmart", ()=>formatSmart);
/**
 * @typedef FormatSmartOptions
 * @property {boolean} [useNamedReferences=false]
 *   Prefer named character references (`&amp;`) where possible.
 * @property {boolean} [useShortestReferences=false]
 *   Prefer the shortest possible reference, if that results in less bytes.
 *   **Note**: `useNamedReferences` can be omitted when using `useShortestReferences`.
 * @property {boolean} [omitOptionalSemicolons=false]
 *   Whether to omit semicolons when possible.
 *   **Note**: This creates what HTML calls “parse errors” but is otherwise still valid HTML — don’t use this except when building a minifier.
 *   Omitting semicolons is possible for certain named and numeric references in some cases.
 * @property {boolean} [attribute=false]
 *   Create character references which don’t fail in attributes.
 *   **Note**: `attribute` only applies when operating dangerously with
 *   `omitOptionalSemicolons: true`.
 */ var _toHexadecimalJs = require("./to-hexadecimal.js");
var _toDecimalJs = require("./to-decimal.js");
var _toNamedJs = require("./to-named.js");
function formatSmart(code, next, options) {
    let numeric = (0, _toHexadecimalJs.toHexadecimal)(code, next, options.omitOptionalSemicolons);
    /** @type {string|undefined} */ let named;
    if (options.useNamedReferences || options.useShortestReferences) named = (0, _toNamedJs.toNamed)(code, next, options.omitOptionalSemicolons, options.attribute);
    // Use the shortest numeric reference when requested.
    // A simple algorithm would use decimal for all code points under 100, as
    // those are shorter than hexadecimal:
    //
    // * `&#99;` vs `&#x63;` (decimal shorter)
    // * `&#100;` vs `&#x64;` (equal)
    //
    // However, because we take `next` into consideration when `omit` is used,
    // And it would be possible that decimals are shorter on bigger values as
    // well if `next` is hexadecimal but not decimal, we instead compare both.
    if ((options.useShortestReferences || !named) && options.useShortestReferences) {
        const decimal = (0, _toDecimalJs.toDecimal)(code, next, options.omitOptionalSemicolons);
        if (decimal.length < numeric.length) numeric = decimal;
    }
    return named && (!options.useShortestReferences || named.length < numeric.length) ? named : numeric;
}

},{"./to-hexadecimal.js":"dFmG6","./to-decimal.js":"a22jQ","./to-named.js":"Zl1c0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dFmG6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Configurable ways to encode characters as hexadecimal references.
 *
 * @param {number} code
 * @param {number} next
 * @param {boolean|undefined} omit
 * @returns {string}
 */ parcelHelpers.export(exports, "toHexadecimal", ()=>toHexadecimal);
function toHexadecimal(code, next, omit) {
    const value = "&#x" + code.toString(16).toUpperCase();
    return omit && next && !/[\dA-Fa-f]/.test(String.fromCharCode(next)) ? value : value + ";";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a22jQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Configurable ways to encode characters as decimal references.
 *
 * @param {number} code
 * @param {number} next
 * @param {boolean|undefined} omit
 * @returns {string}
 */ parcelHelpers.export(exports, "toDecimal", ()=>toDecimal);
function toDecimal(code, next, omit) {
    const value = "&#" + String(code);
    return omit && next && !/\d/.test(String.fromCharCode(next)) ? value : value + ";";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"Zl1c0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Configurable ways to encode characters as named references.
 *
 * @param {number} code
 * @param {number} next
 * @param {boolean|undefined} omit
 * @param {boolean|undefined} attribute
 * @returns {string}
 */ parcelHelpers.export(exports, "toNamed", ()=>toNamed);
var _characterEntitiesLegacy = require("character-entities-legacy");
var _characterEntitiesHtml4 = require("character-entities-html4");
var _dangerousJs = require("../constant/dangerous.js");
const own = {}.hasOwnProperty;
/**
 * `characterEntitiesHtml4` but inverted.
 *
 * @type {Record<string, string>}
 */ const characters = {};
/** @type {string} */ let key;
for(key in 0, _characterEntitiesHtml4.characterEntitiesHtml4)if (own.call((0, _characterEntitiesHtml4.characterEntitiesHtml4), key)) characters[(0, _characterEntitiesHtml4.characterEntitiesHtml4)[key]] = key;
function toNamed(code, next, omit, attribute) {
    const character = String.fromCharCode(code);
    if (own.call(characters, character)) {
        const name = characters[character];
        const value = "&" + name;
        if (omit && (0, _characterEntitiesLegacy.characterEntitiesLegacy).includes(name) && !(0, _dangerousJs.dangerous).includes(name) && (!attribute || next && next !== 61 /* `=` */  && /[^\da-z]/i.test(String.fromCharCode(next)))) return value;
        return value + ";";
    }
    return "";
}

},{"character-entities-legacy":"cTWHy","character-entities-html4":"5wxbO","../constant/dangerous.js":"gOS5x","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cTWHy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "characterEntitiesLegacy", ()=>characterEntitiesLegacy);
const characterEntitiesLegacy = [
    "AElig",
    "AMP",
    "Aacute",
    "Acirc",
    "Agrave",
    "Aring",
    "Atilde",
    "Auml",
    "COPY",
    "Ccedil",
    "ETH",
    "Eacute",
    "Ecirc",
    "Egrave",
    "Euml",
    "GT",
    "Iacute",
    "Icirc",
    "Igrave",
    "Iuml",
    "LT",
    "Ntilde",
    "Oacute",
    "Ocirc",
    "Ograve",
    "Oslash",
    "Otilde",
    "Ouml",
    "QUOT",
    "REG",
    "THORN",
    "Uacute",
    "Ucirc",
    "Ugrave",
    "Uuml",
    "Yacute",
    "aacute",
    "acirc",
    "acute",
    "aelig",
    "agrave",
    "amp",
    "aring",
    "atilde",
    "auml",
    "brvbar",
    "ccedil",
    "cedil",
    "cent",
    "copy",
    "curren",
    "deg",
    "divide",
    "eacute",
    "ecirc",
    "egrave",
    "eth",
    "euml",
    "frac12",
    "frac14",
    "frac34",
    "gt",
    "iacute",
    "icirc",
    "iexcl",
    "igrave",
    "iquest",
    "iuml",
    "laquo",
    "lt",
    "macr",
    "micro",
    "middot",
    "nbsp",
    "not",
    "ntilde",
    "oacute",
    "ocirc",
    "ograve",
    "ordf",
    "ordm",
    "oslash",
    "otilde",
    "ouml",
    "para",
    "plusmn",
    "pound",
    "quot",
    "raquo",
    "reg",
    "sect",
    "shy",
    "sup1",
    "sup2",
    "sup3",
    "szlig",
    "thorn",
    "times",
    "uacute",
    "ucirc",
    "ugrave",
    "uml",
    "uuml",
    "yacute",
    "yen",
    "yuml"
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5wxbO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "characterEntitiesHtml4", ()=>characterEntitiesHtml4);
const characterEntitiesHtml4 = {
    nbsp: "\xa0",
    iexcl: "\xa1",
    cent: "\xa2",
    pound: "\xa3",
    curren: "\xa4",
    yen: "\xa5",
    brvbar: "\xa6",
    sect: "\xa7",
    uml: "\xa8",
    copy: "\xa9",
    ordf: "\xaa",
    laquo: "\xab",
    not: "\xac",
    shy: "\xad",
    reg: "\xae",
    macr: "\xaf",
    deg: "\xb0",
    plusmn: "\xb1",
    sup2: "\xb2",
    sup3: "\xb3",
    acute: "\xb4",
    micro: "\xb5",
    para: "\xb6",
    middot: "\xb7",
    cedil: "\xb8",
    sup1: "\xb9",
    ordm: "\xba",
    raquo: "\xbb",
    frac14: "\xbc",
    frac12: "\xbd",
    frac34: "\xbe",
    iquest: "\xbf",
    Agrave: "\xc0",
    Aacute: "\xc1",
    Acirc: "\xc2",
    Atilde: "\xc3",
    Auml: "\xc4",
    Aring: "\xc5",
    AElig: "\xc6",
    Ccedil: "\xc7",
    Egrave: "\xc8",
    Eacute: "\xc9",
    Ecirc: "\xca",
    Euml: "\xcb",
    Igrave: "\xcc",
    Iacute: "\xcd",
    Icirc: "\xce",
    Iuml: "\xcf",
    ETH: "\xd0",
    Ntilde: "\xd1",
    Ograve: "\xd2",
    Oacute: "\xd3",
    Ocirc: "\xd4",
    Otilde: "\xd5",
    Ouml: "\xd6",
    times: "\xd7",
    Oslash: "\xd8",
    Ugrave: "\xd9",
    Uacute: "\xda",
    Ucirc: "\xdb",
    Uuml: "\xdc",
    Yacute: "\xdd",
    THORN: "\xde",
    szlig: "\xdf",
    agrave: "\xe0",
    aacute: "\xe1",
    acirc: "\xe2",
    atilde: "\xe3",
    auml: "\xe4",
    aring: "\xe5",
    aelig: "\xe6",
    ccedil: "\xe7",
    egrave: "\xe8",
    eacute: "\xe9",
    ecirc: "\xea",
    euml: "\xeb",
    igrave: "\xec",
    iacute: "\xed",
    icirc: "\xee",
    iuml: "\xef",
    eth: "\xf0",
    ntilde: "\xf1",
    ograve: "\xf2",
    oacute: "\xf3",
    ocirc: "\xf4",
    otilde: "\xf5",
    ouml: "\xf6",
    divide: "\xf7",
    oslash: "\xf8",
    ugrave: "\xf9",
    uacute: "\xfa",
    ucirc: "\xfb",
    uuml: "\xfc",
    yacute: "\xfd",
    thorn: "\xfe",
    yuml: "\xff",
    fnof: "\u0192",
    Alpha: "\u0391",
    Beta: "\u0392",
    Gamma: "\u0393",
    Delta: "\u0394",
    Epsilon: "\u0395",
    Zeta: "\u0396",
    Eta: "\u0397",
    Theta: "\u0398",
    Iota: "\u0399",
    Kappa: "\u039A",
    Lambda: "\u039B",
    Mu: "\u039C",
    Nu: "\u039D",
    Xi: "\u039E",
    Omicron: "\u039F",
    Pi: "\u03A0",
    Rho: "\u03A1",
    Sigma: "\u03A3",
    Tau: "\u03A4",
    Upsilon: "\u03A5",
    Phi: "\u03A6",
    Chi: "\u03A7",
    Psi: "\u03A8",
    Omega: "\u03A9",
    alpha: "\u03B1",
    beta: "\u03B2",
    gamma: "\u03B3",
    delta: "\u03B4",
    epsilon: "\u03B5",
    zeta: "\u03B6",
    eta: "\u03B7",
    theta: "\u03B8",
    iota: "\u03B9",
    kappa: "\u03BA",
    lambda: "\u03BB",
    mu: "\u03BC",
    nu: "\u03BD",
    xi: "\u03BE",
    omicron: "\u03BF",
    pi: "\u03C0",
    rho: "\u03C1",
    sigmaf: "\u03C2",
    sigma: "\u03C3",
    tau: "\u03C4",
    upsilon: "\u03C5",
    phi: "\u03C6",
    chi: "\u03C7",
    psi: "\u03C8",
    omega: "\u03C9",
    thetasym: "\u03D1",
    upsih: "\u03D2",
    piv: "\u03D6",
    bull: "\u2022",
    hellip: "\u2026",
    prime: "\u2032",
    Prime: "\u2033",
    oline: "\u203E",
    frasl: "\u2044",
    weierp: "\u2118",
    image: "\u2111",
    real: "\u211C",
    trade: "\u2122",
    alefsym: "\u2135",
    larr: "\u2190",
    uarr: "\u2191",
    rarr: "\u2192",
    darr: "\u2193",
    harr: "\u2194",
    crarr: "\u21B5",
    lArr: "\u21D0",
    uArr: "\u21D1",
    rArr: "\u21D2",
    dArr: "\u21D3",
    hArr: "\u21D4",
    forall: "\u2200",
    part: "\u2202",
    exist: "\u2203",
    empty: "\u2205",
    nabla: "\u2207",
    isin: "\u2208",
    notin: "\u2209",
    ni: "\u220B",
    prod: "\u220F",
    sum: "\u2211",
    minus: "\u2212",
    lowast: "\u2217",
    radic: "\u221A",
    prop: "\u221D",
    infin: "\u221E",
    ang: "\u2220",
    and: "\u2227",
    or: "\u2228",
    cap: "\u2229",
    cup: "\u222A",
    int: "\u222B",
    there4: "\u2234",
    sim: "\u223C",
    cong: "\u2245",
    asymp: "\u2248",
    ne: "\u2260",
    equiv: "\u2261",
    le: "\u2264",
    ge: "\u2265",
    sub: "\u2282",
    sup: "\u2283",
    nsub: "\u2284",
    sube: "\u2286",
    supe: "\u2287",
    oplus: "\u2295",
    otimes: "\u2297",
    perp: "\u22A5",
    sdot: "\u22C5",
    lceil: "\u2308",
    rceil: "\u2309",
    lfloor: "\u230A",
    rfloor: "\u230B",
    lang: "\u2329",
    rang: "\u232A",
    loz: "\u25CA",
    spades: "\u2660",
    clubs: "\u2663",
    hearts: "\u2665",
    diams: "\u2666",
    quot: '"',
    amp: "&",
    lt: "<",
    gt: ">",
    OElig: "\u0152",
    oelig: "\u0153",
    Scaron: "\u0160",
    scaron: "\u0161",
    Yuml: "\u0178",
    circ: "\u02C6",
    tilde: "\u02DC",
    ensp: "\u2002",
    emsp: "\u2003",
    thinsp: "\u2009",
    zwnj: "\u200C",
    zwj: "\u200D",
    lrm: "\u200E",
    rlm: "\u200F",
    ndash: "\u2013",
    mdash: "\u2014",
    lsquo: "\u2018",
    rsquo: "\u2019",
    sbquo: "\u201A",
    ldquo: "\u201C",
    rdquo: "\u201D",
    bdquo: "\u201E",
    dagger: "\u2020",
    Dagger: "\u2021",
    permil: "\u2030",
    lsaquo: "\u2039",
    rsaquo: "\u203A",
    euro: "\u20AC"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gOS5x":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "dangerous", ()=>dangerous);
const dangerous = [
    "cent",
    "copy",
    "divide",
    "gt",
    "lt",
    "not",
    "para",
    "times"
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dkvoz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The smallest way to encode a character.
 *
 * @param {number} code
 * @returns {string}
 */ parcelHelpers.export(exports, "formatBasic", ()=>formatBasic);
function formatBasic(code) {
    return "&#x" + code.toString(16).toUpperCase() + ";";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3gpcS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Count how often a character (or substring) is used in a string.
 *
 * @param {string} value
 *   Value to search in.
 * @param {string} character
 *   Character (or substring) to look for.
 * @return {number}
 *   Number of times `character` occurred in `value`.
 */ parcelHelpers.export(exports, "ccount", ()=>ccount);
function ccount(value, character) {
    const source = String(value);
    if (typeof character !== "string") throw new TypeError("Expected character");
    let count = 0;
    let index = source.indexOf(character);
    while(index !== -1){
        count++;
        index = source.indexOf(character, index + character.length);
    }
    return count;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9GJIh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "constants", ()=>constants);
const constants = {
    // See: <https://html.spec.whatwg.org/#attribute-name-state>.
    name: [
        [
            "	\n\f\r &/=>".split(""),
            "	\n\f\r \"&'/=>`".split("")
        ],
        [
            "\0	\n\f\r \"&'/<=>".split(""),
            "\0	\n\f\r \"&'/<=>`".split("")
        ]
    ],
    // See: <https://html.spec.whatwg.org/#attribute-value-(unquoted)-state>.
    unquoted: [
        [
            "	\n\f\r &>".split(""),
            "\0	\n\f\r \"&'<=>`".split("")
        ],
        [
            "\0	\n\f\r \"&'<=>`".split(""),
            "\0	\n\f\r \"&'<=>`".split("")
        ]
    ],
    // See: <https://html.spec.whatwg.org/#attribute-value-(single-quoted)-state>.
    single: [
        [
            "&'".split(""),
            "\"&'`".split("")
        ],
        [
            "\0&'".split(""),
            "\0\"&'`".split("")
        ]
    ],
    // See: <https://html.spec.whatwg.org/#attribute-value-(double-quoted)-state>.
    double: [
        [
            '"&'.split(""),
            "\"&'`".split("")
        ],
        [
            '\0"&'.split(""),
            "\0\"&'`".split("")
        ]
    ]
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6xJn3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @type {Handle}
 * @param {Comment} node
 */ parcelHelpers.export(exports, "comment", ()=>comment);
/**
 * @typedef {import('./types.js').Handle} Handle
 * @typedef {import('./types.js').Comment} Comment
 */ var _stringifyEntities = require("stringify-entities");
function comment(ctx, node) {
    // See: <https://html.spec.whatwg.org/multipage/syntax.html#comments>
    return ctx.bogusComments ? "<?" + (0, _stringifyEntities.stringifyEntities)(node.value, Object.assign({}, ctx.entities, {
        subset: [
            ">"
        ]
    })) + ">" : "<!--" + node.value.replace(/^>|^->|<!--|-->|--!>|<!-$/g, encode) + "-->";
    /**
   * @param {string} $0
   */ function encode($0) {
        return (0, _stringifyEntities.stringifyEntities)($0, Object.assign({}, ctx.entities, {
            subset: [
                "<",
                ">"
            ]
        }));
    }
}

},{"stringify-entities":"bVgcP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3xnm1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @typedef {import('./types.js').Handle} Handle
 */ /**
 * @type {Handle}
 */ parcelHelpers.export(exports, "doctype", ()=>doctype);
function doctype(ctx) {
    return "<!" + (ctx.upperDoctype ? "DOCTYPE" : "doctype") + (ctx.tightDoctype ? "" : " ") + "html>";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2AavL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @type {Handle}
 * @param {Raw} node
 */ parcelHelpers.export(exports, "raw", ()=>raw);
/**
 * @typedef {import('./types.js').Handle} Handle
 * @typedef {import('./types.js').Raw} Raw
 */ var _textJs = require("./text.js");
function raw(ctx, node, index, parent) {
    // @ts-ignore Hush.
    return ctx.dangerous ? node.value : (0, _textJs.text)(ctx, node, index, parent);
}

},{"./text.js":"YdZUd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"YdZUd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @type {Handle}
 * @param {Text} node
 */ parcelHelpers.export(exports, "text", ()=>text);
/**
 * @typedef {import('./types.js').Handle} Handle
 * @typedef {import('./types.js').Text} Text
 */ var _stringifyEntities = require("stringify-entities");
function text(ctx, node, _, parent) {
    // Check if content of `node` should be escaped.
    return parent && parent.type === "element" && (parent.tagName === "script" || parent.tagName === "style") ? node.value : (0, _stringifyEntities.stringifyEntities)(node.value, Object.assign({}, ctx.entities, {
        subset: [
            "<",
            "&"
        ]
    }));
}

},{"stringify-entities":"bVgcP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8nXCR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _elementsJs = require("./elements.js");
parcelHelpers.exportAll(_elementsJs, exports);
var _renderJs = require("./render.js");
parcelHelpers.exportAll(_renderJs, exports);

},{"./elements.js":"dSAVW","./render.js":"2J047","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dSAVW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "doc", ()=>doc);
parcelHelpers.export(exports, "paragraph", ()=>paragraph);
parcelHelpers.export(exports, "heading", ()=>heading);
parcelHelpers.export(exports, "mediaContainer", ()=>mediaContainer);
parcelHelpers.export(exports, "token", ()=>token);
parcelHelpers.export(exports, "image", ()=>image);
parcelHelpers.export(exports, "column", ()=>column);
parcelHelpers.export(exports, "columnContainer", ()=>columnContainer);
var _unistBuilder = require("unist-builder");
const doc = (content, attrs)=>(0, _unistBuilder.u)("root", attrs, content);
const paragraph = (text)=>(0, _unistBuilder.u)("paragraph", [
        (0, _unistBuilder.u)("text", text)
    ]);
const heading = (text, attrs)=>(0, _unistBuilder.u)("heading", attrs, [
        (0, _unistBuilder.u)("text", text)
    ]);
const mediaContainer = (content, attrs)=>(0, _unistBuilder.u)("media-container", attrs, content);
const token = (tezosStoragePointer)=>(0, _unistBuilder.u)("token", tezosStoragePointer);
const image = (url, attrs)=>(0, _unistBuilder.u)("image", {
        ...attrs,
        url
    });
const column = (content, attrs)=>(0, _unistBuilder.u)("column", attrs, content);
const columnContainer = (content, attrs)=>(0, _unistBuilder.u)("column-container", attrs, content);

},{"unist-builder":"4XY8i","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4XY8i":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "u", ()=>u);
var u = /**
   * @param {string} type Type of node
   * @param {Props|ChildrenOrValue} [props] Additional properties for node (or `children` or `value`)
   * @param {ChildrenOrValue} [value] `children` or `value` of node
   * @returns {Node}
   */ /**
 * @type {BuildVoid & BuildVoidWithProps & BuildLiteral & BuildLiteralWithProps & BuildParent & BuildParentWithProps}
 */ function(type, props, value) {
    /** @type {Node} */ var node = {
        type: String(type)
    };
    if ((value === undefined || value === null) && (typeof props === "string" || Array.isArray(props))) value = props;
    else Object.assign(node, props);
    if (Array.isArray(value)) node.children = value;
    else if (value !== undefined && value !== null) node.value = String(value);
    return node;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2J047":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "render", ()=>render);
var _unistUtilMap = require("unist-util-map");
var _hastscript = require("hastscript");
const getAttrs = (node)=>{
    const nodeAttrs = new Set([
        "type",
        "children",
        "value"
    ]);
    Object.entries(node).reduce((attrs, [key, value])=>{
        if (nodeAttrs.has(key)) return attrs;
        attrs[key] = value;
        return value;
    }, {});
};
// Very basic, we match each node type and transform it to a HAST node, the result HAST tree
// can then be stringified, producing HTML
const nodeRenderer = {
    root: (node)=>(0, _hastscript.h)("div", getAttrs(node), node.children),
    paragraph: (node)=>(0, _hastscript.h)("p", getAttrs(node), node.children),
    heading: (node)=>(0, _hastscript.h)(`h${node.level}`, getAttrs(node), node.children),
    "media-container": (node)=>{
        const layout = node.layout || "1x1";
        let rows;
        let onRow;
        if (layout.includes("x")) {
            [onRow, rows] = layout.split("x").map((x)=>parseInt(x, 10));
            onRow = new Array(rows).fill(onRow);
        } else if (layout.includes("-")) {
            onRow = layout.split("-").map((x)=>parseInt(x, 10));
            rows = 2;
        } else throw new Error(`Invalid layout ${layout}`);
        const containers = [];
        let childIndex = 0;
        for(let i = 0; i < rows; i++){
            const row = [];
            for(let j = 0; j < onRow[i]; j++){
                row.push((0, _hastscript.h)("div", {
                    class: `item-${childIndex + 1}`
                }, [
                    node.children[childIndex]
                ]));
                childIndex++;
            }
            containers.push((0, _hastscript.h)("div", {
                class: `row row-${i + 1}`
            }, row));
        }
        Object.assign(node, {
            children: containers
        });
        return (0, _hastscript.h)("div", {
            ...getAttrs(node),
            class: `media-container layout-${layout}`
        }, node.children);
    },
    column: (node)=>(0, _hastscript.h)("div", {
            ...getAttrs(node),
            class: "column"
        }, node.children),
    "column-container": (node)=>(0, _hastscript.h)("div", {
            ...getAttrs(node),
            class: "column-container"
        }, node.children),
    image: (node)=>{
        const attrs = {
            src: node.url
        };
        if (node["aspect-ratio"]) attrs.style = `aspect-ratio: ${node["aspect-ratio"]}`;
        return (0, _hastscript.h)("img", attrs);
    }
};
const render = (tree)=>(0, _unistUtilMap.map)(tree, (node)=>{
        if (!nodeRenderer[node.type]) return node;
        return nodeRenderer[node.type](node);
    });

},{"unist-util-map":"1MRFO","hastscript":"80quX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1MRFO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @typedef {import('unist').Node} Node
 */ /**
 * Unist utility to create a new tree by mapping all nodes with the given function.
 *
 * @template {Node} Tree
 * @param {Tree} tree Tree to map
 * @param {import('./complex-types').MapFunction<Tree>} iteratee Function that returns a new node
 * @returns {Tree} New mapped tree.
 */ parcelHelpers.export(exports, "map", ()=>map);
function map(tree, iteratee) {
    // @ts-expect-error Looks like a children.
    return preorder(tree, null, null);
    /** @type {import('./complex-types').MapFunction<Tree>} */ function preorder(node, index1, parent) {
        var newNode = Object.assign({}, iteratee(node, index1, parent));
        if ("children" in node) {
            // @ts-expect-error Looks like a parent.
            newNode.children = node.children.map(function(/** @type {import('./complex-types').InclusiveDescendant<Tree>} */ child, /** @type {number} */ index) {
                return preorder(child, index, node);
            });
        }
        return newNode;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"80quX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @typedef {import('./lib/index.js').Child} Child Acceptable child value
 * @typedef {import('./lib/index.js').Properties} Properties Acceptable properties value.
 */ parcelHelpers.export(exports, "h", ()=>(0, _indexJs.h));
parcelHelpers.export(exports, "s", ()=>(0, _indexJs.s));
var _indexJs = require("./lib/index.js");

},{"./lib/index.js":"crYeI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"crYeI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @typedef {import('./core.js').HChild} Child Acceptable child value
 * @typedef {import('./core.js').HProperties} Properties Acceptable properties value.
 */ parcelHelpers.export(exports, "h", ()=>(0, _htmlJs.h));
parcelHelpers.export(exports, "s", ()=>(0, _svgJs.s));
var _htmlJs = require("./html.js");
var _svgJs = require("./svg.js");

},{"./html.js":"gsTRl","./svg.js":"lI1PM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gsTRl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "h", ()=>h);
/**
 * @typedef {import('./core.js').HChild} Child Acceptable child value
 * @typedef {import('./core.js').HProperties} Properties Acceptable properties value.
 *
 * @typedef {import('./jsx-classic').Element} h.JSX.Element
 * @typedef {import('./jsx-classic').IntrinsicAttributes} h.JSX.IntrinsicAttributes
 * @typedef {import('./jsx-classic').IntrinsicElements} h.JSX.IntrinsicElements
 * @typedef {import('./jsx-classic').ElementChildrenAttribute} h.JSX.ElementChildrenAttribute
 */ var _propertyInformation = require("property-information");
var _coreJs = require("./core.js");
const h = (0, _coreJs.core)((0, _propertyInformation.html), "div");

},{"property-information":"gJnAE","./core.js":"7ZMRa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gJnAE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "find", ()=>(0, _findJs.find));
parcelHelpers.export(exports, "hastToReact", ()=>(0, _hastToReactJs.hastToReact));
parcelHelpers.export(exports, "normalize", ()=>(0, _normalizeJs.normalize));
parcelHelpers.export(exports, "html", ()=>html);
parcelHelpers.export(exports, "svg", ()=>svg);
/**
 * @typedef {import('./lib/util/info.js').Info} Info
 * @typedef {import('./lib/util/schema.js').Schema} Schema
 */ var _mergeJs = require("./lib/util/merge.js");
var _xlinkJs = require("./lib/xlink.js");
var _xmlJs = require("./lib/xml.js");
var _xmlnsJs = require("./lib/xmlns.js");
var _ariaJs = require("./lib/aria.js");
var _htmlJs = require("./lib/html.js");
var _svgJs = require("./lib/svg.js");
var _findJs = require("./lib/find.js");
var _hastToReactJs = require("./lib/hast-to-react.js");
var _normalizeJs = require("./lib/normalize.js");
const html = (0, _mergeJs.merge)([
    (0, _xmlJs.xml),
    (0, _xlinkJs.xlink),
    (0, _xmlnsJs.xmlns),
    (0, _ariaJs.aria),
    (0, _htmlJs.html)
], "html");
const svg = (0, _mergeJs.merge)([
    (0, _xmlJs.xml),
    (0, _xlinkJs.xlink),
    (0, _xmlnsJs.xmlns),
    (0, _ariaJs.aria),
    (0, _svgJs.svg)
], "svg");

},{"./lib/util/merge.js":"2FmLM","./lib/xlink.js":"9gW8u","./lib/xml.js":"e9ef2","./lib/xmlns.js":"e8tNT","./lib/aria.js":"CnWCO","./lib/html.js":"eOFqD","./lib/svg.js":"1rj1q","./lib/find.js":"4VgLG","./lib/hast-to-react.js":false,"./lib/normalize.js":"ahd5Y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2FmLM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @param {Schema[]} definitions
 * @param {string} [space]
 * @returns {Schema}
 */ parcelHelpers.export(exports, "merge", ()=>merge);
/**
 * @typedef {import('./schema.js').Properties} Properties
 * @typedef {import('./schema.js').Normal} Normal
 */ var _schemaJs = require("./schema.js");
function merge(definitions, space) {
    /** @type {Properties} */ const property = {};
    /** @type {Normal} */ const normal = {};
    let index = -1;
    while(++index < definitions.length){
        Object.assign(property, definitions[index].property);
        Object.assign(normal, definitions[index].normal);
    }
    return new (0, _schemaJs.Schema)(property, normal, space);
}

},{"./schema.js":"6dI93","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6dI93":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @typedef {import('./info.js').Info} Info
 * @typedef {Record<string, Info>} Properties
 * @typedef {Record<string, string>} Normal
 */ parcelHelpers.export(exports, "Schema", ()=>Schema);
class Schema {
    /**
   * @constructor
   * @param {Properties} property
   * @param {Normal} normal
   * @param {string} [space]
   */ constructor(property, normal, space){
        this.property = property;
        this.normal = normal;
        if (space) this.space = space;
    }
}
/** @type {Properties} */ Schema.prototype.property = {};
/** @type {Normal} */ Schema.prototype.normal = {};
/** @type {string|null} */ Schema.prototype.space = null;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9gW8u":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "xlink", ()=>xlink);
var _createJs = require("./util/create.js");
const xlink = (0, _createJs.create)({
    space: "xlink",
    transform (_, prop) {
        return "xlink:" + prop.slice(5).toLowerCase();
    },
    properties: {
        xLinkActuate: null,
        xLinkArcRole: null,
        xLinkHref: null,
        xLinkRole: null,
        xLinkShow: null,
        xLinkTitle: null,
        xLinkType: null
    }
});

},{"./util/create.js":"hyYO6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hyYO6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @param {Definition} definition
 * @returns {Schema}
 */ parcelHelpers.export(exports, "create", ()=>create);
/**
 * @typedef {import('./schema.js').Properties} Properties
 * @typedef {import('./schema.js').Normal} Normal
 *
 * @typedef {Record<string, string>} Attributes
 *
 * @typedef {Object} Definition
 * @property {Record<string, number|null>} properties
 * @property {(attributes: Attributes, property: string) => string} transform
 * @property {string} [space]
 * @property {Attributes} [attributes]
 * @property {Array<string>} [mustUseProperty]
 */ var _normalizeJs = require("../normalize.js");
var _schemaJs = require("./schema.js");
var _definedInfoJs = require("./defined-info.js");
const own = {}.hasOwnProperty;
function create(definition) {
    /** @type {Properties} */ const property = {};
    /** @type {Normal} */ const normal = {};
    /** @type {string} */ let prop;
    for(prop in definition.properties)if (own.call(definition.properties, prop)) {
        const value = definition.properties[prop];
        const info = new (0, _definedInfoJs.DefinedInfo)(prop, definition.transform(definition.attributes || {}, prop), value, definition.space);
        if (definition.mustUseProperty && definition.mustUseProperty.includes(prop)) info.mustUseProperty = true;
        property[prop] = info;
        normal[(0, _normalizeJs.normalize)(prop)] = prop;
        normal[(0, _normalizeJs.normalize)(info.attribute)] = prop;
    }
    return new (0, _schemaJs.Schema)(property, normal, definition.space);
}

},{"../normalize.js":"ahd5Y","./schema.js":"6dI93","./defined-info.js":"dJvQj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ahd5Y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @param {string} value
 * @returns {string}
 */ parcelHelpers.export(exports, "normalize", ()=>normalize);
function normalize(value) {
    return value.toLowerCase();
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dJvQj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DefinedInfo", ()=>DefinedInfo);
var _infoJs = require("./info.js");
var _typesJs = require("./types.js");
/** @type {Array<keyof types>} */ // @ts-expect-error: hush.
const checks = Object.keys(_typesJs);
class DefinedInfo extends (0, _infoJs.Info) {
    /**
   * @constructor
   * @param {string} property
   * @param {string} attribute
   * @param {number|null} [mask]
   * @param {string} [space]
   */ constructor(property, attribute, mask, space){
        let index = -1;
        super(property, attribute);
        mark(this, "space", space);
        if (typeof mask === "number") while(++index < checks.length){
            const check = checks[index];
            mark(this, checks[index], (mask & _typesJs[check]) === _typesJs[check]);
        }
    }
}
DefinedInfo.prototype.defined = true;
/**
 * @param {DefinedInfo} values
 * @param {string} key
 * @param {unknown} value
 */ function mark(values, key, value) {
    if (value) // @ts-expect-error: assume `value` matches the expected value of `key`.
    values[key] = value;
}

},{"./info.js":"7NT0d","./types.js":"5bGAV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7NT0d":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Info", ()=>Info);
class Info {
    /**
   * @constructor
   * @param {string} property
   * @param {string} attribute
   */ constructor(property, attribute){
        /** @type {string} */ this.property = property;
        /** @type {string} */ this.attribute = attribute;
    }
}
/** @type {string|null} */ Info.prototype.space = null;
Info.prototype.boolean = false;
Info.prototype.booleanish = false;
Info.prototype.overloadedBoolean = false;
Info.prototype.number = false;
Info.prototype.commaSeparated = false;
Info.prototype.spaceSeparated = false;
Info.prototype.commaOrSpaceSeparated = false;
Info.prototype.mustUseProperty = false;
Info.prototype.defined = false;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5bGAV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "boolean", ()=>boolean);
parcelHelpers.export(exports, "booleanish", ()=>booleanish);
parcelHelpers.export(exports, "overloadedBoolean", ()=>overloadedBoolean);
parcelHelpers.export(exports, "number", ()=>number);
parcelHelpers.export(exports, "spaceSeparated", ()=>spaceSeparated);
parcelHelpers.export(exports, "commaSeparated", ()=>commaSeparated);
parcelHelpers.export(exports, "commaOrSpaceSeparated", ()=>commaOrSpaceSeparated);
let powers = 0;
const boolean = increment();
const booleanish = increment();
const overloadedBoolean = increment();
const number = increment();
const spaceSeparated = increment();
const commaSeparated = increment();
const commaOrSpaceSeparated = increment();
function increment() {
    return 2 ** ++powers;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e9ef2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "xml", ()=>xml);
var _createJs = require("./util/create.js");
const xml = (0, _createJs.create)({
    space: "xml",
    transform (_, prop) {
        return "xml:" + prop.slice(3).toLowerCase();
    },
    properties: {
        xmlLang: null,
        xmlBase: null,
        xmlSpace: null
    }
});

},{"./util/create.js":"hyYO6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e8tNT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "xmlns", ()=>xmlns);
var _createJs = require("./util/create.js");
var _caseInsensitiveTransformJs = require("./util/case-insensitive-transform.js");
const xmlns = (0, _createJs.create)({
    space: "xmlns",
    attributes: {
        xmlnsxlink: "xmlns:xlink"
    },
    transform: (0, _caseInsensitiveTransformJs.caseInsensitiveTransform),
    properties: {
        xmlns: null,
        xmlnsXLink: null
    }
});

},{"./util/create.js":"hyYO6","./util/case-insensitive-transform.js":"5t72J","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5t72J":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @param {Record<string, string>} attributes
 * @param {string} property
 * @returns {string}
 */ parcelHelpers.export(exports, "caseInsensitiveTransform", ()=>caseInsensitiveTransform);
var _caseSensitiveTransformJs = require("./case-sensitive-transform.js");
function caseInsensitiveTransform(attributes, property) {
    return (0, _caseSensitiveTransformJs.caseSensitiveTransform)(attributes, property.toLowerCase());
}

},{"./case-sensitive-transform.js":"JWsdM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"JWsdM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @param {Record<string, string>} attributes
 * @param {string} attribute
 * @returns {string}
 */ parcelHelpers.export(exports, "caseSensitiveTransform", ()=>caseSensitiveTransform);
function caseSensitiveTransform(attributes, attribute) {
    return attribute in attributes ? attributes[attribute] : attribute;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"CnWCO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "aria", ()=>aria);
var _typesJs = require("./util/types.js");
var _createJs = require("./util/create.js");
const aria = (0, _createJs.create)({
    transform (_, prop) {
        return prop === "role" ? prop : "aria-" + prop.slice(4).toLowerCase();
    },
    properties: {
        ariaActiveDescendant: null,
        ariaAtomic: (0, _typesJs.booleanish),
        ariaAutoComplete: null,
        ariaBusy: (0, _typesJs.booleanish),
        ariaChecked: (0, _typesJs.booleanish),
        ariaColCount: (0, _typesJs.number),
        ariaColIndex: (0, _typesJs.number),
        ariaColSpan: (0, _typesJs.number),
        ariaControls: (0, _typesJs.spaceSeparated),
        ariaCurrent: null,
        ariaDescribedBy: (0, _typesJs.spaceSeparated),
        ariaDetails: null,
        ariaDisabled: (0, _typesJs.booleanish),
        ariaDropEffect: (0, _typesJs.spaceSeparated),
        ariaErrorMessage: null,
        ariaExpanded: (0, _typesJs.booleanish),
        ariaFlowTo: (0, _typesJs.spaceSeparated),
        ariaGrabbed: (0, _typesJs.booleanish),
        ariaHasPopup: null,
        ariaHidden: (0, _typesJs.booleanish),
        ariaInvalid: null,
        ariaKeyShortcuts: null,
        ariaLabel: null,
        ariaLabelledBy: (0, _typesJs.spaceSeparated),
        ariaLevel: (0, _typesJs.number),
        ariaLive: null,
        ariaModal: (0, _typesJs.booleanish),
        ariaMultiLine: (0, _typesJs.booleanish),
        ariaMultiSelectable: (0, _typesJs.booleanish),
        ariaOrientation: null,
        ariaOwns: (0, _typesJs.spaceSeparated),
        ariaPlaceholder: null,
        ariaPosInSet: (0, _typesJs.number),
        ariaPressed: (0, _typesJs.booleanish),
        ariaReadOnly: (0, _typesJs.booleanish),
        ariaRelevant: null,
        ariaRequired: (0, _typesJs.booleanish),
        ariaRoleDescription: (0, _typesJs.spaceSeparated),
        ariaRowCount: (0, _typesJs.number),
        ariaRowIndex: (0, _typesJs.number),
        ariaRowSpan: (0, _typesJs.number),
        ariaSelected: (0, _typesJs.booleanish),
        ariaSetSize: (0, _typesJs.number),
        ariaSort: null,
        ariaValueMax: (0, _typesJs.number),
        ariaValueMin: (0, _typesJs.number),
        ariaValueNow: (0, _typesJs.number),
        ariaValueText: null,
        role: null
    }
});

},{"./util/types.js":"5bGAV","./util/create.js":"hyYO6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eOFqD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "html", ()=>html);
var _typesJs = require("./util/types.js");
var _createJs = require("./util/create.js");
var _caseInsensitiveTransformJs = require("./util/case-insensitive-transform.js");
const html = (0, _createJs.create)({
    space: "html",
    attributes: {
        acceptcharset: "accept-charset",
        classname: "class",
        htmlfor: "for",
        httpequiv: "http-equiv"
    },
    transform: (0, _caseInsensitiveTransformJs.caseInsensitiveTransform),
    mustUseProperty: [
        "checked",
        "multiple",
        "muted",
        "selected"
    ],
    properties: {
        // Standard Properties.
        abbr: null,
        accept: (0, _typesJs.commaSeparated),
        acceptCharset: (0, _typesJs.spaceSeparated),
        accessKey: (0, _typesJs.spaceSeparated),
        action: null,
        allow: null,
        allowFullScreen: (0, _typesJs.boolean),
        allowPaymentRequest: (0, _typesJs.boolean),
        allowUserMedia: (0, _typesJs.boolean),
        alt: null,
        as: null,
        async: (0, _typesJs.boolean),
        autoCapitalize: null,
        autoComplete: (0, _typesJs.spaceSeparated),
        autoFocus: (0, _typesJs.boolean),
        autoPlay: (0, _typesJs.boolean),
        capture: (0, _typesJs.boolean),
        charSet: null,
        checked: (0, _typesJs.boolean),
        cite: null,
        className: (0, _typesJs.spaceSeparated),
        cols: (0, _typesJs.number),
        colSpan: null,
        content: null,
        contentEditable: (0, _typesJs.booleanish),
        controls: (0, _typesJs.boolean),
        controlsList: (0, _typesJs.spaceSeparated),
        coords: (0, _typesJs.number) | (0, _typesJs.commaSeparated),
        crossOrigin: null,
        data: null,
        dateTime: null,
        decoding: null,
        default: (0, _typesJs.boolean),
        defer: (0, _typesJs.boolean),
        dir: null,
        dirName: null,
        disabled: (0, _typesJs.boolean),
        download: (0, _typesJs.overloadedBoolean),
        draggable: (0, _typesJs.booleanish),
        encType: null,
        enterKeyHint: null,
        form: null,
        formAction: null,
        formEncType: null,
        formMethod: null,
        formNoValidate: (0, _typesJs.boolean),
        formTarget: null,
        headers: (0, _typesJs.spaceSeparated),
        height: (0, _typesJs.number),
        hidden: (0, _typesJs.boolean),
        high: (0, _typesJs.number),
        href: null,
        hrefLang: null,
        htmlFor: (0, _typesJs.spaceSeparated),
        httpEquiv: (0, _typesJs.spaceSeparated),
        id: null,
        imageSizes: null,
        imageSrcSet: null,
        inputMode: null,
        integrity: null,
        is: null,
        isMap: (0, _typesJs.boolean),
        itemId: null,
        itemProp: (0, _typesJs.spaceSeparated),
        itemRef: (0, _typesJs.spaceSeparated),
        itemScope: (0, _typesJs.boolean),
        itemType: (0, _typesJs.spaceSeparated),
        kind: null,
        label: null,
        lang: null,
        language: null,
        list: null,
        loading: null,
        loop: (0, _typesJs.boolean),
        low: (0, _typesJs.number),
        manifest: null,
        max: null,
        maxLength: (0, _typesJs.number),
        media: null,
        method: null,
        min: null,
        minLength: (0, _typesJs.number),
        multiple: (0, _typesJs.boolean),
        muted: (0, _typesJs.boolean),
        name: null,
        nonce: null,
        noModule: (0, _typesJs.boolean),
        noValidate: (0, _typesJs.boolean),
        onAbort: null,
        onAfterPrint: null,
        onAuxClick: null,
        onBeforePrint: null,
        onBeforeUnload: null,
        onBlur: null,
        onCancel: null,
        onCanPlay: null,
        onCanPlayThrough: null,
        onChange: null,
        onClick: null,
        onClose: null,
        onContextLost: null,
        onContextMenu: null,
        onContextRestored: null,
        onCopy: null,
        onCueChange: null,
        onCut: null,
        onDblClick: null,
        onDrag: null,
        onDragEnd: null,
        onDragEnter: null,
        onDragExit: null,
        onDragLeave: null,
        onDragOver: null,
        onDragStart: null,
        onDrop: null,
        onDurationChange: null,
        onEmptied: null,
        onEnded: null,
        onError: null,
        onFocus: null,
        onFormData: null,
        onHashChange: null,
        onInput: null,
        onInvalid: null,
        onKeyDown: null,
        onKeyPress: null,
        onKeyUp: null,
        onLanguageChange: null,
        onLoad: null,
        onLoadedData: null,
        onLoadedMetadata: null,
        onLoadEnd: null,
        onLoadStart: null,
        onMessage: null,
        onMessageError: null,
        onMouseDown: null,
        onMouseEnter: null,
        onMouseLeave: null,
        onMouseMove: null,
        onMouseOut: null,
        onMouseOver: null,
        onMouseUp: null,
        onOffline: null,
        onOnline: null,
        onPageHide: null,
        onPageShow: null,
        onPaste: null,
        onPause: null,
        onPlay: null,
        onPlaying: null,
        onPopState: null,
        onProgress: null,
        onRateChange: null,
        onRejectionHandled: null,
        onReset: null,
        onResize: null,
        onScroll: null,
        onSecurityPolicyViolation: null,
        onSeeked: null,
        onSeeking: null,
        onSelect: null,
        onSlotChange: null,
        onStalled: null,
        onStorage: null,
        onSubmit: null,
        onSuspend: null,
        onTimeUpdate: null,
        onToggle: null,
        onUnhandledRejection: null,
        onUnload: null,
        onVolumeChange: null,
        onWaiting: null,
        onWheel: null,
        open: (0, _typesJs.boolean),
        optimum: (0, _typesJs.number),
        pattern: null,
        ping: (0, _typesJs.spaceSeparated),
        placeholder: null,
        playsInline: (0, _typesJs.boolean),
        poster: null,
        preload: null,
        readOnly: (0, _typesJs.boolean),
        referrerPolicy: null,
        rel: (0, _typesJs.spaceSeparated),
        required: (0, _typesJs.boolean),
        reversed: (0, _typesJs.boolean),
        rows: (0, _typesJs.number),
        rowSpan: (0, _typesJs.number),
        sandbox: (0, _typesJs.spaceSeparated),
        scope: null,
        scoped: (0, _typesJs.boolean),
        seamless: (0, _typesJs.boolean),
        selected: (0, _typesJs.boolean),
        shape: null,
        size: (0, _typesJs.number),
        sizes: null,
        slot: null,
        span: (0, _typesJs.number),
        spellCheck: (0, _typesJs.booleanish),
        src: null,
        srcDoc: null,
        srcLang: null,
        srcSet: null,
        start: (0, _typesJs.number),
        step: null,
        style: null,
        tabIndex: (0, _typesJs.number),
        target: null,
        title: null,
        translate: null,
        type: null,
        typeMustMatch: (0, _typesJs.boolean),
        useMap: null,
        value: (0, _typesJs.booleanish),
        width: (0, _typesJs.number),
        wrap: null,
        // Legacy.
        // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
        align: null,
        aLink: null,
        archive: (0, _typesJs.spaceSeparated),
        axis: null,
        background: null,
        bgColor: null,
        border: (0, _typesJs.number),
        borderColor: null,
        bottomMargin: (0, _typesJs.number),
        cellPadding: null,
        cellSpacing: null,
        char: null,
        charOff: null,
        classId: null,
        clear: null,
        code: null,
        codeBase: null,
        codeType: null,
        color: null,
        compact: (0, _typesJs.boolean),
        declare: (0, _typesJs.boolean),
        event: null,
        face: null,
        frame: null,
        frameBorder: null,
        hSpace: (0, _typesJs.number),
        leftMargin: (0, _typesJs.number),
        link: null,
        longDesc: null,
        lowSrc: null,
        marginHeight: (0, _typesJs.number),
        marginWidth: (0, _typesJs.number),
        noResize: (0, _typesJs.boolean),
        noHref: (0, _typesJs.boolean),
        noShade: (0, _typesJs.boolean),
        noWrap: (0, _typesJs.boolean),
        object: null,
        profile: null,
        prompt: null,
        rev: null,
        rightMargin: (0, _typesJs.number),
        rules: null,
        scheme: null,
        scrolling: (0, _typesJs.booleanish),
        standby: null,
        summary: null,
        text: null,
        topMargin: (0, _typesJs.number),
        valueType: null,
        version: null,
        vAlign: null,
        vLink: null,
        vSpace: (0, _typesJs.number),
        // Non-standard Properties.
        allowTransparency: null,
        autoCorrect: null,
        autoSave: null,
        disablePictureInPicture: (0, _typesJs.boolean),
        disableRemotePlayback: (0, _typesJs.boolean),
        prefix: null,
        property: null,
        results: (0, _typesJs.number),
        security: null,
        unselectable: null
    }
});

},{"./util/types.js":"5bGAV","./util/create.js":"hyYO6","./util/case-insensitive-transform.js":"5t72J","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1rj1q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "svg", ()=>svg);
var _typesJs = require("./util/types.js");
var _createJs = require("./util/create.js");
var _caseSensitiveTransformJs = require("./util/case-sensitive-transform.js");
const svg = (0, _createJs.create)({
    space: "svg",
    attributes: {
        accentHeight: "accent-height",
        alignmentBaseline: "alignment-baseline",
        arabicForm: "arabic-form",
        baselineShift: "baseline-shift",
        capHeight: "cap-height",
        className: "class",
        clipPath: "clip-path",
        clipRule: "clip-rule",
        colorInterpolation: "color-interpolation",
        colorInterpolationFilters: "color-interpolation-filters",
        colorProfile: "color-profile",
        colorRendering: "color-rendering",
        crossOrigin: "crossorigin",
        dataType: "datatype",
        dominantBaseline: "dominant-baseline",
        enableBackground: "enable-background",
        fillOpacity: "fill-opacity",
        fillRule: "fill-rule",
        floodColor: "flood-color",
        floodOpacity: "flood-opacity",
        fontFamily: "font-family",
        fontSize: "font-size",
        fontSizeAdjust: "font-size-adjust",
        fontStretch: "font-stretch",
        fontStyle: "font-style",
        fontVariant: "font-variant",
        fontWeight: "font-weight",
        glyphName: "glyph-name",
        glyphOrientationHorizontal: "glyph-orientation-horizontal",
        glyphOrientationVertical: "glyph-orientation-vertical",
        hrefLang: "hreflang",
        horizAdvX: "horiz-adv-x",
        horizOriginX: "horiz-origin-x",
        horizOriginY: "horiz-origin-y",
        imageRendering: "image-rendering",
        letterSpacing: "letter-spacing",
        lightingColor: "lighting-color",
        markerEnd: "marker-end",
        markerMid: "marker-mid",
        markerStart: "marker-start",
        navDown: "nav-down",
        navDownLeft: "nav-down-left",
        navDownRight: "nav-down-right",
        navLeft: "nav-left",
        navNext: "nav-next",
        navPrev: "nav-prev",
        navRight: "nav-right",
        navUp: "nav-up",
        navUpLeft: "nav-up-left",
        navUpRight: "nav-up-right",
        onAbort: "onabort",
        onActivate: "onactivate",
        onAfterPrint: "onafterprint",
        onBeforePrint: "onbeforeprint",
        onBegin: "onbegin",
        onCancel: "oncancel",
        onCanPlay: "oncanplay",
        onCanPlayThrough: "oncanplaythrough",
        onChange: "onchange",
        onClick: "onclick",
        onClose: "onclose",
        onCopy: "oncopy",
        onCueChange: "oncuechange",
        onCut: "oncut",
        onDblClick: "ondblclick",
        onDrag: "ondrag",
        onDragEnd: "ondragend",
        onDragEnter: "ondragenter",
        onDragExit: "ondragexit",
        onDragLeave: "ondragleave",
        onDragOver: "ondragover",
        onDragStart: "ondragstart",
        onDrop: "ondrop",
        onDurationChange: "ondurationchange",
        onEmptied: "onemptied",
        onEnd: "onend",
        onEnded: "onended",
        onError: "onerror",
        onFocus: "onfocus",
        onFocusIn: "onfocusin",
        onFocusOut: "onfocusout",
        onHashChange: "onhashchange",
        onInput: "oninput",
        onInvalid: "oninvalid",
        onKeyDown: "onkeydown",
        onKeyPress: "onkeypress",
        onKeyUp: "onkeyup",
        onLoad: "onload",
        onLoadedData: "onloadeddata",
        onLoadedMetadata: "onloadedmetadata",
        onLoadStart: "onloadstart",
        onMessage: "onmessage",
        onMouseDown: "onmousedown",
        onMouseEnter: "onmouseenter",
        onMouseLeave: "onmouseleave",
        onMouseMove: "onmousemove",
        onMouseOut: "onmouseout",
        onMouseOver: "onmouseover",
        onMouseUp: "onmouseup",
        onMouseWheel: "onmousewheel",
        onOffline: "onoffline",
        onOnline: "ononline",
        onPageHide: "onpagehide",
        onPageShow: "onpageshow",
        onPaste: "onpaste",
        onPause: "onpause",
        onPlay: "onplay",
        onPlaying: "onplaying",
        onPopState: "onpopstate",
        onProgress: "onprogress",
        onRateChange: "onratechange",
        onRepeat: "onrepeat",
        onReset: "onreset",
        onResize: "onresize",
        onScroll: "onscroll",
        onSeeked: "onseeked",
        onSeeking: "onseeking",
        onSelect: "onselect",
        onShow: "onshow",
        onStalled: "onstalled",
        onStorage: "onstorage",
        onSubmit: "onsubmit",
        onSuspend: "onsuspend",
        onTimeUpdate: "ontimeupdate",
        onToggle: "ontoggle",
        onUnload: "onunload",
        onVolumeChange: "onvolumechange",
        onWaiting: "onwaiting",
        onZoom: "onzoom",
        overlinePosition: "overline-position",
        overlineThickness: "overline-thickness",
        paintOrder: "paint-order",
        panose1: "panose-1",
        pointerEvents: "pointer-events",
        referrerPolicy: "referrerpolicy",
        renderingIntent: "rendering-intent",
        shapeRendering: "shape-rendering",
        stopColor: "stop-color",
        stopOpacity: "stop-opacity",
        strikethroughPosition: "strikethrough-position",
        strikethroughThickness: "strikethrough-thickness",
        strokeDashArray: "stroke-dasharray",
        strokeDashOffset: "stroke-dashoffset",
        strokeLineCap: "stroke-linecap",
        strokeLineJoin: "stroke-linejoin",
        strokeMiterLimit: "stroke-miterlimit",
        strokeOpacity: "stroke-opacity",
        strokeWidth: "stroke-width",
        tabIndex: "tabindex",
        textAnchor: "text-anchor",
        textDecoration: "text-decoration",
        textRendering: "text-rendering",
        typeOf: "typeof",
        underlinePosition: "underline-position",
        underlineThickness: "underline-thickness",
        unicodeBidi: "unicode-bidi",
        unicodeRange: "unicode-range",
        unitsPerEm: "units-per-em",
        vAlphabetic: "v-alphabetic",
        vHanging: "v-hanging",
        vIdeographic: "v-ideographic",
        vMathematical: "v-mathematical",
        vectorEffect: "vector-effect",
        vertAdvY: "vert-adv-y",
        vertOriginX: "vert-origin-x",
        vertOriginY: "vert-origin-y",
        wordSpacing: "word-spacing",
        writingMode: "writing-mode",
        xHeight: "x-height",
        // These were camelcased in Tiny. Now lowercased in SVG 2
        playbackOrder: "playbackorder",
        timelineBegin: "timelinebegin"
    },
    transform: (0, _caseSensitiveTransformJs.caseSensitiveTransform),
    properties: {
        about: (0, _typesJs.commaOrSpaceSeparated),
        accentHeight: (0, _typesJs.number),
        accumulate: null,
        additive: null,
        alignmentBaseline: null,
        alphabetic: (0, _typesJs.number),
        amplitude: (0, _typesJs.number),
        arabicForm: null,
        ascent: (0, _typesJs.number),
        attributeName: null,
        attributeType: null,
        azimuth: (0, _typesJs.number),
        bandwidth: null,
        baselineShift: null,
        baseFrequency: null,
        baseProfile: null,
        bbox: null,
        begin: null,
        bias: (0, _typesJs.number),
        by: null,
        calcMode: null,
        capHeight: (0, _typesJs.number),
        className: (0, _typesJs.spaceSeparated),
        clip: null,
        clipPath: null,
        clipPathUnits: null,
        clipRule: null,
        color: null,
        colorInterpolation: null,
        colorInterpolationFilters: null,
        colorProfile: null,
        colorRendering: null,
        content: null,
        contentScriptType: null,
        contentStyleType: null,
        crossOrigin: null,
        cursor: null,
        cx: null,
        cy: null,
        d: null,
        dataType: null,
        defaultAction: null,
        descent: (0, _typesJs.number),
        diffuseConstant: (0, _typesJs.number),
        direction: null,
        display: null,
        dur: null,
        divisor: (0, _typesJs.number),
        dominantBaseline: null,
        download: (0, _typesJs.boolean),
        dx: null,
        dy: null,
        edgeMode: null,
        editable: null,
        elevation: (0, _typesJs.number),
        enableBackground: null,
        end: null,
        event: null,
        exponent: (0, _typesJs.number),
        externalResourcesRequired: null,
        fill: null,
        fillOpacity: (0, _typesJs.number),
        fillRule: null,
        filter: null,
        filterRes: null,
        filterUnits: null,
        floodColor: null,
        floodOpacity: null,
        focusable: null,
        focusHighlight: null,
        fontFamily: null,
        fontSize: null,
        fontSizeAdjust: null,
        fontStretch: null,
        fontStyle: null,
        fontVariant: null,
        fontWeight: null,
        format: null,
        fr: null,
        from: null,
        fx: null,
        fy: null,
        g1: (0, _typesJs.commaSeparated),
        g2: (0, _typesJs.commaSeparated),
        glyphName: (0, _typesJs.commaSeparated),
        glyphOrientationHorizontal: null,
        glyphOrientationVertical: null,
        glyphRef: null,
        gradientTransform: null,
        gradientUnits: null,
        handler: null,
        hanging: (0, _typesJs.number),
        hatchContentUnits: null,
        hatchUnits: null,
        height: null,
        href: null,
        hrefLang: null,
        horizAdvX: (0, _typesJs.number),
        horizOriginX: (0, _typesJs.number),
        horizOriginY: (0, _typesJs.number),
        id: null,
        ideographic: (0, _typesJs.number),
        imageRendering: null,
        initialVisibility: null,
        in: null,
        in2: null,
        intercept: (0, _typesJs.number),
        k: (0, _typesJs.number),
        k1: (0, _typesJs.number),
        k2: (0, _typesJs.number),
        k3: (0, _typesJs.number),
        k4: (0, _typesJs.number),
        kernelMatrix: (0, _typesJs.commaOrSpaceSeparated),
        kernelUnitLength: null,
        keyPoints: null,
        keySplines: null,
        keyTimes: null,
        kerning: null,
        lang: null,
        lengthAdjust: null,
        letterSpacing: null,
        lightingColor: null,
        limitingConeAngle: (0, _typesJs.number),
        local: null,
        markerEnd: null,
        markerMid: null,
        markerStart: null,
        markerHeight: null,
        markerUnits: null,
        markerWidth: null,
        mask: null,
        maskContentUnits: null,
        maskUnits: null,
        mathematical: null,
        max: null,
        media: null,
        mediaCharacterEncoding: null,
        mediaContentEncodings: null,
        mediaSize: (0, _typesJs.number),
        mediaTime: null,
        method: null,
        min: null,
        mode: null,
        name: null,
        navDown: null,
        navDownLeft: null,
        navDownRight: null,
        navLeft: null,
        navNext: null,
        navPrev: null,
        navRight: null,
        navUp: null,
        navUpLeft: null,
        navUpRight: null,
        numOctaves: null,
        observer: null,
        offset: null,
        onAbort: null,
        onActivate: null,
        onAfterPrint: null,
        onBeforePrint: null,
        onBegin: null,
        onCancel: null,
        onCanPlay: null,
        onCanPlayThrough: null,
        onChange: null,
        onClick: null,
        onClose: null,
        onCopy: null,
        onCueChange: null,
        onCut: null,
        onDblClick: null,
        onDrag: null,
        onDragEnd: null,
        onDragEnter: null,
        onDragExit: null,
        onDragLeave: null,
        onDragOver: null,
        onDragStart: null,
        onDrop: null,
        onDurationChange: null,
        onEmptied: null,
        onEnd: null,
        onEnded: null,
        onError: null,
        onFocus: null,
        onFocusIn: null,
        onFocusOut: null,
        onHashChange: null,
        onInput: null,
        onInvalid: null,
        onKeyDown: null,
        onKeyPress: null,
        onKeyUp: null,
        onLoad: null,
        onLoadedData: null,
        onLoadedMetadata: null,
        onLoadStart: null,
        onMessage: null,
        onMouseDown: null,
        onMouseEnter: null,
        onMouseLeave: null,
        onMouseMove: null,
        onMouseOut: null,
        onMouseOver: null,
        onMouseUp: null,
        onMouseWheel: null,
        onOffline: null,
        onOnline: null,
        onPageHide: null,
        onPageShow: null,
        onPaste: null,
        onPause: null,
        onPlay: null,
        onPlaying: null,
        onPopState: null,
        onProgress: null,
        onRateChange: null,
        onRepeat: null,
        onReset: null,
        onResize: null,
        onScroll: null,
        onSeeked: null,
        onSeeking: null,
        onSelect: null,
        onShow: null,
        onStalled: null,
        onStorage: null,
        onSubmit: null,
        onSuspend: null,
        onTimeUpdate: null,
        onToggle: null,
        onUnload: null,
        onVolumeChange: null,
        onWaiting: null,
        onZoom: null,
        opacity: null,
        operator: null,
        order: null,
        orient: null,
        orientation: null,
        origin: null,
        overflow: null,
        overlay: null,
        overlinePosition: (0, _typesJs.number),
        overlineThickness: (0, _typesJs.number),
        paintOrder: null,
        panose1: null,
        path: null,
        pathLength: (0, _typesJs.number),
        patternContentUnits: null,
        patternTransform: null,
        patternUnits: null,
        phase: null,
        ping: (0, _typesJs.spaceSeparated),
        pitch: null,
        playbackOrder: null,
        pointerEvents: null,
        points: null,
        pointsAtX: (0, _typesJs.number),
        pointsAtY: (0, _typesJs.number),
        pointsAtZ: (0, _typesJs.number),
        preserveAlpha: null,
        preserveAspectRatio: null,
        primitiveUnits: null,
        propagate: null,
        property: (0, _typesJs.commaOrSpaceSeparated),
        r: null,
        radius: null,
        referrerPolicy: null,
        refX: null,
        refY: null,
        rel: (0, _typesJs.commaOrSpaceSeparated),
        rev: (0, _typesJs.commaOrSpaceSeparated),
        renderingIntent: null,
        repeatCount: null,
        repeatDur: null,
        requiredExtensions: (0, _typesJs.commaOrSpaceSeparated),
        requiredFeatures: (0, _typesJs.commaOrSpaceSeparated),
        requiredFonts: (0, _typesJs.commaOrSpaceSeparated),
        requiredFormats: (0, _typesJs.commaOrSpaceSeparated),
        resource: null,
        restart: null,
        result: null,
        rotate: null,
        rx: null,
        ry: null,
        scale: null,
        seed: null,
        shapeRendering: null,
        side: null,
        slope: null,
        snapshotTime: null,
        specularConstant: (0, _typesJs.number),
        specularExponent: (0, _typesJs.number),
        spreadMethod: null,
        spacing: null,
        startOffset: null,
        stdDeviation: null,
        stemh: null,
        stemv: null,
        stitchTiles: null,
        stopColor: null,
        stopOpacity: null,
        strikethroughPosition: (0, _typesJs.number),
        strikethroughThickness: (0, _typesJs.number),
        string: null,
        stroke: null,
        strokeDashArray: (0, _typesJs.commaOrSpaceSeparated),
        strokeDashOffset: null,
        strokeLineCap: null,
        strokeLineJoin: null,
        strokeMiterLimit: (0, _typesJs.number),
        strokeOpacity: (0, _typesJs.number),
        strokeWidth: null,
        style: null,
        surfaceScale: (0, _typesJs.number),
        syncBehavior: null,
        syncBehaviorDefault: null,
        syncMaster: null,
        syncTolerance: null,
        syncToleranceDefault: null,
        systemLanguage: (0, _typesJs.commaOrSpaceSeparated),
        tabIndex: (0, _typesJs.number),
        tableValues: null,
        target: null,
        targetX: (0, _typesJs.number),
        targetY: (0, _typesJs.number),
        textAnchor: null,
        textDecoration: null,
        textRendering: null,
        textLength: null,
        timelineBegin: null,
        title: null,
        transformBehavior: null,
        type: null,
        typeOf: (0, _typesJs.commaOrSpaceSeparated),
        to: null,
        transform: null,
        u1: null,
        u2: null,
        underlinePosition: (0, _typesJs.number),
        underlineThickness: (0, _typesJs.number),
        unicode: null,
        unicodeBidi: null,
        unicodeRange: null,
        unitsPerEm: (0, _typesJs.number),
        values: null,
        vAlphabetic: (0, _typesJs.number),
        vMathematical: (0, _typesJs.number),
        vectorEffect: null,
        vHanging: (0, _typesJs.number),
        vIdeographic: (0, _typesJs.number),
        version: null,
        vertAdvY: (0, _typesJs.number),
        vertOriginX: (0, _typesJs.number),
        vertOriginY: (0, _typesJs.number),
        viewBox: null,
        viewTarget: null,
        visibility: null,
        width: null,
        widths: null,
        wordSpacing: null,
        writingMode: null,
        x: null,
        x1: null,
        x2: null,
        xChannelSelector: null,
        xHeight: (0, _typesJs.number),
        y: null,
        y1: null,
        y2: null,
        yChannelSelector: null,
        z: null,
        zoomAndPan: null
    }
});

},{"./util/types.js":"5bGAV","./util/create.js":"hyYO6","./util/case-sensitive-transform.js":"JWsdM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4VgLG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @param {Schema} schema
 * @param {string} value
 * @returns {Info}
 */ parcelHelpers.export(exports, "find", ()=>find);
/**
 * @typedef {import('./util/schema.js').Schema} Schema
 */ var _normalizeJs = require("./normalize.js");
var _definedInfoJs = require("./util/defined-info.js");
var _infoJs = require("./util/info.js");
const valid = /^data[-\w.:]+$/i;
const dash = /-[a-z]/g;
const cap = /[A-Z]/g;
function find(schema, value) {
    const normal = (0, _normalizeJs.normalize)(value);
    let prop = value;
    let Type = (0, _infoJs.Info);
    if (normal in schema.normal) return schema.property[schema.normal[normal]];
    if (normal.length > 4 && normal.slice(0, 4) === "data" && valid.test(value)) {
        // Attribute or property.
        if (value.charAt(4) === "-") {
            // Turn it into a property.
            const rest = value.slice(5).replace(dash, camelcase);
            prop = "data" + rest.charAt(0).toUpperCase() + rest.slice(1);
        } else {
            // Turn it into an attribute.
            const rest = value.slice(4);
            if (!dash.test(rest)) {
                let dashes = rest.replace(cap, kebab);
                if (dashes.charAt(0) !== "-") dashes = "-" + dashes;
                value = "data" + dashes;
            }
        }
        Type = (0, _definedInfoJs.DefinedInfo);
    }
    return new Type(prop, value);
}
/**
 * @param {string} $0
 * @returns {string}
 */ function kebab($0) {
    return "-" + $0.toLowerCase();
}
/**
 * @param {string} $0
 * @returns {string}
 */ function camelcase($0) {
    return $0.charAt(1).toUpperCase();
}

},{"./normalize.js":"ahd5Y","./util/defined-info.js":"dJvQj","./util/info.js":"7NT0d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7ZMRa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @param {Schema} schema
 * @param {string} defaultTagName
 * @param {Array.<string>} [caseSensitive]
 */ parcelHelpers.export(exports, "core", ()=>core);
/**
 * @typedef {import('hast').Root} Root
 * @typedef {import('hast').Element} Element
 * @typedef {import('hast').Properties} Properties
 * @typedef {Root['children'][number]} Child
 * @typedef {Child|Root} Node
 * @typedef {import('property-information').Info} Info
 * @typedef {import('property-information').Schema} Schema
 *
 * @typedef {Root|Element} HResult
 * @typedef {string|number} HStyleValue
 * @typedef {Object.<string, HStyleValue>} HStyle
 * @typedef {string|number|boolean|null|undefined} HPrimitiveValue
 * @typedef {Array.<string|number>} HArrayValue
 * @typedef {HPrimitiveValue|HArrayValue} HPropertyValue
 * @typedef {{[property: string]: HPropertyValue|HStyle}} HProperties
 *
 * @typedef {string|number|null|undefined} HPrimitiveChild
 * @typedef {Array.<Node|HPrimitiveChild>} HArrayChild
 * @typedef {Node|HPrimitiveChild|HArrayChild} HChild
 */ var _propertyInformation = require("property-information");
var _hastUtilParseSelector = require("hast-util-parse-selector");
var _spaceSeparatedTokens = require("space-separated-tokens");
var _commaSeparatedTokens = require("comma-separated-tokens");
const buttonTypes = new Set([
    "menu",
    "submit",
    "reset",
    "button"
]);
const own = {}.hasOwnProperty;
function core(schema, defaultTagName, caseSensitive) {
    const adjust = caseSensitive && createAdjustMap(caseSensitive);
    const h = /**
       * Hyperscript compatible DSL for creating virtual hast trees.
       *
       * @param {string|null} [selector]
       * @param {HProperties|HChild} [properties]
       * @param {HChild[]} children
       * @returns {HResult}
       */ /**
     * @type {{
     *   (): Root
     *   (selector: null|undefined, ...children: HChild[]): Root
     *   (selector: string, properties?: HProperties, ...children: HChild[]): Element
     *   (selector: string, ...children: HChild[]): Element
     * }}
     */ function(selector, properties, ...children) {
        let index = -1;
        /** @type {HResult} */ let node;
        if (selector === undefined || selector === null) {
            node = {
                type: "root",
                children: []
            };
            // @ts-expect-error Properties are not supported for roots.
            children.unshift(properties);
        } else {
            node = (0, _hastUtilParseSelector.parseSelector)(selector, defaultTagName);
            // Normalize the name.
            node.tagName = node.tagName.toLowerCase();
            if (adjust && own.call(adjust, node.tagName)) node.tagName = adjust[node.tagName];
            // Handle props.
            if (isProperties(properties, node.tagName)) {
                /** @type {string} */ let key;
                for(key in properties)if (own.call(properties, key)) // @ts-expect-error `node.properties` is set.
                addProperty(schema, node.properties, key, properties[key]);
            } else children.unshift(properties);
        }
        // Handle children.
        while(++index < children.length)addChild(node.children, children[index]);
        if (node.type === "element" && node.tagName === "template") {
            node.content = {
                type: "root",
                children: node.children
            };
            node.children = [];
        }
        return node;
    };
    return h;
}
/**
 * @param {HProperties|HChild} value
 * @param {string} name
 * @returns {value is HProperties}
 */ function isProperties(value, name) {
    if (value === null || value === undefined || typeof value !== "object" || Array.isArray(value)) return false;
    if (name === "input" || !value.type || typeof value.type !== "string") return true;
    if ("children" in value && Array.isArray(value.children)) return false;
    if (name === "button") return buttonTypes.has(value.type.toLowerCase());
    return !("value" in value);
}
/**
 * @param {Schema} schema
 * @param {Properties} properties
 * @param {string} key
 * @param {HStyle|HPropertyValue} value
 * @returns {void}
 */ function addProperty(schema, properties, key, value) {
    const info = (0, _propertyInformation.find)(schema, key);
    let index = -1;
    /** @type {HPropertyValue} */ let result;
    // Ignore nullish and NaN values.
    if (value === undefined || value === null) return;
    if (typeof value === "number") {
        // Ignore NaN.
        if (Number.isNaN(value)) return;
        result = value;
    } else if (typeof value === "boolean") result = value;
    else if (typeof value === "string") {
        if (info.spaceSeparated) result = (0, _spaceSeparatedTokens.parse)(value);
        else if (info.commaSeparated) result = (0, _commaSeparatedTokens.parse)(value);
        else if (info.commaOrSpaceSeparated) result = (0, _spaceSeparatedTokens.parse)((0, _commaSeparatedTokens.parse)(value).join(" "));
        else result = parsePrimitive(info, info.property, value);
    } else if (Array.isArray(value)) result = value.concat();
    else result = info.property === "style" ? style(value) : String(value);
    if (Array.isArray(result)) {
        /** @type {Array.<string|number>} */ const finalResult = [];
        while(++index < result.length)// @ts-expect-error Assume no booleans in array.
        finalResult[index] = parsePrimitive(info, info.property, result[index]);
        result = finalResult;
    }
    // Class names (which can be added both on the `selector` and here).
    if (info.property === "className" && Array.isArray(properties.className)) // @ts-expect-error Assume no booleans in `className`.
    result = properties.className.concat(result);
    properties[info.property] = result;
}
/**
 * @param {Array.<Child>} nodes
 * @param {HChild} value
 * @returns {void}
 */ function addChild(nodes, value) {
    let index = -1;
    if (value === undefined || value === null) ;
    else if (typeof value === "string" || typeof value === "number") nodes.push({
        type: "text",
        value: String(value)
    });
    else if (Array.isArray(value)) while(++index < value.length)addChild(nodes, value[index]);
    else if (typeof value === "object" && "type" in value) {
        if (value.type === "root") addChild(nodes, value.children);
        else nodes.push(value);
    } else throw new Error("Expected node, nodes, or string, got `" + value + "`");
}
/**
 * Parse a single primitives.
 *
 * @param {Info} info
 * @param {string} name
 * @param {HPrimitiveValue} value
 * @returns {HPrimitiveValue}
 */ function parsePrimitive(info, name, value) {
    if (typeof value === "string") {
        if (info.number && value && !Number.isNaN(Number(value))) return Number(value);
        if ((info.boolean || info.overloadedBoolean) && (value === "" || (0, _propertyInformation.normalize)(value) === (0, _propertyInformation.normalize)(name))) return true;
    }
    return value;
}
/**
 * @param {HStyle} value
 * @returns {string}
 */ function style(value) {
    /** @type {Array.<string>} */ const result = [];
    /** @type {string} */ let key;
    for(key in value)if (own.call(value, key)) result.push([
        key,
        value[key]
    ].join(": "));
    return result.join("; ");
}
/**
 * @param {Array.<string>} values
 * @returns {Object.<string, string>}
 */ function createAdjustMap(values) {
    /** @type {Object.<string, string>} */ const result = {};
    let index = -1;
    while(++index < values.length)result[values[index].toLowerCase()] = values[index];
    return result;
}

},{"property-information":"gJnAE","hast-util-parse-selector":"38Qdj","space-separated-tokens":"12UjR","comma-separated-tokens":"aekes","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"38Qdj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "parseSelector", ()=>parseSelector);
/**
 * @typedef {import('hast').Properties} Properties
 * @typedef {import('hast').Element} Element
 */ var search = /[#.]/g;
const parseSelector = /**
     * @param {string} [selector]
     * @param {string} [defaultTagName='div']
     * @returns {Element}
     */ /**
   * @type {(
   *  <Selector extends string, DefaultTagName extends string = 'div'>(selector?: Selector, defaultTagName?: DefaultTagName) => Element & {tagName: import('./extract.js').ExtractTagName<Selector, DefaultTagName>}
   * )}
   */ function(selector, defaultTagName = "div") {
    var value = selector || "";
    /** @type {Properties} */ var props = {};
    var start = 0;
    /** @type {string} */ var subvalue;
    /** @type {string} */ var previous;
    /** @type {RegExpMatchArray} */ var match;
    while(start < value.length){
        search.lastIndex = start;
        match = search.exec(value);
        subvalue = value.slice(start, match ? match.index : value.length);
        if (subvalue) {
            if (!previous) defaultTagName = subvalue;
            else if (previous === "#") props.id = subvalue;
            else if (Array.isArray(props.className)) props.className.push(subvalue);
            else props.className = [
                subvalue
            ];
            start += subvalue.length;
        }
        if (match) {
            previous = match[0];
            start++;
        }
    }
    return {
        type: "element",
        tagName: defaultTagName,
        properties: props,
        children: []
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"12UjR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Parse space separated tokens to an array of strings.
 *
 * @param {string} value Space separated tokens
 * @returns {Array.<string>} Tokens
 */ parcelHelpers.export(exports, "parse", ()=>parse);
/**
 * Serialize an array of strings as space separated tokens.
 *
 * @param {Array.<string|number>} values Tokens
 * @returns {string} Space separated tokens
 */ parcelHelpers.export(exports, "stringify", ()=>stringify);
function parse(value) {
    const input = String(value || "").trim();
    return input ? input.split(/[ \t\n\r\f]+/g) : [];
}
function stringify(values) {
    return values.join(" ").trim();
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aekes":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @typedef {Object} StringifyOptions
 * @property {boolean} [padLeft=true] Whether to pad a space before a token (`boolean`, default: `true`).
 * @property {boolean} [padRight=false] Whether to pad a space after a token (`boolean`, default: `false`).
 */ /**
 * Parse comma separated tokens to an array.
 *
 * @param {string} value
 * @returns {Array.<string>}
 */ parcelHelpers.export(exports, "parse", ()=>parse);
/**
 * Serialize an array of strings to comma separated tokens.
 *
 * @param {Array.<string|number>} values
 * @param {StringifyOptions} [options]
 * @returns {string}
 */ parcelHelpers.export(exports, "stringify", ()=>stringify);
function parse(value) {
    /** @type {Array.<string>} */ var tokens = [];
    var input = String(value || "");
    var index = input.indexOf(",");
    var start = 0;
    /** @type {boolean} */ var end;
    /** @type {string} */ var token;
    while(!end){
        if (index === -1) {
            index = input.length;
            end = true;
        }
        token = input.slice(start, index).trim();
        if (token || !end) tokens.push(token);
        start = index + 1;
        index = input.indexOf(",", start);
    }
    return tokens;
}
function stringify(values, options) {
    var settings = options || {};
    // Ensure the last empty entry is seen.
    if (values[values.length - 1] === "") values = values.concat("");
    return values.join((settings.padRight ? " " : "") + "," + (settings.padLeft === false ? "" : " ")).trim();
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lI1PM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "s", ()=>s);
/**
 * @typedef {import('./core.js').HChild} Child Acceptable child value
 * @typedef {import('./core.js').HProperties} Properties Acceptable properties value.
 *
 * @typedef {import('./jsx-classic').Element} s.JSX.Element
 * @typedef {import('./jsx-classic').IntrinsicAttributes} s.JSX.IntrinsicAttributes
 * @typedef {import('./jsx-classic').IntrinsicElements} s.JSX.IntrinsicElements
 * @typedef {import('./jsx-classic').ElementChildrenAttribute} s.JSX.ElementChildrenAttribute
 */ var _propertyInformation = require("property-information");
var _coreJs = require("./core.js");
var _svgCaseSensitiveTagNamesJs = require("./svg-case-sensitive-tag-names.js");
const s = (0, _coreJs.core)((0, _propertyInformation.svg), "g", (0, _svgCaseSensitiveTagNamesJs.svgCaseSensitiveTagNames));

},{"property-information":"gJnAE","./core.js":"7ZMRa","./svg-case-sensitive-tag-names.js":"2JAx0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2JAx0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "svgCaseSensitiveTagNames", ()=>svgCaseSensitiveTagNames);
const svgCaseSensitiveTagNames = [
    "altGlyph",
    "altGlyphDef",
    "altGlyphItem",
    "animateColor",
    "animateMotion",
    "animateTransform",
    "clipPath",
    "feBlend",
    "feColorMatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feDistantLight",
    "feDropShadow",
    "feFlood",
    "feFuncA",
    "feFuncB",
    "feFuncG",
    "feFuncR",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMergeNode",
    "feMorphology",
    "feOffset",
    "fePointLight",
    "feSpecularLighting",
    "feSpotLight",
    "feTile",
    "feTurbulence",
    "foreignObject",
    "glyphRef",
    "linearGradient",
    "radialGradient",
    "solidColor",
    "textArea",
    "textPath"
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["8TtF2","gLLPy"], "gLLPy", "parcelRequire6330")

//# sourceMappingURL=index.4d6bcbeb.js.map
