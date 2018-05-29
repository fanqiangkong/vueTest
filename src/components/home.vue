<template>
  <div id="home">
    <el-menu mode="horizontal" router :default-active="activeIndex"  @select="handleSelect">
      <el-menu-item index="/all">全部</el-menu-item>
      <el-menu-item index="/good">精华</el-menu-item>
      <el-menu-item index="/share">分享</el-menu-item>
      <el-menu-item index="/ask">问答</el-menu-item>
      <el-menu-item index="/job">招聘</el-menu-item>
    </el-menu>
    <section>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '/all'
    }
  },
  methods: {
    handleSelect (key) {
      console.log(key)
    }
  }
}
</script>
<style scoped lang="less">

</style>
