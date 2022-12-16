import React from "react";
import { Row, Col, Card, Button, Pagination } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoviesAction } from "../redux/action";
import { Link } from "react-router-dom";

const MovieList = () => {
  const movies = useSelector((state) => {
    return state.booking.movies;
  });

  const dispatch = useDispatch(); //dispatch fetchMoviesAction 1 lần nữa để lấy số trang tương ứng khi nhấn ở Pagination, trong Pagination có sự kiện onChange

  return (
    <div className="container mx-auto">
      {/* cho nội dung vào giữa, canh đều 2 bên */}
      <h1 className="text-center text-5xl">Danh sách phim</h1>
      <Row gutter={[30, 30]}>
        {movies.items?.map((item) => (
          <Col key={item.maPhim} xs={24} sm={12} md={8} lg={6}>
            <Link to={`/detail/${item.maPhim}`}>
              <Card
                hoverable
                style={{
                  width: "100%",
                  height: "100%",
                }}
                cover={
                  <img
                    alt="example"
                    className="h-96 object-fill"
                    src={item.hinhAnh}
                  />
                }
              >
                <h1 className="text-3xl font-semibold h-16">{item.tenPhim}</h1>
                <p className="text-2xl h-36">
                  {item.moTa.substr(0, 100) + "..."}
                </p>
                <Link to={`/detail/${item.maPhim}`}> {/* truyền mã phim sang component Detail */}
                  <Button type="primary" size="large">
                    Đặt vé
                  </Button>
                </Link>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>

      {/* lần đầu tiên chưa có call API nên Pagination sẽ bị null, nên ta phải check nếu có danh sách phim hoặc có tồn tại thì mới render Pagination ra*/}
      {movies.items && (
        <Pagination
          defaultCurrent={movies.currentPage}
          total={movies.totalCount} //tổng số item tất cả trang
          pageSize={4} //số lượng item trên 1 trang
          onChange={(page) => {
            dispatch(fetchMoviesAction(page));
          }}
        ></Pagination>
      )}
    </div>
  );
};

export default MovieList;
