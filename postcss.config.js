// postcss.config.js
// module.exports = {
//   plugins: {
//     // 兼容浏览器，添加前缀
//     autoprefixer: {
//       overrideBrowserslist: [
//         "Android 4.1",
//         "iOS 7.1",
//         "Chrome > 31",
//         "ff > 31",
//         "ie >= 8",
//         "last 10 versions", // 所有主流浏览器最近10版本用
//       ],
//       grid: true,
//     },
//     "postcss-pxtorem": {
//       rootValue: 37.5, //结果为：设计稿元素尺寸/16，比如元素宽320px,最终页面会换算成 20rem
//       propList: ["*"], //是一个存储哪些将被转换的属性列表，这里设置为['*']全部，假设需要仅对边框进行设置，可以写['*', '!border*']
//       unitPrecision: 5, //保留rem小数点多少位
//       //selectorBlackList: ['.radius'],  //则是一个对css选择器进行过滤的数组，比如你设置为['fs']，那例如fs-xl类名，里面有关px的样式将不被转换，这里也支持正则写法。
//       replace: true, //这个真不知到干嘛用的。有知道的告诉我一下
//       mediaQuery: false, //媒体查询( @media screen 之类的)中不生效
//       minPixelValue: 12, //px小于12的不会被转换
//     },
//   },
// };

// PostCSS配置文件需要导出一个对象
module.exports = {
  // 配置要使用的相关插件
  plugins: {
    // 自动添加浏览器厂商声明前缀，用来兼容不同的浏览器
    // VueCLI 已经在内部默认配置了 autoprefixer
    'autoprefixer': {
      // browsers 用来配置要兼容到系统（浏览器）环境
      // 这里配置没有问题，但是写到这里会有控制台编译警告
      // 因为VueCLI 是通过项目中 .browserslistrc 文件来配置要兼容的环境信息的
      // browsers: ['Android >= 4.0', 'iOS >= 8']
    },
    // 把 px 转为 rem
    'postcss-pxtorem': {
      rootValue: 37.5,
      propList: ['*']
    }
  }
}