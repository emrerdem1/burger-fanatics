import React from 'react';
import { Button, Modal, Tooltip } from 'antd';
import { useAuth } from 'hooks/useAuth';
import AddReviewForm from './AddReviewForm';
import useToggle from 'hooks/useToggle';

interface IAddReviewViewProps {
  selectedRestaurantId: string;
}

const AddReviewView: React.FC<IAddReviewViewProps> = ({ selectedRestaurantId }) => {
  const { user } = useAuth();
  const { isShown, toggleVisibility, changeVisibility } = useToggle();

  return (
    <>
      <Tooltip title={!user ? 'You need to login first.' : null} placement='right'>
        <Button
          type='text'
          disabled={!user}
          onClick={toggleVisibility}
          style={{ marginBottom: 10 }}
        >
          Add your own review
        </Button>
      </Tooltip>
      <Modal
        title='Share your own experience!'
        visible={isShown}
        onCancel={() => changeVisibility(false)}
        footer={null}
      >
        <AddReviewForm
          cancelModal={() => changeVisibility(false)}
          selectedRestaurantId={selectedRestaurantId}
        />
      </Modal>
    </>
  );
};

export default AddReviewView;
