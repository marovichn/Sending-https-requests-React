import React, { useRef, useState } from "react";

import classes from "./AddMovie.module.css";

function AddMovie(props) {
  const [values, setValues] = useState({
    title: "",
    releaseDate: "",
    openingText: "",
  });
  const titleRef = useRef("");
  const openingTextRef = useRef("");
  const releaseDateRef = useRef("");

  function submitHandler(event) {
    event.preventDefault();

    // could add validation here...

    const movie = {
      title: titleRef.current.value,
      openingText: openingTextRef.current.value,
      releaseDate: releaseDateRef.current.value,
    };

    props.onAddMovie(movie);
    setValues({
      title: "",
      releaseDate: "",
      openingText: "",
    });
  }
  const changeDate = (e) => {
    setValues((prev) => {
      return { ...prev, releaseDate: e.target.value };
    });
  };
  const changeText = (e) => {
    setValues((prev) => {
      return { ...prev, openingText: e.target.value };
    });
  };
  const changeTitle = (e) => {
    setValues((prev) => {
      return { ...prev, title: e.target.value };
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="title">Title</label>
        <input
          onChange={changeTitle}
          value={values.title}
          type="text"
          id="title"
          ref={titleRef}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="opening-text">Opening Text</label>
        <textarea
          onChange={changeText}
          value={values.openingText}
          rows="5"
          id="opening-text"
          ref={openingTextRef}
        ></textarea>
      </div>
      <div className={classes.control}>
        <label htmlFor="date">Release Date</label>
        <input
          onChange={changeDate}
          value={values.releaseDate}
          type="date"
          id="date"
          ref={releaseDateRef}
        />
      </div>
      <button>Add Movie</button>
    </form>
  );
}

export default AddMovie;
