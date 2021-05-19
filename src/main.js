import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


// 自动设置 rem 基准值 （HTML标签大小）
import 'amfe-flexible'

import Vant from 'vant';
import 'vant/lib/index.css';

// 加载全局样式（最好放到最后，这样可以覆盖第三方框架样式）
import './styles/index.less'


Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
