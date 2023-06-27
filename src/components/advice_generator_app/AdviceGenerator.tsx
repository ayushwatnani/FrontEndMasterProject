import React from 'react'
import './AdviceGenerator.css'
import dividerDesktop from '../../assets/advice_generator_app/pattern-divider-desktop.svg'
import dice from '../../assets/advice_generator_app/icon-dice.svg'
import dividerMobile from '../../assets/advice_generator_app/pattern-divider-mobile.svg'

const AdviceGenerator = () => {
  return (
    <div className='body'>
      <div className="card">
        <p>ADVICE #1</p>
        <h2>"This is an advice"</h2>
        <img src={dividerDesktop} className='divider_desktop' alt="" />
        <img src={dividerMobile} className='divider_mobile' alt="" />
        <div className="dice">
          <img src={dice} alt="" />
        </div>
      </div>
    </div>
  )
}

export default AdviceGenerator