<template>
<header-component/>
<main>
    <section class="welcome-screen">
        <div class="search__container">
            <fieldset>
                <legend>Путешествуй по России онлайн</legend>
                <div class="search__form">
                    <input type="text" placeholder="Например: экскурсия по Великому Новгороду" class="main__search">
                    <button>Найти</button>
                </div>
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
                    <div class="hashtag__item">
                        <p>#Видео</p>
                    </div>
                    <div class="hashtag__item">
                        <p>#360</p>
                    </div>
                    <div class="hashtag__item">
                        <p>#VR</p>
                    </div>
                    <div class="hashtag__item">
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
                        <div class="text__location">
                            <p>{{item.location}}</p>
                            <img src="../assets/svg/location__gray.svg" alt="">
                        </div>
                    </div>
                    <div class="like">
                        <img src="../assets/svg/like.svg" alt="">
                    </div>
                </div>
            </div>
            </div>
     <span class="more-places">Посмотреть все места</span>
        </div>
    </section>
    <section class="vr-tour">
        <div class="vr-tour__container">
        <h2>Выбери виртуальный тур <br> <span>Видео, VR, Видео 360, 3D</span></h2>
        <div class="vr__container">
            
               <div class="vr__item" @click="isFlipped(item)" v-for="item in vrTour" :key="item.id" :style="{backgroundColor:item.color, transform:`rotateY(${item.isRotate}deg)`}">
                <div class="vr__item_front">
                <p>{{item.num}}</p>
                <span class="leftnum">{{item.backnum}}</span>
                <span class="rightnum">{{item.backnum}}</span>
                </div>
                 <div class="vr__item_back">
                     <img :src="require(`@/assets/interesting_items/${item.id}.png`)" />
                     <p>{{item.desc}}</p>
                     <router-link  :style="{color: item.color}" to="/">Выбрать тур</router-link>
                </div>    
                </div>

        </div>
        </div>
     
    </section>
    <section class="top-regions">
        <div class="regions__container">
              <h2>Топ посещаемых регионов</h2>
            <div class="items__container region">
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
                <span class="round">
                   
                </span>
                 <span class="white__round"></span>
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
    FooterComponent,

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
        ],
        vrTour:[
            {id:0, desc:'Медный всадник', backnum:'0',num:'0' ,color:'#22C56D', isRotate:0},
            {id:1, desc:'Родина-мать', backnum:'1',num:'01' ,color:'#3c6dee', isRotate:0},
            {id:2, desc:'Памятник Пушкину', backnum:'2',num:'02' ,color:'#FF7844', isRotate:0},
            {id:3, desc:'Кремль', backnum:'3',num:'03' ,color:'#7B61FF', isRotate:0}
        ],
    }
}, 

