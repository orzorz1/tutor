<template>
    <div class="container">
        <!-- 主页面和用户页面 -->
        <div class="content" v-show="currentTab==='home'">
            <Home @showScreen="showScreenPop" style="overflow:hidden;" ref="home" />
        </div>
        <div class="content" v-show="currentTab==='user'" >
            <User style="overflow: hidden;" ref="user" />
        </div>
        <ScreenPop v-if="showingScreenPop" style="z-index: 2000; overflow: hidden;" @closeScreen="closeScreenPop"
            @screen="setScreen" />
        <!-- 底部栏 -->
        <div class="tab-bar">
            <div @click="switchTab('home')" class="tab-item">
                <image class="tab-icon"
                    :src="currentTab === 'home' ? require('@/assets/icon/homepage_act.svg') : require('@/assets/icon/homepage.svg')" />
                <image class="tab-act" :src="currentTab === 'home' ? require('@/assets/icon/act.svg') : '' " />
            </div>
            <div @click="switchTab('user')" class="tab-item">
                <image class="tab-icon"
                    :src="currentTab === 'user' ? require('@/assets/icon/user_act.svg') : require('@/assets/icon/user.svg')" />
                <image class="tab-act" :src="currentTab === 'user' ? require('@/assets/icon/act.svg') : '' " />
            </div>
        </div>
    </div>
</template>

<script>
    import Home from '@/components/home.vue';
    import User from '@/components/user.vue';
    import ScreenPop from '@/components/screenpop.vue';

    export default {
        components: {
            Home,
            User,
            ScreenPop,
        },
        data() {
            return {
                currentTab: 'home',
                showingScreenPop: false,
            };
        },
        onLoad(){
            this.refreshUser();
        },
        methods: {
            switchTab(tab) {
                this.currentTab = tab;
            },
            showScreenPop() {
                this.showingScreenPop = true;
            },
            closeScreenPop() {
                this.showingScreenPop = false;
            },
            setScreen(data, city, latitude, longitude) {
                this.$refs.home.goScreen(data, city, latitude, longitude);
                this.showingScreenPop = false;
            },
            refreshUser(){
                this.$refs.user.refresh();
            }
        },
    };
</script>

<style lang="postcss" scoped>
    .container {
        display: flex;
        flex-direction: column;
        height: 100%;
        overflow: hidden;
    }

    .content {
        flex: 1;
        overflow: hidden;
    }

    .tab-bar {
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 45px;
        position: fixed;
        box-shadow: 0px -2px 5px rgba(0, 0, 0, 0.1);
        left: 0;
        right: 0;
        bottom: 0;
        padding-bottom: env(safe-area-inset-bottom);
        /* 在 iOS 中需要空出底部的安全区域，你可以使用 uni.getSystemInfoSync().safeArea 来获取安全区域 */
        background: #FFFFFF;
    }

    .tab-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .tab-icon {
        width: 24px;
        height: 24px;
    }

    .tab-act {
        width: 8px;
        height: 3px;
    }
</style>