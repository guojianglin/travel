<template>
  <div class="icons">
    <swiper>
      <swiper-slide class="container-swiper" v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img :src="item.imgUrl">
          </div>
          <p class="icon-title">{{ item.desc }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data () {
    return {
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variable.styl'
@import '~styles/mixins.styl'
.icons >>> swiper-container
  height 0
  padding-bottom 50%
  // overflow hidden
.icon
    width 25%
    height 0
    padding-bottom 25%
    position relative
    overflow hidden
    float left
    .icon-img
      position absolute
      top 0
      left 0
      right 0
      bottom .44rem
      padding .1rem
      box-sizing border-box
      img
        height 100%
        margin 0 auto
        display block
    .icon-title
      position absolute
      bottom 0
      left 0
      right 0
      text-align center
      color $darkTextColor
      height .44rem
      line-height .44rem
      ellipsis()
</style>
