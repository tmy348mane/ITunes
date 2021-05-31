import { Button } from "antd";
import React, { Component } from "react";
import "./Card.css";
import {Link} from "../node_modules/react-router-dom";

class Card extends Component {
  render() {
    return (
      <div className="cardContainer">
        <div className="card">
          <h3 className="title">{this.props.artistName}</h3>
         
          <img className="img" src={this.props.img} alt="Artist Image" />
          <h4 className="track">{this.props.trackName}</h4>
          <div className="emptybarOne"></div>
          <button className="preview" shape="round" onClick={(e)=>this.props.showPreview(e,this.props.id)} ><Link style={{ textDecoration: "none", color: "grey" }} to="/preview">Preview</Link></button>
          {/* <h4 className="short">{this.props.short}</h4> */}
          <div className="bar">
            <div className="emptybar"></div>
            <div className="filledbar"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
