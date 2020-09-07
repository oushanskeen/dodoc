import { useState } from 'react';

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);

  function toggle(x) {
    setIsShowing(!x);// x === isShowing
  }

  return {
    isShowing,
    toggle
  }
}

export default useModal;
