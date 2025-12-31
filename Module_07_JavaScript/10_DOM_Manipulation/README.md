# DOM Manipulation

## THEORY ASSIGNMENT

### 1. What is the DOM (Document Object Model) in JavaScript? How does JavaScript interact with the DOM?

- The DOM (Document Object Model) is a structured representation of an HTML document created by the browser.
- It represents the webpage as a tree of objects, where each HTML element becomes a node.
- JavaScript interacts with the DOM to read, modify, add, or remove elements and content dynamically.
- Through the DOM, JavaScript can change text, styles, attributes, and respond to user actions without reloading the page.

### 2. Explain the methods getElementById(), getElementsByClassName(), and querySelector().

- `getElementById("id")` is used to select a single HTML element with a specific id; JavaScript searches the DOM and returns the element whose id matches the given value.
- `getElementsByClassName("className")` selects all elements that share the same class name and returns them as a collection; JavaScript groups matching elements together so they can be accessed one by one.
- `querySelector("selector")` selects the first element that matches a CSS-style selector; JavaScript uses the selector rules (like id, class, or tag) to find the element.
- These methods allow JavaScript to target specific elements and manipulate them efficiently.

---

## Lab Assignment

[dom pragram](./Lab/dom-manipulation.html)

### Explanation:

- In this lab, the paragraph element is selected using `getElementById()`.
- JavaScript then modifies the paragraph’s **text content** and **CSS style** using DOM properties, demonstrating basic DOM manipulation.

---