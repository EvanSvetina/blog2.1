---
layout: post
title: Lesson Two - Classes
description: Second lesson for classes and methods
type: issues
author: Hope Fune
comments: True
---

## Lesson Two - Classes

### What Are Classes ? 
Classes are helpful when organizing your code and work as a blueprint for creating different objects in code. Classes are created using the keyword: class. This would be followed by a name for that class.

There are three different aspects that a class element that could be characterized as: 
- Kind: Getter, setter, method, or field
- Location: Static or instance
- Visibility: Public or private

( These will be explained more near the end of the lesson :,) )

For example:


```python
%%js
class Fridge {
    constructor(food, drink) { 
        this.food = food;
        this.drink = drink;
    }
}

//this code is just an example of this specific lesson, it is not made to run 
```


    <IPython.core.display.Javascript object>


### Explanation For Code Above: 
The code has created a class called 'Fridge', which contains food and drinks as seen in the parenthesis `()`. The objects inside of the class are the initial properties. But before the parenthesis, there is the word **constructor** before it. 

**Constructor** is a type of method used when creating an instance of an object for that class. 

Afterwards, there is a list of each object. The `this` in items like `this.food` and `this.drink` works similar to a placeholder. Later, 'this' will become objects that are later created like 'jacksFridge' and 'nicosFridge'. The body of the class, which contains the class members ( *constructor* ) and the object you're making a class of, is all going to be held inside curly brackets `{}`.

### How Do You Use Classes?
After you have created a class that you are happy with, you are free to use the class to create objects! 

Example:


```python
%%js
class Fridge {
    constructor(food, drink) { 
        this.food = food;
        this.drink = drink;
    }
}

// this is the code that was created when introducing classes.
// we will be using it for an example for the rest of this lesson, so get used to it :)


// new objects 
const jacksFridge = new Fridge("eggs", "milk");
const nicosFridge = new Fridge("chicken", "redbull");
```


    <IPython.core.display.Javascript object>


### Explanation:
Here, there a new object is created that now replaces the 'this' as mentioned before. Two new Fridge objects are created called `nicosFridge` and `jacksFridge` that contains their personal food and drink items. The `const` ( constructor ) has to be called immediately when creating a new object. 

### Using Classes To Create Something
Using the pervious code, there is going to be a last step to this code that will use the class and objects that has been created to "print" something. Below is some code that is going to print a sentence that has something to do with the new Fridges we made. The console should state what food and drink is inside of the respectful object. 



```python
%%js
class Fridge {
    constructor(food, drink) { 
        this.food = food;
        this.drink = drink;
    }
}

const jacksFridge = new Fridge("eggs", "milk");
const nicosFridge = new Fridge("chicken", "redbull");

console.log("My fridge has " + jacksFridge.food + " and " + jacksFridge.drink);
```


    <IPython.core.display.Javascript object>


### Explanation 

console.log is a function that prints what you code and tell it to print! The code inside of that function should print out "My fridge has eggs and milk". 

As seen in the code, there the first few words are in quotation marks that start of the sentence. Then, it adds `jacksFridge.food`. As seen in the created object above, it should print what `jacksFridge` has for food, which is eggs. `jacksFridge` takes place of the `this` in `this.food` because of the object created earlier. Between the food and drink, there is an "and" then a call to print `jacksFridge.drink` as well, which should print out what `jacksFridge` has for a drink.

This was an easy code that uses classes to print something out onto console, but there are much more complicated projects that could be created with classes and methods. :) 

## Aspect: Kind 
Now, let's create an example that explains a little bit of one of the different aspects that could be used with classes.


```python
%%js

class Fridge {
    constructor(food, drink) {
        this.food = food;
        this.drink = drink;
    }

    // Getter
    get contents() {
        return this.printContents();
    }

    // Method
    printContents() {
        return ("My fridge has " + jacksFridge.food + " and " + jacksFridge.drink);
    }

    // Generator
    *getItems() {
        yield this.food;
        yield this.drink;
        yield this.food;
        yield this.drink;
    }
}

```


    <IPython.core.display.Javascript object>


### Sources / Help 
1. Classes and Methods lesson example provided. https://github.com/nighthawkcoders/portfolio_2025/blob/main/_notebooks/CSSE/Lessons/Classes_and_Methods/2024-10-27-classes-intro.ipynb

2. W3Schools.com, JavaScript Classes. https://www.w3schools.com/js/js_classes.asp

3. W3Schools.com, JavaScript Object Constructors https://www.w3schools.com/js/js_object_constructors.asp
