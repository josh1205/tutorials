// //function expression

// const speak = function() {
//     console.log('good day');

// };

// //arrow function
// const calcArea2 = (radius,circle) => {
//     return 3.14 * radius**2 + circle;
// };

// const calcArea = radius => 3.14 * radius**2;



// const area = calcArea(5);
// console.log('area is:', area);

// //call back functions

// const myFunc = (callBackFunc) => {
//     //do something
//     let value = 50;
//     callBackFunc(value);
// }

// myFunc(value => {
//     //do something
//     console.log(value);
// })

// const ul = document.querySelector('.people');

// const people = ['mario', 'josh', 'angelo'];

// let html = ``;

// people.forEach(function(person){
//     //create a html template
//     html += `<li style="color: purple>${person}</li>`;
// });

// console.log(html);
// ul.innerHTML = html;

let user = {
    name: 'Josh',
    age: 30,
    email: 'josh@gmail.com',
    blogs: ['why mac and cheese', '10 cool things'],
    login: function() {
        console.log('the user logged in');
    },
    logout: function() {
        console.log('the user logged out');
    },
    logBlogs() {
        console.log(this.blogs)
    }
};

console.log(user.name);
user.age = 35;
user['age'] = 26;
console.log(user.age);

user.login();

user.logBlogs();

const blogs = [
    { title: 'why mac and cheese rules', likes: 30 },
    { title: 'why apple and pears', likes: 20 }
]