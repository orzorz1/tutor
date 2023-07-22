<template>
    <div class="container">
        <div class="avatar" @click="inputAvatar" :style="{ backgroundImage: `url(${imgPath})` }">
            <img :src="require('@/assets/icon/camera.svg')" class="update-icon">
        </div>
        <div class="card">
            <div class="title" >
                <div>基本信息</div>
            </div>
            <div class="input-item">
                <p class="input-font">姓名</p>
                <input placeholder="真实姓名" v-model="name">
            </div>
            <div class="input-item">
                <p class="input-font">性别</p>
                <radio-group :value="gender" @change="genderChange">
                    <radio :value="'male'" checked="true" v-if="gender=='male'" style="margin-left: 10px;">男</radio>
                    <radio :value="'male'" v-if="gender!='male'" style="margin-left: 10px;">男</radio>
                    <radio :value="'female'" checked="true" v-if="gender=='female'" style="margin-left: 20px;">女</radio>
                    <radio :value="'female'" v-if="gender!='female'" style="margin-left: 20px;">女</radio>
                </radio-group>
            </div>
            <div class="input-item">
                <p class="input-font">手机号</p>
                <input placeholder="真实手机号，用于订单联系" v-model="phone">
            </div>
            <div class="input-item">
                <p class="input-font">高考分数</p>
                <input placeholder="高考真实分数，特殊省份请在个人简述中描述" v-model="score">
            </div>
            <div class="input-item">
                <p class="input-font">学校</p>
                <input placeholder="学校全称，如天津大学" v-model="school">
            </div>
            <div class="input-item">
                <p class="input-font">专业</p>
                <input placeholder="专业全称，如数学与应用数学" v-model="major">
            </div>
            <div class="input-item">
                <p class="input-font">年级</p>
                <input placeholder="年级简称，如大三、研三" v-model="grade">
            </div>
            <div class="input-subject">
                <p class="input-font">教授科目</p>
                <checkbox-group @change="subjectChange" class="checkbox-subject">
                    <label v-for="item in subjectList" style="margin-right: 10px; margin-top: 10px;">
                        <checkbox :value="item.name" checked="true" v-if="item.checked" />
                        <checkbox :value="item.name" v-if="!item.checked" />
                        {{item.name}}
                    </label>
                </checkbox-group>
            </div>
            <div class="input-subject">
                <p class="input-font">个人简述</p>
                <textarea placeholder="用于填写补充信息，过往家教经历请在下方其他经历陈述" type="text" v-model="profile"
                    class="textarea-profile"></textarea>
            </div>
        </div>
        <div class="card">
            <div class="title">
                <div>其他经历</div>
            </div>
            <div v-for="(item,index) in experience" class="experience-detail">
                <div class="input-subject">
                    <div class="experience-top">
                        <div class="input-font">经历&nbsp;·&nbsp;{{convertToChineseNumber(index)}}</div>
                        <img :src="require('@/assets/icon/delete.svg')" class="del-icon" @click="delExp(index)">
                    </div>
                    <textarea placeholder="可以填写在其他平台的家教经历，如果有多次经历，请分段填写，并在完成每段经历后点击下方添加经历；如果没有，也可以点击右侧删除按钮删除经历"
                        type="text" v-model="experience[index]" class="textarea-profile"
                        style="height: 60px;"></textarea>
                </div>
                <div class="line"></div>
            </div>
            <div class="addEXP-button" @click="addExp" v-if="experience.length<10">
                <div>添加经历</div>
            </div>
        </div>
        <div class="send-button" @click="">
            <div>完成填写</div>
        </div>
    </div>
</template>

<script>
    export default {
        components: {

        },
        data() {
            return {
                imgPath: '',
                name: 'a',
                gender: "female",
                phone: '',
                score: '',
                school: '',
                major: '',
                grade: '',
                subjectList: [{ name: '语文', checked: true }, { name: '数学', checked: false }, { name: '英语', checked: false }, { name: '物理', checked: false },
                { name: '化学', checked: false }, { name: '政史', checked: false }, { name: '生地', checked: false }],
                profile: '',
                experience: ["简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述",
                    "简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述"]
            };
        },
        methods: {
            genderChange(e) {
                this.gender = e.detail.value;
            },
            subjectChange(e) {
                console.log(e.detail.value);
                for (var i = 0; i < this.subjectList.length; i++) {
                    let flag = 0;
                    for (var j = 0; j < e.detail.value.length; j++) {
                        if (this.subjectList[i].name == e.detail.value[j]) {
                            flag = 1;
                            break;
                        }
                    }
                    if (flag == 1) {
                        this.subjectList[i].checked = true;
                    } else {
                        this.subjectList[i].checked = false;
                    }
                }
            },
            convertToChineseNumber(index) {
                const chineseNumbers = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
                return chineseNumbers[index];
            },
            delExp(index) {
                this.experience.splice(index, 1);
            },
            addExp() {
                if (this.experience.length < 10) {
                    this.experience.push("");
                }
            },
            inputAvatar() {
                console.log(1)
                let that = this;
                uni.chooseImage({
                    count: 1, // 默认9
                    success: function (res) {
                        console.log('选择图片成功：', res);
                        that.imgPath = res.tempFilePaths[0]; // 存储图片路径
                    },
                    fail: function (chooseError) {
                        console.error('选择图片失败：', chooseError);
                    }
                });
            },
        },
    };
</script>

<style scoped>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100vh;
        background-color: #f9f9f9;
        overflow-y: auto;
    }

    .avatar {
        background-size: cover;
        background-position: center center;
        margin-top: 20px;
        width: 86px;
        height: 86px;
        min-height: 86px;
        border-radius: 50%;
        background-color: #000000;
        opacity: 0.5;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .update-icon {
        width: 24px;
        height: 24px;
    }

    .card {
        margin-top: 20px;
        width: 95%;
        background-color: #FFFFFF;
        border-radius: 16px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .title {
        width: 90%;
        margin-top: 10px;
        font-size: 16px;
        font-weight: 500;
        color: #2A2A2A;
    }

    .input-item {
        width: 90%;
        margin-top: 15px;
        display: flex;
    }

    .input-font {
        font-size: 14px;
        font-weight: 500;
        color: #666666;
        margin-right: 15px;
    }

    .input-item input {
        flex: 1;
        border-bottom: #D9D9D9 1px solid;
    }

    .input-subject {
        width: 90%;
        margin-top: 15px;
    }

    .checkbox-subject {
        display: flex;
        flex-wrap: wrap;
    }

    .textarea-profile {
        width: 100%;
        margin-top: 10px;
        margin-bottom: 15px;
        display: flex;
        height: 80px;
    }

    .font1 {
        color: #666666;
        font-size: 14px;
        font-weight: 300;
        display: inline-block;
        white-space: nowrap;
    }

    .font2 {
        color: #2a2a2a;
        font-size: 14px;
        font-weight: 400;
        margin-left: 10px;
    }

    .experience-detail {
        width: 95vw;
        display: flex;
        align-items: center;
        flex-direction: column;
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

    .experience-top {
        display: flex;
        justify-content: space-between;
    }

    .del-icon {
        width: 16px;
        height: 16px;
    }

    .addEXP-button {
        width: 171px;
        height: 36px;
        border-radius: 18px;
        background-color: #F9F9F9;
        margin-bottom: 10px;
        margin-top: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>