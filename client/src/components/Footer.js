import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"

class Footer extends Component {
    render() {
        return (
            <FooterStyle>
                <img src="https://static1.squarespace.com/static/57ba0049e3df2876f5476403/t/5a0363b1085229909dec2171/1510172785357/linkedin-logo.png" />
                <img src="https://image.flaticon.com/icons/svg/25/25231.svg" />
                <img src="https://instagram-brand.com/wp-content/themes/ig-branding/assets/images/ig-logo-email.png" />
                <a href="https://fathomless-mesa-12165.herokuapp.com/"><button>Portfolio</button></a>
            </FooterStyle>
        );
    }
}

export default Footer

const FooterStyle = styled.div`
    border: 1px solid black;
    display: flex;
    background-color: yellow;
    background-image: url("http://www.niagaracc.suny.edu/i/culinary/backgrounds/woodgrain-footer.jpg");
    height: 149px;
    align-items: center;
    img {
        height: 75%;
        margin-left: 25px;
    }
`