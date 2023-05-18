module.exports = {
  plugins: [

    // require("postcss-pxtorempoor")({
    //   rootValue({ file }) {
    //     // 修改rootValue
    //     if (file && file.indexOf("vant") > -1) {
    //       return 37.5;
    //     } else {
    //       return 75;
    //     }
    //   },
    //   unitPrecision: 5,
    //   propList: ["*"],
    //   selectorBlackList: ["ignore-"],
    //   replace: true,
    //   mediaQuery: false,
    //   convertPxInMediaQuery: false,
    //   exclude: /data/i,
    // }),
    require("cssnano")({
      preset: "advanced",
      plugins: ["postcss-preset-env"],
    }),
  ],
};
