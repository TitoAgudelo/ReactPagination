export const types = {
  SET_PAGINATION: 'SET_PAGINATION',
  SET_TOTAL_PAGINATION: 'SET_TOTAL_PAGINATION',
  SET_CURRENT_STORIES_ID: 'SET_CURRENT_STORIES_ID',
  FETCH_TOP_STORIES: 'FETCH_TOP_STORIES',
  FETCH_STORY_FAILED: 'FETCH_STORY_FAILED',
};

export const initialState = {
  storiesId: [],
  currentStoriesId: [],
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
    : action.type === types.FETCH_STORY_FAILED
    ? { ...state, isLoading: false, error: action.payload }
    : action.type === types.SET_CURRENT_STORIES_ID
    ? { ...state, currentStoriesId: action.payload }
    : state;
};
