<template>
<div>
 <HomeHeader></HomeHeader>
 <HomeSwipter></HomeSwipter>
</div>
</template>

<script>
import HomeHeader from './components/HomeHeader'
import HomeSwipter from './components/Swiper'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwipter
  }
}
</script>

<style lang="stylus">

</style>
