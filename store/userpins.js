import axios from 'axios';
import {ngrokSecret} from '../secrets'

const GET_ALL_PINS = 'GET_ALL_PINS';



const getAllPins = (pins) => ({
  type: GET_ALL_PINS,
  pins
});



export const getAllPinsThunk = (pin) => async dispatch => {
  try {
    const res = await axios.get(`${ngrokSecret}/api/userPins/`, pin);
    dispatch(getAllPins(res.data));
  }
  catch (err) {
    console.error(err);
  }
};



const defaultState = [];

export default function(state = defaultState, action) {

  switch(action.type) {
    case GET_ALL_PINS:
      return action.pins;
    default:
      return state;
  }
}
