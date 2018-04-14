import React, { Component } from 'react'
import styled from 'styled-components'

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
                <FormStyle onSubmit={this.props.saveShop}>
                    <InputStyle onChange={this.props.handleChange} 
                            placeholder="name" type="text" 
                            name="name" value={this.props.shop.name} />
                    <br />
                    <InputStyle onChange={this.props.handleChange}
                            placeholder="description" type="text"
                            name="description" value={this.props.shop.description} />
                    <br />
                    <InputStyle onChange={this.props.handleChange}
                            placeholder="photo_url" type="text"
                            name="photo_url" value={this.props.shop.photo_url} />
                    <br />
                    <button onClick={this.props.saveShop}>save</button>
                    <button onClick={this.props.cancel}>cancel</button>
                </FormStyle>
            </div>
            </div>
        )
    }
}

export default ShopEditForm



const FormStyle = styled.div`
    text-align: center;
    font-family: Cinzel;
    text-decoration: none;
    width: 100%;
    height: 250px;
    border: 1px solid black;
    font-size: 25px;
`
const InputStyle = styled.input`
    width: 400px;
    height: 50px;
    border: none;
    border-bottom: 1px solid black;
`