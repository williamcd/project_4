import React, { Component } from 'react'
import { Link } from "react-router-dom"
import styled from 'styled-components'

class NavBar extends Component {
    render() {
        return (
            <NavStyle>
                <TitleStyle>
                    <p>DUNGEONS & TAVERNS</p>
                </TitleStyle>
                <div>
                    <Link to="/shops">
                        <button>shops</button>
                    </Link>
                    <Link to="/">
                        <button>home</button>
                    </Link>
                </div>
            </NavStyle>
        );
    }
}

export default NavBar

const NavStyle = styled.div`
    border: 1px solid black;
    background-color: yellow;
    background-image: url("http://www.niagaracc.suny.edu/i/culinary/backgrounds/woodgrain-footer.jpg");
    font-size: 40px;
    font-family: Cinzel;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    align-self: flex-end;
    a {
        margin-right: 50px;
    }
`
const TitleStyle = styled.div`
    margin-left: 25px;
    font-weight: bold;
    color: white;
`