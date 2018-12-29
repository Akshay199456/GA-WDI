![GA Cog](https://camo.githubusercontent.com/6ce15b81c1f06d716d753a61f5db22375fa684da/68747470733a2f2f67612d646173682e73332e616d617a6f6e6177732e636f6d2f70726f64756374696f6e2f6173736574732f6c6f676f2d39663838616536633963333837313639306533333238306663663535376633332e706e67)

# DOM Events & jQuery

Type: Lab<br>
Created by: WDI Instructional staff<br>
Class: wdi-cc<br>
Updated by: Reuben Ayres, Jim Haff, and Daniel Scott<br>
Competencies: Beginner-level jQuery fundamentals, DOM

---

In the following exercises you will use five of the most common DOM `events` in jQuery:
- ready
- submit
- change
- click
- keypress

You can find a full list of `event` related methods in jQuery here: http://api.jquery.com/category/events/


## Setup: CLONE THIS REPO.

Because there are several files in it you will use.  Don't fork. Just clone.

## Exercises

### Instructions:

* For each exercise, start by reading the entire question carefully, then open the `index.html` file for that challenge in your browser.
* When you cloned this repo, you got the files you will use for each solution.
* To solve the challenge, you'll need to change each `base.js` file.
* Your Chrome Developer Console is **open** right??

---

### 1. `ready`

- **Challenge**: Without touching the `index.html` file, make the page say "Go!" (where it currently says "Ready?")

---

### 2. `submit`

* Spend 2 minutes talking to the person sitting next to you about the difference between an "event handler" and an "event listener."

- **Challenge**: Stop the forms from submitting...
    + Ask the question to Google: "How do I stop a form from submitting?"
    + You will have to use the `e` (or `event`) object that is passed to your event handler (the parameter in the callback).
    + Why does one button reload the same page and the other redirect?
    + What is the "?" doing in the URL? Try removing it.
    
- Bonus: Instead of redirecting to youtube, let's embed the video in our page instead!
    +  When the user clicks "submit", dynamically insert the embed code into the page (on youtube, click "share" under the video, then click "embed" and copy the html). HINT: The embed code belongs in your javascript, not your html!

---

### 3. `change`
- **Challenge**: Some simple addition! Can you get the total to update whenever you update the numbers?
- Bonus: Add a "reset" button that clears all the inputs.

---

### 4. `click`

- **Challenge**: Create a list of all the phrases that you click.
- Stretch: In addition to listing the phrase clicked, can you include a timestamp?

---

### 5. `keypress`

#### Important Note for #5: Read all of this before starting the question. 

In this `base.js` file, you'll see that you're prompted to optionally write your code inside of something like this:

```javascript
$(document).ready(function() {
    // jQuery code here
})
```

**Read this:
[When (NOT) to use `$(document).ready(function(){})`](https://jack.ofspades.com/speed-up-your-website-load-time-by-not-waiting-for-document-ready/index.html)**


#### So... the takeaways:

* You almost never need `$(document).ready(function() {})`.
* There are a few obscure cases where it is necessary, but avoid it otherwise. Just put your `<script>` tag that links to your `app.js` (or whatever) at the bottom of your html document, (after the html elements it refers to, right before the closing `</body>` tag).
* (You should still link to the [jQuery library](https://cdnjs.com/libraries/jquery/3.3.1) in the `<head>` tag though.)
* We left it in for this one random question because it is (unfortunately) _way too common_ in Stack Overflow answers and other code snippets online, and we want you to have seen it before and understand what it is.

####  Answer these questions:
* When/why _would_ you use a `$(document).ready(function(){})`?
* When/why would you NOT use it?

#### And finally the actual question for number 5: 
- **Challenge**: Stop watch. When the user hits spacebar, record their "start" time. When they  hit it again, record their "end" time. Then, calculate the total time, and put it on the page.


---

### Wrap it up
- Recommended: Can you link all the pages together? Create a navbar at the top of every page, with links to all the other pages.
