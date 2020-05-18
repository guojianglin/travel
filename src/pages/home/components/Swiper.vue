<template>
  <swiper :options="swiperOptions">
    <swiper-slide class="container-swiper">
      <img class="swiper-img" src="https://th.bing.com/th/id/OIP.T2USvl6qerPRnWGM7XUydQHaD5?pid=Api&rs=1">
    </swiper-slide>
    <swiper-slide>
      <img class="swiper-img" src="https://th.bing.com/th/id/OIP.MASmSGUEiRwOc86zsRb1OwHaEK?pid=Api&rs=1">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: {
          stopOnLastSlide: false
        },
        loop: true
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  >>> .swiper-pagination-bullet-active
    background #ffffff
  .swiper-img
    width:100%
    height 31.25vw
    object-fit cover
    background #ccc
</style>
