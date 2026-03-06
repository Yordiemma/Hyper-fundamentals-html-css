import  { Component } from 'react'
import "./Card.css"
export default class Card extends Component {
  render() {
    return (
      <div className={`container ${this.props.color}`}>
                <h3>AutoMarket</h3>
            <p>Name: { this.props.name}</p>
            <p>Email: {this.props.email} </p>
            <p>Websit: {this.props.websit}</p>

            </div>   
            
      
    )
  }
}
