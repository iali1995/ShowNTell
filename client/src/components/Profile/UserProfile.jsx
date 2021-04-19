import React, { useState } from 'react';
import axios from 'axios';
import cartoon from './carouselPhotos/cartooncircle.jpg';
import Favorites from './Favorites.jsx';
import EditProfile from './EditProfile.jsx';
import '../MovieMode/MovieMode.css'; 
import './profile.css'; 

// const Button = styled.button`
// color: white;
// font-size: 1em;
// margin-top: 25px;
// padding: 0.25em 1em;
// border: 1px solid black;
// border-radius: 3px;
// font-family: 'Montserrat', sans-serif;
// background: transparent;
// margin-left: -255px;
// margin-bottom: 140px;

// `;



const UserProfile = ({ user, subs }) => {
  const [bio, setBio] = useState(''); 
  const { name, friends } = user; 
  const [show, setShow] = useState(false);

 

  const handleSubmit = (e, bioData) => {
    e.preventDefault(); 
    setBio(bioData); 
  };
  // createbio(newBio) {
  //   axios.post('/user/bio', newBio)
   
  //     .catch(err=>{
  //       if (err) {
  //         console.log(err);
  //       } else {
  //         console.log('got the bio');
  //       }
  //     });
  // }

  return (
    <div>
      <div className="body">
        <div className="userProfile">
          <div>

            <div className="profile">
              <img className="cartoon" src={cartoon} alt=""/>
              <h3>Name:</h3>
              <p>{ name }</p>
              <h3>Bio:</h3>
              <p>{bio}</p>
              <h3>Genres:</h3>
              <p>Romantic Comedies</p>
            </div>
          </div>
          <div className="favorites">
            <h3>Your Favorites</h3>
            <p>based on your subscriptions</p>
            <Favorites user={user} subs={subs} />
          </div>
          <div className="recommendations">
            <h3>Your Recommendations</h3>
            <p>Things you might like.</p>
            <img className="moto" alt=""/>
          </div>
          <div>
            <div className="dropdown2">
              <EditProfile handleSubmit={handleSubmit}/>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default UserProfile;

