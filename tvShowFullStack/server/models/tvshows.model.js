const mongoose = require("mongoose");

const TvShow = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Title is required"],
            minLength: [2, "The title must be 3 or more characters"],
            maxLength: [50, "The title can't be over 10 characters"],
        },
        releaseYear: {
            type: Number,
            required: [true, "Release year is required"],
            min: [1980, "No show before 1980 allowed"],
        },
        network: {
            type: String,
            required: [true, "Network is required"],
            minLength: [3, "The network must be 3 or more characters"],
            maxLength: [50, "The network can't be over 10 characters"],
        },
        creater: {
            type: String,
            required: [true, "Creater is required"],
            minLength: [3, "The creater must be 3 or more characters"],
            maxLength: [50, "The creater can't be over 10 characters"],
        },
        genre: {
            type: String,
            required: [true, "Genre is required"],
            minLength: [3, "The genre must be 3 or more characters"],
            maxLength: [50, "The genre can't be over 10 characters"],
        },
    },
    // { timestamps: true } will create timestamp, of course
    { timestamps: true }
);

const Show = mongoose.model("Show", TvShow);

module.exports = Show;
