import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box, Link, Typography } from "@mui/material";

const IntroductionText = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Typography sx={{ fontWeight: 'bold', fontSize: '80px' }}>Front-End React</Typography>
            <Box sx={{ display: 'flex' }}>
                <Typography sx={{ fontWeight: 'bold', fontSize: '80px' }}>Developer</Typography>
                <span style={{ marginLeft: '20px', marginTop: '15px' }}>
                    <img src="./public/waving.png" alt="Waving hand" style={{ width: '84px', height: '84px' }} />
                </span>
            </Box>
            <Box>
                <Typography>
                    Hi, I'm Mahdi Touiserkani. A passionate Front-end React Developer based in Tehran, Iran. 📍
                </Typography>
            </Box>
            <Box>
                <Link href="https://www.linkedin.com/in/mahdi-touiser/" target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon fontSize="large" />
                </Link>
                <Link href="https://github.com/MahdiTouiser" target="_blank" rel="noopener noreferrer">
                    <GitHubIcon fontSize="large" />
                </Link>
            </Box>
        </Box >)
}

export default IntroductionText