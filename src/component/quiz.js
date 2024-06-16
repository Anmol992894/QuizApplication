import React, { useEffect, useState } from 'react'
import './style.css'
import DATA from './Data'
import { useNavigate } from 'react-router-dom'

const Quiz = () => {
    const [data, setData] = useState(DATA)
    const [buttons, setButton] = useState('Next')
    const [timer, setTimer] = useState(
        Number(localStorage.getItem('timer')) || 600
    );
    const [choose, setChoose] = useState('')
    const [score, setScore] = useState(Number(localStorage.getItem('Score')) || 0);
    const [progress, setProgress] = useState(Number(localStorage.getItem('Progress')) || 10);
    const [index, setIndex] = useState(Number(localStorage.getItem('Index')) || 0);
    const navigate = useNavigate()
    const next = () => {
        setProgress(progress + 10)
        if (choose === data[index].answer) {
            setScore(score + 10)
        }
        if (index == 8) {
            setButton('Submit')
        }
        if (index < DATA.length - 1) {
            setIndex(index + 1);
        } else {

            setIndex(0);
            setScore(0);
            setProgress(0);
            setButton('Next')
            navigate('/score', { state: { score: score } })
        }
    }
    useEffect(() => {
        localStorage.setItem('Index', index)
        localStorage.setItem('Score', score)
        localStorage.setItem('Progress', progress)
    }, [index])

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prevTimer) => {
                const newTimer = prevTimer - 1;
                localStorage.setItem('timer', newTimer);
                return newTimer;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    if (timer <= 0) {
        navigate('/score');
    }
    return (
        <div>
            <div className='bodi'>
                <nav class="navbar bg-body-tertiary">
                    <div class="container-fluid d-flex justify-content-between p-3">
                        <a class="navbar-brand" href="#">
                            <i class="fs-2 text-primary fa-solid fa-feather"></i><span className='ms-1 fw-bold'>Quiz</span> <span className='fw-bold text-primary m-1'>Application</span>
                        </a>
                        <div id="timer">
                            Time Left: {Math.floor(timer / 60)}:
                            {(timer % 60).toString().padStart(2, '0')}
                        </div>
                    </div>
                </nav>
                <div className='container'>
                    <div className='d-flex mt-5 fs-4 align-items-center justify-content-center'><i class="fa-regular fa-square-check"></i> <span className='ms-3'>Quiz</span> </div>
                    <div className='container text-start'>
                        <span className='ms-5'>Question {data[index].id} of 10</span>
                        <div className="progress d-flex justify-content-start w-25 ms-5 mt-3 " role="progressbar" aria-label="Example 1px high" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{ "height": "3px" }}>
                            <div class="progress-bar" style={{ "width": `${progress}%` }}></div>
                        </div>
                    </div>
                    <div className='MCQ fs-5 mx-5 my-4 px-1  rounded text-start'>
                        <span className='w-100 border border-dark p-2 rounded-pill'>Multiple Choice Question</span>
                        <p className='my-4'>{data[index].question}</p>
                        <div class="form-check m-2">
                            <input class="form-check-input" onClick={(e) => setChoose(data[index].option1)} type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label class="form-check-label" for="flexRadioDefault1">
                                {data[index].option1}
                            </label>
                        </div>
                        <div class="form-check m-2">
                            <input class="form-check-input" onClick={(e) => setChoose(data[index].option2)} type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                            <label class="form-check-label" for="flexRadioDefault2">
                                {data[index].option2}
                            </label>
                        </div>
                        <div class="form-check m-2">
                            <input class="form-check-input" onClick={(e) => setChoose(data[index].option3)} type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                            <label class="form-check-label" for="flexRadioDefault3">
                                {data[index].option3}
                            </label>
                        </div>
                        <div class="form-check m-2">
                            <input class="form-check-input" onClick={(e) => setChoose(data[index].option4)} type="radio" name="flexRadioDefault" id="flexRadioDefault4" />
                            <label class="form-check-label" for="flexRadioDefault4">
                                {data[index].option4}
                            </label>
                        </div>
                    </div>
                    <div className='d-flex justify-content-end w-100'>
                        <button className='btn btn-primary px-4 py-2' type='button' onClick={next}>{buttons}</button>
                    </div>
                    <div>
                    </div>
                </div>

            </div>
            <div className='bodie d-flex justify-content-center align-items-center'>
                <div className='small-bodi d-flex align-items-center justify-content-center border border-2 border-dark'>
                    <h2><strong>You can take quiz only on large screen.</strong></h2>
                </div>
            </div>
        </div>
    )
}

export default Quiz
