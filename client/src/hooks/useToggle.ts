import { useState, useCallback, useMemo } from 'react';

const useToggle = () => {
  const [isShown, setIsShown] = useState<boolean>(false);

  const toggleVisibility = useCallback(() => {
    setIsShown((prev) => !prev);
  }, []);

  const changeVisibility = useCallback((shouldShow: boolean) => {
    setIsShown(shouldShow);
  }, []);

  return useMemo(
    () => ({
      isShown,
      toggleVisibility,
      changeVisibility,
    }),
    [isShown, toggleVisibility, changeVisibility],
  );
};

export default useToggle;
