import React, { createContext, useReducer, useContext, useEffect } from 'react';
import { types, storiesReducer, initialState } from './state';
import useStories from '../../Hooks/useStories';

export const StoriesStateContext = createContext();
export const StoriesSetContext = createContext();

export const useStateStories = () => useContext(StoriesStateContext);
export const useSetStories = () => useContext(StoriesSetContext);

const StoriesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(storiesReducer, initialState);
  const { stories, pages } = useStories();

  const paginate = (array, page_size, page_number) => {
    return array.slice((page_number - 1) * page_size, page_number * page_size);
  };

  const handlePagination = (pag) => {
    const loadId = paginate(stories, 5, pag);

    dispatch({ type: types.SET_PAGINATION, payload: pag });
    dispatch({ type: types.SET_CURRENT_STORIES_ID, payload: loadId });
  };

  useEffect(() => {
    if (stories.length) {
      const initialLoadId = paginate(stories, 5, 1);

      dispatch({ type: types.FETCH_TOP_STORIES, payload: stories });
      dispatch({ type: types.SET_CURRENT_STORIES_ID, payload: initialLoadId });
    }
    if (pages) {
      dispatch({ type: types.SET_TOTAL_PAGINATION, payload: pages });
    }
  }, [stories, pages]);

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
