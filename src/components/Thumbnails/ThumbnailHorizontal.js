import React from "react"
import "./Thumbnail.css"

const ThumbnailHorizontal = (props) => {
  let classList = []
  let types = ["thumbnail"]
  if (types.includes(props.type)) {
    classList.push(`thumbnail-${props.type}`)
  }
  if (props.image) {
   classList.push("image");
 }
  if (props.imageHorizontal) {
    classList.push("imageHorizontal")
  }
  
  if (props.imageBeats) {
     classList.push("imageBeats")
  }

  return (
    <div className="thumb-outer-horizontal">
      <div className={classList.join(" ")}></div>
      <div className="bottomText-horizontal">
        <div className="thumb-title">{props.label}</div>
        <div className="stars">
          &#9733; &#9733; &#9733; &#9733;{" "}
          <span className="starGrey">&#9733;</span>
        </div>
        <div className="price">
          $499 <span className="crossOut">$599</span>
        </div>
      </div>
    </div>
  )
}

export default ThumbnailHorizontal