using System;

namespace enumerations
{
    class Program
    {
        enum Day {Mo, Tu, We, Th, Fr, Sa, Su };
        enum Month { Jan = 1, Feb, Mar= 5, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec};

        static void Main(string[] args)
        {
            Day fr = Day.Fr;
            Day su = Day.Su;

            Day a = Day.Fr;

            //Console.WriteLine(fr== a);
            //Console.WriteLine(Day.Mo);
            //Console.WriteLine((int)Day.Mo);

            Month jan = Month.Jan;
            Month feb = Month.Feb;
            Console.WriteLine((int)feb);
            Console.WriteLine((int)Month.Apr);
            

            //Random Library
            Random dice = new Random();
            while (true)
            {
                Console.WriteLine("Write your question");
                string input = Console.ReadLine();
                int fortuneNumber = dice.Next(1,4);
                if (fortuneNumber == 3)
                {
                    Console.WriteLine(fortuneNumber);
                    Console.WriteLine("The answer to \"{0}\" is yes", input);
                }
                if (fortuneNumber == 2)
                {
                    Console.WriteLine(fortuneNumber);
                    Console.WriteLine("The answer to \"{0}\" is no", input);
                }
                else
                { 
                    Console.WriteLine(fortuneNumber);
                    Console.WriteLine("The answer to \"{0}\" is maybe", input);
                }
            }





        }
    }
}
