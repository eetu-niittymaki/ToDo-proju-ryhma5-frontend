import React, { useState, useEffect } from "react";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";

const Search = ({ todos, search1 }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const tasks = [];

  for (let i = 0; i < todos.length; i++) {
    tasks.push(todos[i].task);
  }

  console.log(tasks);

  useEffect(() => {
    const results = tasks.filter((task) =>
      task.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResult(results);
    search1(searchResult, searchTerm.trim());
  }, [searchTerm]);

  const onChange = (event) => {
    setSearchTerm(event.target.value);
  };

  /* const onClickHandler = () => {
    tasks.map((task) => {
      if (searchResult !== task) {
        console.log("no matches");
      } else if (searchResult === task) {
        setSearchResult(task);
        search1(searchResult);
      }
    });
  }; */

  return (
    <div>
      <form className="searchContainer">
        <TextField
          className="searchInput"
          value={searchTerm}
          onChange={onChange}
          label="Search todo.."
          InputProps={{
            endAdornment: <InputAdornment></InputAdornment>,
          }}
        />
      </form>
    </div>
  );
};

export default Search;
