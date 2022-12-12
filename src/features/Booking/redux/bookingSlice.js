import actions from "./type";
const initialState = {
  banners: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.SET_BANNERS:
      state.banners = payload;
      return { ...state };

    default:
      return state;
  }
};

export default reducer;
