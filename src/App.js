import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Ecommerce from './pages/Ecommerce';
import ProFormLayout from './pages/ProFormLayout';
import "./App.css"
const { Content } = Layout;

const App = () => {
  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Sidebar />
        <Layout>
          <Header />
          <Content style={{ margin: '8px', padding: '8px' }}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard/ecommerce" element={<Ecommerce />} />
              <Route path="/forms/pro-form-layout" element={<ProFormLayout />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
