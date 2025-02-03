---
layout: post
title: Nested Conditionals, Popcorn Hack Two
description: Second popcorn hack for nested conditionals
type: issues
comments: True
permalink: /csse/javascript/fundamentals/nestedConds/hax2
---

### Popcorn Hack 2

This code uses boolean to check if a person has the unlimited amusement food card. If they do, then they are allowed to buy any food that they want for free. Add code for another type of food and take into account whether or not the food is in stock.


```python
%%html
<!-- HTML output div -->
<div id="message"></div>
<script>
    function runWhenDOMLoaded() {
        let foodCard = true;
        let money = 1;
        let foodChoice = "cotton candy";
        let popcornIsInStock = true;
        let candyIsInStock = true;
        let hotDogIsInStock = false;

        const messageElement = document.getElementById("message");

        function displayMessage(message) {
            console.log(message); // Log to console
            messageElement.textContent = message; // Display on the webpage
        }

        if (foodCard === true) {
            if (foodChoice === "popcorn") {//Checks the food choice
                    if (popcornIsInStock === true){
                        displayMessage("Ah yes my beloved snack food, popcorn");
                    } else {
                        displayMessage("No popcorn in stock. Sorry!");
                    }
            } else if (foodChoice === "cotton candy") {
                    if (candyIsInStock === true){
                        displayMessage("Im getting diabetes from this");
                    } else {
                        displayMessage("No cotton candy in stock fatty");
                    }
            } else if (foodChoice === "hot dog") {
                    if (hotDogIsInStock === true){
                        displayMessage("Yummy weiners");
                    } else {
                        displayMessage("No glizzy today, sorry!");
                    }
            }
        } else {
            if (foodChoice === "popcorn") {
                if (money >= 8) { // checks if you have enough money to buy
                    if (popcornIsInStock === true){
                    displayMessage("Yay! You can buy the popcorn!");
                    } 
                } else {
                    displayMessage("Oh... you can't buy the popcorn.");
                }
            } else if (foodChoice === "cotton candy") {
                if (money >= 5) {
                    if (candyIsInStock === true){
                    displayMessage("Yay! You can buy the cotton candy!");
                    }
                } else {
                    displayMessage("Oh... you can't buy the cotton candy.");
                }//Add the other food and make sure to check if it is in stock!
            } else if (foodChoice === "hot dog") {
                if (money >= 1) {
                    if (hotDogIsInStock === true){
                    displayMessage("Enjoy your glizzy");
                    }
                } else {
                    displayMessage("No weiner for you broke boy");
                }
            }
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
        let foodCard = true;
        let money = 1;
        let foodChoice = "cotton candy";
        let popcornIsInStock = true;
        let candyIsInStock = true;
        let hotDogIsInStock = false;

        const messageElement = document.getElementById("message");

        function displayMessage(message) {
            console.log(message); // Log to console
            messageElement.textContent = message; // Display on the webpage
        }

        if (foodCard === true) {
            if (foodChoice === "popcorn") {//Checks the food choice
                    if (popcornIsInStock === true){
                        displayMessage("Ah yes my beloved snack food, popcorn");
                    } else {
                        displayMessage("No popcorn in stock. Sorry!");
                    }
            } else if (foodChoice === "cotton candy") {
                    if (candyIsInStock === true){
                        displayMessage("Im getting diabetes from this");
                    } else {
                        displayMessage("No cotton candy in stock fatty");
                    }
            } else if (foodChoice === "hot dog") {
                    if (hotDogIsInStock === true){
                        displayMessage("Yummy weiners");
                    } else {
                        displayMessage("No glizzy today, sorry!");
                    }
            }
        } else {
            if (foodChoice === "popcorn") {
                if (money >= 8) { // checks if you have enough money to buy
                    if (popcornIsInStock === true){
                    displayMessage("Yay! You can buy the popcorn!");
                    } 
                } else {
                    displayMessage("Oh... you can't buy the popcorn.");
                }
            } else if (foodChoice === "cotton candy") {
                if (money >= 5) {
                    if (candyIsInStock === true){
                    displayMessage("Yay! You can buy the cotton candy!");
                    }
                } else {
                    displayMessage("Oh... you can't buy the cotton candy.");
                }//Add the other food and make sure to check if it is in stock!
            } else if (foodChoice === "hot dog") {
                if (money >= 1) {
                    if (hotDogIsInStock === true){
                    displayMessage("Enjoy your glizzy");
                    }
                } else {
                    displayMessage("No weiner for you broke boy");
                }
            }
        }
    }

    // Ensure the function runs only after the page loads
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", runWhenDOMLoaded);
    } else {
        runWhenDOMLoaded();
    }
    </script>


