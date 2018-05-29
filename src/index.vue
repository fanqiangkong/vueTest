<template>
    <div id="index">
        <!-- 头部文件 -->
        <nav>
          <app-nav></app-nav>
        </nav>
        <section>
          <router-view></router-view>
        </section>
    </div>
</template>
<script>
import appNav from './nav'
export default {
    components: {
        appNav
    },
    data () {
        return {

        }
    }
}
</script>
<style lang="less" scoped>
section{
  width: 90%;
  margin: 0 auto;
  background: #fff;
  min-height: calc(100vh - 44px);
  padding: 0 20px;
  box-sizing: border-box;
}
</style>

