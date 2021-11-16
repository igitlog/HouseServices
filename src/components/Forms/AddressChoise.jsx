import React from "react";
import { AutoComplete } from "antd";
import Title from "../Title";

const AddressChoise = ({ props }) => {
  function choisedStreet(street) {
    if (street) {
      const changeStreet = props.streets.find((el) => el.name === street);
      if (changeStreet) {
        const changeStreetId = changeStreet.id;
        props.setChoisedStreet(changeStreetId);
        props.setChoisedHouse(null);
        props.setChoisedHouseFlats(null);
        props.setStreetAddress(changeStreet.name);
      }
    }
  }
  function choisedHouse(house) {
    if (house) {
      const changeHouse = props.houses.find((el) => el.name == house);
      if (changeHouse) {
        const changeHouseId = changeHouse.id;
        props.setChoisedHouse(changeHouseId);
        props.setChoisedHouseFlats(null);
        props.setHouseAddress(changeHouse.name);
      }
    }
  }

  function choisedHouseFlat(flat) {
    if (flat) {
      const changeFlat = props.flats.find((el) => el.name == flat);
      if (changeFlat) {
        const changeFlatId = changeFlat.id;
        props.setChoisedHouseFlats(changeFlatId);
        props.setFlatAddress(changeFlat.name);
      }
    }
  }

  return (
    <>
      <Title title="Введите адрес" />
      <AutoComplete
        style={{
          width: 200,
        }}
        onChange={choisedStreet}
        options={props.streets}
        placeholder="Улица"
        filterOption={(inputValue, option) =>
          option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
        }
      />
      {props.choisedStreet === null ? (
        "←Введите улицу"
      ) : (
        <AutoComplete
          style={{
            width: 200,
          }}
          onChange={choisedHouse}
          options={props.houses}
          value={""}
          placeholder="Дом"
          filterOption={(inputValue, option) =>
            option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
          }
        />
      )}
      {props.choisedHouse !== null ? (
        <AutoComplete
          style={{
            width: 200,
          }}
          onChange={choisedHouseFlat}
          options={props.flats}
          value={""}
          placeholder="Квартира"
          filterOption={(inputValue, option) =>
            option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
          }
        />
      ) : props.choisedStreet !== null ? (
        "←Выберите дом"
      ) : (
        ""
      )}
      {props.choisedFlat === null && props.choisedHouse !== null
        ? "←Выберите квартиру"
        : ""}
    </>
  );
};

export default AddressChoise;
