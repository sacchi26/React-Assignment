// src/components/FocusInput2.jsx

import { useRef, useEffect } from "react";

function FocusInput2() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Focus me!"
      />
      <button onClick={useEffect}>Focus Input</button>
    </div>
  );
}

export default FocusInput2;
