import { Col, Row } from "antd";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"; //thư viện bóc ra các tham số từ component MovieList truyền qua
import { fetchMoviesDetailAction } from "./redux/action";

const MovieDetail = () => {
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const movieId = params.id; //params là 1 cái list tham số, nên ta chỉ cần lấy đúng cái id phim ra, tạo cho nó 1 biến hứng
    dispatch(fetchMoviesDetailAction(movieId));
  }, [params]);

  const movieDetail = useSelector((state) => state.booking.movieDetail);
  console.log(movieDetail);

  return (
    movieDetail && (
      <div className="container mx-auto pt-10">
        <h1 className="text-center text-5xl font-normal">Chi tiết phim</h1>
        <Row gutter={[30,30]}>
          <Col span={8}>
            <img src={movieDetail.hinhAnh} alt="" className="w-full" />
          </Col>
          <Col span={16}>
            <h2>{movieDetail.tenPhim}</h2>
            <p>{movieDetail.moTa}</p>
            <p>{movieDetail.ngayKhoiChieu}</p>
            <iframe
              width="958"
              height="539"
              src="https://www.youtube.com/embed/Ru4Jbmh7bcQ"
              title="Avatar 2 - Trailer mới nhất - Vietsub"
            ></iframe>
          </Col>
        </Row>
      </div>
    )
  );
};

export default MovieDetail;
