import React, { useCallback, useState } from 'react';
import { Button, Tooltip } from 'antd';
import AddReviewModalView from './AddReviewModalView';
import { useAuth } from 'hooks/useAuth';

interface IAddReviewViewProps {
  selectedRestaurantId: string;
}

const AddReviewView: React.FC<IAddReviewViewProps> = ({ selectedRestaurantId }) => {
  const { user } = useAuth();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = useCallback(() => {
    setIsModalVisible(true);
  }, []);

  return (
    <>
      <Tooltip title={!user ? 'You need to login first.' : null} placement='right'>
        <Button type='text' disabled={!user} onClick={openModal} style={{ marginBottom: 10 }}>
          Add your own review
        </Button>
      </Tooltip>
      <AddReviewModalView
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        selectedRestaurantId={selectedRestaurantId}
      />
    </>
  );
};

export default AddReviewView;
