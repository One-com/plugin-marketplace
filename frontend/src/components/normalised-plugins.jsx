export function normalizePlugins(rawResponse) {
  // Prefer new shape at data.sections; fallback to top-level sections
  const sections = Array.isArray(rawResponse?.data?.sections)
    ? rawResponse.data.sections
    : Array.isArray(rawResponse?.sections)
      ? rawResponse.sections
      : null;

  if (!sections) return [];

  // Only include sections that represent plugins (avoid e.g., "dashboard" sections)
  const pluginSections = sections.filter((s) => !s.type || s.type === "plugin");

  const items = pluginSections
    .flatMap((s) => (Array.isArray(s.items) ? s.items : []))
    .filter((p) => p && (p.slug || p.name));

  if (items.length === 0) return [];

  // Map to normalized structure first
  const normalized = items.map((plugin) => {
    const description = typeof plugin?.description === "object" && plugin.description !== null
      ? (plugin.description["en-gb"] || Object.values(plugin.description)[0] || "")
      : (plugin?.description || "");

    const download = plugin?.download || plugin?.download_url || plugin?.downloadUrl || "";

    const authorName = typeof plugin?.author === "object" && plugin.author !== null
      ? (plugin.author.name || "")
      : (plugin?.author || "");
    const authorUrl = typeof plugin?.author === "object" && plugin.author !== null
      ? (plugin.author.url || "")
      : "";

    const priceAmount = typeof plugin?.price === "object" && plugin.price !== null
      ? plugin.price.amount
      : undefined;
    const priceCurrency = typeof plugin?.price === "object" && plugin.price !== null
      ? plugin.price.currency
      : undefined;

    return {
      ...plugin,
      name: plugin?.name || "Unknown",
      slug: plugin?.slug || "",
      thumbnail: plugin?.thumbnail || "",
      description,
      download,
      author: authorName,
      authorUrl,
      priceAmount,
      priceCurrency,
      installed: plugin?.installed ?? false,
      activated: plugin?.activated ?? false,
    };
  });

  // Deduplicate by slug (first occurrence wins)
  const seen = new Set();
  return normalized.filter((p) => {
    const key = p.slug || p.name || JSON.stringify(p);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}