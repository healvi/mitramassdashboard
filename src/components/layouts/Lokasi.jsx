import { Col, Row } from "antd";
import React from "react";
import { BankOutlined, ToolOutlined, ShopOutlined } from "@ant-design/icons";
const Lokasi = () => {
  return (
    <Row className="lokasi-container">
      <Col span={24}>
        <Row justify="space-between">
          <Col className="title" span={12}>
            <h3>Lokasi</h3>
          </Col>
          <Col span={12}>
            <div className="lookall">
              <p>Lihat Semua</p>
            </div>
          </Col>
          <Col span={24}>
            <Row className="content" gutter={[16, 16]}>
              <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                <div className="main-content">
                  <BankOutlined className="iconx" />
                  <div>
                    <p>10</p>
                    <p>Induk</p>
                  </div>
                </div>
              </Col>
              <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                <div className="main-content">
                  <ToolOutlined className="iconx" rotate={270} />
                  <div>
                    <p>3</p>
                    <p>sub lokasi level 1</p>
                  </div>
                </div>
              </Col>
              <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                <div className="main-content">
                  <ShopOutlined className="iconx" />
                  <div>
                    <p>1</p>
                    <p>sub lokasi level 2</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Lokasi;
