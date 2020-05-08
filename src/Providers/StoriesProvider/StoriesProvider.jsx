import React, { createContext, useReducer, useContext, useEffect } from 'react';
import { types, storiesReducer, initialState } from './state';
import useStories from '../../Hooks/useStories';
import useStoryData from '../../Hooks/useStoryData';

export const StoriesStateContext = createContext();
export const StoriesSetContext = createContext();

export const useStateStories = () => useContext(StoriesStateContext);
export const useSetStories = () => useContext(StoriesSetContext);

const StoriesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(storiesReducer, initialState);
  const { stories } = useStories();

  const getTotalPage = () => Math.ceil(stories / 5);

  const paginate = (array, page_size, page_number) => {
    return array.slice((page_number - 1) * page_size, page_number * page_size);
  };

  const handlePagination = (pag) => {
    dispatch({ type: types.SET_PAGINATION, payload: pag });
    // const loadId = paginate(stories, 5, pag);
    // const { currentStories } = useStoryData(loadId);
    // dispatch({ type: types.FETCH_CURRENT_STORY, payload: currentStories });
  };

  useEffect(() => {
    if (stories) {
      const totalPage = getTotalPage();
      const initialLoadId = paginate(stories, 5, 1);
      const { currentStories } = useStoryData(initialLoadId);
      dispatch({ type: types.FETCH_TOP_STORIES, payload: stories });
      dispatch({ type: types.SET_TOTAL_PAGINATION, payload: totalPage });
      dispatch({ type: types.FETCH_CURRENT_STORY, payload: currentStories });
    }
  }, [stories]);

  return (
    <StoriesStateContext.Provider value={state}>
      <StoriesSetContext.Provider
        value={{
          handlePagination
        }}>
        {children}
      </StoriesSetContext.Provider>
    </StoriesStateContext.Provider>
  );
};

export default StoriesProvider;
