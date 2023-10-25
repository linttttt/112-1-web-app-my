import { Stack, Typography, Box } from "@mui/material";





function Foodpanda_information({store,type,price,note}) {
    return (
        <Stack direction="column" spacing={2}>
            <Typography variant="h5">
                {store}
            </Typography>
            <Typography variant="body3">
                $$$,{type}
            </Typography>
            <Typography variant="body3">
                ${price}外送服務費｜{note}
            </Typography>
        </Stack>
    )
}

function Foodpanda_information_2({star,comment_num}) {
    return (
            <Typography variant="body3">
                {star}/5 ({comment_num})
            </Typography>
    )
}

export function Foodpanda_information_3({store,type,price,note,star,comment_num}){
    return (
        <Stack direction="row" spacing={0.5}>
            <Foodpanda_information store = {store} type = {type} price = {price} note = {note}/>
            <Foodpanda_information_2 star = {star} comment_num={comment_num}/>
        </Stack>
    )
}

export function Image ({image}){
    return(
        <Box sx={{ width: "300px", height: "120%" ,padding: "2px" }}>
            <img src = {image}
                alt = "not" width = "100%" height = "100%"/>
        </Box>    
    )
}

export function Foodpanda_information_4({store,type,price,note,star,comment_num,image}){
    return (
        <Box sx = {{width: "305px", height: "200%" ,border: "1px solid black"}}>
            <Stack direction="column" spacing={2}>
                <Image image={image} />
                <Foodpanda_information_3 store={store} type={type} price={price} note={note}
                    star={star} comment_num= {comment_num} />
            </Stack>
        </Box>
    )
}

//" https://images.deliveryhero.io/image/fd-tw/LH/inlc-listing.jpg"