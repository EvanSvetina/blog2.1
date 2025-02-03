---
comments: True
layout: post
title: Iteration Popcorn Hacks
description: Iterations Popcorn Hacks
permalink: /csse/javascript/fundamentals/iteration/Popcorn_Hax
categories: ['CSSE JavaScript Fundamentals']
author: Andrew Ge, Ishan Shrivastava, Pratheep Natarajan, and Ruhaan Bansal
---

# Popcorn Hacks on Iterations in JavaScript

##### Instructions:
##### Complete the exercises below in JavaScript.
##### You can run and test your code in a JavaScript environment.

### Exercise 1: Counting with a For Loop
##### Write a JavaScript for loop that prints all numbers from 1 to 10.

##### Example:
##### Output:
##### 1
##### 2
##### 3
##### ...
##### 9 
##### 10 


```python
%%js

for (let number = 1; number <11; number ++){
    console.log(number) //logs numbers up to (not including) 11
}
```


    <IPython.core.display.Javascript object>


### Exercise 2: Sum of Numbers
##### Write a for loop in JavaScript to calculate the sum of all numbers from 1 to n using a loop.

##### Example:
##### Input: 5
##### Output: 15 (because 1 + 2 + 3 + 4 + 5 = 15)



```python
%%js
let input = 2491; //input variable. Function adapts to input. input = n here.
let total = 0;
for (let i = 1; i <= input; i++){
    total += i;
}
console.log(total);// logs total, which is incremented above
```


    <IPython.core.display.Javascript object>


### Exercise 3: Looping through Arrays
##### Write a JavaScript program to iterate through an array of names and print each name.


```python
%%js
const epicPeople = ['West', 'Eggban', 'Nigil', 'Dumb Mist', 'Tanisha', 'Rachit', 'Ishan', 'Andrew']; //array with cool ppl
for (let i = 0; i < epicPeople.length; i++){ //go through array one by one
    console.log(epicPeople[i]); //log every one
}

```


    <IPython.core.display.Javascript object>



```python
%%js
const epicPeople = ['West', 'Eggban', 'Nigil', 'Dumb Mist', 'Tanisha', 'Rachit', 'Ishan', 'Andrew'];
for (let person of epicPeople){
    console.log(person); //alternative method
}
```


    <IPython.core.display.Javascript object>

