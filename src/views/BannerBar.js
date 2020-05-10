import React, { useState, useEffect } from "react";
import { Radio, Space, Button, Table, ConfigProvider, Row, Col,Tag } from "antd";
import { SmileOutlined } from "@ant-design/icons";
export default function BannerBar() {
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
      title: '编号',
      dataIndex: 'number',
      key: 'number',
      render: text => <a>{text}</a>,
    },
    {
      title: '名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '图片',
      dataIndex: 'img',
      key: 'img',
    },
    {
      title: '标签',
      key: 'tags',
      dataIndex: 'tags',
      render: tags => (
        <span>
          {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'blue';
            if (tag === 'loser') {
              color = 'volcano';
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
      title: '操作',
      key: 'action',
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
      key: '1',
      name: 'juejin',
      number: 32,
      img: 'https://juejin.im',
      tags: ['首页'],
    },
    {
      key: '2',
      name: 'baidu',
      number: 42,
      img: 'https://baidu.com',
      tags: ['首页'],
    },
    {
      key: '3',
      name: 'bilibili',
      number: 32,
      img: 'https://bilibili.com',
      tags: ['首页'],
    },
  ];
  return (
    <>
      <Row>
        <Col>
          Banner:
          <Radio.Group
            defaultValue="a"
            buttonStyle="solid"
            size="small"
            style={{
              marginLeft: 17,
            }}
          >
            <Radio.Button
              value="a"
              style={{
                paddingLeft: 10,
                paddingRight: 10,
              }}
            >
              单图
            </Radio.Button>
            <Radio.Button
              value="b"
              style={{
                paddingLeft: 10,
                paddingRight: 10,
              }}
            >
              多图
            </Radio.Button>
          </Radio.Group>
        </Col>
      </Row>
      <Row align="middle">
        <Col offset={22} span={2}>
          <Button type="primary">添加</Button>
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
      <Row>
        <Col offset={22} span={2}>
          <Button
            type="primary"
            style={{
              marginTop: 20,
            }}
          >
            保存
          </Button>
        </Col>
      </Row>
    </>
  );
}
