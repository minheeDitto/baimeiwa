<template>
  <div class="search">
    <div class="search_input">
      <h3 class="title">超过数十万种食物的数据</h3>
      <div class="search_text">
        <el-input
          :placeholder="placeholder"
          prefix-icon="el-icon-search"
          v-model="input1"
          tabindex="4"
          class="put">
        </el-input>
        <div class="search_button">
          <el-button type="success" class="Button">搜索</el-button>
        </div>

      </div>

    </div>
    <div class="search_info">

      <slot />
    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    props:["placeholder"],
    data(){
      return {
        input1:""
      }
    }





  }
</script>

<style>
  .name p {
    color: #5b5c5b;
    font-size: 18px;
  }
  .tag_title p{
      color:#242525;
      font-weight: normal;
      font-size: 22px;
  }
  .pic{
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .pic img{
    width: 100%;
    height: 100%;
    border-radius: 50%;

  }
  .tag_title p:hover,.name p:hover{
    color:#2ecc71;
  }
</style>

<style scoped lang="stylus">
  .search
    width 100%

    .search_info
      width 1200px
      margin 0 auto
    .search_input
      width 100%
      height 300px
      background: url("../../assets/images/bg.jpg") center center no-repeat
      background-size cover
      display flex
      flex-direction column
      justify-content space-around
      align-items center
      .title
        font-size 50px
        line-height 80px
        height 80px
        color  #FFFFFF

      .search_text
        width 800px
        height 89px
        margin-top 58px
        position relative

        .put>>>.el-input__inner
          border-radius 58px  !important
        .search_button
          position absolute
          top 0
          right 0
          .Button
            height 40px
            width 100px
            border-top-right-radius 58px
            border-bottom-right-radius 58px

    .food_various
      width 1200px
      height 900px
      box-sizing border-box
      padding 60px 40px 70px 40px

      .title
        line-height 40px
        height 40px
        font-weight bold
        font-size 20px
        color #2A2525
        text-align center
        margin-bottom 80px

        i
          vertical-align middle
          background-color  #242525
          display inline-block
          width 52.5px
          height 2px
      .food_kind

        width: 1200px
        height 100%

        a
          display inline-block
        .food
          float left
          width 320px
          height 183px
          display flex
          align-items center
          flex-direction column
          justify-content space-around
          position relative
          margin 0 80px 40px 0





</style>
