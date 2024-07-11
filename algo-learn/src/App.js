import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Assessment from './components/Assessments.jsx';
import LearningPath from './components/LearningPath';
import TutorialNavigation from './components/TutorialNavigation';
import CodeDisplay from './components/Tutorials/CodeDisplay';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/assessments" element={<Assessment />} />
        <Route path="/learning-path" element={<LearningPath />} />
        <Route path="/tutorials" element={<TutorialNavigation />} />
        <Route path="/tutorial/:id" element={<CodeDisplay />} />
        <Route path="/" element={<h1>Welcome to AlgoLearn</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
