---
title: "Cool new stream about F# from LaylaCodesIt"
excerpt: "There was a cool new series about F# on Twitch today. It was fun to see and I haven't used F# in a long time."
date: "2021-12-02"
author: "Aaron Stanley King"
tags: ["fsharp", "twitch", "streaming", "functional-programming"]
featured: false
---

# Cool new stream about F# from LaylaCodesIt

![F# functional programming and streaming](https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80)

There was a cool new series about F# on Twitch today. It was fun to see and I haven't used F# in a long time. I felt like it was my first time while watching the stream.

[https://www.twitch.tv/laylacodesit](https://www.twitch.tv/laylacodesit)

Here is my code inspired by Layla and Alyssa:

[GitHub Gist](https://gist.github.com/trendoid/ad4c5f3b58fc09c6a0ee472a0fd869d6)

Or if you want the whole project:

[GitHub Repository](https://github.com/trendoid/FsharpConsoleApp)

It just reads from a text file and prints the contents out to the console:

```fsharp
// For more information see https://aka.ms/fsharp-console-apps
printfn "Console App: Started!"

open System.IO

let baseDirectory = __SOURCE_DIRECTORY__
let filePath = "Text.txt"
let fullPath = Path.Combine(baseDirectory, filePath)

let readFilesTask (path1) =
  task {
    let! content = File.ReadAllTextAsync(path1)
    return content
  }

printfn "Content: %s" (readFilesTask(fullPath).Result)
```

It's always inspiring to see people sharing knowledge about functional programming languages like F#. The stream was engaging and made me want to dive back into F# development.