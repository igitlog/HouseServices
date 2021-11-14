import React, { useState, useEffect } from 'react';
import { AutoComplete } from 'antd';
import Title from '../Title';

const AddressChoise = ({ props }) => {
  function choisedStreet(street) {
    if (street) {
      console.log(`selected ${street}`);
      const ChangeStreet = props.streets.find((el) => el.name == street);
      if (ChangeStreet) {
        const ChangeStreetId = ChangeStreet.id;
        props.setChoisedStreet(ChangeStreetId);
      }
    }
  };
  function choisedHouse(house) {
    if (house) {
      console.log(`selected ${house}`);
      const ChangeHouse = props.houses.find((el) => el.name == house);
      if (ChangeHouse) {
        const ChangeHouseId = ChangeHouse.id;
        props.setChoisedHouse(ChangeHouseId);
      }
    }
  };
  function choisedHouseFlat(flat) {
    if (flat) {
      console.log(`selected ${flat}`);
      const ChangeFlat = props.flats.find((el) => el.name == flat);
      if (ChangeFlat) {
        const ChangeFlatId = ChangeFlat.id;
        props.setChoisedHouseFlats(ChangeFlatId);
      }
    }
  };

  return (
    <>
      <Title title="Введите адрес" />
      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <AutoComplete
          style={{
            width: 200,
          }}

          onChange={choisedStreet}

          options={props.streets}
          placeholder="Выбрать улицу"
          filterOption={(inputValue, option) =>
            option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
          }
        />
        <AutoComplete
          style={{
            width: 200,
          }}

          onChange={choisedHouse}

          options={props.houses}
          placeholder="Выбрать дом"
          filterOption={(inputValue, option) =>
            option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
          }
        />
        <AutoComplete
          style={{
            width: 200,
          }}

          onChange={choisedHouseFlat}

          options={props.flats}
          placeholder="Выбрать квартиру"
          filterOption={(inputValue, option) =>
            option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
          }
        />
      </div>
    </>
  );
};

export default AddressChoise;