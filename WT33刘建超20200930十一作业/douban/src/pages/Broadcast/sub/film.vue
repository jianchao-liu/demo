<template>
<div>
   <p class="filmTitle">正在上映的电影-北京</p>
  <div class="subScroll">
    <Sublist v-for='(item,index) in filmArr' :key="index"
    :title='item.title' :cover_url='item.cover_url' >
      <span>评分{{item.score}}</span>
    </Sublist>
</div>
<p class="filmTitle">即将上映的电影</p>
  <div class="subScroll">
    <Sublist v-for='(item,index) in arrTwo' :key="index"
    :title='item.title' :cover_url='item.cover_url' :score='item.score'>
     <span>评分{{item.score}}</span>
    </Sublist>
</div>
</div>
</template>

<script>
import Sublist from '../../../components/sublist'
export default {
  components:{
    Sublist
  },
  data() {
    return {
      value:'',
     filmArr:[],
     arrTwo:[]
    };
  },
  mounted() {
    this.$axios.get('../../../static/data/broadcast.json')
    .then(res=>{
      this.filmArr=res.data.recommend_one
      this.arrTwo=res.data.recommend_two
    })
  },

};
</script>

<style lang='less'>
.filmTitle{text-align: left;}
.subScroll {
  width: 100%;
  overflow-x: scroll;
  white-space: nowrap;
  height: 400/100rem;
  border: 1px solid gainsboro;
  box-sizing: border-box;
}
</style>