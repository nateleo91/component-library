import React from "react"
import { storiesOf } from "@storybook/react"
import Thumbnail from "./Thumbnail"
import ThumbnailBlue from "./ThumbnailBlue"
import ThumbnailHorizontal from "./ThumbnailHorizontal"
import Thumbnailstatic from "./Thumbnailstatic"
import Inline from "./Inline"


storiesOf("Thumbnail", module)
.add("Block Vertical Transparent", () => (
   <Thumbnail image type="thumbnail" label="Apple Macbook Pro"/>
 ))
 .add("Block Vertical Blue", () => (
   <ThumbnailBlue image type="thumbnail" label="Apple Macbook Pro"/>
 ))
 .add("Block Horizontal", () => (
   <ThumbnailHorizontal imageHorizontal type="thumbnail" label="Apple Macbook Pro"/>
 ))
 .add("Block Horizontal static", () => (
   <Thumbnailstatic imageBeats horizontal type="thumbnail" label="Beats Solo 2 Ear Headphones - Black"/>
 ))
 .add("Inline", () => (
   <Inline imageInline label="Beats Solo2 On Ear HeadPhones - Black" description="Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lectus lorem nunc leifend laorevtr istique et congue. Vivamus adipiscin vulputate g nisl ut dolor ..."/>
 ))