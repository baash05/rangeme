import React from 'react';
import './FlickerDetails.css';

const FlickerDetails = ({author, date, tags, url}) => {
  return (
    <div className="FlickerDetails">
      <div className="close_button">+</div>
      <h1>Picture By: <b>{author}</b></h1>
      <img src={url} alt={author}></img>
      <div className="url">
        <label>Url:</label>
        <a href={url} target="blank">{url}</a>
      </div>
      <div className="date"><label>Captured:</label>{date}</div>
      <div className="tags"><label>Tags:</label>:{tags}</div>
    </div>
  )
}

export default FlickerDetails;
