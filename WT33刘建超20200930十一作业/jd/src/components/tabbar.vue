<template>
  <div class="tabbar">
    <Item nav="index"  :cur="currnav" @newmsg="getval">
       <template #normalImg>
        <img src="../assets/icon/icon-home.png" alt="" />
      </template>
      <template #actveImg>
        <img src="../assets/icon/icon-home-active.png" alt="" />
      </template>
    </Item>
    <Item nav="myjd"  :cur="currnav" @newmsg="getval">
       <template #normalImg>
        <img src="../assets/icon/icon-me.png" alt="" />
      </template>
      <template #actveImg>
        <img src="../assets/icon/icon-me-active.png" alt="" />
      </template>
    </Item>
    <Item nav="find"  :cur="currnav" @newmsg="getval">
       <template #normalImg>
        <img src="../assets/icon/icon-find.png" alt="" />
      </template>
      <template #actveImg>
        <img src="../assets/icon/icon-find-active.png" alt="" />
      </template>
    </Item>
    <Item nav="shopping"  :cur="currnav" @newmsg="getval">
       <template #normalImg>
        <img src="../assets/icon/icon-cart.png" alt="" />
      </template>
      <template #actveImg>
        <img src="../assets/icon/icon-cart.png" alt="" />
      </template>
    </Item>
     <Item nav="catergry"  :cur="currnav" @newmsg="getval">
       <template #normalImg>
        <img src="../assets/icon/icon-catergry.png" alt="" />
      </template>
      <template #actveImg>
        <img src="../assets/icon/icon-catergry-active.png" alt="" />
      </template>
    </Item>
  </div>
</template>

<script>
import Item from "./Item";
export default {
  components: {
    Item,
  },
  data() {
    return {
      currnav: "",
    };
  },
  methods: {
    getval(val) {
      this.currnav = val;
      console.log(this.currnav);
    },
  },
};
</script>

<style lang='less'>
* {
  margin: 0;
  padding: 0;
}
.tabbar {
  width: 100%;
  height: 100/100rem;
  box-sizing: border-box;
  position: fixed;
  bottom: 0;
  display: flex;
  text-align: center;
  background: #fff;
  z-index: 2;
  img {
    width: 125/100rem;
  }
}
</style>