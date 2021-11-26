// import "./styles/dist/style.css";
// import axios from "axios";
import { useRef, useState } from "react";
import ImagePer from "./ImagePer";
import { imagesBySearchTerm } from "./utility/unsplash";

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
    if (data !== undefined && data.length > 0) {
      setImagesList(data);
    } else if (inputRef.current.value == "") {
      alert("Enter a term to Search");
    }
  };

  return (
    <div className="container mx-auto py-4">
      <section className="flex flex-col justify-center items-center">
        <label className="mb-4">
          <input
            type="text"
            ref={inputRef}
            placeholder="Search term"
            className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          />
        </label>
        <button
          onClick={getInputvalue}
          className="px-4 py-2 bg-red-400 font-semibold text-white rounded-lg"
        >
          Search
        </button>
      </section>

      <div>
        {imagesList && (
          <h1 className="text-center text-white">
            Search result for {searchTerm}{" "}
          </h1>
        )}
        <div className="grid grid-cols-5 items-center gap-2">
          {imagesList &&
            imagesList.map((i, idx) => {
              return <ImagePer Path={i} idx={idx} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
