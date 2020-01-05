import React, { Component } from 'react';

class Houses extends Component {
    render() { 
        const { houseName, imgSrc, founder, element } = this.props.house;
        return (
            <div className="house">
                <h1>{ houseName }</h1>
                <img src={imgSrc} alt={houseName}/>
                <h3>Founder: {founder}</h3>
                <h3>Element: {element}</h3>
            </div>
        );
    }
}

export default Houses;
