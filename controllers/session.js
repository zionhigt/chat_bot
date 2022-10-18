const session = require('express-session');
var FileStore = require('session-file-store')(session);
 

module.exports = function(app) {
    const fileStoreOptions = {};
    app.use(session({
        store: new FileStore(fileStoreOptions),
        secret: process.env.SECRET_SESSION,
        resave: true,
        saveUninitialized: true
    }));

}