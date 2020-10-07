<template>
  <div>
    <Header title="书影音">
      <template #left>
        <img
          src="../../assets/images/ic_actionbar_search_icon.png"
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
    <div class="nav">
      <span :class="{ active: currid == 0 }" @click="currid = 0">
        <router-link to="/broadcast/film">电影</router-link>
      </span>
      <span :class="{ active: currid == 1 }" @click="currid = 1">
        <router-link to="/broadcast/read">读书</router-link>
      </span>
      <span :class="{ active: currid == 2 }" @click="currid = 2">
        <router-link to="/broadcast/tv">电视</router-link>
      </span>
      <span :class="{ active: currid == 3 }" @click="currid = 3">
        <router-link to="/broadcast/city">同城</router-link>
      </span>
      <span :class="{ active: currid == 4 }" @click="currid = 4">
        <router-link to="/broadcast/music">音乐</router-link>
      </span>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from "../../components/header";
export default {
  components: {
    Header,
  },
  data() {
    return {
      currid: 0,
    };
  },
};
</script>

<style lang='less'>
.nav {
  display: flex;
  line-height: 50/100rem;
  span {
    width: 20%;
    border-bottom: 1px solid gainsboro;
    
  }
  .active {
      background: #07d614;
      a{color: #fff;}
    }
  a {
    text-decoration: none;
    color: #a0a1a3;
    display: inline-block;
  }
}
</style>