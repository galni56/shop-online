const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/assets/style/styles.scss";
        `
      }
    }
  },
  transpileDependencies: true,
})
