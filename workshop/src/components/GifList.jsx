import React from 'react';
import Gif from './Gif';

const GifList = () => {
  const gifIds = ["zOvBKUUEERdNm", "13HgwGsXF0aiGY", "13UZisxBxkjPwI"]
  return (
    <div className="gif-list">
      {gifIds.map((gifId) => <Gif id={gifId} key={gifId} />)}
    </div>
  );
};

export default GifList;
