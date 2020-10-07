<template>
    <div class="listItem">
      <img :src="imgUrl"  class="imgUrl">
      <p class="iTitle">{{title}}</p>
      <span class="iprice">{{price}}</span><br>
      <span class="igood">好评率{{good}}</span> <button class="ibtn">看相似</button>
    </div>
</template>

<script>
export default {
props:['title','price','good','imgUrl']
}
</script>

<style lang='less'>
.listItem{
    width: 47%;
    margin-right: 10/100rem;
    margin-bottom: 10/100rem;
    box-sizing: border-box;
    border: 1px solid gainsboro;
    background: #f0f2f5;
    padding-bottom: 20/100rem;
    .imgUrl{width: 100%;}
    .iTitle{font-size: 24/100rem;}
    .iprice{color: red;font-weight: bold;}
    .igood{font-size: 24/100rem;color: gray;}
    .ibtn{background: #f0efef;border: 1px solid gainsboro; float: right;margin-right: 20/100rem;padding:0  10/100rem;color: gray;}
}
</style>