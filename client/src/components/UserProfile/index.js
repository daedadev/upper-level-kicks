import React, { useContext, useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import LoadingSavedShoe from "../LoadingComponents/LoadingSavedShoe";
import SavedShoe from "../SavedShoeHolder";
import "./style.css";

function UserProfile() {
  const [savedShoes, setSavedShoes] = useState([]);
  const [loaded, setLoaded] = useState();
  const { currentUser } = useAuth();

  async function getSavedShoes() {
    try {
      setLoaded(false);
      await fetch(`http://localhost:3001/api/shoe/${currentUser.uid}`, {
        method: `GET`,
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((info) => info.json())
        .then((info) => {
          setLoaded(true);
          setSavedShoes(info);
          console.log(info);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  }

  async function removeSavedShoe(styleID) {
    const payload = {
      user_id: currentUser.uid,
      styleID: styleID,
    };

    try {
      await fetch(`http://localhost:3001/api/shoe/`, {
        method: `DELETE`,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }).then((res) => {
        if (res.status === 200) {
          window.alert("Shoe has been successfully removed");
          window.location.reload();
        } else {
          window.alert("Error removing shoe");
        }
      });
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getSavedShoes();
  }, [currentUser]);

  const fakeArray = ["", "", "", "", "", ""];

  const shoesLoading = fakeArray.map(() => {
    return <LoadingSavedShoe />;
  });

  const shoesLoaded = savedShoes.map((shoe) => {
    return <SavedShoe saved={shoe} deleteShoe={removeSavedShoe} />;
  });

  if (loaded) {
  }

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
          {loaded ? shoesLoaded : shoesLoading}
        </section>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default UserProfile;
