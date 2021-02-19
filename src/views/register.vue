<template>
    <div>
        <login-top topMassage = '注册bilibili'>
            <div slot="right" @click="$router.push('/login' )" style="font-size:3.6vw">切换到登录</div>
        </login-top>
        <login-text lable="姓名" 
                    style="margin:4vw 0"
                    placeholder="请输入姓名"
                    rule= '^.{6,16}$'
                    @inputChange="res => model.name = res"
                    ></login-text>
        <login-text lable="账号"
                    placeholder="请输入账号"
                    rule= '^.{6,16}$'
                    @inputChange="res =>  model.username = res"
                    ></login-text>
        <login-text lable="密码"
                    placeholder="请输入密码"
                    rule= '^.{6,16}$'
                    type= "password"
                    @inputChange="res =>  model.password = res"
                    ></login-text>
        <login-btn btntext="注册" @registerSubmit = 'registerSubmit'></login-btn>
        
    </div>
</template>

<script>
import loginTop from '../components/common/loginTop.vue'
import loginText from '../components/common/loginText.vue'
import loginBtn from '../components/common/loginBtn.vue'

export default {
    data(){
        return{
            model:{
                name:'',
                username:'',
                password:''
            }
        }
    },
    components:{
        loginTop,
        loginText,
        loginBtn
    },
    methods:{
        async registerSubmit(){
            let rulg = /^.{6,16}$/
            if(rulg.test(this.model.name) != '' && rulg.test(this.model.username) != '' && rulg.test(this.model.password) != ''){
                // console.log('输入正确')
                const res = await
                this.$http.post('/register',this.model).then(res =>{
                    // console.log(res.data.msg)
                    this.$msg.fail(res.data.msg)
                    console.log(res)
                    localStorage.setItem('id',res.data.id)
                    localStorage.setItem('token',res.data.objtoken)
                    //注册成功之后跳转
                    
                    setTimeout(()=>{
                        this.$router.push('/userinfo')
                    })
                })
            }else{
                this.$msg.fail("error")
            }
        }
    }
}
</script>
<style >
    
</style>