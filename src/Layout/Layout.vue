<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <layout-sider></layout-sider>
    <a-layout>
      <!-- <a-layout-header style="background: #fff; padding: 0" /> -->
      <layout-header></layout-header>
      <a-layout-content style="margin: 8px 8px">
        <div
          :style="{ padding: '24px', background: '#fff', minHeight: '360px' }"
        >
          Bill is a cat.
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
import layoutSider from "./Sider";
import layoutHeader from "./Header";
export default {
  name: "BasicLayout",
  components: {
    layoutSider,
    layoutHeader,
  },
};
</script>

<style>
#components-layout-demo-side .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
