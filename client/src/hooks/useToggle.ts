import { useState, useCallback, useMemo } from 'react';

const useToggle = () => {
  const [isShown, setIsShown] = useState<boolean>(false);

  const toggleVisibility = useCallback(() => {
    setIsShown((prev) => !prev);
  }, []);

  return useMemo(
    () => ({
      isShown,
      toggleVisibility,
    }),
    [isShown, toggleVisibility],
  );
};

export default useToggle;
