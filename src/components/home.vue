<template>
    <view class="container">
        <div class="top-bar" :style="topBarStyle">
            <div style="display: flex; align-items: center; z-index: 1000;">
                <div class="bar-position" :style="topBarHeight">
                    <img class="position-icon" :src="require('@/assets/icon/position.svg')">
                    <text class="position-font">{{position}}</text>
                </div>
                <input class="bar-search" type="text" placeholder="初中物理" :style="topBarHeight" v-model="searchInput" @focus="inputFocus" @blur="inputBlur" @confirm="confirmSearch">
            </div>
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
                        <div class="sort-font" :style="{ color: isScreen ? '#ED8E45' : '#666666' }">筛选</div>
                        <img v-if="isScreen" class="screen-icon" :src="require('@/assets/icon/screen-act.svg')">
                        <img v-else class="screen-icon" :src="require('@/assets/icon/screen.svg')">
                    </div>
                </div>
            </div>
        </div>
        <div class="cards" :style="cardsStyle" @scroll="scroll">
            <scroll-view class="scroll_cards" :style="cardsStyle" scroll-y="true" @scrolltolower="loadNew">
                <Card v-for="item in cards" :propsData="item" />
                <div class="block"></div>
            </scroll-view>
        </div>
    </view>
</template>

<script>
    import Card from '@/components/card.vue';
    import geocoder from '@/libs/geocoder';

    export default {
        components: {
            Card,
        },
        props: {
            loadMore: {
                default: false,
                type: Boolean,
            }
        },
        watch: {
            loadMore(to) {
                console.log(1)
                if (this.tabIdx == 1 && to) {
                    if (!this.loading) {
                        this.loading = true
                        // loadmore here
                        getAllWorks({
                            contestId: this.globalData.contestId,
                            pageNum: this.pageNum,
                            pageSize: this.pageSize,
                        }).then(v => {
                            // console.log(v)
                            if (!v.code) {
                                this.dataList = this.dataList.concat(v.data)
                                v.data.forEach(ele => {
                                    this.replaceBlob(ele, ['coverFile'])
                                });
                                this.pageNum++;
                            }
                            this.loading = false
                        })
                    }
                }
            },
            contestId(to) {
                // alert('contestId改变'+to)
                // 初始化
                this.pageNum = 1
                this.loading = false
                if (to !== -1) {
                    // alert('page2 reload'+this.globalData.contestId)
                    this.loading = true
                    getAllWorks({
                        contestId: this.globalData.contestId,
                        pageNum: this.pageNum,
                        pageSize: this.pageSize,
                    }).then(v => {
                        // console.log(v)
                        if (!v.code) {
                            this.dataList = v.data
                            v.data.forEach(ele => {
                                this.replaceBlob(ele, ['coverFile'])
                            });
                            this.pageNum++;
                        }
                        this.loading = false
                    })
                }
            },
        },
        data() {
            return {
                searchInput: '',
                searching: false,
                byEnd: false,
                menuButton: {},
                windowHeight: 0,
                position: '',
                sortord: 0, //0:综合排序 1:距离升序 2:距离降序 3:薪资升序 4:薪资降序 5:竞争升序 6:竞争降序 7:时间升序 8:时间降序
                isScreen: false,
                screenData: {},
                pageNum: 1,
                totalNum: 1,
                longitude: 0,
                latitude: 0,
                cards: []
            };

        },
        props: ['screen'],
        computed: {
            screenBarStyle() {
                return `top: ${this.menuButton.bottom}px;`
            },
            topStyle() {
                return `height: ${this.menuButton.bottom + 29}px;`
            },
            cardsStyle() {
                return `top: ${this.menuButton.bottom + 51}px; height: ${this.windowHeight.windowHeight - this.menuButton.bottom - 106}px;`

            },
            topBarStyle() {
                return `height: ${this.menuButton.height}px; 
                top: ${this.menuButton.top}px; 
                left: ${uni.getSystemInfoSync().windowWidth - this.menuButton.right}px;
                width: ${this.menuButton.left - uni.getSystemInfoSync().windowWidth + this.menuButton.right}px;`
            },
            topBarHeight() {
                return `height: ${this.menuButton.height}px; z-index: 1000;`
            }
        },

        mounted() {
            this.menuButton = uni.getMenuButtonBoundingClientRect();
            this.windowHeight = uni.getSystemInfoSync();

        },
        onReady() {
            this.cards = []
            const that = this;
            this.getLocationAndLoad()
        },

        methods: {
            inputFocus(){
                this.searching = false
            },
            inputBlur(){
                if(!this.searching){
                    this.pageNum = 1,
                    this.searchInput = ''
                    this.getLocationAndLoad()
                }
            },
            confirmSearch() {
                this.pageNum = 1,
                this.searching = true
                this.cards = []
                this.getLocationAndLoad()
            },
            getLocationAndLoad() {
                this.cards = []
                const that = this;
                this.pageNum = 1,
                    uni.getLocation({
                        type: 'wgs84',
                        success: function (res) {
                            console.log(res)
                            console.log('当前位置的经度：' + res.longitude);
                            console.log('当前位置的纬度：' + res.latitude);
                            this.longitude = res.longitude
                            this.latitude = res.latitude
                            geocoder(res.latitude, res.longitude).then(res => {
                                console.log(res); // 地址
                                console.log(res.address_component.city); // 市
                                if (res.address_component.city) {
                                    that.position = res.address_component.city;
                                    that.loadNew()
                                } else {
                                    that.position = "获取失败"
                                }
                            }).catch(err => {
                                // handle error
                                console.log(err);
                                that.position = "获取失败"
                            });
                            that.latitude = res.latitude;
                            that.longitude = res.longitude;
                        },
                        fail: function (err) {
                            console.log(err)
                        }
                    });
            },
            loadNew() {
                let that = this
                let sortType = 0;
                if (this.sortord === 3) {
                    sortType = 1
                } else if (this.sortord === 4) {
                    sortType = 2
                } else if (this.sortord === 1) {
                    sortType = 3
                } else if (this.sortord === 2) {
                    sortType = 4
                } else {
                    sortType = this.sortord
                }
                let screenSubject = this.screenData.subject ? Array.from(this.screenData.subject) : []
                let screenGrade = this.screenData.studentGrade ? Array.from(this.screenData.studentGrade) : []
                console.log('loadNew', {
                    "latitude": this.latitude,
                    "longitude": this.longitude,
                    "city": this.position,
                    "rankType": sortType,
                    "feeRange": this.screenData.wage,
                    "classType": this.screenData.type,
                    "distance": parseInt(this.screenData.distance),
                    "subject": screenSubject,
                    "studentGrade": screenGrade,
                    "detail": this.searchInput
                })
                console.log(this.totalNum, this.pageNum)
                if (this.totalNum >= this.pageNum) {
                    wx.cloud.callContainer({
                        "config": {
                            "env": "prod-4goeo77t6a540242"
                        },
                        "path": "/api/order/list/" + this.pageNum + "/10",
                        "header": {
                            "X-WX-SERVICE": "express-13zt",
                            "content-type": "application/json"
                        },
                        "method": "POST",
                        "data": {
                            "latitude": this.latitude,
                            "longitude": this.longitude,
                            "city": this.position,
                            "rankType": sortType,
                            "feeRange": this.screenData.wage,
                            "classType": this.screenData.type,
                            "distance": parseInt(this.screenData.distance),
                            "subject": screenSubject,
                            "studentGrade": screenGrade,
                            "detail": this.searchInput
                        }
                    }).then((res) => {
                        console.log(res)
                        this.totalNum = res.data.data.totalNum == 0 ? 1 : res.data.data.totalNum
                        this.pageNum++
                        let len = res.data.data.data.length
                        for (let i = 0; i < len; i++) {
                            let item = res.data.data.data[i]
                            let previousDate = new Date(item.createTime);
                            let currentDate = new Date();
                            let diff = currentDate - previousDate;
                            let days = Math.floor(diff / (1000 * 60 * 60 * 24));
                            let compete = 0
                            console.log(item.relationCount)
                            if (item.relationCount <= 3) {
                                compete = 2
                            } else if (item.relationCount <= 5) {
                                compete = 1
                            } else {
                                compete = 0
                            }
                            const subjects = ["语文", "数学", "英语", "物理", "化学", "生物", "政治", "历史", "地理", "技术", "素质及其他"];
                            let subject = Array.from(item.subject).map(i => subjects[parseInt(i)]).join('、');
                            let genderMap = { "0": "男", "1": "女" };
                            let typeMap = { "0": "长期", "1": "短期" };
                            let gradeMap = {
                                '0': '小学低年级',
                                '1': '小学高年级',
                                '2': '初中',
                                '3': '高中',
                                '4': '成人',
                                '5': '其他',
                            }
                            let title = gradeMap[item.studentGrade] + subject + "·" + typeMap[item.classType] + "辅导"
                            this.cards.push({
                                title: title,
                                id: item.id,
                                position: item.address,
                                distance: (item.distance / 1000).toFixed(1),
                                time: days,
                                detail: item.classDuration,
                                detail2: item.detail,
                                compete: compete,
                                price: item.fee,
                                subject: subject,
                                studentGender: genderMap[item.studentGender],
                                classType: typeMap[item.classType],
                                studentGrade: gradeMap[item.studentGrade],
                                orderProfit: item.orderProfit
                            })
                        }
                    })
                }
            },
            changeSortord(a) {
                this.cards = []
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
                this.pageNum = 1,
                this.loadNew()
            },
            showScreen() {
                this.$emit('showScreen');
                this.isScreen = false;
                this.screenData = { 'distance': 999999, "subject": '', "type": null, "studentGrade": '', 'wage': '' };
                this.getLocationAndLoad()

            },
            goScreen(data, city, latitude, longitude) {
                this.cards = []
                this.isScreen = true;
                this.screenData.data = data
                if (data.distance[0]) {
                    this.screenData.distance = 999999;
                } else if (data.distance[1]) {
                    this.screenData.distance = 1000;
                } else if (data.distance[2]) {
                    this.screenData.distance = 2000;
                }
                if (data.type[0]) {
                    this.screenData.type = null;
                } else if (data.type[1]) {
                    this.screenData.type = '0';
                } else if (data.type[2]) {
                    this.screenData.type = '1';
                }

                this.screenData.wage = data.wage.reduce((acc, value, index) => {
                    if (value && index !== 0) {
                        acc.push((index - 1).toString());
                    }
                    return acc;
                }, []).join(',');

                if (data.wage[0] && this.screenData.wage === '') {
                    this.screenData.wage = '';
                }
                this.screenData.studentGrade = data.grade.reduce((acc, value, index) => {
                    if (value && index !== 0) {
                        acc.add((index - 1).toString());
                    }
                    return acc;
                }, new Set());
                this.screenData.subject = data.subject.reduce((acc, value, index) => {
                    if (value && index !== 0) {
                        acc.add((index - 1).toString());
                    }
                    return acc;
                }, new Set());
                this.position = city
                this.latitude = latitude
                this.longitude = longitude
                console.log(this.screenData)
                this.pageNum = 1,
                    this.loadNew()
            }
        },
    };
