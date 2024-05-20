// src/components/ShowHideText.jsx

import { useState } from "react";

function ShowHideText() {
  const [showText, setShowText] = useState(false);

  return (
    <div>
      <button onClick={() => setShowText(!showText)}>Show/Hide Text </button>
      {showText && <p>Hey User!</p>}
    </div>
  );
}

export default ShowHideText;
