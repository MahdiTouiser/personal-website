import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box, Link, Typography } from "@mui/material";

const IntroductionText = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'start' }}>
            <Typography sx={{ fontWeight: 'bold', fontSize: '80px' }}>Front-End React</Typography>
            <Box sx={{ display: 'flex' }}>
                <Typography sx={{ fontWeight: 'bold', fontSize: '80px' }}>Developer</Typography>
                <span style={{ marginLeft: '20px', marginTop: '15px' }}>
                    <img src={'/src/assets/waving.png'} alt="Waving hand" style={{ width: '84px', height: '84px' }} />
                </span>
            </Box>
            <Box sx={{ marginLeft: '5px', textAlign: 'left' }}>
                <Typography sx={{ fontSize: '20px' }}>
                    Hi, I'm Mahdi Touiserkani.
                </Typography>
                <Typography sx={{ fontSize: '20px' }}>
                    A passionate Front-end React Developer based in Tehran, Iran. 📍
                </Typography>
            </Box>
            <Box sx={{ marginTop: '15px' }}>
                <Link href="https://www.linkedin.com/in/mahdi-touiser/" target="_blank" rel="noopener noreferrer" sx={{ color: 'inherit', transition: 'color 0.3s', marginRight: '10px', '&:hover': { textDecoration: 'none', color: 'white' } }}>
                    <LinkedInIcon fontSize="large" />
                </Link>
                <Link href="https://github.com/MahdiTouiser" target="_blank" rel="noopener noreferrer" sx={{ color: 'inherit', transition: 'color 0.3s', '&:hover': { textDecoration: 'none', color: 'white' } }}>
                    <GitHubIcon fontSize="large" />
                </Link>
            </Box>
        </Box >)
}

export default IntroductionText