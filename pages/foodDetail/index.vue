<template>
    <div class="foodDetail clearboth">
      <search  :placeholder="placeholder" ></search>
      <div class="middle_1200 head"><span>百媚食物库</span>/<span>{{tag}}</span></div>
      <div class="rowed middle_1200">
        <div class="slide">
          <h3>常见食物分类</h3>
          <ul>
            <li v-for="(item,index) in productList" :key="index">
            <nuxt-link :to="{path:'/foodDetail',query:{m:'food',tag:'categories',cid:item.id}}"  >
              <img :src="item.pic" alt=""><span v-html="item.excerpt.rendered"></span>
            </nuxt-link></li>

          </ul>

        </div>
        <div class="content">
          <div class="content_info">
          <div class="title">{{tag}}</div>
          <div class="special_cont">
            <ul>
              <li>
                <div class="cont_image">
                    <img src="http://s2.boohee.cn/house/food_mid/mid_photo_20152216492219122.jpg" alt="">
                  </div>
                <div class="cont_msg">
                  <h5>黑咖啡（液）,美式、美式咖啡、澳黑</h5>
                  <p>热量：<span></span>1 大卡（100毫升）</p>
                </div>
              </li>
              <li>
                <a href="">
                  <div class="cont_image">
                    <img src="http://s2.boohee.cn/house/food_mid/mid_photo_20152216492219122.jpg" alt="">
                  </div>
                </a>
                <div class="cont_msg">
                  <h5><a href="">黑咖啡（液）,美式、美式咖啡、澳黑</a></h5>
                  <p>热量：<span></span>1 大卡（100毫升）</p>
                </div>
              </li>
              <li>
                <a href="">
                  <div class="cont_image">
                    <img src="http://s2.boohee.cn/house/food_mid/mid_photo_20152216492219122.jpg" alt="">
                  </div>
                </a>
                <div class="cont_msg">
                  <h5><a href="">黑咖啡（液）,美式、美式咖啡、澳黑</a></h5>
                  <p>热量：<span></span>1 大卡（100毫升）</p>
                </div>
              </li>
              <li>
                <a href="">
                  <div class="cont_image">
                    <img src="http://s2.boohee.cn/house/food_mid/mid_photo_20152216492219122.jpg" alt="">
                  </div>
                </a>
                <div class="cont_msg">
                  <h5><a href="">黑咖啡（液）,美式、美式咖啡、澳黑</a></h5>
                  <p>热量：<span></span>1 大卡（100毫升）</p>
                </div>
              </li>
              <li>
                <a href="">
                  <div class="cont_image">
                    <img src="http://s2.boohee.cn/house/food_mid/mid_photo_20152216492219122.jpg" alt="">
                  </div>
                </a>
                <div class="cont_msg">
                  <h5><a href="">黑咖啡（液）,美式、美式咖啡、澳黑</a></h5>
                  <p>热量：<span>1 大卡（100毫升）</span> </p>
                </div>
              </li>
              <li>
                <a href="">
                  <div class="cont_image">
                    <img src="http://s2.boohee.cn/house/food_mid/mid_photo_20152216492219122.jpg" alt="">
                  </div>
                </a>
                <div class="cont_msg">
                  <h5><a href="">黑咖啡（液）,美式、美式咖啡、澳黑</a></h5>
                  <p>热量：<span>1 大卡（100毫升）</span> </p>
                </div>
              </li>
              <li>
                <a href="">
                  <div class="cont_image">
                    <img src="http://s2.boohee.cn/house/food_mid/mid_photo_20152216492219122.jpg" alt="">
                  </div>
                </a>
                <div class="cont_msg">
                  <h5><a href="">黑咖啡（液）,美式、美式咖啡、澳黑</a></h5>
                  <p>热量：<span>1 大卡（100毫升）</span> </p>
                </div>
              </li>
              <li>
                <a href="">
                  <div class="cont_image">
                    <img src="http://s2.boohee.cn/house/food_mid/mid_photo_20152216492219122.jpg" alt="">
                  </div>
                </a>
                <div class="cont_msg">
                  <h5><a href="">黑咖啡（液）,美式、美式咖啡、澳黑</a></h5>
                  <p>热量：<span>1 大卡（100毫升）</span> </p>
                </div>
              </li>
              <li>
                <a href="">
                  <div class="cont_image">
                    <img src="http://s2.boohee.cn/house/food_mid/mid_photo_20152216492219122.jpg" alt="">
                  </div>
                </a>
                <div class="cont_msg">
                  <h5><a href="">黑咖啡（液）,美式、美式咖啡、澳黑</a></h5>
                  <p>热量：<span>1 大卡（100毫升）</span> </p>
                </div>
              </li>
              <li>
                <a href="">
                  <div class="cont_image">
                    <img src="http://s2.boohee.cn/house/food_mid/mid_photo_20152216492219122.jpg" alt="">
                  </div>
                </a>
                <div class="cont_msg">
                  <h5><a href="">黑咖啡（液）,美式、美式咖啡、澳黑</a></h5>
                  <p>热量：<span>1 大卡（100毫升）</span> </p>
                </div>
              </li>
            </ul>
          </div>
          <div class="bot">
            <el-pagination
              :page-size="10"
              layout="prev, pager, next, jumper"
              :total="60">
            </el-pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import search from '@/components/search'
  import {getPic} from "../../plugins/gl-components";
  import {getProductTags} from "../../api/product";
    export default {
        name: "index",
        components:{
          search
        },
      data(){
        return {
          placeholder:"搜索食物查询热量",
          productList:[],
          tag:""
        }
      },
      watchQuery: ['cid'],
      async asyncData({error, query}) {
        const productList = await getPic((await getProductTags(7)).list,"Array")
        const cid = query.cid

        let index = productList.findIndex(v => {

          return v.id == cid
        })
        let tag = productList[index]["excerpt"]["rendered"].replace(/\<[/]?p\>/g,"")

        return {
          productList:productList,
          tag:tag
        }
      }
    }
