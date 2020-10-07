<template>
  <div class="swiper-container" :class="swiperID">
    <div class="swiper-wrapper">
      <template>
        <slot name="swiper-banner"></slot>
      </template>
    </div>
    <!-- 如果需要分页器 -->
    <div
      :class="{'swiper-pagination':paginationshow,
        ['swiper-pagination'+swiperID]:paginationshow}"
    ></div>

    <!-- 如果需要导航按钮 -->
    <!-- <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div> -->
  </div>
</template>

<script>
import Swiper from "swiper";
import "../../node_modules/swiper/css/swiper.css";
export default {
  props: {
    swiperID: { type: String, default: "" },
    paginationshow: { type: Boolean, default: true },
    effect: { type: String, default: "slide" },
    paginationtype: { type: String, default: "bullets" }
  },
  mounted() {
      console.log(this.swiperID)
    new Swiper("." + this.swiperID, {
      loop: true, // 循环模式选项
      effect: this.effect,
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination" + this.swiperID,
        type: this.paginationtype
      },
      // 如果需要前进后退按钮
      // navigation: {
      //   nextEl: ".swiper-button-next",
      //   prevEl: ".swiper-button-prev"
      // }
    });
  }
};
</script>

<style lang='less'>
.swiper-container {
  width: 100%;
  img {
    width: 100%;
  }
}
</style>