export default {
  build: {
    analyze: {
      analyzerModer: "static",
    },
  },
  buildModules: ["@nuxtjs/pwa"],
  css: ["@/assets/scss/global.scss", "@/assets/scss/gsap.scss"],
  components: true,
  head: {
    title: "Jannata Resort & Spa",
    meta: [
      {
        charset: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        hid: "description",
        name: "description",
        content: "",
      },
      {
        name: "format-detection",
        content: "telephone=no",
      },
    ],
    script: [
      {
        src: "https://cdn.jsdelivr.net/npm/flickity@3.0.0/dist/flickity.pkgd.min.js",
      },
      {
        src: "https://cdn.jsdelivr.net/npm/gsap@3.12.2/dist/gsap.min.js",
      },
      {
        src: "https://cdn.jsdelivr.net/npm/jquery@3.7.0/dist/jquery.min.js",
      },
    ],
    link: [
      {
        href: "/favicon.ico",
        rel: "icon",
        type: "image/x-icon",
      },
      {
        href: "https://cdn.jsdelivr.net/npm/flickity@3.0.0/css/flickity.min.css",
        rel: "stylesheet",
      },
    ],
    htmlAttrs: {
      lang: "en",
      class: "has-scroll-init has-scroll-smooth has-scroll-scrolling",
    },
  },
  modules: ["@nuxtjs/i18n"],
  plugins: [
    {
      src: "~/plugins/anime.js",
      ssr: false,
    },
    {
      src: "~/plugins/jarallax.js",
      ssr: false,
    },
    {
      src: "~~/node_modules/vue-rellax/lib/nuxt-plugin",
      ssr: false,
    },
  ],
  ssr: false,
  target: "static",
  watchers: {
    webpack: {
      aggregateTimeout: 300,
      poll: 1000,
    },
  },
};
