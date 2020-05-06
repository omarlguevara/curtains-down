import React from "react"
import Enzyme, { mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import TheatersIndexPane from "./TheatersIndexPane"
Enzyme.configure({ adapter: new Adapter() })
import { BrowserRouter } from 'react-router-dom'

describe("TheatersIndexPane", () => {
  let wrapper
  let testTheaters

  beforeEach(() => {
    testTheaters = [
      { id: 1, title: "WonderWoman" },
      { id: 2, title: "Easy A" },
      { id: 3, title: "V for Vendetta" }
    ]
    wrapper = mount(
      <BrowserRouter>
      <TheatersIndexPane theatersList={testTheaters} />
      </BrowserRouter>
    )
  })

  it("should render as many elements as number of theaters received via props", () => {
    expect(wrapper.find("h4")).toHaveLength(3)
  })
})
