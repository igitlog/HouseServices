import React from 'react';
import { Card, Avatar} from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import PutUserPop from '../Popups/PutUserPop';
import CardDescription from './CardDescription';

const { Meta } = Card;

const UserCard = ({props,client}) => {
  const handlerDelete = () =>{
    props.deleteThisClient(client.id, client.phone);
  };

  return (
    <div>
      <Card
        style={{ width: 300 }}

        actions={[
          <DeleteOutlined onClick={handlerDelete} key="setting" />,
          <PutUserPop props={props} client={client} />
        ]}
      >
        <Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title={client.name}
          description={<CardDescription client={client}/>}
        />
      </Card>
    </div>
  );
};

export default UserCard;