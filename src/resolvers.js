import { books } from './data'

const resolvers = {
    Query: {
        books: () => books,
    }
}

export default resolvers
