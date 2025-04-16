import React from 'react';

export const useToggle = () => {
  const [state, setState] = React.useState<boolean>(false);

  const toggle = React.useCallback(() => {
    setState(!state);
  }, [state]);

  return [state, toggle] as const;
};
