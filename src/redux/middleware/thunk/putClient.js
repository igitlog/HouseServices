import { HousingStockAPI } from "../../../api/api"
import { putClient } from "../../actions/clientActions"

export const putThisClient = (client) => (dispatch) => {
  dispatch(putClient(client));
  HousingStockAPI.putClient(client);
};