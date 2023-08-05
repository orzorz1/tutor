<template>
    <div class="card" @click="goDetail()">
        <div class="title">{{ propsData.title }}</div>
        <div class="id">#{{ propsData.id }}</div>
        <div class="position">{{ propsData.position }}&nbsp;&nbsp;距你{{ propsData.distance }}km&nbsp;&nbsp;{{ propsData.time }}天前发布</div>
        <!-- <div class="time">{{ propsData.time }}天前发布</div> -->
        <div class="detail">上课时间：{{ propsData.detail }}</div>
        <div class="compete" v-if="propsData.compete === 0">
            <div class="compete-font-red">竞争激烈</div>
            <img class="compete-icon" v-for="item in 3" :src="require('@/assets/icon/compete-red.svg')" />
        </div>
        <div class="compete" v-if="propsData.compete === 1">
            <div class="compete-font-yellow">适度竞争</div>
            <img class="compete-icon" v-for="item in 2" :src="require('@/assets/icon/compete-yellow.svg')" />
        </div>
        <div class="compete" v-if="propsData.compete === 2">
            <div class="compete-font-blue">欢迎投递</div>
            <img class="compete-icon" :src="require('@/assets/icon/compete-blue.svg')" />
        </div>
        <div class="price">
            ￥<span style="font-size:24px;">{{ propsData.price }}</span>/小时
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

            }
        },
        methods: {
            goDetail() {
                uni.navigateTo({
                    url: `/pages/detail/detail?id=${this.propsData.id}&position=${this.propsData.position}&title=${this.propsData.title}&distance=${this.propsData.distance}&time=${this.propsData.time}&detail=${this.propsData.detail}&detail2=${this.propsData.detail2}&compete=${this.propsData.compete}&price=${this.propsData.price}&subject=${this.propsData.subject}&studentGrade=${this.propsData.studentGrade}&classType=${this.propsData.classType}&studentGrade=${this.propsData.studentGrade}`
                })
            }
        }
    };
</script>

<style scoped>
    .card {
        height: 150px;
        width: 95vw;
        background-color: #ffffff;
        margin-top: 6px;
        border-radius: 16px;
        position: relative;
    }

    .title {
        position: absolute;
        top: 16px;
        left: 5%;
        width: 250px;
        height: 22px;
        font-size: 16px;
        font-weight: 500;
        color: #2A2A2A;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .id {
        position: absolute;
        top: 17px;
        right: 5%;
        width: 59px;
        height: 20px;
        font-size: 14px;
        font-weight: 300;
        color: #666666;
    }

    .position {
        position: absolute;
        top: 48px;
        left: 5%;
        width: 90%;
        height: 20px;
        font-size: 14px;
        font-weight: 300;
        color: #666666;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .time {
        position: absolute;
        top: 48px;
        left: 170px;
        width: 120px;
        height: 20px;
        font-size: 14px;
        font-weight: 300;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #666666;
    }

    .detail {
        position: absolute;
        top: 72px;
        left: 5%;
        width: 90%;
        height: 20px;
        font-size: 14px;
        font-weight: 300;
        color: #666666;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .compete {
        position: absolute;
        top: 109px;
        left: 5%;
        width: 140px;
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
        position: absolute;
        top: 109px;
        right: 5%;
        height: 20px;
        font-size: 14px;
        font-weight: 500;
        color: #FF5000;
        line-height: 20px;
    }
</style>