<template>
    <div class="container">
		<div class="top-bar" :style="topBarStyle">
			<img class="position-icon" :src="require('@/assets/icon/position.svg')">
			<div class=""></div>
			<div></div>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue';
	export default {
		data() {
			return {
				menuButton: {},
				title: 'Hello11'
			}
		},
		computed:{
            topBarStyle() {
                return `height: ${this.menuButton.height}px; 
                top: ${this.menuButton.top}px; 
                left: ${uni.getSystemInfoSync().windowWidth - this.menuButton.right}px;
                width: ${this.menuButton.left - uni.getSystemInfoSync().windowWidth + this.menuButton.right}px;`
            },
		},
		onLoad() {

		},
		methods: {

		}
	};
</script>

<style scoped>
	.container {
		width: 100%;
	}
	.top-bar{
		
	}

</style>
