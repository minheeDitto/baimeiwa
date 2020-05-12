<template>
    <div class="slide" ref="slide">
      <div class="content">
        <slot></slot>
      </div>
    </div>
</template>

<script>
  import BScroll from '@better-scroll/core'
  import Slide from '@better-scroll/slide'

  BScroll.use(Slide)
    export default {
        name: "slide",
        data(){
          return {
            slide:null,
            playTimer:0,
            currentPageIndex: 0,
          }
        },

        mounted() {
          this.init()
          window.addEventListener("resize",() => {

            this.slide.refresh()
          })

        },
        beforeDestroy() {
          clearTimeout(this.playTimer)
          this.slide.destroy()
        },
        methods:{
          init(){
            clearTimeout(this.playTimer)
            this.slide = new BScroll(this.$refs.slide, {
              scrollX: true,
              scrollY: false,
              slide: {
                loop: true,
                threshold: 100
              },
              useTransition: true,
              momentum: false,
              bounce: false,
              stopPropagation: true
            })
            this.slide.on("scrollEnd",this._onScrollEnd)
            this.autoGoNext()
          },
          _onScrollEnd(){
            this.autoGoNext()
          },
          autoGoNext(){
            clearTimeout(this.playTimer)
            this.playTimer = setTimeout(() => {
              this.nextPage()
            },2000)
          },
          nextPage(){
            this.slide.next()
          }
        }

    }
</script>

<style scoped  lang="stylus">
.slide
  height 100%
  width 100%
  overflow hidden
  .content
    height 100%
    white-space nowrap
    font-size 0


</style>
