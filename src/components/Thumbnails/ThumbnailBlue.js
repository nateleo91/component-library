import React from "react"
import "./Thumbnail.css"
import cart from "./cart_w.png"
import heart from "./heart_w.png"

const ThumbnailBlue = (props) => {
  let classList = []
  let types = ["thumbnail"]
  if (types.includes(props.type)) {
    classList.push(`thumbnail-${props.type}`)
  }
  if (props.image) {
    classList.push("image")
  }
  return (
    <div className="thumb-outer">
      <div className={classList.join(" ")}></div>
      <div className="belowImg">
        <div className="heartBIcon">
          <img src={heart} alt={heart} />
        </div>
        <div className="shoppingBIcon">
          <img src={cart} alt={cart} />
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

export default ThumbnailBlue