<template>
    <footer>
        <div class="footer__container">
            <div class="footer-top">
                <div class="footer-text">
                    <img src="../assets/svg/AuthorizedHeader.svg" alt="">
                    <p>RT360.RU – это возможность увидеть памятные места, музеи, императорские дворцы, театры, древние и современные города, храмовые комплексы и уникальные природные достопримечательности многонациональной и такой разной России.</p>
                </div>

                <div class="footer-nav">
                    <div class="main-links">
                        <p>Основное</p>
                        
                        <router-link to="/" class="footer-links">Главная</router-link>
                        <router-link to="/" class="footer-links">Интересные места</router-link>
                        <router-link to="/" class="footer-links">Подбери себе виртуальный тур</router-link>
                        <router-link to="/" class="footer-links">Топ посещаемых регионов</router-link>
                        <router-link to="/" class="footer-links">Идеи для 3D тура</router-link>
                        <router-link to="/" class="footer-links">Журнал</router-link>
                        <router-link to="/" class="footer-links">Наш инстаграм</router-link>
                    </div>
                    <div class="about-links">
                        <p>О нас</p>
                        
                        <router-link to="/" class="footer-links">О проекте</router-link>
                        <router-link to="/" class="footer-links">FAQ</router-link>
                        <router-link to="/" class="footer-links">Связаться с нами</router-link>
                    </div>
                    <div class="social-links">
                        <p>Соц сети</p>
                        <div class="social__icons">
                        <a href="#"><img src="../assets/svg/fb.svg" alt=""></a>
                        <a href="#"><img src="../assets/svg/dzen.svg" alt=""></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>© 2021 Rodnye prostory. All rights reserved</p>
                <div class="contacts">
                    <a href="tel:+79992321111">+7 (999) 232 - 1 - 111</a>
                    <a href="tel:+79218882232 ">+7 (921) 888 - 22 - 32 </a>
                    <a href="mailto:rodniyeprostory@gmail.ru">rodniyeprostory@gmail.ru</a>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
footer{
    width: 100%;
    background-color: #EFF1F4;
    padding-bottom: 32px;
 
}
.footer__container {
    max-width: 1320px;
    margin: 0 auto;
    padding-top: 64px;
    
}
.footer-top {
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #818DA4;
    border-bottom: 1px solid #818DA4;
    padding-top: 63px;
    padding-bottom: 64px;
}
.footer-text {
    img{
        margin-bottom: 31px;
    }
    p{
        max-width: 584px;
        color:#818DA4;
        font-size: 16px;
        font-family: 'Inter', sans-serif;
        font-weight: 400;
    }
}
.footer-nav {
    max-width: 619px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: relative;
     &::before {
        content: "";
        position: absolute;
        left: -40%;
        top: 50%;
        width: 67%;
        height: 1px;
        background-color: #818DA4;
        transform: rotate(90deg);
      }
}
.main-links {
      display: flex;  
      flex-direction: column;
      margin-left: 20px;
      position: relative;
      p{
        color:#818DA4;
        font-weight: 400;
        font-family: 'Roboto', sans-serif;
        margin-bottom: 24px;
      }
   
}
.footer-links {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    text-decoration: none;
    color: #000;
    margin-bottom: 16px;
}
.about-links {
    display: flex;
    flex-direction: column;
    p{
        color:#818DA4;
        font-weight: 400;
        font-family: 'Roboto', sans-serif;
        margin-bottom: 24px;
    }
}
.social-links {
p{
       color:#818DA4;
        font-weight: 400;
        font-family: 'Roboto', sans-serif;
        margin-bottom: 24px;
}
}
.footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: end;
    margin-top: 32px;
    margin-bottom: 32px;
    color:#818DA4;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
}
.social__icons{
    margin-left: -8px;
    display: flex;
    :nth-child(2){
        margin-top: 2px;
    }
}
.contacts {   
   
    a{
        display: block;
        text-decoration: none;
        color:#818DA4;
        margin-bottom: 8px;
        font-weight: 400;
        font-family: 'Roboto', sans-serif;
     
    }
}
@media screen and (max-width: 1331px) {
    .footer__container{
        margin-left: 20px;
        margin-right: 20px;
    }
}
@media screen and (max-width: 1276px) {
    .footer-nav {

     &::before {
        display: none;
      }
}
}
@media screen and (max-width: 943px) {
    .footer-top{
        flex-direction: column;
    }
    .footer-text{
        margin-bottom: 20px;
    }
    .footer-nav{
        margin-top: 20px;
        flex-wrap: wrap;
    }
    .social-links{
        margin-left: 20px;
    }
}
@media screen and (max-width: 427px) {
    .footer-nav{
        flex-direction:column;
    }
      .about-links{
        margin-left: 20px;
        margin-bottom: 20px;
        margin-top: 20px;
    }
    .footer-bottom{
        flex-direction: column;
        p{
            margin-bottom: 20px;
            text-align: end;
        }
    }
}
</style>