const Show = require("../models/tvshows.model");

module.exports.findAllShows = (req, resp) => {
    Show.find()
        .then((allShows) => {
            resp.json({ shows: allShows });
            // Or
            // resp.json(allShows); // in Display.jsx setShowList willnot have .show --> setShowList(resp.data);
        })
        .catch((err) => {
            // resp.json({ message: "Something went wrong", error: err });
            resp.status(400).json({
                message: "Something went wrong",
                error: err,
            });
        });
};

module.exports.findOneShow = (req, resp) => {
    console.log(req.params);
    Show.findOne({ _id: req.params.id }) // this .id needd to be the same as :id in route
        .then((oneShow) => {
            resp.json({ show: oneShow });
        })
        .catch((err) => {
            resp.status(400).json({
                message: "Something went wrong",
                error: err,
            });
        });
};

module.exports.createShow = (req, resp) => {
    Show.create(req.body)
        .then((newShow) => {
            resp.status(201).json({ show: newShow });
        })
        .catch((err) => {
            resp.status(400).json({ err });
        });
};

module.exports.updateShowById = (req, resp) => {
    Show.findOneAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
        runValidators: true,
    })
        .then((updateShow) => {
            resp.json({ show: updateShow });
        })
        .catch((err) => {
            resp.status(400).json({
                message: "Something went wrong",
                error: err,
            });
        });
};

module.exports.deleteShowById = (req, resp) => {
    Show.deleteOne({ _id: req.params.id })
        .then((result) => {
            resp.status(204).json({ result: result });
        })
        .catch((err) => {
            resp.status(400).json({
                message: "Something went wrong",
                error: err,
            });
        });
};
