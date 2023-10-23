import React from 'react'
import ProfileSide from '../../components/profileSide/ProfileSide'
import './Home.css'
import { useUserContext } from '../../hooks/useUserContext';

const Home = () => {

  const {setUser} = useUserContext();
  const logout = () => {
    setUser(null);
    window.open("https://uol-socia-media-130e4e1229f5.herokuapp.com/auth/logout", "_self");
  };
  return (
    <div className="App">
    <div className="blur" style={{top: '-18%' , right: '0'}}></div>
    <div className="blur" style={{top: '36%' , left: '-8rem'}}></div>
    
    <div className="Home">
    <ProfileSide/>
    <div className="postSide">Posts</div>
    <div className="rightSide"> <button className='button--red' onClick={logout}>Logout</button></div>
    </div>
    </div>
    
  )
}

export default Home;
