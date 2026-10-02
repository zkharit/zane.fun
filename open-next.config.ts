import { defineCloudflareConfig } from "@opennextjs/cloudflare";
// The site is fully prerendered (SSG, no revalidation), so serve the
// prerendered pages from static assets instead of re-rendering at runtime.
// See https://opennext.js.org/cloudflare/caching
import staticAssetsIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache";

export default defineCloudflareConfig({
	incrementalCache: staticAssetsIncrementalCache,
});
