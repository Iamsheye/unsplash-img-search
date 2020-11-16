import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import P from "./components/P";

const App = () => {
  
  // Initialize image state for fetched unsplash images
  const [image, setImage] = useState([]);
  
  //onSubmit function that gets called whenever the input value in SearchBar gets submitted
  const searchSubmit = async (name) => {
    const URL = "https://api.unsplash.com/";
    const response = await axios.get(`${URL}search/photos`, {
      params: { query: name },
      headers: {
        Authorization: "Client-ID YmoJa9Ai7R-L0pFZcpzEqqMvJeyIAJ3NzK62WQnM_Ts"
      }
    });
    
    setImage(response.data.results);
  }
  
  return (
    <div className="ui container" style={styles}>
      <SearchBar formSubmit={searchSubmit}/>
      {(image.length) ? <P>Found {image.length} images</P> : ""}
      <ImageList images={image}/>
    </div>
  );
}

const styles = {
  marginTop: "-3px"
}

export default App;