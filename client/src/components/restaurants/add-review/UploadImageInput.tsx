import React, { forwardRef, useCallback, useImperativeHandle } from 'react';
import { CheckCircleTwoTone, CloseOutlined, UploadOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';
import { Button } from 'antd';

const MAX_FILE_SIZE_KB = 6144;
const INITIAL_IMAGE_STATE: ImageFileProps = { name: '', base64: '' };
interface ImageFileProps {
  name: string;
  base64: string;
}
type TGetBase64 = {
  e: React.ChangeEvent<HTMLInputElement>;
  onSuccess: ({ name, base64 }: ImageFileProps) => void;
  onError: (errorMessage: string) => void;
};

const getBase64 = ({ e, onSuccess, onError }: TGetBase64): void => {
  const target = e.target as HTMLInputElement;
  if (!target.files || !target.files[0]) {
    return onError('An error occurred, please try again');
  }
  const fileSizeKB = Math.round(target.files[0].size / 1024);
  if (fileSizeKB > MAX_FILE_SIZE_KB) {
    return onError('File size must be less than 6 MB');
  }

  const reader = new FileReader();
  reader.readAsDataURL(target.files[0]);
  reader.onload = () => {
    if (typeof reader.result !== 'string') return onError('Error occurred reading file.');
    onSuccess({ name: target.files![0].name, base64: reader.result });
  };
  reader.onerror = () => onError('Error occurred reading file.');
};

const UploadImageInput = forwardRef<Partial<HTMLInputElement>>(function UploadImageInput(_, ref) {
  const [imageFile, setImageFile] = React.useState<ImageFileProps>(INITIAL_IMAGE_STATE);
  const [errorMessage, setErrorMessage] = React.useState<string>('');

  useImperativeHandle(ref, () => imageFile.base64, [imageFile.base64]);

  const onUploadSuccess = useCallback(({ name, base64 }: ImageFileProps): void => {
    setImageFile((prev) => ({ ...prev, name, base64 }));
    setErrorMessage('');
  }, []);

  const onUploadError = useCallback((errorMessage: string): void => {
    setErrorMessage(errorMessage);
    clearImageFile();
  }, []);

  const clearImageFile = () => useCallback(() => setImageFile(INITIAL_IMAGE_STATE), []);

  return (
    <>
      <ContainerButton>
        <label htmlFor='upload-photo'>
          <UploadOutlined />
          <span className='upload-text'>Upload image</span>
          <input
            id='upload-photo'
            type='file'
            accept='image/png, image/jpg, image/jpeg'
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
        {errorMessage && <span className='error-text'>{errorMessage}</span>}
        {imageFile.name && (
          <>
            <CheckCircleTwoTone />
            <span className='success-text'>{imageFile.name}</span>
            <CloseOutlined onClick={clearImageFile} />
          </>
        )}
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

  #upload-photo {
    display: none;
  }
`;

export default UploadImageInput;
