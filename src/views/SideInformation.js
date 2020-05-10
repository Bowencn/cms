import React, { useState, useContext  } from "react";
import {
  Form,
  Input,
  Space,
  Button,
  Table,
  ConfigProvider,
  Row,
  Col,
  Tag,
} from "antd";
import Baacc from "../components/BarsAndAppreciationnCommonComponents";
import {Context} from '../utils/ContextState'
export default function SideInformation() {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  return (
    <div>
      <Context.Provider
        value={{
          headerName: "banner侧边栏：",
          requiredBar:"标题",
          SpareColumn:"描述信息"
        }}
      >
        <Baacc/>
      </Context.Provider>
      {/* <Row>
        <Col>banner侧边栏：</Col>
      </Row>
      <Row>
        <Col span={6}offset={1}>
          <Form {...layout} initialValues={{ remember: true }}>
            <Form.Item label="标题" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item label="描述信息">
              <Input />
            </Form.Item>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col offset={2}>图片：</Col>
        <Col>
          <div
            style={{
              borderWidth: 1,
              borderColor: "grey",
              borderStyle: "dashed",
              width: 100,
              height: 100,
              marginLeft:30,
              borderRadius: 5,
            }}
          ></div>
        </Col>
      </Row>
      <Row>
        <Col offset={3} span={1}>
          <Button
            type="primary"
            style={{
              marginTop: 20,
              marginLeft:5
            }}
          >
            保存
          </Button>
        </Col>
      </Row> */}
    </div>
  );
}
