// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Foodpanda_information_4 } from './components/Foodpanda'
import OfficeInformation2 from './components/OfficeInfo2'
// import OfficeInformation from './components/OfficeInfo'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      {/* <Foodpanda_information_4
        store='丐幫滷味'
        type='小吃'
        price='25'
        note='免外送服務'
        star='4.5'
        comment_num='100+'
        image="https://images.deliveryhero.io/image/fd-tw/LH/inlc-listing.jpg"
      /> */}
      <OfficeInformation2
        imgLink="https://econ.ntpu.edu.tw/storage/images/ZlP7DHjLRh8IeahmFoT1EMxkmCgaxYtguN76FqiW.jpg"
        name="郭文忠"
        title="教授"
        officeHour="Thu. 12:00 - 14:00"
        email="guowc@gm.ntpu.edu.tw"
        phone="886-2-86741111 ext. 67156"
        office="社3F16"
      />
    </>
  )
}

export default App
