<template>
  <div class="detail">
    <div class="news_pic">
      <img src="@/assets/images/company.jpg" alt="">
    </div>
    <div class="nav" >
      <i class="el-icon-arrow-left" @click="prev">上一条新闻</i>
      <i class="el-icon-s-grid"><nuxt-link :to="{path:'/companyPresent',query:{page:1}}">返回列表</nuxt-link></i>
      <i class="el-icon-arrow-right" @click="next">下一条新闻</i>
    </div>
    <div class="content"  >
      <div class="title_info">
        <h3  class="title">
        {{ArticleDetail.title.rendered}}
<!--          <br/>爱美蛙淘成为全球首席创始合作伙伴-->
        </h3>
        <div class="date"  style="text-align: center;width: 100%">{{ArticleDetail.date|getdate('.')}}</div>
      </div>
      <div class="line" style="border: 1px solid #D8D9DC;width: 100%"></div>
      <div class="content_info">
        <div class="img">
          <img :src="ArticleDetail.pic" alt="">
        </div>
            <div class="arc" v-html="ArticleDetail.content.rendered"></div>
      </div>
      <div class="relate_info">
        <h3 class="title">相关阅读</h3>
        <div class="random_info" v-for="(item,index) in random_list" :key="index">
          <nuxt-link :to="{path:'/companyPresent/detail',query:{id:item.id}}" class="info" >
            <div class="detail_image">
              <img :src="item.pic" alt="">
            </div>
            <div class="detail_info">
              <div class="title">{{item.title.rendered}}</div>
              <div class="date">{{item.date|getdate('.')}}</div>
            </div>
          </nuxt-link>
          <div class="line" style="border: 1px solid #D8D9DC;width: 100%"></div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
    import {getDetail,getBeforeOrAfter,getArticle} from "../../api/news"
    import {random_data,getPic} from "../../plugins/gl-components"
    export default {
        name: "detail",
        transitions:"test",

        data(){
            return {
              ArticleDetail:"",
              before_list:[],
              after_list:[],
              random_list:[]
            }
          },
        methods:{
            prev(){
              if (!this.before_list.length){
                this.$notify.info({
                  message:"没有更多数据了哦",
                  title:"新闻",
                  position:"top-left"
                })
                return
              }

              this.$router.push({path:"/companyPresent/detail",query:{id:this.before_list[0].id}})


            },
            next(){
              if (!this.after_list.length){
                this.$notify.info({
                  message:"没有更多数据了哦",
                  title:"新闻",
                  position:"top-right"
                })
                return
              }
              this.$router.push({path:"/companyPresent/detail",query:{id:this.after_list[0].id}})
            }
          },

        watchQuery:['id'],
        async asyncData({error,query}){
            let id = query.id
            let arDetail = await getPic(await getDetail(id),"Str")
            let after_list = await getPic((await getBeforeOrAfter(arDetail.date,"after","asc")).list,"Array")
            const before_list = await getPic((await getBeforeOrAfter(arDetail.date,"before","desc")).list,"Array")
            let random_list = (await getArticle(20,1,6)).list
            random_data(random_list)

            random_list =  await getPic(random_list,"Array")

            return {
              ArticleDetail: arDetail,
              before_list:before_list,
              after_list:after_list,
              random_list:random_list.slice(0,3)



            }
        }
      }
</script>

<style>
  .arc p{
    padding: 16px 0;
    font-size:16px;
    color:#302b2b;
    text-align: left;
  }


</style>

<style scoped lang="stylus">
.detail
  width 100%
  height 100%
  .news_pic
    width 1200px
    height 633px
    margin  0 auto
    img
      width 100%
      height 100%
      object-fit cover

  .nav
    width 1200px
    height 54px
    margin 0 auto
    background-color #F1F5F8
    display flex
    justify-content space-between
    align-items center
    i
      cursor pointer
    a
      display inline-block
      height 39px
      font-size 20px
      line-height 39px
      color #2A2E2E
  .content
    width 1081px

    margin 0 auto
    margin-top 50px

    .title_info
      width 754px
      height 160px
      margin 0 auto

      position relative
      margin-bottom 10px
      text-align center

      .title
        font-size 30px
        height 44px
        line-height 44px
        font-weight bold
      .date
        position absolute
        bottom 10px
    .content_info
      width 1041px
      margin 0 auto
      margin-bottom 100px
      .arc
        width 100%

      .img
        width 794px
        height 509px
        margin 0  auto

        margin-bottom 60px
        img
          width 100%
          height 100%
          object-fit cover
    .relate_info
      width 1066px
      margin 0 auto
      height 605px

      display flex
      flex-direction column
      justify-content space-around
      align-items center
      .title
        height 34px
        font-size 24px
        line-height 34px
        color #2A2E2E
        font-weight bold
        align-self flex-start
      .random_info
        width 100%
        .info
          width 100%
          height 114px
          align-self flex-start
          display flex
          margin-bottom 20px
          .detail_image
            width 207px
            height 114px
            background-color #F1ECEC
            margin-right 20px
            img
              width 100%
              height 100%
              object-fit cover
          .detail_info
            display flex
            flex-direction column
            justify-content space-around
            align-items center
            .title
              white-space nowrap
              text-overflow ellipsis
            .date
                align-self flex-start


















</style>
