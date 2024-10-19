import  { useState } from 'react';
import Question from './Question';
import Result from './Result';
import './App.css'

const questions = [
    { question: "What is the primary purpose of React?", options: ["To manage state", "To build user interfaces", "To handle server-side logic", "To perform data fetching"], answer: "To build user interfaces" },
    { question: "Which of the following is a feature of React?", options: [" Virtual DOM", "Two-way data binding", "Dependency injection", "Direct DOM manipulation"], answer: "Virtual DOM" },
    { question: "What are React components?", options: [" Functions that return HTML", "Objects that store data", "Methods for handling events", " Stylesheets for styling elements"], answer: "Functions that return HTML" },
    { question: "In React, what is the purpose of useState??", options: [" To manage side effects", "To store and update state in functional components", "To fetch data from APIs", "To define component structure"], answer: "To store and update state in functional components" },
    { question: "Which lifecycle method is invoked immediately after a component is mounted?", options: [" componentDidUpdate", "componentWillUnmount", "componentDidMount", "render"], answer: "componentDidMount" },
    
];

function App() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const handleAnswer = (selectedOption) => {
        if (selectedOption === questions[currentQuestionIndex].answer) {
            setScore(score + 1);
        }
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setShowResult(true);
        }
    };

    return (
        <div className="App">
            {showResult ? (
                <Result score={score} total={questions.length} />
            ) : (
                <Question
                    question={questions[currentQuestionIndex]}
                    onAnswer={handleAnswer}
                />
            )}
        </div>
    );
}

export default App;
