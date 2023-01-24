import React from "react"
import "./Thumbnail.css"
import Cart from "../Button/Button.js"
import Favorite from "../Button/Button.js"

const Inline = (props) => {
  let classList = []
  if (props.imageHorizon) {
    classList.push("imageHorizon")
  }
  if (props.imageBose) {
    classList.push("imageBeats")
  }
  if (props.imageInline) {
    classList.push("imageInline")
  }

  return (
    <div className="thumb-outer-inline">
      <div className={classList.join(" ")}>
        <span className="hot">HOT</span>
      </div>
      <div className="bottomText-inline">
        <div className="thumb-title">{props.label}</div>
        <div className="stars">
          &#9733; &#9733; &#9733; &#9733;
          <span className="starGrey">&#9733;</span>{" "}
          <span className="inlineRev">0 reviews</span>
          <button className="inlineBlue">Submit a review</button>
        </div>
        <div className="price">
          $499 <span className="crossOut">$599</span>
        </div>
        <p className="description">{props.description}</p>
        <div className="shopButtons">
          <div className="shopping">
            <Cart type="cart" label="Add to Cart" />
          </div>
          <div className="like">
            <Favorite type="heart" small />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Inline