const express = require('express')
const path = require('path');
const app = express();
const routes = require('./routes/index');

require('dotenv').config();

/**
 * Use EJS as Template Engine.
 */
app.set('view engine', 'ejs');

/**
 * Define root views directory.
 */
app.set('views', path.join(__dirname, 'views'));

/**
 * Middleware for serving static files. The root argument specifies the root
 * directory from which to serve static assets.
 */
app.use(express.static('public'));

/**
 * Middleware for parsing incoming requests with JSON payloads.
 */
app.use(express.json());

/**
 * Middleware for POST and PUT requests.
 */
app.use(express.urlencoded({ extended: true }));

app.listen(process.env.PORT, () => {
    console.log(`App listening on port ${process.env.PORT}`);
});

routes.web(app);
