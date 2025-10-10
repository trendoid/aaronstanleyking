---
title: ".NET Maui and VS Code"
excerpt: "I was disappointed in the developer experience for .NET Maui and Visual Studio Code. Here's how I got it working with CLI tools and extensions."
date: "2022-12-29"
author: "Aaron Stanley King"
tags: ["dotnet", "maui", "vscode", "mobile", "development"]
featured: false
---

# .NET Maui and VS Code

![.NET MAUI and VS Code development setup](https://blogger.googleusercontent.com/img/a/AVvXsEhZcuyd0JV0j4HZdFMFgfzeRw-s_2rzg-C6nCYCYWpN1UwziSwt_duMyeZXUyIH3Ww5CczVJ4XHSYiO-GTzGBjgcLwZNjDH01KufLZFVgQP9Ml-ZbJgLSOySXL-HuhRhWT9fIdjj5VxnT1akp-PuPOz6D3m5n4AuUWePdSCA4PqZSwCte3LX3yl9UBK)

I was disappointed in the developer experience for .NET Maui and Visual Studio Code. I assumed that the popular debuggers and extensions would cover getting an app running. I am always up to date on my .NET and Visual Studio and Visual Studio Code so I just figured the tooling would be there. When the marketplace didn't really reveal a solution for me, I went searching.

The best search result for me is the one that pointed me in the direction to get my .NET Maui CLI working. That's right. I went to the CLI to get my IDE running the way I wanted it to.

## .NET MAUI with .NET CLI (Command Line Interface)

Getting the .NET Maui workload and the maui-check command line tool installed really helped. Those installs made sure that the libraries and emulators were setup so I could run them without Visual Studio. It also reminded me that I'll need some sort of emulator or device to connect VS Code to.

```bash
dotnet new maui
```

After running the CLI to create my solution and project, I realized that VS Code couldn't start the application. Another quick extension search didn't help, so I went to the internet again for a solution. That's when I found the Comet extension.

## VS Code Extensions

### Clancey/vscode-comet

This gave me a way to launch the application in the debugger, but I needed a device or emulator. That's where another extension helped.

### Android iOS Emulator

Now I can change code and debug and test it. Microsoft or the extension developers don't give us hot reload yet but things look good. I'm editing code and debugging it. Should it have been easier? Yes!

The developer experience could definitely be improved, but with the right CLI tools and extensions, you can get .NET MAUI working nicely with VS Code for cross-platform mobile development.