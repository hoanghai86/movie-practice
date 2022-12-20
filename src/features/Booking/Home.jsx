import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import HomeCarousel from "./components/HomeCarousel";
import MovieList from "./components/MovieList";
import ScheduleMovie from "./components/ScheduleMovie";
import {
  fetchBannerAction,
  fetchCinemaAction,
  fetchMoviesAction,
} from "./redux/action";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    //call API
    //set data store banne
    dispatch(fetchBannerAction);
    
    //set data store danh sách phim
    dispatch(fetchMoviesAction());
    
    //set data store danh sách hệ thống rạp
    dispatch(fetchCinemaAction);
  }, []); //mảng dependency để rỗng cho call 1 lần duy nhất

  return (
    <div>
      <HomeCarousel />
      <MovieList />
      <ScheduleMovie />
    </div>
  );
};

export default Home;
