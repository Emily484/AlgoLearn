import React, { useState } from 'react';

const Assessments = () => {
  const [answers, setAnsers] = useState({});

  const handleChange = (e) => {
    setAnsers({
      ...answers,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => { 
    e.preventDefault();
    // Submit the answers to the backend API
  }
  return (   
    <div className="assessments">
        <h2>Assessment</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Question 1</label>
            <input type="text" name="question1" onChange={handleChange} />
          </div>
          <div>
            <label>Question 2</label>
            <input type="text" name="question2" onChange={handleChange} />
          </div>
          {/* Add more questions as needed */}
          <button type="submit">Submit</button>
        </form>
    </div>
  );
};

export default Assessments;