import React from 'react'
import './profile.css'
import imageVictor  from '../../images/image-victor.jpg'

function Profile() {
    return (
      <div className="box-profile">
        <header className="header-profile">
        </header>
        <div className="picture-profile">
            <div className="border-profile">
                <img src={imageVictor} alt="profile image" />
            </div>
        </div>
        <div className="info-profile">
            <div className="personal-infos-profile">
                <h3>Victor Crest</h3>
                <span>26</span>
            </div>
                <p className="country-profile">London</p>
        </div>
        <div className="stats-profile">
            <div className="stats-followers-profile">
                <h3>80k</h3>
                <p>Followers</p>
            </div>
            <div className="stats-likes-profile">
                <h3>803k</h3>
                <p>Likes</p>
            </div>
            <div className="stats-photos-profile">
                <h3>1.4k</h3>
                <p>Photos</p>
            </div>
            </div>
      </div>
    );
  }

export default Profile