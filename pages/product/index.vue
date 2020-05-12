<template>
    <div class="product">
      <div class="product_banner">
        <banner></banner>
      </div>
      <div class="product_show">
        <div class="product_detail">
          <div class="shadow left"></div>
          <div class="product_various">
              <div class="fruit_show" v-for="(item,index) in productList" :key="index">
                <img :src="item.pic" alt="">
                <div class="search_detail">
                  <h3 class="title">{{item.title.rendered}}</h3>
                  <div class="search_button"><nuxt-link :to="{path:'/productDetail',query:{id:item.id}}">查看详情</nuxt-link></div>
                  <div class="product_pic">
                    <img :src="item.pic" alt="">
                  </div>
                </div>
              </div>

        </div>
          <div class="shadow right"></div>
          <div class="shadow1 bottom"></div>
        </div>

      </div>
      <div class="material">
        <div class="material_show">
          <h3 class="title">精选原料</h3>
          <p class="desc">13个国家与地区的倾心只为精致的你</p>
          <div class="show_map"></div>
          <div class="chose_product">
            <h3 class="title">部分精选产品</h3>
            <div class="chose_product_show">
              <div>1</div>
              <div>1</div>
              <div>1</div>
              <div>1</div>
              <div>1</div>
              <div>1</div>
            </div>
          </div>
        </div>

      </div>


    </div>
</template>

<script>
    import slide from '@/components/slide'
    import banner from '@/components/banner'
    import {getProductTags} from "../../api/product"
    import {getPic} from "../../plugins/gl-components";


    export default {
        name: "index",
        components:{
          banner
        },
        data(){
          return {
            productList:[]
          }
        },
        async asyncData({error,query}){
          const productList = await getPic((await getProductTags(17)).list,"Array")
          return  {
            productList:productList
          }
        }

    }
</script>

<style scoped lang="stylus">
.product
  width 100%
  .product_banner
    width 100%
    height 633px
    background-color #EBEBEB
    position relative
  .product_show
    width 100%
    height 2659px
    margin-bottom 90px
    .product_detail
      position relative
      width 1200px
      margin 0 auto
      height 100%
      background-color #ffffff
      .bottom
        width: 1200px;
        height: 158px;
        background-color: #414142;
        position: absolute;
        bottom: 0;
      .shadow
        width 158px
        height 100%
        position absolute
        background-color: #414142
        top 0
      .left
        left 0
        margin-right 40px
      .right
        right 0
        margin-left 40px
      .product_various
          position absolute
          height 2500px
          width 804px
          left 198px
          display flex
          flex-direction column
          align-items flex-start
          justify-content center
          /*display grid*/
          /*grid-template-columns 513px*/
          /*grid-template-rows 510px 510px  510px 510px*/
          /*row-gap 90px*/

          .fruit_show

            margin-bottom 200px
            width 400px
            height 400px
            img
              object-fit cover
              width 100%
              height 100%
            .search_detail
              width 431px
              height 234px
              background-color #100F0F
              border 1px solid #707070
              right -95%
              top -75%
              opacity 0.46
              position relative
              .title
                height 32px
                font-size 12px
                line-height 32px
                color #FFFFFF
                margin 32px 0 38px 40px
              .search_button
                width 114px
                height 32px
                border 1px solid #FFFFFF
                background linear-gradient(to right,#e53935, #e35d5b)
                margin-left 40px
                text-align center
                line-height 32px
                color white
            .product_pic
              position absolute
              width 130px
              height 130px
              background-color #CCCCCC
              left 246px
              top 45px

              img
                width 100%
                height 100%
                object-fit cover


  .material
    width 100%
    height 424px

    .material_show
      width 1200px
      height 100%
      margin 0 auto
      text-align center
      position relative
      .title
        height 46px
        font-size 30px
        line-height 30px
        margin-bottom 14px
        color #292828
      .desc
        height 19px
        line-height 19px
        font-size 14px
    .show_map

      margin-left 50px
      width 701px
      height 280px
      border 1px solid yellow
      margin-top 36px
      margin-right 33px

    .chose_product
      position absolute
      width 448px
      height 280px
      right -33px
      top 114px
      border 1px solid yellow
      .title
        height 19px
        line-height 19px
        font-size 14px
        color #343434
        margin-bottom  13px
    .chose_product_show
      width 100%
      height 416
      display grid
      grid-template-rows 118px 118px
      grid-template-columns 118px 118px 118px
      row-gap 10px
      column-gap 16px
      justify-content center

      div
        width: 118px
        height 118px
        background-color #DBD7D7


























</style>
