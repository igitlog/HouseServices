import { RequestAPI } from "../../../api/api"
import { setStreet } from "../../actions/addressFormActions"

export const getStreets = () => (dispatch) => {
  RequestAPI.getStreets()
    .then(streets => {
      streets.map((street) => street.value = street.name);
      dispatch(setStreet(streets));
    });
};