// const { mongoose } = require("mongoose");
const { theUser } = require("../models/User");
const fetch = require("node-fetch");
const fetchDB = require("node-fetch");

// home page
module.exports.home_mostWatched = (req, res) => {
  const url = `https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&language=en-US&page=${req.body.page}&sort_by=popularity.desc`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzFhMTFjMzgwYjE2MmJiYmMwNWM3Y2NlMDFhMjZkZiIsInN1YiI6IjY1OGM4MmM4MDA1MDhhNDQzZGNiNWZjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xTW7FNWyrLzmJMP2Intmmk_0aZv8OX7WMkPNXXRU0do",
    },
  };
  // fetch from tmdb
  fetchDB(url, options)
    .then((response) => response.json())
    .then((json) => res.send({ movies: json, message: "hi" }))
    .catch((err) => console.error("error:" + err));
};
module.exports.home_popular = (req, res) => {
  const url = `https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&language=en-US&page=${req.body.page}&sort_by=popularity.desc`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzFhMTFjMzgwYjE2MmJiYmMwNWM3Y2NlMDFhMjZkZiIsInN1YiI6IjY1OGM4MmM4MDA1MDhhNDQzZGNiNWZjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xTW7FNWyrLzmJMP2Intmmk_0aZv8OX7WMkPNXXRU0do",
    },
  };
  // fetch from tmdb
  fetchDB(url, options)
    .then((response) => response.json())
    .then((json) => res.send({ movies: json, message: "hi" }))
    .catch((err) => console.error("error:" + err));
};

module.exports.home_trending = (req, res) => {
  const url = `https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&language=en-US&page=${req.body.page}&sort_by=popularity.desc`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzFhMTFjMzgwYjE2MmJiYmMwNWM3Y2NlMDFhMjZkZiIsInN1YiI6IjY1OGM4MmM4MDA1MDhhNDQzZGNiNWZjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xTW7FNWyrLzmJMP2Intmmk_0aZv8OX7WMkPNXXRU0do",
    },
  };
  // fetch from tmdb
  fetchDB(url, options)
    .then((response) => response.json())
    .then((json) => res.send({ movies: json, message: "hi" }))
    .catch((err) => console.error("error:" + err));
};

// discover
module.exports.discover_page = (req, res) => {
  const url = `https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&language=en-US&page=${req.body.page}&sort_by=popularity.desc`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzFhMTFjMzgwYjE2MmJiYmMwNWM3Y2NlMDFhMjZkZiIsInN1YiI6IjY1OGM4MmM4MDA1MDhhNDQzZGNiNWZjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xTW7FNWyrLzmJMP2Intmmk_0aZv8OX7WMkPNXXRU0do",
    },
  };
  // fetch from tmdb
  fetchDB(url, options)
    .then((response) => response.json())
    .then((json) => res.send({ movies: json, message: "hi" }))
    .catch((err) => console.error("error:" + err));
};
// moviePopularPage
module.exports.movie_page_popular = (req, res) => {
  const url = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${req.body.page}`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzFhMTFjMzgwYjE2MmJiYmMwNWM3Y2NlMDFhMjZkZiIsInN1YiI6IjY1OGM4MmM4MDA1MDhhNDQzZGNiNWZjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xTW7FNWyrLzmJMP2Intmmk_0aZv8OX7WMkPNXXRU0do",
    },
  };

  fetch(url, options)
    .then((response) => response.json())
    .then((json) => res.send({ movies: json, message: "hi" }))
    .catch((err) => console.error("error:" + err));
};

module.exports.trending_page = (req, res) => {
  const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzFhMTFjMzgwYjE2MmJiYmMwNWM3Y2NlMDFhMjZkZiIsInN1YiI6IjY1OGM4MmM4MDA1MDhhNDQzZGNiNWZjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xTW7FNWyrLzmJMP2Intmmk_0aZv8OX7WMkPNXXRU0do",
    },
  };

  fetch(url, options)
    .then((res) => res.json())
    .then((json) => res.send({ movies: json, message: "hi" }))
    .catch((err) => console.error("error:" + err));
};
module.exports.top_rated = (req, res) => {
  const url = `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${req.body.page}`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzFhMTFjMzgwYjE2MmJiYmMwNWM3Y2NlMDFhMjZkZiIsInN1YiI6IjY1OGM4MmM4MDA1MDhhNDQzZGNiNWZjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xTW7FNWyrLzmJMP2Intmmk_0aZv8OX7WMkPNXXRU0do",
    },
  };

  fetch(url, options)
    .then((res) => res.json())
    .then((json) => res.send({ movies: json, message: "hi" }))
    .catch((err) => console.error("error:" + err));
};

// movie deatails
module.exports.movie_detail = (req, res) => {
  const url = `https://api.themoviedb.org/3/movie/${req.body.id}`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzFhMTFjMzgwYjE2MmJiYmMwNWM3Y2NlMDFhMjZkZiIsInN1YiI6IjY1OGM4MmM4MDA1MDhhNDQzZGNiNWZjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xTW7FNWyrLzmJMP2Intmmk_0aZv8OX7WMkPNXXRU0do",
    },
  };

  fetch(url, options)
    .then((res) => res.json())
    .then((json) =>
      res.send({ thisMovie: json, message: "welcome to your movie" })
    )
    .catch((err) => console.error("error:" + err));
};

