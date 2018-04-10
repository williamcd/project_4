import React, { Component } from 'react'
import { Link } from "react-router-dom"

class ShopCard extends Component {
    state = {
        shop: {}
    }
    componentDidMount() {
        this.setState({ shop: this.props.shop})
    }
    render() {
        return (
            <div>
                <Link to={`/shops/${this.state.shop.id}`}>
                    <h1>{this.state.shop.name}</h1>
                    <img src={this.state.shop.photo_url} />
                </Link>
                <p>{this.state.shop.description}</p>
            </div>
        );
    }
}

export default ShopCard