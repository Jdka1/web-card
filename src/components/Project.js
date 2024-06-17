import React from 'react';

function Project({ title, description, image, orientation }) {
  const projectClassName = `project ${orientation}`; // Assuming you have CSS classes like 'portrait' and 'landscape'

  return (
    <div className={projectClassName}>
      <img src={`${process.env.PUBLIC_URL}/${image}`} alt={title} />
      <div className="text-panel">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Project;
