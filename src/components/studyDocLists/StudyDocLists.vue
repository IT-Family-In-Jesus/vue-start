<template>
  <div class="body">
    <div class="nav">
      <i-menu active-name="1">
         <i-submenu name="1">
            <template slot="title">
                <i-icon type="ios-analytics"></i-icon>
                开始与安装
            </template>
            <i-menu-group title="Item 1">
                <i-menu-item name="1-1">Option 1</i-menu-item>
                <i-menu-item name="1-2">Option 2</i-menu-item>
            </i-menu-group>
            <i-menu-group title="Item 2">
                <i-menu-item name="1-3">Option 3</i-menu-item>
                <i-menu-item name="1-4">Option 4</i-menu-item>
            </i-menu-group>
        </i-submenu>
    </i-menu>
    </div>
    <div class="center">

    </div>
  </div>
</template>

<script>
import { Button, MenuGroup, MenuItem, Icon, Submenu, Menu } from 'iview'

export default {
  data () {
    return {
    }
  },
  created () {
  },
  methods: {
  },
  components: {
    'i-button': Button,
    'i-menu-group': MenuGroup,
    'i-menu-item': MenuItem,
    'i-icon': Icon,
    'i-submenu': Submenu,
    'i-menu': Menu

  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped>
.body {
  width: 100%;
  min-width: 800p;
  height: calc(100% - 50px);
  position: relative;
}
.nav {
  /* width: 270px; */
  height: 100%;
  /* padding: 20px 30px; */
  /* border-right: solid 1px #DDDEE1; */
  position: absolute;
  top: 0px;
  left: 0px;
}
.center {
 margin-left: 270px;
 width: calc(100% - 270px);
 height: 100%;
 /* background: burlywood; */
}
</style>
