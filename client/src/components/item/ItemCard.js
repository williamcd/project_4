import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ItemCard extends Component {
    state= {
        item: {}
    }
    componentDidMount() {
        this.setState({ item: this.props.item })
    }
    render() {
        return (
            <div>
                <Link to="#">
                    <h1>{this.state.item.name}</h1>
                </Link>
                <p>{this.state.item.description}</p>
            </div>
        );
    }
}

export default ItemCard
