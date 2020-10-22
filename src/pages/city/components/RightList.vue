<template>
  <ul class="right-list">
    <li v-for="item of letters" 
      :key="item"
      :ref="item"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      @click="rightListClick"
    >
      {{item}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'RightList',
  data () {
      return {
        touchStatus: false,
        startY: 0,
        timer: null
      }
  },
  props: {
    cities: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  methods: {
    rightListClick (e) {
        this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
        this.touchStatus = true
    },
    handleTouchMove (e) {
        if(this.touchStatus) {
          if (this.timer) {
            clearTimeout(this.timer)
          }
          this.timer = setTimeout(() => {
            this.timer = null
            const touchY = e.touches[0].clientY - 80
            const index = Math.floor((touchY - this.startY) / 20)
            if (index >= 0 && index <this.letters.length) {
              this.$emit('change', this.letters[index])
            }
          }, 16)
        }
    },
    handleTouchEnd () {
        this.touchStatus = false
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  }
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
    user-select none
    li
      line-height .4rem
      font-size .24rem
      color $bgColor
</style>