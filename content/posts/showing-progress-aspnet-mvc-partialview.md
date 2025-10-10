---
title: "Showing Progress of an ASP.NET MVC PartialView"
excerpt: "A recipe for implementing progress indicators for long-running operations in ASP.NET MVC using PartialViews and jQuery."
date: "2009-12-17"
author: "Aaron Stanley King"
tags: ["asp.net-mvc", "jquery", "partialview", "progress", "ajax"]
featured: false
---

# Showing Progress of an ASP.NET MVC PartialView

![ASP.NET MVC web development](https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80)

Sometimes you have long-running operations in your web application that you don't want to make the entire page wait for. Here's a recipe for implementing progress indicators using ASP.NET MVC PartialViews and jQuery.

## What You'll Need

- Some long running GET that you really don't want the rest of the page load to wait for
- New ActionResult in a Controller that returns a PartialView
- ViewUserControl that will display the results of your long running GET
- jQuery and a JavaScript snippet that will call your action and load your result

## Step 1 – ActionResult

```csharp
public ActionResult CreateData(int item)
{
    // Go to your Model/API/Service and get the long running stuff
    List<String> LargeList = Model.GoGetList(item);
    
    // You can either add it to the ViewData or return it
    // Do what you like
    ViewData.Add("ElementIds", group.ElementIds);
    
    // Go return your control
    // It's named the same as your *.ascx file
    return PartialView("UserControlName");
}
```

## Step 2 – Create the PartialView

Create a ViewUserControl (`.ascx` file) that will render your results:

```html
<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl" %>

<div id="data-results">
    <% if (ViewData["ElementIds"] != null) { %>
        <h3>Results</h3>
        <ul>
        <% foreach (string id in (List<string>)ViewData["ElementIds"]) { %>
            <li><%= Html.Encode(id) %></li>
        <% } %>
        </ul>
    <% } else { %>
        <p>No data available</p>
    <% } %>
</div>
```

## Step 3 – Add the Container and Loading Indicator

In your main view, add a container where the partial view will be loaded:

```html
<div id="progress-container">
    <div id="loading-indicator">
        <img src="/Content/images/loading.gif" alt="Loading..." />
        <span>Loading data...</span>
    </div>
    <div id="results-container"></div>
</div>
```

## Step 4 – jQuery Implementation

Add the JavaScript to make the AJAX call and handle the progress:

```javascript
$(document).ready(function() {
    // Show loading indicator
    $('#loading-indicator').show();
    $('#results-container').hide();
    
    // Make the AJAX call to your controller
    $.ajax({
        url: '<%= Url.Action("CreateData", "YourController") %>',
        type: 'GET',
        data: { item: <%= ViewData["ItemId"] %> },
        success: function(data) {
            // Hide loading indicator
            $('#loading-indicator').hide();
            
            // Show results
            $('#results-container').html(data).show();
        },
        error: function() {
            $('#loading-indicator').hide();
            $('#results-container').html('<p>Error loading data. Please try again.</p>').show();
        }
    });
});
```

## Step 5 – CSS for Better UX

Add some CSS to make the progress indication smooth:

```css
#progress-container {
    min-height: 100px;
}

#loading-indicator {
    text-align: center;
    padding: 20px;
}

#loading-indicator img {
    vertical-align: middle;
    margin-right: 10px;
}

#results-container {
    display: none;
}

.fade-in {
    animation: fadeIn 0.5s ease-in;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}
```

## Benefits of This Approach

1. **Better User Experience**: Users see immediate feedback instead of a blank page
2. **Non-blocking**: The rest of the page loads normally while data is being fetched
3. **Progressive Enhancement**: Works even if JavaScript is disabled (with appropriate fallbacks)
4. **Modular**: The PartialView can be reused in different contexts

## Considerations

- Make sure your long-running operation is actually worth the complexity
- Consider caching strategies if the data doesn't change frequently
- Handle error scenarios gracefully
- Provide meaningful progress indicators when possible

This pattern is particularly useful for dashboard widgets, report generation, or any scenario where you have expensive operations that shouldn't block the initial page load.