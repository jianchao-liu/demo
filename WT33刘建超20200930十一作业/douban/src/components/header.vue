<template>
  <div class="headerNav">
    <span>{{ title }}</span>
    <slot name="left"></slot>
    <slot name="right"></slot>
    <slot name="homeImg"></slot>
  </div>
</template>

<script>
export default {
  props: ["title"],
};
</script>

<style lang='less'>
.headerNav {
  width: 100%;
  height: 60/100rem;
  line-height: 60/100rem;
  text-align: center;
  border-bottom: 1px solid #ccc;
  background: #f7f7f7;
  position: relative;
  img {
    width: 45/100rem;
    position: absolute;
  }
  .rightImg {
    top: 10/100rem;
    right: 20/100rem;
  }
  .leftImg {
    top: 10/100rem;
    right: 80/100rem;
  }
}
</style>