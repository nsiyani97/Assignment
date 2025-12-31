# HTML Tables

## THEORY ASSIGNMENT

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

## Lab Assignment

### Task: Product Catalog Table

[Table](./Lab/index.html)

### Explanation:

- `<thead>` is used for table headers.
- Inline CSS is applied for borders and layout.
- `colspan` merges description and availability cells.
- `rowspan` merges product category cells.

---
