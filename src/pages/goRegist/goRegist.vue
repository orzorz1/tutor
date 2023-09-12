<template>
    <div class="main">
        <img src="../../assets/img/icon.jpg" class="center_img">
        <div class="send-button" @click="goRegist">
            <div>注册</div>
        </div>
        <div class="privacy">请先阅读<p style="display: inline; color:#EEA849; margin-left: 5px;" @click="privacy">隐私政策</p></div>
    </div>
</template>

<script>
    export default {
        components: {
        },
        data() {
            return {
            };
        },
        onLoad(){
            uni.showToast({
                title: '请先注册',
                icon: 'error',
                duration: 2000
            })
        },
        methods: {
            privacy() {
                uni.navigateTo({
                    url: '/pages/privacy/privacy'
                });
            },
            goRegist() {
                let m = getApp().globalData.isReadPrivacy;
                if(m){
                    uni.navigateTo({
							url: '/pages/editInfo/regist'
					})
                }else{
                    uni.showToast({
                        title: '请阅读并同意隐私政策',
                        icon: 'none',
                        duration: 2000
                    })
                }
            },
        },
    };
</script>

<style lang="postcss" scoped>
    .main{
        width: 100vw;
        height: 100vh;
        background-color: #f9f9f9;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .center_img{
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }
    .privacy {
        margin-top: 12px;
        font-size: 14px;
        margin-bottom: 150px;

    }
    .send-button {
        margin-top: 60px;
        width: 50%;
        background: linear-gradient(to right, #F46B45, #EEA849);
        height: 36px;
        min-height: 36px;
        border-radius: 18px;
        font-size: 14px;
        font-weight: 500;
        display: flex;
        color: #ffffff;
        justify-content: center;
        align-items: center;
    }
</style>