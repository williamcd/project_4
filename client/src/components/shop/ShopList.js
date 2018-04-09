import React, { Component } from 'react';
import axios from 'axios'
import ShopCard from './ShopCard'

class ShopList extends Component {
    state = {
        shops: [],
        newShop: {
            name: '',
            description: '',
            photo_url: ''
        }
    }
    componentDidMount() {
        this.getAllShops()
    }
    createShop = async (event) => {
        event.preventDefault()
        const response = await axios.post(`/api/shops`)
        this.setState({ newShop: { name: '', description: '', photo_url: '' }})
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
                {this.state.shops.map((shop) => {
                    return (
                        <ShopCard shop={shop}/>
                    )
                })}
            </div>
        );
    }
}

export default ShopList;