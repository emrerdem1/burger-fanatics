import React, { useCallback, useRef } from 'react';
import { Button, Tooltip } from 'antd';
import { useAuth } from 'hooks/useAuth';
import AddReviewForm from './AddReviewForm';
import ModalWithoutFooter, { IManuelCancelCallback } from 'features/ModalWithoutFooter';

interface IAddReviewViewProps {
  restaurantId: string;
}

const AddReviewView: React.FC<IAddReviewViewProps> = ({ restaurantId }) => {
  const { user } = useAuth();
  const modalRef = useRef<IManuelCancelCallback>(null);

  const manualModalCanceller = useCallback(() => {
    modalRef.current?.closeModal();
  }, []);

  return (
    <ModalWithoutFooter
      ref={modalRef}
      title='Share your own experience!'
      button={
        <Button type='text' disabled={!user} style={{ marginBottom: 10 }}>
          Add your own review
        </Button>
      }
      buttonWrapper={
        <Tooltip title={!user ? 'You need to login first.' : null} placement='right' />
      }>
      <AddReviewForm closeModal={manualModalCanceller} restaurantId={restaurantId} />
    </ModalWithoutFooter>
  );
};

export default AddReviewView;
