import React from 'react';
import { Row, Col, Layout } from 'antd';
import { Typography } from 'antd';

import { useStateStories, useSetStories } from '../Providers/StoriesProvider/StoriesProvider';

import './overview.scss';

const { Text } = Typography;

const TableBodyComponent = () => {
  const { storiesId, currentStories } = useStateStories();

  return (
    <Layout style={{ backgroundColor: '#ffffff' }}>
      { currentStories.map((story, index) => {
        return ( 
          <Row justify="center" key={story.descendants + '' + index} style={{ padding: '1rem 0', borderBottom: '1px solid rgb(217, 222, 230)' }}>
            <Col span={2}>
              <Text style={{ color: '#2a13bd', padding: '0 1rem' }}>{story.by}</Text>
            </Col>
            <Col span={6}>
              <Text style={{ color: '#2a13bd', padding: '0 1rem' }}>{story.title}</Text>
            </Col>
            <Col span={1}>
              <Text style={{ color: '#2a13bd', padding: '0 1rem' }}>{story.score}</Text>
            </Col>
            <Col span={3}>
              <Text style={{ color: '#2a13bd', padding: '0 1rem' }}>{story.descendants}</Text>
            </Col>
            <Col span={2}>
              <Text style={{ color: '#2a13bd', padding: '0 1rem' }}>{new Date(story.time)}</Text>
            </Col>
            <Col span={10}>
              <Text style={{ color: '#2a13bd', padding: '0 1rem' }}>{story.url}</Text>
            </Col>
          </Row>
        )}
      )}
    </Layout>
  );
}

export default TableBodyComponent;
