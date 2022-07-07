import React from 'react'
import Events from './event/Events'
// import Footer from './Footer/Footer'
import Forms from './forms/Forms'
import Hooks from './Hooks/Hooks'
// import Msg from './msg/Msg'

const App = () => {
  return (
    <div>
      {/* <Msg/> */}
      <Events/>
      <Hooks/>
      <Forms/>
      {/* <Footer/> */}
    </div>
  )
}

export default App