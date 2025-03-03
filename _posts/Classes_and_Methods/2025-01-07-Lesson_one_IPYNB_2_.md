---
layout: post
title: Lesson One - Methods
description: First lesson for classes and methods.
type: issues
comments: True
---

## Lesson 1- Methods
By Nico Orozco

### What are Methods?
Methods are the operation completed in a code that give your objects a fucnction. In JavaScrpit code, methods are used for actions such as manipulating data, peforming task, and defining other code oppertaions. The benefits of using methods is being able to reuse the fucntions and the methods are very modular. Another benefit of using methods is that it will give a more efficent purpose to the DOM (Direct Object Model) which is very important for updating your webpage.

### 1. Manipulating the Data
 
There are two different ways to manipulate your data in JavaScript:
#### ARRAYS & STRINGS

Array methods are used to change how the array of data in the code will act, for example:



```python
%%js
arr = ['Mozzrella', 'provolone', 'cheddar'];
arr.push('MontereyJack');

console.log(arr); ['Mozzrella', 'provolone', 'cheddar', 'MontereyJack']
```

In this example the ``arr.push('MontereyJack')`` added our MontereyJack to the array list of other items that we originally had. 

#### These are the list of Methods one would use in an array:

- ``push()`` – Adds an element to the end of an array.
- ``pop()`` – Removes the last element from an array.
- ``shift()`` – Removes the first element from an array.
- ``unshift()`` – Adds an element to the beginning of an array.
- ``sort()`` – Sorts the elements of an array in ascending order.
- ``reverse()`` – Reverses the order of the elements in an array.
____________________________________________________________________________________________________________________________________

String Methods are used to change how the string will work such as the length and format. 


```python
%%js
let str = 'I like chocolate milk';
let length = str.length;

console.log(length); // 21
```

In this the string methods is used to find out how many characters are in the string of the sentance using the 
``lenght()`` method 

#### These are the list of Methods one would use in a string:

- ``length()`` – Returns the length of a string.
- ``indexOf()`` – Returns the index of a specified character in a string.
- ``charAt()`` – Returns the character at a specified index in a string.
- ``substring()`` – Returns a substring of a specified string.
- ``toUpperCase()`` – Converts a string to uppercase.
- ``toLowerCase()`` – Converts a string to lowercase.
- ``trim()`` – Removes leading and trailing whitespace from a string.

### 2. Constructing in JavaScript

Methods are also used to make and consturct words in your classes (which you will learn in the next lessson). These can be used to customize your data with in the classes. For example:


```python
%%js
class Items {
    constructor(food, year) {
      this.food = food;
      this.year = year;
    }
  
    // A method of the class
    greet() {
      console.log(`There are ${this.food} and the expiration year is ${this.year}.`);
    }
  }
  
  // Creating an instance of the class
  const Item1 = new Item('Frosted Flakes', 2025);
  Item1.greet(); // Output: There are Frosted Flakes and the expiration year is 2025
  
```

In this example we created an ``Item`` that creates a sentance of when the expiration date is. Within our class we constructed a customizable sentance with our code. 

<i>In the next lesson you will be learning how the Classes in code are related to our methods that we used<i>
