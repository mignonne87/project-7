// import the libraries and routes
import React from 'react';
import NotFound from './NotFound';
import Photos from './Photos'
  
const Gallery = (props) => {
  const results = props.data
  let photos;
  //If results do not populate render the not found component
  if (results.length > 0) { 
    photos = results.map(img => 
      <Photos 
        farm={img.farm}
        server={img.server}
        id={img.id}
        secret={img.secret}
        title={img.title} 
        key={img.id} />
    );
  } else {
    photos = <NotFound />
  }

  return(
    //create ul element and use props and photos variable to pass info
    <div className="photo-container">
      <h1>{props.title}</h1>
      <ul>
        {photos}
      </ul>
    </div>
  )  
}

export default Gallery;