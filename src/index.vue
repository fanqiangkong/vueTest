<template>
    <div>
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
