import React, { Component } from 'react';

class ShopForm extends Component {
    state = {
        newShop: {
            name: '',
            description: '',
            photo_url: ''
        }
    }
    componentDidMount() {
        this.setState({ newShop: this.props.shop})
    }
    render() {
        return (
            <div>
                new shop form
            </div>
        );
    }
}

export default ShopForm;