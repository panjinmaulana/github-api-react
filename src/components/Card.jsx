import React from "react";

export default function Card({ user }) {
    return (
        <div className="text-center pt-5">
            <h5>Profile</h5>
            <div className="card mx-auto" style={{ width: "20rem", border: "none" }}>
                <img
                    src={user.avatar_url}
                    className="card-img-top rounded-circle mx-auto"
                    alt={user.login}
                    style={{width: "240px"}}
                />
                <div className="card-body">
                    <h5 className="card-title text-center">{user.name || user.login}</h5>
                    <div className="d-flex justify-content-evenly align-items-center">
                        <p>{user.public_repos} Repositories</p>
                        <p>{user.followers} Followers</p>
                        <p>{user.following} Following</p>
                    </div>
                </div>
            </div>
        </div>
    );
};