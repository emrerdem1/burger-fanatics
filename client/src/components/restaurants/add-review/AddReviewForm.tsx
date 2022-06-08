import React from 'react';
import { HeartOutlined, SmileOutlined } from '@ant-design/icons';
import { Button, Form, Input, Rate } from 'antd';
import UploadImageInput from './UploadImageInput';

enum FormItemNames {
  PHOTO = 'photo',
  COMMENT = 'comment',
  RATING_TASTE = 'rating_taste',
  RATING_VISUAL = 'rating_visual',
  RATING_TEXTURE = 'rating_texture',
}

interface IAddReviewFormProps {
  cancelModal: () => void;
}

const AddReviewForm: React.FC<IAddReviewFormProps> = ({ cancelModal }) => {
  const imageRef = React.useRef<HTMLInputElement | null>(null);
  const [form] = Form.useForm();

  const saveReview = (values: FormItemNames) => {
    console.log(imageRef.current);
    console.log('Received values of form: ', values);
    cancelModal();
    form.resetFields();
  };

  return (
    <Form
      form={form}
      onFinish={saveReview}
      name='add-review-form'
      autoComplete='off'
      requiredMark={false}
    >
      <Form.Item
        name={FormItemNames.COMMENT}
        rules={[{ required: true, message: 'Please write your review here.' }]}
      >
        <Input.TextArea
          showCount
          rows={6}
          maxLength={500}
          style={{ maxHeight: 200 }}
          placeholder='Write your opinions here...'
        ></Input.TextArea>
      </Form.Item>
      <Form.Item
        name={FormItemNames.RATING_TASTE}
        label='Taste'
        style={{ margin: 0 }}
        rules={[{ required: true, message: 'Please rate the taste.' }]}
      >
        <Rate allowClear={false} />
      </Form.Item>
      <Form.Item
        name={FormItemNames.RATING_VISUAL}
        label='Visual'
        style={{ margin: 0 }}
        rules={[{ required: true, message: 'Please rate the visual.' }]}
      >
        <Rate character={<SmileOutlined />} allowClear={false} />
      </Form.Item>
      <Form.Item
        name={FormItemNames.RATING_TEXTURE}
        label='Texture'
        style={{ marginTop: 0 }}
        rules={[{ required: true, message: 'Please rate the texture.' }]}
      >
        <Rate character={<HeartOutlined />} allowClear={false} />
      </Form.Item>
      <UploadImageInput ref={imageRef} />
      <Form.Item wrapperCol={{ offset: 20 }} style={{ margin: 0 }}>
        <Button type='primary' htmlType='submit'>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddReviewForm;
