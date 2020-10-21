<template>
  <ul class="right-list">
    <li>A</li>
    <li>B</li>
    <li>C</li>
    <li>D</li>
    <li>E</li>
    <li>F</li>
    <li>G</li>
    <li>H</li>
    <li>I</li>
    <li>J</li>
    <li>K</li>
    <li>L</li>
    <li>M</li>
    <li>N</li>
    <li>O</li>
    <li>P</li>
    <li>Q</li>
    <li>R</li>
    <li>S</li>
    <li>T</li>
    <li>U</li>
    <li>V</li>
    <li>W</li>
    <li>X</li>
    <li>Y</li>
    <li>Z</li>
  </ul>
</template>

<script>
export default {
  name: 'RightList'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
  .right-list
    display flex
    position absolute
    right 0
    top 1.6rem
    bottom 0
    width .4rem
    flex-direction column
    justify-content center
    text-align center
    z-index 9
    li
      line-height .4rem
      font-size .24rem
      color $bgColor
</style>