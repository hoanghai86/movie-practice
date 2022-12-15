import React from "react";
import { Row, Col, Card } from "antd";

const MovieList = () => {
  return (
    <div className="container mx-auto">
      {/* cho nội dung vào giữa, canh đều 2 bên */}
      <h1>Danh sách phim</h1>
      <Row gutter={[16,16]}>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card
            hoverable
            style={{
              width: "100%",
            }}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <h1 className="text-3xl font-semibold">Fast and furios</h1>
            <p className="text-2xl">Good</p>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card
            hoverable
            style={{
              width: "100%",
            }}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <h1 className="text-3xl font-semibold">Fast and furios</h1>
            <p className="text-2xl">Good</p>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card
            hoverable
            style={{
              width: "100%",
            }}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <h1 className="text-3xl font-semibold">Fast and furios</h1>
            <p className="text-2xl">Good</p>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card
            hoverable
            style={{
              width: "100%",
            }}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <h1 className="text-3xl font-semibold">Fast and furios</h1>
            <p className="text-2xl">Good</p>
          </Card>
        </Col>                       
      </Row>
    </div>
  );
};

export default MovieList;
