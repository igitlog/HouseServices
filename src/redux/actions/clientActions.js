import { SETCLIENTS, POSTCLIENT, PUTCLIENT, DELETECLIENT } from "../types";

export function setClients(payload) {
  return {
    type: SETCLIENTS,
    payload
  }
};
export function postClient(payload) {
  return {
    type: POSTCLIENT,
    payload
  }
};
export function deleteClient(payload) {
  return {
    type: DELETECLIENT,
    payload
  }
};
export function putClient(payload) {
  return {
    type: PUTCLIENT,
    payload
  }
};