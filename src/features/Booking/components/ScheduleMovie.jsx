import React from "react";
import { useSelector } from "react-redux";
import { Col, Row, Tabs } from "antd";
import { getScheduleCinema } from "../redux/action";
import { useState } from "react";
import { useEffect } from "react";

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
            children:
              listSchedule.length > 0 && //kiểm tra chiều dài mảng trước khi map
              //do backend trả về 1 mảng có 1 phần tử duy nhất nên ta [0] luôn
              listSchedule[0].lstCumRap.map((itemCumRap) => {
                return (
                  // {itemCumRap.tenCumRap} <br /> {itemCumRap.diaChi} <br/>
                  <Row>
                    <Col span={4}>
                      {itemCumRap.tenCumRap} <br /> {itemCumRap.diaChi} <br />
                      <p></p>
                    </Col>
                    <Col span={20}>
                      {itemCumRap.danhSachPhim.map((itemDanhSachPhim) => {
                        return (
                          <Row>
                            <Col span={4} >
                              <img src={itemDanhSachPhim.hinhAnh} className="w-24"/>
                            </Col>
                            <Col span={20}>
                              <h1>abs</h1>
                            </Col>
                          </Row>
                        );
                      })}
                    </Col>
                  </Row>
                );
              }),
          };
        })}
      />
    </div>
  );
};

export default ScheduleMovie;
