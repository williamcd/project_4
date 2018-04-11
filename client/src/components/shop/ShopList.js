import React, { Component } from 'react'
import axios from 'axios'
import ShopCard from './ShopCard'
import ShopForm from './ShopForm'
import styled from 'styled-components'

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
        await axios.post(`/api/shops`, this.state.newShop)
        this.setState({ newShop: { name: '', description: '', photo_url: '' } })
        this.getAllShops()
        this.toggleShopForm()
    }
    getAllShops = async () => {
        const response = await axios.get('/api/shops')
        this.setState({ shops: response.data.shops })
    }
    render() {
        return (
            <div>
                <ListDiv>
                    {this.state.shops.map((shop, i) => {
                        return (
                            <ShopCard key={i} shop={shop} />
                        )
                    })}
                </ListDiv>
                {this.state.showShopForm
                    ?
                    <div>
                        <ShopForm cancel={this.toggleShopForm} handleChange={this.handleChange} createShop={this.createShop} newShop={this.state.newShop} />
                    </div>
                    :
                    <button onClick={this.toggleShopForm}>new shop</button>}

            </div>
        );
    }
}

export default ShopList

const ListDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`