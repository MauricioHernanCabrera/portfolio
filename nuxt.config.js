const routerBase =
  process.env.DEPLOY_ENV === "GH_PAGES"
    ? {
        router: {
          base: "/"
        }
      }
    : {};

const BASE_URL =
  process.env.DEPLOY_ENV === "GH_PAGES"
    ? "https://mauriciohernancabrera.github.io"
    : "http://localhost:3000";

const page = {
  title: "Mauricio Hernan Cabrera",
  description: "I'm Front-end Developer (React.js + Vue.js + Node.js)",
  safe: {
    img: `${BASE_URL}/safe_img.png`,
    alt: "Logo de Mauricio Hernan Cabrera"
  },
  favicon: `${BASE_URL}/logo.ico`,
  creator: "@hernanmc06",
  category: "Utility, Tool, Timer",
  subcategory: "Alarms & Clocks",
  genre: "Timer",
  browserRequirements: "Requires JavaScript. Requires HTML5.",
  version: "1.0.0"
};

export default {
  ...routerBase,

  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: page.title,
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, user-scalable=no"
      },
      {
        hid: "description",
        name: "description",
        content: `${page.description}`
      },

      { name: "google", content: "notranslate" },

      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: `${page.title}` },
      {
        name: "twitter:creator:752703023583899649",
        content: `${page.creator}`
      },
      { name: "twitter:description", content: `${page.description}` },
      { name: "twitter:image", content: `${page.safe.img}` },
      { name: "twitter:image:alt", content: `${page.safe.alt}` },

      { property: "og:type", content: "website" },
      { property: "og:title", content: `${page.title}` },
      { property: "og:url", content: `${BASE_URL}` },
      { property: "og:image", content: `${page.safe.img}` },
      { property: "og:site_name", content: `${page.title}` },
      { property: "og:description", content: `${page.description}` }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: `${page.favicon}` },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Playfair+Display:400,500,600,700,800,900|Open+Sans:300,400,600,700,800&display=swap"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["~/assets/styles.css", "animate.css/animate.css"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: "~/plugins/scroll-reveal", ssr: false }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/pwa"
  ],

  manifest: {
    name: "Mauricio Hernan Cabrera",
    short_name: "HMC",
    lang: "en_US",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#1f2235",
    theme_color: "#151725"
  },

  icons: {},

  workbox: {
    runtimeCaching: [
      {
        urlPattern: "/^https://fonts.(?:googleapis|gstatic).com/(.*)/",
        handler: "cacheFirst",
        method: "GET",
        strategyOptions: {
          cacheName: "google-font-mauriciohernancabrera",
          cacheExpiration: {
            maxEntries: 10000,
            maxAgeSeconds: 365 * 24 * 60 * 60
          }
        }
      }
    ]
  },

  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
