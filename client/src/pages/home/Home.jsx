import React from "react";
import PostSide from "../../components/PostSide/PostSide";
import ProfileSide from "../../components/profileSide/ProfileSide";
import TagSide from "../../components/TagSide/TagSide";
import "./Home.css";

const Home = () => {
  return (
    <div className="Home">
      <ProfileSide/>
      <PostSide />
      <TagSide/>
    </div>
  );
};

export default Home;
