const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");

require("./models/User");
require("./services/passport");

mongoose.connect(keys.mongoURI);

const app = express();

app.use(
	cookieSession({
		maxAge: keys.maxCookieAge,
		keys: [keys.cookieKey],
	}),
);
app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app); // This is to pass the app instance to the authRoutes.js

const PORT = process.env.PORT || 5000;
app.listen(PORT);
