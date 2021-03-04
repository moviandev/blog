---
title: Generic  types in C#
date: "2020-03-01T19:00:00.000Z"
description: "A brief example to show how you can use generic types in C#."
categories: "C#, Basics"
tags: "C#, dotnet, beginner, learning"
---
In C# we can create something as a any type in typescript, but it's not the same, let's think we have created our List with our methods and we want to use it with different types, like bools, strings, ints and a object that we created, to do so we can create a "Generic class".

Let's see an example:
```csharp
using System;

namespace AvengersTower.Heroes
{
  public class List<T>
  {
    private T[] _items;
    private int _nextItem;

    public int Length
    {
      get
      {
        return _nextItem;
      }
    }

    public SuperPowerList(int starterPowers = 5)
    {
      _items = new T[starterPowers];
      _nextItem = 0;
    }

    public void AddNewPower(T item)
    {
      CheckListCapacity(_nextItem + 1);
      _items[_nextItem] = item;
      _nextItem++;
    }

    public void AddNewPowers(params T[] items)
    {
      foreach(var item in items)
        AddNewPower(item);
    }

    private void CheckListCapacity(int capacity)
    {
      if (_items.Length >= capacity)
        return;
      
      T[] newArray = new T[capacity];

      for (var i = 0; i <= _items.Length - 1; i++)
        newArray[i] = _items[i];

      _items = newArray;
      _nextItem = null;
    }

    public T GetItemIn(int index)
    {
      if (index < 0 || index >= _nextItem)
        throw new ArgumentOutOfRangeException(nameof(index));

      return _items[index];
    }

    public void Delete(T item)
    {
      var index = -1;
      for (var i = 0; i < _nextItem; i++)
      {
          var currentItem = _items[i];

          if (currentItem.Equals(item))
          {
              index = i;
              break;
          }
      }

      for (var i = index; i < _nextItem - 1; i++)
      {
        _items[i] = _items[i + 1];
      }

      _nextItem--;
    }

    public T this[int index]
    {
      get
      {
        return GetItemIn(index);
      }
    }

  }
}

```

Let's explain that, I think it was a lot haha, but there's some of the main feat of a list/array.
Let's start with the simple when you're creating a generic method you start by declaring a new Class and between <> you put and T that stands for Type haha, and you need to instantiate this class you'll need a type/object for it like:
``` csharp
List<SuperHeroes> heroes; 
```
When you do that all method that's of the type `T` will become of the SuperHeroes type, this way you can enforce the typing.

The last method of our class is an Indexer with this "method" we can use square brackets to call a index in our list. Example:
``` csharp
var firstHero = heroes[0]; 
```

## Null reference in generic classes
If you try to compile this code you'll get an error, the error is because the null reference in the `CheckListCapacity()` method, because the compiler doesn't know if it'll be a value. Like int, double, float, etc...

How the _nextItem is always updated when we add something new there's no problem in remove it.



That's all guys and girls and everyone out there 😄;