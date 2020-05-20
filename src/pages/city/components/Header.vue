<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont iconxiangzuo1 back-icon"></div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
@import '~styles/variable.styl'
.header
  overflow hidden
  height $headerHeight
  line-height $headerHeight
  text-align center
  color #ffffff
  background $bgColor
  font-size .32rem
  position relative
  .back-icon
    position absolute
    left 0
    top 0
    color #ffffff
    width .64rem
    font-size .4rem
    text-align center
</style>
