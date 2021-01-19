import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import "./Banner.css";
import Search from "./Search"

function Banner() {

    const [showSearch, setShowSearch] = useState (false);
    return (
        <div className = "banner">
            <div className = "banner__search">
                
                <Button onClick = {() => setShowSearch(!showSearch)} className = "banner__searchButton" variant = "outlined">{showSearch ? "Hide" : "Search Dates"}</Button>
                {showSearch && <Search/>}
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
