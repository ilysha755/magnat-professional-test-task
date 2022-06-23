<template>
<authorized-header/>
<main>
    <section class="welcome-screen">
        <div class="search__container">
            <fieldset>
                <legend>Путешествуй по России онлайн</legend>
                <input type="text" class="main__search">
            </fieldset>
            <div class="filter">
                <div class="common">
                    <div class="common__item"></div>
                    <div class="common__item"></div>
                    <div class="common__item"></div>
                </div>
                <div class="hashtags">
                    <div class="hastag__item"></div>
                    <div class="hastag__item"></div>
                    <div class="hastag__item"></div>
                    <div class="hastag__item"></div>
                </div>
            </div>
        </div>
    </section>
    <section class="interesting__places">
        <h2>Интересные места</h2>
        <div class="interesting__container">
       
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
    </section>
    <section class="vr-tour">
        <h2>Выбери виртуальный тур <br> <span>Видео, VR, Видео 360, 3D</span></h2>
        <div class="vr__container">
            <div class="vr__item">

            </div>
        </div>
    </section>
    <section class="top-regions">
        <h2>Топ посещаемых регионов</h2>
        <div class="regions__container">
            <div class="regions__item">
                <div class="regions__img">
                    <img src="" alt="">
                </div>
                <div class="regions__desc">
                    <p></p>
                </div>
            </div>
        </div>
    </section>
    <section class="choose">
        <h2>Выбери тур</h2>
        <div class="choose__container">
            <div class="choose__item">
                <div class="choose__img">
                    <img src="" alt="">
                </div>
                <h3></h3>
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
                <img src="" alt="">
                <span class="round"></span>
            </div>
        </div>
    </section>
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

    }
}
}
</script>
<style lang="scss" scoped>

</style>
