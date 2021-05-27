const INCREMENT = "counter/incremnet";

export const increment = () => {
  return {
    type: "counter/increment",
  };
};

const initialState = { value: 0 };

function counterReducer(state = initialState, action) {
  if (action.type === "counter/increment") {
    return {
      ...state,
      value: state.value + 1,
    };
  }
  return state;
}

export default counterReducer;
