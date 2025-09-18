/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/MarketplaceApp.jsx":
/*!********************************!*\
  !*** ./src/MarketplaceApp.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_MarketPlace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/MarketPlace */ "./src/components/MarketPlace.jsx");



const MarketplaceApp = ({
  apiBaseUrl,
  useWPHandlers,
  wpConfig,
  enableDefaultStyles
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "marketplace-container gv-p-lg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "Available Plugins"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_MarketPlace__WEBPACK_IMPORTED_MODULE_1__["default"], {
    apiBaseUrl: apiBaseUrl,
    useWPHandlers: useWPHandlers,
    wpConfig: wpConfig,
    enableDefaultStyles: enableDefaultStyles
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MarketplaceApp);

/***/ }),

/***/ "./src/components/MarketPlace.jsx":
/*!****************************************!*\
  !*** ./src/components/MarketPlace.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Marketplace)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _normalised_plugins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./normalised-plugins */ "./src/components/normalised-plugins.jsx");
/* harmony import */ var _PluginActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PluginActions */ "./src/components/PluginActions.jsx");




function Marketplace({
  apiBaseUrl,
  useWPHandlers,
  wpConfig,
  enableDefaultStyles
}) {
  const [plugins, setPlugins] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [pluginInAction, setPluginInAction] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    async function fetchPlugins() {
      try {
        const res = await fetch(`${apiBaseUrl}`);
        const json = await res.json();
        const normalized = (0,_normalised_plugins__WEBPACK_IMPORTED_MODULE_1__.normalizePlugins)(json);
        setPlugins(normalized);
      } catch (e) {
        console.error("Failed to fetch plugins", e);
      } finally {
        setLoading(false);
      }
    }
    fetchPlugins();
  }, [apiBaseUrl, useWPHandlers, wpConfig]);
  const handlePluginAction = async (action, plugin) => {
    setPluginInAction(prev => ({
      ...prev,
      [plugin.slug]: true
    }));
    try {
      let url = `${apiBaseUrl}/${action}/${plugin.slug}`;

      // prepare encoded download param (safe if plugin.download is undefined)
      const downloadParam = `download_url=${encodeURIComponent(plugin.download || '')}`;
      if (useWPHandlers) {
        // original WP-AJAX URL + download_url appended
        url = `${wpConfig.ajax_url}?action=marketplace_${action}_plugin&_wpnonce=${wpConfig.nonce}&slug=${plugin.slug}&${downloadParam}`;
      } else {
        // append download_url to non-WP URL (adds ? or & correctly)
        url = url + (url.includes('?') ? '&' : '?') + downloadParam;
      }
      const res = await fetch(url, {
        method: "POST"
      });
      const result = await res.json();
      if (result.success) {
        setPlugins(prev => prev.map(p => p.slug === plugin.slug ? {
          ...p,
          installed: result.data.installed,
          activated: result.data.activated
        } : p));
      } else {
        alert(result.data?.message || "Failed to perform action");
      }
    } catch (err) {
      console.error("Plugin action failed", err);
    } finally {
      setPluginInAction(prev => ({
        ...prev,
        [plugin.slug]: false
      }));
    }
  };
  if (loading) return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Loading plugins...");
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "marketplace gv-grid gv-gap-lg gv-tab-grid-cols-1 gv-desk-grid-cols-2 gv-mt-md"
  }, plugins.map(plugin => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: `plugin-${plugin.slug}`,
    className: "gv-card oc-plugins-box gv-surface-bright gv-pb-lg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gv-card-illustration"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    className: "gv-tile",
    src: plugin.thumbnail,
    alt: plugin.name,
    width: "72",
    height: "72"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: plugin.slug,
    className: "gv-card-content"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "gv-card-title"
  }, plugin.name), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, plugin.description ? plugin.description : plugin.shortDescription, " \xA0\xA0")), useWPHandlers === true && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_PluginActions__WEBPACK_IMPORTED_MODULE_2__["default"], {
    plugin: plugin,
    pluginInAction: pluginInAction,
    onAction: handlePluginAction
  }))));
}

/***/ }),

/***/ "./src/components/PluginActions.jsx":
/*!******************************************!*\
  !*** ./src/components/PluginActions.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PluginActions)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function PluginActions({
  plugin,
  pluginInAction,
  onAction
}) {
  const handleClick = action => {
    onAction(action, plugin);
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "plugin-actions gv-card-content gv-flex gv-gap-sm gv-mt-md"
  }, plugin.installed ? plugin.activated ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "gv-button gv-button-secondary",
    disabled: pluginInAction[plugin.slug],
    onClick: () => handleClick("deactivate")
  }, pluginInAction[plugin.slug] ? marketplaceConfig.labels.deactivating : marketplaceConfig.labels.deactivate) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "gv-button gv-button-primary",
    disabled: pluginInAction[plugin.slug],
    onClick: () => handleClick("activate")
  }, pluginInAction[plugin.slug] ? marketplaceConfig.labels.activating : marketplaceConfig.labels.activate) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "gv-button gv-button-secondary",
    disabled: pluginInAction[plugin.slug],
    onClick: () => handleClick("install")
  }, pluginInAction[plugin.slug] ? marketplaceConfig.labels.installing : marketplaceConfig.labels.install));
}

/***/ }),

/***/ "./src/components/normalised-plugins.jsx":
/*!***********************************************!*\
  !*** ./src/components/normalised-plugins.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   normalizePlugins: () => (/* binding */ normalizePlugins)
/* harmony export */ });
function normalizePlugins(rawResponse) {
  if (!rawResponse || !rawResponse.data?.ui_json) return [];
  return rawResponse.data.ui_json.map(plugin => {
    var _plugin$installed, _plugin$activated;
    return {
      ...plugin,
      // spread first ✅
      name: plugin.name || "Unknown",
      slug: plugin.slug || "",
      price: plugin.price || "",
      author: plugin.author || "",
      version: plugin.version || "",
      download: plugin.download || "",
      thumbnail: plugin.thumbnail || "",
      description: typeof plugin.description === "object" ? plugin.description["en-gb"] || Object.values(plugin.description)[0] || "" : plugin.description || "",
      installed: (_plugin$installed = plugin.installed) !== null && _plugin$installed !== void 0 ? _plugin$installed : false,
      activated: (_plugin$activated = plugin.activated) !== null && _plugin$activated !== void 0 ? _plugin$activated : false
    };
  });
}

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

module.exports = window["ReactDOM"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/index.wp.jsx ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MarketplaceApp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MarketplaceApp */ "./src/MarketplaceApp.jsx");





// Inside-WP auto-mount
document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("marketplace-root");
  if (el) {
    const config = window.marketplaceConfig || {};
    const root = (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createRoot)(el);
    root.render((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MarketplaceApp__WEBPACK_IMPORTED_MODULE_2__["default"], {
      ...config
    }));
  }
});
})();

window.MarketPlaceWP = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=index.js.map