---
layout: post
title: Arrays Popcorn Hax 1
description: First Arrays Exercise
type: issues
comments: True
permalink: /csse/javascript/fundamentals/arrays/Popcorn_Hax1
---

---
Popcorn Hacks One
---

 - Delete the last two items of the list below (delete1 and delete2)
 - Change the non dessert item (fries) to a dessert
 - Add two more desserts to list


```python
%%js

let desserts = ['cake', 'ice cream', 'cookies', 'fries', 'delete1', 'delete2']
desserts.pop(4);
desserts.pop(5);
desserts[3] = "glazedDonut"
console.log(desserts.join(", "))
```


    <IPython.core.display.Javascript object>

