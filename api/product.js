import http from '../plugins/http'

export const getProductTags = (id) => {
  const args = {
    url:`/posts?categories=${id}`
  }
  return http.request(args)

}
