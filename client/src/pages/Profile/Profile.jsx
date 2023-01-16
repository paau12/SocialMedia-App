import React from 'react'
import ProfileLeft from '../../components/ProfileLeft/ProfileLeft'
import './Profile.css'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import PostSide from '../../components/PostSide/PostSide'
import TagSide from '../../components/TagSide/TagSide'

const Profile = () => {
  return (
    <div className="Profile">
        <ProfileLeft/>
        <div className="Profile-center">
          <ProfileCard location= "profilePage"/>
          <PostSide/>
        </div>
        <TagSide/>
    </div>
  )
}

export default Profile