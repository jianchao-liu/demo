<template>
  <div>
    <Header>
      <template #homeImg>
        <div class="head">
          <div class="searchBox">
            <input type="text" placeholder="影视 图片 唱片 小组等" class="inputClass" />
            <img src="../../assets/images/ic_group_search_small.png" alt class="search" />
            <img src="../../assets/images/ic_scan_gray.png" alt class="scan" />
          </div>
        </div>
      </template>
      <template #right>
        <img src="../../assets/images/ic_chat_white.png" alt class="rightImg" />
      </template>
    </Header>
    <Banner swiperID="swpier1">
      <template #swiper-banner>
        <div class="swiper-slide">
          <img src="../../assets/images/banner/01.jpg" alt />
        </div>
        <div class="swiper-slide">
          <img src="../../assets/images/banner/02.jpg" alt />
        </div>
        <div class="swiper-slide">
          <img src="../../assets/images/banner/03.jpg" alt />
        </div>
      </template>
    </Banner>
    <Newslist v-for='(item,index) in arr' :key='index'
    :imgSrc='item.target.cover_url' :title='item.title' 
    :desc='item.target.desc' :name='item.target.author.name'
    ></Newslist>
  </div>
</template>

<script>
import Header from "../../components/header";
import Banner from "../../components/banner.vue";
import Newslist from '../../components/newslist.vue'
export default {
  components: {
    Header,
    Banner,
    Newslist
  },
  data(){
    return{
      arr:[]
    }
  },
   mounted(){
         this.$axios.get('../../static/data/homeData.json')
         .then(
           res=>{
             console.log(res.data.recommend_feeds)
             this.arr=res.data.recommend_feeds
           }
         )
     }

};
</script>

<style lang='less'>
.head {
  height: 60/100rem;
  background: #48bd5a;
  .searchBox {
    width: 530/100rem;
    height: 40/100rem;
    background: #fff;
    margin-left: 20/100rem;
    position: relative;
    top: 10/100rem;
    border-radius: 5px;
    .inputClass {
      width: 360/100rem;
      height: 40/100rem;
      border-radius: 5px;
      float: left;
      border: 0;
      margin-left: 80/100rem;
      &:focus {
        outline: 0;
      }
    }
    .search {
      width: 35/100rem;
      left: 20/100rem;
      top: 5/100rem;
      position: absolute;
    }
    .scan {
      width: 35/100rem;
      right: 50/100rem;
      top: 3/100rem;
      position: absolute;
    }
  }
}
</style>