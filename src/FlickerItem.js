import React from 'react';
import './FlickerItem.css';
import FlickerDetails from './FlickerDetails';

const FlickerItem = ({id, author, date, src, tags, url}) => {
  return (
    <div className="FlickerItem" >
      <label htmlFor={id}>
        <img className="thumb" src={src} alt={author} width="120px"></img>
      </label>
      <input type="checkbox" className="showNext" id={id} ></input>
      <label htmlFor={id} class="content_more details_container">
        <FlickerDetails
          author={author}
          date={date}
          tags={tags}
          url={url} />
      </label>
    </div>
  );
}

export default FlickerItem;
