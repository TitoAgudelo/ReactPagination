export const types = {
  SET_PAGINATION: 'SET_PAGINATION',
  SET_TOTAL_PAGINATION: 'SET_TOTAL_PAGINATION',
  FETCH_CURRENT_STORY: 'FETCH_CURRENT_STORY',
  FETCH_STORY_FAILED: 'FETCH_STORY_FAILED',
};

export const initialState = {
  currentStory: {},
  pagination: 1,
  totalPage: 0,
  isLoading: false,
  error: null,
};

export const storyReducer = (state, action) => {
  return action.type === types.SET_PAGINATION
    ? { ...state, pagination: action.payload }
    : action.type === types.SET_TOTAL_PAGINATION
    ? { ...state, totalPage: action.payload }
    : action.type === types.FETCH_CURRENT_STORY
    ? { ...state, isLoading: false, error: null, currentStory: action.payload }
    : action.type === types.FETCH_STORY_FAILED
    ? { ...state, isLoading: false, error: action.payload }
    : state;
};
  