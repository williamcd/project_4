import React, { Component } from 'react'
import { Link } from "react-router-dom"
import styled from 'styled-components'

class NavBar extends Component {
    render() {
        return (
            <NavStyle>
                <div>
                    <p>DUNGEONS & TAVERNS</p>
                </div>
                <Link to="/shops">
                    <ButtonStyle>home</ButtonStyle>
                </Link>
            </NavStyle>
        );
    }
}

export default NavBar

const NavStyle = styled.div`
    border: 1px solid black;
    background-color: yellow;
    font-size: 40px;
    font-family: Cinzel;
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
`
const ButtonStyle = styled.button`
    margin-top: 18%;
`