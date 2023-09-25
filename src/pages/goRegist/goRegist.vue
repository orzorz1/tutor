<template>
    <div class="main">
        <img src="../../assets/img/icon.jpg" class="center_img">
        <div class="text">为了为您提供更好的服务，请先注册</div>
        <div class="send-button" @click="goRegist">
            <div>注册</div>
        </div>
        <div class="privacy">请先阅读<p style="display: inline; color:#EEA849; margin-left: 5px;" @click="privacy">隐私政策</p>
        </div>
        <!-- 微信隐私弹窗 -->
        <div class="mask" v-if="innerShow"></div>
        <view v-if="innerShow" class="pop_main" :style="viewStyle">
            <view>
                <text class=pop_font_title>{{ title }}</text>
            </view>
            <view class="pop_content">
                <view>{{ desc1 }} <p style="color:blue; display: inline;" @click="openPrivacyContract">{{ urlTitle }}
                    </p>。</view>

                <view>{{ desc2 }}</view>
            </view>
            <view class="pop_bottom">
                <button @click="handleDisagree">不同意并退出</button>
                <button @click="handleAgree">同意并继续</button>
            </view>
        </view>
    </div>
</template>

<script>
export default {
    components: {
    },
    data() {
        return {
            title: "用户隐私保护提示",
            desc1: "感谢您使用轻松选单小程序，您使用本小程序前应当阅井同意",
            urlTitle: "《用户隐私保护指引》",
            desc2: "当您点击同意并开始时用产品服务时，即表示你已理解并同息该条款内容，该条款将对您产生法律约束力。如您拒绝，将无法进入小程序。",
            innerShow: false,
            height: 0,
        };
    },
    computed: {
    },
    onLoad() {
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
            if (m) {
                uni.getPrivacySetting({
                    success: res => {
                        console.log("是否需要授权：", res.needAuthorization, "隐私协议的名称为：", res.privacyContractName);
                        if (res.needAuthorization) {
                            this.popUp();
                        } else {
                            uni.navigateTo({
                                url: '/pages/editInfo/regist'
                            })
                        }
                    },
                    fail: () => { },
                    complete: () => { },
                });
            } else {
                uni.showToast({
                    title: '请阅读并同意隐私政策',
                    icon: 'none',
                    duration: 2000
                })
            }
        },
        // 隐私弹窗
        handleDisagree(e) {
            uni.navigateTo({
                url: '/pages/homepage/homepage'
            })
            this.disPopUp();
        },
        handleAgree(e) {
            uni.getClipboardData({
                success(res) {
                    console.log("getClipboardData success", res);
                },
                fail(res) {
                    console.log("getClipboardData fail", res);
                },
            });
            uni.navigateTo({
                url: '/pages/editInfo/regist'
            })
            this.disPopUp();
        },
        popUp() {
            this.innerShow = true;
        },
        disPopUp() {
            this.innerShow = false;
        },
        openPrivacyContract() {
            uni.openPrivacyContract({
                success: res => {
                    console.log('openPrivacyContract success');
                },
                fail: res => {
                    console.error('openPrivacyContract fail', res);
                },
            });
        },
    },
};
</script>

<style lang="postcss" scoped>
.main {
    width: 100vw;
    height: 100vh;
    background-color: #f9f9f9;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.center_img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
}

.privacy {
    margin-top: 12px;
    font-size: 14px;
    margin-bottom: 150px;

}
.text{
    margin-top: 50px;
    font-size: 14px;
}
.send-button {
    margin-top: 10px;
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

.mask {
    position: fixed;
    bottom: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.5);
    pointer-events: none;
}

.pop_main {
    width: 95vw;
    background-color: #f9f9f9;
    box-shadow: 0px -2px 5px rgba(0, 0, 0, 0.1);
    position: fixed;
    z-index: 1000;
    bottom: 0;
    padding-bottom: env(safe-area-inset-bottom);
    display: flex;
    flex-direction: column;
    padding-left: 2.5vw;
    padding-right: 2.5vw;
    padding-top: 2vh;
}

.pop_font_title {
    font-size: 16px;
}

.pop_content {
    margin-top: 1vh;
    font-size: 14px;
    color: #999999;
}

.pop_bottom {
    margin-top: 2vh;
    flex: 1;
    display: flex;
}

.pop_bottom button {
    width: 40vw;
}
</style>