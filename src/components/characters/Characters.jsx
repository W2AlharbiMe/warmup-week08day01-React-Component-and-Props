import React, { Component } from 'react';
class Characters extends Component {
    render() { 
        const { charName, imgSrc } = this.props.character;
        return ( 
            <div className="char">
                <h1>{charName}</h1>
                <img src={imgSrc} alt={charName} />
                <h3>House: {this.props.house}</h3>
            </div>
            );
    }
}

export default Characters;
