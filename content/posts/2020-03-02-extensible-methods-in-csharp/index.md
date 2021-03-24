---
title: Extensible Methods in C#
date: "2020-03-02"
description: "When you need to create your on method to a type|class that already exists"
categories: "C#, Basics"
tags: "C#, dotnet, beginner, learning"
path: extensible-methods
author: "Matheus Viana"
---

Let's think you'll need to create a method to add lots of items in your list something like `AddRange()` but you want to use all the feats already in `System.Collections.Generic.List` a class that already exists in the .Net env. Well you think I can create a static class and extend `List` and add the method there, well the answer for that is yes and no. It'll work just fine, but you'll have to call the class everytime you need that method, you wouldn't be able to do so:
```csharp
List<int> ages = new List<int>();
ages.AddRange(20, 21, 22, 23);
```
Unless in the .Net env they implement that feature, just between us I think they already did hehe, but let's continue with our post.

To add this method in the List class, we can do what it's called an Extensible Method. I gonna write all the code and then I going to explain it 😃.

```csharp
namespace Movians.Blog.Examples.Extensions
{
  public static class ListExtension
  {
    public static void AddRange<T>(this List<T> list, params T[] items)
    {
      foreach(var item in items)
      {
        list.Add(item);
      }
    }
  }
}

using Movians.Blog.Examples.Extensions;

namespace Movians.Blog.Examples
{
  public class Program
  {
    public static void Main(string[] args)
    {
      List<int> ages = new List<int>();

      ages.Add(21);

      idades.AddRange(22, 23);

      foreach(var age in ages)
      {
        Console.WriteLine($"{age}\n")
        /*
        * Output:
        * 21
        * 22
        * 23
        */
      }

      Console.ReadLine();
    }
  }
}
```

Let's dissect our code, in the first namespace we have our ListExtension, where our extensible method is. But you may ask me that's just a regular static class and a regular method as well, well you're correct, to create an extensible method you just need to create a static class and a static what does turn it an extensible method is the keyword `this` in the params of the `AddRange()` method, when you use this keyword the compiler already know that's an extensible method, the `this` will bind your method to the object you're extending.

Add range is a generic method, and the compiler will not complain about the lack of type per se hehe, when calling it. Why? You may ask me, well the answer is simple thats because it'll assume the value of `T` to the object you're extending, but that doesn't happen to all the objects.
If you do that to a string you should specify the type of your extensible method.

I hope that helped you 😄.