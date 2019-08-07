module.exports = {
  chainWebpack: config => {
    config.module.rules.delete("eslint");
  },
  publicPath: process.env.NODE_ENV === "production" ? "/vue-project/" : "/",
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/scss/main.scss";`
      }
    }
  }
};