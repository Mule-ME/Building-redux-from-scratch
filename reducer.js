const { BUG_ADDED, BUG_RESOLVED, BUG_REMOVED } = require("./actionType");

const actions = { BUG_ADDED, BUG_RESOLVED, BUG_REMOVED };

let lastId = 0;

//initial state of our store state
const initialState = [];

const budReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.BUG_ADDED:
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false,
        },
      ];

    case actions.BUG_RESOLVED:
      return state.map((bug) =>
        bug.id !== action.payload.id
          ? bug
          : {
              ...bug,
              resolved: true,
            }
      );
    case actions.BUG_REMOVED:
      return state.filter((bug) => bug.id !== action.payload.id);
    default:
      return state;
  }
};

module.exports = budReducer;
