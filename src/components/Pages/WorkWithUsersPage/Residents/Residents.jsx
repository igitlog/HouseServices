import React from "react";
import Title from "components/Title";
import UserCard from "components/Cards/UserCard";
import AddUserPop from "components/Popups/AddUserPop.jsx";
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
