<template>
<div>
    <div class="search">
    <input class="search-input" type="text" placeholder="输入城市名或拼音" v-model="keyword">
  </div>
  <div class="search-content" ref="search" v-show="this.keyword">
    <ul>
      <li class="search-item border-bottom" v-for="item of list" :key="item.id" @click="handleCityClick(item.name)">{{ item.name }}</li>
      <li v-show="hasNoData">没有找到匹配数据</li>
    </ul>
  </div>
</div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (const key in this.cities) {
          this.cities[key].forEach(city => {
            if (city.spell.indexOf(this.keyword) > -1 || city.name.indexOf(this.keyword) > -1) {
              result.push(city)
            }
          })
        }
        this.list = result
        this.timer = null
      }, 100)
    }
  },
  methods: {
    ...mapMutations(['changeCity']),
    handleCityClick (city) {
      this.changeCity(city)
      this.$router.push('/')
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variable.styl'
.search
  background $bgColor
  height .72rem
  padding 0 .1rem
  .search-input
    width 100%
    height .62rem
    line-height .62rem
    text-align center
    border-radius .06rem
    color #666
    box-sizing border-box
    padding 0 .1rem
.search-content
  position absolute
  top 1.58rem
  left 0
  right 0
  bottom 0
  overflow hidden
  background #eee
  z-index 1
  .search-item
    line-height .62rem
    padding-left .2rem
    background #ffffff
    color #666
</style>
