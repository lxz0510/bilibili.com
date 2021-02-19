<template>
  <div @click="pashPush" v-if="detaillist">
    <div class="detaillist">
      <div class="imgparent">
        <img src="../assets/logo.png" alt="" style="width: 100%" />
        <div><span class="video">1233</span></div>
        <span class="comment">{{ detaillist.commentlen }}</span>
      </div>
      <p>{{ detaillist.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["detaillist"],
  methods: {
    pashPush() {
      console.log(this.$route)
      if (this.$route.path != `/article/${this.detaillist.id}`) {
        this.$router.push(`/article/${this.detaillist.id}`);
      }
    },
  },
};
</script>

<style>
.detaillist p {
  font-size: 3.333vw;
  padding: 0.833vw 0;
  line-height: 3.333vw;
}
.imgparent {
  position: relative;
}
.video {
  position: absolute;
  left: 0px;
  bottom: 0px;
  color: black;
  font-size: 30px;
}
.comment {
  position: absolute;
  right: 0px;
  bottom: 0px;
  color: black;
  font-size: 30px;
}
.left {
  position: absolute;
  left: 0px;
  bottom: 0px;
}
</style>