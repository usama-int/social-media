import React from 'react'
import ProfileCard from '../ProfileCard.jsx/ProfileCard'
 import LogoSearch from '../LogoSearch/LogoSearch'
 import "./ProfileSide.css"
// import ProfileCard from '../ProfileCard.jsx/ProfileCard'
// import FollowersCard from '../FollowersCard/FollowersCard'
// import "./ProfileSide.css"
const ProfileSide = () => {
  return (
    <div className="ProfileSide">
        <LogoSearch/>
        <ProfileCard/>
    </div>
  )
}

export default ProfileSide