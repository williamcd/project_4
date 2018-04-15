import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import ItemEditForm from './ItemEditForm'

class ItemCard extends Component {
    state = {
        edit: false,
        item: {}
    }
    deleteItem = async () => {
        const response = await axios.delete(`/api/shops/${this.props.shopId}/items/${this.state.item.id}`)
        this.props.getShop()
    }
    edit = () => {
        this.setState({ edit: !this.state.edit })
    }
    handleChange = (event) => {
        const item = { ...this.props.item }
        item[event.target.name] = event.target.value
        this.setState({ item })
    }
    saveItem = async (event) => {
        event.preventDefault()
        const shopId = this.props.shopId
        const itemId = this.state.item.id
        await axios.patch(`/api/shops/${shopId}/items/${itemId}`, this.state.item)
        this.edit()
    }
    componentDidMount() {
        this.setState({ item: this.props.item })
    }
    render() {
        return (
            <ItemStyle>
                {this.state.edit
                    ? <ItemEditForm item={this.state.item} handleChange={this.handleChange} cancel={this.edit} saveItem={this.saveItem} />
                    : <div>
                        <Link to="#">
                            <h3>{this.state.item.name}</h3>
                        </Link>
                        <p>
                            Cost: {this.state.item.cost}
                            <br />
                            Category: {this.state.item.category}
                            <br />
                        </p>
                        <EditStyle onClick={this.edit}>edit</EditStyle>
                        <EditStyle onClick={this.deleteItem}>delete</EditStyle>
                    </div>
                }
            </ItemStyle>
        )
    }
}

export default ItemCard

const ItemStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 250px;
    width: 250px;
    border: 1px solid black;
    margin: 10px 10px;
    border-radius: 5px;
    align-items: center;
    box-shadow: 10px 10px 15px 1px grey;
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
    height: 40px;
    button:hover {
    background-color: black;
    color: white;
  }
`
const EditStyle = styled.button`
  height: 25px;
  width: 100px;
  font-size: 20px;
  padding: 0px;
`