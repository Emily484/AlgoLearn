import React from 'react';

const LearningPath = ({ path }) => {
    return (
        <div className="learning-path">
            <h2>Personalized Learning Path</h2>
            <ul>
                {path.map((step) => (
                    <li key={step.id}>
                        <li>{step.title}</li>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LearningPath;