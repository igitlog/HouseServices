import React, { useEffect } from "react";
import { connect } from "react-redux";
import WorkWithUsersPage from "./WorkWithUsersPage";
import { getStreets } from "../../../redux/thunks/getStreets";
import { setStreetAddress } from "../../../redux/actions/addressFormActions";
import { setHouseAddress } from "../../../redux/actions/addressFormActions";
import { setFlatAddress } from "../../../redux/actions/addressFormActions";
import { getHouse } from "../../../redux/thunks/getHouse";
import { getClients } from "../../../redux/thunks/getClients";
import { postNewClient } from "../../../redux/thunks/postClient";
import { deleteThisClient } from "../../../redux/thunks/deleteClient";
import { putThisClient } from "../../../redux/thunks/putClient";
import { getHouseFlats } from "../../../redux/thunks/getHouseFlats";
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
    address: state.setAddressChoiseReducer.address,
  };
};

export default connect(mstp, {
  setChoisedStreet,
  setChoisedHouse,
  setChoisedHouseFlats,
  setStreetAddress,
  setHouseAddress,
  setFlatAddress,
  getStreets,
  getHouse,
  getHouseFlats,
  getClients,
  postNewClient,
  deleteThisClient,
  putThisClient,
})(WorkWithUsersPageContainer);
