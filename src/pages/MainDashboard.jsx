import { Row, Col } from "antd";
import React from "react";
import { Aktivitas, Biodata, Bank, Lokasi, Relasi } from "../components";
const MainDashboard = () => {
  return (
    <Row gutter={[48, 24]} className="main-dashboard-conatiner">
      <Col span={8}>
        <div className="item-container">
          <Biodata />
        </div>
      </Col>
      <Col span={16}>
        <Row gutter={[48, 24]} className="main-dashboard-conatiner">
          <Col span={24}>
            <div className="item-container">Column</div>
          </Col>
          <Col span={12}>
            <div>
              <Row gutter={[48, 24]}>
                <Col span={24}>
                  <div className="item-container">Column</div>
                </Col>
                <Col span={24}>
                  <div className="item-container">Column</div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col span={12}>
            <div className="item-container">Column</div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default MainDashboard;
