import React, { Component } from 'react';

class Footer extends Component {
    render() {
        console.log('footer render');
        return (
            <footer>
                <p>{this.props.txt}</p>
            </footer>
        );
    }
}

export default Footer;