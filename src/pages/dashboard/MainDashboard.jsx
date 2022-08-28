import { Row, Col } from "antd";
import React from "react";
import { Aktivitas, Biodata, Bank, Lokasi, Relasi } from "../../components";
const MainDashboard = () => {
  return (
    <Row gutter={[48, 24]} className="main-dashboard-conatiner">
      <Col xs={24} sm={24} md={6} lg={6} xl={6}>
        <div className="item-container-nopadd">
          <Biodata />
        </div>
      </Col>
      <Col xs={24} sm={24} md={18} lg={18} xl={18}>
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
