import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://dispex.org/api/vtest/',
  headers: {
    Authorization: `Bearer FGkjretugFKJDShgfjhkDKFUHkjgkgriruygVDShsdfkuywkeurhDFBJHVJ`
  }
});

export const HousingStockAPI = {
  getClients(addressId) {
    return instance.get(`HousingStock/clients?addressId=${addressId}`)
      .then(response => {
        return response.data;
      })
  },
  postClient(client) {
    return instance.post('HousingStock/client', client)
      .then(response => {
        return response;
      })
  },
  deleteClient(id) {
    return instance.delete(`HousingStock/account/${id}`)
      .then(response => {
        return response;
      })
  },
  putClient(AddressId, ClientId) {
    return instance.put('HousingStock/bind_client',
      {
        "AddressId": 1,
        "ClientId": 2
      })
      .then(response => {
        return response;
      })
  },
}

export const RequestAPI = {
  getStreets() {
    return instance.get('Request/streets')
      .then(response => {
        return response.data;
      })
  },
  getHouse(id) {
    return instance.get(`Request/houses/${id}`)
      .then(response => {
        return response;
      })
  },
  getHouseFlats(id) {
    return instance.get(`Request/house_flats/${id}`)
      .then(response => {
        return response.data;
      })
  }
}

