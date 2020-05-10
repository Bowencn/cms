import React, { useState, useEffect } from "react";
import {
  Input,
  Form,
  Button,
  Table,
  ConfigProvider,
  Row,
  Col,
  Modal,
  Radio,
} from "antd";
import { SmileOutlined } from "@ant-design/icons";

export default function Administrators() {
  const [customize, setCustomize] = useState(false);
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setVisible(false);

      setLoading(false);
    }, 3000);
  };

  const handleCancel = () => {
    setVisible(false);
  };
  const customizeRenderEmpty = () => (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <SmileOutlined
        style={{
          fontSize: 20,
        }}
      />
      <p> Data Not Found </p>
    </div>
  );
  const Add = () => (
    <div>
      <Button type="primary" onClick={showModal}>
        添加
      </Button>
      <Modal
        visible={visible}
        title="添加管理员"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Return
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={handleOk}
          >
            Submit
          </Button>,
        ]}
      >
        <Form.Item label="名称" required={true}>
          <Input />
        </Form.Item>
        <Form.Item label="权限" required={true}>
          <Radio.Group style={{marginLeft:5}}>
            <Radio value="a">超级管理员</Radio>
            <Radio value="b">管理员</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>
      </Modal>
    </div>
  );
  const columns = [
    {
      title: "名称",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      align: "center",
      title: "权限",
      dataIndex: "jurisdiction",
      key: "jurisdiction",
    },
    {
      align: "center",
      title: "操作",
      key: "action",
      render: (text, record) => (
        <span>
          <a style={{ marginRight: 16 }}>编辑</a>
          <a>删除</a>
        </span>
      ),
    },
  ];
  const data = [
    {
      key: "1",
      name: "John Brown",
      jurisdiction: "super",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      jurisdiction: "super",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",
      jurisdiction: "super",
      tags: ["cool", "teacher"],
    },
  ];
  return (
    <div>
      <Row>
        <Col>管理员列表:</Col>
      </Row>
      <Row align="middle">
        <Col offset={22} span={2}>
          <Add />
        </Col>
      </Row>
      <ConfigProvider renderEmpty={customize && customizeRenderEmpty}>
        <Table
          style={{
            marginTop: 20,
          }}
          columns={columns}
          dataSource={data}
        />
      </ConfigProvider>
    </div>
  );
}
