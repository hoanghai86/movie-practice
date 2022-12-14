import actions from "./type";
import produce from "immer";

const initialState = {
  banners: [],
};

const reducer = (state = initialState, { type, payload }) => {
  // switch (type) {

  //   case actions.SET_BANNERS:
  //     state.banners = payload;
  //     return { ...state };

  //   default:
  //     return state;
  // }

  return produce(state, (draff) => {
    switch (type) {
      case actions.SET_BANNERS:
        draff.banners = payload;
        break;

      default:
        break;
    }
  });
};

export default reducer;
