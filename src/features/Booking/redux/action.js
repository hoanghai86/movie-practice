// import axios from "axios";
import requester from "app/api";
import { apiPath } from "app/apiPath";
import actions from "./type";

//call API lấy danh sách banner
export const fetchBannerAction = async (next) => {
  try {
    // const res = await axios({
    //   method: "GET",
    //   url: process.env.REACT_APP_API_URL + "/api/QuanLyPhim/LayDanhSachBanner",
    //   headers: {
    //     TokenCybersoft:
    //       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzNyIsIkhldEhhblN0cmluZyI6IjIzLzA1LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY4NDgwMDAwMDAwMCIsIm5iZiI6MTY1NzIxMzIwMCwiZXhwIjoxNjg0OTQ3NjAwfQ.uVmhasF9oy0mXFYvSl8tBIUY7ZRmZ-U0hLsBB75mkn8",
    //   },
    // });

    const res = await requester({
      method: "GET",
      url: apiPath.BANNERS,
    });

    next({
      type: actions.SET_BANNERS,
      payload: res.data.content,
    });
  } catch (error) {
    console.log(error);
  }
};

//call API lấy danh sách phim
export const fetchMoviesAction = (page = 1) => {
  return async (next) => {
    try {
      const res = await requester({
        method: "GET",
        url: apiPath.MOVIES,
        params: {
          maNhom: "GP10",
          soTrang: page,
          soPhanTuTrenTrang: 4,
        },
      });
      next({
        type: actions.SET_MOVIES,
        payload: res.data.content,
      });
    } catch (error) {}
  };
};

//call API lấy thông tin phim
export const fetchMoviesDetailAction = (id) => {
  return async (next) => {
    try {
      const res = await requester({
        method: "GET",
        url: apiPath.MOVIE_DETAIL,
        params: {
          MaPhim: id,
        },
      });
      next({
        type: actions.SET_MOVIE_DETAIL,
        payload: res.data.content,
      });
    } catch (error) {}
  };
};

//call API lấy lịch chiếu của 1 phim
export const fetchMoviesDetailScheduleAction = (id) => {
  return async (next) => {
    try {
      const res = await requester({
        method: "GET",
        url: apiPath.MOVIE_DETAIL_SCHEDULE,
        params: {
          MaPhim: id,
        },
      });
      next({
        type: actions.SET_MOVIE_DETAIL_SCHEDULE,
        payload: res.data.content,
      });
    } catch (error) {}
  };
};
