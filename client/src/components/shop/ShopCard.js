import React, { Component } from 'react'
import { Link } from "react-router-dom"
import styled from 'styled-components'

class ShopCard extends Component {
    state = {
        shop: {}
    }
    componentDidMount() {
        this.setState({ shop: this.props.shop})
    }
    render() {
        return (
            <CardStyle>
                <Link to={`/shops/${this.state.shop.id}`}>
                    <h1>{this.state.shop.name}</h1>
                    <img src={this.state.shop.photo_url} />
                </Link>
                <p>{this.state.shop.description}</p>
            </CardStyle>
        )
    }
}

export default ShopCard

const CardStyle = styled.div`
    width: 600px;
    height: 500px;
    text-align: center;
    font-family: Cinzel;
    text-decoration: none;
    margin: 10px;
    border: 1px solid black;
    font-size: 25px;
    border-radius: 5px;
    img {
        margin-bottom: -20px;
        height: 304px;
        width: 540px;
    }
    a {
        text-decoration: none;
        color: black;
    }
`