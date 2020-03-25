import { butter } from '../plugins/buttercms'

export default {
  async retrievePost(slug) {
    const post = await butter.post.retrieve(slug)
    return post.data.data
  },
  async retrievePostsFromCategory(category) {
    const posts = await butter.post.list({
      category_slug: category,
      page_size: 30
    })

    return posts.data.data
  }
}
