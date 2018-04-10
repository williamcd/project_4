import React, { Component } from 'react'
import ItemCard from './ItemCard'
import ItemForm from './ItemForm'
import axios from 'axios'

class ItemList extends Component {
    getNewItem = async () => {
        const response = await this.props.getNewItem()
    }
    render() {
        return (
            <div>
                <button onClick={this.props.getNewItem}>new item</button>
                {this.props.items.map((item, i) => {
                    return (
                        <ItemCard refreshItems={this.props.refreshItems} shopId={this.props.shopId} key={i} item={item} />
                    )
                })}
            </div>
        );
    }
}

export default ItemList