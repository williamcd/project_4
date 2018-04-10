import React, { Component } from 'react'
import { Link } from "react-router-dom"

class NavBar extends Component {
    render() {
        return (
            <div>
                <Link to="/shops">
                    <button>HOME</button>
                </Link>
                <h2>WELCOME TO DUNGEONS & TAVERNS</h2>
            </div>
        );
    }
}

export default NavBar
