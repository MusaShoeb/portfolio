import React, { CSSProperties, useState } from "react";

export default function Resume() {
  const [resumestate, setResumeState] = useState(false);

  const changeResume = () => {
    setResumeState(!resumestate);
  };

  const divStyle: CSSProperties = {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  };

  return (
    <div className="Resume" style={divStyle}>
      <button type="button" onClick={changeResume}>
        Click me!
      </button>

      {resumestate && (
        <iframe
          src="/MusaMuiz.pdf"
          title="MuizMusa"
          width="400px"
          height="400px"
        />
      )}
    </div>
  );
}
