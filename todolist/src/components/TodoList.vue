<template>
  <el-row class="content">
    <el-col :xs="{span:20,offset:2}" :sm="{span:8,offset:8}">
      <span>
        欢迎 {{name}} ! &nbspTips:今日事今日毕
      </span>
      <!--.native修饰符 在元素上监听一个原生事件 .trim 去掉输入框内容的前后空格-->
      <el-input placeholder="请输入待办事项" v-model.trim="todos" @keyup.enter.native="addTodos"></el-input>
      <el-tabs v-model="activeName" type="border-card">

        <el-tab-pane label="待办事项" name="first">
          <el-col :xs="24">
            <!--全部完成-不显示，否则-显示-->
            <template v-if="!Done">
              <template v-for="(item, index) in list">
                <!--显示status为false的-->
                <div class="todo-list" v-if="item.status == false">
                  <span class="item">
                    {{index + 1}}. {{item.content}}
                  </span>
                  <span class="pull-right">
                    <el-button size="small" type="primary" @click="finished(index)">完成</el-button>
                    <el-button size="small" type="primary" @click="remove(index)">删除</el-button>
                  </span>
                </div>
              </template>
            </template>
            <div v-else-if="Done">
              暂无待办事项，Greet!
            </div>
          </el-col>
        </el-tab-pane>

        <el-tab-pane label="已完成事项" name="second">
          <template v-if="this.count > 0">
            <template v-for="(item, index) in list">
              <div class="todo-list" v-if="item.status == true">
                <span class="item finished">{{index + 1}}. {{item.content}}</span>
                <span class="pull-right">
                  <el-button size="small" type="primary" @click="restore(index)">还原</el-button>
                </span>
              </div>
            </template>
          </template>
          <div v-else>
            暂无已完成事项，加油哦!
          </div>
        </el-tab-pane>
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
            activeName:'first',
            list:[],
            count:0 //已完成的数量
          }
      },
      methods:{
        addTodos(){
          if(this.todos != ''){
            let todoObj = {
                status:false,
                content:this.todos
            };
            this.list.push(todoObj)
            this.todos = ''
          }
        },
        finished(index){
//          this.list[index].status == true
//          Vue只能监测到data对象的直接属性的变化，对于直接属性嵌套的第二层对象的属性的变化，要用$set来监测
          this.$set(this.list[index],'status',true)
          this.$message({
            type:'success',
            message:'任务完成'
          })
        },
        remove(index){
          this.$confirm(`确认删除待办事项 ${this.list[index].content} 吗？`,'提示',{
              confirmButtonText:'确定',
              cancelButtonText:"取消",
              type:'warning'
          }).then( () => {
              this.list.splice(index,1);
              this.$message({
                type:'success',
                message:'删除成功'
              })
          } ).catch( () =>{
            this.$message({
              type:'info',
              message:'取消删除'
            })
          } );
        },
        restore(index){
//            模板字符串
          this.$confirm(`确认还原已完成事项 ${this.list[index].content} 吗？`,'提示',{
              confirmButtonText:'确定',
              cancelButtonText:'取消',
              type:'warning'
          }).then( () => {
            this.$set(this.list[index],'status',false)
            this.$message({
              type:'success',
              message:'还原成功'
            })
          }).catch( () => {
              this.$message({
                type:'info',
                message:'取消还原'
              })
          })
        }
      },
      computed:{
          Done(){
              let count = 0;
              let length = this.list.length; //总数量
//              数组的for in， i为数组的索引  对象的for in, i为对象的属性名
              for(let i in this.list){
                  this.list[i].status == true ? count++ : '';
              }
//              把计算好的已完成的数量赋值给count
              this.count = count
              if(count == length || length == 0){
//                  全部完成，没有待办事项 Done:true
                  return true
              }else{
//                  没有完成 Done:false
                  return false
              }
          }
      }
  }
</script>
<style lang="stylus" scope>
  .el-input
    margin 20px auto
  .todo-list
    width 100%
    margin-top 8px
    padding-bottom 8px
    border-bottom 1px solid #eee
    overflow hidden
    text-align left
  .item
    font-size 20px
    &.finished
      text-decoration line-through
      corlor #ddd
  .pull-right
    float right
</style>
