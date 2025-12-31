# React – JSON-server and Firebase Real Time Database

## THEORY EXERCISE

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

## LAB EXERCISE

### Task 1 – Fetch Data & Display in Table

[Public API Fetch](./real-time-database/src/task_1/UserTable.jsx)

### Explanation:

- This task fetches user data from a public REST API using `fetch()` inside the `useEffect()` hook.
- The received JSON data is stored in state and rendered dynamically in a table format.

---

### Task 2 – Firebase CRUD & Google Authentication

[Firestore](./real-time-database/src/task_2/firebase.js)
[Firebase Auth](./real-time-database/src/task_2/FirebaseAuth.jsx)

### Explanation:

- This task uses Firebase Authentication to implement Google login functionality.
- Users can sign in using their Google account, and authentication state is managed using React state.

---

### Task 3 – Loading State & Error Handling

[Error spinner](./real-time-database/src/task_3/LoadingAndError.jsx)

### Explanation:

- This task demonstrates proper API handling by managing loading and error states.
- A loading message is shown while data is fetched, and an error message is displayed if the API request fails.

---
