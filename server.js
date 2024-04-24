const { ApolloServer, gql } = require('apollo-server');

const posts = [
  {
    id: '1',
    title: 'First Post',
    content: 'This is the content of the first post.',
    authorId: '101'
  },
  {
    id: '2',
    title: 'Third Post',
    content: 'This is the content of the first post.',
    authorId: '101'
  },
  {
    id: '3',
    title: 'Fourth  Post',
    content: 'This is the content of the first post.',
    authorId: '101'
  },
  {
    id: '4',
    title: 'Second Post',
    content: 'This is the content of the second post.',
    authorId: '102'
  },
  {
    id: '5',
    title: 'Second Post',
    content: 'This is the content of the second post.',
    authorId: '102'
  },
  {
    id: '6',
    title: 'Second Post',
    content: 'This is the content of the second post.',
    authorId: '102'
  },
  {
    id: '7',
    title: 'Second Post',
    content: 'This is the content of the second post.',
    authorId: '102'
  }

];

const authors = [
  {
    id: '101',
    name: 'John Doe',
    email: 'john.doe@example.com'
  },
  {
    id: '102',
    name: 'Jane Smith',
    email: 'jane.smith@example.com'
  }
];

//schema
//query => each post and its author assuming each post has only one author
//query => each author and their posts assuming each author can have multiple post
//query => list of posts only
//query => list of authors

const typeDefs = gql`
type Author {
	id: ID!
	name: String!
	email: String!
	post: [Post!]!
}

type Post {
	id: ID!
	title: String!
	content: String!
	authorId: String!
	author: Author!
}

type Query {
	posts: [Post!]!
	authors: [Author!]!
	post(id: ID!): Post
	author(id: ID!): Author
}

`;

// Since the post type has a author field in it, to get all the post and its
// authors, pass Post type as an instance
const resolvers = {
	Query: {
		posts: () => { return posts},
		post: (_, { id }) => { return posts.find(post => post.id === id)},
		author: (_, { id }) => { return authors.find(author => author.id === id)}, 
		authors: () => { return authors; },
	},
	Post: {
		author: (parent) => { return authors.find(author => author.id === parent.authorId)},
	},
	Author: {
		post: (parent) => {
			return posts.filter(post => post.authorId === parent.id);
		},
	},
	
};


const server = new ApolloServer({ typeDefs, resolvers});


server.listen().then( ( {url} ) => {
console.log(`Server is ready at ${url}`);
});

