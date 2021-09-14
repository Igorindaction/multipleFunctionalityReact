import axios from "axios"

export default class PostService{
        static async getAll(page = 1, limit = 10){
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`, {
              params: {
                _page: page,
                _limit: limit
              }
            })
            return response
        }
        static async getPageInfo(id){
          const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/` + id)
          return response
        }
        static async getPostComments(id){
          const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
          return response
        }
}