<template>
    <div class="main">
        <div class="card">
            <div class="top">
                <div class="title">{{ title }}</div>
                <div class="id">#{{ id }}</div>
            </div>
            <div class="PandT">
                <div class="position">{{ position }}</div>
            </div>
            <div class="PandT">
                <div class="position">距你{{ distance }}km</div>
                <div class="time">{{ time }}天前发布</div>
            </div>
            <div class="compAndPrice">
                <div class="compete" v-if="compete == 0">
                    <div class="compete-font-red">竞争激烈</div>
                    <img class="compete-icon" v-for="item in 3" :src="require('@/assets/icon/compete-red.svg')" />
                </div>
                <div class="compete" v-if="compete == 1">
                    <div class="compete-font-yellow">适度竞争</div>
                    <img class="compete-icon" v-for="item in 2" :src="require('@/assets/icon/compete-yellow.svg')" />
                </div>
                <div class="compete" v-if="compete == 2">
                    <div class="compete-font-blue">欢迎投递</div>
                    <img class="compete-icon" :src="require('@/assets/icon/compete-blue.svg')" />
                </div>
                <div class="price">
                    ￥<span style="font-size:24px;">{{ price }}</span>/小时
                </div>
            </div>
            <div class="detail">学生性别：{{ studentGender }}</div>
            <div class="detail">学生年级：{{ studentGrade }}</div>
            <div class="detail">课程类型：{{ classType }}</div>
            <div class="detail">科目：{{ subject }}</div>
            <div class="detail">上课时间：{{ detail }}</div>
            <div class="detail">详情：{{ detail2 }}</div>
        </div>
        <div class="send-button" @click="sendResume">
            <div>投递简历</div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    export default {
        props: {
            propsData: {
                default: () => ({}),
            },
        },
        data() {
            return {
                title: '',
                id: '',
                position: '',
                distance: '',
                time: '',
                detail: '',
                detail2: '相符，诚实守信，纯洁干净的女老师，英语能力突出，掌握好的学习方法，有合理计划教学，能教新概念英语不自私自利倾囊相授。这里放一些特殊的要求以及情况介绍要求老师三观正，内外相符，诚实守信，纯洁干净的女老师，英语能力突出，掌握好的学习方法，有合理计划教学，能教新概念英语不自私自利倾囊相授。这里放一些特殊的要求以及情况介绍要求老师三观正，内外相符，诚实守信，纯洁干净的女老师，英语能力突出，掌握好的学习方法，有合理计划教学，能教新概念英语不自私自利倾囊相授。这里放一些特殊的要求以及情况介绍要求老师三观正，内外相符，诚实守信，纯洁干净的女老师，英语能力突出，掌握好的学习方法，有合理计划教学，能教新概念英语不自私自利倾囊相授。这里放一些特殊的要求以及情况介绍要求老师三观正，内外相符，诚实守信，纯洁干净的女老师，英语能力突出，掌握好的学习方法，有合理计划教学，能教新概念英语不自私自利倾囊相授。这里放一些特殊的要求以及情况介绍要求老师三观正，内外相符，诚实守信，纯洁干净的女老师，英语能力突出，掌握好的学习方法，有合理计划教学，能教新概念英语不自私自利倾囊相授。这里放一些特殊的要求以及情况介绍要求老师三观正，内外相符，诚实守信，纯洁干净的女老师，英语能力突出，掌握好的学习方法，有合理计划教学，能教新概念英语不自私自利倾囊相授。这里放一些特殊的要求以及情况介绍要求老师三观正，内外相符，诚实守信，纯洁干净的女老师，英语能力突出，掌握好的学习方法，有合理计划教学，能教新概念英语不自私自利倾囊相授。这里放一些特殊的要求以及情况介绍要求老师三观正，内外相符，诚实守信，纯洁干净的女老师，英语能力突出，掌握好的学习方法，有合理计划教学，能教新概念英语不自私自利倾囊相授。这里放一些特殊的要求以及情况介绍要求老师三观正，内外相符，诚实守信，纯洁干净的女老师，英语能力突出，掌握好的学习方法，有合理计划教学，能教新概念英语不自私自利倾囊相授。这里放一些特殊的要求以及情况介绍要求老师三观正，内外相符，诚实守信，纯洁干净的女老师，英语能力突出，掌握好的学习方法，有合理计划教学，能教新概念英语不自私自利倾囊相授。这里放一些特殊的要求以及情况介绍要求老师三观正，内外相符，诚实守信，纯洁干净的女老师，英语能力突出，掌握好的学习方法，有合理计划教学，能教新概念英语不自私自利倾囊相授。这里放一些特殊的要求以及情况介绍要求老师三观正，内外相符，诚实守信，纯洁干净的女老师，英语能力突出，掌握好的学习方法，有合理计划教学，能教新概念英语不自私自利倾囊相授。这里放一些特殊的要求以及情况介绍要求老师三观正，内外相符，诚实守信，纯洁干净的女老师，英语能力突出，掌握好的学习方法，有合理计划教学，能教新概念英语不自私自利倾囊相授。这里放一些特殊的要求以及情况介绍要求老师三观正，内外相符，诚实守信，纯洁干净的女老师，英语能力突出，掌握好的学习方法，有合理计划教学，能教新概念英语不自私自利倾囊相授。这里放一些特殊的要求以及情况介绍要求老师三观正，内外相符，诚实守信，纯洁干净的女老师，英语能力突出，掌握好的学习方法，有合理计划教学，能教新概念英语不自私自利倾囊相授。这里放一些特殊的要求以及情况介绍要求老师三观正，内外相符，诚实守信，纯洁干净的女老师，英语能力突出，掌握好的学习方法，有合理计划教学，能教新概念英语不自私自利倾囊相授。这里放一些特殊的要求以及情况介绍要求老师三观正，内外相符，诚实守信，纯洁干净的女老师，英语能力突出，掌握好的学习方法，有合理计划教学，能教新概念英语不自私自利倾囊相授。这里放一些特殊的要求以及情况介绍要求老师三观正，内外相符，诚实守信，纯洁干净的女老师，英语能力突出，掌握好的学习方法，有合理计划教学，能教新概念英语不自私自利倾囊相授。',
                compete: 0,
                price: 0,
                subject: '',
                studentGrade: '',
                classType: '',
                studentGrade: ''
            }
        },
        onLoad(o) {
            this.title = o.title
            this.id = o.id
            this.position = o.position
            this.distance = o.distance
            this.time = o.time
            this.detail = o.detail
            this.detail2 = o.detail2
            this.compete = o.compete
            this.price = o.price
            this.subject = o.subject
            this.studentGrade = o.studentGrade
            this.classType = o.classType
            this.studentGrade = o.studentGrade
        },
        methods: {
            sendResume() {
                let that = this
                console.log(this.compete)
                if (!getApp().globalData.isRegist) {
                    uni.showToast({
                        title: '请先前往个人信息页面注册',
                        icon: 'none',
                        duration: 2000
                    });
                    return
                } else {
                    wx.requestSubscribeMessage({
                        tmplIds: ['yNWENwXi0wvUgoDB78hf376oghIaZU61SgVQYNOBUZs'],
                        success(res) {
                            console.log(res)
                            if (res.yNWENwXi0wvUgoDB78hf376oghIaZU61SgVQYNOBUZs === 'accept') {
                                wx.cloud.callContainer({
                                    "config": {
                                        "env": "prod-4goeo77t6a540242"
                                    },
                                    "path": "/api/order/applyOrder",
                                    "header": {
                                        "X-WX-OPENID": getApp().globalData.openId,
                                        "X-WX-SERVICE": "express-13zt",
                                        "content-type": "application/json"
                                    },
                                    "method": "GET",
                                    "data": {
                                        "orderId": that.id,
                                        "userId": getApp().globalData.userId
                                    }
                                }).then((res) => {
                                    console.log(res)
                                    if (res.statusCode == 200) {
                                        uni.showToast({
                                            title: '投递成功',
                                            icon: 'success',
                                            duration: 2000
                                        });
                                    } else {
                                        uni.showToast({
                                            title: res.data.message,
                                            icon: 'none',
                                            duration: 2000
                                        });
                                    }
                                }).catch((err) => {
                                    console.log(err)
                                })
                            }
                            if (res.yNWENwXi0wvUgoDB78hf376oghIaZU61SgVQYNOBUZs === 'reject') {
                                uni.showToast({
                                    title: '投递失败，请订阅消息推送',
                                    icon: 'none',
                                    duration: 2000
                                });
                            }
                        }
                    })
                }
            }
        }
    };
