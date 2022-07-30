import React from 'react';
import { Button, Form, message } from 'antd';
import UserFormFields, { FormFields } from 'components/common/UserFormFields';
import { useSignupMutation } from 'redux/api/apiSlice';
import ModalWithoutFooter from 'features/ModalWithoutFooter';

const SignUpModal = () => {
  const [form] = Form.useForm();
  const [signup] = useSignupMutation();

  const submitForm = async (values: FormFields) => {
    try {
      await signup({
        email: values[FormFields.EMAIL],
        password: values[FormFields.PASSWORD],
        username: values[FormFields.USERNAME],
      }).unwrap();
      message.success('You signed up, enjoy!');
    } catch (error) {
      message.error('An error occurred, please try again later.');
    }
  };

  return (
    <ModalWithoutFooter
      button={
        <Button type='primary' style={{ borderRadius: 12 }}>
          Sign up
        </Button>
      }
      width={400}
    >
      <Form
        form={form}
        layout='vertical'
        requiredMark={true}
        onFinish={submitForm}
        autoComplete='off'
      >
        <UserFormFields hasUsername />
        <Form.Item style={{ textAlign: 'center', margin: 0 }}>
          <Button type='primary' htmlType='submit' style={{ width: 100 }}>
            Sign up
          </Button>
        </Form.Item>
      </Form>
    </ModalWithoutFooter>
  );
};

export default SignUpModal;
