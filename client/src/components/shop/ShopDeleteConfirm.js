import React, { Component } from 'react'

class ShopDeleteConfirm extends Component {
    render() {
        return (
            <div>
                <h3>Are you sure?</h3>
                <button onClick={this.props.deleteShop}>yes</button><button onClick={this.props.cancel}>no</button>
            </div>
        );
    }
}

export default ShopDeleteConfirm