</script>

<style lang="postcss" scoped>
    .container {
        display: flex;
        flex-direction: column;
        height: 100vh;
        background-color: #f9f9f9;
        overflow: hidden;
    }

    /* .top{
        background-color: #f9f9f9;
        display: fixed;
        z-index: 999;
    } */
    .top-bar {
        position: fixed;
        z-index: 1001;
    }

    .bar-position {
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
    }

    .position-icon {
        width: 24px;
        height: 24px;
        z-index: 1000;
    }

    .position-font {
        font-size: 16px;
        margin-left: 4px;
        z-index: 1000;
    }

    .bar-search {
        height: 100%;
        flex: 1;
        min-width: 90px;
        border-radius: 16px;
        border: 1px solid #EAE8E8;
        margin-left: 16px;
        margin-right: 16px;
        padding-left: 16px;
        padding-right: 16px;
        z-index: 1001;
    }

    .screen-bar {
        position: fixed;
        height: 29px;
        width: 100%;
        padding-top: 19px;
        /* padding-left: 20px;
        padding-right: 20px; */
        border-bottom: 1px solid #EAE8E8;
        background-color: #f9f9f9;
        z-index: 1000;
    }

    .screen {
        height: 22px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #f9f9f9;
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
        width: 97.5%;
        margin-left: 2.5%;
        position: fixed;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #f9f9f9;
        padding-bottom: env(safe-area-inset-bottom);
    }

    .block {
        height: 0px;
        margin-top: 5px;
        width: 351px;
        background-color: #f9f9f9;
        height: env(safe-area-inset-bottom);
    }
</style>