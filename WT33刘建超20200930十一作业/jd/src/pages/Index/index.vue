<template>
  <div class="wrap">
      <div class="search">
          <input type="text" class="sear" placeholder="请输入你要查找的内容 ">
          <i class="jd"></i> <i class="glass"></i>
          <span class="fr">登录</span>
      </div>
    <Banner swiperID="swpier1">
      <template #swiper-banner>
        <div class="swiper-slide">
          <img src="../../assets/img/1.jpg" alt />
        </div>
        <div class="swiper-slide">
          <img src="../../assets/img/2.jpg" alt />
        </div>
        <div class="swiper-slide">
          <img src="../../assets/img/3.jpg" alt />
        </div>
        <div class="swiper-slide">
          <img src="../../assets/img/4.jpg" alt />
        </div>
        <div class="swiper-slide">
          <img src="../../assets/img/5.jpg" alt />
        </div>
        <div class="swiper-slide">
          <img src="../../assets/img/6.jpg" alt />
        </div>
        <div class="swiper-slide">
          <img src="../../assets/img/7.jpg" alt />
        </div>
        <div class="swiper-slide">
          <img src="../../assets/img/8.jpg" alt />
        </div>
      </template>
    </Banner>
    <div class="nav">
      <Indexnav
        v-for="(item, index) in indexArr"
        :key="index"
        :url="item.url"
        :txt="item.txt"
      >
      </Indexnav>
    </div>
    <img src="../../assets/img/fuli.jpg" alt="" class="fuli" />
    <div class="seckill">
      <div class="miao">
        <span class="fr redColor">京选轮番秒</span>
        <img
          src="../../assets/img/seckill-icon.png"
          alt=""
          class="seckillIcon"
        /><span class="redColor">掌上秒杀</span>
        <nut-countdown end-time="2020-10-09 01:00:00"> </nut-countdown>
      </div>

      <nut-scroller @jump="jump()">
        <div
          slot="list"
          class="nut-hor-list-item"
          v-for="(item, index) of listData"
          :key="index"
        >
          <dl class="nut-scroller-item-info">
            <dt><img :src="item.img" alt="" /></dt>
            <dd class="cur">{{ item.current }}</dd>
            <dd class="org">{{ item.original }}</dd>
          </dl>
        </div>
      </nut-scroller>
    </div>
    <img src="../../assets/img/aishenghuo.jpg" alt="" class="aishenghuo" />
    <div class="vip">
      <img src="../../assets/img/cp1.jpg" alt="" class="cpOne" />
      <div>
        <img src="../../assets/img/cp2.jpg" alt="" class="cpTwo" />
        <img src="../../assets/img/cp3.jpg" alt="" class="cpThree" />
      </div>
    </div>
    <p class="recommend">为您推荐</p>
    <div class="list">
      <indexlist
        v-for="(item, index) in listArr"
        :key="index"
        :imgUrl="item.imgUrl"
        :title="item.title"
        :price="item.price"
        :good="item.good"
      ></indexlist>
    </div>
    <ul class="mainNav">
      <li><a href="#">登录</a></li>
      <li><a href="#">注册</a></li>
      <li><a href="#">反馈</a></li>
      <li><a href="#">返回顶部</a></li>
    </ul>
    <ul class="cut">
      <li><i></i> 客户端</li>
      <li><i></i>触屏版</li>
      <li><i></i>电脑版</li>
    </ul>
  </div>
</template>

<script>
import Banner from "../../components/banner.vue";
import Indexnav from "../../components/indexnav.vue";
import Indexlist from "../../components/indexlist";
export default {
  components: {
    Banner,
    Indexnav,
    Indexlist,
  },
  prop: ["start-time"],
  data() {
    return {
      indexArr: [
        { url: require("../../assets/icon/nav0.png"), txt: "分类查询" },
        { url: require("../../assets/icon/nav1.png"), txt: "物流查询" },
        { url: require("../../assets/icon/nav2.png"), txt: "购物车" },
        { url: require("../../assets/icon/nav3.png"), txt: "我的京东" },
        { url: require("../../assets/icon/nav4.png"), txt: "京东生鲜" },
        { url: require("../../assets/icon/nav5.png"), txt: "领卷中心" },
        { url: require("../../assets/icon/nav6.png"), txt: "京东超市" },
        { url: require("../../assets/icon/nav7.png"), txt: "我的关注" },
      ],
      listData: [
        {
          img: require("../../assets/img/pro01.jpg"),
          current: "￥80",
          original: "￥150",
        },
        {
          img: require("../../assets/img/pro02.jpg"),
          current: "￥10",
          original: "￥30",
        },
        {
          img: require("../../assets/img/pro03.jpg"),
          current: "￥40",
          original: "￥100",
        },
        {
          img: require("../../assets/img/pro04.jpg"),
          current: "￥80",
          original: "￥140",
        },
        {
          img: require("../../assets/img/pro05.jpg"),
          current: "￥80",
          original: "￥150",
        },
        {
          img: require("../../assets/img/pro07.jpg"),
          current: "￥80",
          original: "￥150",
        },
      ],
      listArr: [
        {
          imgUrl: require("../../assets/img/item01.jpg"),
          title: "晋腾家用不锈钢手动压面机首要多功能面条机水果榨...",
          price: "￥99",
          good: "94%",
        },
        {
          imgUrl: require("../../assets/img/item02.jpg"),
          title: "晋腾家用不锈钢手动压面机首要多功能面条机水果榨...",
          price: "￥99",
          good: "94%",
        },
        {
          imgUrl: require("../../assets/img/item03.jpg"),
          title: "晋腾家用不锈钢手动压面机首要多功能面条机水果榨...",
          price: "￥99",
          good: "94%",
        },
        {
          imgUrl: require("../../assets/img/item04.jpg"),
          title: "晋腾家用不锈钢手动压面机首要多功能面条机水果榨...",
          price: "￥99",
          good: "94%",
        },
      ],
    };
  },
};
</script>

