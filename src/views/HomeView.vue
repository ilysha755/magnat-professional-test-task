<template>
<header-component/>
<main>
    <section class="welcome-screen">
        <div class="search__container">
            <fieldset>
                <legend>Путешествуй по России онлайн</legend>
                <input type="text" class="main__search">
            </fieldset>
            <div class="filter">
                <div class="common">
                    <div class="common__item">
                        <p>Проморолик</p>
                        <img src="../assets/svg/cam.svg" alt="">
                    </div>
                    <div class="common__item">
                        <p>Поиск по карте</p>
                        <img src="../assets/svg/search.svg" alt="">
                    </div>
                    <div class="common__item">
                        <p>Идеи для путешествий</p>
                        <img src="../assets/svg/map.svg" alt="">
                    </div>
                </div>
                <div class="hashtags">
                    <div class="hastag__item">
                        <p>#Видео</p>
                    </div>
                    <div class="hastag__item">
                        <p>#360</p>
                    </div>
                    <div class="hastag__item">
                        <p>#VR</p>
                    </div>
                    <div class="hastag__item">
                        <p>#3D</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="interesting__places">
        <div class="interesting__container">
               <h2>Интересные места</h2>
            <div class="items__container">
        <div class="interesting__item" v-for="item in  interesting" :key="item.id">
                <div class="interesting__img">
                   <img :src="require(`@/assets/interesting_items/${item.id}.png`)" />
                   <span class="sticker" :style="{backgroundColor:item.stickercolor}">{{item.sticker}}</span>
                </div>
                <div class="interesting__desc">
                    <div class="interesting__text">
                        <h3>{{item.desc}}</h3>
                        <p>{{item.location}}</p>
                    </div>
                    <div class="like">

                    </div>
                </div>
            </div>
            </div>
     <span class="more-places">Посмотреть все места</span>
        </div>
    </section>
    <!-- <section class="vr-tour">
        <h2>Выбери виртуальный тур <br> <span>Видео, VR, Видео 360, 3D</span></h2>
        <div class="vr__container">
            <div class="vr__item">

            </div>
        </div>
    </section> -->
    <section class="top-regions">
      
        <div class="regions__container">
              <h2>Топ посещаемых регионов</h2>
            <div class="items__container">
                <div class="regions__item" v-for="item in top_regions" :key="item.id">
                <div class="regions__img">
                   <img :src="require(`@/assets/top_regions/${item.id}.png`)" />
                </div>
                <div class="regions__desc">
                    <h3>{{item.desc}}</h3>
                </div>
            </div>
            </div>
        
        </div>
    </section>
    <section class="choose">
        
        <div class="choose__container">
            <h2>Выбери тур</h2>
            <div class="choose__items_container">
            <div class="choose__item" v-for="item in choose_tour" :key="item.id">
                <div class="choose__img">
                   <img :src="require(`@/assets/choose_tour/${item.img}.png`)" />
                </div>
                <h3>{{item.desc}}</h3>
            </div>
            </div>
        </div>
    </section>
    <section class="video">
        <div class="video__container">
            <div class="video__text">
                <h2>Хотите получать видео на почту каждый месяц?</h2>
                <p>Для этого нужно всего лишь оформить абсолютно бесплатную подписку на нашем портале!</p>
                <router-link to="/">Оформить подписку</router-link>
            </div>
            <div class="video__photo">
                <img src="../assets/3dcam.png" alt="">
                <div class="round">
                    <span class="white__round"></span>
                </div>
            </div>
        </div>
    </section>
