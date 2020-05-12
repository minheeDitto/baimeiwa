<template>
    <div class="service_container">
      <div class="containerContent">
        <div class="wrap">
          <div class="top">
            <p class="title">商品服务</p>
            <p class="desc">高效跟进 贴心服务</p>
          </div>
          <div class="cont">
            <div class="flex">
              <div class="listitem">

                <div class="iteminfo">
                  <p class="itemInfotitle">正品保证</p>
                  <p class="itemInfoDesc">正品授权 假一赔十</p>
                </div>
              </div>
              <div class="listitem">

                <div class="iteminfo">
                  <p class="itemInfotitle">七天无理由退换</p>
                  <p class="itemInfoDesc">无条件 退换货</p>
                </div>
              </div>
              <div class="listitem">

                <div class="iteminfo">
                  <p class="itemInfotitle">免运费</p>
                  <p class="itemInfoDesc">全场满299元</p>
                </div>
              </div>
              <div class="listitem">

                <div class="iteminfo">
                  <p class="itemInfotitle">实物拍摄</p>
                  <p class="itemInfoDesc">实物拍 购买放心</p>
                </div>
              </div>
              <div class="listitem">

                <div class="iteminfo">
                  <p class="itemInfotitle">闪电发货</p>
                  <p class="itemInfoDesc">闪电发货 快速到家</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped lang="stylus">
.service_container
  width: 100%
  min-width 1200px
  background-color: #fff;
  height 282px
  .containerContent
    width: 1200px
    margin 0 auto
    height 100%
    .wrap
      width 100%
      .top
        margin-bottom 8px
        .title
          height 32px
          line-height 32px
          font-size 26px
          text-align center
          color rbga(43,43,43,1)
          font-weight 500
        .desc
          height 26px
          line-height 26px
          font-size 14px
          text-align center
          box-sizing border-box
          padding-top 5px
          color rbga(105,105,105,1)
      .cont
        position relative
        height 216px
        box-sizing border-box
        padding-top 80px
        .flex
          display flex
          align-items center
          justify-content space-between
          width 100%
          left 0
          top 0
          position absolute
          height 156px
          padding 0 28px
          background-color: #fff;
          box-sizing border-box
          .listitem
            display flex
            align-items center
            .iteminfo
              font-size 14px
              color #2b2b2b
              .itemInfotitle
                font-size 20px
                line-height 28px
              .itemInfoDesc
                font-size 14px
                line-height 20px














</style>
