import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

class ItemCard extends Component {
    deleteItem = async () => {
        await axios.delete(`/api/shops/${this.props.shopId}/items/${this.props.item.id}`)
        this.props.refreshItems()
    }
    render() {
        return (
            <ItemStyle>
                <ButtonStyle onClick={this.deleteItem}>X</ButtonStyle>
                <Link to="#">
                    <h3>{this.props.item.name}</h3>
                </Link>
                <p>
                    Cost: {this.props.item.cost}
                    <br />
                    Category: {this.props.item.category}
                    <br />
                </p>
            </ItemStyle>
        )
    }
}

export default ItemCard

const ItemStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 200px;
    width: 200px;
    border: 1px solid black;
    margin: 5px 10px;
    border-radius: 5px;
`
const ButtonStyle = styled.button`
    padding: 2px;
    font-family: Cinzel;
    font-size: 20px;
    margin: 10px;
    border-radius: 5px;
    cursor: pointer;
    -webkit-transition-duration: 0.25s;
    transition-duration: 0.25s;
    align-items: center;
    width: 30px;
    height: 30px;
    button:hover {
    background-color: black;
    color: white;
  }
`