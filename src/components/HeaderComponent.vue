<template>
<header>
    <div class="header__container"> 
    <div class="logo">
        <img src="../assets/svg/HeaderLogo.svg" />
    </div>
    <div class="info__container">
        <div class="location">
                <img src="../assets/svg/locationWhite.svg" alt="">
                <p>Санкт-Петербург</p>
        </div>
        <div class="view">
                <img src="../assets/svg/eyeWhite.svg" alt="">
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
    max-width: 1340px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
}
.logo {
    display: flex;
    align-items: center;
    img{
        width: 100%;
    }
}
.info__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 520px;
    width: 100%;
    padding: 20px;
}
.location {
    background: rgba(255, 255, 255, 0.2);
border-radius: 12px;
padding: 12px;
display: flex;
align-items: center;
color: #fff;
font-family: 'Roboto', sans-serif;
img{
    margin-right: 12px;
}

}
.view {
    background: rgba(255, 255, 255, 0.2);
border-radius: 12px;
padding: 8px;
display: flex;
align-items: center;
justify-content: center;
}
.lang {
    background: rgba(255, 255, 255, 0.2);
border-radius: 12px;
 padding: 12px 7px 12px 7px;
display: flex;
align-items: center;
justify-content: center;
}
.login {
    display: flex;
    align-items: center;
    
background: rgba(255, 255, 255, 0.2);
border-radius: 12px;
max-width: 100px;
width: 100%;
}
.user__photo {
     padding: 8px;
    display: flex;
    justify-content: space-between;background: rgba(239, 239, 239, 0.3);
border-radius: 12px;
}

.menu {
    display: block;
    width: 25px;
    height: 2px;
    background-color:#fff;
    border-radius:15px;
    margin-left: 12px;
    position: relative;
    &::after{
        content: "";
          width: 25px;
    height: 2px;
    background-color:#fff;
    border-radius:15px;
    position: absolute;
    left: 0;
    top: 8px;
    }
        &::before{
        content: "";
          width: 25px;
    height: 2px;
    background-color:#fff;
    border-radius:15px;
    position: absolute;
    left: 0;
    bottom: 8px;
    }
}
@media screen and (max-width:1329px) {
    .header__container{
        margin-left: 20px;
        margin-right: 20px;
    }

}
@media screen and (max-width: 768px) {
    .lang,.view,.location{
        display: none;
    }
    .info__container{
        justify-content: end;
        max-width:136px;
    }
    .header__container{
        margin-top: 20px;
    }
}
</style>