import { gql } from 'apollo-server'

const typeDefs = gql`
  # Comments in GraphQL strings 

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    id: ID!
    title: String!
    author: String!
    description: String!
    published: Boolean
    rating: Int
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book!],
    book(id: ID!): Book!

  }

  type Mutation {
    createBook(title: String!, author: String!, description: String, rating: Int): Book
    publishBook(id: ID!): Book
  }
`

export default typeDefs
