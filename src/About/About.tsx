import React, { CSSProperties, useState } from "react";
import './About.css'


const divStyle: CSSProperties = {
  marginTop: "117px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-around",
  padding: "20px",
  float: 'right'
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
    <div className = "AboutContainer" style={divStyle}>
      <div className="First">
        <img src={'./MusaProfessionalPhoto.jpeg'} alt="Logo" className = "ProfessionalPhoto"/>
      </div>
      <div className="Second">
      <button className="GitHubButton"
          type="button"
          onClick={() =>
            handleClick({ append: "MusaShoeb", website: "GitHub" })
          }
        >
          <img src = {'./GithubLogo.jpg'} alt = "Logo" className = "GithubButtonImage"/>
        </button>
        <button
          type="button" className="InstaButton"
          onClick={() =>
            handleClick({ append: "musa.shoeb", website: "Instagram" })
          }
        >
           <img src = {'./InstaLogo.jpg'} alt = "Logo" className = "InstaButtonImage"/>
        </button>
        <button
          type="button" className="LinkedInButton"
          onClick={() =>
            handleClick({ append: "musa.shoeb", website: "LinkedIn" })
          }
        >
          <img src = {'./LinkedLogo.jpg'} alt = "Logo" className = "LinkedInButtonImage"/>
        </button>
      </div>
    </div>
  );
}
