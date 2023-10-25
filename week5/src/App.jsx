import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import OfficeInformation from './components/OfficeInfo'
import FoodPanda_Shop from './components/FoodPanda_Shop'
import Ubereats_Store from './components/Ubereats_Store'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <OfficeInformation
        imgLink="https://econ.ntpu.edu.tw/storage/images/ZlP7DHjLRh8IeahmFoT1EMxkmCgaxYtguN76FqiW.jpg"
        name="郭文忠 教授"
        officeHour="Thu. 12:00 - 14:00"
        email="guowc@gm.ntpu.edu.tw"
        phone="886-2-86741111 ext. 67156"
        office="社3F16"
      />

      {/* <FoodPanda_Shop
        imgLink="https://images.deliveryhero.io/image/fd-tw/LH/inlc-listing.jpg"
        title="丐幫滷味 (北大分舵)"
        foodType="小吃"
        fee="25"
      /> */}
      {/* <Ubereats_Store
        imgLink="https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC9kNzQ4NmRkMS03NWJmLTRhZjItYWRhYS0zMzJmZDk3Y2ZiYjkuanBlZw=="
        title="小巷子清燉牛肉麵"
        fee="15"
        deliveryTime="10–25"
      /> */}

      
    </>
  )
}

export default App
