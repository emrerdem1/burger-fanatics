import React, { useCallback } from 'react';
import { Modal } from 'antd';
import AddReviewForm from './AddReviewForm';

interface IAddReviewModalProps {
  isModalVisible: boolean;
  setIsModalVisible: (isVisible: boolean) => void;
  selectedRestaurantId: string;
}
const AddReviewModalView: React.FC<IAddReviewModalProps> = ({
  isModalVisible,
  setIsModalVisible,
  selectedRestaurantId,
}) => {
  const cancelModal = useCallback(() => {
    setIsModalVisible(false);
  }, []);

  return (
    <Modal
      title='Share your own experience!'
      visible={isModalVisible}
      onCancel={cancelModal}
      footer={null}
    >
      <AddReviewForm cancelModal={cancelModal} selectedRestaurantId={selectedRestaurantId} />
    </Modal>
  );
};

export default AddReviewModalView;