methods: {
      isFlipped(item){
        item.isRotate += 180
      }
}
}
</script>
<style lang="scss" scoped>
 main{
    width: 100%;
    background: #EFF1F4;
}
.welcome-screen {
    width: 100%;
    height: 100vh;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    background-image: url('../assets/MainImage.png');
    background-position: center;
    background-size: cover;
}
.search__container {
    max-width: 1320px;
    width: 100%;
}
.search__form{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    background-color: #fff;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    border-radius: 12px;
    
   input{
        text-align: center;
        font-size: 18px;
        border-radius: 12px;
        color: #0F0E0E;
   }
    button{
        color: #fff;
        border: none;
        background-color: #D1AC75;
        border-radius: 8px;
        width: 124px;
        height: 48px;
        margin-right: 8px;
    }
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
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin: 0 auto;
    max-width: 713px;
    width: 100%;
    margin-top: 32px;
    margin-bottom: 24px;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    -ms-flex-wrap: wrap;
        flex-wrap: wrap;
}
.common__item {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 12px;
    padding: 16px 24px;
    gap: 10px;
    cursor: pointer;
    max-width: 276px;
   
    -webkit-box-pack: center;
   
        -ms-flex-pack: center;
   
            justify-content: center;
p{
    color: #fff;
    font-size: 18px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    white-space: nowrap;
}
}
.hashtags {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    max-width: 440px;
    margin: 0 auto;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    -ms-flex-wrap: wrap;
        flex-wrap: wrap;
}
.hashtag__item {
    max-width: 98px;
    width: 100%;
    text-align: center;
    padding: 10px;
    cursor: pointer;
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
    margin: 96px auto;
    h2{
        margin-bottom: 32px;
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        font-size: 36px;
    }
}
.items__container{
    max-width: 1320px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    -ms-flex-wrap: wrap;
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
    max-width:75px;
    gap: 10px;
    left: 6%;
    top: 6%;
    padding: 4.5px;
    color: #fff;
    border-radius: 8px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
}
.interesting__desc {
    padding: 24px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    h3{
        margin-bottom: 9.5px;
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
    }
    p{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        color:#9EA6B6;
    }
}
.interesting__text {
}
.text__location{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    p{
        margin-right: 10px;
    }
}
.like {
}
.more-places {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    color: #fff;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    width: 100%;
    height: 56px;
    background: #005399;
    border-radius: 16px;
    cursor: pointer;
    margin-top: 76px;
}
.vr-tour {
    width: 100%;
    background-color: #001420;
}
.vr-tour__container {
    max-width: 1320px;
    margin: 0 auto;
    padding-top: 96px;
    padding-bottom: 110px;
    h2{
        color: #fff;
        font-size: 36px;
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        margin-bottom: 53px;
        span{
            color: #818DA4;
            font-family: 'Inter', sans-serif;
            font-weight: 400;
            font-size: 14px;
        }
    }
}
.vr__container {
    max-width: 1320px;
    margin: 0 auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
        flex-wrap: wrap;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
}
.vr__item {
    max-width: 280px;
    width:100%;
    height: 395px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    border: 1px solid #D2D2D2;
    border-radius: 20px;
    position: relative;
    -webkit-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
    -webkit-transition: -webkit-transform 1s;
    transition: -webkit-transform 1s;
    -o-transition: transform 1s;
    transition: transform 1s;
    transition: transform 1s, -webkit-transform 1s;
    -webkit-transform-style: preserve-3d;
            transform-style: preserve-3d;
    p{
    font-size:96px;
    font-family: 'Inter', sans-serif;
    color:#fff;
    }
    position: relative;
}

.vr__item_back{
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
    -webkit-transform: rotateY(180deg);
            transform: rotateY(180deg);
    position:absolute;
    left:0;
    top:0;
    img{
        width: 100%;
        height: auto;
        border-radius: 20px;
    }
    p{
        font-size: 18px;
        text-align: center;
        margin-top: 20px;
    }
    a{
        width: 80%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        height: 35px;
        -webkit-box-pack: center;
            -ms-flex-pack: center;
                justify-content: center;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
        background-color: #fff;
        text-align: center;
        text-decoration: none;
        font-family: 'Roboto', sans-serif;
        margin: 30px auto;
        border-radius:18px;
    }
}
.vr__item_front{
    -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
}
.leftnum {
    position: absolute;
    left: 21px;
    top: 26px;
    font-size:48px;
    font-family: 'Inter', sans-serif;
    color:#fff;
}
.rightnum {
    position: absolute;
    right: 22px;
    bottom: 27px;
    font-size:48px;
    font-family: 'Inter', sans-serif;
    color:#fff;
}

