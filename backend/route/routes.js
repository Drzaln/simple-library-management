module.exports = (app) => {
    const controller = require('../controller/controller')

    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
      });

    // GET
    app.route ('/').get (controller.booklist)
    app.route ('/filter').get (controller.search)

    // POST
    app.route ('/').post (controller.add)

    // PATCH
    app.route ('/:bookid').patch (controller.updatebook)

    // DELETE
    app.route ('/:bookid').delete (controller.remove)
}