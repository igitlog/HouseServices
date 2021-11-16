import { HousingStockAPI } from "../../api/api"
import { deleteClient } from "../actions/clientActions"

export const deleteThisClient = (id, phone) => (dispatch) => {
  dispatch(deleteClient(phone));
  HousingStockAPI.deleteClient(id);
};