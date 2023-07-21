<template>
    <div class="container">
        <div class="shade"></div>
        <div class="pop">
            <div class="top">
                <div class="top-font">全部筛选</div>
                <img class="close-icon" :src="require('@/assets/icon/close.svg')" @click="closeScreen">
            </div>
            <div class="screen-distance">
                <div class="distance-font">距离</div>
                <div class="distance-position">
                    <img src="@/assets/icon/position-gray.svg" class="position-icon">
                    <div class="position-current">{{ currentPosition }}</div>
                    <div class="position-modify" @click="changeLocation">修改</div>
                </div>
            </div>
            <div class="select">
                <div :class="[screenData.distance[0] ? 'button-active' : 'button']">
                    <p>500m内</p>
                </div>
                <div :class="[screenData.distance[1] ? 'button-active' : 'button']">
                    <p>1km内</p>
                </div>
                <div :class="[screenData.distance[2] ? 'button-active' : 'button']">
                    <p>2km内</p>
                </div>
            </div>
            <div class="screen-distance">
                <div class="distance-font">类型</div>
            </div>
            <div class="select">
                <div :class="[screenData.type[0] ? 'button-active' : 'button']">
                    <p>不限</p>
                </div>
                <div :class="[screenData.type[1] ? 'button-active' : 'button']">
                    <p>短期</p>
                </div>
                <div :class="[screenData.type[2] ? 'button-active' : 'button']">
                    <p>长期</p>
                </div>
            </div>
            <div class="screen-distance">
                <div class="distance-font">时薪</div>
            </div>
            <div class="select2">
                <div :class="[screenData.wage[0] ? 'button-active' : 'button']">
                    <p>不限</p>
                </div>
                <div :class="[screenData.wage[1] ? 'button-active' : 'button']">
                    <p>100以下</p>
                </div>
                <div :class="[screenData.wage[2] ? 'button-active' : 'button']">
                    <p>101-120</p>
                </div>
                <div :class="[screenData.wage[3] ? 'button-active' : 'button']" style="margin-top: 10px;">
                    <p>121-140</p>
                </div>
                <div :class="[screenData.wage[4] ? 'button-active' : 'button']" style="margin-top: 10px;">
                    <p>141-160</p>
                </div>
                <div :class="[screenData.wage[5] ? 'button-active' : 'button']" style="margin-top: 10px;">
                    <p>161以上</p>
                </div>
            </div>
            <div class="screen-distance">
                <div class="distance-font">年级</div>
            </div>
            <div class="select2">
                <div :class="[screenData.grade[0] ? 'button-active' : 'button']">
                    <p>不限</p>
                </div>
                <div :class="[screenData.grade[1] ? 'button-active' : 'button']">
                    <p>100以下</p>
                </div>
                <div :class="[screenData.grade[2] ? 'button-active' : 'button']">
                    <p>101-120</p>
                </div>
                <div :class="[screenData.grade[3] ? 'button-active' : 'button']" style="margin-top: 10px;">
                    <p>121-140</p>
                </div>
                <div :class="[screenData.grade[4] ? 'button-active' : 'button']" style="margin-top: 10px;">
                    <p>141-160</p>
                </div>
                <div :class="[screenData.grade[5] ? 'button-active' : 'button']" style="margin-top: 10px;">
                    <p>161以上</p>
                </div>
            </div>
            <div class="screen-distance">
                <div class="distance-font">科目</div>
            </div>
            <div class="select2" style="height: 116px;">
                <div :class="[screenData.subject[0] ? 'button-active' : 'button']">
                    <p>不限</p>
                </div>
                <div :class="[screenData.subject[1] ? 'button-active' : 'button']">
                    <p>数学</p>
                </div>
                <div :class="[screenData.subject[2] ? 'button-active' : 'button']">
                    <p>语文</p>
                </div>
                <div :class="[screenData.subject[3] ? 'button-active' : 'button']" style="margin-top: 10px;">
                    <p>英语</p>
                </div>
                <div :class="[screenData.subject[4] ? 'button-active' : 'button']" style="margin-top: 10px;">
                    <p>物理</p>
                </div>
                <div :class="[screenData.subject[5] ? 'button-active' : 'button']" style="margin-top: 10px;">
                    <p>化学</p>
                </div>
                <div :class="[screenData.subject[6] ? 'button-active' : 'button']" style="margin-top: 10px;">
                    <p>政史</p>
                </div>
                <div :class="[screenData.subject[7] ? 'button-active' : 'button']" style="margin-top: 10px;">
                    <p>生地</p>
                </div>
                <div class="button-none"></div>
            </div>
            <div class="bottom-button">
                <div class="bottom-button-white">
                    <p>重置</p>
                </div>
                <div class="bottom-button-orange">
                    <p>重置</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
