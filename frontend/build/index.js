/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../../node_modules/eslint-plugin-react/lib/util/error.js":
/*!*******************************************************************!*\
  !*** ../../../node_modules/eslint-plugin-react/lib/util/error.js ***!
  \*******************************************************************/
/***/ ((module) => {



/**
 * Logs out a message if there is no format option set.
 * @param {string} message - Message to log.
 */
function error(message) {
  if (!/=-(f|-format)=/.test(process.argv.join('='))) {
    // eslint-disable-next-line no-console
    console.error(message);
  }
}

module.exports = error;


/***/ }),

/***/ "../../../src/PluginContext.js":
/*!*************************************!*\
  !*** ../../../src/PluginContext.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PluginProvider: () => (/* binding */ PluginProvider),
/* harmony export */   usePluginContext: () => (/* binding */ usePluginContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_usePluginData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hooks/usePluginData */ "../../../src/hooks/usePluginData.js");
/* harmony import */ var eslint_plugin_react_lib_util_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! eslint-plugin-react/lib/util/error */ "../../../node_modules/eslint-plugin-react/lib/util/error.js");
/* harmony import */ var eslint_plugin_react_lib_util_error__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(eslint_plugin_react_lib_util_error__WEBPACK_IMPORTED_MODULE_3__);




const PluginContext = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const PluginProvider = ({
  children
}) => {
  const {
    pluginsData,
    setPluginsData,
    loadingPlugins
  } = (0,_hooks_usePluginData__WEBPACK_IMPORTED_MODULE_2__["default"])(); // fetch & store all plugins
  const [toastData, setToastData] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)({
    type: "",
    message: ""
  }); // toast messages
  const [isLoading, setIsLoading] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // loading between actions overlay depends on this
  const [activeTab, setActiveTab] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get('tab') || 'all';
  });
  const [pluginList, setPluginList] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(pluginsData?.[activeTab] || []); // plugin list destructured based on the tabs selected
  const [loadingAction, setLoadingAction] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(''); // Stores 'Installing', 'Activating', etc.
  const [loadingPlugin, setLoadingPlugin] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(''); // stores current plugin name in action
  const tabs = [{
    key: 'all',
    label: ocpluginVars.labels.all,
    count: pluginsData.all?.length || 0,
    statsClass: 'ocwp_ocp_plugins_onecom_plugins_tab_visited_event'
  }, {
    key: 'recommended',
    label: ocpluginVars.labels.recommendedPlugins,
    count: pluginsData.recommended?.length || 0,
    statsClass: 'ocwp_ocp_plugins_recommended_tab_visited_event'
  }, {
    key: 'discouraged',
    label: ocpluginVars.labels.discouraged,
    count: pluginsData.discouraged?.length || 0,
    statsClass: 'ocwp_ocp_plugins_discouraged_tab_visited_event'
  }];

  // updates plugin states e.g installed, activated, deactivated
  const updatePluginState = (slug, newData) => {
    setPluginsData(prev => ({
      ...prev,
      [activeTab]: prev[activeTab].map(plugin => plugin.slug === slug ? {
        ...plugin,
        ...newData
      } : plugin)
    }));
    setPluginList(prevPlugins => prevPlugins.map(plugin => plugin.slug === slug ? {
      ...plugin,
      ...newData
    } : plugin));
  };

  // sync pluginlist on click of tabs
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setPluginList(pluginsData?.[activeTab] || []);
  }, [activeTab, pluginsData]);
  const hasScrolledRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const params = new URLSearchParams(window.location.search);
    const targetSlug = params.get('plugin');

    // Exit early if no plugin slug in URL or already scrolled
    if (!targetSlug || hasScrolledRef.current) return;

    // Wait until pluginList for the activeTab is populated
    if (!pluginList || pluginList.length === 0) return;

    // Check if the plugin with targetSlug is in the current tab
    const pluginExistsInTab = pluginList.some(plugin => plugin.slug === targetSlug);
    if (!pluginExistsInTab) return;

    // Try to scroll to the plugin element after slight delay to allow rendering
    setTimeout(() => {
      const element = document.getElementById(`plugin-${targetSlug}`);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
        hasScrolledRef.current = true;

        // Clean up the URL
        const url = new URL(window.location.href);
        url.searchParams.delete('plugin');
        window.history.replaceState({}, document.title, url.toString());
      }
    }, 1000); // Delay ensures DOM is rendered
  }, [pluginList, activeTab]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PluginContext.Provider, {
    value: {
      toastData,
      setToastData,
      isLoading,
      setIsLoading,
      activeTab,
      setActiveTab,
      loadingPlugins,
      pluginsData,
      setPluginsData,
      tabs,
      pluginList,
      setPluginList,
      loadingAction,
      setLoadingAction,
      loadingPlugin,
      setLoadingPlugin,
      updatePluginState
    }
  }, children);
};
function usePluginContext() {
  const context = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useContext)(PluginContext);
  if (context === undefined) {
    throw new (eslint_plugin_react_lib_util_error__WEBPACK_IMPORTED_MODULE_3___default())('Context used outside provider');
  }
  return context;
}


