import { SETSTREETS, SETHOUSE, SETHOUSEFLATS, SETCHOISEDSTREET, SETCHOISEDHOUSE, SETCHOISEDHOUSEFLATS } from "../../types";
const initialState = {
  streets: [],
  choisedStreet: null,
  houses: [],
  choisedHouse: null,
  flats: [],
  choisedFlat: null,
}
export const setAddressChoiseReducer = (state = initialState, action) => {
  switch (action.type) {
    case SETSTREETS:
      return {
        ...state,
        streets: action.payload
      }
    case SETHOUSE:
      return {
        ...state,
        houses: action.payload
      }
    case SETHOUSEFLATS:
      return {
        ...state,
        flats: action.payload
      }
    case SETCHOISEDSTREET:
      return {
        ...state,
        choisedStreet: action.payload
      }
    case SETCHOISEDHOUSE:
      return {
        ...state,
        choisedHouse: action.payload
      }
    case SETCHOISEDHOUSEFLATS:
      return {
        ...state,
        choisedFlat: action.payload
      }
    default:
      return state;
  }
}