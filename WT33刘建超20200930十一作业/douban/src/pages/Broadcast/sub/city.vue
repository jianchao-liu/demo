<template>
  <div>
    <p class="filmTitle">音乐</p>
    <div class="subScroll">
      <Sublist
        v-for="(item, index) in cityArr"
        :key="index"
        :title="item.group_name"
        :cover_url="item.img_url"
      >
        <span>{{ item.group_time }}</span>
      </Sublist>
    </div>
    <p class="filmTitle">戏剧</p>
    <div class="subScroll">
      <Sublist
        v-for="(item, index) in cityArrO"
        :key="index"
        :title="item.group_name"
        :cover_url="item.img_url"
      >
        <span>{{ item.group_time }}</span>
      </Sublist>
    </div>
    <p class="filmTitle">聚会</p>
    <div class="subScroll">
      <Sublist
        v-for="(item, index) in cityArrT"
        :key="index"
        :title="item.group_name"
        :cover_url="item.img_url"
      >
        <span>{{ item.group_time }}</span>
      </Sublist>
    </div>
  </div>
</template>

<script>
import Sublist from "../../../components/sublist";
export default {
  components: {
    Sublist,
  },
  data() {
    return {
      cityArr: [],
      cityArrO: [],
      cityArrT: [],
    };
  },
  mounted() {
    this.$axios.get("../../../static/data/city.json").then((res) => {
      this.cityArr = res.data.city[0].city_list;
      this.cityArrO = res.data.city[1].city_list;
      this.cityArrT = res.data.city[2].city_list;
      console.log(res.data.city[1].city_list);
    });
  },
};
</script>

<style lang='less'>
.filmTitle {
  text-align: left;
}
.subScroll {
  width: 100%;
  overflow-x: scroll;
  white-space: nowrap;
  height: 400/100rem;
  border: 1px solid gainsboro;
  box-sizing: border-box;
  font-size: 20/100rem;
}
</style>