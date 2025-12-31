# CSS Flexbox

## THEORY ASSIGNMENT

### 1. What is CSS Flexbox, and how is it useful for layout design? Explain flex-container and flex-item.

- CSS Flexbox (Flexible Box Layout) is a one-dimensional layout system used to arrange elements in rows or columns.
- It helps create responsive and flexible layouts without using floats or complex positioning.
- A **flex-container** is the parent element where `display: flex` is applied.
- All direct child elements of a flex-container are called **flex-items**.
- Flexbox allows easy alignment, spacing, and reordering of elements within the container.

### 2. Describe the properties justify-content, align-items, and flex-direction used in Flexbox.

- `justify-content` controls the alignment of flex-items along the main axis (horizontal by default).
- Common values include `flex-start`, `center`, `space-between`, and `space-around`.
- `align-items` controls the alignment of flex-items along the cross axis (vertical by default).
- Values include `stretch`, `center`, `flex-start`, and `flex-end`.
- `flex-direction` defines the direction of the flex layout, such as `row`, `row-reverse`, `column`, and `column-reverse`.

---

## Lab Assignment

### Task: Create a simple webpage layout using Flexbox

[Flexbox Layout](./Lab/index.html)

### Explanation:

- Flexbox is used to align header, sidebar, main content, and footer.
- `justify-content` and `align-items` control spacing and alignment.
- Media query ensures the layout stacks vertically on smaller screens.

---
