---
title: How to extend IComparable and IComparer in C#
date: "2020-03-03T21:00:00.000Z"
description: "Using interfaces IComparable and IComparer"
---
Hello everyone,

So this time while we still talking about Lists in C#, sometimes we want to sort that list and C# already provide to us a method with an intuitive name hehe, the method `Sort()`, let's see how it works?

## Sorting Lists of primitive types in C#
That's simple we just create our list of primitive type like int or string and call the method `Sort()`, a brief example:

```csharp
namespace Movians.Blog.Examples
{
    public class Program
  {
    public static void Main(string[] args)
    {
      var integers = new List<int>();

      integers.Add(99);
      integers.Add(1049);
      integers.Add(999);
      integers.Add(12);
      integers.Add(1);
      integers.Add(10);
      integers.Add(9);

      // ----------------------
      integers.Sort();
      // ----------------------

      foreach (var item in integers)
      {
        Console.WriteLine(item);

       /*
        * Output:
        * 1
        * 9
        * 10
        * 12
        * 99
        * 999
        * 1049
        */
      }


      Console.ReadLine();
    }
  }
}
```

That's simple and the compiler is smart enough to know the numbers precedence, as well the alphabetical order, but when comparing more complex a list of complex objects we can say that it has a slight difference. That's because we have to extend the IComparable interface if we haven't implemented that interface the compiler throws an exception to us.

## IComparable
The IComparable interface has just one method to implement in our class and the method is the `CompareTo(object obj)`, it returns an integer, it's a convention to return -1 if the class we comparing precedes the obj, and return 0 if the item is equal the obj and if the obj precede the comparison item. Let's see an example:

```csharp
namespace Movians.Blog.Examples.Models
{
  public class Person : IComparable
  {
    public int Age { get; protected set; }
    public string FirstName { get; protected set; }
    public int Height { get; protected set; }

    public Person(int age, string firstName, int height)
    {
      Age = age;
      FirstName = firstName;
      Height = height;
    }

    public int CompareTo(object obj)
    {
      // Here we're using the keyword "as" because if the comparison obj is null it'll not throw a exception to us and set otherPerson as null.
      var otherPerson = obj as Person;

      // Here we're testing in case otherPerson is null
      if (otherPerson == null || Age < otherPerson.Age)
        return -1;
      else if (Age == otherPerson.Age)
        return 0;
      else 
        return 1;
    }
  }
}

namespace Movians.Blog.Examples
{
  public class Program
  {
    public static void Main(string[] args)
    {
      var people = new List<Person>()
      {
        new Person(21, "Matheus", 171),
        new Person(30, "David", 180),
        new Person(15, "Helena", 169),
        new Person(36, "Conce", 176)
      };

      // -------------------
      people.Sort();
      // -------------------

      foreach(var person in Person)
      {
        Console.WriteLine($"Name {person.FirstName}, age {person.Age}, height {person.Height}");

       /*
        * Output:
        * Name Helena, age 15, height 169
        * Name Matheus, age 21, height 171
        * Name David, age 30, height 180
        * Name Conce, age 36, height 176
        */
      }

      Console.ReadLine();
    }
  }
}
```

But what if we want to sort by `Height`, we will have to implement all again? Nope, the `Sort()` method has an overload that accepts a argument of the interface `IComparer`, I will explain it in the next topic 😄.

## IComparer
The IComparer interface is a generic one hehe, where we have to pass the type of what we're comparing. And it has just one method as well.

```csharp
namespace Movians.Blog.Examples.Comparers
{
  public class PersonComparer : IComparer<Person>
  {
    public int Comparer(Person x, Person y)
    {
      if (x == y)
        return 0;
      else if (x == null)
        return 1;
      else if (y == null)
        return -1;
      else
        // We don't have to repeat the conditions to comparer x and y when the values aren't null because all the primitive types already extends IComparable and the Microsoft team already implemented it to us :)
        return x.Height.CompareTo(y);
    }
  }
}

namespace Movians.Blog.Examples.Models
{
  public class Person : IComparable
  {
    public int Age { get; protected set; }
    public string FirstName { get; protected set; }
    public int Height { get; protected set; }

    public Person(int age, string firstName, int height)
    {
      Age = age;
      FirstName = firstName;
      Height = height;
    }

    public int CompareTo(object obj)
    {
      // Here we're using the keyword "as" because if the comparison obj is null it'll not throw a exception to us and set otherPerson as null.
      var otherPerson = obj as Person;

      // Here we're testing in case otherPerson is null
      if (otherPerson == null || Age < otherPerson.Age)
        return -1;
      else if (Age == otherPerson.Age)
        return 0;
      else 
        return 1;
    }
  }
}

namespace Movians.Blog.Examples
{
  public class Program
  {
    public static void Main(string[] args)
    {
      var people = new List<Person>()
      {
        new Person(21, "Matheus", 171),
        new Person(30, "David", 180),
        new Person(15, "Helena", 169),
        new Person(36, "Conce", 176)
      };

      // -------------------
      people.Sort(new PersonComparer());
      // -------------------

      foreach(var person in Person)
      {
        Console.WriteLine($"Name {person.FirstName}, age {person.Age}, height {person.Height}");

       /*
        * Output:
        * Name Helena, age 15, height 169
        * Name Matheus, age 21, height 171
        * Name Conce, age 36, height 176
        * Name David, age 30, height 180
        */
      }

      Console.ReadLine();
    }
  }
}
```
Well to call the other overload of Sort , you just pass the class that you created extending the IComparer.

Hope y'all liked 😁.