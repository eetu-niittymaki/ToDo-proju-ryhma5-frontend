import React from "react";
import { Link } from "react-router-dom";

const Paginate = ({ todosPerPage, totalTodos, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalTodos / todosPerPage); i++) {
    pageNumbers.push(i);
  }

  console.log(todosPerPage);
  console.log(totalTodos);
  console.log(pageNumbers);

  const handleClick = () => {
    pageNumbers.map((number) => paginate(number));
  };

  return (
    <nav>
      <ul className="pagination">
        {" "}
        PAGE <br></br>
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <Link to={"/" + number} onClick={handleClick}>
              {number}{" "}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Paginate;
