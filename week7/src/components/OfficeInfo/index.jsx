import { Box, Stack, Typography } from "@mui/material";

export default function OfficeInformation({imgLink, name, officeHour, email, phone, office}) {
    return (
        <Stack direction="row" spacing={2}>
            <ImagePanel_fixedContent imgLink={imgLink} name={name} />
            <InfoPanel
                officeHour={officeHour}
                email={email}
                phone={phone}
                office={office}
            />
        </Stack>
    )
}



function InfoPanel({officeHour, email, phone, office}) {
    return (
        <>
            <Stack direction="column" spacing={2}>
                <InfoPanel_variableContent title="Office Hours" content={officeHour} />
                <InfoPanel_variableContent title="Email" content={email} />
                <InfoPanel_variableContent title="Phone" content={phone} />
                <InfoPanel_variableContent title="Office" content={office} />
            </Stack>
        </>
    )

}

function ImagePanel_fixedContent({imgLink, name}) {
    return (
        <Stack direction="column" spacing={2} alignItems="center">
            <Box sx={{ width: "200px", height: "100%" }}>
                <img src={imgLink} alt="image" width="100%" />
            </Box>
            <Typography variant="h6">
                {name}
            </Typography>
        </Stack>
    )
}

function InfoPanel_variableContent({ title, content }) {
    return (
        <Stack direction="column" alignItems="center">
            <Typography variant="h6">
                {title}
            </Typography>
            <Typography variant="body1">
                {content}
            </Typography>
        </Stack>
    )
}

// function ImagePanel_fixedContent() {
//     return (
//       <Stack direction="column" spacing={2}>
//           <img src="https://econ.ntpu.edu.tw/storage/images/ZlP7DHjLRh8IeahmFoT1EMxkmCgaxYtguN76FqiW.jpg" 
//           alt="image" width="100%" height="100%" />
//           <Typography variant="h6">
//               郭文忠 教授
//           </Typography>
//       </Stack>
//     )
// }