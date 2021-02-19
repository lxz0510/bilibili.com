<template>
  <div class="edit">
     <user-top></user-top>
      <div class="upload">
         <van-uploader :after-read="afterRead" preview-size="167px" class="uploadImg"/>
        <edit-banner left="头像" >
          <img :src="model.user_img" alt="" slot="right" class="myimg" v-if="model.user_img">
          <img src="../assets/default_img.jpg" alt="" slot="right" class="myimg" v-else>
        </edit-banner>
      </div>
     <edit-banner left="昵称" @changeinfor="show = true">
       <a href="javascript:;" slot="right">{{model.name}}</a>
     </edit-banner>
     <edit-banner left="UID">
        <a href="javascript:;" slot="right">{{model.username}}</a>   
     </edit-banner>
     <edit-banner left="性别"  @changeinfor="gendershow = true">
        <a href="javascript:;" slot="right" >{{model.gender}}</a>
     </edit-banner>
     <edit-banner left="生日">
       <a href="javascript:;" slot="right"></a>
     </edit-banner>
     <edit-banner left="个性签名"  @changeinfor="textshow = true">
        <a href="javascript:;" slot="right">{{myname}}</a>
     </edit-banner>


    <van-dialog title="昵称" v-model="show" show-cancel-button @confirm='confirm'  @cancel="content = ''">
      <van-field v-model="content"  autofocus></van-field>
    </van-dialog>
    <van-dialog title="个性签名" v-model="textshow" show-cancel-button @confirm='confirs'  @cancel="content = ''">
       <van-field v-model="myname"  autofocus></van-field>
     </van-dialog>

   <van-action-sheet v-model="gendershow" cancel-text="取消" :actions="actions" @select="onSelect" />
  </div>
</template>

<script>
import userTop from '../components/common/userTop.vue'
import EditBanner from '../components/common/editBanner.vue'
export default {
  components: { userTop, EditBanner },
  data(){
    return{
      left:'',
      right:'',
      model:{},
      show:false,
      textshow:false,
      content:'',
      myname:'',
      gendershow:false,

       actions: [
      {
        name: '男',
        val:1
      },
      {
        name: '女',
        val:0
      }
    ],
    }
  },
methods:{
    async userinfoData(){
        const res =await this.$http.get('/user/' + localStorage.getItem('id'))
        this.model = res.data[0] 
        // console.log(this.model)
    },
    async afterRead(file){
       const fromdata = new FormData()
       fromdata.append('file',file.file)
       const res = await this.$http.post('/upload',fromdata)
      //  console.log(res)
       this.model.user_img = res.data.url
      this.UserUpdate()
    },
    async UserUpdate() {
        const res = await this.$http.post('/update/' + localStorage.getItem('id'),this.model)
        if(res.data.code == 200){
            this.$msg.fail('修改成功')
        } 
    },
    confirm(){
      this.model.name = this.content
      this.UserUpdate()
    },
    confirs(){
      this.model.user_desc = this.myname
    },
    onSelect(event){
        this.model.gender = event.name
        this.UserUpdate()
        this.gendershow = false
    }
  },
  created() {
      this.userinfoData()
  },
}
</script>

<style>
  .edit a{
    color: #333;
  }
  .myimg{
    width: 100px;
    height: 100px;
  }
  .upload{
    position: relative;
  }
  .uploadImg{
    position: absolute;
    top: 175px;
    left: 800px;
    opacity: 0;
  }
</style>
