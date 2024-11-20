import React from 'react';
import { Card, Row, Col, Typography } from 'antd';

const { Title } = Typography;

const DashboardContent = () => {
  const stats = [
    { title: 'Total Views', value: '$3.456K' },
    { title: 'Total Profit', value: '$45.2K' },
    { title: 'Total Product', value: '2,450' },
    { title: 'Total Users', value: '3,456' },
  ];

  return (
    <Row gutter={16}>
      {stats.map((stat, index) => (
        <Col span={6} key={index}>
          <Card>
            <Title level={5}>{stat.title}</Title>
            <div style={{ fontSize: 24 }}>{stat.value}</div>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default DashboardContent;
