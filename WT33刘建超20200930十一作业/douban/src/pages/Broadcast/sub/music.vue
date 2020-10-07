<template>
<div>
   <p class="filmTitle">华语新碟</p>
  <div class="subScroll">
    <Sublist v-for='(item,index) in musicArr' :key="index"
    :title='item.title' :cover_url='item.cover_url' >
      <span>评分：{{item.score}}</span>
    </Sublist>
    </div>
     <p class="filmTitle">欧美新碟</p>
  <div class="subScroll">
    <Sublist v-for='(item,index) in musicArrT' :key="index"
    :title='item.title' :cover_url='item.cover_url' >
      <span>评分：{{item.score}}</span>
    </Sublist>
    </div>
     <p class="filmTitle">日韩新碟</p>
  <div class="subScroll">
    <Sublist v-for='(item,index) in musicArrS' :key="index"
    :title='item.title' :cover_url='item.cover_url' >
      <span>评分：{{item.score}}</span>
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
     musicArr:[],
     musicArrT:[],
     musicArrS:[]
    };
  },
  mounted() {
    this.$axios.get('../../../static/data/music.json')
    .then(res=>{
      this.musicArr=res.data.group[0].group_list
       this.musicArrT=res.data.group[1].group_list
        this.musicArrS=res.data.group[2].group_list
      console.log(res.data.group[2])
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
  font-size: 20/100rem;
}
</style>