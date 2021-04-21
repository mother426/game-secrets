import React, { useState } from "react";
import api from "../../utils/api";
import "./style.css";

function FindSecrets() {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(form => ({...form, [name]: value}));
  };

  const handleSearch = async (e) => {
    console.log(form.search)
    e.preventDefault();
    const {data} = await api.searchByTitle({title: form.search});
    console.log(data);
  }

  return (
    <div class="search-area">
      <h4 className="search-title">Search Game by Title to find Secrets</h4>
      <div className="row justify-content-center">
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="text"
            name="search"
            placeholder="Search for a Game"
            aria-label="Search"
            onChange={handleChange}
            value={form.search}
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
            onClick={handleSearch}
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default FindSecrets;
