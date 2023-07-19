<template>
	<div class="container">
		<div class="top" :style="topStyle">
			<div class="top-bar" :style="topBarStyle">
				<div>个人</div>
			</div>
		</div>
		<div class="main" :style="mainStyle">
			<div class="avatar">
				<img :src="avator" class="avatar_img">
				<div class="username_div">
					<div class="username">{{username}}</div>
					<img :src="require('@/assets/icon/logout.svg')" class="logout">
				</div>
				<div class="reputationScore">
					<div class="score">信誉分&ensp;{{reputationScore}}</div>
					<img class="reputation-icon" :src="reputation">
				</div>
			</div>
			<div class="information">
				<div class="information-title">
					<div>基本信息</div>
					<img class="edit-icon" :src="require('@/assets/icon/edit.svg')" @click="goEdit">
				</div>
				<div class="information-line">
					<div class="information-gender">
						<div class="font1">性别</div>
						<div class="font2">{{basicInformation.gender}}</div>
					</div>
					<div class="information-score">
						<div class="font1">高考分数</div>
						<div class="font2">{{basicInformation.score}}</div>
					</div>
					<div class="information-score">
						<div class="font1">年级</div>
						<div class="font2">{{basicInformation.grade}}</div>
					</div>
				</div>
				<div class="information-line">
					<div class="font1">手机号</div>
					<div class="font2">{{basicInformation.phone}}</div>
				</div>
				<div class="information-line">
					<div class="font1">学校</div>
					<div class="font2">{{basicInformation.school}}</div>
				</div>
				<div class="information-line">
					<div class="font1">专业</div>
					<div class="font2">{{basicInformation.major}}</div>
				</div>
				<div class="information-subject">
					<div class="font1">教授科目</div>
					<div class="font2">{{basicInformation.subject}}</div>
				</div>
				<div class="information-subject" style="margin-bottom: 12px;">
					<div class="font1">个人简述</div>
					<div class="font2">{{basicInformation.profile}}</div>
				</div>
			</div>
			<div class="platformExperience">
				<div class="platformExperience-title">
					<div>平台经历</div>
				</div>
				<div v-for="(item,index) in platformExperience" class="platformExperience-detail">
					<div class="detail-top">
						<div class="detail-id">
							<div class="font1">订单</div>
							<div class="font2">#{{item.id}}</div>
						</div>
						<img :src="feedback(item.feedback)" class="detail-icon">
					</div>
					<div class="detail-subject">
						<div class="font1">科目</div>
						<div class="font2">{{item.subject}}</div>
					</div>
					<div class="detail-mid">
						<div class="detail-id">
							<div class="font1">年级</div>
							<div class="font2">{{item.grade}}</div>
						</div>
						<div class="detail-id" style="margin-left:20px;">
							<div class="font1">类型</div>
							<div class="font2">{{item.type}}</div>
						</div>
					</div>
					<div class="line" v-if="index != platformExperience.length-1"></div>
				</div>
			</div>
			<div class="experience">
				<div class="information-title">
					<div>其他经历</div>
					<img class="edit-icon" :src="require('@/assets/icon/edit.svg')" @click="goEdit">
				</div>
				<div v-for="(item,index) in experience" class="experience-detail">
					<div class="experience-item">
						<div class="font1">经历&nbsp;·&nbsp;{{convertToChineseNumber(index)}}</div>
						<div class="font2">{{item}}</div>
					</div>
					<div class="line" v-if="index != platformExperience.length-1"></div>
				</div>

			</div>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue';
	export default {
		data() {
			return {
				menuButton: {},
				windowHeight: 0,
				title: 'Hello11',
				avator: 'https://avatars.githubusercontent.com/u/87810687?s=48&v=4',
				username: 'XXX',
				reputationScore: 90,
				basicInformation: {
					"gender": "男",
					"phone": "17777777777",
					"score": "720",
					"school": "天津大学",
					"major": "计算机科学与技术",
					"grade": "大一",
					"subject": "数学",
					"profile": "个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介"
				},
				platformExperience: [{
					"id": "837478",
					"subject": "数学",
					"grade": "高中",
					"type": "长期辅导",
					"feedback": 3
				}, {
					"id": "837222",
					"subject": "英语、数学",
					"grade": "初中",
					"type": "长期辅导",
					"feedback": 0
				}],
				experience: ["简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述",
					"简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述简述"]
			}
		},
		computed: {
			topStyle() {
				return `height: ${this.menuButton.top + this.menuButton.height + 10}px;`
			},
			topBarStyle() {
				return `height: ${this.menuButton.height}px; 
                top: ${this.menuButton.top}px; 
                left: ${uni.getSystemInfoSync().windowWidth - this.menuButton.right}px;`
			},
			mainStyle() {
				return `top: ${this.menuButton.top + this.menuButton.height + 10}px; 
						height: ${this.windowHeight.windowHeight - this.menuButton.bottom - 55}px;`
			},
			reputation() {
				if (this.reputationScore >= 90) {
					return require('@/assets/icon/reputation-green.svg')
				} else if (this.reputationScore >= 75) {
					return require('@/assets/icon/reputation-blue.svg')
				} else if (this.reputationScore >= 60) {
					return require('@/assets/icon/reputation-yellow.svg')
				} else if (this.reputationScore < 60) {
					return require('@/assets/icon/reputation-red.svg')
				}
			},
		},

		mounted() {
			this.menuButton = uni.getMenuButtonBoundingClientRect();
			this.windowHeight = uni.getSystemInfoSync();
		},
		methods: {
			feedback(i) {
				if (i == 0) {
					return require('@/assets/icon/feedback-green.svg')
				} else if (i == 1) {
					return require('@/assets/icon/feedback-blue.svg')
				} else if (i == 2) {
					return require('@/assets/icon/feedback-yellow.svg')
				} else if (i == 3) {
					return require('@/assets/icon/feedback-red.svg')
				}
			},
			convertToChineseNumber(index) {
				const chineseNumbers = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
				return chineseNumbers[index];
			},
			goEdit(){
				uni.navigateTo({
					url: '/pages/editInfo/editInfo'
				});
			}
		}
	};
