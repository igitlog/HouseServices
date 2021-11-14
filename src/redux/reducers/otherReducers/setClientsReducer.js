import { SETCLIENTS, POSTCLIENT, DELETECLIENT, PUTCLIENT } from "../../types";

const initialState = {
  clients: null,
};
export const setClientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SETCLIENTS:
      return {
        ...state,
        clients: action.payload
      }
    case POSTCLIENT:
      return {
        ...state,
        clients: [...state.clients, action.payload]
      }
    case PUTCLIENT:
      return {
        ...state,
        clients: state.clients.map((client) => {
          if (client.id === action.payload.id) {
            return action.payload;
          }
          return client;
        })
      }
    case DELETECLIENT:
      return {
        ...state,
        clients: state.clients.filter(client => {
          if (client.phone !== action.payload) {
            return client;
          }
        })
      }

    default:
      return state;
  }
}