/***/ }),

/***/ "../../../src/components/ToggleButton.js":
/*!***********************************************!*\
  !*** ../../../src/components/ToggleButton.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PluginContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../PluginContext */ "../../../src/PluginContext.js");
/* harmony import */ var _utils_handlePluginDeactivation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/handlePluginDeactivation */ "../../../src/utils/handlePluginDeactivation.js");




const ToggleButton = ({
  plugin
}) => {
  const {
    updatePluginState,
    setIsLoading,
    setLoadingAction,
    setLoadingPlugin,
    setToastData,
    activeTab,
    setPluginsData
  } = (0,_PluginContext__WEBPACK_IMPORTED_MODULE_2__.usePluginContext)();
  const [pluginInAction, setpluginInAction] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)({});
  const onPluginDeactivation = () => {
    (0,_utils_handlePluginDeactivation__WEBPACK_IMPORTED_MODULE_3__.handlePluginDeactivation)({
      plugin,
      setPluginsData,
      activeTab
    });
  };
  const handlePluginAction = async (action, plugin) => {
    setIsLoading(true);
    const actions = {
      'activate': ocpluginVars.labels.activating,
      'deactivate': ocpluginVars.labels.deactivating,
      'install': ocpluginVars.labels.installing
    };
    setLoadingAction(actions[action]);
    setLoadingPlugin(plugin.name); // Set plugin name
    setpluginInAction(prev => ({
      ...prev,
      [plugin.slug]: true
    }));
    try {
      const response = await fetch(ocpluginVars.ajax_url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          "X-Requested-With": "XMLHttpRequest"
        },
        body: new URLSearchParams({
          action: `onecom_${action}_plugin`,
          // onecom_install_plugin, onecom_activate_plugin, onecom_deactivate_plugin
          plugin_slug: plugin.slug,
          plugin_name: plugin.name,
          download_url: plugin?.downloadLink,
          plugin_type: plugin?.pluginType
        })
      });
      try {
        const result = await response.json();
        if (result.success || result.status === "success" || result.type === "success") {
          setToastData({
            type: "success",
            message: result.message || result.data?.message
          });
          updatePluginState(plugin.slug, {
            installed: action === "install" ? true : plugin.installed,
            activated: action === "activate" ? true : action === "deactivate" ? false : plugin.activated
          });
          if (action === "deactivate" && onPluginDeactivation) {
            onPluginDeactivation(plugin);
          }
          // reload after success to sync the menus
          setTimeout(() => {
            if (activeTab && plugin?.slug) {
              const url = new URL(window.location.href);
              url.searchParams.set('tab', activeTab);
              url.searchParams.set('plugin', plugin.slug);
              window.location.href = url.toString();
            } else {
              window.location.reload();
            }
          }, 2500);
        } else {
          console.log("There was an issue", result);
          setToastData({
            type: "alert",
            message: result.message || result.data?.message
          });
        }
      } catch (error) {
        // Redirect if the response includes a valid URL(imagify case)
        if (response.url && response.url !== window.location.href) {
          if (plugin.slug === "imagify") {
            setToastData({
              type: "success",
              message: response?.message
            });
            console.warn("Redirecting to Imagify:", response.url);
            window.location.href = response.url;
          } else {
            console.log(error);
            setToastData({
              type: "alert",
              message: "Something went wrong. Couldn't deactivate plugin."
            });
          }
        }
      }
    } catch (error) {
      console.error(`${action} failed:`, error);
      setToastData({
        type: "alert",
        message: error.message
      });
    } finally {
      setpluginInAction(prev => ({
        ...prev,
        [plugin.slug]: false
      }));
      setIsLoading(false);
      setLoadingAction('');
      setLoadingPlugin('');
    }
  };

  // Handle Rocket Plugin Special Cases
  if (plugin.slug === "wp-rocket") {
    if (plugin.is_purchased && !plugin.installed) {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "plugin-actions gv-card-content"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
        className: "gv-button gv-button-primary",
        target: "_blank",
        href: plugin.cpLogin,
        "data-slug": plugin.slug,
        "data-name": plugin.name
      }, ocpluginVars.labels.activate));
    } else if (!plugin.installed) {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "plugin-actions gv-card-content"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
        className: "gv-button gv-button-secondary ocwp_ocp_plugins_wp_rocket_learn_more_clicked_event",
        target: "_blank",
        href: plugin.guide_url
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, ocpluginVars.labels.learnMore), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("gv-icon", {
        src: `${ocpluginVars.imageURL}assets/images/open_in_new.svg`
      })));
    } else if (plugin.installed && plugin.activated) {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "plugin-actions gv-card-content"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
        type: "button",
        className: "gv-button gv-button-secondary",
        onClick: () => handlePluginAction("deactivate", plugin)
      }, pluginInAction[plugin.slug] ? ocpluginVars.labels.deactivating : ocpluginVars.labels.deactivate));
    }
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "plugin-actions gv-card-content"
  }, plugin.installed ? plugin.activated ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "gv-button gv-button-secondary",
    onClick: () => handlePluginAction("deactivate", plugin)
  }, pluginInAction[plugin.slug] ? ocpluginVars.labels.deactivating : ocpluginVars.labels.deactivate) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "gv-button gv-button-primary",
    onClick: () => handlePluginAction("activate", plugin)
  }, pluginInAction[plugin.slug] ? ocpluginVars.labels.activating : ocpluginVars.labels.activate) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "gv-button gv-button-secondary",
    onClick: () => handlePluginAction("install", plugin)
  }, pluginInAction[plugin.slug] ? ocpluginVars.labels.installing : ocpluginVars.labels.install));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToggleButton);

