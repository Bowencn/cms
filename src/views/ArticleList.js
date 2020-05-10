import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Radio,
  Space,
  Button,
  Table,
  ConfigProvider,
  Row,
  Col,
  Tag,
} from "antd";
import { SmileOutlined } from "@ant-design/icons";

export default function ArticleList() {
  const { customize, setCustomize } = useState(false);
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
  const columns = [
    {
      title: "标题",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "首页图片",
      dataIndex: "img",
      key: "img",
    },
    {
      title: "文章分类",
      key: "tags",
      dataIndex: "tags",
      render: (tags) => (
        <span>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </span>
      ),
    },
    {
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
      img: 32,
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      img: 42,
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",
      img: 32,
      tags: ["cool", "teacher"],
    },
  ];
  return (
    <div>
      <Row>
        <Col>文章列表:</Col>
      </Row>
      <Row align="middle">
        <Col offset={22} span={2}>
          <Button type="primary">
                <Link to="/AddArticle">添加</Link></Button>
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
