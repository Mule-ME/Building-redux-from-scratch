//Here we have to implement redux's createStore built in function on  our self with minimal scenario's

function createStore(reducer) {
  //as we know redux's createStore() function accept reducer as a parameter to create a store

  //defining store state but we don't have to allow to access it directly because if we do that we make our state mutable directly from the store
  let state;

  //Listeners is just an array of callback functions that fired if there is a state change while we dispatch actions, and if we subscribe to our store's
  const listeners = [];

  //from actual redux create store method we implement only the three necessary methods those are
  //getState()
  //dispatcher() &
  //subscribe()

  //Implementation of get state is very simple cause as we all know it do only one thing,
  // => giving access to our state
  function getState() {
    return state;
  }

  //to implement redux's dispatcher method we have to know what it do for us
  //It will dispatch actions from our UI to our Reducer through store and update our state based on dispatched action
  //So that dispatcher method accept actions as a parameter
  function dispatcher(action) {
    //Our app state on the store will update based on actions we dispatched through our reducer
    state = reducer(state, action);

    //if we subscribed for our store, for every dispatched action we loop through our listener array and call tha callback from the array of listeners
    for (let i = 0; i < listeners.length; i++) listeners[i]();
  }

  //Subscriber's in redux are just a pure functions that accept listener's for each dispatched actions in our UI and give notice(log) for our UI.
  function subscribe(listener) {
    //Subscribe method just accept a listeners w/h are a callback functions in witch we can do what ever we do with them mostly to log our state change &&
    //It will just push it to listener's array for every action's
    listeners.push(listener);
  }

  //create store will return an object which include the above methods to access through our store
  return {
    getState,
    dispatcher,
    subscribe,
  };
}

module.exports = createStore;
