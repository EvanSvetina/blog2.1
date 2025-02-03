---
layout: post
title: Boolean Popcorn Hacks
description: Popcorn Hacks
categories: ['Foundation']
courses: {'csse': {'week': 1}, 'csp': {'week': 1}, 'csa': {'week': 1}}
comments: True
permalink: /csse/javascript/fundamentals/booleans/hax1
sticky_rank: 1
---

# Popcorn Hacks

# Exercise 1

Create a variable that holds a true or false value. Print a message that says "This is true!" if the value is true and "This is false!" if the value is false.


```python
%%js 

let isSunny = true;  // Change this to false to test the other case

if (isSunny) {
    console.log("It is sunny outside today! Go touch grass!");
} else {
    console.log("It's not sunny out today, so I gues you have an excuse to stay inside and do nothing...");
}
```

# Exercise 2

Write a program that checks if both conditions are true: the weather is nice (true) and it’s a weekend (true). Print "Go outside!" if both are true, and "Stay inside!" otherwise.


```python
%%js 

let isWeekend = true;  // Change to false to test the other case
let isNiceWeather = true;  // Change to false to test the other case

if (isNiceWeather === true && isWeekend === true) {
    console.log("Go outside. Now.");
} else {
    console.log("no outside go or else bad!");
}
isNiceWeather = false;

if (isNiceWeather === true && isWeekend === true) {
    console.log("Go outside. Now.");
} else {
    console.log("no outside go or else bad!");
}

```


    <IPython.core.display.Javascript object>


# Exercise 3

Write a program that prints "Time to go to the beach!" if it's either sunny or the weekend. Use the OR (||) operator.


```python
%%js 

let isSunny = true;  // Change to false to test the other case
let isWeekend = false;  // Change to true to test the other case

if (isSunny || isWeekend) {
    console.log("Let's go swimming! Let's go to the beach!");
} else {
    console.log("Let's go golfing! Let's go golfing!");
}

let isSunny = false;

if (isSunny || isWeekend) {
    console.log("Let's go swimming! Let's go to the beach!");
} else {
    console.log("Let's go golfing! Let's go golfing!");
}

```

# Exercise 4

Write a program that prints "Not sunny today" if isSunny is false, and "It's sunny!" if isSunny is true. Use the NOT (!) operator to invert the value of isSunny.


```python
%%js 

let isSunny = false;  // Change to true to test the other case

if (!isSunny) {
    console.log("It is not sunny today!")
} else {
    console.log("SCP-001 - When Day Breaks. It is sunny outside. Do not touch the sun lest the felsh amalgam consume you");
}
```

# Exercise 5

Create a program that checks if a user is both logged in (true) and has admin rights (true). Print "Access granted!" if both are true, and "Access denied!" if either is false.


```python
%%js 

let isLoggedIn = true;  // Change to false to test the other case
let isAdmin = true;     // Change to false to test the other case

if (isLoggedIn && isAdmin) {
    console.log("Welcome, Administrator!");
} else {
    console.log("YOU SHOULDN'T BE HERE.");
    window.close();
}
```

# Exercise 6

Use a ternary operator to decide whether a user is allowed access based on their age. If the age is 18 or above, print "You are allowed access." If below 18, print "Sorry, you are too young."


```python
%%js

let age = 16;  // Change this value to test different cases

let accessMessage = age >= 18 ? "You can access this content." : "Good job being honest punk";

console.log(accessMessage);  // Will print based on age

```


    <IPython.core.display.Javascript object>


# Exercise 7

Write a program that checks if a user is both a VIP (true) and has a VIP ticket (true). If both conditions are true, print "VIP Access granted!" Otherwise, print "Access denied!"


```python
%%js 

let isVIP = true;          // Change to false to test the other case
let hasVIPticket = false;  // Change to true to test the other case

if (isVIP && hasVIPticket) {
    console.log("Welcome Mr. VIP MAN!!!!");
} else {
    console.log("You are not a VIP. Please leave the premises IMMEDIATELY or force shall be used..");
}
```


    <IPython.core.display.Javascript object>

