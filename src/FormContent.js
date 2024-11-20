import React from 'react';
import { Card, Row, Col, Input, Button, Radio, Select } from 'antd';

const { Option } = Select;

const FormContent = () => {
  return (
    <Row gutter={16} style={{ marginTop: '24px' }}>
      {/* Contact Form */}
      <Col span={12}>
        <Card title="Contact Form 2">
          <Input placeholder="Enter your first name" style={{ marginBottom: 8 }} />
          <Input placeholder="Enter your last name" style={{ marginBottom: 8 }} />
          <Input placeholder="Enter your email" style={{ marginBottom: 8 }} />
          <Input placeholder="Enter your phone" style={{ marginBottom: 8 }} />
          <Radio.Group style={{ marginBottom: 8 }}>
            <Radio value="graphics">Graphics Design</Radio>
            <Radio value="web">Web Development</Radio>
            <Radio value="logo">Logo Design</Radio>
          </Radio.Group>
          <Button type="primary">Send Message</Button>
        </Card>
      </Col>

      {/* Survey Form */}
      <Col span={12}>
        <Card title="Survey Form">
          <Input placeholder="Enter your name" style={{ marginBottom: 8 }} />
          <Input placeholder="Enter your email" style={{ marginBottom: 8 }} />
          <Input placeholder="Enter your age" style={{ marginBottom: 8 }} />
          <Select placeholder="Which option best describes you?" style={{ width: '100%', marginBottom: 8 }}>
            <Option value="student">Student</Option>
            <Option value="professional">Professional</Option>
          </Select>
          <Radio.Group style={{ marginBottom: 8 }}>
            <Radio value="yes">Yes</Radio>
            <Radio value="no">No</Radio>
            <Radio value="maybe">Maybe</Radio>
          </Radio.Group>
          <Button type="primary">Submit</Button>
        </Card>
      </Col>
    </Row>
  );
};

export default FormContent;
