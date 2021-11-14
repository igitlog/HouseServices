import { HousingStockAPI } from "../../../api/api"
import { setClients } from "../../actions/clientActions"

export const getClients = (id) => (dispatch) => {
  if (id) {
    HousingStockAPI.getClients(id)
      .then(clients => {
        dispatch(setClients(clients))
      })
  };
};