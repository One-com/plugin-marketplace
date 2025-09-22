import React from "react";
import Marketplace from "./components/MarketPlace";

const MarketplaceApp = ({ apiBaseUrl, useWPHandlers, wpConfig, enableDefaultStyles, assetsBaseUrl }) => {
    return (
        <div className="marketplace-container gv-p-lg">
            <div className="gv-content-container gv-p-lg gv-flex-column-md" style={{ background: "#F3F4F0" }}>
                <h2 className="gv-heading-lg">one.com WP marketplace</h2>
                <p className="gv-text-sm">Your place to find recommended and relevant plugins for your site.</p>
            </div>
                <Marketplace
                    apiBaseUrl={apiBaseUrl}
                    useWPHandlers={useWPHandlers}
                    wpConfig={wpConfig}
                    enableDefaultStyles={enableDefaultStyles}
                    assetsBaseUrl={assetsBaseUrl}
                />
            </div>
            );
            };

            export default MarketplaceApp;
