import React from "react";
import { Col, Row } from "antd";
const Aktivitas = () => {
  return (
    <Row className="aktivitas-container">
      <Col span={24}>
        <Row justify="space-between">
          <Col className="title" span={24}>
            <h3>Aktivitas</h3>
          </Col>
          <Col className="list-activity" span={24}>
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius.
            </h3>
            <p>Kemarin, 23 januari 2022</p>
          </Col>
          <Col className="list-activity" span={24}>
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius.
            </h3>
            <p>Kemarin, 23 januari 2022</p>
          </Col>
          <Col className="list-activity" span={24}>
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius.
            </h3>
            <p>Kemarin, 23 januari 2022</p>
          </Col>
          <Col className="list-activity" span={24}>
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius.
            </h3>
            <p>Kemarin, 23 januari 2022</p>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Aktivitas;
