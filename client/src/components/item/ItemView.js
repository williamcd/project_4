import React, { Component } from 'react'

class ItemView extends Component {
    state = {
        item: {}
    }
    componentDidMount() {
        this.setState({ item: this.props.item })
    }
    render() {
        return (
            <div>
                Item View
            </div>
        );
    }
}

export default ItemView
