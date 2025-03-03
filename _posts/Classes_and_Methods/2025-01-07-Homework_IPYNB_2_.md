---
layout: post
title: Homework
description: Homework for classes and methods lessons.
type: issues
comments: True
---

## Homework 

# JavaScript Classes and Methods - Interactive Homework
In this notebook, you will learn about classes and methods in JavaScript. After the lesson, complete the tasks by editing the code cells.

### What are Classes and Methods?
- **Class**: A blueprint for creating objects with properties and methods.
- **Method**: A function inside a class that defines an object's behavior.



## Example: Class for food

Below is an example of a JavaScript class for creating different foods. The class has:
1. A **constructor** to initialize properties (brand and model).
2. Two **methods** (`displayInfo` and `start`) to define behaviors.



```python
%%js
/* Fridge mini game
In the code cell below i would like for you to create a fun fridge mini game where you are looking for a good midnight snack in the dark and you pul out a random food item good or bad.
You should be able to complete this Homework activity within 15-20 minutes assuming you fully understand the content presented in our lesson. Alhtough, i do understand that some people may get stuck and need extra time to complete the homework. I think classes and methods are a really good thing to have on a large scale project. Although you could make the game below work with different methoods. Please do not use `chat gpt` I worked hard making this.
# What to Do
I want you to look through the code and complete the missing pieces and write new code lines to make the game funtion.
this is basically a `gambling simulator` but with food.
I have porvided "hints" in the code.
### if you want a challenge dont read the <span style="color: green;">GREEN</span>
the green next to code it the real hint if you look at the // above there is description of what you need to do
starting from a little above the bottom at the fill in the blank or top is the easiest the `middle is the hardest`.
## Grab item
I want you to Create a grab item function that will reference the class to randomly pick a food item
12:21
Hw
*/
class FridgeGame {
  constructor() {
    // Array of items in the fridge with their scores
    this.fridgeItems = [
      { name: "Piece of pizza", score: 10 },
      { name: "Old sandwich", score: 2 },
      { name: "Fresh apple", score: 8 },
      { name: "Expired milk", score: 1 },
      { name: "Chocolate bar", score: 9 },
      { name: "Rotten banana", score: 3 },
      { name: "Yogurt", score: 7 },
      { name: "Cheese", score: 6 },
      { name: "Leftover pasta", score: 5 },
      { name: "Moldy bread", score: 0 }
    ];
  }

  // Method to pick a random item from the fridge
  grabItem() {
    const randomIndex = Math.floor(Math.random() * this.fridgeItems.length);
    return this.fridgeItems[randomIndex];
  }

  // Method to classify the find based on its score
  classifyFind(score) {
    if (score >= 8) {
      return "good";
    } else if (score >= 4) {
      return "meh";
    } else {
      return "bad";
    }
  }

  // Reference method to start the game
  play() {
    console.log("Looking for a midnight snack...");
    const item = this.grabItem();
    console.log(`You found a ${item.name}!`);
    const feedback = this.classifyFind(item.score);
    console.log(`It is ${feedback}. Score: ${item.score}`);
  }
}

// Create an instance of the game
const fridgeGame = new FridgeGame();
// Start the game by calling the play method
fridgeGame.play();
```


    <IPython.core.display.Javascript object>

