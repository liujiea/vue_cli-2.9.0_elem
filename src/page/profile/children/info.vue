<template>
    <div class="rating_page">
        <head-top head-title="账户信息" go-back="true"></head-top>
        <section class="profile-info">
            <section class="headprotrait">
                <input type="file" class="profileinfopanel-upload" @change="uploadAvatar" />
                <h2>头像</h2>
                <div class="headportrait-div">
                    <img src="" alt="" v-if="userInfo" :src="imgBaseUrl+userInfo.avatar" class="headportrait-div-top" />
                    <span class="headportrait-div-top" v-else>
                        <svg>
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#avatar-default"></use>
                        </svg>
                    </span>
                    <span class="headportrait-div-bottom">
                        <svg fill="#d8d8d8">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
                        </svg>
                    </span>
                </div>
            </section>
            <router-link to="/profile/info/setusername" class="info-router">
                <section class="headportraitwo">
                    <h2>用户名</h2>
                    <div class="headportrait-div">
                        <p>{{username}}</p>
                        <span class="headportrait-div-bottom">
                            <svg fill="#d8d8d8">
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
                            </svg>
                        </span>
                    </div>
                </section>
            </router-link>
        </section>
    </div>
</template>
<script type="text/javascript">
    import headTop from 'src/components/header/head'
    export default {
        data () {
            return {

            }
        },
        components: {
            headTop
        }
    }
</script>
<style lang="scss" scoped>
    @import 'src/style/mixin';
    .rating_page{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #f2f2f2;
        z-index: 202;
        padding-top: 1.95rem;
        p, span{
            font-family: Helvetica Neue,Tahoma,Arial;
        }
    }
</style>