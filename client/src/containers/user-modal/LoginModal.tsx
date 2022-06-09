import React from 'react';
import { Button, Form, message, Modal } from 'antd';
import UserFormFields, { FormFields } from 'components/common/UserFormFields';
import useToggle from 'hooks/useToggle';
import { useLoginMutation } from 'redux/api/apiSlice';

const LoginModal = () => {
  const { isShown, toggleVisibility } = useToggle();
  const [form] = Form.useForm();
  const [login] = useLoginMutation();

  const submitForm = async (values: FormFields) => {
    try {
      await login({
        email: values[FormFields.EMAIL],
        password: values[FormFields.PASSWORD],
      }).unwrap();
      console.log(values);
      toggleVisibility();
      message.success('Logged in successfully. Welcome!');
    } catch (error) {
      message.error('An error occurred, please try again later.');
    }
  };

  return (
    <>
      <Button type='link' onClick={toggleVisibility}>
        Login
      </Button>
      <Modal visible={isShown} onCancel={toggleVisibility} footer={null} width={400}>
        <Form form={form} layout='vertical' requiredMark={true} onFinish={submitForm}>
          <UserFormFields />
          <Form.Item style={{ textAlign: 'end', margin: 0 }}>
            <Button type='primary' htmlType='submit'>
              Login
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default LoginModal;
