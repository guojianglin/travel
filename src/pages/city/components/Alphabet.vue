<template>
  <ul class="list">
    <li class="item" v-for="letter of letters"
      :key="letter"
      :ref="letter"
      @click="handleAphabetClick"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >{{ letter }}</li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  props: {
    cities: Object
  },
  computed: {
    letters () {
      const letters = []
      for (const key in this.cities) {
        letters.push(key)
      }
      return letters
    }
  },
  updated () {
    this.startY = this.$refs.A[0].offsetTop
  },
  methods: {
    handleAphabetClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - this.startY) / 20)
          console.log(this.startY)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
          this.timer = null
        }, 17)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variable.styl'
.list
  position absolute
  top 1.58rem
  right 0
  bottom 0
  width .4rem
  display flex
  flex-direction column
  justify-content center
  .item
    color $bgColor
    text-align center
    line-height .4rem
</style>
