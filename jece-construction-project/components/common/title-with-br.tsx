import React from "react";

const TitleWithBr: React.FC<{ title: string }> = ({ title }) => (
  <>
    {title.split(" ").map((word, i, arr) => (
      <React.Fragment key={i}>
        {word}
        {i < arr.length - 1 && <br />}
      </React.Fragment>
    ))}
  </>
);

export default TitleWithBr;
