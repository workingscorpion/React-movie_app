import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Movie from "./Movie";
// import matrix from "./matrix.jpg";
// import hunger_game from "./hunger_game.jpg";
// import oldboy from "./oldboy.jpg";
// import aladdin from "./aladdin.jpg";

/*
const matrix = require("./matrix.jpg");
const hunger_game = require("./hunger_game.jpg");
const oldboy = require("./oldboy.jpg");
const aladdin = require("./aladdin.jpg");
*/
/*
const moviesTitles = [
  "Avengers EndGame",
  "Catching Fire",
  "Ironman3",
  "Aladdin"
];
const moviesImages = [
  "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg",
  "https://upload.wikimedia.org/wikipedia/en/1/12/Catching-Fire_poster.jpg",
  "https://upload.wikimedia.org/wikipedia/th/thumb/d/d7/Iron_Man_3_teaser_poster.jpg/250px-Iron_Man_3_teaser_poster.jpg",
  "https://upload.wikimedia.org/wikipedia/en/9/9a/Aladdin_%28Official_2019_Film_Poster%29.png"
];
*/

// const movies_images = [{ matrix }, { hunger_game }, { oldboy }, { aladdin }];

class App extends Component {
  //render order : compenetWillMount -> render -> componentDidMount
  //update order : componentWillReceiveProps() => ShouldComponentUpdate() => componenWillUpdate() => render() => componentDidUpdate()

  // componentWillMount() {}

  state = {
    // movies: [
    //   {
    //     title: "Avengers EndGame",
    //     poster:
    //       "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg"
    //   },
    //   {
    //     title: "Catching Fire",
    //     poster:
    //       "https://upload.wikimedia.org/wikipedia/en/1/12/Catching-Fire_poster.jpg"
    //   },
    //   {
    //     title: "Ironman3",
    //     poster:
    //       "https://upload.wikimedia.org/wikipedia/th/thumb/d/d7/Iron_Man_3_teaser_poster.jpg/250px-Iron_Man_3_teaser_poster.jpg"
    //   },
    //   {
    //     title: "Aladdin",
    //     poster:
    //       "https://upload.wikimedia.org/wikipedia/en/9/9a/Aladdin_%28Official_2019_Film_Poster%29.png"
    //   },
    //   {
    //     title: "frozen",
    //     poster:
    //       "https://is3-ssl.mzstatic.com/image/thumb/Video49/v4/f3/ed/bd/f3edbda2-9a2a-bee3-957c-b3f9a93eeb12/pr_source.lsr/268x0w.png"
    //   }
    // ]
  };

  componentDidMount() {
    this._getMovies();
    //javascript의 document.onload와 유사한 것  //component mount가 다 되면 실행되는 것
    /*
    setTimeout(() => {
      this.setState({
        greeting: "Hello again"
      });
    }, 2000);
    */
    /*
    setTimeout(() => {
      this.setState({
        movies: [
          {
            title: "Avengers EndGame",
            poster:
              "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg"
          },
          {
            title: "Catching Fire",
            poster:
              "https://upload.wikimedia.org/wikipedia/en/1/12/Catching-Fire_poster.jpg"
          },
          {
            title: "Ironman3",
            poster:
              "https://upload.wikimedia.org/wikipedia/th/thumb/d/d7/Iron_Man_3_teaser_poster.jpg/250px-Iron_Man_3_teaser_poster.jpg"
          },
          {
            title: "Aladdin",
            poster:
              "https://upload.wikimedia.org/wikipedia/en/9/9a/Aladdin_%28Official_2019_Film_Poster%29.png"
          },
          {
            title: "frozen",
            poster:
              "https://is3-ssl.mzstatic.com/image/thumb/Video49/v4/f3/ed/bd/f3edbda2-9a2a-bee3-957c-b3f9a93eeb12/pr_source.lsr/268x0w.png"
          }
        ]
        //...this.state.movies 구문이 없으면 기존에 있던 내용들을 사라지고 추가로 입력되는 것만 남음.
        // movies: [
        //movie state를 변경할 건데
        // ...this.state.movies, //이 전에 있던 내용도 그대로 유지하고 밑에 구문을 추가하라는 의미
        // {
        //   title: "frozen",
        //   poster:
        //     "https://is3-ssl.mzstatic.com/image/thumb/Video49/v4/f3/ed/bd/f3edbda2-9a2a-bee3-957c-b3f9a93eeb12/pr_source.lsr/268x0w.png"
        // }
        // ...this.state.movies //이 구문을 뒤로 주면, 새로 추가하는 데이터가 맨 위로 출력됨
        // ]
      });
    }, 1000);
    */
  }

  _getMovies = async () => {
    const movies = await this._callApi();
    this.setState({
      movies
    });
  };

  _callApi = () => {
    return fetch(
      "https://yts.lt/api/v2/list_movies.json?sort_by=download_count"
    )
      .then(response => response.json())
      .then(json => json.data.movies)
      .catch(err => console.log(err));
  };

  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      // console.log(movie);
      return (
        <Movie
          title={movie.title_english}
          poster={movie.medium_cover_image}
          genres={movie.genres}
          synopsis={movie.synopsis}
          key={movie.id}
        />
      );
      //react에서는 컴포넌트가 여러개일 경우 key를 줘야한다
    });
    return movies;
  };

  render() {
    const { movies } = this.state;
    return (
      <div className={movies ? "App" : "App-loading"}>
        {/* {this.state.greeting} */}
        {movies ? this._renderMovies() : "Loading"}
      </div>
    );
  }
}

export default App;
