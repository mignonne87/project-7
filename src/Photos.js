//import the libraries

import React from 'react';

const Photos = ({ farm, server, id, secret, title }) => {
  //Photo component that display li and img elements
  return (
    <li>
      <img key={id} src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`} alt={title} />
    </li>
  );
}

export default Photos;