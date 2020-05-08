export const types = {
  SET_PAGINATION: 'SET_PAGINATION',
  SET_TOTAL_PAGINATION: 'SET_TOTAL_PAGINATION',
  FETCH_TOP_STORIES: 'FETCH_TOP_STORIES',
  FETCH_CURRENT_STORY: 'FETCH_CURRENT_STORY',
  FETCH_STORY_FAILED: 'FETCH_STORY_FAILED',
};

export const initialState = {
  storiesId: [],
  currentStories: [],
  pagination: 1,
  totalPage: 0,
  isLoading: false,
  error: null,
};

export const storiesReducer = (state, action) => {
  return action.type === types.SET_PAGINATION
    ? { ...state, pagination: action.payload }
    : action.type === types.SET_TOTAL_PAGINATION
    ? { ...state, totalPage: action.payload }
    : action.type === types.FETCH_TOP_STORIES
    ? { ...state, isLoading: false, error: null, storiesId: action.payload }
    : action.type === types.FETCH_CURRENT_STORY
    ? { ...state, isLoading: false, error: null, currentStories: action.payload }
    : action.type === types.FETCH_STORY_FAILED
    ? { ...state, isLoading: false, error: action.payload }
    : state;
};
