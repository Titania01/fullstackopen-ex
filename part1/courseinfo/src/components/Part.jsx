import React from "react";

function Part({ parts }) {
  return (
    <div>
      {parts.map((part, partIndex) => (
        <p key={`course-parts ${partIndex}`}>
          {part.name} {part.exercises}
        </p>
      ))}
    </div>
  );
}

export default Part;
