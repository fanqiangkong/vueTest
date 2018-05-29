  <template>
    <el-table :data="tableData" :show-header="false">
      <el-table-column prop="date">
        <template slot-scope="scope">
          <div class="author">
            <img class="authorimg" :src="scope.row.author.avatar_url" alt="头像" :title="scope.row.author.loginname">
            <span title="回复数">{{scope.row.reply_count}}</span>/<span title="点击数">{{scope.row.visit_count}}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="title" min-width="300">
        <template slot-scope="scope">
          <span class="top type" v-if="scope.row.top || scope.row.tab == 'good'">
            {{scope.row.top?'置顶':scope.row.tab == 'good'?'精华':''}}
          </span>
          <span class="type elseTop" v-else>
            {{scope.row.tab == 'share'? '分享':scope.row.tab == 'ask'?'问答':"招聘"}}
          </span>
          <a href="/">{{scope.row.title}}</a>
        </template>
      </el-table-column>
      <el-table-column prop="address"></el-table-column>
    </el-table>
  </template>

  <script>
    export default {
      data() {
        return {
          tableData: []
        }
      },
      methods: {

      },
      created () {
        this.ajax.get('https://cnodejs.org/api/v1/topics?limit=10&mdrender=false&tab=good').then(res => {
          console.log(res)
          if (res.status == 200) {
            this.tableData = res.data.data
            console.log(res.data.data)
          }
        })
      }
    }
  </script>
  <style lang="less" scoped>
  .author{
    line-height: 25px;
    img{
      width: 25px;
      vertical-align: bottom;
      margin-right: 5px;
    }
  }
  .top{
    background: #80bd01;
    color: #fff;
  }
  .type{
    padding: 5px 6px;
    border-radius: 7px;
  }
  .elseTop{
    background: #ccc
  }
  </style>
  
