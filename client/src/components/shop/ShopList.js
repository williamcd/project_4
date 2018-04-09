import React, { Component } from 'react';
import axios from 'axios'
import ShopCard from './ShopCard'
import ShopForm from './ShopForm'

class ShopList extends Component {
    state = {
        shops: [],
        newShop: {
            name: '',
            description: '',
            photo_url: ''
        },
        shopForm: false
    }
    componentDidMount() {
        this.getAllShops()
    }
    toggleShopForm = () => {
        this.setState({ showShopForm: !this.state.showShopForm })
    }
    handleChange = (event) => {
        const newShop = { ...this.state.newShop }
        newShop[event.target.name] = event.target.value
        this.setState({ newShop })
    }
    createShop = async (event) => {
        event.preventDefault()
        const response = await axios.post(`/api/shops`, this.state.newShop)
        this.setState({ newShop: { name: '', description: '', photo_url: '' } })
        this.getAllShops()
    }
    getAllShops = async () => {
        const response = await axios.get('/api/shops')
        this.setState({ shops: response.data.shops })
        console.log(this.state)
    }
    render() {
        return (
            <div>
                <button onClick={this.toggleShopForm}>new shop</button>
                {this.state.showShopForm ? <ShopForm handleChange={this.handleChange} createShop={this.createShop} newShop={this.state.newShop} /> : null}
                {this.state.shops.map((shop) => {
                    return (
                        <ShopCard shop={shop} />
                    )
                })}
            </div>
        );
    }
}

export default ShopList;