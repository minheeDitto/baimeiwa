const  {resolve}  = require("path")



export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '@/assets/css/common.styl',
    '@/assets/css/page-transletion.css'
  ],
  styleResources: {
    stylus: ['@/assets/css/variables.styl','@/assets/css/common.styl']
  },

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/animate',
    '@/plugins/filter'
    // { src: '@/plugins/icon', ssr: false }

    ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      // console.log(resolve(__dirname,"assets/icons/svg"))
      // // Run ESLint on save
      // const svgRule = config.module.rules.find(rule => rule.test.test('.svg'))
      // svgRule.exclude = [resolve(__dirname,'assets/icons/svg')]
      // config.module.rules.push({
      //   test:"/\.svg$/",
      //   include:[resolve(__dirname,'assets/icons/svg')],
      //   use: [{ loader: 'svg-sprite-loader',options: {symbolId: 'icon-[name]'}}]

      // })

    }
  }
}
