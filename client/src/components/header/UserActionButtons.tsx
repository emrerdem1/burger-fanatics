import React from 'react';
import styled from '@emotion/styled';
import LoginModal from 'containers/user/LoginModal';
import SignUpModal from 'containers/user/SignUpModal';
import { useAuth } from 'hooks/useAuth';
import UserLoggedInView from 'containers/user/UserLoggedInView';

const UserActionButtons = () => {
  const { user } = useAuth();

  return (
    <ButtonsContainerDiv>
      {user ? (
        <UserLoggedInView email={user.email} />
      ) : (
        <>
          <SignUpModal />
          <LoginModal />
        </>
      )}
    </ButtonsContainerDiv>
  );
};

const ButtonsContainerDiv = styled.div`
  display: flex;
  column-gap: 1em;
`;

export default UserActionButtons;
