import React from "react";
import { Form, Input, Button } from "antd";

const validateMessages = {
  required: "${label} обязателен!",
  types: {
    email: "${label} заполнен неправильно!",
  },
};

const PutUser = ({ props, client }) => {
  const onFinish = (client) => {
    props.putThisClient(client);
    console.log(client, props);
  };

  return (
    <div>
      <Form
        style={{ display: "flex" }}
        className="adduser-form"
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item style={{ paddingRight: "5px" }} name={["name"]} label="ФИО">
          <Input />
        </Form.Item>
        <Form.Item
          style={{ paddingRight: "5px" }}
          name={["phone"]}
          label="Номер телефона"
          rules={[
            {
              required: true,
              message: "после 8-ки должно быть 10 цифр",
              pattern: new RegExp(/^[0-9]{10}$/),
            },
          ]}
        >
          <Input addonBefore={8} style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item
          style={{ paddingRight: "5px" }}
          name={["email"]}
          label="Email"
          rules={[
            {
              type: "email",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          style={{ display: "none" }}
          name={["id"]}
          label="id"
          initialValue={client.id}
        >
          <Input />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Изменить
        </Button>
      </Form>
    </div>
  );
};

export default PutUser;
