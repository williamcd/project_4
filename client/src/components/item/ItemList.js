import React, { Component } from 'react'
import ItemCard from './ItemCard'
import ItemForm from './ItemForm'
import axios from 'axios'

class ItemList extends Component {
    state = {
        items: []
    }
    componentDidMount() {
        this.refreshItems()
    }
    refreshItems = () => {
        this.setState({ items: this.props.items })
        console.log(this.state.items)
    }
    getNewItem = async () => {
        const response = await this.props.getNewItem()
        this.refreshItems()
    }
    render() {
        return (
            <div>
                <button onClick={this.getNewItem} >new item</button>
                {this.state.items.map((item, i) => {
                    return (
                        <ItemCard key={i} item={item} />
                    )
                })}
            </div>
        );
    }
}

export default ItemList