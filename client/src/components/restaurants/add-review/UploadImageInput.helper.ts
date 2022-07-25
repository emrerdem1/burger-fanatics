const MAX_FILE_SIZE_KB = 6144;

export interface ImageFileProps {
  name: string;
  base64: string;
}

export interface IUploadResult {
  image: string;
  clearImage: () => void;
}

type TGetBase64 = {
  e: React.ChangeEvent<HTMLInputElement>;
  onSuccess: ({ name, base64 }: ImageFileProps) => void;
  onError: (errorMessage: string) => void;
};

export const getBase64 = ({ e: { target }, onSuccess, onError }: TGetBase64): void => {
  if (!target.files || !target.files[0]) {
    return onError('An error occurred, please try again');
  }
  const fileSizeKB = Math.round(target.files[0].size / 1024);
  if (fileSizeKB > MAX_FILE_SIZE_KB) {
    return onError('File size must be less than 6 MB');
  }

  const reader = new FileReader();
  reader.readAsDataURL(target.files[0]);
  reader.onerror = () => onError('Error occurred reading file.');
  reader.onload = () => {
    if (typeof reader.result !== 'string') return onError('Error occurred reading file.');
    if (!target.files)
      return onError(
        'Input value might be resetted while image was still loading, please contact the team if it happens again.',
      );
    onSuccess({ name: target.files[0].name, base64: reader.result });
  };
};
