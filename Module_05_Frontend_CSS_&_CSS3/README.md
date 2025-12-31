# CSS Selectors & Styling

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

# CSS Box Model

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

# CSS Flexbox

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

# CSS Grid

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

# Responsive Web Design with Media Queries

### 1. What are media queries in CSS, and why are they important for responsive design?

- Media queries are a CSS technique used to apply styles based on device screen size, resolution, or orientation.
- They allow websites to adapt their layout and design for different devices like mobiles, tablets, and desktops.
- Media queries help improve user experience by ensuring content is readable on all screen sizes.
- They are a core part of responsive web design and reduce the need for separate mobile websites.

### 2. Write a basic media query that adjusts the font size of a webpage for screens smaller than 600px.

```css
@media (max-width: 600px) {
  body {
    font-size: 14px;
  }
}
```

- This media query applies styles only when the screen width is 600px or smaller.
- It reduces the font size to improve readability on small devices like smartphones.
- Media queries help maintain consistent design across different screen sizes.

---

# Typography and Web Fonts

### 1. Explain the difference between web-safe fonts and custom web fonts. Why might you use a web-safe font over a custom font?

- **Web-safe fonts** are fonts that are commonly available on most devices and operating systems.
- Examples of web-safe fonts include Arial, Times New Roman, Verdana, and Helvetica.
- **Custom web fonts** are fonts that are downloaded from the web, such as Google Fonts.
- Web-safe fonts are used when faster loading, better performance, and maximum compatibility are required.
- Custom fonts are used to improve design and branding but may slightly increase page load time.

### 2. What is the font-family property in CSS? How do you apply a custom Google Font to a webpage?

- The `font-family` property in CSS is used to specify the typeface for text on a webpage.
- It allows developers to define a list of fonts as fallbacks.
- To apply a Google Font, the font link is added inside the `<head>` section of the HTML.
- The font is then applied using the `font-family` property in CSS.

Example:

```html
<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
```

```css
body {
  font-family: "Roboto", sans-serif;
}
```

- This ensures the custom font is used, with a fallback font if it fails to load.

---
