import React, { Component } from 'react'
import styled from 'styled-components'

class Footer extends Component {
    render() {
        return (
            <FooterStyle>
                <h3>About me:</h3>
                <ul>
                    <li>GitHub</li>
                    <li>LinkdIN</li>
                    <li>Instagram</li>
                </ul>
            </FooterStyle>
        );
    }
}

export default Footer

const FooterStyle = styled.div`
    border: 1px solid black;
    background-color: yellow;
    height: 150px;
`