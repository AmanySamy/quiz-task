import React from 'react'
import { useParams } from 'react-router-dom';
import { data } from '../../data'

export default function SingleQuiz() {
    let params = useParams();
    let quiz = data.filter(item => item.id == params.id)[0]
    const [CurrentQuestionID, setCurrentQuestionID] = React.useState(0)
    const [CurrentQuestionFeedback, setCurrentQuestionFeedback] = React.useState()
    function handleChange(id, status) {
        setCurrentQuestionID(id)
        setCurrentQuestionFeedback(status)
    }

    return (
        <div className='quiz-page'>
            <div className="d-flex">
                <h3 className="title">{quiz.title}</h3>
                <span className="score">{quiz.score}</span>
            </div>
            <p className="desc">{quiz.description}</p>
            {/* Questions */}
            {quiz.questions_answers.map((ques, index) => {
                return (
                    <div className="question-card" key={Math.random() * 10}>
                        <h4 className="question-title">{`Q${index+1}- ${ques.text}`}</h4>
                        <div>
                            {ques.answers.map(ans => (
                                <div className="d-flex" key={Math.random() * 10}>
                                    <input onChange={() => handleChange( ques.id, ans.is_true)}  type="radio" value={ans.id} name={`question${index}`} />
                                    <label htmlFor="" className="ans-text">{ans.text}</label>
                                </div>
                            ))}
                        </div>
                        <div className="question-feedback">
                            {CurrentQuestionID == ques.id ?
                                CurrentQuestionFeedback ? <div className="alert success">{ques.feedback_true}</div> : <div className="alert success">{ques.feedback_false}
                            :null}
                        </div>
                    </div>
                )
            })}

        </div>
    )
}
