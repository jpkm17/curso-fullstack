import React from 'react';
import './Header.css'

//Interpolação
function Header({ titulo, subTitulo }) {
    // or const { titulo } = props 
    return (
        <header className='header'>
            <h1> {titulo} </h1>
            <h2> {subTitulo} </h2>
        </header>
    )
}

export default Header;