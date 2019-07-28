// import React, { Component } from "react";
import React from "react";
import "./Movie.css";
import PropTypes from "prop-types"; //type check module
import LinesEllipsis from "react-line-ellipsis";
// import poster from "./hunger_game.jpg";

/*
class Movie extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
  };

  render() {
    // console.log(this.props);

    return (
      <div>
        <MoviePoster alt={this.props.title} poster={this.props.poster} />

        <h1>{this.props.title}</h1>
      </div>
    );
  }
}
*/

function Movie({ title, poster, genres, synopsis }) {
  return (
    <div className="Movie">
      <div className="Movie__Columns">
        <MoviePoster alt={title} poster={poster} />
      </div>
      <div className="Movie__Column">
        <h1>{title}</h1>
        <div className="Movie__Genres" />
        {genres.map((genre, index) => (
          <MovieGenre genre={genre} key={index} />
        ))}
      </div>
      <div className="Movie__Synopsis">
        <LinesEllipsis
          text={synopsis}
          maxLine="3"
          ellipsis="..."
          trimRight
          basedOn="letters"
        />
      </div>
    </div>
  );
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  synopsis: PropTypes.string.isRequired
};

function MovieGenre({ genre }) {
  return <span className="Movie__Genre">{genre}&nbsp;&nbsp;</span>;
}

MovieGenre.propTypes = {
  genre: PropTypes.string.isRequired
};

/*
class MoviePoster extends Component {
  static propTypes = {
    poster: PropTypes.string.isRequired
  };

  render() {
    return (
      <React.Fragment>
        <img
          // src={require("./hung.png")}
          //   src={poster}
          src={this.props.poster}
          alt={this.props.alt}
        />
      </React.Fragment>
    );
  }
}
*/

function MoviePoster({ poster, alt }) {
  //functional component는 componentWillMount, componentDidMount, render, state 모두 없다. return만 존재
  //functional component는 return만을 반환하기 때문에

  return <img src={poster} alt={alt} title={alt} className="Movie__Poster" />;
}

MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired
};

export default Movie;
