using System;

namespace Delagates1
{
    class Program
    {

        public delegate double PerformCalculation(double x, double y);

        public delegate string GetTextDelegate(string name);

        public delegate double GetResultDelegate(double a, double b);

        public static double Addition(double a, double b)
        {
            Console.WriteLine(a+b);
            return a + b;
        }

        public static double Division(double a, double b)
        {
            Console.WriteLine(a/b);
            return a / b;
        }

        public static double Subtraction(double a, double b)
        {
            Console.WriteLine(a-b);
            return a - b;
        }


        static void Main(string[] args)
        {
            //PerformCalculation getSum = Addition;
            //Console.WriteLine(getSum(5.0, 5.0) );
            //PerformCalculation getQuotient = Division;
            //Console.WriteLine(getQuotient(10.0, 5.0));

            //PerformCalculation multiCalc = getSum + getQuotient;
            //multiCalc += Subtraction;
            //multiCalc -= getSum;
            //Console.WriteLine(multiCalc(3.2, 3.2));

            //Anonomyous method or inline delegate
            GetTextDelegate getTextDelegate = delegate (string name)
            {
               return "Hello" + name;
            };

            //expression lambda expression
            GetTextDelegate getHelloText = (string name) => { return "Hello " + name; };

            // statement lambda expression
            GetTextDelegate getGoodbyeText = (string name) => {
                return "Goodbye " + name;
            };

            //This only works with one variable
            GetTextDelegate getWelcomeText = name => "Welcome, " + name;

            GetResultDelegate getSum = (a, b) => a + b;
            GetResultDelegate getProduct = (a, b) => a * b;
            DisplayNum(getProduct);


            DisplayNum(getSum);

            
        }

        static void DisplayNum(GetResultDelegate getResultDelegate)
        {
            Console.WriteLine(getResultDelegate(3.5, 3.5));
        }
    }
}
