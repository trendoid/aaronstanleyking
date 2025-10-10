---
title: "Special Characters are Truly Special"
excerpt: "Do you remember the days before string interpolation in C#? Those were truly the dark days of development with string formatting and concatenation."
date: "2022-12-02"
author: "Aaron Stanley King"
tags: ["csharp", "programming", "string-interpolation", "development"]
featured: false
---

# Special Characters are Truly Special

![C# programming and string interpolation](https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)

Do you remember the days before string interpolation in C#? I do. It was medieval. Those were truly the dark days of development. We would all use string formatting and concatenation and carried swords around to defend ourselves against giant beasts. Ok, maybe I'm the only one that was wearing a helmet but I'm kind of a weird guy.

I think we can all agree that string concatenation is not all that fun. It might not be as dangerous as dragons, but it can still light your hair on fire when there is a bug in your code just to display some text. 

Classes in C# like StringBuilder helped make things safer but it wasn't all that readable. String.Format is easy but keeping the parameters in the right order isn't exactly a no brainer either. What if that code was just in a class behind a view? Can't we just put it in the view? In the code behind it was easily testable, but the context was lost, and it wasn't as simple as what we can do today.

```csharp
output = String.Format("Hello {0}, today is {1}", name, DateTime.Now.ToString("yyyy-MM-dd"));
```

Compare that to modern string interpolation:

```csharp
output = $"Hello {name}, today is {DateTime.Now:yyyy-MM-dd}";
```

String interpolation in C# has made our code so much more readable and maintainable. The special characters `$` and `{}` truly are special - they've transformed how we work with strings and made our development experience so much better.

No more counting parameters, no more wondering which `{0}` corresponds to which variable. The code is self-documenting and much easier to debug when something goes wrong.