</script>

<style scoped>
    .main {
        display: flex;
        flex-direction: column;
        height: 100vh;
        width: 100%;
        overflow-y: auto;
        background-color: #F9F9F9;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .card {
        width: 95vw;
        background-color: #ffffff;
        margin-top: 6px;
        border-radius: 16px;
        display: flex;
        align-items: center;
        flex-direction: column;
        padding-bottom: 15px;
    }

    .top {
        width: 90%;
        height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .title {
        height: 28px;
        font-size: 20px;
        font-weight: 500;
        color: #2A2A2A;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: 28px;
    }

    .id {
        height: 28px;
        font-size: 14px;
        font-weight: 300;
        color: #666666;
        line-height: 28px;
    }

    .PandT {
        width: 90%;
        height: 35px;
        display: flex;
    }

    .position {
        width: 145px;
        height: 20px;
        font-size: 14px;
        font-weight: 300;
        color: #666666;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .time {
        margin-left: 12px;
        width: 120px;
        height: 20px;
        font-size: 14px;
        font-weight: 300;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #666666;
    }

    .compAndPrice {
        width: 90%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .compete {
        height: 20px;
        font-size: 14px;
        font-weight: 300;
        display: flex;
        align-items: center;
    }

    .compete-font-red {
        width: 60px;
        height: 20px;
        color: #FF165D;
        line-height: 20px;
    }

    .compete-font-yellow {
        width: 60px;
        height: 20px;
        color: #FF9A00;
        line-height: 20px;
    }

    .compete-font-blue {
        width: 60px;
        height: 20px;
        color: #3EC1D3;
        line-height: 20px;
    }

    .compete-icon {
        width: 16px;
        height: 16px;
        margin-left: 4px;
    }

    .price {
        right: 5%;
        height: 20px;
        font-size: 14px;
        font-weight: 500;
        color: #FF5000;
        line-height: 20px;
    }

    .detail {
        margin-top: 15px;
        height: auto;
        width: 90%;
        font-size: 14px;
        font-weight: 300;
        color: #2A2A2A;
    }

    .send-button {
        margin-top: 12px;
        width: 95%;
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
        margin-bottom: calc(env(safe-area-inset-bottom) + 20px);
    }
</style>