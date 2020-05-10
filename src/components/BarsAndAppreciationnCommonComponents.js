import React, { useState, useContext, createContext } from "react";
import {
  Form,
  Input,
  Space,
  Button,
  Table,
  ConfigProvider,
  Row,
  Col,
  message,
  Select,
  Divider,
  //   Upload,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Context } from "../utils/ContextState";
import UploadImage from "../components/UploadImage";

export default function BarsAndAppreciationnCommonComponents() {
  const { TextArea } = Input;
  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
  };
  const imgout = {
    labelCol:{span:7},
    wrapperCol: { span: 10 },
}
  const textout = {
      labelCol:{span:6},
      wrapperCol: { span: 18 },
  }
  const { headerName, requiredBar, SpareColumn, CategoryBar,textArea } = useContext(
    Context
  );
  const [items, setItems] = useState(["jack", "lucy"]);
  const [name, setName] = useState("");
  const { Option } = Select;
  let index = 0;
  function onNameChange(event) {
    this.setState({
      name: event.target.value,
    });
  }

  function addItem() {
    console.log("addItem");
    const { items, name } = this.state;
    this.setState({
      items: [...items, name || `New item ${index++}`],
      name: "",
    });
  }
  return (
    <div>
      <Row>
        <Col>{headerName}</Col>
      </Row>
      <Row>
        <Col
          xs={{ span: 20, offset: 1 }}
          md={{ span: 15, offset: 3 }}
          lg={{ span: 15, offset: 2 }}
        >
          <Form {...layout}>
            {requiredBar && (
              <Form.Item label={requiredBar} required={true}>
                <Input />
              </Form.Item>
            )}
            {SpareColumn && (
              <Form.Item label={SpareColumn}>
                <Input />
              </Form.Item>
            )}
          </Form>
        </Col>
      </Row>
      {CategoryBar && (
        <Row>
          <Col
            xs={{ span: 20, offset: 1 }}
            md={{ span: 15, offset: 3 }}
            lg={{ span: 15, offset: 2 }}
          >
            <Form {...layout}>
              <Form.Item label={CategoryBar} required={true}>
                <Select
                  style={{ width: 240 }}
                  // placeholder="custom dropdown render"
                  dropdownRender={(menu) => (
                    <div>
                      {menu}
                      <Divider style={{ margin: "4px 0" }} />
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "nowrap",
                          padding: 8,
                        }}
                      >
                        <Input
                          style={{ flex: "auto" }}
                          value={name}
                          onChange={onNameChange}
                        />
                        <a
                          style={{
                            flex: "none",
                            padding: "8px",
                            display: "block",
                            cursor: "pointer",
                          }}
                          onClick={addItem}
                        >
                          <PlusOutlined /> Add item
                        </a>
                      </div>
                    </div>
                  )}
                >
                  {items.map((item) => (
                    <Option key={item}>{item}</Option>
                  ))}
                </Select>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      )}
      <Row>
        <Col offset={5}>
          <Form {...imgout}>
            <Form.Item label="图片">
              <UploadImage />
            </Form.Item>
          </Form>
        </Col>
      </Row>
      {textArea && (
        <Row>
          <Col
            xs={{ span: 20, offset: 1 }}
            md={{ span: 20, offset: 1 }}
            lg={{ span: 15, offset: 2 }}>
          <Form {...textout}>
            <Form.Item label="内容">
            <TextArea rows={9} />
            </Form.Item>
          </Form>
          </Col>
        </Row>
      )}
      <Row>
        <Col xs={{ offset: 18 }} md={{ offset: 7 }} xl={{ offset: 6 }}>
          <Button type="primary">保存</Button>
        </Col>
      </Row>
    </div>
  );
}
