import React, { CSSProperties, useState } from "react";


const divStyle: CSSProperties = {
    
  height: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-end",
};

const handleClick = () => {
  const link = "https://www.google.com"; 
  window.open(link, "_blank", "noopener noreferrer");
};

export default function About() {
  return (
    <div className="About" style={divStyle}>
       <iframe
          
          src="/MusaWebsite.JPG"
          title="MuizMusa"
          width="800px"
          height="800px"
          
        />
      <button type="button" onClick={handleClick}>
          Snapchat
      </button>
      <button type="button" onClick={handleClick}>
          Instagram
      </button>
      <button type="button" onClick={handleClick}>
          LinkedIn
      </button>
     
    </div>
  );
}
