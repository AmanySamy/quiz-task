import React from 'react'

export default function Quiz({ quiz }) {
    return (
        <a href={`quiz/${quiz.id}`}>
            <div className='quiz-card'>
                <h3 className="quiz-title">{quiz.title}</h3>
                <p className="quiz-desc">{quiz.description}</p>
                <div className="quiz-meta">
                    <span className="questions-num">{quiz.questions_answers.length}</span>
                    <span className="quiz-date">{quiz.created}</span>
                </div>
            </div>
        </a>
    )
}
