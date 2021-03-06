import React from 'react';


const IdeaListItem = ({ text, title }) => (
  <div>
    <h2>{title}</h2>
    <h4>{text}</h4>
  </div>
);

export default IdeaListItem;
