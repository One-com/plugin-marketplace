import React from "react";
import { createRoot } from "react-dom";
import MarketplaceApp from "./MarketplaceApp";

// Inside-WP auto-mount
document.addEventListener("DOMContentLoaded", () => {
    const el = document.getElementById("marketplace-root");
    if (el) {
        const config = window.marketplaceConfig || {};
        const root = createRoot(el);
        root.render(<MarketplaceApp {...config} />);
    }
});