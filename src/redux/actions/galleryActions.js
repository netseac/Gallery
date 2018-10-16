import { GET_ITEMS } from './types';

const clientID = 'cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0';

export const getItems = () => async dispatch => {
  const response = await fetch(`https://api.unsplash.com/photos/?client_id=${clientID}`);
  const data = await response.json();

  dispatch({
    type: GET_ITEMS,
    payload: data
  })
}