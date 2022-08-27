import React from "react";
import { Col, Row } from "antd";
import { BranchesOutlined } from "@ant-design/icons";

const Relasi = () => {
  return (
    <Row className="relasi-container">
      <Col span={24}>
        <Row justify="space-between">
          <Col className="title" span={12}>
            <h3>Relasi</h3>
          </Col>
          <Col span={12}>
            <div className="lookall">
              <p>Lihat Semua</p>
            </div>
          </Col>
          <Col span={24} className="main-content">
            <Row>
              <Col span={3}>
                <BranchesOutlined className="iconx" rotate={90} />
              </Col>
              <Col span={3} className="status">
                <p>20</p>
                <p>Memiliki</p>
              </Col>
            </Row>
          </Col>
          <Col span={24} className="main-content">
            <Row>
              <Col span={3}>
                <BranchesOutlined className="iconx" rotate={90} />
              </Col>
              <Col span={3} className="status">
                <p>108</p>
                <p>Menggunakan</p>
              </Col>
            </Row>
          </Col>
          <Col span={24} className="main-content">
            <Row>
              <Col span={3}>
                <BranchesOutlined className="iconx" rotate={90} />
              </Col>
              <Col span={3} className="status">
                <p>67</p>
                <p>Meminjam</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Relasi;
