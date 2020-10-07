<template>
  <div class="item" @click="fn">
    <!-- <img src="../assets/1.png" alt=""> -->
    <template v-if="!flag">
      <slot name="normalImg"></slot>
    </template>
    <template v-if="flag">
      <slot name="actveImg"></slot>
    </template>
    <br />
    <span :class="{ active: flag }">{{ txt }}</span>
  </div>
</template>

<script>
export default {
  props: ["nav", "cur", "txt"],
  computed: {
    flag() {
      if (this.nav == this.cur) {
        return true;
      }
      return false;
    },
  },
  methods: {
    fn() {
      this.$emit("newmsg", this.nav);
      this.$router.push("/" + this.nav).catch((err) => {
        return;
      });
      // this.$router.push("/" + this.nav);
    },
  },
};
</script>

<style>
.active {
  color: #42bd56;
}
.item {
  width: 20%;
  justify-content: space-around;
}
</style>