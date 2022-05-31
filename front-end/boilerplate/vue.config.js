module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'https://api.thecatapi.com/v1',
        changeOrigin: true,
      },
    },
  },
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableLegacy: false,
      runtimeOnly: false,
      compositionOnly: false,
      fullInstall: true,
    },
  },
};
