var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();
const fileupload = require("express-fileupload");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "public")));
// app.use(express.static("public"));
app.use(`/static`, express.static(path.join(__dirname, `public`)));
app.use(fileupload());

app.use("/", indexRouter);
app.use("/api/product", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

// app.post("/upload", (req, res) => {
//   const newpath = __dirname + "/public/upload-files/";
//   const file = req.files.file;
//   const dotIndex = file.name.lastIndexOf('.');
//   const fileExtension = file.name.substr(dotIndex);
//   const randomFilename = (new Date()).getTime();
//   const filename = randomFilename + fileExtension;
 
//   file.mv(`${newpath}${filename}`, (err) => {
//     if (err) {
//       res.status(500).send({ message: "File upload failed" });
//     }
//     res.status(200).send({ message: 'success', filename: filename });
//   });
// });


app.listen(3000, () => {
  console.log("connected to port 3000!");
})
module.exports = app;