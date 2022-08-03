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
var _glsf = require("glsf");
const editor = document.getElementById("tree");
const debug = document.getElementById("debug");
const output = document.getElementById("output");
const tree = (0, _glsf.doc)([
    (0, _glsf.heading)("Title", {
        level: 1
    }),
    (0, _glsf.heading)("Subtitle", {
        level: 2
    }),
    (0, _glsf.paragraph)("We*lcom*e"),
    (0, _glsf.heading)("Here are [columns](http://example.com)", {
        level: 2
    }),
    (0, _glsf.columnContainer)([
        (0, _glsf.column)([
            (0, _glsf.mediaContainer)([
                (0, _glsf.image)("https://api.lorem.space/image/drink?w=600&h=300"),
                (0, _glsf.image)("https://api.lorem.space/image/drink?w=600&h=600"),
                (0, _glsf.image)("https://api.lorem.space/image/drink?w=600&h=600"),
                (0, _glsf.image)("https://api.lorem.space/image/drink?w=600&h=600"), 
            ], {
                layout: "1-3"
            }), 
        ]),
        (0, _glsf.column)([
            (0, _glsf.paragraph)("*Lorem **ipsum*** dolor sit amet, consectetur adipiscing elit."),
            (0, _glsf.paragraph)("Quisque vulputate</p> dui eget lacus luctus, et vehicula dui sollicitudin."),
            (0, _glsf.heading)("Subtitle", {
                level: 2
            }),
            (0, _glsf.paragraph)("Duis et ultricies felis."), 
        ]), 
    ]),
    (0, _glsf.heading)('Example 1-2 <script>alert("lol")</script>', {
        level: 2
    }),
    (0, _glsf.mediaContainer)([
        (0, _glsf.image)("https://api.lorem.space/image/drink?w=600&h=300"),
        (0, _glsf.image)("https://api.lorem.space/image/drink?w=600&h=600"),
        (0, _glsf.image)("https://api.lorem.space/image/drink?w=600&h=600"), 
    ], {
        layout: "1-2"
    }),
    (0, _glsf.heading)("Example 1-3", {
        level: 2
    }),
    (0, _glsf.mediaContainer)([
        (0, _glsf.image)("https://api.lorem.space/image/drink?w=600&h=300"),
        (0, _glsf.image)("https://api.lorem.space/image/drink?w=600&h=600"),
        (0, _glsf.image)("https://api.lorem.space/image/drink?w=600&h=600"),
        (0, _glsf.image)("https://api.lorem.space/image/drink?w=600&h=600"), 
    ], {
        layout: "1-3"
    }),
    (0, _glsf.heading)("Example 2x2", {
        level: 2
    }),
    (0, _glsf.mediaContainer)([
        (0, _glsf.image)("https://api.lorem.space/image/drink?w=600&h=600"),
        (0, _glsf.image)("https://api.lorem.space/image/drink?w=600&h=600"),
        (0, _glsf.image)("https://api.lorem.space/image/drink?w=600&h=600"),
        (0, _glsf.image)("https://api.lorem.space/image/drink?w=600&h=600"), 
    ], {
        layout: "2x2"
    }),
    (0, _glsf.heading)("Example 3x3", {
        level: 2
    }),
    (0, _glsf.mediaContainer)([
        (0, _glsf.image)("https://api.lorem.space/image/drink?w=600&h=600"),
        (0, _glsf.image)("https://api.lorem.space/image/drink?w=600&h=600"),
        (0, _glsf.image)("https://api.lorem.space/image/drink?w=600&h=600"),
        (0, _glsf.image)("https://api.lorem.space/image/drink?w=600&h=600"),
        (0, _glsf.image)("https://api.lorem.space/image/drink?w=600&h=600"),
        (0, _glsf.image)("https://api.lorem.space/image/drink?w=600&h=600"),
        (0, _glsf.image)("https://api.lorem.space/image/drink?w=600&h=600"),
        (0, _glsf.image)("https://api.lorem.space/image/drink?w=600&h=600"),
        (0, _glsf.image)("https://api.lorem.space/image/drink?w=600&h=600"), 
    ], {
        layout: "3x3"
    }), 
]);
function renderHtml() {
    try {
        const inspect = (0, _glsf.inspectHast)(JSON.parse(editor.value));
        debug.innerText = inspect;
        const html = (0, _glsf.glsfToHtml)(JSON.parse(editor.value));
        output.innerHTML = html;
    } catch (err) {
        console.log(err);
    }
}
editor.innerHTML = JSON.stringify(tree, null, 2);
renderHtml();
editor.addEventListener("input", renderHtml);

},{"glsf":"8nXCR"}],"8nXCR":[function(require,module,exports) {
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

},{}],"2J047":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "glsfToHast", ()=>glsfToHast);
parcelHelpers.export(exports, "glsfToHtml", ()=>glsfToHtml);
parcelHelpers.export(exports, "inspectHast", ()=>inspectHast);
var _mdastUtilFromMarkdown = require("mdast-util-from-markdown");
var _hastscript = require("hastscript");
var _unistUtilInspect = require("unist-util-inspect");
var _unistUtilMap = require("unist-util-map");
var _unistUtilRemovePosition = require("unist-util-remove-position");
var _hastUtilSanitize = require("hast-util-sanitize");
var _mdastUtilToHast = require("mdast-util-to-hast");
var _hastUtilToHtml = require("hast-util-to-html");
var _deepmerge = require("deepmerge");
var _deepmergeDefault = parcelHelpers.interopDefault(_deepmerge);
const phrasingHast = (0, _deepmergeDefault.default)((0, _hastUtilSanitize.defaultSchema), {
    tagNames: [
        "em",
        "strong",
        "a",
        "strike", 
    ]
});
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
    },
    text: (node)=>{
        const mdast = (0, _mdastUtilFromMarkdown.fromMarkdown)(node.value);
        const hast = (0, _mdastUtilToHast.toHast)(mdast);
        // get the only child of "root", a "p"
        const content = hast.children[0];
        // make it a "span" instead
        return (0, _hastUtilSanitize.sanitize)((0, _hastscript.h)("span", content.children), phrasingHast);
    }
};
const glsfToHast = (tree)=>(0, _unistUtilRemovePosition.removePosition)((0, _unistUtilMap.map)(tree, (node)=>{
        if (!nodeRenderer[node.type]) return node;
        return nodeRenderer[node.type](node);
    }));
const glsfToHtml = (tree)=>{
    const hast = glsfToHast(tree);
    const html = (0, _hastUtilToHtml.toHtml)(hast);
    return html;
};
const inspectHast = (tree)=>(0, _unistUtilInspect.inspectNoColor)(glsfToHast(tree));

},{"mdast-util-from-markdown":"a5krB","hastscript":"80quX","unist-util-inspect":"1rZh1","unist-util-map":"1MRFO","unist-util-remove-position":"8hCw7","hast-util-sanitize":"gy0ZP","mdast-util-to-hast":"gDqgr","hast-util-to-html":"leF5i","deepmerge":"ikqQI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a5krB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @typedef {import('./lib/index.js').Value} Value
 * @typedef {import('./lib/index.js').Encoding} Encoding
 * @typedef {import('./lib/index.js').Options} Options
 * @typedef {import('./lib/index.js').Extension} Extension
 * @typedef {import('./lib/index.js').Handle} Handle
 * @typedef {import('./lib/index.js').Transform} Transform
 * @typedef {import('./lib/index.js').Token} Token
 * @typedef {import('./lib/index.js').CompileContext} CompileContext
 * @typedef {import('./lib/index.js').OnEnterError} OnEnterError
 * @typedef {import('./lib/index.js').OnExitError} OnExitError
 *
 * @typedef {import('./lib/index.js').OnEnterError} OnError
 *   To do: deprecate next major.
 */ parcelHelpers.export(exports, "fromMarkdown", ()=>(0, _indexJs.fromMarkdown));
var _indexJs = require("./lib/index.js");

},{"./lib/index.js":"eZOO0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eZOO0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fromMarkdown", ()=>fromMarkdown);
/**
 * @typedef {import('micromark-util-types').Encoding} Encoding
 * @typedef {import('micromark-util-types').Event} Event
 * @typedef {import('micromark-util-types').ParseOptions} ParseOptions
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Value} Value
 * @typedef {import('unist').Parent} UnistParent
 * @typedef {import('unist').Point} Point
 * @typedef {import('mdast').PhrasingContent} PhrasingContent
 * @typedef {import('mdast').Content} Content
 * @typedef {Root|Content} Node
 * @typedef {Extract<Node, UnistParent>} Parent
 * @typedef {import('mdast').Break} Break
 * @typedef {import('mdast').Blockquote} Blockquote
 * @typedef {import('mdast').Code} Code
 * @typedef {import('mdast').Definition} Definition
 * @typedef {import('mdast').Emphasis} Emphasis
 * @typedef {import('mdast').Heading} Heading
 * @typedef {import('mdast').HTML} HTML
 * @typedef {import('mdast').Image} Image
 * @typedef {import('mdast').ImageReference} ImageReference
 * @typedef {import('mdast').InlineCode} InlineCode
 * @typedef {import('mdast').Link} Link
 * @typedef {import('mdast').LinkReference} LinkReference
 * @typedef {import('mdast').List} List
 * @typedef {import('mdast').ListItem} ListItem
 * @typedef {import('mdast').Paragraph} Paragraph
 * @typedef {import('mdast').Root} Root
 * @typedef {import('mdast').Strong} Strong
 * @typedef {import('mdast').Text} Text
 * @typedef {import('mdast').ThematicBreak} ThematicBreak
 *
 * @typedef {UnistParent & {type: 'fragment', children: Array<PhrasingContent>}} Fragment
 */ /**
 * @typedef _CompileDataFields
 * @property {boolean|undefined} expectingFirstListItemValue
 * @property {boolean|undefined} flowCodeInside
 * @property {boolean|undefined} setextHeadingSlurpLineEnding
 * @property {boolean|undefined} atHardBreak
 * @property {'collapsed'|'full'} referenceType
 * @property {boolean|undefined} inReference
 * @property {'characterReferenceMarkerHexadecimal'|'characterReferenceMarkerNumeric'} characterReferenceType
 *
 * @typedef {Record<string, unknown> & Partial<_CompileDataFields>} CompileData
 *
 * @typedef {(tree: Root) => Root|void} Transform
 * @typedef {(this: CompileContext, token: Token) => void} Handle
 * @typedef {Record<string, Handle>} Handles
 *   Token types mapping to handles
 * @typedef {Record<string, Record<string, unknown>|Array<unknown>> & {canContainEols: Array<string>, transforms: Array<Transform>, enter: Handles, exit: Handles}} NormalizedExtension
 * @typedef {Partial<NormalizedExtension>} Extension
 *   An mdast extension changes how markdown tokens are turned into mdast.
 *
 * @typedef {(this: Omit<CompileContext, 'sliceSerialize'>, left: Token|undefined, right: Token) => void} OnEnterError
 * @typedef {(this: Omit<CompileContext, 'sliceSerialize'>, left: Token, right: Token) => void} OnExitError
 *
 * @typedef CompileContext
 *   mdast compiler context
 * @property {Array<Node | Fragment>} stack
 * @property {Array<[Token, OnEnterError|undefined]>} tokenStack
 * @property {(key: string, value?: unknown) => void} setData
 *   Set data into the key-value store.
 * @property {<K extends string>(key: K) => CompileData[K]} getData
 *   Get data from the key-value store.
 * @property {(this: CompileContext) => void} buffer
 *   Capture some of the output data.
 * @property {(this: CompileContext) => string} resume
 *   Stop capturing and access the output data.
 * @property {<N extends Node>(this: CompileContext, node: N, token: Token, onError?: OnEnterError) => N} enter
 *   Enter a token.
 * @property {(this: CompileContext, token: Token, onError?: OnExitError) => Node} exit
 *   Exit a token.
 * @property {TokenizeContext['sliceSerialize']} sliceSerialize
 *   Get the string value of a token.
 * @property {NormalizedExtension} config
 *   Configuration.
 *
 * @typedef {{mdastExtensions?: Array<Extension|Array<Extension>>}} FromMarkdownOptions
 * @typedef {ParseOptions & FromMarkdownOptions} Options
 */ var _mdastUtilToString = require("mdast-util-to-string");
var _parseJs = require("micromark/lib/parse.js");
var _preprocessJs = require("micromark/lib/preprocess.js");
var _postprocessJs = require("micromark/lib/postprocess.js");
var _micromarkUtilDecodeNumericCharacterReference = require("micromark-util-decode-numeric-character-reference");
var _micromarkUtilDecodeString = require("micromark-util-decode-string");
var _micromarkUtilNormalizeIdentifier = require("micromark-util-normalize-identifier");
var _decodeNamedCharacterReference = require("decode-named-character-reference");
var _unistUtilStringifyPosition = require("unist-util-stringify-position");
const own = {}.hasOwnProperty;
const fromMarkdown = /**
   * @type {(
   *   ((value: Value, encoding: Encoding, options?: Options) => Root) &
   *   ((value: Value, options?: Options) => Root)
   * )}
   */ /**
   * @param {Value} value
   * @param {Encoding} [encoding]
   * @param {Options} [options]
   * @returns {Root}
   */ function(value, encoding, options) {
    if (typeof encoding !== "string") {
        options = encoding;
        encoding = undefined;
    }
    return compiler(options)((0, _postprocessJs.postprocess)((0, _parseJs.parse)(options).document().write((0, _preprocessJs.preprocess)()(value, encoding, true))));
};
/**
 * Note this compiler only understand complete buffering, not streaming.
 *
 * @param {Options} [options]
 */ function compiler(options = {}) {
    /** @type {NormalizedExtension} */ // @ts-expect-error: our base has all required fields, so the result will too.
    const config = configure({
        transforms: [],
        canContainEols: [
            "emphasis",
            "fragment",
            "heading",
            "paragraph",
            "strong"
        ],
        enter: {
            autolink: opener(link),
            autolinkProtocol: onenterdata,
            autolinkEmail: onenterdata,
            atxHeading: opener(heading),
            blockQuote: opener(blockQuote),
            characterEscape: onenterdata,
            characterReference: onenterdata,
            codeFenced: opener(codeFlow),
            codeFencedFenceInfo: buffer,
            codeFencedFenceMeta: buffer,
            codeIndented: opener(codeFlow, buffer),
            codeText: opener(codeText, buffer),
            codeTextData: onenterdata,
            data: onenterdata,
            codeFlowValue: onenterdata,
            definition: opener(definition),
            definitionDestinationString: buffer,
            definitionLabelString: buffer,
            definitionTitleString: buffer,
            emphasis: opener(emphasis),
            hardBreakEscape: opener(hardBreak),
            hardBreakTrailing: opener(hardBreak),
            htmlFlow: opener(html, buffer),
            htmlFlowData: onenterdata,
            htmlText: opener(html, buffer),
            htmlTextData: onenterdata,
            image: opener(image),
            label: buffer,
            link: opener(link),
            listItem: opener(listItem1),
            listItemValue: onenterlistitemvalue,
            listOrdered: opener(list, onenterlistordered),
            listUnordered: opener(list),
            paragraph: opener(paragraph),
            reference: onenterreference,
            referenceString: buffer,
            resourceDestinationString: buffer,
            resourceTitleString: buffer,
            setextHeading: opener(heading),
            strong: opener(strong),
            thematicBreak: opener(thematicBreak)
        },
        exit: {
            atxHeading: closer(),
            atxHeadingSequence: onexitatxheadingsequence,
            autolink: closer(),
            autolinkEmail: onexitautolinkemail,
            autolinkProtocol: onexitautolinkprotocol,
            blockQuote: closer(),
            characterEscapeValue: onexitdata,
            characterReferenceMarkerHexadecimal: onexitcharacterreferencemarker,
            characterReferenceMarkerNumeric: onexitcharacterreferencemarker,
            characterReferenceValue: onexitcharacterreferencevalue,
            codeFenced: closer(onexitcodefenced),
            codeFencedFence: onexitcodefencedfence,
            codeFencedFenceInfo: onexitcodefencedfenceinfo,
            codeFencedFenceMeta: onexitcodefencedfencemeta,
            codeFlowValue: onexitdata,
            codeIndented: closer(onexitcodeindented),
            codeText: closer(onexitcodetext),
            codeTextData: onexitdata,
            data: onexitdata,
            definition: closer(),
            definitionDestinationString: onexitdefinitiondestinationstring,
            definitionLabelString: onexitdefinitionlabelstring,
            definitionTitleString: onexitdefinitiontitlestring,
            emphasis: closer(),
            hardBreakEscape: closer(onexithardbreak),
            hardBreakTrailing: closer(onexithardbreak),
            htmlFlow: closer(onexithtmlflow),
            htmlFlowData: onexitdata,
            htmlText: closer(onexithtmltext),
            htmlTextData: onexitdata,
            image: closer(onexitimage),
            label: onexitlabel,
            labelText: onexitlabeltext,
            lineEnding: onexitlineending,
            link: closer(onexitlink),
            listItem: closer(),
            listOrdered: closer(),
            listUnordered: closer(),
            paragraph: closer(),
            referenceString: onexitreferencestring,
            resourceDestinationString: onexitresourcedestinationstring,
            resourceTitleString: onexitresourcetitlestring,
            resource: onexitresource,
            setextHeading: closer(onexitsetextheading),
            setextHeadingLineSequence: onexitsetextheadinglinesequence,
            setextHeadingText: onexitsetextheadingtext,
            strong: closer(),
            thematicBreak: closer()
        }
    }, options.mdastExtensions || []);
    /** @type {CompileData} */ const data1 = {};
    return compile;
    /**
   * @param {Array<Event>} events
   * @returns {Root}
   */ function compile(events) {
        /** @type {Root} */ let tree = {
            type: "root",
            children: []
        };
        /** @type {CompileContext['stack']} */ const stack = [
            tree
        ];
        /** @type {CompileContext['tokenStack']} */ const tokenStack = [];
        /** @type {Array<number>} */ const listStack = [];
        /** @type {Omit<CompileContext, 'sliceSerialize'>} */ const context = {
            stack,
            tokenStack,
            config,
            enter,
            exit,
            buffer,
            resume,
            setData,
            getData
        };
        let index = -1;
        while(++index < events.length){
            // We preprocess lists to add `listItem` tokens, and to infer whether
            // items the list itself are spread out.
            if (events[index][1].type === "listOrdered" || events[index][1].type === "listUnordered") {
                if (events[index][0] === "enter") {
                    listStack.push(index);
                } else {
                    const tail = listStack.pop();
                    index = prepareList(events, tail, index);
                }
            }
        }
        index = -1;
        while(++index < events.length){
            const handler = config[events[index][0]];
            if (own.call(handler, events[index][1].type)) {
                handler[events[index][1].type].call(Object.assign({
                    sliceSerialize: events[index][2].sliceSerialize
                }, context), events[index][1]);
            }
        }
        if (tokenStack.length > 0) {
            const tail = tokenStack[tokenStack.length - 1];
            const handler = tail[1] || defaultOnError;
            handler.call(context, undefined, tail[0]);
        } // Figure out `root` position.
        tree.position = {
            start: point(events.length > 0 ? events[0][1].start : {
                line: 1,
                column: 1,
                offset: 0
            }),
            end: point(events.length > 0 ? events[events.length - 2][1].end : {
                line: 1,
                column: 1,
                offset: 0
            })
        };
        index = -1;
        while(++index < config.transforms.length){
            tree = config.transforms[index](tree) || tree;
        }
        return tree;
    }
    /**
   * @param {Array<Event>} events
   * @param {number} start
   * @param {number} length
   * @returns {number}
   */ function prepareList(events, start, length) {
        let index = start - 1;
        let containerBalance = -1;
        let listSpread = false;
        /** @type {Token|undefined} */ let listItem;
        /** @type {number|undefined} */ let lineIndex;
        /** @type {number|undefined} */ let firstBlankLineIndex;
        /** @type {boolean|undefined} */ let atMarker;
        while(++index <= length){
            const event = events[index];
            if (event[1].type === "listUnordered" || event[1].type === "listOrdered" || event[1].type === "blockQuote") {
                if (event[0] === "enter") {
                    containerBalance++;
                } else {
                    containerBalance--;
                }
                atMarker = undefined;
            } else if (event[1].type === "lineEndingBlank") {
                if (event[0] === "enter") {
                    if (listItem && !atMarker && !containerBalance && !firstBlankLineIndex) {
                        firstBlankLineIndex = index;
                    }
                    atMarker = undefined;
                }
            } else if (event[1].type === "linePrefix" || event[1].type === "listItemValue" || event[1].type === "listItemMarker" || event[1].type === "listItemPrefix" || event[1].type === "listItemPrefixWhitespace") {
            // Empty.
            } else {
                atMarker = undefined;
            }
            if (!containerBalance && event[0] === "enter" && event[1].type === "listItemPrefix" || containerBalance === -1 && event[0] === "exit" && (event[1].type === "listUnordered" || event[1].type === "listOrdered")) {
                if (listItem) {
                    let tailIndex = index;
                    lineIndex = undefined;
                    while(tailIndex--){
                        const tailEvent = events[tailIndex];
                        if (tailEvent[1].type === "lineEnding" || tailEvent[1].type === "lineEndingBlank") {
                            if (tailEvent[0] === "exit") continue;
                            if (lineIndex) {
                                events[lineIndex][1].type = "lineEndingBlank";
                                listSpread = true;
                            }
                            tailEvent[1].type = "lineEnding";
                            lineIndex = tailIndex;
                        } else if (tailEvent[1].type === "linePrefix" || tailEvent[1].type === "blockQuotePrefix" || tailEvent[1].type === "blockQuotePrefixWhitespace" || tailEvent[1].type === "blockQuoteMarker" || tailEvent[1].type === "listItemIndent") {
                        // Empty
                        } else {
                            break;
                        }
                    }
                    if (firstBlankLineIndex && (!lineIndex || firstBlankLineIndex < lineIndex)) {
                        // @ts-expect-error Patched.
                        listItem._spread = true;
                    } // Fix position.
                    listItem.end = Object.assign({}, lineIndex ? events[lineIndex][1].start : event[1].end);
                    events.splice(lineIndex || index, 0, [
                        "exit",
                        listItem,
                        event[2]
                    ]);
                    index++;
                    length++;
                } // Create a new list item.
                if (event[1].type === "listItemPrefix") {
                    listItem = {
                        type: "listItem",
                        // @ts-expect-error Patched
                        _spread: false,
                        start: Object.assign({}, event[1].start)
                    } // @ts-expect-error: `listItem` is most definitely defined, TS...
                    ;
                    events.splice(index, 0, [
                        "enter",
                        listItem,
                        event[2]
                    ]);
                    index++;
                    length++;
                    firstBlankLineIndex = undefined;
                    atMarker = true;
                }
            }
        } // @ts-expect-error Patched.
        events[start][1]._spread = listSpread;
        return length;
    }
    /**
   * @type {CompileContext['setData']}
   * @param [value]
   */ function setData(key, value) {
        data1[key] = value;
    }
    /**
   * @type {CompileContext['getData']}
   * @template {string} K
   * @param {K} key
   * @returns {CompileData[K]}
   */ function getData(key) {
        return data1[key];
    }
    /**
   * @param {Point} d
   * @returns {Point}
   */ function point(d) {
        return {
            line: d.line,
            column: d.column,
            offset: d.offset
        };
    }
    /**
   * @param {(token: Token) => Node} create
   * @param {Handle} [and]
   * @returns {Handle}
   */ function opener(create, and) {
        return open;
        /**
     * @this {CompileContext}
     * @param {Token} token
     * @returns {void}
     */ function open(token) {
            enter.call(this, create(token), token);
            if (and) and.call(this, token);
        }
    }
    /** @type {CompileContext['buffer']} */ function buffer() {
        this.stack.push({
            type: "fragment",
            children: []
        });
    }
    /**
   * @type {CompileContext['enter']}
   * @template {Node} N
   * @this {CompileContext}
   * @param {N} node
   * @param {Token} token
   * @param {OnEnterError} [errorHandler]
   * @returns {N}
   */ function enter(node, token, errorHandler) {
        const parent = this.stack[this.stack.length - 1];
        // @ts-expect-error: Assume `Node` can exist as a child of `parent`.
        parent.children.push(node);
        this.stack.push(node);
        this.tokenStack.push([
            token,
            errorHandler
        ]) // @ts-expect-error: `end` will be patched later.
        ;
        node.position = {
            start: point(token.start)
        };
        return node;
    }
    /**
   * @param {Handle} [and]
   * @returns {Handle}
   */ function closer(and) {
        return close;
        /**
     * @this {CompileContext}
     * @param {Token} token
     * @returns {void}
     */ function close(token) {
            if (and) and.call(this, token);
            exit.call(this, token);
        }
    }
    /**
   * @type {CompileContext['exit']}
   * @this {CompileContext}
   * @param {Token} token
   * @param {OnExitError} [onExitError]
   * @returns {Node}
   */ function exit(token, onExitError) {
        const node = this.stack.pop();
        const open = this.tokenStack.pop();
        if (!open) {
            throw new Error("Cannot close `" + token.type + "` (" + (0, _unistUtilStringifyPosition.stringifyPosition)({
                start: token.start,
                end: token.end
            }) + "): it\u2019s not open");
        } else if (open[0].type !== token.type) {
            if (onExitError) {
                onExitError.call(this, token, open[0]);
            } else {
                const handler = open[1] || defaultOnError;
                handler.call(this, token, open[0]);
            }
        }
        node.position.end = point(token.end);
        return node;
    }
    /**
   * @this {CompileContext}
   * @returns {string}
   */ function resume() {
        return (0, _mdastUtilToString.toString)(this.stack.pop());
    } //
    // Handlers.
    //
    /** @type {Handle} */ function onenterlistordered() {
        setData("expectingFirstListItemValue", true);
    }
    /** @type {Handle} */ function onenterlistitemvalue(token) {
        if (getData("expectingFirstListItemValue")) {
            const ancestor = /** @type {List} */ this.stack[this.stack.length - 2];
            ancestor.start = Number.parseInt(this.sliceSerialize(token), 10);
            setData("expectingFirstListItemValue");
        }
    }
    /** @type {Handle} */ function onexitcodefencedfenceinfo() {
        const data = this.resume();
        const node = /** @type {Code} */ this.stack[this.stack.length - 1];
        node.lang = data;
    }
    /** @type {Handle} */ function onexitcodefencedfencemeta() {
        const data = this.resume();
        const node = /** @type {Code} */ this.stack[this.stack.length - 1];
        node.meta = data;
    }
    /** @type {Handle} */ function onexitcodefencedfence() {
        // Exit if this is the closing fence.
        if (getData("flowCodeInside")) return;
        this.buffer();
        setData("flowCodeInside", true);
    }
    /** @type {Handle} */ function onexitcodefenced() {
        const data = this.resume();
        const node = /** @type {Code} */ this.stack[this.stack.length - 1];
        node.value = data.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, "");
        setData("flowCodeInside");
    }
    /** @type {Handle} */ function onexitcodeindented() {
        const data = this.resume();
        const node = /** @type {Code} */ this.stack[this.stack.length - 1];
        node.value = data.replace(/(\r?\n|\r)$/g, "");
    }
    /** @type {Handle} */ function onexitdefinitionlabelstring(token) {
        // Discard label, use the source content instead.
        const label = this.resume();
        const node = /** @type {Definition} */ this.stack[this.stack.length - 1];
        node.label = label;
        node.identifier = (0, _micromarkUtilNormalizeIdentifier.normalizeIdentifier)(this.sliceSerialize(token)).toLowerCase();
    }
    /** @type {Handle} */ function onexitdefinitiontitlestring() {
        const data = this.resume();
        const node = /** @type {Definition} */ this.stack[this.stack.length - 1];
        node.title = data;
    }
    /** @type {Handle} */ function onexitdefinitiondestinationstring() {
        const data = this.resume();
        const node = /** @type {Definition} */ this.stack[this.stack.length - 1];
        node.url = data;
    }
    /** @type {Handle} */ function onexitatxheadingsequence(token) {
        const node = /** @type {Heading} */ this.stack[this.stack.length - 1];
        if (!node.depth) {
            const depth = this.sliceSerialize(token).length;
            node.depth = depth;
        }
    }
    /** @type {Handle} */ function onexitsetextheadingtext() {
        setData("setextHeadingSlurpLineEnding", true);
    }
    /** @type {Handle} */ function onexitsetextheadinglinesequence(token) {
        const node = /** @type {Heading} */ this.stack[this.stack.length - 1];
        node.depth = this.sliceSerialize(token).charCodeAt(0) === 61 ? 1 : 2;
    }
    /** @type {Handle} */ function onexitsetextheading() {
        setData("setextHeadingSlurpLineEnding");
    }
    /** @type {Handle} */ function onenterdata(token) {
        const parent = /** @type {Parent} */ this.stack[this.stack.length - 1];
        /** @type {Node} */ let tail = parent.children[parent.children.length - 1];
        if (!tail || tail.type !== "text") {
            // Add a new text node.
            tail = text() // @ts-expect-error: we’ll add `end` later.
            ;
            tail.position = {
                start: point(token.start)
            } // @ts-expect-error: Assume `parent` accepts `text`.
            ;
            parent.children.push(tail);
        }
        this.stack.push(tail);
    }
    /** @type {Handle} */ function onexitdata(token) {
        const tail = this.stack.pop();
        tail.value += this.sliceSerialize(token);
        tail.position.end = point(token.end);
    }
    /** @type {Handle} */ function onexitlineending(token) {
        const context = this.stack[this.stack.length - 1];
        // If we’re at a hard break, include the line ending in there.
        if (getData("atHardBreak")) {
            const tail = context.children[context.children.length - 1];
            tail.position.end = point(token.end);
            setData("atHardBreak");
            return;
        }
        if (!getData("setextHeadingSlurpLineEnding") && config.canContainEols.includes(context.type)) {
            onenterdata.call(this, token);
            onexitdata.call(this, token);
        }
    }
    /** @type {Handle} */ function onexithardbreak() {
        setData("atHardBreak", true);
    }
    /** @type {Handle} */ function onexithtmlflow() {
        const data = this.resume();
        const node = /** @type {HTML} */ this.stack[this.stack.length - 1];
        node.value = data;
    }
    /** @type {Handle} */ function onexithtmltext() {
        const data = this.resume();
        const node = /** @type {HTML} */ this.stack[this.stack.length - 1];
        node.value = data;
    }
    /** @type {Handle} */ function onexitcodetext() {
        const data = this.resume();
        const node = /** @type {InlineCode} */ this.stack[this.stack.length - 1];
        node.value = data;
    }
    /** @type {Handle} */ function onexitlink() {
        const context = /** @type {Link & {identifier: string, label: string}} */ this.stack[this.stack.length - 1] // To do: clean.
        ;
        if (getData("inReference")) {
            context.type += "Reference" // @ts-expect-error: mutate.
            ;
            context.referenceType = getData("referenceType") || "shortcut" // @ts-expect-error: mutate.
            ;
            delete context.url;
            delete context.title;
        } else {
            // @ts-expect-error: mutate.
            delete context.identifier // @ts-expect-error: mutate.
            ;
            delete context.label;
        }
        setData("referenceType");
    }
    /** @type {Handle} */ function onexitimage() {
        const context = /** @type {Image & {identifier: string, label: string}} */ this.stack[this.stack.length - 1] // To do: clean.
        ;
        if (getData("inReference")) {
            context.type += "Reference" // @ts-expect-error: mutate.
            ;
            context.referenceType = getData("referenceType") || "shortcut" // @ts-expect-error: mutate.
            ;
            delete context.url;
            delete context.title;
        } else {
            // @ts-expect-error: mutate.
            delete context.identifier // @ts-expect-error: mutate.
            ;
            delete context.label;
        }
        setData("referenceType");
    }
    /** @type {Handle} */ function onexitlabeltext(token) {
        const ancestor = /** @type {(Link|Image) & {identifier: string, label: string}} */ this.stack[this.stack.length - 2];
        const string = this.sliceSerialize(token);
        ancestor.label = (0, _micromarkUtilDecodeString.decodeString)(string);
        ancestor.identifier = (0, _micromarkUtilNormalizeIdentifier.normalizeIdentifier)(string).toLowerCase();
    }
    /** @type {Handle} */ function onexitlabel() {
        const fragment = /** @type {Fragment} */ this.stack[this.stack.length - 1];
        const value = this.resume();
        const node = /** @type {(Link|Image) & {identifier: string, label: string}} */ this.stack[this.stack.length - 1] // Assume a reference.
        ;
        setData("inReference", true);
        if (node.type === "link") {
            // @ts-expect-error: Assume static phrasing content.
            node.children = fragment.children;
        } else {
            node.alt = value;
        }
    }
    /** @type {Handle} */ function onexitresourcedestinationstring() {
        const data = this.resume();
        const node = /** @type {Link|Image} */ this.stack[this.stack.length - 1];
        node.url = data;
    }
    /** @type {Handle} */ function onexitresourcetitlestring() {
        const data = this.resume();
        const node = /** @type {Link|Image} */ this.stack[this.stack.length - 1];
        node.title = data;
    }
    /** @type {Handle} */ function onexitresource() {
        setData("inReference");
    }
    /** @type {Handle} */ function onenterreference() {
        setData("referenceType", "collapsed");
    }
    /** @type {Handle} */ function onexitreferencestring(token) {
        const label = this.resume();
        const node = /** @type {LinkReference|ImageReference} */ this.stack[this.stack.length - 1];
        node.label = label;
        node.identifier = (0, _micromarkUtilNormalizeIdentifier.normalizeIdentifier)(this.sliceSerialize(token)).toLowerCase();
        setData("referenceType", "full");
    }
    /** @type {Handle} */ function onexitcharacterreferencemarker(token) {
        setData("characterReferenceType", token.type);
    }
    /** @type {Handle} */ function onexitcharacterreferencevalue(token) {
        const data = this.sliceSerialize(token);
        const type = getData("characterReferenceType");
        /** @type {string} */ let value;
        if (type) {
            value = (0, _micromarkUtilDecodeNumericCharacterReference.decodeNumericCharacterReference)(data, type === "characterReferenceMarkerNumeric" ? 10 : 16);
            setData("characterReferenceType");
        } else {
            // @ts-expect-error `decodeNamedCharacterReference` can return false for
            // invalid named character references, but everything we’ve tokenized is
            // valid.
            value = (0, _decodeNamedCharacterReference.decodeNamedCharacterReference)(data);
        }
        const tail = this.stack.pop();
        tail.value += value;
        tail.position.end = point(token.end);
    }
    /** @type {Handle} */ function onexitautolinkprotocol(token) {
        onexitdata.call(this, token);
        const node = /** @type {Link} */ this.stack[this.stack.length - 1];
        node.url = this.sliceSerialize(token);
    }
    /** @type {Handle} */ function onexitautolinkemail(token) {
        onexitdata.call(this, token);
        const node = /** @type {Link} */ this.stack[this.stack.length - 1];
        node.url = "mailto:" + this.sliceSerialize(token);
    } //
    // Creaters.
    //
    /** @returns {Blockquote} */ function blockQuote() {
        return {
            type: "blockquote",
            children: []
        };
    }
    /** @returns {Code} */ function codeFlow() {
        return {
            type: "code",
            lang: null,
            meta: null,
            value: ""
        };
    }
    /** @returns {InlineCode} */ function codeText() {
        return {
            type: "inlineCode",
            value: ""
        };
    }
    /** @returns {Definition} */ function definition() {
        return {
            type: "definition",
            identifier: "",
            label: null,
            title: null,
            url: ""
        };
    }
    /** @returns {Emphasis} */ function emphasis() {
        return {
            type: "emphasis",
            children: []
        };
    }
    /** @returns {Heading} */ function heading() {
        // @ts-expect-error `depth` will be set later.
        return {
            type: "heading",
            depth: undefined,
            children: []
        };
    }
    /** @returns {Break} */ function hardBreak() {
        return {
            type: "break"
        };
    }
    /** @returns {HTML} */ function html() {
        return {
            type: "html",
            value: ""
        };
    }
    /** @returns {Image} */ function image() {
        return {
            type: "image",
            title: null,
            url: "",
            alt: null
        };
    }
    /** @returns {Link} */ function link() {
        return {
            type: "link",
            title: null,
            url: "",
            children: []
        };
    }
    /**
   * @param {Token} token
   * @returns {List}
   */ function list(token) {
        return {
            type: "list",
            ordered: token.type === "listOrdered",
            start: null,
            // @ts-expect-error Patched.
            spread: token._spread,
            children: []
        };
    }
    /**
   * @param {Token} token
   * @returns {ListItem}
   */ function listItem1(token) {
        return {
            type: "listItem",
            // @ts-expect-error Patched.
            spread: token._spread,
            checked: null,
            children: []
        };
    }
    /** @returns {Paragraph} */ function paragraph() {
        return {
            type: "paragraph",
            children: []
        };
    }
    /** @returns {Strong} */ function strong() {
        return {
            type: "strong",
            children: []
        };
    }
    /** @returns {Text} */ function text() {
        return {
            type: "text",
            value: ""
        };
    }
    /** @returns {ThematicBreak} */ function thematicBreak() {
        return {
            type: "thematicBreak"
        };
    }
}
/**
 * @param {Extension} combined
 * @param {Array<Extension|Array<Extension>>} extensions
 * @returns {Extension}
 */ function configure(combined, extensions) {
    let index = -1;
    while(++index < extensions.length){
        const value = extensions[index];
        if (Array.isArray(value)) configure(combined, value);
        else extension(combined, value);
    }
    return combined;
}
/**
 * @param {Extension} combined
 * @param {Extension} extension
 * @returns {void}
 */ function extension(combined, extension1) {
    /** @type {string} */ let key;
    for(key in extension1)if (own.call(extension1, key)) {
        const list = key === "canContainEols" || key === "transforms";
        const maybe = own.call(combined, key) ? combined[key] : undefined;
        /* c8 ignore next */ const left = maybe || (combined[key] = list ? [] : {});
        const right = extension1[key];
        if (right) {
            if (list) // @ts-expect-error: `left` is an array.
            combined[key] = [
                ...left,
                ...right
            ];
            else Object.assign(left, right);
        }
    }
}
/** @type {OnEnterError} */ function defaultOnError(left, right) {
    if (left) throw new Error("Cannot close `" + left.type + "` (" + (0, _unistUtilStringifyPosition.stringifyPosition)({
        start: left.start,
        end: left.end
    }) + "): a different token (`" + right.type + "`, " + (0, _unistUtilStringifyPosition.stringifyPosition)({
        start: right.start,
        end: right.end
    }) + ") is open");
    else throw new Error("Cannot close document, a token (`" + right.type + "`, " + (0, _unistUtilStringifyPosition.stringifyPosition)({
        start: right.start,
        end: right.end
    }) + ") is still open");
}

},{"mdast-util-to-string":"9UKj6","micromark/lib/parse.js":"eLARv","micromark/lib/preprocess.js":"88Fk9","micromark/lib/postprocess.js":"aUxbA","micromark-util-decode-numeric-character-reference":"bDldY","micromark-util-decode-string":"7rilP","micromark-util-normalize-identifier":"7BTmO","decode-named-character-reference":"kCJTF","unist-util-stringify-position":"lxG0v","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9UKj6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @typedef Options
 * @property {boolean} [includeImageAlt=true]
 */ /**
 * Get the text content of a node.
 * Prefer the node’s plain-text fields, otherwise serialize its children,
 * and if the given value is an array, serialize the nodes in it.
 *
 * @param {unknown} node
 * @param {Options} [options]
 * @returns {string}
 */ parcelHelpers.export(exports, "toString", ()=>toString);
function toString(node, options) {
    var { includeImageAlt =true  } = options || {};
    return one(node, includeImageAlt);
}
/**
 * @param {unknown} node
 * @param {boolean} includeImageAlt
 * @returns {string}
 */ function one(node, includeImageAlt) {
    return node && typeof node === "object" && (node.value || (includeImageAlt ? node.alt : "") || "children" in node && all(node.children, includeImageAlt) || Array.isArray(node) && all(node, includeImageAlt)) || "";
}
/**
 * @param {Array.<unknown>} values
 * @param {boolean} includeImageAlt
 * @returns {string}
 */ function all(values, includeImageAlt) {
    /** @type {Array.<string>} */ var result = [];
    var index = -1;
    while(++index < values.length)result[index] = one(values[index], includeImageAlt);
    return result.join("");
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eLARv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @param {ParseOptions} [options]
 * @returns {ParseContext}
 */ parcelHelpers.export(exports, "parse", ()=>parse);
/**
 * @typedef {import('micromark-util-types').InitialConstruct} InitialConstruct
 * @typedef {import('micromark-util-types').FullNormalizedExtension} FullNormalizedExtension
 * @typedef {import('micromark-util-types').ParseOptions} ParseOptions
 * @typedef {import('micromark-util-types').ParseContext} ParseContext
 * @typedef {import('micromark-util-types').Create} Create
 */ var _micromarkUtilCombineExtensions = require("micromark-util-combine-extensions");
var _contentJs = require("./initialize/content.js");
var _documentJs = require("./initialize/document.js");
var _flowJs = require("./initialize/flow.js");
var _textJs = require("./initialize/text.js");
var _createTokenizerJs = require("./create-tokenizer.js");
var _constructsJs = require("./constructs.js");
function parse(options = {}) {
    /** @type {FullNormalizedExtension} */ // @ts-expect-error `defaultConstructs` is full, so the result will be too.
    const constructs = (0, _micromarkUtilCombineExtensions.combineExtensions)(// @ts-expect-error Same as above.
    [
        _constructsJs
    ].concat(options.extensions || []));
    /** @type {ParseContext} */ const parser = {
        defined: [],
        lazy: {},
        constructs,
        content: create((0, _contentJs.content)),
        document: create((0, _documentJs.document)),
        flow: create((0, _flowJs.flow)),
        string: create((0, _textJs.string)),
        text: create((0, _textJs.text))
    };
    return parser;
    /**
   * @param {InitialConstruct} initial
   */ function create(initial) {
        return creator;
        /** @type {Create} */ function creator(from) {
            return (0, _createTokenizerJs.createTokenizer)(parser, initial, from);
        }
    }
}

},{"micromark-util-combine-extensions":"1SQiY","./initialize/content.js":"29SYT","./initialize/document.js":"62cNo","./initialize/flow.js":"8w7UI","./initialize/text.js":"cPmlm","./create-tokenizer.js":"BVpuW","./constructs.js":"eq29u","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1SQiY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Combine several syntax extensions into one.
 *
 * @param {Extension[]} extensions List of syntax extensions.
 * @returns {NormalizedExtension} A single combined extension.
 */ parcelHelpers.export(exports, "combineExtensions", ()=>combineExtensions);
/**
 * Combine several HTML extensions into one.
 *
 * @param {HtmlExtension[]} htmlExtensions List of HTML extensions.
 * @returns {HtmlExtension} A single combined extension.
 */ parcelHelpers.export(exports, "combineHtmlExtensions", ()=>combineHtmlExtensions);
/**
 * @typedef {import('micromark-util-types').NormalizedExtension} NormalizedExtension
 * @typedef {import('micromark-util-types').Extension} Extension
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').HtmlExtension} HtmlExtension
 */ var _micromarkUtilChunked = require("micromark-util-chunked");
const hasOwnProperty = {}.hasOwnProperty;
function combineExtensions(extensions) {
    /** @type {NormalizedExtension} */ const all = {};
    let index = -1;
    while(++index < extensions.length)syntaxExtension(all, extensions[index]);
    return all;
}
/**
 * Merge `extension` into `all`.
 *
 * @param {NormalizedExtension} all Extension to merge into.
 * @param {Extension} extension Extension to merge.
 * @returns {void}
 */ function syntaxExtension(all, extension) {
    /** @type {string} */ let hook;
    for(hook in extension){
        const maybe = hasOwnProperty.call(all, hook) ? all[hook] : undefined;
        const left = maybe || (all[hook] = {});
        const right = extension[hook];
        /** @type {string} */ let code;
        for(code in right){
            if (!hasOwnProperty.call(left, code)) left[code] = [];
            const value = right[code];
            constructs(// @ts-expect-error Looks like a list.
            left[code], Array.isArray(value) ? value : value ? [
                value
            ] : []);
        }
    }
}
/**
 * Merge `list` into `existing` (both lists of constructs).
 * Mutates `existing`.
 *
 * @param {unknown[]} existing
 * @param {unknown[]} list
 * @returns {void}
 */ function constructs(existing, list) {
    let index = -1;
    /** @type {unknown[]} */ const before = [];
    while(++index < list.length)(list[index].add === "after" ? existing : before).push(list[index]);
    (0, _micromarkUtilChunked.splice)(existing, 0, 0, before);
}
function combineHtmlExtensions(htmlExtensions) {
    /** @type {HtmlExtension} */ const handlers = {};
    let index = -1;
    while(++index < htmlExtensions.length)htmlExtension(handlers, htmlExtensions[index]);
    return handlers;
}
/**
 * Merge `extension` into `all`.
 *
 * @param {HtmlExtension} all Extension to merge into.
 * @param {HtmlExtension} extension Extension to merge.
 * @returns {void}
 */ function htmlExtension(all, extension) {
    /** @type {string} */ let hook;
    for(hook in extension){
        const maybe = hasOwnProperty.call(all, hook) ? all[hook] : undefined;
        const left = maybe || (all[hook] = {});
        const right = extension[hook];
        /** @type {string} */ let type;
        if (right) for(type in right)left[type] = right[type];
    }
}

},{"micromark-util-chunked":"gjqro","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gjqro":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Like `Array#splice`, but smarter for giant arrays.
 *
 * `Array#splice` takes all items to be inserted as individual argument which
 * causes a stack overflow in V8 when trying to insert 100k items for instance.
 *
 * Otherwise, this does not return the removed items, and takes `items` as an
 * array instead of rest parameters.
 *
 * @template {unknown} T
 * @param {T[]} list
 * @param {number} start
 * @param {number} remove
 * @param {T[]} items
 * @returns {void}
 */ parcelHelpers.export(exports, "splice", ()=>splice);
/**
 * Append `items` (an array) at the end of `list` (another array).
 * When `list` was empty, returns `items` instead.
 *
 * This prevents a potentially expensive operation when `list` is empty,
 * and adds items in batches to prevent V8 from hanging.
 *
 * @template {unknown} T
 * @param {T[]} list
 * @param {T[]} items
 * @returns {T[]}
 */ parcelHelpers.export(exports, "push", ()=>push);
function splice(list, start, remove, items) {
    const end = list.length;
    let chunkStart = 0;
    /** @type {unknown[]} */ let parameters // Make start between zero and `end` (included).
    ;
    if (start < 0) start = -start > end ? 0 : end + start;
    else start = start > end ? end : start;
    remove = remove > 0 ? remove : 0 // No need to chunk the items if there’s only a couple (10k) items.
    ;
    if (items.length < 10000) {
        parameters = Array.from(items);
        parameters.unshift(start, remove) // @ts-expect-error Hush, it’s fine.
        ;
        [].splice.apply(list, parameters);
    } else {
        // Delete `remove` items starting from `start`
        if (remove) [].splice.apply(list, [
            start,
            remove
        ]) // Insert the items in chunks to not cause stack overflows.
        ;
        while(chunkStart < items.length){
            parameters = items.slice(chunkStart, chunkStart + 10000);
            parameters.unshift(start, 0) // @ts-expect-error Hush, it’s fine.
            ;
            [].splice.apply(list, parameters);
            chunkStart += 10000;
            start += 10000;
        }
    }
}
function push(list, items) {
    if (list.length > 0) {
        splice(list, list.length, 0, items);
        return list;
    }
    return items;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"29SYT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "content", ()=>content);
/**
 * @typedef {import('micromark-util-types').InitialConstruct} InitialConstruct
 * @typedef {import('micromark-util-types').Initializer} Initializer
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').State} State
 */ var _micromarkFactorySpace = require("micromark-factory-space");
var _micromarkUtilCharacter = require("micromark-util-character");
const content = {
    tokenize: initializeContent
};
/** @type {Initializer} */ function initializeContent(effects) {
    const contentStart = effects.attempt(this.parser.constructs.contentInitial, afterContentStartConstruct, paragraphInitial);
    /** @type {Token} */ let previous;
    return contentStart;
    /** @type {State} */ function afterContentStartConstruct(code) {
        if (code === null) {
            effects.consume(code);
            return;
        }
        effects.enter("lineEnding");
        effects.consume(code);
        effects.exit("lineEnding");
        return (0, _micromarkFactorySpace.factorySpace)(effects, contentStart, "linePrefix");
    }
    /** @type {State} */ function paragraphInitial(code) {
        effects.enter("paragraph");
        return lineStart(code);
    }
    /** @type {State} */ function lineStart(code) {
        const token = effects.enter("chunkText", {
            contentType: "text",
            previous
        });
        if (previous) {
            previous.next = token;
        }
        previous = token;
        return data(code);
    }
    /** @type {State} */ function data(code) {
        if (code === null) {
            effects.exit("chunkText");
            effects.exit("paragraph");
            effects.consume(code);
            return;
        }
        if ((0, _micromarkUtilCharacter.markdownLineEnding)(code)) {
            effects.consume(code);
            effects.exit("chunkText");
            return lineStart;
        } // Data.
        effects.consume(code);
        return data;
    }
}

},{"micromark-factory-space":"54gkm","micromark-util-character":"lRjrj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"54gkm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @param {Effects} effects
 * @param {State} ok
 * @param {string} type
 * @param {number} [max=Infinity]
 * @returns {State}
 */ parcelHelpers.export(exports, "factorySpace", ()=>factorySpace);
/**
 * @typedef {import('micromark-util-types').Effects} Effects
 * @typedef {import('micromark-util-types').State} State
 */ var _micromarkUtilCharacter = require("micromark-util-character");
function factorySpace(effects, ok, type, max) {
    const limit = max ? max - 1 : Number.POSITIVE_INFINITY;
    let size = 0;
    return start;
    /** @type {State} */ function start(code) {
        if ((0, _micromarkUtilCharacter.markdownSpace)(code)) {
            effects.enter(type);
            return prefix(code);
        }
        return ok(code);
    }
    /** @type {State} */ function prefix(code) {
        if ((0, _micromarkUtilCharacter.markdownSpace)(code) && (size++) < limit) {
            effects.consume(code);
            return prefix;
        }
        effects.exit(type);
        return ok(code);
    }
}

},{"micromark-util-character":"lRjrj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lRjrj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "asciiAlpha", ()=>asciiAlpha);
parcelHelpers.export(exports, "asciiDigit", ()=>asciiDigit);
parcelHelpers.export(exports, "asciiHexDigit", ()=>asciiHexDigit);
parcelHelpers.export(exports, "asciiAlphanumeric", ()=>asciiAlphanumeric);
parcelHelpers.export(exports, "asciiPunctuation", ()=>asciiPunctuation);
parcelHelpers.export(exports, "asciiAtext", ()=>asciiAtext);
/**
 * Check whether a character code is an ASCII control character.
 *
 * An **ASCII control** is a character in the inclusive range U+0000 NULL (NUL)
 * to U+001F (US), or U+007F (DEL).
 *
 * @param {Code} code
 * @returns {code is number}
 */ parcelHelpers.export(exports, "asciiControl", ()=>asciiControl);
/**
 * Check whether a character code is a markdown line ending (see
 * `markdownLineEnding`) or markdown space (see `markdownSpace`).
 *
 * @param {Code} code
 * @returns {code is number}
 */ parcelHelpers.export(exports, "markdownLineEndingOrSpace", ()=>markdownLineEndingOrSpace);
/**
 * Check whether a character code is a markdown line ending.
 *
 * A **markdown line ending** is the virtual characters M-0003 CARRIAGE RETURN
 * LINE FEED (CRLF), M-0004 LINE FEED (LF) and M-0005 CARRIAGE RETURN (CR).
 *
 * In micromark, the actual character U+000A LINE FEED (LF) and U+000D CARRIAGE
 * RETURN (CR) are replaced by these virtual characters depending on whether
 * they occurred together.
 *
 * @param {Code} code
 * @returns {code is number}
 */ parcelHelpers.export(exports, "markdownLineEnding", ()=>markdownLineEnding);
/**
 * Check whether a character code is a markdown space.
 *
 * A **markdown space** is the concrete character U+0020 SPACE (SP) and the
 * virtual characters M-0001 VIRTUAL SPACE (VS) and M-0002 HORIZONTAL TAB (HT).
 *
 * In micromark, the actual character U+0009 CHARACTER TABULATION (HT) is
 * replaced by one M-0002 HORIZONTAL TAB (HT) and between 0 and 3 M-0001 VIRTUAL
 * SPACE (VS) characters, depending on the column at which the tab occurred.
 *
 * @param {Code} code
 * @returns {code is number}
 */ parcelHelpers.export(exports, "markdownSpace", ()=>markdownSpace);
parcelHelpers.export(exports, "unicodeWhitespace", ()=>unicodeWhitespace);
parcelHelpers.export(exports, "unicodePunctuation", ()=>unicodePunctuation);
/**
 * @typedef {import('micromark-util-types').Code} Code
 */ var _unicodePunctuationRegexJs = require("./lib/unicode-punctuation-regex.js");
const asciiAlpha = regexCheck(/[A-Za-z]/);
const asciiDigit = regexCheck(/\d/);
const asciiHexDigit = regexCheck(/[\dA-Fa-f]/);
const asciiAlphanumeric = regexCheck(/[\dA-Za-z]/);
const asciiPunctuation = regexCheck(/[!-/:-@[-`{-~]/);
const asciiAtext = regexCheck(/[#-'*+\--9=?A-Z^-~]/);
function asciiControl(code) {
    return(// Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    code !== null && (code < 32 || code === 127));
}
function markdownLineEndingOrSpace(code) {
    return code !== null && (code < 0 || code === 32);
}
function markdownLineEnding(code) {
    return code !== null && code < -2;
}
function markdownSpace(code) {
    return code === -2 || code === -1 || code === 32;
}
const unicodeWhitespace = regexCheck(/\s/);
const unicodePunctuation = regexCheck((0, _unicodePunctuationRegexJs.unicodePunctuationRegex));
/**
 * Create a code check from a regex.
 *
 * @param {RegExp} regex
 * @returns {(code: Code) => code is number}
 */ function regexCheck(regex) {
    return check;
    /**
   * Check whether a code matches the bound regex.
   *
   * @param {Code} code Character code
   * @returns {code is number} Whether the character code matches the bound regex
   */ function check(code) {
        return code !== null && regex.test(String.fromCharCode(code));
    }
}

},{"./lib/unicode-punctuation-regex.js":"kF737","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kF737":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "unicodePunctuationRegex", ()=>unicodePunctuationRegex);
const unicodePunctuationRegex = /[!-/:-@[-`{-~\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"62cNo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "document", ()=>document);
/**
 * @typedef {import('micromark-util-types').InitialConstruct} InitialConstruct
 * @typedef {import('micromark-util-types').Initializer} Initializer
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Point} Point
 */ /**
 * @typedef {Record<string, unknown>} StackState
 * @typedef {[Construct, StackState]} StackItem
 */ var _micromarkFactorySpace = require("micromark-factory-space");
var _micromarkUtilCharacter = require("micromark-util-character");
var _micromarkUtilChunked = require("micromark-util-chunked");
const document = {
    tokenize: initializeDocument
};
/** @type {Construct} */ const containerConstruct = {
    tokenize: tokenizeContainer
};
/** @type {Initializer} */ function initializeDocument(effects) {
    const self = this;
    /** @type {StackItem[]} */ const stack = [];
    let continued = 0;
    /** @type {TokenizeContext|undefined} */ let childFlow;
    /** @type {Token|undefined} */ let childToken;
    /** @type {number} */ let lineStartOffset;
    return start;
    /** @type {State} */ function start(code) {
        // First we iterate through the open blocks, starting with the root
        // document, and descending through last children down to the last open
        // block.
        // Each block imposes a condition that the line must satisfy if the block is
        // to remain open.
        // For example, a block quote requires a `>` character.
        // A paragraph requires a non-blank line.
        // In this phase we may match all or just some of the open blocks.
        // But we cannot close unmatched blocks yet, because we may have a lazy
        // continuation line.
        if (continued < stack.length) {
            const item = stack[continued];
            self.containerState = item[1];
            return effects.attempt(item[0].continuation, documentContinue, checkNewContainers)(code);
        } // Done.
        return checkNewContainers(code);
    }
    /** @type {State} */ function documentContinue(code) {
        continued++ // Note: this field is called `_closeFlow` but it also closes containers.
        ;
        // Perhaps a good idea to rename it but it’s already used in the wild by
        // extensions.
        if (self.containerState._closeFlow) {
            self.containerState._closeFlow = undefined;
            if (childFlow) {
                closeFlow();
            } // Note: this algorithm for moving events around is similar to the
            // algorithm when dealing with lazy lines in `writeToChild`.
            const indexBeforeExits = self.events.length;
            let indexBeforeFlow = indexBeforeExits;
            /** @type {Point|undefined} */ let point // Find the flow chunk.
            ;
            while(indexBeforeFlow--){
                if (self.events[indexBeforeFlow][0] === "exit" && self.events[indexBeforeFlow][1].type === "chunkFlow") {
                    point = self.events[indexBeforeFlow][1].end;
                    break;
                }
            }
            exitContainers(continued) // Fix positions.
            ;
            let index = indexBeforeExits;
            while(index < self.events.length){
                self.events[index][1].end = Object.assign({}, point);
                index++;
            } // Inject the exits earlier (they’re still also at the end).
            (0, _micromarkUtilChunked.splice)(self.events, indexBeforeFlow + 1, 0, self.events.slice(indexBeforeExits)) // Discard the duplicate exits.
            ;
            self.events.length = index;
            return checkNewContainers(code);
        }
        return start(code);
    }
    /** @type {State} */ function checkNewContainers(code) {
        // Next, after consuming the continuation markers for existing blocks, we
        // look for new block starts (e.g. `>` for a block quote).
        // If we encounter a new block start, we close any blocks unmatched in
        // step 1 before creating the new block as a child of the last matched
        // block.
        if (continued === stack.length) {
            // No need to `check` whether there’s a container, of `exitContainers`
            // would be moot.
            // We can instead immediately `attempt` to parse one.
            if (!childFlow) {
                return documentContinued(code);
            } // If we have concrete content, such as block HTML or fenced code,
            // we can’t have containers “pierce” into them, so we can immediately
            // start.
            if (childFlow.currentConstruct && childFlow.currentConstruct.concrete) {
                return flowStart(code);
            } // If we do have flow, it could still be a blank line,
            // but we’d be interrupting it w/ a new container if there’s a current
            // construct.
            self.interrupt = Boolean(childFlow.currentConstruct && !childFlow._gfmTableDynamicInterruptHack);
        } // Check if there is a new container.
        self.containerState = {};
        return effects.check(containerConstruct, thereIsANewContainer, thereIsNoNewContainer)(code);
    }
    /** @type {State} */ function thereIsANewContainer(code) {
        if (childFlow) closeFlow();
        exitContainers(continued);
        return documentContinued(code);
    }
    /** @type {State} */ function thereIsNoNewContainer(code) {
        self.parser.lazy[self.now().line] = continued !== stack.length;
        lineStartOffset = self.now().offset;
        return flowStart(code);
    }
    /** @type {State} */ function documentContinued(code) {
        // Try new containers.
        self.containerState = {};
        return effects.attempt(containerConstruct, containerContinue, flowStart)(code);
    }
    /** @type {State} */ function containerContinue(code) {
        continued++;
        stack.push([
            self.currentConstruct,
            self.containerState
        ]) // Try another.
        ;
        return documentContinued(code);
    }
    /** @type {State} */ function flowStart(code) {
        if (code === null) {
            if (childFlow) closeFlow();
            exitContainers(0);
            effects.consume(code);
            return;
        }
        childFlow = childFlow || self.parser.flow(self.now());
        effects.enter("chunkFlow", {
            contentType: "flow",
            previous: childToken,
            _tokenizer: childFlow
        });
        return flowContinue(code);
    }
    /** @type {State} */ function flowContinue(code) {
        if (code === null) {
            writeToChild(effects.exit("chunkFlow"), true);
            exitContainers(0);
            effects.consume(code);
            return;
        }
        if ((0, _micromarkUtilCharacter.markdownLineEnding)(code)) {
            effects.consume(code);
            writeToChild(effects.exit("chunkFlow")) // Get ready for the next line.
            ;
            continued = 0;
            self.interrupt = undefined;
            return start;
        }
        effects.consume(code);
        return flowContinue;
    }
    /**
   * @param {Token} token
   * @param {boolean} [eof]
   * @returns {void}
   */ function writeToChild(token, eof) {
        const stream = self.sliceStream(token);
        if (eof) stream.push(null);
        token.previous = childToken;
        if (childToken) childToken.next = token;
        childToken = token;
        childFlow.defineSkip(token.start);
        childFlow.write(stream) // Alright, so we just added a lazy line:
        ;
        //
        // ```markdown
        // > a
        // b.
        //
        // Or:
        //
        // > ~~~c
        // d
        //
        // Or:
        //
        // > | e |
        // f
        // ```
        //
        // The construct in the second example (fenced code) does not accept lazy
        // lines, so it marked itself as done at the end of its first line, and
        // then the content construct parses `d`.
        // Most constructs in markdown match on the first line: if the first line
        // forms a construct, a non-lazy line can’t “unmake” it.
        //
        // The construct in the third example is potentially a GFM table, and
        // those are *weird*.
        // It *could* be a table, from the first line, if the following line
        // matches a condition.
        // In this case, that second line is lazy, which “unmakes” the first line
        // and turns the whole into one content block.
        //
        // We’ve now parsed the non-lazy and the lazy line, and can figure out
        // whether the lazy line started a new flow block.
        // If it did, we exit the current containers between the two flow blocks.
        if (self.parser.lazy[token.start.line]) {
            let index = childFlow.events.length;
            while(index--){
                if (// The token starts before the line ending…
                childFlow.events[index][1].start.offset < lineStartOffset && (!childFlow.events[index][1].end || childFlow.events[index][1].end.offset > lineStartOffset)) {
                    // Exit: there’s still something open, which means it’s a lazy line
                    // part of something.
                    return;
                }
            } // Note: this algorithm for moving events around is similar to the
            // algorithm when closing flow in `documentContinue`.
            const indexBeforeExits = self.events.length;
            let indexBeforeFlow = indexBeforeExits;
            /** @type {boolean|undefined} */ let seen;
            /** @type {Point|undefined} */ let point // Find the previous chunk (the one before the lazy line).
            ;
            while(indexBeforeFlow--){
                if (self.events[indexBeforeFlow][0] === "exit" && self.events[indexBeforeFlow][1].type === "chunkFlow") {
                    if (seen) {
                        point = self.events[indexBeforeFlow][1].end;
                        break;
                    }
                    seen = true;
                }
            }
            exitContainers(continued) // Fix positions.
            ;
            index = indexBeforeExits;
            while(index < self.events.length){
                self.events[index][1].end = Object.assign({}, point);
                index++;
            } // Inject the exits earlier (they’re still also at the end).
            (0, _micromarkUtilChunked.splice)(self.events, indexBeforeFlow + 1, 0, self.events.slice(indexBeforeExits)) // Discard the duplicate exits.
            ;
            self.events.length = index;
        }
    }
    /**
   * @param {number} size
   * @returns {void}
   */ function exitContainers(size) {
        let index = stack.length // Exit open containers.
        ;
        while((index--) > size){
            const entry = stack[index];
            self.containerState = entry[1];
            entry[0].exit.call(self, effects);
        }
        stack.length = size;
    }
    function closeFlow() {
        childFlow.write([
            null
        ]);
        childToken = undefined;
        childFlow = undefined;
        self.containerState._closeFlow = undefined;
    }
}
/** @type {Tokenizer} */ function tokenizeContainer(effects, ok, nok) {
    return (0, _micromarkFactorySpace.factorySpace)(effects, effects.attempt(this.parser.constructs.document, ok, nok), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? undefined : 4);
}

},{"micromark-factory-space":"54gkm","micromark-util-character":"lRjrj","micromark-util-chunked":"gjqro","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8w7UI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "flow", ()=>flow);
/**
 * @typedef {import('micromark-util-types').InitialConstruct} InitialConstruct
 * @typedef {import('micromark-util-types').Initializer} Initializer
 * @typedef {import('micromark-util-types').State} State
 */ var _micromarkCoreCommonmark = require("micromark-core-commonmark");
var _micromarkFactorySpace = require("micromark-factory-space");
var _micromarkUtilCharacter = require("micromark-util-character");
const flow = {
    tokenize: initializeFlow
};
/** @type {Initializer} */ function initializeFlow(effects) {
    const self = this;
    const initial = effects.attempt(// Try to parse a blank line.
    (0, _micromarkCoreCommonmark.blankLine), atBlankEnding, effects.attempt(this.parser.constructs.flowInitial, afterConstruct, (0, _micromarkFactorySpace.factorySpace)(effects, effects.attempt(this.parser.constructs.flow, afterConstruct, effects.attempt((0, _micromarkCoreCommonmark.content), afterConstruct)), "linePrefix")));
    return initial;
    /** @type {State} */ function atBlankEnding(code) {
        if (code === null) {
            effects.consume(code);
            return;
        }
        effects.enter("lineEndingBlank");
        effects.consume(code);
        effects.exit("lineEndingBlank");
        self.currentConstruct = undefined;
        return initial;
    }
    /** @type {State} */ function afterConstruct(code) {
        if (code === null) {
            effects.consume(code);
            return;
        }
        effects.enter("lineEnding");
        effects.consume(code);
        effects.exit("lineEnding");
        self.currentConstruct = undefined;
        return initial;
    }
}

},{"micromark-core-commonmark":"hxEI3","micromark-factory-space":"54gkm","micromark-util-character":"lRjrj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hxEI3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "attention", ()=>(0, _attentionJs.attention));
parcelHelpers.export(exports, "autolink", ()=>(0, _autolinkJs.autolink));
parcelHelpers.export(exports, "blankLine", ()=>(0, _blankLineJs.blankLine));
parcelHelpers.export(exports, "blockQuote", ()=>(0, _blockQuoteJs.blockQuote));
parcelHelpers.export(exports, "characterEscape", ()=>(0, _characterEscapeJs.characterEscape));
parcelHelpers.export(exports, "characterReference", ()=>(0, _characterReferenceJs.characterReference));
parcelHelpers.export(exports, "codeFenced", ()=>(0, _codeFencedJs.codeFenced));
parcelHelpers.export(exports, "codeIndented", ()=>(0, _codeIndentedJs.codeIndented));
parcelHelpers.export(exports, "codeText", ()=>(0, _codeTextJs.codeText));
parcelHelpers.export(exports, "content", ()=>(0, _contentJs.content));
parcelHelpers.export(exports, "definition", ()=>(0, _definitionJs.definition));
parcelHelpers.export(exports, "hardBreakEscape", ()=>(0, _hardBreakEscapeJs.hardBreakEscape));
parcelHelpers.export(exports, "headingAtx", ()=>(0, _headingAtxJs.headingAtx));
parcelHelpers.export(exports, "htmlFlow", ()=>(0, _htmlFlowJs.htmlFlow));
parcelHelpers.export(exports, "htmlText", ()=>(0, _htmlTextJs.htmlText));
parcelHelpers.export(exports, "labelEnd", ()=>(0, _labelEndJs.labelEnd));
parcelHelpers.export(exports, "labelStartImage", ()=>(0, _labelStartImageJs.labelStartImage));
parcelHelpers.export(exports, "labelStartLink", ()=>(0, _labelStartLinkJs.labelStartLink));
parcelHelpers.export(exports, "lineEnding", ()=>(0, _lineEndingJs.lineEnding));
parcelHelpers.export(exports, "list", ()=>(0, _listJs.list));
parcelHelpers.export(exports, "setextUnderline", ()=>(0, _setextUnderlineJs.setextUnderline));
parcelHelpers.export(exports, "thematicBreak", ()=>(0, _thematicBreakJs.thematicBreak));
var _attentionJs = require("./lib/attention.js");
var _autolinkJs = require("./lib/autolink.js");
var _blankLineJs = require("./lib/blank-line.js");
var _blockQuoteJs = require("./lib/block-quote.js");
var _characterEscapeJs = require("./lib/character-escape.js");
var _characterReferenceJs = require("./lib/character-reference.js");
var _codeFencedJs = require("./lib/code-fenced.js");
var _codeIndentedJs = require("./lib/code-indented.js");
var _codeTextJs = require("./lib/code-text.js");
var _contentJs = require("./lib/content.js");
var _definitionJs = require("./lib/definition.js");
var _hardBreakEscapeJs = require("./lib/hard-break-escape.js");
var _headingAtxJs = require("./lib/heading-atx.js");
var _htmlFlowJs = require("./lib/html-flow.js");
var _htmlTextJs = require("./lib/html-text.js");
var _labelEndJs = require("./lib/label-end.js");
var _labelStartImageJs = require("./lib/label-start-image.js");
var _labelStartLinkJs = require("./lib/label-start-link.js");
var _lineEndingJs = require("./lib/line-ending.js");
var _listJs = require("./lib/list.js");
var _setextUnderlineJs = require("./lib/setext-underline.js");
var _thematicBreakJs = require("./lib/thematic-break.js");

},{"./lib/attention.js":"7bWks","./lib/autolink.js":"3pekC","./lib/blank-line.js":"eIeYy","./lib/block-quote.js":"3RXTJ","./lib/character-escape.js":"jINm1","./lib/character-reference.js":"fbZJc","./lib/code-fenced.js":"1L3L5","./lib/code-indented.js":"gsBb3","./lib/code-text.js":"2mp5e","./lib/content.js":"39A5G","./lib/definition.js":"hvHsb","./lib/hard-break-escape.js":"6pVvm","./lib/heading-atx.js":"9L5d1","./lib/html-flow.js":"5waRK","./lib/html-text.js":"4PJtt","./lib/label-end.js":"leh3O","./lib/label-start-image.js":"1Da2C","./lib/label-start-link.js":"2FNWl","./lib/line-ending.js":"7b4KV","./lib/list.js":"j1aFm","./lib/setext-underline.js":"iCH31","./lib/thematic-break.js":"hEr16","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7bWks":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "attention", ()=>attention);
/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').Event} Event
 * @typedef {import('micromark-util-types').Code} Code
 * @typedef {import('micromark-util-types').Point} Point
 */ var _micromarkUtilChunked = require("micromark-util-chunked");
var _micromarkUtilClassifyCharacter = require("micromark-util-classify-character");
var _micromarkUtilResolveAll = require("micromark-util-resolve-all");
const attention = {
    name: "attention",
    tokenize: tokenizeAttention,
    resolveAll: resolveAllAttention
};
/**
 * Take all events and resolve attention to emphasis or strong.
 *
 * @type {Resolver}
 */ function resolveAllAttention(events, context) {
    let index = -1;
    /** @type {number} */ let open;
    /** @type {Token} */ let group;
    /** @type {Token} */ let text;
    /** @type {Token} */ let openingSequence;
    /** @type {Token} */ let closingSequence;
    /** @type {number} */ let use;
    /** @type {Event[]} */ let nextEvents;
    /** @type {number} */ let offset // Walk through all events.
    ;
    //
    // Note: performance of this is fine on an mb of normal markdown, but it’s
    // a bottleneck for malicious stuff.
    while(++index < events.length)// Find a token that can close.
    if (events[index][0] === "enter" && events[index][1].type === "attentionSequence" && events[index][1]._close) {
        open = index // Now walk back to find an opener.
        ;
        while(open--)// Find a token that can open the closer.
        if (events[open][0] === "exit" && events[open][1].type === "attentionSequence" && events[open][1]._open && context.sliceSerialize(events[open][1]).charCodeAt(0) === context.sliceSerialize(events[index][1]).charCodeAt(0)) {
            // If the opening can close or the closing can open,
            // and the close size *is not* a multiple of three,
            // but the sum of the opening and closing size *is* multiple of three,
            // then don’t match.
            if ((events[open][1]._close || events[index][1]._open) && (events[index][1].end.offset - events[index][1].start.offset) % 3 && !((events[open][1].end.offset - events[open][1].start.offset + events[index][1].end.offset - events[index][1].start.offset) % 3)) continue;
             // Number of markers to use from the sequence.
            use = events[open][1].end.offset - events[open][1].start.offset > 1 && events[index][1].end.offset - events[index][1].start.offset > 1 ? 2 : 1;
            const start = Object.assign({}, events[open][1].end);
            const end = Object.assign({}, events[index][1].start);
            movePoint(start, -use);
            movePoint(end, use);
            openingSequence = {
                type: use > 1 ? "strongSequence" : "emphasisSequence",
                start,
                end: Object.assign({}, events[open][1].end)
            };
            closingSequence = {
                type: use > 1 ? "strongSequence" : "emphasisSequence",
                start: Object.assign({}, events[index][1].start),
                end
            };
            text = {
                type: use > 1 ? "strongText" : "emphasisText",
                start: Object.assign({}, events[open][1].end),
                end: Object.assign({}, events[index][1].start)
            };
            group = {
                type: use > 1 ? "strong" : "emphasis",
                start: Object.assign({}, openingSequence.start),
                end: Object.assign({}, closingSequence.end)
            };
            events[open][1].end = Object.assign({}, openingSequence.start);
            events[index][1].start = Object.assign({}, closingSequence.end);
            nextEvents = [] // If there are more markers in the opening, add them before.
            ;
            if (events[open][1].end.offset - events[open][1].start.offset) nextEvents = (0, _micromarkUtilChunked.push)(nextEvents, [
                [
                    "enter",
                    events[open][1],
                    context
                ],
                [
                    "exit",
                    events[open][1],
                    context
                ]
            ]);
             // Opening.
            nextEvents = (0, _micromarkUtilChunked.push)(nextEvents, [
                [
                    "enter",
                    group,
                    context
                ],
                [
                    "enter",
                    openingSequence,
                    context
                ],
                [
                    "exit",
                    openingSequence,
                    context
                ],
                [
                    "enter",
                    text,
                    context
                ]
            ]) // Between.
            ;
            nextEvents = (0, _micromarkUtilChunked.push)(nextEvents, (0, _micromarkUtilResolveAll.resolveAll)(context.parser.constructs.insideSpan.null, events.slice(open + 1, index), context)) // Closing.
            ;
            nextEvents = (0, _micromarkUtilChunked.push)(nextEvents, [
                [
                    "exit",
                    text,
                    context
                ],
                [
                    "enter",
                    closingSequence,
                    context
                ],
                [
                    "exit",
                    closingSequence,
                    context
                ],
                [
                    "exit",
                    group,
                    context
                ]
            ]) // If there are more markers in the closing, add them after.
            ;
            if (events[index][1].end.offset - events[index][1].start.offset) {
                offset = 2;
                nextEvents = (0, _micromarkUtilChunked.push)(nextEvents, [
                    [
                        "enter",
                        events[index][1],
                        context
                    ],
                    [
                        "exit",
                        events[index][1],
                        context
                    ]
                ]);
            } else offset = 0;
            (0, _micromarkUtilChunked.splice)(events, open - 1, index - open + 3, nextEvents);
            index = open + nextEvents.length - offset - 2;
            break;
        }
    }
     // Remove remaining sequences.
    index = -1;
    while(++index < events.length)if (events[index][1].type === "attentionSequence") events[index][1].type = "data";
    return events;
}
/** @type {Tokenizer} */ function tokenizeAttention(effects, ok) {
    const attentionMarkers = this.parser.constructs.attentionMarkers.null;
    const previous = this.previous;
    const before = (0, _micromarkUtilClassifyCharacter.classifyCharacter)(previous);
    /** @type {NonNullable<Code>} */ let marker;
    return start;
    /** @type {State} */ function start(code) {
        effects.enter("attentionSequence");
        marker = code;
        return sequence(code);
    }
    /** @type {State} */ function sequence(code) {
        if (code === marker) {
            effects.consume(code);
            return sequence;
        }
        const token = effects.exit("attentionSequence");
        const after = (0, _micromarkUtilClassifyCharacter.classifyCharacter)(code);
        const open = !after || after === 2 && before || attentionMarkers.includes(code);
        const close = !before || before === 2 && after || attentionMarkers.includes(previous);
        token._open = Boolean(marker === 42 ? open : open && (before || !close));
        token._close = Boolean(marker === 42 ? close : close && (after || !open));
        return ok(code);
    }
}
/**
 * Move a point a bit.
 *
 * Note: `move` only works inside lines! It’s not possible to move past other
 * chunks (replacement characters, tabs, or line endings).
 *
 * @param {Point} point
 * @param {number} offset
 * @returns {void}
 */ function movePoint(point, offset) {
    point.column += offset;
    point.offset += offset;
    point._bufferIndex += offset;
}

},{"micromark-util-chunked":"gjqro","micromark-util-classify-character":"i5DN5","micromark-util-resolve-all":"bYv7P","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i5DN5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Classify whether a character code represents whitespace, punctuation, or
 * something else.
 *
 * Used for attention (emphasis, strong), whose sequences can open or close
 * based on the class of surrounding characters.
 *
 * Note that eof (`null`) is seen as whitespace.
 *
 * @param {Code} code
 * @returns {number|undefined}
 */ parcelHelpers.export(exports, "classifyCharacter", ()=>classifyCharacter);
/**
 * @typedef {import('micromark-util-types').Code} Code
 */ var _micromarkUtilCharacter = require("micromark-util-character");
function classifyCharacter(code) {
    if (code === null || (0, _micromarkUtilCharacter.markdownLineEndingOrSpace)(code) || (0, _micromarkUtilCharacter.unicodeWhitespace)(code)) return 1;
    if ((0, _micromarkUtilCharacter.unicodePunctuation)(code)) return 2;
}

},{"micromark-util-character":"lRjrj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bYv7P":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Event} Event
 * @typedef {import('micromark-util-types').Resolver} Resolver
 */ /**
 * Call all `resolveAll`s.
 *
 * @param {{resolveAll?: Resolver}[]} constructs
 * @param {Event[]} events
 * @param {TokenizeContext} context
 * @returns {Event[]}
 */ parcelHelpers.export(exports, "resolveAll", ()=>resolveAll);
function resolveAll(constructs, events, context) {
    /** @type {Resolver[]} */ const called = [];
    let index = -1;
    while(++index < constructs.length){
        const resolve = constructs[index].resolveAll;
        if (resolve && !called.includes(resolve)) {
            events = resolve(events, context);
            called.push(resolve);
        }
    }
    return events;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3pekC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "autolink", ()=>autolink);
/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 */ var _micromarkUtilCharacter = require("micromark-util-character");
const autolink = {
    name: "autolink",
    tokenize: tokenizeAutolink
};
/** @type {Tokenizer} */ function tokenizeAutolink(effects, ok, nok) {
    let size = 1;
    return start;
    /** @type {State} */ function start(code) {
        effects.enter("autolink");
        effects.enter("autolinkMarker");
        effects.consume(code);
        effects.exit("autolinkMarker");
        effects.enter("autolinkProtocol");
        return open;
    }
    /** @type {State} */ function open(code) {
        if ((0, _micromarkUtilCharacter.asciiAlpha)(code)) {
            effects.consume(code);
            return schemeOrEmailAtext;
        }
        return (0, _micromarkUtilCharacter.asciiAtext)(code) ? emailAtext(code) : nok(code);
    }
    /** @type {State} */ function schemeOrEmailAtext(code) {
        return code === 43 || code === 45 || code === 46 || (0, _micromarkUtilCharacter.asciiAlphanumeric)(code) ? schemeInsideOrEmailAtext(code) : emailAtext(code);
    }
    /** @type {State} */ function schemeInsideOrEmailAtext(code) {
        if (code === 58) {
            effects.consume(code);
            return urlInside;
        }
        if ((code === 43 || code === 45 || code === 46 || (0, _micromarkUtilCharacter.asciiAlphanumeric)(code)) && size++ < 32) {
            effects.consume(code);
            return schemeInsideOrEmailAtext;
        }
        return emailAtext(code);
    }
    /** @type {State} */ function urlInside(code) {
        if (code === 62) {
            effects.exit("autolinkProtocol");
            return end(code);
        }
        if (code === null || code === 32 || code === 60 || (0, _micromarkUtilCharacter.asciiControl)(code)) {
            return nok(code);
        }
        effects.consume(code);
        return urlInside;
    }
    /** @type {State} */ function emailAtext(code) {
        if (code === 64) {
            effects.consume(code);
            size = 0;
            return emailAtSignOrDot;
        }
        if ((0, _micromarkUtilCharacter.asciiAtext)(code)) {
            effects.consume(code);
            return emailAtext;
        }
        return nok(code);
    }
    /** @type {State} */ function emailAtSignOrDot(code) {
        return (0, _micromarkUtilCharacter.asciiAlphanumeric)(code) ? emailLabel(code) : nok(code);
    }
    /** @type {State} */ function emailLabel(code) {
        if (code === 46) {
            effects.consume(code);
            size = 0;
            return emailAtSignOrDot;
        }
        if (code === 62) {
            // Exit, then change the type.
            effects.exit("autolinkProtocol").type = "autolinkEmail";
            return end(code);
        }
        return emailValue(code);
    }
    /** @type {State} */ function emailValue(code) {
        if ((code === 45 || (0, _micromarkUtilCharacter.asciiAlphanumeric)(code)) && size++ < 63) {
            effects.consume(code);
            return code === 45 ? emailValue : emailLabel;
        }
        return nok(code);
    }
    /** @type {State} */ function end(code) {
        effects.enter("autolinkMarker");
        effects.consume(code);
        effects.exit("autolinkMarker");
        effects.exit("autolink");
        return ok;
    }
}

},{"micromark-util-character":"lRjrj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eIeYy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "blankLine", ()=>blankLine);
/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 */ var _micromarkFactorySpace = require("micromark-factory-space");
var _micromarkUtilCharacter = require("micromark-util-character");
const blankLine = {
    tokenize: tokenizeBlankLine,
    partial: true
};
/** @type {Tokenizer} */ function tokenizeBlankLine(effects, ok, nok) {
    return (0, _micromarkFactorySpace.factorySpace)(effects, afterWhitespace, "linePrefix");
    /** @type {State} */ function afterWhitespace(code) {
        return code === null || (0, _micromarkUtilCharacter.markdownLineEnding)(code) ? ok(code) : nok(code);
    }
}

},{"micromark-factory-space":"54gkm","micromark-util-character":"lRjrj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3RXTJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "blockQuote", ()=>blockQuote);
/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').Exiter} Exiter
 * @typedef {import('micromark-util-types').State} State
 */ var _micromarkFactorySpace = require("micromark-factory-space");
var _micromarkUtilCharacter = require("micromark-util-character");
const blockQuote = {
    name: "blockQuote",
    tokenize: tokenizeBlockQuoteStart,
    continuation: {
        tokenize: tokenizeBlockQuoteContinuation
    },
    exit
};
/** @type {Tokenizer} */ function tokenizeBlockQuoteStart(effects, ok, nok) {
    const self = this;
    return start;
    /** @type {State} */ function start(code) {
        if (code === 62) {
            const state = self.containerState;
            if (!state.open) {
                effects.enter("blockQuote", {
                    _container: true
                });
                state.open = true;
            }
            effects.enter("blockQuotePrefix");
            effects.enter("blockQuoteMarker");
            effects.consume(code);
            effects.exit("blockQuoteMarker");
            return after;
        }
        return nok(code);
    }
    /** @type {State} */ function after(code) {
        if ((0, _micromarkUtilCharacter.markdownSpace)(code)) {
            effects.enter("blockQuotePrefixWhitespace");
            effects.consume(code);
            effects.exit("blockQuotePrefixWhitespace");
            effects.exit("blockQuotePrefix");
            return ok;
        }
        effects.exit("blockQuotePrefix");
        return ok(code);
    }
}
/** @type {Tokenizer} */ function tokenizeBlockQuoteContinuation(effects, ok, nok) {
    return (0, _micromarkFactorySpace.factorySpace)(effects, effects.attempt(blockQuote, ok, nok), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? undefined : 4);
}
/** @type {Exiter} */ function exit(effects) {
    effects.exit("blockQuote");
}

},{"micromark-factory-space":"54gkm","micromark-util-character":"lRjrj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jINm1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "characterEscape", ()=>characterEscape);
/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 */ var _micromarkUtilCharacter = require("micromark-util-character");
const characterEscape = {
    name: "characterEscape",
    tokenize: tokenizeCharacterEscape
};
/** @type {Tokenizer} */ function tokenizeCharacterEscape(effects, ok, nok) {
    return start;
    /** @type {State} */ function start(code) {
        effects.enter("characterEscape");
        effects.enter("escapeMarker");
        effects.consume(code);
        effects.exit("escapeMarker");
        return open;
    }
    /** @type {State} */ function open(code) {
        if ((0, _micromarkUtilCharacter.asciiPunctuation)(code)) {
            effects.enter("characterEscapeValue");
            effects.consume(code);
            effects.exit("characterEscapeValue");
            effects.exit("characterEscape");
            return ok;
        }
        return nok(code);
    }
}

},{"micromark-util-character":"lRjrj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fbZJc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "characterReference", ()=>characterReference);
/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Code} Code
 */ var _decodeNamedCharacterReference = require("decode-named-character-reference");
var _micromarkUtilCharacter = require("micromark-util-character");
const characterReference = {
    name: "characterReference",
    tokenize: tokenizeCharacterReference
};
/** @type {Tokenizer} */ function tokenizeCharacterReference(effects, ok, nok) {
    const self = this;
    let size = 0;
    /** @type {number} */ let max;
    /** @type {(code: Code) => code is number} */ let test;
    return start;
    /** @type {State} */ function start(code) {
        effects.enter("characterReference");
        effects.enter("characterReferenceMarker");
        effects.consume(code);
        effects.exit("characterReferenceMarker");
        return open;
    }
    /** @type {State} */ function open(code) {
        if (code === 35) {
            effects.enter("characterReferenceMarkerNumeric");
            effects.consume(code);
            effects.exit("characterReferenceMarkerNumeric");
            return numeric;
        }
        effects.enter("characterReferenceValue");
        max = 31;
        test = (0, _micromarkUtilCharacter.asciiAlphanumeric);
        return value(code);
    }
    /** @type {State} */ function numeric(code) {
        if (code === 88 || code === 120) {
            effects.enter("characterReferenceMarkerHexadecimal");
            effects.consume(code);
            effects.exit("characterReferenceMarkerHexadecimal");
            effects.enter("characterReferenceValue");
            max = 6;
            test = (0, _micromarkUtilCharacter.asciiHexDigit);
            return value;
        }
        effects.enter("characterReferenceValue");
        max = 7;
        test = (0, _micromarkUtilCharacter.asciiDigit);
        return value(code);
    }
    /** @type {State} */ function value(code) {
        /** @type {Token} */ let token;
        if (code === 59 && size) {
            token = effects.exit("characterReferenceValue");
            if (test === (0, _micromarkUtilCharacter.asciiAlphanumeric) && !(0, _decodeNamedCharacterReference.decodeNamedCharacterReference)(self.sliceSerialize(token))) {
                return nok(code);
            }
            effects.enter("characterReferenceMarker");
            effects.consume(code);
            effects.exit("characterReferenceMarker");
            effects.exit("characterReference");
            return ok;
        }
        if (test(code) && (size++) < max) {
            effects.consume(code);
            return value;
        }
        return nok(code);
    }
}

},{"decode-named-character-reference":"kCJTF","micromark-util-character":"lRjrj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kCJTF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Decode a single character reference (without the `&` or `;`).
 * You probably only need this when you’re building parsers yourself that follow
 * different rules compared to HTML.
 * This is optimized to be tiny in browsers.
 *
 * @param {string} value
 *   `notin` (named), `#123` (deci), `#x123` (hexa).
 * @returns {string|false}
 *   Decoded reference.
 */ parcelHelpers.export(exports, "decodeNamedCharacterReference", ()=>decodeNamedCharacterReference);
var _characterEntities = require("character-entities");
const own = {}.hasOwnProperty;
function decodeNamedCharacterReference(value) {
    return own.call((0, _characterEntities.characterEntities), value) ? (0, _characterEntities.characterEntities)[value] : false;
}

},{"character-entities":"fZAQG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fZAQG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "characterEntities", ()=>characterEntities);
const characterEntities = {
    AElig: "\xc6",
    AMP: "&",
    Aacute: "\xc1",
    Abreve: "\u0102",
    Acirc: "\xc2",
    Acy: "\u0410",
    Afr: "\uD835\uDD04",
    Agrave: "\xc0",
    Alpha: "\u0391",
    Amacr: "\u0100",
    And: "\u2A53",
    Aogon: "\u0104",
    Aopf: "\uD835\uDD38",
    ApplyFunction: "\u2061",
    Aring: "\xc5",
    Ascr: "\uD835\uDC9C",
    Assign: "\u2254",
    Atilde: "\xc3",
    Auml: "\xc4",
    Backslash: "\u2216",
    Barv: "\u2AE7",
    Barwed: "\u2306",
    Bcy: "\u0411",
    Because: "\u2235",
    Bernoullis: "\u212C",
    Beta: "\u0392",
    Bfr: "\uD835\uDD05",
    Bopf: "\uD835\uDD39",
    Breve: "\u02D8",
    Bscr: "\u212C",
    Bumpeq: "\u224E",
    CHcy: "\u0427",
    COPY: "\xa9",
    Cacute: "\u0106",
    Cap: "\u22D2",
    CapitalDifferentialD: "\u2145",
    Cayleys: "\u212D",
    Ccaron: "\u010C",
    Ccedil: "\xc7",
    Ccirc: "\u0108",
    Cconint: "\u2230",
    Cdot: "\u010A",
    Cedilla: "\xb8",
    CenterDot: "\xb7",
    Cfr: "\u212D",
    Chi: "\u03A7",
    CircleDot: "\u2299",
    CircleMinus: "\u2296",
    CirclePlus: "\u2295",
    CircleTimes: "\u2297",
    ClockwiseContourIntegral: "\u2232",
    CloseCurlyDoubleQuote: "\u201D",
    CloseCurlyQuote: "\u2019",
    Colon: "\u2237",
    Colone: "\u2A74",
    Congruent: "\u2261",
    Conint: "\u222F",
    ContourIntegral: "\u222E",
    Copf: "\u2102",
    Coproduct: "\u2210",
    CounterClockwiseContourIntegral: "\u2233",
    Cross: "\u2A2F",
    Cscr: "\uD835\uDC9E",
    Cup: "\u22D3",
    CupCap: "\u224D",
    DD: "\u2145",
    DDotrahd: "\u2911",
    DJcy: "\u0402",
    DScy: "\u0405",
    DZcy: "\u040F",
    Dagger: "\u2021",
    Darr: "\u21A1",
    Dashv: "\u2AE4",
    Dcaron: "\u010E",
    Dcy: "\u0414",
    Del: "\u2207",
    Delta: "\u0394",
    Dfr: "\uD835\uDD07",
    DiacriticalAcute: "\xb4",
    DiacriticalDot: "\u02D9",
    DiacriticalDoubleAcute: "\u02DD",
    DiacriticalGrave: "`",
    DiacriticalTilde: "\u02DC",
    Diamond: "\u22C4",
    DifferentialD: "\u2146",
    Dopf: "\uD835\uDD3B",
    Dot: "\xa8",
    DotDot: "\u20DC",
    DotEqual: "\u2250",
    DoubleContourIntegral: "\u222F",
    DoubleDot: "\xa8",
    DoubleDownArrow: "\u21D3",
    DoubleLeftArrow: "\u21D0",
    DoubleLeftRightArrow: "\u21D4",
    DoubleLeftTee: "\u2AE4",
    DoubleLongLeftArrow: "\u27F8",
    DoubleLongLeftRightArrow: "\u27FA",
    DoubleLongRightArrow: "\u27F9",
    DoubleRightArrow: "\u21D2",
    DoubleRightTee: "\u22A8",
    DoubleUpArrow: "\u21D1",
    DoubleUpDownArrow: "\u21D5",
    DoubleVerticalBar: "\u2225",
    DownArrow: "\u2193",
    DownArrowBar: "\u2913",
    DownArrowUpArrow: "\u21F5",
    DownBreve: "\u0311",
    DownLeftRightVector: "\u2950",
    DownLeftTeeVector: "\u295E",
    DownLeftVector: "\u21BD",
    DownLeftVectorBar: "\u2956",
    DownRightTeeVector: "\u295F",
    DownRightVector: "\u21C1",
    DownRightVectorBar: "\u2957",
    DownTee: "\u22A4",
    DownTeeArrow: "\u21A7",
    Downarrow: "\u21D3",
    Dscr: "\uD835\uDC9F",
    Dstrok: "\u0110",
    ENG: "\u014A",
    ETH: "\xd0",
    Eacute: "\xc9",
    Ecaron: "\u011A",
    Ecirc: "\xca",
    Ecy: "\u042D",
    Edot: "\u0116",
    Efr: "\uD835\uDD08",
    Egrave: "\xc8",
    Element: "\u2208",
    Emacr: "\u0112",
    EmptySmallSquare: "\u25FB",
    EmptyVerySmallSquare: "\u25AB",
    Eogon: "\u0118",
    Eopf: "\uD835\uDD3C",
    Epsilon: "\u0395",
    Equal: "\u2A75",
    EqualTilde: "\u2242",
    Equilibrium: "\u21CC",
    Escr: "\u2130",
    Esim: "\u2A73",
    Eta: "\u0397",
    Euml: "\xcb",
    Exists: "\u2203",
    ExponentialE: "\u2147",
    Fcy: "\u0424",
    Ffr: "\uD835\uDD09",
    FilledSmallSquare: "\u25FC",
    FilledVerySmallSquare: "\u25AA",
    Fopf: "\uD835\uDD3D",
    ForAll: "\u2200",
    Fouriertrf: "\u2131",
    Fscr: "\u2131",
    GJcy: "\u0403",
    GT: ">",
    Gamma: "\u0393",
    Gammad: "\u03DC",
    Gbreve: "\u011E",
    Gcedil: "\u0122",
    Gcirc: "\u011C",
    Gcy: "\u0413",
    Gdot: "\u0120",
    Gfr: "\uD835\uDD0A",
    Gg: "\u22D9",
    Gopf: "\uD835\uDD3E",
    GreaterEqual: "\u2265",
    GreaterEqualLess: "\u22DB",
    GreaterFullEqual: "\u2267",
    GreaterGreater: "\u2AA2",
    GreaterLess: "\u2277",
    GreaterSlantEqual: "\u2A7E",
    GreaterTilde: "\u2273",
    Gscr: "\uD835\uDCA2",
    Gt: "\u226B",
    HARDcy: "\u042A",
    Hacek: "\u02C7",
    Hat: "^",
    Hcirc: "\u0124",
    Hfr: "\u210C",
    HilbertSpace: "\u210B",
    Hopf: "\u210D",
    HorizontalLine: "\u2500",
    Hscr: "\u210B",
    Hstrok: "\u0126",
    HumpDownHump: "\u224E",
    HumpEqual: "\u224F",
    IEcy: "\u0415",
    IJlig: "\u0132",
    IOcy: "\u0401",
    Iacute: "\xcd",
    Icirc: "\xce",
    Icy: "\u0418",
    Idot: "\u0130",
    Ifr: "\u2111",
    Igrave: "\xcc",
    Im: "\u2111",
    Imacr: "\u012A",
    ImaginaryI: "\u2148",
    Implies: "\u21D2",
    Int: "\u222C",
    Integral: "\u222B",
    Intersection: "\u22C2",
    InvisibleComma: "\u2063",
    InvisibleTimes: "\u2062",
    Iogon: "\u012E",
    Iopf: "\uD835\uDD40",
    Iota: "\u0399",
    Iscr: "\u2110",
    Itilde: "\u0128",
    Iukcy: "\u0406",
    Iuml: "\xcf",
    Jcirc: "\u0134",
    Jcy: "\u0419",
    Jfr: "\uD835\uDD0D",
    Jopf: "\uD835\uDD41",
    Jscr: "\uD835\uDCA5",
    Jsercy: "\u0408",
    Jukcy: "\u0404",
    KHcy: "\u0425",
    KJcy: "\u040C",
    Kappa: "\u039A",
    Kcedil: "\u0136",
    Kcy: "\u041A",
    Kfr: "\uD835\uDD0E",
    Kopf: "\uD835\uDD42",
    Kscr: "\uD835\uDCA6",
    LJcy: "\u0409",
    LT: "<",
    Lacute: "\u0139",
    Lambda: "\u039B",
    Lang: "\u27EA",
    Laplacetrf: "\u2112",
    Larr: "\u219E",
    Lcaron: "\u013D",
    Lcedil: "\u013B",
    Lcy: "\u041B",
    LeftAngleBracket: "\u27E8",
    LeftArrow: "\u2190",
    LeftArrowBar: "\u21E4",
    LeftArrowRightArrow: "\u21C6",
    LeftCeiling: "\u2308",
    LeftDoubleBracket: "\u27E6",
    LeftDownTeeVector: "\u2961",
    LeftDownVector: "\u21C3",
    LeftDownVectorBar: "\u2959",
    LeftFloor: "\u230A",
    LeftRightArrow: "\u2194",
    LeftRightVector: "\u294E",
    LeftTee: "\u22A3",
    LeftTeeArrow: "\u21A4",
    LeftTeeVector: "\u295A",
    LeftTriangle: "\u22B2",
    LeftTriangleBar: "\u29CF",
    LeftTriangleEqual: "\u22B4",
    LeftUpDownVector: "\u2951",
    LeftUpTeeVector: "\u2960",
    LeftUpVector: "\u21BF",
    LeftUpVectorBar: "\u2958",
    LeftVector: "\u21BC",
    LeftVectorBar: "\u2952",
    Leftarrow: "\u21D0",
    Leftrightarrow: "\u21D4",
    LessEqualGreater: "\u22DA",
    LessFullEqual: "\u2266",
    LessGreater: "\u2276",
    LessLess: "\u2AA1",
    LessSlantEqual: "\u2A7D",
    LessTilde: "\u2272",
    Lfr: "\uD835\uDD0F",
    Ll: "\u22D8",
    Lleftarrow: "\u21DA",
    Lmidot: "\u013F",
    LongLeftArrow: "\u27F5",
    LongLeftRightArrow: "\u27F7",
    LongRightArrow: "\u27F6",
    Longleftarrow: "\u27F8",
    Longleftrightarrow: "\u27FA",
    Longrightarrow: "\u27F9",
    Lopf: "\uD835\uDD43",
    LowerLeftArrow: "\u2199",
    LowerRightArrow: "\u2198",
    Lscr: "\u2112",
    Lsh: "\u21B0",
    Lstrok: "\u0141",
    Lt: "\u226A",
    Map: "\u2905",
    Mcy: "\u041C",
    MediumSpace: "\u205F",
    Mellintrf: "\u2133",
    Mfr: "\uD835\uDD10",
    MinusPlus: "\u2213",
    Mopf: "\uD835\uDD44",
    Mscr: "\u2133",
    Mu: "\u039C",
    NJcy: "\u040A",
    Nacute: "\u0143",
    Ncaron: "\u0147",
    Ncedil: "\u0145",
    Ncy: "\u041D",
    NegativeMediumSpace: "\u200B",
    NegativeThickSpace: "\u200B",
    NegativeThinSpace: "\u200B",
    NegativeVeryThinSpace: "\u200B",
    NestedGreaterGreater: "\u226B",
    NestedLessLess: "\u226A",
    NewLine: "\n",
    Nfr: "\uD835\uDD11",
    NoBreak: "\u2060",
    NonBreakingSpace: "\xa0",
    Nopf: "\u2115",
    Not: "\u2AEC",
    NotCongruent: "\u2262",
    NotCupCap: "\u226D",
    NotDoubleVerticalBar: "\u2226",
    NotElement: "\u2209",
    NotEqual: "\u2260",
    NotEqualTilde: "\u2242\u0338",
    NotExists: "\u2204",
    NotGreater: "\u226F",
    NotGreaterEqual: "\u2271",
    NotGreaterFullEqual: "\u2267\u0338",
    NotGreaterGreater: "\u226B\u0338",
    NotGreaterLess: "\u2279",
    NotGreaterSlantEqual: "\u2A7E\u0338",
    NotGreaterTilde: "\u2275",
    NotHumpDownHump: "\u224E\u0338",
    NotHumpEqual: "\u224F\u0338",
    NotLeftTriangle: "\u22EA",
    NotLeftTriangleBar: "\u29CF\u0338",
    NotLeftTriangleEqual: "\u22EC",
    NotLess: "\u226E",
    NotLessEqual: "\u2270",
    NotLessGreater: "\u2278",
    NotLessLess: "\u226A\u0338",
    NotLessSlantEqual: "\u2A7D\u0338",
    NotLessTilde: "\u2274",
    NotNestedGreaterGreater: "\u2AA2\u0338",
    NotNestedLessLess: "\u2AA1\u0338",
    NotPrecedes: "\u2280",
    NotPrecedesEqual: "\u2AAF\u0338",
    NotPrecedesSlantEqual: "\u22E0",
    NotReverseElement: "\u220C",
    NotRightTriangle: "\u22EB",
    NotRightTriangleBar: "\u29D0\u0338",
    NotRightTriangleEqual: "\u22ED",
    NotSquareSubset: "\u228F\u0338",
    NotSquareSubsetEqual: "\u22E2",
    NotSquareSuperset: "\u2290\u0338",
    NotSquareSupersetEqual: "\u22E3",
    NotSubset: "\u2282\u20D2",
    NotSubsetEqual: "\u2288",
    NotSucceeds: "\u2281",
    NotSucceedsEqual: "\u2AB0\u0338",
    NotSucceedsSlantEqual: "\u22E1",
    NotSucceedsTilde: "\u227F\u0338",
    NotSuperset: "\u2283\u20D2",
    NotSupersetEqual: "\u2289",
    NotTilde: "\u2241",
    NotTildeEqual: "\u2244",
    NotTildeFullEqual: "\u2247",
    NotTildeTilde: "\u2249",
    NotVerticalBar: "\u2224",
    Nscr: "\uD835\uDCA9",
    Ntilde: "\xd1",
    Nu: "\u039D",
    OElig: "\u0152",
    Oacute: "\xd3",
    Ocirc: "\xd4",
    Ocy: "\u041E",
    Odblac: "\u0150",
    Ofr: "\uD835\uDD12",
    Ograve: "\xd2",
    Omacr: "\u014C",
    Omega: "\u03A9",
    Omicron: "\u039F",
    Oopf: "\uD835\uDD46",
    OpenCurlyDoubleQuote: "\u201C",
    OpenCurlyQuote: "\u2018",
    Or: "\u2A54",
    Oscr: "\uD835\uDCAA",
    Oslash: "\xd8",
    Otilde: "\xd5",
    Otimes: "\u2A37",
    Ouml: "\xd6",
    OverBar: "\u203E",
    OverBrace: "\u23DE",
    OverBracket: "\u23B4",
    OverParenthesis: "\u23DC",
    PartialD: "\u2202",
    Pcy: "\u041F",
    Pfr: "\uD835\uDD13",
    Phi: "\u03A6",
    Pi: "\u03A0",
    PlusMinus: "\xb1",
    Poincareplane: "\u210C",
    Popf: "\u2119",
    Pr: "\u2ABB",
    Precedes: "\u227A",
    PrecedesEqual: "\u2AAF",
    PrecedesSlantEqual: "\u227C",
    PrecedesTilde: "\u227E",
    Prime: "\u2033",
    Product: "\u220F",
    Proportion: "\u2237",
    Proportional: "\u221D",
    Pscr: "\uD835\uDCAB",
    Psi: "\u03A8",
    QUOT: '"',
    Qfr: "\uD835\uDD14",
    Qopf: "\u211A",
    Qscr: "\uD835\uDCAC",
    RBarr: "\u2910",
    REG: "\xae",
    Racute: "\u0154",
    Rang: "\u27EB",
    Rarr: "\u21A0",
    Rarrtl: "\u2916",
    Rcaron: "\u0158",
    Rcedil: "\u0156",
    Rcy: "\u0420",
    Re: "\u211C",
    ReverseElement: "\u220B",
    ReverseEquilibrium: "\u21CB",
    ReverseUpEquilibrium: "\u296F",
    Rfr: "\u211C",
    Rho: "\u03A1",
    RightAngleBracket: "\u27E9",
    RightArrow: "\u2192",
    RightArrowBar: "\u21E5",
    RightArrowLeftArrow: "\u21C4",
    RightCeiling: "\u2309",
    RightDoubleBracket: "\u27E7",
    RightDownTeeVector: "\u295D",
    RightDownVector: "\u21C2",
    RightDownVectorBar: "\u2955",
    RightFloor: "\u230B",
    RightTee: "\u22A2",
    RightTeeArrow: "\u21A6",
    RightTeeVector: "\u295B",
    RightTriangle: "\u22B3",
    RightTriangleBar: "\u29D0",
    RightTriangleEqual: "\u22B5",
    RightUpDownVector: "\u294F",
    RightUpTeeVector: "\u295C",
    RightUpVector: "\u21BE",
    RightUpVectorBar: "\u2954",
    RightVector: "\u21C0",
    RightVectorBar: "\u2953",
    Rightarrow: "\u21D2",
    Ropf: "\u211D",
    RoundImplies: "\u2970",
    Rrightarrow: "\u21DB",
    Rscr: "\u211B",
    Rsh: "\u21B1",
    RuleDelayed: "\u29F4",
    SHCHcy: "\u0429",
    SHcy: "\u0428",
    SOFTcy: "\u042C",
    Sacute: "\u015A",
    Sc: "\u2ABC",
    Scaron: "\u0160",
    Scedil: "\u015E",
    Scirc: "\u015C",
    Scy: "\u0421",
    Sfr: "\uD835\uDD16",
    ShortDownArrow: "\u2193",
    ShortLeftArrow: "\u2190",
    ShortRightArrow: "\u2192",
    ShortUpArrow: "\u2191",
    Sigma: "\u03A3",
    SmallCircle: "\u2218",
    Sopf: "\uD835\uDD4A",
    Sqrt: "\u221A",
    Square: "\u25A1",
    SquareIntersection: "\u2293",
    SquareSubset: "\u228F",
    SquareSubsetEqual: "\u2291",
    SquareSuperset: "\u2290",
    SquareSupersetEqual: "\u2292",
    SquareUnion: "\u2294",
    Sscr: "\uD835\uDCAE",
    Star: "\u22C6",
    Sub: "\u22D0",
    Subset: "\u22D0",
    SubsetEqual: "\u2286",
    Succeeds: "\u227B",
    SucceedsEqual: "\u2AB0",
    SucceedsSlantEqual: "\u227D",
    SucceedsTilde: "\u227F",
    SuchThat: "\u220B",
    Sum: "\u2211",
    Sup: "\u22D1",
    Superset: "\u2283",
    SupersetEqual: "\u2287",
    Supset: "\u22D1",
    THORN: "\xde",
    TRADE: "\u2122",
    TSHcy: "\u040B",
    TScy: "\u0426",
    Tab: "	",
    Tau: "\u03A4",
    Tcaron: "\u0164",
    Tcedil: "\u0162",
    Tcy: "\u0422",
    Tfr: "\uD835\uDD17",
    Therefore: "\u2234",
    Theta: "\u0398",
    ThickSpace: "\u205F\u200A",
    ThinSpace: "\u2009",
    Tilde: "\u223C",
    TildeEqual: "\u2243",
    TildeFullEqual: "\u2245",
    TildeTilde: "\u2248",
    Topf: "\uD835\uDD4B",
    TripleDot: "\u20DB",
    Tscr: "\uD835\uDCAF",
    Tstrok: "\u0166",
    Uacute: "\xda",
    Uarr: "\u219F",
    Uarrocir: "\u2949",
    Ubrcy: "\u040E",
    Ubreve: "\u016C",
    Ucirc: "\xdb",
    Ucy: "\u0423",
    Udblac: "\u0170",
    Ufr: "\uD835\uDD18",
    Ugrave: "\xd9",
    Umacr: "\u016A",
    UnderBar: "_",
    UnderBrace: "\u23DF",
    UnderBracket: "\u23B5",
    UnderParenthesis: "\u23DD",
    Union: "\u22C3",
    UnionPlus: "\u228E",
    Uogon: "\u0172",
    Uopf: "\uD835\uDD4C",
    UpArrow: "\u2191",
    UpArrowBar: "\u2912",
    UpArrowDownArrow: "\u21C5",
    UpDownArrow: "\u2195",
    UpEquilibrium: "\u296E",
    UpTee: "\u22A5",
    UpTeeArrow: "\u21A5",
    Uparrow: "\u21D1",
    Updownarrow: "\u21D5",
    UpperLeftArrow: "\u2196",
    UpperRightArrow: "\u2197",
    Upsi: "\u03D2",
    Upsilon: "\u03A5",
    Uring: "\u016E",
    Uscr: "\uD835\uDCB0",
    Utilde: "\u0168",
    Uuml: "\xdc",
    VDash: "\u22AB",
    Vbar: "\u2AEB",
    Vcy: "\u0412",
    Vdash: "\u22A9",
    Vdashl: "\u2AE6",
    Vee: "\u22C1",
    Verbar: "\u2016",
    Vert: "\u2016",
    VerticalBar: "\u2223",
    VerticalLine: "|",
    VerticalSeparator: "\u2758",
    VerticalTilde: "\u2240",
    VeryThinSpace: "\u200A",
    Vfr: "\uD835\uDD19",
    Vopf: "\uD835\uDD4D",
    Vscr: "\uD835\uDCB1",
    Vvdash: "\u22AA",
    Wcirc: "\u0174",
    Wedge: "\u22C0",
    Wfr: "\uD835\uDD1A",
    Wopf: "\uD835\uDD4E",
    Wscr: "\uD835\uDCB2",
    Xfr: "\uD835\uDD1B",
    Xi: "\u039E",
    Xopf: "\uD835\uDD4F",
    Xscr: "\uD835\uDCB3",
    YAcy: "\u042F",
    YIcy: "\u0407",
    YUcy: "\u042E",
    Yacute: "\xdd",
    Ycirc: "\u0176",
    Ycy: "\u042B",
    Yfr: "\uD835\uDD1C",
    Yopf: "\uD835\uDD50",
    Yscr: "\uD835\uDCB4",
    Yuml: "\u0178",
    ZHcy: "\u0416",
    Zacute: "\u0179",
    Zcaron: "\u017D",
    Zcy: "\u0417",
    Zdot: "\u017B",
    ZeroWidthSpace: "\u200B",
    Zeta: "\u0396",
    Zfr: "\u2128",
    Zopf: "\u2124",
    Zscr: "\uD835\uDCB5",
    aacute: "\xe1",
    abreve: "\u0103",
    ac: "\u223E",
    acE: "\u223E\u0333",
    acd: "\u223F",
    acirc: "\xe2",
    acute: "\xb4",
    acy: "\u0430",
    aelig: "\xe6",
    af: "\u2061",
    afr: "\uD835\uDD1E",
    agrave: "\xe0",
    alefsym: "\u2135",
    aleph: "\u2135",
    alpha: "\u03B1",
    amacr: "\u0101",
    amalg: "\u2A3F",
    amp: "&",
    and: "\u2227",
    andand: "\u2A55",
    andd: "\u2A5C",
    andslope: "\u2A58",
    andv: "\u2A5A",
    ang: "\u2220",
    ange: "\u29A4",
    angle: "\u2220",
    angmsd: "\u2221",
    angmsdaa: "\u29A8",
    angmsdab: "\u29A9",
    angmsdac: "\u29AA",
    angmsdad: "\u29AB",
    angmsdae: "\u29AC",
    angmsdaf: "\u29AD",
    angmsdag: "\u29AE",
    angmsdah: "\u29AF",
    angrt: "\u221F",
    angrtvb: "\u22BE",
    angrtvbd: "\u299D",
    angsph: "\u2222",
    angst: "\xc5",
    angzarr: "\u237C",
    aogon: "\u0105",
    aopf: "\uD835\uDD52",
    ap: "\u2248",
    apE: "\u2A70",
    apacir: "\u2A6F",
    ape: "\u224A",
    apid: "\u224B",
    apos: "'",
    approx: "\u2248",
    approxeq: "\u224A",
    aring: "\xe5",
    ascr: "\uD835\uDCB6",
    ast: "*",
    asymp: "\u2248",
    asympeq: "\u224D",
    atilde: "\xe3",
    auml: "\xe4",
    awconint: "\u2233",
    awint: "\u2A11",
    bNot: "\u2AED",
    backcong: "\u224C",
    backepsilon: "\u03F6",
    backprime: "\u2035",
    backsim: "\u223D",
    backsimeq: "\u22CD",
    barvee: "\u22BD",
    barwed: "\u2305",
    barwedge: "\u2305",
    bbrk: "\u23B5",
    bbrktbrk: "\u23B6",
    bcong: "\u224C",
    bcy: "\u0431",
    bdquo: "\u201E",
    becaus: "\u2235",
    because: "\u2235",
    bemptyv: "\u29B0",
    bepsi: "\u03F6",
    bernou: "\u212C",
    beta: "\u03B2",
    beth: "\u2136",
    between: "\u226C",
    bfr: "\uD835\uDD1F",
    bigcap: "\u22C2",
    bigcirc: "\u25EF",
    bigcup: "\u22C3",
    bigodot: "\u2A00",
    bigoplus: "\u2A01",
    bigotimes: "\u2A02",
    bigsqcup: "\u2A06",
    bigstar: "\u2605",
    bigtriangledown: "\u25BD",
    bigtriangleup: "\u25B3",
    biguplus: "\u2A04",
    bigvee: "\u22C1",
    bigwedge: "\u22C0",
    bkarow: "\u290D",
    blacklozenge: "\u29EB",
    blacksquare: "\u25AA",
    blacktriangle: "\u25B4",
    blacktriangledown: "\u25BE",
    blacktriangleleft: "\u25C2",
    blacktriangleright: "\u25B8",
    blank: "\u2423",
    blk12: "\u2592",
    blk14: "\u2591",
    blk34: "\u2593",
    block: "\u2588",
    bne: "=\u20E5",
    bnequiv: "\u2261\u20E5",
    bnot: "\u2310",
    bopf: "\uD835\uDD53",
    bot: "\u22A5",
    bottom: "\u22A5",
    bowtie: "\u22C8",
    boxDL: "\u2557",
    boxDR: "\u2554",
    boxDl: "\u2556",
    boxDr: "\u2553",
    boxH: "\u2550",
    boxHD: "\u2566",
    boxHU: "\u2569",
    boxHd: "\u2564",
    boxHu: "\u2567",
    boxUL: "\u255D",
    boxUR: "\u255A",
    boxUl: "\u255C",
    boxUr: "\u2559",
    boxV: "\u2551",
    boxVH: "\u256C",
    boxVL: "\u2563",
    boxVR: "\u2560",
    boxVh: "\u256B",
    boxVl: "\u2562",
    boxVr: "\u255F",
    boxbox: "\u29C9",
    boxdL: "\u2555",
    boxdR: "\u2552",
    boxdl: "\u2510",
    boxdr: "\u250C",
    boxh: "\u2500",
    boxhD: "\u2565",
    boxhU: "\u2568",
    boxhd: "\u252C",
    boxhu: "\u2534",
    boxminus: "\u229F",
    boxplus: "\u229E",
    boxtimes: "\u22A0",
    boxuL: "\u255B",
    boxuR: "\u2558",
    boxul: "\u2518",
    boxur: "\u2514",
    boxv: "\u2502",
    boxvH: "\u256A",
    boxvL: "\u2561",
    boxvR: "\u255E",
    boxvh: "\u253C",
    boxvl: "\u2524",
    boxvr: "\u251C",
    bprime: "\u2035",
    breve: "\u02D8",
    brvbar: "\xa6",
    bscr: "\uD835\uDCB7",
    bsemi: "\u204F",
    bsim: "\u223D",
    bsime: "\u22CD",
    bsol: "\\",
    bsolb: "\u29C5",
    bsolhsub: "\u27C8",
    bull: "\u2022",
    bullet: "\u2022",
    bump: "\u224E",
    bumpE: "\u2AAE",
    bumpe: "\u224F",
    bumpeq: "\u224F",
    cacute: "\u0107",
    cap: "\u2229",
    capand: "\u2A44",
    capbrcup: "\u2A49",
    capcap: "\u2A4B",
    capcup: "\u2A47",
    capdot: "\u2A40",
    caps: "\u2229\uFE00",
    caret: "\u2041",
    caron: "\u02C7",
    ccaps: "\u2A4D",
    ccaron: "\u010D",
    ccedil: "\xe7",
    ccirc: "\u0109",
    ccups: "\u2A4C",
    ccupssm: "\u2A50",
    cdot: "\u010B",
    cedil: "\xb8",
    cemptyv: "\u29B2",
    cent: "\xa2",
    centerdot: "\xb7",
    cfr: "\uD835\uDD20",
    chcy: "\u0447",
    check: "\u2713",
    checkmark: "\u2713",
    chi: "\u03C7",
    cir: "\u25CB",
    cirE: "\u29C3",
    circ: "\u02C6",
    circeq: "\u2257",
    circlearrowleft: "\u21BA",
    circlearrowright: "\u21BB",
    circledR: "\xae",
    circledS: "\u24C8",
    circledast: "\u229B",
    circledcirc: "\u229A",
    circleddash: "\u229D",
    cire: "\u2257",
    cirfnint: "\u2A10",
    cirmid: "\u2AEF",
    cirscir: "\u29C2",
    clubs: "\u2663",
    clubsuit: "\u2663",
    colon: ":",
    colone: "\u2254",
    coloneq: "\u2254",
    comma: ",",
    commat: "@",
    comp: "\u2201",
    compfn: "\u2218",
    complement: "\u2201",
    complexes: "\u2102",
    cong: "\u2245",
    congdot: "\u2A6D",
    conint: "\u222E",
    copf: "\uD835\uDD54",
    coprod: "\u2210",
    copy: "\xa9",
    copysr: "\u2117",
    crarr: "\u21B5",
    cross: "\u2717",
    cscr: "\uD835\uDCB8",
    csub: "\u2ACF",
    csube: "\u2AD1",
    csup: "\u2AD0",
    csupe: "\u2AD2",
    ctdot: "\u22EF",
    cudarrl: "\u2938",
    cudarrr: "\u2935",
    cuepr: "\u22DE",
    cuesc: "\u22DF",
    cularr: "\u21B6",
    cularrp: "\u293D",
    cup: "\u222A",
    cupbrcap: "\u2A48",
    cupcap: "\u2A46",
    cupcup: "\u2A4A",
    cupdot: "\u228D",
    cupor: "\u2A45",
    cups: "\u222A\uFE00",
    curarr: "\u21B7",
    curarrm: "\u293C",
    curlyeqprec: "\u22DE",
    curlyeqsucc: "\u22DF",
    curlyvee: "\u22CE",
    curlywedge: "\u22CF",
    curren: "\xa4",
    curvearrowleft: "\u21B6",
    curvearrowright: "\u21B7",
    cuvee: "\u22CE",
    cuwed: "\u22CF",
    cwconint: "\u2232",
    cwint: "\u2231",
    cylcty: "\u232D",
    dArr: "\u21D3",
    dHar: "\u2965",
    dagger: "\u2020",
    daleth: "\u2138",
    darr: "\u2193",
    dash: "\u2010",
    dashv: "\u22A3",
    dbkarow: "\u290F",
    dblac: "\u02DD",
    dcaron: "\u010F",
    dcy: "\u0434",
    dd: "\u2146",
    ddagger: "\u2021",
    ddarr: "\u21CA",
    ddotseq: "\u2A77",
    deg: "\xb0",
    delta: "\u03B4",
    demptyv: "\u29B1",
    dfisht: "\u297F",
    dfr: "\uD835\uDD21",
    dharl: "\u21C3",
    dharr: "\u21C2",
    diam: "\u22C4",
    diamond: "\u22C4",
    diamondsuit: "\u2666",
    diams: "\u2666",
    die: "\xa8",
    digamma: "\u03DD",
    disin: "\u22F2",
    div: "\xf7",
    divide: "\xf7",
    divideontimes: "\u22C7",
    divonx: "\u22C7",
    djcy: "\u0452",
    dlcorn: "\u231E",
    dlcrop: "\u230D",
    dollar: "$",
    dopf: "\uD835\uDD55",
    dot: "\u02D9",
    doteq: "\u2250",
    doteqdot: "\u2251",
    dotminus: "\u2238",
    dotplus: "\u2214",
    dotsquare: "\u22A1",
    doublebarwedge: "\u2306",
    downarrow: "\u2193",
    downdownarrows: "\u21CA",
    downharpoonleft: "\u21C3",
    downharpoonright: "\u21C2",
    drbkarow: "\u2910",
    drcorn: "\u231F",
    drcrop: "\u230C",
    dscr: "\uD835\uDCB9",
    dscy: "\u0455",
    dsol: "\u29F6",
    dstrok: "\u0111",
    dtdot: "\u22F1",
    dtri: "\u25BF",
    dtrif: "\u25BE",
    duarr: "\u21F5",
    duhar: "\u296F",
    dwangle: "\u29A6",
    dzcy: "\u045F",
    dzigrarr: "\u27FF",
    eDDot: "\u2A77",
    eDot: "\u2251",
    eacute: "\xe9",
    easter: "\u2A6E",
    ecaron: "\u011B",
    ecir: "\u2256",
    ecirc: "\xea",
    ecolon: "\u2255",
    ecy: "\u044D",
    edot: "\u0117",
    ee: "\u2147",
    efDot: "\u2252",
    efr: "\uD835\uDD22",
    eg: "\u2A9A",
    egrave: "\xe8",
    egs: "\u2A96",
    egsdot: "\u2A98",
    el: "\u2A99",
    elinters: "\u23E7",
    ell: "\u2113",
    els: "\u2A95",
    elsdot: "\u2A97",
    emacr: "\u0113",
    empty: "\u2205",
    emptyset: "\u2205",
    emptyv: "\u2205",
    emsp13: "\u2004",
    emsp14: "\u2005",
    emsp: "\u2003",
    eng: "\u014B",
    ensp: "\u2002",
    eogon: "\u0119",
    eopf: "\uD835\uDD56",
    epar: "\u22D5",
    eparsl: "\u29E3",
    eplus: "\u2A71",
    epsi: "\u03B5",
    epsilon: "\u03B5",
    epsiv: "\u03F5",
    eqcirc: "\u2256",
    eqcolon: "\u2255",
    eqsim: "\u2242",
    eqslantgtr: "\u2A96",
    eqslantless: "\u2A95",
    equals: "=",
    equest: "\u225F",
    equiv: "\u2261",
    equivDD: "\u2A78",
    eqvparsl: "\u29E5",
    erDot: "\u2253",
    erarr: "\u2971",
    escr: "\u212F",
    esdot: "\u2250",
    esim: "\u2242",
    eta: "\u03B7",
    eth: "\xf0",
    euml: "\xeb",
    euro: "\u20AC",
    excl: "!",
    exist: "\u2203",
    expectation: "\u2130",
    exponentiale: "\u2147",
    fallingdotseq: "\u2252",
    fcy: "\u0444",
    female: "\u2640",
    ffilig: "\uFB03",
    fflig: "\uFB00",
    ffllig: "\uFB04",
    ffr: "\uD835\uDD23",
    filig: "\uFB01",
    fjlig: "fj",
    flat: "\u266D",
    fllig: "\uFB02",
    fltns: "\u25B1",
    fnof: "\u0192",
    fopf: "\uD835\uDD57",
    forall: "\u2200",
    fork: "\u22D4",
    forkv: "\u2AD9",
    fpartint: "\u2A0D",
    frac12: "\xbd",
    frac13: "\u2153",
    frac14: "\xbc",
    frac15: "\u2155",
    frac16: "\u2159",
    frac18: "\u215B",
    frac23: "\u2154",
    frac25: "\u2156",
    frac34: "\xbe",
    frac35: "\u2157",
    frac38: "\u215C",
    frac45: "\u2158",
    frac56: "\u215A",
    frac58: "\u215D",
    frac78: "\u215E",
    frasl: "\u2044",
    frown: "\u2322",
    fscr: "\uD835\uDCBB",
    gE: "\u2267",
    gEl: "\u2A8C",
    gacute: "\u01F5",
    gamma: "\u03B3",
    gammad: "\u03DD",
    gap: "\u2A86",
    gbreve: "\u011F",
    gcirc: "\u011D",
    gcy: "\u0433",
    gdot: "\u0121",
    ge: "\u2265",
    gel: "\u22DB",
    geq: "\u2265",
    geqq: "\u2267",
    geqslant: "\u2A7E",
    ges: "\u2A7E",
    gescc: "\u2AA9",
    gesdot: "\u2A80",
    gesdoto: "\u2A82",
    gesdotol: "\u2A84",
    gesl: "\u22DB\uFE00",
    gesles: "\u2A94",
    gfr: "\uD835\uDD24",
    gg: "\u226B",
    ggg: "\u22D9",
    gimel: "\u2137",
    gjcy: "\u0453",
    gl: "\u2277",
    glE: "\u2A92",
    gla: "\u2AA5",
    glj: "\u2AA4",
    gnE: "\u2269",
    gnap: "\u2A8A",
    gnapprox: "\u2A8A",
    gne: "\u2A88",
    gneq: "\u2A88",
    gneqq: "\u2269",
    gnsim: "\u22E7",
    gopf: "\uD835\uDD58",
    grave: "`",
    gscr: "\u210A",
    gsim: "\u2273",
    gsime: "\u2A8E",
    gsiml: "\u2A90",
    gt: ">",
    gtcc: "\u2AA7",
    gtcir: "\u2A7A",
    gtdot: "\u22D7",
    gtlPar: "\u2995",
    gtquest: "\u2A7C",
    gtrapprox: "\u2A86",
    gtrarr: "\u2978",
    gtrdot: "\u22D7",
    gtreqless: "\u22DB",
    gtreqqless: "\u2A8C",
    gtrless: "\u2277",
    gtrsim: "\u2273",
    gvertneqq: "\u2269\uFE00",
    gvnE: "\u2269\uFE00",
    hArr: "\u21D4",
    hairsp: "\u200A",
    half: "\xbd",
    hamilt: "\u210B",
    hardcy: "\u044A",
    harr: "\u2194",
    harrcir: "\u2948",
    harrw: "\u21AD",
    hbar: "\u210F",
    hcirc: "\u0125",
    hearts: "\u2665",
    heartsuit: "\u2665",
    hellip: "\u2026",
    hercon: "\u22B9",
    hfr: "\uD835\uDD25",
    hksearow: "\u2925",
    hkswarow: "\u2926",
    hoarr: "\u21FF",
    homtht: "\u223B",
    hookleftarrow: "\u21A9",
    hookrightarrow: "\u21AA",
    hopf: "\uD835\uDD59",
    horbar: "\u2015",
    hscr: "\uD835\uDCBD",
    hslash: "\u210F",
    hstrok: "\u0127",
    hybull: "\u2043",
    hyphen: "\u2010",
    iacute: "\xed",
    ic: "\u2063",
    icirc: "\xee",
    icy: "\u0438",
    iecy: "\u0435",
    iexcl: "\xa1",
    iff: "\u21D4",
    ifr: "\uD835\uDD26",
    igrave: "\xec",
    ii: "\u2148",
    iiiint: "\u2A0C",
    iiint: "\u222D",
    iinfin: "\u29DC",
    iiota: "\u2129",
    ijlig: "\u0133",
    imacr: "\u012B",
    image: "\u2111",
    imagline: "\u2110",
    imagpart: "\u2111",
    imath: "\u0131",
    imof: "\u22B7",
    imped: "\u01B5",
    in: "\u2208",
    incare: "\u2105",
    infin: "\u221E",
    infintie: "\u29DD",
    inodot: "\u0131",
    int: "\u222B",
    intcal: "\u22BA",
    integers: "\u2124",
    intercal: "\u22BA",
    intlarhk: "\u2A17",
    intprod: "\u2A3C",
    iocy: "\u0451",
    iogon: "\u012F",
    iopf: "\uD835\uDD5A",
    iota: "\u03B9",
    iprod: "\u2A3C",
    iquest: "\xbf",
    iscr: "\uD835\uDCBE",
    isin: "\u2208",
    isinE: "\u22F9",
    isindot: "\u22F5",
    isins: "\u22F4",
    isinsv: "\u22F3",
    isinv: "\u2208",
    it: "\u2062",
    itilde: "\u0129",
    iukcy: "\u0456",
    iuml: "\xef",
    jcirc: "\u0135",
    jcy: "\u0439",
    jfr: "\uD835\uDD27",
    jmath: "\u0237",
    jopf: "\uD835\uDD5B",
    jscr: "\uD835\uDCBF",
    jsercy: "\u0458",
    jukcy: "\u0454",
    kappa: "\u03BA",
    kappav: "\u03F0",
    kcedil: "\u0137",
    kcy: "\u043A",
    kfr: "\uD835\uDD28",
    kgreen: "\u0138",
    khcy: "\u0445",
    kjcy: "\u045C",
    kopf: "\uD835\uDD5C",
    kscr: "\uD835\uDCC0",
    lAarr: "\u21DA",
    lArr: "\u21D0",
    lAtail: "\u291B",
    lBarr: "\u290E",
    lE: "\u2266",
    lEg: "\u2A8B",
    lHar: "\u2962",
    lacute: "\u013A",
    laemptyv: "\u29B4",
    lagran: "\u2112",
    lambda: "\u03BB",
    lang: "\u27E8",
    langd: "\u2991",
    langle: "\u27E8",
    lap: "\u2A85",
    laquo: "\xab",
    larr: "\u2190",
    larrb: "\u21E4",
    larrbfs: "\u291F",
    larrfs: "\u291D",
    larrhk: "\u21A9",
    larrlp: "\u21AB",
    larrpl: "\u2939",
    larrsim: "\u2973",
    larrtl: "\u21A2",
    lat: "\u2AAB",
    latail: "\u2919",
    late: "\u2AAD",
    lates: "\u2AAD\uFE00",
    lbarr: "\u290C",
    lbbrk: "\u2772",
    lbrace: "{",
    lbrack: "[",
    lbrke: "\u298B",
    lbrksld: "\u298F",
    lbrkslu: "\u298D",
    lcaron: "\u013E",
    lcedil: "\u013C",
    lceil: "\u2308",
    lcub: "{",
    lcy: "\u043B",
    ldca: "\u2936",
    ldquo: "\u201C",
    ldquor: "\u201E",
    ldrdhar: "\u2967",
    ldrushar: "\u294B",
    ldsh: "\u21B2",
    le: "\u2264",
    leftarrow: "\u2190",
    leftarrowtail: "\u21A2",
    leftharpoondown: "\u21BD",
    leftharpoonup: "\u21BC",
    leftleftarrows: "\u21C7",
    leftrightarrow: "\u2194",
    leftrightarrows: "\u21C6",
    leftrightharpoons: "\u21CB",
    leftrightsquigarrow: "\u21AD",
    leftthreetimes: "\u22CB",
    leg: "\u22DA",
    leq: "\u2264",
    leqq: "\u2266",
    leqslant: "\u2A7D",
    les: "\u2A7D",
    lescc: "\u2AA8",
    lesdot: "\u2A7F",
    lesdoto: "\u2A81",
    lesdotor: "\u2A83",
    lesg: "\u22DA\uFE00",
    lesges: "\u2A93",
    lessapprox: "\u2A85",
    lessdot: "\u22D6",
    lesseqgtr: "\u22DA",
    lesseqqgtr: "\u2A8B",
    lessgtr: "\u2276",
    lesssim: "\u2272",
    lfisht: "\u297C",
    lfloor: "\u230A",
    lfr: "\uD835\uDD29",
    lg: "\u2276",
    lgE: "\u2A91",
    lhard: "\u21BD",
    lharu: "\u21BC",
    lharul: "\u296A",
    lhblk: "\u2584",
    ljcy: "\u0459",
    ll: "\u226A",
    llarr: "\u21C7",
    llcorner: "\u231E",
    llhard: "\u296B",
    lltri: "\u25FA",
    lmidot: "\u0140",
    lmoust: "\u23B0",
    lmoustache: "\u23B0",
    lnE: "\u2268",
    lnap: "\u2A89",
    lnapprox: "\u2A89",
    lne: "\u2A87",
    lneq: "\u2A87",
    lneqq: "\u2268",
    lnsim: "\u22E6",
    loang: "\u27EC",
    loarr: "\u21FD",
    lobrk: "\u27E6",
    longleftarrow: "\u27F5",
    longleftrightarrow: "\u27F7",
    longmapsto: "\u27FC",
    longrightarrow: "\u27F6",
    looparrowleft: "\u21AB",
    looparrowright: "\u21AC",
    lopar: "\u2985",
    lopf: "\uD835\uDD5D",
    loplus: "\u2A2D",
    lotimes: "\u2A34",
    lowast: "\u2217",
    lowbar: "_",
    loz: "\u25CA",
    lozenge: "\u25CA",
    lozf: "\u29EB",
    lpar: "(",
    lparlt: "\u2993",
    lrarr: "\u21C6",
    lrcorner: "\u231F",
    lrhar: "\u21CB",
    lrhard: "\u296D",
    lrm: "\u200E",
    lrtri: "\u22BF",
    lsaquo: "\u2039",
    lscr: "\uD835\uDCC1",
    lsh: "\u21B0",
    lsim: "\u2272",
    lsime: "\u2A8D",
    lsimg: "\u2A8F",
    lsqb: "[",
    lsquo: "\u2018",
    lsquor: "\u201A",
    lstrok: "\u0142",
    lt: "<",
    ltcc: "\u2AA6",
    ltcir: "\u2A79",
    ltdot: "\u22D6",
    lthree: "\u22CB",
    ltimes: "\u22C9",
    ltlarr: "\u2976",
    ltquest: "\u2A7B",
    ltrPar: "\u2996",
    ltri: "\u25C3",
    ltrie: "\u22B4",
    ltrif: "\u25C2",
    lurdshar: "\u294A",
    luruhar: "\u2966",
    lvertneqq: "\u2268\uFE00",
    lvnE: "\u2268\uFE00",
    mDDot: "\u223A",
    macr: "\xaf",
    male: "\u2642",
    malt: "\u2720",
    maltese: "\u2720",
    map: "\u21A6",
    mapsto: "\u21A6",
    mapstodown: "\u21A7",
    mapstoleft: "\u21A4",
    mapstoup: "\u21A5",
    marker: "\u25AE",
    mcomma: "\u2A29",
    mcy: "\u043C",
    mdash: "\u2014",
    measuredangle: "\u2221",
    mfr: "\uD835\uDD2A",
    mho: "\u2127",
    micro: "\xb5",
    mid: "\u2223",
    midast: "*",
    midcir: "\u2AF0",
    middot: "\xb7",
    minus: "\u2212",
    minusb: "\u229F",
    minusd: "\u2238",
    minusdu: "\u2A2A",
    mlcp: "\u2ADB",
    mldr: "\u2026",
    mnplus: "\u2213",
    models: "\u22A7",
    mopf: "\uD835\uDD5E",
    mp: "\u2213",
    mscr: "\uD835\uDCC2",
    mstpos: "\u223E",
    mu: "\u03BC",
    multimap: "\u22B8",
    mumap: "\u22B8",
    nGg: "\u22D9\u0338",
    nGt: "\u226B\u20D2",
    nGtv: "\u226B\u0338",
    nLeftarrow: "\u21CD",
    nLeftrightarrow: "\u21CE",
    nLl: "\u22D8\u0338",
    nLt: "\u226A\u20D2",
    nLtv: "\u226A\u0338",
    nRightarrow: "\u21CF",
    nVDash: "\u22AF",
    nVdash: "\u22AE",
    nabla: "\u2207",
    nacute: "\u0144",
    nang: "\u2220\u20D2",
    nap: "\u2249",
    napE: "\u2A70\u0338",
    napid: "\u224B\u0338",
    napos: "\u0149",
    napprox: "\u2249",
    natur: "\u266E",
    natural: "\u266E",
    naturals: "\u2115",
    nbsp: "\xa0",
    nbump: "\u224E\u0338",
    nbumpe: "\u224F\u0338",
    ncap: "\u2A43",
    ncaron: "\u0148",
    ncedil: "\u0146",
    ncong: "\u2247",
    ncongdot: "\u2A6D\u0338",
    ncup: "\u2A42",
    ncy: "\u043D",
    ndash: "\u2013",
    ne: "\u2260",
    neArr: "\u21D7",
    nearhk: "\u2924",
    nearr: "\u2197",
    nearrow: "\u2197",
    nedot: "\u2250\u0338",
    nequiv: "\u2262",
    nesear: "\u2928",
    nesim: "\u2242\u0338",
    nexist: "\u2204",
    nexists: "\u2204",
    nfr: "\uD835\uDD2B",
    ngE: "\u2267\u0338",
    nge: "\u2271",
    ngeq: "\u2271",
    ngeqq: "\u2267\u0338",
    ngeqslant: "\u2A7E\u0338",
    nges: "\u2A7E\u0338",
    ngsim: "\u2275",
    ngt: "\u226F",
    ngtr: "\u226F",
    nhArr: "\u21CE",
    nharr: "\u21AE",
    nhpar: "\u2AF2",
    ni: "\u220B",
    nis: "\u22FC",
    nisd: "\u22FA",
    niv: "\u220B",
    njcy: "\u045A",
    nlArr: "\u21CD",
    nlE: "\u2266\u0338",
    nlarr: "\u219A",
    nldr: "\u2025",
    nle: "\u2270",
    nleftarrow: "\u219A",
    nleftrightarrow: "\u21AE",
    nleq: "\u2270",
    nleqq: "\u2266\u0338",
    nleqslant: "\u2A7D\u0338",
    nles: "\u2A7D\u0338",
    nless: "\u226E",
    nlsim: "\u2274",
    nlt: "\u226E",
    nltri: "\u22EA",
    nltrie: "\u22EC",
    nmid: "\u2224",
    nopf: "\uD835\uDD5F",
    not: "\xac",
    notin: "\u2209",
    notinE: "\u22F9\u0338",
    notindot: "\u22F5\u0338",
    notinva: "\u2209",
    notinvb: "\u22F7",
    notinvc: "\u22F6",
    notni: "\u220C",
    notniva: "\u220C",
    notnivb: "\u22FE",
    notnivc: "\u22FD",
    npar: "\u2226",
    nparallel: "\u2226",
    nparsl: "\u2AFD\u20E5",
    npart: "\u2202\u0338",
    npolint: "\u2A14",
    npr: "\u2280",
    nprcue: "\u22E0",
    npre: "\u2AAF\u0338",
    nprec: "\u2280",
    npreceq: "\u2AAF\u0338",
    nrArr: "\u21CF",
    nrarr: "\u219B",
    nrarrc: "\u2933\u0338",
    nrarrw: "\u219D\u0338",
    nrightarrow: "\u219B",
    nrtri: "\u22EB",
    nrtrie: "\u22ED",
    nsc: "\u2281",
    nsccue: "\u22E1",
    nsce: "\u2AB0\u0338",
    nscr: "\uD835\uDCC3",
    nshortmid: "\u2224",
    nshortparallel: "\u2226",
    nsim: "\u2241",
    nsime: "\u2244",
    nsimeq: "\u2244",
    nsmid: "\u2224",
    nspar: "\u2226",
    nsqsube: "\u22E2",
    nsqsupe: "\u22E3",
    nsub: "\u2284",
    nsubE: "\u2AC5\u0338",
    nsube: "\u2288",
    nsubset: "\u2282\u20D2",
    nsubseteq: "\u2288",
    nsubseteqq: "\u2AC5\u0338",
    nsucc: "\u2281",
    nsucceq: "\u2AB0\u0338",
    nsup: "\u2285",
    nsupE: "\u2AC6\u0338",
    nsupe: "\u2289",
    nsupset: "\u2283\u20D2",
    nsupseteq: "\u2289",
    nsupseteqq: "\u2AC6\u0338",
    ntgl: "\u2279",
    ntilde: "\xf1",
    ntlg: "\u2278",
    ntriangleleft: "\u22EA",
    ntrianglelefteq: "\u22EC",
    ntriangleright: "\u22EB",
    ntrianglerighteq: "\u22ED",
    nu: "\u03BD",
    num: "#",
    numero: "\u2116",
    numsp: "\u2007",
    nvDash: "\u22AD",
    nvHarr: "\u2904",
    nvap: "\u224D\u20D2",
    nvdash: "\u22AC",
    nvge: "\u2265\u20D2",
    nvgt: ">\u20D2",
    nvinfin: "\u29DE",
    nvlArr: "\u2902",
    nvle: "\u2264\u20D2",
    nvlt: "<\u20D2",
    nvltrie: "\u22B4\u20D2",
    nvrArr: "\u2903",
    nvrtrie: "\u22B5\u20D2",
    nvsim: "\u223C\u20D2",
    nwArr: "\u21D6",
    nwarhk: "\u2923",
    nwarr: "\u2196",
    nwarrow: "\u2196",
    nwnear: "\u2927",
    oS: "\u24C8",
    oacute: "\xf3",
    oast: "\u229B",
    ocir: "\u229A",
    ocirc: "\xf4",
    ocy: "\u043E",
    odash: "\u229D",
    odblac: "\u0151",
    odiv: "\u2A38",
    odot: "\u2299",
    odsold: "\u29BC",
    oelig: "\u0153",
    ofcir: "\u29BF",
    ofr: "\uD835\uDD2C",
    ogon: "\u02DB",
    ograve: "\xf2",
    ogt: "\u29C1",
    ohbar: "\u29B5",
    ohm: "\u03A9",
    oint: "\u222E",
    olarr: "\u21BA",
    olcir: "\u29BE",
    olcross: "\u29BB",
    oline: "\u203E",
    olt: "\u29C0",
    omacr: "\u014D",
    omega: "\u03C9",
    omicron: "\u03BF",
    omid: "\u29B6",
    ominus: "\u2296",
    oopf: "\uD835\uDD60",
    opar: "\u29B7",
    operp: "\u29B9",
    oplus: "\u2295",
    or: "\u2228",
    orarr: "\u21BB",
    ord: "\u2A5D",
    order: "\u2134",
    orderof: "\u2134",
    ordf: "\xaa",
    ordm: "\xba",
    origof: "\u22B6",
    oror: "\u2A56",
    orslope: "\u2A57",
    orv: "\u2A5B",
    oscr: "\u2134",
    oslash: "\xf8",
    osol: "\u2298",
    otilde: "\xf5",
    otimes: "\u2297",
    otimesas: "\u2A36",
    ouml: "\xf6",
    ovbar: "\u233D",
    par: "\u2225",
    para: "\xb6",
    parallel: "\u2225",
    parsim: "\u2AF3",
    parsl: "\u2AFD",
    part: "\u2202",
    pcy: "\u043F",
    percnt: "%",
    period: ".",
    permil: "\u2030",
    perp: "\u22A5",
    pertenk: "\u2031",
    pfr: "\uD835\uDD2D",
    phi: "\u03C6",
    phiv: "\u03D5",
    phmmat: "\u2133",
    phone: "\u260E",
    pi: "\u03C0",
    pitchfork: "\u22D4",
    piv: "\u03D6",
    planck: "\u210F",
    planckh: "\u210E",
    plankv: "\u210F",
    plus: "+",
    plusacir: "\u2A23",
    plusb: "\u229E",
    pluscir: "\u2A22",
    plusdo: "\u2214",
    plusdu: "\u2A25",
    pluse: "\u2A72",
    plusmn: "\xb1",
    plussim: "\u2A26",
    plustwo: "\u2A27",
    pm: "\xb1",
    pointint: "\u2A15",
    popf: "\uD835\uDD61",
    pound: "\xa3",
    pr: "\u227A",
    prE: "\u2AB3",
    prap: "\u2AB7",
    prcue: "\u227C",
    pre: "\u2AAF",
    prec: "\u227A",
    precapprox: "\u2AB7",
    preccurlyeq: "\u227C",
    preceq: "\u2AAF",
    precnapprox: "\u2AB9",
    precneqq: "\u2AB5",
    precnsim: "\u22E8",
    precsim: "\u227E",
    prime: "\u2032",
    primes: "\u2119",
    prnE: "\u2AB5",
    prnap: "\u2AB9",
    prnsim: "\u22E8",
    prod: "\u220F",
    profalar: "\u232E",
    profline: "\u2312",
    profsurf: "\u2313",
    prop: "\u221D",
    propto: "\u221D",
    prsim: "\u227E",
    prurel: "\u22B0",
    pscr: "\uD835\uDCC5",
    psi: "\u03C8",
    puncsp: "\u2008",
    qfr: "\uD835\uDD2E",
    qint: "\u2A0C",
    qopf: "\uD835\uDD62",
    qprime: "\u2057",
    qscr: "\uD835\uDCC6",
    quaternions: "\u210D",
    quatint: "\u2A16",
    quest: "?",
    questeq: "\u225F",
    quot: '"',
    rAarr: "\u21DB",
    rArr: "\u21D2",
    rAtail: "\u291C",
    rBarr: "\u290F",
    rHar: "\u2964",
    race: "\u223D\u0331",
    racute: "\u0155",
    radic: "\u221A",
    raemptyv: "\u29B3",
    rang: "\u27E9",
    rangd: "\u2992",
    range: "\u29A5",
    rangle: "\u27E9",
    raquo: "\xbb",
    rarr: "\u2192",
    rarrap: "\u2975",
    rarrb: "\u21E5",
    rarrbfs: "\u2920",
    rarrc: "\u2933",
    rarrfs: "\u291E",
    rarrhk: "\u21AA",
    rarrlp: "\u21AC",
    rarrpl: "\u2945",
    rarrsim: "\u2974",
    rarrtl: "\u21A3",
    rarrw: "\u219D",
    ratail: "\u291A",
    ratio: "\u2236",
    rationals: "\u211A",
    rbarr: "\u290D",
    rbbrk: "\u2773",
    rbrace: "}",
    rbrack: "]",
    rbrke: "\u298C",
    rbrksld: "\u298E",
    rbrkslu: "\u2990",
    rcaron: "\u0159",
    rcedil: "\u0157",
    rceil: "\u2309",
    rcub: "}",
    rcy: "\u0440",
    rdca: "\u2937",
    rdldhar: "\u2969",
    rdquo: "\u201D",
    rdquor: "\u201D",
    rdsh: "\u21B3",
    real: "\u211C",
    realine: "\u211B",
    realpart: "\u211C",
    reals: "\u211D",
    rect: "\u25AD",
    reg: "\xae",
    rfisht: "\u297D",
    rfloor: "\u230B",
    rfr: "\uD835\uDD2F",
    rhard: "\u21C1",
    rharu: "\u21C0",
    rharul: "\u296C",
    rho: "\u03C1",
    rhov: "\u03F1",
    rightarrow: "\u2192",
    rightarrowtail: "\u21A3",
    rightharpoondown: "\u21C1",
    rightharpoonup: "\u21C0",
    rightleftarrows: "\u21C4",
    rightleftharpoons: "\u21CC",
    rightrightarrows: "\u21C9",
    rightsquigarrow: "\u219D",
    rightthreetimes: "\u22CC",
    ring: "\u02DA",
    risingdotseq: "\u2253",
    rlarr: "\u21C4",
    rlhar: "\u21CC",
    rlm: "\u200F",
    rmoust: "\u23B1",
    rmoustache: "\u23B1",
    rnmid: "\u2AEE",
    roang: "\u27ED",
    roarr: "\u21FE",
    robrk: "\u27E7",
    ropar: "\u2986",
    ropf: "\uD835\uDD63",
    roplus: "\u2A2E",
    rotimes: "\u2A35",
    rpar: ")",
    rpargt: "\u2994",
    rppolint: "\u2A12",
    rrarr: "\u21C9",
    rsaquo: "\u203A",
    rscr: "\uD835\uDCC7",
    rsh: "\u21B1",
    rsqb: "]",
    rsquo: "\u2019",
    rsquor: "\u2019",
    rthree: "\u22CC",
    rtimes: "\u22CA",
    rtri: "\u25B9",
    rtrie: "\u22B5",
    rtrif: "\u25B8",
    rtriltri: "\u29CE",
    ruluhar: "\u2968",
    rx: "\u211E",
    sacute: "\u015B",
    sbquo: "\u201A",
    sc: "\u227B",
    scE: "\u2AB4",
    scap: "\u2AB8",
    scaron: "\u0161",
    sccue: "\u227D",
    sce: "\u2AB0",
    scedil: "\u015F",
    scirc: "\u015D",
    scnE: "\u2AB6",
    scnap: "\u2ABA",
    scnsim: "\u22E9",
    scpolint: "\u2A13",
    scsim: "\u227F",
    scy: "\u0441",
    sdot: "\u22C5",
    sdotb: "\u22A1",
    sdote: "\u2A66",
    seArr: "\u21D8",
    searhk: "\u2925",
    searr: "\u2198",
    searrow: "\u2198",
    sect: "\xa7",
    semi: ";",
    seswar: "\u2929",
    setminus: "\u2216",
    setmn: "\u2216",
    sext: "\u2736",
    sfr: "\uD835\uDD30",
    sfrown: "\u2322",
    sharp: "\u266F",
    shchcy: "\u0449",
    shcy: "\u0448",
    shortmid: "\u2223",
    shortparallel: "\u2225",
    shy: "\xad",
    sigma: "\u03C3",
    sigmaf: "\u03C2",
    sigmav: "\u03C2",
    sim: "\u223C",
    simdot: "\u2A6A",
    sime: "\u2243",
    simeq: "\u2243",
    simg: "\u2A9E",
    simgE: "\u2AA0",
    siml: "\u2A9D",
    simlE: "\u2A9F",
    simne: "\u2246",
    simplus: "\u2A24",
    simrarr: "\u2972",
    slarr: "\u2190",
    smallsetminus: "\u2216",
    smashp: "\u2A33",
    smeparsl: "\u29E4",
    smid: "\u2223",
    smile: "\u2323",
    smt: "\u2AAA",
    smte: "\u2AAC",
    smtes: "\u2AAC\uFE00",
    softcy: "\u044C",
    sol: "/",
    solb: "\u29C4",
    solbar: "\u233F",
    sopf: "\uD835\uDD64",
    spades: "\u2660",
    spadesuit: "\u2660",
    spar: "\u2225",
    sqcap: "\u2293",
    sqcaps: "\u2293\uFE00",
    sqcup: "\u2294",
    sqcups: "\u2294\uFE00",
    sqsub: "\u228F",
    sqsube: "\u2291",
    sqsubset: "\u228F",
    sqsubseteq: "\u2291",
    sqsup: "\u2290",
    sqsupe: "\u2292",
    sqsupset: "\u2290",
    sqsupseteq: "\u2292",
    squ: "\u25A1",
    square: "\u25A1",
    squarf: "\u25AA",
    squf: "\u25AA",
    srarr: "\u2192",
    sscr: "\uD835\uDCC8",
    ssetmn: "\u2216",
    ssmile: "\u2323",
    sstarf: "\u22C6",
    star: "\u2606",
    starf: "\u2605",
    straightepsilon: "\u03F5",
    straightphi: "\u03D5",
    strns: "\xaf",
    sub: "\u2282",
    subE: "\u2AC5",
    subdot: "\u2ABD",
    sube: "\u2286",
    subedot: "\u2AC3",
    submult: "\u2AC1",
    subnE: "\u2ACB",
    subne: "\u228A",
    subplus: "\u2ABF",
    subrarr: "\u2979",
    subset: "\u2282",
    subseteq: "\u2286",
    subseteqq: "\u2AC5",
    subsetneq: "\u228A",
    subsetneqq: "\u2ACB",
    subsim: "\u2AC7",
    subsub: "\u2AD5",
    subsup: "\u2AD3",
    succ: "\u227B",
    succapprox: "\u2AB8",
    succcurlyeq: "\u227D",
    succeq: "\u2AB0",
    succnapprox: "\u2ABA",
    succneqq: "\u2AB6",
    succnsim: "\u22E9",
    succsim: "\u227F",
    sum: "\u2211",
    sung: "\u266A",
    sup1: "\xb9",
    sup2: "\xb2",
    sup3: "\xb3",
    sup: "\u2283",
    supE: "\u2AC6",
    supdot: "\u2ABE",
    supdsub: "\u2AD8",
    supe: "\u2287",
    supedot: "\u2AC4",
    suphsol: "\u27C9",
    suphsub: "\u2AD7",
    suplarr: "\u297B",
    supmult: "\u2AC2",
    supnE: "\u2ACC",
    supne: "\u228B",
    supplus: "\u2AC0",
    supset: "\u2283",
    supseteq: "\u2287",
    supseteqq: "\u2AC6",
    supsetneq: "\u228B",
    supsetneqq: "\u2ACC",
    supsim: "\u2AC8",
    supsub: "\u2AD4",
    supsup: "\u2AD6",
    swArr: "\u21D9",
    swarhk: "\u2926",
    swarr: "\u2199",
    swarrow: "\u2199",
    swnwar: "\u292A",
    szlig: "\xdf",
    target: "\u2316",
    tau: "\u03C4",
    tbrk: "\u23B4",
    tcaron: "\u0165",
    tcedil: "\u0163",
    tcy: "\u0442",
    tdot: "\u20DB",
    telrec: "\u2315",
    tfr: "\uD835\uDD31",
    there4: "\u2234",
    therefore: "\u2234",
    theta: "\u03B8",
    thetasym: "\u03D1",
    thetav: "\u03D1",
    thickapprox: "\u2248",
    thicksim: "\u223C",
    thinsp: "\u2009",
    thkap: "\u2248",
    thksim: "\u223C",
    thorn: "\xfe",
    tilde: "\u02DC",
    times: "\xd7",
    timesb: "\u22A0",
    timesbar: "\u2A31",
    timesd: "\u2A30",
    tint: "\u222D",
    toea: "\u2928",
    top: "\u22A4",
    topbot: "\u2336",
    topcir: "\u2AF1",
    topf: "\uD835\uDD65",
    topfork: "\u2ADA",
    tosa: "\u2929",
    tprime: "\u2034",
    trade: "\u2122",
    triangle: "\u25B5",
    triangledown: "\u25BF",
    triangleleft: "\u25C3",
    trianglelefteq: "\u22B4",
    triangleq: "\u225C",
    triangleright: "\u25B9",
    trianglerighteq: "\u22B5",
    tridot: "\u25EC",
    trie: "\u225C",
    triminus: "\u2A3A",
    triplus: "\u2A39",
    trisb: "\u29CD",
    tritime: "\u2A3B",
    trpezium: "\u23E2",
    tscr: "\uD835\uDCC9",
    tscy: "\u0446",
    tshcy: "\u045B",
    tstrok: "\u0167",
    twixt: "\u226C",
    twoheadleftarrow: "\u219E",
    twoheadrightarrow: "\u21A0",
    uArr: "\u21D1",
    uHar: "\u2963",
    uacute: "\xfa",
    uarr: "\u2191",
    ubrcy: "\u045E",
    ubreve: "\u016D",
    ucirc: "\xfb",
    ucy: "\u0443",
    udarr: "\u21C5",
    udblac: "\u0171",
    udhar: "\u296E",
    ufisht: "\u297E",
    ufr: "\uD835\uDD32",
    ugrave: "\xf9",
    uharl: "\u21BF",
    uharr: "\u21BE",
    uhblk: "\u2580",
    ulcorn: "\u231C",
    ulcorner: "\u231C",
    ulcrop: "\u230F",
    ultri: "\u25F8",
    umacr: "\u016B",
    uml: "\xa8",
    uogon: "\u0173",
    uopf: "\uD835\uDD66",
    uparrow: "\u2191",
    updownarrow: "\u2195",
    upharpoonleft: "\u21BF",
    upharpoonright: "\u21BE",
    uplus: "\u228E",
    upsi: "\u03C5",
    upsih: "\u03D2",
    upsilon: "\u03C5",
    upuparrows: "\u21C8",
    urcorn: "\u231D",
    urcorner: "\u231D",
    urcrop: "\u230E",
    uring: "\u016F",
    urtri: "\u25F9",
    uscr: "\uD835\uDCCA",
    utdot: "\u22F0",
    utilde: "\u0169",
    utri: "\u25B5",
    utrif: "\u25B4",
    uuarr: "\u21C8",
    uuml: "\xfc",
    uwangle: "\u29A7",
    vArr: "\u21D5",
    vBar: "\u2AE8",
    vBarv: "\u2AE9",
    vDash: "\u22A8",
    vangrt: "\u299C",
    varepsilon: "\u03F5",
    varkappa: "\u03F0",
    varnothing: "\u2205",
    varphi: "\u03D5",
    varpi: "\u03D6",
    varpropto: "\u221D",
    varr: "\u2195",
    varrho: "\u03F1",
    varsigma: "\u03C2",
    varsubsetneq: "\u228A\uFE00",
    varsubsetneqq: "\u2ACB\uFE00",
    varsupsetneq: "\u228B\uFE00",
    varsupsetneqq: "\u2ACC\uFE00",
    vartheta: "\u03D1",
    vartriangleleft: "\u22B2",
    vartriangleright: "\u22B3",
    vcy: "\u0432",
    vdash: "\u22A2",
    vee: "\u2228",
    veebar: "\u22BB",
    veeeq: "\u225A",
    vellip: "\u22EE",
    verbar: "|",
    vert: "|",
    vfr: "\uD835\uDD33",
    vltri: "\u22B2",
    vnsub: "\u2282\u20D2",
    vnsup: "\u2283\u20D2",
    vopf: "\uD835\uDD67",
    vprop: "\u221D",
    vrtri: "\u22B3",
    vscr: "\uD835\uDCCB",
    vsubnE: "\u2ACB\uFE00",
    vsubne: "\u228A\uFE00",
    vsupnE: "\u2ACC\uFE00",
    vsupne: "\u228B\uFE00",
    vzigzag: "\u299A",
    wcirc: "\u0175",
    wedbar: "\u2A5F",
    wedge: "\u2227",
    wedgeq: "\u2259",
    weierp: "\u2118",
    wfr: "\uD835\uDD34",
    wopf: "\uD835\uDD68",
    wp: "\u2118",
    wr: "\u2240",
    wreath: "\u2240",
    wscr: "\uD835\uDCCC",
    xcap: "\u22C2",
    xcirc: "\u25EF",
    xcup: "\u22C3",
    xdtri: "\u25BD",
    xfr: "\uD835\uDD35",
    xhArr: "\u27FA",
    xharr: "\u27F7",
    xi: "\u03BE",
    xlArr: "\u27F8",
    xlarr: "\u27F5",
    xmap: "\u27FC",
    xnis: "\u22FB",
    xodot: "\u2A00",
    xopf: "\uD835\uDD69",
    xoplus: "\u2A01",
    xotime: "\u2A02",
    xrArr: "\u27F9",
    xrarr: "\u27F6",
    xscr: "\uD835\uDCCD",
    xsqcup: "\u2A06",
    xuplus: "\u2A04",
    xutri: "\u25B3",
    xvee: "\u22C1",
    xwedge: "\u22C0",
    yacute: "\xfd",
    yacy: "\u044F",
    ycirc: "\u0177",
    ycy: "\u044B",
    yen: "\xa5",
    yfr: "\uD835\uDD36",
    yicy: "\u0457",
    yopf: "\uD835\uDD6A",
    yscr: "\uD835\uDCCE",
    yucy: "\u044E",
    yuml: "\xff",
    zacute: "\u017A",
    zcaron: "\u017E",
    zcy: "\u0437",
    zdot: "\u017C",
    zeetrf: "\u2128",
    zeta: "\u03B6",
    zfr: "\uD835\uDD37",
    zhcy: "\u0436",
    zigrarr: "\u21DD",
    zopf: "\uD835\uDD6B",
    zscr: "\uD835\uDCCF",
    zwj: "\u200D",
    zwnj: "\u200C"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1L3L5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "codeFenced", ()=>codeFenced);
/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Code} Code
 */ var _micromarkFactorySpace = require("micromark-factory-space");
var _micromarkUtilCharacter = require("micromark-util-character");
const codeFenced = {
    name: "codeFenced",
    tokenize: tokenizeCodeFenced,
    concrete: true
};
/** @type {Tokenizer} */ function tokenizeCodeFenced(effects1, ok1, nok1) {
    const self1 = this;
    /** @type {Construct} */ const closingFenceConstruct = {
        tokenize: tokenizeClosingFence,
        partial: true
    };
    /** @type {Construct} */ const nonLazyLine = {
        tokenize: tokenizeNonLazyLine,
        partial: true
    };
    const tail = this.events[this.events.length - 1];
    const initialPrefix = tail && tail[1].type === "linePrefix" ? tail[2].sliceSerialize(tail[1], true).length : 0;
    let sizeOpen = 0;
    /** @type {NonNullable<Code>} */ let marker;
    return start1;
    /** @type {State} */ function start1(code) {
        effects1.enter("codeFenced");
        effects1.enter("codeFencedFence");
        effects1.enter("codeFencedFenceSequence");
        marker = code;
        return sequenceOpen(code);
    }
    /** @type {State} */ function sequenceOpen(code) {
        if (code === marker) {
            effects1.consume(code);
            sizeOpen++;
            return sequenceOpen;
        }
        effects1.exit("codeFencedFenceSequence");
        return sizeOpen < 3 ? nok1(code) : (0, _micromarkFactorySpace.factorySpace)(effects1, infoOpen, "whitespace")(code);
    }
    /** @type {State} */ function infoOpen(code) {
        if (code === null || (0, _micromarkUtilCharacter.markdownLineEnding)(code)) {
            return openAfter(code);
        }
        effects1.enter("codeFencedFenceInfo");
        effects1.enter("chunkString", {
            contentType: "string"
        });
        return info(code);
    }
    /** @type {State} */ function info(code) {
        if (code === null || (0, _micromarkUtilCharacter.markdownLineEndingOrSpace)(code)) {
            effects1.exit("chunkString");
            effects1.exit("codeFencedFenceInfo");
            return (0, _micromarkFactorySpace.factorySpace)(effects1, infoAfter, "whitespace")(code);
        }
        if (code === 96 && code === marker) return nok1(code);
        effects1.consume(code);
        return info;
    }
    /** @type {State} */ function infoAfter(code) {
        if (code === null || (0, _micromarkUtilCharacter.markdownLineEnding)(code)) {
            return openAfter(code);
        }
        effects1.enter("codeFencedFenceMeta");
        effects1.enter("chunkString", {
            contentType: "string"
        });
        return meta(code);
    }
    /** @type {State} */ function meta(code) {
        if (code === null || (0, _micromarkUtilCharacter.markdownLineEnding)(code)) {
            effects1.exit("chunkString");
            effects1.exit("codeFencedFenceMeta");
            return openAfter(code);
        }
        if (code === 96 && code === marker) return nok1(code);
        effects1.consume(code);
        return meta;
    }
    /** @type {State} */ function openAfter(code) {
        effects1.exit("codeFencedFence");
        return self1.interrupt ? ok1(code) : contentStart(code);
    }
    /** @type {State} */ function contentStart(code) {
        if (code === null) {
            return after(code);
        }
        if ((0, _micromarkUtilCharacter.markdownLineEnding)(code)) {
            return effects1.attempt(nonLazyLine, effects1.attempt(closingFenceConstruct, after, initialPrefix ? (0, _micromarkFactorySpace.factorySpace)(effects1, contentStart, "linePrefix", initialPrefix + 1) : contentStart), after)(code);
        }
        effects1.enter("codeFlowValue");
        return contentContinue(code);
    }
    /** @type {State} */ function contentContinue(code) {
        if (code === null || (0, _micromarkUtilCharacter.markdownLineEnding)(code)) {
            effects1.exit("codeFlowValue");
            return contentStart(code);
        }
        effects1.consume(code);
        return contentContinue;
    }
    /** @type {State} */ function after(code) {
        effects1.exit("codeFenced");
        return ok1(code);
    }
    /** @type {Tokenizer} */ function tokenizeNonLazyLine(effects, ok, nok) {
        const self = this;
        return start;
        /** @type {State} */ function start(code) {
            effects.enter("lineEnding");
            effects.consume(code);
            effects.exit("lineEnding");
            return lineStart;
        }
        /** @type {State} */ function lineStart(code) {
            return self.parser.lazy[self.now().line] ? nok(code) : ok(code);
        }
    }
    /** @type {Tokenizer} */ function tokenizeClosingFence(effects, ok, nok) {
        let size = 0;
        return (0, _micromarkFactorySpace.factorySpace)(effects, closingSequenceStart, "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? undefined : 4);
        /** @type {State} */ function closingSequenceStart(code) {
            effects.enter("codeFencedFence");
            effects.enter("codeFencedFenceSequence");
            return closingSequence(code);
        }
        /** @type {State} */ function closingSequence(code) {
            if (code === marker) {
                effects.consume(code);
                size++;
                return closingSequence;
            }
            if (size < sizeOpen) return nok(code);
            effects.exit("codeFencedFenceSequence");
            return (0, _micromarkFactorySpace.factorySpace)(effects, closingSequenceEnd, "whitespace")(code);
        }
        /** @type {State} */ function closingSequenceEnd(code) {
            if (code === null || (0, _micromarkUtilCharacter.markdownLineEnding)(code)) {
                effects.exit("codeFencedFence");
                return ok(code);
            }
            return nok(code);
        }
    }
}

},{"micromark-factory-space":"54gkm","micromark-util-character":"lRjrj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gsBb3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "codeIndented", ()=>codeIndented);
/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').State} State
 */ var _micromarkFactorySpace = require("micromark-factory-space");
var _micromarkUtilCharacter = require("micromark-util-character");
const codeIndented = {
    name: "codeIndented",
    tokenize: tokenizeCodeIndented
};
/** @type {Construct} */ const indentedContent = {
    tokenize: tokenizeIndentedContent,
    partial: true
};
/** @type {Tokenizer} */ function tokenizeCodeIndented(effects, ok, nok) {
    const self = this;
    return start;
    /** @type {State} */ function start(code) {
        effects.enter("codeIndented");
        return (0, _micromarkFactorySpace.factorySpace)(effects, afterStartPrefix, "linePrefix", 5)(code);
    }
    /** @type {State} */ function afterStartPrefix(code) {
        const tail = self.events[self.events.length - 1];
        return tail && tail[1].type === "linePrefix" && tail[2].sliceSerialize(tail[1], true).length >= 4 ? afterPrefix(code) : nok(code);
    }
    /** @type {State} */ function afterPrefix(code) {
        if (code === null) {
            return after(code);
        }
        if ((0, _micromarkUtilCharacter.markdownLineEnding)(code)) {
            return effects.attempt(indentedContent, afterPrefix, after)(code);
        }
        effects.enter("codeFlowValue");
        return content(code);
    }
    /** @type {State} */ function content(code) {
        if (code === null || (0, _micromarkUtilCharacter.markdownLineEnding)(code)) {
            effects.exit("codeFlowValue");
            return afterPrefix(code);
        }
        effects.consume(code);
        return content;
    }
    /** @type {State} */ function after(code) {
        effects.exit("codeIndented");
        return ok(code);
    }
}
/** @type {Tokenizer} */ function tokenizeIndentedContent(effects, ok, nok) {
    const self = this;
    return start;
    /** @type {State} */ function start(code) {
        // If this is a lazy line, it can’t be code.
        if (self.parser.lazy[self.now().line]) {
            return nok(code);
        }
        if ((0, _micromarkUtilCharacter.markdownLineEnding)(code)) {
            effects.enter("lineEnding");
            effects.consume(code);
            effects.exit("lineEnding");
            return start;
        }
        return (0, _micromarkFactorySpace.factorySpace)(effects, afterPrefix, "linePrefix", 5)(code);
    }
    /** @type {State} */ function afterPrefix(code) {
        const tail = self.events[self.events.length - 1];
        return tail && tail[1].type === "linePrefix" && tail[2].sliceSerialize(tail[1], true).length >= 4 ? ok(code) : (0, _micromarkUtilCharacter.markdownLineEnding)(code) ? start(code) : nok(code);
    }
}

},{"micromark-factory-space":"54gkm","micromark-util-character":"lRjrj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2mp5e":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "codeText", ()=>codeText);
/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').Previous} Previous
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').State} State
 */ var _micromarkUtilCharacter = require("micromark-util-character");
const codeText = {
    name: "codeText",
    tokenize: tokenizeCodeText,
    resolve: resolveCodeText,
    previous
};
/** @type {Resolver} */ function resolveCodeText(events) {
    let tailExitIndex = events.length - 4;
    let headEnterIndex = 3;
    /** @type {number} */ let index;
    /** @type {number|undefined} */ let enter // If we start and end with an EOL or a space.
    ;
    if ((events[headEnterIndex][1].type === "lineEnding" || events[headEnterIndex][1].type === "space") && (events[tailExitIndex][1].type === "lineEnding" || events[tailExitIndex][1].type === "space")) {
        index = headEnterIndex // And we have data.
        ;
        while(++index < tailExitIndex)if (events[index][1].type === "codeTextData") {
            // Then we have padding.
            events[headEnterIndex][1].type = "codeTextPadding";
            events[tailExitIndex][1].type = "codeTextPadding";
            headEnterIndex += 2;
            tailExitIndex -= 2;
            break;
        }
    } // Merge adjacent spaces and data.
    index = headEnterIndex - 1;
    tailExitIndex++;
    while(++index <= tailExitIndex){
        if (enter === undefined) {
            if (index !== tailExitIndex && events[index][1].type !== "lineEnding") enter = index;
        } else if (index === tailExitIndex || events[index][1].type === "lineEnding") {
            events[enter][1].type = "codeTextData";
            if (index !== enter + 2) {
                events[enter][1].end = events[index - 1][1].end;
                events.splice(enter + 2, index - enter - 2);
                tailExitIndex -= index - enter - 2;
                index = enter + 2;
            }
            enter = undefined;
        }
    }
    return events;
}
/** @type {Previous} */ function previous(code) {
    // If there is a previous code, there will always be a tail.
    return code !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
/** @type {Tokenizer} */ function tokenizeCodeText(effects, ok, nok) {
    const self = this;
    let sizeOpen = 0;
    /** @type {number} */ let size;
    /** @type {Token} */ let token;
    return start;
    /** @type {State} */ function start(code) {
        effects.enter("codeText");
        effects.enter("codeTextSequence");
        return openingSequence(code);
    }
    /** @type {State} */ function openingSequence(code) {
        if (code === 96) {
            effects.consume(code);
            sizeOpen++;
            return openingSequence;
        }
        effects.exit("codeTextSequence");
        return gap(code);
    }
    /** @type {State} */ function gap(code) {
        // EOF.
        if (code === null) {
            return nok(code);
        } // Closing fence?
        // Could also be data.
        if (code === 96) {
            token = effects.enter("codeTextSequence");
            size = 0;
            return closingSequence(code);
        } // Tabs don’t work, and virtual spaces don’t make sense.
        if (code === 32) {
            effects.enter("space");
            effects.consume(code);
            effects.exit("space");
            return gap;
        }
        if ((0, _micromarkUtilCharacter.markdownLineEnding)(code)) {
            effects.enter("lineEnding");
            effects.consume(code);
            effects.exit("lineEnding");
            return gap;
        } // Data.
        effects.enter("codeTextData");
        return data(code);
    } // In code.
    /** @type {State} */ function data(code) {
        if (code === null || code === 32 || code === 96 || (0, _micromarkUtilCharacter.markdownLineEnding)(code)) {
            effects.exit("codeTextData");
            return gap(code);
        }
        effects.consume(code);
        return data;
    } // Closing fence.
    /** @type {State} */ function closingSequence(code) {
        // More.
        if (code === 96) {
            effects.consume(code);
            size++;
            return closingSequence;
        } // Done!
        if (size === sizeOpen) {
            effects.exit("codeTextSequence");
            effects.exit("codeText");
            return ok(code);
        } // More or less accents: mark as data.
        token.type = "codeTextData";
        return data(code);
    }
}

},{"micromark-util-character":"lRjrj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"39A5G":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "content", ()=>content);
/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').State} State
 */ var _micromarkFactorySpace = require("micromark-factory-space");
var _micromarkUtilCharacter = require("micromark-util-character");
var _micromarkUtilSubtokenize = require("micromark-util-subtokenize");
const content = {
    tokenize: tokenizeContent,
    resolve: resolveContent
};
/** @type {Construct} */ const continuationConstruct = {
    tokenize: tokenizeContinuation,
    partial: true
};
/**
 * Content is transparent: it’s parsed right now. That way, definitions are also
 * parsed right now: before text in paragraphs (specifically, media) are parsed.
 *
 * @type {Resolver}
 */ function resolveContent(events) {
    (0, _micromarkUtilSubtokenize.subtokenize)(events);
    return events;
}
/** @type {Tokenizer} */ function tokenizeContent(effects, ok) {
    /** @type {Token} */ let previous;
    return start;
    /** @type {State} */ function start(code) {
        effects.enter("content");
        previous = effects.enter("chunkContent", {
            contentType: "content"
        });
        return data(code);
    }
    /** @type {State} */ function data(code) {
        if (code === null) {
            return contentEnd(code);
        }
        if ((0, _micromarkUtilCharacter.markdownLineEnding)(code)) {
            return effects.check(continuationConstruct, contentContinue, contentEnd)(code);
        } // Data.
        effects.consume(code);
        return data;
    }
    /** @type {State} */ function contentEnd(code) {
        effects.exit("chunkContent");
        effects.exit("content");
        return ok(code);
    }
    /** @type {State} */ function contentContinue(code) {
        effects.consume(code);
        effects.exit("chunkContent");
        previous.next = effects.enter("chunkContent", {
            contentType: "content",
            previous
        });
        previous = previous.next;
        return data;
    }
}
/** @type {Tokenizer} */ function tokenizeContinuation(effects, ok, nok) {
    const self = this;
    return startLookahead;
    /** @type {State} */ function startLookahead(code) {
        effects.exit("chunkContent");
        effects.enter("lineEnding");
        effects.consume(code);
        effects.exit("lineEnding");
        return (0, _micromarkFactorySpace.factorySpace)(effects, prefixed, "linePrefix");
    }
    /** @type {State} */ function prefixed(code) {
        if (code === null || (0, _micromarkUtilCharacter.markdownLineEnding)(code)) {
            return nok(code);
        }
        const tail = self.events[self.events.length - 1];
        if (!self.parser.constructs.disable.null.includes("codeIndented") && tail && tail[1].type === "linePrefix" && tail[2].sliceSerialize(tail[1], true).length >= 4) {
            return ok(code);
        }
        return effects.interrupt(self.parser.constructs.flow, nok, ok)(code);
    }
}

},{"micromark-factory-space":"54gkm","micromark-util-character":"lRjrj","micromark-util-subtokenize":"h8qKe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h8qKe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Tokenize subcontent.
 *
 * @param {Event[]} events
 * @returns {boolean}
 */ parcelHelpers.export(exports, "subtokenize", ()=>subtokenize);
/**
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').Chunk} Chunk
 * @typedef {import('micromark-util-types').Event} Event
 */ var _micromarkUtilChunked = require("micromark-util-chunked");
function subtokenize(events) {
    /** @type {Record<string, number>} */ const jumps = {};
    let index = -1;
    /** @type {Event} */ let event;
    /** @type {number|undefined} */ let lineIndex;
    /** @type {number} */ let otherIndex;
    /** @type {Event} */ let otherEvent;
    /** @type {Event[]} */ let parameters;
    /** @type {Event[]} */ let subevents;
    /** @type {boolean|undefined} */ let more;
    while(++index < events.length){
        while(index in jumps)index = jumps[index];
        event = events[index] // Add a hook for the GFM tasklist extension, which needs to know if text
        ;
        // is in the first content of a list item.
        if (index && event[1].type === "chunkFlow" && events[index - 1][1].type === "listItemPrefix") {
            subevents = event[1]._tokenizer.events;
            otherIndex = 0;
            if (otherIndex < subevents.length && subevents[otherIndex][1].type === "lineEndingBlank") otherIndex += 2;
            if (otherIndex < subevents.length && subevents[otherIndex][1].type === "content") while(++otherIndex < subevents.length){
                if (subevents[otherIndex][1].type === "content") break;
                if (subevents[otherIndex][1].type === "chunkText") {
                    subevents[otherIndex][1]._isInFirstContentOfListItem = true;
                    otherIndex++;
                }
            }
        } // Enter.
        if (event[0] === "enter") {
            if (event[1].contentType) {
                Object.assign(jumps, subcontent(events, index));
                index = jumps[index];
                more = true;
            }
        } else if (event[1]._container) {
            otherIndex = index;
            lineIndex = undefined;
            while(otherIndex--){
                otherEvent = events[otherIndex];
                if (otherEvent[1].type === "lineEnding" || otherEvent[1].type === "lineEndingBlank") {
                    if (otherEvent[0] === "enter") {
                        if (lineIndex) events[lineIndex][1].type = "lineEndingBlank";
                        otherEvent[1].type = "lineEnding";
                        lineIndex = otherIndex;
                    }
                } else break;
            }
            if (lineIndex) {
                // Fix position.
                event[1].end = Object.assign({}, events[lineIndex][1].start) // Switch container exit w/ line endings.
                ;
                parameters = events.slice(lineIndex, index);
                parameters.unshift(event);
                (0, _micromarkUtilChunked.splice)(events, lineIndex, index - lineIndex + 1, parameters);
            }
        }
    }
    return !more;
}
/**
 * Tokenize embedded tokens.
 *
 * @param {Event[]} events
 * @param {number} eventIndex
 * @returns {Record<string, number>}
 */ function subcontent(events, eventIndex) {
    const token = events[eventIndex][1];
    const context = events[eventIndex][2];
    let startPosition = eventIndex - 1;
    /** @type {number[]} */ const startPositions = [];
    const tokenizer = token._tokenizer || context.parser[token.contentType](token.start);
    const childEvents = tokenizer.events;
    /** @type {[number, number][]} */ const jumps = [];
    /** @type {Record<string, number>} */ const gaps = {};
    /** @type {Chunk[]} */ let stream;
    /** @type {Token|undefined} */ let previous;
    let index = -1;
    /** @type {Token|undefined} */ let current = token;
    let adjust = 0;
    let start = 0;
    const breaks = [
        start
    ] // Loop forward through the linked tokens to pass them in order to the
    ;
    // subtokenizer.
    while(current){
        // Find the position of the event for this token.
        while(events[++startPosition][1] !== current);
        startPositions.push(startPosition);
        if (!current._tokenizer) {
            stream = context.sliceStream(current);
            if (!current.next) stream.push(null);
            if (previous) tokenizer.defineSkip(current.start);
            if (current._isInFirstContentOfListItem) tokenizer._gfmTasklistFirstContentOfListItem = true;
            tokenizer.write(stream);
            if (current._isInFirstContentOfListItem) tokenizer._gfmTasklistFirstContentOfListItem = undefined;
        } // Unravel the next token.
        previous = current;
        current = current.next;
    } // Now, loop back through all events (and linked tokens), to figure out which
    // parts belong where.
    current = token;
    while(++index < childEvents.length)if (// Find a void token that includes a break.
    childEvents[index][0] === "exit" && childEvents[index - 1][0] === "enter" && childEvents[index][1].type === childEvents[index - 1][1].type && childEvents[index][1].start.line !== childEvents[index][1].end.line) {
        start = index + 1;
        breaks.push(start) // Help GC.
        ;
        current._tokenizer = undefined;
        current.previous = undefined;
        current = current.next;
    }
     // Help GC.
    tokenizer.events = [] // If there’s one more token (which is the cases for lines that end in an
    ;
    // EOF), that’s perfect: the last point we found starts it.
    // If there isn’t then make sure any remaining content is added to it.
    if (current) {
        // Help GC.
        current._tokenizer = undefined;
        current.previous = undefined;
    } else breaks.pop();
     // Now splice the events from the subtokenizer into the current events,
    // moving back to front so that splice indices aren’t affected.
    index = breaks.length;
    while(index--){
        const slice = childEvents.slice(breaks[index], breaks[index + 1]);
        const start = startPositions.pop();
        jumps.unshift([
            start,
            start + slice.length - 1
        ]);
        (0, _micromarkUtilChunked.splice)(events, start, 2, slice);
    }
    index = -1;
    while(++index < jumps.length){
        gaps[adjust + jumps[index][0]] = adjust + jumps[index][1];
        adjust += jumps[index][1] - jumps[index][0] - 1;
    }
    return gaps;
}

},{"micromark-util-chunked":"gjqro","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hvHsb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "definition", ()=>definition);
/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 */ var _micromarkFactoryDestination = require("micromark-factory-destination");
var _micromarkFactoryLabel = require("micromark-factory-label");
var _micromarkFactorySpace = require("micromark-factory-space");
var _micromarkFactoryTitle = require("micromark-factory-title");
var _micromarkFactoryWhitespace = require("micromark-factory-whitespace");
var _micromarkUtilNormalizeIdentifier = require("micromark-util-normalize-identifier");
var _micromarkUtilCharacter = require("micromark-util-character");
const definition = {
    name: "definition",
    tokenize: tokenizeDefinition
};
/** @type {Construct} */ const titleConstruct = {
    tokenize: tokenizeTitle,
    partial: true
};
/** @type {Tokenizer} */ function tokenizeDefinition(effects, ok, nok) {
    const self = this;
    /** @type {string} */ let identifier;
    return start;
    /** @type {State} */ function start(code) {
        effects.enter("definition");
        return (0, _micromarkFactoryLabel.factoryLabel).call(self, effects, labelAfter, nok, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(code);
    }
    /** @type {State} */ function labelAfter(code) {
        identifier = (0, _micromarkUtilNormalizeIdentifier.normalizeIdentifier)(self.sliceSerialize(self.events[self.events.length - 1][1]).slice(1, -1));
        if (code === 58) {
            effects.enter("definitionMarker");
            effects.consume(code);
            effects.exit("definitionMarker") // Note: blank lines can’t exist in content.
            ;
            return (0, _micromarkFactoryWhitespace.factoryWhitespace)(effects, (0, _micromarkFactoryDestination.factoryDestination)(effects, effects.attempt(titleConstruct, (0, _micromarkFactorySpace.factorySpace)(effects, after, "whitespace"), (0, _micromarkFactorySpace.factorySpace)(effects, after, "whitespace")), nok, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString"));
        }
        return nok(code);
    }
    /** @type {State} */ function after(code) {
        if (code === null || (0, _micromarkUtilCharacter.markdownLineEnding)(code)) {
            effects.exit("definition");
            if (!self.parser.defined.includes(identifier)) {
                self.parser.defined.push(identifier);
            }
            return ok(code);
        }
        return nok(code);
    }
}
/** @type {Tokenizer} */ function tokenizeTitle(effects, ok, nok) {
    return start;
    /** @type {State} */ function start(code) {
        return (0, _micromarkUtilCharacter.markdownLineEndingOrSpace)(code) ? (0, _micromarkFactoryWhitespace.factoryWhitespace)(effects, before)(code) : nok(code);
    }
    /** @type {State} */ function before(code) {
        if (code === 34 || code === 39 || code === 40) {
            return (0, _micromarkFactoryTitle.factoryTitle)(effects, (0, _micromarkFactorySpace.factorySpace)(effects, after, "whitespace"), nok, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(code);
        }
        return nok(code);
    }
    /** @type {State} */ function after(code) {
        return code === null || (0, _micromarkUtilCharacter.markdownLineEnding)(code) ? ok(code) : nok(code);
    }
}

},{"micromark-factory-destination":"jBdRG","micromark-factory-label":"3tY2o","micromark-factory-space":"54gkm","micromark-factory-title":"bNkNR","micromark-factory-whitespace":"hP5RR","micromark-util-normalize-identifier":"7BTmO","micromark-util-character":"lRjrj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jBdRG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @param {Effects} effects
 * @param {State} ok
 * @param {State} nok
 * @param {string} type
 * @param {string} literalType
 * @param {string} literalMarkerType
 * @param {string} rawType
 * @param {string} stringType
 * @param {number} [max=Infinity]
 * @returns {State}
 */ // eslint-disable-next-line max-params
parcelHelpers.export(exports, "factoryDestination", ()=>factoryDestination);
/**
 * @typedef {import('micromark-util-types').Effects} Effects
 * @typedef {import('micromark-util-types').State} State
 */ var _micromarkUtilCharacter = require("micromark-util-character");
function factoryDestination(effects, ok, nok, type, literalType, literalMarkerType, rawType, stringType, max) {
    const limit = max || Number.POSITIVE_INFINITY;
    let balance = 0;
    return start;
    /** @type {State} */ function start(code) {
        if (code === 60) {
            effects.enter(type);
            effects.enter(literalType);
            effects.enter(literalMarkerType);
            effects.consume(code);
            effects.exit(literalMarkerType);
            return destinationEnclosedBefore;
        }
        if (code === null || code === 41 || (0, _micromarkUtilCharacter.asciiControl)(code)) {
            return nok(code);
        }
        effects.enter(type);
        effects.enter(rawType);
        effects.enter(stringType);
        effects.enter("chunkString", {
            contentType: "string"
        });
        return destinationRaw(code);
    }
    /** @type {State} */ function destinationEnclosedBefore(code) {
        if (code === 62) {
            effects.enter(literalMarkerType);
            effects.consume(code);
            effects.exit(literalMarkerType);
            effects.exit(literalType);
            effects.exit(type);
            return ok;
        }
        effects.enter(stringType);
        effects.enter("chunkString", {
            contentType: "string"
        });
        return destinationEnclosed(code);
    }
    /** @type {State} */ function destinationEnclosed(code) {
        if (code === 62) {
            effects.exit("chunkString");
            effects.exit(stringType);
            return destinationEnclosedBefore(code);
        }
        if (code === null || code === 60 || (0, _micromarkUtilCharacter.markdownLineEnding)(code)) {
            return nok(code);
        }
        effects.consume(code);
        return code === 92 ? destinationEnclosedEscape : destinationEnclosed;
    }
    /** @type {State} */ function destinationEnclosedEscape(code) {
        if (code === 60 || code === 62 || code === 92) {
            effects.consume(code);
            return destinationEnclosed;
        }
        return destinationEnclosed(code);
    }
    /** @type {State} */ function destinationRaw(code) {
        if (code === 40) {
            if (++balance > limit) return nok(code);
            effects.consume(code);
            return destinationRaw;
        }
        if (code === 41) {
            if (!balance--) {
                effects.exit("chunkString");
                effects.exit(stringType);
                effects.exit(rawType);
                effects.exit(type);
                return ok(code);
            }
            effects.consume(code);
            return destinationRaw;
        }
        if (code === null || (0, _micromarkUtilCharacter.markdownLineEndingOrSpace)(code)) {
            if (balance) return nok(code);
            effects.exit("chunkString");
            effects.exit(stringType);
            effects.exit(rawType);
            effects.exit(type);
            return ok(code);
        }
        if ((0, _micromarkUtilCharacter.asciiControl)(code)) return nok(code);
        effects.consume(code);
        return code === 92 ? destinationRawEscape : destinationRaw;
    }
    /** @type {State} */ function destinationRawEscape(code) {
        if (code === 40 || code === 41 || code === 92) {
            effects.consume(code);
            return destinationRaw;
        }
        return destinationRaw(code);
    }
}

},{"micromark-util-character":"lRjrj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3tY2o":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @this {TokenizeContext}
 * @param {Effects} effects
 * @param {State} ok
 * @param {State} nok
 * @param {string} type
 * @param {string} markerType
 * @param {string} stringType
 * @returns {State}
 */ // eslint-disable-next-line max-params
parcelHelpers.export(exports, "factoryLabel", ()=>factoryLabel);
/**
 * @typedef {import('micromark-util-types').Effects} Effects
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').State} State
 */ var _micromarkUtilCharacter = require("micromark-util-character");
function factoryLabel(effects, ok, nok, type, markerType, stringType) {
    const self = this;
    let size = 0;
    /** @type {boolean} */ let data;
    return start;
    /** @type {State} */ function start(code) {
        effects.enter(type);
        effects.enter(markerType);
        effects.consume(code);
        effects.exit(markerType);
        effects.enter(stringType);
        return atBreak;
    }
    /** @type {State} */ function atBreak(code) {
        if (code === null || code === 91 || code === 93 && !data || code === 94 && !size && "_hiddenFootnoteSupport" in self.parser.constructs || size > 999) {
            return nok(code);
        }
        if (code === 93) {
            effects.exit(stringType);
            effects.enter(markerType);
            effects.consume(code);
            effects.exit(markerType);
            effects.exit(type);
            return ok;
        }
        if ((0, _micromarkUtilCharacter.markdownLineEnding)(code)) {
            effects.enter("lineEnding");
            effects.consume(code);
            effects.exit("lineEnding");
            return atBreak;
        }
        effects.enter("chunkString", {
            contentType: "string"
        });
        return label(code);
    }
    /** @type {State} */ function label(code) {
        if (code === null || code === 91 || code === 93 || (0, _micromarkUtilCharacter.markdownLineEnding)(code) || size++ > 999) {
            effects.exit("chunkString");
            return atBreak(code);
        }
        effects.consume(code);
        data = data || !(0, _micromarkUtilCharacter.markdownSpace)(code);
        return code === 92 ? labelEscape : label;
    }
    /** @type {State} */ function labelEscape(code) {
        if (code === 91 || code === 92 || code === 93) {
            effects.consume(code);
            size++;
            return label;
        }
        return label(code);
    }
}

},{"micromark-util-character":"lRjrj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bNkNR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @param {Effects} effects
 * @param {State} ok
 * @param {State} nok
 * @param {string} type
 * @param {string} markerType
 * @param {string} stringType
 * @returns {State}
 */ // eslint-disable-next-line max-params
parcelHelpers.export(exports, "factoryTitle", ()=>factoryTitle);
/**
 * @typedef {import('micromark-util-types').Effects} Effects
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Code} Code
 */ var _micromarkFactorySpace = require("micromark-factory-space");
var _micromarkUtilCharacter = require("micromark-util-character");
function factoryTitle(effects, ok, nok, type, markerType, stringType) {
    /** @type {NonNullable<Code>} */ let marker;
    return start;
    /** @type {State} */ function start(code) {
        effects.enter(type);
        effects.enter(markerType);
        effects.consume(code);
        effects.exit(markerType);
        marker = code === 40 ? 41 : code;
        return atFirstTitleBreak;
    }
    /** @type {State} */ function atFirstTitleBreak(code) {
        if (code === marker) {
            effects.enter(markerType);
            effects.consume(code);
            effects.exit(markerType);
            effects.exit(type);
            return ok;
        }
        effects.enter(stringType);
        return atTitleBreak(code);
    }
    /** @type {State} */ function atTitleBreak(code) {
        if (code === marker) {
            effects.exit(stringType);
            return atFirstTitleBreak(marker);
        }
        if (code === null) {
            return nok(code);
        } // Note: blank lines can’t exist in content.
        if ((0, _micromarkUtilCharacter.markdownLineEnding)(code)) {
            effects.enter("lineEnding");
            effects.consume(code);
            effects.exit("lineEnding");
            return (0, _micromarkFactorySpace.factorySpace)(effects, atTitleBreak, "linePrefix");
        }
        effects.enter("chunkString", {
            contentType: "string"
        });
        return title(code);
    }
    /** @type {State} */ function title(code) {
        if (code === marker || code === null || (0, _micromarkUtilCharacter.markdownLineEnding)(code)) {
            effects.exit("chunkString");
            return atTitleBreak(code);
        }
        effects.consume(code);
        return code === 92 ? titleEscape : title;
    }
    /** @type {State} */ function titleEscape(code) {
        if (code === marker || code === 92) {
            effects.consume(code);
            return title;
        }
        return title(code);
    }
}

},{"micromark-factory-space":"54gkm","micromark-util-character":"lRjrj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hP5RR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @param {Effects} effects
 * @param {State} ok
 */ parcelHelpers.export(exports, "factoryWhitespace", ()=>factoryWhitespace);
/**
 * @typedef {import('micromark-util-types').Effects} Effects
 * @typedef {import('micromark-util-types').State} State
 */ var _micromarkFactorySpace = require("micromark-factory-space");
var _micromarkUtilCharacter = require("micromark-util-character");
function factoryWhitespace(effects, ok) {
    /** @type {boolean} */ let seen;
    return start;
    /** @type {State} */ function start(code) {
        if ((0, _micromarkUtilCharacter.markdownLineEnding)(code)) {
            effects.enter("lineEnding");
            effects.consume(code);
            effects.exit("lineEnding");
            seen = true;
            return start;
        }
        if ((0, _micromarkUtilCharacter.markdownSpace)(code)) {
            return (0, _micromarkFactorySpace.factorySpace)(effects, start, seen ? "linePrefix" : "lineSuffix")(code);
        }
        return ok(code);
    }
}

},{"micromark-factory-space":"54gkm","micromark-util-character":"lRjrj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7BTmO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Normalize an identifier (such as used in definitions).
 *
 * @param {string} value
 * @returns {string}
 */ parcelHelpers.export(exports, "normalizeIdentifier", ()=>normalizeIdentifier);
function normalizeIdentifier(value) {
    return value // Collapse Markdown whitespace.
    .replace(/[\t\n\r ]+/g, " ") // Trim.
    .replace(/^ | $/g, "") // Some characters are considered “uppercase”, but if their lowercase
    // counterpart is uppercased will result in a different uppercase
    // character.
    // Hence, to get that form, we perform both lower- and uppercase.
    // Upper case makes sure keys will not interact with default prototypal
    // methods: no method is uppercase.
    .toLowerCase().toUpperCase();
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6pVvm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hardBreakEscape", ()=>hardBreakEscape);
/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 */ var _micromarkUtilCharacter = require("micromark-util-character");
const hardBreakEscape = {
    name: "hardBreakEscape",
    tokenize: tokenizeHardBreakEscape
};
/** @type {Tokenizer} */ function tokenizeHardBreakEscape(effects, ok, nok) {
    return start;
    /** @type {State} */ function start(code) {
        effects.enter("hardBreakEscape");
        effects.enter("escapeMarker");
        effects.consume(code);
        return open;
    }
    /** @type {State} */ function open(code) {
        if ((0, _micromarkUtilCharacter.markdownLineEnding)(code)) {
            effects.exit("escapeMarker");
            effects.exit("hardBreakEscape");
            return ok(code);
        }
        return nok(code);
    }
}

},{"micromark-util-character":"lRjrj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9L5d1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "headingAtx", ()=>headingAtx);
/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').State} State
 */ var _micromarkFactorySpace = require("micromark-factory-space");
var _micromarkUtilCharacter = require("micromark-util-character");
var _micromarkUtilChunked = require("micromark-util-chunked");
const headingAtx = {
    name: "headingAtx",
    tokenize: tokenizeHeadingAtx,
    resolve: resolveHeadingAtx
};
/** @type {Resolver} */ function resolveHeadingAtx(events, context) {
    let contentEnd = events.length - 2;
    let contentStart = 3;
    /** @type {Token} */ let content;
    /** @type {Token} */ let text // Prefix whitespace, part of the opening.
    ;
    if (events[contentStart][1].type === "whitespace") contentStart += 2;
     // Suffix whitespace, part of the closing.
    if (contentEnd - 2 > contentStart && events[contentEnd][1].type === "whitespace") contentEnd -= 2;
    if (events[contentEnd][1].type === "atxHeadingSequence" && (contentStart === contentEnd - 1 || contentEnd - 4 > contentStart && events[contentEnd - 2][1].type === "whitespace")) contentEnd -= contentStart + 1 === contentEnd ? 2 : 4;
    if (contentEnd > contentStart) {
        content = {
            type: "atxHeadingText",
            start: events[contentStart][1].start,
            end: events[contentEnd][1].end
        };
        text = {
            type: "chunkText",
            start: events[contentStart][1].start,
            end: events[contentEnd][1].end,
            // @ts-expect-error Constants are fine to assign.
            contentType: "text"
        };
        (0, _micromarkUtilChunked.splice)(events, contentStart, contentEnd - contentStart + 1, [
            [
                "enter",
                content,
                context
            ],
            [
                "enter",
                text,
                context
            ],
            [
                "exit",
                text,
                context
            ],
            [
                "exit",
                content,
                context
            ]
        ]);
    }
    return events;
}
/** @type {Tokenizer} */ function tokenizeHeadingAtx(effects, ok, nok) {
    const self = this;
    let size = 0;
    return start;
    /** @type {State} */ function start(code) {
        effects.enter("atxHeading");
        effects.enter("atxHeadingSequence");
        return fenceOpenInside(code);
    }
    /** @type {State} */ function fenceOpenInside(code) {
        if (code === 35 && size++ < 6) {
            effects.consume(code);
            return fenceOpenInside;
        }
        if (code === null || (0, _micromarkUtilCharacter.markdownLineEndingOrSpace)(code)) {
            effects.exit("atxHeadingSequence");
            return self.interrupt ? ok(code) : headingBreak(code);
        }
        return nok(code);
    }
    /** @type {State} */ function headingBreak(code) {
        if (code === 35) {
            effects.enter("atxHeadingSequence");
            return sequence(code);
        }
        if (code === null || (0, _micromarkUtilCharacter.markdownLineEnding)(code)) {
            effects.exit("atxHeading");
            return ok(code);
        }
        if ((0, _micromarkUtilCharacter.markdownSpace)(code)) {
            return (0, _micromarkFactorySpace.factorySpace)(effects, headingBreak, "whitespace")(code);
        }
        effects.enter("atxHeadingText");
        return data(code);
    }
    /** @type {State} */ function sequence(code) {
        if (code === 35) {
            effects.consume(code);
            return sequence;
        }
        effects.exit("atxHeadingSequence");
        return headingBreak(code);
    }
    /** @type {State} */ function data(code) {
        if (code === null || code === 35 || (0, _micromarkUtilCharacter.markdownLineEndingOrSpace)(code)) {
            effects.exit("atxHeadingText");
            return headingBreak(code);
        }
        effects.consume(code);
        return data;
    }
}

},{"micromark-factory-space":"54gkm","micromark-util-character":"lRjrj","micromark-util-chunked":"gjqro","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5waRK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "htmlFlow", ()=>htmlFlow);
/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Code} Code
 */ var _micromarkUtilCharacter = require("micromark-util-character");
var _micromarkUtilHtmlTagName = require("micromark-util-html-tag-name");
var _blankLineJs = require("./blank-line.js");
const htmlFlow = {
    name: "htmlFlow",
    tokenize: tokenizeHtmlFlow,
    resolveTo: resolveToHtmlFlow,
    concrete: true
};
/** @type {Construct} */ const nextBlankConstruct = {
    tokenize: tokenizeNextBlank,
    partial: true
};
/** @type {Resolver} */ function resolveToHtmlFlow(events) {
    let index = events.length;
    while(index--){
        if (events[index][0] === "enter" && events[index][1].type === "htmlFlow") break;
    }
    if (index > 1 && events[index - 2][1].type === "linePrefix") {
        // Add the prefix start to the HTML token.
        events[index][1].start = events[index - 2][1].start // Add the prefix start to the HTML line token.
        ;
        events[index + 1][1].start = events[index - 2][1].start // Remove the line prefix.
        ;
        events.splice(index - 2, 2);
    }
    return events;
}
/** @type {Tokenizer} */ function tokenizeHtmlFlow(effects1, ok1, nok1) {
    const self = this;
    /** @type {number} */ let kind;
    /** @type {boolean} */ let startTag;
    /** @type {string} */ let buffer;
    /** @type {number} */ let index;
    /** @type {Code} */ let marker;
    return start1;
    /** @type {State} */ function start1(code) {
        effects1.enter("htmlFlow");
        effects1.enter("htmlFlowData");
        effects1.consume(code);
        return open;
    }
    /** @type {State} */ function open(code) {
        if (code === 33) {
            effects1.consume(code);
            return declarationStart;
        }
        if (code === 47) {
            effects1.consume(code);
            return tagCloseStart;
        }
        if (code === 63) {
            effects1.consume(code);
            kind = 3 // While we’re in an instruction instead of a declaration, we’re on a `?`
            ;
            // right now, so we do need to search for `>`, similar to declarations.
            return self.interrupt ? ok1 : continuationDeclarationInside;
        }
        if ((0, _micromarkUtilCharacter.asciiAlpha)(code)) {
            effects1.consume(code);
            buffer = String.fromCharCode(code);
            startTag = true;
            return tagName;
        }
        return nok1(code);
    }
    /** @type {State} */ function declarationStart(code) {
        if (code === 45) {
            effects1.consume(code);
            kind = 2;
            return commentOpenInside;
        }
        if (code === 91) {
            effects1.consume(code);
            kind = 5;
            buffer = "CDATA[";
            index = 0;
            return cdataOpenInside;
        }
        if ((0, _micromarkUtilCharacter.asciiAlpha)(code)) {
            effects1.consume(code);
            kind = 4;
            return self.interrupt ? ok1 : continuationDeclarationInside;
        }
        return nok1(code);
    }
    /** @type {State} */ function commentOpenInside(code) {
        if (code === 45) {
            effects1.consume(code);
            return self.interrupt ? ok1 : continuationDeclarationInside;
        }
        return nok1(code);
    }
    /** @type {State} */ function cdataOpenInside(code) {
        if (code === buffer.charCodeAt(index++)) {
            effects1.consume(code);
            return index === buffer.length ? self.interrupt ? ok1 : continuation : cdataOpenInside;
        }
        return nok1(code);
    }
    /** @type {State} */ function tagCloseStart(code) {
        if ((0, _micromarkUtilCharacter.asciiAlpha)(code)) {
            effects1.consume(code);
            buffer = String.fromCharCode(code);
            return tagName;
        }
        return nok1(code);
    }
    /** @type {State} */ function tagName(code) {
        if (code === null || code === 47 || code === 62 || (0, _micromarkUtilCharacter.markdownLineEndingOrSpace)(code)) {
            if (code !== 47 && startTag && (0, _micromarkUtilHtmlTagName.htmlRawNames).includes(buffer.toLowerCase())) {
                kind = 1;
                return self.interrupt ? ok1(code) : continuation(code);
            }
            if ((0, _micromarkUtilHtmlTagName.htmlBlockNames).includes(buffer.toLowerCase())) {
                kind = 6;
                if (code === 47) {
                    effects1.consume(code);
                    return basicSelfClosing;
                }
                return self.interrupt ? ok1(code) : continuation(code);
            }
            kind = 7 // Do not support complete HTML when interrupting
            ;
            return self.interrupt && !self.parser.lazy[self.now().line] ? nok1(code) : startTag ? completeAttributeNameBefore(code) : completeClosingTagAfter(code);
        }
        if (code === 45 || (0, _micromarkUtilCharacter.asciiAlphanumeric)(code)) {
            effects1.consume(code);
            buffer += String.fromCharCode(code);
            return tagName;
        }
        return nok1(code);
    }
    /** @type {State} */ function basicSelfClosing(code) {
        if (code === 62) {
            effects1.consume(code);
            return self.interrupt ? ok1 : continuation;
        }
        return nok1(code);
    }
    /** @type {State} */ function completeClosingTagAfter(code) {
        if ((0, _micromarkUtilCharacter.markdownSpace)(code)) {
            effects1.consume(code);
            return completeClosingTagAfter;
        }
        return completeEnd(code);
    }
    /** @type {State} */ function completeAttributeNameBefore(code) {
        if (code === 47) {
            effects1.consume(code);
            return completeEnd;
        }
        if (code === 58 || code === 95 || (0, _micromarkUtilCharacter.asciiAlpha)(code)) {
            effects1.consume(code);
            return completeAttributeName;
        }
        if ((0, _micromarkUtilCharacter.markdownSpace)(code)) {
            effects1.consume(code);
            return completeAttributeNameBefore;
        }
        return completeEnd(code);
    }
    /** @type {State} */ function completeAttributeName(code) {
        if (code === 45 || code === 46 || code === 58 || code === 95 || (0, _micromarkUtilCharacter.asciiAlphanumeric)(code)) {
            effects1.consume(code);
            return completeAttributeName;
        }
        return completeAttributeNameAfter(code);
    }
    /** @type {State} */ function completeAttributeNameAfter(code) {
        if (code === 61) {
            effects1.consume(code);
            return completeAttributeValueBefore;
        }
        if ((0, _micromarkUtilCharacter.markdownSpace)(code)) {
            effects1.consume(code);
            return completeAttributeNameAfter;
        }
        return completeAttributeNameBefore(code);
    }
    /** @type {State} */ function completeAttributeValueBefore(code) {
        if (code === null || code === 60 || code === 61 || code === 62 || code === 96) {
            return nok1(code);
        }
        if (code === 34 || code === 39) {
            effects1.consume(code);
            marker = code;
            return completeAttributeValueQuoted;
        }
        if ((0, _micromarkUtilCharacter.markdownSpace)(code)) {
            effects1.consume(code);
            return completeAttributeValueBefore;
        }
        marker = null;
        return completeAttributeValueUnquoted(code);
    }
    /** @type {State} */ function completeAttributeValueQuoted(code) {
        if (code === null || (0, _micromarkUtilCharacter.markdownLineEnding)(code)) {
            return nok1(code);
        }
        if (code === marker) {
            effects1.consume(code);
            return completeAttributeValueQuotedAfter;
        }
        effects1.consume(code);
        return completeAttributeValueQuoted;
    }
    /** @type {State} */ function completeAttributeValueUnquoted(code) {
        if (code === null || code === 34 || code === 39 || code === 60 || code === 61 || code === 62 || code === 96 || (0, _micromarkUtilCharacter.markdownLineEndingOrSpace)(code)) {
            return completeAttributeNameAfter(code);
        }
        effects1.consume(code);
        return completeAttributeValueUnquoted;
    }
    /** @type {State} */ function completeAttributeValueQuotedAfter(code) {
        if (code === 47 || code === 62 || (0, _micromarkUtilCharacter.markdownSpace)(code)) {
            return completeAttributeNameBefore(code);
        }
        return nok1(code);
    }
    /** @type {State} */ function completeEnd(code) {
        if (code === 62) {
            effects1.consume(code);
            return completeAfter;
        }
        return nok1(code);
    }
    /** @type {State} */ function completeAfter(code) {
        if ((0, _micromarkUtilCharacter.markdownSpace)(code)) {
            effects1.consume(code);
            return completeAfter;
        }
        return code === null || (0, _micromarkUtilCharacter.markdownLineEnding)(code) ? continuation(code) : nok1(code);
    }
    /** @type {State} */ function continuation(code) {
        if (code === 45 && kind === 2) {
            effects1.consume(code);
            return continuationCommentInside;
        }
        if (code === 60 && kind === 1) {
            effects1.consume(code);
            return continuationRawTagOpen;
        }
        if (code === 62 && kind === 4) {
            effects1.consume(code);
            return continuationClose;
        }
        if (code === 63 && kind === 3) {
            effects1.consume(code);
            return continuationDeclarationInside;
        }
        if (code === 93 && kind === 5) {
            effects1.consume(code);
            return continuationCharacterDataInside;
        }
        if ((0, _micromarkUtilCharacter.markdownLineEnding)(code) && (kind === 6 || kind === 7)) {
            return effects1.check(nextBlankConstruct, continuationClose, continuationAtLineEnding)(code);
        }
        if (code === null || (0, _micromarkUtilCharacter.markdownLineEnding)(code)) {
            return continuationAtLineEnding(code);
        }
        effects1.consume(code);
        return continuation;
    }
    /** @type {State} */ function continuationAtLineEnding(code) {
        effects1.exit("htmlFlowData");
        return htmlContinueStart(code);
    }
    /** @type {State} */ function htmlContinueStart(code) {
        if (code === null) {
            return done(code);
        }
        if ((0, _micromarkUtilCharacter.markdownLineEnding)(code)) {
            return effects1.attempt({
                tokenize: htmlLineEnd,
                partial: true
            }, htmlContinueStart, done)(code);
        }
        effects1.enter("htmlFlowData");
        return continuation(code);
    }
    /** @type {Tokenizer} */ function htmlLineEnd(effects, ok, nok) {
        return start;
        /** @type {State} */ function start(code) {
            effects.enter("lineEnding");
            effects.consume(code);
            effects.exit("lineEnding");
            return lineStart;
        }
        /** @type {State} */ function lineStart(code) {
            return self.parser.lazy[self.now().line] ? nok(code) : ok(code);
        }
    }
    /** @type {State} */ function continuationCommentInside(code) {
        if (code === 45) {
            effects1.consume(code);
            return continuationDeclarationInside;
        }
        return continuation(code);
    }
    /** @type {State} */ function continuationRawTagOpen(code) {
        if (code === 47) {
            effects1.consume(code);
            buffer = "";
            return continuationRawEndTag;
        }
        return continuation(code);
    }
    /** @type {State} */ function continuationRawEndTag(code) {
        if (code === 62 && (0, _micromarkUtilHtmlTagName.htmlRawNames).includes(buffer.toLowerCase())) {
            effects1.consume(code);
            return continuationClose;
        }
        if ((0, _micromarkUtilCharacter.asciiAlpha)(code) && buffer.length < 8) {
            effects1.consume(code);
            buffer += String.fromCharCode(code);
            return continuationRawEndTag;
        }
        return continuation(code);
    }
    /** @type {State} */ function continuationCharacterDataInside(code) {
        if (code === 93) {
            effects1.consume(code);
            return continuationDeclarationInside;
        }
        return continuation(code);
    }
    /** @type {State} */ function continuationDeclarationInside(code) {
        if (code === 62) {
            effects1.consume(code);
            return continuationClose;
        } // More dashes.
        if (code === 45 && kind === 2) {
            effects1.consume(code);
            return continuationDeclarationInside;
        }
        return continuation(code);
    }
    /** @type {State} */ function continuationClose(code) {
        if (code === null || (0, _micromarkUtilCharacter.markdownLineEnding)(code)) {
            effects1.exit("htmlFlowData");
            return done(code);
        }
        effects1.consume(code);
        return continuationClose;
    }
    /** @type {State} */ function done(code) {
        effects1.exit("htmlFlow");
        return ok1(code);
    }
}
/** @type {Tokenizer} */ function tokenizeNextBlank(effects, ok, nok) {
    return start;
    /** @type {State} */ function start(code) {
        effects.exit("htmlFlowData");
        effects.enter("lineEndingBlank");
        effects.consume(code);
        effects.exit("lineEndingBlank");
        return effects.attempt((0, _blankLineJs.blankLine), ok, nok);
    }
}

},{"micromark-util-character":"lRjrj","micromark-util-html-tag-name":"i7G9Z","./blank-line.js":"eIeYy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i7G9Z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "htmlBlockNames", ()=>htmlBlockNames);
parcelHelpers.export(exports, "htmlRawNames", ()=>htmlRawNames);
const htmlBlockNames = [
    "address",
    "article",
    "aside",
    "base",
    "basefont",
    "blockquote",
    "body",
    "caption",
    "center",
    "col",
    "colgroup",
    "dd",
    "details",
    "dialog",
    "dir",
    "div",
    "dl",
    "dt",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "frame",
    "frameset",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hr",
    "html",
    "iframe",
    "legend",
    "li",
    "link",
    "main",
    "menu",
    "menuitem",
    "nav",
    "noframes",
    "ol",
    "optgroup",
    "option",
    "p",
    "param",
    "section",
    "summary",
    "table",
    "tbody",
    "td",
    "tfoot",
    "th",
    "thead",
    "title",
    "tr",
    "track",
    "ul"
];
const htmlRawNames = [
    "pre",
    "script",
    "style",
    "textarea"
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4PJtt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "htmlText", ()=>htmlText);
/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Code} Code
 */ var _micromarkFactorySpace = require("micromark-factory-space");
var _micromarkUtilCharacter = require("micromark-util-character");
const htmlText = {
    name: "htmlText",
    tokenize: tokenizeHtmlText
};
/** @type {Tokenizer} */ function tokenizeHtmlText(effects, ok, nok) {
    const self = this;
    /** @type {NonNullable<Code>|undefined} */ let marker;
    /** @type {string} */ let buffer;
    /** @type {number} */ let index;
    /** @type {State} */ let returnState;
    return start;
    /** @type {State} */ function start(code) {
        effects.enter("htmlText");
        effects.enter("htmlTextData");
        effects.consume(code);
        return open;
    }
    /** @type {State} */ function open(code) {
        if (code === 33) {
            effects.consume(code);
            return declarationOpen;
        }
        if (code === 47) {
            effects.consume(code);
            return tagCloseStart;
        }
        if (code === 63) {
            effects.consume(code);
            return instruction;
        }
        if ((0, _micromarkUtilCharacter.asciiAlpha)(code)) {
            effects.consume(code);
            return tagOpen;
        }
        return nok(code);
    }
    /** @type {State} */ function declarationOpen(code) {
        if (code === 45) {
            effects.consume(code);
            return commentOpen;
        }
        if (code === 91) {
            effects.consume(code);
            buffer = "CDATA[";
            index = 0;
            return cdataOpen;
        }
        if ((0, _micromarkUtilCharacter.asciiAlpha)(code)) {
            effects.consume(code);
            return declaration;
        }
        return nok(code);
    }
    /** @type {State} */ function commentOpen(code) {
        if (code === 45) {
            effects.consume(code);
            return commentStart;
        }
        return nok(code);
    }
    /** @type {State} */ function commentStart(code) {
        if (code === null || code === 62) {
            return nok(code);
        }
        if (code === 45) {
            effects.consume(code);
            return commentStartDash;
        }
        return comment(code);
    }
    /** @type {State} */ function commentStartDash(code) {
        if (code === null || code === 62) {
            return nok(code);
        }
        return comment(code);
    }
    /** @type {State} */ function comment(code) {
        if (code === null) {
            return nok(code);
        }
        if (code === 45) {
            effects.consume(code);
            return commentClose;
        }
        if ((0, _micromarkUtilCharacter.markdownLineEnding)(code)) {
            returnState = comment;
            return atLineEnding(code);
        }
        effects.consume(code);
        return comment;
    }
    /** @type {State} */ function commentClose(code) {
        if (code === 45) {
            effects.consume(code);
            return end;
        }
        return comment(code);
    }
    /** @type {State} */ function cdataOpen(code) {
        if (code === buffer.charCodeAt(index++)) {
            effects.consume(code);
            return index === buffer.length ? cdata : cdataOpen;
        }
        return nok(code);
    }
    /** @type {State} */ function cdata(code) {
        if (code === null) {
            return nok(code);
        }
        if (code === 93) {
            effects.consume(code);
            return cdataClose;
        }
        if ((0, _micromarkUtilCharacter.markdownLineEnding)(code)) {
            returnState = cdata;
            return atLineEnding(code);
        }
        effects.consume(code);
        return cdata;
    }
    /** @type {State} */ function cdataClose(code) {
        if (code === 93) {
            effects.consume(code);
            return cdataEnd;
        }
        return cdata(code);
    }
    /** @type {State} */ function cdataEnd(code) {
        if (code === 62) {
            return end(code);
        }
        if (code === 93) {
            effects.consume(code);
            return cdataEnd;
        }
        return cdata(code);
    }
    /** @type {State} */ function declaration(code) {
        if (code === null || code === 62) {
            return end(code);
        }
        if ((0, _micromarkUtilCharacter.markdownLineEnding)(code)) {
            returnState = declaration;
            return atLineEnding(code);
        }
        effects.consume(code);
        return declaration;
    }
    /** @type {State} */ function instruction(code) {
        if (code === null) {
            return nok(code);
        }
        if (code === 63) {
            effects.consume(code);
            return instructionClose;
        }
        if ((0, _micromarkUtilCharacter.markdownLineEnding)(code)) {
            returnState = instruction;
            return atLineEnding(code);
        }
        effects.consume(code);
        return instruction;
    }
    /** @type {State} */ function instructionClose(code) {
        return code === 62 ? end(code) : instruction(code);
    }
    /** @type {State} */ function tagCloseStart(code) {
        if ((0, _micromarkUtilCharacter.asciiAlpha)(code)) {
            effects.consume(code);
            return tagClose;
        }
        return nok(code);
    }
    /** @type {State} */ function tagClose(code) {
        if (code === 45 || (0, _micromarkUtilCharacter.asciiAlphanumeric)(code)) {
            effects.consume(code);
            return tagClose;
        }
        return tagCloseBetween(code);
    }
    /** @type {State} */ function tagCloseBetween(code) {
        if ((0, _micromarkUtilCharacter.markdownLineEnding)(code)) {
            returnState = tagCloseBetween;
            return atLineEnding(code);
        }
        if ((0, _micromarkUtilCharacter.markdownSpace)(code)) {
            effects.consume(code);
            return tagCloseBetween;
        }
        return end(code);
    }
    /** @type {State} */ function tagOpen(code) {
        if (code === 45 || (0, _micromarkUtilCharacter.asciiAlphanumeric)(code)) {
            effects.consume(code);
            return tagOpen;
        }
        if (code === 47 || code === 62 || (0, _micromarkUtilCharacter.markdownLineEndingOrSpace)(code)) {
            return tagOpenBetween(code);
        }
        return nok(code);
    }
    /** @type {State} */ function tagOpenBetween(code) {
        if (code === 47) {
            effects.consume(code);
            return end;
        }
        if (code === 58 || code === 95 || (0, _micromarkUtilCharacter.asciiAlpha)(code)) {
            effects.consume(code);
            return tagOpenAttributeName;
        }
        if ((0, _micromarkUtilCharacter.markdownLineEnding)(code)) {
            returnState = tagOpenBetween;
            return atLineEnding(code);
        }
        if ((0, _micromarkUtilCharacter.markdownSpace)(code)) {
            effects.consume(code);
            return tagOpenBetween;
        }
        return end(code);
    }
    /** @type {State} */ function tagOpenAttributeName(code) {
        if (code === 45 || code === 46 || code === 58 || code === 95 || (0, _micromarkUtilCharacter.asciiAlphanumeric)(code)) {
            effects.consume(code);
            return tagOpenAttributeName;
        }
        return tagOpenAttributeNameAfter(code);
    }
    /** @type {State} */ function tagOpenAttributeNameAfter(code) {
        if (code === 61) {
            effects.consume(code);
            return tagOpenAttributeValueBefore;
        }
        if ((0, _micromarkUtilCharacter.markdownLineEnding)(code)) {
            returnState = tagOpenAttributeNameAfter;
            return atLineEnding(code);
        }
        if ((0, _micromarkUtilCharacter.markdownSpace)(code)) {
            effects.consume(code);
            return tagOpenAttributeNameAfter;
        }
        return tagOpenBetween(code);
    }
    /** @type {State} */ function tagOpenAttributeValueBefore(code) {
        if (code === null || code === 60 || code === 61 || code === 62 || code === 96) {
            return nok(code);
        }
        if (code === 34 || code === 39) {
            effects.consume(code);
            marker = code;
            return tagOpenAttributeValueQuoted;
        }
        if ((0, _micromarkUtilCharacter.markdownLineEnding)(code)) {
            returnState = tagOpenAttributeValueBefore;
            return atLineEnding(code);
        }
        if ((0, _micromarkUtilCharacter.markdownSpace)(code)) {
            effects.consume(code);
            return tagOpenAttributeValueBefore;
        }
        effects.consume(code);
        marker = undefined;
        return tagOpenAttributeValueUnquoted;
    }
    /** @type {State} */ function tagOpenAttributeValueQuoted(code) {
        if (code === marker) {
            effects.consume(code);
            return tagOpenAttributeValueQuotedAfter;
        }
        if (code === null) {
            return nok(code);
        }
        if ((0, _micromarkUtilCharacter.markdownLineEnding)(code)) {
            returnState = tagOpenAttributeValueQuoted;
            return atLineEnding(code);
        }
        effects.consume(code);
        return tagOpenAttributeValueQuoted;
    }
    /** @type {State} */ function tagOpenAttributeValueQuotedAfter(code) {
        if (code === 62 || code === 47 || (0, _micromarkUtilCharacter.markdownLineEndingOrSpace)(code)) {
            return tagOpenBetween(code);
        }
        return nok(code);
    }
    /** @type {State} */ function tagOpenAttributeValueUnquoted(code) {
        if (code === null || code === 34 || code === 39 || code === 60 || code === 61 || code === 96) {
            return nok(code);
        }
        if (code === 62 || (0, _micromarkUtilCharacter.markdownLineEndingOrSpace)(code)) {
            return tagOpenBetween(code);
        }
        effects.consume(code);
        return tagOpenAttributeValueUnquoted;
    } // We can’t have blank lines in content, so no need to worry about empty
    // tokens.
    /** @type {State} */ function atLineEnding(code) {
        effects.exit("htmlTextData");
        effects.enter("lineEnding");
        effects.consume(code);
        effects.exit("lineEnding");
        return (0, _micromarkFactorySpace.factorySpace)(effects, afterPrefix, "linePrefix", self.parser.constructs.disable.null.includes("codeIndented") ? undefined : 4);
    }
    /** @type {State} */ function afterPrefix(code) {
        effects.enter("htmlTextData");
        return returnState(code);
    }
    /** @type {State} */ function end(code) {
        if (code === 62) {
            effects.consume(code);
            effects.exit("htmlTextData");
            effects.exit("htmlText");
            return ok;
        }
        return nok(code);
    }
}

},{"micromark-factory-space":"54gkm","micromark-util-character":"lRjrj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"leh3O":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "labelEnd", ()=>labelEnd);
/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').Event} Event
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Code} Code
 */ var _micromarkFactoryDestination = require("micromark-factory-destination");
var _micromarkFactoryLabel = require("micromark-factory-label");
var _micromarkFactoryTitle = require("micromark-factory-title");
var _micromarkFactoryWhitespace = require("micromark-factory-whitespace");
var _micromarkUtilCharacter = require("micromark-util-character");
var _micromarkUtilChunked = require("micromark-util-chunked");
var _micromarkUtilNormalizeIdentifier = require("micromark-util-normalize-identifier");
var _micromarkUtilResolveAll = require("micromark-util-resolve-all");
const labelEnd = {
    name: "labelEnd",
    tokenize: tokenizeLabelEnd,
    resolveTo: resolveToLabelEnd,
    resolveAll: resolveAllLabelEnd
};
/** @type {Construct} */ const resourceConstruct = {
    tokenize: tokenizeResource
};
/** @type {Construct} */ const fullReferenceConstruct = {
    tokenize: tokenizeFullReference
};
/** @type {Construct} */ const collapsedReferenceConstruct = {
    tokenize: tokenizeCollapsedReference
};
/** @type {Resolver} */ function resolveAllLabelEnd(events) {
    let index = -1;
    /** @type {Token} */ let token;
    while(++index < events.length){
        token = events[index][1];
        if (token.type === "labelImage" || token.type === "labelLink" || token.type === "labelEnd") {
            // Remove the marker.
            events.splice(index + 1, token.type === "labelImage" ? 4 : 2);
            token.type = "data";
            index++;
        }
    }
    return events;
}
/** @type {Resolver} */ function resolveToLabelEnd(events, context) {
    let index = events.length;
    let offset = 0;
    /** @type {Token} */ let token;
    /** @type {number|undefined} */ let open;
    /** @type {number|undefined} */ let close;
    /** @type {Event[]} */ let media // Find an opening.
    ;
    while(index--){
        token = events[index][1];
        if (open) {
            // If we see another link, or inactive link label, we’ve been here before.
            if (token.type === "link" || token.type === "labelLink" && token._inactive) break;
             // Mark other link openings as inactive, as we can’t have links in
            // links.
            if (events[index][0] === "enter" && token.type === "labelLink") token._inactive = true;
        } else if (close) {
            if (events[index][0] === "enter" && (token.type === "labelImage" || token.type === "labelLink") && !token._balanced) {
                open = index;
                if (token.type !== "labelLink") {
                    offset = 2;
                    break;
                }
            }
        } else if (token.type === "labelEnd") close = index;
    }
    const group = {
        type: events[open][1].type === "labelLink" ? "link" : "image",
        start: Object.assign({}, events[open][1].start),
        end: Object.assign({}, events[events.length - 1][1].end)
    };
    const label = {
        type: "label",
        start: Object.assign({}, events[open][1].start),
        end: Object.assign({}, events[close][1].end)
    };
    const text = {
        type: "labelText",
        start: Object.assign({}, events[open + offset + 2][1].end),
        end: Object.assign({}, events[close - 2][1].start)
    };
    media = [
        [
            "enter",
            group,
            context
        ],
        [
            "enter",
            label,
            context
        ]
    ] // Opening marker.
    ;
    media = (0, _micromarkUtilChunked.push)(media, events.slice(open + 1, open + offset + 3)) // Text open.
    ;
    media = (0, _micromarkUtilChunked.push)(media, [
        [
            "enter",
            text,
            context
        ]
    ]) // Between.
    ;
    media = (0, _micromarkUtilChunked.push)(media, (0, _micromarkUtilResolveAll.resolveAll)(context.parser.constructs.insideSpan.null, events.slice(open + offset + 4, close - 3), context)) // Text close, marker close, label close.
    ;
    media = (0, _micromarkUtilChunked.push)(media, [
        [
            "exit",
            text,
            context
        ],
        events[close - 2],
        events[close - 1],
        [
            "exit",
            label,
            context
        ]
    ]) // Reference, resource, or so.
    ;
    media = (0, _micromarkUtilChunked.push)(media, events.slice(close + 1)) // Media close.
    ;
    media = (0, _micromarkUtilChunked.push)(media, [
        [
            "exit",
            group,
            context
        ]
    ]);
    (0, _micromarkUtilChunked.splice)(events, open, events.length, media);
    return events;
}
/** @type {Tokenizer} */ function tokenizeLabelEnd(effects, ok, nok) {
    const self = this;
    let index = self.events.length;
    /** @type {Token} */ let labelStart;
    /** @type {boolean} */ let defined // Find an opening.
    ;
    while(index--)if ((self.events[index][1].type === "labelImage" || self.events[index][1].type === "labelLink") && !self.events[index][1]._balanced) {
        labelStart = self.events[index][1];
        break;
    }
    return start;
    /** @type {State} */ function start(code) {
        if (!labelStart) {
            return nok(code);
        } // It’s a balanced bracket, but contains a link.
        if (labelStart._inactive) return balanced(code);
        defined = self.parser.defined.includes((0, _micromarkUtilNormalizeIdentifier.normalizeIdentifier)(self.sliceSerialize({
            start: labelStart.end,
            end: self.now()
        })));
        effects.enter("labelEnd");
        effects.enter("labelMarker");
        effects.consume(code);
        effects.exit("labelMarker");
        effects.exit("labelEnd");
        return afterLabelEnd;
    }
    /** @type {State} */ function afterLabelEnd(code) {
        // Resource: `[asd](fgh)`.
        if (code === 40) {
            return effects.attempt(resourceConstruct, ok, defined ? ok : balanced)(code);
        } // Collapsed (`[asd][]`) or full (`[asd][fgh]`) reference?
        if (code === 91) {
            return effects.attempt(fullReferenceConstruct, ok, defined ? effects.attempt(collapsedReferenceConstruct, ok, balanced) : balanced)(code);
        } // Shortcut reference: `[asd]`?
        return defined ? ok(code) : balanced(code);
    }
    /** @type {State} */ function balanced(code) {
        labelStart._balanced = true;
        return nok(code);
    }
}
/** @type {Tokenizer} */ function tokenizeResource(effects, ok, nok) {
    return start;
    /** @type {State} */ function start(code) {
        effects.enter("resource");
        effects.enter("resourceMarker");
        effects.consume(code);
        effects.exit("resourceMarker");
        return (0, _micromarkFactoryWhitespace.factoryWhitespace)(effects, open);
    }
    /** @type {State} */ function open(code) {
        if (code === 41) {
            return end(code);
        }
        return (0, _micromarkFactoryDestination.factoryDestination)(effects, destinationAfter, nok, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(code);
    }
    /** @type {State} */ function destinationAfter(code) {
        return (0, _micromarkUtilCharacter.markdownLineEndingOrSpace)(code) ? (0, _micromarkFactoryWhitespace.factoryWhitespace)(effects, between)(code) : end(code);
    }
    /** @type {State} */ function between(code) {
        if (code === 34 || code === 39 || code === 40) {
            return (0, _micromarkFactoryTitle.factoryTitle)(effects, (0, _micromarkFactoryWhitespace.factoryWhitespace)(effects, end), nok, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(code);
        }
        return end(code);
    }
    /** @type {State} */ function end(code) {
        if (code === 41) {
            effects.enter("resourceMarker");
            effects.consume(code);
            effects.exit("resourceMarker");
            effects.exit("resource");
            return ok;
        }
        return nok(code);
    }
}
/** @type {Tokenizer} */ function tokenizeFullReference(effects, ok, nok) {
    const self = this;
    return start;
    /** @type {State} */ function start(code) {
        return (0, _micromarkFactoryLabel.factoryLabel).call(self, effects, afterLabel, nok, "reference", "referenceMarker", "referenceString")(code);
    }
    /** @type {State} */ function afterLabel(code) {
        return self.parser.defined.includes((0, _micromarkUtilNormalizeIdentifier.normalizeIdentifier)(self.sliceSerialize(self.events[self.events.length - 1][1]).slice(1, -1))) ? ok(code) : nok(code);
    }
}
/** @type {Tokenizer} */ function tokenizeCollapsedReference(effects, ok, nok) {
    return start;
    /** @type {State} */ function start(code) {
        effects.enter("reference");
        effects.enter("referenceMarker");
        effects.consume(code);
        effects.exit("referenceMarker");
        return open;
    }
    /** @type {State} */ function open(code) {
        if (code === 93) {
            effects.enter("referenceMarker");
            effects.consume(code);
            effects.exit("referenceMarker");
            effects.exit("reference");
            return ok;
        }
        return nok(code);
    }
}

},{"micromark-factory-destination":"jBdRG","micromark-factory-label":"3tY2o","micromark-factory-title":"bNkNR","micromark-factory-whitespace":"hP5RR","micromark-util-character":"lRjrj","micromark-util-chunked":"gjqro","micromark-util-normalize-identifier":"7BTmO","micromark-util-resolve-all":"bYv7P","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1Da2C":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "labelStartImage", ()=>labelStartImage);
/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 */ var _labelEndJs = require("./label-end.js");
const labelStartImage = {
    name: "labelStartImage",
    tokenize: tokenizeLabelStartImage,
    resolveAll: (0, _labelEndJs.labelEnd).resolveAll
};
/** @type {Tokenizer} */ function tokenizeLabelStartImage(effects, ok, nok) {
    const self = this;
    return start;
    /** @type {State} */ function start(code) {
        effects.enter("labelImage");
        effects.enter("labelImageMarker");
        effects.consume(code);
        effects.exit("labelImageMarker");
        return open;
    }
    /** @type {State} */ function open(code) {
        if (code === 91) {
            effects.enter("labelMarker");
            effects.consume(code);
            effects.exit("labelMarker");
            effects.exit("labelImage");
            return after;
        }
        return nok(code);
    }
    /** @type {State} */ function after(code) {
        /* To do: remove in the future once we’ve switched from
     * `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
     * which doesn’t need this */ /* Hidden footnotes hook */ /* c8 ignore next 3 */ return code === 94 && "_hiddenFootnoteSupport" in self.parser.constructs ? nok(code) : ok(code);
    }
}

},{"./label-end.js":"leh3O","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2FNWl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "labelStartLink", ()=>labelStartLink);
/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 */ var _labelEndJs = require("./label-end.js");
const labelStartLink = {
    name: "labelStartLink",
    tokenize: tokenizeLabelStartLink,
    resolveAll: (0, _labelEndJs.labelEnd).resolveAll
};
/** @type {Tokenizer} */ function tokenizeLabelStartLink(effects, ok, nok) {
    const self = this;
    return start;
    /** @type {State} */ function start(code) {
        effects.enter("labelLink");
        effects.enter("labelMarker");
        effects.consume(code);
        effects.exit("labelMarker");
        effects.exit("labelLink");
        return after;
    }
    /** @type {State} */ function after(code) {
        /* To do: remove in the future once we’ve switched from
     * `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
     * which doesn’t need this */ /* Hidden footnotes hook. */ /* c8 ignore next 3 */ return code === 94 && "_hiddenFootnoteSupport" in self.parser.constructs ? nok(code) : ok(code);
    }
}

},{"./label-end.js":"leh3O","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7b4KV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "lineEnding", ()=>lineEnding);
/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 */ var _micromarkFactorySpace = require("micromark-factory-space");
var _micromarkUtilCharacter = require("micromark-util-character");
const lineEnding = {
    name: "lineEnding",
    tokenize: tokenizeLineEnding
};
/** @type {Tokenizer} */ function tokenizeLineEnding(effects, ok) {
    return start;
    /** @type {State} */ function start(code) {
        effects.enter("lineEnding");
        effects.consume(code);
        effects.exit("lineEnding");
        return (0, _micromarkFactorySpace.factorySpace)(effects, ok, "linePrefix");
    }
}

},{"micromark-factory-space":"54gkm","micromark-util-character":"lRjrj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j1aFm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "list", ()=>list);
/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Exiter} Exiter
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Code} Code
 */ /**
 * @typedef {Record<string, unknown> & {marker: Code, type: string, size: number}} ListContainerState
 * @typedef {TokenizeContext & {containerState: ListContainerState}} TokenizeContextWithState
 */ var _micromarkFactorySpace = require("micromark-factory-space");
var _micromarkUtilCharacter = require("micromark-util-character");
var _blankLineJs = require("./blank-line.js");
var _thematicBreakJs = require("./thematic-break.js");
const list = {
    name: "list",
    tokenize: tokenizeListStart,
    continuation: {
        tokenize: tokenizeListContinuation
    },
    exit: tokenizeListEnd
};
/** @type {Construct} */ const listItemPrefixWhitespaceConstruct = {
    tokenize: tokenizeListItemPrefixWhitespace,
    partial: true
};
/** @type {Construct} */ const indentConstruct = {
    tokenize: tokenizeIndent,
    partial: true
};
/**
 * @type {Tokenizer}
 * @this {TokenizeContextWithState}
 */ function tokenizeListStart(effects, ok, nok) {
    const self = this;
    const tail = self.events[self.events.length - 1];
    let initialSize = tail && tail[1].type === "linePrefix" ? tail[2].sliceSerialize(tail[1], true).length : 0;
    let size = 0;
    return start;
    /** @type {State} */ function start(code) {
        const kind = self.containerState.type || (code === 42 || code === 43 || code === 45 ? "listUnordered" : "listOrdered");
        if (kind === "listUnordered" ? !self.containerState.marker || code === self.containerState.marker : (0, _micromarkUtilCharacter.asciiDigit)(code)) {
            if (!self.containerState.type) {
                self.containerState.type = kind;
                effects.enter(kind, {
                    _container: true
                });
            }
            if (kind === "listUnordered") {
                effects.enter("listItemPrefix");
                return code === 42 || code === 45 ? effects.check((0, _thematicBreakJs.thematicBreak), nok, atMarker)(code) : atMarker(code);
            }
            if (!self.interrupt || code === 49) {
                effects.enter("listItemPrefix");
                effects.enter("listItemValue");
                return inside(code);
            }
        }
        return nok(code);
    }
    /** @type {State} */ function inside(code) {
        if ((0, _micromarkUtilCharacter.asciiDigit)(code) && ++size < 10) {
            effects.consume(code);
            return inside;
        }
        if ((!self.interrupt || size < 2) && (self.containerState.marker ? code === self.containerState.marker : code === 41 || code === 46)) {
            effects.exit("listItemValue");
            return atMarker(code);
        }
        return nok(code);
    }
    /**
   * @type {State}
   **/ function atMarker(code) {
        effects.enter("listItemMarker");
        effects.consume(code);
        effects.exit("listItemMarker");
        self.containerState.marker = self.containerState.marker || code;
        return effects.check((0, _blankLineJs.blankLine), self.interrupt ? nok : onBlank, effects.attempt(listItemPrefixWhitespaceConstruct, endOfPrefix, otherPrefix));
    }
    /** @type {State} */ function onBlank(code) {
        self.containerState.initialBlankLine = true;
        initialSize++;
        return endOfPrefix(code);
    }
    /** @type {State} */ function otherPrefix(code) {
        if ((0, _micromarkUtilCharacter.markdownSpace)(code)) {
            effects.enter("listItemPrefixWhitespace");
            effects.consume(code);
            effects.exit("listItemPrefixWhitespace");
            return endOfPrefix;
        }
        return nok(code);
    }
    /** @type {State} */ function endOfPrefix(code) {
        self.containerState.size = initialSize + self.sliceSerialize(effects.exit("listItemPrefix"), true).length;
        return ok(code);
    }
}
/**
 * @type {Tokenizer}
 * @this {TokenizeContextWithState}
 */ function tokenizeListContinuation(effects, ok, nok) {
    const self = this;
    self.containerState._closeFlow = undefined;
    return effects.check((0, _blankLineJs.blankLine), onBlank, notBlank);
    /** @type {State} */ function onBlank(code) {
        self.containerState.furtherBlankLines = self.containerState.furtherBlankLines || self.containerState.initialBlankLine // We have a blank line.
        ;
        // Still, try to consume at most the items size.
        return (0, _micromarkFactorySpace.factorySpace)(effects, ok, "listItemIndent", self.containerState.size + 1)(code);
    }
    /** @type {State} */ function notBlank(code) {
        if (self.containerState.furtherBlankLines || !(0, _micromarkUtilCharacter.markdownSpace)(code)) {
            self.containerState.furtherBlankLines = undefined;
            self.containerState.initialBlankLine = undefined;
            return notInCurrentItem(code);
        }
        self.containerState.furtherBlankLines = undefined;
        self.containerState.initialBlankLine = undefined;
        return effects.attempt(indentConstruct, ok, notInCurrentItem)(code);
    }
    /** @type {State} */ function notInCurrentItem(code) {
        // While we do continue, we signal that the flow should be closed.
        self.containerState._closeFlow = true // As we’re closing flow, we’re no longer interrupting.
        ;
        self.interrupt = undefined;
        return (0, _micromarkFactorySpace.factorySpace)(effects, effects.attempt(list, ok, nok), "linePrefix", self.parser.constructs.disable.null.includes("codeIndented") ? undefined : 4)(code);
    }
}
/**
 * @type {Tokenizer}
 * @this {TokenizeContextWithState}
 */ function tokenizeIndent(effects, ok, nok) {
    const self = this;
    return (0, _micromarkFactorySpace.factorySpace)(effects, afterPrefix, "listItemIndent", self.containerState.size + 1);
    /** @type {State} */ function afterPrefix(code) {
        const tail = self.events[self.events.length - 1];
        return tail && tail[1].type === "listItemIndent" && tail[2].sliceSerialize(tail[1], true).length === self.containerState.size ? ok(code) : nok(code);
    }
}
/**
 * @type {Exiter}
 * @this {TokenizeContextWithState}
 */ function tokenizeListEnd(effects) {
    effects.exit(this.containerState.type);
}
/**
 * @type {Tokenizer}
 * @this {TokenizeContextWithState}
 */ function tokenizeListItemPrefixWhitespace(effects, ok, nok) {
    const self = this;
    return (0, _micromarkFactorySpace.factorySpace)(effects, afterPrefix, "listItemPrefixWhitespace", self.parser.constructs.disable.null.includes("codeIndented") ? undefined : 5);
    /** @type {State} */ function afterPrefix(code) {
        const tail = self.events[self.events.length - 1];
        return !(0, _micromarkUtilCharacter.markdownSpace)(code) && tail && tail[1].type === "listItemPrefixWhitespace" ? ok(code) : nok(code);
    }
}

},{"micromark-factory-space":"54gkm","micromark-util-character":"lRjrj","./blank-line.js":"eIeYy","./thematic-break.js":"hEr16","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hEr16":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "thematicBreak", ()=>thematicBreak);
/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Code} Code
 */ var _micromarkFactorySpace = require("micromark-factory-space");
var _micromarkUtilCharacter = require("micromark-util-character");
const thematicBreak = {
    name: "thematicBreak",
    tokenize: tokenizeThematicBreak
};
/** @type {Tokenizer} */ function tokenizeThematicBreak(effects, ok, nok) {
    let size = 0;
    /** @type {NonNullable<Code>} */ let marker;
    return start;
    /** @type {State} */ function start(code) {
        effects.enter("thematicBreak");
        marker = code;
        return atBreak(code);
    }
    /** @type {State} */ function atBreak(code) {
        if (code === marker) {
            effects.enter("thematicBreakSequence");
            return sequence(code);
        }
        if ((0, _micromarkUtilCharacter.markdownSpace)(code)) {
            return (0, _micromarkFactorySpace.factorySpace)(effects, atBreak, "whitespace")(code);
        }
        if (size < 3 || code !== null && !(0, _micromarkUtilCharacter.markdownLineEnding)(code)) {
            return nok(code);
        }
        effects.exit("thematicBreak");
        return ok(code);
    }
    /** @type {State} */ function sequence(code) {
        if (code === marker) {
            effects.consume(code);
            size++;
            return sequence;
        }
        effects.exit("thematicBreakSequence");
        return atBreak(code);
    }
}

},{"micromark-factory-space":"54gkm","micromark-util-character":"lRjrj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iCH31":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setextUnderline", ()=>setextUnderline);
/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Code} Code
 */ var _micromarkFactorySpace = require("micromark-factory-space");
var _micromarkUtilCharacter = require("micromark-util-character");
const setextUnderline = {
    name: "setextUnderline",
    tokenize: tokenizeSetextUnderline,
    resolveTo: resolveToSetextUnderline
};
/** @type {Resolver} */ function resolveToSetextUnderline(events, context) {
    let index = events.length;
    /** @type {number|undefined} */ let content;
    /** @type {number|undefined} */ let text;
    /** @type {number|undefined} */ let definition // Find the opening of the content.
    ;
    // It’ll always exist: we don’t tokenize if it isn’t there.
    while(index--)if (events[index][0] === "enter") {
        if (events[index][1].type === "content") {
            content = index;
            break;
        }
        if (events[index][1].type === "paragraph") text = index;
    } else {
        if (events[index][1].type === "content") // Remove the content end (if needed we’ll add it later)
        events.splice(index, 1);
        if (!definition && events[index][1].type === "definition") definition = index;
    }
    const heading = {
        type: "setextHeading",
        start: Object.assign({}, events[text][1].start),
        end: Object.assign({}, events[events.length - 1][1].end)
    } // Change the paragraph to setext heading text.
    ;
    events[text][1].type = "setextHeadingText" // If we have definitions in the content, we’ll keep on having content,
    ;
    // but we need move it.
    if (definition) {
        events.splice(text, 0, [
            "enter",
            heading,
            context
        ]);
        events.splice(definition + 1, 0, [
            "exit",
            events[content][1],
            context
        ]);
        events[content][1].end = Object.assign({}, events[definition][1].end);
    } else events[content][1] = heading;
     // Add the heading exit at the end.
    events.push([
        "exit",
        heading,
        context
    ]);
    return events;
}
/** @type {Tokenizer} */ function tokenizeSetextUnderline(effects, ok, nok) {
    const self = this;
    let index = self.events.length;
    /** @type {NonNullable<Code>} */ let marker;
    /** @type {boolean} */ let paragraph // Find an opening.
    ;
    while(index--)// Skip enter/exit of line ending, line prefix, and content.
    // We can now either have a definition or a paragraph.
    if (self.events[index][1].type !== "lineEnding" && self.events[index][1].type !== "linePrefix" && self.events[index][1].type !== "content") {
        paragraph = self.events[index][1].type === "paragraph";
        break;
    }
    return start;
    /** @type {State} */ function start(code) {
        if (!self.parser.lazy[self.now().line] && (self.interrupt || paragraph)) {
            effects.enter("setextHeadingLine");
            effects.enter("setextHeadingLineSequence");
            marker = code;
            return closingSequence(code);
        }
        return nok(code);
    }
    /** @type {State} */ function closingSequence(code) {
        if (code === marker) {
            effects.consume(code);
            return closingSequence;
        }
        effects.exit("setextHeadingLineSequence");
        return (0, _micromarkFactorySpace.factorySpace)(effects, closingSequenceEnd, "lineSuffix")(code);
    }
    /** @type {State} */ function closingSequenceEnd(code) {
        if (code === null || (0, _micromarkUtilCharacter.markdownLineEnding)(code)) {
            effects.exit("setextHeadingLine");
            return ok(code);
        }
        return nok(code);
    }
}

},{"micromark-factory-space":"54gkm","micromark-util-character":"lRjrj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cPmlm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "resolver", ()=>resolver);
parcelHelpers.export(exports, "string", ()=>string);
parcelHelpers.export(exports, "text", ()=>text);
const resolver = {
    resolveAll: createResolver()
};
const string = initializeFactory("string");
const text = initializeFactory("text");
/**
 * @param {'string'|'text'} field
 * @returns {InitialConstruct}
 */ function initializeFactory(field) {
    return {
        tokenize: initializeText,
        resolveAll: createResolver(field === "text" ? resolveAllLineSuffixes : undefined)
    };
    /** @type {Initializer} */ function initializeText(effects) {
        const self = this;
        const constructs = this.parser.constructs[field];
        const text1 = effects.attempt(constructs, start, notText);
        return start;
        /** @type {State} */ function start(code) {
            return atBreak(code) ? text1(code) : notText(code);
        }
        /** @type {State} */ function notText(code) {
            if (code === null) {
                effects.consume(code);
                return;
            }
            effects.enter("data");
            effects.consume(code);
            return data;
        }
        /** @type {State} */ function data(code) {
            if (atBreak(code)) {
                effects.exit("data");
                return text1(code);
            } // Data.
            effects.consume(code);
            return data;
        }
        /**
     * @param {Code} code
     * @returns {boolean}
     */ function atBreak(code) {
            if (code === null) {
                return true;
            }
            const list = constructs[code];
            let index = -1;
            if (list) {
                while(++index < list.length){
                    const item = list[index];
                    if (!item.previous || item.previous.call(self, self.previous)) {
                        return true;
                    }
                }
            }
            return false;
        }
    }
}
/**
 * @param {Resolver} [extraResolver]
 * @returns {Resolver}
 */ function createResolver(extraResolver) {
    return resolveAllText;
    /** @type {Resolver} */ function resolveAllText(events, context) {
        let index = -1;
        /** @type {number|undefined} */ let enter // A rather boring computation (to merge adjacent `data` events) which
        ;
        // improves mm performance by 29%.
        while(++index <= events.length){
            if (enter === undefined) {
                if (events[index] && events[index][1].type === "data") {
                    enter = index;
                    index++;
                }
            } else if (!events[index] || events[index][1].type !== "data") {
                // Don’t do anything if there is one data token.
                if (index !== enter + 2) {
                    events[enter][1].end = events[index - 1][1].end;
                    events.splice(enter + 2, index - enter - 2);
                    index = enter + 2;
                }
                enter = undefined;
            }
        }
        return extraResolver ? extraResolver(events, context) : events;
    }
}
/**
 * A rather ugly set of instructions which again looks at chunks in the input
 * stream.
 * The reason to do this here is that it is *much* faster to parse in reverse.
 * And that we can’t hook into `null` to split the line suffix before an EOF.
 * To do: figure out if we can make this into a clean utility, or even in core.
 * As it will be useful for GFMs literal autolink extension (and maybe even
 * tables?)
 *
 * @type {Resolver}
 */ function resolveAllLineSuffixes(events, context) {
    let eventIndex = 0 // Skip first.
    ;
    while(++eventIndex <= events.length)if ((eventIndex === events.length || events[eventIndex][1].type === "lineEnding") && events[eventIndex - 1][1].type === "data") {
        const data = events[eventIndex - 1][1];
        const chunks = context.sliceStream(data);
        let index = chunks.length;
        let bufferIndex = -1;
        let size = 0;
        /** @type {boolean|undefined} */ let tabs;
        while(index--){
            const chunk = chunks[index];
            if (typeof chunk === "string") {
                bufferIndex = chunk.length;
                while(chunk.charCodeAt(bufferIndex - 1) === 32){
                    size++;
                    bufferIndex--;
                }
                if (bufferIndex) break;
                bufferIndex = -1;
            } else if (chunk === -2) {
                tabs = true;
                size++;
            } else if (chunk === -1) ;
            else {
                // Replacement character, exit.
                index++;
                break;
            }
        }
        if (size) {
            const token = {
                type: eventIndex === events.length || tabs || size < 2 ? "lineSuffix" : "hardBreakTrailing",
                start: {
                    line: data.end.line,
                    column: data.end.column - size,
                    offset: data.end.offset - size,
                    _index: data.start._index + index,
                    _bufferIndex: index ? bufferIndex : data.start._bufferIndex + bufferIndex
                },
                end: Object.assign({}, data.end)
            };
            data.end = Object.assign({}, token.start);
            if (data.start.offset === data.end.offset) Object.assign(data, token);
            else {
                events.splice(eventIndex, 0, [
                    "enter",
                    token,
                    context
                ], [
                    "exit",
                    token,
                    context
                ]);
                eventIndex += 2;
            }
        }
        eventIndex++;
    }
    return events;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"BVpuW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Create a tokenizer.
 * Tokenizers deal with one type of data (e.g., containers, flow, text).
 * The parser is the object dealing with it all.
 * `initialize` works like other constructs, except that only its `tokenize`
 * function is used, in which case it doesn’t receive an `ok` or `nok`.
 * `from` can be given to set the point before the first character, although
 * when further lines are indented, they must be set with `defineSkip`.
 *
 * @param {ParseContext} parser
 * @param {InitialConstruct} initialize
 * @param {Omit<Point, '_index'|'_bufferIndex'>} [from]
 * @returns {TokenizeContext}
 */ parcelHelpers.export(exports, "createTokenizer", ()=>createTokenizer);
/**
 * @typedef {import('micromark-util-types').Code} Code
 * @typedef {import('micromark-util-types').Chunk} Chunk
 * @typedef {import('micromark-util-types').Point} Point
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').Effects} Effects
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').InitialConstruct} InitialConstruct
 * @typedef {import('micromark-util-types').ConstructRecord} ConstructRecord
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').ParseContext} ParseContext
 */ /**
 * @typedef Info
 * @property {() => void} restore
 * @property {number} from
 *
 * @callback ReturnHandle
 *   Handle a successful run.
 * @param {Construct} construct
 * @param {Info} info
 * @returns {void}
 */ var _micromarkUtilCharacter = require("micromark-util-character");
var _micromarkUtilChunked = require("micromark-util-chunked");
var _micromarkUtilResolveAll = require("micromark-util-resolve-all");
function createTokenizer(parser, initialize, from1) {
    /** @type {Point} */ let point = Object.assign(from1 ? Object.assign({}, from1) : {
        line: 1,
        column: 1,
        offset: 0
    }, {
        _index: 0,
        _bufferIndex: -1
    });
    /** @type {Record<string, number>} */ const columnStart = {};
    /** @type {Construct[]} */ const resolveAllConstructs = [];
    /** @type {Chunk[]} */ let chunks = [];
    /** @type {Token[]} */ let stack = [];
    /** @type {boolean|undefined} */ let consumed = true;
    /**
   * Tools used for tokenizing.
   *
   * @type {Effects}
   */ const effects = {
        consume,
        enter,
        exit,
        attempt: constructFactory(onsuccessfulconstruct),
        check: constructFactory(onsuccessfulcheck),
        interrupt: constructFactory(onsuccessfulcheck, {
            interrupt: true
        })
    };
    /**
   * State and tools for resolving and serializing.
   *
   * @type {TokenizeContext}
   */ const context = {
        previous: null,
        code: null,
        containerState: {},
        events: [],
        parser,
        sliceStream,
        sliceSerialize,
        now,
        defineSkip,
        write
    };
    /**
   * The state function.
   *
   * @type {State|void}
   */ let state = initialize.tokenize.call(context, effects);
    /**
   * Track which character we expect to be consumed, to catch bugs.
   *
   * @type {Code}
   */ let expectedCode;
    if (initialize.resolveAll) resolveAllConstructs.push(initialize);
    return context;
    /** @type {TokenizeContext['write']} */ function write(slice) {
        chunks = (0, _micromarkUtilChunked.push)(chunks, slice);
        main() // Exit if we’re not done, resolve might change stuff.
        ;
        if (chunks[chunks.length - 1] !== null) {
            return [];
        }
        addResult(initialize, 0) // Otherwise, resolve, and exit.
        ;
        context.events = (0, _micromarkUtilResolveAll.resolveAll)(resolveAllConstructs, context.events, context);
        return context.events;
    } //
    // Tools.
    //
    /** @type {TokenizeContext['sliceSerialize']} */ function sliceSerialize(token, expandTabs) {
        return serializeChunks(sliceStream(token), expandTabs);
    }
    /** @type {TokenizeContext['sliceStream']} */ function sliceStream(token) {
        return sliceChunks(chunks, token);
    }
    /** @type {TokenizeContext['now']} */ function now() {
        return Object.assign({}, point);
    }
    /** @type {TokenizeContext['defineSkip']} */ function defineSkip(value) {
        columnStart[value.line] = value.column;
        accountForPotentialSkip();
    } //
    // State management.
    //
    /**
   * Main loop (note that `_index` and `_bufferIndex` in `point` are modified by
   * `consume`).
   * Here is where we walk through the chunks, which either include strings of
   * several characters, or numerical character codes.
   * The reason to do this in a loop instead of a call is so the stack can
   * drain.
   *
   * @returns {void}
   */ function main() {
        /** @type {number} */ let chunkIndex;
        while(point._index < chunks.length){
            const chunk = chunks[point._index] // If we’re in a buffer chunk, loop through it.
            ;
            if (typeof chunk === "string") {
                chunkIndex = point._index;
                if (point._bufferIndex < 0) {
                    point._bufferIndex = 0;
                }
                while(point._index === chunkIndex && point._bufferIndex < chunk.length){
                    go(chunk.charCodeAt(point._bufferIndex));
                }
            } else {
                go(chunk);
            }
        }
    }
    /**
   * Deal with one code.
   *
   * @param {Code} code
   * @returns {void}
   */ function go(code) {
        consumed = undefined;
        expectedCode = code;
        state = state(code);
    }
    /** @type {Effects['consume']} */ function consume(code) {
        if ((0, _micromarkUtilCharacter.markdownLineEnding)(code)) {
            point.line++;
            point.column = 1;
            point.offset += code === -3 ? 2 : 1;
            accountForPotentialSkip();
        } else if (code !== -1) {
            point.column++;
            point.offset++;
        } // Not in a string chunk.
        if (point._bufferIndex < 0) {
            point._index++;
        } else {
            point._bufferIndex++ // At end of string chunk.
            ;
            // @ts-expect-error Points w/ non-negative `_bufferIndex` reference
            // strings.
            if (point._bufferIndex === chunks[point._index].length) {
                point._bufferIndex = -1;
                point._index++;
            }
        } // Expose the previous character.
        context.previous = code // Mark as consumed.
        ;
        consumed = true;
    }
    /** @type {Effects['enter']} */ function enter(type, fields) {
        /** @type {Token} */ // @ts-expect-error Patch instead of assign required fields to help GC.
        const token = fields || {};
        token.type = type;
        token.start = now();
        context.events.push([
            "enter",
            token,
            context
        ]);
        stack.push(token);
        return token;
    }
    /** @type {Effects['exit']} */ function exit(type) {
        const token = stack.pop();
        token.end = now();
        context.events.push([
            "exit",
            token,
            context
        ]);
        return token;
    }
    /**
   * Use results.
   *
   * @type {ReturnHandle}
   */ function onsuccessfulconstruct(construct, info) {
        addResult(construct, info.from);
    }
    /**
   * Discard results.
   *
   * @type {ReturnHandle}
   */ function onsuccessfulcheck(_, info) {
        info.restore();
    }
    /**
   * Factory to attempt/check/interrupt.
   *
   * @param {ReturnHandle} onreturn
   * @param {Record<string, unknown>} [fields]
   */ function constructFactory(onreturn, fields) {
        return hook;
        /**
     * Handle either an object mapping codes to constructs, a list of
     * constructs, or a single construct.
     *
     * @param {Construct|Construct[]|ConstructRecord} constructs
     * @param {State} returnState
     * @param {State} [bogusState]
     * @returns {State}
     */ function hook(constructs, returnState, bogusState) {
            /** @type {Construct[]} */ let listOfConstructs;
            /** @type {number} */ let constructIndex;
            /** @type {Construct} */ let currentConstruct;
            /** @type {Info} */ let info;
            return Array.isArray(constructs) ? /* c8 ignore next 1 */ handleListOfConstructs(constructs) : "tokenize" in constructs // @ts-expect-error Looks like a construct.
             ? handleListOfConstructs([
                constructs
            ]) : handleMapOfConstructs(constructs);
            /**
       * Handle a list of construct.
       *
       * @param {ConstructRecord} map
       * @returns {State}
       */ function handleMapOfConstructs(map) {
                return start;
                /** @type {State} */ function start(code) {
                    const def = code !== null && map[code];
                    const all = code !== null && map.null;
                    const list = [
                        // To do: add more extension tests.
                        /* c8 ignore next 2 */ ...Array.isArray(def) ? def : def ? [
                            def
                        ] : [],
                        ...Array.isArray(all) ? all : all ? [
                            all
                        ] : []
                    ];
                    return handleListOfConstructs(list)(code);
                }
            }
            /**
       * Handle a list of construct.
       *
       * @param {Construct[]} list
       * @returns {State}
       */ function handleListOfConstructs(list) {
                listOfConstructs = list;
                constructIndex = 0;
                if (list.length === 0) {
                    return bogusState;
                }
                return handleConstruct(list[constructIndex]);
            }
            /**
       * Handle a single construct.
       *
       * @param {Construct} construct
       * @returns {State}
       */ function handleConstruct(construct) {
                return start;
                /** @type {State} */ function start(code) {
                    // To do: not needed to store if there is no bogus state, probably?
                    // Currently doesn’t work because `inspect` in document does a check
                    // w/o a bogus, which doesn’t make sense. But it does seem to help perf
                    // by not storing.
                    info = store();
                    currentConstruct = construct;
                    if (!construct.partial) {
                        context.currentConstruct = construct;
                    }
                    if (construct.name && context.parser.constructs.disable.null.includes(construct.name)) {
                        return nok(code);
                    }
                    return construct.tokenize.call(// If we do have fields, create an object w/ `context` as its
                    // prototype.
                    // This allows a “live binding”, which is needed for `interrupt`.
                    fields ? Object.assign(Object.create(context), fields) : context, effects, ok, nok)(code);
                }
            }
            /** @type {State} */ function ok(code) {
                consumed = true;
                onreturn(currentConstruct, info);
                return returnState;
            }
            /** @type {State} */ function nok(code) {
                consumed = true;
                info.restore();
                if (++constructIndex < listOfConstructs.length) {
                    return handleConstruct(listOfConstructs[constructIndex]);
                }
                return bogusState;
            }
        }
    }
    /**
   * @param {Construct} construct
   * @param {number} from
   * @returns {void}
   */ function addResult(construct, from) {
        if (construct.resolveAll && !resolveAllConstructs.includes(construct)) {
            resolveAllConstructs.push(construct);
        }
        if (construct.resolve) {
            (0, _micromarkUtilChunked.splice)(context.events, from, context.events.length - from, construct.resolve(context.events.slice(from), context));
        }
        if (construct.resolveTo) {
            context.events = construct.resolveTo(context.events, context);
        }
    }
    /**
   * Store state.
   *
   * @returns {Info}
   */ function store() {
        const startPoint = now();
        const startPrevious = context.previous;
        const startCurrentConstruct = context.currentConstruct;
        const startEventsIndex = context.events.length;
        const startStack = Array.from(stack);
        return {
            restore,
            from: startEventsIndex
        };
        /**
     * Restore state.
     *
     * @returns {void}
     */ function restore() {
            point = startPoint;
            context.previous = startPrevious;
            context.currentConstruct = startCurrentConstruct;
            context.events.length = startEventsIndex;
            stack = startStack;
            accountForPotentialSkip();
        }
    }
    /**
   * Move the current point a bit forward in the line when it’s on a column
   * skip.
   *
   * @returns {void}
   */ function accountForPotentialSkip() {
        if (point.line in columnStart && point.column < 2) {
            point.column = columnStart[point.line];
            point.offset += columnStart[point.line] - 1;
        }
    }
}
/**
 * Get the chunks from a slice of chunks in the range of a token.
 *
 * @param {Chunk[]} chunks
 * @param {Pick<Token, 'start'|'end'>} token
 * @returns {Chunk[]}
 */ function sliceChunks(chunks, token) {
    const startIndex = token.start._index;
    const startBufferIndex = token.start._bufferIndex;
    const endIndex = token.end._index;
    const endBufferIndex = token.end._bufferIndex;
    /** @type {Chunk[]} */ let view;
    if (startIndex === endIndex) // @ts-expect-error `_bufferIndex` is used on string chunks.
    view = [
        chunks[startIndex].slice(startBufferIndex, endBufferIndex)
    ];
    else {
        view = chunks.slice(startIndex, endIndex);
        if (startBufferIndex > -1) // @ts-expect-error `_bufferIndex` is used on string chunks.
        view[0] = view[0].slice(startBufferIndex);
        if (endBufferIndex > 0) // @ts-expect-error `_bufferIndex` is used on string chunks.
        view.push(chunks[endIndex].slice(0, endBufferIndex));
    }
    return view;
}
/**
 * Get the string value of a slice of chunks.
 *
 * @param {Chunk[]} chunks
 * @param {boolean} [expandTabs=false]
 * @returns {string}
 */ function serializeChunks(chunks, expandTabs) {
    let index = -1;
    /** @type {string[]} */ const result = [];
    /** @type {boolean|undefined} */ let atTab;
    while(++index < chunks.length){
        const chunk = chunks[index];
        /** @type {string} */ let value;
        if (typeof chunk === "string") value = chunk;
        else switch(chunk){
            case -5:
                value = "\r";
                break;
            case -4:
                value = "\n";
                break;
            case -3:
                value = "\r\n";
                break;
            case -2:
                value = expandTabs ? " " : "	";
                break;
            case -1:
                if (!expandTabs && atTab) continue;
                value = " ";
                break;
            default:
                // Currently only replacement character.
                value = String.fromCharCode(chunk);
        }
        atTab = chunk === -2;
        result.push(value);
    }
    return result.join("");
}

},{"micromark-util-character":"lRjrj","micromark-util-chunked":"gjqro","micromark-util-resolve-all":"bYv7P","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eq29u":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "document", ()=>document);
parcelHelpers.export(exports, "contentInitial", ()=>contentInitial);
parcelHelpers.export(exports, "flowInitial", ()=>flowInitial);
parcelHelpers.export(exports, "flow", ()=>flow);
parcelHelpers.export(exports, "string", ()=>string);
parcelHelpers.export(exports, "text", ()=>text);
parcelHelpers.export(exports, "insideSpan", ()=>insideSpan);
parcelHelpers.export(exports, "attentionMarkers", ()=>attentionMarkers);
parcelHelpers.export(exports, "disable", ()=>disable);
/**
 * @typedef {import('micromark-util-types').Extension} Extension
 */ var _micromarkCoreCommonmark = require("micromark-core-commonmark");
var _textJs = require("./initialize/text.js");
const document = {
    [42]: (0, _micromarkCoreCommonmark.list),
    [43]: (0, _micromarkCoreCommonmark.list),
    [45]: (0, _micromarkCoreCommonmark.list),
    [48]: (0, _micromarkCoreCommonmark.list),
    [49]: (0, _micromarkCoreCommonmark.list),
    [50]: (0, _micromarkCoreCommonmark.list),
    [51]: (0, _micromarkCoreCommonmark.list),
    [52]: (0, _micromarkCoreCommonmark.list),
    [53]: (0, _micromarkCoreCommonmark.list),
    [54]: (0, _micromarkCoreCommonmark.list),
    [55]: (0, _micromarkCoreCommonmark.list),
    [56]: (0, _micromarkCoreCommonmark.list),
    [57]: (0, _micromarkCoreCommonmark.list),
    [62]: (0, _micromarkCoreCommonmark.blockQuote)
};
const contentInitial = {
    [91]: (0, _micromarkCoreCommonmark.definition)
};
const flowInitial = {
    [-2]: (0, _micromarkCoreCommonmark.codeIndented),
    [-1]: (0, _micromarkCoreCommonmark.codeIndented),
    [32]: (0, _micromarkCoreCommonmark.codeIndented)
};
const flow = {
    [35]: (0, _micromarkCoreCommonmark.headingAtx),
    [42]: (0, _micromarkCoreCommonmark.thematicBreak),
    [45]: [
        (0, _micromarkCoreCommonmark.setextUnderline),
        (0, _micromarkCoreCommonmark.thematicBreak)
    ],
    [60]: (0, _micromarkCoreCommonmark.htmlFlow),
    [61]: (0, _micromarkCoreCommonmark.setextUnderline),
    [95]: (0, _micromarkCoreCommonmark.thematicBreak),
    [96]: (0, _micromarkCoreCommonmark.codeFenced),
    [126]: (0, _micromarkCoreCommonmark.codeFenced)
};
const string = {
    [38]: (0, _micromarkCoreCommonmark.characterReference),
    [92]: (0, _micromarkCoreCommonmark.characterEscape)
};
const text = {
    [-5]: (0, _micromarkCoreCommonmark.lineEnding),
    [-4]: (0, _micromarkCoreCommonmark.lineEnding),
    [-3]: (0, _micromarkCoreCommonmark.lineEnding),
    [33]: (0, _micromarkCoreCommonmark.labelStartImage),
    [38]: (0, _micromarkCoreCommonmark.characterReference),
    [42]: (0, _micromarkCoreCommonmark.attention),
    [60]: [
        (0, _micromarkCoreCommonmark.autolink),
        (0, _micromarkCoreCommonmark.htmlText)
    ],
    [91]: (0, _micromarkCoreCommonmark.labelStartLink),
    [92]: [
        (0, _micromarkCoreCommonmark.hardBreakEscape),
        (0, _micromarkCoreCommonmark.characterEscape)
    ],
    [93]: (0, _micromarkCoreCommonmark.labelEnd),
    [95]: (0, _micromarkCoreCommonmark.attention),
    [96]: (0, _micromarkCoreCommonmark.codeText)
};
const insideSpan = {
    null: [
        (0, _micromarkCoreCommonmark.attention),
        (0, _textJs.resolver)
    ]
};
const attentionMarkers = {
    null: [
        42,
        95
    ]
};
const disable = {
    null: []
};

},{"micromark-core-commonmark":"hxEI3","./initialize/text.js":"cPmlm","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"88Fk9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @returns {Preprocessor}
 */ parcelHelpers.export(exports, "preprocess", ()=>preprocess);
/**
 * @typedef {import('micromark-util-types').Encoding} Encoding
 * @typedef {import('micromark-util-types').Value} Value
 * @typedef {import('micromark-util-types').Chunk} Chunk
 * @typedef {import('micromark-util-types').Code} Code
 */ /**
 * @callback Preprocessor
 * @param {Value} value
 * @param {Encoding} [encoding]
 * @param {boolean} [end=false]
 * @returns {Chunk[]}
 */ const search = /[\0\t\n\r]/g;
function preprocess() {
    let column = 1;
    let buffer = "";
    /** @type {boolean|undefined} */ let start = true;
    /** @type {boolean|undefined} */ let atCarriageReturn;
    return preprocessor;
    /** @type {Preprocessor} */ function preprocessor(value, encoding, end) {
        /** @type {Chunk[]} */ const chunks = [];
        /** @type {RegExpMatchArray|null} */ let match;
        /** @type {number} */ let next;
        /** @type {number} */ let startPosition;
        /** @type {number} */ let endPosition;
        /** @type {Code} */ let code // @ts-expect-error `Buffer` does allow an encoding.
        ;
        value = buffer + value.toString(encoding);
        startPosition = 0;
        buffer = "";
        if (start) {
            if (value.charCodeAt(0) === 65279) {
                startPosition++;
            }
            start = undefined;
        }
        while(startPosition < value.length){
            search.lastIndex = startPosition;
            match = search.exec(value);
            endPosition = match && match.index !== undefined ? match.index : value.length;
            code = value.charCodeAt(endPosition);
            if (!match) {
                buffer = value.slice(startPosition);
                break;
            }
            if (code === 10 && startPosition === endPosition && atCarriageReturn) {
                chunks.push(-3);
                atCarriageReturn = undefined;
            } else {
                if (atCarriageReturn) {
                    chunks.push(-5);
                    atCarriageReturn = undefined;
                }
                if (startPosition < endPosition) {
                    chunks.push(value.slice(startPosition, endPosition));
                    column += endPosition - startPosition;
                }
                switch(code){
                    case 0:
                        {
                            chunks.push(65533);
                            column++;
                            break;
                        }
                    case 9:
                        {
                            next = Math.ceil(column / 4) * 4;
                            chunks.push(-2);
                            while((column++) < next)chunks.push(-1);
                            break;
                        }
                    case 10:
                        {
                            chunks.push(-4);
                            column = 1;
                            break;
                        }
                    default:
                        {
                            atCarriageReturn = true;
                            column = 1;
                        }
                }
            }
            startPosition = endPosition + 1;
        }
        if (end) {
            if (atCarriageReturn) chunks.push(-5);
            if (buffer) chunks.push(buffer);
            chunks.push(null);
        }
        return chunks;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aUxbA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @param {Event[]} events
 * @returns {Event[]}
 */ parcelHelpers.export(exports, "postprocess", ()=>postprocess);
/**
 * @typedef {import('micromark-util-types').Event} Event
 */ var _micromarkUtilSubtokenize = require("micromark-util-subtokenize");
function postprocess(events) {
    while(!(0, _micromarkUtilSubtokenize.subtokenize)(events));
    return events;
}

},{"micromark-util-subtokenize":"h8qKe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bDldY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Turn the number (in string form as either hexa- or plain decimal) coming from
 * a numeric character reference into a character.
 *
 * @param {string} value
 *   Value to decode.
 * @param {number} base
 *   Numeric base.
 * @returns {string}
 */ parcelHelpers.export(exports, "decodeNumericCharacterReference", ()=>decodeNumericCharacterReference);
function decodeNumericCharacterReference(value, base) {
    const code = Number.parseInt(value, base);
    if (// C0 except for HT, LF, FF, CR, space
    code < 9 || code === 11 || code > 13 && code < 32 || code > 126 && code < 160 || code > 55295 && code < 57344 || code > 64975 && code < 65008 || (code & 65535) === 65535 || (code & 65535) === 65534 || code > 1114111) return "\uFFFD";
    return String.fromCharCode(code);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7rilP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Utility to decode markdown strings (which occur in places such as fenced
 * code info strings, destinations, labels, and titles).
 * The “string” content type allows character escapes and -references.
 * This decodes those.
 *
 * @param {string} value
 * @returns {string}
 */ parcelHelpers.export(exports, "decodeString", ()=>decodeString);
var _decodeNamedCharacterReference = require("decode-named-character-reference");
var _micromarkUtilDecodeNumericCharacterReference = require("micromark-util-decode-numeric-character-reference");
const characterEscapeOrReference = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function decodeString(value) {
    return value.replace(characterEscapeOrReference, decode);
}
/**
 * @param {string} $0
 * @param {string} $1
 * @param {string} $2
 * @returns {string}
 */ function decode($0, $1, $2) {
    if ($1) // Escape.
    return $1;
     // Reference.
    const head = $2.charCodeAt(0);
    if (head === 35) {
        const head = $2.charCodeAt(1);
        const hex = head === 120 || head === 88;
        return (0, _micromarkUtilDecodeNumericCharacterReference.decodeNumericCharacterReference)($2.slice(hex ? 2 : 1), hex ? 16 : 10);
    }
    return (0, _decodeNamedCharacterReference.decodeNamedCharacterReference)($2) || $0;
}

},{"decode-named-character-reference":"kCJTF","micromark-util-decode-numeric-character-reference":"bDldY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lxG0v":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @typedef {import('unist').Point} Point
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist').Position} Position
 * @typedef {object & {type: string, position?: Position|undefined}} NodeLike
 */ /**
 * Stringify one point, a position (start and end points), or a node’s
 * positional information.
 *
 * @param {Node|NodeLike|Position|Point|null} [value]
 * @returns {string}
 */ parcelHelpers.export(exports, "stringifyPosition", ()=>stringifyPosition);
function stringifyPosition(value) {
    // Nothing.
    if (!value || typeof value !== "object") return "";
    // Node.
    if ("position" in value || "type" in value) return position(value.position);
    // Position.
    if ("start" in value || "end" in value) return position(value);
    // Point.
    if ("line" in value || "column" in value) return point(value);
    // ?
    return "";
}
/**
 * @param {Point|undefined} point
 * @returns {string}
 */ function point(point1) {
    return index(point1 && point1.line) + ":" + index(point1 && point1.column);
}
/**
 * @param {Position|undefined} pos
 * @returns {string}
 */ function position(pos) {
    return point(pos && pos.start) + "-" + point(pos && pos.end);
}
/**
 * @param {number|undefined} value
 * @returns {number}
 */ function index(value) {
    return value && typeof value === "number" ? value : 1;
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1rZh1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "inspect", ()=>inspect);
/**
 * Inspects a node, without using color.
 *
 * @param {unknown} node
 * @param {InspectOptions} [options]
 * @returns {string}
 */ parcelHelpers.export(exports, "inspectNoColor", ()=>inspectNoColor);
/**
 * Inspects a node, using color.
 *
 * @param {unknown} tree
 * @param {InspectOptions} [options]
 * @returns {string}
 */ parcelHelpers.export(exports, "inspectColor", ()=>inspectColor);
var _colorJs = require("./color.js");
var inspect = (0, _colorJs.color) ? inspectColor : inspectNoColor;
var own = {}.hasOwnProperty;
var bold = ansiColor(1, 22);
var dim = ansiColor(2, 22);
var yellow = ansiColor(33, 39);
var green = ansiColor(32, 39);
// ANSI color regex.
/* eslint-disable-next-line no-control-regex */ var colorExpression = /(?:(?:\u001B\[)|\u009B)(?:\d{1,3})?(?:(?:;\d{0,3})*)?[A-M|f-m]|\u001B[A-M]/g;
function inspectNoColor(node, options) {
    return inspectColor(node, options).replace(colorExpression, "");
}
function inspectColor(tree, options) {
    var positions = !options || options.showPositions === null || options.showPositions === undefined ? true : options.showPositions;
    return inspectValue(tree);
    /**
   * @param {unknown} node
   * @returns {string}
   */ function inspectValue(node) {
        if (node && typeof node === "object" && "length" in node) {
            // @ts-ignore looks like a list of nodes.
            return inspectNodes(node);
        }
        // @ts-ignore looks like a single node.
        if (node && node.type) {
            // @ts-ignore looks like a single node.
            return inspectTree(node);
        }
        return inspectNonTree(node);
    }
    /**
   * @param {unknown} value
   * @returns {string}
   */ function inspectNonTree(value) {
        return JSON.stringify(value);
    }
    /**
   * @param {Node[]} nodes
   * @returns {string}
   */ function inspectNodes(nodes) {
        /** @type {Array.<string>} */ var result = [];
        var index = -1;
        while(++index < nodes.length){
            result.push(dim((index < nodes.length - 1 ? "\u251C" : "\u2514") + "\u2500" + index) + " " + indent(inspectValue(nodes[index]), (index < nodes.length - 1 ? dim("\u2502") : " ") + "   ", true));
        }
        return result.join("\n");
    }
    /**
   * @param {Object.<string, unknown>} object
   * @returns {string}
   */ function inspectFields(object) {
        /** @type {Array.<string>} */ var result = [];
        /** @type {string} */ var key;
        /** @type {unknown} */ var value;
        /** @type {string} */ var formatted;
        for(key in object){
            /* c8 ignore next 1 */ if (!own.call(object, key)) continue;
            value = object[key];
            if (value === undefined || // Standard keys defined by unist that we format differently.
            // <https://github.com/syntax-tree/unist>
            key === "type" || key === "value" || key === "children" || key === "position" || typeof value === "string" && (key === "name" || key === "tagName")) {
                continue;
            }
            // A single node.
            if (value && typeof value === "object" && // @ts-ignore looks like a node.
            value.type && key !== "data" && key !== "attributes" && key !== "properties") {
                // @ts-ignore looks like a node.
                formatted = inspectTree(value);
            } else if (value && typeof value === "object" && "length" in value && value[0] && value[0].type) {
                // @ts-ignore looks like a list of nodes.
                formatted = "\n" + inspectNodes(value);
            } else {
                formatted = inspectNonTree(value);
            }
            result.push(key + dim(":") + (/\s/.test(formatted.charAt(0)) ? "" : " ") + formatted);
        }
        return indent(result.join("\n"), // @ts-ignore looks like a parent node.
        (object.children && object.children.length > 0 ? dim("\u2502") : " ") + " ");
    }
    /**
   * @param {Node} node
   * @returns {string}
   */ function inspectTree(node) {
        var result = [
            formatNode(node)
        ];
        var fields = inspectFields(node);
        // @ts-ignore looks like a parent.
        var content = inspectNodes(node.children || []);
        if (fields) result.push(fields);
        if (content) result.push(content);
        return result.join("\n");
    }
    /**
   * Colored node formatter.
   *
   * @param {Node} node
   * @returns {string}
   */ function formatNode(node) {
        var result = [
            bold(node.type)
        ];
        var kind = node.tagName || node.name;
        var position = positions ? stringifyPosition(node.position) : "";
        if (typeof kind === "string") {
            result.push("<", kind, ">");
        }
        if (node.children) {
            // @ts-ignore looks like a parent.
            result.push(dim("["), yellow(node.children.length), dim("]"));
        } else if (typeof node.value === "string") {
            result.push(" ", green(inspectNonTree(node.value)));
        }
        if (position) {
            result.push(" ", dim("("), position, dim(")"));
        }
        return result.join("");
    }
}
/**
 * @param {string} value
 * @param {string} indentation
 * @param {boolean} [ignoreFirst=false]
 * @returns {string}
 */ function indent(value, indentation, ignoreFirst) {
    var lines = value.split("\n");
    var index = ignoreFirst ? 0 : -1;
    if (!value) return value;
    while(++index < lines.length)lines[index] = indentation + lines[index];
    return lines.join("\n");
}
/**
 * @param {Position} value
 * @returns {string}
 */ function stringifyPosition(value1) {
    /** @type {Position} */ // @ts-ignore
    var position = value1 || {};
    /** @type {Array.<string>} */ var result = [];
    /** @type {Array.<string>} */ var positions = [];
    /** @type {Array.<string>} */ var offsets = [];
    point(position.start);
    point(position.end);
    if (positions.length > 0) result.push(positions.join("-"));
    if (offsets.length > 0) result.push(offsets.join("-"));
    return result.join(", ");
    /**
   * @param {Point} value
   */ function point(value) {
        if (value) {
            positions.push((value.line || 1) + ":" + (value.column || 1));
            if ("offset" in value) {
                offsets.push(String(value.offset || 0));
            }
        }
    }
}
/**
 * Factory to wrap values in ANSI colours.
 *
 * @param {number} open
 * @param {number} close
 * @returns {function(string): string}
 */ function ansiColor(open, close) {
    return color;
    /**
   * @param {string} value
   * @returns {string}
   */ function color(value) {
        return "\x1b[" + open + "m" + value + "\x1b[" + close + "m";
    }
}

},{"./color.js":"hZitq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hZitq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "color", ()=>color);
var color = false;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1MRFO":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8hCw7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "removePosition", ()=>removePosition);
/**
 * @typedef {import('unist').Node} Node
 */ var _unistUtilVisit = require("unist-util-visit");
const removePosition = /**
     * @template {Node} Tree
     * @param {Tree} node
     * @param {boolean} [force=false]
     * @returns {Tree}
     */ /**
   * @type {(
   *   (<Tree extends Node>(tree: Tree, force?: false) => Tree) &
   *   (<Tree extends Node>(tree: Tree, force: true) => Tree)
   * )}
   */ function(node1, force) {
    (0, _unistUtilVisit.visit)(node1, remove);
    // @ts-ignore hush TS, we know what we’re doing.
    return node1;
    /**
       * @param {Node} node the unist tree
       */ function remove(node) {
        if (force) {
            delete node.position;
        } else {
            node.position = undefined;
        }
    }
};

},{"unist-util-visit":"b1dAt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b1dAt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CONTINUE", ()=>(0, _unistUtilVisitParents.CONTINUE));
parcelHelpers.export(exports, "SKIP", ()=>(0, _unistUtilVisitParents.SKIP));
parcelHelpers.export(exports, "EXIT", ()=>(0, _unistUtilVisitParents.EXIT));
parcelHelpers.export(exports, "visit", ()=>visit);
/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist').Parent} Parent
 * @typedef {import('unist-util-is').Test} Test
 * @typedef {import('unist-util-visit-parents').VisitorResult} VisitorResult
 * @typedef {import('./complex-types').Visitor} Visitor
 */ var _unistUtilVisitParents = require("unist-util-visit-parents");
const visit = /**
     * @param {Node} tree
     * @param {Test} test
     * @param {import('./complex-types').Visitor} visitor
     * @param {boolean} [reverse]
     */ /**
   * @type {(
   *   (<Tree extends Node, Check extends Test>(tree: Tree, test: Check, visitor: import('./complex-types').BuildVisitor<Tree, Check>, reverse?: boolean) => void) &
   *   (<Tree extends Node>(tree: Tree, visitor: import('./complex-types').BuildVisitor<Tree>, reverse?: boolean) => void)
   * )}
   */ function(tree, test, visitor, reverse) {
    if (typeof test === "function" && typeof visitor !== "function") {
        reverse = visitor;
        visitor = test;
        test = null;
    }
    (0, _unistUtilVisitParents.visitParents)(tree, test, overload, reverse);
    /**
       * @param {Node} node
       * @param {Array.<Parent>} parents
       */ function overload(node, parents) {
        const parent = parents[parents.length - 1];
        return visitor(node, parent ? parent.children.indexOf(node) : null, parent);
    }
};

},{"unist-util-visit-parents":"WzqqF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"WzqqF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CONTINUE", ()=>CONTINUE);
parcelHelpers.export(exports, "SKIP", ()=>SKIP);
parcelHelpers.export(exports, "EXIT", ()=>EXIT);
parcelHelpers.export(exports, "visitParents", ()=>visitParents);
/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist').Parent} Parent
 * @typedef {import('unist-util-is').Test} Test
 * @typedef {import('./complex-types').Action} Action
 * @typedef {import('./complex-types').Index} Index
 * @typedef {import('./complex-types').ActionTuple} ActionTuple
 * @typedef {import('./complex-types').VisitorResult} VisitorResult
 * @typedef {import('./complex-types').Visitor} Visitor
 */ var _unistUtilIs = require("unist-util-is");
var _colorJs = require("./color.js");
const CONTINUE = true;
const SKIP = "skip";
const EXIT = false;
const visitParents = /**
     * @param {Node} tree
     * @param {Test} test
     * @param {import('./complex-types').Visitor<Node>} visitor
     * @param {boolean} [reverse]
     */ /**
   * @type {(
   *   (<Tree extends Node, Check extends Test>(tree: Tree, test: Check, visitor: import('./complex-types').BuildVisitor<Tree, Check>, reverse?: boolean) => void) &
   *   (<Tree extends Node>(tree: Tree, visitor: import('./complex-types').BuildVisitor<Tree>, reverse?: boolean) => void)
   * )}
   */ function(tree, test, visitor, reverse) {
    if (typeof test === "function" && typeof visitor !== "function") {
        reverse = visitor;
        // @ts-expect-error no visitor given, so `visitor` is test.
        visitor = test;
        test = null;
    }
    const is = (0, _unistUtilIs.convert)(test);
    const step = reverse ? -1 : 1;
    factory(tree, null, [])();
    /**
       * @param {Node} node
       * @param {number?} index
       * @param {Array.<Parent>} parents
       */ function factory(node, index, parents) {
        /** @type {Object.<string, unknown>} */ // @ts-expect-error: hush
        const value = typeof node === "object" && node !== null ? node : {};
        /** @type {string|undefined} */ let name;
        if (typeof value.type === "string") {
            name = typeof value.tagName === "string" ? value.tagName : typeof value.name === "string" ? value.name : undefined;
            Object.defineProperty(visit, "name", {
                value: "node (" + (0, _colorJs.color)(value.type + (name ? "<" + name + ">" : "")) + ")"
            });
        }
        return visit;
        function visit() {
            /** @type {ActionTuple} */ let result = [];
            /** @type {ActionTuple} */ let subresult;
            /** @type {number} */ let offset;
            /** @type {Array.<Parent>} */ let grandparents;
            if (!test || is(node, index, parents[parents.length - 1] || null)) {
                result = toResult(visitor(node, parents));
                if (result[0] === EXIT) {
                    return result;
                }
            }
            // @ts-expect-error looks like a parent.
            if (node.children && result[0] !== SKIP) {
                // @ts-expect-error looks like a parent.
                offset = (reverse ? node.children.length : -1) + step;
                // @ts-expect-error looks like a parent.
                grandparents = parents.concat(node);
                // @ts-expect-error looks like a parent.
                while(offset > -1 && offset < node.children.length){
                    // @ts-expect-error looks like a parent.
                    subresult = factory(node.children[offset], offset, grandparents)();
                    if (subresult[0] === EXIT) {
                        return subresult;
                    }
                    offset = typeof subresult[1] === "number" ? subresult[1] : offset + step;
                }
            }
            return result;
        }
    }
};
/**
 * @param {VisitorResult} value
 * @returns {ActionTuple}
 */ function toResult(value) {
    if (Array.isArray(value)) return value;
    if (typeof value === "number") return [
        CONTINUE,
        value
    ];
    return [
        value
    ];
}

},{"unist-util-is":"i2Rbn","./color.js":"5bkby","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i2Rbn":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5bkby":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @param {string} d
 * @returns {string}
 */ parcelHelpers.export(exports, "color", ()=>color);
function color(d) {
    return d;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gy0ZP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @typedef {import('./lib/index.js').Schema} Schema
 */ parcelHelpers.export(exports, "sanitize", ()=>(0, _indexJs.sanitize));
parcelHelpers.export(exports, "defaultSchema", ()=>(0, _schemaJs.defaultSchema));
var _indexJs = require("./lib/index.js");
var _schemaJs = require("./lib/schema.js");

},{"./lib/index.js":"hKRXj","./lib/schema.js":"8X68A","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hKRXj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Utility to sanitize a tree
 *
 * @param {Node} node Hast tree to sanitize
 * @param {Schema} [schema] Schema defining how to sanitize - defaults to Github style sanitation
 */ parcelHelpers.export(exports, "sanitize", ()=>sanitize);
/**
 * @typedef {import('hast').Parent} Parent
 * @typedef {import('hast').Root} Root
 * @typedef {import('hast').Properties} Properties
 * @typedef {Parent['children'][number]|Root} Node
 *
 * @typedef {Properties[string]} PropertyValue Possible property values
 * @typedef {string|number|boolean} PrimitivePropertyValue Possible primitive HTML attribute values
 * @typedef {string|[string, ...PrimitivePropertyValue[]]} AttributeValue
 * @typedef {Object.<string, Array.<PrimitivePropertyValue>>} AttributeMap
 *
 * @typedef Schema Sanitization configuration
 * @property {Object<string, Array<AttributeValue>>} [attributes] Map of tag names to allowed property names. The special '*' key defines property names allowed on all elements
 * @property {Object<string, Object<string, PropertyValue>>} [required] Map of tag names to required property names and their default property value
 * @property {Array.<string>} [tagNames] List of allowed tag names
 * @property {Object<string, Array.<string>>} [protocols] Map of protocols to allow in property values
 * @property {Object<string, Array.<string>>} [ancestors] Map of tag names to their required ancestor elements
 * @property {Array.<string>} [clobber] List of allowed property names which can clobber
 * @property {string} [clobberPrefix] Prefix to use before potentially clobbering property names
 * @property {Array.<string>} [strip] Names of elements to strip from the tree
 * @property {boolean} [allowComments] Whether to allow comments
 * @property {boolean} [allowDoctypes] Whether to allow doctypes
 *
 * @typedef {(schema: Schema, value: unknown, node: Node, stack: Array.<string>) => unknown} Handler
 * @typedef {Object.<string, Handler>} NodeDefinition
 * @typedef {((schema: Schema, node: Node) => NodeDefinition)} NodeDefinitionGetter
 * @typedef {Object.<string, NodeDefinition|NodeDefinitionGetter>} NodeSchema
 */ var _schemaJs = require("./schema.js");
var own = {}.hasOwnProperty;
var push = [].push;
/** @type {NodeSchema} */ var nodeSchema = {
    root: {
        children: all
    },
    doctype: handleDoctype,
    comment: handleComment,
    element: {
        tagName: handleTagName,
        properties: handleProperties,
        children: all
    },
    text: {
        value: handleValue
    },
    "*": {
        data: allow,
        position: allow
    }
};
function sanitize(node, schema) {
    /** @type {Node} */ var ctx = {
        type: "root",
        children: []
    };
    /** @type {Node|Array.<Node>} */ var replace;
    if (node && typeof node === "object" && node.type) {
        replace = one(Object.assign({}, (0, _schemaJs.defaultSchema), schema || {}), node, []);
        if (replace) {
            if (Array.isArray(replace)) {
                if (replace.length === 1) ctx = replace[0];
                else // @ts-ignore Assume `root` is not a child.
                ctx.children = replace;
            } else ctx = replace;
        }
    }
    return ctx;
}
/**
 * Sanitize `node`.
 *
 * @param {Schema} schema
 * @param {Node} node
 * @param {Array.<string>} stack
 * @returns {Node|Array.<Node>|null}
 */ function one(schema, node, stack) {
    var type = node && node.type;
    /** @type {Node} */ // @ts-ignore rest of props added later.
    var replacement = {
        type: node.type
    };
    /** @type {boolean} */ var replace;
    /** @type {NodeDefinition|NodeDefinitionGetter} */ var definition;
    /** @type {NodeDefinition} */ var allowed;
    /** @type {unknown} */ var result;
    /** @type {string} */ var key;
    if (own.call(nodeSchema, type)) {
        definition = nodeSchema[type];
        if (typeof definition === "function") definition = definition(schema, node);
        if (definition) {
            replace = true;
            allowed = Object.assign({}, definition, nodeSchema["*"]);
            for(key in allowed)if (own.call(allowed, key)) {
                result = allowed[key](schema, node[key], node, stack);
                // eslint-disable-next-line max-depth
                if (result === false) {
                    replace = null;
                    // Set the non-safe value.
                    replacement[key] = node[key];
                } else if (result !== undefined && result !== null) replacement[key] = result;
            }
        }
    }
    if (replace) return replacement;
    return replacement.type === "element" && !schema.strip.includes(replacement.tagName) ? replacement.children : null;
}
/**
 * Sanitize `children`.
 *
 * @type {Handler}
 * @param {Array.<Node>} children
 * @returns {Array.<Node>}
 */ function all(schema, children, node, stack) {
    /** @type {Array.<Node>} */ var results = [];
    var index = -1;
    /** @type {Node|Array.<Node>} */ var value;
    if (Array.isArray(children)) {
        if (node.type === "element") stack.push(node.tagName);
        while(++index < children.length){
            value = one(schema, children[index], stack);
            if (value) {
                if ("length" in value) push.apply(results, value);
                else results.push(value);
            }
        }
        if (node.type === "element") stack.pop();
    }
    return results;
}
/** @type {NodeDefinitionGetter} */ function handleDoctype(schema) {
    return schema.allowDoctypes ? {
        name: handleDoctypeName
    } : null;
}
/** @type {NodeDefinitionGetter} */ function handleComment(schema) {
    return schema.allowComments ? {
        value: handleCommentValue
    } : null;
}
/**
 * Sanitize `properties`.
 *
 * @type {Handler}
 * @param {Properties} properties
 * @returns {Properties}
 */ function handleProperties(schema, properties, node, stack) {
    var name = handleTagName(schema, node.tagName, node, stack);
    /* c8 ignore next */ var reqs = schema.required || {};
    var props = properties || {};
    var allowed = Object.assign({}, toPropertyValueMap(schema.attributes["*"]), toPropertyValueMap(name && own.call(schema.attributes, name) ? schema.attributes[name] : []));
    /** @type {Properties} */ var result = {};
    /** @type {Array.<PrimitivePropertyValue>} */ var definition;
    /** @type {PropertyValue} */ var value;
    /** @type {string} */ var key;
    for(key in props)if (own.call(props, key)) {
        if (own.call(allowed, key)) definition = allowed[key];
        else if (data(key) && own.call(allowed, "data*")) definition = allowed["data*"];
        else continue;
        value = props[key];
        value = Array.isArray(value) ? handlePropertyValues(schema, value, key, definition) : handlePropertyValue(schema, value, key, definition);
        if (value !== undefined && value !== null) result[key] = value;
    }
    if (name && own.call(reqs, name)) {
        for(key in reqs[name])if (!own.call(result, key)) result[key] = reqs[name][key];
    }
    return result;
}
/**
 * Always return a valid HTML5 doctype.
 *
 * @type {Handler}
 * @returns {string}
 */ function handleDoctypeName() {
    return "html";
}
/**
 * Sanitize `tagName`.
 *
 * @type {Handler}
 * @returns {string|false}
 */ function handleTagName(schema, tagName, _, stack) {
    var name = typeof tagName === "string" ? tagName : "";
    var index = -1;
    if (!name || name === "*" || !schema.tagNames.includes(name)) return false;
    // Some nodes can break out of their context if they don’t have a certain
    // ancestor.
    if (own.call(schema.ancestors, name)) {
        while(++index < schema.ancestors[name].length){
            if (stack.includes(schema.ancestors[name][index])) return name;
        }
        return false;
    }
    return name;
}
/**
 * See <https://html.spec.whatwg.org/multipage/parsing.html#serialising-html-fragments>
 *
 * @type {Handler}
 * @returns {string}
 */ function handleCommentValue(_, value) {
    /** @type {string} */ var result = typeof value === "string" ? value : "";
    var index = result.indexOf("-->");
    return index < 0 ? result : result.slice(0, index);
}
/**
 * Sanitize `value`.
 *
 * @type {Handler}
 * @returns {string}
 */ function handleValue(_, value) {
    return typeof value === "string" ? value : "";
}
/**
 * Allow `value`.
 *
 * @type {Handler}
 */ function allow(_, value) {
    return value;
}
/**
 * Sanitize a property value which is a list.
 *
 * @param {Schema} schema
 * @param {Array.<unknown>} values
 * @param {string} prop
 * @param {Array.<PrimitivePropertyValue>} definition
 * @returns {Array.<string|number>}
 */ function handlePropertyValues(schema, values, prop, definition) {
    var index = -1;
    /** @type {Array.<string|number>} */ var result = [];
    /** @type {PropertyValue} */ var value;
    while(++index < values.length){
        value = handlePropertyValue(schema, values[index], prop, definition);
        if (value !== undefined && value !== null) // @ts-ignore Assume no booleans were in arrays.
        result.push(value);
    }
    return result;
}
/**
 * Sanitize a property value.
 *
 * @param {Schema} schema
 * @param {unknown} value
 * @param {string} prop
 * @param {Array.<PropertyValue>} definition
 * @returns {PropertyValue}
 */ function handlePropertyValue(schema, value, prop, definition) {
    if ((typeof value === "boolean" || typeof value === "number" || typeof value === "string") && safeProtocol(schema, value, prop) && (definition.length === 0 || definition.includes(value))) return schema.clobber.includes(prop) ? schema.clobberPrefix + value : value;
}
/**
 * Check whether `value` is a safe URL.
 *
 * @param {Schema} schema
 * @param {unknown} value
 * @param {string} prop
 * @returns {boolean}
 */ function safeProtocol(schema, value, prop) {
    var url = String(value);
    var colon = url.indexOf(":");
    var questionMark = url.indexOf("?");
    var numberSign = url.indexOf("#");
    var slash = url.indexOf("/");
    var protocols = own.call(schema.protocols, prop) ? schema.protocols[prop].concat() : [];
    var index = -1;
    if (protocols.length === 0 || colon < 0 || slash > -1 && colon > slash || questionMark > -1 && colon > questionMark || numberSign > -1 && colon > numberSign) return true;
    while(++index < protocols.length){
        if (colon === protocols[index].length && url.slice(0, protocols[index].length) === protocols[index]) return true;
    }
    return false;
}
/**
 * Create a map from a list of props or a list of properties and values.
 *
 * @param {Array.<AttributeValue>} values
 * @returns {AttributeMap}
 */ function toPropertyValueMap(values) {
    /** @type {AttributeMap} */ var result = {};
    var index = -1;
    /** @type {AttributeValue} */ var value;
    while(++index < values.length){
        value = values[index];
        if (Array.isArray(value)) result[value[0]] = value.slice(1);
        else result[value] = [];
    }
    return result;
}
/**
 * Check if `prop` is a data property.
 *
 * @param {string} prop
 * @returns {boolean}
 */ function data(prop) {
    return prop.length > 4 && prop.slice(0, 4).toLowerCase() === "data";
}

},{"./schema.js":"8X68A","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8X68A":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultSchema", ()=>defaultSchema);
const defaultSchema = {
    strip: [
        "script"
    ],
    clobberPrefix: "user-content-",
    clobber: [
        "name",
        "id"
    ],
    ancestors: {
        tbody: [
            "table"
        ],
        tfoot: [
            "table"
        ],
        thead: [
            "table"
        ],
        td: [
            "table"
        ],
        th: [
            "table"
        ],
        tr: [
            "table"
        ]
    },
    protocols: {
        href: [
            "http",
            "https",
            "mailto",
            "xmpp",
            "irc",
            "ircs"
        ],
        cite: [
            "http",
            "https"
        ],
        src: [
            "http",
            "https"
        ],
        longDesc: [
            "http",
            "https"
        ]
    },
    tagNames: [
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "br",
        "b",
        "i",
        "strong",
        "em",
        "a",
        "pre",
        "code",
        "img",
        "tt",
        "div",
        "ins",
        "del",
        "sup",
        "sub",
        "p",
        "ol",
        "ul",
        "table",
        "thead",
        "tbody",
        "tfoot",
        "blockquote",
        "dl",
        "dt",
        "dd",
        "kbd",
        "q",
        "samp",
        "var",
        "hr",
        "ruby",
        "rt",
        "rp",
        "li",
        "tr",
        "td",
        "th",
        "s",
        "strike",
        "summary",
        "details",
        "caption",
        "figure",
        "figcaption",
        "abbr",
        "bdo",
        "cite",
        "dfn",
        "mark",
        "small",
        "span",
        "time",
        "wbr",
        "input"
    ],
    attributes: {
        a: [
            "href"
        ],
        img: [
            "src",
            "longDesc"
        ],
        input: [
            [
                "type",
                "checkbox"
            ],
            [
                "disabled",
                true
            ]
        ],
        li: [
            [
                "className",
                "task-list-item"
            ]
        ],
        div: [
            "itemScope",
            "itemType"
        ],
        blockquote: [
            "cite"
        ],
        del: [
            "cite"
        ],
        ins: [
            "cite"
        ],
        q: [
            "cite"
        ],
        "*": [
            "abbr",
            "accept",
            "acceptCharset",
            "accessKey",
            "action",
            "align",
            "alt",
            "ariaDescribedBy",
            "ariaHidden",
            "ariaLabel",
            "ariaLabelledBy",
            "axis",
            "border",
            "cellPadding",
            "cellSpacing",
            "char",
            "charOff",
            "charSet",
            "checked",
            "clear",
            "cols",
            "colSpan",
            "color",
            "compact",
            "coords",
            "dateTime",
            "dir",
            "disabled",
            "encType",
            "htmlFor",
            "frame",
            "headers",
            "height",
            "hrefLang",
            "hSpace",
            "isMap",
            "id",
            "label",
            "lang",
            "maxLength",
            "media",
            "method",
            "multiple",
            "name",
            "noHref",
            "noShade",
            "noWrap",
            "open",
            "prompt",
            "readOnly",
            "rel",
            "rev",
            "rows",
            "rowSpan",
            "rules",
            "scope",
            "selected",
            "shape",
            "size",
            "span",
            "start",
            "summary",
            "tabIndex",
            "target",
            "title",
            "type",
            "useMap",
            "vAlign",
            "value",
            "vSpace",
            "width",
            "itemProp"
        ]
    },
    required: {
        input: {
            type: "checkbox",
            disabled: true
        }
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gDqgr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @typedef {import('./lib/index.js').Options} Options
 * @typedef {import('./lib/index.js').Handler} Handler
 * @typedef {import('./lib/index.js').Handlers} Handlers
 * @typedef {import('./lib/index.js').H} H
 * @typedef {import('./complex-types').Raw} Raw
 */ parcelHelpers.export(exports, "one", ()=>(0, _traverseJs.one));
parcelHelpers.export(exports, "all", ()=>(0, _traverseJs.all));
parcelHelpers.export(exports, "defaultHandlers", ()=>(0, _indexJs.defaultHandlers));
parcelHelpers.export(exports, "toHast", ()=>(0, _indexJs.toHast));
var _traverseJs = require("./lib/traverse.js");
var _indexJs = require("./lib/index.js");

},{"./lib/traverse.js":"1IYoF","./lib/index.js":"9bKL7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1IYoF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @type {Handler}
 * @param {MdastNode} node
 */ parcelHelpers.export(exports, "one", ()=>one);
/**
 * @param {H} h
 * @param {MdastNode} parent
 */ parcelHelpers.export(exports, "all", ()=>all);
/**
 * @typedef {import('mdast').Root|import('mdast').Parent['children'][number]} MdastNode
 * @typedef {import('./index.js').H} H
 * @typedef {import('./index.js').Handler} Handler
 * @typedef {import('./index.js').Content} Content
 */ var _unistBuilder = require("unist-builder");
const own = {}.hasOwnProperty;
/**
 * Transform an unknown node.
 * @type {Handler}
 * @param {MdastNode} node
 */ function unknown(h, node) {
    const data = node.data || {};
    if ("value" in node && !(own.call(data, "hName") || own.call(data, "hProperties") || own.call(data, "hChildren"))) return h.augment(node, (0, _unistBuilder.u)("text", node.value));
    return h(node, "div", all(h, node));
}
function one(h, node, parent) {
    const type = node && node.type;
    /** @type {Handler} */ let fn;
    // Fail on non-nodes.
    if (!type) throw new Error("Expected node, got `" + node + "`");
    if (own.call(h.handlers, type)) fn = h.handlers[type];
    else if (h.passThrough && h.passThrough.includes(type)) fn = returnNode;
    else fn = h.unknownHandler;
    return (typeof fn === "function" ? fn : unknown)(h, node, parent);
}
/**
 * @type {Handler}
 * @param {MdastNode} node
 */ function returnNode(h, node) {
    // @ts-expect-error: Pass through custom node.
    return "children" in node ? {
        ...node,
        children: all(h, node)
    } : node;
}
function all(h, parent) {
    /** @type {Array<Content>} */ const values = [];
    if ("children" in parent) {
        const nodes = parent.children;
        let index = -1;
        while(++index < nodes.length){
            const result = one(h, nodes[index], parent);
            if (result) {
                if (index && nodes[index - 1].type === "break") {
                    if (!Array.isArray(result) && result.type === "text") result.value = result.value.replace(/^\s+/, "");
                    if (!Array.isArray(result) && result.type === "element") {
                        const head = result.children[0];
                        if (head && head.type === "text") head.value = head.value.replace(/^\s+/, "");
                    }
                }
                if (Array.isArray(result)) values.push(...result);
                else values.push(result);
            }
        }
    }
    return values;
}

},{"unist-builder":"4XY8i","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9bKL7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Transform `tree` (an mdast node) to a hast node.
 *
 * @param {MdastNode} tree mdast node
 * @param {Options} [options] Configuration
 * @returns {HastNode|null|undefined} hast node
 */ parcelHelpers.export(exports, "toHast", ()=>toHast);
parcelHelpers.export(exports, "defaultHandlers", ()=>(0, _indexJs.handlers));
/**
 * @typedef {import('mdast').Root|import('mdast').Parent['children'][number]} MdastNode
 * @typedef {import('hast').Root|import('hast').Parent['children'][number]} HastNode
 * @typedef {import('mdast').Parent} Parent
 * @typedef {import('mdast').Definition} Definition
 * @typedef {import('mdast').FootnoteDefinition} FootnoteDefinition
 * @typedef {import('hast').Properties} Properties
 * @typedef {import('hast').Text} Text
 * @typedef {import('hast').Comment} Comment
 * @typedef {import('hast').Element} Element
 * @typedef {import('hast').Root} Root
 * @typedef {import('hast').ElementContent} Content
 * @typedef {import('unist-util-position').PositionLike} PositionLike
 *
 * @typedef EmbeddedHastFields
 * @property {string} [hName] Defines the tag name of an element
 * @property {Properties} [hProperties] Defines the properties of an element
 * @property {Array<Content>} [hChildren] Defines the (hast) children of an element
 *
 * @typedef {Record<string, unknown> & EmbeddedHastFields} Data unist data with embedded hast fields
 *
 * @typedef {MdastNode & {data?: Data}} NodeWithData unist node with embedded hast data
 *
 * @callback Handler
 * @param {H} h Handle context
 * @param {any} node mdast node to handle
 * @param {Parent|null} parent Parent of `node`
 * @returns {Content|Array<Content>|null|undefined} hast node
 *
 * @callback HFunctionProps
 * @param {MdastNode|PositionLike|null|undefined} node mdast node or unist position
 * @param {string} tagName HTML tag name
 * @param {Properties} props Properties
 * @param {Array<Content>?} [children] hast content
 * @returns {Element}
 *
 * @callback HFunctionNoProps
 * @param {MdastNode|PositionLike|null|undefined} node mdast node or unist position
 * @param {string} tagName HTML tag name
 * @param {Array<Content>?} [children] hast content
 * @returns {Element}
 *
 * @typedef HFields
 * @property {boolean} dangerous Whether HTML is allowed
 * @property {string} clobberPrefix Prefix to use to prevent DOM clobbering
 * @property {string} footnoteLabel Label to use to introduce the footnote section
 * @property {string} footnoteLabelTagName HTML used for the footnote label
 * @property {Properties} footnoteLabelProperties properties on the HTML tag used for the footnote label
 * @property {string} footnoteBackLabel Label to use to go back to a footnote call from the footnote section
 * @property {(identifier: string) => Definition|null} definition Definition cache
 * @property {Record<string, FootnoteDefinition>} footnoteById Footnote cache
 * @property {Array<string>} footnoteOrder Order in which footnotes occur
 * @property {Record<string, number>} footnoteCounts Counts the same footnote was used
 * @property {Handlers} handlers Applied handlers
 * @property {Handler} unknownHandler Handler for any none not in `passThrough` or otherwise handled
 * @property {(left: NodeWithData|PositionLike|null|undefined, right: Content) => Content} augment Like `h` but lower-level and usable on non-elements.
 * @property {Array<string>} passThrough List of node types to pass through untouched (except for their children).
 *
 * @typedef Options
 * @property {boolean} [allowDangerousHtml=false]
 *   Whether to allow `html` nodes and inject them as `raw` HTML
 * @property {string} [clobberPrefix='user-content-']
 *   Prefix to use before the `id` attribute to prevent it from *clobbering*.
 *   attributes.
 *   DOM clobbering is this:
 *
 *   ```html
 *   <p id=x></p>
 *   <script>alert(x)</script>
 *   ```
 *
 *   Elements by their ID are made available in browsers on the `window` object.
 *   Using a prefix prevents this from being a problem.
 * @property {string} [footnoteLabel='Footnotes']
 *   Label to use for the footnotes section.
 *   Affects screen reader users.
 *   Change it if you’re authoring in a different language.
 * @property {string} [footnoteLabelTagName='h2']
 *   HTML tag to use for the footnote label.
 *   Can be changed to match your document structure and play well with your choice of css.
 * @property {Properties} [footnoteLabelProperties={id: 'footnote-label', className: ['sr-only']}]
 *   Properties to use on the footnote label.
 *   A 'sr-only' class is added by default to hide this from sighted users.
 *   Change it to make the label visible, or add classes for other purposes.
 * @property {string} [footnoteBackLabel='Back to content']
 *   Label to use from backreferences back to their footnote call.
 *   Affects screen reader users.
 *   Change it if you’re authoring in a different language.
 * @property {Handlers} [handlers]
 *   Object mapping mdast nodes to functions handling them
 * @property {Array<string>} [passThrough]
 *   List of custom mdast node types to pass through (keep) in hast
 * @property {Handler} [unknownHandler]
 *   Handler for all unknown nodes.
 *
 * @typedef {Record<string, Handler>} Handlers
 *   Map of node types to handlers
 * @typedef {HFunctionProps & HFunctionNoProps & HFields} H
 *   Handle context
 */ var _unistBuilder = require("unist-builder");
var _unistUtilVisit = require("unist-util-visit");
var _unistUtilPosition = require("unist-util-position");
var _unistUtilGenerated = require("unist-util-generated");
var _mdastUtilDefinitions = require("mdast-util-definitions");
var _traverseJs = require("./traverse.js");
var _footerJs = require("./footer.js");
var _indexJs = require("./handlers/index.js");
const own = {}.hasOwnProperty;
/**
 * Factory to transform.
 * @param {MdastNode} tree mdast node
 * @param {Options} [options] Configuration
 * @returns {H} `h` function
 */ function factory(tree, options) {
    const settings = options || {};
    const dangerous = settings.allowDangerousHtml || false;
    /** @type {Record<string, FootnoteDefinition>} */ const footnoteById = {};
    h.dangerous = dangerous;
    h.clobberPrefix = settings.clobberPrefix === undefined || settings.clobberPrefix === null ? "user-content-" : settings.clobberPrefix;
    h.footnoteLabel = settings.footnoteLabel || "Footnotes";
    h.footnoteLabelTagName = settings.footnoteLabelTagName || "h2";
    h.footnoteLabelProperties = settings.footnoteLabelProperties || {
        id: "footnote-label",
        className: [
            "sr-only"
        ]
    };
    h.footnoteBackLabel = settings.footnoteBackLabel || "Back to content";
    h.definition = (0, _mdastUtilDefinitions.definitions)(tree);
    h.footnoteById = footnoteById;
    /** @type {Array<string>} */ h.footnoteOrder = [];
    /** @type {Record<string, number>} */ h.footnoteCounts = {};
    h.augment = augment;
    h.handlers = {
        ...(0, _indexJs.handlers),
        ...settings.handlers
    };
    h.unknownHandler = settings.unknownHandler;
    h.passThrough = settings.passThrough;
    (0, _unistUtilVisit.visit)(tree, "footnoteDefinition", (definition)=>{
        const id = String(definition.identifier).toUpperCase();
        // Mimick CM behavior of link definitions.
        // See: <https://github.com/syntax-tree/mdast-util-definitions/blob/8290999/index.js#L26>.
        if (!own.call(footnoteById, id)) footnoteById[id] = definition;
    });
    // @ts-expect-error Hush, it’s fine!
    return h;
    /**
   * Finalise the created `right`, a hast node, from `left`, an mdast node.
   * @param {(NodeWithData|PositionLike)?} left
   * @param {Content} right
   * @returns {Content}
   */ function augment(left, right) {
        // Handle `data.hName`, `data.hProperties, `data.hChildren`.
        if (left && "data" in left && left.data) {
            /** @type {Data} */ const data = left.data;
            if (data.hName) {
                if (right.type !== "element") {
                    right = {
                        type: "element",
                        tagName: "",
                        properties: {},
                        children: []
                    };
                }
                right.tagName = data.hName;
            }
            if (right.type === "element" && data.hProperties) {
                right.properties = {
                    ...right.properties,
                    ...data.hProperties
                };
            }
            if ("children" in right && right.children && data.hChildren) {
                right.children = data.hChildren;
            }
        }
        if (left) {
            const ctx = "type" in left ? left : {
                position: left
            };
            if (!(0, _unistUtilGenerated.generated)(ctx)) {
                // @ts-expect-error: fine.
                right.position = {
                    start: (0, _unistUtilPosition.pointStart)(ctx),
                    end: (0, _unistUtilPosition.pointEnd)(ctx)
                };
            }
        }
        return right;
    }
    /**
   * Create an element for `node`.
   *
   * @type {HFunctionProps}
   */ function h(node, tagName, props, children) {
        if (Array.isArray(props)) {
            children = props;
            props = {};
        }
        // @ts-expect-error augmenting an element yields an element.
        return augment(node, {
            type: "element",
            tagName,
            properties: props || {},
            children: children || []
        });
    }
}
function toHast(tree, options) {
    const h = factory(tree, options);
    const node = (0, _traverseJs.one)(h, tree, null);
    const foot = (0, _footerJs.footer)(h);
    if (foot) // @ts-expect-error If there’s a footer, there were definitions, meaning block
    // content.
    // So assume `node` is a parent node.
    node.children.push((0, _unistBuilder.u)("text", "\n"), foot);
    return Array.isArray(node) ? {
        type: "root",
        children: node
    } : node;
}

},{"unist-builder":"4XY8i","unist-util-visit":"b1dAt","unist-util-position":"5bQCr","unist-util-generated":"7UFOU","mdast-util-definitions":"97AEy","./traverse.js":"1IYoF","./footer.js":"6xwrt","./handlers/index.js":"6FpdC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5bQCr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "pointStart", ()=>pointStart);
parcelHelpers.export(exports, "pointEnd", ()=>pointEnd);
/**
 * Get the positional info of `node`.
 *
 * @param {NodeLike|Node} [node]
 * @returns {Position}
 */ parcelHelpers.export(exports, "position", ()=>position);
const pointStart = point("start");
const pointEnd = point("end");
function position(node) {
    return {
        start: pointStart(node),
        end: pointEnd(node)
    };
}
/**
 * Get the positional info of `node`.
 *
 * @param {'start'|'end'} type
 */ function point(type) {
    return point1;
    /**
   * Get the positional info of `node`.
   *
   * @param {NodeLike|Node} [node]
   * @returns {Point}
   */ function point1(node) {
        const point2 = node && node.position && node.position[type] || {};
        return {
            line: point2.line || null,
            column: point2.column || null,
            offset: point2.offset > -1 ? point2.offset : null
        };
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7UFOU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @typedef {Object} PointLike
 * @property {number} [line]
 * @property {number} [column]
 * @property {number} [offset]
 *
 * @typedef {Object} PositionLike
 * @property {PointLike} [start]
 * @property {PointLike} [end]
 *
 * @typedef {Object} NodeLike
 * @property {PositionLike} [position]
 */ /**
 * Check if `node` is *generated*.
 *
 * @param {NodeLike} [node]
 * @returns {boolean}
 */ parcelHelpers.export(exports, "generated", ()=>generated);
function generated(node) {
    return !node || !node.position || !node.position.start || !node.position.start.line || !node.position.start.column || !node.position.end || !node.position.end.line || !node.position.end.column;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"97AEy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Find definitions in `node`.
 * Uses CommonMark precedence, which means that earlier definitions are
 * preferred over duplicate later definitions.
 *
 * @param {Node} node
 */ parcelHelpers.export(exports, "definitions", ()=>definitions);
/**
 * @typedef {import('mdast').Root|import('mdast').Content} Node
 * @typedef {import('mdast').Definition} Definition
 */ var _unistUtilVisit = require("unist-util-visit");
const own = {}.hasOwnProperty;
function definitions(node) {
    /** @type {Record<string, Definition>} */ const cache = Object.create(null);
    if (!node || !node.type) throw new Error("mdast-util-definitions expected node");
    (0, _unistUtilVisit.visit)(node, "definition", (definition)=>{
        const id = clean(definition.identifier);
        if (id && !own.call(cache, id)) cache[id] = definition;
    });
    return definition1;
    /**
   * Get a node from the bound definition cache.
   *
   * @param {string} identifier
   * @returns {Definition|null}
   */ function definition1(identifier) {
        const id = clean(identifier);
        return id && own.call(cache, id) ? cache[id] : null;
    }
}
/**
 * @param {string} [value]
 * @returns {string}
 */ function clean(value) {
    return String(value || "").toUpperCase();
}

},{"unist-util-visit":"b1dAt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6xwrt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @param {H} h
 * @returns {Element|null}
 */ parcelHelpers.export(exports, "footer", ()=>footer);
/**
 * @typedef {import('mdast').BlockContent} BlockContent
 * @typedef {import('mdast').FootnoteDefinition} FootnoteDefinition
 * @typedef {import('hast').Element} Element
 * @typedef {import('hast').ElementContent} ElementContent
 * @typedef {import('./index.js').H} H
 */ var _micromarkUtilSanitizeUri = require("micromark-util-sanitize-uri");
var _unistBuilder = require("unist-builder");
var _traverseJs = require("./traverse.js");
var _wrapJs = require("./wrap.js");
function footer(h) {
    let index = -1;
    /** @type {Array<ElementContent>} */ const listItems = [];
    while(++index < h.footnoteOrder.length){
        const def = h.footnoteById[h.footnoteOrder[index].toUpperCase()];
        if (!def) continue;
        const content = (0, _traverseJs.all)(h, def);
        const id = String(def.identifier);
        const safeId = (0, _micromarkUtilSanitizeUri.sanitizeUri)(id.toLowerCase());
        let referenceIndex = 0;
        /** @type {Array<ElementContent>} */ const backReferences = [];
        while(++referenceIndex <= h.footnoteCounts[id]){
            /** @type {Element} */ const backReference = {
                type: "element",
                tagName: "a",
                properties: {
                    href: "#" + h.clobberPrefix + "fnref-" + safeId + (referenceIndex > 1 ? "-" + referenceIndex : ""),
                    dataFootnoteBackref: true,
                    className: [
                        "data-footnote-backref"
                    ],
                    ariaLabel: h.footnoteBackLabel
                },
                children: [
                    {
                        type: "text",
                        value: "\u21A9"
                    }
                ]
            };
            if (referenceIndex > 1) backReference.children.push({
                type: "element",
                tagName: "sup",
                children: [
                    {
                        type: "text",
                        value: String(referenceIndex)
                    }
                ]
            });
            if (backReferences.length > 0) backReferences.push({
                type: "text",
                value: " "
            });
            backReferences.push(backReference);
        }
        const tail = content[content.length - 1];
        if (tail && tail.type === "element" && tail.tagName === "p") {
            const tailTail = tail.children[tail.children.length - 1];
            if (tailTail && tailTail.type === "text") tailTail.value += " ";
            else tail.children.push({
                type: "text",
                value: " "
            });
            tail.children.push(...backReferences);
        } else content.push(...backReferences);
        /** @type {Element} */ const listItem = {
            type: "element",
            tagName: "li",
            properties: {
                id: h.clobberPrefix + "fn-" + safeId
            },
            children: (0, _wrapJs.wrap)(content, true)
        };
        if (def.position) listItem.position = def.position;
        listItems.push(listItem);
    }
    if (listItems.length === 0) return null;
    return {
        type: "element",
        tagName: "section",
        properties: {
            dataFootnotes: true,
            className: [
                "footnotes"
            ]
        },
        children: [
            {
                type: "element",
                tagName: h.footnoteLabelTagName,
                properties: JSON.parse(JSON.stringify(h.footnoteLabelProperties)),
                children: [
                    (0, _unistBuilder.u)("text", h.footnoteLabel)
                ]
            },
            {
                type: "text",
                value: "\n"
            },
            {
                type: "element",
                tagName: "ol",
                properties: {},
                children: (0, _wrapJs.wrap)(listItems, true)
            },
            {
                type: "text",
                value: "\n"
            }
        ]
    };
}

},{"micromark-util-sanitize-uri":"kIARR","unist-builder":"4XY8i","./traverse.js":"1IYoF","./wrap.js":"ilvKh","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kIARR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Make a value safe for injection as a URL.
 *
 * This encodes unsafe characters with percent-encoding and skips already
 * encoded sequences (see `normalizeUri` below).
 * Further unsafe characters are encoded as character references (see
 * `micromark-util-encode`).
 *
 * Then, a regex of allowed protocols can be given, in which case the URL is
 * sanitized.
 * For example, `/^(https?|ircs?|mailto|xmpp)$/i` can be used for `a[href]`,
 * or `/^https?$/i` for `img[src]`.
 * If the URL includes an unknown protocol (one not matched by `protocol`, such
 * as a dangerous example, `javascript:`), the value is ignored.
 *
 * @param {string|undefined} url
 * @param {RegExp} [protocol]
 * @returns {string}
 */ parcelHelpers.export(exports, "sanitizeUri", ()=>sanitizeUri);
var _micromarkUtilCharacter = require("micromark-util-character");
var _micromarkUtilEncode = require("micromark-util-encode");
function sanitizeUri(url, protocol) {
    const value = (0, _micromarkUtilEncode.encode)(normalizeUri(url || ""));
    if (!protocol) return value;
    const colon = value.indexOf(":");
    const questionMark = value.indexOf("?");
    const numberSign = value.indexOf("#");
    const slash = value.indexOf("/");
    if (// If there is no protocol, it’s relative.
    colon < 0 || slash > -1 && colon > slash || questionMark > -1 && colon > questionMark || numberSign > -1 && colon > numberSign || protocol.test(value.slice(0, colon))) return value;
    return "";
}
/**
 * Normalize a URL (such as used in definitions).
 *
 * Encode unsafe characters with percent-encoding, skipping already encoded
 * sequences.
 *
 * @param {string} value
 * @returns {string}
 */ function normalizeUri(value) {
    /** @type {string[]} */ const result = [];
    let index = -1;
    let start = 0;
    let skip = 0;
    while(++index < value.length){
        const code = value.charCodeAt(index);
        /** @type {string} */ let replace = "" // A correct percent encoded value.
        ;
        if (code === 37 && (0, _micromarkUtilCharacter.asciiAlphanumeric)(value.charCodeAt(index + 1)) && (0, _micromarkUtilCharacter.asciiAlphanumeric)(value.charCodeAt(index + 2))) skip = 2;
        else if (code < 128) {
            if (!/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(code))) replace = String.fromCharCode(code);
        } else if (code > 55295 && code < 57344) {
            const next = value.charCodeAt(index + 1) // A correct surrogate pair.
            ;
            if (code < 56320 && next > 56319 && next < 57344) {
                replace = String.fromCharCode(code, next);
                skip = 1;
            } else replace = "\uFFFD";
        } else replace = String.fromCharCode(code);
        if (replace) {
            result.push(value.slice(start, index), encodeURIComponent(replace));
            start = index + skip + 1;
            replace = "";
        }
        if (skip) {
            index += skip;
            skip = 0;
        }
    }
    return result.join("") + value.slice(start);
}

},{"micromark-util-character":"lRjrj","micromark-util-encode":"bLmgN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bLmgN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Encode only the dangerous HTML characters.
 *
 * This ensures that certain characters which have special meaning in HTML are
 * dealt with.
 * Technically, we can skip `>` and `"` in many cases, but CM includes them.
 *
 * @param {string} value
 * @returns {string}
 */ parcelHelpers.export(exports, "encode", ()=>encode);
const characterReferences = {
    '"': "quot",
    "&": "amp",
    "<": "lt",
    ">": "gt"
};
function encode(value1) {
    return value1.replace(/["&<>]/g, replace);
    /**
   * @param {string} value
   * @returns {string}
   */ function replace(value) {
        // @ts-expect-error Hush, it’s fine.
        return "&" + characterReferences[value] + ";";
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ilvKh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Wrap `nodes` with line feeds between each entry.
 * Optionally adds line feeds at the start and end.
 *
 * @param {Array<Content>} nodes
 * @param {boolean} [loose=false]
 * @returns {Array<Content>}
 */ parcelHelpers.export(exports, "wrap", ()=>wrap);
/**
 * @typedef {import('./index.js').Content} Content
 */ var _unistBuilder = require("unist-builder");
function wrap(nodes, loose) {
    /** @type {Array<Content>} */ const result = [];
    let index = -1;
    if (loose) result.push((0, _unistBuilder.u)("text", "\n"));
    while(++index < nodes.length){
        if (index) result.push((0, _unistBuilder.u)("text", "\n"));
        result.push(nodes[index]);
    }
    if (loose && nodes.length > 0) result.push((0, _unistBuilder.u)("text", "\n"));
    return result;
}

},{"unist-builder":"4XY8i","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6FpdC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "handlers", ()=>handlers);
var _blockquoteJs = require("./blockquote.js");
var _breakJs = require("./break.js");
var _codeJs = require("./code.js");
var _deleteJs = require("./delete.js");
var _emphasisJs = require("./emphasis.js");
var _footnoteReferenceJs = require("./footnote-reference.js");
var _footnoteJs = require("./footnote.js");
var _headingJs = require("./heading.js");
var _htmlJs = require("./html.js");
var _imageReferenceJs = require("./image-reference.js");
var _imageJs = require("./image.js");
var _inlineCodeJs = require("./inline-code.js");
var _linkReferenceJs = require("./link-reference.js");
var _linkJs = require("./link.js");
var _listItemJs = require("./list-item.js");
var _listJs = require("./list.js");
var _paragraphJs = require("./paragraph.js");
var _rootJs = require("./root.js");
var _strongJs = require("./strong.js");
var _tableJs = require("./table.js");
var _textJs = require("./text.js");
var _thematicBreakJs = require("./thematic-break.js");
const handlers = {
    blockquote: (0, _blockquoteJs.blockquote),
    break: (0, _breakJs.hardBreak),
    code: (0, _codeJs.code),
    delete: (0, _deleteJs.strikethrough),
    emphasis: (0, _emphasisJs.emphasis),
    footnoteReference: (0, _footnoteReferenceJs.footnoteReference),
    footnote: (0, _footnoteJs.footnote),
    heading: (0, _headingJs.heading),
    html: (0, _htmlJs.html),
    imageReference: (0, _imageReferenceJs.imageReference),
    image: (0, _imageJs.image),
    inlineCode: (0, _inlineCodeJs.inlineCode),
    linkReference: (0, _linkReferenceJs.linkReference),
    link: (0, _linkJs.link),
    listItem: (0, _listItemJs.listItem),
    list: (0, _listJs.list),
    paragraph: (0, _paragraphJs.paragraph),
    root: (0, _rootJs.root),
    strong: (0, _strongJs.strong),
    table: (0, _tableJs.table),
    text: (0, _textJs.text),
    thematicBreak: (0, _thematicBreakJs.thematicBreak),
    toml: ignore,
    yaml: ignore,
    definition: ignore,
    footnoteDefinition: ignore
};
// Return nothing for nodes that are ignored.
function ignore() {
    return null;
}

},{"./blockquote.js":"b036J","./break.js":"cae9r","./code.js":"9uCuI","./delete.js":"18aCr","./emphasis.js":"hpAQe","./footnote-reference.js":"eVLda","./footnote.js":"kYB7A","./heading.js":"gRMkI","./html.js":"fRGvv","./image-reference.js":"i6Lqn","./image.js":"iReLf","./inline-code.js":"aZoB8","./link-reference.js":"emgrY","./link.js":"j3NLj","./list-item.js":"RoEH4","./list.js":"9yHbj","./paragraph.js":"2z9YI","./root.js":"86a4X","./strong.js":"7bhTw","./table.js":"1qfCA","./text.js":"lQNUV","./thematic-break.js":"gp629","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b036J":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @type {Handler}
 * @param {Blockquote} node
 */ parcelHelpers.export(exports, "blockquote", ()=>blockquote);
/**
 * @typedef {import('mdast').Blockquote} Blockquote
 * @typedef {import('../index.js').Handler} Handler
 */ var _wrapJs = require("../wrap.js");
var _traverseJs = require("../traverse.js");
function blockquote(h, node) {
    return h(node, "blockquote", (0, _wrapJs.wrap)((0, _traverseJs.all)(h, node), true));
}

},{"../wrap.js":"ilvKh","../traverse.js":"1IYoF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cae9r":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @type {Handler}
 * @param {Break} node
 * @returns {Array<Element|Text>}
 */ parcelHelpers.export(exports, "hardBreak", ()=>hardBreak);
/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('hast').Text} Text
 * @typedef {import('mdast').Break} Break
 * @typedef {import('../index.js').Handler} Handler
 */ var _unistBuilder = require("unist-builder");
function hardBreak(h, node) {
    return [
        h(node, "br"),
        (0, _unistBuilder.u)("text", "\n")
    ];
}

},{"unist-builder":"4XY8i","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9uCuI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @type {Handler}
 * @param {Code} node
 */ parcelHelpers.export(exports, "code", ()=>code);
/**
 * @typedef {import('mdast').Code} Code
 * @typedef {import('hast').Element} Element
 * @typedef {import('hast').Properties} Properties
 * @typedef {import('../index.js').Handler} Handler
 */ var _unistBuilder = require("unist-builder");
function code(h, node) {
    const value = node.value ? node.value + "\n" : "";
    // To do: next major, use `node.lang` w/o regex, the splitting’s been going
    // on for years in remark now.
    const lang = node.lang && node.lang.match(/^[^ \t]+(?=[ \t]|$)/);
    /** @type {Properties} */ const props = {};
    if (lang) props.className = [
        "language-" + lang
    ];
    const code1 = h(node, "code", props, [
        (0, _unistBuilder.u)("text", value)
    ]);
    if (node.meta) code1.data = {
        meta: node.meta
    };
    return h(node.position, "pre", [
        code1
    ]);
}

},{"unist-builder":"4XY8i","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"18aCr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @type {Handler}
 * @param {Delete} node
 */ parcelHelpers.export(exports, "strikethrough", ()=>strikethrough);
/**
 * @typedef {import('mdast').Delete} Delete
 * @typedef {import('../index.js').Handler} Handler
 */ var _traverseJs = require("../traverse.js");
function strikethrough(h, node) {
    return h(node, "del", (0, _traverseJs.all)(h, node));
}

},{"../traverse.js":"1IYoF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hpAQe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @type {Handler}
 * @param {Emphasis} node
 */ parcelHelpers.export(exports, "emphasis", ()=>emphasis);
/**
 * @typedef {import('mdast').Emphasis} Emphasis
 * @typedef {import('../index.js').Handler} Handler
 */ var _traverseJs = require("../traverse.js");
function emphasis(h, node) {
    return h(node, "em", (0, _traverseJs.all)(h, node));
}

},{"../traverse.js":"1IYoF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eVLda":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @type {Handler}
 * @param {FootnoteReference} node
 */ parcelHelpers.export(exports, "footnoteReference", ()=>footnoteReference);
/**
 * @typedef {import('mdast').FootnoteReference} FootnoteReference
 * @typedef {import('../index.js').Handler} Handler
 */ var _micromarkUtilSanitizeUri = require("micromark-util-sanitize-uri");
var _unistBuilder = require("unist-builder");
function footnoteReference(h, node) {
    const id = String(node.identifier);
    const safeId = (0, _micromarkUtilSanitizeUri.sanitizeUri)(id.toLowerCase());
    const index = h.footnoteOrder.indexOf(id);
    /** @type {number} */ let counter;
    if (index === -1) {
        h.footnoteOrder.push(id);
        h.footnoteCounts[id] = 1;
        counter = h.footnoteOrder.length;
    } else {
        h.footnoteCounts[id]++;
        counter = index + 1;
    }
    const reuseCounter = h.footnoteCounts[id];
    return h(node, "sup", [
        h(node.position, "a", {
            href: "#" + h.clobberPrefix + "fn-" + safeId,
            id: h.clobberPrefix + "fnref-" + safeId + (reuseCounter > 1 ? "-" + reuseCounter : ""),
            dataFootnoteRef: true,
            ariaDescribedBy: "footnote-label"
        }, [
            (0, _unistBuilder.u)("text", String(counter))
        ])
    ]);
}

},{"micromark-util-sanitize-uri":"kIARR","unist-builder":"4XY8i","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kYB7A":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @type {Handler}
 * @param {Footnote} node
 */ parcelHelpers.export(exports, "footnote", ()=>footnote);
/**
 * @typedef {import('mdast').Footnote} Footnote
 * @typedef {import('../index.js').Handler} Handler
 *
 * @todo
 *   `footnote` (or “inline note”) are a pandoc footnotes feature (`^[a note]`)
 *   that does not exist in GFM.
 *   We still have support for it, so that things remain working with
 *   `micromark-extension-footnote` and `mdast-util-footnote`, but in the future
 *   we might be able to remove it?
 */ var _footnoteReferenceJs = require("./footnote-reference.js");
function footnote(h, node) {
    const footnoteById = h.footnoteById;
    let no = 1;
    while(no in footnoteById)no++;
    const identifier = String(no);
    footnoteById[identifier] = {
        type: "footnoteDefinition",
        identifier,
        children: [
            {
                type: "paragraph",
                children: node.children
            }
        ],
        position: node.position
    };
    return (0, _footnoteReferenceJs.footnoteReference)(h, {
        type: "footnoteReference",
        identifier,
        position: node.position
    });
}

},{"./footnote-reference.js":"eVLda","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gRMkI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @type {Handler}
 * @param {Heading} node
 */ parcelHelpers.export(exports, "heading", ()=>heading);
/**
 * @typedef {import('mdast').Heading} Heading
 * @typedef {import('../index.js').Handler} Handler
 */ var _traverseJs = require("../traverse.js");
function heading(h, node) {
    return h(node, "h" + node.depth, (0, _traverseJs.all)(h, node));
}

},{"../traverse.js":"1IYoF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fRGvv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Return either a `raw` node in dangerous mode, otherwise nothing.
 *
 * @type {Handler}
 * @param {HTML} node
 */ parcelHelpers.export(exports, "html", ()=>html);
/**
 * @typedef {import('mdast').HTML} HTML
 * @typedef {import('../index.js').Handler} Handler
 */ var _unistBuilder = require("unist-builder");
function html(h, node) {
    return h.dangerous ? h.augment(node, (0, _unistBuilder.u)("raw", node.value)) : null;
}

},{"unist-builder":"4XY8i","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i6Lqn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @type {Handler}
 * @param {ImageReference} node
 */ parcelHelpers.export(exports, "imageReference", ()=>imageReference);
/**
 * @typedef {import('mdast').ImageReference} ImageReference
 * @typedef {import('hast').Properties} Properties
 * @typedef {import('../index.js').Handler} Handler
 */ var _encodeJs = require("mdurl/encode.js");
var _encodeJsDefault = parcelHelpers.interopDefault(_encodeJs);
var _revertJs = require("../revert.js");
function imageReference(h, node) {
    const def = h.definition(node.identifier);
    if (!def) return (0, _revertJs.revert)(h, node);
    /** @type {Properties} */ const props = {
        src: (0, _encodeJsDefault.default)(def.url || ""),
        alt: node.alt
    };
    if (def.title !== null && def.title !== undefined) props.title = def.title;
    return h(node, "img", props);
}

},{"mdurl/encode.js":"2mZ0h","../revert.js":"jWvDx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2mZ0h":[function(require,module,exports) {
"use strict";
var encodeCache = {};
// Create a lookup array where anything but characters in `chars` string
// and alphanumeric chars is percent-encoded.
//
function getEncodeCache(exclude) {
    var i, ch, cache = encodeCache[exclude];
    if (cache) return cache;
    cache = encodeCache[exclude] = [];
    for(i = 0; i < 128; i++){
        ch = String.fromCharCode(i);
        if (/^[0-9a-z]$/i.test(ch)) // always allow unencoded alphanumeric characters
        cache.push(ch);
        else cache.push("%" + ("0" + i.toString(16).toUpperCase()).slice(-2));
    }
    for(i = 0; i < exclude.length; i++)cache[exclude.charCodeAt(i)] = exclude[i];
    return cache;
}
// Encode unsafe characters with percent-encoding, skipping already
// encoded sequences.
//
//  - string       - string to encode
//  - exclude      - list of characters to ignore (in addition to a-zA-Z0-9)
//  - keepEscaped  - don't encode '%' in a correct escape sequence (default: true)
//
function encode(string, exclude, keepEscaped) {
    var i, l, code, nextCode, cache, result = "";
    if (typeof exclude !== "string") {
        // encode(string, keepEscaped)
        keepEscaped = exclude;
        exclude = encode.defaultChars;
    }
    if (typeof keepEscaped === "undefined") keepEscaped = true;
    cache = getEncodeCache(exclude);
    for(i = 0, l = string.length; i < l; i++){
        code = string.charCodeAt(i);
        if (keepEscaped && code === 0x25 /* % */  && i + 2 < l) {
            if (/^[0-9a-f]{2}$/i.test(string.slice(i + 1, i + 3))) {
                result += string.slice(i, i + 3);
                i += 2;
                continue;
            }
        }
        if (code < 128) {
            result += cache[code];
            continue;
        }
        if (code >= 0xD800 && code <= 0xDFFF) {
            if (code >= 0xD800 && code <= 0xDBFF && i + 1 < l) {
                nextCode = string.charCodeAt(i + 1);
                if (nextCode >= 0xDC00 && nextCode <= 0xDFFF) {
                    result += encodeURIComponent(string[i] + string[i + 1]);
                    i++;
                    continue;
                }
            }
            result += "%EF%BF%BD";
            continue;
        }
        result += encodeURIComponent(string[i]);
    }
    return result;
}
encode.defaultChars = ";/?:@&=+$,-_.!~*'()#";
encode.componentChars = "-_.!~*'()";
module.exports = encode;

},{}],"jWvDx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Return the content of a reference without definition as plain text.
 *
 * @type {Handler}
 * @param {ImageReference|LinkReference} node
 * @returns {Content|Array<Content>}
 */ parcelHelpers.export(exports, "revert", ()=>revert);
/**
 * @typedef {import('mdast').LinkReference} LinkReference
 * @typedef {import('mdast').ImageReference} ImageReference
 * @typedef {import('./index.js').Handler} Handler
 * @typedef {import('./index.js').Content} Content
 */ var _unistBuilder = require("unist-builder");
var _traverseJs = require("./traverse.js");
function revert(h, node) {
    const subtype = node.referenceType;
    let suffix = "]";
    if (subtype === "collapsed") suffix += "[]";
    else if (subtype === "full") suffix += "[" + (node.label || node.identifier) + "]";
    if (node.type === "imageReference") return (0, _unistBuilder.u)("text", "![" + node.alt + suffix);
    const contents = (0, _traverseJs.all)(h, node);
    const head = contents[0];
    if (head && head.type === "text") head.value = "[" + head.value;
    else contents.unshift((0, _unistBuilder.u)("text", "["));
    const tail = contents[contents.length - 1];
    if (tail && tail.type === "text") tail.value += suffix;
    else contents.push((0, _unistBuilder.u)("text", suffix));
    return contents;
}

},{"unist-builder":"4XY8i","./traverse.js":"1IYoF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iReLf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @type {Handler}
 * @param {Image} node
 */ parcelHelpers.export(exports, "image", ()=>image);
/**
 * @typedef {import('mdast').Image} Image
 * @typedef {import('hast').Properties} Properties
 * @typedef {import('../index.js').Handler} Handler
 */ var _encodeJs = require("mdurl/encode.js");
var _encodeJsDefault = parcelHelpers.interopDefault(_encodeJs);
function image(h, node) {
    /** @type {Properties} */ const props = {
        src: (0, _encodeJsDefault.default)(node.url),
        alt: node.alt
    };
    if (node.title !== null && node.title !== undefined) props.title = node.title;
    return h(node, "img", props);
}

},{"mdurl/encode.js":"2mZ0h","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aZoB8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @type {Handler}
 * @param {InlineCode} node
 */ parcelHelpers.export(exports, "inlineCode", ()=>inlineCode);
/**
 * @typedef {import('mdast').InlineCode} InlineCode
 * @typedef {import('../index.js').Handler} Handler
 */ var _unistBuilder = require("unist-builder");
function inlineCode(h, node) {
    return h(node, "code", [
        (0, _unistBuilder.u)("text", node.value.replace(/\r?\n|\r/g, " "))
    ]);
}

},{"unist-builder":"4XY8i","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"emgrY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @type {Handler}
 * @param {LinkReference} node
 */ parcelHelpers.export(exports, "linkReference", ()=>linkReference);
/**
 * @typedef {import('mdast').LinkReference} LinkReference
 * @typedef {import('hast').Properties} Properties
 * @typedef {import('../index.js').Handler} Handler
 */ var _encodeJs = require("mdurl/encode.js");
var _encodeJsDefault = parcelHelpers.interopDefault(_encodeJs);
var _revertJs = require("../revert.js");
var _traverseJs = require("../traverse.js");
function linkReference(h, node) {
    const def = h.definition(node.identifier);
    if (!def) return (0, _revertJs.revert)(h, node);
    /** @type {Properties} */ const props = {
        href: (0, _encodeJsDefault.default)(def.url || "")
    };
    if (def.title !== null && def.title !== undefined) props.title = def.title;
    return h(node, "a", props, (0, _traverseJs.all)(h, node));
}

},{"mdurl/encode.js":"2mZ0h","../revert.js":"jWvDx","../traverse.js":"1IYoF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j3NLj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @type {Handler}
 * @param {Link} node
 */ parcelHelpers.export(exports, "link", ()=>link);
/**
 * @typedef {import('mdast').Link} Link
 * @typedef {import('hast').Properties} Properties
 * @typedef {import('../index.js').Handler} Handler
 */ var _encodeJs = require("mdurl/encode.js");
var _encodeJsDefault = parcelHelpers.interopDefault(_encodeJs);
var _traverseJs = require("../traverse.js");
function link(h, node) {
    /** @type {Properties} */ const props = {
        href: (0, _encodeJsDefault.default)(node.url)
    };
    if (node.title !== null && node.title !== undefined) props.title = node.title;
    return h(node, "a", props, (0, _traverseJs.all)(h, node));
}

},{"mdurl/encode.js":"2mZ0h","../traverse.js":"1IYoF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"RoEH4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @type {Handler}
 * @param {ListItem} node
 * @param {List} parent
 */ parcelHelpers.export(exports, "listItem", ()=>listItem);
/**
 * @typedef {import('mdast').ListItem} ListItem
 * @typedef {import('mdast').List} List
 * @typedef {import('hast').Properties} Properties
 * @typedef {import('hast').Element} Element
 * @typedef {import('../index.js').Handler} Handler
 * @typedef {import('../index.js').Content} Content
 */ var _unistBuilder = require("unist-builder");
var _traverseJs = require("../traverse.js");
function listItem(h, node, parent) {
    const result = (0, _traverseJs.all)(h, node);
    const loose = parent ? listLoose(parent) : listItemLoose(node);
    /** @type {Properties} */ const props = {};
    /** @type {Array<Content>} */ const wrapped = [];
    if (typeof node.checked === "boolean") {
        /** @type {Element} */ let paragraph;
        if (result[0] && result[0].type === "element" && result[0].tagName === "p") paragraph = result[0];
        else {
            paragraph = h(null, "p", []);
            result.unshift(paragraph);
        }
        if (paragraph.children.length > 0) paragraph.children.unshift((0, _unistBuilder.u)("text", " "));
        paragraph.children.unshift(h(null, "input", {
            type: "checkbox",
            checked: node.checked,
            disabled: true
        }));
        // According to github-markdown-css, this class hides bullet.
        // See: <https://github.com/sindresorhus/github-markdown-css>.
        props.className = [
            "task-list-item"
        ];
    }
    let index = -1;
    while(++index < result.length){
        const child = result[index];
        // Add eols before nodes, except if this is a loose, first paragraph.
        if (loose || index !== 0 || child.type !== "element" || child.tagName !== "p") wrapped.push((0, _unistBuilder.u)("text", "\n"));
        if (child.type === "element" && child.tagName === "p" && !loose) wrapped.push(...child.children);
        else wrapped.push(child);
    }
    const tail = result[result.length - 1];
    // Add a final eol.
    if (tail && (loose || !("tagName" in tail) || tail.tagName !== "p")) wrapped.push((0, _unistBuilder.u)("text", "\n"));
    return h(node, "li", props, wrapped);
}
/**
 * @param {List} node
 * @return {Boolean}
 */ function listLoose(node) {
    let loose = node.spread;
    const children = node.children;
    let index = -1;
    while(!loose && ++index < children.length)loose = listItemLoose(children[index]);
    return Boolean(loose);
}
/**
 * @param {ListItem} node
 * @return {Boolean}
 */ function listItemLoose(node) {
    const spread = node.spread;
    return spread === undefined || spread === null ? node.children.length > 1 : spread;
}

},{"unist-builder":"4XY8i","../traverse.js":"1IYoF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9yHbj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @type {Handler}
 * @param {List} node
 * @returns {Element}
 */ parcelHelpers.export(exports, "list", ()=>list);
/**
 * @typedef {import('mdast').List} List
 * @typedef {import('hast').Element} Element
 * @typedef {import('hast').Properties} Properties
 * @typedef {import('../index.js').Handler} Handler
 */ var _wrapJs = require("../wrap.js");
var _traverseJs = require("../traverse.js");
function list(h, node) {
    /** @type {Properties} */ const props = {};
    const name = node.ordered ? "ol" : "ul";
    const items = (0, _traverseJs.all)(h, node);
    let index = -1;
    if (typeof node.start === "number" && node.start !== 1) props.start = node.start;
    // Like GitHub, add a class for custom styling.
    while(++index < items.length){
        const item = items[index];
        if (item.type === "element" && item.tagName === "li" && item.properties && Array.isArray(item.properties.className) && item.properties.className.includes("task-list-item")) {
            props.className = [
                "contains-task-list"
            ];
            break;
        }
    }
    return h(node, name, props, (0, _wrapJs.wrap)(items, true));
}

},{"../wrap.js":"ilvKh","../traverse.js":"1IYoF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2z9YI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @type {Handler}
 * @param {Paragraph} node
 */ parcelHelpers.export(exports, "paragraph", ()=>paragraph);
/**
 * @typedef {import('mdast').Paragraph} Paragraph
 * @typedef {import('../index.js').Handler} Handler
 */ var _traverseJs = require("../traverse.js");
function paragraph(h, node) {
    return h(node, "p", (0, _traverseJs.all)(h, node));
}

},{"../traverse.js":"1IYoF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"86a4X":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @type {Handler}
 * @param {Root} node
 */ parcelHelpers.export(exports, "root", ()=>root);
/**
 * @typedef {import('mdast').Root} Root
 * @typedef {import('../index.js').Handler} Handler
 */ var _unistBuilder = require("unist-builder");
var _traverseJs = require("../traverse.js");
var _wrapJs = require("../wrap.js");
function root(h, node) {
    // @ts-expect-error `root`s are also fine.
    return h.augment(node, (0, _unistBuilder.u)("root", (0, _wrapJs.wrap)((0, _traverseJs.all)(h, node))));
}

},{"unist-builder":"4XY8i","../traverse.js":"1IYoF","../wrap.js":"ilvKh","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7bhTw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @type {Handler}
 * @param {Strong} node
 */ parcelHelpers.export(exports, "strong", ()=>strong);
/**
 * @typedef {import('mdast').Strong} Strong
 * @typedef {import('../index.js').Handler} Handler
 */ var _traverseJs = require("../traverse.js");
function strong(h, node) {
    return h(node, "strong", (0, _traverseJs.all)(h, node));
}

},{"../traverse.js":"1IYoF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1qfCA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @type {Handler}
 * @param {Table} node
 */ parcelHelpers.export(exports, "table", ()=>table);
/**
 * @typedef {import('mdast').Table} Table
 * @typedef {import('mdast').TableCell} TableCell
 * @typedef {import('hast').Element} Element
 * @typedef {import('../index.js').Handler} Handler
 * @typedef {import('../index.js').Content} Content
 */ var _unistUtilPosition = require("unist-util-position");
var _wrapJs = require("../wrap.js");
var _traverseJs = require("../traverse.js");
function table(h, node) {
    const rows = node.children;
    let index = -1;
    const align = node.align || [];
    /** @type {Array<Element>} */ const result = [];
    while(++index < rows.length){
        const row = rows[index].children;
        const name = index === 0 ? "th" : "td";
        /** @type {Array<Content>} */ const out = [];
        let cellIndex = -1;
        const length = node.align ? align.length : row.length;
        while(++cellIndex < length){
            const cell = row[cellIndex];
            out.push(h(cell, name, {
                align: align[cellIndex]
            }, cell ? (0, _traverseJs.all)(h, cell) : []));
        }
        result[index] = h(rows[index], "tr", (0, _wrapJs.wrap)(out, true));
    }
    return h(node, "table", (0, _wrapJs.wrap)([
        h(result[0].position, "thead", (0, _wrapJs.wrap)([
            result[0]
        ], true))
    ].concat(result[1] ? h({
        start: (0, _unistUtilPosition.pointStart)(result[1]),
        end: (0, _unistUtilPosition.pointEnd)(result[result.length - 1])
    }, "tbody", (0, _wrapJs.wrap)(result.slice(1), true)) : []), true));
}

},{"unist-util-position":"5bQCr","../wrap.js":"ilvKh","../traverse.js":"1IYoF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lQNUV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @type {Handler}
 * @param {Text} node
 */ parcelHelpers.export(exports, "text", ()=>text);
/**
 * @typedef {import('mdast').Text} Text
 * @typedef {import('../index.js').Handler} Handler
 */ var _trimLines = require("trim-lines");
var _unistBuilder = require("unist-builder");
function text(h, node) {
    return h.augment(node, (0, _unistBuilder.u)("text", (0, _trimLines.trimLines)(String(node.value))));
}

},{"trim-lines":"4OLXx","unist-builder":"4XY8i","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4OLXx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Remove initial and final spaces and tabs at the line breaks in `value`.
 * Does not trim initial and final spaces and tabs of the value itself.
 *
 * @param {string} value
 *   Value to trim.
 * @returns {string}
 *   Trimmed value.
 */ parcelHelpers.export(exports, "trimLines", ()=>trimLines);
const tab = 9 /* `\t` */ ;
const space = 32 /* ` ` */ ;
function trimLines(value) {
    const source = String(value);
    const search = /\r?\n|\r/g;
    let match = search.exec(source);
    let last = 0;
    /** @type {Array<string>} */ const lines = [];
    while(match){
        lines.push(trimLine(source.slice(last, match.index), last > 0, true), match[0]);
        last = match.index + match[0].length;
        match = search.exec(source);
    }
    lines.push(trimLine(source.slice(last), last > 0, false));
    return lines.join("");
}
/**
 * @param {string} value
 *   Line to trim.
 * @param {boolean} start
 *   Whether to trim the start of the line.
 * @param {boolean} end
 *   Whether to trim the end of the line.
 * @returns {string}
 *   Trimmed line.
 */ function trimLine(value, start, end) {
    let startIndex = 0;
    let endIndex = value.length;
    if (start) {
        let code = value.codePointAt(startIndex);
        while(code === tab || code === space){
            startIndex++;
            code = value.codePointAt(startIndex);
        }
    }
    if (end) {
        let code = value.codePointAt(endIndex - 1);
        while(code === tab || code === space){
            endIndex--;
            code = value.codePointAt(endIndex - 1);
        }
    }
    return endIndex > startIndex ? value.slice(startIndex, endIndex) : "";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gp629":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @typedef {import('mdast').ThematicBreak} ThematicBreak
 * @typedef {import('hast').Element} Element
 * @typedef {import('../index.js').Handler} Handler
 */ /**
 * @type {Handler}
 * @param {ThematicBreak} [node]
 * @returns {Element}
 */ parcelHelpers.export(exports, "thematicBreak", ()=>thematicBreak);
function thematicBreak(h, node) {
    return h(node, "hr");
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"leF5i":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @typedef {import('./lib/types.js').Options} Options
 */ parcelHelpers.export(exports, "toHtml", ()=>(0, _indexJs.toHtml));
var _indexJs = require("./lib/index.js");

},{"./lib/index.js":"5bMMu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5bMMu":[function(require,module,exports) {
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

},{"property-information":"gJnAE","html-void-elements":"hObSN","./omission/index.js":"e5Sq2","./tree.js":"bLfC4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hObSN":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e5Sq2":[function(require,module,exports) {
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

},{"./opening.js":"hTyfS","./closing.js":"hKb6l","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hTyfS":[function(require,module,exports) {
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

},{"hast-util-is-element":"703HB","./util/comment.js":"aA3yG","./util/siblings.js":"8iyab","./util/whitespace-start.js":"7uhqP","./closing.js":"hKb6l","./omission.js":"lERIk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"703HB":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aA3yG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "comment", ()=>comment);
/**
 * @typedef {import('../../types.js').Comment} Comment
 */ var _unistUtilIs = require("unist-util-is");
const comment = (0, _unistUtilIs.convert)("comment");

},{"unist-util-is":"i2Rbn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8iyab":[function(require,module,exports) {
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

},{"hast-util-whitespace":"YMnLj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"YMnLj":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7uhqP":[function(require,module,exports) {
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

},{"unist-util-is":"i2Rbn","hast-util-whitespace":"YMnLj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hKb6l":[function(require,module,exports) {
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

},{"hast-util-is-element":"703HB","./util/comment.js":"aA3yG","./util/siblings.js":"8iyab","./util/whitespace-start.js":"7uhqP","./omission.js":"lERIk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lERIk":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bLfC4":[function(require,module,exports) {
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

},{"property-information":"gJnAE","space-separated-tokens":"12UjR","comma-separated-tokens":"aekes","stringify-entities":"j5aki","ccount":"a7P1B","./constants.js":"3Z5AU","./comment.js":"fNZ7O","./doctype.js":"1yOus","./raw.js":"blSdS","./text.js":"367Py","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j5aki":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @typedef {import('./lib/index.js').LightOptions} LightOptions
 * @typedef {import('./lib/index.js').Options} Options
 */ var _indexJs = require("./lib/index.js");
parcelHelpers.exportAll(_indexJs, exports);

},{"./lib/index.js":"47PI5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"47PI5":[function(require,module,exports) {
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

},{"./core.js":"2CPCe","./util/format-smart.js":"knP7d","./util/format-basic.js":"bFhCV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2CPCe":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"knP7d":[function(require,module,exports) {
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

},{"./to-hexadecimal.js":"doh3p","./to-decimal.js":"hyRX0","./to-named.js":"4g27v","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"doh3p":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hyRX0":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4g27v":[function(require,module,exports) {
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

},{"character-entities-legacy":"bnOAG","character-entities-html4":"dBDGd","../constant/dangerous.js":"2vt4l","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bnOAG":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dBDGd":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2vt4l":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bFhCV":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a7P1B":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3Z5AU":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fNZ7O":[function(require,module,exports) {
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

},{"stringify-entities":"j5aki","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1yOus":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"blSdS":[function(require,module,exports) {
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

},{"./text.js":"367Py","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"367Py":[function(require,module,exports) {
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

},{"stringify-entities":"j5aki","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ikqQI":[function(require,module,exports) {
"use strict";
var isMergeableObject = function isMergeableObject(value) {
    return isNonNullObject(value) && !isSpecial(value);
};
function isNonNullObject(value) {
    return !!value && typeof value === "object";
}
function isSpecial(value) {
    var stringValue = Object.prototype.toString.call(value);
    return stringValue === "[object RegExp]" || stringValue === "[object Date]" || isReactElement(value);
}
// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === "function" && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for("react.element") : 0xeac7;
function isReactElement(value) {
    return value.$$typeof === REACT_ELEMENT_TYPE;
}
function emptyTarget(val) {
    return Array.isArray(val) ? [] : {};
}
function cloneUnlessOtherwiseSpecified(value, options) {
    return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
}
function defaultArrayMerge(target, source, options) {
    return target.concat(source).map(function(element) {
        return cloneUnlessOtherwiseSpecified(element, options);
    });
}
function getMergeFunction(key, options) {
    if (!options.customMerge) return deepmerge;
    var customMerge = options.customMerge(key);
    return typeof customMerge === "function" ? customMerge : deepmerge;
}
function getEnumerableOwnPropertySymbols(target) {
    return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter(function(symbol) {
        return target.propertyIsEnumerable(symbol);
    }) : [];
}
function getKeys(target) {
    return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
}
function propertyIsOnObject(object, property) {
    try {
        return property in object;
    } catch (_) {
        return false;
    }
}
// Protects from prototype poisoning and unexpected merging up the prototype chain.
function propertyIsUnsafe(target, key) {
    return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,
     && !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
     && Object.propertyIsEnumerable.call(target, key) // and also unsafe if they're nonenumerable.
    );
}
function mergeObject(target, source, options) {
    var destination = {};
    if (options.isMergeableObject(target)) getKeys(target).forEach(function(key) {
        destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
    });
    getKeys(source).forEach(function(key) {
        if (propertyIsUnsafe(target, key)) return;
        if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
        else destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
    });
    return destination;
}
function deepmerge(target, source, options) {
    options = options || {};
    options.arrayMerge = options.arrayMerge || defaultArrayMerge;
    options.isMergeableObject = options.isMergeableObject || isMergeableObject;
    // cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
    // implementations can use it. The caller may not replace it.
    options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
    var sourceIsArray = Array.isArray(source);
    var targetIsArray = Array.isArray(target);
    var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;
    if (!sourceAndTargetTypesMatch) return cloneUnlessOtherwiseSpecified(source, options);
    else if (sourceIsArray) return options.arrayMerge(target, source, options);
    else return mergeObject(target, source, options);
}
deepmerge.all = function deepmergeAll(array, options) {
    if (!Array.isArray(array)) throw new Error("first argument should be an array");
    return array.reduce(function(prev, next) {
        return deepmerge(prev, next, options);
    }, {});
};
var deepmerge_1 = deepmerge;
module.exports = deepmerge_1;

},{}]},["8TtF2","gLLPy"], "gLLPy", "parcelRequire6330")

//# sourceMappingURL=index.4d6bcbeb.js.map
