const posts = [
	{ id: 01, name: "Appu" },
	{ id: 02, name: "Raju" },
];
const getPosts = () => {
	let lis = "";
	setTimeout(() => {
		posts.forEach((post) => {
			lis += `<li> ${post.id} - ${post.name} </li>`;
		});
		document.getElementById("nameList").innerHTML = lis;
	}, 1000);
};

const addPosts = (post) => {
	setTimeout(() => {
		posts.push(post);
	}, 2000);
};

addPosts({ id: 03, name: "Raheem" });
getPosts();






/////


class Student {
    constructor() {

    }
    setData(nm, ag) {
        this.name = nm;
        this.age = ag;
    }
    getData() {
        return `Name : ${this.name} Age : ${this.age}`;
    }
}
let object = new Student();
object.setData('Appu', 25);
console.log(object.getData());

class childClass extends Student {

}
let childObject = new childClass ();
childObject.setData('Ramu', 18);
console.log(childObject.getData());