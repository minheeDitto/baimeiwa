<template>
    <div class="container">
      <div class="contentContainer">
      <div class="flex">
        <div class="contact_detail">
          <div class="contact" style=" padding-bottom: 12px;line-height: 1;border-bottom: 1px solid rgba(255,255,255,0.68)">
            <a href="#">联系我们</a>
          </div>
          <div class="customor_service">
            <a href="#">客户服务</a>
          </div>
          <div class="custmor_chat">
            <a href="#">合作洽谈</a>
          </div>
          <div class="news">
            <a href="#">媒体新闻</a>
          </div>
        </div>
        <div class="law_detail">
          <div class="law" style="padding-bottom: 12px;line-height: 1;border-bottom: 1px solid rgba(255,255,255,0.68)">
            <a href="#">法律信息</a>
          </div>
          <div class="service_protocol">
            <a href="#">服务协议</a>
          </div>
          <div class="secrect">
            <a href="#">隐私政策</a>
          </div>
        </div>
        <div class="help_detail">
          <div class="help" style="padding-bottom: 12px;line-height: 1;border-bottom: 1px solid rgba(255,255,255,0.68)">
            <a href="#">帮助中心</a>
          </div>
          <div class="pacage">
            <a href="#">打包流程</a>
          </div>
          <div class="send">
            <a href="#">发货流程</a>
          </div>
          <div class="post_search">
            <a href="#">快递查询</a>
          </div>
        </div>
      </div>
      <div class="logo" style="margin: auto">
        <img src="@/assets/images/logo.png" alt="">
      </div>
      <div class="copyright">
        <p>Copyright  2019, 南京爱媚蛙生物科技有限公司版权所有  苏ICP备17065477号</p>
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
.container
  width: 100%
  min-width 1200px

  height 282px
  background-color: #2B2B2B;
  .contentContainer
    width: 1200px
    margin 0 auto
    height 100%
    display flex
    position relative
    .flex
      box-sizing border-box
      padding-top 5%
      display flex
      width 50%
      height 274px
      margin auto 0

      justify-content space-between
      div
        a
          display block
          margin-top 12px
          text-decoration none
          line-height 1
    .copyright
      width 100%
      height 29px
      line-height 29px
      text-align center
      font-size 14px
      color #5F6464
      position absolute
      bottom  20px







</style>
