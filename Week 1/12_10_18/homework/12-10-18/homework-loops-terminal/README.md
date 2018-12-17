![GA logo](https://camo.githubusercontent.com/6ce15b81c1f06d716d753a61f5db22375fa684da/68747470733a2f2f67612d646173682e73332e616d617a6f6e6177732e636f6d2f70726f64756374696f6e2f6173736574732f6c6f676f2d39663838616536633963333837313639306533333238306663663535376633332e706e67)

#  Homework 1: Terminal & Loops

Class: **wdi-cc**<br>
Creator: Thom Page <br>
Modified by: Kristyn Bryan and Reuben Ayres <br>
Topics: Terminal, boolean expressions, reading code, while loops, for loops <br>

---

# Section 1: Terminal Practice

## Episode X: A New Terminal

A long time ago in a Unix environment far, far away, young Jedi padawans who
knew only of desktop software were seduced by the dark side of the Force to
enter… The Terminal.

Follow the instructions below using all the console commands introduced in
Fundamentals, class, or that you find on your own.

## Setup

* Open the **Terminal app**

* Make a directory in today's folder called `homework`.  Create a new directory in that `homework` directory called `homework_part_1` and enter it.

* Create a file called `commands.txt`.

* Paste the answer to each numbered question (i.e. the command(s) that accomplished the task) in `commands.txt` once you get it to work.


## Part I: Set the Scene

1. Create a directory called `death_star`, and make the following files inside of it: `darth_vader.txt`, `princess_leia.txt`, `storm_trooper.txt`

2. In `galaxy_far_far_away`, make a directory named `tatooine` and create the following files in it: `luke.txt`, `ben_kenobi.txt`.

3. Inside of `tatooine` make a directory called `millenium_falcon`, and in it create: `han_solo.txt`, `chewbaca.txt`

<br>

## Part II: `mv` - rename

* You can rename a file using the `mv` command. 

4. Rename `ben_kenobi.txt` to `obi_wan.txt`.

<br>

## Part II: `cp` - copy

* You can copy a file from one location to another using the `cp` command. (`man cp` for more info)

- Directories can be sibling (parrell to each other) or can be parents (the folder that contains the folder you are in)

5. Copy `storm_trooper.txt` from `death_star` to `tatooine`.

<br>

## Part IV: `mv` - move

* You can use the `mv` command to move files from one location to another. `mv` can be used for renaming, moving, or both.  Run `man mv` to see the options—remember hit the `Q` key to get out of the manual page viewer.

6. Move `luke.txt` and `obi_wan.txt` to the `millenium_falcon`.

7. Move `millenium_falcon` out of `tatooine` and into `galaxy_far_far_away`.

8. Move `millenium_falcon` into `death_star`.

9. Move `princess_leia.txt` into the `millenium_falcon`.

<br>


## Part V: `rm` - remove

### ***BE CAREFUL WITH `rm`!!! THERE IS NO "TRASH" IN THE UNIX CLI. WHEN YOU DELETE SOMETHING IT IS GONE FOREVER!!!***

You can use `rm` to delete a file.


10. Delete `obi_wan.txt`.

<br>

## Part VI: all together

11. In `galaxy_far_far_away`, make a directory called `yavin_4`.

12. Move the `millenium_falcon` out of the `death_star` and into `yavin_4`.

13. Make a directory in `yavin_4` called `x_wing`.

14. Move `princess_leia.txt` to `yavin_4` and `luke.txt` to `x_wing`.

15. Move the `millenium_falcon` and `x_wing` out of `yavin_4` and into `galaxy_far_far_away`.

16. In `death_star`, create directories for `tie_fighter_1`, `tie_fighter_2` and `tie_fighter_3`.

17. Move `darth_vader.txt` into `tie_fighter_1`.

18. Make a copy of `storm_trooper.txt` in both `tie_fighter_2` and `tie_fighter_3`.

19. Move all of the `tie_fighters` out of the `death_star` and into `galaxy_far_far_away`.

<br>

## Part VII: `rm -r`: remove directories and everything they contain

***BE CAREFUL WITH `rm`!!! THERE IS NO TRASH CAN IN THE UNIX CLI. WHEN YOU DELETE SOMETHING IT IS GONE FOREVER***

Before you hit enter, make sure are deleting the right thing, or you could accidentally delete the contents of your computer (it has happened).

This command will not typically ask you if you "really want to delete." It will just delete.


20. Remove `tie_fighter_2` and `tie_fighter_3`.


## Part VIII:

21. Touch a file in `x_wing` called `the_force.txt`.

22. Destroy the `death_star` and anyone inside of it.

23. Return `x_wing` and the `millenium_falcon` to `yavin_4`.


### Celebrate. You've reached the end of section 1 :)

<br>
<hr>



---


# Section 2: JavaScript loops and expressions

### Setup

* Go back up to the `homework` directory and make another directory called `homework_part_2`.  So in `homework` you should have `homework_part_1` and `homework_part_2`. Do all these JavaScript questions in `homework_part_2`. 

* Build our folder structure like we did in class.

* Write your answers inside `app.js`.

* For any answers that require a written response, write the response as comments. For example: 

  ```javascript
  // 1. The difference between interpolation and
  // concatentation is . . .
  ```

* For coded responses, as you work on them, you may want to comment out everything else but the problem you're working on so that when you load `index.html` in your browser, your console is less cluttered.

* Before submitting, uncomment your answers to all coded responses so that the output for each question automatically runs in the terminal. We should not have to edit your code to make the file run.

* A

Good luck!

## Part 1: Terms

1. What is the difference between **interpolation** and **concatenation**? Give an example of each.

2. What does the acronym **DRY** stand for? Why should we pay attention to it? What programming tools have we learned to write **DRY** code?

3. What is the difference between declaring a variable and assigning a value to a variable?  What do we mean when we say "define" a variable?

4. When should we use `const` and when should we use `let`?

5. Unix question: What is a "parent" directory?

6. Unix, again: If you're not sure about how to use a Unix command, how can you get more info without being connected to the internet?

7. More Unix: What is "tab completion" and why is it aweseome?

### A reminder about error messages:  

Remember that error messages are your friend. Even experienced developers constantly make syntax errors, they just have gotten faster at fixing them.  They way they got faster at it is by reading error messages over and over and over and learning to understand them.

<br>
<hr>


## Part 2: Boolean expressions and operators
**... and variable assignment**

- Remember: **Expressions** in JavaScript are anything that can be said to have a _value_.
- Remember: Variable **assignment** is a **right-to-left** operation: the **expression** on the right side of the equal sign gets **evaluated** *AND THEN* put into the variable **declared** on the left side.
- Using the provided variable definitions, replace the blanks with mathematical or boolean operators that make the expression evaluate to `true`.
- Test your answers by using `console.log` in front of each expression in your answer file.

```javascript
  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

```

1.  a \_\_ b;
2.  c \_\_ d;           
3.  'Name' \_\_ 'Name'; 
4.  a \_\_ b \_\_ c;  // (a < b < c is **not** the answer and is **not** valid JS)
5.  a \_\_ a \_\_ d;  // again, the answer is not something "weird," it's an expression that makes sense
6.  e \_\_ 'Kevin';
7.  48 \_\_ '48';

<br>
<hr>

## Part 3: While loops

Increase your **code literacy** by reading code, line by line.  When you read code pretend to _be_ the computer.  It is absolutely essential that you understand what is happening each line of code you write.

### 1. Infinite loop?

Read the following code very carefully.

**DO NOT RUN** the code because it might run an **infinite loop**.

Answer the following question:

* is this an infinite loop? Why or why not?

You cannot test this code, so read it line by line and 'execute' the code in your head. 

```js
while (true) {
	console.log('Do not run this loop');
}
```

Infinite or not infinite? Give it a good guess. It is 100% OK if you get it wrong (as long as you don't run the code). It's important to get into the habit of reading code.

### 2. Infinite loop II

* is the following loop an infinite loop? Why or why not?

```javascript
const runProgram = true;

while (runProgram) {
	console.log('Do not run this loop');
	runProgram = false;
}
```

Inifnite or not infinite? What is the expected output?

### 3. Reading code

Ok rest easy, no more infinite loops for now!

The following while loop uses a **compound assignment** operator `+=`.  There are other compound assignment operators for other mathematical operations.

If you need a refresher on what the compound assignment operator does, have a look back at the afternoon lesson.

_Without running this loop_, what is the expected output?

Read the code line by line—everything happens in sequence. Add a comment before **each** line of code explaining what the line below it does. Then write down what output you expect to see in the console. Be patient with your thought! There is no rush. Time spent to really understand these fundamentals now will pay off a hundred fold in the coming weeks. Today we must master learn how to properly hold and use a knife and how to correctly chop an onion. Later we'll make complex dishes with many ingredients, herbs and spices!

```js
let letters = "A";
let i = 0;

while (i < 20) {
	letters += "A";
	i++;
}

console.log(letters);
```

After coming to a conclusion, run the code and write down whether it gave you the expected result. If not, how did it differ?

<br>
<hr>

## Part 4: Loops!

### 1. `for` loops

Answer the following question:

Both for loops and while loops repeat code.  But what are the differences?  What are the similarities?

### 2. Basic `for` loop

Write a for loop that will `console.log()` the numbers 0 to 999.

### 3. The mechanics of a `for` loop 

Here is an example `for` loop that prints a message 100 times:

```javascript
for (let i = 0; i < 100; i++) {
	console.log('Without you, today\'s emotions are the scurf of yesterday\'s');
}
```

What are the three components of the **control statement**? Each component is separated by a semicolon `;`.

Write your answers as comments in the file.  Say what each part does.

* The first part of the control statement is:
* The second part of the control statement is:
* The third part of the control statement is:

### 4. `for` loop in reverse

Using a postfix operator `i--` instead of `i++`, write a *for* loop that iterates in *reverse*: `console.log()` a countdown from 999 to 0.


### 5. More counting

Write a `for` loop that uses **interpolation** to print a message to the console that includes the current value of `i`.

The loop should run from 1 to 10.

Expected output in the console:

```
The value of i is: 1 of 10
The value of i is: 2 of 10
The value of i is: 3 of 10
The value of i is: 4 of 10
The value of i is: 5 of 10
The value of i is: 6 of 10
The value of i is: 7 of 10
The value of i is: 8 of 10
The value of i is: 9 of 10
The value of i is: 10 of 10
```

### :red_circle: Commit and push your work as described above, at the end of Section 1.

### Congrats! You've reached the end of Section 2, and can go ahead and submit your homework.  Or, if you want more, try the exercises below.  If not, don't worry, you're in good shape to continue if you've made it this far, and homework submission instructrions are at the bottom. 

<br>

# "Hungry for more?"

Want an extra challenge?  In many assignments or lab you'll find a "Hungry for More" section which is designed for further learning. If they seem too overwhelming you can absolutely skip them. They won't factor into your homework score, and you will be totally fine for class as long as you complete and understand the main assignment up to that point.  What they _will_ do is encourage you to go deeper, explore, and push yourself. And that will pay off big time in the long run.  Below is the "hungry for more" section for this assignment.

## Try to complete the following, making a commit after each one.

...as long as you don't mess up the homework assignment you just did. They get more difficult/complex as you go (more or less).

* Create a directory called `test-dir` with a couple files in it.  Try to make a copy of that entire directory. (Hint: `man cp` for more info.)
* Find and use command line shortcuts. 
* Try applying one command to multiple files at once.
* Try applying one command to **all** files in a single directory (where necessery)
* Try applying one command to **all files that match a pattern**.
* Try using a mix of absolute and relative paths.
* Read about the text editor "vi" on google and see if you can use it to create and edit small javascript program (just a loop or something)

<br>
<hr>

# Homework submission

Once you've got your homework all done and pushed to github, do a pull request to get it submitted. If you're not sure how to do this, reach out to your instructor for help
