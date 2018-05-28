<template>
    <div>
      <div></div>
        <router-link v-for="item of navs" :to="item.path" :key="item.id" tag="li">
          <a href="javascript:;">{{ item.name }}</a>
        </router-link>
    </div>
</template>
<script>
export default {
  data () {
    return {
        navs: [
          {
            path:'/',
            name: '首页',
            id:1
          },
          {
            path: '/message',
            name: '未读消息',
            id:2
          },
          {
            path: '/newbie',
            name: '新手入门',
            id:3
          },
          {
            path: '/about',
            name: '关于',
            id:4
          },
          {
            path: '/set',
            name: '设置',
            id:5
          }
        ]
    }
  }
}
</script>

