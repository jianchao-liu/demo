<template>
  <div id="app">
    <Tabbar></Tabbar>
    <router-view/>
  </div>
</template>

<script>
import {obj} from '../static/util.js'
import Tabbar from './components/tabbar.vue'
export default {
  name: 'App',
  components:{
    Tabbar,
  },
  mounted() {
     obj.setRem()
  },
  data(){
    return{
      tabbarShow:true
    }
  },
}
</script>

<style lang='less'>
*{margin: 0;padding: 0;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 16px;
}

</style>
