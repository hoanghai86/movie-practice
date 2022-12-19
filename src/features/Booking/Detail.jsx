import { Col, Row, Rate, Tag, Button, Modal } from "antd";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"; //thư viện bóc ra các tham số từ component MovieList truyền qua
import {
  // fetchMoviesDetailAction,
  fetchMoviesDetailScheduleAction,
} from "./redux/action";
import moment from "moment";

const MovieDetail = () => {
  const [openModal, setOpenModal] = useState(false); //thay đổi state để đóng mở modal xem trailer

  //hiện Modal
  const showModal = () => {
    setOpenModal(true);
  };

  //tắt Modal, tắt luôn iframe video nếu trong Modal có thẻ iframe
  const closeModal = () => {
    var iframe = document.querySelector("#video-trailer"); //dom đến iframe có id là video-trailer
    if (iframe !== null) {
      var temp = iframe.src; //gán đường dẫn src video vào 1 cái biến tạm, biến tạm lúc này có giá trị là link Youtube
      iframe.src = temp; //gán lại giá trị vào src video => mục đích là ngắt video đang chạy
    }

    setOpenModal(false);
  };

  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const movieId = params.id; //params là 1 cái list tham số, nên ta chỉ cần lấy đúng cái id phim ra, tạo cho nó 1 biến hứng
    // dispatch(fetchMoviesDetailAction(movieId));
    dispatch(fetchMoviesDetailScheduleAction(movieId));
  }, [params]);

  const movieDetail = useSelector((state) => {
    // return state.booking.movieDetail;
    return state.booking.movieDetailSchedule;
  });


  console.log(movieDetail);

  // let trailer = "";
  // trailer = movieDetail && movieDetail.trailer.replace("watch?v=", "embed/");

  return (
    movieDetail && (
      <div className="container mx-auto pt-10">
        <h1 className="text-center text-5xl font-normal">Chi tiết phim</h1>
        <Row gutter={[30, 30]}>
          <Col span={8}>
            <img src={movieDetail.hinhAnh} alt="" className="w-full" />
          </Col>
          <Col span={16}>
            <h2>{movieDetail.tenPhim}</h2>
            <p>{movieDetail.moTa}</p>

            <table className="table-auto">
              <tbody>
                <tr>
                  <td className="font-bold">Đánh giá:</td>
                  <td>
                    <Rate value={movieDetail.danhGia} count={10} />
                  </td>
                </tr>
                <tr>
                  <td className="font-bold">
                    {movieDetail.dangChieu && (
                      <Tag color="magenta">Đang chiếu</Tag>
                    )}
                  </td>
                  <td className="font-bold">
                    {movieDetail.sapChieu && <Tag color="blue">Sắp chiếu</Tag>}
                  </td>
                </tr>
                <tr>
                  <td className="font-bold">Ngày khởi chiếu:</td>
                  <td>
                    {moment(movieDetail.ngayKhoiChieu).format(
                      "DD/MM/yyyy hh:mm"
                    )}
                  </td>
                </tr>
                <tr>
                  <td>
                    <Button type="primary" size="large" onClick={showModal}>
                      Xem Trailer
                    </Button>
                  </td>

                  <td>
                    <Button type="primary" size="large" danger>
                      Đặt vé
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>

        {/* đóng mở modal xem trailer */}
        <Modal
          title="Trailer"
          open={openModal}
          onCancel={closeModal}
          width={800}
          footer={null}
        >
          <iframe
            id="video-trailer"
            width="100%"
            height="500"
            src={movieDetail.trailer}
          ></iframe>
        </Modal>
      </div>
    )
  );
};

export default MovieDetail;
