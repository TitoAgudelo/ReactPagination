import React, { createContext, useReducer, useContext, useEffect } from 'react';
import { types, storyReducer, initialState } from './state';
import useStoryData from '../../Hooks/useStoryData';

export const StoryStateContext = createContext();
export const StorySetContext = createContext();

export const useStateStory = () => useContext(StoryStateContext);
export const useSetStory = () => useContext(StorySetContext);

const StoryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(storyReducer, initialState);
  const storyId = '23097459';
  const { currentStory } = useStoryData('23097459');

  useEffect(() => {
    if (currentStory) {
      dispatch({ type: types.FETCH_CURRENT_STORY, payload: currentStory });
    }
  }, [storyId]);

  return (
    <StoryStateContext.Provider value={state}>
      <StorySetContext.Provider
        value={{}}>
        {children}
      </StorySetContext.Provider>
    </StoryStateContext.Provider>
  );
};

export default StoryProvider;
