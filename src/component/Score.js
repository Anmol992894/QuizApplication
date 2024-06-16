import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './style.css'
const Score = () => {
    const location=useLocation();
    const navigate=useNavigate();
    const [score,setScore]=useState(Number(localStorage.getItem('Score')))
    console.log(localStorage.getItem('Progress'));
    const goto=()=>{
        localStorage.setItem('Progress',0);
        localStorage.setItem('Index',0);
        localStorage.setItem('Score',0);
        localStorage.setItem('timer',600);
        navigate('/')
    }
  return (
    <div>
        <div className='d-flex mt-5 justify-content-end w-100'>
            <button className='btn btn-primary py-2 px-3' onClick={goto}>Take Quiz</button>
        </div>
      <div className='mt-5 d-flex flex-column justify-content-center align-items-center'>
                <div>
                    <i style={{fontSize:"170px"}} className="mb-5 text-primary fa-solid fa-feather"></i>
                    </div>
                <div className='d-flex align-items-center justify-content-center'>
                    <h2><strong>Your Score {score}/100</strong></h2>
                </div>
        </div>
    </div>
  )
}

export default Score
