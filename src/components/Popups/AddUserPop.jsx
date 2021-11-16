import { Button, Popover } from 'antd';
import React from 'react';
import AddUser from '../Forms/AddUser';


const AddUserPop = ({ props }) => {
  return (
    <div>
      <Popover placement="bottom" content={<AddUser props={props} />} title="Добавить" trigger="click">
        <Button>Добавить жильца</Button>
      </Popover>
    </div>
  );
};

export default AddUserPop;