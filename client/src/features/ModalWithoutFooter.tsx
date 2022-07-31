import React, { forwardRef, useImperativeHandle } from 'react';
import { Modal } from 'antd';
import { ButtonProps } from 'antd/lib/button';
import useToggle from 'hooks/useToggle';
import ModalTriggerButton from './ModalTriggerButton';

export interface IModalDialogProps extends React.HTMLProps<HTMLDivElement> {
  title?: string;
  button?: React.ReactElement<ButtonProps>;
  buttonWrapper?: React.ReactElement;
  children: React.ReactNode;
}

export interface IManuelCancelCallback {
  closeModal: () => void;
}

const ModalWithoutFooter = forwardRef<IManuelCancelCallback, IModalDialogProps>(
  ({ title, button, buttonWrapper, children, ...props }, ref) => {
    const { isShown, show, hide } = useToggle();

    useImperativeHandle(
      ref,
      () => ({
        closeModal: hide,
      }),
      [hide],
    );

    return (
      <>
        <ModalTriggerButton button={button} buttonWrapper={buttonWrapper} callback={show} />
        <Modal title={title} visible={isShown} onCancel={hide} footer={null} {...props}>
          {children}
        </Modal>
      </>
    );
  },
);

ModalWithoutFooter.displayName = 'ModalWithoutFooter';
export default ModalWithoutFooter;
