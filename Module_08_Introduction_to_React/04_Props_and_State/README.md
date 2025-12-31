# Props and State

## THEORY EXERCISE

### 1. What are props in React.js? How are props different from state?

- **Props** (properties) are used to pass data from a parent component to a child component.
- Props are **read-only**, meaning a component cannot change the data it receives through props.
- **State** is used to store data that belongs to a component and can change over time.
- Props are used for **data communication**, while state is used for **data management** inside a component.
- Changes in state can re-render a component, whereas props are controlled by the parent component.

### 2. Explain the concept of state in React and how it is used to manage component data.

- State is an internal data storage of a component that controls its behavior and UI.
- It is used when data needs to change based on user interaction or events.
- State allows components to be dynamic and interactive.
- When state changes, React automatically updates the UI to reflect the new data.
- State is essential for handling forms, counters, toggles, and dynamic content.

### 3. Why is `this.setState()` used in class components, and how does it work?

- `this.setState()` is used to update the state of a class component.
- The syntax is written as `this.setState({ key: newValue })`, where the key represents the state property to update.
- React does not allow direct modification of state, so `this.setState()` ensures updates happen correctly.
- When `setState()` is called, React schedules a re-render of the component.
- This process ensures the UI stays in sync with the updated state data.

---

## LAB EXERCISE

### Task 1: UserCard component

[UserCard component](./props-and-state/src/components/UserCard.jsx)

### Task 2: Counter component

[Counter component](./props-and-state/src/components/Counter.jsx)

---

## Explanation

- In this lab, **UserCard** demonstrates the use of **props** to receive and display external data.
- The **Counter** component demonstrates **state management** using the `useState` hook, where clicking the button updates the count and re-renders the component.
- This shows the practical difference between props (immutable data) and state (mutable data).

---
