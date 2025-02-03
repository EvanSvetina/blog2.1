---
layout: post
title: Nested Conditionals, Popcorn Hack One
description: First popcorn hack for nested conditonals
type: issues
comments: True
permalink: /csse/javascript/fundamentals/nestedConds/hax1
---

### Popcorn Hack 1

This code has the option to let the player go on a ride of their choosing, and either lets them go on the ride or does not let them go on the ride based on their amount of tickets that they have. Try adding some code that makes it so that the code also takes into account the height of the person trying to ride the ride and have it be another constraint that determines whether or not the person goes on a ride.


```python
%%html
<!-- HTML output div -->
<div id="message"></div>
<script>
    function runWhenDOMLoaded() {
        let ticketAmount = 60; // Makes the ticket amount be 60, make another variable for height
        let ride = "Roller Coaster"; // sets the ride that the person wants to ride on
        let height = 60;
        const messageElement = document.getElementById("message");

        function displayMessage(message) {
            console.log(message); // Log to console
            messageElement.textContent = message; // Display on the webpage
        }

        function enoughTickets(a) { //Add another parameter for height (use a comma and then a letter or word), maybe change the name of the parameter
            if (ticketAmount >= a) {
                displayMessage("You have enough tickets! Yay! :D"); //make another if else statement inside of this to check for height
            } else {
                displayMessage("You don't have enough tickets... D:");
            }
        }
        function enoughHeight(n) {//Function to determine height constraints
            if (height >= n) {
                displayMessage(`You are tall enough to ride the ${ride}!`);//make another if else statement inside of this to check for height
            } else {
                displayMessage("Too short shorty mcshortshort");
            }
        }

        if (ride === "Roller Coaster") {
            enoughTickets(60); //Nests the function and the conditionals
            enoughHeight(66);
        } else if (ride === "Ferris Wheel") {
            enoughTickets(40);
            enoughHeight(30);
        }    
    }

    // Ensure the function runs only after the page loads
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", runWhenDOMLoaded);
    } else {
        runWhenDOMLoaded();
    }
</script>

```


<!-- HTML output div -->
<div id="message"></div>
<script>
    function runWhenDOMLoaded() {
        let ticketAmount = 60; // Makes the ticket amount be 60, make another variable for height
        let ride = "Roller Coaster"; // sets the ride that the person wants to ride on
        let height = 60;
        const messageElement = document.getElementById("message");

        function displayMessage(message) {
            console.log(message); // Log to console
            messageElement.textContent = message; // Display on the webpage
        }

        function enoughTickets(a) { //Add another parameter for height (use a comma and then a letter or word), maybe change the name of the parameter
            if (ticketAmount >= a) {
                displayMessage("You have enough tickets! Yay! :D"); //make another if else statement inside of this to check for height
            } else {
                displayMessage("You don't have enough tickets... D:");
            }
        }
        function enoughHeight(n) {//Function to determine height constraints
            if (height >= n) {
                displayMessage(`You are tall enough to ride the ${ride}!`);//make another if else statement inside of this to check for height
            } else {
                displayMessage("Too short shorty mcshortshort");
            }
        }

        if (ride === "Roller Coaster") {
            enoughTickets(60); //Nests the function and the conditionals
            enoughHeight(66);
        } else if (ride === "Ferris Wheel") {
            enoughTickets(40);
            enoughHeight(30);
        }    
    }

    // Ensure the function runs only after the page loads
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", runWhenDOMLoaded);
    } else {
        runWhenDOMLoaded();
    }
</script>