/***/ }),

/***/ "../../../src/hooks/usePluginData.js":
/*!*******************************************!*\
  !*** ../../../src/hooks/usePluginData.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const usePluginsData = () => {
  const [pluginsData, setPluginsData] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)({
    all: ocpluginVars.plugins
  });
  const [loadingPlugins, setLoadingPlugins] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const fetchOtherPlugins = async type => {
    setLoadingPlugins(true);
    try {
      const response = await fetch(ocpluginVars.ajax_url, {
        method: 'POST',
        body: new URLSearchParams({
          action: 'onecom_fetch_plugins',
          type
        })
      });
      const result = await response.json();
      if (result.success) {
        setPluginsData(prevData => ({
          ...prevData,
          [type]: result.data.plugins.flat() || []
        }));
      }
    } catch (error) {
      console.error("Error fetching plugins", error);
    } finally {
      setLoadingPlugins(false);
    }
  };
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    Promise.allSettled([!pluginsData.recommended && fetchOtherPlugins("recommended"), !pluginsData.discouraged && fetchOtherPlugins("discouraged")]).then(() => setLoadingPlugins(false));
  }, [pluginsData]);
  return {
    pluginsData,
    setPluginsData,
    loadingPlugins
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (usePluginsData);

/***/ }),

/***/ "../../../src/utils/handlePluginDeactivation.js":
/*!******************************************************!*\
  !*** ../../../src/utils/handlePluginDeactivation.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handlePluginDeactivation: () => (/* binding */ handlePluginDeactivation)
