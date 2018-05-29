<template>
    <div id="nav">
      <div class="width">
        <a class="img"><img src="./assets/cnodejs_light.svg" alt=""></a>
        <el-input prefix-icon="el-icon-search" size="mini"></el-input>
        <ul>
          <router-link v-for="item of navs" :to="item.path" :key="item.id" tag="li">
            <a href="javascript:;">{{ item.name }}</a>
          </router-link>
        </ul>
        
      </div>
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
<style lang="less" scoped>
#nav{
  background: #444;
  overflow: hidden;
  .width{
    width: 90%;
    margin: auto;
    padding: 5px;
    font-size: 13px;
    .el-input{
      float: left;
      margin-left: 20px;
      width: 206px;
      border-radius: 14px;
      overflow: hidden;
      margin-top: 3px;
      font-size: 13px;
    }
  }
  .img{
    width: 120px;
    height: 34px;
    display: block;
    float: left;
    line-height: 34px;
    img{
      max-width: 100%;
    }
  }
  ul{
    float: right;
    list-style: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    li{
      float: left;
      line-height: 34px;
    }
    a{
      text-decoration: none;
      padding: 0 15px;
    }
    a:hover{
      color: #fff;
    }
  }
  .width::after{
    content: '';
    display: block;
    clear: both;
  }
  a{
    color: #ccc;
  }
}
</style>

