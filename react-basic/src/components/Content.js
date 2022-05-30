import React, {Component} from "react";

class Content extends Component {
    render() {
        console.log('content render');
        return(
            <div>
                <p>{this.props.title} {this.props.desc}</p>
            </div>
        );
    }
}

export default Content;