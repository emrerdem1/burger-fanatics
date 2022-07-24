import React, { useRef } from 'react';
import { HeartOutlined, SmileOutlined } from '@ant-design/icons';
import { Button, Form, Input, message, Rate } from 'antd';
import UploadImageInput, { IUploadResult } from './UploadImageInput';
import { useAddNewReviewMutation } from 'redux/api/apiSlice';
import { useAuth } from 'hooks/useAuth';
import { FormItemNames, getRatingPayload, IFormValues } from './AddReviewForm.helper';

interface IAddReviewFormProps {
  cancelModal: () => void;
  selectedRestaurantId: string;
}

const AddReviewForm: React.FC<IAddReviewFormProps> = ({ cancelModal, selectedRestaurantId }) => {
  const imageRef = useRef<IUploadResult>(null);
  const [form] = Form.useForm();
  const { user } = useAuth();
  const [addNewReview] = useAddNewReviewMutation();

  const saveReview = async (values: IFormValues) => {
    if (!user) return;

    try {
      const { comment, rating_taste, rating_visual, rating_texture } = values;
      await addNewReview({
        comment,
        image: imageRef.current?.image || '',
        rating: getRatingPayload({ rating_taste, rating_visual, rating_texture }),
        reviewed_by: Number(user.id),
        restaurant: Number(selectedRestaurantId),
      }).unwrap();
      cancelModal();
      form.resetFields();
      imageRef.current?.clearImage();
    } catch (e) {
      console.error(e);
      message.error('Something went wrong. Please try again.');
    }
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
