const passport = require('passport');

//module statement is written to fetch the app instance from index.js. This function will be called when we import the file in index.js.
module.exports = (app) => {
    app.get(
        '/auth/google',
        passport.authenticate(
            'google',
            { scope: ['profile', 'email'] }
        )
    );
    
    app.get(
        '/auth/google/callback',
        passport.authenticate('google')
    );

    app.get(
        '/api/user/logout',
        (req, res) => {
            req.logout();
            res.send(req.user);
        }
    )
    app.get(
        '/api/user',
        (req, res) => {
            res.send(req.user);
        }
    )
}