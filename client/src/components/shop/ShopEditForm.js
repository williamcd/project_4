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
                            name="name" value={this.props.shop.name}
                            maxLength="50"
                            required />
                        <br />
                        <InputStyle onChange={this.props.handleChange}
                            placeholder="description" type="text"
                            name="description" value={this.props.shop.description}
                            maxLength="50"
                            required />
                        <br />
                        <InputStyle onChange={this.props.handleChange}
                            placeholder="photo_url" type="text"
                            name="photo_url" value={this.props.shop.photo_url}
                            required />
                        <br />
                        <SaveButton onClick={this.props.saveShop}>save</SaveButton>
                        <CancelButton onClick={this.props.cancel}>cancel</CancelButton>
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
    width: 90%;
    height: 50px;
    font-size: 35px;
    border: none;
    border-bottom: 1px solid black;
`
const SaveButton = styled.button`
    background-color: lightgreen;
`
const CancelButton = styled.button`
    background-color: red;
`