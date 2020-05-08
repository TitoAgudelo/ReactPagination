import React from 'react';
import { Row, Col, Layout } from 'antd';
import { Typography } from 'antd';

import './overview.scss';

const { Text } = Typography;

const TableHeaderComponent = () => {
  return (
    <Layout style={{ padding: '0 0 1rem 0', backgroundColor: '#f6f6f6' }}>
      <Row justify="center">
        <Col span={2}>
          <Text strong style={{ color: '#020202', padding: '0 1rem' }}>Author</Text>
        </Col>
        <Col span={6}>
          <Text strong style={{ color: '#020202', padding: '0 1rem' }}>Title</Text>
        </Col>
        <Col span={1}>
          <Text strong style={{ color: '#020202', padding: '0 1rem' }}>Score</Text>
        </Col>
        <Col span={3}>
          <Text strong style={{ color: '#020202', padding: '0 1rem' }}>Comments count</Text>
        </Col>
        <Col span={2}>
          <Text strong style={{ color: '#020202', padding: '0 1rem' }}>Time</Text>
        </Col>
        <Col span={10}>
          <Text strong style={{ color: '#020202', padding: '0 1rem' }}>Url</Text>
        </Col>
      </Row>
    </Layout>
  );
}

export default TableHeaderComponent;
