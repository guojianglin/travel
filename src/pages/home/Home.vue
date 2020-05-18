<template>
<div>
 <HomeHeader></HomeHeader>
 <HomeSwipter></HomeSwipter>
 <HomeIcons></HomeIcons>
</div>
</template>

<script>
import HomeHeader from './components/HomeHeader'
import HomeSwipter from './components/Swiper'
import HomeIcons from './components/Icons'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwipter,
    HomeIcons
  }
}
</script>

<style lang="stylus">

</style>
