import React, { Component } from 'react';
import styled from 'styled-components'

class ItemEditForm extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.saveItem}>
                    <InputStyle placeholder="name" onChange={this.props.handleChange} value={this.props.item.name} name="name" />
                    <br />
                    <InputStyle placeholder="cost" onChange={this.props.handleChange} value={this.props.item.cost} name="cost" />
                    <br />
                    <InputStyle placeholder="category" onChange={this.props.handleChange} value={this.props.item.category} name="category" />
                    <br />
                    <ButtonStyle>save</ButtonStyle><ButtonStyle onClick={this.props.cancel} >cancel</ButtonStyle>
                </form>
            </div>
        );
    }
}

export default ItemEditForm;

const ButtonStyle = styled.button`
    width: 100px;
    height: 25px;
    font-size: 20px;
    padding: 0px;
`
const InputStyle = styled.input`
    margin-top: 5px;
    width: 90%;
    height: 40px;
    font-size: 30px;
    padding: 0px;
    border: none;
    border-bottom: 1px solid black;
`