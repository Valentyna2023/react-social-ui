import React from "react";
import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img className="profileCoverImg" src="assets/post/3.jpeg" alt="" />
              <img className="profileUserImg" src="assets/person/7.jpeg" alt="" />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Maria Kit</h4>
              <span className="profileInfoDesc">Hello my friends!</span>
              <button className="profileEditButton">Edit Profile</button>
              <div className="profileCounts">
                <div className="profileCount">
                  <span className="profileCountNumber">384</span>
                  <span className="profileCountLabel">Followers</span>
                </div>
                <div className="profileCount">
                  <span className="profileCountNumber">428</span>
                  <span className="profileCountLabel">Following</span>
                </div>
              </div>
              <button className="profileFollowButton">Follow</button>
            </div>
          </div>
          <div className="profileRightBottom">
            <ul className="profileTabs">
              <li className="profileTab">Posts</li>
              <li className="profileTab">Photos</li>
              <li className="profileTab">Videos</li>
              <li className="profileTab">Saved</li>
            </ul>
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}
