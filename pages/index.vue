<template>
  <div class="container">

    <banner/>
    <div class="next_content" style="width: 100%;height: 52px">
      <img src="@/assets/images/百媚蛙2_01_09@2x.png" alt="" style="object-fit: cover;width: 100%;height: 100%">
    </div>
    <div class="describe_fat">
      <h2 class="title">很多人认为“胖”是一种时代病？</h2>
      <div class="comment_content">
        <p>相比欧美人的肥胖程度，中国人的胖不值一提。但现实情况是，近年来大量数据证实，中国人不仅肥胖人数升得快，从人种、基因等角度说，更是“胖不起”。</p>
        <p>肥胖不仅令人行动不便，而且危害人体健康，缩短人的寿命。因此，要增强体质、健康长寿就不能过于肥胖。越来越多的人也意识到这一点</p>
        <p>开始加入减肥大军，减肥也成为当下最时尚的名词之一。</p>
      </div>
    </div>
    <div class="case_show">
      <div class="item1" style="background-color: #1abc9c"></div>
      <div class="item2" style="background-color: #2ecc71;"></div>
      <div class="item3" style="background-color: #3498db"></div>
      <div class="item4" style="background-color: #9b59b6"></div>
      <div class="item5" style="background-color: #34495e"></div>
      <div class="item6" style="background-color: #16a085"></div>
      <div class="item7" style="background-color: #27ae60"></div>
      <div class="item8" style="background-color: #2980b9"></div>
    </div>
    <div class="caculate_test">
      <div class="caculate_content">
        <div class="caculate">
          <div class="caculate_detail">
            <h3>BMI题型指数测试</h3>
            <span style="display: block;margin: 17px;font-size: 16px;color: #464646">一步了解减肥需要</span>
            <div class="input__detail_info">
              <el-form :model="form" label-width="60px">
                <el-form-item label="身高:">
                  <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="体重:">
                  <el-input v-model="form.weight"></el-input>
                </el-form-item>
                <el-form-item label="手机:">
                  <el-input v-model="form.mobile"></el-input>
                </el-form-item>
                <el-form-item label="BMI:">
                  <el-input v-model="form.BMI"></el-input>

                </el-form-item>
                <el-button type="success" style="width: 243px">开始计算</el-button>

              </el-form>
              <p>体重过轻：BMI<18.5</p>
              <p>正常范围：18.5<=BMI <24</p>
              <p>异常范围：过重：24 <= BMI < 27</p>
              <p>轻度肥胖：过重：27 <= BMI < 30</p>
              <p>中度肥胖：30 <= BMI < 35</p>
              <p>重度肥胖：BMI >= 35</p>
            </div>
          </div>
          <div class="show_video">
            <!-- <video src="@/assets/video/泰妍TaeYeon - Starlight (Feat. DEAN) 1080p.mp4" autoplay controls loop width="100%" height="100%"></video> -->
          </div>
        </div>
      </div>
    </div>

    <div class="next_content" style="width: 100%;height: 52px;margin-top: 80px">
      <img src="@/assets/images/百媚蛙2_28@2x.png" alt="" style="object-fit: cover;width: 100%;height: 100%">
    </div>
    <div class="content_start">
      <div class="start_show">
        <div class="describe_detail ">
          <img src="@/assets/images/百媚蛙2_19@2x.png" alt="">
          <div class="product_describe">
            <h3>产品描述</h3>
            <p>hahahah</p>
            <p>hahahha</p>
            <p>hahaah</p>
          </div>
        </div>
        <div class="describe_detail">
          <img src="@/assets/images/百媚蛙2_19@2x.png" alt="">
          <div class="product_describe">
            <h3>产品描述</h3>
            <p>hahahah</p>
            <p>hahahha</p>
            <p>hahaah</p>
          </div>
        </div>
        <div class="describe_detail">
          <img src="@/assets/images/百媚蛙2_19@2x.png" alt="">
          <div class="product_describe">
            <h3>产品描述</h3>
            <p>hahahah</p>
            <p>hahahha</p>
            <p>hahaah</p>
          </div>
        </div>
        <div class="describe_detail">
          <img src="@/assets/images/百媚蛙2_19@2x.png" alt="">
          <div class="product_describe">
            <h3>产品描述</h3>
            <p>hahahah</p>
            <p>hahahha</p>
            <p>hahaah</p>
          </div>
        </div>
        <div class="describe_detail">
          <img src="@/assets/images/百媚蛙2_19@2x.png" alt="">
          <div class="product_describe">
            <h3>产品描述</h3>
            <p>hahahah</p>
            <p>hahahha</p>
            <p>hahaah</p>
          </div>
        </div>
        <div class="describe_detail">
          <img src="@/assets/images/百媚蛙2_19@2x.png" alt="">
          <div class="product_describe">
            <h3>产品描述</h3>
            <p>hahahah</p>
            <p>hahahha</p>
            <p>hahaah</p>
          </div>
        </div>
      </div>
    </div>
    <div class="article">
      <div class="article_detail">
        <h3 class="title">相关文章</h3>
        <p>我们今天发布了一个产品发布会等等
          我们今天发布了一个产品发布会等等</p>
      </div>
      <div class="company">
        <div class="company_detail">
          <div class="art_pic">
            <img src="@/assets/images/百媚蛙2_31@2x.png" alt="">
          </div>
          <div class="company_information">
            <h3>公司最新资讯</h3>
            <span style="display: block">2020-4-27</span>
            <p>哈哈哈哈</p>
            <p>哈哈哈哈</p>
            <p>哈哈哈哈哈</p>


          </div>

        </div>
        <div class="company_detail">
          <div class="art_pic">
            <img src="@/assets/images/百媚蛙2_31@2x.png" alt="">
          </div>
          <div class="company_information">
            <h3>公司最新资讯</h3>
            <span style="display: block">2020-4-27</span>
            <p>哈哈哈哈</p>
            <p>哈哈哈哈</p>
            <p>哈哈哈哈哈</p>

          </div>

        </div>
        <div class="company_detail">
          <div class="art_pic">
            <img src="@/assets/images/百媚蛙2_31@2x.png" alt="">
          </div>
          <div class="company_information">
            <h3>公司最新资讯</h3>
            <span style="display: block">2020-4-27</span>
            <p>哈哈哈哈</p>
            <p>哈哈哈哈</p>
            <p>哈哈哈哈哈</p>

          </div>

        </div>

      </div>

    </div>
    <div class="about_us">
      <div class="show_about">
        <h3 class="title">关于我们</h3>
        <p>意思酒店沸点时间覅电视剧放屁是大家丰盛的覅偶多少积分IDS积分is豆浆粉史蒂夫哦代收款f
          搭配搜附近水电费绝对是副驾驶的佛牌平顶山见佛菩萨大姐夫颇受打击佛牌电视机佛牌电视机发o
          哦代收款附近哦的说法是奇偶的皮肤是哒破费苏东坡发送到金佛平顶山附近偶的商品房绝对是颇丰j</p>
      </div>

      <div class="show_img">
        <img src="@/assets/images/about.png" alt="">

      </div>
    </div>


  </div>
