import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import HomeCarousel from "./components/HomeCarousel";
import MovieList from "./components/MovieList";
import { fetchBannerAction, fetchMoviesAction } from "./redux/action";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    //call API
    dispatch(fetchBannerAction);
    dispatch(fetchMoviesAction());
  }, []); //mảng dependency để rỗng cho call 1 lần duy nhất

  return (
    <div>

      <HomeCarousel />
      <MovieList />
    </div>
  );
};

export default Home;
