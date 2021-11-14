import { RequestAPI } from "../../../api/api"
import { setHouse } from "../../actions/addressFormActions"

export const getHouse = (id) => (dispatch) => {
  RequestAPI.getHouse(id)
    .then(houses => {
      houses.data.map((house) => house.value = house.name);
      dispatch(setHouse(houses.data));
    });
};