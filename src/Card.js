import React from 'react';
import "./Card.css"

function Card({src, title, discription, price}) {
    return (
        <div className = "card">
            <img src = {src} alt = ""/>

            <div className = "card__info">
                <h2>{title}</h2>
                <p>{discription}</p>
                <strong>{price}</strong>
            </div>
        </div>
    )
}

export default Card
