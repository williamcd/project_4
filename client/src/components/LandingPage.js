import React, { Component } from 'react';
import styled from 'styled-components'

class LandingPage extends Component {
    enter = () => {
        this.props.history.push('/shops')
    }
    render() {
        return (
            <LandingStyle>
                <h3>Welcome to Dungeons & Taverns!</h3>
                <DescDiv>
                    <p>Are you a DM for your group and tired of making up town shops and npcs? Well worry no more! At the click of a button, an ENTIRE TOWN is generated, with a shop for each class, an npc with dialogues and a chance for a short quest, and the ability to add custom items!</p>
                </DescDiv>
                <button onClick={this.enter}>ENTER</button>
            </LandingStyle>
        );
    }
}

export default LandingPage;

const LandingStyle = styled.div`
    height: 65vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const DescDiv = styled.div`
    width: 50%;
    font-size: 20px;
`