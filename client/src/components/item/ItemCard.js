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
                <Link to="#">
                    <h1>{this.props.item.name}</h1>
                </Link>

                <ButtonStyle onClick={this.deleteItem}>X</ButtonStyle>
                <p>
                    Cost: {this.props.item.cost}
                    <br />
                    Category: {this.props.item.category}
                </p>
            </ItemStyle>
        );
    }
}

export default ItemCard

const ItemStyle = styled.div`
    height: 200px;
    width: 300px;
    border: 1px solid black;
    margin: 5px;
    padding: 10px;
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