import React from 'react';

const Assessments = ({ assessment }) => {
  return (   
    <div>
        <h2>{assessment.title}</h2>
        <p>{assessment.description}</p>
        {/* Add form or interact elements for assment */}
    </div>
  );
};

export default Assessments;