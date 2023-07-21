<template>
    <div class="container">
        <div class="avatar">
            <img :src="require('@/assets/icon/camera.svg')" class="update-icon">
        </div>
        <div class="card">
            <div class="title"></div>
        </div>
    </div>
</template>

<script>
    export default {
        components: {

        },
        data() {
            return {

            };
        },
        methods: {

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
    }

    .avatar {
        margin-top: 12px;
        width: 86px;
        height: 86px;
        border-radius: 50%;
        background-color: #000000;
        opacity:0.5;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .update-icon{
        width: 24px;
        height: 24px;
    }
    
    .card{
        width: 95%;
        background-color: #FFFFFF;
        border-radius: 16px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .title{
        font-size: 24px;
        font-weight: bold;
        color: #000000;
        margin-top: 24px;
    }


</style>