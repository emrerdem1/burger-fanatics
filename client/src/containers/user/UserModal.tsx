import { Button, Form, message, Modal } from 'antd';
import UserFormFields, { FormFields } from 'components/common/UserFormFields';
import React from 'react';

interface IUserModalProps {
  submitText: string;
}

const UserModalView: React.FC<IUserModalProps> = ({ submitText }) => {
  const [isModalShown, setIsModalShown] = React.useState<boolean>(false);
  const [form] = Form.useForm();

  const submitForm = (values: FormFields) => {
    setIsModalShown(false);
    message.success('Logged in successfully. Welcome!');
  };

  return (
    <Modal visible={isModalShown} onCancel={() => setIsModalShown(false)} footer={null} width={400}>
      <Form form={form} layout='vertical' requiredMark={true} onFinish={submitForm}>
        <UserFormFields />
        <Form.Item style={{ textAlign: 'end', margin: 0 }}>
          <Button type='primary' htmlType='submit'>
            {submitText}
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default UserModalView;
