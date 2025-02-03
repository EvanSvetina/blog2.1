---
layout: post
title: Popcorn Hacks
description: Popcorn hacks for conditions!
categories: ['CSSE JavaScript Fundamentals']
courses: {'csse': {'week': 0}, 'csp': {'week': 0}, 'csa': {'week': 0}}
type: collab
permalink: /csse/javascript/fundamentals/conditions/hacks
author: Yasna Ahmadi, Katherine Law, Yuna Lee, Namira Sharif
toc: True
---

# Popcorn Hacks!
You're at the mall with your friends, and head into the Build-A-Bear store. Use conditionals to decide what kind of bear you want with different accessories! The employee comes up to you and explains the steps. She states...

"Choose Me: Pick that special furry friend — from a silly superhero to a sporty mascot and a cheerleading bunny to a snuggly teddy bear.
Hear Me: Add a special sound effect to your furry friend.
Stuff Me: Customize your creation with sounds, scents, stuffing and, of course, our iconic special heart that holds your love and wishes.
Hug Me: Give your furry friend its first hug to make sure it’s stuffed just right.
Dress Me: Turn up the fun with outfits and extras!
Name Me: It’s official once your creation has a birth certificate of its bear-y own!"

### Hack 1: Simple If-Statement
Create a variable based on what kind of stuffed animal you want.


```python
%%js
let bearType = "Teddy"; //Choose what kind of bear you want: Teddy or Unicorn (Example: let bearType = "Teddyy")

if (bearType === "Teddy") { //Put the same bear type from above into this line
    console.log("You picked a snuggly Teddy bear!");
}
```


    <IPython.core.display.Javascript object>


### Hack 2: If-Else Statement
Add a sound to the bear based on the type chosen.


```python
%%js
let bearType = "Teddy"; //Put the same bear type as before.

if (bearType === "Teddy") {
    console.log("Your Teddy snores...");
} else {
    console.log("Your Unicorn neighs loud...")
}

```


    <IPython.core.display.Javascript object>


### Hack 3: Else-If Statement
Choose the stuffing type using an If-Else-If statement


```python
%%js
let stuffingType = "firm"; //Choose a stuffing: Fluffy, Firm, or Squishy

if (stuffingType === "Fluffy") {
    console.log("Your bear will be extra soft and fluffy!");
} else if (stuffingType === "Firm") {
    console.log ("Your bear will have a firm, sturdy feel.");
} else {
    console.log("Your bear will be nice and squishy!");
}
```


    <IPython.core.display.Javascript object>


### Hack 4: Switch Statement
Use a switch statement to pick a bear outfit


```python
%%js
let bearOutfit = "Pirate"; // Choose an outfit: "Superhero", "Cheerleader", "Pirate", "Princess"

switch (bearOutfit) {
    case "Superhero":
        console.log("Your bear is ready to save the day in a Superhero costume!");
        break;
    case "Cheerleader":
        console.log("Your bear will cheer with its Cheerleader outfit!");
        break;
    case "Pirate":
        console.log("Ahoy! Your bear is ready to sail in a Pirate costume!");
        break;
    default:
        console.log("Your bear is ready for a royal adventure in a Princess outfit!");
}

```


    <IPython.core.display.Javascript object>


### Hack 5: Complete Build-A-Bear Experience
Combine all conditionals to create new types of bears, stuffings, and outfits in a single code cell!


```python
%%js
let bearType = "Teddy"; //Make a type of bear!
let stuffingType = "Firm"; //Choose a type of stuffing!
let bearOutfit = "Pirate"; //Create your own outfit!

// Step 1: Choose Me
if (bearType === "Teddy") { //Choose a bear type
    console.log("Masha y Medved"); //Create a console message for the specified bear type
} else if (bearType === "Unicorn") {
    console.log("Narwhal with legs: initializeed");
} else {
    console.log("thats not a real bear type you poser. Learn to Capitalize");
}


// Step 2: Stuff Me
if (stuffingType === "Firm") {
    console.log("STRONG AND BRAVE");
} else if (stuffingType === "Fluffy") {
    console.log("Less strong but maybe brave");
} else {
    console.log("Idk you didnt specify your type AGAIN!!!!");
}

// Step 3: Dress Me
switch (bearOutfit) {
    case "Pirate":
        console.log("What was the pirate's favorite letter? NO it wasn't r, with was the seven Cs!!! (do not laugh)");
        break;
    case "Cheerleader":
        console.log("Ur so girlie pop!@!!");
        break;
    case "Superhero":
        console.log("Blud truly believes he is omni man!!!");
        break;
    default:
        console.log("I guess u got creative with the fit, even the high-tech sensors dont know wth ur wearing lmao");
}

```


    <IPython.core.display.Javascript object>

