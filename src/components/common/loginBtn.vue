<template>
    <div class="btnpad" @click="registerClick">
        <div class="loginbtn">
            {{btntext}}
        </div>
    </div>
</template>

<script>
export default {
    props:['btntext'],
    methods:{
        registerClick(){
            this.$emit('registerSubmit')
        }
    }
}
</script>

<style >
.btnpad{
    padding: 15px 10px;
}
    .loginbtn{
        height: 100px;
        background-color: #ff9db5;
        color: white;
        text-align: center;
        border-radius: 50px;
        font-size: 5vw;
    }
</style>