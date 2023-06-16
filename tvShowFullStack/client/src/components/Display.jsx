import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const Display = (props) => {
    const { showList, setShowList } = props;
    useEffect(() => {
        axios
            .get("http://localhost:8000/api/allShows")
            .then((resp) => {
                console.log(resp, "print from display useEffect");
                setShowList(resp.data.shows);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const deleteHandler = (id) => {
        console.log(id);
        axios.delete(`http://localhost:8000/api/deleteShow/${id}`)
            .then((resp) => {
                console.log(resp);
                const updateShowList = showList.filter((show) => show._id !== id);
                setShowList(updateShowList);
            })
            .catch((err) => {
                console.log(err);
            })
    };

    return (
        <div>
            {/* to={`path refer t o port 3000`} */}
            <h2>All of our shows</h2>
            {showList.map((show) => (
                <div key={show._id}>
                    <h3>Title: {show.title}</h3>
                    <h3>Network: {show.network}</h3>
                    <h3>Genre: {show.genre}</h3>
                    <Link to={`/viewShow/${show._id}`} className="btn btn-success">View</Link>
                    <Link to={`/editShow/${show._id}`} className="btn btn-secondary">Edit</Link>
                    <button className="btn btn-danger" onClick={() => deleteHandler(show._id)}>Delete</button>
                    <br />
                </div>
            ))}
        </div>
    );
};

export default Display;
