const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
const cors = require("cors");

require("./models/User");
require("./models/Product");
require("./models/Barcode");

require("./services/passport");

mongoose.connect(keys.mongoURI, { useUnifiedTopology: true });  // Connect to the MongoDB

const app = express();

app.use(cors());
app.use(
	cookieSession({
		maxAge: keys.maxCookieAge,
		keys: [keys.cookieKey],
    })
);
app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app); // This is to pass the app instance to the authRoutes.js
require("./routes/productRoutes")(app); 
require("./routes/barcodeRoutes")(app); 

app.listen(process.env.PORT || 5000, () => console.log("Backend Server is live"));