import React from 'react';
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-md fixed-top navbar-dark bg-info">
            <a className="navbar-brand" href="#">Mixtape Club</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/create-mixtapes" className="nav-link">Create Mixtapes</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/mixtape-player" className="nav-link">Mixtape Player</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/login" className="nav-link">Login</Link>
                    </li>
                </ul>
  </div>
</nav>
    )
};

export default Navigation;