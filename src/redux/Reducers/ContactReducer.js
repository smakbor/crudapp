const initialState = {
  user: [],
};
const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER":
      return {
        ...state,
        user: (state.user = action.payload),
      };
    case "POST_USER":
      return {
        ...state,
        user: [...state.user, action.payload],
      };
    case "EDIT_USER":
      // const updateState = state.filter((contact) => contact.id === action.payload.id);
      const index = state.user.findIndex((contact) => contact.id === action.payload.id);
      const updatedUsers = [...state.user.slice(0, index), action.payload, ...state.user.slice(index + 1)];
      return {
        ...state,
        user: updatedUsers,
      };
    case "DELETE_CONTACT":
       
      const filterContact = state.user.filter((contact) => contact.id !== action.payload.id);
      return {
        ...state,
        user: (state.user = filterContact),
      };

    default:
      return state;
  }
};
export default contactReducer;
