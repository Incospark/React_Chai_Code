 # Redux Toolkit – Complete Summary Notes (English)

---

## 🔹 Redux vs React Redux vs Redux Toolkit

* **Redux** → Core library (handles state logic)
* **React Redux** → Connects Redux with React (acts as a bridge)
* **Redux Toolkit (RTK)** → Simplified version of Redux

### Key Benefit of RTK:

* No need to manually follow rules like *"never mutate state"*
* Uses Immer internally → allows direct state updates

---

## 🔹 Where to Start?

👉 Always start by creating a **Store**

* Usually: **One store per application**
* Called: **Single Source of Truth**

⚠️ Interview Tip:

* Always say → *One store per app*

---

## 🔹 Creating Store (configureStore)

```js
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {}
})
```

👉 Store must know all reducers

---

## 🔹 What is a Slice?

* A **slice** represents a feature (like todo, auth, etc.)
* Created using `createSlice()`

---

## 🔹 Slice Requires 3 Things

1. **name** → e.g. "todo"
2. **initialState** → default state (array/object)
3. **reducers** → functions to update state

---

## 🔹 Example Structure

```js
import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload)
    }
  }
})
```

---

## 🔹 Reducer Basics

Each reducer gets:

* `state` → current state
* `action` → contains payload

👉 Important:

* `action.payload` = data sent from component

---

## 🔹 Old Redux vs Redux Toolkit

### ❌ Old Redux:

```js
return [...state, newTodo]
```

### ✅ Redux Toolkit:

```js
state.push(newTodo)
```

---

## 🔹 Exporting

You must export:

1. **Actions (reducers)**
2. **Main reducer**

```js
export const { addTodo, removeTodo } = todoSlice.actions
export default todoSlice.reducer
```

---

## 🔹 Connecting Slice to Store

```js
import todoReducer from './todoSlice'

const store = configureStore({
  reducer: {
    todo: todoReducer
  }
})
```

---

## 🔹 Using in Components

### 1. Sending Data → useDispatch

```js
import { useDispatch } from 'react-redux'

const dispatch = useDispatch()

dispatch(addTodo(data))
```

👉 Dispatch = sending data (like courier 📦)

---

### 2. Getting Data → useSelector

```js
import { useSelector } from 'react-redux'

const todos = useSelector((state) => state.todo)
```

👉 Select only required data from store

---

## 🔹 After Getting Data

* Now it's pure JavaScript
* Use:

  * `.map()`
  * loops
  * rendering logic

---

## 🔹 Remove Todo Example

```js
dispatch(removeTodo(id))
```

---

## 🔥 Core Concept (Most Important)

👉 Redux boils down to just 2 things:

1. **dispatch() → send data**
2. **selector() → get data**

बाकी सब setup इन्हीं को समझने के लिए है.

---

## 🔁 Final Flow

1. Create Store
2. Create Slice
3. Add Reducer to Store
4. Dispatch Actions (send data)
5. Select State (get data)
6. Render using JavaScript

---

## 🚀 Done!

You now understand Redux Toolkit at a strong foundational level.
