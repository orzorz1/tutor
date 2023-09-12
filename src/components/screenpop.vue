<template>
    <div class="container">
        <div class="shade"></div>
        <div class="pop">
            <div class="top">
                <div class="top-font">全部筛选</div>
                <img class="close-icon" :src="require('@/assets/icon/close.svg')" @click="closeScreen">
            </div>
            <div style="display:flex; align-items: center; flex-direction: column; overflow-y: scroll;">
                <div class="screen-distance">
                    <div class="distance-font">距离</div>
                    <div class="distance-position">
                        <img src="@/assets/icon/position-gray.svg" class="position-icon">
                        <div class="position-current">{{ currentPosition }}</div>
                        <div class="position-modify" @click="changeLocation">修改</div>
                    </div>
                </div>
                <view style="width: 95%; display: flex; align-items: center; margin-top: 10px;">
                    <slider style="flex:1" ref="slider" value="51" @changing="sliderChange" min="1" max="52"  activeColor="#ED8E45"/>
                    <div style="margin-left: 5px; font-size: 14px; color: #666666;" >{{sliderValue}}</div>
                </view>
                <!-- <div class="select">
                    <div :class="[screenData.distance[0] ? 'button-active' : 'button']" @click="setscreenData(0,0)">
                        <p>不限</p>
                    </div>
                    <div :class="[screenData.distance[1] ? 'button-active' : 'button']" @click="setscreenData(0,1)">
                        <p>1km内</p>
                    </div>
                    <div :class="[screenData.distance[2] ? 'button-active' : 'button']" @click="setscreenData(0,2)">
                        <p>2km内</p>
                    </div>
                </div> -->
                <div class="screen-distance">
                    <div class="distance-font">类型</div>
                </div>
                <div class="select">
                    <div :class="[screenData.type[0] ? 'button-active' : 'button']" @click="setscreenData(1,0)">
                        <p>不限</p>
                    </div>
                    <div :class="[screenData.type[1] ? 'button-active' : 'button']" @click="setscreenData(1,1)">
                        <p>长期</p>
                    </div>
                    <div :class="[screenData.type[2] ? 'button-active' : 'button']" @click="setscreenData(1,2)">
                        <p>短期</p>
                    </div>
                </div>
                <div class="screen-distance">
                    <div class="distance-font">时薪</div>
                </div>
                <div class="select2">
                    <div :class="[screenData.wage[0] ? 'button-active' : 'button']" @click="setscreenData(2,0)">
                        <p>不限</p>
                    </div>
                    <div :class="[screenData.wage[1] ? 'button-active' : 'button']" @click="setscreenData(2,1)">
                        <p>100以下</p>
                    </div>
                    <div :class="[screenData.wage[2] ? 'button-active' : 'button']" @click="setscreenData(2,2)">
                        <p>101-120</p>
                    </div>
                    <div :class="[screenData.wage[3] ? 'button-active' : 'button']" style="margin-top: 10px;"
                        @click="setscreenData(2,3)">
                        <p>121-140</p>
                    </div>
                    <div :class="[screenData.wage[4] ? 'button-active' : 'button']" style="margin-top: 10px;"
                        @click="setscreenData(2,4)">
                        <p>141-160</p>
                    </div>
                    <div :class="[screenData.wage[5] ? 'button-active' : 'button']" style="margin-top: 10px;"
                        @click="setscreenData(2,5)">
                        <p>161以上</p>
                    </div>
                </div>
                <div class="screen-distance">
                    <div class="distance-font">年级</div>
                </div>
                <div class="select2">
                    <div :class="[screenData.grade[0] ? 'button-active' : 'button']" @click="setscreenData(3,0)">
                        <p>不限</p>
                    </div>
                    <div :class="[screenData.grade[1] ? 'button-active' : 'button']" @click="setscreenData(3,1)">
                        <p>小低年级</p>
                    </div>
                    <div :class="[screenData.grade[2] ? 'button-active' : 'button']" @click="setscreenData(3,2)">
                        <p>小高年级</p>
                    </div>
                    <div :class="[screenData.grade[3] ? 'button-active' : 'button']" style="margin-top: 10px;"
                        @click="setscreenData(3,3)">
                        <p>初中</p>
                    </div>
                    <div :class="[screenData.grade[4] ? 'button-active' : 'button']" style="margin-top: 10px;"
                        @click="setscreenData(3,4)">
                        <p>高中</p>
                    </div>
                    <div :class="[screenData.grade[5] ? 'button-active' : 'button']" style="margin-top: 10px;"
                        @click="setscreenData(3,5)">
                        <p>成人</p>
                    </div>
                </div>
                <div class="screen-distance">
                    <div class="distance-font">科目</div>
                </div>
                <div class="select2" style="height: 145px;">
                    <div :class="[screenData.subject[0] ? 'button-active' : 'button']" @click="setscreenData(4,0)">
                        <p>不限</p>
                    </div>
                    <div :class="[screenData.subject[1] ? 'button-active' : 'button']" @click="setscreenData(4,1)">
                        <p>语文</p>
                    </div>
                    <div :class="[screenData.subject[2] ? 'button-active' : 'button']" @click="setscreenData(4,2)">
                        <p>数学</p>
                    </div>
                    <div :class="[screenData.subject[3] ? 'button-active' : 'button']" style="margin-top: 10px;"
                        @click="setscreenData(4,3)">
                        <p>英语</p>
                    </div>
                    <div :class="[screenData.subject[4] ? 'button-active' : 'button']" style="margin-top: 10px;"
                        @click="setscreenData(4,4)">
                        <p>物理</p>
                    </div>
                    <div :class="[screenData.subject[5] ? 'button-active' : 'button']" style="margin-top: 10px;"
                        @click="setscreenData(4,5)">
                        <p>化学</p>
                    </div>
                    <div :class="[screenData.subject[6] ? 'button-active' : 'button']" style="margin-top: 10px;"
                        @click="setscreenData(4,6)">
                        <p>生物</p>
                    </div>
                    <div :class="[screenData.subject[7] ? 'button-active' : 'button']" style="margin-top: 10px;"
                        @click="setscreenData(4,7)">
                        <p>政治</p>
                    </div>
                    <div :class="[screenData.subject[8] ? 'button-active' : 'button']" style="margin-top: 10px;"
                        @click="setscreenData(4,8)">
                        <p>历史</p>
                    </div>
                    <div :class="[screenData.subject[9] ? 'button-active' : 'button']" style="margin-top: 10px;"
                        @click="setscreenData(4,9)">
                        <p>地理</p>
                    </div>
                    <div :class="[screenData.subject[10] ? 'button-active' : 'button']" style="margin-top: 10px;"
                        @click="setscreenData(4,10)">
                        <p>技术</p>
                    </div>
                    <div :class="[screenData.subject[11] ? 'button-active' : 'button']" style="margin-top: 10px;"
                        @click="setscreenData(4,11)">
                        <p>素质及其他</p>
                    </div>
                    <div class="button-none"></div>
                </div>
                <div class="bottom-button">
                    <div class="bottom-button-white" @click="reset">
                        <p>重置</p>
                    </div>
                    <div class="bottom-button-orange" @click="screen">
                        <p>筛选</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import geocoder from '@/libs/geocoder';

    // function getAddressBean(address, name = '') {
    //     let regex = /^(北京市|天津市|重庆市|上海市|香港特别行政区|澳门特别行政区)/;
    //     let REGION_PROVINCE = [];
    //     const addressBean = {
    //         PROVINCE: null,
    //         DISTRICT: null,
    //         CITY: null,
    //         ADDRESS: null
    //     };
    //     function regexAddressBean(address) {
    //         regex = /^(.*?[市州]|.*?地区|.*?特别行政区)(.*?[市区县])(.*?)$/g;
    //         const addxress = regex.exec(address);
    //         console.log(addressBean, addxress);
    //         addressBean.CITY = addxress[1];
    //         addressBean.DISTRICT = addxress[2];
    //         addressBean.ADDRESS = addxress[3];
    //         if (name != "") addressBean.ADDRESS = addressBean.ADDRESS + "(" + name + ")";
    //     }
    //     if (!(REGION_PROVINCE = regex.exec(address))) {
    //         regex = /^(.*?(省|自治区))(.*?)$/;
    //         REGION_PROVINCE = regex.exec(address);
    //         console.log('qweqwe', address, REGION_PROVINCE)
    //         addressBean.PROVINCE = REGION_PROVINCE[1];
    //         regexAddressBean(REGION_PROVINCE[3]);
    //     } else {
    //         addressBean.PROVINCE = REGION_PROVINCE[1];
    //         regexAddressBean(address);
    //     }
    //     return addressBean;
    // }
    export default {
        data() {
            return {
                currentPosition: "天津大学北洋园校区",
                city: "天津市",
                screenData: {
                    "distanceSlider":99999999,
                    "distance": [true, false, false], "type": [true, false, false],
                    "wage": [true, false, false, false, false, false],
                    "grade": [true, false, false, false, false, false],
                    "subject": [true, false, false, false, false, false, false, false, false, false, false, false],
                },
                latitude: 0,
                longitude: 0,
                sliderValue: "不限",
                distance:0,
            }
        },
        onReady() {
            const that = this;
            uni.getLocation({
                type: 'wgs84',
                success: function (res) {
                    console.log(res)
                    // console.log('当前位置的经度：' + res.longitude);
                    // console.log('当前位置的纬度：' + res.latitude);
                    geocoder(res.latitude, res.longitude).then(res => {
                        console.log('coder', res); // 地址
                        that.currentPosition = res.address
                        that.city = res.address_component.city
                    }).catch(err => {
                        // handle error
                        console.log(err);
                    });
                    that.latitude = res.latitude;
                    that.longitude = res.longitude;
                },
                fail: function (err) {
                    console.log(err)
                }
            });

        },
        methods: {
            sliderChange(e) {
                if(e.detail.value > 50){
                    this.sliderValue = '不限'
                    this.screenData.distanceSlider = 99999999
                }else{
                    this.sliderValue = e.detail.value + 'km'
                    this.screenData.distanceSlider = e.detail.value * 1000
                }
            },
            setscreenData(a, b) {
                if (a == 0) {
                    for (let i = 0; i < 3; i++) {
                        if (i != b) {
                            this.$set(this.screenData.distance, i, false)
                        } else {
                            this.$set(this.screenData.distance, i, true)
                        }
                    }
                } else if (a == 1) {
                    for (let i = 0; i < 3; i++) {
                        if (i != b) {
                            this.$set(this.screenData.type, i, false)
                        } else {
                            this.$set(this.screenData.type, i, true)
                        }
                    }
                } else if (a == 2) {
                    if (b == 0) {
                        for (let i = 0; i < 6; i++) {
                            this.$set(this.screenData.wage, i, false)
                        }
                        this.$set(this.screenData.wage, 0, true)
                    } else {
                        this.$set(this.screenData.wage, b, !this.screenData.wage[b])
                    }
                    let count_wage = 0;
                    for (let i = 1; i < 6; i++) {
                        if (this.screenData.wage[i] == false) {
                            count_wage++;
                        }
                    }
                    if (count_wage == 5) {
                        this.$set(this.screenData.wage, 0, true)
                    } else if (count_wage == 0) {
                        for (let i = 0; i < 6; i++) {
                            this.$set(this.screenData.wage, i, false)
                        }
                        this.$set(this.screenData.wage, 0, true)
                    } else {
                        this.$set(this.screenData.wage, 0, false)
                    }
                } else if (a == 3) {
                    if (b == 0) {
                        for (let i = 0; i < 6; i++) {
                            this.$set(this.screenData.grade, i, false)
                        }
                        this.$set(this.screenData.grade, 0, true)
                    } else {
                        this.$set(this.screenData.grade, b, !this.screenData.grade[b])
                    }
                    let count_grade = 0;
                    for (let i = 1; i < 6; i++) {
                        if (this.screenData.grade[i] == false) {
                            count_grade++;
                        }
                    }
                    if (count_grade == 5) {
                        this.$set(this.screenData.grade, 0, true)
                    } else if (count_grade == 0) {
                        for (let i = 0; i < 6; i++) {
                            this.$set(this.screenData.grade, i, false)
                        }
                        this.$set(this.screenData.grade, 0, true)
                    } else {
                        this.$set(this.screenData.grade, 0, false)
                    }
                } else if (a == 4) {
                    if (b == 0) {
                        for (let i = 0; i < 12; i++) {
                            this.$set(this.screenData.subject, i, false)
                        }
                        this.$set(this.screenData.subject, 0, true)
                    } else {
                        this.$set(this.screenData.subject, b, !this.screenData.subject[b])
                    }
                    let count_subject = 0;
                    for (let i = 1; i < 12; i++) {
                        if (this.screenData.subject[i] == false) {
                            count_subject++;
                        }
                    }
                    if (count_subject == 11) {
                        this.$set(this.screenData.subject, 0, true)
                    } else if (count_subject == 0) {
                        for (let i = 0; i < 12; i++) {
                            this.$set(this.screenData.subject, i, false)
                        }
                        this.$set(this.screenData.subject, 0, true)
                    } else {
                        this.$set(this.screenData.subject, 0, false)
                    }
                }
            },
            closeScreen() {
                this.$emit('closeScreen');
            },
            reset() {
                this.screenData = {
                    "distanceSlider": 99999999,
                    "distance": [true, false, false], "type": [true, false, false],
                    "wage": [true, false, false, false, false, false],
                    "grade": [true, false, false, false, false, false],
                    "subject": [true, false, false, false, false, false, false, false, false, false, false, false],
                }
            },
            screen() {
                this.$emit('screen', this.screenData, this.city, this.latitude, this.longitude)
            },
            changeLocation() {
                const that = this;
                uni.chooseLocation({
                    latitude: that.latitude,
                    longitude: that.longitude,
                    success: function (res) {
                        if (that.latitude != res.latitude || that.longitude != res.longitude) {
                            geocoder(res.latitude, res.longitude).then(res => {
                                console.log(res); // 地址
                                that.city = res.address_component.city
                            }).catch(err => {
                                // handle error
                                console.log(err);
                            });
                            // console.log('位置名称：' + res.name);
                            // console.log('详细地址：' + res.address);
                            // console.log('纬度：' + res.latitude);
                            // console.log('经度：' + res.longitude);
                            // console.log(getAddressBean(res.address, res.name));
                            that.latitude = res.latitude;
                            that.longitude = res.longitude;
                            that.currentPosition = res.name;
                        }
                    },
                    fail(err) {
                        console.log(err)
                    }
                });
            }
        }
    };
