# Introduction to React.js

### 1. What is React.js? How is it different from other JavaScript frameworks and libraries?

- React.js is a JavaScript library developed by Facebook for building user interfaces, especially single-page applications.
- It focuses mainly on the **view layer** of an application rather than providing a complete framework.
- React uses a component-based approach, where the UI is divided into small, reusable parts.
- Unlike traditional frameworks, React allows developers to manage UI efficiently using state and props, making applications faster and more scalable.

### 2. Explain the core principles of React such as the Virtual DOM and component-based architecture.

- The **Virtual DOM** is a lightweight copy of the real DOM that React uses to track changes efficiently.
- When data changes, React updates the Virtual DOM first and then applies only the necessary changes to the real DOM.
- This process improves performance by reducing direct manipulation of the browser DOM.
- **Component-based architecture** means the UI is broken into independent, reusable components.
- Each component manages its own logic and rendering, making the application easier to develop and maintain.

### 3. What are the advantages of using React.js in web development?

- React improves performance through efficient DOM updates using the Virtual DOM.
- It promotes code reusability through components, reducing development time.
- React applications are easier to maintain due to clear separation of concerns.
- It has a strong ecosystem, community support, and is widely used in modern web development.
- React works well with other libraries and frameworks, making it flexible and adaptable.

---

# JSX (JavaScript XML)

### 1. What is JSX in React.js? Why is it used?

- JSX (JavaScript XML) is a syntax extension used in React to write HTML-like code inside JavaScript.
- It makes the structure of user interfaces easier to read and understand.
- JSX allows developers to combine markup and logic in a single file.
- It helps React create elements more efficiently and improves code readability.

### 2. How is JSX different from regular JavaScript? Can you write JavaScript inside JSX?

- JSX looks similar to HTML but is actually written inside JavaScript.
- Unlike regular JavaScript, JSX allows writing UI structure in a declarative way.
- JavaScript expressions can be written inside JSX using curly braces.
- This feature allows dynamic content rendering within the UI.

### 3. Discuss the importance of using curly braces `{}` in JSX expressions.

- Curly braces `{}` are used in JSX to embed JavaScript expressions.
- They allow values, variables, and expressions to be evaluated and displayed dynamically.
- Curly braces help connect component logic with UI output.
- Without curly braces, JSX would treat values as plain text instead of dynamic data.

---

# Components (Functional & Class Components)

### 1. What are components in React? Explain the difference between functional components and class components.

- Components are the building blocks of a React application used to create reusable and independent UI parts.
- Each component represents a part of the user interface and controls its own structure and behavior.
- **Functional components** are simple JavaScript functions that return UI and are mainly used with React Hooks.
- **Class components** are ES6 classes that extend React.Component and can manage state using lifecycle methods.
- Functional components are simpler and preferred in modern React, while class components are mostly used in older codebases.

### 2. How do you pass data to a component using props?

- Data is passed to a component using **props**, which are short for properties.
- Props are passed from a parent component to a child component as attributes.
- The syntax is written as `ComponentName propName={value}`, where the parent sends data.
- Inside the component, the value is accessed using `props.propName`.
- Props are read-only, meaning a component cannot modify the data it receives.

### 3. What is the role of render() in class components?

- The `render()` method is responsible for displaying the UI of a class component.
- It returns JSX that defines what should appear on the screen.
- Whenever state or props change, React automatically calls the render() method again.
- This ensures the UI always stays updated with the latest data.

---

# Props and State

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

# Handling Events in React

### 1. How are events handled in React compared to vanilla JavaScript? Explain the concept of synthetic events.

- In vanilla JavaScript, events are handled by directly attaching event listeners to DOM elements.
- In React, events are handled using **camelCase** event names and are written directly inside JSX.
- React uses **Synthetic Events**, which are wrapper objects around native browser events.
- Synthetic events provide a consistent event system across different browsers.
- This abstraction improves performance and ensures predictable behavior in React applications.

