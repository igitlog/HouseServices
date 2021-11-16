import { RequestAPI } from "../../api/api"
import { setHouseFlats } from "../actions/addressFormActions";

export const getHouseFlats = (id) => (dispatch) => {
  RequestAPI.getHouseFlats(id)
    .then(flats => {
      flats.map((flat => flat.value = flat.name)).filter((flat) => flat.typeName === 'Квартира');
      dispatch(setHouseFlats(flats));
    });
};