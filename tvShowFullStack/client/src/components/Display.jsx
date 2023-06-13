import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Display = (props) => {
    const { showList, setShowList } = props;
    useEffect(() => {
        axios
            .get("http://localhost:8000/api/allShows")
            .then((resp) => {
                console.log(resp);
                setShowList(resp.data.shows);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <div>
            <h2>All of our shows</h2>
            {showList.map((show) => (
                <div key={show._id}>
                    <h3>Title: {show.title}</h3>
                    <h3>Network: {show.network}</h3>
                    <h3>Genre: {show.genre}</h3>
                    <Link
                        to={`/viewShow/${show._id}`}
                        className="btn btn-secondary">
                        View
                    </Link>
                    <br />
                </div>
            ))}
        </div>
    );
};

export default Display;
