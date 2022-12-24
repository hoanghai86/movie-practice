import React from "react";
import { useSelector } from "react-redux";
import { Col, Divider, Row, Tabs, Tag } from "antd";
import { getScheduleCinema } from "../redux/action";
import { useState } from "react";
import { useEffect } from "react";
import moment from "moment/moment";

const ScheduleMovie = () => {
  const [listSchedule, setListSchedule] = useState([]);
  const cinemas = useSelector((state) => state.booking.cinemas);

  // khi vừa vào trang Home, thì hệ thống rạp cinemas không hiện ra, chỉ khi click sự kiện onChange thì nó mới hiện => ta muốn hiện rạp đầu tiên khi load trang Home thì làm như sau:
  // cinemas[0].maHeThongRap;  <= lấy mã của rạp đầu tiên
  // dùng hàm useEffect để nó chạy lần đầu tiên, bỏ hàm getScheduleCinema vào useEffect, truyền mã rạp đầu tiên vào hàm get, sau khi hàm get nó chạy call API thì set state lại bằng hàm setListSchedule

  useEffect(() => {
    getScheduleCinema(cinemas[0]?.maHeThongRap).then((res) =>
      setListSchedule(res.data.content)
    );
  }, [cinemas]);

  console.log(listSchedule);

  return (
    <div className="container mx-auto mt-10">
      <Tabs
        onChange={(key) =>
          getScheduleCinema(key).then(
            (res) => setListSchedule(res.data.content) //set state để render lại khi lick onChange
          )
        }
        tabPosition="left"
        // items={[
        //   {
        //     label: ``,
        //     key: ``,
        //     children: ``,
        //   },
        // ]}

        //kiểm tra cinemas có tồn tại thì mới map
        items={cinemas?.map((itemRap) => {
          return {
            label: <img className="w-24" src={itemRap.logo} />,
            key: itemRap.maHeThongRap,
            // children:
            //   listSchedule.length > 0 && //kiểm tra chiều dài mảng trước khi map
            //   //do backend trả về 1 mảng có 1 phần tử duy nhất nên ta [0] luôn
            //   listSchedule[0].lstCumRap.map((itemCumRap) => {
            //     // <p key={itemCumRap.maCumRap}>
            //     //   {itemCumRap.tenCumRap} <br /> {itemCumRap.diaChi} <br />
            //     // </p>)

            //     return <Tabs tabPosition="left" />;
            //   }),

            children: (
              <Tabs
                tabPosition="left"
                items={
                  listSchedule.length > 0 &&
                  listSchedule[0]?.lstCumRap.map((itemCumRap) => {
                    return {
                      label: (
                        <p className="text-left w-1/2">
                          {itemCumRap.tenCumRap} <br /> {itemCumRap.diaChi}
                        </p>
                      ),
                      key: itemCumRap.maCumRap,
                      children: itemCumRap.danhSachPhim.map(
                        (itemDanhSachPhim) => {
                          return (
                            <div key={itemDanhSachPhim.maPhim}>
                              <Row
                                gutter={[5, 5]}
                                key={itemDanhSachPhim.maPhim}
                              >
                                <Col span={6}>
                                  <img
                                    className="w-36 h-52 object-cover"
                                    src={itemDanhSachPhim.hinhAnh}
                                  />
                                </Col>
                                <Col span={18}>
                                  <Row>{itemDanhSachPhim.tenPhim}</Row>
                                  <Row>
                                    {itemDanhSachPhim.lstLichChieuTheoPhim.map(
                                      (itemLichChieuTheoPhim) => {
                                        return (
                                          <Row
                                            gutter={[16, 24]}
                                            key={
                                              itemLichChieuTheoPhim.maLichChieu
                                            }
                                          >
                                            <Col
                                              className="gutter-row"
                                              span={6}
                                            >
                                              <div>
                                                <Tag
                                                  color="magenta"
                                                  className="mb-2"
                                                >
                                                  {moment(
                                                    itemLichChieuTheoPhim.ngayChieuGioChieu
                                                  ).format("DD/MM/yyyy hh:mm")}
                                                </Tag>
                                              </div>
                                            </Col>
                                          </Row>
                                        );
                                      }
                                    )}
                                  </Row>
                                </Col>
                                <p></p>
                              </Row>
                              <Divider orientation="left"></Divider>{" "}
                              {/* kẻ đường viền ngăn cách */}
                            </div>
                          );
                        }
                      ),
                    };
                  })
                }
              />
            ),
          };
        })}
      />
    </div>
  );
};

export default ScheduleMovie;
