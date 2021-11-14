import React from 'react';
import { Form, Input, Button } from 'antd';


const validateMessages = {
  required: '${label} обязателен!',
  types: {
    email: '${label} заполнен неправильно!',
  },
};

const AddUser = ({ props }) => {
  const onFinish = (client) => {
    props.postNewClient(client)
  };

  return (
    <div>
      <Form style={{ display: "flex" }} className="adduser-form" name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
        <Form.Item style={{ paddingRight: "5px" }}
          name={['name']}
          label="ФИО"
        >
          <Input />
        </Form.Item>
        <Form.Item style={{ paddingRight: "5px" }}
          name={['phone']}
          label="Номер телефона"
          rules={[{
            required: true,
            message: 'после 8-ки должно быть 10 цифр',
            pattern: new RegExp(/^[0-9]{10}$/),
          }]}
        >
          <Input addonBefore={8} style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item style={{ paddingRight: "5px" }}
          name={['email']}
          label="Email"
          rules={[
            {
              type: 'email',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item style={{ display: "none" }}
          name={['id']}
          label="id"
          initialValue={Math.random(new Date())}
        >
          <Input />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Добавить
        </Button>
      </Form>
    </div>
  );
};

export default AddUser;