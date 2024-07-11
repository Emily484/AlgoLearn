import React from 'react';

const TutorialNavigation = ({ lessons, currentLesson, onSelectLesson }) => { 
  return (
    <div className="tutorial-navigation">
      <h2>Tutorial Lessons</h2>
      <ul>
        {lessons.map((lesson) => (
            <li key={lesson.id}>
            <button onClick={() => onSelectLesson(lesson.id)}>
              {lesson.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TutorialNavigation;