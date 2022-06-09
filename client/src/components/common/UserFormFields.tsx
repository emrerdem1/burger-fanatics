import React from 'react';
import { Form, Input } from 'antd';

export enum FormFields {
  EMAIL = 'email',
  USERNAME = 'username',
  PASSWORD = 'password',
}

interface IUserFormFieldsProps {
  hasUsername?: boolean;
}

const UserFormFields: React.FC<IUserFormFieldsProps> = ({ hasUsername }) => {
  return (
    <>
      {hasUsername && (
        <Form.Item
          label='Username'
          name={FormFields.USERNAME}
          required
          rules={[
            {
              required: true,
              message: 'Please type an username.',
            },
          ]}
        >
          <Input placeholder='Your username...' maxLength={20} />
        </Form.Item>
      )}
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
        <Input placeholder='Your email...' maxLength={50} />
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
        <Input.Password placeholder='Your password...' minLength={6} />
      </Form.Item>
    </>
  );
};

export default UserFormFields;
