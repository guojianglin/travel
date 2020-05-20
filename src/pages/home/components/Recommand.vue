<template>
  <div>
    <div class="title">猜你喜欢</div>
    <ul>
      <li class="item border-bottom" v-for="item of list" :key="item.id">
        <img :src="item.imgUrl" class="item-img">
        <div class="item-info">
          <div class="item-title">{{ item.title }}</div>
          <div class="item-desc">{{ item.desc }}</div>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommand',
  props: {
    list: Array
  },
  data () {
    return {
      recommandList: [
        {
          id: 1,
          imgUrl: 'https://imgs.qunarzz.com/sight/p0/2005/39/392f70c14ff4bdaba3.img.jpg_200x200_d1df6f84.jpg',
          title: '长隆野生动物世界',
          desc: '弹坑就跟了拉看房啦看房啦看法'
        },
        {
          id: 2,
          imgUrl: 'https://imgs.qunarzz.com/sight/p0/1603/ee/ee3013caaa28ae7490.water.jpg_200x200_f052dfc4.jpg',
          title: '增城白水寨风景名胜区',
          desc: '弹坑就跟了拉看房啦看房啦看法'
        },
        {
          id: 3,
          imgUrl: 'https://imgs.qunarzz.com/sight/p0/1411/31/74eabd4dc95afd494d92a5006c9ad4f5.water.jpg_200x200_b27fe752.jpg',
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
.item
  display flex
  height 1.9rem
  overflow hidden
  .item-img
    width 1.7rem
    height 1.7rem
    padding .1rem
  .item-info
    flex 1
    min-width 0
    padding .1rem
    .item-title
      line-height .54rem
      font-size .32rem
      ellipsis()
    .item-desc
      line-height .4rem
      color #cccccc
      ellipsis()
    .item-button
      margin-top .16rem
      background #ff9300
      padding 0 .1rem
      border-radius .06rem
      line-height .44rem
      color #ffffff
</style>
