import React from "react";
import Title from "../../../Title";
import UserCard from "../../../Cards/UserCard";
import AddUserPop from "../../../Popups/AddUserPop";
import "./ResidentsStyle.css";

const Residents = ({ props }) => {
  console.log(props);
  return (
    <div className="residents-wrapper">
      <div className="title-wrapper">
        <Title title="Жильцы" />
        <AddUserPop props={props} />
      </div>
      <div className="residentsCard-wrapper">
        {props.clients !== null && props.clients !== "" ? (
          props.clients.map((client) => (
            <UserCard
              key={client.id}
              props={props}
              client={client}
            />
          ))
        ) : (
          <Title title='Пока что "ТУТ" никого нет! На сервере данные есть не везде. Для получения данных с сервера необходимо ввести: Федюнинского(все корпуса)+(выбирать квартиры, а не подъезды или дом)' />
        )}
      </div>
    </div>
  );
};

export default Residents;
