<template>
  <div class="listnews">
    <div class="show_pic">
      <img src="@/assets/images/company.jpg" alt="">
    </div>
    <div class="new_content">
      <h3 class="title" style="font-size: 20px">公司新闻<span class="en">COMPAYNEWS</span></h3>
      <div class="news">
        <div class="news_info  " v-for="(item,index) in ArticleList" :key="index" :id="[index ===0 ?'first':'nouse']">

          <div class="show_pic1"><img :src="item.pic" :data-set="item.pp" ></div>
          <div class="content">
            <div class="ar_title">{{item.title.rendered}}</div>
            <div class="content_detail" v-html="item.excerpt.rendered"></div>
            <div class="read_detail">
              <nuxt-link :to="{path:'/companyPresent/detail',query:{id:item.id}}">阅读详情</nuxt-link>
            </div>
          </div>
          <div class="date">
            <div class="day">{{item.date | getdate("day")}}</div>
            <div class="month">{{item.date | getdate("month")}}月</div>
            <div class="year">{{item.date | getdate("year")}}</div>
          </div>

        </div>
      </div>
      <div class="paganition">
        <el-pagination
          :page-size="4"
          class="paganite"
          background
          layout="prev, pager, next"
          :total="TotalSize"
          @current-change="handleCurrentChange"
          :current-page="Page"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
  import {getArticle, getTotal,} from "../../api/news"
  import http from '../../plugins/http'
  import {getPic} from "../../plugins/gl-components";

  export default {
    name: "index",
    data() {
      return {
        ArticleList: "",
        TotalSize: "",
        Page: "",

      }
    },
    methods: {
      handleCurrentChange(val) {
        this.$router.push({path: '/companyPresent#first', query: {page: val}})
      }
    },

    watchQuery: ['page'],
    async asyncData({error, query}) {
      let page = ~~query.page || 1;
      if (page <= 1) page = 1;
      try {
        let articleList = (await getArticle(4, page,6)).list
        articleList =  await  getPic(articleList,"Array")
        const totalSize = await getTotal(6).then(res => {
          return parseInt(res.count)
        });
        return {
          ArticleList: articleList,
          TotalSize: totalSize,
          Page: page
        }
      } catch (e) {
        console.log(e)
      }
    }

  }
</script>

<style scoped lang="stylus">
  .listnews
    width 100%
    height 100%
    .show_pic
      width 100%
      height 633px
      margin 0 auto
      img
        width 100%
        height 100%
        object-fit cover

    .new_content
      width 1200px

      margin 0 auto
      background-color: #ECECEC;

      .title
        width 100%
        height 75px
        line-height 75px
        font-size 20px
        color #2E2C2C
        font-weight bold
        margin-bottom 35px

        .en
          height 20px
          line-height 20px
          font-size 20px
          color #999999
          opacity 0.5
          margin-left 5px

      .news
        width 1200px

        .news_info
          width 100%
          height 256px
          border-bottom 1px solid #DFDFDF
          position relative
          display flex
          align-items center

          .show_pic1
            display inline-block
            width 260px
            height 183px
            object-fit cover
            position relative
            left 0
            top 0

            img

              width 100%
              height 100%

          .content
            display inline-block
            position absolute
            left 341px

            .ar_title
              margin-bottom 40px

            .read_detail
              position relative
              bottom -30px
              width 127px
              height 34px
              background-color #C6C6C6
              border-radius 15px
              text-align center
              line-height 34px
              color #ffffff

            .content_detail
              overflow hidden
              height 60%
              width 80%
              text-overflow ellipsis

          .date
            width 101px
            height 123px
            display flex
            flex-direction column
            align-items center
            justify-content space-around
            position relative
            right -70%
            top 0
            color #FFFFFF
            background-color #A4A4A4

            .day
              height 30px
              font-size 20px
              line-height 30px

      .paganition
        text-align center
        padding 40px
        height 100px
        box-sizing border-box


</style>
