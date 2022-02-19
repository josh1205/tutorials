import UIKit

/*let x = 16

if x < 11
{
    print("Hello")
}
else if x > 15
{
    print("Goodafternoon")
}
else
{
    print("Goodbye")
}
 
 */

func vowelDetector(_ word:String) -> Bool
{
    if (word.contains("a")) || (word.contains("e")) || (word.contains("i")) || (word.contains("o")) || (word.contains("u"))
    {
        return true
    }
    else
    {
        return false
    }

}

print(vowelDetector("sync"))
