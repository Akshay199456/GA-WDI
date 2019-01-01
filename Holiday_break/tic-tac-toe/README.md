![](https://lh4.ggpht.com/bjuK8Xe0G8WJ1583yP_5RV6_ylS-c_MsF2O3g4XjZ4Dm4ttgWmcu1BqqUrZyI9uDtMk=w300)
# Tic-Tac-Toe Weekend Mini-Project
---

## Objective

Build a Tic-Tac-Toe game incorporating the three web app technologies you've worked with thus far:

- HTML
- CSS
- JavaScript

## Minimum Requirements
- Display an empty tic-tac-toe board when the page is initially displayed.
- A player can click on the nine cells to make a move.
- Every click will alternate between marking an `X` and `O`.
- Once occupied with an `X` or `O`, the cell cannot be played again.
- Display whose turn it is (`X` or `O`).

### Getting Started / Hints

- First fork, then clone this repository.
- Create an `index.html` page.
- Create and include in your `index.html` page, `main.css` and `main.js` files.
- Start by writing the HTML and CSS that displays a 3x3 grid and the `reset game` button.
- Use `id` and/or `class` attributes as necessary to help select elements for styling and wiring up click event listeners.
- Programs, including games, are frequently focused on manipulating data and displaying that data to a user. Decide on the data structures, held in variables, that will maintain the _state_ (data / status) of the game.
- Note that the values you use to represent the state of your game, doesn't necessarily have to match what you want to display.  For example, just because you want to display X and Os doesn't mean that you have to use those letters in your data structure.  You might choose to use 1 to represent player X and -1 to represent player O for example.  Then, in a "render" function you could have the logic to translate data to what you want to display.  A "render" function's responsibility is to transfer the data held in variables (state) to the DOM.
- Using a single, delegated event listener, made possible by event bubbling, is recommended.
- Lots of little functions!

## Bonuses

- Provide win logic and display a winning message.
- Provide a `Reset Game` button that will clear the contents of the board.
- Provide logic for a cat's game (tie), also displaying a message.
- Add your personal touch with unique styling. Consider rendering images instead of "X"s and "O"s.

## Resources

[DOM Events - Lesson](https://gist.github.com/jim-clark/3e7f8d1f6c73f917d5a041d4da611383)

