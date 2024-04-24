// query to get all authors and all details

query {
	authors{
	id
	name
	email
	}
}


//query to get only names of all authors
query {
authors {
	name
}
}

//query to get all posts 

query {
	posts {
	id
	title
	content
	authorId
	}
}

// query to get all post and its title only
query {
posts {
title
}
}

//query to get all authors and their all posts
query {
author (id: "101"){
	id
	name
	email
	post {
		id
		title
		content
	}
}
}

// query to get specific post and its author

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


// query to get all the posts and its author
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


// query to get all the authors and their post
query {
authors {
	id
	name
	email
	post {
		id
		title
		content
	}
}
}

