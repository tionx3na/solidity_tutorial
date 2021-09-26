import { Component } from "react";
import './header.css'
import FirstContract from './first_contract'

function Header() {
    return(
        <header>
        <h1>Solidity</h1>
        <nav>
            <a href={FirstContract}>First Contract</a>
            <a href="#">Second tab</a>
            <a href="#">Third tab</a>
            <a href="#">Fourth tab</a>
        </nav>
    </header>
    );
}

export default Header;