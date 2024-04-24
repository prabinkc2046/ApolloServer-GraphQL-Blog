# GraphQL Blog API with Apollo Server

This GraphQL server is set up using Apollo Server to manage a simple blog application where posts are associated with authors. Each post has a single author, and each author can have multiple posts.

## Data Models

- **Author**
  - `id`: Unique identifier for the author.
  - `name`: Name of the author.
  - `email`: Email address of the author.
  - `posts`: List of posts written by the author.

- **Post**
  - `id`: Unique identifier for the post.
  - `title`: Title of the post.
  - `content`: Content of the post.
  - `authorId`: Identifier for the author of the post.
  - `author`: Details of the author who wrote the post.

## GraphQL Schema

The GraphQL schema defines the following main types and queries:

### Types

- `Author`: Represents a blog post author with their posts.
- `Post`: Represents a blog post with details about its author.

### Queries

- `posts`: Retrieves all posts.
- `post(id: ID!)`: Retrieves a specific post by ID.
- `authors`: Retrieves all authors.
- `author(id: ID!)`: Retrieves a specific author by ID.

## Sample Queries

Below are some GraphQL queries you can use to interact with the API:

### Get All Authors

```graphql
query {
  authors {
    id
    name
    email
  }
}

### Get Names of All Authors
```graphql
query {
  authors {
    name
  }
}

### Get All Posts
```graphql
query {
  posts {
    id
    title
    content
    authorId
  }
}

### Get All Posts and Their Titles Only
```graphql
query {
  posts {
    title
  }
}

### Get All Authors and Their All Posts
```graphql
query {
  author(id: "101") {
    id
    name
    email
    posts {
      id
      title
      content
    }
  }
}

### Get Specific Post and Its Author
```graphql
query {
  post(id: "1") {
    id
    title
    content
    author {
      id
      name
      email
    }
  }
}

### Get All Posts and Their Authors
```graphql
query {
  posts {
    id
    title
    content
    authorId
    author {
      id
      name
      email
    }
  }
}

### Get All Authors and Their Posts
```graphql
query {
  authors {
    id
    name
    email
    posts {
      id
      title
      content
    }
  }
}


