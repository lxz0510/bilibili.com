<template>
  <div class="navbar">
    <div class="logo" @click="$router.push('/')">
      <img src="../../assets/logo.png" alt="bilibiliLogo" />
    </div>
    <div class="second">
      <p>
        <van-icon class="search" name="search" />
      </p>
    </div>
    <div class="userfor">
      <img
        :src="imgUrl"
        alt=""
        class="myImg"
        @click="$router.push('/userinfo')"
        v-if="imgUrl"
      />
      <img
        src="../../assets/default_img.jpg"
        alt=""
        v-else
        class="myImg"
        @click="$router.push('/login')"
      />
      <div class="download">下载App</div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["usermsg"],
  data() {
    return {
      imgUrl: "",
    };
  },
  methods: {
    async NavInit() {
      if (localStorage.getItem("token")) {
        const res = await this.$http.get("/user/" + localStorage.getItem("id"));
        this.imgUrl = res.data[0].user_img;
      }
    },
  },
  mounted() {
    this.NavInit();
  },
};
</script>

<style >
.navbar {
  display: flex;
  height: 12.5vw;
  background-color: white;
}
.logo {
  width: 200px;
  margin-top: 20px;
}
img {
  width: 100%;
}
.myImg {
  width: 54px;
  height: 54px;
}
.userfor {
  display: flex;
  justify-content: center;
  align-items: center;
}
.download {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 150px;
  margin: 0 20px;
  border-radius: 10px;
  background-color: #fb7299;
  color: white;
  font-size: 30px;
}
.second {
  flex: 1;
  display: flex;
  align-items: center;
}
.second p {
  background-color: #f4f4f4;
  width: 80%;
  height: 50%;
  margin-left: 20px;
  border-radius: 100px;
  position: relative;
}
.search {
  position: absolute;
  top: -20px;
  left: 10px;
  color: #aaa;
}
</style>