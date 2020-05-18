<template>
<div>
 <HomeHeader></HomeHeader>
 <HomeSwipter></HomeSwipter>
 <HomeIcons></HomeIcons>
 <HomeRecommand></HomeRecommand>
 <Weekend></Weekend>
</div>
</template>

<script>
import HomeHeader from './components/HomeHeader'
import HomeSwipter from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommand from './components/Recommand'
import Weekend from './components/Weekend'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwipter,
    HomeIcons,
    HomeRecommand,
    Weekend
  }
}
</script>

<style lang="stylus">

</style>
