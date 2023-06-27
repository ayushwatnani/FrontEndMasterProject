import React, { useEffect, useState } from 'react'
import './AdviceGenerator.css'
import dividerDesktop from '../../assets/advice_generator_app/pattern-divider-desktop.svg'
import dice from '../../assets/advice_generator_app/icon-dice.svg'
import dividerMobile from '../../assets/advice_generator_app/pattern-divider-mobile.svg'

const AdviceGenerator = () => {
  const [advice, setAdvice] = useState<any>({});
  const getAdvice = async () => {
    const response = await fetch('https://api.adviceslip.com/advice');
    const jsonData = await response.json();
    console.log(jsonData);
    setAdvice(jsonData);
  };

  useEffect(() => {
    getAdvice();
  }, [])

  return (
    <div className='body'>
      <div className="card">
        <p>ADVICE #{advice?.slip?.id}</p>
        <h2>"{advice?.slip?.advice}"</h2>
        <img src={dividerDesktop} className='divider_desktop' alt="" />
        <img src={dividerMobile} className='divider_mobile' alt="" />
        <div className="dice" onClick={getAdvice}>
          <img src={dice} alt="" />
        </div>
      </div>
    </div>
  )
}

export default AdviceGenerator