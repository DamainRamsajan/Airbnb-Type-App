import { Button } from '@material-ui/core';
import React from 'react';
import "./Banner.css";

function Banner() {
    return (
        <div className = "banner">
            <div className = "banner__search">
                <Button className = "banner__searchButton" variant = "outlined">Search Dates</Button>
            </div>
            <div className = "banner__info">
                <h1>Get Out and Stretch Your Imagination</h1>

                <h5>Plan a different kind of getaway to discover the hidden gems in the world</h5>

                <Button variant = "outlined">Explore Stays</Button>
            </div>
        </div>
    )
}

export default Banner
