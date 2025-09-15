import React from "react";

export default function PluginActions({ plugin, pluginInAction, onAction }) {
    const handleClick = (action) => {
        onAction(action, plugin);
    };

    return (
        <div className="plugin-actions gv-card-content gv-flex gv-gap-sm gv-mt-md">
            {plugin.installed ? (
                plugin.activated ? (
                    <button
                        className="gv-button gv-button-secondary"
                        disabled={pluginInAction[plugin.slug]}
                        onClick={() => handleClick("deactivate")}
                    >
                        {pluginInAction[plugin.slug]
                            ? marketplaceConfig.labels.deactivating
                            : marketplaceConfig.labels.deactivate}
                    </button>
                ) : (
                    <button
                        className="gv-button gv-button-primary"
                        disabled={pluginInAction[plugin.slug]}
                        onClick={() => handleClick("activate")}
                    >
                        {pluginInAction[plugin.slug]
                            ? marketplaceConfig.labels.activating
                            : marketplaceConfig.labels.activate}
                    </button>
                )
            ) : (
                <button
                    className="gv-button gv-button-secondary"
                    disabled={pluginInAction[plugin.slug]}
                    onClick={() => handleClick("install")}
                >
                    {pluginInAction[plugin.slug]
                        ? marketplaceConfig.labels.installing
                        : marketplaceConfig.labels.install}
                </button>
            )}
        </div>
    );
}