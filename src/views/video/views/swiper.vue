<template>
    <div>
        <div style="height:100vh">
            <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
                <swiper-slide class="slide-1"></swiper-slide>
                <swiper-slide class="slide-2"></swiper-slide>
                <swiper-slide class="slide-3"></swiper-slide>
                <swiper-slide class="slide-4"></swiper-slide>
                <swiper-slide class="slide-5"></swiper-slide>
                <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
                <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
            </swiper>
            <!-- swiper2 Thumbs -->
            <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs">
                <swiper-slide class="slide-1"></swiper-slide>
                <swiper-slide class="slide-2"></swiper-slide>
                <swiper-slide class="slide-3"></swiper-slide>
                <swiper-slide class="slide-4"></swiper-slide>
                <swiper-slide class="slide-5"></swiper-slide>
            </swiper>
        </div>
    </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
  export default {
    data() {
      return {
        swiperOptionTop: {
          spaceBetween: 10,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        },
        swiperOptionThumbs: {
          spaceBetween: 10,
          centeredSlides: true,
          slidesPerView: 'auto',
          touchRatio: 0.2,
          slideToClickedSlide: true
        }
      }
    },
    mounted() {
      this.$nextTick(() => {
        const swiperTop = this.$refs.swiperTop.swiper
        const swiperThumbs = this.$refs.swiperThumbs.swiper
        swiperTop.controller.control = swiperThumbs
        swiperThumbs.controller.control = swiperTop
      })
    }
  }
</script>

<style lang="scss" scoped>
  .swiper-container {
    background-color: #000;
  }
  .swiper-slide {
    background-size: cover;
    background-position: center;
    // &.slide-1 {
    //   background-image:url('../../../assets/images/bgCourse.jpg');
    // }
    // &.slide-2 {
    //   background-image:url('../../../assets/images/bgCourse.jpg');
    // }
    // &.slide-3 {
    //   background-image:url('../../../assets/images/bgCourse.jpg');
    // }
    // &.slide-4 {
    //   background-image:url('../../../assets/images/bgCourse.jpg');
    // }
    // &.slide-5 {
    //   background-image:url('../../../assets/images/bgCourse.jpg');
    // }
  }
  .gallery-top {
    height: 80%!important;
    width: 100%;
  }
  .gallery-thumbs {
    height: 20%!important;
    box-sizing: border-box;
    padding: 10px 0;
  }
  .gallery-thumbs .swiper-slide {
    width: 25%;
    height: 100%;
    opacity: 0.4;
  }
  .gallery-thumbs .swiper-slide-active {
    opacity: 1;
  }
</style>

