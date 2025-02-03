---
comments: True
layout: post
title: Iteration Homework
description: Iterations HW
permalink: /csse/javascript/fundamentals/iteration/hw
categories: ['CSSE JavaScript Fundamentals']
author: Andrew Ge, Ishan Shrivastava, Pratheep Natarajan, and Ruhaan Bansal
---

### Exercise 1: Multiplication Table
##### Write a JavaScript program to print the multiplication table for a given number.

##### Example:
##### Input: 3
##### Output:
##### 3 x 1 = 3
##### 3 x 2 = 6
##### ...
##### 3 x 10 = 30


```python
%%js
function multTable(number){ //define a function that uses a loop to create outputs from 0 to 10
    for(let i = 0; i < 11; i++){
        console.log(`${number} x ${i} = ${number * i}`); //Prints: n x i = product for every value (0-10)
    }
} console.log(multTable(3)); //logs the output when input is 3.

```


    <IPython.core.display.Javascript object>


### Exercise 2: Nested Loops
##### Write a JavaScript program using nested loops to generate the following pattern:

##### Output:
##### 0
##### 00
##### 000
##### 0000
##### 00000


```python
%%js
for(let i = 1; i <=5; i++){ 
    let zeroString = ""; //defines the string that will fill with zeros
    for (let j = 1; j <= i; j++){
        zeroString += "0"; //fills string wtih one zero, the prints it below. previous loop runs this 5 times.
    }
    console.log(zeroString);
} 
```


    <IPython.core.display.Javascript object>


### Challenge Exercise: Prime Numbers
##### Write a JavaScript program to print all prime numbers between 1 and 50.


```python
%%js 
const primes = ['2', '3', '5', '7', '11', '13', '17', '19', '23', '29', '31', '37', '41', '43', '47']; //array with all primes
for (let prime of primes){
    console.log(prime); //logs each entry individually
}
//if you guys don't like this approach, that's okay. Another answer below:
```


    <IPython.core.display.Javascript object>



```python
%%js
function primeCheck(n){
    if(n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++){ //Divisors come in pairs. If say n is 36: if n is divisible by 4, it'll also be divisible by its pair. Therefore, the highest we need to go is the square root of n since higher numbers will just loop back to previous divisor pairs.
        if (n % i === 0) return false; //abort if necessary
    } 
    return true //if n passes all checks, say it works!
}
for (let i = 1; i <= 50; i++) {
    if (primeCheck(i)) {//Check all primes from 1 to 50
        console.log(i); //log results
    }
}
```


    <IPython.core.display.Javascript object>


# End of Homework
