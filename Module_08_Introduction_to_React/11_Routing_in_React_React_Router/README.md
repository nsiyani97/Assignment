# Routing in React (React Router)

## THEORY EXERCISE

### 1. What is React Router? How does it handle routing in single-page applications?

- React Router is a standard library used in React to manage navigation and routing.
- It allows different components to be displayed based on the URL without reloading the page.
- In a single-page application (SPA), React Router changes the view dynamically while staying on the same page.
- It uses the browser history API to keep the UI in sync with the URL.
- This provides a smooth user experience similar to a multi-page website.

### 2. Explain the difference between BrowserRouter, Route, Link, and Switch components in React Router.

- **BrowserRouter** is the main wrapper component that enables routing using the browser’s URL system; it wraps the entire application to provide routing context.
- **Route** is used to define a path and the component that should render when the URL matches that path, written inline as `path="/url" element={Component}`.
- **Link** is used for navigation between routes without reloading the page; it is written as `to="/path"` and replaces traditional anchor tags.
- **Switch** (used in older versions of React Router) ensures that only the first matching route is rendered.
- Together, these components manage navigation, URL matching, and view rendering in React applications.

---

## LAB EXERCISE – Routing

### Task 1: Basic React Router (Home & About)

[Basic Router](./routing/src/task_1/TaskOneRouter.jsx)

### Explanation:

- demonstrates basic routing using `BrowserRouter`, `Routes`, and `Route`.
- Different components (`Home`, `About`) are rendered based on the URL path.

### Task 2: Navigation Bar using Link (Home, About, Contact)

[Nav Router](./routing/src/task_2/TaskTwoRouter.jsx)

### Explanation:

- extends routing by adding a navigation bar using the `Link` component.
- The navbar allows navigation between Home, About, and Contact pages without page reload.
- A single App and main file is used, while each task is organized in its own folder.
- Both task outputs are displayed together and separated using the `<hr />` tag.

---
