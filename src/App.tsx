import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import InfiniteScroll from "react-infinite-scroll-component";
import artists from "./artists";
import { JsxElement } from 'typescript';


function App() {

  const [loaded, setLoaded] = useState(0);
  const [images, setImages] = useState<Array<string>>([]);

  function onNext() {
    setTimeout(() => {
      const artistChunk = artists.slice(loaded, loaded + 10);
      let imageChunk: Array<string> = [];
      for (let artist of artistChunk) {
        const prefix = artist.replaceAll(" ", "_");
        const artistImages: Array<string> = [];
        for (let i = 0; i < 5; i++) {
          const imageSrc = `${process.env.PUBLIC_URL}/artist_styles/${prefix}_${i}.png`;
          artistImages.push(imageSrc);
        }
        imageChunk = imageChunk.concat(artistImages)
      }
      setImages(images => images.concat(imageChunk));
      setLoaded(loaded => loaded + 10);
    }, 500)
    console.log(`onNext loaded=${loaded}, images=${images.length}`);
    
  }

  useEffect(() => {
    setLoaded(0);
    setImages([]);
    onNext();
  } , [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Artist Styles rendered with Craiyon</h1>
        <InfiniteScroll
          dataLength={images.length}
          next={onNext}
          hasMore={loaded < artists.length}
          loader={<h4>Loading...</h4>}
        >
          {images.map((image, index) => (
            <div style={{margin: "5px", float: "left", border: "1px solid black"}}>
              <img  src={image} key={index} alt={artists[index / 5]} />
              <br/>
              <span style={{fontSize: "16px"}}>{artists[Math.floor(index / 5)]}</span>
            </div>
          ))}
        </InfiniteScroll>
      </header>
    </div>
  );
}

export default App;
