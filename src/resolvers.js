import { posts } from './data'

let postsLength = posts.length
const resolvers = {
    Query: {
        posts: () => posts,
        post: (_root, args, _ctx) => {
            const postId = args.id

            const post = posts.find(post => post.id = postId)
            return post
        }
    },
    Mutation: {
        createPost: (_root, args, _ctx) => {
            const post = {
                id: `post-${++postsLength}`,
                title: args.title,
                author: args.author,
                body: args.body,
                published: false
            }

            posts.push(post)
            return post

        },
        publishPost: (_root, args, _ctx) => {
            const postId = args.id

            let post = posts.find(post => post.id = postId)
            post.published = true
            console.log(post)
            return post
        }
    }
}

export default resolvers
