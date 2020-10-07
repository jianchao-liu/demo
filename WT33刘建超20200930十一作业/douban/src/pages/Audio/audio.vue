<template>
  <div>
    <Header title="广播">
      <template #left>
        <img
          src="../../assets/images/ic_status_search_user.png"
          alt=""
          class="leftImg"
        />
      </template>
      <template #right>
        <img
          src="../../assets/images/ic_chat_green.png"
          alt=""
          class="rightImg"
        />
      </template>
    </Header>
    <div class="joint">
      <div class="quan fl"><span class="iconfont icon-guanyuwomen"></span></div>
      <router-link to="/login">登录发广播</router-link>
    </div>
    <div class="diary">
      <div class="quan fl"><span class="iconfont icon-douban"></span></div>
       <div class="dou">
          <p class="grayColor"><span>豆瓣 </span>写了日记</p>
        <p class="grayColor time">2018-05-23 10:39:23</p>
       </div>
       <div class="notice">
         <p>5月24日凌晨3:00～6:00豆瓣停机维护</p>
         <p class="major">因业务发展需要，豆瓣计划与5月24日（星期四）凌晨3:00~6:00对服务器进行机房迁移，迁移期间全部豆瓣相关...</p>
       </div>
       <p class="icon">
         <span  class="iconfont icon-ziyuan">29</span>
         <span  class="iconfont icon-pinglun">29</span>
         <span  class="iconfont icon-yuedu">29</span>
         <span>...</span>
         </p>
    </div>
     <div class="diary">
      <div class="quan fl"><span class="iconfont icon-douban"></span></div>
       <div class="dou">
          <p class="grayColor"><span>豆瓣 </span>写了日记</p>
        <p class="grayColor time">2018-05-23 10:39:23</p>
       </div>
       <div class="notice">
         <p>北京时间3月28日19点19分，豆瓣首部破百万评分人数电影诞生</p>
         <p class="major">因业务发展需要，豆瓣计划与5月24日（星期四）凌晨3:00~6:00对服务器进行机房迁移，迁移期间全部豆瓣相关...</p>
       </div>
       <p class="icon">
         <span  class="iconfont icon-ziyuan">29</span>
         <span  class="iconfont icon-pinglun">29</span>
         <span  class="iconfont icon-yuedu">29</span>
         <span>...</span>
         </p>
    </div>
  </div>
</template>

<script>
import Header from "../../components/header";
import "../../../static/font/font_2114091_s2sat9wr28i/iconfont.css";
export default {
  components: {
    Header,
  },
};
</script>

<style lang='less'>
.fl {
  float: left;
}
.fr{float: right;}
.joint {
  display: flex;
  padding: 20/100rem;
  height: 80/100rem;
  border: 1px solid gainsboro;
  line-height: 80/100rem;
  .quan {
    width: 70/100rem;
    height: 70/100rem;
    border-radius: 50%;
    background: #dedede;
    margin-right: 20/100rem;
    .icon-guanyuwomen:before {
      font-size: 70/100rem;
      color: #fff;
    }
  }
  a {
    color: gray;
    text-decoration: none;
  }
}
.diary {
  padding: 20/100rem;
  display: flex;
  flex-wrap: wrap;
  .quan {
    width: 70/100rem;
    height: 70/100rem;
    background: #03bd10;
    border-radius: 50%;
    .icon-douban {
      color: #fff;
      font-size: 50/100rem;
    }
  }
  .dou{
    width: 80%;
    text-align: left;
    margin-left: 20/100rem;
   .grayColor{
     color: gray;
     span{color:black ;}
   }
   .time{font-size: 20/100rem;}
  }
  .notice{
    width: 450/100rem;
    height: 200/100rem;
    background: #f9f9f9;
    margin-left: 100/100rem;
    padding: 0 30/100rem;
    text-align: left;
    box-sizing: border-box;
    margin-bottom: 30/100rem;
    .major{
      color: gray;
      font-size: 15/100rem;
    }
  }
  .icon{
    width: 100%;
    color: gray;
    span{margin: 0 30/100rem;}
    .iconfont{font-size: 12/100rem;}
  }
}
</style>