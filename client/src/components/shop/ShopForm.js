import React, { Component } from 'react'

class ShopForm extends Component {
    state = {
        shop: {
            name: '',
            description: '',
            photo_url: ''
        }
    }
    componentDidMount() {
        this.setState({ shop: this.props.newShop})
    }
    render() {
        return (
            <div>
                <form onSubmit={this.props.createShop}>
                    <input onChange={this.props.handleChange} 
                            placeholder="name" type="text" 
                            name="name" value={this.props.newShop.name} />
                    <input onChange={this.props.handleChange}
                            placeholder="description" type="text"
                            name="description" value={this.props.newShop.description} />
                    <input onChange={this.props.handleChange}
                            placeholder="photo_url" type="text"
                            name="photo_url" value={this.props.newShop.photo_url} />
                    <button>save</button>
                </form>
            </div>
        );
    }
}

export default ShopForm