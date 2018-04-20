<template>
<div class="body-content">
  <header class="header">
    <h1>{{ msg }}</h1>
  </header>
  <keep-alive>
    <router-view></router-view>
  </keep-alive>
</div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Vue文档学习目录'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.body-content {
  width: 100%;
  min-width: 880px;
  height: 100%;
}
.header {
  width: 100%;
  height: 50px;
  min-width: 880px;
  background: #42b983;
  font-weight: normal;
}
.header>h1 {
    text-align: center;
    line-height: 50px;
}
</style>
