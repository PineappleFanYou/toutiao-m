<template>
  <div class="Layout-container">
    <router-view />
    <van-tabbar route>
      <van-tabbar-item
        icon="home-o"
        to="/home"
      >首页</van-tabbar-item>
      <van-tabbar-item
        icon="chat-o"
        to="/qa"
      >问答</van-tabbar-item>
      <van-tabbar-item
        icon="video-o"
        to="/vedio"
      >视频</van-tabbar-item>
      <van-tabbar-item
        icon="manager-o"
        to="/profile"
      >我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data() {
    return {
    }
  }
}
</script>
<style lang="less" scoped>
</style>