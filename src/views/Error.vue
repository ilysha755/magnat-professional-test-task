<template>
<authorized-header/>
<main>
    <div class="error">
       <div class="error__content">
         <img src="../assets/404.png" alt="">
        <h2>Нам жаль, но страница не найдена.</h2>
        <div class="error__img_three">
            <img src="../assets/error_2.png" alt="error" >
        </div>
        <span class="round"></span>
       </div>
         <router-link to="/" class="link">Перейти на главную</router-link>
        <div class="error__img">
            <img src="../assets/error.png" alt="error" >
        </div>
        <div class="error__img_two">
            <img src="../assets/error_1.png" alt="error" >
        </div>
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
    overflow: hidden;
    display: flex;
        justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
}
.error__content {
    max-width: 486px;
    text-align: center;
    position: relative;
    z-index: 9;
    h2{
        max-width: 352px;
        color: #fff;
        position: relative;
        z-index: 7;
        font-size: 32px;
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        margin: 0 auto;
}
img{
    width:100%;
}
}
.link {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    z-index: 9;
    height: 56px;
    text-decoration: none;
    color: #fff;
    width: 90%;
    background-color: #005399;
    border-radius: 16px;
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
    left: 10%;
    top: 9%;
    background: radial-gradient(100% 100% at 0% 0%, rgba(250, 250, 250, 0.2) 0%, rgba(247, 247, 247, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
backdrop-filter: blur(36.1848px);
border-radius: 42.8182px;
transform: rotate(-30deg);
filter: drop-shadow(-10px -8px 43px rgba(255, 255, 255, 0.15));
}
.error__img_two {
    position: absolute;
    right: 25%;
    top: 10%;
background: radial-gradient(100% 100% at 0% 0%, rgba(250, 250, 250, 0.2) 0%, rgba(247, 247, 247, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
backdrop-filter: blur(13.3603px);
border-radius: 12px;
transform: rotate(30deg);
}
.error__img_three {
    position: absolute;
    right: -20%;
    bottom: 10%;
    background: radial-gradient(100% 100% at 0% 0%, rgba(250, 250, 250, 0.2) 0%, rgba(247, 247, 247, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
backdrop-filter: blur(13.3603px);
border-radius: 21.1538px;
transform: rotate(30deg);
}
@media screen and (max-width: 1329px) {
    .error__content{
        margin-left: 20px;
        margin-right: 20px;
    }
}
@media screen and (max-width:701px) {
    .error__img_three{
        display: none;
    }
}
</style>
