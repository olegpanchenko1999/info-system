using System;
using System.Collections.Generic;

namespace DesignPatterns
{
    public class Program
    {
        public static void Main(string[] args)
        {
            // creation pattern lab 10
            ICreator[] creators = { new HumanDepartmentCreator(), new GuardCreator(), new EmployeeCreator(), new InspectorCreator() };
            foreach (ICreator creator in creators)
            {
                IPosition position = creator.FactoryMethod();
                position.Greetings();
            }


            // structural pattern 11
            Pass pass = new Adapter();
            pass.ScreenSay();


            // behaviour pattern Salad 12
            Originator o = new Originator();
            Caretaker c = new Caretaker();
            o.State = "Ivanenko Stepan";
            c.Salad = o.CreateSalad();
            o.State = "Stepanenko Ivan";
            c.Salad = o.CreateSalad();
            o.State = "Vasylenko Olexandr";
            o.SetSalad(c.Salad);

            Console.Read();
        }
    }
}