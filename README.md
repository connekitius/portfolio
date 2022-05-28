[![Netlify Status](https://api.netlify.com/api/v1/badges/f6c1e16b-e984-4a93-aa4d-161eb078b8ea/deploy-status)](https://app.netlify.com/sites/lively-kataifi-2bc73a/deploys)
# 🗒️ Portfolio
Hello and welcome! I suppose you stumbled upon this. What's this you ask? Why my portfolio of couse!

# 📁 Structure
- `pages/`: This is where all the pages go (in the format of Vue files)
  - `pages/index/`: Parent folder (used for quick navigation and hosts all pages)
  - `[...400].vue`/`[...500].vue`: Custom error pages for status codes 404 and 500.
  - `index.vue`: The main file which contains the OG card meta, the links and the `<NuxtChild>` element(s).
- `personal/`: This is where the config and it's types are stored.
- `public/`: This is where public/static assets are stored. Here the favicon is contained in both `.ico` and `.png` formats.
- `assets/`: This is where the website's statics are stored such as CSS.
  - `assets/css/`: This is where the website's CSS is stored.
  - `assets/css/tailwind.css`: This is where the Tailwind CSS file is stored.
  - `assets/css/csshake.css`: This is where styles from/for the `csshake` module are stored.
- `dist/`: This is where the pre-rendered build of the website is contained/stored.

# 📦 Packages/Frameworks
- Nuxt 3 (RC)
  - Tailwind CSS Module ([`@nuxtjs/tailwindcss`](https://www.npmjs.com/package/@nuxtjs/tailwindcss))
  - Unplugin Icons ([`unplugin-icons`](https://www.npmjs.com/package/unplugin-icons))
  - CSShake ([`csshake`](https://www.npmjs.com/package/csshake))
  - Party.js ([`party-js`](https://www.npmjs.com/package/party-js))
- TypeScript

# 🔧 Configurations
You can go to the config file (`personal/config.ts`) to configure some variables.
You'll find the config.ts file like this:
```ts
import Config from "./config.types.js";

export default <Config>{
    shake: false
}
```
Here you can edit the `shake` variable to enable or disable the shaking effect/animation.

# 🚧 Building
To build the website into a static website, there are 2 methods you can follow.
## Method 1: Automatic Deploys
1. Fork this repository
2. Go to your preferred static website hosting (I use [Netlify](https://www.netlify.com/))
3. Import the forked repository
4. **SET THE BUILD COMMAND AS `npm run generate`. THIS IS AN IMPORTANT STEP.**
5. Enjoy as the host provider builds your website!

## Method 2: Manual Deploys
1. Clone this repository into your machine via:
```fix
git clone https://github.com/connekitius/portfolio.git
```
2. Install all required dependencies via:
```fix
npm install
```
3. Build the website via:
```fix
npm run generate
```
4. Take the `dist/` folder that is generated and upload it to your preferred choice of manual static webstite hosting.

**⚠ IF ANY PROBLEMS OCCUR DURING BUILDING OR DURING HOSTING PLEASE CREATE AN ISSUE ON THE ISSUES TAB ⚠**