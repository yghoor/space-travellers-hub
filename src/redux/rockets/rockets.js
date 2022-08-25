const RETRIEVE_ROCKETS = 'react-redux-book-store/books/RETRIEVE_ROCKETS';
const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case RETRIEVE_ROCKETS:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default reducer;

export const retrieveRockets = () => async (dispatch) => {
  const rockets = await fetch(
    'https://api.spacexdata.com/v3/rockets',
  )
    .then((response) => response.json());

  dispatch({
    type: RETRIEVE_ROCKETS,
    payload: rockets,
  });
};
