import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MypostsContainer from './MyPosts/MypostsContainer';


const Profile = (props) => {
  return (  
    <div>
      <ProfileInfo />
      <MypostsContainer /> 
    </div>        
  );
}

export default Profile;