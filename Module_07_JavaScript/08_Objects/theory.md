# Objects

## THEORY ASSIGNMENT

### 1. What is an object in JavaScript? How are objects different from arrays?

- An object in JavaScript is a collection of related data stored as **key–value pairs**.
- It is used to represent real-world entities such as a user, car, or product with properties and values.
- Objects store data with meaningful names (keys), making the data more readable and structured.
- Arrays store data in an ordered list using numeric indexes, while objects store data using named properties.
- Arrays are best for lists of items, whereas objects are better for structured data with different attributes.

### 2. Explain how to access and update object properties using dot notation and bracket notation.

- Object properties can be accessed using **dot notation** written as `objectName.propertyName`, where the property name is fixed and directly accessed.
- In dot notation, JavaScript looks inside the object and returns the value linked to that property.
- Bracket notation is written as `objectName["propertyName"]` and is used when the property name is dynamic or stored as a string.
- JavaScript evaluates the string inside the brackets and then accesses the matching property.
- To update a property, a new value is assigned using `objectName.propertyName = newValue` or `objectName["propertyName"] = newValue`.
- When a new value is assigned, the old value of that property is replaced with the updated one.
- Bracket notation is more flexible, while dot notation is simpler and more readable.

---

## Lab Assignment

### Task: Create and manipulate a `car` object

[car object program](./Lab/car-object.html)

### Explanation:

In this program, a JavaScript object `car` is created using curly braces `{}` with properties like `brand`, `model`, and `year`.
Dot notation is used to access and update properties, and a new property `color` is added dynamically.
The final object is displayed in the browser console using `console.log()`.

---
