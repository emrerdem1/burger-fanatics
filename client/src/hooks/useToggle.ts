import { useState, useCallback, useMemo } from 'react';

const useToggle = () => {
  const [isShown, setIsShown] = useState<boolean>(false);

  const show = useCallback(() => {
    setIsShown(true);
  }, []);

  const hide = useCallback(() => {
    setIsShown(false);
  }, []);

  const toggleVisibility = useCallback(() => {
    setIsShown((prev) => !prev);
  }, []);

  return useMemo(
    () => ({
      isShown,
      show,
      hide,
      toggleVisibility,
    }),
    [isShown, show, hide, toggleVisibility],
  );
};

export default useToggle;
