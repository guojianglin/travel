<template>
  <div class="icons">
    <swiper>
      <swiper-slide class="container-swiper" v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img :src="item.iconUrl">
          </div>
          <p class="icon-title">{{ item.title }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      iconsList: [
        {
          id: 1,
          iconUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          title: '景点门票'
        },
        {
          id: 2,
          iconUrl: 'https://imgs.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
          title: '广州必游'
        },
        {
          id: 3,
          iconUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png',
          title: '踏青赏花'
        },
        {
          id: 4,
          iconUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/fa/2548667cb6e902.png',
          title: '动植物园'
        },
        {
          id: 5,
          iconUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png',
          title: '珠江夜游'
        },
        {
          id: 6,
          iconUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/b6/37560ece9c62b502.png',
          title: '城市观光'
        },
        {
          id: 7,
          iconUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png',
          title: '主题乐园'
        },
        {
          id: 8,
          iconUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png',
          title: '泡温泉'
        },
        {
          id: 9,
          iconUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png',
          title: '珠江夜游2'
        }
      ]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconsList.forEach((item, index) => {
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
