import { SETSTREETS, SETHOUSE, SETHOUSEFLATS, SETCHOISEDSTREET, SETCHOISEDHOUSE, SETCHOISEDHOUSEFLATS, SETSTREETADDRESS, SETHOUSEADDRESS, SETFLATADDRESS } from "../types";

export function setStreetAddress(payload) {
  return {
    type: SETSTREETADDRESS,
    payload
  }
};
export function setHouseAddress(payload) {
  return {
    type: SETHOUSEADDRESS,
    payload
  }
};
export function setFlatAddress(payload) {
  return {
    type: SETFLATADDRESS,
    payload
  }
};
export function setStreet(payload) {
  return {
    type: SETSTREETS,
    payload
  }
};
export function setChoisedStreet(payload) {
  return {
    type: SETCHOISEDSTREET,
    payload
  }
};
export function setHouse(payload) {
  return {
    type: SETHOUSE,
    payload
  }
};
export function setChoisedHouse(payload) {
  return {
    type: SETCHOISEDHOUSE,
    payload
  }
};
export function setHouseFlats(payload) {
  return {
    type: SETHOUSEFLATS,
    payload
  }
};
export function setChoisedHouseFlats(payload) {
  return {
    type: SETCHOISEDHOUSEFLATS,
    payload
  }
};