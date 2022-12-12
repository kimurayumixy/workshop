import React, { useState } from 'react';
import SearchBar from './SearchBar';
import Gif from './Gif';
import GifList from './GifList';

const App = () => {
  const [ selectedGif, setSelectedGif ] = useState("LmNwrBhejkK9EFP504");
  const [ gifIds, setGifIds ] = useState(["zOvBKUUEERdNm", "13HgwGsXF0aiGY", "13UZisxBxkjPwI"])
  return (
    <div>
      <div className="left-scene">
        <SearchBar />
        <div className="selected-gif">
          <Gif id={selectedGif} />
        </div>
      </div>
      <div className="right-scene">
        <GifList gifIds={gifIds} />
      </div>
    </div>
  );
};

export default App;
