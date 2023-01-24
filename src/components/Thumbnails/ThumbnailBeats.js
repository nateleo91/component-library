import React from "react"
import "./Thumbnail.css"

const ThumbnailBeats = (props) => {
  let classList = []
  let types = ["thumbnail"]
  if (types.includes(props.type)) {
    classList.push(`thumbnail-${props.type}`)
  }
  if (props.image) {
    classList.push("image")
  }
  if (props.imageBeats) {
     classList.push("imageBeats")
  }

  return (
    <div className="thumb-outer-horizontal-beats">
      <div className={classList.join(" ")}></div>
      <div className="bottomText-horizontal-beats">
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

export default ThumbnailBeats