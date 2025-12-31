# CSS Box Model

## THEORY ASSIGNMENT

### 1. Explain the CSS box model and its components. How does each affect the size of an element?

- The CSS box model represents the structure of an HTML element as a rectangular box.
- **Content** is the actual area where text, images, or other data are displayed.
- **Padding** is the space between the content and the border, increasing the internal space of the element.
- **Border** surrounds the padding and content and adds to the element’s total size.
- **Margin** is the outer space around the element that separates it from other elements.
- All these components together determine the final size and spacing of an element on the page.

### 2. What is the difference between border-box and content-box box-sizing in CSS? Which is the default?

- `content-box` is the default box-sizing value in CSS.
- In `content-box`, width and height apply only to the content, and padding and border are added outside the defined size.
- `border-box` includes content, padding, and border within the defined width and height.
- Using `border-box` makes layout calculations easier and helps create consistent designs.

---

## Lab Assignment

### Task: Profile Card Layout using CSS Box Model

[Profile Card Layout](./Lab/index.html)

### Explanation:

- The card is centered using `margin: auto`.
- Padding and borders demonstrate spacing inside elements.
- `border-box` is applied to the card, while `content-box` is applied to the image to show the difference.

---
