import React, { Component } from 'react'
import axios from 'axios'
import ShopEditForm from './ShopEditForm'
import ShopDeleteConfirm from './ShopDeleteConfirm'
import ItemList from '../item/ItemList'
import styled from 'styled-components'

class ShopView extends Component {
    state = {
        shop: {},
        items: [],
        properties: [],
        editForm: false,
        deleteConfirm: false
    }
    componentDidMount() {
        this.getShop()
    }
    handleChange = (event) => {
        const shop = { ...this.state.shop }
        shop[event.target.name] = event.target.value
        this.setState({ shop })
    }
    saveShop = async (event) => {
        event.preventDefault()
        await axios.patch(`/api/shops/${this.state.shop.id}`, this.state.shop)
        this.toggleEditForm()
    }
    deleteShop = async () => {
        await axios.delete(`/api/shops/${this.state.shop.id}`)
        this.props.history.push(`/shops`)
    }
    getShop = async (event) => {
        const shopId = this.props.match.params.id
        const response = await axios.get(`/api/shops/${shopId}`)
        this.setState({ shop: response.data.shop })
        this.setState({ items: response.data.items })
    }
    toggleEditForm = () => {
        this.setState({ editForm: !this.state.editForm })
        this.setState({ deleteConfirm: false })
    }
    toggleDeleteConfirm = () => {
        this.setState({ deleteConfirm: !this.state.deleteConfirm })
        this.setState({ editForm: false })
    }
    cancelEdit = () => {
        this.setState({ editForm: false })
        this.getShop()
    }
    getNewItem = async () => {
        const rand = 1 + Math.random() * (38 - 1)
        const num = Math.ceil(rand)
        const response = await axios.get(`http://www.dnd5eapi.co/api/equipment/${num}`)
        const name = response.data.name
        const cost = response.data.cost.quantity
        const category = response.data.weapon_range
        const description_url = [response.data.properties]
        const payload = { name: name, cost: cost, category: category, description_url: description_url }
        console.log(payload)
        const res = await axios.post(`/api/shops/${this.state.shop.id}/items`, payload)
        this.getShop()
    }
    render() {
        return (
            <ShopCard>
                {this.state.editForm 
                    ? <ShopEditForm handleChange={this.handleChange} saveShop={this.saveShop} shop={this.state.shop} cancel={this.cancelEdit} /> 
                    :   <div>
                            <h1>{this.state.shop.name}</h1>
                            <p>{this.state.shop.description}</p>
                            <img src={this.state.shop.photo_url} />
                            <br />
                        </div>
                }
                <button onClick={this.getNewItem}>new item</button>
                <button onClick={this.toggleEditForm}>edit shop</button>
                <button onClick={this.toggleDeleteConfirm}>delete shop</button>
                {this.state.deleteConfirm ? <ShopDeleteConfirm deleteShop={this.deleteShop} cancel={this.toggleDeleteConfirm} /> : null}
                <ItemList shopId={this.props.match.params.id} getShop={this.getShop} refreshItems={this.getShop} shopId={this.props.match.params.id} items={this.state.items} getNewItem={this.getNewItem} />
            </ShopCard>
        )
    }
}

export default ShopView

const ShopCard = styled.div`
    width: 1000px;
    height: 100%;
    border: 1px solid black;
    display: block;
    margin: 0 auto;
    text-align: center;
    img {
        width: 100%;
    }
`