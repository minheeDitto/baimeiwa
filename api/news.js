import http from '../plugins/http'

/**
 * 获取指定文章的数据
 * @param {} id 文章id
 */


export const getArticle = (count,page,id) => {
  const args = {
    url: `/posts?per_page=${count}&page=${page}&categories=${id}`
  }

  return http.request(args)
}

export const getTotal = (id)  =>{
  const args = {
    url:`/categories/${id}`
  }
  return http.request(args)
}

export const getDetail = (id) =>  {
  const args = {
    url: `/posts/${id}`
  }
  return http.request(args)

}

export const getBeforeOrAfter = (date,params,order) => {
  const args = {
    url:`/posts?${params}=${date}&order=${order}&categories=6`
  }
  return http.request(args)

}

export const searchNews = (keywords,per_page,page) => {
  const args   = {
    url:`/posts?search=${keywords}&per_page=${per_page}&page=${page}&categories=6`
  }
  return http.request(args)

}


export const getMedia = () => {
  const args = {
    url:"/media"
  }
  return http.request(args)
}