### 2. What are some common event handlers in React.js? Provide examples of onClick, onChange, and onSubmit.

- React provides built-in event handlers to manage user interactions.
- `onClick` is used to handle mouse click events.
- `onChange` is used to handle changes in input fields.
- `onSubmit` is used to handle form submission events.

Examples:

```jsx
<button onClick={handleClick}>Click Me</button>

<input type="text" onChange={handleChange} />

<form onSubmit={handleSubmit}>
  <button type="submit">Submit</button>
</form>
```

- These handlers connect user actions to component logic.
- They help make React components interactive and dynamic.

### 3. Why do you need to bind event handlers in class components?

- In class components, event handler methods do not automatically bind to the class instance.
- Without binding, the `this` keyword may be undefined inside the handler.
- Binding ensures that `this` correctly refers to the component instance.
- It allows access to component state and props inside event handler methods.
- Binding is necessary for proper event handling in class-based components.

---

# Conditional Rendering

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

# Lists and Keys

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

# Forms in React

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

# Lifecycle Methods (Class Components)

### 1. What are lifecycle methods in React class components? Describe the phases of a component’s lifecycle.

- Lifecycle methods are special methods in React class components that run at specific stages of a component’s existence.
- They allow developers to control what happens when a component is created, updated, or removed from the UI.
- The **mounting phase** occurs when a component is created and inserted into the DOM.
- The **updating phase** happens when a component’s state or props change and the UI needs to re-render.
- The **unmounting phase** occurs when a component is removed from the DOM.
- These phases help manage data fetching, UI updates, and cleanup tasks efficiently.

### 2. Explain the purpose of componentDidMount(), componentDidUpdate(), and componentWillUnmount().

- `componentDidMount()` is called after the component is rendered for the first time.
- It is mainly used for tasks like fetching data from APIs or setting up subscriptions.
- `componentDidUpdate()` is called after the component updates due to changes in state or props.
- It is used to respond to updates, such as performing actions when data changes.
- `componentWillUnmount()` is called just before the component is removed from the DOM.
- It is used to clean up resources like timers, event listeners, or subscriptions to prevent memory leaks.

---

# Hooks

### 1. What are React Hooks? How do `useState()` and `useEffect()` hooks work in functional components?

- React Hooks are special functions that allow functional components to use state and other React features.
- Hooks remove the need for class components to manage state and lifecycle logic.
- `useState()` is used to store and update component data; it is written as `const [state, setState] = useState(initialValue)` where `state` holds the value and `setState` updates it.
- When `setState` is called, React re-renders the component with updated data.
- `useEffect()` is used to perform side effects like data fetching or DOM updates; it is written as `useEffect(() => { logic }, [dependencies])`.
- React runs the effect when the component renders or when dependency values change.

---

### 2. What problems did Hooks solve in React development? Why are Hooks considered important?

- Hooks solved the complexity of managing state and lifecycle methods in class components.
- They removed the need for `this` keyword and binding issues.
- Hooks allow logic reuse through custom hooks instead of complex patterns like HOCs.
- They make components smaller, cleaner, and easier to understand.
- Hooks encourage a consistent and modern way of writing React applications.

---

### 3. What is `useReducer`? How do we use it in a React app?

- `useReducer` is a hook used for managing complex state logic using a reducer function and actions.
- It is written as `const [state, dispatch] = useReducer(reducer, initialState)`.
- The `reducer` is a function that decides how state changes based on an action.
- `dispatch(action)` is used to trigger state updates.
- It is useful when state updates depend on previous state or involve multiple actions.

---

### 4. What is the purpose of `useCallback` and `useMemo` hooks?

- `useCallback` is used to **memoize functions** so they are not recreated on every render.
- It is written as `useCallback(() => functionLogic, [dependencies])`.
- `useMemo` is used to **memoize computed values** to avoid expensive recalculations.
- It is written as `useMemo(() => computedValue, [dependencies])`.
- Both hooks improve performance by preventing unnecessary re-renders.

