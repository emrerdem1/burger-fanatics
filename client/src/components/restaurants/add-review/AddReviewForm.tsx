import React from 'react';
import { HeartOutlined, SmileOutlined } from '@ant-design/icons';
import { Button, Form, Input, message, Rate } from 'antd';
import UploadImageInput from './UploadImageInput';
import { useAddNewReviewMutation, useAddRatingMutation } from 'redux/api/apiSlice';
import { useAuth } from 'hooks/useAuth';

enum FormItemNames {
  PHOTO = 'photo',
  COMMENT = 'comment',
  RATING_TASTE = 'rating_taste',
  RATING_VISUAL = 'rating_visual',
  RATING_TEXTURE = 'rating_texture',
}

const _getRatingAverage = (ratings: number[]) =>
  (ratings.reduce((acc, curr) => acc + curr, 0) / ratings.length).toFixed(2);

interface IAddReviewFormProps {
  cancelModal: () => void;
  selectedRestaurantId: string;
}

const AddReviewForm: React.FC<IAddReviewFormProps> = ({ cancelModal, selectedRestaurantId }) => {
  const imageRef = React.useRef<HTMLInputElement | string>('');
  const [form] = Form.useForm();
  const [addRating] = useAddRatingMutation();
  const [addNewReview] = useAddNewReviewMutation();
  const { user } = useAuth();

  const saveReview = async (values: FormItemNames) => {
    try {
      const { id: ratingId } = await addRating({
        rating_avg: _getRatingAverage([
          values[FormItemNames.RATING_TASTE],
          values[FormItemNames.RATING_VISUAL],
          values[FormItemNames.RATING_TEXTURE],
        ]).toString(),
        taste: values[FormItemNames.RATING_TASTE].toString(),
        texture: values[FormItemNames.RATING_TEXTURE].toString(),
        visual: values[FormItemNames.RATING_VISUAL].toString(),
      }).unwrap();
      await addNewReview({
        comment: values[FormItemNames.COMMENT],
        image: imageRef.current as string,
        rating: Number(ratingId),
        reviewed_by: Number(user!.id),
        restaurant: Number(selectedRestaurantId),
      }).unwrap();
      cancelModal();
      form.resetFields();
    } catch (e) {
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
