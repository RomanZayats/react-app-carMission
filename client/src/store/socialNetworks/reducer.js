import { LOAD_DATA, ADD_NEW_ITEM, UPDATE_ITEM } from "./actionTypes";

const initialState = {
  data: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DATA:
      return { ...state, data: action.payload };
    case ADD_NEW_ITEM:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case UPDATE_ITEM:
      return {...state, data: action.payload,};
    default:
      return state;
  }
};

export default reducer;
