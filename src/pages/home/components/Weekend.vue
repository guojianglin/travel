<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommandList" :key="item.id">
        <div class="item-img-wraper">
          <img :src="item.imgUrl" class="item-img">
        </div>
        <div class="item-info">
          <div class="item-title">{{ item.title }}</div>
          <div class="item-desc">{{ item.desc }}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Weekend',
  data () {
    return {
      recommandList: [
        {
          id: 1,
          imgUrl: 'https://imgs.qunarzz.com/sight/source/1811/15/66f14e0fd6fbb.jpg_r_640x214_5d69f21d.jpg',
          title: '长隆野生动物世界',
          desc: '弹坑就跟了拉看房啦看房啦看法'
        },
        {
          id: 2,
          imgUrl: 'https://imgs.qunarzz.com/sight/source/1811/b8/5d599bbdcf8b57.jpg_r_640x214_2ee055e3.jpg',
          title: '增城白水寨风景名胜区',
          desc: '弹坑就跟了拉看房啦看房啦看法'
        },
        {
          id: 3,
          imgUrl: 'https://imgs.qunarzz.com/sight/source/1505/92/580e9ea4f37a1b.jpg_r_640x214_72112761.jpg',
          title: '美林湖温泉',
          desc: '弹坑就跟了拉看房啦看房啦看法'
        },
        {
          id: 4,
          imgUrl: 'https://imgs.qunarzz.com/sight/p0/2005/39/392f70c14ff4bdaba3.img.jpg_200x200_d1df6f84.jpg',
          title: '长隆野生动物世界',
          desc: '弹坑就跟了拉看房啦看房啦看法'
        },
        {
          id: 5,
          imgUrl: 'https://imgs.qunarzz.com/sight/p0/1603/ee/ee3013caaa28ae7490.water.jpg_200x200_f052dfc4.jpg',
          title: '增城白水寨风景名胜区',
          desc: '弹坑就跟了拉看房啦看房啦看法'
        },
        {
          id: 6,
          imgUrl: 'https://imgs.qunarzz.com/sight/p0/1411/31/74eabd4dc95afd494d92a5006c9ad4f5.water.jpg_200x200_b27fe752.jpg',
          title: '美林湖温泉',
          desc: '弹坑就跟了拉看房啦看房啦看法'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.title
  margin-top .2rem
  line-height .8rem
  background #eeeeee
  text-indent .2rem

.item-img-wraper
  overflow hidden
  height 0
  padding-bottom 33.9%
  .item-img
    width 100%
.item-title
  line-height .54rem
  font-size .32rem
  ellipsis()
.item-desc
  line-height .4rem
  color #cccccc
  ellipsis()
</style>
