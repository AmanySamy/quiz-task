import { Field, FieldArray, Form, Formik } from 'formik'
import React from 'react'

export default function AddQuiz() {
    const [Questions, setQuestions] = React.useState([])
    function addQuestion() {
        console.log("object")
        let arr = Questions
        arr.push({
            "answer_id": null,
            "answers": [
                {

                    "is_true": false,
                    "text": ""
                },

            ],
            "feedback_false": "question 1 false feedback",
            "feedback_true": "question 1 true feedback",
            "text": ""
        })
        setQuestions(arr)
        console.log(Questions)

    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    let initialValues = {
        "created": "2020-09-09 09:26:39",
        "description": "",
        "modified": "2020-09-09 09:26:39",
        "questions_answers": [
            {
                "answer_id": null,
                "answers": [
                    {
                        "is_true": false,
                        "text": ""
                    }
                ],
                "feedback_false": "question 1 false feedback",
                "feedback_true": "question 1 true feedback",

                "text": ""
            }
        ],
        "score": null,
        "title": "",
        "url": ""
    }
    let question = {
        "answer_id": null,
        "answers": [
            {
                "is_true": false,
                "text": ""
            }
        ],
        "feedback_false": "question 1 false feedback",
        "feedback_true": "question 1 true feedback",
        "text": ""
    }

    return (
        <div>
            <a href="/"> <i className='fas fa-home'></i> Back to Home</a>
            <Formik
                initialValues={initialValues}
                onSubmit={(values) => {
                    // same shape as initial values
                    document.getElementById("result-after").innerHTML = "<pre>"+JSON.stringify(values,null,'\t')+"</pre>";
                }}
            >
                {({ values, errors, touched }) => {
                    console.log(values)
                    return (

                        <Form className='add-quiz-form'>
                            <div className="quiz-title">
                                <label htmlFor="">Quiz Title</label>
                                <Field name="title" />
                            </div>
                            <div className="quiz-title">
                                <label htmlFor="">Quiz Descrption</label>
                                <Field name="description" />
                            </div>
                            <div className="quiz-title">
                                <label htmlFor="">Quiz Url</label>
                                <Field name="url" />
                            </div>

                            <FieldArray
                                name="questions_answers"
                                render={({ insert, remove, push, form }) => (
                                    <div>
                                        {values.questions_answers && values.questions_answers.length > 0 ? (
                                            <>
                                                {values.questions_answers.map((question, index) => (
                                                    <div key={index}>
                                                        <div className="d-flex ques-container">

                                                            <Field className="ques-title-input" name={`questions_answers.${index}.text`} placeholder="Question Title" />
                                                            <button
                                                                type="button"
                                                                onClick={() => remove(index)} // remove a friend from the list
                                                            >
                                                                <i className='fal fa-trash'></i>
                                                            </button>
                                                        </div>
                                                        <FieldArray
                                                            name={`questions_answers.${index}.answers`}
                                                            render={({ remove, push, form }) => (
                                                                <div>
                                                                    {values.questions_answers[index].answers && values.questions_answers[index].answers.length > 0 &&
                                                                        <>
                                                                            {values.questions_answers[index].answers.map((answer, index2) => (
                                                                                <div key={index2}>
                                                                                    <div className="d-flex ans-container">

                                                                                        <Field className="ans-title-input" name={`questions_answers.${index}.answers.${index2}.text`} placeholder="Answer Text" />
                                                                                        <button
                                                                                            type="button"
                                                                                            onClick={() => remove(index2)} // remove a friend from the list
                                                                                        >
                                                                                            <i className='fal fa-trash'></i>
                                                                                        </button>
                                                                                    </div>
                                                                                </div>
                                                                            ))}
                                                                            <button
                                                                                className='m-auto'
                                                                                type="button"
                                                                                onClick={() => push({
                                                                                    "is_true": false,
                                                                                    "text": ""
                                                                                })} // insert an empty string at a position
                                                                            >
                                                                                <i className='fas fa-plus'></i> Add New Answer
                                                                            </button>
                                                                        </>

                                                                    }
                                                                </div>
                                                            )}
                                                        />
                                                    </div>
                                                ))}
                                                <button
                                                    type="button"
                                                    onClick={() => push(question)} // insert an empty string at a position
                                                >
                                                    <i className='fas fa-plus'></i> Add New Question
                                                </button>
                                            </>
                                        ) : (
                                            <button type="button" onClick={() => push('')}>
                                                {/* show this when user has removed all questions_answers from the list */}
                                                Add a Question
                                            </button>
                                        )}

                                    </div>
                                )}
                            />
                            <button type="submit">Submit</button>
                        </Form>
                    )
                }}

            </Formik>
            {/*  */}
            <div id="result-after"></div>

            
        </div>
    )
}
