import actions from "./type";
import produce from "immer";

const initialState = {
  banners: [],
  movies: {},
  movieDetail: null,
  movieDetailSchedule: null,
  cinemas: [],
};

const reducer = (state = initialState, { type, payload }) => {
  // switch (type) {

  //   case actions.SET_BANNERS:
  //     state.banners = payload;
  //     return { ...state };

  //   default:
  //     return state;
  // }

  //bình thường chúng ta chỉnh sửa cái state này và return về bảng copy {...state}, giờ chúng ta dùng hàm produce, bỏ cái state vào trong cái produce, tham số lúc này là bảng nháp draff, khi chỉnh bản nháp thì sẽ tự cập nhật cái state gốc cho mình để ra được cái state mới, và mình return cái state mới cho hàm produce
  return produce(state, (draff) => {
    switch (type) {
      case actions.SET_BANNERS:
        draff.banners = payload;
        break;
      case actions.SET_MOVIES:
        draff.movies = payload;
        break;
      case actions.SET_MOVIE_DETAIL:
        draff.movieDetail = payload;
        break;
      case actions.SET_MOVIE_DETAIL_SCHEDULE:
        draff.movieDetailSchedule = payload;
        break;
      case actions.SET_CINEMAS:
        draff.cinemas = payload;
        break;

      default:
        break;
    }
  });
};

export default reducer;
