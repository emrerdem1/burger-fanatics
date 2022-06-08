import React, { useCallback, useState } from 'react';
import { Button, Tooltip } from 'antd';
import AddReviewModalView from './AddReviewModalView';

const AddReviewView = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = useCallback(() => {
    if (!isLoggedIn) return;
    setIsModalVisible(true);
  }, []);

  return (
    <>
      <Tooltip title={!isLoggedIn ? 'You need to login first.' : null} placement='right'>
        <Button type='text' onClick={openModal} style={{ marginBottom: 10 }}>
          Add your own review
        </Button>
      </Tooltip>
      <AddReviewModalView isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} />
    </>
  );
};

export default AddReviewView;
