<template>
    <div class="banner_pic">
    <slide class="itemlist">
      <div  class="item"><img src="@/assets/images/5c2eadb3a44b5.jpg" alt=""></div>
      <div class="item" ><img src="@/assets/images/5c25c4aa2881c.jpg" alt=""></div>
      <div class="item" ><img src="@/assets/images/5c25c4af11bb5.jpg" alt=""></div>
      <div class="item"><img src="@/assets/images/5c25c4b3b1b8d.jpg" alt=""></div>
    </slide>



    </div>
</template>

<script>
import slide from "@/components/slide/index";
    export default {
        name: "index",
        components:{
          slide
        },

    }
</script>


<style scoped lang="stylus">
.banner_pic
  width 100%
  height 633px
  background-color #EBEBEB
  position relative
  .itemlist
    .item
      display inline-block
      height 100%
      width 100%
      text-align center
      backface-visibility hidden



</style>