</script>

<style scoped lang="stylus">

  .foodDetail
    width 100%
    height 100%

    .middle_1200
      width 1200px
      margin 0 auto
      text-align left
      line-height 60px
      color #000
      font-size 20px
      font-family "微软雅黑"
  .rowed
    width 1200px
    margin 0 auto
    height 1655px
    box-sizing border-box
    padding-bottom 40px
    .slide
      width 25%
      float left
      h3
        background-color  #c7c9c8
        font-size 24px
        height 40px
        line-height 40px
        padding-left 5px
      ul
        padding 0 20px 1px 1px
        border-top 1px solid #549b61
        border-bottom 1px  solid #e1e1e1
        border-left 1px  solid #e1e1e1
        border-right 1px solid #e1e1e1
        li
          display block
          width 293px
          height 80px
        a
            border-bottom 1px  solid #e1e1e1
            cursor pointer
            height 100%
            width 100%
            display flex
            align-items center
            text-decoration none

            img
              margin-bottom -8px
              display inline-block
              margin-left 10px
              width 50px
              height 50px
              vertical-align top
              border-radius 50%
              object-fit cover
            span
              font-size 20px
              padding-left 15px
              color #000

    .content
      float left
      width 70%
      border 1px solid #e1e1e1
      margin-left 30px
      .title
        background-color  #f9f9f9
        padding-left 20px
        border-bottom 1px solid #549b61
        height 40px
        line-height 40px
        font-size 22px
        color #000
      .special_cont
        padding 0 20px
        li
          border-bottom 1px solid  #e1e1e1
          padding 20px 0
          cursor pointer
          height 143px
          box-sizing border-box

          a
            text-decoration none
          .cont_image
            width 50px
            height 50px
            background-color #eee
            img
              width 100%
              height 100%
          .cont_msg
            margin-left 20px
            color #B5B5B2
            height 52px
            h5
              font-size 20px
              font-weight normal
              height 26px
            p
              display block
              height 26px
              font-size 20px
              font-weight normal
      .bot
        height 140px
        padding 40px 0
        box-sizing border-box
        display flex
        align-items center
        justify-content center

</style>
