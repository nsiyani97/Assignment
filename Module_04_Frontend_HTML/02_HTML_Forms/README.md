# HTML Forms

## THEORY ASSIGNMENT

### 1. What are HTML forms used for? Describe the purpose of the input, textarea, select, and button elements.

- HTML forms are used to collect user input and send data to a server for processing.
- The `<input>` element is used to accept user data such as text, email, password, radio buttons, and checkboxes.
- The `<textarea>` element is used for multi-line text input, such as messages or feedback.
- The `<select>` element provides a dropdown list where users can choose one option from multiple choices.
- The `<button>` element is used to submit the form or trigger specific actions.

### 2. Explain the difference between the GET and POST methods in form submission. When should each be used?

- The GET method sends form data as part of the URL, making the data visible in the browser address bar.
- It is mainly used for retrieving data, search forms, or when data is not sensitive.
- The POST method sends form data in the request body, keeping it hidden from the URL.
- POST is used when submitting sensitive data such as passwords or when sending large amounts of data.

### 3. What is the purpose of the label element in a form, and how does it improve accessibility?

- The `<label>` element is used to define a text label for form input elements.
- It improves usability by allowing users to click the label to focus on the related input field.
- Labels help screen readers identify form fields clearly for visually impaired users.
- Proper use of labels improves form accessibility and user experience.

---

## Lab Assignment

### Task: Create a Contact Form

[Contact Form](./Lab/index.html)

### Explanation: Validation Used

- `required` for mandatory fields
- `minlength` and `maxlength` for text limits
- `pattern` for phone number validation
- `for` attribute used to link labels with inputs

---
