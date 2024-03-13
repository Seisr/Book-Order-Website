import React, { useState, useEffect } from "react";
import "./AuthorsList.css";
import { NavLink } from "react-router-dom";
import BookDataService from "../../services/BookDataService";
import Loading from "../../components/Loading/Loading";

const AuthorsList = () => {
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    retrieveAuthors();
  }, []);

  const retrieveAuthors = () => {
    setLoading(true);
    BookDataService.getAllAuthors()
      .then((res) => {
        setAuthors(res.data);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  console.log(authors);
  return (
    <div>
      {loading && <Loading />}
      <section className="authors_container">
        <div className="authors_list">
          {authors.flatMap((author, i) => {
            if (i != 1) {
              return (
                <div key={i} className="authors">
                  <NavLink to={`${author._id}`}>
                    <img src={`${author.imageUrl}`} alt="" />
                    <h2>{author.name}</h2>
                  </NavLink>
                </div>
              );
            }
          })}
        </div>
      </section>
    </div>
  );
};

export default AuthorsList;
