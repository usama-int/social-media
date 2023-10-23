import React from 'react'
import Cover from '../../img/mainn.jpg'
import Profile from '../../img/usama.jpeg'
import './ProfileCard.css'
import { useUserContext } from '../../hooks/useUserContext'

const ProfileCard = () => {
    const {user} = useUserContext();

  return (
   
   <div className="ProfileCard">

<div className="ProfileImages">
<img src={Cover} alt="" />
<img src={user.photos[0].value} alt="" />
</div>

<div className="ProfileName">
    <span> {user.displayName}</span>
    <span> Senior Front-End Developer</span>
</div>

<div className="followStatus">
<hr />
<div>
    <div className="follow">
        <span>69</span>
        <span>Followings</span>
    </div>
    <div className='vl'></div>
    <div className="follow">
        <span>2,400</span>
        <span>Followers</span>
    </div>
</div>
<hr />
</div>

<span>
    My Profile
</span>

    </div>
  )
}

export default ProfileCard
