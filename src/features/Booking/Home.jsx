import Header from "components/Header";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import HomeCarousel from "./components/HomeCarousel";
import { fetchBannerAction } from "./redux/action";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    //call API
    dispatch(fetchBannerAction);
  }, []); //mảng dependency để rỗng cho call 1 lần duy nhất

  return (
    <div>
      <Header />
      <HomeCarousel />
    </div>
  );
};

export default Home;
