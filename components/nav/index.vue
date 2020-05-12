<template>
    <div class="navbar">
        <div class="bar_content">
          <div class="same"><nuxt-link :to="{path:'/'}">首页</nuxt-link></div>
          <div class="same">
            <nuxt-link :to="{path:'/product'}">产品列表</nuxt-link>
<!--            <ul class="sub_list">-->
<!--              <li>大豆蛋白棒</li>-->
<!--              <li>胶原蛋白粉</li>-->
<!--              <li>营养蛋白奶昔固体饮料</li>-->
<!--              <li>蔬果酵素原液</li>-->
<!--              <li>人参蔬果酵素</li>-->
<!--            </ul>-->
          </div>
          <div class="same"> <nuxt-link :to="{path:'/search'}">热量查询</nuxt-link></div>
          <div class="same"><nuxt-link :to="{path:'/companyPresent',query:{page:1}}">公司介绍</nuxt-link></div>
          <div class="same">相关文章</div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped lang="stylus">
.navbar
  width 100%
  height 69px
  display flex
  align-items center
  justify-content center
  background  linear-gradient(to right , #67B26F,#4ca2cd)

  .bar_content
    width 900px
    display flex
    align-items center
    .same
      flex 1
      height 37px
      line-height 40px
      font-size 14.4px
      color #FFFFFF
      text-align center
      cursor pointer
      position relative
      a:visited
        color #FFFFFF






</style>
