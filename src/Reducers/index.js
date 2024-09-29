const initialState = {
    counter: 0//initial state of counter is set to zero
  };
  //The reducer has two actions, "INCREMENT" and "DECREMENT", 
  //which respectively increase or decrease the counter value. 
  //If the action type is not recognized, the current state of the counter is returned.
  const counterReducer = (state = initialState, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { ...state, counter: state.counter + 1 };
      case "DECREMENT":
        return { ...state, counter: state.counter - 1 };
      default:
        return state;
    }
  };
  
  export default counterReducer;