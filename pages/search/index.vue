 <template>
   <div class="hot_search">
    <search  :placeholder="placeholder" >
      <div class="food_various">
        <h3 class="title"><i></i>常见的食物分类<i></i></h3>
        <div class="food_kind">
          <nuxt-link :to="{path:'/foodDetail',query:{m:'food',tag:'categories',cid:item.id}}" class="food"    v-for="(item,index) in productList" :key="index">
            <div class="pic">
              <img :src="item.pic" alt="">
            </div>
            <div class="tag_title" v-html="item.excerpt.rendered"></div>
            <div class="name" v-html="item.content.rendered"></div>
          </nuxt-link>

        </div>
      </div>
    </search>

   </div>
 </template>

 <script>
 import search from '@/components/search'
 import {getProductTags} from "../../api/product"
 import {getPic} from "../../plugins/gl-components";

 export default {
    name:"hto_search",
    components:{
      search
    },
    data(){
      return {
        placeholder:"搜索食物查询热量",
        productList:[]
      }
    },
   async asyncData({error, query}) {
          const productList = await getPic((await getProductTags(7)).list,"Array")
          console.log(productList)
          return {
            productList:productList
          }


   }

 }



 </script>

 <style scoped lang="stylus">
  .hot_search
    width 100%
    height 100%

 </style>
