import React, { Component } from 'react';

class ShopEditForm extends Component {
    state = {
        shop: {
            name: '',
            description: '',
            photo_url: ''
        }
    }
    render() {
        return (
            <div>
                <div>
                <form onSubmit={this.props.saveShop}>
                    <input onChange={this.props.handleChange} 
                            placeholder="name" type="text" 
                            name="name" value={this.props.shop.name} />
                    <input onChange={this.props.handleChange}
                            placeholder="description" type="text"
                            name="description" value={this.props.shop.description} />
                    <input onChange={this.props.handleChange}
                            placeholder="photo_url" type="text"
                            name="photo_url" value={this.props.shop.photo_url} />
                    <button>save</button>
                </form>
            </div>
            </div>
        );
    }
}

export default ShopEditForm;