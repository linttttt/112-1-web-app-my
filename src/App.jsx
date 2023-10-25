// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import teacher from './assets/teacher.json'
import './App.css'
import ImageAvatars from './components/ImageAvatars'
import { Avatar, Badge, Box, Stack, Typography } from '@mui/material'
import SimpleBadge from './components/SimpleBadge'
import MailIcon from '@mui/icons-material/Mail';
import SvgMaterialIcons from './components/SvgMaterialIcons';


function App() {
  // const [count, setCount] = useState(0)

  // let name = teacher.name
  // let info = teacher.specialty

  return (
    <>
      <Box sx={{ padding: '50px' }}>
        <Stack spacing={2}>
          <Typography variant='body1' gutterBottom={true}>
            台北市藥師公會推估我國每年至少300人死於「藥駕」所造成交通事故，高於111年酒駕事故死亡271人，而國人最常「藥駕」藥物為降血糖藥、安眠藥和肌肉鬆弛劑。交通部長王國材今於道安記者會表示，預計下個月跟相關醫學團體討論，像是哪些狀況吃這些藥會難以辨別環境，若有必要修法就會修法規範。
          </Typography>
          <Typography variant='body1'>
            王國材表示，現在道路交通管理處罰條例第35條有針對酒駕、毒駕或其他管制藥品規範，但針對醫師開的藥品，包括國人常服用的降血糖藥、安眠藥和肌肉鬆弛劑等，的確有可能影響開車。儘管相關單位將加強正確用藥觀念、家庭照顧，但仍可能會有疏忽者，後續會跟相關醫學團體討論，像是哪些狀況吃這些藥會難以辨別環境，若有必要修法就會修法規範。
          </Typography>
          <Typography variant='body1'>
            公共運輸及監理司長林福山則說，降血糖藥、安眠藥和肌肉鬆弛劑等可能降低注意力、嗜睡，過去都是仰賴門診跟藥師醫囑交代，隨著高齡人口增加，相關用藥對象也增加，但每個人用藥時間、劑量、頻率跟疾病特性都不同，未來會著重跟衛福部分層面處理。
          </Typography>
        </Stack>
      </Box>
    </>
  )
}

export default App
