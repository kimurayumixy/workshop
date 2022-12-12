import React from 'react';

const Gif = (props) => {
  const { id } = props;
  const url = `https://media.giphy.com/media/${id}/giphy.gif`;
  return (
    <img src={url} alt="" className="gif" />
  );
};

export default Gif;