</script>

<style scoped>
	.container {
		width: 100%;
		background-color: #f9f9f9 !important;
		overflow: hidden;
	}

	.top {
		width: 100%;
		position: fixed;
		top: 0px;
		left: 0px;
		background-color: #f9f9f9;
	}

	.top-bar {
		width: 100%;
		position: fixed;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.main {
		width: 100%;
		display: flex;
		align-items: center;
		flex-direction: column;
		position: fixed;
		overflow-y: scroll;
		background-color: #f9f9f9;
	}

	.avatar {
		margin-top: 12px;
		width: 95%;
		height: 106px;
		min-height: 106px;
		background-color: #fff;
		border-radius: 16px;
		position: relative;
	}

	.avatar_img {
		position: absolute;
		top: 10px;
		left: 10px;
		height: 86px;
		width: 86px;
		border-radius: 43px;
	}

	.username_div {
		position: absolute;
		left: 116px;
		top: 25px;
		display: flex;
		align-items: center;
		height: 20px;
		width: calc(95% - 126px);
	}

	.username {
		max-width: calc(95% - 14px);
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		font-size: 20px;
		font-weight: 500;
		height: 20px;
		line-height: 20px;
		color: #2a2a2a;
	}

	.logout {
		margin-left: 10px;
		height: 16px;
		width: 16px;
	}

	.reputationScore {
		position: absolute;
		left: 116px;
		top: 61px;
		display: flex;
		align-items: center;
		height: 20px;
		width: calc(95% - 126px);
	}

	.score {
		font-size: 14px;
		font-weight: 300;
		height: 20px;
		white-space: nowrap;
		color: #666666;
	}

	.reputation-icon {
		width: 26px;
		height: 14px;
		margin-left: 10px;
	}

	.information {
		margin-top: 12px;
		width: 95%;
		background-color: #fff;
		border-radius: 16px;
		position: relative;
		display: flex;
		flex-direction: column;
		align-self: center;
	}

	.information-title {
		margin-top: 10px;
		margin-left: 10px;
		width: calc(95vw - 20px);
		height: 22px;
		font-size: 16px;
		font-weight: 500;
		line-height: 22px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		color: #2a2a2a;
	}

	.edit-icon {
		width: 16px;
		height: 16px;
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

	.information-line {
		margin-top: 10px;
		margin-left: 10px;
		width: calc(95vw - 20px);
		display: flex;
		align-items: center;
		height: 20px;
		line-height: 20px;
	}

	.information-gender {
		display: flex;
		align-items: center;
	}

	.information-score {
		display: flex;
		align-items: center;
		margin-left: 20px;
	}

	.information-line {
		margin-top: 10px;
		margin-left: 10px;
		width: calc(95vw - 20px);
		display: flex;
		align-items: center;
		height: 20px;
		line-height: 20px;
	}

	.information-subject {
		margin-top: 10px;
		margin-left: 10px;
		width: calc(95vw - 20px);
		display: flex;
	}

	.platformExperience {
		margin-top: 12px;
		width: 95%;
		background-color: #fff;
		border-radius: 16px;
		position: relative;
		display: flex;
		flex-direction: column;
		align-self: center;
		padding-bottom: 10px;
	}

	.platformExperience-title {
		margin-top: 10px;
		margin-left: 10px;
		width: calc(95vw - 20px);
		height: 22px;
		font-size: 16px;
		font-weight: 500;
		line-height: 22px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		color: #2a2a2a;
	}

	.platformExperience-detail {
		margin-top: 10px;
		margin-left: 10px;
		width: calc(95vw - 20px);
		line-height: 20px;
		display: flex;
		align-items: center;
		flex-direction: column;
	}

	.detail-top {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: calc(95vw - 20px);
		height: 20px;
	}

	.detail-id {
		display: flex;
		align-items: center;
		flex-direction: row;
	}

	.detail-icon {
		width: 46px;
		height: 14px;
	}

	.detail-mid {
		margin-top: 10px;
		display: flex;
		align-items: center;
		width: calc(95vw - 20px);
		height: 20px;
	}

	.detail-subject {
		margin-top: 10px;
		display: flex;
		align-items: center;
		width: calc(95vw - 20px);
		height: 20px;
	}

	.line {
		width: calc(95vw - 20px);
		border-bottom: 1px solid #D9D9D9;
		margin-top: 10px;
	}

	.experience {
		margin-bottom: calc(10px + env(safe-area-inset-bottom));
		margin-top: 12px;
		width: 95%;
		background-color: #fff;
		border-radius: 16px;
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-bottom: 10px;
	}
	.experience-detail{
		width: calc(95vw - 20px);
		display: flex;
		align-items: center;
		flex-direction: column;
	}
	.experience-item{
		margin-top: 10px;
		margin-left: 10px;
		width: calc(95vw - 20px);
		display: flex;
	}
</style>