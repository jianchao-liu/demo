<template>
  <div>
      <div>
       <img :src="cover_url" alt="" class="img"><br>
        <span class="subTitle">{{title}}</span><br>
        <slot></slot>
      </div>
    </div>
</template>

<script>
export default {
  props:['title','score','cover_url']
};
</script>

<style lang='less'>
.subScroll {
  width: 100%;
  overflow-x: scroll;
  white-space: nowrap;
  height: 400/100rem;
  border: 1px solid gainsboro;
  box-sizing: border-box;
  div {
      display: inline-block;
    .img {
      width: 200/100rem;
      height: 300/100rem;
      border: 1px solid gainsboro;
    }
    .ping{color: gray;font-size: 25/100rem;}
  }
}
</style>