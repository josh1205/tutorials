using System;

namespace Nullable
{
    class Program
    {
        static void Main(string[] args)
        {
            //nullable integer
            int? num1 = null;

            //not a nullable integer
            int num2;

            double? num3 = new Double();
            double? num4 = null;
            bool? boolval = new bool?();
            

            double? num6 = 13.1;
            double? num7 = null;
            double num8;

            if(num6 == null)
            {
                num8 = 0.0;
            }
            else
            {
                num8 = (double)num6;
            }

            Console.WriteLine("Value of num8 is {0}", num8);

            //null coalesing operator
            num8 = num6 ?? 8.53;

            Console.WriteLine("Value of num8 is {0}", num8);

            num8 = num7 ?? 8.53;

            Console.WriteLine("Value of num8 is {0}", num8);

            //Garbage collector call
            GC.Collect();

        }
    }
}