</main>
<footer-component/>
</template>
<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
export default {
components:{
    HeaderComponent,
    FooterComponent
},
data(){
    return{
        interesting:[
            {id:0, desc:'Медный всадник', location:'Санкт-Петербург', sticker:'360', stickercolor:'#FF7844'},
            {id:1, desc:'Родина-мать', location:'Волгоград', sticker:'Видео', stickercolor:'#40B3E0'},
            {id:2, desc:'Памятник Пушкну', location:'Санкт-Петербург', sticker:'3D', stickercolor:'#22C56D'},
            {id:3, desc:'Кремль', location:'Москва', sticker:'3D', stickercolor:'#22C56D'},
            {id:4, desc:'Петергоф', location:'Санкт-Петербург', sticker:'360', stickercolor:'#FF7844'},
            {id:5, desc:'Озеро Байкал', location:'Иркутск', sticker:'3D', stickercolor:'#22C56D'},
            {id:6, desc:'Музей Эрарта', location:'Санкт-Петербург', sticker:'360', stickercolor:'#FF7844'},
            {id:7, desc:'Эрмитаж', location:'Санкт-Петербург', sticker:'Видео', stickercolor:'#40B3E0'},
        ],
        top_regions:[
            {id:0 ,desc:'Москва и Московская область'},
            {id:1 ,desc:'Санкт-Петербург и Ленинградская область'},
            {id:2 ,desc:'Иркутская область'},
            {id:3 ,desc:'Калининградская область'},
        ],
        choose_tour:[
            {id:0, desc:'Активные туры', img:0},
            {id:1, desc:'Гастрономические туры', img:1},
            {id:2, desc:'Экстримальные туры', img:2},
            {id:3, desc:'Оздоровительные туры', img:3},
            {id:4, desc:'Круизы', img:4},
            {id:5, desc:'Активные туры', img:0},
            {id:6, desc:'Гастрономические туры', img:1},
            {id:7, desc:'Экстримальные туры', img:2},
            {id:8, desc:'Оздоровительные туры', img:3},
            {id:9, desc:'Круизы', img:4},
        ]

    }
}
}
</script>
<style lang="scss" scoped>
main{
    width: 100%;
}
.welcome-screen {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('../assets/MainImage.png');
    background-position: center;
    background-size: cover;
}
.search__container {
    max-width: 1320px;
    width: 100%;
}
fieldset{
    text-align: center;
    border: none;
    legend{
        color: #fff;
        font-size: 72px;
        font-family: 'Roboto', sans-serif;
        font-weight: 900;
        margin-bottom: 32px;
    }
}
.main__search {
    width: 100%;
    border: none;
    height: 64px;
}
.filter {
}
.common {
    display: flex;
    margin: 0 auto;
    max-width: 713px;
    width: 100%;
    margin-top: 32px;
    margin-bottom: 24px;
    justify-content: space-between;
}
.common__item {
    display: flex;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 12px;
    max-width: 276px;
    width: 100%;
    justify-content: center;
p{
    color: #fff;
    font-size: 18px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
}
}
.hashtags {
    display: flex;
    justify-content: space-between;
}
.hastag__item {
    max-width: 98px;
    width: 100%;
    text-align: center;
    padding: 10px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 12px;
    
p{
    color: #fff;
    font-size: 18px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
}
}
.interesting__places {
    width: 100%;
    background-color: #EFF1F4;
}
.interesting__container {
    max-width: 1320px;
    width: 100%;
    margin: 0 auto;
}
.items__container{
    max-width: 1320px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0 auto;
}
.interesting__item {
    max-width: 312px;
    width: 100%;
    background-color: #fff;
    margin-bottom: 24px;
    border-radius: 16px;
    cursor: pointer;
}
.interesting__img {
    position: relative;
}
.sticker {
    position: absolute;
    left: 2%;
    top: 3%;
    padding: 4.5px;
    color: #fff;
    border-radius: 8px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
}
.interesting__desc {
}
.interesting__text {
}
.like {
}
.more-places {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    width: 100%;
    height: 56px;
    background: #005399;
    border-radius: 16px;
    cursor: pointer;
}
.top-regions {
}
.regions__container {
    max-width: 1320px;
    margin: 0 auto;
}
.items__container {
}
.regions__item {
}
.regions__img {
}
.regions__desc {
}
.choose {
    background:url('../assets/choose_mask.png'),#FF7844 ;

}
.choose__container {
    max-width:1320px;
    margin: 0 auto;
}
.choose__items_container {
    max-width: 1320px;
    width: 100vw;
    margin: 0 auto;
    display: flex;
    overflow-x:scroll ;
    scroll-padding: 0 50%;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar { width: 0; }
     -ms-overflow-style: none;
}
.choose__item {
    min-width: 312px;
    min-height: 445px;
    background: #001420;
    box-shadow: 0px 8px 10px rgba(156, 164, 169, 0.2);
    border-radius: 24px;
    scroll-snap-align: start;
    color: #fff;
    margin-right: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px;
    cursor: pointer;
    h3{
        user-select: none;
    }
}
.choose__img {
    
}
.video {
    width: 100%;

}
.video__container {
    max-width: 1320px;
    width: 100%;
    background-color: #D1AC75;
    border-radius: 16px;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    overflow: hidden;
}
.video__text {
    color: #fff;
    margin-left: 48px;
    max-width: 597px;
    h2{
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        font-size: 32px;
    }
    p{
        font-family: 'Roboto', sans-serif;
        font-weight: 400; 
    }
    a{
        display: block;
        text-align: center;
        max-width:228px;
        text-decoration: none;
        background-color: #fff;
        color: #D1AC75;
        padding: 16px 48px;
        border-radius:16px;
        font-size: 14px;
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
    }
}
.video__photo {
    img{
        position: relative;
        z-index: 3;
    }
}
.round {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    right: -4%;
    top: 20%;
    z-index: 1;
    width: 426px;
    height: 426px;
    background-color: #EFE3C7;
    border-radius:50%;
    opacity: 0.56;
}
.white__round {
    width: 307px;
    height:307px;
    display: block;
    background-color: #fff;
    border-radius:50%;
    z-index: 5;
}
</style>
