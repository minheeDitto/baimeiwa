<template>
  <div>
  <headnav :color-txt="colorTxt"  :bg-color="bgColor" @searchInfo="searchInfo"></headnav>
  <Nav></Nav>
    <nuxt />
    <Footer></Footer>
    <Bottom  />
  </div>
</template>

<script>
import headnav from '@/components/headernav/index'
import Nav from '@/components/nav'
import Footer from '@/components/footer'
import Bottom from '@/components/footer_bottom'
  export default {
    data(){
      return {
        colorTxt:'',
        bgColor:''
      }
    },
    components:{
      headnav,
      Nav,
      Footer,
      Bottom
    },
    methods:{
      searchInfo(val){
        if (val == undefined){
          val = "all"
        }
        this.$router.push({path:"/searchNews",query:{keywords:val,page:1}})
      }
    }
  }
</script>
<style>

</style>
