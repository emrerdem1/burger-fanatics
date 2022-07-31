import React, { cloneElement, useMemo } from 'react';
import { IModalDialogProps } from './ModalWithoutFooter';

type ModalTriggerButtonProps = Pick<IModalDialogProps, 'button' | 'buttonWrapper'> & {
  callback: () => void;
};
const ModalTriggerButton: React.FC<ModalTriggerButtonProps> = ({
  button,
  buttonWrapper,
  callback,
}) => {
  if (!button) return null;

  const Button = useMemo(
    () =>
      button &&
      cloneElement(button, {
        onClick: callback,
      }),
    [button],
  );

  const ButtonWrapper = useMemo(
    () => buttonWrapper && cloneElement(buttonWrapper, { children: Button }),
    [buttonWrapper],
  );

  return ButtonWrapper || Button;
};

export default ModalTriggerButton;
