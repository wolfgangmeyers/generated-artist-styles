import React, {useEffect, useState} from 'react';
import './App.css';
import InfiniteScroll from "react-infinite-scroll-component";
import artists from "./artists";
import { JsxElement } from 'typescript';


function App() {

  const [loaded, setLoaded] = useState(0);
  const [images, setImages] = useState<Array<string>>([]);
  const [search, setSearch] = useState("");

  const filteredArtists = filterArtists(artists, search);

  function normalize(s: string) {
    return s.toLowerCase().replace(/\s/g, "");
  }

  function filterArtists(artists: Array<string>, search: string) {
    return artists.filter(artist => normalize(artist).includes(normalize(search)));
  }

  function onNext() {
    load(loaded, images, filterArtists(artists, search))
  }

  function load(loaded: number, images: Array<string>, filteredArtists: Array<string>) {
    console.log(`onNext loaded=${loaded}, images=${images.length}`);
    const artistChunk = filteredArtists.slice(loaded, loaded + 10);
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
    console.log(`onNext completed loaded=${loaded}, images=${images.length}`);
  }

  useEffect(() => {
    setLoaded(0);
    setImages([]);
    const filteredArtists = filterArtists(artists, search)
    load(0, [], filteredArtists);
  } , [search])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Artist Styles rendered with Craiyon</h1>
        Filter: <input style={{width: "300px", height: "30px", fontSize: "25px"}} type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
        <InfiniteScroll
          dataLength={images.length}
          next={onNext}
          hasMore={loaded < artists.length}
          loader={<h4>Loading...</h4>}
        >
          {images.map((image, index) => (
            <div key={index} style={{margin: "5px", float: "left", border: "1px solid black"}}>
              <img  src={image} key={index} alt={filteredArtists[index / 5]} />
              <br/>
              <span style={{fontSize: "16px"}}>{filteredArtists[Math.floor(index / 5)]}</span>
            </div>
          ))}
        </InfiniteScroll>
      </header>
    </div>
  );
}

export default App;
