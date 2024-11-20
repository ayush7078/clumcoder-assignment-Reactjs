import React from 'react';
import { Card, Input, Button, Radio, Select, Row, Col } from 'antd';

const { Option } = Select;

const ProFormLayout = () => {
  return (
    <Row gutter={16}>
      {/* Contact Form */}
      <Col span={12}>
        <Card title="Contact Form">
          <Row gutter={16}>
            <Col span={12}>
              <label>First Name</label>
              <Input placeholder="First Name" style={{ marginBottom: 8, marginTop : 8 }} />
            </Col>
            <Col span={12}>
              <label>Last Name</label>
              <Input placeholder="Last Name" style={{ marginBottom: 8, marginTop : 8 }} />
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <label>Email</label>
              <Input placeholder="Email" style={{ marginBottom: 8, marginTop : 8 }} />
            </Col>
            <Col span={12}>
              <label>Phone</label>
              <Input placeholder="Phone" style={{ marginBottom: 8, marginTop : 8 }} />
            </Col>
            <Col span={24}>
              <label>Select Option</label>
              <Radio.Group style={{ marginBottom: 8, marginTop : 8, display: "flex", flexDirection: "Row", justifyContent : "space-between"  }}>
                <Radio value="graphics">Graphics Design</Radio>
                <Radio value="web">Web Development</Radio>
                <Radio value="logo">Logo Design</Radio>
                <Radio value="logo">Others</Radio>
              </Radio.Group>
            </Col>
          
            <Col span={24}>
              <label>Message</label>
              <Input.TextArea placeholder="Message" rows={6} style={{ marginBottom: 8, marginTop : 8 }} />
            </Col>
            <Col span={24}>
              <Button type="primary" style={{ width: '100%', marginTop : 8 }}>Send Message</Button>
            </Col>
          </Row>
        </Card>
      </Col>

      {/* Survey Form */}
      <Col span={12}>
        <Card title="Survey Form">
          <Row gutter={8}>
            <Col span={24}>
              <label>Name</label>
              <Input placeholder="Name" style={{ marginBottom: 8, marginTop: 8 }} />
            </Col>
            <Col span={24}>
              <label>Email</label>
              <Input placeholder="Email" style={{ marginBottom: 8, marginTop: 8 }} />
            </Col>
            <Col span={24}>
              <label>Age</label>
              <Input placeholder="Age" style={{ marginBottom: 8, marginTop: 8 }} />
            </Col>
            <Col span={24}>
              <label>Role</label>
              <Select placeholder="Select your role" style={{ width: '100%', marginBottom: 8, marginTop: 8 }}>
                <Option value="student">Student</Option>
                <Option value="professional">Professional</Option>
              </Select>
            </Col>
            <Col span={24}>
              <label>Which option best describes you?</label>
              <Select placeholder="Select option" style={{ width: '100%', marginBottom: 8, marginTop: 8 }}>
                <Option value="beginner">Beginner</Option>
                <Option value="intermediate">Intermediate</Option>
                <Option value="advanced">Advanced</Option>
              </Select>
            </Col>
            <Col span={24}>
              <label>Would you recommend our site to a friend?</label>
              <Radio.Group style={{ marginBottom: 8, marginTop: 8, display: "flex", flexDirection: "column", justifyContent : "space-between" }}>
                <Radio value="yes">Yes</Radio>
                <Radio value="no">No</Radio>
                <Radio value="maybe">Maybe</Radio>
              </Radio.Group>
            </Col>
            <Col span={24}>
              <label>Which language(s) and framework(s) do you know?</label>
              <Radio.Group style={{ width: '100%', marginBottom: 8, marginTop: 8, display: "flex", flexDirection: "column", justifyContent : "space-between"  }}>
                <Radio value="javascript">JavaScript</Radio>
                <Radio value="react">React</Radio>
                <Radio value="nodejs">Node.js</Radio>
                <Radio value="python">Python</Radio>
                <Radio value="java">Java</Radio>
               </Radio.Group>
            </Col>
             <Col span={24}>
              <Button type="primary" style={{ width: '100%' }}>Submit</Button>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export default ProFormLayout;