/* harmony export */ });
/* harmony import */ var _PluginContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../PluginContext */ "../../../src/PluginContext.js");

const handlePluginDeactivation = ({
  plugin,
  setPluginsData,
  activeTab
}) => {
  setPluginsData(prevData => {
    if (activeTab !== "discouraged") {
      return prevData; // No updates if not in discouraged tab
    }
    if (!prevData.discouraged.some(p => p.slug === plugin.slug)) {
      return prevData;
    }
    const updatedDiscouragedPlugins = prevData.discouraged.filter(p => p.slug !== plugin.slug);
    return {
      ...prevData,
      discouraged: updatedDiscouragedPlugins.length > 0 ? updatedDiscouragedPlugins : []
    };
  });
};

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
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_components_ToggleButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../src/components/ToggleButton */ "../../../src/components/ToggleButton.js");
/* harmony import */ var _normalised_plugins__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./normalised-plugins */ "./src/components/normalised-plugins.jsx");
/* harmony import */ var _PluginActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PluginActions */ "./src/components/PluginActions.jsx");

 // WP-provided React




function Marketplace({
  apiBaseUrl,
  useWPHandlers,
  wpConfig,
  enableDefaultStyles
}) {
  const [plugins, setPlugins] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const [loading, setLoading] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const [pluginInAction, setPluginInAction] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)({});
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    async function fetchPlugins() {
      try {
        const res = await fetch(`${apiBaseUrl}plugins`);
        const json = await res.json();
        const normalized = (0,_normalised_plugins__WEBPACK_IMPORTED_MODULE_4__.normalizePlugins)(json);
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
      if (useWPHandlers) {
        url = `${wpConfig.ajax_url}?action=marketplace_${action}_plugin&_wpnonce=${wpConfig.nonce}&slug=${plugin.slug}`;
      }
      const res = await fetch(url, {
        method: "POST"
      });
      const result = await res.json();
      if (result.success) {
        // ✅ Refresh list or update plugin state locally
        setPlugins(prev => prev.map(p => p.slug === plugin.slug ? {
          ...p,
          installed: true,
          activated: action === "activate"
        } : p));
      } else {
        alert(result.message || "Failed to perform action");
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
  }, plugin.name), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, plugin.description ? plugin.description : plugin.shortDescription, " \xA0\xA0")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_PluginActions__WEBPACK_IMPORTED_MODULE_5__["default"], {
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

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

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
/*!***********************!*\
  !*** ./src/index.jsx ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initMarketplaceApp: () => (/* binding */ initMarketplaceApp)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_normalised_plugins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/normalised-plugins */ "./src/components/normalised-plugins.jsx");
/* harmony import */ var _components_MarketPlace__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/MarketPlace */ "./src/components/MarketPlace.jsx");





const MarketplaceApp = ({
  apiBaseUrl,
  useWPHandlers,
  wpConfig,
  enableDefaultStyles
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "marketplace-container gv-p-lg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "Available Plugins"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_MarketPlace__WEBPACK_IMPORTED_MODULE_3__["default"], {
    apiBaseUrl: apiBaseUrl,
    useWPHandlers: useWPHandlers,
    wpConfig: wpConfig,
    enableDefaultStyles: enableDefaultStyles
  }));
};

// Inside-WP auto-mount
document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("marketplace-root");
  if (el) {
    const config = window.marketplaceConfig || {};
    const root = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createRoot)(el);
    root.render((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(MarketplaceApp, {
      ...config
    }));
  }
});

// Manual init for outside-WP usage
function initMarketplaceApp(config) {
  const el = document.querySelector(config.selector || "#marketplace-root");
  if (el) {
    const root = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createRoot)(el);
    root.render((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(MarketplaceApp, {
      ...config
    }));
  }
}
})();

/******/ })()
;
//# sourceMappingURL=index.js.map