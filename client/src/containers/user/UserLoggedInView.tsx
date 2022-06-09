import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Button, message, Popover } from 'antd';
import useToggle from 'hooks/useToggle';
import { logoutUser } from 'redux/auth/authSlice';
import { useDispatch } from 'react-redux';

interface IUserLoggedInPros {
  email: string;
}

const UserLoggedInView: React.FC<IUserLoggedInPros> = ({ email }) => {
  const dispatch = useDispatch();
  const { isShown, toggleVisibility } = useToggle();

  const logout = () => {
    dispatch(logoutUser());
    message.success('Logged out successfully.');
  };

  return (
    <Popover
      content={<Button onClick={logout}>Logout</Button>}
      trigger='click'
      visible={isShown}
      onVisibleChange={toggleVisibility}
    >
      <Button type='text'>
        <UserOutlined />
        <span style={{ paddingLeft: 8 }}>{email}</span>
      </Button>
    </Popover>
  );
};

export default UserLoggedInView;
