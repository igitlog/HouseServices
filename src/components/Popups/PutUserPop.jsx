import React from 'react';
import { Popover} from 'antd';
import PutUser from '../Forms/PutUser';
import { EditOutlined } from "@ant-design/icons";



const PutUserPop = ({ props, client }) => {
  return (
    <div>
      <Popover content={<PutUser props={props} client={client} />} title="Редактирование" trigger="click">
        <EditOutlined></EditOutlined>
      </Popover>
    </div>
  );
};

export default PutUserPop;