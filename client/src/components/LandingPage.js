import React, { Component } from 'react';

class LandingPage extends Component {
    enter = () => {
        this.props.history.push('/shops')
    }
    render() {
        return (
            <div>
                <h3>Welcome to Dungeons & Taverns!</h3>
                <p>Are you a DM for your group and tired of making up town shops and npcs? Well worry no more! At the click of a button, an ENTIRE TOWN is generated, with a shop for each class, an npc with dialogues and a chance for a short quest, and the ability to add custom items!</p>
                <button onClick={this.enter}>ENTER</button>
            </div>
        );
    }
}

export default LandingPage;