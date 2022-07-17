import React from 'react';
import './Swipe.css';
const Dislike = ({ userId, modifySuperficialChoices }) => (
  <button
    type="button"
    onClick={() => modifySuperficialChoices(userId, 'ADD_TO_DISLIKED_USERS')}
  >
    <img src="images/misc/dislike.png" alt="Like User" />
  </button>
);

export default Dislike;
