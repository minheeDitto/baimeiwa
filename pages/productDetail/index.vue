<template>
  <div class="productDetail">
      <div class="detail">
        <div class="current">
          <p class="title">当前位置： <nuxt-link :to="{path:'/product'}">主页</nuxt-link>>{{detailProduct.title.rendered}}</p>
        </div>
        <div class="show_info">
            <div class="show">
             <div class="show_img">
               <pic-zoom :url="detailProduct.pic" :scale="2" :scroll="scroll" ></pic-zoom>
             </div>
             <div class="other_pic">
               <div v-for="(item,index) in imageList" :key="index"><img :src="item" alt=""></div>

             </div>
            </div>
            <div class="base_function">
              <h3 class="title">{{detailProduct.title.rendered}}</h3>
              <p class="capacity">750ml</p>
              <p>80种果蔬高含量SOD | 无水整合发酵</p>
            </div>

        </div>
        <div class="product_info">
          <h3 class="title">产品详情</h3>
          <div class="info" v-html="detailProduct.excerpt.rendered"></div>
          <div class="like">
            <h3 class="title">猜你喜欢</h3>
            <div class="recommend_like">
              <div v-for="(pic,index) in guessLike" :key="index">
                <img :src="pic.pic" alt="">
              </div>

            </div>
          </div>
        </div>
      </div>
<!--      <div style="width: 200px;height: 200px;border: 1px solid yellow"></div>-->

  </div>
</template>

<script>
    import {getDetail} from "../../api/news"
    import {getPic} from "../../plugins/gl-components"
    import PicZoom from "vue-piczoom"
    import {getProductTags} from "../../api/product"
    import {random_data} from "../../plugins/gl-components";

    export default {
        name: "index",
        data(){
          return {
            detailProduct:"",
            imageList:[],
            content:"",
            guessLike:[],
            scroll:true
          }
        },
      components:{
        PicZoom
      },
        async asyncData({error,query}){
          let id =  query.id
          const detailProduct = await getPic((await getDetail(id)))
          const imageList = detailProduct.content.rendered.match(/http(.*)\.jpg/g)
          const content = detailProduct.content.rendered.match(/\<p\>.*/)
          let guessLike =  (await getProductTags(17)).list
          guessLike = await getPic(guessLike,"Array")

          random_data(guessLike)





          return {
            detailProduct:detailProduct,
            imageList:imageList,
            content:content,
            guessLike:guessLike
          }
        }
    }
</script>

<style scoped lang="stylus">
  .productDetail
    width 100%
    height 2848px
    .detail
      width 1200px
      height 100%
      margin 0 auto
      .current
        display flex
        align-items center
        justify-content flex-start
        width 100%
        height 73px
        a:visited
          color #40403F

        .title
          color #40403F
          font-size 20px
          line-height 20px
      .show_info
        width 1200px
        height 824px
        display flex
        align-items center
        justify-content space-between
        .show

          height 721px
          width 583px
          .show_img
            width 585px
            height 585px
            background-color #EBEBEB
            margin-bottom 40px
            img
              width 100%
              height 100%
              object-fit cover
          .other_pic
            display flex
            align-items center
            justify-content space-around
            div
              width 60px
              height 60px
              background-color #EBEBEB
              cursor pointer
              img
                width 100%
                height 100%
              object-fit cover
        .base_function
          height 100%
          box-sizing border-box
          padding-top 40px
          margin auto 0
          .title
            font-size 24px
            line-height 24px
            margin-top 78px
            margin-bottom 120px
          .capacity
            margin-bottom 28px
            line-height 26px
            height 26px
            font-size 20px
            color #40403F
      .product_info
        width 1200px
        height 1944px


        .title
          height 26px
          font-size 24px
          line-height 26px
          color #40403F
          font-weight bold
          margin-left 38px
        .info
          width 1088px
          height 1088px
          margin-left 38px
          background-color #E6E6E6
          margin-top 70px
          margin-bottom 94px
        .like
          width 1200px
          height 467px
          .title
            height 26px
            line-height 26px
            font-size 24px
            font-weight bold
            color #40403F
            text-align center
            margin-bottom 85px
          .recommend_like
            width 1200px
            height 357px
            display flex
            align-items center
            justify-content space-between
            div
              width 295px
              height 300px
              img
                width 100%
                height 100%
                background-size cover












</style>
