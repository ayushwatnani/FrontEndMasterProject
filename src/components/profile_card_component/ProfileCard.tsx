import React from 'react'
import './ProfileCard.css'

const ProfileCard = () => {
  return (
    <div className='body'>
        <div className="container">
            <div className="wrapper">
                <img src="src\assets\profile_card_component\bg-pattern-card.svg" alt="" />                
                <div className="content">
                    <img src="src\assets\profile_card_component\image-victor.jpg" alt="" />
                    <h2> Victor Crest <span>26</span></h2>
                    <p>London</p>

                    <div className="footer">
                        <div>
                            <p className="num">80K</p>
                            <p>Followers</p>
                        </div>
                        <div>
                            <p className="num">803K</p>
                            <p>Likes</p>
                        </div>
                        <div>
                            <p className="num">  1.4K</p>
                            <p>Photos</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileCard