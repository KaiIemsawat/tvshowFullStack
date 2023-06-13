import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateShow = (props) => {
    const navigate = useNavigate();
    const [show, setShow] = useState({
        title: "",
        releaseYear: 1980,
        network: "",
        creater: "",
        genre: "",
    });
    const [errors, setErrors] = useState({});
    const changeHandler = (e) => {
        setShow({ ...show, [e.target.name]: e.target.value });
    };
    const submitHandler = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:8000/api/newShow", show)
            .then((resp) => {
                console.log(resp);
                // setShow({
                //     title: "",
                //     releaseYear: 1980,
                //     network: "",
                //     creater: "",
                //     genre: "",
                // });
                navigate("/");
            })
            .catch((err) => {
                console.log(err.response.data.err.errors);
                setErrors(err.response.data.err.errors);
            });
    };
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Title : </label>
                    <input
                        type="text"
                        name="title"
                        onChange={changeHandler}
                        value={show.title}
                    />
                    {errors.title ? (
                        <p className="text-danger">{errors.title.message}</p>
                    ) : null}
                </div>
                <div>
                    <label>Release Year : </label>
                    <input
                        type="text"
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

export default CreateShow;
