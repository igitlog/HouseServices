import React from "react";
import Title from "../../../Title";
import UserCard from "../../../Cards/UserCard";
import AddUserPop from "../../../Popups/AddUserPop";

const Residents = ({ props }) => {
  return (
    <div style={{ margin: "25px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Title title="Жильцы" />
        <AddUserPop props={props} />
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {props.clients !== null && props.clients !== "" ? (
          props.clients.map((client) => (
            <UserCard
              key={Math.random(new Date())}
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
