<template>
    <div class="background">
        <user-top :usermsg='model'></user-top>
        <img src="../assets/bannerTop_new.png" alt="userBackground" class="userback">
        <user-detail :userInfo="model"></user-detail>
        <user-artical></user-artical>
    </div>
</template>  

<script>
import userTop from '../components/common/userTop'
import userDetail from '../components/userComponpents/userDetail'
import UserArtical from '../components/userComponpents/userArtical.vue'
export default {
    data(){
        return{
            model:{}
        }
    },
    components:{
        userTop,
        userDetail,
        UserArtical
    },
    methods:{
        async userinfoData(){
            const res =await this.$http.get('/user/' + localStorage.getItem('id'))
            this.model = res.data[0]
            console.log(this.model)
        }
    },
    created() {
       this.userinfoData()
    }
}
</script>
<style>
    .userback{
        height: 291px;
    }
</style>