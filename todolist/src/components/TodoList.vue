<template>
  <el-row class="content">
    <el-col :xs="{span:20,offset:2}" :sm="{span:8,offset:8}">
      <span>
        欢迎 {{name}} ! 您的待办事项：
      </span>
      <!--.native修饰符 在元素上监听一个原生事件-->
      <el-input placeholder="请输入待办事项" v-model="todos" @keyup.enter.native="addTodos"></el-input>
      <el-tabs v-model="activeName">
        <el-tab-pane label="待办事项" name="first">
          <el-col :xs="24"></el-col>
        </el-tab-pane>
        <el-tab-pane label="已完成事项" name="second"></el-tab-pane>
      </el-tabs>
    </el-col>
  </el-row>
</template>
<script>
  export default{
      data(){
          return {
            name:'闫浩奇',
            todos:'',
            activeName:''
          }
      },
      methods:{
        addTodos(){

        }
      }
  }
</script>
<style lang="stylus" scope>

</style>