</script>

<style scoped>
    .container {
        height: 100%;
        overflow: hidden;
    }

    .shade {
        background-color: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        height: 100%;
        width: 100%;
        overflow: hidden;
    }

    .pop {
        background-color: #fff;
        position: fixed;
        bottom: 0;
        height: 85vh;
        width: 100%;
        border-radius: 16px 16px 0 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: hidden;
    }

    .top {
        margin-top: 17px;
        height: 24px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .top-font {
        font-size: 16px;
        font-weight: 500;
        height: 24px;
        line-height: 24px;
        position: relative;
    }

    .close-icon {
        width: 24px;
        height: 24px;
        position: absolute;
        right: 0;
        margin-right: 16px;
    }

    .screen-distance {
        margin-top: 15px;

        width: 95%;
        height: 22px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .distance-font {
        height: 22px;
        font-size: 16px;
        font-weight: 500;
        line-height: 22px;
    }

    .distance-position {
        display: flex;
        align-items: center;
    }

    .position-icon {
        height: 12px;
        width: 12px;
    }

    .position-current {
        margin-left: 6px;
        font-size: 14px;
        font-weight: 300;
        color: #666666;
    }

    .position-modify {
        margin-left: 6px;
        font-size: 14px;
        font-weight: 500;
        color: #ED8E45;
    }

    .select {
        margin-top: 10px;
        width: 95%;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .button {
        width: 30%;
        height: 28px;
        background-color: #f9f9f9;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #2A2A2A;
        border-radius: 16px;
    }

    .button-active {
        width: 30%;
        height: 28px;
        background: linear-gradient(to right, #F46B45, #EEA849);
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        border-radius: 16px;
    }

    .select2 {
        margin-top: 10px;
        width: 95%;
        height: 74px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .button-none {
        width: 30%;
        height: 32px;
    }

    .bottom-button {
        margin-top: 20px;
        width: 95%;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: calc(env(safe-area-inset-bottom) + 20px);
    }

    .bottom-button-white {
        width: 45%;
        height: 36px;
        background-color: #f9f9f9;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #2A2A2A;
        border-radius: 16px;
    }

    .bottom-button-orange {
        width: 45%;
        height: 36px;
        background: linear-gradient(to right, #F46B45, #EEA849);
        display: flex;
        align-items: center;
        justify-content: center;
        color: #FFFFFF;
        border-radius: 16px;
    }
</style>