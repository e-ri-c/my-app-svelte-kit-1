// svelte.config.js
import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: "#svelte",
		adapter: adapter({
			// default options are shown
			pages: "build",
			assets: "build",
			fallback: null,
		}),
	},
	/*	,
				server: {
				fsServe: {
				strict: false
				}
			}*/
};

export default config;
