# Lists and Keys

## THEORY EXERCISE

### 1. How do you render a list of items in React? Why is it important to use keys when rendering lists?

- In React, a list is rendered by looping over an array of data and returning UI elements for each item.
- This is commonly done using an array method like `map()`, written inline as `array.map(item => JSX)`, where React creates elements for each item.
- Rendering lists helps display dynamic and repeated data such as user lists or product items.
- **Keys** are important because they help React identify which items have changed, been added, or removed.
- Using keys improves performance and ensures React updates only the required elements instead of re-rendering the entire list.

### 2. What are keys in React, and what happens if you do not provide a unique key?

- Keys are special attributes used by React to uniquely identify elements in a list.
- They are written inline as `key={uniqueValue}` and are usually based on an id or unique identifier.
- Keys help React track elements efficiently during updates and re-rendering.
- If unique keys are not provided, React may show warnings and can cause incorrect UI updates.
- Missing or duplicate keys can lead to performance issues and unexpected rendering behavior.

---

## LAB EXERCISE

### Task 1: Render a List of Fruits using map()

[FruitsList component](./lists-keys/src/components/FruitsList.jsx)

### Task 2: Render a List of Users with Unique Keys

[UserList component](./lists-keys/src/components/UserList.jsx)

### Explanation:

- The `map()` function is used to loop through arrays and render JSX elements.
- The `key` attribute helps React track list items efficiently.
- In Task 1, index is used as a key for simple static data.
- In Task 2, a unique `id` is used as a key, which is the recommended approach.
- Proper keys improve performance and prevent rendering issues.

---
