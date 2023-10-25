import { Alert, Avatar, Backdrop, Paper, Stack, Typography } from "@mui/material";
import EmailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import * as React from 'react';

export default function OfficeInformation2({ imgLink, title, name, officeHour, email, phone, office }) {
    return (
        <>
            <Paper elevation={3} sx={{ p: 2, maxWidth: "500px", height: "700px" }}>
                <OutOfOffice/>
                <OfficeInfoHeader imgLink={imgLink} name={name} title={title} email={email} phone={phone} />
            </Paper>
        </>
    )
}

function OfficeInfoHeader({ name, title, imgLink, email, phone }) {
    return (
        <Stack direction="row" spacing={2}>
            <Avatar alt={name} src={imgLink} sx={{ width: 100, height: 100 }} />
            <Name_Email_Phone name={name} title={title} email={email} phone={phone} />
        </Stack>
    )
}

function Name_Email_Phone({ name, title, email, phone }) {
    return (
        <Stack direction="column" spacing={0}>
            <Typography variant="h4">
                {name} {title}
            </Typography>
            <Typography variant="body1" display="flex">
                <EmailIcon /> {email}
            </Typography>
            <Typography variant="body1" display="flex">
                <PhoneIcon /> {phone}
            </Typography>
        </Stack>
    )
}

function OutOfOffice() {

    const [open, setOpen] = React.useState(true);
    // const open = true;

    return (
        <Backdrop
            sx={{ color: '#fff', zIndex: 2 }}
            open={open}
            onClick={() => { setOpen(false) }}
        >
            <Alert onClose={() => { setOpen(false) }}>臨時有事，約3點回來</Alert>
        </Backdrop>

    )
}