<template>
  <ul class="right-list">
    <li v-for="item of letters" 
      :key="item"
      :ref="elem => elems[item] = elem"
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
import { reactive, ref, computed, onUpdated } from 'vue'

export default {
  name: 'RightList',
  props: {
    cities: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  setup(props, context) {
    let elems = ref([])
    const { 
       letters, handleTouchStart, handleTouchMove, handleTouchEnd 
      } = useMoveLogic(props, context, elems)

    function  rightListClick (e) {
      context.emit('change', e.target.innerText)
    }
    

  return { elems, letters, handleTouchStart, rightListClick, handleTouchMove, handleTouchEnd }
  }

}

  function useMoveLogic(props, context, elems) {
    let touchStatus = false
    let startY = 0
    let timer = null

    const letters = computed(() => {
      const letters = []
      for (let i in props.cities) {
        letters.push(i)
      }
      return letters
    })

    function handleTouchStart () {
      touchStatus = true
    }

    function handleTouchMove (e) {
        if(touchStatus) {
          if (timer) {
            clearTimeout(timer)
          }
          timer = setTimeout(() => {
            timer = null
            const touchY = e.touches[0].clientY - 80
            const index = Math.floor((touchY - startY) / 20)
            if (index >= 0 && index <letters.value.length) {
              context.emit('change', letters.value[index])
            }
          }, 8)
        }
    }

    function handleTouchEnd () {
        touchStatus = false
    }

    onUpdated(() => {
    startY = elems.value['A'].offsetTop
    })

    return { letters, handleTouchStart, handleTouchMove, handleTouchEnd }
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