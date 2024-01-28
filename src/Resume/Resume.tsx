import React, { useState } from "react";

export default function Resume() {
  const [resumestate, setResumeState] = useState(false);

  const changeResume = () => {
    setResumeState(!resumestate);
  };

  const divStyle = {
    height:  "100vh" 
    
  };

  return (
    <div className='Resume' style={divStyle}>
      <button type="button" onClick={changeResume}>
        Click me!
      </button>

      {resumestate && (
        <iframe
          src="/MusaMuiz.pdf"
          width="400"
          height="400"
        />
      )}
    </div>
  );
}
