<template>
    <header>
        <div class="header__container">
            <div class="logo">
                <img src="../assets/svg/AuthorizedHeader.svg" alt="">
            </div>
            <input type="text" class="search">
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
            <div class="user__profile">
                <div class="user__photo">
                    <img src="../assets/user.png" alt="">
                </div>
                <span class="menu"></span>
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
    background-color:#fff;
    border-radius: 0px 0px 8px 8px;
    filter: drop-shadow(0px 8px 10px rgba(156, 164, 169, 0.2));
}
.header__container {
    max-width: 1340px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
}
.logo {
}
.search {
    max-width: 563px;
    width: 100%;
    height: 48px;
    background-color: #EFEFEF;
    border-radius: 12px;
    border: none;
}
.location {
    display: flex;
    align-items: center;
    background: #EFEFEF;
    border-radius: 12px;
    padding: 12px 16px 12px 21px;
    p{
     font-family: 'Roboto', sans-serif;
     font-weight: 500;
    }
}
.view {
    background: #EFEFEF;
    border-radius: 12px;
    padding: 8px;
}
.lang {
    background: #EFEFEF;
    border-radius: 12px;
    padding: 12px 7px 12px 7px;
}
.user__profile {
    background: #EFEFEF;
    border-radius: 12px;
    display: flex;
    align-items: center;
}
.user__photo {
    margin-right: 10px;
}
.menu {
    display: block;
    width: 24px;
    height: 2px;
    background-color: #005399;
    margin-right: 14px;
    position: relative;
    border-radius:15px;
    &::before{
        content: "";
        position: absolute;
        width: 24px;
        height: 2px;
        left: 0;
        top: 8px;
        background-color: #005399;
        border-radius:15px;
    }
        &::after{
        content: "";
        position: absolute;
        width: 24px;
        height: 2px;
        left: 0;
        bottom: 8px;
        background-color: #005399;
        border-radius:15px;
    }
}
</style>