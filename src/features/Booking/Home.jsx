import Header from "components/Header";
import React from "react";
import HomeCarousel from "./components/HomeCarousel";
import { useEffect } from "react"; //hook của thư viện react
import { useDispatch } from "react-redux"; //hook của thư viện react-redux
import { fetchBannersAction } from "features/Login/redux/action";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    //call api
    dispatch(fetchBannersAction);
  }, []);
  return (
    <div>
      <Header />
      <HomeCarousel />
    </div>
  );
};

export default Home;
