using System;

namespace ArgsInfo
{
    class Program
    {
        static void Main(string[] args)
        {
            if(args.Length == 0)
            {
                Console.WriteLine("This is a smart app that uses args." +
                    " Please provide arguments next time. Pass \"help\" if you want to get more details");
                Console.ReadKey();
                return;
            }

            if(args[0] == "help")
            {
                Console.WriteLine("************Instructions");
                Console.WriteLine("* use one off the following commands followed by 2 numbers");
                Console.WriteLine("* 'add' : to add two members");
                Console.WriteLine("* 'sub' : to subtract two members");
                Console.WriteLine("**************************");

                Console.ReadKey();
                return;
            }
            else if(args.Length != 3)
            {
                Console.WriteLine("Invalid arguents, please access the instructions using 'help'.");
                Console.ReadKey();
                return;
            }


            Console.WriteLine("Hello" + args[0]);
            Console.ReadKey();

        }
    }
}
