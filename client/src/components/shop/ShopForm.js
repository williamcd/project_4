import React, { Component } from 'react'
import styled from 'styled-components'

class ShopForm extends Component {
    state = {
        shop: {
            name: '',
            description: '',
            photo_url: ''
        }
    }
    componentDidMount() {
        this.setState({ shop: this.props.newShop })
    }
    render() {
        return (
            <FormStyle>
                <form onSubmit={this.props.createShop}>
                    <InputStyle onChange={this.props.handleChange}
                        placeholder="name" type="text"
                        name="name" value={this.props.newShop.name} />
                    <br />
                    <InputStyle onChange={this.props.handleChange}
                        placeholder="photo_url" type="text"
                        name="photo_url" value={this.props.newShop.photo_url} />
                    <br />
                    <InputStyle onChange={this.props.handleChange}
                        placeholder="description" type="text"
                        name="description" value={this.props.newShop.description} />
                    <br />
                    <button>save</button><button onClick={this.props.cancel} >cancel</button>
                </form>
            </FormStyle>
        )
    }
}

export default ShopForm

const FormStyle = styled.div`
    width: 600px;
    height: 500px;
    text-align: center;
    font-family: Cinzel;
    text-decoration: none;
    margin: 50px;
    border: 1px solid black;
    font-size: 25px;
    img {
        height: 50%;
    }
`
const InputStyle = styled.input`
    width: 500px;
    height: 60px;
    font-size: 25px;
`