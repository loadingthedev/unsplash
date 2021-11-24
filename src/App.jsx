import "./App.css";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { images, imagesBySearchTerm } from "./utility/unsplash";

function App() {
  const [imagesList, setImagesList] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef("");
  const getInputvalue = async () => {
    // console.log(inputRef.current.value);
    setSearchTerm(inputRef.current.value);
    let data = (await imagesBySearchTerm(inputRef.current.value)).results.map(
      (i) => i.urls.thumb
    );

    setImagesList(data);
  };

  return (
    <div className="App">
      <label>
        <input type="text" ref={inputRef} />
      </label>
      <button onClick={getInputvalue}>Get input value</button>

      <div className="downloadsection">
        {searchTerm && <h1>Search result for {searchTerm} </h1>}
        {imagesList &&
          imagesList.map((i, idx) => {
            return <img key={idx} src={i} alt="idx" />;
          })}
      </div>
    </div>
  );
}

export default App;