</template>

<script>

  import Banner from '@/components/banner'

  export default {
    name: "home",
    components: {

      Banner
    },
    data() {
      return {
        form: {
          name: "",
          weight: "",
          mobile: "",
          BMI: ""
        },
        pic:[]
      }
    }


  }
</script>

<style lang="stylus">
  body
    margin 0
    padding 0

    .contain
      width: 100vw
      height 100vh
      position relative

    .describe_fat
      width 100%

      .title
        margin-top 53px
        text-align center
        font-size 28px
        color #2E2C2C

      .comment_content
        width: 100%
        margin-top 46px
        display flex
        flex-direction column
        align-items center

        p
          text-align center
          font-size 16px
          opacity 0.28
          color #2E2C2C

    .case_show
      width 1179px
      height 406px
      position relative
      margin-left 50%
      transform translate(-50%, 0)
      margin-top 40px
      display grid
      grid-template-columns 301px 293px 301px 284px
      grid-template-rows 203px 203px

    .caculate_test
      position relative
      width 1280px
      height 604px
      margin-left 50%
      transform translate(-50%, 0)
      margin-top 91px
      box-sizing border-box
      padding 61px 91px 41px 127px
      /*background-color: #8FC31F;*/
      background linear-gradient(to right,#67B26F,#4ca2cd)

      .caculate_content
        background-color #FFFFFF
        height 482px
        position relative

        .caculate
          width: 396px
          height: 502px
          position relative

          .caculate_detail
            font-size 26px
            line-height 24px
            position absolute
            top 15px
            left 92px
            width 243px
            height 502px
            text-align center

            h3
              color #403F3F
              font-weight bold

          p
            text-align left
            height: 14px
            font-size 14px
            color #666666

          .show_video
            top 15px
            right -600px
            position absolute
            width 639px
            height 400px


    .content_start
      width 100%
      margin-top 71px
      height: 1785px;
      position relative

      .start_show
        display flex
        flex-wrap wrap
        width 1283px
        height 100%
        position absolute
        left 50%
        transform translate(-50%, 0)
        justify-content space-around

        .describe_detail
          width 526px
          height 455px
          background-color: skyblue;
          position relative

          .product_describe
            position absolute
            left 159px
            top 64px
            width 415px
            height 327px
            background-color #AAA9A9
            border 1px solid #DEDADA
            opacity 0.72
            box-sizing border-box
            padding-left 54px
            padding-top 30px

    .article
      width 100%
      height 854px

      .article_detail
        width 100%
        margin 0 auto
        margin-top 70px
        text-align center
        margin-bottom 143px

        .title
          font-size 60px
          font-weight bold
          line-height 80px

      .company
        width 100%
        height 340px
        display flex

        .company_detail
          display flex
          width 33.33%

        art.pic
          width 353px
          height 294px

          img
            width 100%
            height 100%
            object-fit cover

        .company_information
          width 254px
          height 100%
          text-align center

    .about_us
      width 100%
      height 512px
      padding-left 16.3%
      box-sizing border-box
      margin-bottom 56px

      div
        display inline-block

      .show_about
        width 33.3%
        height 100%
        box-sizing border-box
        padding-top 113px
        padding-left 23px
        vertical-align bottom
        margin-right 79px

        .title
          font-size 60px
          line-height 80px
          font-weight bold

      .show_img
        width 33.4%
        height 441px

        img
          display inline-block
          width 100%
          height 100%
          object-fit cover


</style>