.top-regions {
    margin-top: 96px;
}
.regions__container {
    max-width: 1320px;
    margin: 0 auto;
    margin-bottom: 96px;
    h2{
        font-family: 'Roboto', sans-serif;
        font-size: 36px;
        font-weight: 500;
        margin-bottom: 32px;
    }
}
.regions__item {
    max-width: 312px;
    background-color: #fff;
    border-radius: 16px;
    cursor: pointer;
}
.regions__img {
}
.regions__desc {
    padding: 24px;
    h3{
        max-width: 220px;
        font-size: 18px;
        font-family: 'Roboto', sans-serif;
    }
}
.choose {
    background:url('../assets/choose_mask.png'),#FF7844 ;
}
.choose__container {
    padding-bottom: 96px;
    margin: 0 auto;
    padding-top: 96px;
    h2{
        margin-bottom: 32px;
        color: #fff;
        font-family: 'Roboto', sans-serif;
        font-size: 36px;
        max-width: 1320px;
        margin: 0 auto;
        margin-bottom: 32px;
    }
}
.choose__items_container {
   
    display: -webkit-box;
   
    display: -ms-flexbox;
   
    display: flex;
    overflow-x:scroll ;
    scroll-padding: 0 50%;
    -ms-scroll-snap-type: x mandatory;
        scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar { width: 0; }
     -ms-overflow-style: none;
}
.choose__item {
    min-width: 312px;
    min-height: 445px;
    background: #001420;
    -webkit-box-shadow: 0px 8px 10px rgba(156, 164, 169, 0.2);
            box-shadow: 0px 8px 10px rgba(156, 164, 169, 0.2);
    border-radius: 24px;
    scroll-snap-align: start;
    color: #fff;
    margin-right: 15px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -ms-flex-pack: distribute;
        justify-content: space-around;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    padding: 40px;
    cursor: -webkit-grab;
    cursor: grab;
    h3{
        -webkit-user-select: none;
           -moz-user-select: none;
            -ms-user-select: none;
                user-select: none;
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        font-size: 28px;
        text-align: center;
    }
}
.choose__img {
    width: 150px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    height: 150px;
    background: -o-radial-gradient(0% 0%, 100% 100%, rgba(250, 250, 250, 0.2) 0%, rgba(247, 247, 247, 0) 100%);
    background: radial-gradient(100% 100% at 0% 0%, rgba(250, 250, 250, 0.2) 0%, rgba(247, 247, 247, 0) 100%);
    -webkit-backdrop-filter: blur(24px);
            backdrop-filter: blur(24px);
    border-radius: 38px;
}
.video {
    width: 100%;
    margin-top: 96px;
}
.video__container {
    max-width: 1320px;
    width: 100%;
    background-color: #D1AC75;
    border-radius: 16px;
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    -webkit-box-align: center;
        -ms-flex-align: center;
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
        margin-bottom: 16px;
    }
    p{
        font-family: 'Roboto', sans-serif;
        font-weight: 400; 
        margin-bottom: 24px;
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
        white-space: nowrap;
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
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-align: center;
        -ms-flex-align: center;
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
    position: absolute;
       right: 0%;
    top: 43%;
    background-color: #fff;
    border-radius:50%;
    
}
@media screen and (max-width: 1343px) {
  .search__container {
    margin-left: 20px;
    margin-right: 20px;
  }  
  .interesting__container,.choose__container,.regions__container{
     h2{
        margin-left: 20px;
    }
  }
  .items__container,.vr-tour__container{
    margin-left: 20px;
    margin-right: 20px;
   
  }
  .vr__container{
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
  }
  .vr__item,.regions__item{
    margin-right: 20px;
    margin-bottom: 20px;
  }
}
@media screen and (max-width:723px) {
    .common{
        -webkit-box-pack: center;
            -ms-flex-pack: center;
                justify-content: center;
    }
    .common__item{
        margin-right: 20px;
        margin-bottom: 20px;
    }
    
}
@media screen and (max-width: 663px) {
    .interesting__item,.vr__item,.regions__item{
        max-width: 100%;
        width: 100%;
    }
    .vr__item{
        height: 435px;
    }
    .vr__item_back{
        img{
            max-height: 280px;
            height: 100%;
        }
    }
    .interesting__img,.regions__img{
        img{
            width: 100%;
        }
    }
    .region{
        margin-right: 0;
    }
    .vr__item{
        max-width: 100%;
    }
    .vr-tour__container{
        margin-right: 0;
    }
    .video__container{
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
    }
    .video__text{
        padding-top: 30px;
        margin-left: 20px;
        margin-bottom: 30px;
    }
    .round{
        right: -30%;
        top: 55%;
    }
    .white__round{
        right: -19%;
    top: 68%;
    }
}
@media screen and (max-width: 563px) {
    .main__search{
        &::-webkit-input-placeholder{
            font-size: 12px;
        }
        &::-moz-placeholder{
            font-size: 12px;
        }
        &:-ms-input-placeholder{
            font-size: 12px;
        }
        &::-ms-input-placeholder{
            font-size: 12px;
        }
        &::placeholder{
            font-size: 12px;
        }
    }
}
@media screen and (max-width: 471px) {
  .search__container{
    fieldset{
        legend{
            font-size: 32px;
        }
    }
  }  
  .hashtags{
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
  }
  .hashtag__item{
    margin-right: 20px;
    margin-bottom: 20px;
  }
}
@media screen and (max-width: 403px) {
    .main__search{
        &::-webkit-input-placeholder{
            font-size: 8px;
        }
        &::-moz-placeholder{
            font-size: 8px;
        }
        &:-ms-input-placeholder{
            font-size: 8px;
        }
        &::-ms-input-placeholder{
            font-size: 8px;
        }
        &::placeholder{
            font-size: 8px;
        }
    }
}
</style>
