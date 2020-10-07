<template>
    <div class="item">
      <img :src="url" alt="" /><br />
      <span>{{txt}}</span>
    </div>
   
</template>

<script>
export default {
    props:['url','txt']
};
</script>

<style lang='less'>
.nav {
  .item {
    width: 25%;
    height: 130/100rem;
    font-size: 22/100rem;
    img {
      width: 80/100rem;
    }
  }
}
</style>