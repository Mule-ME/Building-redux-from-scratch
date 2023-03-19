const createStore = require("./CreateStore/index");
const bugReducer = require("./reducer");

let preloadedState;

//let's assume we have a todo's on our local storage or it can be from server
const persistedTodosString = localStorage.getItem("todos");

if (persistedTodosString) {
  preloadedState = {
    todos: JSON.parse(persistedTodosString),
  };
}

//Creating our stor using our custom create store function by passing our bug reducer as a parameter for our createStore function
const store = createStore(bugReducer, preloadedState);

module.exports = store;
