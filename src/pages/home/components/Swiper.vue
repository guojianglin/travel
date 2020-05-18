<template>
  <swiper :options="swiperOptions">
    <swiper-slide class="container-swiper" v-for="item of swiperList" :key="item.id">
      <img class="swiper-img" :src="item.imgUrl">
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
      },
      swiperList: [
        {
          id: 1,
          imgUrl: 'https://th.bing.com/th/id/OIP.T2USvl6qerPRnWGM7XUydQHaD5?pid=Api&rs=1'
        },
        {
          id: 2,
          imgUrl: 'https://th.bing.com/th/id/OIP.MASmSGUEiRwOc86zsRb1OwHaEK?pid=Api&rs=1'
        }
      ]
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
