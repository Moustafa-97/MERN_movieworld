const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors");
const process = require("process");
const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");
const app = express();
const cookieParser = require("cookie-parser");
const server = require("http").createServer();
const {
  user_post_signup,
  user_post_login,
  user_refresh,
} = require("./controllers/AuthControl");
const {
  add_remove_wishlist,
  user_search,
  discover_page,
  movie_detail,
  add_remove_watched,
  movie_page_popular,
  trending_page,
  get_wishlist_watched_elements,
  series_page,
  top_rated,
  update_profile,
} = require("./controllers/UserControl");

const PORT = process.env.PORT || 8000;
app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ extended: true, parameterLimit: 50000 }));

// Set up body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// responsible to frontend connect
// cors
app.use(
  cors({
    origin: ["https://ourmovieworld.onrender.com", "http://localhost:3000"],
    // origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    optionSuccessStatus: 200,
    // for cookies::
    credentials: true,
  })
);

if (process.env.NODE_ENV === "production") {
  const __dirname = path.resolve("../");
  app.use(express.static(path.join(__dirname + "/frontendmovieclient/build")));

  // mvc
  // login singup
  app.post("/signup", user_post_signup);

  app.post("/login", user_post_login);

  // search
  app.post("/search", user_search);

  // menu wush wash
  app.post("/Wishlist", get_wishlist_watched_elements);
  app.post("/Watched", get_wishlist_watched_elements);

  // discover page
  app.post("/Discover", discover_page);
  app.post("/Top", top_rated);

  // home page section and popular page
  app.post("/Popular", movie_page_popular);

  // home page section
  app.post("/Trending", trending_page);

  // details
  app.post("/Moviedetails", movie_detail);

  // add and remove operation
  app.put("/AddRemoveWatch", add_remove_watched);
  app.put("/AddRemoveWish", add_remove_wishlist);

  // update profile
  app.put("/UpdateProfile", update_profile);
  app.post("/refresh", user_refresh);

  // series section (plan to do...)
  // app.post("/Series", series_page);

  // still not mvc, but will be in the future

  app.get("*", (req, res, next) => {
    return res.sendFile(
      path.join(__dirname, "frontendmovieclient", "build", "index.html")
    );
  });
}

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("connected"))
  .catch((err) => console.log(err));

// app.use((req, res, next) => {
//   res.setHeader(
//     "Access-Control-Allow-Origin",
//     "https://ourmovieworld.onrender.com"
//   );
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS,CONNECT,TRACE"
//   );
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Content-Type, Authorization, X-Content-Type-Options, Accept, X-Requested-With, Origin, Access-Control-Request-Method, Access-Control-Request-Headers"
//   );
//   res.setHeader("Access-Control-Allow-Credentials", true);
//   res.setHeader("Access-Control-Allow-Private-Network", true);
//   //  Firefox caps this at 24 hours (86400 seconds). Chromium (starting in v76) caps at 2 hours (7200 seconds). The default value is 5 seconds.
//   res.setHeader("Access-Control-Max-Age", 7200);

//   next();
// });

app.use(cookieParser());

// mongo setup
mongoose.set("strictQuery", false);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

// app.listen(PORT);

// set Routes
// app.use("/auth", require("./routes/UserRoutes"));
