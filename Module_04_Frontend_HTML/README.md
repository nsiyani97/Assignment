# HTML Basics

### 1. Define HTML. What is the purpose of HTML in web development?

- HTML (HyperText Markup Language) is the standard markup language used to create web pages.
- It is used to structure content on the web, such as text, images, links, tables, and forms.
- HTML defines the skeleton of a webpage that browsers read and display.
- It works together with CSS for styling and JavaScript for interactivity in web development.

### 2. Explain the basic structure of an HTML document. Identify the mandatory tags and their purposes.

- An HTML document follows a fixed structure to ensure proper rendering in browsers.
- `<!DOCTYPE html>` defines the document type and tells the browser that HTML5 is used.
- `<html>` is the root element that wraps the entire webpage content.
- `<head>` contains metadata like title, charset, and links to CSS files.
- `<body>` contains the visible content of the webpage such as text, images, and links.

### 3. What is the difference between block-level elements and inline elements in HTML? Provide examples.

- Block-level elements start on a new line and take up the full width available.
- Examples of block-level elements include `<div>`, `<p>`, `<h1>`, and `<section>`.
- Inline elements do not start on a new line and only take up as much width as needed.
- Examples of inline elements include `<span>`, `<a>`, `<img>`, and `<strong>`.

### 4. Discuss the role of semantic HTML. Why is it important for accessibility and SEO? Provide examples.

- Semantic HTML uses meaningful tags that clearly describe their purpose and content.
- It improves accessibility by helping screen readers understand page structure.
- Semantic tags also improve SEO by allowing search engines to better interpret webpage content.
- Examples of semantic elements include `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, and `<footer>`.

---

# HTML Forms

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

# HTML Tables

### 1. Explain the structure of an HTML table and the purpose of table elements.

- The `<table>` element is used to create a table and acts as the main container for all table data.
- The `<tr>` (table row) element is used to create a row inside the table.
- The `<th>` (table header) element is used to define header cells, which are usually bold and centered by default.
- The `<td>` (table data) element is used to define regular data cells inside a table row.
- The `<thead>` element groups the header content of a table and helps improve structure and accessibility.

### 2. What is the difference between colspan and rowspan in tables? Provide examples.

- `colspan` is used to merge two or more columns into a single cell horizontally.
- Example: `<td colspan="2">Merged Columns</td>`
- `rowspan` is used to merge two or more rows into a single cell vertically.
- Example: `<td rowspan="2">Merged Rows</td>`

### 3. Why should tables be used sparingly for layout purposes? What is a better alternative?

- Tables are meant for displaying tabular data, not for designing page layouts.
- Using tables for layout makes the code hard to maintain and less accessible.
- Table-based layouts can negatively affect SEO and responsiveness.
- A better alternative is using CSS layouts such as Flexbox or Grid for modern web design.

---
