---
layout: post
title: Arrays HW
description: Homework for Arrays
type: issues
comments: True
permalink: /csse/javascript/fundamentals/arrays/hw
---

# Homework!! #

Your task is to fill in the following code to alter the arrays!

# Lesson 1 Homework


```python
%%js
//We have an array made for you, but something's off...
let desserts = ["lemon","delete1","ice cream","chocolate cake","key lime pie","delete2"];
//We need to get rid of the elements labeled delete1 and delete2!
desserts.pop();//which command gets rid of the last element in the array?
desserts.splice(1,1);//which command will delete the delete 1 element and how do you use it??

//now that that's done... a lemon isn't a dessert unless you're weird... maybe change it to a lemon-themed dessert?
desserts[0]="lemon froyo";

//hint for the previous 2 fill-in-the-blanks: the indexing starts at 0

//okay okay, you've proven your skills... now all that's left is to print the list!
```


    <IPython.core.display.Javascript object>


# Lesson 2 Homework - Part 1


```python
%%js
let coolNumbers = ["pi", "e", "0", "1", "TREE(3)", "1"];

// Print each element and its index
for (let i = 0; i < coolNumbers.length; i++) {
    console.log(coolNumbers[i]);
    console.log("Index:", i);
}

// Find last index of "1"
console.log("Last index of 1:", coolNumbers.lastIndexOf("1"));
```


    <IPython.core.display.Javascript object>


# Lesson 2 Homework - Part 2


```python
%%js
//This is the fairly simple final problem of arrays!

//Create a list here that includes whatever you'd like once again.
let coolNumbers = [2, 94, 0, 1, 97927];


//Now, print the length of your list! Tip: you don't need to create a variable for the list's length! Just console.log the list.length; it saves you a line :D

console.log(coolNumbers.length);


//Finally, create a variable to check if a value in your list is included in the list and print that variable you created (it should output true or false)
let trueorfalse = false;
function isInlist(n) {
    if(coolNumbers.includes(n)){
        trueorfalse = true;
        console.log(trueorfalse);
    } else {
        trueorfalse = false;
        console.log(trueorfalse);
    }
}
isInlist(2);
isInlist(913278123);


```


    <IPython.core.display.Javascript object>


You're done with your homework!!
