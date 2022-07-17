import React from 'react';
import './Swipe.css';
import Like from './Like';
import Dislike from './Dislike';
const Actions = ({ person, modifySuperficialChoices }) => (
  <div id="actions">
    
   
    <Dislike
      userId={person.id}
      modifySuperficialChoices={modifySuperficialChoices}
    />
    <Like
      userId={person.id}
      modifySuperficialChoices={modifySuperficialChoices}
    />
   
  </div>
);

export default Actions;
