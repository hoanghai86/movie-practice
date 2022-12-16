import Header from "components/Header";
import Booking from "features/Booking/Booking";
import MovieDetail from "features/Booking/Detail";
import Home from "features/Booking/Home";
import Login from "features/Login/Login";
import Signup from "features/Login/Signup";
import { BrowserRouter, Route, Routes } from "react-router-dom"; //sử dụng thư viện này để chuyển qua lại các components

function App() {
  return (
    // <div>
    //   <Home />
    //   <MovieDetail />
    //   <Booking />
    //   <Login />
    //   <Signup />
    // </div>

    <BrowserRouter>
      <Header />
      <Routes>
        {/* exact để lấy chính xác đường link */}
        <Route exact path="/" element={<Home />} />{" "}
        <Route path="/detail/:id" element={<MovieDetail />} /> {/* :id là tham số, là id của phim */}
        <Route path="/booking" element={<Booking />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
