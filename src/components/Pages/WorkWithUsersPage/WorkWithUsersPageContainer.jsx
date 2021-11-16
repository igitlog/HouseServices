import React, { useEffect } from "react";
import { connect } from "react-redux";
import WorkWithUsersPage from "./WorkWithUsersPage";
import { getStreets } from "../../../redux/middleware/thunk/getStreets";
import { getHouse } from "../../../redux/middleware/thunk/getHouse";
import { getClients } from "../../../redux/middleware/thunk/getClients";
import { postNewClient } from "../../../redux/middleware/thunk/postClient";
import { deleteThisClient } from "../../../redux/middleware/thunk/deleteClient";
import { putThisClient } from "../../../redux/middleware/thunk/putClient";
import { getHouseFlats } from "../../../redux/middleware/thunk/getHouseFlats";
import { setChoisedStreet } from "../../../redux/actions/addressFormActions";
import { setChoisedHouse } from "../../../redux/actions/addressFormActions";
import { setChoisedHouseFlats } from "../../../redux/actions/addressFormActions";

export const WorkWithUsersPageContainer = (props) => {
  useEffect(() => {
    props.getStreets();
  }, []);
  useEffect(() => {
    props.getHouse(props.choisedStreet);
  }, [props.choisedStreet]);
  useEffect(() => {
    props.getHouseFlats(props.choisedHouse);
  }, [props.choisedHouse]);

  useEffect(() => {
    props.getClients(props.choisedFlat);
  }, [props.choisedFlat]);

  return <WorkWithUsersPage props={props} />;
};
let mstp = (state) => {
  return {
    streets: state.setAddressChoiseReducer.streets,
    choisedStreet: state.setAddressChoiseReducer.choisedStreet,
    houses: state.setAddressChoiseReducer.houses,
    choisedHouse: state.setAddressChoiseReducer.choisedHouse,
    flats: state.setAddressChoiseReducer.flats,
    choisedFlat: state.setAddressChoiseReducer.choisedFlat,
    clients: state.setClientsReducer.clients,
  };
};

export default connect(mstp, {
  setChoisedStreet,
  setChoisedHouse,
  setChoisedHouseFlats,
  getStreets,
  getHouse,
  getHouseFlats,
  getClients,
  postNewClient,
  deleteThisClient,
  putThisClient,
})(WorkWithUsersPageContainer);
