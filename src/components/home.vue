<template>
    <view class="container">
        <div class="top-bar" :style="topBarStyle">
            <div class="bar-position">
                <img class="position-icon" :src="require('@/assets/icon/position.svg')">
                <text class="position-font">{{position}}</text>
            </div>
            <input class="bar-search" type="text" placeholder="初中物理">
        </div>
        <div class="screen-bar" :style="screenBarStyle">
            <div class="screen">
                <div class="sort-item" @click="changeSortord(0)">
                    <div class="sort-font" :style="{ color: sortord === 0 ? '#ED8E45' : '#666666' }">综合</div>
                </div>
                <div class="sort-item" @click="changeSortord(1)">
                    <div class="sort-in">
                        <div class="sort-font"
                            :style="{ color: sortord === 1 || sortord === 2 ? '#ED8E45' : '#666666' }">距离</div>
                        <img v-if="sortord===1" class="sort-icon" :src="require('@/assets/icon/sort-act.svg')">
                        <img v-else-if="sortord===2" class="sort-icon" :src="require('@/assets/icon/sort-act.svg')"
                            style=" transform: rotate(180deg) ">
                        <img v-else class="sort-icon" :src="require('@/assets/icon/sort.svg')">
                    </div>
                </div>
                <div class="sort-item" @click="changeSortord(2)">
                    <div class="sort-in">
                        <div class="sort-font"
                            :style="{ color: sortord === 3 || sortord === 4 ? '#ED8E45' : '#666666' }">薪资</div>
                        <img v-if="sortord===3" class="sort-icon" :src="require('@/assets/icon/sort-act.svg')">
                        <img v-else-if="sortord===4" class="sort-icon" :src="require('@/assets/icon/sort-act.svg')"
                            style=" transform: rotate(180deg) ">
                        <img v-else class="sort-icon" :src="require('@/assets/icon/sort.svg')">
                    </div>
                </div>
                <div class="sort-item" @click="changeSortord(3)">
                    <div class="sort-in">
                        <div class="sort-font"
                            :style="{ color: sortord === 5 || sortord === 6 ? '#ED8E45' : '#666666' }">竞争</div>
                        <img v-if="sortord===5" class="sort-icon" :src="require('@/assets/icon/sort-act.svg')">
                        <img v-else-if="sortord===6" class="sort-icon" :src="require('@/assets/icon/sort-act.svg')"
                            style=" transform: rotate(180deg) ">
                        <img v-else class="sort-icon" :src="require('@/assets/icon/sort.svg')">
                    </div>
                </div>
                <div class="sort-item" @click="changeSortord(4)">
                    <div class="sort-in">
                        <div class="sort-font"
                            :style="{ color: sortord === 7 || sortord === 8 ? '#ED8E45' : '#666666' }">时间</div>
                        <img v-if="sortord===7" class="sort-icon" :src="require('@/assets/icon/sort-act.svg')">
                        <img v-else-if="sortord===8" class="sort-icon" :src="require('@/assets/icon/sort-act.svg')"
                            style=" transform: rotate(180deg) ">
                        <img v-else class="sort-icon" :src="require('@/assets/icon/sort.svg')">
                    </div>
                </div>
                <div class="separator"></div>
                <div class="sort-item" @click="showScreen">
                    <div class="sort-in">
                        <div class="sort-font" :style="{ color: screen ? '#ED8E45' : '#666666' }">筛选</div>
                        <img v-if="screen" class="screen-icon" :src="require('@/assets/icon/screen-act.svg')">
                        <img v-else class="screen-icon" :src="require('@/assets/icon/screen.svg')">
                    </div>
                </div>
            </div>
        </div>
        <div class="cards">
            <Card v-for="item in cards" :propsData="item"/>
            <div class="block"></div>
        </div>
    </view>
</template>

