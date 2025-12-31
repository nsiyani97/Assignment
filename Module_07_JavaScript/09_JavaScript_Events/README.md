# JavaScript Events

## THEORY ASSIGNMENT

### 1. What are JavaScript events? Explain the role of event listeners.

- JavaScript events are actions or occurrences that happen in the browser, such as clicking a button, typing in an input, or loading a page.
- Events allow JavaScript to respond to user interactions and make web pages interactive.
- An **event listener** is a function that waits for a specific event to occur on an element.
- When the event happens, the listener executes the assigned code.
- Event listeners help separate HTML structure from JavaScript behavior, improving code clarity.

### 2. How does the addEventListener() method work in JavaScript? Provide an example.

- The `addEventListener()` method attaches an event handler to an element.
- It listens for a specified event and runs a function when that event occurs.
- The syntax is written as `element.addEventListener("event", function)`, where the event defines what action to listen for and the function defines what to execute.

Example:

```javascript
button.addEventListener("click", function () {
  alert("Button clicked!");
});
```

- Here, `addEventListener` listens for a `click` event on the button.
- When the button is clicked, the function inside it is executed.
- This method allows multiple event handlers to be added to the same element.

---

## Lab Assignment

[Button clicked! program](./Lab/event-button.html)

### Explanation:

- The button is selected using `getElementById()`.
- The `addEventListener()` method listens for the `click` event on the button.
- When the button is clicked, the attached function runs and displays an alert message.