// Control::::
// add remove wishlist
module.exports.add_remove_wishlist = async (req, res, next) => {
  const { wishMovie, id } = req.body;
  if (!id) {
    res.send({ message: "please login", state: false });
  } else {
    const result = await theUser.findById({
      _id: id,
    });
    try {
      const { wishlist } = result;
      const alreadyAdded = await wishlist.find((i) => i === wishMovie.id);
      if (alreadyAdded) {
        await theUser.updateMany({ $pull: { wishlist: wishMovie.id } });
        const user = await theUser.findById({
          _id: id,
        });
        res.status(200).json({
          message: "removed from wishlist",
          data: user,
          state: true,
        });

        return;
      } else {
        await theUser.updateMany({ $push: { wishlist: wishMovie.id } });
        const user = await theUser.findById({
          _id: id,
        });
        res
          .status(200)
          .json({ message: "added to wishlist", data: user, state: true });

        return;
      }
    } catch (err) {
      console.log(err);
    }
  }
};

module.exports.get_wishlist_watched_elements = async (req, res) => {
  const IDs = req.body.IDs;
  const url = `https://api.themoviedb.org/3/movie/${IDs}`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzFhMTFjMzgwYjE2MmJiYmMwNWM3Y2NlMDFhMjZkZiIsInN1YiI6IjY1OGM4MmM4MDA1MDhhNDQzZGNiNWZjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xTW7FNWyrLzmJMP2Intmmk_0aZv8OX7WMkPNXXRU0do",
    },
  };

  fetch(url, options)
    .then((res) => res.json())
    .then((json) =>
      res.send({ thisMovie: json, message: "welcome to your movie" })
    )
    .catch((err) => console.error("error:" + err));
};
// add remove watched
module.exports.add_remove_watched = async (req, res) => {
  const { watchedMovie, id } = req.body;
  if (!id) {
    res.send({ message: "please login", state: false });
  } else {
    const result = await theUser.findById({
      _id: id,
    });
    try {
      const { watched } = result;
      const alreadyAdded = await watched.find((i) => i === watchedMovie.id);
      if (alreadyAdded) {
        try {
          await theUser.updateMany({ $pull: { watched: watchedMovie.id } });
          const user = await theUser.findById({
            _id: id,
          });
          res.status(200).json({
            message: "removed from watched list",
            data: user,
            state: true,
          });
        } catch (err) {
          console.log(err);
        }

        return;
      } else {
        try {
          await theUser.updateMany({ $push: { watched: watchedMovie.id } });
          const user = await theUser.findById({
            _id: id,
          });
          res.status(200).json({
            message: "added to watched list",
            data: user,
            state: true,
          });
        } catch (err) {
          console.log(err);
        }

        return;
      }
    } catch (err) {
      console.log(err);
    }
  }
};

// search movie
module.exports.user_search = (req, res) => {
  const url = `https://api.themoviedb.org/3/search/multi?query=${req.body.search}&include_adult=false&language=en-US&page=${req.body.page}`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzFhMTFjMzgwYjE2MmJiYmMwNWM3Y2NlMDFhMjZkZiIsInN1YiI6IjY1OGM4MmM4MDA1MDhhNDQzZGNiNWZjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xTW7FNWyrLzmJMP2Intmmk_0aZv8OX7WMkPNXXRU0do",
    },
  };

  fetch(url, options)
    .then((res) => res.json())
    .then((json) => res.status(200).json(json))
    .catch((err) => console.error("error:" + err));
};

// // series (to do...)....
// module.exports.series_page = (req, res) => {
//   const url = `https://api.themoviedb.org/3/tv/popular?language=en-US&page=${req.body.page}`;
//   const options = {
//     method: "GET",
//     headers: {
//       accept: "application/json",
//       Authorization:
//         "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzFhMTFjMzgwYjE2MmJiYmMwNWM3Y2NlMDFhMjZkZiIsInN1YiI6IjY1OGM4MmM4MDA1MDhhNDQzZGNiNWZjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xTW7FNWyrLzmJMP2Intmmk_0aZv8OX7WMkPNXXRU0do",
//     },
//   };
//   // fetch from tmdb
//   fetchDB(url, options)
//     .then((response) => response.json())
//     .then((json) => res.send({ movies: json, message: "hi" }))
//     .catch((err) => console.error("error:" + err));
// };
