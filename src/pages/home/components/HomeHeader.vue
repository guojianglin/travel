<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont iconxiangzuo1 back-icon"></div>
    </div>
    <div class="header-input">
      <span class="iconfont iconseach"></span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{ city }}
        <div class="iconfont icondownarrow icon-arrow"></div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variable.styl';
.header
  display: flex
  line-height: .86rem
  background: $bgColor
  color: #ffffff

  .header-left
    width: $headerHeight
    .back-icon
      font-size .4rem
      text-align: center

  .header-input
    flex: 1
    background: #ffffff
    border-radius: .1rem
    height: .64rem
    line-height: .64rem
    color: #cccccc
    margin-top: .12rem
    margin-left: .2rem
    padding-left: .2rem
  .header-right
    width: 1.24rem
    text-align: center
    color #ffffff
    .icon-arrow
      display inline-block
      font-size .13rem
      margin-left .1rem
      vertical-align top
</style>
