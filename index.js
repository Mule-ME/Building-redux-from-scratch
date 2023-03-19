//this file is our main file to check our implementation
const { bugAdded, bugResolved, bugRemoved } = require("./actions");

const store = require("./store");

//subscribe to our store to log state changes
const unsubscribe = store.subscribe(() => {
  console.log("There is State changes");
});

//checking our state
console.log(store.getState(), 'Initially our state is "undefined"');

//Adding bug's (using dispatcher method from our store)
store.dispatcher(bugAdded("Add bug function is ot working"));
store.dispatcher(bugAdded("The UI is not rendered"));
store.dispatcher(bugAdded("Bug three"));
store.dispatcher(bugAdded("Bug four"));

//if we unsubscribe for our store we will not longer notified for our store change
unsubscribe();

//checking our state
console.log(store.getState(), "Adding bug's");

//Resolving bug's (using dispatcher method from our store)
store.dispatcher(bugResolved(1));
store.dispatcher(bugResolved(3));

//checking our state
console.log(store.getState(), "Resolving bug's with id:1 & id:3");

//Resolving bug's (using dispatcher method from our store)
store.dispatcher(bugRemoved(4));

//checking our state
console.log(store.getState(), "Removing bug's with id:4");
