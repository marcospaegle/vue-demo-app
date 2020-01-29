import axios from '@/config/axios'

const path = '/api/v1/posts'

function handleWithSuccessResponse (response) {
  const posts = []
  for (const post of response.data) {
    posts.push(post)
  }

  return posts
}

export default {
  fetch ({ commit }, payload) {
    axios.get(path)
      .then(function (response) {
        const posts = handleWithSuccessResponse(response)
        commit('setPosts', posts)
      })
      .catch(function (error) { console.error(error) })
  }
}
