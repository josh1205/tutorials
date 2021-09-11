/*
JavaScript Syntax
*/


// P R I N T I N G
/*
//document.write("<h1>Hello World</h1>");
//document.write("<hr>");
//document.write("<p>This is a javascript tutorial</p>");
//alert("This is an alert");
//console.log("Logging to the console")
*/

// V A R I A B L E S
/*
var name = " Mike";
var occupation = 'Programmer';

var age = 20;
var gpa = 2.5;

var isTall;
isTall = true;

name = "Josh";

document.write("My name is " + name);
*/

// C A S T I N G   &&   C O N V E R T I N G
/*
document.write(100 + Number("25") + "<br>");
document.write(100 + parseInt("50") + "<br>");
document.write(100 + parseFloat("50.99") + "<br>");
*/


// S T R I N G S

/*
var greeting = "Hello";
//indexes       01234

document.write(greeting.length + "<br>");
document.write(greeting.charAt(0) + "<br>");
document.write(greeting.indexOf("llo") + "<br>");
document.write(greeting.indexOf("z") + "<br>");
document.write(greeting.substring(2) + "<br>");
document.write(greeting.substring(1, 3) + "<br>");


https://www.hackerrank.com/challenges/js10-try-catch-and-finally/topics
more string functions
*/

// N U M B E R S

/*
document.write(2 * 3 + "<br>"); //basic arithmetic
document.write(2 ** 3 + "<br>"); //exponents
document.write(10 % 3 + "<br>");  //remainders
document.write((1 + 2) * 3 + "<br>"); //order of operations
document.write(10 / 3 + "<br>");  //division with ints is not like c++

var num = 10;
num += 100;
document.write(num + "<br>");
num++;
document.write(num + "<br><br>");

//Math library
document.write(Math.pow(2,3) + "<br>")
document.write(Math.sqrt(144) + "<br>");
document.write(Math.round(2.7) + "<br>");
*/

// U S E R    I N P U T

/*
//var name = window.prompt("Enter your name: ")
//alert("Your name is " + name);
*/


// G E T T I N G   H T M L
/*
var header = document.getElementById("myHeader");
header.style = "color:blue; background-color:red;";
document.write( header.getAttribute("giraffe") );
header.innerHTML = "Elephant Academy";
*/

// A R R A Y S

/*
var luckyNumbers = [4, 8, 15, 16, "twenty", false];

luckyNumbers[0] = 90;

document.write(luckyNumbers[0] + "<br>");
document.write(luckyNumbers[1] + "<br>");
document.write(luckyNumbers.length);
*/

// N   D I M E N S I O N A L   A R R A Y S
 
/*
var numberGrid = [ [1, 2], [3, 4] ];
numberGrid[0][1] = 99;
document.write(numberGrid[0][0] + "<br>");
document.write(numberGrid[1][0] + "<br>");
*/


// A R R A Y   F U N C T I O N S

/*
var friends = new Array();
friends.push("Oscar");
friends.push("Angela");
friends.push("Kevin");

//friends.pop();
document.write(friends + "<br>");
document.write(friends.indexOf("Angela") + "<br>");
document.write(friends.indexOf("Z") + "<br>");
document.write(friends.reverse() + "<br>");
document.write(friends.sort() + "<br>");
*/


// O B J E C T S

/*
var student = {
    name: "Jim",
    major: "Business",
    age: 19,
    gpa: 2.5
}

student.name = "Andy";
document.write(student.name + "<br>");
document.write(student.major + "<br>");
document.write(student.gpa + "<br>");
*/


// F U N C T I O N S

/*
var sum = addNumbers(4,60);
document.write(sum);

function addNumbers(num1, num2)
{
    return num1 + num2;
}
*/

// I N L I N E   E V E N T   L I S T E N E R S

/*
function handleClick(element)
{
    alert("Clicked " + element.id);
}

or programmaticly

when doing this programaticly you do not need to use the "on"
for Ex:

onclick
to
click



var header = document.getElementById("myHeader");

header.addEventListener("click", function(){
    alert("You clicked " + header.id);
});

*/

// I F   E L S E   S T A T E M E N T S

/*
    Choose not to write becuase it is very close to C++
*/

// S W I T C H    S T A T E M E N T S

/*
var myGrade = "A";

switch(myGrade){
    case "A":
        document.write("You pass");
        break;
    case "F":
        document.write("You fail");
        break;
    default:
        document.write("Invalid grade");
}
*/

// L O O P S

/*
var index = 1;

while(index <= 5)
{
    document.write(index);
    index++;
}


do{
    document.write(index)
    index++
}while(index <=5);



for(var i = 0; i < 5; i++)
{
    document.write(i);
}



var luckyNumber = [4, 8, 15, 16, 23, 42];

luckyNumber.forEach(function(LuckyNum){
    document.write(LuckyNum + "<br>");
});

*/


// E X C E P T I O N    C A T C H I N G

/*
//var x = y + 9;

try{
    // throw "Something went wrong";
    var x = y + 9;
}catch(err){
    document.write(err);
}finally{
    //this code always gets executed
}
*/

// C L A S S E S   A N D   O B J E C T

/*
class Book{
    constructor(title, author){
        this.title = title;
        this.author = author;
    }

    readBook(){
        document.write("Reading " + this.title + " by " + this.author);

    }
}

var book1 = new Book("Harry Potter", "JK Rowling");

document.write(book1.title + "<br>");
book1.readBook();
*/

//G E T T E R S   A N D   S E T T E R S

/*
class Book{
    constructor(title, author){
        this.title = title;
        this.author = author;
    }

    get title(){
        document.write("<p>getting<p>");
        return this._title;
    }

    set title(title){
        document.write("<p>setting<p>");
        this._title = title;
    }


    readBook(){
        document.write("Reading " + this.title + " by " + this.author);

    }
}


var book1 = new Book("Harry Potter", "JK Rowling");

document.write(book1.title + "<br>");
book1.readBook();
*/


// I N H E R I T A N C E

/*
class Chef{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    makeChicken(){
        document.write("The chef makes chicken <br>");

    }

    makeSalad(){
        document.write("The chef makes salad <br>");

    }

    makeSpecialDish(){
        document.write("The chef makes a special dish <br>");
    }
}

class ItalianChef extends Chef{
    constructor(name, age, countryOfOrigin){
        super(name, age);
        this.countryOfOrigin = countryOfOrigin;
    }

    makePasta()
    {
        document.write("The chef makes pasta <br>")
    }

    //overridden
    makeSpecialDish()
    {
        document.write("The chef makes chicken parm <br>");
    }
}

var myChef = new Chef("Gordon Ramsey", 50);
myChef.makeSpecialDish();

var myItalianChef = new ItalianChef("Massimo Bottura", 55, "Italy");
myItalianChef.makeSpecialDish();
document.write(myItalianChef.age);

*/
