<template>
    <div class="container">
        <div class="avatar">
            <img :src="require('@/assets/icon/camera.svg')" class="update-icon">
        </div>
        <div class="card">
            <div class="title"><div>基本信息</div></div>
            <div class="input-item">
                <p class="input-font">姓名</p>
                <input placeholder="请输入姓名" v-model="name">
            </div>
            <div class="input-item">
                <p class="input-font">性别</p>
                <radio-group :value="gender" @change="genderChange">
                    <radio :value="'male'">男</radio>
                    <radio :value="'female'">女</radio>
                </radio-group>
            </div>
            <div class="input-item">
                <p class="input-font">手机号</p>
                <input placeholder="请输入手机号" v-model="phone">
            </div>
            <div class="input-item">
                <p class="input-font">高考分数</p>
                <input placeholder="请输入高考分数" v-model="score">
            </div>
            <div class="input-item">
                <p class="input-font">学校</p>
                <input placeholder="请输入学校" v-model="school">
            </div>
            <div class="input-item">
                <p class="input-font">专业</p>
                <input placeholder="请输入专业" v-model="major">
            </div>
            <div class="input-item">
                <p class="input-font">年级</p>
                <input placeholder="请输入年级" v-model="grade">
            </div>
            <div class="input-item">
                <p class="input-font">教授科目</p>
                <input placeholder="请输入年级" v-model="subject">
            </div>
            <div class="input-item">
                <p class="input-font">个人简述</p>
                <input placeholder="请输入个人简述" type="text" v-model="profile">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components: {

        },
        data() {
            return {
                name: 'a',
                gender:"male"
            };
        },
        methods: {
            genderChange(e){
                this.gender = e.detail.value;
                console.log(this.gender)
            }
        },
    };
</script>

<style scoped> 
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100vh;
        background-color: #f9f9f9;
    }

    .avatar {
        margin-top: 20px;
        width: 86px;
        height: 86px;
        border-radius: 50%;
        background-color: #000000;
        opacity:0.5;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .update-icon{
        width: 24px;
        height: 24px;
    }
    
    .card{
        margin-top: 20px;
        width: 95%;
        background-color: #FFFFFF;
        border-radius: 16px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .title{
        width: 90%;
        margin-top: 10px;
        font-size: 16px;
        font-weight: 500;
        color: #2A2A2A;
    }
    .input-item{
        width: 90%;
        margin-top: 10px;
        display: flex;
    }
    .input-font{
        font-size: 14px;
        font-weight: 500;
        color: #666666;
        margin-right: 15px;
    }
    .input-item input{
        flex: 1;
        border-bottom: #D9D9D9 1px solid;
    }


</style>