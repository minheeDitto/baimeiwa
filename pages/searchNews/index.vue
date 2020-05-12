<template>
    <div class="searchNews">
      <div class="news_content">
      <div class="input_text">
        <el-input
          placeholder="请输入内容"
          v-model="input"
       >
          <i slot="suffix" class="el-input__icon el-icon-search" @click="findNews"></i>
        </el-input>
      </div>
      <div class="content" v-for="(item,index) in news_list" :key="index">
        <nuxt-link :to="{path:'/companyPresent/detail',query:{id:item.id}}">
          <div class="bt">
            <div class="title">{{item.title.rendered}}</div>
          </div>
          <div class="about_content" v-html="item.excerpt.rendered">
          </div>
          <div class="news_date">
            {{item.date|getdate("-")}}
          </div>
        </nuxt-link>

      </div>
      <div class="paganition">
        <el-pagination
          :page-size="5"
          layout="prev, pager, next, jumper"
          :total="totalSize"
          @current-change="handleCurrentPage"
          :current-page.sync="page"
        >
        </el-pagination>


      </div>


      </div>

    </div>
</template>

<script>
    import {searchNews,getArticle} from "../../api/news"

    export default {
        name: "index",
        data(){
          return {
            input:"",
            news_list:[],
            totalSize:"",
            keyword:"",

          }
        },
      watchQuery:['page','keywords'],
      async asyncData({error,query}){
        let keywords = query.keywords
        let page = ~~query.page || 1
        if (page <= 1) page = 1
        if  (keywords !== "all"){
          const news_list = await searchNews(encodeURIComponent(keywords),5,page)
          return {
            news_list:news_list.list,
            totalSize: news_list.totalPage * news_list.list.length,
            keywords:keywords,
            page:page
          }
        }
        const news_list = await getArticle(4,page,6)
        return {
          news_list:news_list.list,
          totalSize: news_list.totalPage * news_list.list.length,
          keywords:keywords,
          page:page
        }

      },
      methods:{
        handleCurrentPage(val){
          this.$router.push({path:'/searchNews', query:{page: val,keywords:this.keywords}})
        },
        findNews(){
          console.log(this.input)
          if (this.input == undefined){
            this.input = "all"
          }
          this.$router.push({path:"/searchNews",query:{keywords:this.input,page:1}})

        }
      }
    }
</script>

<style scoped lang="stylus">
  .searchNews
    width 100%
    .news_content
      width 1200px
      margin 0 auto

      margin-top 45px
      .input_text
        width 300px
        margin 0 auto
        height 40px
      .content
        box-sizing border-box
        padding 15px 20px 13px 22px
        background-color #f4f6f9
        margin-top 15px
        .bt
          .title
            font-size 16px
            line-height 24px
            color #3f3f3f
        .about_content
          font-size 12px
          line-height 20px
          color #8b8b8b
          padding-top 8px
        .news_date
          font-size 14px
          line-height 20px
          color #000
          padding-top 10px
      .paganition
        width 589px
        margin 0 auto
        height 160px
        padding 58px 0  70px 0
        display flex
        align-items center
        justify-content center





</style>
