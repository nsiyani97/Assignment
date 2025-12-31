# CSS Grid

## THEORY ASSIGNMENT

### 1. Explain CSS Grid and how it differs from Flexbox. When would you use Grid over Flexbox?

- CSS Grid is a two-dimensional layout system that allows developers to design layouts using rows and columns.
- It is useful for creating complex page structures such as dashboards and full-page layouts.
- Flexbox is a one-dimensional layout system that works in either a row or a column.
- Grid is preferred when both rows and columns need to be controlled together.
- Flexbox is better suited for aligning items in a single direction, such as navigation bars or lists.

### 2. Describe the grid-template-columns, grid-template-rows, and grid-gap properties with examples.

- `grid-template-columns` defines the number and width of columns in a grid layout.
- Example: `grid-template-columns: repeat(3, 1fr);`
- `grid-template-rows` defines the height of rows in a grid layout.
- Example: `grid-template-rows: 200px auto;`
- `grid-gap` (or `gap`) defines the space between grid items.
- Example: `gap: 20px;`

---

## Lab Assignment

### Task: Create a 3×3 grid of product cards using CSS Grid

[Grid Cards](./Lab/index.html)

### Explanation

This lab demonstrates the use of CSS Grid to create a structured layout of product cards. The grid contains 3 columns and 3 rows, with equal spacing between items. Hover effects are added to improve user interaction and visual feedback.

---
