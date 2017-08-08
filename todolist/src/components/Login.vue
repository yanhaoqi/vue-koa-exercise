<template>
  <el-row class="content">
    <!--xs:<768px sm:>=768px md:>=992px lg:>=1200px type:number/object-->
    <el-col :xs="24" :sm="{span:8,offset:8}"  :md="{span:7,offset:8.5}">
      <span class="title">
        TodoList
      </span>
      <el-row>
        <el-input v-model="account" placeholder="请输入账号" type="text"></el-input>
        <el-input v-model="password" placeholder="请输入密码" type="password">
        </el-input>
      </el-row>
      <el-button type="primary">登录</el-button>
    </el-col>
  </el-row>
</template>

<script>
export default{
    data(){
        return {
            account:'',
            password:''
        }
    }
}
</script>
<!--scoped属性保证样式只对该组件生效-->
<style lang="stylus" scoped>
  .el-row.content
    padding 16px
    text-align center
    margin-top 200px
  .title
    font-size 28px
  .el-input
    margin 12px 0
  .el-button
    width 100%
    margin-top 12px
</style>
