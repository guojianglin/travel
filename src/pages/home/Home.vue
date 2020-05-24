<template>
<div>
 <HomeHeader></HomeHeader>
 <HomeSwipter :list="swiperList"></HomeSwipter>
 <HomeIcons :list="iconList"></HomeIcons>
 <HomeRecommand :list="recommendList"></HomeRecommand>
 <Weekend :list="weekendList"></Weekend>
</div>
</template>

<script>
import HomeHeader from './components/HomeHeader'
import HomeSwipter from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommand from './components/Recommand'
import Weekend from './components/Weekend'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwipter,
    HomeIcons,
    HomeRecommand,
    Weekend
  },
  data () {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: [],
      lastCity: ''
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getInfo () {
      axios.get('/api/index?city=' + this.city).then(this.getData)
    },
    getData (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  mounted () {
    this.lastCity = this.city
    this.getInfo()
  },
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getInfo()
    }
  }
}
</script>

<style lang="stylus">

</style>
