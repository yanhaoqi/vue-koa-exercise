<template>
  <div id="app">
    <!--路由视图渲染目标元素-->
    <router-view></router-view>
  </div>
</template>

<script>
//  不需要再引入、注册Login、Todolist组件，因为在路由视图中已经引入、注册了
export default {
  name: 'app'
}
</script>

<style>

</style>
