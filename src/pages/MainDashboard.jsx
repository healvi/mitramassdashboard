import { Row, Col } from "antd";
import React from "react";
import { Aktivitas, Biodata, Bank, Lokasi, Relasi } from "../components";
const MainDashboard = () => {
  return (
    <Row gutter={[48, 24]} className="main-dashboard-conatiner">
      <Col xs={24} sm={24} md={8} lg={8} xl={8}>
        <div className="item-container">
          <Biodata />
        </div>
      </Col>
      <Col xs={24} sm={24} md={16} lg={16} xl={16}>
        <Row gutter={[48, 24]} className="main-dashboard-conatiner">
          <Col span={24}>
            <div className="item-container">
              <Lokasi />
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <div>
              <Row gutter={[48, 24]}>
                <Col span={24}>
                  <div className="item-container">
                    <Bank />
                  </div>
                </Col>
                <Col span={24}>
                  <div className="item-container-full">
                    <Relasi />
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <div className="item-container-full">
              <Aktivitas />
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default MainDashboard;
