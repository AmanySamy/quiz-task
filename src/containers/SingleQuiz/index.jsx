import React from 'react'
import { useParams } from 'react-router-dom';
import { data } from '../../data'

export default function SingleQuiz() {
    let params = useParams();
    let quiz = data.filter(item => item.id == params.id)[0]
    const [CurrentQuestionID, setCurrentQuestionID] = React.useState(0)
    const [AnswerID, setAnswerID] = React.useState(0)
    const [CurrentQuestionFeedback, setCurrentQuestionFeedback] = React.useState()
    const [CurrentQuestionAnswer, setCurrentQuestionAnswer] = React.useState([])
    function handleChange(e, id, status) {
        setCurrentQuestionID(id)
        setCurrentQuestionFeedback(status)
        setAnswerID(e.target.value)
        let obj = {}
        obj[id] = { 'answer_feedback': status }
        obj[id] = { 'answer_id': e.target.value }
        setCurrentQuestionAnswer([...CurrentQuestionAnswer, obj])
    }
    console.log(CurrentQuestionAnswer)

    return (
        <div className='quiz-page'>
            <a href="/">Back to Home</a>
            <div className="d-flex quiz-page-header">
                <div className='w-50'>
                    <h3 className="title">{quiz.title}</h3>
                    <p className="desc">{quiz.description}</p>
                    <div className='d-flex score'>
                        <label htmlFor="">Score :</label>
                        <span>{quiz.score}</span>
                    </div>
                </div>
                <div className='w-50'>
                    <iframe  height="315" src={quiz.url} />
                </div>
            </div>

            {/* Questions */}
            {quiz.questions_answers.map((ques, index) => {
                return (
                    <div className="question-card" key={Math.random() * 10}>
                        <h4 className="question-title">{`Q${index + 1}- ${ques.text}`}</h4>
                        <div className='answers'>
                            {ques.answers.map(ans => (
                                <div className="d-flex ans" key={Math.random() * 10}>
                                    <input checked={AnswerID == ans.id} onChange={(e) => handleChange(e, ques.id, ans.is_true)} type="radio" value={ans.id} name={`question${index}`} />
                                    <label htmlFor="" className="ans-text">{ans.text}</label>
                                </div>
                            ))}
                        </div>
                        <div className="question-feedback">
                            {CurrentQuestionID == ques.id ?
                                CurrentQuestionFeedback ? <div className="alert success">{ques.feedback_true}</div> : <div className="alert error">{ques.feedback_false}</div>
                                : null}
                        </div>
                    </div>
                )
            })}

        </div>
    )
}
