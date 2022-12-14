// import axios from "axios";
import requester from "app/api";
import { apiPath } from "app/apiPath";
import actions from "./type";

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
