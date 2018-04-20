<template>
  <div>
    <header class="header">
      <h1>{{ msg }}</h1>
    </header>
    <div class="center">
      <div class="nav">
        <Button>Default</Button>
        <Button type="primary">Primary</Button>
        <Button type="ghost">Ghost</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="text">Text</Button>
        <br><br>
        <Button type="info">Info</Button>
        <Button type="success">Success</Button>
        <Button type="warning">Warning</Button>
        <Button type="error">Error</Button>
      </div>
      <div class="content"></div>
    </div>
  </div>
</template>

<script>
import { Button } from 'iview'
console.log(Button)

export default {
  name: 'studyDocLists',
  data () {
    return {
      msg: 'Vue文档学习目录'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../../node_modules/iview/dist/styles/iview.css';
.header {
  height: 50px;
  background: #42b983;
  font-weight: normal;
}
.header>h1 {
    text-align: center;
    line-height: 50px;
  }
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
