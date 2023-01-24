import React from "react"
import { storiesOf } from "@storybook/react"
import Emails from "./Emails"
import Select from "./Select"


storiesOf("Forms", module)

  //email
.add("Email", () => <Emails type="Email" />)
.add("Email Medium", () => <Emails medium type="Email" />)
.add("Email Large", () => <Emails large type="Email" />)

  //select
.add("Select Outline", () => (
  <Select outline type="select" label="Select" />
))
.add("Select Outline Medium", () => (
  <Select outline medium label="Select" type="select" />
))
.add("Select Outline Large", () => (
  <Select outline large label="Select" type="select" />
))
.add("Select", () => <Select type="select" label="Select" />)
.add("Select Medium", () => (
  <Select medium label="Select" type="select" />
))
.add("Select Large", () => (
  <Select large label="Select" type="select" />
))