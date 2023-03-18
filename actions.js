const { BUG_ADDED, BUG_RESOLVED, BUG_REMOVED } = require("./actionType");

const actions = { BUG_ADDED, BUG_RESOLVED, BUG_REMOVED };

//Actions are just a pure functions that include action types/ actions we perform and payload or data to update our store
//let's think that our bug object has at least 3 properties
//bugX= {
//        id:0
//        description:"Bug 1"
//        isResolved:false
//      }
const bugAdded = (description) => ({
  type: actions.BUG_ADDED,
  payload: { description },
});

const bugResolved = (id) => ({
  type: actions.BUG_RESOLVED,
  payload: { id },
});

const bugRemoved = (id) => ({
  type: actions.BUG_REMOVED,
  payload: { id },
});

module.exports = {
  bugAdded,
  bugResolved,
  bugRemoved,
};
