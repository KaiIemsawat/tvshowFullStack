import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const OneShow = (props) => {
    const { id } = useParams();
    const [show, setShow] = useState({});
    console.log(id);

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/oneShow/${id}`)
            .then((resp) => {
                console.log(resp.data.show);
                setShow(resp.data.show);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <div>
            <h1>Title : {show.title}</h1>
            <h2>Aired on : {show.network} in {show.releaseYear}</h2>
            <h2>Created by : {show.creater}</h2>
            <h2>Genre : {show.genre}</h2>
        </div>
    );
};

export default OneShow;
