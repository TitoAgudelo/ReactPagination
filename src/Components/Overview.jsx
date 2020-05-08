import React from 'react';
import { Row, Col, Layout } from 'antd';

import {
  StockOutlined,
  ArrowUpOutlined,
  ThunderboltOutlined,
  RadarChartOutlined,
  DeploymentUnitOutlined,
  DownOutlined
} from '@ant-design/icons';

import './overview.scss';

const OverviewComponent = () => {
  return (
    <Layout style={{ padding: '2rem 0', backgroundColor: '#f6f6f6' }}>
      <Row justify="center">
        <Col span={20}>
          <div className="overview">
            <div className="alert">
              <div className="alert-image"></div>
              <div className="alert-info">
                <div className="alert-info-head">
                  <p className="alert-info-title">Welcome back &nbsp;</p>
                  <strong className="alert-info-strong">Gregory</strong>
                </div>
                <div className="alert-info-content">
                  <p className="alert-info-content-text">Nodolor sit amet, consectetur adipisicing elit. Aperiam odio expedita <br /> nostrum eius, sapiente commodi in tenetur facilis</p>
                </div>
              </div>
              <div className="alert-button">
                <button className="alert-button-btn">Hide Alert</button>
              </div>
            </div>
            <div className="overview-content">
              <div className="overview-head">
                <h2 className="overview-title">Overview</h2>
                <ul className="overview-menu">
                  <li className="selected">Today</li>
                  <li>Yesterday</li>
                  <li>Week</li>
                  <li>Month</li>
                </ul>
              </div>
            </div>
            <div className="overview-stats">
              <ul className="overview-stats-list">
                <li className="overview-stats-item">
                  <span className="overview-stats-icon teal"><StockOutlined style={{ fontSize: '16px', color: 'white' }} /></span>
                  <div className="overview-stats-info">
                    <h2 className="overview-stats-title">$510 <span className="success"><ArrowUpOutlined style={{ fontSize: '10px', color: 'rgb(60, 184, 105)' }} /> 50%</span></h2>
                    <p className="overview-stats-text">Revenue</p>
                  </div>
                </li>
                <li className="overview-stats-item">
                  <span className="overview-stats-icon cool"><ThunderboltOutlined style={{ fontSize: '16px', color: 'white' }} /></span>
                  <div className="overview-stats-info">
                    <h2 className="overview-stats-title">12.2M <span className="success"><ArrowUpOutlined style={{ fontSize: '10px', color: 'rgb(60, 184, 105)' }} /> 12%</span></h2>
                    <p className="overview-stats-text">Impressions</p>
                  </div>
                </li>
                <li className="overview-stats-item">
                  <span className="overview-stats-icon blue"><RadarChartOutlined style={{ fontSize: '16px', color: 'white' }} /></span>
                  <div className="overview-stats-info">
                    <h2 className="overview-stats-title">37.5% <span className="fail"><ArrowUpOutlined style={{ fontSize: '10px', color: 'rgb(236, 24, 75)' }} /> 12%</span></h2>
                    <p className="overview-stats-text">Fill Rate</p>
                  </div>
                </li>
                <li className="overview-stats-item">
                  <span className="overview-stats-icon dark"><DeploymentUnitOutlined style={{ fontSize: '16px', color: 'white' }} /></span>
                  <div className="overview-stats-info">
                    <h2 className="overview-stats-title">$2.4 <span className="success"><ArrowUpOutlined style={{ fontSize: '10px', color: 'rgb(60, 184, 105)' }} /> 32%</span></h2>
                    <p className="overview-stats-text">ECPM</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="overview-break">
              <div className="overview-break-line">
                <div className="overview-break-mask">
                  <span className="overview-break-icon">
                    <DownOutlined style={{ fontSize: '10px', color: 'gray' }} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Layout>
  );
}

export default OverviewComponent;
