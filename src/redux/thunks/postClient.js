import { HousingStockAPI } from "../../api/api"
import { postClient } from "../actions/clientActions"

export const postNewClient = (client) => (dispatch) => {
  dispatch(postClient(client));
  HousingStockAPI.postClient(client);
};