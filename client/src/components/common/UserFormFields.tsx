import React from 'react';
import { Form, Input } from 'antd';

export enum FormFields {
  EMAIL = 'email',
  PASSWORD = 'password',
}

const UserFormFields: React.FC = () => {
  return (
    <>
      <Form.Item
        label='Email'
        name={FormFields.EMAIL}
        required
        rules={[
          {
            type: 'email',
            message: 'Email address is not valid!',
          },
          {
            required: true,
            message: 'Please type your email!',
          },
        ]}
      >
        <Input placeholder='Your email...' maxLength={30} />
      </Form.Item>
      <Form.Item
        label='Password'
        name={FormFields.PASSWORD}
        required
        rules={[
          {
            required: true,
            message: 'Please type a password!',
          },
        ]}
      >
        <Input.Password placeholder='Your password...' />
      </Form.Item>
    </>
  );
};

export default UserFormFields;
