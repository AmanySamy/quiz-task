import React from 'react'

export default function Quiz({ quiz }) {
    return (
        <div className='quiz-card'>
            <a href={`quiz/${quiz.id}`}>
                <h3 className="quiz-title">{quiz.title}<i className='fad fa-pencil-alt'></i> </h3>
            </a>
            <p className="quiz-desc">{quiz.description}</p>
            <div className="quiz-meta">
                <span className="questions-num"><i className='fad fa-question-square'></i>{quiz.questions_answers.length}</span>
                <span className="quiz-date"><i className='fad fa-calendar-alt'></i>{quiz.created}</span>
            </div>
        </div>
    )
}
