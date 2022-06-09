import React from 'react';
import { Button, Form, message, Modal } from 'antd';
import UserFormFields, { FormFields } from 'components/common/UserFormFields';
import useToggle from 'hooks/useToggle';
import { useSignupMutation } from 'redux/api/apiSlice';

const SignUpModal = () => {
  const { isShown, toggleVisibility } = useToggle();
  const [form] = Form.useForm();
  const [signup] = useSignupMutation();

  const submitForm = async (values: FormFields) => {
    console.log(values[FormFields.USERNAME]);
    try {
      await signup({
        email: values[FormFields.EMAIL],
        password: values[FormFields.PASSWORD],
        username: values[FormFields.USERNAME],
      }).unwrap();
      toggleVisibility();
      message.success('You signed up, enjoy!');
    } catch (error) {
      message.error('An error occurred, please try again later.');
    }
  };

  return (
    <>
      <Button type='primary' onClick={toggleVisibility} style={{ borderRadius: 12 }}>
        Sign up
      </Button>
      <Modal visible={isShown} onCancel={toggleVisibility} footer={null} width={400}>
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
      </Modal>
    </>
  );
};

export default SignUpModal;
