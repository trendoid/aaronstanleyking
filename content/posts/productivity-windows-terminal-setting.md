---
title: "Productivity Increased With One Setting"
excerpt: "If there is one setting that has increased my productivity the most it is startingDirectory in Windows Terminal. Here's why it makes such a difference."
date: "2021-03-15"
author: "Aaron Stanley King"
tags: ["productivity", "windows-terminal", "developer-tools", "workflow"]
featured: false
---

# Productivity Increased With One Setting

![Developer productivity and terminal setup](https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)

If there is one setting that has increased my productivity the most it is:

```json
"startingDirectory": "%USERPROFILE%\\Source\\Repos"
```

All day, every day, I download code, read code, write code, and ship code. I use many different apps to do this work. Each tool has its directory settings but Windows Terminal is often my most used application.

Since I work in so many different codebases, having a consistent starting directory that is already near to where I will need to go saves me a lot of typing.

## Why This Matters

I seem to only find these productivity increases sporadically these days. Maybe that is because technology is changing or my work has been changing. If there has been one thing I can point to that has really helped, it has been "startingDirectory".

I can:
- List all my repos
- Change to a specific directory quickly  
- Run commands from this repos directory
- Search every repo very quickly, all at once

## Implementation

You can set this in your Windows Terminal profile settings. The key is choosing a directory where you keep all your development work organized.

For me, `%USERPROFILE%\\Source\\Repos` works perfectly because:
- It's consistent across machines
- All my Git repositories live there
- It's close to everything I need to access
- It saves countless keystrokes every day

Sometimes the smallest changes make the biggest difference in your daily workflow.

## References

[Windows Terminal General Profile Settings | Microsoft Docs](https://docs.microsoft.com/en-us/windows/terminal/customize-settings/profile-general)