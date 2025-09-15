import { useState, useEffect } from "@wordpress/element"; // WP-provided React
import { Button, Card, CardBody } from "@wordpress/components";
import ToggleButton from "../../../../../src/components/ToggleButton";
import {normalizePlugins} from "./normalised-plugins";
import PluginActions from "./PluginActions";

export default function Marketplace({ apiBaseUrl, useWPHandlers, wpConfig, enableDefaultStyles }) {
    const [plugins, setPlugins] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pluginInAction, setPluginInAction] = useState({});

    useEffect(() => {
        async function fetchPlugins() {
            try {
                const res = await fetch(`${apiBaseUrl}plugins`);
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
            if (useWPHandlers) {
                url = `${wpConfig.ajax_url}?action=marketplace_${action}_plugin&_wpnonce=${wpConfig.nonce}&slug=${plugin.slug}`;
            }

            const res = await fetch(url, { method: "POST" });
            const result = await res.json();

            if (result.success) {
                // ✅ Refresh list or update plugin state locally
                setPlugins(prev =>
                    prev.map(p =>
                        p.slug === plugin.slug
                            ? { ...p, installed: true, activated: action === "activate" }
                            : p
                    )
                );
            } else {
                alert(result.message || "Failed to perform action");
            }
        } catch (err) {
            console.error("Plugin action failed", err);
        } finally {
            setPluginInAction(prev => ({ ...prev, [plugin.slug]: false }));
        }
    };

    if (loading) return <p>Loading plugins...</p>;

    return (
        <div className="marketplace gv-grid gv-gap-lg gv-tab-grid-cols-1 gv-desk-grid-cols-2 gv-mt-md">
            {plugins.map(plugin => (
                <div id={`plugin-${plugin.slug}`} className="gv-card oc-plugins-box gv-surface-bright gv-pb-lg">
                    <div className="gv-card-illustration">
                        <img className="gv-tile" src={plugin.thumbnail} alt={plugin.name} width="72"
                             height="72"/>
                    </div>
                    <div key={plugin.slug} className='gv-card-content'>

                        <h3 className="gv-card-title">{plugin.name}</h3>
                        <p>{plugin.description ? plugin.description : plugin.shortDescription} &nbsp;&nbsp;
                        </p>
                    </div>
                    {/* ✅ PluginActions here */}
                    <PluginActions
                        plugin={plugin}
                        pluginInAction={pluginInAction}
                        onAction={handlePluginAction}
                    />
                </div>
            ))}
        </div>
    );
}