import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class ItemCard extends Component {
    deleteItem = async () => {
        await axios.delete(`/api/shops/${this.props.shopId}/items/${this.props.item.id}`)
        this.props.refreshItems()
    }
    render() {
        return (
            <div>
                <Link to="#">
                    <h1>{this.props.item.name}</h1>
                </Link>
                <p>
                    Cost: {this.props.item.cost}
                    <br />
                    Category: {this.props.item.category}
                </p>
                <button onClick={this.deleteItem}>X</button>
            </div>
        );
    }
}

export default ItemCard
