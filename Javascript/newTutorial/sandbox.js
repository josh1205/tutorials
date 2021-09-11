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

const ul = document.querySelector('.people');

const people = ['mario', 'josh', 'angelo'];

let html = ``;

people.forEach(function(person){
    //create a html template
    html += `<li style="color: purple>${person}</li>`;
});

console.log(html);
ul.innerHTML = html;