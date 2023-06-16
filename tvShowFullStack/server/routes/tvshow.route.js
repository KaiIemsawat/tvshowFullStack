const TvShowController = require("../controllers/tvshow.controller");

module.exports = (app) => {
    // routes referred from port 8000
    app.get("/api/allShows", TvShowController.findAllShows);
    app.post("/api/newShow", TvShowController.createShow);
    app.get("/api/oneShow/:id", TvShowController.findOneShow);
    app.put("/api/updateShow/:id", TvShowController.updateShowById);
    app.delete("/api/deleteShow/:id", TvShowController.deleteShowById);
};
