import React, { Component } from 'react'
import ItemCard from './ItemCard'
import ItemForm from './ItemForm'
import axios from 'axios'
import styled from 'styled-components'

class ItemList extends Component {
    render() {
        return (
            <ListStyle>
                {this.props.items.map((item, i) => {
                    return (
                        <ItemCard getShop={this.props.getShop} shopId={this.props.shopId} key={i} item={item} />
                    )
                })}
            </ListStyle>
        )
    }
}

export default ItemList

const ListStyle = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-bottom: 50px;
`