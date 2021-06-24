import React from "react";
// import images from '../../images.jpg'
import "../cards/style.css";
import HomeScreen from "../../HomeScreen/homescreen";

function Card(props) {
  return (
    <div className="card-box">
      <img src={props.srcImg} alt="card-img" />
      <div className="card-div">
        <h3> {props.titleCard} </h3>
        <p>Image discraption</p>
      </div>
    </div>
  );
}
export default Card;
