import React from 'react'
import Banner from './Banner'
import "./Home.css";
import Card from "./Card";

function Home() {
    return (
        <div className = "home">
            <Banner/>

            <div className = "home__section">
                <Card
                    src = "images/festivals.jpg"
                    title = "Festivals and Activities "
                    discription = "Looking for the best time to visit Caribbean festivals and carnivals? We highlight the best time to go to Caribbean destinations to follow the fun."
                />
                <Card
                     src = "images/homes.jpg"
                     title = "Entire Caribbean Homes"
                     discription = "Luxurious and comfortable homes to share with family and friends accross the diverse and exotic Caribbean Islands."
                />
                <Card
                    src = "images/unique.jpg"
                    title = "Unique Caribbean Destinations "
                    discription = "The dozens of islands scattered across the Caribbean are a remarkably diverse lot, they are vastly different not just in appearance but in what they offer visitors."
                />
            </div>

            <div className = "home__section">
            <Card
                    src = "images/oneBedroomVilla.jpg"
                    title = "Caribbean One-Bedroom Luxury Villa "
                    discription = "Soft sand, warm water and just enough room for the two of you—what could be more romantic than a getaway to this Villa? Tucked into a crescent of beach on Sapodilla Bay"
                    price = "$699/night "
                />
                <Card
                     src = "images/penthouse.jpg"
                     title = "Caribbean Penthouse "
                     discription = "penthouse accommodations with access to five-star resort amenities in three of the Caribbean’s best islands: Anguilla, Barbados, and Turks & Caicos."
                     price = "$999/night"
                />
                <Card
                    src = "images/threeBedroom.jpg"
                    title = "Three Bedroom Caribbean Apartment"
                    discription = "Immaculate 3 bedroom, 3 bathroom, luxury beachfront apartment, with a wide private terrace, sea views and Jacuzzi pool."
                    price = "$1299/night"
                />
            </div>
            
        </div>
    )
}

export default Home