function getAddressBean(address, name) {
    let regex = /^(北京市|天津市|重庆市|上海市|香港特别行政区|澳门特别行政区)/;
    let REGION_PROVINCE = [];
    const addressBean = {
        PROVINCE: null,
        DISTRICT: null,
        CITY: null,
        ADDRESS: null
    };
    function regexAddressBean(address, addressBean) {
        regex = /^(.*?[市州]|.*?地区|.*?特别行政区)(.*?[市区县])(.*?)$/g;
        const addxress = regex.exec(address);
        addressBean.CITY = addxress[1];
        addressBean.DISTRICT = addxress[2];
        addressBean.ADDRESS = addxress[3] + "(" + name + ")";
    }
    if (!(REGION_PROVINCE = regex.exec(address))) {
        regex = /^(.*?(省|自治区))(.*?)$/;
        REGION_PROVINCE = regex.exec(address);
        addressBean.PROVINCE = REGION_PROVINCE[1];
        regexAddressBean(REGION_PROVINCE[3], addressBean);
    } else {
        addressBean.PROVINCE = REGION_PROVINCE[1];
        regexAddressBean(address, addressBean);
    }
    return addressBean;
}
export default {
    data() {
        return {
            currentPosition: "天津大学北洋园校区",
            screenData: {
                "distance": [true, false, false], "type": [true, false, false],
                "wage": [true, false, false, false, false, false],
                "grade": [true, false, false, false, false, false],
                "subject": [true, false, false, false, false, false, false, false],
            },
        }
    },
    onLoad() {
    },
    methods: {
        closeScreen() {
            this.screenData = true
            this.$emit('closeScreen');
        },
        changeLocation() {
            let that = this
            uni.chooseLocation({
                // latitude: 38.8,
                // longitude: 117.1,
                success(res) {
                    that.currentPosition = res.name
                    console.log('位置名称：' + res.name);
                    console.log('详细地址：' + res.address);
                    console.log('纬度：' + res.latitude);
                    console.log('经度：' + res.longitude);
                    console.log(getAddressBean(res.address, res.name));
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
    height: 726px;
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
    margin-top: 20px;
    width: 353px;
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
    width: 353px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.button {
    width: 111px;
    height: 32px;
    background-color: #f9f9f9;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #2A2A2A;
    border-radius: 16px;
}

.button-active {
    width: 111px;
    height: 32px;
    background: linear-gradient(to right, #F46B45, #EEA849);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    border-radius: 16px;
}

.select2 {
    margin-top: 10px;
    width: 353px;
    height: 74px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
}

.button-none {
    width: 111px;
    height: 32px;
}

.bottom-button {
    margin-top: 20px;
    width: 353px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.bottom-button-white {
    width: 171px;
    height: 36px;
    background-color: #f9f9f9;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #2A2A2A;
    border-radius: 16px;
}

.bottom-button-orange {
    width: 171px;
    height: 36px;
    background: linear-gradient(to right, #F46B45, #EEA849);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    border-radius: 16px;
}
</style>
