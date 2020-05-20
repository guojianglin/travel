<template>
  <div>
    <CityHeader></CityHeader>
    <CitySearch></CitySearch>
  </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Seach'
export default {
  name: 'CityPage',
  components: {
    CityHeader,
    CitySearch
  }
}
</script>

<style lang="stylus" scoped>

</style>
