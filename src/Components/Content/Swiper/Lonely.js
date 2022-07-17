import React from 'react';
import LikedPerson from './LikedPerson';
import './Swipe.css';
const Lonely = ({ activeUserImage, likedUsers }) => (
  <div id="lonely">
    <p>chad</p>

    <span className="pulse">
      <img src={`/images/users/${activeUserImage}`} alt="You..." />
    </span>

    <div id="liked-people">
      <p>
        {likedUsers.length > 0
          ? "Вот кого вы пролайкали! Надеемся, они вас тоже лайкнут!"
          : 'Вы никого не лайкнули'}
      </p>

      {likedUsers.map(item => (
        <LikedPerson key={item.id} person={item} />
      ))}

     
    </div>
  </div>
);

export default Lonely;