---

### 5. What is the difference between `useCallback` and `useMemo` hooks?

- `useCallback` returns a **memoized function**.
- `useMemo` returns a **memoized value**.
- `useCallback` is mainly used when passing functions as props.
- `useMemo` is mainly used for heavy calculations.
- Both depend on dependency arrays to control when updates occur.

---

### 6. What is `useRef`? How does it work in a React app?

- `useRef` is a hook used to store mutable values that do not cause re-renders.
- It is written as `const refName = useRef(initialValue)`.
- The value is accessed using `refName.current`.
- It is commonly used to access DOM elements directly or store previous values.
- Updating `useRef` does not trigger component re-rendering, making it useful for performance optimization.

---

# Routing in React (React Router)

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

# React – JSON-server and Firebase Real Time Database

### 1. What do you mean by RESTful web services?

- RESTful web services follow the **REST (Representational State Transfer)** architectural style.
- They allow client and server to communicate using standard HTTP methods.
- Data is usually exchanged in JSON format, which is lightweight and easy to parse.
- Common REST methods include GET (read), POST (create), PUT/PATCH (update), and DELETE (remove).
- RESTful services are stateless, meaning each request contains all required information.

---

### 2. What is Json-Server? How do we use it in React?

- Json-Server is a tool that creates a **fake REST API** using a simple JSON file.
- It is mainly used for testing and frontend development without a real backend.
- In React, Json-Server is used to perform CRUD operations during development.
- The React app sends HTTP requests to the Json-Server endpoints.
- This helps developers build and test API integration quickly.

---

### 3. How do you fetch data from a Json-server API in React? Explain the role of `fetch()` or `axios()`.

- Data is fetched in React by making HTTP requests to the API URL.
- This is usually done inside a lifecycle method or a hook like `useEffect`.
- The syntax is written as `fetch(apiUrl)` or `axios.get(apiUrl)` to request data.
- `fetch()` is a built-in browser function that returns a promise and needs manual JSON conversion.
- `axios()` is a library that automatically converts responses to JSON and handles errors better.
- Both are used to retrieve, send, update, or delete data from APIs.

---

### 4. What is Firebase? What features does Firebase offer?

- Firebase is a backend-as-a-service (BaaS) platform developed by Google.
- It provides backend functionality without managing servers.
- Firebase offers features like Realtime Database, Firestore, Authentication, and Hosting.
- It supports user authentication using email, phone, and social logins.
- Firebase also provides real-time data synchronization across devices.

---

### 5. Discuss the importance of handling errors and loading states when working with APIs in React.

- Handling loading states improves user experience by showing feedback while data is being fetched.
- It prevents blank screens and informs users that data is loading.
- Error handling helps manage failed API requests gracefully.
- It allows displaying proper error messages instead of breaking the application.
- Together, loading and error handling make React applications more reliable and user-friendly.

---

# Context API

### 1. What is the Context API in React? How is it used to manage global state across multiple components?

- The Context API is a feature in React used to share data across multiple components without passing props manually at every level.
- It helps solve the problem of **prop drilling**, where data has to be passed through many intermediate components.
- Context is commonly used for global data such as themes, user authentication, or language settings.
- A context provides a central place to store data that many components need access to.
- Any component inside the context provider can directly access the shared data.

---

### 2. Explain how createContext() and useContext() are used in React for sharing state.

- `createContext()` is used to create a new context object that will hold shared data.
- It defines a **Provider**, which supplies the data to all child components.
- The Provider is written inline as `Context.Provider value={sharedData}`, where `value` contains the data to share.
- `useContext()` is used inside a functional component to access the shared data.
- It is written as `useContext(ContextName)`, which tells React to read the nearest Provider’s value.
- When the context value changes, all components using that context automatically re-render.
- This approach allows clean, efficient, and centralized state sharing across the app.

---

# State Management (Redux, Redux-Toolkit or Recoil)

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
