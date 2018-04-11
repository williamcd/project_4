import React, { Component } from 'react'
import ItemCard from './ItemCard'
import ItemForm from './ItemForm'
import axios from 'axios'
import styled from 'styled-components'

class ItemList extends Component {
    // getNewItem = async () => {
    //     const rand = 1 + Math.random() * (38 - 1)
    //     const response = await axios.get(`http://www.dnd5eapi.co/api/equipment/${rand}`)
    //     const name = response.data.name
    //     const cost = response.data.cost.quantity
    //     const category = response.data.weapon_range
    //     const payload = {name: name, cost: cost, category: category}
    //     const res = await axios.post(`/api/shops/${this.props.shopId}/items`, payload)
    //     this.props.getShop()
    // }
    render() {
        return (
            <ListStyle>
                {this.props.items.map((item, i) => {
                    return (
                        <ItemCard refreshItems={this.props.refreshItems} shopId={this.props.shopId} key={i} item={item} />
                    )
                })}
            </ListStyle>
        );
    }
}

export default ItemList

const ListStyle = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`