Introduction
---
Used Sass, Bootstrap 4, and jQuery to get the data from the JSON file.

Exercise 1
---
Mainly used bootstrap scss and html for this excercise. Used bootstrap classes to make the site responsive


Exercise 2
---
Used jQuery to get the data from the .json file.
Used bootstrap accordion to display the data as an accordion.


###### Bonus points
* Explain why the result of `('b' + 'a' + + 'a' + 'a').toLowerCase()` is `banana`.

The javascript concatenation from HTML uses +. After the 2nd contcatenation, javascript thought that you are trying add 0 to the string A (+ 'a') which causes to display NaN meaning it's not a number.
toLowerCase causes the NaN to be in lowercase, thats why both capital letter N's became lowercase and causes the output to be "banana".
