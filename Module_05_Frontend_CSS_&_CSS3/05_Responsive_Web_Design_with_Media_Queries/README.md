# Responsive Web Design with Media Queries

## THEORY ASSIGNMENT

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

## Lab Assignment

### Task: Build a Responsive Webpage

[Responsive Webpage](./Lab/index.html)

### Explanation:

- Navigation bar at the top
- Two-column layout on desktop
- Columns stack vertically on screens below 768px
- Font size and padding adjusted for mobile readability

---
