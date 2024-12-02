import React from "react";

import "./Card.css"

const Card = ({imagem, titulo, texto }) => {
    return (
        <div class="card">
            <img src={imagem} />
            <h3>{titulo}</h3>
            <p>{texto}</p>
        </div>
    )
}

export default Card;