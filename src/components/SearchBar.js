import React,{ useState } from "react";

const SearchBar = ({ formSubmit }) => {
  
  // Initialize Name State for storing input value
  const [name, setName] = useState("");
  
  //Function that gets called when the form is submitted
  const handleSubmit = (e) => {
    e.preventDefault();
    formSubmit(name);
  }
  
  return (
    <div className="ui segment">
      <form onSubmit={handleSubmit} className="ui form">
        <div className="field">
          <label htmlFor="word" style={{ fontSize: "1.5rem", marginBottom:"1rem"}}>Image Search</label>
          <input
            type="text"
            name="word"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
}

export default SearchBar;