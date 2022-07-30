import React, { forwardRef, useImperativeHandle, useMemo } from 'react';
import { Modal } from 'antd';
import { ButtonProps } from 'antd/lib/button';
import useToggle from 'hooks/useToggle';

interface IModalDialogProps extends React.HTMLProps<HTMLDivElement> {
  title?: string;
  button?: React.ReactElement<ButtonProps>;
  children: React.ReactNode;
}

export interface IManuelCancelCallback {
  closeModal: () => void;
}

const ModalWithoutFooter = forwardRef<IManuelCancelCallback, IModalDialogProps>(
  ({ title, button, children, ...props }, ref) => {
    const { isShown, show, hide } = useToggle();

    useImperativeHandle(
      ref,
      () => ({
        closeModal: hide,
      }),
      [hide],
    );

    const Button = useMemo(
      () =>
        button &&
        React.cloneElement(button, {
          onClick: show,
        }),
      [button],
    );

    return (
      <>
        {Button}
        <Modal title={title} visible={isShown} onCancel={hide} footer={null} {...props}>
          {children}
        </Modal>
      </>
    );
  },
);

ModalWithoutFooter.displayName = 'ModalWithoutFooter';
export default ModalWithoutFooter;
