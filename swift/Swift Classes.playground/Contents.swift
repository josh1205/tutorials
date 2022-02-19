import UIKit

/*class spaceship
{
    
    var fuelLevel = 100
    var name = " "
    
    func cruise()
    {
        print("Cruising is initiated for \(name)")
    }

    func thrust()
    {
        
        print("Rocket thrusters initiated for \(name)")
        
    }
    
    
}

var myship:spaceship = spaceship()
myship.name = "Spike"
myship.cruise()
print(myship.name)
print(myship.fuelLevel)
 */

class spaceship
{

    var fuellevel = 50
    
    func liftoff()
    {
        
        fuellevel -= 50
        print("We have lift off")
        print("Current fuel value at \(fuellevel)")
        
    }

    func addfuel(fuel:Int)
    {
        fuellevel += fuel
        print("Fuel Added:\(fuel)")
    }

    func thrust()
    {
        fuellevel -= 15
        print("Rocket is thrusting")
        print("Fuel is at \(fuellevel)")
    }

    func cruise()
    {
        fuellevel -= 5
        print("Rocket is crusing")
        print("Fuel level is at \(fuellevel)")
    }

    
}

var myship:spaceship = spaceship()
myship.addfuel(fuel: 50)
myship.liftoff()
myship.thrust()
myship.cruise()


