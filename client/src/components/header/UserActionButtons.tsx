import React from 'react';
import styled from '@emotion/styled';
import LoginModal from 'containers/user-modal/LoginModal';
import SignUpModal from 'containers/user-modal/SignUpModal';

const UserActionButtons = () => {
  return (
    <ButtonsContainerDiv>
      <SignUpModal />
      <LoginModal />
    </ButtonsContainerDiv>
  );
};

const ButtonsContainerDiv = styled.div`
  display: flex;
  column-gap: 1em;
`;

export default UserActionButtons;
