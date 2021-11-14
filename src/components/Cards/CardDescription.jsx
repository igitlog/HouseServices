import React from 'react';

const CardDescription = ({ client }) => {
  return (
    <div>
      Телефон: {client.phone}
      <p>
       Почта: {client.email}
      </p>
    </div>
  );
};

export default CardDescription;