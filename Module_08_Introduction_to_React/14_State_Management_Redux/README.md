# State Management (Redux, Redux-Toolkit or Recoil)

## THEORY EXERCISE

### 1. What is Redux, and why is it used in React applications? Explain the core concepts of actions, reducers, and the store.

- Redux is a state management library used to manage **global state** in large React applications.
- It helps keep application state predictable and consistent across multiple components.
- Redux follows a **single source of truth**, where all global state is stored in one place.
- **Actions** are plain objects that describe what should happen in the application.
- They are written inline as `{ type: "ACTION_NAME", payload: data }` and are dispatched to request state changes.
- **Reducers** are pure functions that decide how the state should change based on the received action.
- They take the current state and action as input and return a new state.
- The **store** holds the entire application state and manages data flow between actions and reducers.
- Components read data from the store and trigger updates by dispatching actions.

---

### 2. How does Recoil simplify state management in React compared to Redux?

- Recoil simplifies state management by providing a **more React-friendly and minimal approach** without requiring complex boilerplate code.
- Recoil is a state management library designed specifically for React.
- It allows state to be broken into small pieces called **atoms** instead of a single global store.
- Components can directly subscribe to only the state they need.
- Recoil reduces boilerplate code compared to Redux.
- It does not require actions or reducers, making it easier to learn and use.
- Recoil integrates naturally with React Hooks, providing a simpler and more flexible state management approach.

---

## LAB EXERCISE

## Task 1: Redux Counter Application

[Redux Counter](./state-management-redux/src/task_1_redux_counter/Counter.jsx)

## Explanation:

- In this task, I created a **counter application using Redux** for state management.
- The counter value is stored in the **Redux store** as a global state.
- In the counter component, I used `useSelector` to get the current counter value from the store and `useDispatch` to send actions.
- When I click the **Increment** button, an `INCREMENT` action is dispatched, and when I click the **Decrement** button, a `DECREMENT` action is dispatched.
- The reducer receives the action and updates the counter value accordingly.
- After the state is updated in the store, the component automatically re-renders and shows the updated value.
- This task helped me understand how **Redux manages global state using actions and reducers**.

---

## Task 2: Todo List using Recoil

[Todo List](./state-management-redux/src/task_2_recoil_todo/TodoApp.jsx)

## Explanation:

- In this task, I created a **Todo List application using Recoil** for state management.
- I used a **Recoil atom** to store the list of todos globally.
- In the Todo component, I used `useRecoilState` to read and update the todo list.
- When the user enters text and clicks the **Add** button, a new todo item is added to the atom state.
- When the user clicks on a todo item, it is marked as **completed or uncompleted**.
- When the delete button is clicked, the selected todo item is removed from the list.
- All state updates are handled directly through the atom, and the UI updates automatically.
- This task helped me understand how **Recoil provides simple and easy global state management without reducers or actions**.

---

## Task 3: CRUD Application using Redux Toolkit

[RTK CRUD](./state-management-redux/src/task_3_rtk_crud/CrudApp.jsx)

## Explanation:

- In this task, I created a **CRUD application using Redux Toolkit**.
- I used a **Redux slice** to manage the application state.
- The slice contains the initial state and reducer functions for **add, delete, and update** operations.
- When the user enters data and clicks the **Add** button, a new item is added to the Redux store.
- When the **Delete** button is clicked, the selected item is removed from the store.
- When the **Edit** button is clicked, the selected item’s data is displayed in the input field.
- After modifying the data, clicking the **Update** button updates the selected item in the Redux store.
- Redux Toolkit uses Immer internally, which allows writing update logic in a simple and readable way.
- After each operation, the UI automatically updates to reflect the latest data.
- This task helped me understand how **Redux Toolkit simplifies Redux and is useful for building scalable applications**.

---

## Overall Application Explanation

- In this project, I used a **single React application** to implement all tasks.
- Each task is created in a **separate folder** to maintain proper structure.
- Redux Provider and Recoil Root are added at the top level of the application.
- All task components are rendered in `App.js`, and each task output is separated using `<hr />`.
- This approach helped me understand **different state management tools and their real-world usage**.

---
