---
layout: post
title: Popcorn Hacks
description: Popcorn Hacks for lessons.
type: issues
comments: True
---

# JavaScript Classes and Methods - Interactive Popcorns 
In this notebook, you will learn about classes and methods in JavaScript. During the lesson, use these to enhance your understanding of clases and methods
### 
- **Objectivs**: Do something - Change Later
- **How**:




```python
//Exercise 1: Create a Rectangle (aka a fridge)

class Rectangle {
    constructor(w, h) {
        this.width = w;
        this.height = h;
    }
}
Rectangle(10, 20);


/*Exercise 2: Change Dimensions
Use the Rectangle to:
Part a.) Create a rectangle with a width of 20 and height of 40.
Part b.) Change the dimensions to make the area 200 units². */

Rectangle(20, 40)
rectangle.height = 10;

//Exercise 3: Experiment with Areas
//a.) Find all pairs of dimensions that give an area of 48 units².

let area = rectangle.width * rectangle.height;
if (area === 48) {
    console.log(rectangle.width, rectangle.height);
}


//Exercise 4: Rectangle Class (Missing Methods)
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    // **Code missing**: Add method to calculate the perimeter of the rectangle
    getPerimeter() {
        // Add logic here to return the perimeter
    }
}
const rect = new Rectangle(10, 5);
console.log(rect.getPerimeter()); // Output should be 30

12:06
// Exercise 5: Square Class (Missing Method)
class Square {
    constructor(sideLength) {
        this.sideLength = sideLength;
    }
    // **Code missing**: Add method to calculate the diagonal of the square
    getDiagonal() {
        // Add logic here to calculate and return the diagonal
    }
}
const square = new Square(5);
console.log(square.getDiagonal()); // Output should be 7.07 (sideLength * √2)

```
