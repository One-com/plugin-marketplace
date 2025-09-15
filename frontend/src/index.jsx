import React, { useEffect, useState } from '@wordpress/element';
import { createRoot } from "@wordpress/element";
import {normalizePlugins} from "./components/normalised-plugins";
import Marketplace from "./components/MarketPlace";

const MarketplaceApp = ({ apiBaseUrl, useWPHandlers, wpConfig, enableDefaultStyles }) => {
    return (
        <div className="marketplace-container gv-p-lg">
            <h2>Available Plugins</h2>
            <Marketplace
                apiBaseUrl={apiBaseUrl}
                useWPHandlers={useWPHandlers}
                wpConfig={wpConfig}
                enableDefaultStyles={enableDefaultStyles}
            />
        </div>
    );
};

// Inside-WP auto-mount
document.addEventListener("DOMContentLoaded", () => {
    const el = document.getElementById("marketplace-root");
    if (el) {
        const config = window.marketplaceConfig || {};
        const root = createRoot(el);
        root.render(<MarketplaceApp {...config} />);
    }
});

// Manual init for outside-WP usage
export function initMarketplaceApp(config) {
    const el = document.querySelector(config.selector || "#marketplace-root");
    if (el) {
        const root = createRoot(el);
        root.render(<MarketplaceApp {...config} />);
    }
}