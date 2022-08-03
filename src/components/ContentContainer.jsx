import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../store/actions";
import Alert from "./Alert";
import Card from "./Card";
import Repo from "./Repo";

export default function ContentContainer() {
    const [searchInput, setSearchInput] = useState("");
    const [error, setError] = useState(null);

    const dispatch = useDispatch();

    const user = useSelector((state) => state.dataReducer.user);
    const repos = useSelector((state) => state.dataReducer.repos);

    useEffect(() => {
        config("example");
    }, []);

    function handleChange(e) {
        if (e.target) {
            setError(null);
            setSearchInput(e.target.value);
        };
    };

    function handleClick(e) {
        e.preventDefault();
        if (!searchInput) {
            setError("Please input username github..");
        } else {
            config(searchInput);
        };
    };

    function config(searchInput) {
        dispatch(fetchData(searchInput));
    };

    return (
        <div className="container">
            <form className="d-flex mx-auto pt-3" style={{ width: "50%" }}>
                <input
                    type="text"
                    className="form-control me-2"
                    placeholder="Username github ex:panjinmaulana"
                    onChange={(e) => handleChange(e)}
                />
                <button className="btn btn-primary" onClick={(e) => handleClick(e)}>
                    Search
                </button>
            </form>
            {error ? (
                <Alert error={error} />
            ) : (
                <div className="row">
                    <div className="col">
                        <Card user={user} />
                    </div>
                    <div className="col">
                        <Repo repos={repos} />
                    </div>
                </div>
            )}
        </div>
    );
};