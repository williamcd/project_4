import React, { Component } from 'react';

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
                <h1>{this.state.shop.name}</h1>
                <p>{this.state.shop.description}</p>
                <img src={this.state.shop.photo_url} />
            </div>
        );
    }
}

export default ShopCard;