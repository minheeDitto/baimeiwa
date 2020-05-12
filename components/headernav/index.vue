<template>
  <div class="c-header">
    <div class="content animated bounceInDown">
        <div class="logo">
          <img src="@/assets/images/百媚蛙2_03@2x.png" alt="" >
        </div>
        <div class="logo1">
          <img src="@/assets/images/百媚蛙2_05@2x.png" alt="">
        </div>
        <div class="search">
          <input type="text" placeholder="请输入关键字..."  @change="getVal">
          <div class="button" @click="jumpSearch">
            <img src="@/assets/images/组 1@2x.png" alt="">
          </div>
        </div>

    </div>
  </div>
</template>

<script>
    export default {
        name: "headernav",
        props: {
        colorTxt: {
          type: String,
          default () {
            return ''
          }
        },
        bgColor: {
          type: String,
          default () {
            return ''
          }
        }
      },
      methods:{
        jumpSearch(){

          this.$emit("searchInfo",this.targetVal)

        },
        getVal(e){
          this.targetVal = e.target.value
        }
      }
    }
</script>

<style scoped  lang="stylus">
  .c-header
    width: 100%;
    height 103px;
    background: #fff;
    display flex
    justify-content center
    align-items center
    .content
      display flex
      align-items center
      justify-content space-between
      .logo
        width 238px
        height 81px
        img
          width 100%
          height 100%
      .logo1
        width: 407px
        height: 81px
        margin-left 290px
        margin-right 67px
        img
          width 100%
          height 100%
      .search
        width: 303px
        height: 46px
        border 1px solid #F0F0F0
        border-radius 10px
        display flex
        align-items center
        justify-content space-between
        input
          border-style none
          outline none
          line-height 14px
          text-indent 8px
        .button
          width: 48px
          height: 46px
          background-color: #EBEBEB
          display flex
          justify-content center
          align-items center
          border-top-right-radius 10px
          border-bottom-right-radius 10px









</style>
