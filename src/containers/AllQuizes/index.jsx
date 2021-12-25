import React from 'react'
import Quiz from '../../components/Quiz'
import { data } from '../../data'

export default function AllQuizes() {
    return (
        <div>
            {data.map(quiz => (
                <Quiz quiz={quiz} />
            ))
            }
            <a href="/add-quiz" className="btn">Create New Quiz</a>
        </div>
    )
}
