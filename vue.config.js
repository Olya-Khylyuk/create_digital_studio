const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      // Визначаємо флаг для Vue
      new (require('webpack').DefinePlugin)({
        '__VUE_PROD_HYDRATION_MISMATCH_DETAILS__': JSON.stringify(false),  // або true, залежно від ваших потреб
      })
    ]
  }
})

