import React, { useCallback, useRef } from 'react';
import { Button, Tooltip } from 'antd';
import { useAuth } from 'hooks/useAuth';
import AddReviewForm from './AddReviewForm';
import ModalWithoutFooter, { IManuelCancelCallback } from 'features/ModalWithoutFooter';

interface IAddReviewViewProps {
  selectedRestaurantId: string;
}

const AddReviewView: React.FC<IAddReviewViewProps> = ({ selectedRestaurantId }) => {
  const { user } = useAuth();
  const modalRef = useRef<IManuelCancelCallback>(null);

  const manualModalCanceller = useCallback(() => {
    modalRef.current?.closeModal();
  }, []);

  return (
    <>
      <ModalWithoutFooter
        ref={modalRef}
        title='Share your own experience!'
        button={
          <Tooltip title={!user ? 'You need to login first.' : null} placement='right'>
            <Button type='text' disabled={!user} style={{ marginBottom: 10 }}>
              Add your own review
            </Button>
          </Tooltip>
        }
      >
        <AddReviewForm
          closeModal={manualModalCanceller}
          selectedRestaurantId={selectedRestaurantId}
        />
      </ModalWithoutFooter>
    </>
  );
};

export default AddReviewView;
