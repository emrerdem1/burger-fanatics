import React, { useState, useRef, forwardRef, useCallback, useImperativeHandle } from 'react';
import { CheckCircleTwoTone, CloseOutlined, UploadOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';
import { Button } from 'antd';
import { getBase64, ImageFileProps, IUploadResult } from './UploadImageInput.helper';

const INITIAL_IMAGE_STATE: ImageFileProps = { name: '', base64: '' };

const UploadImageInput = forwardRef<IUploadResult>((_, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [imageFile, setImageFile] = useState<ImageFileProps>(INITIAL_IMAGE_STATE);
  const [errorMessage, setErrorMessage] = useState<string>('');

  useImperativeHandle(
    ref,
    () => ({
      image: imageFile.base64,
      clearImage: () => clearImageFile(),
    }),
    [imageFile],
  );

  const onUploadSuccess = useCallback(({ name, base64 }: ImageFileProps): void => {
    setImageFile((prev) => ({ ...prev, name, base64 }));
    setErrorMessage('');
  }, []);

  const onUploadError = useCallback((errorMessage: string): void => {
    setErrorMessage(errorMessage);
    clearImageFile();
  }, []);

  const clearImageFile = () => {
    setImageFile(INITIAL_IMAGE_STATE);
    // Reset the value in case selecting the same file afterwards.
    if (inputRef.current) inputRef.current.value = '';
  };

  return (
    <>
      <ContainerButton>
        <label className='upload-label'>
          <UploadOutlined />
          <span className='upload-text'>Upload image</span>
          <input
            className='upload-photo'
            type='file'
            accept='image/png, image/jpg, image/jpeg'
            ref={inputRef}
            onChange={(e) =>
              getBase64({
                e,
                onSuccess: onUploadSuccess,
                onError: onUploadError,
              })
            }
          />
        </label>
      </ContainerButton>
      <OutputDiv>
        <>
          {errorMessage && <span className='error-text'>{errorMessage}</span>}
          {!!imageFile.name && (
            <>
              <CheckCircleTwoTone />
              <span className='success-text'>{imageFile.name}</span>
              <CloseOutlined onClick={clearImageFile} />
            </>
          )}
        </>
      </OutputDiv>
    </>
  );
});

const OutputDiv = styled.div`
  margin-top: 8px;

  .error-text {
    color: red;
  }

  .success-text {
    padding-left: 4px;
    padding-right: 8px;
  }
`;

const ContainerButton = styled(Button)`
  label {
    padding: 10px;
    cursor: pointer;
  }

  .upload-text {
    padding-left: 6px;
  }

  .upload-label .upload-photo {
    display: none;
  }
`;

UploadImageInput.displayName = 'UploadImageInput';
export default UploadImageInput;
