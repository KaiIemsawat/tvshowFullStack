import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditShow = (props) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [show, setShow] = useState({
        title: "",
        releaseYear: 1980,
        network: "",
        creater: "",
        genre: "",
    });
    const [errors, setErrors] = useState({}); // <--- object type ({})
    const changeHandler = (e) => {
        setShow({ ...show, [e.target.name]: e.target.value });
    };

    // Get info of the object according to _id
    // Use function from OneShow.jsx
    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/oneShow/${id}`) // <--- oneShow from port 8000
            .then((resp) => {
                console.log(resp.data.show, "print from useEffect");
                setShow(resp.data.show);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();
        axios
            .put(`http://localhost:8000/api/updateShow/${id}`, show) // <-- this show comes from useState
            .then((resp) => {
                console.log(resp, "print from CreateShow submitHandler");
                navigate("/");
            })
            .catch((err) => {
                console.log(
                    err.response.data.error.errors, // <--- the 'error' refer to error in updateShowById in tvshow.controller.js
                    "From CreateShow submitHandler"
                );
                setErrors(err.response.data.error.errors);
            });
    };

    return (
        <div>
            <h2>Edit Show</h2>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Title : </label>
                    <input
                        type="text"
                        name="title"
                        onChange={changeHandler}
                        value={show.title}
                    />
                    {errors.title ? ( // <-- errors comes from useState
                        <p className="text-danger">{errors.title.message}</p>
                    ) : null}
                </div>
                <div>
                    <label>Release Year : </label>
                    <input
                        type="number"
                        name="releaseYear"
                        onChange={changeHandler}
                        value={show.releaseYear}
                    />
                    {errors.releaseYear ? (
                        <p className="text-danger">
                            {errors.releaseYear.message}
                        </p>
                    ) : null}
                </div>
                <div>
                    <label>Network : </label>
                    <input
                        type="text"
                        name="network"
                        onChange={changeHandler}
                        value={show.network}
                    />
                    {errors.network ? (
                        <p className="text-danger">{errors.network.message}</p>
                    ) : null}
                </div>
                <div>
                    <label>Creater : </label>
                    <input
                        type="text"
                        name="creater"
                        onChange={changeHandler}
                        value={show.creater}
                    />
                    {errors.creater ? (
                        <p className="text-danger">{errors.creater.message}</p>
                    ) : null}
                </div>
                <div>
                    <label>Genre : </label>
                    <input
                        type="text"
                        name="genre"
                        onChange={changeHandler}
                        value={show.genre}
                    />
                    {errors.genre ? (
                        <p className="text-danger">{errors.genre.message}</p>
                    ) : null}
                </div>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default EditShow;
