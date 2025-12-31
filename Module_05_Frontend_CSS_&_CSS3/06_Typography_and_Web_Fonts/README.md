# Typography and Web Fonts

## THEORY ASSIGNMENT

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

## Lab Assignment

### Task: Blog Post Layout

[Blog Post Layout](./Lab/index.html)

### Explanation:

- Uses two fonts (Playfair Display for headings, Roboto for body).
- Google Fonts integrated.
- Font size, spacing, and line-height adjusted for readability and responsiveness.
