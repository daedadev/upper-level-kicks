import React, { useContext, useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import "./style.css";

function UserProfile() {
  const { currentUser } = useAuth();

  console.log(currentUser);

  useEffect(() => {});

  if (currentUser) {
    return (
      <div className="dashboard-holder">
        <section className="dash-profile-holder">
          <article className="dash-image-holder">
            <img className="dash-pfp" src={currentUser.photoURL}></img>
          </article>
          <article className="dash-bio-holder">
            <h1>{currentUser.displayName}</h1>
            <p>lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum</p>
          </article>
        </section>
        <section className="saved-shoes-holder">
          <div className="small-saved-shoe-holder">
            <div className="saved-top-holder">
              <img></img>
              <h1>Shoe Title</h1>
            </div>
            <div className="saved-bottom-holder">
              <h1>Shoe Title</h1>
            </div>
          </div>
          <div className="small-saved-shoe-holder">
            <div className="saved-top-holder">
              <img></img>
              <h1>Shoe Title</h1>
            </div>
            <div className="saved-bottom-holder">
              <h1>Shoe Title</h1>
            </div>
          </div>
          <div className="small-saved-shoe-holder">
            <div className="saved-top-holder">
              <img></img>
              <h1>Shoe Title</h1>
            </div>
            <div className="saved-bottom-holder">
              <h1>Shoe Title</h1>
            </div>
          </div>
        </section>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default UserProfile;
