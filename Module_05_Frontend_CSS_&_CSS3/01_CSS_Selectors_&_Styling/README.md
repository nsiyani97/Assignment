# CSS Selectors & Styling

## THEORY ASSIGNMENT

### 1. What is a CSS selector? Provide examples of element, class, and ID selectors.

- A CSS selector is used to select HTML elements that you want to style.
- It tells the browser which elements the CSS rules should apply to.
- An **element selector** targets HTML tags directly, for example: `p { color: blue; }`.
- A **class selector** targets elements with a specific class using `.classname`, for example: `.box { padding: 10px; }`.
- An **ID selector** targets a unique element using `#idname`, for example: `#header { background: gray; }`.

### 2. Explain the concept of CSS specificity. How do conflicts between multiple styles get resolved?

- CSS specificity determines which CSS rule is applied when multiple rules target the same element.
- Each selector type has a priority: inline styles have the highest priority, followed by ID selectors, class selectors, and element selectors.
- When two rules have the same specificity, the one written last in the CSS file is applied.
- Specificity helps browsers decide the final style without ambiguity.

### 3. What is the difference between internal, external, and inline CSS? Discuss advantages and disadvantages.

- **Inline CSS** is written directly inside an HTML element using the `style` attribute.
- It has high priority but makes code messy and difficult to maintain.
- **Internal CSS** is written inside a `<style>` tag in the `<head>` section of an HTML file.
- It is useful for small projects but cannot be reused across multiple pages.
- **External CSS** is written in a separate `.css` file and linked to HTML.
- It is the best practice for large projects because it improves maintainability, performance, and reusability.

---

## Lab Assignment

### Task: Style the Contact Form using External CSS

[Contact Form](./Lab/index.html)

### Explanation:

- Form background color applied
- Padding and margins added
- Submit button styled with hover effect
- Class selectors used for common elements
- ID selector used for unique button

---
