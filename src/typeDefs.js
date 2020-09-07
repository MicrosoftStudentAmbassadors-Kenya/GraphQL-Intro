import { gql } from 'apollo-server'

const typeDefs = gql`
  # Comments in GraphQL strings 

  # This "Book" type defines the queryable fields for every book in our data source.
  type Post {
    id: ID!
    title: String!
    author: String!
    body: String!
    published: Boolean
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    posts: [Post!],
    post(id: ID!): Post!
  }

  type Mutation {
    createPost(title: String!, author: String!, body: String): Post
    publishPost(id: ID!): Post
  }
`

export default typeDefs
