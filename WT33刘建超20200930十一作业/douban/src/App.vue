<template>
  <div id="app">
    <Tabbar v-if="this.tabbarShow"></Tabbar>
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
  watch:{
    $route(to,from){
      if(to.name =="login"){
        this.tabbarShow = false;
      }else{
         this.tabbarShow = true;
      }
    }
  }
   
}
</script>

<style lang='less'>
*{margin: 0;padding: 0;}
body{font-size: 16px;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-bottom: 100/100rem;
}
</style>
