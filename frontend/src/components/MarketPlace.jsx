import React, { useState, useEffect } from "react";
import {normalizePlugins} from "./normalised-plugins";
import PluginActions from "./PluginActions";
import "@group.one/gravity";
import { useTranslation } from "react-i18next";

export default function Marketplace({ apiBaseUrl, useWPHandlers, wpConfig, enableDefaultStyles, assetsBaseUrl }) {
    const [plugins, setPlugins] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pluginInAction, setPluginInAction] = useState({});
    const [downloadingPlugins, setDownloadingPlugins] = useState({});
    const {t} = useTranslation();

    useEffect(() => {

        async function fetchPlugins() {
            try {
                const res = await fetch(`${apiBaseUrl}`);
                const json = await res.json();
                const normalized = normalizePlugins(json);
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
        setPluginInAction(prev => ({ ...prev, [plugin.slug]: true }));

        try {
            let url = `${apiBaseUrl}/${action}/${plugin.slug}`;

            // prepare encoded download param (safe if plugin.download is undefined)
            const downloadParam = `download_url=${encodeURIComponent(plugin.download || '')}`;

            if (useWPHandlers) {
                // original WP-AJAX URL + download_url appended
                url = `${wpConfig.ajax_url}?action=marketplace_${action}_plugin&_wpnonce=${wpConfig.nonce}&nonce=${wpConfig.nonce}&slug=${plugin.slug}&${downloadParam}`;
            } else {
                // append download_url to non-WP URL (adds ? or & correctly)
                url = url + (url.includes('?') ? '&' : '?') + downloadParam;
            }

            const res = await fetch(url, { method: "POST" });
            const result = await res.json();

            if (result.success) {
                setPlugins(prev =>
                    prev.map(p =>
                        p.slug === plugin.slug
                            ? { ...p, installed: result.data.installed, activated: result.data.activated }
                            : p
                    )
                );
            } else {
                alert(result.data?.message || "Failed to perform action");
            }
        } catch (err) {
            console.error("Plugin action failed", err);
        } finally {
            setPluginInAction(prev => ({ ...prev, [plugin.slug]: false }));
        }
    };

    const handleDownloadClick = (e, plugin) => {
        e.stopPropagation();
        
        // Set downloading state
        setDownloadingPlugins(prev => ({ ...prev, [plugin.slug]: true }));
        
        // Reset after a short delay (download is triggered immediately)
        // The browser handles the actual download, so we simulate completion
        setTimeout(() => {
            setDownloadingPlugins(prev => ({ ...prev, [plugin.slug]: false }));
        }, 2000);
    };

    if (loading) return <p>Loading plugins...</p>;

    // Group plugins by a single, specific category (first category), avoid duplicates across headings
    const categoryMap = new Map();

    // Deduplicate plugins by slug first (in case backend/normalizer still returns duplicates)
    const bySlug = new Map();
    plugins.forEach((p) => {
        if (!bySlug.has(p.slug)) bySlug.set(p.slug, p);
    });

    Array.from(bySlug.values()).forEach((p) => {
        const primary = Array.isArray(p.categories) && p.categories.length ? String(p.categories[0]) : "Others";
        if (!categoryMap.has(primary)) categoryMap.set(primary, []);
        categoryMap.get(primary).push(p);
    });

    const categories = Array.from(categoryMap.entries());

    return (
        <div className="marketplace-container gv-flex gv-flex-col gv-flex-wrap gv-gap-lg gv-mt-fluid">
            {categories.map(([cat, list]) => (
                <section key={cat} className="">
                    <h2 className="gv-heading-md gv-mb-sm">{cat}</h2>
                    <div className="gv-grid gv-gap-lg gv-tab-grid-cols-1 gv-desk-grid-cols-2">
                        {list.map((plugin) => (
                            <a href="#" key={plugin.slug} className="gv-shortcut-tile gv-surface-bright" onClick={(e) => e.preventDefault()}>
                                <gv-tile aria-hidden="true" src={`${assetsBaseUrl || (typeof window.marketplaceConfig !== 'undefined' && window.marketplaceConfig.assetsBaseUrl) || ''}assets/icons/placeholder.svg`}></gv-tile>
                                <div className="gv-content">
                                    <h3 className="gv-title">{plugin.name}</h3>
                                        <p>{plugin.description ? plugin.description : plugin.shortDescription}</p>
                                        <div className="gv-price">
                                            <span className="gv-price-prefix">{t("migratorMail_hi")}</span>
                                            <span className="gv-price-text">{plugin.priceCurrency} {plugin.priceAmount}</span>
                                            <span className="gv-period">/mo</span>
                                        </div></div>
                                        <gv-icon aria-hidden="true" src={`${assetsBaseUrl || (typeof window.marketplaceConfig !== 'undefined' && window.marketplaceConfig && window.marketplaceConfig.assetsBaseUrl) || ''}assets/icons/arrow_forward.svg`}></gv-icon>


                                {useWPHandlers ? (
                                    <PluginActions
                                        plugin={plugin}
                                        pluginInAction={pluginInAction}
                                        onAction={handlePluginAction}
                                    />
                                ) : (
                                    plugin.download && (
                                        <div className="plugin-actions gv-card-content gv-flex gv-gap-sm gv-mt-md">
                                            <a
                                                href={plugin.download}
                                                download
                                                className="gv-button gv-button-secondary"
                                                onClick={(e) => handleDownloadClick(e, plugin)}
                                                style={{ 
                                                    pointerEvents: downloadingPlugins[plugin.slug] ? 'none' : 'auto',
                                                    opacity: downloadingPlugins[plugin.slug] ? 0.6 : 1
                                                }}
                                            >
                                                {downloadingPlugins[plugin.slug]
                                                    ? ((typeof window.marketplaceConfig !== 'undefined' && window.marketplaceConfig?.labels?.downloading) || 'Downloading...')
                                                    : ((typeof window.marketplaceConfig !== 'undefined' && window.marketplaceConfig?.labels?.download) || 'Download')}
                                            </a>
                                        </div>
                                    )
                                )}
                            </a>
                        ))}
                    </div>
                </section>
            ))}
        </div>
    );
}