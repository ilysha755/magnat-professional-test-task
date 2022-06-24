<template>
<header>
    <div class="header__container"> 
    <div class="logo">
        <img src="../assets/svg/HeaderLogo.svg" />
    </div>
    <div class="info__container">
        <div class="location">
                <img src="../assets/svg/location.svg" alt="">
                <p>Санкт-Петербург</p>
        </div>
        <div class="view">
                <img src="../assets/svg/eye.svg" alt="">
        </div>
        <div class="lang">
                <img src="../assets/svg/flag.svg" alt="">
        </div>
        <div class="login">
                <div class="user__photo">
                     <img src="../assets/svg/login.svg" alt="">
                </div>
                <span class="menu"></span>
        </div>
    </div>
    </div>

</header>

</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
header{
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
}
.header__container{
    max-width: 1320px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
}
.logo {
}
.info__container {
    display: flex;
    justify-content: space-between;
    max-width: 520px;
    width: 100%;
}
.location {
}
.view {
}
.lang {
}
.login {
}
.user__photo {
}
.menu {
}
</style>