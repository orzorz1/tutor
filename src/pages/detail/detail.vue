<template>
    <div class="main">
        <div class="card">
            <div class="top">            
                <div class="title">{{ title }}</div>
                <div class="id">#{{ id }}</div>
            </div>
            <div class="PandT">
                <div class="position">{{ position }}&nbsp;&nbsp;距你{{ distance }}km</div>
                <div class="time">{{ time }}</div>
            </div>
            <div class="compAndPrice">
                <div class="compete" v-if="compete === 0">
                    <div class="compete-font-red">竞争激烈</div>
                    <img class="compete-icon" v-for="item in 3" :src="require('@/assets/icon/compete-red.svg')" />
                </div>
                <div class="compete" v-if="compete === 1">
                    <div class="compete-font-yellow">适度竞争</div>
                    <img class="compete-icon" v-for="item in 2" :src="require('@/assets/icon/compete-yellow.svg')" />
                </div>
                <div class="compete" v-if="compete === 2">
                    <div class="compete-font-blue">欢迎投递</div>
                    <img class="compete-icon" :src="require('@/assets/icon/compete-blue.svg')" />
                </div>
                <div class="price">
                    ￥<span style="font-size:24px;">{{ price }}</span>/小时
                </div>
            </div>
            <div class="detail">上课时间：{{ classTime }}</div>
            <div class="detail">详情：{{ detail }}</div>
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
                title: '初中语文·长期辅导',
                id: '123456',
                position: '津南区',
                distance: '12222',
                time: '两天前发布',
                classTime: '每周一次，每次两个小时，周六17:00-19:00大约的时间，现在，暑假，开学后都按照这个时间。',
                detail: '这里放一些特殊的要求以及情况介绍要求老师三观正，内外相符，诚实守信，纯洁干净的女老师，英语能力突出，掌握好的学习方法，有合理计划教学，能教新概念英语不自私自利倾囊相授。这里放一些特殊的要求以及情况介绍要求老师三观正，内外相符，诚实守信，纯洁干净的女老师，英语能力突出，掌握好的学习方法，有合理计划教学，能教新概念英语不自私自利倾囊相授。这里放一些特殊的要求以及情况介绍要求老师三观正，内外相符，诚实守信，纯洁干净的女老师，英语能力突出，掌握好的学习方法，有合理计划教学，能教新概念英语不自私自利倾囊相授。这里放一些特殊的要求以及情况介绍要求老师三观正，内外相符，诚实守信，纯洁干净的女老师，英语能力突出，掌握好的学习方法，有合理计划教学，能教新概念英语不自私自利倾囊相授。这里放一些特殊的要求以及情况介绍要求老师三观正，内外相符，诚实守信，纯洁干净的女老师，英语能力突出，掌握好的学习方法，有合理计划教学，能教新概念英语不自私自利倾囊相授。这里放一些特殊的要求以及情况介绍要求老师三观正，内外相符，诚实守信，纯洁干净的女老师，英语能力突出，掌握好的学习方法，有合理计划教学，能教新概念英语不自私自利倾囊相授。这里放一些特殊的要求以及情况介绍要求老师三观正，内外相符，诚实守信，纯洁干净的女老师，英语能力突出，掌握好的学习方法，有合理计划教学，能教新概念英语不自私自利倾囊相授。这里放一些特殊的要求以及情况介绍要求老师三观正，内外相符，诚实守信，纯洁干净的女老师，英语能力突出，掌握好的学习方法，有合理计划教学，能教新概念英语不自私自利倾囊相授。这里放一些特殊的要求以及情况介绍要求老师三观正，内外相符，诚实守信，纯洁干净的女老师，英语能力突出，掌握好的学习方法，有合理计划教学，能教新概念英语不自私自利倾囊相授。这里放一些特殊的要求以及情况介绍要求老师三观正，内外相符，诚实守信，纯洁干净的女老师，英语能力突出，掌握好的学习方法，有合理计划教学，能教新概念英语不自私自利倾囊相授。这里放一些特殊的要求以及情况介绍要求老师三观正，内外相符，诚实守信，纯洁干净的女老师，英语能力突出，掌握好的学习方法，有合理计划教学，能教新概念英语不自私自利倾囊相授。这里放一些特殊的要求以及情况介绍要求老师三观正，内外相符，诚实守信，纯洁干净的女老师，英语能力突出，掌握好的学习方法，有合理计划教学，能教新概念英语不自私自利倾囊相授。这里放一些特殊的要求以及情况介绍要求老师三观正，内外相符，诚实守信，纯洁干净的女老师，英语能力突出，掌握好的学习方法，有合理计划教学，能教新概念英语不自私自利倾囊相授。这里放一些特殊的要求以及情况介绍要求老师三观正，内外相符，诚实守信，纯洁干净的女老师，英语能力突出，掌握好的学习方法，有合理计划教学，能教新概念英语不自私自利倾囊相授。这里放一些特殊的要求以及情况介绍要求老师三观正，内外相符，诚实守信，纯洁干净的女老师，英语能力突出，掌握好的学习方法，有合理计划教学，能教新概念英语不自私自利倾囊相授。这里放一些特殊的要求以及情况介绍要求老师三观正，内外相符，诚实守信，纯洁干净的女老师，英语能力突出，掌握好的学习方法，有合理计划教学，能教新概念英语不自私自利倾囊相授。这里放一些特殊的要求以及情况介绍要求老师三观正，内外相符，诚实守信，纯洁干净的女老师，英语能力突出，掌握好的学习方法，有合理计划教学，能教新概念英语不自私自利倾囊相授。这里放一些特殊的要求以及情况介绍要求老师三观正，内外相符，诚实守信，纯洁干净的女老师，英语能力突出，掌握好的学习方法，有合理计划教学，能教新概念英语不自私自利倾囊相授。这里放一些特殊的要求以及情况介绍要求老师三观正，内外相符，诚实守信，纯洁干净的女老师，英语能力突出，掌握好的学习方法，有合理计划教学，能教新概念英语不自私自利倾囊相授。',
                compete: 2,
                price: 100,
            }
        },
        onLoad() {
            let pages = getCurrentPages();
            let page = pages[pages.length - 1].$page.fullPath;  //完整路由地址
            this.id = page.split('id=')[1]  //携带的type参数
        },
        methods: {
            sendResume(){
                uni.showToast({
                    title: '投递成功',
                    icon: 'success',
                    duration: 2000
                });
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
    .top{
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

    .PandT{
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

    .compAndPrice{
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
    .price{
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

    .send-button{
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