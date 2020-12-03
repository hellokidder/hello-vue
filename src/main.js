import Vue from "vue";
// import App from "./App.vue";
import BasicLayout from "./Layout/Layout.vue";
import { Button, Layout, Menu, Icon } from "ant-design-vue";
Vue.use(Button);
Vue.use(Layout);
Vue.use(Menu);
Vue.use(Icon);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(BasicLayout),
}).$mount("#app");
