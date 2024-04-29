import { Avatar, Box } from "@mui/material"

const IntroductionImage = () => {
    return (
        <Box sx={{ position: 'relative', width: '300px', height: '300px' }}>
            <Avatar src={"src/assets/hero-image.jpg"} alt="hero image" sx={{ width: '100%', height: '100%', objectFit: 'cover', border: '5px solid white', borderRadius: '50%' }} />
        </Box>
    )
}

export default IntroductionImage