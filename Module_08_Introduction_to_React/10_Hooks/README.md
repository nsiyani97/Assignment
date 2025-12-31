# Hooks

## THEORY EXERCISE

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

## LAB EXERCISE – React Hooks

### Task 1 – Counter using useState:

[Counter component](./hooks-app/src/components/Counter.jsx)

### Explanation:

- When the app loads, the Counter component is rendered first. It initializes a counter value using the `useState` hook.
- Each time the user clicks the increment or decrement button, the state value changes.
- React detects this state change and re-renders only the Counter component with the updated value, without affecting other components.

### Task 2 – Data Fetching using useEffect:

[FetchData component](./hooks-app/src/components/FetchData.jsx)

### Explanation:

- After the Counter, the FetchData component is rendered.
- When this component is mounted into the DOM, the `useEffect` hook runs automatically.
- It sends a request to the API, receives the response, and stores the data in state.
- Once the state is updated, the component re-renders and displays the fetched data on the screen.

### Task 3 – Global State using Redux (useSelector & useDispatch):

[redux store](./hooks-app/src/redux/store.js)
[ReduxCounter component](./hooks-app/src/components/ReduxCounter.jsx)

### Explanation:

- The ReduxCounter component works with a global Redux store that is provided to the entire app using the `Provider` in the main file.
- The component reads the current counter value from the store using `useSelector`.
- When the user clicks a button, `useDispatch` sends an action to the reducer, which updates the global state.
- The updated value is then reflected in the UI.

### Task 4 – Preventing Re-renders using useRef:

[RefExample component](./hooks-app/src/components/RefExample.jsx)

### Explanation:

- The RefExample component demonstrates how `useRef` works inside the app.
- A ref variable is used to store data that persists between renders but does not trigger re-rendering.
- Even when the component updates due to state changes, the ref value remains stable, showing how `useRef` helps optimize performance.

---
