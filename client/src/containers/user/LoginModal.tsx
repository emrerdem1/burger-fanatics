import React, { useCallback } from 'react';
import { Button, Form, message } from 'antd';
import UserFormFields, { FormFields } from 'components/common/UserFormFields';
import { useLoginMutation } from 'redux/api/apiSlice';
import ModalWithoutFooter from 'features/ModalWithoutFooter';

const LoginModal = () => {
  const [form] = Form.useForm();
  const [login] = useLoginMutation();

  const submitForm = useCallback(async (values: FormFields) => {
    try {
      await login({
        identifier: values[FormFields.EMAIL],
        password: values[FormFields.PASSWORD],
      }).unwrap();
      message.success('Logged in successfully. Welcome!');
    } catch (error) {
      message.error('An error occurred, please try again later.');
    }
  }, []);

  return (
    <ModalWithoutFooter button={<Button type='link'>Login</Button>} width={400}>
      <Form form={form} layout='vertical' requiredMark={true} onFinish={submitForm}>
        <UserFormFields />
        <Form.Item style={{ textAlign: 'end', margin: 0 }}>
          <Button type='primary' htmlType='submit'>
            Login
          </Button>
        </Form.Item>
      </Form>
    </ModalWithoutFooter>
  );
};

export default LoginModal;
