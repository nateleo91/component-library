import React from "react"
import "./Thumbnail.css"
import cart from "./cart_b.png"
import heart from "./heart_b.png"

const Thumbnail = (props) => {
  let classList = []
  let types = ["thumbnail"]
  if (types.includes(props.type)) {
    classList.push(`thumbnail-${props.type}`)
  }
  if (props.image) {
    classList.push("image")
  }
  if (props.horizon) {
    classList.pop("thumb-outer")
    classList.push("displayHorizon")
  }

  return (
    <div className="thumb-outer">
      <div className={classList.join(" ")}></div>
      <div className="belowImg">
        <div className="heartIcon">
          <img src={heart} alt="heart" />
        </div>
        <div className="shoppingIcon">
          <img src={cart} alt="cart" />
        </div>
      </div>
      <div className="bottomText">
        <div className="thumb-title">{props.label}</div>
        <div className="stars">
          &#9733; &#9733; &#9733; &#9733;{" "}
          <span className="starGrey">&#9733;</span>
        </div>
        <div className="price">
          $499 <span className="cross">$599</span>
        </div>
      </div>
    </div>
  )
}

export default Thumbnail