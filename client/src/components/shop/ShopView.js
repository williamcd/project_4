import React, { Component } from 'react';
import axios from 'axios'
import ShopEditForm from './ShopEditForm'
import ShopDeleteConfirm from './ShopDeleteConfirm'

class ShopView extends Component {
    state = {
        shop: {},
        items: {},
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
        const response = await axios.patch(`/api/shops/${this.state.shop.id}`, this.state.shop)
    }
    deleteShop = async () => {
        const response = await axios.delete(`/api/shops/${this.state.shop.id}`)
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
    render() {
        return (
            <div>
                <button onClick={this.toggleEditForm}>edit shop</button>
                <button onClick={this.toggleDeleteConfirm}>delete shop</button>
                {this.state.editForm ? <ShopEditForm handleChange={this.handleChange} saveShop={this.saveShop} shop={this.state.shop} /> : null}
                {this.state.deleteConfirm ? <ShopDeleteConfirm deleteShop={this.deleteShop} cancel={this.toggleDeleteConfirm} /> : null}
                <h1>{this.state.shop.name}</h1>
                <p>{this.state.shop.description}</p>
                <img src={this.state.shop.photo_url} />
            </div>
        );
    }
}

export default ShopView;