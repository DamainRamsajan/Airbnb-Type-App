import React from 'react'
import "./Header.css"
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown"

function Header() {
    return (
        <div className ='header'>
            <img className = "header__icon" src = "/images/logo2.png" alt="" />

            <div className = "header__center">
                <input type = "text"/>
                <SearchIcon />
            </div>

            <div className = "header__right">
                <p>Become a Host</p>
                <ArrowDropDownIcon/>
            </div>
            
        </div>
    )
}

export default Header
