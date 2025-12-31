# Forms in React

## THEORY EXERCISE

### 1. How do you handle forms in React? Explain the concept of controlled components.

- Forms in React are handled by connecting form inputs to the component’s state.
- In a **controlled component**, the form input value is controlled by React state.
- The input value is written inline as `value={stateVariable}`, and changes are handled using an event handler like `onChange={handler}`.
- When the user types, the event updates the state, and React re-renders the input with the new value.
- This approach keeps the form data, UI, and logic fully synchronized and predictable.

### 2. What is the difference between controlled and uncontrolled components in React?

- **Controlled components** rely on React state to manage form input values.
- Their values are updated through state changes, giving full control over validation and behavior.
- **Uncontrolled components** store their data directly in the DOM instead of React state.
- They are accessed using references rather than state updates.
- Controlled components are preferred in most React applications because they provide better control, validation, and consistency.

---

## LAB EXERCISE:

## Task 1: Form Component (Controlled Form)

[Form Component](./form/src/components/Form.jsx)

## Explanation:

demonstrates a controlled form where input values are managed using React state.

## Task 2: Email Validation

[Email Validation](./form/src/components/validation.js)

## Explanation:

separates email validation logic into a dedicated file, improving code reusability and maintaining clean component structure.

---
