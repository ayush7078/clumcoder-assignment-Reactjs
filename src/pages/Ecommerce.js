import React, { useState } from 'react';
import { Layout, Card, Row, Col, Button, Statistic, Select } from 'antd';
import { UserOutlined, ShoppingCartOutlined, DollarCircleOutlined, EyeOutlined } from '@ant-design/icons';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const { Option } = Select;

const data = [
  { name: 'Mon', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Tue', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Wed', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Thu', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Fri', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Sat', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Sun', uv: 3490, pv: 4300, amt: 2100 },
];

const EcommerceDashboard = () => {
  const [timeFrame, setTimeFrame] = useState('week');

  const handleTimeFrameChange = (value) => {
    setTimeFrame(value);
    // Handle data change for the time frame (day, week, month)
  };

  return (
    <Layout style={{ minHeight: '90vh' }}>
      
        <Row gutter={16}>
          {/* Overview Stats */}
          <Col span={6}>
            <Card
              title="Total Views"
              bordered={false}
              style={{ textAlign: 'center' }}
            >
              <EyeOutlined style={{ fontSize: 15, color: '#1890ff' }} />
              <Statistic title="Views" value={112893} />
            </Card>
          </Col>
          <Col span={6}>
            <Card
              title="Total Profit"
              bordered={false}
              style={{ textAlign: 'center' }}
            >
              <DollarCircleOutlined style={{ fontSize: 15, color: '#28a745' }} />
              <Statistic title="Profit" value={4532.89} prefix="$" />
            </Card>
          </Col>
          <Col span={6}>
            <Card
              title="Total Products"
              bordered={false}
              style={{ textAlign: 'center' }}
            >
              <ShoppingCartOutlined style={{ fontSize: 15, color: '#ff7b00' }} />
              <Statistic title="Products" value={1200} />
            </Card>
          </Col>
          <Col span={6}>
            <Card
              title="Total Users"
              bordered={false}
              style={{ textAlign: 'center' }}
            >
              <UserOutlined style={{ fontSize: 15, color: '#0d6efd' }} />
              <Statistic title="Users" value={6724} />
            </Card>
          </Col>
        </Row>

        {/* Chart Section */}
        <Row gutter={16} style={{ marginTop: 10 }}>
          <Col span={17}>
            <Card title="Total Revenue and Total Sales">
              <div style={{ display: 'flex', marginBottom: '16px' }}>
                <Button type="primary" style={{marginRight : "10px"}}>Total Revenue</Button>
                <Button style={{marginRight : "10px"}}> Total Sales</Button>
                <Select
                  defaultValue="week"
                  onChange={handleTimeFrameChange}
                  style={{ width: 100, alignItems : "flex-end" }}

                >
                  <Option value="day">Day</Option>
                  <Option value="week">Week</Option>
                  <Option value="month">Month</Option>
                </Select>
             
              </div>

              <ResponsiveContainer width="100%" height={150}>
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                  <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            </Card>
          </Col>

          {/* Profit This Week Chart */}
          <Col span={7}>
            <Card title="Profit This Week">
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="amt" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            </Card>
          </Col>
        </Row>
    </Layout>
  );
};

export default EcommerceDashboard;
