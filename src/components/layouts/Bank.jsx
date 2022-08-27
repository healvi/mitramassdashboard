import React from "react";
import { Button, Col, Row } from "antd";
import { EditOutlined, RestFilled } from "@ant-design/icons";
const Bank = () => {
  return (
    <Row className="bank-container">
      <Col span={24}>
        <Row justify="space-between">
          <Col className="title" span={12}>
            <h3>Akun Bank</h3>
          </Col>
          <Col span={12}>
            <div className="lookall">
              <Button className="btn">+ Tambah Akun Bank</Button>
            </div>
          </Col>
          <Col span={24}>
            <Row className="content" gutter={[16, 16]}>
              <Col span={24}>
                <div className="main-content">
                  <div className="card-bank">
                    <p>Visa</p>
                  </div>
                  <div className="card-deskripsi">
                    <div className="deskripsi">
                      <p>Bank Bukopin</p>
                      <div>
                        <p>****-912838 - Si Tampan</p>
                        <p>USD</p>
                      </div>
                    </div>
                    <div className="action">
                      <EditOutlined
                        style={{
                          fontSize: "20px",
                          color: "#52c41a",
                          marginRight: "10px",
                          cursor: "pointer",
                        }}
                      />
                      <RestFilled
                        style={{
                          fontSize: "20px",
                          color: "#f5222d",
                          cursor: "pointer",
                        }}
                      />
                    </div>
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

export default Bank;
