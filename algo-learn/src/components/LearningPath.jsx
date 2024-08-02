import React, { useEffect, useState } from 'react';
// import axios from 'axios';

const LearningPath = () => {
    const [path, setPath] = useState([]);

    useEffect(() => {
        //const fetchLearningPath = async () => {
        const fetchLearningPath = () => {
            // const response = await axios.get('https://api.example.com/learning-path');
            //setPath(response.data);
            // Mock data - replace with actual API call
            const mockData = [
                { id: 1, title: 'Introduction to Data Structures' },
                { id: 2, title: 'Arrays and Linked Lists' },
                { id: 3, title: 'Stacks and Queues' },
                { id: 4, title: 'Trees and Graphs' },
                { id: 5, title: 'Sorting Algorithms' },
                { id: 6, title: 'Dynamic Programming' },
                { id: 7, title: 'Advanced Graph Algorithms' },
            ];
            setPath(mockData);
          };
          fetchLearningPath();
        }, []);

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