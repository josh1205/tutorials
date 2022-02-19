import UIKit

var str = "Hello, playground"

// Basic function
func sayHello()
{
    print("hello!")
}
sayHello()

//Function with parameters
func sayHelloTo(_ name:String, _ age:Int)
{
    print("Hello \(name) you are \(age) years old!")
    
    
}
sayHelloTo("Josh", 20)

// Function with a return value
func addFourTo(x:Int) -> Int
{
    let sum = x + 4
    
    return sum
}
var result = addFourTo(x: 10)
print(result)

func goodMorning ()
{
    
print("Good Morning")
    
}
goodMorning()

func printTotalWithTax (_ subtotal:Double)
{
    print(subtotal * 1.13)
}
printTotalWithTax(60)

func getTotalWithTax (_ subtotal:Double) -> Double
{

    return subtotal * 1.13
    
}
print(getTotalWithTax(60))

func calculateTotalWithTax (_ subtotal:Double, _ tax:Double) -> Double
{
    
    return subtotal * tax

}
print(calculateTotalWithTax(60, 1.11))
