import { createSlice, nanoid } from '@reduxjs/toolkit';

// !nanoid is a library for generating unique IDs, which is useful for creating new todo items.

const initialState = {
    todos: [
        {
            id: 1,
            text: "Learn React",
        }
    ]
}

// function sayHello() {
//     console.log("Hello");
// }

export const todoSlice = createSlice({
    name: 'todo',
    initialState,

    // ~ Reducers mai aate hai propertis aur functions, jisme hum state ko update karte hai. Yaha hum addTodo aur toggleTodo functions banayenge.
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
            id: nanoid(),
            text: action.payload,
            // ? payload khud mai ek object hota hai, jisme hum data pass karte hai, jise hum action ke through access kar sakte hai.
        }
            state.todos.push(newTodo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        }
    },
    // & ab yaha pr hi change aata hai context api mai bhe hum ese hi functions ka decleration kr rakhe the but uski defination nahi likh rahe the, but yaha pr hum dono ko ek sath likh rahe hai, jisme hum state ko update karenge.
})

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
