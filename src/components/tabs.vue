<template>
    <div class="tabs">
        <ul>
          <router-link :to="{ name: 'Notice'}" tag="li">公告</router-link>
            <router-link :to="{ name : 'Home'}" tag="li" exact>
                <div>
                    <img src="../assets/images/home.svg">
                </div>
                <div>首页</div>
            </router-link>
            <router-link :to="{ name: 'Courses' }" tag="li">
                <div>
                    <img src="../assets/images/category.svg">
                </div>
                <div>课程库</div>
            </router-link>
            <router-link :to="{ name: 'Notice' }" tag="li">
                <div><img src="../assets/images/cart.svg"></div>
                <div>公告</div>
            </router-link>
            <router-link :to="{ name: 'Me'}" tag="li">
                <div><img src="../assets/images/me.svg"></div>
                <div>我</div>
            </router-link>
        </ul>
    </div>
</template>
<script>
//    import '../assets/less/tabs.less'
    export default {}
</script>
