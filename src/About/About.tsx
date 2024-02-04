import React, { CSSProperties, useState } from "react";

const divStyle: CSSProperties = {
  marginTop: "117px",
  height: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-around",
};

const handleClick = ({
  append,
  website,
}: {
  append: string;
  website: string;
}) => {
  const instalink = `https://www.instagram.com/${append}`;
  const linkedInlink = `https://www.linkedin.com/in/${append}`;
  const gitlink = `https://www.github.com/${append}`;

  switch (website) {
    case "Instagram":
      window.open(instalink, "_blank", "noopener noreferrer");
      break; // Breaks out of the switch block

    case "LinkedIn":
      window.open(linkedInlink, "_blank", "noopener noreferrer");
      break; // Breaks out of the switch block

    case "GitHub":
      window.open(gitlink, "_blank", "noopener noreferrer");
    // Notice there's no break here, so it will continue to the next case
  }
};

export default function About() {
  return (
    <div className="About" style={divStyle}>
      <div>
        <button
          type="button"
          onClick={() =>
            handleClick({ append: "MusaShoeb", website: "GitHub" })
          }
        >
          GitHub
        </button>
        <button
          type="button"
          onClick={() =>
            handleClick({ append: "musa.shoeb", website: "Instagram" })
          }
        >
          Instagram
        </button>
        <button
          type="button"
          onClick={() =>
            handleClick({ append: "musa.shoeb", website: "LinkedIn" })
          }
        >
          LinkedIn
        </button>
      </div>
      <iframe
        src="/MusaWebsite.JPG"
        title="MuizMusa"
        width="800px"
        height="800px"
      />
    </div>
  );
}
