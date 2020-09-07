import { books } from './data'

let booksLength = books.length
const resolvers = {
    Query: {
        books: () => books,
        book: (_root, args, _ctx) => {
            const bookId = args.id

            let book = books.find(book => book.id = bookId)
            return book
        }
    },
    Mutation: {
        createBook: (_root, args, _ctx) => {
            const book = {
                id: `book-${++booksLength}`,
                title: args.title,
                author: args.author,
                description: args.body,
                published: false,
                rating: args.rating
            }

            books.push(book)
            return book

        },
        publishBook: (_root, args, _ctx) => {
            const bookId = args.id

            let book = books.find(book => book.id = bookId)
            book.published = true
            console.log(book)
            return book
        }
    }
}

export default resolvers