<script>
    import Card from '@/components/card.vue';
    export default {
        components: {
            Card,
        },
        data() {
            return {
                menuButton: {},
                position: '天津',
                sortord: 0, //0:综合排序 1:距离升序 2:距离降序 3:薪资升序 4:薪资降序 5:竞争升序 6:竞争降序 7:时间升序 8:时间降序
                screen: false,
                cards: [{
                    title: '初中语文·长期辅导',
                    id: '123456',
                    position: '津南区',
                    distance: '12222',
                    time: '两天前发布',
                    detail: '每周一次,每周一次，每次两个小时，周五 18:00-20:00',
                    compete: 2,
                },{
                    title: '研究生数学·长期辅导',
                    id: '1',
                    position: '和平区',
                    distance: '1',
                    time: '1盎司附近爱上了解放和卢卡斯天前发布',
                    detail: '每周一次,每周99999次，每次1000987249879个小时，周五 18:00-20:00',
                    compete: 1,
                }]
            };

        },
        props: ['screen'],
        computed: {
            screenBarStyle() {
                return `top: ${this.menuButton.bottom}px;`
            },
            topBarStyle() {
                return `height: ${this.menuButton.height}px; 
                top: ${this.menuButton.top}px; 
                left: ${uni.getSystemInfoSync().windowWidth - this.menuButton.right}px;
                width: ${this.menuButton.left - uni.getSystemInfoSync().windowWidth + this.menuButton.right}px;`
            },
        },

        mounted() {
            this.menuButton = uni.getMenuButtonBoundingClientRect();
            console.log(this.topBarStyle)

        },

        methods: {
            changeSortord(a) {
                if (a === 0) {
                    this.sortord = 0
                } else if (a === 1 && this.sortord != 1 && this.sortord != 2) {
                    this.sortord = 1
                } else if (a === 1 && this.sortord === 1) {
                    this.sortord = 2
                } else if (a === 1 && this.sortord === 2) {
                    this.sortord = 1
                } else if (a === 2 && this.sortord != 3 && this.sortord != 4) {
                    this.sortord = 3
                } else if (a === 2 && this.sortord === 3) {
                    this.sortord = 4
                } else if (a === 2 && this.sortord === 4) {
                    this.sortord = 3
                } else if (a === 3 && this.sortord != 5 && this.sortord != 6) {
                    this.sortord = 5
                } else if (a === 3 && this.sortord === 5) {
                    this.sortord = 6
                } else if (a === 3 && this.sortord === 6) {
                    this.sortord = 5
                } else if (a === 4 && this.sortord != 7 && this.sortord != 8) {
                    this.sortord = 7
                } else if (a === 4 && this.sortord === 7) {
                    this.sortord = 8
                } else if (a === 4 && this.sortord === 8) {
                    this.sortord = 7
                }
            },
            showScreen() {
                this.$emit('showScreen');
            }
        },
    };
</script>

<style lang="postcss" scoped>
    .container {
        display: flex;
        flex-direction: column;
        height: 100%;
        background-color: #f9f9f9;
    }

    .top-bar {
        position: absolute;
        display: flex;
        align-items: center;
    }

    .bar-position {
        display: flex;
        align-items: center;
        width: 60px;
        justify-content: center;
    }

    .position-icon {
        width: 24px;
        height: 24px;
    }

    .position-font {
        font-size: 16px;
        margin-left: 4px;
    }

    .bar-search {
        height: 100%;
        flex: 1;
        border-radius: 16px;
        border: 1px solid #EAE8E8;
        margin-left: 16px;
        margin-right: 16px;
        padding-left: 16px;
        padding-right: 16px;
    }

    .screen-bar {
        position: absolute;
        height: 29px;
        width: 100%;
        padding-top: 19px;
        /* padding-left: 20px;
        padding-right: 20px; */
        border-bottom: 1px solid #EAE8E8;
    }

    .screen {
        height: 22px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .sort-item {
        flex: 1;
        display: flex;
        align-items: center;
        Justify-content: center;
        text-align: center;

    }

    .sort-font {
        font-size: 14px;
    }

    .sort-in {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .sort-icon {
        height: 12px;
        width: 12px;
    }

    .screen-icon {
        height: 16px;
        width: 16px;
    }

    .separator {
        width: 2px;
        height: 50%;
        border-left: 2px solid #D9D9D9;
    }

    .cards {
        width: 100%;
        height: 652px;
        position: absolute;
        top: 139px;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow-y: scroll;
        background-color: #f9f9f9;
    }

    .block {
        height: 0px;
        margin-top: 12px;
        width: 351px;
        background-color: #f9f9f9;
    }
</style>