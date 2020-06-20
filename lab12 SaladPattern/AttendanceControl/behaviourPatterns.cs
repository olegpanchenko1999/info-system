using System;
using System.Collections.Generic;
using System.Text;

namespace DesignPatterns
{
    public class Originator
    {
        private string _state;

        public string State
        {
            get { return _state; }
            set
            {
                _state = value;
                Console.WriteLine("Enter employee: " + _state);
            }
        }

        public Salad CreateSalad()
        {
            return (new Salad(_state));
        }

        public void SetSalad(Salad Salad)
        {
            Console.WriteLine("Restoring person...");
            State = Salad.State;
        }
    }

    public class Salad
    {
        private string _state;

        public Salad(string state)
        {
            this._state = state;
        }

        public string State
        {
            get { return _state; }
        }
    }

    public class Caretaker
    {
        private Salad _Salad;

        public Salad Salad
        {
            set { _Salad = value; }
            get { return _Salad; }
        }
    }
}