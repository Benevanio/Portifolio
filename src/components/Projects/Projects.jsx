import React, { Component } from 'react'
import './Project.scss'
class Projects extends Component {
    render() {
        return(
            <div className = "Hero__IMG" >
                <div className="Heading">
                    <h1>
                        {this.props.Heading}
                    </h1>
                    <p>
                        {this.props.text}
                    </p>
                </div>
            </div>
        )
    }
  
}

export default Projects