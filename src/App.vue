<script>
    import Vue from 'vue';
    export default Vue.extend({
        mpType: 'app',
        globalData: {
            isRegist: false,
            isReadPrivacy: false,
            openId: '',
            userId: ''
        },
        onLaunch() {

            console.log('App Launch')
            wx.cloud.init({
                env: 'prod-4goeo77t6a540242'
            })
            wx.login({
                success(res) {
                    if (res.code) {
                        //发起网络请求
                        console.log(res.code)
                        getApp().globalData.openId = res.code
                        wx.cloud.callContainer({
                            "config": {
                                "env": "prod-4goeo77t6a540242"
                            },
                            "path": "/api/user/getInfo",
                            "header": {
                                "X-WX-OPENID": res.code,
                                "X-WX-SERVICE": "express-13zt",
                                "content-type": "application/json"
                            },
                            "method": "GET",
                        }).then((res) => {
                            console.log(res)
                            if (res.data.statusCode == 200) {
                                getApp().globalData.isRegist = true
                                getApp().globalData.userId = res.data.data.id
                                console.log(getApp().globalData.isRegist)
                            } else if (
                                res.data.statusCode == 401
                            ) {
                                getApp().globalData.isRegist = false
                            } else {
                                uni.showToast({
                                    title: res.data.message,
                                    icon: 'error',
                                    duration: 2000
                                })
                            }
                        }).catch(() => {
                            uni.showToast({
                                title: res.data.message,
                                icon: '登陆失败',
                                duration: 2000
                            })
                        })
                    } else {
                        uni.showToast({
                            title: res.data.message,
                            icon: '登陆失败',
                            duration: 2000
                        })
                    }
                }
            })

        },
        onShow() {
            console.log('App Show')
        },
        onHide() {
            console.log('App Hide')
        },
    });
</script>

<style>
    /*每个页面公共css */
    html {
        font-size: 16px;
    }
</style>