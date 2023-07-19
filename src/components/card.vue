<template>
    <div class="card">
        <div class="title">{{ propsData.title }}</div>
        <div class="id">#{{ propsData.id }}</div>
        <div class="position">{{ propsData.position }}&nbsp;&nbsp;距你{{ propsData.distance }}km</div>
        <div class="time">{{ propsData.time }}</div>
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
      </div>
</template>

<script lang="ts">
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
                detail: '每周一次,每周一次，每次两个小时，周五 18:00-20:00',
                compete: 2,
            }
        },
        onLoad() {

        },
        methods: {

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
        width: 138px;
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
</style>