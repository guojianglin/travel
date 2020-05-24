<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img src="http://img1.qunarzz.com/sight/p0/2005/39/392f70c14ff4bdaba3.img.jpg_600x330_0ec2f376.jpg" class="banner-img">
      <div class="banner-info">
        <div class="banner-title">大连升压海洋世界（AAA）</div>
        <div class="banner-number">
          <span class="iconfont iconpicture banner-icon"></span>39
        </div>
      </div>
    </div>
    <CommonGrallary :imgs="imgs" v-show="showGallary" @close="handleGallaryClose"></CommonGrallary>
  </div>
</template>

<script>
import CommonGrallary from 'common/grallary/Grallary'
export default {
  name: 'DetailPage',
  data () {
    return {
      imgs: ['http://img1.qunarzz.com/sight/p0/2005/39/392f70c14ff4bdaba3.img.jpg_350x240_0bcfe13c.jpg', 'http://img1.qunarzz.com/sight/p0/1412/76/9cc3fb9a8948dd37453042baf2a03788.water.jpg_350x240_5354431c.jpg'],
      showGallary: false
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  },
  components: {
    CommonGrallary
  }
}
</script>

<style lang="stylus" scoped>
.banner
  position relative
  overflow hidden
  height 0
  padding-bottom 55%
  .banner-img
    width: 100%
  .banner-info
    display flex
    position absolute
    left 0
    right 0
    bottom 0
    line-height .6rem
    color #ffffff
    background-image linear-gradient(180deg, transparent, black)
    .banner-title
      flex 1
      font-size .32rem
      padding 0 .2rem
    .banner-number
      margin-top .14rem
      padding 0 .4rem
      height .32rem
      font-size .24rem
      line-height .32rem
      .banner-icon
        font-size .24rem
</style>
