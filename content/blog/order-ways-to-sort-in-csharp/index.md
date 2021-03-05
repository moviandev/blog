---
title: How to sort and filter using Linq and Lambda expressions
date: "2020-03-04T21:00:00.000Z"
description: "Sorting and filtering using the Linq collection"
categories: "C#, Basics"
tags: "C#, dotnet, beginner, learning"
---
Hi everyone,

So in this post I going to talk about sorting and filtering with the Microsoft team had developed to us that's the Linq, I think in a foreseeable future I going to craate a category just to talk about collections and the methods that come with Linq, but first things first, what's linq? What's the purpose of this library?

According with its creator [Microsoft Linq](https://docs.microsoft.com/en-us/dotnet/csharp/linq/) (Language-Integrated Query), it's the name for a set of technologies based on the integration of query capabilities directly into the C# language. Its purpose is to help us write more meaningful code and gain in productivity, once we don't need to learn a different query language to work with databases, files like XML, Web Services and so on. We can use lambda expressions to create conditions to our query methods.

The Linq can be found in the namespace `System.Linq;`. Well let's see an example how it work with sorting and filtering.

## OrderBy and Where methods

So I already gave to y'all a spoiler of the methods we'll use haha.

```csharp
using System.Linq;

namespace Movians.Blog.Examples
{
  public class Program
  {
    public static void Main(string[] args)
    {
      var ourListOfCustomObject = new List<CustomObject>();

      ourListOfCustomObject.Add(new CustomObject("Matheus", "Viana", "Developer", 21, 171));
      ourListOfCustomObject.Add(new CustomObject("José", "Almeida", "Manager", 40, 169));
      ourListOfCustomObject.Add(new CustomObject("John", "Marques", "Teacher", 38, 179));
      ourListOfCustomObject.Add(new CustomObject("Mary", "Josephine", "Designer", 23, 174));
      ourListOfCustomObject.Add(new CustomObject("Garnet", "Pearl", "Director", 39, 171));
      ourListOfCustomObject.Add(new CustomObject("Ross", "Geller", "Paleontologist", 27, 190));


      var ourOrderedAndFilteredObject = ourListOfCustomObject
        .Where(i => i.Height < 180)
        .OrderBy(i => i.Age);

      foreach(var item in ourOrderedAndFilteredObject)
      {
        Console.WriteLine($"Hi, my name is {item.FirstName}, and I'm a {item.Profession}. I'm {item.Age} years old");

       /*
        * Output:
        * Hi, my name is Matheus, and I'm a Developer. I'm 21 years old 
        * Hi, my name is Mary, and I'm a Designer. I'm 23 years old 
        * Hi, my name is John, and I'm a Teacher. I'm 38 years old 
        * Hi, my name is Garnet, and I'm a Director. I'm 39 years old 
        * Hi, my name is José, and I'm a Manager. I'm 40 years old 
        */
      }

      Console.ReadLine();
    }
  }
}
```

How you can see in the output the object o Ross was left out, that's because it doesn't fulfill the condition and the Where clause, an other thing you may think that's weird is inside the OrderBy and Where clause we pass a strange argument with a arrow and just an `i`, well Microsoft gave that strange thing a name that in math it's a powerful thing it's called Lambda Expression, so the I is just a parameter that'll be of the same type as our object, and after the `=>` it's an immediate return, it's like we're using the word `return`. We can "open" the lambda expression using the Curly brackets {}. It's something like:
```csharp
....Where(i => {
  return;
});
``` 
Take notice of the keyword return being used, when the lambda expression is opened you'll need to return something.

Hope it was helpful 😁.
