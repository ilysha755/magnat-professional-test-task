<template>
<authorized-header/>
<main>
    <div class="error">
       <div class="error__content">
         <img src="../assets/404.png" alt="">
        <h2>Нам жаль, но страница не найдена.</h2>
        <router-link to="/" class="link">Перейти на главную</router-link>
        <span class="round"></span>
       </div>
        <img src="../assets/error.png" alt="error" class="error__img">
        <img src="../assets/error_1.png" alt="error" class="error__img_two">
        <img src="../assets/error_2.png" alt="error" class="error__img_three">
    </div>
</main>
<footer-component/>
</template>

<script>
import AuthorizedHeader from '@/components/AuthorizedHeader.vue'
import FooterComponent from '@/components/FooterComponent.vue'
export default {
components:{
    AuthorizedHeader,
    FooterComponent
}
}
</script>
<style lang="scss" scoped>
main{
    width: 100%;
    background-color: #EFF1F4;
    padding-top: 41px;
    padding-bottom: 64px;
}
.error {
    max-width: 1320px;
    width: 100%;
    height: 684px;
    margin: 0 auto;
    background: #0F0E0E;
    border-radius: 16px;
    position: relative;
}
.error__content {
    max-width: 486px;
  
    h2{
        color: #fff;
        position: relative;
        z-index: 7;
    }
}
.link {
    position: relative;
    z-index: 7;
}
.round {
    width: 556px;
    height: 556px;
    background: #005399;
    opacity: 0.6;
    filter: blur(336.29px);
    transform: matrix(-1, 0, 0, 1, 0, 0);
    position: absolute;
    left: 0;
    top: 0;
    z-index: 3;
}
.error__img {
    position: absolute;
    left: 0;bottom: 0;
}
.error__img_two {
    position: absolute;
    left: 0;bottom: 0;
}
.error__img_three {
    position: absolute;
    left: 0;bottom: 0;
}
</style>
