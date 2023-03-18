const createStore = require("./CreateStore/index");
const bugReducer = require("./reducer");

//Creating our stor using our custom create store function by passing our bug reducer as a parameter for our createStore function
const store = createStore(bugReducer);

module.exports = store;