<style lang='less'>
.fr {
  float: right;
}
.redColor {
  color: #da6271;
}
.wrap {
  text-align: left;
  position: relative;
  .search{
      width: 100%;
      color: #fff;
      padding:  20/100rem;
      position: absolute;
      box-sizing: border-box;
      left: 0;
      z-index: 2;
      .sear{
          width: 450/100rem;
          border-radius: 10px;
          height: 40/100rem;
          text-indent: 1rem;
      }
      i{
          width: 50/100rem;
          height: 50/100rem;
          display: inline-block;
          position: absolute;
      }
      .jd{
          background: url(../../assets/icon/sprites.png) no-repeat;
          background-size: 400/100rem;
         left: 35/100rem;
         top: 30/100rem;
      }
      .glass{
          background: url(../../assets/icon/sprites.png) no-repeat;
          background-size: 400/100rem;
          background-position: -240/100rem 0;
         left: 75/100rem;
         top: 30/100rem;
      }
  }
  .nav {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
  }
  .fuli {
    width: 100%;
  }
  .seckill {
    width: 100%;
    padding: 10/100rem;
    box-sizing: border-box;
    border: 1px solid gainsboro;
    .seckillIcon {
      width: 30/100rem;
      vertical-align: middle;
      margin-right: 20/100rem;
    }
    .nut-hor-list-item {
      .nut-scroller-item-info {
        dt {
          img {
            width: 165/100rem;
          }
        }
        .cur {
          font-weight: bold;
          color: #da6776;
        }
        .org {
          text-decoration: line-through;
        }
      }
    }
  }
}
.aishenghuo {
  width: 100%;
}
.vip {
  display: flex;

  img {
    border: 1px solid gainsboro;
    height: 200/100rem;
    box-sizing: border-box;
  }
  .cpOne {
    width: 50%;
    height: 400/100rem;
  }
  div {
    width: 50%;
    .cpTwo,
    .cpThree {
      width: 100%;
    }
  }
}
.recommend {
  height: 80/100rem;
  background: #f0f2f5;
  text-align: center;
  line-height: 80/100rem;
  color: gray;
}
.list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  box-sizing: border-box;
}
.mainNav {
  display: flex;
  justify-content: space-around;
  background: #f8f8f8;
  border: 1px solid gainsboro;
  box-sizing: border-box;

  li {
    list-style: none;
    padding: 20/100rem 0;
    a {
      width: 100%;
      display: inline-block;
      text-align: center;
      border-right: 1px solid gainsboro;
      box-sizing: border-box;
      padding-right: 20/100rem;
      color: black;
    }
    &:last-child{
        a{border: 0;}
    }
  }
}
.cut{
    display: flex;
    justify-content: space-around;
    height:150/100rem ;
    line-height: 220/100rem;
    background: #f8f8f8;
    li{
        list-style: none;
          text-align: center;
          position: relative;
        &:nth-of-type(1){
         i{
              background: url(../../assets/img/img.png) no-repeat;
          background-size: 10rem;
          background-position: -30/100rem -530/100rem;
         }
         
        }
        i{
            width: 90/100rem;
            height: 90/100rem;
            display: inline-block;
            background: red;
            position: absolute;
            left: 0;
            }
             &:nth-of-type(2){
         i{
              background: url(../../assets/img/img.png) no-repeat;
          background-size: 10rem;
          background-position: -140/100rem -530/100rem;
         }
         
        }
         &:nth-of-type(3){
         i{
              background: url(../../assets/img/img.png) no-repeat;
          background-size: 10rem;
          background-position: -240/100rem -530/100rem;
         }
         
        }
    }
}
</style>