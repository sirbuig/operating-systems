import React from "react";

const ParagraphList = ({ paragraphs }) => {
  return (
    <li>
      {paragraphs.map((text, index) => (
        <p key={index}>{text}</p>
      ))}
    </li>
  );
};

export default ParagraphList;
