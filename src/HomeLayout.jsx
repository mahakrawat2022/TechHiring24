import React from 'react'

import Heading from './component/Heading'
import Body from './component/Body'
import Heading2 from './component/Heading2'
import CircularLinks from './component/CircularLinks'
import ScrollBar from './component/ScrollBar'
import ThreeDivs from './component/ThreeDivs'
import Analytics from './component/Analytics'

function HomeLayout() {
  return (
    <div>
        <Heading/>
      <Body/>
      <Heading2/>
      <CircularLinks/>
      <ThreeDivs/>
      <Analytics/>
      <ScrollBar/>
      
    </div>
  )
}

export default HomeLayout
