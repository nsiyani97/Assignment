# Conditional Rendering

## THEORY EXERCISE

### 1. What is conditional rendering in React? How can you conditionally render elements in a React component?

- Conditional rendering in React means displaying different UI elements based on a condition.
- It allows the interface to change dynamically according to state, props, or user actions.
- React uses JavaScript conditions to decide what should be shown on the screen.
- Conditions are usually based on values like login status, user role, or data availability.
- This approach helps create flexible and interactive user interfaces.

### 2. Explain how if-else, ternary operators, and `&&` (logical AND) are used in JSX for conditional rendering.

- **If-else** logic is used when there are multiple conditions; the condition is checked first, and then JSX is returned based on the result.
- The **ternary operator** is written inline as `condition ? trueResult : falseResult` and is commonly used inside JSX for simple conditions.
- It allows rendering one element if the condition is true and another if it is false.
- The **logical AND (`&&`)** operator is used when something should render only if a condition is true.
- It is written as `condition && element`, where the element is rendered only when the condition evaluates to true.
- These methods help control what appears on the UI without reloading the page.

---

## LAB EXERCISE

### Task 1: Login / Logout Button

[LoginStatus component](./conditional-rendering/src/components/VotingStatus.jsx)

### Task 2: Voting Eligibility

[VotingStatus component](./conditional-rendering/src/components/VotingStatus.jsx)

## Explanation:

- Conditional rendering allows React components to show different outputs based on conditions.
- In **LoginStatus**, a ternary operator is used to switch between Login and Logout buttons.
- In **VotingStatus**, the logical `&&` operator checks age and displays the appropriate message.
- This approach improves UI control and makes React applications more dynamic and user-friendly.

---
