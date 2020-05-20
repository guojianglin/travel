<template>
  <swiper :options="swiperOptions" v-if="showSwiper">
    <swiper-slide class="container-swiper" v-for="item of list" :key="item.id">
      <img class="swiper-img" :src="item.imgUrl">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
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
  },
  computed: {
    showSwiper () {
      return this.list.length
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
