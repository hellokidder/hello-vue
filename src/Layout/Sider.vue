<template>
  <a-layout-sider v-model="collapsed" collapsible collapsedWidth="48">
    <div class="logo" />
    <a-menu
      theme="dark"
      :default-selected-keys="['1']"
      mode="inline"
      :inlineIndent="16"
    >
      <a-menu-item key="1">
        <a-icon type="pie-chart" />
        <span>Option 1</span>
      </a-menu-item>
      <a-menu-item key="2">
        <a-icon type="desktop" />
        <span>Option 2</span>
      </a-menu-item>
      <a-sub-menu key="sub1">
        <span slot="title"><a-icon type="user" /><span>User</span></span>
        <a-menu-item key="3">
          Tom
        </a-menu-item>
        <a-menu-item key="4">
          Bill
        </a-menu-item>
        <a-menu-item key="5">
          Alex
        </a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <span slot="title"><a-icon type="team" /><span>Team</span></span>
        <a-menu-item key="6">
          Team 1
        </a-menu-item>
        <a-menu-item key="8">
          Team 2
        </a-menu-item>
      </a-sub-menu>
      <a-menu-item key="9">
        <a-icon type="file" />
        <span>File</span>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script>
export default {
  name: "layoutSider",
  data() {
    return {
      collapsed: false,
    };
  },
};
</script>

<style lang="less">
.ant-menu-inline-collapsed > .ant-menu-submenu > .ant-menu-submenu-title {
  padding: 0px 16px !important;
}
.ant-menu-inline-collapsed {
  width: 48px;
  .ant-menu-item {
    padding: 0px 16px !important;
  }
}
.logo {
  height: 32px !important;
  margin: 8px !important;
}
</style>
