import React from 'react';
import { Popover, Button } from 'antd';
import PutUser from '../Forms/PutUser';



const PutUserPop = ({ props, client }) => {
  console.log(props, client);
  return (
    <div>
      <Popover content={<PutUser props={props} client={client} />} title="Редактирование" trigger="click">
        <Button>Редактировать</Button>
      </Popover>,
    </div>
  );
};

export default PutUserPop;