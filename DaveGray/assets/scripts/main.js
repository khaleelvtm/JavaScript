import { posts } from "./post.js";

posts.forEach((post) => {
	console.log(post);
});
console.clear();

let filterPost = posts.filter((post) => {
	return post.userId === 5;
});
console.log(filterPost);

let mapPost = filterPost.map((post) => {
	return post.id * 10;
});
console.log(mapPost);

let redusePost = mapPost.reduce((sum, post) => {
	console.log("sum:", sum);
	console.log("post:", post);
	return sum + post;
});
console.log(redusePost);
