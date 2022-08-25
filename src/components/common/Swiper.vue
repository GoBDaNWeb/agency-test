<template>
    <swiper :modules="modules" :navigation="true" :pagination="true">
        <ul class="slider-nav">
            <li>Главная</li>
            <li>Продукты</li>
            <li>Краски</li>
        </ul>
        <swiper-slide>
            Одежда 1
            <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas placeat totam
            </span>
        </swiper-slide>
        <swiper-slide>
            Одежда 2
            <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas placeat totam
            </span>
        </swiper-slide>
        <swiper-slide>
            Одежда 3
            <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas placeat totam
            </span></swiper-slide
        >
    </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Navigation, Pagination, A11y],
        };
    },
};
</script>

<style>
.slider-nav {
    position: absolute;
    top: 7rem;
    left: 4rem;
    display: flex;
    gap: 1rem;
    color: rgba(255, 255, 255, 0.3);
}
.swiper {
    background-image: url('@/assets/sliderImg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding: 6.3rem 0 0;
    position: relative;
}
.swiper-wrapper {
    background-position: center;
    background-repeat: no-repeat;
    height: 560px;
}
.swiper-slide {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 72px;
}
.swiper-slide span {
    font-size: 16px;
    text-align: center;
}
.swiper-pagination {
    background: rgba(0, 0, 0, 0.4);
    border-radius: 16px;
    width: 124px;
    height: 32px;
}
.swiper-pagination-bullet {
    background: #ffffff;
}
.swiper-button-prev,
.swiper-button-next {
    color: #fff;
}
.swiper-button-disabled {
    display: none;
}
.swiper-button-next,
.swiper-rtl .swiper-button-prev {
    right: 20%;
}
.swiper-button-prev,
.swiper-rtl .swiper-button-next {
    left: 20%;
}
.swiper-horizontal > .swiper-pagination-bullets,
.swiper-pagination-bullets.swiper-pagination-horizontal,
.swiper-pagination-custom,
.swiper-pagination-fraction {
    right: 0;
    left: 0;
    bottom: 39px;
    margin: 0 auto;
    width: 124px;
    height: 32px;
}

@media (max-width: 1225px) {
    .swiper-slide {
        font-size: 42px;
        padding: 0 1rem;
    }
    .swiper-slide span {
        font-size: 13px;
    }
    .swiper-button-next,
    .swiper-rtl .swiper-button-prev {
        right: 10%;
        top: 80%;
    }
    .swiper-button-prev,
    .swiper-rtl .swiper-button-next {
        left: 10%;
        top: 80%;
    }
}
@media (max-width: 675px) {
    .slider-nav {
        left: 1rem;
    }
}
</style>
