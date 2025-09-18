import React from "react";
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

export default MarketplaceApp;
