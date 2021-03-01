---
title: Creating indexers in C#
date: "2020-03-01T19:20:000.284Z"
description: "Creating indexers in C#"
---

# Creating indexers in C#

An indexer is the same as a getter method, but instead calling methods with ` YourMthod() `, you can call it like you'd did in an array ` YourMthod[]; `.
So how can we implement it on a class?

Simple as doing a getter method:

```csharp

public ObjectToBeReturned this[int index]
{
  get
  {
    return ObjectToBeReturnedAt(index);
  }
}

```

And then in your class that you gonna need it you just call `ClassName[i]`.

Thanks to all for read my first post 😃.

