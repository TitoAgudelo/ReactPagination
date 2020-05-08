import React from 'react';
import { Row, Col } from 'antd';
import { Typography } from 'antd';

import useStoryData from '../Hooks/useStoryData';

const { Text } = Typography;

const StoryComponent = ({ storyId }) => {
  const { currentStory } = useStoryData(storyId);

  return (currentStory && currentStory.id === storyId) ? (
    <Row justify="center" style={{ padding: '1rem 0', borderBottom: '1px solid rgb(217, 222, 230)' }}>
      <Col span={2}>
        <Text style={{ color: '#2a13bd', padding: '0 1rem', display: 'flex' }}>{currentStory.by}</Text>
      </Col>
      <Col span={6}>
        <Text style={{ color: '#2a13bd', padding: '0 1rem', display: 'flex' }}>{currentStory.title}</Text>
      </Col>
      <Col span={1}>
        <Text style={{ color: '#2a13bd', padding: '0 1rem', display: 'flex' }}>{currentStory.score}</Text>
      </Col>
      <Col span={3}>
        <Text style={{ color: '#2a13bd', padding: '0 1rem', display: 'flex' }}>{currentStory.descendants}</Text>
      </Col>
      <Col span={2}>
        <Text style={{ color: '#2a13bd', padding: '0 1rem', display: 'flex' }}>{currentStory.time}</Text>
      </Col>
      <Col span={10}>
        <Text style={{ color: '#2a13bd', padding: '0 1rem', display: 'flex' }}>{currentStory.url}</Text>
      </Col>
    </Row>
  ) : '';
}

export default StoryComponent;
