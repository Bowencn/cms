import React from "react";
import { Row, Col, Card } from "antd";
import img0 from "../assets/0.jpg";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";
export default function PictureLibrary() {
  const { Meta } = Card;
  const test = 6;
  const imgURL = [
    { name: 0, url: img0 },
    { name: 1, url: img1 },
    { name: 2, url: img2 },
    { name: 3, url: img3 },
    { name: 4, url: img4 },
    { name: 5, url: img5 },
    { name: 6, url: img6 },
  ];
  return (
    <div>
      <Row>
        <Col>图片库：</Col>
      </Row>
      <Row gutter={[16, 16]}>
        {imgURL.map((index) => (
          <Col span={test}>
            <Card
              hoverable
              style={{ width: 300 }}
              cover={
                <div style={{ height:200,overflow:'hidden' }}>
                  <img alt="example" src={index.url}style={{ width:'100%' }}/>
                </div>
              }
            >
              <Meta title={index.name} description="www.instagram.com" />
            </Card>
          </Col>
        ))}
        {/* <Col span={test}>
          <Card
            hoverable
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </Col>
        <Col span={test}>
          <Card
            hoverable
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </Col>
        <Col span={test}>
          <Card
            hoverable
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </Col>
        <Col span={test}>
          <Card
            hoverable
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </Col>
        <Col span={test}>
          <Card
            hoverable
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </Col> */}
      </Row>
    </div>
  );
}
