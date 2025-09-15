export function normalizePlugins(rawResponse) {
  if (!rawResponse || !rawResponse.data?.ui_json) return [];

  return rawResponse.data.ui_json.map((plugin) => {
    return {
      ...plugin, // spread first ✅
      name: plugin.name || "Unknown",
      slug: plugin.slug || "",
      price: plugin.price || "",
      author: plugin.author || "",
      version: plugin.version || "",
      download: plugin.download || "",
      thumbnail: plugin.thumbnail || "",
      description: typeof plugin.description === "object"
          ? plugin.description["en-gb"] || Object.values(plugin.description)[0] || ""
          : (plugin.description || ""),
      installed: plugin.installed ?? false,
      activated: plugin.activated ?? false,
    };
  });
}