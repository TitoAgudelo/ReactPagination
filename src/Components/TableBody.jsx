import React from 'react';
import { Layout } from 'antd';
import { Pagination } from 'antd';

import { useStateStories, useSetStories } from '../Providers/StoriesProvider/StoriesProvider';
import StoryComponent from './Story';

import './overview.scss';

const TableBodyComponent = () => {
  const { currentStoriesId, pagination, totalPage } = useStateStories();
  const { handlePagination } = useSetStories();

  const onChange = page => {
    handlePagination(page);
  };

  return (
    <Layout style={{ backgroundColor: '#ffffff' }}>
      { currentStoriesId.length ? currentStoriesId.map((story, index) => {
          return (<StoryComponent key={index} storyId={story} />)
        }
      ) : '' }
      { 
        pagination && totalPage ? (
          <div className="pagination">
            <Pagination defaultPageSize={5} showSizeChanger={false} current={pagination} onChange={onChange} total={totalPage} /> 
          </div>
        ): ''
      }
    </Layout>
  );
}

export default TableBodyComponent;
