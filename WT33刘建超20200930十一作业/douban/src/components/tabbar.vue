<template>
  <div class="tabbar">
    <Item nav="home" txt="首页" :cur="currnav" @newmsg="getval">
      <template #normalImg>
        <img src="../assets/images/ic_tab_home_normal.png" alt="" />
      </template>
      <template #actveImg>
        <img src="../assets/images/ic_tab_home_active.png" alt="" />
      </template>
    </Item>
    <Item nav="broadcast" txt="书影音" :cur="currnav" @newmsg="getval">
      <template #normalImg>
        <img src="../assets/images/ic_tab_subject_normal.png" alt="" />
      </template>
      <template #actveImg>
        <img src="../assets/images/ic_tab_subject_active.png" alt="" />
      </template>
    </Item>
    <Item nav="audio" txt="广播" :cur="currnav" @newmsg="getval">
      <template #normalImg>
        <img src="../assets/images/ic_tab_status_normal.png" alt="" />
      </template>
      <template #actveImg>
        <img src="../assets/images/ic_tab_status_active.png" alt="" />
      </template>
    </Item>
    <Item nav="group" txt="小组" :cur="currnav" @newmsg="getval">
      <template #normalImg>
        <img src="../assets/images/ic_tab_group_normal.png" alt="" />
      </template>
      <template #actveImg>
        <img src="../assets/images/ic_tab_group_active.png" alt="" />
      </template>
    </Item>
    <Item nav="mine" txt="我的" :cur="currnav" @newmsg="getval">
      <template #normalImg>
        <img src="../assets/images/ic_tab_profile_normal.png" alt="" />
      </template>
      <template #actveImg>
        <img src="../assets/images/ic_tab_profile_active.png" alt="" />
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
  height: 130/100rem;
  box-sizing: border-box;
  position: fixed;
  bottom: 0;
  display: flex;
  text-align: center;
  background: #fff;
  img {
    width: 75/100rem;
  }
}
</style>